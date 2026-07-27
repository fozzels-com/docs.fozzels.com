---
id: '103000367979'
title: >-
  4.2.2. KI-Konfiguration. Bildoptimierung (Größenänderung): Begründung und
  Implementierung.
sidebar_position: 7
slug: >-
  /content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation
description: >-
  Die Funktion zur Bildgrößenänderung optimiert große Bilder automatisch, um die
  technischen Anforderungen des KI-Generierungssystems zu erfüllen. Sie ist
  standardmäßig in a
---

Die Funktion **Bildgröße ändern** optimiert große Bilder automatisch, um die technischen Anforderungen des KI-Generierungssystems zu erfüllen. Sie ist in allen neuen und bestehenden Flows standardmäßig aktiviert, um Generierungsfehler zu verhindern und die Eingabe-Token-Kosten zu reduzieren.

**1\. So verwalten Sie die Funktion zur Bildgrößenänderung**

 Die Funktion wird einzeln für jeden Flow im Schritt „KI-Konfiguration" verwaltet.

1.Gehen Sie zum Bearbeitungsbildschirm für einen Ihrer Flows.

2\. Navigieren Sie zu **Schritt 2: KI-Konfiguration**.

3\. Scrollen Sie nach unten zum Abschnitt **Bildgröße ändern**.

4\. Verwalten Sie die Funktion mit dem Kontrollkästchen **"Bildgrößenänderung aktivieren"**.

   ![](/img/kb/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/ZDcGWszXAjy6POiHs75NMe0FsBeIK14pfg.png)

    Wann zu verwenden:
**Aktivieren (Standard):** Empfohlen für alle Flows, in denen Sie Produktbilder für KI-Analyse oder Bildgenerierung verwenden.
Dies garantiert Generierungserfolg und reduziert Token-Kosten.
**Deaktivieren:** Wenn Sie nicht planen, eine Bildanalyse oder -generierung in diesem spezifischen Flow zu verwenden. _Bitte beachten Sie: Das Deaktivieren kann zu einer Erhöhung der Inhaltsgen erierungsfehler führen, wenn Sie Bilder hochladen, die die Limits überschreiten._

**2\. Technische Details und Kostenverfolgung**

Der Größenänderungsmechanismus wird nur aktiviert, wenn ein Bild spezifische technische Kriterien überschreitet.

    Aktivierungskriterien
Der Bildgrößenänderungsmechanismus wird aktiviert, wenn _beide_ Bedingungen erfüllt sind:

1\. Dateigröße **überschreitet 2 MB** (Megabyte);

2\. **UND** die Breite oder Höhe des Bildes **überschreitet 2048 Pixel**.

Wo die Funktion gilt

Die Funktion „Bildgröße ändern" funktioniert für zwei Hauptanwendungsfälle:

        1. Bildverwendung (Analyse): Bilder, die Sie zur KI-Analyse in Ihren Flows hinzufügen.
        2. Bildfluss (Generierung): Bilder, die zusammen mit dem Prompt für neue Inhaltsgen erierung gesendet werden.

Kosten- und Ausgabenverfolgung

1\. Die Kosten für die Größenänderung eines einzelnen Bildes betragen **0,0025 € pro Bild**.

2\. Diese Gebühr wird **nur berechnet**, wenn die Funktion _tatsächlich aktiviert_ wurde (d. h. das Bild erfüllte die technischen Kriterien und wurde in der Größe geändert).

3\. Sie können diese Ausgaben auf der Seite **Transaktionen** Ihres Kontos nachverfolgen.

## 4\. Die Nutzung ist auch in Ihrer täglichen E-Mail „Ihr Fozzels-Inhalts-Update" enthalten.

**3\. Hauptvorteile**

Die aktive Funktion „Bildgröße ändern" ist ein Schlüsselelement für Zuverlässigkeit und Ersparnis:

1\. Verhindert fehlgeschlagene Generierungen: Sie vermeiden garantiert **Fehler** im Zusammenhang mit großen Bildgrößen und sparen Zeit.

2\. Reduzierte Eingabe-Token-Kosten: Optimierte, kleinere Bilder benötigen **weniger Eingabe-Token** für die Verarbeitung durch das KI-Modell, wodurch die **Gesamtkosten** der Inhaltsgen erierung **reduziert** werden.

3\. Spart Ihnen Credits: Durch Vermeidung fehlgeschlagener Generierungsversuche aufgrund großer Dateien zahlen Sie nur für erfolgreich erstellte Inhalte.

4\. Automatische Herunterskalierung: Das System führt die erforderliche Optimierung **automatisch** im Hintergrund durch, sodass Sie sich auf die Inhaltsgen erierung konzentrieren können.
