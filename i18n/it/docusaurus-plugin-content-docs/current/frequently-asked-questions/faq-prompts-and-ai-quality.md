---
title: 'FAQ: prompt e qualità dell''AI'
sidebar_position: 6
unlisted: true
slug: /frequently-asked-questions/faq-prompts-and-ai-quality
description: >-
  Competizione tra prompt, inquadratura delle immagini e branding, formattazione
  coerente delle caratteristiche, output in lingue miste e logica di fallback
  della lingua nei prompt.
---

## La mia immagine AI ignora le istruzioni di inquadratura (figura intera anziché busto).

Ciò è causato dalla **competizione tra prompt**: istruzioni in conflitto tra loro (ad es. "full-body" insieme a "only torso"). Rimuova tutti gli elementi in conflitto e utilizzi un linguaggio specifico come "waist-up portrait pose".

## Il logo e il branding risultano sfocati nelle immagini generate.

Le inquadrature a figura intera distribuiscono il rendering su tutto il corpo. Passi a un'inquadratura ritratto/dalla vita in su e aggiunga istruzioni specifiche sul branding nel prompt.

## Avete consigli per ottimizzare i prompt per la generazione di immagini?

Eviti istruzioni contraddittorie, aggiunga esclusioni esplicite, utilizzi un linguaggio specifico per i ritratti e tuteli i dettagli del branding. Contatti il supporto per una revisione del prompt.

## Le caratteristiche dei miei prodotti sono formattate in modo incoerente (elenco o testo continuo).

Aggiunga al prompt regole di formattazione esplicite: ogni caratteristica su una nuova riga, nomi in grassetto, nessun simbolo di elenco puntato. Utilizzi l'enfasi in MAIUSCOLO per le regole principali.

## Come scrivo i prompt per ottenere una formattazione coerente delle caratteristiche dei prodotti?

Specifichi la struttura (descrizione + sezione delle caratteristiche), la formatti come elenco verticale con etichette in grassetto, vieti gli elenchi puntati ed elenchi le caratteristiche richieste.

## L'AI genera informazioni errate su materiali/attributi a partire dalle immagini.

Quando Fozzels non ha accesso a campi specifici, l'AI deduce le informazioni dalle foto, il che non è affidabile per i dettagli tecnici. Colleghi ACF/attributi personalizzati per ottenere dati accurati.

## Il team Fozzels può esaminare i miei flussi e prompt?

Sì, il team può fornire consigli su struttura, specializzazione e ottimizzazione. Programmi una sessione online per una consulenza dettagliata.

## Fozzels può riprodurre il layout personalizzato del mio frontend (ad es. un accordion)?

Fozzels non può garantire la corrispondenza con layout complessi. Sperimenti con i prompt, ma potrebbe essere necessario un intervento manuale.

## Ottengo un output in lingue miste (ad es. inglese + olandese).

Scriva tutte le istruzioni del prompt nella lingua di output desiderata e non mescoli le lingue. Aggiunga una nota decisa: "IMPORTANT: Output must be entirely in [language]."

## Il mio prompt genera lingue miste quando lo copio da un altro negozio.

Non lo copi aggiungendo istruzioni di traduzione. Scriva l'intero prompt da zero nella lingua di destinazione e crei prompt separati per ciascuna lingua.

## Posso utilizzare una logica di fallback della lingua nei prompt (ad es. ceco → tedesco)?

Può provare a inserire una logica condizionale nel prompt: "If Czech text is available, use it. If not, use German." I risultati dipendono dalla capacità dell'AI di rilevare la lingua.
