---
id: '103000367978'
title: 4.2.1.  KI-Konfiguration. Auswahl von KI-Modellen und optionalen Funktionen.
sidebar_position: 6
slug: /content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features
description: Der Schritt der KI-Konfiguration (Schritt 2 in der Flow-Änderung) ist die kritischste Phase zur Definition des Leistungs- und Kostenprofils eines Content Flows. Er bestimmt
keywords:
- Inhaltsfluss
- Content-Flow
---

Der Schritt der KI-Konfiguration (Schritt 2 in der Flow-Änderung) ist die kritischste Phase zur Definition des Leistungs- und Kostenprofils eines Content Flows. Er bestimmt die Wahl des generativen KI-Moduls, seine spezialisierten Funktionen und seine betrieblichen Einschränkungen. Benutzer müssen hier strategische Entscheidungen treffen und dabei die Ausgabequalität, die Aufgabenkomplexität (z. B. multimodale Anforderungen) und die Optimierung der Token-Kosten ausgleichen.

1.  ### Das KI-Kernmodul: Anbieter und Modellstufen

Fozzels ist mit mehreren branchenführenden KI-Anbietern integriert (z. B. OpenAI/ChatGPT, Google/Gemini, Anthropic, xAI), von denen jeder ein Portfolio von Modellen präsentiert.

1.1. Auswahlkriterien für Modelle

Die Auswahl des richtigen Modells erfordert eine strategische Bewertung basierend auf der Inhaltsaufgabe:

**Kostengünstige Modelle**. Zweck: Großvolumige Aufgaben mit niedriger Komplexität (Meta-Titel, kurze Übersetzungen, Datennormalisierung). Hauptattribute: Schnellere Verarbeitung, kleineres Kontextfenster. Kostenprofil: Niedrigste Eingabe-/Ausgabe-Token-Kosten.

**Hochwertige Modelle**. Zweck: Komplexe, kreative Generierung, tiefe Zusammenfassung, Aufrechterhaltung eines nuancierten Markentons. Hauptattribute: Überlegene logische Kohärenz, großes Kontextfenster. Kostenprofil: Höhere Eingabe-/Ausgabe-Token-Kosten.

**Multimodale Modelle**. Zweck: Aufgaben, die visuelle Analyse zusammen mit Text erfordern (z. B. Beschreibung der Textur oder des Stils eines Bildes). Hauptattribute: Bildanalysefunktion ist nicht verhandelbar. Kostenprofil: Höhere Kosten aufgrund der Bildsymbolisierung.

2.  ### KI-Bereicherungstools und Web-Suche

KI-Bereicherungstools sind optionale Funktionen, die den Zugriff des Modells auf externe, nicht-produktbezogene Daten verbessern.

Enable Web Search: Mit dieser Funktion kann das Modell während der Inhaltsgen erierung Echtzeitinformationen und externe Kontexte aus dem öffentlichen Internet abfragen.

Strategic Value: Die Web-Suche ist unverzichtbar für Inhalte, die aktuelle Markttrends, spezifische Herstellungsstandards oder externe Fakten referenzieren müssen, die nicht in den Produktkatalogattributen enthalten sind.

Cost Implication: Nutzen Sie diese Funktion umsichtig, da sie im Allgemeinen zusätzliche Kosten pro Anfrage verursacht, unabhängig von der standardmäßigen Token-Nutzung.

3.  ### Spezialisierte Flow-Funktionen

Für kreative Aufgaben, die über Standard-Text- und Bildanalyse hinausgehen, benötigt Fozzels spezialisierte Flow-Typen und spezifische KI-Modelle aufgrund der hohen erforderlichen Rechenleistung.

**Image Flows (Image Generation).**
Purpose: Generierung neuer Produktbilder (von Grund auf).
Model Requirements: Spezialisierte Bildgenerierungsmodelle (z. B. GPT Image 1, Gemini 2.0 Flash Preview Image Generation).
Vendor Restriction: Auf ausgewählte Anbieter beschränkt (z. B. OpenAI, Google).

**Video Flows (Video Generation)**.
Purpose: Für die Generierung von kurzen, hochfidelity-Videoinhalten gedacht (z. B. 8-Sekunden-720p-Clips).
Model Requirement: High-End-Videogenerierungsmodelle (z. B. Gemini Veo 3).
Vendor Restriction: Derzeit auf Google | Gemini beschränkt. Cost Structure: Videogenerierungsmodelle funktionieren häufig nach einer spezialisierten Preisstruktur (z. B. Preis pro Sekunde der Videoausgabe) aufgrund der hohen Rechenleistung.

4.  ### Bildoptimierung und Kostenkontrolle

Für jeden Flow, der multimodale Funktionen nutzt, ist eine effiziente Handhabung von Produktbildern für die Generierungsstabilität und die Token-Kostenverwaltung unerlässlich.

4.1. Bildeingabe und Fallback-Logik

Image Count: Benutzer müssen explizit die Anzahl der Produktbilder definieren, die die KI analysieren soll (z. B. 1, 2 oder 3). Die Erhöhung der Bildanzahl erhöht direkt die Eingabe-Token-Anzahl und folglich die Kosten.

Fallback/Skip: Wenn in einem Flow ein Produkt die angeforderten Bilddaten fehlen, müssen Benutzer eine Notfallmaßnahme definieren:
Fallback auf ein reines Textmodell: Der Prozess wird mit einem reinen Text-Prompt fortgesetzt, wodurch ein Fehler vermieden wird, aber die Generierungskosten beibehalten werden.
Inhaltsgen erierung überspringen: Das Produkt wird umgangen, wodurch alle zugehörigen Token-Kosten für diesen Artikel gespart werden.

### 4.2. Bildgröße ändern (Stabilitätsmechanismus)

Es ist **Best Practice**, die Bildgrößenänderung für alle multimodalen Flows zu aktivieren. Diese Funktion dient als entscheidender Stabilitäts- und Kosteneinsparungsmechanismus:

Fehlervorbeugung: Generative Modelle haben strenge Grenzen bei der Dateigröße (z. B. > 2 MB) und den Dimensionen (z. B. > 2048 Pixel). Die Größenänderung passt diese Dateien automatisch an akzeptable Grenzen an.

Kosteneffizienz: Durch die Sicherstellung, dass Dateien Größenlimits erfüllen, werden Generierungsfehler verhindert, wodurch sichergestellt wird, dass Token-Kosten nur für erfolgreiche Inhaltsausgabe anfallen, wodurch verschwendete Ausgaben für Operationen, die sonst abstürzen würden, eliminiert werden.
