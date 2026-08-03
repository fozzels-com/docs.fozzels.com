---
title: 'FAQ: Prompts and AI Quality'
sidebar_position: 6
unlisted: true
slug: /frequently-asked-questions/faq-prompts-and-ai-quality
description: >-
  Prompt competition, image framing and branding, consistent feature formatting,
  mixed-language output, and language fallback logic in prompts.
---

## My AI image ignores framing instructions (full body instead of torso).

This is caused by **prompt competition** — conflicting instructions (e.g. "full-body" together with "only torso"). Remove all conflicting triggers and use specific language such as "waist-up portrait pose".

## The logo and branding are blurry in generated images.

Full-body shots distribute rendering across the entire body. Switch to portrait/waist-up framing and add specific branding instructions in the prompt.

## Do you have prompt optimization tips for image generation?

Avoid contradictory instructions, add explicit exclusions, use portrait-specific language, and protect branding details. Contact support for a prompt review.

## My product features are formatted inconsistently (list vs inline).

Add explicit formatting rules to the prompt: each feature on a new line, bold names, no bullet symbols. Use UPPERCASE emphasis for key rules.

## How do I write prompts for consistent product feature formatting?

Specify the structure (description + features section), format it as a vertical list with bold labels, prohibit bullets, and list the required features.

## The AI generates incorrect material/attribute info from images.

When Fozzels lacks access to specific fields, the AI guesses from photos — which is unreliable for technical details. Connect ACF/custom attributes for accurate data.

## Can the Fozzels team review my flows and prompts?

Yes, they can advise on structure, specialization, and optimization. Schedule an online session for detailed guidance.

## Can Fozzels match my custom frontend layout (e.g. an accordion)?

Fozzels can't guarantee matching complex layouts. Experiment with prompts, but manual adjustment may be needed.

## I get mixed language output (e.g. English + Dutch).

Write all prompt instructions in the desired output language and don't mix languages. Add a strong note: "IMPORTANT: Output must be entirely in [language]."

## My prompt generates mixed languages when I copy it from another store.

Don't copy and add translation instructions. Write the entire prompt in the target language from scratch, and create separate prompts per language.

## Can I use language fallback logic in prompts (e.g. Czech → German)?

You can try conditional logic in the prompt: "If Czech text is available, use it. If not, use German." Results depend on the AI's language detection ability.
