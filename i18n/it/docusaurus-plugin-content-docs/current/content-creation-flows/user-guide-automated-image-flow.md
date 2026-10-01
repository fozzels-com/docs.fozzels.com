---
id: '103000400446'
title: '4.5.1. Guida utente: flusso di immagini automatizzato'
sidebar_position: 14
slug: /content-creation-flows/user-guide-automated-image-flow
description: >-
  Il flusso di immagini è uno strumento professionale progettato per la generazione di massa e
  la sincronizzazione delle immagini dei prodotti tramite IA. Configurando un flusso una sola volta,
  Lei crea
---

**Il flusso di immagini** è uno strumento professionale progettato per la generazione di massa e la sincronizzazione delle immagini dei prodotti tramite IA. Configurando un flusso una sola volta, Lei crea un sistema autonomo che elabora migliaia di prodotti, compresi i nuovi articoli che verranno aggiunti in futuro al Suo negozio, grazie al filtraggio dinamico basato su condizioni.

> **Importante:** Le consigliamo vivamente di **non attivare** il flusso (mantenendo l'interruttore "Flusso attivo" su **OFF**) finché non avrà completato tutte le configurazioni e testato le Sue impostazioni.

## 1\. Creazione di un nuovo flusso di immagini (scheda 1)

Questa scheda gestisce l'identità di base e la connessione della Sua automazione. Esistono due modi principali per avviare un nuovo flusso:

-   **Opzione A: tramite il menu Flussi di immagini** - Vada alla sezione **Flussi di immagini** nella barra di navigazione superiore e faccia clic sul pulsante **Nuovo flusso di immagini**. Selezioni in sequenza l'integrazione, il sito web e il negozio dai menu a discesa.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/aGysMRzpl5ijAiHFUH5TFnasSdIEP1py9w.png)

-   **Opzione B: dal catalogo prodotti** - Nella sezione **Catalogo → Prodotti**, filtri i prodotti che desidera elaborare, li selezioni e faccia clic su **Azioni → Crea flusso di immagini**. Questo metodo è più rapido, poiché precompila automaticamente il contesto del negozio e della selezione dei prodotti.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/WVP7KcJNwsPTLqIzLSQQwGsAoBCdxAdqLg.png)

**Passaggi essenziali:**

1.  **Assegni un nome al flusso:** dia al Suo flusso un nome chiaro e descrittivo (ad es. "Abiti estivi 2026 - Gemini Pro").

2.  **Salvi i progressi:** qualsiasi modifica al nome del flusso o alla selezione del negozio deve essere confermata facendo clic sul pulsante **Invia** in fondo alla pagina.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/XUm-rzBUqRa_mFIUflBlrrZlaYzDnRHgMw.png)

##
2\. Configurazione IA (scheda 2)

In questa scheda definisce l'"intelligenza" e il risultato visivo della generazione. Le impostazioni variano in modo significativo a seconda del provider scelto.

### OpenAI | ChatGPT

Selezionando il modello **GPT Image 1**, ha accesso ai seguenti parametri:

-   **Qualità**: selezioni la qualità di generazione preferita dal menu a discesa (**Automatica, Alta, Media o Bassa**).

-   **Dimensione immagine**: scelga il formato desiderato dal menu a discesa (**Automatico, Quadrato, Orizzontale o Verticale**). Nota: una griglia interattiva per GPT sarà disponibile a breve.

-   **Numero di immagini**: può generare **da 1 a 4 varianti** per ogni prodotto in una singola esecuzione, ottenendo così più opzioni per la revisione manuale.

-   **Limiti tecnici**: la dimensione massima del file di input per GPT è di **50 MB**.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/6Id3aPkXYEb0MEhxve0-510480uvgB2VrA.png)

### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/5NYWCV_4Lb3wxJ4MwkVOe96Mk4o5LU4NVg.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/oiDXnZOLp3NVu3waNL4ZREtyriHjNEvGgQ.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/eQxo8gJitU9Q5Zp7y3BE4FljSNrHhgqITw.png)Google | Gemini

I modelli Gemini utilizzano una griglia interattiva **Formato di output** per un controllo preciso dei risultati.

-   **Modelli disponibili**: scelga tra **Gemini 2.5 Flash (Nano Banana)**, **Gemini 3 Pro (Nano Banana Pro)** e **Gemini 3.1 Flash (Nano Banana 2)**.

-   **Numero di immagini**: per tutti i modelli Gemini questo valore è fisso a **1** (il campo è disattivato), poiché generano un'immagine ottimizzata per ogni richiesta.

-   **Limiti tecnici**: la dimensione massima del file di input è di **7–10 MB**.

-   **Virtual Try-On**: un modello specializzato per la moda.
**Nota:** per questo modello la griglia di output è disattivata, poiché il sistema utilizza automaticamente un formato fisso e ottimizzato per garantire una vestibilità realistica dei capi.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/Ydm8oxLyvSgZ7H_x5R1Uf0kb_u7RxmIXRw.png)

> Per saperne di più sui modelli IA e sulle loro specifiche capacità tecniche, legga qui \[link da aggiungere\].

#### **Come utilizzare la griglia del formato di output (solo Gemini)**

La griglia Le consente di definire la "forma" esatta e la qualità delle immagini generate:

1.  **Selezioni le proporzioni:** nella colonna di sinistra, scelga un rapporto (ad es. **1:1 Quadrato** per le schede prodotto, **3:4 Verticale** per la moda o **16:9 Orizzontale** per i banner).

2.  **Selezioni la risoluzione (qualità):** scelga una colonna in base alle capacità del modello (**1K, 2K o 4K**). Faccia clic sulla cella della risoluzione specifica (ad es. **1024x1024**).

3.  **Conferma visiva:** nella cella selezionata compare un segno di spunta verde. Controlli il pannello **Anteprima** a destra per vedere la forma della cornice, le dimensioni esatte in pixel e i **token stimati** (costo stimato) della generazione.

4.  **Compatibilità:** le celle contrassegnate come "Non supportato" non sono disponibili per il modello selezionato.

**⚠️ Promemoria:** si assicuri di fare clic sul pulsante **Salva** dopo aver selezionato il modello e le impostazioni di output, per memorizzare queste preferenze. Il Suo flusso non applicherà queste modifiche se non vengono salvate.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/gkfM9PdTV36LEV-UL7SN9obfvD3AOKt7_Q.png)

##
3\. Selezione del flusso e prompt (scheda 3)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/H3B5OOvEGyTufKlUAsFd_uzfwAVXLbVcEA.png)

Questa scheda è il cuore della Sua creazione di contenuti. Il primo e più importante passaggio è la configurazione dei Suoi **preset**.

### **Sezione: Seleziona preset**

I preset sono immagini di riferimento visive che fungono da istruzioni per l'IA. Definiscono lo stile generale, l'illuminazione e il contesto per **ogni** prodotto elaborato all'interno di questo flusso.

> **La regola d'oro: universalità** Poiché un unico set di preset viene utilizzato per un intero gruppo di prodotti (ad es. centinaia di abiti o tutte le calzature), le Sue scelte devono essere **UNIVERSALI**.
>
> -   _Esempio:_ se aggiunge un preset **Prodotto** che mostra uno specifico SKU blu, l'IA potrebbe erroneamente tentare di aggiungere dettagli blu a ogni altro articolo del flusso. Scelga solo riferimenti adatti all'intera categoria di prodotti che sta elaborando.
>

####
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FJlYttezkuyQFvSp16LDTSwFhOa5MFopmw.png)
**1\. Limiti e capacità**

Nella parte superiore del blocco vedrà un contatore (ad es. **8/13**).

-   **Capacità massima:** dipende dal modello IA scelto (ad es. fino a **14** per Gemini Pro e Gemini 3.1 Flash).

-   **Composizione:** uno slot è sempre riservato all'immagine principale del prodotto in elaborazione; gli slot rimanenti sono destinati ai Suoi preset universali.

#### **2\. Tipi di preset e ricerca nella libreria**

Faccia clic sul pulsante **"Aggiungi preset"** per scegliere un tipo. Utilizzi il **sistema di filtri** per trovare rapidamente ciò che Le serve:

-   **Modello:** definisce la posa e l'aspetto della persona che indossa i Suoi prodotti. Filtri la libreria per genere, età o etnia per trovare un look che rappresenti il Suo marchio.

-   **Scena:** determina l'ambientazione (ad es. Studio, Strada, Interni). Utilizzi i filtri per categoria per trovare uno sfondo che si adatti all'intera gamma dei Suoi prodotti.

-   **Prodotto (angolazioni aggiuntive):** aiuta l'IA a comprendere articoli complessi (ad es. la texture di un tessuto o la suola di una scarpa).

-   **Ricerca:** utilizzi il filtro del catalogo (che funziona esattamente come la sezione principale **Catalogo**) per cercare per titolo, SKU o categoria.

-   **Selezione dell'immagine:** una volta trovato un prodotto rappresentativo, può selezionare **qualsiasi sua immagine** (ad es. una vista posteriore o un primo piano). È sufficiente contrassegnare l'immagine desiderata con un **segno di spunta verde** e salvare.

-   **Immagine:** utilizzata per texture, loghi o elementi specifici del marchio.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/UBYhntqBETFRErz_N1DJPPrNu8VI8_uh-A.png)

####
**3\. Caricamento dei propri asset (+ Aggiungi)**

Se carica una Sua immagine (per i tipi Modello, Scena o Immagine) tramite il pulsante **\+ Aggiungi**, deve assegnare dei **valori di filtro** a quel file.

-   Assegnando dei tag al file caricato (ad es. specificando il tipo di scena o il genere del modello), il sistema indicizza il file. In questo modo potrà trovare e riutilizzare istantaneamente i Suoi asset personalizzati nei flussi futuri tramite la Sua libreria privata.

#### **4\. Eliminazione e finalizzazione**

-   Per rimuovere un riferimento, faccia clic sull'**icona del cestino** sulla scheda del preset.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/i37UkovmY_SDzeW_4IjJEJGW6g7337yjEg.png)

-   **Importante:** dopo aver aggiunto o rimosso dei preset, **DEVE** fare clic sul pulsante **Salva** in fondo alla pagina. L'assistente IA non riconoscerà il set di riferimenti aggiornato finché le modifiche non saranno salvate.

### **Sezione: Filtra e seleziona prodotti**

Questa sezione Le consente di definire con precisione l'elenco degli articoli per i quali l'IA genererà nuove immagini.

> **❗ Importante:** per impostazione predefinita, quando viene creato un nuovo flusso, sono inclusi **TUTTI** i prodotti del Suo negozio. Il numero di prodotti mostrato nell'intestazione (**Filtra e seleziona prodotti - XX**) è dinamico e si aggiorna in tempo reale man mano che modifica le impostazioni.

####
**1\. Schede prodotto e selezione delle immagini**

Il blocco mostra una griglia con le schede dei Suoi prodotti.

-   **Icona "Pila di immagini":** un'icona nell'angolo in alto a destra di una scheda indica che il prodotto ha più di un'immagine.

-   **Scelta dell'immagine di base:** faccia clic su una scheda prodotto per aprire il pop-up della galleria. Selezioni la foto più adatta da utilizzare come "Immagine di base" per la generazione (si tratta dello slot riservato inviato all'IA insieme ai Suoi preset).

-   Per impostazione predefinita, il sistema utilizza la **prima** immagine del Suo catalogo.

-   Per cambiarla, è sufficiente selezionare un'altra foto e fare clic su **Salva** nel pop-up.

#### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/BsDYOnyD0cPg_dl35r0HT6YgOmKmffLBWQ.png)
**2\. Requisiti: prodotti con immagini**

I prodotti che **non hanno alcuna immagine** nel Suo database vengono automaticamente esclusi da questo blocco. La generazione con IA tramite i flussi richiede una base visiva per funzionare correttamente.

#### **3\. Utilizzo dei filtri (condizioni)**

Per selezionare un gruppo specifico di prodotti (ad es. solo gli "Abiti" di un determinato marchio), utilizzi il blocco dei filtri. La logica funziona esattamente come nella sezione principale **Catalogo**. Nel flusso rimarranno solo i prodotti che soddisfano questi criteri.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c_yGlTAqTpbYt9K8gCiBwMDPPLqEkUbqUQ.png)

#### **4\. Gestione manuale del set**

Dopo aver applicato i filtri, può perfezionare ulteriormente l'elenco con i seguenti comandi:

-   ✅ **Escludi selezionati:** selezioni le caselle dei prodotti specifici che desidera rimuovere dal set corrente e faccia clic su questo pulsante.

-   ✅ **Includi solo selezionati:** selezioni i prodotti specifici che desidera mantenere; tutti gli altri verranno rimossi dal flusso.

-   **Pulsante Aggiorna:** se commette un errore durante la selezione manuale, faccia clic su **Aggiorna**. Il set viene così riportato allo stato definito dai Suoi filtri, annullando qualsiasi azione manuale di "Escludi" o "Includi".
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ekGLld7o3QbwkYFOEmsqTUrlioP8xJlXtA.png)

#### **5\. Sincronizzazione dinamica del catalogo**

I flussi di immagini seguono le stesse regole dei flussi di contenuto:

-   Il set di prodotti viene aggiornato dopo ogni sincronizzazione giornaliera del pool.

-   Ciò significa che, se aggiunge al Suo negozio un nuovo prodotto che corrisponde ai filtri impostati nel flusso, questo verrà **automaticamente** aggiunto alla coda di generazione il giorno successivo.

* * *

**⚠️ Promemoria:** controlli sempre il numero finale di prodotti prima di salvare il flusso, per assicurarsi di non aver accidentalmente selezionato l'intero negozio anziché una categoria specifica.

###
**Sezione: Editor dei prompt**

Il prompt è l'insieme finale di istruzioni che invia all'IA. Nel flusso di immagini, l'editor dei prompt utilizza la stessa logica avanzata del flusso di contenuto, consentendo di creare descrizioni visive di alta qualità su larga scala.

#### **1\. Il principio dell'universalità**

Poiché questo prompt verrà applicato a ogni singolo articolo del Suo flusso, deve essere **IL PIÙ UNIVERSALE POSSIBILE**.

-   Eviti di descrivere manualmente colori o texture specifici (ad es. non scriva "un abito di seta rosso").

-   Sfrutti invece gli **attributi dinamici** per garantire che l'IA identifichi con precisione le caratteristiche uniche di ciascun prodotto specifico.

#### **2\. Utilizzo degli attributi dinamici (trascinamento)**

A destra dell'editor troverà un elenco degli **attributi** disponibili (ad es. `Color`, `Material`, `Brand`, `Product Type`).

-   **Come funziona:** è sufficiente trascinare un attributo dall'elenco e rilasciarlo direttamente nel testo.

-   **Guida dettagliata:** può leggere di più sul funzionamento e sulle funzionalità dell'editor con trascinamento qui ....

-   **Risultato:** quando il flusso viene eseguito, il sistema sostituisce automaticamente l'attributo (ad es. **Colore**) con il valore effettivo di ciascuna scheda prodotto. In questo modo un abito blu viene generato blu e una giacca di pelle viene resa con una texture realistica della pelle.

#### **3\. Modelli e riutilizzabilità**

Per velocizzare il flusso di lavoro, utilizzi la funzione **Modelli** situata in fondo all'editor:

-   **Salva come modello:** una volta creato un prompt perfetto che funziona bene per una categoria specifica, lo salvi per un uso futuro.

-   **Carica:** importi rapidamente i modelli esistenti in nuovi flussi per mantenere la coerenza visiva in tutto il Suo negozio.

#### **4\. Attributi (se compilati)**

Passi alla scheda **Attributi (se compilati)** per vedere esattamente quali dati sono attualmente disponibili per il set di prodotti selezionato. Ciò aiuta a evitare l'uso di tag vuoti che potrebbero portare a risultati dell'IA incoerenti.

* * *

**Consiglio da esperti:** un prompt universale di alta qualità dovrebbe descrivere l'**ambientazione, l'illuminazione e l'atmosfera** definite dai Suoi preset, lasciando i **dettagli specifici del prodotto** agli attributi dinamici.

**⚠️ Passaggio finale per la scheda 3:** dopo aver finalizzato il prompt, faccia clic sul pulsante **Salva**. Questa azione collega i Suoi preset, la selezione dei prodotti e le istruzioni del prompt in un'unica automazione funzionante.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/9UcxVcuz2XFcQkCC4qSqfhHb7P0EZOtl3w.png)

## ****4\. Automazione (scheda 4)****

La scheda **Automazione** funge da "torre di controllo" del Suo flusso. Qui definisce il ritmo di creazione dei contenuti, gestisce le politiche di pubblicazione e avvia ufficialmente il processo di generazione.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FYJ_qkFMdxjFIhXpgfz3GkHZs7AhNpgpwA.png)

### **1\. Limiti di elaborazione giornalieri**

-   **Numero di immagini da elaborare al giorno**: questo campo determina esattamente quanti prodotti del set selezionato verranno elaborati dall'IA ogni 24 ore.

-   **Scopo**: Le consente di gestire il consumo di token e garantisce un'introduzione costante e gestibile dei nuovi contenuti visivi nel Suo negozio.

### **2\. Politica di automazione e sincronizzazione**

-   **Strategia di conferma manuale**: per mantenere un'elevata qualità e consentire una supervisione umana, **la sincronizzazione completamente automatizzata con il Suo negozio è attualmente disattivata**.

-   **Flusso di lavoro**: mentre la **generazione** delle immagini avviene automaticamente in base alla Sua pianificazione, la **sincronizzazione** effettiva (caricamento) di queste immagini nel Suo negozio online (Shopify, Magento, ecc.) avviene solo dopo che le ha esaminate e approvate nell'**Elenco batch**.

### **3\. Attivazione e gestione del flusso**

-   **Interruttore Flusso attivo**: situato nell'angolo in alto a destra, questo interruttore attiva o disattiva l'intera logica di automazione di questo flusso.

-   **La regola del salvataggio**: qualsiasi modifica dello stato **Flusso attivo**, sia che lo stia attivando per la prima volta sia che stia disattivando un flusso vecchio, **DEVE** essere confermata facendo clic sul pulsante **Salva**. Se non salva, l'interruttore tornerà allo stato precedente e le modifiche non avranno effetto.

### **4\. Attivatori di esecuzione**

Una volta attivato il flusso, ha due modi per avviare la generazione:

-   **Pianifica e chiudi**:

-   Questo pulsante pianifica l'esecuzione automatica del flusso.

-   **Tempistica**: la generazione non inizierà immediatamente; verrà avviata solo dopo la successiva **sincronizzazione giornaliera del pool di prodotti** (l'aggiornamento a livello di sistema del catalogo del Suo negozio).

-   **Esegui ora**:

-   Questo pulsante compare come opzione aggiuntiva una volta attivato il flusso.

-   **Tempistica**: facendo clic su **Esegui ora** si salta l'attesa del pool giornaliero e la generazione viene avviata **immediatamente** per il limite del giorno corrente.

-   _Nota_: un'esecuzione manuale viene conteggiata nella Sua quota giornaliera. L'esecuzione pianificata successiva avverrà il giorno seguente, dopo la sincronizzazione standard del pool.

### **5\. Logica di generazione ed efficienza**

-   **Principio della generazione singola**: per evitare costi duplicati e dati ridondanti, l'IA genera una nuova immagine per un prodotto specifico **una sola volta** per flusso.

-   Se per un prodotto è già stata generata correttamente un'immagine all'interno di questo flusso, il sistema lo salterà nei cicli successivi.

-   **Rigenerazioni**: se non è soddisfatto di un risultato specifico, può avviare manualmente una "Rigenerazione" dalla sezione **Elenco batch**.

### **6\. Elenco batch e disattivazione**

-   **Elenco batch**: faccia clic su questo pulsante per accedere al registro di produzione. Qui può monitorare lo stato dei Suoi "batch", visualizzare i risultati dell'IA ed eseguire la sincronizzazione finale con il Suo negozio.

-   **Disattivazione**: se il flusso non è più pertinente o deve sospendere la produzione, porti l'interruttore **Flusso attivo** su "OFF" e faccia clic su **Salva**. In questo modo si interrompe immediatamente la pianificazione di ulteriori generazioni.

**Promemoria finale**: si assicuri sempre che il **limite giornaliero** sia impostato correttamente prima di fare clic su **Salva**. Una volta attivato il flusso, il sistema inizierà a mettere in coda i prodotti da elaborare in base alle Sue impostazioni.

Ecco la guida completa alla sezione **Elenco batch** in inglese, che include tutti i dettagli tecnici relativi alla logica di sincronizzazione e all'interfaccia utente.

##
**Elenco batch**

L'**Elenco batch** è il Suo centro per il controllo qualità e la moderazione. Ogni esecuzione del flusso (automatica o manuale tramite il pulsante _Esegui ora_) crea una nuova voce batch nell'elenco a sinistra.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/LIJVpWk3sHHmcIRCOQIvCJACgNLRBBIHRw.png)

### **1\. Navigazione e monitoraggio**

-   **Barra laterale dei batch**: il pannello di sinistra mostra tutte le esecuzioni organizzate per data e per numero di prodotti elaborati (`Count`).

-   **Barra di avanzamento**: una scala a colori in alto a destra fornisce lo stato visivo del batch: verde per completato, giallo per in corso e grigio per in attesa.

-   **Aggiornamento automatico**: può attivare la funzione `Refresh every X s` per aggiornare automaticamente la pagina mentre l'IA sta elaborando.

### **2\. Lavorare con i risultati (Elenco completamenti immagini)**

La tabella principale a destra mostra i risultati per ciascun prodotto specifico:

-   **Miniatura**: la foto originale del prodotto utilizzata come base.

-   **SKU**: l'identificativo del prodotto con un link diretto alla relativa pagina nel pannello di amministrazione del Suo negozio.

-   **Risultati**: l'immagine generata. Passando il mouse sulla foto compaiono i pulsanti di azione rapida:

    -   **Visualizza (icona a forma di occhio)**: apre la finestra di ispezione dettagliata.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/PExqbyx61jYHouA1Q6gS-Quy1Ea-rWQ9Iw.png)

    -   **Scarica (icona a forma di freccia)**: salva il file direttamente sul Suo dispositivo.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/a8L2H8t07YmOsC9exAXCkS0ORMRCAR9ANA.png)

    -   **Sincronizza (icona del segno di spunta)**: invia istantaneamente questa specifica foto al Suo sito web.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/JnEq8veB5PUb88yklirTqpIJncbmCmtUNw.png)

###
**3\. Ispezione e analisi (vista del completamento)**

Facendo clic su **Visualizza** si apre una finestra per la verifica finale:

-   **Pannello di sinistra**: mostra il risultato finale di alta qualità.

-   **Pannello di destra**: contiene una colonna con tutti i dati di input. La prima immagine è sempre la foto originale del prodotto, seguita da un elenco scorrevole di tutti i preset utilizzati (riferimenti di modelli, sfondi, ecc.).

-   **Opzioni di completamento**: l'icona turchese a forma di "occhio" nella colonna `Actions` apre un pop-up con i metadati tecnici: il modello IA specifico, la risoluzione e il prompt finale completo con gli attributi dinamici già compilati.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/AgSQKU_4s6dTTRl2n8Uh7u8u__XcDx23FA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/fy3a6eQD7I0VTvO9a0bMe2FSSrBLMGe4_A.png)

###
**4\. Modifiche e rigenerazione**

Se non è soddisfatto di un risultato, utilizzi l'icona **Rigenera** (freccia circolare):

-   **Modifica**: può modificare il testo del prompt o aggiungere nuovi attributi tramite trascinamento specificamente per quello SKU.

-   **Nessun limite**: può rigenerare un'immagine tutte le volte necessarie fino a ottenere il risultato desiderato.

-   **⚠️ Importante**: una nuova generazione **elimina definitivamente** la versione precedente dell'immagine.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/CEgHxH_y3eClyY2jxcXg1pAUpocdbFQwbQ.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ipoM6y0fgh9G7Rpm1mmCt7mWXvyDn2JikQ.png)

###
**5\. Sincronizzazione con il negozio**

Poiché l'automazione completa è attualmente disattivata per garantire la qualità, è Lei a decidere quando pubblicare i contenuti:

-   **Singolarmente**: faccia clic sul pulsante con il segno di spunta direttamente sull'immagine nella colonna `Results`.

-   **Stato**: fino alla pubblicazione, la colonna `Synchronized At` mostrerà lo stato `Wait for result confirmation`.

-   **⚠️ Avviso**: la sincronizzazione è **irreversibile -** non può essere annullata una volta avviata.

##
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c9uHBa_kSFHkR_YXg2rBCu-uOXq4xMWgVw.png)

###
**Buona fortuna e buona creazione!**

Congratulazioni! Ora dispone di tutti gli strumenti per padroneggiare il **flusso di immagini di Fozzels**. Questo è il Suo spazio per trasformare le idee in contenuti visivi di alta qualità in pochi clic.

##
**Guardi le istruzioni dettagliate nel video**
