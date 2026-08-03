---
id: '103000384142'
title: 'Release 5.10-5.11 RC2: Schnellerer Katalog, tiefere Kontrolle über Fozzels.'
sidebar_position: 1
slug: /fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels
description: Wir bemühen uns sicherzustellen, dass die Arbeit mit großen Datenmengen nicht nur schnell ist, sondern auch vollständig kontrollierbar und intuitiv. Version 5.10 konzentriert sich auf die Verbesserung
keywords:
- Bildfluss
- Bildflow
- Bildgenerierung
- Arbeitsablauf
- Ablauf
---

Wir bemühen uns sicherzustellen, dass die Arbeit mit großen Datenmengen nicht nur schnell ist, sondern auch vollständig kontrollierbar und intuitiv. Version 5.10 konzentriert sich auf die Verbesserung der Qualität visueller Daten und auf eine **deutlich erhöhte Leistung und Benutzerfreundlichkeit unseres Fozzels-Dienstes.**

##

Leistungssteigerung und Datenqualität

Wir haben die Benutzeroberfläche verbessert, um die Verwaltung großer Kataloge schneller und die Arbeit mit Inhalten nahtlos zu gestalten.

### 1\. Katalog- und Datenverwaltung

-   **Beschleunigter Katalog (neue Standards):** Eine neue Spalten-Sichtbarkeitsregel wurde im Katalog implementiert. Ungefähr 20 der wichtigsten Attribute sind jetzt standardmäßig aktiviert. Dies **vereinfacht den Arbeitsablauf** erheblich und **erhöht die Ladegeschwindigkeit** und Anzeigeperformance großer Kataloge.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/lKkJYdOEv5IMFHk7r6Mhn2Iv7R--LD6Bcg.png)

-   **Attributgenauigkeit (DDP-Rundung):** Die Logik zur Anzeige des Datendichte-Prozentsatzes (DDP) wurde aktualisiert. Der DDP-Wert wird jetzt auf **drei Dezimalstellen** gerundet. Dies stellt eine genaue Anzeige von Attributen mit sehr niedriger DDP sicher (z. B. 0,040%), wodurch Verwirrung durch Rundung auf Null eliminiert wird.

-
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2LTShrMQn-AwHW8xdptY0MjbZobK0D0Iig.png)

-   **Maximale Attributklarheit:** Der Block „Zufällige Beispieldaten abrufen" zeigt jetzt den **vollständigen Namen der Website und des Stores** (statt Abkürzungen). Sie werden immer sicher sein, mit den spezifischen Daten zu arbeiten, an denen Sie arbeiten.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/_WOgxMxdZL8LDJJL80org__eblNuAp-nIA.png)

-   **Flexible Tabellennavigation:** Paginierungsoptionen für Attributlisten wurden erweitert: Unterstützung von 50, 75, 100, 150 und **„200"** Elementen. Verwalten Sie mühelos massive Datensätze.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/VwedlrpwTbYE7jTtQJKiU84KWL28R-__Rg.png)

-   **Automatische Katalog-Protokollaktualisierung:** In den Protokolltabellen, die Produkt- und Attributpool-Änderungen verfolgen (**State Log List**), ist die Automatische Aktualisierungsfunktion (**Alle X Sekunden aktualisieren**) jetzt **standardmäßig aktiv**, was die Bequemlichkeit beim Verfolgung aktiver Prozesse erhöht.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/k7wJs0gU52ThkvU06NRQiNCb052rvZNB3A.png)
    2\. Generierung und Workflows (UX)

-   **Sofortiger Zugriff auf Einstellungen:** Ein Symbol **„Attribut anzeigen"** (Auge) wurde zur Batch-Liste-Tabelle neben dem Attributnamen hinzugefügt. Dies bietet eine schnellere Möglichkeit, die Attributeinstellungen und -konfiguration zu prüfen.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/EStHK3i08CDJYcXd9nmAO1KRhxknIufVZw.png)

-   **Spalten-Kontrolle in „Speichern & Vorschau":** Der Block **„Spaltensichtbarkeit"** wurde zur Vorschautabelle hinzugefügt (**Speichern & Vorschau**). Dies ermöglicht es Ihnen, nur die notwendigen Attribute anzuzeigen und Probleme mit übermäßig großen Tabellen zu beheben.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2xUkAX-SxZ6mayNDh5A91b3m2AkKS4mDFw.png)

###
3\. Bildverwaltung und visuelle Qualität

-   **Sauberer visueller Katalog:** Das System **ignoriert und zeigt jetzt nicht mehr** ungültige (fehlerhafte) oder leere Bild-URLs im Katalog, in Berichten und in Generierungslisten an. Verabschieden Sie sich von fehlerhaften Bildern — Ihre Daten sehen jetzt tadellos aus.

-   **Verbesserte Bildfilterung (Image Flow):** Neue leistungsstarke Tools wurden für Sortierung und Filterung von Bildern in den Image Flow-Einrichtungsblöcken hinzugefügt:

-   Spezielle Filter ermöglichen das Umschalten zwischen Standard- und Ihren eigenen hochgeladenen Bildern (Sortierung nach **Quelle**).

    -   Sortierung nach **Upload-Datum** und **Name** wurde hinzugefügt.
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/q6optXQOc2cONrSBq2hAYJmFT-kVtuUMIA.png)
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/9Y5ObdDOni2-uTSMx1mbIb9eIkLRaWSRdw.png)

-   **Terminologie-Klarheit:** Für erhöhte Klarheit wurde „AI Model" in Image Flow-Einstellungen in **„Preset Model"** umbenannt.

### 4\. Beschleunigte Massenoperationen

-   **Vollständig ausgestattete „Ausgewählte anzeigen" (Katalog und Täglicher Bericht):** Wir haben die Funktion „Ausgewählte anzeigen" erheblich verbessert. Jetzt ermöglicht die Tabelle ausgewählter Elemente im **Katalog** und **Täglichen Bericht**, dass Sie **alle gleichen Aktionen wie in der regulären Tabelle ausführen** können: anzeigen, filtern und **Massenaktionen** anwenden.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/wVzkPiDgjCcZCYtSpCXgXA8rfbX5fqysPw.png)

-   **Zuverlässigkeit bei Massenaktionen:** Wir haben ein kleineres Problem behoben, das gelegentlich dazu führte, dass das Gitter leer blieb, wenn keine Elemente ausgewählt waren. Die Arbeit mit Massenaktionen ist jetzt noch zuverlässiger.

##
 Im Hintergrund: Stabilität und Moderne

-   **Gezielte Integrationsstabilisierung:** Notwendige Fixes wurden implementiert, um die Stabilität und Funktionalität von Integrationen mit den Plattformen **WooCommerce, EK Retail und Shopware** zu verbessern und zuverlässigen Betrieb für Clients mit diesen spezifischen Setups sicherzustellen.

Ihre Erfahrung ist unsere Priorität. Diese Updates sind nur ein Teil unserer kontinuierlichen Arbeit zur Verbesserung von Fozzels. Danke, dass Sie Teil unserer Community sind!
[Unser Instagram](https://www.instagram.com/fozzelsai/)
