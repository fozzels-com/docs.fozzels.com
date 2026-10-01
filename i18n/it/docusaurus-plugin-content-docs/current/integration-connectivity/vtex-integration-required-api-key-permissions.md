---
id: '103000406106'
title: "2.8.1 Integrazione VTEX — autorizzazioni richieste per la chiave API"
sidebar_position: 18
slug: /integration-connectivity/vtex-integration-required-api-key-permissions
description: >-
  Di quali autorizzazioni della chiave API ho bisogno per collegare Fozzels a
  VTEX? Per collegare il Suo negozio VTEX a Fozzels, deve creare una chiave API
  nel Suo pannello di amministrazione VTEX e
---

## Di quali autorizzazioni della chiave API ho bisogno per collegare Fozzels a VTEX?

Per collegare il Suo negozio VTEX a Fozzels, deve creare una chiave API nel Suo pannello di amministrazione VTEX e assegnarle le autorizzazioni corrette. Questo articolo spiega esattamente quali autorizzazioni abilitare.

## Passaggio 1 — Creare una chiave API in VTEX

1.  Acceda al Suo pannello di amministrazione VTEX
2.  Vada su **Account Management → Account → App Keys**
3.  Clicchi su **Generate new key**
4.  Le assegni un nome (ad es. _Fozzels Integration_)
5.  Copi sia l'**App Key** sia l'**App Token**: Le serviranno in Fozzels

## Passaggio 2 — Assegnare le autorizzazioni alla chiave API

### Opzione A: utilizzare il ruolo di integrazione predefinito (consigliato)

VTEX fornisce un ruolo già pronto, progettato per le integrazioni di cataloghi esterni:

1.  Nelle impostazioni della Sua App Key, vada su **Roles**
2.  Cerchi e aggiunga il ruolo: **IntegrationProfile-externalCatalog**
3.  Salvi: questo singolo ruolo copre tutte le autorizzazioni di cui Fozzels ha bisogno

### Opzione B: aggiungere manualmente le singole autorizzazioni

Se preferisce impostare le autorizzazioni minime necessarie, aggiunga le seguenti risorse al ruolo della Sua chiave API:

#### Catalog System

Risorsa

Perché è necessaria

Get sales channel list

Fozzels la utilizza per connettersi al Suo negozio e rilevare le impostazioni locali

Get product and SKU IDs

Necessaria per recuperare l'elenco completo dei prodotti del Suo catalogo

Get specification field list by category

Consente a Fozzels di leggere le definizioni degli attributi dei Suoi prodotti

Get product specifications

Legge i valori correnti degli attributi di ciascun prodotto

#### Catalog

Risorsa

Perché è necessaria

Get product by ID

Recupera i dettagli completi del prodotto per la generazione di contenuti con l'IA

Update product

**Autorizzazione di scrittura.** Fozzels la utilizza per inviare al Suo negozio le descrizioni, i titoli e le meta description generati

Get SKU by product ID

Recupera le informazioni a livello di SKU per ciascuna variante di prodotto

Get SKU file

Legge le immagini esistenti dei prodotti

Add SKU file

**Autorizzazione di scrittura.** Necessaria se utilizza Fozzels per generare e inviare immagini dei prodotti

Create/update product specification

**Autorizzazione di scrittura.** Consente a Fozzels di riscrivere i contenuti generati nei campi degli attributi dei prodotti

#### Category

Risorsa

Perché è necessaria

Get category tree

Fozzels utilizza la struttura delle Sue categorie per organizzare il catalogo prodotti

## Passaggio 3 — Inserire le credenziali in Fozzels

1.  Acceda al Suo account Fozzels
2.  Vada su **Integrations → Add integration → VTEX**
3.  Inserisca il Suo **Account name** (il sottodominio del Suo negozio VTEX, ad es. `mystore`)
4.  Inserisca l'**App Key** e l'**App Token** ottenuti nel Passaggio 1
5.  Clicchi su **Test connection** per verificare che tutto funzioni

## Domande frequenti

**Devo concedere a Fozzels l'accesso a ordini o pagamenti?**
No. Fozzels lavora esclusivamente con il Suo catalogo prodotti. Non necessita di accesso a ordini, logistica, prezzi, checkout o informazioni di pagamento.

**Ho un negozio multilingua / transfrontaliero. Ho bisogno di autorizzazioni aggiuntive?**
Per i negozi in un'unica lingua, le autorizzazioni sopra indicate sono sufficienti. La riscrittura multilingua è prevista nella nostra roadmap e potrebbe richiedere un'autorizzazione aggiuntiva al momento del rilascio. Aggiorneremo questo articolo in quel momento.

**Posso limitare la chiave API a indirizzi IP specifici?**
Sì. Gli indirizzi IP attuali di Fozzels sono elencati in [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](./connection-requirements.md).
