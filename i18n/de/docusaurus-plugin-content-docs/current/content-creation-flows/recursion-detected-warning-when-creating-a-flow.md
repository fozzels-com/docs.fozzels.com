---
id: '103000313152'
title: '"Rekursion erkannt" Warnung beim Erstellen eines Flows'
sidebar_position: 26
slug: /content-creation-flows/recursion-detected-warning-when-creating-a-flow
description: Wenn Sie diese Warnung sehen, bedeutet dies, dass Sie die Variable verwenden, um Inhalte von demselben Attribut einzugeben, das der Flow zum Schreiben verwendet.
---

Wenn Sie diese Warnung sehen, bedeutet dies, dass Sie die Variable verwenden, um Inhalte von demselben Attribut einzugeben, das der Flow zum Schreiben verwendet.

Beispiel: Sie erstellen einen Flow, um das Feld "Beschreibung" (Attribut) automatisch zu aktualisieren.

Im Feld, in dem Sie den Prompt schreiben können, haben Sie denselben Tag "{Beschreibung}" als Eingabevariable verwendet.

Dies kann zwar in Ordnung sein, kann aber auch zu einem Problem führen, bei dem der Inhalt täglich überschrieben wird, wenn Sie die Option "Automatisch neu generieren, wenn sich das Produktattribut ändert" aktiviert haben.

In diesem Szenario werden neue Inhalte von Fozzels in das Feld "Beschreibung" geschrieben.

Das bedeutet aber auch, dass dieses Produkt als "geändert" gekennzeichnet wird, sodass Fozzels versucht, den Inhalt für dieses Produkt am nächsten Tag zu regenerieren – und immer wieder.

Sie könnten erwägen, die Option "Automatisch neu generieren, wenn sich das Produktattribut ändert" **auszuschalten** oder dieses Eingabefeld **aus Ihrem Prompt zu entfernen**.
