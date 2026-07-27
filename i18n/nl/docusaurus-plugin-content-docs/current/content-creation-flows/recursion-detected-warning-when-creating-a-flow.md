---
id: '103000313152'
title: '"Recursie gedetecteerd" waarschuwing bij het aanmaken van een stroom'
sidebar_position: 23
slug: /content-creation-flows/recursion-detected-warning-when-creating-a-flow
description: >-
  Wanneer u deze waarschuwing ziet, betekent dit dat u de variabele gebruikt
  om inhoud in te voeren uit hetzelfde attribuut waarnaar u de stroom schrijft.
---

Wanneer u deze waarschuwing ziet, betekent dit dat u de variabele gebruikt om inhoud in te voeren uit hetzelfde attribuut waarnaar u de stroom schrijft.

Bijvoorbeeld: u maakt een stroom om het veld "Beschrijving" (attribuut) automatisch bij te werken.

In het vak waar u de prompt kunt schrijven, hebt u dezelfde tag "{Beschrijving}" als invoerivariabele gebruikt.

Dit kan OK zijn, maar kan ook een probleem veroorzaken waarbij de inhoud elke dag wordt overschreven als u de optie "Automatisch inhoud regenereren wanneer productattribuut gewijzigd" ingesteld hebt.

In dit scenario wordt nieuwe inhoud in het veld "Beschrijving" geschreven door Fozzels.

Maar dat betekent dat dit product ook als "gewijzigd" is gemarkeerd, dus Fozzels zal morgen proberen inhoud voor dit product opnieuw te genereren - en opnieuw en opnieuw.

U kunt overwegen de optie **"Automatisch inhoud regenereren wanneer productattribuut gewijzigd"** **uit** te schakelen, of **dat invoerveld uit uw prompt te verwijderen**.
