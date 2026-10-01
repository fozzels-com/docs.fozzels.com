---
id: '103000408096'
title: '4.5.1.a. Guida utente: flusso di immagini automatizzato per Magento 2'
sidebar_position: 15
slug: /content-creation-flows/user-guide-automated-image-flow-for-magento-2
description: >-
  Il flusso di immagini per Magento è uno strumento di automazione specializzato, di livello enterprise,
  progettato per la generazione di massa di immagini con IA, la mappatura automatizzata dei metadati e la
  sin
---

**Il flusso di immagini per Magento** è uno strumento di automazione specializzato, di livello enterprise, progettato per la generazione di massa di immagini con IA, la mappatura automatizzata dei metadati e la sincronizzazione diretta con il Suo catalogo Magento. Configurando questo flusso, Lei crea una pipeline autonoma che monitora il Suo negozio Magento, elabora migliaia di prodotti e aggiorna dinamicamente il Suo sito web in base a criteri di filtro avanzati.

> **Importante:** Le consigliamo vivamente di **non attivare** il flusso (mantenendo l'interruttore "Flusso attivo" su **OFF**) finché non avrà completato tutte le configurazioni all'interno di Fozzels e testato le Sue impostazioni.

## 1\. Creazione di un nuovo flusso di immagini Magento (scheda 1)

Questa scheda gestisce la connessione principale e l'identità della Sua sequenza di automazione Magento.

-   **Opzione A: tramite il menu Flussi di immagini** — Vada su **Flussi di immagini** nella barra di navigazione superiore, faccia clic su **Nuovo flusso di immagini** e selezioni in sequenza la Sua **integrazione Magento**, il sito web e la vista negozio dai menu a discesa.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3sMs1RpGzJC1CfMq-OPKPRx6S7bvaX80XQ.png)

-   **Opzione B: dal catalogo prodotti** — Vada su **Catalogo → Prodotti**, filtri gli SKU Magento specifici che desidera elaborare, li selezioni e faccia clic su **Azioni → Crea flusso di immagini**. In questo modo la vista negozio Magento e il contesto dei prodotti vengono precompilati automaticamente.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/FYFCs9P6ybHQ4OrlVaSn9YmgmftqIdhxAw.png)

**Passaggi essenziali:**

1.  **Assegni un nome al flusso:** dia al Suo flusso un nome chiaro e descrittivo (ad es. "Magento Store -Autunno 2026 - Gemini Pro").

2.  **Confermi la selezione:** confermi i parametri del Suo negozio Magento facendo clic sul pulsante **Invia** in fondo alla pagina.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/liZ6uL_K1ryZ9ltZQsCUAhG6jAYP4UqhrQ.png)

##
2\. Configurazione IA e griglia media (scheda 2)

In questa scheda definisce il motore del modello IA principale e le caratteristiche esatte del layout visivo richieste dai modelli del Suo tema Magento.

### **Selezione del provider IA e del modello**

Selezioni la rete di elaborazione e il modello specifico dalle schede interattive sullo schermo:
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3eMz8tYlXhUnC_8wEhgtjjig_7FHQP_x-w.png)

-   **Google | Gemini:**

-   **Gemini 2.5 Flash | Nano Banana:** un modello veloce ed efficiente, ottimizzato per attività ad alto volume e a bassa latenza. Supporta **fino a 3 preset di riferimento**.

-   **Gemini 3 Pro | Nano Banana Pro:** progettato per la produzione di asset professionali e per istruzioni complesse. Dispone di un processo di "Thinking" predefinito che perfeziona la composizione e supporta **fino a 14 preset di riferimento**.

-   **Gemini 3.1 Flash | Nano Banana 2:** un modello aggiornato e altamente efficiente, bilanciato per la creazione di asset ad alto volume. Supporta **fino a 14 preset di riferimento**.

-   **Virtual Try-On `NEW`:** un modello specializzato per generare immagini fotorealistiche che mostrano come un capo di abbigliamento appare indosso a una persona (richiede un preset con l'immagine di una persona e un'immagine del capo).

-   **OpenAI | ChatGPT:**

-   **GPT Image 1:** un modello di generazione di immagini preciso e ad alta fedeltà che utilizza i più recenti framework multimodali.

-   **GPT Image 1 Mini `NEW`:** un motore di generazione e modifica di immagini estremamente conveniente, che offre il miglior rapporto qualità-prezzo per i casi d'uso ad alto volume.

-   **GPT Image 2 `NEW`:** un modello di generazione all'avanguardia, progettato per un rendering veloce e di alta qualità con risoluzioni flessibili fino a 3840px.

-   **xAI:**

-   **Grok Imagine Image:** il modello standard di generazione di immagini di xAI, che produce immagini di alta qualità a partire da prompt testuali. Supporta **fino a 5 preset di riferimento**.

-   **Grok Imagine Image Pro `PRO`:** l'architettura premium di xAI, che offre una qualità d'immagine superiore con dettagli più ricchi e texture più accurate. Supporta **fino a 5 preset di riferimento**.

###
**La griglia interattiva del formato di output**

I temi Magento dipendono fortemente da dimensioni precise delle immagini per evitare spostamenti del layout nel frontend. Utilizzi la griglia per fissare le specifiche esatte in pixel:

1.  **Selezioni le proporzioni:** nella colonna di sinistra, scelga la geometria del layout (ad es. il classico **1:1 Quadrato** per le griglie di categoria oppure **3:4 Verticale** per le pagine di dettaglio prodotto (PDP)).

2.  **Selezioni risoluzione e scala:** faccia clic direttamente su una cella della griglia corrispondente al livello di pixel desiderato nelle **colonne 512, 1K, 2K o 4K** (ad es. da **512x512** fino a **4096x4096** per offrire un'esperienza di zoom al passaggio del mouse approfondita nel Suo negozio).

3.  **Il pannello di anteprima:** il pannello interattivo a destra mostra dinamicamente una cornice di ritaglio visiva e il formato del file di destinazione, e calcola la **dimensione stimata** (peso del file) e i **token stimati** (costo di generazione) per ogni richiesta di immagine.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/Ked7uS5641FdzLgFJkkyBLIIB44pYiuh5Q.png)
3\. Filtraggio del catalogo Magento e prompt (scheda 3)

Questa sezione è il cervello creativo del Suo flusso Magento: Le consente di filtrare i prodotti in modo dinamico e di inserire attributi nativi nei Suoi prompt.

### **Sezione A: selezione dei preset**

-   **La regola dell'universalità:** poiché un unico set di preset si applica a un intero gruppo di prodotti Magento, scelga asset neutri. Eviti riferimenti con marcatori di marchio distintivi o dettagli unici che potrebbero accidentalmente estendersi a marchi diversi del Suo inventario Magento.

-   **Contatore di capacità:** tenga traccia degli slot di preset assegnati tramite il contatore in alto. Modelli come Gemini Pro consentono fino a 14 slot di riferimento, permettendoLe di ottenere una coerenza estrema tra più angolazioni e condizioni di illuminazione.

-   **Aggiunta di riferimenti:** faccia clic sul grande riquadro **\[+\] Aggiungi preset** per aprire il menu a discesa nativo e selezionare il tipo di riferimento:

1.  **Modello:** scelga un asset di modella/modello dalla libreria integrata di Fozzels per definire pose e styling della persona.

2.  **Scena:** selezioni uno stile di sfondo o un modello di ambientazione.

3.  **Prodotto:** inserisca un'ulteriore foto di riferimento del Suo prodotto per fornire all'IA più angolazioni o dettagli.

4.  **Immagine:** carichi qualsiasi immagine personalizzata o file di riferimento direttamente dal Suo computer.

    5.  **Media generati:** scelga un'immagine già generata con successo in Fozzels per mantenere la coerenza.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/poqeQbutVP7nGAfD5MDN1F9aCnQ23CE6iw.png)

### **Sezione B: generatore avanzato di regole Magento (filtrare e selezionare i prodotti)**

-   **Operatori logici:** combini più parametri di criteri tramite percorsi logici `AND` o `OR`.

-   **Ricerche mirate per SKU:** utilizzi condizioni come `SKU` `in` `[Value, Value]` per applicare il flusso direttamente a righe di attributi Magento esplicite, separate da virgole. L'anteprima interattiva sottostante si aggiorna istantaneamente per mostrare gli elementi corrispondenti.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/l4Ka92XutqmJkQgI3uopMdusTJwSckSEIw.png)

### **Sezione C: prompt con attributi dinamici**

-   **Inserimento di attributi Magento:** scriva le Sue istruzioni di design nella finestra principale dell'editor, quindi utilizzi il **pannello Attributi** sul lato destro. Può fare clic o trascinare i campi dati nativi di Magento (come `Categoria`, `Color` o `Material`) direttamente nel testo. Fozzels sostituirà dinamicamente questi segnaposto con valori unici per ogni singolo prodotto elaborato nel batch.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/hSKoFNYycQr--RrbjrFaaNum4tvErHYsHA.png)

##
4\. Configurazioni di automazione Magento e denominazione delle immagini (scheda 4)

Questa scheda controlla il modo in cui i Suoi asset multimediali vengono inizialmente messi in coda per l'elaborazione e strutturati per l'inserimento nell'architettura del database Magento, garantendo una corretta mappatura predefinita dei dati e l'ottimizzazione SEO.

-   **Numero di immagini da elaborare al giorno:** imposti dei limiti massimi per regolare i flussi di generazione durante le operazioni in background a lungo termine.

-   **Nome file per le immagini inviate (denominazione SEO):** massimizzi la salute SEO del Suo negozio Magento progettando nomi di file programmatici. Utilizzi testo standard oppure inserisca slug di attributi dinamici dal menu a discesa (come `{name}` per il nome del prodotto o parametri di codice specifici come `{color}`). Gli spazi vengono automaticamente semplificati in trattini puliti (`-`). Il suffisso `_{id}.{ext}` viene aggiunto automaticamente dal sistema per garantire l'univocità dei file nel database ed evitare la sovrascrittura degli asset esistenti sul Suo server Magento.

-   **Posizione dell'immagine nel negozio:** inserisca il numero di priorità globale predefinito (il valore predefinito è `101`). I numeri più bassi compaiono prima nel layout Magento (`1` = prima / in evidenza). Un peso predefinito di `101` inserisce in modo sicuro i risultati dell'IA subito dopo le immagini native del catalogo gestite dal negozio.

-   **Ruoli dell'immagine nel negozio:** associ gli asset direttamente ai ruoli multimediali nativi di Magento utilizzati dal modello del Suo tema attivo. Faccia clic sul campo per assegnare ruoli strutturali predefiniti di fallback come `Base` (immagine principale del prodotto), `Small`, `Thumbnail` o `Swatch`.

-   **Nascondi le immagini inviate nella pagina del prodotto:** attivi questa casella per sincronizzare in modo sicuro le immagini nella cartella media di Magento per funzioni tecniche di back-end (come le icone del carrello al checkout o slider personalizzati secondari) senza mostrarle nel carosello della galleria principale del frontend destinata ai clienti.

-   **Completamente automatico \[Prossimamente\]:** questa funzione è attualmente in fase di sviluppo. Una volta disponibile, attivando questa casella potrà evitare completamente la convalida manuale, pubblicando le immagini direttamente nelle viste negozio Magento live non appena ne è terminato il rendering.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/zAHGFiGSaSobL-Deg00nawI92l2RDf4wzw.png)

##

## 5. ****Attivazione ed esecuzione del flusso****

Una volta completati tutti i campi di mappatura nella scheda 4, la Sua pipeline automatizzata è pronta per essere avviata. Segua questi passaggi per inizializzare il motore di generazione:

1.  **Attivi il flusso (interruttore Flusso attivo):** sposti l'interruttore principale **Flusso attivo**, situato nell'angolo in alto a destra della pagina, in posizione **ON**. In questo modo la Sua automazione passa ufficialmente dallo stato di bozza a una routine operativa.

2.  **Avvii la generazione (Pianifica e chiudi / Esegui ora):**

-   Faccia clic sul pulsante diviso verde nell'angolo in basso a destra dello schermo.

-   Selezioni **Esegui ora** tra le opzioni del menu a discesa. Il sistema salverà la configurazione finale, chiuderà l'area di lavoro del generatore e attiverà immediatamente il motore in background per elaborare il batch di dati dei Suoi prodotti Magento.

3.  **Monitori l'avanzamento:** per visualizzare lo stato del rendering in tempo reale o passare direttamente alla coda di moderazione, faccia clic sul pulsante turchese **\[Elenco batch\]** nell'angolo in basso a sinistra. Verrà indirizzato immediatamente ai registri di elaborazione in ordine cronologico.

## 6\. Utilizzo dell'Elenco batch e revisioni

Se l'opzione **Completamente automatico** è disattivata, tutti gli asset vengono inviati direttamente al Suo **Elenco batch** per la revisione e la pubblicazione manuale.

### **Navigazione nell'indice dei batch**

Faccia clic sul pulsante **Elenco batch** per caricare i registri di esecuzione. Selezioni la sessione in ordine cronologico nella tabella di sinistra e utilizzi il pannello principale **Elenco completamenti immagini** per monitorare l'elaborazione dei prodotti riga per riga insieme ai rispettivi SKU Magento originali.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/oXCxEay_94461PqsajzJPS4wYBlWEgCZjA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/5r4iWyzzfg14_CTFejOGP9ZVint4EoOtnw.png)

### **L'interfaccia di revisione consolidata ("Swipe-and-Sync")**

Facendo clic sull'**icona a forma di occhio** si apre la nostra sovrapposizione semplificata con vista affiancata, progettata per consentirLe di controllare rapidamente i batch e di sovrascrivere i parametri globali a livello di singolo elemento:

-   **Revisione affiancata:** il **pannello Generato (a sinistra)** mostra la nuova opzione dell'IA; il **pannello Originale (a destra)** mostra il file di riferimento del Suo negozio Magento. Utilizzi **\[Ingrandisci\]** su entrambi i lati per un'ispezione dettagliata.

-   **Console di sovrascrittura dei metadati Magento:** situata direttamente sotto le schede delle immagini, Le consente di regolare con precisione impostazioni specifiche del negozio per il prodotto selezionato prima di pubblicarlo:

-   **POSIZIONE:** modifichi manualmente la casella di testo dell'ordine nella galleria (ad es. abbassi il valore rispetto a `101` se desidera che questo specifico rendering sia la miniatura principale).

-   **RUOLI:** faccia clic sui badge interattivi (`Base`, `Small`, `Thumbnail`, `Swatch`) per assegnare o rimuovere dinamicamente i valori di presentazione nativi di Magento per questo file specifico.

-   **NASCONDI SU PDP:** selezioni questa casella per nascondere solo questo singolo asset dal carosello della pagina di dettaglio prodotto.

-   **Il ciclo di controllo:**

-   **Rigenera:** avvia immediatamente una nuova esecuzione, senza restrizioni, per ottenere una variante visiva alternativa se il layout deve essere riprogettato.

-   **Accetta e avanti:** approva la versione, salva le sovrascritture personalizzate dei metadati Magento e **apre istantaneamente l'immagine successiva** nella coda del batch.

##
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/fghCPbvdab9wtI-u0AWAUQPsuXIrvMCEPg.png)
6\. Azioni in blocco ed esportazioni ZIP locali

Fozzels offre la totale portabilità dei dati del Suo inventario visivo. Può inviare i batch direttamente a Magento oppure esportare le cartelle in locale.

### **Esecuzione delle azioni di massa:**

1.  Selezioni le caselle sul lato sinistro delle righe nella tabella **Elenco completamenti immagini**.

2.  Apra il menu a discesa **Azioni**, situato direttamente sopra le intestazioni della griglia dati, e scelga l'operazione:

-   **Mostra selezionati:** filtra la schermata di lavoro per isolare solo le righe dei prodotti Magento contrassegnate.

-   **Scarica immagini (ZIP):** avvia in background la raccolta di tutti gli asset ad alta risoluzione generati dall'IA contrassegnati in un unico pacchetto compresso.

### **Dove trovare gli archivi scaricati**

Poiché l'elaborazione di grandi batch di immagini ad alta risoluzione può richiedere alcuni istanti, gli archivi vengono generati in background. Per scaricare i file completati:

1.  Faccia clic sul menu a discesa **Dashboard** nell'angolo in alto a destra della barra di navigazione principale.

2.  Selezioni **Esportazione / Dati generati** dall'elenco.

3.  Quando il badge di stato diventa verde (**Disponibile**), faccia clic sul pulsante blu **\[ZIP\]** nella colonna _Download_ per salvare l'archivio direttamente sul Suo computer.

> ⚠️ **Nota importante:** i file ZIP generati vengono conservati sul server e sono disponibili **solo per 24 ore**. Non dimentichi di scaricare i Suoi asset prima che il link scada!

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/EqkvThCVlPgUbKnTorc6vQ3Ilx2CxPOccg.png)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/b3yz16xNhZFEKIfuUAB_xhtCTPD7feQp6w.png)

##
7\. Ottimizzazione SEO: generazione dei testi alternativi per le nuove immagini

Oltre agli asset visivi, Fozzels può generare automaticamente testi alternativi (Alt text) pertinenti e ottimizzati per la SEO per ogni nuova immagine IA inviata al Suo negozio Magento. Ciò migliora in modo significativo i fattori di ranking del Suo catalogo nei risultati di Google Ricerca immagini.

Per scoprire come configurare la generazione automatizzata e la mappatura dei metadati per i tag Alt, legga qui: **Guida utente: testi alternativi automatizzati e SEO per Magento**.
