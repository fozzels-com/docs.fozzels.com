---
id: '103000399446'
title: "Release 6.1-6.2: scalabilità e maggiore precisione dei dati"
sidebar_position: 10
slug: /fozzels-releases-updates/release-6-1-6-2-scalability-enhanced-data-precision
description: >-
  Questo aggiornamento si concentra sull'ottimizzazione delle prestazioni della
  piattaforma per grandi volumi di dati e sull'ampliamento delle capacità di
  raccolta dei dati, garantendoLe ogni dettaglio necessario
---

Questo aggiornamento si concentra sull'ottimizzazione delle prestazioni della piattaforma per grandi volumi di dati e sull'ampliamento delle capacità di raccolta dei dati, garantendoLe ogni dettaglio necessario per generare contenuti di prodotto di alta qualità.

### Importazioni di prodotti scalabili (Product Pull)

Fozzels diventa ancora più efficiente per i progetti e-commerce su larga scala. Abbiamo migliorato la nostra architettura di importazione per garantire aggiornamenti dei dati senza interruzioni, indipendentemente dalle dimensioni del catalogo.

-   **Novità:** abbiamo introdotto un **meccanismo temporale adattivo** per ottimizzare l'elaborazione di grandi flussi di dati.

-   **Il risultato:** anche se il Suo catalogo contiene **centinaia di migliaia di articoli**, la sincronizzazione rimane stabile, flessibile e coerente, senza interruzioni del processo.

### WooCommerce: meta field personalizzati e sincronizzazione affidabile

Abbiamo dato agli utenti WooCommerce la flessibilità di scegliere esattamente con quali dati lavorare all'interno di Fozzels.

-   **Meta field selettivi:** ora può sincronizzare specifici **meta field personalizzati** necessari per la generazione dei Suoi contenuti. Basta inserire i codici dei campi o i prefissi dei gruppi durante la configurazione e il sistema recupererà solo le informazioni necessarie.

-   **Avvio senza intoppi:** abbiamo migliorato la logica di identificazione dei prodotti. Anche se il Suo sito WordPress utilizza ID interni anziché SKU standard, la connessione andrà a buon fine e il Suo catalogo verrà popolato completamente.

### Lightspeed: scansione approfondita delle specifiche

Abbiamo insegnato al sistema a rilevare i dati nascosti più in profondità nella struttura di Lightspeed, affinché i contenuti generati dall'IA siano il più informativi possibile.

-   **Novità:** Fozzels ora riconosce ed estrae i dati dalle **specifiche annidate di secondo livello** che in precedenza venivano trascurate.

-   **Il vantaggio:** l'IA ottiene l'accesso a un insieme completo di caratteristiche del prodotto. Dati più specifici portano a prompt più precisi e a contenuti di qualità superiore.

### Magento 2: controllo della visualizzazione dei media

Un aggiornamento fondamentale per chi utilizza ambienti di test per preparare e verificare i contenuti prima della pubblicazione.

-   **Overwrite Base Media URL:** per gli store Magento 2, ora può modificare manualmente il percorso della sorgente delle immagini.

-   **Il risultato:** la soluzione perfetta per gli **Stage Store**. Anche se le immagini di staging sono archiviate in indirizzi non standard, verranno sempre visualizzate correttamente nel Suo catalogo Fozzels.

### Miglioramenti e correzioni di bug

-   **Logica dei flussi migliorata:** corretto un errore di visualizzazione delle condizioni di filtro nei flussi duplicati. In precedenza, se un flusso includeva una condizione sulla data, altre opzioni potevano non comparire nell'interfaccia. Il problema è stato risolto per un'esperienza utente più coerente.

-   **Calendario e date:** risolti i conflitti di inizializzazione per i campi `date` e `datetime` che in precedenza causavano errori del server.

-   **Aumento delle prestazioni:** ottimizzata la velocità di caricamento delle pagine del catalogo per un flusso di lavoro più fluido.

-   **Stabilità dell'interfaccia:** migliorata la stabilità dell'interfaccia quando si lavora con configurazioni di filtri complesse.

**_Fozzels continua a migliorare grazie al Suo feedback. Grazie per far parte del nostro percorso!_**
