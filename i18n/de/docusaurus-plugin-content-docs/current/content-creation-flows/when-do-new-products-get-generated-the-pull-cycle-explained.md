---
id: '103000395390'
title: '4.3.5 Wann werden neue Produkte generiert: Der Pull-Zyklus erklärt'
sidebar_position: 11
slug: /content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained
description: 'Neues Produkt oder neue Marke: warum es noch nicht sichtbar ist und wie Sie es schneller machen Eine Erklärung, warum neue Produkte nicht sofort in Fozzels erscheinen und was Sie tun können.'
keywords:
- Abruf
- Datenabruf
---

**Neues Produkt oder neue Marke: warum es noch nicht sichtbar ist und wie Sie es schneller machen**

Eine Erklärung, warum neue Produkte nicht sofort in Fozzels erscheinen und was Sie tun können, wenn Sie nicht bis zum nächsten Morgen warten möchten.

**1\. Warum neue Produkte nicht sofort in Fozzels sichtbar sind**

Fozzels empfängt keine Daten von Ihrem Store in Echtzeit. Es gibt keine persistente Verbindung zwischen Ihrem Store und Fozzels, die automatisch jede Änderung überträgt.

Stattdessen verbindet sich Fozzels regelmäßig mit Ihrem Store und lädt den aktuellen Zustand des Katalogs herunter - dieser Prozess wird als Product Pull bezeichnet. Nur nach dessen Abschluss wird das System auf neue Produkte, Attributänderungen oder gelöschte Elemente aufmerksam.

> **ℹ** Wenn Sie heute tagsüber ein neues Produkt oder eine neue Marke zu Ihrem Store hinzugefügt haben, wird es erst nach dem nächsten Pull in Fozzels angezeigt. Bis dahin kennt das System es einfach nicht.

**2\. Wann findet der Pull statt**

Der Pull wird automatisch nach einem Zeitplan ausgeführt, den Sie selbst auf der Registerkarte Konfiguration oder Websites & Stores konfigurieren. Standardmäßig läuft er über Nacht.

Nach Abschluss des Pulls führt das System automatisch folgende Aktionen durch:

-   prüft, welche Produkte den Filtern aktiver Flows entsprechen
-   aktualisiert Attributwerte für jedes Produkt in der Warteschlange
-   löst die Inhaltsgenerierung aus

> **ℹ** Änderungen an einem Flow (z. B. Hinzufügen einer neuen Marke zu den Filtern) werden ebenfalls erst nach dem nächsten Pull wirksam.

**3\. So vermeiden Sie das Warten bis zum Morgen: manueller Pull**

Wenn Sie neue Produkte sofort verarbeitet haben müssen - führen Sie den Pull manuell aus. Ein manueller Pull funktioniert genau wie der automatische: Er aktualisiert den Katalog vollständig und löst die Generierung aus.

**So führen Sie ihn aus:**

-   Gehen Sie zum Abschnitt Integrationseinstellungen in Fozzels
-   Suchen Sie Ihren Store und führen Sie den Pull manuell aus
-   Warten Sie auf den Abschluss - ein Erfolgsstatus in der State List bestätigt, dass alles durchgegangen ist
-   Danach wird das System automatisch die Flows synchronisieren und die Generierung für die neuen Produkte starten

> **ℹ** Ein manueller Pull setzt oder ersetzt nicht den automatischen Pull. Der nächste geplante Pull wird weiterhin zur gewohnten Zeit ausgeführt, unabhängig davon, ob Sie einen manuellen ausgeführt haben.

**4\. Falls Sie einen Flow bereits manuell während des Tages ausgeführt haben**

Manchmal testen Benutzer Flows oder generieren Inhalte für einzelne Produkte manuell - unter Verwendung der Schaltfläche "Jetzt ausführen". Dies ist normale Praxis.

Wichtig zu wissen: Ein manueller Flow-Lauf beeinflusst den automatischen Zyklus nicht. Am nächsten Tag wird das System diesen Flow nach dem geplanten Pull automatisch weiterhin ausführen - unabhängig von Maßnahmen, die Sie während des Tages manuell durchgeführt haben.

_Haben Sie eine Frage? Kontaktieren Sie den Fozzels-Support._
