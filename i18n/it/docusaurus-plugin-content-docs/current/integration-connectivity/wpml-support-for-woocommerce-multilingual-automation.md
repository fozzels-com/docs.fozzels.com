---
id: '103000389531'
title: "2.5.6.  Supporto WPML per WooCommerce (automazione multilingua)"
sidebar_position: 13
slug: /integration-connectivity/wpml-support-for-woocommerce-multilingual-automation
description: >-
  Questa guida illustra la configurazione e l'utilizzo dell'integrazione WPML
  (WordPress Multilingual Plugin) in Fozzels. Questa funzionalità Le consente di
  automatizzare
---

Questa guida illustra la configurazione e l'utilizzo dell'integrazione **WPML (WordPress Multilingual Plugin)** in Fozzels. Questa funzionalità Le consente di automatizzare la generazione e la sincronizzazione dei contenuti per ogni lingua del Suo negozio all'interno di un'unica integrazione.

## Panoramica della funzionalità

L'integrazione di Fozzels con WPML Le consente di gestire strutture multilingua complesse senza dover creare connessioni separate per ciascuna lingua.

**Vantaggi principali:**

-   **Identificazione delle lingue:** rilevamento automatico di tutte le lingue attive del sito web tramite API.

-   **Mappatura flessibile:** indirizzi i contenuti verso le versioni linguistiche corrette dei Suoi prodotti, tra cui:

-   **Campi standard** (titolo, descrizione, descrizione breve);

-   **Plugin SEO** (**[Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce/)** oppure **[All in One SEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)**);

-   **Campi personalizzati** (**[ACF - Advanced Custom Fields](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)**).

-   **Efficienza del flusso di lavoro:** gestisca cataloghi globali da un'unica interfaccia.

## Configurazione dell'integrazione in Fozzels

Per attivare il supporto multilingua, segua questa procedura passo dopo passo:

### 1\. Abilitare la funzionalità

1.  Vada alla sezione **Integrations** e selezioni la Sua integrazione WooCommerce.

2.  Nella scheda **Configuration**, individui il **blocco delle impostazioni WPML**.

3.  Attivi **"Enable WPML Multilingual Support"**.

4.  **Fondamentale:** clicchi sul pulsante **"SAVE"** per salvare queste modifiche nella configurazione.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/4V_jMfihW94CP3CNHSo9yd7-LbwRCXJSJg.png)

### 2\. Inizializzare le lingue (Websites & Stores)

Dopo aver salvato, deve recuperare l'elenco delle lingue dal Suo sito WordPress:

1.  Passi alla scheda **Websites & Stores** nelle impostazioni dell'integrazione.

2.  Clicchi sul pulsante **"Pull Stores/Websites"**. Fozzels interrogherà il Suo sito WordPress per recuperare tutte le lingue configurate.

3.  Nell'elenco visualizzato, **attivi** le lingue specifiche che intende gestire.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/POzdAldcqgEXxkAsgSEbnJLTDF9nzoogmg.png)
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/rgGtdO9cFLCfJOPmQs1SQc5NKnlyOx59Ag.png)

###
3\. Sincronizzazione del catalogo

Questo è l'ultimo e più importante passaggio per rendere visibili i prodotti:

-   **ESEGUA NUOVAMENTE L'IMPORTAZIONE DEI PRODOTTI.** È obbligatorio, affinché il sistema possa identificare le relazioni tra le diverse versioni linguistiche dei Suoi prodotti e **caricarle nei Suoi cataloghi Fozzels** come oggetti singoli da elaborare. Senza questo passaggio, i prodotti delle nuove lingue non compariranno nel sistema.

![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/S0333OKK3WCPquO5CYoLzBkvWJVsJRbG4w.png)

##
La combinazione vincente: WPML + ACF + AIOSEO

Fozzels Le consente di combinare WPML con plugin leader di mercato per la massima automazione. Questo è il "gold standard" per l'e-commerce professionale:

-   **WPML + SEO ([Yoast](/integration-connectivity/yoast-seo-support-for-woocommerce/) oppure [AIOSEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)):** generi parole chiave, meta title e descrizioni localizzati e unici per ogni versione linguistica. _(Nota: utilizzi un solo plugin SEO alla volta per evitare conflitti)._

-   **WPML + [ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** sincronizzi i contenuti localizzati nei campi personalizzati (ad es. specifiche tecniche, blocchi di marketing o FAQ) separatamente per ciascuna lingua.

-   **La combinazione definitiva (WPML + ACF + AIOSEO):** lo scenario più potente. Le consente di automatizzare contemporaneamente descrizioni professionali, dati tecnici specializzati e un nucleo SEO completo per il mercato internazionale.
