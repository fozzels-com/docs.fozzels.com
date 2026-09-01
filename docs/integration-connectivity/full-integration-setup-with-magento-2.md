---
id: '103000367853'
title: 2.2. Full integration Setup with Magento 2.
sidebar_position: 2
slug: /integration-connectivity/full-integration-setup-with-magento-2
description: >-
  This guide details the process of establishing a secure, two-way connection
  between your Magento 2 store and Fozzels. You will generate the necessary API
  T
---

This guide details the process of establishing a secure, two-way connection between your Magento 2 store and Fozzels. You will generate the necessary API Tokens and configure permissions, ensuring seamless product data import and content export.

The Magento 2 integration requires creating a dedicated New Integration in the Magento admin panel to generate four essential keys: **Consumer Key**, **Consumer Secret**, **Access Token**, and **Access Token Secret**. We will also configure the required `fozzels_completion_date` attribute for tracking content synchronization.

## Part 1: Magento 2 Setup (Creating the Integration and Tokens)

You must create a new integration and define specific permissions within your Magento admin panel.

### Step 1: Create a New Integration

1.  **Log in** to your Magento admin panel.

2.  **Go** to **System** / **Integrations**.

3.  **Click** the **“Add New Integration”** button.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gr4UpPbx41G2Oy6OOEdyCKol_ENow66ITg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/N7zrOrdp8o6CvLgUlZhpQuMcQs5r7OVmWw.png)

### Step 2: Fill in Integration Info

1.  **Navigate** to the **Integration Info** tab (Basic settings).

2.  **Fill in** the required fields:
    2.1. **Enter** Name: Fozzels.
    2.2. **Enter** E-mail: info@fozzels.com.
    2.3. **Enter** your Magento admin password for confirmation.

3.  **Skip** optional fields (Callback URL, Identity link URL).

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/EM4ivAqLXVniXYWdiyAMElpusFWgWjUgvQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/6vzO74ehADcyuIaahKWVOQtYVvHWVkD_vg.png)

### Step 3: Configure API Permissions (Scopes)

1.  **Click** the **"API"** tab.

2.  In the dropdown menu, **select** **"Custom"**.

3.  **Tick** only these checkboxes (for Read/Write access):
    3.1. **Catalog**: Categories, Inventory, Products, Update Attributes, Edit Product Design.
    3.2. **Stores**: Settings, All Stores.
    3.3. **Attributes**: Product, Attribute Set.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/QphCzWE1SkWWnk3rdvVZReWcdPfHny5hsQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/TXQWFfKyYyQlNwHODT_3OsVgEHngoyaPXg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/j3iFU0HffLd73Kzc_rQEt62o2oTsVpxF2g.png)

### Step 4: Save and Activate the Integration

1.  **Click** the **“Save”** button in the top right corner.

2.  On the Integrations list page, **locate** the new Fozzels integration.

3.  **Click** the **”Activate”** link.

4.  On the activation detail page, **check** if the correct APIs (from Step 3) have been selected, and **click** **"Allow"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/_C1d9Jr1A4136F6oEoNWIM2R2fnU0SwdvA.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/cBnv6FpiV0647eqHlNbNHIyCXcA_kHEx5A.png)

### Step 5: Copy and Store the API Keys

1.  After clicking "Allow," you will be **redirected** to the “Integration tokens for extensions” page.

2.  **Copy** and **securely store** all four automatically filled-in values:
    2.1. Consumer Key
    2.2. Consumer Secret
    2.3. Access Token
    2.4. Access Token Secret

3.  **Click** **“Done”**.

4.  **Check** or **edit** integration details later by **pressing** the **“Edit”** button on the Integrations page.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/NOrDSAhjlO7hXjU2J1fafMmXfcMy-Lypwg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/Pj-HIMnlhJNvqDzEYmDckrL3xvLalFhsfw.png)

##

## Part 3: Fozzels Activation and Data Sync

### Step 6: Verify API Access

Before connecting Fozzels, make sure that your server:

**1\. Does not block external requests to the Magento REST API.**

If your server has a firewall, WAF, or security service (Cloudflare, Sucuri, etc.) configured — they may block incoming requests from Fozzels to your store.

### What to do:

1.  Request the current list of Fozzels IP addresses from **[support@fozzels.com](mailto:support@fozzels.com)**.
    For whitelisting, you can use the Fozzels IP addresses:
**49.13.117.118**
**2a01:4f8:c17:bb1e::/64**

**91.205.205.66**

2.  Forward this list to your hosting provider or server administrator to add them to the whitelist.

If this is not done — you will receive a **401 (Unauthorized)** error when creating the integration in Fozzels and will not be able to complete the connection.

**2\. Does not limit the number of API requests from user agent: f**ozzels** .**
Full user-agent is Mozilla/5.0 (Windows NT 10.0; Win64; x64; fozzels/5.1.2; +[https://app.fozzels.com/](https://app.fozzels.com/)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36

During synchronization, Fozzels sends a large number of requests, especially with large product catalogs. If your server has strict limits on the number of requests per minute or second (rate limiting) — some of them will be rejected.

### What to do:

1.  Contact your hosting provider or server administrator.
2.  Ask them to increase the API request limit, or exclude Fozzels IP addresses and/or the Fozzels User Agent from rate limiting.

If this is not done — you will receive a **429 (Too Many Requests)** error during Pull Products and the product synchronization will not complete.

After confirming the changes, proceed to creating the integration in Fozzels.

### Step 8: Create New Integration in Fozzels

1.  **Log in** to your Fozzels account.

2.  **Go** to **Integrations**.

3.  **Click** **“Create New Integration”**.

4.  **Choose** **"Magento"** from the available options.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/M9c13tHfbMEfpo7QsFt_Q6DvUljm-1jM1Q.png)![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/UvSS02f-tz_5sjBViKw7tq0kWJRti5mSvA.png)

####

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/RrDkikq2qamOno3s8JmMIrJfno5S5gpIew.png)

####

### Step 9: Fill in Connection Details

You will use the keys from Part 1 to connect Fozzels and initiate the data import.

1.  **Name** your integration clearly.

2.  **Enter** the **URL** to your Magento website.

3.  **Fill in** the four keys copied in **Step 5** into the corresponding fields.

4.  **Click** **“Save”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/o_z4KRc-z_zOvcPpPvDV5evmBRJNZO-4vQ.png)

### Step 10: Activate and Synchronize Stores

1.  **Switch on** the **‘Active’** toggle in the top right corner. _Without this, the connection will not work._

2.  **Navigate** to the **“Websites & Stores”** tab.

3.  **Click** the **"Pull websites and stores"** button. Your websites and stores should now appear.

4.  **Verify** that the integration has the following statuses: **Authorized: yes** and **REST API Connected: yes**.

5.  **Enable** the current websites and stores using the **toggle** for further work.

_![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/FvECiFfTlviQFFK2fJ8FF2Uoa9iBogloGg.png)_
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/d3dKR2OUZS7d-iiP2ptuZXFlu9JQKqz93A.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gjRG-nmFAybUytQo_B_QzBZew6ZY5FygNQ.png)

####

### Step 11: Pull Products and Verify

1.  **Click** the **“Pull Products”** button to start the process of importing your product catalog.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/s372RDIQcyC9gZU1pE-mNmKjoV3tHwE2XQ.png)

2.  **Wait** for the products to load (progress will be shown in the progress bar).

3.  **Go** to the **"Attributes"** tab to configure your synchronization rules.

4.  **Read** more about working with product attributes and customizing data fields [here](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).

[](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/)
