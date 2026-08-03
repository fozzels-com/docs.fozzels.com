---
id: '103000367983'
title: 4.3.2 Prompt Creation & Filtering. Drag & Drop Prompt Editor
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  This guide shows you how to configure the Prompt Field - the main tool for
  creating dynamic instructions for product text generation - using available
  prod
---

This guide shows you how to configure the **Prompt Field -** the main tool for creating dynamic instructions for product text generation - using available product attributes, conditional logic, and localization settings.

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/psn6waVbTI-sOgG8K_n_-XihT1sjhb4AUg.png)
**1\. Components of the Prompt Configuration Tab**

The interface tab is divided into five main sections for maximum efficiency in building your prompt logic:
1\. **Prompt Field**. The central text area for writing the prompt. Purpose - w**rite** the text with integrated attribute/condition logic.

2\. **Attributes Section**. A list of all available product attributes for the selected store. Purpose - **insert** static product data (e.g., product name, SKU).

3\. **Attributes (if filled) Section**. A list of conditions (**if-blocks**) that can be used for dynamic content. **Insert** dynamic content logic (e.g., _IF_ Color is Blue _THEN_ generate 'Blue only' content).

4\. Separated **Search inputs**. You can freely **switch** between the attributes and conditions sections.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/EDjHQgzURl0i0nmUnAyYimUlW-FvXAQNlw.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/1J6uMJo933Qd572KPGbVIQr86A9B-BBJng.png)
5\. Templates Section. The **Prompt Template** block contains **Load** (to import a template) and **Save** (to save the current prompt as a template).
**2\. The Prompt Field (Central Logic)**

The Prompt Field is where you WRITE the logic that forms the final text.

Supported Content
The field supports a combination of free text and dynamic blocks:

1\. **Insert** attributes and conditions (via click or drag & drop).

2\. **Edit** free text of any complexity.

3\. **Use** standard formatting and HTML tags (e.g., `<h1>`, `<ul>`, `<strong>`).

4\. **Combine** regular text with dynamic blocks seamlessly.
Interaction with Elements

1\. **Insert** elements into text by **CLICKING** or by **DRAGGING & DROPPING** them to the cursor position.

2\. **Delete** an element by pressing **Backspace** or **CLICKING** the **"x"** on the element directly in the field.

3\. **Reuse** the same attribute or condition multiple times in different parts of the prompt.

Element Status

Inactive (not in prompt) - Gray
Active Attribute - Green
Active Condition (if-block) - Yellow-orange

**3\. Data Density and Localization**

#### Data Density Percent
Every attribute is linked to a **data density percent -** the percentage of data availability across the entire integration.
**Hover** over the attribute to view its data density percentage in the tooltip.
**Use** attributes with high density (closer to 100%) to ensure successful content generation across most of your products.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/x-1OzeZAjTMnJ0UwMl8MW3nuBRADUaDtbA.png)
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/qq-rfN44U1KguTDHRUx4nMlmBYUMPgTCzw.png)

Attribute Localization
1\. **SELECT** the desired store to view the localized attribute names in the lists (e.g., `product_name` for en-US, `product_naam` for nl-NL).

2\. If an attribute name is unavailable for a language version, the default store name (marked with a star `*`) will be used.

3\. You can **change** the localized name in the integration settings → attribute → locale.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/bbfwJyznmpbxED-ZSOB2WHgKynrMD8sVHA.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/KVJCJb6ASEbmnAJE5T92lf8pj73VAn6hjA.png)

Reviewing and Saving

1\. The **Prompt field** is initially empty when creating a new Flow.

2\. Click **Save & Preview** to generate and display a unique prompt for each product in the product table, considering available attribute values and applied conditions.
3\. **Note:** although adding attributes and conditions is not mandatory, it is strongly **recommended** for generating texts for a set of products, as it helps personalize content and improves relevance.
For advice on how to write high-quality, effective prompts, read the guide [here](/content-creation-flows/writing-effective-prompts-recommendations/) .
