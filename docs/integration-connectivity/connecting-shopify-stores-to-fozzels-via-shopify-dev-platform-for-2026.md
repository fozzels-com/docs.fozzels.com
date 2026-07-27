---
id: '103000385597'
title: 2.3.2. Connecting Shopify stores to Fozzels via Shopify Dev Platform for 2026
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  IMPORTANT NOTICE Starting January 1, 2026, Shopify is officially changing its
  rules for application management. The old method of creating “Private Apps” d
---

IMPORTANT NOTICE

Starting January 1, 2026, Shopify is officially changing its rules for application management. The old method of creating “Private Apps” directly within the store admin will be deprecated. All new connections and updates to existing integrations must now be performed via the Shopify Dev Platform.

1.  Authorization

1.1. Log in to the official Shopify Developer Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard)

2.  Accessing the App Creation Menu

2.1. Once logged in to the dashboard:

-   Select the Apps section from the left-hand sidebar.

-   In the top right corner, click the Create app button (depending on the type of your account, your interface may look slightly different. If you don't see this button, please scroll to the bottom of the page. There should be a clickable link labeled **"Create app")**
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/e9TIxK8eDP1_39W_QK6q8V792TllGbJshg.png)

###

3.  Choosing the Creation Method and Naming

3.1. On the selection screen:

-   Choose the second option on the right — Start from Dev Dashboard.
    This method allows you to generate API credentials quickly without using a command-line interface.

-   In the App name field, enter a descriptive name (e.g., Fozzels\_APP).

-   Click the Create button.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/aOyMompGNxvMk8AwTspY6_RThyDKNEsWcw.png)

4.  Version Configuration and Mandatory Settings

        4.1. After clicking Create, you will be redirected to the Create a version page.
 ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/5WoUJ-Qq7qALDUUuzlNBWf0V0lxaSjhlbQ.png)

4.2. Name & App URL

-   Enter App's name

-   Enter your store’s URL (e.g., [https://your-store-name.myshopify.com](https://your-store-name.myshopify.com)).

4.3. Mandatory setting

-   Embed app in Shopify admin: must be enabled.
    This ensures the Fozzels interface appears inside your Shopify admin panel.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/fCpNrLVZblbWTWkIntCgl86EmrjmORG6BQ.png)

5.  Configuring API Access (Scopes)

5.1. Scroll down to the Access section to define what data Fozzels can manage.

5.2. In the Scopes block:

-   Click the Select scopes link in the top right corner.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/RgsEpex9lyPaJ8AyOjR4-So8df3QeQ6Fcw.png)

6.  Selecting Permissions

6.1. In the Select scopes modal window:

-   Use the search bar to find specific permissions.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/wQoW7bQIW9fqRTTnrHwUO9bIMpWZ6tDL_w.png)

    6.2. Required permissions
    This list is mandatory for all store types, including stores using Shopify Markets and Language Pages.

Products: read\_product\_listings, read\_products, write\_products, read\_product\_feeds.

Metadata: read\_metaobject\_definitions, read\_metaobjects.

Translations: read\_translations, write\_translations.

Locales: read\_locales.

    Markets: read\_markets, write\_markets.
    or copy/paste this

    read\_locales,read\_markets,write\_markets,read\_metaobject\_definitions,read\_metaobjects,read\_product\_feeds,read\_product\_listings,read\_products,write\_products,read\_translations,write\_translations
    6.3. Click Done once all required scopes are selected.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/Y-HyRqCHeriVdpYrrHm2aJyi7Y8OUVBTDw.png)
    7\. Pre-Release Checklist: App Configuration

-   Before clicking the Release button, verify the following:

-   App URL: a valid store URL is entered (e.g., [https://store-name.myshopify.com](https://store-name.myshopify.com)).

-   API Version: the Webhooks API Version is set to the latest stable release (e.g., 2025-10).

-   Embedded Interface: “Embed app in Shopify admin” is enabled (required for Fozzels).

-   Mandatory Scopes: all required permissions are present:

-   Products: read\_product\_listings, read\_products, write\_products, read\_product\_feeds

-   Metadata: read\_metaobject\_definitions, read\_metaobjects

-   Translations: read\_translations, write\_translations

-   Locales: read\_locales

-   Markets: read\_markets, write\_markets

-   Scope Verification: all permissions include the required read and write access where applicable.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/nE6aiS2K21Vs_e5K45UMqgI7KjTAAvev9g.png)

8\. Releasing the Version

8.1. To activate the configuration:

-   Locate the Release button in the top right corner of the Create a version page.

-   **Click Release.**

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/lMRrK6F1zY287cIilwfdL7zuoi-eQJsO2A.png)

8.2. In the pop-up window:

-   Version name (optional): e.g., v1.
    If left empty, Shopify will auto-generate a name.

-   Version message (optional): e.g., “Initial setup for Fozzels”.

8.3. **Click the Release button** in the bottom right corner to finalize.

The version status will change to **Active**.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/m8pxnVX5dNifvnh6z0IXZfDMkkMqS2RQwA.png)

###
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/BA5mQQb2jWU5J80LBoSsUOIs1OoRl3M3EA.png)

9.  Retrieving API Credentials

9.1. In the Shopify Dev Dashboard, go to **Settings** in the left-hand sidebar.

9.2. In the **App credentials** (API keys) section, copy the following:

-   Client ID (API Key)

-   Client Secret (API Secret Key)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/VAGvtjJ3zAMPYkyQu6vUbofnGVh7jLqYyw.png)

10.  A Launching the Installation

10.1. After release, GO to the app Home tab.

    10.2. Make sure you are on the Home tab.
If your account has only one website and you plan to use Fozzels exclusively for that website, simply click **Install App**. The app will be installed automatically.
If you have a Partner account or manage multiple websites, you'll need to configure the distribution settings for the Fozzels app.

10.3. In the left-hand sidebar, open the Distribution tab.

    10.4. Click Select distribution method and choose **Custom Distribution**.
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/pa4OKRyCk3kJpPajX3ZzHmcMAbZkGU_7Eg.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XfVKpSARlwl_mvRyvXXrMLHhUdvZ7M7Suw.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/eq2IpYTVXtyGiP9Pxu2xCSHWHkNCpmP1CA.png)

10.6. After authorization, you will return to the Custom Distribution page.

-   Enter your store domain (e.g., your-store.myshopify.com).

-   Click Generate link.

-   Confirm the action in the pop-up window.

10.7. You will be redirected to the Install app page in your store admin.

-   Click Install.

-   Confirm the message “This app is exclusive to your store”.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/tCyXVtYOydxTaxoxfZezfHkC0FxDe9xsBw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/R8WiM6_-2NXlrFjFg29bxZA7IkZVz9oISQ.png)

10.8. To complete the synchronization, return to your Fozzels account to enter the credentials and finalize the connection.

11.  Create Integration in Fozzels.

11.1. Connection Setup

-   Log in to your Fozzels account: [https://app.fozzels.com](https://app.fozzels.com)

-   Go to the Integration section.

-   Click New Integration.

-   Choose Shopify as the platform.

-   Choose the Custom APP connection type.

-   Enter the name of the integration.

-   Enter the Shopify webstore URL.

Note:
For the URL and App Host Name fields, always use the .myshopify.com domain, not the public store URL.
Example: teststore.myshopify.com

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/sF_OsmKhLhv87WeuVC4_yxL77LH9O2-uAw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XLCPhjqaC_s3HQuyjSEhw6SsdnMZDal0vA.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/TzMbd_ReJA8hdEjYW1EFgKWryHEquafa0w.png)

12.  Enter API Credentials in Fozzels

12.1. Copy and paste the credentials into Fozzels:

-   API Key → API key field

-   API Secret Key → API Secret field

-   App Host Name → App Host Name field

13.  Additional settings and Access Token Generation

13.1 **Enable the Markets or LangShop** toggles if you need to synchronize content across multiple markets or languages.

13.2 Click the Save button. The Access Token field will be available after it's generation.
13.3 Move to Websites & Stores tab.
13.4 Activate your integration.
13.5 Click the Pull Websites & Stores button to get them.
13.6 The system will automatically generate the Access Token after successful authorization.

14. Activation and Synchronization

14.1. Activate Websites and Languages using toggles. The default language is marked with a star.

14.2. Click Pull Products to start importing products and attributes. Progress will be shown in the progress bar.

14.3. Go to the Attributes tab to view, enable, disable, or edit imported attributes. Read more about managing the attributes  [here](https://fozzels.freshdesk.com/a/solutions/articles/103000368952) .

After successfully creating the integration, you can **start** building flows and **generate** your **[first content](https://fozzels.freshdesk.com/a/solutions/articles/103000367976)** !
