---
id: '103000369006'
title: 3.3. Produktfilterung für Inhaltsgenerierung
sidebar_position: 7
slug: /data-import-and-quality/product-filtering-for-content-generation
description: >-
  Dieser Leitfaden erklärt, wie Sie den Filtermechanismus in Fozzels effektiv nutzen, um eine Teilmenge von Produkten basierend auf Attributwerten präzise auszuwählen,
---

Dieser Leitfaden erklärt, wie Sie den Filtermechanismus in Fozzels effektiv nutzen, um eine Teilmenge von Produkten basierend auf Attributwerten präzise auszuwählen, wodurch die Inhaltsgenerierung gezielt und effizient wird.

### 1\. Zugriff auf die Filteroptionen

Filteroptionen sind an zwei primären Orten verfügbar:

1.  **Content Flow-Erstellung:** Um den spezifischen Produktbatch zu definieren, den ein Flow verarbeitet, **bearbeiten Sie** einen vorhandenen Flow (oder erstellen Sie einen neuen) und **gehen Sie zur** Registerkarte **„Flow-Auswahl & Prompt"**.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/M8M8DSbeTwyMCzVdPZg-AgTrZhknUKlMaA.png)

2.  **Produktkatalog:**
    2.1 Aktivieren Sie den Schalter **„Erweiterter Filter"**. Dies öffnet ein Panel, in dem Sie **„Bedingung hinzufügen"** und **„Bedingungsgruppe hinzufügen"** für komplexe Logik hinzufügen können.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/PCVDp6xbmqaVBtncYNWlb_f76UC2MmUI-g.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/IOHTRc5oV_-sARYVDZ-D0orkvhDrAYcI8A.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/R1pQBNQNg8sWQ-DUNYyn1nSlXHg750rAUg.png)
        2.2 **Inline-Filterung:** Filtern Sie Produkte mit Eingabefeldern oder Dropdown-Listen direkt in den Spaltenüberschriften der Produkttabelle (verfügbar für Attribute mit aktiviertem Flag **Filterbar**).
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/AgXgNaluOPoF0zxvvmWoytasp0fhtnppLg.png)

3.  _**Entscheidend:** Im Katalog können Sie Inline-Filter kombinieren, indem Sie gleichzeitig Bedingungen auf mehrere Spalten anwenden (z. B. Filterung nach **SKU** **AND** nach **Marke**)._

### 2\. Filterung nach Wertbedingungen

Dieser Filtertyp gilt für Text-, numerische und Mehrfachauswahl-Attribute.

1.  **Gleich:** Der Attributwert muss genau mit dem eingegebenen Wert übereinstimmen. _Beispiel: Zeigen Sie nur Produkte, bei denen_ `Color` _gleich_ `Blue` _ist._

2.  **Nicht gleich:** Zeigen Sie alle Produkte außer denen, die genau mit dem eingegebenen Wert übereinstimmen. _Beispiel: Zeigen Sie alle Produkte, bei denen_ `Material` _nicht_ `Cotton` _ist._

3.  **Ist leer:** Zeigen Sie nur Produkte, bei denen das ausgewählte Attribut keinen Wert hat (leer ist). _Beispiel: Finden Sie Produkte mit einer leeren_ `Short Description`_._

4.  **Ist nicht leer:** Zeigen Sie nur Produkte, bei denen das ausgewählte Attribut einen ausgefüllten Wert enthält. _Beispiel: Finden Sie Produkte, die einen ausgefüllten_ `Manufacturer` _Namen haben._

5.  **Enthält:** Der Attributwert muss das eingegebene Textfragment oder die Zahl enthalten. _Beispiel: Finden Sie alle Produkte, bei denen_ `Name` _das Wort_ `Summer` _enthält._

6.  **Enthält nicht:** Der Attributwert darf das eingegebene Textfragment nicht enthalten. _Beispiel: Schließen Sie Produkte aus, deren_ `SKU` _nicht_ `DISCOUNT` _enthält._

7.  **In / Nicht in:** Der Attributwert muss mit einem der mehreren eingegebenen Werte (durch Kommas getrennt) übereinstimmen oder darf mit keinem übereinstimmen. _Beispiel (In): Zeigen Sie Produkte, bei denen_ `Size` _ist_ `S, M, L`_._

8.  **Beginnt mit / Endet mit:** Finden Sie Produkte anhand der Start- oder Endzeichen des Wertes. _Beispiel: Finden Sie Produkte, deren_ `SKU` _mit_ `P_` _beginnt._

9.  **Ist null / Ist nicht null:** Technische Bedingungen, um System-Ebene-Werte richtig zu verarbeiten, die leer oder nicht leer sind.

### 3\. Filterung nach Datumsbedingungen

Dieser Typ gilt für Attribute mit Datumsformat und ermöglicht es Ihnen, nach Chronologie zu filtern (z. B. `created_at`, `updated_at`).

1.  **Ist leer / Ist nicht leer:** Zeigt Datensätze, bei denen das Datumsfeld fehlt oder ausgefüllt ist. _Beispiel: Finden Sie alle Produkte ohne ein_ `update date`_._

2.  **Gleich:** Zeigt Datensätze, bei denen der Wert genau mit dem eingegebenen Datum übereinstimmt. _Beispiel: Finden Sie alle Produkte, die am_ `2024-01-01` _erstellt wurden._

3.  **Weniger:** Zeigt Datensätze, bei denen der Datumswert chronologisch vor dem eingegebenen Datum liegt. _Beispiel: Finden Sie alle Produkte, die vor dem_ `letzten Monat` _aktualisiert wurden._

4.  **Größer:** Zeigt Datensätze, bei denen der Datumswert chronologisch nach dem eingegebenen Datum liegt. _Beispiel: Finden Sie alle neuen Produkte, die nach_ `gestern` _aktualisiert wurden._

5.  **Weniger oder gleich / Größer oder gleich:** Schließt das eingegebene Datum in der Ergebnismenge ein. _Beispiel: Finden Sie alle Produkte, die auf oder nach dem_ `01-01-2024` _aktualisiert wurden._

### 4\. Filterung nach Produktbildern

Dieser spezielle Filtertyp ist im **Katalog** über den Inline-Filter in der Spalte **Miniaturansicht** verfügbar. Er ist entscheidend für Inhaltsgenerierungsinitiativen, die multimodale Modelle verwenden.

1.  **Bild vorhanden:** Zeigen Sie nur diejenigen Produkte, an die ein Bild angehängt ist.

2.  **Bild fehlt:** Zeigen Sie nur diejenigen Produkte, für die ein Bild fehlt.

![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/8QgVAeRUMysJuzJ8692EqmUBXsfxeJ-Leg.png)

### 5\. Gruppierung von Bedingungen (Erweiterte Logik)

Sie können hochgradig spezifische Produktbatches unter Verwendung mehrerer Bedingungen und Gruppen erstellen.

1.  **Hinzufügen mehrerer Bedingungen:** Um nach mehreren Attributen zu filtern (z. B. `Color = Blue` **AND** `Size = M`), klicken Sie einfach mehrmals auf **„Bedingung hinzufügen"**.

2.  **Bedingungsgruppe:** Wenn Sie **„Bedingungsgruppe hinzufügen"** klicken, können Sie Bedingungen mit komplexer Logik kombinieren (z. B. (`Category = Shirts` **AND** `Price > 50`) **OR** (`Category = Jackets`)).
