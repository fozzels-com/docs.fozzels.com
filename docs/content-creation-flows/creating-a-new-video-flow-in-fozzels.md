---
id: '103000370066'
title: 4.6.1 Creating a new Video Flow in Fozzels
sidebar_position: 16
slug: /content-creation-flows/creating-a-new-video-flow-in-fozzels
description: >-
  The Video Flow feature is a specialized Content Flow dedicated to generating
  short, high-fidelity video assets for product presentation. Creating a Video F
---

The Video Flow feature is a specialized Content Flow dedicated to generating short, high-fidelity video assets for product presentation. Creating a Video Flow involves three key phases: basic configuration (model selection), asset selection (product and image), and precise prompt engineering. Due to the high computational cost of video generation, accuracy in setup is paramount for successful execution and cost control.

1.  Initiating the Video Flow

1.1 Access and Store Selection To begin, navigate to the "Video Flows" tab in the main Fozzels header. On the Video Flows page, you must first select the store from the "Choose store" dropdown menu to ensure the generated video is linked to the correct product catalog instance. Click the "New Video Flow" button to proceed.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/dhsYmY2Ex4slpTZPdudcNOVCe9nEhoPHyg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/l9D27YTXULoQgwNoai2p9a3wY9wBuD0rxA.png)

1.2 Basic Configuration (Step 1) You will be redirected to the configuration screen where you define the flow's identity and core engine.

1.2.1 **Name** the Flow: Provide a clear, descriptive name in the "**Name**" field for easy identification in your flow list.

1.2.2 **Select** AI Model: The system currently defaults to the Google | Gemini provider for video generation. You must select the specialized video generation model, "Gemini Veo 3".

This model is designed to produce high-quality 720p videos with a duration of up to 8 seconds. It supports image input, which is essential for grounding the video in a specific product asset.

1.2.3 **Define** Flow Kind: In the "**Kind**" section, choose the type of video output required. Select "General | Single Video".

This setting confirms that the system will generate visual assets and product presentations, marking the block with a green checkmark.

1.2.4 **Click** the "**Submit**" button to save these foundational settings and move to the next stage.

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ocwd1m8bDjLUbvNWQQ15jP7-oy92bMKZxw.png)

2.  Configuring Assets and Prompt Engineering

After basic configuration, you are directed to the asset and prompt definition page.

2.1 Product and Image Selection Product Selection:
On the left side of the screen, **select the specific product** from the catalog list for which the video will be generated.

Image Selection: The central block displays the selected product and its image gallery. You must **choose** the single most suitable image from the gallery, as this visual anchor will guide the AI's video generation process.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/y1tWTQrZy2gjdG9yduMpGv4A3xQevUN6-g.png)

2.2 Prompt Engineering (The Critical Step) The prompt is the exclusive input controlling the video's content, style, and narrative.

Input Requirement: The "Prompt" field cannot be left empty. It must contain detailed, descriptive instructions outlining the desired video outcome (e.g., setting, mood, action, camera movements).
**Read** the next section, **[Tips for Creating an Effective Prompt + Examples](/content-creation-flows/tips-for-creating-an-effective-prompt-examples/)**, before writing their prompt to ensure optimal video quality.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ZGiO6GR7CNBTRPTFYBz1RRmNNRTwD_WW6A.png)
Prompt Template Management: To promote consistency and efficiency, **use** the "Save" button above the prompt field to save your instruction as a reusable template. This saves time when creating subsequent flows.

3.  Activation, Execution, and Management

After defining the product, image, and prompt, the flow is ready for execution.

3.1 Activating and Finalizing the Flow Activate the Flow:
3.1.1 To initiate the generation process immediately, **check** the "**Active flow**" box next to the flow's name. If left unchecked, the flow remains in draft mode.
3.1.2 **Click** the main "**Save**" button at the bottom of the page. The system saves all configurations and redirects you to the **"Batch list"** page, which acts as the execution monitor.

3.2 Starting Video Generation from the Batch List On the Batch list page, locate the product you just configured.
Manual Confirmation: To send the request to the AI, you must manually **switch the toggle** in the "**Confirmed**" column to the "on" position.
Initiate Generation: Finally, **click** the icon next to the toggle. Only this action sends the confirmed request to the AI engine to start video rendering. The system will then track the generation status.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/4M5pPg3JaDfvqdgAQ_109lMCWqpJpbt8gQ.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/1NwPEnPYEC3N6fbBX63dOizDPR3J6G4EVA.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/LJon-h82hu4do0c1tI3oVznHeXvSifWXjg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/YwJ6UJ7VzaDPedpbnlZBIqzyNhO1yIuz6g.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/Fb0QFQE1i1hJoK8U4rpyysLV_UwftKGWYQ.png)

3.3 Accessing the Generated Video Upon completion, the final video file is made available for viewing and downloading directly from the Batch list. The video asset is also automatically stored in your personal media repository, which can be accessed at: user/settings/generated media.
