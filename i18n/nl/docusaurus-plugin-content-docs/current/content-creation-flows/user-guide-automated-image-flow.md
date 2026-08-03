---
id: '103000400446'
title: '4.5.1. Gebruikershandleiding: Geautomatiseerde afbeeldingsstroom'
sidebar_position: 13
slug: /content-creation-flows/user-guide-automated-image-flow
description: Afbeeldingsstroom is een professioneel gereedschap dat is ontworpen voor de massale generatie en synchronisatie van productafbeeldingen met behulp van AI. Door een stroom eenmaal in te stellen, stelt u een autonoom systeem
keywords:
- afbeeldingsflow
- beeldflow
- afbeeldingsgeneratie
- contentflow
- inhoudsstroom
- contentgeneratie
- batchlijst
- invoerprompt
---

**Afbeeldingsstroom** is een professioneel gereedschap dat is ontworpen voor de massale generatie en synchronisatie van productafbeeldingen met behulp van AI. Door een stroom eenmaal in te stellen, stelt u een autonoom systeem in dat duizenden producten verwerkt, inclusief nieuwe items die in de toekomst aan uw winkel worden toegevoegd via dynamische op voorwaarde gebaseerde filtering.

> **Belangrijk:** We raden u ten zeerste aan de stroom **niet te activeren** (de schakelaar "Actieve stroom" **UIT** houden) totdat u alle configuraties hebt voltooid en uw instellingen hebt getest.

## 1. Een nieuwe afbeeldingsstroom aanmaken (tabblad 1)

Dit tabblad verwerkt de basisidentiteit en -verbinding van uw automatisering. Er zijn twee primaire manieren om een ​​nieuwe stroom in te stellen:

-   **Optie A: Via het menu Afbeeldingsstromen** - Navigeer naar het gedeelte **Afbeeldingsstromen** in de bovennavigatiebalk en klik op de knop **Nieuwe afbeeldingsstroom**. Selecteer achtereenvolgens uw integratie, website en winkel uit de vervolgkeuzelijsten.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/aGysMRzpl5ijAiHFUH5TFnasSdIEP1py9w.png)

-   **Optie B: Uit de productcatalogus** - In het gedeelte **Catalogus → Producten** filtert u de producten die u wilt verwerken, selecteert u deze en klikt u op **Acties → afbeeldingsstroom maken**. Deze methode is sneller omdat deze automatisch uw winkel- en productgeselecteerde context vooraf invult.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/WVP7KcJNwsPTLqIzLSQQwGsAoBCdxAdqLg.png)

**Essentiële stappen:**

1.  **Noem uw stroom:** Geef uw stroom een duidelijke, beschrijvende naam (bijv. "Zomerjurken 2026 - Gemini Pro").

2.  **Sla uw voortgang op:** Alle wijzigingen die u hebt aangebracht in de stroomnaam of winkelgeselecteerde, moeten worden bevestigd door op de knop **Indienen** onder aan de pagina te klikken.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/XUm-rzBUqRa_mFIUflBlrrZlaYzDnRHgMw.png)

## 2. AI-configuratie (tabblad 2)

Op dit tabblad definieert u de "intelligentie" en visuele uitvoer van uw generatie. De instellingen verschillen aanzienlijk afhankelijk van de provider die u hebt gekozen.

### OpenAI | ChatGPT

Bij het selecteren van het model **GPT Image 1** hebt u toegang tot de volgende parameters:

-   **Kwaliteit**: Selecteer uw voorkeursgenering kwaliteit uit het vervolgkeuzelijstmenu (**Auto, Hoog, Gemiddeld of Laag**).

-   **Afbeeldingsgrootte**: Kies het gewenste formaat uit het vervolgkeuzelijstmenu (**Auto, Vierkant, Liggend of Portret**). Opmerking: een interactief raster voor GPT komt binnenkort beschikbaar.

-   **Afbeeldingstelwerk**: U kunt per enkel uitvoering **tussen 1 en 4 variaties** voor elk product genereren, zodat u meerdere opties voor handmatige beoordeling hebt.

-   **Technische limieten**: De maximale invoerbestandsgrootte voor GPT is **50 MB**.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/6Id3aPkXYEb0MEhxve0-510480uvgB2VrA.png)

### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/5NYWCV_4Lb3wxJ4MwkVOe96Mk4o5LU4NVg.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/oiDXnZOLp3NVu3waNL4ZREtyriHjNEvGgQ.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/eQxo8gJitU9Q5Zp7y3BE4FljSNrHhgqITw.png)Google | Gemini

Gemini-modellen gebruiken een interactief **uitvoerraster** voor precieze controle over uw resultaten.

-   **Beschikbare modellen**: Kies tussen **Gemini 2.5 Flash (Nano Banana)**, **Gemini 3 Pro (Nano Banana Pro)** en **Gemini 3.1 Flash (Nano Banana 2)**.

-   **Afbeeldingstelwerk**: Voor alle Gemini-modellen is deze waarde vast ingesteld op **1** (het veld is uitgeschakeld) omdat ze één geoptimaliseerde afbeelding per aanvraag genereren.

-   **Technische limieten**: De maximale invoerbestandsgrootte is **7–10 MB**.

-   **Virtueel passen**: Een gespecialiseerd model voor mode.
**Opmerking:** Voor dit model is het uitvoerraster uitgeschakeld omdat het systeem automatisch een vast, geoptimaliseerd formaat gebruikt om realistische kleding montage te garanderen.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/Ydm8oxLyvSgZ7H_x5R1Uf0kb_u7RxmIXRw.png)

> Voor meer informatie over AI-modellen en hun specifieke technische mogelijkheden kunt u hier meer lezen [link nog toe te voegen].

#### **Het uitvoerraster gebruiken (alleen Gemini)**

Met het raster kunt u de exacte "vorm" en kwaliteit van uw gegenereerde afbeeldingen bepalen:

1.  **Selecteer aspectverhouding:** Kies in de linkerkolom een verhouding (bijv. **1:1 vierkant** voor productkaarten, **3:4 portret** voor mode of **16:9 liggend** voor banners).

2.  **Selecteer resolutie (kwaliteit):** Kies een kolom op basis van de mogelijkheden van het model (**1K, 2K of 4K**). Klik op de specifieke resolutiecel (bijv. **1024x1024**).

3.  **Visuele bevestiging:** Een groen vinkje verschijnt in de geselecteerde cel. Controleer het **voorbeeldpaneel** aan de rechterkant om de framevorm, exacte pixelafmetingen en de **geschatte tokens** (geschatte kosten) voor de generatie te zien.

4.  **Compatibiliteit:** Cellen die zijn gemarkeerd als "Niet ondersteund" zijn niet beschikbaar voor het geselecteerde model.

**⚠️ Herinnering:** Zorg ervoor dat u na het selecteren van uw model- en uitvoerinstellingen op de knop **Opslaan** klikt om deze voorkeuren op te slaan. Uw stroom zal deze wijzigingen niet toepassen tenzij ze zijn opgeslagen.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/gkfM9PdTV36LEV-UL7SN9obfvD3AOKt7_Q.png)

## 3. Stroomselectie en prompt (tabblad 3)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/H3B5OOvEGyTufKlUAsFd_uzfwAVXLbVcEA.png)

Dit tabblad is het hart van uw inhoudscreatie. De eerste en meest kritische stap is het configureren van uw **voorinstellingen**.

### **Afdeling: Voorinstelling selecteren**

Voorinstellingen zijn visuele verwijzingsafbeeldingen die als instructies voor de AI dienen. Ze bepalen de algemene stijl, verlichting en context voor **elk** product dat binnen deze stroom wordt verwerkt.

> **De gouden regel: Universaliteit** Aangezien één reeks voorinstellingen wordt gebruikt voor een hele groep producten (bijv. honderden jurken of al het schoeisel), moeten uw selecties **UNIVERSEEL** zijn.
>
> -   _Voorbeeld:_ Als u een **Product** voorgeset toevoegt met een specifieke blauwe SKU, zou de AI per ongeluk kunnen proberen blauwe details aan elk ander artikel in de stroom toe te voegen. Kies alleen verwijzingen die geschikt zijn voor de volledige productcategorie die u verwerkt.
>

#### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FJlYttezkuyQFvSp16LDTSwFhOa5MFopmw.png)
**1. Limieten en capaciteit**

Boven aan het blok ziet u een teller (bijv. **8/13**).

-   **Maximale capaciteit:** Dit is afhankelijk van uw gekozen AI-model (bijv. tot **14** voor Gemini Pro en Gemini 3.1 Flash).

-   **Samenstelling:** Eén sleuf is altijd gereserveerd voor de hoofdafbeelding van het product dat wordt verwerkt; de resterende sleuven zijn voor uw universele voorinstellingen.

#### **2. Voorgeset types en bibliotheekzoek**

Klik op de knop **"Voegsetset toe"** om een ​​type te kiezen. Gebruik het **filtersysteem** om snel te vinden wat u nodig hebt:

-   **Model:** bepaalt de pose en het uiterlijk van de persoon die uw producten draagt. Filter de bibliotheek op geslacht, leeftijd of etniciteit om een ​​look te vinden die uw merk vertegenwoordigt.

-   **Scène:** bepaalt de omgeving (bijv. Studio, straat, interieur). Gebruik categoriefilters om een ​​achtergrond te vinden die de gehele productlinie aanvult.

-   **Product (aanvullende hoeken):** helpt de AI complexe items te begrijpen (bijv. de textuur van stof of de zool van een schoen).

-   **Zoeken:** Gebruik het catalogusfilter (dat precies zoals het hoofdgedeelte **Catalogus** werkt) om op titel, SKU of categorie te zoeken.

-   **Afbeeldinggeselecteerde:** Zodra u een representatief product hebt gevonden, kunt u **elk van de afbeeldingen** selecteren (bijv. een achteraanzicht of close-up). Markeer gewoon de gewenste afbeelding met een **groen vinkje** en sla op.

-   **Afbeelding:** gebruikt voor texturen, logo's of specifieke merkkenmerken.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/UBYhntqBETFRErz_N1DJPPrNu8VI8_uh-A.png)

#### **3. Uw eigen assets uploaden (+ toevoegen)**

Als u uw eigen afbeelding (voor model-, scène- of afbeeldingstypen) via de knop **\+ toevoegen** uploadt, moet u **filterwaarden** aan dat bestand toewijzen.

-   Door uw upload met een label te voorzien (bijv. het scènetype of modelgeslacht opgeven), wordt het bestand door het systeem geïndexeerd. Dit stelt u in staat uw aangepaste assets onmiddellijk in toekomstige stromen via uw privébibliotheek te vinden en opnieuw te gebruiken.

#### **4. Verwijderen en voltooien**

-   Als u een verwijzing wilt verwijderen, klikt u op het **prullenpictogram** op de voorgeset kaart.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/i37UkovmY_SDzeW_4IjJEJGW6g7337yjEg.png)

-   **Belangrijk:** Nadat u voorinstellingen hebt toegevoegd of verwijderd, **MOET** u op de knop **Opslaan** onder aan de pagina klikken. De AI-assistent herkent de bijgewerkte verwijzingsset niet totdat de wijzigingen zijn opgeslagen.

### **Afdeling: Filter en selectieproducten**

Dit gedeelte stelt u in staat precies de lijst met items te bepalen waarvoor de AI nieuwe afbeeldingen genereert.

> **❗ Belangrijk:** Standaard zijn **ALLE** producten uit uw winkel opgenomen wanneer een nieuwe stroom wordt aangemaakt. Het aantal producten dat in de koptekst wordt weergegeven (**Filter en selectieproducten - XX**) is dynamisch en wordt in realtime bijgewerkt naarmate u uw instellingen aanpast.

#### **1. Productkaarten en afbeeldinggeselecteerde**

Het blok toont een raster van uw productkaarten.

-   **Pictogram "stapel afbeeldingen":** Een pictogram in de rechterbovenhoek van een kaart geeft aan dat het product meer dan één afbeelding heeft.

-   **Kies de basisafbeelding:** Klik op een productkaart om de galerij-pop-up te openen. Selecteer de meest geschikte foto om als "basisafbeelding" voor generatie te dienen (dit is de gereserveerde sleuf die samen met uw voorinstellingen naar de AI wordt verzonden).

-   Standaard gebruikt het systeem de **eerste** afbeelding uit uw catalogus.

-   Om deze te wijzigen, selecteert u gewoon een ander foto en klikt u op **opslaan** in de pop-up.

#### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/BsDYOnyD0cPg_dl35r0HT6YgOmKmffLBWQ.png)
**2. Vereisten: Producten met afbeeldingen**

Producten die **geen afbeeldingen** in uw database hebben, worden automatisch uit dit blok uitgesloten. AI-generatie via stromen vereist een visuele basis om correct te werken.

#### **3. Filters gebruiken (voorwaarden)**

Om een ​​bepaalde groep producten te selecteren (bijv. alleen "jurken" van een bepaald merk), gebruikt u het filterblok. De logica werkt identiek aan het hoofdgedeelte **Catalogus**. Alleen producten die aan deze criteria voldoen, blijven in de stroom.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c_yGlTAqTpbYt9K8gCiBwMDPPLqEkUbqUQ.png)

#### **4. Handmatig ingesteld beheer**

U kunt uw lijst verder verfijnen na het toepassen van filters met de volgende besturingselementen:

-   ✅ **Geselecteerde uitsluiten:** Vink de vakjes op specifieke producten aan die u uit de huidge set wilt verwijderen en klik op deze knop.

-   ✅ **Alleen geselecteerde opnemen:** Vink specifieke producten aan die u wilt behouden; alle andere worden uit de stroom verwijderd.

-   **Knop Vernieuwen:** Als u een fout hebt gemaakt tijdens handmatige selectie, klikt u op **Vernieuwen**. Dit stelt de set opnieuw in op de status die door uw filters is bepaald, en maakt alle handmatige "uitsluiten" of "opnemen" acties ongedaan.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ekGLld7o3QbwkYFOEmsqTUrlioP8xJlXtA.png)

#### **5. Dynamische catalogussynchronisatie**

Afbeeldingsstromen volgen dezelfde regels als inhoudsstromen:

-   De productset wordt na elke dagelijkse synchronisatiepool vernieuwd.

-   Dit betekent dat als u een nieuw product aan uw winkel toevoegt dat overeenkomt met de filters die in uw stroom zijn ingesteld, het **automatisch** de volgende dag aan de generatiewachtrij wordt toegevoegd.

* * *

**⚠️ Herinnering:** controleer altijd het uiteindelijke productaantal voordat u uw stroom opslaat om ervoor te zorgen dat u niet per ongeluk uw hele winkel in plaats van een bepaalde categorie als doel hebt ingesteld.

### **Afdeling: promptredacteur**

De prompt is de definitieve reeks instructies die u naar de AI stuurt. In Image Flow gebruikt de prompt-redacteur dezelfde geavanceerde logica als Content Flow, waardoor u hooggekwalificeerde visuele omschrijvingen op schaal kunt maken.

#### **1. Het principe van universaliteit**

Omdat deze prompt wordt toegepast op elk artikel in uw stroom, moet het **MAXIMAAL UNIVERSEEL** zijn.

-   Vermijd handmatige beschrijving van specifieke kleuren of texturen (bijv. schrijf niet "een rode zijden jurk").

-   Gebruik in plaats daarvan **dynamische attributen** om ervoor te zorgen dat de AI de unieke kenmerken van elk specifiek product nauwkeurig identificeert.

#### **2. Dynamische attributen gebruiken (slepen en neerzetten)**

Aan de rechterkant van de redacteur vindt u een lijst met beschikbare **attributen** (bijv. `Kleur`, `Materiaal`, `Merk`, `Producttype`).

-   **Hoe het werkt:** Sleep gewoon een attribuut uit de lijst en zet het rechtstreeks in uw tekst neer.

-   **Gedetailleerde gids:** U kunt hier meer lezen over de mechanica en mogelijkheden van de drag-and-drop redacteur....

-   **Resultaat:** Wanneer de stroom wordt uitgevoerd, vervangt het systeem automatisch het label (bijv. `{{Color}}`) met de werkelijke waarde van elke specifieke productkaart. Dit garandeert dat een blauwe jurk blauw wordt weergegeven en een leren jasje met realistische leer textuur wordt weergegeven.

#### **3. Sjablonen en herbruikbaarheid**

Om uw werkstroom te versnellen, gebruikt u de functie **Sjablonen** onder aan de redacteur:

-   **Opslaan als sjabloon:** Zodra u een perfecte prompt hebt gemaakt die goed werkt voor een bepaalde categorie, slaat u deze op voor toekomstig gebruik.

-   **Laden:** importeer snel bestaande sjablonen in nieuwe stromen om visuele consistentie in uw hele winkel te behouden.

#### **4. Attributen (indien ingevuld)**

Schakel naar het tabblad **Attributen (indien ingevuld)** om precies te zien welke gegevens momenteel beschikbaar zijn voor uw geselecteerde productset. Dit helpt het gebruik van lege tags te voorkomen die kunnen leiden tot inconsistente AI-resultaten.

* * *

**Pro Tip:** Een hooggekwalificeerde universele prompt moet de **omgeving, verlichting en stemming** beschrijven die door uw voorinstellingen worden bepaald, terwijl de specifieke **productdetails** aan de dynamische attributen zijn overgelaten.

**⚠️ Uiteindelijke stap voor tabblad 3:** Klik na het voltooien van uw prompt op de knop **Opslaan**. Deze actie koppelt uw voorinstellingen, productgeselecteerde en promptinstructies aan één functioneel automatisering.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/9UcxVcuz2XFcQkCC4qSqfhHb7P0EZOtl3w.png)

## ****4. Automatisering (tabblad 4)****

Het tabblad **Automatisering** dient als de "controle toren" voor uw stroom. Dit is waar u het tempo van inhoudsschepping bepaalt, publicatiebeleidsregels beheert en de generatieproces officieel start.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FYJ_qkFMdxjFIhXpgfz3GkHZs7AhNpgpwA.png)

### **1. Dagelijkse verwerkingslimieten**

-   **Aantal afbeeldingen om per dag te verwerken**: Dit veld bepaalt precies hoeveel producten uit uw geselecteerde set elke 24 uur door de AI worden verwerkt.

-   **Doel**: Dit stelt u in staat uw tokenverbruik te beheren en garandeert een regelmatige, beheersbare verzending van nieuwe visuele inhoud voor uw winkel.

### **2. Automatisering en synchronisatiebeleid**

-   **Strategie handmatige bevestiging**: Om hoge kwaliteit en menselijk toezicht in stand te houden, is **volledig geautomatiseerde synchronisatie naar uw winkel momenteel uitgeschakeld**.

-   **Werkstroom**: Hoewel de **generatie** van afbeeldingen automatisch is volgens uw schema, vindt de werkelijke **synchronisatie** (uploaden) van deze afbeeldingen naar uw storefront (Shopify, Magento, enz.) alleen plaats nadat u deze hebt bekeken en goedgekeurd in de **Batch List**.

### **3. De stroom activeren en beheren**

-   **Schakelaar Actieve stroom**: gelokaliseerd in de rechterbovenhoek, deze schakelaar schakelt de volledige automatiseringslogica voor deze stroom in of uit.

-   **De opslaan regel**: Elke wijziging in de status **Actieve stroom** - of u deze voor het eerst aanzet of een oude stroom uitschakelt - **MOET** worden bevestigd door op de knop **Opslaan** te klikken. Als u niet opslaat, keert de schakelaar terug en treden uw wijzigingen niet in werking.

### **4. Uitvoeringstrigers**

Zodra de stroom actief is, hebt u twee manieren om generatie in te stellen:

-   **Plan en sluit**:

-   Deze knop plant de stroom voor automatische uitvoering.

-   **Timing**: generatie start niet onmiddellijk; deze wordt alleen na de volgende **dagelijkse productverzamelingssynchronisatie** (de systeemgebruikersupdate van uw winkelcatalogus) geïnitieerd.

-   **Nu uitvoeren**:

-   Deze knop verschijnt als aanvullende optie zodra de stroom is geactiveerd.

-   **Timing**: als u op **Nu uitvoeren** klikt, wordt de dagelijks wachten omzeild en wordt de generatie **onmiddellijk** voor de limiet van de huidge dag gestart.

-   _Opmerking_: een handmatige run telt mee voor uw dagelijkse quota. De volgende geplande run vindt de volgende dag plaats na de standaard poolsynchronisatie.

### **5. Generatielogica en efficiëntie**

-   **Beginsel voor eenmalige generatie**: Om dubbele kosten en redundante gegevens te voorkomen, genereert de AI voor een bepaald product slechts **eenmaal** per stroom een ​​nieuwe afbeelding.

-   Als een afbeelding al succesvol voor een product in deze stroom is gegenereerd, slaat het systeem deze in toekomstige cycli over.

-   **Hergeneraties**: Als u niet tevreden bent met een bepaald resultaat, kunt u handmatig een "hergenering" vanuit de sectie **Batch List** activeren.

### **6. Batch List en deactivering**

-   **Batch List**: Klik op deze knop om uw productielogboek te openen. Hier kunt u de status van uw "batches" controleren, AI-resultaten weergeven en de uiteindelijke synchronisatie naar uw winkel uitvoeren.

-   **Deactivering**: als de stroom niet langer relevant is of u productie moet pauzeren, zet u de schakelaar **Actieve stroom** op "UIT" en klikt u op **Opslaan**. Dit stopt onmiddellijk het inplannen van verdere generaties.

**Definitieve herinnering**: Zorg altijd dat uw **dagelijkse limiet** correct is ingesteld voordat u op **Opslaan** klikt. Zodra de stroom actief is, begint het systeem producten voor verwerking in de wachtrij in te plannen volgens uw instellingen.

Hier is de volledige gids voor de sectie **Batch List** in het Nederlands, met alle technische details over synchronisatielogica en gebruikersinterface.

## **Batch List**

De **Batch List** is uw hub voor kwaliteitscontrole en moderatie. Elke stroomuitvoering (of deze nu automatisch of handmatig via de knop _Nu uitvoeren_ is) maakt een nieuw batchitem in de lijst aan de linkerkant.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/LIJVpWk3sHHmcIRCOQIvCJACgNLRBBIHRw.png)

### **1. Navigatie en controle**

-   **Batch zijbalk**: Het linkerpaneel toont alle uitvoeringen georganiseerd op datum en het aantal verwerkte producten (`Aantal`).

-   **Voortgangsbalk**: Een kleurgecodeerde schaal in de rechterbovenhoek geeft een visuele status van de batch: groen voor voltooid, geel voor in uitvoering en grijs voor wachting.

-   **Automatisch vernieuwen**: U kunt de functie `Vernieuwen elke X s` inschakelen om de pagina automatisch bij te werken terwijl de AI wordt verwerkt.

### **2. Werken met resultaten (afbeeldingsvoltooiingslijst)**

De hoofdtabel aan de rechterkant toont de resultaten voor elk specifiek product:

-   **Miniatuur**: De originele productfoto die als basis wordt gebruikt.

-   **SKU**: De product-ID met een directe koppeling naar de pagina in het beheer van uw winkel.

-   **Resultaten**: De gegenereerde afbeelding. Als u de muiscursor over de foto houdt, verschijnen snel actieknoppen:

    -   **Weergeven (oogpictogram)**: Opent het gedetailleerde inspectievenster.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/PExqbyx61jYHouA1Q6gS-Quy1Ea-rWQ9Iw.png)

    -   **Download (pijlpictogram)**: Slaat het bestand rechtstreeks op uw apparaat op.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/a8L2H8t07YmOsC9exAXCkS0ORMRCAR9ANA.png)

    -   **Synchroniseer (vinkjepictogram)**: Stuurt deze specifieke foto onmiddellijk naar uw website.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/JnEq8veB5PUb88yklirTqpIJncbmCmtUNw.png)

### **3. Inspectie en analyse (voltooiingsweergave)**

Als u op **Weergeven** klikt, opent een venster voor definitieve verificatie:

-   **Linkerpaneel**: Toont het uiteindelijke hooggekwalificeerde resultaat.

-   **Rechterpaneel**: Bevat een kolom met alle invoergegevens. De eerste afbeelding is altijd de originele productfoto, gevolgd door een schuifbare feed van alle gebruikte voorinstellingen (modelverwijzingen, achtergronden, enz.).

-   **Voltooiingsopties**: Het teal "oog" pictogram in de kolom `Acties` opent een pop-up met technische metagegevens: het specifieke AI-model, resolutie en de volledige uiteindelijke prompt met dynamische attributen al ingevuld.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/AgSQKU_4s6dTTRl2n8Uh7u8u__XcDx23FA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/fy3a6eQD7I0VTvO9a0bMe2FSSrBLMGe4_A.png)

### **4. Aanpassingen en hergenering**

Als u niet tevreden bent met een resultaat, gebruikt u het pictogram **Regenereren** (cirkelvormige pijl):

-   **Bewerking**: U kunt de prompttekst wijzigen of nieuwe attributen toevoegen via drag & drop specifiek voor die SKU.

-   **Geen limieten**: U kunt een afbeelding zo vaak als nodig opnieuw genereren totdat u het gewenste resultaat bereikt.

-   **⚠️ Belangrijk**: Een nieuwe generatie **verwijdert permanent** de vorige versie van de afbeelding.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/CEgHxH_y3eClyY2jxcXg1pAUpocdbFQwbQ.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ipoM6y0fgh9G7Rpm1mmCt7mWXvyDn2JikQ.png)

### **5. Winkel Synchronisatie**

Aangezien volledige automatisering momenteel is uitgeschakeld om kwaliteit te garanderen, beslist u wanneer u inhoud publiceert:

-   **Individueel**: Klik direct op de afbeelding in de kolom `Resultaten` op de knop met vinkje.

-   **Status**: Tot publicatie zal de kolom `Gesynchroniseerd op` de status `Wacht op resultaatbevestiging` weergeven.

-   **⚠️ Waarschuwing**: Synchronisatie is **onomkeerbaar -** het kan niet worden geannuleerd zodra het is gestart.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c9uHBa_kSFHkR_YXg2rBCu-uOXq4xMWgVw.png)

### **Veel sterkte en veel plezier bij het creëren!**

Gefeliciteerd! U bent nu volledig uitgerust om **Fozzels Image Flow** onder de knie te krijgen. Dit is uw ruimte om ideeën in slechts een paar klikken in hooggekwalificeerde visuele inhoud om te zetten.

## **Bekijk de gedetailleerde instructies in de video**
