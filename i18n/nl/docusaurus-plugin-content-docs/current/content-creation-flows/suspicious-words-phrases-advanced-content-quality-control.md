---
id: '103000390709'
title: '4.7.4 Verdachte woorden en frasen: Geavanceerde inhoudsqualiteitscontrole'
sidebar_position: 21
slug: /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: Met de functie Suspicious Words & Phrases markeert u gegenereerde teksten met woorden, frasen of opmerkingachtige patronen die u niet gepubliceerd wilt hebben, zodat u ze kunt controleren voordat ze live gaan.
keywords:
- werkstroom
---

De functie **Suspicious Words & Phrases** markeert gegenereerde teksten met woorden, frasen of opmerkingachtige patronen die u niet gepubliceerd wilt hebben. Gemarkeerde completions krijgen de status **Suspicious**, zodat u ze kunt filteren en controleren voordat ze live gaan.

De functie vangt AI-artefacten (excuses, opmerkingen aan de lezer, achtergebleven opmaakcode), technische restanten en alle termen die u zelf wilt blokkeren, in alle talen tegelijk.

## Waar vindt u het

Ga naar **Settings** > **Flow** en scrol naar het blok **Suspicious Words & Phrases**. De instellingen gelden globaal voor al uw flows.

![Instellingen voor Suspicious Words & Phrases](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-01-settings.png)

## Hoe de herkenning werkt

Een woord wordt standaard als heel woord herkend. Voeg `*` toe aan het begin of einde om de zoekactie te verbreden. Hoofdletters of kleine letters maken nooit verschil.

| Invoer | Wat het vindt |
| --- | --- |
| `bright` | alleen _bright_, niet _brightness_ of _ultrabright_ |
| `bright*` | ook _brightness_ en _brightly_ |
| `*bright` | ook _ultrabright_ |
| `*bright*` | de tekst op elke plek, inclusief _ultrabrightness_ |
| `bri*ght` | exact de tekst `bri*ght` — `*` werkt alleen aan het begin of einde |

Dezelfde regels gelden voor frasen. `antwoord` markeert bijvoorbeeld nooit _verantwoorde_, `antwoord*` markeert ook _antwoorden_, en `*seo*` wordt overal gevonden, zelfs in _museo_.

## Wat wordt gemarkeerd

Drie bronnen voeden de controle: standaardwoorden, ingebouwde patronen en uw eigen woorden.

### Standaard verdachte woorden

Fozzels wordt geleverd met een kant-en-klare lijst van veelvoorkomende AI-artefacten in meerdere talen, zoals `*sorry*`, `*please*`, `*note:*`, `*markdown*`, `*<html*`, `*Let op:*` en `*het spijt me*`. Vink een woord uit als u het niet nodig hebt, en het wordt niet meer gemarkeerd.

### Ingebouwde patronen

Ingebouwde patronen zoeken naar de _vorm_ van een AI-opmerking in plaats van naar een exact woord. Ze vangen formuleringen die het model nog nooit eerder heeft gebruikt, zoals:

- "Let's" of "Let me" voor een werkwoord, zoals in _"Let's re-verify"_
- Een controle die wordt afgeteld, zoals in _"One last check"_ of _"Final check"_
- Een vraag over de tekst zelf, zoals in _"Is the wording accurate?"_
- Een resultaat dat wordt overhandigd, zoals in _"Final answer"_ of _"Here is the"_
- Tekens die worden geteld, zoals in _"59 chars"_ of _"character limit"_
- De instructies die worden teruggegeven, zoals in _"the prompt says"_ of _"mandatory words"_
- Het woord "I" voor een werkwoord, zoals in _"I forgot"_ of _"I'll use"_

De volledige lijst staat in de instellingen, met een voorbeeld bij elk patroon. Patronen kunt u niet bewerken — klik op een patroon om het aan of uit te zetten. Zet een patroon uit als het uw eigen tekst markeert.

De grijs weergegeven patronen staan standaard uit. Ze herkennen vormen die ook in gewone teksten voorkomen, zoals een vraag in een productfaq of een regel die begint met _Great,_. Zet er alleen een aan als u liever een paar van uw eigen zinnen controleert dan zulke opmerkingen mist.

### Uw eigen woorden

Typ onder **Add your own suspicious words** een woord of frase en druk op **Enter**. Gebruik dit voor namen van concurrenten, gevoelige merktermen of fouten die specifiek zijn voor één taal. U kunt talen mengen in één lijst, wat handig is voor winkels die in meerdere talen publiceren.

## Hoe het markeren werkt

Elke nieuwe generatie wordt gecontroleerd op basis van uw huidige instellingen, zodra deze is gemaakt. Bij een match gebeurt het volgende:

- De completion krijgt de status **Suspicious**.
- De gevonden woorden worden **gemarkeerd** in de teksteditor, zodat u meteen ziet wat de markering veroorzaakte.
- U beslist wat u doet: de tekst **handmatig bewerken**, **opnieuw genereren**, of **de lijst aanpassen** als de markering een vals alarm is.

In de completionlijst ziet een gemarkeerd resultaat er zo uit. Het gevonden woord (hier _hello_) is gemarkeerd in de tekst. De knop **Sync Now** toont een waarschuwingsicoon en het bericht _"Completion looks suspicious, possible AI recommendations found."_

![Een verdachte completion in de completionlijst](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-02-suspicious-completion.png)

Een completion zoals deze moet u niet ongewijzigd synchroniseren. Genereer hem opnieuw of bewerk de tekst om de gemarkeerde woorden te verwijderen.

Wilt u alleen gemarkeerde items bekijken? Zet dan **Show only suspicious** aan in de **Daily Total Batch List**. U slaat de schone resultaten over en gaat direct naar de teksten die aandacht nodig hebben.

## Bestaande completions bijwerken

Een wijziging van de lijst geldt alleen voor nieuwe generaties. Bestaande completions worden **niet** automatisch opnieuw gecontroleerd — hun verdachte status blijft zoals die was totdat u deze opnieuw berekent.

Zo past u uw nieuwe instellingen toe op bestaande teksten:

1.  Open de **Content Completion List** van het attribuut dat u wilt controleren.
2.  Selecteer de producten die u opnieuw wilt controleren.
3.  Open het menu **Actions** en kies **Update Suspicious Flag**.

![Update Suspicious Flag in het menu Actions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-03-update-suspicious-flag.png)

De geselecteerde completions worden opnieuw gescand op basis van uw huidige lijst en patronen. Producten die niet meer overeenkomen, verliezen de verdachte status en zijn klaar om te synchroniseren.

**Voorbeeld:** u hebt `sorry` toegevoegd als verdacht woord en lanceert daarna een merk met de naam _Sorry Boy_. Honderden beschrijvingen zijn nu gemarkeerd. Verwijder `sorry` of vink het uit in **Settings**, en voer daarna **Update Suspicious Flag** uit op die producten — de markeringen verdwijnen en u kunt ze in bulk synchroniseren zonder elke tekst te bewerken.

## Tips

- Begin met hele woorden en voeg `*` alleen toe als u varianten nodig hebt. `*seo*` vangt ook _museo_, wat gewone tekst kan markeren.
- Als een ingebouwd patroon in uw niche steeds goede tekst markeert, zet het dan uit in plaats van teksten één voor één te bewerken.
- Voer na elke wijziging van de lijst **Update Suspicious Flag** uit op de producten die u opnieuw wilt laten controleren.

Samen geven de woordenlijst, de patronen en de massale actie u één plek om te bepalen wat uw winkel bereikt — in elke flow en elke taal.
