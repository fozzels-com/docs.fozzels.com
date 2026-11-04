---
title: 4.7.6 Gegenereerde content exporteren naar Excel en CSV
sidebar_position: 22.5
slug: /content-creation-flows/exporting-generated-content-to-excel-and-csv
description: >-
  Download gegenereerde content uit een Content Completion List als Excel- of
  CSV-bestand, kies de producten en kolommen en open het bestand op de juiste
  manier.
---

## Overzicht

U kunt gegenereerde content uit een Content Completion List downloaden als Excel-bestand (.xlsx) of CSV-bestand. U kiest de producten en kolommen, Fozzels maakt het bestand op de achtergrond aan en het verschijnt 24 uur lang onder **Export / Generated Data**.

Exporteren is handig wanneer u de volledige teksten wilt lezen (in de tabel worden ze ingekort), content ter review wilt delen met collega's of een klant, of resultaten wilt importeren in een ander systeem, zoals een ERP, een PIM of een spreadsheet.

![Content Completion List met gegenereerde Description, SEO Description en SEO Title](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/01-content-completion-list.png)

## Zo exporteert u

1. Open de **Content Completion List** van de flow (batch) die u nodig heeft.
2. Vink de producten aan die u wilt exporteren. Het aantal geselecteerde items verschijnt in het menu, bijvoorbeeld **Actions (3)**.
3. Klik op **Actions → Export**.

    ![Het menu Actions met de optie Export en drie geselecteerde producten](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/02-actions-export.png)

4. Kies in het venster **Export Text Completions** het formaat (CSV of Excel) en, voor CSV, het scheidingsteken en de regeloptie. Zie [Bestandsformaat](#bestandsformaat) hieronder.
5. Vink de kolommen aan die u wilt opnemen. Gegenereerde content en SKU zijn standaard geselecteerd.
6. Klik op **Export as CSV** of **Export as Excel**. Het bestand wordt op de achtergrond aangemaakt.
7. Open in het zijmenu **Dashboard → Export / Generated Data**.

    ![Zijmenu met Export / Generated Data onder Dashboard](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/03-sidebar-export-generated-data.png)

8. Zodra de status **Available** is, klikt u op **ZIP** in de kolom Download.

    ![Lijst Export / Generated Data met een beschikbaar ZIP-bestand](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/04-export-list-zip.png)

9. Pak het archief uit: het bevat het .xlsx- of .csv-bestand.

Alleen completions die al gegenereerde content hebben, worden opgenomen. Het archief is **24 uur** beschikbaar; voer daarna de export opnieuw uit. De bestandsnaam bestaat uit de naam van de batch en het aantal records, bijvoorbeeld `my batch - 3 Completions.csv`.

## Bestandsformaat

Kies Excel wanneer een persoon het bestand gaat lezen, en CSV wanneer de gegevens naar een ander systeem gaan.

| Formaat | Wanneer gebruiken | Details |
| --- | --- | --- |
| Excel (.xlsx) | Controleren, bewerken, delen met collega's | Opent direct, geen instellingen nodig. SKU wordt als tekst opgeslagen |
| CSV | Importeren in een ERP, PIM of ander systeem | UTF-8-codering, tekstwaarden tussen aanhalingstekens, scheidingsteken naar keuze |

![CSV-opties: scheidingsteken en Keep each value on one line](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/05-csv-options.png)

**Scheidingsteken (alleen CSV).** Komma (,) is de standaard voor de meeste importsystemen. Puntkomma (;) is bedoeld voor bestanden die in Excel worden geopend met Europese landinstellingen (Nederland, Duitsland, Frankrijk en andere): daar verwacht Excel “;”, anders komt alles in één kolom terecht.

**Keep each value on one line (alleen CSV).** Teksten kunnen regeleinden bevatten, bijvoorbeeld tussen HTML-alinea's of in de prompt. Zonder deze optie blijven de regeleinden binnen de waarde (tussen aanhalingstekens) en neemt één product meerdere fysieke regels in het bestand in beslag. Met de optie worden regeleinden vervangen door spaties en neemt elk product precies één regel in beslag.

- Zet de optie aan als uw importsysteem geen regeleinden binnen waarden ondersteunt (gebruikelijk bij ERP-systemen).
- Voor HTML is dit veilig: spaties tussen tags veranderen niets aan hoe de content wordt weergegeven.
- Bij platte tekst met alinea's worden de regeleinden vervangen door spaties en kunnen ze niet worden hersteld.

## Beschikbare kolommen

De kolommen zijn verdeeld over vier blokken. Met het selectievakje naast de naam van een blok zet u alle kolommen daarvan in één keer aan of uit, en de teller (bijv. “2 of 4”) toont hoeveel er zijn geselecteerd.

![Exportvenster met alle kolomgroepen uitgeklapt](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/06-export-columns.png)

| Blok | Kolom | Kop in het bestand | Bevat |
| --- | --- | --- | --- |
| Generated content | Attributen die door de flow zijn gegenereerd | Attribuutcode, bijv. `descriptionHtml`, `seo.description`, `seo.title` | De gegenereerde waarden, volledig. Standaard geselecteerd |
| Product details | SKU | `sku` | Productidentificatie. Standaard geselecteerd |
| Product details | Name | `name` | Productnaam |
| Product details | Origin ID | `origin_id` | Product-ID in het gekoppelde platform (bijv. Shopify) |
| Product details | Entity type | `entity_type` | Type entiteit, bijv. `product` |
| Flow details | Batch confirmed | `batch_confirmed` | Of het resultaat is bevestigd (`0` = niet bevestigd) |
| Flow details | Prompt | `prompt` | Volledige prompttekst inclusief productgegevens. Lang, met regeleinden |
| Flow details | Created at | `created_at` | Wanneer het record aan de batch is toegevoegd (UTC) |
| Flow details | Executed at | `executed_at` | Wanneer de laatste generatie is uitgevoerd (UTC) |
| Flow details | Synchronized at | `synchronized_at` | Wanneer de content naar de winkel is gesynchroniseerd (UTC). Leeg als nog niet gesynchroniseerd |
| Catalog values | Catalogusattributen | Attribuutcode, bijv. `markets` | Huidige waarden uit uw catalogus, niet gegenereerd |

Het blok **Catalog values** toont attributen waarvoor **Show in batch list** is ingeschakeld in de attribuutinstellingen. In het bestand komen eerst de productgegevens, gevolgd door de flowgegevens, de gegenereerde content, de datums en de catalogwaarden.

## Het bestand lezen

**Koppen zijn attribuutcodes, geen namen.** Attribuutnamen kunnen per klant en per winkeltaal verschillen, terwijl de code uniek is en nooit verandert. Daardoor kan hetzelfde bestand zonder extra mapping worden geïmporteerd. Het exportvenster toont elke code in grijs naast de naam (bijv. Description · descriptionHtml).

**Datums en tijden zijn in UTC.** Tijden worden weergegeven als `2026-10-19 10:36:39` in UTC, dus ze kunnen afwijken van de Fozzels-interface, die uw eigen tijdzone toont. Zo wordt 12:36 Midden-Europese zomertijd in het bestand weergegeven als 10:36.

**HTML blijft ongewijzigd.** Als **Allow HTML** is ingeschakeld voor een attribuut (zoals voor Description), bevat het bestand opmaak met tags zoals `<p>`, `<ul>` en `<li>`. Dit is nodig voor een correcte import. Voor metavelden (SEO Title, SEO Description) moet Allow HTML uitgeschakeld zijn, anders komen tags zowel in het bestand als in uw winkel terecht.

![Attribuutinstellingen met de opties Allow HTML en Show in batch list](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/07-attribute-settings.png)

**Lege cellen zijn normaal.** Een lege waarde betekent dat er geen gegevens zijn: het attribuut is niet ingevuld in de catalogus, of de content is nog niet gesynchroniseerd (lege `synchronized_at`).

**Batch confirmed** wordt als getal teruggegeven: `0` betekent dat het resultaat niet is bevestigd.

## Een CSV-bestand openen

De veiligste manier om een CSV te openen is via een import met UTF-8-codering en een expliciet ingesteld scheidingsteken. Speciale tekens (’, é, ä, Cyrillisch) en kolommen worden dan correct weergegeven.

**LibreOffice Calc** toont automatisch het venster Text Import wanneer u een CSV opent:

1. Character set: **Unicode (UTF-8)**.
2. Separator Options: laat **alleen** het scheidingsteken aangevinkt dat u bij de export heeft gekozen (Comma of Semicolon). LibreOffice onthoudt de vakjes van eerdere bestanden, dus Tab of Space kan ook aangevinkt zijn.
3. String delimiter: **"** (dubbel aanhalingsteken).
4. Om SKU en ID's als tekst te behouden, selecteert u die kolommen in de voorbeeldweergave en stelt u Column type → **Text** in.
5. Klik op **OK**.

![Venster Text Import van LibreOffice Calc voor een geëxporteerde CSV](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/08-libreoffice-text-import.png)

**Microsoft Excel** opent een CSV met uw lokale instellingen wanneer u erop dubbelklikt, waardoor speciale tekens onjuist kunnen worden weergegeven (bijv. `itâ€™s` in plaats van `it’s`). Zo voorkomt u dit:

1. Ga in een lege werkmap naar **Gegevens → Van tekst/CSV** en selecteer het bestand.
2. Bestandsoorsprong: **65001: Unicode (UTF-8)**.
3. Scheidingsteken: hetzelfde dat u bij de export heeft gekozen.
4. Klik op **Laden**.

Wilt u het bestand alleen lezen, dan is het eenvoudiger om direct in Excel-formaat te exporteren. Sla een CSV niet opnieuw op in Excel voordat u die in een ander systeem importeert: Excel kan het scheidingsteken of de codering wijzigen, of lange getallen omzetten naar het formaat 7.81227E+12.

## Veelgestelde vragen

**Ik heb op Export geklikt, maar er is geen bestand gedownload.** Het bestand wordt op de achtergrond aangemaakt en niet automatisch gedownload. U vindt het onder **Dashboard → Export / Generated Data**.

**Het bestand bevat minder producten dan ik heb geselecteerd.** Alleen records met gegenereerde content worden geëxporteerd. Controleer ook of u producten op alle pagina's van de lijst heeft geselecteerd, en niet alleen op de huidige pagina.

**Alles in mijn CSV staat in één kolom.** Het scheidingsteken in het bestand komt niet overeen met wat uw programma verwacht. Exporteer opnieuw met het andere scheidingsteken (“;” voor Europese Excel) of open het bestand via een import zoals hierboven beschreven.

**Ik zie onleesbare tekens zoals `â€™`.** Het bestand is niet als UTF-8 geopend. Open het via een import met UTF-8-codering of exporteer in Excel-formaat.

**SKU wordt weergegeven als 7.81227E+12.** Het spreadsheetprogramma heeft een lang getal omgezet naar wetenschappelijke notatie. Stel deze kolom bij het importeren van de CSV in op Tekst. Het Excel-formaat heeft dit probleem niet.

**De tijden in het bestand komen niet overeen met de tabel.** Het bestand gebruikt UTC, terwijl de interface uw tijdzone gebruikt.

**SEO-velden bevatten `<p>`-tags.** Allow HTML is ingeschakeld voor dat attribuut. Schakel het uit in de attribuutinstellingen en genereer de content opnieuw.

**De downloadlink is verlopen.** Archieven worden 24 uur bewaard. Voer de export opnieuw uit.
