---
title: Dashboard Overzicht en Accountgebruiksgrenzen
sidebar_position: 9
slug: /account-core-resources/dashboard-overview-and-account-usage-limits
description: >-
  Het Dashboard is de startpagina van Fozzels en geeft u een real-time overzicht
  van uw accountgebruik — integraties, winkels, Flows en voltooiingen tegen uw
  planquota's.
---

Het Dashboard is de startpagina van Fozzels. Het geeft u een real-time overzicht van uw accountgebruik.

Ga naar [Dashboard](https://app.fozzels.com/dashboard)

---

## Statistiekenbalk

De bovenkant van de pagina toont 6 belangrijke metrics. Elk toont **huIdige telling / planquota**:

| Statistiek | Wat het telt |
|------|---------------|
| **Integrations** | Totaal gemaakte integraties (actief of niet) |
| **Websites** | Geactiveerde websites over alle integraties heen |
| **Stores** | Geactiveerde winkels over alle integraties heen |
| **Flows** | Actieve Content Flows (gearchiveerde Flows tellen niet mee) |
| **Completions today** | AI-gegenereerde content items die vandaag tot nu toe zijn gegenereerd (reset om middernacht UTC) |
| **Completions this month** | AI-gegenereerde content items die in deze kalendermaand zijn gegenereerd |

> Een statistiek weergegeven in **rood of oranje** betekent dat u op of dicht bij uw planquotalimiet zit.

---

## Twee aparte limieten om te begrijpen

Fozzels heeft **twee onafhankelijke betalingssystemen** die gemakkelijk te verwarren zijn:

### 1. Planquota's (abonnement)

Uw abonnementsplan stelt harde limieten in op:

- Aantal integraties, websites, winkels en actieve Flows die u kunt hebben
- Aantal voltooiingen per dag en per maand

Deze worden weergegeven in de Dashboard statistiekenbalk. Wanneer een quota wordt bereikt, is de actie **geblokkeerd** totdat u upgrade.

→ Beheer op [Plans](https://app.fozzels.com/user/settings/plans)

### 2. Tegoedsaldo (pay-per-use)

Elke keer dat AI content genereert, kost het tegoed van uw saldo.

- Tegoed is apart van uw abonnement — u kunt een plan hebben maar nul tegoed
- Wanneer het saldo nul bereikt, is generatie geblokkeerd zelfs als uw planquota het toestaat
- Kosten: ongeveer €0,06 per 750 woorden AI-output
- Handmatig bijvullen of auto-laadoptie configureren

→ Beheer op [Payments](https://app.fozzels.com/user/settings/payments)

**Beide limieten moeten worden voldaan** voor generatie om te werken: u hebt planquota nodig **en** een positief tegoedsaldo.

---

## Knop Plan Upgrade

Zichtbaar wanneer u niet op het Unlimited plan bent. Als u erop klikt, gaat u rechtstreeks naar [Plans](https://app.fozzels.com/user/settings/plans) om te upgraden.

---

## Analyticsgrafiek

Toont content generatieactiviteit in de loop van de tijd — hoeveel voltooiingen per dag zijn gemaakt. Gebruik deze om:

- Pieken in gebruik op te spotten
- Te zien of uw Flows naar verwachting werken
- Te controleren of generatie onverwacht is gestopt

---

## Veelgestelde vragen over het Dashboard

**"Completions today" is 0 hoewel ik Flows heb uitgevoerd**

- Controleer of uw Flows zijn ingesteld op **Active**
- Controleer of uw Flow vandaag is uitgevoerd (generatie is gepland — trigger een handmatige run om te testen)
- Controleer uw tegoedsaldo op [Payments](https://app.fozzels.com/user/settings/payments) — als het nul is, is generatie geblokkerd

**Statistieken worden niet bijgewerkt**

- Het Dashboard vernieuwt zich bij pagina laden; harde vernieuw de pagina (Ctrl+F5 / Cmd+Shift+R)

**Ik zit op mijn plangrens**

- Upgrade uw plan op [Plans](https://app.fozzels.com/user/settings/plans)
- Of deactiveer ongebruikte winkels / archiveer ongebruikte Flows om quota vrij te maken

**Ik kan niet meer Flows maken**

- Ofwel hebt u het actieve Flow quota bereikt, ofwel zit u op een plan dat het Flow aantal beperkt
- Controleer uw planlimieten op [Plans](https://app.fozzels.com/user/settings/plans)

**Completions quota is opgebruikt maar ik heb nog tegoed**

- Planquota's en tegoed zijn apart — het planquota heeft voorrang
- U moet uw plan upgraden om meer content deze maand/dag te genereren

**Wat is het verschil tussen "Completions today" en "Completions this month"?**

- "Today" reset elke middernacht UTC; "this month" reset op de 1e van elke maand
- Sommige plans beperken beide (bijv. 100/dag en 3.000/maand) — welke het eerst wordt bereikt, blokkeert generatie
