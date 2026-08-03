---
id: '103000408983'
title: 4.1.2.a Einrichtung automatisierter KI-Content-Flows
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: Automatisierte Content Flows in Fozzels ermöglichen es Ihnen, Produktinhalte automatisch im Hintergrund zu generieren und zu synchronisieren - ohne dass Sie Aufgaben täglich manuell auslösen müssen.
keywords:
- Inhaltsfluss
- Content-Flow
- Inhaltsgenerierung
- Eingabeaufforderung
- Anweisung
---

Automatisierte Content Flows in Fozzels ermöglichen es Ihnen, Produktinhalte automatisch im Hintergrund zu generieren und zu synchronisieren - ohne dass Sie Aufgaben täglich manuell auslösen müssen.

Dieses Handbuch behandelt alles, was Sie wissen müssen, um automatisierte Flows sicher und effizient einzurichten, zu testen und auszuführen.

## Schritt 1: Checkliste vor dem Start

Vor der Aktivierung der Automatisierung empfehlen wir dringend, diese drei Prüfungen durchzuführen, um Fehler zu vermeiden:

1.  **Produktauswahl überprüfen:** Überprüfen Sie Ihre Filter in der Flow-Einrichtung doppelt, um sicherzustellen, dass der Flow auf die genaue Produktmenge abzielt, die Sie verarbeiten möchten.

2.  **Testen Sie Ihren Prompt:** Führen Sie eine Testgenerierung mit **Speichern & Vorschau** durch, um zu überprüfen, dass die Ausgabe Ihren Qualitätsstandards entspricht.

3.  **Vermeiden Sie Prompt-Rekursion:** Stellen Sie sicher, dass Ihr Prompt das genaue Attribut, in das Sie schreiben, nicht referenziert (z. B. unter Verwendung von `product_description` als Eingabe, um eine neue `product_description` zu generieren). Dies verhindert rekursive Generierungsschleifen.

## Schritt 2: Konfigurieren der Automatisierungseinstellungen

Navigieren Sie zur Registerkarte **Automatisierung** in Ihren Flow-Einstellungen und konfigurieren Sie die folgenden Parameter:

-   **Tägliches Verarbeitungslimit:** Stellen Sie ein, wie viele Produkte täglich verarbeitet werden sollten (bis zu **500 Produkte pro aktiven Flow pro Tag**). Dieses Limit garantiert konsistente und zuverlässige Ausführung innerhalb jedes 24-Stunden-Zyklus.

-   **Vollautomatischer Modus (Optional):**

-   **Aktiviert:** Generierte Inhalte werden automatisch genehmigt und mit Ihrem Webshop synchronisiert (außer Elementen, die durch verdächtige Wörter oder Validierungsprüfungen gekennzeichnet sind).

-   **Deaktiviert:** Inhalte werden automatisch generiert, bleiben aber im Status "Ausstehend" für manuelle Überprüfung und Genehmigung vor der Synchronisierung.

-   **Neue Inhalte erstellen, wenn sich Attributwerte ändern (Optional):** Falls aktiviert, generiert Fozzels Inhalte automatisch neu, wenn ein Attribut, das in Ihrem Prompt verwendet wird, in Ihrem Store aktualisiert wird. Dies hält Ihre Inhalte ohne manuelle Arbeit aktuell.

## Schritt 3: Starten Sie Ihren Flow

Sobald Ihre Einstellungen konfiguriert sind, aktivieren Sie den Flow und wählen Sie eine der zwei Startoptionen:

### Option A: Planen & Schließen (Empfohlen für Hintergrund-Batches)

Klicken Sie auf **Planen & Schließen**. Der Flow wechselt in den geplanten Status und startet automatisch die Verarbeitung nach der nächsten geplanten nächtlichen Katalogaktualisierung, wobei er täglich fortgesetzt wird, bis alle übereinstimmenden Produkte verarbeitet sind.

### Option B: Jetzt ausführen (Sofortstart)

Klicken Sie auf **Jetzt ausführen**. Fozzels verarbeitet sofort die ersten **10 Produkte** für eine sofortige Vorschau. Nach dieser anfänglichen Charge läuft der Flow nach Ihrem konfigurierten täglichen Limit auf seinem täglichen geplanten automatisierten Pfad weiter.

## Wichtige Regeln & Best Practices

-   **Aktiver Status erforderlich:** Damit ein geplanter Flow täglich ausgeführt wird, muss er **Aktiv** bleiben. Das Deaktivieren des Flows unterbricht alle geplanten Ausführungen, bis er erneut aktiviert wird.

-   **Bearbeitung aktiver Flows:** Sie können Prompt-Regeln oder Einstellungen in einem geplanten Flow jederzeit bearbeiten. Updates werden auf alle zukünftigen Generierungen angewendet, während zuvor generierte Inhalte unverändert bleiben, es sei denn, sie werden manuell neu generiert.

-   **Dynamische Produktauswahl:** Aktive geplante Flows evaluieren Ihren Store-Katalog automatisch nach jeder nächtlichen Synchronisierung. Falls neue Produkte Ihren Flow-Filtern entsprechen (z. B. 20 neue Artikel zu einer Kategorie hinzugefügt), werden sie automatisch für die Verarbeitung in den Flow aufgenommen.

## Verwandte Hilfeartikel

-   **Verdächtige Wörter & Qualitätskontrolle:** _[4.7.4 Verdächtige Wörter & Ausdrücke: Fortgeschrittene Content-Qualitätskontrolle](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)_

-   **Vermeiden von Rekursionswarnungen:** _[3.5 "Rekursion erkannt" Warnung beim Erstellen eines Flows](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)_

-   **Verhinderung überlappender Flows:** _[4.4.1 Verhinderung von Inhalts-Doppelgenerierung Funktion](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)_

-   **HTML-Formatierungsregeln:** _[4.7.3 Erlaubte HTML-Tags für KI-Textgenerierung](/content-creation-flows/allowed-html-tags-for-ai-text-generation)_
