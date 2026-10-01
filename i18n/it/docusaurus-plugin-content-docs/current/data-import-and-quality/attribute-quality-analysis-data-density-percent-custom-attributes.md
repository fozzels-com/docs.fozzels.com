---
id: '103000368952'
title: 3.2.1. Analisi della qualità degli attributi. Percentuale di densità dei dati. Attributi personalizzati
sidebar_position: 6
slug: >-
  /data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes
description: >-
  Questo documento offre sia una panoramica concettuale sia istruzioni pratiche
  dettagliate sull'intero ciclo di vita degli attributi di prodotto all'interno
  della piattaforma Fozzels
---

Questo documento offre sia una panoramica concettuale sia istruzioni pratiche dettagliate sull'intero ciclo di vita degli **attributi** di prodotto all'interno della piattaforma Fozzels: dall'importazione e analisi iniziali fino alla configurazione avanzata, alla trasformazione e alla creazione di campi personalizzati.

Gli attributi sono l'**unica fonte di verità** (Single Source of Truth) per la generazione di contenuti con l'AI. La loro gestione comporta il controllo della **densità dei dati**, della **mappatura** e della **localizzazione**, aspetti fondamentali per creare descrizioni di prodotto di alta qualità, pertinenti e accurate nei fatti. Configurare la raccolta degli attributi prima di iniziare a lavorare (rivedendo e disattivando i campi non pertinenti o vuoti) è un'attività essenziale che semplifica notevolmente le operazioni successive.

### Parte 1: Importazione e analisi di base

#### 1.1. Che cosa sono gli attributi di Fozzels?

Gli attributi sono dati strutturati (ad es. `color`, `price`, `material`) importati dalla Sua piattaforma integrata. Fungono da variabili di input per il **campo del prompt**, consentendo di generare contenuti unici per ogni prodotto.

#### 1.2. Avvio del pull

Il processo di importazione dei dati inizia con il comando **Importa prodotti**.

1.  **Vada** nelle impostazioni della Sua integrazione e **selezioni** la scheda **Siti web e negozi**.

2.  **Clicchi** sul pulsante **“Importa prodotti”** per il negozio attivo.

3.  **Monitoraggio:** l'avanzamento è indicato da una barra di avanzamento. Il processo può essere gestito con i pulsanti **Interrompi**, **Pausa** e **Riprendi**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/6SrlYRiz66TUDmf63b5peXAC6EfLCFTjEw.png)

4.  **Log:** report dettagliati sull'importazione di prodotti e attributi sono disponibili tramite **“Visualizza log dei prodotti”** e **“Visualizza log degli attributi”** nella colonna Azioni.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/DLITtFMHc0MmEeK2UDasXyL5ZaBZifO06Q.png)

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/JRoTBrRsovpu033tRmysjhhnEYa-1nIkzg.png)

####
1.3. Analisi della qualità: percentuale di densità dei dati

Nella scheda **Attributi**, Fozzels calcola automaticamente la qualità di ciascun campo.

-   **Definizione:** la **densità dei dati** è la percentuale di prodotti del catalogo per i quali questo attributo ha un valore non vuoto e utilizzabile.

-   **Utilizzo:** gli attributi con bassa densità dovrebbero essere usati solo all'interno di **logica condizionale** (blocchi `if`), per evitare di generare contenuti con lacune nei fatti o spazi vuoti.

-   **Gestione:** può **disattivare** gli attributi con densità dello 0% o quelli che non intende utilizzare, semplificando l'interfaccia del **Flow Builder**.

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/suceb1fs0FvE76a7CHN6A6JvqnLGLtaL2g.png)

###
Parte 2: Revisione e configurazione

#### 2.1. Revisione dei dati di esempio (Ottieni dati di esempio casuali)

Per verificare i valori importati e la loro localizzazione, utilizzi la funzione dei dati di esempio.

1.  **Clicchi** sulla funzione **"Ottieni dati di esempio casuali"** nella scheda Attributi.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GzPH1l304MY6YjwmxuhHfMjO3s2YS-YD6A.png)

2.  **Selezioni** un negozio/una lingua dal menu a discesa. In questo modo può vedere come appaiono i valori per uno specifico mercato linguistico (ad es. il colore "zwart" per un negozio olandese rispetto a "black" per un negozio inglese).
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GyKgf3yfF6tWo11gSYr6JXc8Y99q4tIA8Q.png)

3.  **Utilizzi** i pulsanti **freccia avanti/indietro** per visualizzare diversi valori degli attributi di vari prodotti casuali.

#### 2.2. Modifica avanzata degli attributi (finestra Modifica attributo)

Cliccando sull'**icona Modifica** (matita) di un attributo si apre la finestra per la configurazione avanzata.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dUU-_lgywMI5u-f7Y9G9ppxK9QLX_ljCAA.png)

##### Trasformazione dei dati

-   **Trasforma dati:** consente l'**esecuzione di codice in runtime** (codice personalizzato) sul valore importato prima che venga memorizzato.

##### ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/XMR_zIZH_IM-p4UANnIYB8m37CATk4nhBQ.png)
Flag tecnici

-   **Filtrabile:** se attivato, questo attributo può essere utilizzato per filtrare i prodotti nel catalogo/nell'elenco batch in base al suo valore.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/EvbjNHS2aedS-hzos_piQd1wAtXba0rJww.png)
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dxX8mUPfJNYVbhVNTB7vDcF--x2JUiW3CQ.png)

-   **Modificabile:** se attivato, Fozzels ha l'autorizzazione a **scrivere** (esportare) dati in questo campo sulla piattaforma di origine.

-   **Ereditabile:** stabilisce se il valore dell'attributo di un prodotto **padre** debba essere copiato automaticamente nelle sue varianti **figlie**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/24rgLlDhyDeaL87wmVe_rWJG8rNvx4u5YA.png)

-   **Consenti HTML:** consente all'attributo di contenere e visualizzare tag HTML.

##### Localizzazione del nome dell'attributo

-   Nella scheda **Localizzazione** può **inserire** il nome localizzato desiderato per l'attributo per ciascuna versione del negozio collegata.

-   **Risultato:** i nomi localizzati inseriti verranno visualizzati nelle intestazioni delle colonne delle tabelle e nella finestra **Prompt del flusso**, aiutando l'AI a comprendere l'attributo nel contesto della lingua del negozio.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/hur7c60aN2_gvYH4QGK3hiVS0QSsqaTXBQ.png)
    _per il negozio EN:_
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2UvshsNaysqHkYC0DA1ZjsYnZ06wRogQfQ.png)

   _per il negozio NL:_
    _![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/rGRdeC3Lob__8TSrZSZP07ap45ESGV7YcQ.png)_

### Parte 3: Creazione di attributi personalizzati

#### 3.1. Scopo degli attributi personalizzati

Gli **attributi personalizzati** sono campi creati direttamente in Fozzels. Possono fungere da campo di destinazione per salvare i contenuti generati o per valori calcolati.

#### 3.2. Processo di creazione di un nuovo attributo

1.  **Clicchi** sul pulsante **"Nuovo attributo"** nella scheda Attributi.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/LziDSQFwLlpE7kPgzI_R1FSLOGhzqMJhMg.png)

2.  Nella finestra pop-up **"Crea nuovo attributo"**, definisca:
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2nTs3mBYNoxGTi61kVLJbWfr45SFrAV-Qg.png)

-   **Nome:** un nome descrittivo per l'interfaccia.

    -   **Codice:** un identificatore tecnico univoco.
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/39sh5ONkvBeaLHia--kl0pSjQC34K3wHTQ.png)

    -   **Input frontend:** il tipo di dati che l'attributo conterrà (**Text**, **Textarea**, **Select**, **Multiselect**, **Date**, **Boolean**, **Weight**, ecc.).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dPHGR82fmOzt6JcWICNhXny23ofktRFVw.png)

    -   **Mappatura generica:** standardizza l'attributo secondo la struttura interna di Fozzels (ad es. selezioni **Description**).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dhlYPSoDYXoxvTfahRTrFL8wOTxjURLVIQ.png)

3.  **Visualizzazione del campo frontend con widget:** facoltativamente, selezioni un widget per definire come il campo viene visualizzato nel catalogo (ad es. **Category Tree, Image, Product ID**).

4.  **Clicchi** su **“Salva”**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/NGdrMyUieEv_wTjftyUbnE47OmN56Ekvlw.png)

5\. Controlli l'attributo creato nel popup "**Modifica attributo**" e, se necessario, lo configuri.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/aZZ4Pw6tM39wJo25lxXp3PoMSFNptTQxGA.png)
6\. Controlli il risultato nell'**elenco generale degli attributi**.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/AYfNwv4-y98aOsUmRM3PnLH68aSQJkC8gw.png)
