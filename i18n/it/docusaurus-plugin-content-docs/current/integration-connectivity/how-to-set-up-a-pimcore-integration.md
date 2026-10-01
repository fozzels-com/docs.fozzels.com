---
title: 2.11.1. Come configurare un'integrazione con Pimcore
sidebar_position: 23
slug: /integration-connectivity/how-to-set-up-a-pimcore-integration
description: >-
  Colleghi il Suo catalogo prodotti Pimcore a Fozzels tramite il modulo DataHub:
  prepari l'endpoint e la API key in Pimcore, compili il modulo di
  configurazione e importi i Suoi prodotti.
---

Questa guida La aiuta a collegare passo dopo passo il Suo catalogo prodotti Pimcore a Fozzels.

## Prima di iniziare: preparazione in Pimcore

Fozzels si collega a Pimcore tramite il modulo **Datahub**, uno strumento integrato di Pimcore che rende accessibili i Suoi dati tramite un'API.

Nella Sua istanza Pimcore deve essere configurato un **endpoint Datahub** (l'amministratore di Pimcore potrebbe averlo già impostato). In caso contrario, si rivolga a lui o al nostro team di supporto. Le serviranno:

- **Nome dell'endpoint:** si trova in Pimcore, sotto **Datahub**, nel campo **Name**.
- **API key:** visualizzata accanto all'endpoint, nella scheda **Security Definition**, nel campo **Datahub API Keys**.

![Pimcore → Datahub → il Suo endpoint → scheda General. Il campo Name qui è il nome del Suo endpoint](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/01-datahub-endpoint-general-tab.png)

![La scheda Security Definition contiene la Sua API key e le regole di accesso ai Workspace](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/02-datahub-security-definition-tab.png)

> **Importante:** nelle impostazioni dell'endpoint (scheda **Security Definition → Workspaces**), deve essere concesso l'accesso in lettura (**Read**) agli oggetti pertinenti, soprattutto alla cartella che contiene i Suoi prodotti (ad esempio `/products`). Se i Suoi prodotti sono distribuiti in più cartelle annidate, si assicuri che l'accesso sia concesso a tutte.

## 1. Crei l'integrazione

1. Vada su **Home → Integrazioni**.
2. Clicchi su **Crea**.
3. Selezioni la piattaforma **Pimcore**.

![Scelga Pimcore dall'elenco delle piattaforme di integrazione](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/03-choose-pimcore-platform.png)

## 2. Compili il modulo di configurazione

![Nome, URL, endpoint DataHub, API key e i campi facoltativi Classe prodotto/Classe categoria](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/04-configuration-form.png)

| Campo | Cosa inserire |
| --- | --- |
| **Nome** | Nome dell'integrazione, come Suo riferimento |
| **URL** | Indirizzo di base della Sua istanza Pimcore (ad esempio `https://your-company.pimcore.com`) |
| **Endpoint DataHub** | Il nome dell'endpoint in Pimcore (ad esempio `fozzels`) |
| **API key** | La chiave di accesso di Pimcore (dalla scheda Security Definition) |
| **Classe prodotto** | Lasci vuoto se i Suoi prodotti sono memorizzati in una classe denominata `Product`. Compili solo se la classe ha un nome diverso |
| **Classe categoria** | Come sopra: lasci vuoto se le categorie sono memorizzate in una classe denominata `Category` |
| **Cartella asset** | Facoltativo. Necessario solo se Fozzels genererà per Lei nuove immagini di prodotto e queste devono essere salvate da qualche parte in Pimcore (ad esempio `/products`) |

![Il campo Lingue e l'interruttore Includi oggetti non pubblicati](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/05-languages-and-include-unpublished.png)

| Campo | Cosa inserire |
| --- | --- |
| **Lingue** | Elenco di codici lingua separati da virgole (ad esempio `nl,en`). Ogni lingua diventa un **negozio** separato in Fozzels |
| **Includi oggetti non pubblicati** | Disattivato per impostazione predefinita. Lo attivi se desidera che la sincronizzazione recuperi anche prodotti e categorie non pubblicati (bozze). Verranno elaborati come quelli normali |

### Pianificazione della sincronizzazione (Pianificazione globale del recupero)

Può lasciare la pianificazione predefinita oppure abilitare **Sovrascrivi pianificazione globale del recupero** e impostare un orario personalizzato.

> **L'orario è in UTC:** l'orario è impostato in **UTC**, non nel Suo fuso orario locale. Se desidera che la sincronizzazione venga eseguita di notte secondo il Suo orario, converta l'orario notturno locale in UTC prima di inserirlo qui.

### Ritardo tra le richieste

Le consigliamo di **non compilare subito questi campi**. Esegua prima alcune sincronizzazioni con le impostazioni predefinite. Se tutto funziona correttamente, non è necessaria alcuna ulteriore configurazione. Se compaiono errori, torni qui e aggiunga un piccolo ritardo.

Clicchi su **Salva**.

## 3. Attivi e importi i prodotti

1. Attivi l'interruttore **Attiva** (in alto a destra).
2. Clicchi su **RECUPERA SITI WEB E NEGOZI**. Fozzels importa le Sue lingue come negozi separati.
3. Attivi gli interruttori del sito web e dei negozi pertinenti.
4. Clicchi su **Recupera prodotti** per importare prodotti, categorie e i relativi attributi.

## Se il numero di prodotti è inferiore al previsto

Se in Fozzels sono stati importati meno prodotti di quelli presenti in Pimcore, il motivo più comune è la presenza di prodotti non pubblicati (con stato **non pubblicato/bozza**) in Pimcore. Attivi l'interruttore **Includi oggetti non pubblicati** nelle impostazioni dell'integrazione (Configurazione) ed esegua nuovamente la sincronizzazione.

> **Suggerimento:** una volta abilitata l'opzione, i prodotti avranno un nuovo attributo **Published** (Sì/No). Può utilizzarlo per filtrare i prodotti nel catalogo o per limitare un flusso specifico, ad esempio se desidera elaborare solo i prodotti pubblicati.

![Filtro dei prodotti in base all'attributo Published in Gestisci prodotti](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/06-manage-products-published-filter.png)

Altre possibili cause sono l'accesso limitato ad alcune cartelle di prodotti oppure prodotti suddivisi tra più classi in Pimcore. In questi casi, è consigliabile contattare noi o il Suo amministratore Pimcore per verificare le impostazioni di accesso.

Per esporre altri attributi, come il flag di pubblicazione o la Sua galleria di immagini, consulti [2.11.2. Pimcore: esposizione degli attributi tramite DataHub](/integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery).

Ecco fatto: il Suo catalogo Pimcore è ora collegato. Può aggiornare i dati in qualsiasi momento cliccando di nuovo su **Recupera prodotti**.
