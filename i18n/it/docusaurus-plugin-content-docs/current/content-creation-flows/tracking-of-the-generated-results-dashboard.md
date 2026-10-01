---
id: '103000369091'
title: '4.7.1 Monitoraggio dei risultati generati. Dashboard.'
sidebar_position: 18
slug: /content-creation-flows/tracking-of-the-generated-results-dashboard
description: >-
  La Dashboard (o Elenco batch totale giornaliero) funge da centro di comando,
  fornendo una panoramica completa di tutti i processi di generazione e sincronizzazione
  dei contenuti
---

La Dashboard (o Elenco batch totale giornaliero) funge da centro di comando, fornendo una panoramica completa di tutti i processi di generazione e sincronizzazione dei contenuti. Questa interfaccia Le consente di monitorare in modo proattivo lo stato, diagnosticare gli errori e gestire in modo efficiente tutti i dati generati.

1\. Panoramica della Dashboard

La vista principale è una tabella di dati raggruppata per data di generazione dei contenuti.

1.1 Metriche chiave

La tabella principale mostra sei metriche chiave che aiutano a monitorare lo stato dei contenuti per un giorno specifico:

- **Data**: la data in cui il contenuto è stato generato.
- **Numero prodotti**: il numero totale di prodotti pianificati per la generazione di contenuti.
- **Numero completamenti**: il numero di unità di contenuto generate correttamente.
- **Numero sincronizzati**: il numero di unità di contenuto sincronizzate correttamente.
- **Numero avvisi**: il numero di unità di contenuto con osservazioni che potrebbero richiedere l'attenzione dell'utente.
- **Numero non riusciti**: il numero di unità di contenuto la cui generazione o sincronizzazione non è riuscita a causa di errori critici.

Gli utenti possono fare clic sulla data o sul Numero completamenti per accedere a una vista dettagliata di tutti i completamenti di quel giorno specifico.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/3eVmE5L69-qrrXE1wrp9l5KjD88-GmSH0A.png)

1.2. Vista dettagliata e configurazione della visualizzazione

Facendo clic su una data si apre una vista tabellare dettagliata contenente informazioni specifiche su ciascuna unità di contenuto.

1.2.1. Colonne obbligatorie

La tabella dettagliata comprende nove colonne obbligatorie: Flusso, SKU, Confermato, Miniatura, Prompt, Creato il, Attributo di destinazione, Eseguito il e Sincronizzato il.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/yOUsE1jBYf6AFN1hwszHua430j9ysDetdQ.png)

1.2.2. Strumenti di configurazione della visualizzazione

Gli strumenti sopra la tabella Le consentono di personalizzare la visualizzazione dei dati per una maggiore efficienza:

**Mostra solo con errori.** Questo interruttore filtra rapidamente la tabella per mostrare solo i record in cui si sono verificati problemi di generazione o sincronizzazione.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/j--J5uJGSoiU6L54C7ykpw09czX8hQ86Cg.png)

**Visibilità delle colonne.** Questo menu a discesa consente all'utente di nascondere o mostrare colonne specifiche nella tabella, concentrandosi sulle informazioni pertinenti.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/a2xTbvhRdJxaIqyUO1tJK3-K0FSstAq5tg.png)

**Paginazione.** L'opzione "Mostra \[numero\] voci" consente di personalizzare il numero di righe visualizzate per pagina (5, 10, 25, 50 o 100).
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/aPLUy45_b4zLJDCLFCuSfM-OCwWerXDo8g.png)

**Filtro intervallo di date.** Consente di selezionare una data specifica o un intervallo di date per visualizzare i risultati.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qpq1evm1oh-KTj5jr18RC3XOrCrg-vsDYg.png)

1.2.3. Filtri delle colonne

Ogni colonna integra uno strumento di filtro per una ricerca e un ordinamento rapidi:

- **Flusso**: filtra i prodotti in base a uno o più flussi selezionati (selezione da un elenco).
- **SKU**: utilizzato per cercare un prodotto specifico tramite il suo SKU (ricerca testuale).
- **Miniatura**: filtra i prodotti in base alla presenza di un'immagine ("Immagine mancante" o "Immagine presente") (interruttore/selezione).
- **Colonne data**: le colonne data (Creato il, Eseguito il, Sincronizzato il) dispongono dei campi "Da" e "A" per selezionare un intervallo di date.

1.3. Dettagli delle colonne e interazione

Questa sezione descrive le interazioni con i singoli elementi, che costituiscono un'alternativa alle azioni di massa per un controllo granulare.

SKU: mostra lo SKU del prodotto, che è un link cliccabile alla pagina del prodotto all'interno di Fozzels. Include inoltre un'icona che rimanda alla pagina del prodotto nel negozio integrato.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/A_jL3Ul08ZPx8MakhmS7P3tNfAeYmtyhtw.png)

Confermato: indica lo stato in cui il contenuto è stato approvato ed è pronto per la sincronizzazione.

Attributo di destinazione: facendo clic sulla cella si apre la finestra "Modifica risultato del completamento", che consente di rivedere e modificare il contenuto.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/m_jrPUwivZj3FjRSdeYeWZAvFYUuyCBAGw.png)

Prompt: facendo clic si apre un pop-up per visualizzare e copiare il testo completo del prompt.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/pEEWkzMEzEfqU5WuU7sFLmT9fvZbxMV-5g.png)

Rigenerazione del contenuto: il pulsante "Rigenera" all'interno della finestra "Modifica risultato del completamento" viene utilizzato per avviare la rigenerazione del contenuto.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/c5ZO3vrJJlYMqytY7IAluozmh2QAXngM_Q.png)

1.4. Azioni di massa e controllo operativo

La Dashboard offre funzionalità solide per gestire i contenuti in modo efficiente tramite le azioni di massa, risolvendo il problema delle noiose conferme individuali.

1.4.1. Esecuzione delle azioni di massa

Meccanismo di selezione: gli utenti selezionano gli elementi tramite le caselle di controllo o la funzione Seleziona tutto in questa pagina.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/cLqudNyTCBxzEB1wUw_lB446fY5cRD45Aw.png)

Azioni disponibili: il menu Azioni offre le seguenti funzioni per l'elaborazione in batch:
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/HW2UYiSK33CeIRz6osXy6htBVLzkTpk0pA.png)

- **Conferma tutto, salva e sincronizza**: approva e avvia la sincronizzazione del contenuto selezionato.
- **Rigenera, salva e sincronizza**: avvia la rigenerazione del contenuto per i prodotti selezionati e la loro successiva sincronizzazione.

1.4.2. Funzionalità "Mostra selezionati"

Spazio di lavoro mirato: la funzione "Mostra selezionati" isola gli elementi selezionati in una tabella separata, per uno spazio di lavoro mirato.

Mantenimento di tutte le funzionalità: in questa modalità l'utente mantiene tutte le funzioni della tabella standard: filtri, visualizzazione dei dettagli ed esecuzione di azioni di massa sul sottoinsieme di dati selezionato.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/f7zwjwWHrNA6OT8wJVRrxQ46WMuqPx1J7A.png)

1.4.3. Misure di sicurezza operative

È implementato un sistema di controllo a più livelli per garantire la precisione ed evitare spese involontarie:

Conferma obbligatoria: prima di eseguire qualsiasi azione di massa che richiede molte risorse ("**Conferma e sincronizza**", "**Rigenera e sincronizza**") viene visualizzato un pop-up di avviso.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/0ubsrmale7wTjSetyZBAJCqZYw3CK5u0iQ.png)

![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/sPmeRKZIE_-ybW-dwpbBS3bSEm0XtG69xQ.png)

Controllo della logica dei flussi: questi pop-up includono una nota sul comportamento di sincronizzazione previsto:

Il contenuto dei flussi completamente automatizzati verrà approvato automaticamente.
Il contenuto dei flussi standard verrà solo rigenerato e richiederà una successiva approvazione manuale.

Verifica delle risorse: il sistema verifica lo stato prima di avviare qualsiasi operazione: la generazione non verrà avviata se il flusso è inattivo e la sincronizzazione non verrà eseguita se l'integrazione di destinazione è inattiva.

1.5. Diagnostica e avvisi (risoluzione dei problemi)

La Dashboard fornisce messaggi e strumenti chiari per la diagnostica:

Dettagli degli errori (tooltip): in caso di errori di sincronizzazione o di generazione, sono disponibili tooltip che forniscono il messaggio dettagliato con la causa dell'errore.
"Il completamento sembra sospetto": un avviso che indica un contenuto innaturale (risposte simili a quelle di un bot, HTML o Markdown). Questo contenuto non verrà sincronizzato e richiede l'intervento dell'utente.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/NSPyqq1WcPjA-YYLdrczhDUakvL55U2vIQ.png)
"Rilevata doppia codifica delle entità HTML": questo avviso compare quando il testo è stato codificato più di una volta, il che può causare una visualizzazione errata del testo.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/UGH7_knyB9J6V0GXvznxuh1latc_mLlX-Q.png)
"Il risultato del completamento del prodotto è vuoto. Provi a rigenerare il contenuto." Il risultato è vuoto.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/4w2KbQmr8MEpBIgJ6373dwywTEYwFu6TYA.png)

"Il prodotto è stato eliminato nell'integrazione": indica che il prodotto non esiste più nel negozio integrato.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/nO0NOjYhJ94dqp7jQPD8tvUJ-jEil4tHcA.png)
"La regola è disattivata": indica che il contenuto è stato generato da un flusso che non è più attivo.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qAHiFoO27TOf4TPKQ9pBfsyriEs7rLXnVg.png)
