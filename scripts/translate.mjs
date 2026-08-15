#!/usr/bin/env node
/**
 * AI translation for the Fozzels Help Center.
 *
 * Walks docs/ (the English source of truth) and generates localized copies under
 * i18n/<locale>/docusaurus-plugin-content-docs/current/, translating them with Claude.
 *
 * Only human-readable frontmatter fields are translated; slugs, ids, sidebar_position,
 * code blocks, image paths and MDX/JSX are preserved. A hash cache skips files whose
 * English source has not changed since the last run.
 *
 * ANTHROPIC_API_KEY comes from the environment or from .env, like the importer's
 * Freshdesk credentials. TRANSLATE_MODEL picks the model.
 *
 * Usage:
 *   node scripts/translate.mjs                 # all target locales
 *   node scripts/translate.mjs --locale de
 *   node scripts/translate.mjs --force         # ignore the cache
 */

import Anthropic from '@anthropic-ai/sdk';
import matter from 'gray-matter';
import {createHash} from 'node:crypto';
import {readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync} from 'node:fs';
import {dirname, join, relative, extname} from 'node:path';

const DOCS_DIR = 'docs';
const CACHE_FILE = '.translation-cache.json';
const TRANSLATABLE_FRONTMATTER = ['title', 'description', 'sidebar_label'];

/** @type {Record<string, {name: string, notes: string}>} */
const LOCALES = {
  de: {name: 'German', notes: 'Use the formal register (Sie).'},
  nl: {name: 'Dutch', notes: 'Use natural, professional Dutch.'},
  es: {name: 'Spanish', notes: 'Use neutral European Spanish.'},
  'pt-BR': {
    name: 'Brazilian Portuguese',
    notes: 'Use the informal register (você). Keep prices in Euro (€) and dates as DD/MM/YYYY.',
  },
};

// Fall back to .env so the key never has to be typed on the command line.
if (!process.env.ANTHROPIC_API_KEY && existsSync('.env')) {
  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const model = process.env.TRANSLATE_MODEL || 'claude-sonnet-5';
const args = process.argv.slice(2);
const force = args.includes('--force');
const localeArg = args.includes('--locale') ? args[args.indexOf('--locale') + 1] : null;
const targetLocales = localeArg ? [localeArg] : Object.keys(LOCALES);

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is not set.');
  process.exit(1);
}

const client = new Anthropic();

/** Recursively collect files under a directory. */
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...walk(full));
    } else {
      out.push(full);
    }
  }
  return out;
}

function sha256(text) {
  return createHash('sha256').update(text).digest('hex');
}

function loadCache() {
  if (existsSync(CACHE_FILE)) {
    return JSON.parse(readFileSync(CACHE_FILE, 'utf8'));
  }
  return {};
}

function targetPathFor(locale, relPath) {
  return join('i18n', locale, 'docusaurus-plugin-content-docs', 'current', relPath);
}

/** Translate a chunk of Markdown/MDX body text. */
async function translateBody(body, locale) {
  if (!body.trim()) {
    return body;
  }
  const {name, notes} = LOCALES[locale];
  const message = await client.messages.create({
    model,
    max_tokens: 8192,
    system:
      `You are a professional technical translator. Translate the given Markdown/MDX from English to ${name}. ${notes}\n` +
      'Rules:\n' +
      '- Translate only human-readable prose.\n' +
      '- Do NOT translate or alter: code blocks, inline code, URLs, image paths, HTML/JSX tags and their attributes, ' +
      'admonition markers (:::note, :::tip, :::warning), frontmatter, or Markdown link targets.\n' +
      '- Preserve all Markdown structure, whitespace and line breaks exactly.\n' +
      '- Return ONLY the translated document with no explanation and no code fence around the whole output.',
    messages: [{role: 'user', content: body}],
  });
  return message.content.map((block) => (block.type === 'text' ? block.text : '')).join('');
}

/** Translate whitelisted frontmatter string fields. */
async function translateFrontmatter(data, locale) {
  const toTranslate = TRANSLATABLE_FRONTMATTER.filter(
    (key) => typeof data[key] === 'string' && data[key].trim(),
  );
  if (toTranslate.length === 0) {
    return data;
  }
  const {name, notes} = LOCALES[locale];
  const message = await client.messages.create({
    model,
    max_tokens: 1024,
    system:
      `Translate the JSON string values from English to ${name}. ${notes} ` +
      'Return ONLY a JSON object with the same keys and translated values. Do not add keys.',
    messages: [
      {role: 'user', content: JSON.stringify(Object.fromEntries(toTranslate.map((k) => [k, data[k]])))},
    ],
  });
  const raw = message.content.map((block) => (block.type === 'text' ? block.text : '')).join('');
  const translated = JSON.parse(raw.replace(/^```json\s*|\s*```$/g, ''));
  return {...data, ...translated};
}

/** Translate a _category_.json sidebar file (label / link.title). */
async function translateCategoryJson(source, locale) {
  const json = JSON.parse(source);
  const {name, notes} = LOCALES[locale];
  const fields = {};
  if (typeof json.label === 'string') {
    fields.label = json.label;
  }
  if (json.link && typeof json.link.title === 'string') {
    fields.title = json.link.title;
  }
  if (Object.keys(fields).length === 0) {
    return source;
  }
  const message = await client.messages.create({
    model,
    max_tokens: 512,
    system: `Translate the JSON string values from English to ${name}. ${notes} Return ONLY a JSON object with the same keys.`,
    messages: [{role: 'user', content: JSON.stringify(fields)}],
  });
  const raw = message.content.map((block) => (block.type === 'text' ? block.text : '')).join('');
  const translated = JSON.parse(raw.replace(/^```json\s*|\s*```$/g, ''));
  if (translated.label !== undefined) {
    json.label = translated.label;
  }
  if (translated.title !== undefined && json.link) {
    json.link.title = translated.title;
  }
  return JSON.stringify(json, null, 2);
}

async function run() {
  const cache = loadCache();
  const files = walk(DOCS_DIR).filter((f) => ['.md', '.mdx', '.json'].includes(extname(f)));
  let translated = 0;
  let skipped = 0;

  for (const locale of targetLocales) {
    if (!LOCALES[locale]) {
      console.error(`Unknown locale: ${locale}`);
      continue;
    }
    for (const file of files) {
      const relPath = relative(DOCS_DIR, file);
      const source = readFileSync(file, 'utf8');
      const cacheKey = `${locale}:${relPath}`;
      const hash = sha256(source);
      const target = targetPathFor(locale, relPath);

      if (!force && cache[cacheKey] === hash && existsSync(target)) {
        skipped++;
        continue;
      }

      console.log(`[${locale}] ${relPath}`);
      let output;
      if (extname(file) === '.json') {
        output = await translateCategoryJson(source, locale);
      } else {
        const parsed = matter(source);
        const data = await translateFrontmatter(parsed.data, locale);
        const body = await translateBody(parsed.content, locale);
        output = matter.stringify(body, data);
      }

      mkdirSync(dirname(target), {recursive: true});
      writeFileSync(target, output);
      cache[cacheKey] = hash;
      writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
      translated++;
    }
  }

  console.log(`\nDone. Translated ${translated} file(s), skipped ${skipped} unchanged.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
