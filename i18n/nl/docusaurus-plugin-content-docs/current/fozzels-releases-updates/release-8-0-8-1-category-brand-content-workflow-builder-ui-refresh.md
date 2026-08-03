---
id: '103000409878'
title: Release 8.0-8.1 - Categorie- & Merkcontent, Workflow Builder, UI-vernieuwing
sidebar_position: 16
slug: /fozzels-releases-updates/release-8-0-8-1-category-brand-content-workflow-builder-ui-refresh
description: We zijn verheugd de v8.0 & v8.1 update van Fozzels te introduceren. Deze release richt zich op het uitbreiden van mogelijkheden voor contentgeneratie, flexibiliteit
keywords:
- invoerprompt
- werkstroom
- voltooiing
---

We zijn verheugd de v8.0 & v8.1 update van Fozzels te introduceren. Deze release richt zich op het uitbreiden van mogelijkheden voor contentgeneratie, flexibiliteit in workflowaanpassing, betere databeveiliging en een vernieuwde interface van het platform.

# **1\. Content voor categorieën & merken (Shopware & Magento 2)**

## Na een langere ontwikkel- en voorbereidingsperiode rollen we ondersteuning uit voor het genereren en synchroniseren van content voor categorie- en merkpagina's.

-   **Categorie- & merkflows** — Genereer HTML-beschrijvingen, metatitels, metabeschrijvingen en aangepaste kenmerken direct voor categorieën en merken.
-   **Volledige integratie** — Deze nieuwe flowtypen komen met alle standaardfuncties van het platform: batchverwerking, revisiegeschiedenis en automatische synchronisatie.

## **2\.  Workflow Builder & Rule Engine**

Met de nieuwe module **Rule Engine** configureert u automatische nabewerking van content voordat deze wordt gepubliceerd.

-   **Visuele editor** — Bouw logische relaties met de blokken Condition, Group en Action.
-   **Verwerkingsregels** — Formatteer tekst automatisch (bijv. als een titel langer is dan 50 tekens → inkorten naar 45 tekens met behoud van hele woorden).
-   **Regeltoewijzing** — Workflows die u maakt, kunnen worden toegepast op product-, categorie- of merkflows.

### **Audit van historische data & contentvalidatie**

-   **Controle van bestaande content** — Voer workflows uit op eerder gegenereerde resultaten om items te markeren die bewerking of hergeneratie nodig hebben.
-   **Beslissingsmatrix** — Configureer voorwaardelijke vertakkingen (Yes / No / Always) voor complexe validatielogica.
-   **Contentfilters (Contains)** — Detecteer stopwoorden, verboden tekens of afwijkingen in de opmaak.
-   **Acties (Truncate & Mark as Suspicious)** — Kort tekst automatisch in of markeer resultaten met een reden (bijv. "Title too long") en pauzeer de automatische synchronisatie voor dat item.

## **3\. Interface-update (sidebarnavigatie)**

We hebben de platformlayout opnieuw ontworpen voor eenvoudigere navigatie en een efficiëntere werkomgeving.

-   **Opgeruimde header** — De bovenbalk is opgeschoond en bevat nu alleen contextuele elementen (navigatie, taal, meldingen en status).
-   **Gestructureerde sidebar** — Modules zijn gegroepeerd per sectie (Main, Catalog, Integrations, Customers, AI Flows, Tools).
-   **Weergavemodi** — Klap de sidebar in tot een compacte weergave om werkruimte vrij te maken.
-   **Statusindicatoren** — NEW- en Soon-badges helpen u nieuwe modules te herkennen.

## **4\. Openbare Knowledge Base**

We hebben een zelfstandig documentatieportaal voor platformgebruikers gelanceerd.

-   **Meertalig** — Materialen en instructies zijn beschikbaar in 6 talen.
-   **Gestructureerde handleidingen** — Stapsgewijze instructies voor het instellen van integraties, workflows, mapping en AI-modellen.

## **5\. Integratie-updates (Shopware, VTEX, NextChapter)**

### Shopware Engine & Properties (Select / Multi-Select)

-   **API-optimalisatie** — De vernieuwde connector zorgt voor stabiele prestaties bij grote datavolumes.
-   **Property-verwerking** — Directe generatie en synchronisatie voor gestructureerde propertyvelden.
-   **Waardecontrole** — De AI respecteert vastgelegde beperkingen en geeft één waarde door voor Select-velden of meerdere waarden voor Multi-Select-velden.
-   **Vision AI** — Beeldanalyse om productparameters automatisch te bepalen (stijl, kleur, type kraag, enz.).

### NextChapter & VTEX: ALT-tekst

-   **ALT-tags synchroniseren** — Genereer en push afbeeldingsbeschrijvingen om SEO en toegankelijkheid te verbeteren.

## **6\. Uitgebreide CSV-integraties**

### Media Gallery

-   **Standaardisatie** — Voor CSV-integraties is een volledige Media Gallery-module toegevoegd.
-   **Preview & Vision AI** — Bekijk afbeeldingen direct in de tabel, geef URL's door aan prompts en genereer mediacontent.

### Mapping & parsing

-   **Live Preview** — Bekijk de structuur van het CSV-bestand en voorbeelddata direct in de interface.
-   **Flexibele mapping** — Configureer veldnamen, formaten en kolomkoppelingen.
-   **Parsingopties** — Ondersteuning voor verschillende scheidingstekens (komma, puntkomma, tab) en encodings.

## **7\. HTML-controle & codevalidatie**

### Editorbeheer (Enable Editor)

-   **Raw code-modus** — Schakel de visuele editor uit om de exacte AI-gegenereerde code te behouden zonder automatische tag-aanpassingen (nuttig voor FAQ-accordeons, ingebedde styles en [Schema.org](https://schema.org/) / JSON-LD).
-   **Weergavemodi** — Wissel tussen codeweergave (Show HTML) en gerenderde voorvertoning.

### Validatie van HTML-structuur

-   **Automatische controle** — Detecteer niet-gesloten tags of gebroken code in realtime.
-   **Auto-sync-bescherming** — Blokkeer synchronisatie van gebroken elementen automatisch, met een waarschuwing in de tabel: _"Completion looks suspicious, broken or unclosed HTML tags detected."_

_Uw feedback en dagelijkse ervaring met het platform helpen ons Fozzels te blijven verbeteren._
