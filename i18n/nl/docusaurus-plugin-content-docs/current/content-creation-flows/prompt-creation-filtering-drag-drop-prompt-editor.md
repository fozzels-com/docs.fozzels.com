---
id: '103000367983'
title: 4.3.2 Promptcreatie & Filtering. Drag & Drop Prompt Editor
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  Deze gids toont u hoe u het veld Prompt configureert - het belangrijkste
  gereedschap voor het maken van dynamische instructies voor
  producttekstgeneratie - met beschikbare product
---

Deze gids toont u hoe u het veld **Prompt configureert** - het belangrijkste gereedschap voor het maken van dynamische instructies voor producttekstgeneratie - met beschikbare productattributen, voorwaardelijke logica en lokalisatie-instellingen.

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/psn6waVbTI-sOgG8K_n_-XihT1sjhb4AUg.png)
**1. Onderdelen van het tabblad Promptconfiguratie**

Het interfacegebied is verdeeld in vijf hoofdgedeelten voor maximale efficiëntie bij het bouwen van uw promptlogica:
1. **Promptveld**. De centrale tekstregel voor het schrijven van de prompt. Doel - **schrijf** de tekst met geïntegreerde attribuut/voorwaardelogica.

2. **Attributenseeds**. Een lijst van alle beschikbare productattributen voor de geselecteerde winkel. Doel - **voeg** statische productgegevens in (bijv. productnaam, SKU).

3. **Attributen (indien ingevuld) Afdeling**. Een lijst met voorwaarden (**als-blokken**) die kunnen worden gebruikt voor dynamische inhoud. **Voeg** dynamische inhoudslogica in (bijv. _ALS_ Kleur is Blauw _DAN_ genereer "Alleen blauw" inhoud).

4. Gescheiden **zoekinvoeren**. U kunt vrij **schakelen** tussen de attributen- en voorwaardegedeelten.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/EDjHQgzURl0i0nmUnAyYimUlW-FvXAQNlw.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/1J6uMJo933Qd572KPGbVIQr86A9B-BBJng.png)
5. Sjabloonenseeds. Het blok **Promptsjabloon** bevat **Laden** (om een sjabloon te importeren) en **Opslaan** (om de huidge prompt als sjabloon op te slaan).
**2. Het promptveld (centrale logica)**

Het promptveld is waar u de logica SCHRIJFT die de uiteindelijke tekst vormt.

Ondersteunde inhoud
Het veld ondersteunt een combinatie van vrije tekst en dynamische blokken:

1. **Voeg** attributen en voorwaarden in (via klikken of slepen en neerzetten).

2. **Bewerk** vrije tekst van elke complexiteit.

3. **Gebruik** standaardopmaak en HTML-tags (bijv. `<h1>`, `<ul>`, `<strong>`).

4. **Combineer** normale tekst met dynamische blokken naadloos.
Interactie met elementen

1. **Voeg** elementen in de tekst in door **KLIKKEN** of door ze naar de cursorpositie **SLEPEN EN NEERZETten**.

2. **Verwijder** een element door op **Backspace** te drukken of door op het **"x"** op het element direct in het veld te **KLIKKEN**.

3. **Hergebruik** hetzelfde attribuut of dezelfde voorwaarde meerdere keren in verschillende delen van de prompt.

Elementstatus

Inactief (niet in prompt) - Grijs
Actief attribuut - Groen
Actieve voorwaarde (als-blok) - Geel-oranje

**3. Gegevens dichtheid en lokalisatie**

#### Percentage gegevensdichtheid
Elk attribuut is gekoppeld aan een **percentage gegevensdichtheid -** het percentage gegevensbeschikbaarheid in de hele integratie.
**Zweef** over het attribuut om het percentage gegevensdichtheid in de hint weer te geven.
**Gebruik** attributen met hoge dichtheid (dichter bij 100%) om succesvolle inhoudsgenering over de meeste producten te garanderen.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/x-1OzeZAjTMnJ0UwMl8MW3nuBRADUaDtbA.png)
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/qq-rfN44U1KguTDHRUx4nMlmBYUMPgTCzw.png)

Attributlokalisatie
1. **SELECTEER** de gewenste winkel om de gelokaliseerde attribuutnamen in de lijsten weer te geven (bijv. `product_name` voor en-US, `product_naam` voor nl-NL).

2. Als een attribuutnaam niet beschikbaar is voor een taalversie, wordt de standaardnaam van de winkel (gemarkeerd met een ster `*`) gebruikt.

3. U kunt de gelokaliseerde naam in de instellingen integratie → attribuut → landinstelling **wijzigen**.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/bbfwJyznmpbxED-ZSOB2WHgKynrMD8sVHA.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/KVJCJb6ASEbmnAJE5T92lf8pj73VAn6hjA.png)

Beoordeling en opslaan

1. Het **Promptveld** is in het begin leeg bij het aanmaken van een nieuwe stroom.

2. Klik **Opslaan en voorbeeld bekijken** om voor elk product in de productentabel een unieke prompt te genereren en weer te geven, rekening houdend met beschikbare attribuutwaarden en toegepaste voorwaarden.
3. **Opmerking:** hoewel het toevoegen van attributen en voorwaarden niet verplicht is, is het ten zeerste **aanbevolen** voor het genereren van teksten voor een reeks producten, omdat het helpt inhoud te personaliseren en de relevantie te verbeteren.
Raadpleeg [hier](https://fozzels.freshdesk.com/a/solutions/articles/103000368009) de gids voor advies over het schrijven van hoogwaardige, effectieve prompts.
