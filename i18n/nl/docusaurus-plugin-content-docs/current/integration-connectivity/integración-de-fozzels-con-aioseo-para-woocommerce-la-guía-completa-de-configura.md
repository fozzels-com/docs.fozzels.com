---
id: '103000408519'
title: >-
  2.5.3. Fozzels-integratie met AIOSEO voor WooCommerce: de volledige
  installatiehandleiding NL
sidebar_position: 10
slug: >-
  /integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura
description: >-
  All in One SEO (AIOSEO) is een toonaangevende WordPress-plugin die is
  ontworpen om zoekopdracht-rankings te verbeteren en organisch verkeer
---

**All in One SEO (AIOSEO)** is een toonaangevende WordPress-plugin die is ontworpen om zoekopdracht-rankings te verbeteren en organisch verkeer door te leiden via automatisering van kritieke SEO-elementen zoals metatags en sociale previews.

We zijn verheugd aan te kondigen **volledige integratie tussen Fozzels en AIOSEO voor WooCommerce.** Deze krachtige combinatie stelt u in staat SEO-velden als standaard productattributen te behandelen. Nu kunt u:

-   **Automatiseren op schaal:** Genereer unieke, AI-geoptimaliseerde SEO-titels en beschrijvingen voor duizenden producten tegelijk.
-   **Social Media-meesterschap:** Beheer automatisch **Twitter Cards** en **Open Graph**-gegevens om ervoor te zorgen dat uw producten perfect uitzien wanneer ze op sociale platforms worden gedeeld.
-   **Slimme workflows:** Gebruik **Content Flows** om SEO-gegevens bewerk te stellen en transformeer deze net als elk ander productattribuut.
-   **Naadloze synchronisatie:** Elimineer handmatige gegevensinvoer door gegenereerde inhoud direct via onze toegewijde API-connector in uw WooCommerce-winkel in te voegen.

In deze handleiding wordt uitgelegd hoe u **Fozzels**, **WooCommerce** en **All in One SEO (AIOSEO)** verbindt om de metagegevens van uw winkel te automatiseren. Door deze stappen te volgen, gedragen uw SEO-velden zich als standaard productattributen, zodat u zoekgeoptimaliseerde inhoud in bulk kunt genereren en synchroniseren.

## Stap 1: Controleer en activeer AIOSEO in WordPress

Zorg ervoor dat de core SEO-plugin actief is op uw WooCommerce-site:

1.  Meld u aan bij uw WordPress-beheerdersdashboard.
2.  Ga naar **Plugins** > **Geïnstalleerde plugins**.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/GzZDJBGqT-KNc5fzwQJbN_YK3DxB9L27oQ.png)

3.  Zoek **All in One SEO** in de lijst:
    -   Klik **Activeren** als deze uitgeschakeld is.
    -   Klik **Deze plugin controleren (Check this plugin)** als deze al actief is om de huidige status en instellingen te verifiëren.
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/MC47tcQgV6Gp6YkSB4nXAZoiZ5Yc8Jfzbw.png)

4.  **Velden controleren:** Open een product onder **Producten**. Schuif omlaag naar het blok **AIOSEO-instellingen**. U ziet de standaardvelden voor _Producttitel_ en _Metabeschrijving_.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/KLniw-RLi_y3vGzZ-dGZZuCnNlgy52I5CA.png)

    ##
    Stap 2: Installeer de plug-in "AIOSEO API Sync by Fozzels"

Standaard AIOSEO-instellingen staan externe tools alleen toe gegevens te lezen. Om gegenereerde inhoud terug naar uw winkel te **synchroniseren**, moet u onze gespecialiseerde connector installeren:

    1.  Ga in uw WordPress-menu naar **Plugins** > **Plugin toevoegen**.
    2.  Klik **Plugin uploaden** bovenaan de pagina.
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/m9_o-voJfvIntmMBVELpiC_md_JzDyEdiQ.png)
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/aEPYP_G68OgjeKmNawqtJ6lTatnUATw7cQ.png)
    3.  Selecteer het meegeleverde ZIP-bestand (**AIOSEO API Sync by Fozzels**), klik **Nu installeren** en vervolgens **Activeren**.
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/vNHwUUnxn7pYnYZoT4nTeYhE-PtDy6UKSw.png)

4.  Met deze plug-in wordt beveiligde bidirectionele overdracht van SEO-metagegevens via de WordPress API ingeschakeld.

####

#### **\*\*\* U kunt het benodigde ZIP-bestand voor de plugin "AIOSEO API Sync by Fozzels" downloaden. Dit bestand is aan het einde van dit artikel gevoegd.**

##

## Stap 3: Ondersteuning in Fozzels inschakelen

Activeer de integratie op het Fozzels-platform:

1.  Open uw **Configuratietabblad in uw bestaande of nieuwe WooCommerce-integratie** in Fozzels.
2.  Zoek de sectie: **"All in One SEO – Powerful SEO Plugin to Boost SEO Rankings & Increase Traffic"**.
3.  Activeer de schakelaar en **sla de wijzigingen op (SAVE)**.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/BXYw2biOt3WWhTzM6zW0eee8MMRThNoDrw.png)

## Stap 4: Identificatie van SEO-attributen

Na activering van de integratie verschijnen alle SEO-gerelateerde velden automatisch in de algemene Fozzels-attributenlijst. Ze zijn gemakkelijk te herkennen en vooraf geconfigureerd voor onmiddellijk gebruik:

-   **Technische codes:** Elk SEO-attribuut is voorzien van een specifieke code die begint met `_aioseo_` (bijvoorbeeld `_aioseo_title`, `_aioseo_description`, `_aioseo_keywords`).
-   **Standaardinstellingen:** Voor uw gemak zijn deze attributen automatisch ingesteld op:
    -   **Actief**
    -   **HTML toegestaan**
    -   **Filterbaar**
-   **Social Media:** U kunt sociale previews ook beheren via attributen zoals `_aioseo_twitter_title` of `_aioseo_og_title`.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/2NFsAgkmMv-akP9OzwmGQgn_lMH3mI1fNg.png)

###

## Stap 5: Content Flows en synchronisatie

Het grootste voordeel van deze integratie is dat SEO-velden zich nu als regelmatige productgegevens gedragen. U bent niet langer beperkt tot basisynchronisatie:

-   **Maak aangepaste flows:** U kunt specifieke **Content Flows** voor deze attributen samenstellen. Gebruik uw bestaande AI-sjablonen of maak nieuwe sjablonen om geoptimaliseerde SEO-titels en beschrijvingen te genereren.

-   **Standaardworkflow:** Behandel SEO-attributen zoals elk ander productveld — bewerk ze, pas filters toe of koppel ze aan verschillende gegevensbronnen binnen Fozzels.

-   **Directe update:** Wanneer uw generatie voltooid is, klikt u op **Sync to Store**. Fozzels vult onmiddellijk de corresponderende AIOSEO-velden op uw WooCommerce-site in met de nieuwe AI-gegenereerde inhoud.
