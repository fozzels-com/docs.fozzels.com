---
title: '4.11.1. Workflows. Les 1: Aan de slag met Workflows'
sidebar_position: 30
slug: /content-creation-flows/workflows-lesson-1-getting-started
description: >-
  Workflows controleren en bewerken gegenereerde resultaten automatisch:
  vervang woorden, kort tekst in tot een maximale lengte, of markeer een
  resultaat voor handmatige controle voordat het de winkel bereikt. Bouw uw
  eerste workflow en leer hoe deze zich gedraagt.
---

Workflows controleren en bewerken gegenereerde resultaten automatisch: ze kunnen woorden vervangen, tekst inkorten tot een maximale lengte, of een resultaat markeren voor handmatige controle voordat het de winkel bereikt. U stelt de regels één keer in, en ze worden toegepast op elk nieuw resultaat.

In deze les bouwt u uw eerste workflow, ziet u hoe deze zich gedraagt, en leert u onderweg een aantal aandachtspunten.

## Het voorbeeld waarmee we werken

Onze flow genereert een korte bezorgomschrijving voor een cake:

> We are delighted to deliver your chosen **cake** directly to the address you provide… Each Festive **Cake** will arrive in beautiful gift packaging… every celebration deserves a delicious **CAKE**…

Het woord "cake" komt drie keer voor, in drie verschillende schrijfwijzen. Houd dit in gedachten, het is later van belang.

## Stap 1. Een workflow aanmaken

Ga naar **Home → Workflows** en klik op **Create workflow**.

![Pagina Workflows met de knop Create workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/01-workflows-page-create-workflow.png)

De editor opent met de standaardnaam **New workflow 1**. Geef de workflow meteen een duidelijke naam: zodra u er meerdere heeft, zijn generieke namen gemakkelijk door elkaar te halen.

![Lege workflow-editor met de knop Create block](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/02-empty-workflow-editor.png)

> **Opmerking:** de schakelaar **Active** staat standaard aan. Een workflow heeft geen effect totdat deze aan een flow is toegewezen, maar zodra dat is gebeurd, begint een actieve workflow met het verwerken van resultaten.

## Stap 2. Een blok instellen

Klik op **Create block**. Er verschijnt een blok op het canvas met twee onderdelen:

- **IF:** de voorwaarden waaronder het blok wordt uitgevoerd.
- **THEN:** de acties die het uitvoert.

![Een nieuw leeg blok op het canvas](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/03-new-empty-block.png)

Klik op het potloodpictogram om de blokinstellingen te openen.

![Leeg venster om een blok te bewerken](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/04-empty-edit-block-window.png)

### Voorwaarden

Elke voorwaarde bestaat uit drie onderdelen: wat u controleert, een operator en een waarde. Er zijn twee dingen die u kunt controleren:

![Voorwaardetypen: Length en Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/05-condition-types.png)

**Length** is de tekstlengte in tekens, spaties inbegrepen. Operators: greater than, greater or equal, less than, less or equal, equals, not equal.

![Length-operators](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/06-length-operators.png)

**Text** controleert de inhoud. Operators: contains, does not contain, begins with, ends with, is empty, is not empty.

![Text-operators](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/07-text-operators.png)

Bij meer dan één voorwaarde kiest u de logica:

- **All conditions:** aan elke voorwaarde moet worden voldaan (AND).
- **Any condition:** één is voldoende (OR).

### Acties

Er zijn drie acties beschikbaar. De beschrijvingen worden direct in de dropdown weergegeven.

![De drie beschikbare acties](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/08-available-actions.png)

- **Replace text:** vervangt een woord of zin. Laat **Replace with** leeg om het te verwijderen. HTML-tags worden niet beïnvloed.
- **Truncate:** kort de tekst in tot een maximumaantal tekens.
- **Mark suspicious:** markeert het resultaat voor handmatige controle.

Een blok kan meerdere acties bevatten. Ze worden van boven naar beneden uitgevoerd.

### Uw eerste blok

**Taak:** als de tekst "Happy holidays!" bevat, vervang dan "cake" door "festive cake".

1. **Name:** `cake -> festive cake`
2. **Conditions → Add condition:** `Text` · `contains` · `Happy holidays!`
3. **Actions → Add action:** `Replace text`, Find `cake`, Replace with `festive cake`, **All matches** aan (vervangt elke match, niet alleen de eerste).
4. Klik op **Apply**.

![Blokinstellingen voor het eerste voorbeeld](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/09-first-block-settings.png)

Het blok op het canvas toont nu een samenvatting van de voorwaarden en acties. Controleer of **Active** aanstaat en klik op **Save**.

![Opgeslagen blok met samenvatting, de schakelaar Active en de knop Save](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/10-saved-block-summary.png)

## Stap 3. De workflow toewijzen aan een flow

Een opgeslagen workflow doet niets totdat deze aan een flow is gekoppeld.

1. Open uw flow en ga naar het tabblad **Automation** (het 4e tabblad).
2. Kies onderaan, in de sectie **Workflows**, uw workflow uit de dropdown.
3. Klik op **Save** om de flow op te slaan.

![Sectie Workflows van een flow met een toegewezen workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/11-flow-workflows-section.png)

Genereer een nieuw resultaat en open dit vanuit de **Batch List** (de tabel met gegenereerde resultaten).

## Stap 4. Het resultaat controleren

De tekst die "Happy holidays!" bevat, is veranderd:

![Resultaat met "festive cake" en "Festive festive cake"](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/12-result-festive-festive-cake.png)

Let op **"Festive festive cake"**. Het model schreef "Festive Cake" met een hoofdletter C, en zonder **Match case** negeert de vervanging hoofdlettergebruik, waardoor "Cake" ook werd vervangen.

**Oplossing:** zet **Match case** aan. Dan wordt alleen "cake" met kleine letters vervangen, en blijft "Festive Cake" ongewijzigd.

> **Houd er rekening mee:** Replace text kijkt niet naar de context, het zoekt alleen naar matches. Als het model al "delicious cake" heeft geschreven, geeft het vervangen van `cake` door `delicious cake` het resultaat "delicious delicious cake". Denk na over hoe uw vervanging zich gedraagt bij verschillende teksten.

## Stap 5. Hoe resultaten worden verwerkt

Als u de instellingen van een workflow wijzigt en een resultaat opnieuw opent dat al is verwerkt, blijft het resultaat ongewijzigd. Zo werkt het systeem:

- Workflows verwerken alleen **nieuwe en opnieuw gegenereerde** resultaten.
- Elk resultaat wordt door een bepaalde workflow **slechts één keer** verwerkt. Het bewerken van de blokken heeft geen invloed op resultaten die al zijn verwerkt.
- Wijzigingen zijn **permanent**. Het verwijderen van een workflow uit een flow herstelt de oorspronkelijke tekst niet.

Om nieuwe instellingen toe te passen, genereert u het resultaat opnieuw.

> **Tip:** test nieuwe workflows eerst op een testflow. Wijzigingen aan verwerkte resultaten kunnen niet worden teruggedraaid, alleen opnieuw gegenereerd.

## Stap 6. Meerdere workflows

Om teksten te herstellen waarin "Festive festive" voorkomt, kunt u een tweede workflow toevoegen. Deze markeert het resultaat ook voor controle:

- **Conditions:** `Text` · `contains` · `Festive festive`
- **Actions:**
    1. `Replace text`: `Festive festive` → `Festive`, **All matches** en **Match case** aan
    2. `Mark suspicious` met een reden voor de reviewer

![Herstelworkflow met Replace text en Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/13-fix-workflow.png)

U kunt een willekeurig aantal workflows aan een flow toewijzen. Ze worden **van boven naar beneden** uitgevoerd, en elke workflow ontvangt de tekst zoals gewijzigd door de vorige. Wijzig de volgorde door de handgreep te verslepen of met de pijltjes.

![Vier workflows toegewezen aan één flow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/14-four-workflows-assigned.png)

Aanbevolen volgorde:

1. Workflows die de tekst wijzigen.
2. Workflows die neveneffecten van de bovenstaande herstellen. Een herstelworkflow moet **na** de workflow die het probleem veroorzaakt worden uitgevoerd.
3. Mark suspicious kan overal staan: het stopt de verwerking niet.

Als meerdere workflows een resultaat als suspicious markeren, wordt de reden van de **eerste** workflow in de lijst getoond.

## Stap 7. Truncate met handmatige controle

**Taak:** vervang "cake" door "candies", beperk de tekst tot 110 tekens, en houd de ingekorte tekst buiten de winkel totdat iemand deze controleert.

- **Conditions** (**All conditions**):
    - `Text` · `contains` · `cake`
    - `Length` · `greater than` · `100`
- **Actions**, in deze volgorde:
    1. `Replace text`: `cake` → `candies`, **All matches** en **Match case** aan
    2. `Truncate`: `110`, **Keep whole words** aan
    3. `Mark suspicious`: reden `Truncated to 110 characters`

![Blok met Replace text, Truncate en Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/15-replace-truncate-mark-suspicious.png)

> **Waarom de volgorde belangrijk is:** "candies" is langer dan "cake". Als u eerst inkort en daarna vervangt, kan de tekst opnieuw over de limiet gaan. Vervang eerst, kort daarna in.

**Resultaat:**

![Ingekort resultaat, 109 tekens](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/16-truncated-result.png)

De tekst is 109 tekens lang en er wordt geen woord doormidden gekapt. Woorden die door een koppelteken zijn verbonden, zoals "door-complete", tellen als één woord. Er wordt geen "…" aan het einde toegevoegd. De zin is echter onafgemaakt, en daarom maakt Mark suspicious deel uit van dit blok.

Een resultaat dat als suspicious is gemarkeerd, wordt **niet gesynchroniseerd met de winkel** totdat een gebruiker het bewerkt of opnieuw genereert. In de Batch List verschijnt een "!"-icoon naast **Sync Now**, en de reden wordt zichtbaar bij hover:

![Suspicious-reden weergegeven naast Sync Now](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/17-suspicious-reason-sync-now.png)

Binnen het resultaat toont een **Synchronization with integration is disabled**-waarschuwing de reden:

![Waarschuwing dat synchronisatie is uitgeschakeld, met de reden van de workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/18-sync-disabled-warning.png)

> **Suspicious woorden van de integratie gaan voor.** De integratie heeft een eigen lijst met [suspicious woorden en patronen](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control). Als de tekst er een bevat, krijgt het resultaat de systeemreden "Completion looks suspicious, possible AI recommendations found", en worden workflow-redenen niet getoond. Het gevonden woord wordt oranje gemarkeerd.

![Systeemwaarschuwing suspicious met een gemarkeerd woord](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/19-system-suspicious-warning.png)

## Snel overzicht

| Instelling | Hoe het werkt |
| --- | --- |
| All / Any condition | Aan elke voorwaarde moet worden voldaan / één is voldoende |
| Length | Tekstlengte in tekens, spaties inbegrepen |
| Replace text | Een lege Replace with verwijdert de match; HTML-tags worden niet beïnvloed |
| All matches | Uit: alleen de eerste match wordt vervangen |
| Match case | Uit: de vervanging negeert hoofdlettergebruik |
| Truncate | Er wordt geen "…" toegevoegd; Keep whole words houdt woorden intact |
| Mark suspicious | Blokkeert synchronisatie met de winkel; stopt geen andere acties of workflows |
| Meerdere suspicious-markeringen | De reden van de eerste workflow wordt getoond |
| Suspicious woorden van de integratie | Hebben voorrang op workflow-redenen |
| Verwerking | Alleen nieuwe en opnieuw gegenereerde resultaten, één keer per workflow; wijzigingen zijn permanent |

## Wat volgt hierna

De volgende les behandelt geavanceerde functies: Yes/No-vertakkingen en het verbinden van blokken, voorwaardegroepen, en werken met HTML-output.
