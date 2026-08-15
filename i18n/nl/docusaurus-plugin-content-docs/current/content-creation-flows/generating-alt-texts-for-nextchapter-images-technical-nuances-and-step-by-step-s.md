---
id: '103000410112'
title: '4.3.2.b Alt-teksten genereren voor NextChapter-afbeeldingen: technische nuances en stap-voor-stap instellen'
sidebar_position: 10
slug: /content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s
description: Omdat je de basis van het instellen van content flows (Product Content Flows) in Fozzels al kent, richt deze handleiding zich uitsluitend…
keywords:
- contentflow
- inhoudsstroom
---

Omdat je de basis van het instellen van content flows (Product Content Flows) in Fozzels al kent, richt deze handleiding zich uitsluitend op de specifieke kenmerken van de NextChapter-architectuur: werken met het systeemattribuut **product\_media\_gallery** en het optimaliseren van tokenkosten bij het batchgewijs verwerken van mediagalerijen.

## Stap 1. Schrijfrechten voor de mediagalerij configureren (verplichte voorwaarde)

Anders dan bij standaard tekstvelden (bijvoorbeeld productbeschrijving of naam) staan alt-teksten in NextChapter binnen de afbeeldingsgalerij en worden ze rechtstreeks naar het attribuut `product_media_gallery` geschreven. Standaard beschouwt Fozzels dit attribuut als Read-only en gebruikt het als markering om producten te filteren op de aanwezigheid van foto's.
Zo geef je het systeem toestemming om gegevens in dit veld te schrijven en bij te werken:

1.  Ga in het hoofdmenu naar **Integrations** → selecteer je actieve **NextChapter**-instantie.
2.  Open **Tab 3: Attributes.**
3.  Voer in het zoekveld `media` in. Zoek de rij met de code `product_media_gallery` (Media Gallery) en klik op de turquoise knop **\[Edit attribute\]**.
4.  Zoek in het modale venster, in de sectie Transform Data, de optie **Mutable** en vink het vakje aan (**\[v\] Mutable**).
5.  Klik rechtsonder op de blauwe knop **Save**.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/DgdusqsKuR07n_6ZVkUycVCUVVRc9SLNEw.png)![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/F371_zOBWTktWVS7poYzGt-L5es5KLOkXw.png)

## Stap 2. Flow initialiseren en attributen koppelen

1.  Ga naar de sectie **Content Flows** en klik op de knop **Create Flow** (of selecteer de gewenste producten direct in de catalogus en klik op **Actions → Create Flow**).

2.  **In Tab 1: New Flow** configureer je de omgevingsparameters:

    -   **Store / Integration:** Selecteer je NextChapter-instantie, de site-instellingen en de gewenste Store View uit de vervolgkeuzelijst.
    -   **Name:** Geef de flow een duidelijke technische naam.
    -   **Entity Type:** De waarde Product wordt automatisch ingesteld.
3.  **Target Attribute:** Klik op het veld voor attribuutselectie (`Attribute*`), voer `media` in en selecteer `Media Gallery`. Zo kan Fozzels de door AI gegenereerde strings veilig en rechtstreeks in het databaseschema van de NextChapter-galerij plaatsen.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/yEYZO7DIJN90tk-_rv6kZaE6AOCY_rSOWg.png)

## Stap 3. Het Vision-model en de scanmodus kiezen (Delta vs. Full Overwrite)

Selecteer in **Tab 2: AI Configuration** de provider en het model (bijvoorbeeld GPT- of Gemini-versies met Vision-ondersteuning voor beeldanalyse) en bepaal daarna de interactiemodus met je NextChapter-storefront:

-   **Delta-modus (selectievakje "Force regenerate ALT texts" UITGESCHAKELD):** Standaardscenario. De achtergrondrunner scant de NextChapter-catalogus en stuurt alleen verzoeken naar de AI voor afbeeldingen waarvan de alt-tekst op dat moment leeg is. Zo blijven je handmatige SEO-instellingen behouden en bespaar je API-credits.
-   **Full Overwrite-modus (selectievakje "Force regenerate ALT texts" INGESCHAKELD):** Scenario voor volledig herschrijven. De engine negeert de huidige metadata op de storefront volledig, wist de oude alt-teksten in de geselecteerde set en vervangt ze door nieuwe AI-strings.

> **Technische aanbeveling:** Laat de optie **Enable Image Resize** ingeschakeld. Als het afbeeldingsbestand in NextChapter groter is dan 2 MB of een resolutie van 2048 px overschrijdt, verkleint Fozzels het automatisch tot de standaardvereisten van Vision-modellen. Dat behoedt je flow voor generatiefouten (Failed generations) en verlaagt het tokenverbruik.

![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/MSso5mlNSv6s9RgpZywIS_fORd61TfNESw.png)

## Stap 4. De prompt opstellen (Prompt Engineering)

**In Tab 3: Flow Selection & Prompt** stel je de instructies voor het AI-model samen. Omdat het proces per bestand werkt (1 afbeelding = 1 generatie), moet je prompt visuele details combineren met de tekstuele context van het product.

1.  Leg in het veld **Prompt** de basale technische regels vast (bijvoorbeeld een lengtelimiet — de standaard is maximaal 125 tekens voor schermlezers — en een verbod op inleidende zinnen zoals "afbeelding ...").
2.  Gebruik het zijpaneel **Attributes** aan de rechterkant om dynamische NextChapter-tokens rechtstreeks in de tekst van de prompt te slepen (bijvoorbeeld `{name}`, `{color}`, `{material}`, `{brand}`).

### Promptsjablonen:

#### **Optie 1:** Voor e-commerce (kleding en schoenen)

> "Schrijf een beknopte, natuurlijke SEO-alt-tekst voor de toegankelijkheidstag van een webshop. Beschrijf de visuele details, de stijl en de snit van het product op de foto. Verwerk deze attributen op een natuurlijke manier als ze zichtbaar zijn: {color} {name} van {brand}, materiaal: {material}. Tekstlengte — maximaal 125 tekens. Vermijd het opstapelen van zoekwoorden en begin niet met zinnen als 'foto ...' of 'afbeelding ...'. Beschrijf alleen wat er daadwerkelijk te zien is."

#### **Optie 2:** Minimalistisch (productdetails)

> "Genereer een strakke, professionele alt-tag voor een schermlezer. Richt je uitsluitend op het ontwerp, de compositie en de duidelijk zichtbare visuele details van het product. Gebruik de metadata voor nauwkeurigheid: {brand} {name} in de kleur {color}. De beschrijving moet realistisch en feitelijk zijn en maximaal 120 tekens tellen. Geen marketingzinnen en geen 'foto ...' of 'afbeelding ...'. Geef alleen de kant-en-klare string terug."

## Stap 5. Verwerkingslimieten en de opbouw van de Batch List

**In Tab 4: Automation** berekent het veld "**Amount of products to create content for per day**" de verwerkingslimieten op basis van bovenliggende entiteiten (Products), niet op basis van losse afbeeldingsbestanden.
Omdat Fozzels elk media-item in de productgalerij analyseert, geldt: stel je een limiet in van **10 producten** die elk **5 afbeeldingen** hebben, dan voert het systeem **50 afzonderlijke betaalde Vision-generaties** uit.
Alle gegenereerde resultaten worden overzichtelijk gegroepeerd in de **Batch List** op product-SKU, zodat je nieuwe alt-teksten eenvoudig kunt controleren, bewerken of in bulk goedkeuren voordat ze naar de site worden geüpload.
