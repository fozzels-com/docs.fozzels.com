---
id: '103000410190'
title: 2.10.1 Vollständige Integrationseinrichtung mit Salesforce.
sidebar_position: 21
slug: /integration-connectivity/full-integration-setup-with-salesforce
description: Diese Anleitung führt Sie durch das Anlegen einer neuen Salesforce-Commerce-Cloud-Integration – von der ersten Einrichtung über das Speichern der Konfiguration bis zur Aktivierung von Websites &…
---

Diese Anleitung führt Sie durch das Anlegen einer neuen Salesforce-Commerce-Cloud-Integration – von der ersten Einrichtung über das Speichern der Konfiguration bis zur Aktivierung von Websites & Stores, dem Abruf der Produktdaten und der Prüfung der Attributzuordnungen. Sie erfahren, wie Sie die erforderlichen Verbindungsdaten eintragen (Short Code, Organization ID, Client ID/Secret), wie der Global Pull Schedule mit UTC-Zeit funktioniert, und wann es sinnvoll ist, Verzögerungen für Anfragen zu konfigurieren.

## Schritt 1: Zum Anlegen der Integration navigieren

1.  Gehen Sie im Seitenmenü zu **Home → Integrations**.
2.  Klicken Sie auf die Schaltfläche **Create** (oben rechts).
3.  Wählen Sie auf dem Bildschirm **"Choose your integration"** die Plattform **Salesforce** aus.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/IJA_dZ5zfXA48PaD8HMxsHD71ItRVgwANg.png)
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/sTmy2P9U7mD0ENp0NC-gg8Y0oT53ZtfzLg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/bbv7bi_E2qSTk1bDVEN706lCu7fETDnn1g.png)
Damit öffnet sich das Formular **Create New Integration**, das aus drei Schritten besteht: **1\. Configuration → 2. Websites & Stores → 3. Attributes**.

## Schritt 2: Konfigurationsformular ausfüllen
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/_4n7-QBaGDhtz4yq_LpPLXF5t7s-sE-_vQ.png)

### Hauptfelder:

| Feld | Beschreibung |
| --- | --- |
| **Name**\* | Name der Integration – dient der Identifikation in der Integrationsliste |
| **URL**\* | Basis-URL Ihrer Salesforce-Commerce-Cloud-Instanz |

**Konfigurationsblock:**

| Feld | Beschreibung |
| --- | --- |
| **Short Code**\* | Short Code Ihrer Salesforce-Commerce-Cloud-Instanz |
| **Organization ID**\* | Ihre Salesforce-Organisations-ID |
| **Client ID**\* | ID des im Salesforce Account Manager erstellten OAuth-Clients |
| **Client Secret**\* | Geheimer Schlüssel dieses OAuth-Clients |
| **Image CDN Base URL** _(optional)_ | Basis-URL des CDN (DIS), über das Produktbilder heruntergeladen werden. Beispiel: `https://exxe.ххххх.commercecloud.salesforce.com/dw/image/v2/XXXX-XXX` |

_Mit einem Sternchen (\*) markierte Felder sind Pflichtfelder._

## Schritt 3: Global Pull Schedule

Über den Schalter **Overwrite Global Pull Schedule** legen Sie fest, wann die Produktsynchronisierung laufen soll. Ist er deaktiviert, gilt der globale Standardzeitplan (`03:30`).

> ⚠️ **Wichtig: Die Zeit wird in UTC angegeben**
>
> Das Feld Global Pull Schedule verwendet **UTC-Zeit**, nicht Ihre lokale Zeitzone.
>
> Das ist vor allem dann relevant, wenn Sie mehrere Stores in verschiedenen Regionen betreiben: Eine Uhrzeit, die für den einen Store außerhalb der Stoßzeiten (nachts) liegt, kann für einen anderen genau in die Hauptverkehrszeit fallen. Ein Datenabruf während der Stoßzeiten erzeugt zusätzliche Last auf Ihrer Website und kann sie für Käuferinnen und Käufer verlangsamen.
>
> **Empfehlung:** Wenn Ihre Stores unterschiedliche Zeitzonen bedienen, verlassen Sie sich nicht allein auf den Global Pull Schedule – überschreiben Sie den Zeitplan pro Store (`Overwrite Global Pull Schedule` in den Einstellungen des jeweiligen Stores) und wählen Sie eine Uhrzeit, die dem tatsächlichen Zeitfenster außerhalb der Stoßzeiten dieses Stores entspricht, umgerechnet in UTC.

## Schritt 4: Delay Between Pages / Delay Between Requests

Die Felder **Delay between pages** und **Delay between requests** legen eine Pause fest (in Millisekunden, Bereich 100–15000 ms) – zwischen Ergebnisseiten beziehungsweise zwischen einzelnen API-Anfragen.

> ℹ️ **Tipp:** Diese Felder sind optional. Bleiben sie leer, gilt die Standardverzögerung der Plattform.
>
> Wir empfehlen, diese Werte bei der Ersteinrichtung der Integration **nicht sofort zu setzen**. Führen Sie stattdessen einige Datenabrufe mit den Standardeinstellungen durch und beobachten Sie das Ergebnis:
>
> -   Laufen die Abrufe erfolgreich durch, ist keine weitere Konfiguration nötig.
> -   Treten Fehler auf (zum Beispiel Rate Limiting seitens Salesforce), kehren Sie in die Integrationseinstellungen zurück und erhöhen Sie die Verzögerung, um die API zu entlasten.

## Schritt 5: Speichern

Sobald alle Pflichtfelder ausgefüllt sind, klicken Sie auf **Save**, um zum nächsten Schritt zu gelangen – **Websites & Stores**.

## Schritt 6: Websites & Stores

Nach dem Klick auf **Save** werden Sie zum Tab **2\. Websites & Stores** der Integration weitergeleitet.

> ✅ _Sie sehen eine Erfolgsmeldung: "Integration was created successfully. Please, do not forget to activate your Integration."_

### 1\. Integration aktivieren

Bevor Sie Ihre Stores/Websites abrufen können, schalten Sie **Active** auf ON (oben rechts auf der Seite, in der Statusleiste der Integration: Active / Authorized / REST API Connected).

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/Fn99DCFxArzsidpIraptWFwTO-BnqzkyTg.png)

### 2\. Websites und Stores abrufen

Klicken Sie auf die Schaltfläche **PULL WEBSITES AND STORES**. Damit wird die Verbindung zu Salesforce autorisiert und Ihre verfügbaren Websites und Stores werden abgerufen.

> ✅ Nach erfolgreichem Abruf sehen Sie: "Integration status has been updated" und anschließend "Your websites and stores was pulled from integration successfully". Die Indikatoren **Authorized** und **REST API Connected** werden grün (✓).

### 3\. Websites und Stores aktivieren

Nach dem Abruf sehen Sie eine Tabelle, die in **Websites** (Name, Code, Status) und **Stores** (Language, Status, Pull schedule, Products, Pull Progress, Actions) unterteilt ist.

Schalten Sie jede **Website** und jeden **Store** einzeln auf Active.

> ℹ️ **Hinweis:** Ein Stern (⭐) neben dem Namen einer Website oder eines Stores kennzeichnet den **Standard-Eintrag (primär)**.

### 4\. Produkte abrufen

Sobald ein Store aktiv ist, wird die Schaltfläche **Pull products** freigeschaltet. Ein Klick darauf startet den Abruf der Produktdaten.

> ℹ️ **Hinweis:** Ein Abruf führt tatsächlich **4 aufeinanderfolgende Schritte** aus, die als einzelne Fortschrittsbalken angezeigt werden, wenn Sie Pull Progress aufklappen (über den Dropdown-Pfeil neben der Schaltfläche):
>
> 1.  **Product Attribute**
> 2.  **Category Attribute**
> 3.  **Category**
> 4.  **Product**
>
> Jeder Schritt hat einen eigenen Fortschrittsbalken und ein **Refresh**-Symbol, um genau diesen Schritt einzeln erneut auszuführen. Außerdem hat jeder Schritt ein **View logs**-Symbol, über das Sie das detaillierte Protokoll dieses Abrufschritts einsehen können.
>
> Die Schritte **Category** und **Product** haben zusätzlich ein **View in catalog**-Symbol, mit dem Sie direkt zu den abgerufenen Kategorien/Produkten in Ihrem Katalog springen.

Sobald alle 4 Schritte 100 % erreicht haben, zeigt der Hauptbalken **Pull Progress** den Wert **"Product - 100%"** an.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/AXWOgFul8iBQWgLq0jQ5k5HmCHYYds3MQQ.png)

## Schritt 7: Attributes

Der dritte und letzte Schritt, **Attributes**, zeigt die Liste der aus Ihrem Salesforce-Katalog abgerufenen Attribute samt ihrem Zuordnungsstatus.

### Umschalter für den Attributmodus

Standardmäßig zeigt die Tabelle **Product**-Attribute an. Oberhalb der Tabelle gibt es einen Umschalter mit drei Optionen:

-   **Product**
-   **Category**
-   **Brand**

> ⚠️ **Hinweis:** Für diese Integration werden **Brand**-Attribute **noch nicht unterstützt** – auch wenn die Option im Umschalter erscheint.

Der Wechsel zwischen den Modi ändert, welche Attributgruppe angezeigt wird. Wechseln Sie zum Beispiel zu **Category**, sehen Sie kategoriespezifische Attribute wie `Category ID`, `Description`, `Name`, `Page Description`, `Page Keywords`, `Page Title`.

### Tabellenspalten:

| Spalte | Beschreibung |
| --- | --- |
| **Name** | Attribut-ID und Bezeichnung (z. B. `35759: Brand`, `35777: Category ID`) |
| **Code** | Der technische Attributcode aus Salesforce (z. B. `brand`, `ean`, `origin_category_id`) |
| **Scope** | Geltungsbereich des Attributs (sofern zutreffend) |
| **Generic Mapping** | Ob das Attribut einem generischen/System-Feld zugeordnet ist |
| **Allow HTML** | Ob für dieses Attribut HTML-Inhalte zulässig sind (✓/—) |
| **Data Density Percent** | Anteil der Produkte/Kategorien, die tatsächlich einen Wert für dieses Attribut haben — hilft, dünn befüllte Felder zu erkennen (z. B. `Page Keywords` bei 26 %, `Category ID` bei 100 %) |
| **Example data** | Ein Beispielwert aus einem echten Datensatz (Produkt oder Kategorie, je nach Modus) |
| **Active** | Ob das Attribut aktuell aktiv/in Verwendung ist (✓) |
| **Actions** | Symbol zum Bearbeiten (✏️), um die Attributzuordnung zu konfigurieren |

### Optionen der Symbolleiste:

-   Dropdown **Actions** – Massenaktionen für ausgewählte Attribute
-   **Store-Auswahl** (z. B. Mystore`: en_us (en_US)`) – legt fest, aus welchem Store Beispieldaten geladen werden
-   **Get random example data** – sobald ein Store im Dropdown ausgewählt ist, füllt diese Funktion die Spalte **Example data** mit einem frischen, zufällig gewählten Beispielwert je Attribut – nützlich, um die Zuordnung zu überprüfen
-   **Column visibility** – Tabellenspalten ein-/ausblenden
-   **New Attribute** (oben rechts) – manuell ein benutzerdefiniertes Attribut ergänzen, das nicht in der Standardliste enthalten ist

> ℹ️ **Hinweis:** Die standardmäßig angezeigten Attribute sind der **Basissatz**, der out of the box bereitgestellt wird (z. B. Brand, EAN, Long Description, Price im Product-Modus; Category ID, Name, Description im Category-Modus). Enthält Ihr Salesforce-Katalog **benutzerdefinierte Attribute**, ergänzen und ordnen Sie diese über die Schaltfläche **New Attribute** manuell zu.

## Schritt 8: Ein Attribut bearbeiten

Ein Klick auf das Symbol ✏️ **Edit attribute** in der Spalte Actions öffnet das Pop-up **Edit attribute** mit allen Details zu diesem Attribut – manche Felder sind bearbeitbar, andere sind schreibgeschützte System-Werte.

### Felder:

| Feld | Beschreibung |
| --- | --- |
| **Entity Type** | Ob das Attribut zu **Product**, **Category** oder **Brand** gehört _(schreibgeschützt)_ |
| **Name (Origin Attribute Name on Integration)** | Der Anzeigename des Attributs, wie er aus Salesforce kommt (z. B. `Long Description`) |
| **Code** | Der interne Attributcode (z. B. `longDescription`) |
| **Origin Attribute ID** | Die ID des Attributs auf Seiten der Quellintegration (sofern definiert) |
| **Origin Attribute Code** | Der Code des Attributs, wie er auf Salesforce-Seite existiert (z. B. `longDescription`) |
| **Frontend input** | Der Eingabetyp, mit dem dieses Feld angezeigt/bearbeitet wird (z. B. `Textarea`) |
| **Frontend Field Display With Widget** | Optionales Widget zur Darstellung dieses Felds im Frontend |
| **Generic Mapping** ℹ️ | Ordnet dieses Attribut, sofern zutreffend, einem generischen/System-Feld zu |
| **Transform Data** | Fortgeschritten: erlaubt **Code-Ausführung zur Laufzeit**, um die eingehenden Daten vor dem Speichern zu transformieren _(⚠️ mit einer Warnung markiert – für fortgeschrittene/technische Nutzung)_ |

### Checkboxen:

| Option | Beschreibung |
| --- | --- |
| **Allow HTML** | Ob in diesem Feld HTML-Inhalte zulässig sind |
| **Enabled** | Ob das Attribut aktiv und in Verwendung ist |
| **Filterable** | Ob dieses Attribut als Filter genutzt werden kann (z. B. in der Katalognavigation) |
| **Mutable** ℹ️ | Ob der Wert nach dem ersten Abruf geändert/überschrieben werden kann |
| **Inheritable** ℹ️ | Ob der Wert vererbt wird (z. B. von einer übergeordneten Kategorie oder dem Standard-Store) |

### Lokalisierung

Weiter unten können Sie pro **Website** (z. B. `Mystore`) und je aktivem **Locale** (z. B. `en_us (en_US)`) direkt einen **lokalisierten Wert** für dieses Attribut eingeben oder bearbeiten – zum Beispiel, um den für diese spezifische Website/Locale angezeigten Text `Long Description` zu überschreiben.

Klicken Sie auf **Save**, um die Änderungen zu übernehmen, oder auf **Cancel**, um sie zu verwerfen.

> ⚠️ **Achtung:** Das Feld **Transform Data** erlaubt die Ausführung von Code zur Laufzeit – das ist eine Funktion für Fortgeschrittene. Fehlerhafter Code kann hier die Datenverarbeitung für dieses Attribut beschädigen. Nutzen Sie sie nur, wenn Sie die benötigte Transformationslogik verstehen, oder halten Sie im Zweifel einen Kontakt zum Support-Team bereit.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dXfx5OPU1hiT51CXn8LiDQwH-TEXGJXdVg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iV0xwN-jnstAKKgixyaCk_xrX_YowzggDg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dFxEvhIpzZghLVLLDiYbGvsGjZphndAgYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/N4ix6-rdWoomYb4sDO8JzYCvCdyhKxL3Cg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iSFTjf50J_sPVCyMi1T5KeoayFI8zi9FHg.png)

An dieser Stelle ist die Salesforce-Integration selbst vollständig konfiguriert: autorisiert, verbunden, mit aktivierten Websites/Stores und erfolgreich abgerufenen Produktdaten.

Die nächsten Schritte – das Einrichten von **Catalogs** und der Aufbau des **Flows** – laufen genauso ab wie bei jedem anderen Integrationstyp und sind in der allgemeinen Integrationsdokumentation beschrieben, nicht spezifisch für Salesforce.
