---
id: '103000367976'
title: "4.1.2. Creazione di un nuovo flusso di contenuti e impostazioni iniziali."
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Il flusso di contenuti è il cuore dell'automazione in Fozzels. È un insieme
  di istruzioni che definisce come il sistema deve utilizzare il modello di IA
  selezionato per automat
---

Il flusso di contenuti è il cuore dell'automazione in Fozzels. È un insieme di istruzioni che definisce come il sistema deve utilizzare il modello di IA selezionato per generare, aggiornare e sincronizzare automaticamente i testi dei Suoi prodotti.

## 1\. Creazione di un nuovo flusso di contenuti

1.  **Acceda** al Suo account Fozzels.

2.  **Vada** alla sezione **Flussi di contenuti** nel menu dell'intestazione.

3.  **Selezioni** il negozio desiderato dall'elenco a discesa **"Scegli negozio"**.

4.  **Clicchi** sul pulsante **"Nuovo flusso prodotto"**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/dkNQlB5ollDUkXSZvdTsa61-fyN6j1hZdg.png)

5.  **Inserisca** il nome del flusso nel campo **Nome** (ad es. _Il mio primo flusso di contenuti_).

6.  **Selezioni** l'attributo da aggiornare dall'elenco a discesa **Attributo** (ad es. _Descrizione_).

7.  **Clicchi** sul pulsante **Salva**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/qDGTsHq3b5SDyDecYwdbl9fFgzUk1HDQpA.png)

8.  **Verifichi** che il nuovo flusso compaia nell'elenco dei flussi.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/ebU6dS9TViRZcxsQAbYNYjTpKnW-jd9Rvg.png)

## 2\. Configurazione dell'IA e del modello (Scheda 2: Configurazione IA)

1.  **Passi** alla scheda **Configurazione IA** (oppure **Passo successivo**).

2.  **Scelga** il provider di IA (ad es. _OpenAI | ChatGPT_ o _Google | Gemini_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/n9NN2mBe7EPu1HcyBY-Xasfs5m2pHHEdaA.png)

3.  **Selezioni** il modello di IA desiderato (ad es. _GPT-4o (new)_ o _Gemini 2.5 Flash Preview_) cliccando sul riquadro corrispondente.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TcZLY49TXUXTtDOIhsZe2EoRUodTwkNTMg.png)

4.  **Attivi** le funzioni di arricchimento facoltative, come **Abilita ricerca web**, se necessario.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/Hw53qskGZ3nBjK7FjvvsOEEDFznDFpSOpQ.png)

5.  **Imposti** nel campo **Numero di immagini** il numero di immagini (da 1 a 5) che l'IA utilizzerà per l'analisi e la generazione dei contenuti (facoltativo).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/csny9IgMXvADkHUZbDWfxWYWVQcbXer2wg.png)

6.  **Si assicuri** che la funzione **Ridimensionamento immagini** sia attiva (consigliato per evitare errori con file di grandi dimensioni; per saperne di più sul ridimensionamento delle immagini, consulti [questa pagina](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/)).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/h9tWKVAiOCFtONtDB2tWqYyXwNm8CJR4-g.png)

7.  **Imposti** il valore massimo di token (**Token massimi**) per la generazione.
**_![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TRNywCO8dEOrABpWxX3SZsrBiU9IPpD3Bw.png)_**

8.  **Selezioni** lo stile di testo desiderato (**Stili di testo**) dall'elenco a discesa (ad es. _Pubblicitario_ o _Creativo_)**.**
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/6COvPEOCPMjqptoEaqLECdel__NHP7_q6w.png)

9.  **Selezioni** il tono di testo desiderato (**Toni di testo**) dall'elenco a discesa (ad es. _Formale_ o _Entusiasta_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/EdX6_M7Fbou3VQRhLIAMcVccLkQ0LXcrJg.png)

10.  **Clicchi** sul pulsante **Salva** per salvare la configurazione.

## 3\. Selezione dei prodotti e creazione del prompt (Scheda 3: Selezione flusso e prompt)

1.  **Passi** alla scheda **Selezione flusso e prompt**.

2.  **Attivi** il flusso **spuntando** la casella **Flusso attivo**.

3.  **Selezioni** l'attributo da generare nel campo **Attributo** (deve corrispondere al passo 1.6).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vNOY4ePi2dZDPZTVgzFsZeKva-Ff-TZTEg.png)

4.  Applichi i filtri:
    4.1. **Utilizzi** la sezione dei filtri per limitare i prodotti per i quali verranno generati i contenuti.
    4.2. **Selezioni** un attributo (ad es. _Colore_ o _SKU_), definisca l'operatore (Uguale, Contiene, È vuoto, ecc.) e inserisca il valore. 4.3. Attenzione: se non vengono applicati filtri, i contenuti verranno generati per **TUTTI** i prodotti attualmente presenti nel Suo negozio.
**![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vv-HKjbxUtsGgQ1_c0yv_cdOSFcWpAzKDQ.png)**

5.  **Crei** l'istruzione (prompt) per l'IA:
    5.1. **Scriva** il testo principale del prompt nel campo Prompt centrale. _Il campo del prompt non può essere vuoto._
    5.2. **Inserisca** dati statici del prodotto (ad es. _Nome prodotto_ o _SKU_) cliccando o trascinando gli elementi dalla sezione Attributi.
    5.3. **Aggiunga** una logica dinamica (ad es. _SE Colore è Blu_) per la generazione condizionale dei contenuti utilizzando la sezione Attributi (se compilati).
    5.4. **Dia priorità** agli elementi con un'alta percentuale di densità dei dati per garantire una generazione dei contenuti riuscita sulla maggior parte dei prodotti.
    5.5 Per saperne di più sulla creazione di un prompt e sull'uso dello strumento di trascinamento, consulti [questa pagina](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).
    5.6 Per saperne di più sul salvataggio e sul caricamento di un prompt creato come modello, consulti [questa pagina](/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/1NaIIRbS4Q7wdMA8cA0jKSnoBsh-XUgdJg.png)

6.  **Clicchi** su **"Salva e anteprima"** per visualizzare i prodotti che soddisfano le condizioni (vedrà il numero totale di prodotti).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/o0INO3KlijbtEPCvPvScfTbViWXrJonVtw.png)
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/tlD_Xv4nww_sdHQbtB-nYMnM7ys3UZ9TnQ.png)

7.  **Clicchi** sul pulsante **Genera ora** nella finestra di anteprima per eseguire una generazione di prova.
    _![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/MF2Dc75ZZc1YdfVh3W57H-gtKgAR4Jq1XA.png)_

## 4\. Impostazioni di automazione (Scheda 4: Automazione)

1.  **Passi** alla scheda **Automazione**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/jT9iQbF_psMmhbveX_odN1GaB7VTK988lQ.png)

3.  **Imposti** nel campo **Numero di prodotti per cui creare contenuti al giorno** il numero di prodotti per i quali verranno creati contenuti a ogni esecuzione (ad es. 10).

4.  **Spunti** la casella **Completamente automatico** se desidera che il testo generato venga inviato **immediatamente** al Suo negozio senza conferma. _La maggior parte degli utenti inizialmente mantiene questa opzione disattivata per la revisione manuale._

5.  **Spunti** la casella **Crea automaticamente un nuovo testo quando un attributo di un prodotto cambia nel tuo negozio** per garantire la rigenerazione quando i dati di origine vengono aggiornati.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/rELhAfupqnLV-KmzzijdZcKzYqPy7Y6TlQ.png)

6.  **Attivi** la funzione di prevenzione della sovrapposizione dei contenuti (se non è il Suo primo flusso di contenuti) (facoltativo)

-   Può impostare un periodo di tempo (**ore, giorni, settimane, mesi o anni**) per impedire al sistema di generare nuovi contenuti per uno specifico attributo del prodotto se un flusso precedente lo ha già elaborato.

    -   **Buono a sapersi:** continueremo a tenere conto dei risultati di generazione passati per evitare duplicati, anche se il flusso che li ha creati è stato eliminato o archiviato.
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/bKuoDyZad0Su9sGZC5HVmzZt78JZK3cag.png)

7.  **Clicchi** sul pulsante **Salva**.

8.  **Esegua** il flusso:

-   **Pianifica e chiudi:** la generazione verrà aggiunta alla coda e partirà il giorno successivo, dopo il pool notturno automatico dei prodotti.

    -   **Esegui ora:** la generazione partirà immediatamente (per il numero di prodotti specificato nel campo _Numero di prodotti per cui creare contenuti al giorno_).
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/DR3WD6p7OkbQJcJEUgwKTj-yuvy7HCtong.png)

## 5\. Revisione dei risultati (Elenco batch)

1.  **Clicchi** sul pulsante **Elenco batch** nel flusso corrente per visualizzare i batch generati.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/s3rLqx0aN3qf63h0ohkm2ITtcQ4dpVGSgw.png)

2.  **Esamini** i dati generati nella colonna **Attributo di destinazione**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/krPPKGK1WQcRrrduGQVGEUUTkyNLOhI_2w.png)

3.  **Se necessario**, **modifichi** il testo generato cliccandoci sopra (in modalità Mostra HTML).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/iiy9xDUPUbNJaN3Dv19ByLztRC6SuuFw_A.png)

4.  **Clicchi** su **"Salva e sincronizza"** per inviare manualmente al Suo negozio i contenuti confermati.

5.  **Nota:** se Fozzels contrassegna i contenuti come **"sospetti"**, questi non possono essere sincronizzati senza una previa rigenerazione. **Rigeneri** i contenuti finché non soddisfano i requisiti di verifica.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/VlcFFEZm3jLMa2CfL0wyEj6i5l4B1n9sYA.png)

![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/lSusJ64-jIyhQStOHHai5u5y8pwWE2YoWw.png)

6\. Per saperne di più sulla revisione dei risultati, sulla sincronizzazione manuale e sulla gestione degli errori nei contenuti generati, **consulti** [questa pagina](/content-creation-flows/tracking-of-the-generated-results-dashboard/).
