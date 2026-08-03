---
title: Produktkatalog — Navigation, Filterung und Erstellung von Flows
sidebar_position: 9
slug: /data-import-and-quality/product-catalog-navigating-filtering-and-creating-flows
description: >-
  Der Katalog zeigt alle Produkte an, die aus Ihrem verbundenen Shop
  abgerufen werden. Erfahren Sie, wie Sie darin navigieren, Produkte mit dem
  Abfragebuilder für Bedingungen filtern und einen gezielten Content Flow
  aus einer Auswahl erstellen.
---

Der Katalog zeigt alle Produkte an, die aus Ihrem verbundenen Shop abgerufen werden. Dies ist Ihre zentrale Ansicht der Produktdaten in Fozzels.

Gehen Sie zum [Catalog](https://app.fozzels.com/catalog)

---

## Im Katalog navigieren

### Shop-Wähler

Wählen Sie oben auf der Seite, welche Produkte des Shops angezeigt werden sollen. Jeder Shop wird mit seinem Integrationsnamen, der Website und dem Locale angezeigt.

### Produktliste

Produkte werden in einer paginierten Tabelle angezeigt (standardmäßig 25 pro Seite). Sie können:

- **Sortieren** nach jeder sichtbaren Spalte
- **Spaltensichtbarkeit umschalten** — Attributspalten anzeigen/ausblenden
- **Vollbildmodus** — Tabelle vergrößern, um den Bildschirm zu füllen
- **Ein Produktfeld überfahren** — Vorschau von Produktbildern ohne das Produkt zu öffnen

### Produktdetails

Klicken Sie auf ein beliebiges Produkt, um die Detailseite zu öffnen mit:

- Vollständige Bildergalerie (Hauptbild + Miniaturbilder)
- Alle Attributwerte für dieses Produkt in diesem Shop
- Direkter Link zurück zur Integration und Website

---

## Filterung von Produkten

Verwenden Sie den **Bedingungen-Abfragebuilder**, um Produkte nach Attributwerten zu filtern.

- Erstellen Sie Bedingungen mit AND/OR-Logik
- Filtern Sie nach jedem Attribut, das das Flag **Filterable** in Integration → Attribute aktiviert hat
- Beispiele:
  - "description is empty"
  - "category equals Electronics AND price is greater than 100"
  - "sku contains ABC"

Klicken Sie auf **Suche**, um den Filter anzuwenden. Die Produktanzahl in der Kopfzeile wird aktualisiert, um anzuzeigen, wie viele Produkte dem Filter entsprechen.

Klicken Sie auf **Zurücksetzen**, um den Filter zu löschen und alle Produkte anzuzeigen.

> Wenn ein Attribut nicht im Filter-Builder angezeigt wird — gehen Sie zu Integration → Attribute und aktivieren Sie das Flag **Filterable** für dieses Attribut.

---

## Erstellen eines Flow aus dem Katalog

Der Katalog ist der schnellste Weg, um einen gezielten Content Flow zu erstellen:

1. Erstellen Sie einen Filter, um die Produkte zu finden, die Sie verarbeiten möchten (z. B. "description is empty")
2. Wählen Sie die übereinstimmenden Produkte aus (Kontrollkästchen in jeder Zeile oder alle über Seiten hinweg auswählen)
3. Klicken Sie auf **"Create Flow on Selected Products"** — dies öffnet den Flow-Erstellungs-Assistent mit Ihrer Auswahl als Bedingung vorausgefüllt
4. Schließen Sie die Flow-Einrichtung ab (KI-Modell, Eingabeaufforderung, Zielattribut)

Dies ist ideal, wenn Sie eine bestimmte Teilmenge von Produkten verarbeiten möchten, anstatt Bedingungen manuell im Flow-Assistenten zu erstellen.

---

## Häufige Probleme

**Keine Produkte sichtbar**

- Die Integration wurde noch nicht abgerufen — gehen Sie zu Ihrer [Integration](https://app.fozzels.com/integrations/definitions) und lösen Sie einen Produktabruf aus
- Stellen Sie sicher, dass der Shop aktiv ist

**Filter-Attribute fehlen im Bedingungen-Builder**

- Das Attribut benötigt das Flag **Filterable** — gehen Sie zu Integration → Attribute und aktivieren Sie es

**Produktbilder werden nicht angezeigt**

- Bilder werden aus Ihrem Shop abgerufen — wenn Bilder in Fozzels fehlen, überprüfen Sie, dass die Integration korrekt abruft und die Basis-Medien-URL konfiguriert ist (Magento)

**Produkte sind veraltet**

- Lösen Sie einen manuellen Abruf von Ihrer Integrations-Seite aus, oder warten Sie auf den nächsten geplanten Abruf

