---
id: '103000367976'
title: '4.1.2. Einen Content Flow erstellen: Anleitung in sechs Schritten'
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  So richten Sie einen Content Flow in sechs geführten Schritten ein: Shop und
  Felder wählen, den Prompt aus Blöcken bauen, jedes Feld einstellen, an echten
  Produkten testen und starten. Außerdem: die Flow-Seite, die Prüfung der
  generierten Inhalte und das Brand Profile.
keywords:
- Inhaltsfluss
- Content-Flow
---

Ein Content Flow sagt Fozzels, an welchen Produkten es arbeitet, welche Felder es befüllt, welches KI-Modell es nutzt und welche Anweisungen das Modell erhält. Fozzels generiert dann die Inhalte, aktualisiert sie und sendet sie an Ihren Shop.

Sie richten einen Content Flow in sechs geführten Schritten ein. Sie bauen den Prompt aus Blöcken, die Sie ein- und ausschalten. Die Stimme Ihrer Marke steht an einem Ort: im [Brand Profile](#brand-profile). Dieser Artikel erklärt jeden Schritt, von der Auswahl des Shops bis zur Generierung von Inhalten für viele Produkte.

## Sechs Schritte zum fertigen Flow

1. **Store.** Wählen Sie die Integration, die Website und die Store View, für die Sie Inhalte generieren.
2. **What and with what?** Wählen Sie die Felder, die Fozzels generiert. Sie sehen, wie viele Produkte darin schon einen Wert haben. In diesem Schritt wählen Sie auch Ihre Produkte.
3. **Enrich the text.** Wählen Sie ein KI-Modell und bauen Sie aus Blöcken einen gemeinsamen Prompt: wer schreibt, für wen, in welcher Tonalität und woher die Fakten kommen.
4. **Fields.** Legen Sie für jedes Feld Länge, Struktur und Format fest.
5. **Test.** Generieren Sie Texte für echte Produkte und prüfen Sie die Scores, bevor Sie Inhalte für viele Produkte generieren.
6. **Launch.** Legen Sie fest, wie viele Produkte Fozzels pro Tag bearbeitet. Legen Sie auch fest, ob Sie die Texte freigeben, bevor Fozzels sie veröffentlicht.

Die sechs Schritte stehen immer links im Flow-Fenster. Ein abgeschlossener Schritt ist grün, der aktuelle Schritt ist blau. Die Schaltfläche **Next** wird erst aktiv, wenn Sie alle Pflichteinstellungen des aktuellen Schritts gemacht haben.

:::tip
Füllen Sie Ihr [Brand Profile](#brand-profile) aus, bevor Sie Ihren ersten Flow erstellen. Dann startet jeder neue Flow mit der Stimme Ihrer Marke.
:::

### Schritt 1. Store

Wählen Sie drei Dinge:

- **Integration**: Ihren Shop oder Ihr PIM.
- **Website**.
- **Store view**: die Sprache der Texte.

Alle Einstellungen nach diesem Schritt gelten für diese Kombination.

Unter den Feldern zeigt Fozzels Ihre Auswahl und wie viele Produkte sie enthält. Wenn der gesuchte Shop nicht in der Liste steht, verbinden Sie ihn zuerst unter **Integrations**.

![Schritt 1: Auswahl von Integration, Website und Store View](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-01-step-1-store.png)

### Schritt 2. What and with what?

Wählen Sie einen oder mehrere Inhaltstypen. Jede Karte zeigt, wie viel Prozent Ihrer Produkte in diesem Feld schon einen Wert haben. So sehen Sie sofort, wo die größten Lücken sind.

- **Title**: klare Produktnamen, die Käufer finden.
- **Description**: der vollständige Produkttext, der das Produkt verkauft.
- **SEO Title**: der Titel, den Google zeigt.
- **SEO Description**: der kurze Text in den Suchergebnissen, der Käufer zum Klicken bringt.
- **Other attribute**: ein Attribut aus Ihrem Shop, zum Beispiel Farbe, Material oder Maße.

![Schritt 2: Inhaltstypen mit Befüllungsgrad](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-02-step-2-content-types.png)

Im Fenster **Add another attribute** können Sie ein Attribut nach Name oder Code suchen. Die Attribute mit dem höchsten Befüllungsgrad stehen oben. Der Typ des Attributs kommt aus Ihrem Shop: eine Zahl, ein Wert aus einer Liste oder Text. So schreibt die KI den richtigen Werttyp.

![Das Fenster Add another attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-03-add-another-attribute.png)

ALT-Texte für Bilder haben einen eigenen Flow-Modus. Ein solcher Flow erstellt nur ALT-Texte und hat eigene Regeln. Weitere Informationen finden Sie in [Generieren von Bildalternativtexten für Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/).

Alle Felder, die Sie wählen, erscheinen im Block **You are creating**. Das erste Feld ist die Basis (**BASE**). Die anderen Felder nutzen es als Ausgangspunkt. Um die Reihenfolge zu ändern, ziehen Sie ein Feld an seinem Griff links. Die Anweisungen für jedes Feld geben Sie in Schritt 3.

Weiter unten in diesem Schritt wählen Sie die Produkte für den Flow.

![Der Block You are creating mit den gewählten Feldern](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-04-you-are-creating.png)

### Schritt 3. Enrich the text

In diesem Schritt bauen Sie den Prompt: die Anweisung, die die KI für jedes Produkt erhält. Der Prompt besteht aus Blöcken. Zuerst legen Sie fest, wie der Text klingt. Dann legen Sie fest, welche Quellen die KI nutzt und was im Text stehen muss. Unter den Blöcken sehen Sie den Prompt.

Wenn Sie den Schritt öffnen, bereitet Fozzels für jedes Feld einen Vorschlag vor. Fozzels legt die Basis fest: die Struktur, die Sprache und den richtigen Typ für jedes Feld. Klicken Sie auf **Load brand profile**, um ein gespeichertes Profil zu laden. Klicken Sie auf **Save as brand profile**, um die Einstellungen dieses Flows als neues Profil zu speichern.

**Welches KI-Modell?** Wählen Sie zuerst den Anbieter, dann das Modell. Das Modell bestimmt die Qualität und den Preis Ihrer Texte. Für jedes Modell sehen Sie die Kosten für 1.000 Tokens: für den Text, den die KI liest (Input), und für den Text, den sie schreibt (Output). Labels wie **Recommended**, **Balanced** oder **Fast & low cost** helfen Ihnen bei der Wahl. Das Modell bestimmt auch, ob die Blöcke **Look at photos** und **Search the internet** verfügbar sind. Sie können das Modell jederzeit ändern, ohne den Flow neu einzurichten.

![Schritt 3: der Basis-Prompt und die Auswahl des KI-Modells](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-05-step-3-ai-model.png)

**Wie der Text klingt.** Diese Einstellungen gelten für alle Abschnitte des Texts: wer schreibt, für wen, in welcher Tonalität und wie lang. Wählen Sie im Block **Role of the AI** mit einem Klick eine Rolle. Um Name und Beschreibung einer Rolle zu ändern, klicken Sie auf das Stiftsymbol. Die Beschreibung sagt, wer schreibt, mit welcher Expertise und mit welchem Ziel.

![Eine Rolle bearbeiten: Name und Beschreibung](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-06-edit-role.png)

Klicken Sie auf **Make default**, um die gewählte Option in allen neuen Flows zu nutzen. Die Option bekommt dann einen Stern und das Label „Default for new flows“. Daneben erscheint ein Link zum Brand Profile. Um das rückgängig zu machen, klicken Sie auf **Remove from defaults**. **Make default** funktioniert genauso für das Modell, die Zielgruppe, die Tonalität und die anderen Blöcke.

![Eine Rolle mit dem Label Default for new flows](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-07-role-default.png)

Die Blöcke **Target audience** und **Tone of voice** funktionieren wie die Rolle. Schalten Sie sie mit dem Schalter ein. Wählen Sie dann mit einem Klick eine gespeicherte Option, oder legen Sie eine neue Option an. Unter den Schaltflächen sehen Sie die vollständige Beschreibung, die die KI erhält. Wenn Sie keine Tonalität wählen, schreibt die KI neutral und informativ.

![Die Blöcke Target audience und Tone of voice in einem Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-08-audience-tone.png)

#### Neuromarketing-Prinzipien

Die vier Prinzipien sind **Processing fluency**, **Simulation**, **Congruence** und **Trust**. Sie stammen aus der Neuromarketing-Forschung mit der Erasmus-Universität Rotterdam. Schalten Sie die Prinzipien ein, die Sie brauchen. Die KI nutzt sie dann in jedem Text. Was jedes Prinzip bewirkt, erklärt der Abschnitt [Brand Profile](#neuromarketing-principles-in-the-brand-profile).

Sie wissen nicht, welche Prinzipien Sie nutzen sollen? Klicken Sie auf **Fozzels suggestions**. Die Fozzels-KI prüft die gewählten Produkte und zeigt Ihnen, welche Prinzipien dazu passen. Das empfohlene Prinzip bekommt das Label „advice“. Klicken Sie auf **Apply advice**, um es zu nutzen. Diese Funktion verbraucht Tokens.

![Neuromarketing-Prinzipien mit Empfehlung von Fozzels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-09-neuromarketing.png)

#### Woher die Fakten kommen

Hier legen Sie die Quellen fest, die die KI nutzen darf: die Attribute in Ihrem eigenen System, die Informationen in den Fotos und die Informationen im Internet. Die KI nutzt nur die Quellen, die Sie einschalten. Sie erfindet keine Fakten.

**Attributes from your store.** Die Attribute aus Ihrem Shop, ERP oder PIM, die die KI als Input nutzt. Fozzels wählt die Attribute mit hohem Befüllungsgrad schon vor. Klicken Sie auf das Kreuz, um ein Attribut zu entfernen, und fügen Sie fehlende Attribute hinzu. Der Prozentwert zeigt, bei wie vielen Produkten das Feld einen Wert hat. Der farbige Balken zeigt, ob das Feld befüllt, teilweise befüllt oder leer ist. Fozzels überspringt leere Felder.

![Der Block Attributes from your store](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-10-attributes-from-store.png)

**Look at photos.** Ihre Fotos können Informationen zeigen, die nicht in Ihren Feldern stehen, zum Beispiel die Passform, den Verschluss oder einen Druck. Die KI liest diese Informationen aus den Bildern. Sie nutzt sie im Text oder um ein Feld zu befüllen.

- **How many photos per product?** 1 bis 4 oder alle (maximal 5). Mehr Fotos liefern mehr Details, kosten aber mehr.
- **What should the AI look at?** Schreiben Sie die Details, die die KI prüfen soll, zum Beispiel Kragen, Taschen und Kapuze.
- **When a product has no image yet.** Fozzels wartet auf das Bild und generiert dann automatisch, oder es überspringt das Produkt.
- **Enable Image Resize.** Fozzels verkleinert große Bilder automatisch. Das verhindert fehlgeschlagene Generierungen und spart Credits. Es kostet 0,025 € pro Bild.
- **Fozzels suggestions.** Die KI prüft einige Fotos und schlägt sichtbare Details vor, die für den Text wichtig sind. Fügen Sie diese mit einem Klick hinzu.

![Der Block Look at photos](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-11-look-at-photos.png)

**Search the internet.** Manchmal stehen die nötigen Informationen weder in Ihrem Shop noch in den Fotos, zum Beispiel die Herstellerangaben, Materialdetails oder Bewertungen. Dann sucht Fozzels im Internet danach. Die KI nutzt nur die Fakten, die zu Ihren Produktdaten passen.

- **What does the AI search with?** Die Felder, die ein Produkt identifizieren: meist die Marke, der Name und die GTIN. Die Namen dieser Felder sind in jeder Integration anders.
- **Which information do you want the AI to look up online?** Die Themen für die Suche, zum Beispiel Bewertungen, Nachhaltigkeit oder Größenberatung. **Fozzels suggestions** zeigt Ihnen, welche Themen nützlich sind.

![Der Block Search the internet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-12-search-internet.png)

Fozzels berechnet die Kosten für **Look at photos** und **Search the internet** pro Produkt. Sie sehen diese Kosten im Schritt **Test**.

#### Bausteine: den Prompt erweitern

Diese Blöcke sind optional. Schalten Sie einen Block ein, füllen Sie ihn aus und speichern Sie ihn. Fozzels setzt ihn dann an eine feste Stelle im Prompt.

**Keywords.** Die Suchbegriffe, mit denen Käufer den Text finden sollen. Geben Sie sie selbst ein, oder klicken Sie auf **Fozzels suggestions**, um Keywords für die Produktkategorie zu erhalten. Eine Verbindung zu Ihrem SEO-Tool ist bald verfügbar. Fozzels setzt die Keywords in die Überschrift und in den ersten Absatz, danach in den restlichen Text. Wenn Sie keine Keywords wählen, wählt Fozzels für jedes Produkt einen Begriff aus dessen Titel und Kategorie.

![Der Block Keywords in einem Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-13-keywords.png)

**My snippets.** Ihre eigenen Anweisungen, die Sie in verschiedenen Flows wiederverwenden können. Zum Beispiel ein fester letzter Satz, eine Regel zu Größen oder eine Liste von Markennamen, die immer richtig geschrieben sein müssen. Ein Snippet gilt für den ganzen Text, in allen Feldern des Flows.

#### Regeln, Prüfungen und Leitlinien für den ganzen Text

Hier legen Sie fest, was die KI in allen Teilen des Texts immer tun oder nie tun soll. So vermeiden Sie Fehler, die Sie sonst in jedem Text korrigieren müssten.

**Do not mention.** Wörter und Themen, die nicht im Text stehen dürfen: Preise, Rabatte, Namen von Wettbewerbern, Aussagen wie „der beste“ oder „der günstigste“. Die KI nutzt sie nicht, auch wenn sie in Ihren Quellen stehen.

![Die Blöcke My snippets und Do not mention](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-14-snippets-do-not-mention.png)

**Guidelines and check rules · Fozzels standard.** Die Standardregeln, die Fozzels für jeden Text nutzt. Sie sind in jedem neuen Flow eingeschaltet. Sie können eine Regel ausschalten, die nicht zu Ihren Texten passt.

- Keine Preise, Rabatte oder Lieferzeiten nennen.
- Nur Fakten aus den Produktdaten, den Fotos oder den Suchergebnissen nutzen.
- Keine Superlative oder Aussagen wie „der beste“ oder „der günstigste“ nutzen.
- Größen, Materialien und Markennamen genau aus den Produktdaten übernehmen.
- Nur die Formatierung aus den Struktur-Einstellungen nutzen.
- Im ganzen Text dieselbe Anrede und dieselbe Schreibweise nutzen.

Eigene Regeln fügen Sie unter **Your own rules** hinzu, zum Beispiel „immer das Herstellungsland nennen“.

![Fozzels-Standardregeln und Ihre eigenen Regeln](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-15-standard-rules.png)

#### Zusätzliche Felder: kurze Leitlinien statt eigener Prompts

Wenn Sie in Schritt 2 mehr als ein Feld gewählt haben, befüllt die KI die zusätzlichen Felder in derselben Anfrage, mit demselben Hauptprompt. Rolle, Zielgruppe, Tonalität, Quellen und Regeln gelten automatisch auch für sie. Sie schreiben also keinen eigenen Prompt für jedes Feld. Sie schreiben nur eine kurze Leitlinie: was das Feld enthält, wie lang es ist und in welcher Form.

Fozzels hat für jedes Feld schon einen Vorschlag vorbereitet. Behalten Sie ihn, oder ändern Sie ihn mit **Edit guideline**. Der Link „Change fields in step 2“ führt Sie zurück zur Auswahl der Felder.

![Zusätzliche Felder und die Zusammenfassung Your prompt](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-16-extra-fields.png)

**Der Leitlinien-Editor.** Links sehen Sie den Text der Leitlinie. Rechts sehen Sie die **Preview**: dieselbe Leitlinie mit den echten Werten eines Produkts. Mit den Pfeilen in der **Preview** wechseln Sie zu einem anderen Produkt.

- **Attribute als Variablen.** Fozzels fügt Attribute aus dem Panel **Attributes** als grüne Tags in den Text ein. Ein gelber Bedingungsblock „if…“ fügt eine Zeile nur dann hinzu, wenn das Produkt einen Wert für dieses Attribut hat. Sie können das Panel nach Befüllungsgrad sortieren und darin suchen. Die Zahl an einem Attribut zeigt, wie oft Sie es nutzen.
- **Snippets.** Ihre gespeicherten Anweisungs-Snippets stehen rechts.
- **Vorlagen.** Klicken Sie auf **Save as template**, um eine Leitlinie als Vorlage zu speichern. Klicken Sie auf **Load**, um sie in einem anderen Flow zu nutzen.
- **AI Assistant.** Der Assistent hilft Ihnen, die Leitlinie zu schreiben oder zu ändern. Sie können das Ergebnis hinzufügen, an der Cursorposition einfügen, den Text damit ersetzen oder es kopieren.

Eine vollständige Beschreibung des Editors finden Sie in [4.3.2 Prompt-Einrichtung und -Nutzung: Der neue Prompt-Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

![Der Leitlinien-Editor mit Preview, Attributen und Snippets](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-17-guideline-editor.png)

![Der AI Assistant im Leitlinien-Editor](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-18-ai-assistant.png)

Das Zahnradsymbol neben dem Namen des Felds öffnet die Attribut-Einstellungen. Hier legen Sie fest:

- ob Fozzels das Attribut nutzt,
- ob Sie danach filtern können,
- ob Fozzels Inhalte hineinschreiben und Ihren Shop aktualisieren darf,
- ob Kindprodukte den Wert des Elternprodukts erhalten,
- ob HTML erlaubt ist.

Sie können den Namen des Attributs auch in andere Sprachen übersetzen. So versteht die KI besser, was das Attribut enthält. Wenn Sie dieses Fenster speichern, sendet Fozzels nichts an Ihren Shop.

![Attribut-Einstellungen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-19-attribute-settings.png)

#### Your prompt

Unten im Schritt sehen Sie eine Zusammenfassung: die Zahl der Felder im Flow, die Zahl der eingeschalteten Blöcke und alle aktiven Blöcke, von der Rolle und der Zielgruppe bis zu den Prüfregeln. Die echten Texte sehen Sie in Schritt 5, wenn Sie den Prompt an echten Produkten testen.

### Schritt 4. Fields

In diesem Schritt legen Sie für jedes Feld die Länge und die Struktur des Texts fest. Die Felder sind Tabs oben. Klicken Sie auf **+**, um ein Feld hinzuzufügen, und auf das Kreuz, um ein Feld zu entfernen. Alle Einstellungen aus dem Schritt **Enrich the text** gelten weiter für jedes Feld.

**Länge des Texts.** Die ungefähre Zahl der Wörter, die die KI schreibt: **Short** (etwa 60), **Normal** (etwa 120), **Long** (etwa 200) oder **Custom** (Ihr eigener Wert).

**Trust block.** Ein kurzer Block am Ende des Texts. Er gibt Käufern und KI-Agenten Vertrauen in das Produkt und in Ihren Shop. Schreiben Sie, was Ihren Shop zuverlässig macht, zum Beispiel hohe Kundenzufriedenheit, Ladengeschäfte, kostenlose Rücksendungen, eine Garantie oder ein Gütesiegel. Der Block wird ein eigener Abschnitt am Ende des Texts. Es gibt zwei Optionen:

- **Same block in every description** (empfohlen): Fozzels fügt den Block wörtlich nach jedem Text ein. Der Block ist immer korrekt, und der Prompt bleibt kürzer.
- **AI mentions it where it fits**: Die KI schreibt diese Punkte in eigenen Worten, nur wo sie passen.

Sie können dem Block eine Überschrift geben, zum Beispiel „Bestellung und Lieferung“, und eine Liste von Punkten.

![Schritt 4: die Länge des Texts und der Trust block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-20-step-4-length-trust-block.png)

**Struktur und Formatierung.** Die Reihenfolge der Textteile in Ihrem Shop. Fozzels bereitet die Standardstruktur für diesen Texttyp vor. Sie können sie ändern:

- **Format**: HTML (h2, h3, h4, p, ul) oder Klartext.
- **Abschnitte**: Jeder Abschnitt hat eine Überschriftenebene (H2, H3 …), eine Form (Überschrift, Absatz oder Aufzählung) und eine eigene Anweisung. Ziehen Sie einen Abschnitt, um die Reihenfolge zu ändern. Klicken Sie auf das Kreuz, um einen Abschnitt zu entfernen.
- **+ Custom section**: fügt einen eigenen Abschnitt hinzu.

![Struktur und Formatierung: die Abschnitte einer Beschreibung](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-21-structure-sections.png)

Klicken Sie auf das Stiftsymbol, um den Abschnitts-Editor zu öffnen. Hier legen Sie die Überschrift, die Ebene, die Anweisung, die Form, die ungefähre Zahl der Wörter und eine Bedingung fest. Die Bedingung legt fest, wann Fozzels den Abschnitt in den Text aufnimmt: **Always include**, **Only if a field is filled** oder **Only if a building block is on**.

![Einen Abschnitt und seine Bedingung bearbeiten](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-22-edit-section.png)

### Schritt 5. Test

In diesem Schritt sehen Sie Produkte aus Ihrer Auswahl. Für jedes Produkt können Sie den Prompt genau so sehen, wie die KI ihn erhält: Klicken Sie auf **View the filled-in prompt for this product**. Klicken Sie auf **Test**, um den Text zu sehen, den die KI für dieses Produkt schreibt, neben dem aktuellen Text. Wenn Ihnen das Ergebnis nicht gefällt, gehen Sie zurück zu den Blöcken in Schritt 3.

Fozzels schlägt einige Produkte aus Ihrer Auswahl für den Test vor. Um andere Produkte hinzuzufügen, suchen Sie danach. Um ein Produkt zu entfernen, klicken Sie auf das Kreuz.

:::note
Ein Test schreibt einen echten Text mit Ihrem KI-Modell. Fozzels berechnet ihn wie alle anderen Texte. Auch die Scores verbrauchen Tokens.
:::

![Schritt 5: Testprodukte](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-23-step-5-test-products.png)

Nach dem Test zeigt Fozzels den Gesamt-Score des aktuellen Texts und des neuen Texts sowie die Verbesserung, zum Beispiel 12 → 69 oder +57. Darunter sehen Sie für jedes Thema einen Score von 0 bis 100, mit einer kurzen Erklärung für den aktuellen und für den neuen Text.

| Thema | Was Fozzels bewertet |
|---|---|
| SEO | Finden Käufer den Text in Google: ein Keyword am Anfang, eine gute Länge, gut lesbare Sätze. |
| GEO | Finden KI-Suchmaschinen und Shopping-Agenten den Text: konkrete Fakten, die sie prüfen können. |
| AI readability | Versteht ein Sprachmodell den Text sofort: eine klare Struktur. |
| Keywords | Enthält der Text die gewählten Suchbegriffe auf natürliche Weise, ohne zu viele Wiederholungen. |
| Internal links | Enthält der Text die gewählten Links, mit einem Linktext, der sagt, wohin sie führen. |
| Conversion | Gibt der Text einen Kaufgrund, räumt er Zweifel aus und gibt er im richtigen Moment Vertrauen. |
| Neuromarketing | Nutzt der Text Simulation, Congruence, Trust und Processing fluency. |

Fozzels berechnet die Scores auf dem Text selbst, aus den Blöcken, die in diesem Flow eingeschaltet sind. Themen von ausgeschalteten Blöcken zählt es nicht, zum Beispiel **Internal links**.

![Scores des aktuellen und des neuen Texts für jedes Thema](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-24-test-scores.png)

### Schritt 6. Launch

Der letzte Schritt hat drei Fragen und bei Bedarf erweiterte Einstellungen.

1. **How many products per day?** 10, 25, 50, 100 oder Ihre eigene Zahl. Das Limit hält die Kosten und die Prüfarbeit klein. Wenn Fozzels die aktuelle Auswahl abgeschlossen hat, nimmt der Flow automatisch neue Produkte, die zur Auswahl passen.
2. **What happens with a new text?**
    - **I approve every text first** (empfohlen): Neue Texte kommen in Ihre Prüfliste. Fozzels sendet nichts an Ihren Shop, bevor Sie es freigeben.
    - **Straight to my shop**: Fozzels veröffentlicht die Texte automatisch. Sie können sie trotzdem bearbeiten oder zur vorherigen Version zurückkehren.
3. **If a product changes later?** Wenn sich ein Attribut ändert, das der Prompt nutzt, zum Beispiel die Farbe oder das Material, kann Fozzels automatisch einen neuen Text schreiben. Wenn der Schalter aus ist, schreibt Fozzels für ein Produkt nur einmal einen Text.

Unter **Advanced settings** können Sie verhindern, dass andere Flows denselben Inhalt erneut generieren:

- **Use default**: der Cooldown aus Ihren allgemeinen Einstellungen.
- **Override**: Ihr eigener Cooldown für diesen Flow, in Wochen.
- **Turn off**: kein Cooldown. Fozzels generiert keinen neuen Text nur deshalb, weil Zeit vergangen ist.

Weitere Informationen finden Sie in [Verhinderung der doppelten Inhaltsgenerierung](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).

Unter **Advanced settings** können Sie auch auf **Connect workflow** klicken, um eine Aktion hinzuzufügen, die nach jedem Text läuft. Zum Beispiel eine Übersetzung ins Deutsche oder eine neue Meta Description.

Klicken Sie auf **Launch flow**, um den Flow zu starten, oder auf **Save as draft**, um später weiterzumachen.

![Schritt 6: Launch-Einstellungen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-25-step-6-launch.png)

## Nach dem Start: die Flow-Seite

Nach dem Start sehen Sie die Meldung „Your flow is running“ und eine Schaltfläche, die die Flow-Seite öffnet.

![Die Meldung Your flow is running](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-26-flow-running.png)

Die Flow-Seite zeigt alle Informationen zum Flow auf einem Bildschirm:

- **Product selection**: der Filter, der die Produkte auswählt, und die Zahl der Produkte.
- **System prompt**: der Teil des Prompts, den Fozzels mit jeder Anfrage sendet, vor den Anweisungen für die Felder. Er enthält die Rolle, die Zielgruppe, die Tonalität, die Prinzipien, die Keywords, die zu vermeidenden Wörter und die Regeln. Was in diesen Teil gehört und was in den Prompt für die einzelnen Felder, lesen Sie in [4.3.4 Haupt-Prompt und Prompt pro Text: So sendet Fozzels Ihren Prompt](/content-creation-flows/main-prompt-and-prompt-per-text/).
- **Attributes to generate**: die Felder, die Fozzels generiert. Fozzels erstellt alle in einer KI-Anfrage pro Produkt, mit einem gemeinsamen Hauptprompt.
- **Status**, **AI Configuration**, **Automation**, **Workflows**: der Status und der Fortschritt, das Modell und sein Preis, das Tageslimit, die automatische Veröffentlichung, der Konfidenz-Schwellenwert, der Cooldown und die verbundenen Aktionen. Um einen Block zu ändern, klicken Sie auf seine Schaltfläche **Change**.

![Die Flow-Seite in der Expert view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-27-flow-page-expert-view.png)

In der oberen Leiste können Sie zwischen **Step by step** und **Expert view** wechseln. Dort öffnen Sie auch die generierten Inhalte (**Generated content**), den Test und den Zeitplan. Das Menü **…** enthält:

- **Run Now**: startet die Generierung sofort, auch wenn der Flow sein Tageslimit für heute schon erreicht hat.
- **Duplicate**, **Archive** und **Delete**. Weitere Informationen finden Sie in [4.1.3. Verwaltung von Flows: Duplizierung, Archivierung und Löschung](/content-creation-flows/managing-flows-duplication-archiving-and-deletion/).

![Das Flow-Menü mit Run Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-28-flow-menu-run-now.png)

**Workflows.** So fügen Sie dem Flow eine Workflow-Aktion hinzu:

1. Klicken Sie im Block **Workflows** auf **Change**.
2. Wählen Sie eine Aktion aus der Liste, zum Beispiel „Product is in“.
3. Klicken Sie auf **Add**.
4. Klicken Sie auf **Save**.

![Einen Workflow zum Flow hinzufügen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-29-add-workflow.png)

Weitere Informationen finden Sie in [4.11.1. Workflows. Lektion 1: Erste Schritte mit Workflows](/content-creation-flows/workflows-lesson-1-getting-started/).

**Test auf der Flow-Seite.** Hier öffnet sich eine Tabelle mit allen Produkten der Auswahl. Für jedes Produkt sehen Sie die SKU, den Namen, ein Vorschaubild und den Prompt. Klicken Sie in einer Zeile auf **Generate Now**, um sofort Inhalte für dieses Produkt zu generieren, ohne auf den Zeitplan zu warten. Sie können die Tabelle durchsuchen, zu anderen Seiten wechseln und die angezeigten Spalten wählen.

![Die Produkttabelle des Flows mit der Schaltfläche Generate Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-30-flow-product-table.png)

### Generierte Inhalte: prüfen und freigeben

Klicken Sie auf **Generated content**, um die Liste der generierten Inhalte zu öffnen (**Content Completion List**). Für jedes Produkt sehen Sie die SKU, den Namen, ein Vorschaubild, den Prompt, alle generierten Felder und die Daten, an denen Fozzels die Anfrage erstellt und ausgeführt hat. Jede Spalte hat einen Filter. Der Schalter **Confirmed** zeigt, ob ein Text freigegeben ist. Um eine Aktion für viele Texte gleichzeitig auszuführen, wählen Sie die Zeilen aus und wählen Sie die Aktion im Menü **Actions**.

![Die Liste der generierten Inhalte](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-31-generated-content-list.png)

Klicken Sie auf eine Zeile, um das Fenster **Edit completion result** zu öffnen:

- **Hauptfeld**: links der Text, rechts eine **Preview**, die zeigt, wie der Text in Ihrem Shop aussieht. Klicken Sie auf **Show HTML**, um den HTML-Code zu sehen, oder auf **Enable Editor**, um den visuellen Editor zu nutzen.
- **Andere Felder des Flows**: Unter dem Hauptfeld können Sie die anderen Felder prüfen und bearbeiten, die dieser Flow befüllt hat, zum Beispiel **SEO Description** und **SEO Title**.
- **Batch Confirmed**: markiert das Ergebnis als freigegeben. Über den Schaltflächen sehen Sie den Sync-Status mit Ihrem Shop.
- **Schaltflächen**: **Save**, **Save & Sync** (speichert den Text und sendet ihn sofort an Ihren Shop), **Regenerate**, **Show Revisions** (frühere Versionen) und **Copy to Clipboard**.

![Das Fenster Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-32-edit-completion-result.png)

Weitere Informationen finden Sie in [4.7.5 Bearbeiten von Inhalten in der Batch-Liste. Rich Text Editor](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/) und [4.7.4 Verdächtige Wörter & Ausdrücke](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

## Zwei Modi: Step by step oder Expert view

Nutzen Sie den Modus, der Ihnen gefällt. Sie können jederzeit mit einem Klick zwischen den Modi wechseln.

| Modus | Was er zeigt | Am besten für |
|---|---|---|
| Step by step | Ein geführter Assistent, ein Schritt nach dem anderen. | Neue Flows und neue Teammitglieder. |
| Expert view | Der ganze Flow auf einer Seite, auch die erweiterten Einstellungen. | Erfahrene Nutzer, die alle Einstellungen gleichzeitig sehen möchten. |

Zu den erweiterten Einstellungen in der **Expert view** gehören der Konfidenz-Schwellenwert, der Cooldown zwischen Flows und was Fozzels tut, wenn ein Produkt noch kein Bild hat.

Wenn Sie einen neuen Flow erstellen, gibt Fozzels ihm einen Namen aus Ihrer Auswahl. Sie können den Namen ändern und mit einem Klick zum vorgeschlagenen Namen zurückkehren.

## Brand Profile: die Stimme Ihrer Marke an einem Ort {#brand-profile}

Das **Brand Profile** ist eine eigene Seite in Ihren Kontoeinstellungen. Es legt fest, womit jeder neue Content Flow startet:

- das KI-Modell,
- wer schreibt, für wen und in welcher Tonalität,
- die Neuromarketing-Prinzipien und die Keywords,
- was nie im Text stehen darf.

Sie können jede dieser Einstellungen im Flow weiterhin ändern. Wenn Sie das Profil ändern, ändert Fozzels Ihre bestehenden Flows nicht.

![Die Seite Brand Profile](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-33-brand-profile.png)

### Mehr als ein Profil

Legen Sie für jede Marke, jeden Shop oder jede Produktlinie ein eigenes Profil an. Zum Beispiel eines für Beschreibungen und SEO, eines für FAQ, eines für ALT-Texte oder eines für einen Sale.

- **New profile**: Geben Sie einen Namen ein, zum Beispiel B2B, Outlet oder Premium-Linie, und klicken Sie auf **Create**.
- **Rename** / **Delete**: Ändern Sie den Namen eines Profils oder löschen Sie es. Das Standardprofil können Sie nicht löschen. Machen Sie zuerst ein anderes Profil zum Standard.
- **Das Standardprofil**: Jeder neue Flow startet damit. Im Schritt **Enrich the text** können Sie ein anderes Profil laden oder die Einstellungen des Flows als neues Profil speichern.

### KI-Modell

Wählen Sie einen Anbieter (OpenAI (ChatGPT), Anthropic, xAI oder Google Gemini) und ein Modell. Neue Flows starten mit diesem Modell. Sie können aber in jedem Flow ein anderes Modell wählen.

### Rolle, Zielgruppe und Tonalität

Schalten Sie jeden Block mit seinem Schalter ein. Die gespeicherten Optionen sind Schaltflächen. Klicken Sie auf eine Schaltfläche, um eine Option zu wählen. Unter den Schaltflächen sehen Sie die vollständige Beschreibung, die die KI erhält. Klicken Sie auf das Stiftsymbol, um die Beschreibung zu bearbeiten, oder auf **+ New…**, um eine neue Option anzulegen.

- **Role of the AI**: wer den Text schreibt und aus welcher Sicht, zum Beispiel Webshop-Texter, SEO-Spezialist, Marken-Storyteller oder Verkaufsberater.
- **Target audience**: wer den Text liest: das Alter, der Lebensstil, wie der Text den Leser anspricht und was ihm wichtig ist.
- **Tone of voice**: wie Ihre Marke mit Kunden spricht, in Ihren eigenen Worten. Wenn Sie keine Tonalität wählen, schreibt die KI neutral und informativ.

### Neuromarketing-Prinzipien im Brand Profile {#neuromarketing-principles-in-the-brand-profile}

Jedes Prinzip fügt dem Prompt eine Schreibregel hinzu. Sie können mehr als ein Prinzip wählen. Die Prinzipien verstärken sich gegenseitig.

| Prinzip | Schreibregel | Passt zu |
|---|---|---|
| Processing fluency | Kurze Sätze, eine klare erste Zeile, wenige Aussagen, eine logische Reihenfolge. | Alltagskäufe, Vergleiche, niedrige Preise. |
| Simulation | Der Kunde stellt sich vor, dass er das Produkt nutzt: eine Situation, ein Moment, ein Gefühl. | Neue, besondere oder emotionale Produkte. |
| Congruence | Der Text passt zum Foto und zu dem Produkt, das der Kunde zu Hause erhält. Er macht keine Versprechen, die das Produkt nicht hält. Das führt zu weniger Retouren. | Produkte, bei denen Erwartung und echtes Produkt übereinstimmen müssen. |
| Trust | Ehrlich, konkret und vertraut. Fakten, die der Kunde prüfen kann, keine cleveren Verkaufssprüche. | Teurere Käufe, unbekannte Marken, neue Kunden. |

### Keywords, zu vermeidende Wörter und eigene Anweisungen

- **Keywords**: die Suchbegriffe, mit denen Käufer den Text finden sollen. In einem Flow kann Fozzels auch Begriffe für dessen Produkte vorschlagen. Wenn Sie keine Keywords wählen, wählt Fozzels für jedes Produkt einen Begriff aus dessen Titel und Kategorie.
- **Do not mention**: Wörter und Themen, die nicht im Text stehen dürfen: Preise, Rabatte, Namen von Wettbewerbern, Aussagen wie „der beste“ oder „der günstigste“. Die KI nutzt sie nicht, auch wenn sie in Ihren Quellen stehen.
- **Own instructions**: weitere Informationen, die die KI kennen muss, in Ihren eigenen Worten. Zum Beispiel, wie der Text den Leser anspricht oder was er immer nennen soll, etwa „Versand innerhalb von 24 Stunden“. Fozzels fügt diesen Text nach den Blöcken in den System-Prompt ein, eine Zeile pro Absatz.
