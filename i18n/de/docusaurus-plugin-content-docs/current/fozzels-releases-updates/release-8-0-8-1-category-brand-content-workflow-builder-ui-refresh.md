---
id: '103000409878'
title: Release 8.0-8.1 - Kategorie- & Marken-Content, Workflow Builder, UI-Auffrischung
sidebar_position: 16
slug: /fozzels-releases-updates/release-8-0-8-1-category-brand-content-workflow-builder-ui-refresh
description: Wir freuen uns, das Update v8.0 & v8.1 für Fozzels vorzustellen. Dieses Release konzentriert sich auf erweiterte Funktionen zur Content-Generierung, mehr Flexibilität
keywords:
- Eingabeaufforderung
- Anweisung
- Arbeitsablauf
- Ablauf
- Fertigstellung
- Generierung
---

Wir freuen uns, das Update v8.0 & v8.1 für Fozzels vorzustellen. Dieses Release konzentriert sich auf erweiterte Funktionen zur Content-Generierung, mehr Flexibilität bei der Workflow-Anpassung, höhere Datensicherheit und eine aufgefrischte Benutzeroberfläche.

# **1\. Content für Kategorien & Marken (Shopware & Magento 2)**

## Nach einer längeren Entwicklungs- und Vorbereitungsphase führen wir die Unterstützung für die Generierung und Synchronisierung von Content für Kategorie- und Markenseiten ein.

-   **Kategorie- & Marken-Flows** — Generieren Sie HTML-Beschreibungen, Meta-Titel, Meta-Beschreibungen und benutzerdefinierte Attribute direkt für Kategorien und Marken.
-   **Vollständige Integration** — Diese neuen Flow-Typen bringen alle Standardfunktionen der Plattform mit: Batch-Verarbeitung, Revisionsverlauf und automatische Synchronisierung.

## **2\.  Workflow Builder & Rule Engine**

Das neue Modul **Rule Engine** erlaubt es Ihnen, eine automatische Nachbearbeitung von Inhalten vor der Veröffentlichung zu konfigurieren.

-   **Visueller Editor** — Bauen Sie logische Beziehungen mit den Blöcken Condition, Group und Action auf.
-   **Verarbeitungsregeln** — Formatieren Sie Texte automatisch (z. B.: Überschreitet ein Titel 50 Zeichen → auf 45 Zeichen kürzen, ohne Wörter zu zerschneiden).
-   **Regelzuweisung** — Von Ihnen erstellte Workflows lassen sich auf Produkt-, Kategorie- oder Marken-Flows anwenden.

### **Audit historischer Daten & Content-Validierung**

-   **Prüfung bestehender Inhalte** — Wenden Sie Workflows auf bereits generierte Ergebnisse an, um Einträge zu markieren, die bearbeitet oder neu generiert werden müssen.
-   **Entscheidungsmatrix** — Konfigurieren Sie verzweigte Bedingungen (Yes / No / Always) für komplexe Validierungslogik.
-   **Content-Filter (Contains)** — Erkennen Sie Stoppwörter, verbotene Zeichen oder Formatabweichungen.
-   **Aktionen (Truncate & Mark as Suspicious)** — Kürzen Sie Texte automatisch oder markieren Sie Ergebnisse mit einer Begründung (z. B. „Title too long“) und pausieren Sie die automatische Synchronisierung für diesen Eintrag.

## **3\. Interface-Update (Sidebar-Navigation)**

Wir haben das Plattform-Layout für eine einfachere Navigation und einen effizienteren Arbeitsbereich neu gestaltet.

-   **Aufgeräumter Header** — Die obere Leiste ist entschlackt und enthält nur noch kontextbezogene Elemente (Navigation, Sprache, Benachrichtigungen und Status).
-   **Strukturierte Sidebar** — Module sind nach Bereichen gruppiert (Main, Catalog, Integrations, Customers, AI Flows, Tools).
-   **Anzeigemodi** — Klappen Sie die Sidebar zu einer kompakten Ansicht zusammen, um Arbeitsfläche zu gewinnen.
-   **Status-Indikatoren** — NEW- und Soon-Badges helfen Ihnen, neue Module zu erkennen.

## **4\. Öffentliche Knowledge Base**

Wir haben ein eigenständiges Dokumentationsportal für Plattformnutzer gestartet.

-   **Mehrsprachig** — Materialien und Anleitungen sind in 6 Sprachen verfügbar.
-   **Strukturierte Leitfäden** — Schritt-für-Schritt-Anleitungen zur Einrichtung von Integrationen, Workflows, Mapping und KI-Modellen.

## **5\. Integrations-Updates (Shopware, VTEX, NextChapter)**

### Shopware Engine & Properties (Select / Multi-Select)

-   **API-Optimierung** — Der aktualisierte Connector sorgt für stabile Performance bei großen Datenmengen.
-   **Property-Handling** — Direkte Generierung und Synchronisierung für strukturierte Property-Felder.
-   **Wertekontrolle** — Die KI respektiert definierte Einschränkungen und übergibt einen einzelnen Wert bei Select-Feldern bzw. mehrere Werte bei Multi-Select-Feldern.
-   **Vision AI** — Bildanalyse zur automatischen Bestimmung von Produktparametern (Stil, Farbe, Kragenform usw.).

### NextChapter & VTEX: ALT-Text

-   **ALT-Tag-Synchronisierung** — Generieren und übertragen Sie Bildbeschreibungen, um SEO und Barrierefreiheit zu verbessern.

## **6\. Erweiterte CSV-Integrationen**

### Media Gallery

-   **Standardisierung** — Für CSV-Integrationen wurde ein vollständiges Media-Gallery-Modul ergänzt.
-   **Preview & Vision AI** — Betrachten Sie Bilder direkt in der Tabelle, übergeben Sie URLs an Prompts und generieren Sie Medieninhalte.

### Mapping & Parsing

-   **Live Preview** — Sehen Sie die Struktur der CSV-Datei und Beispieldaten direkt in der Oberfläche.
-   **Flexibles Mapping** — Konfigurieren Sie Feldnamen, Formate und Spaltenzuordnungen.
-   **Parsing-Optionen** — Unterstützung verschiedener Trennzeichen (Komma, Semikolon, Tabulator) und Kodierungen.

## **7\. HTML-Kontrolle & Code-Validierung**

### Editor-Steuerung (Enable Editor)

-   **Raw-Code-Modus** — Deaktivieren Sie den visuellen Editor, um den exakten KI-generierten Code ohne automatische Tag-Anpassungen zu erhalten (nützlich für FAQ-Akkordeons, eingebettete Styles und [Schema.org](https://schema.org/) / JSON-LD).
-   **Ansichtsmodi** — Wechseln Sie zwischen Code-Ansicht (Show HTML) und gerenderter Vorschau.

### Validierung der HTML-Struktur

-   **Automatische Prüfung** — Erkennen Sie nicht geschlossene Tags oder fehlerhaften Code in Echtzeit.
-   **Auto-Sync-Schutz** — Blockieren Sie die Synchronisierung fehlerhafter Elemente automatisch, mit einem Hinweis in der Tabelle: _„Completion looks suspicious, broken or unclosed HTML tags detected.“_

_Ihr Feedback und Ihre täglichen Erfahrungen mit der Plattform helfen uns, Fozzels kontinuierlich zu verbessern._
