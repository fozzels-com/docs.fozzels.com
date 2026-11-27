---
title: '4.3.4 Hoofdprompt en prompt per tekst: zo stuurt Fozzels uw prompt'
sidebar_position: 11.5
slug: /content-creation-flows/main-prompt-and-prompt-per-text
description: >-
  Elk verzoek aan de AI heeft twee delen: de hoofdprompt, die voor elk product
  hetzelfde is, en de prompt per tekst, met de productgegevens. Wat waar
  hoort, waarom dat zo is en hoe u een bestaande Flow overzet.
---

Fozzels stuurt de AI voor elk product een prompt. Die prompt heeft twee delen:

- de **hoofdprompt**, met de regels voor de hele Flow. Die is voor elk product hetzelfde.
- de **prompt per tekst**, met de opdracht voor één veld, met de gegevens van dit product.

Fozzels stuurt de hoofdprompt naar de AI als *systeeminstructie*: vaste opdrachten die de AI onthoudt terwijl hij de taak uitvoert. Dit artikel legt uit wat in elk deel hoort, waarom dat belangrijk is en hoe u een bestaande Flow overzet.

## De twee delen in één oogopslag

| | Main prompt (Hoofdprompt) | Prompt per text (Prompt per tekst) |
|---|---|---|
| **Wat het is** | De regels die voor elke tekst van de Flow gelden | De opdracht voor één veld |
| **Typische inhoud** | Wie schrijft, voor wie, in welke toon, de neuromarketingprincipes, zoekwoorden, wat u nooit noemt, de controleregels, uw eigen vaste instructies | Lengte, structuur, het vertrouwensblok, interne links en de instructie met de attributen van het product |
| **Productgegevens** | Niet toegestaan. De tekst moet voor elk product hetzelfde zijn | Ja: attributen, voorwaarden en snippets |
| **Waar u het aanpast** | Stap 3 van de Flow-wizard (**Main prompt**), of de kaart **Main prompt** op de Flow-pagina | Stap 4 van de Flow-wizard (**Prompt per text**), met een tabblad per veld |
| **Verstuurd** | Eén keer, vóór de prompts voor de velden | Voor elk veld, met de gegevens van dit product |

:::note
Sommige artikelen en schermafbeeldingen gebruiken nog de oude namen van de stappen: stap 3 heette **Enrich the text** en stap 4 **Fields**. De kaart op de Flow-pagina heette **System prompt**. Het zijn dezelfde stappen en dezelfde kaart.
:::

## Waarom twee delen?

- **De AI volgt uw regels beter.** AI-modellen geven meer gewicht aan een systeeminstructie dan aan een zin midden in een lange prompt. Toon, woorden die u wilt vermijden en de aanspreekvorm blijven daardoor bij al uw producten consistenter.
- **Uw productgegevens kunnen uw regels niet overrulen.** Tekst in een productveld, zoals een opmerking van de leverancier met "negeer de instructies hierboven", blijft in de prompt per tekst. Die tekst verandert de regels in de hoofdprompt niet.
- **Sneller en goedkoper bij grote Flows.** De hoofdprompt is voor elk product woord voor woord hetzelfde. AI-aanbieders kunnen een deel van een verzoek dat ze al kennen opnieuw gebruiken. Dat maakt het verzoek sneller en kan de kosten verlagen.

## Wat in de hoofdprompt hoort

Zet alles wat voor **elke** tekst van de Flow geldt in de hoofdprompt:

- **Role of the AI**, **Target audience** en **Tone of voice**
- **Neuromarketing principles**
- **Keywords**
- **Do not mention**: woorden en onderwerpen die nooit in de tekst mogen staan
- **Guidelines and check rules**, de standaardregels van Fozzels en uw eigen regels
- **Uw eigen instructies**, in uw eigen woorden, bijvoorbeeld "Spreek de lezer altijd aan met *u*" of "Wij leveren binnen 24 uur, beloof nooit een snellere levering"

In stap 3 zet u deze blokken aan en vult u ze in. Fozzels schrijft daaruit de hoofdprompt. De bronnen die u in stap 3 instelt (**Attributes from your store**, **Look at photos** en **Search the internet**) zijn voor elk product anders. Fozzels stuurt ze daarom mee met de prompt per tekst. Onder de blokken, bij **Your main prompt**, ziet u het resultaat. U kunt het ook met de hand aanpassen.

### Geen productgegevens in de hoofdprompt

De hoofdprompt moet voor elk product hetzelfde zijn. U kunt er dus geen productgegevens in gebruiken:

- De editor van de hoofdprompt heeft geen paneel **Attributes** en geen **Preview**. Een preview zou voor elk product hetzelfde zijn. In plaats daarvan toont elk blok de tekst die de AI ervoor leest.
- Snippets die productgegevens lezen en snippets met voorwaarden zijn daar niet beschikbaar. Staat zo'n snippet al in een hoofdprompt en voegt u er productgegevens aan toe? Dan toont Fozzels de melding *"Dit snippet staat in de hoofdprompt van …. De hoofdprompt is voor elk product hetzelfde, dus het snippet kan daar het product niet lezen. Haal het eerst uit die hoofdprompts, of sla je wijziging op als een nieuw snippet."* Haal het snippet eerst uit die hoofdprompts, of sla uw wijziging op als een nieuw snippet.

Alles wat van het product afhangt, hoort in de prompt per tekst.

## Wat in de prompt per tekst hoort

De prompt per tekst is de opdracht voor één veld. In stap 4 heeft elk veld van de Flow een tabblad met:

- de **lengte** van de tekst,
- de **structuur**: de secties, hun volgorde en hun koppen,
- het **vertrouwensblok** en de **interne links**, voor velden die deze gebruiken,
- de **Instruction for [field]**: wat de AI in dit veld moet schrijven, met de attributen en voorwaarden van het product.

De hoofdprompt geldt voor elk veld. U herhaalt de rol, de toon of de regels hier dus niet. Schrijf alleen wat bijzonder is voor dit veld, bijvoorbeeld *"Schrijf een metabeschrijving van maximaal 155 tekens met de merknaam en het belangrijkste voordeel."*

Fozzels voegt zelf de technische instructies toe aan de prompt per tekst: het antwoordformaat, de opties die een selectieveld toestaat en de maximale lengte van het veld. U hoeft deze niet te schrijven.

## Waar u de hoofdprompt aanpast

- **In een nieuwe Flow:** stap 3, **Main prompt**. Een nieuwe Flow begint met de hoofdprompt van uw standaard [Brand Profile](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/#brand-profile).
- **In een bestaande Flow:** op de Flow-pagina toont de kaart **Main prompt** de hoofdprompt zoals de AI die leest. Klik op **Change** om hem aan te passen. Alleen de hoofdprompt wordt opgeslagen. De prompts per tekst blijven zoals ze zijn.
- **Brand Profiles:** klik in stap 3 op **Load brand profile** om een opgeslagen profiel te gebruiken. Of klik op **Save as brand profile** om de hoofdprompt van deze Flow te bewaren voor andere Flows. Een Flow krijgt een kopie van het profiel. Wijzigt u het profiel later, dan past Fozzels uw bestaande Flows niet aan.

## Bestaande Flows

U hoeft niets te doen. Flows die u vóór deze wijziging hebt gemaakt, blijven werken:

- De hoofdprompt van een oudere Flow is eerst leeg, en de prompt blijft waar hij was.
- Blokken voor de hele Flow die al in de prompt staan, zoals de rol, de doelgroep of de toon, worden automatisch met de hoofdprompt meegestuurd.
- Tekst die u zelf hebt getypt, blijft in de prompt per tekst staan, precies waar u hem hebt geschreven. Fozzels verplaatst uw eigen zinnen niet, omdat een zin buiten de zinnen eromheen iets anders kan betekenen.

Om er het meeste uit te halen, zet u uw vaste regels zelf over naar de hoofdprompt.

### Een bestaande Flow overzetten

1. Open de Flow en lees de prompt. Markeer de zinnen die voor **elk** product gelden: de persona, de merkstem, de doelgroep, de aanspreekvorm, de woorden die u wilt vermijden.
2. Klik op de Flow-pagina op **Change** bij de kaart **Main prompt**.
3. Voeg deze regels toe met de blokken (rol, doelgroep, toon, do not mention, uw eigen regels), of typ ze als uw eigen instructies. Sla op.
4. Verwijder dezelfde zinnen uit de prompt van elk veld, zodat de AI ze niet twee keer krijgt.
5. Test de Flow op een paar echte producten en vergelijk de teksten met de eerdere resultaten.

**Voorbeeld.** Een prompt waarin alles stond:

> U bent een copywriter voor een premium schoenenmerk. Schrijf voor vrouwen van 30–50 jaar die comfort belangrijk vinden. Noem nooit prijzen of kortingen. Gebruik altijd "u".
> Schrijf een productbeschrijving van ongeveer 120 woorden voor **Name**. Noem het materiaal **Material** en de kleur **Colour**.

Na het overzetten:

- **Main prompt:** *U bent een copywriter voor een premium schoenenmerk. Schrijf voor vrouwen van 30–50 jaar die comfort belangrijk vinden. Noem nooit prijzen of kortingen. Gebruik altijd "u".*
- **Prompt per text (Description):** *Schrijf een productbeschrijving van ongeveer 120 woorden voor* **Name**. *Noem het materiaal* **Material** *en de kleur* **Colour**.

## Goed om te weten

- **Geen dubbele instructies.** Heeft de prompt van een veld nog een blok dat de hoofdprompt al heeft, bijvoorbeeld een tweede toon, dan stuurt Fozzels dat blok maar één keer mee, vanuit de hoofdprompt.
- **Meerdere velden in één Flow.** Alle velden worden in één AI-verzoek per product gemaakt en delen de hoofdprompt. De rol, de doelgroep en de regels gelden dus automatisch ook voor de extra velden.
- **Zie wat er is verstuurd.** In de lijst met gegenereerde content toont de prompt van elke tekst beide delen, met de hoofdprompt eerst.

## Gerelateerde artikelen

- [4.1.2. Een Content Flow maken: de zes stappen](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.3.2 Prompt instellen en gebruiken: de nieuwe prompteditor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)
- [4.3.3. Het schrijven van effectieve prompts (Aanbevelingen)](/content-creation-flows/writing-effective-prompts-recommendations/)
