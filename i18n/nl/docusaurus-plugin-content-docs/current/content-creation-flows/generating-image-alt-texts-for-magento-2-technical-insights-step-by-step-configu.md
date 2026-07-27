---
id: '103000408207'
title: >-
  4.3.2.a Genereren van Alt-teksten voor afbeeldingen in Magento 2: Technische
  inzichten en stap-voor-stap configuratie
sidebar_position: 9
slug: >-
  /content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu
description: >-
  Omdat je al bekend bent met de basisprincipes van het configureren van
  Product Content Flows in Fozzels, richt deze technische handleiding zich
  uitsluitend op de unieke architectuur van Magento 2: interactie met het
  systeemattribuut `product_media_gallery` en optimalisatie van tokenverbruik
  tijdens bulkmedia-gallerijverwerkingslussen.
---

Omdat je al bekend bent met de basisprincipes van het configureren van Product Content Flows in Fozzels, richt deze technische handleiding zich uitsluitend op de unieke architectuur van Magento 2: interactie met het systeemattribuut `product_media_gallery` en optimalisatie van tokenverbruik tijdens bulkmedia-gallerijverwerkingslussen.

## Stap 1. Het configureren van schrijfmachtigingen voor de mediumgalerij (vereiste)

In tegenstelling tot standaardtekstvelden (bijv. productbeschrijvingen, namen) bevinden Alt-teksten in Magento zich in de afbeeldingsgalerij-infrastructuur en worden direct in het systeemattribuut `product_media_gallery` geschreven. Standaard behandelt Fozzels dit attribuut als alleen-lezen en gebruikt het uitsluitend als marker om de productcatalogus op afbeeldingsaanwezigheid te filteren.

Om het systeem toestemming te geven om gegevens in deze sleuf te overschrijven en in te voegen, moet u de status ervan in **Muteerbaar** wijzigen:

1.  Navigeer naar het hoofdmenu: **Integraties** → selecteer uw actieve **Magento 2**-instantie.

2.  Open **Tabblad 3: Attributen**.

3.  Typ `media` in de zoek-/filterbalk. Zoek de rij met code `product_media_gallery` (Mediumgalerij) en klik op de turquoise knop **\[Attribuut bewerken\]**.

4.  In de instellingenoverlays zoeken onder de sectie _Gegevens transformeren_ het selectievakje **Muteerbaar** en vink het aan (**\[v\] Muteerbaar**).

5.  Klik op de blauwe knop **Opslaan** in de rechterhoek.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/ryugiLjaej08TONBWZC6dvmgdeHvEKzJOA.png)
![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/vj3HVtE0gIyKK1lMzn0NeLCwxHle8IT1Cg.png)

## Stap 2. Stroominitialisering en attribuuttoewijzing

1.  Ga naar de sectie **Content Flows** en klik op de knop **Stroomcreëren** (of selecteer doelproducten rechtstreeks uit uw catalogusweergave en klik op **Acties → Stroomcreëren**).

2.  In **Tabblad 1: Nieuwe stroom** configureert u uw omgevingsparameters:

-   **Winkel / Integratie:** Selecteer uw specifieke Magento-instantie, websiteconfiguratie en doelwinkelweergave uit de vervolgkeuzelijsten.

-   **Naam:** Geef uw stroom een duidelijke, technische titel.

-   **Entiteitstype:** Dit wordt automatisch standaard ingesteld op `Product`.

3.  **Doelattribuut:** Klik in de vervolgkeuzelijst **Attribuut\*** selectie, typ `media` en selecteer het systeemattribuut **Mediumgalerij**. Dit brengt de aankomende door AI gegenereerde tekenreeksen veilig rechtstreeks naar het mediumgalerijedatabaseschema in plaats van standaardbeschrijvingsblokken.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/Btu-8xXR_jSHpiFqqxtTZJBUXcu0hyrmTQ.png)

## Stap 3. Het geselecteerde Vision-model en scanmodus (Delta vs. volledig overschrijven)

In **Tabblad 2: AI-configuratie** selecteert u uw onderliggende provider en model (bijv. GPT of Gemini-versies met multimodale Vision-mogelijkheden om afbeeldingselementen te analyseren) en bepaalt u hoe de uitvoeringsrunner met uw live Magento-winkelDatabase moet omgaan:

-   **Deltamodus (selectievakje "Alt-teksten regenereren forceren" is UITGESCHAKELD):** Het standaardscenario. De achtergrondrunner scant uw Magento-catalogus en vraagt AI-voltooiingen **alleen voor afbeeldingselementen waar het Alt-tekstveld momenteel leeg is**. Dit behoudt uw bestaande handmatige SEO-werk en bespaart uw API-krediet.

-   **Volledige overschrijvingsmodus (selectievakje "Alt-teksten regenereren forceren" is INGESCHAKELD):** Het uitgebreide herschrijfscenario. De engine negeert de huidige metagegevensstatussen op de storefront volledig, wist oude Alt-teksten binnen de geselecteerde batch en vervangt ze allemaal door nieuwe AI-gegenereerde tekenreeksen.

> ? **Technische aanbeveling:** Zorg dat het selectievakje **Afbeeldingsformaat inschakelen** is ingeschakeld. Als een afbeeldingsbestand in Magento groter is dan 2MB of de resolutie van 2048px overschrijdt, zal Fozzels het automatisch naar standaardinvoeromvang van visionmodellen verkleinen. Dit beschermt uw pipeline actief tegen nuttig fouten (Mislukte generaties) en optimaliseert tokenkrediet.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/cbKMN8kS6jIqV-wZJGv_TV9zC74UxTrCFg.png)

## Stap 4. Prompt-engineering

In **Tabblad 3: Stroomselectie en prompt** formuleert u de expliciete instructies voor het AI-model. Omdat de pijplijn in een asset-centric modus werkt (1 afbeeldingselement = 1 promptvoltooiing), moet uw prompt het visionmodel instrueren om visuele elementen met de tekstuele context van uw product samen te voegen.

1.  Typ in de werkruimte **Prompt** uw fundamentele technische regels (bijv. tekenlimiet – de industriestandaard is onder 125 tekens voor schermlezers – en een verbod op generieke inleidende stopfrasen zoals _"afbeelding van"_).

2.  Gebruik de zijbalk **Attributen** aan de rechterkant om dynamische Magento-tokens rechtstreeks in uw prompttekst in te zoeken en te slepen en neer te zetten (bijv. `{name}`, `{color}`, `{material}`, `{brand}`).

### **Promptsjablonen:**

> **Optie 1: E-commerce Fashion & Apparel Standard** `"Schrijf een beknopt, natuurlijk SEO Alt-tekstvak voor een e-commercewebsitotoegankelijkheidscode. Beschrijf de visuele details, stijl en snit van het item dat in de afbeelding wordt weergegeven. Integreer deze attributen op natuurlijke wijze als ze zichtbaar zijn: {color} {name} van {brand}, gemaakt van {material}. Houd de uitvoer onder de 125 tekens, vermijd strikt trefwoordstuffing en begin niet met frasen zoals 'foto van' of 'afbeelding van'. Beschrijf alleen wat werkelijk in de foto aanwezig is."`

> **Optie 2: Minimalistisch en productdetails gefocust** `"Genereer een schone, professionele Alt-tag voor een schermlezer. Concentreer je puur op het productontwerp, indeling en verschillende visuele kenmerken. Gebruik de verstrekte metagegevens om nauwkeurigheid te garanderen: {brand} {name} in {color}. Houd de beschrijving realistisch, feitelijk en onder 120 tekens. Vermijd marketingfluff en gebruik niet 'foto van' of 'afbeelding van'. Retourneer gewoon de beschrijvingstekenreeks."`

## Stap 5. Verwerkingsvolume-limieten en Batch List Layout

In **Tabblad 4: Automatisering** berekent het configuratieveld **"Aantal producten voor het maken van inhoud per dag"** verwerkingsdrempels op basis van parent Product-entiteiten, niet van afzonderlijke afbeeldingsbestanden. Omdat Fozzels elk afzonderlijk mediabestand in de galerij van een product evalueert, zal het instellen van een limiet op 10 producten waarbij elk 5 afbeeldingen bevat, resulteren in 50 verschillende, gefactureerde AI-visioncompleteringen. Echter, zelfs met deze verwerkingsstructuur, zullen alle gegenereerde resultaten netjes in uw **Batch List** worden georganiseerd, visueel gegroepeerd op product-SKU zodat u ze gemakkelijk kunt beoordelen, bewerken of massaal goedkeuren voordat u de metagegevens live pusht.
