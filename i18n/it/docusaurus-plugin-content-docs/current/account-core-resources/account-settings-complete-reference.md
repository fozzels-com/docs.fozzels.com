---
title: "Impostazioni dell'account — Riferimento completo"
sidebar_position: 10
slug: /account-core-resources/account-settings-complete-reference
description: >-
  Ogni sezione delle Impostazioni dell'account Fozzels spiegata — Profilo,
  Sicurezza, Notifiche, Token OpenAI, token API, Impostazioni dei Flow, Modelli
  di prompt, Media, Piani, Pagamenti e Transazioni.
---

Vada su [Settings](https://app.fozzels.com/user/settings) — la barra laterale sinistra contiene tutte le sezioni.

---

## Profilo

Configuri i dati personali del Suo account:

- **Nome, email, azienda, telefono**
- **Avatar** — carichi una foto JPG o PNG
- **Lingua** — EN, NL, DE o ES (modifica la lingua dell'interfaccia di Fozzels)
- **Fuso orario** — importante per le pianificazioni di importazione, che per impostazione predefinita vengono eseguite in UTC; impostando il Suo fuso orario, gli orari pianificati vengono visualizzati correttamente

---

## Sicurezza

Modifichi la password del Suo account:

- Inserisca la password attuale
- Inserisca e confermi una nuova password

---

## Notifiche

Attivi o disattivi le email che Fozzels Le invia:

- **Email sul prodotto** — novità, suggerimenti e annunci di nuove funzionalità da parte di Fozzels
- **Avviso saldo** — notifica quando il Suo saldo crediti scende a zero

---

## Token Open AI

Aggiunga la Sua chiave API OpenAI per utilizzare la Sua fatturazione OpenAI personale invece dei crediti Fozzels.

- Una volta impostata, tutti i Flow basati su OpenAI utilizzano direttamente la Sua chiave (l'assistente AI funziona con Anthropic e non la utilizza)
- È comunque necessario un saldo minimo di €0.01 in Fozzels per utilizzare questa funzionalità
- Lasci il campo vuoto per utilizzare la chiave della piattaforma Fozzels (i crediti vengono detratti dal Suo saldo)

---

## API (token di accesso personali)

Crei token API per l'accesso programmatico a Fozzels:

- Assegni un nome a ciascun token
- I token possono essere revocati in qualsiasi momento
- Utilizzi i token per integrare Fozzels con strumenti esterni o per automatizzare attività tramite l'API

---

## Impostazioni dei Flow

Impostazioni globali che si applicano a tutti i Content Flow, salvo diversa impostazione per singolo Flow.

### Tag HTML attendibili

Elenco dei tag HTML consentiti nei contenuti generati dall'AI. Solo i tag presenti in questo elenco vengono mantenuti quando l'output viene utilizzato in un attributo HTML.

### Parole sospette

Elenco di parole o frasi che contrassegnano automaticamente i contenuti generati per la revisione manuale.

Le parole sospette predefinite includono artefatti tipici dell'AI come "As an AI", "I cannot", "Sorry". Lei può:

- Aggiungere parole proprie (ad es. nomi di concorrenti, frasi vietate)
- Rimuovere le voci predefinite che causano falsi positivi

I completamenti che contengono parole sospette non possono essere sincronizzati automaticamente — richiedono revisione e conferma manuali.

### Intervallo minimo tra completamenti (globale)

Tempo minimo tra due rigenerazioni AI per lo stesso prodotto, valido per tutti i Flow.

Formato: imposti un numero e un'unità (ore, giorni, settimane).

I singoli Flow possono:

- **Ereditare** questa impostazione globale
- **Sostituirla** con un proprio intervallo
- **Disattivare** completamente l'intervallo

---

## Modelli di prompt

Salvi modelli di prompt riutilizzabili da usare in più Flow.

- Assegni a ciascun modello un nome e un contenuto
- Faccia riferimento ai modelli durante la creazione o la modifica di un Flow invece di scrivere il prompt da zero
- Utile per mantenere tono e formato coerenti tra i Flow

---

## Media

La Sua libreria multimediale — immagini e file caricati o generati all'interno di Fozzels.

---

## Piani

Visualizzi e modifichi il Suo piano di abbonamento.

Vada su [Plans](https://app.fozzels.com/user/settings/plans)

Ogni piano mostra:

- Nome e descrizione
- Funzionalità incluse
- Quote: numero massimo di integrazioni, store, Flow attivi, completamenti giornalieri, completamenti mensili
- Prezzo

Per passare a un piano superiore o inferiore: clicchi su **Choose Plan** → checkout Stripe → confermi il pagamento.

### Piani disponibili

| Piano | Integrazioni | Store | Flow | Completamenti/giorno | Completamenti/mese |
|------|-------------|--------|-------|-----------------|-------------------|
| **Trial** | 1 | 1 | 1 | limitati | limitati |
| **Starter** | 6 | 18 | illimitati | — | — |
| **Ultra Light** | 1 | 1 | 4 | 1,000 | 30,000 |
| **Light** | 1 | 3 | 5 | 30 | 900 |
| **Plus** | 3 | 6 | 15 | 75 | 2,250 |
| **Premium** | 6 | 18 | 60 | 100 | 3,000 |
| **Unlimited** | illimitate | illimitati | illimitati | illimitati | illimitati |

> Quando una quota viene superata, l'azione viene bloccata con un messaggio che rimanda alla pagina dei Piani.

---

## Pagamenti (crediti)

Vada su [Payments](https://app.fozzels.com/user/settings/payments)

Fozzels utilizza un **sistema di crediti a consumo** — separato dal Suo piano di abbonamento. I crediti vengono consumati ogni volta che l'AI genera contenuti.

**Costo:** circa €0.06 ogni 750 parole di contenuto generato.

**Esempio:** 1,000 descrizioni di prodotto di ~200 parole ≈ €16

### Gestione del saldo

- **Saldo attuale** — mostrato nel riquadro arancione
- **Charge Credit Now** — ricarica manuale una tantum tramite Stripe
- **Configure Auto-Charge** — imposti una soglia e un importo di ricarica automatica
  - Esempio: ricaricare automaticamente €50 quando il saldo scende sotto €10
- **Customer Billing Portal** — portale Stripe per gestire i metodi di pagamento e scaricare le fatture

### Cronologia dei pagamenti

La tabella mostra tutti gli addebiti passati con data, importo e stato.

### Problemi di fatturazione frequenti

- **"You exceeded your current quota"** — il Suo saldo è pari a zero oppure la Sua chiave API OpenAI è scaduta
  - Ricarichi il saldo in [Payments](https://app.fozzels.com/user/settings/payments) oppure aggiunga la Sua chiave OpenAI in Settings → Open AI Token
- **La ricarica automatica non si attiva** — verifichi che la soglia sia impostata e che un metodo di pagamento sia salvato nel portale Stripe

---

## Transazioni

Cronologia completa di tutte le detrazioni di crediti — mostra quale Flow o completamento ha consumato crediti, quanti token sono stati utilizzati e il costo di ogni operazione.

---

## Accesso del Reseller

Se un Reseller gestisce il Suo account, il suo accesso viene elencato nelle Impostazioni dell'account. Può **revocare l'accesso del Reseller** in qualsiasi momento da questa pagina.

Quando un Reseller ha effettuato l'accesso al Suo account, la barra di intestazione diventa nera.
