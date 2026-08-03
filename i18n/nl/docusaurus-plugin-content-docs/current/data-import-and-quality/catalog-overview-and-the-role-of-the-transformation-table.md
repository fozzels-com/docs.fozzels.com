---
id: '103000368948'
title: 3.1.1. Catalogusoverzicht en de rol van de transformatietabel.
sidebar_position: 2
slug: /data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table
description: De productcatalogus is uw primaire tool voor gecentraliseerd beheer van productgegevens en pre-Flow selectie. Het bevat alle productentiteiten en kenmerken sy
---

De productcatalogus is uw primaire tool voor gecentraliseerd beheer van productgegevens en pre-Flow selectie. Het bevat alle productentiteiten en kenmerken die zijn gesynchroniseerd van uw geïntegreerd e-commerceplatform (bijv. Magento, Shopify, NextChapter). Met de catalogus kunt u snel filterbeperkingen toepassen en specifieke productsubsets selecteren met behulp van krachtige filterhulpmiddelen voordat u een gerichte contentflow maakt. Dit proces stroomlijnt het generatieproces en beheerst de kosten.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/kT0sbPzqu9U7CYKKbDsdr8HrH0S-eFUwSA.png)
Voor toegang tot de **catalogus** selecteert u het tabblad Catalogus in de hoofdapplicatiekoppelobalk.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/vfW-3PdKzz5wVJFdE5npuD2aUHNwjtoC0w.png)
**1\. Initiële instelling en winkelselectie**

1.1. De gegevensbron kiezen. Bij het openen van de catalogus is de eerste stap het selecteren van uw gegevensbron met behulp van het vervolgkeuzemenu **"Kies integratie/website/winkel"**.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qAi7dFDbCqw3Iuboi01Pe7HC4Rvwgs500g.png)

Standaardselectie: Als uw account slechts één actieve integratie en standaardwinkel heeft, worden de producten automatisch weergegeven. Anders moet u expliciet een winkel selecteren.
Winkelijst: Het vervolgkeuzemenu vermeldt alle actieve en gearchiveerde integraties. Gearchiveerde integraties worden weergegeven maar gemarkeerd als inactief. U kunt alle gekoppelde website en winkel selecteren.
Synchronisatie: Zodra een winkel is geselecteerd, wordt de producttabel gevuld met alle entiteiten die beschikbaar zijn in het beheerders van die winkel. Als gegevens ontbreken, zorgt u ervoor dat u de producten van de integratiepagina hebt gesynchroniseerd.
Oriëntatie: Het navigatiepad (broodkruimels) wordt dynamisch bijgewerkt om de website en winkel te bevestigen die u momenteel bekijkt.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/yb51KJSKdpexrXDdEzKIgVfKAGu5kqGAFA.png)

1.2. De tabelweergave beheren

Weergavelimieten: Gebruik het vervolgkeuzemenu boven de tabel om het aantal producten in te stellen dat per pagina wordt weergegeven. Opties zijn 5, 10, 25 (standaard), 50, 75 en 100 producten. Gebruik de pagineerbesturingselementen onderaan om tussen pagina's te schakelen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/XGBtpKC2r1WW-xy9ZtKVqCbXxHe38w94mw.png)
Maximalisatorpictogram: Klik op het maximalisatorpictogram uiterst links van de tabel om de weergave uit te breiden en meer schermruimte aan de gegevens te wijden.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/R9a_-A3pooA7ZwgFA0hPy7oakeJnhnuIwQ.png)

**2\. De zichtbaarheid van kolommen aanpassen**

Met de knop **Kolomzichtbaarheid** kunt u de tabelindeling aanpassen door kenmerkkolommen weer te geven of te verbergen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_4nR9136ceKTkO8gCJYcXkFfxsTxJnAjw.png)

Kenmerken openen: Klik op de knop Kolomzichtbaarheid om het vervolgkeuzemenu te openen, waarin alle actieve kenmerken in uw integratie worden vermeld. Inactieve kenmerken worden hier niet vermeld en kunnen niet worden weergegeven. Als u producten op een inactief kenmerk wilt weergeven, moet u dit eerst op het tabblad **Kenmerken** activeren.
Zoekkernmerken: Gebruik de zoekinvoer boven aan het vervolgkeuzemenu om snel een specifiek kenmerk te vinden. Klik op het annuleringspictogram (kruis) dat wordt weergegeven bij het typen om de zoekopdracht opnieuw in te stellen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/uUX_pmAolRpY9P3RoZlEapDjNX0y3kGVjA.png)
Een kolom toevoegen: Deselecteer eenvoudig het vinkje om de kolom uit de tabel te verbergen. Een vinkjespictogram bevestigt dat de kolom zichtbaar is.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/OaI_JWUdBAPWTp5UyHcuLYT93tT1LUiQfQ.png)
Focus op een kolom: Klik op het pictogram **"Oog"** naast een kenmerknaam. De tabel schuift automatisch horizontaal om die kolom in de weergave te brengen en de kolomkop wordt gemarkeerd.
Een kolom verwijderen: Deselecteer eenvoudig het vinkje om de kolom uit de tabel te verbergen.
**_Gebruik de rechterzijbalk om kolommen te beheren en een flow te maken._**
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qgwc2opu9MjL3wW4nbOmiOD-rbCUX7IrOw.png)

**3\. Producten filteren voor selectie**

De catalogus biedt twee **krachtige manieren** om uw productset te filteren voordat u een Flow maakt.

3.1. Direct kolom filtreren U kunt producten filteren door rechtstreeks met de kolomkoppen in de tabel te communiceren:
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/c6Z48CIdVWFbxX7y-CDbDD0cWbSjXeQwXw.png)

- **Tekstinvoer**: Gebruik de zoekinvoer boven aan de kolom op basis van tekstkenmerken om producten dynamisch te filteren terwijl u typt.
- **Vervolgkeuzelijsten en selecties**: Voor kenmerken met gedefinieerde waarden (zoals 'Merk' of 'Grootte') kunt u typen om naar opties te zoeken, of een of meer opties selecteren en verwijderen.

**Categoriefiltrering:** Voor het kenmerk "Categorieën" (indien correct geconfigureerd met "_Categoriestructuur_" en "_Filterbaar_"), kunt u de boomstructuur uitvouwen en meerdere categorieën selecteren om de productlijst in te perken.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/2yny31P2rsrxdVzC07rzVaJr-RwO7xCA9w.png)

3.2. Geavanceerde filterconfiguratie
De knop **Geavanceerd filter** biedt een meer gedetailleerde, voorwaardelijke logica-interface, identiek aan het filteren dat in de Flow Builder wordt gebruikt.

Het formulier activeren: **Klik op het geavanceerde filterknop**. Deze actie verbergt alle directe kolomzoekinvoer en geeft de UI-formulier weer voor het bouwen van complexe voorwaarden.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_6dDdNeft6Ifj_CsyXM-FW_xbW1uZRAhjg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/gs9u3MDY8AQDvqHMTHpetQ4Jhh33DA7Cgg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/x58B9Ei1GLKAdaKuoKR-uF1m7F27cfxikA.png)

Filters overdragen: Alle filters die eerder zijn geselecteerd in de tabelkolommen, worden automatisch overgebracht naar het geavanceerde filter-UI-formulier wanneer dit is geactiveerd, en vice versa.

Voorwaarden bouwen: Gebruik de knoppen in de UI om afzonderlijke voorwaarden of groepen voorwaarden toe te voegen (bijv. Merk 'Alleen' EN Grootte 'XS').

Druk op de knop **"Search"** om de logica toe te passen en de producttabel bij te werken.

Beheer: Gebruik de knop **"Delete"** om afzonderlijke voorwaarden te verwijderen, of de knop **"Reset"** om alle voorwaarden te wissen en de volledige productlijst te herstellen.

**4\. Gespecialiseerde kolommen gebruiken**

Miniatuuropdrachtkolom: Producten met afbeeldingen geven hier het eerste beeld weer. Als afbeeldingen ontbreken, controleert u de instellingen van uw kenmerk "Product Absolute Image URL". U kunt de catalogus filteren met behulp van het vervolgkeuzemenu van de kolom om alleen producten met "_Afbeelding ontbreekt_" of "_Afbeelding bestaat_" weer te geven.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/iIY14kkYS_2aVcuNVFZF5Z1TLKQ0cczmYQ.png)
**Muisaanwijzer over** een afbeelding toont een volledig galerijevoorbeeld. Als u op de afbeelding klikt, wordt de **[gedetailleerde productweergave](/data-import-and-quality/detailed-product-view-reviewing-all-attributes-for-a-single-product/)** geopend.
**Inhoudskolom**: Deze kolom geeft de synchronisatiedatum van de laatst gegenereerde inhoud weer (niet de generatiedatum). De datum is een koppeling; als u erop klikt, wordt de lijst met vervolgingen voor dat product geopend.

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/YRHITuApJ-8TocExnzRrdqDtJhfJGiHDCQ.png)

**5\. Een Flow maken op basis van geselecteerde producten**

Nadat u de catalogus hebt gefilterd op de gewenste productsubset, kunt u onmiddellijk een nieuwe Flow starten.

Selectie: Producten worden geselecteerd op basis van de toegepaste filters (Direct of Geavanceerd) of door handmatig rijen te selecteren met behulp van de tabelkeuzerondjes.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/geFwcUzWrcTuZWszx1O1aqL9-gIX9f2GUg.png)
Aanvang: Klik op de knop **"Create Flow On Selected Products"** knop.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/slcUdb4L8stvkadQeWPNRZ22WZmZZ8aI3w.png)

Vooraf ingevulde Flow: U wordt doorgestuurd naar de pagina voor het maken van een nieuwe Flow. De winkel die in de catalogus is geselecteerd, wordt automatisch gekozen en de filters die u in de catalogus hebt toegepast, worden automatisch overgebracht en ingesteld in de stap voor productselectie (Stap 3) van de nieuwe Flow.
