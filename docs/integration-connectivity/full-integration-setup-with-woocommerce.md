---
id: '103000367857'
title: 2.5.1. Full Integration Setup with WooCommerce.
sidebar_position: 7
slug: /integration-connectivity/full-integration-setup-with-woocommerce
description: >-
  To ensure a secure connection between Fozzels and WooCommerce, the following
  steps must be completed to generate the special API keys (Customer Key and Cus
---

To ensure a secure connection between Fozzels and WooCommerce, the following steps must be completed to generate the special API keys (Customer Key and Customer Secret) in the WooCommerce account.

Configuration in WooCommerce

**Step 1: Log in to WooCommerce**
1\. Open a browser and log in to your WooCommerce account.
2\. Use the administrator login and password.

**Step 2: Navigate to API Settings**
1\. Go to the "**Settings**" / Advanced / REST API tab in the main WooCommerce menu.
2\. Select "**Add Keys**".

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8hyIPD4Wb1FFvgYBaXywZ2Xs18Lh-bvT4Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/gQDALB5owHDmdRHVghvUxrIVGr9XLh00iA.png)

**Step 3: Creating a New API Key**1\. Add the Description and choose the needed permissions "**Read and Write**" from the dropdown in the **new API Key**.

2\. Press the "**Generate API KEY**" button.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/LNqOK_83FuQdSlwU4GQ0k9hPLpjPOMhitw.png)
Note: Granting "Write" access allows Fozzels to not only read data but also update data in your WooCommerce store, ensuring two-way synchronization.
If you have done everything correctly, a window with the generated keys for the new integration will open. You will also receive the message: 'API Key generated successfully. Make sure to copy your new keys now, as the secret key will be hidden once you leave this page.' Transfer these keys to the integration settings in Fozzels.

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/zNaRYoJwobBx3j5TEjYQOR-iVDLfWwFk_w.png)
Configuration in Fozzels
**Step 4:** **Starting a New Integration**
1\. Log in to your Fozzels account.
2\. Go to the Integrations page.
3\. Click the "**New Integration**" button.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/0oMe6Sytpwp09lVWoNbVjCMY2Gr5Ii3l4w.png)

4\. Select "**WooCommerce**" from the list of available services.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/VygL8-i0y-Ufor6pSGr_Zfk9ob9PmWAybw.png)

5\. Fill in Configuration Fields

        Name: Enter a clear name for this integration (e.g., WooCommerce\_INT).
        URL: Enter the URL of your WooCommerce store
6\. Fill in the following fields on the "Create New Integration" page (using the keys copied in Step 3).
        Customer Key: Paste the Customer Key copied from WooCommerce.
        Customer Secret: Paste the Customer Secret copied from Woocommerce.

7\. If you want Advanced Custom Fields to also be imported into Fozzels, please enable the **Enable ACF** toggle.  Read more about how to properly set up this connection in the [Enabling ACF Data Sync: WordPress/WooCommerce Configuration for Fozzels](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels).

8\. If you want to synchronize SEO data using the Yoast SEO plugin, please enable the Yoast WooCommerce SEO toggle. This allows Fozzels to import and update meta titles, meta descriptions, and focus keywords directly via the WooCommerce API. [Read more about how to set up this integration in Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce).

9\. If your store uses the All-in-One SEO plugin, please enable the All-in-One SEO toggle. This will automatically synchronize SEO-related fields such as meta titles, descriptions, keywords, and social media data between WooCommerce and Fozzels. [Read more about how to configure this integration.](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide)

10\. If you want to import custom meta data fields from WooCommerce, please fill in the WooCommerce Meta Data Sync Fields field. Enter the meta key prefixes or exact meta field names you want to sync. Only matching fields will be imported as product attributes in Fozzels. For example, enter _my\_plugin_ to sync all keys starting with this prefix, or \_custom\_field for a specific field. [Read more about this feature.](https://fozzels.freshdesk.com/a/solutions/articles/103000399653)
11\. If you want to enable multilingual synchronization, please enable the WPML Multilingual Support toggle. This allows Fozzels to sync product data across all configured languages when using the WPML plugin. [Read more about how to configure this setup.](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation)
 ![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/d1v4xCqxV-0DN-7Uj85ucSblMez28V1klw.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/7XoFo9SE40F3Tgm0RjSqZFcqPUoE-6dFHA.png)
**Step 5: Activate and Save the Integration**1\. Activate the integration by switching **ON** the "Active" toggle in the top right corner.

2\. Click the "**Save**" button to save the changes.
After successful saving, you will proceed to the next configuration steps in Fozzels ("Websites & Stores" and "Attributes"), where you can set up product and attribute synchronization.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8pwl3nO-DvkTHXjdP3kCZwH6esC012DXYg.png)
**Step 6: Websites & Stores Setup**
1\. Click the "**Pull Websites and Stores**" button. This will retrieve and display all associated websites and stores from your WooCommerce account.
2\. Activate the required websites and stores by switching the corresponding Status toggles to **ON**.
3\. Click the "**Pull products**" button for each necessary store. This action initiates the initial load of product data into Fozzels. Read more about pulling products [here](https://fozzels.freshdesk.com/a/solutions/articles/103000368950).
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/OT8f7hDzpyxRkabdwOZz9-0ph8-2UMGMnA.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/pXfqdGQaJ_kePo3JmAj2P43ZxhaPZWFnMg.png)Once the product loading process is complete, Fozzels is ready for work!
Now you can proceed to the "Attributes" tab to configure them. Read more about managing attributes [here](https://fozzels.freshdesk.com/a/solutions/articles/103000368952).
