---
id: '103000395390'
title: '4.3.5 When Do New Products Get Generated: The Pull Cycle Explained'
sidebar_position: 12
slug: >-
  /content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained
description: >-
  New product or brand: why it's not visible yet and how to speed things up An
  explanation of why new products don't appear in Fozzels immediately, and what
---

**New product or brand: why it's not visible yet and how to speed things up**

An explanation of why new products don't appear in Fozzels immediately, and what to do if you don't want to wait until the next morning.

**1\. Why new products aren't visible in Fozzels right away**

Fozzels doesn't receive data from your store in real time. There is no persistent connection between your store and Fozzels that automatically transmits every change.

Instead, Fozzels regularly connects to your store and downloads the current state of the catalog - this process is called a Product Pull. Only after it completes does the system become aware of new products, attribute changes, or deleted items.

> **ℹ** If you added a new product or brand to your store today during the day, it will only appear in Fozzels after the next pull. Until then, the system simply doesn't know it exists.

**2\. When does the pull happen**

The pull runs automatically on a schedule that you configure yourself in the Configuration tab or Websites & Stores. By default, it runs overnight.

After the pull completes, the system automatically:

-   checks which products match the filters of active flows
-   updates attribute values for each product in the queue
-   triggers content generation

> **ℹ** Changes made to a flow (for example, adding a new brand to the filters) also take effect only after the next pull.

**3\. How to avoid waiting until morning: manual pull**

If you need new products to be processed right away - run the pull manually. A manual pull works exactly like the automatic one: it fully refreshes the catalog and triggers generation.

**How to run it:**

-   Go to the integration settings section in Fozzels
-   Find your store and run the pull manually
-   Wait for it to finish - a success status in the State List confirms everything went through
-   After that, the system will automatically sync the flows and start generation for the new products

> **ℹ** A manual pull does not cancel or replace the automatic one. The next scheduled pull will still run at its usual time regardless of whether you ran a manual one.

**4\. If you already ran a flow manually during the day**

Sometimes users test flows or generate content for individual products manually  -  using the Run Now button. This is normal practice.

Important to know: a manual flow run does not affect the automatic cycle. The next day, after the scheduled pull, the system will still run that flow automatically - regardless of any manual actions you took during the day.

_Have a question? Contact Fozzels support._
