---
id: '103000367976'
title: 4.1.2. Een nieuwe inhoudsflow maken en initiële instellingen.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  De Content Flow is de kern van automatisering binnen Fozzels. Hij bepaalt aan
  welke producten Fozzels werkt, welke attributen worden gevuld, welk AI-model
  wordt gebruikt en welke instructies het model krijgt.
---

De Content Flow is de kern van automatisering binnen Fozzels. Hij bepaalt aan welke producten Fozzels werkt, welke attributen worden gevuld, welk AI-model wordt gebruikt en welke instructies het model krijgt. Fozzels genereert, werkt bij en synchroniseert vervolgens de content voor uw producten.

Eén Flow kan meerdere attributen tegelijk vullen. U kiest een **hoofdattribuut** wanneer u de Flow maakt en u kunt er later maximaal 12 toevoegen. Alle attributen worden samen gegenereerd in één AI-verzoek per product.

Deze handleiding loopt met u door alle vier de stappen van een Flow, aan de hand van één voorbeeld: een Flow die een **Description**, een **Short Description** en een **Meta Description** schrijft voor damesproducten die wel foto's hebben, maar nog geen beschrijving.

## 1\. Een nieuwe Flow maken

1.  Klik in het zijmenu onder **AI Flows** op **Content Flows**. De lijst met Flows wordt geopend.

2.  Controleer bovenaan de integratie, de website en de winkel. Hebt u er meer dan één, kies dan de gewenste in de keuzelijst. Hebt u er maar één, dan is die al geselecteerd.

3.  Klik rechtsboven op **New Product Flow**.
    ![Flowlijst met de knop New Product Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-01-new-product-flow-button.png)

4.  Voer een **Name** in voor de Flow, bijvoorbeeld _Mijn eerste inhoudsflow_.

5.  Kies onder **Entity Type** de optie **Product**. Wilt u content genereren voor categorieën, zie dan [4.9.1 Een Content Flow voor categorieën maken](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels/).
    ![Create New Product Flow: het entiteitstype kiezen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-02-entity-type.png)

6.  Kies onder **Attribute** het **hoofdattribuut** dat de Flow vult. U kunt typen om te zoeken, bijvoorbeeld _description_.
    ![Zoeken naar het hoofdattribuut](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-03-main-attribute-search.png)

7.  Klik op **Save**.
    ![Formulier voor een nieuwe Flow, klaar om op te slaan](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-04-new-flow-save.png)

:::tip
**Kies het grootste attribuut als hoofdattribuut**, bijvoorbeeld de volledige beschrijving. In de resultaten krijgt het hoofdattribuut de volledige editor met een voorbeeld, terwijl de extra attributen eronder worden getoond.
:::

:::note
**Alt-teksten voor afbeeldingen genereren?** Kies **Media Gallery** als attribuut. Zie [4.3.2.a Alt-teksten voor Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/) en [4.3.2.b Alt-teksten voor NextChapter](/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/).
:::

## 2\. AI Configuration

Nadat u hebt opgeslagen, opent Fozzels de stap **AI Configuration**. Vanaf nu staan bovenaan de pagina de schakelaar **Active flow** en de naam van de Flow. Klik op het potlood naast de naam om de Flow een andere naam te geven.

1.  Kies onder **AI Provider Selection** de provider: OpenAI | ChatGPT, Anthropic, xAI of Google | Gemini.
    ![De AI-provider kiezen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-05-ai-provider.png)

2.  Klik onder **Model** op een modeltegel. Elke tegel toont de prijs per 1K input- en outputtokens, de prijs van een webzoekopdracht, of het model productafbeeldingen kan lezen en of het webzoeken ondersteunt. Zie [4.2.1 AI-configuratie](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features/).

3.  Optioneel: vink **Enable Web Search** aan als uw prompt de AI vraagt om online informatie op te zoeken, bijvoorbeeld op uw productpagina.

4.  Optioneel: stel onder **Image Usage** het **Image count** in (maximaal 5). De AI analyseert dan zoveel productafbeeldingen, in de volgorde waarin ze uit uw integratie komen. Meer afbeeldingen kosten meer tokens. Laat het veld leeg om alleen de prompttekst te gebruiken.

5.  Laat **Enable Image Resize** aan staan. Fozzels verkleint dan afbeeldingen die groter zijn dan 2 MB en die geen JPEG zijn of breder of hoger zijn dan 2048 pixels. Zie [4.2.2 Afbeeldingsoptimalisatie](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/).
    ![Modeltegels, webzoeken, afbeeldingsgebruik en afbeeldingen verkleinen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-06-model-and-image-settings.png)

6.  Optioneel: kies een of meer **Text styles** (bijvoorbeeld _Creatief_, _Informatief_) en **Text tones** (bijvoorbeeld _Inspirerend_).
    ![Tekststijlen en teksttonen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-07-text-styles-tones.png)

7.  Klik op **Save** en vervolgens op **Next step**.

:::note
**Image Resize kost een kleine vergoeding per afbeelding, maar uitschakelen betekent niet altijd dat het wordt overgeslagen.** Zeer grote afbeeldingen worden voor elke AI-provider nog steeds automatisch verkleind en in rekening gebracht. Zonder deze stap zou de generatie mislukken met een foutmelding, of zou de AI iets als "Ik kan de afbeelding niet zien" in uw content schrijven.
:::

U kunt op elk moment terugkomen op deze instellingen, ook nadat de Flow is begonnen met genereren.

## 3\. Flow Selection & Prompt

### 3.1 Het hoofdattribuut en het formaat controleren

Bovenaan ziet u het hoofdattribuut dat u in stap 1 hebt gekozen.

Bepaal of het resultaat HTML moet bevatten. Klik op de oogknop naast het attribuut. Haal in het venster **Edit attribute** het vinkje bij **Allow HTML** weg als u platte tekst zonder opmaakcode nodig hebt en klik dan op **Save**. Zie [4.7.3 Toegestane HTML-tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation/).

![Venster Edit attribute met Allow HTML](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-08-edit-attribute-allow-html.png)

:::warning
De andere velden in dit venster zijn technische instellingen van uw integratie. Wijzig ze alleen als u weet wat ze doen. Hebt u hulp nodig, neem dan contact op met de support.
:::

### 3.2 De producten selecteren

Gebruik **Filter & Select Products** om te kiezen aan welke producten de Flow werkt. Het aantal geselecteerde producten staat in de titel van het blok en op het tabblad van stap 3.

![Stap Flow Selection & Prompt: hoofdattribuut en filters](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-09-filter-select-products.png)

- Klik op **Add condition** om een filter toe te voegen: kies een attribuut, een operator en een waarde.
- Kies **All conditions** (aan elke voorwaarde moet worden voldaan) of **Any condition** (één voorwaarde is genoeg).
- Klik op **Add condition group** om voorwaarden op complexere manieren te combineren.

**Voorbeeld.** Zo schrijft u beschrijvingen voor damesproducten die foto's hebben en nog geen beschrijving:

| Attribuut | Operator | Waarde |
| --- | --- | --- |
| Categories | is one of | Women |
| Media Gallery | has an image | Yes |
| Description | is empty | |

![Filtervoorbeeld: damesproducten met afbeeldingen en zonder beschrijving](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-10-filter-example.png)

:::warning
Als u geen voorwaarden instelt, gebruikt de Flow **alle** producten in de winkel.
:::

:::tip
Om te voorkomen dat u bestaande content overschrijft, voegt u een filter toe zoals **Description is empty** voor het attribuut dat u genereert.
:::

Voor alle filteropties, zie [Productfiltering voor contentgeneratie](/data-import-and-quality/product-filtering-for-content-generation/).

#### Uw filters opslaan voor hergebruik

Plant u meer Flows voor dezelfde producten, bijvoorbeeld beschrijvingen, metatags en alt-teksten? Sla de filters dan één keer op:

1.  Klik op **Filter set → Save as new**.
    ![Menu Filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-11-filter-set-menu.png)

2.  Voer een naam in, bijvoorbeeld _Dames - lege beschrijvingen_, en klik op **Save**.
    ![Een filterset opslaan](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-12-filter-set-save.png)

3.  De set staat nu in het menu **Filter set**. Klik erop om hem toe te passen, of klik op de prullenbak om hem te verwijderen.
    ![Opgeslagen filterset in het menu](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-13-filter-set-saved.png)

Opgeslagen filtersets zijn overal beschikbaar waar u producten filtert: in integraties, in de catalogus en in Flows. U kunt een opgeslagen set ook combineren met extra voorwaarden.

### 3.3 De prompt schrijven

Schrijf in het gedeelte **Prompt** de instructies voor de AI en voeg er productgegevens aan toe:

- Typ `/` in de editor, of klik op een attribuut in het paneel **Attributes** of sleep het. Elk attribuut wordt toegevoegd als voorwaardelijke regel, zodat het wordt overgeslagen bij producten waarbij het leeg is.
- Gebruik **Snippets** zoals **Attribute list** om met één klik een kant-en-klaar blok productgegevens toe te voegen.
- Bekijk rechts de **Preview**. Die wordt bijgewerkt terwijl u typt en toont de definitieve prompt voor een echt product. Gebruik **&lt; &gt;** om een paar producten te controleren.
- Wilt u een prompt in andere Flows hergebruiken, gebruik dan **Save as template** en **Load**.

![Prompteditor met de live Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-14-prompt-editor-preview.png)

Voor de volledige handleiding, zie [4.3.2 Prompt instellen en gebruiken](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

:::warning
Gebruik de attributen die u genereert niet als input in de prompt. Schrijft de Flow bijvoorbeeld de Description, voeg het attribuut Description dan niet in de prompt in. In een Flow met meerdere attributen geldt dit voor elk van die attributen. Zie [Recursiedetectie](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation/).
:::

#### Controleren op functies die zijn uitgeschakeld

Wanneer u opslaat, controleert Fozzels of uw prompt een functie nodig heeft die in deze Flow is uitgeschakeld. Bijvoorbeeld:

- de prompt vraagt de AI om de productafbeeldingen te analyseren, maar er is geen **Image count** ingesteld;
- de prompt vraagt de AI om uw productpagina te lezen, maar **Enable Web Search** staat uit.

Boven de stappen verschijnt dan een waarschuwing. Klik op **Open AI Configuration** om de functie in te schakelen, of op **Ask Jane** om hulp te krijgen van de AI-assistent.

![Waarschuwing over functies die voor deze Flow zijn uitgeschakeld](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-15-disabled-features-warning.png)

### 3.4 Meer attributen vullen in dezelfde Flow

Onder de prompt, bij **Additional attributes to fill**, kunt u maximaal 12 extra attributen toevoegen. Alle attributen van de Flow worden samen gegenereerd in één AI-verzoek per product, zodat productgegevens en afbeeldingen maar één keer worden verstuurd.

1.  Kies een attribuut in de keuzelijst en klik op **Add attribute**.
    ![Een extra attribuut toevoegen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-16-additional-attribute-add.png)

2.  Schrijf bij **Instruction for this attribute** wat de AI moet maken. Het veld werkt net als de hoofdprompteditor, met de Preview, het paneel Attributes en Snippets. Zodra de instructie is ingevuld, toont de rij **Prompt set**.
    ![Instructie voor Short Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-17-instruction-short-description.png)

3.  Klik op het oog in de rij om de attribuutinstellingen te openen. Haal bij metatitels en metabeschrijvingen het vinkje bij **Allow HTML** weg, omdat dit platte tekst moet zijn.
    ![Instructie voor Meta Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-18-instruction-meta-description.png)

4.  Herhaal dit voor elk attribuut en sla daarna op.

:::tip
Geef elk attribuut een duidelijke lengtelimiet, bijvoorbeeld _2–3 zinnen, 35–60 woorden_ voor een korte beschrijving of _120–160 tekens, nooit meer dan 160_ voor een metabeschrijving.
:::

### 3.5 De prompt testen

Test voordat u de Flow uitvoert wat de AI genereert voor een paar producten.

1.  Klik onderaan de stap op **Save and Preview**.
    ![Knop Save and Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-19-save-and-preview.png)

2.  Er wordt een tabel met uw geselecteerde producten geopend. Klik op een cel in de kolom **Prompt** om de volledige prompt te zien die de AI krijgt. In een Flow met meerdere attributen staat elk attribuut onder een eigen kop met een eigen instructie. Klik op **Copy to Clipboard** om de prompt te kopiëren.
    ![Tabel voor testgeneratie](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-20-test-generation-table.png)
    ![Volledige prompt die naar de AI wordt gestuurd](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-21-test-generation-prompt.png)

3.  Klik op **Generate Now** in de rij van een product. Het resultaat wordt in een venster geopend, met elk attribuut onder een eigen kop. Klik op **Show HTML** om de opmaakcode te zien.
    ![Resultaat van de testgeneratie](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-22-test-generation-result.png)

:::info
Een testgeneratie is **gratis** en start de Flow **niet**. Het resultaat wordt niet opgeslagen. Wilt u het bewaren, klik dan op **Copy to Clipboard** voordat u het venster sluit.
:::

Pas de prompt aan en test opnieuw tot u tevreden bent met het resultaat. Klik daarna op **Next step**.

## 4\. Automation

![Automatiseringsinstellingen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-23-automation-settings.png)

| Instelling | Wat het doet |
| --- | --- |
| **Amount of products to create content for per day** | Hoeveel producten de Flow per dag verwerkt, maximaal 500 |
| **Fully automatic** | Gegenereerde content wordt direct bevestigd en naar uw winkel gestuurd, zonder handmatige controle. Content die als verdacht is gemarkeerd, wordt nog steeds vastgehouden voor controle. Werkt alleen als de Flow actief is |
| **Confidence threshold** | Optioneel, van 0.1 tot 1.0. De AI geeft aan hoe zeker hij is van elke waarde. Waarden onder de drempel worden vastgehouden voor controle in plaats van automatisch verstuurd. Hoe hoger de drempel, hoe meer content u controleert. Laat het veld leeg om de drempel uit te schakelen. Handig in combinatie met **Fully automatic** |
| **Automatically create a new text when an attribute of a product changes in your store** | Genereert de content opnieuw wanneer een attribuut dat in de prompt wordt gebruikt in uw winkel verandert |
| **Prevent double content generation with other Flows** | Voorkomt dat een product nieuwe content krijgt als een andere Flow die al heeft gegenereerd. Kies **Inherit** (uw globale instellingen gebruiken), **Override** (een periode alleen voor deze Flow instellen) of **Turn Off**. Zie [4.4.1 Overlappende contentgeneratie voorkomen](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/) |
| **Workflows** | Optionele extra acties voor deze Flow. Workflows worden van boven naar beneden uitgevoerd. Sleep ze of gebruik de pijlen om de volgorde te wijzigen. Zie [4.11.1 Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) |

:::tip
De meeste gebruikers beginnen met **Fully automatic** uitgeschakeld en controleren de eerste resultaten handmatig.
:::

### De Flow starten

1.  Zet **Active flow** bovenaan de pagina aan. De startknoppen zijn alleen beschikbaar voor een actieve Flow.

2.  Kies hoe u wilt starten:

| Optie | Wat er gebeurt |
| --- | --- |
| **Plan & Close** | De Flow start de volgende dag, na de nachtelijke catalogusupdate. Daarna verwerkt hij elke dag het **Amount of products per day** tot alle geselecteerde producten klaar zijn |
| **Run Now** (pijl naast **Plan & Close**) | De Flow verwerkt direct de eerste **10 producten**. Daarna gaat hij verder volgens het dagelijkse schema |

![Voorkomen van dubbele content, workflows en startknoppen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-24-launch-buttons.png)

Een actieve Flow pakt na elke nachtelijke update ook nieuwe producten op die aan zijn filters voldoen. Voor een volledige checklist vóór de start, zie [4.1.2.a Geautomatiseerde AI Content Flows instellen](/content-creation-flows/how-to-set-up-automated-ai-content-flows/).

## 5\. De resultaten controleren in de Batch List

1.  Klik op **Batch List** onderaan een willekeurige stap van de Flow. In een Flow met meerdere attributen heeft elk attribuut een eigen kolom, zodat u alle resultaten van een product in één rij ziet.
    ![Batch List met een kolom per attribuut](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-25-batch-list.png)

2.  Klik op een gegenereerde waarde om het venster **Edit completion result** te openen:
    - Het hoofdattribuut staat bovenaan, met **Enable Editor**, **Show HTML** en een voorbeeld.
    - De andere attributen staan eronder bij **Other attributes filled by this Flow**. Klap elk attribuut uit om het te lezen en te bewerken. Select- en multiselect-attributen bewerkt u met een keuzelijst.

    ![Venster Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-26-edit-completion-result.png)

3.  Bewerk de tekst indien nodig en klik op **Save**.

4.  Zet **Batch Confirmed** aan en klik op **Save & Sync** om de content naar uw winkel te sturen. Zolang het resultaat niet is bevestigd, is synchroniseren uitgeschakeld. In een **Fully automatic** Flow worden resultaten voor u bevestigd.

Andere knoppen in het venster:

- **Regenerate** genereert de content opnieuw. Hierbij worden altijd **alle** attributen van de Flow samen opnieuw gegenereerd.
- **Show Revisions** toont eerdere versies. Zie [4.8.1 Geschiedenis van contentgeneratie](/content-creation-flows/content-completion-history-revision-history-version-control/).
- **Copy to Clipboard** kopieert de content.

### Verdachte content

Als een resultaat de kwaliteitscontroles van Fozzels niet doorstaat, worden de problematische delen geel gemarkeerd en wordt het resultaat niet gesynchroniseerd. U kunt de gemarkeerde delen handmatig aanpassen en opslaan, wat niets kost, of op **Regenerate** klikken om alle attributen opnieuw te genereren. Zie [4.7.4 Verdachte woorden en zinnen](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

Voor meer over het controleren en synchroniseren van resultaten, zie [4.7.1 Gegenereerde resultaten volgen](/content-creation-flows/tracking-of-the-generated-results-dashboard/) en [4.7.5 Content bewerken in de Batch List](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/).
