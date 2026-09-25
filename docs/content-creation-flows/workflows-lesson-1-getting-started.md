---
title: '4.11.1. Workflows. Lesson 1: Getting Started with Workflows'
sidebar_position: 30
slug: /content-creation-flows/workflows-lesson-1-getting-started
description: >-
  Workflows check and edit generated results automatically: replace words, cut
  text to a length limit, or flag a result for manual review before it reaches
  the store. Build your first workflow and learn how it behaves.
---

Workflows check and edit generated results automatically: they can replace words, cut text to a length limit, or flag a result for manual review before it reaches the store. You set the rules once, and they apply to every new result.

In this lesson you will build your first workflow, see how it behaves, and learn a few things to watch out for along the way.

## The example we work with

Our flow generates a short delivery description for a cake:

> We are delighted to deliver your chosen **cake** directly to the address you provide… Each Festive **Cake** will arrive in beautiful gift packaging… every celebration deserves a delicious **CAKE**…

The word "cake" appears three times, in three different cases. Keep this in mind, it will matter later.

## Step 1. Create a workflow

Go to **Home → Workflows** and click **Create workflow**.

![Workflows page with the Create workflow button](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/01-workflows-page-create-workflow.png)

The editor opens with the default name **New workflow 1**. Give the workflow a clear name right away: once you have several, generic names are easy to mix up.

![Empty workflow editor with the Create block button](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/02-empty-workflow-editor.png)

> **Note:** the **Active** toggle is on by default. A workflow has no effect until it is assigned to a flow, but once assigned, an active workflow starts processing results.

## Step 2. Set up a block

Click **Create block**. A block appears on the canvas with two parts:

- **IF:** the conditions under which the block runs.
- **THEN:** the actions it performs.

![A new empty block on the canvas](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/03-new-empty-block.png)

Click the pencil icon to open the block settings.

![Empty Edit block window](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/04-empty-edit-block-window.png)

### Conditions

Each condition has three parts: what to check, an operator, and a value. There are two things you can check:

![Condition types: Length and Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/05-condition-types.png)

**Length** is the text length in characters, spaces included. Operators: greater than, greater or equal, less than, less or equal, equals, not equal.

![Length operators](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/06-length-operators.png)

**Text** checks the content. Operators: contains, does not contain, begins with, ends with, is empty, is not empty.

![Text operators](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/07-text-operators.png)

With more than one condition, choose the logic:

- **All conditions:** every condition must be met (AND).
- **Any condition:** one is enough (OR).

### Actions

Three actions are available. The descriptions are shown right in the dropdown.

![The three available actions](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/08-available-actions.png)

- **Replace text:** replaces a word or phrase. Leave **Replace with** empty to remove it. HTML tags are not affected.
- **Truncate:** cuts the text to a maximum number of characters.
- **Mark suspicious:** flags the result for manual review.

A block can hold several actions. They run top to bottom.

### Your first block

**Task:** if the text contains "Happy holidays!", replace "cake" with "festive cake".

1. **Name:** `cake -> festive cake`
2. **Conditions → Add condition:** `Text` · `contains` · `Happy holidays!`
3. **Actions → Add action:** `Replace text`, Find `cake`, Replace with `festive cake`, **All matches** on (replace every match, not only the first).
4. Click **Apply**.

![Block settings for the first example](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/09-first-block-settings.png)

The block on the canvas now shows a summary of its conditions and actions. Check that **Active** is on and click **Save**.

![Saved block with summary, Active toggle and Save button](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/10-saved-block-summary.png)

## Step 3. Assign the workflow to a flow

A saved workflow does nothing until it is attached to a flow.

1. Open your flow and go to the **Automation** tab (the 4th tab).
2. At the bottom, in the **Workflows** section, pick your workflow from the dropdown.
3. Click **Save** to save the flow.

![Workflows section of a flow with an assigned workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/11-flow-workflows-section.png)

Generate a new result and open it from the **Batch List** (the table of generated results).

## Step 4. Check the result

The text containing "Happy holidays!" has changed:

![Result with "festive cake" and "Festive festive cake"](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/12-result-festive-festive-cake.png)

Notice **"Festive festive cake"**. The model wrote "Festive Cake" with a capital C, and without **Match case** the replacement ignores letter case, so "Cake" was replaced too.

**Fix:** turn on **Match case**. Only lowercase "cake" is then replaced, and "Festive Cake" stays as it is.

> **Keep in mind:** Replace text does not look at context, it only looks for matches. If the model already wrote "delicious cake", replacing `cake` with `delicious cake` gives "delicious delicious cake". Think about how your replacement will behave on different texts.

## Step 5. How results are processed

If you change a workflow's settings and reopen a result it already processed, the result stays the same. This is how the system works:

- Workflows process only **new and regenerated** results.
- Each result is processed by a given workflow **only once**. Editing its blocks does not affect results it has already processed.
- Changes are **permanent**. Removing a workflow from a flow does not restore the original text.

To apply new settings, regenerate the result.

> **Tip:** try new workflows on a test flow first. Changes to processed results cannot be rolled back, only regenerated.

## Step 6. Multiple workflows

To fix texts where "Festive festive" appears, you can add a second workflow. This one also flags the result for review:

- **Conditions:** `Text` · `contains` · `Festive festive`
- **Actions:**
    1. `Replace text`: `Festive festive` → `Festive`, **All matches** and **Match case** on
    2. `Mark suspicious` with a reason for the reviewer

![Fix workflow with Replace text and Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/13-fix-workflow.png)

You can assign any number of workflows to a flow. They run **top to bottom**, and each one receives the text as changed by the previous one. Reorder them by dragging the handle or with the arrows.

![Four workflows assigned to one flow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/14-four-workflows-assigned.png)

Recommended order:

1. Workflows that change the text.
2. Workflows that fix side effects of the ones above. A fix must run **after** the workflow that causes the problem.
3. Mark suspicious can go anywhere: it does not stop processing.

If several workflows mark a result as suspicious, the reason from the **first** one in the list is shown.

## Step 7. Truncate with manual review

**Task:** replace "cake" with "candies", limit the text to 110 characters, and keep the shortened text out of the store until someone checks it.

- **Conditions** (**All conditions**):
    - `Text` · `contains` · `cake`
    - `Length` · `greater than` · `100`
- **Actions**, in this order:
    1. `Replace text`: `cake` → `candies`, **All matches** and **Match case** on
    2. `Truncate`: `110`, **Keep whole words** on
    3. `Mark suspicious`: reason `Truncated to 110 characters`

![Block with Replace text, Truncate and Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/15-replace-truncate-mark-suspicious.png)

> **Why the order matters:** "candies" is longer than "cake". If you truncate first and replace after, the text can go over the limit again. Replace first, then truncate.

**Result:**

![Truncated result, 109 characters](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/16-truncated-result.png)

The text is 109 characters long and no word is cut in half. Words joined by a hyphen, like "door-complete", count as one word. No "…" is added at the end. The sentence, however, is unfinished, which is why Mark suspicious is part of this block.

A suspicious result is **not synced to the store** until a user edits or regenerates it. In the Batch List, an "!" icon appears next to **Sync Now**, and the reason shows on hover:

![Suspicious reason shown next to Sync Now](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/17-suspicious-reason-sync-now.png)

Inside the result, a **Synchronization with integration is disabled** warning shows the reason:

![Synchronization disabled warning with the workflow reason](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/18-sync-disabled-warning.png)

> **Integration suspicious words come first.** The integration has its own list of [suspicious words and patterns](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control). If the text contains one, the result gets the system reason "Completion looks suspicious, possible AI recommendations found", and workflow reasons are not shown. The matched word is highlighted in orange.

![System suspicious warning with a highlighted word](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/19-system-suspicious-warning.png)

## Quick reference

| Setting | How it works |
| --- | --- |
| All / Any condition | Every condition must be met / one is enough |
| Length | Text length in characters, spaces included |
| Replace text | Empty Replace with removes the match; HTML tags are not affected |
| All matches | Off: only the first match is replaced |
| Match case | Off: replacement ignores letter case |
| Truncate | No "…" added; Keep whole words keeps words intact |
| Mark suspicious | Blocks sync to the store; does not stop other actions or workflows |
| Several suspicious marks | The reason from the first workflow is shown |
| Integration suspicious words | Take priority over workflow reasons |
| Processing | Only new and regenerated results, once per workflow; changes are permanent |

## What's next

The next lesson covers advanced features: Yes/No branches and connecting blocks, condition groups, and working with HTML output.
