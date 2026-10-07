---
title: '4.11.2. Workflows. Les 2: Blokken combineren in één workflow'
sidebar_position: 31
slug: /content-creation-flows/workflows-lesson-2-combining-blocks
description: >-
  Een workflow kan meerdere onderling verbonden blokken bevatten. Het resultaat
  van elk blok bepaalt welk blok daarna wordt uitgevoerd, zodat één workflow
  verschillende teksten op verschillende manieren kan verwerken.
---

Een workflow kan meerdere blokken bevatten die met elkaar zijn verbonden. Het resultaat van elk blok bepaalt welk blok daarna wordt uitgevoerd, zodat één workflow verschillende teksten op verschillende manieren kan verwerken.

Deze les bouwt voort op [4.11.1. Les 1: Aan de slag met Workflows](/content-creation-flows/workflows-lesson-1-getting-started/). Heeft u die nog niet gelezen? Begin dan daar: de les behandelt voorwaarden, acties en hoe resultaten worden verwerkt.

## Uitgangen van een blok: Yes, No en Always

Elk blok heeft één ingang aan de linkerkant en drie uitgangen aan de rechterkant.

![Een blok met de ingang en de uitgangen Yes, No en Always](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/01-block-outputs.png)

| Uitgang | Waar | Leidt naar het volgende blok wanneer |
| --- | --- | --- |
| **Yes** (blauw) | IF-deel | Aan de voorwaarden van het blok is voldaan |
| **No** (oranje) | IF-deel | Aan de voorwaarden van het blok is niet voldaan |
| **Always** (grijs) | THEN-deel | De acties van het blok zijn uitgevoerd |

Om twee blokken te verbinden, sleept u een lijn van een uitgangspunt van het ene blok naar het ingangspunt van het volgende. Dubbelklik op een lijn om er een notitie aan toe te voegen.

## De voorbeeldworkflow

Onze workflow heeft vijf blokken. Deze vervangt "cake" door "festive cake", controleert op een dubbel woord, markeert teksten zonder "cake" en voegt "Christmas" toe aan de feestdagengroet.

De blokken zijn als volgt verbonden:

| Van | Uitgang | Naar |
| --- | --- | --- |
| 1. cake → festive cake | **Yes** | 2. Is festive cake true |
| 1. cake → festive cake | **No** | 3. Is cake false (Mark suspicious) |
| 2. Is festive cake true | **No** | 4. Validated test (Mark suspicious) |
| 4. Validated test | **Always** | 5. Holiday → Christmas Holiday! |

De uitgangen **Yes** en **Always** van blok 2, en de uitgangen van blok 3, zijn niet verbonden. Wat dat betekent, ziet u bij Test 1 hieronder.

## De blokken één voor één

### 1. cake → festive cake

Als de tekst "cake" bevat, wordt dit vervangen door "festive cake". Match case staat aan, dus "Cake" en "CAKE" blijven ongewijzigd. **Yes** leidt naar blok 2, **No** naar blok 3.

![Instellingen van blok 1](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/03-block-1-settings.png)

### 2. Is festive cake true

Controleert op een dubbel woord en herstelt het. **No** leidt naar blok 4.

![Instellingen van blok 2](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/04-block-2-settings.png)

:::note
In deze schermafbeelding is het woord geschreven als "fastive". Blok 1 schrijft "festive", dus deze voorwaarde komt nooit overeen. Gebruik in uw eigen workflow `festive festive cake` en `festive festive` → `festive`.
:::

### 3. Is cake false

Een blok zonder voorwaarden. Het markeert het resultaat met de reden "Cake not found :(". De uitgangen zijn niet verbonden.

![Instellingen van blok 3](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/05-block-3-settings.png)

### 4. Validated test

Ook zonder voorwaarden. Het markeert het resultaat met de reden "Checked! Please sync!". **Always** leidt naar blok 5.

![Instellingen van blok 4](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/06-block-4-settings.png)

:::note
Mark suspicious blokkeert de synchronisatie met de winkel. Deze reden is alleen een testmarkering die laat zien dat het blok is uitgevoerd. Schrijf in een echte workflow een reden die de reviewer vertelt wat er gecontroleerd moet worden.
:::

### 5. Holiday → Christmas Holiday!

Als de tekst "Happy Holiday!" bevat, wordt dit vervangen door "Happy Christmas Holiday!".

![Instellingen van blok 5](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/07-block-5-settings.png)

## Een testtekst genereren

Om de workflow zelf uit te proberen, gebruikt u deze prompt in uw flow. Deze levert een tekst op die lijkt op die in deze les en eindigt met "Happy Holiday!", zodat blok 5 iets heeft om te vervangen.

```text
Write a short, warm, and appealing delivery message for the product. Mention that we will deliver the cake in beautiful gift packaging, together with a personal note, to the address provided by the customer.
The first part of the text should contain approximately 80 characters and describe the cake delivery in a natural, friendly, and elegant way.

Do not use capitalization randomly. Each variation should fit naturally into the sentence and context.
The final sentence must be exactly: "Happy Holiday!"
Keep the message friendly, festive, elegant, warm, and suitable for an online cakes shop.
```

Vervang voor Test 1 "cake" in de prompt door een ander product, bijvoorbeeld "sweets", zodat de tekst geen "cake" bevat.

## Test 1: tekst zonder "cake"

**Pad:** blok 1 → No → blok 3 → einde.

![Resultaat zonder cake, gemarkeerd met "Cake not found :("](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/08-test-1-result.png)

- De reden "Cake not found :(" laat zien dat de **No**-tak werkte.
- Blok 3 heeft geen voorwaarden, maar de actie is toch uitgevoerd. Een **blok zonder voorwaarden voert zijn acties uit**.
- "Happy Holiday!" is **niet** vervangen, hoewel de tekst het bevat. De uitgangen van blok 3 zijn niet verbonden, dus blok 5 is nooit bereikt. **Wanneer een uitgang niet is verbonden, stopt de verwerking daar.**

## Test 2: tekst met "cake"

**Pad:** blok 1 → Yes → blok 2 → No → blok 4 → Always → blok 5.

![Resultaat met festive cake en Happy Christmas Holiday](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/09-test-2-result.png)

- "delicious **festive cake**": blok 1 heeft het woord vervangen en de **Yes**-tak genomen.
- Geen dubbel woord, dus blok 2 nam de **No**-tak.
- De reden "Checked! Please sync!" laat zien dat blok 4 is uitgevoerd.
- "Happy **Christmas** Holiday!": blok 5 is via **Always** bereikt en heeft de vervanging gedaan.

## Regels om te onthouden

| Regel | Wat het voor u betekent |
| --- | --- |
| Yes / No kiezen het volgende blok | Bouw aparte paden voor teksten die aan een voorwaarde voldoen en teksten die dat niet doen |
| Always gaat verder na de acties | Gebruik het om door te gaan naar de volgende controle, wat het blok ook deed |
| Een blok zonder voorwaarden voert zijn acties uit | Handig voor een laatste stap, zoals een controlemarkering |
| Een niet-verbonden uitgang beëindigt de verwerking | Verbind elk pad dat latere blokken moet bereiken, anders worden ze overgeslagen |
| Mark suspicious stopt de workflow niet | Latere blokken worden na een markering nog steeds uitgevoerd |

:::tip
Volg vóór het opslaan elk pad op het canvas met uw vinger: "als de tekst X bevat, waar gaat het dan naartoe?" Een ontbrekende lijn is de meest voorkomende reden dat een blok nooit wordt uitgevoerd.
:::
