---
id: '103000367852'
title: 2.1. Wat is een Fozzels-integratie? (Concept en vereisten).
sidebar_position: 1
slug: /integration-connectivity/what-is-a-fozzels-integration-concept-and-requirements
description: Dit document biedt een fundamenteel inzicht in wat een Fozzels-integratie is, de rol ervan in de inhoudslevenscyclus en de vereiste vereisten voor het
---

Dit document biedt een fundamenteel inzicht in wat een Fozzels-integratie is, de rol ervan in de inhoudslevenscyclus en de vereiste vereisten voor het tot stand brengen van een verbinding.

Een Fozzels-integratie brengt een veilige, tweerichtingsgegevensverbinding tot stand tussen het Fozzels-platform en uw externe e-commerce-systeem (bijv. Magento, Shopify, WooCommerce). Deze verbinding is het startpunt voor alle inhoudsautomatisering, waardoor Fozzels productattributen kan **ophalen** en gegenereerde inhoud terug kan **pushen**.

### 1\. De rol van integratie in de inhoudslevenscyclus

De integratie fungeert als gegevenspijplijn die het hele inhoudsgenereringsproces ondersteunt:

1.  **Gegevens ophalen:** Fozzels gebruikt de verbinding om automatisch productgegevens (attributen, afbeeldingen, categorieën, prijzen) van uw winkel naar de Fozzels Catalogus op te **halen**. Deze gegevens vormen de invoer voor de AI-prompts.

2.  **Flow-uitvoering:** De Content Flows worden in de Fozzels-omgeving uitgevoerd met behulp van de opgehaalde attributen en het geselecteerde AI-model om nieuwe inhoud te genereren.

3.  **Gegevens pushen:** Fozzels gebruikt de verbinding om de nieuw gegenereerde inhoud (bijv. productbeschrijvingen, metatitels) terug naar de aangewezen doelattributen in uw e-commerce-systeem te **pushen**.

### 2\. Integratie vereisten en vereisten

Voordat u een integratie instelt, moeten bepaalde vereisten op uw e-commerce-platform worden vervuld:

1.  **API-toegang:** Fozzels vereist beveiligde toegang tot de Application Programming Interface (API) van uw winkel. Dit betreft doorgaans het genereren van een beveiligde token of API-sleutel aan de zijde van het e-commerce-platform.

2.  **Lees-/schrijfmachtigingen:** De gegenereerde API-gegevens moeten zowel **leesmachtiging (pull)** hebben om toegang te krijgen tot bestaande productattributen als **schrijfmachtiging (push)** om de doelattributen (de velden waarin gegenereerde inhoud wordt opgeslagen) te wijzigen.

3.  **Integratietype:** Afhankelijk van uw platform (bijv. Magento 2 of Shopify) kan de integratiemethode het installeren van een specifieke Fozzels-extensie/app of configuratie van native API-sleutels en URL's betreffen.

4.  **Attributeninstelling (na integratie):** Eenmaal verbonden is Fozzels afhankelijk van de bronatributen met de **Filterbare** vlag en de doelattributen met de **Mutable** vlag ingeschakeld.

### 3\. Integratiemanagement

Integratie-instellingen worden beheerd in het tabblad **Configuratie** en **Websites en winkels** van de Fozzels-interface.

-   U kunt tegelijkertijd meerdere integraties beheren, zodat u inhoud in verschillende e-commerce-instanties of regionale winkels kunt synchroniseren.

-   De stabiliteit van het inhoudsautomatiseringsproces is direct afhankelijk van de stabiliteit en beschikbaarheid van de ingestelde integratie.
