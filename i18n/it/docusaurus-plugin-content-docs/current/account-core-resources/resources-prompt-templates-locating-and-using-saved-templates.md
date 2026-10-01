---
id: '103000367846'
title: "1.5. Risorse. Modelli di prompt: individuare e utilizzare i modelli salvati."
sidebar_position: 8
slug: >-
  /account-core-resources/resources-prompt-templates-locating-and-using-saved-templates
description: >-
  I modelli di prompt (Prompt Templates) sono modelli di testo riutilizzabili e
  preconfigurati, utilizzati come input per l'AI per generare tipi specifici di
  contenuti di prodotto. Questi modelli sono confi
---

I modelli di prompt (Prompt Templates) sono modelli di testo riutilizzabili e preconfigurati, utilizzati come input per l'AI per generare tipi specifici di contenuti di prodotto. Questi modelli vengono configurati indipendentemente dai flussi di generazione dei contenuti e costituiscono una parte fondamentale della logica di automazione. Vengono generalmente utilizzati per generare descrizioni di prodotto, meta title o meta description.

Per accedere all'area di gestione, vada su **Settings → Prompt Templates**.

Tabella di gestione dei modelli

La tabella principale offre una panoramica di tutti i modelli creati.
Ogni voce include: l'identificativo univoco (ID), il tipo di regola del modello (Kind, attualmente è disponibile solo Product Attribute), l'attributo di prodotto a cui è collegato il prompt (Attribute, ad es. descrizioni, meta title), il nome del modello (Name), il testo effettivo del prompt e un'icona Shared, che indica se il modello è visibile e condiviso con gli altri utenti del Suo progetto.

Le azioni disponibili includono: View, Edit e Delete.
![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/5LRXIMOwIb-G8vgFQIGjxXsovlESPjZRYA.png)

Ricerca e filtro dei modelli

Può trovare rapidamente modelli specifici utilizzando il campo **Search** situato nell'angolo in alto a destra.
Inoltre, le colonne ID, Kind, Attribute e Name sono ordinabili.
Cliccando sull'intestazione di una colonna si alterna l'ordinamento (crescente o decrescente).
Utilizzi i controlli di paginazione nella parte inferiore della tabella per spostarsi tra più pagine se il Suo elenco di modelli è esteso.

Visualizzazione del contenuto completo del prompt

Cliccando su una qualsiasi cella della colonna **Prompt** si apre una finestra modale che mostra il testo completo e dettagliato del prompt. Questa finestra include:

-   Il pulsante Show HTML, che attiva o disattiva l'anteprima del testo del prompt con la formattazione HTML applicata.

-   Il pulsante Copy to Clipboard, che copia l'intero testo del prompt per l'uso o la modifica esterni.

-   Il pulsante Close, che chiude la finestra modale.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/_NS3hQVxBRRo9EBlkjZjD9wrjEloxWjA3A.png)

Creazione di un nuovo modello di prompt

Per creare un nuovo modello, clicchi sul pulsante **New Prompt Template** nella parte superiore della pagina. Si apre una finestra modale con i campi obbligatori del modulo:

1.  **Attribute** (obbligatorio): selezioni il campo specifico del contenuto di prodotto (ad es. Description, Meta title) che questo prompt è destinato a compilare. In questo modo il prompt viene collegato al campo di contenuto di destinazione corretto.

2.  **Name** (obbligatorio): inserisca un nome chiaro e descrittivo. È buona prassi includere la lingua e lo scopo (ad es. EN: Short description for shoes) per facilitarne l'identificazione.

3.  **Kind** (obbligatorio): selezioni il tipo di regola. Attualmente è disponibile solo Product Attribute.

4.  **Template** (obbligatorio): inserisca qui il contenuto principale del prompt. Questo testo, combinato con attributi e condizioni (ad es. l'attributo **Brand** o una condizione su **Color**), forma l'istruzione inviata all'AI per la generazione.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/MqPK3HDwXl7cBuruSGQhTcI2GMYLzXfHOQ.png)

Logica dei prompt e buone pratiche

-   **Variabili dinamiche**: il testo del prompt dovrebbe utilizzare attributi e condizioni (ad es. l'attributo **Vendor** all'interno di una condizione) per recuperare dati specifici del prodotto, evitando valori inseriti in modo fisso.

-   **Stile**: si assicuri che i requisiti di lingua e stile (ad es. tono, uso di elenchi puntati, formato HTML) corrispondano al Suo caso d'uso.

-   **Sicurezza dei contenuti**: il prompt deve essere ben formulato e rispettoso, per evitare un possibile rifiuto da parte del servizio AI (OpenAI).
