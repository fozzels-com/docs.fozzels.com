#!/usr/bin/env node
/**
 * Add native-language search keywords to a locale's translated articles.
 *
 * Translations keep English product nouns ("Content Flow", "Image Flow",
 * "Batch List"), so a reader searching the native word ("flux de contenu")
 * matches nothing. This adds a `keywords` frontmatter list with the native
 * aliases, the same approach as the de/nl/es/pt-BR keywords added on
 * 2026-08-03.
 *
 * A term is only tagged when the English product term appears in the
 * translated title or description, not anywhere in the body. Tagging on the
 * body put an alias on most articles, which made it useless for ranking.
 *
 * Only articles without a `keywords` key are touched, so running it twice or
 * on a locale that already has keywords changes nothing. Metadata only: the
 * title, slug, id and body stay unchanged.
 *
 * Usage: node scripts/add-search-keywords.mjs <locale> [--dry-run]
 */

import {readFileSync, writeFileSync, readdirSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';

/**
 * English product term (as a regex on title + description) → native aliases.
 * Order matters: more specific terms first, so "Content-Workflow" is not
 * also counted as "Content Flow".
 */
const GLOSSARY = {
  fr: [
    [/\bvideo[- ]?flows?\b/i, ['flux vidéo']],
    [/\bimage[- ]?flows?\b/i, ["flux d'images"]],
    [/\bcontent[- ]flows?\b/i, ['flux de contenu']],
    [/\bworkflows?\b/i, ['flux de travail']],
    [/\bbatch[- ]?lists?\b/i, ['liste des lots']],
  ],
  it: [
    [/\bvideo[- ]?flows?\b/i, ['flusso video']],
    [/\bimage[- ]?flows?\b/i, ['flusso di immagini']],
    [/\bcontent[- ]flows?\b/i, ['flusso di contenuti']],
    [/\bworkflows?\b/i, ['flusso di lavoro']],
    [/\bbatch[- ]?lists?\b/i, ['elenco dei batch']],
  ],
};

const [locale, ...rest] = process.argv.slice(2);
const dryRun = rest.includes('--dry-run');
if (!GLOSSARY[locale]) {
  console.error(`Usage: node scripts/add-search-keywords.mjs <${Object.keys(GLOSSARY).join('|')}> [--dry-run]`);
  process.exit(2);
}

const DIR = join('i18n', locale, 'docusaurus-plugin-content-docs', 'current');

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

/**
 * Read a frontmatter scalar, including the folded `>-` form.
 */
function fmValue(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*(?:\\n  .*)*)`, 'm'));
  return m ? m[1].replace(/^[>|]-?\s*/, '').replace(/\s+/g, ' ').trim() : '';
}

function yamlItem(value) {
  return value.includes("'") ? `"${value}"` : value;
}

let tagged = 0;
for (const file of walk(DIR)) {
  const text = readFileSync(file, 'utf8');
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m || /^keywords:/m.test(m[1])) continue;

  let haystack = `${fmValue(m[1], 'title')} ${fmValue(m[1], 'description')}`;
  const keywords = [];
  for (const [term, aliases] of GLOSSARY[locale]) {
    if (!term.test(haystack)) continue;
    haystack = haystack.replace(new RegExp(term.source, 'gi'), ' ');
    for (const alias of aliases) if (!keywords.includes(alias)) keywords.push(alias);
  }
  if (!keywords.length) continue;

  tagged++;
  console.log(`${relative(DIR, file)}: ${keywords.join(', ')}`);
  if (dryRun) continue;
  const fm = `${m[1]}\nkeywords:\n${keywords.map((k) => `- ${yamlItem(k)}`).join('\n')}`;
  writeFileSync(file, `---\n${fm}\n---\n${text.slice(m[0].length)}`);
}
console.log(`${locale}: ${tagged} article(s) ${dryRun ? 'would be ' : ''}tagged`);
