---
id: '103000388046'
title: "2.5.4. Supporto Yoast SEO per WooCommerce"
sidebar_position: 12
slug: /integration-connectivity/yoast-seo-support-for-woocommerce
description: >-
  Questo articolo spiega come configurare l'automazione completa dei metadati dei
  Suoi prodotti (titoli, descrizioni, parole chiave principali) utilizzando
  l'integrazione Yoast SEO con F
---

Questo articolo spiega come configurare l'automazione completa dei metadati dei Suoi prodotti (titoli, descrizioni, parole chiave principali) utilizzando l'integrazione **Yoast SEO** con Fozzels.

## Panoramica della funzionalità

Questa integrazione consente a Fozzels di gestire direttamente i parametri SEO dei Suoi prodotti tramite API. Una volta generati, questi campi vengono sincronizzati automaticamente con il Suo negozio WooCommerce.

**Attributi disponibili per la mappatura:**

-   **Yoast SEO Title** (`yoast_title`)

-   **Yoast SEO Meta Description** (`yoast_meta_description`)

-   **Yoast SEO Focus Keyword** (`yoast_focus_keyword`)

## Configurazione passo dopo passo

### Passaggio 1: requisiti (lato WooCommerce)

Per una sincronizzazione corretta, sul Suo sito WordPress devono essere attivi **due plugin**:

1.  **Yoast SEO** – Il plugin principale per la gestione dell'ottimizzazione per i motori di ricerca.

2.  **Yoast SEO WooCommerce REST API by Fozzels** – Il nostro plugin connettore dedicato, che consente di trasferire i dati generati al Suo negozio.

> **Importante:** la sincronizzazione dei campi SEO non è possibile senza il plugin connettore Fozzels. Può scaricarlo in fondo a questo articolo.

### ![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/x8U6ii3HyPbJrpm22XJ4KTrBPkYOpJMBqw.png)Passaggio 2: attivazione in Fozzels

1.  Vada alla sezione **Integrations** e selezioni la Sua integrazione WooCommerce.

2.  Nella scheda **Configuration**, individui l'opzione **"Yoast WooCommerce SEO"**.

3.  Attivi l'interruttore e clicchi su **SAVE**.

###
![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/Q2vuNHpeZol7txxezMoTQmPyzT3To9Rwpw.png)

### Passaggio 3: aggiornamento della struttura dei dati

Per rendere visibili i nuovi attributi nell'interfaccia di Fozzels, deve aggiornare lo schema dei dati:

1.  Vada alla scheda **Websites & Stores** e clicchi su **Pull Stores/Websites**.

2.  Esegua un'**importazione completa dei prodotti (Pull Products)**.

3.  Al termine dell'importazione, l'elenco degli attributi verrà aggiornato e i campi con il prefisso `yoast_` diventeranno disponibili per la mappatura nei Suoi flussi.

![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/xD90y_FdSVGO0v5sAa1SAVmX1hHGTvb8Tw.png)

## La combinazione definitiva: WPML + Yoast + ACF

Fozzels Le consente di raggiungere il "gold standard" dell'e-commerce combinando:

-   **Supporto [WPML](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/):** per la SEO multilingua.

-   **[ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** per i dati tecnici specializzati.

-   **Yoast SEO:** per dominare i motori di ricerca. Può automatizzare tutti questi campi contemporaneamente per ogni versione linguistica del Suo negozio.
