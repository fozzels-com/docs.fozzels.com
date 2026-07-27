---
id: '103000406293'
title: '2.9.1 - CSV-Integration in Fozzels: Was ist das und wie man es einrichtet'
sidebar_position: 20
slug: >-
  /integration-connectivity/csv-integration-in-fozzels-what-it-is-and-how-to-set-it-up
description: >-
  Was ist CSV-Integration? CSV-Integration ermöglicht es Ihnen, Ihren Produktkatalog mit Fozzels unter Verwendung einer Standard-CSV-Datei zu verbinden. Wenn Ihre Plattform keine d
---

## Was ist CSV-Integration?

CSV-Integration ermöglicht es Ihnen, Ihren Produktkatalog mit Fozzels unter Verwendung einer Standard-CSV-Datei zu verbinden. Wenn Ihre Plattform keine direkte Integration mit Fozzels hat — kein Problem: Exportieren Sie Ihre Daten einfach als CSV und laden Sie sie hoch. Fozzels liest Ihre Produkte und ihre Attribute und gibt Ihnen Zugriff auf die vollständige Palette der Plattformfunktionen.

## Schritt 1 — Erstellen Sie eine neue Integration

Klicken Sie in der oberen Navigationsleiste auf **Integrationen** und dann auf die Schaltfläche **\+ Erstellen** in der oberen rechten Ecke.

## Schritt 2 — Wählen Sie den Integrationstyp

Sie sehen eine Liste verfügbarer Plattformen: Akeneo, Shopify, Magento2, WooCommerce und andere. Wählen Sie zum Verbinden über Datei **Raw File**.

## Schritt 3 — Konfigurieren Sie die Integration

Ein Formular wird mit drei Schritten angezeigt: **Konfiguration → Websites und Stores → Attribute**.

### Erforderliche Felder

Bevor Sie Ihre CSV-Datei hochladen, füllen Sie die drei erforderlichen Felder aus:

-   **Name** — ein Name für die Integration (z. B. `Mein Produktkatalog CSV`)
-   **URL** — ein Link zur Quelle (falls zutreffend)
-   **SKU-Spalte** — der genaue Name der Spalte in Ihrer Datei, die jedes Produkt eindeutig identifiziert (z. B. `sku`, `product_id`, `article`)

Klicken Sie dann auf **Speichern**. Nur nach dem Speichern wird der CSV-Upload-Bereich aktiv.

> ? **Warum ist das so?** Das System muss den SKU-Spaltennamen vor dem Lesen der Datei kennen — dies ist für die korrekte Datenverarbeitung erforderlich. Speichern Sie Ihre Einstellungen zuerst, laden Sie dann die Datei hoch.

### Formatoptionen

Parameter

Standardwert

Beschreibung

Format

CSV

Dateiformat

Trennzeichen

Komma (,)

Spaltentrenner

Einschlusszeichen

`"`

Zeichenkette für Wertumhüllung

Kodierung

UTF-8

Dateikodierung

Erste Zeile ist Kopfzeile

Ja

Ob die erste Zeile Spaltenkopfzeilen enthält

SKU-Spalte

—

Name der Spalte, die jedes Produkt eindeutig identifiziert

### Globaler Pull-Zeitplan

Dies legt den Zeitpunkt für die automatische Synchronisierung fest. Der Standard ist `03:30`. Wenn Sie einen anderen Zeitplan für einen bestimmten Store benötigen, können Sie ihn in den Einstellungen dieses Stores überschreiben.

> ? Um die Integration zu aktivieren, aktivieren Sie den Umschalter **Aktiv** in der oberen rechten Ecke des Formulars. Ohne dies wird keine Synchronisierung ausgeführt.

## Schritt 4 — Laden Sie die CSV-Datei hoch

Nach dem Speichern wird der Upload-Bereich aktiv. Sie können Ihre Datei auf zwei Arten hochladen:

-   **Drag and Drop** — Ziehen Sie Ihre CSV direkt in die Upload-Zone
-   **Hochladen** — Klicken Sie auf die blaue Schaltfläche **Hochladen** und wählen Sie eine Datei von Ihrem Computer aus

Nach dem Hochladen werden der Dateiname und die Dateigröße unter der Drag-and-Drop-Zone angezeigt — bestätigt, dass die Datei erfolgreich hinzugefügt wurde.

> ? Beim Lesen der Datei verwendet das System die Formateinstellungen, die Sie zuvor definiert haben: Trennzeichen, Kodierung und Einschlusszeichen.

Nach dem Hochladen der Datei klicken Sie erneut auf **Speichern** — das System leitet Sie automatisch zur Registerkarte **Websites und Stores** weiter.

## Schritt 5 — Websites und Stores

Klicken Sie auf die Schaltfläche **Websites und Stores pullen** — das System erstellt eine Datensatz für Ihre virtuelle Website und Ihren Store. Dies ist die Standardvorgehensweise in Fozzels: Selbst bei der Datei-Upload-Verwendung wird die universelle Website → Store-Struktur verwendet.

Sobald die Datensatz in der Tabelle angezeigt wird, **aktivieren Sie die Website und den Store** mit den Umschaltern in der Spalte **Status**.

Wenn beide aktiv sind, wird die Schaltfläche **Pull products** verfügbar. Klicken Sie auf diese, um mit dem Importieren von Produkten aus Ihrer CSV-Datei in den Fozzels-Katalog zu beginnen.

> ? Die Tabelle zeigt auch den **Pull-Zeitplan** — die Synchronisierungszeit, die Sie in Schritt 3 festgelegt haben. Sie können sie pro Store bei Bedarf überschreiben.

## Schritt 6 — Anzeige importierter Produkte

Nach Abschluss des Pulls (die Fortschrittsleiste erreicht 100%) klicken Sie auf das Symbol **Produkte anzeigen** in der Spalte Aktionen, um den Produktkatalog für diese Integration zu öffnen.

### Wie Daten organisiert sind:

-   Jede **Zeile** aus der CSV wird zu einem separaten Produkt
-   Jede **Spalte** aus der CSV wird zu einem Produktattribut

### Verwalten der Spaltensichtbarkeit

Nicht alle Attribute werden standardmäßig angezeigt. Um zu wählen, welche Spalten angezeigt werden sollen, klicken Sie auf **Spaltensichtbarkeit** in der oberen rechten Ecke der Tabelle und aktivieren Sie die erforderlichen Attribute.

### Filterprodukte

Zwei Filterungsoptionen sind verfügbar:

-   **Inline-Filter** — Felder direkt unter Spaltenkopfzeilen für schnelle Suche
-   **Erweiterter Filter** — flexible AND/OR-Bedingungslogik für komplexe Abfragen

### Massenaktionen

Sobald Sie die benötigten Produkte ausgewählt haben, ist das vollständige Fozzels-Toolkit verfügbar: Gruppierung von Produkten, Erstellung von Produktgruppen und Start von Content Flow, Image Flow oder Video Flow basierend auf Ihrer Auswahl.

> ? Auf diese Weise wird Ihre CSV-Datei zu einer vollständig funktionsfähigen Datenquelle in Fozzels — mit allen verfügbaren Content-Tools der Plattform.

## Schritt 7 — Vorbereitung von Attributen vor der Erstellung eines Flows

Bevor Sie einen Content Flow erstellen, stellen Sie sicher, dass das Zielattribut richtig konfiguriert ist. Gehen Sie zur Registerkarte **Attribute** Ihrer Integration und klicken Sie auf das Bearbeiten-Symbol (Bleistift) neben dem Attribut, das Sie verwenden möchten:

-   **Mutable** — dies muss aktiviert sein. Ohne dies kann Fozzels keinen generierten Inhalt in dieses Feld schreiben, und das Attribut wird beim Erstellen eines Flows nicht in der Dropdown-Liste angezeigt.
-   **HTML erlauben** — aktivieren Sie dies, wenn Sie Inhalte mit HTML-Markup generieren möchten (z. B. Beschreibungen mit `<p>`, `<ul>` Tags usw.).

> ? Erfahren Sie mehr über Attribute, Data Density und benutzerdefinierte Felder in unserem Artikel: [Attribut-Qualitätsanalyse](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

## Schritt 8 — Erstellen Sie einen Content Flow

Um Inhalte basierend auf Ihren importierten Produkten zu generieren, müssen Sie einen **Content Flow** erstellen. Es gibt zwei Möglichkeiten:

**Option 1 — über das Content Flows Menü:** Gehen Sie zu **Content Flows** im oberen Menü und klicken Sie auf **\+ Erstellen**.

**Option 2 — direkt aus dem Katalog:** Wählen Sie die benötigten Produkte (oder alle) → Öffnen Sie das Dropdown **Aktionen** → wählen Sie **Neuen Content Flow erstellen**.

Geben Sie im Erstellungsformular einen **Namen** ein und wählen Sie das **Attribut** — die Spalte, für die Inhalt generiert wird.

Der Rest des Prozesses ist Standard und besteht aus vier Schritten:

**Schritt 1 — Neuer Flow:** Name und Zielattribut.

**Schritt 2 — KI-Konfiguration:** Wählen Sie einen KI-Anbieter (OpenAI, Google Gemini usw.), Modell, Text-Stil und Ton sowie Token-Limit.

**Schritt 3 — Flow-Auswahl und Prompt:** Aktivieren Sie den Flow, richten Sie Produktfilterung ein und schreiben Sie Ihren Prompt. Verwenden Sie Attribute mit hoher Data Density Score für beste Ergebnisse. Erfahren Sie mehr in unserem Artikel: [Prompt-Erstellung und Filterung](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor).

**Schritt 4 — Automatisierung:** Legen Sie die Anzahl der Produkte pro Ausführung fest, konfigurieren Sie den Zeitplan und starten Sie über **Jetzt ausführen** oder **Planen und Schließen**.

> ? Wenn Sie neu bei Content Flows sind, empfehlen wir Ihnen, zu lesen: [Flow-Definition und Content-Typen](/content-creation-flows/flow-definition-and-content-types-text-image-video) und [Erstellen eines neuen Content Flows](/content-creation-flows/creating-a-new-content-flow-and-initial-settings).

## Schritt 9 — Erhalten Sie die Ergebnisse

Im Gegensatz zu anderen Integrationen (Shopify, Magento usw.) **funktioniert die Schaltfläche „Speichern und Synchronisieren" nicht für CSV** — es gibt keine Live-Verbindung zu einem Store zum Zurückübertragen von Daten. Stattdessen werden Ergebnisse manuell über Export heruntergeladen.

### Wie man generierte Inhalte exportiert

1.  Gehen Sie zur **Batch-Liste** Ihres Flows
2.  Wählen Sie die benötigten Datensätze über **Aktionen → Alle auswählen** (oder manuell)
3.  Wählen Sie im Dropdown **Aktionen** die Option **Als CSV exportieren**
4.  Bestätigen Sie im Pop-up durch Klicken auf **Export starten**
5.  Das System stellt die Datei in die Warteschlange — Sie erhalten eine Benachrichtigung, wenn sie bereit ist

### Wo Sie die Datei herunterladen können

Gehen Sie zu **Dashboard → Export / Generierte Daten**. Diese Seite zeigt eine Tabelle aller generierten Dateien mit **Verfügbar**-Status. Finden Sie Ihre Datei und klicken Sie auf die Schaltfläche **ZIP**, um sie herunterzuladen.

> ⚠️ **Die Datei ist nur 24 Stunden** ab der Erstellung verfügbar. Stellen Sie sicher, dass Sie sie vor Ablauf herunterladen.

## Nützliche Links

-   [Attribut-Qualitätsanalyse. Data Density. Benutzerdefinierte Attribute](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes)
-   [Flow-Definition und Content-Typen (Text, Bild, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)
-   [Erstellen eines neuen Content Flows und anfängliche Einstellungen](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Prompt-Erstellung und Filterung. Drag und Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)
