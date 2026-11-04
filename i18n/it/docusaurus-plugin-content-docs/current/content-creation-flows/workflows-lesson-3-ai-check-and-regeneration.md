---
title: '4.11.3. Workflows. Lezione 3: controllo automatico con IA e rigenerazione'
sidebar_position: 32
slug: /content-creation-flows/workflows-lesson-3-ai-check-and-regeneration
description: >-
  Lasci che l'IA controlli ogni testo generato prima che arrivi al Suo negozio.
  Se un testo non è utilizzabile, Fozzels dice al modello che cosa non andava
  e lo genera di nuovo automaticamente.
---

Lasci che l'IA controlli ogni testo generato prima che arrivi al Suo negozio. Se un testo non è utilizzabile, Fozzels dice al modello che cosa non andava e lo genera di nuovo automaticamente.

A volte un modello di IA scrive qualcosa che non può usare: un segnaposto, un commento come "Ecco la Sua descrizione", un testo nella lingua sbagliata o sul prodotto sbagliato. Con un controllo IA nel Suo workflow, Fozzels trova questi testi al posto Suo e li genera di nuovo automaticamente, così Lei controlla solo ciò che richiede davvero una persona.

Questa lezione si basa su [4.11.1. Lezione 1: primi passi con i workflow](/content-creation-flows/workflows-lesson-1-getting-started/) e [4.11.2. Lezione 2: combinare i blocchi in un workflow](/content-creation-flows/workflows-lesson-2-combining-blocks/). Se non le ha ancora lette, parta da lì.

## Come funziona, in breve

1. Il Suo flow genera un testo, come sempre.
2. Un secondo modello di IA legge il testo e controlla se è utilizzabile.
3. Se il testo supera il controllo, non cambia nulla: prosegue verso la revisione o la sincronizzazione, come impostato nel Suo flow.
4. Se il testo non lo supera, Fozzels lo genera di nuovo e dice al modello che cosa non andava (il "feedback").
5. Il nuovo testo viene controllato di nuovo. Questo si ripete finché il testo supera il controllo o si raggiunge il numero massimo di rigenerazioni.
6. Se il testo non supera il controllo neanche dopo l'ultimo tentativo, viene segnalato come sospetto con il motivo, così può correggerlo Lei.

## I due nuovi blocchi

| Blocco | Tipo | Che cosa fa |
| --- | --- | --- |
| **AI validation fails** | Condizione | Chiede a un modello di IA di controllare il testo generato. **Yes** = il testo ha un problema, **No** = il testo va bene. |
| **Regenerate with feedback** | Azione | Genera di nuovo il testo in background e invia al modello i problemi trovati, così può evitarli. |

Li usi insieme in un unico blocco: la condizione **AI validation fails** nella sezione **Conditions** e l'azione **Regenerate with feedback** nella sezione **Actions**.

## Che cosa cerca il controllo IA

Il controllo considera un testo non utilizzabile quando:

| Problema | Esempio |
| --- | --- |
| Non è un contenuto vero: invece del testo atteso, l'IA ha restituito qualcosa pensato per un altro scopo, oppure c'è un'altra evidente incongruenza | Un rifiuto, una domanda di ritorno, "lorem ipsum", "[Product name]", un tag di template vuoto |
| L'IA sta conversando | "Ecco la descrizione:", "Mi faccia sapere se servono modifiche", ragionamento visibile |
| Non è adatto all'attributo | Una descrizione completa scritta come titolo |
| Ripete il nome dell'attributo | "Meta description: ..." |
| È nella lingua sbagliata | Testo in inglese in una store view tedesca |
| Parla di un altro prodotto | Un testo sugli auricolari per una custodia per auricolari |
| Si interrompe a metà frase | Il testo è troncato |

Il controllo **non** valuta stile, tono, lunghezza o formattazione, e non riscrive mai il Suo testo. Per limiti di lunghezza o sostituzioni di parole, usi i blocchi delle lezioni 1 e 2.

:::note
Il controllo vede il prodotto, il testo generato, il valore precedente dell'attributo e la lingua della Sua store view. **Non** vede il Suo prompt. Quindi, se prima l'attributo aveva un titolo normale e il nuovo valore è "lorem ipsum" (anche se il Suo prompt chiedeva proprio quello), il controllo restituisce il feedback che il risultato non sembra un titolo normale.
:::

## Passo 1. Creare il workflow

1. Nel menu laterale, sotto **AI Flows**, apra **Workflows**.
2. Clicchi su **Create workflow**.
3. Dia al workflow un nome chiaro, per esempio "AI check".
4. Aggiunga un blocco e gli dia un titolo, per esempio "AI check validation".

![La voce Workflows nel menu AI Flows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/01-workflows-menu.png)

![Il pulsante Create workflow nella pagina Workflows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/02-create-workflow-button.png)

## Passo 2. Configurare il blocco

1. Nella sezione **Conditions**, clicchi su **Add condition** e scelga **AI validation fails**. Questa condizione non ha impostazioni.
2. Nella sezione **Actions**, clicchi su **Add action** e scelga **Regenerate with feedback** nel campo **Action**.
3. Imposti **Maximum regenerations**: quante volte Fozzels può generare di nuovo il testo. Il valore predefinito è 2 e il massimo è 3.
4. Clicchi su **Apply**.

![Scelta dell'azione Regenerate with feedback nella finestra Edit block](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/03-regenerate-with-feedback-action.png)

![Il campo Maximum regenerations e il pulsante Apply](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/04-maximum-regenerations.png)

:::tip
Per i test, imposti **Maximum regenerations** su 1. Vedrà il risultato finale prima e spenderà meno.
:::

## Passo 3. Assegnare il workflow a un flow

1. Apra il Suo content flow.
2. Nel campo **Workflows**, selezioni il Suo workflow.
3. **Salvi il flow.** Il workflow viene eseguito solo dopo che il flow è stato salvato.

![Selezione del workflow nel campo Workflows di un content flow](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/05-assign-workflow-to-flow.png)

Se il Suo flow ha anche altri workflow (per esempio "Replace text" o "Truncate"), può combinarli. I workflow vengono eseguiti nell'ordine in cui sono assegnati.

## Passo 4. Controllare il risultato

Generi i testi nel Suo flow. Per ogni prodotto succede una di queste tre cose:

**Il testo supera il controllo al primo tentativo.** Non succede niente di particolare. Il testo prosegue come al solito.

**Il testo non supera il controllo, poi lo supera dopo una rigenerazione.** Mentre Fozzels lo genera di nuovo, il testo viene mostrato come sospetto con il motivo "Did not pass AI validation and is being generated again: ...". Ci vogliono da pochi secondi ad alcuni minuti. Quando il nuovo testo supera il controllo, la segnalazione viene rimossa e il nuovo testo sostituisce quello vecchio.

**Il testo non supera mai il controllo.** Dopo l'ultima rigenerazione, il testo resta segnalato come sospetto con il motivo, per esempio: "Did not pass AI validation after 2 generation(s): The Title value "All-Mountain Snowboard" is in English, not German as required." Legga il motivo, poi modifichi il testo Lei stesso oppure cambi il prompt e generi di nuovo.

Può seguire ogni tentativo nella [Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/) del prodotto: ogni generazione viene mostrata come una revisione a sé.

:::note
Il motivo viene conservato solo se alla fine il testo non supera il controllo. Quando una rigenerazione lo supera, il motivo viene rimosso e la cronologia mostra la versione precedente senza motivo.
:::

## Altri messaggi che può vedere

| Messaggio | Che cosa significa | Che cosa fare |
| --- | --- | --- |
| AI validation could not check this value, so it is held for review. | Il controllo non è stato eseguito, per esempio a causa di un errore temporaneo. | Controlli il testo Lei stesso. |
| AI validation stopped because your balance is too low, so this value was not validated. | Il Suo credito è esaurito. | Ricarichi il credito e generi di nuovo. |
| Did not pass AI validation. It was not generated again because the flow, its workflows or the item changed in the meantime. | Qualcosa è cambiato mentre il testo era in attesa di una rigenerazione. | Controlli il testo oppure lo generi di nuovo. |

## Costi

- Ogni controllo IA è una piccola chiamata a pagamento. Costa molto meno di una generazione.
- Ogni rigenerazione costa quanto una generazione normale.
- Quindi un prodotto può costare al massimo: 1 generazione + il numero massimo di rigenerazioni + un controllo per ogni tentativo.

Scelga il numero massimo di rigenerazioni tenendo conto di questo. Per la maggior parte dei flow, 1 o 2 bastano.

## Regole da ricordare

| Regola | Che cosa significa per Lei |
| --- | --- |
| Usi i due blocchi insieme | AI validation fails trova il problema, Regenerate with feedback lo corregge |
| Il controllo non vede il Suo prompt | Valuta se il testo è utilizzabile nel Suo negozio, non se segue ogni istruzione |
| Stile, tono e lunghezza non vengono controllati | Per questo usi Replace text, Truncate o Mark suspicious |
| Massimo 3 rigenerazioni | Dopo, il testo arriva a Lei come sospetto |
| Ogni controllo e ogni rigenerazione vengono addebitati | Tenga basso il massimo |
| Salvi il flow dopo aver assegnato il workflow | Altrimenti il workflow non viene eseguito |

:::tip
Provi prima il workflow su 2–3 prodotti. Controlli la cronologia e i motivi, poi lo attivi per tutto il flow.
:::

## Mantenga il controllo dei Suoi contenuti

Con un controllo IA nei Suoi workflow, ogni testo generato viene controllato prima di arrivare al Suo negozio, e i testi non utilizzabili vengono corretti automaticamente. Dedica il Suo tempo solo ai testi che hanno davvero bisogno di Lei, e Fozzels si occupa del resto. Prenda il pieno controllo dei Suoi contenuti con Fozzels.

## Serve aiuto con la configurazione?

Se ha bisogno di aiuto per configurare workflow personalizzati, contatti il Suo referente o il supporto Fozzels.
