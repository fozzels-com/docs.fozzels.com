---
id: '103000410112'
title: >-
  4.3.2.b Generazione di testi alternativi per le immagini NextChapter: aspetti
  tecnici e configurazione passo dopo passo
sidebar_position: 10
slug: >-
  /content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s
description: >-
  Poiché conosce già i meccanismi di base per la configurazione dei flussi di
  contenuti (flussi di contenuti prodotto) in Fozzels, questa istruzione si
  concentra…
---

Poiché conosce già i meccanismi di base per la configurazione dei flussi di contenuti (flussi di contenuti prodotto) in Fozzels, questa istruzione si concentra esclusivamente sulle specificità dell'architettura NextChapter: l'utilizzo dell'attributo di sistema **product\_media\_gallery** e l'ottimizzazione dei costi in token durante l'elaborazione in batch delle gallerie multimediali.

## Passo 1. Configurazione dei permessi di scrittura per la galleria multimediale (condizione obbligatoria)

A differenza dei campi di testo standard (ad esempio la descrizione o il nome del prodotto), in NextChapter i testi alternativi si trovano all'interno della galleria di immagini e vengono scritti direttamente nell'attributo `product_media_gallery`. Per impostazione predefinita, Fozzels considera questo attributo di sola lettura e lo utilizza come indicatore per filtrare i prodotti in base alla presenza di foto.
Per concedere al sistema il permesso di scrivere e aggiornare i dati in questo campo:

1.  Vada al menu principale: **Integrazioni** → selezioni la Sua istanza **NextChapter** attiva.
2.  Apra la **Scheda 3: Attributi.**
3.  Nel campo di ricerca, inserisca `media`. Trovi la riga con il codice `product_media_gallery` (Media Gallery) e clicchi sul pulsante turchese **\[Modifica attributo\]**.
4.  Nella finestra modale, nella sezione Trasforma dati, trovi l'opzione **Modificabile** e spunti la casella (**\[v\] Modificabile**).
5.  Clicchi sul pulsante blu **Salva** nell'angolo in basso a destra.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/DgdusqsKuR07n_6ZVkUycVCUVVRc9SLNEw.png)![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/F371_zOBWTktWVS7poYzGt-L5es5KLOkXw.png)

## Passo 2. Inizializzazione del flusso e mappatura degli attributi

1.  Vada alla sezione **Flussi di contenuti** e clicchi sul pulsante **Crea flusso** (oppure selezioni i prodotti desiderati direttamente nel catalogo e clicchi su **Azioni → Crea flusso**).

2.  **Nella Scheda 1: Nuovo flusso**, configuri i parametri dell'ambiente:

    -   **Negozio / Integrazione:** selezioni dall'elenco a discesa la Sua istanza NextChapter, le impostazioni del sito e la Store View richiesta.
    -   **Nome:** specifichi un nome tecnico chiaro per il flusso.
    -   **Tipo di entità:** il valore Prodotto verrà impostato automaticamente.
3.  **Attributo di destinazione:** clicchi sul campo di selezione dell'attributo (`Attribute*`), inserisca `media` e selezioni `Media Gallery`. Ciò consentirà a Fozzels di trasferire in modo sicuro le stringhe generate dall'IA direttamente nello schema del database della galleria NextChapter.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/yEYZO7DIJN90tk-_rv6kZaE6AOCY_rSOWg.png)

## Passo 3. Selezione del modello Vision e della modalità di scansione (Delta vs. Sovrascrittura completa)

Nella **Scheda 2: Configurazione IA**, selezioni il provider e il modello (ad esempio versioni di GPT o Gemini con supporto Vision per l'analisi delle immagini), quindi definisca la modalità di interazione con la Sua vetrina NextChapter:

-   **Modalità Delta (casella "Forza rigenerazione testi ALT" DISATTIVATA):** scenario predefinito. Il processo in background esegue la scansione del catalogo NextChapter e invia richieste all'IA solo per le immagini il cui testo alternativo è attualmente vuoto. In questo modo vengono preservate le Sue impostazioni SEO manuali e si risparmiano crediti API.
-   **Modalità Sovrascrittura completa (casella "Forza rigenerazione testi ALT" ATTIVATA):** scenario di riscrittura completa. Il motore ignora completamente i metadati attuali della vetrina, cancella i vecchi testi alternativi nel campione selezionato e li sostituisce con nuove stringhe generate dall'IA.

> **Raccomandazione tecnica:** lasci attiva l'opzione **Abilita ridimensionamento immagini**. Se il file immagine in NextChapter supera i 2 MB o una risoluzione di 2048px, Fozzels lo ridurrà automaticamente ai requisiti standard dei modelli Vision. Ciò proteggerà il Suo flusso da errori di generazione (generazioni non riuscite) e ridurrà il consumo di token.

![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/MSso5mlNSv6s9RgpZywIS_fORd61TfNESw.png)

## Passo 4. Composizione del prompt (Prompt Engineering)

**Nella Scheda 3: Selezione flusso e prompt** vengono formulate le istruzioni per il modello di IA. Poiché il processo opera in modalità di elaborazione a file singolo (1 immagine = 1 generazione), il Suo prompt deve combinare i dettagli visivi con il contesto testuale del prodotto.

1.  Nel campo **Prompt**, scriva le regole tecniche di base (ad esempio un limite di lunghezza, lo standard è fino a 125 caratteri per gli screen reader, e il divieto di frasi introduttive come "immagine...").
2.  Utilizzi il pannello laterale **Attributi** a destra per trascinare i token dinamici di NextChapter direttamente nel corpo del prompt (ad esempio `{name}`, `{color}`, `{material}`, `{brand}`).

### Modelli di prompt:

#### **Opzione 1:** per l'e-commerce (abbigliamento e calzature)

> "Scrivi un testo alternativo SEO conciso e naturale per il tag di accessibilità di un negozio online. Descrivi i dettagli visivi, lo stile e il taglio del prodotto nella foto. Integra in modo naturale questi attributi se sono visibili: {color} {name} di {brand}, materiale: {material}. Lunghezza del testo: fino a 125 caratteri. Evita l'eccesso di parole chiave e non iniziare con frasi come 'foto...' o 'immagine...'. Descrivi solo ciò che è effettivamente presente nell'inquadratura."

#### **Opzione 2:** minimalista (dettagli del prodotto)

> "Genera un tag Alt pulito e professionale per uno screen reader. Concentrati esclusivamente sul design, sulla composizione e sui dettagli visivi chiari del prodotto. Usa i metadati per la precisione: {brand} {name} di colore {color}. La descrizione deve essere realistica, fattuale e lunga fino a 120 caratteri. Niente frasi di marketing e niente 'foto...' o 'immagine...'. Restituisci solo la stringa preparata."

## Passo 5. Limiti di elaborazione e struttura dell'elenco batch (Batch List)

**Nella Scheda 4: Automazione**, il campo "**Numero di prodotti per cui creare contenuti al giorno**" calcola i limiti di elaborazione in base alle entità padre (Prodotti), non ai singoli file immagine.
Poiché Fozzels analizza ogni elemento multimediale nella galleria del prodotto: se imposta un limite di **10 prodotti**, ciascuno con **5 immagini**, il sistema eseguirà **50 generazioni Vision a pagamento separate.**
Tutti i risultati generati saranno comodamente raggruppati nell'**Elenco batch** per SKU del prodotto, consentendoLe di esaminare, modificare o approvare in blocco i nuovi testi alternativi prima di caricarli sul sito.
