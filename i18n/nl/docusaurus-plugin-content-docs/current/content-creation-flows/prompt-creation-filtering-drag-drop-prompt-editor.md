---
id: '103000367983'
title: '4.3.2 Prompt instellen en gebruiken: de nieuwe prompteditor'
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  Zo schrijft u een Flow-prompt in de nieuwe editor: attributen en voorwaarden
  invoegen, attribuutopties instellen, snippets gebruiken, de live Preview
  controleren en hulp krijgen van de AI Prompt Assistant.
---

In het promptveld schrijft u de instructies die Fozzels voor elk product naar de AI stuurt. Met de nieuwe editor bouwt u de prompt op, voegt u productgegevens en voorwaarden in en controleert u het resultaat voor een echt product, allemaal op één scherm.

## Wat is er nieuw

Hebt u de vorige drag & drop-editor gebruikt? Dit zijn de belangrijkste wijzigingen:

| Onderdeel | Voorheen | Nu |
| --- | --- | --- |
| Attributen invoegen | Klikken of slepen vanuit de lijst | Klikken, slepen of `/` typen in de editor. Elk attribuut wordt ingevoegd als kant-en-klare voorwaarderegel |
| Voorwaarden | Een aparte lijst "Attributes (if filled)" | Elke voorwaarde is een blok dat tekst, attributen en andere voorwaarden kan bevatten (nesten) |
| Attribuutopties | Geen | Per attribuut: alleen tonen als gevuld, label verbergen, fallbackwaarde |
| Vulgraad van gegevens | Tooltip met een percentage | Gekleurde onderstreping bij elk attribuut, plus een tooltip met vulgraad en een voorbeeldwaarde |
| Preview | Pas na Save & Preview | Live preview naast de editor, gesynchroniseerd met uw cursor en scrollpositie |
| Herbruikbare inhoud | Alleen volledige promptsjablonen | Snippets: Attribute list, Category list, Integration connector en uw eigen herbruikbare blokken |
| Attributen per Flow | Eén | Het hoofdattribuut plus maximaal 12 extra attributen |
| Editorfuncties | Geen | Ongedaan maken/opnieuw, tekstgrootte, zoeken, volledig scherm, preview en snippets tonen/verbergen |

**Overstappen van de oude editor.** U hoeft niets te migreren. Bestaande Flows blijven werken en alle prompts en opgeslagen sjablonen zijn automatisch omgezet naar het nieuwe formaat. U kunt ook een prompt in het oude formaat plakken; de editor zet die dan om.

## 1. De plaats van de prompt in een Flow

U schrijft de prompt in stap 3 van een Flow, **Flow Selection & Prompt**. Op dat moment kent de Flow al de winkel, het doelattribuut en de AI-instellingen.

1. **Nieuwe Flow.** Ga naar **Flows → Create**.

   ![Pagina Flows met de knop Create](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/01-flows-page-with-the-create-button.png)

   Selecteer de integratie, website en winkel (taal), voer een naam in en kies het entiteitstype: Product of Category.

   ![Create New Product Flow: het entiteitstype kiezen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/02-create-flow-choosing-the-entity-type.png)

   Kies daarna het attribuut waarvoor u content wilt genereren en klik op **Save**.

   ![Create New Product Flow: het attribuut kiezen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/03-create-flow-choosing-the-attribute.png)

2. **AI Configuration.** Kies het AI-model en optionele functies zoals webzoeken, gebruik van afbeeldingen en het verkleinen van afbeeldingen. Zie [4.2.1 AI-configuratie](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features).

3. **Flow Selection & Prompt.** Gebruik **Filter & Select Products** om te kiezen voor welke producten de Flow content genereert. Stelt u geen voorwaarden in, dan worden alle producten gebruikt. Schrijf vervolgens de prompt in het onderdeel **Prompt** daaronder.

   ![Stap Flow Selection & Prompt met een lege prompteditor](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/04-flow-selection-prompt-step-with-an.png)

De productselectie die u hier maakt, is ook de selectie die de Preview gebruikt (zie sectie 8).

### Eén Flow, meerdere attributen

Een Flow kan het hoofdattribuut vullen plus maximaal 12 extra attributen, in totaal 13. Ze worden allemaal samen gegenereerd in één AI-verzoek per product. Productgegevens en afbeeldingen worden één keer verstuurd, waardoor het genereren sneller gaat en minder tokens kost dan met afzonderlijke Flows.

Zo voegt u een attribuut toe:

1. Ga in stap 3 naar **Additional attributes to fill**. De teller naast de titel laat zien hoeveel attributen u hebt toegevoegd, bijvoorbeeld **0 / 12**.
2. Kies een attribuut in de lijst **Choose attribute**.
3. Klik op **Add attribute**.

![Een extra attribuut kiezen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/05-choosing-an-additional-attribute.png)

Het attribuut verschijnt als eigen rij met naam en type, bijvoorbeeld **SEO Description · Text**. Zolang u nog geen instructie hebt geschreven, staat in de rij _No instruction yet_.

Beschrijf in **Instruction for this attribute** wat de AI voor dit attribuut moet maken. De instructie wordt met de hoofdprompt gecombineerd tot één verzoek. Het veld werkt hetzelfde als de hoofdeditor: typ `/` of gebruik het attributenpaneel ernaast om attributen en voorwaarden toe te voegen.

![Rij van een extra attribuut met het instructieveld](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/06-additional-attribute-row-with-its-instruction.png)

- Met het prullenbakpictogram verwijdert u het attribuut, met de pijl klapt u de rij in of uit.
- Het instructieveld heeft voorlopig geen Snippets-paneel. Snippets die u erin gebruikt, werken wel tijdens het genereren.
- Resultaten blijven per attribuut te beoordelen en te pushen.

Klik voor meer informatie op **User Guide: How multi-attribute flows work** rechtsboven in dit onderdeel.

## 2. Indeling van het onderdeel Prompt

Het onderdeel Prompt bestaat uit vier gebieden:

| Gebied | Positie | Waarvoor het dient |
| --- | --- | --- |
| Editor | Linksboven | De prompt schrijven en attributen, voorwaarden en snippets plaatsen |
| Preview | Rechtsboven | De uiteindelijke prompt voor één echt product bekijken |
| Attributes | Linksonder | Alle attributen van de geselecteerde winkel, met hun vulgraad |
| Snippets | Rechtsonder | Herbruikbare blokken zoals Attribute list en Category list |

De link **User Guide: Prompt Setup And Usage** rechtsboven opent dit artikel.

### Werkbalk van de editor

| Knop | Wat deze doet |
| --- | --- |
| Undo / Redo | Een bewerking terugdraaien of opnieuw uitvoeren. Met Undo herstelt u ook een blok dat u per ongeluk hebt verwijderd |
| A / A | De tekst in de editor kleiner of groter maken. Dit verandert alleen de weergave, niet de prompt |
| Search in prompt | Woorden of attributen zoeken in een lange prompt |
| Preview (oog) | Het Preview-paneel tonen of verbergen |
| Snippets (document) | Het Snippets-paneel tonen of verbergen |
| Maximize | De editor en het zijpaneel op volledig scherm openen |

![Knop Preview in de werkbalk](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/07-preview-button-in-the-toolbar.png)

Als de Preview verborgen is, schuift het attributenpaneel naar rechts en krijgt de editor meer ruimte.

![Indeling met verborgen Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/08-layout-with-the-preview-hidden.png)

![Knop Maximize](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/09-maximize-button.png)

![Knop Snippets en het Snippets-paneel](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/10-snippets-button-and-the-snippets-panel.png)

De editor accepteert platte tekst en standaard HTML-tags zoals `<h2>`, `<ul>` en `<strong>`. Zie [4.7.3 Toegestane HTML-tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation).

## 3. Attributen toevoegen

Een attribuut is een placeholder voor productgegevens, zoals titel, producttype of materiaal. In de editor is het een groene chip. In de uiteindelijke prompt wordt het vervangen door de waarde van het product.

U kunt een attribuut op drie manieren toevoegen:

- **Typ `/`** in de editor. Er opent een lijst met de naam en de technische sleutel van elk attribuut.

  ![Slash-menu met de lijst met attributen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/11-slash-menu-with-the-list-of.png)

  Typ verder om de lijst te filteren, bijvoorbeeld `/seo`, en kies dan het attribuut.

  ![Slash-menu gefilterd op "seo"](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/12-slash-menu-filtered-by-seo.png)

- **Klik** op een attribuut in het attributenpaneel. Het wordt ingevoegd op de plek van de cursor.
- **Sleep** een attribuut vanuit het attributenpaneel en zet het neer waar u het nodig hebt. Een lijn laat zien waar het terechtkomt.

  ![Neerzetlijn tijdens het slepen van een attribuut](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/13-drop-line-while-dragging-an-attribute.png)

Het ingevoegde attribuut verschijnt als voorwaarderegel met een label:

![Een voorwaarderegel voor SEO Title, naast de Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/14-a-condition-line-for-seo-title.png)

### Voorwaarderegel of inline attribuut

De editor houdt de prompt gestructureerd: elke voorwaarde krijgt een eigen regel. Waar u een attribuut plaatst, bepaalt dus wat het wordt.

| Waar u het invoegt | Resultaat | Voorbeeld |
| --- | --- | --- |
| Aan het begin van een regel (met `/`, een klik of door het vóór het label neer te zetten) | Een **voorwaarderegel**: een blok met een label en het attribuut | `if SEO Title` → _SEO Title: [SEO Title]_ |
| Binnen een regel, na het label (neerzetten tussen het label en een attribuut) | Een **inline attribuut** zonder eigen voorwaarde | _Media Gallery: Handle: [Handle] [Media Gallery]_ |

![Geneste voorwaarderegel (Status) en een inline attribuut (Handle)](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/15-nested-condition-line-status-and-an.png)

Het label, zoals _SEO Title:_, wordt automatisch toegevoegd. Het is gewone tekst, dus u kunt het aanpassen.

U kunt hetzelfde attribuut zo vaak gebruiken als u wilt.

## 4. Voorwaarden (if-blokken)

Een voorwaarde is een gestippeld blok met een gele kop, bijvoorbeeld **if SEO Title**. Alles in het blok komt alleen in de prompt als het product een waarde voor dat attribuut heeft. Is de waarde leeg, dan wordt het hele blok overgeslagen.

Zo blijft de prompt van elk product overzichtelijk. Een regel als _SEO Title:_ verschijnt nooit zonder waarde erachter.

**Voorbeeld.** De prompt bevat `if SEO Title`, `if Created At` en `if Tags` (genest in `if Created At`). Het voorbeeldproduct heeft geen SEO Title, dus de Preview toont alleen de regels voor Tags en Created At.

![Geneste voorwaarden en de bijbehorende Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/16-nested-conditions-and-the-matching-preview.png)

### Wat u in een voorwaarde kunt plaatsen

- Vrije tekst, vóór of na het attribuut
- Andere attributen, als inline attributen
- Andere voorwaarden (nesten). `if Tags` binnen `if Created At` betekent bijvoorbeeld dat de regel Tags alleen verschijnt als beide waarden gevuld zijn
- Snippets (zie sectie 7)

![Een voorwaarde naar een andere voorwaarde slepen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/17-dragging-a-condition-into-another-condition.png)

### Werken met voorwaarden

| Actie | Hoe |
| --- | --- |
| Een blok verplaatsen | Sleep het aan de greep ⠿ links ervan. U kunt het tussen andere regels of in een andere voorwaarde neerzetten. Regels zonder voorwaarde hebben dezelfde greep |
| Alleen de voorwaarde verwijderen | Klik op het tandwiel in de gele kop en kies **Always show (remove condition)**. De inhoud blijft staan en wordt altijd meegenomen |
| Het blok verwijderen | Klik op de **x** in de gele kop (**Delete block**) |
| Het voorbeeldproduct controleren | Beweeg de muis over de gele kop. Als niet aan de voorwaarde wordt voldaan voor het product in de Preview, ziet u **No output for this sample product** |

![Always show (remove condition) in het tandwielmenu](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/18-always-show-remove-condition-in-the.png)

![Delete block in de gele kop](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/19-delete-block-on-the-yellow-header.png)

![No output for this sample product](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/20-no-output-for-this-sample-product.png)

:::warning

**Delete block** verwijdert het hele blok met alles erin, inclusief geneste voorwaarden. Wilt u de inhoud behouden, gebruik dan **Always show**. Hebt u per ongeluk een blok verwijderd, klik dan op **Undo**.

:::

## 5. Attribuutopties

Klik op het kleine pijltje op een groene attribuutchip om de opties te openen.

![Menu met attribuutopties](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/21-attribute-options-menu.png)

| Optie | Wat deze doet |
| --- | --- |
| **Only show when filled** | Aan (aangevinkt): het attribuut werkt als voorwaarde en de regel wordt overgeslagen als de waarde leeg is. Uit: het is een gewoon attribuut dat altijd wordt meegenomen |
| **Hide label** | Stuurt alleen de waarde naar de AI, zonder het label ervoor |
| **Fallback value when empty** | Tekst die wordt gebruikt in plaats van de waarde als het product geen waarde voor dit attribuut heeft |
| **Remove** | Verwijdert het attribuut uit de prompt |

Bij een inline attribuut staat **Only show when filled** uit. Vink het aan om het attribuut in een voorwaarde om te zetten.

![Opties van een inline attribuut, met Only show when filled uit](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/22-options-of-an-inline-attribute-with.png)

### Een fallbackwaarde gebruiken

Een fallbackwaarde werkt alleen als **Only show when filled** uit staat. Staat de voorwaarde aan, dan wordt een lege regel toch al overgeslagen en wordt de fallback genegeerd, ook als u die hebt ingevuld.

**Voorbeeld.** U zet **Only show when filled** uit voor SEO Description en voert een fallbackwaarde in. Voor een product zonder SEO-beschrijving toont de Preview dan de fallback. De fallback is gemarkeerd in de Preview, zodat u hem kunt onderscheiden van echte productgegevens.

![Fallbackwaarde in de Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/23-fallback-value-shown-in-the-preview.png)

### Kiezen tussen een voorwaarde en een fallback

- Gebruik een **voorwaarde** als de regel zonder waarde geen zin heeft, bijvoorbeeld bij een materiaal of een onderhoudsinstructie.
- Gebruik een **fallback** als de AI deze regel altijd moet krijgen, bijvoorbeeld _Brand: unknown_.
- Gebruik geen van beide voor attributen die elk product heeft, zoals de producttitel.

:::note

**Remove** verwijdert alleen de attribuutchip. Het label, zoals _Title:_, blijft als tekst staan. Verwijder het zelf, anders krijgt de AI een label zonder waarde.

:::

## 6. Het attributenpaneel

Het attributenpaneel toont alle attributen van de geselecteerde winkel. Attributen die al in de prompt staan, zijn effen groen en tonen een teller: **SEO Title 1** betekent dat het attribuut één keer wordt gebruikt.

![Gebruikte attributen met tellers](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/24-used-attributes-with-counters.png)

### Vulgraad (datadichtheid)

De vulgraad is het aandeel producten in de integratie dat een waarde voor een attribuut heeft. Het paneel toont dit op drie manieren:

- **Kleur van de onderstreping.** Groen betekent dat het attribuut bij meer dan 50% van de producten gevuld is. Geel betekent minder dan 50%.
- **Dikte van de onderstreping.** De lijn wordt sterker naarmate de vulgraad stijgt van 1% tot 100%.
- **Tooltip.** Beweeg de muis over een attribuut om de naam, de technische sleutel, de exacte vulgraad en een voorbeeldwaarde van een echt product te zien.

![Tooltip van een attribuut met vulgraad en voorbeeldwaarde](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/25-attribute-tooltip-with-fill-rate-and.png)

Attributen met een vulgraad van 0% zijn verborgen. Klik op **Show N without data** om ze te tonen.

:::tip

Laat bij attributen met een gele onderstreping **Only show when filled** aan staan of stel een fallbackwaarde in. Zo krijgen producten zonder die gegevens toch een nette prompt.

:::

### Attributen vinden

- **Search attribute.** Typ een deel van een naam om de lijst te filteren.
- **Sort By.** Sorteer op **Most filled** of op **Name**. Met de pijlen wisselt u tussen oplopende en aflopende volgorde.

![Opties van Sort By](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/26-sort-by-options.png)

## 7. Snippets

Snippets zijn herbruikbare blokken promptinhoud. Ze verschijnen als paarse chips in het Snippets-paneel. Klik op een snippet om het in de prompt in te voegen. Een snippet dat al in de prompt staat, wordt in het paneel gevuld weergegeven.

Er zijn twee soorten:

- **Systeemsnippets**, zoals Attribute list, Category list en Integration connector. Fozzels stelt ze voor iedereen beschikbaar. U kunt ze niet bewerken of verwijderen.
- **Eigen snippets**, die u maakt met de knop **+**. U kunt ze bewerken (potlood) of verwijderen (prullenbak).

### Attribute list

Voegt alle gevulde attributen van het product in als regels _Label: waarde_. Lege attributen worden weggelaten.

![Blok Attribute list in de editor](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/27-attribute-list-block-in-the-editor.png)

![Attribute list zoals weergegeven in de Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/28-attribute-list-rendered-in-the-preview.png)

Het is een snelle manier om de AI alle productgegevens te geven. Maar het neemt alles mee, ook technische velden zoals ID's, beheer-URL's, datums en ruwe waarden als `{"value":159.0,"unit":"CENTIMETERS"}`. Voor betere teksten kiest u de belangrijkste attributen zelf en gebruikt u Attribute list voor snelle tests. Voeg het maar één keer per prompt in, anders worden dezelfde gegevens twee keer verstuurd.

### Category list

Voegt attribuutregels in voor de categorieën waartoe het product behoort. In Shopify zijn dat collecties; in andere integraties kan het een andere koppeling zijn. Het blok is leeg bij het invoegen en toont een kop zoals **Category list · Collections · 10**.

![Leeg blok Category list](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/29-empty-category-list-block.png)

Klik op het tandwiel van het blok om het in te stellen:

![Instellingen van Category list](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/30-category-list-settings.png)

- **Edit template.** Kies de categorie-attributen die u wilt meenemen, zoals Name, URL, Level of Position. U stelt de lijst op dezelfde manier samen als een snippet.
- **Resolve through.** Laat zien via welke productkoppeling de categorieën worden gevonden, bijvoorbeeld Collections.
- **Number of categories.** Het maximale aantal categorieën in de lijst. Een product kan tot veel categorieën behoren, ook technische, dus met een limiet blijft de prompt kort en gericht.

![Sjabloon van Category list met geselecteerde attributen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/31-category-list-template-with-selected-attributes.png)

Categoriegegevens helpen de AI het product beter te begrijpen. Met Name en URL kunt u ook om interne links naar gerelateerde categorieën vragen, wat nuttig is voor SEO.

### Integration connector

Haalt gegevens op voor hetzelfde product uit een andere winkel in uw account. Een Magento-Flow kan bijvoorbeeld leveranciersnotities, materiaalsamenstelling of onderhoudsinstructies gebruiken die alleen in uw CSV-feed staan.

- Alleen beschikbaar in product-Flows, en alleen als uw account een tweede winkel heeft.
- Heeft het product geen tegenhanger in die winkel, dan geeft het blok niets weer, zodat de prompt schoon blijft.

Zo stelt u het in:

1. Klik op **Integration connector** in het Snippets-paneel. Het venster **Integration connector** opent.

   ![Venster Integration connector](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/32-integration-connector-window.png)

2. Kies onder **Connected store** de integratie, website en winkel waaruit u gegevens wilt ophalen.

   ![De gekoppelde winkel kiezen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/33-choosing-the-connected-store.png)

3. Klik op **Save**.

   ![Gekoppelde winkel geselecteerd](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/34-connected-store-selected.png)

4. Het venster **Integration connector template** opent met de attributen van de gekoppelde winkel. Voeg de attributen toe die u nodig hebt, op dezelfde manier als in een snippet: elk attribuut wordt een voorwaarderegel.

   ![Integration connector template](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/35-integration-connector-template.png)

5. Klik op **Save**. Het blok wordt aan uw prompt toegevoegd.

   ![Integration connector template met attributen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/36-integration-connector-template-with-attributes.png)

:::warning

Fozzels vindt het product in de gekoppelde winkel aan de hand van de identifier, zoals SKU of ID. De identifiers moeten in beide winkels overeenkomen. Is dat niet zo, dan heeft het product daar geen tegenhanger en blijft het blok leeg in de Preview.

:::

### Een eigen snippet maken

1. Klik op **+** in het Snippets-paneel. Het venster **New snippet** opent.

   ![Venster New snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/37-new-snippet-window.png)

2. Voer een **Name** in.
3. Klik op een starttype, bijvoorbeeld **Attribute list**. Het verschijnt in de editor als placeholder.
4. Klik op de attributen die u nodig hebt. Elk attribuut wordt als voorwaarderegel toegevoegd en de placeholder wordt vervangen door uw eigen lijst.
5. Zet de cursor op een nieuwe regel voordat u het volgende attribuut toevoegt. Er wordt niet automatisch een nieuwe regel gemaakt.

   ![Nieuw snippet met een lijst attributen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/38-new-snippet-with-a-list-of.png)

6. Klik op **Save**. Het snippet verschijnt in het Snippets-paneel.

   ![Snippet aangemaakt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/39-snippet-created.png)

Uw snippets zijn beschikbaar in alle Flows van dezelfde integratie, in al haar winkels.

### Een snippet in de prompt bewerken

In de prompt is uw snippet één paars blok met de naam van het snippet.

![Eigen snippet in de prompt en in de Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/40-custom-snippet-in-the-prompt-and.png)

Klik op het tandwiel ervan:

![Tandwielmenu van een snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/41-snippet-gear-menu.png)

| Optie | Wat er gebeurt |
| --- | --- |
| **Edit snippet (all prompts)** | Opent het snippet om te bewerken. Wijzigingen gelden voor elke prompt die het gebruikt, in alle Flows en winkels van de integratie |
| **Convert to inline text (this prompt only)** | Zet het snippet in deze prompt om in gewone voorwaarderegels. Daarna kunt u elke regel bewerken, verplaatsen of verwijderen. Latere wijzigingen aan het snippet hebben geen invloed meer op deze prompt |

![Snippet omgezet in inline voorwaarderegels](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/42-snippet-converted-to-inline-condition-lines.png)

Behoud het snippet als dezelfde lijst overal gelijk moet blijven en op één plek moet worden bijgewerkt. Zet het om als één prompt een eigen versie nodig heeft.

:::note

Attributen binnen een snippet tellen niet mee in de tellers van het attributenpaneel.

:::

### Als een snippet wordt verwijderd

Wordt een snippet dat in uw prompt staat verwijderd, dan blijft het blok in de prompt staan, maar het wordt vervaagd en toont alleen een nummer in plaats van de naam, bijvoorbeeld **#11**. Het geeft niets weer en verstoort het genereren dus niet. Verwijder het blok met de **x** of vervang het door een ander snippet.

![Vervaagd blok van een verwijderd snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/43-faded-block-of-a-deleted-snippet.png)

## 8. Preview

De Preview toont de uiteindelijke prompt voor één product uit uw geselecteerde set, in de taal van de geselecteerde winkel. Attributen worden vervangen door de waarden van het product en voorwaarden zonder waarde worden weggelaten. Dit is precies wat de AI ontvangt.

### Kop van de Preview

- **Productnaam.** Klik erop om de productpagina in Fozzels te openen, met alle attribuutwaarden en afbeeldingen.
- **Linkpictogram.** Opent het product op uw website.
- **SKU of ID.** Welke van de twee u ziet, hangt af van de integratie.
- **Change sample (< >).** Schakel naar het vorige of volgende product, in de volgorde van de catalogus.

![Knoppen Change sample in de kop van de Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/44-change-sample-buttons-in-the-preview.png)

### Hoe de Preview werkt

- **Live.** Elke wijziging in de editor verschijnt direct. U hoeft niet te vernieuwen.
- **Alleen-lezen.** U kunt niet in de Preview typen. Pas de prompt aan in de editor.
- **Gesynchroniseerd.** Beweeg de muis over een attribuut of voorwaarde in de editor en de bijbehorende regel in de Preview wordt gemarkeerd. De Preview scrolt ook mee met de editor, zodat u in een lange prompt het overzicht behoudt.

![Muisaanwijzer op een attribuut markeert de regel in de Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/45-hovering-an-attribute-highlights-its-line.png)

:::tip

Wissel tussen een paar voorbeeldproducten, vooral producten met weinig gegevens. Zo ziet u hoe de prompt eruitziet als sommige voorwaarden worden overgeslagen.

:::

### De afsluitende instructie

Aan het einde van elke Preview ziet u: _Do not provide any commentary, word count, information or comments about the generated text in the returned text._ Fozzels voegt deze regel automatisch aan elke prompt toe, zodat de AI alleen de content zelf teruggeeft. U hoeft hem niet zelf toe te voegen.

## 9. Sjablonen

Met sjablonen hergebruikt u een volledige prompt in andere Flows. Anders dan een snippet is een sjabloon de hele prompt. De knoppen staan onderaan de editor.

- **Load** vervangt de huidige prompt door een opgeslagen sjabloon. Is de prompt niet leeg, dan wordt u eerst om bevestiging gevraagd, zodat u niet per ongeluk uw werk kwijtraakt.
- **Save as template** slaat de huidige prompt, inclusief attributen, voorwaarden en snippets, op als nieuw sjabloon.

![Bevestiging voordat een sjabloon de prompt vervangt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/46-confirmation-before-a-template-replaces-the.png)

## 10. Lokalisatie van attribuutnamen

Attribuutnamen volgen de taal van de geselecteerde winkel, bijvoorbeeld `product_name` voor en-US en `product_naam` voor nl-NL.

- Heeft een attribuut geen naam voor een taal, dan wordt de naam uit de standaardwinkel (gemarkeerd met `*`) gebruikt.
- Een gelokaliseerde naam wijzigt u via **Integration settings → Attribute → Locale**.

Prompts koppelen attributen via hun unieke technische sleutel, niet via hun naam. Een attribuut hernoemen of de taal van de winkel wijzigen, maakt uw prompt dus niet kapot.

## 11. De prompt bewerken met de AI Prompt Assistant

De AI Prompt Assistant kan uw prompt voor u schrijven of uitbreiden. De assistent leest de huidige prompt en antwoordt alleen met het deel dat moet worden toegevoegd. Vraagt uw prompt bijvoorbeeld om een SEO-beschrijving en vraagt u "add slug", dan stelt de assistent alleen het nieuwe stuk voor.

Klik op de blauwe chatknop rechtsonder op de pagina om de assistent te openen. Het paneel **AI Assistant** opent naast de editor. Typ uw verzoek, bijvoorbeeld _Help me create a prompt for Description. Use filled attributes._, en druk op **Enter** om het te versturen. Met **Shift+Enter** maakt u een nieuwe regel.

De assistent kent de attributen van uw integratie en hun vulgraad. Hij bouwt de prompt op met attributen en voorwaarden en legt zijn keuzes uit, bijvoorbeeld waarom een attribuut in een voorwaarde is geplaatst.

![AI Assistant met een voorgestelde prompt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/47-ai-assistant-with-a-suggested-prompt.png)

### Een voorstel plaatsen

Elk voorstel verschijnt in de chat als blok, op dezelfde manier weergegeven als in de editor, met deze knoppen:

| Knop | Wat deze doet |
| --- | --- |
| Copy | Kopieert het voorstel, zodat u het zelf kunt plakken |
| Add | Voegt het voorstel toe aan het einde van de prompt |
| At cursor | Voegt het voorstel in op de plek van uw cursor in de editor |
| Replace all | Vervangt de hele prompt door het voorstel |

Nadat u op een knop hebt geklikt, wordt deze groen en even uitgeschakeld, zodat dezelfde tekst niet twee keer wordt ingevoegd. De plaatsingsknoppen verschijnen alleen als er een prompteditor op de pagina open is. Past een voorstel niet in het formaat van de editor, dan wordt alleen **Copy** getoond.

### Kiezen welke prompt u bewerkt

Staat er meer dan één prompt op een pagina, dan kiest u in een keuzelijst boven het chatinvoerveld aan welke prompt de assistent werkt.

- Een voorstel gaat altijd naar de prompt die geselecteerd was toen u de vraag stelde, ook als u de keuzelijst later wijzigt.
- In een gesprek dat is hersteld uit een eerdere sessie, gaan voorstellen naar de hoofdprompt van de Flow.
- Is de prompt waar een voorstel bij hoort verwijderd, dan wordt het voorstel als niet beschikbaar gemarkeerd en nergens anders weggeschreven.

## Gerelateerde artikelen

- [4.3.3 Effectieve prompts schrijven (aanbevelingen)](/content-creation-flows/writing-effective-prompts-recommendations)
- [4.7.3 Toegestane HTML-tags voor AI-tekstgeneratie](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
- [4.9.1 Een contentflow voor categorieën maken](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels)
