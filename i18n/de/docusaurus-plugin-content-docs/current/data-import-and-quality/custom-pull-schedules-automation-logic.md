---
id: '103000385568'
title: 3.1  Benutzerdefinierte Pull-Zeitpläne & Automatisierungslogik
sidebar_position: 1
slug: /data-import-and-quality/custom-pull-schedules-automation-logic
description: Wir haben die Fozzels-Plattform aktualisiert, um sich an Ihren lokalen Geschäftsrhythmus anzupassen. Sie haben jetzt vollständige Kontrolle über den Startzeitpunkt Ihres Inhalt-Update-Zyklus,
---

Wir haben die Fozzels-Plattform aktualisiert, um sich an Ihren lokalen Geschäftsrhythmus anzupassen. Sie haben jetzt vollständige Kontrolle über den Startzeitpunkt Ihres Inhalt-Update-Zyklus, wodurch Sie KI-Operationen mit Ihren Bestandsaktualisierungen und Serverkapazität synchronisieren können.

## Benutzerdefinierte Pull-Zeitpläne

Sie sind nicht mehr auf einen einzelnen Systemzyklus beschränkt, der früher für alle um **00:30 UTC** startete. Jetzt definieren Sie die Startzeit für jede Integration oder jeden einzelnen Store.

### 1\. Konfigurationsebenen:

-   **Globale Integrationsebene:** Legen Sie einen einzelnen Zeitplan für die gesamte Integration fest (konfiguriert in der Registerkarte **Konfiguration**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/OIDrHQUvFDLOAW6VRq6bmDqVGmzw-Sx_WQ.png)

-   **Individuelle Store-Ebene:** Legen Sie einen eindeutigen Zeitplan für einen bestimmten Store fest (konfiguriert in der Registerkarte **Websites & Stores** über die Option **„Auf Store-Ebene überschreiben"**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/rzTnb5R6tAHqj6TuLjncrbuJn2jhIhf-A.png)

![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/4TXxigKSz9G6RrXZnbgqjQ0N7TTKYwiwMQ.png)

##
So funktioniert es: Die Automatisierungsketten-Reaktion

Es ist wichtig zu verstehen, dass der geplante Pull-Zeitpunkt der **Auslöser** für eine ganze Kette von Prozessen ist. Sobald der **Pull** Ihre Daten erfolgreich importiert, führt das System automatisch die folgenden Schritte aus:

### Datenweg: Vom Pull zur Generierung (Schritt für Schritt)

**Phase**

**Was passiert**

**Ergebnis**

**1\. Produkt-Pull**

Fozzels stellt über API eine Verbindung zu Ihrem Shop her und lädt aktualisierte Daten herunter.

Das System verfügt über eine aktuelle Liste von Produkten und Merkmalen.

**2\. Flow-Synchronisierung**

Das System „siebt" den Katalog durch Ihre aktiven Flow-Filter.

Neue Produkte werden in die Warteschlange eingereiht; irrelevante werden entfernt.

**3\. Attribut-Aktualisierung**

Werte (Preis, Kategorie, benutzerdefinierte Felder) werden für jedes Produkt im Flow aktualisiert.

Die KI erhält den frischesten Kontext für die Generierung.

**4\. KI-Generierung**

Die Generierungswarteschlange startet basierend auf Ihren spezifischen Prompts.

Texte, SEO-Tags und Übersetzungen werden erstellt.

**5\. Datenexport**

Der fertiggestellte Inhalt wird automatisch an Ihren Shop zurückgesendet.

Ihre Kunden sehen die aktualisierte Produktseite.

**Beispiel:** Wenn Sie Ihren Pull-Zeitpunkt auf **17:00 (17 Uhr)** festlegen, startet die KI-Generierung unmittelbar nach Abschluss des Datenimports und der Flow-Prüfungen (z. B. um **17:20** oder **17:45**), anstatt bis zur Mitte der Nacht zu warten.

## Lokalisierte Benutzeroberfläche: Einstellen Ihrer Zeitzone

Um die Planung intuitiv zu gestalten und mentale UTC-Berechnungen zu vermeiden, können Sie Ihre lokale Zeitzone direkt in Ihrem Profil einstellen.

### Konfigurieren Sie Ihre Zeitzone wie folgt:

1.  Navigieren Sie zu **Einstellungen** > **Profil**.

2.  Suchen Sie das Feld **Zeitzone** und wählen Sie Ihre Region aus dem Dropdown-Menü.

3.  **Entscheidend:** Klicken Sie auf die Schaltfläche **SPEICHERN**, um die Änderungen anzuwenden.

### Warum das wichtig ist:

-   **Keine UTC-Berechnungen:** Wenn Sie einen Pull für 17:00 Uhr in Ihrer Zeitzone planen, startet er genau um 17:00 Uhr nach Ihrer lokalen Uhr.

-   **Transparente Protokolle:** Jedes Aktivitätsprotokoll und jeder Generierungsstatus wird in Ihrer Ortszeit angezeigt, wodurch die Überwachung mühelos wird.

## Hauptvorteile

-   **Frische-Kontrolle:** Die KI-Generierung erfolgt unmittelbar nach der Aktualisierung Ihrer Produktdaten auf Ihrem Shop.

-   **Server-Optimierung:** Staffeln Sie Pull-Zeiten für verschiedene Stores, um zu verhindern, dass Ihre API von gleichzeitigen Anfragen überwältigt wird.

-   **Vorhersehbarkeit:** Wissen Sie genau, wann Ihre Neuzugänge von der KI verarbeitet und zur Überprüfung bereit sind.
