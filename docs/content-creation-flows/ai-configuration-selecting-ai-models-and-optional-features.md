---
id: '103000367978'
title: 4.2.1.  AI Configuration. Selecting AI Models and Optional Features.
sidebar_position: 6
slug: >-
  /content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features
description: >-
  The AI Configuration step (Step 2 in Flow modification) is the most critical
  stage for defining a Content Flow's performance and cost profile. It dictates
---

The AI Configuration step (Step 2 in Flow modification) is the most critical stage for defining a Content Flow's performance and cost profile. It dictates the choice of the generative AI engine, its specialized capabilities, and its operational constraints. Users must make strategic decisions here, balancing output quality, task complexity (e.g., multimodal requirements), and token cost optimization.

1.  ### The Core AI Engine: Providers and Model Tiers

Fozzels integrates with multiple industry-leading AI vendors (e.g., OpenAI/ChatGPT, Google/Gemini, Anthropic, xAI), each presenting a portfolio of models.

1.1. Model Selection Criteria

Choosing the right model requires a strategic evaluation based on the content task:

**Cost-Efficient Models**. Purpose: High-volume, low-complexity tasks (Meta Titles, short translations, data normalization). Key Attributes: Faster processing, smaller context window. Cost Profile: Lowest input/output token cost.

**High-Quality Models**. Purpose: Complex, creative generation, deep summarization, maintaining nuanced brand tone. Key Attributes: Superior logical coherence, large context window. Cost Profile: Higher input/output token cost.

**Multimodal Models**. Purpose: Tasks requiring visual analysis alongside text (e.g., describing an image's texture or style). Key Attributes: Image analysis capability is non-negotiable. Cost Profile: Higher cost due to image tokenization.

2.  ### AI Enrichment Tools and Web Search

AI Enrichment Tools are optional features used to enhance the model's access to external, non-product data.

Enable Web Search: Activating this feature allows the model to query real-time information and external context from the public internet during content generation.

Strategic Value: Web Search is indispensable for content that must reference current market trends, specific manufacturing standards, or external facts not contained in the product catalog attributes.

Cost Implication: Use this feature judiciously, as it generally incurs an additional cost per request, independent of the standard token usage.

3.  ### Specialized Flow Capabilities

For creative tasks extending beyond standard text and image analysis, Fozzels requires dedicated flow types and specific AI models due to the high computational power involved.

**Image Flows (Image Generation).**
Purpose: Generating new product images (from scratch).
Model Requirements: Specialized Image Generation Models (e.g., GPT Image 1, Gemini 2.0 Flash Preview Image Generation).
Vendor Restriction: Restricted to select providers (e.g., OpenAI, Google).

**Video Flows (Video Generation)**.
Purpose: Dedicated to generating short, high-fidelity video content (e.g., 8-second 720p clips).
Model Requirement: High-end Video Generation Models (e.g., Gemini Veo 3).
Vendor Restriction: Currently restricted to Google | Gemini. Cost Structure: Video generation models often operate on a specialized pricing structure (e.g., price per second of video output) due to the high computational demand.

4.  ### Image Optimization and Cost Control

For any flow utilizing multimodal capabilities, efficient handling of product images is essential for both generation stability and token cost management.

4.1. Image Input and Fallback Logic

Image Count: Users must explicitly define the number of product images the AI should analyze (e.g., 1, 2, or 3). Increasing the image count directly increases the input token count and, consequently, the cost.

Fallback/Skip: If a product in the flow is missing the requested image data, users must define a contingency action:
Fallback to a text-only model: The process continues using a text-only prompt, avoiding failure but maintaining generation cost.
Skip generating content: The product is bypassed, saving all associated token costs for that item.

### 4.2. Image Resize (Stability Mechanism)

It is a **best practice** to Enable Image Resize for all multimodal flows. This feature serves as a crucial stability and cost-saving mechanism:

Failure Prevention: Generative models have strict limits on file size (e.g., >2MB) and dimensions (e.g., >2048 pixels). Resizing automatically adjusts these files to acceptable limits.

Cost Efficiency: By ensuring files meet size limits, this prevents generation failures, ensuring that token costs are only incurred for successful content output, eliminating wasted spending on operations that would otherwise crash.
