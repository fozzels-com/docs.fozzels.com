---
id: '103000369091'
title: 4.7.1 Tracking of the generated results. Dashboard.
sidebar_position: 17
slug: /content-creation-flows/tracking-of-the-generated-results-dashboard
description: >-
  The Dashboards (or Daily total batch list) serves as your command center,
  providing a complete overview of all content generation and synchronization
  proce
---

The Dashboards (or Daily total batch list) serves as your command center, providing a complete overview of all content generation and synchronization processes. This interface allows you to proactively track status, diagnose errors, and efficiently manage all generated data.

1\. Dashboard Overview

The main view is a data table grouped by the date of content generation.

    1.1 Key Metrics

The main table displays six key metrics that help monitor content status for a specific day:

        **Date**: The date on which the content was generated.
        **Product Count**: The total number of products scheduled for content generation.

        **Completion Count**: The number of content units that have been successfully generated.

        **Synchronized Count**: The number of content units that have been successfully synchronized.

        **Warning Count**: The number of content units with remarks that may require user attention.

        **Failed Count**: The number of content units that failed to generate or synchronize due to critical errors.

Users can click on the date or the Completion Count to access a detailed view of all completions for that specific day.
![](./images/tracking-of-the-generated-results-dashboard/3eVmE5L69-qrrXE1wrp9l5KjD88-GmSH0A.png)

1.2. Detailed View and Display Configuration

Clicking on a date opens a detailed table view containing specific information about each content unit.

1.2.1. Mandatory Columns

The detailed table includes nine mandatory columns: Flow, SKU, Confirmed, Thumbnail, Prompt, Created At, Target Attribute, Executed At, and Synchronized At.
![](./images/tracking-of-the-generated-results-dashboard/yOUsE1jBYf6AFN1hwszHua430j9ysDetdQ.png)

1.2.2. Display Configuration Tools

Tools above the table allow you to customize your data view for efficiency:

**Display only with errors.** This toggle quickly filters the table to show only records where generation or synchronization problems occurred.
![](./images/tracking-of-the-generated-results-dashboard/j--J5uJGSoiU6L54C7ykpw09czX8hQ86Cg.png)

**Column visibility.** This dropdown allows the user to hide or show specific columns in the table, focusing on relevant information.
![](./images/tracking-of-the-generated-results-dashboard/a2xTbvhRdJxaIqyUO1tJK3-K0FSstAq5tg.png)

**Pagination.** The "Show \[number\] entries" option allows customization of the number of rows displayed per page (5, 10, 25, 50, or 100).
![](./images/tracking-of-the-generated-results-dashboard/aPLUy45_b4zLJDCLFCuSfM-OCwWerXDo8g.png)

**Date Range Filter.** Allows selection of a specific date or date range for viewing results.
![](./images/tracking-of-the-generated-results-dashboard/qpq1evm1oh-KTj5jr18RC3XOrCrg-vsDYg.png)

1.2.3. Column Filters

Each column incorporates a built-in filtering tool for rapid search and sorting:

**Flow**: Filters products by one or more selected Flows (selection from a list).

**SKU**: Used for searching for a specific product by its SKU (text search).

**Thumbnail**: Filters products based on image presence ("Image Missing" or "Image Exists") (toggle/selection).

**Date Columns**: Date columns (Created At, Executed At, Synchronized At) feature "From" and "To" fields for selecting a date range.

1.3. Column Detail and Interaction

This section describes single-item interactions, which serve as an alternative to mass actions for granular control.

SKU: Displays the product SKU, which is a clickable link to the product page within Fozzels. Also includes an icon that links to the product page in the integrated store.
![](./images/tracking-of-the-generated-results-dashboard/A_jL3Ul08ZPx8MakhmS7P3tNfAeYmtyhtw.png)

Confirmed: Indicates the status when content has been approved and is ready for synchronization.

Target Attribute: Clicking on the cell opens the "Edit completion result" window, allowing content review and editing.
![](./images/tracking-of-the-generated-results-dashboard/m_jrPUwivZj3FjRSdeYeWZAvFYUuyCBAGw.png)

Prompt: Clicking opens a pop-up to view and copy the full Prompt text.
![](./images/tracking-of-the-generated-results-dashboard/pEEWkzMEzEfqU5WuU7sFLmT9fvZbxMV-5g.png)

Regenerating Content: The "Regenerate" button within the "Edit completion result" window is used to initiate content re-generation.
![](./images/tracking-of-the-generated-results-dashboard/c5ZO3vrJJlYMqytY7IAluozmh2QAXngM_Q.png)

1.4. Mass Actions and Operational Control

The Dashboards provides robust functionality for efficiently managing content through Mass Actions, solving the pain point of tedious individual confirmations.

1.4.1. Performing Mass Actions

Selection Mechanism: Users select items using checkboxes or the Select All on This Page function.
![](./images/tracking-of-the-generated-results-dashboard/cLqudNyTCBxzEB1wUw_lB446fY5cRD45Aw.png)

Available Actions: The Actions menu offers the following functions for batch processing:
![](./images/tracking-of-the-generated-results-dashboard/HW2UYiSK33CeIRz6osXy6htBVLzkTpk0pA.png)

**Confirm all, Save & Sync**: Approves and initiates synchronization for the selected content.

**Regenerate, Save & Sync**: Initiates content re-generation for the selected products and their subsequent synchronization.

1.4.2. "Show Selected" Functionality

Targeted Workspace: The "Show Selected" function isolates selected items into a separate table for a focused workspace.

Full Functionality Retention: In this mode, the user retains all functions of the standard table: filtering, detail viewing, and executing Mass Actions on the selected subset of data.
![](./images/tracking-of-the-generated-results-dashboard/f7zwjwWHrNA6OT8wJVRrxQ46WMuqPx1J7A.png)

1.4.3. Operation Safeguards

A multi-stage control system is implemented to ensure accuracy and prevent unintended expenditures:

Mandatory Confirmation: A warning pop-up appears before executing any resource-intensive mass action ("**Confirm & Synchronize**", "**Regenerate & Synchronize**").
![](./images/tracking-of-the-generated-results-dashboard/0ubsrmale7wTjSetyZBAJCqZYw3CK5u0iQ.png)

![](./images/tracking-of-the-generated-results-dashboard/sPmeRKZIE_-ybW-dwpbBS3bSEm0XtG69xQ.png)

Flow Logic Control: These pop-ups include a note regarding the expected synchronization behavior:

Content from Fully Automated Flows will be auto-approved.
Content from Standard Flows will only be regenerated, requiring subsequent manual approval.

Resource Check: The system verifies status before starting any operation: generation will not initiate if the Flow is inactive, and synchronization will not execute if the target integration is inactive.

1.5. Diagnostics and Warnings (Troubleshooting)

The Dashboard provides clear messages and tools for diagnostics:

Error Details (Tooltips): In cases of synchronization or generation failures, tooltips are available to provide the detailed message explaining the cause of the error.
"Completion looks suspicious": A warning indicating unnatural content (bot-like responses, HTML, or Markdown). This content will not synchronize and requires user intervention.
![](./images/tracking-of-the-generated-results-dashboard/NSPyqq1WcPjA-YYLdrczhDUakvL55U2vIQ.png)
"Double HTML entities encode detected": This warning appears when the text has been encoded more than once, which can cause the text to appear incorrectly.
![](./images/tracking-of-the-generated-results-dashboard/UGH7_knyB9J6V0GXvznxuh1latc_mLlX-Q.png)
"Product completion result is empty. Try to regenerate content." The result is empty.
![](./images/tracking-of-the-generated-results-dashboard/4w2KbQmr8MEpBIgJ6373dwywTEYwFu6TYA.png)

"Product is deleted on integration": Indicates that the product no longer exists in the integrated store.
![](./images/tracking-of-the-generated-results-dashboard/nO0NOjYhJ94dqp7jQPD8tvUJ-jEil4tHcA.png)
"Rule is disabled": Indicates that the content was generated by a Flow that is no longer active.
![](./images/tracking-of-the-generated-results-dashboard/qAHiFoO27TOf4TPKQ9pBfsyriEs7rLXnVg.png)
