---
title: 'FAQ: catalogo prodotti e importazioni dei dati'
sidebar_position: 8
unlisted: true
slug: /frequently-asked-questions/faq-product-catalog-and-data-pulls
description: >-
  Come funziona l'importazione notturna del catalogo, perché i prodotti nuovi o
  mancanti non compaiono, differenze tra varianti e categorie, filtri per
  attributi personalizzati e pianificazioni personalizzate delle importazioni.
---

## Il catalogo prodotti si aggiorna secondo una pianificazione notturna. Come funziona?

Il catalogo si aggiorna automaticamente ogni notte alle 01:30. Dopo l'importazione, tutti i flussi vengono aggiornati con i dati più recenti. I nuovi prodotti che corrispondono ai filtri dei flussi vengono aggiunti automaticamente.

## I nuovi prodotti aggiunti al mio webshop non compaiono in Fozzels.

I prodotti compaiono dopo la successiva importazione programmata del catalogo (ogni notte alle 01:30). Per vederli immediatamente, avvii un'importazione manuale dei prodotti.

## Fozzels mostra meno prodotti del previsto: mancano alcune combinazioni di colori.

Fozzels filtra i prodotti in base a condizioni specifiche e li raggruppa a livello di prodotto-colore, escludendo le varianti di taglia. Confronti le condizioni dei Suoi filtri con il Suo database per individuare le discrepanze.

## Non riesco a trovare una specifica categoria di prodotti in Fozzels.

L'albero delle categorie in Fozzels può differire da quello del Suo negozio. Utilizzi i filtri per cercare. Se ancora non riesce a trovarla, contatti il supporto inviando uno screenshot del Suo pannello di amministrazione.

## Alcuni prodotti mancano dal mio flusso a causa di un attributo di magazzino vuoto.

Controlli le condizioni del filtro del flusso. Se una condizione sul magazzino (ad es. "Voorraad IS NOT NULL") esclude i prodotti con valori di magazzino vuoti, compili i dati oppure rimuova la condizione.

## Un'importazione manuale dei dati non aggiorna gli attributi.

Dopo un'importazione, Fozzels ha bisogno di tempo per l'elaborazione: i dati non sono immediati. Se gli attributi rimangono invariati, contatti il supporto.

## Quando dovrei avviare manualmente un'importazione dei prodotti?

Dopo modifiche importanti al catalogo, nuovi set di prodotti, aggiunte o rimozioni consistenti, oppure modifiche al feed o all'integrazione.

## Come filtro i prodotti in base ad attributi personalizzati (ad es. "Webshop Article = Yes")?

Gli attributi personalizzati per il filtraggio devono essere presenti nel feed dei dati. Una volta presenti in Fozzels, li utilizzi come condizioni nei filtri dei flussi. Se un attributo non compare, contatti il supporto.

## Un prodotto è stato rimosso dal catalogo a causa della configurazione delle varianti.

Fozzels filtra in base alle impostazioni delle varianti e le varianti disattivate possono escludere dei prodotti. Contatti il supporto per verificare la configurazione.

## Posso impostare una pianificazione personalizzata per l'importazione dei prodotti (non solo notturna)?

Sì. Dalla release 5.14 è possibile impostare un orario personalizzato per le importazioni dei prodotti sia a livello di integrazione sia a livello di negozio.
