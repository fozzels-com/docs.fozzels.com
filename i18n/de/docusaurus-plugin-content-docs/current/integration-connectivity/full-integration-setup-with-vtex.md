---
id: '103000408453'
title: 2.8.2 Vollständige Integrationseinrichtung mit VTEX
sidebar_position: 19
slug: /integration-connectivity/full-integration-setup-with-vtex
description: 'Diese Anleitung bietet Schritt-für-Schritt-Anweisungen zur Integration Ihrer VTEX-Storefront mit Fozzels. Der Prozess umfasst zwei Hauptphasen: Generierung der erforderlichen API-Schlüssel im VTEX-Admin-Panel und Abschluss der Einrichtung in Fozzels'
---

Diese Anleitung bietet Schritt-für-Schritt-Anweisungen zur Integration Ihrer **VTEX**-Storefront mit **Fozzels**. Der Prozess umfasst zwei Hauptphasen: Generierung der erforderlichen API-Schlüssel im VTEX-Admin-Panel und Abschluss der Einrichtung in Fozzels.

## Teil 1. Einrichtung auf der VTEX-Seite

Um Fozzels zu ermöglichen, Ihre Katalogstruktur zu lesen und generierten Inhalt in Ihren Shop zurückzuschreiben, müssen Sie eine dedizierte Rolle mit spezifischen Berechtigungen erstellen und einen **Application Key** und **Application Token** generieren.

### Schritt 1. Erstellen Sie eine Rolle mit erforderlichen Berechtigungen

1. Melden Sie sich in Ihrem **VTEX Admin** Panel an.

2. Navigieren Sie zu **Account Settings** → **User Management** → **Roles**.

3. Klicken Sie auf **New Role**.

4. Weisen Sie der Rolle einen klaren Namen zu (z. B. `Fozzels Integration`).

5. Unter der Berechtigungsliste fügen Sie Zugriff für folgende Ressourcen hinzu:

- **Katalog (License Manager):**

- `Category` — Read / Write

- `Brand` — Read / Write

- `Product` — Read / Write

- `SKU` — Read / Write

- `Specification / Attributes` — Read / Write

- **CMS (falls für Medien/Bilder verwendet):**

- `Read` / `Write` Zugriff

6. Speichern Sie die neue Rolle.

### Schritt 2. Generieren Sie Application Key und Application Token

1. Navigieren Sie im Menü **Account Settings** zu **Account Management** → **Application Keys**.

2. Klicken Sie auf **Manage Keys** oder **Generate Key**.

3. Geben Sie ein erkennbares Label ein (z. B. `Fozzels Connector`).

4. Weisen Sie den in Schritt 1 erstellten Rollen (`Fozzels Integration`) diesem Schlüssel zu.

5. Das System generiert zwei Anmeldedaten:

- **Application Key** (bleibt in Ihrer Liste sichtbar).

- **Application Token** (**nur einmal** bei der Erstellung angezeigt).

6. **Wichtig:** Kopieren und speichern Sie den **Application Token** sofort an einem sicheren Ort. Sobald Sie das Modalfenster schließen, kann es nicht mehr abgerufen werden!

Benutzer können sich auch an die offizielle VTEX Knowledge Base wenden, um detaillierte Anweisungen zum Erstellen von Application Keys und Tokens zu erhalten:

- Portugiesisch: [https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave](https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave)
- Englisch: [https://help.vtex.com/docs/tutorials/generated-keys](https://help.vtex.com/docs/tutorials/generated-keys)
- Spanisch: [https://help.vtex.com/es/docs/tutorials/claves-generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas)

##
Teil 2. Einrichtung auf der Fozzels-Seite

Sobald Ihre API-Anmeldedaten bereit sind, richten Sie die Verbindung in Fozzels ein.

### Schritt 1. Erstellen Sie eine neue Integration

1. Melden Sie sich bei **Fozzels** an und öffnen Sie **Integrations** aus dem oberen Navigationsmenü.

2. Klicken Sie auf die grüne Schaltfläche **\+ Create**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/gr4ewlKqt8412XMEVryYBDav3OrTYjV3cA.png)

3. Wählen Sie **VTEX** aus der Liste der verfügbaren Integrationsplattformen.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/XhEgu0COlAJDugphXl_XiaSkCKfS7TXueg.png)

### Schritt 2. Geben Sie Konfigurationsdetails ein (Tab 1: Configuration)

Füllen Sie das Verbindungsformular aus:

- **Name:** Geben Sie einen Namen für diese Integration ein (z. B. `VTEX Main Store`).

- **URL:** Geben Sie Ihre VTEX Store URL/Domain ein.

- **Application Key:** Fügen Sie den in VTEX generierten Application Key ein.

- **Application Token:** Fügen Sie den in VTEX generierten Application Token ein.

- **Environment** _(optional)_: Standardmäßig `vtexcommercestable`. Ändern Sie dies nur, wenn VTEX Sie angewiesen hat, eine benutzerdefinierte Umgebung zu verwenden.

- **Translation locales** _(optional)_: Geben Sie für Cross-Border-Konten kommagetrennte VTEX-Locales an (z. B. `es-AR, en-US`). Lassen Sie dies für einsprachige Shops leer.

- **Global Pull Schedule** _(optional)_: Legen Sie einen benutzerdefinierten automatisierten Abrufplan fest oder behalten Sie die Standardeinstellungen bei.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pWrF-JFfW_Q5FelNCSz3IuA9l86yXEdItw.png)

- **Pull Throttling / API Delays** _(optional)_:

- **Delay between pages:** Legen Sie eine Pausendauer nach jedem abgerufenen Seitenergebnis während eines Abrufs fest (`100–15,000 ms`). Lassen Sie dies leer, um die Standardeinstellung der Plattform zu verwenden.

- **Delay between requests:** Legen Sie eine Pausendauer zwischen einzelnen API-Aufrufen während eines Abrufs fest (`100–15,000 ms`). Lassen Sie dies leer, um die Standardeinstellung der Plattform zu verwenden.

- ⚠️ **Hinweis:** Das Festlegen dieser Werte unter den Plattformstandards kann zu Rate Limiting von VTEX führen und Katalogabzüge zum Fehlschlag führen.

Klicken Sie auf **Speichern** in der unteren linken Ecke.

### Schritt 3. Status überprüfen und Stores abrufen (Tab 2: Websites & Stores)

1. Stellen Sie sicher, dass alle Statusindikatoren in der oberen rechten Ecke aktiv sind:

- **Active** — Enabled (grüner Umschalter).

- **Authorized** — Grüner Häkchen.

    - **REST API Connected** — Grüner Häkchen.
        ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/RnG46ot4A8YtvTAhatBAQIynkoXI8pbdJQ.png)

2. Klicken Sie auf die Schaltfläche **PULL WEBSITES AND STORES** in der unteren linken Ecke.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pywm-NKYAWTD0xkGPKQYZPH5WI5LKQCwIw.png)

3. Ihre Websites und Shop-Locales werden in der Tabelle angezeigt. Schalten Sie die Umschalter **Status** für die Websites und Shops, die Sie verarbeiten möchten, auf aktiv.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/Nv3b_PjszS4fHUfa_V2atIDZe_Sx838pAA.png)

### Schritt 4. Katalogdaten abrufen (Produkte abrufen)

1. Suchen Sie Ihren Shop in der Tabelle und klicken Sie auf **Pull products** (oder klicken Sie auf den Dropdown-Pfeil daneben).

2. Sie können die Datensynchronisierung für bestimmte Entitäten auslösen oder sie sequenziell ausführen:

- **Product Attribute**

- **Category Attribute**

- **Brand Attribute**

- **Category**

- **Brand**

    - **Product**
**![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/A-WrFZksz5q1Ml-MXGaobf-Sn_rKBjsNEA.png)**

3. Warten Sie, bis die Synchronisierung abgeschlossen ist. Der Status jeder Entität wird grün und zeigt **100%** an.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/NamLSz4d9IyB6p3k94ULepvi0njfq465sQ.png)

4. Klicken Sie auf das Augensymbol (**View**) neben einem Entitätsblock, um die abgerufenen Daten zu überprüfen.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/e6KLPc8LFKplzkHemoeoNUVVG1SLMjnF7w.png)

Glückwunsch! Ihre **VTEX**-Integration ist jetzt vollständig eingerichtet und einsatzbereit. Fozzels wird jetzt Ihre Katalogdaten nahtlos synchronisieren, so dass Sie hochwertige KI-Produktbeschreibungen, lokalisierte Inhalte und Metadaten mit Leichtigkeit generieren können. Wenn Sie später Anpassungen vornehmen müssen, können Sie jederzeit zur Seite "Integration Settings" zurückkehren.

Viel Erfolg bei der Automatisierung!
