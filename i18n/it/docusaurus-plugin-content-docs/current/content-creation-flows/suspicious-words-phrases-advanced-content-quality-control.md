---
id: '103000390709'
title: '4.7.4 Parole e frasi sospette: controllo avanzato della qualità dei contenuti'
sidebar_position: 21
slug: >-
  /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: >-
  La funzione Parole e frasi sospette segnala i testi generati che contengono
  parole, frasi o schemi simili a commenti che non vuole pubblicare, così può
  verificarli prima che vadano online.
---

La funzione **Suspicious Words & Phrases** segnala i testi generati che contengono parole, frasi o schemi simili a commenti che Lei non vuole pubblicare. I completamenti segnalati ricevono lo stato **Suspicious**, così può filtrarli e verificarli prima che vadano online.

Intercetta gli artefatti dell'IA (scuse, note al lettore, markup rimasto nel testo), i residui tecnici e tutti i termini che sceglie di bloccare, in più lingue contemporaneamente.

## Dove trovarla

Vada su **Settings** > **Flow** e scorra fino al blocco **Suspicious Words & Phrases**. Le impostazioni si applicano a tutti i Suoi flussi.

![Impostazioni di Suspicious Words & Phrases](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-01-settings.png)

## Come funziona la corrispondenza

Per impostazione predefinita, una parola viene trovata solo come parola intera. Aggiunga `*` all'inizio o alla fine per ampliare la ricerca. Maiuscole e minuscole non contano mai.

| Voce | Cosa trova |
| --- | --- |
| `bright` | solo _bright_, non _brightness_ né _ultrabright_ |
| `bright*` | anche _brightness_ e _brightly_ |
| `*bright` | anche _ultrabright_ |
| `*bright*` | il testo in qualsiasi punto, compreso _ultrabrightness_ |
| `bri*ght` | il testo esatto `bri*ght` — `*` funziona solo all'inizio o alla fine |

Le stesse regole valgono per le frasi. Ad esempio, `antwoord` non segnala mai _verantwoorde_, `antwoord*` segnala anche _antwoorden_ e `*seo*` viene trovato ovunque, perfino dentro _museo_.

## Cosa viene segnalato

Il controllo si basa su tre fonti: le parole predefinite, gli schemi integrati e le Sue parole.

### Parole sospette predefinite

Fozzels include un elenco già pronto di artefatti comuni dell'IA in diverse lingue, come `*sorry*`, `*please*`, `*note:*`, `*markdown*`, `*<html*`, `*Let op:*` e `*het spijt me*`. Deselezioni le parole che non Le servono e non verranno più segnalate.

### Schemi integrati

Gli schemi integrati cercano la _forma_ di un commento dell'IA, non una parola precisa. Intercettano formulazioni che il modello non ha mai usato prima, come:

- "Let's" o "Let me" davanti a un verbo, come in _"Let's re-verify"_
- Un controllo annunciato, come in _"One last check"_ o _"Final check"_
- Una domanda sul testo stesso, come in _"Is the wording accurate?"_
- Un risultato consegnato, come in _"Final answer"_ o _"Here is the"_
- Caratteri contati, come in _"59 chars"_ o _"character limit"_
- Le istruzioni citate di nuovo, come in _"the prompt says"_ o _"mandatory words"_
- La parola "I" davanti a un verbo, come in _"I forgot"_ o _"I'll use"_

L'elenco completo si trova nelle impostazioni, con un esempio per ogni schema. Gli schemi non si possono modificare: faccia clic su uno schema per attivarlo o disattivarlo. Disattivi uno schema se segnala i Suoi testi.

Gli schemi in grigio partono disattivati. Corrispondono a forme che anche i testi normali usano, come una domanda in una FAQ di prodotto o una riga che inizia con _Great,_. Li attivi solo se preferisce rivedere alcune delle Sue frasi piuttosto che lasciarsi sfuggire quei commenti.

### Le Sue parole

In **Add your own suspicious words** digiti una parola o una frase e prema **Enter**. Lo usi per nomi di concorrenti, termini sensibili del marchio o errori tipici di una lingua. Può mescolare più lingue nello stesso elenco, cosa utile per i negozi che pubblicano in più localizzazioni.

## Come funziona la segnalazione

Ogni nuova generazione viene controllata in base alle Sue impostazioni attuali, appena viene creata. Quando c'è una corrispondenza:

- Il completamento riceve lo stato **Suspicious**.
- Le parole trovate vengono **evidenziate** nell'editor di testo, così vede subito cosa ha causato la segnalazione.
- Decide Lei cosa fare: **modificare** il testo manualmente, **rigenerarlo** oppure **modificare l'elenco** se la segnalazione è un falso allarme.

Nell'elenco dei completamenti, un risultato segnalato appare così. La parola trovata (qui _hello_) è evidenziata nel testo. Il pulsante **Sync Now** mostra un'icona di avviso e il messaggio _"Completion looks suspicious, possible AI recommendations found."_

![Un completamento sospetto nell'elenco dei completamenti](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-02-suspicious-completion.png)

Un completamento di questo tipo non va sincronizzato così com'è. Lo rigeneri oppure modifichi il testo per eliminare le parole segnalate.

Per rivedere solo gli elementi segnalati, attivi **Show only suspicious** nella **Daily Total Batch List**. Salta i risultati corretti e passa direttamente ai testi che richiedono attenzione.

## Aggiornare i completamenti esistenti

Modificare l'elenco influisce solo sulle nuove generazioni. I completamenti già esistenti **non** vengono ricontrollati automaticamente: il loro stato Suspicious resta invariato finché non lo ricalcola.

Per applicare le nuove impostazioni ai testi esistenti:

1.  Apra la **Content Completion List** dell'attributo che vuole controllare.
2.  Selezioni i prodotti da ricontrollare.
3.  Apra il menu **Actions** e scelga **Update Suspicious Flag**.

![Update Suspicious Flag nel menu Actions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-03-update-suspicious-flag.png)

I completamenti selezionati vengono analizzati di nuovo in base al Suo elenco e agli schemi attuali. I prodotti che non corrispondono più perdono lo stato Suspicious e sono pronti per la sincronizzazione.

**Esempio:** ha aggiunto `sorry` come parola sospetta, poi ha lanciato un marchio chiamato _Sorry Boy_. Ora centinaia di descrizioni sono segnalate. Rimuova o deselezioni `sorry` in Settings, poi esegua **Update Suspicious Flag** su quei prodotti: le segnalazioni scompaiono e può sincronizzarli in blocco senza modificare ogni testo.

## Suggerimenti

- Inizi con parole intere e aggiunga `*` solo quando Le servono le varianti. `*seo*` trova anche _museo_, e questo può segnalare testi normali.
- Se uno schema integrato continua a segnalare testi corretti nel Suo settore, lo disattivi invece di modificare i testi uno per uno.
- Dopo ogni modifica all'elenco, esegua **Update Suspicious Flag** sui prodotti che vuole ricontrollare.

Usati insieme, l'elenco di parole, gli schemi e l'azione di massa Le offrono un unico posto per controllare cosa arriva nel Suo negozio, in ogni flusso e in ogni lingua.
