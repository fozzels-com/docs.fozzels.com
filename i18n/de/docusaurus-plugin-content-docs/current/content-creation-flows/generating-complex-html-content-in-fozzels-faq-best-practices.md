---
id: '103000410130'
title: '4.10.1 Komplexe HTML-Inhalte in Fozzels generieren (FAQ): Best Practices'
sidebar_position: 25
slug: /content-creation-flows/generating-complex-html-content-in-fozzels-faq-best-practices
description: 'Komplexe HTML-Inhalte in Fozzels generieren: Best Practices. Fozzels kann nicht nur Standard-Produktbeschreibungen generieren, sondern auch komplexere Inhalte'
---

# Komplexe HTML-Inhalte in Fozzels generieren: Best Practices

Fozzels kann nicht nur Standard-Produktbeschreibungen generieren, sondern auch komplexere Inhalte wie FAQ-Bereiche, HTML-Blöcke, gestaltete Inhalte und interaktive Elemente.

Die Generierung komplexer HTML-Inhalte erfordert jedoch einige zusätzliche Überlegungen. Wenn die Ausgabe umfangreich ist und Skripte, Styles sowie ausgedehntes Markup enthält, wird die Konfiguration des Flows besonders wichtig.

Diese Anleitung erklärt, wie Sie solche Flows konfigurieren und unvollständige oder ungültige HTML-Ergebnisse vermeiden.

## 1\. Wählen Sie ein geeignetes KI-Modell

Je komplexer und umfangreicher die gewünschte Ausgabe ist, desto leistungsfähiger sollte das KI-Modell sein.

Für große HTML-basierte Generierungen empfehlen wir **keine leichtgewichtigen Modelle wie Gemini 2.5 Flash Preview**. In manchen Fällen erreicht das Modell sein Ausgabe-Token-Limit, bevor die gesamte Antwort abgeschlossen ist. Das kann Folgendes zur Folge haben:

-   Die Ausgabe bricht mitten im Text ab;

-   unvollständige HTML-Abschnitte;

-   nicht geschlossene Tags;

-   fehlende Teile der angeforderten Inhalte.

Für die Generierung komplexer HTML-Inhalte empfehlen wir **mindestens ein Pro-Modell**. Für besonders große und technisch komplexe Ausgaben ist **Anthropic Opus 4** unsere bevorzugte Option.

## 2\. Erlauben Sie alle erforderlichen HTML-Tags

Wenn Ihre generierten Inhalte `<script>`, `<style>` oder andere nicht standardmäßige HTML-Elemente enthalten, stellen Sie sicher, dass diese Tags in der Liste der erlaubten HTML-Tags in Fozzels enthalten sind.

Ist ein Tag nicht erlaubt, kann Fozzels es aus der generierten Ausgabe entfernen. Das kann die Struktur und die Funktionalität des endgültigen Inhalts beeinträchtigen.

**Wichtig:** Stellen Sie sicher, dass alle von Ihrem Prompt benötigten Tags **vor dem Start der Generierung** erlaubt sind.

## 3\. Geben Sie dem Modell explizite HTML-Regeln

Ein komplexer HTML-Prompt sollte klare Anweisungen dazu enthalten, wie die Struktur behandelt werden muss.

Wir empfehlen, das Modell explizit anzuweisen:

-   immer eine vollständige HTML-Struktur zurückzugeben;

-   jedes geöffnete Tag zu schließen;

-   niemals HTML-Tags offen zu lassen;

-   die erforderliche HTML-Hierarchie beizubehalten;

-   erforderliche HTML-Elemente nicht zu entfernen oder zu verschieben;

-   nicht mitten in einem HTML-Element oder Abschnitt aufzuhören;

-   unnötiges HTML oder übermäßigen Text zu vermeiden;

-   die Ausgabe in einem sinnvollen Umfang zu halten, wenn das Risiko besteht, das Ausgabelimit des Modells zu erreichen.

Je expliziter diese Anforderungen sind, desto zuverlässiger kann das Modell die beabsichtigte Struktur einhalten.

## 4\. Verstehen Sie, wie der Editor mit unvollständigem HTML umgeht

Der Fozzels-Editor kann helfen, kleinere HTML-Probleme zu korrigieren.

Enthält das generierte Ergebnis beispielsweise eine geringe Anzahl nicht geschlossener Tags, kann der Editor sie möglicherweise automatisch schließen.

Der Editor kann eine stark beschädigte HTML-Struktur jedoch nicht zuverlässig rekonstruieren. Enthält die KI-Ausgabe viele nicht geschlossene oder falsch strukturierte Tags, liegen möglicherweise nicht genügend Informationen vor, damit der Editor die beabsichtigte Struktur ermitteln kann.

Der Editor sollte daher **nicht als Lösung für unvollständige KI-Generierungen betrachtet werden**. Er ist dafür ausgelegt, bei kleineren Formatierungsproblemen zu helfen, nicht dafür, eine große oder abgeschnittene HTML-Antwort zu rekonstruieren.

Für komplexe HTML-Flows können Sie nun selbst entscheiden, ob der Editor angewendet werden soll, denn **der Editor ist optional**.

### Wichtig: Änderungen im Editor sind nicht reversibel

Wenn Sie ein Ergebnis im Editor öffnen und die Struktur dabei fehlerhaft wird:

### Speichern Sie die Änderungen nicht.

Schließen Sie das Popup ohne zu speichern und öffnen Sie das Ergebnis erneut. So gelangen Sie zum ursprünglich generierten Ergebnis zurück.

## 5\. Validieren Sie Ihre Ergebnisse, bevor Sie eine Massengenerierung starten

Für komplexe HTML-Flows empfehlen wir dringend, die Konfiguration zunächst an einer sehr kleinen Anzahl von Produkten zu testen.

Ein guter Ansatz ist:

1.  Generieren Sie **1–2 Produkte**.

2.  Prüfen Sie, ob die vollständige HTML-Struktur vorhanden ist.

3.  Überprüfen Sie, ob alle erforderlichen Tags geschlossen sind.

4.  Prüfen Sie, ob Skripte und Styles erhalten wurden.

5.  Prüfen Sie das Ergebnis bei Bedarf mit und ohne Editor.

6.  Fahren Sie erst danach mit einer größeren Generierung fort.

Das ist besonders wichtig, wenn Sie das KI-Modell, den Prompt oder die HTML-Einstellungen geändert haben.

Fozzels führt außerdem eine zusätzliche Validierung des generierten HTML durch, um unvollständige Tags und ungültige Strukturen zu erkennen.

## Empfohlene Checkliste für die Konfiguration

Stellen Sie vor dem Start einer großen Generierung komplexer HTML-Inhalte sicher, dass:

-   Sie ein ausreichend leistungsfähiges KI-Modell verwenden.
-   Alle erforderlichen HTML-Tags erlaubt sind.
-   `<script>` und `<style>` erlaubt sind, wenn Ihre Inhalte sie benötigen.
-   Der Prompt explizite Regeln zur HTML-Struktur enthält.
-   Der Prompt das Modell auffordert, alle Tags zu schließen.
-   Die angeforderte Ausgabe nicht unnötig groß ist.
-   Sie verstanden haben, dass der Editor optional ist.
-   Sie den Flow zuerst an 1–2 Produkten getestet haben.
-   Die Testergebnisse geprüft wurden, bevor eine Massengenerierung startet.

## Kurz gesagt

Die Generierung komplexer HTML-Inhalte ist in Fozzels möglich, erfordert aber etwas mehr Vorbereitung als die Generierung von Standardinhalten.

Das Wichtigste zum Merken:

**Verwenden Sie ein leistungsfähiges Modell → erlauben Sie die erforderlichen HTML-Tags → geben Sie dem Modell strikte HTML-Anweisungen → testen Sie an 1–2 Produkten → prüfen Sie die Ausgabe, bevor Sie eine Massengenerierung starten.**

Dieser Ansatz reduziert das Risiko unvollständiger, abgeschnittener oder ungültiger HTML-Ergebnisse erheblich.
