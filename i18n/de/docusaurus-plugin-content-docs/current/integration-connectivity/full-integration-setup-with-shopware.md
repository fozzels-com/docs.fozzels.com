---
id: '103000338038'
title: 2.4. Vollständige Integrationseinrichtung mit Shopware
sidebar_position: 6
slug: /integration-connectivity/full-integration-setup-with-shopware
description: 'Diese Anleitung führt Sie durch den vollständigen Prozess der Verbindung Ihres Shopware 6 Online-Shops mit Fozzels. Die Integration besteht aus zwei Teilen: Teil 1: Erstellen einer Integration in Shopware 6'
keywords:
- Inhaltsfluss
- Content-Flow
- Inhaltsgenerierung
- Eingabeaufforderung
- Anweisung
- Abruf
- Datenabruf
---

Diese Anleitung führt Sie durch den vollständigen Prozess der Verbindung Ihres Shopware 6 Online-Shops mit Fozzels.
Die Integration besteht aus zwei Teilen:

# Teil 1: Erstellen Sie eine Integration in Shopware 6

In diesem Teil erstellen Sie eine API-Integration in Ihrem Shopware 6-Admin-Panel. Dies generiert die Anmeldedaten, die Fozzels benötigt, um mit Ihrem Shop zu kommunizieren.

### 1. Einleitung

Gehen Sie zu Ihrem Shopware 6-Admin-Panel. Sie können es normalerweise unter [Ihrer Shop-URL](https://shopware6.fozzels.com/admin) finden.

### 2. Klicken Sie auf "Einstellungen"

Klicken Sie auf "Einstellungen".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/_APoVDYMLEb_oPJsWrg4Fj9HOyB2FWI6g.png)

### 3. Klicken Sie auf "System"

Navigieren Sie zu den Systemeinstellungen.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NE3HjkKRNa353OQJJBzR8eeF_Y9XA9Mi_w.png)

###
4. Klicken Sie auf "Benutzer & Berechtigungen"

Wählen Sie die Option Integrationen aus dem Systemmenü.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/XBGWZJstYupsn7hsyrU1stHBQK9Hh8igVA.png)

### 5. Blättern Sie nach unten zu "Rollen" und klicken Sie auf "Rolle erstellen"

   Blättern Sie auf der Seite "Benutzer & Berechtigungen" zum Abschnitt "Rollen" und klicken Sie auf die Schaltfläche "Rolle erstellen".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/6gkkqh6BDu27YdBmfVYPA7aub9lZQr-Svw.png)

### 6. Geben Sie den Rollennamen ein

Geben Sie auf der Registerkarte "Allgemein" einen Namen für die Rolle ein.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NUafBeJNC09Mi86jv-EVOFyWLidctjzadA.png)

### 7. Klicken Sie auf "Berechtigungen"

Sie sehen die Berechtigungstabelle mit allen deaktivierten Kontrollkästchen. Aktivieren Sie folgende Berechtigungen:

**Kataloge (Anzeigen, Bearbeiten, Erstellen, Löschen):**

- Kategorien
- Dynamische Produktgruppen
- Zielseiten
- Hersteller
- Produkte
- Eigenschaften
- Bewertungen

**Inhalt:**

- Medien (Anzeigen, Bearbeiten, Erstellen, Löschen)
- Shopping Experiences (Anzeigen, Bearbeiten)
- Themes (Anzeigen, Bearbeiten)

**Sonstige** (Anzeigen, Bearbeiten, Erstellen, Löschen):

- Verkaufskanäle

**Einstellungen:**

- Währungen (Anzeigen, Bearbeiten, Erstellen, Löschen)
- Benutzerdefinierte Felder (Anzeigen, Bearbeiten, Erstellen, Löschen)
- Sprachen (Anzeigen, Bearbeiten, Erstellen, Löschen)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/hUqHqVoOiZ0d2J1mJ2IWMFdxxBKX0tVq5g.jpeg)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/PoONXWr6_1SjTd-6iea1UpNsFzfkwxRYpw.jpeg)

### 8. Speichern Sie die Rolle

Klicken Sie nach dem Festlegen aller Berechtigungen auf "Speichern", um die Rolle zu speichern.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A8MHLjtMTc9IvBEae-ZW8vUS8I4hag_G8A.png)

### **9.** Gehen Sie zu System > Integrationen
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A3DBstBn6Ru1Z0789w5hnvK7skD1VrNVhA.png)
**10.** **Klicken Sie auf "Integration hinzufügen"**

Klicken Sie auf die Schaltfläche "Integration hinzufügen". Der Dialog "Integration erstellen" wird angezeigt:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/URMEvVMGXkTNtDY6_YIfXEesdx7AwYJJ2g.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/3hNA53bC00sF1iGxrnL2kynScvKzSZfduA.png)

**11.** Füllen Sie die Integrationsdetails aus

Geben Sie einen Namen für die Integration ein. Öffnen Sie dann das Dropdown-Menü "Rollen" und wählen Sie die Rolle, die Sie zuvor erstellt haben.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/DZY9Dx_ZSKux2NMqdZxEYkFXqeT3JeZVlg.png)

###
12. Kopieren Sie die Access Key ID

Klicken Sie auf das Kopiersymbol neben der **Access Key ID**, um es in die Zwischenablage zu kopieren. Fügen Sie diesen Schlüssel in ein Textdokument ein, um ihn zu schützen - Sie benötigen ihn in Teil 2.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Um8SIf9NDPTA8bYzQbm-H73d4wuiGheBbQ.png)

**13.** **Kopieren Sie den Secret Access Key**

Tun Sie dasselbe für den **Secret Access Key**: Klicken Sie, um den Secret Access Key in die Zwischenablage zu kopieren. Fügen Sie diesen Code dann in ein Textdokument ein, damit Sie ihn später abrufen und kopieren können.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ngrN_TmIbSpPn4vdjAU2urPJ3Orh3b1hcw.png)

### 14. Klicken Sie auf "Integration speichern"

Speichern Sie die Integrationseinstellungen.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/zFiTXyoLwZk0YUyHGn98o27cXlHx8DSBgA.png)

### 15. Bestätigen Sie die Erfolgsmeldung

Die Integration ist jetzt erstellt und aktiv.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ddwo4oRoStm6_leYM-OMhtbNWvrs2B5OkA.png)

###

# Teil 2: Verbinden Sie Fozzels mit Shopware 6

Nachdem Sie die Integration in Shopware erstellt haben, konfigurieren Sie die Verbindung auf der Fozzels-Seite mit den Anmeldedaten aus Teil 1.

### **1.** Gehen Sie zu [Fozzels.com](https://fozzels.com/)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/QNYGtnmJc1jLtdHtrac2heMnCvr8OeCjOw.png)

###
**2.** Klicken Sie auf "Integrationen"
    Klicken Sie im Menü Fozzels auf Integrationen.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p3WWrWl5kNt7ZpAfsTGCttAeYkIT1rVN6A.png)
3. Klicken Sie auf "Erstellen"
    Klicken Sie auf die Schaltfläche "Erstellen", um mit der Einrichtung einer neuen Integration zu beginnen.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/pEdr2LbjwEBHYCnp6d9LPSj4r3fXHoqSRA.png)
4. Wählen Sie das Shopware-Logo

Wählen Sie Shopware als Integrationstyp, indem Sie auf das Shopware-Logo klicken.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/wutV5JMQpq7oa9KVz1xOFlxcjZe7RktGOg.png)5. Füllen Sie die Integrationsdetails aus

Füllen Sie die folgenden Felder der Reihe nach aus:

1. Name — Geben Sie einen Namen für diese Integration ein, z. B. "Shopware 6".

2. URL — Geben Sie die URL Ihres Shopware 6 Online-Shops ein (z. B. https://your-store.com).

3. Access Key ID — Fügen Sie die Access Key ID ein, die Sie in Teil 1 von Shopware kopiert haben.

4. Secret Access Key — Fügen Sie den Secret Access Key ein, den Sie in Teil 1 von Shopware kopiert haben.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/MN0itAjPFkZTRZVpISQu6IiUlmslBesN5w.png)

**6**. Wenn alle Felder ausgefüllt sind, klicken Sie auf "Speichern". Es sollte ein Popup "Erfolg" angezeigt werden, das bestätigt, dass die Verbindung gespeichert wurde.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Hx1KICwgA4nYaOgpQbjeLYyUYMAfwizHIA.png)

### 7. Aktivieren Sie die Integration
    Schalten Sie den Umschalter "Aktiv" ein, um die Integration zu aktivieren.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/CWqB7LNLotQ_hBy-B3upqEFOPuh8GzXOQg.png)
**8.** **Websites und Stores abrufen**
    Klicken Sie auf die Schaltfläche "Websites und Stores abrufen". Fozzels ruft alle Ihre Verkaufskanaldaten von Shopware ab.
   ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/AIptzp_eqV19f60Lq69A3HI-5-jXSkZ8RQ.png)
9. Aktivieren Sie Ihre Shop-Verbindung
    Schalten Sie den Umschalter "Status" für Ihren Shop ein.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/gS02mVXwZyGcf2VSsypNVS3DoBaYSrKftQ.png)

10. Aktivieren Sie Shop-Ansichten / Verkaufskanäle

    Aktivieren Sie die verfügbaren Shop-Ansichten oder Verkaufskanäle, die Sie in Fozzels verwenden möchten.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/1UtVxA_eP1gFWhRvGqpPE7G2CczT4WZGdg.png)

11. Produkte abrufen

### Klicken Sie auf "Produkte abrufen", um Ihre Produktdaten von Shopware abzurufen. Dies kann je nach Anzahl der Produkte eine Weile dauern.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/0liK4TAMuGrDYFNClrrnT2GtrcZKZ6M2jA.png)
**12.** Klicken Sie auf "Nächster Schritt"
    Fahren Sie mit dem nächsten Schritt fort, um die Einrichtung abzuschließen.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p1QaQx8BXoBRslqVdOfwPVQzKjtqvAKl3A.png)

# Einrichtung abgeschlossen

Glückwunsch! Ihr Shopware 6 Shop ist nun vollständig mit Fozzels verbunden. Sie können diese Integration verwenden, um Produkt-Flows zu erstellen und Ihren Produktinhalt direkt von der Fozzels-Plattform aus zu verwalten.

## Erste Schritte

Hier sind einige zusätzliche Artikel, die Ihnen bei den ersten Schritten mit Fozzels helfen können:

- [Erstellen Sie einen neuen Content Flow und erste Einstellungen](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
- [Prompt-Erstellung & Filterung. Drag & Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)

- [Wann werden neue Produkte generiert: Der Pull-Zyklus erklärt](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained)
- [Massenaktionen und operative Kontrolle in den Batch-Listen / Tägliche Gesamtbatch-Liste](/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list)
- [Flow-Definition und Content-Typen (Text, Bild, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)

Oder kontaktieren Sie uns direkt - wir helfen Ihnen gerne weiter!

###
