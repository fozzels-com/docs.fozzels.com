---
title: "Panoramica della Dashboard e limiti di utilizzo dell'account"
sidebar_position: 9
slug: /account-core-resources/dashboard-overview-and-account-usage-limits
description: >-
  La Dashboard è la pagina iniziale di Fozzels e offre una panoramica in tempo
  reale dell'utilizzo del Suo account — integrazioni, store, Flow e
  completamenti rispetto alle quote del Suo piano.
---

La Dashboard è la pagina iniziale di Fozzels. Offre una panoramica in tempo reale dell'utilizzo del Suo account.

Vada su [Dashboard](https://app.fozzels.com/dashboard)

---

## Barra delle statistiche

La parte superiore della pagina mostra 6 metriche chiave. Ciascuna indica **conteggio attuale / quota del piano**:

| Statistica | Cosa conteggia |
|------|---------------|
| **Integrazioni** | Totale delle integrazioni create (attive o meno) |
| **Siti web** | Siti web attivati in tutte le integrazioni |
| **Store** | Store attivati in tutte le integrazioni |
| **Flow** | Content Flow attivi (i Flow archiviati non vengono conteggiati) |
| **Completamenti oggi** | Contenuti generati dall'AI finora nella giornata odierna (si azzera a mezzanotte UTC) |
| **Completamenti questo mese** | Contenuti generati dall'AI nel mese solare corrente |

> Una statistica mostrata in **rosso o arancione** indica che ha raggiunto o sta per raggiungere il limite di quota del Suo piano.

---

## Due limiti distinti da comprendere

Fozzels prevede **due sistemi di fatturazione indipendenti** che è facile confondere:

### 1. Quote del piano (abbonamento)

Il Suo piano di abbonamento stabilisce limiti rigidi su:

- Numero di integrazioni, siti web, store e Flow attivi che può avere
- Numero di completamenti al giorno e al mese

Questi valori sono mostrati nella barra delle statistiche della Dashboard. Quando una quota viene raggiunta, l'azione viene **bloccata** finché non passa a un piano superiore.

→ Gestisca in [Plans](https://app.fozzels.com/user/settings/plans)

### 2. Saldo crediti (a consumo)

Ogni volta che l'AI genera contenuti, vengono consumati crediti dal Suo saldo.

- I crediti sono separati dal Suo abbonamento — può avere un piano attivo ma zero crediti
- Quando il saldo arriva a zero, la generazione viene bloccata anche se la quota del piano lo consentirebbe
- Costo: circa €0.06 ogni 750 parole di output AI
- Ricarichi manualmente o configuri la ricarica automatica

→ Gestisca in [Payments](https://app.fozzels.com/user/settings/payments)

**Entrambi i limiti devono essere rispettati** affinché la generazione funzioni: servono quota residua del piano E un saldo crediti positivo.

---

## Pulsante Upgrade Plan

Visibile quando non dispone del piano Unlimited. Cliccandolo, viene indirizzato direttamente a [Plans](https://app.fozzels.com/user/settings/plans) per passare a un piano superiore.

---

## Grafico delle analisi

Mostra l'attività di generazione dei contenuti nel tempo — quanti completamenti sono stati creati ogni giorno. Lo utilizzi per:

- Individuare picchi di utilizzo
- Verificare che i Suoi Flow funzionino come previsto
- Controllare se la generazione si è interrotta inaspettatamente

---

## Domande frequenti sulla dashboard

**"Completamenti oggi" è 0 anche se ho eseguito dei Flow**

- Verifichi che i Suoi Flow siano impostati su **Active**
- Verifichi che il Suo Flow sia stato eseguito oggi (la generazione è pianificata — avvii un'esecuzione manuale per provare)
- Controlli il Suo saldo crediti in [Payments](https://app.fozzels.com/user/settings/payments) — se è pari a zero, la generazione è bloccata

**Le statistiche non si aggiornano**

- La dashboard si aggiorna al caricamento della pagina; esegua un aggiornamento forzato della pagina (Ctrl+F5 / Cmd+Shift+R)

**Ho raggiunto il limite del mio piano**

- Passi a un piano superiore in [Plans](https://app.fozzels.com/user/settings/plans)
- Oppure disattivi gli store inutilizzati / archivi i Flow inutilizzati per liberare quota

**Non riesco a creare altri Flow**

- Ha raggiunto la quota di Flow attivi, oppure dispone di un piano che limita il numero di Flow
- Controlli i limiti del Suo piano in [Plans](https://app.fozzels.com/user/settings/plans)

**La quota di completamenti è esaurita ma ho ancora crediti**

- Le quote del piano e i crediti sono separati — la quota del piano ha la priorità
- Deve passare a un piano superiore per generare altri contenuti questo mese/oggi

**Qual è la differenza tra "Completamenti oggi" e "Completamenti questo mese"?**

- "Oggi" si azzera ogni giorno a mezzanotte UTC; "questo mese" si azzera il 1° di ogni mese
- Alcuni piani limitano entrambi (ad es. 100/giorno e 3,000/mese) — il primo limite raggiunto blocca la generazione
