---
title: "FAQ: generazione dei contenuti"
sidebar_position: 5
unlisted: true
slug: /frequently-asked-questions/faq-content-generation
description: >-
  Le domande più frequenti sulla generazione di testi con l'IA — testi mancanti,
  limiti dei batch, rigenerazione dopo la modifica del prompt, errori di
  generazione, contenuti sospetti, scelta del modello, tempi di sincronizzazione
  e controllo dei costi.
---

## I prodotti sono nel mio flusso, ma i testi non sono stati generati.

La generazione potrebbe essere in attesa della prossima esecuzione pianificata. Può avviarla manualmente oppure contattare il supporto perché la avvii per Lei.

## Come confermo i contenuti generati prima che vengano inviati al mio sito web?

Se il Suo flusso è semiautomatico, confermi i completamenti singolarmente oppure utilizzi la mass action nella batch list per approvare più elementi.

## I nuovi prodotti sono online da giorni, ma non hanno testi generati.

La generazione pianificata potrebbe essere stata ritardata. Contatti il supporto: il team può recuperare di nuovo manualmente i prodotti e avviare la generazione.

## È possibile correggere i testi mancanti per più brand contemporaneamente?

Sì. Contatti il supporto e specifichi quali brand/flussi sono interessati. Il team può avviare la generazione per tutti in una sola volta.

## Il mio flusso mostra il 100%, ma ho modificato il prompt. Perché non ci sono nuovi testi?

La sola modifica del prompt non avvia la rigenerazione dei testi esistenti. Utilizzi Mass Action → "Regenerate content" oppure duplichi il flusso.

## Come rigenero tutti i testi dei prodotti dopo aver aggiornato il prompt?

Vada ai completamenti, selezioni tutto tramite Mass Action e scelga "Regenerate content". In alternativa, disattivi il flusso, lo duplichi e attivi la nuova versione.

## Il periodo di cooldown non avvia la rigenerazione.

Il cooldown controlla il tempo minimo tra le rigenerazioni automatiche, ma non forza la rigenerazione dei testi già completati. Utilizzi Mass Action per rigenerarli.

## Quali sono le cause degli errori di generazione / dei completamenti non riusciti?

Di solito un elevato carico di elaborazione del modello di IA. Prompt lunghi + output lunghi + più immagini possono sovraccaricare il modello. I job non riusciti vengono ritentati automaticamente. Provi prompt più brevi o un modello diverso.

## Come posso vedere per quali prodotti la generazione dei contenuti non è riuscita?

Consulti il report dei completamenti su [app.fozzels.com/completions/product/completion/report/](https://app.fozzels.com/completions/product/completion/report/) e filtri per data con l'opzione `failed_only`.

## Il mio batch sembra bloccato: nessun testo generato.

La causa può essere un limite temporaneo dei token del fornitore di IA. Il sistema torna automaticamente alla normalità. Contatti il supporto se il problema persiste.

## La generazione dei contenuti richiede molto più tempo del solito.

Si tratta di ritardi temporanei dovuti ai limiti di utilizzo dei token. Di solito il problema si risolve automaticamente. Contatti il supporto se la generazione rimane bloccata.

## Vedo "Unknown error" su tutti i job.

Ciò accade durante i picchi di carico del sistema. Il sistema riprova automaticamente. Se l'80% o più dei job non va a buon fine, contatti il supporto: il team può monitorare i flussi e avviarli manualmente.

## La mia batch list mostra 500 prodotti, ma il mio flusso ne ha 3.380 idonei.

Fozzels limita i batch a 500 prodotti per ogni **Plan & Close**. Faccia clic più volte su "Plan & Close" per mettere in coda batch aggiuntivi.

## "Run Now" aggiunge solo 10 prodotti.

"Run Now" serve per test rapidi (10 prodotti). Utilizzi "Plan & Close" per batch più grandi (fino a 500).

## Qual è la differenza tra "Plan & Close" e "Run Now"?

"Run Now" elabora immediatamente fino a 10 prodotti a scopo di test. "Plan & Close" mette in coda un batch fino a 500 prodotti. Utilizzi Plan & Close in produzione.

## Quali sono i limiti di generazione giornalieri per piano?

Piani inferiori: 10–30 prodotti/giorno. Piani superiori (da €299): un numero significativamente maggiore. Unlimited: 500 per flusso al giorno. Contatti il supporto per aumenti temporanei.

## Posso richiedere un aumento temporaneo del limite per un primo popolamento?

Sì. Per grandi volumi una tantum, il team può aumentare temporaneamente i limiti. Contatti il supporto indicando il volume previsto e le tempistiche.

## Come visualizzo in anteprima i risultati del prompt prima della sincronizzazione?

Apra il flusso → aggiunga il Suo prompt → faccia clic su **Save and Preview** → faccia clic su **Generate Now**. L'anteprima non viene salvata né sincronizzata.

## Perché l'anteprima richiede un saldo?

La funzione di anteprima consuma token, quindi è necessario un saldo. Se necessario, contatti il supporto per un piccolo credito di prova.

## Ricevo errori "Empty Result" con il modello GPT-5.

GPT-5 richiede una maggiore capacità di token. Aumenti Max Tokens da 2.000 ad almeno 5.000.

## Quale impostazione di Max Tokens è consigliata?

Per GPT-5: almeno 5.000. Si assicuri che i token del prompt + max_tokens non superino la lunghezza del contesto del modello.

## Cosa sono gli avvisi di contenuto sospetto?

Fozzels convalida l'output rispetto a un elenco di parole indesiderate. I contenuti segnalati non vengono sincronizzati automaticamente. Può personalizzare l'elenco o aggiungere restrizioni al prompt.

## Come riduco gli avvisi di contenuto sospetto?

Aggiunga restrizioni nel Suo prompt, personalizzi l'elenco delle parole sospette oppure utilizzi **Regenerate**. Se il contenuto è corretto, contatti il supporto per forzarne la sincronizzazione.

## Posso forzare la sincronizzazione dei contenuti sospetti?

Contatti il supporto, specificando se si tratta di tutti i flussi o solo di alcuni. Il team può sincronizzare i contenuti segnalati per Suo conto.

## I miei titoli di pagina sono troppo lunghi / raggiungono i limiti di caratteri.

Modifichi il prompt specificando il numero massimo di caratteri. Contatti il supporto per correggere i titoli esistenti troppo lunghi.

## Nel contenuto generato compare la stringa "Plain text".

Si tratta di un raro problema legato al prompt. Il supporto può esaminare e ripulire i prodotti interessati. Lo segnali fornendo esempi specifici.

## Un prodotto non viene pubblicato a causa dei contenuti di Fozzels.

Problemi nei contenuti (titoli lunghi, stringhe inattese) possono bloccare la pubblicazione. Contatti il supporto fornendo i dettagli del prodotto.

## I miei flussi di contenuti automatici hanno smesso di funzionare.

La causa può essere un problema lato Fozzels o una limitazione del fornitore di IA. Contatti il supporto per indagare e riavviarli.

## Il mio flusso mostra il 100% in verde subito dopo l'attivazione: è corretto?

Si tratta di un problema noto dell'interfaccia. La schermata iniziale può mostrare il 100% prima del completamento. Controlli i dettagli del flusso per conoscerne lo stato reale.

## Il pulsante "Generate Now" non risponde.

La coda di generazione potrebbe essere sovraccarica nei momenti di picco. Attenda e riprovi, oppure passi a un modello di IA più veloce.

## Posso cambiare modello di IA per una generazione più rapida?

Sì, modifichi il modello nelle impostazioni del flusso. I modelli più leggeri sono più veloci. Modelli diversi possono produrre una qualità diversa.

## Quale modello di IA dovrei utilizzare per il miglior rapporto costo/qualità?

Sono disponibili diversi modelli (ChatGPT, Gemini, Claude). I modelli più potenti offrono una qualità superiore, ma costano di più. Contatti il team per ricevere consigli.

## Ricevo errori di Gemini durante la generazione di batch di grandi dimensioni.

Gemini applica limiti di frequenza per i grandi volumi, causando errori temporanei. I job restano in coda e vengono completati automaticamente non appena i limiti vengono ripristinati.

## I contenuti in francese vengono segnalati erroneamente come sospetti.

L'elenco dei filtri può includere parole comuni in altre lingue. Contatti il supporto per adattare l'elenco alla Sua lingua.

## Esiste un limite di sincronizzazione? Perché la sincronizzazione è lenta?

La sincronizzazione di grandi volumi richiede tempo. Non ci sono limiti rigidi, ma il processo avviene gradualmente. Contatti il supporto se sembra bloccata.

## I risultati sono di scarsa qualità a causa di dati di prodotto insufficienti.

La qualità dipende dai dati disponibili. Arricchisca i dati di prodotto nel Suo PIM/store prima di rigenerare. Per i prodotti con pochi dati potrebbe essere necessaria una modifica manuale.

## Come configuro un flusso completamente automatico (conferma e sincronizzazione automatiche)?

Selezioni il tipo di flusso "Fully-automatic". I risultati vengono confermati automaticamente e sincronizzati alla successiva esecuzione del cron (~4 ore). La convalida interna impedisce la sincronizzazione di contenuti errati.

## Con quale frequenza viene eseguito il cron di sincronizzazione?

La sincronizzazione automatica viene eseguita tramite cron circa ogni 4 ore. Per i lanci urgenti, pianifichi la generazione in anticipo. Contatti il supporto per intervalli più brevi.

## La generazione si è interrotta prematuramente: potrebbe trattarsi di un problema di memoria?

Una memoria del server insufficiente può interrompere le generazioni di grandi dimensioni. Contatti il supporto: il team può aumentare la memoria allocata.

## Come risincronizzo tutti i contenuti in una volta tramite mass action?

Attivi l'interruttore "Show all content", quindi avvii **Resync** tramite mass action per sincronizzare tutto in una sola volta.

## Nella panoramica dei batch viene visualizzato codice HTML.

Utilizzi il pulsante **Show HTML** per passare dalla vista formattata a quella grezza e viceversa. Si tratta di un problema noto dell'interfaccia in fase di miglioramento.

## I miei flussi sono bloccati dopo un saldo insufficiente e una successiva ricarica.

I flussi potrebbero non riprendere automaticamente dopo una ricarica. Contatti il supporto per riavviare i job in coda.

## Cosa succede quando cambia la categoria di un prodotto?

Se la rigenerazione automatica è attiva, il testo verrà rigenerato quando cambia la categoria.

## Come correggo gli errori fattuali nei testi generati dall'IA?

Se il dato proviene da un attributo dello store, lo corregga lì e il contenuto verrà rigenerato automaticamente. Se è stato generato dall'IA (ad es. a partire dalle immagini), lo modifichi manualmente nella batch list.

## Perché vengono generati testi diversi per lo stesso prodotto in colori diversi?

Si tratta di un comportamento previsto. L'IA genera descrizioni univoche in base ai parametri del prodotto: colori diversi producono descrizioni diverse.

## L'anteprima non mostra più gli attributi/le colonne del prodotto.

Questo comportamento è cambiato con la release 5.10. Può attivare e disattivare le colonne nella tabella di anteprima. Le colonne mancanti potrebbero essere dovute a un bug noto.

## Come gestisco più prompt simili tra categorie/brand?

Attualmente ogni flusso ha il proprio prompt. I prompt dinamici/condivisi sono previsti nella roadmap. Utilizzi **Duplicate** per velocizzare la creazione di flussi simili.

## Ricevo un errore di sincronizzazione perché un attributo obbligatorio è vuoto in Magento.

Fozzels non può inviare contenuti se i campi obbligatori di Magento sono vuoti. Controlli il messaggio di errore e compili l'attributo mancante.

## Ho ricevuto addebiti imprevisti a causa di una generazione video bloccata.

Contatti immediatamente il supporto. Il team può stornare gli addebiti errati e risolvere il problema. Elimini i flussi bloccati per interrompere ulteriori addebiti.

## Gli attributi sono scomparsi dai miei flussi/prompt.

Ciò può accadere quando si copiano i prompt da un campo all'altro. Salvi i prompt come modelli. Contatti il supporto se gli attributi scompaiono senza modifiche.
