---
id: '103000390709'
title: '4.7.4 Verdachte woorden en frasen: Geavanceerde inhoudsqualiteitscontrole'
sidebar_position: 21
slug: /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: De functie Verdachte woorden en frasen is meer dan zojuist een eenvoudig validatiefilter - het is een verfijnd gereedschap voor het beheren van workflows met hoog volume inhoud
keywords:
- werkstroom
---

De functie **Verdachte woorden en frasen** is meer dan zojuist een eenvoudig validatiefilter - het is een verfijnd gereedschap voor het beheren van workflows met hoog volume inhoud. Het garandeert dat uw productbeschrijvingen professioneel blijven door AI-hallucinaties, technische artefacten of ongewenste termen in meerdere talen gelijktijdig te markeren.

## Configuratie: Globale en meertalige controle

Om uw woordenlijst te beheren, navigeert u naar **Instellingen** > **Stroom** > **Verdachte woorden en frasen** tabblad.

### 1. De woordenlijst beheren

Fozzels komt vooraf geconfigureerd met veelvoorkomende AI-artefacten (`#html`, `note:`, `sorry`, enz.). U kunt:

-   **Termen in-/uitschakelen:** Maak gewoon de tags uit die u niet nodig hebt.

-   **Aangepaste termen toevoegen:** Typ een woord of zinsdeel (bijv. concurrententnamen, merkspecifieke gevoelige termen) en druk op **Enter**.

-   **Meertalige ondersteuning:** U kunt "stopwoorden" in elke taal toevoegen. Dit is ongelooflijk nuttig voor internationale winkels waar u specifieke fouten voor verschillende lokalisaties moet volgen (bijv. Engels "sorry" vs. Nederlands "let op") tegelijkertijd.

![](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/NHbocGjhOveF2KEQmoSh5o7YOuzzP33eaA.png)

## Hoe het werkt: Dynamisch statusbeheer

Het systeem werkt in **realtime**. Zodra een term uit uw lijst in gegenereerde tekst verschijnt:

-   Het product is gemarkeerd met een **"Verdacht" status**.

-   De gemarkeerde woorden zijn **gemarkeerd direct in de teksteditor**.

-   Dit geeft u de keuze: **handmatig bewerken**, **inhoud regenereren**, of **uw instellingen aanpassen** om de markering uit te schakelen.

### Onmiddellijke massacorrecties

De echte kracht van deze functie ligt in haar dynamische karakter. Als een "Verdachte" status per ongeluk is geactiveerd (bijv. u hebt "sorry" als stopwoord toegevoegd, maar lanceerde vervolgens een merk genaamd _"Sorry Boy"_), hoeft u niet honderden beschrijvingen te bewerken:

1.  **Schakel uit of verwijder** het woord uit uw verdachtelijst in instellingen.

2.  Het systeem **werkt de status onmiddellijk bij** voor alle bestaande voltooiingen. Ze zullen de "Verdachte" markering verliezen en onmiddellijk klaar zijn voor massale synchronisatie.

![](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/bnDUh3Fj25UmysKHVdUAyM4Kh5Ev2TWvzg.png)

## Efficiëntie in de dagelijkse totale Batch List

We hebben uw werkruimte geoptimaliseerd met een dedicated filter om uw dagelijkse controles te stroomlijnen:

-   **Alleen verdachte weergeven:** Gebruik deze schakelaar in de **dagelijkse totale Batch List** om onmiddellijk elk resultaat dat uw aandacht nodig heeft te isoleren.

-   In plaats van de hele batch te beoordelen, kunt u zich specifiek op gemarkeerde items concentreren, de gemarkeerde woorden zien en beslissen of u de tekst moet repareren of uw globale woordenlijst moet verfijnen om de hele batch in één keer uit te schakelen.

## Het forceren van een update (update verdacht vlag)

Hoewel de status dynamisch wordt bijgewerkt, kunt u altijd handmatig een herberekening voor uw bredere catalogus activeren. Selecteer in uw **inhoudslijst** de producten en gebruik de **Massaactie: "Verdacht vlag bijwerken"** om ze opnieuw in te scannen op uw meest huidge instellingen.

### Samenvatting

Deze functie fungeert als uw "commandocentrum" voor inhoudsqualiteit. Of u nu technische problemen opvangt of merkzekerheid over internationale grenzen heen beheert, u hebt altijd volledige controle over wat naar uw winkel wordt gepubliceerd.
