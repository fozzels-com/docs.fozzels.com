---
id: '103000371114'
title: '3.5. Rilevamento della ricorsione: prevenire la generazione infinita di contenuti'
sidebar_position: 8
slug: >-
  /data-import-and-quality/recursion-detection-preventing-infinite-content-generation
description: >-
  L'avviso "Ricorsione rilevata" segnala un potenziale conflitto nella
  configurazione del Suo flusso, in cui l'output del processo di generazione
  funge anche da input
---

L'avviso "Ricorsione rilevata" segnala un potenziale conflitto nella configurazione del Suo flusso, in cui l'output del processo di generazione funge anche da input per lo stesso processo. Ciò significa che il Suo flusso è impostato per leggere i dati dallo stesso attributo in cui, contemporaneamente, è impostato per scrivere i contenuti appena generati.

L'esempio più comune è un flusso progettato per aggiornare il campo {Description} (l'attributo di destinazione), mentre il prompt stesso utilizza la variabile {Description} come fonte di informazioni.

### Implicazione tecnica: il ciclo dei contenuti

Quando questa configurazione viene utilizzata insieme all'impostazione "Rigenera automaticamente quando un attributo del prodotto cambia", può verificarsi un ciclo perpetuo di generazione dei contenuti, con un consumo di token e cicli di esecuzione non necessari.

1.  Esecuzione, giorno 1: Fozzels genera correttamente nuovi contenuti e li scrive nel campo Description.

2.  Rilevamento della modifica: poiché il valore del campo Description è cambiato, il sistema e-commerce integrato contrassegna il prodotto come "aggiornato".

3.  Esecuzione successiva: alla successiva esecuzione pianificata (ad es. il giorno seguente), l'impostazione di automazione rileva che il prodotto è stato "aggiornato" e tenta di rigenerare nuovamente i contenuti.

4.  Il ciclo: questa rigenerazione crea una nuova modifica, che riavvia il processo all'infinito.

### Raccomandazioni per la gestione

Sebbene l'uso dell'attributo di destinazione come input sia talvolta intenzionale (ad es. per aggiungere informazioni a un testo esistente), è fondamentale gestire le impostazioni di automazione per evitare questo ciclo infinito.

- **Azione 1**: disattivare la rigenerazione automatica Il modo più efficace per interrompere il ciclo è disattivare l'opzione "Rigenera automaticamente quando un attributo del prodotto cambia". In questo modo, anche se il flusso provoca una modifica nell'attributo di destinazione, l'automazione non pianifica automaticamente una nuova esecuzione sulla base di quella specifica modifica.
- **Azione 2**: rimuovere l'input ricorsivo Se il contenuto esistente non è strettamente necessario per la logica del prompt, rimuova la variabile ricorsiva (ad es. rimuova {Description}) dal Suo prompt. Si basi invece solo su attributi di prodotto statici (come Brand, Material, Color), per garantire che la generazione dei contenuti si fondi su dati immutabili ed evitare così l'avvio di aggiornamenti continui.

