---
id: '103000367976'
title: '4.1.2. Creare un Content Flow: i sei passaggi guidati'
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Come configurare un Content Flow in sei passaggi guidati: scegliere il negozio
  e i campi, costruire il prompt con i blocchi, impostare ogni campo, fare un
  test su prodotti reali e avviare il Flow. Inoltre: la pagina del Flow, la
  revisione dei contenuti generati e il Brand Profile.
keywords:
- flusso di contenuti
---

Un Content Flow indica a Fozzels su quali prodotti lavorare, quali campi compilare, quale modello di IA usare e quali istruzioni dargli. Fozzels poi genera i contenuti, li aggiorna e li invia al Suo negozio.

Un Content Flow si configura in sei passaggi guidati. Il prompt si costruisce con blocchi che Lei attiva e disattiva, e la voce del Suo brand è in un unico posto: il [Brand Profile](#brand-profile). Questo articolo spiega come funziona ogni passaggio, dalla scelta del negozio alla generazione di contenuti per molti prodotti.

## Sei passaggi per un Flow completo

1. **Store.** Scelga l'integrazione, il sito web e la store view per cui genera i contenuti.
2. **What and with what?** Scelga i campi da generare e veda quanti prodotti hanno già un valore in questi campi. In questo passaggio sceglie anche i prodotti.
3. **Enrich the text.** Scelga un modello di IA e costruisca un unico prompt comune con i blocchi: chi scrive, per chi, con quale tono e da dove vengono i fatti.
4. **Fields.** Imposti lunghezza, struttura e formato di ogni campo.
5. **Test.** Generi testi per prodotti reali e guardi i punteggi prima di generare contenuti per molti prodotti.
6. **Launch.** Imposti quanti prodotti Fozzels elabora ogni giorno e se Lei approva i testi prima che Fozzels li pubblichi.

I sei passaggi sono sempre sul lato sinistro della finestra del Flow. Un passaggio completato è verde, il passaggio attuale è blu. Il pulsante **Next** diventa attivo solo quando ha completato tutte le impostazioni obbligatorie del passaggio attuale.

:::tip
Compili il Suo [Brand Profile](#brand-profile) prima di creare il primo Flow. Così ogni nuovo Flow parte con la voce del Suo brand.
:::

### Passaggio 1. Store

Scelga tre cose:

- **Integration**: il Suo negozio online o PIM.
- **Website**.
- **Store view**: la lingua dei testi.

Tutte le impostazioni dei passaggi successivi valgono per questa combinazione.

Sotto i campi, Fozzels mostra la Sua selezione e quanti prodotti contiene. Se il negozio che Le serve non è nell'elenco, lo colleghi prima in **Integrations**.

![Passaggio 1: scelta dell'integrazione, del sito web e della store view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-01-step-1-store.png)

### Passaggio 2. What and with what?

Scelga uno o più tipi di contenuto. Ogni scheda mostra la percentuale dei Suoi prodotti che ha già un valore in quel campo. Così vede subito dove sono le lacune più grandi.

- **Title**: nomi di prodotto chiari, che gli acquirenti trovano facilmente.
- **Description**: il testo completo che vende il prodotto.
- **SEO Title**: il titolo che mostra Google.
- **SEO Description**: il breve testo nei risultati di ricerca che invoglia a cliccare.
- **Other attribute**: un attributo del Suo negozio, per esempio colore, materiale o dimensioni.

![Passaggio 2: tipi di contenuto con il tasso di compilazione](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-02-step-2-content-types.png)

Nella finestra **Add another attribute** può cercare un attributo per nome o per codice. Gli attributi con il tasso di compilazione più alto sono in cima. Il tipo dell'attributo viene dal Suo negozio: un numero, un valore da un elenco o un testo. Così l'IA scrive il tipo di valore corretto.

![La finestra Add another attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-03-add-another-attribute.png)

I testi ALT delle immagini hanno una modalità di Flow propria. Un Flow di questo tipo crea solo testi ALT e ha regole proprie. Per maggiori informazioni, consulti [Generazione di testi alternativi per le immagini in Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/).

Tutti i campi scelti compaiono nel blocco **You are creating**. Il primo campo è la base (**BASE**). Gli altri campi partono da questa base. Per cambiare l'ordine, trascini un campo con la maniglia a sinistra. Le istruzioni per ogni campo le dà nel passaggio 3.

Più in basso, in questo passaggio, sceglie i prodotti per il Flow.

![Il blocco You are creating con i campi scelti](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-04-you-are-creating.png)

### Passaggio 3. Enrich the text

In questo passaggio costruisce il prompt: l'istruzione che l'IA riceve per ogni prodotto. Il prompt è fatto di blocchi. Prima imposta come suona il testo. Poi imposta quali fonti usa l'IA e che cosa deve esserci nel testo. Sotto i blocchi vede il prompt.

Quando apre il passaggio, Fozzels prepara una proposta per ogni campo. Fozzels imposta la base: la struttura, la lingua e il tipo corretto per ogni campo. Clicchi su **Load brand profile** per caricare un profilo salvato, oppure su **Save as brand profile** per salvare le impostazioni di questo Flow come nuovo profilo.

**Quale modello di IA?** Scelga prima il provider, poi il modello. Il modello determina la qualità e il prezzo dei Suoi testi. Per ogni modello vede il costo per 1.000 token: per il testo che l'IA legge (input) e per il testo che scrive (output). Etichette come **Recommended**, **Balanced** o **Fast & low cost** La aiutano a scegliere. Il modello determina anche se i blocchi **Look at photos** e **Search the internet** sono disponibili. Può cambiare il modello in qualsiasi momento, senza configurare di nuovo il Flow.

![Passaggio 3: il prompt di base e la scelta del modello di IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-05-step-3-ai-model.png)

**Come suona il testo.** Queste impostazioni valgono per tutte le sezioni del testo: chi scrive, per chi, con quale tono e quanto è lungo. Nel blocco **Role of the AI**, scelga un ruolo con un clic. Per cambiare il nome e la descrizione di un ruolo, clicchi sull'icona della matita. La descrizione dice chi scrive, con quale competenza e con quale obiettivo.

![Modifica di un ruolo: nome e descrizione](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-06-edit-role.png)

Clicchi su **Make default** per usare l'opzione scelta in tutti i nuovi Flow. L'opzione riceve allora una stella e l'etichetta "Default for new flows", e accanto compare un link al Brand Profile. Per annullare, clicchi su **Remove from defaults**. **Make default** funziona allo stesso modo per il modello, il pubblico, il tono e gli altri blocchi.

![Un ruolo con l'etichetta Default for new flows](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-07-role-default.png)

I blocchi **Target audience** e **Tone of voice** funzionano come il ruolo. Li attivi con l'interruttore. Poi scelga un'opzione salvata con un clic, oppure ne crei una nuova. Sotto i pulsanti vede la descrizione completa che riceve l'IA. Se non sceglie un tono, l'IA scrive in uno stile neutro e informativo.

![I blocchi Target audience e Tone of voice in un Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-08-audience-tone.png)

#### Principi di neuromarketing

I quattro principi sono **Processing fluency**, **Simulation**, **Congruence** e **Trust**. Vengono da una ricerca di neuromarketing con l'Università Erasmus di Rotterdam. Attivi i principi che Le servono e l'IA li usa in ogni testo. La sezione [Brand Profile](#neuromarketing-principles-in-the-brand-profile) spiega che cosa fa ogni principio.

Non sa quali principi usare? Clicchi su **Fozzels suggestions**. L'IA di Fozzels esamina i prodotti che ha scelto e Le dice quali principi sono adatti. Il principio consigliato riceve l'etichetta "advice". Clicchi su **Apply advice** per usarlo. Questa funzione consuma token.

![Principi di neuromarketing con il consiglio di Fozzels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-09-neuromarketing.png)

#### Da dove vengono i fatti

Qui imposta le fonti che l'IA può usare: gli attributi del Suo sistema, le informazioni nelle foto e le informazioni su internet. L'IA usa solo le fonti che Lei attiva. Non inventa fatti.

**Attributi del Suo negozio.** Gli attributi del Suo negozio online, ERP o PIM che l'IA usa come input. Fozzels sceglie già gli attributi con un tasso di compilazione alto. Clicchi sulla croce per togliere un attributo e aggiunga quelli che mancano. La percentuale mostra per quanti prodotti il campo ha un valore. La barra colorata mostra se il campo è compilato, compilato in parte o vuoto. Fozzels salta i campi vuoti.

![Il blocco Attributes from your store](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-10-attributes-from-store.png)

**Look at photos.** Le Sue foto possono mostrare informazioni che non sono nei Suoi campi, per esempio la vestibilità, la chiusura o una stampa. L'IA legge queste informazioni dalle immagini. Le usa nel testo o per compilare un campo.

- **How many photos per product?** Da 1 a 4, oppure tutte (massimo 5). Più foto danno più dettagli, ma costano di più.
- **What should the AI look at?** Scriva i dettagli che l'IA deve esaminare, per esempio colletto, tasche e cappuccio.
- **When a product has no image yet.** Fozzels aspetta l'immagine e poi genera automaticamente, oppure salta il prodotto.
- **Enable Image Resize.** Fozzels rimpicciolisce automaticamente le immagini grandi. Così evita generazioni fallite e risparmia crediti. Costa 0,025 € per immagine.
- **Fozzels suggestions.** L'IA esamina alcune foto e propone dettagli visibili importanti per il testo. Li aggiunga con un clic.

![Il blocco Look at photos](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-11-look-at-photos.png)

**Search the internet.** A volte le informazioni che Le servono non sono né nel Suo negozio né nelle foto, per esempio le specifiche del produttore, i dettagli sui materiali o le recensioni. Allora Fozzels le cerca su internet. L'IA usa solo i fatti che corrispondono ai dati del Suo prodotto.

- **What does the AI search with?** I campi che identificano un prodotto: di solito il brand, il nome e il GTIN. I nomi di questi campi cambiano da un'integrazione all'altra.
- **Which information do you want the AI to look up online?** Gli argomenti da cercare, come recensioni, sostenibilità o consigli sulle taglie. **Fozzels suggestions** Le indica quali argomenti sono utili.

![Il blocco Search the internet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-12-search-internet.png)

Fozzels calcola i costi di **Look at photos** e **Search the internet** per ogni prodotto. Li vede nel passaggio **Test**.

#### Blocchi aggiuntivi: estendere il prompt

Questi blocchi sono facoltativi. Attivi un blocco, lo compili e lo salvi. Fozzels lo inserisce poi in una posizione fissa del prompt.

**Keywords.** I termini di ricerca con cui gli acquirenti devono trovare il testo. Li scriva Lei, oppure clicchi su **Fozzels suggestions** per ricevere parole chiave per la categoria di prodotto. Presto sarà disponibile un collegamento al Suo strumento SEO. Fozzels mette le parole chiave nel titolo e nel primo paragrafo, poi nel resto del testo. Se non sceglie parole chiave, Fozzels sceglie un termine per ogni prodotto dal suo titolo e dalla sua categoria.

![Il blocco Keywords in un Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-13-keywords.png)

**My snippets.** Istruzioni Sue che può riusare in Flow diversi, per esempio una frase finale fissa, una regola sulle taglie o un elenco di nomi di brand da scrivere sempre correttamente. Uno snippet vale per tutto il testo, in tutti i campi del Flow.

#### Regole, controlli e linee guida per tutto il testo

Qui imposta che cosa l'IA deve fare sempre o non fare mai, in tutte le parti del testo. Così evita errori che altrimenti dovrebbe correggere in ogni testo.

**Do not mention.** Parole e argomenti che non devono comparire nel testo: prezzi, sconti, nomi di concorrenti, affermazioni come "il migliore" o "il più economico". L'IA non li usa, anche quando sono nelle Sue fonti.

![I blocchi My snippets e Do not mention](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-14-snippets-do-not-mention.png)

**Guidelines and check rules · Fozzels standard.** Le regole standard che Fozzels usa per ogni testo. Sono attive in ogni nuovo Flow. Può disattivare una regola che non è adatta ai Suoi testi.

- Non menzionare prezzi, sconti o tempi di consegna.
- Usare solo fatti presi dai dati del prodotto, dalle foto o dai risultati di ricerca.
- Non usare superlativi o affermazioni come "il migliore" o "il più economico".
- Copiare taglie, materiali e nomi di brand esattamente come nei dati del prodotto.
- Usare solo la formattazione delle impostazioni della struttura.
- Usare la stessa forma di cortesia e la stessa grafia in tutto il testo.

Per aggiungere regole proprie, usi **Your own rules**, per esempio "indica sempre il paese di produzione".

![Le regole standard di Fozzels e le Sue regole](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-15-standard-rules.png)

#### Campi aggiuntivi: brevi linee guida, non prompt separati

Se nel passaggio 2 ha scelto più di un campo, l'IA compila i campi aggiuntivi nella stessa richiesta, con lo stesso prompt principale. Ruolo, pubblico, tono, fonti e regole valgono automaticamente anche per loro. Quindi non scrive un prompt separato per ogni campo. Scrive solo una breve linea guida: che cosa contiene il campo, quanto è lungo e in quale forma.

Fozzels ha già preparato una proposta per ogni campo. La tenga, oppure la cambi con **Edit guideline**. Il link "Change fields in step 2" La riporta alla scelta dei campi.

![Campi aggiuntivi e il riepilogo Your prompt](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-16-extra-fields.png)

**L'editor delle linee guida.** A sinistra vede il testo della linea guida. A destra vede la **Preview**: la stessa linea guida con i valori reali di un prodotto. Usi le frecce nella **Preview** per passare a un altro prodotto.

- **Attributi come variabili.** Fozzels aggiunge al testo gli attributi del pannello **Attributes** come etichette verdi. Un blocco condizionale "if…" giallo aggiunge una riga solo quando il prodotto ha un valore per quell'attributo. Può ordinare il pannello per tasso di compilazione e fare ricerche al suo interno. Il numero su un attributo mostra quante volte lo usa.
- **Snippets.** I Suoi snippet di istruzioni salvati sono a destra.
- **Templates.** Clicchi su **Save as template** per salvare una linea guida come modello. Clicchi su **Load** per usarlo in un altro Flow.
- **AI Assistant.** L'assistente La aiuta a scrivere o a cambiare la linea guida. Può aggiungere il risultato, inserirlo nel punto del cursore, sostituire il testo o copiarlo.

Per una descrizione completa dell'editor, consulti [4.3.2 Configurazione e utilizzo del prompt: il nuovo editor dei prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

![L'editor delle linee guida con la Preview, gli attributi e gli snippet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-17-guideline-editor.png)

![L'AI Assistant nell'editor delle linee guida](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-18-ai-assistant.png)

L'icona dell'ingranaggio accanto al nome del campo apre le impostazioni dell'attributo. Qui imposta:

- se Fozzels usa l'attributo,
- se può filtrare su di esso,
- se Fozzels può scrivere contenuti nell'attributo e aggiornare il Suo negozio,
- se i prodotti figli ricevono il valore del prodotto padre,
- se l'HTML è consentito.

Può anche tradurre il nome dell'attributo in altre lingue. Questo aiuta l'IA a capire che cosa contiene l'attributo. Quando salva questa finestra, Fozzels non invia nulla al Suo negozio.

![Impostazioni dell'attributo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-19-attribute-settings.png)

#### Your prompt

In fondo al passaggio vede un riepilogo: il numero di campi nel Flow, il numero di blocchi attivi e tutti i blocchi attivi, dal ruolo e dal pubblico fino alle regole di controllo. I testi reali li vede nel passaggio 5, quando prova il prompt su prodotti reali.

### Passaggio 4. Fields

In questo passaggio imposta la lunghezza e la struttura del testo per ogni campo. I campi sono schede in alto. Clicchi su **+** per aggiungere un campo e sulla croce per toglierlo. Tutte le impostazioni del passaggio **Enrich the text** valgono ancora per ogni campo.

**Lunghezza del testo.** Il numero approssimativo di parole che scrive l'IA: **Short** (circa 60), **Normal** (circa 120), **Long** (circa 200) o **Custom** (un valore Suo).

**Trust block.** Un breve blocco alla fine del testo. Dà fiducia nel prodotto e nel Suo negozio agli acquirenti e agli agenti di IA. Scriva che cosa rende affidabile il Suo negozio, per esempio un'alta soddisfazione dei clienti, negozi fisici, resi gratuiti, una garanzia o un marchio di qualità. Il blocco diventa una sezione separata alla fine del testo. Ci sono due opzioni:

- **Same block in every description** (consigliata): Fozzels aggiunge il blocco parola per parola dopo ogni testo. Il blocco è sempre corretto e il prompt resta più corto.
- **AI mentions it where it fits**: l'IA scrive questi punti con parole sue, solo dove sono adatti.

Può dare al blocco un titolo, per esempio "Ordine e consegna", e un elenco di punti.

![Passaggio 4: la lunghezza del testo e il Trust block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-20-step-4-length-trust-block.png)

**Struttura e formattazione.** L'ordine delle parti del testo nel Suo negozio. Fozzels prepara la struttura predefinita per questo tipo di testo. Può cambiarla:

- **Format**: HTML (h2, h3, h4, p, ul) o testo semplice.
- **Sections**: ogni sezione ha un livello di titolo (H2, H3 …), una forma (titolo, paragrafo o elenco puntato) e un'istruzione propria. Trascini una sezione per cambiare l'ordine. Clicchi sulla croce per togliere una sezione.
- **+ Custom section**: aggiunge una sezione Sua.

![Struttura e formattazione: le sezioni di una descrizione](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-21-structure-sections.png)

Clicchi sull'icona della matita per aprire l'editor della sezione. Qui imposta il titolo, il livello, l'istruzione, la forma, il numero approssimativo di parole e una condizione. La condizione stabilisce quando Fozzels aggiunge la sezione al testo: **Always include**, **Only if a field is filled** o **Only if a building block is on**.

![Modifica di una sezione e della sua condizione](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-22-edit-section.png)

### Passaggio 5. Test

In questo passaggio vede alcuni prodotti della Sua selezione. Per ogni prodotto può vedere il prompt esattamente come lo riceve l'IA: clicchi su **View the filled-in prompt for this product**. Clicchi su **Test** per vedere il testo che l'IA scrive per quel prodotto, accanto al testo attuale. Se il risultato non Le piace, torni ai blocchi del passaggio 3.

Fozzels propone alcuni prodotti della Sua selezione per il test. Per aggiungere altri prodotti, li cerchi. Per togliere un prodotto, clicchi sulla croce.

:::note
Un test scrive un testo reale con il Suo modello di IA. Fozzels lo addebita come tutti gli altri testi. Anche i punteggi consumano token.
:::

![Passaggio 5: prodotti di test](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-23-step-5-test-products.png)

Dopo il test, Fozzels mostra il punteggio totale del testo attuale e del nuovo testo, e il miglioramento, per esempio 12 → 69, cioè +57. Sotto vede un punteggio da 0 a 100 per ogni argomento, con una breve spiegazione per il testo attuale e per il nuovo testo.

| Argomento | Che cosa valuta Fozzels |
|---|---|
| SEO | Gli acquirenti trovano il testo su Google? Una parola chiave all'inizio, una buona lunghezza, frasi facili da leggere. |
| GEO | I motori di ricerca IA e gli agenti di acquisto trovano il testo? Fatti specifici che possono verificare. |
| AI readability | Un modello linguistico capisce subito il testo? Una struttura chiara. |
| Keywords | Il testo contiene i termini di ricerca scelti in modo naturale, senza troppe ripetizioni? |
| Internal links | Il testo contiene i link scelti, con un testo del link che dice dove portano? |
| Conversion | Il testo dà un motivo per comprare, toglie i dubbi e dà fiducia al momento giusto? |
| Neuromarketing | Il testo usa simulation, congruence, trust e processing fluency? |

Fozzels calcola i punteggi sul testo stesso, in base ai blocchi attivi in questo Flow. Non conta gli argomenti dei blocchi disattivati, per esempio **Internal links**.

![Punteggi del testo attuale e del nuovo testo per ogni argomento](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-24-test-scores.png)

### Passaggio 6. Launch

L'ultimo passaggio ha tre domande e, se serve, impostazioni avanzate.

1. **How many products per day?** 10, 25, 50, 100 o un numero Suo. Il limite tiene bassi i costi e il lavoro di revisione. Quando Fozzels ha completato la selezione attuale, il Flow prende automaticamente i nuovi prodotti che corrispondono alla selezione.
2. **What happens with a new text?**
    - **I approve every text first** (consigliato): i nuovi testi vanno nella Sua lista di revisione. Fozzels non invia nulla al Suo negozio prima della Sua approvazione.
    - **Straight to my shop**: Fozzels pubblica i testi automaticamente. Può comunque modificarli o tornare alla versione precedente.
3. **If a product changes later?** Se cambia un attributo che il prompt usa, per esempio il colore o il materiale, Fozzels può scrivere automaticamente un nuovo testo. Quando l'interruttore è disattivato, Fozzels scrive un testo per un prodotto una sola volta.

In **Advanced settings** può impedire che altri Flow generino di nuovo gli stessi contenuti:

- **Use default**: l'intervallo minimo delle Sue impostazioni generali.
- **Override**: un intervallo minimo proprio per questo Flow, in settimane.
- **Turn off**: nessun intervallo minimo. Fozzels non genera un nuovo testo solo perché è passato del tempo.

Per maggiori informazioni, consulti [Funzione Impedisci la generazione di contenuti sovrapposti](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).

In **Advanced settings** può anche cliccare su **Connect workflow** per aggiungere un'azione che parte dopo ogni testo, per esempio una traduzione in tedesco o una nuova meta description.

Clicchi su **Launch flow** per avviare il Flow, oppure su **Save as draft** per continuare più tardi.

![Passaggio 6: impostazioni di avvio](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-25-step-6-launch.png)

## Dopo l'avvio: la pagina del Flow

Dopo l'avvio vede il messaggio "Your flow is running" e un pulsante che apre la pagina del Flow.

![Il messaggio Your flow is running](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-26-flow-running.png)

La pagina del Flow mostra tutte le informazioni sul Flow in un'unica schermata:

- **Product selection**: il filtro che seleziona i prodotti e il numero di prodotti.
- **System prompt**: la parte del prompt che Fozzels invia con ogni richiesta, prima delle istruzioni per i campi: il ruolo, il pubblico, il tono, i principi, le parole chiave, le parole da evitare e le regole.
- **Attributes to generate**: i campi che Fozzels genera. Fozzels li crea tutti in una sola richiesta all'IA per ogni prodotto, con un unico prompt principale comune.
- **Status**, **AI Configuration**, **Automation**, **Workflows**: lo stato e l'avanzamento, il modello e il suo prezzo, il limite giornaliero, la pubblicazione automatica, la soglia di confidenza, l'intervallo minimo e le azioni collegate. Per cambiare un blocco, clicchi sul suo pulsante **Change**.

![La pagina del Flow in Expert view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-27-flow-page-expert-view.png)

Nella barra in alto può passare tra **Step by step** ed **Expert view** e aprire i contenuti generati (**Generated content**), il test e la pianificazione. Il menu **…** contiene:

- **Run Now**: avvia subito la generazione, anche quando il Flow ha già raggiunto il limite giornaliero di oggi.
- **Duplicate**, **Archive** e **Delete**. Per maggiori informazioni, consulti [4.1.3. Gestione dei flussi: duplicazione, archiviazione ed eliminazione](/content-creation-flows/managing-flows-duplication-archiving-and-deletion/).

![Il menu del Flow con Run Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-28-flow-menu-run-now.png)

**Workflows.** Per aggiungere un'azione di workflow al Flow:

1. Nel blocco **Workflows**, clicchi su **Change**.
2. Scelga un'azione dall'elenco, per esempio "Product is in".
3. Clicchi su **Add**.
4. Clicchi su **Save**.

![Aggiunta di un workflow al Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-29-add-workflow.png)

Per maggiori informazioni, consulti [4.11.1. Workflows. Lezione 1: primi passi con i workflow](/content-creation-flows/workflows-lesson-1-getting-started/).

**Test nella pagina del Flow.** Apre una tabella con tutti i prodotti della selezione. Per ogni prodotto vede lo SKU, il nome, una miniatura e il prompt. Clicchi su **Generate Now** in una riga per generare subito i contenuti di quel prodotto, senza aspettare la pianificazione. Può cercare nella tabella, passare ad altre pagine e scegliere le colonne da mostrare.

![La tabella dei prodotti del Flow con il pulsante Generate Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-30-flow-product-table.png)

### Contenuti generati: revisione e approvazione

Clicchi su **Generated content** per aprire l'elenco dei contenuti generati (**Content Completion List**). Per ogni prodotto vede lo SKU, il nome, una miniatura, il prompt, tutti i campi generati e le date in cui Fozzels ha creato ed eseguito la richiesta. Ogni colonna ha un filtro. L'interruttore **Confirmed** mostra se un testo è approvato. Per eseguire un'azione su molti testi insieme, selezioni le righe e scelga l'azione nel menu **Actions**.

![L'elenco dei contenuti generati](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-31-generated-content-list.png)

Clicchi su una riga per aprire la finestra **Edit completion result**:

- **Campo principale**: il testo a sinistra e, a destra, una **Preview** che mostra come appare il testo nel Suo negozio. Clicchi su **Show HTML** per vedere il codice HTML, oppure su **Enable Editor** per usare l'editor visuale.
- **Altri campi del Flow**: sotto il campo principale può esaminare e modificare gli altri campi che questo Flow ha compilato, come **SEO Description** e **SEO Title**.
- **Batch Confirmed**: segna il risultato come approvato. Sopra i pulsanti vede lo stato di sincronizzazione con il Suo negozio.
- **Pulsanti**: **Save**, **Save & Sync** (salva il testo e lo invia subito al Suo negozio), **Regenerate**, **Show Revisions** (versioni precedenti) e **Copy to Clipboard**.

![La finestra Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-32-edit-completion-result.png)

Per maggiori informazioni, consulti [4.7.5 Modifica dei contenuti nell'elenco batch. Editor di testo avanzato](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/) e [4.7.4 Parole e frasi sospette](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

## Due modalità: Step by step o Expert view

Usi la modalità che preferisce. Può passare da una modalità all'altra in qualsiasi momento con un clic.

| Modalità | Che cosa mostra | Ideale per |
|---|---|---|
| Step by step | Una procedura guidata, un passaggio alla volta. | Nuovi Flow e nuovi membri del team. |
| Expert view | Tutto il Flow in una pagina, anche le impostazioni avanzate. | Utenti esperti che vogliono vedere tutte le impostazioni insieme. |

Le impostazioni avanzate in **Expert view** comprendono la soglia di confidenza, l'intervallo minimo tra i Flow e che cosa fa Fozzels quando un prodotto non ha ancora un'immagine.

Quando crea un nuovo Flow, Fozzels gli dà un nome in base alle Sue scelte. Può cambiare il nome e tornare al nome proposto con un clic.

## Brand Profile: la voce del Suo brand in un unico posto {#brand-profile}

Il **Brand Profile** è una pagina separata nelle impostazioni del Suo account. Stabilisce con che cosa parte ogni nuovo Content Flow:

- il modello di IA,
- chi scrive, per chi e con quale tono,
- i principi di neuromarketing e le parole chiave,
- che cosa non deve mai esserci nel testo.

Può comunque cambiare ognuna di queste impostazioni in un Flow. Quando cambia il profilo, Fozzels non cambia i Flow che esistono già.

![La pagina Brand Profile](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-33-brand-profile.png)

### Più di un profilo

Crei un profilo separato per ogni brand, negozio o linea di prodotti, per esempio uno per descrizioni e SEO, uno per le FAQ, uno per i testi ALT o uno per i saldi.

- **New profile**: scriva un nome, per esempio B2B, Outlet o Linea premium, e clicchi su **Create**.
- **Rename** / **Delete**: cambia il nome di un profilo o lo elimina. Non può eliminare il profilo predefinito. Prima renda predefinito un altro profilo.
- **Il profilo predefinito**: ogni nuovo Flow parte con questo profilo. Nel passaggio **Enrich the text** può caricare un altro profilo o salvare le impostazioni del Flow come nuovo profilo.

### Modello di IA

Scelga un provider (OpenAI (ChatGPT), Anthropic, xAI o Google Gemini) e un modello. I nuovi Flow partono con questo modello, ma in ogni Flow può sceglierne un altro.

### Ruolo, pubblico e tono

Attivi ogni blocco con il suo interruttore. Le opzioni salvate sono pulsanti. Clicchi su un pulsante per scegliere un'opzione. Sotto i pulsanti vede la descrizione completa che riceve l'IA. Clicchi sull'icona della matita per modificare la descrizione, oppure su **+ New…** per creare una nuova opzione.

- **Role of the AI**: chi scrive il testo e da quale punto di vista, per esempio Webshop copywriter, SEO specialist, Brand storyteller o Shop assistant.
- **Target audience**: chi legge il testo: l'età, lo stile di vita, come rivolgersi al lettore e che cosa è importante per lui.
- **Tone of voice**: come il Suo brand parla ai clienti, con parole Sue. Se non sceglie un tono, l'IA scrive in uno stile neutro e informativo.

### Principi di neuromarketing nel Brand Profile {#neuromarketing-principles-in-the-brand-profile}

Ogni principio aggiunge al prompt una regola di scrittura. Può scegliere più di un principio. I principi si rafforzano a vicenda.

| Principio | Regola di scrittura | Adatto a |
|---|---|---|
| Processing fluency | Frasi brevi, una prima riga chiara, poche affermazioni, un ordine logico. | Acquisti quotidiani, confronti, prezzi bassi. |
| Simulation | Il cliente si immagina mentre usa il prodotto: una situazione, un momento, che cosa prova. | Prodotti nuovi, speciali o emozionali. |
| Congruence | Il testo corrisponde alla foto e al prodotto che il cliente riceve a casa. Non fa promesse che il prodotto non mantiene. Così ci sono meno resi. | Prodotti in cui l'aspettativa e il prodotto reale devono corrispondere. |
| Trust | Onesto, specifico e familiare. Fatti che il cliente può verificare, non abili frasi di vendita. | Acquisti più costosi, brand poco noti, nuovi clienti. |

### Parole chiave, parole da evitare e istruzioni proprie

- **Keywords**: i termini di ricerca con cui gli acquirenti devono trovare il testo. In un Flow, Fozzels può anche proporre termini per i suoi prodotti. Se non sceglie parole chiave, Fozzels sceglie un termine per ogni prodotto dal suo titolo e dalla sua categoria.
- **Do not mention**: parole e argomenti che non devono comparire nel testo: prezzi, sconti, nomi di concorrenti, affermazioni come "il migliore" o "il più economico". L'IA non li usa, anche quando sono nelle Sue fonti.
- **Own instructions**: altre informazioni che l'IA deve conoscere, con parole Sue, per esempio come rivolgersi al lettore o che cosa citare sempre, come "spediamo in 24 ore". Fozzels aggiunge questo testo al system prompt dopo i blocchi, una riga per ogni paragrafo.
