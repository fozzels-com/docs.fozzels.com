---
id: '103000395329'
title: "2.5.7. Qualcosa non ha funzionato con la Sua connessione WooCommerce?"
sidebar_position: 14
slug: >-
  /integration-connectivity/something-went-wrong-with-your-woocommerce-connection
description: >-
  Non si preoccupi: la maggior parte dei problemi di connessione si risolve
  rapidamente. Questa guida La accompagnerà attraverso i messaggi più comuni che
  potrebbe visualizzare e Le indicherà esattamente cosa fare.
---

Non si preoccupi: la maggior parte dei problemi di connessione si risolve rapidamente. Questa guida La accompagnerà attraverso i messaggi più comuni che potrebbe visualizzare e Le indicherà esattamente cosa fare.

##

## Che cosa significa "Connection Issues Detected"?

Quando salva la Sua integrazione WooCommerce, Fozzels verifica automaticamente che tutto sia configurato correttamente. Se manca qualcosa o se qualcosa richiede attenzione, visualizzerà un messaggio che spiega cosa fare.

##

## Connessione di base

-   **"Authentication failed."** Le Sue chiavi API sono errate o obsolete. Vada nel Suo negozio WooCommerce → **Settings → Advanced → REST API**, generi nuove chiavi e le incolli in Fozzels.

-   **"Access denied."** La Sua chiave API non dispone delle autorizzazioni corrette. Quando crea la chiave in WooCommerce, si assicuri di selezionare **Read/Write**, non Read-only.

-   **"REST API not found."** Ricontrolli l'URL inserito. Dovrebbe avere un aspetto simile a `https://yourstore.com`, senza barre aggiuntive né errori di battitura.

-   **"Cannot reach your store."** Il Suo negozio potrebbe essere offline, oppure un plugin di sicurezza sta bloccando l'accesso. Verifichi che il negozio sia attivo e funzionante, quindi riprovi. Se è coinvolto un plugin di sicurezza o un firewall, consenta gli indirizzi elencati in [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](./connection-requirements.md).

-   **"SSL certificate error."** Il certificato di sicurezza del Suo negozio presenta un problema. Contatti il Suo provider di hosting per risolverlo.

##

## ACF (Advanced Custom Fields)

-   **"Both plugins are required."** Sul Suo sito WordPress devono essere attivi due plugin: **Advanced Custom Fields** e **ACF to REST API**. Vada su **Plugins → Add New** e li installi entrambi.

-   **"ACF is active but the connector plugin is missing."** ACF è installato, ma manca il secondo plugin. Installi **ACF to REST API** e lo attivi.

-   **"Connector is active but ACF is not."** Il secondo plugin è presente, ma ACF stesso non è in esecuzione. Vada su **Plugins** e attivi **Advanced Custom Fields**.

-   **"Permalink structure is incompatible."** Vada su **WordPress → Settings → Permalinks** e passi da "Plain" a qualsiasi altra opzione: **Post name** funziona benissimo. Salvi e il gioco è fatto.

-   **"ACF fields are not visible via REST API."** Apra il Suo ACF Field Group, vada su **Group Settings** e attivi **Show in REST API**. Non dimentichi di salvare.

-   **"ACF REST API version mismatch."** Vada su **WordPress → Settings → Permalinks → ACF to REST API** e imposti la versione su **v3**.

##
WPML (multilingua)

-   **"WPML plugin is not detected."** Installi e attivi il plugin **WPML Multilingual CMS** sul Suo sito WordPress. Quindi aggiunga almeno una lingua in **WPML → Languages**.

-   **"WPML is active but no languages are configured."** WPML è installato, ma non ha ancora aggiunto alcuna lingua. Vada su **WPML → Languages** e aggiunga quelle di cui ha bisogno.

-   **Ha appena abilitato WPML?** Dopo averlo attivato, torni su **Websites & Stores** e clicchi su **Pull Stores/Websites**, quindi esegua nuovamente **Pull Products**. È così che Fozzels rileva le Sue versioni linguistiche.

##
Yoast SEO

Per funzionare con Fozzels, Yoast SEO necessita di due elementi: il plugin **Yoast SEO** e il nostro **plugin connettore Fozzels**. Può scaricare il connettore da **app.fozzels.com**.

-   **"Both plugins are required."** Nessuno dei due plugin è attivo. Installi e attivi **Yoast SEO** e il **plugin connettore Fozzels** in WordPress.

-   **"Connector plugin is not installed."** Yoast SEO è in esecuzione, ma manca il nostro connettore. Lo scarichi da **app.fozzels.com** e lo attivi in **Plugins**.

-   **"Yoast SEO is not active."** Il connettore è presente, ma Yoast SEO non è in esecuzione. Vada su **Plugins** e attivi **Yoast SEO**.
-   **"Your connector plugin is outdated."** _(solo un avviso)_ Tutto continua a funzionare, ma Le consigliamo di aggiornare il connettore all'ultima versione per un'esperienza ottimale. Lo scarichi da **app.fozzels.com**.
**Ha appena abilitato Yoast SEO?** Esegua nuovamente **Pull Stores/Websites** e **Pull Products** affinché Fozzels possa caricare i Suoi campi SEO.

* * *

## AIOSEO (All in One SEO)

-   Anche AIOSEO necessita di due elementi: il plugin **All in One SEO** e il nostro connettore **AIOSEO API Sync by Fozzels**. Scarichi il connettore da **app.fozzels.com**.

-   **"Both plugins are required."** Nessuno dei due plugin è attivo. Li installi e li attivi entrambi in WordPress.

-   **"Connector plugin is not installed."** AIOSEO è in esecuzione, ma manca il nostro connettore. Lo scarichi da **app.fozzels.com** e lo attivi.

-   **"AIOSEO is not active."** Il connettore è presente, ma AIOSEO non è in esecuzione. Vada su **Plugins** e attivi **All in One SEO**.

-   **"Your connector plugin is outdated."** _(solo un avviso)_ Tutto continua a funzionare, ma si consiglia di aggiornare il connettore. Scarichi l'ultima versione da **app.fozzels.com**.

**Ha appena abilitato AIOSEO?** Esegua nuovamente **Pull Products** affinché Fozzels possa caricare i Suoi campi AIOSEO.

* * *

## Utilizza Yoast SEO e AIOSEO contemporaneamente?

Questi due plugin non funzionano insieme, né in Fozzels né in WordPress. Ne scelga uno e disattivi l'altro su entrambi i lati. Non sa quale scegliere? Opti per quello che sta già utilizzando nel Suo negozio.

* * *

## Il problema persiste?

Se nessuna delle indicazioni precedenti è stata d'aiuto, ci contatti all'indirizzo **[support@fozzels.com](mailto:support@fozzels.com)** oppure apra un ticket nell'Help Center. Uno screenshot del messaggio di errore ci aiuta molto a risolvere il problema rapidamente!
