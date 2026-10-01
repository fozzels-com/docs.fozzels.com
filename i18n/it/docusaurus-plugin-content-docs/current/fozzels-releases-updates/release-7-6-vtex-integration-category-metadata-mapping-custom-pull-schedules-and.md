---
id: '103000408975'
title: >-
  Release 7.6 - Integrazione VTEX, mappatura dei metadati delle categorie,
  pianificazioni di pull personalizzate e flussi di lavoro delle immagini
  migliorati
sidebar_position: 15
slug: >-
  /fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and
description: >-
  Siamo lieti di presentare la versione 7.6 di Fozzels! Questa release introduce
  una nuova integrazione con una piattaforma, un accesso più approfondito ai dati
  di categorie e immagini
---

Siamo lieti di presentare la versione 7.6 di Fozzels! Questa release introduce una nuova integrazione con una piattaforma, un accesso più approfondito ai dati di categorie e immagini, controlli precisi sulla sincronizzazione e sul pull tramite API e importanti miglioramenti ai flussi di lavoro di generazione delle immagini con l'IA. Scopra di seguito tutte le nuove funzionalità.

1.  **Nuove integrazioni: integrazione VTEX** (Fase 1): lanciamo il supporto iniziale per la piattaforma e-commerce VTEX! Colleghi il Suo store VTEX per recuperare i dati principali del catalogo, generare metadati IA e descrizioni di prodotto localizzate e sincronizzarli nuovamente senza intoppi.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/JeeYUTgzrDD4RFn6wxHSi6jZ-acbmBcdaA.png)

2.  **Attributi dei dati e metadati: parametri di categoria estesi (Shopware, Magento, Shopify)**: ora può accedere a parametri approfonditi a livello di categoria, tra cui Category ID, slug/URL e identificatori strutturali, direttamente nei flussi di lavoro dei prompt e nelle mappature degli attributi, per un contesto IA più ricco.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/78evdNuNxdhrkRFpX3fpJGb7klpmmoKEPg.png)

3.  **Visualizzazione dei testi alternativi nella galleria di anteprima delle immagini (Magento 2)**: passando il mouse o facendo clic sulla miniatura di un prodotto negli elenchi del catalogo, ora viene visualizzato il relativo testo Alt direttamente sotto il popover di anteprima, rendendo la verifica dei metadati delle immagini rapida e semplice (pienamente supportato per Magento 2).
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/NZGCjJzI8YK0KA5XMMfKuuifCwUFqU1ayA.png)

4.  **Controlli: pianificazione globale del pull e limitazione flessibile del pull:** abbiamo aggiunto controlli avanzati del pull alla pagina Integration Settings per tutte le piattaforme supportate. **Pull Throttling**: imposti ritardi personalizzati tra le pagine e tra le singole richieste API (da 100 a 15.000 ms) per gestire il carico sull'API ed evitare errori di rate limiting nei cataloghi di grandi dimensioni.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/w_q1iVvLQ4_jGLRNGQhA-5vLAxBSxtN1Lw.png)

5.  **Filtri del Product Pull ampliati per Magento (qualsiasi stato)**: filtri le importazioni del catalogo Magento per stato (Enabled, Disabled) e visibilità (Catalog, Search, Catalog & Search, Not Visible Individually). Recuperi e ottimizzi facilmente l'intero catalogo, inclusi gli articoli disattivati e le bozze.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/MsFGGxKTaRkrmyvnCBxWgi7AL-5ZhZlIZA.png)

6.  **Supporto per Image Base URL personalizzato / CDN per Magento:** specifichi un dominio multimediale personalizzato o un percorso CDN (ad es. Cloudflare, AWS S3) per il recupero delle immagini dei prodotti, garantendo un'elaborazione dei media ininterrotta indipendentemente da dove lo storefront ospita le immagini.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/o_y1ScOV7ObEGxqceebgSLnoIl-CotmmuA.png)

7.  **Asset: supporto per più immagini di riferimento:** ora può selezionare più foto del prodotto insieme a più preset di stile (entro i limiti di capacità del modello di IA) per un'unica attività di generazione, ottenendo una maggiore accuratezza visiva e dettagli realistici.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/yi5rCHSv4ILYH-5KRotagmpmvTiuiDP_LQ.png)

8.  **Download del set completo di immagini del prodotto**: il download dei media generati ora esporta l'intero set di immagini generate associate a uno SKU di prodotto, anziché limitarsi al solo primo asset.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/m4RjAkacBItnD9BxX_2SYbSWQXtKRBFj7Q.png)

9.  Abbiamo aggiornato i nostri principali modelli di generazione delle immagini (**Gemini 3.1 Flash Image e Gemini 3 Pro Image)** alle ultime versioni stabili, per un rendering più rapido, una qualità visiva superiore e una stabilità a tutta prova.
    Grazie di essere con Fozzels! Speriamo che questi aggiornamenti rendano il Suo flusso di lavoro quotidiano dei contenuti ancora più fluido. Non esiti a contattarci se ha bisogno di aiuto con le nuove funzionalità!
