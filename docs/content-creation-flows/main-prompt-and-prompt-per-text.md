---
title: '4.3.4 Main Prompt and Prompt per Text: How Fozzels Sends Your Prompt'
sidebar_position: 11.5
slug: /content-creation-flows/main-prompt-and-prompt-per-text
description: >-
  Each request to the AI has two parts: the main prompt, which is the same for
  every product, and the prompt per text, which holds the product data. What
  goes where, why, and how to move an existing Flow over.
---

Fozzels sends the AI a prompt for each product. That prompt has two parts:

- the **main prompt**, which holds the rules for the whole Flow and is the same for every product, and
- the **prompt per text**, which holds the task for one field, with the data of this product.

Fozzels sends the main prompt to the AI as a *system instruction*: the standing orders that the AI keeps in mind while it does the task. This article tells you what goes in each part, why it matters and how to move an existing Flow over.

## The two parts at a glance

| | Main prompt | Prompt per text |
|---|---|---|
| **What it is** | The rules that apply to every text of the Flow | The task for one field |
| **Typical content** | Who writes, for whom, in which tone, the neuromarketing principles, keywords, what never to mention, the check rules, your own standing instructions | Length, structure, the trust block, internal links, and the instruction with the product's attributes |
| **Product data** | Not allowed. It must read the same for every product | Yes: attributes, conditions and snippets |
| **Where you edit it** | Step 3 of the Flow wizard (**Main prompt**), or the **Main prompt** card on the Flow page | Step 4 of the Flow wizard (**Prompt per text**), one tab for each field |
| **Sent** | One time, ahead of the prompts for the fields | For each field, with the data of this product |

:::note
Some articles and screenshots still use the earlier names of the steps: step 3 was called **Enrich the text** and step 4 **Fields**. The Flow page card was called **System prompt**. They are the same steps and card.
:::

## Why two parts?

- **The AI follows your rules better.** AI models give more weight to a system instruction than to a line in the middle of a long prompt. Tone, words to avoid and the form of address are kept more consistently across all your products.
- **Your product data cannot overrule your rules.** Text in a product field, such as a supplier note that says "ignore the instructions above", stays in the prompt per text. It does not change the rules in the main prompt.
- **Faster and cheaper on large Flows.** The main prompt is the same, word for word, for each product. AI providers can reuse a part of a request that they have already seen, which makes the request faster and can lower the cost.

## What goes in the main prompt

Put everything that is true for **every** text of the Flow in the main prompt:

- **Role of the AI**, **Target audience** and **Tone of voice**
- **Neuromarketing principles**
- **Keywords**
- **Do not mention**: words and topics that must never be in the text
- **Guidelines and check rules**, the Fozzels standard rules and your own rules
- **Your own instructions**, in your own words, for example "Always address the reader as *you*" or "We ship in 24 hours, never promise faster delivery"

In step 3, you switch these blocks on and fill them in. Fozzels writes the main prompt from them. The sources that you set in step 3 (**Attributes from your store**, **Look at photos** and **Search the internet**) are different for each product, so Fozzels sends them with the prompt per text. Below the blocks, under **Your main prompt**, you see the result, and you can also edit it by hand.

### No product data in the main prompt

The main prompt must be the same for every product, so you cannot use product data in it:

- The editor of the main prompt has no **Attributes** panel and no **Preview**. A preview would look the same for every product. Instead, each block shows the text that the AI reads for it.
- Snippets that read product data, and snippets with conditions, are not available there. If such a snippet is already in a main prompt and you add product data to it, Fozzels shows the message *"This snippet is in the main prompt of … The main prompt is the same for every product, so the snippet cannot read the product there."* Take the snippet out of those main prompts first, or save your change as a new snippet.

Everything that depends on the product goes in the prompt per text.

## What goes in the prompt per text

The prompt per text is the task for one field. In step 4, each field of the Flow has a tab with:

- the **length** of the text,
- the **structure**: the sections, their order and their headings,
- the **trust block** and the **internal links**, for fields that take them,
- the **Instruction for [field]**: what the AI must write in this field, with the attributes and conditions of the product.

The main prompt applies to every field, so you do not repeat the role, the tone or the rules here. Write only what is special for this field, for example *"Write a meta description of at most 155 characters that names the brand and the main benefit."*

Fozzels adds the technical instructions to the prompt per text itself: the answer format, the options that a select field allows and the maximum length of the field. You do not need to write these.

## Where to edit the main prompt

- **In a new Flow:** step 3, **Main prompt**. A new Flow starts with the main prompt of your default [Brand Profile](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/#brand-profile).
- **In an existing Flow:** on the Flow page, the **Main prompt** card shows the main prompt as the AI reads it. Click **Change** to edit it. Only the main prompt is saved. The prompts per text stay as they are.
- **Brand Profiles:** in step 3, click **Load brand profile** to use a saved profile, or **Save as brand profile** to keep the main prompt of this Flow for other Flows. A Flow gets a copy of the profile. When you change the profile later, Fozzels does not change your existing Flows.

## Existing Flows

You do not have to do anything. Flows that you made before this change keep working:

- The main prompt of an older Flow starts empty, and its prompt stays where it was.
- Blocks for the whole Flow that are already in the prompt, such as the role, the audience or the tone, are sent with the main prompt automatically.
- Text that you typed yourself stays in the prompt per text, exactly where you wrote it. Fozzels does not move your own sentences, because a sentence can mean something different away from its neighbours.

To get the full benefit, move your standing rules into the main prompt yourself.

### Moving an existing Flow over

1. Open the Flow and read its prompt. Mark the sentences that are true for **every** product: the persona, the brand voice, the audience, the form of address, the words to avoid.
2. On the Flow page, click **Change** on the **Main prompt** card.
3. Add these rules with the blocks (role, audience, tone, do not mention, your own rules), or type them as your own instructions. Save.
4. Delete the same sentences from the prompt of each field, so the AI does not get them twice.
5. Test the Flow on a few real products and compare the texts with the previous results.

**Example.** A prompt that held everything:

> You are a copywriter for a premium shoe brand. Write for women aged 30–50 who value comfort. Never mention prices or discounts. Always use "you".
> Write a product description of about 120 words for **Name**. Mention the material **Material** and the colour **Colour**.

After the move:

- **Main prompt:** *You are a copywriter for a premium shoe brand. Write for women aged 30–50 who value comfort. Never mention prices or discounts. Always use "you".*
- **Prompt per text (Description):** *Write a product description of about 120 words for* **Name**. *Mention the material* **Material** *and the colour* **Colour**.

## Good to know

- **No double instructions.** If a field prompt still has a block that the main prompt already has, for example a second tone of voice, Fozzels sends that block only one time, from the main prompt.
- **Several fields in one Flow.** All fields are made in one AI request for each product, and they share the main prompt. Thus the role, the audience and the rules apply to the extra fields automatically.
- **See what was sent.** In the list of generated content, the prompt of each text shows both parts, the main prompt first.

## Related articles

- [4.1.2. Creating a Content Flow: the six-step walkthrough](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.3.2 Prompt Setup and Usage: The New Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)
- [4.3.3. Writing Effective Prompts (Recommendations)](/content-creation-flows/writing-effective-prompts-recommendations/)
