---
id: '103000408494'
title: 2.5.4. Ondersteuning voor Yoast SEO voor WooCommerce NL
sidebar_position: 11
slug: /integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es
description: Dit artikel legt uit hoe u volledige automatisering van uw productmetagegevens (titels, beschrijvingen, doeltrefwoorden) instelt met behulp van de integratie van Yoast SEO met Fozzels
---

Dit artikel legt uit hoe u volledige automatisering van uw productmetagegevens (titels, beschrijvingen, doeltrefwoorden) instelt met behulp van de integratie van **Yoast SEO** met Fozzels.

## Functieoverzicht

Deze integratie stelt Fozzels in staat om uw SEO-parameters direct via de API te beheren. Nadat deze zijn gegenereerd, worden deze velden automatisch met uw WooCommerce-winkel gesynchroniseerd.

### Attributen beschikbaar voor toewijzing:

-   **Yoast SEO Titel**(`yoast_title`)
-   **Yoast SEO Meta beschrijving** (`yoast_meta_description`)
-   **Yoast doeltrefwoord**(`yoast_focus_keyword`)

## Stap-voor-stap installatie

### Stap 1: Vereisten (WooCommerce-zijde)

Voor succesvolle synchronisatie moet uw WordPress-site **twee actieve plugins** hebben:

1.  **Yoast SEO** — De hoofdplugin voor SEO-optimalisatiebeheer.
2.  **Yoast SEO WooCommerce REST API by Fozzels** — Onze speciale connectorplugin die gegevens terugsturen naar uw winkel mogelijk maakt.

> **Belangrijk:** Synchronisatie van SEO-velden is niet mogelijk zonder de Fozzels-connectorplugin. U kunt deze aan het einde van dit artikel downloaden.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/MT4wMD04ipjVoEt8c4NwHlsE0eT8iTLb2A.png)

### Stap 2: Activering in Fozzels

1.  Ga naar de sectie **Integraties** en selecteer uw WooCommerce-integratie.
2.  Zoek op het tabblad **Configuratie** naar de optie **"Yoast WooCommerce SEO"**.
3.  Activeer de schakelaar en klik op **OPSLAAN**.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/bjZhGWcV30oWfW9hzMOHg4-I7csNNSMhJA.png)

###
Stap 3: Gegevensstructuur bijwerken

Voer een volledige gegevenssynchronisatie uit om de nieuwe attributen zichtbaar te maken in de Fozzels-interface:

1.  Ga naar het tabblad **Websites en winkels** en klik op **Pull Stores/Websites**.
2.  Voer een **Pull Products** uit.
3.  Nadat het ophalen is voltooid, wordt de attributenlijst bijgewerkt en zijn de velden met het voorvoegsel `yoast_` beschikbaar voor toewijzing in uw Flows.![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/s-S_9YbKR-3bTtFFzWb4j7fmwJBqaL8UKg.png)

##

## De ultieme combinatie: WPML + Yoast + ACF

Met Fozzels kunt u de "gouden standaard" van e-commerce bereiken door het volgende te combineren:

-   **WPML-ondersteuning:** Voor meertalig SEO.
-   **ACF (Advanced Custom Fields):** Voor gespecialiseerde technische gegevens.
-   **Yoast SEO:** Voor zoekmachinemeesterschap.

U kunt al deze velden tegelijk automatiseren voor elke taalversie van uw winkel.
