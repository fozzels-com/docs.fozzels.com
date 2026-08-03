---
id: '103000367983'
title: 4.3.2 Prompt-Erstellung & Filterung. Drag & Drop Prompt-Editor
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: Dieses Handbuch zeigt Ihnen, wie Sie das Prompt-Feld konfigurieren - das Hauptwerkzeug zur Erstellung dynamischer Anweisungen für die Produkttextgenerierung - mit verfügbaren Produktattributen, bedingter Logik und Lokalisierungseinstellungen.
---

Dieses Handbuch zeigt Ihnen, wie Sie das **Prompt-Feld** konfigurieren - das Hauptwerkzeug zur Erstellung dynamischer Anweisungen für die Produkttextgenerierung - mit verfügbaren Produktattributen, bedingter Logik und Lokalisierungseinstellungen.

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/psn6waVbTI-sOgG8K_n_-XihT1sjhb4AUg.png)
**1\. Komponenten der Prompt-Konfigurationsregisterkarte**

Die Interface-Registerkarte ist für maximale Effizienz beim Erstellen Ihrer Prompt-Logik in fünf Hauptabschnitte unterteilt:
1\. **Prompt-Feld**. Der zentrale Textbereich zum Schreiben des Prompts. Zweck - **schreiben** Sie den Text mit integrierter Attribut-/Bedingungslogik.

2\. **Attributabschnitt**. Eine Liste aller verfügbaren Produktattribute für den ausgewählten Store. Zweck - **einfügen** Sie statische Produktdaten (z. B. Produktname, SKU).

3\. **Attribute (falls ausgefüllt) Abschnitt**. Eine Liste von Bedingungen (**if-Blöcken**), die für dynamische Inhalte verwendet werden können. **Einfügen** Sie dynamische Inhaltslogik (z. B. _WENN_ Farbe ist Blau _DANN_ generieren Sie 'Nur Blau' Inhalt).

4\. Separierte **Sucheingaben**. Sie können frei **wechseln** zwischen den Attribut- und Bedingungsabschnitten.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/EDjHQgzURl0i0nmUnAyYimUlW-FvXAQNlw.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/1J6uMJo933Qd572KPGbVIQr86A9B-BBJng.png)
5\. Abschnitt "Vorlagen". Der Block **Prompt-Vorlage** enthält **Laden** (zum Importieren einer Vorlage) und **Speichern** (zum Speichern des aktuellen Prompts als Vorlage).
**2\. Das Prompt-Feld (zentrale Logik)**

Das Prompt-Feld ist der Ort, an dem Sie die Logik SCHREIBEN, die den endgültigen Text bildet.

Unterstützte Inhalte
Das Feld unterstützt eine Kombination aus Freitext und dynamischen Blöcken:

1\. **Einfügen** Sie Attribute und Bedingungen (per Klick oder Drag & Drop).

2\. **Bearbeiten** Sie Freitext beliebiger Komplexität.

3\. **Verwenden** Sie Standard-Formatierung und HTML-Tags (z. B. `<h1>`, `<ul>`, `<strong>`).

4\. **Kombinieren** Sie regulären Text mit dynamischen Blöcken nahtlos.
Interaktion mit Elementen

1\. **Einfügen** Sie Elemente in den Text durch **KLICKEN** oder durch **ZIEHEN & ABLEGEN** an der Cursorposition.

2\. **Löschen** Sie ein Element durch Drücken von **Rücktaste** oder **KLICKEN** auf das **"x"** des Elements direkt im Feld.

3\. **Wiederverwenden** Sie dasselbe Attribut oder dieselbe Bedingung mehrmals an verschiedenen Stellen im Prompt.

Element-Status

Inaktiv (nicht im Prompt) - Grau
Aktives Attribut - Grün
Aktive Bedingung (if-Block) - Gelb-Orange

**3\. Datendichte und Lokalisierung**

#### Datendichte Prozentsatz
Jedes Attribut ist mit einem **Datendichte-Prozentsatz verknüpft** - der Prozentsatz der Datenverfügbarkeit in der gesamten Integration.
**Fahren Sie mit dem Mauszeiger über** das Attribut, um seinen Datendichte-Prozentsatz in der QuickInfo anzuzeigen.
**Verwenden Sie** Attribute mit hoher Dichte (näher an 100%), um eine erfolgreiche Inhaltsgenerierung über die meisten Ihrer Produkte hinweg zu gewährleisten.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/x-1OzeZAjTMnJ0UwMl8MW3nuBRADUaDtbA.png)
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/qq-rfN44U1KguTDHRUx4nMlmBYUMPgTCzw.png)

Attribut-Lokalisierung
1\. **WÄHLEN Sie** den gewünschten Store, um die lokalisierten Attributnamen in den Listen anzuzeigen (z. B. `product_name` für en-US, `product_naam` für nl-NL).

2\. Falls ein Attributname für eine Sprachversion nicht verfügbar ist, wird der Standard-Store-Name (mit einem Stern `*` gekennzeichnet) verwendet.

3\. Sie können den lokalisierten Namen in den Integrationseinstellungen → Attribut → Gebietsschema **ändern**.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/bbfwJyznmpbxED-ZSOB2WHgKynrMD8sVHA.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/KVJCJb6ASEbmnAJE5T92lf8pj73VAn6hjA.png)

Überprüfung und Speicherung

1\. Das **Prompt-Feld** ist beim Erstellen eines neuen Flows anfangs leer.

2\. Klicken Sie auf **Speichern & Vorschau**, um für jedes Produkt in der Produkttabelle einen eindeutigen Prompt zu generieren und anzuzeigen, wobei verfügbare Attributwerte und angewendete Bedingungen berücksichtigt werden.
3\. **Hinweis:** Obwohl das Hinzufügen von Attributen und Bedingungen nicht obligatorisch ist, wird es dringend **empfohlen**, um Texte für mehrere Produkte zu generieren, da dies hilft, Inhalte zu personalisieren und die Relevanz zu verbessern.
Ratschläge zum Verfassen hochwertiger, effektiver Prompts finden Sie im Handbuch [hier](/content-creation-flows/writing-effective-prompts-recommendations/).
