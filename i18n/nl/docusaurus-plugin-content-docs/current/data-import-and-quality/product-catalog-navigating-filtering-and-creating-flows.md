---
title: Product Catalog — Navigeren, Filteren en Flows Maken
sidebar_position: 9
slug: /data-import-and-quality/product-catalog-navigating-filtering-and-creating-flows
description: >-
  De Catalog toont alle producten uit uw aangesloten winkel. Leer hoe u deze
  navigeert, producten filtert met de condition query builder, en een gerichte
  Content Flow maakt op basis van een selectie.
---

De Catalog toont alle producten uit uw aangesloten winkel. Het is uw centrale weergave van productgegevens in Fozzels.

Ga naar [Catalog](https://app.fozzels.com/catalog)

---

## Navigeren in de Catalog

### Store selector

Selecteer bovenaan de pagina welke winkelproducten u wilt bekijken. Elke winkel wordt weergegeven met de integratienaam, website en locale.

### Productlijst

Producten worden weergegeven in een gepagineerde tabel (standaard 25 per pagina). U kunt:

- **Sort** op een zichtbare kolom
- **Toggle column visibility** — attribuutkolommen weergeven/verbergen
- **Full-screen mode** — de tabel uitbreiden zodat deze het scherm vult
- **Hover a product row** — productafbeeldingen bekijken zonder het product te openen

### Productdetail

Klik op een product om de detailpagina ervan te openen met:

- Volledige afbeeldingengalerie (hoofdafbeelding + miniaturen)
- Alle attribuutwaarden voor dat product in deze winkel
- Directe koppelingen terug naar de integratie en website

---

## Producten filteren

Gebruik de **Condition Query Builder** om producten op attribuutwaarden te filteren.

- Bouw voorwaarden met AND/OR logica
- Filter op elk attribuut waarvoor de **Filterable** vlag is ingeschakeld in Integration → Attributes
- Voorbeelden:
  - "description is empty"
  - "category equals Electronics AND price is greater than 100"
  - "sku contains ABC"

Klik **Search** om het filter toe te passen. Het productaantal in de koptekst wordt bijgewerkt en toont hoeveel producten overeenkomen.

Klik **Reset** om het filter wis en alle producten weer te geven.

> Als een attribuut niet in de filterbuilder verschijnt — ga naar Integration → Attributes en schakel de **Filterable** vlag in voor dat attribuut.

---

## Een Flow vanuit de Catalog maken

De Catalog is de snelste manier om een gerichte Content Flow te maken:

1. Bouw een filter om de producten te vinden die u wilt verwerken (bijv. "description is empty")
2. Selecteer de overeenkomende producten (checkbox in elke rij, of selecteer alles over pagina's)
3. Klik **"Create Flow on Selected Products"** — dit opent de Flow-aanmaakwizard vooringevuld met uw selectie als voorwaarde
4. Voltooi de Flow-setup (AI model, prompt, doelattribuut)

Dit is ideaal wanneer u een specifieke subset van producten wilt verwerken in plaats van handmatig voorwaarden in de Flow-wizard in te stellen.

---

## Veelgestelde problemen

**Geen producten zichtbaar**

- De integratie is nog niet opgehaald — ga naar uw [Integration](https://app.fozzels.com/integrations/definitions) en activeer een product pull
- Zorg ervoor dat de winkel actief is

**Filterattributen ontbreken in de condition builder**

- Het attribuut moet de **Filterable** vlag hebben — ga naar Integration → Attributes en schakel deze in

**Productafbeeldingen worden niet weergegeven**

- Afbeeldingen worden uit uw winkel opgehaald — als afbeeldingen ontbreken in Fozzels, controleer of de integratie correct wordt opgehaald en of de media-basis-URL is geconfigureerd (Magento)

**Producten zijn verouderd**

- Activeer een handmatige pull van uw Integration pagina, of wacht tot de volgende geplande pull
