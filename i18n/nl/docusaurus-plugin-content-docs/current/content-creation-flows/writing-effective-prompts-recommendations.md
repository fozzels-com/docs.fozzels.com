---
id: '103000368009'
title: 4.3.3. Het schrijven van effectieve prompts (Aanbevelingen)
sidebar_position: 11
slug: /content-creation-flows/writing-effective-prompts-recommendations
description: Deze gids biedt praktisch advies en best practices voor het structureren en schrijven van prompts van hoge kwaliteit die gepersonaliseerde, professionele, unieke inhoud opleveren.
---

Deze gids biedt praktisch advies en best practices voor het structureren en schrijven van **prompts van hoge kwaliteit en dynamisch** die gepersonaliseerde, professionele en unieke inhoud opleveren, verder gaan dan alleen attributen invoegen.

### **Best practices voor het genereren van prompts van hoge kwaliteit**

Volg deze zes kernbevelen om de effectiviteit en duidelijkheid van uw prompts te maximaliseren:

1\. Creëer een duidelijke structuur.
**Gebruik** korte alinea's, met één instructie of gegevensregel per alinea, zodat de prompt makkelijk te lezen en te onderhouden is. De prompt zelf heeft geen opmaak: wilt u koppen, lijsten of HTML in de *gegenereerde* tekst, vraag er dan in woorden om, bijvoorbeeld _Begin met een `<h2>`-kop met de naam van het product en noem daarna drie belangrijke voordelen als `<ul>`._ Elke HTML-tag die de uitvoer moet bevatten, moet zijn toegestaan onder [Trusted HTML Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation).
2\. Controleer altijd de beschikbaarheid van gegevens.
**Vermijd** het rechtstreeks invoegen van attributen als u niet kunt garanderen dat de waarde aanwezig is voor alle producten. Als een kenmerkwaarde ontbreekt, blijft er een lege ruimte in de gegenereerde tekst.
**Verpak** het kenmerk en de omringende tekst in een **als blok** (voorwaardelijke logica).
_Voorbeeld: een voorwaarde op **Material** met de regel_ Materiaal: **Material** _(de tekst "Materiaal:" wordt alleen weergegeven als het product een materiaal heeft)._
3\. Zorg voor afsluiting van tags.
**Controleer** dat alle gepaarde HTML-tags waar uw prompt om vraagt, correct gesloten zijn (bijv. `<strong>` wordt gesloten met `</strong>`). Onjuist gesloten tags kunnen opmaakfouten in de uiteindelijke uitvoer veroorzaken.

4\. Vermijd herhaling.
**Voeg** dezelfde kenmerkwaarde niet meerdere keren in verschillende blokken in. Dit overlaadt de tekst en kan ertoe leiden dat de AI repetitieve, onnatuurlijke inhoud genereert.

5\. Schrijf "Menselijk" (Toon en betrokkenheid).
**Stelt u voor** dat u een copywriter bent die de klant betrekt. Voeg levendige details en nadruk toe, en spreek de gebruiker rechtstreeks aan om de tekst natuurlijk en overtuigend te maken.
_Voorbeeld: een voorwaarde op **Brand** met de regel_ Betrouwbaarheid van merk **Brand** — een geweldige keuze voor uw comfort.
6\. Controleer het resultaat.
Klik op **Opslaan en voorbeeld** om precies te zien hoe uw prompt werkt op echte producten en met hun beschikbare attributen. Deze stap is essentieel om fouten in logica, syntaxis of toon op te sporen voordat u een grote batch uitvoert.
