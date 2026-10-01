---
id: '103000395390'
title: '4.3.5 Quando vengono generati i nuovi prodotti: il ciclo di pull spiegato'
sidebar_position: 12
slug: >-
  /content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained
description: >-
  Nuovo prodotto o marchio: perché non è ancora visibile e come velocizzare le cose. Una
  spiegazione del perché i nuovi prodotti non compaiono subito in Fozzels e di cosa
---

**Nuovo prodotto o marchio: perché non è ancora visibile e come velocizzare le cose**

Una spiegazione del perché i nuovi prodotti non compaiono subito in Fozzels e di cosa fare se non desidera attendere fino alla mattina successiva.

**1\. Perché i nuovi prodotti non sono subito visibili in Fozzels**

Fozzels non riceve i dati dal Suo negozio in tempo reale. Non esiste una connessione permanente tra il Suo negozio e Fozzels che trasmetta automaticamente ogni modifica.

Fozzels si connette invece regolarmente al Suo negozio e scarica lo stato attuale del catalogo: questo processo è chiamato Product Pull. Solo al termine di questo processo il sistema viene a conoscenza di nuovi prodotti, modifiche agli attributi o articoli eliminati.

> **ℹ** Se oggi, nel corso della giornata, ha aggiunto un nuovo prodotto o marchio al Suo negozio, questo comparirà in Fozzels solo dopo il pull successivo. Fino ad allora, il sistema semplicemente non sa che esiste.

**2\. Quando avviene il pull**

Il pull viene eseguito automaticamente secondo una pianificazione che Lei stesso configura nella scheda Configurazione o in Siti web e negozi. Per impostazione predefinita, viene eseguito durante la notte.

Al termine del pull, il sistema automaticamente:

-   verifica quali prodotti corrispondono ai filtri dei flussi attivi
-   aggiorna i valori degli attributi per ogni prodotto in coda
-   avvia la generazione dei contenuti

> **ℹ** Anche le modifiche apportate a un flusso (ad esempio, l'aggiunta di un nuovo marchio ai filtri) hanno effetto solo dopo il pull successivo.

**3\. Come evitare di attendere fino al mattino: il pull manuale**

Se ha bisogno che i nuovi prodotti vengano elaborati subito, esegua il pull manualmente. Un pull manuale funziona esattamente come quello automatico: aggiorna completamente il catalogo e avvia la generazione.

**Come eseguirlo:**

-   Vada alla sezione delle impostazioni di integrazione in Fozzels
-   Trovi il Suo negozio ed esegua il pull manualmente
-   Attenda che termini: uno stato di completamento riuscito nell'Elenco stati conferma che tutto è andato a buon fine
-   Successivamente, il sistema sincronizzerà automaticamente i flussi e avvierà la generazione per i nuovi prodotti

> **ℹ** Un pull manuale non annulla né sostituisce quello automatico. Il successivo pull pianificato verrà comunque eseguito all'orario consueto, indipendentemente dal fatto che ne abbia eseguito uno manuale.

**4\. Se ha già eseguito manualmente un flusso durante la giornata**

A volte gli utenti testano i flussi o generano manualmente contenuti per singoli prodotti  -  utilizzando il pulsante Esegui ora. Si tratta di una pratica normale.

È importante sapere che un'esecuzione manuale del flusso non influisce sul ciclo automatico. Il giorno successivo, dopo il pull pianificato, il sistema eseguirà comunque quel flusso automaticamente, indipendentemente da qualsiasi azione manuale eseguita durante la giornata.

_Ha una domanda? Contatti l'assistenza Fozzels._
