---
id: '103000385597'
title: 2.3.2. Collegare i negozi Shopify a Fozzels tramite la Shopify Dev Dashboard
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  Dal 1° gennaio 2026 i negozi Shopify vengono collegati tramite la Shopify Dev
  Dashboard. Come creare e installare l'app in Shopify e collegarla in Fozzels,
  passo dopo passo.
---

Dal 1° gennaio 2026 Shopify non consente più di creare Private App nell'amministrazione del negozio. Le nuove connessioni e gli aggiornamenti delle integrazioni esistenti vengono configurati tramite la Shopify Dev Dashboard. Questa guida La accompagna su entrambi i lati: la creazione e l'installazione dell'app in Shopify (Parte 1) e il collegamento in Fozzels (Parte 2).

## Prima di iniziare: trovi il Suo dominio .myshopify.com

Fozzels ha bisogno dell'indirizzo .myshopify.com del Suo negozio, non del dominio pubblico del negozio (come www.yourbrand.com). Questo indirizzo è stato assegnato al momento della creazione del negozio e non può essere modificato, quindi potrebbe differire dal nome del Suo brand.

Può trovarlo in tre punti dell'amministrazione di Shopify:

1. **Barra laterale delle impostazioni:** apra **Settings**. Il Suo dominio .myshopify.com è visualizzato sotto il nome del negozio, nella parte superiore della barra laterale.
2. **Settings → Domains:** la pagina Domains elenca tutti i Suoi domini. Utilizzi quello che termina con .myshopify.com, anche se non è contrassegnato come **Primary**.
3. **Barra degli indirizzi del browser:** quando si trova nell'amministrazione, l'URL ha il formato `https://admin.shopify.com/store/your-store`. Prenda la parte dopo `/store/` e aggiunga `.myshopify.com`: `your-store.myshopify.com`.

![Settings → Domains: il dominio .myshopify.com nella barra laterale e nell'elenco](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/01-settings-domains-myshopify-domain.png)

Utilizzerà questo dominio in due formati:

| Dove | Formato |
| --- | --- |
| App URL (Shopify), URL (Fozzels) | `https://your-store.myshopify.com` |
| Store domain (distribuzione Shopify), App Host Name (Fozzels) | `your-store.myshopify.com` |

## Parte 1. Shopify: crei l'app

### 1. Crei l'app

1. Acceda alla Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Apra **Apps** nella barra laterale sinistra e clicchi su **Create app** nell'angolo in alto a destra. A seconda del tipo di account, l'interfaccia potrebbe apparire leggermente diversa. Se non vede il pulsante, scorra fino in fondo alla pagina e clicchi sul link **Create app**.
3. In **Start from Dev Dashboard** (l'opzione a destra), inserisca un nome per l'app, ad esempio `Fozzels_APP`, e clicchi su **Create app**. Questa opzione Le fornisce le credenziali API senza utilizzare la riga di comando.

![Dev Dashboard: Apps e Create app](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/02-dev-dashboard-apps-create-app.png)

![Create an app: Start from Dev Dashboard](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/03-start-from-dev-dashboard.png)

### 2. Configuri la versione

Dopo aver creato l'app, si troverà sulla pagina **Create version**. Shopify ha già creato una versione iniziale (ad esempio `fozzels_app-1`). Le Sue impostazioni verranno rilasciate come nuova versione basata su di essa.

1. **App name:** mantenga il nome o lo modifichi.
2. **App URL:** inserisca l'URL del Suo negozio con https, ad esempio `https://your-store.myshopify.com`.
3. **Embed app in Shopify admin:** deve essere abilitato. In questo modo l'interfaccia di Fozzels viene mostrata all'interno della Sua amministrazione Shopify.
4. **Webhooks API version:** selezioni l'ultima versione stabile proposta.

![Create version: App URL, Embed app in Shopify admin, Webhooks API version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/04-create-version-app-url-and-embed.png)

### 3. Aggiunga gli scope

Scorra fino alla sezione **Access**. Incolli l'elenco seguente nel campo **Scopes**, oppure clicchi su **Select scopes** e cerchi ciascuna autorizzazione con la barra di ricerca.

Scope richiesti, pronti da copiare e incollare:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

| Gruppo | Scope |
| --- | --- |
| Prodotti | `read_product_listings`, `read_products`, `write_products`, `read_product_feeds` |
| Metadati | `read_metaobject_definitions`, `read_metaobjects` |
| Traduzioni | `read_translations`, `write_translations`, `read_publications` |
| Impostazioni locali | `read_locales` |
| Mercati | `read_markets`, `write_markets` |

Questi scope sono necessari per tutti i tipi di negozio, compresi i negozi che utilizzano Shopify Markets e più lingue.

**Intende sincronizzare i dati sul peso?** Aggiunga ora anche `read_inventory` e `write_inventory`. Sono necessari solo per l'impostazione facoltativa Inventario in Fozzels (passaggio 10), ma aggiungerli ora Le evita di dover creare una nuova versione dell'app in seguito. Elenco completo, inventario incluso:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications,read_inventory,write_inventory
```

Lasci invariato il resto della sezione:

- **Optional scopes:** lasci vuoto.
- **Use legacy install flow:** lasci deselezionato.
- **Allowed redirection URL(s):** lasci vuoto.

La nota "Some scopes require Shopify permission" non riguarda gli scope di cui Fozzels ha bisogno, quindi non è necessario richiedere l'accesso.

![Access: tutti i 12 scope richiesti](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/05-access-required-scopes.png)

### 4. Rilasci la versione

1. Clicchi su **Release**. Il pulsante è disponibile sia nell'angolo in alto a destra sia in fondo alla pagina.
2. Nella finestra pop-up, inserisca facoltativamente un **Version name** (ad esempio `v1`) e un **Version message**. Se lascia vuoto il nome, Shopify ne genera uno.
3. Clicchi su **Release** per confermare.

La nuova versione compare nella pagina **Versions** con lo stato **Active**.

![Pop-up Release this new version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/06-release-new-version-pop-up.png)

![Versions: v1 Active](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/07-versions-v1-active.png)

### 5. Installi l'app nel Suo negozio

I passaggi di installazione dipendono dal tipo di account Shopify. Per iniziare, apra la pagina **Overview** della Sua app cliccando sul nome dell'app nella barra laterale sinistra.

![Overview dell'app: Installs e Distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/08-app-overview-installs-and-distribution.png)

#### Opzione A: un solo negozio (senza account Partner)

1. Nel blocco **Installs**, clicchi su **Install app**.
2. Se richiesto, acceda con l'**email del proprietario del negozio**. Solo il proprietario del negozio può approvare l'installazione.
3. Nella pagina **Install app** dell'amministrazione del negozio, esamini l'elenco degli accessi e clicchi su **Install**.

Non è necessario configurare la distribuzione. Prosegua con il passaggio 6.

#### Opzione B: un account Partner o più negozi

Per prima cosa configuri la **Custom distribution** per generare un link di installazione per un negozio specifico.

1. Nel blocco **Distribution**, clicchi su **Select distribution method**. In questo modo l'app si apre in **Shopify Partners**, un'interfaccia separata.
2. Selezioni **Custom distribution** e clicchi su **Select**.
3. Confermi con **Select custom distribution**.

> **Attenzione:** la scelta della Custom distribution non può essere annullata. L'app potrà quindi essere installata solo su un negozio o all'interno di una singola organizzazione Plus.

![Shopify Partners: metodi di distribuzione](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/09-partners-distribution-methods.png)

![Custom distribution selezionata](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/10-custom-distribution-selected.png)

![Conferma di Select custom distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/11-select-custom-distribution-confirmation.png)

4. In **Store domain**, inserisca il dominio del Suo negozio nel formato `your-store.myshopify.com`.
5. Lasci deselezionato **Allow multi-store install for one Plus organization**.
6. Clicchi su **Generate link** e confermi.

> **Attenzione:** anche questa conferma non può essere annullata. L'app sarà disponibile per l'installazione solo sul negozio inserito.

![Custom distribution: Store domain](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/12-custom-distribution-store-domain.png)

![Conferma di Generate link per l'installazione su un singolo negozio](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/13-generate-link-confirmation.png)

7. Shopify mostra l'**Install link**. Clicchi su **Copy**.
8. Apra il link in un browser in cui ha effettuato l'accesso all'amministrazione del negozio, oppure lo invii al proprietario del negozio. Ciò è utile per le agenzie: il proprietario del negozio può completare l'installazione autonomamente.
9. Nella pagina **Install app**, verifichi di vedere **This app is exclusive to your store**, esamini l'elenco degli accessi e clicchi su **Install**.

![Install link con Copy](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/14-install-link-copy.png)

![Pagina Install app nell'amministrazione del negozio](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/15-install-app-in-store-admin.png)

Il testo sotto "This app is exclusive to your store" dipende dal tipo di negozio e potrebbe differire dallo screenshot. L'elenco degli accessi dovrebbe includere **Products, custom data, other data**. Se vede solo Products, mancano alcuni scope: torni al passaggio 3.

Dopo l'installazione, l'app compare in **Apps** nella barra laterale dell'amministrazione del negozio.

### 6. Copi le credenziali API

1. Nella Dev Dashboard, apra **App settings** nella barra laterale sinistra della Sua app.
2. Nel blocco **Credentials**, copi il **Client ID**.
3. Clicchi sull'icona a forma di occhio accanto a **Secret** per visualizzarlo, quindi lo copi.

Li incollerà in Fozzels nel passaggio 8.

![App settings: Credentials](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/16-app-settings-credentials.png)

> **Attenzione:** non clicchi su **Rotate** se non è necessario. Questa azione genera un nuovo Secret e quello precedente smette immediatamente di funzionare, interrompendo la connessione con Fozzels finché non aggiorna il Secret in Fozzels.

Conservi le credenziali in modo sicuro, ad esempio in un password manager. Non le invii via email o chat: il Secret consente l'accesso ai prodotti e alle traduzioni del Suo negozio.

## Parte 2. Fozzels: colleghi il negozio

### 7. Crei l'integrazione

1. Acceda a Fozzels all'indirizzo [https://app.fozzels.com](https://app.fozzels.com) e apra **Integrazioni** nella barra laterale sinistra.
2. Nella schermata **Scelga la Sua integrazione**, selezioni **Shopify**.
3. Nel passaggio **Configurazione**, compili:
    - **Nome:** un nome qualsiasi che La aiuti a riconoscere l'integrazione.
    - **URL:** l'indirizzo .myshopify.com del Suo negozio con https, ad esempio `https://your-store.myshopify.com`. Non utilizzi il Suo dominio personalizzato.
4. In **Metodo di connessione**, scelga **Custom App**.

![Fozzels: scelta dell'integrazione](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/17-fozzels-choose-your-integration.png)

![Crea nuova integrazione: Configurazione e Custom App](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/18-fozzels-configuration-custom-app.png)

Gli altri metodi di connessione: **Fozzels Shopify App (OAuth)** effettua il collegamento tramite l'app ufficiale di Fozzels e non richiede la creazione di un'app propria (consulti [2.3.1. App Fozzels per Shopify — Primi passi](/integration-connectivity/fozzels-shopify-app-getting-started)). **Legacy (Manual)** è destinato alle connessioni configurate con il vecchio metodo.

### 8. Inserisca le credenziali API

| Campo di Fozzels | Cosa inserire |
| --- | --- |
| Api Key | Client ID del passaggio 6 |
| Api Secret | Secret del passaggio 6 |
| App Host Name | `your-store.myshopify.com`, senza https |

Non è necessario un token di accesso: Fozzels lo genera automaticamente.

### 9. Scelga la modalità Markets

La modalità Markets definisce come i contenuti vengono distribuiti tra i Suoi mercati e le Sue lingue Shopify. La scelga con attenzione: modificarla in seguito non è una semplice commutazione (consulti [Deve modificare la modalità Markets in seguito?](#need-to-change-the-markets-mode-later) alla fine di questa guida).

**Percorso 1: traduzioni.** Ha bisogno degli stessi contenuti per tutti i mercati che condividono una lingua, tradotti in ciascuna lingua pubblicata. Scelga **Per language**, oppure **No markets** per la configurazione più semplice con un unico sito.

**Percorso 2: contenuti unici per mercato e lingua.** Ha bisogno di contenuti diversi per ciascun mercato, anche all'interno della stessa lingua, ad esempio accenti di marketing diversi per regione. Scelga **Per market**.

| Modalità | Cosa diventa un sito web | Cosa viene sincronizzato |
| --- | --- | --- |
| No markets | Un unico sito web, con un negozio per ciascuna lingua pubblicata | Una traduzione per lingua, i mercati vengono ignorati |
| Per market | Ogni mercato Shopify, con un negozio per lingua | Ogni coppia mercato-lingua separatamente |
| Per language | Ogni lingua pubblicata | Una traduzione per lingua, che Shopify applica a tutti i mercati con quella lingua |

Utilizza LangShop? Funziona solo con **No markets** e **Per language**.

![Credenziali API e modalità Markets](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/19-fozzels-api-credentials-and-markets-mode.png)

### 10. Impostazioni facoltative

Se non è sicuro di aver bisogno di queste impostazioni, lasci i valori predefiniti.

**Inventario.** Abiliti questo interruttore per sincronizzare i dati sul peso della prima variante del prodotto. Fozzels importa due attributi aggiuntivi, **Weight** e **Weight Unit** (entrambi di tipo select), e può reinviarli a Shopify.

> **Attenzione:** Inventario richiede gli scope `read_inventory` e `write_inventory`. Se non li ha aggiunti nel passaggio 3, crei una nuova versione dell'app con questi scope, la rilasci e reinstalli l'app prima di abilitare Inventario. Se l'interruttore è attivo senza questi scope, Fozzels non è in grado di leggere alcun prodotto.

**Pianificazione globale delle importazioni.** Per impostazione predefinita, Fozzels importa i prodotti di tutti i negozi attivi dell'integrazione alle 02:30. Per impostare un orario diverso per l'intera integrazione, abiliti **Sovrascrivi la pianificazione globale delle importazioni** e scelga l'orario. Un negozio specifico può avere una propria pianificazione nelle impostazioni di quel negozio. Per saperne di più, consulti [3.1.2 Come configurare la pianificazione globale delle importazioni e il throttling delle API](/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling).

**Ritardo tra le pagine e Ritardo tra le richieste.** Utilizzi queste impostazioni solo se le importazioni non riescono a causa dei limiti di frequenza dell'API di Shopify. Le lasci vuote per utilizzare i valori predefiniti della piattaforma.

| Campo | Funzione | Intervallo | Valore predefinito Shopify |
| --- | --- | --- | --- |
| Ritardo tra le pagine | Pausa dopo ogni pagina di risultati | 100–15000 ms | 2000 ms |
| Ritardo tra le richieste | Pausa tra le singole richieste API | 100–15000 ms | nessuno |

Valori inferiori a quelli predefiniti possono attivare il rate limiting e far fallire le importazioni.

![Opzioni: Inventario, pianificazione globale delle importazioni, ritardi e Salva](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/20-fozzels-optional-settings.png)

### 11. Salvi

Clicchi su **Salva** in fondo alla pagina.

### 12. Attivi l'integrazione e importi siti web e negozi

Dopo aver cliccato su **Salva**, Fozzels mostra "Integration was created successfully" e apre il passaggio **Siti web e negozi**. Il pannello di stato in alto a destra mostra **Attivo** disattivato, **Autorizzata** in rosso e **REST API connessa** con un avviso. In questa fase è normale.

1. Attivi l'interruttore **Attivo** nell'angolo in alto a destra. Fozzels esegue l'autorizzazione con Shopify e genera il token di accesso.
2. Clicchi su **Recupera siti web e negozi**.

**Autorizzata** e **REST API connessa** dovrebbero ora diventare verdi.

![Dopo il salvataggio: pannello di stato e Recupera siti web e negozi](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/21-fozzels-status-after-save.png)

Se **Autorizzata** rimane rossa, verifichi che l'app sia installata nel Suo negozio (passaggio 5), che Api Key e Api Secret corrispondano al Client ID e al Secret e che App Host Name sia il Suo hostname .myshopify.com senza https.

### 13. Attivi siti web e negozi

La tabella ora mostra i Suoi siti web e i relativi negozi. La struttura dipende dalla modalità Markets scelta nel passaggio 9. In modalità **Per language**, ogni lingua pubblicata è un sito web separato con un negozio.

Una stella accanto a un sito web indica il sito web predefinito. Una stella accanto a un negozio indica il negozio predefinito di quel sito web.

Per ciascun sito web con cui desidera lavorare, attivi **entrambi** gli interruttori: **Stato** nella sezione Siti web e **Stato** nella sezione Negozi. **Recupera prodotti** diventa disponibile solo quando entrambi sono attivi.

![Tabella Siti web e negozi dopo l'importazione](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/22-fozzels-websites-and-stores-table.png)

### 14. Importi i prodotti

1. Clicchi su **Recupera prodotti** nella riga di un negozio attivo. Fozzels avvia contemporaneamente quattro importazioni: **Product Attribute**, **Category Attribute**, **Category** e **Product**.
2. Per seguirle singolarmente, clicchi sulla freccia accanto alla barra di avanzamento.
3. Quando tutte e quattro le barre di avanzamento sono verdi al 100%, l'importazione è completata. La colonna **Prodotti** mostra il numero di prodotti importati.

![Avanzamento dell'importazione: quattro importazioni al 100%](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/23-fozzels-pull-progress.png)

**La Sua connessione Shopify è pronta.** Ora può iniziare a creare flussi e generare i Suoi primi contenuti.

Dopo la prima importazione, nel passaggio Siti web e negozi diventano disponibili le **Condizioni di importazione dei prodotti**. Consentono di filtrare quali prodotti vengono importati. Questo argomento è trattato in un articolo separato.

## Deve modificare la modalità Markets in seguito? {#need-to-change-the-markets-mode-later}

Cambiare la modalità Markets, in entrambe le direzioni, non rimuove i vecchi siti web e negozi. Questi rimangono nella tabella Siti web e negozi come inattivi, contrassegnati con "Website is lost on integration", accanto a quelli nuovi, che vengono creati e attivati automaticamente. I flussi associati ai vecchi negozi smettono di essere eseguiti.

![Dopo il passaggio da Per language a Per market: vecchi siti web inattivi accanto a quelli nuovi](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/24-old-websites-lost-after-mode-switch.png)

- **Nessun flusso ancora creato:** ricominci da capo per avere una tabella pulita. Disattivi l'integrazione attuale, la archivi e crei una nuova integrazione con le stesse Api Key, Api Secret e App Host Name, scegliendo la modalità Markets corretta. Non è necessaria una nuova app in Shopify.
- **Flussi già creati:** contatti il supporto Fozzels prima di modificare la modalità. La aiuteremo a effettuare il passaggio senza perdere il Suo lavoro.

Poiché il codice delle impostazioni locali sul lato Shopify potrebbe cambiare, Le consigliamo in ogni caso di modificare la modalità tramite il supporto Fozzels.

Deve passare specificamente da Per market a Per language? Consulti [2.3.4. Migrazione di un'integrazione Shopify da Per market a Per language](/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language).
