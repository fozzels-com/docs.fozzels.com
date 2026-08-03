---
id: '103000408207'
title: '4.3.2.a Generieren von Bildalternativtexten für Magento 2: Technische Einblicke & Schritt-für-Schritt-Konfiguration'
sidebar_position: 9
slug: /content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu
description: 'Da Sie bereits mit den grundlegenden Mechanismen der Konfiguration von Product Content Flows in Fozzels vertraut sind, konzentriert sich dieses technische Handbuch ausschließlich auf die einzigartige Architektur von Magento 2: die Interaktion mit dem Systemattribut `product_media_gallery` und die Optimierung des Token-Verbrauchs während Bulk-Media-Gallery-Verarbeitungsschleifen.'
keywords:
- Inhaltsfluss
- Content-Flow
- Inhaltsgenerierung
- Eingabeaufforderung
- Anweisung
---

Da Sie bereits mit den grundlegenden Mechanismen der Konfiguration von Product Content Flows in Fozzels vertraut sind, konzentriert sich dieses technische Handbuch ausschließlich auf die einzigartige Architektur von Magento 2: die Interaktion mit dem Systemattribut `product_media_gallery` und die Optimierung des Token-Verbrauchs während Bulk-Media-Gallery-Verarbeitungsschleifen.

## Schritt 1. Konfigurieren von Schreibberechtigungen für die Mediengalerie (Voraussetzung)

Im Gegensatz zu Standard-Textfeldern (z. B. Produktbeschreibungen, Namen) befinden sich Alt-Texte in Magento in der Bildergalerie-Infrastruktur und werden direkt in das Systemattribut `product_media_gallery` geschrieben. Standardmäßig behandelt Fozzels dieses Attribut als schreibgeschützt und nutzt es nur als Marker zum Filtern des Produktkatalogs nach Bildvorhandensein.

Um dem System die Berechtigung zu erteilen, Daten in diesen Slot zu überschreiben und einzufügen, müssen Sie seinen Status in **Änderbar** ändern:

1.  Navigieren Sie zum Hauptmenü oben: **Integrations** → wählen Sie Ihre aktive **Magento 2**-Instanz.

2.  Öffnen Sie **Registerkarte 3: Attribute**.

3.  Geben Sie `media` in die Such-/Filterleiste ein. Suchen Sie die Zeile mit dem Code `product_media_gallery` (Mediengalerie) und klicken Sie auf die türkisfarbene Schaltfläche **\[Attribut bearbeiten\]**.

4.  Suchen Sie im Einstellungsbereich im Abschnitt _Daten transformieren_ das Kontrollkästchen **Änderbar** und aktivieren Sie es (**\[v\] Änderbar**).

5.  Klicken Sie auf die blaue Schaltfläche **Speichern** in der unteren rechten Ecke.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/ryugiLjaej08TONBWZC6dvmgdeHvEKzJOA.png)
![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/vj3HVtE0gIyKK1lMzn0NeLCwxHle8IT1Cg.png)

##
Schritt 2. Flow-Initialisierung & Attributzuordnung

1.  Gehen Sie zum Abschnitt **Content Flows** und klicken Sie auf die Schaltfläche **Flow erstellen** (oder wählen Sie Zielprodukte direkt aus Ihrer Katalogansicht aus und klicken Sie auf **Aktionen → Flow erstellen**).

2.  Konfigurieren Sie auf der Registerkarte **1: Neuer Flow** Ihre Umgebungsparameter:

-   **Store / Integration:** Wählen Sie Ihre spezifische Magento-Instanz, Website-Setup und Ziel-Store-Ansicht aus den Dropdown-Menüs.

-   **Name:** Geben Sie einen klaren, technischen Titel für Ihren Flow an.

-   **Entitätstyp:** Dies wird automatisch auf `Produkt` gesetzt.

3.  **Zielattribut:** Klicken Sie in das Dropdown-Menü **Attribut\*** Auswahl, geben Sie `media` ein, und wählen Sie das Systemattribut **Mediengalerie**. Dies leitet die zukünftigen KI-generierten Strings sicher direkt in das Datenbankschema der Bildergalerie um, anstatt sie in Standard-Beschreibungsblöcke zu platzieren.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/Btu-8xXR_jSHpiFqqxtTZJBUXcu0hyrmTQ.png)

## Schritt 3. Auswahl des Vision-Modells & Scan-Modus (Delta vs. vollständiges Überschreiben)

Wählen Sie auf der Registerkarte **2: KI-Konfiguration** Ihren zugrunde liegenden Anbieter und das Modell aus (z. B. GPT- oder Gemini-Stufen mit Multi-Modal-Vision-Funktionen zur Analyse von Bild-Assets), und definieren Sie dann, wie der Ausführungs-Runner mit Ihrer Live-Magento-Storefront-Datenbank interagieren sollte:

-   **Delta-Modus (Kontrollkästchen "Alt-Texte neu generieren" ist NICHT AKTIVIERT):** Das Standardszenario. Der Hintergrund-Runner scannt Ihren Magento-Katalog und fordert KI-Vervollständigungen **nur für Bild-Assets an, deren Alt-Text-Feld derzeit leer ist**. Dies bewahrt Ihre bestehende manuelle SEO-Arbeit und spart Ihre API-Credits.

-   **Modus zum vollständigen Überschreiben (Kontrollkästchen "Alt-Texte neu generieren" ist AKTIVIERT):** Das umfassende Umschreib-Szenario. Die Engine umgeht vollständig die aktuellen Metadaten-Zustände in der Storefront, löscht alte Alt-Texte in der ausgewählten Charge und ersetzt sie alle durch neue KI-generierte Strings.

> ? **Technische Empfehlung:** Lassen Sie das Kontrollkästchen **Bildgröße ändern aktivieren** aktiviert. Falls eine Bilddatei in Magento größer als 2MB ist oder eine Auflösung von 2048px überschreitet, wird Fozzels sie automatisch auf Standard-Vision-Modell-Eingabebeschränkungen herunterskalieren. Dies schützt Ihre Pipeline aktiv vor Payload-Fehlern (fehlerhafte Generierungen) und optimiert Token-Credits.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/cbKMN8kS6jIqV-wZJGv_TV9zC74UxTrCFg.png)

## Schritt 4. Prompt-Engineering

Auf der Registerkarte **3: Flow-Auswahl & Prompt** erstellen Sie die expliziten Anweisungen für das KI-Modell. Da die Pipeline im Asset-zentrierten Modus arbeitet (1 Bild-Asset = 1 Prompt-Vervollständigung), muss Ihr Prompt das Vision-Modell anweisen, visuelle Elemente mit dem textuellen Kontext Ihres Produkts zu verschmelzen.

1.  Geben Sie im Arbeitsbereich **Prompt** Ihre grundlegenden technischen Regeln ein (z. B. Zeichenbeschränkungen – der Industriestandard liegt unter 125 Zeichen für Screen-Reader – und ein Verbot generischer einleitender Stoppausdrücke wie _"Bild von"_).

2.  Verwenden Sie die Seitenleiste **Attribute** auf der rechten Seite, um dynamische Magento-Tokens direkt in Ihren Prompt-Text zu suchen und **zu ziehen und abzulegen** (z. B. `{name}`, `{color}`, `{material}`, `{brand}`).

### **Prompt-Vorlagen:**

> **Option 1: E-Commerce Mode und Bekleidungsstandard** `"Schreiben Sie einen prägnanten, natürlichen SEO-Alt-Text für ein E-Commerce-Website-Accessibility-Tag. Beschreiben Sie die visuellen Details, den Stil und den Schnitt des auf dem Bild gezeigten Artikels. Integrieren Sie diese Attribute natürlich, wenn sie sichtbar sind: {color} {name} von {brand}, hergestellt aus {material}. Halten Sie die Ausgabe unter 125 Zeichen, vermeiden Sie strikt Keyword-Stuffing und beginnen Sie nicht mit Ausdrücken wie 'Foto von' oder 'Bild von'. Beschreiben Sie nur das, was tatsächlich auf dem Foto vorhanden ist."`

> **Option 2: Minimalistisch & produktdetailorientiert** `"Generieren Sie einen sauberen, professionellen Alt-Tag für einen Screen Reader. Konzentrieren Sie sich rein auf das Produktdesign, Layout und die charakteristischen visuellen Merkmale. Verwenden Sie die bereitgestellten Metadaten, um Genauigkeit zu gewährleisten: {brand} {name} in {color}. Halten Sie die Beschreibung realistisch, sachlich und unter 120 Zeichen. Vermeiden Sie Marketing-Fluff und verwenden Sie nicht 'Foto von' oder 'Bild von'. Geben Sie einfach die Beschreibungszeichenfolge zurück."`

## Schritt 5. Verarbeitungsvolumen-Limits & Batch-Listen-Layout

Im Feld **4: Automation**, die Konfiguration **"Anzahl der Produkte, für die täglich Inhalte erstellt werden"**, berechnet Verarbeitungsschwellenwerte basierend auf übergeordneten Product-Entitäten, nicht auf einzelnen Bilddateien. Da Fozzels jedes einzelne Media-Asset in der Galerie eines Produkts evaluiert, führt die Festlegung eines Limits auf 10 Produkte mit jeweils 5 Bildern zu 50 eindeutigen, abrechenbaren KI-Vision-Vervollständigungen. Dennoch bleiben alle generierten Ergebnisse ordnungsgemäß in Ihrer **Batch-Liste** organisiert, visuell nach Produkt-SKU gruppiert, damit Sie diese leicht überprüfen, bearbeiten oder in Massen genehmigen können, bevor Sie die Metadaten live bereitstellen.
