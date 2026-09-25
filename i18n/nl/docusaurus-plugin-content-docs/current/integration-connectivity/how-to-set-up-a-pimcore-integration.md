---
title: 2.11.1. Een Pimcore-integratie instellen
sidebar_position: 23
slug: /integration-connectivity/how-to-set-up-a-pimcore-integration
description: >-
  Verbind uw Pimcore-productcatalogus met Fozzels via de DataHub-module:
  bereid het endpoint en de API-sleutel voor in Pimcore, vul het
  configuratieformulier in en importeer uw producten.
---

Deze handleiding helpt u stap voor stap uw Pimcore-productcatalogus met Fozzels te verbinden.

## Voordat u begint: voorbereiding in Pimcore

Fozzels maakt verbinding met Pimcore via de module **Datahub**, een ingebouwde Pimcore-tool die via een API toegang geeft tot uw gegevens.

In uw Pimcore-omgeving moet een **Datahub-endpoint** zijn geconfigureerd (mogelijk heeft uw Pimcore-beheerder dit al ingesteld). Zo niet, neem dan contact op met uw beheerder of met ons supportteam. U hebt het volgende nodig:

- **Naam van het endpoint:** te vinden in Pimcore, onder **Datahub**, in het veld **Name**.
- **API-sleutel:** wordt naast het endpoint weergegeven, op het tabblad **Security Definition**, in het veld **Datahub API Keys**.

![Pimcore → Datahub → uw endpoint → tabblad General. Het veld Name bevat de naam van uw endpoint](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/01-datahub-endpoint-general-tab.png)

![Het tabblad Security Definition bevat uw API-sleutel en de toegangsregels voor Workspaces](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/02-datahub-security-definition-tab.png)

> **Belangrijk:** in de instellingen van het endpoint (tabblad **Security Definition → Workspaces**) moet leestoegang (**Read**) zijn verleend voor de relevante objecten, vooral voor de map met uw producten (bijvoorbeeld `/products`). Staan uw producten verspreid over meerdere geneste mappen, zorg er dan voor dat voor al deze mappen toegang is verleend.

## 1. Maak de integratie aan

1. Ga naar **Home → Integrations**.
2. Klik op **Create**.
3. Selecteer het platform **Pimcore**.

![Kies Pimcore uit de lijst met integratieplatforms](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/03-choose-pimcore-platform.png)

## 2. Vul het configuratieformulier in

![Name, URL, DataHub endpoint, API key en de optionele velden Product class en Category class](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/04-configuration-form.png)

| Veld | Wat u invoert |
| --- | --- |
| **Name** | Naam van de integratie, voor uw eigen overzicht |
| **URL** | Basisadres van uw Pimcore-omgeving (bijvoorbeeld `https://your-company.pimcore.com`) |
| **DataHub endpoint** | De naam van het endpoint uit Pimcore (bijvoorbeeld `fozzels`) |
| **API key** | De toegangssleutel uit Pimcore (van het tabblad Security Definition) |
| **Product class** | Laat leeg als uw producten zijn opgeslagen in een class met de naam `Product`. Vul alleen in als de class een andere naam heeft |
| **Category class** | Zoals hierboven: laat leeg als categorieën zijn opgeslagen in een class met de naam `Category` |
| **Asset folder** | Optioneel. Alleen nodig als Fozzels nieuwe productafbeeldingen voor u gaat genereren en deze ergens in Pimcore moeten worden opgeslagen (bijvoorbeeld `/products`) |

![Het veld Languages en de schakelaar Include unpublished objects](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/05-languages-and-include-unpublished.png)

| Veld | Wat u invoert |
| --- | --- |
| **Languages** | Door komma's gescheiden lijst met taalcodes (bijvoorbeeld `nl,en`). Elke taal wordt een aparte **Store** in Fozzels |
| **Include unpublished objects** | Standaard uit. Zet dit aan als u wilt dat de synchronisatie ook niet-gepubliceerde producten en categorieën (concepten) ophaalt. Deze worden op dezelfde manier verwerkt als gewone producten en categorieën |

### Synchronisatieschema (Global Pull Schedule)

U kunt het standaardschema laten staan, of **Overwrite Global Pull Schedule** inschakelen en uw eigen tijdstip instellen.

> **Tijd in UTC:** het tijdstip wordt ingesteld in **UTC**, niet in uw lokale tijdzone. Wilt u dat de synchronisatie 's nachts in uw eigen tijdzone draait, reken uw lokale nachtelijke tijdstip dan om naar UTC voordat u het hier invoert.

### Vertraging tussen verzoeken

We raden aan deze velden **niet meteen in te vullen**. Voer eerst een paar synchronisaties uit met de standaardinstellingen. Als alles goed werkt, is verdere configuratie niet nodig. Treden er fouten op, kom dan terug en voeg een kleine vertraging toe.

Klik op **Save**.

## 3. Activeer en importeer producten

1. Zet de schakelaar **Active** aan (rechtsboven).
2. Klik op **PULL WEBSITES AND STORES**. Fozzels haalt uw talen op als afzonderlijke Stores.
3. Zet de schakelaars voor de relevante Website en Store aan.
4. Klik op **Pull products** om producten, categorieën en hun attributen te importeren.

## Als het aantal producten lager is dan verwacht

Zijn er minder producten in Fozzels geïmporteerd dan u in Pimcore hebt, dan is de meest voorkomende oorzaak dat producten in Pimcore niet zijn gepubliceerd (de status **unpublished/draft** hebben). Zet de schakelaar **Include unpublished objects** aan in de integratie-instellingen (Configuration) en voer de synchronisatie opnieuw uit.

> **Tip:** zodra dit is ingeschakeld, krijgen producten een nieuw attribuut **Published** (Yes/No). Hiermee kunt u producten filteren in de catalogus of een specifieke flow erop afbakenen, bijvoorbeeld als u alleen gepubliceerde producten wilt verwerken.

![Producten filteren op het attribuut Published in Manage Products](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/06-manage-products-published-filter.png)

Andere mogelijke oorzaken zijn beperkte toegang tot sommige productmappen, of producten die in Pimcore over meerdere classes zijn verdeeld. Neem in die gevallen het beste contact op met ons of met uw Pimcore-beheerder om de toegangsinstellingen te laten controleren.

Wilt u meer attributen beschikbaar maken, zoals de published-vlag of uw afbeeldingengalerij, zie dan [2.11.2. Pimcore: attributen beschikbaar maken via DataHub](/integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery).

Dat is alles: uw Pimcore-catalogus is nu verbonden. U kunt de gegevens op elk moment vernieuwen door opnieuw op **Pull products** te klikken.
