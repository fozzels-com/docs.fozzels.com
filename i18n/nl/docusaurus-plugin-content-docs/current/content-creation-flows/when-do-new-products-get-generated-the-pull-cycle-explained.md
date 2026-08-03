---
id: '103000395390'
title: '4.3.5 Wanneer worden nieuwe producten gegenereerd: de Pull-cyclus verklaard'
sidebar_position: 11
slug: /content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained
description: 'Nieuw product of merk: waarom is het nog niet zichtbaar en hoe snelt u dit op? Een verklaring waarom nieuwe producten niet onmiddellijk in Fozzels verschijnen en wat te doen als u niet'
---

**Nieuw product of merk: waarom is het nog niet zichtbaar en hoe snelt u dit op?**

Een verklaring waarom nieuwe producten niet onmiddellijk in Fozzels verschijnen en wat u moet doen als u niet tot morgenochtend wilt wachten.

**1. Waarom nieuwe producten niet onmiddellijk in Fozzels zichtbaar zijn**

Fozzels ontvangt gegevens van uw winkel niet in realtime. Er is geen permanente verbinding tussen uw winkel en Fozzels die automatisch elke wijziging doorgeeft.

In plaats daarvan maakt Fozzels regelmatig verbinding met uw winkel en downloadt de huidge status van de catalogus - dit proces wordt een Product Pull genoemd. Alleen nadat dit is voltooid, wordt het systeem zich bewust van nieuwe producten, attribuutwijzigingen of verwijderde items.

> **ℹ** Als u vandaag overdag een nieuw product of merk aan uw winkel hebt toegevoegd, verschijnt dit slechts in Fozzels na de volgende pull. Tot die tijd weet het systeem gewoon niet dat het bestaat.

**2. Wanneer vindt de pull plaats**

De pull wordt automatisch volgens een schema dat u zelf in het tabblad Configuratie of Websites en Winkels instelt. Standaard loopt het 's nachts.

Na voltooiing van de pull wordt het systeem automatisch:

-   controleert welke producten overeenkomen met de filters van actieve stromen
-   werkt attribuutwaarden voor elk product in de wachtrij bij
-   activeert inhoudsgenering

> **ℹ** Wijzigingen in een stroom (bijvoorbeeld het toevoegen van een nieuw merk aan de filters) worden ook alleen na de volgende pull van kracht.

**3. Hoe wachten tot de morgen voorkomen: handmatige pull**

Als u wilt dat nieuwe producten onmiddellijk worden verwerkt, voert u de pull handmatig uit. Een handmatige pull werkt precies als de automatische: het vernieuwt volledig de catalogus en activeert generatie.

**Hoe u het uitvoert:**

-   Ga naar het gedeelte integratiesinstellingen in Fozzels
-   Vind uw winkel en voer de pull handmatig uit
-   Wacht tot het voltooid is - een successtatus in de statelijst bevestigt dat alles goed is gegaan
-   Daarna zal het systeem automatisch de stromen synchroniseren en generatie starten voor de nieuwe producten

> **ℹ** Een handmatige pull annuleert of vervangt de automatische niet. De volgende geplande pull zal nog steeds op het normale moment worden uitgevoerd, ongeacht of u er handmatig een hebt uitgevoerd.

**4. Als u al manueel een stroom overdag hebt uitgevoerd**

Soms testen gebruikers stromen of genereren ze inhoud voor afzonderlijke producten handmatig - met behulp van de knop Nu uitvoeren. Dit is normale praktijk.

Belangrijk om te weten: een handmatige stroomuitvoering beïnvloedt de automatische cyclus niet. De volgende dag, na de geplande pull, zal het systeem die stroom nog steeds automatisch uitvoeren - ongeacht welke handmatige acties u overdag hebt ondernomen.

_Heb je een vraag? Neem contact op met Fozzels-ondersteuning._
