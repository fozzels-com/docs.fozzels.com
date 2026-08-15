---
id: '103000369091'
title: 4.7.1 Bijhouden van gegenereerde resultaten. Dashboard.
sidebar_position: 18
slug: /content-creation-flows/tracking-of-the-generated-results-dashboard
description: Het Dashboards (of dagelijks totaal batchlijst) dient als uw commandocentrum, met een volledig overzicht van alle inhoudsgenering en synchronisatieprocessen
---

Het Dashboards (of dagelijks totaal batchlijst) dient als uw commandocentrum, met een volledig overzicht van alle inhoudsgenering en synchronisatieprocessen. Deze interface stelt u in staat proactief de status bij te houden, fouten op te sporen en alle gegenereerde gegevens efficiënt te beheren.

1. Dashboardoverzicht

Het hoofdbestand is een gegevenstabel gegroepeerd op datum van inhoudsgenering.

1.1 Belangrijkste statistieken

De hoofdtabel toont zes belangrijkste statistieken die u helpen de inhoudsstatus voor een bepaalde dag te controleren:

- **Datum**: De datum waarop de inhoud is gegenereerd.
- **Productaantal**: Het totale aantal producten dat voor inhoudsgenering is gepland.
- **Voltooiingsaantal**: Het aantal inhoudsunits dat met succes is gegenereerd.
- **Gesynchroniseerd aantal**: Het aantal inhoudsunits dat met succes is gesynchroniseerd.
- **Waarschuwingsaantal**: Het aantal inhoudsunits met opmerking die uw aandacht nodig hebben.
- **Aantal mislukkingen**: Het aantal inhoudsunits dat niet kan worden gegenereerd of gesynchroniseerd vanwege kritische fouten.

Gebruikers kunnen op de datum of op Voltooiingsaantal klikken om een gedetailleerde weergave van alle voltooiingen voor die specifieke dag te openen.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/3eVmE5L69-qrrXE1wrp9l5KjD88-GmSH0A.png)

1.2. Gedetailleerde weergave en weergaveconfiguratie

Als u op een datum klikt, wordt een gedetailleerde tabelweergave met specifieke informatie over elke inhoudsunit geopend.

1.2.1. Verplichte kolommen

De gedetailleerde tabel bevat negen verplichte kolommen: Stroom, SKU, Bevestigd, Miniatuur, Prompt, Aangemaakt op, Doelattribuut, Uitgevoerd op en Gesynchroniseerd op.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/yOUsE1jBYf6AFN1hwszHua430j9ysDetdQ.png)

1.2.2. Weergaveconfiguratie-gereedschappen

Hulpmiddelen boven de tabel stellen u in staat uw gegevensweergave voor efficiëntie aan te passen:

**Alleen met fouten weergeven.** Deze schakelaar filtert de tabel snel om alleen records weer te geven waar generatie- of synchronisatieproblemen zijn opgetreden.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/j--J5uJGSoiU6L54C7ykpw09czX8hQ86Cg.png)

**Kolom zichtbaarheid.** In deze vervolgkeuzelijst kunt u bepaalde kolommen in de tabel verbergen of weergeven en u op relevante informatie concentreren.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/a2xTbvhRdJxaIqyUO1tJK3-K0FSstAq5tg.png)

**Paginering.** Met de optie "Tonen \[aantal\] items" kunt u het aantal rijen dat per pagina wordt weergegeven aanpassen (5, 10, 25, 50 of 100).
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/aPLUy45_b4zLJDCLFCuSfM-OCwWerXDo8g.png)

**Datumbereikfilter.** Stelt selectie van een bepaalde datum of datumbereik in voor weergaveresultaten.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qpq1evm1oh-KTj5jr18RC3XOrCrg-vsDYg.png)

1.2.3. Kolom filters

Elke kolom bevat een ingebouwd filterhulpmiddel voor snelle zoek- en sortering:

- **Stroom**: Filtert producten op een of meer geselecteerde stromen (selectie uit een lijst).
- **SKU**: Gebruikt voor het zoeken naar een bepaald product via SKU (tekstzoek).
- **Miniatuur**: Filtert producten op basis van afbeeldingsaanwezigheid ("Afbeelding ontbreekt" of "Afbeelding bestaat") (schakeling/selectie).
- **Datumkolommen**: Datumkolommen (Aangemaakt op, Uitgevoerd op, Gesynchroniseerd op) hebben velden "Van" en "Tot" voor het selecteren van een datumbereik.

1.3. Kolom detail en interactie

Dit gedeelte beschrijft interacties met enkeleposten, die dienen als alternatief voor massaacties voor granulaire controle.

SKU: Toont product SKU, wat een klikbare link is naar de productpagina in Fozzels. Bevat ook een pictogram dat linkt naar de productpagina in de geïntegreerde winkel.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/A_jL3Ul08ZPx8MakhmS7P3tNfAeYmtyhtw.png)

Bevestigd: Geeft de status aan wanneer inhoud is goedgekeurd en klaar is voor synchronisatie.

Doelattribuut: Als u op de cel klikt, wordt het venster "Voltooiingsresultaat bewerken" geopend, waarmee u inhoud kunt beoordelen en bewerken.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/m_jrPUwivZj3FjRSdeYeWZAvFYUuyCBAGw.png)

Prompt: Als u klikt, opent u een pop-up om de volledige prompttekst weer te geven en te kopiëren.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/pEEWkzMEzEfqU5WuU7sFLmT9fvZbxMV-5g.png)

Inhoud regenereren: De knop "Regenereren" in het venster "Voltooiingsresultaat bewerken" wordt gebruikt om inhoudshergenering in te stellen.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/c5ZO3vrJJlYMqytY7IAluozmh2QAXngM_Q.png)

1.4. Massaacties en operationele controle

Het Dashboards biedt robuuste functionaliteit voor efficiënt beheer van inhoud via massaacties, waardoor het probleem van moeizame individuele bevestigingen wordt opgelost.

1.4.1. Massaacties uitvoeren

Selectiemechanisme: Gebruikers selecteren items met behulp van selectievakjes of de functie Alles op deze pagina selecteren.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/cLqudNyTCBxzEB1wUw_lB446fY5cRD45Aw.png)

Beschikbare acties: Het menu Acties biedt de volgende functies voor batchverwerking:
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/HW2UYiSK33CeIRz6osXy6htBVLzkTpk0pA.png)

- **Bevestig alles, sla op en synchroniseer**: Keurt goed en initieert synchronisatie voor de geselecteerde inhoud.
- **Regenereer, sla op en synchroniseer**: Initieert inhoudshergenering voor de geselecteerde producten en hun vervolgingsynchronisatie.

1.4.2. Functionaliteit "Geselecteerde weergeven"

Gerichte werkruimte: De functie "Geselecteerde weergeven" isoleert geselecteerde items in een aparte tabel voor een gefocuste werkruimte.

Volledige functionaliteit behoud: In deze modus behoudt de gebruiker alle functies van de standaardtabel: filteren, detailweergave en het uitvoeren van massaacties op de geselecteerde gegevenssubset.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/f7zwjwWHrNA6OT8wJVRrxQ46WMuqPx1J7A.png)

1.4.3. Operationele waarborgen

Een controle-systeem met meerdere fasen is geïmplementeerd om nauwkeurigheid te garanderen en onbedoelde uitgaven te voorkomen:

Verplichte bevestiging: Een waarschuwingspop-up verschijnt voordat een resource-intensieve massaactie ("**Bevestig en synchroniseer**", "**Regenereer en synchroniseer**") wordt uitgevoerd.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/0ubsrmale7wTjSetyZBAJCqZYw3CK5u0iQ.png)

![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/sPmeRKZIE_-ybW-dwpbBS3bSEm0XtG69xQ.png)

Stroomlogica-controle: Deze pop-ups bevatten een opmerking over het verwachte synchronisatiegedrag:

Inhoud uit volledig geautomatiseerde stromen wordt automatisch goedgekeurd.
Inhoud uit standaardstromen wordt alleen gegenereerd opnieuw, waarvoor daarna handmatige goedkeuring nodig is.

Resource-controle: Het systeem verifieert de status voordat een bewerking start: generatie zal niet beginnen als de stroom inactief is, en synchronisatie zal niet worden uitgevoerd als de doelintegratie inactief is.

1.5. Diagnostica en waarschuwingen (probleemoplossing)

Het Dashboard biedt duidelijke berichten en hulpmiddelen voor diagnostica:

Foutdetails (Tooltips): In geval van synchronisatie- of generatiefouten zijn tooltips beschikbaar die het gedetailleerde bericht geven met uitleg van de oorzaak van de fout.
"Voltooiing ziet er verdacht uit": Een waarschuwing die op onnatuurlijke inhoud wijst (botachtige reacties, HTML of Markdown). Deze inhoud wordt niet gesynchroniseerd en vereist tussenkomst van de gebruiker.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/NSPyqq1WcPjA-YYLdrczhDUakvL55U2vIQ.png)
"Dubbele HTML-entiteitscodering gedetecteerd": Deze waarschuwing verschijnt wanneer de tekst meer dan eenmaal is gecodeerd, wat ertoe kan leiden dat de tekst onjuist wordt weergegeven.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/UGH7_knyB9J6V0GXvznxuh1latc_mLlX-Q.png)
"Het voltooiingsresultaat van het product is leeg. Probeer inhoud opnieuw te genereren." Het resultaat is leeg.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/4w2KbQmr8MEpBIgJ6373dwywTEYwFu6TYA.png)

"Product is verwijderd op integratie": Geeft aan dat het product niet meer in de geïntegreerde winkel bestaat.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/nO0NOjYhJ94dqp7jQPD8tvUJ-jEil4tHcA.png)
"Regel is uitgeschakeld": Geeft aan dat de inhoud is gegenereerd door een stroom die niet langer actief is.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qAHiFoO27TOf4TPKQ9pBfsyriEs7rLXnVg.png)
