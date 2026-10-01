---
id: '103000369548'
title: >-
  4.4.1 Funzione Impedisci la generazione di contenuti sovrapposti. Funzione di
  prevenzione globale.
sidebar_position: 13
slug: >-
  /content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function
description: >-
  La funzione "Impedisci la doppia generazione di contenuti con altri flussi" è
  fondamentale per evitare di generare due volte i contenuti per lo stesso
  prodotto quando potr
---

La funzione **"Impedisci la doppia generazione di contenuti con altri flussi"** è fondamentale per evitare di generare due volte i contenuti per lo stesso prodotto quando questo potrebbe appartenere a più flussi. Ciò aiuta a ottimizzare i costi di utilizzo dell'IA (token) .

## 1\. Lo standard principale (impostazione globale)

Questa è l'**impostazione globale** che si applica a tutti i Suoi flussi, salvo diversa indicazione. La imposta una sola volta in: `Profile` → `Settings` → `Content Flow`.

-   **Il contenuto non è ancora stato generato:** la generazione è consentita **solo se** il contenuto per questo prodotto non è stato creato in precedenza da **nessun** altro flusso. Questo è il controllo più rigoroso.

-   **Più vecchio di:** imposta un **limite di tempo** (ad es. 1 settimana). La generazione è consentita **se** il contenuto esistente è già stato creato una volta da un altro flusso, ma **prima** della durata impostata.
    ![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/Hgb-Xa4MFVO-KaMNOrtEtfyA1I8RT_6haA.png)

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/r-Ikv5eI5COJQMRwp9HXF1M2OOPYShjDXw.png)

## 1.1. Gestione delle impostazioni globali (passaggi di configurazione)

**Il Suo obiettivo:** impostare o modificare lo standard principale che seguiranno tutti i flussi impostati su `Inherit`.

**Passaggi:**

1.  Vada alle **Impostazioni globali** (`Profile` → `Settings` → `Content Flow`).

2.  Controlla la regola globale tramite l'interruttore **"Usa limite di durata"**:

-   **Per attivare la regola di durata (Più vecchio di):** **attivi l'interruttore "Usa limite di durata"**, **inserisca il valore del periodo richiesto** (ad es. 1 settimana) e **salvi**.

-   **Per impostare la regola più rigorosa (Il contenuto non è ancora stato generato):** **disattivi l'interruttore "Usa limite di durata"** e **salvi**.

-   _Risultato:_ tutti i flussi che utilizzano l'opzione **Eredita** applicheranno automaticamente questa nuova restrizione.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/et0MwVwvnIfg8GhM-81qMk3ADOAD3_M02g.png)

##
2\. Sovrascrivere la regola per un flusso specifico (scenari pratici)

Nelle impostazioni di ciascun flusso (sezione **4 Automazione**), decide se il flusso seguirà le impostazioni globali o avrà un'eccezione:

-   Se desidera che il flusso ignori tutte le regole di duplicazione (anche se la regola globale è attiva), veda A.

-   Se desidera impostare un limite di tempo personalizzato (Sovrascrivi), veda B.

-   Se desidera disattivare completamente tutte le regole globali di duplicazione, veda C.

####
**Scenario A: autorizzazione completa alla generazione (nessuna restrizione) (Disattiva)**

**Il Suo obiettivo:** desidera che il flusso ignori tutte le regole di duplicazione (anche se la regola globale è attiva).

**Passaggi:**

1.  Vada alle impostazioni del flusso desiderato (ad es. `Modify Product Flow`).

2.  Passi alla sezione **4 Automazione**.

3.  Nel blocco **"Impedisci la doppia generazione di contenuti con altri flussi"**, selezioni l'opzione **Disattiva**.

4.  Salvi le modifiche.

-   _Risultato:_ questo flusso genererà contenuti indipendentemente dal fatto che esistano già contenuti di altri flussi.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/M18xs-NWnNKM3KW_n1iAHroIpfoIW3ztfg.png)

####
**Scenario B: impostazione di un limite di tempo personalizzato (Sovrascrivi)**

**Il Suo obiettivo:** desidera che questo flusso abbia un limite di tempo **diverso** dall'impostazione globale.

**Passaggi:**

1.  Vada alle impostazioni del flusso desiderato.

2.  Nella sezione **4 Automazione**, selezioni l'opzione **Sovrascrivi**.

3.  Inserisca il valore del limite di tempo richiesto (ad es. 1 ora) nel campo che compare.

4.  Salvi le modifiche.

-   _Risultato:_ il flusso utilizzerà **solo** questa nuova regola individuale.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/chc6WFPZCDobr_ICKuYawfRnxRTy36Oi3g.png)

**Scenario C: ripartire da zero (rimozione di tutte le restrizioni)**

**Il Suo obiettivo:** ha deciso di disattivare completamente tutte le regole globali di duplicazione, consentendo a tutti i flussi di creare contenuti senza restrizioni basate sul periodo.

**Passaggi:**

1.  Vada alle **Impostazioni globali** (`Profile` → `Settings` → `Content Flow`).

2.  **Disattivi l'interruttore "Usa limite di durata"**.

3.  Clicchi sul pulsante **Salva**.

4.  _Risultato:_ tutti i flussi impostati su **Eredita** inizieranno a funzionare **senza restrizioni di duplicazione**, poiché la regola globale è di fatto disattivata. Se desidera che anche un flusso impostato su **Sovrascrivi** funzioni senza restrizioni, **lo imposti su Eredita** oppure **disattivi la restrizione con Disattiva**.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/8rlkBmppY5nU7t7ZkdTHVSWoFeNWkYYOeA.png)

oppure

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/_nWCPZi_Y8CUrS6FiIQZPgxQ0eip7jdWeg.png)
