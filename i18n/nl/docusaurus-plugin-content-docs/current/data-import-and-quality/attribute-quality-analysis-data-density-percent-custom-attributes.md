---
id: '103000368952'
title: 3.2.1. Analyse van kenmerkgegevenskwaliteit. Gegevensdichtheidspercentage. Aangepaste kenmerken
sidebar_position: 6
slug: /data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes
description: Dit document biedt zowel een conceptueel overzicht als gedetailleerde praktische instructies over de volledige levenscyclus van productkenmerken in het Fozzels pl
keywords:
- invoerprompt
- ophalen
---

Dit document biedt zowel een conceptueel overzicht als gedetailleerde praktische instructies over de volledige levenscyclus van productkenmerken in het Fozzels-platform: van initiële import en analyse tot geavanceerde configuratie, transformatie en aanmaak van aangepaste velden.

Kenmerken zijn de **Enige Bron van Waarheid** voor AI-inhoudsgeneratie. Het beheren ervan omvat het controleren van **Gegevensdichtheid**, **toewijzing** en **lokalisatie**, wat van cruciaal belang is voor het creëren van inhoud van hoge kwaliteit, relevant en feitelijk nauwkeurig op productbeschrijvingen. Het opzetten van de kenmerkencollectie voordat u aan het werk gaat (beoordeling en deactivering van niet-relevante/lege velden) is essentieel werk dat latere bewerkingen aanzienlijk vergemakkelijkt.

### Deel 1: Import en basisanalyse

#### 1.1. Wat zijn Fozzels-kenmerken?

Kenmerken zijn gestructureerde gegevenspunten (bijv. `kleur`, `prijs`, `materiaal`) die van uw geïntegreerd platform zijn geïmporteerd. Ze dienen als invoervariabelen voor het **promptveld**, waardoor unieke inhoud voor elk product kan worden gegenereerd.

#### 1.2. Het Pull starten

Het gegevensimportproces begint met de opdracht **Pull Products**.

1.  **Ga naar** uw integratie-instellingen en **selecteer** het tabblad **Websites & Stores**.

2.  **Klik** op de knop **"Pull Products"** voor de actieve winkel.

3.  **Bewaking:** De voortgang wordt weergegeven via een voortgangsbalk. Het proces kan worden beheerd met behulp van de knoppen **Stop**, **Pause** en **Resume**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/6SrlYRiz66TUDmf63b5peXAC6EfLCFTjEw.png)

4.  **Logboeken:** Gedetailleerde rapporten over product- en kenmerk-import zijn beschikbaar via **"View Product Logs"** en **"View Attribute Logs"** in de kolom Acties.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/DLITtFMHc0MmEeK2UDasXyL5ZaBZifO06Q.png)

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/JRoTBrRsovpu033tRmysjhhnEYa-1nIkzg.png)

####
1.3. Kwaliteitsanalyse: gegevensdichtheidspercentage

Op het tabblad **Attributen** berekent Fozzels automatisch de kwaliteit van elk veld.

-   **Definitie:** **Gegevensdichtheid** is het percentage producten in de catalogus waarvoor dit kenmerk een niet-lege, bruikbare waarde heeft.

-   **Gebruik:** Kenmerken met lage dichtheid mogen alleen in **voorwaardelijke logica** (`if` blokken) worden gebruikt om te voorkomen dat inhoud wordt gegenereerd met feitelijke leemten of lege ruimten.

-   **Beheer:** U kunt kenmerken met 0% dichtheid of die u niet van plan bent te gebruiken **uitschakelen**, waardoor de **Flow Builder**-interface wordt vereenvoudigd.

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/suceb1fs0FvE76a7CHN6A6JvqnLGLtaL2g.png)

###
Deel 2: Beoordeling en configuratie

#### 2.1. Voorbeeldgegevens beoordelen (willekeurige voorbeeldgegevens ophalen)

Om de geïmporteerde waarden en hun lokalisatie te verifiëren, kunt u de voorbeeldgegevensfunctie gebruiken.

1.  **Klik** op de functie **"Get random example data"** op het tabblad Attributen.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GzPH1l304MY6YjwmxuhHfMjO3s2YS-YD6A.png)

2.  **Selecteer** een winkel/taal uit het vervolgkeuzemenu. Dit stelt u in staat om te zien hoe waarden eruitzien voor een specifieke taalmarkt (bijv. de kleur "zwart" voor een Nederlandse winkel versus "black" voor een Engelse winkel).
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GyKgf3yfF6tWo11gSYr6JXc8Y99q4tIA8Q.png)

3.  **Gebruik** de **pijlknoppen voor en achter** om verschillende kenmerkwaarden van verschillende willekeurige producten weer te geven.

#### 2.2. Geavanceerde kenmerken bewerking (venster Kenmerk bewerken)

Als u op het pictogram **Bewerken** (potlood) op een kenmerk klikt, wordt het venster voor geavanceerde configuratie geopend.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dUU-_lgywMI5u-f7Y9G9ppxK9QLX_ljCAA.png)

##### Gegevenstransformatie

-   **Transformeer gegevens:** Maakt **Runtime-codeuitvoering** (aangepaste code) op de geïmporteerde waarde mogelijk voordat deze wordt opgeslagen.

##### ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/XMR_zIZH_IM-p4UANnIYB8m37CATk4nhBQ.png)
Technische vlaggen

-   **Filterbaar:** Indien ingeschakeld, kan dit kenmerk worden gebruikt om producten in de catalogus/batchlijst op waarde te filteren.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/EvbjNHS2aedS-hzos_piQd1wAtXba0rJww.png)
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dxX8mUPfJNYVbhVNTB7vDcF--x2JUiW3CQ.png)

-   **Veranderbaar:** Indien ingeschakeld, heeft Fozzels toestemming om gegevens **terug te schrijven** (te exporteren) naar dit veld op het bronplatform.

-   **Erfelijk:** Bepaalt of de kenmerkwaarde van een **bovenliggend** product automatisch naar zijn **onderliggende** varianten moet worden gekopieerd.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/24rgLlDhyDeaL87wmVe_rWJG8rNvx4u5YA.png)

-   **HTML toestaan:** Stelt het kenmerk in staat om HTML-tags te bevatten en weer te geven.

##### Lokalisatie van kenmerknaam

-   Op het tabblad **Lokalisatie** kunt u de gewenste gelokaliseerde naam voor het kenmerk invoeren voor elke verbonden winkелversie.

-   **Resultaat:** De ingevoerde gelokaliseerde namen worden weergegeven in de kolomkopteksten van tabellen en in het venster **Flow Prompt**, waardoor de AI het kenmerk in de context van de taal van de winkel kan begrijpen.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/hur7c60aN2_gvYH4QGK3hiVS0QSsqaTXBQ.png)
    _voor EN winkel:_
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2UvshsNaysqHkYC0DA1ZjsYnZ06wRogQfQ.png)

   _voor NL winkel:_
    _![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/rGRdeC3Lob__8TSrZSZP07ap45ESGV7YcQ.png)_

### Deel 3: Aangepaste kenmerken maken

#### 3.1. Doel van aangepaste kenmerken

**Aangepaste kenmerken** zijn velden die rechtstreeks in Fozzels worden gemaakt. Ze kunnen dienen als doelveld voor het opslaan van gegenereerde inhoud of voor berekende waarden.

#### 3.2. Proces voor aanmaak van nieuwe kenmerk

1.  **Klik** op de knop **"New Attribute"** op het tabblad Attributen.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/LziDSQFwLlpE7kPgzI_R1FSLOGhzqMJhMg.png)

2.  Definieer in het pop-upvenster **"Create New Attribute"**:
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2nTs3mBYNoxGTi61kVLJbWfr45SFrAV-Qg.png)

-   **Naam:** Een beschrijvende naam voor de interface.

    -   **Code:** Een unieke technische identificatie.
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/39sh5ONkvBeaLHia--kl0pSjQC34K3wHTQ.png)

    -   **Frontend Input:** Het gegevenstype dat het kenmerk zal bevatten (**Text**, **Textarea**, **Select**, **Multiselect**, **Date**, **Boolean**, **Weight**, etc.).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dPHGR82fmOzt6JcWICNhXny23ofktRFVw.png)

    -   **Generieke toewijzing:** Standaardiseer het kenmerk volgens de interne Fozzels-structuur (bijv. selecteer **Beschrijving**).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dhlYPSoDYXoxvTfahRTrFL8wOTxjURLVIQ.png)

3.  **Frontend-veld weergegeven met widget:** Selecteer eventueel een widget voor hoe het veld in de catalogus wordt weergegeven (bijv. **Categoriestructuur, afbeelding, product-ID**).

4.  **Klik** op **"Save"**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/NGdrMyUieEv_wTjftyUbnE47OmN56Ekvlw.png)

5\. Controleer het gemaakte kenmerk in het pop-upvenster "**Kenmerk bewerken**" en configureer het indien nodig.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/aZZ4Pw6tM39wJo25lxXp3PoMSFNptTQxGA.png)
6\. Controleer het resultaat in de algemene **Kenmerkenlijst**.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/AYfNwv4-y98aOsUmRM3PnLH68aSQJkC8gw.png)
