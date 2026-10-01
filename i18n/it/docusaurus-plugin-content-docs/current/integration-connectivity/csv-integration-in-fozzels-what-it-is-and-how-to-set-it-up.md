---
id: '103000406293'
title: "2.9.1 - Integrazione CSV in Fozzels: che cos'è e come configurarla"
sidebar_position: 20
slug: >-
  /integration-connectivity/csv-integration-in-fozzels-what-it-is-and-how-to-set-it-up
description: >-
  Che cos'è l'integrazione CSV? L'integrazione CSV Le consente di collegare il
  Suo catalogo prodotti a Fozzels utilizzando un file CSV standard. Se la Sua
  piattaforma non dispone di un
---

## Che cos'è l'integrazione CSV?

L'integrazione CSV Le consente di collegare il Suo catalogo prodotti a Fozzels utilizzando un file CSV standard. Se la Sua piattaforma non dispone di un'integrazione diretta con Fozzels, nessun problema: è sufficiente esportare i dati in formato CSV e caricarli. Fozzels leggerà i Suoi prodotti e i relativi attributi, dandoLe accesso all'intera gamma di funzionalità della piattaforma.

## Passaggio 1 — Crei una nuova integrazione

Nel menu di navigazione in alto, clicchi su **Integrazioni**, quindi clicchi sul pulsante **\+ Crea** nell'angolo in alto a destra.

## Passaggio 2 — Scelga il tipo di integrazione

Vedrà un elenco delle piattaforme disponibili: Akeneo, Shopify, Magento2, WooCommerce e altre. Per collegarsi tramite file, selezioni **Raw File**.

## Passaggio 3 — Configuri l'integrazione

Si aprirà un modulo con tre passaggi: **Configurazione → Siti web e negozi → Attributi**.

### Campi obbligatori

Prima di caricare il file CSV, compili i tre campi obbligatori:

-   **Nome** — un nome per l'integrazione (ad es. `My Product Catalog CSV`)
-   **URL** — un link alla fonte (se applicabile)
-   **Colonna SKU** — il nome esatto della colonna del Suo file che identifica in modo univoco ciascun prodotto (ad es. `sku`, `product_id`, `article`)

Quindi clicchi su **Salva**. Solo dopo il salvataggio l'area di caricamento del CSV diventerà attiva.

> ? **Perché?** Il sistema deve conoscere il nome della colonna SKU prima di leggere il file: è necessario per un'elaborazione corretta dei dati. Salvi prima le impostazioni, quindi carichi il file.

### Opzioni di formato

Parametro

Valore predefinito

Descrizione

Formato

CSV

Formato del file

Delimitatore

Virgola (,)

Separatore di colonna

Carattere di delimitazione

`"`

Carattere che racchiude i valori

Codifica

UTF-8

Codifica del file

La prima riga è l'intestazione

Sì

Indica se la prima riga contiene le intestazioni delle colonne

Colonna SKU

—

Nome della colonna che identifica in modo univoco ciascun prodotto

### Pianificazione globale delle importazioni

Imposta l'orario della sincronizzazione automatica. Il valore predefinito è `03:30`. Se ha bisogno di una pianificazione diversa per un negozio specifico, può sovrascriverla nelle impostazioni di quel negozio.

> ? Per attivare l'integrazione, abiliti l'interruttore **Attivo** nell'angolo in alto a destra del modulo. In caso contrario, non verrà eseguita alcuna sincronizzazione.

## Passaggio 4 — Carichi il file CSV

Dopo il salvataggio, l'area di caricamento diventa attiva. Può caricare il file in due modi:

-   **Drag & drop** — trascini il CSV direttamente nella zona di caricamento
-   **Carica** — clicchi sul pulsante blu **Carica** e selezioni un file dal Suo computer

Una volta caricato, il nome e la dimensione del file compariranno sotto la zona di drag & drop, a conferma che il file è stato aggiunto correttamente.

> ? Durante la lettura del file, il sistema utilizza le impostazioni di formato definite in precedenza: delimitatore, codifica e carattere di delimitazione.

Dopo aver caricato il file, clicchi di nuovo su **Salva**: il sistema La porterà automaticamente alla scheda **Siti web e negozi**.

## Passaggio 5 — Siti web e negozi

Clicchi sul pulsante **Recupera siti web e negozi**: il sistema creerà un record per il Suo sito web e il Suo negozio virtuali. Questo è l'approccio standard in Fozzels: anche quando si lavora con il caricamento di un file, la piattaforma utilizza la struttura universale sito web → negozio.

Una volta che il record compare nella tabella, **attivi il sito web e il negozio** utilizzando gli interruttori nella colonna **Stato**.

Quando entrambi sono attivi, diventa disponibile il pulsante **Recupera prodotti**. Lo clicchi per avviare l'importazione dei prodotti dal file CSV nel catalogo Fozzels.

> ? La tabella mostra anche la **Pianificazione dell'importazione**, ovvero l'orario di sincronizzazione impostato nel Passaggio 3. Se necessario, può sovrascriverla per ciascun negozio.

## Passaggio 6 — Visualizzazione dei prodotti importati

Una volta completata l'importazione (la barra di avanzamento raggiunge il 100%), clicchi sull'icona **Visualizza prodotti** nella colonna Azioni per aprire il catalogo prodotti di questa integrazione.

### Come sono organizzati i dati:

-   Ogni **riga** del CSV diventa un prodotto separato
-   Ogni **colonna** del CSV diventa un attributo del prodotto

### Gestione della visibilità delle colonne

Non tutti gli attributi sono visualizzati per impostazione predefinita. Per scegliere quali colonne mostrare, clicchi su **Visibilità colonne** nell'angolo in alto a destra della tabella e selezioni gli attributi di cui ha bisogno.

### Filtrare i prodotti

Sono disponibili due opzioni di filtro:

-   **Filtri in linea** — campi direttamente sotto le intestazioni delle colonne per una ricerca rapida
-   **Filtro avanzato** — logica flessibile di condizioni AND/OR per query complesse

### Azioni di massa

Dopo aver selezionato i prodotti necessari, è disponibile l'intero set di strumenti di Fozzels: raggruppamento dei prodotti, creazione di set di prodotti e avvio di un flusso di contenuti, di immagini o video in base alla Sua selezione.

> ? In questo modo, il Suo file CSV diventa una fonte di dati pienamente funzionante in Fozzels, con tutti gli strumenti per i contenuti della piattaforma a Sua disposizione.

## Passaggio 7 — Preparazione degli attributi prima di creare un flusso

Prima di creare un flusso di contenuti, si assicuri che l'attributo di destinazione sia configurato correttamente. Vada alla scheda **Attributi** della Sua integrazione e clicchi sull'icona di modifica (matita) accanto all'attributo che desidera utilizzare:

-   **Modificabile** — deve essere abilitato. In caso contrario, Fozzels non può scrivere i contenuti generati in questo campo e l'attributo non comparirà nel menu a tendina durante la creazione di un flusso.
-   **Consenti HTML** — lo abiliti se desidera generare contenuti con markup HTML (ad es. descrizioni con tag `<p>`, `<ul>`, ecc.).

> ? Scopra di più su attributi, Data Density e campi personalizzati nel nostro articolo: [Analisi della qualità degli attributi](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

## Passaggio 8 — Creazione di un flusso di contenuti

Per generare contenuti a partire dai prodotti importati, è necessario creare un **flusso di contenuti**. Ci sono due modi per farlo:

**Opzione 1 — tramite il menu Flussi di contenuti:** vada su **Flussi di contenuti** nel menu in alto e clicchi su **\+ Crea**.

**Opzione 2 — direttamente dal catalogo:** selezioni i prodotti necessari (o tutti) → apra il menu a tendina **Azioni** → selezioni **Crea un nuovo flusso di contenuti**.

Nel modulo di creazione, inserisca un **Nome** e selezioni l'**Attributo**, ovvero la colonna per cui verranno generati i contenuti.

Il resto della procedura è standard e si compone di quattro passaggi:

**Passaggio 1 — Nuovo flusso:** nome e attributo di destinazione.

**Passaggio 2 — Configurazione AI:** scelga un provider AI (OpenAI, Google Gemini, ecc.), il modello, lo stile e il tono del testo e il limite di token.

**Passaggio 3 — Selezione del flusso e prompt:** attivi il flusso, configuri il filtro dei prodotti e scriva il Suo prompt. Per ottenere risultati migliori, utilizzi attributi con un punteggio di Data Density elevato. Scopra di più nel nostro articolo: [Creazione dei prompt e filtri](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor).

**Passaggio 4 — Automazione:** imposti il numero di prodotti per esecuzione, configuri la pianificazione e avvii tramite **Esegui ora** o **Pianifica e chiudi**.

> ? Se è alle prime armi con i flussi di contenuti, Le consigliamo di leggere: [Definizione di flusso e tipi di contenuto](/content-creation-flows/flow-definition-and-content-types-text-image-video) e [Creazione di un nuovo flusso di contenuti](/content-creation-flows/creating-a-new-content-flow-and-initial-settings).

## Passaggio 9 — Ottenere i risultati

A differenza di altre integrazioni (Shopify, Magento, ecc.), **il pulsante "Salva e sincronizza" non funziona per il CSV**: non esiste una connessione attiva a un negozio verso cui inviare i dati. I risultati vengono invece scaricati manualmente tramite esportazione.

### Come esportare i contenuti generati

1.  Vada all'**Elenco batch** del Suo flusso
2.  Selezioni i record necessari tramite **Azioni → Seleziona tutto** (o manualmente)
3.  Nel menu a tendina **Azioni**, scelga **Esporta come CSV**
4.  Confermi nella finestra pop-up cliccando su **Avvia esportazione**
5.  Il sistema metterà il file in coda: riceverà una notifica quando sarà pronto

### Dove scaricare il file

Vada su **Dashboard → Esportazione / Dati generati**. Questa pagina mostra una tabella di tutti i file generati con lo stato **Disponibile**. Trovi il Suo file e clicchi sul pulsante **ZIP** per scaricarlo.

> ⚠️ **Il file è disponibile solo per 24 ore** dal momento della creazione. Si assicuri di scaricarlo prima della scadenza.

## Link utili

-   [Analisi della qualità degli attributi. Densità dei dati. Attributi personalizzati](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes)
-   [Definizione di flusso e tipi di contenuto (testo, immagine, video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)
-   [Creazione di un nuovo flusso di contenuti e impostazioni iniziali](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Creazione dei prompt e filtri. Editor dei prompt drag & drop](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)
