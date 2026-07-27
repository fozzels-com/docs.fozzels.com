---
id: '103000389531'
title: 2.5.6. WPML-Unterstützung für WooCommerce (Mehrsprachige Automatisierung)
sidebar_position: 13
slug: /integration-connectivity/wpml-support-for-woocommerce-multilingual-automation
description: >-
  Diese Anleitung behandelt die Konfiguration und Verwendung der WPML (WordPress Multilingual Plugin)-Integration in Fozzels. Mit dieser Funktion können Sie die Inhaltsgenerierung und Synchronisierung für jedes Sprachgebietsschema Ihres Shops in einer einzigen Integration automatisieren
---

Diese Anleitung behandelt die Konfiguration und Verwendung der **WPML (WordPress Multilingual Plugin)**-Integration in Fozzels. Mit dieser Funktion können Sie die Inhaltsgenerierung und Synchronisierung für jedes Sprachgebietsschema Ihres Shops in einer einzigen Integration automatisieren.

## Funktionsübersicht

Die Fozzels-Integration mit WPML ermöglicht Ihnen, komplexe mehrsprachige Strukturen zu verwalten, ohne separate Verbindungen für jede Sprache zu benötigen.

**Hauptvorteile:**

- **Locale-Erkennung:** Automatische Erkennung aller aktiven Website-Sprachen über API.

- **Flexible Zuordnung:** Direkter Inhalt zu den richtigen Sprachversionen Ihrer Produkte, einschließlich:

- **Standard-Felder** (Titel, Beschreibung, Kurzbeschreibung);

- **SEO-Plugins** (**[Yoast SEO](https://fozzels.freshdesk.com/a/solutions/articles/103000388046)** oder **[All in One SEO](https://fozzels.freshdesk.com/a/solutions/articles/103000386882)**);

- **Benutzerdefinierte Felder** (**[ACF - Advanced Custom Fields](https://fozzels.freshdesk.com/a/solutions/articles/103000385832)**).

- **Workflow-Effizienz:** Verwalten Sie globale Kataloge von einer einzigen Schnittstelle.

## Integrationseinrichtung in Fozzels

Um die mehrsprachige Unterstützung zu aktivieren, folgen Sie diesem Schritt-für-Schritt-Algorithmus:

### 1. Funktion aktivieren

1. Navigieren Sie zum Bereich **Integrationen** und wählen Sie Ihre WooCommerce-Integration.

2. Suchen Sie auf der Registerkarte **Konfiguration** nach dem Block **WPML-Einstellungen**.

3. Schalten Sie **"WPML-Mehrsprachigkeit aktivieren"** ein.

4. **Wichtig:** Klicken Sie auf die Schaltfläche **"SPEICHERN"**, um diese Änderungen an Ihrer Konfiguration zu übernehmen.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/4V_jMfihW94CP3CNHSo9yd7-LbwRCXJSJg.png)

### 2. Locales initialisieren (Websites & Stores)

Nach dem Speichern müssen Sie die Sprachliste von Ihrer WordPress-Website abrufen:

1. Wechseln Sie zur Registerkarte **Websites & Stores** in Ihren Integrationseinstellungen.

2. Klicken Sie auf die Schaltfläche **"Stores/Websites abrufen"**. Fozzels fragt Ihre WordPress-Website ab, um alle konfigurierten Sprachen abzurufen.

3. Aktivieren Sie in der angezeigten Liste **die spezifischen Sprachen, die Sie verwalten möchten**.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/POzdAldcqgEXxkAsgSEbnJLTDF9nzoogmg.png)
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/rgGtdO9cFLCfJOPmQs1SQc5NKnlyOx59Ag.png)

###
3. Katalog-Synchronisierung

Dies ist der letzte und wichtigste Schritt, um Produkte sichtbar zu machen:

- **FÜHREN SIE DEN PRODUKTABRUF ERNEUT AUS.** Dies ist erforderlich, damit das System die Beziehungen zwischen verschiedenen Sprachversionen Ihrer Produkte identifizieren und **sie als einzelne Objekte in Ihre Fozzels-Kataloge laden** kann, um sie zu verarbeiten. Ohne diesen Schritt werden Produkte für neue Locales nicht im System angezeigt.

![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/S0333OKK3WCPquO5CYoLzBkvWJVsJRbG4w.png)

##
Die Super-Power-Kombination: WPML + ACF + AIOSEO

Fozzels ermöglicht Ihnen, WPML mit branchenführenden Plugins zu kombinieren, um maximale Automatisierung zu erreichen. Dies ist der "Gold Standard" für professionelle E-Commerce:

- **WPML + SEO ([Yoast](https://fozzels.freshdesk.com/a/solutions/articles/103000388046) oder [AIOSEO](https://fozzels.freshdesk.com/a/solutions/articles/103000386882)):** Generieren Sie einzigartige lokalisierte Keywords, Meta-Titel und Beschreibungen für jede Sprachversion. _(Hinweis: Verwenden Sie immer nur ein SEO-Plugin gleichzeitig, um Konflikte zu vermeiden)._

- **WPML + [ACF (Advanced Custom Fields)](https://fozzels.freshdesk.com/a/solutions/articles/103000385832):** Synchronisieren Sie lokalisierte Inhalte in benutzerdefinierte Felder (z. B. technische Spezifikationen, Marketing-Blöcke oder FAQs) separat für jede Sprache.

- **Die ultimative Kombination (WPML + ACF + AIOSEO):** Das leistungsstärkste Szenario. Dies ermöglicht es Ihnen, professionelle Beschreibungen, spezialisierte technische Daten und einen vollständigen SEO-Core für den internationalen Markt gleichzeitig zu automatisieren.
