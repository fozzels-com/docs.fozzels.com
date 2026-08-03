---
id: '103000368009'
title: 4.3.3. Het schrijven van effectieve prompts (Aanbevelingen)
sidebar_position: 10
slug: /content-creation-flows/writing-effective-prompts-recommendations
description: Deze gids biedt praktisch advies en best practices voor het structureren en schrijven van prompts van hoge kwaliteit die gepersonaliseerde, professionele, unieke inhoud opleveren.
keywords:
- invoerprompt
---

Deze gids biedt praktisch advies en best practices voor het structureren en schrijven van **prompts van hoge kwaliteit en dynamisch** die gepersonaliseerde, professionele en unieke inhoud opleveren, verder gaan dan alleen attributen invoegen.

### **Best practices voor het genereren van prompts van hoge kwaliteit**

Volg deze zes kernbevelen om de effectiviteit en duidelijkheid van uw prompts te maximaliseren:

1\. Creëer een duidelijke structuur.
**Gebruik** headers, alinea's en lijsten (HTML-tags zoals `<h1>`, `<ul>`, `<li>`) om de tekst visueel te organiseren. Een goed gestructureerde prompt leidt meestal tot goed gestructureerde uitvoer.
2\. Controleer altijd de beschikbaarheid van gegevens.
**Vermijd** het rechtstreeks invoegen van attributen als u niet kunt garanderen dat de waarde aanwezig is voor alle producten. Als een kenmerkwaarde ontbreekt, blijft er een lege ruimte in de gegenereerde tekst.
**Verpak** het kenmerk en de omringende tekst in een **als blok** (voorwaardelijke logica).
_Voorbeeld: `if $material Materiaal: $material end` (De tekst "Materiaal:" wordt alleen weergegeven als het `$material` attribuut ingevuld is)._
3\. Zorg voor afsluiting van tags.
**Controleer** dat alle gepaarde tags die in uw prompts worden gebruikt, correct gesloten zijn (bijv. `<strong>` wordt gesloten met `</strong>`). Onjuist gesloten tags kunnen opmaakfouten in de uiteindelijke uitvoer veroorzaken.

4\. Vermijd herhaling.
**Voeg** dezelfde kenmerkwaarde niet meerdere keren in verschillende blokken in. Dit overlaadt de tekst en kan ertoe leiden dat de AI repetitieve, onnatuurlijke inhoud genereert.

5\. Schrijf "Menselijk" (Toon en betrokkenheid).
**Stelt u voor** dat u een copywriter bent die de klant betrekt. Voeg levendige details en nadruk toe, en spreek de gebruiker rechtstreeks aan om de tekst natuurlijk en overtuigend te maken.
_Voorbeeld: `if $brand Betrouwbaarheid van merk $brand — een geweldig keuze voor uw comfort. end`_
6\. Controleer het resultaat.
Klik op **Opslaan en voorbeeld** om precies te zien hoe uw prompt werkt op echte producten en met hun beschikbare attributen. Deze stap is essentieel om fouten in logica, syntaxis of toon op te sporen voordat u een grote batch uitvoert.
