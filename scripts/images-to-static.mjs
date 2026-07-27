#!/usr/bin/env node
/**
 * Move co-located article images into a single shared static/ location and
 * rewrite all references (English + every locale) to absolute paths, so
 * translations reuse the English images instead of duplicating them.
 *
 *   docs/<section>/images/<slug>/<file>  ->  static/img/kb/<section>/<slug>/<file>
 *   ![](./images/<slug>/<file>)          ->  ![](/img/kb/<section>/<slug>/<file>)
 *
 * Usage: node scripts/images-to-static.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const KB = 'static/img/kb';

// 1. Move English co-located images into the shared static tree.
for (const section of fs.readdirSync('docs')) {
  const imagesDir = path.join('docs', section, 'images');
  if (fs.existsSync(imagesDir) && fs.statSync(imagesDir).isDirectory()) {
    const dest = path.join(KB, section);
    fs.mkdirSync(dest, {recursive: true});
    for (const entry of fs.readdirSync(imagesDir)) {
      fs.renameSync(path.join(imagesDir, entry), path.join(dest, entry));
    }
    fs.rmdirSync(imagesDir);
  }
}

// 2. Delete the duplicated image copies inside each locale tree.
const localeCurrents = [];
if (fs.existsSync('i18n')) {
  for (const loc of fs.readdirSync('i18n')) {
    const cur = path.join('i18n', loc, 'docusaurus-plugin-content-docs', 'current');
    if (fs.existsSync(cur)) localeCurrents.push(cur);
  }
}
for (const cur of localeCurrents) {
  for (const section of fs.readdirSync(cur)) {
    const imagesDir = path.join(cur, section, 'images');
    if (fs.existsSync(imagesDir)) fs.rmSync(imagesDir, {recursive: true, force: true});
  }
}

// 3. Rewrite image references to the shared absolute path.
function rewriteTree(root) {
  let n = 0;
  for (const section of fs.readdirSync(root)) {
    const secDir = path.join(root, section);
    if (!fs.statSync(secDir).isDirectory()) continue;
    for (const f of fs.readdirSync(secDir)) {
      if (!f.endsWith('.md')) continue;
      const fp = path.join(secDir, f);
      const src = fs.readFileSync(fp, 'utf8');
      const out = src.replace(/\]\(\.\/images\//g, `](/img/kb/${section}/`);
      if (out !== src) {
        fs.writeFileSync(fp, out);
        n++;
      }
    }
  }
  return n;
}
let files = rewriteTree('docs');
for (const cur of localeCurrents) files += rewriteTree(cur);
console.log(`Moved images to ${KB}/, rewrote refs in ${files} file(s).`);
