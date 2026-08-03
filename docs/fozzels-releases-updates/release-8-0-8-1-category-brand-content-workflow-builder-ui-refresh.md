---
id: '103000409878'
title: 'Release 8.0-8.1 - Category & Brand Content, Workflow Builder, UI Refresh'
sidebar_position: 16
slug: >-
  /fozzels-releases-updates/release-8-0-8-1-category-brand-content-workflow-builder-ui-refresh
description: >-
  We're excited to introduce the v8.0 & v8.1 update to Fozzels. This release
  focuses on expanding content generation capabilities, adding workflow
  customizat
---

We're excited to introduce the v8.0 & v8.1 update to Fozzels. This release focuses on expanding content generation capabilities, adding workflow customization flexibility, strengthening data safety, and refreshing the platform interface.

# **1\. Content for Categories & Brands (Shopware & Magento 2)**

## After an extended period of development and preparation, we're rolling out support for generating and syncing content for category and brand pages.

-   **Category & Brand Flows** — Generate HTML descriptions, meta titles, meta descriptions, and custom attributes directly for categories and brands.
-   **Full Integration** — These new flow types come with all standard platform features: batch processing, revision history, and automatic syncing.

## **2\.  Workflow Builder & Rule Engine**

The new **Rule Engine** module lets you configure automatic post-processing of content before it's published.

-   **Visual Editor** — Build logical relationships using Condition, Group, and Action blocks.
-   **Processing Rules** — Automatically format text (e.g., if a title exceeds 50 characters → truncate to 45 characters while preserving whole words).
-   **Rule Assignment** — Workflows you create can be applied to Product, Category, or Brand flows.

### **Historical Data Audit & Content Validation**

-   **Existing Content Check** — Run workflows against previously generated results to flag items that need editing or regeneration.
-   **Decision Matrix** — Configure branching conditions (Yes / No / Always) for complex validation logic.
-   **Content Filters (Contains)** — Detect stop-words, prohibited characters, or format deviations.
-   **Actions (Truncate & Mark as Suspicious)** — Automatically trim text or flag results with a stated reason (e.g., "Title too long") and pause auto-sync for that item.

## **3\. Interface Update (Sidebar Navigation)**

We've redesigned the platform layout for easier navigation and a more efficient workspace.

-   **Streamlined Header** — The top bar is decluttered, now holding only contextual elements (navigation, language, notifications, and status).
-   **Structured Sidebar** — Modules are grouped by section (Main, Catalog, Integrations, Customers, AI Flows, Tools).
-   **Display Modes** — Collapse the sidebar into a compact view to free up workspace.
-   **Status Indicators** — NEW and Soon badges to help you spot new modules.

## **4\. Public Knowledge Base**

We've launched a standalone documentation portal for platform users.

-   **Multilingual** — Materials and instructions are available in 6 languages.
-   **Structured Guides** — Step-by-step instructions for setting up integrations, workflows, mapping, and AI models.

## **5\. Integration Updates (Shopware, VTEX, NextChapter)**

### Shopware Engine & Properties (Select / Multi-Select)

-   **API Optimization** — The updated connector ensures stable performance with large data volumes.
-   **Property Handling** — Direct generation and syncing for structured property fields.
-   **Value Control** — The AI respects defined constraints, passing a single value for Select fields or multiple values for Multi-Select fields.
-   **Vision AI** — Image analysis to automatically determine product parameters (style, color, collar type, etc.).

### NextChapter & VTEX: ALT Text

-   **ALT Tag Syncing** — Generate and push image descriptions to improve SEO and accessibility.

## **6\. Expanded CSV Integrations**

### Media Gallery

-   **Standardization** — A full Media Gallery module has been added for CSV integrations.
-   **Preview & Vision AI** — View images directly in the table, pass URLs into prompts, and generate media content.

### Mapping & Parsing

-   **Live Preview** — View the CSV file structure and sample data directly in the interface.
-   **Flexible Mapping** — Configure field names, formats, and column correspondences.
-   **Parsing Options** — Support for various delimiters (comma, semicolon, tab) and encodings.

## **7\. HTML Control & Code Validation**

### Editor Management (Enable Editor)

-   **Raw Code Mode** — Disable the visual editor to preserve exact AI-generated code without automatic tag adjustments (useful for FAQ accordions, embedded styles, and [Schema.org](https://schema.org/) / JSON-LD).
-   **View Modes** — Switch between code view (Show HTML) and rendered preview.

### HTML Structure Validation

-   **Automatic Checking** — Detect unclosed tags or broken code in real time.
-   **Auto-Sync Protection** — Automatically block syncing for broken elements, with a table warning: _"Completion looks suspicious, broken or unclosed HTML tags detected."_

_Your feedback and everyday experience using the platform help us keep improving Fozzels._
