---
title: Dashboard-Übersicht und Kontingentgrenzen
sidebar_position: 9
slug: /account-core-resources/dashboard-overview-and-account-usage-limits
description: >-
  Das Dashboard ist die Startseite von Fozzels und gibt Ihnen einen
  Echtzeit-Überblick über Ihre Kontonutzung — Integrationen, Shops,
  Flows und Abschlüsse gegen Ihre Plan-Kontingente.
---

Das Dashboard ist die Startseite von Fozzels. Es gibt Ihnen einen Echtzeit-Überblick über Ihre Kontonutzung.

Gehen Sie zum [Dashboard](https://app.fozzels.com/dashboard)

---

## Statistikleiste

Der obere Teil der Seite zeigt 6 wichtige Metriken. Jede zeigt **aktuelle Anzahl / Plan-Kontingent**:

| Statistik | Was wird gezählt |
|------|---------------|
| **Integrationen** | Insgesamt erstellte Integrationen (aktiv oder nicht) |
| **Websites** | Aktivierte Websites über alle Integrationen hinweg |
| **Shops** | Aktivierte Shops über alle Integrationen hinweg |
| **Flows** | Aktive Content Flows (archivierte Flows zählen nicht) |
| **Abschlüsse heute** | Bis jetzt heute generierte KI-generierte Inhaltselemente (Reset Mitternacht UTC) |
| **Abschlüsse diesen Monat** | In diesem Kalendermonat generierte KI-generierte Inhaltselemente |

> Eine Statistik in **rot oder orange** angezeigt bedeutet, dass Sie Ihr Plan-Kontingentlimit erreicht oder fast erreicht haben.

---

## Zwei getrennte Grenzen zum Verständnis

Fozzels hat **zwei unabhängige Abrechnungssysteme**, die leicht verwechselt werden können:

### 1. Plan-Kontingente (Abonnement)

Ihr Abonnementplan setzt strenge Grenzen für:

- Anzahl der Integrationen, Websites, Shops und aktiven Flows, die Sie haben können
- Anzahl der Abschlüsse pro Tag und pro Monat

Diese werden in der Dashboard-Statistikleiste angezeigt. Wenn ein Kontingent erreicht wird, wird die Aktion **blockiert**, bis Sie aktualisieren.

→ Verwalten unter [Plans](https://app.fozzels.com/user/settings/plans)

### 2. Guthabensaldo (Pay-per-Use)

Jedes Mal, wenn KI Inhalte generiert, kostet dies Credits aus Ihrem Guthaben.

- Credits sind unabhängig von Ihrem Abonnement — Sie können einen Plan haben, aber null Credits
- Wenn das Guthaben auf null fällt, wird die Generierung blockiert, auch wenn Ihr Plan-Kontingent dies zulässt
- Kosten: ca. €0,06 pro 750 Wörter KI-Ausgabe
- Manuell aufladen oder automatisches Aufladen konfigurieren

→ Verwalten unter [Payments](https://app.fozzels.com/user/settings/payments)

**Beide Grenzen müssen erfüllt sein**, damit die Generierung funktioniert: Sie benötigen verbleibende Plan-Kontingent UND einen positiven Guthabensaldo.

---

## Schaltfläche Plan aktualisieren

Sichtbar, wenn Sie nicht auf dem Unlimited-Plan sind. Wenn Sie darauf klicken, werden Sie direkt zu [Plans](https://app.fozzels.com/user/settings/plans) geleitet, um zu aktualisieren.

---

## Analysediagramm

Zeigt die Aktivität der Inhaltserstellung im Zeitverlauf — wie viele Abschlüsse pro Tag erstellt wurden. Verwenden Sie es, um:

- Spitzen in der Nutzung zu erkennen
- Zu sehen, ob Ihre Flows wie erwartet ausgeführt werden
- Zu überprüfen, ob die Generierung unerwartet gestoppt hat

---

## Häufig gestellte Fragen zum Dashboard

**"Abschlüsse heute" ist 0, obwohl ich Flows ausgeführt habe**

- Stellen Sie sicher, dass Ihre Flows auf **Aktiv** eingestellt sind
- Überprüfen Sie, ob Ihr Flow heute ausgeführt wurde (die Generierung ist geplant — lösen Sie manuell aus, um zu testen)
- Überprüfen Sie Ihren Guthabensaldo unter [Payments](https://app.fozzels.com/user/settings/payments) — wenn es null ist, wird die Generierung blockiert

**Statistiken aktualisieren sich nicht**

- Das Dashboard wird beim Laden der Seite aktualisiert; aktualisieren Sie die Seite erzwungen (Strg+F5 / Cmd+Umschalt+R)

**Ich habe mein Plan-Limit erreicht**

- Aktualisieren Sie Ihren Plan unter [Plans](https://app.fozzels.com/user/settings/plans)
- Oder deaktivieren Sie nicht verwendete Shops / archivieren Sie nicht verwendete Flows, um Kontingent freizugeben

**Ich kann keine weiteren Flows erstellen**

- Entweder haben Sie das aktive Flow-Kontingent erreicht, oder Sie befinden sich auf einem Plan, der die Flow-Anzahl begrenzt
- Überprüfen Sie Ihre Plan-Grenzen unter [Plans](https://app.fozzels.com/user/settings/plans)

**Abschluss-Kontingent aufgebraucht, aber ich habe noch Credits**

- Plan-Kontingente und Credits sind unabhängig — das Plan-Kontingent hat Vorrang
- Sie müssen Ihren Plan aktualisieren, um diesen Monat/Tag mehr Inhalte zu generieren

**Was ist der Unterschied zwischen "Abschlüsse heute" und "Abschlüsse diesen Monat"?**

- "Heute" setzt sich jede Mitternacht UTC zurück; "dieser Monat" setzt sich am 1. jedes Monats zurück
- Einige Pläne begrenzen beide (z. B. 100/Tag und 3.000/Monat) — je nachdem, welche zuerst erreicht wird, blockiert die Generierung
