---
id: '103000380488'
title: 4.7.3 Toegestane HTML-tags voor AI-tekstgeneratie
sidebar_position: 19
slug: /content-creation-flows/allowed-html-tags-for-ai-text-generation
description: >-
  Met deze functie kunt u precies bepalen welke HTML-tags kunnen worden gebruikt
  en behouden in de inhoud die door kunstmatige intelligentie wordt gegenereerd.
  Deze functio
---

Met deze functie kunt u precies bepalen welke HTML-tags kunnen worden gebruikt en behouden in de inhoud die door kunstmatige intelligentie wordt gegenereerd. Deze functionaliteit is actief voor attributen waar de optie **"HTML toestaan"** is ingeschakeld.

![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/2zl4WJfftt48X66FBs1W8zAn4rbNhhqk1A.png)

Door deze lijst te bepalen, ontgrendelt u krachtige mogelijkheden voor het genereren van inhoud met specifieke opmaak of het rechtstreeks insluiten van multimedia in de gegenereerde tekst.

## ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/KsO3jFsp7Ytx48uE5alhlIVzvjfJd8Trzw.png)
Hoe het systeem tags verwerkt

Het systeem werkt als een beveiligingsfilter:

-   Het verwijdert automatisch alle tags die **niet aanwezig** zijn in de toegestane lijst.

-   Dit garandeert dat alleen noodzakelijke en veilige tags correct op uw frontend worden weergegeven.

## Creatief potentieel ontketenen

Door toegestane tags te bepalen, beperkt u zich niet langer tot basistekstopmaak. U kunt de AI instructies geven om complexe structuren te maken door dynamische en visuele elementen rechtstreeks in uw productbeschrijving in te voegen:

-   **Interactieve inhoud:** Sluit YouTube-video's rechtstreeks in de productbeschrijving in met behulp van de tag `iframe`.

-   **Rijke beelden:** Integreer afbeeldinggaleries of schuifregelaars met behulp van de tag `img` verpakt in uw vereiste structuur (`div`, `section`).

-   **Verbeterde structuur:** Maak interactieve elementen, zoals accordeons voor veelgestelde vragen, met behulp van tags `details` en `summary` (die in de standaardlijst staan) of aangepaste structuurtags.

-   **Elke structuur:** U kunt vrijwel elke HTML-structuur die uw frontend ondersteunt, genereren door simpelweg de noodzakelijke tags toe te staan.

### 1\. Standaard beschikbare HTML-tags

Een uitgebreide lijst met standaard HTML-tags is standaard beschikbaar en kan onmiddellijk worden gebruikt:

-   `a`, `abbr`, `acronym`, `article`, `aside`, `b`, `blockquote`, `br`, `cite`, `code`, `dd`, `details`, `div`, `dl`, `dt`, `em`, `footer`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hr`, `i`, `li`, `mark`, `ol`, `p`, `q`, `s`, `section`, `span`, `strong`, `summary`, `table`, `td`, `tr`, `u`, `ul`.

### 2\. Voeg uw eigen HTML-tags toe (voeg uw eigen HTML-tags toe)

Als u tags voor het insluiten van video, afbeeldingen of andere niet-standaard opmaak nodig hebt, kunt u deze aan deze lijst toevoegen.

**Hoe u aangepaste tags toevoegt:**

1.  Typ de naam van de tag die u wilt toestaan (bijvoorbeeld `iframe`, `img`, `video`) in het veld.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/17FvSVXKcc6eW4AU0v9BhkCkRR-NUtg57w.png)

2.  Druk op Enter (if needed, remove it by clicking the 'x' button).

3.  Klik op de knop **Opslaan**.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/kMmnyMamV-Ef9IEE1_naDJ0llLk7bnh5YA.png)

> **Goed om te weten!** Dit blok wordt gebruikt voor het toevoegen van extra, niet-standaard tags die essentieel zijn voor het realiseren van uw creatieve visie op de frontend. Voeg alleen de noodzakelijke tags toe om veiligheid van code te garanderen.
