---
id: '103000313152'
title: '"Recursion detected" warning when creating a Flow'
sidebar_position: 26
slug: /content-creation-flows/recursion-detected-warning-when-creating-a-flow
description: >-
  When you see this warning, it means that you are using the variable to input
  content from the same attribute that you are using the Flow to write to. For e
---

When you see this warning, it means that you are using the variable to input content from the same attribute that you are using the Flow to write to.

For example: you are creating a Flow to automatically update the "Description" field (attribute).

In the box where you can write the prompt, you have used that same "{Description}" tag as an input variable.

This can be OK, but can also cause an issue where the content is overwritten every day, if you have the "Automatically regenerate when product attribute changed" option set.

In this scenario, new content will be written to the "Description" field by Fozzels.

But, that means that this product is also marked as "changed", so that Fozzels will try to re-generate content for this product the next day -- and again and again.

You might want to consider turning **off** the "Automatically regenerate when product attribute changed" option, or **removing** that input field from your prompt.
