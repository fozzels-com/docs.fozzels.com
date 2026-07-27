---
id: '103000406293'
title: '2.9.1 - CSV Integratie in Fozzels: Wat Het Is en Hoe Het In Te Stellen'
sidebar_position: 20
slug: >-
  /integration-connectivity/csv-integration-in-fozzels-what-it-is-and-how-to-set-it-up
description: >-
  Wat Is CSV Integratie? CSV integratie stelt u in staat om uw productcatalogus
  naar Fozzels te verbinden met behulp van een standaard CSV-bestand. Als uw
  platform geen d
---

## Wat Is CSV Integratie?

CSV integratie stelt u in staat om uw productcatalogus naar Fozzels te verbinden met behulp van een standaard CSV-bestand. Als uw platform geen directe integratie met Fozzels heeft — geen probleem: exporteer uw gegevens eenvoudig als CSV en upload deze. Fozzels leest uw producten en hun attributen en geeft u toegang tot het volledige scala aan platformfuncties.

## Stap 1 — Maak een Nieuwe Integratie

Klik in het bovenste navigatiemenu op **Integrations** en klik vervolgens op de knop **\+ Create** in de rechterbovenhoek.

## Stap 2 — Kies Het Integratietypen

U ziet een lijst met beschikbare platforms: Akeneo, Shopify, Magento2, WooCommerce en anderen. Selecteer **Raw File** om via bestand aan te sluiten.

## Stap 3 — Configureer de Integratie

Er wordt een formulier geopend met drie stappen: **Configuration → Websites & Stores → Attributes**.

### Vereiste Velden

Voordat u uw CSV-bestand uploadt, vult u de drie verplichte velden in:

-   **Name** — een naam voor de integratie (bijv. `Mijn Product Catalogus CSV`)
-   **URL** — een link naar de bron (indien van toepassing)
-   **SKU column** — de exacte naam van de kolom in uw bestand die elk product uniek aangeeft (bijv. `sku`, `product_id`, `article`)

Klik vervolgens op **Save**. Pas na het opslaan wordt het CSV upload gedeelte actief.

> ? **Waarom dit?** Het systeem moet de naam van de SKU-kolom kennen voordat het bestand wordt gelezen — dit is vereist voor correcte gegevensverwerking. Sla uw instellingen eerst op en upload vervolgens het bestand.

### Formatopties

Parameter

Standaardwaarde

Beschrijving

Format

CSV

Bestandsindeling

Delimiter

Komma (,)

Kolomscheidingsteken

Enclosure character

`"`

Waardeteken

Encoding

UTF-8

Bestandscodering

First row is header

Yes

Of de eerste rij kolomkoppen bevat

SKU column

—

Naam van de kolom die elk product uniek aangeeft

### Globale Pull Planning

Dit bepaalt de tijd voor automatische synchronisatie. De standaard is `03:30`. Als u een ander schema voor een specifieke winkel nodig hebt, kunt u dit overschrijven in de instellingen van die winkel.

> ? Activeer de toggle **Active** in de rechterbovenhoek van het formulier om de integratie te activeren. Zonder dit wordt geen synchronisatie uitgevoerd.

## Stap 4 — Upload het CSV-bestand

Na het opslaan wordt het uploadgedeelte actief. U kunt uw bestand op twee manieren uploaden:

-   **Drag & drop** — sleep uw CSV rechtstreeks naar de uploadzone
-   **Upload** — klik op de blauwe knop **Upload** en selecteer een bestand van uw computer

Zodra het bestand is geüpload, worden de bestandsnaam en grootte onder de drag & drop zone weergegeven — dit bevestigt dat het bestand is toegevoegd.

> ? Wanneer het bestand wordt gelezen, gebruikt het systeem de formatinstellingen die u eerder hebt gedefinieerd: delimiter, codering en enclosure teken.

Klik nadat u het bestand hebt geüpload opnieuw op **Save** — het systeem verplaatst u automatisch naar het tabblad **Websites & Stores**.

## Stap 5 — Websites & Stores

Klik op de knop **Pull Websites and Stores** — het systeem maakt een record voor uw virtuele website en winkel. Dit is de standaardbenadering in Fozzels: zelfs bij het uploaden van een bestand gebruikt het platform de universele website → store structuur.

Zodra de record in de tabel verschijnt, **activeer de website en winkel** met behulp van de toggles in de kolom **Status**.

Wanneer beide actief zijn, wordt de knop **Pull products** beschikbaar. Klik erop om te beginnen met het importeren van producten uit uw CSV-bestand in de Fozzels catalogus.

> ? De tabel toont ook de **Pull schedule** — de synchronisatietijd die u in Stap 3 hebt ingesteld. U kunt deze per winkel overschrijven indien nodig.

## Stap 6 — Geïmporteerde Producten Bekijken

Zodra de pull voltooid is (de voortgangsbalk bereikt 100%), klikt u op het pictogram **View products** in de kolom Actions om de productcatalogus voor deze integratie te openen.

### Hoe gegevens zijn georganiseerd:

-   Elke **rij** uit de CSV wordt een afzonderlijk product
-   Elke **kolom** uit de CSV wordt een product attribuut

### Kolomzichtbaarheid Beheren

Niet alle attributen worden standaard weergegeven. Om te kiezen welke kolommen moeten worden weergegeven, klikt u op **Column visibility** in de rechterbovenhoek van de tabel en markeerd u de attributen die u nodig hebt.

### Producten Filteren

Twee filteropties zijn beschikbaar:

-   **Inline filters** — velden rechtstreeks onder kolomkoppen voor snelle zoeking
-   **Advanced filter** — flexibele EN/OF voorwaardelogica voor complexe query's

### Bulkacties

Nadat u de benodigde producten hebt geselecteerd, is de volledige Fozzels toolkit beschikbaar: producten groeperen, productsets maken en Content Flow, Image Flow of Video Flow starten op basis van uw selectie.

> ? Op deze manier wordt uw CSV-bestand een volledig functionele gegevensbron in Fozzels — met alle tools van het platform tot uw beschikking.

## Stap 7 — Attributen Voorbereiden Voordat U Een Flow Maakt

Voordat u een Content Flow maakt, zorgt u ervoor dat het doelkenmerk correct is geconfigureerd. Ga naar het tabblad **Attributes** van uw integratie en klik op het pictogram Bewerken (potlood) naast het attribuut dat u wilt gebruiken:

-   **Mutable** — dit moet ingeschakeld zijn. Zonder dit kan Fozzels gegenereerde content niet naar dit veld schrijven en verschijnt het attribuut niet in het dropdown menu wanneer u een Flow maakt.
-   **Allow HTML** — schakel dit in als u content met HTML-opmaak wilt genereren (bijv. beschrijvingen met `<p>`, `<ul>` tags, enz.).

> ? Meer informatie over attributen, Data Density en aangepaste velden vindt u in ons artikel: [Attribute Quality Analysis](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

## Stap 8 — Een Content Flow Maken

Om content op basis van uw geïmporteerde producten te genereren, moet u een **Content Flow** maken. U kunt dit op twee manieren doen:

**Optie 1 — via het Content Flows menu:** Ga naar **Content Flows** in het bovenste menu en klik op **\+ Create**.

**Optie 2 — rechtstreeks vanuit de catalogus:** Selecteer de producten die u nodig hebt (of alle) → open het dropdown menu **Actions** → selecteer **Create a new Content Flow**.

Voer in het creatieformulier een **Name** in en selecteer het **Attribute** — de kolom waarvoor content gegenereerd zal worden.

De rest van het proces is standaard en bestaat uit vier stappen:

**Stap 1 — New Flow:** naam en doelkenmerk.

**Stap 2 — AI Configuration:** kies een AI-provider (OpenAI, Google Gemini, enz.), model, tekststijl en toon, en tokenlimiet.

**Stap 3 — Flow Selection & Prompt:** activeer de flow, stel productfiltering in en schrijf uw prompt. Gebruik attributen met een hoge Data Density score voor de beste resultaten. Lees meer in ons artikel: [Prompt Creation & Filtering](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor).

**Stap 4 — Automation:** stel het aantal producten per run in, configureer de schema en lanceer via **Run Now** of **Plan & Close**.

> ? Bent u nieuw in Content Flows? Wij raden aan het volgende te lezen: [Flow Definition and Content Types](/content-creation-flows/flow-definition-and-content-types-text-image-video) en [Creating a New Content Flow](/content-creation-flows/creating-a-new-content-flow-and-initial-settings).

## Stap 9 — De Resultaten Krijgen

In tegenstelling tot andere integraties (Shopify, Magento, enz.) **werkt de knop "Save & Sync" niet voor CSV** — er is geen directe verbinding met een winkel om gegevens terug te pushen. In plaats daarvan worden resultaten handmatig via export gedownload.

### Hoe Gegenereerde Content Exporteren

1.  Ga naar de **Batch List** van uw flow
2.  Selecteer de records die u nodig hebt via **Actions → Select All** (of handmatig)
3.  Kies in het dropdown menu **Actions** de optie **Export as CSV**
4.  Bevestig in het pop-up door op **Start Export** te klikken
5.  Het systeem staat het bestand in de wachtrij — u ontvangt een bericht wanneer het klaar is

### Waar u het Bestand Downloadt

Ga naar **Dashboard → Export / Generated Data**. Deze pagina toont een tabel met alle gegenereerde bestanden met de status **Available**. Zoek uw bestand en klik op de knop **ZIP** om het te downloaden.

> ⚠️ **Het bestand is slechts 24 uur beschikbaar** vanaf het moment dat het is gemaakt. Zorg ervoor dat u het downloadt voordat het vervalt.

## Nuttige Links

-   [Attribute Quality Analysis. Data Density. Custom Attributes](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes)
-   [Flow Definition and Content Types (Text, Image, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)
-   [Creating a New Content Flow and Initial Settings](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Prompt Creation & Filtering. Drag & Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)
