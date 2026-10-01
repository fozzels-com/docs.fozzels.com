---
id: '103000313152'
title: 'Avviso "Ricorsione rilevata" durante la creazione di un flusso'
sidebar_position: 26
slug: /content-creation-flows/recursion-detected-warning-when-creating-a-flow
description: >-
  Quando vede questo avviso, significa che sta utilizzando la variabile per
  inserire contenuto dallo stesso attributo in cui il flusso scrive. Per e
---

Quando vede questo avviso, significa che sta utilizzando la variabile per inserire contenuto dallo stesso attributo in cui il flusso scrive.

Ad esempio: sta creando un flusso per aggiornare automaticamente il campo (attributo) "Description".

Nella casella in cui può scrivere il prompt, ha utilizzato lo stesso tag "{Description}" come variabile di input.

Questo può andare bene, ma può anche causare un problema per cui il contenuto viene sovrascritto ogni giorno, se ha attivato l'opzione "Rigenera automaticamente quando l'attributo del prodotto è cambiato".

In questo scenario, Fozzels scriverà nuovo contenuto nel campo "Description".

Tuttavia, ciò significa che anche questo prodotto viene contrassegnato come "modificato", per cui Fozzels proverà a rigenerare il contenuto per questo prodotto il giorno successivo -- e così via, ancora e ancora.

Le consigliamo di valutare di **disattivare** l'opzione "Rigenera automaticamente quando l'attributo del prodotto è cambiato" oppure di **rimuovere** quel campo di input dal Suo prompt.
