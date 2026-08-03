---
id: '103000395329'
title: 2.5.7. Something went wrong with your WooCommerce connection?
sidebar_position: 14
slug: >-
  /integration-connectivity/something-went-wrong-with-your-woocommerce-connection
description: >-
  Don't worry — most connection issues are quick to fix. This guide will walk
  you through the most common messages you might see and exactly what to do.
  What
---

Don't worry — most connection issues are quick to fix. This guide will walk you through the most common messages you might see and exactly what to do.

##

## What does "Connection Issues Detected" mean?

When you save your WooCommerce integration, Fozzels automatically checks if everything is set up correctly. If something is missing or needs attention, you'll see a message explaining what to do next.

##

## Base Connection

-   **"Authentication failed."** Your API keys are wrong or outdated. Go to your WooCommerce store → **Settings → Advanced → REST API**, generate new keys, and paste them into Fozzels.

-   **"Access denied."** Your API key doesn't have the right permissions. When creating the key in WooCommerce, make sure to select **Read/Write** — not Read-only.

-   **"REST API not found."** Double-check the URL you entered. It should look like `https://yourstore.com` — no extra slashes or typos.

-   **"Cannot reach your store."** Your store might be offline, or a security plugin is blocking access. Check that your store is up and running, then try again.

-   **"SSL certificate error."** Your store's security certificate has an issue. Contact your hosting provider to fix it.

##

## ACF (Advanced Custom Fields)

-   **"Both plugins are required."** You need two plugins active on your WordPress site: **Advanced Custom Fields** and **ACF to REST API**. Go to **Plugins → Add New** and install both.

-   **"ACF is active but the connector plugin is missing."** You have ACF installed but you're missing the second plugin. Install **ACF to REST API** and activate it.

-   **"Connector is active but ACF is not."** The second plugin is there but ACF itself isn't running. Go to **Plugins** and activate **Advanced Custom Fields**.

-   **"Permalink structure is incompatible."** Go to **WordPress → Settings → Permalinks** and switch from "Plain" to anything else — **Post name** works great. Save and you're done.

-   **"ACF fields are not visible via REST API."** Open your ACF Field Group, go to **Group Settings**, and turn on **Show in REST API**. Don't forget to save.

-   **"ACF REST API version mismatch."** Go to **WordPress → Settings → Permalinks → ACF to REST API** and set the version to **v3**.

##
WPML (Multilingual)

-   **"WPML plugin is not detected."** Install and activate the **WPML Multilingual CMS** plugin on your WordPress site. Then add at least one language under **WPML → Languages**.

-   **"WPML is active but no languages are configured."** You have WPML installed but haven't added any languages yet. Go to **WPML → Languages** and add the ones you need.

-   **Just enabled WPML?** After turning it on, go back to **Websites & Stores** and click **Pull Stores/Websites**, then re-run **Pull Products**. This is how Fozzels learns about your language versions.

##
Yoast SEO

Yoast SEO needs two things to work with Fozzels: the **Yoast SEO** plugin and our **Fozzels connector plugin**. You can download the connector from **app.fozzels.com**.

-   **"Both plugins are required."** Neither plugin is active. Install and activate **Yoast SEO** and the **Fozzels connector plugin** in WordPress.

-   **"Connector plugin is not installed."** Yoast SEO is running but our connector is missing. Download it from **app.fozzels.com** and activate it in **Plugins**.

-   **"Yoast SEO is not active."** The connector is there but Yoast SEO isn't running. Go to **Plugins** and activate **Yoast SEO**.
-   **"Your connector plugin is outdated."** _(just a heads-up)_ Everything still works, but we recommend updating the connector to the latest version for the best experience. Download it from **app.fozzels.com**.
**Just enabled Yoast SEO?** Re-run **Pull Stores/Websites** and **Pull Products** so Fozzels can load your SEO fields.

* * *

## AIOSEO (All in One SEO)

-   AIOSEO also needs two things: the **All in One SEO** plugin and our **AIOSEO API Sync by Fozzels** connector. Download the connector from **app.fozzels.com**.

-   **"Both plugins are required."** Neither plugin is active. Install and activate both in WordPress.

-   **"Connector plugin is not installed."** AIOSEO is running but our connector is missing. Download it from **app.fozzels.com** and activate it.

-   **"AIOSEO is not active."** The connector is there but AIOSEO isn't running. Go to **Plugins** and activate **All in One SEO**.

-   **"Your connector plugin is outdated."** _(just a heads-up)_ Everything still works, but updating the connector is recommended. Download the latest version from **app.fozzels.com**.

**Just enabled AIOSEO?** Re-run **Pull Products** so Fozzels can load your AIOSEO fields.

* * *

## Using Yoast SEO and AIOSEO at the same time?

These two plugins don't work together — in Fozzels or in WordPress. Pick one and disable the other on both sides. Not sure which to choose? Go with whichever you're already using on your store.

* * *

## Still stuck?

If nothing above helped, reach out to us at **[support@fozzels.com](mailto:support@fozzels.com)** or open a ticket in the Help Center. A screenshot of the error message goes a long way in helping us sort it out quickly!
