---
title: Completion Report (Daily Batch List)
sidebar_position: 29
slug: /content-creation-flows/completion-report-daily-batch-list
description: >-
  The Completion Report is a daily overview of all AI-generated content items
  across your Flows — showing what was generated, confirmed, and pushed to your
  store on a given day.
---

The Completion Report is a daily overview of all AI-generated content items across your Flows — showing what was generated, confirmed, and pushed to your store on a given day.

Go to [Completion Report](https://app.fozzels.com/completions/product/completion/report/today) (replace `today` with a date like `2026-03-20`)

---

## What this page shows

This page lists every AI completion (generated content item) that was created or executed within the selected date range. It brings together results from **all your Flows** in one place, so you can review, confirm, and sync batches without navigating each Flow individually.

---

## Navigating the report

### Date range

- **From / To** date pickers at the top let you change the date range
- The date in the URL sets the starting date — e.g. `/completions/product/completion/report/2026-03-20`
- Add `?end_date=2026-03-21` to set an end date

### Store filter

- The left panel lists your connected stores
- Click any store to filter the report to that store's completions only
- Click again or clear to show all stores

### Display filters (checkboxes)

- **Show only with errors** — hides successful items, shows only failed/errored completions
- **Show only suspicious** — shows only completions flagged as suspicious content

### Column filters (condition builder)

- Filter by Flow, Website, Store, SKU, Prompt, Created At, Executed At, Synchronized At
- Build AND/OR conditions just like in the Catalog

---

## Table columns

| Column | What it shows |
|--------|--------------|
| **Flow** | Name of the Content Flow that generated this item (click to open the Flow) |
| **Website / Store** | Which store this item belongs to |
| **SKU** | Product identifier (click to open the product) |
| **Confirmed** | Checkbox — whether this completion is approved for syncing |
| **Prompt** | The AI prompt that was used |
| **Created At** | When the completion was created |
| **Target attribute** | The AI-generated content (click to edit) |
| **Executed At** | When generation ran; shows error labels if it failed |
| **Synchronized At** | When the content was pushed to your store; shows "Sync Now" if pending |
| **Thumbnail** | Product image (toggle visibility with the column button) |

---

## Actions

### Per-row actions

- **Toggle Confirmed checkbox** — confirm or unconfirm a single item
- **Click the target attribute value** — opens an edit modal where you can:
  - Manually edit the generated content
  - View revision history and restore a previous version
  - Regenerate content
  - Toggle HTML / plain text view
  - Save and optionally sync immediately
- **Click "Sync Now"** — manually push a single item to the store
- **Click an error label** — see the full error message and retry options

### Bulk actions (select items first, then choose action)

| Action | What it does |
|--------|-------------|
| **Confirm all, Save & Sync** | Marks selected items as confirmed and queues them for sync (runs every 4 hours) |
| **Regenerate, Save & Sync** | Re-runs AI generation for selected items and queues for sync |
| **Sync Generated Content** | Force re-syncs already-synced items (overwrites what's in your store) |
| **Update Suspicious Flag** | Recalculates suspicious status for selected items |

---

## Common use cases

**Reviewing yesterday's batch**

- Open the report for the previous date
- Filter by store if you have multiple
- Sort by "Executed At" to see what ran

**Finding failed items**

- Enable "Show only with errors" checkbox
- Click the error label on any row to see the exact error and retry

**Handling suspicious content**

- Enable "Show only suspicious" checkbox
- Review each flagged item — edit, regenerate, or confirm if it's a false positive

**Bulk-confirming and syncing**

- Select all items (or filter to the ones you want)
- Use **Confirm all, Save & Sync** to approve and queue everything at once
- Sync runs automatically every 4 hours; or use "Sync Now" per item for immediate push

---

## Common issues

**No items shown for today**

- Completions appear here when a Flow has run — check that your Flows are Active and have executed
- Try widening the date range

**Items confirmed but not synced**

- Sync runs every 4 hours — wait or use "Sync Now" per item
- Check that the integration is Active and the store is connected

**Error on "Executed At" column**

- Click the red error label to see details
- Common causes: integration credentials expired, attribute not mutable, store offline

**Item shows as "Suspicious"**

- The content triggered a suspicious word or AI artifact pattern
- Edit the content manually, then confirm — or use **Update Suspicious Flag** if the content is actually fine
