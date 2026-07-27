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
 * Usage: node scripts/import-freshdesk.mjs
 */

import TurndownService from 'turndown';
import matter from 'gray-matter';
import {readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, existsSync} from 'node:fs';
import {join, extname} from 'node:path';

const DOCS_DIR = 'docs';
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

const turndown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
});
// Keep tables as raw HTML if turndown can't handle them (rare in these docs).

let imageCount = 0;

// Rewrite internal Freshdesk article/folder links to their new local doc paths.
function rewriteInternalLinks(html, maps) {
  html = html.replace(/https?:\/\/[^"'()\s]*\/support\/solutions\/articles\/(\d+)[^"'()\s]*/gi,
    (full, id) => maps.articles.get(id) || full);
  html = html.replace(/https?:\/\/[^"'()\s]*\/support\/solutions\/folders\/(\d+)[^"'()\s]*/gi,
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
  return text.slice(0, 155);
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

  // Landing page.
  const list = sections.map((s) => `- **[${s.label}](/${s.slug})** — ${s.count} articles`).join('\n');
  writeFileSync(join(DOCS_DIR, 'index.md'), matter.stringify(
    `\nWelcome to the Fozzels Help Center. Choose a topic to get started:\n\n${list}\n`,
    {slug: '/', title: 'Fozzels Help Center', sidebar_position: 0, hide_table_of_contents: true},
  ));

  // Old -> new URL map for redirect rules.
  writeFileSync('freshdesk-url-map.json', JSON.stringify({
    generatedFrom: `${DOMAIN}.freshdesk.com`,
    note: 'oldPathPrefix is the Freshdesk path (a slug may follow the id). newPath is the path on the new site.',
    entries: urlMap,
  }, null, 2) + '\n');

  console.log(`\nDone. ${plan.length} articles, ${imageCount} images across ${sections.length} sections.`);
  console.log(`URL map written to freshdesk-url-map.json (${urlMap.length} entries).`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
