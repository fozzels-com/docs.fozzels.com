---
title: '2.1.1. Verbindingsvereisten: IP-adressen, User-Agent en firewallinstellingen'
sidebar_position: 1.5
slug: /integration-connectivity/connection-requirements
description: >-
  De IP-adressen, User-Agent en firewall-, WAF- en Cloudflare-instellingen die
  uw winkel nodig heeft zodat Fozzels verbinding kan maken. Stuur deze pagina
  door naar uw hostingprovider of serverbeheerder.
---

Fozzels maakt via internet verbinding met uw winkel: het leest uw producten via de API van uw winkel, schrijft de gegenereerde content terug en downloadt uw productafbeeldingen. Als een firewall, WAF, botbescherming of rate limiter aan uw kant deze verzoeken als verdacht beschouwt, mislukt de verbinding.

Gebruik deze pagina wanneer:

-   de verbindingstest in Fozzels mislukt of een time-out geeft;
-   u fouten **401**, **403** of **429** ziet, of de melding **"Unable to get access token"** bij het aanmaken of opslaan van een integratie;
-   de synchronisatie (Pull Products of het terugsturen van content) stopt of onvolledig is;
-   productafbeeldingen ontbreken in Fozzels.

U kunt deze pagina ongewijzigd doorsturen naar uw hostingprovider, bureau of serverbeheerder.

## 1. Sta de Fozzels IP-adressen toe

Voeg **al** deze adressen toe aan de allowlist (whitelist) van uw firewall, WAF, beveiligingsplugin of hostingpaneel:

| Adres | Type | Gebruikt voor |
| --- | --- | --- |
| `49.13.117.118` | IPv4 | Fozzels-platform (alle API-verzoeken en het downloaden van afbeeldingen) |
| `2a01:4f8:c17:bb1e::/64` | IPv6-bereik | Fozzels-platform (alle API-verzoeken en het downloaden van afbeeldingen) |
| `91.205.205.66` | IPv4 | Fozzels support- en ontwikkelteam, wanneer wij uw verbinding testen of problemen onderzoeken |

> **Sta zowel IPv4 als IPv6 toe:** Voeg altijd het IPv4-adres **en** het IPv6-bereik toe. Als alleen het IPv4-adres is toegestaan, worden verzoeken die uw winkel via IPv6 bereiken nog steeds geblokkeerd. Voeg de IPv6-regel toe als het volledige bereik `2a01:4f8:c17:bb1e::/64`, niet als één adres.

## 2. Sta de Fozzels User-Agent toe

Elk verzoek van Fozzels identificeert zich met een User-Agent die begint met `fozzels/`, gevolgd door het Fozzels-versienummer:

```
fozzels/9.2 (+https://app.fozzels.com/)
```

Het versienummer verandert bij elke Fozzels-release, dus controleer niet op de volledige tekst. Gebruik in regels voor botbescherming, WAF of rate limiting de voorwaarde User-Agent **bevat** `fozzels`.

Zorg ervoor dat:

-   verzoeken met deze User-Agent niet als bot of crawler worden geblokkeerd of een challenge krijgen;
-   verzoeken van de Fozzels IP-adressen en/of met deze User-Agent zijn uitgesloten van rate limiting. Tijdens synchronisatie verstuurt Fozzels veel verzoeken in korte tijd, vooral bij grote catalogi. Worden deze beperkt, dan krijgt u **429 (Te veel verzoeken)**-fouten en wordt de synchronisatie niet voltooid.

Voor de beste beveiliging combineert u beide voorwaarden (IP-adres **en** User-Agent) in uw regels, als uw firewall dat ondersteunt.

## 3. Cloudflare

Als uw winkel achter Cloudflare staat, kunnen verzoeken van Fozzels een challenge-pagina ("Just a moment...") krijgen in plaats van een API-antwoord. Fozzels kan geen challenges oplossen, dus de verbinding mislukt, vaak met **403** of **"Unable to get access token"**.

Sta Fozzels toe met **één** van deze opties:

**Optie A: IP Access Rule (het eenvoudigst)**

1.  Open in het Cloudflare-dashboard uw domein en ga naar **Security → WAF → Tools** (IP Access Rules).
2.  Voeg `49.13.117.118` toe met de actie **Allow**.
3.  Voeg `2a01:4f8:c17:bb1e::/64` toe met de actie **Allow**.
4.  Voeg optioneel `91.205.205.66` toe met de actie **Allow**.

**Optie B: WAF custom rule met Skip**

1.  Ga naar **Security → WAF → Custom rules** (in het nieuwere dashboard: **Security → Security rules**) en maak een regel aan.
2.  Gebruik deze expressie (Edit expression):

    ```
    (ip.src in {49.13.117.118 2a01:4f8:c17:bb1e::/64 91.205.205.66})
    ```

3.  Stel de actie in op **Skip** en selecteer de overige custom rules, rate limiting rules, managed rules en Super Bot Fight Mode (en, onder de overige onderdelen, Browser Integrity Check en Security Level).
4.  Zet de regel **bovenaan** de lijst en activeer hem (Deploy).

Controleer daarna:

-   **Bot Fight Mode** (Free-abonnement, onder **Security → Bots**) kan niet worden overgeslagen met een custom rule. Krijgt Fozzels nog steeds challenges, zet Bot Fight Mode dan uit.
-   **I'm Under Attack mode** en andere sitebrede challenge-regels mogen niet gelden voor Fozzels. Een JavaScript- of managed challenge op uw API-paden blokkeert Fozzels altijd.
-   Om te zien wat Fozzels blokkeert, opent u **Security → Events** en filtert u op de Fozzels IP-adressen. Bij elk geblokkeerd verzoek ziet u welke regel of functie heeft ingegrepen.

## 4. Paden die Fozzels moet kunnen bereiken

Fozzels roept de standaard-API van uw platform aan. Blokkeer of beveilig deze paden niet voor de Fozzels IP-adressen:

| Platform | Paden |
| --- | --- |
| Magento 2 | `/rest/` en `/graphql` |
| Shopware 6 | `/api/` (inclusief `/api/oauth/token`) en `/store-api/` |
| WooCommerce | `/wp-json/` |

Fozzels downloadt ook uw productafbeeldingen via hun afbeeldings-URL's. Uw media- of afbeeldingsdomein (inclusief een CDN) moet dus ook bereikbaar zijn voor Fozzels.

## 5. Overige hosting- en firewallcontroles

-   **Hostingfirewall:** veel hostingproviders hebben een eigen firewall of DDoS-bescherming vóór uw server. Vraag hen om de Fozzels IP-adressen daar ook toe te staan.
-   **ModSecurity / Imunify360 (Plesk, cPanel, DirectAdmin):** deze web application firewalls kunnen API-verzoeken blokkeren. Voeg de Fozzels IP-adressen toe aan hun allowlist.
-   **fail2ban of vergelijkbare tools:** zorg dat de Fozzels IP-adressen op de ignore-lijst staan, zodat een golf van synchronisatieverzoeken niet tot een blokkade leidt.
-   **Rate limiting** in uw webserver (nginx, Apache), load balancer of beveiligingsplugin: sluit de Fozzels IP-adressen en/of User-Agent uit.
-   **Beveiligingsplugins** (bijvoorbeeld Wordfence of Sucuri voor WooCommerce): zet de Fozzels IP-adressen op de allowlist en blokkeer de toegang tot de REST API niet.
-   **Land- of geoblokkering:** het Fozzels-platform draait in Duitsland. Als u landen blokkeert, zorg dan dat de Fozzels IP-adressen zijn uitgezonderd.
-   **Met een wachtwoord beveiligde of staging-winkels:** als uw winkel vóór de API om een wachtwoord vraagt (HTTP basic authentication), sluit de Fozzels IP-adressen dan uit van die beveiliging.

## Checklist

- [ ] `49.13.117.118` (IPv4) is toegestaan in elke firewall, WAF en beveiligingsplugin
- [ ] `2a01:4f8:c17:bb1e::/64` (IPv6-bereik) is ook toegestaan
- [ ] `91.205.205.66` is toegestaan, zodat ons supportteam uw verbinding kan testen
- [ ] Verzoeken met een User-Agent die `fozzels` bevat, worden niet geblokkeerd en niet beperkt
- [ ] Cloudflare (indien gebruikt): IP Access Rule of Skip-regel toegevoegd, geen challenge voor Fozzels, Bot Fight Mode gecontroleerd
- [ ] De API-paden van uw platform en uw productafbeeldings-URL's zijn bereikbaar voor Fozzels
- [ ] Hostingfirewall, ModSecurity, fail2ban en rate limiting bevatten de uitzonderingen voor Fozzels
- [ ] De verbindingstest in Fozzels slaagt

## Werkt het nog steeds niet?

Neem contact met ons op via **[support@fozzels.com](mailto:support@fozzels.com)**. Vermeld uw winkel-URL, de exacte foutmelding uit Fozzels, het tijdstip waarop het gebeurde en, als u Cloudflare gebruikt, de Ray ID of de bijbehorende regel uit **Security → Events**.
