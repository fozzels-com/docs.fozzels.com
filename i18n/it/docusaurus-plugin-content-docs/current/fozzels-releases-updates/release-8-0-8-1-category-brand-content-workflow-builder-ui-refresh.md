---
id: '103000409878'
title: "Release 8.0-8.1 - Contenuti per categorie e brand, Workflow Builder, rinnovamento dell'interfaccia"
sidebar_position: 16
slug: >-
  /fozzels-releases-updates/release-8-0-8-1-category-brand-content-workflow-builder-ui-refresh
description: >-
  Siamo lieti di presentare l'aggiornamento v8.0 e v8.1 di Fozzels. Questa
  release si concentra sull'ampliamento delle capacità di generazione dei
  contenuti, aggiungendo flessibilità nella personalizzazione dei flussi di
  lavoro
keywords:
- flusso di lavoro
---

Siamo lieti di presentare l'aggiornamento v8.0 e v8.1 di Fozzels. Questa release si concentra sull'ampliamento delle capacità di generazione dei contenuti, sull'aggiunta di flessibilità nella personalizzazione dei flussi di lavoro, sul rafforzamento della sicurezza dei dati e sul rinnovamento dell'interfaccia della piattaforma.

# **1\. Contenuti per categorie e brand (Shopware e Magento 2)**

## Dopo un lungo periodo di sviluppo e preparazione, introduciamo il supporto per la generazione e la sincronizzazione dei contenuti per le pagine di categoria e di brand.

-   **Flussi per categorie e brand** — Generi descrizioni HTML, meta title, meta description e attributi personalizzati direttamente per categorie e brand.
-   **Integrazione completa** — Questi nuovi tipi di flusso includono tutte le funzionalità standard della piattaforma: elaborazione in batch, cronologia delle revisioni e sincronizzazione automatica.

## **2\.  Workflow Builder e Rule Engine**

Il nuovo modulo **Rule Engine** Le consente di configurare la post-elaborazione automatica dei contenuti prima della pubblicazione.

-   **Editor visivo** — Costruisca relazioni logiche utilizzando i blocchi Condition, Group e Action.
-   **Regole di elaborazione** — Formatti automaticamente il testo (ad es. se un titolo supera i 50 caratteri → lo tronchi a 45 caratteri mantenendo le parole intere).
-   **Assegnazione delle regole** — I flussi di lavoro creati possono essere applicati ai flussi Product, Category o Brand.

### **Audit dei dati storici e convalida dei contenuti**

-   **Verifica dei contenuti esistenti** — Esegua i flussi di lavoro sui risultati generati in precedenza per segnalare gli elementi da modificare o rigenerare.
-   **Matrice decisionale** — Configuri condizioni di ramificazione (Yes / No / Always) per una logica di convalida complessa.
-   **Filtri dei contenuti (Contains)** — Rilevi parole vietate, caratteri non consentiti o scostamenti di formato.
-   **Azioni (Truncate e Mark as Suspicious)** — Accorci automaticamente il testo o segnali i risultati indicandone il motivo (ad es. "Title too long") e sospenda la sincronizzazione automatica per quell'elemento.

## **3\. Aggiornamento dell'interfaccia (navigazione nella barra laterale)**

Abbiamo ridisegnato il layout della piattaforma per una navigazione più semplice e uno spazio di lavoro più efficiente.

-   **Intestazione semplificata** — La barra superiore è stata alleggerita e ora contiene solo gli elementi contestuali (navigazione, lingua, notifiche e stato).
-   **Barra laterale strutturata** — I moduli sono raggruppati per sezione (Main, Catalog, Integrations, Customers, AI Flows, Tools).
-   **Modalità di visualizzazione** — Comprima la barra laterale in una vista compatta per liberare spazio di lavoro.
-   **Indicatori di stato** — Badge NEW e Soon per aiutarLa a individuare i nuovi moduli.

## **4\. Knowledge base pubblica**

Abbiamo lanciato un portale di documentazione autonomo per gli utenti della piattaforma.

-   **Multilingue** — Materiali e istruzioni sono disponibili in 6 lingue.
-   **Guide strutturate** — Istruzioni passo passo per configurare integrazioni, flussi di lavoro, mappature e modelli di IA.

## **5\. Aggiornamenti delle integrazioni (Shopware, VTEX, NextChapter)**

### Motore Shopware e proprietà (Select / Multi-Select)

-   **Ottimizzazione dell'API** — Il connettore aggiornato garantisce prestazioni stabili con grandi volumi di dati.
-   **Gestione delle proprietà** — Generazione e sincronizzazione dirette per i campi di proprietà strutturati.
-   **Controllo dei valori** — L'IA rispetta i vincoli definiti, trasmettendo un solo valore per i campi Select o più valori per i campi Multi-Select.
-   **Vision AI** — Analisi delle immagini per determinare automaticamente i parametri del prodotto (stile, colore, tipo di colletto, ecc.).

### NextChapter e VTEX: testo ALT

-   **Sincronizzazione dei tag ALT** — Generi e invii le descrizioni delle immagini per migliorare la SEO e l'accessibilità.

## **6\. Integrazioni CSV ampliate**

### Galleria multimediale

-   **Standardizzazione** — È stato aggiunto un modulo Media Gallery completo per le integrazioni CSV.
-   **Anteprima e Vision AI** — Visualizzi le immagini direttamente nella tabella, inserisca gli URL nei prompt e generi contenuti multimediali.

### Mappatura e parsing

-   **Anteprima in tempo reale** — Visualizzi la struttura del file CSV e i dati di esempio direttamente nell'interfaccia.
-   **Mappatura flessibile** — Configuri nomi dei campi, formati e corrispondenze tra le colonne.
-   **Opzioni di parsing** — Supporto per vari delimitatori (virgola, punto e virgola, tabulazione) e codifiche.

## **7\. Controllo HTML e convalida del codice**

### Gestione dell'editor (Enable Editor)

-   **Modalità codice grezzo** — Disattivi l'editor visivo per conservare esattamente il codice generato dall'IA senza modifiche automatiche dei tag (utile per accordion FAQ, stili incorporati e [Schema.org](https://schema.org/) / JSON-LD).
-   **Modalità di visualizzazione** — Passi dalla vista del codice (Show HTML) all'anteprima renderizzata e viceversa.

### Convalida della struttura HTML

-   **Verifica automatica** — Rilevi in tempo reale tag non chiusi o codice danneggiato.
-   **Protezione della sincronizzazione automatica** — Blocca automaticamente la sincronizzazione degli elementi danneggiati, con un avviso nella tabella: _"Completion looks suspicious, broken or unclosed HTML tags detected."_

_Il Suo feedback e la Sua esperienza quotidiana con la piattaforma ci aiutano a continuare a migliorare Fozzels._
