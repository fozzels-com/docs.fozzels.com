---
title: Content Flows — Complete Guide
sidebar_position: 28
slug: /content-creation-flows/content-flows-complete-guide
description: >-
  Content Flows are the core automation feature of Fozzels. This guide covers
  creating a Flow, prompt templates, running it, the completion lifecycle,
  suspicious content, and why content sometimes won't sync.
---

Content Flows are the core automation feature of Fozzels. A Flow is a rule that automatically generates AI content for a selected product attribute and writes the result back to your store.

## What a Flow does

1. Filters products by your conditions (e.g. "description is empty")
2. Sends product data to AI with your prompt
3. Stores the generated content as a "completion"
4. Pushes the content to your store attribute

---

## Creating a Flow

Go to [Flows](https://app.fozzels.com/completions/product/rule) → **Create Flow**

### Step 1 — Store & target attribute

- Select the store whose products to process
- Give the Flow a name
- Select the **target attribute** — the attribute that will receive AI-generated content
  - Must have the **Mutable** flag enabled in Integration → Attributes

### Step 2 — AI provider

- Choose AI vendor: OpenAI GPT-4o, Google Gemini 2.5 Flash, or Anthropic Claude
- Select a specific model
- Configure model parameters if needed

### Step 3 — Products & prompt

- **Conditions** — visual query builder to filter which products this Flow processes
  - Example: "description is empty AND category equals Electronics"
  - Leave empty to process all products in the store
  - A product count preview shows how many products match
- **Prompt template** — the instruction sent to AI, with `{{attribute_code}}` placeholders
  - Example: `Write a product description for {{name}} (SKU: {{sku}}) in category {{category}}`
  - **Attributes tab** (`{{attribute_code}}`) — always included in the prompt, even if the product has no value for that attribute
  - **Attributes (if filled) tab** (`#attribute_code`) — only included in the prompt when the product actually has a value; useful to avoid sending empty lines to the AI

### Step 4 — Automation settings

- **Active** toggle — enable/disable the Flow
- **Batch size** — how many products to process per run (default 10)
- **Automation** toggle — when ON, confirmed content is automatically pushed to your store without manual review
- **Regenerate on attribute change** — re-run when source attributes are updated (⚠ can cause recursion if the target attribute is also a source)
- **Prevent overlapping generation** — cooldown between regenerations per product:
  - **Inherit** — use global cooldown from account settings
  - **Override** — set a custom cooldown for this Flow only
  - **Turn off** — always regenerate regardless of previous runs

---

## Prompt template tips

Reference attributes with `{{attribute_code}}` — use the exact code shown in Integration → Attributes.

**Two attribute syntaxes:**

- `{{attribute_code}}` — always included (corresponds to the **Attributes** tab in the editor). Use this by default.
- `#attribute_code` — included only if the product has a value (corresponds to the **Attributes (if filled)** tab). Use to skip empty fields.

Be specific about:

- Format and length ("150–200 words")
- Language ("in English")
- Tone ("professional but friendly")
- What to avoid ("do not mention competitors")

**Example for product description:**

```
Write a compelling product description (150–200 words) in English.

Product name: {{name}}
Brand: {{brand}}
Category: {{category_name}}
Current short description: {{short_description}}

Focus on benefits, not just features. Use a professional but friendly tone.
```

If the output must contain HTML, enable the relevant tags in [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Running a Flow

**Run Now** — immediately processes up to 10 products. Use this to test or for small batches.

**Plan & Close** — queues the full batch for processing in the background. Use this for bulk runs.

---

## Completion lifecycle

Each generated item goes through these stages:

| Status | Meaning |
|--------|---------|
| **Pending** | Generated, awaiting review |
| **Confirmed** | Approved by you, ready to sync |
| **Synchronized** | Successfully pushed to the store |
| **Suspicious** | Contains flagged content — requires manual review before sync |

With **Automation ON** — clean content is automatically confirmed and pushed. Suspicious content always waits for manual review.

With **Automation OFF** — all content waits for you to review and confirm before syncing.

---

## Reviewing completions

Go to a Flow → **View Completions** to see all generated content.

Per item you can:

- **Edit** the generated text manually
- **Regenerate** — ask AI to generate again
- **Confirm** — approve content for syncing
- **Synchronize** — push to your store
- **View revisions** — see full edit history and diff between versions

**Bulk actions:** select multiple items → Confirm & Sync, Regenerate, or Push.

---

## Suspicious content

Fozzels automatically flags content that looks wrong:

- AI artifacts: "Sorry, I can't...", "As an AI...", "Note:", "Please"
- Empty values
- Double-encoded HTML (`&lt;`, `&gt;`)
- Markdown syntax in a non-markdown field
- Your custom suspicious words (configure in [Settings → Flow Settings](https://app.fozzels.com/user/settings/flow))

Flagged content shows exactly why it was flagged. You can:

- Edit and fix it
- Regenerate
- Override and approve anyway (if it's a false positive)

---

## Why content won't sync (push blocked) {#why-content-wont-sync-push-blocked}

| Reason | Fix |
|--------|-----|
| Flow is inactive | Enable the Active toggle on the Flow |
| Not confirmed | Confirm the completion (or enable Automation) |
| Suspicious content | Review and approve, or edit and re-save |
| Product deleted from store | Nothing to do — product no longer exists |
| Store/integration inactive | Enable the store or integration |
| Attribute not mutable | Enable Mutable flag in Integration → Attributes |

---

## Flow management

- **Duplicate** — copy a Flow to the same or a different store
- **Archive** — hide the Flow from the main list; data is preserved and can be restored
- **Delete** — permanent removal
- **Obsolete** — when a Flow is cloned due to structural changes (target attribute or conditions changed), the old version becomes obsolete; its completion history is preserved

### Structural changes warning

If you change the **target attribute** or **conditions** on a Flow that already has completions, Fozzels will warn you and offer to **"Obsolete and Duplicate"** — this creates a fresh Flow with your changes, preserving the history of the old one.

---

## Recursion warning

Triggered when the same attribute appears as both:

- An input in your prompt (`{{attr_code}}`)
- The output target attribute

This creates an infinite loop — each generation overwrites the input for the next run.

Fix:

- Remove `{{attr_code}}` from the prompt template
- OR disable "Regenerate on attribute change"

---

## Common issues

**No products match the Flow**

- Check your conditions — try removing them temporarily to see all products
- Check that the attributes used in conditions have the **Filterable** flag in Integration → Attributes

**Empty AI output**

- Check that source attributes have values for your products
- Check that attributes referenced in the prompt have the **Filterable** flag
- Make the prompt more specific

**Content not pushing to store**

- Check the [push blocked reasons](#why-content-wont-sync-push-blocked) above
- Check that the integration Active toggle is ON
- Check that the target attribute has the **Mutable** flag

**OpenAI quota exceeded**

- Top up at [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing)
- Or reduce daily volume in Flow automation settings

**Duplicate content across Flows**

- Enable "Prevent overlapping generation" with a cooldown period (e.g. 7 days)
- This prevents multiple Flows from regenerating the same product within the cooldown window
