---
id: '103000406129'
title: 4.1.2.b Warum unterscheidet sich der generierte Inhalt zwischen der Vorschau und dem Endergebnis?
sidebar_position: 4
slug: /content-creation-flows/why-does-the-generated-content-differ-between-the-preview-and-the-final-result
description: 'Frage: Warum unterscheidet sich der in der Vorschau angezeigte Inhalt von dem Inhalt, der letztendlich mit der Website synchronisiert wird? Antwort: Dieses Verhalten ist zu erwarten.'
---

## Frage

Warum unterscheidet sich der in der **Vorschau** angezeigte Inhalt von dem Inhalt, der letztendlich mit der Website synchronisiert wird?

## Antwort

Dieses Verhalten ist zu erwarten.

Die **Vorschau** (verfügbar nach Klicken auf **Speichern & Vorschau**) ist **nicht** der endgültig generierte Inhalt. Es ist eine Testgenerierung für ein einzelnes Produkt, mit der Sie:

-   überprüfen können, dass der Prompt korrekt konfiguriert ist;
-   den Typ und die Qualität des vom Prompt erzeugten Inhalts überprüfen;
-   Anpassungen vornehmen können, bevor Sie den vollständigen Flow ausführen.

Wenn Sie den tatsächlichen Flow starten, sendet Fozzels **neue KI-Anfragen** für jedes Produkt.

Obwohl die Eingabedaten (Produktattribute, Prompt und Einstellungen) gleich bleiben, generiert die KI eine neue Antwort für jede Anfrage. Da KI-generierte Inhalte nicht deterministisch sind, kann die Ausgabe zwischen der Vorschau und der endgültigen Generierung variieren.

## Wo kann ich den endgültig generierten Inhalt finden?

Der Inhalt, der tatsächlich generiert und mit Ihrer Website synchronisiert wurde, ist verfügbar in:

-   **Batch-Liste** – für die spezifische Flow-Ausführung.
-   **Tägliche Gesamt-Batch-Liste** – für alle generierten Inhalte über Flows hinweg.

Diese Berichte enthalten die endgültige Ausgabe, die während der Flow-Ausführung gesendet wurde, und sollten zur Überprüfung statt der Vorschau verwendet werden.

## Zusammenfassung

-   **Vorschau** = eine Testgenerierung zur Prompt-Validierung.
-   **Flow-Ausführung** = eine neue KI-Generierung für jedes Produkt.
-   Kleine Unterschiede zwischen der Vorschau und dem endgültig synchronisierten Inhalt sind zu erwarten.
-   Vergleichen Sie Ihre Website immer mit dem in der **Batch-Liste** oder **Tägliche Gesamt-Batch-Liste** angezeigten Inhalt, da diese die tatsächlichen synchronisierten Ergebnisse enthalten.
