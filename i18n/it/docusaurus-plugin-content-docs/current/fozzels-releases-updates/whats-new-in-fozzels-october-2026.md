---
title: "Novità di Fozzels: ottobre 2026"
sidebar_position: 18
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026
description: >-
  Compili fino a 13 attributi in un solo Flow, imposti regole di qualità
  automatiche con i workflow, crei i prompt in un nuovo editor con anteprima in
  tempo reale e tenga gli errori dell'AI lontani dal Suo negozio con nuove
  protezioni.
keywords:
- flusso di lavoro
---

Questo aggiornamento punta a farLe risparmiare tempo e a darLe più controllo sui Suoi contenuti AI. Ora può compilare fino a 13 attributi in un solo Flow, impostare regole di qualità automatiche con i workflow e creare i prompt in un nuovo editor con anteprima in tempo reale.

Abbiamo aggiunto anche un intero set di protezioni che tengono gli errori dell'AI lontani dal Suo negozio. Ecco tutte le novità e come iniziare a usarle.

## In evidenza

### Compili fino a 13 attributi in un solo Flow

Non Le serve più un Flow separato per ogni attributo. Un solo Flow può ora compilare un attributo principale più fino a 12 attributi aggiuntivi, per esempio una descrizione, una descrizione breve, un meta title e una meta description. Tutti gli attributi vengono generati insieme in un'unica richiesta AI per prodotto, quindi i dati e le immagini del prodotto vengono inviati una sola volta e i testi risultano coerenti tra loro.

![Additional attributes to fill: aggiunga fino a 12 attributi, ciascuno con la propria istruzione](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/01-additional-attributes.png)

Nella Batch List ogni attributo ha una propria colonna, così può controllare tutti i risultati di un prodotto in un'unica riga.

![Batch List con una colonna per ogni attributo generato](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/02-batch-list-columns.png)

**Come usarlo:** apra un Flow, vada a Flow Selection & Prompt e, in Additional attributes to fill, aggiunga gli attributi che Le servono, con un'istruzione per ciascuno. [Legga la guida](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)

### Workflow: regole di qualità automatiche

I workflow controllano e modificano ogni risultato generato prima che arrivi al Suo negozio. Lei imposta una sola volta semplici regole "IF / THEN" e Fozzels le applica a ogni nuovo risultato:

- **Replace text:** sostituisce o rimuove parole e frasi, per esempio per mantenere coerenti i termini del Suo brand.
- **Truncate:** taglia un testo a una lunghezza massima, mantenendo le parole intere.
- **Mark suspicious:** trattiene un risultato per la revisione manuale, con un motivo visibile al Suo team.

![Scelta di un'azione per un blocco del workflow: Truncate, Mark suspicious o Replace text](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/03-workflow-actions.png)

Può collegare più workflow in un Flow e un risultato segnalato non viene mai sincronizzato finché qualcuno non lo controlla.

![Editor di workflow con blocchi IF / THEN collegati](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/04-workflow-editor.png)

**Come usarlo:** vada su Home → Workflows, crei un workflow, quindi lo assegni a un Flow nel passaggio Automation. [Legga la guida](/content-creation-flows/workflows-lesson-1-getting-started/)

### Un nuovo editor di prompt con anteprima in tempo reale

Creare un prompt ora è molto più semplice. Attributi e condizioni appaiono come blocchi chiari e l'anteprima in tempo reale mostra il prompt esatto per un prodotto reale mentre scrive, quindi non deve più salvare e aprire un'anteprima per controllarlo. Digiti / o trascini un attributo dal pannello per aggiungere dati del prodotto.

Ha bisogno di aiuto? Chieda a Jane, il nostro assistente AI: può scrivere e modificare i prompt per Lei direttamente nell'editor. [Legga la guida](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)

![Il nuovo editor di prompt con anteprima in tempo reale, snippet e Jane che inserisce un prompt già pronto](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/05-prompt-editor.png)

### Snippet di prompt riutilizzabili

Salvi le parti dei Suoi prompt che usa in molti Flow, come il tono di voce del Suo brand o un elenco di attributi raggruppati per argomento. Aggiunga uno snippet a qualsiasi prompt con un clic. Quando aggiorna uno snippet, vengono aggiornati anche tutti i Flow che lo usano, quindi non deve mai modificare i Flow uno per uno.

### Testi di categoria che conoscono i propri prodotti

I Flow di categoria possono ora includere nel prompt i prodotti della categoria, con nomi, link, slug e altri attributi. Le descrizioni delle Sue categorie possono citare prodotti reali e includere link funzionanti alle pagine prodotto, un grande vantaggio per la SEO che aiuta i clienti a trovare ciò che cercano.

### Nuovi modelli AI: GPT-6 Astra e Claude Opus 5.5

I modelli più recenti e più potenti sono ora disponibili nei Suoi Flow. GPT-6 Astra supporta anche la ricerca web, anche nella Sandbox, quindi può aggiungere informazioni utili che non sono nel Suo catalogo. I modelli premium costano di più per ogni generazione: il prezzo è visibile su ogni riquadro del modello nel passaggio AI Configuration.

![Claude Opus 5.5](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/06-claude-opus-5-5.png)

## Contenuti AI più sicuri

I modelli AI a volte inventano fatti, ipotizzano l'aspetto di un prodotto o lasciano note nel testo. Abbiamo aggiunto protezioni a ogni passaggio, così nel Suo negozio arrivano solo contenuti affidabili.

- **Soglia di confidenza.** La imposti per ogni Flow nel passaggio Automation, da 0.1 a 1.0. L'AI indica quanto è sicura di ogni valore e tutto ciò che è sotto la Sua soglia attende la Sua revisione invece di essere inviato automaticamente. La lasci vuota per disattivarla.

    ![Soglia di confidenza nel passaggio Automation](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/07-confidence-threshold.png)

- **Rilevamento più intelligente dei contenuti sospetti.** L'elenco predefinito di parole e frasi sospette è più lungo e i nuovi schemi integrati riconoscono la forma tipica di un commento dell'AI, come "Here is the…" o "Final check", anche in formulazioni che il modello non ha mai usato prima. Nelle impostazioni dell'integrazione può attivare o disattivare gli schemi e aggiungere le Sue parole.

    ![Parole sospette e schemi integrati nelle impostazioni dell'integrazione](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/08-suspicious-patterns.png)

- **Un controllo sulle funzioni disattivate.** Quando salva un Flow, Fozzels verifica se il Suo prompt richiede una funzione disattivata, per esempio la ricerca web o le immagini del prodotto. Un avviso Le indica che cosa manca, con un pulsante per aprire AI Configuration o chiedere a Jane.

    ![Avviso quando il Suo prompt richiede la ricerca web o le immagini del prodotto, che sono disattivate](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/09-disabled-features-warning.png)

- **Niente ipotesi senza immagini.** Se il Suo Flow usa le immagini del prodotto ma un prodotto non ne ha, o non possono essere lette, quel prodotto viene saltato invece di lasciare che l'AI faccia ipotesi.
- **Solo modelli affidabili.** Abbiamo rimosso i modelli obsoleti e quelli che potevano lasciare il proprio ragionamento nei Suoi testi.
- **Istruzioni integrate più rigorose.** Ogni Flow include ora istruzioni generali più severe, che mantengono l'AI aderente ai fatti e al formato richiesto.
- **Ogni Flow richiede un modello AI.** Un Flow senza modello non può più essere salvato né avviato, così nulla fallisce in silenzio.
- **Messaggi di errore chiari.** Se una generazione non riesce, ora vede il motivo effettivo invece di "Unknown error occurred", così sa che cosa correggere.

## Flow di immagini

- **Duplicare un Flow di immagini.** Copi un Flow di immagini esistente con tutti i suoi preset, scene, logo e prompt e modifichi solo ciò che è diverso.
- **Un'immagine prodotto extra per l'intero Flow.** In Additional product image for the whole flow scelga la posizione di un'immagine, per esempio la 2ª immagine. Fozzels la aggiunge a ogni prodotto oltre all'immagine principale, così l'AI vede più angolazioni e riproduce con maggiore precisione taglio, stampa e texture. I prodotti con meno immagini usano solo quella principale.

    ![Additional product image for the whole flow: scelga la posizione dell'immagine](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/10-additional-product-image.png)

- **Run Now rispetta il Suo limite giornaliero.** Le esecuzioni manuali ora contano nel numero di prodotti al giorno del Flow. Se il limite è già stato raggiunto, vedrà un avviso con le azioni possibili: aumentare il valore nel passaggio Automation oppure eseguire il Flow più tardi. Le generazioni di prova gratuite nell'anteprima non vengono conteggiate.

## Catalogo e Batch List

- **Aggiornare i prodotti selezionati.** Ha modificato alcuni prodotti nel Suo negozio? Riacquisisca solo quei prodotti invece dell'intero catalogo e generi subito nuovi contenuti.

    ![Actions → Repull Selected Products in Manage Products](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/11-repull-selected-products.png)

- **Set di filtri salvati.** Salvi una volta una combinazione di filtri, per esempio "Women - empty descriptions", tramite Filter set → Save as new. La applichi con un clic nelle integrazioni, nel catalogo e nei Flow e aggiunga condizioni extra quando serve.

    ![Salvi una combinazione di filtri tramite Filter set → Save as new](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/12-filter-set-save.png)

    ![Un set di filtri salvato, pronto da applicare con un clic](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/13-filter-set-saved.png)

- **Scelga le colonne della Batch List.** Ce lo avete chiesto e l'abbiamo realizzato. Imposti qualsiasi attributo in modo che sia sempre visibile nella Batch List con una sola casella nelle sue impostazioni e scelga quali attributi del prompt mostrare per ogni Flow in Column visibility.

    ![Column visibility nella Batch List](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/14-column-visibility.png)

- **Report più completi.** Aggiunga ai report esportati colonne extra con gli attributi generati, pronti da condividere con il Suo team.
- **Revisione più fluida.** Il popup di revisione ora scorre automaticamente.
- **Attivazione dei Flow più chiara.** Quando attiva un Flow, Fozzels mostra esattamente che cosa verrà attivato e quali altri Flow riprenderanno.

## Jane e il Suo account

- **Jane conosce il nuovo editor.** Il nostro assistente AI ora funziona con il nuovo editor di prompt e con i Flow multi-attributo. Le chieda di leggere, scrivere o aggiornare i Suoi prompt.
- **Email separata per la contabilità.** Invii fatture e notifiche di saldo al Suo indirizzo di contabilità o amministrazione invece che all'email di accesso.
- **Fuso orario in base al Paese.** I nuovi account ricevono automaticamente il fuso orario del loro Paese, così le importazioni vengono eseguite all'ora locale corretta.
- **Aiuto per la connessione.** Se un'integrazione non riesce a connettersi, per esempio a causa di un firewall, Fozzels Le propone un link a una pagina del Centro assistenza che spiega che cosa consentire.

## Aggiornamenti delle integrazioni

**Magento 2**

- **Contenuti di blog e CMS (primo passo).** Fozzels ora importa i contenuti di blog e CMS con i relativi attributi e li mostra in un catalogo e in una pagina brand separati. La generazione di contenuti AI per blog e pagine CMS arriverà in un prossimo aggiornamento.

    ![Manage Blog: pagine CMS di Magento 2 importate](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/15-manage-blog.png)

- **Filtro per stato e quantità di scorte**, per concentrarsi sui prodotti disponibili, per esempio solo i prodotti con più di 10 articoli in magazzino. Attivi Pull stock status e Pull stock quantity nelle impostazioni dell'integrazione.

    ![Pull stock status e stock quantity nelle impostazioni dell'integrazione Magento 2](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/16-stock-settings.png)

- **Sincronizzazione delle immagini con All Store Views.** I risultati dei Flow di immagini possono ora essere sincronizzati con l'ambito All Store Views, così una sola sincronizzazione aggiorna ogni store view.

**WooCommerce**

- **Testi alternativi per le immagini dei prodotti**, per una migliore SEO e accessibilità.

**Salesforce**

- **Filtro delle scorte e condizioni di pull** a livello di integrazione, per importare solo i prodotti che Le servono.

**CSV / Raw File**

- **File più grandi** ora supportati grazie alla paginazione.

**BizzLayer**

- **I prodotti rimossi dal Suo feed** non vengono più usati per la generazione di contenuti.

## Correzioni

- I caratteri speciali come & nei nomi dei prodotti ora vengono visualizzati correttamente nel Suo negozio.
- Il conteggio dei prodotti nei Flow ora corrisponde alla Sua selezione effettiva.
- L'avanzamento della sincronizzazione dei Flow non conta più i prodotti eliminati.

    ![Avanzamento del Flow con i prodotti rimossi dal catalogo indicati separatamente](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/17-flow-progress.png)

- I filtri nei Flow meno recenti ora passano correttamente i prodotti alla Batch List.
- L'anteprima del prompt e del prodotto si aggiorna automaticamente quando modifica i filtri del Flow.
- I Flow di immagini attivi non risultano più inattivi.
- La generazione di immagini non si interrompe più con immagini grandi o non disponibili.

Ha domande su uno di questi aggiornamenti? Chieda a Jane nell'app.
