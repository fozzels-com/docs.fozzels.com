---
title: 2.3.4. Een Shopify-integratie migreren van Per market naar Per language
sidebar_position: 5.5
slug: /integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language
description: >-
  Zo zet u een Shopify-integratie over van de Markets-modus Per market naar
  Per language: werk de appscopes bij in het Shopify Dev Dashboard en maak de
  integratie daarna opnieuw aan in Fozzels of neem contact op met de support.
---

De eenvoudigste manier om over te stappen van Per market naar Per language is de scopes van uw Shopify-app bij te werken en daarna een nieuwe Fozzels-integratie aan te maken met de modus Per language. Hebt u al flows, neem dan contact op met de support van Fozzels in plaats van zelf over te schakelen.

## Voordat u begint

Deze handleiding is bedoeld voor klanten van wie de Shopify-integratie de modus **Per market** gebruikt en die geen marktspecifieke content binnen één taal nodig hebben. Met **Per language** synchroniseert u één vertaling per taal en past Shopify die toe op alle markten waar die taal is gepubliceerd. Dat betekent minder synchronisaties en lagere kosten.

Controleer eerst twee dingen.

**1. Heeft uw app alle vereiste scopes?** Per language heeft scopes nodig die oudere appversies mogelijk niet hebben, meestal `read_publications`. Open uw app in het Shopify Dev Dashboard, ga naar **Versions**, open de actieve versie en vergelijk de **Scopes** met de lijst in stap 1. Ontbreekt er iets, voer dan stap 1 uit. Zijn alle scopes aanwezig, ga dan direct naar stap 2.

**2. Hebt u al flows in Fozzels?** Dit bepaalt hoe u de modus wijzigt.

| Uw situatie | Wat u doet |
| --- | --- |
| Nog geen flows | Zo nodig stap 1, daarna stap 2, optie A: de integratie archiveren en opnieuw aanmaken |
| Flows al aangemaakt | Zo nodig stap 1, daarna contact opnemen met de support van Fozzels (stap 2, optie B) |

Waarom niet gewoon de modus in de bestaande integratie wijzigen? Bij het wijzigen worden de oude, op markten gebaseerde websites en stores niet verwijderd. Ze blijven als inactief in de tabel staan, gemarkeerd met "Website is lost on integration", naast de nieuwe, op talen gebaseerde websites en stores. Flows die aan de oude stores zijn gekoppeld, worden niet meer uitgevoerd en de tabel wordt onoverzichtelijk.

![Na het wijzigen van de modus in de bestaande integratie: oude websites gemarkeerd als verloren, naast de nieuwe](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/01-old-websites-lost-after-mode-switch.png)

## Stap 1. Shopify: voeg de ontbrekende scopes toe

U hebt geen nieuwe app nodig. U maakt een nieuwe versie van uw bestaande app aan met de bijgewerkte scopes. De Client ID en het Secret blijven hetzelfde.

### 1.1. Maak een nieuwe versie aan

1. Log in op het Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Open **Apps** en selecteer uw Fozzels-app.
3. Ga naar **Versions** en klik op **Create version**. De nieuwe versie is gebaseerd op uw huidige actieve versie, dus alle bestaande instellingen worden overgenomen.

![Pagina Versions met Create version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/02-versions-create-version.png)

![Versie aanmaken op basis van de actieve versie](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/03-create-version-from-active.png)

### 1.2. Werk de scopes bij

Scrol omlaag naar de sectie **Access**. In oudere appversies ontbreekt `read_publications` vaak in het veld **Scopes**. Hier is een voorbeeld van een onvolledige lijst:

![Voor: scopes zonder read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/04-scopes-before-without-read-publications.png)

Vervang de inhoud van het veld **Scopes** door de volledige lijst:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

Wilt u ook gewichtsgegevens synchroniseren (de optie Inventory in Fozzels), voeg dan `read_inventory` en `write_inventory` toe aan het einde van de lijst.

![Na: volledige lijst met scopes inclusief read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/05-scopes-after-full-list.png)

Laat al het andere ongewijzigd: **Optional scopes** leeg en **Use legacy install flow** uitgevinkt.

### 1.3. Breng de versie uit

1. Klik op **Release** (rechtsboven of onderaan de pagina).
2. Voer optioneel een versienaam in, bijvoorbeeld `v2`, en klik op **Release** om te bevestigen.

De nieuwe versie wordt **Active**.

![Pop-up Release this new version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/06-release-new-version-pop-up.png)

### 1.4. Keur de nieuwe machtigingen goed in uw winkel

Door een versie uit te brengen krijgt de app de nieuwe machtigingen nog niet. De winkeleigenaar moet ze goedkeuren door de app opnieuw te installeren. Tot die tijd werkt Per language niet correct.

1. Open de pagina **Overview** van de app en klik op **Install app**, of open de installatielink via **Distribution** als u Custom distribution gebruikt.
2. Log desgevraagd in met het account van de winkeleigenaar.
3. Controleer de lijst met toegangsrechten en bevestig de installatie.

## Stap 2. Fozzels: schakel over naar Per language

### Optie A: nog geen flows — archiveren en opnieuw aanmaken

Zo krijgt u een schone tabel Websites & Stores met alleen de nieuwe, op talen gebaseerde websites.

1. Kopieer voordat u begint de huidige **Api Key**, **Api Secret** en **App Host Name** uit de stap Configuration van de integratie, of haal de Client ID en het Secret op via **App settings → Credentials** in het Shopify Dev Dashboard.
2. Open de huidige integratie en zet de schakelaar **Active** uit.
3. Archiveer de integratie.
4. Maak een nieuwe Shopify-integratie aan: **Integrations → Shopify**, verbindingsmethode **Custom App**.
5. Voer dezelfde **URL**, **Api Key**, **Api Secret** en **App Host Name** in.
6. Kies onder **Markets mode** de optie **Per language**.
7. Stel de optionele instellingen in als u die eerder gebruikte (Inventory, Global Pull Schedule, vertragingen) en klik op **Save**.
8. Zet **Active** aan en klik op **Pull Websites and Stores**.
9. Zet **Status** aan voor elke website en de bijbehorende store en klik daarna op **Pull products**.

![Nieuwe integratie: API-gegevens en Markets-modus ingesteld op Per language](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/07-new-integration-per-language.png)

Zie voor een volledige beschrijving van elk veld [2.3.2. Shopify-winkels verbinden met Fozzels via het Shopify Dev Dashboard](/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026).

### Optie B: flows al aangemaakt — neem contact op met de support

Neem contact op met de support van Fozzels voordat u de modus wijzigt. Wij helpen u over te schakelen terwijl uw flows blijven werken, en controleren de locale-codes aan de kant van Shopify, die bij het overschakelen kunnen veranderen.

## Na de migratie

In de modus Per language is elke gepubliceerde taal een aparte website met één store.

![Per language: één website met één store per taal](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/08-per-language-websites-and-stores.png)

- [ ] De actieve appversie in Shopify bevat `read_publications` en alle andere vereiste scopes
- [ ] De winkeleigenaar heeft de nieuwe machtigingen goedgekeurd (app opnieuw geïnstalleerd)
- [ ] De integratie gebruikt **Per language**
- [ ] **Authorized** en **REST API Connected** zijn groen
- [ ] Websites en stores zijn actief voor de talen die u nodig hebt
- [ ] Alle vier pulls (Product Attribute, Category Attribute, Category, Product) zijn op 100% voltooid
- [ ] Flows zijn opnieuw opgebouwd op de nieuwe stores, of de support heeft de overschakeling bevestigd (optie B)
