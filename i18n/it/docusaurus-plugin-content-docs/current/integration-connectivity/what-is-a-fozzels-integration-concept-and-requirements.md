---
id: '103000367852'
title: "2.1. Che cos'è un'integrazione Fozzels? (Concetto e requisiti)."
sidebar_position: 1
slug: >-
  /integration-connectivity/what-is-a-fozzels-integration-concept-and-requirements
description: >-
  Questo documento fornisce una comprensione di base di che cos'è un'integrazione
  Fozzels, del suo ruolo nel ciclo di vita dei contenuti e dei prerequisiti
  necessari
---

Questo documento fornisce una comprensione di base di che cos'è un'integrazione Fozzels, del suo ruolo nel ciclo di vita dei contenuti e dei prerequisiti necessari per stabilire una connessione.

Un'integrazione Fozzels stabilisce un collegamento dati sicuro e bidirezionale tra la piattaforma Fozzels e il Suo sistema e-commerce esterno (ad es. Magento, Shopify, WooCommerce). Questo collegamento è il punto di partenza di tutta l'automazione dei contenuti e consente a Fozzels di **importare** (Pull) gli attributi dei prodotti e di **inviare** (Push) i contenuti generati.

### 1\. Il ruolo dell'integrazione nel ciclo di vita dei contenuti

L'integrazione funge da canale di trasmissione dei dati e supporta l'intero processo di generazione dei contenuti:

1.  **Importazione dei dati (Pull):** Fozzels utilizza la connessione per **importare** automaticamente i dati dei prodotti (attributi, immagini, categorie, prezzi) dal Suo negozio nel catalogo Fozzels. Questi dati costituiscono l'input per i prompt dell'IA.

2.  **Esecuzione dei flussi:** i flussi di contenuto vengono eseguiti all'interno dell'ambiente Fozzels, utilizzando gli attributi importati e il modello di IA selezionato per generare nuovi contenuti.

3.  **Invio dei dati (Push):** Fozzels utilizza la connessione per **inviare** i contenuti appena generati (ad es. descrizioni dei prodotti, meta title) agli attributi di destinazione designati nel Suo sistema e-commerce.

### 2\. Requisiti e prerequisiti dell'integrazione

Prima di configurare un'integrazione, sulla Sua piattaforma e-commerce devono essere soddisfatti alcuni requisiti:

1.  **Accesso API:** Fozzels richiede un accesso sicuro all'Application Programming Interface (API) del Suo negozio. In genere ciò comporta la generazione di un token sicuro o di una chiave API sulla piattaforma e-commerce.

2.  **Autorizzazioni di lettura/scrittura:** le credenziali API generate devono disporre sia dell'autorizzazione di **lettura (pull)** per accedere agli attributi esistenti dei prodotti, sia dell'autorizzazione di **scrittura (push)** per modificare gli attributi di destinazione (i campi in cui verranno archiviati i contenuti generati).

3.  **Tipo di integrazione:** a seconda della piattaforma (ad es. Magento 2 o Shopify), il metodo di integrazione può prevedere l'installazione di un'estensione/app Fozzels specifica oppure la configurazione di chiavi API e URL nativi.

4.  **Configurazione degli attributi (dopo l'integrazione):** una volta stabilita la connessione, Fozzels richiede che gli attributi di origine abbiano il flag **Filterable** abilitato e che gli attributi di destinazione abbiano il flag **Mutable** abilitato.

### 3\. Gestione dell'integrazione

Le impostazioni dell'integrazione vengono gestite nelle schede **Configuration** e **Websites & Stores** dell'interfaccia di Fozzels.

-   Può gestire più integrazioni contemporaneamente, il che Le consente di sincronizzare i contenuti tra diverse istanze e-commerce o negozi regionali.

-   La stabilità del processo di automazione dei contenuti dipende direttamente dalla stabilità e dalla disponibilità dell'integrazione stabilita.
