---
id: '103000369091'
title: 4.7.1 Verfolgung der generierten Ergebnisse. Dashboard.
sidebar_position: 17
slug: /content-creation-flows/tracking-of-the-generated-results-dashboard
description: Das Dashboard (oder die Tägliche Gesamt-Batch-Liste) dient als Ihr Kommandozentrum und bietet einen vollständigen Überblick über alle Inhalts-Generierungs- und Synchronisierungsprozesse.
keywords:
- Eingabeaufforderung
- Anweisung
---

Das Dashboard (oder die Tägliche Gesamt-Batch-Liste) dient als Ihr Kommandozentrum und bietet einen vollständigen Überblick über alle Inhalts-Generierungs- und Synchronisierungsprozesse. Mit dieser Schnittstelle können Sie den Status proaktiv verfolgen, Fehler diagnostizieren und alle generierten Daten effizient verwalten.

1\. Dashboard-Übersicht

Die Hauptansicht ist eine Datentabelle, die nach dem Generierungsdatum der Inhalte gruppiert ist.

1.1 Wichtige Metriken

Die Haupttabelle zeigt sechs wichtige Metriken, die beim Überwachen des Inhaltsstatus für einen bestimmten Tag helfen:

- **Datum**: Das Datum, an dem der Inhalt generiert wurde.
- **Produktanzahl**: Die Gesamtzahl der Produkte, die zur Inhaltsgenerierung eingeplant sind.
- **Vervollständigungsanzahl**: Die Anzahl der Inhaltseinheiten, die erfolgreich generiert wurden.
- **Synchronisierungsanzahl**: Die Anzahl der Inhaltseinheiten, die erfolgreich synchronisiert wurden.
- **Warnungsanzahl**: Die Anzahl der Inhaltseinheiten mit Bemerkungen, die möglicherweise Benutzeraufmerksamkeit erfordern.
- **Fehleranzahl**: Die Anzahl der Inhaltseinheiten, die aufgrund kritischer Fehler nicht generiert oder synchronisiert werden konnten.

Benutzer können auf das Datum oder die Vervollständigungsanzahl klicken, um eine detaillierte Ansicht aller Vervollständigungen für diesen bestimmten Tag zu erhalten.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/3eVmE5L69-qrrXE1wrp9l5KjD88-GmSH0A.png)

1.2. Detaillierte Ansicht und Anzeigekorrekturkonfiguration

Das Klicken auf ein Datum öffnet eine detaillierte Tabellenansicht mit spezifischen Informationen über jede Inhaltseinheit.

1.2.1. Obligatorische Spalten

Die detaillierte Tabelle enthält neun obligatorische Spalten: Flow, SKU, Bestätigt, Thumbnail, Prompt, Erstellt am, Zielattribut, Ausgeführt am und Synchronisiert am.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/yOUsE1jBYf6AFN1hwszHua430j9ysDetdQ.png)

1.2.2. Tools zur Anzeigekorrekturkonfiguration

Die Tools über der Tabelle ermöglichen es Ihnen, Ihre Datenansicht für Effizienz anzupassen:

**Nur mit Fehlern anzeigen.** Dieser Schalter filtert die Tabelle schnell, um nur Datensätze anzuzeigen, bei denen Generierungs- oder Synchronisierungsprobleme aufgetreten sind.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/j--J5uJGSoiU6L54C7ykpw09czX8hQ86Cg.png)

**Sichtbarkeit der Spalten.** Dieses Dropdown-Menü ermöglicht es dem Benutzer, bestimmte Spalten in der Tabelle auszublenden oder anzuzeigen und sich auf relevante Informationen zu konzentrieren.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/a2xTbvhRdJxaIqyUO1tJK3-K0FSstAq5tg.png)

**Pagination.** Die Option "Zeigen \[Anzahl\] Einträge" ermöglicht die Anpassung der Anzahl der pro Seite angezeigten Zeilen (5, 10, 25, 50 oder 100).
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/aPLUy45_b4zLJDCLFCuSfM-OCwWerXDo8g.png)

**Datumsbereichsfilter.** Ermöglicht die Auswahl eines bestimmten Datums oder Datumsbereichs für die Anzeige von Ergebnissen.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qpq1evm1oh-KTj5jr18RC3XOrCrg-vsDYg.png)

1.2.3. Spaltenfilter

Jede Spalte verfügt über ein integriertes Filtertool für schnelle Suche und Sortierung:

- **Flow**: Filtert Produkte nach einem oder mehreren ausgewählten Flows (Auswahl aus einer Liste).
- **SKU**: Wird zum Suchen nach einem bestimmten Produkt anhand seiner SKU verwendet (Textsuche).
- **Thumbnail**: Filtert Produkte basierend auf Bildpräsenz ("Bild fehlt" oder "Bild vorhanden") (Umschalter/Auswahl).
- **Datumspalten**: Datumspalten (Erstellt am, Ausgeführt am, Synchronisiert am) verfügen über "Von"- und "Bis"-Felder zur Auswahl eines Datumsbereichs.

1.3. Spaltendetail und Interaktion

Dieser Abschnitt beschreibt Einzelelementinteraktionen, die als Alternative zu Massenaktionen für granulare Steuerung dienen.

SKU: Zeigt die Produkt-SKU an, die ein anklickbarer Link zur Produktseite innerhalb von Fozzels ist. Enthält auch ein Symbol, das auf die Produktseite im integrierten Store verlinkt.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/A_jL3Ul08ZPx8MakhmS7P3tNfAeYmtyhtw.png)

Bestätigt: Zeigt den Status an, wenn der Inhalt genehmigt wurde und zur Synchronisierung bereit ist.

Zielattribut: Das Klicken auf die Zelle öffnet das Fenster "Vervollständigungsergebnis bearbeiten", in dem Sie den Inhalt überprüfen und bearbeiten können.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/m_jrPUwivZj3FjRSdeYeWZAvFYUuyCBAGw.png)

Prompt: Das Klicken öffnet ein Pop-up, in dem Sie den vollständigen Prompt-Text anzeigen und kopieren können.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/pEEWkzMEzEfqU5WuU7sFLmT9fvZbxMV-5g.png)

Neugenerierung von Inhalten: Die Schaltfläche "Neu generieren" im Fenster "Vervollständigungsergebnis bearbeiten" wird verwendet, um die Neugenerierung von Inhalten zu initiieren.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/c5ZO3vrJJlYMqytY7IAluozmh2QAXngM_Q.png)

1.4. Massenaktionen und Betriebskontrolle

Das Dashboard bietet robuste Funktionalität zur effizienten Verwaltung von Inhalten durch Massenaktionen und löst das Problem der mühsamen Einzelbestätigungen.

1.4.1. Durchführung von Massenaktionen

Auswahlmechanismus: Benutzer wählen Elemente mit Kontrollkästchen oder der Funktion Alle auf dieser Seite auswählen aus.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/cLqudNyTCBxzEB1wUw_lB446fY5cRD45Aw.png)

Verfügbare Aktionen: Das Menü "Aktionen" bietet die folgenden Funktionen für die Stapelverarbeitung:
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/HW2UYiSK33CeIRz6osXy6htBVLzkTpk0pA.png)

- **Alle bestätigen, Speichern & Synchronisieren**: Genehmigt und leitet die Synchronisierung für die ausgewählten Inhalte ein.
- **Neu generieren, Speichern & Synchronisieren**: Leitet die Neugenerierung von Inhalten für die ausgewählten Produkte und deren anschließende Synchronisierung ein.

1.4.2. Funktionalität "Ausgewählte anzeigen"

Gezielter Arbeitsbereich: Die Funktion "Ausgewählte anzeigen" isoliert ausgewählte Elemente in eine separate Tabelle für einen fokussierten Arbeitsbereich.

Vollständige Funktionalitätsbeibehaltung: In diesem Modus behalten Sie alle Funktionen der Standardtabelle: Filterung, Detailansicht und Ausführung von Massenaktionen auf dem ausgewählten Datensatz.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/f7zwjwWHrNA6OT8wJVRrxQ46WMuqPx1J7A.png)

1.4.3. Betriebliche Sicherungsmaßnahmen

Ein mehrstufiges Kontrollsystem wird implementiert, um Genauigkeit zu gewährleisten und ungeplante Ausgaben zu verhindern:

Obligatorische Bestätigung: Ein Warnungs-Pop-up wird vor der Ausführung einer ressourcenintensiven Massenaktion ("**Bestätigen & Synchronisieren**", "**Neu generieren & Synchronisieren**") angezeigt.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/0ubsrmale7wTjSetyZBAJCqZYw3CK5u0iQ.png)

![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/sPmeRKZIE_-ybW-dwpbBS3bSEm0XtG69xQ.png)

Flow-Logik-Steuerung: Diese Pop-ups enthalten einen Hinweis zum erwarteten Synchronisierungsverhalten:

Inhalte aus vollautomatischen Flows werden automatisch genehmigt.
Inhalte aus Standard-Flows werden nur neu generiert und erfordern eine anschließende manuelle Genehmigung.

Ressourcenprüfung: Das System überprüft den Status vor dem Starten eines Vorgangs: Die Generierung wird nicht eingeleitet, wenn der Flow inaktiv ist, und die Synchronisierung wird nicht ausgeführt, wenn die Ziel-Integration inaktiv ist.

1.5. Diagnose und Warnungen (Fehlerbehebung)

Das Dashboard bietet klare Meldungen und Tools zur Diagnose:

Fehlerdetails (QuickInfos): Bei Synchronisierungs- oder Generierungsfehlern sind QuickInfos verfügbar, die die detaillierte Meldung zur Erklärung der Fehlerursache bieten.
"Vervollständigung sieht verdächtig aus": Eine Warnung, die auf unnatürliche Inhalte hinweist (Bot-ähnliche Antworten, HTML oder Markdown). Dieser Inhalt wird nicht synchronisiert und erfordert Benutzereingriff.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/NSPyqq1WcPjA-YYLdrczhDUakvL55U2vIQ.png)
"Doppelte HTML-Entität-Codierung erkannt": Diese Warnung wird angezeigt, wenn der Text mehr als einmal codiert wurde, was dazu führen kann, dass der Text falsch angezeigt wird.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/UGH7_knyB9J6V0GXvznxuh1latc_mLlX-Q.png)
"Produktvervollständigungsergebnis ist leer. Versuchen Sie, den Inhalt neu zu generieren." Das Ergebnis ist leer.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/4w2KbQmr8MEpBIgJ6373dwywTEYwFu6TYA.png)

"Produkt ist in der Integration gelöscht": Zeigt an, dass das Produkt im integrierten Store nicht mehr vorhanden ist.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/nO0NOjYhJ94dqp7jQPD8tvUJ-jEil4tHcA.png)
"Regel ist deaktiviert": Zeigt an, dass der Inhalt von einem Flow generiert wurde, der nicht mehr aktiv ist.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qAHiFoO27TOf4TPKQ9pBfsyriEs7rLXnVg.png)
