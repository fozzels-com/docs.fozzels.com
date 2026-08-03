---
id: '103000408494'
title: 2.5.4. Yoast SEO-Unterstützung für WooCommerce
sidebar_position: 11
slug: /integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es
description: Dieser Artikel erläutert, wie Sie die vollständige Automatisierung der Metadaten Ihrer Produkte (Titel, Beschreibungen, Focus Keywords) mit der **Yoast SEO**-Integration mit Fozzels einrichten
keywords:
- Abruf
- Datenabruf
---

Dieser Artikel erläutert, wie Sie die vollständige Automatisierung der Metadaten Ihrer Produkte (Titel, Beschreibungen, Focus Keywords) mit der **Yoast SEO**-Integration mit Fozzels einrichten.

## Funktionsübersicht

Diese Integration ermöglicht es Fozzels, die SEO-Parameter Ihrer Produkte direkt über die API zu verwalten. Nach der Generierung werden diese Felder automatisch mit Ihrem WooCommerce-Shop synchronisiert.

### Verfügbare Attribute zum Zuordnen:

- **Yoast SEO-Titel** (`yoast_title`)
- **Yoast SEO-Meta-Beschreibung** (`yoast_meta_description`)
- **Yoast Focus Keyword** (`yoast_focus_keyword`)

## Schritt-für-Schritt-Einrichtung

### Schritt 1: Anforderungen (WooCommerce-Seite)

Für eine erfolgreiche Synchronisierung muss Ihre WordPress-Website **zwei aktive Plugins** haben:

1. **Yoast SEO** – Das Core-Plugin für die Verwaltung der Suchmaschinenoptimierung.
2. **Yoast SEO WooCommerce REST API by Fozzels** – Unser dediziertes Connector-Plugin, das die Übertragung generierter Daten zurück zu Ihrem Shop ermöglicht.

> **Wichtig:** Die Synchronisierung von SEO-Feldern ist ohne das Fozzels Connector-Plugin nicht möglich. Sie können es am Ende dieses Artikels herunterladen.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/MT4wMD04ipjVoEt8c4NwHlsE0eT8iTLb2A.png)

### Schritt 2: Aktivierung in Fozzels

1. Gehen Sie zum Bereich **Integrationen** und wählen Sie Ihre WooCommerce-Integration.
2. Suchen Sie auf der Registerkarte **Konfiguration** nach der Option **"Yoast WooCommerce SEO"**.
3. Schalten Sie den Umschalter ein und klicken Sie auf **SPEICHERN**.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/bjZhGWcV30oWfW9hzMOHg4-I7csNNSMhJA.png)

###
Schritt 3: Datenstruktur-Update

Um die neuen Attribute in der Fozzels-Schnittstelle sichtbar zu machen, müssen Sie Ihr Datenschema aktualisieren:

1. Gehen Sie zur Registerkarte **Websites & Stores** und klicken Sie auf **Stores/Websites abrufen**.
2. Führen Sie einen **vollständigen Product Pull (Pull Products)** aus.
3. Nach Abschluss des Abrufs wird die Attributliste aktualisiert, und Felder mit dem Präfix `yoast_` sind in Ihren Flows verfügbar.![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/s-S_9YbKR-3bTtFFzWb4j7fmwJBqaL8UKg.png)

##

## Die ultimative Kombination: WPML + Yoast + ACF

Fozzels ermöglicht Ihnen, den "Gold Standard" des E-Commerce zu erreichen, indem Sie Folgendes kombinieren:

- **WPML-Unterstützung:** Für mehrsprachige SEO.
- **ACF (Advanced Custom Fields):** Für spezialisierte technische Daten.
- **Yoast SEO:** Für Suchmaschinen-Dominanz.

Sie können alle diese Felder gleichzeitig für jede Sprachversion Ihres Shops automatisieren.
