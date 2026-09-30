---
id: '103000368009'
title: 4.3.3. Writing Effective Prompts (Recommendations)
sidebar_position: 11
slug: /content-creation-flows/writing-effective-prompts-recommendations
description: >-
  This guide provides practical advice and best practices for structuring and
  writing high-quality, dynamic prompts that produce personalized,
  professional,
---

This guide provides practical advice and best practices for structuring and writing **high-quality, dynamic prompts** that produce personalized, professional, and unique content, moving beyond simple attribute insertion.

### **Best Practices for Quality Prompt Generation**

Follow these six core recommendations to maximize the effectiveness and clarity of your prompts:

1\. Create a Clear Structure.
**Use** short paragraphs, one instruction or data line each, so the prompt is easy to read and to maintain. The prompt itself carries no formatting: to get headings, lists or HTML in the *generated* text, ask for them in words, for example _Start with an `<h2>` heading that names the product, then list three key benefits as a `<ul>`._ Any HTML tag the output should contain must be allowed under [Trusted HTML Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation).
2\. Always Check Data Availability.
**Avoid** inserting attributes directly if you cannot guarantee the value is present for all products. If an attribute value is missing, it will leave an empty space in the final generated text.
**Wrap** the attribute and its surrounding text within an **if block** (conditional logic).
_Example: a condition on **Material** holding the line_ Material: **Material** _(the text "Material:" appears only if the product has a material)._
3\. Ensure Tag Closure.
**Verify** that all paired HTML tags your prompt asks for are correctly closed (e.g., `<strong>` is closed with `</strong>`). Incorrectly closed tags can cause formatting errors in the final output.

4\. Avoid Repetition.
**Do not** insert the same attribute value multiple times into different blocks. This overloads the text and can cause the AI to generate repetitive, unnatural content.

5\. Write "Humanly" (Tone and Engagement).
**Imagine** you are a copywriter engaging the customer. Add lively details, emphasis, and speak directly to the user to make the text feel natural and persuasive.
_Example: a condition on **Brand** holding the line_ Reliability from brand **Brand** — a great choice for your comfort.
6\. Verify the Result.
Click **Save & Preview** to see exactly how your prompt works on real products and with their available attributes. This step is crucial for catching errors in logic, syntax, or tone before running a large batch.
