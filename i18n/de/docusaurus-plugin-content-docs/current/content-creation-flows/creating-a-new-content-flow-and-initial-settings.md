---
id: '103000367976'
title: 4.1.2. Erstellen eines neuen Content Flows und erste Einstellungen.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Der Content Flow ist der Kern der Automatisierung in Fozzels. Er legt fest,
  an welchen Produkten Fozzels arbeitet, welche Attribute befüllt werden, welches
  KI-Modell verwendet wird und welche Anweisungen es erhält.
keywords:
- Inhaltsfluss
- Content-Flow
---

Der Content Flow ist der Kern der Automatisierung in Fozzels. Er legt fest, an welchen Produkten Fozzels arbeitet, welche Attribute befüllt werden, welches KI-Modell verwendet wird und welche Anweisungen es erhält. Fozzels generiert, aktualisiert und synchronisiert dann die Inhalte für Ihre Produkte.

Ein Flow kann mehrere Attribute gleichzeitig befüllen. Beim Erstellen des Flows wählen Sie ein **Hauptattribut**, später können Sie bis zu 12 weitere hinzufügen. Alle werden zusammen in einer einzigen KI-Anfrage pro Produkt generiert.

Diese Anleitung führt Sie anhand eines Beispiels durch alle vier Schritte eines Flows: Der Flow schreibt eine **Description**, eine **Short Description** und eine **Meta Description** für Damenprodukte, die Fotos, aber noch keine Beschreibung haben.

## 1\. Einen neuen Flow erstellen

1.  Klicken Sie im Seitenmenü unter **AI Flows** auf **Content Flows**. Die Liste der Flows wird geöffnet.

2.  Prüfen Sie oben die Integration, die Website und den Shop. Wenn Sie mehrere haben, wählen Sie den gewünschten Eintrag aus der Dropdown-Liste. Wenn Sie nur einen haben, ist er bereits ausgewählt.

3.  Klicken Sie oben rechts auf **New Product Flow**.
    ![Flow-Liste mit der Schaltfläche New Product Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-01-new-product-flow-button.png)

4.  Geben Sie einen **Name** für den Flow ein, zum Beispiel _Mein erster Content Flow_.

5.  Wählen Sie unter **Entity Type** die Option **Product**. Wie Sie Inhalte für Kategorien generieren, lesen Sie in [4.9.1 So erstellen Sie einen Content Flow für Kategorien](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels/).
    ![Create New Product Flow: Auswahl des Entity Type](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-02-entity-type.png)

6.  Wählen Sie unter **Attribute** das **Hauptattribut**, das der Flow befüllen soll. Sie können zum Suchen tippen, zum Beispiel _description_.
    ![Suche nach dem Hauptattribut](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-03-main-attribute-search.png)

7.  Klicken Sie auf **Save**.
    ![Formular für den neuen Flow, bereit zum Speichern](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-04-new-flow-save.png)

:::tip
**Wählen Sie das größte Attribut als Hauptattribut**, zum Beispiel die vollständige Beschreibung. In den Ergebnissen erhält das Hauptattribut den vollständigen Editor mit Vorschau, die zusätzlichen Attribute werden darunter angezeigt.
:::

:::note
**Sie möchten Alt-Texte für Bilder generieren?** Wählen Sie **Media Gallery** als Attribut. Siehe [4.3.2.a Alt-Texte für Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/) und [4.3.2.b Alt-Texte für NextChapter](/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/).
:::

## 2\. AI Configuration

Nach dem Speichern öffnet Fozzels den Schritt **AI Configuration**. Ab jetzt zeigt der obere Seitenbereich den Schalter **Active flow** und den Namen des Flows. Klicken Sie auf den Stift neben dem Namen, um den Flow umzubenennen.

1.  Wählen Sie unter **AI Provider Selection** den Anbieter: OpenAI | ChatGPT, Anthropic, xAI oder Google | Gemini.
    ![Auswahl des KI-Anbieters](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-05-ai-provider.png)

2.  Klicken Sie unter **Model** auf eine Modellkachel. Jede Kachel zeigt den Preis pro 1K Input- und Output-Token, den Preis einer Websuche, ob das Modell Produktbilder lesen kann und ob es die Websuche unterstützt. Siehe [4.2.1 KI-Konfiguration](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features/).

3.  Optional: Aktivieren Sie **Enable Web Search**, wenn Ihr Prompt die KI anweist, Informationen online nachzuschlagen, zum Beispiel auf Ihrer Produktseite.

4.  Optional: Legen Sie unter **Image Usage** die **Image count** fest (bis zu 5). Die KI analysiert dann so viele Produktbilder, in der Reihenfolge, in der sie aus Ihrer Integration kommen. Mehr Bilder verbrauchen mehr Token. Lassen Sie das Feld leer, wenn nur der Prompt-Text verwendet werden soll.

5.  Lassen Sie **Enable Image Resize** aktiviert. Fozzels verkleinert dann Bilder, die größer als 2 MB sind und entweder kein JPEG sind oder breiter oder höher als 2048 Pixel. Siehe [4.2.2 Bildoptimierung](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/).
    ![Modellkacheln, Websuche, Bildnutzung und Bildgrößenänderung](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-06-model-and-image-settings.png)

6.  Optional: Wählen Sie einen oder mehrere **Text styles** (zum Beispiel _Creative_, _Informative_) und **Text tones** (zum Beispiel _Inspirational_).
    ![Textstile und Texttöne](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-07-text-styles-tones.png)

7.  Klicken Sie auf **Save** und dann auf **Next step**.

:::note
**Image Resize kostet eine kleine Gebühr pro Bild, aber das Ausschalten überspringt es nicht immer.** Sehr große Bilder werden weiterhin automatisch verkleinert und berechnet, bei jedem KI-Anbieter. Ohne diese Verkleinerung würde die Generierung mit einem Fehler fehlschlagen, oder die KI würde etwas wie „Ich kann das Bild nicht sehen“ in Ihren Inhalt schreiben.
:::

Sie können jederzeit zu diesen Einstellungen zurückkehren, auch wenn der Flow bereits mit der Generierung begonnen hat.

## 3\. Flow Selection & Prompt

### 3.1 Hauptattribut und sein Format prüfen

Oben sehen Sie das Hauptattribut, das Sie in Schritt 1 gewählt haben.

Entscheiden Sie, ob das Ergebnis HTML enthalten soll. Klicken Sie auf die Augen-Schaltfläche neben dem Attribut. Deaktivieren Sie im Fenster **Edit attribute** die Option **Allow HTML**, wenn Sie reinen Text ohne Markup benötigen, und klicken Sie dann auf **Save**. Siehe [4.7.3 Erlaubte HTML-Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation/).

![Fenster Edit attribute mit Allow HTML](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-08-edit-attribute-allow-html.png)

:::warning
Die anderen Felder in diesem Fenster sind technische Einstellungen Ihrer Integration. Ändern Sie diese nur, wenn Sie wissen, was sie bewirken. Wenn Sie Hilfe benötigen, wenden Sie sich an den Support.
:::

### 3.2 Produkte auswählen

Verwenden Sie **Filter & Select Products**, um festzulegen, an welchen Produkten der Flow arbeitet. Die Anzahl der ausgewählten Produkte wird im Titel des Blocks und auf dem Tab von Schritt 3 angezeigt.

![Schritt Flow Selection & Prompt: Hauptattribut und Filter](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-09-filter-select-products.png)

- Klicken Sie auf **Add condition**, um einen Filter hinzuzufügen: Wählen Sie ein Attribut, einen Operator und einen Wert.
- Wählen Sie **All conditions** (alle Bedingungen müssen zutreffen) oder **Any condition** (eine genügt).
- Klicken Sie auf **Add condition group**, um Bedingungen auf komplexere Weise zu kombinieren.

**Beispiel.** So schreiben Sie Beschreibungen für Damenprodukte, die Fotos, aber noch keine Beschreibung haben:

| Attribut | Operator | Wert |
| --- | --- | --- |
| Categories | is one of | Women |
| Media Gallery | has an image | Yes |
| Description | is empty | |

![Filterbeispiel: Damenprodukte mit Bildern und ohne Beschreibung](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-10-filter-example.png)

:::warning
Wenn Sie keine Bedingungen festlegen, verwendet der Flow **alle** Produkte im Shop.
:::

:::tip
Um zu vermeiden, dass vorhandene Inhalte überschrieben werden, fügen Sie für das Attribut, das Sie generieren, einen Filter wie **Description is empty** hinzu.
:::

Alle Filteroptionen finden Sie unter [Produktfilterung für die Inhaltsgenerierung](/data-import-and-quality/product-filtering-for-content-generation/).

#### Filter für die Wiederverwendung speichern

Wenn Sie weitere Flows für dieselben Produkte planen, zum Beispiel für Beschreibungen, Meta-Tags und Alt-Texte, speichern Sie die Filter einmalig:

1.  Klicken Sie auf **Filter set → Save as new**.
    ![Menü Filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-11-filter-set-menu.png)

2.  Geben Sie einen Namen ein, zum Beispiel _Damen - leere Beschreibungen_, und klicken Sie auf **Save**.
    ![Filter-Set speichern](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-12-filter-set-save.png)

3.  Das Set erscheint nun im Menü **Filter set**. Klicken Sie darauf, um es anzuwenden, oder auf den Papierkorb, um es zu löschen.
    ![Gespeichertes Filter-Set im Menü](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-13-filter-set-saved.png)

Gespeicherte Filter-Sets stehen überall zur Verfügung, wo Sie Produkte filtern: in Integrationen, im Katalog und in Flows. Sie können ein gespeichertes Set auch mit zusätzlichen Bedingungen kombinieren.

### 3.3 Den Prompt schreiben

Schreiben Sie im Bereich **Prompt** die Anweisungen für die KI und fügen Sie Produktdaten hinzu:

- Tippen Sie `/` im Editor, oder klicken oder ziehen Sie ein Attribut aus dem Bereich **Attributes**. Jedes Attribut wird als Bedingungszeile eingefügt und daher bei Produkten übersprungen, bei denen es leer ist.
- Verwenden Sie **Snippets** wie **Attribute list**, um mit einem Klick einen fertigen Block mit Produktdaten einzufügen.
- Prüfen Sie die **Preview** rechts. Sie wird beim Tippen aktualisiert und zeigt den endgültigen Prompt für ein echtes Produkt. Mit **&lt; &gt;** können Sie einige Produkte prüfen.
- Um einen Prompt in anderen Flows wiederzuverwenden, nutzen Sie **Save as template** und **Load**.

![Prompt-Editor mit Live-Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-14-prompt-editor-preview.png)

Die vollständige Anleitung finden Sie unter [4.3.2 Prompt-Einrichtung und Verwendung](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

:::warning
Verwenden Sie die Attribute, die Sie generieren, nicht als Eingabe im Prompt. Wenn der Flow zum Beispiel die Description schreibt, fügen Sie das Attribut Description nicht in den Prompt ein. In einem Flow mit mehreren Attributen gilt das für jedes davon. Siehe [Rekursionserkennung](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation/).
:::

#### Auf deaktivierte Funktionen prüfen

Beim Speichern prüft Fozzels, ob Ihr Prompt eine Funktion benötigt, die in diesem Flow ausgeschaltet ist. Zum Beispiel:

- Der Prompt weist die KI an, die Produktbilder zu analysieren, aber es ist keine **Image count** festgelegt;
- der Prompt weist die KI an, Ihre Produktseite zu lesen, aber **Enable Web Search** ist ausgeschaltet.

Dann erscheint oberhalb der Schritte eine Warnung. Klicken Sie auf **Open AI Configuration**, um die Funktion einzuschalten, oder auf **Ask Jane**, um Hilfe vom KI-Assistenten zu erhalten.

![Warnung zu Funktionen, die für diesen Flow ausgeschaltet sind](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-15-disabled-features-warning.png)

### 3.4 Weitere Attribute im selben Flow befüllen

Unter dem Prompt können Sie unter **Additional attributes to fill** bis zu 12 weitere Attribute hinzufügen. Alle Attribute des Flows werden zusammen in einer einzigen KI-Anfrage pro Produkt generiert, sodass Produktdaten und Bilder nur einmal gesendet werden.

1.  Wählen Sie ein Attribut in der Dropdown-Liste und klicken Sie auf **Add attribute**.
    ![Ein zusätzliches Attribut hinzufügen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-16-additional-attribute-add.png)

2.  Schreiben Sie unter **Instruction for this attribute**, was die KI erzeugen soll. Das Feld funktioniert wie der Haupt-Prompt-Editor, mit Preview, Bereich Attributes und Snippets. Sobald die Anweisung ausgefüllt ist, zeigt die Zeile **Prompt set**.
    ![Anweisung für Short Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-17-instruction-short-description.png)

3.  Klicken Sie in der Zeile auf das Auge, um die Attributeinstellungen zu öffnen. Deaktivieren Sie bei Meta-Titeln und Meta-Beschreibungen **Allow HTML**, denn sie müssen reiner Text sein.
    ![Anweisung für Meta Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-18-instruction-meta-description.png)

4.  Wiederholen Sie dies für jedes Attribut und speichern Sie dann.

:::tip
Geben Sie jedem Attribut eine klare Längenbegrenzung, zum Beispiel _2–3 Sätze, 35–60 Wörter_ für eine Kurzbeschreibung oder _120–160 Zeichen, nie mehr als 160_ für eine Meta-Beschreibung.
:::

### 3.5 Den Prompt testen

Bevor Sie den Flow starten, testen Sie an einigen Produkten, was die KI generiert.

1.  Klicken Sie am Ende des Schritts auf **Save and Preview**.
    ![Schaltfläche Save and Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-19-save-and-preview.png)

2.  Eine Tabelle mit Ihren ausgewählten Produkten wird geöffnet. Klicken Sie auf eine Zelle in der Spalte **Prompt**, um den vollständigen Prompt zu sehen, den die KI erhält. In einem Flow mit mehreren Attributen wird jedes Attribut unter einer eigenen Überschrift mit seiner eigenen Anweisung aufgeführt. Klicken Sie auf **Copy to Clipboard**, um ihn zu kopieren.
    ![Tabelle der Testgenerierung](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-20-test-generation-table.png)
    ![Vollständiger Prompt, der an die KI gesendet wird](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-21-test-generation-prompt.png)

3.  Klicken Sie in einer Produktzeile auf **Generate Now**. Das Ergebnis wird in einem Fenster geöffnet, jedes Attribut unter einer eigenen Überschrift. Klicken Sie auf **Show HTML**, um das Markup zu sehen.
    ![Ergebnis der Testgenerierung](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-22-test-generation-result.png)

:::info
Eine Testgenerierung ist **kostenlos** und startet den Flow **nicht**. Das Ergebnis wird nicht gespeichert. Wenn Sie es behalten möchten, klicken Sie auf **Copy to Clipboard**, bevor Sie das Fenster schließen.
:::

Passen Sie den Prompt an und testen Sie erneut, bis Sie mit dem Ergebnis zufrieden sind. Klicken Sie dann auf **Next step**.

## 4\. Automation

![Automatisierungseinstellungen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-23-automation-settings.png)

| Einstellung | Funktion |
| --- | --- |
| **Amount of products to create content for per day** | Wie viele Produkte der Flow pro Tag verarbeitet, bis zu 500 |
| **Fully automatic** | Generierte Inhalte werden sofort bestätigt und an Ihren Shop gesendet, ohne manuelle Prüfung. Inhalte, die als verdächtig markiert sind, werden weiterhin zur Prüfung zurückgehalten. Funktioniert nur, wenn der Flow aktiv ist |
| **Confidence threshold** | Optional, von 0.1 bis 1.0. Die KI meldet, wie sicher sie sich bei jedem Wert ist. Werte unterhalb des Schwellenwerts werden zur Prüfung zurückgehalten, statt automatisch gesendet zu werden. Je höher der Schwellenwert, desto mehr Inhalte müssen Sie prüfen. Lassen Sie das Feld leer, um die Funktion auszuschalten. Nützlich zusammen mit **Fully automatic** |
| **Automatically create a new text when an attribute of a product changes in your store** | Generiert den Inhalt neu, wenn sich ein im Prompt verwendetes Attribut in Ihrem Shop ändert |
| **Prevent double content generation with other Flows** | Verhindert, dass ein Produkt neuen Inhalt erhält, wenn ihn bereits ein anderer Flow generiert hat. Wählen Sie **Inherit** (Ihre globalen Einstellungen verwenden), **Override** (einen Zeitraum nur für diesen Flow festlegen) oder **Turn Off**. Siehe [4.4.1 Überlappende Inhaltsgenerierung verhindern](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/) |
| **Workflows** | Optionale zusätzliche Aktionen für diesen Flow. Workflows laufen von oben nach unten; ziehen Sie sie oder nutzen Sie die Pfeile, um die Reihenfolge zu ändern. Siehe [4.11.1 Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) |

:::tip
Die meisten Benutzer starten mit ausgeschaltetem **Fully automatic** und prüfen die ersten Ergebnisse von Hand.
:::

### Den Flow starten

1.  Schalten Sie oben auf der Seite **Active flow** ein. Die Start-Schaltflächen sind nur für einen aktiven Flow verfügbar.

2.  Wählen Sie, wie der Flow gestartet werden soll:

| Option | Was passiert |
| --- | --- |
| **Plan & Close** | Der Flow startet am nächsten Tag, nach der nächtlichen Katalogaktualisierung. Er verarbeitet dann jeden Tag die **Amount of products per day**, bis alle ausgewählten Produkte erledigt sind |
| **Run Now** (Pfeil neben **Plan & Close**) | Der Flow verarbeitet sofort die ersten **10 Produkte**. Danach läuft er nach dem täglichen Zeitplan weiter |

![Duplikatsverhinderung, Workflows und Start-Schaltflächen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-24-launch-buttons.png)

Ein aktiver Flow übernimmt nach jeder nächtlichen Aktualisierung auch neue Produkte, die seinen Filtern entsprechen. Eine vollständige Checkliste vor dem Start finden Sie unter [4.1.2.a So richten Sie automatisierte KI-Content-Flows ein](/content-creation-flows/how-to-set-up-automated-ai-content-flows/).

## 5\. Ergebnisse in der Batch List prüfen

1.  Klicken Sie am unteren Rand eines beliebigen Flow-Schritts auf **Batch List**. In einem Flow mit mehreren Attributen hat jedes Attribut eine eigene Spalte, sodass Sie alle Ergebnisse eines Produkts in einer Zeile sehen.
    ![Batch List mit einer Spalte pro Attribut](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-25-batch-list.png)

2.  Klicken Sie auf einen generierten Wert, um das Fenster **Edit completion result** zu öffnen:
    - Das Hauptattribut steht oben, mit **Enable Editor**, **Show HTML** und einer Vorschau.
    - Die anderen Attribute sind darunter unter **Other attributes filled by this Flow** aufgelistet. Klappen Sie jedes auf, um es zu lesen und zu bearbeiten. Select- und Multiselect-Attribute werden über eine Dropdown-Liste bearbeitet.

    ![Fenster Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-26-edit-completion-result.png)

3.  Bearbeiten Sie den Text bei Bedarf und klicken Sie auf **Save**.

4.  Schalten Sie **Batch Confirmed** ein und klicken Sie dann auf **Save & Sync**, um den Inhalt an Ihren Shop zu senden. Solange das Ergebnis nicht bestätigt ist, ist die Synchronisierung deaktiviert. In einem **Fully automatic** Flow werden die Ergebnisse für Sie bestätigt.

Weitere Schaltflächen im Fenster:

- **Regenerate** generiert den Inhalt erneut. Dabei werden immer **alle** Attribute des Flows zusammen neu generiert.
- **Show Revisions** zeigt frühere Versionen. Siehe [4.8.1 Verlauf der Inhaltsgenerierung](/content-creation-flows/content-completion-history-revision-history-version-control/).
- **Copy to Clipboard** kopiert den Inhalt.

### Verdächtiger Inhalt

Wenn ein Ergebnis die Qualitätsprüfungen von Fozzels nicht besteht, werden die problematischen Stellen gelb markiert und das Ergebnis wird nicht synchronisiert. Sie können entweder die markierten Stellen von Hand korrigieren und speichern, was nichts kostet, oder auf **Regenerate** klicken, um alle Attribute erneut zu generieren. Siehe [4.7.4 Verdächtige Wörter und Phrasen](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

Weitere Informationen zum Prüfen und Synchronisieren von Ergebnissen finden Sie unter [4.7.1 Verfolgung der generierten Ergebnisse](/content-creation-flows/tracking-of-the-generated-results-dashboard/) und [4.7.5 Inhalte in der Batch List bearbeiten](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/).
