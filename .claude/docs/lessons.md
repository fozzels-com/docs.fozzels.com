# Lessons — docs.fozzels.com

Things that went wrong or are easy to get wrong in this repo. Read before
changing locales, translations or the build. Add a numbered entry when
something bites you.

## Adding a new locale (checklist)

Used for `it` (FOZ-2533) and `fr` (FOZ-2548).

1. Register the locale in **three** places:
   - `docusaurus.config.js` → `i18n.locales` **and** `i18n.localeConfigs`
     (label in the language itself, e.g. `Français`). The desktop language
     dropdown and the mobile language switcher
     (`src/theme/NavbarItem/MobileLocaleSwitcherNavbarItem`) both read this list.
   - `docusaurus.config.js` → `@easyops-cn/docusaurus-search-local` `language`
     list (uses the lunr code: `pt`, not `pt-BR`; check that
     `node_modules/lunr-languages/lunr.<code>.js` exists).
   - `scripts/translate.mjs` → `LOCALES`, with a register note (formal
     Sie / Lei / vous, …).
2. `npx -y yarn@1.22.22 write-translations --locale <l>` seeds
   `i18n/<l>/code.json`, `navbar.json`, `footer.json` and `current.json`.
3. The bundled Docusaurus theme strings are only partly translated, and the
   homepage strings are always English. Find what is still English: run
   `write-translations --locale en`, compare `code.json` messages, translate
   those, then **delete `i18n/en`** again.
4. The homepage `section.<category>.label/.blurb` keys are not extracted by
   `write-translations` (the ids are dynamic). Copy them from an existing
   locale's `code.json` and translate them.
5. Translate the sidebar category labels in
   `i18n/<l>/docusaurus-plugin-content-docs/current.json`. The localized
   `_category_.json` files do **not** drive the sidebar label.
6. Translate every file in `docs/` (articles and `_category_.json`) into
   `i18n/<l>/docusaurus-plugin-content-docs/current/` with the same relative
   path. Keep `id`, `slug` and `sidebar_position` unchanged.
7. `node scripts/check-locale.mjs <l>` must report 0 problems. Then do a full
   `npx -y yarn@1.22.22 build` (all locales) and click through `/<l>/` locally.

## Numbered lessons

1. **Empty `description` in `code.json` breaks the build** (FOZ-2533).
   `"description": ""` fails with `… is not allowed to be empty`. Omit the key
   instead.
2. **`scripts/translate.mjs` needs `ANTHROPIC_API_KEY`**, which is not
   available to agent CLI sessions. For a full new locale, translating with
   parallel agents works well: ~8 batches of ~80 KB each, one shared
   instruction file, then `scripts/check-locale.mjs` (FOZ-2533, FOZ-2548).
3. **The Fozzels app has no French UI** (and only some locales in general).
   Keep app UI labels (buttons, menus, field names) in English in a
   translation unless the app itself has that language; otherwise users
   cannot find the button the article names (FOZ-2548).
4. **Use yarn v1**: `yarn` is not on PATH on the agent host; run
   `npx -y yarn@1.22.22 <cmd>` so `yarn.lock` stays v1 (CI uses
   `--frozen-lockfile`).
5. **Stopping a local `docusaurus serve`**: `pkill -f "docusaurus serve …"`
   inside a compound shell command also kills that shell. Kill by port PID
   (`ss -ltnp | grep :PORT`).
6. **Older locales are not fully in sync** (found by `check-locale.mjs` in
   FOZ-2548): `pimcore-datahub-exposing-published-and-image-gallery.md` is
   missing in de/nl/es/pt-BR, and some de/nl/es/pt-BR articles have extra
   frontmatter keys (e.g. `keywords`) or different heading levels. Run the
   check per locale before relying on parity.
7. **Compare YAML values, not their layout.** `slug: >-` folded onto the next
   line equals a plain one-line `slug:`; a text diff of frontmatter reports
   false mismatches.
