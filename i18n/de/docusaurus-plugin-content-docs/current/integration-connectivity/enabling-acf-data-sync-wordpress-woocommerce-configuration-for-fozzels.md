---
id: '103000385832'
title: >-
  2.5.2. ACF-Datensynchronisierung aktivieren: WordPress/WooCommerce-Konfiguration für Fozzels
sidebar_position: 8
slug: >-
  /integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels
description: >-
  Die Integration Fozzels - WooCommerce unterstützt jetzt offiziell Advanced Custom Fields (ACF)! Mit dieser Funktion können Sie einzigartige und erweiterte Produktmerkmale synchronisieren
---

Die Integration **Fozzels - WooCommerce** unterstützt jetzt offiziell **Advanced Custom Fields (ACF)**!

Mit dieser Funktion können Sie einzigartige und erweiterte Produktmerkmale (wie technische Spezifikationen, mehrsprachige Beschreibungen oder spezielle Parameter) synchronisieren, die Sie via ACF hinzufügen. So können Sie detailliertere und wettbewerbsfähigere Produktdatenfeeds für Marktplätze erstellen.

Eine erfolgreiche Integration erfordert wichtige Konfigurationsschritte in WordPress und Fozzels.

###

## **Teil 1: Daten in WordPress vorbereiten (ACF und REST API)**

Bevor Sie ACF in Fozzels aktivieren, stellen Sie sicher, dass Ihr WordPress und ACF so konfiguriert sind, dass diese speziellen Daten korrekt über die REST API übertragen werden.

### Schritt 1: Permalinks überprüfen und konfigurieren

Damit die REST API ordnungsgemäß funktioniert, muss die Permalink-Struktur von der Standard(Plain)-Struktur unterscheiden sein.

1. Melden Sie sich in Ihrer WordPress-Administratoren an und navigieren Sie zu **Einstellungen** / **Permalinks**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/UoAvhDX9e8L9BLo2aXURlvtkXJ3A1z5ToA.png)

2. Wählen Sie eine Struktur, die keine Parameter verwendet (die **"Beitragsname"**-Struktur wird empfohlen).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vbZGxNZnGc1GBmBD9QYCyV3_4CUkCjMRhA.png)

3. Vergewissern Sie sich, dass **v3** im Feld **Anforderungsversion** ausgewählt ist.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/KhP0PGNAaWcnzkLXTBB8yQ1tPbXLQjPhzA.png)

4. Speichern Sie die Änderungen.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/yP1swQ74nSHYKF8pRpAgezDqHmxBh4nR-A.png)

###
Schritt 2: Zur ACF-Feldgruppe navigieren

1. Gehen Sie im WordPress-Menü zu **ACF** / **Feldgruppen**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/a7TVqQW4iMXkGcmlP1WI8nouyni5HGoKsg.png)

2. Klicken Sie auf den Namen der Feldgruppe, die die Felder enthält, die Sie für Ihre WooCommerce-Produkte synchronisieren müssen (z. B. **"Fozzels-Beschreibung"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/GH8y_bXf1Lb2RnG-_VWVmrj4XKhaFuCnRg.png)

###
Schritt 3: Konfigurieren der Feldgruppe für API-Zugriff (wichtiger Schritt)

Überprüfen Sie im Bearbeitungsfenster der **Feldgruppe** die Standortregeln und aktivieren Sie den API-Zugriff.

#### 3.1. Überprüfen der Standortregeln

1. Vergewissern Sie sich auf der Registerkarte **Standortregeln**, dass die Regel wie folgt eingestellt ist: **Beitragstyp** _ist gleich_ **Produkt**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/BNEJu6CBt2NzH17U0EzeWONrRHVf2l2Jkw.png)

#### 3.2. Aktivieren der REST API und Gruppe

1. Navigieren Sie zur Registerkarte **Gruppeneinstellungen**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/Nd2g7ccKjN6_POwgJhmMzMceFkkV0h2hxw.png)

2. Stellen Sie sicher, dass beide Umschalter aktiviert sind (auf **EIN** gesetzt):

-   **Aktiv**

    -   **In REST API anzeigen**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/ZJ8EJ6QyJdSfjnZQSXdDXHEAvHmtDBbEKg.png)**

3. Speichern Sie die Änderungen, indem Sie auf **Aktualisieren** oder **Veröffentlichen** klicken.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/lIgfpHeR7YI8Bf6W-4UvdIqtW2AQz9kqcw.png)

###
Schritt 4: ACF REST API-Version überprüfen

Wenn Sie ein zusätzliches Plugin verwenden, um ACF in die REST API zu integrieren (wie `ACF to REST API`), müssen Sie sicherstellen, dass die ausgewählte Version mit Fozzels kompatibel ist.

1. Gehen Sie zu **Einstellungen** / **Permalinks** / **ACF to REST API**.

2. Vergewissern Sie sich, dass **v3** im Feld **Anforderungsversion** ausgewählt ist.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/13tEu-kDRtYwLsGbVQs5J19h9pA5I08Jlw.png)

    > **Fozzels-Anforderung:** Die Integration benötigt **v3 REST API-Unterstützung**.
    >
    >

3. Speichern Sie die Einstellungen.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vdFx1XFzfwdgC4rWC4PSPmvnyjq5XMPclg.png)

## **Teil 2: ACF in Fozzels aktivieren**

Nachdem die Vorbereitung in WordPress abgeschlossen ist, aktivieren Sie die Funktion in Ihren Fozzels-Integrationseinstellungen.

1. Melden Sie sich in Ihrem Fozzels-Konto an und gehen Sie zur Bearbeitung Ihrer WooCommerce-Integration.

2. Suchen Sie im Bereich **Konfiguration** nach dem Umschalter **"ACF aktivieren (Advanced Custom Fields)"**.

3. **Aktivieren Sie ihn** (setzen Sie ihn auf **EIN**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/0_d_0BMKbVwJo7hW9vj3FexWoHpj5ziX7w.png)

> **Wichtig!** Beachten Sie die von Fozzels bestätigten Anforderungen:
>
> - ACF-Plugin ist in WordPress installiert und aktiviert.
>
> - REST API ist in den ACF-Feldgruppeneinstellungen aktiviert (In REST API anzeigen: Ja).
>
> - ACF-Version 6.x oder höher mit v3 REST API-Unterstützung.
>

4. Klicken Sie auf **Speichern** am Ende der Seite.

## **Teil 3: Verwendung von ACF-Feldern im Flow und bei der Katalogaktualisierung**

Fozzels behandelt ACF-Attribute als **reguläre Produktattribute**, und Sie arbeiten mit ihnen mit dem Standard-Flow.

1. Nachdem Sie den Umschalter **"ACF aktivieren"** aktiviert und auf **"Speichern"** geklickt haben, müssen Sie **den Datenimportprozess ausführen**:

- **Wenn Sie eine bestehende Integration aktualisieren:** Starten Sie den Produkt- und Attribut-Pool neu. Dies aktualisiert die Daten im Fozzels-Katalog und importiert die neuen ACF-Felder.

    - **Wenn dies Ihre erste Integration ist:** Führen Sie einfach den Produktpool nach den allgemeinen Integrationssetupregelns aus.
        ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/EYnK1qxy-p-r_jWSJDDxh9P0gDCTf_BU1g.png)

2. Nach erfolgreichem Abschluss des Pools navigieren Sie zu Abschnitt **3 Attribute**, überprüfen Sie neue Attribute und deren Konfigurationen.
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/4iRp-AUe2mr4IFsN_I9b6AEtM5f9iGTgtA.png)**
    Wenn Sie Fragen haben oder Unterstützung beim Einrichten der ACF-Integration benötigen, hilft unser Support-Team gerne weiter! Bitte kontaktieren Sie uns unter **support@fozzels.com**.
