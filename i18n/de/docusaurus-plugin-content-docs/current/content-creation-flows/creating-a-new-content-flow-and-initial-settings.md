---
id: '103000367976'
title: 4.1.2. Erstellen eines neuen Content Flows und erste Einstellungen.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Der Content Flow ist der Kern der Automatisierung in Fozzels. Es ist ein
  Anweisungssatz, der definiert, wie das System das ausgewählte KI-Modell
  verwenden soll, um automat
---

Der Content Flow ist der Kern der Automatisierung in Fozzels. Es ist ein Anweisungssatz, der definiert, wie das System das ausgewählte KI-Modell verwenden soll, um automatisch Texte für Ihre Produkte zu generieren, zu aktualisieren und zu synchronisieren.

## 1\. Erstellen eines neuen Content Flows

1.  **Melden Sie sich** bei Ihrem Fozzels-Konto an.

2.  **Gehen Sie** zum Bereich **Content Flows** im Header-Menü.

3.  **Wählen Sie** den gewünschten Shop aus der Dropdown-Liste **"Shop wählen"**.

4.  **Klicken Sie** auf die Schaltfläche **"Neuer Produkt-Flow"**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/dkNQlB5ollDUkXSZvdTsa61-fyN6j1hZdg.png)

5.  **Geben Sie** den Flow-Namen im Feld **Name** ein (z. B. _Mein erster Content Flow_).

6.  **Wählen Sie** das zu aktualisierende Attribut aus der Dropdown-Liste **Attribut** (z. B. _Beschreibung_).

7.  **Klicken Sie** auf die Schaltfläche **Speichern**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/qDGTsHq3b5SDyDecYwdbl9fFgzUk1HDQpA.png)

8.  **Überprüfen Sie**, dass der neue Flow in der Flows-Liste angezeigt wird.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/ebU6dS9TViRZcxsQAbYNYjTpKnW-jd9Rvg.png)

## 2\. KI- und Modellkonfiguration (Registerkarte 2: KI-Konfiguration)

1.  **Navigieren Sie** zur Registerkarte **KI-Konfiguration** (oder **Nächster Schritt**).

2.  **Wählen Sie** den KI-Anbieter (z. B. _OpenAI | ChatGPT_ oder _Google | Gemini_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/n9NN2mBe7EPu1HcyBY-Xasfs5m2pHHEdaA.png)

3.  **Wählen Sie** das gewünschte KI-Modell (z. B. _GPT-4o (neu)_ oder _Gemini 2.5 Flash Preview_) durch Klicken auf die entsprechende Kachel.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TcZLY49TXUXTtDOIhsZe2EoRUodTwkNTMg.png)

4.  **Aktivieren Sie** optionale Bereicherungsfunktionen wie **Web-Suche aktivieren**, falls erforderlich.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/Hw53qskGZ3nBjK7FjvvsOEEDFznDFpSOpQ.png)

5.  **Legen Sie** im Feld **Bildanzahl** die Anzahl der Bilder (von 1 bis 5) fest, die die KI für die Analyse und Inhaltsgen erierung verwenden wird (optional).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/csny9IgMXvADkHUZbDWfxWYWVQcbXer2wg.png)

6.  **Stellen Sie sicher**, dass die Funktion **Bildgröße ändern** aktiviert ist (empfohlen, um Fehler bei großen Dateien zu vermeiden, erfahren Sie mehr über die Bildgrößenänderung [hier](https://fozzels.freshdesk.com/a/solutions/articles/103000367979)).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/h9tWKVAiOCFtONtDB2tWqYyXwNm8CJR4-g.png)

7.  **Legen Sie** den maximalen Token-Wert (**Max Tokens**) für die Generierung fest.
**_![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TRNywCO8dEOrABpWxX3SZsrBiU9IPpD3Bw.png)_**

8.  **Wählen Sie** den gewünschten Textstil (**Textstile**) aus der Dropdown-Liste (z. B. _Werbung_ oder _Kreativ_)**.**
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/6COvPEOCPMjqptoEaqLECdel__NHP7_q6w.png)

9.  **Wählen Sie** den gewünschten Textton (**Texttöne**) aus der Dropdown-Liste (z. B. _Formal_ oder _Aufgeregt_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/EdX6_M7Fbou3VQRhLIAMcVccLkQ0LXcrJg.png)

10.  **Klicken Sie** auf die Schaltfläche **Speichern**, um die Konfiguration zu speichern.

## 3\. Produktauswahl und Prompt-Erstellung (Registerkarte 3: Flow-Auswahl & Prompt)

1.  **Navigieren Sie** zur Registerkarte **Flow-Auswahl & Prompt**.

2.  **Aktivieren Sie** den Flow durch **Markieren** des Kontrollkästchens **Aktiver Flow**.

3.  **Wählen Sie** das Attribut für die Generierung im Feld **Attribut** (es sollte mit Schritt 1.6 übereinstimmen).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vNOY4ePi2dZDPZTVgzFsZeKva-Ff-TZTEg.png)

4.  Filter anwenden:
    4.1. **Verwenden Sie** den Filterbereich, um die Produkte einzugrenzen, für die Inhalte generiert werden.
    4.2. **Wählen Sie** ein Attribut (z. B. _Farbe_ oder _SKU_), definieren Sie den Operator (Gleich, Enthält, Ist leer usw.) und geben Sie den Wert ein. 4.3. Warnung: Wenn Filter nicht angewendet werden, wird Inhalte für **ALLE** Produkte in Ihrem Shop generiert.
**![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vv-HKjbxUtsGgQ1_c0yv_cdOSFcWpAzKDQ.png)**

5.  **Erstellen Sie** die Anweisung (Prompt) für die KI:
    5.1. **Schreiben Sie** den Kern-Prompt-Text in das zentrale Prompt-Feld. _Das Prompt-Feld kann nicht leer sein._
    5.2. **Fügen Sie** statische Produktdaten (z. B. _Produktname_ oder _SKU_) ein, indem Sie Elemente aus dem Bereich „Attribute" anklicken oder ziehen.
    5.3. **Fügen Sie** dynamische Logik (z. B. _WENN Farbe Blau ist_) für bedingte Inhaltsgenerierung hinzu, indem Sie den Bereich „Attribute (falls ausgefüllt)" verwenden.
    5.4. **Priorisieren Sie** Elemente mit einem hohen Datendichte-Prozentsatz, um eine erfolgreiche Inhaltsgen erierung für die meisten Produkte sicherzustellen.
    5.5 Erfahren Sie mehr über das Erstellen eines Prompts und die Verwendung des Drag-and-Drop-Tools [hier](https://fozzels.freshdesk.com/a/solutions/articles/103000367983).
    5.6 Erfahren Sie mehr über das Speichern und Laden eines erstellten Prompts als Vorlage [hier](https://fozzels.freshdesk.com/a/solutions/articles/103000367846).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/1NaIIRbS4Q7wdMA8cA0jKSnoBsh-XUgdJg.png)

6.  **Klicken Sie** auf **"Speichern und Vorschau"**, um die Produkte anzuzeigen, die die Bedingungen erfüllen (Sie sehen die Gesamtproduktanzahl).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/o0INO3KlijbtEPCvPvScfTbViWXrJonVtw.png)
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/tlD_Xv4nww_sdHQbtB-nYMnM7ys3UZ9TnQ.png)

7.  **Klicken Sie** auf die Schaltfläche **Jetzt generieren** im Vorschau-Popup, um eine Testgenerierung durchzuführen.
    _![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/MF2Dc75ZZc1YdfVh3W57H-gtKgAR4Jq1XA.png)_

## 4\. Automatisierungseinstellungen (Registerkarte 4: Automatisierung)

1.  **Navigieren Sie** zur Registerkarte **Automatisierung**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/jT9iQbF_psMmhbveX_odN1GaB7VTK988lQ.png)

3.  **Legen Sie** die Anzahl der Produkte fest, für die Inhalte pro Ausführung im Feld **Anzahl der Produkte zum Erstellen von Inhalten pro Tag** erstellt werden (z. B. 10).

4.  **Markieren Sie** das Kontrollkästchen **Vollständig automatisch**, wenn der generierte Text **sofort** ohne Bestätigung an Ihren Shop gesendet werden soll. _Die meisten Benutzer deaktivieren diese Option zunächst zur manuellen Überprüfung._

5.  **Markieren Sie** das Kontrollkästchen **Automatisch einen neuen Text erstellen, wenn ein Attribut eines Produkts in Ihrem Shop geändert wird**, um eine Neugenerierung bei Aktualisierung der Quelldaten sicherzustellen.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/rELhAfupqnLV-KmzzijdZcKzYqPy7Y6TlQ.png)

6.  **Aktivieren Sie** die Funktion zur Verhinderung von Inhaltsüberlappungen (falls dies nicht Ihr erster Content Flow ist) (optional)

-   Sie können einen Zeitraum festlegen (**Stunden, Tage, Wochen, Monate oder Jahre**), um zu verhindern, dass das System neuen Inhalte für das spezifische Produktattribut generiert, wenn ein vorheriger Flow es bereits bearbeitet hat.

    -   **Wissenswert:** Wir werden immer noch vergangene Generierungsergebnisse zählen, um Duplikate zu vermeiden, auch wenn der Flow, der sie erstellt hat, gelöscht oder archiviert wurde.
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/bKuoDyZad0Su9sGZC5HVmzZt78JZK3cag.png)

7.  **Klicken Sie** auf die Schaltfläche **Speichern**.

8.  **Führen Sie** den Flow aus:

-   **Planen & Schließen:** Die Generierung wird zur Warteschlange hinzugefügt und startet am nächsten Tag nach der automatischen nächtlichen Produktpool.

    -   **Jetzt ausführen:** Die Generierung startet sofort (für die Anzahl der Produkte, die im Feld _Anzahl der Produkte zum Erstellen von Inhalten pro Tag_ angegeben ist).
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/DR3WD6p7OkbQJcJEUgwKTj-yuvy7HCtong.png)

## 5\. Überprüfung der Ergebnisse (Batch-Liste)

1.  **Klicken Sie** auf die Schaltfläche **Batch-Liste** im aktuellen Flow, um die generierten Batches anzuzeigen.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/s3rLqx0aN3qf63h0ohkm2ITtcQ4dpVGSgw.png)

2.  **Überprüfen Sie** die generierten Daten in der Spalte **Zielattribut**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/krPPKGK1WQcRrrduGQVGEUUTkyNLOhI_2w.png)

3.  **Falls erforderlich**, **bearbeiten Sie** den generierten Text durch Klicken darauf (im Show HTML Modus).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/iiy9xDUPUbNJaN3Dv19ByLztRC6SuuFw_A.png)

4.  **Klicken Sie** auf **"Speichern & synchronisieren"**, um den bestätigten Inhalt manuell an Ihren Shop zu senden.

5.  **Hinweis:** Wenn Fozzels den Inhalt als **"verdächtig"** kennzeichnet, kann er ohne vorherige Neugenerierung nicht synchronisiert werden. **Generieren Sie** den Inhalt erneut, bis er die Überprüfungsanforderungen erfüllt.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/VlcFFEZm3jLMa2CfL0wyEj6i5l4B1n9sYA.png)

![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/lSusJ64-jIyhQStOHHai5u5y8pwWE2YoWw.png)

6\. **Erfahren Sie** mehr über die Überprüfung von Ergebnissen, die manuelle Synchronisierung und den Umgang mit Fehlern in den generierten Inhalten [hier](https://fozzels.freshdesk.com/a/solutions/articles/103000369091).
