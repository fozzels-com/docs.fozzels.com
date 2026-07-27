---
id: '103000367852'
title: 2.1. Was ist eine Fozzels-Integration? (Konzept und Anforderungen).
sidebar_position: 1
slug: >-
  /integration-connectivity/what-is-a-fozzels-integration-concept-and-requirements
description: >-
  Dieses Dokument bietet ein grundlegendes Verständnis dafür, was eine Fozzels-Integration ist, welche Rolle sie im Content-Lebenszyklus spielt und welche notwendigen Voraussetzungen für das Herstellen einer Verbindung erforderlich sind
---

Dieses Dokument bietet ein grundlegendes Verständnis dafür, was eine Fozzels-Integration ist, welche Rolle sie im Content-Lebenszyklus spielt und welche notwendigen Voraussetzungen für das Herstellen einer Verbindung erforderlich sind.

Eine Fozzels-Integration stellt eine sichere bidirektionale Datenverbindung zwischen der Fozzels-Plattform und Ihrem externen E-Commerce-System (z. B. Magento, Shopify, WooCommerce) her. Diese Verbindung ist der Ausgangspunkt für die gesamte Content-Automatisierung und ermöglicht Fozzels, Produktattribute **abzurufen** und generierten Inhalt **zurückzuschieben**.

### 1. Die Rolle der Integration im Content-Lebenszyklus

Die Integration dient als Datenpipeline und unterstützt den gesamten Inhaltsgenererierungsprozess:

1. **Daten abrufen:** Fozzels verwendet die Verbindung, um automatisch Produktdaten (Attribute, Bilder, Kategorien, Preise) von Ihrem Shop in den Fozzels-Katalog **abzurufen**. Diese Daten bilden die Grundlage für die KI-Prompts.

2. **Flow-Ausführung:** Die Content Flows werden in der Fozzels-Umgebung ausgeführt, wobei sie die abgerufenen Attribute und das ausgewählte KI-Modell verwenden, um neue Inhalte zu generieren.

3. **Daten zurückgeben:** Fozzels verwendet die Verbindung, um neu generierten Inhalt (z. B. Produktbeschreibungen, Meta-Titel) **zurück** zu den designierten Zielattributen in Ihrem E-Commerce-System zu **übertragen**.

### 2. Integrationsanforderungen und Voraussetzungen

Vor dem Einrichten einer Integration müssen bestimmte Anforderungen auf Ihrer E-Commerce-Plattform erfüllt sein:

1. **API-Zugriff:** Fozzels benötigt sicheren Zugriff auf die Application Programming Interface (API) Ihres Shops. Dies beinhaltet typischerweise das Generieren eines sicheren Tokens oder API-Schlüssels auf der Seite der E-Commerce-Plattform.

2. **Lese-/Schreibberechtigungen:** Die generierten API-Anmeldedaten müssen sowohl **Leseberechtigung (abrufen)** zum Zugriff auf vorhandene Produktattribute als auch **Schreibberechtigung (zurückgeben)** zum Ändern der Zielattribute (die Felder, in denen generierter Inhalt gespeichert wird) haben.

3. **Integrationstyp:** Je nach Plattform (z. B. Magento 2 oder Shopify) kann die Integrationsmethode das Installieren einer spezifischen Fozzels-Erweiterung/App oder das Konfigurieren von nativen API-Schlüsseln und URLs beinhalten.

4. **Attribut-Einrichtung (nach Integration):** Nach der Verbindung verlässt sich Fozzels darauf, dass Quellattribute das Flag **Filterbar** und Zielattribute das Flag **Änderbar** aktiviert haben.

### 3. Integrationsverwaltung

Die Integrationseinstellungen werden in der Registerkarte **Konfiguration** und **Websites & Stores** der Fozzels-Schnittstelle verwaltet.

- Sie können mehrere Integrationen gleichzeitig verwalten, so dass Sie Inhalte über verschiedene E-Commerce-Instanzen oder regionale Shops synchronisieren können.

- Die Stabilität des Content-Automatisierungsprozesses hängt direkt von der Stabilität und Verfügbarkeit der etablierten Integration ab.
