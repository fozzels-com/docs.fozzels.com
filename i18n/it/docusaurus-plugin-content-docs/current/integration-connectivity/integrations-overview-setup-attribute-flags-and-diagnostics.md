---
title: Integrazioni — Panoramica, configurazione, flag degli attributi e diagnostica
sidebar_position: 22
slug: >-
  /integration-connectivity/integrations-overview-setup-attribute-flags-and-diagnostics
description: >-
  Un'integrazione è una connessione sicura tra Fozzels e il Suo negozio
  e-commerce o PIM. Questa guida tratta le piattaforme supportate, i passaggi di
  configurazione, i flag degli attributi, le pianificazioni del recupero, le note
  specifiche per piattaforma e il riferimento completo alla diagnostica di
  WooCommerce.
---

Un'integrazione è una connessione sicura tra Fozzels e il Suo negozio e-commerce o sistema PIM. Una volta effettuato il collegamento, Fozzels può recuperare i dati dei Suoi prodotti e inviare al Suo negozio i contenuti generati dall'IA.

## Piattaforme supportate

- **Shopify** — supporto completo, incluso Shopify Markets (multilingue)
- **Magento 2** — incluse configurazioni multi-sito web e multi-negozio
- **WooCommerce** — tramite REST API
- **Shopware 6**
- **Lightspeed**
- **Akeneo** — sistema PIM
- **Katana PIM**
- **BizzLayer**
- **EK Retail**
- **NextChapter**
- **StoreInfo Catalog XML**

## Gerarchia dell'integrazione

Integrazione → Sito/i web → Negozio/i → Prodotti e attributi

Ogni integrazione può contenere più siti web e ogni sito web può contenere più negozi (ad es. lingue o regioni diverse).

---

## Configurazione di un'integrazione

### Passaggio 1 — Crei l'integrazione

- Vada su [Integrazioni](https://app.fozzels.com/integrations/definitions)
- Clicchi su **Aggiungi integrazione** e selezioni la Sua piattaforma
- Inserisca un nome, l'URL del Suo negozio e le credenziali della piattaforma
- Salvi: Fozzels convaliderà la connessione

### Passaggio 2 — Sincronizzi siti web e negozi

- Dopo il salvataggio, clicchi su **Sincronizza** per recuperare dalla Sua piattaforma l'elenco dei siti web e dei negozi
- Attivi i siti web e i negozi con cui desidera lavorare
- Nota: l'attivazione dei negozi viene conteggiata nella quota del Suo piano

### Passaggio 3 — Recuperi i prodotti

- Una volta attivi i negozi, avvii un **Recupero prodotti**
- Fozzels importa tutti i prodotti con i relativi attributi e immagini
- Può monitorare l'avanzamento del recupero in tempo reale (mostra elementi elaborati / totale)

### Passaggio 4 — Configuri gli attributi

- Vada alla scheda **Attributi** della Sua integrazione
- Abiliti gli attributi che desidera utilizzare
- Imposti il flag **Filtrabile** sugli attributi in base ai quali desidera filtrare i prodotti o che vuole usare come input nei flussi
- Imposti il flag **Modificabile** sugli attributi in cui verranno scritti i contenuti generati dall'IA

---

## Spiegazione dei flag degli attributi

| Flag | Funzione |
|------|-------------|
| **Filtrabile** | L'attributo compare nel filtro del Catalogo e può essere utilizzato come input nei prompt dei flussi (inserito come attributo nell'editor dei prompt) |
| **Modificabile** | Fozzels può scrivere contenuti generati dall'IA in questo attributo (necessario per l'output dei flussi) |
| **Abilitato** | L'attributo è attivo e visibile in Fozzels |
| **HTML-able** | Consente contenuti HTML in questo attributo (solo per i tipi text/textarea) |

> Se non riesce a selezionare un attributo come destinazione di un flusso, verifichi che abbia il flag **Modificabile** abilitato.
>
> Se un attributo non compare nel filtro del Catalogo o nel prompt del flusso, verifichi che abbia il flag **Filtrabile** abilitato.

---

## Pianificazione del recupero

Fozzels può recuperare automaticamente i prodotti ed eseguire i flussi secondo una pianificazione:

1. Recupero prodotti — recupera i dati più recenti dei prodotti dal Suo negozio
2. Sincronizzazione flussi — abbina i prodotti ai flussi attivi
3. Aggiornamento attributi — aggiorna i valori degli attributi
4. Generazione IA — genera i contenuti
5. Esportazione dati — invia i contenuti al Suo negozio

Può impostare un orario di recupero personalizzato (formato: `HH:MM`, ad es. `14:00`) per integrazione o per negozio. Se non impostato, viene utilizzato il valore predefinito di sistema (00:30 UTC).

Per modificare il Suo fuso orario, vada su [Impostazioni → Profilo](https://app.fozzels.com/user/settings/profile).

---

## Stato dell'integrazione

| Stato | Significato |
|--------|---------|
| **Attiva** | L'integrazione è abilitata ed elaborerà i dati |
| **Autorizzata** | Le credenziali sono valide (solo Shopify) |
| **REST API connessa** | Il test di connessione in tempo reale è stato superato |

> L'integrazione deve essere **Attiva** perché qualsiasi recupero o invio funzioni.

---

## Configurazione specifica per piattaforma

### Shopify

1. In Shopify Admin vada su: Impostazioni → App → Sviluppa app → Crea un'app
2. Scope API richiesti: `read_product_listings`, `read_products`, `write_products`, `read_metaobject_definitions`, `read_metaobjects`, `read_product_feeds`
3. Per Shopify Markets (multilingue) aggiunga anche: `write_translations`, `read_translations`, `write_markets`, `read_markets`, `read_locales`
4. In Fozzels inserisca: API key, API Secret e il Suo URL `.myshopify.com`
5. Lo stato dell'integrazione deve mostrare **Autorizzata: sì** E **REST API connessa: sì**

### Magento 2

1. In Magento Admin vada su: Sistema → Integrazioni → Aggiungi integrazione
2. Copi: Consumer Key, Consumer Secret, Access Token, Access Token Secret
3. Inserisca anche l'`admin_front_name` (di solito `admin`)
4. **Importante:** aggiunga manualmente l'attributo `fozzels_completion_date` a TUTTI i set di attributi in Magento Admin (Catalogo → Attributi → Set di attributi). Fozzels non può farlo automaticamente perché Magento supporta più set di attributi per negozio.
5. Dopo il salvataggio: attivi l'integrazione → sincronizzi siti web/negozi → recuperi i prodotti

### WooCommerce

- Generi una chiave REST API in WooCommerce → Impostazioni → Avanzate → REST API
- Permessi richiesti: Lettura/Scrittura
- Inserisca Consumer Key e Consumer Secret in Fozzels

#### Integrazioni opzionali con plugin per WooCommerce

Le integrazioni WooCommerce supportano quattro flag opzionali per i plugin. Ciascuno richiede l'installazione di plugin WordPress aggiuntivi.

**ACF (Advanced Custom Fields)**

- Si abilita con: l'interruttore "Enable ACF (Advanced Custom Fields)" nelle impostazioni dell'integrazione in Fozzels
- Plugin WordPress richiesti: "Advanced Custom Fields" E "ACF to REST API"
- Funzione: importa in Fozzels i campi prodotto personalizzati definiti in ACF come attributi (con prefisso `acf_`)
- Riscrittura: i valori ACF vengono scritti tramite l'endpoint `meta_data` di WooCommerce

**Yoast SEO**

- Si abilita con: l'interruttore "Yoast WooCommerce SEO" nelle impostazioni dell'integrazione in Fozzels
- Plugin WordPress richiesti: "Yoast SEO" E "Fozzels SEO Fields REST API for WooCommerce" (plugin bridge, da scaricare da app.fozzels.com)
- Funzione: importa SEO title, meta description e focus keyword di Yoast come attributi (con prefisso `yoast_`)
- Riscrittura: i valori vengono scritti tramite la chiave `seo_fields` nella REST API di WooCommerce

**All in One SEO (AIOSEO)**

- Si abilita con: l'interruttore "All in One SEO" nelle impostazioni dell'integrazione in Fozzels
- Plugin WordPress richiesti: "All in One SEO" E "AIOSEO API Sync" (plugin bridge, da scaricare da app.fozzels.com)
- Funzione: importa SEO title, descrizione, parole chiave, campi Open Graph, campi Twitter e focus keyphrase come attributi (con prefisso `aioseo_`)
- Riscrittura: i valori vengono scritti tramite la chiave `aioseo` nella REST API di WooCommerce

**WPML (multilingue)**

- Si abilita con: l'interruttore "Enable WPML Multilingual Support" nelle impostazioni dell'integrazione in Fozzels
- Plugin WordPress richiesto: WPML
- Funzione: crea un negozio Fozzels separato per ogni lingua; i prodotti vengono recuperati per lingua utilizzando l'URL con prefisso di lingua (ad es. `/de/wp-json/wc/v3/products`)
- Dopo l'abilitazione: vada su Integrazione → Sincronizza per creare i negozi per lingua

---

#### Diagnostica della connessione e dei plugin WooCommerce

Quando testa la connessione o esegue un recupero prodotti, Fozzels verifica ogni plugin abilitato. Ecco tutti i possibili errori e come risolverli:

**Errori di connessione**

| Errore | Significato | Soluzione |
|-------|---------|-----|
| WordPress non è stato trovato all'URL fornito | L'URL non punta a un sito WordPress | Verifichi che l'URL sia corretto e accessibile pubblicamente |
| La REST API di WooCommerce non è disponibile | WooCommerce non è installato o la REST API è disattivata | Installi WooCommerce e abiliti la REST API in WooCommerce → Impostazioni → Avanzate |
| Impossibile connettersi al negozio | Problema di rete/DNS | Verifichi che l'URL sia raggiungibile da Internet |
| Timeout della connessione | Il negozio non è raggiungibile o è bloccato da un firewall | Controlli il firewall del server e si assicuri che l'URL sia accessibile pubblicamente; consulti [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](./connection-requirements.md) |
| Credenziali API non valide | Consumer Key o Consumer Secret errati | Generi una nuova chiave API in WooCommerce → Impostazioni → Avanzate → REST API |

**Errori ACF**

| Errore | Significato | Soluzione |
|-------|---------|-----|
| Sono necessari entrambi i plugin "Advanced Custom Fields" e "ACF to REST API" | Uno o entrambi i plugin mancano | Installi e attivi entrambi i plugin nell'amministrazione di WordPress |
| "ACF to REST API" è attivo ma "Advanced Custom Fields" non è installato | Il bridge ACF è installato ma manca il plugin ACF principale | Installi e attivi il plugin "Advanced Custom Fields" |
| Impossibile verificare lo stato del plugin ACF | Non è stato possibile raggiungere l'endpoint di verifica del plugin | Controlli la connettività di WordPress e riprovi |

**Errori Yoast SEO**

| Errore | Significato | Soluzione |
|-------|---------|-----|
| Sono necessari entrambi i plugin "Yoast SEO" e "Yoast SEO WooCommerce REST API by Fozzels" | Uno o entrambi i plugin mancano | Installi e attivi entrambi i plugin nell'amministrazione di WordPress |
| "Yoast SEO" è attivo ma il plugin "Fozzels SEO Fields REST API for WooCommerce" non è installato | Manca il plugin bridge | Scarichi il plugin bridge da app.fozzels.com e lo attivi |
| Il Suo plugin "Fozzels SEO Fields REST API for WooCommerce" non è aggiornato | Versione obsoleta del plugin bridge | Scarichi e installi la versione più recente da app.fozzels.com |
| Il plugin "Fozzels SEO Fields REST API for WooCommerce" non è installato o non è attivo | Plugin bridge non trovato | Lo scarichi da app.fozzels.com e lo attivi nell'amministrazione di WordPress |
| Impossibile verificare lo stato del plugin Yoast SEO | Non è stato possibile raggiungere l'endpoint di verifica del plugin | Controlli la connettività di WordPress e riprovi |

**Errori AIOSEO**

| Errore | Significato | Soluzione |
|-------|---------|-----|
| Sono necessari entrambi i plugin "All in One SEO" e "AIOSEO API Sync" | Uno o entrambi i plugin mancano | Installi e attivi entrambi i plugin nell'amministrazione di WordPress |
| "All in One SEO" è attivo ma il plugin "AIOSEO API Sync" non è installato | Manca il plugin bridge | Scarichi il plugin AIOSEO API Sync da app.fozzels.com e lo attivi |
| Il Suo plugin "AIOSEO API Sync" non è aggiornato | Versione obsoleta del plugin bridge | Scarichi e installi la versione più recente da app.fozzels.com |
| Il plugin "AIOSEO API Sync" non è installato o non è attivo | Plugin bridge non trovato | Lo scarichi da app.fozzels.com e lo attivi nell'amministrazione di WordPress |
| Impossibile verificare lo stato del plugin All in One SEO | Non è stato possibile raggiungere l'endpoint di verifica del plugin | Controlli la connettività di WordPress e riprovi |

**Errori WPML**

| Errore | Significato | Soluzione |
|-------|---------|-----|
| Il plugin WPML non è attivo o non è installato | WPML non trovato in WordPress | Installi e attivi il plugin WPML nell'amministrazione di WordPress |
| WPML è attivo ma non sono configurate lingue | WPML è installato ma non sono state aggiunte lingue | Vada su WPML → Lingue e aggiunga almeno una lingua aggiuntiva |

**Errori di conflitto**

| Errore | Significato | Soluzione |
|-------|---------|-----|
| Yoast SEO e All in One SEO sono attivi contemporaneamente | Conflitto tra plugin | L'uso simultaneo di entrambi può causare conflitti: ne disattivi uno nell'amministrazione di WordPress |

**Generale**

| Errore | Significato | Soluzione |
|-------|---------|-----|
| Si è verificato un errore imprevisto durante la connessione | Errore sconosciuto | Riprovi; se il problema persiste, contatti il supporto Fozzels |

---

## Problemi comuni

**L'integrazione non recupera i prodotti**

- Verifichi che l'interruttore **Attiva** sia su ON
- Verifichi che i siti web e i negozi siano attivati
- Avvii un recupero manuale dalla pagina dell'integrazione

**Gli attributi non compaiono nel filtro del Catalogo o nei prompt dei flussi**

- L'attributo necessita del flag **Filtrabile**: vada su Integrazione → Attributi e lo abiliti

**Impossibile impostare un attributo come destinazione dell'output di un flusso**

- L'attributo necessita del flag **Modificabile**: vada su Integrazione → Attributi e lo abiliti

**Problemi di connessione con Shopify**

- Sia **Autorizzata** sia **REST API connessa** devono essere verdi
- Verifichi che tutti gli scope API richiesti siano abilitati nella Sua custom app Shopify

**Magento — `fozzels_completion_date` mancante**

- Deve essere aggiunto manualmente a ogni set di attributi in Magento Admin
- Vada su: Catalogo → Attributi → Set di attributi → apra ciascun set → aggiunga l'attributo

**Quota di negozi superata**

- Ha raggiunto il numero massimo di negozi attivi previsto dal Suo piano
- Disattivi i negozi non utilizzati o passi a un piano superiore in [Piani](https://app.fozzels.com/user/settings/plans)

**Prodotti contrassegnati come "persi"**

- Prodotti o negozi sono stati rimossi dalla piattaforma di origine
- Gli elementi persi vengono conservati in Fozzels come riferimento, ma non vengono sincronizzati

---

## Gestione delle integrazioni

- **Archivia** — disattiva l'integrazione e la nasconde dall'elenco principale; i dati vengono conservati e possono essere ripristinati
- **Avanzamento del recupero** — barra di avanzamento in tempo reale che mostra gli elementi elaborati; può essere messo in pausa o interrotto
- **Aggiornamento massivo degli attributi** — selezioni più attributi e modifichi i flag in un'unica operazione
- **Rilevamento automatico dei vuoti** — individua automaticamente gli attributi privi di valori in tutti i prodotti
