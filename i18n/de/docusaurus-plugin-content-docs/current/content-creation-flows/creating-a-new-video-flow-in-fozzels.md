---
id: '103000370066'
title: 4.6.1 Erstellen eines neuen Video-Flows in Fozzels
sidebar_position: 15
slug: /content-creation-flows/creating-a-new-video-flow-in-fozzels
description: >-
  Die Video-Flow-Funktion ist ein spezialisierter Content Flow, der der
  Generierung von kurzen, hochfidelity Video-Assets für Produktpräsentationen
  gewidmet ist. Erstellen eines Video F
---

Die Video-Flow-Funktion ist ein spezialisierter Content Flow, der der Generierung von kurzen, hochfidelity Video-Assets für Produktpräsentationen gewidmet ist. Das Erstellen eines Video-Flows umfasst drei Schlüsselphasen: grundlegende Konfiguration (Modellauswahl), Asset-Auswahl (Produkt und Bild) und präzise Prompt-Entwicklung. Aufgrund der hohen Rechenkosten der Videogenerierung ist Genauigkeit in der Einrichtung von größter Bedeutung für erfolgreiche Ausführung und Kostenkontrolle.

1.  Initiierung des Video-Flows

1.1 Zugriff und Shop-Auswahl Um zu beginnen, navigieren Sie zur Registerkarte „Video-Flows" in der Hauptkopfzeile von Fozzels. Auf der Seite „Video-Flows" müssen Sie zuerst den Shop im Dropdown-Menü „Shop wählen" auswählen, um sicherzustellen, dass das generierte Video mit der richtigen Produktkataloginstanz verknüpft ist. Klicken Sie auf die Schaltfläche „Neuer Video-Flow", um fortzufahren.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/dhsYmY2Ex4slpTZPdudcNOVCe9nEhoPHyg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/l9D27YTXULoQgwNoai2p9a3wY9wBuD0rxA.png)

1.2 Grundlegende Konfiguration (Schritt 1) Sie werden zum Konfigurationsbildschirm weitergeleitet, wo Sie die Identität des Flows und das Kernmodul definieren.

1.2.1 **Benennen** Sie den Flow: Geben Sie einen klaren, beschreibenden Namen im Feld „**Name**" ein, um eine einfache Identifizierung in Ihrer Flow-Liste zu ermöglichen.

1.2.2 **Wählen Sie** KI-Modell: Das System wird standardmäßig auf den Google | Gemini-Anbieter für die Videogenerierung eingestellt. Sie müssen das spezialisierte Videogenerierungsmodell „Gemini Veo 3" auswählen.

Dieses Modell ist darauf ausgelegt, hochwertige 720p-Videos mit einer Dauer von bis zu 8 Sekunden zu produzieren. Es unterstützt die Bildeingabe, die für die Verankerung des Videos in einem spezifischen Produkt-Asset unerlässlich ist.

1.2.3 **Definieren Sie** Flow-Art: Wählen Sie im Abschnitt „**Art**" die Art der erforderlichen Videoausgabe. Wählen Sie „Allgemein | Einzelnes Video".

Diese Einstellung bestätigt, dass das System visuelle Assets und Produktpräsentationen generiert und kennzeichnet den Block mit einem grünen Häkchen.

1.2.4 **Klicken Sie** auf die Schaltfläche „**Absenden**", um diese grundlegenden Einstellungen zu speichern und zur nächsten Phase zu wechseln.

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ocwd1m8bDjLUbvNWQQ15jP7-oy92bMKZxw.png)

2.  Konfigurieren von Assets und Prompt-Entwicklung

Nach der Grundkonfiguration werden Sie zur Seite zur Definitions von Assets und Prompts geleitet.

2.1 Produkt- und Bildauswahl Produktauswahl:
Wählen Sie auf der linken Seite des Bildschirms **das spezifische Produkt** aus der Katalogliste aus, für das das Video generiert wird.

Bildauswahl: Der zentrale Block zeigt das ausgewählte Produkt und seine Bildergalerie an. Sie müssen **das am meisten geeignete Bild** aus der Galerie auswählen, da dieser visuelle Anker den KI-Videogenerierungsprozess leiten wird.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/y1tWTQrZy2gjdG9yduMpGv4A3xQevUN6-g.png)

2.2 Prompt-Entwicklung (Der kritische Schritt) Der Prompt ist die ausschließliche Eingabe, die den Inhalt, Stil und die Erzählung des Videos steuert.

Eingabeanforderung: Das Feld „Prompt" darf nicht leer gelassen werden. Es muss detaillierte, beschreibende Anweisungen enthalten, die das gewünschte Videoergebnis beschreiben (z. B. Einstellung, Stimmung, Aktion, Kamerabewegungen).
**Lesen Sie** den nächsten Abschnitt, **[Tipps zum Erstellen eines effektiven Prompts + Beispiele](/content-creation-flows/tips-for-creating-an-effective-prompt-examples/)**, bevor Sie Ihren Prompt schreiben, um optimale Videoqualität sicherzustellen.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ZGiO6GR7CNBTRPTFYBz1RRmNNRTwD_WW6A.png)
Prompt-Template-Verwaltung: Um Konsistenz und Effizienz zu fördern, **verwenden Sie** die Schaltfläche „Speichern" über dem Prompt-Feld, um Ihre Anweisung als wiederverwendbare Vorlage zu speichern. Dies spart Zeit beim Erstellen nachfolgender Flows.

3.  Aktivierung, Ausführung und Verwaltung

Nachdem Sie Produkt, Bild und Prompt definiert haben, ist der Flow bereit zur Ausführung.

3.1 Aktivieren und Finalisieren des Flows Aktivieren Sie den Flow:
3.1.1 Um den Generierungsprozess sofort einzuleiten, **markieren Sie** das Kontrollkästchen „**Aktiver Flow**" neben dem Flow-Namen. Wenn nicht aktiviert, bleibt der Flow im Entwurfsmodus.
3.1.2 **Klicken Sie** auf die Hauptschaltfläche „**Speichern**" unten auf der Seite. Das System speichert alle Konfigurationen und leitet Sie zur Seite **„Batch-Liste"** weiter, die als Ausführungsmonitor fungiert.

3.2 Starten der Videogenerierung aus der Batch-Liste Suchen Sie auf der Seite „Batch-Liste" das Produkt, das Sie gerade konfiguriert haben.
Manuelle Bestätigung: Um die Anfrage an die KI zu senden, müssen Sie manuell **den Toggle** in der Spalte „**Bestätigt**" in die Position „Ein" wechseln.
Generierung initiieren: Klicken Sie abschließend auf das Symbol neben dem Toggle. Nur diese Aktion sendet die bestätigte Anfrage an das KI-Modul, um die Videowiedergabe zu starten. Das System wird dann den Generierungsstatus nachverfolgen.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/4M5pPg3JaDfvqdgAQ_109lMCWqpJpbt8gQ.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/1NwPEnPYEC3N6fbBX63dOizDPR3J6G4EVA.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/LJon-h82hu4do0c1tI3oVznHeXvSifWXjg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/YwJ6UJ7VzaDPedpbnlZBIqzyNhO1yIuz6g.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/Fb0QFQE1i1hJoK8U4rpyysLV_UwftKGWYQ.png)

3.3 Zugriff auf das generierte Video Nach Abschluss wird die endgültige Videodatei zur Anzeige und zum Herunterladen direkt aus der Batch-Liste bereitgestellt. Das Video-Asset wird auch automatisch in Ihrem persönlichen Medien-Repository gespeichert, auf das Sie unter: user/settings/generated media zugreifen können.
