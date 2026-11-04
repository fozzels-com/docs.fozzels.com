# Writing style: Simplified Technical English and plain language

Readers of the Help Center are e-commerce teams, often reading in their second language,
often in the middle of a task. Write so that they understand a sentence the first time
they read it.

- **English** articles follow **ASD-STE100 Simplified Technical English** (STE).
- **Translations** follow the plain-language standard of their language (table below).
  They are not word-for-word copies of the English sentences: they say the same thing,
  with the same structure, in the simplest correct form of that language.

This applies to every new or changed article, to the `whats_new` items
(see [`whats-new.md`](whats-new.md)), and to every translation, manual or by
`scripts/translate.mjs`. Do not rewrite an existing article only for style unless the
task asks for it.

## STE rules for English

The STE dictionary itself is licensed by ASD and is not in this repo. Follow the
rules below; when in doubt about a word, pick the shortest common word with one meaning.

**Words**
- One word, one meaning. Use the same word for the same thing in the whole article:
  "Flow" is always "Flow", not "Flow", "rule" and "job" in turn.
- Prefer simple, common words: *use* (not *utilize*), *start* (not *initiate*),
  *help* (not *facilitate*), *about* (not *approximately*), *show* (not *display* as a
  verb where *show* works), *make sure* (not *ensure*).
- No phrasal verbs where a single verb exists: *find* (not *find out*), *continue*
  (not *carry on*), *remove* (not *take away*).
- Technical names are allowed and stay exactly as they are: product names (Content Flow,
  Image Flow, Batch List), app UI labels, field names, Magento/Shopify terms.
- No noun clusters of more than three words. Write "the language of the store view",
  not "store view language setting value".
- Always use articles (*a*, *an*, *the*) and *that*/*which* where they make the sentence
  clearer.

**Verbs**
- Active voice. "Fozzels sends the text to your store", not "The text is sent".
  Use passive only when the actor is unknown or does not matter.
- Simple tenses: present, simple past, future (*will*). No *would*, *could*, *might*
  for facts.
- Do not use *-ing* forms as verbs ("while generating, Fozzels is checking …").
  Write "When Fozzels generates the text, it checks …". An *-ing* word that is part of a
  technical name or UI label stays.

**Sentences**
- One topic per sentence.
- **Procedures** (steps the reader does): at most **20 words** per sentence. Start with
  the verb in the imperative: "Click **Save**." One instruction per sentence, unless the
  reader must do two things at the same time. Put a condition first: "If the Flow is
  paused, click **Resume**."
- **Descriptions** (how something works): at most **25 words** per sentence. Put the
  most important information first.
- At most **six sentences per paragraph**. Start the paragraph with its topic.
- Use a numbered list for steps that the reader does in order, a bulleted list for
  items in no order, and a table to compare options.

**Warnings and notes**
- Start a warning or caution with a clear command, then give the reason:
  "Do not delete the integration. Fozzels then removes all products of that store."
- Use `:::warning` for risk to data, money or the store, `:::tip` for a better way,
  `:::note` for facts that are useful but not necessary.

**Tone**
- Speak to the reader as "you". Short, friendly, direct.
- No marketing superlatives or filler ("seamlessly", "powerful", "takes your content to
  the next level"). A release article may say what a change gives the customer, in plain
  words: "You find placeholder ALT texts faster."
- No internal terms, ticket numbers, class names or code paths.

## Plain language for translations

The common base for every language is **ISO 24495-1:2023 (Plain language)**: the reader
finds what they need, understands it and can use it. Aim at about **CEFR level B1**.

| Locale | Follow | Notes |
|---|---|---|
| `de` | tekom-Leitlinie *Regelbasiertes Schreiben* | Formal *Sie*. Short main clauses; at most one subordinate clause per sentence. Split long compounds with a hyphen when they are new to the reader ("Store-View-Sprache"). Verbs instead of nominalisations ("prüfen", not "die Durchführung der Prüfung"). |
| `nl` | Taalniveau **B1** (common Dutch plain-language guidelines) | Formal *u*, as the existing files use. Short sentences, active voice, no officialese ("indien", "teneinde"). |
| `fr` | *Français rationalisé* (GIFAS, the French counterpart of STE) | Formal *vous*. One idea per sentence, active voice, imperative for steps ("Cliquez sur **Save**."). Avoid nominalisations and chains of "de". |
| `es` | *Lenguaje claro* (ISO 24495-1) | Neutral European Spanish. The existing files mix *tú* and *usted* (about half each); keep the register of the article you edit and use one register within an article. Subject–verb–object order, no gerund chains. |
| `pt-BR` | *Linguagem simples* (ISO 24495-1) | Informal *você*. Euro (€), DD/MM/YYYY. Short sentences, direct order, no gerundismo ("vai estar enviando" → "envia"). |
| `it` | *Linguaggio chiaro* (ISO 24495-1) | Formal *Lei*. Active voice, short sentences, everyday words instead of bureaucratic Italian ("usare", not "utilizzare"). |

For every language:
- Apply the STE limits from above: one instruction per step, imperative in procedures,
  one topic per sentence. A translation may run a little longer than English, but keep
  procedure sentences at about 25 words and descriptions at about 30 at most; split a
  sentence rather than go over.
- Keep the article structure identical to English: the same headings, lists, tables,
  images and links in the same order. Simplify inside a sentence or split it into two;
  do not move, merge or drop content.
- Write app UI labels the way the app shows them in that language; where the app has no
  such UI (French), keep them in English (lesson 3 in [`lessons.md`](lessons.md)).
- Use the same translation for the same English term in the whole article and across
  articles. Check the existing articles of that locale before you pick a word.

## Checklist before you finish

- Every procedure step starts with a verb and has one instruction.
- No sentence goes over the limit for its type.
- No passive voice where the actor is known.
- The same thing has the same name everywhere.
- A reader who knows only this article can do the task.
