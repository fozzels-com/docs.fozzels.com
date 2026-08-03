---
id: '103000367976'
title: 4.1.2. Een nieuwe inhoudsflow maken en initiële instellingen.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  De inhoudsflow is de kern van automatisering binnen Fozzels. Het is een
  instructieset die bepaalt hoe het systeem het geselecteerde AI-model moet
  gebruiken om automatisch
---

De inhoudsflow is de kern van automatisering binnen Fozzels. Het is een instructieset die bepaalt hoe het systeem het geselecteerde AI-model moet gebruiken om automatisch teksten voor uw producten te genereren, bij te werken en te synchroniseren.

## 1\. Een nieuwe inhoudsflow maken

1.  **Meld u aan** bij uw Fozzels-account.

2.  **Ga** naar de sectie **Inhoudsflows** in het headermenu.

3.  **Selecteer** de gewenste winkel uit het vervolgkeuzemenu **"Kies winkel"**.

4.  **Klik** op de knop **"Nieuwe productflow"**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/dkNQlB5ollDUkXSZvdTsa61-fyN6j1hZdg.png)

5.  **Voer** de floodnaam in het veld **Naam** in (bijvoorbeeld _Mijn eerste inhoudsflow_).

6.  **Selecteer** het kenmerk dat moet worden bijgewerkt uit het vervolgkeuzemenu **Kenmerk** (bijvoorbeeld _Beschrijving_).

7.  **Klik** op de knop **Opslaan**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/qDGTsHq3b5SDyDecYwdbl9fFgzUk1HDQpA.png)

8.  **Controleer** dat de nieuwe flow in de flowlijst verschijnt.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/ebU6dS9TViRZcxsQAbYNYjTpKnW-jd9Rvg.png)

## 2\. AI- en modelconfiguratie (tabblad 2: AI-configuratie)

1.  **Navigeer** naar het tabblad **AI-configuratie** (of **Volgende stap**).

2.  **Kies** de AI-provider (bijvoorbeeld _OpenAI | ChatGPT_ of _Google | Gemini_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/n9NN2mBe7EPu1HcyBY-Xasfs5m2pHHEdaA.png)

3.  **Selecteer** het gewenste AI-model (bijvoorbeeld _GPT-4o (new)_ of _Gemini 2.5 Flash Preview_) door op de overeenkomstige tegel te klikken.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TcZLY49TXUXTtDOIhsZe2EoRUodTwkNTMg.png)

4.  **Schakel** optionele verrijkingsfuncties in, zoals **Websearch inschakelen**, indien nodig.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/Hw53qskGZ3nBjK7FjvvsOEEDFznDFpSOpQ.png)

5.  **Stel** het aantal afbeeldingen (van 1 tot 5) in het veld **Afbeeldingsaantal** in dat de AI voor analyse en inhoudsgeneratie gebruikt (optioneel).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/csny9IgMXvADkHUZbDWfxWYWVQcbXer2wg.png)

6.  **Zorg ervoor** dat de functie **Afbeelding vergroten/verkleinen** is ingeschakeld (aanbevolen om fouten met grote bestanden te voorkomen, lees er hier meer over](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/)).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/h9tWKVAiOCFtONtDB2tWqYyXwNm8CJR4-g.png)

7.  **Stel** de maximale tokenwaarde (**Maximale tokens**) voor generatie in.
**_![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TRNywCO8dEOrABpWxX3SZsrBiU9IPpD3Bw.png)_**

8.  **Selecteer** de gewenste tekststijl (**Tekststijlen**) uit het vervolgkeuzemenu (bijvoorbeeld _Reclame_ of _Creatief_)**.**
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/6COvPEOCPMjqptoEaqLECdel__NHP7_q6w.png)

9.  **Selecteer** de gewenste texttoon (**Tekstonen**) uit het vervolgkeuzemenu (bijvoorbeeld _Formeel_ of _Opgewonden_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/EdX6_M7Fbou3VQRhLIAMcVccLkQ0LXcrJg.png)

10.  **Klik** op de knop **Opslaan** om de configuratie op te slaan.

## 3\. Productselectie en promptcreatie (tabblad 3: flowselectie & prompt)

1.  **Navigeer** naar het tabblad **Flowselectie & prompt**.

2.  **Activeer** de flow door het selectievakje **Actieve flow** in te schakelen.

3.  **Selecteer** het kenmerk voor generatie in het veld **Kenmerk** (moet overeenkomen met stap 1.6).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vNOY4ePi2dZDPZTVgzFsZeKva-Ff-TZTEg.png)

4.  Pas filtering toe:
    4.1. **Gebruik** de filtersectie om de producten voor welke inhoud wordt gegenereerd, te beperken.
    4.2. **Selecteer** een kenmerk (bijvoorbeeld _Kleur_ of _SKU_), definieer de operator (Gelijk aan, Bevat, Is leeg, enz.) en voer de waarde in. 4.3. Let op: Als filters niet worden toegepast, wordt inhoud gegenereerd voor **ALLE** producten die momenteel in uw winkel aanwezig zijn.
**![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vv-HKjbxUtsGgQ1_c0yv_cdOSFcWpAzKDQ.png)**

5.  **Maak** de instructie (prompt) voor de AI:
    5.1. **Schrijf** de kerntekst van de prompt in het centrale promptveld. _Het promptveld mag niet leeg zijn._
    5.2. **Voeg** statische productgegevens in (bijvoorbeeld _Productnaam_ of _SKU_) door elementen uit de sectie Kenmerken te klikken of te slepen.
    5.3. **Voeg** dynamische logica toe (bijvoorbeeld _ALS kleur blauw is_) voor voorwaardelijke inhoudsgeneratie door de sectie Kenmerken (indien ingevuld) te gebruiken.
    5.4. **Geef prioriteit** aan elementen met een hoog percentage datadichtheid om succesvolle inhoudsgeneratie voor de meeste producten te garanderen.
    5.5 Lees meer over het maken van een prompt en het gebruik van het Drag and drop-hulpmiddel [hier](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).
    5.6 Lees meer over het opslaan en laden van een gemaakte prompt als sjabloon [hier](/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/1NaIIRbS4Q7wdMA8cA0jKSnoBsh-XUgdJg.png)

6.  **Klik** op **"Opslaan en voorbeeld"** om de producten weer te geven die aan de voorwaarden voldoen (u ziet het totale productaantal).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/o0INO3KlijbtEPCvPvScfTbViWXrJonVtw.png)
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/tlD_Xv4nww_sdHQbtB-nYMnM7ys3UZ9TnQ.png)

7.  **Klik** op de knop **Nu genereren** in het voorbeeldpop-upvenster om een testgeneratie uit te voeren.
    _![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/MF2Dc75ZZc1YdfVh3W57H-gtKgAR4Jq1XA.png)_

## 4\. Automatiseringsinstellingen (tabblad 4: automatisering)

1.  **Navigeer** naar het tabblad **Automatisering**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/jT9iQbF_psMmhbveX_odN1GaB7VTK988lQ.png)

3.  **Stel** het aantal producten waarvoor inhoud per run wordt gegenereerd in het veld **Aantal producten om inhoud per dag aan te maken** in (bijvoorbeeld 10).

4.  **Vink** het selectievakje **Volledig automatisch** in als u de gegenereerde tekst **onmiddellijk** naar uw winkel wilt sturen zonder bevestiging. _De meeste gebruikers houden deze optie in eerste instantie uitgeschakeld voor handmatige beoordeling._

5.  **Vink** het selectievakje **Automatisch een nieuwe tekst maken wanneer een kenmerk van een product in uw winkel verandert** in om hergeneratie te garanderen wanneer brongegevens worden bijgewerkt.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/rELhAfupqnLV-KmzzijdZcKzYqPy7Y6TlQ.png)

6.  **Schakel** de voorkoming van inhoudsoverlap in (als dit uw eerste inhoudsflow niet is) (optioneel)

-   U kunt een tijdsperiode (**uren, dagen, weken, maanden of jaren**) instellen om te voorkomen dat het systeem nieuwe inhoud voor het specifieke productkenmerken genereert als een vorige flow dit al heeft afgehandeld.

    -   **Goed om te weten:** We zullen nog steeds voorbijgaande generatieresultaten tellen om duplicaten te voorkomen, zelfs als de flow die ze heeft aangemaakt, is verwijderd of gearchiveerd.
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/bKuoDyZad0Su9sGZC5HVmzZt78JZK3cag.png)

7.  **Klik** op de knop **Opslaan**.

8.  **Voer** de flow uit:

-   **Plannen & Sluiten:** De generatie wordt aan de wachtrij toegevoegd en start volgende dag, na de automatische nachtelijke productgroep.

    -   **Nu uitvoeren:** De generatie begint onmiddellijk (voor het aantal producten dat in het veld _Aantal producten om inhoud per dag aan te maken_ is opgegeven).
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/DR3WD6p7OkbQJcJEUgwKTj-yuvy7HCtong.png)

## 5\. Resultaten controleren (batchlijst)

1.  **Klik** op de knop **Batchlijst** in de huidige Flow om de gegenereerde batches weer te geven.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/s3rLqx0aN3qf63h0ohkm2ITtcQ4dpVGSgw.png)

2.  **Controleer** de gegenereerde gegevens in de kolom **Doelkenmerk**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/krPPKGK1WQcRrrduGQVGEUUTkyNLOhI_2w.png)

3.  **Bewerk** indien nodig de gegenereerde tekst door erop te klikken (in show HTML-modus).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/iiy9xDUPUbNJaN3Dv19ByLztRC6SuuFw_A.png)

4.  **Klik** op **"Opslaan en synchroniseren"** om de bevestigde inhoud handmatig naar uw winkel te sturen.

5.  **Opmerking:** Als Fozzels de inhoud als **"verdacht"** markeert, kan deze niet worden gesynchroniseerd zonder voorafgaande hergeneratie. **Genereer** de inhoud opnieuw totdat deze aan de verificatievereisten voldoet.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/VlcFFEZm3jLMa2CfL0wyEj6i5l4B1n9sYA.png)

![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/lSusJ64-jIyhQStOHHai5u5y8pwWE2YoWw.png)

6\. **Lees** hier meer over het controleren van resultaten, handmatige synchronisatie en afhandeling van fouten in gegenereerde inhoud [hier](/content-creation-flows/tracking-of-the-generated-results-dashboard/).
