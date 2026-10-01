---
id: '103000370066'
title: "4.6.1 Creazione di un nuovo flusso video in Fozzels"
sidebar_position: 16
slug: /content-creation-flows/creating-a-new-video-flow-in-fozzels
description: >-
  La funzione Flusso video è un flusso di contenuti specializzato dedicato alla
  generazione di brevi risorse video ad alta fedeltà per la presentazione dei
  prodotti. La creazione di un flusso v
---

La funzione Flusso video è un flusso di contenuti specializzato dedicato alla generazione di brevi risorse video ad alta fedeltà per la presentazione dei prodotti. La creazione di un flusso video prevede tre fasi chiave: configurazione di base (selezione del modello), selezione delle risorse (prodotto e immagine) e una precisa ingegnerizzazione del prompt. A causa dell'elevato costo computazionale della generazione video, l'accuratezza della configurazione è fondamentale per un'esecuzione riuscita e per il controllo dei costi.

1.  Avvio del flusso video

1.1 Accesso e selezione del negozio Per iniziare, vada alla scheda "Flussi video" nell'intestazione principale di Fozzels. Nella pagina Flussi video, deve prima selezionare il negozio dal menu a discesa "Scegli negozio", in modo che il video generato sia collegato all'istanza corretta del catalogo prodotti. Clicchi sul pulsante "Nuovo flusso video" per procedere.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/dhsYmY2Ex4slpTZPdudcNOVCe9nEhoPHyg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/l9D27YTXULoQgwNoai2p9a3wY9wBuD0rxA.png)

1.2 Configurazione di base (Passo 1) Verrà reindirizzato alla schermata di configurazione, in cui definisce l'identità del flusso e il motore principale.

1.2.1 **Assegni un nome** al flusso: inserisca un nome chiaro e descrittivo nel campo "**Nome**" per identificarlo facilmente nell'elenco dei flussi.

1.2.2 **Selezioni** il modello di IA: per la generazione video il sistema utilizza attualmente per impostazione predefinita il provider Google | Gemini. Deve selezionare il modello specializzato per la generazione video, "Gemini Veo 3".

Questo modello è progettato per produrre video di alta qualità a 720p con una durata massima di 8 secondi. Supporta l'input di immagini, essenziale per ancorare il video a una specifica risorsa di prodotto.

1.2.3 **Definisca** il tipo di flusso: nella sezione "**Tipo**", scelga il tipo di output video richiesto. Selezioni "Generale | Video singolo".

Questa impostazione conferma che il sistema genererà risorse visive e presentazioni di prodotto, contrassegnando il blocco con un segno di spunta verde.

1.2.4 **Clicchi** sul pulsante "**Invia**" per salvare queste impostazioni di base e passare alla fase successiva.

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ocwd1m8bDjLUbvNWQQ15jP7-oy92bMKZxw.png)

2.  Configurazione delle risorse e ingegnerizzazione del prompt

Dopo la configurazione di base, verrà indirizzato alla pagina di definizione delle risorse e del prompt.

2.1 Selezione del prodotto e dell'immagine Selezione del prodotto:
Sul lato sinistro dello schermo, **selezioni il prodotto specifico** dall'elenco del catalogo per il quale verrà generato il video.

Selezione dell'immagine: il blocco centrale mostra il prodotto selezionato e la relativa galleria di immagini. Deve **scegliere** l'unica immagine più adatta dalla galleria, poiché questo riferimento visivo guiderà il processo di generazione video dell'IA.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/y1tWTQrZy2gjdG9yduMpGv4A3xQevUN6-g.png)

2.2 Ingegnerizzazione del prompt (il passo cruciale) Il prompt è l'unico input che controlla il contenuto, lo stile e la narrazione del video.

Requisito di input: il campo "Prompt" non può essere lasciato vuoto. Deve contenere istruzioni dettagliate e descrittive che delineino il risultato video desiderato (ad es. ambientazione, atmosfera, azione, movimenti della telecamera).
**Legga** la sezione successiva, **[Consigli per creare un prompt efficace + esempi](/content-creation-flows/tips-for-creating-an-effective-prompt-examples/)**, prima di scrivere il prompt, per garantire una qualità video ottimale.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ZGiO6GR7CNBTRPTFYBz1RRmNNRTwD_WW6A.png)
Gestione dei modelli di prompt: per favorire coerenza ed efficienza, **utilizzi** il pulsante "Salva" sopra il campo del prompt per salvare la Sua istruzione come modello riutilizzabile. In questo modo risparmierà tempo nella creazione dei flussi successivi.

3.  Attivazione, esecuzione e gestione

Dopo aver definito il prodotto, l'immagine e il prompt, il flusso è pronto per l'esecuzione.

3.1 Attivazione e finalizzazione del flusso Attivi il flusso:
3.1.1 Per avviare immediatamente il processo di generazione, **spunti** la casella "**Flusso attivo**" accanto al nome del flusso. Se non viene spuntata, il flusso rimane in modalità bozza.
3.1.2 **Clicchi** sul pulsante principale "**Salva**" in fondo alla pagina. Il sistema salva tutte le configurazioni e La reindirizza alla pagina **"Elenco batch"**, che funge da monitor dell'esecuzione.

3.2 Avvio della generazione video dall'elenco batch Nella pagina Elenco batch, individui il prodotto appena configurato.
Conferma manuale: per inviare la richiesta all'IA, deve **spostare manualmente l'interruttore** nella colonna "**Confermato**" sulla posizione "on".
Avvio della generazione: infine, **clicchi** sull'icona accanto all'interruttore. Solo questa azione invia la richiesta confermata al motore di IA per avviare il rendering del video. Il sistema monitorerà quindi lo stato della generazione.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/4M5pPg3JaDfvqdgAQ_109lMCWqpJpbt8gQ.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/1NwPEnPYEC3N6fbBX63dOizDPR3J6G4EVA.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/LJon-h82hu4do0c1tI3oVznHeXvSifWXjg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/YwJ6UJ7VzaDPedpbnlZBIqzyNhO1yIuz6g.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/Fb0QFQE1i1hJoK8U4rpyysLV_UwftKGWYQ.png)

3.3 Accesso al video generato Al termine, il file video finale è disponibile per la visualizzazione e il download direttamente dall'elenco batch. La risorsa video viene inoltre archiviata automaticamente nel Suo archivio multimediale personale, accessibile in: user/settings/generated media.
