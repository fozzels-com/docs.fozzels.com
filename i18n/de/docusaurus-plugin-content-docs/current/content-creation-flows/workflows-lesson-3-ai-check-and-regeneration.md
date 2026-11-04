---
title: '4.11.3. Workflows. Lektion 3: Automatische KI-Prüfung und Neugenerierung'
sidebar_position: 32
slug: /content-creation-flows/workflows-lesson-3-ai-check-and-regeneration
description: >-
  Lassen Sie jeden generierten Text von KI prüfen, bevor er Ihren Store
  erreicht. Ist ein Text nicht brauchbar, teilt Fozzels dem Modell mit, was
  falsch war, und generiert ihn automatisch neu.
---

Lassen Sie jeden generierten Text von KI prüfen, bevor er Ihren Store erreicht. Ist ein Text nicht brauchbar, teilt Fozzels dem Modell mit, was falsch war, und generiert ihn automatisch neu.

Manchmal schreibt ein KI-Modell etwas, das Sie nicht verwenden können: einen Platzhalter, einen Kommentar wie „Hier ist Ihre Beschreibung", Text in der falschen Sprache oder über das falsche Produkt. Mit einer KI-Prüfung in Ihrem Workflow findet Fozzels diese Texte für Sie und generiert sie automatisch neu. So prüfen Sie nur noch, was wirklich einen Menschen braucht.

Diese Lektion baut auf [4.11.1. Lektion 1: Erste Schritte mit Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) und [4.11.2. Lektion 2: Blöcke in einem Workflow kombinieren](/content-creation-flows/workflows-lesson-2-combining-blocks/) auf. Wenn Sie sie noch nicht gelesen haben, beginnen Sie dort.

## So funktioniert es in Kürze

1. Ihr Flow generiert wie gewohnt einen Text.
2. Ein zweites KI-Modell liest den Text und prüft, ob er brauchbar ist.
3. Besteht der Text die Prüfung, ändert sich nichts: Er geht weiter zur Prüfung oder Synchronisierung, wie in Ihrem Flow eingestellt.
4. Besteht der Text die Prüfung nicht, generiert Fozzels ihn neu und teilt dem Modell mit, was falsch war („Feedback").
5. Der neue Text wird erneut geprüft. Das wiederholt sich, bis der Text die Prüfung besteht oder die maximale Anzahl an Neugenerierungen erreicht ist.
6. Besteht der Text auch nach dem letzten Versuch nicht, wird er mit der Begründung als verdächtig markiert, damit Sie ihn selbst korrigieren können.

## Die zwei neuen Blöcke

| Block | Typ | Was er tut |
| --- | --- | --- |
| **AI validation fails** | Bedingung | Lässt ein KI-Modell den generierten Text prüfen. **Yes** = der Text hat ein Problem, **No** = der Text ist in Ordnung. |
| **Regenerate with feedback** | Aktion | Generiert den Text im Hintergrund neu und schickt die gefundenen Probleme an das Modell, damit es sie vermeiden kann. |

Verwenden Sie beide zusammen in einem Block: die Bedingung **AI validation fails** im Bereich **Conditions** und die Aktion **Regenerate with feedback** im Bereich **Actions**.

## Worauf die KI-Prüfung achtet

Die Prüfung stuft einen Text als nicht brauchbar ein, wenn:

| Problem | Beispiel |
| --- | --- |
| Es ist kein echter Inhalt: Statt des erwarteten Texts hat die KI etwas für einen anderen Zweck geliefert, oder es gibt eine andere eindeutige Abweichung | Eine Ablehnung, eine Rückfrage, „lorem ipsum", „[Product name]", ein leerer Template-Tag |
| Die KI redet | „Hier ist die Beschreibung:", „Sagen Sie Bescheid, wenn Sie Änderungen brauchen", sichtbare Überlegungen |
| Er passt nicht zum Attribut | Eine vollständige Beschreibung als Titel |
| Er wiederholt den Attributnamen | „Meta description: ..." |
| Er ist in der falschen Sprache | Englischer Text in einer deutschen Store View |
| Er handelt von einem anderen Produkt | Ein Text über Ohrhörer für eine Ohrhörer-Hülle |
| Er bricht mitten im Satz ab | Der Text ist abgeschnitten |

Die Prüfung bewertet **nicht** Stil, Ton, Länge oder Formatierung, und sie schreibt Ihren Text nie um. Für Längenbegrenzungen oder Wortersetzungen verwenden Sie die Blöcke aus Lektion 1 und 2.

:::note
Die Prüfung sieht das Produkt, den generierten Text, den bisherigen Wert des Attributs und die Sprache Ihrer Store View. Ihren Prompt sieht sie **nicht**. Hatte das Attribut also vorher einen normalen Titel und der neue Wert ist „lorem ipsum" (auch wenn Ihr Prompt genau das verlangt hat), gibt die Prüfung das Feedback, dass das Ergebnis nicht wie ein normaler Titel aussieht.
:::

## Schritt 1. Den Workflow erstellen

1. Öffnen Sie im Seitenmenü unter **AI Flows** den Punkt **Workflows**.
2. Klicken Sie auf **Create workflow**.
3. Geben Sie dem Workflow einen eindeutigen Namen, zum Beispiel „AI check".
4. Fügen Sie einen Block hinzu und geben Sie ihm einen Titel, zum Beispiel „AI check validation".

![Der Punkt Workflows im Menü AI Flows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/01-workflows-menu.png)

![Die Schaltfläche Create workflow auf der Seite Workflows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/02-create-workflow-button.png)

## Schritt 2. Den Block einrichten

1. Klicken Sie im Bereich **Conditions** auf **Add condition** und wählen Sie **AI validation fails**. Diese Bedingung hat keine Einstellungen.
2. Klicken Sie im Bereich **Actions** auf **Add action** und wählen Sie im Feld **Action** die Option **Regenerate with feedback**.
3. Legen Sie **Maximum regenerations** fest: wie oft Fozzels den Text neu generieren darf. Der Standardwert ist 2, das Maximum ist 3.
4. Klicken Sie auf **Apply**.

![Auswahl der Aktion Regenerate with feedback im Fenster Edit block](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/03-regenerate-with-feedback-action.png)

![Das Feld Maximum regenerations und die Schaltfläche Apply](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/04-maximum-regenerations.png)

:::tip
Setzen Sie **Maximum regenerations** zum Testen auf 1. So sehen Sie das Endergebnis schneller und geben weniger aus.
:::

## Schritt 3. Den Workflow einem Flow zuweisen

1. Öffnen Sie Ihren Content-Flow.
2. Wählen Sie im Feld **Workflows** Ihren Workflow aus.
3. **Speichern Sie den Flow.** Der Workflow wird erst ausgeführt, nachdem der Flow gespeichert wurde.

![Auswahl des Workflows im Feld Workflows eines Content-Flows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/05-assign-workflow-to-flow.png)

Hat Ihr Flow noch weitere Workflows (zum Beispiel „Replace text" oder „Truncate"), können Sie sie kombinieren. Workflows werden in der Reihenfolge ausgeführt, in der sie zugewiesen sind.

## Schritt 4. Das Ergebnis prüfen

Generieren Sie Texte in Ihrem Flow. Für jedes Produkt passiert eines von drei Dingen:

**Der Text besteht die Prüfung beim ersten Mal.** Es passiert nichts Besonderes. Der Text geht wie gewohnt weiter.

**Der Text besteht nicht, dann aber nach einer Neugenerierung.** Während Fozzels ihn neu generiert, wird der Text als verdächtig angezeigt, mit der Begründung „Did not pass AI validation and is being generated again: ...". Das dauert einige Sekunden bis Minuten. Besteht der neue Text die Prüfung, wird die Markierung entfernt und der neue Text ersetzt den alten.

**Der Text besteht jedes Mal nicht.** Nach der letzten Neugenerierung bleibt der Text mit der Begründung als verdächtig markiert, zum Beispiel: „Did not pass AI validation after 2 generation(s): The Title value "All-Mountain Snowboard" is in English, not German as required." Lesen Sie die Begründung und bearbeiten Sie dann den Text selbst oder ändern Sie den Prompt und generieren Sie erneut.

Jeden Versuch können Sie in der [Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/) des Produkts verfolgen: Jede Generierung wird als eigene Revision angezeigt.

:::note
Die Begründung bleibt nur erhalten, wenn der Text am Ende nicht besteht. Besteht eine Neugenerierung, wird die Begründung entfernt, und der Verlauf zeigt die frühere Version ohne Begründung.
:::

## Weitere Meldungen, die Sie sehen können

| Meldung | Was sie bedeutet | Was zu tun ist |
| --- | --- | --- |
| AI validation could not check this value, so it is held for review. | Die Prüfung konnte nicht ausgeführt werden, zum Beispiel wegen eines vorübergehenden Fehlers. | Prüfen Sie den Text selbst. |
| AI validation stopped because your balance is too low, so this value was not validated. | Ihr Guthaben ist aufgebraucht. | Laden Sie Ihr Guthaben auf und generieren Sie erneut. |
| Did not pass AI validation. It was not generated again because the flow, its workflows or the item changed in the meantime. | Etwas hat sich geändert, während der Text auf eine Neugenerierung gewartet hat. | Prüfen Sie den Text oder generieren Sie ihn erneut. |

## Kosten

- Jede KI-Prüfung ist ein kleiner kostenpflichtiger Aufruf. Sie kostet viel weniger als eine Generierung.
- Jede Neugenerierung kostet so viel wie eine normale Generierung.
- Ein Produkt kann also höchstens kosten: 1 Generierung + die maximale Anzahl an Neugenerierungen + eine Prüfung pro Versuch.

Wählen Sie die maximale Anzahl an Neugenerierungen mit Blick darauf. Für die meisten Flows reichen 1 oder 2.

## Regeln zum Merken

| Regel | Was das für Sie bedeutet |
| --- | --- |
| Verwenden Sie beide Blöcke zusammen | AI validation fails findet das Problem, Regenerate with feedback behebt es |
| Die Prüfung sieht Ihren Prompt nicht | Sie beurteilt, ob der Text in Ihrem Store brauchbar ist, nicht ob er jede Anweisung befolgt |
| Stil, Ton und Länge werden nicht geprüft | Verwenden Sie dafür Replace text, Truncate oder Mark suspicious |
| Maximal 3 Neugenerierungen | Danach geht der Text als verdächtig an Sie |
| Jede Prüfung und jede Neugenerierung wird berechnet | Halten Sie das Maximum niedrig |
| Speichern Sie den Flow, nachdem Sie den Workflow zugewiesen haben | Sonst wird der Workflow nicht ausgeführt |

:::tip
Testen Sie den Workflow zuerst mit 2–3 Produkten. Prüfen Sie den Verlauf und die Begründungen und schalten Sie ihn dann für den ganzen Flow ein.
:::

## Behalten Sie die Kontrolle über Ihre Inhalte

Mit einer KI-Prüfung in Ihren Workflows wird jeder generierte Text geprüft, bevor er Ihren Store erreicht, und unbrauchbare Texte werden automatisch korrigiert. Sie verwenden Ihre Zeit nur für die Texte, die Sie wirklich brauchen, und Fozzels kümmert sich um den Rest. Übernehmen Sie mit Fozzels die volle Kontrolle über Ihre Inhalte.

## Brauchen Sie Hilfe bei der Einrichtung?

Wenn Sie Hilfe beim Einrichten eigener Workflows brauchen, wenden Sie sich an Ihren Ansprechpartner oder an den Fozzels-Support.
