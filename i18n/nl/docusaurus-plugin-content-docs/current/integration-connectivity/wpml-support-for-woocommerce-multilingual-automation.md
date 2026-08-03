---
id: '103000389531'
title: 2.5.6.  WPML-ondersteuning voor WooCommerce (Meertalige automatisering)
sidebar_position: 13
slug: /integration-connectivity/wpml-support-for-woocommerce-multilingual-automation
description: Deze handleiding behandelt de configuratie en het gebruik van de WPML (WordPress Multilingual Plugin) integratie binnen Fozzels. Met deze functie kunt u inhoud
---

Deze handleiding behandelt de configuratie en het gebruik van de **WPML (WordPress Multilingual Plugin)** integratie binnen Fozzels. Met deze functie kunt u inhoudsgeneratie en synchronisatie voor elke taallocale van uw winkel automatiseren binnen één integratie.

## Functie-overzicht

De integratie van Fozzels met WPML stelt u in staat om complexe meertalige structuren te beheren zonder aparte verbindingen voor elke taal nodig te hebben.

**Belangrijkste voordelen:**

-   **Locale-identificatie:** Automatische detectie van alle actieve websitetalen via API.

-   **Flexibele mapping:** Direct inhoud naar de juiste taalversies van uw producten, inclusief:

-   **Standaardvelden** (Titel, Beschrijving, Korte beschrijving);

-   **SEO-plugins** (**[Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce/)** of **[All in One SEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)**);

-   **Aangepaste velden** (**[ACF - Advanced Custom Fields](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)**).

-   **Werkstroom-efficiëntie:** Beheer globale catalogi vanuit één interface.

## Integratieinstelling in Fozzels

Volg dit stap-voor-stap algoritme om meertalige ondersteuning in te schakelen:

### 1\. Schakel functionaliteit in

1.  Navigeer naar de sectie **Integraties** en selecteer uw WooCommerce-integratie.

2.  Zoek op het tabblad **Configuratie** het blok **WPML-instellingen**.

3.  Zet de schakelaar **"Enable WPML Multilingual Support"** aan.

4.  **Cruciaal:** Klik op de knop **"OPSLAAN"** om deze wijzigingen in uw configuratie op te slaan.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/4V_jMfihW94CP3CNHSo9yd7-LbwRCXJSJg.png)

### 2\. Locales initialiseren (websites en winkels)

Zodra u deze hebt opgeslagen, moet u de taallijst van uw WordPress-site ophalen:

1.  Schakel naar het tabblad **Websites en winkels** in uw integratie-instellingen.

2.  Klik op de knop **"Pull Stores/Websites"**. Fozzels zal uw WordPress-site bevragen om alle geconfigureerde talen op te halen.

3.  Activeer (zet aan) in de lijst die verschijnt, de specifieke talen die u wilt beheren.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/POzdAldcqgEXxkAsgSEbnJLTDF9nzoogmg.png)
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/rgGtdO9cFLCfJOPmQs1SQc5NKnlyOx59Ag.png)

###
3\. Catalogussynchronisatie

Dit is de laatste en belangrijkste stap om producten zichtbaar te maken:

-   **VOER DE PRODUCTEN PULL OPNIEUW UIT.** Dit is verplicht zodat het systeem de relaties tussen verschillende taalversies van uw producten kan identificeren en **deze in uw Fozzels-catalogi als afzonderlijke objecten voor verwerking** kan laden. Zonder deze stap verschijnen producten voor nieuwe locales niet in het systeem.

![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/S0333OKK3WCPquO5CYoLzBkvWJVsJRbG4w.png)

##
De Super-Power Combo: WPML + ACF + AIOSEO

Met Fozzels kunt u WPML combineren met toonaangevende plugins voor maximale automatisering. Dit is de "gouden standaard" voor professionele e-commerce:

-   **WPML + SEO ([Yoast](/integration-connectivity/yoast-seo-support-for-woocommerce/) of [AIOSEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)):** Genereer unieke gelokaliseerde trefwoorden, metatitels en beschrijvingen voor elke taalversie. _(Opmerking: Gebruik slechts één SEO-plugin tegelijk om conflicten te voorkomen)._

-   **WPML + [ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** Synchroniseer gelokaliseerde inhoud in aangepaste velden (bijv. technische specificaties, marketingblokken of veelgestelde vragen) apart voor elke taal.

-   **De ultieme combo (WPML + ACF + AIOSEO):** Het meest krachtige scenario. Dit stelt u in staat om gelijktijdig professionele beschrijvingen, gespecialiseerde technische gegevens en een volledige SEO-kern voor de internationale markt te automatiseren.
