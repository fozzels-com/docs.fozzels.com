---
title: Abschluss-Bericht (Tägliche Batch-Liste)
sidebar_position: 28
slug: /content-creation-flows/completion-report-daily-batch-list
description: Der Abschluss-Bericht ist eine tägliche Übersicht über alle KI-generierten Inhaltselemente über Ihre Flows hinweg — angezeigt werden, was generiert, bestätigt und an Ihren Shop auf einem bestimmten Tag gesendet wurde.
keywords:
- Inhaltsfluss
- Content-Flow
- Inhaltsgenerierung
- Eingabeaufforderung
- Anweisung
- Fertigstellung
- Generierung
---

Der Abschluss-Bericht ist eine tägliche Übersicht über alle KI-generierten Inhaltselemente über Ihre Flows hinweg — angezeigt werden, was generiert, bestätigt und an Ihren Shop auf einem bestimmten Tag gesendet wurde.

Gehen Sie zum [Completion Report](https://app.fozzels.com/completions/product/completion/report/today) (ersetzen Sie `today` durch ein Datum wie `2026-03-20`)

---

## Was diese Seite zeigt

Diese Seite listet jeden KI-Abschluss (generiertes Inhaltselement) auf, der innerhalb des ausgewählten Datumsbereichs erstellt oder ausgeführt wurde. Sie bringt Ergebnisse von **allen Ihren Flows** an einem Ort zusammen, damit Sie Chargen überprüfen, bestätigen und synchronisieren können, ohne jeden Flow einzeln zu durchsuchen.

---

## Im Bericht navigieren

### Datumsbereich

- **Von / Bis** Datumswähler oben lassen Sie den Datumsbereich ändern
- Das Datum in der URL setzt das Startdatum — z. B. `/completions/product/completion/report/2026-03-20`
- Fügen Sie `?end_date=2026-03-21` hinzu, um ein Enddatum zu setzen

### Shop-Filter

- Das linke Panel listet Ihre verbundenen Shops auf
- Klicken Sie auf einen beliebigen Shop, um den Bericht auf nur die Abschlüsse dieses Shops zu filtern
- Klicken Sie erneut oder löschen Sie, um alle Shops anzuzeigen

### Anzeigefilter (Kontrollkästchen)

- **Nur mit Fehlern anzeigen** — blendet erfolgreiche Elemente aus, zeigt nur fehlgeschlagene/fehlerhafte Abschlüsse
- **Nur verdächtige anzeigen** — zeigt nur Abschlüsse, die als verdächtige Inhalte gekennzeichnet sind

### Spaltenfilter (Bedingungen-Builder)

- Filtern nach Flow, Website, Shop, SKU, Eingabeaufforderung, Erstellt am, Ausgeführt am, Synchronisiert am
- Erstellen Sie AND/OR-Bedingungen wie im Katalog

---

## Tabellenspalten

| Spalte | Was wird angezeigt |
|--------|--------------|
| **Flow** | Name des Content Flow, der dieses Element generiert hat (klicken Sie, um den Flow zu öffnen) |
| **Website / Shop** | Welcher Shop dieses Element angehört |
| **SKU** | Produktbezeichner (klicken Sie, um das Produkt zu öffnen) |
| **Confirmed** | Kontrollkästchen — ob dieser Abschluss zur Synchronisierung genehmigt ist |
| **Prompt** | Die verwendete KI-Eingabeaufforderung |
| **Created At** | Wann der Abschluss erstellt wurde |
| **Target attribute** | Der KI-generierte Inhalt (klicken Sie zum Bearbeiten) |
| **Executed At** | Wann die Generierung ausgeführt wurde; zeigt Fehler-Etiketten, wenn es fehlgeschlagen ist |
| **Synchronized At** | Wann der Inhalt an Ihren Shop gesendet wurde; zeigt "Sync Now" wenn ausstehend |
| **Thumbnail** | Produktbild (schalten Sie die Sichtbarkeit mit der Schaltfläche Spalte um) |

---

## Aktionen

### Pro-Zeilen-Aktionen

- **Umschalter Confirmed-Kontrollkästchen** — bestätigen oder unbestätigen Sie ein einzelnes Element
- **Klicken Sie auf den Zielattributwert** — öffnet ein Bearbeitungsmodal, in dem Sie können:
  - Den generierten Inhalt manuell bearbeiten
  - Revisionsverlauf anzeigen und eine frühere Version wiederherstellen
  - Inhalte neu generieren
  - HTML / Nur-Text-Ansicht umschalten
  - Speichern und optional sofort synchronisieren
- **Klicken Sie auf "Sync Now"** — senden Sie manuell ein einzelnes Element an den Shop
- **Klicken Sie auf ein Fehler-Etikett** — siehe die vollständige Fehlermeldung und Wiederholung-Optionen

### Massenaktionen (Elemente zuerst auswählen, dann Aktion wählen)

| Aktion | Was wird getan |
|--------|-------------|
| **Alle bestätigen, Speichern & Synchronisieren** | Markiert ausgewählte Elemente als bestätigt und reiht sie zur Synchronisierung ein (läuft alle 4 Stunden) |
| **Neu generieren, Speichern & Synchronisieren** | Führt KI-Generierung für ausgewählte Elemente erneut aus und reiht sie zur Synchronisierung ein |
| **Generierten Inhalt synchronisieren** | Erzwingt erneute Synchronisierung bereits synchronisierter Elemente (überschreibt das, was in Ihrem Shop ist) |
| **Verdächtiges Flag aktualisieren** | Berechnet verdächtige Status für ausgewählte Elemente neu |

---

## Häufige Anwendungsfälle

**Überprüfung des gestrigen Batches**

- Öffnen Sie den Bericht für das vorherige Datum
- Filtern Sie nach Shop, wenn Sie mehrere haben
- Sortieren Sie nach "Executed At", um zu sehen, was ausgeführt wurde

**Fehlgeschlagene Elemente finden**

- Aktivieren Sie das Kontrollkästchen "Nur mit Fehlern anzeigen"
- Klicken Sie auf das Fehler-Etikett in jeder Zeile, um den genauen Fehler und die Wiederholung-Optionen zu sehen

**Umgang mit verdächtigen Inhalten**

- Aktivieren Sie das Kontrollkästchen "Nur verdächtige anzeigen"
- Überprüfen Sie jedes gekennzeichnete Element — bearbeiten, generieren Sie neu oder bestätigen Sie, wenn es ein falsches positives Ergebnis ist

**Massen-Bestätigung und Synchronisierung**

- Wählen Sie alle Elemente aus (oder filtern Sie diejenigen, die Sie möchten)
- Verwenden Sie **Alle bestätigen, Speichern & Synchronisieren**, um alles auf einmal zu genehmigen und in die Warteschlange einzureihen
- Synchronisierung läuft automatisch alle 4 Stunden; oder verwenden Sie "Sync Now" pro Element für sofortige Übermittlung

---

## Häufige Probleme

**Keine Elemente für heute angezeigt**

- Abschlüsse erscheinen hier, wenn ein Flow ausgeführt wurde — überprüfen Sie, dass Ihre Flows aktiv sind und ausgeführt wurden
- Versuchen Sie, den Datumsbereich zu erweitern

**Elemente bestätigt, aber nicht synchronisiert**

- Synchronisierung läuft alle 4 Stunden — warten Sie oder verwenden Sie "Sync Now" pro Element
- Überprüfen Sie, dass die Integration aktiv ist und der Shop verbunden ist

**Fehler in der Spalte "Executed At"**

- Klicken Sie auf das rote Fehler-Etikett, um Details zu sehen
- Häufige Ursachen: Integrations-Anmeldedaten abgelaufen, Attribut nicht veränderbar, Shop offline

**Element zeigt "Verdächtig" an**

- Der Inhalt hat ein verdächtiges Wort oder KI-Artefakt-Muster ausgelöst
- Bearbeiten Sie den Inhalt manuell, dann bestätigen — oder verwenden Sie **Verdächtiges Flag aktualisieren**, wenn der Inhalt tatsächlich in Ordnung ist
