---
id: '103000388046'
title: 2.5.4. Yoast SEO Support for WooCommerce
sidebar_position: 12
slug: /integration-connectivity/yoast-seo-support-for-woocommerce
description: >-
  This article explains how to set up full automation for your product metadata
  (titles, descriptions, focus keywords) using the Yoast SEO integration with F
---

This article explains how to set up full automation for your product metadata (titles, descriptions, focus keywords) using the **Yoast SEO** integration with Fozzels.

## Feature Overview

This integration allows Fozzels to directly manage your product's SEO parameters via API. Once generated, these fields are automatically synchronized with your WooCommerce store.

**Available attributes for mapping:**

-   **Yoast SEO Title** (`yoast_title`)

-   **Yoast SEO Meta Description** (`yoast_meta_description`)

-   **Yoast SEO Focus Keyword** (`yoast_focus_keyword`)

## Step-by-Step Setup

### Step 1: Requirements (WooCommerce side)

For successful synchronization, your WordPress site must have **two active plugins**:

1.  **Yoast SEO** – The core plugin for search engine optimization management.

2.  **Yoast SEO WooCommerce REST API by Fozzels** – Our dedicated connector plugin that enables the transfer of generated data back to your store.

> **Important:** Synchronization of SEO fields is not possible without the Fozzels connector plugin. You can download it at the bottom of this article.

### ![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/x8U6ii3HyPbJrpm22XJ4KTrBPkYOpJMBqw.png)Step 2: Activation in Fozzels

1.  Navigate to the **Integrations** section and select your WooCommerce integration.

2.  In the **Configuration** tab, find the **"Yoast WooCommerce SEO"** option.

3.  Enable the toggle and click **SAVE**.

###
![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/Q2vuNHpeZol7txxezMoTQmPyzT3To9Rwpw.png)

### Step 3: Data Structure Update

To make the new attributes visible in the Fozzels interface, you must update your data schema:

1.  Go to the **Websites & Stores** tab and click **Pull Stores/Websites**.

2.  Run a **full Product Pull (Pull Products)**.

3.  Once the pull is complete, the attribute list will refresh, and fields with the `yoast_` prefix will become available for mapping in your Flows.

![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/xD90y_FdSVGO0v5sAa1SAVmX1hHGTvb8Tw.png)

## The Ultimate Combo: WPML + Yoast + ACF

Fozzels allows you to reach the "Gold Standard" of e-commerce by combining:

-   **[WPML](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/) Support:** For multilingual SEO.

-   **[ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** For specialized technical data.

-   **Yoast SEO:** For search engine dominance. You can automate all these fields simultaneously for every language version of your store.
