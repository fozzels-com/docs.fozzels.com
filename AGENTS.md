# AGENTS.md — docs.fozzels.com

The Fozzels Help Center: a Docusaurus site with articles in `docs/` (English) and their
translations in `i18n/<locale>/docusaurus-plugin-content-docs/current/` (`de`, `nl`, `es`,
`pt-BR`, `it`, `fr`). Build, translation scripts and deployment: `README.md`.

Read the file that matches the task before starting it:

| File | Read it when |
|---|---|
| [`.claude/docs/writing-style.md`](.claude/docs/writing-style.md) | Writing, changing or translating any article — English follows ASD-STE100 Simplified Technical English, translations the plain-language standard of their language. |
| [`.claude/docs/whats-new.md`](.claude/docs/whats-new.md) | Writing, changing or translating a release article in `docs/fozzels-releases-updates/` — its `whats_new` front matter is what the app's "What's new" pop-up shows. |
| [`.claude/docs/lessons.md`](.claude/docs/lessons.md) | Adding a locale, translating articles, touching the build or the scripts in `scripts/`. |

`CLAUDE.md` contains only `@AGENTS.md`, so Claude Code loads this file; other agents read
it directly. Edit this file, not that one.
