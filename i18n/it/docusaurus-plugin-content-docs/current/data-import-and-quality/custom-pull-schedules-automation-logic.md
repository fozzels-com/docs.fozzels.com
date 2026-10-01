---
id: '103000385568'
title: 3.1  Pianificazioni del pull personalizzate e logica di automazione
sidebar_position: 1
slug: /data-import-and-quality/custom-pull-schedules-automation-logic
description: >-
  Abbiamo aggiornato la piattaforma Fozzels per allinearla al ritmo locale della
  Sua attività. Ora ha il pieno controllo su quando inizia il Suo ciclo di
  aggiornamento dei contenuti
---

Abbiamo aggiornato la piattaforma Fozzels per allinearla al ritmo locale della Sua attività. Ora ha il pieno controllo su quando inizia il Suo ciclo di aggiornamento dei contenuti, così da poter sincronizzare le operazioni di AI con gli aggiornamenti delle scorte e con la capacità dei Suoi server.

## Pianificazioni del pull personalizzate

Non è più vincolato a un unico ciclo di sistema che in precedenza iniziava alle **00:30 UTC** per tutti. Ora è Lei a definire l'orario di inizio per ogni integrazione o singolo negozio.

### 1\. Livelli di configurazione:

-   **Livello globale dell'integrazione:** imposti un'unica pianificazione per l'intera integrazione (configurata nella scheda **Configurazione**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/OIDrHQUvFDLOAW6VRq6bmDqVGmzw-Sx_WQ.png)

-   **Livello del singolo negozio:** imposti una pianificazione specifica per un determinato negozio (configurata nella scheda **Siti web e negozi** tramite l'opzione **"Sovrascrivi a livello di negozio"**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/rzTnb5R6tAHqj6TuLjncrbuJn2jhIhf-A.png)

![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/4TXxigKSz9G6RrXZnbgqjQ0N7TTKYwiwMQ.png)

##
Come funziona: la reazione a catena dell'automazione

È importante comprendere che l'orario pianificato del pull è il **trigger** di un'intera catena di processi. Una volta che il **pull** ha importato correttamente i Suoi dati, il sistema esegue automaticamente i seguenti passaggi:

### Il percorso dei dati: dal pull alla generazione (passo dopo passo)

**Fase**

**Cosa succede**

**Risultato**

**1\. Pull dei prodotti**

Fozzels si collega al Suo sito tramite API e scarica i dati aggiornati.

Il sistema dispone di un elenco aggiornato di prodotti e caratteristiche.

**2\. Sincronizzazione dei flussi**

Il sistema "setaccia" il catalogo attraverso i filtri dei Suoi flussi attivi.

I nuovi prodotti vengono aggiunti alla coda; quelli non pertinenti vengono rimossi.

**3\. Aggiornamento degli attributi**

I valori (prezzo, categoria, campi personalizzati) vengono aggiornati per ogni prodotto del flusso.

L'AI riceve il contesto più aggiornato per la generazione.

**4\. Generazione con AI**

La coda di generazione si avvia in base ai Suoi prompt specifici.

Vengono creati testi, tag SEO e traduzioni.

**5\. Esportazione dei dati**

I contenuti completati vengono inviati automaticamente al Suo sito.

I Suoi clienti vedono la pagina prodotto aggiornata.

**Esempio:** se imposta l'orario del pull alle **17:00**, la generazione con AI inizierà subito dopo il completamento dell'importazione dei dati e dei controlli dei flussi (ad es. intorno alle **17:20** o alle **17:45**), invece di attendere fino a metà notte.

## Interfaccia localizzata: impostare il fuso orario

Per rendere la pianificazione intuitiva ed evitare calcoli mentali in UTC, può impostare il Suo fuso orario locale direttamente nel Suo profilo.

### Come configurare il fuso orario:

1.  Vada su **Impostazioni** > **Profilo**.

2.  Trovi il campo **Fuso orario** e selezioni la Sua regione dal menu a discesa.

3.  **Fondamentale:** clicchi sul pulsante **SALVA** per applicare le modifiche.

### Perché è importante:

-   **Nessun calcolo in UTC:** se pianifica un pull per le 17:00 nel Suo fuso orario, inizierà esattamente alle 17:00 secondo il Suo orologio locale.

-   **Log trasparenti:** ogni log di attività e stato di generazione verrà visualizzato nel Suo orario locale, rendendo il monitoraggio semplicissimo.

## Vantaggi principali

-   **Controllo dell'aggiornamento:** la generazione con AI avviene subito dopo l'aggiornamento dei dati di prodotto sul Suo sito.

-   **Ottimizzazione dei server:** scaglioni gli orari di pull per i diversi negozi per evitare che la Sua API venga sovraccaricata da richieste simultanee.

-   **Prevedibilità:** sappia esattamente quando i Suoi nuovi arrivi verranno elaborati dall'AI e saranno pronti per la revisione.
