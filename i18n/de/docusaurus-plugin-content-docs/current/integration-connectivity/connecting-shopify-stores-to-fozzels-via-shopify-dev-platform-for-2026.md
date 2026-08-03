---
id: '103000385597'
title: 2.3.2. Verbindung von Shopify-Stores mit Fozzels über die Shopify Dev Platform für 2026
sidebar_position: 4
slug: /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: WICHTIGER HINWEIS Ab dem 1. Januar 2026 ändert Shopify offiziell seine Regeln für die Anwendungsverwaltung. Die alte Methode zum Erstellen von „Private Apps" d
---

WICHTIGER HINWEIS

Ab dem 1. Januar 2026 ändert Shopify offiziell seine Regeln für die Anwendungsverwaltung. Die alte Methode zum Erstellen von „Private Apps" direkt im Store Admin wird eingestellt. Alle neuen Verbindungen und Aktualisierungen zu bestehenden Integrationen müssen jetzt über die Shopify Dev Platform durchgeführt werden.

1.  Autorisierung

1.1. Melden Sie sich im offiziellen Shopify Developer Dashboard an: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard)

2.  Zugriff auf das App-Erstellungsmenü

2.1. Nach dem Anmelden im Dashboard:

-   Wählen Sie den Abschnitt Apps in der linken Seitenleiste.

-   Klicken Sie in der oberen rechten Ecke auf die Schaltfläche App erstellen (je nach Art Ihres Kontos kann Ihre Schnittstelle etwas anders aussehen. Wenn Sie diese Schaltfläche nicht sehen, scrollen Sie bitte zum unteren Ende der Seite. Es sollte einen anklickbaren Link mit der Bezeichnung **„App erstellen"** geben)
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/e9TIxK8eDP1_39W_QK6q8V792TllGbJshg.png)

###

3.  Auswahl der Erstellungsmethode und Benennung

3.1. Auf dem Auswahlbildschirm:

-   Wählen Sie die zweite Option auf der rechten Seite — Von Dev Dashboard starten.
    Diese Methode ermöglicht es Ihnen, API-Anmeldedaten schnell zu generieren, ohne eine Befehlszeilenschnittstelle zu verwenden.

-   Geben Sie im Feld App-Name einen beschreibenden Namen ein (z. B. Fozzels\_APP).

-   Klicken Sie auf die Schaltfläche Erstellen.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/aOyMompGNxvMk8AwTspY6_RThyDKNEsWcw.png)

4.  Versionskonfiguration und obligatorische Einstellungen

        4.1. Nach dem Klicken auf Erstellen werden Sie zur Seite Version erstellen weitergeleitet.
 ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/5WoUJ-Qq7qALDUUuzlNBWf0V0lxaSjhlbQ.png)

4.2. Name und App-URL

-   Geben Sie den Namen der App ein

-   Geben Sie die URL Ihres Stores ein (z. B. [https://your-store-name.myshopify.com](https://your-store-name.myshopify.com)).

4.3. Obligatorische Einstellung

-   App in Shopify Admin einbetten: muss aktiviert sein.
    Dies stellt sicher, dass die Fozzels-Schnittstelle in Ihrem Shopify Admin-Bedienfeld angezeigt wird.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/fCpNrLVZblbWTWkIntCgl86EmrjmORG6BQ.png)

5.  Konfiguration des API-Zugriffs (Scopes)

5.1. Scrollen Sie nach unten zum Abschnitt Zugriff, um zu definieren, welche Daten Fozzels verwalten kann.

5.2. Im Block Scopes:

-   Klicken Sie in der oberen rechten Ecke auf den Link Scopes auswählen.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/RgsEpex9lyPaJ8AyOjR4-So8df3QeQ6Fcw.png)

6.  Auswahl von Berechtigungen

6.1. Im modalen Fenster Scopes auswählen:

-   Verwenden Sie die Suchleiste, um bestimmte Berechtigungen zu finden.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/wQoW7bQIW9fqRTTnrHwUO9bIMpWZ6tDL_w.png)

    6.2. Erforderliche Berechtigungen
    Diese Liste ist für alle Store-Typen, einschließlich Stores mit Shopify Markets und Sprachseiten, erforderlich.

Produkte: read\_product\_listings, read\_products, write\_products, read\_product\_feeds.

Metadaten: read\_metaobject\_definitions, read\_metaobjects.

Übersetzungen: read\_translations, write\_translations.

Gebietsschemas: read\_locales.

    Märkte: read\_markets, write\_markets.
    oder kopieren/einfügen Sie dies

    read\_locales,read\_markets,write\_markets,read\_metaobject\_definitions,read\_metaobjects,read\_product\_feeds,read\_product\_listings,read\_products,write\_products,read\_translations,write\_translations
    6.3. Klicken Sie auf Fertig, sobald alle erforderlichen Scopes ausgewählt sind.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/Y-HyRqCHeriVdpYrrHm2aJyi7Y8OUVBTDw.png)
    7. Checkliste vor der Veröffentlichung: App-Konfiguration

-   Bevor Sie auf die Schaltfläche Freigeben klicken, überprüfen Sie Folgendes:

-   App-URL: eine gültige Store-URL wird eingegeben (z. B. [https://store-name.myshopify.com](https://store-name.myshopify.com)).

-   API-Version: Die Webhooks-API-Version ist auf die neueste stabile Version eingestellt (z. B. 2025-10).

-   Embedded Interface: „App in Shopify Admin einbetten" ist aktiviert (erforderlich für Fozzels).

-   Obligatorische Scopes: Alle erforderlichen Berechtigungen sind vorhanden:

-   Produkte: read\_product\_listings, read\_products, write\_products, read\_product\_feeds

-   Metadaten: read\_metaobject\_definitions, read\_metaobjects

-   Übersetzungen: read\_translations, write\_translations

-   Gebietsschemas: read\_locales

-   Märkte: read\_markets, write\_markets

-   Scope-Überprüfung: Alle Berechtigungen enthalten den erforderlichen Lese- und Schreibzugriff, sofern zutreffend.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/nE6aiS2K21Vs_e5K45UMqgI7KjTAAvev9g.png)

8. Freigabe der Version

8.1. So aktivieren Sie die Konfiguration:

-   Suchen Sie die Schaltfläche Freigeben in der oberen rechten Ecke der Seite Version erstellen.

-   **Klicken Sie auf Freigeben.**

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/lMRrK6F1zY287cIilwfdL7zuoi-eQJsO2A.png)

8.2. Im Pop-up-Fenster:

-   Versionsnamen (optional): z. B. v1.
    Falls leer gelassen, generiert Shopify automatisch einen Namen.

-   Versionsmitteilung (optional): z. B. „Anfängliches Setup für Fozzels".

8.3. **Klicken Sie auf die Schaltfläche Freigeben** in der unteren rechten Ecke, um abzuschließen.

Der Versionsstatus wird auf **Aktiv** geändert.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/m8pxnVX5dNifvnh6z0IXZfDMkkMqS2RQwA.png)

###
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/BA5mQQb2jWU5J80LBoSsUOIs1OoRl3M3EA.png)

9.  Abrufen von API-Anmeldedaten

9.1. Im Shopify Dev Dashboard gehen Sie in der linken Seitenleiste zu **Einstellungen**.

9.2. Im Abschnitt **App-Anmeldedaten** (API-Schlüssel) kopieren Sie Folgendes:

-   Client-ID (API-Schlüssel)

-   Client Secret (API Secret Key)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/VAGvtjJ3zAMPYkyQu6vUbofnGVh7jLqYyw.png)

10. A Installation starten

10.1. Nach der Veröffentlichung GEHEN Sie zur Registerkarte App-Startseite.

    10.2. Stellen Sie sicher, dass Sie sich auf der Registerkarte Startseite befinden.
Wenn Ihr Konto nur eine Website hat und Sie Fozzels ausschließlich für diese Website verwenden möchten, klicken Sie einfach auf **App installieren**. Die App wird automatisch installiert.
Wenn Sie ein Partner-Konto haben oder mehrere Websites verwalten, müssen Sie die Verteilungseinstellungen für die Fozzels-App konfigurieren.

10.3. Öffnen Sie in der linken Seitenleiste die Registerkarte Verteilung.

    10.4. Klicken Sie auf Verteilungsmethode auswählen und wählen Sie **Benutzerdefinierte Verteilung**.
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/pa4OKRyCk3kJpPajX3ZzHmcMAbZkGU_7Eg.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XfVKpSARlwl_mvRyvXXrMLHhUdvZ7M7Suw.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/eq2IpYTVXtyGiP9Pxu2xCSHWHkNCpmP1CA.png)

10.6. Nach der Autorisierung kehren Sie zur Seite Benutzerdefinierte Verteilung zurück.

-   Geben Sie Ihre Store-Domain ein (z. B. your-store.myshopify.com).

-   Klicken Sie auf Link generieren.

-   Bestätigen Sie die Aktion im Pop-up-Fenster.

10.7. Sie werden zur Seite App installieren in Ihrem Store Admin weitergeleitet.

-   Klicken Sie auf Installieren.

-   Bestätigen Sie die Meldung „Diese App ist exklusiv für Ihren Store".

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/tCyXVtYOydxTaxoxfZezfHkC0FxDe9xsBw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/R8WiM6_-2NXlrFjFg29bxZA7IkZVz9oISQ.png)

10.8. Um die Synchronisierung abzuschließen, kehren Sie zu Ihrem Fozzels-Konto zurück, um die Anmeldedaten einzugeben und die Verbindung abzuschließen.

11. Erstellen Sie eine Integration in Fozzels.

11.1. Verbindungs-Setup

-   Melden Sie sich bei Ihrem Fozzels-Konto an: [https://app.fozzels.com](https://app.fozzels.com)

-   Gehen Sie zum Abschnitt Integration.

-   Klicken Sie auf Neue Integration.

-   Wählen Sie Shopify als Plattform.

-   Wählen Sie den Verbindungstyp Custom APP.

-   Geben Sie den Namen der Integration ein.

-   Geben Sie die Shopify Webstore-URL ein.

Hinweis:
Verwenden Sie für die URL- und App Host Name-Felder immer die Domäne .myshopify.com, nicht die öffentliche Store-URL.
Beispiel: teststore.myshopify.com

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/sF_OsmKhLhv87WeuVC4_yxL77LH9O2-uAw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XLCPhjqaC_s3HQuyjSEhw6SsdnMZDal0vA.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/TzMbd_ReJA8hdEjYW1EFgKWryHEquafa0w.png)

12. Geben Sie API-Anmeldedaten in Fozzels ein

12.1. Kopieren und fügen Sie die Anmeldedaten in Fozzels ein:

-   API-Schlüssel → API-Schlüsselfeld

-   API Secret Key → API Secret Feld

-   App Host Name → App Host Name Feld

13. Zusätzliche Einstellungen und Access Token-Generierung

13.1 **Aktivieren Sie die Umschalter Markets oder LangShop**, wenn Sie Inhalte über mehrere Märkte oder Sprachen hinweg synchronisieren möchten.

13.2 Klicken Sie auf die Schaltfläche Speichern. Das Access Token-Feld ist nach der Generierung verfügbar.
13.3 Gehen Sie zur Registerkarte Websites und Stores.
13.4 Aktivieren Sie Ihre Integration.
13.5 Klicken Sie auf die Schaltfläche Websites und Stores pullen, um sie zu erhalten.
13.6 Das System generiert das Access Token automatisch nach erfolgreicher Autorisierung.

14. Aktivierung und Synchronisierung

14.1. Aktivieren Sie Websites und Sprachen mit Umschaltern. Die Standardsprache ist mit einem Stern gekennzeichnet.

14.2. Klicken Sie auf Produkte pullen, um mit dem Import von Produkten und Attributen zu beginnen. Der Fortschritt wird in der Fortschrittsleiste angezeigt.

14.3. Gehen Sie zur Registerkarte Attribute, um die importierten Attribute anzuzeigen, zu aktivieren, zu deaktivieren oder zu bearbeiten. Weitere Informationen zur Verwaltung der Attribute  [finden Sie hier](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/) .

Nach erfolgreichem Erstellen der Integration können Sie **beginnen** Sie Flows zu erstellen und Ihre **[ersten Inhalte](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)** zu **generieren**!
