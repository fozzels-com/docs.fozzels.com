---
id: '103000390709'
title: '4.7.4  Verdächtige Wörter & Ausdrücke: Fortgeschrittene Inhaltqualitätskontrolle'
sidebar_position: 21
slug: /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: Die Funktion "Verdächtige Wörter & Ausdrücke" ist mehr als nur ein einfaches Validierungsfilter - es ist ein ausgefeiltes Werkzeug zur Verwaltung von Workflows mit hohem Inhaltsvolumen.
keywords:
- Arbeitsablauf
---

Die Funktion **Verdächtige Wörter & Ausdrücke** ist mehr als nur ein einfaches Validierungsfilter - es ist ein ausgefeiltes Werkzeug zur Verwaltung von Workflows mit hohem Inhaltsvolumen. Es stellt sicher, dass Ihre Produktbeschreibungen professionell bleiben, indem es KI-Halluzinationen, technische Artefakte oder unerwünschte Begriffe gleichzeitig über mehrere Sprachen hinweg kennzeichnet.

## Konfiguration: Globale & mehrsprachige Kontrolle

Um Ihre Wortliste zu verwalten, navigieren Sie zu **Einstellungen** > **Flow** > Registerkarte **Verdächtige Wörter & Ausdrücke**.

### 1\. Verwalten der Wortliste

Fozzels ist mit gemeinsamen KI-Artefakten (`#html`, `note:`, `sorry`, etc.) vorkonfiguriert. Sie können:

-   **Bedingungen ein-/ausschalten:** Deaktivieren Sie einfach die Tags, die Sie nicht benötigen.

-   **Benutzerdefinierte Begriffe hinzufügen:** Geben Sie ein beliebiges Wort oder einen Ausdruck ein (z. B. Konkurrentennamen, brandspezifische vertrauliche Begriffe) und drücken Sie die **Eingabetaste**.

-   **Unterstützung für mehrere Sprachen:** Sie können "Stoppwörter" in jeder Sprache hinzufügen. Dies ist unglaublich nützlich für internationale Shops, in denen Sie spezifische Fehler für verschiedene Lokalisierungen gleichzeitig verfolgen müssen (z. B. englisches "sorry" vs. niederländisches "let op").

![](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/NHbocGjhOveF2KEQmoSh5o7YOuzzP33eaA.png)

## Funktionsweise: Dynamische Statusverwaltung

Das System arbeitet **in Echtzeit**. Sobald ein Begriff aus Ihrer Liste in einem generierten Text auftaucht:

-   Das Produkt wird mit einem **"Verdächtig" Status** gekennzeichnet.

-   Die gekennzeichneten Wörter werden **direkt im Text-Editor hervorgehoben**.

-   Dies gibt Ihnen die Wahl: **manuell bearbeiten**, den Inhalt **neu generieren** oder **Ihre Einstellungen anpassen**, um die Kennzeichnung zu löschen.

### Sofortige Massenkorrektionen

Die wahre Kraft dieses Features liegt in seiner dynamischen Natur. Falls ein "Verdächtig" Status versehentlich ausgelöst wurde (z. B. Sie haben "sorry" als Stoppwort hinzugefügt, aber dann eine Marke namens _"Sorry Boy"_ gestartet), müssen Sie nicht hunderte Beschreibungen bearbeiten:

1.  **Deaktivieren oder entfernen** Sie das Wort aus Ihrer Verdächtig-Liste in den Einstellungen.

2.  Das System **aktualisiert den Status sofort** für alle bestehenden Vervollständigungen. Sie verlieren die "Verdächtig" Kennzeichnung und sind sofort zur Massensynchronisierung bereit.

![](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/bnDUh3Fj25UmysKHVdUAyM4Kh5Ev2TWvzg.png)

##
Effizienz in der täglichen Gesamt-Batch-Liste

Wir haben Ihren Arbeitsbereich mit einem dedizierten Filter optimiert, um Ihre täglichen Prüfungen zu rationalisieren:

-   **Nur verdächtige anzeigen:** Verwenden Sie diesen Schalter in der **täglichen Gesamt-Batch-Liste**, um jedes Ergebnis sofort zu isolieren, das Ihre Aufmerksamkeit benötigt.

-   Anstatt die gesamte Charge zu überprüfen, können Sie sich gezielt auf gekennzeichnete Elemente konzentrieren, die hervorgehobenen Wörter sehen und entscheiden, ob Sie den Text korrigieren oder Ihre globale Wortliste verfeinern möchten, um die gesamte Charge auf einmal zu löschen.

## Erzwungenes Update (Verdächtig-Kennzeichnung aktualisieren)

Während der Status dynamisch aktualisiert wird, können Sie immer eine Neuberechnung für Ihren breiteren Katalog manuell auslösen. Wählen Sie in Ihrer **Inhaltsliste** die Produkte aus und verwenden Sie die **Massenaktion: "Verdächtig-Kennzeichnung aktualisieren"**, um sie gegen Ihre aktuellsten Einstellungen erneut zu scannen.

### Zusammenfassung

Dieses Feature dient als Ihr "Kommandozentrum" für Inhaltsqualität. Egal ob Sie technische Probleme beheben oder Brand Safety über internationale Grenzen hinweg verwalten, Sie haben immer die vollständige Kontrolle über das, was auf Ihrem Store veröffentlicht wird.
