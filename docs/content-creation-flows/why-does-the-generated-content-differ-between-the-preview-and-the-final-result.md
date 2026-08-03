---
id: '103000406129'
title: >-
  4.1.2.b Why does the generated content differ between the Preview and the
  final result?
sidebar_position: 4
slug: >-
  /content-creation-flows/why-does-the-generated-content-differ-between-the-preview-and-the-final-result
description: >-
  Question Why does the content shown in the Preview differ from the content
  that is ultimately synchronized to the website? Answer This behavior is
  expected
---

## Question

Why does the content shown in the **Preview** differ from the content that is ultimately synchronized to the website?

## Answer

This behavior is expected.

The **Preview** (available after clicking **Save & Preview**) is **not** the final generated content. It is a test generation for a single product that allows you to:

-   verify that the prompt is configured correctly;
-   review the type and quality of content the prompt produces;
-   make adjustments before running the full flow.

When you start the actual flow, Fozzels sends **new AI requests** for each product.

Although the input data (product attributes, prompt, and settings) remains the same, the AI generates a new response for each request. Since AI-generated content is non-deterministic, the output may vary between the Preview and the final generation.

## Where can I find the final generated content?

The content that was actually generated and synchronized to your website is available in:

-   **Batch List** – for the specific flow execution.
-   **Daily Total Batch List** – for all generated content across flows.

These reports contain the final output that was sent during the flow execution and should be used for verification instead of the Preview.

## Summary

-   **Preview** = a test generation for prompt validation.
-   **Flow execution** = a new AI generation for each product.
-   Small differences between the Preview and the final synchronized content are expected.
-   Always compare your website with the content shown in **Batch List** or **Daily Total Batch List**, as these contain the actual synchronized results.
