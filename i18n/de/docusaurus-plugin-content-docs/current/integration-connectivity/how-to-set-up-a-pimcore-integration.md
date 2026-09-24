---
title: 2.11.1. So richten Sie eine Pimcore-Integration ein
sidebar_position: 23
slug: /integration-connectivity/how-to-set-up-a-pimcore-integration
description: >-
  Verbinden Sie Ihren Pimcore-Produktkatalog über das DataHub-Modul mit Fozzels:
  Bereiten Sie Endpoint und API-Schlüssel in Pimcore vor, füllen Sie das
  Konfigurationsformular aus und importieren Sie Ihre Produkte.
---

Diese Anleitung hilft Ihnen, Ihren Pimcore-Produktkatalog Schritt für Schritt mit Fozzels zu verbinden.

## Bevor Sie beginnen: Vorbereitung in Pimcore

Fozzels verbindet sich über das Modul **Datahub** mit Pimcore, ein in Pimcore integriertes Werkzeug, das den Zugriff auf Ihre Daten über eine API ermöglicht.

In Ihrer Pimcore-Instanz muss ein **Datahub endpoint** konfiguriert sein (möglicherweise hat Ihr Pimcore-Administrator dies bereits eingerichtet). Falls nicht, wenden Sie sich an ihn oder an unser Support-Team. Sie benötigen:

- **Endpoint-Name:** in Pimcore unter **Datahub** im Feld **Name**.
- **API-Schlüssel:** wird neben dem Endpoint auf dem Tab **Security Definition** im Feld **Datahub API Keys** angezeigt.

![Pimcore → Datahub → Ihr Endpoint → Tab General. Das Feld Name enthält hier Ihren Endpoint-Namen](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/01-datahub-endpoint-general-tab.png)

![Der Tab Security Definition enthält Ihren API-Schlüssel und die Zugriffsregeln unter Workspace](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/02-datahub-security-definition-tab.png)

> **Wichtig:** In den Einstellungen des Endpoints (Tab **Security Definition → Workspaces**) muss Lesezugriff (**Read**) auf die relevanten Objekte gewährt sein, vor allem auf den Ordner mit Ihren Produkten (zum Beispiel `/products`). Wenn Ihre Produkte auf mehrere verschachtelte Ordner verteilt sind, stellen Sie sicher, dass für alle Zugriff gewährt ist.

## 1. Die Integration erstellen

1. Gehen Sie zu **Home → Integrations**.
2. Klicken Sie auf **Create**.
3. Wählen Sie die Plattform **Pimcore**.

![Pimcore aus der Liste der Integrationsplattformen auswählen](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/03-choose-pimcore-platform.png)

## 2. Das Konfigurationsformular ausfüllen

![Name, URL, DataHub endpoint, API key und die optionalen Felder Product/Category class](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/04-configuration-form.png)

| Feld | Was Sie eingeben |
| --- | --- |
| **Name** | Name der Integration, zu Ihrer eigenen Orientierung |
| **URL** | Basisadresse Ihrer Pimcore-Instanz (zum Beispiel `https://your-company.pimcore.com`) |
| **DataHub endpoint** | Der Endpoint-Name aus Pimcore (zum Beispiel `fozzels`) |
| **API key** | Der Zugriffsschlüssel aus Pimcore (vom Tab Security Definition) |
| **Product class** | Leer lassen, wenn Ihre Produkte in einer Klasse namens `Product` gespeichert sind. Nur ausfüllen, wenn die Klasse anders heißt |
| **Category class** | Wie oben: leer lassen, wenn Kategorien in einer Klasse namens `Category` gespeichert sind |
| **Asset folder** | Optional. Nur erforderlich, wenn Fozzels neue Produktbilder für Sie generieren soll und diese in Pimcore gespeichert werden müssen (zum Beispiel `/products`) |

![Das Feld Languages und der Schalter Include unpublished objects](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/05-languages-and-include-unpublished.png)

| Feld | Was Sie eingeben |
| --- | --- |
| **Languages** | Kommagetrennte Liste von Sprachcodes (zum Beispiel `nl,en`). Jede Sprache wird in Fozzels zu einem eigenen **Store** |
| **Include unpublished objects** | Standardmäßig ausgeschaltet. Schalten Sie dies ein, wenn bei der Synchronisierung auch unveröffentlichte Produkte und Kategorien (Entwürfe) abgerufen werden sollen. Sie werden genauso verarbeitet wie reguläre |

### Synchronisierungsplan (Global Pull Schedule)

Sie können den Standardplan beibehalten oder **Overwrite Global Pull Schedule** aktivieren und eine eigene Uhrzeit festlegen.

> **Uhrzeit in UTC:** Die Uhrzeit wird in **UTC** angegeben, nicht in Ihrer lokalen Zeitzone. Wenn die Synchronisierung nachts nach Ihrer Ortszeit laufen soll, rechnen Sie Ihre lokale Nachtzeit in UTC um, bevor Sie sie hier eingeben.

### Verzögerung zwischen Anfragen

Wir empfehlen, diese Felder **nicht sofort auszufüllen**. Führen Sie zunächst einige Synchronisierungen mit den Standardeinstellungen durch. Wenn alles gut funktioniert, ist keine weitere Konfiguration nötig. Wenn Fehler auftreten, kehren Sie hierher zurück und fügen Sie eine kleine Verzögerung hinzu.

Klicken Sie auf **Save**.

## 3. Aktivieren und Produkte importieren

1. Schalten Sie den Schalter **Active** ein (oben rechts).
2. Klicken Sie auf **PULL WEBSITES AND STORES**. Fozzels ruft Ihre Sprachen als separate Stores ab.
3. Aktivieren Sie die Schalter der relevanten Website und Stores.
4. Klicken Sie auf **Pull products**, um Produkte, Kategorien und deren Attribute zu importieren.

## Wenn weniger Produkte als erwartet importiert wurden

Wenn weniger Produkte in Fozzels importiert wurden, als Sie in Pimcore haben, liegt das meist an Produkten, die in Pimcore nicht veröffentlicht sind (Status **unpublished/draft**). Schalten Sie in den Integrationseinstellungen (Configuration) den Schalter **Include unpublished objects** ein und führen Sie die Synchronisierung erneut aus.

> **Tipp:** Nach dem Aktivieren erhalten die Produkte ein neues Attribut **Published** (Yes/No). Damit können Sie Produkte im Katalog filtern oder einen bestimmten Flow darauf beschränken, zum Beispiel wenn Sie nur veröffentlichte Produkte verarbeiten möchten.

![Produkte in Manage Products nach dem Attribut Published filtern](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/06-manage-products-published-filter.png)

Weitere mögliche Ursachen sind ein eingeschränkter Zugriff auf einige Produktordner oder Produkte, die in Pimcore auf mehrere Klassen verteilt sind. In diesen Fällen wenden Sie sich am besten an uns oder an Ihren Pimcore-Administrator, um die Zugriffseinstellungen zu überprüfen.

Wie Sie weitere Attribute bereitstellen, etwa das Veröffentlichungs-Flag oder Ihre Bildergalerie, erfahren Sie in [2.11.2. Pimcore: Attribute über DataHub bereitstellen](/integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery).

Das war's: Ihr Pimcore-Katalog ist jetzt verbunden. Sie können die Daten jederzeit aktualisieren, indem Sie erneut auf **Pull products** klicken.
