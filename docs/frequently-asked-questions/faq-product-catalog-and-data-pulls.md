---
title: 'FAQ: Product Catalog and Data Pulls'
sidebar_position: 8
unlisted: true
slug: /frequently-asked-questions/faq-product-catalog-and-data-pulls
description: >-
  How the nightly catalog pull works, why new or missing products don't appear,
  variant and category differences, custom attribute filtering and custom pull
  schedules.
---

## The product catalog updates on a nightly schedule. How does it work?

The catalog updates automatically every night at 01:30. After the pull, all flows are updated with the latest data. New products matching flow filters are automatically added.

## New products added to my webshop don't appear in Fozzels.

Products appear after the next scheduled catalog pull (nightly at 01:30). To see them immediately, trigger a manual product pull.

## Fozzels shows fewer products than expected — some color combinations are missing.

Fozzels filters products based on specific conditions and groups at the product-color level, excluding size variants. Compare your filter conditions with your database to find discrepancies.

## I can't find a specific product category in Fozzels.

The category tree in Fozzels may differ from your store. Use filters to search. If you still can't find it, contact support with a screenshot from your admin.

## Products are missing from my flow because of an empty stock attribute.

Check the flow filter conditions. If a stock condition (e.g. "Voorraad IS NOT NULL") excludes products with empty stock values, either populate the data or remove the condition.

## A manual data pull isn't updating attributes.

After a pull, Fozzels needs processing time — data isn't instant. If attributes remain unchanged, contact support.

## When should I manually trigger a product pull?

After major catalog changes, new product sets, large additions or removals, or feed/integration changes.

## How do I filter products by custom attributes (e.g. "Webshop Article = Yes")?

Custom filtering attributes must be present in the data feed. Once they're in Fozzels, use them as flow filter conditions. If an attribute doesn't appear, contact support.

## A product was removed from the catalog due to variant configuration.

Fozzels filters based on variant settings, and disabled variants may exclude products. Contact support to review the configuration.

## Can I set a custom product pull schedule (not just nightly)?

Yes. Since release 5.14 you can set a custom time for product pulls at both integration and store level.
