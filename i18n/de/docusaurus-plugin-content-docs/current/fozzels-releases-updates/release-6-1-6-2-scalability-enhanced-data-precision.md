---
id: '103000399446'
title: 'Release 6.1-6.2: Skalierbarkeit und verbesserte Datenpräzision'
sidebar_position: 10
slug: /fozzels-releases-updates/release-6-1-6-2-scalability-enhanced-data-precision
description: Dieses Update konzentriert sich auf die Optimierung der Plattformleistung für großflächige Daten und die Erweiterung der Datenerfassungsfunktionen, um sicherzustellen, dass Sie alle Details haben, die Sie benötigen
keywords:
- Eingabeaufforderung
- Anweisung
- Arbeitsablauf
- Ablauf
- Abruf
- Datenabruf
---

Dieses Update konzentriert sich auf die Optimierung der Plattformleistung für großflächige Daten und die Erweiterung der Datenerfassungsfunktionen, um sicherzustellen, dass Sie alle Details haben, die notwendig sind, um hochwertige Produktinhalte zu generieren.

### Skalierbare Produktimporte (Product Pull)

Fozzels wird noch effizienter für großflächige E-Commerce-Projekte. Wir haben unsere Importarchitektur verbessert, um nahtlose Datenaktualisierungen unabhängig von der Kataloggröße zu gewährleisten.

-   **Was ist neu:** Wir haben einen **adaptiven Zeitmechanismus** eingeführt, um die Verarbeitung großer Datenströme zu optimieren.

-   **Das Ergebnis:** Auch wenn Ihr Katalog **Hunderte von Tausenden von Elementen** enthält, bleibt die Synchronisierung stabil, flexibel und konsistent ohne Prozessunterbrechungen.

### WooCommerce: Benutzerdefinierte Meta-Felder und zuverlässige Synchronisierung

Wir haben WooCommerce-Benutzern die Flexibilität gegeben, genau zu wählen, welche Daten Sie in Fozzels verwenden möchten.

-   **Selektive Meta-Felder:** Sie können jetzt spezifische **benutzerdefinierte Meta-Felder** synchronisieren, die für Ihre Inhaltsgenerierung erforderlich sind. Geben Sie einfach die Feldcodes oder Gruppenpräfixe während des Setups ein, und das System pullt nur die erforderlichen Informationen.

-   **Nahtloser Start:** Wir haben die Produktidentifikationslogik verbessert. Auch wenn Ihre WordPress-Site interne IDs statt Standard-SKUs verwendet, wird die Verbindung erfolgreich sein und Ihr Katalog wird vollständig gefüllt.

### Lightspeed: Tiefe Spezifikations-Scans

Wir haben das System trainiert, Daten zu erfassen, die tiefer in der Lightspeed-Struktur verborgen sind, um sicherzustellen, dass Ihr KI-generierter Inhalt so informativ wie möglich ist.

-   **Was ist neu:** Fozzels erkennt und extrahiert jetzt Daten aus **verschachtelten Spezifikationen der zweiten Ebene**, die zuvor übersehen wurden.

-   **Der Vorteil:** Die KI erhält Zugang zu einem vollständigen Satz von Produktmerkmalen. Spezifischere Daten führen zu schärferen Prompts und höherwertigen Inhalten.

### Magento 2: Media-Display-Kontrolle

Ein wichtiges Update für diejenigen, die Testumgebungen verwenden, um Inhalte vor dem Go-Live vorzubereiten und zu überprüfen.

-   **Basis-Media-URL überschreiben:** Für Magento 2 Stores können Sie jetzt manuell den Pfad zu Ihrer Bildquelle ändern.

-   **Das Ergebnis:** Die perfekte Lösung für **Stage Stores**. Selbst wenn Stage-Bilder unter nicht standardmäßigen Adressen gespeichert sind, werden sie immer korrekt in Ihrem Fozzels-Katalog angezeigt.

### Verbesserungen und Bug-Fixes

-   **Verbesserte Flow-Logik:** Behoben ein Anzeigefehler für Filterbedingungen in duplizierten Flows. Zuvor, wenn ein Flow eine Datumsbedingung enthielt, könnten andere Optionen in der Benutzeroberfläche nicht angezeigt werden. Dies wurde behoben für ein konsistenteres Benutzererlebnis.

-   **Kalender und Daten:** Behoben Initialisierungskonflikte für `date`- und `datetime`-Felder, die zuvor Serverfehler verursachten.

-   **Leistungsverbesserung:** Optimierte Katalogseiten-Ladegeschwindigkeiten für einen flüssigeren Workflow.

-   **UI-Stabilität:** Verbesserte Schnittstellen-Stabilität beim Arbeiten mit komplexen Filterkonfigurationen.

**_Fozzels wird dank Ihres Feedbacks immer besser. Vielen Dank, dass Sie Teil unserer Reise sind!_**
