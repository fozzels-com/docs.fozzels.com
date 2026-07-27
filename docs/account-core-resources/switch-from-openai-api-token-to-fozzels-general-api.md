---
id: '103000357927'
title: 1.4.1. Switch from OpenAI API token to Fozzels general API
sidebar_position: 6
slug: /account-core-resources/switch-from-openai-api-token-to-fozzels-general-api
description: >-
  We have changed the way Fozzels handles payments for "tokens" from the AI
  models. We ask all our users to change this setting before August 1, 2025.
  Please
---

We have changed the way Fozzels handles payments for "tokens" from the AI models.

We ask all our users to change this setting before August 1, 2025.

Please take some 10 minutes to change this setting in your Fozzels account.

Contents:

1.  Background
2.  Change
3.  Advantages
4.  ## What to do, step by step

-   ### Set up payment

-   ### Remove your current OpenAI key

5.  ### Ready

## Why?

Fozzels started out automatically generating content for you using the language models of OpenAI (GPT-4o, currently).

After setting up a new Fozzels account; we asked our users to also set up an OpenAI-account, add their credit card data there, create an OpenAI API key, and copy-pasting that key into Fozzels.

That all worked very well -- but had some drawbacks:

1.  It would take longer for users to get started, because they had to open an account at OpenAI as well, and do "something gimmicky" with copy-pasting API-keys.
2.  New OpenAI accounts are limited in usage (rate limits etc.), so Fozzels users could not take advantage of batch creating product content in large quantities.
3.  New OpenAI-accounts are limited in models; so users could not always use Fozzels to generate AI images, for example.
4.  We could not easily offer our users access to AI models from other vendors, like Google (Gemini), Anthropic (Claude), or xAi (Grok).

## Change

In order to solve these issues, Fozzels has changed the way we handle payments for AI "tokens".

Instead of paying to all AI vendors separately, you will now pay directly to Fozzels for AI usage -- and Fozzels will pay for your AI usage to the AI vendors for you. Fozzels uses [Stripe](https://stripe.com/nl/payments), one of the largest online payment providers in the world, to handle financial bookings.

## Advantages

Doing this has the following advantages:

1.  A quicker and easier onboarding for new Fozzels users;
2.  You will always be able to generate content for many products (no more limits on accounts); because Fozzels has "unlimited" accounts at the AI vendors;
3.  You can use image generation models in Fozzels;
4.  You can choose between more AI models than OpenAI (Google Gemini 2.5 Flash; xAi Grok 3; Anthropic Claude 4 Sonnet -- and more will follow);
5.  You can now enable "web search", which means you can let the AI search on internet for, for example missing data, and use that to generate product data or descriptions.

You can currently choose from the following AI models:

![All AI models available in Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/AU9GwQ3QT_bYnbdVWdVFZXcOrtjOBOSAAQ.jpg)

##

## What to do, step by step

### A) Set up payment

1.  Please log in to your Fozzels account, and click on your **user image** in the top right.
2.  In the drop down, click on **Settings**.
3.  In the Settings menu on the left, click [**Payments**](https://app.fozzels.com/user/settings/payments).
4.  You will see the following screen. Click on the button "**Charge Credit now**".
    ![Fozzels Payment screen](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/tcgrCp0izWkeJxIjlmzD6xS5OZByebIyHg.png)

5.  You will see a pop-up window, requesting an amount. Enter any amount you would like to add to your balance. The default is € 50, but you can change this if you would like. Then click the button "**Charge Now**".
    ![Charge Credits now Popup](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/drZn1vvSyjH8rRfhLn8mWW_HuhAo2tTs-w.png)

6.  You will be redirected to the Stripe payment page, where you can enter your payment details.
    Please note that no payment details are saved at Fozzels; only at Stripe.
    You can use the following payment methods: iDEAL, Credit Cards (VISA, American Express, Mastercard, Discover), Amazon Pay, Paypal, Revolut Pay and Bancontact.
    ![Stripe payment screen](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/BRJcSSvdJ5LBFl1zVDZ0UyhLPh4URCTO1w.png)

7.  Please remember -- if this payment is for your company account -- to also enter your **company name** and **VAT-id**.
    ![Add VAT info on stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/ZlO4Se712OMvnGl-aiWPNytLfwhRuRKerQ.png)

8.  After succesful payment, you will be redirected back to Fozzels, and see your current balance on the Payments page.
    ![Updated balance on Payments page](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/Own2E9SNmWHQ1UHAoPh9oA1cXL0Sz8BkLQ.png)

9.  Next, \[_optional_\], if you want to automatically "recharge" your account balance when your balance reaches a low amount, you can set that by clicking on the button "**Configure Charge Credits**". This way, the content generation via the Flows that you have set up, will never be interrupted.
    Enter the amounts you would like to set, enable the checkbox "_Yes, automatically recharge my card when my credit balance falls below a threshold_" and click on the **Save** button.
    ![Automatic Recharge settings pop-up](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/3BrEoNMQNNw7wOSkoZGXdLG3l9cyJwGeQ.png)

### B) Remove your current OpenAI key

After you have setup your payment details, remember to **remove** the current OpenAI API-key from your account.
This way, Fozzels will use our own API keys to all AI vendors.

1.  To activate this, click on "**Open AI Token**" in the left menu.
    ![Fozzels settings menu](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/zFcW_bCeIp8XohHkBB2EQ8E7ZbEkvU1xTg.png)

2.  Select your token in the field Token, **delete everything in the field**, and click on the **Save** button.
    ![Fozzels OpenAI API Token field](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/z6eQMCzEGgNDu4KJsBT_QlGBwDiOAHKsTg.png)

You are now ready.

Tada! Well done.
Thank you and have fun using Fozzels.
