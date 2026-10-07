---
id: '103000367853'
title: 2.2. Configurazione completa dell'integrazione con Magento 2.
sidebar_position: 2
slug: /integration-connectivity/full-integration-setup-with-magento-2
description: >-
  Questa guida illustra la procedura per stabilire una connessione sicura e
  bidirezionale tra il Suo negozio Magento 2 e Fozzels. Genererà i necessari
  T
---

Questa guida illustra la procedura per stabilire una connessione sicura e bidirezionale tra il Suo negozio Magento 2 e Fozzels. Genererà i token API necessari e configurerà i permessi, garantendo un'importazione dei dati dei prodotti e un'esportazione dei contenuti senza interruzioni.

L'integrazione con Magento 2 richiede la creazione di una nuova integrazione dedicata nel pannello di amministrazione di Magento, per generare quattro chiavi essenziali: **Consumer Key**, **Consumer Secret**, **Access Token** e **Access Token Secret**. Configureremo inoltre l'attributo obbligatorio `fozzels_completion_date` per tenere traccia della sincronizzazione dei contenuti.

## Parte 1: Configurazione di Magento 2 (creazione dell'integrazione e dei token)

È necessario creare una nuova integrazione e definire permessi specifici nel pannello di amministrazione di Magento.

### Passaggio 1: Crei una nuova integrazione

1.  **Acceda** al pannello di amministrazione di Magento.

2.  **Vada** in **Sistema** / **Integrazioni**.

3.  **Clicchi** sul pulsante **“Aggiungi nuova integrazione”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gr4UpPbx41G2Oy6OOEdyCKol_ENow66ITg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/N7zrOrdp8o6CvLgUlZhpQuMcQs5r7OVmWw.png)

### Passaggio 2: Compili le informazioni dell'integrazione

1.  **Vada** alla scheda **Informazioni integrazione** (impostazioni di base).

2.  **Compili** i campi obbligatori:
    2.1. **Inserisca** il Nome: Fozzels.
    2.2. **Inserisca** l'E-mail: info@fozzels.com.
    2.3. **Inserisca** la Sua password di amministratore Magento per conferma.

3.  **Salti** i campi facoltativi (URL di callback, URL del link di identità).

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/EM4ivAqLXVniXYWdiyAMElpusFWgWjUgvQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/6vzO74ehADcyuIaahKWVOQtYVvHWVkD_vg.png)

### Passaggio 3: Configuri i permessi API (Scope)

1.  **Clicchi** sulla scheda **"API"**.

2.  Nel menu a tendina, **selezioni** **"Personalizzato"**.

3.  **Spunti** solo queste caselle (per l'accesso in lettura/scrittura):
    3.1. **Catalogo**: Categorie, Inventario, Prodotti, Aggiorna attributi, Modifica design prodotto.
    3.2. **Negozi**: Impostazioni, Tutti i negozi.
    3.3. **Attributi**: Prodotto, Set di attributi.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/QphCzWE1SkWWnk3rdvVZReWcdPfHny5hsQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/TXQWFfKyYyQlNwHODT_3OsVgEHngoyaPXg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/j3iFU0HffLd73Kzc_rQEt62o2oTsVpxF2g.png)

### Passaggio 4: Salvi e attivi l'integrazione

1.  **Clicchi** sul pulsante **“Salva”** nell'angolo in alto a destra.

2.  Nella pagina dell'elenco delle integrazioni, **individui** la nuova integrazione Fozzels.

3.  **Clicchi** sul link **”Attiva”**.

4.  Nella pagina dei dettagli di attivazione, **verifichi** che siano state selezionate le API corrette (dal Passaggio 3) e **clicchi** su **"Consenti"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/_C1d9Jr1A4136F6oEoNWIM2R2fnU0SwdvA.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/cBnv6FpiV0647eqHlNbNHIyCXcA_kHEx5A.png)

### Passaggio 5: Copi e conservi le chiavi API

1.  Dopo aver cliccato su "Consenti", verrà **reindirizzato** alla pagina “Token di integrazione per le estensioni”.

2.  **Copi** e **conservi in modo sicuro** tutti e quattro i valori compilati automaticamente:
    2.1. Consumer Key
    2.2. Consumer Secret
    2.3. Access Token
    2.4. Access Token Secret

3.  **Clicchi** su **“Fatto”**.

4.  **Verifichi** o **modifichi** i dettagli dell'integrazione in un secondo momento **premendo** il pulsante **“Modifica”** nella pagina Integrazioni.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/NOrDSAhjlO7hXjU2J1fafMmXfcMy-Lypwg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/Pj-HIMnlhJNvqDzEYmDckrL3xvLalFhsfw.png)


## Parte 3: Attivazione in Fozzels e sincronizzazione dei dati

### Passaggio 6: Verifichi l'accesso alle API

Prima di collegare Fozzels, si assicuri che il Suo server non blocchi né limiti le richieste di Fozzels verso la REST API di Magento (`/rest/`) e la GraphQL API (`/graphql`). Firewall, WAF e servizi di sicurezza come Cloudflare o Sucuri possono bloccare queste richieste.

### Cosa fare:

1.  Consenta gli indirizzi IP di Fozzels (IPv4 **e** IPv6) e lo User-Agent di Fozzels, ed escludali dal rate limiting. Tutti gli indirizzi e le impostazioni, incluse le istruzioni per Cloudflare, sono elencati in [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](./connection-requirements.md).
2.  Inoltri quella pagina al Suo provider di hosting o all'amministratore del server.

In caso contrario, riceverà un errore **401 (Unauthorized)** durante la creazione dell'integrazione in Fozzels, oppure un errore **429 (Too Many Requests)** durante il Recupero prodotti, e la connessione o la sincronizzazione non verranno completate.

Dopo aver confermato le modifiche, proceda con la creazione dell'integrazione in Fozzels.

### Passaggio 8: Crei una nuova integrazione in Fozzels

1.  **Acceda** al Suo account Fozzels.

2.  **Vada** su **Integrazioni**.

3.  **Clicchi** su **“Crea nuova integrazione”**.

4.  **Scelga** **"Magento"** tra le opzioni disponibili.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/M9c13tHfbMEfpo7QsFt_Q6DvUljm-1jM1Q.png)![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/UvSS02f-tz_5sjBViKw7tq0kWJRti5mSvA.png)


![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/RrDkikq2qamOno3s8JmMIrJfno5S5gpIew.png)


### Passaggio 9: Compili i dettagli della connessione

Utilizzerà le chiavi della Parte 1 per collegare Fozzels e avviare l'importazione dei dati.

1.  **Assegni** un nome chiaro alla Sua integrazione.

2.  **Inserisca** l'**URL** del Suo sito web Magento.

3.  **Inserisca** le quattro chiavi copiate nel **Passaggio 5** nei campi corrispondenti.

4.  **Clicchi** su **“Salva”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/o_z4KRc-z_zOvcPpPvDV5evmBRJNZO-4vQ.png)

### Passaggio 10: Attivi e sincronizzi i negozi

1.  **Attivi** l'interruttore **‘Attiva’** nell'angolo in alto a destra. _Senza questo, la connessione non funzionerà._

2.  **Vada** alla scheda **“Siti web e negozi”**.

3.  **Clicchi** sul pulsante **"Recupera siti web e negozi"**. I Suoi siti web e negozi dovrebbero ora comparire.

4.  **Verifichi** che l'integrazione abbia i seguenti stati: **Autorizzata: sì** e **REST API connessa: sì**.

5.  **Abiliti** i siti web e i negozi attuali tramite l'**interruttore** per poter proseguire.

_![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/FvECiFfTlviQFFK2fJ8FF2Uoa9iBogloGg.png)_
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/d3dKR2OUZS7d-iiP2ptuZXFlu9JQKqz93A.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gjRG-nmFAybUytQo_B_QzBZew6ZY5FygNQ.png)


### Passaggio 11: Recuperi i prodotti e verifichi

1.  **Clicchi** sul pulsante **“Recupera prodotti”** per avviare l'importazione del Suo catalogo prodotti.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/s372RDIQcyC9gZU1pE-mNmKjoV3tHwE2XQ.png)

2.  **Attenda** il caricamento dei prodotti (l'avanzamento sarà mostrato nella barra di avanzamento).

3.  **Vada** alla scheda **"Attributi"** per configurare le regole di sincronizzazione.

4.  **Legga** ulteriori informazioni su come lavorare con gli attributi dei prodotti e personalizzare i campi dati [qui](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).

[](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/)
