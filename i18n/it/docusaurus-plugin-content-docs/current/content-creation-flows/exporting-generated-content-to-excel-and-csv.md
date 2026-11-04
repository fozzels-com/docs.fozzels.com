---
title: 4.7.6 Esportare i contenuti generati in Excel e CSV
sidebar_position: 22.5
slug: /content-creation-flows/exporting-generated-content-to-excel-and-csv
description: >-
  Scarichi i contenuti generati da una Content Completion List come file Excel o
  CSV, scelga i prodotti e le colonne e apra il file nel modo corretto.
---

## Panoramica

Può scaricare i contenuti generati da una Content Completion List come file Excel (.xlsx) o CSV. Lei sceglie i prodotti e le colonne, Fozzels crea il file in background e il file compare in **Export / Generated Data** per 24 ore.

L'esportazione è utile quando deve leggere i testi completi (nella tabella sono troncati), condividere i contenuti con colleghi o con un cliente per la revisione oppure importare i risultati in un altro sistema, come un ERP, un PIM o un foglio di calcolo.

![Content Completion List con Description, SEO Description e SEO Title generati](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/01-content-completion-list.png)

## Come esportare

1. Apra la **Content Completion List** del flow (batch) che Le interessa.
2. Selezioni i prodotti che desidera esportare. Il numero di elementi selezionati compare nel menu, per esempio **Actions (3)**.
3. Clicchi su **Actions → Export**.

    ![Menu Actions con l'opzione Export e tre prodotti selezionati](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/02-actions-export.png)

4. Nella finestra **Export Text Completions** scelga il formato (CSV o Excel) e, per il CSV, il delimitatore e l'opzione per le righe. Veda [Formato del file](#formato-del-file) più avanti.
5. Selezioni le colonne da includere. Il contenuto generato e lo SKU sono selezionati per impostazione predefinita.
6. Clicchi su **Export as CSV** o **Export as Excel**. Il file viene creato in background.
7. Nella barra laterale apra **Dashboard → Export / Generated Data**.

    ![Barra laterale con Export / Generated Data sotto Dashboard](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/03-sidebar-export-generated-data.png)

8. Quando lo stato indica **Available**, clicchi su **ZIP** nella colonna Download.

    ![Elenco Export / Generated Data con un file ZIP disponibile](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/04-export-list-zip.png)

9. Decomprima l'archivio: contiene il file .xlsx o .csv.

Vengono inclusi solo i completamenti che hanno già un contenuto generato. L'archivio è disponibile per **24 ore**; trascorso questo tempo, esegua di nuovo l'esportazione. Il nome del file è composto dal nome del batch e dal numero di record, per esempio `my batch - 3 Completions.csv`.

## Formato del file

Scelga Excel quando il file sarà letto da una persona e CSV quando i dati devono confluire in un altro sistema.

| Formato | Quando usarlo | Dettagli |
| --- | --- | --- |
| Excel (.xlsx) | Revisione, modifica, condivisione con i colleghi | Si apre direttamente, senza impostazioni. Lo SKU è salvato come testo |
| CSV | Importazione in un ERP, PIM o altro sistema | Codifica UTF-8, valori di testo tra virgolette, delimitatore a Sua scelta |

![Opzioni CSV: delimitatore e Keep each value on one line](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/05-csv-options.png)

**Delimitatore (solo CSV).** La virgola (,) è lo standard per la maggior parte dei sistemi di importazione. Il punto e virgola (;) serve per i file aperti in Excel con impostazioni internazionali europee (Paesi Bassi, Germania, Francia e altri): lì Excel si aspetta “;”, altrimenti tutto finisce in un'unica colonna.

**Keep each value on one line (solo CSV).** I testi possono contenere interruzioni di riga, per esempio tra paragrafi HTML o nel prompt. Senza questa opzione le interruzioni restano all'interno del valore (tra virgolette) e un prodotto occupa più righe fisiche nel file. Con l'opzione attiva, le interruzioni di riga vengono sostituite da spazi e ogni prodotto occupa esattamente una riga.

- La attivi se il Suo sistema di importazione non supporta interruzioni di riga all'interno dei valori (caso frequente nei sistemi ERP).
- Per l'HTML è sicuro: gli spazi tra i tag non cambiano il modo in cui il contenuto viene visualizzato.
- Per il testo semplice con paragrafi, le interruzioni vengono sostituite da spazi e non possono essere ripristinate.

## Colonne disponibili

Le colonne sono raggruppate in quattro blocchi. La casella di controllo accanto al nome di un blocco attiva o disattiva tutte le sue colonne in una volta e il contatore (per esempio “2 of 4”) mostra quante sono selezionate.

![Finestra di esportazione con tutti i gruppi di colonne espansi](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/06-export-columns.png)

| Blocco | Colonna | Intestazione nel file | Contenuto |
| --- | --- | --- | --- |
| Generated content | Attributi generati dal flow | Codice attributo, per esempio `descriptionHtml`, `seo.description`, `seo.title` | I valori generati, per intero. Selezionata per impostazione predefinita |
| Product details | SKU | `sku` | Identificativo del prodotto. Selezionata per impostazione predefinita |
| Product details | Name | `name` | Nome del prodotto |
| Product details | Origin ID | `origin_id` | ID del prodotto nella piattaforma collegata (per esempio Shopify) |
| Product details | Entity type | `entity_type` | Tipo di entità, per esempio `product` |
| Flow details | Batch confirmed | `batch_confirmed` | Indica se il risultato è confermato (`0` = non confermato) |
| Flow details | Prompt | `prompt` | Testo completo del prompt, compresi i dati del prodotto. Lungo, con interruzioni di riga |
| Flow details | Created at | `created_at` | Quando il record è stato aggiunto al batch (UTC) |
| Flow details | Executed at | `executed_at` | Quando è stata eseguita l'ultima generazione (UTC) |
| Flow details | Synchronized at | `synchronized_at` | Quando il contenuto è stato sincronizzato con il negozio (UTC). Vuoto se non ancora sincronizzato |
| Catalog values | Attributi del catalogo | Codice attributo, per esempio `markets` | Valori attuali del Suo catalogo, non generati |

Il blocco **Catalog values** elenca gli attributi per cui è attivata l'opzione **Show in batch list** nelle impostazioni dell'attributo. Nel file vengono prima i dettagli del prodotto, seguiti dai dettagli del flow, dal contenuto generato, dalle date e dai valori del catalogo.

## Leggere il file

**Le intestazioni sono codici attributo, non nomi.** I nomi degli attributi possono variare a seconda del cliente e della lingua del negozio, mentre il codice è univoco e non cambia mai. Per questo lo stesso file può essere importato senza mappature aggiuntive. La finestra di esportazione mostra ogni codice in grigio accanto al nome (per esempio Description · descriptionHtml).

**Date e orari sono in UTC.** Gli orari compaiono come `2026-10-19 10:36:39` in UTC, quindi possono differire dall'interfaccia di Fozzels, che mostra il Suo fuso orario. Per esempio, le 12:36 dell'ora legale dell'Europa centrale compaiono come 10:36 nel file.

**L'HTML viene mantenuto così com'è.** Se per un attributo è attivato **Allow HTML** (come per Description), il file contiene markup con tag come `<p>`, `<ul>` e `<li>`. Questo è necessario per un'importazione corretta. Per i meta campi (SEO Title, SEO Description), Allow HTML dovrebbe essere disattivato, altrimenti i tag finiscono sia nel file sia nel Suo negozio.

![Impostazioni dell'attributo con le opzioni Allow HTML e Show in batch list](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/07-attribute-settings.png)

**Le celle vuote sono normali.** Un valore vuoto significa che non ci sono dati: l'attributo non è compilato nel catalogo oppure il contenuto non è ancora stato sincronizzato (`synchronized_at` vuoto).

**Batch confirmed** viene restituito come numero: `0` significa che il risultato non è confermato.

## Aprire un file CSV

Il modo più sicuro per aprire un CSV è un'importazione con codifica UTF-8 e il delimitatore impostato esplicitamente. In questo modo i caratteri speciali (’, é, ä, cirillico) e le colonne vengono visualizzati correttamente.

**LibreOffice Calc** mostra automaticamente la finestra Importa testo quando apre qualsiasi CSV:

1. Set di caratteri: **Unicode (UTF-8)**.
2. Opzioni di separazione: lasci selezionato **solo** il delimitatore scelto durante l'esportazione (Virgola o Punto e virgola). LibreOffice ricorda le caselle dei file precedenti, quindi potrebbero essere selezionate anche Tabulazione o Spazio.
3. Delimitatore di testo: **"** (virgolette doppie).
4. Per mantenere SKU e ID come testo, selezioni queste colonne nell'anteprima e imposti Tipo di colonna → **Testo**.
5. Clicchi su **OK**.

![Finestra Importa testo di LibreOffice Calc per un CSV esportato](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/08-libreoffice-text-import.png)

**Microsoft Excel** apre un CSV con le Sue impostazioni locali quando fa doppio clic sul file, quindi i caratteri speciali potrebbero essere visualizzati in modo errato (per esempio `itâ€™s` invece di `it’s`). Per evitarlo:

1. In una cartella di lavoro vuota vada su **Dati → Da testo/CSV** e selezioni il file.
2. Origine file: **65001: Unicode (UTF-8)**.
3. Delimitatore: lo stesso scelto durante l'esportazione.
4. Clicchi su **Carica**.

Se deve solo leggere il file, è più semplice esportarlo direttamente in formato Excel. Non salvi di nuovo un CSV in Excel prima di importarlo in un altro sistema: Excel potrebbe cambiare il delimitatore o la codifica, oppure trasformare i numeri lunghi nel formato 7.81227E+12.

## Domande frequenti

**Ho cliccato su Export, ma non è stato scaricato alcun file.** Il file viene creato in background e non viene scaricato automaticamente. Lo trova in **Dashboard → Export / Generated Data**.

**Il file contiene meno prodotti di quelli selezionati.** Vengono esportati solo i record con contenuto generato. Verifichi anche di aver selezionato i prodotti in tutte le pagine dell'elenco, non solo in quella corrente.

**Nel mio CSV è tutto in un'unica colonna.** Il delimitatore del file non corrisponde a quello che si aspetta il Suo programma. Esporti di nuovo con l'altro delimitatore (“;” per Excel europeo) oppure apra il file tramite un'importazione come descritto sopra.

**Vedo caratteri illeggibili come `â€™`.** Il file non è stato aperto come UTF-8. Lo apra tramite un'importazione con codifica UTF-8 oppure esporti in formato Excel.

**Lo SKU viene visualizzato come 7.81227E+12.** Il programma di fogli di calcolo ha trasformato un numero lungo in notazione scientifica. Quando importa il CSV, imposti questa colonna su Testo. Il formato Excel non ha questo problema.

**Gli orari nel file non corrispondono alla tabella.** Il file usa l'UTC, mentre l'interfaccia usa il Suo fuso orario.

**I campi SEO contengono tag `<p>`.** Per quell'attributo è attivato Allow HTML. Lo disattivi nelle impostazioni dell'attributo e generi di nuovo il contenuto.

**Il link di download è scaduto.** Gli archivi vengono conservati per 24 ore. Esegua di nuovo l'esportazione.
