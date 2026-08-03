---
title: 'FAQ: Inhaltserstellung'
sidebar_position: 5
unlisted: true
slug: /frequently-asked-questions/faq-content-generation
description: Die häufigsten Fragen zur KI-Texterstellung – fehlende Texte, Batch-Limits, Regeneration nach Prompt-Änderungen, Generierungsfehler, verdächtige Inhalte, Modellwahl, Synchronisierungszeitpunkt und Kostenkontrolle.
---

## Produkte sind in meinem Flow, aber Texte wurden nicht generiert.

Generierung wartet möglicherweise auf die nächste geplante Ausführung. Sie können sie manuell auslösen oder den Support kontaktieren, um sie für Sie zu starten.

## Wie bestätige ich generierte Inhalte, bevor sie auf meine Website gesendet werden?

Wenn Ihr Flow halbautomatisch ist, bestätigen Sie Vervollständigungen einzeln oder verwenden Sie Mass Action in der Batch-Liste, um mehrere Elemente zu genehmigen.

## Neue Produkte sind seit Tagen online, haben aber keine generierten Texte.

Die geplante Generierung wurde möglicherweise verzögert. Kontaktieren Sie den Support – Sie können Produkte manuell erneut abrufen und die Generierung starten.

## Können Sie fehlende Texte für mehrere Marken gleichzeitig beheben?

Ja. Kontaktieren Sie den Support und geben Sie an, welche Marken/Flows betroffen sind. Sie können die Generierung für alle gleichzeitig auslösen.

## Mein Flow zeigt 100 %, aber ich habe den Prompt geändert. Warum gibt es keine neuen Texte?

Das Ändern des Prompts allein löst nicht die Neugenerierung vorhandener Texte aus. Verwenden Sie Mass Action → „Regenerate content" oder duplizieren Sie den Flow.

## Wie regeneriere ich alle Produkttexte nach einer Prompt-Aktualisierung?

Gehen Sie zu Vervollständigungen, wählen Sie alle über Mass Action aus und wählen Sie „Regenerate content". Alternativ deaktivieren Sie den Flow, duplizieren ihn und aktivieren die neue Version.

## Der Cooldown-Zeitraum löst keine Neugenerierung aus.

Cooldown steuert die Mindestzeit zwischen automatischen Neugenerierungen, erzwingt aber nicht die Neugenerierung abgeschlossener Texte. Verwenden Sie Mass Action für Neugenerierung.

## Was verursacht Generierungsfehler / fehlgeschlagene Vervollständigungen?

Normalerweise hohe KI-Modellverarbeitungslast. Große Prompts + lange Ausgabe + mehrere Bilder können das Modell überlasten. Fehlgeschlagene Jobs werden automatisch wiederholt. Versuchen Sie kürzere Prompts oder ein anderes Modell.

## Wie kann ich sehen, welche Produkte keine Inhalte generieren konnten?

Überprüfen Sie den Completion Report unter [app.fozzels.com/completions/product/completion/report/](https://app.fozzels.com/completions/product/completion/report/) und filtern Sie nach Datum mit der Option `failed_only`.

## Mein Batch scheint stecken zu bleiben – keine Texte generiert.

Dies kann durch temporäre Token-Limits von KI-Anbietern verursacht werden. Das System wird automatisch wieder normal. Kontaktieren Sie den Support, wenn das Problem weiterhin besteht.

## Die Inhaltsgenerierung dauert viel länger als gewöhnlich.

Temporäre Verzögerungen durch Token-Nutzungsgrenzen. Dies wird normalerweise automatisch behoben. Kontaktieren Sie den Support, wenn die Generierung stecken bleibt.

## Ich sehe „Unbekannter Fehler" bei allen Jobs.

Dies geschieht bei Spitzenlast des Systems. Das System versucht automatisch erneut. Wenn 80 % oder mehr fehlschlagen, kontaktieren Sie den Support – Sie können Flows überwachen und sie manuell auslösen.

## Meine Batch-Liste zeigt 500 Produkte, aber mein Flow hat 3.380 berechtigte.

Fozzels begrenzt Batches auf 500 Produkte pro **Plan & Close**. Klicken Sie mehrmals auf „Plan & Close", um zusätzliche Batches in die Warteschlange einzureihen.

## „Run Now" fügt nur 10 Produkte hinzu.

„Run Now" ist zum schnellen Testen (10 Produkte) gedacht. Verwenden Sie „Plan & Close" für größere Batches (bis zu 500).

## Was ist der Unterschied zwischen „Plan & Close" und „Run Now"?

„Run Now" verarbeitet bis zu 10 Produkte sofort zum Testen. „Plan & Close" reiht einen Batch von bis zu 500 Produkten ein. Verwenden Sie Plan & Close für Produktion.

## Was sind die täglichen Generierungslimits pro Plan?

Niedrigere Pläne: 10–30 Produkte/Tag. Höhere Pläne (€299+): deutlich mehr. Unlimited: 500 pro Flow pro Tag. Kontaktieren Sie den Support für vorübergehende Erhöhungen.

## Kann ich eine vorübergehende Limiterhöhung für eine anfängliche Auffüllung anfordern?

Ja. Für einmalige große Volumen kann das Team Limits vorübergehend erhöhen. Kontaktieren Sie den Support mit Ihrem erwarteten Volumen und Zeitplan.

## Wie zeige ich eine Vorschau der Prompt-Ergebnisse vor der Synchronisierung an?

Öffnen Sie den Flow → fügen Sie Ihren Prompt hinzu → klicken Sie auf **Save and Preview** → klicken Sie auf **Generate Now**. Die Vorschau wird nicht gespeichert oder synchronisiert.

## Warum erfordert die Vorschau einen Kontostand?

Die Vorschaufunktion verbraucht Tokens, daher ist ein Kontostand erforderlich. Kontaktieren Sie den Support für einen kleinen Test-Credit, falls nötig.

## Ich erhalte „Leeres Ergebnis"-Fehler mit dem GPT-5-Modell.

GPT-5 erfordert mehr Token-Kapazität. Erhöhen Sie Max Tokens von 2.000 auf mindestens 5.000.

## Welche Max Tokens-Einstellung wird empfohlen?

Für GPT-5: mindestens 5.000. Stellen Sie sicher, dass Prompt-Tokens + max_tokens die Kontextlänge des Modells nicht überschreitet.

## Was sind Warnungen zu verdächtigen Inhalten?

Fozzels validiert die Ausgabe gegen eine Liste unerwünschter Wörter. Gekennzeichnete Inhalte werden nicht automatisch synchronisiert. Sie können die Liste anpassen oder Prompt-Einschränkungen hinzufügen.

## Wie reduziere ich Warnungen zu verdächtigen Inhalten?

Fügen Sie Einschränkungen in Ihrem Prompt hinzu, passen Sie die Liste verdächtiger Wörter an oder verwenden Sie **Regenerate**. Kontaktieren Sie den Support, um erzwungenermaßen zu synchronisieren, falls der Inhalt in Ordnung ist.

## Kann ich verdächtige Inhalte erzwungenermaßen synchronisieren?

Kontaktieren Sie den Support – geben Sie alle Flows oder spezifische an. Sie können gekennzeichnete Inhalte in Ihrem Namen synchronisieren.

## Meine Seitentitel sind zu lang / erreichen Zeichengrenzen.

Passen Sie Ihren Prompt an, um maximale Zeichenanzahl anzugeben. Kontaktieren Sie den Support, um vorhandene Titel zu beheben, die zu lang sind.

## Die Zeichenkette „Plain text" wird in meinen generierten Inhalten angezeigt.

Dies ist ein seltenes Prompt-Problem. Der Support kann die betroffenen Produkte überprüfen und bereinigen. Berichten Sie es mit spezifischen Beispielen.

## Ein Produkt kommt nicht online wegen Fozzels-Inhalts.

Inhaltsprobleme (lange Titel, unerwartete Zeichenketten) können die Veröffentlichung blockieren. Kontaktieren Sie den Support mit den Produktdetails.

## Meine automatischen Content-Flows funktionieren nicht mehr.

Dies kann durch Fozzels-seitige Probleme oder KI-Anbieter-Einschränkungen verursacht werden. Kontaktieren Sie den Support, um zu untersuchen und neu zu starten.

## Mein Flow zeigt sofort nach der Aktivierung 100 % grün – ist das richtig?

Dies ist ein bekanntes UI-Problem. Der anfängliche Bildschirm zeigt möglicherweise 100 % vor der Fertigstellung. Überprüfen Sie die Flow-Details für den echten Status.

## Die Schaltfläche „Generate Now" reagiert nicht.

Die Generierungswarteschlange ist möglicherweise während Spitzenzeiten überlastet. Warten Sie und versuchen Sie es später, oder wechseln Sie zu einem schnelleren KI-Modell.

## Kann ich KI-Modelle für schnellere Generierung wechseln?

Ja, ändern Sie das Modell in den Flow-Einstellungen. Leichtere Modelle sind schneller. Unterschiedliche Modelle können unterschiedliche Qualität produzieren.

## Welches KI-Modell sollte ich für das beste Kosten-/Qualitätsverhältnis verwenden?

Es stehen mehrere Modelle zur Verfügung (ChatGPT, Gemini, Claude). Leistungsstärkere Modelle bieten höhere Qualität, kosten aber mehr. Kontaktieren Sie das Team für Empfehlungen.

## Ich erhalte Gemini-Fehler während großer Batch-Generierungen.

Gemini wendet Rate Limits für große Volumen an und verursacht temporäre Fehler. Jobs bleiben in der Warteschlange und werden automatisch abgeschlossen, sobald Limits wiederhergestellt werden.

## Verdächtige Inhalte in französischer Sprache werden fälschlicherweise gekennzeichnet.

Die Filterliste kann Wörter enthalten, die in anderen Sprachen häufig vorkommen. Kontaktieren Sie den Support, um die Liste für Ihre Sprache anzupassen.

## Gibt es ein Synchronisierungslimit? Warum ist die Synchronisierung langsam?

Das Synchronisieren großer Volumen braucht Zeit. Es gibt keine harten Limits, aber es läuft schrittweise. Kontaktieren Sie den Support, wenn es stecken bleibt.

## Die Ergebnisse haben schlechte Qualität aufgrund unzureichender Produktdaten.

Die Qualität hängt von verfügbaren Daten ab. Bereichern Sie Produktdaten in Ihrem PIM/Shop vor der Neugenerierung. Manuelle Bearbeitung kann für datenärmere Produkte erforderlich sein.

## Wie richte ich einen vollständig automatischen Flow ein (automatische Bestätigung und Synchronisierung)?

Wählen Sie den Flow-Typ „Fully-automatic". Ergebnisse werden automatisch bestätigt und mit dem nächsten Cron-Lauf synchronisiert (~4 Stunden). Interne Validierung verhindert, dass schlechte Inhalte synchronisiert werden.

## Wie oft läuft das Sync-Cron?

Automatische Synchronisierung läuft über Cron alle ~4 Stunden. Planen Sie die Generierung im Voraus für dringende Launches. Kontaktieren Sie den Support für schnellere Intervalle.

## Die Generierung wurde vorzeitig gestoppt – könnte dies ein Speicherproblem sein?

Unzureichender Serverspeicher kann große Generierungen stoppen. Kontaktieren Sie den Support – Sie können den zugewiesenen Speicher erhöhen.

## Wie synchronisiere ich alle Inhalte gleichzeitig über Mass Action?

Aktivieren Sie den Toggle „Show all content" und lösen Sie dann **Resync** über Mass Action aus, um alles in einem Durchgang zu synchronisieren.

## HTML-Code wird in meiner Batch-Übersicht angezeigt.

Klicken Sie auf die Schaltfläche **Show HTML**, um zwischen formatierter und roher Ansicht zu wechseln. Dies ist ein bekanntes UI-Problem, das verbessert wird.

## Meine Flows sind nach Mittellosigkeit und einer Kontostand-Aufladung stecken geblieben.

Flows werden nach einer Aufladung möglicherweise nicht automatisch fortgesetzt. Kontaktieren Sie den Support, um eingereihte Jobs neu zu starten.

## Was passiert, wenn sich eine Produktkategorie ändert?

Falls die Automatische Neugenerierung aktiviert ist, wird der Text neu generiert, wenn sich die Kategorie ändert.

## Wie korrigiere ich sachliche Fehler in KI-generiertem Text?

Wenn die Daten aus einem Store-Attribut stammen, korrigieren Sie sie dort und der Inhalt wird automatisch neu generiert. Wenn er KI-generiert wurde (z. B. aus Bildern), bearbeiten Sie ihn manuell in der Batch-Liste.

## Warum werden unterschiedliche Texte für das gleiche Produkt in verschiedenen Farben generiert?

Dies ist das erwartete Verhalten. KI generiert eindeutige Beschreibungen pro Produktparameter – verschiedene Farben erzeugen unterschiedliche Beschreibungen.

## Die Vorschau zeigt keine Produktattribute/Spalten mehr.

Dies wurde in Release 5.10 geändert. Sie können Spalten in der Vorschautabelle ein- und ausschalten. Fehlende Spalten können ein bekannter Bug sein.

## Wie verwalte ich mehrere ähnliche Prompts über Kategorien/Marken hinweg?

Derzeit hat jeder Flow seinen eigenen Prompt. Dynamische/gemeinsame Prompts stehen auf der Roadmap. Verwenden Sie **Duplicate**, um ähnliche Flows schneller zu erstellen.

## Ich erhalte einen Synchronisierungsfehler, weil ein erforderliches Attribut in Magento leer ist.

Fozzels kann keinen Inhalt pushen, wenn erforderliche Magento-Felder leer sind. Überprüfen Sie die Fehlermeldung und füllen Sie das fehlende Attribut aus.

## Ich habe unerwartete Gebühren durch steckengebliebene Videogenerierung erhalten.

Kontaktieren Sie sofort den Support. Sie können falsche Gebühren gutschreiben und das Problem beheben. Löschen Sie steckengebliebene Flows, um weitere Gebühren zu stoppen.

## Attribute sind aus meinen Flows/Prompts verschwunden.

Dies kann passieren, wenn Prompts zwischen Feldern kopiert werden. Speichern Sie Prompts als Vorlagen. Kontaktieren Sie den Support, wenn Attribute ohne Änderungen verschwinden.
