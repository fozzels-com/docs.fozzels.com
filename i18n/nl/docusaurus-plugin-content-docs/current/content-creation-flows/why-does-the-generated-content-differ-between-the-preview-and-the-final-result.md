---
id: '103000406129'
title: >-
  4.1.2.b Waarom verschilt de gegenereerde inhoud tussen het voorbeeld en het
  uiteindelijke resultaat?
sidebar_position: 4
slug: >-
  /content-creation-flows/why-does-the-generated-content-differ-between-the-preview-and-the-final-result
description: >-
  Vraag: waarom verschilt de inhoud in het voorbeeld van de inhoud die
  uiteindelijk naar de website is gesynchroniseerd? Antwoord: dit gedrag is
  verwacht
---

## Vraag

Waarom verschilt de inhoud die in het **voorbeeld** wordt weergegeven van de inhoud die uiteindelijk naar de website is gesynchroniseerd?

## Antwoord

Dit gedrag is verwacht.

Het **voorbeeld** (beschikbaar nadat u op **Opslaan en voorbeeld bekijken** hebt geklikt) is **niet** de uiteindelijke gegenereerde inhoud. Dit is een testgeneratie voor één product waarmee u kunt:

-   controleren of de prompt correct is geconfigureerd;
-   het type en de kwaliteit van inhoud controleren die de prompt produceert;
-   aanpassingen aanbrengen voordat u de volledige stroom uitvoert.

Wanneer u de werkelijke stroom start, verzendt Fozzels **nieuwe AI-aanvragen** voor elk product.

Hoewel de invoergegevens (productattributen, prompt en instellingen) hetzelfde blijven, genereert de AI een nieuw antwoord voor elke aanvraag. Aangezien door AI gegenereerde inhoud niet deterministisch is, kan de uitvoer variëren tussen het voorbeeld en de uiteindelijke generatie.

## Waar vind ik de uiteindelijke gegenereerde inhoud?

De inhoud die werkelijk is gegenereerd en naar uw website is gesynchroniseerd, is beschikbaar in:

-   **Batch List** – voor de specifieke stroomuitvoering.
-   **dagelijks totaal Batch List** – voor alle gegenereerde inhoud in alle stromen.

Deze rapporten bevatten de uiteindelijke uitvoer die tijdens de stroomuitvoering is verzonden en moeten voor verificatie in plaats van het voorbeeld worden gebruikt.

## Samenvatting

-   **Voorbeeld** = een testgeneratie voor promptvalidatie.
-   **Stroomuitvoering** = een nieuwe AI-generatie voor elk product.
-   Kleine verschillen tussen het voorbeeld en de uiteindelijke gesynchroniseerde inhoud zijn verwacht.
-   Vergelijk altijd uw website met de inhoud in **Batch List** of **dagelijks totaal Batch List**, omdat deze de werkelijke gesynchroniseerde resultaten bevatten.
