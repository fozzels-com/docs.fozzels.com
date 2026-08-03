---
id: '103000367978'
title: 4.2.1.  AI-configuratie. AI-modellen en optionele functies selecteren.
sidebar_position: 6
slug: /content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features
description: De stap AI-configuratie (stap 2 bij Flow-aanpassingen) is het kritiekste stadium voor het bepalen van de prestaties en kostenstructuur van een inhoudsflow. Het bepaalt
---

De stap AI-configuratie (stap 2 bij Flow-aanpassingen) is het kritiekste stadium voor het bepalen van de prestaties en kostenstructuur van een inhoudsflow. Dit bepaalt de keuze van de generatieve AI-engine, de gespecialiseerde mogelijkheden ervan en de operationele beperkingen. Gebruikers moeten hier strategische beslissingen nemen, waarbij ze de outputkwaliteit, taakcomplexiteit (bijvoorbeeld multimodale vereisten) en tokenkosten-optimalisatie in evenwicht houden.

1.  ### De kern AI-engine: providers en modeltiers

Fozzels integreert met meerdere toonaangevende AI-leveranciers (bijvoorbeeld OpenAI/ChatGPT, Google/Gemini, Anthropic, xAI), elk met een portfolio van modellen.

1.1. Criteria voor modelkeuze

Het kiezen van het juiste model vereist een strategische evaluatie op basis van de inhoudstaak:

**Kosteneffectieve modellen**. Doel: Hoge volumes, taken met lage complexiteit (metatitels, korte vertalingen, gegevensnormalisatie). Belangrijke attributen: Snellere verwerking, kleiner contextvenster. Kostenprofiel: Laagste invoer-/uitvoertokenkosten.

**Modellen met hoge kwaliteit**. Doel: Complexe, creatieve generatie, diepe samenvatting, handhaving van genuanceerde merkton. Belangrijke attributen: Superieur logisch coherentie, groot contextvenster. Kostenprofiel: Hogere invoer-/uitvoertokenkosten.

**Multimodale modellen**. Doel: Taken die visuele analyse naast tekst vereisen (bijvoorbeeld het beschrijven van textuur of stijl van een afbeelding). Belangrijke attributen: Afbeeldingsanalysevermogen is niet-onderhandelbaar. Kostenprofiel: Hogere kosten vanwege afbeeldingstokenisatie.

2.  ### AI-verrijkingshulpmiddelen en websearch

AI-verrijkingshulpmiddelen zijn optionele functies die worden gebruikt om de toegang van het model tot externe, niet-productgebonden gegevens te verbeteren.

Websearch inschakelen: Als u deze functie activeert, kan het model in real-time informatie en externe context uit het openbare internet opvragen tijdens inhoudsgeneratie.

Strategische waarde: Websearch is onmisbaar voor inhoud die verwijst naar actuele markttrends, specifieke productiestandaarden of externe feiten die niet in de productcatalogusattributen staan.

Kostenimplicatie: Gebruik deze functie voorzichtig, omdat dit doorgaans extra kosten per verzoek met zich meebrengt, onafhankelijk van het standaard tokengebruik.

3.  ### Gespecialiseerde Flow-mogelijkheden

Voor creatieve taken die verder gaan dan standaard tekst- en afbeeldingsanalyse, vereist Fozzels speciale flowtypes en specifieke AI-modellen vanwege het grote computerkracht.

**Afbeeldingsflows (afbeeldingsgeneratie).**
Doel: Nieuwe productafbeeldingen genereren (van nul).
Modelvoorwaarden: Gespecialiseerde afbeeldingsgeneratiemodellen (bijvoorbeeld GPT Image 1, Gemini 2.0 Flash Preview Image Generation).
Leveranciersbeperking: Beperkt tot bepaalde providers (bijvoorbeeld OpenAI, Google).

**Videoflows (videogeneratie)**.
Doel: Gewijd aan het genereren van korte, hooggekwaliteits-videoinhoud (bijvoorbeeld 8 seconde 720p-clips).
Modelvoorwaarde: Geavanceerde videogeneratiemodellen (bijvoorbeeld Gemini Veo 3).
Leveranciersbeperking: Momenteel beperkt tot Google | Gemini. Kostenstructuur: Videogeneratiemodellen werken vaak volgens een gespecialiseerde prijsstructuur (bijvoorbeeld prijs per seconde video-output) vanwege de hoge rekenkundige vraag.

4.  ### Afbeeldingsoptimalisering en kostenbeheer

Voor elke flow die multimodale mogelijkheden gebruikt, is efficiënt beheer van productafbeeldingen essentieel voor zowel generatiestabiliteit als tokenkosten-management.

4.1. Afbeeldingsinvoer en terugvallogica

Afbeeldingsaantal: Gebruikers moeten expliciet het aantal productafbeeldingen definiëren dat de AI moet analyseren (bijvoorbeeld 1, 2 of 3). Het verhogen van het aantal afbeeldingen verhoogt direct het aantal invoertokens en daarmee de kosten.

Terugval/overslaan: Als een product in de flow de aangevraagde afbeeldingsgegevens mist, moeten gebruikers een voorzorgsmaatregeling definiëren:
Terugvallen op een model met alleen tekst: Het proces gaat verder met behulp van een prompt met alleen tekst, waardoor fouten worden voorkomen maar generatiekosten behouden blijven.
Contentgeneratie overslaan: Het product wordt omzeild, waardoor alle bijbehorende tokenkosten voor dat item worden bespaard.

### 4.2. Afbeelding vergroten/verkleinen (stabiliteitmechanisme)

Het is een **best practice** om Afbeelding vergroten/verkleinen in te schakelen voor alle multimodale flows. Deze functie dient als cruciaal stabiliteits- en kostenbespaaringsmechanisme:

Voorkoming van fouten: Generatieve modellen hebben strikte limieten voor bestandsgrootte (bijvoorbeeld >2MB) en afmetingen (bijvoorbeeld >2048 pixels). Door vergroting/verkleining worden deze bestanden automatisch aangepast aan acceptabele limieten.

Kostenefficiëntie: Door ervoor te zorgen dat bestanden aan groottebeperkingen voldoen, worden generatiefouten voorkomen, zodat tokenkosten alleen worden gemaakt voor succesvolle contentoutput, waardoor verspilde uitgaven voor bewerkingen die anders zouden vastlopen, worden voorkomen.
