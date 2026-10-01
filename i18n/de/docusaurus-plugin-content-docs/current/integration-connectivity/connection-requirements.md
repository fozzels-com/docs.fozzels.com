---
title: '2.1.1. Verbindungsanforderungen: IP-Adressen, User-Agent und Firewall-Einstellungen'
sidebar_position: 1.5
slug: /integration-connectivity/connection-requirements
description: >-
  Die IP-Adressen, der User-Agent und die Firewall-, WAF- und
  Cloudflare-Einstellungen, die Ihr Shop benötigt, damit Fozzels eine Verbindung
  herstellen kann. Leiten Sie diese Seite an Ihren Hosting-Anbieter oder
  Server-Administrator weiter.
---

Fozzels verbindet sich über das Internet mit Ihrem Shop: Es liest Ihre Produkte über die API Ihres Shops, schreibt die generierten Inhalte zurück und lädt Ihre Produktbilder herunter. Wenn eine Firewall, WAF, ein Bot-Schutz oder ein Rate Limiter auf Ihrer Seite diese Anfragen als verdächtig einstuft, schlägt die Verbindung fehl.

Nutzen Sie diese Seite, wenn:

-   der Verbindungstest in Fozzels fehlschlägt oder ein Timeout auftritt;
-   Sie beim Erstellen oder Speichern einer Integration Fehler **401**, **403** oder **429** oder die Meldung **"Unable to get access token"** sehen;
-   die Synchronisierung (Pull Products oder das Zurücksenden von Inhalten) stoppt oder unvollständig ist;
-   Produktbilder in Fozzels fehlen.

Sie können diese Seite unverändert an Ihren Hosting-Anbieter, Ihre Agentur oder Ihren Server-Administrator weiterleiten.

## 1. Fozzels IP-Adressen zulassen

Fügen Sie **alle** diese Adressen zur Allowlist (Whitelist) Ihrer Firewall, WAF, Ihres Sicherheits-Plugins oder Hosting-Panels hinzu:

| Adresse | Typ | Verwendet für |
| --- | --- | --- |
| `49.13.117.118` | IPv4 | Fozzels-Plattform (alle API-Anfragen und Bild-Downloads) |
| `2a01:4f8:c17:bb1e::/64` | IPv6-Bereich | Fozzels-Plattform (alle API-Anfragen und Bild-Downloads) |
| `91.205.205.66` | IPv4 | Fozzels Support- und Entwicklungsteam, wenn wir Ihre Verbindung testen oder Fehler suchen |

> **IPv4 und IPv6 zulassen:** Fügen Sie immer die IPv4-Adresse **und** den IPv6-Bereich hinzu. Wenn nur die IPv4-Adresse zugelassen ist, werden Anfragen, die Ihren Shop über IPv6 erreichen, weiterhin blockiert. Tragen Sie den IPv6-Eintrag als vollständigen Bereich `2a01:4f8:c17:bb1e::/64` ein, nicht als einzelne Adresse.

## 2. Fozzels User-Agent zulassen

Jede Anfrage von Fozzels identifiziert sich mit einem User-Agent, der mit `fozzels/` beginnt, gefolgt von der Fozzels-Versionsnummer:

```
fozzels/9.2 (+https://app.fozzels.com/)
```

Die Versionsnummer ändert sich mit jedem Fozzels-Release. Prüfen Sie daher nicht auf den vollständigen String. Verwenden Sie in Bot-Schutz-, WAF- oder Rate-Limiting-Regeln die Bedingung User-Agent **enthält** `fozzels`.

Stellen Sie sicher, dass:

-   Anfragen mit diesem User-Agent nicht als Bot oder Crawler blockiert oder mit einer Challenge belegt werden;
-   Anfragen von den Fozzels IP-Adressen und/oder mit diesem User-Agent vom Rate Limiting ausgenommen sind. Während der Synchronisierung sendet Fozzels in kurzer Zeit viele Anfragen, besonders bei großen Katalogen. Werden diese begrenzt, erhalten Sie Fehler **429 (Too Many Requests)** und die Synchronisierung wird nicht abgeschlossen.

Für den besten Schutz kombinieren Sie in Ihren Regeln beide Bedingungen (IP-Adresse **und** User-Agent), sofern Ihre Firewall dies unterstützt.

## 3. Cloudflare

Wenn Ihr Shop hinter Cloudflare liegt, können Fozzels-Anfragen statt einer API-Antwort eine Challenge-Seite ("Just a moment...") erhalten. Fozzels kann keine Challenges lösen, daher schlägt die Verbindung fehl, oft mit **403** oder **"Unable to get access token"**.

Lassen Sie Fozzels mit **einer** dieser Optionen zu:

**Option A: IP Access Rule (am einfachsten)**

1.  Öffnen Sie im Cloudflare-Dashboard Ihre Domain und gehen Sie zu **Security → WAF → Tools** (IP Access Rules).
2.  Fügen Sie `49.13.117.118` mit der Aktion **Allow** hinzu.
3.  Fügen Sie `2a01:4f8:c17:bb1e::/64` mit der Aktion **Allow** hinzu.
4.  Optional: Fügen Sie `91.205.205.66` mit der Aktion **Allow** hinzu.

**Option B: WAF Custom Rule mit Skip**

1.  Gehen Sie zu **Security → WAF → Custom rules** (im neueren Dashboard: **Security → Security rules**) und erstellen Sie eine Regel.
2.  Verwenden Sie diesen Ausdruck (Edit expression):

    ```
    (ip.src in {49.13.117.118 2a01:4f8:c17:bb1e::/64 91.205.205.66})
    ```

3.  Setzen Sie die Aktion auf **Skip** und wählen Sie die übrigen Custom Rules, Rate Limiting Rules, Managed Rules und Super Bot Fight Mode aus (sowie unter den weiteren Komponenten Browser Integrity Check und Security Level).
4.  Setzen Sie die Regel an die **erste** Stelle der Liste und aktivieren Sie sie (Deploy).

Prüfen Sie anschließend:

-   **Bot Fight Mode** (Free-Plan, unter **Security → Bots**) kann nicht durch eine Custom Rule übersprungen werden. Wenn Fozzels weiterhin Challenges erhält, schalten Sie Bot Fight Mode aus.
-   **I'm Under Attack mode** und andere seitenweite Challenge-Regeln dürfen nicht für Fozzels gelten. Eine JavaScript- oder Managed Challenge auf Ihren API-Pfaden blockiert Fozzels immer.
-   Um festzustellen, was Fozzels blockiert, öffnen Sie **Security → Events** und filtern nach den Fozzels IP-Adressen. Bei jeder blockierten Anfrage sehen Sie, welche Regel oder Funktion gegriffen hat.

## 4. Pfade, die Fozzels erreichen muss

Fozzels ruft die Standard-API Ihrer Plattform auf. Blockieren oder schützen Sie diese Pfade nicht für die Fozzels IP-Adressen:

| Plattform | Pfade |
| --- | --- |
| Magento 2 | `/rest/` und `/graphql` |
| Shopware 6 | `/api/` (einschließlich `/api/oauth/token`) und `/store-api/` |
| WooCommerce | `/wp-json/` |

Fozzels lädt außerdem Ihre Produktbilder über deren Bild-URLs herunter. Ihre Medien- oder Bild-Domain (einschließlich eines CDN) muss daher ebenfalls für Fozzels erreichbar sein.

## 5. Weitere Hosting- und Firewall-Prüfungen

-   **Hosting-Firewall:** Viele Hosting-Anbieter betreiben eine eigene Firewall oder einen DDoS-Schutz vor Ihrem Server. Bitten Sie sie, die Fozzels IP-Adressen auch dort zuzulassen.
-   **ModSecurity / Imunify360 (Plesk, cPanel, DirectAdmin):** Diese Web Application Firewalls können API-Anfragen blockieren. Fügen Sie die Fozzels IP-Adressen zu deren Allowlist hinzu.
-   **fail2ban oder ähnliche Tools:** Stellen Sie sicher, dass die Fozzels IP-Adressen auf der Ignore-Liste stehen, damit eine Welle von Synchronisierungsanfragen nicht zu einer Sperre führt.
-   **Rate Limiting** in Ihrem Webserver (nginx, Apache), Load Balancer oder Sicherheits-Plugin: Nehmen Sie die Fozzels IP-Adressen und/oder den User-Agent aus.
-   **Sicherheits-Plugins** (zum Beispiel Wordfence oder Sucuri für WooCommerce): Setzen Sie die Fozzels IP-Adressen auf die Allowlist und blockieren Sie nicht den Zugriff auf die REST API.
-   **Länder- oder Geo-Blocking:** Die Fozzels-Plattform läuft in Deutschland. Wenn Sie Länder blockieren, stellen Sie sicher, dass die Fozzels IP-Adressen ausgenommen sind.
-   **Passwortgeschützte oder Staging-Shops:** Wenn Ihr Shop vor der API ein Passwort abfragt (HTTP Basic Authentication), nehmen Sie die Fozzels IP-Adressen von diesem Schutz aus.

## Checkliste

- [ ] `49.13.117.118` (IPv4) ist in jeder Firewall, WAF und jedem Sicherheits-Plugin zugelassen
- [ ] `2a01:4f8:c17:bb1e::/64` (IPv6-Bereich) ist ebenfalls zugelassen
- [ ] `91.205.205.66` ist zugelassen, damit unser Support-Team Ihre Verbindung testen kann
- [ ] Anfragen mit einem User-Agent, der `fozzels` enthält, werden weder blockiert noch begrenzt
- [ ] Cloudflare (falls verwendet): IP Access Rule oder Skip-Regel angelegt, keine Challenge für Fozzels, Bot Fight Mode geprüft
- [ ] Die API-Pfade Ihrer Plattform und Ihre Produktbild-URLs sind für Fozzels erreichbar
- [ ] Hosting-Firewall, ModSecurity, fail2ban und Rate Limiting enthalten die Fozzels-Ausnahmen
- [ ] Der Verbindungstest in Fozzels ist erfolgreich

## Funktioniert es immer noch nicht?

Kontaktieren Sie uns unter **[support@fozzels.com](mailto:support@fozzels.com)**. Bitte geben Sie Ihre Shop-URL, die genaue Fehlermeldung aus Fozzels, den Zeitpunkt des Fehlers und, falls Sie Cloudflare verwenden, die Ray ID oder den passenden Eintrag aus **Security → Events** an.
