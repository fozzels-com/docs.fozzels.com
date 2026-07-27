---
id: '103000384142'
title: 'Release 5.10-5.11 RC2: Faster Catalog, Deeper Control over Fozzels.'
sidebar_position: 1
slug: >-
  /fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels
description: >-
  We strive to ensure that working with large volumes of data is not just fast,
  but also fully controllable and intuitive. Version 5.10 focuses on enhancing
---

We strive to ensure that working with large volumes of data is not just fast, but also fully controllable and intuitive. Version 5.10 focuses on enhancing the quality of visual data and **significantly increasing the performance and convenience of using our Fozzels service.**

##

Boosting Performance and Data Quality

We've enhanced the UX to make managing large catalogs faster and working with content seamless.

### 1\. Catalog and Data Management

-   **Accelerated Catalog (New Defaults):** A new column visibility rule has been implemented in the Catalog. Approximately 20 of the most important attributes are now enabled by default. This significantly **simplifies the workflow** and **boosts the loading speed** and display performance of large catalogs.
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/lKkJYdOEv5IMFHk7r6Mhn2Iv7R--LD6Bcg.png)

-   **Attribute Accuracy (DDP Rounding):** The logic for displaying the Data Density Percent (DDP) has been updated. The DDP value is now rounded to **three decimal places**. This ensures accurate display of attributes with very low DDP (e.g., 0.040%), eliminating confusion caused by rounding to zero.

-
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2LTShrMQn-AwHW8xdptY0MjbZobK0D0Iig.png)

-   **Maximum Attribute Clarity:** The "Get random example data" block now displays the **full website and store name** (instead of abbreviations). You will always be confident about the specific data you are working with.
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/_WOgxMxdZL8LDJJL80org__eblNuAp-nIA.png)

-   **Flexible Table Navigation:** Pagination options for attribute lists have been expanded: supporting 50, 75, 100, 150, and **"200"** elements. Easily manage massive datasets.
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/VwedlrpwTbYE7jTtQJKiU84KWL28R-__Rg.png)

-   **Automated Catalog Log Refresh:** In the log tables that track product and attribute pool changes (**State Log List**), the automatic refresh function (**Refresh every X seconds**) is now **active by default**, enhancing the convenience of tracking active processes.
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/k7wJs0gU52ThkvU06NRQiNCb052rvZNB3A.png)
    2\. Generation and Workflows (UX)

-   **Instant Access to Settings:** An **"View attribute"** eye icon has been added to the Batch list table, next to the Attribute Name. This provides a quicker way to check the attribute settings and configuration.
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/EStHK3i08CDJYcXd9nmAO1KRhxknIufVZw.png)

-   **Column Control in "Save & Preview":** The **"Column visibility"** block has been added to the preview table (**Save & Preview**). This allows you to display only the necessary attributes, solving issues with overly large tables.
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2xUkAX-SxZ6mayNDh5A91b3m2AkKS4mDFw.png)

###
3\. Image Management and Visual Quality

-   **Clean Visual Catalog:** The system now automatically **ignores and does not display** invalid (broken) or empty image URLs across the catalog, reports, and generation lists. Say goodbye to broken images — your data now looks flawless.

-   **Enhanced Image Filtering (Image Flow):** New powerful tools have been added for sorting and filtering images in the Image Flow setup blocks:

-   Special filters allow switching between default and your own uploaded images (sorting by **Source**).

    -   Sorting by **Upload Date** and **Name** has been added.
        ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/q6optXQOc2cONrSBq2hAYJmFT-kVtuUMIA.png)
        ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/9Y5ObdDOni2-uTSMx1mbIb9eIkLRaWSRdw.png)

-   **Terminology Clarity:** For increased clarity, "AI Model" in Image Flow settings has been renamed to **"Preset Model"**.

### 4\. Accelerated Mass Operations

-   **Full-Featured "Show Selected" (Catalog and Daily Report):** We have significantly improved the "Show Selected" function. Now, in both the **Catalog** and **Daily Report**, the table of selected items allows you to perform **all the same actions as the regular table**: view, filter, and apply **Mass Actions**.
    ![](./images/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/wVzkPiDgjCcZCYtSpCXgXA8rfbX5fqysPw.png)

-   **Reliability in Mass Actions:** We fixed a minor issue that occasionally caused the grid to remain empty if no items were selected. Working with mass actions is now even more reliable.

##
 Under the Hood: Stability and Modernity

-   **Targeted Integration Stabilization:** Necessary fixes have been implemented to improve the stability and functionality of integrations with platforms **WooCommerce, EK Retail, and Shopware**, ensuring reliable operation for clients with these specific setups.

Your experience is our priority. These updates are just a part of our continuous work to improve Fozzels. Thank you for being part of our community!
[Our Instagram](https://www.instagram.com/fozzelsai/)
