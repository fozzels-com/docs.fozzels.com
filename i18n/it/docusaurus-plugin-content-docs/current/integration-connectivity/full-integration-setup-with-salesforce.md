---
id: '103000410190'
title: 2.10.1 Configurazione completa dell'integrazione con Salesforce.
sidebar_position: 21
slug: /integration-connectivity/full-integration-setup-with-salesforce
description: >-
  Questa guida La accompagna nella creazione di una nuova integrazione con
  Salesforce Commerce Cloud, dalla configurazione iniziale al salvataggio delle
  impostazioni, all'attivazione di Siti web e negozi…
---

Questa guida La accompagna nella creazione di una nuova integrazione con Salesforce Commerce Cloud, dalla configurazione iniziale al salvataggio delle impostazioni, all'attivazione di Siti web e negozi, al recupero dei dati dei prodotti e alla revisione delle mappature degli attributi. Imparerà a compilare i dettagli di connessione richiesti (Short Code, Organization ID, Client ID/Secret), a capire come funziona la pianificazione globale del recupero con l'orario UTC e quando configurare i ritardi tra le richieste.

## Passaggio 1: Vada alla creazione dell'integrazione

1.  Nel menu laterale, vada su **Home → Integrazioni**.
2.  Clicchi sul pulsante **Crea** (angolo in alto a destra).
3.  Nella schermata **"Scegli la tua integrazione"**, selezioni la piattaforma **Salesforce**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/IJA_dZ5zfXA48PaD8HMxsHD71ItRVgwANg.png)
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/sTmy2P9U7mD0ENp0NC-gg8Y0oT53ZtfzLg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/bbv7bi_E2qSTk1bDVEN706lCu7fETDnn1g.png)
Si apre così il modulo **Crea nuova integrazione**, composto da tre passaggi: **1\. Configurazione → 2. Siti web e negozi → 3. Attributi**.

## Passaggio 2: Compili il modulo di configurazione
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/_4n7-QBaGDhtz4yq_LpPLXF5t7s-sE-_vQ.png)

### Campi principali:

| Campo | Descrizione |
| --- | --- |
| **Nome**\* | Nome dell'integrazione, utilizzato per identificarla nell'elenco delle integrazioni |
| **URL**\* | URL di base della Sua istanza Salesforce Commerce Cloud |

**Blocco Configurazione:**

| Campo | Descrizione |
| --- | --- |
| **Short Code**\* | Codice breve della Sua istanza Salesforce Commerce Cloud |
| **Organization ID**\* | ID della Sua organizzazione Salesforce |
| **Client ID**\* | ID del client OAuth creato in Salesforce Account Manager |
| **Client Secret**\* | Chiave segreta di quel client OAuth |
| **Image CDN Base URL** _(facoltativo)_ | URL di base della CDN (DIS) utilizzata per scaricare le immagini dei prodotti. Esempio: `https://exxe.ххххх.commercecloud.salesforce.com/dw/image/v2/XXXX-XXX` |

_I campi contrassegnati da un asterisco (\*) sono obbligatori._

## Passaggio 3: Pianificazione globale del recupero

L'interruttore **Sovrascrivi pianificazione globale del recupero** Le consente di stabilire quando deve essere eseguita la sincronizzazione dei prodotti. Se disattivato, viene utilizzata la pianificazione globale predefinita (`03:30`).

> ⚠️ **Importante: l'orario è impostato in UTC**
>
> Il campo Pianificazione globale del recupero utilizza l'**orario UTC**, non il Suo fuso orario locale.
>
> Questo è particolarmente rilevante se dispone di più negozi in regioni diverse: un orario di basso traffico (notturno) per un negozio può coincidere con le ore di punta di un altro. Eseguire un recupero dei dati nelle ore di punta può aggiungere carico al Suo sito e rallentarlo per gli acquirenti.
>
> **Raccomandazione:** se i Suoi negozi servono fusi orari diversi, non si affidi esclusivamente alla Pianificazione globale del recupero: sovrascriva la pianificazione per ogni negozio (`Overwrite Global Pull Schedule` nelle impostazioni di quel negozio), impostando un orario corrispondente all'effettiva fascia di basso traffico di quel negozio, convertito in UTC.

## Passaggio 4: Ritardo tra le pagine / Ritardo tra le richieste

I campi **Ritardo tra le pagine** e **Ritardo tra le richieste** impostano una pausa (in millisecondi, intervallo 100–15000 ms) rispettivamente tra le pagine di risultati e tra le singole richieste API.

> ℹ️ **Suggerimento:** questi campi sono facoltativi. Se lasciati vuoti, viene utilizzato il ritardo predefinito della piattaforma.
>
> Le consigliamo di **non impostare subito questi valori** durante la prima configurazione dell'integrazione. Esegua invece alcuni recuperi di dati con le impostazioni predefinite e osservi il risultato:
>
> -   Se i recuperi vengono completati correttamente, non è necessaria alcuna ulteriore configurazione.
> -   Se si verificano errori (ad es. rate limiting da parte di Salesforce), torni alle impostazioni dell'integrazione e aumenti il ritardo per ridurre il carico sull'API.

## Passaggio 5: Salvi

Una volta compilati tutti i campi obbligatori, clicchi su **Salva** per passare al passaggio successivo, **Siti web e negozi**.

## Passaggio 6: Siti web e negozi

Dopo aver cliccato su **Salva**, verrà reindirizzato alla scheda **2\. Siti web e negozi** dell'integrazione.

> ✅ _Vedrà un messaggio di conferma: "L'integrazione è stata creata correttamente. Non dimentichi di attivare la Sua integrazione."_

### 1\. Attivi l'integrazione

Prima di poter recuperare i Suoi negozi/siti web, porti l'interruttore **Attiva** su ON (in alto a destra nella pagina, nella barra di stato dell'integrazione: Attiva / Autorizzata / REST API connessa).

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/Fn99DCFxArzsidpIraptWFwTO-BnqzkyTg.png)

### 2\. Recuperi siti web e negozi

Clicchi sul pulsante **RECUPERA SITI WEB E NEGOZI**. In questo modo autorizza la connessione a Salesforce e recupera i siti web e i negozi disponibili.

> ✅ In caso di esito positivo, vedrà: "Lo stato dell'integrazione è stato aggiornato" e successivamente "I Suoi siti web e negozi sono stati recuperati correttamente dall'integrazione". Gli indicatori **Autorizzata** e **REST API connessa** diventano verdi (✓).

### 3\. Attivi siti web e negozi

Una volta recuperati, vedrà una tabella suddivisa in **Siti web** (Nome, Codice, Stato) e **Negozi** (Lingua, Stato, Pianificazione recupero, Prodotti, Avanzamento recupero, Azioni).

Attivi ciascun **sito web** e ciascun **negozio**, uno alla volta.

> ℹ️ **Nota:** una stella (⭐) accanto al nome di un sito web o di un negozio indica che si tratta di quello **predefinito (principale)**.

### 4\. Recuperi i prodotti

Una volta attivato un negozio, il pulsante **Recupera prodotti** diventa disponibile. Cliccandolo si avvia il recupero dei dati dei prodotti.

> ℹ️ **Nota:** l'avvio di un recupero esegue in realtà **4 passaggi in sequenza**, mostrati come barre di avanzamento separate quando espande Avanzamento recupero (tramite la freccia a discesa accanto al pulsante):
>
> 1.  **Attributo prodotto**
> 2.  **Attributo categoria**
> 3.  **Categoria**
> 4.  **Prodotto**
>
> Ogni passaggio ha la propria barra di avanzamento e un'icona **Aggiorna** per rieseguire singolarmente quel passaggio specifico. Ogni passaggio dispone inoltre di un'icona **Visualizza log** per consultare il log dettagliato di quel passaggio del recupero.
>
> Inoltre, i passaggi **Categoria** e **Prodotto** hanno un'icona **Visualizza nel catalogo**, che Le consente di passare direttamente alle categorie/ai prodotti recuperati nel Suo catalogo.

Quando tutti e 4 i passaggi raggiungono il 100%, la barra principale **Avanzamento recupero** mostra **"Prodotto - 100%"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/AXWOgFul8iBQWgLq0jQ5k5HmCHYYds3MQQ.png)

## Passaggio 7: Attributi

Il terzo e ultimo passaggio, **Attributi**, mostra l'elenco degli attributi recuperati dal Suo catalogo Salesforce, insieme al relativo stato di mappatura.

### Selettore della modalità attributi

Per impostazione predefinita, la tabella mostra gli attributi **Prodotto**. Nella parte superiore della tabella è presente un selettore di modalità con tre opzioni:

-   **Prodotto**
-   **Categoria**
-   **Marchio**

> ⚠️ **Nota:** per questa integrazione, gli attributi **Marchio** **non sono ancora supportati**, anche se l'opzione compare nel selettore.

Il cambio di modalità modifica l'insieme di attributi visualizzato. Ad esempio, passando a **Categoria** vengono mostrati gli attributi specifici delle categorie, come `Category ID`, `Description`, `Name`, `Page Description`, `Page Keywords`, `Page Title`.

### Colonne della tabella:

| Colonna | Descrizione |
| --- | --- |
| **Nome** | ID ed etichetta dell'attributo (ad es. `35759: Brand`, `35777: Category ID`) |
| **Codice** | Il codice tecnico dell'attributo in Salesforce (ad es. `brand`, `ean`, `origin_category_id`) |
| **Ambito** | Ambito dell'attributo (se applicabile) |
| **Mappatura generica** | Indica se l'attributo è mappato a un campo generico/di sistema |
| **Consenti HTML** | Indica se per questo attributo è consentito contenuto HTML (✓/—) |
| **Percentuale di densità dei dati** | Percentuale di prodotti/categorie che hanno effettivamente un valore per questo attributo; aiuta a individuare i campi poco popolati (ad es. `Page Keywords` al 26%, `Category ID` al 100%) |
| **Dati di esempio** | Un valore di esempio recuperato da un record reale (prodotto o categoria, a seconda della modalità) |
| **Attivo** | Indica se l'attributo è attualmente attivo/in uso (✓) |
| **Azioni** | Icona Modifica (✏️) per configurare la mappatura dell'attributo |

### Opzioni della barra degli strumenti:

-   Menu a tendina **Azioni**: azioni di massa per gli attributi selezionati
-   **Selettore del negozio** (ad es. Mystore`: en_us (en_US)`): scelga da quale negozio recuperare i dati di esempio
-   **Ottieni dati di esempio casuali**: una volta selezionato un negozio dal menu a tendina, compila la colonna **Dati di esempio** con un nuovo valore di esempio scelto casualmente per ogni attributo; utile per verificare rapidamente la mappatura
-   **Visibilità colonne**: mostra/nasconde le colonne della tabella
-   **Nuovo attributo** (in alto a destra): aggiunge manualmente un attributo personalizzato non incluso nell'elenco predefinito

> ℹ️ **Nota:** gli attributi mostrati per impostazione predefinita costituiscono il **set di base** fornito di serie (ad es. Brand, EAN, Long Description, Price per la modalità Prodotto; Category ID, Name, Description per la modalità Categoria). Se il Suo catalogo Salesforce include **attributi personalizzati**, utilizzi il pulsante **Nuovo attributo** per aggiungerli e mapparli manualmente.

## Passaggio 8: Modifica di un attributo

Cliccando sull'icona ✏️ **Modifica attributo** nella colonna Azioni si apre il popup **Modifica attributo**, che mostra tutti i dettagli dell'attributo: alcuni campi sono modificabili, altri sono valori di sola lettura/di sistema.

### Campi:

| Campo | Descrizione |
| --- | --- |
| **Tipo di entità** | Indica se l'attributo appartiene a un **Prodotto**, a una **Categoria** o a un **Marchio** _(sola lettura)_ |
| **Nome (nome dell'attributo di origine nell'integrazione)** | Il nome visualizzato dell'attributo così come proviene da Salesforce (ad es. `Long Description`) |
| **Codice** | Il codice interno dell'attributo (ad es. `longDescription`) |
| **ID attributo di origine** | L'ID dell'attributo sul lato dell'integrazione di origine (se definito) |
| **Codice attributo di origine** | Il codice dell'attributo così come esiste sul lato Salesforce (ad es. `longDescription`) |
| **Input frontend** | Il tipo di input utilizzato per visualizzare/modificare questo campo (ad es. `Textarea`) |
| **Visualizzazione del campo frontend con widget** | Widget facoltativo utilizzato per visualizzare questo campo nel frontend |
| **Mappatura generica** ℹ️ | Mappa questo attributo a un campo generico/di sistema, se applicabile |
| **Trasforma dati** | Avanzato: consente l'**esecuzione di codice in runtime** per trasformare i dati in ingresso prima del salvataggio _(⚠️ contrassegnato da un avviso, per uso avanzato/tecnico)_ |

### Caselle di controllo:

| Opzione | Descrizione |
| --- | --- |
| **Consenti HTML** | Indica se in questo campo è consentito contenuto HTML |
| **Abilitato** | Indica se l'attributo è attivo e in uso |
| **Filtrabile** | Indica se questo attributo può essere utilizzato come filtro (ad es. nella navigazione del catalogo) |
| **Modificabile** ℹ️ | Indica se il valore può essere modificato/sovrascritto dopo il recupero iniziale |
| **Ereditabile** ℹ️ | Indica se il valore viene ereditato (ad es. da una categoria padre o dal negozio predefinito) |

### Localizzazione

Più in basso, per ciascun **sito web** (ad es. `Mystore`) e per ogni **locale** attivo (ad es. `en_us (en_US)`), può inserire/modificare direttamente un **valore localizzato** per questo attributo, ad esempio sovrascrivendo il testo `Long Description` mostrato per quel sito web/locale specifico.

Clicchi su **Salva** per applicare le modifiche oppure su **Annulla** per scartarle.

> ⚠️ **Attenzione:** il campo **Trasforma dati** consente l'esecuzione di codice in runtime: si tratta di una funzionalità avanzata. Un codice errato in questo campo può compromettere l'elaborazione dei dati per questo attributo. Si consiglia di utilizzarlo solo se conosce la logica di trasformazione necessaria, oppure di rivolgersi al team di supporto in caso di dubbi.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dXfx5OPU1hiT51CXn8LiDQwH-TEXGJXdVg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iV0xwN-jnstAKKgixyaCk_xrX_YowzggDg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dFxEvhIpzZghLVLLDiYbGvsGjZphndAgYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/N4ix6-rdWoomYb4sDO8JzYCvCdyhKxL3Cg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iSFTjf50J_sPVCyMi1T5KeoayFI8zi9FHg.png)

A questo punto, l'integrazione con Salesforce è completamente configurata: autorizzata, connessa, con siti web/negozi attivati e dati dei prodotti recuperati correttamente.

I passaggi successivi, ovvero la configurazione dei **Cataloghi** e la creazione del **Flusso**, seguono la stessa procedura di qualsiasi altro tipo di integrazione e sono trattati nella documentazione generale sulle integrazioni, non specifica per Salesforce.
