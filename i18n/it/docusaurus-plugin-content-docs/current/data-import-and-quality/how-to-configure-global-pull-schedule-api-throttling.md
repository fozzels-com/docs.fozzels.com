---
id: '103000408982'
title: 3.1.2 Come configurare la pianificazione globale del pull e la limitazione delle richieste API
sidebar_position: 3
slug: /data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling
description: >-
  Quando si gestiscono integrazioni di cataloghi di grandi dimensioni,
  controllare quando e con quale velocità Fozzels importa i dati di prodotto
  dalla Sua piattaforma e-commerce è fondamentale
---

Quando si gestiscono integrazioni di cataloghi di grandi dimensioni, controllare **quando** e **con quale velocità** Fozzels importa i dati di prodotto dalla Sua piattaforma e-commerce è fondamentale per mantenere le prestazioni del negozio.

Con le impostazioni **Pianificazione globale del pull** e **Limitazione del pull**, può pianificare gli orari di sincronizzazione per evitare i picchi di traffico del negozio e regolare le pause tra le chiamate API per prevenire errori dovuti ai limiti di frequenza.

## Dove trovare queste impostazioni

1.  Acceda a **Fozzels**.

2.  Vada su **Configurazione** per la Sua integrazione attiva.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/THubHvyaWacy8WwlR5pMdGsfkPW-WZmcPw.png)

3.  Scorra verso il basso fino alla sezione **Pianificazione globale del pull**.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/P9fCQ7RwxIcI7AqCgCPyUCa_PbCy3PI4Ww.png)

## 1\. Pianificazione globale del pull

La pianificazione globale del pull Le consente di definire un unico orario principale in cui Fozzels inizia automaticamente a recuperare gli aggiornamenti del catalogo per l'intera integrazione.

### Come funziona:

-   **Pianificazione predefinita:** ogni negozio attivo all'interno della Sua integrazione utilizza per impostazione predefinita questo orario pianificato.

-   **Sovrascritture a livello di negozio:** se gestisce più vetrine (ad es. in fusi orari diversi) e desidera che un negozio specifico recuperi i dati a un orario diverso, può attivare l'interruttore **Sovrascrivi la pianificazione globale del pull** nelle impostazioni individuali di quel negozio.

> ? **Best practice:** imposti la pianificazione del pull nelle ore di minor traffico (ad es. a tarda notte o al mattino presto), quando il traffico del sito web è più basso, per ridurre al minimo il potenziale carico sul backend del Suo negozio.

![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/fyrAZkK-2BnIOTIwMM32cLL1domLcyE4rg.png)

## 2\. Limitazione del pull (ritardi tra le richieste)

I limiti di frequenza delle API (API Rate Limits) sono restrizioni imposte da piattaforme come Shopify, Magento, VTEX o altre per evitare che i server vengano sovraccaricati da troppe richieste contemporanee.

Se Fozzels richiede i dati di prodotto troppo rapidamente, il server del Suo negozio potrebbe restituire un errore `429 Too Many Requests`. La **limitazione del pull** risolve il problema aggiungendo pause controllate tra le operazioni di sincronizzazione.

### Parametri configurabili:

-   **Ritardo tra le pagine (`100–15,000 ms`):**

-   **Cosa fa:** aggiunge una pausa (in millisecondi) dopo che Fozzels ha finito di recuperare ogni batch/pagina di prodotti, prima di richiedere la pagina successiva.

    -   **Valore predefinito / consigliato:** `2000 ms` (2 secondi). Lasciando il campo vuoto viene utilizzata la velocità predefinita della Sua piattaforma.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qGkARWiCzUokf8PHJJpaRRRuivORM_DQIw.png)

-   **Ritardo tra le richieste (`100–15,000 ms`):**

-   **Cosa fa:** aggiunge una pausa tra le singole chiamate API effettuate durante l'elaborazione degli elementi di una pagina.

    -   **Valore predefinito / consigliato:** `200 ms`.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/mfKk2L61sB_fdhQoGQ9o3zxmuUyFh5m0fQ.png)

    -   Non dimentichi di salvare le modifiche: clicchi sul pulsante **SALVA**.
**![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qdZ3Boaa9oUyxzPTfvoV8zbP2N_diVhAkw.png)**

> ⚠️ **Attenzione:** impostare ritardi **inferiori** ai valori predefiniti consigliati dalla Sua piattaforma e-commerce può provocare errori di limitazione della frequenza da parte del server del negozio, che potrebbero causare l'interruzione prematura dei pull del catalogo. Se riscontra pull non riusciti o avvisi relativi ai limiti di frequenza, aumenti gradualmente questi valori di ritardo per concedere al server del negozio più tempo tra una richiesta e l'altra.
