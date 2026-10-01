---
title: "Content Flow — Guida completa"
sidebar_position: 28
slug: /content-creation-flows/content-flows-complete-guide
description: >-
  I Content Flow sono la funzionalità di automazione principale di Fozzels.
  Questa guida tratta la creazione di un Flow, i modelli di prompt, la sua
  esecuzione, il ciclo di vita dei completamenti, i contenuti sospetti e i
  motivi per cui a volte i contenuti non vengono sincronizzati.
---

I Content Flow sono la funzionalità di automazione principale di Fozzels. Un Flow è una regola che genera automaticamente contenuti AI per un attributo di prodotto selezionato e riscrive il risultato nel Suo store.

## Cosa fa un Flow

1. Filtra i prodotti in base alle Sue condizioni (ad es. "la descrizione è vuota")
2. Invia i dati del prodotto all'AI insieme al Suo prompt
3. Memorizza il contenuto generato come "completamento"
4. Invia il contenuto all'attributo del Suo store

---

## Creazione di un Flow

Vada su [Flows](https://app.fozzels.com/completions/product/rule) → **Create Flow**

### Passaggio 1 — Store e attributo di destinazione

- Selezioni lo store i cui prodotti devono essere elaborati
- Assegni un nome al Flow
- Selezioni l'**attributo di destinazione** — l'attributo che riceverà i contenuti generati dall'AI
  - Deve avere il flag **Mutable** attivato in Integration → Attributes

### Passaggio 2 — Fornitore AI

- Scelga il fornitore AI: OpenAI GPT-4o, Google Gemini 2.5 Flash o Anthropic Claude
- Selezioni un modello specifico
- Configuri i parametri del modello, se necessario

### Passaggio 3 — Prodotti e prompt

- **Condizioni** — generatore visivo di query per filtrare quali prodotti questo Flow elabora
  - Esempio: "la descrizione è vuota E la categoria è uguale a Electronics"
  - Lasci vuoto per elaborare tutti i prodotti dello store
  - Un'anteprima del conteggio mostra quanti prodotti corrispondono
- **Prompt** — l'istruzione inviata all'AI, scritta nell'[editor dei prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor). I dati del prodotto vengono inseriti come **attributi**: digiti `/` nell'editor, oppure clicchi o trascini un attributo dal pannello Attributes. Ogni attributo viene sostituito con il valore specifico del prodotto.
  - Esempio: _Scrivi una descrizione di prodotto per_ **Name** _(SKU:_ **SKU**_) nella categoria_ **Category**, dove le parti in grassetto sono attributi
  - Un attributo accompagnato da un'etichetta (_Brand:_ **Brand**) va inserito in una **condizione** (un blocco if): l'intera riga viene omessa quando il prodotto non ha un valore, così all'AI non arrivano righe vuote

### Passaggio 4 — Impostazioni di automazione

- Interruttore **Active** — attiva/disattiva il Flow
- **Batch size** — quanti prodotti elaborare per ogni esecuzione (predefinito 10)
- Interruttore **Automation** — quando è ON, i contenuti confermati vengono inviati automaticamente al Suo store senza revisione manuale
- **Regenerate on attribute change** — riesegue la generazione quando gli attributi di origine vengono aggiornati (⚠ può causare ricorsione se l'attributo di destinazione è anche un attributo di origine)
- **Prevent overlapping generation** — intervallo minimo tra le rigenerazioni per prodotto:
  - **Inherit** — utilizza l'intervallo globale dalle impostazioni dell'account
  - **Override** — imposta un intervallo personalizzato solo per questo Flow
  - **Turn off** — rigenera sempre, indipendentemente dalle esecuzioni precedenti

---

## Suggerimenti per i modelli di prompt

Inserisca i dati del prodotto come attributi dal pannello Attributes invece di digitarli: un attributo viene sostituito con il valore specifico di ciascun prodotto.

**Attributo o condizione:**

- Un **attributo semplice** compare da solo all'interno di una frase. Lo utilizzi per gli attributi presenti in quasi tutti i prodotti (il tasso di compilazione nel pannello Attributes mostra quanti li hanno).
- Una **condizione** (un blocco if) contiene un'intera riga, come _Brand:_ **Brand**, e la omette quando il prodotto non ha un valore. La utilizzi per tutto ciò che ha un'etichetta o altro testo attorno all'attributo, così l'AI non riceve mai una riga _Brand:_ vuota.

Sia specifico riguardo a:

- Formato e lunghezza ("150–200 parole")
- Lingua ("in inglese")
- Tono ("professionale ma cordiale")
- Cosa evitare ("non menzionare i concorrenti")

**Esempio per una descrizione di prodotto.** Le parole in grassetto sono attributi. Il nome è compilato in ogni prodotto, quindi compare da solo; ciascuna delle altre righe con etichetta si trova in una condizione:

> Scrivi una descrizione di prodotto accattivante (150–200 parole) in inglese.
>
> Nome del prodotto: **Name**
>
> _if Brand_ → Marca: **Brand**
>
> _if Category_ → Categoria: **Category**
>
> _if Short Description_ → Descrizione breve attuale: **Short Description**
>
> Concentrati sui vantaggi, non solo sulle caratteristiche. Usa un tono professionale ma cordiale.

**Formattazione dell'output.** Il prompt in sé non contiene alcuna formattazione. Per ottenere titoli, elenchi o testo in grassetto nei contenuti generati, li richieda a parole, ad esempio _Inizia con un titolo `<h2>` che riporti il nome del prodotto, poi due brevi paragrafi._ Se l'output deve contenere HTML, attivi i tag pertinenti in [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Esecuzione di un Flow

**Run Now** — elabora immediatamente fino a 10 prodotti. Lo utilizzi per i test o per piccoli batch.

**Plan & Close** — mette in coda l'intero batch per l'elaborazione in background. Lo utilizzi per le esecuzioni di massa.

---

## Ciclo di vita dei completamenti

Ogni elemento generato attraversa queste fasi:

| Stato | Significato |
|--------|---------|
| **Pending** | Generato, in attesa di revisione |
| **Confirmed** | Approvato da Lei, pronto per la sincronizzazione |
| **Synchronized** | Inviato correttamente allo store |
| **Suspicious** | Contiene contenuti contrassegnati — richiede una revisione manuale prima della sincronizzazione |

Con **Automation ON** — i contenuti puliti vengono confermati e inviati automaticamente. I contenuti sospetti attendono sempre una revisione manuale.

Con **Automation OFF** — tutti i contenuti attendono la Sua revisione e conferma prima della sincronizzazione.

---

## Revisione dei completamenti

Apra un Flow → **View Completions** per vedere tutti i contenuti generati.

Per ogni elemento può:

- **Modificare** manualmente il testo generato
- **Rigenerare** — chiedere all'AI di generarlo di nuovo
- **Confermare** — approvare il contenuto per la sincronizzazione
- **Sincronizzare** — inviarlo al Suo store
- **Visualizzare le revisioni** — vedere la cronologia completa delle modifiche e le differenze tra le versioni

**Azioni di massa:** selezioni più elementi → Confirm & Sync, Regenerate o Push.

---

## Contenuti sospetti

Fozzels contrassegna automaticamente i contenuti che sembrano errati:

- Artefatti AI: "Sorry, I can't...", "As an AI...", "Note:", "Please"
- Valori vuoti
- HTML codificato due volte (`&lt;`, `&gt;`)
- Sintassi Markdown in un campo non Markdown
- Le Sue parole sospette personalizzate (da configurare in [Settings → Flow Settings](https://app.fozzels.com/user/settings/flow))

I contenuti contrassegnati mostrano esattamente il motivo della segnalazione. Può:

- Modificarli e correggerli
- Rigenerarli
- Ignorare la segnalazione e approvarli comunque (se si tratta di un falso positivo)

---

## Perché i contenuti non vengono sincronizzati (invio bloccato) {#why-content-wont-sync-push-blocked}

| Motivo | Soluzione |
|--------|-----|
| Il Flow non è attivo | Attivi l'interruttore Active del Flow |
| Non confermato | Confermi il completamento (o attivi Automation) |
| Contenuto sospetto | Lo revisioni e lo approvi, oppure lo modifichi e lo salvi di nuovo |
| Prodotto eliminato dallo store | Nessuna azione necessaria — il prodotto non esiste più |
| Store/integrazione non attivi | Attivi lo store o l'integrazione |
| Attributo non modificabile | Attivi il flag Mutable in Integration → Attributes |

---

## Gestione dei Flow

- **Duplicate** — copia un Flow nello stesso store o in uno diverso
- **Archive** — nasconde il Flow dall'elenco principale; i dati vengono conservati e possono essere ripristinati
- **Delete** — eliminazione definitiva
- **Obsolete** — quando un Flow viene clonato a causa di modifiche strutturali (attributo di destinazione o condizioni modificati), la versione precedente diventa obsoleta; la sua cronologia dei completamenti viene conservata

### Avviso sulle modifiche strutturali

Se modifica l'**attributo di destinazione** o le **condizioni** di un Flow che ha già dei completamenti, Fozzels La avviserà e Le proporrà **"Obsolete and Duplicate"** — questa opzione crea un nuovo Flow con le Sue modifiche, conservando la cronologia di quello precedente.

---

## Avviso di ricorsione

Si attiva quando lo stesso attributo compare contemporaneamente come:

- Un attributo nel Suo prompt
- L'attributo di destinazione dell'output

Ciò crea un ciclo infinito — ogni generazione sovrascrive l'input dell'esecuzione successiva.

Soluzione:

- Rimuova quell'attributo dal prompt
- OPPURE disattivi "Regenerate on attribute change"

---

## Problemi frequenti

**Nessun prodotto corrisponde al Flow**

- Controlli le Sue condizioni — provi a rimuoverle temporaneamente per vedere tutti i prodotti
- Verifichi che gli attributi utilizzati nelle condizioni abbiano il flag **Filterable** in Integration → Attributes

**Output AI vuoto**

- Verifichi che gli attributi di origine abbiano valori per i Suoi prodotti
- Verifichi che gli attributi richiamati nel prompt abbiano il flag **Filterable**
- Renda il prompt più specifico

**I contenuti non vengono inviati allo store**

- Controlli i [motivi di invio bloccato](#why-content-wont-sync-push-blocked) indicati sopra
- Verifichi che l'interruttore Active dell'integrazione sia ON
- Verifichi che l'attributo di destinazione abbia il flag **Mutable**

**Quota OpenAI superata**

- Ricarichi il saldo su [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing)
- Oppure riduca il volume giornaliero nelle impostazioni di automazione del Flow

**Contenuti duplicati tra Flow**

- Attivi "Prevent overlapping generation" con un intervallo minimo (ad es. 7 giorni)
- In questo modo si impedisce a più Flow di rigenerare lo stesso prodotto entro l'intervallo minimo
