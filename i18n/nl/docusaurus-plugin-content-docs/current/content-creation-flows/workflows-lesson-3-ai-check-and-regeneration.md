---
title: '4.11.3. Workflows. Les 3: Automatische AI-controle en hergeneratie'
sidebar_position: 32
slug: /content-creation-flows/workflows-lesson-3-ai-check-and-regeneration
description: >-
  Laat AI elke gegenereerde tekst controleren voordat die uw winkel bereikt. Is
  een tekst niet bruikbaar, dan vertelt Fozzels het model wat er mis was en
  genereert de tekst automatisch opnieuw.
---

Laat AI elke gegenereerde tekst controleren voordat die uw winkel bereikt. Is een tekst niet bruikbaar, dan vertelt Fozzels het model wat er mis was en genereert de tekst automatisch opnieuw.

Soms schrijft een AI-model iets wat u niet kunt gebruiken: een placeholder, een opmerking als "Hier is uw beschrijving", tekst in de verkeerde taal of over het verkeerde product. Met een AI-controle in uw workflow vindt Fozzels deze teksten voor u en genereert ze automatisch opnieuw, zodat u alleen nog controleert wat echt een mens nodig heeft.

Deze les bouwt voort op [4.11.1. Les 1: Aan de slag met Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) en [4.11.2. Les 2: Blokken combineren in één workflow](/content-creation-flows/workflows-lesson-2-combining-blocks/). Heeft u die nog niet gelezen? Begin dan daar.

## Zo werkt het in het kort

1. Uw flow genereert zoals altijd een tekst.
2. Een tweede AI-model leest de tekst en controleert of die bruikbaar is.
3. Slaagt de tekst, dan verandert er niets: de tekst gaat door naar review of synchronisatie, zoals ingesteld in uw flow.
4. Slaagt de tekst niet, dan genereert Fozzels de tekst opnieuw en vertelt het model wat er mis was ("feedback").
5. De nieuwe tekst wordt opnieuw gecontroleerd. Dit herhaalt zich tot de tekst slaagt of het maximumaantal hergeneraties is bereikt.
6. Slaagt de tekst na de laatste poging nog steeds niet, dan wordt die met de reden als verdacht gemarkeerd, zodat u de tekst zelf kunt corrigeren.

## De twee nieuwe blokken

| Blok | Type | Wat het doet |
| --- | --- | --- |
| **AI validation fails** | Voorwaarde | Laat een AI-model de gegenereerde tekst controleren. **Yes** = de tekst heeft een probleem, **No** = de tekst is in orde. |
| **Regenerate with feedback** | Actie | Genereert de tekst op de achtergrond opnieuw en stuurt de gevonden problemen naar het model, zodat het die kan vermijden. |

Gebruik ze samen in één blok: de voorwaarde **AI validation fails** in de sectie **Conditions** en de actie **Regenerate with feedback** in de sectie **Actions**.

## Waar de AI-controle op let

De controle beoordeelt een tekst als niet bruikbaar wanneer:

| Probleem | Voorbeeld |
| --- | --- |
| Het is geen echte content: in plaats van de verwachte tekst gaf de AI iets terug dat voor een ander doel bedoeld is, of er is een andere duidelijke mismatch | Een weigering, een wedervraag, "lorem ipsum", "[Product name]", een lege template-tag |
| De AI praat | "Hier is de beschrijving:", "Laat het me weten als u wijzigingen wilt", zichtbare redenering |
| Het past niet bij het attribuut | Een volledige beschrijving geschreven als titel |
| Het herhaalt de naam van het attribuut | "Meta description: ..." |
| Het is in de verkeerde taal | Engelse tekst in een Duitse store view |
| Het gaat over een ander product | Een tekst over oordopjes voor een hoesje voor oordopjes |
| Het stopt midden in een zin | De tekst is afgebroken |

De controle beoordeelt stijl, toon, lengte en opmaak **niet**, en herschrijft uw tekst nooit. Gebruik voor lengtelimieten of woordvervangingen de blokken uit Les 1 en 2.

:::note
De controle ziet het product, de gegenereerde tekst, de vorige waarde van het attribuut en de taal van uw store view. Uw prompt ziet de controle **niet**. Had het attribuut eerst een normale titel en is de nieuwe waarde "lorem ipsum" (ook als uw prompt daar precies om vroeg), dan geeft de controle feedback dat het resultaat er niet uitziet als een normale titel.
:::

## Stap 1. Maak de workflow aan

1. Open in het zijmenu onder **AI Flows** de optie **Workflows**.
2. Klik op **Create workflow**.
3. Geef de workflow een duidelijke naam, bijvoorbeeld "AI check".
4. Voeg een blok toe en geef het een titel, bijvoorbeeld "AI check validation".

![Het item Workflows in het menu AI Flows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/01-workflows-menu.png)

![De knop Create workflow op de pagina Workflows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/02-create-workflow-button.png)

## Stap 2. Stel het blok in

1. Klik in de sectie **Conditions** op **Add condition** en kies **AI validation fails**. Deze voorwaarde heeft geen instellingen.
2. Klik in de sectie **Actions** op **Add action** en kies **Regenerate with feedback** in het veld **Action**.
3. Stel **Maximum regenerations** in: hoe vaak Fozzels de tekst opnieuw mag genereren. De standaardwaarde is 2 en het maximum is 3.
4. Klik op **Apply**.

![De actie Regenerate with feedback kiezen in het venster Edit block](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/03-regenerate-with-feedback-action.png)

![Het veld Maximum regenerations en de knop Apply](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/04-maximum-regenerations.png)

:::tip
Zet **Maximum regenerations** tijdens het testen op 1. Zo ziet u het eindresultaat sneller en geeft u minder uit.
:::

## Stap 3. Wijs de workflow toe aan een flow

1. Open uw content flow.
2. Selecteer uw workflow in het veld **Workflows**.
3. **Sla de flow op.** De workflow wordt pas uitgevoerd nadat de flow is opgeslagen.

![De workflow selecteren in het veld Workflows van een content flow](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/05-assign-workflow-to-flow.png)

Heeft uw flow ook andere workflows (bijvoorbeeld "Replace text" of "Truncate"), dan kunt u ze combineren. Workflows worden uitgevoerd in de volgorde waarin ze zijn toegewezen.

## Stap 4. Controleer het resultaat

Genereer teksten in uw flow. Voor elk product gebeurt een van deze drie dingen:

**De tekst slaagt de eerste keer.** Er gebeurt niets bijzonders. De tekst gaat gewoon verder.

**De tekst slaagt niet, maar wel na een hergeneratie.** Terwijl Fozzels de tekst opnieuw genereert, wordt die als verdacht getoond met de reden "Did not pass AI validation and is being generated again: ...". Dit duurt enkele seconden tot minuten. Slaagt de nieuwe tekst, dan wordt de markering verwijderd en vervangt de nieuwe tekst de oude.

**De tekst slaagt elke keer niet.** Na de laatste hergeneratie blijft de tekst als verdacht gemarkeerd met de reden, bijvoorbeeld: "Did not pass AI validation after 2 generation(s): The Title value "All-Mountain Snowboard" is in English, not German as required." Lees de reden en bewerk daarna de tekst zelf, of pas de prompt aan en genereer opnieuw.

U kunt elke poging volgen in de [Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/) van het product: elke generatie wordt als een eigen revisie getoond.

:::note
De reden blijft alleen bewaard als de tekst uiteindelijk niet slaagt. Slaagt een hergeneratie, dan wordt de reden verwijderd en toont de geschiedenis de eerdere versie zonder reden.
:::

## Andere meldingen die u kunt zien

| Melding | Wat het betekent | Wat u doet |
| --- | --- | --- |
| AI validation could not check this value, so it is held for review. | De controle kon niet worden uitgevoerd, bijvoorbeeld door een tijdelijke fout. | Controleer de tekst zelf. |
| AI validation stopped because your balance is too low, so this value was not validated. | Uw tegoed is op. | Vul uw tegoed aan en genereer opnieuw. |
| Did not pass AI validation. It was not generated again because the flow, its workflows or the item changed in the meantime. | Er is iets veranderd terwijl de tekst op een hergeneratie wachtte. | Controleer de tekst of genereer die opnieuw. |

## Kosten

- Elke AI-controle is een kleine betaalde aanroep. Die kost veel minder dan een generatie.
- Elke hergeneratie kost evenveel als een normale generatie.
- Eén product kan dus maximaal kosten: 1 generatie + het maximumaantal hergeneraties + één controle per poging.

Kies het maximumaantal hergeneraties met dit in gedachten. Voor de meeste flows is 1 of 2 genoeg.

## Regels om te onthouden

| Regel | Wat het voor u betekent |
| --- | --- |
| Gebruik de twee blokken samen | AI validation fails vindt het probleem, Regenerate with feedback lost het op |
| De controle ziet uw prompt niet | Die beoordeelt of de tekst bruikbaar is in uw winkel, niet of die elke instructie volgt |
| Stijl, toon en lengte worden niet gecontroleerd | Gebruik daarvoor Replace text, Truncate of Mark suspicious |
| Maximaal 3 hergeneraties | Daarna gaat de tekst als verdacht naar u |
| Elke controle en elke hergeneratie wordt in rekening gebracht | Houd het maximum laag |
| Sla de flow op nadat u de workflow heeft toegewezen | Anders wordt de workflow niet uitgevoerd |

:::tip
Test de workflow eerst op 2–3 producten. Controleer de geschiedenis en de redenen en zet de workflow daarna aan voor de hele flow.
:::

## Houd de controle over uw content

Met een AI-controle in uw workflows wordt elke gegenereerde tekst gecontroleerd voordat die uw winkel bereikt, en worden onbruikbare teksten automatisch gecorrigeerd. U besteedt uw tijd alleen aan de teksten die u echt nodig hebben, en Fozzels zorgt voor de rest. Neem met Fozzels de volledige controle over uw content.

## Hulp nodig bij het instellen?

Heeft u hulp nodig bij het instellen van eigen workflows? Neem dan contact op met uw accountmanager of met Fozzels support.
