---
title: '4.11.1. Workflows. Lektion 1: Erste Schritte mit Workflows'
sidebar_position: 30
slug: /content-creation-flows/workflows-lesson-1-getting-started
description: >-
  Workflows prüfen und bearbeiten generierte Ergebnisse automatisch: Wörter
  ersetzen, Text auf eine Längenbegrenzung kürzen oder ein Ergebnis zur
  manuellen Prüfung markieren, bevor es in den Store gelangt. Erstellen Sie
  Ihren ersten Workflow und erfahren Sie, wie er sich verhält.
---

Workflows prüfen und bearbeiten generierte Ergebnisse automatisch: Sie können Wörter ersetzen, Text auf eine Längenbegrenzung kürzen oder ein Ergebnis zur manuellen Prüfung markieren, bevor es in den Store gelangt. Sie legen die Regeln einmal fest, und sie gelten für jedes neue Ergebnis.

In dieser Lektion erstellen Sie Ihren ersten Workflow, sehen, wie er sich verhält, und lernen dabei einige Dinge kennen, auf die Sie achten sollten.

## Das Beispiel, mit dem wir arbeiten

Unser Flow generiert eine kurze Lieferbeschreibung für einen Kuchen:

> We are delighted to deliver your chosen **cake** directly to the address you provide… Each Festive **Cake** will arrive in beautiful gift packaging… every celebration deserves a delicious **CAKE**…

Das Wort „cake" kommt dreimal vor, in drei unterschiedlichen Schreibweisen (Groß-/Kleinschreibung). Behalten Sie das im Hinterkopf, es wird später wichtig.

## Schritt 1: Workflow erstellen

Gehen Sie zu **Home → Workflows** und klicken Sie auf **Create workflow**.

![Workflows-Seite mit der Schaltfläche Create workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/01-workflows-page-create-workflow.png)

Der Editor öffnet sich mit dem Standardnamen **New workflow 1**. Vergeben Sie sofort einen aussagekräftigen Namen für den Workflow: Sobald Sie mehrere haben, lassen sich generische Namen leicht verwechseln.

![Leerer Workflow-Editor mit der Schaltfläche Create block](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/02-empty-workflow-editor.png)

> **Hinweis:** Der Schalter **Active** ist standardmäßig aktiviert. Ein Workflow hat keine Wirkung, solange er keinem Flow zugewiesen ist. Sobald er zugewiesen ist, beginnt ein aktiver Workflow jedoch, Ergebnisse zu verarbeiten.

## Schritt 2: Einen Block einrichten

Klicken Sie auf **Create block**. Auf der Zeichenfläche erscheint ein Block mit zwei Teilen:

- **IF:** die Bedingungen, unter denen der Block ausgeführt wird.
- **THEN:** die Aktionen, die er durchführt.

![Ein neuer, leerer Block auf der Zeichenfläche](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/03-new-empty-block.png)

Klicken Sie auf das Stiftsymbol, um die Blockeinstellungen zu öffnen.

![Leeres Fenster Edit block](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/04-empty-edit-block-window.png)

### Bedingungen

Jede Bedingung besteht aus drei Teilen: was geprüft wird, ein Operator und ein Wert. Es gibt zwei Dinge, die Sie prüfen können:

![Bedingungstypen: Length und Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/05-condition-types.png)

**Length** ist die Textlänge in Zeichen, Leerzeichen eingeschlossen. Operatoren: greater than, greater or equal, less than, less or equal, equals, not equal.

![Length-Operatoren](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/06-length-operators.png)

**Text** prüft den Inhalt. Operatoren: contains, does not contain, begins with, ends with, is empty, is not empty.

![Text-Operatoren](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/07-text-operators.png)

Bei mehr als einer Bedingung wählen Sie die Verknüpfungslogik:

- **All conditions:** jede Bedingung muss erfüllt sein (UND).
- **Any condition:** eine genügt (ODER).

### Aktionen

Es stehen drei Aktionen zur Verfügung. Die Beschreibungen werden direkt im Dropdown-Menü angezeigt.

![Die drei verfügbaren Aktionen](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/08-available-actions.png)

- **Replace text:** ersetzt ein Wort oder eine Wortgruppe. Lassen Sie **Replace with** leer, um sie zu entfernen. HTML-Tags sind davon nicht betroffen.
- **Truncate:** kürzt den Text auf eine maximale Zeichenanzahl.
- **Mark suspicious:** markiert das Ergebnis zur manuellen Prüfung.

Ein Block kann mehrere Aktionen enthalten. Sie werden von oben nach unten ausgeführt.

### Ihr erster Block

**Aufgabe:** Wenn der Text „Happy holidays!" enthält, „cake" durch „festive cake" ersetzen.

1. **Name:** `cake -> festive cake`
2. **Conditions → Add condition:** `Text` · `contains` · `Happy holidays!`
3. **Actions → Add action:** `Replace text`, Find `cake`, Replace with `festive cake`, **All matches** aktiviert (ersetzt jedes Vorkommen, nicht nur das erste).
4. Klicken Sie auf **Apply**.

![Blockeinstellungen für das erste Beispiel](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/09-first-block-settings.png)

Der Block auf der Zeichenfläche zeigt jetzt eine Zusammenfassung seiner Bedingungen und Aktionen an. Vergewissern Sie sich, dass **Active** aktiviert ist, und klicken Sie auf **Save**.

![Gespeicherter Block mit Zusammenfassung, Schalter Active und Schaltfläche Save](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/10-saved-block-summary.png)

## Schritt 3: Den Workflow einem Flow zuweisen

Ein gespeicherter Workflow bewirkt nichts, solange er keinem Flow zugeordnet ist.

1. Öffnen Sie Ihren Flow und wechseln Sie zum Tab **Automation** (der 4. Tab).
2. Wählen Sie unten im Bereich **Workflows** Ihren Workflow aus dem Dropdown-Menü aus.
3. Klicken Sie auf **Save**, um den Flow zu speichern.

![Bereich Workflows eines Flows mit einem zugewiesenen Workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/11-flow-workflows-section.png)

Generieren Sie ein neues Ergebnis und öffnen Sie es aus der **Batch List** (der Tabelle der generierten Ergebnisse).

## Schritt 4: Das Ergebnis prüfen

Der Text, der „Happy holidays!" enthält, hat sich geändert:

![Ergebnis mit „festive cake" und „Festive festive cake"](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/12-result-festive-festive-cake.png)

Beachten Sie **„Festive festive cake"**. Das Modell hat „Festive Cake" mit großem C geschrieben, und ohne **Match case** ignoriert die Ersetzung die Groß-/Kleinschreibung, sodass auch „Cake" ersetzt wurde.

**Lösung:** Aktivieren Sie **Match case**. Dann wird nur das kleingeschriebene „cake" ersetzt, und „Festive Cake" bleibt unverändert.

> **Zu beachten:** Replace text berücksichtigt keinen Kontext, es sucht nur nach Übereinstimmungen. Wenn das Modell bereits „delicious cake" geschrieben hat, ergibt das Ersetzen von `cake` durch `delicious cake` „delicious delicious cake". Überlegen Sie, wie sich Ihre Ersetzung bei unterschiedlichen Texten verhält.

## Schritt 5: Wie Ergebnisse verarbeitet werden

Wenn Sie die Einstellungen eines Workflows ändern und ein bereits verarbeitetes Ergebnis erneut öffnen, bleibt das Ergebnis unverändert. So funktioniert das System:

- Workflows verarbeiten nur **neue und neu generierte** Ergebnisse.
- Jedes Ergebnis wird von einem bestimmten Workflow **nur einmal** verarbeitet. Das Bearbeiten seiner Blöcke wirkt sich nicht auf Ergebnisse aus, die er bereits verarbeitet hat.
- Änderungen sind **dauerhaft**. Das Entfernen eines Workflows aus einem Flow stellt den ursprünglichen Text nicht wieder her.

Um neue Einstellungen anzuwenden, generieren Sie das Ergebnis neu.

> **Tipp:** Testen Sie neue Workflows zunächst an einem Test-Flow. Änderungen an verarbeiteten Ergebnissen können nicht rückgängig gemacht, sondern nur neu generiert werden.

## Schritt 6: Mehrere Workflows

Um Texte zu korrigieren, in denen „Festive festive" auftritt, können Sie einen zweiten Workflow hinzufügen. Dieser markiert das Ergebnis zusätzlich zur Prüfung:

- **Conditions:** `Text` · `contains` · `Festive festive`
- **Actions:**
    1. `Replace text`: `Festive festive` → `Festive`, **All matches** und **Match case** aktiviert
    2. `Mark suspicious` mit einer Begründung für den Prüfer

![Korrektur-Workflow mit Replace text und Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/13-fix-workflow.png)

Sie können einem Flow beliebig viele Workflows zuweisen. Sie werden **von oben nach unten** ausgeführt, wobei jeder den Text so erhält, wie ihn der vorherige verändert hat. Ändern Sie die Reihenfolge, indem Sie den Griff ziehen oder die Pfeile verwenden.

![Vier Workflows, die einem Flow zugewiesen sind](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/14-four-workflows-assigned.png)

Empfohlene Reihenfolge:

1. Workflows, die den Text verändern.
2. Workflows, die Nebeneffekte der vorherigen korrigieren. Eine Korrektur muss **nach** dem Workflow laufen, der das Problem verursacht.
3. Mark suspicious kann an beliebiger Stelle stehen: Es stoppt die Verarbeitung nicht.

Wenn mehrere Workflows ein Ergebnis als verdächtig markieren, wird die Begründung des **ersten** Workflows in der Liste angezeigt.

## Schritt 7: Kürzen mit manueller Prüfung

**Aufgabe:** „cake" durch „candies" ersetzen, den Text auf 110 Zeichen begrenzen und den gekürzten Text so lange aus dem Store heraushalten, bis ihn jemand geprüft hat.

- **Conditions** (**All conditions**):
    - `Text` · `contains` · `cake`
    - `Length` · `greater than` · `100`
- **Actions**, in dieser Reihenfolge:
    1. `Replace text`: `cake` → `candies`, **All matches** und **Match case** aktiviert
    2. `Truncate`: `110`, **Keep whole words** aktiviert
    3. `Mark suspicious`: Begründung `Truncated to 110 characters`

![Block mit Replace text, Truncate und Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/15-replace-truncate-mark-suspicious.png)

> **Warum die Reihenfolge wichtig ist:** „candies" ist länger als „cake". Wenn Sie zuerst kürzen und danach ersetzen, kann der Text die Grenze erneut überschreiten. Zuerst ersetzen, dann kürzen.

**Ergebnis:**

![Gekürztes Ergebnis, 109 Zeichen](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/16-truncated-result.png)

Der Text ist 109 Zeichen lang, und kein Wort wird mittendurch abgeschnitten. Durch einen Bindestrich verbundene Wörter wie „door-complete" zählen als ein Wort. Am Ende wird kein „…" hinzugefügt. Der Satz ist jedoch unvollständig, weshalb Mark suspicious Teil dieses Blocks ist.

Ein als verdächtig markiertes Ergebnis wird **nicht mit dem Store synchronisiert**, bis ein Benutzer es bearbeitet oder neu generiert. In der Batch List erscheint neben **Sync Now** ein „!"-Symbol, und die Begründung wird beim Hovern angezeigt:

![Begründung für die Markierung neben Sync Now angezeigt](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/17-suspicious-reason-sync-now.png)

Innerhalb des Ergebnisses zeigt eine Warnung **Synchronization with integration is disabled** die Begründung an:

![Warnung Synchronization with integration is disabled mit der Workflow-Begründung](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/18-sync-disabled-warning.png)

> **Verdächtige Wörter der Integration haben Vorrang.** Die Integration verfügt über eine eigene Liste [verdächtiger Wörter und Muster](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control). Enthält der Text eines davon, erhält das Ergebnis die Systembegründung „Completion looks suspicious, possible AI recommendations found", und Workflow-Begründungen werden nicht angezeigt. Das gefundene Wort wird orange hervorgehoben.

![Systemwarnung mit einem hervorgehobenen Wort](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/19-system-suspicious-warning.png)

## Kurzübersicht

| Einstellung | Funktionsweise |
| --- | --- |
| All / Any condition | Jede Bedingung muss erfüllt sein / eine genügt |
| Length | Textlänge in Zeichen, Leerzeichen eingeschlossen |
| Replace text | Ein leeres Replace with entfernt die Übereinstimmung; HTML-Tags sind davon nicht betroffen |
| All matches | Aus: Es wird nur die erste Übereinstimmung ersetzt |
| Match case | Aus: Die Ersetzung ignoriert die Groß-/Kleinschreibung |
| Truncate | Es wird kein „…" hinzugefügt; Keep whole words hält Wörter zusammen |
| Mark suspicious | Blockiert die Synchronisierung mit dem Store; stoppt keine anderen Aktionen oder Workflows |
| Several suspicious marks | Die Begründung des ersten Workflows wird angezeigt |
| Integration suspicious words | Haben Vorrang vor Workflow-Begründungen |
| Processing | Nur neue und neu generierte Ergebnisse, einmal pro Workflow; Änderungen sind dauerhaft |

## Was folgt als Nächstes

Die nächste Lektion behandelt fortgeschrittene Funktionen: Yes/No-Verzweigungen und das Verbinden von Blöcken, Bedingungsgruppen sowie die Arbeit mit HTML-Ausgaben.
