---
title: "Neues in Fozzels: Oktober 2026"
sidebar_position: 18
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026
description: >-
  Füllen Sie bis zu 13 Attribute in einem Flow, richten Sie mit Workflows
  automatische Qualitätsregeln ein, erstellen Sie Prompts in einem neuen Editor
  mit Live-Vorschau und halten Sie KI-Fehler dank neuer Schutzmaßnahmen aus
  Ihrem Shop fern.
---

Dieses Update spart Ihnen Zeit und gibt Ihnen mehr Kontrolle über Ihre KI-Inhalte. Sie können jetzt bis zu 13 Attribute in einem Flow füllen, mit Workflows automatische Qualitätsregeln einrichten und Prompts in einem neuen Editor mit Live-Vorschau erstellen.

Außerdem haben wir eine ganze Reihe von Schutzmaßnahmen hinzugefügt, die KI-Fehler aus Ihrem Shop fernhalten. Hier finden Sie alle Neuerungen und erfahren, wie Sie sie nutzen.

## Highlights

### Bis zu 13 Attribute in einem Flow füllen

Sie brauchen nicht mehr für jedes Attribut einen eigenen Flow. Ein Flow kann jetzt ein Hauptattribut plus bis zu 12 weitere füllen, zum Beispiel eine Beschreibung, eine Kurzbeschreibung, einen Meta-Titel und eine Meta-Beschreibung. Alle Attribute werden gemeinsam in einer KI-Anfrage pro Produkt generiert. Ihre Produktdaten und Bilder werden also nur einmal gesendet, und die Texte passen natürlich zusammen.

![Additional attributes to fill: Fügen Sie bis zu 12 Attribute hinzu, jedes mit eigener Anweisung](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/01-additional-attributes.png)

In der Batch List erhält jedes Attribut eine eigene Spalte, sodass Sie alle Ergebnisse eines Produkts in einer Zeile prüfen.

![Batch List mit einer Spalte für jedes generierte Attribut](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/02-batch-list-columns.png)

**So nutzen Sie es:** Öffnen Sie einen Flow, wechseln Sie zu Flow Selection & Prompt und fügen Sie unter Additional attributes to fill die gewünschten Attribute mit je einer Anweisung hinzu. [Zur Anleitung](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)

### Workflows: automatische Qualitätsregeln

Workflows prüfen und bearbeiten jedes generierte Ergebnis, bevor es in Ihren Shop gelangt. Sie legen einmal einfache „IF / THEN"-Regeln fest, und Fozzels wendet sie auf jedes neue Ergebnis an:

- **Replace text:** Wörter und Wortgruppen austauschen oder entfernen, zum Beispiel um Ihre Markenbegriffe einheitlich zu halten.
- **Truncate:** einen Text auf eine maximale Länge kürzen, wobei ganze Wörter erhalten bleiben.
- **Mark suspicious:** ein Ergebnis zur manuellen Prüfung zurückhalten, mit einer Begründung, die Ihr Team sehen kann.

![Auswahl einer Aktion für einen Workflow-Block: Truncate, Mark suspicious oder Replace text](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/03-workflow-actions.png)

Sie können mehrere Workflows in einem Flow verketten, und ein markiertes Ergebnis wird nie synchronisiert, bevor es jemand geprüft hat.

![Workflow-Editor mit verketteten IF / THEN-Blöcken](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/04-workflow-editor.png)

**So nutzen Sie es:** Gehen Sie zu Home → Workflows, erstellen Sie einen Workflow und weisen Sie ihn dann im Schritt Automation einem Flow zu. [Zur Anleitung](/content-creation-flows/workflows-lesson-1-getting-started/)

### Ein neuer Prompt-Editor mit Live-Vorschau

Das Erstellen eines Prompts ist jetzt viel einfacher. Attribute und Bedingungen erscheinen als übersichtliche Blöcke, und die Live-Vorschau zeigt beim Tippen den genauen Prompt für ein echtes Produkt. Sie müssen also nicht mehr speichern und eine Vorschau öffnen, um ihn zu prüfen. Geben Sie / ein oder ziehen Sie ein Attribut aus dem Bereich, um Produktdaten hinzuzufügen.

Brauchen Sie Hilfe? Fragen Sie Jane, unsere KI-Assistentin: Sie kann Prompts direkt im Editor für Sie schreiben und anpassen. [Zur Anleitung](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)

![Der neue Prompt-Editor mit Live-Vorschau, Snippets und Jane, die einen fertigen Prompt einfügt](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/05-prompt-editor.png)

### Wiederverwendbare Prompt-Snippets

Speichern Sie Teile Ihrer Prompts, die Sie in vielen Flows verwenden, zum Beispiel den Tonfall Ihrer Marke oder eine nach Themen gruppierte Liste von Attributen. Fügen Sie ein Snippet mit einem Klick zu jedem Prompt hinzu. Wenn Sie ein Snippet aktualisieren, werden alle Flows, die es verwenden, ebenfalls aktualisiert. Sie müssen Flows also nicht mehr einzeln bearbeiten.

### Kategorietexte, die ihre Produkte kennen

Category Flows können jetzt die Produkte der Kategorie in den Prompt einbeziehen, mit ihren Namen, Links, Slugs und weiteren Attributen. Ihre Kategoriebeschreibungen können echte Produkte erwähnen und funktionierende Links zu Produktseiten enthalten. Das ist gut für die SEO und hilft Käufern, das Passende zu finden.

### Neue KI-Modelle: GPT-6 Astra und Claude Opus 5.5

Die neuesten und leistungsfähigsten Modelle sind jetzt in Ihren Flows verfügbar. GPT-6 Astra unterstützt außerdem die Websuche, auch in der Sandbox, und kann so nützliche Informationen ergänzen, die nicht in Ihrem Katalog stehen. Premium-Modelle kosten pro Generierung mehr. Den Preis sehen Sie auf der Kachel jedes Modells im Schritt AI Configuration.

![Claude Opus 5.5](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/06-claude-opus-5-5.png)

## Sicherere KI-Inhalte

KI-Modelle erfinden manchmal Fakten, raten, wie ein Produkt aussieht, oder hinterlassen Anmerkungen im Text. Wir haben in jedem Schritt Schutzmaßnahmen hinzugefügt, damit nur zuverlässige Inhalte in Ihren Shop gelangen.

- **Confidence threshold.** Legen Sie ihn pro Flow im Schritt Automation fest, von 0.1 bis 1.0. Die KI meldet, wie sicher sie sich bei jedem Wert ist, und alles unterhalb Ihres Schwellenwerts wartet auf Ihre Prüfung, statt automatisch gesendet zu werden. Lassen Sie das Feld leer, um die Funktion auszuschalten.

    ![Confidence threshold im Schritt Automation](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/07-confidence-threshold.png)

- **Intelligentere Erkennung verdächtiger Inhalte.** Die Standardliste verdächtiger Wörter und Wortgruppen ist länger, und neue integrierte Muster erkennen die typische Form eines KI-Kommentars, wie „Here is the…" oder „Final check", auch in Formulierungen, die das Modell noch nie verwendet hat. In den Integrationseinstellungen können Sie Muster ein- oder ausschalten und eigene Wörter hinzufügen.

    ![Verdächtige Wörter und integrierte Muster in den Integrationseinstellungen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/08-suspicious-patterns.png)

- **Eine Prüfung auf ausgeschaltete Funktionen.** Wenn Sie einen Flow speichern, prüft Fozzels, ob Ihr Prompt eine Funktion benötigt, die ausgeschaltet ist, zum Beispiel die Websuche oder Produktbilder. Eine Warnung zeigt, was fehlt, mit einer Schaltfläche, um AI Configuration zu öffnen oder Jane zu fragen.

    ![Warnung, wenn Ihr Prompt Websuche oder Produktbilder benötigt, die ausgeschaltet sind](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/09-disabled-features-warning.png)

- **Kein Raten ohne Bilder.** Wenn Ihr Flow Produktbilder verwendet, ein Produkt aber keine hat oder sie nicht gelesen werden können, wird dieses Produkt übersprungen, statt dass die KI rät.
- **Nur zuverlässige Modelle.** Wir haben veraltete Modelle und Modelle entfernt, die ihre Überlegungen in Ihren Texten hinterlassen konnten.
- **Stärkere integrierte Anweisungen.** Jeder Flow enthält jetzt strengere allgemeine Anweisungen, die die KI bei den Fakten und Ihrem gewünschten Format halten.
- **Jeder Flow braucht ein KI-Modell.** Ein Flow ohne Modell kann nicht mehr gespeichert oder gestartet werden, sodass nichts unbemerkt fehlschlägt.
- **Klare Fehlermeldungen.** Wenn eine Generierung fehlschlägt, sehen Sie jetzt den tatsächlichen Grund statt „Unknown error occurred" und wissen, was Sie beheben müssen.

## Image Flows

- **Image Flow duplizieren.** Kopieren Sie einen bestehenden Image Flow mit allen Presets, Szenen, dem Logo und dem Prompt und ändern Sie nur, was anders sein soll.
- **Ein zusätzliches Produktbild für den ganzen Flow.** Wählen Sie unter Additional product image for the whole flow eine Bildposition, zum Beispiel das 2. Bild. Fozzels fügt es zusätzlich zum Hauptbild zu jedem Produkt hinzu, sodass die KI mehr Blickwinkel sieht und Schnitt, Aufdruck und Textur genauer wiedergibt. Produkte mit weniger Bildern verwenden nur das Hauptbild.

    ![Additional product image for the whole flow: Bildposition auswählen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/10-additional-product-image.png)

- **Run Now beachtet Ihr Tageslimit.** Manuelle Läufe zählen jetzt zur Anzahl der Produkte pro Tag des Flows. Ist das Limit bereits erreicht, sehen Sie eine Warnung mit dem, was zu tun ist: Erhöhen Sie die Anzahl im Schritt Automation oder führen Sie den Flow später aus. Kostenlose Testgenerierungen in der Vorschau zählen nicht.

## Katalog und Batch List

- **Ausgewählte Produkte aktualisieren.** Haben Sie ein paar Produkte in Ihrem Shop geändert? Laden Sie nur diese Produkte neu statt des ganzen Katalogs und generieren Sie sofort neue Inhalte.

    ![Actions → Repull Selected Products in Manage Products](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/11-repull-selected-products.png)

- **Gespeicherte Filtersets.** Speichern Sie eine Filterkombination einmal, zum Beispiel „Women - empty descriptions", über Filter set → Save as new. Wenden Sie sie mit einem Klick in Integrationen, im Katalog und in Flows an und fügen Sie bei Bedarf weitere Bedingungen hinzu.

    ![Eine Filterkombination über Filter set → Save as new speichern](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/12-filter-set-save.png)

    ![Ein gespeichertes Filterset, das mit einem Klick angewendet werden kann](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/13-filter-set-saved.png)

- **Spalten der Batch List auswählen.** Sie haben gefragt, wir haben es gebaut. Legen Sie mit einem Kontrollkästchen in den Einstellungen eines Attributs fest, dass es immer in der Batch List angezeigt wird, und wählen Sie unter Column visibility pro Flow, welche Prompt-Attribute angezeigt werden.

    ![Column visibility in der Batch List](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/14-column-visibility.png)

- **Umfangreichere Berichte.** Fügen Sie Ihren exportierten Berichten zusätzliche Spalten mit generierten Attributen hinzu, bereit zum Teilen mit Ihrem Team.
- **Reibungslosere Prüfung.** Das Prüfungs-Popup scrollt jetzt automatisch.
- **Klare Flow-Aktivierung.** Wenn Sie einen Flow einschalten, zeigt Fozzels genau an, was aktiviert wird und welche anderen Flows fortgesetzt werden.

## Jane und Ihr Konto

- **Jane kennt den neuen Editor.** Unsere KI-Assistentin arbeitet jetzt mit dem neuen Prompt-Editor und Flows mit mehreren Attributen. Bitten Sie sie, Ihre Prompts zu lesen, zu schreiben oder zu aktualisieren.
- **Separate Finanz-E-Mail-Adresse.** Senden Sie Rechnungen und Guthabenbenachrichtigungen an Ihre Finanz- oder Buchhaltungsadresse statt an Ihre Login-E-Mail-Adresse.
- **Zeitzone nach Land.** Neue Konten erhalten automatisch die Zeitzone ihres Landes, sodass Importe zur richtigen Ortszeit laufen.
- **Hilfe bei Verbindungsproblemen.** Wenn sich eine Integration nicht verbinden kann, zum Beispiel wegen einer Firewall, verweist Fozzels Sie auf eine Help-Center-Seite, die erklärt, was Sie freigeben müssen.

## Integrations-Updates

**Magento 2**

- **Blog- und CMS-Inhalte (erster Schritt).** Fozzels importiert jetzt Ihre Blog- und CMS-Inhalte mit ihren Attributen und zeigt sie in einem separaten Katalog und auf einer eigenen Markenseite an. Die KI-Inhaltsgenerierung für Blogs und CMS-Seiten folgt in einem nächsten Update.

    ![Manage Blog: importierte Magento 2 CMS-Seiten](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/15-manage-blog.png)

- **Filtern nach Bestandsstatus und Menge**, damit Sie sich auf Produkte konzentrieren können, die auf Lager sind, zum Beispiel nur Produkte mit mehr als 10 verfügbaren Stück. Schalten Sie in Ihren Integrationseinstellungen Pull stock status und Pull stock quantity ein.

    ![Pull stock status und stock quantity in den Magento 2 Integrationseinstellungen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/16-stock-settings.png)

- **Bilder mit All Store Views synchronisieren.** Ergebnisse von Image Flows können jetzt mit dem Geltungsbereich All Store Views synchronisiert werden, sodass eine Synchronisierung jede Store-Ansicht aktualisiert.

**WooCommerce**

- **Alt-Texte für Produktbilder**, für bessere SEO und Barrierefreiheit.

**Salesforce**

- **Bestandsfilterung und Pull-Bedingungen** auf Integrationsebene, damit Sie nur die Produkte importieren, die Sie brauchen.

**CSV / Raw File**

- **Größere Dateien** werden jetzt dank Paginierung unterstützt.

**BizzLayer**

- **Aus Ihrem Feed entfernte Produkte** werden nicht mehr für die Inhaltsgenerierung verwendet.

## Fehlerbehebungen

- Sonderzeichen wie & in Produktnamen werden in Ihrem Shop jetzt korrekt angezeigt.
- Die Produktanzahl in Flows entspricht jetzt Ihrer tatsächlichen Auswahl.
- Der Synchronisierungsfortschritt eines Flows zählt gelöschte Produkte nicht mehr mit.

    ![Flow-Fortschritt, der aus dem Katalog entfernte Produkte separat anzeigt](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/17-flow-progress.png)

- Filter in älteren Flows übergeben Produkte jetzt korrekt an die Batch List.
- Die Prompt- und Produktvorschau wird automatisch aktualisiert, wenn Sie die Flow-Filter ändern.
- Aktive Image Flows werden nicht mehr als inaktiv angezeigt.
- Die Bildgenerierung bricht bei großen oder nicht verfügbaren Bildern nicht mehr ab.

Haben Sie Fragen zu diesen Updates? Fragen Sie Jane in der App.
