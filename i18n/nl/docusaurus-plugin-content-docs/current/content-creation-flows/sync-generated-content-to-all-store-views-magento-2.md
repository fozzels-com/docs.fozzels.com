---
title: 4.1.2.c Gegenereerde content synchroniseren naar alle store views in Magento 2
sidebar_position: 4.5
slug: /content-creation-flows/sync-generated-content-to-all-store-views-magento-2
description: >-
  Met deze optie aan slaat elke push vanuit de flow de gegenereerde tekst op in
  de store view van de flow én als standaardwaarde van het product voor alle
  store views in Magento.
---

## Wat deze optie doet

Met deze optie aan slaat elke push vanuit de flow de gegenereerde tekst twee keer op: in de eigen store view van de flow, en als standaardwaarde van het product voor **alle store views** in Magento.

Elke store view die voor dat attribuut geen eigen waarde heeft, toont de nieuwe tekst direct. Een store view met een eigen waarde in Magento blijft zijn eigen tekst tonen.

De optie is alleen beschikbaar voor Magento 2-integraties.

## Wanneer gebruikt u de optie

Zet de optie aan wanneer meerdere store views dezelfde tekst moeten tonen en u niet voor elke store view een aparte flow wilt draaien. Een typisch voorbeeld: twee of meer store views in dezelfde taal, zoals een hoofdwinkel en een outletwinkel.

Laat de optie uit wanneer uw store views verschillende talen gebruiken of verschillende teksten nodig hebben. Draai in dat geval, net als voorheen, een aparte flow per store view.

## De optie aanzetten

1.  Open de flow en ga naar stap **4 Automation**.

2.  Vink **Also save as the default value for all store views** aan. Onder het selectievakje verschijnt een korte uitleg.

3.  Sla de flow op.

De optie geldt voor elke push vanuit deze flow: een handmatige push na controle, een volledig automatische push en **Synchronize again**. Een flow met meerdere attributen synchroniseert altijd al zijn attributen samen.

![Het selectievakje "Also save as the default value for all store views" in stap 4 Automation](/img/kb/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/01-automation-default-value-checkbox.png)

## Hoe store view-waarden werken

In Magento heeft een productattribuut een standaardwaarde (zichtbaar in de scope **All Store Views**) en kan het in elke store view een eigen waarde hebben. Zet op de productpagina de **Scope** op een store view: als **Use Default Value** onder een veld is aangevinkt, toont die store view de standaardwaarde. Is het niet aangevinkt, dan heeft de store view een eigen waarde en negeert hij de standaardwaarde.

Dit doet één push, met een flow op Default Store View en een winkel met nog twee store views:

| Store view | Voor de push | Na de push | Use Default Value |
| --- | --- | --- | --- |
| All Store Views (standaard) | Oude tekst | **Nieuwe tekst** | — |
| Default Store View (die van de flow) | Oude tekst | **Nieuwe tekst**, opgeslagen als eigen waarde | Niet aangevinkt |
| Store view B, geen eigen waarde | Oude tekst (overgenomen) | **Nieuwe tekst** (overgenomen) | Aangevinkt |
| Store view C, eigen waarde | Eigen tekst | Eigen tekst, ongewijzigd | Niet aangevinkt |

**Wilt u dat een store view de nieuwe tekst toont?** Open het product in Magento, zet de Scope op die store view, vink **Use Default Value** aan voor het attribuut en sla op. Vanaf dan volgt de store view de standaardwaarde.

## Eén store view per attribuut

Alleen de flows van één store view kunnen een bepaald attribuut als standaardwaarde opslaan. Zo overschrijven flows van verschillende store views elkaars standaardtekst niet.

*   **Meerdere flows van dezelfde store view** kunnen de optie aan hebben voor hetzelfde attribuut.
*   **Flows van verschillende store views** kunnen de optie alleen aan hebben voor verschillende attributen. Een flow op store view A synchroniseert bijvoorbeeld de beschrijving, en een flow op store view B de metatitel.

Zet u de optie aan voor een attribuut dat een flow van een andere store view al als standaardwaarde opslaat, dan wordt de flow niet opgeslagen en ziet u deze foutmelding:

> The flow "&lt;flow name&gt;" of another store view already saves this attribute as the default value for all store views. Only one store view's flow can write the shared default of an attribute.

Om dit op te lossen verwijdert u de gedeelde attribuut of attributen uit deze flow, of zet u de optie uit (of verwijdert u het attribuut) in de flow die in de foutmelding staat.

**Een flow dupliceren naar een andere store view** zet de optie in de kopie uit en toont een waarschuwing. Zet de optie alleen weer aan als geen flow van een andere store view dezelfde attributen als standaardwaarde opslaat.

## Goed om te weten voordat u de optie aanzet

*   **All Store Views betekent elke website.** De standaardwaarde geldt voor de store views van alle websites in uw Magento, niet alleen voor de website van de flow. Gebruiken uw websites verschillende talen, dan tonen store views zonder eigen waarde de taal van de flow.
*   **De laatste push wint.** Synchroniseren meerdere flows van dezelfde store view hetzelfde attribuut, dan bevat de standaardwaarde de tekst van de laatste push, ook als een andere flow een nieuwere tekst heeft gegenereerd.
*   **De store view van de flow volgt de standaardwaarde niet meer.** Na de eerste push met deze optie heeft de store view van de flow een eigen waarde. Latere standaardwaarden bereiken hem pas als u daar Use Default Value aanvinkt.
*   **Andere flows kunnen worden gestart.** Een flow van een andere store view die dit attribuut in zijn prompt gebruikt en waarbij **Automatically create a new text when an attribute changes** aan staat, ziet de nieuwe standaardwaarde als een wijziging. Na de volgende pull maakt die flow een nieuwe tekst, en verbruikt hij credits, voor elk product zonder eigen waarde in zijn store view.
*   **Configureerbare producten:** alleen het hoofdproduct wordt bijgewerkt. De varianten behouden hun eigen teksten. Dat is geen probleem, want de productpagina toont de teksten van het hoofdproduct.
*   **De optie uitzetten maakt niets ongedaan.** Waarden die al als standaardwaarde zijn opgeslagen, blijven staan. Nieuwe pushes gaan alleen naar de store view van de flow.
*   **Een attribuut uit een flow verwijderen wist de standaardwaarde niet.** De laatst gesynchroniseerde waarde blijft staan totdat een andere flow een nieuwe synchroniseert.
