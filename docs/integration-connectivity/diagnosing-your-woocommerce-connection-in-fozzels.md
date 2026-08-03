---
id: '103000395334'
title: 2.5.8. Diagnosing Your WooCommerce Connection in Fozzels
sidebar_position: 15
slug: /integration-connectivity/diagnosing-your-woocommerce-connection-in-fozzels
description: >-
  If you see a "Connection Issues Detected" banner after saving your WooCommerce
  integration, this article will help you understand what each message means a
---

#

If you see a **"Connection Issues Detected"** banner after saving your WooCommerce integration, this article will help you understand what each message means and how to fix it.

##
How the Diagnosis Works

Every time you save your integration, Fozzels automatically checks the connection to your WooCommerce store and the status of any enabled plugins. If something is missing or misconfigured, you will see a notification with a description of the issue and the steps to resolve it.

There are three types of notifications:

-   **Error** — something is blocking the connection. The integration will not work until this is resolved.
-   **Warning** — the integration can work, but something may cause issues or limit functionality.
-   **Notice** — informational message, no action is strictly required but recommended.

##
Base Connection Messages

These messages appear regardless of which plugins you have enabled.

-   **"Authentication failed. Check your Customer Key and Customer Secret."**
    Your API credentials are incorrect or have been regenerated since they were copied. Go to **WooCommerce → Settings → Advanced → REST API**, regenerate the keys, and paste them into Fozzels.

-   **"Access denied. Your API key requires Read/Write permissions."**
    The API key was created with Read-only access. Fozzels needs Write access to push generated content back to your store. Regenerate the key and select **Read/Write** in the Permissions dropdown.

-   **"REST API not found. Check your store URL."**
    The WooCommerce REST API could not be reached at the provided URL. Make sure you entered the correct store URL (e.g. `https://yourstore.com`) and that the WooCommerce REST API is enabled.

-   **"Cannot reach your store. Check the URL, server status, or firewall settings."**
    Fozzels could not establish a connection. Your store may be offline, the URL may be wrong, or a firewall or security plugin may be blocking external API requests.

-   **"SSL certificate error. Ensure your store uses a valid HTTPS certificate."**
    Your store's SSL certificate is invalid or expired. Contact your hosting provider to renew or replace the certificate.

##
ACF (Advanced Custom Fields)

These messages appear when the **Enable ACF** toggle is turned on in Fozzels.

-   **"Both 'Advanced Custom Fields' and 'ACF to REST API' plugins are required. Make sure both are installed and active."**
    Neither plugin is detected on your WordPress site. Install and activate both **Advanced Custom Fields** and **ACF to REST API** in your WordPress admin panel under **Plugins → Add New**.

-   **"'Advanced Custom Fields' is active but the 'ACF to REST API' plugin is not installed."**
    ACF is installed but the connector plugin is missing. Install and activate the **ACF to REST API** plugin to allow Fozzels to read your custom fields.

-   **"'ACF to REST API' plugin is active but 'Advanced Custom Fields' is not active."**
    The connector plugin is installed but ACF itself is not active. Go to **Plugins** in your WordPress admin and activate **Advanced Custom Fields**.

-   **"Permalink structure is incompatible with REST API."**
    Your WordPress permalink structure is set to **Plain**, which breaks REST API access. Go to **WordPress → Settings → Permalinks** and select any structure other than Plain (e.g. **Post name**). Save the changes.

-   **"ACF fields are not visible via the REST API."**
    Your ACF Field Group is not exposed to the REST API. Go to **ACF → Field Groups**, open the relevant group, navigate to **Group Settings**, and enable both **Active** and **Show in REST API**.

-   **"ACF REST API version mismatch. Version v3 is required."**
    If you are using the **ACF to REST API** plugin, it must be set to v3. Go to **WordPress → Settings → Permalinks → ACF to REST API** and set the **Request Version** to **v3**.

##
WPML (Multilingual)

These messages appear when the **Enable WPML** toggle is turned on in Fozzels.

-   **"WPML plugin is not detected on your WordPress site."**
    The WPML plugin is not installed or not active. Install and activate **WPML Multilingual CMS** on your WordPress site, then configure at least one additional language under **WPML → Languages**.

-   **"WPML is active but no languages are configured."**
    WPML is installed but no additional languages have been set up. Go to **WPML → Languages** and add at least one language to your store.

-   **After enabling WPML, re-run Pull Stores/Websites and Pull Products.**
    This is required so Fozzels can detect all language locales and load the correct product versions for each language. Without re-running the pull, new locales will not appear in the system.

* * *

## Yoast SEO

These messages appear when the **Yoast WooCommerce SEO** toggle is turned on in Fozzels. Yoast SEO integration requires two active plugins on your WordPress site: **Yoast SEO** and the **Yoast SEO WooCommerce REST API by Fozzels** connector plugin.

> You can download the Fozzels connector plugin from **app.fozzels.com** or from the setup guide in the Knowledge Base.

* * *

-   **"Both 'Yoast SEO' and 'Yoast SEO WooCommerce REST API by Fozzels' plugins are required."**
    Neither plugin is detected. Install and activate both in your WordPress admin panel.

-   **"'Fozzels SEO Fields REST API for WooCommerce' plugin is not installed or not active."**
    Yoast SEO is active but the Fozzels connector plugin is missing. Download and install it from **app.fozzels.com**, then activate it in **Plugins**.
-   **"Yoast SEO is not active."**
    The connector plugin is installed but Yoast SEO itself is not active. Go to **Plugins** and activate **Yoast SEO**.

-   **"Your 'Fozzels SEO Fields REST API for WooCommerce' plugin is outdated."**
    You are using an older version of the connector plugin. The integration will continue to work, but we recommend updating to the latest version for improved performance and compatibility. Download the latest version from **app.fozzels.com**.

-   **After enabling Yoast SEO, re-run Pull Stores/Websites and Pull Products.**
    This is required to load `yoast_title`, `yoast_meta_description`, and `yoast_focus_keyword` attributes into your Fozzels catalog.

* * *

## AIOSEO (All in One SEO)

These messages appear when the **AIOSEO** toggle is turned on in Fozzels. AIOSEO integration requires two active plugins: **All in One SEO** and the **AIOSEO API Sync by Fozzels** connector plugin.

> You can download the Fozzels connector plugin from **app.fozzels.com** or from the setup guide in the Knowledge Base.

-   **"Both 'All in One SEO' and 'AIOSEO API Sync' plugins are required."**
    Neither plugin is detected. Install and activate both in your WordPress admin panel.

-   **"'All in One SEO' is active but the 'AIOSEO API Sync' plugin is not installed."**
    AIOSEO is active but the Fozzels connector plugin is missing. Download and install it from **app.fozzels.com**, then activate it in **Plugins**.

-   **"'AIOSEO API Sync' plugin is active but 'All in One SEO' is not active."**
    The connector plugin is installed but AIOSEO itself is not active. Go to **Plugins** and activate **All in One SEO**.

-   **"Your 'AIOSEO API Sync' plugin is outdated."**
    You are using an older version of the connector plugin. The integration will continue to work, but we recommend updating to the latest version. Download it from **app.fozzels.com**.

-   **After enabling AIOSEO, re-run Pull Products.**
    This is required to load `_aioseo_title`, `_aioseo_description`, and other AIOSEO attributes into your Fozzels catalog.

* * *

## Conflict: Yoast SEO and AIOSEO

**"Both Yoast SEO and All in One SEO are active at the same time. This will cause conflicts. Please disable one of them to continue."**

Yoast SEO and AIOSEO cannot be used simultaneously — in Fozzels or on your WordPress site. Choose one SEO plugin and disable the other on both sides.

* * *

## Still having issues?

If you have followed the steps above and the issue persists, please contact our support team at **[support@fozzels.com](mailto:support@fozzels.com)** or submit a ticket via the Help Center. Include a screenshot of the error message and your integration settings to help us assist you faster.
