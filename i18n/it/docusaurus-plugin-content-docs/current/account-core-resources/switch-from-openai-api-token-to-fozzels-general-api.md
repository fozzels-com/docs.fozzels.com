---
id: '103000357927'
title: "1.4.1. Passare dal token API OpenAI all'API generale di Fozzels"
sidebar_position: 6
slug: /account-core-resources/switch-from-openai-api-token-to-fozzels-general-api
description: >-
  Abbiamo modificato il modo in cui Fozzels gestisce i pagamenti dei "token" dei
  modelli AI. Chiediamo a tutti i nostri utenti di modificare questa
  impostazione entro il 1° agosto 2025. La preghiamo
---

Abbiamo modificato il modo in cui Fozzels gestisce i pagamenti dei "token" dei modelli AI.

Chiediamo a tutti i nostri utenti di modificare questa impostazione entro il 1° agosto 2025.

La preghiamo di dedicare circa 10 minuti alla modifica di questa impostazione nel Suo account Fozzels.

Contenuti:

1.  Contesto
2.  Modifica
3.  Vantaggi
4.  ## Cosa fare, passo dopo passo

-   ### Configurare il pagamento

-   ### Rimuovere la Sua attuale chiave OpenAI

5.  ### Pronto

## Perché?

Fozzels è nato generando automaticamente contenuti per Lei utilizzando i modelli linguistici di OpenAI (attualmente GPT-4o).

Dopo la creazione di un nuovo account Fozzels, chiedevamo ai nostri utenti di creare anche un account OpenAI, inserirvi i dati della propria carta di credito, creare una chiave API OpenAI e copiarla e incollarla in Fozzels.

Tutto ciò funzionava molto bene, ma presentava alcuni svantaggi:

1.  Gli utenti impiegavano più tempo per iniziare, perché dovevano aprire anche un account presso OpenAI e svolgere "un'operazione un po' macchinosa" copiando e incollando chiavi API.
2.  I nuovi account OpenAI hanno limiti di utilizzo (rate limit ecc.), quindi gli utenti di Fozzels non potevano sfruttare la creazione in batch di contenuti di prodotto in grandi quantità.
3.  I nuovi account OpenAI hanno accesso limitato ai modelli; quindi gli utenti non potevano sempre utilizzare Fozzels, ad esempio, per generare immagini con l'AI.
4.  Non potevamo offrire facilmente ai nostri utenti l'accesso a modelli AI di altri fornitori, come Google (Gemini), Anthropic (Claude) o xAi (Grok).

## Modifica

Per risolvere questi problemi, Fozzels ha modificato il modo in cui gestiamo i pagamenti dei "token" AI.

Invece di pagare separatamente ciascun fornitore di AI, ora pagherà direttamente a Fozzels l'utilizzo dell'AI, e Fozzels pagherà per Suo conto i fornitori di AI. Fozzels utilizza [Stripe](https://stripe.com/nl/payments), uno dei maggiori fornitori di pagamenti online al mondo, per gestire le operazioni finanziarie.

## Vantaggi

Questa soluzione offre i seguenti vantaggi:

1.  Un onboarding più rapido e semplice per i nuovi utenti di Fozzels;
2.  Potrà sempre generare contenuti per molti prodotti (niente più limiti sugli account), perché Fozzels dispone di account "illimitati" presso i fornitori di AI;
3.  Può utilizzare modelli di generazione di immagini in Fozzels;
4.  Può scegliere tra più modelli AI oltre a quelli di OpenAI (Google Gemini 2.5 Flash; xAi Grok 3; Anthropic Claude 4 Sonnet, e altri seguiranno);
5.  Ora può attivare la "ricerca web", il che significa che può consentire all'AI di cercare su internet, ad esempio, dati mancanti e di utilizzarli per generare dati o descrizioni di prodotto.

Attualmente può scegliere tra i seguenti modelli AI:

![Tutti i modelli AI disponibili in Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/AU9GwQ3QT_bYnbdVWdVFZXcOrtjOBOSAAQ.jpg)

##

## Cosa fare, passo dopo passo

### A) Configurare il pagamento

1.  Acceda al Suo account Fozzels e clicchi sulla Sua **immagine utente** in alto a destra.
2.  Nel menu a discesa, clicchi su **Settings**.
3.  Nel menu Settings a sinistra, clicchi su [**Payments**](https://app.fozzels.com/user/settings/payments).
4.  Vedrà la seguente schermata. Clicchi sul pulsante "**Charge Credit now**".
    ![Schermata dei pagamenti di Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/tcgrCp0izWkeJxIjlmzD6xS5OZByebIyHg.png)

5.  Vedrà una finestra pop-up che richiede un importo. Inserisca l'importo che desidera aggiungere al Suo saldo. Il valore predefinito è € 50, ma può modificarlo se lo desidera. Quindi clicchi sul pulsante "**Charge Now**".
    ![Pop-up Charge Credits now](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/drZn1vvSyjH8rRfhLn8mWW_HuhAo2tTs-w.png)

6.  Verrà reindirizzato alla pagina di pagamento di Stripe, dove potrà inserire i Suoi dati di pagamento.
    Tenga presente che nessun dato di pagamento viene salvato presso Fozzels, ma solo presso Stripe.
    Può utilizzare i seguenti metodi di pagamento: iDEAL, carte di credito (VISA, American Express, Mastercard, Discover), Amazon Pay, Paypal, Revolut Pay e Bancontact.
    ![Schermata di pagamento Stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/BRJcSSvdJ5LBFl1zVDZ0UyhLPh4URCTO1w.png)

7.  Si ricordi, se questo pagamento è per l'account della Sua azienda, di inserire anche la **ragione sociale** e la **partita IVA**.
    ![Aggiungere i dati IVA su Stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/ZlO4Se712OMvnGl-aiWPNytLfwhRuRKerQ.png)

8.  Dopo il pagamento andato a buon fine, verrà reindirizzato a Fozzels e vedrà il Suo saldo attuale nella pagina Payments.
    ![Saldo aggiornato nella pagina Payments](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/Own2E9SNmWHQ1UHAoPh9oA1cXL0Sz8BkLQ.png)

9.  Successivamente, \[_facoltativo_\], se desidera "ricaricare" automaticamente il saldo del Suo account quando raggiunge un importo basso, può impostarlo cliccando sul pulsante "**Configure Charge Credits**". In questo modo, la generazione di contenuti tramite i Flow che ha configurato non verrà mai interrotta.
    Inserisca gli importi che desidera impostare, attivi la casella "_Yes, automatically recharge my card when my credit balance falls below a threshold_" e clicchi sul pulsante **Save**.
    ![Pop-up delle impostazioni di ricarica automatica](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/3BrEoNMQNNw7wOSkoZGXdLG3l9cyJwGeQ.png)

### B) Rimuovere la Sua attuale chiave OpenAI

Dopo aver configurato i Suoi dati di pagamento, si ricordi di **rimuovere** l'attuale chiave API OpenAI dal Suo account.
In questo modo, Fozzels utilizzerà le proprie chiavi API per tutti i fornitori di AI.

1.  Per attivare questa modalità, clicchi su "**Open AI Token**" nel menu a sinistra.
    ![Menu delle impostazioni di Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/zFcW_bCeIp8XohHkBB2EQ8E7ZbEkvU1xTg.png)

2.  Selezioni il Suo token nel campo Token, **cancelli tutto il contenuto del campo** e clicchi sul pulsante **Save**.
    ![Campo Token API OpenAI di Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/z6eQMCzEGgNDu4KJsBT_QlGBwDiOAHKsTg.png)

Ora è tutto pronto.

Ecco fatto! Ottimo lavoro.
Grazie e buon divertimento con Fozzels.
