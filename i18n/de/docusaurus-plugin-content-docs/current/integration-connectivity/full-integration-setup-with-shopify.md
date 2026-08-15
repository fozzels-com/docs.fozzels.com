---
id: '103000367854'
title: 2.3.3. Vollständige Integrationseinrichtung mit Shopify.
sidebar_position: 5
slug: /integration-connectivity/full-integration-setup-with-shopify
description: Diese Anleitung beschreibt, wie Sie mithilfe von Custom Apps (Private Apps) eine sichere, bidirektionale Verbindung zwischen Ihrem Shopify-Shop und Fozzels herstellen und konfigurieren…
---

Diese Anleitung beschreibt im Detail, wie Sie mithilfe von **Custom Apps** (Private Apps) eine sichere, bidirektionale Verbindung zwischen Ihrem **Shopify**-Shop und **Fozzels** herstellen und die Synchronisierungsparameter konfigurieren.

## Schritt 1: Einrichtung der Shopify Custom App

### 1.1. App erstellen

1.  **Öffnen** Sie einen Browser und **melden Sie sich** in Ihrem **Shopify Admin** an.

2.  **Gehen Sie** in den Bereich **Settings**.

3.  **Wechseln Sie** im Seitenmenü in den Bereich **Apps and sales channels**.

4.  **Klicken Sie** auf **Develop apps**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/FQMhwpXYX9AaHS64ub51WznCudG_HjF_GQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/im1AvTKi6MWYyaB5au2QV52k6g-zKgIJPQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/_flCr1G21Y0eiLDKAAikCGA8aItw-mC2Ng.png)

5. **Klicken Sie** auf **Create an app**.

6. **Tragen Sie** im Pop-up "Create an app" den App-Namen (**Fozzels**) ein und **wählen Sie** im Entwicklerbereich Ihr Konto aus.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/iwwZ8YAvrwc95yWJhOvB1oRxvwcRY-TaUw.png)

### 1.2. Berechtigungen konfigurieren (Scopes)

1.  **Wechseln Sie** in den Bereich **Configure Admin API scope**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Ul-1S5j5J-ff2mqfWD_hCHBbpsCPJPNOJA.png)

2. **Aktivieren Sie** über das Suchfeld die folgenden erforderlichen Berechtigungen: read\_product\_listings , read\_products , write\_products , read\_metaobject\_definitions , read\_metaobjects , read\_product\_feeds .

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Q-ViUfe7pSUU1B02HTAe2_fR-ncQiNevEw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/VlG1HE0ZjQVE-ftYEYNp1-YpSbOdYRXSGw.png)

3. **Achtung!** Wenn Sie in Shopify **Markets** nutzen, um verschiedene Regionen oder Länder zu verwalten, müssen Sie zusätzlich die folgenden Berechtigungen **hinzufügen**: write\_translations , read\_translations , write\_markets , read\_markets , read\_locales .

4. **Prüfen Sie** die vollständige Liste der aktivierten Berechtigungen. Sie sollte so aussehen:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/oRHwBytJR6A9FPaCaQdSSF83Rk5PHBPKiw.png)

5. **Klicken Sie** auf Install app, um die Erstellung abzuschließen.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/mmVlY4rP_YWAoM7ED5aByqLh37nfQomtcA.png)

### 1.3. Zugangsdaten vorbereiten

1.  **Wechseln Sie** in den Bereich **API credentials**.

2.  **Kopieren** und **speichern Sie** alle Felder, die Sie für die Eingabe in Fozzels benötigen.
    2.1. **Kopieren Sie** den API key aus Shopify (für das Feld API key in Fozzels).
    2.2. **Kopieren Sie** den API Secret key aus Shopify.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/8XPxI0phlV2LNnbr1Aj-4wH3VCl_q62JQw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/0VUTxufo_k1f9p3im2fqQ0x1mA9tu4gAIg.png)

## Schritt 2: Integration in Fozzels anlegen

### 2.1. Verbindung einrichten

1.  **Melden Sie sich** unter `https://app.fozzels.com` in Ihrem Fozzels-Konto an.

2.  **Gehen Sie** in den Bereich **Integration**.

3.  **Klicken Sie** auf **„New Integration“**.

4.  **Wählen Sie** die Plattform **Shopify** aus.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Pyzl5zTGARVEwFahvJ9LgtWhqC42AkOW-Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/9ZDhsVks6A3bEPfvWW2KUSi_LC5nxPkKKA.png)

5. **Tragen Sie** den Namen Ihrer Integration ein.

6. **Tragen Sie** die URL des Shopify-Webshops ein.

**Hinweis!** Verwenden Sie in den Feldern URL und App Host Name immer die Subdomain `.myshopify.com` und nicht die "echte" URL. Beispiel: `teststore.myshopify.com`.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/5Es2Xe5K4kX7G9ceTSqa0zcRdqY7LOd18w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/2V9Pr-82uxKsTQw5vzihFFVkdOXXeYRTYg.png)

7. **Kopieren** und **fügen Sie** alle erforderlichen Felder in Fozzels **ein**.
    7.1. **Fügen Sie** den API key aus Shopify in das Feld API key in Fozzels ein.
    7.2. **Fügen Sie** den API Secret key aus Shopify in das Feld API Secret in Fozzels ein.
    7.3. **Fügen Sie** den App Host Name ein.

8. **Schalten Sie** den Schalter **Markets or LangShop** ein, um Content für Produkte aus verschiedenen Shops synchronisieren zu können (für Locales, nicht nur für den Standardshop).

9. **Klicken Sie** auf die Schaltfläche **Save**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/10MdEKRe3CAXM8phYawwasjHybRh5utDcg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/1gUl8bf3vOc8OzNHXG0e2xOkIOfqafgQgQ.png)

### 2.2. Aktivierung und Synchronisierung

1.  **Aktivieren Sie** die Integration.

2.  **Rufen Sie** Websites und Stores **ab**.

3.  **Stellen Sie sicher**, dass die Integration die folgenden Status hat und die aktuellen Websites und Stores angezeigt werden:
    3.1. Authorized: yes
    3.2. REST API Connected: yes

4.  **Aktivieren Sie** Websites und Sprachen über die Schalter. _Die Standardsprache des Markts ist mit einem Stern markiert._

5.  **Klicken Sie** auf die Schaltfläche **„Pull Products“**, um den Abruf von Produkten und Attributen zu starten. **Warten Sie**, bis die Produkte geladen sind (der Fortschritt wird im Fortschrittsbalken angezeigt).

6.  **Wechseln Sie** auf den Tab **„Attributes“**, um die geladenen Attribute anzusehen, zu aktivieren/deaktivieren oder zu bearbeiten. **Lesen Sie** [hier](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes) mehr über die Verwaltung der Attribute.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/hf-7P91OunPrATXrTjI-eheh4APzl3yMTQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/QoYt9ReC4xDN26VlS3LlMJMq_48shcVFYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/nRpJNQGSWcWm_BelS7-uGiBdpAXGz7G4nA.png)

_\* Die Standardsprache des Markts ist mit einem Stern markiert_

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/BRzfcGMI7cun1wQGg3Vv1VHM9WbikgIqMg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/XOn4d1hw9r48sW-PN1cKj0Mr5B4q-HxITA.png)

Nachdem die Integration erfolgreich erstellt wurde, können Sie mit dem Aufbau von Flows **beginnen** und Ihren **[ersten Content](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)** in Fozzels **generieren**!
