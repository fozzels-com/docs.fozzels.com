---
id: '103000395378'
title: '2.7. Verbindung von Fozzels mit Akeneo: Der vollständige Setup-Leitfaden'
sidebar_position: 17
slug: >-
  /integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide
description: >-
  Dieser Leitfaden erläutert, wie Sie eine bidirektionale Verbindung zwischen Ihrem Akeneo PIM und Fozzels herstellen. Die Integration erfordert die Erstellung von zwei separaten Verbindungen i
---

Dieser Leitfaden erläutert, wie Sie eine bidirektionale Verbindung zwischen Ihrem Akeneo PIM und Fozzels herstellen. Die Integration erfordert die Erstellung von zwei separaten Verbindungen in Akeneo - eine, um Fozzels zu ermöglichen, Daten in Akeneo zu senden, und eine, um Akeneo zu ermöglichen, Daten zu Fozzels zu exportieren. Nach der Erstellung beider Verbindungen verlinken Sie diese mit Ihrem Fozzels-Konto mit den generierten Anmeldedaten.

**Voraussetzungen**

-   Ein aktives Akeneo-Konto mit Administratorzugriff
-   Ein aktives Fozzels-Konto
-   Zugriff auf den Bereich Verbindungseinstellungen in Akeneo

**Teil 1: Akeneo-Setup (Erstellen von Verbindungen)**

Schritt 1: Anmelden und Navigieren zu Verbindungseinstellungen

1.  Öffnen Sie einen Browser und melden Sie sich in Ihrem **Akeneo-Dashboard** mit Ihren Administratorangaben an.
2.  Navigieren Sie in der linken Seitenleiste zu **Verbinden → Verbindungseinstellungen**.

Schritt 2: Erstellen der „Datenquelle" Verbindung (Fozzels IN)

Diese Verbindung ermöglicht es Fozzels, Daten **in** Akeneo zu senden.

1.  Klicken Sie auf die Schaltfläche **Erstellen** in der oberen rechten Ecke.
2.  Füllen Sie die folgenden Felder aus:
    -   **Etikett:** `Fozzels IN`
    -   **Code:** `fozzels_in`
    -   **Flow-Typ:** wählen Sie `Datenquelle`
3.  Klicken Sie auf **Speichern**.
4.  Scrollen Sie nach unten zum Abschnitt **Berechtigungen**. Im Dropdown **Rolle** wählen Sie `Administrator`.
5.  Klicken Sie erneut auf **Speichern**.
6.  Halten Sie diese Seite offen — Sie benötigen die auf dem Bildschirm angezeigten **Client-ID**, **Secret**, **Benutzername** und **Kennwort**.

> **Tipp:** Kopieren Sie jede Anmeldedaten in eine temporäre Textdatei, damit Sie sie beim Navigieren nicht verlieren.

Schritt 3: Erstellen der „Datenziel" Verbindung (Fozzels OUT)

Diese Verbindung ermöglicht es Akeneo, Daten **zu** Fozzels zu exportieren.

1.  Gehen Sie zurück zu **Verbinden → Verbindungseinstellungen** und klicken Sie auf **Erstellen**.
2.  Füllen Sie die folgenden Felder aus:
    -   **Etikett:** `Fozzels OUT`
    -   **Code:** `fozzels_out`
    -   **Flow-Typ:** wählen Sie `Datenziel`
3.  Klicken Sie auf **Speichern**.
4.  Unter **Berechtigungen** stellen Sie die **Rolle** auf `Administrator`.
5.  Klicken Sie auf **Speichern**.
6.  Kopieren Sie die **Client-ID**, **Secret**, **Benutzername** und **Kennwort** für diese Verbindung.

> **Wichtig:** Jede Verbindung generiert einen eigenen eindeutigen Satz von Anmeldedaten. Stellen Sie sicher, dass Sie beide Sätze separat kopieren und beschriften — Sie müssen jeden in das korrekte Feld in Fozzels einfügen.

**Teil 2: Fozzels-Aktivierung**

Schritt 4: Starten Sie eine neue Integration

1.  Melden Sie sich bei Ihrem **Fozzels-Konto** an.
2.  Navigieren Sie zur Registerkarte **Integrationen**.
3.  Klicken Sie auf **Neue Integration erstellen**.
4.  Wählen Sie **Akeneo**.
    ![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/H4jUsBP_CVGytKdGvILnXxxrewyuDwsEwA.png)

Schritt 5: Füllen Sie Konfigurationsfelder aus

Füllen Sie auf der Seite zum Einrichten der Integration die folgenden Felder aus:

-   **Name:** Geben Sie einen beschreibenden Namen für diese Integration ein (z. B. `Akeneo-Verbindung`)
-   Die **URL** Ihrer Website
-   **OUT-Verbindung (Daten VON Akeneo):** Fügen Sie die Anmeldedaten aus der **Fozzels OUT**-Verbindung ein, die Sie in Schritt 3 erstellt haben
-   **IN-Verbindung (Daten ZU Akeneo):** Fügen Sie die Anmeldedaten aus der **Fozzels IN**-Verbindung ein, die Sie in Schritt 2 erstellt haben

![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/E3PznnpS3GxByBNHd8CfP3zkzZahhRaBWw.png)
Schritt 6: Speichern Sie die Integration

1.  Klicken Sie auf die Schaltfläche **Speichern** am unteren Ende der Seite.

Ihr Fozzels-Konto ist jetzt mit Akeneo verbunden. Daten können in beide Richtungen fließen basierend auf den Verbindungen, die Sie konfiguriert haben.

Wenn Sie während des Setups auf Probleme stoßen, kontaktieren Sie bitte unser Support-Team - wir helfen Ihnen gerne weiter.
