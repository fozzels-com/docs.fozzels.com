---
id: '103000371114'
title: '3.5. Recursion Detection: Preventing Infinite Content Generation'
sidebar_position: 8
slug: >-
  /data-import-and-quality/recursion-detection-preventing-infinite-content-generation
description: >-
  The "Recursion detected" warning signals a potential conflict in your Flow's
  configuration where the output of the generation process also serves as an inp
---

The "Recursion detected" warning signals a potential conflict in your Flow's configuration where the output of the generation process also serves as an input for the same process. This means your Flow is set to read data from the same attribute to which it is simultaneously set to write the newly generated content.

The most common example is a Flow designed to update the {Description} field (the Target Attribute), yet the prompt itself uses the {Description} variable as a source of information.

### Technical Implication: The Content Loop

When this configuration is used in conjunction with the "Automatically regenerate when product attribute changed" setting, a perpetual content generation loop can occur, leading to unnecessary token consumption and execution cycles.

1.  Execution Day 1: Fozzels successfully generates new content and writes it to the Description field.

2.  Change Detection: Because the Description field's value has changed, the integrated e-commerce system marks the product as "updated."

3.  Next Execution: On the next scheduled run (e.g., the following day), the automation setting detects that the product has been "updated" and attempts to regenerate the content again.

4.  The Loop: This regeneration creates a new change, triggering the process indefinitely.

### Recommendations for Management

While using the Target Attribute as an input is sometimes intentional (e.g., appending information to existing text), it is critical to manage the automation settings to prevent this endless loop.

- **Action 1**: Disable Automatic Regeneration The most effective way to break the loop is to turn off the "Automatically regenerate when product attribute changed" option. This ensures that even though the Flow causes a change in the target attribute, the automation does not automatically schedule a rerun based on that specific change.
- **Action 2**: Remove the Recursive Input If the existing content is not strictly necessary for the prompt logic, remove the recursive variable (e.g., remove {Description}) from your prompt. Instead, rely only on static product attributes (like Brand, Material, Color) to guarantee that the content generation is based on immutable data, thus preventing the triggering of continuous updates.

