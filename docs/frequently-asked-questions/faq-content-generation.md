---
title: 'FAQ: Content Generation'
sidebar_position: 5
unlisted: true
slug: /frequently-asked-questions/faq-content-generation
description: >-
  The most common questions about AI text generation — missing texts, batch
  limits, regeneration after prompt changes, generation errors, suspicious
  content, model choice, sync timing and cost control.
---

## Products are in my flow but texts haven't been generated.

Generation may be waiting for the next scheduled run. You can manually trigger it, or contact support to launch it for you.

## How do I confirm generated content before it's sent to my website?

If your flow is semi-automatic, confirm completions individually or use mass action in the batch list to approve multiple items.

## New products have been online for days but have no generated texts.

The scheduled generation may have been delayed. Contact support — they can manually re-pull products and launch generation.

## Can you fix missing texts for multiple brands at once?

Yes. Contact support and specify which brands/flows are affected. They can trigger generation for all at once.

## My flow shows 100% but I changed the prompt. Why are there no new texts?

Changing the prompt alone doesn't trigger regeneration of existing texts. Use Mass Action → "Regenerate content", or duplicate the flow.

## How do I regenerate all product texts after updating my prompt?

Go to completions, select all via Mass Action, and choose "Regenerate content". Alternatively, deactivate the flow, duplicate it, and activate the new version.

## The cooldown period isn't triggering regeneration.

Cooldown controls the minimum time between auto-regenerations, but it doesn't force regeneration of completed texts. Use Mass Action to regenerate.

## What causes generation errors / failed completions?

Usually high AI model processing load. Large prompts + long output + multiple images can overload the model. Failed jobs auto-retry. Try shorter prompts or a different model.

## How can I see which products failed to generate content?

Check the completion report at [app.fozzels.com/completions/product/completion/report/](https://app.fozzels.com/completions/product/completion/report/) and filter by date with the `failed_only` option.

## My batch seems stuck — no texts generated.

This can be caused by temporary AI provider token limits. The system returns to normal automatically. Contact support if it persists.

## Content generation is taking much longer than usual.

Temporary delays from token usage limits. This usually resolves automatically. Contact support if generation remains stuck.

## I see "Unknown error" on all jobs.

This happens during peak system load. The system auto-retries. If 80% or more fail, contact support — they can monitor flows and trigger them manually.

## My batch list shows 500 products but my flow has 3,380 eligible.

Fozzels limits batches to 500 products per **Plan & Close**. Click "Plan & Close" multiple times to queue additional batches.

## "Run Now" only adds 10 products.

"Run Now" is for quick testing (10 products). Use "Plan & Close" for larger batches (up to 500).

## What's the difference between "Plan & Close" and "Run Now"?

"Run Now" processes up to 10 products instantly for testing. "Plan & Close" queues a batch of up to 500 products. Use Plan & Close for production.

## What are the daily generation limits per plan?

Lower plans: 10–30 products/day. Higher plans (€299+): significantly more. Unlimited: 500 per flow per day. Contact support for temporary increases.

## Can I request a temporary limit increase for an initial fill?

Yes. For one-time large volumes, the team can temporarily increase limits. Contact support with your expected volume and timeline.

## How do I preview prompt results before syncing?

Open the flow → add your prompt → click **Save and Preview** → click **Generate Now**. The preview is not saved or synchronized.

## Why does the preview require a balance?

The preview feature consumes tokens, so a balance is required. Contact support for a small test credit if needed.

## I get "Empty Result" errors with the GPT-5 model.

GPT-5 requires more token capacity. Increase Max Tokens from 2,000 to at least 5,000.

## What Max Tokens setting is recommended?

For GPT-5: at least 5,000. Ensure prompt tokens + max_tokens doesn't exceed the model's context length.

## What are suspicious content warnings?

Fozzels validates output against a list of unwanted words. Flagged content isn't auto-synced. You can customize the list or add prompt restrictions.

## How do I reduce suspicious content warnings?

Add restrictions in your prompt, customize the suspicious words list, or use **Regenerate**. Contact support to force-sync if the content is fine.

## Can I force sync suspicious content?

Contact support — specify all flows or specific ones. They can sync flagged content on your behalf.

## My page titles are too long / hit character limits.

Adjust your prompt to specify maximum character counts. Contact support to fix existing titles that are too long.

## The string "Plain text" is appearing in my generated content.

This is a rare prompt issue. Support can review and clean affected products. Report it with specific examples.

## A product isn't going online due to Fozzels content.

Content issues (long titles, unexpected strings) can block publishing. Contact support with the product details.

## My automatic content flows stopped working.

This can be caused by Fozzels-side issues or AI provider limitations. Contact support to investigate and restart.

## My flow shows 100% green immediately after activation — is that correct?

This is a known UI issue. The initial screen may show 100% before completion. Check the flow details for the real status.

## The "Generate Now" button isn't responding.

The generation queue may be overloaded during peak times. Wait and retry, or switch to a faster AI model.

## Can I switch AI models for faster generation?

Yes, change the model in flow settings. Lighter models are faster. Different models may produce different quality.

## Which AI model should I use for the best cost/quality balance?

Multiple models are available (ChatGPT, Gemini, Claude). More powerful models give higher quality but cost more. Contact the team for recommendations.

## I get Gemini errors during large batch generations.

Gemini applies rate limits for large volumes, causing temporary errors. Jobs remain in the queue and auto-complete once limits restore.

## Suspicious content in French is being flagged incorrectly.

The filter list may include words common in other languages. Contact support to adjust the list for your language.

## Is there a syncing limit? Why is sync slow?

Syncing large volumes takes time. There are no hard limits, but it runs gradually. Contact support if it appears stuck.

## Results are poor quality because of insufficient product data.

Quality depends on available data. Enrich product data in your PIM/store before regenerating. Manual editing may be needed for data-poor products.

## How do I set up a fully-automatic flow (auto-confirm & sync)?

Select the "Fully-automatic" flow type. Results are auto-confirmed and synced with the next cron run (~4 hours). Internal validation prevents bad content from syncing.

## How often does the sync cron run?

Automatic sync runs via cron every ~4 hours. Plan generation in advance for urgent launches. Contact support for faster intervals.

## Generation stopped prematurely — could this be a memory issue?

Insufficient server memory can stop large generations. Contact support — they can increase the allocated memory.

## How do I resync all content at once using mass action?

Enable the "Show all content" toggle, then trigger **Resync** via mass action to sync everything in one go.

## HTML code is showing in my batch overview.

Toggle the **Show HTML** button to switch between formatted and raw views. This is a known UI issue being improved.

## My flows are stuck after insufficient funds and a balance top-up.

Flows may not auto-resume after a top-up. Contact support to restart queued jobs.

## What happens when a product category changes?

If auto-regeneration is enabled, the text will be regenerated when the category changes.

## How do I correct factual errors in AI-generated text?

If the data comes from a store attribute, correct it there and the content will auto-regenerate. If it was AI-generated (e.g. from images), edit it manually in the batch list.

## Why are different texts generated for the same product in different colors?

This is expected behavior. AI generates unique descriptions per product parameters — different colors produce different descriptions.

## The preview no longer shows product attributes/columns.

This changed in release 5.10. You can toggle columns on and off in the preview table. Missing columns may be a known bug.

## How do I manage multiple similar prompts across categories/brands?

Currently each flow has its own prompt. Dynamic/shared prompts are on the roadmap. Use **Duplicate** to speed up creating similar flows.

## I get a sync error because a required attribute is empty in Magento.

Fozzels can't push content if required Magento fields are empty. Check the error message and fill in the missing attribute.

## I received unexpected charges from stuck video generation.

Contact support immediately. They can credit incorrect charges and fix the issue. Delete stuck flows to stop further charges.

## Attributes disappeared from my flows/prompts.

This can happen when copying prompts between fields. Save prompts as templates. Contact support if attributes vanish without changes.
