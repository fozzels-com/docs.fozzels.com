---
id: '103000367979'
title: >-
  4.2.2. AI Configuration. Image Optimization (Resize): Rationale and
  implementation.
sidebar_position: 7
slug: >-
  /content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation
description: >-
  The Image Resize feature automatically optimizes large images to meet the
  technical requirements of the AI generation system. It is enabled by default
  in a
---

The **Image Resize** feature automatically optimizes large images to meet the technical requirements of the AI generation system. It is enabled by default in all new and existing Flows to prevent generation failures and reduce Input Token costs.

**1\. How to Manage the Image Resize Feature**

 The feature is managed individually for each Flow in the AI Configuration step.

1.Go to the editing screen for any of your Flows.

2\. Navigate to **Step 2: AI Configuration**.

3\. Scroll down to the **Image Resize** section.

4\. Manage the feature using the **"Enable Image Resize"** checkbox.

   ![](/img/kb/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/ZDcGWszXAjy6POiHs75NMe0FsBeIK14pfg.png)

    When to Use:
**Enable (Default):** Recommended for all Flows where you use product images for AI Analysis or Image Generation.
This guarantees generation success and reduces token costs.
**Disable:** If you do not plan to use any image analysis or generation in this specific Flow. _Please note: Disabling may lead to an increase in content generation errors if you upload images that exceed the limits._

**2\. Technical Details and Cost Tracking**

The resizing mechanism is only activated when an image exceeds specific technical criteria.

    Activation Criteria
The image resizing mechanism is activated **only** when _both_ conditions are met:

1\. File size **exceeds 2 MB** (MegaBytes);

2\. **AND** width or height of the image **exceeds 2048 pixels**.

Where the Feature Applies

The Image Resize feature works for two main use cases:

        1. Image Usage (Analysis): Images you add for AI analysis within your Flows.
        2. Image Flow (Generation): Images sent along with the prompt for new content generation.

Cost and Expense Tracking

1\. The cost for resizing a single image is **€0.0025 per image**.

2\. This fee is **only charged** when the feature has _actually activated_ (i.e., the image met the technical criteria and was resized).

3\. You can track these expenses on the **Transactions** page of your account.

## 4\. The usage is also included in your daily "Your Fozzels content update" email.

**3\. Key Benefits**

The active Image Resize feature is a key element of reliability and savings:

1\. Prevents Failed Generations: You are guaranteed to **avoid failures** related to large image sizes, saving you time.

2\. Reduced Input Token Costs: Optimized, smaller images require **fewer Input Tokens** for processing by the AI model, which **reduces the overall cost** of content generation.

3\. Saves Your Credits: By avoiding failed generation attempts due to large files, you only pay for successfully created content.

4\. Automatic Downscaling: The system performs the necessary optimization **automatically** in the background, allowing you to focus on content creation.
