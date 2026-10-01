---
id: '103000367854'
title: 2.3.3. Configurazione completa dell'integrazione con Shopify.
sidebar_position: 5
slug: /integration-connectivity/full-integration-setup-with-shopify
description: >-
  Questa guida illustra come configurare una connessione sicura e bidirezionale
  tra il Suo negozio Shopify e Fozzels utilizzando le Custom App (app private) e configurare…
---

Questa guida illustra come configurare una connessione sicura e bidirezionale tra il Suo negozio **Shopify** e **Fozzels** utilizzando le **Custom App** (app private) e come configurare i parametri di sincronizzazione.

## Passaggio 1: Configurazione della Custom App in Shopify

### 1.1. Creazione dell'app

1.  **Apra** un browser e **acceda** al Suo **Shopify Admin**.

2.  **Vada** alla sezione **Impostazioni**.

3.  **Vada** alla sezione **App e canali di vendita** nel menu laterale.

4.  **Prema** **Sviluppa app**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/FQMhwpXYX9AaHS64ub51WznCudG_HjF_GQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/im1AvTKi6MWYyaB5au2QV52k6g-zKgIJPQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/_flCr1G21Y0eiLDKAAikCGA8aItw-mC2Ng.png)

5. **Prema** **Crea un'app**.

6. **Inserisca** il nome dell'app (**Fozzels**) e **scelga** il Suo account nella sezione sviluppatore del pop-up "Crea un'app".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/iwwZ8YAvrwc95yWJhOvB1oRxvwcRY-TaUw.png)

### 1.2. Configuri i permessi (Scope)

1.  **Vada** alla sezione **Configura gli ambiti dell'API Admin**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Ul-1S5j5J-ff2mqfWD_hCHBbpsCPJPNOJA.png)

2. **Abiliti** i seguenti permessi obbligatori utilizzando il campo di ricerca: read\_product\_listings , read\_products , write\_products , read\_metaobject\_definitions , read\_metaobjects , read\_product\_feeds .

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Q-ViUfe7pSUU1B02HTAe2_fR-ncQiNevEw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/VlG1HE0ZjQVE-ftYEYNp1-YpSbOdYRXSGw.png)

3. **Attenzione!** Se utilizza i **Mercati** in Shopify per gestire regioni o paesi diversi, deve **aggiungere** anche i seguenti permessi: write\_translations , read\_translations , write\_markets , read\_markets , read\_locales .

4. **Controlli** l'elenco completo dei permessi abilitati. Dovrebbe apparire così:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/oRHwBytJR6A9FPaCaQdSSF83Rk5PHBPKiw.png)

5. **Prema** Installa app per completare la creazione.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/mmVlY4rP_YWAoM7ED5aByqLh37nfQomtcA.png)

### 1.3. Prepari le credenziali

1.  **Vada** alla sezione **Credenziali API**.

2.  **Copi** e **conservi** tutti i campi necessari da aggiungere in Fozzels.
    2.1. **Copi** la API key di Shopify (per il campo API key in Fozzels).
    2.2. **Copi** la API Secret key di Shopify.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/8XPxI0phlV2LNnbr1Aj-4wH3VCl_q62JQw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/0VUTxufo_k1f9p3im2fqQ0x1mA9tu4gAIg.png)

## Passaggio 2: Crei l'integrazione in Fozzels

### 2.1. Configurazione della connessione

1.  **Acceda** al Suo account Fozzels tramite `https://app.fozzels.com`.

2.  **Vada** alla sezione **Integrazioni**.

3.  **Clicchi** su **“Nuova integrazione”**.

4.  **Scelga** la piattaforma **Shopify**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Pyzl5zTGARVEwFahvJ9LgtWhqC42AkOW-Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/9ZDhsVks6A3bEPfvWW2KUSi_LC5nxPkKKA.png)

5. **Inserisca** il nome della Sua integrazione.

6. **Inserisca** l'URL del negozio online Shopify.

**Nota!** Per i campi URL e App Host Name, **utilizzi** sempre il sottodominio `.myshopify.com`, non l'URL "reale". Esempio: `teststore.myshopify.com`.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/5Es2Xe5K4kX7G9ceTSqa0zcRdqY7LOd18w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/2V9Pr-82uxKsTQw5vzihFFVkdOXXeYRTYg.png)

7. **Copi** e **incolli** tutti i campi necessari in Fozzels.
    7.1. **Incolli** la API key di Shopify nel campo API key di Fozzels.
    7.2. **Incolli** la API Secret key di Shopify nel campo API Secret di Fozzels.
    7.3. **Incolli** l'App Host Name.

8. **Attivi** l'interruttore **Markets o LangShop** per poter sincronizzare i contenuti dei prodotti di negozi diversi (per le varie localizzazioni, non solo per il negozio predefinito).

9. **Prema** il pulsante **Salva**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/10MdEKRe3CAXM8phYawwasjHybRh5utDcg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/1gUl8bf3vOc8OzNHXG0e2xOkIOfqafgQgQ.png)

### 2.2. Attivazione e sincronizzazione

1.  **Attivi** l'integrazione.

2.  **Recuperi** siti web e negozi.

3.  **Si assicuri** che l'integrazione abbia i seguenti stati e che vengano visualizzati i siti web e i negozi attuali:
    3.1. Autorizzata: sì
    3.2. REST API connessa: sì

4.  **Attivi** siti web e lingue tramite gli interruttori. _La lingua predefinita del mercato è contrassegnata da una stella._

5.  **Clicchi** sul pulsante **“Recupera prodotti”** per avviare il recupero di prodotti e attributi. **Attenda** il caricamento dei prodotti (l'avanzamento sarà mostrato nella barra di avanzamento).

6.  **Vada** alla scheda **“Attributi”** per visualizzare, abilitare/disabilitare o modificare gli attributi caricati. **Legga** ulteriori informazioni sulla gestione degli attributi [qui](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/hf-7P91OunPrATXrTjI-eheh4APzl3yMTQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/QoYt9ReC4xDN26VlS3LlMJMq_48shcVFYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/nRpJNQGSWcWm_BelS7-uGiBdpAXGz7G4nA.png)

_\* La lingua predefinita del mercato è contrassegnata dalla stella_

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/BRzfcGMI7cun1wQGg3Vv1VHM9WbikgIqMg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/XOn4d1hw9r48sW-PN1cKj0Mr5B4q-HxITA.png)

Dopo aver creato correttamente l'integrazione, può **iniziare** a creare flussi e **generare** i Suoi **[primi contenuti](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)** in Fozzels!
