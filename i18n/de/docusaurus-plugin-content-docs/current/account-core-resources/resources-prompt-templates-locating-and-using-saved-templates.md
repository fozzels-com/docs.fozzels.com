---
id: '103000367846'
title: '1.5. Ressourcen. Prompt-Vorlagen: Suchen und Verwenden gespeicherter Vorlagen.'
sidebar_position: 8
slug: /account-core-resources/resources-prompt-templates-locating-and-using-saved-templates
description: Prompt-Vorlagen sind wiederverwendbare, vorkonfigurierte Textmodelle, die als Eingabe für die KI zum Generieren bestimmter Arten von Produktinhalten verwendet werden. Diese Vorlagen sind
keywords:
- Eingabeaufforderung
- Anweisung
- Arbeitsablauf
- Ablauf
---

Prompt-Vorlagen sind wiederverwendbare, vorkonfigurierte Textmodelle, die als Eingabe für die KI zum Generieren bestimmter Arten von Produktinhalten verwendet werden. Diese Vorlagen werden unabhängig von den Content-Generierungs-Workflows konfiguriert und bilden einen Kernbestandteil der Automatisierungslogik. Sie werden typischerweise zum Generieren von Produktbeschreibungen, Meta-Titeln oder Meta-Beschreibungen verwendet.

Um den Verwaltungsbereich zu öffnen, navigieren Sie zu **Einstellungen → Prompt-Vorlagen**.

Template-Verwaltungstabelle

Die Haupttabelle bietet einen Überblick über alle erstellten Vorlagen.
Jeder Eintrag enthält: die eindeutige Kennung (ID), die Art der Vorlagenregel (Kind, derzeit nur Produktattribut verfügbar), das Produktattribut, mit dem der Prompt verknüpft ist (Attribut, z. B. Beschreibungen, Meta-Titel), den Namen der Vorlage (Name), den tatsächlichen Prompt-Text und ein Shared-Symbol, das anzeigt, ob die Vorlage für andere Benutzer in Ihrem Projekt sichtbar und freigegeben ist.

Verfügbare Aktionen sind: Anzeigen, Bearbeiten und Löschen.
![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/5LRXIMOwIb-G8vgFQIGjxXsovlESPjZRYA.png)

Vorlagen lokalisieren und filtern

Sie können schnell spezifische Vorlagen mithilfe des **Suchfelds** in der oberen rechten Ecke finden.
Darüber hinaus sind die Spalten ID, Kind, Attribut und Name sortierbar.
Durch Klicken auf eine Spaltenüberschrift wechselt die Sortierreihenfolge (aufsteigend oder absteigend).
Verwenden Sie die Paginierungssteuerelemente am unteren Rand der Tabelle, um durch mehrere Seiten zu navigieren, wenn Ihre Vorlagenliste umfangreich ist.

Anzeigen des vollständigen Prompt-Inhalts

Wenn Sie auf eine beliebige Zelle in der Spalte **Prompt** klicken, wird ein modales Fenster geöffnet, das den vollständigen, detaillierten Text des Prompts anzeigt. Dieses Modal enthält:

-   Die Schaltfläche „HTML anzeigen", die die Vorschau des Prompt-Texts mit angewendeter HTML-Formatierung umschaltet.

-   Die Schaltfläche „In die Zwischenablage kopieren", die den vollständigen Prompt-Text zum externen Verwenden oder Bearbeiten kopiert.

-   Die Schaltfläche „Schließen", die das modale Fenster schließt.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/_NS3hQVxBRRo9EBlkjZjD9wrjEloxWjA3A.png)

Erstellen einer neuen Prompt-Vorlage

Um eine neue Vorlage zu erstellen, klicken Sie oben auf der Seite auf die Schaltfläche **Neue Prompt-Vorlage**. Dies öffnet ein modales Fenster mit den erforderlichen Formularfeldern:

1.  **Attribut** (Erforderlich): Wählen Sie das spezifische Produktinhaltsfeld aus (z. B. Beschreibung, Meta-Titel), das dieser Prompt ausfüllen soll. Dies verknüpft den Prompt mit dem korrekten Zielinhaltsfeld.

2.  **Name** (Erforderlich): Geben Sie einen klaren, beschreibenden Namen ein. Best Practice ist, die Sprache und den Zweck einzubeziehen (z. B. DE: Kurzbeschreibung für Schuhe) für einfache Identifizierung.

3.  **Kind** (Erforderlich): Wählen Sie die Regelart aus. Derzeit ist nur Produktattribut verfügbar.

4.  **Vorlage** (Erforderlich): Geben Sie hier den Kern-Prompt-Inhalt ein. Dieser Text bildet zusammen mit dynamischen Variablen (z. B. $brand, if $color) die an die KI gesendete Anweisung zur Generierung.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/MqPK3HDwXl7cBuruSGQhTcI2GMYLzXfHOQ.png)

Prompt-Logik und Best Practices

-   **Dynamische Variablen**: Prompt-Text sollte bedingte Logik und dynamische Variablen (z. B. if-Tags, {{vendor}}) verwenden, um produktspezifische Daten zu erfassen und das Hardcodieren zu vermeiden.

-   **Styling**: Stellen Sie sicher, dass die Sprach- und Stilanforderungen (z. B. Ton, Verwendung von Aufzählungslisten, HTML-Format) Ihrem Anwendungsfall entsprechen.

-   **Inhaltssicherheit**: Der Prompt muss gut geformt und respektvoll sein, um eine mögliche Ablehnung durch den KI-Service (OpenAI) zu verhindern.
