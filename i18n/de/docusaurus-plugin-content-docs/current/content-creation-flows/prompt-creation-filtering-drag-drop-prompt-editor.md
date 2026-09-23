---
id: '103000367983'
title: '4.3.2 Prompt-Einrichtung und -Nutzung: Der neue Prompt-Editor'
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  So schreiben Sie einen Flow-Prompt im neuen Editor: Attribute und
  Bedingungen einfügen, Attributoptionen festlegen, Snippets nutzen, die
  Live-Vorschau prüfen und sich vom AI Prompt Assistant helfen lassen.
---

Im Prompt-Feld schreiben Sie die Anweisungen, die Fozzels für jedes Produkt an die KI sendet. Mit dem neuen Editor erstellen Sie den Prompt, fügen Produktdaten und Bedingungen ein und prüfen das Ergebnis anhand eines echten Produkts – alles auf einem Bildschirm.

## Was ist neu

Wenn Sie den bisherigen Drag-&-Drop-Editor verwendet haben, sind dies die wichtigsten Änderungen:

| Bereich | Bisher | Jetzt |
| --- | --- | --- |
| Attribute einfügen | Aus der Liste anklicken oder ziehen | Anklicken, ziehen oder `/` im Editor eingeben. Jedes Attribut wird als fertige Bedingungszeile eingefügt |
| Bedingungen | Eine separate Liste „Attributes (if filled)“ | Jede Bedingung ist ein Block, der Text, Attribute und weitere Bedingungen enthalten kann (Verschachtelung) |
| Attributoptionen | Keine | Pro Attribut: nur anzeigen, wenn befüllt, Label ausblenden, Ersatzwert |
| Befüllungsgrad der Daten | Tooltip mit einem Prozentwert | Farbige Unterstreichung bei jedem Attribut sowie ein Tooltip mit Befüllungsgrad und Beispielwert |
| Vorschau | Erst nach Save & Preview | Live-Vorschau neben dem Editor, synchronisiert mit Cursor und Scrollposition |
| Wiederverwendbare Inhalte | Nur vollständige Prompt-Vorlagen | Snippets: Attribute list, Category list, Integration connector und Ihre eigenen wiederverwendbaren Blöcke |
| Attribute pro Flow | Eins | Das Hauptattribut plus bis zu 12 zusätzliche Attribute |
| Editor-Werkzeuge | Keine | Rückgängig/Wiederholen, Textgröße, Suche, Vollbild, Vorschau und Snippets ein-/ausblenden |

**Umstieg vom alten Editor.** Sie müssen nichts migrieren. Bestehende Flows funktionieren weiter, und alle Prompts und gespeicherten Vorlagen wurden automatisch in das neue Format umgewandelt. Sie können auch einen im alten Format geschriebenen Prompt einfügen – der Editor wandelt ihn um.

## 1. Wo der Prompt in einem Flow seinen Platz hat

Den Prompt schreiben Sie in Schritt 3 eines Flows, **Flow Selection & Prompt**. Zu diesem Zeitpunkt kennt der Flow bereits den Store, das Zielattribut und die KI-Einstellungen.

1. **Neuer Flow.** Gehen Sie zu **Flows → Create**.

   ![Seite „Flows“ mit der Schaltfläche „Create“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/01-flows-page-with-the-create-button.png)

   Wählen Sie die Integration, die Website und den Store (Sprache), geben Sie einen Namen ein und wählen Sie den Entitätstyp: Product oder Category.

   ![Create New Product Flow: Auswahl des Entitätstyps](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/02-create-flow-choosing-the-entity-type.png)

   Wählen Sie anschließend das Attribut, für das Inhalte generiert werden sollen, und klicken Sie auf **Save**.

   ![Create New Product Flow: Auswahl des Attributs](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/03-create-flow-choosing-the-attribute.png)

2. **AI Configuration.** Wählen Sie das KI-Modell und optionale Funktionen wie Websuche, Bildnutzung und Bildgrößenanpassung. Siehe [4.2.1 KI-Konfiguration](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features).

3. **Flow Selection & Prompt.** Legen Sie unter **Filter & Select Products** fest, für welche Produkte der Flow Inhalte generieren soll. Wenn Sie keine Bedingungen festlegen, werden alle Produkte verwendet. Schreiben Sie dann den Prompt im Abschnitt **Prompt** darunter.

   ![Schritt „Flow Selection & Prompt“ mit leerem Prompt-Editor](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/04-flow-selection-prompt-step-with-an.png)

Die hier ausgewählte Produktmenge wird auch von der Vorschau verwendet (siehe Abschnitt 8).

### Ein Flow, mehrere Attribute

Ein Flow kann sein Hauptattribut plus bis zu 12 zusätzliche Attribute befüllen, insgesamt also 13. Alle werden gemeinsam in einer einzigen KI-Anfrage pro Produkt generiert. Produktdaten und Bilder werden nur einmal gesendet, sodass die Generierung schneller ist und weniger Tokens verbraucht als mit separaten Flows.

So fügen Sie ein Attribut hinzu:

1. Gehen Sie in Schritt 3 zu **Additional attributes to fill**. Der Zähler neben dem Titel zeigt, wie viele Sie bereits hinzugefügt haben, zum Beispiel **0 / 12**.
2. Wählen Sie ein Attribut in der Liste **Choose attribute**.
3. Klicken Sie auf **Add attribute**.

![Auswahl eines zusätzlichen Attributs](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/05-choosing-an-additional-attribute.png)

Das Attribut erscheint als eigene Zeile mit Namen und Typ, zum Beispiel **SEO Description · Text**. Solange Sie noch keine Anweisung geschrieben haben, steht in der Zeile _No instruction yet_.

Schreiben Sie unter **Instruction for this attribute**, was die KI für dieses Attribut erzeugen soll. Die Anweisung wird mit dem Hauptprompt zu einer einzigen Anfrage zusammengeführt. Das Feld funktioniert wie der Haupteditor: Geben Sie `/` ein oder nutzen Sie das Attribut-Panel daneben, um Attribute und Bedingungen hinzuzufügen.

![Zeile eines zusätzlichen Attributs mit Anweisungsfeld](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/06-additional-attribute-row-with-its-instruction.png)

- Mit dem Papierkorbsymbol entfernen Sie das Attribut, mit dem Pfeil klappen Sie die Zeile ein oder aus.
- Das Anweisungsfeld hat vorerst kein Snippets-Panel. Darin verwendete Snippets funktionieren bei der Generierung trotzdem.
- Die Ergebnisse lassen sich weiterhin pro Attribut prüfen und übertragen.

Weitere Details finden Sie über **User Guide: How multi-attribute flows work** oben rechts in diesem Abschnitt.

## 2. Aufbau des Prompt-Abschnitts

Der Prompt-Abschnitt besteht aus vier Bereichen:

| Bereich | Position | Wofür er dient |
| --- | --- | --- |
| Editor | Oben links | Prompt schreiben und Attribute, Bedingungen und Snippets platzieren |
| Preview | Oben rechts | Den finalen Prompt für ein echtes Produkt ansehen |
| Attributes | Unten links | Alle Attribute des ausgewählten Stores mit ihrem Befüllungsgrad |
| Snippets | Unten rechts | Wiederverwendbare Blöcke wie Attribute list und Category list |

Der Link **User Guide: Prompt Setup And Usage** oben rechts öffnet diesen Artikel.

### Editor-Symbolleiste

| Schaltfläche | Funktion |
| --- | --- |
| Undo / Redo | Schritte in Ihren Bearbeitungen zurück- oder vorgehen. Undo stellt auch einen versehentlich gelöschten Block wieder her |
| A / A | Editortext verkleinern oder vergrößern. Dies ändert nur die Ansicht, nicht den Prompt |
| Search in prompt | Wörter oder Attribute in einem langen Prompt finden |
| Preview (Auge) | Vorschau-Panel ein- oder ausblenden |
| Snippets (Dokument) | Snippets-Panel ein- oder ausblenden |
| Maximize | Editor und Seitenpanel im Vollbild öffnen |

![Schaltfläche „Preview“ in der Symbolleiste](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/07-preview-button-in-the-toolbar.png)

Wenn die Vorschau ausgeblendet ist, rückt das Attribut-Panel nach rechts und der Editor erhält mehr Platz.

![Layout mit ausgeblendeter Vorschau](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/08-layout-with-the-preview-hidden.png)

![Schaltfläche „Maximize“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/09-maximize-button.png)

![Schaltfläche „Snippets“ und das Snippets-Panel](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/10-snippets-button-and-the-snippets-panel.png)

Der Editor akzeptiert reinen Text und gängige HTML-Tags wie `<h2>`, `<ul>` und `<strong>`. Siehe [4.7.3 Erlaubte HTML-Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation).

## 3. Attribute hinzufügen

Ein Attribut ist ein Platzhalter für Produktdaten wie Titel, Produkttyp oder Material. Im Editor erscheint es als grüner Chip. Im finalen Prompt wird es durch den Wert des Produkts ersetzt.

Sie können ein Attribut auf drei Arten hinzufügen:

- **Geben Sie `/`** im Editor ein. Es öffnet sich eine Liste mit Namen und technischem Schlüssel jedes Attributs.

  ![Slash-Menü mit der Liste der Attribute](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/11-slash-menu-with-the-list-of.png)

  Tippen Sie weiter, um die Liste zu filtern, zum Beispiel `/seo`, und wählen Sie dann das Attribut aus.

  ![Slash-Menü, gefiltert nach „seo“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/12-slash-menu-filtered-by-seo.png)

- **Klicken** Sie im Attribut-Panel auf ein Attribut. Es wird an der Cursorposition eingefügt.
- **Ziehen** Sie ein Attribut aus dem Attribut-Panel und legen Sie es an der gewünschten Stelle ab. Eine Linie zeigt an, wo es landet.

  ![Ablagelinie beim Ziehen eines Attributs](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/13-drop-line-while-dragging-an-attribute.png)

Das eingefügte Attribut erscheint als Bedingungszeile mit einem Label:

![Eine Bedingungszeile für SEO Title neben der Vorschau](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/14-a-condition-line-for-seo-title.png)

### Bedingungszeile oder Inline-Attribut

Der Editor hält den Prompt strukturiert: Jede Bedingung steht in einer eigenen Zeile. Wo ein Attribut landet, bestimmt also, was daraus wird.

| Wo Sie es einfügen | Ergebnis | Beispiel |
| --- | --- | --- |
| Am Anfang einer Zeile (mit `/`, per Klick oder durch Ablegen vor dem Label) | Eine **Bedingungszeile**: ein Block mit Label und Attribut | `if SEO Title` → _SEO Title: [SEO Title]_ |
| Innerhalb einer Zeile, nach dem Label (Ablegen zwischen Label und Attribut) | Ein **Inline-Attribut** ohne eigene Bedingung | _Media Gallery: Handle: [Handle] [Media Gallery]_ |

![Verschachtelte Bedingungszeile (Status) und ein Inline-Attribut (Handle)](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/15-nested-condition-line-status-and-an.png)

Das Label, etwa _SEO Title:_, wird automatisch hinzugefügt. Es ist normaler Text, den Sie bearbeiten können.

Sie können dasselbe Attribut beliebig oft verwenden.

## 4. Bedingungen (if-Blöcke)

Eine Bedingung ist ein gestrichelter Block mit gelber Kopfzeile, zum Beispiel **if SEO Title**. Alles innerhalb des Blocks gelangt nur dann in den Prompt, wenn das Produkt einen Wert für dieses Attribut hat. Ist der Wert leer, wird der gesamte Block übersprungen.

So bleibt der Prompt für jedes Produkt sauber. Eine Zeile wie _SEO Title:_ erscheint nie ohne nachfolgenden Wert.

**Beispiel.** Der Prompt enthält `if SEO Title`, `if Created At` und `if Tags` (verschachtelt in `if Created At`). Das Beispielprodukt hat keinen SEO Title, daher zeigt die Vorschau nur die Zeilen für Tags und Created At.

![Verschachtelte Bedingungen und die zugehörige Vorschau](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/16-nested-conditions-and-the-matching-preview.png)

### Was eine Bedingung enthalten kann

- Freitext, vor oder nach dem Attribut
- Weitere Attribute als Inline-Attribute
- Weitere Bedingungen (Verschachtelung). Zum Beispiel bedeutet `if Tags` innerhalb von `if Created At`, dass die Tags-Zeile nur erscheint, wenn beide Werte befüllt sind
- Snippets (siehe Abschnitt 7)

![Eine Bedingung in eine andere Bedingung ziehen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/17-dragging-a-condition-into-another-condition.png)

### Mit Bedingungen arbeiten

| Aktion | So geht's |
| --- | --- |
| Block verschieben | Ziehen Sie ihn am Griff ⠿ links. Sie können ihn zwischen anderen Zeilen oder innerhalb einer anderen Bedingung ablegen. Zeilen ohne Bedingung haben denselben Griff |
| Nur die Bedingung entfernen | Klicken Sie auf das Zahnrad in der gelben Kopfzeile und wählen Sie **Always show (remove condition)**. Der Inhalt bleibt erhalten und wird immer einbezogen |
| Block löschen | Klicken Sie auf das **x** in der gelben Kopfzeile (**Delete block**) |
| Beispielprodukt prüfen | Bewegen Sie den Mauszeiger über die gelbe Kopfzeile. Ist die Bedingung für das Produkt in der Vorschau nicht erfüllt, sehen Sie **No output for this sample product** |

![„Always show (remove condition)“ im Zahnradmenü](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/18-always-show-remove-condition-in-the.png)

![„Delete block“ in der gelben Kopfzeile](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/19-delete-block-on-the-yellow-header.png)

![No output for this sample product](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/20-no-output-for-this-sample-product.png)

:::warning

**Delete block** entfernt den gesamten Block mit allem, was er enthält, einschließlich verschachtelter Bedingungen. Wenn Sie den Inhalt behalten möchten, verwenden Sie stattdessen **Always show**. Haben Sie einen Block versehentlich gelöscht, klicken Sie auf **Undo**.

:::

## 5. Attributoptionen

Klicken Sie auf den kleinen Pfeil an einem grünen Attribut-Chip, um seine Optionen zu öffnen.

![Menü mit den Attributoptionen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/21-attribute-options-menu.png)

| Option | Funktion |
| --- | --- |
| **Only show when filled** | Aktiviert (angehakt): Das Attribut wirkt als Bedingung, und seine Zeile wird übersprungen, wenn der Wert leer ist. Deaktiviert: Es ist ein einfaches Attribut, das immer einbezogen wird |
| **Hide label** | Sendet nur den Wert an die KI, ohne das vorangestellte Label |
| **Fallback value when empty** | Text, der anstelle des Werts verwendet wird, wenn das Produkt für dieses Attribut keinen Wert hat |
| **Remove** | Entfernt das Attribut aus dem Prompt |

Bei einem Inline-Attribut ist **Only show when filled** deaktiviert. Setzen Sie das Häkchen, um das Attribut in eine Bedingung umzuwandeln.

![Optionen eines Inline-Attributs mit deaktiviertem „Only show when filled“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/22-options-of-an-inline-attribute-with.png)

### Einen Ersatzwert verwenden

Ein Ersatzwert (Fallback) greift nur, wenn **Only show when filled** deaktiviert ist. Ist die Bedingung aktiv, wird eine leere Zeile ohnehin übersprungen – der Ersatzwert wird dann ignoriert, selbst wenn Sie ihn ausgefüllt haben.

**Beispiel.** Sie deaktivieren **Only show when filled** für SEO Description und geben einen Ersatzwert ein. Bei einem Produkt ohne SEO-Beschreibung zeigt die Vorschau stattdessen den Ersatzwert. Der Ersatzwert ist in der Vorschau hervorgehoben, sodass Sie ihn von echten Produktdaten unterscheiden können.

![In der Vorschau angezeigter Ersatzwert](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/23-fallback-value-shown-in-the-preview.png)

### Bedingung oder Ersatzwert?

- Verwenden Sie eine **Bedingung**, wenn die Zeile ohne Wert nutzlos ist, zum Beispiel bei Material oder Pflegehinweisen.
- Verwenden Sie einen **Ersatzwert**, wenn die KI diese Zeile immer erhalten soll, zum Beispiel _Brand: unknown_.
- Verwenden Sie keines von beiden bei Attributen, die jedes Produkt hat, etwa den Produkttitel.

:::note

**Remove** löscht nur den Attribut-Chip. Das Label, etwa _Title:_, bleibt als Text stehen. Löschen Sie es selbst, sonst erhält die KI ein Label ohne Wert.

:::

## 6. Das Attribut-Panel

Das Attribut-Panel (**Attributes**) listet alle Attribute des ausgewählten Stores auf. Attribute, die bereits im Prompt verwendet werden, sind vollständig grün und zeigen einen Zähler: **SEO Title 1** bedeutet, dass das Attribut einmal verwendet wird.

![Verwendete Attribute mit Zählern](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/24-used-attributes-with-counters.png)

### Befüllungsgrad (Datendichte)

Der Befüllungsgrad ist der Anteil der Produkte in der Integration, die einen Wert für ein Attribut haben. Das Panel zeigt ihn auf drei Arten an:

- **Farbe der Unterstreichung.** Grün bedeutet, dass das Attribut bei mehr als 50 % der Produkte befüllt ist. Gelb bedeutet weniger als 50 %.
- **Stärke der Unterstreichung.** Die Linie wird kräftiger, je höher der Befüllungsgrad von 1 % bis 100 % steigt.
- **Tooltip.** Bewegen Sie den Mauszeiger über ein Attribut, um Namen, technischen Schlüssel, genauen Befüllungsgrad und einen Beispielwert aus einem echten Produkt zu sehen.

![Attribut-Tooltip mit Befüllungsgrad und Beispielwert](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/25-attribute-tooltip-with-fill-rate-and.png)

Attribute mit einem Befüllungsgrad von 0 % sind ausgeblendet. Klicken Sie auf **Show N without data**, um sie anzuzeigen.

:::tip

Lassen Sie bei Attributen mit gelber Unterstreichung **Only show when filled** aktiviert oder legen Sie einen Ersatzwert fest. So erhalten auch Produkte ohne diese Daten einen sauberen Prompt.

:::

### Attribute finden

- **Search attribute.** Geben Sie einen Teil des Namens ein, um die Liste zu filtern.
- **Sort By.** Sortieren Sie nach **Most filled** oder nach **Name**. Mit den Pfeilen wechseln Sie zwischen aufsteigender und absteigender Reihenfolge.

![Optionen von „Sort By“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/26-sort-by-options.png)

## 7. Snippets

Snippets sind wiederverwendbare Blöcke mit Prompt-Inhalten. Sie erscheinen als violette Chips im Snippets-Panel. Klicken Sie auf ein Snippet, um es in den Prompt einzufügen. Ein Snippet, das bereits im Prompt steht, wird im Panel ausgefüllt dargestellt.

Es gibt zwei Arten:

- **System-Snippets** wie Attribute list, Category list und Integration connector. Fozzels stellt sie allen Nutzern zur Verfügung. Sie können sie weder bearbeiten noch löschen.
- **Eigene Snippets**, die Sie mit der Schaltfläche **+** erstellen. Sie können sie bearbeiten (Stift) oder löschen (Papierkorb).

### Attribute list

Fügt alle befüllten Attribute des Produkts als Zeilen im Format _Label: Wert_ ein. Leere Attribute werden weggelassen.

![Block „Attribute list“ im Editor](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/27-attribute-list-block-in-the-editor.png)

![Darstellung von „Attribute list“ in der Vorschau](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/28-attribute-list-rendered-in-the-preview.png)

So übergeben Sie der KI schnell alle Produktdaten. Allerdings wird alles einbezogen, auch technische Felder wie IDs, Admin-URLs, Datumsangaben und Rohwerte wie `{"value":159.0,"unit":"CENTIMETERS"}`. Für bessere Texte wählen Sie die wichtigsten Attribute selbst aus und nutzen Attribute list für schnelle Tests. Fügen Sie das Snippet nur einmal pro Prompt ein, sonst werden dieselben Daten doppelt gesendet.

### Category list

Fügt Attributzeilen für die Kategorien ein, zu denen das Produkt gehört. In Shopify sind das Kollektionen; in anderen Integrationen kann es eine andere Verknüpfung sein. Beim Einfügen ist der Block leer und zeigt eine Kopfzeile wie **Category list · Collections · 10**.

![Leerer Block „Category list“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/29-empty-category-list-block.png)

Klicken Sie auf das Zahnrad am Block, um ihn einzurichten:

![Einstellungen von „Category list“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/30-category-list-settings.png)

- **Edit template.** Wählen Sie die Kategorieattribute aus, die einbezogen werden sollen, etwa Name, URL, Level oder Position. Die Liste stellen Sie genauso zusammen wie ein Snippet.
- **Resolve through.** Zeigt, über welche Produktverknüpfung die Kategorien ermittelt werden, zum Beispiel Collections.
- **Number of categories.** Die maximale Anzahl von Kategorien in der Liste. Ein Produkt kann vielen Kategorien angehören, auch technischen – ein Limit hält den Prompt kurz und fokussiert.

![Vorlage von „Category list“ mit ausgewählten Attributen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/31-category-list-template-with-selected-attributes.png)

Kategoriedaten helfen der KI, das Produkt besser zu verstehen. Mit Name und URL können Sie zudem interne Links zu verwandten Kategorien anfordern, was für SEO nützlich ist.

### Integration connector

Ruft Daten zum selben Produkt aus einem anderen Store in Ihrem Konto ab. Ein Magento-Flow kann zum Beispiel Lieferantenhinweise, Materialzusammensetzung oder Pflegehinweise nutzen, die nur in Ihrem CSV-Feed vorhanden sind.

- Nur in Produkt-Flows verfügbar und nur, wenn Ihr Konto einen zweiten Store hat.
- Hat das Produkt in diesem Store kein Gegenstück, liefert der Block nichts, sodass der Prompt sauber bleibt.

So richten Sie ihn ein:

1. Klicken Sie im Snippets-Panel auf **Integration connector**. Das Fenster **Integration connector** öffnet sich.

   ![Fenster „Integration connector“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/32-integration-connector-window.png)

2. Wählen Sie unter **Connected store** die Integration, die Website und den Store, aus denen Daten abgerufen werden sollen.

   ![Auswahl des verbundenen Stores](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/33-choosing-the-connected-store.png)

3. Klicken Sie auf **Save**.

   ![Verbundener Store ausgewählt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/34-connected-store-selected.png)

4. Das Fenster **Integration connector template** öffnet sich mit den Attributen des verbundenen Stores. Fügen Sie die benötigten Attribute genauso hinzu wie in einem Snippet: Jedes wird zu einer Bedingungszeile.

   ![Integration connector template](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/35-integration-connector-template.png)

5. Klicken Sie auf **Save**. Der Block wird Ihrem Prompt hinzugefügt.

   ![Integration connector template mit Attributen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/36-integration-connector-template-with-attributes.png)

:::warning

Fozzels findet das Produkt im verbundenen Store anhand seiner Kennung, etwa SKU oder ID. Die Kennungen müssen in beiden Stores übereinstimmen. Ist das nicht der Fall, hat das Produkt dort kein Gegenstück und der Block bleibt in der Vorschau leer.

:::

### Ein eigenes Snippet erstellen

1. Klicken Sie im Snippets-Panel auf **+**. Das Fenster **New snippet** öffnet sich.

   ![Fenster „New snippet“](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/37-new-snippet-window.png)

2. Geben Sie einen **Name** ein.
3. Klicken Sie auf einen Ausgangstyp, zum Beispiel **Attribute list**. Er erscheint im Editor als Platzhalter.
4. Klicken Sie auf die benötigten Attribute. Jedes wird als Bedingungszeile hinzugefügt, und der Platzhalter wird durch Ihre eigene Liste ersetzt.
5. Setzen Sie den Cursor in eine neue Zeile, bevor Sie das nächste Attribut hinzufügen. Eine neue Zeile wird nicht automatisch angelegt.

   ![Neues Snippet mit einer Liste von Attributen](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/38-new-snippet-with-a-list-of.png)

6. Klicken Sie auf **Save**. Das Snippet erscheint im Snippets-Panel.

   ![Snippet erstellt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/39-snippet-created.png)

Ihre Snippets stehen in allen Flows derselben Integration zur Verfügung, über alle ihre Stores hinweg.

### Ein Snippet im Prompt bearbeiten

Im Prompt ist Ihr Snippet ein einzelner violetter Block mit seinem Namen.

![Eigenes Snippet im Prompt und in der Vorschau](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/40-custom-snippet-in-the-prompt-and.png)

Klicken Sie auf das Zahnrad daran:

![Zahnradmenü des Snippets](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/41-snippet-gear-menu.png)

| Option | Was passiert |
| --- | --- |
| **Edit snippet (all prompts)** | Öffnet das Snippet zur Bearbeitung. Änderungen gelten für jeden Prompt, der es verwendet, in allen Flows und Stores der Integration |
| **Convert to inline text (this prompt only)** | Wandelt das Snippet in diesem Prompt in normale Bedingungszeilen um. Anschließend können Sie jede Zeile bearbeiten, verschieben oder löschen. Spätere Änderungen am Snippet wirken sich nicht mehr auf diesen Prompt aus |

![In Inline-Bedingungszeilen umgewandeltes Snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/42-snippet-converted-to-inline-condition-lines.png)

Behalten Sie das Snippet, wenn dieselbe Liste identisch bleiben und an einer Stelle gepflegt werden soll. Wandeln Sie es um, wenn ein Prompt eine eigene Version benötigt.

:::note

Attribute innerhalb eines Snippets werden bei den Zählern im Attribut-Panel nicht mitgezählt.

:::

### Wenn ein Snippet gelöscht wird

Wird ein in Ihrem Prompt verwendetes Snippet gelöscht, bleibt sein Block im Prompt erhalten, wird aber blass dargestellt und zeigt statt des Namens nur eine Nummer, zum Beispiel **#11**. Er liefert nichts und beeinträchtigt die Generierung daher nicht. Löschen Sie den Block über sein **x** oder ersetzen Sie ihn durch ein anderes Snippet.

![Blasser Block eines gelöschten Snippets](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/43-faded-block-of-a-deleted-snippet.png)

## 8. Vorschau

Die Vorschau (**Preview**) zeigt den finalen Prompt für ein Produkt aus Ihrer ausgewählten Produktmenge, in der Sprache des ausgewählten Stores. Attribute werden durch die Werte des Produkts ersetzt, und Bedingungen ohne Wert werden weggelassen. Genau das erhält die KI.

### Kopfzeile der Vorschau

- **Produktname.** Klicken Sie darauf, um die Produktseite in Fozzels mit allen Attributwerten und Bildern zu öffnen.
- **Link-Symbol.** Öffnet das Produkt auf Ihrer Website.
- **SKU oder ID.** Was angezeigt wird, hängt von der Integration ab.
- **Beispiel wechseln (< >).** Wechselt zum vorherigen oder nächsten Produkt in Katalogreihenfolge.

![Schaltflächen zum Wechseln des Beispiels in der Kopfzeile der Vorschau](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/44-change-sample-buttons-in-the-preview.png)

### Wie sich die Vorschau verhält

- **Live.** Jede Änderung im Editor erscheint sofort. Sie müssen nichts aktualisieren.
- **Schreibgeschützt.** In der Vorschau können Sie nicht tippen. Ändern Sie den Prompt im Editor.
- **Synchronisiert.** Bewegen Sie den Mauszeiger im Editor über ein Attribut oder eine Bedingung, wird die entsprechende Zeile in der Vorschau hervorgehoben. Die Vorschau scrollt außerdem mit dem Editor mit, sodass Sie in einem langen Prompt nicht den Überblick verlieren.

![Beim Überfahren eines Attributs wird seine Zeile in der Vorschau hervorgehoben](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/45-hovering-an-attribute-highlights-its-line.png)

:::tip

Wechseln Sie zwischen einigen Beispielen, vor allem zu Produkten mit wenigen Daten. So sehen Sie, wie sich der Prompt liest, wenn einige Bedingungen übersprungen werden.

:::

### Die abschließende Anweisung

Am Ende jeder Vorschau sehen Sie: _Do not provide any commentary, word count, information or comments about the generated text in the returned text._ Fozzels fügt diese Zeile automatisch zu jedem Prompt hinzu, damit die KI nur den eigentlichen Inhalt zurückgibt. Sie müssen sie nicht selbst hinzufügen.

## 9. Vorlagen

Mit Vorlagen können Sie einen vollständigen Prompt in anderen Flows wiederverwenden. Anders als ein Snippet umfasst eine Vorlage den gesamten Prompt. Die Bedienelemente befinden sich unten im Editor.

- **Load** ersetzt den aktuellen Prompt durch eine gespeicherte Vorlage. Ist der Prompt nicht leer, werden Sie zuerst um Bestätigung gebeten, damit Ihre Arbeit nicht versehentlich verloren geht.
- **Save as template** speichert den aktuellen Prompt einschließlich Attributen, Bedingungen und Snippets als neue Vorlage.

![Bestätigung, bevor eine Vorlage den Prompt ersetzt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/46-confirmation-before-a-template-replaces-the.png)

## 10. Lokalisierung von Attributnamen

Attributnamen folgen der Sprache des ausgewählten Stores, zum Beispiel `product_name` für en-US und `product_naam` für nl-NL.

- Hat ein Attribut für eine Sprache keinen Namen, wird der Name aus dem Standard-Store (mit `*` markiert) verwendet.
- Um einen lokalisierten Namen zu ändern, gehen Sie zu **Integration settings → Attribute → Locale**.

Prompts verknüpfen Attribute über ihren eindeutigen technischen Schlüssel, nicht über ihren Namen. Das Umbenennen eines Attributs oder das Wechseln der Store-Sprache beeinträchtigt Ihren Prompt daher nicht.

## 11. Den Prompt mit dem AI Prompt Assistant bearbeiten

Der AI Prompt Assistant kann Ihren Prompt für Sie schreiben oder erweitern. Er liest den aktuellen Prompt und antwortet nur mit dem Teil, der hinzugefügt werden soll. Wenn Ihr Prompt zum Beispiel eine SEO-Beschreibung anfordert und Sie „add slug“ eingeben, schlägt er nur das neue Element vor.

Klicken Sie zum Öffnen auf die blaue Chat-Schaltfläche unten rechts auf der Seite. Das Panel **AI Assistant** öffnet sich neben dem Editor. Geben Sie Ihre Anfrage ein, zum Beispiel _Help me create a prompt for Description. Use filled attributes._, und drücken Sie zum Senden **Enter**. Mit **Shift+Enter** erzeugen Sie eine neue Zeile.

Der Assistent kennt die Attribute Ihrer Integration und deren Befüllungsgrad. Er baut den Prompt mit Attributen und Bedingungen auf und erläutert seine Entscheidungen, zum Beispiel, warum ein Attribut in eine Bedingung eingebettet ist.

![AI Assistant mit einem vorgeschlagenen Prompt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/47-ai-assistant-with-a-suggested-prompt.png)

### Einen Vorschlag platzieren

Jeder Vorschlag erscheint im Chat als Block, genauso dargestellt wie im Editor, mit diesen Schaltflächen:

| Schaltfläche | Funktion |
| --- | --- |
| Copy | Kopiert den Vorschlag, damit Sie ihn selbst einfügen können |
| Add | Fügt den Vorschlag am Ende des Prompts an |
| At cursor | Fügt den Vorschlag an der Cursorposition im Editor ein |
| Replace all | Ersetzt den gesamten Prompt durch den Vorschlag |

Nach dem Klick wird die Schaltfläche grün und ist kurz deaktiviert, damit derselbe Text nicht zweimal eingefügt wird. Die Platzierungsschaltflächen erscheinen nur, wenn auf der Seite ein Prompt-Editor geöffnet ist. Passt ein Vorschlag nicht zum Format des Editors, wird nur **Copy** angezeigt.

### Auswählen, welcher Prompt bearbeitet wird

Enthält eine Seite mehr als einen Prompt, können Sie über ein Dropdown oberhalb des Chat-Eingabefelds auswählen, mit welchem der Assistent arbeitet.

- Ein Vorschlag geht immer an den Prompt, der beim Stellen der Frage ausgewählt war – auch wenn Sie das Dropdown später ändern.
- In einer aus einer früheren Sitzung wiederhergestellten Unterhaltung gehen Vorschläge an den Hauptprompt des Flows.
- Wurde der Prompt, zu dem ein Vorschlag gehört, gelöscht, wird der Vorschlag als nicht verfügbar markiert und nirgendwo anders eingefügt.

## Verwandte Artikel

- [4.3.3 Effektive Prompts schreiben (Empfehlungen)](/content-creation-flows/writing-effective-prompts-recommendations)
- [4.7.3 Erlaubte HTML-Tags für die KI-Textgenerierung](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
- [4.9.1 So erstellen Sie einen Content-Flow für Kategorien](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels)
