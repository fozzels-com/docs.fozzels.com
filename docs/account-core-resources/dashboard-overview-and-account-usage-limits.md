---
title: Dashboard Overview and Account Usage Limits
sidebar_position: 9
slug: /account-core-resources/dashboard-overview-and-account-usage-limits
description: >-
  The Dashboard is the landing page of Fozzels and gives you a real-time
  overview of your account usage — integrations, stores, Flows and completions
  against your plan quotas.
---

The Dashboard is the landing page of Fozzels. It gives you a real-time overview of your account usage.

Go to [Dashboard](https://app.fozzels.com/dashboard)

---

## Statistics bar

The top of the page shows 6 key metrics. Each shows **current count / plan quota**:

| Stat | What it counts |
|------|---------------|
| **Integrations** | Total integrations created (active or not) |
| **Websites** | Activated websites across all integrations |
| **Stores** | Activated stores across all integrations |
| **Flows** | Active Content Flows (archived Flows don't count) |
| **Completions today** | AI-generated content items generated so far today (resets at midnight UTC) |
| **Completions this month** | AI-generated content items generated this calendar month |

> A stat shown in **red or orange** means you're at or near your plan's quota limit.

---

## Two separate limits to understand

Fozzels has **two independent billing systems** that are easy to confuse:

### 1. Plan quotas (subscription)

Your subscription plan sets hard limits on:

- Number of integrations, websites, stores, and active Flows you can have
- Number of completions per day and per month

These are shown in the Dashboard stats bar. When a quota is hit, the action is **blocked** until you upgrade.

→ Manage at [Plans](https://app.fozzels.com/user/settings/plans)

### 2. Credit balance (pay-per-use)

Each time AI generates content, it costs credits from your balance.

- Credits are separate from your subscription — you can have a plan but zero credits
- When balance hits zero, generation is blocked even if your plan quota allows it
- Cost: approx. €0.06 per 750 words of AI output
- Top up manually or configure auto-charge

→ Manage at [Payments](https://app.fozzels.com/user/settings/payments)

**Both limits must be satisfied** for generation to work: you need plan quota remaining AND a positive credit balance.

---

## Upgrade Plan button

Visible when you are not on the Unlimited plan. Clicking it takes you directly to [Plans](https://app.fozzels.com/user/settings/plans) to upgrade.

---

## Analytics chart

Shows content generation activity over time — how many completions were created per day. Use it to:

- Spot spikes in usage
- See if your Flows are running as expected
- Check if generation has stopped unexpectedly

---

## Common dashboard questions

**"Completions today" is 0 even though I ran Flows**

- Check that your Flows are set to **Active**
- Check that your Flow ran today (generation is scheduled — trigger a manual run to test)
- Check your credit balance at [Payments](https://app.fozzels.com/user/settings/payments) — if it's zero, generation is blocked

**Stats aren't updating**

- The dashboard refreshes on page load; hard-refresh the page (Ctrl+F5 / Cmd+Shift+R)

**I'm at my plan limit**

- Upgrade your plan at [Plans](https://app.fozzels.com/user/settings/plans)
- Or deactivate unused stores / archive unused Flows to free up quota

**I can't create more Flows**

- Either you've hit the active Flow quota, or you're on a plan that limits Flow count
- Check your plan limits at [Plans](https://app.fozzels.com/user/settings/plans)

**Completions quota is used up but I still have credits**

- Plan quotas and credits are separate — the plan quota takes priority
- You must upgrade your plan to generate more content this month/day

**What's the difference between "Completions today" and "Completions this month"?**

- "Today" resets every midnight UTC; "this month" resets on the 1st of each month
- Some plans limit both (e.g. 100/day and 3,000/month) — whichever hits first blocks generation
