---
title: Account Settings — Complete Reference
sidebar_position: 10
slug: /account-core-resources/account-settings-complete-reference
description: >-
  Every section of Fozzels Account Settings explained — Profile, Security,
  Notifications, OpenAI Token, API tokens, Flow Settings, Prompt Templates,
  Media, Plans, Payments and Transactions.
---

Go to [Settings](https://app.fozzels.com/user/settings) — the left sidebar has all sections.

---

## Profile

Configure your personal account details:

- **Name, email, company, phone**
- **Avatar** — upload a JPG or PNG photo
- **Language** — EN, NL, DE, or ES (changes the Fozzels interface language)
- **Timezone** — important for pull schedules, which run in UTC by default; setting your timezone makes scheduled times display correctly

---

## Security

Change your account password:

- Enter your current password
- Enter and confirm a new password

---

## Notifications

Toggle which emails Fozzels sends you:

- **Product emails** — news, tips, and feature announcements from Fozzels
- **Balance alert** — notification when your credit balance drops to zero

---

## Open AI Token

Add your own OpenAI API key to use your personal OpenAI billing instead of Fozzels credits.

- When set, all OpenAI-based Flows and the AI assistant use your key directly
- You still need a minimum €0.01 balance in Fozzels to use this feature
- Leave empty to use the Fozzels platform key (credits are deducted from your balance)

---

## API (Personal Access Tokens)

Create API tokens for programmatic access to Fozzels:

- Give each token a name
- Tokens can be revoked at any time
- Use tokens to integrate Fozzels with external tools or automate tasks via the API

---

## Flow Settings

Global settings that apply to all Content Flows unless overridden per-Flow.

### Trusted HTML Tags

Whitelist of HTML tags allowed in AI-generated content. Only tags in this list will be kept when the output is used in an HTML attribute.

### Suspicious Words

List of words or phrases that automatically flag generated content for manual review.

Default suspicious words include AI artifacts like "As an AI", "I cannot", "Sorry". You can:

- Add your own words (e.g. competitor names, forbidden phrases)
- Remove default entries that are causing false positives

Completions containing suspicious words cannot be auto-synced — they require manual review and confirmation.

### Completion Cooldown (global)

Minimum time between AI regenerations for the same product, across all Flows.

Format: set a number and a unit (hours, days, weeks).

Individual Flows can:

- **Inherit** this global setting
- **Override** with their own cooldown
- **Turn off** the cooldown entirely

---

## Prompt Templates

Save reusable prompt templates to use across multiple Flows.

- Give each template a name and content
- Reference templates when creating or editing a Flow instead of writing the prompt from scratch
- Useful for maintaining consistent tone and format across Flows

---

## Media

Your media library — images and files uploaded or generated within Fozzels.

---

## Plans

View and change your subscription plan.

Go to [Plans](https://app.fozzels.com/user/settings/plans)

Each plan shows:

- Name and description
- Included features
- Quotas: max integrations, stores, active Flows, daily completions, monthly completions
- Price

To upgrade or downgrade: click **Choose Plan** → Stripe checkout → confirm payment.

### Available plans

| Plan | Integrations | Stores | Flows | Completions/day | Completions/month |
|------|-------------|--------|-------|-----------------|-------------------|
| **Trial** | 1 | 1 | 1 | limited | limited |
| **Starter** | 6 | 18 | unlimited | — | — |
| **Ultra Light** | 1 | 1 | 4 | 1,000 | 30,000 |
| **Light** | 1 | 3 | 5 | 30 | 900 |
| **Plus** | 3 | 6 | 15 | 75 | 2,250 |
| **Premium** | 6 | 18 | 60 | 100 | 3,000 |
| **Unlimited** | unlimited | unlimited | unlimited | unlimited | unlimited |

> When a quota is exceeded, the action is blocked with a message linking to the Plans page.

---

## Payments (Credits)

Go to [Payments](https://app.fozzels.com/user/settings/payments)

Fozzels uses a **pay-per-use credit system** — separate from your subscription plan. Credits are consumed each time AI generates content.

**Cost:** approximately €0.06 per 750 words of generated content.

**Example:** 1,000 product descriptions of ~200 words ≈ €16

### Managing your balance

- **Current balance** — shown in the orange box
- **Charge Credit Now** — manual one-time top-up via Stripe
- **Configure Auto-Charge** — set a threshold and auto-charge amount
  - Example: charge €50 automatically when balance drops below €10
- **Customer Billing Portal** — Stripe portal to manage payment methods and download invoices

### Payment history

The table shows all past charges with date, amount, and status.

### Common billing issues

- **"You exceeded your current quota"** — your balance is zero or your OpenAI API key has expired
  - Top up at [Payments](https://app.fozzels.com/user/settings/payments) or add your own OpenAI key in Settings → Open AI Token
- **Auto-charge not triggering** — check that the threshold is set and a payment method is saved in the Stripe portal

---

## Transactions

Full history of all credit deductions — shows which Flow or completion consumed credits, how many tokens were used, and the cost per operation.

---

## Reseller access

If a Reseller manages your account, you will see their access listed in Account Settings. You can **revoke Reseller access** at any time from this page.

When a Reseller is logged into your account, the header bar turns black.
