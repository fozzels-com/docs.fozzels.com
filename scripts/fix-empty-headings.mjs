#!/usr/bin/env node
/**
 * Repair the empty headings left by the Freshdesk import.
 *
 * The import turned many headings into a bare marker line (`##`) with the
 * heading text on the next line, sometimes with an image in between:
 *
 *   ##                      ##
 *   3\. Verifying Status    ![](/img/...)
 *                           **1\. Limits and Capacity**
 *
 * Docusaurus renders that as an empty heading plus a normal paragraph, so the
 * real heading is missing from the "On this page" list, and translators fixed
 * it in some locales but not in others.
 *
 * For each bare marker:
 * - followed by a short text line (optionally after one image line): the
 *   marker is removed and the text line becomes the heading at that level,
 *   with a wrapping `**…**` removed. The image keeps its position.
 * - followed by a blank line, an image only, or another heading: the marker is
 *   removed and nothing else changes.
 * A heading that holds only an image (`### ![](/img/...)`) is the same import
 * artefact and is treated as a bare marker followed by that image.
 * Also collapses `****Title****` (a doubled bold marker) in headings.
 *
 * Runs on docs/ and every i18n/<locale>/ docs folder, so all locales get the
 * same structure. Code blocks are left alone. Lines that do not look like a
 * heading (bullet lists, tables, quotes, HTML, longer than 120 characters) are not
 * promoted; they are listed so they can be checked by hand.
 *
 * Usage: node scripts/fix-empty-headings.mjs [--dry-run]
 */

import {readFileSync, writeFileSync, readdirSync, statSync, existsSync} from 'node:fs';
import {join} from 'node:path';

const dryRun = process.argv.includes('--dry-run');

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

const roots = ['docs'];
for (const locale of readdirSync('i18n')) {
  const dir = join('i18n', locale, 'docusaurus-plugin-content-docs', 'current');
  if (existsSync(dir)) roots.push(dir);
}

const EMPTY = /^(#{1,6})\s*$/;
const IMAGE_ONLY = /^(#{1,6})\s*(!\[[^\]]*\]\([^)]*\))\s*$/;
// A numbered line ("3. Foo") is allowed: in English these are escaped
// ("3\. Foo"), and some translators dropped the backslash.
const NOT_A_HEADING = /^\s*([-*+]\s|>|\||<|```)/;

let promoted = 0;
let removed = 0;
let changedFiles = 0;
const skipped = [];

for (const file of roots.flatMap(walk)) {
  const text = readFileSync(file, 'utf8');
  const fm = text.match(/^---\n[\s\S]*?\n---\n/);
  const head = fm ? fm[0] : '';
  const lines = text.slice(head.length).split('\n');
  const out = [];
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('```')) inCode = !inCode;
    const m = !inCode && (line.match(EMPTY) || line.match(IMAGE_ONLY));
    if (!m) {
      out.push(inCode ? line : line.replace(/^(#{1,6} .*?)\*\*\*\*(.+?)\*\*\*\*/, '$1**$2**'));
      continue;
    }

    let j = i + 1;
    let image = m[2] ?? null;
    if (!image && lines[j]?.startsWith('![')) image = lines[j++];
    const next = lines[j] ?? '';
    const promotable =
      next.trim() && !next.startsWith('#') && !next.startsWith('![') && !NOT_A_HEADING.test(next) && next.length <= 120;

    if (promotable) {
      const title = next.trim().replace(/^\*\*(.+)\*\*$/, '$1');
      if (image) out.push(image, '');
      out.push(`${m[1]} ${title}`);
      i = j;
      promoted++;
    } else {
      if (image) out.push(image);
      if (next.trim() && !next.startsWith('#') && !next.startsWith('![')) skipped.push(`${file}:${i + 1}: ${next.slice(0, 80)}`);
      removed++;
      // Drop the marker; a following blank line is kept as the separator.
      if (image) i = j - 1;
    }
  }

  const result = head + out.join('\n');
  if (result !== text) {
    changedFiles++;
    if (!dryRun) writeFileSync(file, result);
  }
}

console.log(`${dryRun ? '[dry run] ' : ''}${changedFiles} files: ${promoted} headings repaired, ${removed} empty markers removed`);
if (skipped.length) {
  console.log('Not promoted (check by hand):');
  for (const s of skipped) console.log(`  ${s}`);
}
