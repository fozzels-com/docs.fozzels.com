---
title: "FAQ: integrazioni e sincronizzazione"
sidebar_position: 9
unlisted: true
slug: /frequently-asked-questions/faq-integrations-and-synchronization
description: >-
  Pull parziali dei prodotti, problemi di connessione con Shopware e Shopify,
  varianti e Packs, HTML negli attributi, plugin WooCommerce, limiti di
  frequenza, pull delle immagini e problemi con gli URL multi-store.
---

## Il pull automatico dei prodotti recupera solo una parte del mio catalogo. Come ottengo tutti i prodotti?

Se il Suo catalogo supera i limiti API predefiniti, il pull potrebbe non recuperare tutti i prodotti. Richieda un aumento del limite API al Suo fornitore PIM. Come soluzione temporanea, il team Fozzels può completare manualmente il pull.

## I limiti API sono stati aumentati, ma il pull dei prodotti continua a non funzionare.

Il fornitore PIM potrebbe dover riavviare i propri servizi. Lo contatti per confermare che le modifiche siano attive. Il supporto Fozzels può eseguire un pull manuale mentre il problema viene risolto.

## Fozzels non riesce a stabilire una connessione REST API con il mio store Shopware.

Ricontrolli l'Access Key ID e la Secure Access Key. Se sono corrette, il problema riguarda probabilmente le autorizzazioni di accesso. Nell'amministrazione di Shopware vada in Settings → System → Integrations, apra l'integrazione Fozzels, attivi l'interruttore **Administrator** e salvi.

## Fozzels richiede l'accesso da Administrator in Shopware, ma ho dubbi sulla privacy.

Il ruolo Administrator è attualmente necessario affinché Fozzels possa leggere i dati dei prodotti. Se concedere l'accesso amministrativo completo La preoccupa, contatti il team Fozzels per valutare se sia possibile una configurazione più restrittiva.

## Le mie chiavi API non sono valide. Cosa devo verificare?

Si assicuri di inviare il tipo di chiave corretto (chiave di integrazione che inizia con `SWIA...`, non una chiave di Sales Channel). Verifichi che la chiave segreta non sia stata troncata durante il copia/incolla. Provi a creare una nuova integrazione e a inviare chiavi nuove.

## I contenuti vengono generati in Fozzels, ma non compaiono nel mio store Shopware.

Ciò può accadere quando la sincronizzazione non riesce per prodotti specifici a causa di attributi mancanti, problemi di autorizzazione o della configurazione delle varianti. Contatti il supporto fornendo esempi di prodotti specifici.

## Come gestisce Fozzels i prodotti con molte varianti (taglie, colori)?

Fozzels dispone di una funzione **Packs** che raggruppa le varianti: tutte le taglie dello stesso colore vengono trattate come un unico prodotto. Aggiunga il filtro "Pack Parent ID is not empty" nel Suo flusso per utilizzare questa funzione.

## Nei campi di Shopify compaiono tag HTML (ad es. `<p>`). Come risolvo il problema?

Disattivi il supporto HTML per l'attributo: scheda Attributes → Edit (icona a forma di matita) → Technical Flags → disattivi **Allow HTML** → Save. Quindi rigeneri e verifichi.

## Fozzels può scrivere testo semplice (senza HTML) nel mio PIM?

Sì. Vada alla scheda Attributes → Edit Attribute → deselezioni **Allow HTML** → Save.

## Ricevo l'errore "Website is not active" quando faccio clic su Save and Preview.

Ciò può verificarsi a causa di problemi di connessione temporanei dopo un aggiornamento dell'API. Contatti il supporto: il team può verificare e riattivare la connessione al sito web.

## Ho cambiato l'URL del dominio del mio store. Devo aggiornare Fozzels?

Sì. Se cambia il dominio, potrebbe essere necessario aggiornare la configurazione di Fozzels. Contatti il supporto per aggiornare il dominio.

## Più store mostrano lo stesso dominio in Fozzels. È corretto?

Ciò può accadere quando Fozzels riceve un solo dominio anziché domini separati per ciascuno store. Dietro le quinte, la sincronizzazione viene gestita correttamente per ogni store. Sono previsti miglioramenti dell'interfaccia.

## Quali plugin sono necessari per un'integrazione WooCommerce?

Si assicuri che: la REST API sia attivata, sia installata l'ultima versione del plugin Fozzels AIOSEO e che il plugin ACF to REST API (v3.3.4) sia installato e attivo.

## Come configuro l'integrazione AIOSEO con Fozzels (WooCommerce)?

Installi il plugin di sincronizzazione Fozzels AIOSEO su WordPress. "Focus Keyphrase" in Fozzels corrisponde a Focus Keyword in WooCommerce; "SEO Keywords" corrisponde ad Additional Keywords.

## Come configuro l'integrazione Yoast SEO con Fozzels?

Installi il plugin di sincronizzazione Fozzels Yoast. Si assicuri che Yoast sia completamente configurato e attivato in WordPress.

## Come gestisce Fozzels i contenuti multilingue con WPML?

Fozzels fornisce l'accesso agli store per le diverse lingue. Crei flussi separati per ciascuno store linguistico. Fozzels non traduce autonomamente i contenuti, ma può impostare i prompt in modo da generarli nella lingua desiderata.

## Come utilizzo i campi prodotto personalizzati (ACF) nei prompt di Fozzels?

Fozzels supporta ACF per WooCommerce. Attivi il supporto ACF e i campi personalizzati compariranno come attributi in Fozzels.

## I nuovi campi ACF che ho aggiunto in WordPress non compaiono in Fozzels.

I nuovi campi ACF richiedono un pull degli attributi riuscito per comparire. Si assicuri che il plugin ACF to REST API sia attivo e che la connessione API funzioni.

## Il pull dei dati dei prodotti ha smesso di funzionare / ricevo errori di importazione.

La causa può essere un rate limiter o un firewall che blocca le richieste API di Fozzels. Autorizzi gli indirizzi IP e lo User-Agent di Fozzels ed escluda questi ultimi dal rate limiting — consulti [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](../integration-connectivity/connection-requirements.md).

## Gli URL dello storefront portano a errori 404.

Ciò può accadere con strutture di prodotti padre/figlio. Contatti il supporto fornendo degli esempi: il team può correggere la mappatura degli URL.

## I testi di Shopware vengono inviati alle varianti di taglia anziché alle varianti di colore.

Dopo l'aggiornamento del Pack Parent ID, il livello di sincronizzazione potrebbe essere cambiato. Contatti il supporto per riportare la destinazione della sincronizzazione al livello della variante colore/padre.

## Il mio store risulta "lost in integration" / ricevo un errore di store inattivo.

L'URL originale dello store non è più attivo. Duplichi i flussi interessati e selezioni lo store attivo corretto durante la duplicazione. I vecchi flussi possono essere archiviati.

## L'URL del mio storefront punta al dominio sbagliato (più storefront).

Fozzels risolve gli URL in base alla lingua, non al sales channel, e sceglie il primo dominio disponibile. Si tratta di una limitazione nota in fase di miglioramento.

## Come gestisce Fozzels più sales channel di Shopware?

I contenuti vengono generati una sola volta per prodotto e per lingua, non per sales channel. I sales channel possono essere utilizzati come filtri del catalogo. Ciò riduce i costi dei token.

## Nel mio feed prodotti / catalogo non ci sono immagini.

Le immagini mancanti sono spesso causate da restrizioni IP sul Suo server. Autorizzi gli indirizzi IP e lo User-Agent di Fozzels — consulti [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](../integration-connectivity/connection-requirements.md).

## Le immagini dei prodotti non vengono visualizzate nel catalogo Fozzels.

Può trattarsi di un problema dell'integrazione con il pull delle immagini. Contatti il supporto: il team indagherà e risolverà il problema lato Fozzels.

## Ricevo un errore di sincronizzazione: impossibile scrivere negli attributi a discesa.

Fozzels può scrivere testo solo negli attributi di tipo testuale, non nei campi a discesa/select. Verifichi il tipo di attributo nel Suo webshop.

## Come rinomino gli attributi in Fozzels?

Vada alle impostazioni dell'attributo, modifichi il nome nel campo di inserimento e salvi. Si tratta di una modifica di visualizzazione valida solo all'interno di Fozzels.

## I nomi degli attributi non si aggiornano automaticamente nei prompt dopo una modifica nel PIM.

Quando rinomina gli attributi nel Suo PIM, Fozzels potrebbe trattarli come nuovi. Rinomini manualmente l'attributo in Fozzels per risolvere il problema.

## Dopo alcune modifiche al sito web, i contenuti sono stati sincronizzati con i prodotti sbagliati.

Fozzels recupera i cataloghi ogni notte. Se apporta modifiche importanti, avvii sempre un pull manuale dei prodotti per garantire dati corretti.

## Ricevo un errore 429 Too Many Requests durante la sincronizzazione con il mio PIM.

Il rate limiter del Suo PIM sta bloccando le richieste. Chieda al Suo fornitore PIM di autorizzare gli indirizzi IP e lo User-Agent di Fozzels e di escluderli dal rate limiting — consulti [2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall](../integration-connectivity/connection-requirements.md). Se l'errore persiste, contatti il supporto Fozzels.

## Quali campi può aggiornare Fozzels in Katana PIM?

L'endpoint standard supporta: nome, descrizione breve, descrizione completa, meta title e meta description. Altri campi potrebbero richiedere endpoint API separati.

## Come attivo l'integrazione LangShop con Shopify?

Condivida degli screenshot delle impostazioni di LangShop in Shopify, in modo che il team Fozzels possa verificare la Sua configurazione e stabilire se sia necessaria un'ulteriore configurazione.

## Come risincronizzo un intero batch in una volta?

Apra il flusso → Batch List → attivi "Show all content" → selezioni tutte le righe → Actions → **Re-sync content**. L'operazione viene eseguita tramite la coda generale.

## Posso aggiornare l'integrazione Shopify senza perdere dati?

Contatti il supporto prima di eseguire l'aggiornamento: il team può individuare la causa principale. In genere l'aggiornamento non comporta perdite di dati, ma è opportuno che il team lo verifichi prima.

## Shopify Markets non compare in Fozzels.

Di solito la causa sono restrizioni dell'API in Shopify: è necessario modificare le impostazioni dell'API. Contatti il supporto o la Sua agenzia partner.

## Ricevo errori di generazione dovuti a immagini di grandi dimensioni (limite di 5MB).

I modelli di IA hanno un limite di circa 5MB per immagine per richiesta. Fozzels converte automaticamente i PNG in JPG. Valuti l'utilizzo del formato JPG per le immagini dei prodotti.

## La struttura delle categorie multilingue è errata (ad es. ceco rispetto a tedesco).

Fozzels potrebbe mostrare la struttura delle categorie della lingua predefinita. Contatti il supporto per adeguare la mappatura delle categorie multilingue.

## Con quale frequenza Fozzels sincronizza i dati dal mio PIM?

I pull automatici dei prodotti vengono eseguiti ogni notte dopo la mezzanotte. Per aggiornamenti immediati, avvii un pull manuale.
