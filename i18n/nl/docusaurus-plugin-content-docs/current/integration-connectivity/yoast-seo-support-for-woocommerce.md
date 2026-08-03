---
id: '103000388046'
title: 2.5.4. Yoast SEO-ondersteuning voor WooCommerce
sidebar_position: 12
slug: /integration-connectivity/yoast-seo-support-for-woocommerce
description: Dit artikel legt uit hoe u volledige automatisering van uw productmetagegevens (titels, beschrijvingen, focuskeywoorden) instelt met behulp van de Yoast SEO-integratie met F
---

Dit artikel legt uit hoe u volledige automatisering van uw productmetagegevens (titels, beschrijvingen, focuskeywoorden) instelt met behulp van de **Yoast SEO** integratie met Fozzels.

## Functie-overzicht

Deze integratie stelt Fozzels in staat om uw product SEO-parameters direct via API te beheren. Nadat deze zijn gegenereerd, worden deze velden automatisch met uw WooCommerce-winkel gesynchroniseerd.

**Beschikbare attributen voor toewijzing:**

-   **Yoast SEO Titel** (`yoast_title`)

-   **Yoast SEO Meta Beschrijving** (`yoast_meta_description`)

-   **Yoast SEO Focus Sleutelwoord** (`yoast_focus_keyword`)

## Stap-voor-stap installatie

### Stap 1: Vereisten (WooCommerce-zijde)

Voor succesvolle synchronisatie moet uw WordPress-site **twee actieve plugins** hebben:

1.  **Yoast SEO** — De core-plugin voor zoekmachineoptimalisatiebeheer.

2.  **Yoast SEO WooCommerce REST API by Fozzels** — Onze speciale connectorplugin die de overdracht van gegenereerde gegevens terug naar uw winkel mogelijk maakt.

> **Belangrijk:** Synchronisatie van SEO-velden is niet mogelijk zonder de Fozzels-connectorplugin. U kunt deze aan het einde van dit artikel downloaden.

### ![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/x8U6ii3HyPbJrpm22XJ4KTrBPkYOpJMBqw.png)Stap 2: Activering in Fozzels

1.  Navigeer naar de sectie **Integraties** en selecteer uw WooCommerce-integratie.

2.  Zoek op het tabblad **Configuratie** naar de optie **"Yoast WooCommerce SEO"**.

3.  Schakel de schakelaar in en klik **OPSLAAN**.

###
![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/Q2vuNHpeZol7txxezMoTQmPyzT3To9Rwpw.png)

### Stap 3: Gegevensstructuur bijwerken

Voer een volledige gegevenssynchronisatie uit om de nieuwe attributen zichtbaar te maken in de Fozzels-interface:

1.  Ga naar het tabblad **Websites en winkels** en klik **Pull Stores/Websites**.

2.  Voer een **volledige producten pull (Pull Products)** uit.

3.  Nadat het ophalen is voltooid, wordt de attributenlijst vernieuwd en zijn velden met het voorvoegsel `yoast_` beschikbaar voor toewijzing in uw Flows.

![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/xD90y_FdSVGO0v5sAa1SAVmX1hHGTvb8Tw.png)

## De ultieme combo: WPML + Yoast + ACF

Met Fozzels kunt u de "Gouden Standaard" van e-commerce bereiken door het volgende te combineren:

-   **[WPML](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/) Ondersteuning:** Voor meertalig SEO.

-   **[ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** Voor gespecialiseerde technische gegevens.

-   **Yoast SEO:** Voor zoekmachineheerschappij. U kunt al deze velden tegelijk automatiseren voor elke taalversie van uw winkel.
