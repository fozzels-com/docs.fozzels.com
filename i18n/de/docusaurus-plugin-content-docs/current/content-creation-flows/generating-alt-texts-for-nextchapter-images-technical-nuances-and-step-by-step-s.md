---
id: '103000410112'
title: '4.3.2.b Alt-Texte für NextChapter-Bilder generieren: Technische Besonderheiten und Schritt-für-Schritt-Einrichtung'
sidebar_position: 10
slug: /content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s
description: Da Sie mit den Grundlagen der Einrichtung von Content Flows (Product Content Flows) in Fozzels bereits vertraut sind, konzentriert sich diese Anleitung…
keywords:
- Inhaltsfluss
- Content-Flow
---

Da Sie mit den Grundlagen der Einrichtung von Content Flows (Product Content Flows) in Fozzels bereits vertraut sind, konzentriert sich diese Anleitung ausschließlich auf die Besonderheiten der NextChapter-Architektur: die Arbeit mit dem Systemattribut **product\_media\_gallery** und die Optimierung der Token-Kosten bei der Stapelverarbeitung von Mediengalerien.

## Schritt 1. Schreibrechte für die Mediengalerie konfigurieren (zwingende Voraussetzung)

Anders als bei standardmäßigen Textfeldern (zum Beispiel Produktbeschreibung oder Produktname) liegen Alt-Texte in NextChapter innerhalb der Bildergalerie und werden direkt in das Attribut `product_media_gallery` geschrieben. Standardmäßig behandelt Fozzels dieses Attribut als Read-only und nutzt es als Marker, um Produkte nach dem Vorhandensein von Fotos zu filtern.
So erteilen Sie dem System die Berechtigung, Daten in diesem Feld zu schreiben und zu aktualisieren:

1.  Gehen Sie im Hauptmenü zu **Integrations** → wählen Sie Ihre aktive **NextChapter**-Instanz aus.
2.  Öffnen Sie **Tab 3: Attributes.**
3.  Geben Sie im Suchfeld `media` ein. Suchen Sie die Zeile mit dem Code `product_media_gallery` (Media Gallery) und klicken Sie auf die türkisfarbene Schaltfläche **\[Edit attribute\]**.
4.  Suchen Sie im Modalfenster im Abschnitt Transform Data die Option **Mutable** und setzen Sie das Häkchen (**\[v\] Mutable**).
5.  Klicken Sie unten rechts auf die blaue Schaltfläche **Save**.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/DgdusqsKuR07n_6ZVkUycVCUVVRc9SLNEw.png)![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/F371_zOBWTktWVS7poYzGt-L5es5KLOkXw.png)

## Schritt 2. Flow initialisieren und Attribute zuordnen

1.  Gehen Sie in den Bereich **Content Flows** und klicken Sie auf die Schaltfläche **Create Flow** (oder wählen Sie die gewünschten Produkte direkt im Katalog aus und klicken Sie auf **Actions → Create Flow**).

2.  **In Tab 1: New Flow** konfigurieren Sie die Umgebungsparameter:

    -   **Store / Integration:** Wählen Sie aus der Dropdown-Liste Ihre NextChapter-Instanz, die Site-Einstellungen und den gewünschten Store View aus.
    -   **Name:** Vergeben Sie einen klaren technischen Namen für den Flow.
    -   **Entity Type:** Der Wert Product wird automatisch gesetzt.
3.  **Target Attribute:** Klicken Sie auf das Feld zur Attributauswahl (`Attribute*`), geben Sie `media` ein und wählen Sie `Media Gallery`. Damit kann Fozzels die von der KI generierten Strings sicher direkt in das Datenbankschema der NextChapter-Galerie übertragen.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/yEYZO7DIJN90tk-_rv6kZaE6AOCY_rSOWg.png)

## Schritt 3. Vision-Modell und Scan-Modus auswählen (Delta vs. Full Overwrite)

Wählen Sie in **Tab 2: AI Configuration** den Anbieter und das Modell aus (zum Beispiel GPT- oder Gemini-Versionen mit Vision-Unterstützung für die Bildanalyse) und legen Sie anschließend den Interaktionsmodus mit Ihrem NextChapter-Storefront fest:

-   **Delta-Modus (Checkbox "Force regenerate ALT texts" DEAKTIVIERT):** Standardszenario. Der Hintergrundprozess scannt den NextChapter-Katalog und sendet nur für jene Bilder Anfragen an die KI, bei denen der Alt-Text aktuell leer ist. So bleiben Ihre manuellen SEO-Einstellungen erhalten und Sie sparen API-Credits.
-   **Full-Overwrite-Modus (Checkbox "Force regenerate ALT texts" AKTIVIERT):** Szenario für die vollständige Neuerstellung. Die Engine ignoriert die aktuellen Metadaten im Storefront vollständig, löscht die alten Alt-Texte in der ausgewählten Menge und ersetzt sie durch neue KI-Strings.

> **Technische Empfehlung:** Lassen Sie die Option **Enable Image Resize** eingeschaltet. Wenn die Bilddatei in NextChapter 2 MB oder eine Auflösung von 2048 px überschreitet, verkleinert Fozzels sie automatisch auf die Standardanforderungen der Vision-Modelle. Das schützt Ihren Flow vor Generierungsfehlern (Failed generations) und senkt den Token-Verbrauch.

![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/MSso5mlNSv6s9RgpZywIS_fORd61TfNESw.png)

## Schritt 4. Prompt-Erstellung (Prompt Engineering)

**In Tab 3: Flow Selection & Prompt** werden die Anweisungen für das KI-Modell formuliert. Da der Prozess im Einzeldatei-Modus arbeitet (1 Bild = 1 Generierung), muss Ihr Prompt visuelle Details mit dem textlichen Kontext des Produkts verbinden.

1.  Halten Sie im Feld **Prompt** die grundlegenden technischen Regeln fest (zum Beispiel eine Längenbegrenzung – Standard sind bis zu 125 Zeichen für Screenreader – und ein Verbot einleitender Formulierungen wie "Bild ...").
2.  Nutzen Sie das seitliche Panel **Attributes** auf der rechten Seite, um dynamische NextChapter-Token per Drag-and-drop direkt in den Prompt-Text zu ziehen (zum Beispiel `{name}`, `{color}`, `{material}`, `{brand}`).

### Prompt-Vorlagen:

#### **Option 1:** Für E-Commerce (Bekleidung und Schuhe)

> "Schreibe einen kompakten, natürlich klingenden SEO-Alt-Text für das Accessibility-Tag eines Onlineshops. Beschreibe die visuellen Details, den Stil und den Schnitt des Produkts auf dem Foto. Integriere diese Attribute auf natürliche Weise, sofern sie sichtbar sind: {color} {name} von {brand}, Material: {material}. Textlänge – bis zu 125 Zeichen. Vermeide Keyword-Stuffing und beginne nicht mit Formulierungen wie 'Foto ...' oder 'Bild ...'. Beschreibe nur das, was tatsächlich zu sehen ist."

#### **Option 2:** Minimalistisch (Produktdetails)

> "Erstelle ein sauberes, professionelles Alt-Tag für einen Screenreader. Konzentriere dich ausschließlich auf Design, Komposition und klar erkennbare visuelle Details des Produkts. Nutze die Metadaten für die Genauigkeit: {brand} {name} in der Farbe {color}. Die Beschreibung soll realistisch und sachlich sein und höchstens 120 Zeichen umfassen. Keine Marketingfloskeln und kein 'Foto ...' oder 'Bild ...'. Gib ausschließlich den fertigen String zurück."

## Schritt 5. Verarbeitungslimits und Aufbau der Batch List

**In Tab 4: Automation** berechnet das Feld "**Amount of products to create content for per day**" die Verarbeitungslimits auf Basis der übergeordneten Entitäten (Products), nicht auf Basis einzelner Bilddateien.
Da Fozzels jedes Medienelement in der Produktgalerie analysiert, gilt: Wenn Sie ein Limit von **10 Produkten** setzen und jedes davon **5 Bilder** hat, führt das System **50 separate kostenpflichtige Vision-Generierungen** durch.
Alle generierten Ergebnisse werden in der **Batch List** übersichtlich nach Produkt-SKU gruppiert. So können Sie neue Alt-Texte bequem prüfen, bearbeiten oder gesammelt freigeben, bevor sie auf die Website hochgeladen werden.
