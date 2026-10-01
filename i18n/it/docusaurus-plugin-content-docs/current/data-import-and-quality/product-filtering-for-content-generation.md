---
id: '103000369006'
title: 3.3. Filtrare i prodotti per la generazione di contenuti
sidebar_position: 7
slug: /data-import-and-quality/product-filtering-for-content-generation
description: >-
  Questa guida spiega come utilizzare in modo efficace il meccanismo di filtro
  di Fozzels per selezionare con precisione un sottoinsieme di prodotti in base
  ai valori degli attributi
---

Questa guida spiega come utilizzare in modo efficace il meccanismo di filtro di Fozzels per selezionare con precisione un sottoinsieme di prodotti in base ai valori degli attributi, affinché la generazione di contenuti sia mirata ed efficiente.

### 1\. Accesso alle opzioni di filtro

Le opzioni di filtro sono disponibili in due posizioni principali:

1.  **Creazione del flusso di contenuti:** per definire lo specifico batch di prodotti che un flusso elaborerà, **modifichi** un flusso esistente (o ne crei uno nuovo) e **vada** alla scheda **"Selezione e prompt del flusso"**.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/M8M8DSbeTwyMCzVdPZg-AgTrZhknUKlMaA.png)

2.  **Catalogo prodotti:**
    2.1 Attivi l'interruttore **"Filtro avanzato"**. Si apre un pannello in cui può utilizzare **"Aggiungi condizione"** e **"Aggiungi gruppo di condizioni"** per una logica complessa.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/PCVDp6xbmqaVBtncYNWlb_f76UC2MmUI-g.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/IOHTRc5oV_-sARYVDZ-D0orkvhDrAYcI8A.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/R1pQBNQNg8sWQ-DUNYyn1nSlXHg750rAUg.png)
        2.2 **Filtro in linea:** filtri i prodotti tramite campi di input o elenchi a discesa situati direttamente nelle intestazioni delle colonne della tabella dei prodotti (disponibile per gli attributi con il flag **Filtrabile** attivato).
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/AgXgNaluOPoF0zxvvmWoytasp0fhtnppLg.png)

3.  _**Importante:** nel catalogo può combinare i filtri in linea applicando condizioni a più colonne contemporaneamente (ad es. filtrando per **SKU** **E** per **Brand**)._

### 2\. Filtrare in base a condizioni sui valori

Questo tipo di filtro si applica agli attributi di testo, numerici e a selezione multipla.

1.  **Uguale:** il valore dell'attributo deve corrispondere esattamente al valore inserito. _Esempio: mostrare solo i prodotti in cui_ `Color` _è uguale a_ `Blue`.

2.  **Diverso da:** mostra tutti i prodotti tranne quelli che corrispondono esattamente al valore inserito. _Esempio: mostrare tutti i prodotti in cui_ `Material` _non è_ `Cotton`.

3.  **È vuoto:** mostra solo i prodotti in cui l'attributo selezionato non ha alcun valore (è vuoto). _Esempio: trovare i prodotti con_ `Short Description` _vuota_.

4.  **Non è vuoto:** mostra solo i prodotti in cui l'attributo selezionato contiene un valore compilato. _Esempio: trovare i prodotti che hanno il nome del_ `Manufacturer` _compilato_.

5.  **Contiene:** il valore dell'attributo deve contenere il frammento di testo o il numero inserito. _Esempio: trovare tutti i prodotti in cui_ `Name` _contiene la parola_ `Summer`.

6.  **Non contiene:** il valore dell'attributo non deve contenere il frammento di testo inserito. _Esempio: escludere i prodotti il cui_ `SKU` _non contiene_ `DISCOUNT`.

7.  **In / Non in:** il valore dell'attributo deve corrispondere a uno dei più valori inseriti (separati da virgole) oppure non deve corrispondere a nessuno di essi. _Esempio (In): mostrare i prodotti in cui_ `Size` _è_ `S, M, L`.

8.  **Inizia con / Termina con:** trova i prodotti in base ai caratteri iniziali o finali del valore. _Esempio: trovare i prodotti il cui_ `SKU` _inizia con_ `P_`.

9.  **È null / Non è null:** condizioni tecniche per gestire correttamente i valori vuoti o non vuoti a livello di sistema.

### 3\. Filtrare in base a condizioni sulle date

Questo tipo si applica agli attributi in formato data e consente di filtrare in base alla cronologia (ad es. `created_at`, `updated_at`).

1.  **È vuoto / Non è vuoto:** mostra i record in cui il campo data è assente o compilato. _Esempio: trovare tutti i prodotti senza_ `update date`.

2.  **Uguale:** mostra i record in cui il valore corrisponde esattamente alla data inserita. _Esempio: trovare tutti i prodotti creati il_ `2024-01-01`.

3.  **Minore:** mostra i record in cui il valore della data è cronologicamente precedente alla data inserita. _Esempio: trovare tutti i prodotti aggiornati prima di_ `last month`.

4.  **Maggiore:** mostra i record in cui il valore della data è cronologicamente successivo alla data inserita. _Esempio: trovare tutti i nuovi prodotti aggiornati dopo_ `yesterday`.

5.  **Minore o uguale / Maggiore o uguale:** include la data inserita nel set di risultati. _Esempio: trovare tutti i prodotti aggiornati a partire dal_ `01-01-2024`.

### 4\. Filtrare in base alle immagini dei prodotti

Questo tipo speciale di filtro è disponibile nel **Catalogo** tramite il filtro in linea della colonna **Miniatura**. È di importanza fondamentale per le iniziative di generazione di contenuti che utilizzano modelli multimodali.

1.  **Immagine presente:** mostra solo i prodotti a cui è associata un'immagine.

2.  **Immagine mancante:** mostra solo i prodotti per i quali manca un'immagine.

![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/8QgVAeRUMysJuzJ8692EqmUBXsfxeJ-Leg.png)

### 5\. Raggruppare le condizioni (logica avanzata)

Può creare batch di prodotti altamente specifici utilizzando più condizioni e gruppi.

1.  **Aggiunta di più condizioni:** per filtrare in base a diversi attributi (ad es. `Color = Blue` **E** `Size = M`), è sufficiente **cliccare più volte su "Aggiungi condizione"**.

2.  **Gruppo di condizioni:** cliccando su **“Aggiungi gruppo di condizioni”** può combinare le condizioni con una logica complessa (ad es. (`Category = Shirts` **E** `Price > 50`) **OPPURE** (`Category = Jackets`)).
