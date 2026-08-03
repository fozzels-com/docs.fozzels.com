---
id: '103000380488'
title: 4.7.3 Zulässige HTML-Tags für KI-Textgenerierung
sidebar_position: 19
slug: /content-creation-flows/allowed-html-tags-for-ai-text-generation
description: Diese Funktion ermöglicht es Ihnen, genau zu definieren, welche HTML-Tags in den von künstlicher Intelligenz generierten Inhalten verwendet und erhalten bleiben können. Diese Funktio
---

Diese Funktion ermöglicht es Ihnen, genau zu definieren, welche HTML-Tags in den von künstlicher Intelligenz generierten Inhalten verwendet und erhalten bleiben können. Diese Funktionalität ist für Attribute aktiv, bei denen die Option **„HTML zulassen"** aktiviert ist.

![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/2zl4WJfftt48X66FBs1W8zAn4rbNhhqk1A.png)

Durch die Definition dieser Liste schalten Sie mächtige Möglichkeiten frei, um Inhalte mit spezifischer Formatierung zu generieren oder Multimedia direkt in den generierten Text einzubetten.

## ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/KsO3jFsp7Ytx48uE5alhlIVzvjfJd8Trzw.png)
Wie das System Tags verarbeitet

Das System funktioniert als Sicherheitsfilter:

-   Es entfernt automatisch alle Tags, die sich **nicht in der Zulassungsliste befinden**.

-   Dies gewährleistet, dass nur notwendige und sichere Tags auf Ihrem Frontend korrekt angezeigt werden.

## Entfesseln Sie das kreative Potenzial

Die Definition zulässiger Tags bedeutet, dass Sie nicht mehr auf grundlegende Textformatierung beschränkt sind. Sie können die KI anweisen, komplexe Strukturen zu erstellen, indem Sie dynamische und visuelle Elemente direkt in Ihre Produktbeschreibung hinzufügen:

-   **Interaktive Inhalte:** Betten Sie YouTube-Videos (mit dem Tag `iframe`) direkt in die Produktbeschreibung ein.

-   **Reiche Visuals:** Integrieren Sie Bildergalerien oder Schieber mit dem Tag `img`, das in Ihre erforderliche Struktur (`div`, `section`) eingebunden ist.

-   **Verbesserte Struktur:** Erstellen Sie interaktive Elemente, z. B. Akkordeons für FAQ-Abschnitte, mit den Tags `details` und `summary` (die in der Standardliste enthalten sind) oder benutzerdefinierten Struktur-Tags.

-   **Jede Struktur:** Sie können praktisch jede HTML-Struktur generieren, die Ihr Frontend unterstützt, indem Sie einfach die erforderlichen Tags zulassen.

### 1\. Verfügbare Standard-HTML-Tags

Eine umfassende Liste von Standard-HTML-Tags ist standardmäßig verfügbar und kann sofort verwendet werden:

-   `a`, `abbr`, `acronym`, `article`, `aside`, `b`, `blockquote`, `br`, `cite`, `code`, `dd`, `details`, `div`, `dl`, `dt`, `em`, `footer`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hr`, `i`, `li`, `mark`, `ol`, `p`, `q`, `s`, `section`, `span`, `strong`, `summary`, `table`, `td`, `tr`, `u`, `ul`.

### 2\. Fügen Sie Ihre eigenen HTML-Tags hinzu

Wenn Sie Tags zum Einbetten von Video, Bildern oder einer anderen nicht-standardmäßigen Formatierung benötigen, können Sie diese zu dieser Liste hinzufügen.

**Wie man benutzerdefinierte Tags hinzufügt:**

1.  Geben Sie den Namen des Tags ein, das Sie zulassen möchten (z. B. `iframe`, `img`, `video`), in das Feld.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/17FvSVXKcc6eW4AU0v9BhkCkRR-NUtg57w.png)

2.  Drücken Sie die Eingabetaste (falls erforderlich, entfernen Sie sie, indem Sie auf die Schaltfläche „x" klicken).

3.  Klicken Sie auf die Schaltfläche **Speichern**.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/kMmnyMamV-Ef9IEE1_naDJ0llLk7bnh5YA.png)

> **Wissenswert!** Dieser Block wird verwendet, um zusätzliche, nicht-standardmäßige Tags hinzuzufügen, die für die Verwirklichung Ihrer kreativen Vision im Frontend kritisch sind. Fügen Sie nur die erforderlichen Tags hinzu, um die Codesicherheit zu gewährleisten.
