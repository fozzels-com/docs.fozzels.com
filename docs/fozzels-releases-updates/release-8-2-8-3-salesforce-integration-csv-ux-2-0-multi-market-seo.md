---
id: '103000410961'
title: 'Release 8.2-8.3 - Salesforce Integration, CSV UX 2.0 & Multi-Market SEO'
sidebar_position: 17
slug: >-
  /fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo
description: >-
  Releases v8.2 and v8.3 bring major steps forward with Enterprise integrations,
  a complete redesign of the CSV module, expanded multilingual SEO…
---

Releases **v8.2 and v8.3** bring major steps forward with **Enterprise integrations**, a complete redesign of the **CSV module**, expanded multilingual SEO capabilities for Shopify, and enhanced inventory-based filtering logic.

## 1\. Enterprise Integration: Salesforce Commerce Cloud

We have expanded our ecosystem of official Fozzels connectors with native support for **Salesforce** to serve Enterprise-level merchants.

-   **Content Automation:** Seamless generation and two-way synchronization of enriched HTML content, meta tags, and attributes for both **Products** and **Category pages**.

-   **Enterprise Scalability:** Fast and reliable bulk data processing built to handle large catalog volumes without performance trade-offs.
    ![](/img/kb/fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo/gijc0EWvFlC1zyvnpAeXsONb3oKC7iTWEQ.png)

## 2\. CSV Integration Redesign (UX 2.0 & Media Gallery)

We completely overhauled the CSV import module to make file uploading, mapping, and configuration 200% more intuitive and visual.

-   **Native Media Gallery:** Preview images and media assets directly inside the table interface.

-   **Upgraded Mapping Engine:** A clean, user-friendly interface for mapping CSV columns to Fozzels' internal field structure.

-   **Data Control:** Visual mapping validation significantly reduces human error and speeds up onboarding for new product catalogs.

## 3\. Shopify Enhancements: Multi-Market SEO & Logistics

### Multi-Market & Multilingual ALT Text Sync

Solves a major pain point for international and multi-region e-commerce stores.

-   **Localized ALT Tags:** Fozzels can now generate and sync **different localized ALT texts for the exact same image assets** based on language and target market.

-   **Full Ecosystem Compatibility:** Out-of-the-box support for **Shopify Markets** and translation apps (including **LangShop**).

### Weight & Weight Unit Support

-   **Accurate Shipping Calculations:** Added automated sync for product weight values (`weight`) and measurement units (`weight unit`).

-   **Standardized Formats:** The `weight unit` field uses a strict **Select** input format to prevent formatting errors and ensure seamless checkout shipping rate calculations.

## 4\. Smart Stock Filtering for VTEX

Optimize AI generation costs with precise, inventory-aware catalog selection.

-   **Stock-Based Filtering:** Filter products directly at the VTEX integration layer using a boolean availability attribute (`Stock = Yes / No`).

-   **Resource Efficiency:** Automatically skip out-of-stock items (`Stock = No`) to focus AI generation exclusively on active inventory.

## 5\. Bug Fixes & Stability

-   **Katana PIM Integration:** Resolved an issue affecting data synchronization with Katana PIM. Two-way data exchange now runs smoothly and reliably.

_Thank you to the entire team for bringing these updates to life, and to our users for your continued feedback! Try out the new features and let us know what you think._
