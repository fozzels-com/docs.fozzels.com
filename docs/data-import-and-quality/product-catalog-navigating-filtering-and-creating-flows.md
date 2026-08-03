---
title: Product Catalog — Navigating, Filtering and Creating Flows
sidebar_position: 9
slug: /data-import-and-quality/product-catalog-navigating-filtering-and-creating-flows
description: >-
  The Catalog shows all products pulled from your connected store. Learn how to
  navigate it, filter products with the condition query builder, and create a
  targeted Content Flow from a selection.
---

The Catalog shows all products pulled from your connected store. It is your central view of product data inside Fozzels.

Go to [Catalog](https://app.fozzels.com/catalog)

---

## Navigating the Catalog

### Store selector

At the top of the page, select which store's products to view. Each store is shown with its integration name, website, and locale.

### Product list

Products are shown in a paginated table (25 per page by default). You can:

- **Sort** by any visible column
- **Toggle column visibility** — show/hide attribute columns
- **Full-screen mode** — expand the table to fill the screen
- **Hover a product row** — preview product images without opening the product

### Product detail

Click any product to open its detail page with:

- Full image gallery (main image + thumbnails)
- All attribute values for that product in this store
- Direct links back to the integration and website

---

## Filtering products

Use the **Condition Query Builder** to filter products by attribute values.

- Build conditions with AND/OR logic
- Filter by any attribute that has the **Filterable** flag enabled in Integration → Attributes
- Examples:
  - "description is empty"
  - "category equals Electronics AND price is greater than 100"
  - "sku contains ABC"

Click **Search** to apply the filter. The product count in the header updates to show how many products match.

Click **Reset** to clear the filter and show all products.

> If an attribute doesn't appear in the filter builder — go to Integration → Attributes and enable the **Filterable** flag for that attribute.

---

## Creating a Flow from the Catalog

The Catalog is the fastest way to create a targeted Content Flow:

1. Build a filter to find the products you want to process (e.g. "description is empty")
2. Select the matching products (checkbox in each row, or select all across pages)
3. Click **"Create Flow on Selected Products"** — this opens the Flow creation wizard pre-filled with your selection as a condition
4. Complete the Flow setup (AI model, prompt, target attribute)

This is ideal when you want to process a specific subset of products rather than building conditions manually in the Flow wizard.

---

## Common issues

**No products visible**

- The integration hasn't been pulled yet — go to your [Integration](https://app.fozzels.com/integrations/definitions) and trigger a product pull
- Make sure the store is active

**Filter attributes missing from the condition builder**

- The attribute needs the **Filterable** flag — go to Integration → Attributes and enable it

**Product images not showing**

- Images are pulled from your store — if images are missing in Fozzels, check that the integration is pulling correctly and the base media URL is configured (Magento)

**Products are outdated**

- Trigger a manual pull from your Integration page, or wait for the next scheduled pull
