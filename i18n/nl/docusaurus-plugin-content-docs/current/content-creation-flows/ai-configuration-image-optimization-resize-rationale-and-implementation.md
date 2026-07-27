---
id: '103000367979'
title: >-
  4.2.2. AI-configuratie. Afbeeldingsoptimalisering (vergroten/verkleinen):
  logica en implementatie.
sidebar_position: 7
slug: >-
  /content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation
description: >-
  De functie Afbeelding vergroten/verkleinen optimaliseert grote afbeeldingen
  automatisch om aan de technische vereisten van het AI-generatiesysteem te
  voldoen. Het is standaard ingeschakeld in alle
---

De functie **Afbeelding vergroten/verkleinen** optimaliseert grote afbeeldingen automatisch om aan de technische vereisten van het AI-generatiesysteem te voldoen. Het is standaard ingeschakeld in alle nieuwe en bestaande Flows om generatiefouten te voorkomen en invoertokenkosten te verminderen.

**1\. Hoe u de functie Afbeelding vergroten/verkleinen kunt beheren**

 De functie wordt afzonderlijk voor elke Flow beheerd in de stap AI-configuratie.

1.Ga naar het bewerkingsscherm voor een van uw Flows.

2\. Navigeer naar **Stap 2: AI-configuratie**.

3\. Schuif omlaag naar de sectie **Afbeelding vergroten/verkleinen**.

4\. Beheer de functie met behulp van het selectievakje **"Afbeelding vergroten/verkleinen inschakelen"**.

   ![](/img/kb/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/ZDcGWszXAjy6POiHs75NMe0FsBeIK14pfg.png)

    Wanneer u moet gebruiken:
**Inschakelen (standaard):** Aanbevolen voor alle Flows waar u productafbeeldingen gebruikt voor AI-analyse of afbeeldingsgeneratie.
Dit garandeert generatiesucces en verlaagt tokenkosten.
**Uitschakelen:** Als u geen afbeeldingsanalyse of -generatie in deze specifieke Flow plant te gebruiken. _Opmerking: Als u afbeeldingen uitschakelt die de limieten overschrijden, kan dit leiden tot een toename van inhoudsgeneratiefouten._

**2\. Technische details en kostenbijhouden**

Het vergrotings-/verkleiningsmechanisme wordt alleen geactiveerd wanneer een afbeelding specifieke technische criteria overschrijdt.

    Activeringsvoorwaarden
Het mechanisme voor afbeeldingvergroting/verkleining wordt **alleen** geactiveerd wanneer _beide_ voorwaarden zijn met:

1\. Bestandsgrootte **overschrijdt 2 MB** (Megabytes);

2\. **EN** breedte of hoogte van de afbeelding **overschrijdt 2048 pixels**.

Waar de functie van toepassing is

De functie Afbeelding vergroten/verkleinen werkt voor twee hoofdgebruiksscenario's:

        1. Afbeeldingsgebruik (analyse): afbeeldingen die u toevoegt voor AI-analyse in uw Flows.
        2. Afbeeldingsflow (generatie): afbeeldingen die samen met de prompt voor gegenereerde inhoud worden verzonden.

Kosten en uitgavenbijhouding

1\. De kosten voor het vergroten/verkleinen van één afbeelding bedragen **€ 0,0025 per afbeelding**.

2\. Deze vergoeding is **alleen van toepassing** wanneer de functie _daadwerkelijk is geactiveerd_ (dat wil zeggen, de afbeelding heeft aan de technische criteria voldaan en is vergroot/verkleind).

3\. U kunt deze uitgaven bijhouden op de pagina **Transacties** van uw account.

## 4\. Het gebruik is ook opgenomen in uw dagelijkse e-mail "Uw Fozzels-inhoudsupdate".

**3\. Belangrijkste voordelen**

De actieve functie Afbeelding vergroten/verkleinen is een belangrijk onderdeel van betrouwbaarheid en besparing:

1\. Mislukte generaties voorkomen: U bent gegarandeerd **fouten te voorkomen** met betrekking tot grote afbeeldingsformaten, wat u tijd bespaart.

2\. Verminderde invoertokenkosten: Geoptimaliseerde, kleinere afbeeldingen vereisen **minder invoertokens** voor verwerking door het AI-model, wat **de totale kosten** van inhoudsgeneratie **verlaagt**.

3\. Bespaart uw tegoed: Door mislukte generatiepogingen vanwege grote bestanden te voorkomen, betaalt u alleen voor succesvol gemaakte inhoud.

4\. Automatisch verkleinen: Het systeem voert de noodzakelijke optimalisatie **automatisch** op de achtergrond uit, zodat u zich op inhoudscreatie kunt richten.
