---
title: Content Flows — Vollständiger Leitfaden
sidebar_position: 28
slug: /content-creation-flows/content-flows-complete-guide
description: Content Flows sind das Kern-Automatisierungsfeature von Fozzels. Dieser Leitfaden behandelt das Erstellen eines Flow, Prompt-Vorlagen, das Ausführen, den Abschluss-Lebenszyklus, verdächtige Inhalte und warum Inhalte manchmal nicht synchronisiert werden.
keywords:
- Inhaltsfluss
- Content-Flow
---

Content Flows sind das Kern-Automatisierungsfeature von Fozzels. Ein Flow ist eine Regel, die automatisch KI-Inhalte für ein ausgewähltes Produktattribut generiert und das Ergebnis zurück in Ihren Shop schreibt.

## Was ein Flow tut

1. Filtert Produkte nach Ihren Bedingungen (z. B. "description is empty")
2. Sendet Produktdaten mit Ihrer Eingabeaufforderung an die KI
3. Speichert den generierten Inhalt als "Abschluss"
4. Sendet den Inhalt an Ihr Shop-Attribut

---

## Erstellen eines Flow

Gehen Sie zu [Flows](https://app.fozzels.com/completions/product/rule) → **Create Flow**

### Schritt 1 — Shop & Zielattribut

- Wählen Sie den Shop aus, dessen Produkte verarbeitet werden sollen
- Geben Sie dem Flow einen Namen
- Wählen Sie das **Zielattribut** — das Attribut, das KI-generierte Inhalte erhält
  - Muss das Flag **Mutable** in Integration → Attribute aktiviert haben

### Schritt 2 — KI-Anbieter

- Wählen Sie KI-Anbieter: OpenAI GPT-4o, Google Gemini 2.5 Flash oder Anthropic Claude
- Wählen Sie ein bestimmtes Modell
- Konfigurieren Sie Modellparameter bei Bedarf

### Schritt 3 — Produkte & Eingabeaufforderung

- **Bedingungen** — visueller Abfragebuilder, um zu filtern, welche Produkte dieser Flow verarbeitet
  - Beispiel: "description is empty AND category equals Electronics"
  - Leer lassen, um alle Produkte im Shop zu verarbeiten
  - Eine Produktanzahl-Vorschau zeigt, wie viele Produkte dem Filter entsprechen
- **Prompt** — die Anweisung an die KI, geschrieben im [Prompt-Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor). Produktdaten fügen Sie als **Attribute** ein: Geben Sie `/` im Editor ein, oder klicken bzw. ziehen Sie ein Attribut aus dem Attribut-Panel. Jedes Attribut wird durch den Wert des jeweiligen Produkts ersetzt.
  - Beispiel: _Write a product description for_ **Name** _(SKU:_ **SKU**_) in category_ **Category**, wobei die fett gedruckten Teile Attribute sind
  - Ein Attribut mit einem Label daneben (_Brand:_ **Brand**) gehört in eine **Bedingung** (einen if-Block): Die ganze Zeile entfällt, wenn das Produkt keinen Wert hat, sodass keine leeren Zeilen an die KI gelangen

### Schritt 4 — Automatisierungseinstellungen

- **Aktiv**-Umschalter — aktivieren/deaktivieren Sie den Flow
- **Stapelgröße** — wie viele Produkte pro Durchlauf verarbeitet werden (Standard 10)
- **Automation**-Umschalter — wenn ON werden bestätigte Inhalte automatisch an Ihren Shop gesendet ohne manuelle Überprüfung
- **Bei Attributänderung neu generieren** — erneut ausführen, wenn Quellattribute aktualisiert werden (⚠ kann zu Rekursion führen, wenn das Zielattribut auch eine Quelle ist)
- **Überlappende Generierung verhindern** — Cooldown zwischen Regenerationen pro Produkt:
  - **Erben** — verwenden Sie globalen Cooldown aus Kontoeinstellungen
  - **Außer Kraft setzen** — legen Sie einen benutzerdefinierten Cooldown nur für diesen Flow fest
  - **Ausschalten** — generieren Sie immer neu, unabhängig von bisherigen Durchläufen

---

## Tipps für Prompt-Vorlagen

Fügen Sie Produktdaten als Attribute aus dem Attribut-Panel ein, anstatt sie abzutippen: Ein Attribut wird durch den Wert des jeweiligen Produkts ersetzt.

**Attribut oder Bedingung:**

- Ein **einfaches Attribut** steht für sich innerhalb eines Satzes. Verwenden Sie es für Attribute, die fast jedes Produkt hat (der Befüllungsgrad im Attribut-Panel zeigt, wie viele es sind).
- Eine **Bedingung** (ein if-Block) enthält eine ganze Zeile, etwa _Brand:_ **Brand**, und lässt sie weg, wenn das Produkt keinen Wert hat. Verwenden Sie sie für alles mit einem Label oder anderem Text um das Attribut herum, damit die KI nie eine leere Zeile _Brand:_ erhält.

Seien Sie spezifisch über:

- Format und Länge ("150–200 Wörter")
- Sprache ("auf Englisch")
- Ton ("professionell, aber freundlich")
- Was zu vermeiden ist ("erwähnen Sie keine Konkurrenten")

**Beispiel für Produktbeschreibung.** Fett gedruckte Wörter sind Attribute. Der Name ist bei jedem Produkt befüllt und steht daher als einfaches Attribut; die anderen Zeilen mit Label stehen jeweils in einer Bedingung:

> Write a compelling product description (150–200 words) in English.
>
> Product name: **Name**
>
> _if Brand_ → Brand: **Brand**
>
> _if Category_ → Category: **Category**
>
> _if Short Description_ → Current short description: **Short Description**
>
> Focus on benefits, not just features. Use a professional but friendly tone.

**Die Ausgabe formatieren.** Der Prompt selbst enthält keine Formatierung. Wenn der generierte Inhalt Überschriften, Listen oder fett gedruckten Text enthalten soll, fordern Sie dies in Worten an, zum Beispiel _Beginnen Sie mit einer `<h2>`-Überschrift, die das Produkt nennt, gefolgt von zwei kurzen Absätzen._ Wenn die Ausgabe HTML enthalten muss, aktivieren Sie die relevanten Tags in [Einstellungen → Flow-Einstellungen → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Flow ausführen

**Run Now** — verarbeitet sofort bis zu 10 Produkte. Verwenden Sie dies zum Testen oder für kleine Chargen.

**Plan & Close** — reiht die vollständige Charge zur Verarbeitung im Hintergrund ein. Verwenden Sie dies für Massendurchläufe.

---

## Abschluss-Lebenszyklus

Jeder generierte Artikel durchläuft diese Stadien:

| Status | Bedeutung |
|--------|---------|
| **Pending** | Generiert, wartet auf Überprüfung |
| **Confirmed** | Von Ihnen genehmigt, bereit zur Synchronisierung |
| **Synchronized** | Erfolgreich an den Shop gesendet |
| **Suspicious** | Enthält gekennzeichnete Inhalte — erfordert manuelle Überprüfung vor Synchronisierung |

Mit **Automation ON** — werden saubere Inhalte automatisch bestätigt und gesendet. Verdächtige Inhalte warten immer auf manuelle Überprüfung.

Mit **Automation OFF** — warten alle Inhalte darauf, dass Sie sie überprüfen und bestätigen, bevor sie synchronisiert werden.

---

## Überprüfung der Abschlüsse

Gehen Sie zu einem Flow → **View Completions**, um alle generierten Inhalte anzuzeigen.

Pro Element können Sie:

- **Bearbeiten** des generierten Textes manuell
- **Neu generieren** — bitten Sie KI, erneut zu generieren
- **Bestätigen** — genehmigen Sie Inhalte zur Synchronisierung
- **Synchronisieren** — senden Sie an Ihren Shop
- **Revisionen anzeigen** — vollständigen Bearbeitungsverlauf und Diff zwischen Versionen anzeigen

**Massenaktionen:** mehrere Elemente auswählen → Bestätigen & Synchronisieren, Neu generieren oder Senden.

---

## Verdächtige Inhalte

Fozzels kennzeichnet automatisch Inhalte, die falsch aussehen:

- KI-Artefakte: "Sorry, I can't...", "As an AI...", "Note:", "Please"
- Leere Werte
- Doppelt kodiertes HTML (`&lt;`, `&gt;`)
- Markdown-Syntax in einem Nicht-Markdown-Feld
- Ihre benutzerdefinierten verdächtigen Wörter (konfigurieren Sie unter [Einstellungen → Flow-Einstellungen](https://app.fozzels.com/user/settings/flow))

Gekennzeichnete Inhalte zeigen genau, warum sie gekennzeichnet wurden. Sie können:

- Bearbeiten und beheben
- Neu generieren
- Außer Kraft setzen und trotzdem genehmigen (wenn es ein falsches positives Ergebnis ist)

---

## Warum Inhalte nicht synchronisiert werden (Push blockiert) {#why-content-wont-sync-push-blocked}

| Grund | Behebung |
|--------|-----|
| Flow ist inaktiv | Aktivieren Sie das Aktiv-Feld im Flow |
| Nicht bestätigt | Bestätigen Sie den Abschluss (oder aktivieren Sie Automation) |
| Verdächtige Inhalte | Überprüfen und genehmigen Sie, oder bearbeiten Sie und speichern Sie erneut |
| Produkt aus dem Shop gelöscht | Nichts zu tun — Produkt existiert nicht mehr |
| Shop/Integration inaktiv | Aktivieren Sie den Shop oder die Integration |
| Attribut nicht veränderbar | Aktivieren Sie das Mutable-Flag in Integration → Attribute |

---

## Flow-Verwaltung

- **Duplizieren** — kopieren Sie einen Flow auf denselben oder einen anderen Shop
- **Archivieren** — verstecken Sie den Flow von der Hauptliste; Daten bleiben erhalten und können wiederhergestellt werden
- **Löschen** — permanente Entfernung
- **Veraltet** — wenn ein Flow aufgrund von strukturellen Änderungen geklont wird (Zielattribut oder Bedingungen geändert), wird die alte Version veraltet; sein Abschluss-Verlauf bleibt erhalten

### Warnung vor strukturellen Änderungen

Wenn Sie das **Zielattribut** oder die **Bedingungen** in einem Flow ändern, der bereits Abschlüsse hat, warnt Sie Fozzels und bietet an, **"Veraltet und Duplizieren"** — dies erstellt einen neuen Flow mit Ihren Änderungen und bewahrt die Geschichte des alten.

---

## Rekursions-Warnung

Ausgelöst, wenn das gleiche Attribut wie folgt angezeigt wird:

- Ein Attribut in Ihrem Prompt
- Das Ausgabe-Zielattribut

Dies erzeugt eine Endlosschleife — jede Generierung überschreibt die Eingabe für den nächsten Durchlauf.

Behebung:

- Entfernen Sie dieses Attribut aus dem Prompt
- ODER deaktivieren Sie "Bei Attributänderung neu generieren"

---

## Häufige Probleme

**Keine Produkte entsprechen dem Flow**

- Überprüfen Sie Ihre Bedingungen — versuchen Sie, sie temporär zu entfernen, um alle Produkte zu sehen
- Überprüfen Sie, dass die in Bedingungen verwendeten Attribute das Flag **Filterable** in Integration → Attribute haben

**Leere KI-Ausgabe**

- Überprüfen Sie, dass Quellattribute Werte für Ihre Produkte haben
- Überprüfen Sie, dass Attribute, auf die in der Eingabeaufforderung verwiesen wird, das Flag **Filterable** haben
- Machen Sie die Eingabeaufforderung spezifischer

**Inhalte senden nicht an den Shop**

- Überprüfen Sie die [Push-Blockierungsgründe](#why-content-wont-sync-push-blocked) oben
- Überprüfen Sie, dass das Integrations-Aktiv-Feld ON ist
- Überprüfen Sie, dass das Zielattribut das Flag **Mutable** hat

**OpenAI-Kontingent überschritten**

- Laden Sie unter [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing) auf
- Oder reduzieren Sie das tägliche Volumen in Flow-Automatisierungseinstellungen

**Duplizierte Inhalte über Flows**

- Aktivieren Sie "Überlappende Generierung verhindern" mit einem Cooldown-Zeitraum (z. B. 7 Tage)
- Dies verhindert, dass mehrere Flows das gleiche Produkt innerhalb des Cooldown-Fensters neu generieren
