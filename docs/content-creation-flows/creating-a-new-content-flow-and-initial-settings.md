---
id: '103000367976'
title: '4.1.2. Creating a Content Flow: the six-step walkthrough'
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  How to set up a Content Flow in six guided steps: select the store and the
  fields, build the prompt from blocks, set each field, test on real products
  and launch. Also the flow page, the review of generated content and the
  Brand Profile.
---

A Content Flow tells Fozzels which products to work on, which fields to fill, which AI model to use and which instructions to give it. Fozzels then generates the content, updates it and sends it to your store.

You set up a Content Flow in six guided steps. You build the prompt from blocks that you switch on and off, and the voice of your brand is in one place: the [Brand Profile](#brand-profile). This article tells you how each step works, from the selection of a store to the generation of content for many products.

## Six steps to a finished Flow

1. **Store.** Select the integration, website and store view that you generate content for.
2. **What and with what?** Select the fields to generate and see how many products already have a value in them. In this step, you also select your products.
3. **Enrich the text.** Select an AI model and build one shared prompt from blocks: who writes, for whom, in which tone, and where the facts come from.
4. **Fields.** Set the length, structure and format for each field.
5. **Test.** Generate texts for real products and look at the scores before you generate content for many products.
6. **Launch.** Set how many products Fozzels does each day and if you approve the texts before Fozzels publishes them.

The six steps are always on the left side of the Flow window. A completed step is green, and the current step is blue. The **Next** button becomes active only when you completed all required settings of the current step.

:::tip
Fill in your [Brand Profile](#brand-profile) before you make your first Flow. Then each new Flow starts with the voice of your brand.
:::

### Step 1. Store

Select three things:

- **Integration**: your shop or PIM.
- **Website**.
- **Store view**: the language of the texts.

All the settings that you make after this step apply to this combination.

Below the fields, Fozzels shows your selection and how many products it contains. If the store that you need is not in the list, connect it first under **Integrations**.

![Step 1: the selection of the integration, website and store view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-01-step-1-store.png)

### Step 2. What and with what?

Select one or more types of content. Each card shows the percentage of your products that already has a value in that field. Thus you see immediately where the largest gaps are.

- **Title**: clear product names that shoppers can find.
- **Description**: the full product text that sells the product.
- **SEO Title**: the title that Google shows.
- **SEO Description**: the short text in the search results that makes shoppers click.
- **Other attribute**: an attribute from your shop, such as colour, material or dimensions.

![Step 2: content types with fill rates](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-02-step-2-content-types.png)

In the **Add another attribute** window, you can search for an attribute by name or code. The attributes with the highest fill rate are at the top. The type of the attribute comes from your shop: a number, a value from a list or text. Thus the AI writes the correct type of value.

![The Add another attribute window](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-03-add-another-attribute.png)

ALT texts for images have their own Flow mode. Such a Flow makes only ALT texts and has its own rules. For more information, see [Generating Image ALT Texts for Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/).

All the fields that you select show in the **You are creating** block. The first field is the base (**BASE**). The other fields use it as a starting point. To change the order, drag a field by its handle on the left. You give the instructions for each field in step 3.

Lower in this step, you select the products for the Flow.

![The You are creating block with the selected fields](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-04-you-are-creating.png)

### Step 3. Enrich the text

In this step, you build the prompt: the instruction that the AI gets for each product. The prompt has blocks. First you set how the text sounds. Then you set what the AI uses as sources and what must be in the text. Below the blocks, you see the prompt.

When you open the step, Fozzels prepares a proposal for each field. Fozzels sets the base: the structure, the language and the correct type for each field. Click **Load brand profile** to load a saved profile, or **Save as brand profile** to save the settings of this Flow as a new profile.

**Which AI model?** First select the provider, then the model. The model sets the quality and the price of your texts. For each model, you see the cost for 1,000 tokens: for the text that the AI reads (input) and for the text that it writes (output). Labels such as **Recommended**, **Balanced** or **Fast & low cost** help you select. The model also sets if the **Look at photos** and **Search the internet** blocks are available. You can change the model at any time. You do not have to set up the Flow again.

![Step 3: the base prompt and the selection of the AI model](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-05-step-3-ai-model.png)

**How the text sounds.** These settings apply to all sections of the text: who writes, for whom, in which tone and how long. In the **Role of the AI** block, select a role with one click. To change the name and description of a role, click the pencil icon. The description tells who writes, with which expertise and with which aim.

![Editing a role: name and description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-06-edit-role.png)

Click **Make default** to use the selected option in all new Flows. The option then gets a star and the label "Default for new flows", and a link to the Brand Profile shows next to it. To undo this, click **Remove from defaults**. **Make default** works in the same way for the model, the audience, the tone and the other blocks.

![A role with the label Default for new flows](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-07-role-default.png)

The **Target audience** and **Tone of voice** blocks work in the same way as the role. Turn them on with the toggle. Then select a saved option with one click, or make a new option. Below the buttons, you see the full description that the AI gets. If you do not select a tone, the AI writes in a neutral, informative style.

![The Target audience and Tone of voice blocks in a Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-08-audience-tone.png)

#### Neuromarketing principles

The four principles are **Processing fluency**, **Simulation**, **Congruence** and **Trust**. They come from neuromarketing research with Erasmus University Rotterdam. Turn on the principles that you need, and the AI uses them in each text. The [Brand Profile](#neuromarketing-principles-in-the-brand-profile) section tells you what each principle does.

Do you not know which principles to use? Click **Fozzels suggestions**. Fozzels AI looks at the products that you selected and tells you which principles fit them. The recommended principle gets the label "advice". Click **Apply advice** to use it. This function uses tokens.

![Neuromarketing principles with advice from Fozzels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-09-neuromarketing.png)

#### Where the facts come from

Here you set the sources that the AI can use: the attributes in your own system, the information in the photos and the information on the internet. The AI uses only the sources that you turn on. It does not invent facts.

**Attributes from your store.** The attributes from your shop, ERP or PIM that the AI uses as input. Fozzels already selects the attributes with a high fill rate. Click the cross to remove an attribute, and add the attributes that are missing. The percentage shows for how many products the field has a value. The coloured bar shows if the field is filled, partly filled or empty. Fozzels skips empty fields.

![The Attributes from your store block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-10-attributes-from-store.png)

**Look at photos.** Your photos can show information that is not in your fields, for example the fit, the closure or a print. The AI reads this information from the images. It uses it in the text or to fill a field.

- **How many photos per product?** 1 to 4, or all (maximum 5). More photos give more details, but cost more.
- **What should the AI look at?** Write the details that the AI must examine, for example collar, pockets and hood.
- **When a product has no image yet.** Fozzels waits for the image and then generates automatically, or it skips the product.
- **Enable Image Resize.** Fozzels makes large images smaller automatically. This prevents failed generations and saves credits. It costs €0.025 for each image.
- **Fozzels suggestions.** The AI looks at some photos and suggests visible details that are important for the text. Add them with one click.

![The Look at photos block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-11-look-at-photos.png)

**Search the internet.** Sometimes the information that you need is not in your shop and not in the photos, for example the specifications of the manufacturer, material details or reviews. Then Fozzels searches for it on the internet. The AI uses only the facts that agree with your product data.

- **What does the AI search with?** The fields that identify a product: usually the brand, the name and the GTIN. The names of these fields are different for each integration.
- **Which information do you want the AI to look up online?** The topics to search for, such as reviews, sustainability or size advice. **Fozzels suggestions** tells you which topics are useful.

![The Search the internet block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-12-search-internet.png)

Fozzels calculates the costs of **Look at photos** and **Search the internet** for each product. You see them in the **Test** step.

#### Building blocks: extend the prompt

These blocks are optional. Turn on a block, fill it in and save it. Fozzels then puts it in a fixed position in the prompt.

**Keywords.** The search terms that shoppers must find the text with. Type them yourself, or click **Fozzels suggestions** to get keywords for the product category. A connection to your SEO tool will be available soon. Fozzels puts the keywords in the heading and in the first paragraph, and then in the rest of the text. If you do not select keywords, Fozzels selects a term for each product from its title and category.

![The Keywords block in a Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-13-keywords.png)

**My snippets.** Your own instructions that you can use again in different Flows, for example a fixed last sentence, a rule about sizes, or a list of brand names that must always have the correct spelling. A snippet applies to the full text, in all fields of the Flow.

#### Rules, checks and guidelines for the full text

Here you set what the AI must always do or never do, in all parts of the text. This prevents mistakes that you must otherwise correct in each text.

**Do not mention.** Words and topics that must not be in the text: prices, discounts, names of competitors, claims such as "the best" or "the cheapest". The AI does not use them, also when they are in your sources.

![The My snippets and Do not mention blocks](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-14-snippets-do-not-mention.png)

**Guidelines and check rules · Fozzels standard.** The standard rules that Fozzels uses for each text. They are on in each new Flow. You can turn off a rule that does not fit your texts.

- Do not mention prices, discounts or delivery times.
- Use only facts from the product data, the photos or the search results.
- Do not use superlatives or claims such as "the best" or "the cheapest".
- Copy sizes, materials and brand names exactly from the product data.
- Use only the formatting from the structure settings.
- Use the same form of address and the same spelling in the full text.

To add your own rules, use **Your own rules**, for example "always mention the country of production".

![Fozzels standard rules and your own rules](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-15-standard-rules.png)

#### Extra fields: short guidelines, not separate prompts

If you selected more than one field in step 2, the AI fills the extra fields in the same request, with the same main prompt. The role, audience, tone, sources and rules apply to them automatically. Thus you do not write a separate prompt for each field. You write only a short guideline: what the field contains, how long it is and in which form.

Fozzels already prepared a proposal for each field. Keep it, or change it with **Edit guideline**. The link "Change fields in step 2" takes you back to the selection of the fields.

![Extra fields and the Your prompt summary](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-16-extra-fields.png)

**The guideline editor.** On the left, you see the text of the guideline. On the right, you see the **Preview**: the same guideline with the real values of one product. Use the arrows in the **Preview** to go to a different product.

- **Attributes as variables.** Fozzels adds attributes from the **Attributes** panel to the text as green tags. A yellow conditional "if…" block adds a line only when the product has a value for that attribute. You can sort the panel by fill rate and search in it. The number on an attribute shows how many times you use it.
- **Snippets.** Your saved instruction snippets are on the right.
- **Templates.** Click **Save as template** to save a guideline as a template. Click **Load** to use it in a different Flow.
- **AI Assistant.** The assistant helps you write or change the guideline. You can add the result, put it at the cursor, replace the text with it or copy it.

For a full description of the editor, see [4.3.2 Prompt Setup and Usage: The New Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

![The guideline editor with the Preview, the attributes and the snippets](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-17-guideline-editor.png)

![The AI Assistant in the guideline editor](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-18-ai-assistant.png)

The gear icon next to the name of the field opens the attribute settings. Here you set:

- if Fozzels uses the attribute,
- if you can filter on it,
- if Fozzels can write content into it and update your store,
- if child products get the value of the parent,
- if HTML is allowed.

You can also translate the name of the attribute into other languages. This helps the AI to understand what the attribute contains. When you save this window, Fozzels does not send anything to your store.

![Attribute settings](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-19-attribute-settings.png)

#### Your prompt

At the bottom of the step, you see a summary: the number of fields in the Flow, the number of blocks that are on, and all active blocks, from the role and the audience to the check rules. You see the real texts in step 5, when you test the prompt on real products.

### Step 4. Fields

In this step, you set the length and the structure of the text for each field. The fields are tabs at the top. Click **+** to add a field, and click the cross to remove a field. All the settings from the **Enrich the text** step still apply to each field.

**Length of the text.** The approximate number of words that the AI writes: **Short** (about 60), **Normal** (about 120), **Long** (about 200) or **Custom** (your own value).

**Trust block.** A short block at the end of the text. It gives shoppers and AI agents trust in the product and your shop. Write what makes your shop reliable, for example high customer satisfaction, physical stores, free returns, a warranty or a quality mark. The block becomes a separate section at the end of the text. There are two options:

- **Same block in every description** (recommended): Fozzels adds the block word for word after each text. The block is always correct, and the prompt stays shorter.
- **AI mentions it where it fits**: the AI writes these points in its own words, only where they fit.

You can give the block a heading, for example "Ordering and delivery", and a list of points.

![Step 4: the length of the text and the Trust block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-20-step-4-length-trust-block.png)

**Structure and formatting.** The order of the parts of the text in your shop. Fozzels prepares the default structure for this type of text. You can change it:

- **Format**: HTML (h2, h3, h4, p, ul) or plain text.
- **Sections**: each section has a heading level (H2, H3 …), a form (heading, paragraph or bullet list) and its own instruction. Drag a section to change the order. Click the cross to remove a section.
- **+ Custom section**: adds your own section.

![Structure and formatting: the sections of a description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-21-structure-sections.png)

Click the pencil icon to open the section editor. Here you set the heading, the level, the instruction, the form, the approximate number of words and a condition. The condition sets when Fozzels adds the section to the text: **Always include**, **Only if a field is filled** or **Only if a building block is on**.

![Editing a section and its condition](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-22-edit-section.png)

### Step 5. Test

In this step, you see products from your selection. For each product, you can see the prompt exactly as the AI gets it: click **View the filled-in prompt for this product**. Click **Test** to see the text that the AI writes for that product, next to the current text. If you do not like the result, go back to the blocks in step 3.

Fozzels suggests some products from your selection for the test. To add other products, search for them. To remove a product, click the cross.

:::note
A test writes a real text with your AI model. Fozzels charges it in the same way as all other texts. The scores also use tokens.
:::

![Step 5: test products](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-23-step-5-test-products.png)

After the test, Fozzels shows the total score of the current text and of the new text, and the improvement, for example 12 → 69, or +57. Below this, you see a score from 0 to 100 for each topic, with a short explanation for the current text and for the new text.

| Topic | What Fozzels scores |
|---|---|
| SEO | Can shoppers find the text in Google: a keyword at the start, a good length, sentences that are easy to read. |
| GEO | Can AI search engines and shopping agents find the text: specific facts that they can verify. |
| AI readability | Can a language model understand the text immediately: a clear structure. |
| Keywords | Does the text contain the selected search terms in a natural way, without too many repetitions. |
| Internal links | Does the text contain the selected links, with a link text that tells where they go. |
| Conversion | Does the text give a reason to buy, remove doubts and give confidence at the correct moment. |
| Neuromarketing | Does the text use simulation, congruence, trust and processing fluency. |

Fozzels calculates the scores on the text itself, from the blocks that are on in this Flow. It does not count the topics of blocks that are off, for example **Internal links**.

![Scores of the current text and the new text for each topic](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-24-test-scores.png)

### Step 6. Launch

The last step has three questions and, if necessary, advanced settings.

1. **How many products per day?** 10, 25, 50, 100 or your own number. The limit keeps the costs and the review work small. When Fozzels completed the current selection, the Flow automatically takes new products that agree with it.
2. **What happens with a new text?**
    - **I approve every text first** (recommended): new texts go to your review list. Fozzels sends nothing to your shop before you approve it.
    - **Straight to my shop**: Fozzels publishes the texts automatically. You can still edit them or go back to the previous version.
3. **If a product changes later?** If an attribute that the prompt uses changes, for example the colour or the material, Fozzels can write a new text automatically. When the toggle is off, Fozzels writes a text for a product only one time.

Under **Advanced settings**, you can prevent other Flows from generating the same content again:

- **Use default**: the cooldown from your general settings.
- **Override**: your own cooldown for this Flow, in weeks.
- **Turn off**: no cooldown. Fozzels does not generate a new text only because time passed.

For more information, see [Prevent Overlapping Content Generation](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).

In **Advanced settings**, you can also click **Connect workflow** to add an action that runs after each text, for example a translation into German or a new meta description.

Click **Launch flow** to start the Flow, or **Save as draft** to continue later.

![Step 6: launch settings](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-25-step-6-launch.png)

## After the launch: the Flow page

After the launch, you see the message "Your flow is running" and a button that opens the Flow page.

![The message Your flow is running](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-26-flow-running.png)

The Flow page shows all the information about the Flow on one screen:

- **Product selection**: the filter that selects the products, and the number of products.
- **System prompt**: the part of the prompt that Fozzels sends with each request, before the instructions for the fields: the role, the audience, the tone, the principles, the keywords, the words to avoid and the rules.
- **Attributes to generate**: the fields that Fozzels generates. Fozzels makes all of them in one AI request for each product, with one shared main prompt.
- **Status**, **AI Configuration**, **Automation**, **Workflows**: the status and the progress, the model and its price, the daily limit, automatic publishing, the confidence threshold, the cooldown and the connected actions. To change a block, click its **Change** button.

![The Flow page in Expert view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-27-flow-page-expert-view.png)

In the top bar, you can switch between **Step by step** and **Expert view**, and open the generated content (**Generated content**), the test and the schedule. The **…** menu contains:

- **Run Now**: starts the generation immediately, also when the Flow already reached the daily limit for today.
- **Duplicate**, **Archive** and **Delete**. For more information, see [4.1.3. Managing Flows: Duplication, Archiving, and Deletion](/content-creation-flows/managing-flows-duplication-archiving-and-deletion/).

![The Flow menu with Run Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-28-flow-menu-run-now.png)

**Workflows.** To add a workflow action to the Flow:

1. In the **Workflows** block, click **Change**.
2. Select an action from the list, for example "Product is in".
3. Click **Add**.
4. Click **Save**.

![Adding a workflow to the Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-29-add-workflow.png)

For more information, see [4.11.1. Workflows. Lesson 1: Getting Started with Workflows](/content-creation-flows/workflows-lesson-1-getting-started/).

**Test on the Flow page.** This opens a table with all the products of the selection. For each product, you see the SKU, the name, a thumbnail and the prompt. Click **Generate Now** in a row to generate content for that product immediately, without waiting for the schedule. You can search the table, go to other pages and select the columns to show.

![The product table of the Flow with the Generate Now button](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-30-flow-product-table.png)

### Generated content: review and approve

Click **Generated content** to open the list of generated content (**Content Completion List**). For each product, you see the SKU, the name, a thumbnail, the prompt, all generated fields, and the dates when Fozzels created and executed the request. Each column has a filter. The **Confirmed** toggle shows if a text is approved. To do an action for many texts at the same time, select the rows and select the action in the **Actions** menu.

![The list of generated content](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-31-generated-content-list.png)

Click a row to open the **Edit completion result** window:

- **Main field**: the text on the left, and a **Preview** on the right that shows how the text looks in your shop. Click **Show HTML** to see the HTML code, or **Enable Editor** to use the visual editor.
- **Other fields of the Flow**: below the main field, you can examine and edit the other fields that this Flow filled, such as **SEO Description** and **SEO Title**.
- **Batch Confirmed**: marks the result as approved. Above the buttons, you see the sync status with your store.
- **Buttons**: **Save**, **Save & Sync** (saves the text and sends it to your store immediately), **Regenerate**, **Show Revisions** (previous versions) and **Copy to Clipboard**.

![The Edit completion result window](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-32-edit-completion-result.png)

For more information, see [4.7.5 Editing Content in the Batch List. Rich Text Editor](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/) and [4.7.4 Suspicious Words & Phrases](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

## Two modes: Step by step or Expert view

Use the mode that you like. You can switch between the modes at any time with one click.

| Mode | What it shows | Best for |
|---|---|---|
| Step by step | A guided wizard, one step at a time. | New Flows and new team members. |
| Expert view | The full Flow on one page, also the advanced settings. | Experienced users who want to see all settings at the same time. |

The advanced settings in **Expert view** include the confidence threshold, the cooldown between Flows and what Fozzels does when a product has no image yet.

When you make a new Flow, Fozzels gives it a name from your selections. You can change the name and go back to the suggested name with one click.

## Brand Profile: the voice of your brand in one place {#brand-profile}

The **Brand Profile** is a separate page in your account settings. It sets what each new Content Flow starts with:

- the AI model,
- who writes, for whom and in which tone,
- the neuromarketing principles and the keywords,
- what must never be in the text.

You can still change each of these settings in a Flow. When you change the profile, Fozzels does not change your existing Flows.

![The Brand Profile page](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-33-brand-profile.png)

### More than one profile

Make a separate profile for each brand, shop or product line, for example one for descriptions and SEO, one for FAQ, one for ALT texts or one for a sale.

- **New profile**: type a name, for example B2B, Outlet or Premium line, and click **Create**.
- **Rename** / **Delete**: change the name of a profile or delete it. You cannot delete the default profile. First make a different profile the default.
- **The default profile**: each new Flow starts with it. In the **Enrich the text** step, you can load a different profile or save the settings of the Flow as a new profile.

### AI model

Select a provider (OpenAI (ChatGPT), Anthropic, xAI or Google Gemini) and a model. New Flows start with this model, but you can select a different model in each Flow.

### Role, audience and tone

Turn on each block with its toggle. The saved options are buttons. Click a button to select an option. Below the buttons, you see the full description that the AI gets. Click the pencil icon to edit the description, or click **+ New…** to make a new option.

- **Role of the AI**: who writes the text and from which point of view, for example Webshop copywriter, SEO specialist, Brand storyteller or Shop assistant.
- **Target audience**: who reads the text: the age, the lifestyle, how to address the reader and what is important to them.
- **Tone of voice**: how your brand speaks to customers, in your own words. If you do not select a tone, the AI writes in a neutral, informative style.

### Neuromarketing principles in the Brand Profile {#neuromarketing-principles-in-the-brand-profile}

Each principle adds a writing rule to the prompt. You can select more than one principle. They make each other stronger.

| Principle | Writing rule | Works for |
|---|---|---|
| Processing fluency | Short sentences, a clear first line, few claims, a logical order. | Everyday purchases, comparisons, low prices. |
| Simulation | The customer imagines that they use the product: a situation, a moment, what they feel. | New, special or emotional products. |
| Congruence | The text agrees with the photo and with the product that the customer gets at home. It makes no promises that the product does not keep. This gives fewer returns. | Products where the expectation and the real product must agree. |
| Trust | Honest, specific and familiar. Facts that the customer can check, not clever sales talk. | More expensive purchases, unknown brands, new customers. |

### Keywords, words to avoid and your own instructions

- **Keywords**: the search terms that shoppers must find the text with. In a Flow, Fozzels can also suggest terms for its products. If you do not select keywords, Fozzels selects a term for each product from its title and category.
- **Do not mention**: words and topics that must not be in the text: prices, discounts, names of competitors, claims such as "the best" or "the cheapest". The AI does not use them, also when they are in your sources.
- **Own instructions**: other information that the AI must know, in your own words, for example how to address the reader or what to always mention, such as "we ship in 24 hours". Fozzels adds this text to the system prompt after the blocks, one line for each paragraph.
