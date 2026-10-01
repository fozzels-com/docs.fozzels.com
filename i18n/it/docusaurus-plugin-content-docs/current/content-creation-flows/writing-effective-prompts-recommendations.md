---
id: '103000368009'
title: 4.3.3. Scrivere prompt efficaci (raccomandazioni)
sidebar_position: 11
slug: /content-creation-flows/writing-effective-prompts-recommendations
description: >-
  Questa guida fornisce consigli pratici e best practice per strutturare e
  scrivere prompt dinamici di alta qualità che producono contenuti personalizzati,
  professionali,
---

Questa guida fornisce consigli pratici e best practice per strutturare e scrivere **prompt dinamici di alta qualità** che producono contenuti personalizzati, professionali e unici, andando oltre il semplice inserimento di attributi.

### **Best practice per la generazione di prompt di qualità**

Segua queste sei raccomandazioni fondamentali per massimizzare l'efficacia e la chiarezza dei Suoi prompt:

1\. Crei una struttura chiara.
**Utilizzi** paragrafi brevi, ciascuno con una sola istruzione o riga di dati, in modo che il prompt sia facile da leggere e da mantenere. Il prompt stesso non contiene alcuna formattazione: per ottenere titoli, elenchi o HTML nel testo *generato*, li richieda a parole, ad esempio _Inizia con un titolo `<h2>` che indichi il nome del prodotto, poi elenca tre vantaggi principali in un `<ul>`._ Qualsiasi tag HTML che l'output debba contenere deve essere consentito in [Tag HTML attendibili](/content-creation-flows/allowed-html-tags-for-ai-text-generation).
2\. Verifichi sempre la disponibilità dei dati.
**Eviti** di inserire direttamente gli attributi se non può garantire che il valore sia presente per tutti i prodotti. Se il valore di un attributo manca, nel testo generato finale resterà uno spazio vuoto.
**Racchiuda** l'attributo e il testo circostante in un **blocco if** (logica condizionale).
_Esempio: una condizione su **Material** che contiene la riga_ Materiale: **Material** _(il testo "Materiale:" compare solo se il prodotto ha un materiale)._
3\. Si assicuri che i tag siano chiusi.
**Verifichi** che tutti i tag HTML accoppiati richiesti dal Suo prompt siano chiusi correttamente (ad es. `<strong>` viene chiuso con `</strong>`). Tag chiusi in modo errato possono causare errori di formattazione nell'output finale.

4\. Eviti le ripetizioni.
**Non** inserisca lo stesso valore di attributo più volte in blocchi diversi. Ciò appesantisce il testo e può indurre l'AI a generare contenuti ripetitivi e poco naturali.

5\. Scriva in modo "umano" (tono e coinvolgimento).
**Immagini** di essere un copywriter che si rivolge al cliente. Aggiunga dettagli vivaci ed enfasi e si rivolga direttamente all'utente, affinché il testo risulti naturale e persuasivo.
_Esempio: una condizione su **Brand** che contiene la riga_ Affidabilità dal marchio **Brand**: un'ottima scelta per il Suo comfort.
6\. Verifichi il risultato.
Clicchi su **Salva e anteprima** per vedere esattamente come funziona il Suo prompt su prodotti reali e con i loro attributi disponibili. Questo passaggio è fondamentale per individuare errori di logica, sintassi o tono prima di avviare un batch di grandi dimensioni.
