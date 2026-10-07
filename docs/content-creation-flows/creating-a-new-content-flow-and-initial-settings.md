---
id: '103000367976'
title: 4.1.2. Creating a New Content Flow and Initial Settings.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  The Content Flow is the core of automation within Fozzels. It tells Fozzels
  which products to work on, which attributes to fill, which AI model to use
  and what instructions to give it.
---

The Content Flow is the core of automation within Fozzels. It tells Fozzels which products to work on, which attributes to fill, which AI model to use and what instructions to give it. Fozzels then generates, updates and synchronizes the content for your products.

One Flow can fill several attributes at once. You choose a **main attribute** when you create the Flow, and you can add up to 12 more later. All of them are generated together in one AI request per product.

This guide walks you through all four steps of a Flow, using one example: a Flow that writes a **Description**, a **Short Description** and a **Meta Description** for women's products that have photos but no description yet.

## 1\. Create a new Flow

1.  In the side menu, under **AI Flows**, click **Content Flows**. The list of Flows opens.

2.  At the top, check the integration, website and store. If you have more than one, choose the one you need from the dropdown. If you have only one, it is already selected.

3.  Click **New Product Flow** in the top right corner.
    ![Flows list with the New Product Flow button](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-01-new-product-flow-button.png)

4.  Enter a **Name** for the Flow, for example _My first content flow_.

5.  Under **Entity Type**, choose **Product**. To generate content for categories, see [4.9.1 How to Create a Content Flow for Categories](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels/).
    ![Create New Product Flow: choosing the entity type](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-02-entity-type.png)

6.  Under **Attribute**, choose the **main attribute** the Flow will fill. You can type to search, for example _description_.
    ![Searching for the main attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-03-main-attribute-search.png)

7.  Click **Save**.
    ![New Flow form ready to save](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-04-new-flow-save.png)

:::tip
**Choose the largest attribute as the main one**, for example the full description. In the results, the main attribute gets the full editor with a preview, while the additional attributes are shown below it.
:::

:::note
**Generating image alt texts?** Choose **Media Gallery** as the attribute. See [4.3.2.a Alt Texts for Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/) and [4.3.2.b Alt Texts for NextChapter](/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/).
:::

## 2\. AI Configuration

After you save, Fozzels opens the **AI Configuration** step. From now on, the top of the page shows the **Active flow** switch and the Flow name. Click the pencil next to the name to rename the Flow.

1.  Under **AI Provider Selection**, choose the provider: OpenAI | ChatGPT, Anthropic, xAI or Google | Gemini.
    ![Choosing the AI provider](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-05-ai-provider.png)

2.  Under **Model**, click a model tile. Each tile shows the price per 1K input and output tokens, the price of a web search, whether the model can read product images and whether it supports web search. See [4.2.1 AI Configuration](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features/).

3.  Optional: tick **Enable Web Search** if your prompt asks the AI to look up information online, for example on your product page.

4.  Optional: under **Image Usage**, set the **Image count** (up to 5). The AI then analyses that many product images, in the order they come from your integration. More images use more tokens. Leave it empty to use only the prompt text.

5.  Keep **Enable Image Resize** on. Fozzels then shrinks images that are larger than 2 MB and either not a JPEG or wider or taller than 2048 pixels. See [4.2.2 Image Optimization](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/).
    ![Model tiles, web search, image usage and image resize](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-06-model-and-image-settings.png)

6.  Optional: choose one or more **Text styles** (for example _Creative_, _Informative_) and **Text tones** (for example _Inspirational_).
    ![Text styles and text tones](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-07-text-styles-tones.png)

7.  Click **Save**, then **Next step**.

:::note
**Image Resize costs a small fee per image, but switching it off does not always skip it.** Very large images are still resized and charged automatically, for every AI provider. Without this, the generation would fail with an error, or the AI would write something like "I can't see the image" into your content.
:::

You can come back to these settings at any time, even after the Flow has started generating.

## 3\. Flow Selection & Prompt

### 3.1 Check the main attribute and its format

At the top you see the main attribute you chose in step 1.

Decide whether the result should contain HTML. Click the eye button next to the attribute. In the **Edit attribute** window, untick **Allow HTML** if you need plain text without markup, then click **Save**. See [4.7.3 Allowed HTML Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation/).

![Edit attribute window with Allow HTML](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-08-edit-attribute-allow-html.png)

:::warning
The other fields in this window are technical settings of your integration. Do not change them unless you know what they do. If you need help, contact support.
:::

### 3.2 Select the products

Use **Filter & Select Products** to choose which products the Flow works on. The number of selected products is shown in the block title and on the step 3 tab.

![Flow Selection & Prompt step: main attribute and filters](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-09-filter-select-products.png)

- Click **Add condition** to add a filter: choose an attribute, an operator and a value.
- Choose **All conditions** (every condition must match) or **Any condition** (one is enough).
- Click **Add condition group** to combine conditions in more complex ways.

**Example.** To write descriptions for women's products that have photos and no description yet:

| Attribute | Operator | Value |
| --- | --- | --- |
| Categories | is one of | Women |
| Media Gallery | has an image | Yes |
| Description | is empty | |

![Filter example: women's products with images and no description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-10-filter-example.png)

:::warning
If you set no conditions, the Flow uses **all** products in the store.
:::

:::tip
To avoid overwriting content you already have, add a filter like **Description is empty** for the attribute you generate.
:::

For all filter options, see [Product Filtering for Content Generation](/data-import-and-quality/product-filtering-for-content-generation/).

#### Save your filters for reuse

If you plan more Flows for the same products, for example descriptions, meta tags and alt texts, save the filters once:

1.  Click **Filter set → Save as new**.
    ![Filter set menu](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-11-filter-set-menu.png)

2.  Enter a name, for example _Women - empty descriptions_, and click **Save**.
    ![Saving a filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-12-filter-set-save.png)

3.  The set now appears in the **Filter set** menu. Click it to apply it, or click the bin to delete it.
    ![Saved filter set in the menu](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-13-filter-set-saved.png)

Saved filter sets are available everywhere you filter products: in integrations, in the catalogue and in Flows. You can also combine a saved set with extra conditions.

### 3.3 Write the prompt

In the **Prompt** section, write the instructions for the AI and add product data to them:

- Type `/` in the editor, or click or drag an attribute from the **Attributes** panel. Each attribute is added as a condition line, so it is skipped for products where it is empty.
- Use **Snippets** such as **Attribute list** to add a ready block of product data in one click.
- Check the **Preview** on the right. It updates as you type and shows the final prompt for a real product. Use **&lt; &gt;** to check a few products.
- To reuse a prompt in other Flows, use **Save as template** and **Load**.

![Prompt editor with the live Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-14-prompt-editor-preview.png)

For the full guide, see [4.3.2 Prompt Setup and Usage](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

:::warning
Do not use the attributes you are generating as input in the prompt. For example, if the Flow writes the Description, do not insert the Description attribute into the prompt. In a Flow with several attributes, this applies to each of them. See [Recursion Detection](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation/).
:::

#### Check for features that are turned off

When you save, Fozzels checks whether your prompt needs a feature that is turned off in this Flow. For example:

- the prompt asks the AI to analyse the product images, but no **Image count** is set;
- the prompt asks the AI to read your product page, but **Enable Web Search** is off.

A warning then appears above the steps. Click **Open AI Configuration** to turn the feature on, or **Ask Jane** to get help from the AI assistant.

![Warning about features turned off for this Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-15-disabled-features-warning.png)

### 3.4 Fill more attributes in the same Flow

Below the prompt, under **Additional attributes to fill**, you can add up to 12 more attributes. All attributes of the Flow are generated together in one AI request per product, so product data and images are sent only once.

1.  Choose an attribute in the dropdown and click **Add attribute**.
    ![Adding an additional attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-16-additional-attribute-add.png)

2.  In **Instruction for this attribute**, write what the AI should produce. The field works like the main prompt editor, with the Preview, the Attributes panel and Snippets. When the instruction is filled in, the row shows **Prompt set**.
    ![Instruction for Short Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-17-instruction-short-description.png)

3.  Click the eye in the row to open the attribute settings. For meta titles and meta descriptions, untick **Allow HTML**, because they must be plain text.
    ![Instruction for Meta Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-18-instruction-meta-description.png)

4.  Repeat for each attribute, then save.

:::tip
Give each attribute a clear length limit, for example _2–3 sentences, 35–60 words_ for a short description or _120–160 characters, never more than 160_ for a meta description.
:::

### 3.5 Test the prompt

Before you run the Flow, test what the AI generates on a few products.

1.  At the bottom of the step, click **Save and Preview**.
    ![Save and Preview button](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-19-save-and-preview.png)

2.  A table with your selected products opens. Click a cell in the **Prompt** column to see the full prompt the AI will get. In a Flow with several attributes, each attribute is listed under its own heading with its own instruction. Click **Copy to Clipboard** to copy it.
    ![Test generation table](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-20-test-generation-table.png)
    ![Full prompt sent to the AI](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-21-test-generation-prompt.png)

3.  Click **Generate Now** in a product row. The result opens in a window, with each attribute under its own heading. Click **Show HTML** to see the markup.
    ![Test generation result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-22-test-generation-result.png)

:::info
A test generation is **free** and does **not** start the Flow. The result is not saved, so if you want to keep it, click **Copy to Clipboard** before you close the window.
:::

Adjust the prompt and test again until you are happy with the result. Then click **Next step**.

## 4\. Automation

![Automation settings](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-23-automation-settings.png)

| Setting | What it does |
| --- | --- |
| **Amount of products to create content for per day** | How many products the Flow processes each day, up to 500 |
| **Fully automatic** | Generated content is confirmed and sent to your store right away, without manual review. Content flagged as suspicious is still held for review. Works only when the Flow is active |
| **Confidence threshold** | Optional, from 0.1 to 1.0. The AI reports how sure it is of each value. Values below the threshold are held for review instead of being sent automatically. The higher the threshold, the more content you review. Leave it empty to switch it off. Useful together with **Fully automatic** |
| **Automatically create a new text when an attribute of a product changes in your store** | Regenerates the content when an attribute used in the prompt changes in your store |
| **Prevent double content generation with other Flows** | Stops a product from getting new content if another Flow already generated it. Choose **Inherit** (use your global settings), **Override** (set a period for this Flow only) or **Turn Off**. See [4.4.1 Prevent Overlapping Content Generation](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/) |
| **Workflows** | Optional extra actions for this Flow. Workflows run from top to bottom; drag them or use the arrows to change the order. See [4.11.1 Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) |

:::tip
Most users start with **Fully automatic** off and review the first results by hand.
:::

### Launch the Flow

1.  Turn on **Active flow** at the top of the page. The launch buttons become available only for an active Flow.

2.  Choose how to start:

| Option | What happens |
| --- | --- |
| **Plan & Close** | The Flow starts the next day, after the nightly catalogue update. It then processes the **Amount of products per day** every day until all selected products are done |
| **Run Now** (arrow next to **Plan & Close**) | The Flow processes the first **10 products** right away. After that, it continues on the daily schedule |

![Duplicate prevention, workflows and launch buttons](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-24-launch-buttons.png)

An active Flow also picks up new products that match its filters after each nightly update. For a full pre-launch checklist, see [4.1.2.a How to Set Up Automated AI Content Flows](/content-creation-flows/how-to-set-up-automated-ai-content-flows/).

## 5\. Review the results in the Batch List

1.  Click **Batch List** at the bottom of any Flow step. In a Flow with several attributes, each attribute has its own column, so you see all results for a product in one row.
    ![Batch List with a column per attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-25-batch-list.png)

2.  Click any generated value to open the **Edit completion result** window:
    - The main attribute is at the top, with **Enable Editor**, **Show HTML** and a preview.
    - The other attributes are listed below under **Other attributes filled by this Flow**. Expand each one to read and edit it. Select and multiselect attributes are edited with a dropdown.

    ![Edit completion result window](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-26-edit-completion-result.png)

3.  Edit the text if needed and click **Save**.

4.  Turn on **Batch Confirmed**, then click **Save & Sync** to send the content to your store. Until the result is confirmed, syncing is disabled. In a **Fully automatic** Flow, results are confirmed for you.

Other buttons in the window:

- **Regenerate** generates the content again. It always regenerates **all** attributes of the Flow together.
- **Show Revisions** shows earlier versions. See [4.8.1 Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/).
- **Copy to Clipboard** copies the content.

### Suspicious content

If a result does not pass Fozzels' quality checks, the problem parts are highlighted in yellow and the result is not synchronized. You can either fix the highlighted parts by hand and save, which costs nothing, or click **Regenerate** to generate all attributes again. See [4.7.4 Suspicious Words & Phrases](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

For more on reviewing and syncing results, see [4.7.1 Tracking of the Generated Results](/content-creation-flows/tracking-of-the-generated-results-dashboard/) and [4.7.5 Editing Content in the Batch List](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/).
