---
title: "Novità di Fozzels: ottobre 2026, parte 2"
sidebar_position: 19
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2
description: >-
  Workflow che rigenerano i testi con il feedback dell'AI, rigenerazione delle
  immagini con nuove impostazioni, esportazione flessibile in Excel e CSV, testi
  ALT migliori, nuovi modelli AI, chat vocale con Jane ed etichette AI
  automatiche per immagini e video.
---

La seconda parte dei nostri aggiornamenti di ottobre porta i Suoi contenuti a un livello superiore. Ecco che cosa La aspetta:

- **Un nuovo livello di qualità dei risultati.** Un nuovo tipo di workflow con validazione e feedback dell'AI: Fozzels controlla i Suoi testi e continua a perfezionarli finché non sono corretti.
- **Ancora più vicino all'immagine perfetta.** Quando rigenera le immagini, ora può cambiare la foto prodotto di partenza, il modello AI, il prompt e i preset.
- **I Suoi risultati, i Suoi fogli di calcolo.** Scarichi i report in Excel o CSV e scelga esattamente quali dati inserire nel file.
- **Testi ALT significativi, anche dove prima c'erano dei segnaposto.** Fozzels ora trova le immagini il cui ALT è solo un nome di file e crea per loro descrizioni vere.
- **Nuovi modelli AI, chat vocale con Jane ed etichette AI automatiche** per immagini e video.

Ecco tutte le novità e come iniziare a usarle.

## In evidenza

### Rigenerazione automatica: testi che seguono le Sue regole

I workflow possono ora rigenerare automaticamente un testo quando non soddisfa i Suoi requisiti. Aggiunga la nuova azione **Regenerate with feedback** a qualsiasi blocco del workflow: il testo viene trattenuto per la revisione insieme al motivo e Fozzels lo genera di nuovo in background usando quel feedback. In **Maximum regenerations** sceglie quanti tentativi consentire, fino a 3.

Se usa la validazione AI (la condizione **AI validation fails**), le richieste AI aggiuntive per il controllo vengono addebitate separatamente.

**Anche senza workflow.** Se non ha impostato un workflow di questo tipo, Fozzels rigenera comunque i testi segnalati come sospetti, ma senza feedback, secondo le normali regole sui contenuti sospetti, e non subito ma nel successivo ciclo di generazione.

**Nuova azione: Sanitize text.** Pulisce un testo come fa una nuova generazione: corregge i caratteri codificati come `&amp;`, converte il markdown e rimuove i tag HTML non consentiti.

### Esportazione flessibile in Excel e CSV

Ora può esportare i risultati in Excel o CSV e scegliere esattamente quali colonne inserire nel file, per esempio solo lo SKU e la descrizione generata. Dia alla colonna del testo generato il nome del codice attributo e il file è pronto da importare nel Suo negozio o nel Suo ERP. Fozzels ricorda la Sua selezione per la volta successiva.

### Rigenerare le immagini con nuove impostazioni

Non è soddisfatto di un'immagine generata? Il pulsante Regenerate nei risultati del Suo Image Flow ora apre una finestra in cui può modificare le impostazioni per quel singolo risultato prima di generarlo di nuovo:

- **Foto prodotto.** Scelga da quali foto prodotto parte l'AI, per esempio una foto principale diversa se l'angolazione originale non era la migliore. Può selezionare più foto, tante quante ne supporta il modello.
- **Modello AI.** Passi a un altro modello, come Nano Banana invece di GPT Image, e cambi il formato, le dimensioni o il numero di immagini.
- **Prompt e preset.** Modifichi le istruzioni oppure aggiunga, cambi e rimuova preset come sfondo, stile o scena.

Le Sue modifiche valgono solo per questo risultato: le impostazioni del Flow restano invariate e gli altri prodotti vengono generati come prima. Tenga presente che la nuova immagine sostituisce definitivamente quella precedente; la finestra glielo ricorda prima di iniziare.

La pagina del risultato ora mostra anche più dettagli: quando l'immagine è stata creata, generata e rigenerata, il numero di immagini, lo stato del Flow e quale modello AI è stato usato.

### Trovare le immagini con testi ALT segnaposto

Spesso l'ALT di un'immagine è tecnicamente compilato, ma è solo un segnaposto: un nome di file come "IMG_2045.jpg" o semplicemente il nome del prodotto. Per i clienti e i motori di ricerca è quasi come non avere alcun ALT, eppure Fozzels considerava compilati questi testi ALT e saltava queste immagini.

Gli ALT Flows hanno ora una nuova condizione Media Gallery, **has an image whose ALT contains**. Per esempio, inserisca ".jpg" e Fozzels trova ogni immagine il cui ALT è solo un nome di file e genera per loro testi ALT significativi. Per includere anche le immagini senza alcun ALT, aggiunga un gruppo di condizioni con "has an image with an empty ALT" e la Sua condizione ALT e lo imposti su "Any condition".

### Etichette AI nelle immagini e nei video generati

Ogni immagine e ogni video generato da Fozzels contiene ora un'etichetta integrata e leggibile dalle macchine che lo indica come generato dall'AI, in linea con i requisiti di trasparenza dell'AI Act dell'UE. L'etichetta è salvata nei metadati del file, quindi è invisibile ai clienti e non cambia l'aspetto delle Sue immagini, ma resta al suo posto dopo la sincronizzazione con il Suo negozio.

Per le immagini può vederla anche in Fozzels: la cronologia delle versioni del risultato mostra il passaggio **Labelled as AI-generated**.

**Perché è importante:** può usare immagini AI nel Suo negozio in tutta tranquillità, senza aggiungere etichette manualmente.

### Parli con Jane

Ora può parlare con Jane invece di scrivere. Clicchi sul microfono nel campo della chat, faccia la Sua domanda e Jane può leggerLe la risposta ad alta voce. Preferisce il silenzio? Disattivi le risposte vocali con l'icona dell'altoparlante accanto al microfono.

### Nuovi modelli AI

Continuiamo ad ampliare la nostra offerta di modelli non appena i fornitori di AI rilasciano nuovi modelli, così può sempre scegliere quello più adatto a ogni attività.

**Per i testi**

**Gemini 4 Argon.** Il nuovo modello di punta di Google, progettato per la precisione. È uno dei modelli che meno tendono a inventare fatti, il che lo rende un'ottima scelta per contenuti di prodotto dettagliati e ricchi di specifiche tecniche.

**Claude Haiku 5.5.** Il modello più veloce ed economico di Anthropic, ideale per generare contenuti per cataloghi di grandi dimensioni.

**Per le immagini**

**GPT Image 2.5 Flare.** Creazione e modifica di immagini veloci e di alta qualità per l'uso quotidiano.

**GPT Image 2.5 Sunburst.** L'opzione di OpenAI con la qualità più alta, con modifiche precise che lasciano invariato il resto dell'immagine, compreso il Suo prodotto.

**Nano Banana 2.1.** Qualità migliore e prezzo più basso rispetto a Nano Banana 2.

**Per i video**

**HeyGen Video 1.0.** Un'alternativa molto più economica a Veo.

Abbiamo inoltre ritirato i modelli meno recenti GPT-4.1 e GPT Image 1.

## Qualità dei contenuti

- **Meno segnalazioni sospette errate.** Il controllo dei contenuti sospetti è ora più preciso. Le normali specifiche di prodotto con numeri, come "Breite – 80", "+25 °C" o "= 60", non vengono più segnalate. Solo i calcoli veri e propri che l'AI ha lasciato per errore nel testo, come "59 + 1 = 60", vengono indicati come sospetti, così dedica meno tempo a rivedere testi che sono corretti.
- **Meno commenti dell'AI nei Suoi testi.** Abbiamo rafforzato ulteriormente la protezione contro le note di servizio del modello AI che finiscono nei Suoi contenuti definitivi.
- **Jane mantiene intatti i Suoi attributi.** Quando Jane riscrive un prompt, ora inserisce correttamente attributi come `{{name}}` o `{{ean}}`, così i Suoi prompt continuano a funzionare con i dati reali dei prodotti.

## Flow di immagini e video

### Immagini generate sempre aggiornate

Gli Image Flow hanno una nuova opzione: **Process the product again when its source image changes**. Quando nel Suo negozio un'immagine nella posizione della galleria usata dal Suo Flow viene sostituita, rimossa o aggiunta, Fozzels se ne accorge durante la successiva importazione dei prodotti e genera una nuova immagine dalla foto aggiornata.

Buono a sapersi:

- Le immagini create da Fozzels non contano come modifica, anche se hanno sostituito la foto originale, e i prodotti con immagini scelte manualmente non vengono mai elaborati di nuovo.
- Vengono controllati solo i risultati creati dopo l'attivazione dell'opzione, quindi non ci sono rigenerazioni di massa inattese.
- Ogni nuova generazione viene addebitata come di consueto. Finché la nuova immagine non è pronta, il risultato attuale resta attivo.

### Altre novità

- **I prodotti rimossi sono chiaramente indicati.** I prodotti eliminati dal Suo catalogo ora mostrano lo stato "Removed from catalog" anche nei Flow di immagini e video e non vengono più conteggiati come "to be synchronized".
- **Niente più tentativi infiniti.** Se una foto prodotto non può più essere scaricata, Fozzels smette di riprovare e indica la foto come non disponibile.
- **Miniature per i video generati**, così può riconoscerli a colpo d'occhio.

## Report e filtri

**Errori a colpo d'occhio.** Nel report di generazione, il filtro "Display only with errors" ora mostra solo le generazioni non riuscite, con il messaggio di errore effettivo invece di "Unknown error occurred".

**Notifiche dopo una riacquisizione.** Quando riacquisisce i prodotti con un'azione di massa, ora riceve subito una notifica con il risultato.

## App e lingue

- **Fozzels in italiano.** L'app è ora disponibile in italiano e il Centro assistenza in italiano e francese.
- **Addio, vecchia Chat Sandbox.** Abbiamo ritirato il chatbot del 2023. Jane, il Suo assistente AI, è sempre a disposizione per aiutarLa.
- **Piccoli miglioramenti dell'interfaccia.** La prima integrazione del Suo account è ora selezionata per impostazione predefinita negli elenchi a discesa e l'elenco dei fornitori di AI non si apre più da solo quando apre un Flow.

## Aggiornamenti delle integrazioni

### Magento

**Testi per tutte le store view.** Attivi **Also save as the default value for all store views** e ogni push salva il testo nella store view del Flow e, come valore predefinito, in tutte le altre store view. Le store view con un proprio valore per l'attributo continuano a mostrarlo.

Buono a sapersi: se un Flow per un'altra store view usa questo attributo nel prompt e crea automaticamente un nuovo testo quando un attributo cambia, considererà il nuovo valore predefinito come una modifica e genererà nuovi testi per i prodotti senza un proprio valore.

Maggiori dettagli in [4.1.2.c Come sincronizzare i contenuti generati con tutte le store view in Magento 2](/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/).

### Magento e NextChapter

**Sostituzione delle foto prodotto esistenti.** Le nuove immagini generate possono ora sostituire le foto prodotto attuali e la sostituzione viene mostrata correttamente nella galleria media di Fozzels dopo la sincronizzazione.

### Shopware

**Supporto per le immagini AVIF.** I prodotti con foto AVIF possono ora essere usati anche per la generazione di testi: prima di inviarle all'AI, convertiamo queste foto in un formato supportato dal modello.

### CSV / Raw File

I file con caratteri nascosti all'inizio, che facevano apparire tra virgolette il nome della prima colonna, ora vengono letti correttamente.
