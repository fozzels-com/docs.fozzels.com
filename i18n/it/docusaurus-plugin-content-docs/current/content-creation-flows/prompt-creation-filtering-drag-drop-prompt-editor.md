---
id: '103000367983'
title: "4.3.2 Configurazione e utilizzo del prompt: il nuovo editor dei prompt"
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  Come scrivere il prompt di un flusso nel nuovo editor: inserire attributi e
  condizioni, impostare le opzioni degli attributi, usare gli snippet,
  controllare l'anteprima in tempo reale e farsi aiutare dall'Assistente prompt
  IA.
---

Il campo Prompt è il punto in cui scrive le istruzioni che Fozzels invia all'IA per ciascun prodotto. Il nuovo editor Le consente di costruire il prompt, inserire dati di prodotto e condizioni e verificare il risultato per un prodotto reale, il tutto in un'unica schermata.

## Novità

Se ha utilizzato il precedente editor drag & drop, queste sono le principali modifiche:

| Area | Prima | Ora |
| --- | --- | --- |
| Inserimento degli attributi | Clic o trascinamento dall'elenco | Clic, trascinamento oppure digitando `/` nell'editor. Ogni attributo viene inserito come riga di condizione già pronta |
| Condizioni | Un elenco separato "Attributi (se compilati)" | Ogni condizione è un blocco che può contenere testo, attributi e altre condizioni (annidamento) |
| Opzioni degli attributi | Nessuna | Per ogni attributo: mostra solo se compilato, nascondi etichetta, valore di riserva |
| Tasso di compilazione dei dati | Tooltip con una percentuale | Sottolineatura colorata su ogni attributo, più un tooltip con il tasso di compilazione e un valore di esempio |
| Anteprima | Solo dopo Salva e anteprima | Anteprima in tempo reale accanto all'editor, sincronizzata con il cursore e lo scorrimento |
| Contenuti riutilizzabili | Solo modelli di prompt completi | Snippet: Elenco attributi, Elenco categorie, Connettore integrazione e i Suoi blocchi riutilizzabili |
| Attributi per flusso | Uno | L'attributo principale più fino a 12 attributi aggiuntivi |
| Strumenti dell'editor | Nessuno | Annulla/ripeti, dimensione del testo, ricerca, schermo intero, mostra/nascondi anteprima e snippet |

**Passaggio dal vecchio editor.** Non è necessario migrare nulla. I flussi esistenti continuano a funzionare e tutti i prompt e i modelli salvati sono stati convertiti automaticamente nel nuovo formato. Può anche incollare un prompt scritto nel vecchio formato e l'editor lo convertirà.

## 1. Dove si colloca il prompt in un flusso

Il prompt si scrive al passo 3 di un flusso, **Selezione flusso e prompt**. A quel punto il flusso conosce già il negozio, l'attributo di destinazione e le impostazioni IA.

1. **Nuovo flusso.** Vada a **Flussi → Crea**.

   ![Pagina Flussi con il pulsante Crea](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/01-flows-page-with-the-create-button.png)

   Selezioni l'integrazione, il sito web e il negozio (lingua), inserisca un nome e scelga il tipo di entità: Prodotto o Categoria.

   ![Crea nuovo flusso prodotto: scelta del tipo di entità](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/02-create-flow-choosing-the-entity-type.png)

   Quindi scelga l'attributo per cui generare contenuti e clicchi su **Salva**.

   ![Crea nuovo flusso prodotto: scelta dell'attributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/03-create-flow-choosing-the-attribute.png)

2. **Configurazione IA.** Scelga il modello di IA e le funzioni facoltative, come la ricerca web, l'uso delle immagini e il ridimensionamento delle immagini. Veda [4.2.1 Configurazione IA](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features).

3. **Selezione flusso e prompt.** Utilizzi **Filtra e seleziona prodotti** per scegliere i prodotti per i quali il flusso genererà contenuti. Se non imposta alcuna condizione, vengono utilizzati tutti i prodotti. Quindi scriva il prompt nella sezione **Prompt** sottostante.

   ![Passo Selezione flusso e prompt con l'editor dei prompt vuoto](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/04-flow-selection-prompt-step-with-an.png)

L'insieme di prodotti selezionato qui è anche quello utilizzato dall'anteprima (veda la sezione 8).

### Un flusso, più attributi

Un flusso può compilare il proprio attributo principale più fino a 12 attributi aggiuntivi, 13 in totale. Tutti vengono generati insieme in un'unica richiesta all'IA per prodotto. I dati e le immagini del prodotto vengono inviati una sola volta, quindi la generazione è più rapida e consuma meno token rispetto a flussi separati.

Per aggiungere un attributo:

1. Vada a **Attributi aggiuntivi da compilare** al passo 3. Il contatore accanto al titolo mostra quanti ne ha aggiunti, ad esempio **0 / 12**.
2. Scelga un attributo nell'elenco **Scegli attributo**.
3. Clicchi su **Aggiungi attributo**.

![Scelta di un attributo aggiuntivo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/05-choosing-an-additional-attribute.png)

L'attributo compare come riga a sé con il proprio nome e tipo, ad esempio **SEO Description · Testo**. Finché non scrive un'istruzione, la riga riporta _Nessuna istruzione ancora_.

In **Istruzione per questo attributo**, scriva che cosa l'IA deve produrre per questo attributo. L'istruzione viene combinata con il prompt principale in un'unica richiesta. Il campo funziona come l'editor principale: digiti `/` oppure utilizzi il pannello Attributi accanto per aggiungere attributi e condizioni.

![Riga dell'attributo aggiuntivo con il relativo campo di istruzione](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/06-additional-attribute-row-with-its-instruction.png)

- Utilizzi l'icona del cestino per rimuovere l'attributo e la freccia per comprimere o espandere la riga.
- Per ora il campo di istruzione non dispone di un pannello Snippet. Gli snippet utilizzati al suo interno funzionano comunque durante la generazione.
- I risultati restano esaminabili e inviabili al negozio per singolo attributo.

Per maggiori dettagli, clicchi su **Guida utente: come funzionano i flussi multi-attributo** nell'angolo in alto a destra di questa sezione.

## 2. Struttura della sezione Prompt

La sezione Prompt è composta da quattro aree:

| Area | Posizione | A cosa serve |
| --- | --- | --- |
| Editor | In alto a sinistra | Scrivere il prompt e posizionare attributi, condizioni e snippet |
| Anteprima | In alto a destra | Vedere il prompt finale per un prodotto reale |
| Attributi | In basso a sinistra | Tutti gli attributi del negozio selezionato, con il relativo tasso di compilazione |
| Snippet | In basso a destra | Blocchi riutilizzabili come Elenco attributi ed Elenco categorie |

Il link **Guida utente: configurazione e utilizzo del prompt** nell'angolo in alto a destra apre questo articolo.

### Barra degli strumenti dell'editor

| Pulsante | Funzione |
| --- | --- |
| Annulla / Ripeti | Torna indietro o avanti tra le modifiche. Annulla ripristina anche un blocco eliminato per errore |
| A / A | Riduce o ingrandisce il testo dell'editor. Modifica solo la visualizzazione, non il prompt |
| Cerca nel prompt | Trova parole o attributi in un prompt lungo |
| Anteprima (occhio) | Mostra o nasconde il pannello Anteprima |
| Snippet (documento) | Mostra o nasconde il pannello Snippet |
| Massimizza | Apre l'editor e il pannello laterale a schermo intero |

![Pulsante Anteprima nella barra degli strumenti](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/07-preview-button-in-the-toolbar.png)

Quando l'anteprima è nascosta, il pannello Attributi si sposta a destra e l'editor ottiene più spazio.

![Layout con l'anteprima nascosta](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/08-layout-with-the-preview-hidden.png)

![Pulsante Massimizza](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/09-maximize-button.png)

![Pulsante Snippet e pannello Snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/10-snippets-button-and-the-snippets-panel.png)

Il prompt in sé non ha formattazione: niente intestazioni, elenchi o testo in grassetto. Per ottenerli nei contenuti generati, li richieda a parole. Può citare tag HTML come `<h2>`, `<ul>` e `<strong>` nell'istruzione, ad esempio _Inizia con un'intestazione `<h2>` che riporti il nome del prodotto_. L'editor li mostra come testo semplice. I tag che l'output deve contenere devono essere consentiti, veda [4.7.3 Tag HTML consentiti](/content-creation-flows/allowed-html-tags-for-ai-text-generation).

## 3. Aggiunta di attributi

Un attributo è un segnaposto per i dati del prodotto, come titolo, tipo di prodotto o materiale. Nell'editor è un chip verde. Nel prompt finale viene sostituito dal valore del prodotto.

Può aggiungere un attributo in tre modi:

- **Digiti `/`** nell'editor. Si apre un elenco con il nome e la chiave tecnica di ciascun attributo.

  ![Menu slash con l'elenco degli attributi](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/11-slash-menu-with-the-list-of.png)

  Continui a digitare per filtrarlo, ad esempio `/seo`, quindi scelga l'attributo.

  ![Menu slash filtrato per "seo"](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/12-slash-menu-filtered-by-seo.png)

- **Clicchi** su un attributo nel pannello Attributi. Viene inserito in corrispondenza del cursore.
- **Trascini** un attributo dal pannello Attributi e lo rilasci dove serve. Una linea indica dove verrà posizionato.

  ![Linea di rilascio durante il trascinamento di un attributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/13-drop-line-while-dragging-an-attribute.png)

L'attributo inserito arriva come riga di condizione con un'etichetta:

![Una riga di condizione per SEO Title, accanto all'anteprima](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/14-a-condition-line-for-seo-title.png)

### Riga di condizione o attributo in linea

L'editor mantiene il prompt strutturato: ogni condizione occupa una riga propria. Pertanto, la posizione in cui finisce un attributo determina che cosa diventa.

| Dove lo inserisce | Risultato | Esempio |
| --- | --- | --- |
| All'inizio di una riga (con `/`, un clic o un rilascio prima dell'etichetta) | Una **riga di condizione**: un blocco con un'etichetta e l'attributo | `if SEO Title` → _SEO Title: [SEO Title]_ |
| All'interno di una riga, dopo l'etichetta (rilascio tra l'etichetta e un attributo) | Un **attributo in linea** senza una propria condizione | _Media Gallery: Handle: [Handle] [Media Gallery]_ |

![Riga di condizione annidata (Status) e un attributo in linea (Handle)](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/15-nested-condition-line-status-and-an.png)

L'etichetta, ad esempio _SEO Title:_, viene aggiunta automaticamente. È testo normale, quindi può modificarla.

Può utilizzare lo stesso attributo tutte le volte che desidera.

## 4. Condizioni (blocchi if)

Una condizione è un blocco tratteggiato con un'intestazione gialla, ad esempio **if SEO Title**. Tutto ciò che si trova all'interno del blocco entra nel prompt solo quando il prodotto ha un valore per quell'attributo. Quando il valore è vuoto, l'intero blocco viene saltato.

In questo modo il prompt di ogni prodotto resta pulito. Una riga come _SEO Title:_ non compare mai senza un valore dopo di essa.

**Esempio.** Il prompt contiene `if SEO Title`, `if Created At` e `if Tags` (annidato all'interno di `if Created At`). Il prodotto di esempio non ha un SEO Title, quindi l'anteprima mostra solo le righe Tags e Created At.

![Condizioni annidate e l'anteprima corrispondente](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/16-nested-conditions-and-the-matching-preview.png)

### Cosa può inserire in una condizione

- Testo libero, prima o dopo l'attributo
- Altri attributi, come attributi in linea
- Altre condizioni (annidamento). Ad esempio, `if Tags` all'interno di `if Created At` significa che la riga Tags compare solo quando entrambi i valori sono compilati
- Snippet (veda la sezione 7)

![Trascinamento di una condizione all'interno di un'altra condizione](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/17-dragging-a-condition-into-another-condition.png)

### Lavorare con le condizioni

| Azione | Come |
| --- | --- |
| Spostare un blocco | Lo trascini tramite la maniglia ⠿ alla sua sinistra. Può rilasciarlo tra altre righe o all'interno di un'altra condizione. Anche le righe senza condizione hanno la stessa maniglia |
| Rimuovere solo la condizione | Clicchi sull'ingranaggio nell'intestazione gialla e selezioni **Mostra sempre (rimuovi condizione)**. Il contenuto resta e viene sempre incluso |
| Eliminare il blocco | Clicchi sulla **x** nell'intestazione gialla (**Elimina blocco**) |
| Verificare il prodotto di esempio | Passi il mouse sull'intestazione gialla. Se la condizione non è soddisfatta per il prodotto nell'anteprima, vedrà **Nessun output per questo prodotto di esempio** |

![Mostra sempre (rimuovi condizione) nel menu dell'ingranaggio](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/18-always-show-remove-condition-in-the.png)

![Elimina blocco nell'intestazione gialla](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/19-delete-block-on-the-yellow-header.png)

![Nessun output per questo prodotto di esempio](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/20-no-output-for-this-sample-product.png)

:::warning

**Elimina blocco** rimuove l'intero blocco con tutto ciò che contiene, comprese le condizioni annidate. Per conservare il contenuto, utilizzi invece **Mostra sempre**. Se elimina un blocco per errore, clicchi su **Annulla**.

:::

## 5. Opzioni degli attributi

Clicchi sulla piccola freccia di un chip verde dell'attributo per aprirne le opzioni.

![Menu delle opzioni dell'attributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/21-attribute-options-menu.png)

| Opzione | Funzione |
| --- | --- |
| **Mostra solo se compilato** | Attiva (spuntata): l'attributo funziona come condizione e la sua riga viene saltata quando il valore è vuoto. Disattivata: è un attributo semplice che viene sempre incluso |
| **Nascondi etichetta** | Invia all'IA solo il valore, senza l'etichetta davanti |
| **Valore di riserva se vuoto** | Testo utilizzato al posto del valore quando il prodotto non ha un valore per questo attributo |
| **Rimuovi** | Rimuove l'attributo dal prompt |

Un attributo in linea ha l'opzione **Mostra solo se compilato** disattivata. La spunti per trasformare l'attributo in una condizione.

![Opzioni di un attributo in linea, con Mostra solo se compilato disattivata](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/22-options-of-an-inline-attribute-with.png)

### Utilizzo di un valore di riserva

Un valore di riserva funziona solo quando **Mostra solo se compilato** è disattivata. Con la condizione attiva, una riga vuota viene comunque saltata, quindi il valore di riserva viene ignorato anche se lo compila.

**Esempio.** Disattiva **Mostra solo se compilato** per SEO Description e inserisce un valore di riserva. Per un prodotto senza descrizione SEO, l'anteprima mostra invece il valore di riserva. Il valore di riserva è evidenziato nell'anteprima, così può distinguerlo dai dati reali del prodotto.

![Valore di riserva mostrato nell'anteprima](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/23-fallback-value-shown-in-the-preview.png)

### Scegliere tra una condizione e un valore di riserva

- Utilizzi una **condizione** quando la riga è inutile senza un valore, ad esempio un materiale o un'istruzione di manutenzione.
- Utilizzi un **valore di riserva** quando l'IA deve ricevere sempre questa riga, ad esempio _Marca: sconosciuta_.
- Non utilizzi né l'una né l'altro per gli attributi che tutti i prodotti possiedono, come il titolo del prodotto.

:::note

**Rimuovi** elimina solo il chip dell'attributo. L'etichetta, ad esempio _Title:_, resta come testo. La elimini Lei stesso, altrimenti l'IA riceverà un'etichetta senza valore.

:::

## 6. Il pannello Attributi

Il pannello Attributi elenca tutti gli attributi del negozio selezionato. Gli attributi già presenti nel prompt sono di colore verde pieno e mostrano un contatore: **SEO Title 1** significa che è utilizzato una volta.

![Attributi utilizzati con contatori](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/24-used-attributes-with-counters.png)

### Tasso di compilazione (densità dei dati)

Il tasso di compilazione è la quota di prodotti dell'integrazione che hanno un valore per un attributo. Il pannello lo mostra in tre modi:

- **Colore della sottolineatura.** Verde significa che l'attributo è compilato per più del 50% dei prodotti. Giallo significa meno del 50%.
- **Intensità della sottolineatura.** La linea diventa più marcata man mano che il tasso di compilazione sale dall'1% al 100%.
- **Tooltip.** Passi il mouse su un attributo per vederne il nome, la chiave tecnica, il tasso di compilazione esatto e un valore di esempio di un prodotto reale.

![Tooltip dell'attributo con tasso di compilazione e valore di esempio](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/25-attribute-tooltip-with-fill-rate-and.png)

Gli attributi con un tasso di compilazione dello 0% sono nascosti. Clicchi su **Mostra N senza dati** per visualizzarli.

:::tip

Per gli attributi con sottolineatura gialla, mantenga attiva l'opzione **Mostra solo se compilato** oppure imposti un valore di riserva. In questo modo anche i prodotti privi di quei dati ricevono un prompt pulito.

:::

### Trovare gli attributi

- **Cerca attributo.** Digiti parte di un nome per filtrare l'elenco.
- **Ordina per.** Ordini per **Più compilati** o per **Nome**. Utilizzi le frecce per passare dall'ordine crescente a quello decrescente.

![Opzioni di Ordina per](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/26-sort-by-options.png)

## 7. Snippet

Gli snippet sono blocchi riutilizzabili di contenuto del prompt. Compaiono come chip viola nel pannello Snippet. Clicchi su uno snippet per inserirlo nel prompt. Uno snippet già presente nel prompt viene mostrato pieno nel pannello.

Ne esistono due tipi:

- **Snippet di sistema**, come Elenco attributi, Elenco categorie e Connettore integrazione. Fozzels li fornisce a tutti. Non è possibile modificarli né eliminarli.
- **I Suoi snippet**, creati con il pulsante **+**. Può modificarli (matita) o eliminarli (cestino).

### Elenco attributi

Inserisce tutti gli attributi compilati del prodotto come righe _Etichetta: valore_. Gli attributi vuoti vengono omessi.

![Blocco Elenco attributi nell'editor](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/27-attribute-list-block-in-the-editor.png)

![Elenco attributi visualizzato nell'anteprima](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/28-attribute-list-rendered-in-the-preview.png)

È un modo rapido per fornire all'IA tutti i dati del prodotto. Tuttavia include tutto, anche campi tecnici come ID, URL di amministrazione, date e valori grezzi come `{"value":159.0,"unit":"CENTIMETERS"}`. Per ottenere testi migliori, scelga Lei stesso gli attributi chiave e utilizzi Elenco attributi per test rapidi. Lo inserisca una sola volta per prompt, altrimenti gli stessi dati vengono inviati due volte.

### Elenco categorie

Inserisce righe di attributi per le categorie a cui appartiene il prodotto. In Shopify si tratta delle collezioni; in altre integrazioni può essere un collegamento diverso. Il blocco è vuoto al momento dell'inserimento e mostra un'intestazione come **Elenco categorie · Collections · 10**.

![Blocco Elenco categorie vuoto](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/29-empty-category-list-block.png)

Clicchi sull'ingranaggio del blocco per configurarlo:

![Impostazioni di Elenco categorie](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/30-category-list-settings.png)

- **Modifica modello.** Scelga gli attributi di categoria da includere, come Nome, URL, Livello o Posizione. L'elenco si costruisce nello stesso modo di uno snippet.
- **Risolvi tramite.** Mostra quale collegamento del prodotto viene utilizzato per trovare le categorie, ad esempio Collections.
- **Numero di categorie.** Il numero massimo di categorie nell'elenco. Un prodotto può appartenere a molte categorie, comprese quelle tecniche, quindi un limite mantiene il prompt breve e mirato.

![Modello di Elenco categorie con attributi selezionati](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/31-category-list-template-with-selected-attributes.png)

I dati delle categorie aiutano l'IA a comprendere meglio il prodotto. Con Nome e URL può anche richiedere link interni a categorie correlate, utili per la SEO.

### Connettore integrazione

Recupera i dati dello stesso prodotto da un altro negozio del Suo account. Ad esempio, un flusso Magento può utilizzare note del fornitore, composizione dei materiali o istruzioni di manutenzione presenti solo nel Suo feed CSV.

- Disponibile solo nei flussi di prodotto e solo quando il Suo account dispone di un secondo negozio.
- Se il prodotto non ha una controparte in quel negozio, il blocco non produce nulla, quindi il prompt resta pulito.

Per configurarlo:

1. Clicchi su **Connettore integrazione** nel pannello Snippet. Si apre la finestra **Connettore integrazione**.

   ![Finestra Connettore integrazione](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/32-integration-connector-window.png)

2. In **Negozio collegato**, scelga l'integrazione, il sito web e il negozio da cui recuperare i dati.

   ![Scelta del negozio collegato](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/33-choosing-the-connected-store.png)

3. Clicchi su **Salva**.

   ![Negozio collegato selezionato](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/34-connected-store-selected.png)

4. Si apre la finestra **Modello del connettore integrazione** con gli attributi del negozio collegato. Aggiunga gli attributi necessari, nello stesso modo di uno snippet: ciascuno diventa una riga di condizione.

   ![Modello del connettore integrazione](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/35-integration-connector-template.png)

5. Clicchi su **Salva**. Il blocco viene aggiunto al Suo prompt.

   ![Modello del connettore integrazione con attributi](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/36-integration-connector-template-with-attributes.png)

:::warning

Fozzels trova il prodotto nel negozio collegato tramite il suo identificativo, ad esempio lo SKU o l'ID. Gli identificativi devono corrispondere in entrambi i negozi. In caso contrario, il prodotto non ha una controparte in quel negozio e il blocco resta vuoto nell'anteprima.

:::

### Creare uno snippet personalizzato

1. Clicchi su **+** nel pannello Snippet. Si apre la finestra **Nuovo snippet**.

   ![Finestra Nuovo snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/37-new-snippet-window.png)

2. Inserisca un **Nome**.
3. Clicchi su un tipo di partenza, ad esempio **Elenco attributi**. Compare nell'editor come segnaposto.
4. Clicchi sugli attributi necessari. Ciascuno viene aggiunto come riga di condizione e il segnaposto viene sostituito dal Suo elenco.
5. Prima di aggiungere l'attributo successivo, posizioni il cursore su una nuova riga. Una nuova riga non viene creata automaticamente.

   ![Nuovo snippet con un elenco di attributi](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/38-new-snippet-with-a-list-of.png)

6. Clicchi su **Salva**. Lo snippet compare nel pannello Snippet.

   ![Snippet creato](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/39-snippet-created.png)

I Suoi snippet sono disponibili in tutti i flussi della stessa integrazione, in tutti i suoi negozi.

### Modificare uno snippet nel prompt

Nel prompt, il Suo snippet è un unico blocco viola con il suo nome.

![Snippet personalizzato nel prompt e nell'anteprima](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/40-custom-snippet-in-the-prompt-and.png)

Clicchi sul relativo ingranaggio:

![Menu dell'ingranaggio dello snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/41-snippet-gear-menu.png)

| Opzione | Cosa succede |
| --- | --- |
| **Modifica snippet (tutti i prompt)** | Apre lo snippet per la modifica. Le modifiche si applicano a ogni prompt che lo utilizza, in tutti i flussi e i negozi dell'integrazione |
| **Converti in testo in linea (solo questo prompt)** | Trasforma lo snippet in normali righe di condizione in questo prompt. Potrà quindi modificare, spostare o eliminare ogni riga. Le successive modifiche allo snippet non avranno più effetto su questo prompt |

![Snippet convertito in righe di condizione in linea](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/42-snippet-converted-to-inline-condition-lines.png)

Mantenga lo snippet quando lo stesso elenco deve restare identico ed essere aggiornato in un unico punto. Lo converta quando un prompt necessita di una propria versione.

:::note

Gli attributi all'interno di uno snippet non vengono conteggiati nei contatori del pannello Attributi.

:::

### Quando uno snippet viene eliminato

Se uno snippet utilizzato nel Suo prompt viene eliminato, il relativo blocco resta nel prompt ma diventa sbiadito e mostra solo un numero al posto del nome, ad esempio **#11**. Non produce nulla, quindi non interrompe la generazione. Elimini il blocco con la relativa **x** oppure lo sostituisca con un altro snippet.

![Blocco sbiadito di uno snippet eliminato](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/43-faded-block-of-a-deleted-snippet.png)

## 8. Anteprima

L'anteprima mostra il prompt finale per un prodotto dell'insieme selezionato, nella lingua del negozio selezionato. Gli attributi vengono sostituiti con i valori del prodotto e le condizioni senza valore vengono omesse. È esattamente ciò che riceve l'IA.

### Intestazione dell'anteprima

- **Nome del prodotto.** Lo clicchi per aprire la pagina del prodotto in Fozzels, con tutti i valori degli attributi e le immagini.
- **Icona del link.** Apre il prodotto sul Suo sito web.
- **SKU o ID.** Quale dei due vede dipende dall'integrazione.
- **Cambia esempio (< >).** Passa al prodotto precedente o successivo, nell'ordine del catalogo.

![Pulsanti Cambia esempio nell'intestazione dell'anteprima](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/44-change-sample-buttons-in-the-preview.png)

### Come si comporta l'anteprima

- **In tempo reale.** Ogni modifica nell'editor compare immediatamente. Non è necessario aggiornare.
- **Sola lettura.** Non è possibile digitare nell'anteprima. Modifichi il prompt nell'editor.
- **Sincronizzata.** Passando il mouse su un attributo o una condizione nell'editor, la riga corrispondente nell'anteprima viene evidenziata. L'anteprima scorre inoltre insieme all'editor, così non si perde in un prompt lungo.

![Passando il mouse su un attributo si evidenzia la relativa riga nell'anteprima](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/45-hovering-an-attribute-highlights-its-line.png)

:::tip

Passi da un esempio all'altro, soprattutto tra prodotti con pochi dati. In questo modo vedrà come si legge il prompt quando alcune condizioni vengono saltate.

:::

### L'istruzione finale

Alla fine di ogni anteprima vedrà: _Non fornire commenti, conteggio delle parole, informazioni o osservazioni sul testo generato nel testo restituito._ Fozzels aggiunge automaticamente questa riga a ogni prompt, in modo che l'IA restituisca solo il contenuto vero e proprio. Non è necessario aggiungerla manualmente.

## 9. Modelli

I modelli Le consentono di riutilizzare un prompt completo in altri flussi. A differenza di uno snippet, un modello è l'intero prompt. I comandi si trovano nella parte inferiore dell'editor.

- **Carica** sostituisce il prompt corrente con un modello salvato. Se il prompt non è vuoto, Le viene prima chiesta una conferma, così non perde il Suo lavoro per errore.
- **Salva come modello** salva il prompt corrente, inclusi attributi, condizioni e snippet, come nuovo modello.

![Conferma prima che un modello sostituisca il prompt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/46-confirmation-before-a-template-replaces-the.png)

## 10. Localizzazione dei nomi degli attributi

I nomi degli attributi seguono la lingua del negozio selezionato, ad esempio `product_name` per en-US e `product_naam` per nl-NL.

- Se un attributo non ha un nome per una lingua, viene utilizzato il nome del negozio predefinito (contrassegnato con `*`).
- Per modificare un nome localizzato, vada a **Impostazioni integrazione → Attributo → Locale**.

I prompt collegano gli attributi tramite la loro chiave tecnica univoca, non tramite il nome. Rinominare un attributo o cambiare la lingua del negozio non compromette il Suo prompt.

## 11. Modificare il prompt con l'Assistente prompt IA

L'Assistente prompt IA può scrivere, ampliare o riscrivere il prompt al posto Suo. Legge il prompt corrente, comprese condizioni, snippet e blocchi.

- Quando gli chiede di **aggiungere** qualcosa, risponde solo con la parte nuova. Ad esempio, se il Suo prompt richiede una descrizione SEO e Lei chiede "aggiungi slug", suggerisce solo il nuovo elemento, per **Aggiungi** o **Al cursore**.
- Quando gli chiede di **modificare** il prompt (migliorarlo o riscriverlo, rimuovere o modificare una riga, oppure aggiungere una riga all'inizio o a metà), risponde con il prompt completo, per **Sostituisci tutto**. Tutto ciò che non ha chiesto di modificare viene mantenuto così com'è, inclusi snippet, condizioni, elenchi di attributi, elenchi di categorie e connettori di integrazione.
- Per ottenere intestazioni, elenchi o HTML nei contenuti generati, basta chiederlo, ad esempio _inizia la descrizione con un'intestazione h2 con il nome del prodotto_. L'assistente lo aggiunge come istruzione a parole, perché il prompt in sé non contiene formattazione.

Per aprirlo, clicchi sul pulsante blu della chat nell'angolo in basso a destra della pagina. Il pannello **Assistente IA** si apre accanto all'editor. Digiti la Sua richiesta, ad esempio _Aiutami a creare un prompt per Description. Usa gli attributi compilati._, e prema **Invio** per inviarla. Utilizzi **Maiusc+Invio** per andare a capo.

L'assistente conosce gli attributi della Sua integrazione e i relativi tassi di compilazione. Costruisce il prompt con attributi e condizioni e spiega le proprie scelte, ad esempio perché un attributo è racchiuso in una condizione.

![Assistente IA con un prompt suggerito](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/47-ai-assistant-with-a-suggested-prompt.png)

### Posizionare un suggerimento

Ogni suggerimento compare nella chat come blocco, disegnato nello stesso modo in cui lo mostra l'editor, con questi pulsanti:

| Pulsante | Funzione |
| --- | --- |
| Copia | Copia il suggerimento in modo che possa incollarlo Lei stesso |
| Aggiungi | Aggiunge il suggerimento alla fine del prompt |
| Al cursore | Inserisce il suggerimento nel punto in cui si trova il cursore nell'editor |
| Sostituisci tutto | Sostituisce l'intero prompt con il suggerimento |

Dopo che ha cliccato su un pulsante, questo diventa verde e viene disattivato per un momento, in modo che lo stesso testo non venga inserito due volte. I pulsanti di posizionamento compaiono solo quando nella pagina è aperto un editor dei prompt. Se un suggerimento non corrisponde al formato dell'editor, viene mostrato solo **Copia**.

### Scegliere quale prompt modificare

Quando una pagina contiene più di un prompt, un menu a discesa sopra il campo di input della chat Le consente di scegliere su quale prompt lavora l'assistente.

- Un suggerimento va sempre al prompt che era selezionato quando ha posto la domanda, anche se in seguito modifica il menu a discesa.
- In una conversazione ripristinata da una sessione precedente, i suggerimenti vanno al prompt principale del flusso.
- Se il prompt a cui appartiene un suggerimento è stato eliminato, il suggerimento viene contrassegnato come non disponibile e non viene scritto altrove.

## Articoli correlati

- [4.3.3 Scrivere prompt efficaci (raccomandazioni)](/content-creation-flows/writing-effective-prompts-recommendations)
- [4.7.3 Tag HTML consentiti per la generazione di testi con l'IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
- [4.9.1 Come creare un flusso di contenuti per le categorie](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels)
