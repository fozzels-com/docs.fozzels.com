#!/usr/bin/env node
/**
 * One-off formatting cleanup for already-imported articles.
 *
 * Fixes two Freshdesk-import artifacts, in place, without re-importing:
 *   1. Bold "definition" lines that Freshdesk left indented (>=4 spaces), which
 *      Markdown renders as a code block, so **Term** shows literal asterisks.
 *      -> dedent them.
 *   2. Runs of "**Term**: description" lines -> a single clean bullet list
 *      (an "info area" / definition list), grouped even across blank lines.
 *
 * Usage: node scripts/fix-formatting.mjs
 */

import matter from 'gray-matter';
import {readFileSync, writeFileSync, readdirSync, statSync} from 'node:fs';
import {join, extname} from 'node:path';

const DOCS_DIR = 'docs';
const DEF_RE = /^\*\*([^*]+)\*\*\s*:\s*(.+)$/; // **Term**: description

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (extname(full) === '.md') out.push(full);
  }
  return out;
}

function fixBody(body) {
  const lines = body.split('\n');

  // Pass 1: dedent lines wrongly indented as code blocks (outside fences):
  //  - any bold-leading line, and
  //  - any standalone indented line (blank line on both sides) — never an
  //    intentional code block in turndown output.
  let inFence = false;
  const dedented = lines.map((line, idx) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return line;
    }
    if (inFence) return line;
    if (/^\s+\*\*/.test(line)) return line.replace(/^\s+/, '');
    const prevBlank = idx === 0 || lines[idx - 1].trim() === '';
    const nextBlank = idx === lines.length - 1 || lines[idx + 1].trim() === '';
    if (/^ {4,}\S/.test(line) && prevBlank && nextBlank) return line.replace(/^\s+/, '');
    return line;
  });

  // Pass 2: group consecutive "**Term**: desc" lines (blank lines allowed
  // between them) into a single tight bullet list.
  const out = [];
  let i = 0;
  inFence = false;
  while (i < dedented.length) {
    const line = dedented[i];
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      out.push(line);
      i++;
      continue;
    }
    if (!inFence && DEF_RE.test(line)) {
      // Collect a run of definition lines, skipping blank separators.
      const run = [];
      let j = i;
      while (j < dedented.length) {
        if (DEF_RE.test(dedented[j])) {
          run.push(dedented[j]);
          j++;
        } else if (dedented[j].trim() === '' && run.length > 0) {
          // peek: only continue the run if another def line follows
          let k = j;
          while (k < dedented.length && dedented[k].trim() === '') k++;
          if (k < dedented.length && DEF_RE.test(dedented[k])) j = k;
          else break;
        } else {
          break;
        }
      }
      if (run.length >= 2) {
        if (out.length && out[out.length - 1].trim() !== '') out.push('');
        for (const r of run) {
          const m = r.match(DEF_RE);
          out.push(`- **${m[1].trim()}**: ${m[2].trim()}`);
        }
        out.push('');
        i = j;
        continue;
      }
    }
    out.push(line);
    i++;
  }

  return out.join('\n').replace(/\n{3,}/g, '\n\n');
}

let changed = 0;
for (const file of walk(DOCS_DIR)) {
  const raw = readFileSync(file, 'utf8');
  const parsed = matter(raw);
  const fixed = fixBody(parsed.content);
  if (fixed !== parsed.content) {
    writeFileSync(file, matter.stringify(fixed, parsed.data));
    changed++;
    console.log(`fixed: ${file}`);
  }
}
console.log(`\nDone. Updated ${changed} file(s).`);
