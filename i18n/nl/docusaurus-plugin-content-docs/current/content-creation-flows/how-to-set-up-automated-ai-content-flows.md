---
id: '103000408983'
title: 4.1.2.a Geautomatiseerde AI Content Flows instellen
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Zo laat u een Content Flow automatisch productcontent genereren en
  synchroniseren: controleer de Flow voor de start, stel in de stap Launch de
  dagelijkse limiet, de goedkeuring en de updates in, en start de Flow.
---

Een geautomatiseerde Content Flow genereert elke dag op de achtergrond productcontent en stuurt die naar uw shop. U hoeft de taken niet zelf te starten.

U stelt de automatisering in bij stap 6 van een Content Flow, **Launch**. Een beschrijving van alle zes stappen vindt u in [4.1.2. Een Content Flow maken: de zes stappen](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

## Stap 1: Controleer de Flow voor de start

Voer deze drie controles uit voordat u de Flow start. Ze voorkomen fouten.

1. **Controleer de productselectie.** Controleer in stap 2, **What and with what?**, dat de selectie alleen de producten bevat die u wilt verwerken.
2. **Test de prompt.** Genereer in stap 5, **Test**, teksten voor enkele echte producten. Controleer of de teksten en de scores kloppen.
3. **Voorkom recursie.** Gebruik het veld waar de Flow naartoe schrijft niet als bron in de prompt. Gebruik bijvoorbeeld `product_description` niet als input om een nieuwe `product_description` te genereren. Anders kan Fozzels de tekst steeds opnieuw genereren.

## Stap 2: Stel de automatisering in bij de stap Launch

Beantwoord in stap 6, **Launch**, drie vragen:

1. **How many products per day?** Kies 10, 25, 50 of 100, of typ uw eigen aantal. De limiet houdt de kosten en het controlewerk klein. Als Fozzels de huidige selectie heeft afgerond, neemt de Flow automatisch nieuwe producten die bij de selectie passen.
2. **What happens with a new text?**
    - **I approve every text first** (aanbevolen): nieuwe teksten gaan naar uw controlelijst. Fozzels stuurt niets naar uw shop voordat u het goedkeurt.
    - **Straight to my shop**: Fozzels publiceert de teksten automatisch. U kunt ze nog steeds bewerken of teruggaan naar de vorige versie. Teksten die Fozzels als verdacht markeert, wachten altijd op uw controle.
3. **If a product changes later?** Zet de schakelaar aan als Fozzels automatisch een nieuwe tekst moet schrijven wanneer een attribuut dat de prompt gebruikt in uw winkel verandert, bijvoorbeeld de kleur of het materiaal. Staat de schakelaar uit, dan schrijft Fozzels maar één keer een tekst voor een product.

Onder **Advanced settings** kunt u ook:

- de cooldown instellen die voorkomt dat andere Flows dezelfde content opnieuw genereren: **Use default**, **Override** of **Turn off**. Meer informatie vindt u in [4.4.1 Overlappende contentgeneratie voorkomen](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).
- op **Connect workflow** klikken om een actie toe te voegen die na elke tekst draait, bijvoorbeeld een vertaling.

## Stap 3: Start de Flow

1. Klik op **Launch flow**.

    Fozzels toont de melding "Your flow is running". De Flow verwerkt elke dag producten, tot de dagelijkse limiet, totdat alle producten in de selectie klaar zijn.

2. Wilt u de generatie direct starten? Open de Flow-pagina, klik op het menu **…** en klik op **Run Now**. Fozzels start direct, ook als de Flow de dagelijkse limiet voor vandaag al heeft bereikt.

Wilt u later verder gaan met instellen? Klik dan op **Save as draft** in plaats van **Launch flow**.

## Regels en aanbevelingen

- **De Flow moet actief zijn.** Fozzels voert alleen actieve Flows uit. Als u een Flow stopt, stopt Fozzels alle geplande runs totdat u de Flow weer start.
- **U kunt een actieve Flow wijzigen.** Uw wijzigingen gelden voor alle nieuwe teksten. Fozzels wijzigt de teksten die het al heeft gegenereerd niet, tenzij u ze opnieuw genereert.
- **Nieuwe producten komen er automatisch bij.** Na elke update van de catalogus vergelijkt Fozzels de producten in uw winkel met de selectie van de Flow. Nieuwe producten die bij de selectie passen, bijvoorbeeld 20 nieuwe producten in een categorie, gaan automatisch in de Flow.

## Gerelateerde artikelen

- [4.1.2. Een Content Flow maken: de zes stappen](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.7.4 Verdachte woorden en frasen: geavanceerde controle van de contentkwaliteit](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)
- [3.5 Waarschuwing "Recursion detected" bij het maken van een Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)
- [4.4.1 Functie Overlappende contentgeneratie voorkomen](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)
- [4.7.3 Toegestane HTML-tags voor AI-tekstgeneratie](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
