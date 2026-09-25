---
id: '103000385597'
title: 2.3.2. Shopify-Stores über das Shopify Dev Dashboard mit Fozzels verbinden
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  Seit dem 1. Januar 2026 werden Shopify-Stores über das Shopify Dev Dashboard
  verbunden. So erstellen und installieren Sie die App in Shopify und verbinden
  sie Schritt für Schritt in Fozzels.
---

Seit dem 1. Januar 2026 können Sie in Shopify keine Private Apps mehr im Store-Admin erstellen. Neue Verbindungen und Aktualisierungen bestehender Integrationen werden über das Shopify Dev Dashboard eingerichtet. Diese Anleitung führt Sie durch beide Seiten: das Erstellen und Installieren der App in Shopify (Teil 1) und das Verbinden in Fozzels (Teil 2).

## Bevor Sie beginnen: Ihre .myshopify.com-Domain finden

Fozzels benötigt die .myshopify.com-Adresse Ihres Stores, nicht Ihre öffentliche Store-Domain (etwa www.yourbrand.com). Diese Adresse wurde beim Erstellen des Stores vergeben und kann nicht geändert werden. Sie kann daher von Ihrem Markennamen abweichen.

Sie finden sie an drei Stellen im Shopify-Admin:

1. **Seitenleiste der Einstellungen:** Öffnen Sie **Settings**. Ihre .myshopify.com-Domain wird oben in der Seitenleiste unter dem Store-Namen angezeigt.
2. **Settings → Domains:** Auf der Seite Domains sind alle Ihre Domains aufgeführt. Verwenden Sie die Domain, die auf .myshopify.com endet, auch wenn sie nicht als **Primary** markiert ist.
3. **Adressleiste des Browsers:** Im Admin sieht die URL etwa so aus: `https://admin.shopify.com/store/your-store`. Nehmen Sie den Teil nach `/store/` und hängen Sie `.myshopify.com` an: `your-store.myshopify.com`.

![Settings → Domains: die .myshopify.com-Domain in der Seitenleiste und in der Liste](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/01-settings-domains-myshopify-domain.png)

Sie verwenden diese Domain in zwei Formaten:

| Wo | Format |
| --- | --- |
| App URL (Shopify), URL (Fozzels) | `https://your-store.myshopify.com` |
| Store domain (Shopify-Distribution), App Host Name (Fozzels) | `your-store.myshopify.com` |

## Teil 1. Shopify: die App erstellen

### 1. Die App erstellen

1. Melden Sie sich im Shopify Dev Dashboard an: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Öffnen Sie **Apps** in der linken Seitenleiste und klicken Sie oben rechts auf **Create app**. Je nach Kontotyp kann die Oberfläche leicht abweichen. Wenn Sie die Schaltfläche nicht sehen, scrollen Sie ans Ende der Seite und klicken Sie auf den Link **Create app**.
3. Geben Sie unter **Start from Dev Dashboard** (der Option rechts) einen App-Namen ein, zum Beispiel `Fozzels_APP`, und klicken Sie auf **Create app**. Mit dieser Option erhalten Sie API-Zugangsdaten, ohne die Kommandozeile zu verwenden.

![Dev Dashboard: Apps und Create app](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/02-dev-dashboard-apps-create-app.png)

![App erstellen: Start from Dev Dashboard](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/03-start-from-dev-dashboard.png)

### 2. Die Version konfigurieren

Nachdem Sie die App erstellt haben, gelangen Sie auf die Seite **Create version**. Shopify hat bereits eine erste Version angelegt (zum Beispiel `fozzels_app-1`). Ihre Einstellungen werden als neue Version auf dieser Grundlage veröffentlicht.

1. **App name:** Behalten Sie den Namen bei oder ändern Sie ihn.
2. **App URL:** Geben Sie Ihre Store-URL mit https ein, zum Beispiel `https://your-store.myshopify.com`.
3. **Embed app in Shopify admin:** muss aktiviert sein. Damit wird die Fozzels-Oberfläche in Ihrem Shopify-Admin angezeigt.
4. **Webhooks API version:** Wählen Sie die neueste angebotene stabile Version.

![Create version: App URL, Embed app in Shopify admin, Webhooks API version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/04-create-version-app-url-and-embed.png)

### 3. Die Scopes hinzufügen

Scrollen Sie nach unten zum Abschnitt **Access**. Fügen Sie die folgende Liste in das Feld **Scopes** ein oder klicken Sie auf **Select scopes** und suchen Sie jede Berechtigung über die Suchleiste.

Erforderliche Scopes, bereit zum Kopieren und Einfügen:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

| Gruppe | Scopes |
| --- | --- |
| Produkte | `read_product_listings`, `read_products`, `write_products`, `read_product_feeds` |
| Metadaten | `read_metaobject_definitions`, `read_metaobjects` |
| Übersetzungen | `read_translations`, `write_translations`, `read_publications` |
| Gebietsschemas | `read_locales` |
| Märkte | `read_markets`, `write_markets` |

Diese Scopes sind für alle Store-Typen erforderlich, auch für Stores mit Shopify Markets und mehreren Sprachen.

**Möchten Sie Gewichtsdaten synchronisieren?** Fügen Sie dann jetzt auch `read_inventory` und `write_inventory` hinzu. Sie werden nur für die optionale Inventory-Einstellung in Fozzels (Schritt 10) benötigt, aber wenn Sie sie jetzt hinzufügen, müssen Sie später keine neue App-Version erstellen. Vollständige Liste einschließlich Inventory:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications,read_inventory,write_inventory
```

Lassen Sie den Rest des Abschnitts unverändert:

- **Optional scopes:** leer lassen.
- **Use legacy install flow:** nicht aktivieren.
- **Allowed redirection URL(s):** leer lassen.

Der Hinweis „Some scopes require Shopify permission" betrifft die von Fozzels benötigten Scopes nicht. Sie müssen also keinen Zugriff beantragen.

![Access: alle 12 erforderlichen Scopes](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/05-access-required-scopes.png)

### 4. Die Version veröffentlichen

1. Klicken Sie auf **Release**. Die Schaltfläche finden Sie sowohl oben rechts als auch unten auf der Seite.
2. Geben Sie im Pop-up optional einen **Version name** (zum Beispiel `v1`) und eine **Version message** ein. Wenn Sie den Namen leer lassen, erzeugt Shopify einen.
3. Klicken Sie zur Bestätigung auf **Release**.

Die neue Version erscheint auf der Seite **Versions** mit dem Status **Active**.

![Pop-up „Release this new version"](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/06-release-new-version-pop-up.png)

![Versions: v1 Active](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/07-versions-v1-active.png)

### 5. Die App in Ihrem Store installieren

Die Installationsschritte hängen von Ihrem Shopify-Kontotyp ab. Öffnen Sie zunächst die Seite **Overview** Ihrer App, indem Sie in der linken Seitenleiste auf den App-Namen klicken.

![App-Übersicht: Installs und Distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/08-app-overview-installs-and-distribution.png)

#### Option A: ein einzelner Store (kein Partner-Konto)

1. Klicken Sie im Block **Installs** auf **Install app**.
2. Melden Sie sich bei Aufforderung mit der **E-Mail-Adresse des Store-Inhabers** an. Nur der Store-Inhaber kann die Installation genehmigen.
3. Prüfen Sie auf der Seite **Install app** in Ihrem Store-Admin die Liste der Zugriffsrechte und klicken Sie auf **Install**.

Sie müssen keine Distribution konfigurieren. Fahren Sie mit Schritt 6 fort.

#### Option B: ein Partner-Konto oder mehrere Stores

Sie richten zunächst eine **Custom distribution** ein, um einen Installationslink für einen bestimmten Store zu erzeugen.

1. Klicken Sie im Block **Distribution** auf **Select distribution method**. Dadurch wird die App in **Shopify Partners** geöffnet, einer separaten Oberfläche.
2. Wählen Sie **Custom distribution** und klicken Sie auf **Select**.
3. Bestätigen Sie mit **Select custom distribution**.

> **Achtung:** Die Wahl von Custom distribution lässt sich nicht rückgängig machen. Die App kann danach nur in einem Store oder innerhalb einer Plus-Organisation installiert werden.

![Shopify Partners: Distributionsmethoden](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/09-partners-distribution-methods.png)

![Custom distribution ausgewählt](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/10-custom-distribution-selected.png)

![Bestätigung „Select custom distribution"](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/11-select-custom-distribution-confirmation.png)

4. Geben Sie unter **Store domain** Ihre Store-Domain im Format `your-store.myshopify.com` ein.
5. Lassen Sie **Allow multi-store install for one Plus organization** deaktiviert.
6. Klicken Sie auf **Generate link** und bestätigen Sie.

> **Achtung:** Auch diese Bestätigung lässt sich nicht rückgängig machen. Die App kann dann nur in dem eingegebenen Store installiert werden.

![Custom distribution: Store domain](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/12-custom-distribution-store-domain.png)

![Bestätigung „Generate link for single store install"](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/13-generate-link-confirmation.png)

7. Shopify zeigt den **Install link** an. Klicken Sie auf **Copy**.
8. Öffnen Sie den Link in einem Browser, in dem Sie im Store-Admin angemeldet sind, oder senden Sie ihn an den Store-Inhaber. Das ist praktisch für Agenturen: Der Store-Inhaber kann die Installation selbst abschließen.
9. Prüfen Sie auf der Seite **Install app**, dass **This app is exclusive to your store** angezeigt wird, sehen Sie sich die Liste der Zugriffsrechte an und klicken Sie auf **Install**.

![Install link mit Copy](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/14-install-link-copy.png)

![Seite „Install app" im Store-Admin](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/15-install-app-in-store-admin.png)

Der Text unter „This app is exclusive to your store" hängt vom Store-Typ ab und kann vom Screenshot abweichen. Die Liste der Zugriffsrechte sollte **Products, custom data, other data** enthalten. Wenn Sie nur Products sehen, fehlen Scopes: Gehen Sie zurück zu Schritt 3.

Nach der Installation erscheint die App in der Seitenleiste Ihres Store-Admins unter **Apps**.

### 6. Die API-Zugangsdaten kopieren

1. Öffnen Sie im Dev Dashboard in der linken Seitenleiste Ihrer App **App settings**.
2. Kopieren Sie im Block **Credentials** die **Client ID**.
3. Klicken Sie auf das Augensymbol neben **Secret**, um es anzuzeigen, und kopieren Sie es.

Sie fügen beide Werte in Schritt 8 in Fozzels ein.

![App settings: Credentials](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/16-app-settings-credentials.png)

> **Achtung:** Klicken Sie nur dann auf **Rotate**, wenn es nötig ist. Dadurch wird ein neues Secret erzeugt, und das alte funktioniert sofort nicht mehr. Ihre Fozzels-Verbindung ist dann unterbrochen, bis Sie das Secret in Fozzels aktualisieren.

Bewahren Sie die Zugangsdaten sicher auf, zum Beispiel in einem Passwort-Manager. Versenden Sie sie nicht per E-Mail oder Chat: Das Secret gewährt Zugriff auf die Produkte und Übersetzungen Ihres Stores.

## Teil 2. Fozzels: den Store verbinden

### 7. Die Integration erstellen

1. Melden Sie sich unter [https://app.fozzels.com](https://app.fozzels.com) bei Fozzels an und öffnen Sie **Integrations** in der linken Seitenleiste.
2. Wählen Sie auf dem Bildschirm **Choose your integration** die Option **Shopify**.
3. Füllen Sie im Schritt **Configuration** Folgendes aus:
    - **Name:** ein beliebiger Name, an dem Sie die Integration erkennen.
    - **URL:** die .myshopify.com-Adresse Ihres Stores mit https, zum Beispiel `https://your-store.myshopify.com`. Verwenden Sie nicht Ihre eigene Domain.
4. Wählen Sie unter **Connection Method** die Option **Custom App**.

![Fozzels: Choose your integration](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/17-fozzels-choose-your-integration.png)

![Create New Integration: Configuration und Custom App](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/18-fozzels-configuration-custom-app.png)

Die anderen Verbindungsmethoden: **Fozzels Shopify App (OAuth)** verbindet über die offizielle Fozzels-App, ohne dass Sie eine eigene App erstellen müssen (siehe [2.3.1. Fozzels Shopify App — Erste Schritte](/integration-connectivity/fozzels-shopify-app-getting-started)). **Legacy (Manual)** ist für Verbindungen gedacht, die auf die alte Weise eingerichtet wurden.

### 8. Die API-Zugangsdaten eingeben

| Fozzels-Feld | Was Sie eingeben |
| --- | --- |
| Api Key | Client ID aus Schritt 6 |
| Api Secret | Secret aus Schritt 6 |
| App Host Name | `your-store.myshopify.com`, ohne https |

Sie benötigen kein Access Token: Fozzels erzeugt es automatisch.

### 9. Den Markets-Modus wählen

Der Markets-Modus legt fest, wie Inhalte auf Ihre Shopify-Märkte und -Sprachen verteilt werden. Wählen Sie ihn sorgfältig: Ein späterer Wechsel ist kein einfaches Umschalten (siehe [Markets-Modus später ändern?](#need-to-change-the-markets-mode-later) am Ende dieser Anleitung).

**Weg 1: Übersetzungen.** Sie benötigen für alle Märkte mit derselben Sprache dieselben Inhalte, übersetzt in jede veröffentlichte Sprache. Wählen Sie **Per language** oder **No markets** für die einfachste Einrichtung mit nur einer Website.

**Weg 2: Eigene Inhalte pro Markt und Sprache.** Sie benötigen für jeden Markt unterschiedliche Inhalte, auch innerhalb derselben Sprache, zum Beispiel unterschiedliche Marketing-Schwerpunkte je Region. Wählen Sie **Per market**.

| Modus | Was zur Website wird | Was synchronisiert wird |
| --- | --- | --- |
| No markets | Eine Website, mit einem Store pro veröffentlichter Sprache | Eine Übersetzung pro Sprache, Märkte werden ignoriert |
| Per market | Jeder Shopify-Markt, mit einem Store pro Sprache | Jede Kombination aus Markt und Sprache separat |
| Per language | Jede veröffentlichte Sprache | Eine Übersetzung pro Sprache, die Shopify auf alle Märkte mit dieser Sprache anwendet |

Sie verwenden LangShop? Es funktioniert nur mit **No markets** und **Per language**.

![API-Zugangsdaten und Markets-Modus](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/19-fozzels-api-credentials-and-markets-mode.png)

### 10. Optionale Einstellungen

Wenn Sie nicht sicher sind, ob Sie diese Einstellungen benötigen, behalten Sie die Standardwerte bei.

**Inventory.** Aktivieren Sie diesen Schalter, um die Gewichtsdaten der ersten Produktvariante zu synchronisieren. Fozzels ruft zwei zusätzliche Attribute ab, **Weight** und **Weight Unit** (beide vom Typ Auswahl), und kann sie zurück an Shopify übertragen.

> **Achtung:** Inventory erfordert die Scopes `read_inventory` und `write_inventory`. Wenn Sie diese in Schritt 3 nicht hinzugefügt haben, erstellen Sie eine neue App-Version mit diesen Scopes, veröffentlichen Sie sie und installieren Sie die App erneut, bevor Sie Inventory aktivieren. Ist der Schalter ohne diese Scopes aktiviert, kann Fozzels überhaupt keine Produkte lesen.

**Global Pull Schedule.** Standardmäßig ruft Fozzels die Produkte aller aktiven Stores der Integration um 02:30 Uhr ab. Um für die gesamte Integration eine andere Uhrzeit festzulegen, aktivieren Sie **Overwrite Global Pull Schedule** und wählen Sie die Uhrzeit. Ein einzelner Store kann in seinen eigenen Einstellungen einen eigenen Zeitplan haben. Mehr dazu erfahren Sie in [3.1.2 Konfigurieren des globalen Pull-Zeitplans & API-Drosselung](/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling).

**Delay between pages und Delay between requests.** Verwenden Sie diese Einstellungen nur, wenn Abrufe wegen der Rate Limits der Shopify-API fehlschlagen. Lassen Sie die Felder leer, um die Standardwerte der Plattform zu verwenden.

| Feld | Funktion | Bereich | Shopify-Standardwert |
| --- | --- | --- | --- |
| Delay between pages | Pause nach jeder Ergebnisseite | 100–15000 ms | 2000 ms |
| Delay between requests | Pause zwischen einzelnen API-Anfragen | 100–15000 ms | keiner |

Werte unterhalb der Standardwerte können Rate Limiting auslösen und dazu führen, dass Abrufe fehlschlagen.

![Optionen: Inventory, Global Pull Schedule, Verzögerungen und Save](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/20-fozzels-optional-settings.png)

### 11. Speichern

Klicken Sie unten auf der Seite auf **Save**.

### 12. Die Integration aktivieren und Websites und Stores abrufen

Nachdem Sie auf **Save** geklickt haben, zeigt Fozzels „Integration was created successfully" an und öffnet den Schritt **Websites & Stores**. Das Statusfeld oben rechts zeigt **Active** ausgeschaltet, **Authorized** rot und **REST API Connected** mit einer Warnung. Das ist in diesem Stadium zu erwarten.

1. Schalten Sie oben rechts den Schalter **Active** ein. Fozzels autorisiert sich bei Shopify und erzeugt das Access Token.
2. Klicken Sie auf **Pull Websites and Stores**.

**Authorized** und **REST API Connected** sollten jetzt grün werden.

![Nach Save: Statusfeld und Pull Websites and Stores](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/21-fozzels-status-after-save.png)

Wenn **Authorized** rot bleibt, prüfen Sie, ob die App in Ihrem Store installiert ist (Schritt 5), ob Api Key und Api Secret mit Client ID und Secret übereinstimmen und ob App Host Name Ihr .myshopify.com-Hostname ohne https ist.

### 13. Websites und Stores aktivieren

Die Tabelle zeigt jetzt Ihre Websites und deren Stores. Die Struktur hängt vom Markets-Modus aus Schritt 9 ab. Im Modus **Per language** ist jede veröffentlichte Sprache eine eigene Website mit einem Store.

Ein Stern neben einer Website kennzeichnet die Standard-Website. Ein Stern neben einem Store kennzeichnet den Standard-Store dieser Website.

Schalten Sie für jede Website, mit der Sie arbeiten möchten, **beide** Schalter ein: **Status** im Bereich Websites und **Status** im Bereich Stores. **Pull products** ist erst verfügbar, wenn beide eingeschaltet sind.

![Tabelle Websites & Stores nach dem Abruf](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/22-fozzels-websites-and-stores-table.png)

### 14. Produkte abrufen

1. Klicken Sie in der Zeile eines aktiven Stores auf **Pull products**. Fozzels startet vier Abrufe gleichzeitig: **Product Attribute**, **Category Attribute**, **Category** und **Product**.
2. Um jeden einzelnen zu verfolgen, klicken Sie auf den Pfeil neben dem Fortschrittsbalken.
3. Wenn alle vier Fortschrittsbalken grün bei 100 % stehen, ist der Abruf abgeschlossen. Die Spalte **Products** zeigt die Anzahl der abgerufenen Produkte.

![Abruffortschritt: vier Abrufe bei 100 %](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/23-fozzels-pull-progress.png)

**Ihre Shopify-Verbindung ist bereit.** Sie können jetzt Flows aufbauen und Ihre ersten Inhalte generieren.

Nach dem ersten Abruf stehen im Schritt Websites & Stores die **Product Pull Conditions** zur Verfügung. Damit filtern Sie, welche Produkte importiert werden. Dies wird in einem separaten Artikel behandelt.

## Markets-Modus später ändern? {#need-to-change-the-markets-mode-later}

Ein Wechsel des Markets-Modus, egal in welche Richtung, entfernt die alten Websites und Stores nicht. Sie bleiben in der Tabelle Websites & Stores als inaktiv stehen, markiert mit „Website is lost on integration", neben den neuen, die automatisch erstellt und aktiviert werden. Flows, die an die alten Stores gebunden sind, laufen nicht mehr.

![Nach dem Wechsel von Per language zu Per market: alte Websites inaktiv neben den neuen](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/24-old-websites-lost-after-mode-switch.png)

- **Noch keine Flows erstellt:** Beginnen Sie für eine saubere Tabelle neu. Deaktivieren Sie die aktuelle Integration, archivieren Sie sie und erstellen Sie eine neue Integration mit demselben Api Key, Api Secret und App Host Name und dem richtigen Markets-Modus. Sie benötigen keine neue App in Shopify.
- **Flows bereits erstellt:** Wenden Sie sich an den Fozzels-Support, bevor Sie den Modus ändern. Wir helfen Ihnen beim Wechsel, ohne dass Ihre Arbeit verloren geht.

Da sich der Locale-Code auf der Shopify-Seite ändern kann, empfehlen wir, den Modus in jedem Fall über den Fozzels-Support zu ändern.

Sie wechseln speziell von Per market zu Per language? Siehe [2.3.4. Eine Shopify-Integration von Per market auf Per language umstellen](/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language).
