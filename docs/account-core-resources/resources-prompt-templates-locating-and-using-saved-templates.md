---
id: '103000367846'
title: '1.5. Resources. Prompt Templates: Locating and using saved templates.'
sidebar_position: 8
slug: >-
  /account-core-resources/resources-prompt-templates-locating-and-using-saved-templates
description: >-
  Prompt Templates are reusable, pre-configured text models used as input for
  the AI to generate specific types of product content. These templates are
  confi
---

Prompt Templates are reusable, pre-configured text models used as input for the AI to generate specific types of product content. These templates are configured independently of the content generation flows and form a core part of the automation logic. They are typically used for generating product descriptions, meta titles, or meta descriptions.

To access the management area, navigate to **Settings → Prompt Templates**.

Template Management Table

The main table provides an overview of all created templates.
Each entry includes: the unique identifier (ID), the type of template rule (Kind, currently only Product Attribute is available), the product attribute the prompt is linked to (Attribute, e.g., descriptions, meta titles), the template's name (Name), the actual prompt text, and a Shared icon, indicating if the template is visible to and shared across other users in your project.

Available actions include: View, Edit, and Delete.
![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/5LRXIMOwIb-G8vgFQIGjxXsovlESPjZRYA.png)

Locating and Filtering Templates

You can quickly find specific templates using the **Search** field located in the upper-right corner.
Additionally, the columns ID, Kind, Attribute, and Name are sortable.
Clicking on a column header toggles the sorting order (ascending or descending).
Use the pagination controls at the bottom of the table to navigate through multiple pages if your template list is extensive.

Viewing the Full Prompt Content

Clicking on any cell within the **Prompt** column opens a modal window displaying the full, detailed text of the prompt. This modal includes:

-   The Show HTML button, which toggles the preview of the prompt text with applied HTML formatting.

-   The Copy to Clipboard button, which copies the full prompt text for external use or editing.

-   The Close button, which closes the modal window.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/_NS3hQVxBRRo9EBlkjZjD9wrjEloxWjA3A.png)

Creating a New Prompt Template

To create a new template, click the **New Prompt Template** button at the top of the page. This opens a modal window with the required form fields:

1.  **Attribute** (Required): Select the specific product content field (e.g., Description, Meta title) this prompt is designed to populate. This links the prompt to the correct target content field.

2.  **Name** (Required): Enter a clear, descriptive name. Best practice is to include the language and purpose (e.g., EN: Short description for shoes) for easy identification.

3.  **Kind** (Required): Select the rule kind. Currently, only Product Attribute is available.

4.  **Template** (Required): Enter the core prompt content here. This text, combined with dynamic variables (e.g., $brand, if $color), forms the instruction sent to the AI for generation.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/MqPK3HDwXl7cBuruSGQhTcI2GMYLzXfHOQ.png)

Prompt Logic and Best Practices

-   **Dynamic Variables**: Prompt text should utilize conditional logic and dynamic variables (e.g., if tags, {{vendor}}) to pull in product-specific data, avoiding hardcoding.

-   **Styling**: Ensure the language and style requirements (e.g., tone, use of bullet lists, HTML format) match your use case.

-   **Content Safety**: The prompt must be well-formed and respectful to prevent potential rejection by the AI service (OpenAI).
