---
title: '2.11.2. Pimcore: Attribute über DataHub bereitstellen (Veröffentlichungs-Flag und Bildergalerie)'
sidebar_position: 24
slug: >-
  /integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery
description: >-
  Fozzels erkennt Pimcore-Produkt- und Kategorieattribute über Ihren
  DataHub-GraphQL-Endpoint. Diese Anleitung erklärt, wie Sie das
  Veröffentlichungs-Flag und Ihre Bildergalerie bereitstellen, damit Fozzels sie
  lesen und schreiben kann.
---

Anders als Plattformen mit einem festen Produktschema erlaubt Pimcore Ihnen, eigene Datenobjekt-Klassen zu modellieren – deshalb liefert Fozzels dafür keine feste Attributliste mit. Stattdessen **erkennt Fozzels Attribute durch Introspektion Ihres DataHub-GraphQL-Endpoints**: Was die Schema Definition des Endpoints bereitstellt, sieht Fozzels genau so.

Wenn ein Attribut in Fozzels fehlt, fehlt es fast immer im **Query Schema** des Endpoints in Pimcore.

## So wird das Schema auf Fozzels-Attribute abgebildet

| DataHub Schema Definition | Auswirkung in Fozzels |
| --- | --- |
| Feld im **Query Schema** | Das Attribut wird angelegt und seine Werte werden abgerufen |
| Feld im **Mutation Schema** | Das Attribut wird als **beschreibbar** (writable) markiert, sodass Flows generierte Inhalte dorthin übertragen können |

> Ein Feld, das **nur** zum Mutation Schema hinzugefügt wird, wird nie zu einem Attribut – es gibt nichts zu lesen. Fügen Sie das Feld daher immer zuerst zum Query Schema hinzu; ergänzen Sie es zusätzlich im Mutation Schema, wenn Fozzels darauf schreiben soll.

Nach **jeder** Änderung an der Schema Definition:

1. **Speichern** Sie die DataHub-Konfiguration in Pimcore.
2. Öffnen Sie in Fozzels die Integration und klicken Sie auf **Synchronize** – dadurch wird das Schema neu eingelesen und die neuen Attribute werden angelegt.
3. Aktivieren Sie auf dem Tab **Attributes** das neue Attribut und legen Sie bei Bedarf dessen Flags **Filterable** / **Mutable** fest.

## Das Veröffentlichungs-Flag hinzufügen

Der Veröffentlichungsstatus von Pimcore ist eine *Systemspalte*, und DataHub stellt sie standardmäßig nicht bereit – sie muss explizit zum Schema hinzugefügt werden.

**In Pimcore:**

1. Gehen Sie zu **Settings → Data Hub** und öffnen Sie die Endpoint-Konfiguration, die Fozzels verwendet.
2. Öffnen Sie den Tab **Schema Definition** und bearbeiten Sie die Feldkonfiguration Ihrer Klasse **Product** (wiederholen Sie dies für die Klasse Category, wenn Sie das Flag dort ebenfalls möchten).
3. Öffnen Sie im Attributbaum die Gruppe **System** und fügen Sie **`published`** zu den Spalten des **Query Schema** hinzu.
4. Fügen Sie es außerdem zum **Mutation Schema** hinzu, wenn Fozzels Objekte veröffentlichen/depublizieren können soll.
5. Speichern Sie die Konfiguration.

**In Fozzels:** Öffnen Sie die Integration, klicken Sie auf **Synchronize** und aktivieren Sie dann auf dem Tab **Attributes** das neue Attribut `published`.

> **Wichtig:** Standardmäßig ruft Fozzels nur **veröffentlichte** Objekte ab, sodass das Attribut bei jedem Produkt `true` lauten würde. Um mit beiden Zuständen zu arbeiten, aktivieren Sie in den Einstellungen der Integration in Fozzels die Option **Include unpublished objects**. Unveröffentlichte Produkte kommen dann als normale Produkte an, und das Attribut `published` unterscheidet sie – Sie können danach filtern und es in Flow-Bedingungen verwenden.

## Die Bildergalerie bereitstellen

### Produktbilder lesen

Fozzels erstellt die Mediengalerie eines Produkts aus **jedem Feld vom Typ Bild**, das das Query Schema bereitstellt – die Feldnamen spielen keine Rolle. Unterstützte Feldtypen:

- **Image**
- **Advanced Image** (Bild mit Hotspots/Markern)
- **Image Gallery**

Fügen Sie Ihre Bildfelder zum **Query Schema** der Klasse Product hinzu, speichern Sie und klicken Sie in Fozzels auf **Synchronize**. Alle Bilder aus allen bereitgestellten Bildfeldern erscheinen in der Galerie des Produkts, und vorhandene Alt-Texte werden aus dem Metadateneintrag `alt` des Assets in jeder Store-Sprache gelesen.

### Generierte Bilder übertragen

Damit Fozzels KI-generierte Bilder zurück in Pimcore hochladen kann, benötigt der Endpoint drei Dinge:

1. **Ein beschreibbares Image-Gallery-Feld.** Die Klasse Product muss ein Feld vom Typ **Image Gallery** haben, das im **Mutation Schema** bereitgestellt wird. Fozzels erkennt es an seinem Typ, daher darf es beliebig benannt sein. Generierte Bilder werden an die Galerie **angehängt** – Ihre vorhandenen Bilder werden nie ersetzt.
2. **Aktivierte Asset-Abfragen und -Mutationen.** Aktivieren Sie in der Schema Definition die Entität **Asset** sowohl für **query** als auch für **mutation**. Fozzels nutzt dies, um die Bilddatei zu speichern (`createAsset`) und Alt-Texte am Asset zu lesen und zu schreiben (`getAsset` / `updateAsset`).
3. **Workspace-Berechtigungen.** Auf dem Tab **Security Definition** des Endpoints muss der Workspace Folgendes gewähren:
   - **read + update** auf den Produktobjekten,
   - **read** auf dem Asset-Teilbaum mit Ihren Produktbildern,
   - **create** auf dem Ordner, in dem neue Bilder landen sollen, und **update** auf Assets (für Alt-Texte).

**Wo Uploads landen:** Ein generiertes Bild wird neben den vorhandenen Galeriebildern des Produkts gespeichert. Konfigurieren Sie für Produkte ohne Bilder die Einstellung **Asset folder** der Integration in Fozzels (zum Beispiel `/products`) – dieser Ordner muss in Pimcore existieren, und der Workspace muss dort **create** erlauben.

### Alt-Texte

Fozzels schreibt Alt-Texte in die Metadaten des Assets unter dem üblichen Namen **`alt`**, bezogen auf die Sprache des Stores. Die Sprache muss in der Pimcore-Instanz konfiguriert sein (**Settings → System Settings → Localization**); Pimcore verwirft Metadaten in unbekannten Sprachen stillschweigend, und Fozzels meldet dies als Fehler, statt den Text zu verlieren.

## Fehlerbehebung

| Meldung in Fozzels | Ursache | Lösung |
| --- | --- | --- |
| Ein erwartetes Attribut fehlt | Feld nicht im **Query Schema** (oder nur im Mutation Schema) | Zum Query Schema hinzufügen, speichern, **Synchronize** |
| *Pimcore does not accept writes to … — the field is read-only on this DataHub endpoint* | Feld nicht im **Mutation Schema** | Zum Mutation Schema hinzufügen, speichern, **Synchronize** |
| *Pimcore exposes no writable image gallery on …* | Kein **Image Gallery**-Feld im Mutation Schema | Das Galeriefeld zum Mutation Schema hinzufügen |
| *No Pimcore asset folder is configured for this integration…* | Das Produkt hat noch keine Bilder und die Einstellung **Asset folder** ist leer | Den **Asset folder** der Integration in Fozzels festlegen |
| *The Pimcore asset folder … does not exist on this instance* | Der konfigurierte Pfad ist falsch | Die Einstellung auf einen vorhandenen Ordner im Pimcore-Asset-Baum zeigen lassen |
| *Pimcore refused to store the image …* | Dem Workspace fehlt **create** auf dem Zielordner | In der Security Definition des Endpoints create gewähren |
| *Pimcore accepted the update of asset … but kept no alt text for …* | Die Sprache des Stores ist in Pimcore nicht konfiguriert | Die Sprache unter **Settings → System Settings → Localization** hinzufügen |
