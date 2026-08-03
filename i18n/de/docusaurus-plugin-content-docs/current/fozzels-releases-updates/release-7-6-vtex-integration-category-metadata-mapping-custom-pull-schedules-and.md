---
id: '103000408975'
title: Release 7.6 - VTEX-Integration, Category Metadata Mapping, benutzerdefinierte Pull-Zeitpläne und aktualisierte Image-Workflows
sidebar_position: 15
slug: /fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and
description: Wir freuen uns, Fozzels Version 7.6 vorzustellen! Dieses Release bringt eine völlig neue Plattform-Integration, tiefere Kategorie- und Bild-Datenzugänglichkeit, präzis
keywords:
- Arbeitsablauf
---

Wir freuen uns, Fozzels Version 7.6 vorzustellen! Dieses Release bringt eine völlig neue Plattform-Integration, tiefere Kategorie- und Bild-Datenzugänglichkeit, präzise Synchronisierung und API Pull-Steuerungen sowie große Upgrades für KI-Bildgenerungs-Workflows. Erkunden Sie alle neuen Funktionen unten.

1.  **Neue Integrationen VTEX-Integration** (Phase 1): Wir starten die anfängliche Unterstützung für die VTEX-E-Commerce-Plattform! Verbinden Sie Ihren VTEX-Store, um Kern-Katalog-Daten zu pullen, KI-Metadaten und lokalisierte Produktbeschreibungen zu generieren und diese nahtlos zu synchronisieren.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/JeeYUTgzrDD4RFn6wxHSi6jZ-acbmBcdaA.png)

2.  **Daten-Attribute und Metadaten Erweiterte Kategorieparameter (Shopware, Magento, Shopify)**: Sie können jetzt auf tiefe Kategorie-Level-Parameter zugreifen - einschließlich Kategorie-IDs, Slugs/URLs und strukturelle Identifikatoren - direkt in Prompt-Workflows und Attributabbildungen für reichhaltigeren KI-Kontext.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/78evdNuNxdhrkRFpX3fpJGb7klpmmoKEPg.png)

3.  **Alt Texts Display in Image Preview Gallery (Magento 2)**: Beim Hovern über oder Klicken auf eine Produktminiatur in Kataloglisten wird ihr zugehöriger Alt-Text jetzt direkt unter dem Preview-Popover angezeigt, was Bild-Metadaten-Überprüfung schnell und mühelos macht (vollständig unterstützt für Magento 2).
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/NZGCjJzI8YK0KA5XMMfKuuifCwUFqU1ayA.png)

4.  **Steuerelemente Globaler Pull-Zeitplan und flexible Pull-Drosselung:** Hinzugefügt erweiterte Pull-Steuerelemente zur Integration Settings-Seite über alle unterstützten Plattformen. **Pull Throttling**: Legen Sie benutzerdefinierte Verzögerungen zwischen Seiten und einzelnen API-Anfragen fest (von 100 bis 15.000 ms), um die API-Last zu verwalten und Rate-Limiting-Fehler bei großen Katalogen zu vermeiden.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/w_q1iVvLQ4_jGLRNGQhA-5vLAxBSxtN1Lw.png)

5.  **Erweiterte Produktabruf-Filterung für Magento (Jeder Status)**: Filtern Sie Magento-Katalog-Importe nach Status (Aktiviert, Deaktiviert) und Sichtbarkeit (Katalog, Suche, Katalog und Suche, Nicht einzeln sichtbar). Pullen und optimieren Sie einfach Ihren gesamten Katalog, einschließlich deaktivierter Elemente und Entwürfe.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/MsFGGxKTaRkrmyvnCBxWgi7AL-5ZhZlIZA.png)

6.  **Benutzerdefinierte Image Base URL / CDN-Unterstützung für Magento:** Geben Sie eine benutzerdefinierte Media-Domain oder CDN-Pfad an (z. B. Cloudflare, AWS S3) für das Abrufen von Produktbildern, um sicherzustellen, dass die Media-Verarbeitung unabhängig davon unterbrochen wird, wo Ihr Storefront Bilder hostet.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/o_y1ScOV7ObEGxqceebgSLnoIl-CotmmuA.png)

7.  **Assets Support für mehrere Referenzbilder:** Sie können jetzt mehrere Produktfotos zusammen mit mehreren Style-Presets (innerhalb der Kapazitätsgrenzen des KI-Modells) für eine einzelne Generierungsaufgabe auswählen, um höhere visuelle Genauigkeit und realistische Details zu erreichen.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/yi5rCHSv4ILYH-5KRotagmpmvTiuiDP_LQ.png)

8.  **Vollständige Produktbildsatz-Downloads**: Der Download generierter Media exportiert jetzt den gesamten Satz von Bildern, die einem Produkt-SKU zugeordnet sind, statt den Download nur auf das erste Asset zu beschränken.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/m4RjAkacBItnD9BxX_2SYbSWQXtKRBFj7Q.png)

9.  Aktualisiert unsere Kern-Bildgenerungs-Modelle (**Gemini 3.1 Flash Image** und **Gemini 3 Pro Image**) auf ihre neuesten stabilen Releases für schnellere Rendering, höhere visuelle Qualität und felsenfeste Stabilität.
    Danke, dass Sie bei Fozzels sind! Wir hoffen, dass diese Updates Ihren täglichen Content-Workflow noch reibungsloser gestalten. Zögern Sie nicht, uns zu kontaktieren, wenn Sie Hilfe mit den neuen Funktionen benötigen!
