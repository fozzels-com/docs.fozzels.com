---
id: '103000399446'
title: 'Release 6.1-6.2: Scalability & Enhanced Data Precision'
sidebar_position: 10
slug: /fozzels-releases-updates/release-6-1-6-2-scalability-enhanced-data-precision
description: >-
  This update focuses on optimizing platform performance for large-scale data
  and expanding data collection capabilities, ensuring you have every detail
  need
---

This update focuses on optimizing platform performance for large-scale data and expanding data collection capabilities, ensuring you have every detail needed to generate high-quality product content.

### Scalable Product Imports (Product Pull)

Fozzels is becoming even more efficient for large-scale e-commerce projects. We have improved our import architecture to ensure seamless data updates, regardless of catalog size.

-   **What’s New:** We’ve introduced an **adaptive time mechanism** to optimize the processing of large data streams.

-   **The Result:** Even if your catalog contains **hundreds of thousands of items**, synchronization remains stable, flexible, and consistent without process interruptions.

### WooCommerce: Custom Meta Fields & Reliable Sync

We’ve given WooCommerce users the flexibility to choose exactly which data they want to work with inside Fozzels.

-   **Selective Meta Fields:** You can now sync specific **custom meta fields** required for your content generation. Simply enter the field codes or group prefixes during setup, and the system will pull only the necessary information.

-   **Seamless Start:** We’ve improved the product identification logic. Even if your WordPress site uses internal IDs instead of standard SKUs, the connection will be successful and your catalog will be fully populated.

### Lightspeed: Deep Specification Scanning

We’ve taught the system to capture data hidden deeper within the Lightspeed structure, ensuring your AI-generated content is as informative as possible.

-   **What’s New:** Fozzels now recognizes and extracts data from **nested second-level specifications** that were previously overlooked.

-   **The Benefit:** The AI gains access to a complete set of product characteristics. More specific data leads to sharper prompts and higher-quality content.

### Magento 2: Media Display Control

A key update for those using testing environments to prepare and verify content before going live.

-   **Overwrite Base Media URL:** For Magento 2 stores, you can now manually change the path to your image source.

-   **The Result:** The perfect solution for **Stage Stores**. Even if stage images are stored at non-standard addresses, they will always display correctly within your Fozzels catalog.

### Improvements & Bug Fixes

-   **Improved Flow Logic:** Fixed a display error for filter conditions in duplicated flows. Previously, if a flow included a date condition, other options might not appear in the UI. This has been resolved for a more consistent user experience.

-   **Calendar & Dates:** Resolved initialization conflicts for `date` and `datetime` fields that previously caused server errors.

-   **Performance Boost:** Optimized catalog page loading speeds for a smoother workflow.

-   **UI Stability:** Enhanced interface stability when working with complex filter configurations.

**_Fozzels keeps getting better thanks to your feedback. Thank you for being part of our journey!_**
