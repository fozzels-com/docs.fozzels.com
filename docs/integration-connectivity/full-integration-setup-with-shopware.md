---
id: '103000338038'
title: 2.4. Full integration Setup with Shopware
sidebar_position: 6
slug: /integration-connectivity/full-integration-setup-with-shopware
description: >-
  This guide walks you through the complete process of connecting your Shopware
  6 online store with Fozzels. The integration consists of two parts: Part 1: C
---

This guide walks you through the complete process of connecting your Shopware 6 online store with Fozzels.
The integration consists of two parts:

# Part 1: Create an Integration in Shopware 6

    In this part, you will create an API integration inside your Shopware 6 administration panel. This generates the credentials that Fozzels needs to communicate with your store.

### 1\. Introduction

    Go to your Shopware 6 Administration panel. You can usually find it at [your store URL](https://shopware6.fozzels.com/admin).

### 2\. Click "Settings"

    Click on "Settings".

![](./images/full-integration-setup-with-shopware/_APoVDYMLEb_oPJsWrg4Fj9HOyB2FWI6g.png)

### 3\. Click on "System"

    Navigate to the system settings.

![](./images/full-integration-setup-with-shopware/NE3HjkKRNa353OQJJBzR8eeF_Y9XA9Mi_w.png)

###
4\. Click "Users & permissions"

    Select the Integrations option from the System menu.

![](./images/full-integration-setup-with-shopware/XBGWZJstYupsn7hsyrU1stHBQK9Hh8igVA.png)

### 5\. Scroll down to "Roles" and click "Create role"

   On the Users & permissions page, scroll down to the Roles section and click the "Create role" button.

![](./images/full-integration-setup-with-shopware/6gkkqh6BDu27YdBmfVYPA7aub9lZQr-Svw.png)

### 6. Fill in the role name

    On the "General" tab, enter a name for the role.

![](./images/full-integration-setup-with-shopware/NUafBeJNC09Mi86jv-EVOFyWLidctjzadA.png)

### 7\. Click on the "Permissions"

You will see the permissions table with all checkboxes unchecked. Enable the following permissions:

**Catalogues (View, Edit, Create, Delete):**

-   Categories
-   Dynamic product groups
-   Landing pages
-   Manufacturers
-   Products
-   Properties
-   Reviews

**Content:**

-   Media (View, Edit, Create, Delete)
-   Shopping Experiences (View, Edit)
-   Themes (View, Edit)

**Other** (View, Edit, Create, Delete):

-   Sales Channels

**Settings:**

-   Currencies (View, Edit, Create, Delete)
-   Custom fields (View, Edit, Create, Delete)
-   Languages (View, Edit, Create, Delete)

![](./images/full-integration-setup-with-shopware/hUqHqVoOiZ0d2J1mJ2IWMFdxxBKX0tVq5g.jpeg)
![](./images/full-integration-setup-with-shopware/PoONXWr6_1SjTd-6iea1UpNsFzfkwxRYpw.jpeg)

### 8. Save the role

    After setting all permissions, click "Save" to save the role.

![](./images/full-integration-setup-with-shopware/A8MHLjtMTc9IvBEae-ZW8vUS8I4hag_G8A.png)

###  **9.** Go to System > Integrations
![](./images/full-integration-setup-with-shopware/A3DBstBn6Ru1Z0789w5hnvK7skD1VrNVhA.png)
**10.** **Click "Add integration"**

    Click the "Add integration" button. The "Create integration" dialog will appear:

![](./images/full-integration-setup-with-shopware/URMEvVMGXkTNtDY6_YIfXEesdx7AwYJJ2g.png)

![](./images/full-integration-setup-with-shopware/3hNA53bC00sF1iGxrnL2kynScvKzSZfduA.png)

**11.** Fill in the integration details

    Enter a name for the integration. Then open the "Roles" dropdown and select the role you created in previously.

![](./images/full-integration-setup-with-shopware/DZY9Dx_ZSKux2NMqdZxEYkFXqeT3JeZVlg.png)

###
12\.  Copy the Access Key ID

    Click the copy icon next to the **Access Key ID** to copy it to your clipboard. Paste this key into a text document for safekeeping - you will need it in Part 2.

![](./images/full-integration-setup-with-shopware/Um8SIf9NDPTA8bYzQbm-H73d4wuiGheBbQ.png)

**13\.**  **Copy the Secret Access Key**

    Do the same for the **Secret access key**: click to copy the Secret access key to your clipboard. Then paste this code into some text document so that you can access and copy the code later.

![](./images/full-integration-setup-with-shopware/ngrN_TmIbSpPn4vdjAU2urPJ3Orh3b1hcw.png)

### 14\. Click "Save integration"

    Save the integration settings.

![](./images/full-integration-setup-with-shopware/zFiTXyoLwZk0YUyHGn98o27cXlHx8DSBgA.png)

### 15\. Confirm the success message

    The integration is now created and active.

![](./images/full-integration-setup-with-shopware/ddwo4oRoStm6_leYM-OMhtbNWvrs2B5OkA.png)

###

# Part 2: Connect Fozzels to Shopware 6

    Now that you have created the integration in Shopware, you will configure the connection on the Fozzels side using the credentials from Part 1.

### **1.** Go to [Fozzels.com](https://fozzels.com/)

![](./images/full-integration-setup-with-shopware/QNYGtnmJc1jLtdHtrac2heMnCvr8OeCjOw.png)

###
**2.**  Click "Integrations"
    In the Fozzels menu, click on Integrations.
![](./images/full-integration-setup-with-shopware/p3WWrWl5kNt7ZpAfsTGCttAeYkIT1rVN6A.png)
3\. Click "Create"
    Click the "Create" button to start setting up a new integration.
![](./images/full-integration-setup-with-shopware/pEdr2LbjwEBHYCnp6d9LPSj4r3fXHoqSRA.png)
4\. Select the Shopware logo

    Choose Shopware as the integration type by clicking on the Shopware logo.

### ![](./images/full-integration-setup-with-shopware/wutV5JMQpq7oa9KVz1xOFlxcjZe7RktGOg.png)5\. Fill in the integration details

Fill in the following fields in order:

1\. Name — Enter a name for this integration, for example "Shopware 6".

2. URL — Enter your Shopware 6 online store URL (e.g., https://your-store.com).

3. Access Key ID — Paste the Access Key ID that you copied from Shopware in Part 1.

4. Secret Access Key — Paste the Secret Access Key that you copied from Shopware in Part 1.

![](./images/full-integration-setup-with-shopware/MN0itAjPFkZTRZVpISQu6IiUlmslBesN5w.png)

**6**. When all fields are filled in, click "Save". You should see a "Success" pop-up confirming the connection was saved.

### ![](./images/full-integration-setup-with-shopware/Hx1KICwgA4nYaOgpQbjeLYyUYMAfwizHIA.png)

### 7\. Activate the integration
    Toggle the "Active" switch to on to activate the integration.
![](./images/full-integration-setup-with-shopware/CWqB7LNLotQ_hBy-B3upqEFOPuh8GzXOQg.png)
**8.** **Pull Websites and Stores**
    Click the "Pull Websites and Stores" button. Fozzels will retrieve all your sales channel data from Shopware.
   ![](./images/full-integration-setup-with-shopware/AIptzp_eqV19f60Lq69A3HI-5-jXSkZ8RQ.png)
9\. Enable your store connection
    Toggle the Status switch to on for your store.
![](./images/full-integration-setup-with-shopware/gS02mVXwZyGcf2VSsypNVS3DoBaYSrKftQ.png)

10. Enable store views / sales channels

    Enable the available store views or sales channels that you would like to use in Fozzels.
![](./images/full-integration-setup-with-shopware/1UtVxA_eP1gFWhRvGqpPE7G2CczT4WZGdg.png)

11. Pull Products

###     Click "Pull Products" to retrieve your product data from Shopware. This may take a while depending on the number of products.

![](./images/full-integration-setup-with-shopware/0liK4TAMuGrDYFNClrrnT2GtrcZKZ6M2jA.png)
**12.** Click "Next step"
    Proceed to the next step to finalize the setup.
![](./images/full-integration-setup-with-shopware/p1QaQx8BXoBRslqVdOfwPVQzKjtqvAKl3A.png)

# Setup Complete

Congratulations! Your Shopware 6 store is now fully connected to Fozzels. You can use this integration to create product Flows and manage your product content directly from the Fozzels platform.

## Getting started

Here are some additional articles that may help you get started with Fozzels:

-   [Creating a New Content Flow and Initial Settings](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Prompt Creation & Filtering. Drag & Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)

-   [When Do New Products Get Generated: The Pull Cycle Explained](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained)
-   [Mass Actions and Operational Control in the Batch Lists / Daily Total Batch List](/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list)
-   [Flow Definition and Content Types (Text, Image, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)

Or reach out to us directly - we are always happy to help!

###
