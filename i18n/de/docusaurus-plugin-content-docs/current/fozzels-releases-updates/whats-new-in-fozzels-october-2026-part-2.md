---
title: "Neues in Fozzels: Oktober 2026, Teil 2"
sidebar_position: 19
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2
description: >-
  Workflows, die Texte mit KI-Feedback neu generieren, Bildneugenerierung mit
  neuen Einstellungen, flexibler Excel- und CSV-Export, bessere ALT-Texte, neue
  KI-Modelle, Sprachchat mit Jane und automatische KI-Kennzeichnungen für Bilder
  und Videos.
whats_new:
  released_at: 2026-10-23
  items:
    - area: 'Überblick'
      title: 'Oktober 2026, Teil 2: Ergebnisse nach Ihren Standards'
      body: 'Texte, die so lange verbessert werden, bis sie Ihren Regeln folgen, Bildneugenerierung mit neuen Einstellungen, flexibler Excel- und CSV-Export und echte ALT-Texte statt Platzhaltern. Das ist neu.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/01-cover.jpg
    - tag: new
      area: 'Filter'
      title: 'Listen in Filter einfügen'
      body: 'Fügen Sie EANs oder SKUs aus Excel in eine „is one of“- oder „is not one of“-Bedingung ein und klicken Sie auf Split, um daraus einzelne Werte zu machen.'
    - tag: new
      area: 'Berichte'
      title: 'Export nach Excel und CSV'
      body: 'Wählen Sie, welche Spalten in die Datei kommen. Benennen Sie die Textspalte nach dem Attributcode, und die Datei ist bereit für den Import in Ihren Shop oder Ihr ERP.'
    - tag: new
      area: 'ALT Flows'
      title: 'Echte ALT-Texte statt „IMG_2045.jpg“'
      body: 'Die neue Bedingung „has an image whose ALT contains“ findet Platzhalter-ALTs, zum Beispiel mit „.jpg“, damit Fozzels echte schreiben kann.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/04-alt-contains-condition.png
    - tag: new
      area: 'KI-Modelle'
      title: 'Neue KI-Modelle'
      body: 'Gemini 4 Argon und Claude Haiku 5.5 für Texte, GPT Image 2.5 Flare und Sunburst sowie Nano Banana 2.1 für Bilder, HeyGen Video 1.0 für Videos. GPT-4.1 und GPT Image 1 wurden eingestellt.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/06-new-ai-models.png
    - tag: new
      area: 'Workflows'
      title: 'Mit Feedback neu generieren'
      body: 'Fügen Sie diese Aktion einem Workflow-Block hinzu, und Fozzels generiert einen Text, der gegen Ihre Regeln verstößt, mit dem Grund als Feedback neu, bis zu 3-mal. Die KI-Prüfung wird separat berechnet.'
    - tag: new
      area: 'Image Flows'
      title: 'Bilder mit neuen Einstellungen neu generieren'
      body: 'Wählen Sie andere Produktfotos oder ein anderes KI-Modell, oder ändern Sie Prompt und Presets für ein einzelnes Ergebnis. Das neue Bild ersetzt das bisherige.'
    - area: 'Feedback'
      title: 'Danke, dass Sie Fozzels nutzen'
      body: 'Haben Sie eine Idee oder einen Wunsch für das nächste Release? Teilen Sie ihn Jane in der App mit oder schreiben Sie an support@fozzels.com.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/10-share-your-idea.png
---

![Neues in Fozzels, Oktober 2026, Teil 2](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/01-cover.jpg)

Der zweite Teil unserer Oktober-Updates bringt Ihre Inhalte auf das nächste Level. Das erwartet Sie:

- **Eine neue Stufe der Ergebnisqualität.** Eine neue Art von Workflow mit KI-Validierung und Feedback: Fozzels prüft Ihre Texte und verbessert sie so lange, bis sie stimmen.
- **Noch näher am perfekten Bild.** Beim Neugenerieren von Bildern können Sie jetzt das Quell-Produktfoto, das KI-Modell, den Prompt und die Presets ändern.
- **Ihre Ergebnisse, Ihre Tabellen.** Laden Sie Berichte als Excel- oder CSV-Datei herunter und wählen Sie genau, welche Daten in die Datei kommen.
- **Aussagekräftige ALT-Texte, auch wo bisher Platzhalter standen.** Fozzels findet jetzt Bilder, deren ALT nur ein Dateiname ist, und erstellt echte Beschreibungen für sie.
- **Neue KI-Modelle, Sprachchat mit Jane und automatische KI-Kennzeichnungen** für Bilder und Videos.

Hier finden Sie alle Neuerungen und erfahren, wie Sie sie nutzen.

## Highlights

### Automatische Neugenerierung: Texte, die Ihren Regeln folgen

Workflows können einen Text jetzt automatisch neu generieren, wenn er Ihre Anforderungen nicht erfüllt. Fügen Sie einem beliebigen Workflow-Block die neue Aktion **Regenerate with feedback** hinzu: Der Text wird zusammen mit der Begründung zur Prüfung zurückgehalten, und Fozzels generiert ihn im Hintergrund anhand dieses Feedbacks erneut. Unter **Maximum regenerations** legen Sie fest, wie viele Versuche erlaubt sind, bis zu 3.

<video controls muted playsInline preload="metadata" width="100%" title="KI-Prüfung und Neugenerierung in einem Workflow" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/02-regenerate-with-feedback.mp4"></video>

Wenn Sie die KI-Validierung nutzen (die Bedingung **AI validation fails**), werden die zusätzlichen KI-Anfragen für die Prüfung separat berechnet.

**Auch ohne Workflow.** Wenn Sie keinen solchen Workflow eingerichtet haben, generiert Fozzels als verdächtig markierte Texte trotzdem neu, allerdings ohne Feedback, nach den regulären Regeln für verdächtige Inhalte und nicht sofort, sondern in der nächsten Generierungsrunde.

**Neue Aktion: Sanitize text.** Bereinigt einen Text genauso wie eine neue Generierung: korrigiert kodierte Zeichen wie `&amp;`, wandelt Markdown um und entfernt nicht erlaubte HTML-Tags.

### Flexibler Export nach Excel und CSV

Sie können Ergebnisse jetzt nach Excel oder CSV exportieren und genau wählen, welche Spalten in die Datei kommen, zum Beispiel nur die SKU und die generierte Beschreibung. Benennen Sie die Spalte mit dem generierten Text nach dem Attributcode, und die Datei ist bereit für den Import in Ihren Shop oder Ihr ERP. Fozzels merkt sich Ihre Auswahl für das nächste Mal.

<video controls muted playsInline preload="metadata" width="100%" title="Generierte Inhalte nach Excel und CSV exportieren" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/03-export-excel-csv.mp4"></video>

### Bilder mit neuen Einstellungen neu generieren

Sie sind mit einem generierten Bild nicht zufrieden? Die Schaltfläche Regenerate in Ihren Image-Flow-Ergebnissen öffnet jetzt ein Fenster, in dem Sie die Einstellungen für genau dieses Ergebnis anpassen können, bevor Sie es erneut generieren:

- **Produktfotos.** Wählen Sie, mit welchen Produktfotos die KI arbeitet, zum Beispiel ein anderes Hauptfoto, wenn der ursprüngliche Blickwinkel nicht ideal war. Sie können mehrere Fotos auswählen, so viele, wie das Modell unterstützt.
- **KI-Modell.** Wechseln Sie zu einem anderen Modell, etwa Nano Banana statt GPT Image, und ändern Sie Format, Größe oder Anzahl der Bilder.
- **Prompt und Presets.** Passen Sie die Anweisungen an oder fügen Sie Presets wie Hintergrund, Stil oder Szene hinzu, ändern oder entfernen Sie sie.

Ihre Änderungen gelten nur für dieses Ergebnis: Die Einstellungen des Flows bleiben gleich, und andere Produkte werden wie bisher generiert. Beachten Sie, dass das neue Bild das vorherige dauerhaft ersetzt; das Fenster weist Sie vor dem Start darauf hin.

Die Ergebnisseite zeigt jetzt auch mehr Details: wann das Bild erstellt, generiert und neu generiert wurde, die Anzahl der Bilder, den Flow-Status und welches KI-Modell verwendet wurde.

### Bilder mit Platzhalter-ALT-Texten finden

Oft ist der ALT eines Bildes technisch ausgefüllt, aber nur ein Platzhalter: ein Dateiname wie „IMG_2045.jpg" oder einfach der Produktname. Für Käufer und Suchmaschinen ist das fast dasselbe, als gäbe es gar keinen ALT. Trotzdem hat Fozzels solche ALT-Texte als ausgefüllt behandelt und diese Bilder übersprungen.

ALT Flows haben jetzt eine neue Media-Gallery-Bedingung: **has an image whose ALT contains**. Geben Sie zum Beispiel „.jpg" ein, und Fozzels findet jedes Bild, dessen ALT nur ein Dateiname ist, und generiert aussagekräftige ALT-Texte dafür. Um auch Bilder ganz ohne ALT einzubeziehen, fügen Sie eine Bedingungsgruppe mit „has an image with an empty ALT" und Ihrer ALT-Bedingung hinzu und stellen Sie sie auf „Any condition".

![Media-Gallery-Bedingung: has an image whose ALT contains .jpg](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/04-alt-contains-condition.png)

### KI-Kennzeichnungen in generierten Bildern und Videos

Jedes von Fozzels generierte Bild und Video trägt jetzt eine integrierte, maschinenlesbare Kennzeichnung, die es als KI-generiert ausweist, im Einklang mit den Transparenzanforderungen des EU AI Act. Die Kennzeichnung wird in den Metadaten der Datei gespeichert. Sie ist daher für Käufer unsichtbar und verändert das Aussehen Ihrer Bilder nicht, bleibt aber nach der Synchronisierung mit Ihrem Shop erhalten.

Bei Bildern sehen Sie sie auch in Fozzels: Der Versionsverlauf des Ergebnisses zeigt den Schritt **Labelled as AI-generated**.

![Versionsverlauf mit dem Schritt Labelled as AI-generated](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/05-labelled-as-ai-generated.png)

**Warum das wichtig ist:** Sie können KI-Visuals bedenkenlos in Ihrem Shop verwenden, ohne sie manuell zu kennzeichnen.

### Mit Jane sprechen

Sie können jetzt mit Jane sprechen, statt zu tippen. Klicken Sie auf das Mikrofon im Chatfeld, stellen Sie Ihre Frage, und Jane kann ihre Antwort vorlesen. Lieber Ruhe? Schalten Sie gesprochene Antworten mit dem Lautsprechersymbol neben dem Mikrofon aus.

### Neue KI-Modelle

Wir erweitern unser Modellangebot laufend, sobald KI-Anbieter neue Modelle veröffentlichen, damit Sie für jede Aufgabe immer das passende wählen können.

![Neue KI-Modelle: Gemini 4 Argon, Claude Haiku 5.5, GPT Image 2.5 Flare und Sunburst, Nano Banana 2.1, HeyGen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/06-new-ai-models.png)

**Für Texte**

**Gemini 4 Argon.** Das neue Flaggschiffmodell von Google, ausgelegt auf Genauigkeit. Es gehört zu den Modellen, die am seltensten Fakten erfinden, und ist daher eine starke Wahl für detaillierte Produktinhalte mit vielen technischen Daten.

**Claude Haiku 5.5.** Das schnellste und günstigste Modell von Anthropic, ideal für die Generierung von Inhalten für große Kataloge.

**Für Bilder**

**GPT Image 2.5 Flare.** Schnelle, hochwertige Bilderstellung und -bearbeitung für den Alltag.

**GPT Image 2.5 Sunburst.** Die hochwertigste Option von OpenAI, mit präzisen Bearbeitungen, die den Rest des Bildes, einschließlich Ihres Produkts, unverändert lassen.

**Nano Banana 2.1.** Bessere Qualität und ein niedrigerer Preis als Nano Banana 2.

**Für Videos**

**HeyGen Video 1.0.** Eine deutlich günstigere Alternative zu Veo.

<video controls muted playsInline preload="metadata" width="100%" title="HeyGen Video 1.0 in Ihren Video Flows" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/07-heygen-video.mp4"></video>

Außerdem haben wir die älteren Modelle GPT-4.1 und GPT Image 1 eingestellt.

## Inhaltsqualität

- **Weniger falsche Verdachtsmarkierungen.** Die Prüfung auf verdächtige Inhalte ist jetzt präziser. Normale Produktangaben mit Zahlen wie „Breite – 80", „+25 °C" oder „= 60" werden nicht mehr markiert. Nur echte Berechnungen, die die KI versehentlich im Text gelassen hat, wie „59 + 1 = 60", werden als verdächtig markiert. So verbringen Sie weniger Zeit mit der Prüfung von Texten, die in Ordnung sind.
- **Weniger KI-Kommentare in Ihren Texten.** Wir haben den Schutz davor weiter verstärkt, dass Servicehinweise des KI-Modells in Ihren fertigen Inhalten landen.
- **Jane lässt Ihre Attribute intakt.** Wenn Jane einen Prompt umschreibt, fügt sie Attribute wie `{{name}}` oder `{{ean}}` jetzt korrekt ein, sodass Ihre Prompts weiterhin mit echten Produktdaten funktionieren.

## Image und Video Flows

### Generierte Bilder, die aktuell bleiben

Image Flows haben eine neue Option: **Process the product again when its source image changes**. Wenn ein Bild an der Galerieposition, die Ihr Flow verwendet, in Ihrem Shop ersetzt, entfernt oder hinzugefügt wird, bemerkt Fozzels das beim nächsten Produktimport und generiert ein neues Bild aus dem aktualisierten Foto.

Gut zu wissen:

- Von Fozzels erstellte Bilder zählen nicht als Änderung, auch wenn sie das ursprüngliche Foto ersetzt haben, und Produkte mit manuell ausgewählten Bildern werden nie erneut verarbeitet.
- Geprüft werden nur Ergebnisse, die nach dem Einschalten der Option erstellt wurden. Es gibt also keine unerwarteten Massen-Neugenerierungen.
- Jede neue Generierung wird wie üblich berechnet. Bis das neue Bild fertig ist, bleibt das aktuelle Ergebnis aktiv.

### Außerdem neu

- **Entfernte Produkte sind klar gekennzeichnet.** Aus Ihrem Katalog gelöschte Produkte zeigen jetzt auch in Image und Video Flows den Status „Removed from catalog" und werden nicht mehr als „to be synchronized" gezählt.
- **Keine endlosen Wiederholungsversuche mehr.** Wenn ein Produktfoto nicht mehr heruntergeladen werden kann, beendet Fozzels die Versuche und markiert das Foto als nicht verfügbar.
- **Vorschaubilder für generierte Videos**, damit Sie sie auf einen Blick erkennen.

## Berichte und Filter

**Ganze Listen in Filter einfügen.** Kopieren Sie eine Werteliste, zum Beispiel EANs oder SKUs aus Excel, und fügen Sie sie direkt in eine „is one of"- oder „is not one of"-Bedingung ein. Klicken Sie auf **Split**, und jeder Eintrag wird zu einem eigenen Wert. Kein Eintippen einzelner Werte mehr.

<video controls muted playsInline preload="metadata" width="100%" title="Eine Werteliste in einen Flow-Filter einfügen und aufteilen" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/08-paste-list-into-filters.mp4"></video>

**Fehler auf einen Blick.** Im Generierungsbericht zeigt der Filter „Display only with errors" jetzt nur fehlgeschlagene Generierungen an, mit der tatsächlichen Fehlermeldung statt „Unknown error occurred".

**Benachrichtigungen nach einem erneuten Import.** Wenn Sie Produkte per Massenaktion neu laden, erhalten Sie jetzt sofort eine Benachrichtigung mit dem Ergebnis.

## App und Sprachen

- **Fozzels auf Italienisch.** Die App ist jetzt auf Italienisch verfügbar, das Help Center auf Italienisch und Französisch.
- **Auf Wiedersehen, alte Chat Sandbox.** Wir haben den Chatbot aus dem Jahr 2023 eingestellt. Jane, Ihre KI-Assistentin, hilft Ihnen jederzeit gern.
- **Kleine Verbesserungen der Oberfläche.** Die erste Integration Ihres Kontos ist in Dropdown-Listen jetzt standardmäßig ausgewählt, und die Liste der KI-Anbieter öffnet sich nicht mehr von selbst, wenn Sie einen Flow öffnen.

## Integrations-Updates

### Magento

**Texte für alle Store-Ansichten.** Schalten Sie **Also save as the default value for all store views** ein, und jeder Push speichert den Text in der Store-Ansicht des Flows und als Standardwert in jeder anderen Store-Ansicht. Store-Ansichten mit einem eigenen Wert für das Attribut zeigen weiterhin diesen Wert an.

![Automation-Tab mit der Option Also save as the default value for all store views](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/09-store-views-default.webp)

Gut zu wissen: Wenn ein Flow für eine andere Store-Ansicht dieses Attribut in seinem Prompt verwendet und bei einer Attributänderung automatisch einen neuen Text erstellt, wertet er den neuen Standardwert als Änderung und generiert neue Texte für Produkte ohne eigenen Wert.

### Magento und NextChapter

**Bestehende Produktfotos ersetzen.** Neu generierte Bilder können jetzt die aktuellen Produktfotos ersetzen, und der Austausch wird nach der Synchronisierung korrekt in der Fozzels-Mediengalerie angezeigt.

### Shopware

**Unterstützung für AVIF-Bilder.** Produkte mit AVIF-Fotos können jetzt auch für die Textgenerierung verwendet werden: Bevor wir diese Fotos an die KI senden, wandeln wir sie in ein Format um, das das Modell unterstützt.

### CSV / Raw File

Dateien mit versteckten Zeichen am Anfang, durch die der erste Spaltenname in Anführungszeichen erschien, werden jetzt korrekt gelesen.

![Haben Sie eine Idee? Teilen Sie sie Jane in der App mit oder schreiben Sie an support@fozzels.com](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/10-share-your-idea.png)
