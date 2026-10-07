---
id: '103000408094'
title: >-
  Release 7.4-7.5 - Introduzione della gestione delle categorie, dell'Advanced
  Media Hub e dei modelli Anthropic di nuova generazione
sidebar_position: 14
slug: >-
  /fozzels-releases-updates/release-7-4-7-5-introducing-category-management-advanced-media-hub-and-next-gen-
description: >-
  Benvenuto nell'ultima versione di Fozzels: un aggiornamento importante pensato
  per portare l'automazione dei contenuti e la gestione del catalogo al livello
  successivo. Abbiamo completamente ripensato
---

Benvenuto nell'ultima versione di Fozzels  - un aggiornamento importante pensato per portare l'automazione dei contenuti e la gestione del catalogo al livello successivo. Abbiamo completamente ripensato le interfacce principali, ampliato in modo significativo le capacità della piattaforma e integrato i più recenti modelli di IA per rendere i Suoi flussi di lavoro quotidiani più fluidi, rapidi ed efficienti che mai.
La nuova evoluzione della gestione del catalogo - Supporto delle categorie

Compiamo un salto strategico in avanti ampliando le capacità principali della piattaforma. Fozzels ora supporta ufficialmente le operazioni non solo a livello di prodotto, ma anche a livello di **categoria e attributo di categoria**. Questo aggiornamento getta le basi per l'automazione completa della struttura del catalogo.

#### **Introduzione dei Category Pool e di un'interfaccia catalogo dedicata**

-   **Nuovo ecosistema di dati:** presentiamo un'interfaccia dei pool completamente ridisegnata, insieme a un gestore di catalogo dedicato e realizzato su misura per le categorie.

-   **Esperienza unificata (UX):** abbiamo portato alle categorie il nostro caratteristico flusso di lavoro di gestione dei prodotti, già collaudato in produzione. La stessa logica intuitiva di filtraggio, strutturazione e gestione dei dati è ora disponibile per ogni singola categoria all'interno di un unico spazio di lavoro.

-   **Ecosistemi supportati:** in questa fase, il supporto delle categorie e l'interfaccia aggiornata dei pool vengono introdotti per le nostre integrazioni principali: **Shopify, Magento, WooCommerce, Shopware, Lightspeed e Katana PIM**.

-   **Prospettive future:** questa architettura è solo l'inizio di un'importante evoluzione del prodotto. Il nostro prossimo traguardo introdurrà un flusso dedicato e autonomo di generazione di contenuti IA (che comprende descrizioni SEO, meta tag e banner) pensato specificamente per le pagine di categoria.

#### **Sincronizzazione granulare dei dati in 4 fasi e registrazione avanzata**

-   **Architettura dei pool riprogettata:** per supportare l'integrazione delle categorie, abbiamo ricostruito completamente i flussi di importazione dei dati dai sistemi esterni. La sincronizzazione di base in 2 fasi è stata sostituita da un **ciclo di sincronizzazione progressivo in 4 fasi**:

1.  _Attributi di prodotto_

2.  _Attributi di categoria_

3.  _Categorie_

4.  _Prodotti_

-   **Trasparenza e flessibilità assolute:** ogni fase è ora completamente isolata. Può monitorare l'avanzamento preciso in tempo reale tramite barre di stato indipendenti e accedere a viste di log dedicate (`View logs`) per ogni singolo passaggio.

-   **Controllo mirato:** il sistema Le consente di sincronizzare l'intera massa di dati in modo completo oppure di avviare manualmente e in modo indipendente gli aggiornamenti per fasi specifiche.

### Importante aggiornamento UI/UX: revisione delle immagini e gestione dei batch di nuovo livello

Sulla base diretta del feedback degli utenti, abbiamo completamente ripensato e rinnovato l'esperienza di anteprima, moderazione e revisione delle immagini all'interno della **Batch list**. L'intero output del Suo flusso di generazione è ora riunito in un unico spazio interattivo.

#### **Flusso multimediale semplificato "Swipe-and-Sync"**

-   **Pagina di revisione avanzata:** niente più clic avanti e indietro tra le singole schede prodotto. Abbiamo introdotto un meccanismo di passaggio intuitivo e ad alta velocità (`Accept & next`) basato sul principio dello scorrimento delle schede.

-   **Confronto affiancato:** lo schermo mostra contemporaneamente due pannelli, l'immagine originale (`Original`) e la variante generata dall'IA (`Generated`), con zoom dettagliato sugli asset (`Zoom In`).

-   **Gestione centralizzata degli asset multimediali:** direttamente nella finestra di revisione, può eseguire istantaneamente con un solo clic le operazioni principali sull'asset corrente:

-   Assegnare l'ordine dell'asset nella galleria di immagini (`Position`).

-   Definire comportamenti specifici del sistema (`Roles`).

-   Controllare la visibilità nella pagina del prodotto (`Hide on PDP`).

-   Avviare la rigenerazione manuale dell'asset (`Regenerate`) se è necessaria una messa a punto.

-   **Carosello di elaborazione dei batch:** la parte inferiore dell'interfaccia presenta una timeline visiva che traccia tutti gli oggetti della sessione attiva. Arricchita da indicatori di stato con codici colore (`Accepted`, `Regenerate`, `Left`), mantiene l'avanzamento complessivo del progetto perfettamente chiaro a colpo d'occhio.

### Miglioramenti principali della piattaforma

#### **Modelli di IA di nuova generazione e integrazione della ricerca web in tempo reale**

-   **Ampliamento del toolkit IA:** Fozzels accoglie ufficialmente nella sua gamma principale i più recenti e avanzati modelli di Anthropic:

-   **Claude Sonnet 5** — Offre un'intelligenza di primo livello, capacità di ragionamento avanzate e un output ad alta velocità ottimizzato per la generazione di contenuti in grandi volumi.

-   **Claude Fable 5** — Il nostro modello più sofisticato finora, progettato per gestire parametri di contenuto estremamente complessi, una mappatura semantica approfondita e un'esecuzione autonoma prolungata su gerarchie di catalogo articolate.

-   **Integrazione della ricerca web in tempo reale:** abbiamo abilitato la ricerca web in tempo reale per entrambi i nuovi modelli. L'IA può ora recuperare dati esterni aggiornati per garantire un'accuratezza fattuale assoluta, la verifica dei prompt e la conformità immediata alle ultime tendenze di mercato.

#### **Creatività senza limiti: rimozione dei limiti di rigenerazione delle immagini**

-   **Cosa è cambiato:** abbiamo completamente eliminato il precedente limite sulle rigenerazioni consecutive delle immagini (in precedenza fissato a 5 tentativi per oggetto). Nel flusso di rigenerazione manuale (`Manual Regenerate Flow`), ora è libero di rieseguire la generazione dell'asset tutte le volte necessarie, fino a ottenere esattamente il risultato visivo richiesto dal Suo brand.

#### **Filtraggio avanzato dei dati e flusso UX semplificato**

-   **Cosa è cambiato:** abbiamo riprogettato a fondo il motore di filtraggio dei dati in tutti i flussi operativi e in tutte le integrazioni, offrendo un'estetica pulita e moderna e un'ergonomia notevolmente migliorata.

-   **Alberi di categorie di nuova generazione:** per supportare le operazioni sulle categorie su larga scala, abbiamo implementato un selettore multiplo interattivo `Tree View` dotato di tag di accesso rapido e di una logica condizionale flessibile (`AND` / `OR`).

### Ecosistema e integrazioni

#### **Magento: convalida multi-select e gestione avanzata degli asset multimediali**

-   **Sincronizzazione di attributi complessi:** sono state abilitate le funzionalità complete di scrittura/compilazione per i tipi di attributo `multi-select` e `select`. Il modello di IA interroga automaticamente l'elenco esistente dei valori consentiti direttamente dal Suo catalogo Magento e seleziona le variabili corrispondenti da tale elenco, evitando rigorosamente l'inquinamento dei dati o i tag duplicati.

-   **Mappatura avanzata dei ruoli dei media:** quando sincronizza i file multimediali generati con Magento, ora può configurare ruoli di sistema espliciti anziché il solo ordine nella galleria. Assegni facilmente agli asset i ruoli `Base`, `Small`, `Thumbnail`, `Swatch` o altri slot personalizzati configurati nel Suo tema attivo.

-   **Esclusione dei media (nascosti dalla pagina prodotto):** è ora disponibile il pieno supporto per il flag nativo di esclusione delle immagini. Può caricare in Magento un asset IA ottimizzato e contrassegnarlo come `Hidden from Product Page`, riservando l'immagine a scopi di sistema secondari (come le miniature nel layout del carrello o gli slider di cross-selling) senza mostrarla nella galleria principale della pagina prodotto.

-   **Generazione intelligente del testo ALT:** Fozzels ora mappa la presenza dei tag di metadati `alt` nell'intera galleria prodotti di Magento. L'ottimizzazione dei media può essere eseguita in due modalità distinte:

1.  _Modalità di compilazione (Fill-In Mode):_ l'IA individua e genera stringhe ALT pertinenti solo dove mancano.

2.  _Modalità forzata (Force Mode):_ un ciclo completo di riscrittura e ottimizzazione eseguito su tutti gli asset di immagine del batch selezionato.

#### Shopify e Shopware: filtraggio semplificato degli attributi

-   **Ottimizzazione del flusso di dati:** abbiamo effettuato un audit tecnico e una pulizia delle matrici di configurazione dei filtri sia per Shopify sia per Shopware. Nell'interfaccia vengono ora mostrati solo gli operatori logici pertinenti e pienamente funzionanti, accelerando in modo significativo i flussi di segmentazione del catalogo.

#### **NextChapter: sincronizzazione automatica dei media e gestione della galleria**

-   **Sincronizzazione bidirezionale dei media:** abbiamo implementato un'integrazione completa a circuito chiuso per gli asset digitali. Tutte le immagini generate o ottimizzate dall'IA vengono esportate automaticamente ("inviate") in NextChapter, associandole direttamente alla scheda articolo corrispondente.

-   **Gestione della galleria:** abbiamo aggiunto un'utilità intuitiva per l'ordinamento della coda. Gli utenti possono determinare con precisione la sequenza di visualizzazione delle immagini nel layout della galleria prodotto (immagine principale, seconda, terza... ultima posizione).

#### **Katana PIM: sincronizzazione dell'attributo Specification Group**

-   **Rilascio della funzionalità:** abbiamo aggiunto il supporto nativo e la sincronizzazione completa dei dati per l'importante attributo di sistema `specification group`. L'integrazione sfrutta il nostro nuovo algoritmo progressivo di convalida multi-select: l'IA rileva dinamicamente i gruppi di specifiche validi direttamente dalla Sua directory di Katana PIM e li popola con dati strutturali verificati.
