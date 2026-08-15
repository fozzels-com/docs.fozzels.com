---
id: '103000408096'
title: '4.5.1.a. Gebruikershandleiding: Geautomatiseerde afbeeldingsstroom voor Magento 2'
sidebar_position: 15
slug: /content-creation-flows/user-guide-automated-image-flow-for-magento-2
description: Afbeeldingsstroom voor Magento is een gespecialiseerde, ondernemingstoolautomatisering ontworpen voor massale AI-afbeeldingsgeneratie, geautomatiseerde metagegevensmapping en rechtstreekse syn
keywords:
- afbeeldingsflow
- beeldflow
---

**Afbeeldingsstroom voor Magento** is een gespecialiseerde, ondernemingstoolautomatisering ontworpen voor massale AI-afbeeldingsgeneratie, geautomatiseerde metagegevensmapping en rechtstreekse synchronisatie met uw Magento-catalogus. Door deze stroom te configureren, stelt u een autonome pijplijn in die uw Magento-winkel controleert, duizenden producten verwerkt en uw website dynamisch bijwerkt op basis van geavanceerde filtercriteria.

> **Belangrijk:** We raden u ten zeerste aan de stroom **niet te activeren** (de schakelaar "Actieve stroom" **UIT** houden) totdat u alle configuraties in Fozzels hebt voltooid en uw instellingen hebt getest.

## 1. Een nieuwe Magento-afbeeldingsstroom aanmaken (tabblad 1)

Dit tabblad verwerkt de primaire verbinding en identiteit van uw Magento-automatiseringsreeks.

-   **Optie A: Via het menu Afbeeldingsstromen** — Navigeer naar **Afbeeldingsstromen** in de bovennavigatiebalk, klik op **Nieuwe afbeeldingsstroom**, en selecteer achtereenvolgens uw **Magento-integratie**, website en winkelweergave uit de vervolgkeuzelijsten.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3sMs1RpGzJC1CfMq-OPKPRx6S7bvaX80XQ.png)

-   **Optie B: Uit de productcatalogus** — Ga naar **Catalogus → Producten**, filter de specifieke Magento-SKU's die u wilt verwerken, selecteer ze, en klik op **Acties → Afbeeldingsstroom maken**. Dit vult uw Magento-winkelweergave en productcontext automatisch in.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/FYFCs9P6ybHQ4OrlVaSn9YmgmftqIdhxAw.png)

**Essentiële stappen:**

1.  **Noem uw stroom:** Geef uw stroom een duidelijke, beschrijvende naam (bijv. "Magento Store - Herfst 2026 - Gemini Pro").

2.  **Bevestig selectie:** Bevestig uw Magento-winkelparameters door op de knop **Indienen** onder aan de pagina te klikken.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/liZ6uL_K1ryZ9ltZQsCUAhG6jAYP4UqhrQ.png)

## 2. AI-configuratie en mediumraster (tabblad 2)

Op dit tabblad definiëert u de core AI-modelmotor en de exacte visuele indelingskenmerken die vereist zijn voor uw Magento-themasjablonen.

### **AI-provider en modelgeselecteerde**

Selecteer uw verwerkingsnetwerk en specifiek model uit de interactieve kaarten op het scherm:
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3eMz8tYlXhUnC_8wEhgtjjig_7FHQP_x-w.png)

-   **Google | Gemini:**

-   **Gemini 2.5 Flash | Nano Banana:** Een snel en efficiënt model geoptimaliseerd voor taken met hoog volume en lage latentie. Ondersteunt **tot 3 verwijzingsvoorinstellen**.

-   **Gemini 3 Pro | Nano Banana Pro:** Ontworpen voor professionele assetproductie en complexe instructies. Voorzien van een standaard "Thinking"-proces dat samenstelling verfijnt en ondersteunt **tot 14 verwijzingsvoorinstellen**.

-   **Gemini 3.1 Flash | Nano Banana 2:** Een bijgewerkt, zeer efficiënt model in evenwicht voor assetcreatie met hoog volume. Ondersteunt **tot 14 verwijzingsvoorinstellen**.

-   **Virtueel passen `NIEUW`:** Een gespecialiseerd model voor het genereren van fotorealistische afbeeldingen die laten zien hoe kleding op een persoon uitziet (vereist een voorgeset voor persoonafbeeldingen en een voorgeset voor productkleding).

-   **OpenAI | ChatGPT:**

-   **GPT-afbeelding 1:** Een precieze, hooggekwalificeerde afbeeldingsgeneratiemodel met gebruik van de meest recente multimodale raamwerken.

-   **GPT-afbeelding 1 Mini `NIEUW`:** Een zeer rendabele afbeeldingsgeneratie- en bewerkingsmotor — met de beste waarde voor gebruiksgevallen met hoog volume.

-   **GPT-afbeelding 2 `NIEUW`:** Een geavanceerd generatiemodel gebouwd voor snelle, hooggekwalificeerde weergave met flexibele resoluties tot 3840px.

-   **xAI:**

-   **Grok Stel Afbeelding in:** Het standaard afbeeldingsgeneratiemodel van xAI, dat hooggekwalificeerde afbeeldingen uit tekstprompts oplevert. Ondersteunt **tot 5 verwijzingsvoorinstellen**.

-   **Grok Imagine Image Pro `PRO`:** Premium xAI-architectuur met superieure afbeeldingskwaliteit met verbeterde detail- en textuurnauwkeurigheid. Ondersteunt **tot 5 verwijzingsvoorinstellen**.

### **Het interactieve uitvoerindelingsraster**

Magento-thema's vertrouwen zwaar op precieze afbeeldingsafmetingen om indelingsschift op uw frontend te voorkomen. Gebruik het raster om exacte pixelspecificaties vast te leggen:

1.  **Selecteer aspectverhouding:** Kies in de linkerkolom uw indelingsgeometrie (bijv. standaard **1:1 vierkant** voor categorierasters of **3:4 portret** voor Product Detail Pages (PDP)).

2.  **Selecteer resolutie en schaal:** Klik rechtstreeks op een rastercel die is ingekwartierd naar uw gewenste pixtier onder kolommen **512, 1K, 2K of 4K** (bijv. **512x512** tot **4096x4096** om een diepzoomervaring voor schiet op uw storefront).

3.  **Het voorbeeldpaneel:** Het interactieve rechterpaneel geeft dynamisch een visuaal bijsnijdkader, de doelbestandsindeling en berekent de **geschatte grootte** (bestandsgewicht) en **geschatte tokens** (generatiekosten) per afbeeldingsaanvraag.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/Ked7uS5641FdzLgFJkkyBLIIB44pYiuh5Q.png)
3. Magento-catalogusfiltering en prompting (tabblad 3)

Dit gedeelte fungeert als de creatieve hersenen van uw Magento-stroom, waarmee u producten dynamisch kunt filteren en inheemse attributen in uw prompts kunt injecteren.

### **Afdeling A: Voorinstelling selecteren**

-   **De universaliteitsregel:** Aangezien één reeks voorinstellingen op een hele Magento-productcluster van toepassing is, kiest u neutrale activa. Vermijd verwijzingen met onderscheidende merkmarkeringen of unieke details die per ongeluk over verschillende merken in uw Magento-inventaris kunnen gaan.

-   **Capaciteitsteller:** Volg uw voorgeset toewijzingsleuven via de bovenkant teller. Modellen zoals Gemini Pro staan ​​tot 14 verwijzingsleuven toe, waardoor u extreme multi-angle- en verlichtingsconsistentie kunt vaststellen.

-   **Referenties toevoegen:** Klik op het grote **\[+\] Voegsetset toe** vak om het inheemse vervolgkeuzelijstmenu te openen en uw verwijzingstype te selecteren:

1.  **Model:** Kies een modeelactief uit de geïntegreerde Fozzels-bibliotheek om poses en menselijke styling in te stellen.

2.  **Scène:** Selecteer een achtergrondstijl of omgevingssjabloon.

3.  **Product:** Voeg een aanvullende verwijzingsfoto van uw product in om de AI meer hoeken of details te geven.

4.  **Afbeelding:** Upload een aangepast afbeelding- of verwijzingsbestand rechtstreeks uit uw computerindeling.

    5.  **Gegenereerde media:** Kies een afbeelding die al in Fozzels succesvol is weergegeven om consistentie te behouden.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/poqeQbutVP7nGAfD5MDN1F9aCnQ23CE6iw.png)

### **Afdeling B: Geavanceerde Magento-regelbuilder (filter- en selectieproducten)**

-   **Logische operatoren:** Combineer meerdere criteriaparameters via `EN` of `OF` logische paden.

-   **Gerichte SKU-zoekopdrachten:** Gebruik voorwaarden zoals `SKU` `in` `[Waarde, Waarde]` om uw stroom rechtstreeks op expliciete, kommagescheiden Magento-attribuutrijen in te wijzigen. Het interactieve voorbeeld onder bijgewerkt onmiddellijk om overeenkomende items weer te geven.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/l4Ka92XutqmJkQgI3uopMdusTJwSckSEIw.png)

### **Afdeling C: Dynamische attribuut prompts**

-   **Injectiemedia voor Magento-attribuut:** Schrijf uw ontwerpaanwijzingen in het hoofdterminalvenster en gebruik vervolgens het **Attributenpaneel** aan de rechterkant. U kunt inheemse Magento-gegevensvelden (zoals `Kategorie`, `Kleur` of `Materiaal`) rechtstreeks in uw tekst slepen en neerzetten. Fozzels zal deze aanduidingen dynamisch vervangen door unieke waarden voor elk afzonderlijk product dat in de batch wordt verwerkt.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/hSKoFNYycQr--RrbjrFaaNum4tvErHYsHA.png)

## 4. Magento-automatisering en afbeeldingsnaamgevingsconfiguraties (tabblad 4)

Dit tabblad bepaalt hoe uw media-assets in eerste instantie in de wachtrij worden geplaatst voor verwerking en gestructureerd voor injectie in de Magento-databasearchitectuur, waardoor juiste standaardgegevenstoewijzing en SEO-optimalisatie worden gegarandeerd.

-   **Aantal afbeeldingen dat per dag moet worden verwerkt:** Stel drempelbeperkingen in om generatiestromen over langetermijnachtergrondhandelingen in te beperken.

-   **Bestandsnaam voor gepushte afbeeldingen (SEO-naamgeving):** Maximaliseer de SEO-gezondheid van uw Magento-winkel door programmatische bestandsnamen aan te brengen. Gebruik standaardtekst of voeg dynamische attribuutslakken in uit het vervolgkeuzelijstmenu (zoals `{name}` voor de productnaam of specifieke codeparameters zoals `{color}`). Spaties worden automatisch vereenvoudigd met schone koppeltekens (`-`). Het achtervoegsel `_{id}.{ext}` wordt automatisch door het systeem toegevoegd om databasebestandsuniqueness te garanderen en te voorkomen dat bestaande assets op uw Magento-server worden overschreven.

-   **Afbeeldingspositie in winkel:** Voer het standaard globale prioriteitsgewichtsgetal in (standaard is `101`). Lagere nummers verschijnen eerder in uw Magento-indeling (`1` = eerst / aanbevolen). Een standaardgewicht van `101` injecteert uw AI-uitvoer veilig net achter uw inheemse, winkelbeheersde catalogusafbeeldingen.

-   **Afbeeldingsrollen in winkel:** Wijs assets rechtstreeks in op inheemse Magento-mediarollen die door uw actieve themasjabloon worden gebruikt. Klik op het veld om standaardfallback-structuurrollen toe te wijzen zoals `Base` (hoofdproductafbeelding), `Klein`, `Miniatuur` of `Kleurstaal`.

-   **Gepushte afbeeldingen op de productpagina verbergen:** Zet deze aankruising aan om afbeeldingen veilig naar uw Magento-mediummap te synchroniseren voor back-end technische functies (zoals winkelwagenpictogrammen of secundaire aangepaste schuifregelaars) zonder ze in uw frontendmain consumentengalerij te tonen.

-   **Volledig automatisch \[Binnenkort beschikbaar\]:** Deze functie is momenteel in ontwikkeling. Zodra actief, schakelt het aankruisen van dit selectievakje u in staat om menselijke validatie volledig over te slaan en afbeeldingen rechtstreeks naar uw live Magento-winkelweergaven te publiceren zodra ze klaar zijn met weergeven.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/zAHGFiGSaSobL-Deg00nawI92l2RDf4wzw.png)

## 5. ****Stroomactivering en uitvoering****

Zodra u alle toewijzingsvelden op tabblad 4 hebt voltooid, is uw geautomatiseerde pijplijn klaar voor implementatie. Gebruik de volgende stappen om de generatiemotor in te starten:

1.  **Activeer de stroom (schakelaar actieve stroom):** Verplaats de master **Actieve stroom**-schakelaar in de rechterbovenhoek van de pagina naar de **AAN** positie. Dit vormt officieel uw automatisering van een conceptstaat in een operationele routine om.

2.  **Generatie starten (Plan en sluit / Nu uitvoeren):**

-   Klik op de groene split-knop in de rechteronderhoek van het scherm.

-   Selecteer **Nu uitvoeren** uit de vervolgkeuzeopties. Het systeem zal uw uiteindelijke configuratieindeling vergrendelen, de bouwwerksteenruimte sluiten en onmiddellijk de achtergrondmotor activeren om uw Magento-productgegevensbatch te verwerken.

3.  **Voortgang controleren:** Als u de weergavestatus in realtime wilt zien of rechtstreeks naar de moderatiewachtrij wilt gaan, klik op de turquoise knop **\[Batch List\]** in de rechteronderhoek. Dit stuurt u onmiddellijk naar uw chronologische verwerkingslogboeken.

## 6. Werken met de Batch List en beoordelingen

Als de optie **Volledig automatisch** is uitgeschakeld, worden alle assets rechtstreeks naar uw **Batch List** gerouteerd voor beoordeling en handmatige implementatie.

### **Navigeren door Batches Index**

Klik op de knop **Batch List** om uw uitvoeringslogboeken in te laden. Selecteer uw sessie chronologisch in de linkertabel en gebruik het hoofdpaneel **Afbeeldingsvoltooiingslijst** om productverwerking rij-voor-rij naast hun originele Magento-SKU's te controleren.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/oXCxEay_94461PqsajzJPS4wYBlWEgCZjA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/5r4iWyzzfg14_CTFejOGP9ZVint4EoOtnw.png)

### **De geconsolideerde beoordelingsinterface ("Swipe-and-Sync")**

Als u op het **oogpictogram** klikt, wordt onze gestroomlijnde, naast-elkaar overlay gestart, ontworpen zodat u batches kunt snelcontrole en wereldwijde parameters op afzonderlijke, item-voor-artikel basis kunt overschrijven:

-   **Naast-elkaar beoordeling:** Het **gegenereerde paneel (links)** toont de nieuwe AI-optie; het **originele paneel (rechts)** geeft uw Magento-winkel verwijzingsbestand weer. Gebruik **\[In-/uitzoomen\]** aan beide zijden voor micro-inspectie.

-   **Magento Metadata Override Console:** Dit bevindt zich rechtstreeks onder de afbeeldingenkaarten en stelt u in staat bepaalde winkelsetinstellingen voor het geselecteerde product voor live te verfijnen:

-   **POSITIE:** Wijzig handmatig het vak met galerij-ordertekst (bijv. lager van `101` als u wilt dat deze specifieke weergave de hoofdminiatuur is).

-   **ROLLEN:** Klik op de interactieve schakelbadges (`Base`, `Klein`, `Miniatuur`, `Kleurstaal`) om inheemse Magento-presentatiewaarden voor dit specifieke bestand dynamisch toe te wijzen of te verwijderen.

-   **VERBERGEN OP PDP:** Vink dit vakje aan om alleen dit afzonderlijke asset uit de carousel van de productdetailpagina te verbergen.

-   **De besturingslus:**

-   **Regenereer:** Activeert een onmiddellijke, onbeperkte re-run voor een alternatieve visuele variatie als de indeling een herontwerp nodig heeft.

-   **Accepteer en volgende:** Keurt de versie goed, vergrendelt uw aangepaste Magento-metagegevensoverrides en **opent onmiddellijk het volgende afbeelding in uw batchenwachtrij**.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/fghCPbvdab9wtI-u0AWAUQPsuXIrvMCEPg.png)
6. Bulkacties en lokale ZIP-exporten

Fozzels biedt totale gegevensportabiliteit over uw visuele inventaris. U kunt batches rechtstreeks naar Magento pushen of mappen lokaal exporteren.

### **Massaacties uitvoeren:**

1.  Vink de selectievakjes aan de linkerkant van rijen in uw **tabel met afbeeldingsvoltooiingslijst**.

2.  Open het vervolgkeuzelijstmenu **Acties** dat rechtstreeks boven de gegevensrasterkoppelingen staat en kies uw routine:

-   **Geselecteerde weergeven:** Filtert uw werkscherm om alleen uw gemarkeerde Magento-productrijen te isoleren.

-   **Afbeeldingen downloaden (ZIP):** Activeert de achtergrondcompilatie van alle gemarkeerde hooggekwalificeerde AI-gegenereerde assets in één gecomprimeerd pakket.

### **Waar u uw gedownloade archieven kunt vinden**

Omdat het verwerken van grote batches hooggekwalificeerde afbeeldingen een paar momenten kan duren, worden archieven op de achtergrond gegenereerd. Om uw voltooide bestanden te downloaden:

1.  Klik op het menu **Dashboard** vervolgkeuzelijst in de rechterbovenhoek van de hoofdheader navigatiebalk.

2.  Selecteer **Export / gegenereerde gegevens** uit de lijst.

3.  Zodra de statusbadge groen wordt (**beschikbaar**), klikt u op de blauwe knop **\[ZIP\]** in de kolom _Download_ om het archief rechtstreeks op uw computer op te slaan.

> ⚠️ **Belangrijke opmerking:** gegenereerde ZIP-bestanden worden op de server bewaard en zijn slechts **24 uur beschikbaar**. Vergeet niet uw assets te downloaden voordat de link verloopt!

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/EqkvThCVlPgUbKnTorc6vQ3Ilx2CxPOccg.png)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/b3yz16xNhZFEKIfuUAB_xhtCTPD7feQp6w.png)

## 7. SEO-optimalisatie: Alt-teksten genereren voor nieuwe afbeeldingen

Naast visuele assets kan Fozzels automatisch relevante, SEO-geoptimaliseerde Alt-teksten (alternatieve omschrijvingen) voor elk nieuw AI-afbeeldingen genereren dat naar uw Magento-winkel wordt gepusht. Dit verbetert aanzienlijk de rankingfactoren van uw catalogus in Google Image Search-resultaten.

Voor meer informatie over het configureren van geautomatiseerde generatie en metagegevenstoewijzing voor Alt-tags, lees hier: **Gebruikershandleiding: Geautomatiseerde Alt-teksten en SEO voor Magento**.
