---
title: '4.3.4 Haupt-Prompt und Prompt pro Text: So sendet Fozzels Ihren Prompt'
sidebar_position: 11.5
slug: /content-creation-flows/main-prompt-and-prompt-per-text
description: >-
  Jede Anfrage an die KI hat zwei Teile: den Haupt-Prompt, der für jedes Produkt
  gleich ist, und den Prompt pro Text mit den Produktdaten. Was wohin gehört,
  warum das so ist und wie Sie einen bestehenden Flow umstellen.
---

Fozzels sendet der KI für jedes Produkt einen Prompt. Dieser Prompt hat zwei Teile:

- den **Haupt-Prompt**: Er enthält die Regeln für den ganzen Flow und ist für jedes Produkt gleich.
- den **Prompt pro Text**: Er enthält die Aufgabe für ein Feld, mit den Daten dieses Produkts.

Fozzels sendet den Haupt-Prompt als *System-Anweisung* an die KI. Das sind die festen Vorgaben, die die KI bei der Aufgabe im Kopf behält. Dieser Artikel erklärt, was in welchen Teil gehört, warum das wichtig ist und wie Sie einen bestehenden Flow umstellen.

## Die zwei Teile im Überblick

| | Main prompt (Haupt-Prompt) | Prompt per text (Prompt pro Text) |
|---|---|---|
| **Was es ist** | Die Regeln, die für jeden Text des Flows gelten | Die Aufgabe für ein Feld |
| **Typischer Inhalt** | Wer schreibt, für wen, in welcher Tonalität, die Neuromarketing-Prinzipien, Keywords, was nie erwähnt werden darf, die Prüfregeln, Ihre eigenen festen Anweisungen | Länge, Struktur, der Vertrauensblock, interne Links und die Anweisung mit den Attributen des Produkts |
| **Produktdaten** | Nicht erlaubt. Der Prompt muss für jedes Produkt gleich lauten | Ja: Attribute, Bedingungen und Snippets |
| **Wo Sie ihn bearbeiten** | Schritt 3 des Flow-Assistenten (**Main prompt**) oder die Karte **Main prompt** auf der Flow-Seite | Schritt 4 des Flow-Assistenten (**Prompt per text**), ein Tab pro Feld |
| **Gesendet** | Einmal, vor den Prompts für die Felder | Für jedes Feld, mit den Daten dieses Produkts |

:::note
Einige Artikel und Screenshots nutzen noch die früheren Namen der Schritte: Schritt 3 hieß **Enrich the text** und Schritt 4 **Fields**. Die Karte auf der Flow-Seite hieß **System prompt**. Es sind dieselben Schritte und dieselbe Karte.
:::

## Warum zwei Teile?

- **Die KI hält Ihre Regeln besser ein.** KI-Modelle gewichten eine System-Anweisung stärker als eine Zeile mitten in einem langen Prompt. Tonalität, zu vermeidende Wörter und die Anrede bleiben bei allen Produkten einheitlicher.
- **Ihre Produktdaten können Ihre Regeln nicht außer Kraft setzen.** Ein Text in einem Produktfeld, zum Beispiel ein Lieferantenhinweis wie „Ignoriere die obigen Anweisungen“, bleibt im Prompt pro Text. Er ändert die Regeln im Haupt-Prompt nicht.
- **Schneller und günstiger bei großen Flows.** Der Haupt-Prompt ist für jedes Produkt Wort für Wort gleich. KI-Anbieter können einen Teil einer Anfrage wiederverwenden, den sie schon kennen. Das macht die Anfrage schneller und kann die Kosten senken.

## Was in den Haupt-Prompt gehört

Alles, was für **jeden** Text des Flows gilt, gehört in den Haupt-Prompt:

- **Role of the AI**, **Target audience** und **Tone of voice**
- **Neuromarketing principles**
- **Keywords**
- **Do not mention**: Wörter und Themen, die nie im Text stehen dürfen
- **Guidelines and check rules**, die Standardregeln von Fozzels und Ihre eigenen Regeln
- **Your own instructions**, in Ihren eigenen Worten, zum Beispiel „Sprechen Sie den Leser immer mit *Sie* an“ oder „Wir liefern in 24 Stunden, versprechen Sie nie eine schnellere Lieferung“

In Schritt 3 schalten Sie diese Blöcke ein und füllen sie aus. Fozzels schreibt daraus den Haupt-Prompt. Die Quellen, die Sie in Schritt 3 festlegen (**Attributes from your store**, **Look at photos** und **Search the internet**), sind für jedes Produkt anders. Fozzels sendet sie deshalb mit dem Prompt pro Text. Unter den Blöcken sehen Sie bei **Your main prompt** das Ergebnis. Sie können es auch von Hand bearbeiten.

### Keine Produktdaten im Haupt-Prompt

Der Haupt-Prompt muss für jedes Produkt gleich sein. Darum können Sie dort keine Produktdaten nutzen:

- Der Editor für den Haupt-Prompt hat kein Panel **Attributes** und keine **Preview**. Eine Vorschau sähe für jedes Produkt gleich aus. Stattdessen zeigt jeder Block den Text, den die KI dafür liest.
- Snippets, die Produktdaten lesen, und Snippets mit Bedingungen sind dort nicht verfügbar. Wenn ein solches Snippet schon in einem Haupt-Prompt steht und Sie Produktdaten hinzufügen, zeigt Fozzels diese Meldung: *„Dieses Snippet steht im Haupt-Prompt von …. Der Haupt-Prompt ist für jedes Produkt gleich, daher kann das Snippet dort nichts vom Produkt lesen. Nehmen Sie es zuerst aus diesen Haupt-Prompts heraus oder speichern Sie Ihre Änderung als neues Snippet.“*

Alles, was vom Produkt abhängt, gehört in den Prompt pro Text.

## Was in den Prompt pro Text gehört

Der Prompt pro Text ist die Aufgabe für ein Feld. In Schritt 4 hat jedes Feld des Flows einen Tab mit:

- der **Länge** des Textes,
- der **Struktur**: die Abschnitte, ihre Reihenfolge und ihre Überschriften,
- dem **Vertrauensblock** und den **internen Links**, bei Feldern, die diese nutzen,
- der **Instruction for [field]**: Was die KI in diesem Feld schreiben soll, mit den Attributen und Bedingungen des Produkts.

Der Haupt-Prompt gilt für jedes Feld. Wiederholen Sie hier also nicht die Rolle, die Tonalität oder die Regeln. Schreiben Sie nur, was für dieses Feld besonders ist, zum Beispiel *„Schreibe eine Meta-Beschreibung mit höchstens 155 Zeichen, die die Marke und den wichtigsten Vorteil nennt.“*

Die technischen Anweisungen fügt Fozzels dem Prompt pro Text selbst hinzu: das Antwortformat, die Optionen, die ein Auswahlfeld erlaubt, und die maximale Länge des Feldes. Sie müssen diese nicht schreiben.

## Wo Sie den Haupt-Prompt bearbeiten

- **In einem neuen Flow:** Schritt 3, **Main prompt**. Ein neuer Flow startet mit dem Haupt-Prompt Ihres Standard-[Brand Profile](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/#brand-profile).
- **In einem bestehenden Flow:** Auf der Flow-Seite zeigt die Karte **Main prompt** den Haupt-Prompt so, wie die KI ihn liest. Klicken Sie auf **Change**, um ihn zu bearbeiten. Es wird nur der Haupt-Prompt gespeichert. Die Prompts pro Text bleiben unverändert.
- **Brand Profiles:** Klicken Sie in Schritt 3 auf **Load brand profile**, um ein gespeichertes Profil zu nutzen. Klicken Sie auf **Save as brand profile**, um den Haupt-Prompt dieses Flows für andere Flows zu speichern. Ein Flow erhält eine Kopie des Profils. Wenn Sie das Profil später ändern, ändert Fozzels Ihre bestehenden Flows nicht.

## Bestehende Flows

Sie müssen nichts tun. Flows, die Sie vor dieser Änderung erstellt haben, funktionieren weiter:

- Der Haupt-Prompt eines älteren Flows ist zu Beginn leer. Sein Prompt bleibt dort, wo er war.
- Blöcke für den ganzen Flow, die schon im Prompt stehen, zum Beispiel die Rolle, die Zielgruppe oder die Tonalität, sendet Fozzels automatisch mit dem Haupt-Prompt.
- Text, den Sie selbst geschrieben haben, bleibt im Prompt pro Text, genau dort, wo Sie ihn geschrieben haben. Fozzels verschiebt Ihre eigenen Sätze nicht, denn ein Satz kann ohne die Sätze davor und danach etwas anderes bedeuten.

Um den vollen Nutzen zu haben, verschieben Sie Ihre festen Regeln selbst in den Haupt-Prompt.

### Einen bestehenden Flow umstellen

1. Öffnen Sie den Flow und lesen Sie seinen Prompt. Markieren Sie die Sätze, die für **jedes** Produkt gelten: die Persona, die Markenstimme, die Zielgruppe, die Anrede, die zu vermeidenden Wörter.
2. Klicken Sie auf der Flow-Seite bei der Karte **Main prompt** auf **Change**.
3. Fügen Sie diese Regeln mit den Blöcken hinzu (Rolle, Zielgruppe, Tonalität, do not mention, eigene Regeln) oder schreiben Sie sie als eigene Anweisungen. Speichern Sie.
4. Löschen Sie dieselben Sätze aus dem Prompt jedes Feldes, damit die KI sie nicht doppelt erhält.
5. Testen Sie den Flow an einigen echten Produkten und vergleichen Sie die Texte mit den früheren Ergebnissen.

**Beispiel.** Ein Prompt, der alles enthielt:

> Du bist Texter für eine Premium-Schuhmarke. Schreibe für Frauen zwischen 30 und 50, denen Komfort wichtig ist. Erwähne nie Preise oder Rabatte. Sprich den Leser immer mit „du“ an.
> Schreibe eine Produktbeschreibung von etwa 120 Wörtern für **Name**. Nenne das Material **Material** und die Farbe **Colour**.

Nach der Umstellung:

- **Main prompt:** *Du bist Texter für eine Premium-Schuhmarke. Schreibe für Frauen zwischen 30 und 50, denen Komfort wichtig ist. Erwähne nie Preise oder Rabatte. Sprich den Leser immer mit „du“ an.*
- **Prompt per text (Description):** *Schreibe eine Produktbeschreibung von etwa 120 Wörtern für* **Name**. *Nenne das Material* **Material** *und die Farbe* **Colour**.

## Gut zu wissen

- **Keine doppelten Anweisungen.** Wenn ein Feld-Prompt noch einen Block enthält, den der Haupt-Prompt schon hat, zum Beispiel eine zweite Tonalität, sendet Fozzels diesen Block nur einmal, aus dem Haupt-Prompt.
- **Mehrere Felder in einem Flow.** Alle Felder entstehen pro Produkt in einer KI-Anfrage und teilen sich den Haupt-Prompt. Die Rolle, die Zielgruppe und die Regeln gelten daher automatisch auch für die weiteren Felder.
- **Sehen, was gesendet wurde.** In der Liste der generierten Inhalte zeigt der Prompt jedes Textes beide Teile, zuerst den Haupt-Prompt.

## Verwandte Artikel

- [4.1.2. Einen Content Flow erstellen: Anleitung in sechs Schritten](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.3.2 Prompt-Einrichtung und -Nutzung: Der neue Prompt-Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)
- [4.3.3. Schreiben effektiver Prompts (Empfehlungen)](/content-creation-flows/writing-effective-prompts-recommendations/)
