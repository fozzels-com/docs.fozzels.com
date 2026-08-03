---
id: '103000371114'
title: '3.5. Recursiedetectie: oneindig inhoudsgeneratie voorkomen'
sidebar_position: 8
slug: /data-import-and-quality/recursion-detection-preventing-infinite-content-generation
description: De waarschuwing "Recursie gedetecteerd" signaleert een potentieel conflict in de configuratie van uw Flow waar de output van het generatieproces ook als invoer voor dezelfde process dient
---

De waarschuwing "Recursie gedetecteerd" signaleert een potentieel conflict in de configuratie van uw Flow waar de output van het generatieproces ook als invoer voor hetzelfde process dient. Dit betekent dat uw Flow is ingesteld om gegevens van hetzelfde kenmerk te lezen waarnaar deze tegelijkertijd de nieuw gegenereerde inhoud moet schrijven.

Het meest voorkomende voorbeeld is een Flow die is ontworpen om het veld {Beschrijving} bij te werken (het doelkenmerk), maar de prompt zelf gebruikt de {Beschrijving}-variabele als informatiebron.

### Technische implicatie: de inhoudslus

Wanneer deze configuratie in combinatie met de instelling "Automatisch opnieuw genereren wanneer productenkenmerk veranderd" wordt gebruikt, kan een voortdurende inhoudsgeneratieslus optreden, wat leidt tot onnodig tokenverbruik en uitvoeringscycli.

1.  Dag 1 uitvoering: Fozzels genereert met succes nieuwe inhoud en schrijft deze naar het veld Beschrijving.

2.  Veranderingsdetectie: omdat de waarde van het veld Beschrijving is veranderd, markeert het geïntegreerde e-commercesysteem het product als "bijgewerkt".

3.  Volgende uitvoering: bij de volgende geplande run (bijv. de volgende dag) detecteert de automatiseringinstelling dat het product is "bijgewerkt" en probeert de inhoud opnieuw te genereren.

4.  De lus: deze regeneratie veroorzaakt een nieuwe wijziging, waardoor het proces oneindig wordt geactiveerd.

### Aanbevelingen voor beheer

Hoewel het doelkenmerk soms opzettelijk als invoer wordt gebruikt (bijv. informatie toevoegen aan bestaande tekst), is het van cruciaal belang dat u de automatiseringsinstellingen beheert om deze eindeloze lus te voorkomen.

- **Actie 1**: automatische regeneratie uitschakelen. De meest effectieve manier om de lus te doorbreken is om de optie "Automatisch opnieuw genereren wanneer productenkenmerk veranderd" uit te zetten. Dit zorgt ervoor dat, hoewel de Flow een wijziging in het doelkenmerk veroorzaakt, de automatisering niet automatisch een heruitvoering plant op basis van die specifieke wijziging.
- **Actie 2**: verwijder de recursieve invoer. Indien de bestaande inhoud niet strikt nodig is voor de prompt-logica, verwijdert u de recursieve variabele (bijv. verwijder {Beschrijving}) uit uw prompt. In plaats daarvan vertrouwt u alleen op statische productkenmerken (zoals merk, materiaal, kleur) om te garanderen dat inhoudsgeneratie op onveranderbare gegevens is gebaseerd, wat voortdurende updates verhindert.

