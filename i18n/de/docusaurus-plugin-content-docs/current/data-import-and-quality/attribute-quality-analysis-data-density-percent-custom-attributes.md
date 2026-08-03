---
id: '103000368952'
title: 3.2.1. Attributqualitätsanalyse. Datendichte-Prozentsatz. Benutzerdefinierte Attribute
sidebar_position: 6
slug: /data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes
description: Dieses Dokument bietet sowohl einen konzeptionellen Überblick als auch detaillierte praktische Anweisungen zum vollständigen Lebenszyklus von Produkt-Attributen in der Fozzels-Plattform
keywords:
- Eingabeaufforderung
- Anweisung
- Abruf
- Datenabruf
---

Dieses Dokument bietet sowohl einen konzeptionellen Überblick als auch detaillierte praktische Anweisungen zum vollständigen Lebenszyklus von Produkt-**Attributen** auf der Fozzels-Plattform: von der anfänglichen Importierung und Analyse bis zur erweiterten Konfiguration, Umwandlung und Erstellung benutzerdefinierter Felder.

Attribute sind die **Single Source of Truth** für die KI-Inhaltsgenerierung. Ihre Verwaltung beinhaltet die Kontrolle von **Datendichte**, **Zuordnung** und **Lokalisierung**, was entscheidend für die Erstellung hochwertiger, relevanter und sachlich genauer Produktbeschreibungen ist. Das Einrichten der Attributsammlung vor Arbeitsbeginn (Überprüfung und Deaktivierung nicht relevanter/leerer Felder) ist wesentlich und erleichtert nachfolgende Operationen erheblich.

### Teil 1: Importierung und grundlegende Analyse

#### 1.1. Was sind Fozzels-Attribute?

Attribute sind strukturierte Datenpunkte (z. B. `color`, `price`, `material`), die von Ihrer integrierten Plattform importiert werden. Sie dienen als Eingabevariablen für das **Prompt-Feld** und ermöglichen die Generierung einzigartiger Inhalte für jedes Produkt.

#### 1.2. Einleitung des Pulls

Der Datenimportprozess beginnt mit dem Befehl **Produkte abrufen**.

1.  **Gehen Sie zu** Ihren Integrationseinstellungen und **wählen Sie** die Registerkarte **Websites & Stores**.

2.  **Klicken Sie** auf die Schaltfläche **„Produkte abrufen"** für den aktiven Store.

3.  **Überwachung:** Der Fortschritt wird durch eine Fortschrittsleiste angezeigt. Der Prozess kann mit den Schaltflächen **Stopp**, **Pause** und **Fortsetzen** verwaltet werden.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/6SrlYRiz66TUDmf63b5peXAC6EfLCFTjEw.png)

4.  **Protokolle:** Detaillierte Berichte zu Produkt- und Attributimporten finden Sie unter **„Produktprotokolle anzeigen"** und **„Attributprotokolle anzeigen"** in der Spalte „Aktionen".
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/DLITtFMHc0MmEeK2UDasXyL5ZaBZifO06Q.png)

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/JRoTBrRsovpu033tRmysjhhnEYa-1nIkzg.png)

####
1.3. Qualitätsanalyse: Datendichte-Prozentsatz

Auf der Registerkarte **Attribute** berechnet Fozzels automatisch die Qualität jedes Feldes.

-   **Definition:** **Datendichte** ist der Prozentsatz der Produkte im Katalog, für die dieses Attribut einen nicht leeren, verwendbaren Wert hat.

-   **Verwendung:** Attribute mit niedriger Dichte sollten nur innerhalb von **bedingter Logik** (if-Blöcke) verwendet werden, um zu vermeiden, dass Inhalte mit sachlichen Lücken oder leeren Stellen generiert werden.

-   **Verwaltung:** Sie können Attribute mit 0% Dichte oder solche, die Sie nicht verwenden planen, **deaktivieren** und so die **Flow Builder**-Oberfläche vereinfachen.

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/suceb1fs0FvE76a7CHN6A6JvqnLGLtaL2g.png)

###
Teil 2: Überprüfung und Konfiguration

#### 2.1. Überprüfung von Beispieldaten (Zufällige Beispieldaten abrufen)

Verwenden Sie die Beispieldatenfunktion, um die importierten Werte und ihre Lokalisierung zu überprüfen.

1.  **Klicken Sie** auf die Funktion **„Zufällige Beispieldaten abrufen"** auf der Registerkarte Attribute.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GzPH1l304MY6YjwmxuhHfMjO3s2YS-YD6A.png)

2.  **Wählen Sie** einen Store/Locale aus dem Dropdown-Menü. Dies ermöglicht Ihnen zu sehen, wie Werte für einen bestimmten Sprachmarkt aussehen (z. B. die Farbe „zwart" für einen niederländischen Store gegenüber „black" für einen englischen Store).
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GyKgf3yfF6tWo11gSYr6JXc8Y99q4tIA8Q.png)

3.  **Verwenden Sie** die Schaltflächen **Vorwärts-/Rückwärtspfeil**, um verschiedene Attributwerte aus verschiedenen zufälligen Produkten anzuzeigen.

#### 2.2. Erweiterte Attributbearbeitung (Fenster Attribute bearbeiten)

Wenn Sie auf das Symbol **Bearbeiten** (Stift) auf einem Attribut klicken, öffnet sich das Fenster zur erweiterten Konfiguration.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dUU-_lgywMI5u-f7Y9G9ppxK9QLX_ljCAA.png)

##### Datentransformation

-   **Daten transformieren:** Ermöglicht die **Laufzeitcode-Ausführung** (benutzerdefinierter Code) für den importierten Wert, bevor er gespeichert wird.

##### ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/XMR_zIZH_IM-p4UANnIYB8m37CATk4nhBQ.png)
Technische Flags

-   **Filterbar:** Wenn aktiviert, kann dieses Attribut zum Filtern von Produkten im Katalog/in der Batch-Liste nach seinem Wert verwendet werden.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/EvbjNHS2aedS-hzos_piQd1wAtXba0rJww.png)
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dxX8mUPfJNYVbhVNTB7vDcF--x2JUiW3CQ.png)

-   **Veränderlich:** Wenn aktiviert, hat Fozzels die Berechtigung, Daten **zurück zu schreiben** (zu exportieren) auf dieses Feld in der Quellplattform.

-   **Vererbbar:** Bestimmt, ob der Attributwert eines **übergeordneten** Produkts automatisch auf seine **untergeordneten** Varianten kopiert werden soll.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/24rgLlDhyDeaL87wmVe_rWJG8rNvx4u5YA.png)

-   **HTML erlauben:** Ermöglicht dem Attribut, HTML-Tags zu enthalten und anzuzeigen.

##### Lokalisierung von Attributnamen

-   Auf der Registerkarte **Lokalisierung** können Sie den gewünschten lokalisierten Namen des Attributs für jede verbundene Store-Version **eingeben**.

-   **Ergebnis:** Die eingegebenen lokalisierten Namen werden in den Spaltenüberschriften von Tabellen und im Fenster **Flow Prompt** angezeigt, wodurch die KI das Attribut im Kontext der Store-Sprache verstehen kann.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/hur7c60aN2_gvYH4QGK3hiVS0QSsqaTXBQ.png)
    _für EN Store:_
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2UvshsNaysqHkYC0DA1ZjsYnZ06wRogQfQ.png)

   _für NL Store:_
    _![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/rGRdeC3Lob__8TSrZSZP07ap45ESGV7YcQ.png)_

### Teil 3: Erstellen benutzerdefinierter Attribute

#### 3.1. Zweck benutzerdefinierter Attribute

**Benutzerdefinierte Attribute** sind Felder, die direkt in Fozzels erstellt werden. Sie können als Zielfeld zum Speichern generierter Inhalte oder für berechnete Werte dienen.

#### 3.2. Prozess zur Erstellung neuer Attribute

1.  **Klicken Sie** auf die Schaltfläche **„Neues Attribut"** auf der Registerkarte Attribute.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/LziDSQFwLlpE7kPgzI_R1FSLOGhzqMJhMg.png)

2.  Im Popup-Fenster **„Neues Attribut erstellen"** definieren Sie:
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2nTs3mBYNoxGTi61kVLJbWfr45SFrAV-Qg.png)

-   **Name:** Ein aussagekräftiger Name für die Benutzeroberfläche.

    -   **Code:** Ein eindeutiger technischer Bezeichner.
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/39sh5ONkvBeaLHia--kl0pSjQC34K3wHTQ.png)

    -   **Frontend-Eingabe:** Der Datentyp, den das Attribut enthält (**Text**, **Textarea**, **Select**, **Multiselect**, **Date**, **Boolean**, **Weight** usw.).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dPHGR82fmOzt6JcWICNhXny23ofktRFVw.png)

    -   **Generische Zuordnung:** Standardisieren Sie das Attribut nach der internen Fozzels-Struktur (z. B. **Beschreibung** auswählen).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dhlYPSoDYXoxvTfahRTrFL8wOTxjURLVIQ.png)

3.  **Frontend-Feldanzeige Mit Widget:** Optional wählen Sie ein Widget aus, wie das Feld im Katalog angezeigt wird (z. B. **Kategoriebaum, Bild, Produkt-ID**).

4.  **Klicken Sie** auf **„Speichern"**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/NGdrMyUieEv_wTjftyUbnE47OmN56Ekvlw.png)

5\. Überprüfen Sie das erstellte Attribut im Popup **„Attribut bearbeiten"** und konfigurieren Sie es bei Bedarf.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/aZZ4Pw6tM39wJo25lxXp3PoMSFNptTQxGA.png)
6\. Überprüfen Sie das Ergebnis in der allgemeinen **Attributliste**.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/AYfNwv4-y98aOsUmRM3PnLH68aSQJkC8gw.png)
