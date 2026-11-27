---
title: '4.3.4 Prompt principale e prompt per testo: come Fozzels invia il Suo prompt'
sidebar_position: 11.5
slug: /content-creation-flows/main-prompt-and-prompt-per-text
description: >-
  Ogni richiesta all'IA ha due parti: il prompt principale, uguale per ogni
  prodotto, e il prompt per testo, che contiene i dati del prodotto. Cosa va
  dove, perché e come passare un Flow esistente al nuovo sistema.
---

Fozzels invia all'IA un prompt per ogni prodotto. Questo prompt ha due parti:

- il **Main prompt** (prompt principale), che contiene le regole per tutto il Flow ed è uguale per ogni prodotto, e
- il **Prompt per text** (prompt per testo), che contiene il compito per un campo, con i dati di questo prodotto.

Fozzels invia il prompt principale all'IA come *istruzione di sistema*: le direttive permanenti che l'IA tiene presenti mentre svolge il compito. Questo articolo spiega cosa va in ciascuna parte, perché è importante e come passare un Flow esistente al nuovo sistema.

## Le due parti in sintesi

| | Main prompt (Prompt principale) | Prompt per text (Prompt per testo) |
|---|---|---|
| **Cos'è** | Le regole che valgono per ogni testo del Flow | Il compito per un campo |
| **Contenuto tipico** | Chi scrive, per chi, con quale tono, i principi di neuromarketing, le parole chiave, cosa non menzionare mai, le regole di controllo, le Sue istruzioni permanenti | Lunghezza, struttura, il blocco di fiducia, i link interni e l'istruzione con gli attributi del prodotto |
| **Dati del prodotto** | Non consentiti. Deve essere uguale per ogni prodotto | Sì: attributi, condizioni e snippet |
| **Dove lo modifica** | Passaggio 3 della procedura guidata del Flow (**Main prompt**) o scheda **Main prompt** nella pagina del Flow | Passaggio 4 della procedura guidata del Flow (**Prompt per text**), una scheda per ogni campo |
| **Invio** | Una sola volta, prima dei prompt dei campi | Per ogni campo, con i dati di questo prodotto |

:::note
Alcuni articoli e screenshot usano ancora i nomi precedenti dei passaggi: il passaggio 3 si chiamava **Enrich the text** e il passaggio 4 **Fields**. La scheda della pagina del Flow si chiamava **System prompt**. Sono gli stessi passaggi e la stessa scheda.
:::

## Perché due parti?

- **L'IA segue meglio le Sue regole.** I modelli di IA danno più peso a un'istruzione di sistema che a una riga nel mezzo di un prompt lungo. Il tono, le parole da evitare e la forma di cortesia vengono rispettati in modo più costante in tutti i Suoi prodotti.
- **I dati dei prodotti non possono prevalere sulle Sue regole.** Il testo in un campo del prodotto, per esempio una nota del fornitore che dice "ignora le istruzioni precedenti", resta nel prompt per testo. Non cambia le regole del prompt principale.
- **Più veloce e più economico nei Flow grandi.** Il prompt principale è identico, parola per parola, per ogni prodotto. I fornitori di IA possono riutilizzare una parte di una richiesta che hanno già visto. Così la richiesta è più veloce e può costare meno.

## Cosa va nel prompt principale

Inserisca nel prompt principale tutto ciò che vale per **ogni** testo del Flow:

- **Role of the AI**, **Target audience** e **Tone of voice**
- **Neuromarketing principles**
- **Keywords**
- **Do not mention**: parole e argomenti che non devono mai comparire nel testo
- **Guidelines and check rules**, le regole standard di Fozzels e le Sue regole
- **Your own instructions**, con parole Sue, per esempio "Dia sempre del *Lei* al lettore" o "Spediamo in 24 ore, non prometta mai una consegna più rapida"

Nel passaggio 3 attiva questi blocchi e li compila. Fozzels scrive il prompt principale a partire da essi. Le fonti che imposta nel passaggio 3 (**Attributes from your store**, **Look at photos** e **Search the internet**) sono diverse per ogni prodotto, quindi Fozzels le invia con il prompt per testo. Sotto i blocchi, in **Your main prompt**, vede il risultato e può anche modificarlo a mano.

### Nessun dato del prodotto nel prompt principale

Il prompt principale deve essere uguale per ogni prodotto, quindi non può contenere dati del prodotto:

- L'editor del prompt principale non ha il pannello **Attributes** né **Preview**. Un'anteprima sarebbe identica per ogni prodotto. Al suo posto, ogni blocco mostra il testo che l'IA legge per quel blocco.
- Gli snippet che leggono dati del prodotto e gli snippet con condizioni non sono disponibili lì. Se uno snippet di questo tipo è già in un prompt principale e Lei vi aggiunge dati del prodotto, Fozzels mostra il messaggio *"Questo snippet si trova nel prompt principale di …. Il prompt principale è uguale per ogni prodotto, quindi lì lo snippet non può leggere il prodotto. Lo tolga prima da quei prompt principali oppure salvi la modifica come nuovo snippet."* Tolga prima lo snippet da quei prompt principali oppure salvi la modifica come nuovo snippet.

Tutto ciò che dipende dal prodotto va nel prompt per testo.

## Cosa va nel prompt per testo

Il prompt per testo è il compito per un campo. Nel passaggio 4, ogni campo del Flow ha una scheda con:

- la **lunghezza** del testo,
- la **struttura**: le sezioni, il loro ordine e i loro titoli,
- il **blocco di fiducia** e i **link interni**, per i campi che li prevedono,
- l'**Instruction for [field]**: cosa deve scrivere l'IA in questo campo, con gli attributi e le condizioni del prodotto.

Il prompt principale vale per ogni campo, quindi qui non ripeta il ruolo, il tono o le regole. Scriva solo ciò che è specifico di questo campo, per esempio *"Scriva una meta description di al massimo 155 caratteri che nomini il brand e il vantaggio principale."*

Fozzels aggiunge da sé le istruzioni tecniche al prompt per testo: il formato della risposta, le opzioni che un campo di selezione consente e la lunghezza massima del campo. Non deve scriverle Lei.

## Dove modificare il prompt principale

- **In un nuovo Flow:** passaggio 3, **Main prompt**. Un nuovo Flow parte con il prompt principale del Suo [Brand Profile](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/#brand-profile) predefinito.
- **In un Flow esistente:** nella pagina del Flow, la scheda **Main prompt** mostra il prompt principale così come lo legge l'IA. Faccia clic su **Change** per modificarlo. Viene salvato solo il prompt principale. I prompt per testo restano invariati.
- **Brand Profile:** nel passaggio 3, faccia clic su **Load brand profile** per usare un profilo salvato, oppure su **Save as brand profile** per conservare il prompt principale di questo Flow per altri Flow. Un Flow riceve una copia del profilo. Se in seguito modifica il profilo, Fozzels non cambia i Suoi Flow esistenti.

## Flow esistenti

Non deve fare nulla. I Flow creati prima di questa modifica continuano a funzionare:

- Il prompt principale di un Flow più vecchio parte vuoto e il suo prompt resta dov'era.
- I blocchi per tutto il Flow che sono già nel prompt, come il ruolo, il pubblico o il tono, vengono inviati automaticamente con il prompt principale.
- Il testo che ha scritto Lei resta nel prompt per testo, esattamente dove l'ha scritto. Fozzels non sposta le Sue frasi, perché una frase può avere un altro significato lontano da quelle vicine.

Per ottenere il massimo vantaggio, sposti Lei stesso le Sue regole permanenti nel prompt principale.

### Passare un Flow esistente al nuovo sistema

1. Apra il Flow e legga il suo prompt. Segni le frasi che valgono per **ogni** prodotto: il personaggio, la voce del brand, il pubblico, la forma di cortesia, le parole da evitare.
2. Nella pagina del Flow, faccia clic su **Change** nella scheda **Main prompt**.
3. Aggiunga queste regole con i blocchi (ruolo, pubblico, tono, cosa non menzionare, regole Sue) oppure le scriva come istruzioni Sue. Salvi.
4. Elimini le stesse frasi dal prompt di ogni campo, così l'IA non le riceve due volte.
5. Provi il Flow su alcuni prodotti reali e confronti i testi con i risultati precedenti.

**Esempio.** Un prompt che conteneva tutto:

> Sei un copywriter per un marchio di scarpe premium. Scrivi per donne tra i 30 e i 50 anni che apprezzano il comfort. Non menzionare mai prezzi o sconti. Dai sempre del "tu".
> Scrivi una descrizione del prodotto di circa 120 parole per **Name**. Cita il materiale **Material** e il colore **Colour**.

Dopo il passaggio:

- **Main prompt:** *Sei un copywriter per un marchio di scarpe premium. Scrivi per donne tra i 30 e i 50 anni che apprezzano il comfort. Non menzionare mai prezzi o sconti. Dai sempre del "tu".*
- **Prompt per text (Description):** *Scrivi una descrizione del prodotto di circa 120 parole per* **Name**. *Cita il materiale* **Material** *e il colore* **Colour**.

## Da sapere

- **Nessuna istruzione doppia.** Se il prompt di un campo contiene ancora un blocco che il prompt principale ha già, per esempio un secondo tono di voce, Fozzels invia quel blocco una sola volta, dal prompt principale.
- **Più campi in un Flow.** Tutti i campi vengono creati in un'unica richiesta all'IA per ogni prodotto e condividono il prompt principale. Così il ruolo, il pubblico e le regole valgono automaticamente anche per i campi aggiuntivi.
- **Vedere cosa è stato inviato.** Nell'elenco dei contenuti generati, il prompt di ogni testo mostra entrambe le parti, prima il prompt principale.

## Articoli correlati

- [4.1.2. Creare un Content Flow: i sei passaggi guidati](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.3.2 Configurazione e utilizzo del prompt: il nuovo editor dei prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)
- [4.3.3. Scrivere prompt efficaci (raccomandazioni)](/content-creation-flows/writing-effective-prompts-recommendations/)
