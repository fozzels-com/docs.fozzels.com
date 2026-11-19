---
id: '103000408983'
title: "4.1.2.a Come configurare Content Flow automatici con l'IA"
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Come far generare e sincronizzare automaticamente i contenuti dei prodotti a
  un Content Flow: controllare il Flow prima dell'avvio, impostare limite
  giornaliero, approvazione e aggiornamenti nel passaggio Launch e avviare il
  Flow.
---

Un Content Flow automatico genera ogni giorno i contenuti dei prodotti in background e li invia al Suo negozio. Non deve avviare Lei le attività.

L'automazione si imposta nel passaggio 6 di un Content Flow, **Launch**. Per una descrizione di tutti e sei i passaggi, consulti [4.1.2. Creare un Content Flow: i sei passaggi guidati](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

## Passo 1: controlli il Flow prima dell'avvio

Faccia questi tre controlli prima di avviare il Flow. Così evita errori.

1. **Controlli la selezione dei prodotti.** Nel passaggio 2, **What and with what?**, si assicuri che la selezione contenga solo i prodotti che vuole elaborare.
2. **Provi il prompt.** Nel passaggio 5, **Test**, generi testi per alcuni prodotti reali. Si assicuri che i testi e i punteggi siano corretti.
3. **Eviti la ricorsione.** Non usi come fonte nel prompt il campo in cui il Flow scrive. Per esempio, non usi `product_description` come input per generare un nuovo `product_description`. Altrimenti Fozzels può generare il testo ancora e ancora.

## Passo 2: imposti l'automazione nel passaggio Launch

Nel passaggio 6, **Launch**, risponda a tre domande:

1. **How many products per day?** Scelga 10, 25, 50 o 100, oppure scriva un numero Suo. Il limite tiene bassi i costi e il lavoro di revisione. Quando Fozzels ha completato la selezione attuale, il Flow prende automaticamente i nuovi prodotti che corrispondono alla selezione.
2. **What happens with a new text?**
    - **I approve every text first** (consigliato): i nuovi testi vanno nella Sua lista di revisione. Fozzels non invia nulla al Suo negozio prima della Sua approvazione.
    - **Straight to my shop**: Fozzels pubblica i testi automaticamente. Può comunque modificarli o tornare alla versione precedente. I testi che Fozzels segna come sospetti aspettano sempre la Sua revisione.
3. **If a product changes later?** Attivi l'interruttore se vuole che Fozzels scriva automaticamente un nuovo testo quando nel Suo negozio cambia un attributo che il prompt usa, per esempio il colore o il materiale. Quando l'interruttore è disattivato, Fozzels scrive un testo per un prodotto una sola volta.

In **Advanced settings** può anche:

- impostare l'intervallo minimo che impedisce ad altri Flow di generare di nuovo gli stessi contenuti: **Use default**, **Override** o **Turn off**. Per maggiori informazioni, consulti [4.4.1 Funzione Impedisci la generazione di contenuti sovrapposti](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).
- cliccare su **Connect workflow** per aggiungere un'azione che parte dopo ogni testo, per esempio una traduzione.

## Passo 3: avvii il Flow

1. Clicchi su **Launch flow**.

    Fozzels mostra il messaggio "Your flow is running". Il Flow elabora prodotti ogni giorno, fino al limite giornaliero, finché non ha completato tutti i prodotti della selezione.

2. Per avviare subito la generazione, apra la pagina del Flow, clicchi sul menu **…** e poi su **Run Now**. Fozzels parte subito, anche quando il Flow ha già raggiunto il limite giornaliero di oggi.

Per continuare la configurazione più tardi, clicchi su **Save as draft** invece di **Launch flow**.

## Regole e consigli

- **Il Flow deve essere attivo.** Fozzels esegue solo i Flow attivi. Quando ferma un Flow, Fozzels ferma tutte le esecuzioni pianificate finché Lei non riavvia il Flow.
- **Può modificare un Flow attivo.** Le modifiche valgono per tutti i nuovi testi. Fozzels non cambia i testi che ha già generato, a meno che Lei non li generi di nuovo.
- **I nuovi prodotti entrano automaticamente.** Dopo ogni aggiornamento del catalogo, Fozzels confronta i prodotti del Suo negozio con la selezione del Flow. I nuovi prodotti che corrispondono alla selezione, per esempio 20 nuovi prodotti in una categoria, entrano automaticamente nel Flow.

## Articoli correlati

- [4.1.2. Creare un Content Flow: i sei passaggi guidati](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.7.4 Parole e frasi sospette: controllo avanzato della qualità dei contenuti](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)
- [3.5 Avviso "Ricorsione rilevata" durante la creazione di un Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)
- [4.4.1 Funzione Impedisci la generazione di contenuti sovrapposti](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)
- [4.7.3 Tag HTML consentiti per la generazione di testi con l'IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
