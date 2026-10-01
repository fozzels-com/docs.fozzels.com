---
id: '103000367979'
title: >-
  4.2.2. Configurazione AI. Ottimizzazione delle immagini (ridimensionamento):
  motivazioni e implementazione.
sidebar_position: 7
slug: >-
  /content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation
description: >-
  La funzionalità Image Resize ottimizza automaticamente le immagini di grandi
  dimensioni per soddisfare i requisiti tecnici del sistema di generazione AI.
  È attivata per impostazione predefinita in t
---

La funzionalità **Image Resize** ottimizza automaticamente le immagini di grandi dimensioni per soddisfare i requisiti tecnici del sistema di generazione AI. È attivata per impostazione predefinita in tutti i Flow nuovi ed esistenti, per prevenire errori di generazione e ridurre i costi dei token di input.

**1\. Come gestire la funzionalità Image Resize**

 La funzionalità viene gestita singolarmente per ogni Flow nel passaggio di configurazione AI.

1.Vada alla schermata di modifica di uno qualsiasi dei Suoi Flow.

2\. Passi allo **Step 2: AI Configuration**.

3\. Scorra verso il basso fino alla sezione **Image Resize**.

4\. Gestisca la funzionalità tramite la casella di controllo **"Enable Image Resize"**.

   ![](/img/kb/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/ZDcGWszXAjy6POiHs75NMe0FsBeIK14pfg.png)

    Quando utilizzarla:
**Attivata (predefinito):** consigliata per tutti i Flow in cui utilizza immagini di prodotto per l'analisi AI o la generazione di immagini.
Ciò garantisce il successo della generazione e riduce i costi dei token.
**Disattivata:** se non prevede di utilizzare alcuna analisi o generazione di immagini in questo specifico Flow. _Nota: la disattivazione può comportare un aumento degli errori di generazione dei contenuti se carica immagini che superano i limiti._

**2\. Dettagli tecnici e monitoraggio dei costi**

Il meccanismo di ridimensionamento si attiva solo quando un'immagine supera specifici criteri tecnici.

    Criteri di attivazione
Il meccanismo di ridimensionamento delle immagini si attiva **solo** quando sono soddisfatte _entrambe_ le condizioni:

1\. La dimensione del file **supera i 2 MB** (megabyte);

2\. **E** la larghezza o l'altezza dell'immagine **supera i 2048 pixel**.

Dove si applica la funzionalità

La funzionalità Image Resize opera in due casi d'uso principali:

        1. Utilizzo delle immagini (analisi): immagini che aggiunge per l'analisi AI all'interno dei Suoi Flow.
        2. Flusso di immagini (generazione): immagini inviate insieme al prompt per la generazione di nuovi contenuti.

Monitoraggio di costi e spese

1\. Il costo per il ridimensionamento di una singola immagine è di **€0.0025 per immagine**.

2\. Questo importo viene **addebitato solo** quando la funzionalità si è _effettivamente attivata_ (ovvero l'immagine soddisfaceva i criteri tecnici ed è stata ridimensionata).

3\. Può monitorare queste spese nella pagina **Transactions** del Suo account.

## 4\. L'utilizzo è incluso anche nella Sua email giornaliera "Your Fozzels content update".

**3\. Vantaggi principali**

La funzionalità Image Resize attiva è un elemento chiave di affidabilità e risparmio:

1\. Previene le generazioni non riuscite: ha la garanzia di **evitare errori** legati alle grandi dimensioni delle immagini, risparmiando tempo.

2\. Riduzione dei costi dei token di input: immagini ottimizzate e più piccole richiedono **meno token di input** per l'elaborazione da parte del modello AI, il che **riduce il costo complessivo** della generazione dei contenuti.

3\. Risparmio dei Suoi crediti: evitando tentativi di generazione non riusciti a causa di file di grandi dimensioni, paga solo per i contenuti creati con successo.

4\. Ridimensionamento automatico: il sistema esegue l'ottimizzazione necessaria **automaticamente** in background, consentendoLe di concentrarsi sulla creazione dei contenuti.
