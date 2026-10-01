---
id: '103000385832'
title: >-
  2.5.2.  Abilitare la sincronizzazione dei dati ACF: configurazione di
  WordPress/WooCommerce per Fozzels
sidebar_position: 8
slug: >-
  /integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels
description: >-
  L'integrazione Fozzels - WooCommerce ora supporta ufficialmente Advanced
  Custom Fields (ACF)! Questa funzionalità Le consente di sincronizzare
  caratteristiche dei prodotti uniche ed estese
---

L'integrazione **Fozzels - WooCommerce** ora supporta ufficialmente **Advanced Custom Fields (ACF)**!

Questa funzionalità Le consente di sincronizzare caratteristiche dei prodotti uniche ed estese (come specifiche tecniche, descrizioni multilingua o parametri speciali) aggiunte tramite ACF, permettendoLe di creare feed di prodotti più dettagliati e competitivi per i marketplace.

Un'integrazione riuscita richiede alcuni passaggi di configurazione fondamentali sia in WordPress sia in Fozzels.

###

## **Parte 1: preparazione dei dati in WordPress (ACF e REST API)**

Prima di attivare ACF in Fozzels, si assicuri che WordPress e ACF siano configurati per trasmettere correttamente questi dati speciali tramite la REST API.

### Passaggio 1: verifica e configurazione dei permalink

Affinché la REST API funzioni correttamente, la struttura dei permalink deve essere diversa da quella predefinita (semplice).

1.  Acceda al pannello di amministrazione di WordPress e vada su **Impostazioni** / **Permalink**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/UoAvhDX9e8L9BLo2aXURlvtkXJ3A1z5ToA.png)

2.  Scelga una struttura che non utilizzi parametri (si consiglia la struttura **"Nome articolo"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vbZGxNZnGc1GBmBD9QYCyV3_4CUkCjMRhA.png)

3.  Verifichi che nel campo **Request Version** sia selezionato **v3**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/KhP0PGNAaWcnzkLXTBB8yQ1tPbXLQjPhzA.png)

4.  Salvi le modifiche.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/yP1swQ74nSHYKF8pRpAgezDqHmxBh4nR-A.png)

###
Passaggio 2: accesso all'ACF Field Group

1.  Nel menu di WordPress, vada su **ACF** / **Field Groups**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/a7TVqQW4iMXkGcmlP1WI8nouyni5HGoKsg.png)

2.  Clicchi sul nome del Field Group che contiene i campi da sincronizzare per i Suoi prodotti WooCommerce (ad es. **"Fozzels Description"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/GH8y_bXf1Lb2RnG-_VWVmrj4XKhaFuCnRg.png)

###
Passaggio 3: configurazione del Field Group per l'accesso tramite API (passaggio fondamentale)

Nella finestra di modifica del **Field Group**, verifichi le regole di posizione e abiliti l'accesso tramite API.

#### 3.1. Verifica delle regole di posizione

1.  Nella scheda **Location Rules**, si assicuri che la regola sia impostata su: **Post Type** _is equal to_ **Product**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/BNEJu6CBt2NzH17U0EzeWONrRHVf2l2Jkw.png)

#### 3.2. Attivazione della REST API e del gruppo

1.  Vada alla scheda **Group Settings**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/Nd2g7ccKjN6_POwgJhmMzMceFkkV0h2hxw.png)

2.  Si assicuri che entrambi gli interruttori siano abilitati (impostati su **ON**):

-   **Active**

    -   **Show in REST API**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/ZJ8EJ6QyJdSfjnZQSXdDXHEAvHmtDBbEKg.png)**

3.  Salvi le modifiche cliccando su **Aggiorna** o **Pubblica**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/lIgfpHeR7YI8Bf6W-4UvdIqtW2AQz9kqcw.png)

###
Passaggio 4: verifica della versione della ACF REST API

Se utilizza un plugin aggiuntivo per integrare ACF nella REST API (come `ACF to REST API`), deve assicurarsi che la versione selezionata sia compatibile con Fozzels.

1.  Vada su **Impostazioni** / **Permalink** / **ACF to REST API**.

2.  Verifichi che nel campo **Request Version** sia selezionato **v3**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/13tEu-kDRtYwLsGbVQs5J19h9pA5I08Jlw.png)

    > **Requisito di Fozzels:** l'integrazione richiede il **supporto della REST API v3**.
    >
    >

3.  Salvi le impostazioni.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vdFx1XFzfwdgC4rWC4PSPmvnyjq5XMPclg.png)

## **Parte 2: attivazione di ACF in Fozzels**

Una volta completata la preparazione in WordPress, attivi la funzionalità nelle impostazioni della Sua integrazione Fozzels.

1.  Acceda al Suo account Fozzels e apra la modifica della Sua integrazione WooCommerce.

2.  Nella sezione **Configurazione**, trovi l'interruttore **"Abilita ACF (Advanced Custom Fields)"**.

3.  **Lo attivi** (impostandolo su **ON**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/0_d_0BMKbVwJo7hW9vj3FexWoHpj5ziX7w.png)

> **Importante!** Tenga presenti i requisiti confermati da Fozzels:
>
> -   Il plugin ACF è installato e attivato in WordPress.
>
> -   La REST API è abilitata nelle impostazioni dell'ACF Field Group (Show in REST API: Yes).
>
> -   ACF versione 6.x o superiore con supporto della REST API v3.
>

4.  Clicchi su **Salva** in fondo alla pagina.

## **Parte 3: utilizzo dei campi ACF nel flusso e aggiornamento del catalogo**

Fozzels tratta gli attributi ACF come **normali attributi di prodotto** e Lei potrà utilizzarli con il flusso standard.

1.  Dopo aver attivato l'interruttore **"Abilita ACF"** e aver cliccato su **"Salva"**, deve **eseguire il processo di importazione dei dati**:

-   **Se sta aggiornando un'integrazione esistente:** riavvii l'importazione di prodotti e attributi. In questo modo i dati nel catalogo Fozzels verranno aggiornati e i nuovi campi ACF verranno importati.

    -   **Se si tratta della Sua prima integrazione:** esegua semplicemente l'importazione dei prodotti secondo le regole generali di configurazione dell'integrazione.
        ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/EYnK1qxy-p-r_jWSJDDxh9P0gDCTf_BU1g.png)

2.  Una volta completata correttamente l'importazione, vada alla sezione **3 Attributi,** e verifichi i nuovi attributi e le loro configurazioni**.**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/4iRp-AUe2mr4IFsN_I9b6AEtM5f9iGTgtA.png)**
    Se ha domande o ha bisogno di assistenza per configurare l'integrazione ACF, il nostro team di supporto sarà sempre lieto di aiutarLa! Ci contatti all'indirizzo **support@fozzels.com**.
