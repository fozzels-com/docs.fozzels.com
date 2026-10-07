---
id: '103000367976'
title: "4.1.2. Creazione di un nuovo flusso di contenuti e impostazioni iniziali."
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Il Content Flow è il cuore dell'automazione in Fozzels. Indica a Fozzels su
  quali prodotti lavorare, quali attributi compilare, quale modello di IA usare
  e quali istruzioni dargli.
---

Il Content Flow è il cuore dell'automazione in Fozzels. Indica a Fozzels su quali prodotti lavorare, quali attributi compilare, quale modello di IA usare e quali istruzioni dargli. Fozzels genera, aggiorna e sincronizza poi i contenuti per i Suoi prodotti.

Un Flow può compilare più attributi contemporaneamente. Quando crea il Flow, sceglie un **attributo principale** e in seguito può aggiungerne fino a 12. Tutti vengono generati insieme in un'unica richiesta di IA per prodotto.

Questa guida La accompagna attraverso tutti e quattro i passaggi di un Flow, usando un solo esempio: un Flow che scrive una **Description**, una **Short Description** e una **Meta Description** per i prodotti da donna che hanno foto ma non ancora una descrizione.

## 1\. Creazione di un nuovo Flow

1.  Nel menu laterale, sotto **AI Flows**, clicchi su **Content Flows**. Si apre l'elenco dei Flow.

2.  In alto, controlli l'integrazione, il sito web e il negozio. Se ne ha più di uno, scelga quello che Le serve dall'elenco a discesa. Se ne ha uno solo, è già selezionato.

3.  Clicchi su **New Product Flow** nell'angolo in alto a destra.
    ![Elenco dei Flow con il pulsante New Product Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-01-new-product-flow-button.png)

4.  Inserisca un **Name** per il Flow, ad esempio _Il mio primo content flow_.

5.  Sotto **Entity Type**, scelga **Product**. Per generare contenuti per le categorie, consulti [4.9.1 Come creare un Content Flow per le categorie](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels/).
    ![Create New Product Flow: scelta del tipo di entità](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-02-entity-type.png)

6.  Sotto **Attribute**, scelga l'**attributo principale** che il Flow compilerà. Può digitare per cercare, ad esempio _description_.
    ![Ricerca dell'attributo principale](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-03-main-attribute-search.png)

7.  Clicchi su **Save**.
    ![Modulo del nuovo Flow pronto per il salvataggio](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-04-new-flow-save.png)

:::tip
**Scelga come principale l'attributo più grande**, ad esempio la descrizione completa. Nei risultati, l'attributo principale ha l'editor completo con anteprima, mentre gli attributi aggiuntivi vengono mostrati sotto di esso.
:::

:::note
**Vuole generare i testi alternativi delle immagini?** Scelga **Media Gallery** come attributo. Consulti [4.3.2.a Testi alternativi per Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/) e [4.3.2.b Testi alternativi per NextChapter](/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/).
:::

## 2\. AI Configuration

Dopo il salvataggio, Fozzels apre il passaggio **AI Configuration**. D'ora in poi, nella parte superiore della pagina compaiono l'interruttore **Active flow** e il nome del Flow. Clicchi sulla matita accanto al nome per rinominare il Flow.

1.  Sotto **AI Provider Selection**, scelga il provider: OpenAI | ChatGPT, Anthropic, xAI o Google | Gemini.
    ![Scelta del provider di IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-05-ai-provider.png)

2.  Sotto **Model**, clicchi su un riquadro del modello. Ogni riquadro mostra il prezzo per 1K token di input e output, il prezzo di una ricerca web, se il modello è in grado di leggere le immagini dei prodotti e se supporta la ricerca web. Consulti [4.2.1 Configurazione dell'IA](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features/).

3.  Facoltativo: spunti **Enable Web Search** se il Suo prompt chiede all'IA di cercare informazioni online, ad esempio sulla pagina del Suo prodotto.

4.  Facoltativo: sotto **Image Usage**, imposti l'**Image count** (fino a 5). L'IA analizza così quel numero di immagini del prodotto, nell'ordine in cui arrivano dalla Sua integrazione. Più immagini consumano più token. Lo lasci vuoto per usare solo il testo del prompt.

5.  Mantenga attivo **Enable Image Resize**. Fozzels ridimensiona così le immagini più grandi di 2 MB che non sono in formato JPEG oppure che superano i 2048 pixel in larghezza o altezza. Consulti [4.2.2 Ottimizzazione delle immagini](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/).
    ![Riquadri dei modelli, ricerca web, uso delle immagini e ridimensionamento delle immagini](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-06-model-and-image-settings.png)

6.  Facoltativo: scelga uno o più **Text styles** (ad esempio _Creativo_, _Informativo_) e **Text tones** (ad esempio _Ispirazionale_).
    ![Stili e toni del testo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-07-text-styles-tones.png)

7.  Clicchi su **Save**, poi su **Next step**.

:::note
**Image Resize costa una piccola somma per immagine, ma disattivarlo non sempre evita il ridimensionamento.** Le immagini molto grandi vengono comunque ridimensionate e addebitate automaticamente, per ogni provider di IA. Senza questo passaggio, la generazione fallirebbe con un errore, oppure l'IA scriverebbe nei Suoi contenuti qualcosa come "Non riesco a vedere l'immagine".
:::

Può tornare a queste impostazioni in qualsiasi momento, anche dopo che il Flow ha iniziato a generare.

## 3\. Flow Selection & Prompt

### 3.1 Controllo dell'attributo principale e del suo formato

In alto vede l'attributo principale scelto nel passaggio 1.

Decida se il risultato deve contenere HTML. Clicchi sul pulsante a forma di occhio accanto all'attributo. Nella finestra **Edit attribute**, tolga la spunta a **Allow HTML** se Le serve testo semplice senza markup, poi clicchi su **Save**. Consulti [4.7.3 Tag HTML consentiti](/content-creation-flows/allowed-html-tags-for-ai-text-generation/).

![Finestra Edit attribute con Allow HTML](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-08-edit-attribute-allow-html.png)

:::warning
Gli altri campi di questa finestra sono impostazioni tecniche della Sua integrazione. Non li modifichi se non sa a cosa servono. Se ha bisogno di aiuto, contatti il supporto.
:::

### 3.2 Selezione dei prodotti

Usi **Filter & Select Products** per scegliere i prodotti su cui lavora il Flow. Il numero di prodotti selezionati è mostrato nel titolo del blocco e nella scheda del passaggio 3.

![Passaggio Flow Selection & Prompt: attributo principale e filtri](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-09-filter-select-products.png)

- Clicchi su **Add condition** per aggiungere un filtro: scelga un attributo, un operatore e un valore.
- Scelga **All conditions** (tutte le condizioni devono essere soddisfatte) oppure **Any condition** (ne basta una).
- Clicchi su **Add condition group** per combinare le condizioni in modi più complessi.

**Esempio.** Per scrivere le descrizioni dei prodotti da donna che hanno foto e non hanno ancora una descrizione:

| Attributo | Operatore | Valore |
| --- | --- | --- |
| Categories | is one of | Women |
| Media Gallery | has an image | Yes |
| Description | is empty | |

![Esempio di filtro: prodotti da donna con immagini e senza descrizione](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-10-filter-example.png)

:::warning
Se non imposta alcuna condizione, il Flow usa **tutti** i prodotti del negozio.
:::

:::tip
Per evitare di sovrascrivere contenuti già presenti, aggiunga un filtro come **Description is empty** per l'attributo che genera.
:::

Per tutte le opzioni di filtro, consulti [Filtraggio dei prodotti per la generazione di contenuti](/data-import-and-quality/product-filtering-for-content-generation/).

#### Salvi i filtri per riutilizzarli

Se prevede altri Flow per gli stessi prodotti, ad esempio descrizioni, meta tag e testi alternativi, salvi i filtri una sola volta:

1.  Clicchi su **Filter set → Save as new**.
    ![Menu Filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-11-filter-set-menu.png)

2.  Inserisca un nome, ad esempio _Donna - descrizioni vuote_, e clicchi su **Save**.
    ![Salvataggio di un filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-12-filter-set-save.png)

3.  Il set compare ora nel menu **Filter set**. Clicchi su di esso per applicarlo, oppure sul cestino per eliminarlo.
    ![Filter set salvato nel menu](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-13-filter-set-saved.png)

I filter set salvati sono disponibili ovunque filtri i prodotti: nelle integrazioni, nel catalogo e nei Flow. Può anche combinare un set salvato con condizioni aggiuntive.

### 3.3 Scrittura del prompt

Nella sezione **Prompt**, scriva le istruzioni per l'IA e aggiunga i dati del prodotto:

- Digiti `/` nell'editor, oppure clicchi o trascini un attributo dal pannello **Attributes**. Ogni attributo viene aggiunto come riga di condizione, quindi viene saltato per i prodotti in cui è vuoto.
- Usi gli **Snippets**, come **Attribute list**, per aggiungere con un clic un blocco già pronto di dati del prodotto.
- Controlli la **Preview** a destra. Si aggiorna mentre scrive e mostra il prompt finale per un prodotto reale. Usi **&lt; &gt;** per controllare alcuni prodotti.
- Per riutilizzare un prompt in altri Flow, usi **Save as template** e **Load**.

![Editor del prompt con Preview in tempo reale](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-14-prompt-editor-preview.png)

Per la guida completa, consulti [4.3.2 Configurazione e utilizzo del prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

:::warning
Non usi come input nel prompt gli attributi che sta generando. Ad esempio, se il Flow scrive la Description, non inserisca l'attributo Description nel prompt. In un Flow con più attributi, questo vale per ciascuno di essi. Consulti [Recursion Detection](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation/).
:::

#### Controllo delle funzioni disattivate

Quando salva, Fozzels verifica se il Suo prompt richiede una funzione disattivata in questo Flow. Ad esempio:

- il prompt chiede all'IA di analizzare le immagini del prodotto, ma non è impostato alcun **Image count**;
- il prompt chiede all'IA di leggere la pagina del Suo prodotto, ma **Enable Web Search** è disattivato.

Sopra i passaggi compare allora un avviso. Clicchi su **Open AI Configuration** per attivare la funzione, oppure su **Ask Jane** per ricevere aiuto dall'assistente IA.

![Avviso sulle funzioni disattivate per questo Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-15-disabled-features-warning.png)

### 3.4 Compilazione di altri attributi nello stesso Flow

Sotto il prompt, in **Additional attributes to fill**, può aggiungere fino a 12 altri attributi. Tutti gli attributi del Flow vengono generati insieme in un'unica richiesta di IA per prodotto, quindi i dati e le immagini del prodotto vengono inviati una sola volta.

1.  Scelga un attributo nell'elenco a discesa e clicchi su **Add attribute**.
    ![Aggiunta di un attributo aggiuntivo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-16-additional-attribute-add.png)

2.  In **Instruction for this attribute**, scriva cosa deve produrre l'IA. Il campo funziona come l'editor del prompt principale, con la Preview, il pannello Attributes e gli Snippets. Quando l'istruzione è compilata, la riga mostra **Prompt set**.
    ![Istruzione per Short Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-17-instruction-short-description.png)

3.  Clicchi sull'occhio nella riga per aprire le impostazioni dell'attributo. Per i meta title e le meta description, tolga la spunta a **Allow HTML**, perché devono essere testo semplice.
    ![Istruzione per Meta Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-18-instruction-meta-description.png)

4.  Ripeta l'operazione per ogni attributo, poi salvi.

:::tip
Indichi per ogni attributo un limite di lunghezza chiaro, ad esempio _2–3 frasi, 35–60 parole_ per una descrizione breve oppure _120–160 caratteri, mai più di 160_ per una meta description.
:::

### 3.5 Test del prompt

Prima di avviare il Flow, provi cosa genera l'IA su alcuni prodotti.

1.  In fondo al passaggio, clicchi su **Save and Preview**.
    ![Pulsante Save and Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-19-save-and-preview.png)

2.  Si apre una tabella con i prodotti selezionati. Clicchi su una cella nella colonna **Prompt** per vedere il prompt completo che riceverà l'IA. In un Flow con più attributi, ogni attributo è elencato sotto un proprio titolo, con la propria istruzione. Clicchi su **Copy to Clipboard** per copiarlo.
    ![Tabella di generazione di prova](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-20-test-generation-table.png)
    ![Prompt completo inviato all'IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-21-test-generation-prompt.png)

3.  Clicchi su **Generate Now** nella riga di un prodotto. Il risultato si apre in una finestra, con ogni attributo sotto un proprio titolo. Clicchi su **Show HTML** per vedere il markup.
    ![Risultato della generazione di prova](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-22-test-generation-result.png)

:::info
Una generazione di prova è **gratuita** e **non** avvia il Flow. Il risultato non viene salvato: se desidera conservarlo, clicchi su **Copy to Clipboard** prima di chiudere la finestra.
:::

Modifichi il prompt e provi di nuovo finché non è soddisfatto del risultato. Poi clicchi su **Next step**.

## 4\. Automation

![Impostazioni di automazione](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-23-automation-settings.png)

| Impostazione | Cosa fa |
| --- | --- |
| **Amount of products to create content for per day** | Quanti prodotti il Flow elabora ogni giorno, fino a 500 |
| **Fully automatic** | I contenuti generati vengono confermati e inviati subito al Suo negozio, senza revisione manuale. I contenuti segnalati come sospetti vengono comunque trattenuti per la revisione. Funziona solo quando il Flow è attivo |
| **Confidence threshold** | Facoltativo, da 0.1 a 1.0. L'IA indica quanto è sicura di ogni valore. I valori sotto la soglia vengono trattenuti per la revisione invece di essere inviati automaticamente. Più alta è la soglia, più contenuti dovrà rivedere. Lo lasci vuoto per disattivarlo. Utile insieme a **Fully automatic** |
| **Automatically create a new text when an attribute of a product changes in your store** | Rigenera i contenuti quando nel Suo negozio cambia un attributo usato nel prompt |
| **Prevent double content generation with other Flows** | Impedisce che un prodotto riceva nuovi contenuti se un altro Flow li ha già generati. Scelga **Inherit** (usa le Sue impostazioni globali), **Override** (imposta un periodo solo per questo Flow) oppure **Turn Off**. Consulti [4.4.1 Prevenzione della generazione sovrapposta di contenuti](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/) |
| **Workflows** | Azioni aggiuntive facoltative per questo Flow. I Workflow vengono eseguiti dall'alto verso il basso; li trascini o usi le frecce per cambiare l'ordine. Consulti [4.11.1 Workflow](/content-creation-flows/workflows-lesson-1-getting-started/) |

:::tip
La maggior parte degli utenti inizia con **Fully automatic** disattivato e rivede a mano i primi risultati.
:::

### Avvio del Flow

1.  Attivi **Active flow** nella parte superiore della pagina. I pulsanti di avvio diventano disponibili solo per un Flow attivo.

2.  Scelga come iniziare:

| Opzione | Cosa succede |
| --- | --- |
| **Plan & Close** | Il Flow parte il giorno successivo, dopo l'aggiornamento notturno del catalogo. Elabora poi ogni giorno l'**Amount of products per day** fino al completamento di tutti i prodotti selezionati |
| **Run Now** (freccia accanto a **Plan & Close**) | Il Flow elabora subito i primi **10 prodotti**. Poi continua secondo la pianificazione giornaliera |

![Prevenzione dei duplicati, workflow e pulsanti di avvio](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-24-launch-buttons.png)

Un Flow attivo rileva anche i nuovi prodotti che corrispondono ai suoi filtri dopo ogni aggiornamento notturno. Per una checklist completa prima dell'avvio, consulti [4.1.2.a Come configurare i Content Flow di IA automatizzati](/content-creation-flows/how-to-set-up-automated-ai-content-flows/).

## 5\. Revisione dei risultati nella Batch List

1.  Clicchi su **Batch List** in fondo a qualsiasi passaggio del Flow. In un Flow con più attributi, ogni attributo ha una propria colonna, quindi vede tutti i risultati di un prodotto in un'unica riga.
    ![Batch List con una colonna per attributo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-25-batch-list.png)

2.  Clicchi su un valore generato qualsiasi per aprire la finestra **Edit completion result**:
    - L'attributo principale è in alto, con **Enable Editor**, **Show HTML** e un'anteprima.
    - Gli altri attributi sono elencati sotto, in **Other attributes filled by this Flow**. Espanda ciascuno per leggerlo e modificarlo. Gli attributi select e multiselect si modificano con un elenco a discesa.

    ![Finestra Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-26-edit-completion-result.png)

3.  Modifichi il testo, se necessario, e clicchi su **Save**.

4.  Attivi **Batch Confirmed**, poi clicchi su **Save & Sync** per inviare i contenuti al Suo negozio. Finché il risultato non è confermato, la sincronizzazione è disattivata. In un Flow **Fully automatic**, i risultati vengono confermati automaticamente.

Altri pulsanti nella finestra:

- **Regenerate** genera di nuovo i contenuti. Rigenera sempre **tutti** gli attributi del Flow insieme.
- **Show Revisions** mostra le versioni precedenti. Consulti [4.8.1 Cronologia di completamento dei contenuti](/content-creation-flows/content-completion-history-revision-history-version-control/).
- **Copy to Clipboard** copia i contenuti.

### Contenuti sospetti

Se un risultato non supera i controlli di qualità di Fozzels, le parti problematiche vengono evidenziate in giallo e il risultato non viene sincronizzato. Può correggere a mano le parti evidenziate e salvare, senza alcun costo, oppure cliccare su **Regenerate** per generare di nuovo tutti gli attributi. Consulti [4.7.4 Parole e frasi sospette](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

Per saperne di più sulla revisione e sulla sincronizzazione dei risultati, consulti [4.7.1 Monitoraggio dei risultati generati](/content-creation-flows/tracking-of-the-generated-results-dashboard/) e [4.7.5 Modifica dei contenuti nella Batch List](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/).
