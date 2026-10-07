---
title: '4.11.1. Workflows. Lezione 1: primi passi con i workflow'
sidebar_position: 30
slug: /content-creation-flows/workflows-lesson-1-getting-started
description: >-
  I workflow controllano e modificano automaticamente i risultati generati:
  sostituiscono parole, tagliano il testo entro un limite di lunghezza o
  segnalano un risultato per la revisione manuale prima che arrivi al negozio.
  Crei il Suo primo workflow e scopra come si comporta.
---

I workflow controllano e modificano automaticamente i risultati generati: possono sostituire parole, tagliare il testo entro un limite di lunghezza o segnalare un risultato per la revisione manuale prima che arrivi al negozio. Lei imposta le regole una sola volta e queste si applicano a ogni nuovo risultato.

In questa lezione creerà il Suo primo workflow, vedrà come si comporta e imparerà alcuni aspetti a cui prestare attenzione lungo il percorso.

## L'esempio su cui lavoriamo

Il nostro flusso genera una breve descrizione di consegna per una torta:

> We are delighted to deliver your chosen **cake** directly to the address you provide… Each Festive **Cake** will arrive in beautiful gift packaging… every celebration deserves a delicious **CAKE**…

La parola "cake" compare tre volte, con tre diverse combinazioni di maiuscole e minuscole. Lo tenga a mente: sarà importante più avanti.

## Passaggio 1. Creare un workflow

Vada su **Home → Workflows** e faccia clic su **Create workflow**.

![Pagina Workflows con il pulsante Create workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/01-workflows-page-create-workflow.png)

L'editor si apre con il nome predefinito **New workflow 1**. Assegni subito al workflow un nome chiaro: quando ne avrà diversi, i nomi generici si confondono facilmente.

![Editor di workflow vuoto con il pulsante Create block](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/02-empty-workflow-editor.png)

> **Nota:** l'interruttore **Active** è attivo per impostazione predefinita. Un workflow non ha alcun effetto finché non viene assegnato a un flusso, ma una volta assegnato, un workflow attivo inizia a elaborare i risultati.

## Passaggio 2. Configurare un blocco

Faccia clic su **Create block**. Sull'area di lavoro compare un blocco composto da due parti:

- **IF:** le condizioni alle quali il blocco viene eseguito.
- **THEN:** le azioni che esegue.

![Un nuovo blocco vuoto nell'area di lavoro](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/03-new-empty-block.png)

Faccia clic sull'icona della matita per aprire le impostazioni del blocco.

![Finestra Edit block vuota](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/04-empty-edit-block-window.png)

### Condizioni

Ogni condizione è composta da tre parti: cosa verificare, un operatore e un valore. Può verificare due elementi:

![Tipi di condizione: Length e Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/05-condition-types.png)

**Length** è la lunghezza del testo in caratteri, spazi inclusi. Operatori: greater than, greater or equal, less than, less or equal, equals, not equal.

![Operatori di Length](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/06-length-operators.png)

**Text** verifica il contenuto. Operatori: contains, does not contain, begins with, ends with, is empty, is not empty.

![Operatori di Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/07-text-operators.png)

Con più di una condizione, scelga la logica:

- **All conditions:** tutte le condizioni devono essere soddisfatte (AND).
- **Any condition:** è sufficiente che ne sia soddisfatta una (OR).

### Azioni

Sono disponibili tre azioni. Le descrizioni sono mostrate direttamente nel menu a discesa.

![Le tre azioni disponibili](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/08-available-actions.png)

- **Replace text:** sostituisce una parola o una frase. Lasci vuoto **Replace with** per rimuoverla. I tag HTML non vengono modificati.
- **Truncate:** taglia il testo a un numero massimo di caratteri.
- **Mark suspicious:** segnala il risultato per la revisione manuale.

Un blocco può contenere più azioni, che vengono eseguite dall'alto verso il basso.

### Il Suo primo blocco

**Compito:** se il testo contiene "Happy holidays!", sostituire "cake" con "festive cake".

1. **Nome:** `cake -> festive cake`
2. **Condizioni → Aggiungi condizione:** `Text` · `contains` · `Happy holidays!`
3. **Azioni → Aggiungi azione:** `Replace text`, Find `cake`, Replace with `festive cake`, **All matches** attivo (sostituisce tutte le occorrenze, non solo la prima).
4. Faccia clic su **Apply**.

![Impostazioni del blocco per il primo esempio](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/09-first-block-settings.png)

Il blocco nell'area di lavoro mostra ora un riepilogo delle sue condizioni e azioni. Verifichi che **Active** sia attivo e faccia clic su **Save**.

![Blocco salvato con riepilogo, interruttore Active e pulsante Save](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/10-saved-block-summary.png)

## Passaggio 3. Assegnare il workflow a un flusso

Un workflow salvato non fa nulla finché non viene collegato a un flusso.

1. Apra il Suo flusso e vada alla scheda **Automation** (la 4ª scheda).
2. In basso, nella sezione **Workflows**, scelga il Suo workflow dal menu a discesa.
3. Faccia clic su **Save** per salvare il flusso.

![Sezione Workflows di un flusso con un workflow assegnato](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/11-flow-workflows-section.png)

Generi un nuovo risultato e lo apra dalla **Batch List** (la tabella dei risultati generati).

## Passaggio 4. Verificare il risultato

Il testo contenente "Happy holidays!" è cambiato:

![Risultato con "festive cake" e "Festive festive cake"](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/12-result-festive-festive-cake.png)

Noti **"Festive festive cake"**. Il modello ha scritto "Festive Cake" con la C maiuscola e, senza **Match case**, la sostituzione ignora la differenza tra maiuscole e minuscole, per cui è stato sostituito anche "Cake".

**Soluzione:** attivi **Match case**. In questo modo viene sostituito solo "cake" in minuscolo, mentre "Festive Cake" rimane invariato.

> **Tenga presente:** Replace text non tiene conto del contesto, cerca soltanto le corrispondenze. Se il modello ha già scritto "delicious cake", sostituire `cake` con `delicious cake` produce "delicious delicious cake". Pensi a come si comporterà la Sua sostituzione su testi diversi.

## Passaggio 5. Come vengono elaborati i risultati

Se modifica le impostazioni di un workflow e riapre un risultato già elaborato, il risultato rimane invariato. Il sistema funziona così:

- I workflow elaborano solo i risultati **nuovi e rigenerati**.
- Ogni risultato viene elaborato da un determinato workflow **una sola volta**. La modifica dei suoi blocchi non influisce sui risultati già elaborati.
- Le modifiche sono **permanenti**. La rimozione di un workflow da un flusso non ripristina il testo originale.

Per applicare le nuove impostazioni, rigeneri il risultato.

> **Suggerimento:** provi prima i nuovi workflow su un flusso di prova. Le modifiche ai risultati elaborati non possono essere annullate, ma solo rigenerate.

## Passaggio 6. Più workflow

Per correggere i testi in cui compare "Festive festive", può aggiungere un secondo workflow. Questo segnala anche il risultato per la revisione:

- **Condizioni:** `Text` · `contains` · `Festive festive`
- **Azioni:**
    1. `Replace text`: `Festive festive` → `Festive`, **All matches** e **Match case** attivi
    2. `Mark suspicious` con un motivo per il revisore

![Workflow di correzione con Replace text e Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/13-fix-workflow.png)

Può assegnare un numero qualsiasi di workflow a un flusso. Vengono eseguiti **dall'alto verso il basso** e ciascuno riceve il testo così come modificato dal precedente. Può riordinarli trascinando la maniglia o con le frecce.

![Quattro workflow assegnati a un flusso](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/14-four-workflows-assigned.png)

Ordine consigliato:

1. Workflow che modificano il testo.
2. Workflow che correggono gli effetti collaterali di quelli precedenti. Una correzione deve essere eseguita **dopo** il workflow che causa il problema.
3. Mark suspicious può trovarsi in qualsiasi posizione: non interrompe l'elaborazione.

Se più workflow contrassegnano un risultato come sospetto, viene mostrato il motivo del **primo** nell'elenco.

## Passaggio 7. Troncamento con revisione manuale

**Compito:** sostituire "cake" con "candies", limitare il testo a 110 caratteri e impedire che il testo abbreviato arrivi al negozio finché qualcuno non lo ha controllato.

- **Condizioni** (**All conditions**):
    - `Text` · `contains` · `cake`
    - `Length` · `greater than` · `100`
- **Azioni**, in questo ordine:
    1. `Replace text`: `cake` → `candies`, **All matches** e **Match case** attivi
    2. `Truncate`: `110`, **Keep whole words** attivo
    3. `Mark suspicious`: motivo `Truncated to 110 characters`

![Blocco con Replace text, Truncate e Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/15-replace-truncate-mark-suspicious.png)

> **Perché l'ordine è importante:** "candies" è più lungo di "cake". Se tronca prima e sostituisce dopo, il testo può superare nuovamente il limite. Sostituisca prima, poi tronchi.

**Risultato:**

![Risultato troncato, 109 caratteri](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/16-truncated-result.png)

Il testo è lungo 109 caratteri e nessuna parola viene tagliata a metà. Le parole unite da un trattino, come "door-complete", contano come una sola parola. Alla fine non viene aggiunto "…". La frase, tuttavia, è incompleta, ed è per questo che Mark suspicious fa parte di questo blocco.

Un risultato sospetto **non viene sincronizzato con il negozio** finché un utente non lo modifica o lo rigenera. Nella Batch List compare un'icona "!" accanto a **Sync Now** e il motivo viene mostrato al passaggio del mouse:

![Motivo del sospetto mostrato accanto a Sync Now](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/17-suspicious-reason-sync-now.png)

All'interno del risultato, un avviso **Synchronization with integration is disabled** mostra il motivo:

![Avviso di sincronizzazione disattivata con il motivo del workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/18-sync-disabled-warning.png)

> **Le parole sospette dell'integrazione hanno la precedenza.** L'integrazione ha un proprio elenco di [parole e schemi sospetti](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control). Se il testo ne contiene uno, il risultato riceve il motivo di sistema "Completion looks suspicious, possible AI recommendations found" e i motivi dei workflow non vengono mostrati. La parola trovata viene evidenziata in arancione.

![Avviso di sospetto del sistema con una parola evidenziata](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/19-system-suspicious-warning.png)

## Riferimento rapido

| Impostazione | Come funziona |
| --- | --- |
| All / Any condition | Tutte le condizioni devono essere soddisfatte / ne basta una |
| Length | Lunghezza del testo in caratteri, spazi inclusi |
| Replace text | Se Replace with è vuoto, la corrispondenza viene rimossa; i tag HTML non vengono modificati |
| All matches | Disattivato: viene sostituita solo la prima corrispondenza |
| Match case | Disattivato: la sostituzione ignora maiuscole e minuscole |
| Truncate | Non viene aggiunto "…"; Keep whole words mantiene intatte le parole |
| Mark suspicious | Blocca la sincronizzazione con il negozio; non interrompe altre azioni o workflow |
| Più segnalazioni di sospetto | Viene mostrato il motivo del primo workflow |
| Parole sospette dell'integrazione | Hanno la precedenza sui motivi dei workflow |
| Elaborazione | Solo risultati nuovi e rigenerati, una volta per workflow; le modifiche sono permanenti |

## Prossimi passi

La prossima lezione tratta le funzionalità avanzate: rami Yes/No e collegamento dei blocchi, gruppi di condizioni e lavoro con output HTML.

Continui con [4.11.2. Lezione 2: combinare i blocchi in un workflow](/content-creation-flows/workflows-lesson-2-combining-blocks/).
