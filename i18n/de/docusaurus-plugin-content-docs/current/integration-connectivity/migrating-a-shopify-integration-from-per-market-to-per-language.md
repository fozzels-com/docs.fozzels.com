---
title: 2.3.4. Eine Shopify-Integration von Per market auf Per language umstellen
sidebar_position: 5.5
slug: /integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language
description: >-
  So stellen Sie eine Shopify-Integration vom Markets-Modus Per market auf Per
  language um: Aktualisieren Sie die App-Scopes im Shopify Dev Dashboard und
  erstellen Sie die Integration in Fozzels dann neu oder wenden Sie sich an den
  Support.
---

Am saubersten gelingt der Wechsel von Per market zu Per language, wenn Sie die Scopes Ihrer Shopify-App aktualisieren und anschließend eine neue Fozzels-Integration mit dem Modus Per language erstellen. Wenn Sie bereits Flows haben, wenden Sie sich an den Fozzels-Support, statt selbst umzustellen.

## Bevor Sie beginnen

Diese Anleitung richtet sich an Kunden, deren Shopify-Integration den Modus **Per market** verwendet und die innerhalb einer Sprache keine marktspezifischen Inhalte benötigen. Mit **Per language** synchronisieren Sie eine Übersetzung pro Sprache, und Shopify wendet sie auf alle Märkte an, in denen diese Sprache veröffentlicht ist. Das bedeutet weniger Synchronisierungsvorgänge und geringere Kosten.

Prüfen Sie zuerst zwei Dinge.

**1. Hat Ihre App alle erforderlichen Scopes?** Per language benötigt Scopes, die ältere App-Versionen möglicherweise nicht haben, am häufigsten `read_publications`. Öffnen Sie Ihre App im Shopify Dev Dashboard, gehen Sie zu **Versions**, öffnen Sie die aktive Version und vergleichen Sie deren **Scopes** mit der Liste in Schritt 1. Fehlt etwas, führen Sie Schritt 1 aus. Sind alle Scopes vorhanden, springen Sie zu Schritt 2.

**2. Haben Sie in Fozzels bereits Flows?** Davon hängt ab, wie Sie den Modus wechseln.

| Ihre Situation | Vorgehen |
| --- | --- |
| Noch keine Flows | Bei Bedarf Schritt 1, dann Schritt 2, Option A: Integration archivieren und neu erstellen |
| Flows bereits erstellt | Bei Bedarf Schritt 1, dann an den Fozzels-Support wenden (Schritt 2, Option B) |

Warum nicht einfach den Modus in der bestehenden Integration umstellen? Beim Umstellen werden die alten marktbasierten Websites und Stores nicht entfernt. Sie bleiben als inaktiv in der Tabelle, markiert mit „Website is lost on integration", neben den neuen sprachbasierten. Flows, die an die alten Stores gebunden sind, laufen nicht mehr, und die Tabelle wird unübersichtlich.

![Nach dem Umstellen des Modus in der bestehenden Integration: alte Websites als verloren markiert, neben den neuen](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/01-old-websites-lost-after-mode-switch.png)

## Schritt 1. Shopify: die fehlenden Scopes hinzufügen

Sie benötigen keine neue App. Sie erstellen eine neue Version Ihrer bestehenden App mit den aktualisierten Scopes. Client ID und Secret bleiben gleich.

### 1.1. Eine neue Version erstellen

1. Melden Sie sich im Shopify Dev Dashboard an: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Öffnen Sie **Apps** und wählen Sie Ihre Fozzels-App.
3. Gehen Sie zu **Versions** und klicken Sie auf **Create version**. Die neue Version basiert auf Ihrer aktuell aktiven Version, sodass alle bestehenden Einstellungen übernommen werden.

![Seite Versions mit Create version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/02-versions-create-version.png)

![Version auf Basis der aktiven Version erstellen](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/03-create-version-from-active.png)

### 1.2. Die Scopes aktualisieren

Scrollen Sie nach unten zum Abschnitt **Access**. In älteren App-Versionen fehlt im Feld **Scopes** häufig `read_publications`. Hier ein Beispiel für eine unvollständige Liste:

![Vorher: Scopes ohne read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/04-scopes-before-without-read-publications.png)

Ersetzen Sie den Inhalt des Felds **Scopes** durch die vollständige Liste:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

Wenn Sie auch Gewichtsdaten synchronisieren möchten (die Option Inventory in Fozzels), fügen Sie am Ende der Liste `read_inventory` und `write_inventory` hinzu.

![Nachher: vollständige Scope-Liste einschließlich read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/05-scopes-after-full-list.png)

Lassen Sie alles andere unverändert: **Optional scopes** leer und **Use legacy install flow** deaktiviert.

### 1.3. Die Version veröffentlichen

1. Klicken Sie auf **Release** (oben rechts oder unten auf der Seite).
2. Geben Sie optional einen Versionsnamen ein, zum Beispiel `v2`, und klicken Sie zur Bestätigung auf **Release**.

Die neue Version wird **Active**.

![Pop-up „Release this new version"](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/06-release-new-version-pop-up.png)

### 1.4. Die neuen Berechtigungen in Ihrem Store genehmigen

Durch das Veröffentlichen einer Version erhält die App die neuen Berechtigungen noch nicht. Der Store-Inhaber muss sie genehmigen, indem er die App erneut installiert. Bis dahin funktioniert Per language nicht korrekt.

1. Öffnen Sie die Seite **Overview** der App und klicken Sie auf **Install app** oder öffnen Sie den Installationslink unter **Distribution**, wenn Sie Custom distribution verwenden.
2. Melden Sie sich bei Aufforderung mit dem Konto des Store-Inhabers an.
3. Prüfen Sie die Liste der Zugriffsrechte und bestätigen Sie die Installation.

## Schritt 2. Fozzels: auf Per language umstellen

### Option A: noch keine Flows — archivieren und neu erstellen

So erhalten Sie eine saubere Tabelle Websites & Stores, die nur die neuen sprachbasierten Websites enthält.

1. Kopieren Sie vorab den aktuellen **Api Key**, das **Api Secret** und den **App Host Name** aus dem Schritt Configuration der Integration oder entnehmen Sie Client ID und Secret im Shopify Dev Dashboard unter **App settings → Credentials**.
2. Öffnen Sie die aktuelle Integration und schalten Sie den Schalter **Active** aus.
3. Archivieren Sie die Integration.
4. Erstellen Sie eine neue Shopify-Integration: **Integrations → Shopify**, Verbindungsmethode **Custom App**.
5. Geben Sie dieselbe **URL**, denselben **Api Key**, dasselbe **Api Secret** und denselben **App Host Name** ein.
6. Wählen Sie unter **Markets mode** die Option **Per language**.
7. Legen Sie die optionalen Einstellungen fest, falls Sie sie zuvor verwendet haben (Inventory, Global Pull Schedule, Verzögerungen), und klicken Sie auf **Save**.
8. Schalten Sie **Active** ein und klicken Sie auf **Pull Websites and Stores**.
9. Schalten Sie **Status** für jede Website und ihren Store ein und klicken Sie dann auf **Pull products**.

![Neue Integration: Zugangsdaten und Markets-Modus auf Per language gesetzt](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/07-new-integration-per-language.png)

Eine vollständige Beschreibung aller Felder finden Sie in [2.3.2. Shopify-Stores über das Shopify Dev Dashboard mit Fozzels verbinden](/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026).

### Option B: Flows bereits erstellt — an den Support wenden

Wenden Sie sich an den Fozzels-Support, bevor Sie den Modus ändern. Wir helfen Ihnen bei der Umstellung, sodass Ihre Flows weiter funktionieren, und prüfen die Locale-Codes auf der Shopify-Seite, die sich bei der Umstellung ändern können.

## Nach der Umstellung

Im Modus Per language ist jede veröffentlichte Sprache eine eigene Website mit einem Store.

![Per language: eine Website mit einem Store pro Sprache](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/08-per-language-websites-and-stores.png)

- [ ] Die aktive App-Version in Shopify enthält `read_publications` und alle anderen erforderlichen Scopes
- [ ] Der Store-Inhaber hat die neuen Berechtigungen genehmigt (App erneut installiert)
- [ ] Die Integration verwendet **Per language**
- [ ] **Authorized** und **REST API Connected** sind grün
- [ ] Websites und Stores sind für die benötigten Sprachen aktiv
- [ ] Alle vier Abrufe (Product Attribute, Category Attribute, Category, Product) wurden mit 100 % abgeschlossen
- [ ] Die Flows sind auf den neuen Stores neu aufgebaut, oder der Support hat die Umstellung bestätigt (Option B)
