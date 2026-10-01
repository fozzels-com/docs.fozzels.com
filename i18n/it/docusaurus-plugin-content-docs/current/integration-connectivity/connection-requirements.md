---
title: '2.1.1. Requisiti di connessione: indirizzi IP, User-Agent e impostazioni del firewall'
sidebar_position: 1.5
slug: /integration-connectivity/connection-requirements
description: >-
  Gli indirizzi IP, lo User-Agent e le impostazioni di firewall, WAF e
  Cloudflare di cui il Suo negozio ha bisogno affinché Fozzels possa
  connettersi. Condivida questa pagina con il Suo provider di hosting o
  l'amministratore del server.
---

Fozzels si connette al Suo negozio tramite internet: legge i Suoi prodotti attraverso l'API del negozio, riscrive i contenuti generati e scarica le immagini dei Suoi prodotti. Se un firewall, un WAF, una protezione anti-bot o un rate limiter dal Suo lato considera sospette queste richieste, la connessione non riesce.

Utilizzi questa pagina quando:

-   il test di connessione in Fozzels non riesce o va in timeout;
-   vede errori **401**, **403** o **429**, oppure il messaggio **"Unable to get access token"** durante la creazione o il salvataggio di un'integrazione;
-   la sincronizzazione (Recupero prodotti o invio dei contenuti) si interrompe o è incompleta;
-   le immagini dei prodotti mancano in Fozzels.

Può inoltrare questa pagina così com'è al Suo provider di hosting, alla Sua agenzia o all'amministratore del server.

## 1. Consenta gli indirizzi IP di Fozzels

Aggiunga **tutti** questi indirizzi all'allowlist (whitelist) del Suo firewall, WAF, plugin di sicurezza o pannello di hosting:

| Indirizzo | Tipo | Utilizzato per |
| --- | --- | --- |
| `49.13.117.118` | IPv4 | Piattaforma Fozzels (tutte le richieste API e i download delle immagini) |
| `2a01:4f8:c17:bb1e::/64` | Intervallo IPv6 | Piattaforma Fozzels (tutte le richieste API e i download delle immagini) |
| `91.205.205.66` | IPv4 | Team di supporto e sviluppo di Fozzels, quando testiamo o diagnostichiamo la Sua connessione |

> **Consenta sia IPv4 sia IPv6:** aggiunga sempre l'indirizzo IPv4 **e** l'intervallo IPv6. Se è consentito solo l'indirizzo IPv4, le richieste che raggiungono il Suo negozio tramite IPv6 vengono comunque bloccate. Aggiunga la voce IPv6 come intervallo completo `2a01:4f8:c17:bb1e::/64`, non come singolo indirizzo.

## 2. Consenta lo User-Agent di Fozzels

Ogni richiesta di Fozzels si identifica con uno User-Agent che inizia con `fozzels/`, seguito dal numero di versione di Fozzels:

```
fozzels/9.2 (+https://app.fozzels.com/)
```

Il numero di versione cambia a ogni release di Fozzels, quindi non confronti la stringa completa. Nelle regole di protezione anti-bot, WAF o rate limiting, imposti la corrispondenza su User-Agent **contiene** `fozzels`.

Si assicuri che:

-   le richieste con questo User-Agent non vengano bloccate né sottoposte a challenge come bot o crawler;
-   le richieste provenienti dagli indirizzi IP di Fozzels e/o con questo User-Agent siano escluse dal rate limiting. Durante la sincronizzazione Fozzels invia molte richieste in poco tempo, soprattutto per cataloghi di grandi dimensioni. Se vengono limitate, riceverà errori **429 (Too Many Requests)** e la sincronizzazione non verrà completata.

Per una protezione ottimale, combini entrambe le condizioni (indirizzo IP **e** User-Agent) nelle Sue regole, se il Suo firewall lo supporta.

## 3. Cloudflare

Se il Suo negozio si trova dietro Cloudflare, le richieste di Fozzels possono ricevere una pagina di challenge ("Just a moment...") invece di una risposta API. Fozzels non è in grado di risolvere le challenge, quindi la connessione non riesce, spesso con un errore **403** o **"Unable to get access token"**.

Consenta Fozzels con **una** di queste opzioni:

**Opzione A: IP Access Rule (la più semplice)**

1.  Nella dashboard di Cloudflare, apra il Suo dominio e vada su **Security → WAF → Tools** (IP Access Rules).
2.  Aggiunga `49.13.117.118` con l'azione **Allow**.
3.  Aggiunga `2a01:4f8:c17:bb1e::/64` con l'azione **Allow**.
4.  Facoltativamente, aggiunga `91.205.205.66` con l'azione **Allow**.

**Opzione B: regola WAF personalizzata con Skip**

1.  Vada su **Security → WAF → Custom rules** (nella dashboard più recente: **Security → Security rules**) e crei una regola.
2.  Utilizzi questa espressione (Edit expression):

    ```
    (ip.src in {49.13.117.118 2a01:4f8:c17:bb1e::/64 91.205.205.66})
    ```

3.  Imposti l'azione su **Skip** e selezioni le restanti regole personalizzate, le regole di rate limiting, le regole gestite e Super Bot Fight Mode (e, tra gli altri componenti, Browser Integrity Check e Security Level).
4.  Posizioni la regola **per prima** nell'elenco e la distribuisca.

Quindi verifichi che:

-   **Bot Fight Mode** (piano Free, in **Security → Bots**) non può essere ignorato da una regola personalizzata. Se Fozzels riceve ancora delle challenge, disattivi Bot Fight Mode.
-   **I'm Under Attack mode** e altre regole di challenge a livello di sito non devono applicarsi a Fozzels. Una challenge JavaScript o gestita sui percorsi della Sua API blocca sempre Fozzels.
-   Per verificare cosa blocca Fozzels, apra **Security → Events** e filtri per gli indirizzi IP di Fozzels. Ogni richiesta bloccata mostra quale regola o funzionalità è intervenuta.

## 4. Percorsi che Fozzels deve raggiungere

Fozzels richiama l'API standard della Sua piattaforma. Non blocchi né protegga questi percorsi per gli indirizzi IP di Fozzels:

| Piattaforma | Percorsi |
| --- | --- |
| Magento 2 | `/rest/` e `/graphql` |
| Shopware 6 | `/api/` (incluso `/api/oauth/token`) e `/store-api/` |
| WooCommerce | `/wp-json/` |

Fozzels scarica inoltre le immagini dei Suoi prodotti dai relativi URL, quindi anche il Suo dominio per i media o le immagini (CDN compresa) deve essere raggiungibile da Fozzels.

## 5. Altri controlli su hosting e firewall

-   **Firewall dell'hosting:** molti provider di hosting gestiscono un proprio firewall o una protezione DDoS davanti al Suo server. Chieda loro di consentire anche lì gli indirizzi IP di Fozzels.
-   **ModSecurity / Imunify360 (Plesk, cPanel, DirectAdmin):** questi web application firewall possono bloccare le richieste API. Aggiunga gli indirizzi IP di Fozzels alla loro allowlist.
-   **fail2ban o strumenti simili:** si assicuri che gli indirizzi IP di Fozzels siano nella lista di esclusione, in modo che un picco di richieste di sincronizzazione non ne provochi il ban.
-   **Rate limiting** nel Suo web server (nginx, Apache), load balancer o plugin di sicurezza: escluda gli indirizzi IP e/o lo User-Agent di Fozzels.
-   **Plugin di sicurezza** (ad esempio Wordfence o Sucuri per WooCommerce): inserisca nell'allowlist gli indirizzi IP di Fozzels e non blocchi l'accesso alla REST API.
-   **Blocco per paese o geo-blocking:** la piattaforma Fozzels opera in Germania. Se blocca determinati paesi, si assicuri che gli indirizzi IP di Fozzels siano esclusi.
-   **Negozi protetti da password o di staging:** se il Suo negozio richiede una password (autenticazione HTTP basic) prima dell'API, escluda gli indirizzi IP di Fozzels da tale protezione.

## Checklist

- [ ] `49.13.117.118` (IPv4) è consentito in ogni firewall, WAF e plugin di sicurezza
- [ ] Anche `2a01:4f8:c17:bb1e::/64` (intervallo IPv6) è consentito
- [ ] `91.205.205.66` è consentito, così il nostro team di supporto può testare la Sua connessione
- [ ] Le richieste con uno User-Agent contenente `fozzels` non vengono bloccate né sottoposte a rate limiting
- [ ] Cloudflare (se utilizzato): IP Access Rule o regola Skip aggiunta, nessuna challenge per Fozzels, Bot Fight Mode verificato
- [ ] I percorsi API della Sua piattaforma e gli URL delle immagini dei prodotti sono raggiungibili da Fozzels
- [ ] Firewall dell'hosting, ModSecurity, fail2ban e rate limiting includono le eccezioni per Fozzels
- [ ] Il test di connessione in Fozzels va a buon fine

## Ancora non funziona?

Ci contatti all'indirizzo **[support@fozzels.com](mailto:support@fozzels.com)**. Indichi l'URL del Suo negozio, il messaggio di errore esatto di Fozzels, l'ora in cui si è verificato e, se utilizza Cloudflare, il Ray ID o la voce corrispondente in **Security → Events**.
