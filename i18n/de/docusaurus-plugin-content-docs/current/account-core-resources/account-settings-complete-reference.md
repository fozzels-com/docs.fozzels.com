---
title: Kontoeinstellungen — Vollständige Referenz
sidebar_position: 10
slug: /account-core-resources/account-settings-complete-reference
description: Jeder Bereich der Fozzels-Kontoeinstellungen erläutert — Profil, Sicherheit, Benachrichtigungen, OpenAI-Token, API-Tokens, Flow-Einstellungen, Prompt-Vorlagen, Medien, Pläne, Zahlungen und Transaktionen.
keywords:
- Inhaltsfluss
- Content-Flow
- Inhaltsgenerierung
- Eingabeaufforderung
- Anweisung
- Abruf
- Datenabruf
- Fertigstellung
- Generierung
---

Gehen Sie zu [Einstellungen](https://app.fozzels.com/user/settings) — die linke Seitenleiste enthält alle Bereiche.

---

## Profil

Konfigurieren Sie Ihre persönlichen Kontodetails:

- **Name, E-Mail, Unternehmen, Telefon**
- **Avatar** — laden Sie ein JPG- oder PNG-Foto hoch
- **Sprache** — EN, NL, DE oder ES (ändert die Sprache der Fozzels-Benutzeroberfläche)
- **Zeitzone** — wichtig für Pull-Zeitpläne, die standardmäßig in UTC ausgeführt werden; wenn Sie Ihre Zeitzone einstellen, werden geplante Zeiten korrekt angezeigt

---

## Sicherheit

Ändern Sie Ihr Kontokennwort:

- Geben Sie Ihr aktuelles Kennwort ein
- Geben Sie ein neues Kennwort ein und bestätigen Sie es

---

## Benachrichtigungen

Wählen Sie, welche E-Mails Fozzels Ihnen sendet:

- **Produkt-E-Mails** — Nachrichten, Tipps und Feature-Ankündigungen von Fozzels
- **Gutschein-Benachrichtigung** — Benachrichtigung, wenn Ihr Guthabensaldo auf null fällt

---

## Open AI Token

Fügen Sie Ihren eigenen OpenAI-API-Schlüssel hinzu, um Ihre persönliche OpenAI-Abrechnung anstelle von Fozzels-Credits zu verwenden.

- Wenn eingestellt, verwenden alle OpenAI-basierten Flows und der KI-Assistent Ihren Schlüssel direkt
- Sie benötigen immer noch ein Mindestguthaben von €0,01 in Fozzels, um diese Funktion zu nutzen
- Lassen Sie es leer, um den Fozzels-Plattformschlüssel zu verwenden (Credits werden von Ihrem Guthaben abgezogen)

---

## API (Persönliche Zugangstoken)

Erstellen Sie API-Tokens für programmgesteuerten Zugriff auf Fozzels:

- Geben Sie jedem Token einen Namen
- Tokens können jederzeit widerrufen werden
- Verwenden Sie Tokens, um Fozzels mit externen Tools zu integrieren oder Aufgaben über die API zu automatisieren

---

## Flow-Einstellungen

Globale Einstellungen, die auf alle Content Flows angewendet werden, sofern nicht pro Flow außer Kraft gesetzt.

### Trusted HTML Tags

Whitelist von HTML-Tags, die in KI-generierten Inhalten zulässig sind. Nur Tags in dieser Liste werden beibehalten, wenn die Ausgabe in einem HTML-Attribut verwendet wird.

### Suspicious Words

Liste von Wörtern oder Phrasen, die generierte Inhalte automatisch zur manuellen Überprüfung kennzeichnen.

Standard-verdächtige Wörter enthalten KI-Artefakte wie "As an AI", "I cannot", "Sorry". Sie können:

- Ihre eigenen Wörter hinzufügen (z. B. Konkurrenten-Namen, verbotene Phrasen)
- Standardeinträge entfernen, die zu falsch-positiven Ergebnissen führen

Abschlüsse, die verdächtige Wörter enthalten, können nicht automatisch synchronisiert werden — sie erfordern manuelle Überprüfung und Bestätigung.

### Completion Cooldown (Global)

Mindestzeit zwischen KI-Regenerationen für das gleiche Produkt über alle Flows hinweg.

Format: Geben Sie eine Nummer und eine Einheit ein (Stunden, Tage, Wochen).

Einzelne Flows können:

- **Diese globale Einstellung erben**
- **Mit ihrem eigenen Cooldown außer Kraft setzen**
- **Den Cooldown vollständig ausschalten**

---

## Prompt-Vorlagen

Speichern Sie wiederverwendbare Prompt-Vorlagen zur Verwendung in mehreren Flows.

- Geben Sie jeder Vorlage einen Namen und einen Inhalt
- Referenzieren Sie Vorlagen beim Erstellen oder Bearbeiten eines Flow, anstatt die Eingabeaufforderung von Grund auf zu schreiben
- Nützlich zur Aufrechterhaltung eines konsistenten Tones und Formats über Flows hinweg

---

## Medien

Ihre Medienbibliothek — Bilder und Dateien, die in Fozzels hochgeladen oder generiert wurden.

---

## Pläne

Anzeigen und ändern Sie Ihren Abonnementplan.

Gehen Sie zu [Plans](https://app.fozzels.com/user/settings/plans)

Jeder Plan zeigt:

- Name und Beschreibung
- Enthaltene Features
- Kontingente: max. Integrationen, Shops, aktive Flows, tägliche Abschlüsse, monatliche Abschlüsse
- Preis

Zum Upgrade oder Downgrade: klicken Sie auf **Plan wählen** → Stripe-Kasse → bestätigen Sie die Zahlung.

### Verfügbare Pläne

| Plan | Integrationen | Shops | Flows | Abschlüsse/Tag | Abschlüsse/Monat |
|------|-------------|--------|-------|-----------------|-------------------|
| **Trial** | 1 | 1 | 1 | begrenzt | begrenzt |
| **Starter** | 6 | 18 | unbegrenzt | — | — |
| **Ultra Light** | 1 | 1 | 4 | 1.000 | 30.000 |
| **Light** | 1 | 3 | 5 | 30 | 900 |
| **Plus** | 3 | 6 | 15 | 75 | 2.250 |
| **Premium** | 6 | 18 | 60 | 100 | 3.000 |
| **Unlimited** | unbegrenzt | unbegrenzt | unbegrenzt | unbegrenzt | unbegrenzt |

> Wenn ein Kontingent überschritten wird, wird die Aktion mit einer Nachricht blockiert, die zum Plans-Seite führt.

---

## Zahlungen (Credits)

Gehen Sie zu [Payments](https://app.fozzels.com/user/settings/payments)

Fozzels verwendet ein **Pay-per-Use-Kreditsystem** — unabhängig von Ihrem Abonnementplan. Credits werden verbraucht, jedes Mal wenn KI Inhalte generiert.

**Kosten:** ungefähr €0,06 pro 750 Wörter generierte Inhalte.

**Beispiel:** 1.000 Produktbeschreibungen von ~200 Wörtern ≈ €16

### Verwalten Sie Ihren Saldo

- **Aktueller Saldo** — angezeigt in der orangefarbenen Box
- **Guthaben jetzt aufladen** — manuelles einmaliges Aufladen über Stripe
- **Automatisches Aufladen konfigurieren** — legen Sie einen Schwellenwert und einen Aufladebetrag fest
  - Beispiel: Laden Sie automatisch €50 auf, wenn das Guthaben unter €10 fällt
- **Kundenabrechnung-Portal** — Stripe-Portal zur Verwaltung von Zahlungsmethoden und zum Herunterladen von Rechnungen

### Zahlungsverlauf

Die Tabelle zeigt alle bisherigen Gebühren mit Datum, Betrag und Status.

### Häufige Abrechnungsprobleme

- **"Sie haben Ihr aktuelles Kontingent überschritten"** — Ihr Guthaben ist null oder Ihr OpenAI-API-Schlüssel ist abgelaufen
  - Laden Sie unter [Payments](https://app.fozzels.com/user/settings/payments) auf oder fügen Sie Ihren eigenen OpenAI-Schlüssel in Einstellungen → Open AI Token hinzu
- **Automatisches Aufladen nicht auslösen** — überprüfen Sie, dass der Schwellenwert festgelegt ist und eine Zahlungsmethode im Stripe-Portal gespeichert ist

---

## Transaktionen

Vollständiger Verlauf aller Credit-Abzüge — zeigt, welcher Flow oder Abschluss Credits verbraucht hat, wie viele Tokens verwendet wurden und die Kosten pro Vorgang.

---

## Wiederverkäufer-Zugriff

Wenn ein Wiederverkäufer Ihr Konto verwaltet, wird deren Zugriff in den Kontoeinstellungen angezeigt. Sie können **Wiederverkäufer-Zugriff jederzeit von dieser Seite aus widerrufen**.

Wenn sich ein Wiederverkäufer in Ihrem Konto anmeldet, wird die Header-Leiste schwarz.
