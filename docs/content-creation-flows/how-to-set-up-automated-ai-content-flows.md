---
id: '103000408983'
title: 4.1.2.a How to Set Up Automated AI Content Flows
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Automated Content Flows in Fozzels allow you to generate and synchronize
  product content automatically in the background - without requiring you to
  trigger
---

Automated Content Flows in Fozzels allow you to generate and synchronize product content automatically in the background - without requiring you to trigger tasks manually every day.

This guide covers everything you need to know to set up, test, and run automated flows safely and efficiently.

## Step 1: Pre-Launch Checklist

Before enabling automation, we strongly recommend completing these three checks to prevent errors:

1.  **Verify Product Selection:** Double-check your filters in the flow setup to ensure the flow targets the exact product set you want to process.

2.  **Test Your Prompt:** Run a test generation using **Save & Preview** to confirm the output meets your quality standards.

3.  **Avoid Prompt Recursion:** Ensure your prompt does not reference the exact attribute you are writing to (e.g., using `product_description` as an input to generate a new `product_description`). This prevents recursive generation loops.

## Stеp 2: Configure the Automation Settings

Navigate to the **Automation** tab within your Flow settings and configure the following parameters:

-   **Daily Processing Limit:** Set how many products should be processed each day (up to **500 products per active flow per day**). This cap guarantees consistent and reliable execution within every 24-hour cycle.

-   **Fully Automatic Mode (Optional):**

-   **Enabled:** Generated content automatically gets approved and synchronized to your webshop (except items flagged by suspicious words or validation checks).

-   **Disabled:** Content is generated automatically, but remains in pending status for manual review and approval before syncing.

-   **Create New Content When Attribute Values Change (Optional):** When enabled, Fozzels automatically regenerates content whenever an attribute used in your prompt is updated in your store. This keeps your content fresh with zero manual work.

## Step 3: Launching Your Flow

Once your settings are configured, activate the flow and choose one of the two launch options:

### Option A: Plan & Close (Recommended for Background Batches)

Click **Plan & Close**. The flow will enter planned status and will automatically start processing after the next scheduled nightly catalog update, continuing daily until all matching products are processed.

### Option B: Run Now (Immediate Start)

Click **Run Now**. Fozzels will immediately process the first **10 products** for an instant preview. After this initial batch, the flow continues on its daily scheduled automated path according to your configured daily limit.

## Key Rules & Best Practices

-   **Active Status Required:** For a planned flow to run daily, it must remain **Active**. Deactivating the flow pauses all scheduled runs until it is re-enabled.

-   **Editing Active Flows:** You can edit prompt rules or settings in a planned flow at any time. Updates will apply to all future generations, while previously generated content remains untouched unless manually regenerated.

-   **Dynamic Product Selection:** Active planned flows automatically evaluate your store catalog after every nightly sync. If new products match your flow filters (e.g., 20 new items added to a category), they are automatically enrolled in the flow for processing.

## Related Help Articles

-   **Suspicious Words & Quality Control:** _[4.7.4 Suspicious Words & Phrases: Advanced Content Quality Control](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)_

-   **Avoiding Recursion Warnings:** _[3.5 "Recursion detected" warning when creating a Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)_

-   **Preventing Overlapping Flows:** _[4.4.1 Prevent Overlapping Content Generation function](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)_

-   **HTML Formatting Rules:** _[4.7.3 Allowed HTML Tags for AI Text Generation](/content-creation-flows/allowed-html-tags-for-ai-text-generation)_
