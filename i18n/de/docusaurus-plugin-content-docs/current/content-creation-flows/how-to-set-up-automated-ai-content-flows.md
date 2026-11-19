---
id: '103000408983'
title: 4.1.2.a Automatisierte KI-Content-Flows einrichten
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  So generiert und synchronisiert ein Content Flow Produktinhalte automatisch:
  den Flow vor dem Start prüfen, im Schritt Launch Tageslimit, Freigabe und
  Aktualisierungen festlegen und den Flow starten.
keywords:
- Inhaltsfluss
- Content-Flow
---

Ein automatisierter Content Flow generiert jeden Tag im Hintergrund Produktinhalte und sendet sie an Ihren Shop. Sie müssen die Aufgaben nicht selbst starten.

Die Automatisierung legen Sie in Schritt 6 eines Content Flows fest, **Launch**. Eine Beschreibung aller sechs Schritte finden Sie in [4.1.2. Einen Content Flow erstellen: Anleitung in sechs Schritten](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

## Schritt 1: Den Flow vor dem Start prüfen

Machen Sie diese drei Prüfungen, bevor Sie den Flow starten. Sie verhindern Fehler.

1. **Prüfen Sie die Produktauswahl.** Stellen Sie in Schritt 2, **What and with what?**, sicher, dass die Auswahl nur die Produkte enthält, die Sie verarbeiten möchten.
2. **Testen Sie den Prompt.** Generieren Sie in Schritt 5, **Test**, Texte für einige echte Produkte. Stellen Sie sicher, dass die Texte und die Scores stimmen.
3. **Verhindern Sie Rekursion.** Nutzen Sie das Feld, in das der Flow schreibt, nicht als Quelle im Prompt. Nutzen Sie zum Beispiel `product_description` nicht als Input für eine neue `product_description`. Sonst kann Fozzels den Text immer wieder neu generieren.

## Schritt 2: Die Automatisierung im Schritt Launch festlegen

Beantworten Sie in Schritt 6, **Launch**, drei Fragen:

1. **How many products per day?** Wählen Sie 10, 25, 50 oder 100, oder geben Sie Ihre eigene Zahl ein. Das Limit hält die Kosten und die Prüfarbeit klein. Wenn Fozzels die aktuelle Auswahl abgeschlossen hat, nimmt der Flow automatisch neue Produkte, die zur Auswahl passen.
2. **What happens with a new text?**
    - **I approve every text first** (empfohlen): Neue Texte kommen in Ihre Prüfliste. Fozzels sendet nichts an Ihren Shop, bevor Sie es freigeben.
    - **Straight to my shop**: Fozzels veröffentlicht die Texte automatisch. Sie können sie trotzdem bearbeiten oder zur vorherigen Version zurückkehren. Texte, die Fozzels als verdächtig markiert, warten immer auf Ihre Prüfung.
3. **If a product changes later?** Schalten Sie den Schalter ein, damit Fozzels automatisch einen neuen Text schreibt, wenn sich ein Attribut im Shop ändert, das der Prompt nutzt. Zum Beispiel die Farbe oder das Material. Wenn der Schalter aus ist, schreibt Fozzels für ein Produkt nur einmal einen Text.

Unter **Advanced settings** können Sie außerdem:

- den Cooldown festlegen, der verhindert, dass andere Flows denselben Inhalt erneut generieren: **Use default**, **Override** oder **Turn off**. Weitere Informationen finden Sie in [4.4.1 Verhinderung der doppelten Inhaltsgenerierung](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).
- auf **Connect workflow** klicken, um eine Aktion hinzuzufügen, die nach jedem Text läuft, zum Beispiel eine Übersetzung.

## Schritt 3: Den Flow starten

1. Klicken Sie auf **Launch flow**.

    Fozzels zeigt die Meldung „Your flow is running“. Der Flow verarbeitet jeden Tag Produkte bis zum Tageslimit, bis er alle Produkte der Auswahl abgeschlossen hat.

2. Um die Generierung sofort zu starten, öffnen Sie die Flow-Seite, klicken Sie auf das Menü **…** und dann auf **Run Now**. Fozzels startet sofort, auch wenn der Flow sein Tageslimit für heute schon erreicht hat.

Um die Einrichtung später fortzusetzen, klicken Sie auf **Save as draft** statt auf **Launch flow**.

## Regeln und Empfehlungen

- **Der Flow muss aktiv sein.** Fozzels führt nur aktive Flows aus. Wenn Sie einen Flow stoppen, stoppt Fozzels alle geplanten Durchläufe, bis Sie den Flow wieder starten.
- **Sie können einen aktiven Flow ändern.** Ihre Änderungen gelten für alle neuen Texte. Fozzels ändert die Texte nicht, die es schon generiert hat, außer Sie generieren sie neu.
- **Neue Produkte kommen automatisch dazu.** Nach jeder Katalog-Aktualisierung vergleicht Fozzels die Produkte in Ihrem Shop mit der Auswahl des Flows. Neue Produkte, die zur Auswahl passen, kommen automatisch in den Flow. Zum Beispiel 20 neue Produkte in einer Kategorie.

## Verwandte Artikel

- [4.1.2. Einen Content Flow erstellen: Anleitung in sechs Schritten](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.7.4 Verdächtige Wörter & Ausdrücke: Fortgeschrittene Inhaltsqualitätskontrolle](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)
- [3.5. Rekursionserkennung: Verhinderung unendlicher Inhaltsgenerierung](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)
- [4.4.1 Verhinderung der doppelten Inhaltsgenerierung](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)
- [4.7.3 Zulässige HTML-Tags für KI-Textgenerierung](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
