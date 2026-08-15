---
id: '103000376412'
title: >-
  4.7.2 Mass Actions and Operational Control in the Batch Lists / Daily Total
  Batch List
sidebar_position: 19
slug: >-
  /content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list
description: >-
  Managing Content Using Mass Actions The Dashboards (or Batch List) is your
  primary tool for rapidly managing content. This Mass Actions functionality is
  av
---

Managing Content Using Mass Actions The Dashboards (or Batch List) is your primary tool for rapidly managing content. **This Mass Actions functionality is available in both the Daily Total Batch List overview and the detailed Batch List view.** Using the **Mass Actions** function, you can simultaneously apply critical operations, such as Confirmation, Regeneration, and Synchronization, to a large number of products. This significantly saves time by eliminating the need to process each item individually.

## Executing Mass Actions

1\. Selection Mechanism To initiate a mass action, you must first select the items. Use the main checkbox to open the dropdown menu options:

-   Individual Selection: Use the checkbox on the far left of each row to select specific items.

-   Select All: Selects **all** items matching the current filters, regardless of the page.

-   Deselect All: Clears the selection across the entire list.

-   Select All on This Page: Selects all items currently displayed in the table.

-   Deselect All on This Page: Clears the selection only on the current page.

![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/TAT_uWcG5-SzeI8SRjjmN51nhZWuNPhNqw.png)
2\. Available Actions After selecting items, the **Actions menu** becomes active, offering the following functions for batch processing:

-   **Show Selected**: This action filters the product grid to display only the items you have currently selected, allowing for a focused review before performing bulk actions.

-   **Sync Generated Content**: This initiates the automatic transfer of all finalized content for the selected products to your connected e-commerce platform without triggering a new generation cycle.

-   **Confirm all, Save & Sync**: This action simultaneously confirms the quality of the selected content and initiates its immediate synchronization to the integrated e-commerce store.

-   **Regenerate, Save & Sync**: This initiates a new content generation request for the selected products and automatically schedules their subsequent synchronization upon successful completion.

## ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/6chuzawhzMkzp4kjQAs-Xh2lfJQ8D0uTnw.png)
Managing the Focused Workspace ("Show Selected")

The **"Show Selected"** function is an essential tool for reviewing and preparing specific subsets of data.

-   Targeted Workspace: Activating **"Show Selected"** isolates the current selected items into a separate table view, effectively creating a focused workspace.

-   Full Functionality Retention: Even in this isolated mode, you retain all functions of the standard table, including further filtering, detail viewing, and executing Mass Actions on the smaller, specific subset of data. This allows for multi-stage selection and processing.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/83gkMs5df4-VpiuZavFc2jvbQWWHXo5BwQ.png)

## Recommendations: Optimizing Error and Warning Handling

We recommend using the Mass Actions function not only for standard content approval but also for quickly fixing errors.

-   Utilizing Filters: You can use the filter **"Display only with errors"** or filter the **content results** that received warnings or errors (by checking the "Warning Count" and "Failed Count" metrics in the daily overview).
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/Q-x6xQXNSMvvctnZfgceHCf1568U90a42A.png)

-   Quick Regeneration: After applying the filter and selecting the problematic items, use the **"Regenerate, Save & Sync"** action to efficiently re-run the generation process for all faulty elements simultaneously.

## Operational Safeguards and Flow Logic Control

A multi-stage control system is implemented before executing resource-intensive mass actions to ensure accuracy and prevent unintended expenditures:

-   Mandatory Confirmation Pop-up: Before executing actions like "Resync Generated Content", "Confirm & Synchronize" or "Regenerate & Synchronize," a warning pop-up appears, requiring your explicit confirmation.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/XdxTZ96w4KYIJMlmO4Q1e0OGo9Lp4moHMA.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/QtxE2PertdWwBPbWXypF36AadNNOWCYfQ.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/WJXrUQG2D70RbZ2Zt2nXR284tuODnhGu_w.png)

-   Flow Logic Note: These pop-ups include a crucial note regarding the expected synchronization behavior based on the Flow type:

    -   Content from Fully Automated Flows will be auto-approved upon generation.
        ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/K8O5z-M1sAS6I6awArA51TqfE2SC1Yfbtw.png)

-   Content from Standard Flows will only be regenerated, requiring subsequent manual approval before synchronization is permitted.

-   Resource Check: The system verifies the operational status of the Flow and Integration before starting any Mass Action: generation will not initiate if the source Flow is inactive, and synchronization will not execute if the target integration is inactive.
