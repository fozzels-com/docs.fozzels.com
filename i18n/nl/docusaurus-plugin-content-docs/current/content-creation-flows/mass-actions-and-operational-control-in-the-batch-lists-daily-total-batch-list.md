---
id: '103000376412'
title: 4.7.2 Massaacties en operationele controle in Batch Lists / Dagelijkse totale Batch List
sidebar_position: 18
slug: /content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list
description: Inhoud beheren met massaacties Het Dashboards (of Batch List) is uw primaire tool voor het snel beheren van inhoud. Deze functie Massaacties is beschikbaar in zowel het dagelijks totaal Batch List-overzicht als de gedetailleerde Batch List-weergave.
keywords:
- batchlijst
---

Inhoud beheren met massaacties Het Dashboards (of Batch List) is uw primaire tool voor het snel beheren van inhoud. **Deze functie Massaacties is beschikbaar in zowel het dagelijks totaal Batch List-overzicht als de gedetailleerde Batch List-weergave.** Met behulp van de functie **Massaacties** kunt u gelijktijdig kritieke bewerkingen, zoals bevestiging, regeneratie en synchronisatie, op een groot aantal producten toepassen. Dit bespaart aanzienlijk tijd door de noodzaak om elk artikel afzonderlijk te verwerken te elimineren.

## Massaacties uitvoeren

1. Selectiemechanisme Om een massaactie in te stellen, moet u eerst de items selecteren. Gebruik het selectievakje Selecteer alles om het vervolgkeuzemenukeuzen te openen:

-   Individuele selectie: Gebruik het selectievakje aan het uiterste linkerkant van elke rij om specifieke items te selecteren.

-   Alles selecteren: Selecteert **alle** items die overeenkomen met de huidge filters, ongeacht de pagina.

-   Alles deselecteren: Wist de selectie in de hele lijst.

-   Alles op deze pagina selecteren: Selecteert alle items die momenteel in de tabel worden weergegeven.

-   Alles op deze pagina deselecteren: Wist de selectie alleen op de huidge pagina.

![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/TAT_uWcG5-SzeI8SRjjmN51nhZWuNPhNqw.png)

2. Beschikbare acties Nadat u items hebt geselecteerd, wordt het menu **Acties** actief en biedt het de volgende functies voor batchverwerking:

-   **Geselecteerde weergeven**: Deze actie filtert het productrooster om alleen de items weer te geven die u momenteel hebt geselecteerd, waardoor u een gerichte beoordeling kunt uitvoeren voordat u bulkacties uitvoert.

-   **Gegenereerde inhoud synchroniseren**: Dit initieert de automatische overdracht van alle voltooide inhoud voor de geselecteerde producten naar uw verbonden e-commerceplatform zonder een nieuwe generatiecyclus in te schakelen.

-   **Bevestig alles, sla op en synchroniseer**: Deze actie bevestigt gelijktijdig de kwaliteit van de geselecteerde inhoud en initieert de onmiddellijke synchronisatie ervan naar de geïntegreerde e-commercewinkel.

-   **Regenereer, sla op en synchroniseer**: Dit initieert een nieuw inhoudsgeneriering voor de geselecteerde producten en plant automatisch hun vervolgingsynchronisatie bij succesvolle voltooiing.

## ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/6chuzawhzMkzp4kjQAs-Xh2lfJQ8D0uTnw.png)
Het beheren van de gefocuste werkruimte ("Geselecteerde weergeven")

De functie **"Geselecteerde weergeven"** is een essentieel gereedschap voor het beoordelen en voorbereiden van specifieke subsets van gegevens.

-   Doelgerichte werkruimte: Het activeren van **"Geselecteerde weergeven"** isoleert de huitage geselecteerde items in een aparte tabelweergave, waardoor je effectief een gerichte werkruimte maakt.

-   Volledige functionaliteit behoud: Zelfs in deze geïsoleerde modus behoudt u alle functies van de standaardtabel, inclusief verdere filtering, detailweergave en het uitvoeren van massaacties op de kleinere, specifieke gegevenssubset. Dit maakt fasen selectie en verwerking mogelijk.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/83gkMs5df4-VpiuZavFc2jvbQWWHXo5BwQ.png)

## Aanbevelingen: Optimalisatie van fout- en waarschuwingsafhandeling

We raden aan de functie Massaacties niet alleen te gebruiken voor standaardinhoudsgoedkeuring, maar ook voor het snel verhelpen van fouten.

-   Filters gebruiken: U kunt het filter gebruiken **"Alleen weergeven met fouten"** of de **inhoudsresultaten** filteren die waarschuwingen of fouten hebben ontvangen (door de metriek "Waarschuwing Aantal" en "Mislukking Aantal" in het dagelijks overzicht in te controleren).
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/Q-x6xQXNSMvvctnZfgceHCf1568U90a42A.png)

-   Snelle regeneratie: Nadat u het filter hebt toegepast en de problematische items hebt geselecteerd, gebruikt u de actie **"Regenereer, sla op en synchroniseer"** om de generatieprocedure voor alle defecte elementen gelijktijdig efficiënt opnieuw uit te voeren.

## Operationele waarborgen en stroomlogica-controle

Een controle-systeem met meerdere fasen is geïmplementeerd voordat resource-intensieve massaacties worden uitgevoerd om nauwkeurigheid te garanderen en onbedoelde uitgaven te voorkomen:

-   Verplichte bevestigingspop-up: Voordat acties zoals "Gegenereerde inhoud resynchroniseren", "Bevestig en synchroniseer" of "Regenereer en synchroniseer" worden uitgevoerd, verschijnt een waarschuwingspop-up waarvoor uw expliciete bevestiging vereist is.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/XdxTZ96w4KYIJMlmO4Q1e0OGo9Lp4moHMA.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/QtxE2PertdWwBPbWXypF36AadNNOWCYfQ.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/WJXrUQG2D70RbZ2Zt2nXR284tuODnhGu_w.png)

-   Stroomlogica opmerking: Deze pop-ups bevatten een cruciale opmerking over het verwachte synchronisatiegedrag op basis van het stroomtype:

    -   Inhoud uit volledig geautomatiseerde stromen wordt automatisch goedgekeurd bij generatie.
        ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/K8O5z-M1sAS6I6awArA51TqfE2SC1Yfbtw.png)

    -   Inhoud uit standaardstromen wordt alleen gegenereerd opnieuw, waarvoor daarna handmatige goedkeuring nodig is voordat synchronisatie is toegestaan.

-   Resource-controle: Het systeem verifieert de operationele status van de stroom en integratie voordat u een massaactie start: generatie zal niet beginnen als de brontos stroom inactief is, en synchronisatie zal niet worden uitgevoerd als de doelintegratie inactief is.
