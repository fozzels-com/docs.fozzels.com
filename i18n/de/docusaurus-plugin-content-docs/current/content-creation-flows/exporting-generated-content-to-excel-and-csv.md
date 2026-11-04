---
title: 4.7.6 Generierte Inhalte nach Excel und CSV exportieren
sidebar_position: 22.5
slug: /content-creation-flows/exporting-generated-content-to-excel-and-csv
description: >-
  Laden Sie generierte Inhalte aus einer Content Completion List als Excel- oder
  CSV-Datei herunter, wählen Sie Produkte und Spalten aus und öffnen Sie die Datei korrekt.
---

## Überblick

Sie können generierte Inhalte aus einer Content Completion List als Excel-Datei (.xlsx) oder CSV-Datei herunterladen. Sie wählen die Produkte und Spalten aus, Fozzels erstellt die Datei im Hintergrund, und sie erscheint 24 Stunden lang unter **Export / Generated Data**.

Der Export ist nützlich, wenn Sie die vollständigen Texte lesen möchten (in der Tabelle werden sie gekürzt), Inhalte zur Prüfung mit Kollegen oder einem Kunden teilen oder Ergebnisse in ein anderes System wie ein ERP, ein PIM oder eine Tabellenkalkulation importieren möchten.

![Content Completion List mit generierter Description, SEO Description und SEO Title](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/01-content-completion-list.png)

## So exportieren Sie

1. Öffnen Sie die **Content Completion List** des gewünschten Flows (Batch).
2. Markieren Sie die Produkte, die Sie exportieren möchten. Die Anzahl der ausgewählten Elemente erscheint im Menü, zum Beispiel **Actions (3)**.
3. Klicken Sie auf **Actions → Export**.

    ![Menü Actions mit der Option Export und drei ausgewählten Produkten](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/02-actions-export.png)

4. Wählen Sie im Fenster **Export Text Completions** das Format (CSV oder Excel) und bei CSV das Trennzeichen und die Zeilenoption. Siehe [Dateiformat](#dateiformat) weiter unten.
5. Markieren Sie die Spalten, die enthalten sein sollen. Generierte Inhalte und SKU sind standardmäßig ausgewählt.
6. Klicken Sie auf **Export as CSV** oder **Export as Excel**. Die Datei wird im Hintergrund erstellt.
7. Öffnen Sie im Seitenmenü **Dashboard → Export / Generated Data**.

    ![Seitenmenü mit Export / Generated Data unter Dashboard](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/03-sidebar-export-generated-data.png)

8. Sobald der Status **Available** anzeigt, klicken Sie in der Spalte Download auf **ZIP**.

    ![Liste Export / Generated Data mit einer verfügbaren ZIP-Datei](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/04-export-list-zip.png)

9. Entpacken Sie das Archiv: Es enthält die .xlsx- oder .csv-Datei.

Es werden nur Completions mit bereits generierten Inhalten aufgenommen. Das Archiv ist **24 Stunden** lang verfügbar; danach führen Sie den Export erneut aus. Der Dateiname setzt sich aus dem Batch-Namen und der Anzahl der Datensätze zusammen, zum Beispiel `my batch - 3 Completions.csv`.

## Dateiformat

Wählen Sie Excel, wenn ein Mensch die Datei lesen wird, und CSV, wenn die Daten in ein anderes System gehen.

| Format | Wann verwenden | Details |
| --- | --- | --- |
| Excel (.xlsx) | Prüfen, Bearbeiten, Teilen mit Kollegen | Öffnet sich direkt, keine Einstellungen nötig. SKU wird als Text gespeichert |
| CSV | Import in ein ERP, PIM oder anderes System | UTF-8-Kodierung, Textwerte in Anführungszeichen, Trennzeichen nach Wahl |

![CSV-Optionen: Trennzeichen und Keep each value on one line](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/05-csv-options.png)

**Trennzeichen (nur CSV).** Das Komma (,) ist der Standard für die meisten Importsysteme. Das Semikolon (;) ist für Dateien gedacht, die in Excel mit europäischen Regionaleinstellungen (Niederlande, Deutschland, Frankreich und andere) geöffnet werden: Dort erwartet Excel „;“, sonst landet alles in einer einzigen Spalte.

**Keep each value on one line (nur CSV).** Texte können Zeilenumbrüche enthalten, zum Beispiel zwischen HTML-Absätzen oder im Prompt. Ohne diese Option bleiben die Umbrüche innerhalb des Werts (in Anführungszeichen), und ein Produkt belegt mehrere physische Zeilen in der Datei. Mit der Option werden Zeilenumbrüche durch Leerzeichen ersetzt, und jedes Produkt belegt genau eine Zeile.

- Schalten Sie sie ein, wenn Ihr Importsystem keine Zeilenumbrüche innerhalb von Werten unterstützt (häufig bei ERP-Systemen).
- Bei HTML ist das unbedenklich: Leerzeichen zwischen Tags ändern die Darstellung des Inhalts nicht.
- Bei reinem Text mit Absätzen werden die Umbrüche durch Leerzeichen ersetzt und lassen sich nicht wiederherstellen.

## Verfügbare Spalten

Die Spalten sind in vier Blöcke gegliedert. Das Kontrollkästchen neben einem Blocknamen schaltet alle seine Spalten auf einmal ein oder aus, und der Zähler (z. B. „2 of 4“) zeigt, wie viele ausgewählt sind.

![Exportdialog mit allen aufgeklappten Spaltengruppen](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/06-export-columns.png)

| Block | Spalte | Überschrift in der Datei | Inhalt |
| --- | --- | --- | --- |
| Generated content | Vom Flow generierte Attribute | Attributcode, z. B. `descriptionHtml`, `seo.description`, `seo.title` | Die generierten Werte, vollständig. Standardmäßig ausgewählt |
| Product details | SKU | `sku` | Produktkennung. Standardmäßig ausgewählt |
| Product details | Name | `name` | Produktname |
| Product details | Origin ID | `origin_id` | Produkt-ID in der verbundenen Plattform (z. B. Shopify) |
| Product details | Entity type | `entity_type` | Entitätstyp, z. B. `product` |
| Flow details | Batch confirmed | `batch_confirmed` | Ob das Ergebnis bestätigt ist (`0` = nicht bestätigt) |
| Flow details | Prompt | `prompt` | Vollständiger Prompt-Text einschließlich Produktdaten. Lang, mit Zeilenumbrüchen |
| Flow details | Created at | `created_at` | Wann der Datensatz zum Batch hinzugefügt wurde (UTC) |
| Flow details | Executed at | `executed_at` | Wann die letzte Generierung lief (UTC) |
| Flow details | Synchronized at | `synchronized_at` | Wann der Inhalt mit dem Store synchronisiert wurde (UTC). Leer, wenn noch nicht synchronisiert |
| Catalog values | Katalogattribute | Attributcode, z. B. `markets` | Aktuelle Werte aus Ihrem Katalog, nicht generiert |

Der Block **Catalog values** listet Attribute auf, bei denen in den Attributeinstellungen **Show in batch list** aktiviert ist. In der Datei stehen zuerst die Produktdetails, gefolgt von Flow-Details, generierten Inhalten, Datumsangaben und Katalogwerten.

## Die Datei lesen

**Überschriften sind Attributcodes, keine Namen.** Attributnamen können sich je nach Kunde und Store-Sprache unterscheiden, während der Code eindeutig ist und sich nie ändert. Deshalb lässt sich dieselbe Datei ohne zusätzliches Mapping importieren. Der Exportdialog zeigt jeden Code in Grau neben dem Namen (z. B. Description · descriptionHtml).

**Datum und Uhrzeit sind in UTC.** Zeiten erscheinen als `2026-10-19 10:36:39` in UTC und können daher von der Fozzels-Oberfläche abweichen, die Ihre eigene Zeitzone anzeigt. So erscheint zum Beispiel 12:36 Mitteleuropäische Sommerzeit in der Datei als 10:36.

**HTML bleibt unverändert.** Ist **Allow HTML** für ein Attribut aktiviert (wie bei Description), enthält die Datei Markup mit Tags wie `<p>`, `<ul>` und `<li>`. Das ist für einen korrekten Import notwendig. Für Meta-Felder (SEO Title, SEO Description) sollte Allow HTML deaktiviert sein, sonst landen Tags sowohl in der Datei als auch in Ihrem Store.

![Attributeinstellungen mit den Optionen Allow HTML und Show in batch list](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/07-attribute-settings.png)

**Leere Zellen sind normal.** Ein leerer Wert bedeutet, dass keine Daten vorhanden sind: Das Attribut ist im Katalog nicht ausgefüllt, oder der Inhalt wurde noch nicht synchronisiert (leeres `synchronized_at`).

**Batch confirmed** wird als Zahl ausgegeben: `0` bedeutet, dass das Ergebnis nicht bestätigt ist.

## Eine CSV-Datei öffnen

Am sichersten öffnen Sie eine CSV-Datei über einen Import mit UTF-8-Kodierung und explizit festgelegtem Trennzeichen. Sonderzeichen (’, é, ä, Kyrillisch) und Spalten werden dann korrekt angezeigt.

**LibreOffice Calc** zeigt beim Öffnen jeder CSV-Datei automatisch das Fenster Textimport an:

1. Zeichensatz: **Unicode (UTF-8)**.
2. Trennoptionen: Lassen Sie **nur** das Trennzeichen markiert, das Sie beim Export gewählt haben (Komma oder Semikolon). LibreOffice merkt sich die Kästchen von früheren Dateien, daher können auch Tabulator oder Leerzeichen markiert sein.
3. Zeichenketten-Trennzeichen: **"** (doppeltes Anführungszeichen).
4. Damit SKU und IDs als Text erhalten bleiben, markieren Sie diese Spalten in der Vorschau und setzen Sie Spaltentyp → **Text**.
5. Klicken Sie auf **OK**.

![Fenster Textimport in LibreOffice Calc für eine exportierte CSV-Datei](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/08-libreoffice-text-import.png)

**Microsoft Excel** öffnet eine CSV-Datei per Doppelklick mit Ihren lokalen Einstellungen, sodass Sonderzeichen falsch angezeigt werden können (z. B. `itâ€™s` statt `it’s`). So vermeiden Sie das:

1. Gehen Sie in einer leeren Arbeitsmappe zu **Daten → Aus Text/CSV** und wählen Sie die Datei aus.
2. Dateiursprung: **65001: Unicode (UTF-8)**.
3. Trennzeichen: dasselbe, das Sie beim Export gewählt haben.
4. Klicken Sie auf **Laden**.

Wenn Sie die Datei nur lesen möchten, ist es einfacher, gleich im Excel-Format zu exportieren. Speichern Sie eine CSV-Datei nicht in Excel erneut, bevor Sie sie in ein anderes System importieren: Excel kann das Trennzeichen oder die Kodierung ändern oder lange Zahlen in das Format 7.81227E+12 umwandeln.

## FAQ

**Ich habe auf Export geklickt, aber es wurde keine Datei heruntergeladen.** Die Datei wird im Hintergrund erstellt und nicht automatisch heruntergeladen. Sie finden sie unter **Dashboard → Export / Generated Data**.

**Die Datei enthält weniger Produkte, als ich ausgewählt habe.** Es werden nur Datensätze mit generierten Inhalten exportiert. Prüfen Sie außerdem, ob Sie Produkte auf allen Seiten der Liste ausgewählt haben, nicht nur auf der aktuellen.

**In meiner CSV-Datei steht alles in einer Spalte.** Das Trennzeichen in der Datei passt nicht zu dem, was Ihr Programm erwartet. Exportieren Sie erneut mit dem anderen Trennzeichen („;“ für europäisches Excel) oder öffnen Sie die Datei wie oben beschrieben über einen Import.

**Ich sehe fehlerhafte Zeichen wie `â€™`.** Die Datei wurde nicht als UTF-8 geöffnet. Öffnen Sie sie über einen Import mit UTF-8-Kodierung oder exportieren Sie im Excel-Format.

**SKU wird als 7.81227E+12 angezeigt.** Das Tabellenkalkulationsprogramm hat eine lange Zahl in wissenschaftliche Notation umgewandelt. Setzen Sie diese Spalte beim Import der CSV-Datei auf Text. Beim Excel-Format tritt dieses Problem nicht auf.

**Die Zeiten in der Datei stimmen nicht mit der Tabelle überein.** Die Datei verwendet UTC, die Oberfläche dagegen Ihre Zeitzone.

**SEO-Felder enthalten `<p>`-Tags.** Für dieses Attribut ist Allow HTML aktiviert. Deaktivieren Sie es in den Attributeinstellungen und generieren Sie den Inhalt neu.

**Der Download-Link ist abgelaufen.** Archive werden 24 Stunden lang aufbewahrt. Führen Sie den Export erneut aus.
