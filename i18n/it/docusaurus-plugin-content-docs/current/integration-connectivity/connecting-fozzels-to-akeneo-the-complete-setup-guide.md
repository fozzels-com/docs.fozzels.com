---
id: '103000395378'
title: '2.7. Collegare Fozzels ad Akeneo: la guida completa alla configurazione'
sidebar_position: 17
slug: >-
  /integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide
description: >-
  Questa guida spiega come stabilire una connessione bidirezionale tra il Suo
  PIM Akeneo e Fozzels. L'integrazione richiede la creazione di due connessioni
  separate
---

Questa guida spiega come stabilire una connessione bidirezionale tra il Suo PIM Akeneo e Fozzels. L'integrazione richiede la creazione di due connessioni separate in Akeneo: una per consentire a Fozzels di inviare dati ad Akeneo e una per consentire ad Akeneo di esportare dati verso Fozzels. Dopo aver creato entrambe le connessioni, le colleghi al Suo account Fozzels utilizzando le credenziali generate.

**Prerequisiti**

-   Un account Akeneo attivo con accesso da amministratore
-   Un account Fozzels attivo
-   Accesso all'area delle impostazioni di connessione in Akeneo

**Parte 1: configurazione di Akeneo (creazione delle connessioni)**

Passaggio 1: acceda e vada alle impostazioni di connessione

1.  Apra un browser e acceda alla Sua **dashboard di Akeneo** con le Sue credenziali di amministratore.
2.  Nella barra laterale sinistra, vada su **Connect → Connection settings**.

Passaggio 2: crei la connessione "Data Source" (Fozzels IN)

Questa connessione consente a Fozzels di inviare dati **ad** Akeneo.

1.  Clicchi sul pulsante **Create** nell'angolo in alto a destra.
2.  Compili i seguenti campi:
    -   **Label:** `Fozzels IN`
    -   **Code:** `fozzels_in`
    -   **Flow Type:** selezioni `Data source`
3.  Clicchi su **Save**.
4.  Scorra fino alla sezione **Permissions**. Nel menu a tendina **Role**, selezioni `Administrator`.
5.  Clicchi di nuovo su **Save**.
6.  Tenga aperta questa pagina: Le serviranno il **Client ID**, il **Secret**, lo **Username** e la **Password** visualizzati sullo schermo.

> **Suggerimento:** copi ciascuna credenziale in un file di testo temporaneo, così da non perderle quando cambia pagina.

Passaggio 3: crei la connessione "Data Destination" (Fozzels OUT)

Questa connessione consente ad Akeneo di esportare dati **verso** Fozzels.

1.  Torni su **Connect → Connection settings** e clicchi su **Create**.
2.  Compili i seguenti campi:
    -   **Label:** `Fozzels OUT`
    -   **Code:** `fozzels_out`
    -   **Flow Type:** selezioni `Data destination`
3.  Clicchi su **Save**.
4.  In **Permissions**, imposti il **Role** su `Administrator`.
5.  Clicchi su **Save**.
6.  Copi il **Client ID**, il **Secret**, lo **Username** e la **Password** di questa connessione.

> **Importante:** ogni connessione genera il proprio set univoco di credenziali. Si assicuri di copiare ed etichettare separatamente entrambi i set: dovrà incollare ciascuno di essi nel campo corretto in Fozzels.

**Parte 2: attivazione in Fozzels**

Passaggio 4: avvii una nuova integrazione

1.  Acceda al Suo **account Fozzels**.
2.  Vada alla scheda **Integrazioni**.
3.  Clicchi su **Crea nuova integrazione**.
4.  Selezioni **Akeneo**.
    ![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/H4jUsBP_CVGytKdGvILnXxxrewyuDwsEwA.png)

Passaggio 5: compili i campi di configurazione

Nella pagina di configurazione dell'integrazione, compili i seguenti campi:

-   **Nome:** inserisca un nome descrittivo per questa integrazione (ad es. `Akeneo Connection`)
-   L'**URL** del Suo sito web
-   **Connessione OUT (dati DA Akeneo):** incolli le credenziali della connessione **Fozzels OUT** creata nel Passaggio 3
-   **Connessione IN (dati VERSO Akeneo):** incolli le credenziali della connessione **Fozzels IN** creata nel Passaggio 2

![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/E3PznnpS3GxByBNHd8CfP3zkzZahhRaBWw.png)
Passaggio 6: salvi l'integrazione

1.  Clicchi sul pulsante **Salva** in fondo alla pagina.

Il Suo account Fozzels è ora collegato ad Akeneo. I dati possono fluire in entrambe le direzioni in base alle connessioni che ha configurato.

Se riscontra problemi durante la configurazione, contatti il nostro team di supporto: saremo lieti di aiutarLa.
