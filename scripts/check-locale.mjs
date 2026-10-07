#!/usr/bin/env node
/**
 * Check that a locale's translated docs mirror the English docs structurally.
 *
 * For every file in docs/ the translated copy under
 * i18n/<locale>/docusaurus-plugin-content-docs/current/ must exist, keep the
 * same frontmatter keys and the same id/slug/sidebar_position, and keep the
 * same images, link targets, code fences and heading levels. A very short or
 * very long translation is flagged too, because it usually means a translator
 * skipped or duplicated a section. Files that exist only in the locale are
 * reported as extra.
 *
 * Exits with status 1 when anything is off, so it can gate a commit.
 *
 * Usage: node scripts/check-locale.mjs <locale>   (e.g. fr)
 */

import {readFileSync, existsSync, readdirSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';

const locale = process.argv[2];
if (!locale) {
  console.error('Usage: node scripts/check-locale.mjs <locale>');
  process.exit(2);
}

const SRC = 'docs';
const DST = join('i18n', locale, 'docusaurus-plugin-content-docs', 'current');

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function splitFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  return m ? [m[1], text.slice(m[0].length)] : [null, text];
}

function fmValue(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*(?:\\n  .*)*)`, 'm'));
  if (!m) return null;
  // Compare the YAML value, not its layout: `slug: >-` folded onto the next
  // line and quoted or plain scalars all mean the same string.
  return m[1]
    .replace(/^[>|]-?\s*/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(['"])(.*)\1$/, '$2');
}

function fmKeys(fm) {
  return [...fm.matchAll(/^(\w+):/gm)].map((m) => m[1]).sort().join(',');
}

function all(text, re) {
  return [...text.matchAll(re)].map((m) => m[1]).sort().join('\n');
}

function headingLevels(body) {
  return body
    .split('\n')
    .filter((l) => /^#{1,6} /.test(l))
    .map((l) => l.split(' ')[0])
    .join(',');
}

const problems = [];
const sources = walk(SRC).map((f) => relative(SRC, f));

for (const rel of sources) {
  const target = join(DST, rel);
  if (!existsSync(target)) {
    problems.push(`missing      ${rel}`);
    continue;
  }
  const a = readFileSync(join(SRC, rel), 'utf8');
  const b = readFileSync(target, 'utf8');

  if (rel.endsWith('.json')) {
    const ja = JSON.parse(a);
    const jb = JSON.parse(b);
    if (ja.position !== jb.position || ja.link?.slug !== jb.link?.slug) {
      problems.push(`category     ${rel}: position or slug differs`);
    }
    continue;
  }

  const [fa, ba] = splitFrontmatter(a);
  const [fb, bb] = splitFrontmatter(b);
  if (fb === null) {
    problems.push(`frontmatter  ${rel}: missing or invalid`);
    continue;
  }
  for (const key of ['id', 'slug', 'sidebar_position']) {
    if (fmValue(fa, key) !== fmValue(fb, key)) problems.push(`frontmatter  ${rel}: ${key} differs`);
  }
  if (fmKeys(fa) !== fmKeys(fb)) problems.push(`frontmatter  ${rel}: keys differ`);

  const checks = {
    images: /!\[[^\]]*\]\(([^)]+)\)/g,
    'html images': /<img[^>]*src="([^"]+)"/g,
    links: /(?<!!)\[[^\]]*\]\(([^)]+)\)/g,
  };
  for (const [name, re] of Object.entries(checks)) {
    if (all(ba, re) !== all(bb, re)) problems.push(`${name.padEnd(12)} ${rel}: targets differ`);
  }
  if ((ba.match(/```/g) || []).length !== (bb.match(/```/g) || []).length) {
    problems.push(`code fences  ${rel}: count differs`);
  }
  if (headingLevels(ba) !== headingLevels(bb)) problems.push(`headings     ${rel}: levels differ`);

  const ratio = bb.length / Math.max(1, ba.length);
  if (ratio < 0.85 || ratio > 1.6) problems.push(`length       ${rel}: ratio ${ratio.toFixed(2)}`);
}

if (existsSync(DST)) {
  for (const f of walk(DST)) {
    const rel = relative(DST, f);
    if (!existsSync(join(SRC, rel))) problems.push(`extra        ${rel}`);
  }
}

console.log(`${locale}: ${sources.length} source files, ${problems.length} problem(s)`);
for (const p of problems) console.log(`  ${p}`);
process.exit(problems.length ? 1 : 0);
