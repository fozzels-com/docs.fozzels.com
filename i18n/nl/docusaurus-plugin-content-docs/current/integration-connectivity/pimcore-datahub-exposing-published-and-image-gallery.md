---
title: '2.11.2. Pimcore: attributen beschikbaar maken via DataHub (Published-vlag en afbeeldingengalerij)'
sidebar_position: 24
slug: >-
  /integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery
description: >-
  Fozzels ontdekt de product- en categorieattributen van Pimcore via uw
  DataHub GraphQL-endpoint. Deze handleiding legt uit hoe u de published-vlag en
  uw afbeeldingengalerij beschikbaar maakt, zodat Fozzels ze kan lezen en
  schrijven.
---

In tegenstelling tot platforms met een vast productschema kunt u in Pimcore uw eigen data-objectclasses modelleren. Daarom levert Fozzels hiervoor geen vaste attributenlijst mee. In plaats daarvan **ontdekt Fozzels attributen door uw DataHub GraphQL-endpoint te introspecteren**: wat de Schema Definition van het endpoint beschikbaar maakt, is precies wat Fozzels ziet.

Ontbreekt een attribuut in Fozzels, dan ontbreekt het vrijwel altijd in het **Query Schema** van het endpoint in Pimcore.

## Hoe het schema wordt vertaald naar Fozzels-attributen

| DataHub Schema Definition | Effect in Fozzels |
| --- | --- |
| Veld in het **Query Schema** | Het attribuut wordt aangemaakt en de waarden worden opgehaald |
| Veld in het **Mutation Schema** | Het attribuut wordt gemarkeerd als **writable** (schrijfbaar), zodat Flows gegenereerde content ernaartoe kunnen sturen |

> Een veld dat **alleen** aan het Mutation Schema is toegevoegd, wordt nooit een attribuut: er valt niets te lezen. Voeg een veld altijd eerst toe aan het Query Schema en voeg het daarnaast ook toe aan het Mutation Schema wanneer Fozzels ernaar moet kunnen schrijven.

Na **elke** wijziging in de Schema Definition:

1. **Sla** de DataHub-configuratie in Pimcore **op**.
2. Open in Fozzels de integratie en klik op **Synchronize**. Hiermee wordt het schema opnieuw ingelezen en worden de nieuwe attributen aangemaakt.
3. Schakel op het tabblad **Attributes** het nieuwe attribuut in en stel indien nodig de vlaggen **Filterable** / **Mutable** in.

## De published-vlag toevoegen

De publicatiestatus van Pimcore is een *systeemkolom* en DataHub maakt deze standaard niet beschikbaar. U moet de kolom expliciet aan het schema toevoegen.

**In Pimcore:**

1. Ga naar **Settings → Data Hub** en open de endpointconfiguratie die Fozzels gebruikt.
2. Open het tabblad **Schema Definition** en bewerk de veldconfiguratie van uw **Product**-class (herhaal dit voor de Category-class als u de vlag ook daar wilt hebben).
3. Open in de attribuutboom de groep **System** en voeg **`published`** toe aan de kolommen van het **Query Schema**.
4. Voeg de vlag ook toe aan het **Mutation Schema** als Fozzels objecten moet kunnen publiceren of depubliceren.
5. Sla de configuratie op.

**In Fozzels:** open de integratie, klik op **Synchronize** en schakel vervolgens het nieuwe attribuut `published` in op het tabblad **Attributes**.

> **Belangrijk:** standaard haalt Fozzels alleen **gepubliceerde** objecten op, waardoor het attribuut bij elk product `true` zou aangeven. Wilt u met beide statussen werken, schakel dan **Include unpublished objects** in bij de instellingen van de integratie in Fozzels. Niet-gepubliceerde producten komen dan binnen als gewone producten en het attribuut `published` maakt het onderscheid: u kunt erop filteren en het gebruiken in Flow-voorwaarden.

## De afbeeldingengalerij beschikbaar maken

### Productafbeeldingen lezen

Fozzels bouwt de mediagalerij van een product op uit **elk veld van het type afbeelding** dat het Query Schema beschikbaar maakt. De veldnamen doen er niet toe. Ondersteunde veldtypen:

- **Image**
- **Advanced Image** (afbeelding met hotspots/markers)
- **Image Gallery**

Voeg uw afbeeldingsveld(en) toe aan het **Query Schema** van de Product-class, sla op en klik in Fozzels op **Synchronize**. Alle afbeeldingen uit alle beschikbare afbeeldingsvelden verschijnen in de galerij van het product. Bestaande alt-teksten worden per winkeltaal gelezen uit het metadata-item `alt` van de asset.

### Gegenereerde afbeeldingen terugsturen

Om ervoor te zorgen dat Fozzels door AI gegenereerde afbeeldingen terug in Pimcore kan uploaden, moet het endpoint aan drie voorwaarden voldoen:

1. **Een schrijfbaar Image Gallery-veld.** De Product-class moet een veld van het type **Image Gallery** hebben dat beschikbaar is in het **Mutation Schema**. Fozzels herkent het aan het type, dus het mag elke naam hebben. Gegenereerde afbeeldingen worden **toegevoegd** aan de galerij: uw bestaande afbeeldingen worden nooit vervangen.
2. **Asset-queries en -mutaties ingeschakeld.** Schakel in de Schema Definition de entiteit **Asset** in voor zowel **query** als **mutation**. Fozzels gebruikt dit om het afbeeldingsbestand op te slaan (`createAsset`) en om alt-teksten van de asset te lezen en te schrijven (`getAsset` / `updateAsset`).
3. **Workspace-rechten.** Op het tabblad **Security Definition** van het endpoint moet de workspace het volgende toestaan:
   - **read + update** op de productobjecten,
   - **read** op de assets-substructuur met uw productafbeeldingen,
   - **create** in de map waar nieuwe afbeeldingen terecht moeten komen, en **update** op assets (voor alt-teksten).

**Waar uploads terechtkomen:** een gegenereerde afbeelding wordt opgeslagen naast de bestaande galerijafbeeldingen van het product. Voor producten die nog geen afbeeldingen hebben, configureert u de instelling **Asset folder** bij de integratie in Fozzels (bijvoorbeeld `/products`). Die map moet in Pimcore bestaan en de workspace moet daar **create** toestaan.

### Alt-teksten

Fozzels schrijft alt-teksten naar de metadata van de asset onder de gebruikelijke naam **`alt`**, gekoppeld aan de taal van de winkel. De taal moet zijn geconfigureerd in de Pimcore-omgeving (**Settings → System Settings → Localization**). Pimcore laat metadata in onbekende talen stilzwijgend vallen en Fozzels meldt dit als een fout in plaats van de tekst te verliezen.

## Probleemoplossing

| Melding in Fozzels | Oorzaak | Oplossing |
| --- | --- | --- |
| Een attribuut dat u verwacht ontbreekt | Het veld staat niet in het **Query Schema** (of alleen in het Mutation Schema) | Voeg het toe aan het Query Schema, sla op, **Synchronize** |
| *Pimcore does not accept writes to … — the field is read-only on this DataHub endpoint* | Het veld staat niet in het **Mutation Schema** | Voeg het toe aan het Mutation Schema, sla op, **Synchronize** |
| *Pimcore exposes no writable image gallery on …* | Geen **Image Gallery**-veld in het Mutation Schema | Voeg het galerijveld toe aan het Mutation Schema |
| *No Pimcore asset folder is configured for this integration…* | Het product heeft nog geen afbeeldingen en de instelling **Asset folder** is leeg | Stel de **Asset folder** in bij de integratie in Fozzels |
| *The Pimcore asset folder … does not exist on this instance* | Het geconfigureerde pad is onjuist | Laat de instelling verwijzen naar een bestaande map in de Pimcore-assetboom |
| *Pimcore refused to store the image …* | De workspace mist **create** op de doelmap | Verleen create in de Security Definition van het endpoint |
| *Pimcore accepted the update of asset … but kept no alt text for …* | De taal van de winkel is niet geconfigureerd in Pimcore | Voeg de taal toe onder **Settings → System Settings → Localization** |
