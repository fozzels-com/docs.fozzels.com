---
id: '103000384142'
title: 'Release 5.10-5.11 RC2: catalogo più veloce, controllo più approfondito su Fozzels.'
sidebar_position: 1
slug: >-
  /fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels
description: >-
  Ci impegniamo affinché lavorare con grandi volumi di dati sia non solo veloce,
  ma anche completamente controllabile e intuitivo. La versione 5.10 si
  concentra sul miglioramento
---

Ci impegniamo affinché lavorare con grandi volumi di dati sia non solo veloce, ma anche completamente controllabile e intuitivo. La versione 5.10 si concentra sul miglioramento della qualità dei dati visivi e sull'**aumento significativo delle prestazioni e della praticità d'uso del nostro servizio Fozzels.**


Più prestazioni e qualità dei dati

Abbiamo migliorato la UX per rendere più rapida la gestione di cataloghi di grandi dimensioni e più fluido il lavoro con i contenuti.

### 1\. Gestione del catalogo e dei dati

-   **Catalogo accelerato (nuove impostazioni predefinite):** nel catalogo è stata introdotta una nuova regola di visibilità delle colonne. Circa 20 degli attributi più importanti sono ora attivati per impostazione predefinita. Ciò **semplifica notevolmente il flusso di lavoro** e **aumenta la velocità di caricamento** e le prestazioni di visualizzazione dei cataloghi di grandi dimensioni.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/lKkJYdOEv5IMFHk7r6Mhn2Iv7R--LD6Bcg.png)

-   **Precisione degli attributi (arrotondamento della DDP):** la logica di visualizzazione della percentuale di densità dei dati (DDP) è stata aggiornata. Il valore DDP viene ora arrotondato a **tre cifre decimali**. Ciò garantisce una visualizzazione accurata degli attributi con DDP molto bassa (ad es. 0.040%), eliminando la confusione causata dall'arrotondamento a zero.

-
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2LTShrMQn-AwHW8xdptY0MjbZobK0D0Iig.png)

-   **Massima chiarezza degli attributi:** il blocco "Ottieni dati di esempio casuali" ora mostra il **nome completo del sito web e del negozio** (invece delle abbreviazioni). Saprà sempre con certezza con quali dati sta lavorando.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/_WOgxMxdZL8LDJJL80org__eblNuAp-nIA.png)

-   **Navigazione flessibile nelle tabelle:** le opzioni di paginazione degli elenchi di attributi sono state ampliate e supportano 50, 75, 100, 150 e **"200"** elementi. Gestisca con facilità enormi set di dati.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/VwedlrpwTbYE7jTtQJKiU84KWL28R-__Rg.png)

-   **Aggiornamento automatico dei log del catalogo:** nelle tabelle dei log che tracciano le modifiche al pool di prodotti e attributi (**Elenco dei log di stato**), la funzione di aggiornamento automatico (**Aggiorna ogni X secondi**) è ora **attiva per impostazione predefinita**, rendendo più comodo il monitoraggio dei processi attivi.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/k7wJs0gU52ThkvU06NRQiNCb052rvZNB3A.png)
    2\. Generazione e flussi di lavoro (UX)

-   **Accesso immediato alle impostazioni:** nella tabella Elenco batch, accanto al nome dell'attributo, è stata aggiunta l'icona a forma di occhio **"Visualizza attributo"**. In questo modo è più rapido controllare le impostazioni e la configurazione dell'attributo.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/EStHK3i08CDJYcXd9nmAO1KRhxknIufVZw.png)

-   **Controllo delle colonne in "Salva e anteprima":** il blocco **"Visibilità colonne"** è stato aggiunto alla tabella di anteprima (**Salva e anteprima**). Ciò Le consente di visualizzare solo gli attributi necessari, risolvendo i problemi legati a tabelle troppo grandi.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2xUkAX-SxZ6mayNDh5A91b3m2AkKS4mDFw.png)

### 3\. Gestione delle immagini e qualità visiva

-   **Catalogo visivo pulito:** il sistema ora **ignora e non visualizza** automaticamente gli URL di immagini non validi (danneggiati) o vuoti nel catalogo, nei report e negli elenchi di generazione. Dica addio alle immagini danneggiate: ora i Suoi dati hanno un aspetto impeccabile.

-   **Filtro delle immagini migliorato (flusso di immagini):** sono stati aggiunti nuovi potenti strumenti per ordinare e filtrare le immagini nei blocchi di configurazione del flusso di immagini:

-   Filtri speciali consentono di passare dalle immagini predefinite a quelle caricate da Lei (ordinamento per **Origine**).

    -   È stato aggiunto l'ordinamento per **Data di caricamento** e **Nome**.
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/q6optXQOc2cONrSBq2hAYJmFT-kVtuUMIA.png)
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/9Y5ObdDOni2-uTSMx1mbIb9eIkLRaWSRdw.png)

-   **Chiarezza terminologica:** per una maggiore chiarezza, "Modello AI" nelle impostazioni del flusso di immagini è stato rinominato in **"Modello preimpostato"**.

### 4\. Operazioni di massa più rapide

-   **"Mostra selezionati" completo (catalogo e report giornaliero):** abbiamo migliorato notevolmente la funzione "Mostra selezionati". Ora, sia nel **Catalogo** sia nel **Report giornaliero**, la tabella degli elementi selezionati consente di eseguire **tutte le stesse azioni della tabella normale**: visualizzare, filtrare e applicare **azioni di massa**.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/wVzkPiDgjCcZCYtSpCXgXA8rfbX5fqysPw.png)

-   **Affidabilità delle azioni di massa:** abbiamo corretto un piccolo problema che occasionalmente faceva restare vuota la griglia se non era selezionato alcun elemento. Lavorare con le azioni di massa è ora ancora più affidabile.

## Dietro le quinte: stabilità e modernità

-   **Stabilizzazione mirata delle integrazioni:** sono state apportate le correzioni necessarie per migliorare la stabilità e la funzionalità delle integrazioni con le piattaforme **WooCommerce, EK Retail e Shopware**, garantendo un funzionamento affidabile ai clienti con queste specifiche configurazioni.

La Sua esperienza è la nostra priorità. Questi aggiornamenti sono solo una parte del nostro lavoro continuo per migliorare Fozzels. Grazie per far parte della nostra community!
[Il nostro Instagram](https://www.instagram.com/fozzelsai/)
