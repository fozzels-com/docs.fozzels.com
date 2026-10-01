---
id: '103000395334'
title: 2.5.8. Diagnosi della Sua connessione WooCommerce in Fozzels
sidebar_position: 15
slug: /integration-connectivity/diagnosing-your-woocommerce-connection-in-fozzels
description: >-
  Se vede un banner "Rilevati problemi di connessione" dopo aver salvato la Sua
  integrazione WooCommerce, questo articolo La aiuterà a capire cosa significa
  ciascun messaggio e
---

#

Se vede un banner **"Rilevati problemi di connessione"** dopo aver salvato la Sua integrazione WooCommerce, questo articolo La aiuterà a capire cosa significa ciascun messaggio e come risolvere il problema.

##
Come funziona la diagnosi

Ogni volta che salva la Sua integrazione, Fozzels verifica automaticamente la connessione al Suo negozio WooCommerce e lo stato degli eventuali plugin abilitati. Se qualcosa manca o non è configurato correttamente, vedrà una notifica con una descrizione del problema e i passaggi per risolverlo.

Esistono tre tipi di notifiche:

-   **Errore** — qualcosa sta bloccando la connessione. L'integrazione non funzionerà finché il problema non sarà risolto.
-   **Avviso** — l'integrazione può funzionare, ma qualcosa potrebbe causare problemi o limitarne le funzionalità.
-   **Nota** — messaggio informativo; nessun intervento è strettamente necessario, ma è consigliato.

##
Messaggi della connessione di base

Questi messaggi compaiono indipendentemente dai plugin abilitati.

-   **"Autenticazione non riuscita. Verifichi la Customer Key e il Customer Secret."**
    Le Sue credenziali API non sono corrette oppure sono state rigenerate dopo essere state copiate. Vada su **WooCommerce → Impostazioni → Avanzate → REST API**, rigeneri le chiavi e le incolli in Fozzels.

-   **"Accesso negato. La Sua chiave API richiede autorizzazioni di lettura/scrittura."**
    La chiave API è stata creata con accesso in sola lettura. Fozzels necessita dell'accesso in scrittura per inviare i contenuti generati al Suo negozio. Rigeneri la chiave e selezioni **Lettura/Scrittura** nel menu a tendina delle autorizzazioni.

-   **"REST API non trovata. Verifichi l'URL del negozio."**
    Non è stato possibile raggiungere la REST API di WooCommerce all'URL fornito. Si assicuri di aver inserito l'URL corretto del negozio (ad es. `https://yourstore.com`) e che la REST API di WooCommerce sia abilitata.

-   **"Impossibile raggiungere il Suo negozio. Verifichi l'URL, lo stato del server o le impostazioni del firewall."**
    Fozzels non è riuscito a stabilire una connessione. Il Suo negozio potrebbe essere offline, l'URL potrebbe essere errato oppure un firewall o un plugin di sicurezza potrebbe bloccare le richieste API esterne. Consulti [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](./connection-requirements.md) per gli indirizzi IP e lo User-Agent da consentire.

-   **"Errore del certificato SSL. Si assicuri che il Suo negozio utilizzi un certificato HTTPS valido."**
    Il certificato SSL del Suo negozio non è valido o è scaduto. Contatti il Suo provider di hosting per rinnovare o sostituire il certificato.

##
ACF (Advanced Custom Fields)

Questi messaggi compaiono quando l'interruttore **Abilita ACF** è attivato in Fozzels.

-   **"Sono necessari entrambi i plugin 'Advanced Custom Fields' e 'ACF to REST API'. Si assicuri che siano entrambi installati e attivi."**
    Nessuno dei due plugin è stato rilevato sul Suo sito WordPress. Installi e attivi sia **Advanced Custom Fields** sia **ACF to REST API** nel pannello di amministrazione di WordPress in **Plugin → Aggiungi nuovo**.

-   **"'Advanced Custom Fields' è attivo, ma il plugin 'ACF to REST API' non è installato."**
    ACF è installato, ma manca il plugin di collegamento. Installi e attivi il plugin **ACF to REST API** per consentire a Fozzels di leggere i Suoi campi personalizzati.

-   **"Il plugin 'ACF to REST API' è attivo, ma 'Advanced Custom Fields' non è attivo."**
    Il plugin di collegamento è installato, ma ACF stesso non è attivo. Vada su **Plugin** nell'amministrazione di WordPress e attivi **Advanced Custom Fields**.

-   **"La struttura dei permalink non è compatibile con la REST API."**
    La struttura dei permalink di WordPress è impostata su **Semplice**, il che impedisce l'accesso alla REST API. Vada su **WordPress → Impostazioni → Permalink** e selezioni una struttura qualsiasi diversa da Semplice (ad es. **Nome articolo**). Salvi le modifiche.

-   **"I campi ACF non sono visibili tramite la REST API."**
    Il Suo ACF Field Group non è esposto alla REST API. Vada su **ACF → Field Groups**, apra il gruppo interessato, passi a **Group Settings** e abiliti sia **Active** sia **Show in REST API**.

-   **"Versione della ACF REST API non corrispondente. È richiesta la versione v3."**
    Se utilizza il plugin **ACF to REST API**, deve essere impostato su v3. Vada su **WordPress → Impostazioni → Permalink → ACF to REST API** e imposti la **Request Version** su **v3**.

##
WPML (multilingua)

Questi messaggi compaiono quando l'interruttore **Abilita WPML** è attivato in Fozzels.

-   **"Il plugin WPML non è stato rilevato sul Suo sito WordPress."**
    Il plugin WPML non è installato o non è attivo. Installi e attivi **WPML Multilingual CMS** sul Suo sito WordPress, quindi configuri almeno una lingua aggiuntiva in **WPML → Lingue**.

-   **"WPML è attivo, ma non è configurata alcuna lingua."**
    WPML è installato, ma non sono state impostate lingue aggiuntive. Vada su **WPML → Lingue** e aggiunga almeno una lingua al Suo negozio.

-   **Dopo aver abilitato WPML, esegua nuovamente Recupera negozi/siti web e Recupera prodotti.**
    Ciò è necessario affinché Fozzels possa rilevare tutte le impostazioni locali delle lingue e caricare le versioni corrette dei prodotti per ciascuna lingua. Senza eseguire nuovamente l'importazione, le nuove impostazioni locali non compariranno nel sistema.

* * *

## Yoast SEO

Questi messaggi compaiono quando l'interruttore **Yoast WooCommerce SEO** è attivato in Fozzels. L'integrazione con Yoast SEO richiede due plugin attivi sul Suo sito WordPress: **Yoast SEO** e il plugin di collegamento **Yoast SEO WooCommerce REST API by Fozzels**.

> Può scaricare il plugin di collegamento di Fozzels da **app.fozzels.com** oppure dalla guida alla configurazione nella Knowledge Base.

* * *

-   **"Sono necessari entrambi i plugin 'Yoast SEO' e 'Yoast SEO WooCommerce REST API by Fozzels'."**
    Nessuno dei due plugin è stato rilevato. Li installi e li attivi entrambi nel pannello di amministrazione di WordPress.

-   **"Il plugin 'Fozzels SEO Fields REST API for WooCommerce' non è installato o non è attivo."**
    Yoast SEO è attivo, ma manca il plugin di collegamento di Fozzels. Lo scarichi e lo installi da **app.fozzels.com**, quindi lo attivi in **Plugin**.
-   **"Yoast SEO non è attivo."**
    Il plugin di collegamento è installato, ma Yoast SEO stesso non è attivo. Vada su **Plugin** e attivi **Yoast SEO**.

-   **"Il Suo plugin 'Fozzels SEO Fields REST API for WooCommerce' non è aggiornato."**
    Sta utilizzando una versione precedente del plugin di collegamento. L'integrazione continuerà a funzionare, ma Le consigliamo di aggiornare all'ultima versione per migliori prestazioni e compatibilità. Scarichi l'ultima versione da **app.fozzels.com**.

-   **Dopo aver abilitato Yoast SEO, esegua nuovamente Recupera negozi/siti web e Recupera prodotti.**
    Ciò è necessario per caricare gli attributi `yoast_title`, `yoast_meta_description` e `yoast_focus_keyword` nel Suo catalogo Fozzels.

* * *

## AIOSEO (All in One SEO)

Questi messaggi compaiono quando l'interruttore **AIOSEO** è attivato in Fozzels. L'integrazione con AIOSEO richiede due plugin attivi: **All in One SEO** e il plugin di collegamento **AIOSEO API Sync by Fozzels**.

> Può scaricare il plugin di collegamento di Fozzels da **app.fozzels.com** oppure dalla guida alla configurazione nella Knowledge Base.

-   **"Sono necessari entrambi i plugin 'All in One SEO' e 'AIOSEO API Sync'."**
    Nessuno dei due plugin è stato rilevato. Li installi e li attivi entrambi nel pannello di amministrazione di WordPress.

-   **"'All in One SEO' è attivo, ma il plugin 'AIOSEO API Sync' non è installato."**
    AIOSEO è attivo, ma manca il plugin di collegamento di Fozzels. Lo scarichi e lo installi da **app.fozzels.com**, quindi lo attivi in **Plugin**.

-   **"Il plugin 'AIOSEO API Sync' è attivo, ma 'All in One SEO' non è attivo."**
    Il plugin di collegamento è installato, ma AIOSEO stesso non è attivo. Vada su **Plugin** e attivi **All in One SEO**.

-   **"Il Suo plugin 'AIOSEO API Sync' non è aggiornato."**
    Sta utilizzando una versione precedente del plugin di collegamento. L'integrazione continuerà a funzionare, ma Le consigliamo di aggiornare all'ultima versione. La scarichi da **app.fozzels.com**.

-   **Dopo aver abilitato AIOSEO, esegua nuovamente Recupera prodotti.**
    Ciò è necessario per caricare `_aioseo_title`, `_aioseo_description` e gli altri attributi AIOSEO nel Suo catalogo Fozzels.

* * *

## Conflitto: Yoast SEO e AIOSEO

**"Yoast SEO e All in One SEO sono attivi contemporaneamente. Ciò causerà conflitti. Disattivi uno dei due per continuare."**

Yoast SEO e AIOSEO non possono essere utilizzati contemporaneamente, né in Fozzels né sul Suo sito WordPress. Scelga un plugin SEO e disattivi l'altro su entrambi i lati.

* * *

## Problemi ancora presenti?

Se ha seguito i passaggi precedenti e il problema persiste, contatti il nostro team di supporto all'indirizzo **[support@fozzels.com](mailto:support@fozzels.com)** oppure invii un ticket tramite l'Help Center. Alleghi uno screenshot del messaggio di errore e delle impostazioni della Sua integrazione per aiutarci ad assisterLa più rapidamente.
