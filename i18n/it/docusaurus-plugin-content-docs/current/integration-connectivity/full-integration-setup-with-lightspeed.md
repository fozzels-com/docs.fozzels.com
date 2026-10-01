---
id: '103000367856'
title: 2.6. Configurazione completa dell'integrazione con Lightspeed.
sidebar_position: 16
slug: /integration-connectivity/full-integration-setup-with-lightspeed
description: >-
  Questa guida illustra come stabilire una connessione API sicura e bidirezionale
  tra il Suo negozio Lightspeed eCom e Fozzels generando la API Key richiesta e
---

Questa guida illustra come stabilire una connessione API sicura e bidirezionale tra il Suo negozio Lightspeed eCom e Fozzels generando la API Key e l'API Secret richiesti all'interno di Lightspeed Manager.
L'integrazione con Lightspeed richiede la creazione di una nuova API Key dedicata e l'impostazione di specifici permessi di lettura e scrittura (Scope), in modo che Fozzels possa recuperare in sicurezza i dati dei prodotti e inviare i contenuti generati dall'IA al Suo catalogo.

### Parte 1: Configurazione di Lightspeed (generazione delle credenziali API)

È necessario accedere al Suo account Lightspeed per creare e attivare la coppia di chiavi API necessaria.

#### **Passaggio 1: Acceda e vada alle impostazioni API**

1.  **Apra** un browser e **acceda** al Back Office di Lightspeed eCom (Lightspeed Retail Manager) con le Sue credenziali di amministratore.

2.  Nel menu principale di Lightspeed, **vada** alla sezione "Impostazioni".

3.  **Trovi** e **selezioni** "Chiavi API" o "Sviluppatori".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/MZv-XXhmVP6BJaa1Bodx1omwsE79Sz8QMg.png)

####
**Passaggio 2: Crei una nuova API Key**

1.  **Clicchi** sul pulsante "Aggiungi chiave API" o "Nuova chiave".

2.  **Assegni** all'integrazione un nome chiaro (ad es. Fozzels Integration).

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/C88N5mBpcnAN8OkGn8_qwt9UDUb2JF1Z9w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/AzUkWXCCt69kJBjU9LTQpJgW0iLlNd56yw.png)

####

####
**Passaggio 3: Imposti i permessi (Scope)**

La pagina delle impostazioni della nuova connessione si aprirà automaticamente. **Deve** selezionare i permessi necessari per Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/CioSxLGTyO3ZE1aF8NeArPcp8qx-oz22mw.png)

1.  **Si assicuri** che siano concessi i permessi di lettura e scrittura per le seguenti sezioni:
    -   Contenuti  → lettura e scrittura

-   Prodotti → lettura e scrittura

-   Impostazioni → lettura e scrittura

Nota: concedere l'accesso in "Scrittura" consente a Fozzels di aggiornare i dati nel Suo negozio Lightspeed, garantendo la sincronizzazione bidirezionale.)

####
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/qQg2365EfWu2BevBccdOrXyc1jnZs_p1Pg.png)**Passaggio 4: Attivazione e copia delle chiavi**

1.  Nell'angolo in alto a destra della pagina delle impostazioni dei permessi, **attivi** l'interruttore (Abilita questa chiave API).

2.  **Clicchi** sul pulsante "Salva".

3.  **Scorra** fino al blocco "Dettagli".

4.  Per visualizzare l'**API Secret (chiave segreta)**, **clicchi** sul pulsante "Mostra".

5.  **Copi** entrambe le chiavi (**API Key** e **API Secret**) per il passaggio successivo.

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/YDWX-BrATu6YaqEag_egzmNrIb_mD9VfJQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/sjIxSoTRRX4BVp_klePTX0i1orEGgq1eFg.png)
Risultato atteso: l'elenco Sviluppatori mostrerà ora una voce per la connessione Fozzels creata correttamente e attiva.)

### Parte 2: Attivazione in Fozzels e sincronizzazione dei dati

Trasferisca le chiavi copiate nella piattaforma Fozzels e avvii la sincronizzazione.

#### **Passaggio 5: Avvii una nuova integrazione**

1.  **Acceda** al Suo account Fozzels.

2.  **Vada** alla pagina Integrazioni.

3.  **Clicchi** sul pulsante "Nuova integrazione".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aXXjYseZEe8aGbAnzQXq0LsF6GCxXYmSCQ.png)

4.  **Selezioni** "Lightspeed" dall'elenco dei servizi disponibili.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aYuT19m6Pe5D1XRvGXFAKXPJF1jq5__j1g.png)

#### **Passaggio 6: Compili i campi di configurazione**

Nella pagina "Crea nuova integrazione", **compili** i seguenti campi:

1.  **Nome:** **inserisca** un nome chiaro per questa integrazione (ad es. Lightspeed\_INT).

2.  **URL:** **inserisca** l'URL del Suo negozio Lightspeed.

3.  **API Key:** **incolli** la API Key copiata da Lightspeed.

4.  **API Secret:** **incolli** l'API Secret copiato da Lightspeed.

5.  **Lingua:** **scelga** la lingua principale del Suo sito web.

6.  **Cluster:** **selezioni** il cluster (regione) appropriato in cui è ospitato il Suo negozio Lightspeed.

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/rmiVHOPB99FOtO7FZUQ0_YI_ma2jqnnB1w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/HY4qeR3DTL_8O1hm3il8lNhcNpKi2XECUw.png)

**Passaggio 7: Attivi e salvi l'integrazione**

1.  **Attivi** l'integrazione portando su **On** l'interruttore "Attiva" nell'angolo in alto a destra.

2.  **Clicchi** sul pulsante "Salva".

#### **Passaggio 8: Configurazione di siti web e negozi e recupero dei dati**

Passi ora alla scheda "Siti web e negozi" (Passaggio 2) in Fozzels.

1.  **Clicchi** sul pulsante "Recupera siti web e negozi".

2.  **Attivi** i siti web e i negozi richiesti portando su **On** i corrispondenti interruttori di **Stato**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/FARHG3ynyx8xadPlNcxi8OeOH6UTmF3J7Q.png)

3.  Per ogni negozio necessario, **clicchi** sul pulsante **"**Recupera prodotti**"**. Questa azione avvia il caricamento iniziale dei dati dei prodotti in Fozzels.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/QuBZPoYbMSBquMmbbycLgRYnd-2U4mjjbA.png)

Una volta completato il caricamento dei prodotti, Fozzels è pronto! Può passare alla scheda "Attributi" per configurare le regole di sincronizzazione. Per istruzioni dettagliate su come lavorare con gli attributi dei prodotti e personalizzare i campi dati, legga: 3.1. Importazione e panoramica del catalogo.
