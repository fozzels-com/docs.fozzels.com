#!/usr/bin/env node
/**
 * Import the public Freshdesk knowledge base into docs/.
 *
 * Fetches Categories → Folders → Articles from the Freshdesk Solutions API,
 * keeps only public folders and published articles, converts each article's
 * HTML body to clean Markdown, downloads every inline image locally, and writes
 * a Docusaurus doc tree with per-section _category_.json and ordered sidebars.
 *
 * Reads credentials from .env:
 *   AI_ASSISTANT_FRESHDESK_DOMAIN=fozzels
 *   AI_ASSISTANT_FRESHDESK_API_KEY=...
 *
 * Usage:
 *   node scripts/import-freshdesk.mjs                  # full rebuild (wipes docs/)
 *   node scripts/import-freshdesk.mjs --only 123,456   # add just these articles
 *     [--section 123=content-creation-flows]           # override the destination section
 *
 * --only is the incremental mode: it never deletes anything, so hand-written
 * articles, hand-tuned sidebar order and locale copies survive. Each new article
 * is slotted into its section by its leading section number, and the positions
 * below it (in docs/ and in every i18n/ copy) shift down to make room.
 */

import TurndownService from 'turndown';
import matter from 'gray-matter';
import {readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, existsSync} from 'node:fs';
import {join, extname} from 'node:path';

const DOCS_DIR = 'docs';
const I18N_DIR = 'i18n';
const URL_MAP_FILE = 'freshdesk-url-map.json';
const PUBLIC_VISIBILITY = 1; // Freshdesk folder visibility: 1 = everyone (public)
const PUBLISHED = 2; // Freshdesk article status: 2 = published

// ---------- credentials ----------
function loadEnv() {
  const env = {};
  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return env;
}
const env = loadEnv();
const DOMAIN = env.AI_ASSISTANT_FRESHDESK_DOMAIN;
const API_KEY = env.AI_ASSISTANT_FRESHDESK_API_KEY;
if (!DOMAIN || !API_KEY) {
  console.error('Missing AI_ASSISTANT_FRESHDESK_DOMAIN / AI_ASSISTANT_FRESHDESK_API_KEY in .env');
  process.exit(1);
}
const BASE = `https://${DOMAIN}.freshdesk.com/api/v2`;
const AUTH = 'Basic ' + Buffer.from(`${API_KEY}:X`).toString('base64');

async function api(path) {
  const res = await fetch(`${BASE}${path}`, {headers: {Authorization: AUTH}});
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status}`);
  return res.json();
}

// ---------- helpers ----------
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .slice(0, 80) || 'untitled';
}

function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/\b([a-z])/g, (c) => c.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract the leading section number (e.g. "4.1.2.a") as a sortable key.
function orderKey(title) {
  const m = title.match(/^\s*(\d+(?:\.\d+)*)(?:\.?([a-z]))?/i);
  if (!m) return [Number.MAX_SAFE_INTEGER];
  const nums = m[1].split('.').map(Number);
  nums.push(m[2] ? m[2].toLowerCase().charCodeAt(0) - 96 : 0);
  return nums;
}

function compareKeys(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const d = (a[i] ?? 0) - (b[i] ?? 0);
    if (d !== 0) return d;
  }
  return 0;
}

// ---------- HTML cleanup (make it read professionally) ----------
function cleanHtml(html) {
  let h = html;
  // Strip line breaks hugging paragraph boundaries (Freshdesk pads with <br>).
  h = h.replace(/<p([^>]*)>(?:\s|&nbsp;|<br\s*\/?>)+/gi, '<p$1>');
  h = h.replace(/(?:\s|&nbsp;|<br\s*\/?>)+<\/p>/gi, '</p>');
  // Drop empty paragraphs and stacked line breaks that Freshdesk emits.
  h = h.replace(/<p[^>]*>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, '');
  h = h.replace(/(<br\s*\/?>\s*){2,}/gi, '<br>');
  // Promote pseudo-headings: a paragraph that is just a "N.N. Title" line,
  // or a paragraph that is entirely bold, becomes a real heading.
  h = h.replace(/<p[^>]*>\s*(?:<strong>)?\s*(\d+(?:\.\d+)*)\.?\s+([^<]{2,120}?)\s*(?:<\/strong>)?\s*<\/p>/gi,
    (_, num, text) => {
      const depth = num.split('.').length; // 1 -> h2, 2 -> h3, ...
      const level = Math.min(depth + 1, 4);
      return `<h${level}>${num}. ${text.trim()}</h${level}>`;
    });
  h = h.replace(/<p[^>]*>\s*<strong>([^<]{2,80})<\/strong>\s*<\/p>/gi,
    (_, text) => `<h3>${text.trim()}</h3>`);
  // Unwrap links whose href is not a real URL (Freshdesk sometimes stores the
  // section title as the href). Keep the visible text, drop the broken link.
  h = h.replace(/<a\b[^>]*?href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, inner) =>
    /^(https?:\/\/|mailto:|tel:|#)/i.test(href.trim()) ? m : inner);
  return h;
}

// ---------- Markdown post-cleanup ----------
function cleanMarkdown(md) {
  return md
    .replace(/ /g, ' ') // nbsp -> space
    // Safety net: neutralize any non-image link with an unusable URL so MDX can
    // parse it. Keeps valid local/mail links and real http(s) hosts; a junk
    // href (Freshdesk sometimes stores a title as the URL) is dropped to text.
    .replace(/(?<!!)\[([^\]]*)\]\(([^)]*)\)/g, (m, text, url) => {
      const u = url.trim();
      if (/^(mailto:|tel:)/i.test(u)) return m;
      if (/^(#|\/|\.\/)/.test(u) && !/\s/.test(u)) return m;
      if (/^https?:\/\//i.test(u)) {
        try {
          const host = new URL(u).hostname;
          if (host.includes('.') && !/[\s%]/.test(host)) return m;
        } catch { /* fall through */ }
      }
      return text;
    })
    .replace(/[ \t]+$/gm, '') // trailing spaces
    // Freshdesk headings that wrap their text in a nested block come out of
    // turndown as a bare "###" with the title on the next line. Rejoin them
    // with their text; drop the marker when nothing headline-shaped followed
    // (a blank line, an image, or a full paragraph that is not a title).
    .replace(/^(#{2,6})[ \t]*\n([ \t]*)(.*)$/gm, (_, hashes, indent, next) => {
      const text = next.trim();
      const isTitle = text && text.length <= 120 && !/^(?:#|!\[|```|\||>|[-*+] )/.test(text);
      return isTitle ? `${hashes} ${text}` : `${indent}${next}`;
    })
    .replace(/\n{3,}/g, '\n\n') // collapse blank lines
    .trim() + '\n';
}

// ---------- image download ----------
async function downloadImage(url, imageDir, index, usedNames) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;

    const rawBase = decodeURIComponent((new URL(url).pathname.split('/').pop() || '').split('?')[0]);
    let ext = extname(rawBase).toLowerCase();
    if (!/^\.(png|jpe?g|gif|webp|svg)$/.test(ext)) {
      const ct = res.headers.get('content-type') || '';
      ext = ct.includes('jpeg') ? '.jpg'
        : ct.includes('png') ? '.png'
        : ct.includes('gif') ? '.gif'
        : ct.includes('webp') ? '.webp'
        : ct.includes('svg') ? '.svg'
        : '.png';
    }
    let name = rawBase.slice(0, rawBase.length - extname(rawBase).length)
      .replace(/[^\p{L}\p{N}._-]+/gu, '-').replace(/^-+|-+$/g, '').slice(0, 60);
    if (!name) name = `image-${index}`;
    let filename = `${name}${ext}`;
    while (usedNames.has(filename)) filename = `${name}-${index}${ext}`;
    usedNames.add(filename);

    mkdirSync(imageDir, {recursive: true});
    writeFileSync(join(imageDir, filename), Buffer.from(await res.arrayBuffer()));
    return filename;
  } catch {
    return null;
  }
}

const TURNDOWN_OPTIONS = {
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
};
const turndown = new TurndownService(TURNDOWN_OPTIONS);

// Turndown drops table structure by default, which flattens a Freshdesk table
// into a run of orphan paragraphs. Convert them to GFM pipe tables instead.
// Cells are converted with a separate instance so the outer walk is untouched.
const cellTurndown = new TurndownService(TURNDOWN_OPTIONS);

function elementChildren(node, tags) {
  return [...node.childNodes].filter((n) => n.nodeType === 1 && tags.test(n.nodeName));
}

turndown.addRule('gfmTable', {
  filter: 'table',
  replacement(content, node) {
    const rows = [];
    for (const section of [node, ...elementChildren(node, /^(THEAD|TBODY|TFOOT)$/)]) {
      for (const tr of elementChildren(section, /^TR$/)) {
        const cells = elementChildren(tr, /^T[HD]$/).map((cell) =>
          cellTurndown.turndown(cell.innerHTML).replace(/\s*\n+\s*/g, ' ').replace(/\|/g, '\\|').trim());
        if (cells.length) rows.push(cells);
      }
    }
    if (!rows.length) return content;

    const width = Math.max(...rows.map((r) => r.length));
    const pad = (row) => [...row, ...Array(width - row.length).fill('')];
    const line = (row) => `| ${pad(row).join(' | ')} |`;
    return `\n\n${[line(rows[0]), line(Array(width).fill('---')), ...rows.slice(1).map(line)].join('\n')}\n\n`;
  },
});

let imageCount = 0;

// Rewrite internal Freshdesk article/folder links to their new local doc paths.
// Authors link both the public form (/support/solutions/...) and the agent form
// (/a/solutions/...) they see while editing, so both have to be caught.
function rewriteInternalLinks(html, maps) {
  html = html.replace(/https?:\/\/[^"'()\s]*\/(?:support|a)\/solutions\/articles\/(\d+)[^"'()\s]*/gi,
    (full, id) => maps.articles.get(id) || full);
  html = html.replace(/https?:\/\/[^"'()\s]*\/(?:support|a)\/solutions\/folders\/(\d+)[^"'()\s]*/gi,
    (full, id) => maps.folders.get(id) || full);
  return html;
}

async function articleToMarkdown(article, destDir, baseName, maps) {
  let html = rewriteInternalLinks(cleanHtml(article.description || ''), maps);

  // Download every inline image into images/<article>/ and rewrite the src.
  const imageDir = join(destDir, 'images', baseName);
  const usedNames = new Set();
  const imgUrls = [...html.matchAll(/<img[^>]+src="([^"]+)"/gi)].map((m) => m[1]);
  const unique = [...new Set(imgUrls.filter((u) => /^https?:\/\//.test(u)))];
  let idx = 0;
  for (const url of unique) {
    idx++;
    const local = await downloadImage(url, imageDir, idx, usedNames);
    if (local) {
      html = html.split(url).join(`./images/${baseName}/${local}`);
      imageCount++;
    }
  }

  const md = cleanMarkdown(turndown.turndown(html));
  return md;
}

function metaDescription(article) {
  const seo = article.seo_data?.meta_description;
  if (seo) return seo.trim();
  const text = (article.description_text || '').replace(/\s+/g, ' ').trim();
  if (text.length <= 155) return text;
  // Cut on a word boundary so the meta tag never ends mid-word.
  const cut = text.slice(0, 155);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
}

// ---------- incremental mode (--only) ----------

/** Parse `--only a,b` and repeated `--section <id>=<slug>` flags. */
function parseArgs(argv) {
  const only = [];
  const sectionOverrides = new Map();
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--only') {
      only.push(...(argv[++i] || '').split(',').map((s) => s.trim()).filter(Boolean));
    } else if (argv[i] === '--section') {
      const [id, slug] = (argv[++i] || '').split('=');
      if (id && slug) sectionOverrides.set(id.trim(), slug.trim());
    }
  }
  return {only, sectionOverrides};
}

/** Every locale copy of a docs-relative path that actually exists on disk. */
function localeCopies(relPath) {
  if (!existsSync(I18N_DIR)) return [];
  const out = [];
  for (const locale of readdirSync(I18N_DIR)) {
    const p = join(I18N_DIR, locale, 'docusaurus-plugin-content-docs', 'current', relPath);
    if (existsSync(p)) out.push(p);
  }
  return out;
}

/** Rewrite `sidebar_position:` in place, leaving the rest of the YAML untouched. */
function setSidebarPosition(file, position) {
  const src = readFileSync(file, 'utf8');
  const out = src.replace(/^sidebar_position:[ \t]*\d+[ \t]*$/m, `sidebar_position: ${position}`);
  if (out !== src) writeFileSync(file, out);
}

/**
 * Find the position a new article should take inside a section, and shift the
 * articles below it (English + every locale) down by one if the slot is taken.
 * Ordering follows the leading section number, same as the full import.
 */
function claimPosition(folderDir, folderSlug, newTitle) {
  const items = readdirSync(folderDir)
    .filter((f) => extname(f) === '.md')
    .map((f) => {
      const data = matter(readFileSync(join(folderDir, f), 'utf8')).data;
      return {file: f, pos: Number(data.sidebar_position) || 0, key: orderKey(String(data.title ?? ''))};
    })
    .sort((a, b) => a.pos - b.pos);

  const newKey = orderKey(newTitle);
  let predecessor = null;
  for (const item of items) {
    if (compareKeys(item.key, newKey) > 0) break;
    predecessor = item;
  }
  const position = predecessor ? predecessor.pos + 1 : 1;

  if (items.some((item) => item.pos === position)) {
    for (const item of items.filter((i) => i.pos >= position).sort((a, b) => b.pos - a.pos)) {
      const relPath = join(folderSlug, item.file);
      setSidebarPosition(join(folderDir, item.file), item.pos + 1);
      for (const copy of localeCopies(relPath)) setSidebarPosition(copy, item.pos + 1);
    }
    console.log(`    shifted ${items.filter((i) => i.pos >= position).length} article(s) down from position ${position}`);
  }
  return position;
}

/** Recount each section card on the homepage from what is actually on disk. */
function refreshSectionCounts() {
  const file = 'src/data/sections.json';
  if (!existsSync(file)) return;
  const sections = JSON.parse(readFileSync(file, 'utf8'));
  for (const section of sections) {
    const dir = join(DOCS_DIR, section.slug);
    if (!existsSync(dir)) continue;
    section.count = readdirSync(dir).filter((f) => extname(f) === '.md').length;
  }
  writeFileSync(file, JSON.stringify(sections, null, 2) + '\n');
}

async function runIncremental({only, sectionOverrides}) {
  const urlMapDoc = JSON.parse(readFileSync(URL_MAP_FILE, 'utf8'));
  const maps = {articles: new Map(), folders: new Map()};
  for (const entry of urlMapDoc.entries) {
    maps[entry.type === 'folder' ? 'folders' : 'articles'].set(String(entry.freshdeskId), entry.newPath);
  }
  const known = new Set(urlMapDoc.entries.filter((e) => e.type === 'article').map((e) => String(e.freshdeskId)));

  // Folder id -> section slug, from the live knowledge base.
  const folderSlugs = new Map();
  for (const category of await api('/solutions/categories')) {
    for (const folder of await api(`/solutions/categories/${category.id}/folders`)) {
      folderSlugs.set(String(folder.id), slugify(folder.name));
    }
  }

  // Phase 1: resolve every destination up front so links between the new
  // articles resolve too, exactly like the full import does.
  const plan = [];
  for (const id of only) {
    if (known.has(id)) {
      console.log(`  skip ${id}: already imported (${maps.articles.get(id)})`);
      continue;
    }
    const article = await api(`/solutions/articles/${id}`);
    if (article.status !== PUBLISHED) {
      console.log(`  skip ${id}: not published`);
      continue;
    }
    const folderSlug = sectionOverrides.get(id) ?? folderSlugs.get(String(article.folder_id));
    if (!folderSlug) throw new Error(`No section for article ${id} (folder ${article.folder_id})`);
    const folderDir = join(DOCS_DIR, folderSlug);
    if (!existsSync(folderDir)) throw new Error(`Section directory does not exist: ${folderDir}`);

    const cleanTitle = article.title.replace(/^\s*\d+(?:\.\d+)*(?:\.?[a-z])?\.?\s*/i, '');
    let slug = slugify(cleanTitle || article.title);
    let n = 1;
    while (existsSync(join(folderDir, `${slug}.md`))) slug = `${slug}-${++n}`;

    const newPath = `/${folderSlug}/${slug}`;
    maps.articles.set(id, newPath);
    plan.push({article, id, folderDir, folderSlug, slug, newPath});
    console.log(`  ${id} -> ${newPath}`);
  }

  // Phase 2: convert and write.
  for (const item of plan) {
    const position = claimPosition(item.folderDir, item.folderSlug, item.article.title);
    const body = await articleToMarkdown(item.article, item.folderDir, item.slug, maps);
    writeFileSync(join(item.folderDir, `${item.slug}.md`), matter.stringify('\n' + body, {
      id: String(item.article.id),
      title: item.article.title.trim(),
      sidebar_position: position,
      slug: item.newPath,
      description: metaDescription(item.article),
    }));
    urlMapDoc.entries.push({
      type: 'article',
      freshdeskId: item.article.id,
      title: item.article.title.trim(),
      oldPathPrefix: `/support/solutions/articles/${item.article.id}`,
      newPath: item.newPath,
    });
    console.log(`  wrote ${item.folderSlug}/${item.slug}.md at position ${position}`);
  }

  writeFileSync(URL_MAP_FILE, JSON.stringify(urlMapDoc, null, 2) + '\n');
  refreshSectionCounts();
  console.log(`\nDone. ${plan.length} article(s), ${imageCount} image(s) added.`);
}

// ---------- main ----------
async function run() {
  console.log('Fetching knowledge base from Freshdesk...');
  const categories = await api('/solutions/categories');
  const flatten = categories.length === 1;

  // ----- Phase 1: gather everything and compute the new path for each item -----
  const plan = []; // {article, folderDir, baseName, slug, folderSlug, pos}
  const sections = [];
  const maps = {articles: new Map(), folders: new Map()};
  const urlMap = []; // for the caller's redirect rules

  for (const category of categories) {
    const folders = await api(`/solutions/categories/${category.id}/folders`);
    let folderPos = 0;

    for (const folder of folders) {
      if (folder.visibility !== PUBLIC_VISIBILITY) {
        console.log(`  skip private folder: ${folder.name}`);
        continue;
      }
      folderPos++;
      const folderLabel = titleCase(folder.name);
      const folderSlug = slugify(folder.name);
      const folderDir = flatten
        ? join(DOCS_DIR, folderSlug)
        : join(DOCS_DIR, slugify(category.name), folderSlug);
      maps.folders.set(String(folder.id), `/${folderSlug}`);
      urlMap.push({type: 'folder', freshdeskId: folder.id, oldPathPrefix: `/support/solutions/folders/${folder.id}`, newPath: `/${folderSlug}`});

      const articles = (await api(`/solutions/folders/${folder.id}/articles?per_page=100`))
        .filter((a) => a.status === PUBLISHED);
      articles.sort((a, b) => compareKeys(orderKey(a.title), orderKey(b.title)) || a.title.localeCompare(b.title));

      const usedSlugs = new Set();
      let pos = 0;
      for (const article of articles) {
        pos++;
        const cleanTitle = article.title.replace(/^\s*\d+(?:\.\d+)*(?:\.?[a-z])?\.?\s*/i, '');
        let slug = slugify(cleanTitle || article.title);
        while (usedSlugs.has(slug)) slug = `${slug}-${pos}`;
        usedSlugs.add(slug);

        const newPath = `/${folderSlug}/${slug}`;
        maps.articles.set(String(article.id), newPath);
        urlMap.push({type: 'article', freshdeskId: article.id, title: article.title.trim(), oldPathPrefix: `/support/solutions/articles/${article.id}`, newPath});
        plan.push({article, folderDir, baseName: slug, slug, folderSlug, pos, folder, folderLabel, folderPos});
      }

      sections.push({label: folderLabel, slug: folderSlug, folderDir, folderPos, description: folder.description, count: articles.length});
      console.log(`  ${folderLabel}: ${articles.length} articles`);
    }
  }

  // ----- Phase 2: write the tree, rewriting internal links via the maps -----
  if (existsSync(DOCS_DIR)) {
    for (const entry of readdirSync(DOCS_DIR)) rmSync(join(DOCS_DIR, entry), {recursive: true, force: true});
  }
  mkdirSync(DOCS_DIR, {recursive: true});

  for (const s of sections) {
    mkdirSync(s.folderDir, {recursive: true});
    writeFileSync(join(s.folderDir, '_category_.json'), JSON.stringify({
      label: s.label,
      position: s.folderPos,
      link: {type: 'generated-index', slug: `/${s.slug}`, description: s.description || `${s.label} articles.`},
    }, null, 2) + '\n');
  }

  for (const item of plan) {
    const body = await articleToMarkdown(item.article, item.folderDir, item.baseName, maps);
    const frontmatter = {
      id: String(item.article.id),
      title: item.article.title.trim(),
      sidebar_position: item.pos,
      slug: `/${item.folderSlug}/${item.slug}`,
      description: metaDescription(item.article),
      // tags: [] // filled in by the AI enhancement pass
    };
    writeFileSync(join(item.folderDir, `${item.slug}.md`), matter.stringify('\n' + body, frontmatter));
  }

  // Section data for the custom homepage (src/pages/index.js renders the cards).
  mkdirSync('src/data', {recursive: true});
  writeFileSync('src/data/sections.json', JSON.stringify(
    sections.map((s) => ({label: s.label, slug: s.slug, description: s.description || '', count: s.count})),
    null, 2) + '\n');

  // Old -> new URL map for redirect rules.
  writeFileSync('freshdesk-url-map.json', JSON.stringify({
    generatedFrom: `${DOMAIN}.freshdesk.com`,
    note: 'oldPathPrefix is the Freshdesk path (a slug may follow the id). newPath is the path on the new site.',
    entries: urlMap,
  }, null, 2) + '\n');

  console.log(`\nDone. ${plan.length} articles, ${imageCount} images across ${sections.length} sections.`);
  console.log(`URL map written to freshdesk-url-map.json (${urlMap.length} entries).`);
}

const cli = parseArgs(process.argv.slice(2));
const main = cli.only.length ? () => runIncremental(cli) : run;

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
