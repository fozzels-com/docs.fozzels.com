---
id: '103000367854'
title: 2.3.3. Full Integration Setup with Shopify.
sidebar_position: 5
slug: /integration-connectivity/full-integration-setup-with-shopify
description: >-
  This guide details how to set up a secure, two-way connection between your
  Shopify store and Fozzels using Custom Apps (Private Apps) and configure…
---

This guide details how to set up a secure, two-way connection between your **Shopify** store and **Fozzels** using **Custom Apps** (Private Apps) and configure synchronization parameters.

## Step 1: Shopify Custom App Setup

### 1.1. App Creation

1.  **Open** a browser and **log in** to your **Shopify Admin**.

2.  **Go** to the **Settings** section.

3.  **Go** to the **Apps and sales channels** section in the side menu.

4.  **Press** **Develop apps**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/FQMhwpXYX9AaHS64ub51WznCudG_HjF_GQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/im1AvTKi6MWYyaB5au2QV52k6g-zKgIJPQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/_flCr1G21Y0eiLDKAAikCGA8aItw-mC2Ng.png)

5. **Press** **Create an app**.

6. **Fill in** App name (**Fozzels**) and **choose** your account in the developer section at the "Create an app" pop-up.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/iwwZ8YAvrwc95yWJhOvB1oRxvwcRY-TaUw.png)

### 1.2. Configure Permissions (Scopes)

1.  **Navigate** to the **Configure Admin API scope** section.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Ul-1S5j5J-ff2mqfWD_hCHBbpsCPJPNOJA.png)

2. **Enable** the following required permissions using the search input: read\_product\_listings , read\_products , write\_products , read\_metaobject\_definitions , read\_metaobjects , read\_product\_feeds .

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Q-ViUfe7pSUU1B02HTAe2_fR-ncQiNevEw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/VlG1HE0ZjQVE-ftYEYNp1-YpSbOdYRXSGw.png)

3. **Attention!** If you are utilizing **Markets** in Shopify to manage different regions or countries, you must also **add** the following permissions: write\_translations , read\_translations , write\_markets , read\_markets , read\_locales .

4. **Check** the full list of enabled permissions. It should look like this:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/oRHwBytJR6A9FPaCaQdSSF83Rk5PHBPKiw.png)

5. **Press** Install app to complete the creating.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/mmVlY4rP_YWAoM7ED5aByqLh37nfQomtcA.png)

### 1.3. Prepare Credentials

1.  **Go** to the **API credentials** section.

2.  **Copy** and **store** all the required fields for adding in Fozzels.
    2.1. **Copy** API key Shopify (for the API key field in Fozzels).
    2.2. **Copy** API Secret key Shopify.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/8XPxI0phlV2LNnbr1Aj-4wH3VCl_q62JQw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/0VUTxufo_k1f9p3im2fqQ0x1mA9tu4gAIg.png)

## Step 2: Create Integration in Fozzels

### 2.1. Connection Setup

1.  **Log into** your Fozzels account via `https://app.fozzels.com`.

2.  **Go** to the **Integration** section.

3.  **Click** **“New Integration”**.

4.  **Choose** the **Shopify** platform.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Pyzl5zTGARVEwFahvJ9LgtWhqC42AkOW-Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/9ZDhsVks6A3bEPfvWW2KUSi_LC5nxPkKKA.png)

5. **Fill in** the name of your integration.

6. **Fill in** the URL of the Shopify webstore.

**Note!** For URL and App Host Name fields, always **use** the `.myshopify.com` subdomain, not the "real" URL. Example: `teststore.myshopify.com`.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/5Es2Xe5K4kX7G9ceTSqa0zcRdqY7LOd18w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/2V9Pr-82uxKsTQw5vzihFFVkdOXXeYRTYg.png)

7. **Copy** and **paste** all the required fields into Fozzels.
    7.1. **Paste** API key Shopify into the API key Fozzels field.
    7.2. **Paste** API Secret key Shopify into the API Secret Fozzels field.
    7.3. **Paste** App Host Name.

8. **Switch on** the **Markets or LangShop** toggle to have the possibility to synchronize content for products from different stores (for locales, not only the default store).

9. **Press** the **Save** button.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/10MdEKRe3CAXM8phYawwasjHybRh5utDcg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/1gUl8bf3vOc8OzNHXG0e2xOkIOfqafgQgQ.png)

### 2.2. Activation and Synchronization

1.  **Active** the integration.

2.  **Pull** websites and stores.

3.  **Make sure** that the integration has the following statuses and that the current websites and stores are displayed:
    3.1. Authorized: yes
    3.2. REST API Connected: yes

4.  **Activate** Websites and Languages with toggles. _The default language for the market is marked with a star._

5.  **Click** the **“Pull Products”** button to start pulling products and attributes. **Wait** for the products to load (progress will be shown in the progress bar).

6.  **Go** to the **“Attributes”** tab to view, enable/disable, or edit the loaded attributes. **Read** more about managing the attributes [here](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/hf-7P91OunPrATXrTjI-eheh4APzl3yMTQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/QoYt9ReC4xDN26VlS3LlMJMq_48shcVFYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/nRpJNQGSWcWm_BelS7-uGiBdpAXGz7G4nA.png)

_\* The default Language for the market is marked with the star_

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/BRzfcGMI7cun1wQGg3Vv1VHM9WbikgIqMg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/XOn4d1hw9r48sW-PN1cKj0Mr5B4q-HxITA.png)

After successfully creating the integration, you can **start** building flows and **generate** your **[first content](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)** in Fozzels!
