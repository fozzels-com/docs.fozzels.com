---
id: '103000384142'
title: 'Release 5.10-5.11 RC2: snellere catalogus, diepere controle over Fozzels.'
sidebar_position: 1
slug: /fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels
description: We streven ernaar ervoor te zorgen dat het werken met grote hoeveelheden gegevens niet alleen snel is, maar ook volledig controleerbaar en intuïtief. Versie 5.10 richt zich op het verbeteren van
---

We streven ernaar ervoor te zorgen dat het werken met grote hoeveelheden gegevens niet alleen snel is, maar ook volledig controleerbaar en intuïtief. Versie 5.10 richt zich op het verbeteren van de kwaliteit van visuele gegevens en het **aanzienlijk verhogen van de prestaties en het gemak van het gebruik van onze Fozzels-service.**

##

Prestaties en gegevenslkwaliteit verbeteren

We hebben de UX verbeterd om het beheer van grote catalogi sneller en het werken met inhoud naadloos te maken.

### 1\. Catalogus- en gegevensbeheer

-   **Versnelde catalogus (nieuwe standaardinstellingen):** er is een nieuwe regel voor kolombinnen opgenomen. Ongeveer 20 van de belangrijkste kenmerken zijn nu standaard ingeschakeld. Dit **vereenvoudigt de workflow aanzienlijk** en **verhoogt de laadsnelheid** en weergaveprestaties van grote catalogi.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/lKkJYdOEv5IMFHk7r6Mhn2Iv7R--LD6Bcg.png)

-   **Kenmerknauwkeurigheid (DDP-afronding):** de logica voor het weergeven van het gegevensdichtheidspercentage (DDP) is bijgewerkt. De DDP-waarde wordt nu afgerond op **drie decimalen**. Dit zorgt voor nauwkeurige weergave van kenmerken met zeer lage DDP (bijv. 0,040%), waardoor verwarring door afronding tot nul wordt voorkomen.

-
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2LTShrMQn-AwHW8xdptY0MjbZobK0D0Iig.png)

-   **Maximale kenmerkduidelijkheid:** het blok "Get random example data" geeft nu de **volledige website- en winkelnaam** weer (in plaats van afkortingen). U bent altijd zeker van de specifieke gegevens waarmee u werkt.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/_WOgxMxdZL8LDJJL80org__eblNuAp-nIA.png)

-   **Flexibele tabelnavigatie:** paginaopties voor kenmerklijsten zijn uitgebreid: ondersteuning voor 50, 75, 100, 150 en **"200"** elementen. Beheer eenvoudig enorme datasets.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/VwedlrpwTbYE7jTtQJKiU84KWL28R-__Rg.png)

-   **Automatische vernieuwen van cataloguslogboek:** in de logboektabellen die wijzigingen in product- en kenmerkverzameling volgen (**State Log List**), is de automatische vernieuwingsfunctie (**Vernieuwen elke X seconden**) nu **standaard actief**, wat het gemak van tracering van actieve processen verbetert.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/k7wJs0gU52ThkvU06NRQiNCb052rvZNB3A.png)
    2\. Generatie en workflows (UX)

-   **Directe toegang tot instellingen:** er is een pictogram **"View attribute"** oogicoontje toegevoegd aan de Batch-lijsttabel, naast de kenmerktnaam. Dit biedt een snellere manier om de kenmerkinstellingen en configuratie te controleren.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/EStHK3i08CDJYcXd9nmAO1KRhxknIufVZw.png)

-   **Kolombesturing in "Opslaan en voorbeeld":** het blok **"Column visibility"** is toegevoegd aan de voorbeeldtabel (**Save & Preview**). Dit stelt u in staat om alleen de noodzakelijke kenmerken weer te geven en lost problemen met extreem grote tabellen op.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2xUkAX-SxZ6mayNDh5A91b3m2AkKS4mDFw.png)

###
3\. Afbeeldingenmanagement en visuele kwaliteit

-   **Schone visuele catalogus:** het systeem **negeert nu automatisch en toont ongeldig (verbroken) of lege afbeeldings-URL's niet** in de catalogus, rapporten en generatielijsten. Zeg aarwel tegen verbroken afbeeldingen — uw gegevens zien er nu onberispelijk uit.

-   **Geavanceerd filterensfilteren (Image Flow):** nieuwe krachtige hulpmiddelen zijn toegevoegd voor het sorteren en filteren van afbeeldingen in de instellingsblokken van Image Flow:

-   Speciale filters stellen u in staat om te schakelen tussen standaard- en uw eigen geüploade afbeeldingen (sorteren op **Bron**).

    -   Sorteren op **upload datum** en **naam** is toegevoegd.
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/q6optXQOc2cONrSBq2hAYJmFT-kVtuUMIA.png)
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/9Y5ObdDOni2-uTSMx1mbIb9eIkLRaWSRdw.png)

-   **Terminologiehelderheid:** voor meer duidelijkheid is "AI Model" in Image Flow-instellingen gewijzigd in **"Preset Model"**.

### 4\. Versnelde massabewerkingen

-   **Volledig uitgeruste "Show Selected" (Catalogus en dagelijks rapport):** we hebben de functie "Show Selected" aanzienlijk verbeterd. Nu, in zowel de **catalogus** als het **dagelijks rapport**, staat de tabel van geselecteerde items u toe om **alle acties uit te voeren van de reguliere tabel**: weergeven, filteren en **massabewerkingen** toepassen.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/wVzkPiDgjCcZCYtSpCXgXA8rfbX5fqysPw.png)

-   **Betrouwbaarheid in massabewerkingen:** we hebben een klein probleem opgelost dat af en toe ertoe leidde dat het raster leeg bleef als geen items waren geselecteerd. Het werken met massabewerkingen is nu nog betrouwbaarder.

##
 Onder de motorkap: stabiliteit en moderniteit

-   **Gerichte integratiestabilisatie:** noodzakelijke fixes zijn geïmplementeerd om de stabiliteit en functionaliteit van integraties met platforms **WooCommerce, EK Retail en Shopware** te verbeteren, wat zorgt voor betrouwbare werking voor clients met deze specifieke instellingen.

Uw ervaring is onze prioriteit. Deze updates zijn slechts een onderdeel van ons voortdurende werk aan het verbeteren van Fozzels. Bedankt dat u deel uitmaakt van onze gemeenschap!
[Onze Instagram](https://www.instagram.com/fozzelsai/)
