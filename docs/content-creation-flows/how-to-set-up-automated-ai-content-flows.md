---
id: '103000408983'
title: 4.1.2.a How to Set Up Automated AI Content Flows
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  How to let a Content Flow generate and sync product content automatically:
  check the Flow before the launch, set the daily limit, approval and updates
  in the Launch step, and start the Flow.
---

An automated Content Flow generates product content in the background every day and sends it to your shop. You do not have to start the tasks yourself.

You set the automation in step 6 of a Content Flow, **Launch**. For a description of all six steps, see [4.1.2. Creating a Content Flow: the six-step walkthrough](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

## Step 1: Check the Flow before the launch

Do these three checks before you launch the Flow. They prevent errors.

1. **Check the product selection.** In step 2, **What and with what?**, make sure that the selection contains only the products that you want to process.
2. **Test the prompt.** In step 5, **Test**, generate texts for some real products. Make sure that the texts and the scores are correct.
3. **Prevent recursion.** Do not use the field that the Flow writes to as a source in the prompt. For example, do not use `product_description` as input to generate a new `product_description`. Otherwise Fozzels can generate the text again and again.

## Step 2: Set the automation in the Launch step

In step 6, **Launch**, answer three questions:

1. **How many products per day?** Select 10, 25, 50 or 100, or type your own number. The limit keeps the costs and the review work small. When Fozzels completed the current selection, the Flow automatically takes new products that agree with it.
2. **What happens with a new text?**
    - **I approve every text first** (recommended): new texts go to your review list. Fozzels sends nothing to your shop before you approve it.
    - **Straight to my shop**: Fozzels publishes the texts automatically. You can still edit them or go back to the previous version. Texts that Fozzels marks as suspicious always wait for your review.
3. **If a product changes later?** Turn on the toggle to let Fozzels write a new text automatically when an attribute that the prompt uses changes in your store, for example the colour or the material. When the toggle is off, Fozzels writes a text for a product only one time.

Under **Advanced settings**, you can also:

- set the cooldown that prevents other Flows from generating the same content again: **Use default**, **Override** or **Turn off**. For more information, see [4.4.1 Prevent Overlapping Content Generation](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).
- click **Connect workflow** to add an action that runs after each text, for example a translation.

## Step 3: Launch the Flow

1. Click **Launch flow**.

    Fozzels shows the message "Your flow is running". The Flow processes products every day, up to the daily limit, until it completed all products in the selection.

2. To start the generation immediately, open the Flow page, click the **…** menu and click **Run Now**. Fozzels starts immediately, also when the Flow already reached the daily limit for today.

To continue the setup later, click **Save as draft** instead of **Launch flow**.

## Rules and recommendations

- **The Flow must be active.** Fozzels runs only active Flows. When you stop a Flow, Fozzels stops all scheduled runs until you start the Flow again.
- **You can change an active Flow.** Your changes apply to all new texts. Fozzels does not change the texts that it already generated, unless you generate them again.
- **New products join automatically.** After each catalog update, Fozzels compares the products in your store with the selection of the Flow. New products that agree with the selection, for example 20 new products in a category, go into the Flow automatically.

## Related articles

- [4.1.2. Creating a Content Flow: the six-step walkthrough](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.7.4 Suspicious Words & Phrases: Advanced Content Quality Control](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)
- [3.5 "Recursion detected" warning when creating a Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)
- [4.4.1 Prevent Overlapping Content Generation function](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)
- [4.7.3 Allowed HTML Tags for AI Text Generation](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
