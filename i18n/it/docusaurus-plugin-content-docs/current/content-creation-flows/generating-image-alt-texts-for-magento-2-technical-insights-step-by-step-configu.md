---
id: '103000408207'
title: >-
  4.3.2.a Generazione di testi alternativi per le immagini in Magento 2: aspetti
  tecnici e configurazione passo dopo passo
sidebar_position: 9
slug: >-
  /content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu
description: >-
  Poiché conosce già i meccanismi fondamentali per la configurazione dei flussi
  di contenuti prodotto in Fozzels, questo manuale tecnico si concentra
  esclusivamente s
---

Poiché conosce già i meccanismi fondamentali per la configurazione dei flussi di contenuti prodotto in Fozzels, questo manuale tecnico si concentra esclusivamente sull'architettura specifica di Magento 2: l'interazione con l'attributo di sistema `product_media_gallery` e l'ottimizzazione del consumo di token durante i cicli di elaborazione in blocco delle gallerie multimediali.

## Passo 1. Configurazione dei permessi di scrittura per la galleria multimediale (prerequisito)

A differenza dei campi di testo standard (ad es. descrizioni e nomi dei prodotti), in Magento i testi alternativi risiedono all'interno dell'infrastruttura della galleria di immagini e vengono scritti direttamente nell'attributo di sistema `product_media_gallery`. Per impostazione predefinita, Fozzels tratta questo attributo come di sola lettura, utilizzandolo esclusivamente come indicatore per filtrare il catalogo prodotti in base alla presenza di immagini.

Per concedere al sistema il permesso di sovrascrivere e inserire dati in questo campo, deve impostarne lo stato su **Modificabile**:

1.  Vada al menu principale in alto: **Integrazioni** → selezioni la Sua istanza **Magento 2** attiva.

2.  Apra la **Scheda 3: Attributi**.

3.  Nella barra di ricerca/filtro, digiti `media`. Individui la riga con il codice `product_media_gallery` (Media Gallery) e clicchi sul pulsante turchese **\[Modifica attributo\]**.

4.  Nella finestra delle impostazioni, nella sezione _Trasforma dati_, trovi la casella **Modificabile** e la spunti (**\[v\] Modificabile**).

5.  Clicchi sul pulsante blu **Salva** nell'angolo in basso a destra.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/ryugiLjaej08TONBWZC6dvmgdeHvEKzJOA.png)
![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/vj3HVtE0gIyKK1lMzn0NeLCwxHle8IT1Cg.png)

##
Passo 2. Inizializzazione del flusso e mappatura degli attributi

1.  Vada alla sezione **Flussi di contenuti** e clicchi sul pulsante **Crea** **flusso** (oppure selezioni i prodotti di destinazione direttamente dalla vista del catalogo e clicchi su **Azioni → Crea flusso**).

2.  Nella **Scheda 1: Nuovo flusso**, configuri i parametri dell'ambiente:

-   **Negozio / Integrazione:** selezioni dai menu a discesa la Sua istanza Magento specifica, la configurazione del sito web e la Store View di destinazione.

-   **Nome:** assegni al flusso un titolo tecnico chiaro.

-   **Tipo di entità:** viene impostato automaticamente su `Product`.

3.  **Attributo di destinazione:** clicchi sul menu a discesa di selezione **Attributo\***, digiti `media` e selezioni l'attributo di sistema **Media Gallery**. In questo modo le stringhe generate dall'IA verranno convogliate in modo sicuro direttamente nello schema del database della galleria di immagini, anziché nei blocchi di descrizione standard.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/Btu-8xXR_jSHpiFqqxtTZJBUXcu0hyrmTQ.png)

## Passo 3. Selezione del modello Vision e della modalità di scansione (Delta vs. Sovrascrittura completa)

Nella **Scheda 2: Configurazione IA**, selezioni il provider e il modello sottostanti (ad es. versioni di GPT o Gemini dotate di funzionalità Vision multimodali per analizzare le immagini), quindi definisca come il processo di esecuzione deve interagire con il database della Sua vetrina Magento attiva:

-   **Modalità Delta (casella "Forza rigenerazione testi ALT" NON SPUNTATA):** lo scenario predefinito. Il processo in background esegue la scansione del Suo catalogo Magento e richiede completamenti all'IA **solo per le immagini il cui campo del testo alternativo è attualmente vuoto**. In questo modo viene preservato il lavoro SEO manuale già svolto e si risparmiano crediti API.

-   **Modalità Sovrascrittura completa (casella "Forza rigenerazione testi ALT" SPUNTATA):** lo scenario di riscrittura completa. Il motore ignora completamente lo stato attuale dei metadati sulla vetrina, cancellando i vecchi testi alternativi all'interno del batch selezionato e sostituendoli tutti con nuove stringhe generate dall'IA.

> ? **Raccomandazione tecnica:** lasci attiva la casella **Abilita ridimensionamento immagini**. Se un file immagine in Magento supera i 2MB o una risoluzione di 2048px, Fozzels lo ridimensionerà automaticamente in base ai limiti di input standard dei modelli Vision. Ciò protegge attivamente la Sua pipeline da errori di payload (generazioni non riuscite) e ottimizza i crediti in token.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/cbKMN8kS6jIqV-wZJGv_TV9zC74UxTrCFg.png)

## Passo 4. Prompt Engineering

Nella **Scheda 3: Selezione flusso e prompt**, formula le istruzioni esplicite per il modello di IA. Poiché la pipeline opera in modalità incentrata sulle risorse (1 immagine = 1 completamento del prompt), il Suo prompt deve indicare al modello Vision di unire gli elementi visivi con il contesto testuale del prodotto.

1.  Nell'area di lavoro **Prompt**, scriva le regole tecniche fondamentali (ad es. limiti di caratteri, lo standard del settore è inferiore a 125 caratteri per gli screen reader, e il divieto di frasi introduttive generiche come _"immagine di"_).

2.  Utilizzi la barra laterale **Attributi** a destra per cercare e **trascinare** i token dinamici di Magento direttamente nel corpo del prompt (ad es. `{name}`, `{color}`, `{material}`, `{brand}`).

### **Modelli di prompt:**

> **Opzione 1: standard per e-commerce di moda e abbigliamento** `"Scrivi un testo alternativo SEO conciso e naturale per il tag di accessibilità di un sito di e-commerce. Descrivi i dettagli visivi, lo stile e il taglio dell'articolo mostrato nell'immagine. Integra in modo naturale questi attributi se sono visibili: {color} {name} di {brand}, realizzato in {material}. Mantieni l'output sotto i 125 caratteri, evita rigorosamente l'eccesso di parole chiave e non iniziare con frasi come 'foto di' o 'immagine di'. Descrivi solo ciò che è effettivamente presente nella foto."`

> **Opzione 2: minimalista e incentrata sui dettagli del prodotto** `"Genera un tag Alt pulito e professionale per uno screen reader. Concentrati esclusivamente sul design del prodotto, sulla disposizione e sulle caratteristiche visive distintive. Usa i metadati forniti per garantire la precisione: {brand} {name} in {color}. Mantieni la descrizione realistica, fattuale e sotto i 120 caratteri. Evita frasi di marketing superflue e non usare 'foto di' o 'immagine di'. Restituisci solo la stringa della descrizione."`

## Passo 5. Limiti del volume di elaborazione e struttura dell'elenco batch

Nella **Scheda 4: Automazione**, il campo di configurazione **"Numero di prodotti per cui creare contenuti al giorno"** calcola le soglie di elaborazione in base alle entità Prodotto padre, non ai singoli file immagine. Poiché Fozzels valuta ogni singola risorsa multimediale all'interno della galleria di un prodotto, impostare un limite di 10 prodotti, ciascuno con 5 immagini, comporterà 50 completamenti Vision dell'IA distinti e fatturati. Tuttavia, anche con questa struttura di elaborazione, tutti i risultati generati rimarranno ordinatamente organizzati nel Suo **Elenco batch**, raggruppati visivamente per SKU del prodotto, in modo che possa facilmente esaminarli, modificarli o approvarli in blocco prima di pubblicare i metadati.
