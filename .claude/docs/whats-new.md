# Release articles and the `whats_new` block

The Fozzels app has a "What's new" button in its topbar. The pop-up behind it is built
entirely from this repo: it reads the `whats_new` front matter block of the release
articles in `docs/fozzels-releases-updates/` and their translations. Nothing about a
release is written in the app itself, so a release article without this block never
reaches customers in the app.

Read this before writing or translating a release article.

## How the app picks releases

- It takes the **5 newest** articles that carry a `whats_new` block, ordered by
  `released_at` (not by `sidebar_position`, not by file name).
- The newest one opens first; the customer steps back to older ones with the date
  arrows in the header.
- Releases are chosen from the **English** files. For each one the app then shows the
  translation in the customer's language (`de`, `nl`, `es`, `pt-BR`, `it`). If that
  translation is missing or has no `whats_new` block, the English block is shown. The
  app has no French UI, so `fr` is never read — translate it anyway, like every article.
- `draft: true` articles are skipped (they have no public URL). `unlisted` ones are shown.
- The "Read more" link is the article's own URL, from `slug`.
- The app caches the parsed content; it is refreshed when the DOCS CONTENT workflow in
  the app repo installs a new version of this repo.

## Schema

```yaml
---
title: "What's new in Fozzels: October 2026, part 2"
sidebar_position: 19
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2
description: >-
  …
whats_new:
  released_at: 2026-10-23
  items:
    - area: 'Overview'
      title: 'October 2026, part 2: results that meet your standards'
      body: 'Texts that keep improving until they follow your rules, … Here''s what''s new.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/01-cover.jpg
    - tag: new
      area: 'Filters'
      title: 'Paste a list into your filters'
      body: 'Paste EANs or SKUs from Excel into an "is one of" condition and click Split …'
      video: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/08-paste-list-into-filters.mp4
    - area: 'Feedback'
      title: 'Thank you for using Fozzels'
      body: 'Got an idea or a wish for the next release? Share it with Jane in the app …'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/10-share-your-idea.png
---
```

`whats_new.released_at` — required. The release date, `YYYY-MM-DD`, quoted or not. The
app shows it as the date in the header ("23 Oct 2026") and sorts by it. An article
without a valid date is ignored.

`whats_new.items` — required, at least one. One item is one step of the pop-up; the
customer clicks Next through them in this order. Every field is a plain string; a list
or a mapping in a field is dropped.

| Field | Required | What it does |
|---|---|---|
| `tag` | no | `new`, `improved` or `fixed`. Shown as a coloured label (translated by the app). Leave it out on items that are not a change, such as the opening overview and the closing thank-you. Any other value shows an empty label. |
| `area` | yes | The part of the product, shown next to the tag: `Content Flows`, `Image Flows`, `Workflows`, `Filters`, `Reports`, `AI models`, … Use the same names as the app's menu. |
| `title` | yes | The heading of the step. One short line that says what the customer can do now, not the feature's internal name. |
| `body` | yes | One or two sentences, plain text. No Markdown, links or HTML — they are shown literally. Say what changed and where to find it. |
| `image` | no | A picture for the step. |
| `video` | no | An `.mp4` clip for the step. Shown with play controls, muted, not autoplaying. |
| `youtube` | no | A YouTube link (watch, `youtu.be`, shorts or embed); embedded via youtube-nocookie. |

Give each item **at most one** of `image`, `video`, `youtube`. If several are set, the app
shows only one, in this order: `youtube`, then `video`, then `image`. An item without
media is fine; the text then sits at the top.

Media paths are the paths this site serves the file under, the same ones the article's
own Markdown uses: `/img/kb/fozzels-releases-updates/<article-slug>/<file>`, with the file
in `static/img/kb/fozzels-releases-updates/<article-slug>/`. The app prefixes them with
`https://docs.fozzels.com`, so the file must be on the live site before the pop-up can
show it. A full `https://` URL also works.

The media box is 280px high and the image or video is scaled to fit it (`contain`), so
wide screenshots and 16:9 clips read best; tall or very detailed screenshots become
unreadable. Prefer a short clip (under ~30 s) over a screenshot when the change is a
movement — pasting, dragging, a step-by-step flow. If the article body already embeds a
`<video>` for a feature, reuse that file in the item's `video`.

## Writing the items

- Start with an overview item (no `tag`, `area: 'Overview'`, the cover image), then one
  item per change, most valuable first, and end with the feedback item (no `tag`).
- Keep it to about 6–10 items. Not every line of the article needs a step; small fixes
  can stay in the article only.
- Write for the customer: what they can do now, in their words. No ticket numbers,
  class names or internal terms.
- Follow [`writing-style.md`](writing-style.md): STE for English, plain language for the
  translations. A `body` is a description, so at most 25 words per sentence.
- Wrap every string value in single quotes. Inside one, write an apostrophe as two
  (`'Here''s what''s new.'`). A colon followed by a space inside an unquoted value
  breaks the YAML and the whole article drops out of the pop-up without an error.

## Translations

`scripts/translate.mjs` translates only `title`, `description` and `sidebar_label`. It
copies the `whats_new` block **in English** into every locale. After running it, or when
translating by hand:

- Translate `area`, `title` and `body` of every item in every locale.
- Keep `released_at`, `tag`, `image`, `video` and `youtube` exactly as in English, and
  keep the same items in the same order. Only the text differs between locales.
- Keep app UI names (buttons, menus, field names) in English where the app has no
  translation for them — see lesson 3 in `lessons.md`.

## Checking

Parse the front matter of every changed file and look at the items, e.g.:

```bash
node -e '
const fs = require("fs"); const yaml = require("js-yaml");
for (const f of process.argv.slice(1)) {
  const fm = fs.readFileSync(f, "utf8").match(/^---\n([\s\S]*?)\n---\n/)[1];
  const w = yaml.load(fm).whats_new;
  console.log(f.split("/")[1], JSON.stringify(w.items.map(i => [i.tag ?? "-", (i.image || i.video || i.youtube || "").split("/").pop()])));
}' docs/fozzels-releases-updates/<article>.md i18n/*/docusaurus-plugin-content-docs/current/fozzels-releases-updates/<article>.md
```

Every locale must print the same line as English — same items, same tags, same media —
and every media path must exist under `static/`.
