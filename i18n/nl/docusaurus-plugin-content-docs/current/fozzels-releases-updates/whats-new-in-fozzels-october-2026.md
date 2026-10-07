---
title: "Nieuw in Fozzels: oktober 2026"
sidebar_position: 18
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026
description: >-
  Vul tot 13 attributen in met één Flow, stel automatische kwaliteitsregels in
  met Workflows, bouw prompts in een nieuwe editor met live voorbeeld en houd
  AI-fouten uit uw winkel dankzij nieuwe beveiligingen.
---

Deze update draait om tijdwinst en meer controle over uw AI-content. U kunt nu tot 13 attributen invullen met één Flow, automatische kwaliteitsregels instellen met Workflows en prompts bouwen in een nieuwe editor met live voorbeeld.

We hebben ook een hele reeks beveiligingen toegevoegd die AI-fouten uit uw winkel houden. Hier leest u alles wat nieuw is en hoe u er direct mee aan de slag gaat.

## Highlights

### Vul tot 13 attributen in met één Flow

U hebt niet langer een aparte Flow nodig voor elk attribuut. Eén Flow kan nu een hoofdattribuut plus maximaal 12 extra attributen invullen, bijvoorbeeld een beschrijving, een korte beschrijving, een metatitel en een metabeschrijving. Alle attributen worden samen gegenereerd in één AI-verzoek per product. Uw productgegevens en afbeeldingen worden dus maar één keer verstuurd, en de teksten sluiten natuurlijk op elkaar aan.

![Additional attributes to fill: voeg tot 12 attributen toe, elk met een eigen instructie](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/01-additional-attributes.png)

In de Batch List krijgt elk attribuut een eigen kolom, zodat u alle resultaten van een product in één rij beoordeelt.

![Batch List met een kolom voor elk gegenereerd attribuut](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/02-batch-list-columns.png)

**Zo gebruikt u het:** open een Flow, ga naar Flow Selection & Prompt en voeg onder Additional attributes to fill de attributen toe die u nodig hebt, met bij elk een instructie. [Lees de handleiding](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)

### Workflows: automatische kwaliteitsregels

Workflows controleren en bewerken elk gegenereerd resultaat voordat het uw winkel bereikt. U stelt eenvoudige "IF / THEN"-regels één keer in en Fozzels past ze toe op elk nieuw resultaat:

- **Replace text:** vervang of verwijder woorden en zinnen, bijvoorbeeld om uw merktermen consistent te houden.
- **Truncate:** kort een tekst in tot een maximale lengte, met behoud van hele woorden.
- **Mark suspicious:** houd een resultaat vast voor handmatige controle, met een reden die uw team kan zien.

![Een actie kiezen voor een workflowblok: Truncate, Mark suspicious of Replace text](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/03-workflow-actions.png)

U kunt meerdere Workflows aan elkaar koppelen in één Flow, en een gemarkeerd resultaat wordt nooit gesynchroniseerd voordat iemand het heeft gecontroleerd.

![Workflow-editor met gekoppelde IF / THEN-blokken](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/04-workflow-editor.png)

**Zo gebruikt u het:** ga naar Home → Workflows, maak een workflow en wijs deze toe aan een Flow in de stap Automation. [Lees de handleiding](/content-creation-flows/workflows-lesson-1-getting-started/)

### Een nieuwe prompt-editor met live voorbeeld

Een prompt bouwen is nu een stuk eenvoudiger. Attributen en voorwaarden verschijnen als duidelijke blokken, en het live voorbeeld toont tijdens het typen de exacte prompt voor een echt product. U hoeft dus niet meer op te slaan en een voorbeeld te openen om het te controleren. Typ / of sleep een attribuut uit het paneel om productgegevens toe te voegen.

Hulp nodig? Vraag het aan Jane, onze AI-assistent: zij kan prompts voor u schrijven en aanpassen, direct in de editor. [Lees de handleiding](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)

![De nieuwe prompt-editor met live voorbeeld, snippets en Jane die een kant-en-klare prompt invoegt](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/05-prompt-editor.png)

### Herbruikbare promptsnippets

Bewaar delen van uw prompts die u in veel Flows gebruikt, zoals de tone of voice van uw merk of een lijst met attributen gegroepeerd per onderwerp. Voeg een snippet met één klik toe aan elke prompt. Wanneer u een snippet bijwerkt, worden alle Flows die deze gebruiken ook bijgewerkt. U hoeft Flows dus nooit meer één voor één te bewerken.

### Categorieteksten die hun producten kennen

Categorie-Flows kunnen nu de producten van de categorie in de prompt opnemen, met hun namen, links, slugs en andere attributen. Uw categoriebeschrijvingen kunnen zo echte producten noemen en werkende links naar productpagina's bevatten. Dat is goed voor SEO en helpt kopers te vinden wat ze zoeken.

### Nieuwe AI-modellen: GPT-6 Astra en Claude Opus 5.5

De nieuwste en krachtigste modellen zijn nu beschikbaar in uw Flows. GPT-6 Astra ondersteunt ook zoeken op het web, ook in de Sandbox, zodat het nuttige informatie kan toevoegen die niet in uw catalogus staat. Premiummodellen kosten meer per generatie. De prijs ziet u op elke modeltegel in de stap AI Configuration.

![Claude Opus 5.5](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/06-claude-opus-5-5.png)

## Veiligere AI-content

AI-modellen verzinnen soms feiten, gokken hoe een product eruitziet of laten opmerkingen achter in de tekst. We hebben in elke stap beveiligingen toegevoegd, zodat alleen betrouwbare content uw winkel bereikt.

- **Confidence threshold.** Stel deze per Flow in bij de stap Automation, van 0,1 tot 1,0. De AI geeft aan hoe zeker hij is van elke waarde. Alles onder uw drempel wacht op uw beoordeling in plaats van automatisch te worden verzonden. Laat het veld leeg om dit uit te schakelen.

    ![Confidence threshold in de stap Automation](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/07-confidence-threshold.png)

- **Slimmere detectie van verdachte content.** De standaardlijst met verdachte woorden en zinnen is langer. Nieuwe ingebouwde patronen herkennen de typische vorm van een AI-opmerking, zoals "Here is the…" of "Final check", zelfs in formuleringen die het model nog nooit eerder gebruikte. U kunt patronen aan- of uitzetten en eigen woorden toevoegen in de integratie-instellingen.

    ![Verdachte woorden en ingebouwde patronen in de integratie-instellingen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/08-suspicious-patterns.png)

- **Een controle op functies die uit staan.** Wanneer u een Flow opslaat, controleert Fozzels of uw prompt een functie nodig heeft die is uitgeschakeld, bijvoorbeeld zoeken op het web of productafbeeldingen. Een waarschuwing vertelt wat er ontbreekt, met een knop om AI Configuration te openen of Jane te vragen.

    ![Waarschuwing wanneer uw prompt zoeken op het web of productafbeeldingen nodig heeft die zijn uitgeschakeld](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/09-disabled-features-warning.png)

- **Niet gokken zonder afbeeldingen.** Als uw Flow productafbeeldingen gebruikt, maar een product er geen heeft of ze niet kunnen worden gelezen, wordt dat product overgeslagen in plaats van dat de AI gaat gokken.
- **Alleen betrouwbare modellen.** We hebben verouderde modellen verwijderd, en modellen die hun redenering in uw teksten konden achterlaten.
- **Sterkere ingebouwde instructies.** Elke Flow bevat nu strengere algemene instructies die de AI bij de feiten en bij uw gevraagde format houden.
- **Elke Flow heeft een AI-model nodig.** Een Flow zonder model kan niet meer worden opgeslagen of gestart, zodat niets ongemerkt misgaat.
- **Duidelijke foutmeldingen.** Als een generatie mislukt, ziet u nu de werkelijke reden in plaats van "Unknown error occurred", zodat u weet wat u moet oplossen.

## Image Flows

- **Een Image Flow dupliceren.** Kopieer een bestaande Image Flow met alle presets, scènes, logo en prompt, en pas alleen aan wat anders is.
- **Eén extra productafbeelding voor de hele Flow.** Kies onder Additional product image for the whole flow een afbeeldingspositie, bijvoorbeeld de 2e afbeelding. Fozzels voegt deze bij elk product toe naast de hoofdafbeelding, zodat de AI meer hoeken ziet en snit, print en structuur nauwkeuriger weergeeft. Producten met minder afbeeldingen gebruiken alleen de hoofdafbeelding.

    ![Additional product image for the whole flow: kies de afbeeldingspositie](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/10-additional-product-image.png)

- **Run Now houdt rekening met uw daglimiet.** Handmatige runs tellen nu mee voor het aantal producten per dag van de Flow. Is de limiet al bereikt, dan ziet u een waarschuwing met wat u kunt doen: verhoog het aantal in de stap Automation of voer de Flow later uit. Gratis testgeneraties in het voorbeeld tellen niet mee.

## Catalogus en Batch List

- **Geselecteerde producten vernieuwen.** Hebt u een paar producten in uw winkel gewijzigd? Haal alleen die producten opnieuw op in plaats van de hele catalogus en genereer meteen nieuwe content.

    ![Actions → Repull Selected Products in Manage Products](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/11-repull-selected-products.png)

- **Opgeslagen filtersets.** Sla een filtercombinatie één keer op, bijvoorbeeld "Women - empty descriptions", via Filter set → Save as new. Pas deze met één klik toe in integraties, de catalogus en Flows, en voeg extra voorwaarden toe wanneer dat nodig is.

    ![Een filtercombinatie opslaan via Filter set → Save as new](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/12-filter-set-save.png)

    ![Een opgeslagen filterset, klaar om met één klik toe te passen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/13-filter-set-saved.png)

- **Kies uw Batch List-kolommen.** U vroeg erom, wij hebben het gebouwd. Stel een attribuut met één selectievakje in de instellingen in om altijd in de Batch List te worden getoond, en kies per Flow onder Column visibility welke promptattributen u wilt zien.

    ![Column visibility in de Batch List](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/14-column-visibility.png)

- **Rijkere rapporten.** Voeg extra kolommen met gegenereerde attributen toe aan uw geëxporteerde rapporten, klaar om te delen met uw team.
- **Soepelere beoordeling.** Het beoordelingsvenster scrolt nu automatisch.
- **Duidelijke Flow-activering.** Wanneer u een Flow inschakelt, toont Fozzels precies wat er wordt geactiveerd en welke andere Flows worden hervat.

## Jane en uw account

- **Jane kent de nieuwe editor.** Onze AI-assistent werkt nu met de nieuwe prompt-editor en Flows met meerdere attributen. Vraag haar uw prompts te lezen, te schrijven of bij te werken.
- **Apart e-mailadres voor financiën.** Stuur facturen en saldomeldingen naar uw financiële of boekhoudadres in plaats van naar uw inlog-e-mailadres.
- **Tijdzone per land.** Nieuwe accounts krijgen automatisch de tijdzone van hun land, zodat imports op de juiste lokale tijd draaien.
- **Hulp bij verbinden.** Als een integratie geen verbinding kan maken, bijvoorbeeld door een firewall, verwijst Fozzels u naar een Help Center-pagina die uitlegt wat u moet toestaan.

## Integratie-updates

**Magento 2**

- **Blog- en CMS-content (eerste stap).** Fozzels importeert nu uw blog- en CMS-content met de bijbehorende attributen en toont deze in een aparte catalogus- en merkpagina. AI-contentgeneratie voor blogs en CMS-pagina's volgt in een volgende update.

    ![Manage Blog: geïmporteerde CMS-pagina's van Magento 2](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/15-manage-blog.png)

- **Filteren op voorraadstatus en hoeveelheid**, zodat u zich kunt richten op producten die op voorraad zijn, bijvoorbeeld alleen producten met meer dan 10 stuks beschikbaar. Zet Pull stock status en Pull stock quantity aan in de instellingen van uw integratie.

    ![Pull stock status en stock quantity in de instellingen van de Magento 2-integratie](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/16-stock-settings.png)

- **Afbeeldingen synchroniseren naar All Store Views.** Resultaten van Image Flows kunnen nu worden gesynchroniseerd naar het bereik All Store Views, zodat één synchronisatie elke store view bijwerkt.

**WooCommerce**

- **Alt-teksten voor productafbeeldingen**, voor betere SEO en toegankelijkheid.

**Salesforce**

- **Voorraadfiltering en pull-voorwaarden** op integratieniveau, zodat u alleen de producten importeert die u nodig hebt.

**CSV / Raw File**

- **Grotere bestanden** worden nu ondersteund dankzij paginering.

**BizzLayer**

- **Producten die uit uw feed zijn verwijderd** worden niet langer gebruikt voor contentgeneratie.

## Oplossingen

- Speciale tekens zoals & in productnamen worden nu correct weergegeven in uw winkel.
- Het aantal producten in Flows komt nu overeen met uw daadwerkelijke selectie.
- De synchronisatievoortgang van Flows telt verwijderde producten niet meer mee.

    ![Flow-voortgang waarin uit de catalogus verwijderde producten apart worden getoond](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/17-flow-progress.png)

- Filters in oudere Flows geven producten nu correct door aan de Batch List.
- Het prompt- en productvoorbeeld wordt automatisch bijgewerkt wanneer u Flow-filters wijzigt.
- Actieve Image Flows worden niet langer als inactief weergegeven.
- Beeldgeneratie stopt niet meer bij grote of niet-beschikbare afbeeldingen.

Vragen over een van deze updates? Vraag het aan Jane in de app.
