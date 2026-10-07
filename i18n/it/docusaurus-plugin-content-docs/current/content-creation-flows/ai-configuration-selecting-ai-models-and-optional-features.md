---
id: '103000367978'
title: "4.2.1.  Configurazione AI. Selezione dei modelli AI e delle funzionalità opzionali."
sidebar_position: 6
slug: >-
  /content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features
description: >-
  Il passaggio di configurazione AI (Step 2 nella modifica del Flow) è la fase
  più critica per definire le prestazioni e il profilo di costo di un Content
  Flow. Determina
keywords:
- flusso di contenuti
---

Il passaggio di configurazione AI (Step 2 nella modifica del Flow) è la fase più critica per definire le prestazioni e il profilo di costo di un Content Flow. Determina la scelta del motore di AI generativa, le sue capacità specializzate e i suoi vincoli operativi. In questa fase gli utenti devono prendere decisioni strategiche, bilanciando qualità dell'output, complessità del compito (ad es. requisiti multimodali) e ottimizzazione dei costi dei token.

1.  ### Il motore AI principale: fornitori e livelli di modelli

Fozzels si integra con diversi fornitori di AI leader del settore (ad es. OpenAI/ChatGPT, Google/Gemini, Anthropic, xAI), ciascuno dei quali offre un portafoglio di modelli.

1.1. Criteri di selezione del modello

La scelta del modello giusto richiede una valutazione strategica basata sul compito di contenuto:

**Modelli economici**. Scopo: compiti ad alto volume e bassa complessità (meta title, brevi traduzioni, normalizzazione dei dati). Caratteristiche principali: elaborazione più rapida, finestra di contesto più piccola. Profilo di costo: costo dei token di input/output più basso.

**Modelli di alta qualità**. Scopo: generazione complessa e creativa, sintesi approfondite, mantenimento di un tono di marca ricco di sfumature. Caratteristiche principali: coerenza logica superiore, ampia finestra di contesto. Profilo di costo: costo dei token di input/output più elevato.

**Modelli multimodali**. Scopo: compiti che richiedono un'analisi visiva insieme al testo (ad es. descrivere la texture o lo stile di un'immagine). Caratteristiche principali: la capacità di analisi delle immagini è imprescindibile. Profilo di costo: costo più elevato dovuto alla tokenizzazione delle immagini.

2.  ### Strumenti di arricchimento AI e ricerca web

Gli strumenti di arricchimento AI sono funzionalità opzionali utilizzate per migliorare l'accesso del modello a dati esterni, non relativi al prodotto.

Enable Web Search: l'attivazione di questa funzionalità consente al modello di interrogare informazioni in tempo reale e contesto esterno dall'internet pubblico durante la generazione dei contenuti.

Valore strategico: la ricerca web è indispensabile per i contenuti che devono fare riferimento a tendenze di mercato attuali, specifici standard di produzione o fatti esterni non contenuti negli attributi del catalogo prodotti.

Implicazioni sui costi: utilizzi questa funzionalità con criterio, poiché generalmente comporta un costo aggiuntivo per richiesta, indipendente dal normale utilizzo dei token.

3.  ### Capacità specializzate dei Flow

Per i compiti creativi che vanno oltre l'analisi standard di testo e immagini, Fozzels richiede tipi di flusso dedicati e modelli AI specifici, a causa dell'elevata potenza di calcolo necessaria.

**Image Flow (generazione di immagini).**
Scopo: generare nuove immagini di prodotto (da zero).
Requisiti del modello: modelli specializzati di generazione di immagini (ad es. GPT Image 1, Gemini 2.0 Flash Preview Image Generation).
Limitazione dei fornitori: limitato a fornitori selezionati (ad es. OpenAI, Google).

**Video Flow (generazione di video)**.
Scopo: dedicato alla generazione di brevi contenuti video ad alta fedeltà (ad es. clip di 8 secondi a 720p).
Requisito del modello: modelli di generazione video di fascia alta (ad es. Gemini Veo 3).
Limitazione dei fornitori: attualmente limitato a Google | Gemini. Struttura dei costi: i modelli di generazione video adottano spesso una struttura di prezzo specifica (ad es. prezzo per secondo di video prodotto) a causa dell'elevata richiesta di calcolo.

4.  ### Ottimizzazione delle immagini e controllo dei costi

Per qualsiasi flusso che utilizza capacità multimodali, una gestione efficiente delle immagini di prodotto è essenziale sia per la stabilità della generazione sia per la gestione dei costi dei token.

4.1. Input delle immagini e logica di fallback

Numero di immagini: gli utenti devono definire esplicitamente il numero di immagini di prodotto che l'AI deve analizzare (ad es. 1, 2 o 3). Aumentare il numero di immagini aumenta direttamente il numero di token di input e, di conseguenza, il costo.

Fallback/Salta: se a un prodotto del flusso mancano i dati immagine richiesti, gli utenti devono definire un'azione alternativa:
Fallback a un modello solo testo: il processo prosegue utilizzando un prompt solo testo, evitando l'errore ma mantenendo il costo di generazione.
Salta la generazione dei contenuti: il prodotto viene ignorato, risparmiando tutti i costi dei token associati a quell'articolo.

### 4.2. Image Resize (meccanismo di stabilità)

È una **buona pratica** attivare Image Resize per tutti i flussi multimodali. Questa funzionalità rappresenta un meccanismo fondamentale di stabilità e di risparmio:

Prevenzione degli errori: i modelli generativi hanno limiti rigidi sulle dimensioni dei file (ad es. >2MB) e sulle dimensioni in pixel (ad es. >2048 pixel). Il ridimensionamento adatta automaticamente questi file a limiti accettabili.

Efficienza dei costi: garantendo che i file rispettino i limiti di dimensione, si prevengono gli errori di generazione, assicurando che i costi dei token vengano sostenuti solo per output di contenuti riusciti ed eliminando spese inutili per operazioni che altrimenti fallirebbero.
