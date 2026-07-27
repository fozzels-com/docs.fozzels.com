---
id: '103000367852'
title: 2.1. What is a Fozzels Integration? (Concept and Requirements).
sidebar_position: 1
slug: >-
  /integration-connectivity/what-is-a-fozzels-integration-concept-and-requirements
description: >-
  This document provides a foundational understanding of what a Fozzels
  Integration is, its role in the content lifecycle, and the necessary
  prerequisites fo
---

This document provides a foundational understanding of what a Fozzels Integration is, its role in the content lifecycle, and the necessary prerequisites for establishing a connection.

A Fozzels Integration establishes a secure, two-way data link between the Fozzels platform and your external e-commerce system (e.g., Magento, Shopify, WooCommerce). This link is the starting point for all content automation, enabling Fozzels to **Pull** product attributes and **Push** generated content back.

### 1\. The Role of Integration in the Content Lifecycle

The integration serves as the data pipeline, supporting the entire content generation process:

1.  **Data Pull:** Fozzels uses the connection to automatically **pull** product data (attributes, images, categories, prices) from your store into the Fozzels Catalog. This data forms the input for the AI prompts.

2.  **Flow Execution:** The Content Flows run within the Fozzels environment, using the pulled attributes and the selected AI model to generate new content.

3.  **Data Push:** Fozzels uses the connection to **push** the newly generated content (e.g., product descriptions, meta titles) back into the designated target attributes in your e-commerce system.

### 2\. Integration Requirements and Prerequisites

Before setting up an integration, certain requirements must be met on your e-commerce platform:

1.  **API Access:** Fozzels requires secure access to your store's Application Programming Interface (API). This typically involves generating a secure token or API key on the e-commerce platform side.

2.  **Read/Write Permissions:** The generated API credentials must have both **read (pull)** permission to access existing product attributes and **write (push)** permission to modify the target attributes (the fields where generated content will be stored).

3.  **Integration Type:** Depending on your platform (e.g., Magento 2 or Shopify), the integration method may involve installing a specific Fozzels extension/app or configuring native API keys and URLs.

4.  **Attribute Setup (Post-Integration):** Once connected, Fozzels relies on the source attributes having the **Filterable** flag and the target attributes having the **Mutable** flag enabled.

### 3\. Integration Management

Integration settings are managed within the **Configuration** and **Websites & Stores** tab of the Fozzels interface.

-   You can manage multiple integrations simultaneously, allowing you to synchronize content across different e-commerce instances or regional stores.

-   The stability of the content automation process relies directly on the stability and uptime of the established integration.
