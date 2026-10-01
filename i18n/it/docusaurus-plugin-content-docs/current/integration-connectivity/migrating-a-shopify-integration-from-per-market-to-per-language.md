---
title: 2.3.4. Migrazione di un'integrazione Shopify da Per market a Per language
sidebar_position: 5.5
slug: /integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language
description: >-
  Come passare un'integrazione Shopify dalla modalità Markets Per market alla
  modalità Per language: aggiorni gli scope dell'app nello Shopify Dev Dashboard,
  quindi ricrei l'integrazione in Fozzels o contatti il supporto.
---

Il modo più pulito per passare da Per market a Per language consiste nell'aggiornare gli scope della Sua app Shopify e quindi creare una nuova integrazione Fozzels con la modalità Per language. Se dispone già di flussi, contatti il supporto Fozzels invece di effettuare il passaggio autonomamente.

## Prima di iniziare

Questa guida è destinata ai clienti la cui integrazione Shopify utilizza la modalità **Per market** e che non necessitano di contenuti specifici per mercato all'interno di una stessa lingua. Con **Per language**, sincronizza una traduzione per lingua e Shopify la applica a tutti i mercati in cui quella lingua è pubblicata. Ciò significa meno operazioni di sincronizzazione e costi inferiori.

Verifichi prima due aspetti.

**1. La Sua app dispone di tutti gli scope richiesti?** Per language richiede scope che le versioni precedenti dell'app potrebbero non avere, il più delle volte `read_publications`. Apra la Sua app nello Shopify Dev Dashboard, vada su **Versions**, apra la versione attiva e confronti i suoi **Scopes** con l'elenco del Passaggio 1. Se manca qualcosa, esegua il Passaggio 1. Se sono presenti tutti gli scope, passi direttamente al Passaggio 2.

**2. Dispone già di flussi in Fozzels?** Da questo dipende il modo in cui cambierà la modalità.

| La Sua situazione | Cosa fare |
| --- | --- |
| Nessun flusso ancora | Passaggio 1 se necessario, quindi Passaggio 2, Opzione A: archivi e ricrei l'integrazione |
| Flussi già creati | Passaggio 1 se necessario, quindi contatti il supporto Fozzels (Passaggio 2, Opzione B) |

Perché non cambiare semplicemente la modalità nell'integrazione esistente? Il cambio non rimuove i vecchi siti web e negozi basati sui mercati. Questi rimangono nella tabella come inattivi, contrassegnati con "Website is lost on integration", accanto ai nuovi basati sulle lingue. I flussi associati ai vecchi negozi smettono di essere eseguiti e la tabella diventa difficile da consultare.

![Dopo il cambio di modalità sul posto: i vecchi siti web contrassegnati come persi, accanto a quelli nuovi](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/01-old-websites-lost-after-mode-switch.png)

## Passaggio 1. Shopify: aggiunga gli scope mancanti

Non è necessaria una nuova app. Crea una nuova versione della Sua app esistente con gli scope aggiornati. Client ID e Secret rimangono invariati.

### 1.1. Crei una nuova versione

1. Acceda allo Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Apra **Apps** e selezioni la Sua app Fozzels.
3. Vada su **Versions** e clicchi su **Create version**. La nuova versione si basa sulla versione attualmente attiva, quindi tutte le impostazioni esistenti vengono copiate.

![Pagina Versions con Create version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/02-versions-create-version.png)

![Creazione di una versione basata sulla versione attiva](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/03-create-version-from-active.png)

### 1.2. Aggiorni gli scope

Scorra fino alla sezione **Access**. Nelle versioni precedenti dell'app, il campo **Scopes** spesso non contiene `read_publications`. Ecco un esempio di elenco incompleto:

![Prima: scope senza read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/04-scopes-before-without-read-publications.png)

Sostituisca il contenuto del campo **Scopes** con l'elenco completo:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

Se desidera sincronizzare anche i dati sul peso (l'opzione Inventory in Fozzels), aggiunga `read_inventory` e `write_inventory` alla fine dell'elenco.

![Dopo: elenco completo degli scope, incluso read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/05-scopes-after-full-list.png)

Lasci invariato tutto il resto: **Optional scopes** vuoto e **Use legacy install flow** deselezionato.

### 1.3. Pubblichi la versione

1. Clicchi su **Release** (angolo in alto a destra o in fondo alla pagina).
2. Facoltativamente, inserisca un nome per la versione, ad esempio `v2`, e clicchi su **Release** per confermare.

La nuova versione diventa **Active**.

![Pop-up Release this new version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/06-release-new-version-pop-up.png)

### 1.4. Approvi i nuovi permessi nel Suo negozio

La pubblicazione di una versione non concede ancora all'app i nuovi permessi. Il proprietario del negozio deve approvarli installando nuovamente l'app. Fino ad allora, Per language non funzionerà correttamente.

1. Apra la pagina **Overview** dell'app e clicchi su **Install app**, oppure apra il link di installazione da **Distribution** se utilizza la Custom distribution.
2. Se richiesto, acceda con l'account del proprietario del negozio.
3. Esamini l'elenco degli accessi e confermi l'installazione.

## Passaggio 2. Fozzels: passi a Per language

### Opzione A: nessun flusso ancora — archivi e ricrei

In questo modo ottiene una tabella Siti web e negozi pulita, con i soli nuovi siti web basati sulle lingue.

1. Prima di iniziare, copi gli attuali **Api Key**, **Api Secret** e **App Host Name** dal passaggio Configurazione dell'integrazione, oppure prenda Client ID e Secret da **App settings → Credentials** nello Shopify Dev Dashboard.
2. Apra l'integrazione attuale e disattivi l'interruttore **Attiva**.
3. Archivi l'integrazione.
4. Crei una nuova integrazione Shopify: **Integrazioni → Shopify**, metodo di connessione **Custom App**.
5. Inserisca gli stessi **URL**, **Api Key**, **Api Secret** e **App Host Name**.
6. In **Markets mode**, scelga **Per language**.
7. Configuri le impostazioni facoltative, se le utilizzava in precedenza (Inventory, Pianificazione globale del recupero, ritardi), e clicchi su **Salva**.
8. Attivi **Attiva** e clicchi su **Recupera siti web e negozi**.
9. Attivi **Stato** per ciascun sito web e il relativo negozio, quindi clicchi su **Recupera prodotti**.

![Nuova integrazione: credenziali e Markets mode impostata su Per language](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/07-new-integration-per-language.png)

Per la descrizione completa di ciascun campo, consulti [2.3.2. Collegamento dei negozi Shopify a Fozzels tramite lo Shopify Dev Dashboard](/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026).

### Opzione B: flussi già creati — contatti il supporto

Contatti il supporto Fozzels prima di cambiare la modalità. La aiuteremo a effettuare il passaggio mantenendo funzionanti i Suoi flussi e verificheremo i codici locale sul lato Shopify, che potrebbero cambiare durante il passaggio.

## Dopo la migrazione

In modalità Per language, ogni lingua pubblicata è un sito web separato con un solo negozio.

![Per language: un sito web con un negozio per ogni lingua](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/08-per-language-websites-and-stores.png)

- [ ] La versione attiva dell'app in Shopify include `read_publications` e tutti gli altri scope richiesti
- [ ] Il proprietario del negozio ha approvato i nuovi permessi (app installata di nuovo)
- [ ] L'integrazione utilizza **Per language**
- [ ] **Autorizzata** e **REST API connessa** sono verdi
- [ ] I siti web e i negozi sono attivi per le lingue necessarie
- [ ] Tutti e quattro i recuperi (Attributo prodotto, Attributo categoria, Categoria, Prodotto) sono stati completati al 100%
- [ ] I flussi sono stati ricreati sui nuovi negozi, oppure il supporto ha confermato il passaggio (Opzione B)
