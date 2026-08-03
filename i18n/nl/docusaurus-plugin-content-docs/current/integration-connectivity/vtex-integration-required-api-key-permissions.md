---
id: '103000406106'
title: 2.8.1 VTEX-integratie — vereiste API-sleutelmachtigingen
sidebar_position: 18
slug: /integration-connectivity/vtex-integration-required-api-key-permissions
description: >-
  Welke API-sleutelmachtigingen heb ik nodig om Fozzels met VTEX te verbinden?
  Om uw VTEX-winkel met Fozzels te verbinden, moet u een API-sleutel in uw
  VTEX-admin maken en
---

## Welke API-sleutelmachtigingen heb ik nodig om Fozzels met VTEX te verbinden?

Om uw VTEX-winkel met Fozzels te verbinden, moet u een API-sleutel in uw VTEX-admin maken en de juiste machtigingen toewijzen. Dit artikel legt precies uit welke machtigingen u moet inschakelen.

## Stap 1 — Maak een API-sleutel in VTEX

1.  Meld u aan bij uw VTEX-beheervenster
2.  Ga naar **Account Management → Account → App Keys**
3.  Klik **Generate new key**
4.  Geef het een naam (bijv. _Fozzels Integration_)
5.  Kopieer zowel de **App Key** als **App Token** — u hebt deze nodig in Fozzels

## Stap 2 — Wijs machtigingen toe aan de API-sleutel

### Optie A: Gebruik de vooraf samengestelde integratierol (aanbevolen)

VTEX biedt een vooraf gemaakte rol ontworpen voor externe catalogusintegraties:

1.  Ga in uw App Key-instellingen naar **Roles**
2.  Zoek en voeg de rol toe: **IntegrationProfile-externalCatalog**
3.  Opslaan — deze enkele rol dekt alle machtigingen die Fozzels nodig heeft

### Optie B: Voeg machtigingen handmatig toe

Als u liever minimale vereiste machtigingen instelt, voegt u de volgende bronnen toe aan uw API-sleutelrol:

#### Catalogussysteem

Bron

Waarom het nodig is

Get sales channel list

Fozzels gebruikt dit om verbinding te maken met uw winkel en uw landinstellingen te detecteren

Get product and SKU IDs

Vereist om de volledige productlijst uit uw catalogus op te halen

Get specification field list by category

Stelt Fozzels in staat uw productattribuutdefinities te lezen

Get product specifications

Leest de huidige kenmerkwaarden op elk product

#### Catalogus

Bron

Waarom het nodig is

Get product by ID

Haalt volledige productdetails op voor AI-inhoudsgeneratie

Update product

**Schrijfmachtiging.** Fozzels gebruikt dit om gegenereerde beschrijvingen, titels en metabeschrijvingen terug naar uw winkel te pushen

Get SKU by product ID

Haalt SKU-gegevens op voor elk productvariëteit

Get SKU file

Leest bestaande productafbeeldingen

Add SKU file

**Schrijfmachtiging.** Vereist als u Fozzels gebruikt om productafbeeldingen te genereren en te pushen

Create/update product specification

**Schrijfmachtiging.** Stelt Fozzels in staat gegenereerde inhoud terug te schrijven naar productattribuutvelden

#### Categorie

Bron

Waarom het nodig is

Get category tree

Fozzels gebruikt uw categoriestructuur om uw productcatalogus in te delen

## Stap 3 — Voer de gegevens in Fozzels in

1.  Meld u aan bij uw Fozzels-account
2.  Ga naar **Integraties → Integratie toevoegen → VTEX**
3.  Voer uw **accountnaam** in (het subdomein van uw VTEX-winkel, bijv. `mystore`)
4.  Voer de **App Key** en **App Token** van Stap 1 in
5.  Klik **Test connection** om te verifiëren dat alles werkt

## Veelgestelde vragen

**Moet ik Fozzels toegang geven tot bestellingen of betalingen?**
Nee. Fozzels werkt alleen met uw productcatalogus. Het heeft geen toegang tot bestellingen, logistiek, prijzen, afrekening of betalingsgegevens.

**Ik heb een meertalige / grensoverschrijdende winkel. Heb ik aanvullende machtigingen nodig?**
Voor eentalige winkels zijn de bovenstaande machtigingen voldoende. Meertalig schrijven terug staat op onze roadmap en kan aanvullende machtigingen vereisen wanneer dit wordt uitgebracht. We zullen dit artikel op dat moment bijwerken.

**Kan ik de API-sleutel beperken tot specifieke IP-adressen?**
Ja. Neem contact op met ons ondersteuningsteam om het huidige IP-adres van de Fozzels-server voor whitelisting op te vragen.
