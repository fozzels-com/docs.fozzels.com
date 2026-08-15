#!/usr/bin/env node
/**
 * Rebuild .translation-cache.json from what is already on disk.
 *
 * The cache is not committed, so a fresh checkout makes translate.mjs think
 * every article is new and re-translate all of docs/ into all four locales.
 * This marks each English file whose locale copy already exists as up to date,
 * so a following `translate.mjs` run only touches genuinely new or edited docs.
 *
 * Run it after cloning, or after an import that only added articles.
 *
 * Usage: node scripts/seed-translation-cache.mjs
 */

import {createHash} from 'node:crypto';
import {readFileSync, writeFileSync, existsSync, readdirSync, statSync} from 'node:fs';
import {join, relative, extname} from 'node:path';

const DOCS_DIR = 'docs';
const CACHE_FILE = '.translation-cache.json';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const locales = existsSync('i18n') ? readdirSync('i18n') : [];
const cache = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, 'utf8')) : {};
let seeded = 0;
let pending = 0;

for (const file of walk(DOCS_DIR).filter((f) => ['.md', '.mdx', '.json'].includes(extname(f)))) {
  const relPath = relative(DOCS_DIR, file);
  const hash = createHash('sha256').update(readFileSync(file, 'utf8')).digest('hex');
  for (const locale of locales) {
    const target = join('i18n', locale, 'docusaurus-plugin-content-docs', 'current', relPath);
    if (existsSync(target)) {
      cache[`${locale}:${relPath}`] = hash;
      seeded++;
    } else {
      pending++;
      console.log(`untranslated: [${locale}] ${relPath}`);
    }
  }
}

writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
console.log(`\nSeeded ${seeded} cache entr(ies). ${pending} file(s) still need translating.`);
