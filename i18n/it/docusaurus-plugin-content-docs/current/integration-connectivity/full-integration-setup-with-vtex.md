---
id: '103000408453'
title: 2.8.2 Configurazione completa dell'integrazione con VTEX
sidebar_position: 19
slug: /integration-connectivity/full-integration-setup-with-vtex
description: >-
  Questa guida fornisce istruzioni dettagliate per integrare il Suo negozio
  VTEX con Fozzels. La procedura prevede due fasi principali: la generazione
  delle richie
---

Questa guida fornisce istruzioni dettagliate per integrare il Suo negozio **VTEX** con **Fozzels**. La procedura prevede due fasi principali: la generazione delle chiavi API richieste nel pannello VTEX Admin e il completamento della configurazione in Fozzels.

## Parte 1. Configurazione sul lato VTEX

Per consentire a Fozzels di leggere la struttura del Suo catalogo e di scrivere i contenuti generati nel Suo negozio, è necessario creare un ruolo dedicato con permessi specifici e generare una **Application Key** e un **Application Token**.

### Passaggio 1. Crei un ruolo con i permessi richiesti

1.  Acceda al pannello **VTEX Admin**.

2.  Vada su **Impostazioni account** → **Gestione utenti** → **Ruoli**.

3.  Clicchi su **Nuovo ruolo**.

4.  Assegni al ruolo un nome chiaro (ad es. `Fozzels Integration`).

5.  Nell'elenco dei permessi, aggiunga l'accesso per le seguenti risorse:

-   **Catalogo (License Manager):**

-   `Category` — Lettura / Scrittura

-   `Brand` — Lettura / Scrittura

-   `Product` — Lettura / Scrittura

-   `SKU` — Lettura / Scrittura

-   `Specification / Attributes` — Lettura / Scrittura

-   **CMS (se utilizzato per media/immagini):**

-   Accesso in `Read` / `Write`

6.  Salvi il nuovo ruolo.

### Passaggio 2. Generi l'Application Key e l'Application Token

1.  Nel menu **Impostazioni account**, vada su **Gestione account** → **Application Keys**.

2.  Clicchi su **Gestisci chiavi** o **Genera chiave**.

3.  Inserisca un'etichetta facilmente riconoscibile (ad es. `Fozzels Connector`).

4.  Assegni a questa chiave il ruolo creato nel Passaggio 1 (`Fozzels Integration`).

5.  Il sistema genererà due credenziali:

-   **Application Key** (rimane visibile nel Suo elenco).

-   **Application Token** (visualizzato **una sola volta** al momento della creazione).

6.  **Importante:** copi e conservi immediatamente l'**Application Token** in un luogo sicuro. Una volta chiusa la finestra modale, non sarà più possibile recuperarlo!

Gli utenti possono anche consultare la Knowledge Base ufficiale di VTEX per istruzioni dettagliate sulla creazione di Application Key e Token:

-   Portoghese: [https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave](https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave)
-   Inglese: [https://help.vtex.com/docs/tutorials/generated-keys](https://help.vtex.com/docs/tutorials/generated-keys)
-   Spagnolo: [https://help.vtex.com/es/docs/tutorials/claves-generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas)

## Parte 2. Configurazione sul lato Fozzels

Una volta pronte le credenziali API, configuri la connessione in Fozzels.

### Passaggio 1. Crei una nuova integrazione

1.  Acceda a **Fozzels** e apra **Integrazioni** dal menu di navigazione superiore.

2.  Clicchi sul pulsante verde **\+ Crea**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/gr4ewlKqt8412XMEVryYBDav3OrTYjV3cA.png)

3.  Selezioni **VTEX** dall'elenco delle piattaforme di integrazione disponibili.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/XhEgu0COlAJDugphXl_XiaSkCKfS7TXueg.png)

### Passaggio 2. Inserisca i dettagli di configurazione (scheda 1: Configurazione)

Compili il modulo di connessione:

-   **Nome:** inserisca un nome per questa integrazione (ad es. `VTEX Main Store`).

-   **URL:** inserisca l'URL/il dominio del Suo negozio VTEX.

-   **Application Key:** incolli l'Application Key generata in VTEX.

-   **Application Token:** incolli l'Application Token generato in VTEX.

-   **Ambiente** _(facoltativo)_: il valore predefinito è `vtexcommercestable`. Lo modifichi solo se VTEX Le ha indicato di utilizzare un ambiente personalizzato.

-   **Locali di traduzione** _(facoltativo)_: per gli account transfrontalieri, specifichi i locali VTEX separati da virgole (ad es. `es-AR, en-US`). Lasci vuoto per i negozi in un'unica lingua.

-   **Pianificazione globale del recupero** _(facoltativo)_: imposti una pianificazione automatica personalizzata del recupero oppure lasci le impostazioni predefinite.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pWrF-JFfW_Q5FelNCSz3IuA9l86yXEdItw.png)

-   **Limitazione del recupero / ritardi API** _(facoltativo)_:

-   **Ritardo tra le pagine:** imposti la durata della pausa dopo ogni pagina di risultati recuperata durante un recupero (`100–15,000 ms`). Lasci vuoto per utilizzare il valore predefinito della piattaforma.

-   **Ritardo tra le richieste:** imposti la durata della pausa tra le singole chiamate API durante un recupero (`100–15,000 ms`). Lasci vuoto per utilizzare il valore predefinito della piattaforma.

-   ⚠️ **Nota:** impostare questi valori al di sotto dei valori predefiniti della piattaforma può attivare il rate limiting da parte di VTEX e causare il fallimento dei recuperi del catalogo.

Clicchi su **Salva** nell'angolo in basso a sinistra.

### Passaggio 3. Verifichi lo stato e recuperi i negozi (scheda 2: Siti web e negozi)

1.  Verifichi che tutti gli indicatori di stato nell'angolo in alto a destra siano attivi:

-   **Attiva** — Abilitata (interruttore verde).

-   **Autorizzata** — Segno di spunta verde.

    -   **REST API connessa** — Segno di spunta verde.
        ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/RnG46ot4A8YtvTAhatBAQIynkoXI8pbdJQ.png)

2.  Clicchi sul pulsante **RECUPERA SITI WEB E NEGOZI** nell'angolo in basso a sinistra.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pywm-NKYAWTD0xkGPKQYZPH5WI5LKQCwIw.png)

3.  I Suoi siti web e i locali dei negozi compariranno nella tabella. Attivi gli interruttori **Stato** per i siti web e i negozi che intende elaborare.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/Nv3b_PjszS4fHUfa_V2atIDZe_Sx838pAA.png)

### Passaggio 4. Recuperi i dati del catalogo (Recupera prodotti)

1.  Individui il Suo negozio nella tabella e clicchi su **Recupera prodotti** (oppure sulla freccia a discesa accanto).

2.  Può avviare la sincronizzazione dei dati per entità specifiche oppure eseguirle in sequenza:

-   **Attributo prodotto**

-   **Attributo categoria**

-   **Attributo marchio**

-   **Categoria**

-   **Marchio**

    -   **Prodotto**
**![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/A-WrFZksz5q1Ml-MXGaobf-Sn_rKBjsNEA.png)**

3.  Attenda il completamento della sincronizzazione. Lo stato di ogni entità diventerà verde e mostrerà **100%**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/NamLSz4d9IyB6p3k94ULepvi0njfq465sQ.png)

4.  Clicchi sull'icona a forma di occhio (**Visualizza**) accanto a qualsiasi blocco di entità per esaminare i dati recuperati.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/e6KLPc8LFKplzkHemoeoNUVVG1SLMjnF7w.png)

Congratulazioni! La Sua integrazione **VTEX** è ora completamente configurata e pronta all'uso. Fozzels sincronizzerà senza interruzioni i dati del Suo catalogo, consentendoLe di generare con facilità descrizioni di prodotto di alta qualità tramite IA, contenuti localizzati e metadati. Se in seguito dovesse apportare modifiche, può sempre tornare alla pagina Impostazioni integrazione.

Buona automazione!
