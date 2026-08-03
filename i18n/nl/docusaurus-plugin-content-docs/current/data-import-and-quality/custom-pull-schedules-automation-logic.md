---
id: '103000385568'
title: 3.1  Aangepaste Pull-schema's en automatiseringslogica
sidebar_position: 1
slug: /data-import-and-quality/custom-pull-schedules-automation-logic
description: We hebben het Fozzels-platform bijgewerkt zodat het aansluit op uw lokale bedrijfsritme. U hebt nu volledige controle over wanneer de inhoudsupdatecyclus begint.
keywords:
- invoerprompt
- ophalen
---

We hebben het Fozzels-platform bijgewerkt zodat het aansluit op uw lokale bedrijfsritme. U hebt nu volledige controle over wanneer uw inhoudsupdatecyclus begint, waardoor u AI-bewerkingen kunt synchroniseren met uw voorraadupdates en servercapaciteit.

## Aangepaste Pull-schema's

U bent niet langer beperkt tot één systeemcyclus die eerder om **00:30 UTC** voor iedereen begon. Nu definieert u zelf de starttijd voor elke integratie of individuele winkel.

### 1\. Configuratieniveaus:

-   **Globaal integratieniveau:** Stel één schema in voor de hele integratie (geconfigureerd in het tabblad **Configuration**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/OIDrHQUvFDLOAW6VRq6bmDqVGmzw-Sx_WQ.png)

-   **Individueel winkelniveau:** Stel een uniek schema in voor een specifieke winkel (geconfigureerd in het tabblad **Websites & Stores** via de optie **"Overwrite On Store Level"**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/rzTnb5R6tAHqj6TuLjncrbuJn2jhIhf-A.png)

![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/4TXxigKSz9G6RrXZnbgqjQ0N7TTKYwiwMQ.png)

##
Hoe het werkt: de automatiseringskettingreactie

Het is belangrijk om te begrijpen dat het geplande Pull-moment de **trigger** is voor een heel reeks processen. Zodra de **Pull** uw gegevens met succes heeft geïmporteerd, voert het systeem automatisch de volgende stappen uit:

### Gegevensreis: van Pull naar Generatie (stap voor stap)

**Fase**

**Wat gebeurt**

**Resultaat**

**1\. Productpull**

Fozzels maakt via API verbinding met uw site en downloadt bijgewerkte gegevens.

Het systeem heeft een up-to-date lijst met producten en kenmerken.

**2\. Flow Sync**

Het systeem "zeeft" de catalogus door uw actieve Flow-filters.

Nieuwe producten worden aan de wachtrij toegevoegd; irrelevante worden verwijderd.

**3\. Kenmerk vernieuwen**

Waarden (prijs, categorie, aangepaste velden) worden bijgewerkt voor elk product in de Flow.

De AI ontvangt de meest recente context voor generatie.

**4\. AI-generatie**

De generatiewachtrij begint op basis van uw specifieke prompts.

Teksten, SEO-tags en vertalingen worden gemaakt.

**5\. Gegevensexport**

Voltooide inhoud wordt automatisch teruggestuurd naar uw site.

Uw klanten zien de bijgewerkte productpagina.

**Voorbeeld:** Als u uw pull-moment instelt op **17:00 (17:00 uur)**, begint de AI-generatie onmiddellijk na het importeren en controleren van gegevens (bijv. rond **17:20** of **17:45**), in plaats van tot het midden van de nacht te wachten.

## Gelokaliseerde interface: uw tijdzone instellen

Om het plannen intuïtief te maken en UTC-mentale wiskunde te elimineren, kunt u uw lokale tijdzone rechtstreeks in uw profiel instellen.

### Uw tijdzone configureren:

1.  Ga naar **Settings** > **Profile**.

2.  Zoek het veld **Timezone** en selecteer uw regio uit het vervolgkeuzemenu.

3.  **Cruciale:** Klik op de knop **SAVE** om de wijzigingen toe te passen.

### Waarom dit van belang is:

-   **Geen UTC-berekeningen:** Als u een pull om 17:00 in uw tijdzone plant, begint dit exact om 17:00 volgens uw lokale klok.

-   **Transparante logboeken:** Alle activiteitenlogboeken en generatiestatus worden weergegeven in uw lokale tijd, waardoor controle moeiteloos wordt.

## Belangrijkste voordelen

-   **Verhaalheid:** AI-generatie gebeurt onmiddellijk na het bijwerken van productgegevens op uw site.

-   **Serveroptimalisatie:** Verspreid pull-momenten voor verschillende winkels om te voorkomen dat uw API wordt overspoeld door gelijktijdige aanvragen.

-   **Voorspelbaarheid:** Weet precies wanneer uw nieuwe aangekomen producten door AI worden verwerkt en klaar zijn voor beoordeling.
