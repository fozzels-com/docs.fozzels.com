---
id: '103000410190'
title: 2.10.1 Volledige integratie-instelling met Salesforce.
sidebar_position: 21
slug: /integration-connectivity/full-integration-setup-with-salesforce
description: Deze handleiding neemt je mee door het aanmaken van een nieuwe Salesforce Commerce Cloud-integratie, van de eerste instellingen tot het opslaan van je configuratie en het activeren van Websites &…
---

Deze handleiding neemt je mee door het aanmaken van een nieuwe Salesforce Commerce Cloud-integratie: van de eerste instellingen tot het opslaan van je configuratie, het activeren van Websites & Stores, het ophalen van productgegevens en het controleren van de attribuutkoppelingen. Je leert hoe je de vereiste verbindingsgegevens invult (Short Code, Organization ID, Client ID/Secret), hoe de Global Pull Schedule met UTC-tijd werkt, en wanneer het zinvol is om vertragingen voor verzoeken in te stellen.

## Stap 1: Naar het aanmaken van een integratie navigeren

1.  Ga in het zijmenu naar **Home → Integrations**.
2.  Klik op de knop **Create** (rechtsboven).
3.  Selecteer op het scherm **"Choose your integration"** het platform **Salesforce**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/IJA_dZ5zfXA48PaD8HMxsHD71ItRVgwANg.png)
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/sTmy2P9U7mD0ENp0NC-gg8Y0oT53ZtfzLg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/bbv7bi_E2qSTk1bDVEN706lCu7fETDnn1g.png)
Hiermee opent het formulier **Create New Integration**, dat uit drie stappen bestaat: **1\. Configuration → 2. Websites & Stores → 3. Attributes**.

## Stap 2: Het configuratieformulier invullen
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/_4n7-QBaGDhtz4yq_LpPLXF5t7s-sE-_vQ.png)

### Belangrijkste velden:

| Veld | Beschrijving |
| --- | --- |
| **Name**\* | Naam van de integratie — waaraan je hem herkent in de lijst met integraties |
| **URL**\* | Basis-URL van je Salesforce Commerce Cloud-instantie |

**Configuratieblok:**

| Veld | Beschrijving |
| --- | --- |
| **Short Code**\* | Short code van je Salesforce Commerce Cloud-instantie |
| **Organization ID**\* | Je Salesforce-organisatie-ID |
| **Client ID**\* | ID van de OAuth-client die je in Salesforce Account Manager hebt aangemaakt |
| **Client Secret**\* | Geheime sleutel van die OAuth-client |
| **Image CDN Base URL** _(optioneel)_ | Basis-URL van het CDN (DIS) waarmee productafbeeldingen worden gedownload. Voorbeeld: `https://exxe.ххххх.commercecloud.salesforce.com/dw/image/v2/XXXX-XXX` |

_Velden met een sterretje (\*) zijn verplicht._

## Stap 3: Global Pull Schedule

Met de schakelaar **Overwrite Global Pull Schedule** bepaal je wanneer de productsynchronisatie draait. Staat hij uit, dan geldt het standaard globale schema (`03:30`).

> ⚠️ **Belangrijk: de tijd wordt in UTC ingesteld**
>
> Het veld Global Pull Schedule gebruikt **UTC-tijd**, niet je lokale tijdzone.
>
> Dat is vooral van belang als je meerdere Stores in verschillende regio's hebt: een tijdstip dat voor de ene winkel buiten de piek valt (nacht), kan voor een andere precies in de drukste uren vallen. Een datapull tijdens piekuren geeft extra belasting op je site en kan die trager maken voor je klanten.
>
> **Aanbeveling:** bedienen je Stores verschillende tijdzones, vertrouw dan niet alleen op de Global Pull Schedule — overschrijf het schema per Store (`Overwrite Global Pull Schedule` in de instellingen van die Store) en kies een tijd die past bij het daadwerkelijke rustige moment van die winkel, omgerekend naar UTC.

## Stap 4: Delay Between Pages / Delay Between Requests

De velden **Delay between pages** en **Delay between requests** stellen een pauze in (in milliseconden, bereik 100–15000 ms) tussen respectievelijk resultaatpagina's en afzonderlijke API-verzoeken.

> ℹ️ **Tip:** deze velden zijn optioneel. Laat je ze leeg, dan geldt de standaardvertraging van het platform.
>
> We raden aan deze waarden bij het eerste opzetten van de integratie **niet meteen in te stellen**. Voer in plaats daarvan een paar datapulls uit met de standaardinstellingen en kijk hoe het gaat:
>
> -   Verlopen de pulls succesvol, dan is er geen verdere configuratie nodig.
> -   Treden er fouten op (bijvoorbeeld rate limiting vanuit Salesforce), ga dan terug naar de integratie-instellingen en verhoog de vertraging om de API te ontlasten.

## Stap 5: Opslaan

Zodra alle verplichte velden zijn ingevuld, klik je op **Save** om door te gaan naar de volgende stap: **Websites & Stores**.

## Stap 6: Websites & Stores

Na het klikken op **Save** ga je automatisch naar het tabblad **2\. Websites & Stores** van de integratie.

> ✅ _Je ziet een bevestiging: "Integration was created successfully. Please, do not forget to activate your Integration."_

### 1\. De integratie activeren

Voordat je je stores/websites kunt ophalen, zet je **Active** op ON (rechtsboven op de pagina, in de statusbalk van de integratie: Active / Authorized / REST API Connected).

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/Fn99DCFxArzsidpIraptWFwTO-BnqzkyTg.png)

### 2\. Websites en Stores ophalen

Klik op de knop **PULL WEBSITES AND STORES**. Hiermee wordt de verbinding met Salesforce geautoriseerd en worden je beschikbare Websites en Stores opgehaald.

> ✅ Als het gelukt is, zie je: "Integration status has been updated" en daarna "Your websites and stores was pulled from integration successfully". De indicatoren **Authorized** en **REST API Connected** worden groen (✓).

### 3\. Websites en Stores activeren

Na het ophalen zie je een tabel die is opgesplitst in **Websites** (Name, Code, Status) en **Stores** (Language, Status, Pull schedule, Products, Pull Progress, Actions).

Zet elke **Website** en elke **Store** één voor één op Active.

> ℹ️ **Let op:** een ster (⭐) naast de naam van een Website of Store geeft aan dat dit de **standaard (primaire)** is.

### 4\. Producten ophalen

Zodra een Store actief is, wordt de knop **Pull products** beschikbaar. Klik je erop, dan start het ophalen van de productgegevens.

> ℹ️ **Let op:** het starten van een pull voert in werkelijkheid **4 opeenvolgende stappen** uit, die als afzonderlijke voortgangsbalken verschijnen wanneer je Pull Progress uitklapt (via het pijltje naast de knop):
>
> 1.  **Product Attribute**
> 2.  **Category Attribute**
> 3.  **Category**
> 4.  **Product**
>
> Elke stap heeft een eigen voortgangsbalk en een **Refresh**-pictogram om precies die stap opnieuw uit te voeren. Ook heeft elke stap een **View logs**-pictogram waarmee je het gedetailleerde logboek van die pull-stap bekijkt.
>
> Daarnaast hebben de stappen **Category** en **Product** een **View in catalog**-pictogram, waarmee je direct naar de opgehaalde categorieën/producten in je catalogus springt.

Zodra alle 4 de stappen 100% bereiken, toont de hoofdbalk **Pull Progress** de waarde **"Product - 100%"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/AXWOgFul8iBQWgLq0jQ5k5HmCHYYds3MQQ.png)

## Stap 7: Attributes

De derde en laatste stap, **Attributes**, toont de lijst met attributen die uit je Salesforce-catalogus zijn opgehaald, inclusief hun koppelingsstatus.

### Schakelaar voor de attribuutmodus

Standaard toont de tabel **Product**-attributen. Boven de tabel staat een schakelaar met drie opties:

-   **Product**
-   **Category**
-   **Brand**

> ⚠️ **Let op:** voor deze integratie worden **Brand**-attributen **nog niet ondersteund** — ook al verschijnt de optie in de schakelaar.

Wisselen tussen de modi verandert welke set attributen wordt getoond. Schakel je bijvoorbeeld naar **Category**, dan zie je categoriespecifieke attributen zoals `Category ID`, `Description`, `Name`, `Page Description`, `Page Keywords`, `Page Title`.

### Tabelkolommen:

| Kolom | Beschrijving |
| --- | --- |
| **Name** | Attribuut-ID en label (bijv. `35759: Brand`, `35777: Category ID`) |
| **Code** | De technische attribuutcode uit Salesforce (bijv. `brand`, `ean`, `origin_category_id`) |
| **Scope** | Bereik van het attribuut (indien van toepassing) |
| **Generic Mapping** | Of het attribuut is gekoppeld aan een generiek/systeemveld |
| **Allow HTML** | Of HTML-inhoud is toegestaan voor dit attribuut (✓/—) |
| **Data Density Percent** | Percentage producten/categorieën dat daadwerkelijk een waarde heeft voor dit attribuut — handig om dun gevulde velden te herkennen (bijv. `Page Keywords` op 26%, `Category ID` op 100%) |
| **Example data** | Een voorbeeldwaarde uit een echt record (product of categorie, afhankelijk van de modus) |
| **Active** | Of het attribuut momenteel actief/in gebruik is (✓) |
| **Actions** | Bewerkpictogram (✏️) om de attribuutkoppeling te configureren |

### Opties in de werkbalk:

-   Vervolgkeuzemenu **Actions** — bulkacties voor geselecteerde attributen
-   **Store-selector** (bijv. Mystore`: en_us (en_US)`) — kies uit welke Store voorbeeldgegevens worden gehaald
-   **Get random example data** — zodra je een Store hebt gekozen, vult dit de kolom **Example data** met een verse, willekeurig gekozen voorbeeldwaarde per attribuut — handig om de koppeling te controleren
-   **Column visibility** — tabelkolommen tonen of verbergen
-   **New Attribute** (rechtsboven) — handmatig een aangepast attribuut toevoegen dat niet in de standaardlijst staat

> ℹ️ **Let op:** de standaard getoonde attributen zijn de **basisset** die out of the box wordt meegeleverd (bijv. Brand, EAN, Long Description, Price in de Product-modus; Category ID, Name, Description in de Category-modus). Bevat je Salesforce-catalogus **aangepaste attributen**, gebruik dan de knop **New Attribute** om ze handmatig toe te voegen en te koppelen.

## Stap 8: Een attribuut bewerken

Klik je op het pictogram ✏️ **Edit attribute** in de kolom Actions, dan opent de pop-up **Edit attribute** met alle details van dat attribuut — sommige velden zijn bewerkbaar, andere zijn alleen-lezen systeemwaarden.

### Velden:

| Veld | Beschrijving |
| --- | --- |
| **Entity Type** | Of het attribuut hoort bij **Product**, **Category** of **Brand** _(alleen-lezen)_ |
| **Name (Origin Attribute Name on Integration)** | De weergavenaam van het attribuut zoals die uit Salesforce komt (bijv. `Long Description`) |
| **Code** | De interne attribuutcode (bijv. `longDescription`) |
| **Origin Attribute ID** | De ID van het attribuut aan de kant van de bronintegratie (indien gedefinieerd) |
| **Origin Attribute Code** | De code van het attribuut zoals die aan de Salesforce-kant bestaat (bijv. `longDescription`) |
| **Frontend input** | Het invoertype waarmee dit veld wordt weergegeven/bewerkt (bijv. `Textarea`) |
| **Frontend Field Display With Widget** | Optionele widget om dit veld in de frontend weer te geven |
| **Generic Mapping** ℹ️ | Koppelt dit attribuut, indien van toepassing, aan een generiek/systeemveld |
| **Transform Data** | Geavanceerd: maakt **code-uitvoering tijdens runtime** mogelijk om de binnenkomende gegevens te transformeren voordat ze worden opgeslagen _(⚠️ gemarkeerd met een waarschuwing — voor geavanceerd/technisch gebruik)_ |

### Selectievakjes:

| Optie | Beschrijving |
| --- | --- |
| **Allow HTML** | Of HTML-inhoud is toegestaan in dit veld |
| **Enabled** | Of het attribuut actief en in gebruik is |
| **Filterable** | Of dit attribuut als filter kan worden gebruikt (bijv. in de catalogusnavigatie) |
| **Mutable** ℹ️ | Of de waarde na de eerste pull nog gewijzigd/overschreven kan worden |
| **Inheritable** ℹ️ | Of de waarde wordt overgeërfd (bijv. van een bovenliggende categorie of de standaardwinkel) |

### Lokalisatie

Daaronder kun je per **Website** (bijv. `Mystore`) en per actieve **locale** (bijv. `en_us (en_US)`) rechtstreeks een **gelokaliseerde waarde** voor dit attribuut invoeren of bewerken — bijvoorbeeld om de tekst van `Long Description` voor die specifieke website/locale te overschrijven.

Klik op **Save** om de wijzigingen door te voeren, of op **Cancel** om ze te verwerpen.

> ⚠️ **Waarschuwing:** het veld **Transform Data** maakt code-uitvoering tijdens runtime mogelijk — dit is een geavanceerde functie. Foutieve code kan hier de gegevensverwerking voor dit attribuut kapotmaken. Gebruik het alleen als je begrijpt welke transformatielogica nodig is, of houd bij twijfel een contactpersoon bij het supportteam achter de hand.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dXfx5OPU1hiT51CXn8LiDQwH-TEXGJXdVg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iV0xwN-jnstAKKgixyaCk_xrX_YowzggDg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dFxEvhIpzZghLVLLDiYbGvsGjZphndAgYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/N4ix6-rdWoomYb4sDO8JzYCvCdyhKxL3Cg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iSFTjf50J_sPVCyMi1T5KeoayFI8zi9FHg.png)

Op dit punt is de Salesforce-integratie zelf volledig geconfigureerd: geautoriseerd, verbonden, met geactiveerde Websites/Stores en succesvol opgehaalde productgegevens.

De volgende stappen — het inrichten van **Catalogs** en het bouwen van de **Flow** — verlopen net als bij elk ander integratietype en worden behandeld in de algemene integratiedocumentatie, niet specifiek voor Salesforce.
