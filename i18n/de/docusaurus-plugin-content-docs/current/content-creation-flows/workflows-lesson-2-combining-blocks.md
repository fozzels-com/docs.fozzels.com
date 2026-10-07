---
title: '4.11.2. Workflows. Lektion 2: Blöcke in einem Workflow kombinieren'
sidebar_position: 31
slug: /content-creation-flows/workflows-lesson-2-combining-blocks
description: >-
  Ein Workflow kann mehrere miteinander verbundene Blöcke enthalten. Das
  Ergebnis jedes Blocks bestimmt, welcher Block als Nächstes ausgeführt wird.
  So kann ein Workflow unterschiedliche Texte unterschiedlich behandeln.
---

Ein Workflow kann mehrere miteinander verbundene Blöcke enthalten. Das Ergebnis jedes Blocks bestimmt, welcher Block als Nächstes ausgeführt wird. So kann ein Workflow unterschiedliche Texte unterschiedlich behandeln.

Diese Lektion baut auf [4.11.1. Lektion 1: Erste Schritte mit Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) auf. Wenn Sie sie noch nicht gelesen haben, beginnen Sie dort: Sie behandelt Bedingungen, Aktionen und die Verarbeitung der Ergebnisse.

## Block-Ausgänge: Yes, No und Always

Jeder Block hat links einen Eingang und rechts drei Ausgänge.

![Ein Block mit seinem Eingang und den Ausgängen Yes, No und Always](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/01-block-outputs.png)

| Ausgang | Wo | Führt zum nächsten Block, wenn |
| --- | --- | --- |
| **Yes** (blau) | IF-Teil | die Bedingungen des Blocks erfüllt sind |
| **No** (orange) | IF-Teil | die Bedingungen des Blocks nicht erfüllt sind |
| **Always** (grau) | THEN-Teil | die Aktionen des Blocks ausgeführt wurden |

Um zwei Blöcke zu verbinden, ziehen Sie eine Linie vom Ausgangspunkt eines Blocks zum Eingangspunkt des nächsten. Doppelklicken Sie auf eine Linie, um eine Notiz hinzuzufügen.

## Der Beispiel-Workflow

Unser Workflow hat fünf Blöcke. Er ersetzt „cake" durch „festive cake", prüft auf ein doppeltes Wort, markiert Texte ohne „cake" und fügt dem Feiertagsgruß „Christmas" hinzu.

Die Blöcke sind so verbunden:

| Von | Ausgang | Zu |
| --- | --- | --- |
| 1. cake → festive cake | **Yes** | 2. Is festive cake true |
| 1. cake → festive cake | **No** | 3. Is cake false (Mark suspicious) |
| 2. Is festive cake true | **No** | 4. Validated test (Mark suspicious) |
| 4. Validated test | **Always** | 5. Holiday → Christmas Holiday! |

Die Ausgänge **Yes** und **Always** von Block 2 sowie die Ausgänge von Block 3 sind nicht verbunden. Was das bedeutet, zeigt Test 1 weiter unten.

## Die Blöcke im Einzelnen

### 1. cake → festive cake

Wenn der Text „cake" enthält, wird es durch „festive cake" ersetzt. Match case ist aktiviert, daher bleiben „Cake" und „CAKE" unverändert. **Yes** führt zu Block 2, **No** zu Block 3.

![Einstellungen von Block 1](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/03-block-1-settings.png)

### 2. Is festive cake true

Prüft auf ein doppeltes Wort und korrigiert es. **No** führt zu Block 4.

![Einstellungen von Block 2](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/04-block-2-settings.png)

:::note
In diesem Screenshot ist das Wort „fastive" geschrieben. Block 1 schreibt „festive", daher trifft diese Bedingung nie zu. Verwenden Sie in Ihrem eigenen Workflow `festive festive cake` und `festive festive` → `festive`.
:::

### 3. Is cake false

Ein Block ohne Bedingungen. Er markiert das Ergebnis mit der Begründung „Cake not found :(". Seine Ausgänge sind nicht verbunden.

![Einstellungen von Block 3](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/05-block-3-settings.png)

### 4. Validated test

Ebenfalls ohne Bedingungen. Er markiert das Ergebnis mit der Begründung „Checked! Please sync!". **Always** führt zu Block 5.

![Einstellungen von Block 4](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/06-block-4-settings.png)

:::note
Mark suspicious blockiert die Synchronisierung mit dem Store. Diese Begründung ist nur eine Testmarkierung, die zeigt, dass der Block ausgeführt wurde. Schreiben Sie in einem echten Workflow eine Begründung, die dem Prüfer sagt, was er kontrollieren soll.
:::

### 5. Holiday → Christmas Holiday!

Wenn der Text „Happy Holiday!" enthält, wird es durch „Happy Christmas Holiday!" ersetzt.

![Einstellungen von Block 5](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/07-block-5-settings.png)

## Einen Testtext generieren

Um den Workflow selbst auszuprobieren, verwenden Sie diesen Prompt in Ihrem Flow. Er erzeugt einen ähnlichen Text wie in dieser Lektion, der mit „Happy Holiday!" endet, sodass Block 5 etwas zum Ersetzen findet.

```text
Write a short, warm, and appealing delivery message for the product. Mention that we will deliver the cake in beautiful gift packaging, together with a personal note, to the address provided by the customer.
The first part of the text should contain approximately 80 characters and describe the cake delivery in a natural, friendly, and elegant way.

Do not use capitalization randomly. Each variation should fit naturally into the sentence and context.
The final sentence must be exactly: "Happy Holiday!"
Keep the message friendly, festive, elegant, warm, and suitable for an online cakes shop.
```

Ersetzen Sie für Test 1 „cake" im Prompt durch ein anderes Produkt, zum Beispiel „sweets", damit der Text kein „cake" enthält.

## Test 1: Text ohne „cake"

**Pfad:** Block 1 → No → Block 3 → Ende.

![Ergebnis ohne cake, markiert mit „Cake not found :("](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/08-test-1-result.png)

- Die Begründung „Cake not found :(" zeigt, dass der **No**-Zweig funktioniert hat.
- Block 3 hat keine Bedingungen, trotzdem wurde seine Aktion ausgeführt. Ein **Block ohne Bedingungen führt seine Aktionen aus**.
- „Happy Holiday!" wurde **nicht** ersetzt, obwohl der Text es enthält. Die Ausgänge von Block 3 sind nicht verbunden, daher wurde Block 5 nie erreicht. **Wenn ein Ausgang nicht verbunden ist, endet die Verarbeitung dort.**

## Test 2: Text mit „cake"

**Pfad:** Block 1 → Yes → Block 2 → No → Block 4 → Always → Block 5.

![Ergebnis mit festive cake und Happy Christmas Holiday](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/09-test-2-result.png)

- „delicious **festive cake**": Block 1 hat das Wort ersetzt und den **Yes**-Zweig genommen.
- Es gibt kein doppeltes Wort, daher hat Block 2 den **No**-Zweig genommen.
- Die Begründung „Checked! Please sync!" zeigt, dass Block 4 ausgeführt wurde.
- „Happy **Christmas** Holiday!": Block 5 wurde über **Always** erreicht und hat seine Ersetzung vorgenommen.

## Regeln zum Merken

| Regel | Was das für Sie bedeutet |
| --- | --- |
| Yes / No wählen den nächsten Block | Erstellen Sie getrennte Pfade für Texte, die eine Bedingung erfüllen, und Texte, die sie nicht erfüllen |
| Always geht nach den Aktionen weiter | Nutzen Sie es, um unabhängig vom Ergebnis des Blocks mit der nächsten Prüfung fortzufahren |
| Ein Block ohne Bedingungen führt seine Aktionen aus | Praktisch für einen letzten Schritt, zum Beispiel eine Prüfmarkierung |
| Ein nicht verbundener Ausgang beendet die Verarbeitung | Verbinden Sie jeden Pfad, der spätere Blöcke erreichen soll, sonst werden sie übersprungen |
| Mark suspicious stoppt den Workflow nicht | Spätere Blöcke werden nach einer Markierung weiterhin ausgeführt |

:::tip
Folgen Sie vor dem Speichern jedem Pfad auf der Zeichenfläche mit dem Finger: „Wenn der Text X enthält, wohin geht er als Nächstes?" Eine fehlende Linie ist der häufigste Grund dafür, dass ein Block nie ausgeführt wird.
:::
