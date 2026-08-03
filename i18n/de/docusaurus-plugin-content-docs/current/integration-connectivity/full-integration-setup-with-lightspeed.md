---
id: '103000367856'
title: 2.6. Vollständige Integrationseinrichtung mit Lightspeed.
sidebar_position: 16
slug: /integration-connectivity/full-integration-setup-with-lightspeed
description: >-
  Diese Anleitung zeigt, wie Sie eine sichere bidirektionale API-Verbindung zwischen Ihrem Lightspeed eCom Shop und Fozzels etablieren, indem Sie den erforderlichen API-Schlüssel und das API-Secret im Lightspeed Manager generieren
---

Diese Anleitung zeigt, wie Sie eine sichere bidirektionale API-Verbindung zwischen Ihrem Lightspeed eCom Shop und Fozzels etablieren, indem Sie den erforderlichen API-Schlüssel und das API-Secret im Lightspeed Manager generieren.
Die Lightspeed-Integration erfordert die Erstellung eines dedizierten neuen API-Schlüssels und das Festlegen spezifischer Lese- und Schreibberechtigungen (Scopes), um Fozzels das sichere Abrufen von Produktdaten und das Zurückübertragen von KI-generierten Inhalten in Ihren Katalog zu ermöglichen.

### Teil 1: Lightspeed-Einrichtung (Generieren von API-Anmeldedaten)

Sie müssen auf Ihr Lightspeed-Konto zugreifen, um das erforderliche API-Schlüsselpaar zu erstellen und zu aktivieren.

#### **Schritt 1: Anmelden und Navigieren zu API-Einstellungen**

1. **Öffnen** Sie einen Browser und **melden Sie sich** im Lightspeed eCom Back Office (Lightspeed Retail Manager) mit Ihren Administratorberechtigungen an.

2. Gehen Sie im Hauptmenü von Lightspeed zum Bereich **"Einstellungen"**.

3. **Suchen** und **wählen** Sie "API-Schlüssel" oder "Entwickler".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/MZv-XXhmVP6BJaa1Bodx1omwsE79Sz8QMg.png)

####
**Schritt 2: Erstellen Sie einen neuen API-Schlüssel**

1. **Klicken** Sie auf die Schaltfläche "API-Schlüssel hinzufügen" oder "Neuer Schlüssel".

2. **Benennen** Sie die Integration eindeutig (z. B. Fozzels Integration).

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/C88N5mBpcnAN8OkGn8_qwt9UDUb2JF1Z9w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/AzUkWXCCt69kJBjU9LTQpJgW0iLlNd56yw.png)

####

####
**Schritt 3: Berechtigungen festlegen (Scopes)**

Die Einstellungsseite für die neue Verbindung wird automatisch geöffnet. Sie **müssen** die erforderlichen Berechtigungen für Fozzels auswählen.
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/CioSxLGTyO3ZE1aF8NeArPcp8qx-oz22mw.png)

1. **Stellen Sie sicher**, dass Lese- und Schreibberechtigungen für folgende Abschnitte gewährt werden:
    - Inhalt → lesen und schreiben

- Produkte → lesen und schreiben

- Einstellungen → lesen und schreiben

Hinweis: Die Gewährung von "Schreibzugriff" ermöglicht Fozzels, Daten in Ihrem Lightspeed-Shop zu aktualisieren und eine bidirektionale Synchronisierung zu gewährleisten.)

####
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/qQg2365EfWu2BevBccdOrXyc1jnZs_p1Pg.png)**Schritt 4: Aktivierung und Kopieren der Schlüssel**

1. Schalten Sie in der oberen rechten Ecke der Berechtigungseinstellungsseite den Umschalter **ein** (aktivieren Sie diesen API-Schlüssel).

2. **Klicken** Sie auf die Schaltfläche "Speichern".

3. **Blättern** Sie zum Block "Details".

4. Zum Anzeigen des **API Secret (Secret Key)** **klicken** Sie auf die Schaltfläche "Anzeigen".

5. **Kopieren** Sie beide Schlüssel (**API-Schlüssel** und **API-Secret**) für den nächsten Schritt.

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/YDWX-BrATu6YaqEag_egzmNrIb_mD9VfJQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/sjIxSoTRRX4BVp_klePTX0i1orEGgq1eFg.png)
Erwartetes Ergebnis: In der Entwicklerliste wird jetzt ein Eintrag für die erfolgreich erstellte und aktive Fozzels-Verbindung angezeigt.)

### Teil 2: Fozzels-Aktivierung und Datensynchronisierung

Übertragen Sie die kopierten Schlüssel auf die Fozzels-Plattform und initiieren Sie die Synchronisierung.

#### **Schritt 5: Starten Sie eine neue Integration**

1. **Melden Sie sich** in Ihrem Fozzels-Konto an.

2. **Gehen Sie zu** der Integrationsseite.

3. **Klicken** Sie auf die Schaltfläche "Neue Integration".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aXXjYseZEe8aGbAnzQXq0LsF6GCxXYmSCQ.png)

4. **Wählen** Sie "Lightspeed" aus der Liste der verfügbaren Dienste.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aYuT19m6Pe5D1XRvGXFAKXPJF1jq5__j1g.png)

#### **Schritt 6: Konfigurationsfelder ausfüllen**

Füllen Sie auf der Seite "Neue Integration erstellen" folgende Felder aus:

1. **Name:** **Geben Sie** einen klaren Namen für diese Integration ein (z. B. Lightspeed_INT).

2. **URL:** **Geben Sie** die URL Ihres Lightspeed-Shops ein.

3. **API-Schlüssel:** **Fügen** Sie den von Lightspeed kopierten API-Schlüssel ein.

4. **API-Secret:** **Fügen** Sie das von Lightspeed kopierte API-Secret ein.

5. **Sprache:** **Wählen** Sie die Hauptsprache Ihrer Website.

6. **Cluster:** **Wählen** Sie den entsprechenden Cluster (Region), in dem Ihr Lightspeed-Shop gehostet wird.

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/rmiVHOPB99FOtO7FZUQ0_YI_ma2jqnnB1w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/HY4qeR3DTL_8O1hm3il8lNhcNpKi2XECUw.png)

**Schritt 7: Integration aktivieren und speichern**

1. **Aktivieren** Sie die Integration, indem Sie den Umschalter "Aktiv" in der oberen rechten Ecke **ein**schalten.

2. **Klicken** Sie auf die Schaltfläche "Speichern".

#### **Schritt 8: Websites & Stores-Einrichtung und Datenabruf**

Sie werden nun zur Registerkarte "Websites & Stores" (Schritt 2) in Fozzels wechseln.

1. **Klicken** Sie auf die Schaltfläche "Websites und Stores abrufen".

2. **Aktivieren** Sie die erforderlichen Websites und Stores, indem Sie die entsprechenden Umschalter **Status** auf **Ein** schalten.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/FARHG3ynyx8xadPlNcxi8OeOH6UTmF3J7Q.png)

3. Für jeden erforderlichen Shop **klicken** Sie auf die Schaltfläche **"Produkte abrufen"**. Diese Aktion startet das initiale Laden von Produktdaten in Fozzels.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/QuBZPoYbMSBquMmbbycLgRYnd-2U4mjjbA.png)

Nachdem der Produktladeprozess abgeschlossen ist, ist Fozzels einsatzbereit! Sie können zur Registerkarte "Attribute" gehen, um Ihre Synchronisierungsregeln zu konfigurieren. Detaillierte Anweisungen zum Arbeiten mit Produktattributen und zum Anpassen von Datenfeldern finden Sie unter: 3.1. Importieren und Katalogübersicht.
