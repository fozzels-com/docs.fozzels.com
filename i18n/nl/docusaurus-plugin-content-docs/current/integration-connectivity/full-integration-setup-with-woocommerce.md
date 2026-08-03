---
id: '103000367857'
title: 2.5.1. Volledige integratieinstelling met WooCommerce.
sidebar_position: 7
slug: /integration-connectivity/full-integration-setup-with-woocommerce
description: >-
  Om een veilige verbinding tussen Fozzels en WooCommerce te garanderen, moeten
  de volgende stappen worden voltooid om de speciale API-sleutels (Customer Key
  en Cus
---

Om een veilige verbinding tussen Fozzels en WooCommerce te garanderen, moeten de volgende stappen worden voltooid om de speciale API-sleutels (Customer Key en Customer Secret) in het WooCommerce-account te genereren.

Configuratie in WooCommerce

**Stap 1: Meld u aan bij WooCommerce**
1\. Open een browser en meld u aan bij uw WooCommerce-account.
2\. Gebruik de beheerderslogin en het wachtwoord.

**Stap 2: Navigeer naar API-instellingen**
1\. Ga naar het tabblad "**Instellingen**" / Geavanceerd / REST API in het hoofdmenu van WooCommerce.
2\. Selecteer "**Sleutels toevoegen**".

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8hyIPD4Wb1FFvgYBaXywZ2Xs18Lh-bvT4Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/gQDALB5owHDmdRHVghvUxrIVGr9XLh00iA.png)

**Stap 3: Een nieuwe API-sleutel maken**1\. Voeg de beschrijving toe en kies de benodigde machtigingen "**Lezen en schrijven**" uit het vervolgkeuzemenu in de **nieuwe API-sleutel**.

2\. Druk op de knop "**API-sleutel genereren**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/LNqOK_83FuQdSlwU4GQ0k9hPLpjPOMhitw.png)
Opmerking: Het verlenen van "Schrijf"-toegang stelt Fozzels niet alleen in staat om gegevens te lezen, maar ook om gegevens in uw WooCommerce-winkel bij te werken, waardoor tweerichtingssynchronisatie wordt gegarandeerd.
Als u alles correct hebt gedaan, wordt een venster geopend met de gegenereerde sleutels voor de nieuwe integratie. U ontvangt ook het bericht: 'API-sleutel succesvol gegenereerd. Zorg ervoor dat u uw nieuwe sleutels nu kopieert, omdat de geheime sleutel verborgen wordt zodra u deze pagina verlaat.' Zet deze sleutels over naar de integratie-instellingen in Fozzels.

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/zNaRYoJwobBx3j5TEjYQOR-iVDLfWwFk_w.png)
Configuratie in Fozzels
**Stap 4:** **Start een nieuwe integratie**
1\. Meld u aan bij uw Fozzels-account.
2\. Ga naar de pagina Integraties.
3\. Klik op de knop "**Nieuwe integratie**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/0oMe6Sytpwp09lVWoNbVjCMY2Gr5Ii3l4w.png)

4\. Selecteer "**WooCommerce**" uit de lijst met beschikbare services.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/VygL8-i0y-Ufor6pSGr_Zfk9ob9PmWAybw.png)

5\. Vul configuratievelden in

        Naam: Voer een duidelijke naam voor deze integratie in (bijv. WooCommerce_INT).
        URL: Voer de URL van uw WooCommerce-winkel in
6\. Vul de volgende velden in op de pagina "Nieuwe integratie maken" (met behulp van de sleutels die in stap 3 zijn gekopieerd).
        Customer Key: Plak de Customer Key die uit WooCommerce is gekopieerd.
        Customer Secret: Plak het Customer Secret dat uit Woocommerce is gekopieerd.

7\. Als u ook Advanced Custom Fields in Fozzels wilt importeren, schakelt u de schakelaar **Enable ACF** in.  Lees meer over hoe u deze verbinding correct instelt in [ACF-datasynchronisatie inschakelen: WordPress/WooCommerce-configuratie voor Fozzels](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels).

8\. Als u SEO-gegevens wilt synchroniseren met de Yoast SEO-plugin, schakelt u de schakelaar Yoast WooCommerce SEO in. Hiermee kan Fozzels metatitels, metabeschrijvingen en focuskeywoorden rechtstreeks via de WooCommerce API importeren en bijwerken. [Lees meer over hoe u deze integratie in Yoast SEO instelt](/integration-connectivity/yoast-seo-support-for-woocommerce).

9\. Als uw winkel gebruikmaakt van de All-in-One SEO-plugin, schakelt u de schakelaar All-in-One SEO in. Dit zal automatisch SEO-gerelateerde velden zoals metatitels, beschrijvingen, trefwoorden en sociale mediagegevens synchroniseren tussen WooCommerce en Fozzels. [Lees meer over hoe u deze integratie configureert.](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide)

10\. Als u aangepaste metagegevensvelden van WooCommerce wilt importeren, vult u het veld WooCommerce Meta Data Sync Fields in. Voer de metasleutelvoorvoegsels of exacte metaveldnamen in die u wilt synchroniseren. Alleen overeenkomende velden worden als productattributen in Fozzels geïmporteerd. Voer bijvoorbeeld _my\_plugin_ in om alle sleutels met dit voorvoegsel te synchroniseren, of _custom_field voor een specifiek veld. [Lees meer over deze functie.](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)
11\. Als u meertalige synchronisatie wilt inschakelen, schakelt u de schakelaar WPML Multilingual Support in. Hiermee kan Fozzels productgegevens in alle geconfigureerde talen synchroniseren wanneer u de WPML-plugin gebruikt. [Lees meer over hoe u deze instellingen configureert.](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation)
 ![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/d1v4xCqxV-0DN-7Uj85ucSblMez28V1klw.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/7XoFo9SE40F3Tgm0RjSqZFcqPUoE-6dFHA.png)
**Stap 5: Activeer en sla de integratie op**1\. Activeer de integratie door de schakelaar "Actief" in de rechterbovenhoek **in** te schakelen.

2\. Klik op de knop "**Opslaan**" om de wijzigingen op te slaan.
Na succesvol opslaan gaat u over naar de volgende configuratiestappen in Fozzels ("Websites en winkels" en "Attributen"), waar u product- en attributensynchronisatie kunt instellen.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8pwl3nO-DvkTHXjdP3kCZwH6esC012DXYg.png)
**Stap 6: Instelling van websites en winkels**
1\. Klik op de knop "**Pull Websites and Stores**". Dit haalt alle bijbehorende websites en winkels uit uw WooCommerce-account op en toont deze.
2\. Activeer de vereiste websites en winkels door de corresponderende statusschakelaars op **AAN** in te schakelen.
3\. Klik op de knop "**Pull products**" voor elke benodigde winkel. Deze actie start de initiële belading van productgegevens in Fozzels. Lees meer over het ophalen van producten [hier](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained/).
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/OT8f7hDzpyxRkabdwOZz9-0ph8-2UMGMnA.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/pXfqdGQaJ_kePo3JmAj2P43ZxhaPZWFnMg.png)Nadat het productbeleidingsproces is voltooid, is Fozzels klaar om te werken!
Nu kunt u doorgaan naar het tabblad "Attributen" om deze in te stellen. Lees meer over het beheren van attributen [hier](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).
