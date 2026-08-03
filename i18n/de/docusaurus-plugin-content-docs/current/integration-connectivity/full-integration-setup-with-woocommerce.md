---
id: '103000367857'
title: 2.5.1. Vollständige Integrationseinrichtung mit WooCommerce.
sidebar_position: 7
slug: /integration-connectivity/full-integration-setup-with-woocommerce
description: >-
  Um eine sichere Verbindung zwischen Fozzels und WooCommerce zu gewährleisten, müssen die folgenden Schritte abgeschlossen werden, um die speziellen API-Schlüssel (Customer Key und Customer Secret) im WooCommerce-Konto zu generieren
---

Um eine sichere Verbindung zwischen Fozzels und WooCommerce zu gewährleisten, müssen die folgenden Schritte abgeschlossen werden, um die speziellen API-Schlüssel (Customer Key und Customer Secret) im WooCommerce-Konto zu generieren.

Konfiguration in WooCommerce

**Schritt 1: Melden Sie sich in WooCommerce an**
1. Öffnen Sie einen Browser und melden Sie sich in Ihrem WooCommerce-Konto an.
2. Verwenden Sie die Administratoranmeldung und das Passwort.

**Schritt 2: Navigieren Sie zu API-Einstellungen**
1. Gehen Sie im Hauptmenü von WooCommerce zur Registerkarte "**Einstellungen**" / Erweitert / REST API.
2. Wählen Sie "**Schlüssel hinzufügen**".

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8hyIPD4Wb1FFvgYBaXywZ2Xs18Lh-bvT4Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/gQDALB5owHDmdRHVghvUxrIVGr9XLh00iA.png)

**Schritt 3: Erstellen Sie einen neuen API-Schlüssel**1. Fügen Sie die Beschreibung hinzu und wählen Sie die erforderlichen Berechtigungen "**Lesen und Schreiben**" aus dem Dropdown im **neuen API-Schlüssel**.

2. Drücken Sie die Schaltfläche "**API-Schlüssel generieren**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/LNqOK_83FuQdSlwU4GQ0k9hPLpjPOMhitw.png)
Hinweis: Die Gewährung von "Schreibzugriff" ermöglicht es Fozzels, nicht nur Daten zu lesen, sondern auch Daten in Ihrem WooCommerce-Shop zu aktualisieren und eine bidirektionale Synchronisierung zu gewährleisten.
Wenn Sie alles richtig gemacht haben, wird ein Fenster mit den generierten Schlüsseln für die neue Integration angezeigt. Sie erhalten auch die Meldung: "API-Schlüssel erfolgreich generiert. Stellen Sie sicher, dass Sie Ihre neuen Schlüssel jetzt kopieren, da der geheime Schlüssel ausgeblendet wird, wenn Sie diese Seite verlassen." Übertragen Sie diese Schlüssel in die Integrationseinstellungen in Fozzels.

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/zNaRYoJwobBx3j5TEjYQOR-iVDLfWwFk_w.png)
Konfiguration in Fozzels
**Schritt 4:** **Starten Sie eine neue Integration**
1. Melden Sie sich in Ihrem Fozzels-Konto an.
2. Gehen Sie zur Seite "Integrationen".
3. Klicken Sie auf die Schaltfläche "**Neue Integration**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/0oMe6Sytpwp09lVWoNbVjCMY2Gr5Ii3l4w.png)

4. Wählen Sie "**WooCommerce**" aus der Liste der verfügbaren Services.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/VygL8-i0y-Ufor6pSGr_Zfk9ob9PmWAybw.png)

5. Füllen Sie die Konfigurationsfelder aus

        Name: Geben Sie einen klaren Namen für diese Integration ein (z. B. WooCommerce_INT).
        URL: Geben Sie die URL Ihres WooCommerce-Shops ein
6. Füllen Sie die folgenden Felder auf der Seite "Neue Integration erstellen" aus (mit den in Schritt 3 kopierten Schlüsseln).
        Customer Key: Fügen Sie den von WooCommerce kopierten Customer Key ein.
        Customer Secret: Fügen Sie das von WooCommerce kopierte Customer Secret ein.

7. Wenn Sie möchten, dass Advanced Custom Fields auch in Fozzels importiert werden, aktivieren Sie bitte den Umschalter **Enable ACF**. Erfahren Sie mehr darüber, wie Sie diese Verbindung in [Enabling ACF Data Sync: WordPress/WooCommerce Configuration for Fozzels](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels) richtig einrichten.

8. Wenn Sie SEO-Daten mit dem Yoast SEO Plugin synchronisieren möchten, aktivieren Sie bitte den Umschalter Yoast WooCommerce SEO. Dies ermöglicht Fozzels, Meta-Titel, Meta-Beschreibungen und Focus Keywords direkt über die WooCommerce-API zu importieren und zu aktualisieren. [Lesen Sie mehr darüber, wie Sie diese Integration in Yoast SEO einrichten.](/integration-connectivity/yoast-seo-support-for-woocommerce)

9. Wenn Ihr Shop das All-in-One SEO Plugin verwendet, aktivieren Sie bitte den Umschalter All-in-One SEO. Dies synchronisiert automatisch SEO-verwandte Felder wie Meta-Titel, Beschreibungen, Keywords und Social-Media-Daten zwischen WooCommerce und Fozzels. [Lesen Sie mehr darüber, wie Sie diese Integration konfigurieren.](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide)

10. Wenn Sie benutzerdefinierte Meta-Daten-Felder von WooCommerce importieren möchten, füllen Sie bitte das Feld "WooCommerce Meta Data Sync Fields" aus. Geben Sie die Meta-Schlüssel-Präfixe oder exakte Meta-Feldnamen ein, die Sie synchronisieren möchten. Nur die Felder, die mit den genannten übereinstimmen, werden als Produktattribute in Fozzels importiert. Geben Sie z. B. _my_plugin_ ein, um alle Schlüssel mit diesem Präfix zu synchronisieren, oder _custom_field für ein bestimmtes Feld. [Lesen Sie mehr über diese Funktion.](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)
11. Wenn Sie die mehrsprachige Synchronisierung aktivieren möchten, aktivieren Sie bitte den Umschalter "WPML Multilingual Support". Dies ermöglicht es Fozzels, Produktdaten in alle konfigurierten Sprachen zu synchronisieren, wenn Sie das WPML Plugin verwenden. [Lesen Sie mehr darüber, wie Sie diese Einrichtung konfigurieren.](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation)
 ![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/d1v4xCqxV-0DN-7Uj85ucSblMez28V1klw.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/7XoFo9SE40F3Tgm0RjSqZFcqPUoE-6dFHA.png)
**Schritt 5: Integration aktivieren und speichern**1. Aktivieren Sie die Integration, indem Sie den Umschalter "Aktiv" in der oberen rechten Ecke **ein**schalten.

2. Klicken Sie auf die Schaltfläche "**Speichern**", um die Änderungen zu speichern.
Nachdem Sie erfolgreich gespeichert haben, fahren Sie mit den nächsten Konfigurationsschritten in Fozzels ("Websites & Stores" und "Attribute") fort, in denen Sie die Produkt- und Attributsynchronisierung einrichten können.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8pwl3nO-DvkTHXjdP3kCZwH6esC012DXYg.png)
**Schritt 6: Websites & Stores einrichten**
1. Klicken Sie auf die Schaltfläche "**Websites und Stores abrufen**". Dadurch werden alle zugehörigen Websites und Stores von Ihrem WooCommerce-Konto abgerufen und angezeigt.
2. Aktivieren Sie die erforderlichen Websites und Stores, indem Sie die entsprechenden Status-Umschalter auf **EIN** schalten.
3. Klicken Sie auf die Schaltfläche "**Produkte abrufen**" für jeden erforderlichen Shop. Diese Aktion startet das initiale Laden von Produktdaten in Fozzels. Lesen Sie mehr darüber, wie Sie Produkte abrufen [hier](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained/).
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/OT8f7hDzpyxRkabdwOZz9-0ph8-2UMGMnA.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/pXfqdGQaJ_kePo3JmAj2P43ZxhaPZWFnMg.png)Nachdem der Produktladeprozess abgeschlossen ist, ist Fozzels einsatzbereit!
Jetzt können Sie zur Registerkarte "Attribute" gehen, um diese zu konfigurieren. Lesen Sie mehr über die Verwaltung von Attributen [hier](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).
