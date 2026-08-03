---
id: '103000368948'
title: 3.1.1. Katalogübersicht und die Rolle der Transformationstabelle.
sidebar_position: 2
slug: >-
  /data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table
description: >-
  Der Produktkatalog ist Ihr primäres Werkzeug für zentrale Produktdatenverwaltung und Vorauswahl vor dem Flow. Er enthält alle Produkteinheiten und Attribute, die
---

Der Produktkatalog ist Ihr primäres Werkzeug für zentrale Produktdatenverwaltung und Vorauswahl vor dem Flow. Er enthält alle Produkteinheiten und Attribute, die von Ihrer integrierten E-Commerce-Plattform (z. B. Magento, Shopify, NextChapter) synchronisiert werden. Der Katalog ermöglicht es Ihnen, bestimmte Produktteilmengen schnell mit leistungsstarken Filtertools zu filtern und auszuwählen, bevor Sie einen gezielten Content Flow erstellen. Dieser Prozess optimiert die Generierung und kontrolliert die Kosten.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/kT0sbPzqu9U7CYKKbDsdr8HrH0S-eFUwSA.png)
Um auf den **Katalog** zuzugreifen, wählen Sie die Registerkarte Katalog in der Hauptanwendungskopfzeile.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/vfW-3PdKzz5wVJFdE5npuD2aUHNwjtoC0w.png)
**1\. Anfängliche Einrichtung und Store-Auswahl**

1.1. Auswahl der Datenquelle Beim Öffnen des Katalogs müssen Sie zunächst Ihre Datenquelle mit dem Dropdown-Menü „**Integration / Website / Store wählen**" auswählen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qAi7dFDbCqw3Iuboi01Pe7HC4Rvwgs500g.png)

Standardauswahl: Wenn Ihr Konto nur eine aktive Integration und einen Standard-Store hat, werden die Produkte automatisch angezeigt. Andernfalls müssen Sie einen Store explizit auswählen.
Store-Liste: Das Dropdown-Menü listet alle aktiven und archivierten Integrationen auf. Archivierte Integrationen werden angezeigt, aber als inaktiv gekennzeichnet. Sie können jede verlinkte Website und jeden Store auswählen.
Synchronisierung: Nach Auswahl eines Stores wird die Produkttabelle mit allen Einheiten gefüllt, die im Admin des Stores verfügbar sind. Wenn Daten fehlen, stellen Sie sicher, dass Sie die Produkte von der Integrationsseite synchronisiert haben.
Orientierung: Der Navigationspfad (Breadcrumbs) wird dynamisch aktualisiert, um die Website und den Store zu bestätigen, die Sie derzeit anzeigen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/yb51KJSKdpexrXDdEzKIgVfKAGu5kqGAFA.png)

1.2. Verwaltung der Tabellenansicht

Anzeigelimits: Verwenden Sie das Dropdown-Menü über der Tabelle, um die Anzahl der Produkte pro Seite festzulegen. Die Optionen sind 5, 10, 25 (Standard), 50, 75 und 100 Produkte. Verwenden Sie die Paginierungssteuerungen am unteren Rand, um zwischen den Seiten zu wechseln.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/XGBtpKC2r1WW-xy9ZtKVqCbXxHe38w94mw.png)
Symbil zum Vergrößern: Klicken Sie auf das Symbol zum Vergrößern am linken Rand der Tabelle, um die Ansicht zu erweitern und mehr Bildschirmplatz für die Daten bereitzustellen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/R9a_-A3pooA7ZwgFA0hPy7oakeJnhnuIwQ.png)

**2\. Anpassung der Spaltensichtbarkeit**

Mit dem Schalter **Spaltensichtbarkeit** können Sie das Tabellenlayout anpassen, indem Sie Attributspalten anzeigen oder ausblenden.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_4nR9136ceKTkO8gCJYcXkFfxsTxJnAjw.png)

Zugriff auf Attribute: Klicken Sie auf den Schalter Spaltensichtbarkeit, um das Dropdown-Menü zu öffnen, das alle aktiven Attribute auflistet, die in Ihrer Integration verfügbar sind. Inaktive Attribute sind hier nicht aufgelistet und können nicht angezeigt werden. Um Produkte nach einem inaktiven Attribut anzuzeigen, müssen Sie es zunächst auf der Registerkarte **Attribute** aktivieren.
Suche nach Attributen: Verwenden Sie die Sucheingabe oben im Dropdown, um ein bestimmtes Attribut schnell zu finden. Klicken Sie auf das Stornierungssymbol (Kreuz), das beim Eingeben erscheint, um die Suche zurückzusetzen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/uUX_pmAolRpY9P3RoZlEapDjNX0y3kGVjA.png)
Spalte hinzufügen: Deaktivieren Sie einfach das Häkchen, um die Spalte aus der Tabelle auszublenden. Ein Häkchen-Symbol bestätigt, dass die Spalte sichtbar ist.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/OaI_JWUdBAPWTp5UyHcuLYT93tT1LUiQfQ.png)
Fokussierung auf eine Spalte: Klicken Sie auf das Symbol **Auge** neben einem Attributnamen. Die Tabelle scrollt automatisch horizontal, um diese Spalte in den Sichtbereich zu bringen, und die Spaltenüberschrift wird hervorgehoben.
Spalte entfernen: Deaktivieren Sie einfach das Häkchen, um die Spalte aus der Tabelle auszublenden.
**_Verwenden Sie die rechte Seitenleiste, um Spalten zu verwalten und einen Flow zu erstellen._**
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qgwc2opu9MjL3wW4nbOmiOD-rbCUX7IrOw.png)

**3\. Filterung von Produkten zur Auswahl**

Der Katalog bietet zwei **leistungsstarke Möglichkeiten**, Ihre Produktgruppe vor der Flow-Erstellung zu filtern.

3.1. Direkte Spaltenfilterung Sie können Produkte durch Interaktion direkt mit den Spaltenüberschriften in der Tabelle filtern:
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/c6Z48CIdVWFbxX7y-CDbDD0cWbSjXeQwXw.png)

- **Texteingaben**: Verwenden Sie die Sucheingabe oben in jeder textbasierten Attributspalte, um Produkte dynamisch zu filtern, während Sie eingeben.
- **Dropdowns und Auswahlen**: Für Attribute mit definierten Werten (wie „Marke" oder „Größe") können Sie eingeben, um nach Optionen zu suchen, oder eine oder mehrere Optionen auswählen und entfernen.

**Kategoriefilterung:** Für das Attribut „Kategorien" (falls ordnungsgemäß mit „_Kategoriebaum_" und „_Filterbar_" konfiguriert) können Sie die Baumstruktur erweitern und mehrere Kategorien auswählen, um die Produktliste einzugrenzen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/2yny31P2rsrxdVzC07rzVaJr-RwO7xCA9w.png)

3.2. Erweiterte Filterkonfiguration
Der Schalter **Erweiterter Filter** bietet eine differenziertere Schnittstelle mit bedingter Logik, identisch mit der Filterung im Flow Builder.

Aktivieren des Formulars: **Klicken Sie auf den Schalter Erweiterter Filter**. Diese Aktion blendet alle direkten Spaltensucheingaben aus und zeigt die UI-Form zum Erstellen komplexer Bedingungen an.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_6dDdNeft6Ifj_CsyXM-FW_xbW1uZRAhjg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/gs9u3MDY8AQDvqHMTHpetQ4Jhh33DA7Cgg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/x58B9Ei1GLKAdaKuoKR-uF1m7F27cfxikA.png)

Übertragung von Filtern: Alle Filter, die zuvor in den Tabellenspalten ausgewählt wurden, werden bei Aktivierung automatisch auf die UI-Form des erweiterten Filters übertragen und umgekehrt.

Bedingungen aufbauen: Verwenden Sie die Schaltflächen in der UI, um einzelne Bedingungen oder Bedingungsgruppen hinzuzufügen (z. B. Marke „Nur" AND Größe „XS").

Drücken Sie die Schaltfläche **„Suchen"**, um die Logik anzuwenden und die Produkttabelle zu aktualisieren.

Verwaltung: Verwenden Sie die Schaltfläche **„Löschen"**, um einzelne Bedingungen zu entfernen, oder die Schaltfläche **„Zurücksetzen"**, um alle Bedingungen zu löschen und die vollständige Produktliste wiederherzustellen.

**4\. Nutzung spezialisierter Spalten**

Spalte Miniaturansicht: Produkte mit Bildern zeigen das erste Bild hier an. Wenn Bilder fehlen, überprüfen Sie Ihre Einstellungen für das Attribut „Produkt Absolute Bild-URL". Sie können den Katalog mit dem Dropdown der Spalte filtern, um nur Produkte mit „_Bild fehlt_" oder „_Bild vorhanden_" zu sehen.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/iIY14kkYS_2aVcuNVFZF5Z1TLKQ0cczmYQ.png)
**Wenn Sie den Mauszeiger über ein Bild bewegen**, wird die vollständige Galerievorschau angezeigt. Das Klicken auf das Bild öffnet die **[Detaillierte Produktansicht](/data-import-and-quality/detailed-product-view-reviewing-all-attributes-for-a-single-product/)**.
**Spalte Inhalte**: Diese Spalte zeigt das Synchronisationsdatum des letzten generierten Inhalts (nicht das Generierungsdatum). Das Datum ist ein Link; das Klicken darauf öffnet die Liste der Vervollständigungen für dieses Produkt.

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/YRHITuApJ-8TocExnzRrdqDtJhfJGiHDCQ.png)

**5\. Flow-Erstellung aus ausgewählten Produkten**

Nachdem Sie den Katalog zur gewünschten Produktteilmenge gefiltert haben, können Sie sofort einen neuen Flow starten.

Auswahl: Produkte werden entweder durch die angewendeten Filter (direkt oder erweitert) oder durch manuelles Auswählen von Zeilen mit den Tabellenkontrollkästchen ausgewählt.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/geFwcUzWrcTuZWszx1O1aqL9-gIX9f2GUg.png)
Initiierung: Klicken Sie auf die Schaltfläche **„Flow bei ausgewählten Produkten erstellen"**.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/slcUdb4L8stvkadQeWPNRZ22WZmZZ8aI3w.png)

Vorausgefüllter Flow: Sie werden zur neuen Flow-Erstellungsseite weitergeleitet. Der im Katalog ausgewählte Store wird automatisch ausgewählt, und die Filter, die Sie im Katalog angewendet haben, werden automatisch übertragen und in der Produktauswahlstufe (Stufe 3) des neuen Flows eingerichtet.
