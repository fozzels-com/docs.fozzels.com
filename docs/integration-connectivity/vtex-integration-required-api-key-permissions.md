---
id: '103000406106'
title: 2.8.1 VTEX integration — required API key permissions
sidebar_position: 18
slug: /integration-connectivity/vtex-integration-required-api-key-permissions
description: >-
  What API key permissions do I need to connect Fozzels to VTEX? To connect your
  VTEX store to Fozzels, you need to create an API key in your VTEX admin and
---

## What API key permissions do I need to connect Fozzels to VTEX?

To connect your VTEX store to Fozzels, you need to create an API key in your VTEX admin and assign the right permissions. This article explains exactly which permissions to enable.

## Step 1 — Create an API key in VTEX

1.  Log in to your VTEX admin panel
2.  Go to **Account Management → Account → App Keys**
3.  Click **Generate new key**
4.  Give it a name (e.g. _Fozzels Integration_)
5.  Copy both the **App Key** and **App Token** — you will need these in Fozzels

## Step 2 — Assign permissions to the API key

### Option A: Use the pre-built integration role (recommended)

VTEX provides a ready-made role designed for external catalog integrations:

1.  In your App Key settings, go to **Roles**
2.  Search for and add the role: **IntegrationProfile-externalCatalog**
3.  Save — this single role covers all permissions Fozzels needs

### Option B: Add individual permissions manually

If you prefer to set minimum required permissions, add the following resources to your API key role:

#### Catalog System

Resource

Why it is needed

Get sales channel list

Fozzels uses this to connect to your store and detect your locale settings

Get product and SKU IDs

Required to retrieve the full list of products from your catalog

Get specification field list by category

Allows Fozzels to read your product attribute definitions

Get product specifications

Reads the current attribute values on each product

#### Catalog

Resource

Why it is needed

Get product by ID

Fetches full product details for AI content generation

Update product

**Write permission.** Fozzels uses this to push generated descriptions, titles and meta descriptions back to your store

Get SKU by product ID

Retrieves SKU-level information for each product variant

Get SKU file

Reads existing product images

Add SKU file

**Write permission.** Required if you use Fozzels to generate and push product images

Create/update product specification

**Write permission.** Allows Fozzels to write back generated content to product attribute fields

#### Category

Resource

Why it is needed

Get category tree

Fozzels uses your category structure to organise your product catalog

## Step 3 — Enter the credentials in Fozzels

1.  Log in to your Fozzels account
2.  Go to **Integrations → Add integration → VTEX**
3.  Enter your **Account name** (the subdomain of your VTEX store, e.g. `mystore`)
4.  Enter the **App Key** and **App Token** from Step 1
5.  Click **Test connection** to verify everything works

## Frequently asked questions

**Do I need to give Fozzels access to Orders or Payments?**
No. Fozzels only works with your product catalog. It does not need access to orders, logistics, pricing, checkout or any payment information.

**I have a multi-language / cross-border store. Do I need extra permissions?**
For single-language stores, the permissions above are sufficient. Multi-language write-back is on our roadmap and may require an additional permission when released. We will update this article at that time.

**Can I restrict the API key to specific IP addresses?**
Yes. Contact our support team to get the current Fozzels server IP address for whitelisting.
