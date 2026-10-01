---
title: Catalogo prodotti — Navigazione, filtri e creazione di flussi
sidebar_position: 9
slug: /data-import-and-quality/product-catalog-navigating-filtering-and-creating-flows
description: >-
  Il catalogo mostra tutti i prodotti importati dal Suo negozio collegato.
  Scopra come navigarlo, filtrare i prodotti con il generatore di condizioni e
  creare un flusso di contenuti mirato a partire da una selezione.
---

Il catalogo mostra tutti i prodotti importati dal Suo negozio collegato. È la Sua vista centrale dei dati di prodotto all'interno di Fozzels.

Vada al [Catalogo](https://app.fozzels.com/catalog)

---

## Navigare nel catalogo

### Selettore del negozio

Nella parte superiore della pagina, selezioni il negozio di cui desidera visualizzare i prodotti. Ogni negozio è indicato con il nome dell'integrazione, il sito web e la lingua.

### Elenco dei prodotti

I prodotti sono mostrati in una tabella paginata (25 per pagina per impostazione predefinita). Può:

- **Ordinare** in base a qualsiasi colonna visibile
- **Attivare/disattivare la visibilità delle colonne** — mostrare/nascondere le colonne degli attributi
- **Modalità a schermo intero** — espandere la tabella fino a riempire lo schermo
- **Passare il mouse su una riga di prodotto** — visualizzare l'anteprima delle immagini del prodotto senza aprirlo

### Dettaglio del prodotto

Clicchi su un prodotto qualsiasi per aprirne la pagina di dettaglio con:

- Galleria completa delle immagini (immagine principale + miniature)
- Tutti i valori degli attributi di quel prodotto in questo negozio
- Link diretti all'integrazione e al sito web

---

## Filtrare i prodotti

Utilizzi il **generatore di condizioni** (Condition Query Builder) per filtrare i prodotti in base ai valori degli attributi.

- Crei condizioni con logica AND/OR
- Filtri in base a qualsiasi attributo per cui è attivato il flag **Filtrabile** in Integrazione → Attributi
- Esempi:
  - "description è vuoto"
  - "category è uguale a Electronics AND price è maggiore di 100"
  - "sku contiene ABC"

Clicchi su **Cerca** per applicare il filtro. Il numero di prodotti nell'intestazione si aggiorna per mostrare quanti prodotti corrispondono.

Clicchi su **Reimposta** per cancellare il filtro e mostrare tutti i prodotti.

> Se un attributo non compare nel generatore di filtri, vada in Integrazione → Attributi e attivi il flag **Filtrabile** per quell'attributo.

---

## Creare un flusso dal catalogo

Il catalogo è il modo più rapido per creare un flusso di contenuti mirato:

1. Crei un filtro per trovare i prodotti che desidera elaborare (ad es. "description è vuoto")
2. Selezioni i prodotti corrispondenti (casella di controllo in ogni riga oppure selezione di tutti i prodotti su tutte le pagine)
3. Clicchi su **"Crea flusso sui prodotti selezionati"**: si apre la procedura guidata di creazione del flusso, precompilata con la Sua selezione come condizione
4. Completi la configurazione del flusso (modello AI, prompt, attributo di destinazione)

È la soluzione ideale quando desidera elaborare uno specifico sottoinsieme di prodotti invece di creare manualmente le condizioni nella procedura guidata del flusso.

---

## Problemi comuni

**Nessun prodotto visibile**

- Il pull dell'integrazione non è ancora stato eseguito: vada alla Sua [integrazione](https://app.fozzels.com/integrations/definitions) e avvii un pull dei prodotti
- Si assicuri che il negozio sia attivo

**Attributi di filtro mancanti nel generatore di condizioni**

- L'attributo richiede il flag **Filtrabile**: vada in Integrazione → Attributi e lo attivi

**Le immagini dei prodotti non vengono visualizzate**

- Le immagini vengono importate dal Suo negozio: se mancano in Fozzels, verifichi che l'integrazione esegua correttamente il pull e che l'URL di base dei media sia configurato (Magento)

**I prodotti non sono aggiornati**

- Avvii un pull manuale dalla pagina della Sua integrazione oppure attenda il prossimo pull pianificato
