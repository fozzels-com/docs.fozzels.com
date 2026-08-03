---
id: '103000399446'
title: 'Release 6.1-6.2: Schaalbaarheid & Verbeterde Gegevensnauwkeurigheid'
sidebar_position: 10
slug: /fozzels-releases-updates/release-6-1-6-2-scalability-enhanced-data-precision
description: Deze update richt zich op het optimaliseren van platformprestaties voor large-scale data en het uitbreiden van gegevensverzamelingsmogelijkheden, zodat u elk detail hebt dat nodig is
keywords:
- invoerprompt
- werkstroom
- ophalen
---

Deze update richt zich op het optimaliseren van platformprestaties voor large-scale data en het uitbreiden van gegevensverzamelingsmogelijkheden, zodat u elk detail hebt dat nodig is om zeer kwalitatieve product content te genereren.

### Schaalbare Product Imports (Product Pull)

Fozzels wordt nog efficiënter voor large-scale e-commerce projecten. We hebben onze import architectuur verbeterd om naadloze gegevensupdates te garanderen, ongeacht de grootte van de catalogus.

-   **Wat is Nieuw:** We hebben een **adaptief tijdmechanisme** geïntroduceerd om de verwerking van grote gegevensstromen te optimaliseren.

-   **Het Resultaat:** Zelfs als uw catalogus **honderdduizenden items** bevat, blijft synchronisatie stabiel, flexibel en consistent zonder procesonderbrekingen.

### WooCommerce: Aangepaste Meta Velden & Betrouwbare Synchronisatie

We hebben WooCommerce-gebruikers de flexibiliteit gegeven om exact te kiezen welke gegevens ze willen gebruiken in Fozzels.

-   **Selectieve Meta Velden:** U kunt nu specifieke **aangepaste meta velden** synchroniseren die vereist zijn voor uw content generatie. Voer eenvoudig de veldcodes of groepvoorvoegsels in tijdens setup, en het systeem haalt alleen de benodigde informatie op.

-   **Naadloze Start:** We hebben de logica voor productidentificatie verbeterd. Zelfs als uw WordPress-site interne ID's gebruikt in plaats van standaard SKUs, is de verbinding succesvol en uw catalogus volledig ingevuld.

### Lightspeed: Diepe Specificatie Scan

We hebben het systeem geleerd om gegevens dieper in de Lightspeed-structuur op te vangen, zodat uw AI-gegenereerde content zo informatief mogelijk is.

-   **Wat is Nieuw:** Fozzels herkent en extraheert nu gegevens uit **geneste tweedeniveau-specificaties** die eerder werden genegeerd.

-   **Het Voordeel:** De AI krijgt toegang tot een volledige set productkenmerken. Meer specifieke gegevens leiden tot scherpere prompts en hogere-kwaliteit content.

### Magento 2: Media Display Controle

Een belangrijk update voor degenen die testomgevingen gebruiken om content voor te bereiden en te verifiëren voordat deze live gaat.

-   **Overschrijf Base Media URL:** Voor Magento 2-winkels kunt u nu handmatig het pad naar uw afbeeldingsbron wijzigen.

-   **Het Resultaat:** De perfecte oplossing voor **Stage Stores**. Zelfs als stage-afbeeldingen op niet-standaard adressen zijn opgeslagen, worden ze altijd correct weergegeven in uw Fozzels-catalogus.

### Verbeteringen & Bug Fixes

-   **Verbeterde Flow Logica:** Opgelost weergavefout voor filtervoorwaarden in gedupliceerde flows. Eerder kon het gebeuren dat als een flow een datumvoorwaarde bevatte, andere opties in de UI niet zichtbaar waren. Dit is nu opgelost voor een consistentere gebruikerservaring.

-   **Kalender & Datums:** Opgelost initialisatieconflicten voor `date` en `datetime` velden die eerder serverfouten veroorzaakten.

-   **Prestatie Boost:** Geoptimaliseerde cataloguspagina laadsnelheden voor een soepelere workflow.

-   **UI Stabiliteit:** Verbeterde interfacestabiliteit bij het werken met complexe filterconfiguraties.

**_Fozzels wordt steeds beter dankzij uw feedback. Dank u dat u deel uitmaakt van onze reis!_**
