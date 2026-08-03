---
id: '103000367856'
title: 2.6. Full Integration Setup with Lightspeed.
sidebar_position: 16
slug: /integration-connectivity/full-integration-setup-with-lightspeed
description: >-
  This guide details how to establish a secure, two-way API connection between
  your Lightspeed eCom store and Fozzels by generating the required API Key and
---

This guide details how to establish a secure, two-way API connection between your Lightspeed eCom store and Fozzels by generating the required API Key and API Secret within the Lightspeed Manager.
The Lightspeed integration requires creating a dedicated New API Key and setting specific Read and Write permissions (Scopes) to enable Fozzels to securely pull product data and push AI-generated content back to your catalog.

### Part 1: Lightspeed Setup (Generating API Credentials)

You must access your Lightspeed account to create and activate the necessary API key pair.

#### **Step 1: Log in and Navigate to API Settings**

1.  **Open** a browser and **log in** to the Lightspeed eCom Back Office (Lightspeed Retail Manager) using your administrator credentials.

2.  In the main Lightspeed menu, **go** **to** the "Settings" section.

3.  **Find** and **select** "API Keys" or "Developers".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/MZv-XXhmVP6BJaa1Bodx1omwsE79Sz8QMg.png)

####
**Step 2: Create a New API Key**

1.  **Click** the "Add API Key" or "New Key" button.

2.  **Name** the integration clearly (e.g., Fozzels Integration).

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/C88N5mBpcnAN8OkGn8_qwt9UDUb2JF1Z9w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/AzUkWXCCt69kJBjU9LTQpJgW0iLlNd56yw.png)

####

####
**Step 3: Set Permissions (Scopes)**

The settings page for the new connection will open automatically. You **must** select the necessary permissions for Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/CioSxLGTyO3ZE1aF8NeArPcp8qx-oz22mw.png)

1.  **Ensure** that read and write permissions are granted for the following sections:
    -   Content  → read and write

-   Products → read and write

-   Settings → read and write

Note: Granting "Write" access allows Fozzels to update data in your Lightspeed store, ensuring two-way sync.)

####
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/qQg2365EfWu2BevBccdOrXyc1jnZs_p1Pg.png)**Step 4: Activation and Copying the Keys**

1.  In the top right corner of the permissions setting page, **Switch on** the toggle (Enable this API key).

2.  **Click** the "Save" button.

3.  **Scroll** to the "Details" block.

4.  To view the **API Secret (Secret Key)**, **Click** the "Show" button.

5.  **Copy** both keys (**API Key** and **API Secret**) for the next step.

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/YDWX-BrATu6YaqEag_egzmNrIb_mD9VfJQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/sjIxSoTRRX4BVp_klePTX0i1orEGgq1eFg.png)
Expected Outcome: The Developers list will now show an entry for the successfully created and active Fozzels connection.)

### Part 2: Fozzels Activation and Data Sync

Transfer the copied keys to the Fozzels platform and initiate the synchronization.

#### **Step 5: Start a New Integration**

1.  **Log in** to your Fozzels account.

2.  **Go to** the Integrations page.

3.  **Click** the "New Integration" button.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aXXjYseZEe8aGbAnzQXq0LsF6GCxXYmSCQ.png)

4.  **Select** "Lightspeed" from the list of available services.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aYuT19m6Pe5D1XRvGXFAKXPJF1jq5__j1g.png)

#### **Step 6: Fill in Configuration Fields**

On the "Create New Integration" page, **Fill in** the following fields:

1.  **Name:** **Enter** a clear name for this integration (e.g., Lightspeed\_INT).

2.  **URL:** **Enter** the URL of your Lightspeed store.

3.  **API Key:** **Paste** the API Key copied from Lightspeed.

4.  **API Secret:** **Paste** the API Secret copied from Lightspeed.

5.  **Language:** **Chose** the main language of your website.

6.  **Cluster:** **Select** the appropriate cluster (region) where your Lightspeed store is hosted.

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/rmiVHOPB99FOtO7FZUQ0_YI_ma2jqnnB1w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/HY4qeR3DTL_8O1hm3il8lNhcNpKi2XECUw.png)

**Step 7: Activate and Save the Integration**

1.  **Activate** the integration by switching **On** the "Active" toggle in the top right corner.

2.  **Click** the "Save" button.

#### **Step 8: Websites & Stores Setup and Data Pull**

You will now proceed to the "Websites & Stores" tab (Step 2) in Fozzels.

1.  **Click** the "Pull Websites and Stores" button.

2.  **Activate** the required websites and stores by switching the corresponding **Status** toggles to **On**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/FARHG3ynyx8xadPlNcxi8OeOH6UTmF3J7Q.png)

3.  For each necessary store, **Click** the **"**Pull products**"** button. This action initiates the initial load of product data into Fozzels.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/QuBZPoYbMSBquMmbbycLgRYnd-2U4mjjbA.png)

Once the product loading process is complete, Fozzels is ready! You can proceed to the "Attributes" tab to configure your synchronization rules. For detailed instructions on working with product attributes and customizing data fields, read: 3.1. Importing and Catalog Overview.
