---
title: Integrationen — Übersicht, Einrichtung, Attribut-Flags und Diagnose
sidebar_position: 21
slug: >-
  /integration-connectivity/integrations-overview-setup-attribute-flags-and-diagnostics
description: >-
  Eine Integration ist eine sichere Verbindung zwischen Fozzels und Ihrem
  E-Commerce-Shop oder PIM-System. Dieser Leitfaden behandelt unterstützte
  Plattformen, Einrichtungsschritte, Attribut-Flags, Pull-Zeitpläne,
  plattformspezifische Notizen und die vollständige WooCommerce-Diagnose-Referenz.
---

Eine Integration ist eine sichere Verbindung zwischen Fozzels und Ihrem E-Commerce-Shop oder PIM-System. Nach dem Verbinden kann Fozzels Ihre Produktdaten abrufen und KI-generierte Inhalte zurück an Ihren Shop senden.

## Unterstützte Plattformen

- **Shopify** — vollständige Unterstützung einschließlich Shopify Markets (mehrsprachig)
- **Magento 2** — einschließlich Multi-Website- und Multi-Store-Setups
- **WooCommerce** — über REST API
- **Shopware 6**
- **Lightspeed**
- **Akeneo** — PIM-System
- **Katana PIM**
- **BizzLayer**
- **EK Retail**
- **NextChapter**
- **StoreInfo Catalog XML**

## Integrations-Hierarchie

Integration → Website(s) → Shop(s) → Produkte & Attribute

Jede Integration kann mehrere Websites enthalten, und jede Website kann mehrere Shops enthalten (z. B. verschiedene Sprachen oder Regionen).

---

## Einrichtung einer Integration

### Schritt 1 — Integration erstellen

- Gehen Sie zu [Integrations](https://app.fozzels.com/integrations/definitions)
- Klicken Sie auf **Add Integration** und wählen Sie Ihre Plattform
- Geben Sie einen Namen, Ihre Shop-URL und Plattform-Anmeldedaten ein
- Speichern — Fozzels validiert die Verbindung

### Schritt 2 — Websites und Shops synchronisieren

- Nach dem Speichern klicken Sie auf **Synchronisieren**, um die Liste der Websites und Shops von Ihrer Plattform abzurufen
- Aktivieren Sie die Websites und Shops, mit denen Sie arbeiten möchten
- Hinweis: Das Aktivieren von Shops zählt gegen Ihr Plan-Kontingent

### Schritt 3 — Produkte abrufen

- Sobald Shops aktiv sind, lösen Sie einen **Produkt-Pull** aus
- Fozzels importiert alle Produkte mit ihren Attributen und Bildern
- Sie können den Pull-Fortschritt in Echtzeit überwachen (zeigt verarbeitete Elemente / gesamt)

### Schritt 4 — Attribute konfigurieren

- Gehen Sie zur Registerkarte **Attribute** Ihrer Integration
- Aktivieren Sie die Attribute, die Sie verwenden möchten
- Setzen Sie das Flag **Filterable** auf Attribute, nach denen Sie Produkte filtern oder als Eingabe in Flows verwenden möchten
- Setzen Sie das Flag **Mutable** auf Attribute, in denen KI-generierte Inhalte geschrieben werden

---

## Erklärung der Attribut-Flags

| Flag | Was es tut |
|------|-------------|
| **Filterable** | Attribut wird im Katalog-Filter angezeigt und kann als Eingabe in Flow-Eingabeaufforderungen (`{{attribute_code}}`) verwendet werden |
| **Mutable** | Fozzels kann KI-generierte Inhalte in dieses Attribut schreiben (erforderlich für Flow-Ausgabe) |
| **Enabled** | Attribut ist aktiv und sichtbar in Fozzels |
| **HTML-able** | Erlaubt HTML-Inhalte in diesem Attribut (nur Text/Textarea-Typen) |

> Wenn Sie ein Attribut nicht als Flow-Ziel auswählen können — überprüfen Sie, dass es das Flag **Mutable** aktiviert hat.
>
> Wenn ein Attribut nicht im Katalog-Filter oder in der Flow-Eingabeaufforderung angezeigt wird — überprüfen Sie, dass es das Flag **Filterable** aktiviert hat.

---

## Pull-Zeitplan

Fozzels kann automatisch Produkte abrufen und Flows nach einem Zeitplan ausführen:

1. Produkt-Pull — ruft neueste Produktdaten aus Ihrem Shop ab
2. Flow-Synchronisierung — gleicht Produkte mit aktiven Flows ab
3. Attribut-Aktualisierung — aktualisiert Attributwerte
4. KI-Generierung — generiert Inhalte
5. Datenexport — sendet Inhalte an Ihren Shop

Sie können pro Integration oder pro Shop eine benutzerdefinierte Pull-Zeit festlegen (Format: `HH:MM`, z. B. `14:00`). Wenn nicht gesetzt, wird das System-Standard (00:30 UTC) verwendet.

Um Ihre Zeitzone zu ändern, gehen Sie zu [Einstellungen → Profil](https://app.fozzels.com/user/settings/profile).

---

## Integrations-Status

| Status | Bedeutung |
|--------|---------|
| **Active** | Integration ist aktiviert und verarbeitet Daten |
| **Authorized** | Anmeldedaten sind gültig (nur Shopify) |
| **REST API Connected** | Live-Verbindungsprüfung bestanden |

> Die Integration muss **aktiv** sein, damit Abrufe oder Sendet funktionieren.

---

## Plattformspezifische Einrichtung

### Shopify

1. Gehen Sie in Shopify Admin zu: Einstellungen → Apps → Apps entwickeln → App erstellen
2. Erforderliche API-Scopes: `read_product_listings`, `read_products`, `write_products`, `read_metaobject_definitions`, `read_metaobjects`, `read_product_feeds`
3. Für Shopify Markets (mehrsprachig) fügen Sie auch hinzu: `write_translations`, `read_translations`, `write_markets`, `read_markets`, `read_locales`
4. In Fozzels geben Sie ein: API-Schlüssel, API-Geheimnis und Ihre `.myshopify.com`-URL
5. Integrations-Status muss **Authorized: yes** AND **REST API Connected: yes** anzeigen

### Magento 2

1. Gehen Sie in Magento Admin zu: System → Integrationen → Integration hinzufügen
2. Kopieren Sie: Consumer Key, Consumer Secret, Access Token, Access Token Secret
3. Geben Sie auch den `admin_front_name` ein (normalerweise `admin`)
4. **Wichtig:** Fügen Sie manuell das Attribut `fozzels_completion_date` zu ALLEN Attribute Sets in Magento Admin hinzu (Katalog → Attribute → Attribute Sets). Fozzels kann dies nicht automatisch tun, da Magento mehrere Attribute Sets pro Shop unterstützt.
5. Nach dem Speichern: Integration aktivieren → Websites/Shops synchronisieren → Produkte abrufen

### WooCommerce

- Generieren Sie einen REST-API-Schlüssel in WooCommerce → Einstellungen → Erweitert → REST API
- Erforderliche Berechtigungen: Lesen/Schreiben
- Geben Sie Consumer Key und Consumer Secret in Fozzels ein

#### WooCommerce optionale Plugin-Integrationen

WooCommerce-Integrationen unterstützen vier optionale Plugin-Flags. Jede erfordert zusätzliche WordPress-Plugins, die installiert werden sollen.

**ACF (Advanced Custom Fields)**

- Aktivieren mit: "Enable ACF (Advanced Custom Fields)"-Umschalter in Fozzels-Integrations-Einstellungen
- Erforderliche WordPress-Plugins: "Advanced Custom Fields" UND "ACF to REST API"
- Was es tut: Ruft benutzerdefinierte Produktfelder, die in ACF definiert sind, in Fozzels als Attribute ab (Präfix `acf_`)
- Zurückschreiben: ACF-Werte werden über WooCommerce `meta_data`-Endpunkt geschrieben

**Yoast SEO**

- Aktivieren mit: "Yoast WooCommerce SEO"-Umschalter in Fozzels-Integrations-Einstellungen
- Erforderliche WordPress-Plugins: "Yoast SEO" UND "Fozzels SEO Fields REST API for WooCommerce" (Bridge-Plugin, Download von app.fozzels.com)
- Was es tut: Ruft Yoast SEO-Titel, Meta-Beschreibung und Focus-Keyword als Attribute ab (Präfix `yoast_`)
- Zurückschreiben: Werte werden über den `seo_fields`-Schlüssel in der WooCommerce REST API geschrieben

**All in One SEO (AIOSEO)**

- Aktivieren mit: "All in One SEO"-Umschalter in Fozzels-Integrations-Einstellungen
- Erforderliche WordPress-Plugins: "All in One SEO" UND "AIOSEO API Sync" (Bridge-Plugin, Download von app.fozzels.com)
- Was es tut: Ruft SEO-Titel, Beschreibung, Keywords, Open Graph-Felder, Twitter-Felder und Focus-Keyphrase als Attribute ab (Präfix `aioseo_`)
- Zurückschreiben: Werte werden über den `aioseo`-Schlüssel in der WooCommerce REST API geschrieben

**WPML (Mehrsprachig)**

- Aktivieren mit: "Enable WPML Multilingual Support"-Umschalter in Fozzels-Integrations-Einstellungen
- Erforderliches WordPress-Plugin: WPML
- Was es tut: Erstellt einen separaten Fozzels-Shop pro Sprache; Produkte werden pro Sprache mit Sprach-präfixierter URL abgerufen (z. B. `/de/wp-json/wc/v3/products`)
- Nach dem Aktivieren: Gehen Sie zu Integration → Synchronisieren, um die Sprach-Shops zu erstellen

---

#### WooCommerce Verbindungs- & Plugin-Diagnose

Wenn Sie die Verbindung testen oder einen Produkt-Pull ausführen, überprüft Fozzels jedes aktivierte Plugin. Hier sind alle möglichen Fehler und deren Behebung:

**Verbindungsfehler**

| Fehler | Bedeutung | Behebung |
|-------|---------|-----|
| WordPress was not found at the provided URL | Die URL zeigt nicht auf eine WordPress-Site | Überprüfen Sie, dass die URL korrekt und öffentlich erreichbar ist |
| WooCommerce REST API is not available | WooCommerce nicht installiert oder REST API deaktiviert | Installieren Sie WooCommerce und aktivieren Sie REST API unter WooCommerce → Einstellungen → Erweitert |
| Unable to connect to the store | Netzwerk-/DNS-Problem | Überprüfen Sie, dass die URL aus dem Internet erreichbar ist |
| The connection timed out | Shop nicht erreichbar oder Firewall blockiert | Überprüfen Sie Server-Firewall und stellen Sie sicher, dass die URL öffentlich erreichbar ist |
| Invalid API credentials | Falscher Consumer Key oder Consumer Secret | Generieren Sie einen neuen API-Schlüssel unter WooCommerce → Einstellungen → Erweitert → REST API |

**ACF-Fehler**

| Fehler | Bedeutung | Behebung |
|-------|---------|-----|
| Both "Advanced Custom Fields" and "ACF to REST API" plugins are required | Ein oder beide Plugins fehlen | Installieren Sie und aktivieren Sie beide Plugins in WordPress Admin |
| "ACF to REST API" is active but "Advanced Custom Fields" is not installed | ACF-Bridge installiert, aber Haupt-ACF-Plugin fehlt | Installieren Sie und aktivieren Sie das "Advanced Custom Fields"-Plugin |
| Failed to verify ACF plugin status | Plugin-Prüfungs-Endpunkt nicht erreichbar | Überprüfen Sie WordPress-Konnektivität und versuchen Sie erneut |

**Yoast SEO-Fehler**

| Fehler | Bedeutung | Behebung |
|-------|---------|-----|
| Both "Yoast SEO" and "Yoast SEO WooCommerce REST API by Fozzels" plugins are required | Ein oder beide Plugins fehlen | Installieren Sie und aktivieren Sie beide Plugins in WordPress Admin |
| "Yoast SEO" is active but the "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed | Bridge-Plugin fehlt | Laden Sie das Bridge-Plugin von app.fozzels.com herunter und aktivieren Sie es |
| Your "Fozzels SEO Fields REST API for WooCommerce" plugin is outdated | Alte Version des Bridge-Plugins | Laden Sie die neueste Version von app.fozzels.com herunter und installieren Sie sie |
| The "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed or not active | Bridge-Plugin nicht gefunden | Laden Sie es von app.fozzels.com herunter und aktivieren Sie es in WordPress Admin |
| Failed to verify Yoast SEO plugin status | Plugin-Prüfungs-Endpunkt nicht erreichbar | Überprüfen Sie WordPress-Konnektivität und versuchen Sie erneut |

**AIOSEO-Fehler**

| Fehler | Bedeutung | Behebung |
|-------|---------|-----|
| Both "All in One SEO" and "AIOSEO API Sync" plugins are required | Ein oder beide Plugins fehlen | Installieren Sie und aktivieren Sie beide Plugins in WordPress Admin |
| "All in One SEO" is active but the "AIOSEO API Sync" plugin is not installed | Bridge-Plugin fehlt | Laden Sie das AIOSEO API Sync-Plugin von app.fozzels.com herunter und aktivieren Sie es |
| Your "AIOSEO API Sync" plugin is outdated | Alte Version des Bridge-Plugins | Laden Sie die neueste Version von app.fozzels.com herunter und installieren Sie sie |
| The "AIOSEO API Sync" plugin is not installed or not active | Bridge-Plugin nicht gefunden | Laden Sie es von app.fozzels.com herunter und aktivieren Sie es in WordPress Admin |
| Failed to verify All in One SEO plugin status | Plugin-Prüfungs-Endpunkt nicht erreichbar | Überprüfen Sie WordPress-Konnektivität und versuchen Sie erneut |

**WPML-Fehler**

| Fehler | Bedeutung | Behebung |
|-------|---------|-----|
| WPML plugin is not active or not installed | WPML nicht auf WordPress gefunden | Installieren Sie und aktivieren Sie das WPML-Plugin in WordPress Admin |
| WPML is active but no languages are configured | WPML installiert, aber keine Sprachen hinzugefügt | Gehen Sie zu WPML → Sprachen und fügen Sie mindestens eine zusätzliche Sprache hinzu |

**Konflikt-Fehler**

| Fehler | Bedeutung | Behebung |
|-------|---------|-----|
| Both Yoast SEO and All in One SEO are active at the same time | Plugin-Konflikt | Die gleichzeitige Verwendung beider kann zu Konflikten führen — deaktivieren Sie eine von ihnen in WordPress Admin |

**Allgemein**

| Fehler | Bedeutung | Behebung |
|-------|---------|-----|
| An unexpected error occurred while connecting | Unbekannter Fehler | Versuchen Sie erneut; wenn das Problem bestehen bleibt, kontaktieren Sie den Fozzels-Support |

---

## Häufige Probleme

**Integration ruft keine Produkte ab**

- Überprüfen Sie, dass das **Aktiv**-Feld ON ist
- Überprüfen Sie, dass Websites und Shops aktiviert sind
- Lösen Sie einen manuellen Pull von der Integrations-Seite aus

**Attribute werden nicht im Katalog-Filter oder Flow-Eingabeaufforderungen angezeigt**

- Das Attribut benötigt das Flag **Filterable** — gehen Sie zu Integration → Attribute und aktivieren Sie es

**Kann ein Attribut nicht als Flow-Ausgabe-Ziel festlegen**

- Das Attribut benötigt das Flag **Mutable** — gehen Sie zu Integration → Attribute und aktivieren Sie es

**Shopify-Verbindungsprobleme**

- Sowohl **Authorized** als auch **REST API Connected** müssen grün sein
- Überprüfen Sie doppelt, dass alle erforderlichen API-Scopes in Ihrer Shopify-Custom-App aktiviert sind

**Magento — `fozzels_completion_date` fehlt**

- Dies muss manuell zu jedem Attribute Set in Magento Admin hinzugefügt werden
- Gehen Sie zu: Katalog → Attribute → Attribute Sets → öffnen Sie jeden Satz → fügen Sie das Attribut hinzu

**Shop-Kontingent überschritten**

- Sie haben die maximale Anzahl aktiver Shops in Ihrem Plan erreicht
- Deaktivieren Sie nicht verwendete Shops oder aktualisieren Sie Ihren Plan unter [Plans](https://app.fozzels.com/user/settings/plans)

**Produkte gekennzeichnet als "verloren"**

- Produkte oder Shops wurden von der Quellplattform entfernt
- Verlorene Elemente werden in Fozzels zur Referenz beibehalten, werden aber nicht synchronisiert

---

## Verwaltung von Integrationen

- **Archivieren** — deaktiviert die Integration und versteckt sie von der Hauptliste; Daten bleiben erhalten und können wiederhergestellt werden
- **Pull-Fortschritt** — Live-Fortschrittsanzeige mit verarbeiteten Elementen; kann pausiert oder gestoppt werden
- **Massen-Attribut-Update** — wählen Sie mehrere Attribute aus und ändern Sie Flags auf einmal
- **Automatisch leere erkennen** — findet automatisch Attribute ohne Werte über Produkte hinweg
