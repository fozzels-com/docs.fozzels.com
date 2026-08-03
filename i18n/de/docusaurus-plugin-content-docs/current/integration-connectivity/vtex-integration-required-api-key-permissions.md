---
id: '103000406106'
title: 2.8.1 VTEX-Integration — erforderliche API-Schlüssel-Berechtigungen
sidebar_position: 18
slug: /integration-connectivity/vtex-integration-required-api-key-permissions
description: Welche API-Schlüssel-Berechtigungen benötige ich, um Fozzels mit VTEX zu verbinden? Um Ihren VTEX-Shop mit Fozzels zu verbinden, müssen Sie einen API-Schlüssel in Ihrem VTEX-Admin erstellen und die richtigen Berechtigungen zuweisen
---

## Welche API-Schlüssel-Berechtigungen benötige ich, um Fozzels mit VTEX zu verbinden?

Um Ihren VTEX-Shop mit Fozzels zu verbinden, müssen Sie einen API-Schlüssel in Ihrem VTEX-Admin erstellen und die richtigen Berechtigungen zuweisen. Dieser Artikel erklärt genau, welche Berechtigungen aktiviert werden müssen.

## Schritt 1 — Erstellen Sie einen API-Schlüssel in VTEX

1. Melden Sie sich in Ihrem VTEX Admin Panel an
2. Gehen Sie zu **Account Management → Account → App Keys**
3. Klicken Sie auf **Generate new key**
4. Geben Sie ihm einen Namen (z. B. _Fozzels Integration_)
5. Kopieren Sie sowohl den **App Key** als auch das **App Token** – Sie benötigen diese in Fozzels

## Schritt 2 — Weisen Sie Berechtigungen dem API-Schlüssel zu

### Option A: Verwenden Sie die vordefinierte Integrations-Rolle (empfohlen)

VTEX bietet eine vordefinierte Rolle für externe Katalog-Integrationen:

1. Gehen Sie in Ihren App Key-Einstellungen zu **Roles**
2. Suchen Sie und fügen Sie die Rolle hinzu: **IntegrationProfile-externalCatalog**
3. Speichern – diese einzelne Rolle deckt alle Berechtigungen ab, die Fozzels benötigt

### Option B: Fügen Sie Berechtigungen manuell hinzu

Wenn Sie die minimal erforderlichen Berechtigungen einstellen möchten, fügen Sie folgende Ressourcen zu Ihrer API-Schlüssel-Rolle hinzu:

#### Catalog System

Ressource

Warum wird es benötigt

Get sales channel list

Fozzels verwendet dies, um sich mit Ihrem Shop zu verbinden und Ihre Locale-Einstellungen zu erkennen

Get product and SKU IDs

Erforderlich, um die vollständige Liste der Produkte aus Ihrem Katalog abzurufen

Get specification field list by category

Ermöglicht Fozzels, Ihre Produktattribut-Definitionen zu lesen

Get product specifications

Liest die aktuellen Attribut-Werte für jedes Produkt

#### Catalog

Ressource

Warum wird es benötigt

Get product by ID

Ruft vollständige Produktdetails für die KI-Inhaltsgeneration ab

Update product

**Schreibberechtigung.** Fozzels verwendet dies, um generierte Beschreibungen, Titel und Meta-Beschreibungen in Ihren Shop zu übertragen

Get SKU by product ID

Ruft SKU-Level-Informationen für jede Produktvariante ab

Get SKU file

Liest vorhandene Produktbilder

Add SKU file

**Schreibberechtigung.** Erforderlich, wenn Sie Fozzels zum Generieren und Übertragen von Produktbildern verwenden

Create/update product specification

**Schreibberechtigung.** Ermöglicht Fozzels, generierten Inhalt in Produktattribut-Felder zurückzuschreiben

#### Category

Ressource

Warum wird es benötigt

Get category tree

Fozzels verwendet Ihre Kategorie-Struktur, um Ihren Produktkatalog zu organisieren

## Schritt 3 — Geben Sie die Anmeldedaten in Fozzels ein

1. Melden Sie sich in Ihrem Fozzels-Konto an
2. Gehen Sie zu **Integrationen → Integration hinzufügen → VTEX**
3. Geben Sie Ihren **Kontonamen** ein (die Subdomain Ihres VTEX-Shops, z. B. `mystore`)
4. Geben Sie den **App Key** und das **App Token** aus Schritt 1 ein
5. Klicken Sie auf **Test connection**, um zu überprüfen, ob alles funktioniert

## Häufig gestellte Fragen

**Muss ich Fozzels Zugriff auf Bestellungen oder Zahlungen geben?**
Nein. Fozzels funktioniert nur mit Ihrem Produktkatalog. Es benötigt keinen Zugriff auf Bestellungen, Logistik, Preise, Checkout oder Zahlungsinformationen.

**Ich habe einen mehrsprachigen / grenzüberschreitenden Shop. Benötige ich zusätzliche Berechtigungen?**
Für einsprachige Shops sind die oben aufgeführten Berechtigungen ausreichend. Das Rückschreiben in mehreren Sprachen steht auf unserer Roadmap und benötigt möglicherweise eine zusätzliche Berechtigung bei der Veröffentlichung. Wir werden diesen Artikel zu diesem Zeitpunkt aktualisieren.

**Kann ich den API-Schlüssel auf bestimmte IP-Adressen beschränken?**
Ja. Kontaktieren Sie unser Support-Team, um die aktuelle Fozzels Server IP-Adresse für die Whitelist zu erhalten.
