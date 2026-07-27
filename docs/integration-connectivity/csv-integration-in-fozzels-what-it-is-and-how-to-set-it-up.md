---
id: '103000406293'
title: '2.9.1 - CSV Integration in Fozzels: What It Is and How to Set It Up'
sidebar_position: 20
slug: >-
  /integration-connectivity/csv-integration-in-fozzels-what-it-is-and-how-to-set-it-up
description: >-
  What Is CSV Integration? CSV integration allows you to connect your product
  catalog to Fozzels using a standard CSV file. If your platform doesn't have a
  d
---

## What Is CSV Integration?

CSV integration allows you to connect your product catalog to Fozzels using a standard CSV file. If your platform doesn't have a direct integration with Fozzels — no problem: simply export your data as a CSV and upload it. Fozzels will read your products and their attributes, giving you access to the full range of platform features.

## Step 1 — Create a New Integration

In the top navigation menu, click **Integrations**, then click the **\+ Create** button in the upper right corner.

## Step 2 — Choose the Integration Type

You will see a list of available platforms: Akeneo, Shopify, Magento2, WooCommerce, and others. To connect via file, select **Raw File**.

## Step 3 — Configure the Integration

A form will open with three steps: **Configuration → Websites & Stores → Attributes**.

### Required Fields

Before uploading your CSV file, fill in the three required fields:

-   **Name** — a name for the integration (e.g. `My Product Catalog CSV`)
-   **URL** — a link to the source (if applicable)
-   **SKU column** — the exact name of the column in your file that uniquely identifies each product (e.g. `sku`, `product_id`, `article`)

Then click **Save**. Only after saving will the CSV upload area become active.

> ? **Why is this?** The system needs to know the SKU column name before reading the file — this is required for correct data processing. Save your settings first, then upload the file.

### Format Options

Parameter

Default value

Description

Format

CSV

File format

Delimiter

Comma (,)

Column separator

Enclosure character

`"`

Value wrapper character

Encoding

UTF-8

File encoding

First row is header

Yes

Whether the first row contains column headers

SKU column

—

Name of the column that uniquely identifies each product

### Global Pull Schedule

This sets the time for automatic synchronization. The default is `03:30`. If you need a different schedule for a specific store, you can override it in that Store's settings.

> ? To activate the integration, enable the **Active** toggle in the upper right corner of the form. Without this, no synchronization will run.

## Step 4 — Upload the CSV File

After saving, the upload area becomes active. You can upload your file in two ways:

-   **Drag & drop** — drag your CSV directly into the upload zone
-   **Upload** — click the blue **Upload** button and select a file from your computer

Once uploaded, the file name and size will appear below the drag & drop zone — confirming the file has been added successfully.

> ? When reading the file, the system uses the format settings you defined earlier: delimiter, encoding, and enclosure character.

After uploading the file, click **Save** again — the system will automatically move you to the **Websites & Stores** tab.

## Step 5 — Websites & Stores

Click the **Pull Websites and Stores** button — the system will create a record for your virtual website and store. This is the standard approach in Fozzels: even when working with a file upload, the platform uses the universal website → store structure.

Once the record appears in the table, **activate the website and store** using the toggles in the **Status** column.

When both are active, the **Pull products** button becomes available. Click it to start importing products from your CSV file into the Fozzels catalog.

> ? The table also shows the **Pull schedule** — the sync time you set in Step 3. You can override it per Store if needed.

## Step 6 — Viewing Imported Products

Once the pull is complete (the progress bar reaches 100%), click the **View products** icon in the Actions column to open the product catalog for this integration.

### How data is organized:

-   Each **row** from the CSV becomes a separate product
-   Each **column** from the CSV becomes a product attribute

### Managing Column Visibility

Not all attributes are shown by default. To choose which columns to display, click **Column visibility** in the upper right corner of the table and check the attributes you need.

### Filtering Products

Two filtering options are available:

-   **Inline filters** — fields directly below column headers for quick search
-   **Advanced filter** — flexible AND/OR condition logic for complex queries

### Bulk Actions

Once you've selected the products you need, the full Fozzels toolkit is available: grouping products, creating product sets, and launching Content Flow, Image Flow, or Video Flow based on your selection.

> ? This way, your CSV file becomes a fully functional data source in Fozzels — with all the platform's content tools at your disposal.

## Step 7 — Preparing Attributes Before Creating a Flow

Before creating a Content Flow, make sure the target attribute is properly configured. Go to the **Attributes** tab of your integration and click the edit icon (pencil) next to the attribute you want to use:

-   **Mutable** — this must be enabled. Without it, Fozzels cannot write generated content to this field, and the attribute will not appear in the dropdown when creating a Flow.
-   **Allow HTML** — enable this if you want to generate content with HTML markup (e.g. descriptions with `<p>`, `<ul>` tags, etc.).

> ? Learn more about attributes, Data Density, and custom fields in our article: [Attribute Quality Analysis](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

## Step 8 — Creating a Content Flow

To generate content based on your imported products, you need to create a **Content Flow**. There are two ways to do this:

**Option 1 — via the Content Flows menu:** Go to **Content Flows** in the top menu and click **\+ Create**.

**Option 2 — directly from the catalog:** Select the products you need (or all of them) → open the **Actions** dropdown → select **Create a new Content Flow**.

In the creation form, enter a **Name** and select the **Attribute** — the column for which content will be generated.

The rest of the process is standard and consists of four steps:

**Step 1 — New Flow:** name and target attribute.

**Step 2 — AI Configuration:** choose an AI provider (OpenAI, Google Gemini, etc.), model, text style and tone, and token limit.

**Step 3 — Flow Selection & Prompt:** activate the flow, set up product filtering, and write your prompt. Use attributes with a high Data Density score for best results. Learn more in our article: [Prompt Creation & Filtering](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor).

**Step 4 — Automation:** set the number of products per run, configure the schedule, and launch via **Run Now** or **Plan & Close**.

> ? If you're new to Content Flows, we recommend reading: [Flow Definition and Content Types](/content-creation-flows/flow-definition-and-content-types-text-image-video) and [Creating a New Content Flow](/content-creation-flows/creating-a-new-content-flow-and-initial-settings).

## Step 9 — Getting the Results

Unlike other integrations (Shopify, Magento, etc.), **the "Save & Sync" button does not work for CSV** — there is no live connection to a store to push data back to. Instead, results are downloaded manually via export.

### How to Export Generated Content

1.  Go to the **Batch List** of your flow
2.  Select the records you need via **Actions → Select All** (or manually)
3.  In the **Actions** dropdown, choose **Export as CSV**
4.  Confirm in the pop-up by clicking **Start Export**
5.  The system will queue the file — you'll receive a notification when it's ready

### Where to Download the File

Go to **Dashboard → Export / Generated Data**. This page shows a table of all generated files with an **Available** status. Find your file and click the **ZIP** button to download it.

> ⚠️ **The file is only available for 24 hours** from the time it was created. Make sure to download it before it expires.

## Useful Links

-   [Attribute Quality Analysis. Data Density. Custom Attributes](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes)
-   [Flow Definition and Content Types (Text, Image, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)
-   [Creating a New Content Flow and Initial Settings](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Prompt Creation & Filtering. Drag & Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)
