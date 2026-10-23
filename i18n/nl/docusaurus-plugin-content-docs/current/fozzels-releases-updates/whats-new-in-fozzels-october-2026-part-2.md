---
title: "Nieuw in Fozzels: oktober 2026, deel 2"
sidebar_position: 19
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2
description: >-
  Workflows die teksten opnieuw genereren met AI-feedback, afbeeldingen opnieuw
  genereren met nieuwe instellingen, flexibele export naar Excel en CSV, betere
  ALT-teksten, nieuwe AI-modellen, spraakchat met Jane en automatische AI-labels
  voor afbeeldingen en video's.
---

Het tweede deel van onze oktober-updates tilt uw content naar een hoger niveau. Dit staat er voor u klaar:

- **Een nieuw niveau van resultaatkwaliteit.** Een nieuw type workflow met AI-validatie en feedback: Fozzels controleert uw teksten en blijft ze verbeteren tot ze kloppen.
- **Nog dichter bij de perfecte afbeelding.** Bij het opnieuw genereren van afbeeldingen kunt u nu de bronfoto van het product, het AI-model, de prompt en de presets wijzigen.
- **Uw resultaten, uw spreadsheets.** Download rapporten in Excel of CSV en kies precies welke gegevens in het bestand komen.
- **Betekenisvolle ALT-teksten, ook waar eerst placeholders stonden.** Fozzels vindt nu afbeeldingen waarvan de ALT alleen een bestandsnaam is en maakt er echte beschrijvingen voor.
- **Nieuwe AI-modellen, spraakchat met Jane en automatische AI-labels** voor afbeeldingen en video's.

Hier leest u alles wat nieuw is en hoe u het gebruikt.

## Highlights

### Automatisch opnieuw genereren: teksten die uw regels volgen

Workflows kunnen een tekst nu automatisch opnieuw genereren als die niet aan uw eisen voldoet. Voeg de nieuwe actie **Regenerate with feedback** toe aan een willekeurig workflowblok: de tekst wordt samen met de reden vastgehouden voor controle, en Fozzels genereert hem op de achtergrond opnieuw met die feedback. Onder **Maximum regenerations** kiest u hoeveel pogingen u toestaat, tot maximaal 3.

Als u AI-validatie gebruikt (de voorwaarde **AI validation fails**), worden de extra AI-verzoeken voor de controle apart in rekening gebracht.

**Ook zonder workflow.** Als u zo'n workflow niet hebt ingesteld, genereert Fozzels als verdacht gemarkeerde teksten toch opnieuw, maar dan zonder feedback, volgens de gewone regels voor verdachte content, en niet meteen maar in de volgende generatieronde.

**Nieuwe actie: Sanitize text.** Schoont een tekst op dezelfde manier op als een nieuwe generatie: herstelt gecodeerde tekens zoals `&amp;`, zet markdown om en verwijdert HTML-tags die niet zijn toegestaan.

### Flexibele export naar Excel en CSV

U kunt resultaten nu exporteren naar Excel of CSV en precies kiezen welke kolommen in het bestand komen, bijvoorbeeld alleen de SKU en de gegenereerde beschrijving. Geef de kolom met gegenereerde tekst de naam van de attribuutcode, en het bestand is klaar om te importeren in uw winkel of ERP. Fozzels onthoudt uw selectie voor de volgende keer.

### Afbeeldingen opnieuw genereren met nieuwe instellingen

Niet tevreden met een gegenereerde afbeelding? De knop Regenerate in de resultaten van uw Image Flow opent nu een venster waarin u de instellingen voor dat ene resultaat kunt aanpassen voordat u het opnieuw genereert:

- **Productfoto's.** Kies van welke productfoto's de AI uitgaat, bijvoorbeeld een andere hoofdfoto als de oorspronkelijke hoek niet de beste was. U kunt meerdere foto's selecteren, zoveel als het model ondersteunt.
- **AI-model.** Schakel over naar een ander model, zoals Nano Banana in plaats van GPT Image, en wijzig het formaat, de grootte of het aantal afbeeldingen.
- **Prompt en presets.** Pas de instructies aan of voeg presets zoals achtergrond, stijl of scène toe, wijzig ze of verwijder ze.

Uw wijzigingen gelden alleen voor dit resultaat: de instellingen van de Flow blijven hetzelfde en andere producten worden gegenereerd zoals voorheen. Houd er rekening mee dat de nieuwe afbeelding de vorige definitief vervangt; het venster herinnert u daaraan voordat u begint.

De resultaatpagina toont nu ook meer details: wanneer de afbeelding is aangemaakt, gegenereerd en opnieuw gegenereerd, het aantal afbeeldingen, de status van de Flow en welk AI-model is gebruikt.

### Afbeeldingen met placeholder-ALT-teksten vinden

Vaak is de ALT van een afbeelding technisch gezien ingevuld, maar is het slechts een placeholder: een bestandsnaam zoals "IMG_2045.jpg" of gewoon de productnaam. Voor kopers en zoekmachines is dat bijna hetzelfde als helemaal geen ALT, maar Fozzels beschouwde zulke ALT-teksten als ingevuld en sloeg deze afbeeldingen over.

ALT Flows hebben nu een nieuwe Media Gallery-voorwaarde, **has an image whose ALT contains**. Voer bijvoorbeeld ".jpg" in, en Fozzels vindt elke afbeelding waarvan de ALT alleen een bestandsnaam is en genereert er betekenisvolle ALT-teksten voor. Wilt u ook afbeeldingen zonder ALT meenemen, voeg dan een voorwaardengroep toe met "has an image with an empty ALT" en uw ALT-voorwaarde, en stel deze in op "Any condition".

### AI-labels in gegenereerde afbeeldingen en video's

Elke afbeelding en video die Fozzels genereert, bevat nu een ingebouwd, machineleesbaar label dat deze als AI-gegenereerd markeert, in lijn met de transparantie-eisen van de EU AI Act. Het label wordt opgeslagen in de metadata van het bestand. Het is dus onzichtbaar voor kopers en verandert niets aan hoe uw afbeeldingen eruitzien, maar het blijft behouden na synchronisatie naar uw winkel.

Bij afbeeldingen ziet u het ook in Fozzels: de versiegeschiedenis van het resultaat toont de stap **Labelled as AI-generated**.

**Waarom dit belangrijk is:** u kunt AI-beelden met vertrouwen in uw winkel gebruiken, zonder handmatig labels toe te voegen.

### Praat met Jane

U kunt nu tegen Jane praten in plaats van te typen. Klik op de microfoon in het chatveld, stel uw vraag, en Jane kan haar antwoord voorlezen. Liever stilte? Zet gesproken antwoorden uit met het luidsprekericoon naast de microfoon.

### Nieuwe AI-modellen

We breiden ons aanbod aan modellen steeds uit zodra AI-aanbieders nieuwe modellen uitbrengen, zodat u altijd de beste keuze voor elke taak kunt maken.

**Voor teksten**

**Gemini 4 Argon.** Het nieuwe topmodel van Google, gebouwd voor nauwkeurigheid. Het is een van de modellen die het minst snel feiten verzinnen, wat het een sterke keuze maakt voor gedetailleerde productcontent met veel specificaties.

**Claude Haiku 5.5.** Het snelste en voordeligste model van Anthropic, ideaal voor het genereren van content voor grote catalogi.

**Voor afbeeldingen**

**GPT Image 2.5 Flare.** Snel en hoogwaardig afbeeldingen maken en bewerken voor dagelijks gebruik.

**GPT Image 2.5 Sunburst.** De optie met de hoogste kwaliteit van OpenAI, met precieze bewerkingen die de rest van de afbeelding, inclusief uw product, ongewijzigd laten.

**Nano Banana 2.1.** Betere kwaliteit en een lagere prijs dan Nano Banana 2.

**Voor video's**

**HeyGen Video 1.0.** Een veel voordeliger alternatief voor Veo.

We hebben ook de oudere modellen GPT-4.1 en GPT Image 1 uitgefaseerd.

## Contentkwaliteit

- **Minder onterechte verdachte markeringen.** De controle op verdachte content is nu nauwkeuriger. Gewone productspecificaties met getallen, zoals "Breite – 80", "+25 °C" of "= 60", worden niet meer gemarkeerd. Alleen echte berekeningen die de AI per ongeluk in de tekst heeft laten staan, zoals "59 + 1 = 60", worden als verdacht gemarkeerd. Zo besteedt u minder tijd aan het controleren van teksten die in orde zijn.
- **Minder AI-opmerkingen in uw teksten.** We hebben de bescherming tegen serviceopmerkingen van het AI-model in uw afgeronde content verder versterkt.
- **Jane laat uw attributen intact.** Wanneer Jane een prompt herschrijft, voegt ze attributen zoals `{{name}}` of `{{ean}}` nu correct in, zodat uw prompts blijven werken met echte productgegevens.

## Image en Video Flows

### Gegenereerde afbeeldingen die actueel blijven

Image Flows hebben een nieuwe optie: **Process the product again when its source image changes**. Wanneer een afbeelding op de galerijpositie die uw Flow gebruikt in uw winkel wordt vervangen, verwijderd of toegevoegd, merkt Fozzels dat bij de volgende productimport op en genereert een nieuwe afbeelding van de bijgewerkte foto.

Goed om te weten:

- Afbeeldingen die Fozzels heeft gemaakt, tellen niet als wijziging, ook niet als ze de oorspronkelijke foto hebben vervangen, en producten met handmatig gekozen afbeeldingen worden nooit opnieuw verwerkt.
- Alleen resultaten die zijn aangemaakt nadat u de optie hebt ingeschakeld, worden gecontroleerd, dus er komen geen onverwachte massale hergeneraties.
- Elke nieuwe generatie wordt zoals gebruikelijk in rekening gebracht. Totdat de nieuwe afbeelding klaar is, blijft het huidige resultaat actief.

### Ook nieuw

- **Verwijderde producten zijn duidelijk gemarkeerd.** Producten die uit uw catalogus zijn verwijderd, tonen nu ook in Image en Video Flows de status "Removed from catalog" en worden niet langer meegeteld als "to be synchronized".
- **Geen eindeloze nieuwe pogingen meer.** Als een productfoto niet meer kan worden gedownload, stopt Fozzels met opnieuw proberen en markeert de foto als niet beschikbaar.
- **Miniaturen voor gegenereerde video's**, zodat u ze in één oogopslag herkent.

## Rapporten en filters

**Fouten in één oogopslag.** In het generatierapport toont het filter "Display only with errors" nu alleen mislukte generaties, met de werkelijke foutmelding in plaats van "Unknown error occurred".

**Meldingen na opnieuw ophalen.** Wanneer u producten opnieuw ophaalt met een massa-actie, krijgt u nu direct een melding met het resultaat.

## App en talen

- **Fozzels in het Italiaans.** De app is nu beschikbaar in het Italiaans, en het Help Center in het Italiaans en Frans.
- **Vaarwel, oude Chat Sandbox.** We hebben de chatbot uit 2023 uitgefaseerd. Jane, uw AI-assistent, staat altijd voor u klaar.
- **Kleine verbeteringen in de interface.** De eerste integratie van uw account is nu standaard geselecteerd in keuzelijsten, en de lijst met AI-aanbieders gaat niet meer vanzelf open wanneer u een Flow opent.

## Integratie-updates

### Magento

**Teksten voor alle store views.** Zet **Also save as the default value for all store views** aan, en bij elke push wordt de tekst opgeslagen in de store view van de Flow en, als standaardwaarde, in elke andere store view. Store views met een eigen waarde voor het attribuut blijven die tonen.

Goed om te weten: als een Flow voor een andere store view dit attribuut in zijn prompt gebruikt en automatisch een nieuwe tekst maakt wanneer een attribuut wijzigt, ziet die Flow de nieuwe standaardwaarde als een wijziging en genereert hij nieuwe teksten voor producten zonder eigen waarde.

### Magento en NextChapter

**Bestaande productfoto's vervangen.** Nieuwe gegenereerde afbeeldingen kunnen nu de huidige productfoto's vervangen, en de vervanging wordt na synchronisatie correct weergegeven in de mediagalerij van Fozzels.

### Shopware

**Ondersteuning voor AVIF-afbeeldingen.** Producten met AVIF-foto's kunnen nu ook worden gebruikt voor tekstgeneratie: voordat we ze naar de AI sturen, zetten we deze foto's om naar een formaat dat het model ondersteunt.

### CSV / Raw File

Bestanden met verborgen tekens aan het begin, waardoor de naam van de eerste kolom tussen aanhalingstekens verscheen, worden nu correct gelezen.
