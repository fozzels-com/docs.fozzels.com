---
id: '103000367846'
title: '1.5. Bronnen. Promptsjablonen: Opgeslagen sjablonen zoeken en gebruiken.'
sidebar_position: 8
slug: >-
  /account-core-resources/resources-prompt-templates-locating-and-using-saved-templates
description: >-
  Promptsjablonen zijn herbruikbare, vooraf geconfigureerde tekstmodellen die
  als invoer voor de AI worden gebruikt om specifieke soorten productinhoud te
  genereren. Deze sjablonen zijn geconfigureerd
---

Promptsjablonen zijn herbruikbare, vooraf geconfigureerde tekstmodellen die als invoer voor de AI worden gebruikt om specifieke soorten productinhoud te genereren. Deze sjablonen zijn onafhankelijk van de inhoudsgenereringsflows geconfigureerd en vormen een kernonderdeel van de automatiecode. Ze worden doorgaans gebruikt voor het genereren van productbeschrijvingen, metatitels of metabeschrijvingen.

Navigeer naar **Instellingen → Promptsjablonen** om het beheergebied te openen.

Tabel voor sjabloonbeheer

De hoofdtabel geeft een overzicht van alle gemaakte sjablonen.
Elke invoer bevat: de unieke identifier (ID), het type sjabloonregel (Soort, momenteel alleen Productkenmerken beschikbaar), het productattribuut waaraan de prompt is gekoppeld (Kenmerk, bijvoorbeeld beschrijvingen, metatitels), de naam van de sjabloon (Naam), de werkelijke prompttekst en een Gedeeld pictogram dat aangeeft of de sjabloon zichtbaar is voor en wordt gedeeld met andere gebruikers in uw project.

Beschikbare acties zijn: Weergeven, Bewerken en Verwijderen.
![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/5LRXIMOwIb-G8vgFQIGjxXsovlESPjZRYA.png)

Sjablonen zoeken en filteren

U kunt snel specifieke sjablonen vinden met behulp van het **Zoek**veld in de rechterbovenhoek.
Daarnaast kunnen de kolommen ID, Soort, Kenmerk en Naam worden gesorteerd.
Klik op een kolomkop om de sorteerorde in of uit te schakelen (oplopend of aflopend).
Gebruik de pagineringselementen onderaan de tabel om te navigeren door meerdere pagina's als uw sjabloonlijst uitgebreid is.

De volledige promptinhoud weergeven

Klik op een willekeurige cel in de kolom **Prompt** om een modaalvenster te openen met de volledige, gedetailleerde tekst van de prompt. Dit modaalvenster bevat:

-   De knop HTML tonen, die het voorbeeld van de prompttekst met toegepaste HTML-opmaak in of uit schakelt.

-   De knop Naar klembord kopiëren, die de volledige prompttekst kopieert voor externe gebruik of bewerking.

-   De knop Sluiten, die het modaalvenster sluit.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/_NS3hQVxBRRo9EBlkjZjD9wrjEloxWjA3A.png)

Een nieuwe promptsjabloon maken

Klik op de knop **Nieuwe promptsjabloon** boven aan de pagina om een nieuwe sjabloon te maken. Dit opent een modaalvenster met de vereiste formuliervelden:

1.  **Kenmerk** (Vereist): Selecteer het specifieke productinhoudsveld (bijvoorbeeld Beschrijving, Metatitel) waarvoor deze prompt is ontworpen. Dit koppelt de prompt aan het juiste doelinhoudsveld.

2.  **Naam** (Vereist): Voer een duidelijke, beschrijvende naam in. Best practice is om de taal en het doel op te nemen (bijvoorbeeld NL: Korte beschrijving voor schoenen) voor gemakkelijke identificatie.

3.  **Soort** (Vereist): Selecteer het regelsoort. Momenteel is alleen Productkenmerken beschikbaar.

4.  **Sjabloon** (Vereist): Voer hier de kerninhoud van de prompt in. Deze tekst, gecombineerd met dynamische variabelen (bijvoorbeeld $merk, indien $kleur), vormt de instructie die naar de AI voor generatie wordt verzonden.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/MqPK3HDwXl7cBuruSGQhTcI2GMYLzXfHOQ.png)

Promptlogica en best practices

-   **Dynamische variabelen**: Prompttekst moet voorwaardelijke logica en dynamische variabelen gebruiken (bijvoorbeeld if tags, {{vendor}}) om productspecifieke gegevens te trekken, niet hardcoded.

-   **Styling**: Zorg ervoor dat de taal- en stijlvereisten (bijvoorbeeld toon, gebruik van opsommingstekens, HTML-formaat) bij uw use case passen.

-   **Inhoudsveiligheid**: De prompt moet goed opgesteld en respectvol zijn om mogelijke afwijzing door de AI-service (OpenAI) te voorkomen.
