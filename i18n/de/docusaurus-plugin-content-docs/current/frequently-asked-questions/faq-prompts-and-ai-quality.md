---
title: 'FAQ: Prompts und KI-Qualität'
sidebar_position: 6
unlisted: true
slug: /frequently-asked-questions/faq-prompts-and-ai-quality
description: Prompt-Konkurrenz, Bildrahmen und Branding, konsistente Feature-Formatierung, mehrsprachige Ausgabe und Sprachfallback-Logik in Prompts.
---

## Mein KI-Bild ignoriert Rahmenanweisungen (Ganzkörper statt Oberkörper).

Dies ist durch **Prompt-Konkurrenz** verursacht – widersprüchliche Anweisungen (z. B. „full-body" zusammen mit „only torso"). Entfernen Sie alle konfliktierenden Trigger und verwenden Sie spezifische Sprache wie „waist-up portrait pose".

## Das Logo und das Branding sind in generierten Bildern verschwommen.

Ganzaufnahmen verteilen das Rendering über den gesamten Körper. Wechseln Sie zu Portrait-/Oberkörper-Rahmen und fügen Sie spezifische Branding-Anweisungen im Prompt hinzu.

## Haben Sie Tipps zur Prompt-Optimierung für die Bildgenerierung?

Vermeiden Sie widersprechende Anweisungen, fügen Sie explizite Ausschlüsse hinzu, verwenden Sie portraitspezifische Sprache und schützen Sie Branding-Details. Kontaktieren Sie den Support für eine Prompt-Überprüfung.

## Meine Produktmerkmale werden inkonsistent formatiert (Liste vs. Inline).

Fügen Sie explizite Formatierungsregeln im Prompt hinzu: jedes Merkmal auf einer neuen Zeile, fettgedruckte Namen, keine Aufzählungssymbole. Verwenden Sie GROSSBUCHSTABEN-Betonung für Schlüsselregeln.

## Wie schreibe ich Prompts für konsistente Formatierung von Produktmerkmalen?

Geben Sie die Struktur an (Beschreibung + Merkmale-Abschnitt), formatieren Sie sie als vertikale Liste mit fettgedruckten Beschriftungen, verbieten Sie Aufzählungen und listen Sie die erforderlichen Merkmale auf.

## Die KI generiert falsche Material-/Attributinformationen aus Bildern.

Wenn Fozzels keinen Zugriff auf spezifische Felder hat, rät die KI von Fotos – was für technische Details unzuverlässig ist. Verbinden Sie ACF/benutzerdefinierte Attribute für genaue Daten.

## Kann das Fozzels-Team meine Flows und Prompts überprüfen?

Ja, sie können Struktur, Spezialisierung und Optimierung beraten. Vereinbaren Sie eine Online-Sitzung für detaillierte Anleitung.

## Kann Fozzels mein benutzerdefiniertes Frontend-Layout (z. B. ein Akkordeon) erfüllen?

Fozzels kann komplexe Layouts nicht garantiert erfüllen. Experimentieren Sie mit Prompts, aber manuelle Anpassung kann erforderlich sein.

## Ich erhalte mehrsprachige Ausgabe (z. B. Englisch + Niederländisch).

Schreiben Sie alle Prompt-Anweisungen in der gewünschten Ausgabesprache und mischen Sie keine Sprachen. Fügen Sie eine starke Notiz hinzu: „WICHTIG: Die Ausgabe muss vollständig in [Sprache] sein."

## Mein Prompt generiert gemischte Sprachen, wenn ich ihn aus einem anderen Shop kopiere.

Kopieren Sie nicht und fügen Sie Übersetzungsanweisungen hinzu. Schreiben Sie den gesamten Prompt von Grund auf in der Zielsprache und erstellen Sie separate Prompts pro Sprache.

## Kann ich Sprachfallback-Logik in Prompts verwenden (z. B. Tschechisch → Deutsch)?

Sie können bedingte Logik im Prompt versuchen: „Falls tschechischer Text verfügbar ist, verwenden Sie ihn. Falls nicht, verwenden Sie Deutsch." Die Ergebnisse hängen von der Spracherkennung der KI ab.
