---
title: '4.11.2. Workflows. Lezione 2: combinare i blocchi in un workflow'
sidebar_position: 31
slug: /content-creation-flows/workflows-lesson-2-combining-blocks
description: >-
  Un workflow può contenere più blocchi collegati tra loro. Il risultato di
  ogni blocco decide quale blocco viene eseguito dopo, quindi un solo workflow
  può gestire testi diversi in modi diversi.
keywords:
- flusso di lavoro
---

Un workflow può contenere più blocchi collegati tra loro. Il risultato di ogni blocco decide quale blocco viene eseguito dopo, quindi un solo workflow può gestire testi diversi in modi diversi.

Questa lezione si basa su [4.11.1. Lezione 1: primi passi con i workflow](/content-creation-flows/workflows-lesson-1-getting-started/). Se non l'ha ancora letta, parta da lì: spiega le condizioni, le azioni e come vengono elaborati i risultati.

## Output dei blocchi: Yes, No e Always

Ogni blocco ha un input a sinistra e tre output a destra.

![Un blocco con il suo input e gli output Yes, No e Always](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/01-block-outputs.png)

| Output | Dove | Porta al blocco successivo quando |
| --- | --- | --- |
| **Yes** (blu) | Parte IF | Le condizioni del blocco sono soddisfatte |
| **No** (arancione) | Parte IF | Le condizioni del blocco non sono soddisfatte |
| **Always** (grigio) | Parte THEN | Le azioni del blocco sono state eseguite |

Per collegare due blocchi, trascini una linea dal punto di output di un blocco al punto di input del blocco successivo. Faccia doppio clic su una linea per aggiungere una nota.

## Il workflow di esempio

Il nostro workflow ha cinque blocchi. Sostituisce "cake" con "festive cake", verifica la presenza di una parola doppia, segnala i testi senza "cake" e aggiunge "Christmas" al saluto natalizio.

I blocchi sono collegati in questo modo:

| Da | Output | A |
| --- | --- | --- |
| 1. cake → festive cake | **Yes** | 2. Is festive cake true |
| 1. cake → festive cake | **No** | 3. Is cake false (Mark suspicious) |
| 2. Is festive cake true | **No** | 4. Validated test (Mark suspicious) |
| 4. Validated test | **Always** | 5. Holiday → Christmas Holiday! |

Gli output **Yes** e **Always** del blocco 2 e gli output del blocco 3 non sono collegati. Che cosa significa lo mostra il Test 1 qui sotto.

## I blocchi uno per uno

### 1. cake → festive cake

Se il testo contiene "cake", viene sostituito con "festive cake". Match case è attivo, quindi "Cake" e "CAKE" restano invariati. **Yes** porta al blocco 2, **No** al blocco 3.

![Impostazioni del blocco 1](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/03-block-1-settings.png)

### 2. Is festive cake true

Verifica la presenza di una parola doppia e la corregge. **No** porta al blocco 4.

![Impostazioni del blocco 2](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/04-block-2-settings.png)

:::note
In questa schermata la parola è scritta "fastive". Il blocco 1 scrive "festive", quindi questa condizione non è mai soddisfatta. Nel Suo workflow usi `festive festive cake` e `festive festive` → `festive`.
:::

### 3. Is cake false

Un blocco senza condizioni. Segnala il risultato con il motivo "Cake not found :(". I suoi output non sono collegati.

![Impostazioni del blocco 3](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/05-block-3-settings.png)

### 4. Validated test

Anche questo è senza condizioni. Segnala il risultato con il motivo "Checked! Please sync!". **Always** porta al blocco 5.

![Impostazioni del blocco 4](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/06-block-4-settings.png)

:::note
Mark suspicious blocca la sincronizzazione con il negozio. Questo motivo è solo un contrassegno di prova che mostra che il blocco è stato eseguito. In un workflow reale, scriva un motivo che indichi al revisore che cosa controllare.
:::

### 5. Holiday → Christmas Holiday!

Se il testo contiene "Happy Holiday!", viene sostituito con "Happy Christmas Holiday!".

![Impostazioni del blocco 5](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/07-block-5-settings.png)

## Generare un testo di prova

Per provare il workflow, usi questo prompt nel Suo Flow. Produce un testo simile a quello di questa lezione, che termina con "Happy Holiday!" in modo che il blocco 5 abbia qualcosa da trovare.

```text
Write a short, warm, and appealing delivery message for the product. Mention that we will deliver the cake in beautiful gift packaging, together with a personal note, to the address provided by the customer.
The first part of the text should contain approximately 80 characters and describe the cake delivery in a natural, friendly, and elegant way.

Do not use capitalization randomly. Each variation should fit naturally into the sentence and context.
The final sentence must be exactly: "Happy Holiday!"
Keep the message friendly, festive, elegant, warm, and suitable for an online cakes shop.
```

Per il Test 1, sostituisca "cake" nel prompt con un altro prodotto, per esempio "sweets", in modo che il testo non contenga "cake".

## Test 1: testo senza "cake"

**Percorso:** blocco 1 → No → blocco 3 → fine.

![Risultato senza cake, segnalato con "Cake not found :("](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/08-test-1-result.png)

- Il motivo "Cake not found :(" mostra che il ramo **No** ha funzionato.
- Il blocco 3 non ha condizioni, eppure la sua azione è stata eseguita. Un **blocco senza condizioni esegue le sue azioni**.
- "Happy Holiday!" **non** è stato sostituito, anche se il testo lo contiene. Gli output del blocco 3 non sono collegati, quindi il blocco 5 non è mai stato raggiunto. **Quando un output non è collegato, l'elaborazione si ferma lì.**

## Test 2: testo con "cake"

**Percorso:** blocco 1 → Yes → blocco 2 → No → blocco 4 → Always → blocco 5.

![Risultato con festive cake e Happy Christmas Holiday](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/09-test-2-result.png)

- "delicious **festive cake**": il blocco 1 ha sostituito la parola e ha seguito il ramo **Yes**.
- Nessuna parola doppia, quindi il blocco 2 ha seguito il ramo **No**.
- Il motivo "Checked! Please sync!" mostra che il blocco 4 è stato eseguito.
- "Happy **Christmas** Holiday!": il blocco 5 è stato raggiunto tramite **Always** e ha eseguito la sua sostituzione.

## Regole da ricordare

| Regola | Che cosa significa per Lei |
| --- | --- |
| Yes / No scelgono il blocco successivo | Crei percorsi separati per i testi che soddisfano una condizione e per quelli che non la soddisfano |
| Always prosegue dopo le azioni | Lo usi per passare al controllo successivo, qualunque cosa abbia fatto il blocco |
| Un blocco senza condizioni esegue le sue azioni | Utile per un passaggio finale, come una segnalazione per la revisione |
| Un output non collegato termina l'elaborazione | Colleghi ogni percorso che deve raggiungere i blocchi successivi, altrimenti verranno saltati |
| Mark suspicious non interrompe il workflow | I blocchi successivi vengono eseguiti anche dopo una segnalazione |

:::tip
Prima di salvare, segua ogni percorso sull'area di lavoro con il dito: "se il testo contiene X, dove va dopo?". Una linea mancante è il motivo più comune per cui un blocco non viene mai eseguito.
:::
