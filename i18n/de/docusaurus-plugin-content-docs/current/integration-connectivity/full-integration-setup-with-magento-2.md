---
id: '103000367853'
title: 2.2. Vollständige Integrationseinrichtung mit Magento 2.
sidebar_position: 2
slug: /integration-connectivity/full-integration-setup-with-magento-2
description: >-
  Diese Anleitung zeigt den Prozess zum Etablieren einer sicheren bidirektionalen Verbindung zwischen Ihrem Magento 2 Shop und Fozzels. Sie generieren die erforderlichen API-Tokens und konfigurieren Berechtigungen, um einen nahtlosen Produktdatenimport und Inhaltsexport zu gewährleisten
---

Diese Anleitung zeigt den Prozess zum Etablieren einer sicheren bidirektionalen Verbindung zwischen Ihrem Magento 2 Shop und Fozzels. Sie generieren die erforderlichen API-Tokens und konfigurieren Berechtigungen, um einen nahtlosen Produktdatenimport und Inhaltsexport zu gewährleisten.

Die Magento 2-Integration erfordert das Erstellen einer dedizierten neuen Integration im Magento-Admin-Panel, um vier wesentliche Schlüssel zu generieren: **Consumer Key**, **Consumer Secret**, **Access Token** und **Access Token Secret**. Wir konfigurieren auch das erforderliche Attribut `fozzels_completion_date` zur Verfolgung der Inhaltssynchronisierung.

## Teil 1: Magento 2-Einrichtung (Erstellen der Integration und Tokens)

Sie müssen eine neue Integration erstellen und spezifische Berechtigungen in Ihrem Magento-Admin-Panel definieren.

### Schritt 1: Erstellen Sie eine neue Integration

1. **Melden Sie sich** in Ihrem Magento-Admin-Panel an.

2. **Gehen Sie** zu **System** / **Integrationen**.

3. **Klicken** Sie auf die Schaltfläche **”Neue Integration hinzufügen”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gr4UpPbx41G2Oy6OOEdyCKol_ENow66ITg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/N7zrOrdp8o6CvLgUlZhpQuMcQs5r7OVmWw.png)

### Schritt 2: Integrationsinformationen ausfüllen

1. **Navigieren** Sie zur Registerkarte **Integrationsinformationen** (Grundeinstellungen).

2. **Füllen** Sie die erforderlichen Felder aus:
    2.1. **Geben** Sie Namen ein: Fozzels.
    2.2. **Geben** Sie E-Mail ein: info@fozzels.com.
    2.3. **Geben** Sie Ihr Magento-Admin-Passwort zur Bestätigung ein.

3. **Überspringen** Sie optionale Felder (Callback-URL, Identity-Link-URL).

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/EM4ivAqLXVniXYWdiyAMElpusFWgWjUgvQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/6vzO74ehADcyuIaahKWVOQtYVvHWVkD_vg.png)

### Schritt 3: API-Berechtigungen (Scopes) konfigurieren

1. **Klicken** Sie auf die Registerkarte **”API”**.

2. Wählen Sie im Dropdown-Menü **”Benutzerdefiniert”**.

3. **Markieren** Sie nur diese Kontrollkästchen (für Lese-/Schreibzugriff):
    3.1. **Katalog**: Kategorien, Bestand, Produkte, Attribute aktualisieren, Produktdesign bearbeiten.
    3.2. **Stores**: Einstellungen, Alle Stores.
    3.3. **Attribute**: Produkt, Attributsatz.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/QphCzWE1SkWWnk3rdvVZReWcdPfHny5hsQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/TXQWFfKyYyQlNwHODT_3OsVgEHngoyaPXg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/j3iFU0HffLd73Kzc_rQEt62o2oTsVpxF2g.png)

### Schritt 4: Integration speichern und aktivieren

1. **Klicken** Sie auf die Schaltfläche **”Speichern”** in der oberen rechten Ecke.

2. Suchen Sie auf der Seite “Integrationsliste” die neue Fozzels-Integration.

3. **Klicken** Sie auf den Link **”Aktivieren”**.

4. Überprüfen Sie auf der Seite “Aktivierungsdetails”, ob die richtigen APIs (aus Schritt 3) ausgewählt wurden, und **klicken** Sie auf **”Zulassen”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/_C1d9Jr1A4136F6oEoNWIM2R2fnU0SwdvA.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/cBnv6FpiV0647eqHlNbNHIyCXcA_kHEx5A.png)

### Schritt 5: API-Schlüssel kopieren und speichern

1. Nach dem Klicken auf “Zulassen” werden Sie **zur** Seite “Integrationstokens für Erweiterungen” **weitergeleitet**.

2. **Kopieren** und **speichern** Sie alle vier automatisch ausgefüllten Werte sicher:
    2.1. Consumer Key
    2.2. Consumer Secret
    2.3. Access Token
    2.4. Access Token Secret

3. **Klicken** Sie auf **”Fertig”**.

4. **Überprüfen** oder **bearbeiten** Sie Integrationsdetails später, indem Sie die Schaltfläche **”Bearbeiten”** auf der Seite “Integrationen” **drücken**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/NOrDSAhjlO7hXjU2J1fafMmXfcMy-Lypwg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/Pj-HIMnlhJNvqDzEYmDckrL3xvLalFhsfw.png)

##

## Teil 3: Fozzels-Aktivierung und Datensynchronisierung

### Schritt 6: API-Zugriff überprüfen

Bevor Sie Fozzels verbinden, stellen Sie sicher, dass Ihr Server:

**1. keine externen Anfragen an die Magento REST API blockiert.**

Wenn Ihr Server eine Firewall, WAF oder einen Sicherheitsdienst (Cloudflare, Sucuri usw.) konfiguriert hat, können diese eingehende Anfragen von Fozzels blockieren.

### Was tun:

1. Fordern Sie die aktuelle Liste der Fozzels IP-Adressen von **[support@fozzels.com](mailto:support@fozzels.com)** an.
    Zum Whitelisting können Sie die Fozzels IP-Adresse verwenden:
**49.13.117.118**

2. Leiten Sie diese Liste an Ihren Hosting-Anbieter oder Server-Administrator weiter, um sie der Whitelist hinzuzufügen.

Wenn dies nicht geschehen ist, erhalten Sie beim Erstellen der Integration in Fozzels einen Fehler **401 (Unauthorized)** und können die Verbindung nicht abschließen.

**2. begrenzt nicht die Anzahl der API-Anfragen vom User Agent: Fozzels.**
Der vollständige User Agent ist Mozilla/5.0 (Windows NT 10.0; Win64; x64; fozzels/5.1.2; +[https://app.fozzels.com/](https://app.fozzels.com/)) AppleWebKit/537.36 (KHTML, wie Gecko) Chrome/123.0.0.0 Safari/537.36

Während der Synchronisierung sendet Fozzels eine große Anzahl von Anfragen, besonders bei großen Produktkatalogen. Wenn Ihr Server strikte Limits für die Anzahl der Anfragen pro Minute oder Sekunde hat (Rate Limiting), werden einige davon abgelehnt.

### Was tun:

1. Kontaktieren Sie Ihren Hosting-Anbieter oder Server-Administrator.
2. Bitten Sie sie, das API-Anfrage-Limit zu erhöhen oder Fozzels IP-Adressen und/oder den Fozzels User Agent vom Rate Limiting auszuschließen.

Wenn dies nicht geschehen ist, erhalten Sie während des Produktabrufs einen Fehler **429 (Too Many Requests)** und die Produktsynchronisierung wird nicht abgeschlossen.

Nach Bestätigung der Änderungen können Sie mit dem Erstellen der Integration in Fozzels fortfahren.

### Schritt 8: Neue Integration in Fozzels erstellen

1. **Melden Sie sich** in Ihrem Fozzels-Konto an.

2. **Gehen Sie** zu **Integrationen**.

3. **Klicken** Sie auf **”Neue Integration erstellen”**.

4. **Wählen** Sie **”Magento”** aus den verfügbaren Optionen.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/M9c13tHfbMEfpo7QsFt_Q6DvUljm-1jM1Q.png)![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/UvSS02f-tz_5sjBViKw7tq0kWJRti5mSvA.png)

####

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/RrDkikq2qamOno3s8JmMIrJfno5S5gpIew.png)

####

### Schritt 9: Verbindungsdetails ausfüllen

Sie verwenden die Schlüssel aus Teil 1, um Fozzels zu verbinden und den Datenimport einzuleiten.

1. **Benennen** Sie Ihre Integration eindeutig.

2. **Geben Sie** die **URL** Ihrer Magento-Website ein.

3. **Füllen** Sie die vier Schlüssel, die in **Schritt 5** kopiert wurden, in die entsprechenden Felder ein.

4. **Klicken** Sie auf **”Speichern”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/o_z4KRc-z_zOvcPpPvDV5evmBRJNZO-4vQ.png)

### Schritt 10: Stores aktivieren und synchronisieren

1. **Schalten** Sie den Umschalter **’Aktiv’** in der oberen rechten Ecke **ein**. _Ohne dies funktioniert die Verbindung nicht._

2. **Navigieren** Sie zur Registerkarte **”Websites & Stores”**.

3. **Klicken** Sie auf die Schaltfläche **”Websites und Stores abrufen”**. Ihre Websites und Stores sollten jetzt angezeigt werden.

4. **Überprüfen** Sie, ob die Integration folgende Status hat: **Autorisiert: ja** und **REST API verbunden: ja**.

5. **Aktivieren** Sie die aktuellen Websites und Stores mit dem Umschalter zur weiteren Verwendung.

_![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/FvECiFfTlviQFFK2fJ8FF2Uoa9iBogloGg.png)_
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/d3dKR2OUZS7d-iiP2ptuZXFlu9JQKqz93A.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gjRG-nmFAybUytQo_B_QzBZew6ZY5FygNQ.png)

####

### Schritt 11: Produkte abrufen und überprüfen

1. **Klicken** Sie auf die Schaltfläche **”Produkte abrufen”**, um den Prozess zum Importieren Ihres Produktkatalogs zu starten.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/s372RDIQcyC9gZU1pE-mNmKjoV3tHwE2XQ.png)

2. **Warten** Sie, bis die Produkte geladen werden (der Fortschritt wird in der Fortschrittsleiste angezeigt).

3. **Gehen** Sie zur Registerkarte **”Attribute”**, um Ihre Synchronisierungsregeln zu konfigurieren.

4. **Lesen** Sie mehr über die Arbeit mit Produktattributen und das Anpassen von Datenfeldern [hier](https://fozzels.freshdesk.com/a/solutions/articles/103000368952).

[](https://fozzels.freshdesk.com/a/solutions/articles/103000368952)
