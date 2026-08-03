---
title: 'FAQ: Produktkatalog und Datenabrufe'
sidebar_position: 8
unlisted: true
slug: /frequently-asked-questions/faq-product-catalog-and-data-pulls
description: Funktionsweise des nächtlichen Katalog-Abrufs, Gründe für fehlende oder neu hinzugefügte Produkte, Varianten- und Kategorieunterschiede, Filter für benutzerdefinierte Attribute und benutzerdefinierte Abrufpläne.
---

## Der Produktkatalog wird in einem nächtlichen Zeitplan aktualisiert. Wie funktioniert das?

Der Katalog wird automatisch jede Nacht um 01:30 aktualisiert. Nach dem Abruf werden alle Flows mit den neuesten Daten aktualisiert. Neue Produkte, die Flow-Filter erfüllen, werden automatisch hinzugefügt.

## In meinem Webshop hinzugefügte neue Produkte erscheinen nicht in Fozzels.

Produkte erscheinen nach dem nächsten geplanten Katalog-Abruf (nachts um 01:30). Um sie sofort zu sehen, lösen Sie einen manuellen Produktabruf aus.

## Fozzels zeigt weniger Produkte als erwartet – einige Farbkombinationen fehlen.

Fozzels filtert Produkte basierend auf spezifischen Bedingungen und gruppiert auf Produkt-Farb-Ebene, ausgenommen Größenvarianten. Vergleichen Sie Ihre Filterbedingungen mit Ihrer Datenbank, um Diskrepanzen zu finden.

## Ich kann eine bestimmte Produktkategorie in Fozzels nicht finden.

Der Kategoriebaum in Fozzels kann sich von Ihrem Shop unterscheiden. Verwenden Sie Filter zum Suchen. Falls Sie ihn immer noch nicht finden, kontaktieren Sie den Support mit einem Screenshot aus Ihrem Admin.

## Produkte fehlen in meinem Flow wegen eines leeren Lagerbestands-Attributs.

Überprüfen Sie die Flow-Filterbedingungen. Wenn eine Lagerbedingung (z. B. „Voorraad IS NOT NULL") Produkte mit leeren Lagerwerten ausschließt, füllen Sie entweder die Daten aus oder entfernen Sie die Bedingung.

## Ein manueller Datenabruf aktualisiert keine Attribute.

Nach einem Abruf benötigt Fozzels Verarbeitungszeit – Daten sind nicht instant. Falls Attribute unverändert bleiben, kontaktieren Sie den Support.

## Wann sollte ich einen Produktabruf manuell auslösen?

Nach großen Katalogänderungen, neuen Produkten, großen Ergänzungen oder Entfernungen oder Feed-/Integrations-Änderungen.

## Wie filtere ich Produkte nach benutzerdefinierten Attributen (z. B. „Webshop Article = Yes")?

Benutzerdefinierte Filterattribute müssen in den Datenfeed vorhanden sein. Sobald sie in Fozzels vorhanden sind, verwenden Sie sie als Flow-Filterbedingungen. Falls ein Attribut nicht angezeigt wird, kontaktieren Sie den Support.

## Ein Produkt wurde aus dem Katalog entfernt wegen der Variant-Konfiguration.

Fozzels filtert basierend auf Variant-Einstellungen, und deaktivierte Varianten können Produkte ausschließen. Kontaktieren Sie den Support, um die Konfiguration zu überprüfen.

## Kann ich einen benutzerdefinierten Produktabruf-Zeitplan einstellen (nicht nur nächtlich)?

Ja. Seit Release 5.14 können Sie eine bequeme Zeit für Produktabrufe sowohl auf Integrations- als auch auf Shop-Ebene einstellen.
