---
id: '103000408096'
title: '4.5.1.a. Benutzerhandbuch: Automatisierter Bildflow für Magento 2'
sidebar_position: 14
slug: /content-creation-flows/user-guide-automated-image-flow-for-magento-2
description: Image Flow für Magento ist ein spezialisiertes, Enterprise-Grade-Automations-Tool, das für die Massen-KI-Bildgenerierung, automatisierte Metadaten-Zuordnung und direkte Synchronisierung mit Ihrem Magento-Katalog entwickelt wurde.
keywords:
- Bildfluss
- Bildflow
- Bildgenerierung
- Stapelliste
- Chargenliste
- Eingabeaufforderung
- Anweisung
- Fertigstellung
- Generierung
---

**Image Flow für Magento** ist ein spezialisiertes, Enterprise-Grade-Automations-Tool, das für die Massen-KI-Bildgenerierung, automatisierte Metadaten-Zuordnung und direkte Synchronisierung mit Ihrem Magento-Katalog entwickelt wurde. Durch die Konfiguration dieses Flows etablieren Sie eine autonome Pipeline, die Ihren Magento-Store überwacht, tausende Produkte verarbeitet und Ihre Website basierend auf erweiterten Filterkriterien dynamisch aktualisiert.

> **Wichtig:** Wir empfehlen dringend, den Flow **nicht zu aktivieren** (den Schalter "Aktiver Flow" **AUS**) bis Sie alle Konfigurationen in Fozzels vollständig abgeschlossen und Ihre Einstellungen getestet haben.

## 1\. Erstellung eines neuen Magento Image Flow (Registerkarte 1)

Diese Registerkarte handhabt die primäre Verbindung und Identität Ihrer Magento-Automatisierungssequenz.

-   **Option A: Über das Menü Image Flows** — Navigieren Sie zu **Image Flows** in der oberen Navigationsleiste, klicken Sie auf **Neuer Image Flow**, und wählen Sie nacheinander Ihre **Magento-Integration**, Website und Store-Ansicht aus den Dropdown-Menüs.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3sMs1RpGzJC1CfMq-OPKPRx6S7bvaX80XQ.png)

-   **Option B: Aus dem Produktkatalog** — Gehen Sie zu **Katalog → Produkte**, filtern Sie die spezifischen Magento-SKUs, die Sie verarbeiten möchten, wählen Sie diese aus und klicken Sie auf **Aktionen → Image Flow erstellen**. Dies füllt Ihre Magento Store-Ansicht und den Produktkontext automatisch auf.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/FYFCs9P6ybHQ4OrlVaSn9YmgmftqIdhxAw.png)

**Wesentliche Schritte:**

1.  **Geben Sie Ihrem Flow einen Namen:** Geben Sie Ihrem Flow einen klaren, beschreibenden Namen (z. B. "Magento Store - Herbst 2026 - Gemini Pro").

2.  **Bestätigen Sie die Auswahl:** Bestätigen Sie Ihre Magento Store-Parameter, indem Sie auf die Schaltfläche **Absenden** am Ende der Seite klicken.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/liZ6uL_K1ryZ9ltZQsCUAhG6jAYP4UqhrQ.png)

##
2\. KI-Konfiguration & Media-Gitter (Registerkarte 2)

Auf dieser Registerkarte definieren Sie die Kern-KI-Modell-Engine und die genauen visuellen Layout-Merkmale, die für Ihre Magento-Theme-Vorlagen erforderlich sind.

### **KI-Anbieter & Modellauswahl**

Wählen Sie Ihr Verarbeitungsnetzwerk und spezifisches Modell aus den interaktiven Karten auf dem Bildschirm:
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3eMz8tYlXhUnC_8wEhgtjjig_7FHQP_x-w.png)

-   **Google | Gemini:**

-   **Gemini 2.5 Flash | Nano Banana:** Ein schnelles und effizientes Modell, das für Aufgaben mit hohem Volumen und niedriger Latenz optimiert ist. Unterstützt **bis zu 3 Referenzvorlagen**.

-   **Gemini 3 Pro | Nano Banana Pro:** Entwickelt für professionelle Asset-Produktion und komplexe Anweisungen. Verfügt über einen Standard-"Thinking" Prozess, der die Komposition verfeinert und **bis zu 14 Referenzvorlagen** unterstützt.

-   **Gemini 3.1 Flash | Nano Banana 2:** Ein aktualisiertes, hochefizientes Modell, das für die Erstellung von Assets mit hohem Volumen ausgewogen ist. Unterstützt **bis zu 14 Referenzvorlagen**.

-   **Virtual Try-On `NEU`:** Ein spezialisiertes Modell zum Generieren fotorealistischer Bilder, die zeigen, wie Kleidung an einer Person aussieht (erfordert eine Personenbild-Vorlage und ein Produktkleidungs-Bild).

-   **OpenAI | ChatGPT:**

-   **GPT Image 1:** Ein präzises, hochgetreues Bildgenerierungsmodell, das die neuesten multimodalen Frameworks nutzt.

-   **GPT Image 1 Mini `NEU`:** Eine hochkosteneffiziente Bildgenenierungs- und Bearbeitungs-Engine – bietet das beste Preis-Leistungs-Verhältnis für Anwendungsfälle mit hohem Volumen.

-   **GPT Image 2 `NEU`:** Ein hochmodernes Generierungsmodell, das für schnelle, hochwertige Renderung mit flexiblen Auflösungen bis zu 3840px entwickelt wurde.

-   **xAI:**

-   **Grok Imagine Image:** Das Standard-Bildgenerierungsmodell von xAI, das hochwertige Bilder aus Textanforderungen liefert. Unterstützt **bis zu 5 Referenzvorlagen**.

-   **Grok Imagine Image Pro `PRO`:** Premium xAI-Architektur, die überlegene Bildqualität mit verbesserter Detail- und Texturgenauigkeit liefert. Unterstützt **bis zu 5 Referenzvorlagen**.

###
**Das interaktive Ausgabeformat-Gitter**

Magento-Themes verlassen sich stark auf präzise Bilddimensionen, um Layout-Verschiebungen auf Ihrem Frontend zu verhindern. Verwenden Sie das Gitter, um genaue Pixelvorgaben festzulegen:

1.  **Wählen Sie das Seitenverhältnis:** Wählen Sie in der linken Spalte Ihre Layout-Geometrie (z. B. Standard **1:1 Quadrat** für Kategoriegitter oder **3:4 Hochformat** für Produktdetailseiten (PDP)).

2.  **Auswahl von Auflösung & Skalierung:** Klicken Sie direkt auf eine Gitterzelle, die Ihrer gewünschten Pixelstufe unter den Spalten **512, 1K, 2K oder 4K** zugeordnet ist (z. B. **512x512** bis **4096x4096**, um ein tiefes Hover-Zoom-Erlebnis auf Ihrer Storefront zu bieten).

3.  **Das Vorschau-Panel:** Das interaktive rechte Panel rendert dynamisch einen visuellen Crop-Rahmen, das Zieldateiformat und berechnet die **Ges. Größe** (Dateigröße) und **Ges. Tokens** (Generierungskosten) pro Bildanfrage.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/Ked7uS5641FdzLgFJkkyBLIIB44pYiuh5Q.png)
3\. Magento-Katalog-Filterung & Prompting (Registerkarte 3)

Dieser Abschnitt fungiert als das kreative Gehirn Ihres Magento-Flows, das es Ihnen ermöglicht, Produkte dynamisch zu filtern und native Attribute in Ihre Prompts einzufügen.

### **Abschnitt A: Vorlagen auswählen**

-   **Die Universalitätsregel:** Da ein einzelner Satz von Vorlagen für einen gesamten Magento-Produkt-Cluster gilt, wählen Sie neutrale Assets. Vermeiden Sie Referenzen mit bestimmten Brand-Markierungen oder einzigartigen Details, die versehentlich über verschiedene Marken in Ihrem Magento-Bestand hinweg durchscheinen könnten.

-   **Kapazitätszähler:** Verfolgen Sie Ihre Vorlage-Zuordnungsplätze über den oberen Zähler. Modelle wie Gemini Pro ermöglichen bis zu 14 Referenzplätze, so dass Sie extreme Multi-Winkel- und Beleuchtungskonsistenz erreichen können.

-   **Hinzufügen von Referenzen:** Klicken Sie auf das große Feld **\[+\] Vorlage hinzufügen**, um das native Dropdown-Menü zu öffnen und Ihren Referenztyp auszuwählen:

1.  **Modell:** Wählen Sie ein Fashion-Modell-Asset aus der integrierten Fozzels-Bibliothek, um Posen und menschliche Styling zu setzen.

2.  **Szene:** Wählen Sie einen Hintergrundstil oder eine Umgebungsvorlage.

3.  **Produkt:** Fügen Sie ein zusätzliches Referenzbild Ihres Produkts ein, um der KI mehr Winkel oder Details zu geben.

4.  **Bild:** Laden Sie ein beliebiges benutzerdefiniertes Bild oder eine Referenzdatei direkt von Ihrem Computer-Layout hoch.

    5.  **Generierte Medien:** Wählen Sie ein Bild, das bereits erfolgreich in Fozzels gerendert wurde, um die Konsistenz zu wahren.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/poqeQbutVP7nGAfD5MDN1F9aCnQ23CE6iw.png)

### **Abschnitt B: Advanced Magento Rule Builder (Filter & Produkte auswählen)**

-   **Logische Operatoren:** Kombinieren Sie mehrere Kriterienparameter durch `UND` oder `ODER` logische Pfade.

-   **Gezielte SKU-Suche:** Verwenden Sie Bedingungen wie `SKU` `in` `[Wert, Wert]`, um Ihren Flow direkt auf explizite, kommagetrennte Magento-Attribut-Zeilen abzubilden. Die interaktive Vorschau unten wird sofort aktualisiert, um übereinstimmende Elemente anzuzeigen.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/l4Ka92XutqmJkQgI3uopMdusTJwSckSEIw.png)

### **Abschnitt C: Dynamische Attribut-Prompts**

-   **Magento-Attribut-Injektion:** Schreiben Sie Ihre Design-Anweisungen im Hauptterminal-Fenster, und nutzen Sie dann das Panel **Attribute** auf der rechten Seite. Sie können native Magento-Datenfelder (wie `Categoria`, `Color` oder `Material`) direkt in Ihren Text klicken oder per Drag & Drop einfügen. Fozzels ersetzt diese Platzhalter dynamisch durch eindeutige Werte für jedes einzelne im Batch verarbeitete Produkt.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/hSKoFNYycQr--RrbjrFaaNum4tvErHYsHA.png)

##
4\. Magento-Automatisierung & Bild-Benennungskonfigurationen (Registerkarte 4)

Diese Registerkarte steuert, wie Ihre Media-Assets zunächst in die Warteschlange für die Verarbeitung eingefügt werden und wie sie zur Injektion in die Magento-Datenbankarchitektur strukturiert werden, um eine ordnungsgemäße Standard-Datenzuordnung und SEO-Optimierung zu gewährleisten.

-   **Anzahl der pro Tag zu verarbeitenden Bilder:** Legen Sie Schwellwertbegrenzungen fest, um Generierungsflows bei langfristigen Hintergrundoperationen zu drosseln.

-   **Dateiname für pushed images (SEO-Naming):** Maximieren Sie die SEO-Gesundheit Ihres Magento-Stores durch Design programmatischer Dateinamen. Verwenden Sie Standardtext oder fügen Sie dynamische Attribut-Slugs aus dem Dropdown-Menü ein (wie `{name}` für den Produktnamen oder spezifische Code-Parameter wie `{color}`). Leerzeichen werden automatisch in saubere Bindestriche (`-`) vereinfacht. Das Suffix `_{id}.{ext}` wird vom System automatisch angehängt, um Datenbankdatei-Eindeutigkeit zu garantieren und das Überschreiben vorhandener Assets auf Ihrem Magento-Server zu verhindern.

-   **Bildposition im Store:** Geben Sie die Standard-Prioritätsgewicht-Nummer ein (Standard ist `101`). Niedrigere Nummern erscheinen früher in Ihrem Magento-Layout (`1` = erste / hervorgehoben). Ein Standardgewicht von `101` inseriert Ihre KI-Ausgaben sicher direkt hinter Ihren nativen, vom Store verwalteten Katalog-Bildern.

-   **Bildrollen im Store:** Ordnen Sie Assets direkt den nativen Magento-Media-Rollen zu, die von Ihrer aktiven Theme-Vorlage verwendet werden. Klicken Sie auf das Feld, um Standard-Fallback-Strukturrollen wie `Base` (Hauptproduktbild), `Small`, `Thumbnail` oder `Swatch` zuzuweisen.

-   **Pushed images auf der Produktseite ausblenden:** Aktivieren Sie dieses Kontrollkästchen, um Grafiken sicher mit Ihrem Magento-Mediendatenordner für Backend-Technische Funktionen (wie Checkout-Wagen-Symbole oder sekundäre benutzerdefinierte Schieberegler) zu synchronisieren, ohne sie in Ihrem Haupt-Frontend-Consumer-Galerie-Karussell anzuzeigen.

-   **Vollautomatisch \[Demnächst\]:** Diese Funktion ist derzeit in Entwicklung. Sobald sie aktiv ist, können Sie dieses Kontrollkästchen aktivieren, um die menschliche Validierung vollständig zu umgehen und Bilder direkt in Ihre Live-Magento-Store-Ansichten zu veröffentlichen, sobald sie gerendert werden.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/zAHGFiGSaSobL-Deg00nawI92l2RDf4wzw.png)

##

## 5. ****Flow-Aktivierung & Ausführung****

Sobald Sie alle Zuordnungsfelder auf Registerkarte 4 abgeschlossen haben, ist Ihre automatisierte Pipeline bereit für die Bereitstellung. Führen Sie die folgenden Schritte aus, um die Generierungs-Engine zu initialisieren:

1.  **Aktivieren Sie den Flow (Aktiver Flow-Schalter):** Verschieben Sie den Master **Aktiver Flow**-Schalter in der oberen rechten Ecke der Seite auf die Position **AN**. Dies überführt Ihre Automatisierung offiziell aus einem Entwurfszustand in eine operative Routine.

2.  **Starten Sie die Generierung (Planen & Schließen / Jetzt ausführen):**

-   Klicken Sie auf die grüne Schaltfläche mit Split-Funktion in der unteren rechten Ecke des Bildschirms.

-   Wählen Sie **Jetzt ausführen** aus den Dropdown-Optionen. Das System sperrt Ihr endgültiges Konfiguration-Layout, schließt den Builder-Arbeitsbereich und löst sofort die Background-Engine aus, um Ihren Magento-Produkt-Datensatz-Batch zu verarbeiten.

3.  **Überwachen Sie den Fortschritt:** Um den Rendering-Status in Echtzeit anzuzeigen oder direkt in die Moderations-Warteschlange zu springen, klicken Sie auf die türkisfarbene Schaltfläche **\[Batch List\]** in der unteren linken Ecke. Dies leitet Sie sofort zu Ihren chronologischen Verarbeitungsprotokollen weiter.

## 6\. Arbeiten mit der Batch-Liste & Überprüfungen

Falls die Option **Vollautomatisch** deaktiviert ist, werden alle Assets direkt zur **Batch-Liste** weitergeleitet, um Überprüfung und manuelle Bereitstellung zu ermöglichen.

### **Navigation in der Batch-Übersicht**

Klicken Sie auf die Schaltfläche **Batch-Liste**, um Ihre Ausführungsprotokolle zu laden. Wählen Sie Ihre Sitzung chronologisch in der linken Tabelle aus und verwenden Sie das Hauptfenster **Image Completion List**, um die Produktverarbeitung Zeile für Zeile zusammen mit ihren ursprünglichen Magento-SKUs zu überwachen.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/oXCxEay_94461PqsajzJPS4wYBlWEgCZjA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/5r4iWyzzfg14_CTFejOGP9ZVint4EoOtnw.png)

### **Die konsolidierte Review-Schnittstelle ("Swipe-and-Sync")**

Das Klicken auf das **Augensymbol** startet unsere optimierte, nebeneinander angelegte Überlagerung, die Ihnen eine schnelle Batch-Überprüfung und die Außerkraftsetzung globaler Parameter auf einzelner Basis ermöglicht:

-   **Nebeneinander-Überprüfung:** Das Panel **Generiert (Links)** zeigt die neue KI-Option; das Panel **Original (Rechts)** zeigt die Referenzdatei Ihres Magento-Stores. Verwenden Sie **\[Zoom\]** auf beiden Seiten für Mikro-Inspektionen.

-   **Magento Metadaten-Override-Konsole:** Direkt unter den Bild-Karten können Sie die spezifischen Storefront-Einstellungen für das ausgewählte Produkt vor dem Go-Live optimieren:

-   **POSITION:** Ändern Sie manuell die Galerie-Reihenfolge-Textbox (z. B. senken Sie auf `101` ab, wenn Sie möchten, dass dieses spezifische Render das Haupt-Thumbnail ist).

-   **ROLLEN:** Klicken Sie auf die interaktiven Umschalt-Abzeichen (`Base`, `Small`, `Thumbnail`, `Swatch`), um native Magento-Präsentationswerte für diese spezifische Datei dynamisch zuzuweisen oder zu entfernen.

-   **AUF PDP AUSBLENDEN:** Aktivieren Sie diese Box, um nur diese einzelne Asset aus dem Produktdetail-Seiten-Karussell auszublenden.

-   **Die Kontrollschleife:**

-   **Neu generieren:** Löst eine sofortige, uneingeschränkte Neusausführung für eine alternative visuelle Variation aus, falls das Layout eine Überarbeitung benötigt.

-   **Akzeptieren & nächste:** Genehmigt die Version, sperrt Ihre benutzerdefinierten Magento-Metadaten-Overrides und **öffnet sofort das nächste Bild** in Ihrer Batch-Warteschlange.

##
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/fghCPbvdab9wtI-u0AWAUQPsuXIrvMCEPg.png)
6\. Massenaktionen & Lokale ZIP-Exporte

Fozzels bietet vollständige Datenportabilität über Ihren visuellen Bestand. Sie können Batches direkt zu Magento pushen oder Ordner lokal exportieren.

### **Ausführung von Massenaktionen:**

1.  Aktivieren Sie die Auswahlkästchen auf der linken Seite der Zeilen in Ihrer Tabelle **Image Completion List**.

2.  Öffnen Sie das Dropdown-Menü **Aktionen** direkt über den Datenraster-Kopfzeilen und wählen Sie Ihre Routine:

-   **Ausgewählte anzeigen:** Filtert Ihren Arbeitsbildschirm, um nur Ihre markierten Magento-Produktzeilen zu isolieren.

-   **Bilder herunterladen (ZIP):** Löst die Background-Zusammenstellung aller markierten hochauflösenden, KI-generierten Assets in ein einzelnes komprimiertes Paket aus.

### **Wo finden Sie Ihre heruntergeladenen Archive**

Da die Verarbeitung großer Mengen hochauflösender Bilder einige Momente dauern kann, werden Archive im Hintergrund generiert. Um Ihre abgeschlossenen Dateien herunterzuladen:

1.  Klicken Sie auf das Dropdown-Menü **Dashboard** in der oberen rechten Ecke der Hauptnavigationsleiste.

2.  Wählen Sie **Export / Generierte Daten** aus der Liste.

3.  Sobald das Status-Abzeichen grün wird (**Verfügbar**), klicken Sie auf die blaue Schaltfläche **\[ZIP\]** in der Spalte _Download_, um das Archiv direkt auf Ihrem Computer zu speichern.

> ⚠️ **Wichtiger Hinweis:** Generierte ZIP-Dateien werden auf dem Server gespeichert und sind nur **24 Stunden lang verfügbar**. Vergessen Sie nicht, Ihre Assets herunterzuladen, bevor der Link abläuft!

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/EqkvThCVlPgUbKnTorc6vQ3Ilx2CxPOccg.png)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/b3yz16xNhZFEKIfuUAB_xhtCTPD7feQp6w.png)

##
7\. SEO-Optimierung: Generieren von Alt-Texten für neue Bilder

Zusätzlich zu visuellen Assets kann Fozzels automatisch relevante, SEO-optimierte Alt-Texte (alternative Beschreibungen) für jedes neue KI-Bild, das zu Ihrem Magento-Store gepusht wird, generieren. Dies verbessert erheblich die Ranking-Faktoren Ihres Katalogs in den Google Bildersuche-Ergebnissen.

Um zu erfahren, wie Sie automatisierte Generierung und Metadaten-Zuordnung für Alt-Tags konfigurieren, lesen Sie mehr hier: **Benutzerhandbuch: Automatisierte Alt-Texte und SEO für Magento**.
