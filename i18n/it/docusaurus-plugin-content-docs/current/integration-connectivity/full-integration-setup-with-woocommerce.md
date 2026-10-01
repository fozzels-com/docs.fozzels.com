---
id: '103000367857'
title: 2.5.1. Configurazione completa dell'integrazione con WooCommerce.
sidebar_position: 7
slug: /integration-connectivity/full-integration-setup-with-woocommerce
description: >-
  Per garantire una connessione sicura tra Fozzels e WooCommerce, è necessario
  completare i seguenti passaggi per generare le apposite chiavi API (Customer Key e Cus
---

Per garantire una connessione sicura tra Fozzels e WooCommerce, è necessario completare i seguenti passaggi per generare le apposite chiavi API (Customer Key e Customer Secret) nell'account WooCommerce.

Configurazione in WooCommerce

**Passaggio 1: Acceda a WooCommerce**
1\. Apra un browser e acceda al Suo account WooCommerce.
2\. Utilizzi le credenziali di accesso dell'amministratore.

**Passaggio 2: Vada alle impostazioni API**
1\. Nel menu principale di WooCommerce, vada alla scheda "**Impostazioni**" / Avanzate / REST API.
2\. Selezioni "**Aggiungi chiavi**".

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8hyIPD4Wb1FFvgYBaXywZ2Xs18Lh-bvT4Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/gQDALB5owHDmdRHVghvUxrIVGr9XLh00iA.png)

**Passaggio 3: Creazione di una nuova API Key**1\. Aggiunga la descrizione e scelga i permessi necessari "**Lettura/Scrittura**" dal menu a tendina della **nuova API Key**.

2\. Prema il pulsante "**Genera API KEY**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/LNqOK_83FuQdSlwU4GQ0k9hPLpjPOMhitw.png)
Nota: concedere l'accesso in "Scrittura" consente a Fozzels non solo di leggere i dati, ma anche di aggiornarli nel Suo negozio WooCommerce, garantendo la sincronizzazione bidirezionale.
Se ha eseguito tutto correttamente, si aprirà una finestra con le chiavi generate per la nuova integrazione. Riceverà inoltre il messaggio: 'Chiave API generata correttamente. Si assicuri di copiare subito le nuove chiavi, poiché la chiave segreta verrà nascosta una volta lasciata questa pagina.' Trasferisca queste chiavi nelle impostazioni dell'integrazione in Fozzels.

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/zNaRYoJwobBx3j5TEjYQOR-iVDLfWwFk_w.png)
Configurazione in Fozzels
**Passaggio 4:** **Avvio di una nuova integrazione**
1\. Acceda al Suo account Fozzels.
2\. Vada alla pagina Integrazioni.
3\. Clicchi sul pulsante "**Nuova integrazione**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/0oMe6Sytpwp09lVWoNbVjCMY2Gr5Ii3l4w.png)

4\. Selezioni "**WooCommerce**" dall'elenco dei servizi disponibili.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/VygL8-i0y-Ufor6pSGr_Zfk9ob9PmWAybw.png)

5\. Compili i campi di configurazione

        Nome: inserisca un nome chiaro per questa integrazione (ad es. WooCommerce\_INT).
        URL: inserisca l'URL del Suo negozio WooCommerce
6\. Compili i seguenti campi nella pagina "Crea nuova integrazione" (utilizzando le chiavi copiate nel Passaggio 3).
        Customer Key: incolli la Customer Key copiata da WooCommerce.
        Customer Secret: incolli il Customer Secret copiato da WooCommerce.

7\. Se desidera che anche gli Advanced Custom Fields vengano importati in Fozzels, attivi l'interruttore **Abilita ACF**.  Per maggiori informazioni su come configurare correttamente questa connessione, consulti [Abilitazione della sincronizzazione dei dati ACF: configurazione di WordPress/WooCommerce per Fozzels](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels).

8\. Se desidera sincronizzare i dati SEO tramite il plugin Yoast SEO, attivi l'interruttore Yoast WooCommerce SEO. In questo modo Fozzels può importare e aggiornare meta title, meta description e focus keyword direttamente tramite l'API di WooCommerce. [Scopra di più su come configurare questa integrazione in Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce).

9\. Se il Suo negozio utilizza il plugin All-in-One SEO, attivi l'interruttore All-in-One SEO. In questo modo verranno sincronizzati automaticamente tra WooCommerce e Fozzels i campi relativi alla SEO, come meta title, descrizioni, parole chiave e dati per i social media. [Scopra di più su come configurare questa integrazione.](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide)

10\. Se desidera importare campi di metadati personalizzati da WooCommerce, compili il campo WooCommerce Meta Data Sync Fields. Inserisca i prefissi delle meta key o i nomi esatti dei campi meta che desidera sincronizzare. Solo i campi corrispondenti verranno importati come attributi di prodotto in Fozzels. Ad esempio, inserisca _my\_plugin_ per sincronizzare tutte le chiavi che iniziano con questo prefisso, oppure \_custom\_field per un campo specifico. [Scopra di più su questa funzionalità.](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)
11\. Se desidera abilitare la sincronizzazione multilingue, attivi l'interruttore WPML Multilingual Support. In questo modo Fozzels può sincronizzare i dati dei prodotti in tutte le lingue configurate quando si utilizza il plugin WPML. [Scopra di più su come configurare questa impostazione.](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation)
 ![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/d1v4xCqxV-0DN-7Uj85ucSblMez28V1klw.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/7XoFo9SE40F3Tgm0RjSqZFcqPUoE-6dFHA.png)
**Passaggio 5: Attivi e salvi l'integrazione**1\. Attivi l'integrazione portando su **ON** l'interruttore "Attiva" nell'angolo in alto a destra.

2\. Clicchi sul pulsante "**Salva**" per salvare le modifiche.
Dopo il salvataggio, proseguirà con i successivi passaggi di configurazione in Fozzels ("Siti web e negozi" e "Attributi"), dove potrà impostare la sincronizzazione di prodotti e attributi.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8pwl3nO-DvkTHXjdP3kCZwH6esC012DXYg.png)
**Passaggio 6: Configurazione di siti web e negozi**
1\. Clicchi sul pulsante "**Recupera siti web e negozi**". In questo modo verranno recuperati e visualizzati tutti i siti web e i negozi associati al Suo account WooCommerce.
2\. Attivi i siti web e i negozi richiesti portando su **ON** i corrispondenti interruttori di Stato.
3\. Clicchi sul pulsante "**Recupera prodotti**" per ogni negozio necessario. Questa azione avvia il caricamento iniziale dei dati dei prodotti in Fozzels. Per maggiori informazioni sul recupero dei prodotti, consulti [questa pagina](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained/).
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/OT8f7hDzpyxRkabdwOZz9-0ph8-2UMGMnA.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/pXfqdGQaJ_kePo3JmAj2P43ZxhaPZWFnMg.png)Una volta completato il caricamento dei prodotti, Fozzels è pronto per l'uso!
Ora può passare alla scheda "Attributi" per configurarli. Per maggiori informazioni sulla gestione degli attributi, consulti [questa pagina](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).
