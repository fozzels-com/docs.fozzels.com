---
id: '103000410961'
title: "Release 8.2-8.3 - Integrazione Salesforce, CSV UX 2.0 e SEO multi-mercato"
sidebar_position: 17
slug: >-
  /fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo
description: >-
  Le release v8.2 e v8.3 segnano importanti passi avanti con le integrazioni
  Enterprise, un completo redesign del modulo CSV, capacità SEO multilingue
  ampliate…
---

Le release **v8.2 e v8.3** segnano importanti passi avanti con le **integrazioni Enterprise**, un completo redesign del **modulo CSV**, capacità SEO multilingue ampliate per Shopify e una logica di filtraggio basata sulle scorte migliorata.

## 1\. Integrazione Enterprise: Salesforce Commerce Cloud

Abbiamo ampliato il nostro ecosistema di connettori ufficiali Fozzels con il supporto nativo per **Salesforce**, per servire i merchant di livello Enterprise.

-   **Automazione dei contenuti:** generazione fluida e sincronizzazione bidirezionale di contenuti HTML arricchiti, meta tag e attributi sia per i **prodotti** sia per le **pagine di categoria**.

-   **Scalabilità Enterprise:** elaborazione dei dati in blocco rapida e affidabile, progettata per gestire cataloghi di grandi dimensioni senza compromessi sulle prestazioni.
    ![](/img/kb/fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo/gijc0EWvFlC1zyvnpAeXsONb3oKC7iTWEQ.png)

## 2\. Redesign dell'integrazione CSV (UX 2.0 e Media Gallery)

Abbiamo completamente rinnovato il modulo di importazione CSV per rendere il caricamento dei file, la mappatura e la configurazione il 200% più intuitivi e visivi.

-   **Media Gallery nativa:** visualizzi in anteprima immagini e asset multimediali direttamente nell'interfaccia della tabella.

-   **Motore di mappatura aggiornato:** un'interfaccia pulita e intuitiva per mappare le colonne CSV sulla struttura dei campi interna di Fozzels.

-   **Controllo dei dati:** la convalida visiva della mappatura riduce in modo significativo gli errori umani e velocizza l'onboarding dei nuovi cataloghi prodotti.

## 3\. Miglioramenti per Shopify: SEO multi-mercato e logistica

### Sincronizzazione del testo ALT multi-mercato e multilingue

Risolve un problema importante per gli store e-commerce internazionali e multi-regione.

-   **Tag ALT localizzati:** Fozzels può ora generare e sincronizzare **testi ALT localizzati diversi per gli stessi identici asset di immagine** in base alla lingua e al mercato di destinazione.

-   **Piena compatibilità con l'ecosistema:** supporto immediato per **Shopify Markets** e per le app di traduzione (incluso **LangShop**).

### Supporto per peso e unità di peso

-   **Calcolo accurato delle spedizioni:** abbiamo aggiunto la sincronizzazione automatica dei valori di peso del prodotto (`weight`) e delle unità di misura (`weight unit`).

-   **Formati standardizzati:** il campo `weight unit` utilizza un formato di input **Select** rigoroso per evitare errori di formattazione e garantire un calcolo fluido delle tariffe di spedizione al checkout.

## 4\. Filtraggio intelligente delle scorte per VTEX

Ottimizzi i costi di generazione con l'IA grazie a una selezione del catalogo precisa e basata sull'inventario.

-   **Filtraggio basato sulle scorte:** filtri i prodotti direttamente a livello dell'integrazione VTEX utilizzando un attributo booleano di disponibilità (`Stock = Yes / No`).

-   **Efficienza delle risorse:** salti automaticamente gli articoli esauriti (`Stock = No`) per concentrare la generazione con l'IA esclusivamente sull'inventario attivo.

## 5\. Correzioni di bug e stabilità

-   **Integrazione con Katana PIM:** risolto un problema che interessava la sincronizzazione dei dati con Katana PIM. Lo scambio bidirezionale dei dati ora funziona in modo fluido e affidabile.

_Grazie a tutto il team per aver dato vita a questi aggiornamenti e ai nostri utenti per il loro costante feedback! Provi le nuove funzionalità e ci faccia sapere cosa ne pensa._
