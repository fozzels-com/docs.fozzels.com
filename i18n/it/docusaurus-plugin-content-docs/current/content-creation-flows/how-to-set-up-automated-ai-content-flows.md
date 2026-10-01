---
id: '103000408983'
title: "4.1.2.a Come configurare flussi di contenuti IA automatizzati"
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  I flussi di contenuti automatizzati in Fozzels Le consentono di generare e
  sincronizzare automaticamente i contenuti dei prodotti in background, senza
  dover avvia
---

I flussi di contenuti automatizzati in Fozzels Le consentono di generare e sincronizzare automaticamente i contenuti dei prodotti in background, senza dover avviare manualmente le attività ogni giorno.

Questa guida illustra tutto ciò che deve sapere per configurare, testare ed eseguire i flussi automatizzati in modo sicuro ed efficiente.

## Passo 1: checklist prima dell'avvio

Prima di attivare l'automazione, Le consigliamo vivamente di completare questi tre controlli per evitare errori:

1.  **Verifichi la selezione dei prodotti:** ricontrolli i filtri nella configurazione del flusso per assicurarsi che il flusso riguardi esattamente l'insieme di prodotti che desidera elaborare.

2.  **Testi il prompt:** esegua una generazione di prova con **Salva e anteprima** per confermare che l'output soddisfi i Suoi standard di qualità.

3.  **Eviti la ricorsione del prompt:** si assicuri che il prompt non faccia riferimento proprio all'attributo in cui sta scrivendo (ad es. utilizzare `product_description` come input per generare un nuovo `product_description`). Ciò evita cicli di generazione ricorsivi.

## Passo 2: configuri le impostazioni di automazione

Vada alla scheda **Automazione** nelle impostazioni del flusso e configuri i seguenti parametri:

-   **Limite di elaborazione giornaliero:** imposti quanti prodotti devono essere elaborati ogni giorno (fino a **500 prodotti per flusso attivo al giorno**). Questo limite garantisce un'esecuzione coerente e affidabile in ogni ciclo di 24 ore.

-   **Modalità completamente automatica (facoltativa):**

-   **Attivata:** i contenuti generati vengono automaticamente approvati e sincronizzati con il Suo webshop (ad eccezione degli elementi segnalati da parole sospette o da controlli di convalida).

-   **Disattivata:** i contenuti vengono generati automaticamente, ma restano in stato di attesa per la revisione e l'approvazione manuali prima della sincronizzazione.

-   **Crea nuovi contenuti quando i valori degli attributi cambiano (facoltativo):** se attivata, Fozzels rigenera automaticamente i contenuti ogni volta che un attributo utilizzato nel Suo prompt viene aggiornato nel Suo negozio. In questo modo i contenuti restano sempre aggiornati senza alcun lavoro manuale.

## Passo 3: avvio del flusso

Una volta configurate le impostazioni, attivi il flusso e scelga una delle due opzioni di avvio:

### Opzione A: Pianifica e chiudi (consigliata per i batch in background)

Clicchi su **Pianifica e chiudi**. Il flusso passerà allo stato pianificato e inizierà automaticamente l'elaborazione dopo il successivo aggiornamento notturno programmato del catalogo, proseguendo ogni giorno finché tutti i prodotti corrispondenti non saranno stati elaborati.

### Opzione B: Esegui ora (avvio immediato)

Clicchi su **Esegui ora**. Fozzels elaborerà immediatamente i primi **10 prodotti** per un'anteprima istantanea. Dopo questo batch iniziale, il flusso prosegue secondo la pianificazione giornaliera automatizzata in base al limite giornaliero configurato.

## Regole chiave e best practice

-   **Stato attivo obbligatorio:** affinché un flusso pianificato venga eseguito ogni giorno, deve rimanere **Attivo**. La disattivazione del flusso sospende tutte le esecuzioni pianificate finché non viene riattivato.

-   **Modifica dei flussi attivi:** può modificare in qualsiasi momento le regole del prompt o le impostazioni di un flusso pianificato. Gli aggiornamenti si applicheranno a tutte le generazioni future, mentre i contenuti generati in precedenza restano invariati, a meno che non vengano rigenerati manualmente.

-   **Selezione dinamica dei prodotti:** i flussi pianificati attivi valutano automaticamente il catalogo del Suo negozio dopo ogni sincronizzazione notturna. Se nuovi prodotti corrispondono ai filtri del flusso (ad es. 20 nuovi articoli aggiunti a una categoria), vengono automaticamente inclusi nel flusso per l'elaborazione.

## Articoli di assistenza correlati

-   **Parole sospette e controllo qualità:** _[4.7.4 Parole e frasi sospette: controllo avanzato della qualità dei contenuti](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)_

-   **Evitare gli avvisi di ricorsione:** _[3.5 Avviso "Ricorsione rilevata" durante la creazione di un flusso](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)_

-   **Prevenire la sovrapposizione dei flussi:** _[4.4.1 Funzione Impedisci la generazione di contenuti sovrapposti](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)_

-   **Regole di formattazione HTML:** _[4.7.3 Tag HTML consentiti per la generazione di testi con l'IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)_
