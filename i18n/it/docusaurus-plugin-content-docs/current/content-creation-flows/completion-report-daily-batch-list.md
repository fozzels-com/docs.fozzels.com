---
title: "Completion Report (elenco giornaliero dei batch)"
sidebar_position: 29
slug: /content-creation-flows/completion-report-daily-batch-list
description: >-
  Il Completion Report è una panoramica giornaliera di tutti i contenuti
  generati dall'AI nei Suoi Flow — mostra cosa è stato generato, confermato e
  inviato al Suo store in un determinato giorno.
---

Il Completion Report è una panoramica giornaliera di tutti i contenuti generati dall'AI nei Suoi Flow — mostra cosa è stato generato, confermato e inviato al Suo store in un determinato giorno.

Vada su [Completion Report](https://app.fozzels.com/completions/product/completion/report/today) (sostituisca `today` con una data come `2026-03-20`)

---

## Cosa mostra questa pagina

Questa pagina elenca ogni completamento AI (contenuto generato) creato o eseguito nell'intervallo di date selezionato. Riunisce in un unico posto i risultati di **tutti i Suoi Flow**, così può revisionare, confermare e sincronizzare i batch senza dover aprire ogni Flow singolarmente.

---

## Navigazione nel report

### Intervallo di date

- I selettori di data **From / To** in alto Le consentono di modificare l'intervallo di date
- La data nell'URL imposta la data di inizio — ad es. `/completions/product/completion/report/2026-03-20`
- Aggiunga `?end_date=2026-03-21` per impostare una data di fine

### Filtro per store

- Il pannello a sinistra elenca i Suoi store collegati
- Clicchi su uno store per filtrare il report mostrando solo i completamenti di quello store
- Clicchi di nuovo o cancelli il filtro per mostrare tutti gli store

### Filtri di visualizzazione (caselle di controllo)

- **Show only with errors** — nasconde gli elementi riusciti e mostra solo i completamenti non riusciti/con errori
- **Show only suspicious** — mostra solo i completamenti contrassegnati come contenuto sospetto

### Filtri per colonna (generatore di condizioni)

- Filtri per Flow, Website, Store, SKU, Prompt, Created At, Executed At, Synchronized At
- Costruisca condizioni AND/OR esattamente come nel Catalogo

---

## Colonne della tabella

| Colonna | Cosa mostra |
|--------|--------------|
| **Flow** | Nome del Content Flow che ha generato questo elemento (clicchi per aprire il Flow) |
| **Website / Store** | Lo store a cui appartiene questo elemento |
| **SKU** | Identificativo del prodotto (clicchi per aprire il prodotto) |
| **Confirmed** | Casella di controllo — indica se questo completamento è approvato per la sincronizzazione |
| **Prompt** | Il prompt AI utilizzato |
| **Created At** | Quando è stato creato il completamento |
| **Target attribute** | Il contenuto generato dall'AI (clicchi per modificarlo) |
| **Executed At** | Quando è stata eseguita la generazione; mostra etichette di errore in caso di esito negativo |
| **Synchronized At** | Quando il contenuto è stato inviato al Suo store; mostra "Sync Now" se in attesa |
| **Thumbnail** | Immagine del prodotto (attivi o disattivi la visibilità con il pulsante delle colonne) |

---

## Azioni

### Azioni per riga

- **Attivi/disattivi la casella Confirmed** — conferma o annulla la conferma di un singolo elemento
- **Clicchi sul valore del target attribute** — apre una finestra di modifica in cui può:
  - Modificare manualmente il contenuto generato
  - Visualizzare la cronologia delle revisioni e ripristinare una versione precedente
  - Rigenerare il contenuto
  - Alternare la visualizzazione HTML / testo semplice
  - Salvare e, facoltativamente, sincronizzare immediatamente
- **Clicchi su "Sync Now"** — invia manualmente un singolo elemento allo store
- **Clicchi su un'etichetta di errore** — visualizza il messaggio di errore completo e le opzioni per riprovare

### Azioni di massa (selezioni prima gli elementi, poi scelga l'azione)

| Azione | Cosa fa |
|--------|-------------|
| **Confirm all, Save & Sync** | Contrassegna gli elementi selezionati come confermati e li mette in coda per la sincronizzazione (eseguita ogni 4 ore) |
| **Regenerate, Save & Sync** | Riesegue la generazione AI per gli elementi selezionati e li mette in coda per la sincronizzazione |
| **Sync Generated Content** | Forza una nuova sincronizzazione degli elementi già sincronizzati (sovrascrive quanto presente nel Suo store) |
| **Update Suspicious Flag** | Ricalcola lo stato di contenuto sospetto per gli elementi selezionati |

---

## Casi d'uso frequenti

**Revisione del batch di ieri**

- Apra il report per la data precedente
- Filtri per store se ne ha più di uno
- Ordini per "Executed At" per vedere cosa è stato eseguito

**Individuazione degli elementi non riusciti**

- Attivi la casella "Show only with errors"
- Clicchi sull'etichetta di errore di una riga per vedere l'errore esatto e riprovare

**Gestione dei contenuti sospetti**

- Attivi la casella "Show only suspicious"
- Revisioni ogni elemento contrassegnato — lo modifichi, lo rigeneri o lo confermi se si tratta di un falso positivo

**Conferma e sincronizzazione di massa**

- Selezioni tutti gli elementi (o filtri quelli desiderati)
- Utilizzi **Confirm all, Save & Sync** per approvare e mettere in coda tutto in una volta
- La sincronizzazione viene eseguita automaticamente ogni 4 ore; in alternativa, utilizzi "Sync Now" per singolo elemento per un invio immediato

---

## Problemi frequenti

**Nessun elemento mostrato per oggi**

- I completamenti compaiono qui quando un Flow è stato eseguito — verifichi che i Suoi Flow siano attivi e siano stati eseguiti
- Provi ad ampliare l'intervallo di date

**Elementi confermati ma non sincronizzati**

- La sincronizzazione viene eseguita ogni 4 ore — attenda oppure utilizzi "Sync Now" per singolo elemento
- Verifichi che l'integrazione sia attiva e che lo store sia collegato

**Errore nella colonna "Executed At"**

- Clicchi sull'etichetta di errore rossa per vedere i dettagli
- Cause frequenti: credenziali dell'integrazione scadute, attributo non modificabile, store offline

**L'elemento risulta "Suspicious"**

- Il contenuto ha attivato una parola sospetta o un pattern tipico degli artefatti AI
- Modifichi manualmente il contenuto, quindi lo confermi — oppure utilizzi **Update Suspicious Flag** se il contenuto è in realtà corretto
