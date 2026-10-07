---
id: '103000390709'
title: '4.7.4 Verdächtige Wörter & Ausdrücke: Fortgeschrittene Inhaltsqualitätskontrolle'
sidebar_position: 21
slug: /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: >-
  Die Funktion Verdächtige Wörter & Ausdrücke kennzeichnet generierte Texte, die
  Wörter, Ausdrücke oder kommentarähnliche Muster enthalten, die Sie nicht
  veröffentlichen möchten, damit Sie sie vor der Veröffentlichung prüfen können.
keywords:
- Arbeitsablauf
---

Die Funktion **Suspicious Words & Phrases** kennzeichnet generierte Texte, die Wörter, Ausdrücke oder kommentarähnliche Muster enthalten, die Sie nicht veröffentlichen möchten. Gekennzeichnete Vervollständigungen erhalten den Status **Suspicious**. So können Sie sie filtern und prüfen, bevor sie live gehen.

Sie erkennt KI-Artefakte (Entschuldigungen, Hinweise an den Leser, übrig gebliebenes Markup), technische Überreste und alle Begriffe, die Sie sperren möchten, in allen Sprachen gleichzeitig.

## Wo Sie die Funktion finden

Gehen Sie zu **Settings** > **Flow** und scrollen Sie zum Block **Suspicious Words & Phrases**. Die Einstellungen gelten global für alle Ihre Flows.

![Einstellungen für Suspicious Words & Phrases](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-01-settings.png)

## Wie der Abgleich funktioniert

Ein Wort wird standardmäßig als ganzes Wort gefunden. Setzen Sie `*` an den Anfang oder an das Ende, um die Suche zu erweitern. Groß- und Kleinschreibung spielt nie eine Rolle.

| Eintrag | Was gefunden wird |
| --- | --- |
| `bright` | nur _bright_, nicht _brightness_ oder _ultrabright_ |
| `bright*` | auch _brightness_ und _brightly_ |
| `*bright` | auch _ultrabright_ |
| `*bright*` | der Text an beliebiger Stelle, auch in _ultrabrightness_ |
| `bri*ght` | genau der Text `bri*ght` — `*` funktioniert nur am Anfang oder am Ende |

Dieselben Regeln gelten für Ausdrücke. Zum Beispiel kennzeichnet `antwoord` niemals _verantwoorde_, `antwoord*` kennzeichnet auch _antwoorden_, und `*seo*` wird überall gefunden, sogar in _museo_.

## Was gekennzeichnet wird

Drei Quellen speisen die Prüfung: Standardwörter, integrierte Muster und Ihre eigenen Wörter.

### Verdächtige Standardwörter

Fozzels bringt eine fertige Liste häufiger KI-Artefakte in mehreren Sprachen mit, zum Beispiel `*sorry*`, `*please*`, `*note:*`, `*markdown*`, `*<html*`, `*Let op:*` und `*het spijt me*`. Deaktivieren Sie jedes Wort, das Sie nicht brauchen. Es wird dann nicht mehr gekennzeichnet.

### Integrierte Muster

Integrierte Muster suchen nach der _Form_ eines KI-Kommentars statt nach einem exakten Wort. Sie erkennen auch Formulierungen, die das Modell noch nie verwendet hat, zum Beispiel:

- "Let's" oder "Let me" vor einem Verb, wie in _"Let's re-verify"_
- Eine abgezählte Prüfung, wie in _"One last check"_ oder _"Final check"_
- Eine Frage zum Text selbst, wie in _"Is the wording accurate?"_
- Ein übergebenes Ergebnis, wie in _"Final answer"_ oder _"Here is the"_
- Gezählte Zeichen, wie in _"59 chars"_ oder _"character limit"_
- Die zitierten Anweisungen, wie in _"the prompt says"_ oder _"mandatory words"_
- Das Wort "I" vor einem Verb, wie in _"I forgot"_ oder _"I'll use"_

Die vollständige Liste finden Sie in den Einstellungen, mit einem Beispiel zu jedem Muster. Muster lassen sich nicht bearbeiten. Klicken Sie auf ein Muster, um es ein- oder auszuschalten. Schalten Sie ein Muster aus, wenn es Ihre eigenen Texte kennzeichnet.

Die ausgegrauten Muster sind zunächst ausgeschaltet. Sie erkennen Formen, die auch normale Texte verwenden, zum Beispiel eine Frage in einer Produkt-FAQ oder eine Zeile, die mit _Great,_ beginnt. Schalten Sie ein solches Muster nur ein, wenn Sie lieber einige Ihrer eigenen Sätze prüfen, als diese Kommentare zu übersehen.

### Ihre eigenen Wörter

Geben Sie unter **Add your own suspicious words** ein Wort oder einen Ausdruck ein und drücken Sie **Enter**. Nutzen Sie dies für Namen von Wettbewerbern, sensible Markenbegriffe oder Fehler, die nur in einer Sprache auftreten. Sie können in einer Liste mehrere Sprachen mischen. Das hilft Shops, die in mehreren Sprachversionen veröffentlichen.

## Wie die Kennzeichnung funktioniert

Jede neue Generierung wird direkt nach der Erstellung anhand Ihrer aktuellen Einstellungen geprüft. Bei einem Treffer gilt Folgendes:

- Die Vervollständigung erhält den Status **Suspicious**.
- Die gefundenen Wörter werden im Text-Editor **hervorgehoben**, sodass Sie sofort sehen, was die Kennzeichnung ausgelöst hat.
- Sie entscheiden, was zu tun ist: den Text **manuell bearbeiten**, ihn **neu generieren** oder **die Liste anpassen**, wenn die Kennzeichnung ein Fehlalarm ist.

In der Vervollständigungsliste sieht ein gekennzeichnetes Ergebnis so aus. Das gefundene Wort (hier _hello_) ist im Text hervorgehoben. Die Schaltfläche **Sync Now** zeigt ein Warnsymbol und die Meldung _"Completion looks suspicious, possible AI recommendations found."_

![Eine verdächtige Vervollständigung in der Vervollständigungsliste](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-02-suspicious-completion.png)

Eine solche Vervollständigung sollte nicht unverändert synchronisiert werden. Generieren Sie sie neu oder bearbeiten Sie den Text, um die gekennzeichneten Wörter zu entfernen.

Um nur gekennzeichnete Elemente zu prüfen, aktivieren Sie **Show only suspicious** in der **Daily Total Batch List**. So überspringen Sie die unauffälligen Ergebnisse und gehen direkt zu den Texten, die Ihre Aufmerksamkeit brauchen.

## Bestehende Vervollständigungen aktualisieren

Änderungen an der Liste wirken sich nur auf neue Generierungen aus. Bereits vorhandene Vervollständigungen werden **nicht** automatisch erneut geprüft. Ihr Suspicious-Status bleibt unverändert, bis Sie ihn neu berechnen.

So wenden Sie Ihre neuen Einstellungen auf bestehende Texte an:

1.  Öffnen Sie die **Content Completion List** für das Attribut, das Sie prüfen möchten.
2.  Wählen Sie die Produkte aus, die erneut geprüft werden sollen.
3.  Öffnen Sie das Menü **Actions** und wählen Sie **Update Suspicious Flag**.

![Update Suspicious Flag im Menü Actions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-03-update-suspicious-flag.png)

Die ausgewählten Vervollständigungen werden erneut anhand Ihrer aktuellen Liste und Muster gescannt. Produkte, die nicht mehr passen, verlieren den Status Suspicious und sind bereit zur Synchronisierung.

**Beispiel:** Sie haben `sorry` als verdächtiges Wort hinzugefügt und dann eine Marke namens _Sorry Boy_ eingeführt. Hunderte Beschreibungen sind nun gekennzeichnet. Entfernen Sie `sorry` in den Einstellungen oder deaktivieren Sie es und führen Sie dann **Update Suspicious Flag** für diese Produkte aus. Die Kennzeichnungen verschwinden, und Sie können die Produkte gesammelt synchronisieren, ohne jeden Text zu bearbeiten.

## Tipps

- Beginnen Sie mit ganzen Wörtern und fügen Sie `*` nur hinzu, wenn Sie Varianten brauchen. `*seo*` findet auch _museo_, was normale Texte kennzeichnen kann.
- Wenn ein integriertes Muster in Ihrer Nische ständig gute Texte kennzeichnet, schalten Sie es aus, statt Texte einzeln zu bearbeiten.
- Führen Sie nach jeder Änderung der Liste **Update Suspicious Flag** für die Produkte aus, die erneut geprüft werden sollen.

Zusammen geben Ihnen Wortliste, Muster und Massenaktion eine zentrale Stelle, um zu steuern, was in Ihren Shop gelangt, über alle Flows und alle Sprachen hinweg.
