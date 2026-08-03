---
title: Integrations — Overview, Setup, Attribute Flags and Diagnostics
sidebar_position: 21
slug: >-
  /integration-connectivity/integrations-overview-setup-attribute-flags-and-diagnostics
description: >-
  An Integration is a secure connection between Fozzels and your e-commerce
  store or PIM. This guide covers supported platforms, setup steps, attribute
  flags, pull schedules, platform-specific notes and the full WooCommerce
  diagnostics reference.
---

An Integration is a secure connection between Fozzels and your e-commerce store or PIM system. Once connected, Fozzels can pull your product data and push AI-generated content back to your store.

## Supported platforms

- **Shopify** — full support including Shopify Markets (multi-language)
- **Magento 2** — including multi-website and multi-store setups
- **WooCommerce** — via REST API
- **Shopware 6**
- **Lightspeed**
- **Akeneo** — PIM system
- **Katana PIM**
- **BizzLayer**
- **EK Retail**
- **NextChapter**
- **StoreInfo Catalog XML**

## Integration hierarchy

Integration → Website(s) → Store(s) → Products & Attributes

Each integration can contain multiple websites, and each website can contain multiple stores (e.g. different languages or regions).

---

## Setting up an integration

### Step 1 — Create the integration

- Go to [Integrations](https://app.fozzels.com/integrations/definitions)
- Click **Add Integration** and select your platform
- Enter a name, your store URL, and platform credentials
- Save — Fozzels will validate the connection

### Step 2 — Sync websites and stores

- After saving, click **Synchronize** to pull the list of websites and stores from your platform
- Activate the websites and stores you want to work with
- Note: activating stores counts against your plan quota

### Step 3 — Pull products

- Once stores are active, trigger a **Product Pull**
- Fozzels imports all products with their attributes and images
- You can monitor pull progress in real time (shows items processed / total)

### Step 4 — Configure attributes

- Go to the **Attributes** tab of your integration
- Enable the attributes you want to use
- Set **Filterable** flag on attributes you want to filter products by or use as input in Flows
- Set **Mutable** flag on attributes where AI-generated content will be written

---

## Attribute flags explained

| Flag | What it does |
|------|-------------|
| **Filterable** | Attribute appears in the Catalog filter and can be used as input in Flow prompts (`{{attribute_code}}`) |
| **Mutable** | Fozzels can write AI-generated content to this attribute (required for Flow output) |
| **Enabled** | Attribute is active and visible in Fozzels |
| **HTML-able** | Allows HTML content in this attribute (text/textarea types only) |

> If you can't select an attribute as a Flow target — check that it has the **Mutable** flag enabled.
>
> If an attribute doesn't appear in the Catalog filter or Flow prompt — check that it has the **Filterable** flag enabled.

---

## Pull schedule

Fozzels can automatically pull products and run Flows on a schedule:

1. Product Pull — fetches latest product data from your store
2. Flow Sync — matches products to active Flows
3. Attribute Refresh — updates attribute values
4. AI Generation — generates content
5. Data Export — pushes content back to your store

You can set a custom pull time (format: `HH:MM`, e.g. `14:00`) per integration or per store. If not set, the system default (00:30 UTC) is used.

To change your timezone, go to [Settings → Profile](https://app.fozzels.com/user/settings/profile).

---

## Integration status

| Status | Meaning |
|--------|---------|
| **Active** | Integration is enabled and will process data |
| **Authorized** | Credentials are valid (Shopify only) |
| **REST API Connected** | Live connection test passed |

> The integration must be **Active** for any pulling or pushing to work.

---

## Platform-specific setup

### Shopify

1. In Shopify Admin go to: Settings → Apps → Develop apps → Create an app
2. Required API scopes: `read_product_listings`, `read_products`, `write_products`, `read_metaobject_definitions`, `read_metaobjects`, `read_product_feeds`
3. For Shopify Markets (multi-language) also add: `write_translations`, `read_translations`, `write_markets`, `read_markets`, `read_locales`
4. In Fozzels enter: API key, API Secret, and your `.myshopify.com` URL
5. Integration status must show **Authorized: yes** AND **REST API Connected: yes**

### Magento 2

1. In Magento Admin go to: System → Integrations → Add Integration
2. Copy: Consumer Key, Consumer Secret, Access Token, Access Token Secret
3. Also enter the `admin_front_name` (usually `admin`)
4. **Important:** Manually add the `fozzels_completion_date` attribute to ALL Attribute Sets in Magento Admin (Catalog → Attributes → Attribute Sets). Fozzels cannot do this automatically because Magento supports multiple attribute sets per store.
5. After saving: activate the integration → sync websites/stores → pull products

### WooCommerce

- Generate a REST API key in WooCommerce → Settings → Advanced → REST API
- Required permissions: Read/Write
- Enter Consumer Key and Consumer Secret in Fozzels

#### WooCommerce optional plugin integrations

WooCommerce integrations support four optional plugin flags. Each requires additional WordPress plugins to be installed.

**ACF (Advanced Custom Fields)**

- Enable with: "Enable ACF (Advanced Custom Fields)" toggle in Fozzels integration settings
- Required WordPress plugins: "Advanced Custom Fields" AND "ACF to REST API"
- What it does: pulls custom product fields defined in ACF into Fozzels as attributes (prefixed `acf_`)
- Writing back: ACF values are written via WooCommerce `meta_data` endpoint

**Yoast SEO**

- Enable with: "Yoast WooCommerce SEO" toggle in Fozzels integration settings
- Required WordPress plugins: "Yoast SEO" AND "Fozzels SEO Fields REST API for WooCommerce" (bridge plugin, download from app.fozzels.com)
- What it does: pulls Yoast SEO title, meta description, and focus keyword as attributes (prefixed `yoast_`)
- Writing back: values are written via the `seo_fields` key in the WooCommerce REST API

**All in One SEO (AIOSEO)**

- Enable with: "All in One SEO" toggle in Fozzels integration settings
- Required WordPress plugins: "All in One SEO" AND "AIOSEO API Sync" (bridge plugin, download from app.fozzels.com)
- What it does: pulls SEO title, description, keywords, Open Graph fields, Twitter fields, and focus keyphrase as attributes (prefixed `aioseo_`)
- Writing back: values are written via the `aioseo` key in the WooCommerce REST API

**WPML (Multilingual)**

- Enable with: "Enable WPML Multilingual Support" toggle in Fozzels integration settings
- Required WordPress plugin: WPML
- What it does: creates a separate Fozzels store per language; products are pulled per language using the language-prefixed URL (e.g. `/de/wp-json/wc/v3/products`)
- After enabling: go to Integration → Synchronize to create the language stores

---

#### WooCommerce connection & plugin diagnostics

When you test the connection or run a product pull, Fozzels checks each enabled plugin. Here are all possible errors and how to fix them:

**Connection errors**

| Error | Meaning | Fix |
|-------|---------|-----|
| WordPress was not found at the provided URL | The URL doesn't point to a WordPress site | Check the URL is correct and publicly accessible |
| WooCommerce REST API is not available | WooCommerce not installed or REST API disabled | Install WooCommerce and enable REST API under WooCommerce → Settings → Advanced |
| Unable to connect to the store | Network/DNS issue | Check the URL is reachable from the internet |
| The connection timed out | Store is unreachable or firewall blocking | Check server firewall and ensure the URL is publicly accessible |
| Invalid API credentials | Wrong Consumer Key or Consumer Secret | Generate a new API key under WooCommerce → Settings → Advanced → REST API |

**ACF errors**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both "Advanced Custom Fields" and "ACF to REST API" plugins are required | One or both plugins missing | Install and activate both plugins in WordPress admin |
| "ACF to REST API" is active but "Advanced Custom Fields" is not installed | ACF bridge installed but main ACF plugin missing | Install and activate the "Advanced Custom Fields" plugin |
| Failed to verify ACF plugin status | Could not reach the plugin check endpoint | Check WordPress connectivity and try again |

**Yoast SEO errors**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both "Yoast SEO" and "Yoast SEO WooCommerce REST API by Fozzels" plugins are required | One or both plugins missing | Install and activate both plugins in WordPress admin |
| "Yoast SEO" is active but the "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed | Bridge plugin missing | Download the bridge plugin from app.fozzels.com and activate it |
| Your "Fozzels SEO Fields REST API for WooCommerce" plugin is outdated | Old version of the bridge plugin | Download and install the latest version from app.fozzels.com |
| The "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed or not active | Bridge plugin not found | Download from app.fozzels.com and activate in WordPress admin |
| Failed to verify Yoast SEO plugin status | Could not reach the plugin check endpoint | Check WordPress connectivity and try again |

**AIOSEO errors**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both "All in One SEO" and "AIOSEO API Sync" plugins are required | One or both plugins missing | Install and activate both plugins in WordPress admin |
| "All in One SEO" is active but the "AIOSEO API Sync" plugin is not installed | Bridge plugin missing | Download the AIOSEO API Sync plugin from app.fozzels.com and activate it |
| Your "AIOSEO API Sync" plugin is outdated | Old version of the bridge plugin | Download and install the latest version from app.fozzels.com |
| The "AIOSEO API Sync" plugin is not installed or not active | Bridge plugin not found | Download from app.fozzels.com and activate in WordPress admin |
| Failed to verify All in One SEO plugin status | Could not reach the plugin check endpoint | Check WordPress connectivity and try again |

**WPML errors**

| Error | Meaning | Fix |
|-------|---------|-----|
| WPML plugin is not active or not installed | WPML not found on WordPress | Install and activate the WPML plugin in WordPress admin |
| WPML is active but no languages are configured | WPML installed but no languages added | Go to WPML → Languages and add at least one additional language |

**Conflict errors**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both Yoast SEO and All in One SEO are active at the same time | Plugin conflict | Using both simultaneously may cause conflicts — disable one of them in WordPress admin |

**General**

| Error | Meaning | Fix |
|-------|---------|-----|
| An unexpected error occurred while connecting | Unknown error | Try again; if problem persists contact Fozzels support |

---

## Common issues

**Integration not pulling products**

- Check that the **Active** toggle is ON
- Check that websites and stores are activated
- Trigger a manual pull from the integration page

**Attributes not showing in Catalog filter or Flow prompts**

- The attribute needs the **Filterable** flag — go to Integration → Attributes and enable it

**Can't set an attribute as Flow output target**

- The attribute needs the **Mutable** flag — go to Integration → Attributes and enable it

**Shopify connection issues**

- Both **Authorized** and **REST API Connected** must be green
- Double-check all required API scopes are enabled in your Shopify custom app

**Magento — `fozzels_completion_date` missing**

- This must be manually added to every Attribute Set in Magento Admin
- Go to: Catalog → Attributes → Attribute Sets → open each set → add the attribute

**Store quota exceeded**

- You've hit the maximum number of active stores on your plan
- Deactivate unused stores or upgrade your plan at [Plans](https://app.fozzels.com/user/settings/plans)

**Products marked as "lost"**

- Products or stores were removed from the source platform
- Lost items are kept in Fozzels for reference but won't sync

---

## Managing integrations

- **Archive** — disables the integration and hides it from the main list; data is preserved and can be restored
- **Pull progress** — real-time progress bar showing items processed; can be paused or stopped
- **Bulk attribute update** — select multiple attributes and change flags at once
- **Auto-detect blank** — automatically finds attributes with no values across products
