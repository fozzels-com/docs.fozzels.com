---
id: '103000376412'
title: 4.7.2 Massenaktionen und Betriebskontrolle in den Batch-Listen / Tägliche Gesamt-Batch-Liste
sidebar_position: 19
slug: /content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list
description: Verwalten von Inhalten mit Massenaktionen Das Dashboard (oder die Batch-Liste) ist Ihr primäres Werkzeug zur schnellen Verwaltung von Inhalten. Diese Massenaktionen-Funktionalität ist sowohl in der täglichen Übersicht der Gesamt-Batch-Liste als auch in der detaillierten Batch-Listen-Ansicht verfügbar.
---

Verwalten von Inhalten mit Massenaktionen Das Dashboard (oder die Batch-Liste) ist Ihr primäres Werkzeug zur schnellen Verwaltung von Inhalten. **Diese Massenaktionen-Funktionalität ist sowohl in der täglichen Übersicht der Gesamt-Batch-Liste als auch in der detaillierten Batch-Listen-Ansicht verfügbar.** Mit der Funktion **Massenaktionen** können Sie gleichzeitig kritische Operationen wie Bestätigung, Neugenerierung und Synchronisierung auf eine große Anzahl von Produkten anwenden. Dies spart erheblich Zeit, indem die Notwendigkeit entfällt, jedes Element einzeln zu verarbeiten.

## Ausführung von Massenaktionen

1\. Auswahlmechanismus Um eine Massenaktion einzuleiten, müssen Sie zunächst die Elemente auswählen. Verwenden Sie das Hauptkontrollkästchen, um das Dropdown-Menü mit Optionen zu öffnen:

-   Einzelne Auswahl: Verwenden Sie das Kontrollkästchen ganz links in jeder Zeile, um bestimmte Elemente auszuwählen.

-   Alle auswählen: Wählt **alle** Elemente aus, die den aktuellen Filtern entsprechen, unabhängig von der Seite.

-   Alle deselektieren: Löscht die Auswahl in der gesamten Liste.

-   Alle auf dieser Seite auswählen: Wählt alle Elemente aus, die derzeit in der Tabelle angezeigt werden.

-   Alle auf dieser Seite deselektieren: Löscht die Auswahl nur auf der aktuellen Seite.

![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/TAT_uWcG5-SzeI8SRjjmN51nhZWuNPhNqw.png)
2\. Verfügbare Aktionen Nach der Auswahl von Elementen wird das **Aktionsmenü** aktiviert und bietet die folgenden Funktionen für die Stapelverarbeitung:

-   **Ausgewählte anzeigen**: Diese Aktion filtert das Produktgitter, um nur die Elemente anzuzeigen, die Sie derzeit ausgewählt haben, und ermöglicht eine fokussierte Überprüfung vor der Durchführung von Massenaktionen.

-   **Generierte Inhalte synchronisieren**: Dies leitet die automatische Übertragung aller abgeschlossenen Inhalte für die ausgewählten Produkte auf Ihre verbundene E-Commerce-Plattform ein, ohne einen neuen Generierungszyklus auszulösen.

-   **Alle bestätigen, Speichern & Synchronisieren**: Diese Aktion bestätigt gleichzeitig die Qualität der ausgewählten Inhalte und leitet ihre sofortige Synchronisierung mit dem integrierten E-Commerce-Store ein.

-   **Neu generieren, Speichern & Synchronisieren**: Dies leitet eine neue Inhalts-Generierungsanfrage für die ausgewählten Produkte ein und plant automatisch deren anschließende Synchronisierung nach erfolgreichem Abschluss.

## ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/6chuzawhzMkzp4kjQAs-Xh2lfJQ8D0uTnw.png)
Verwaltung des fokussierten Arbeitsbereichs ("Ausgewählte anzeigen")

Die Funktion **"Ausgewählte anzeigen"** ist ein wesentliches Werkzeug zur Überprüfung und Vorbereitung bestimmter Datensubsets.

-   Gezielter Arbeitsbereich: Die Aktivierung von **"Ausgewählte anzeigen"** isoliert die aktuell ausgewählten Elemente in eine separate Tabellenansicht, wodurch effektiv ein fokussierter Arbeitsbereich entsteht.

-   Vollständige Funktionalitätsbeibehaltung: Auch in diesem isolierten Modus behalten Sie alle Funktionen der Standardtabelle, einschließlich weiterer Filterung, Detailansicht und Ausführung von Massenaktionen auf dem kleineren, spezifischen Datensatz. Dies ermöglicht mehrstufige Auswahl und Verarbeitung.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/83gkMs5df4-VpiuZavFc2jvbQWWHXo5BwQ.png)

## Empfehlungen: Optimierung der Fehler- und Warnungsbehandlung

Wir empfehlen, die Funktion "Massenaktionen" nicht nur zur standardmäßigen Inhaltsgenehmigung, sondern auch zur schnellen Fehlerbehebung zu verwenden.

-   Nutzung von Filtern: Sie können den Filter **"Nur mit Fehlern anzeigen"** verwenden oder die **Inhaltsergebnisse** filtern, die Warnungen oder Fehler erhalten haben (indem Sie die Metriken "Warnungsanzahl" und "Fehleranzahl" in der täglichen Übersicht überprüfen).
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/Q-x6xQXNSMvvctnZfgceHCf1568U90a42A.png)

-   Schnelle Neugenerierung: Nach Anwendung des Filters und Auswahl der problematischen Elemente verwenden Sie die Aktion **"Neu generieren, Speichern & Synchronisieren"**, um den Generierungsprozess für alle fehlerhaften Elemente gleichzeitig effizient erneut auszuführen.

## Betriebliche Sicherungsmaßnahmen und Flow-Logik-Steuerung

Ein mehrstufiges Kontrollsystem wird vor der Ausführung von ressourcenintensiven Massenaktionen implementiert, um Genauigkeit zu gewährleisten und ungeplante Ausgaben zu verhindern:

-   Obligatorisches Bestätigungs-Pop-up: Vor der Ausführung von Aktionen wie "Generierte Inhalte erneut synchronisieren", "Bestätigen & Synchronisieren" oder "Neu generieren & Synchronisieren" erscheint ein Warnungs-Pop-up, das Ihre explizite Bestätigung erfordert.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/XdxTZ96w4KYIJMlmO4Q1e0OGo9Lp4moHMA.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/QtxE2PertdWwBPbWXypF36AadNNOWCYfQ.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/WJXrUQG2D70RbZ2Zt2nXR284tuODnhGu_w.png)

-   Flow-Logik-Hinweis: Diese Pop-ups enthalten einen wichtigen Hinweis zum erwarteten Synchronisierungsverhalten basierend auf dem Flow-Typ:

    -   Inhalte aus vollautomatischen Flows werden bei der Generierung automatisch genehmigt.
        ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/K8O5z-M1sAS6I6awArA51TqfE2SC1Yfbtw.png)

-   Inhalte aus Standard-Flows werden nur neu generiert und erfordern anschließend manuelle Genehmigung, bevor die Synchronisierung zulässig ist.

-   Ressourcenprüfung: Das System überprüft den Betriebsstatus des Flows und der Integration, bevor eine Massenaktion gestartet wird: Die Generierung wird nicht eingeleitet, wenn der Quell-Flow inaktiv ist, und die Synchronisierung wird nicht ausgeführt, wenn die Ziel-Integration inaktiv ist.
