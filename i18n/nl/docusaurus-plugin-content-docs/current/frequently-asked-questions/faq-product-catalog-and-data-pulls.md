---
title: 'FAQ: Productcatalogus en datapulls'
sidebar_position: 8
unlisted: true
slug: /frequently-asked-questions/faq-product-catalog-and-data-pulls
description: >-
  Hoe de nachtelijke cataloguseenheidspull werkt, waarom nieuwe of ontbrekende
  producten niet verschijnen, varianten en categorieverschillen, aangepaste
  atribuutfiltering en aangepaste pullschema's.
---

## De productcatalogus werkt bij op nachtelijk schema. Hoe werkt dit?

De catalogus werkt automatisch elke nacht om 01:30 bij. Na de pull worden alle flows bijgewerkt met de nieuwste gegevens. Nieuwe producten die aan flowfilters voldoen, worden automatisch toegevoegd.

## Nieuwe producten die ik aan mijn webshop heb toegevoegd, verschijnen niet in Fozzels.

Producten verschijnen na de volgende geplande cataloguseenheidspull (nachtelijk om 01:30). Om ze direct te zien, triggert u een handmatige productpull.

## Fozzels toont minder producten dan verwacht — sommige kleurcombinaties ontbreken.

Fozzels filtert producten op basis van specifieke voorwaarden en groepeert op productkleurniveau, met uitzondering van maatvariantenzen. Vergelijk uw filtervoorwaarden met uw database om discrepanties te vinden.

## Ik kan een specifieke productcategorie in Fozzels niet vinden.

De categoriestructuur in Fozzels kan anders zijn dan in uw winkel. Gebruik filters om te zoeken. Als u het nog steeds niet kunt vinden, neem contact op met support met een screenshot van uw admin.

## Producten ontbreken uit mijn flow vanwege een leeg voorraadaduut.

Controleer de filtervoorwaarden van de flow. Als een voorraadvoorwaarde (bv. "Voorraad IS NOT NULL") producten met lege voorraadwaarden uitsluit, vult u de gegevens in of verwijdert u de voorwaarde.

## Een handmatige datapull werkt atributen niet bij.

Na een pull heeft Fozzels verwerkingstijd nodig — gegevens zijn niet onmiddellijk. Als atributen onveranderd blijven, neem dan contact op met support.

## Wanneer triggert ik handmatig een productpull?

Na grote cataloguswijzigingen, nieuwe productsets, grote toevoegingen of verwijderingen, of feed-/integratiewijzigingen.

## Hoe filter ik producten op aangepaste atributen (bv. "Webshop Article = Yes")?

Aangepaste filteratributen moeten aanwezig zijn in de gegevensfeed. Nadat ze in Fozzels zijn, gebruikt u ze als flowfiltervoorwaarden. Als een atribuut niet verschijnt, neem dan contact op met support.

## Een product is verwijderd uit de catalogus vanwege variantenconfiguratie.

Fozzels filtert op basis van variantinstellingen en uitgeschakelde varianten kunnen producten uitsluiten. Neem contact op met support om de configuratie te beoordelen.

## Kan ik een aangepast schema voor productpulls instellen (niet alleen nachtelijk)?

Ja. Sinds release 5.14 kunt u een handig moment instellen voor productpulls op zowel integratieniveau als storeniveau.
