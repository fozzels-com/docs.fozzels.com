---
id: '103000408983'
title: 4.1.2.a Instellen van geautomatiseerde AI-inhoudsstromen
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: Geautomatiseerde inhoudsstromen in Fozzels stellen u in staat productinhoud automatisch op de achtergrond te genereren en synchroniseren - zonder dat u taken handmatig elke dag hoeft in te schakelen
keywords:
- invoerprompt
---

Geautomatiseerde inhoudsstromen in Fozzels stellen u in staat productinhoud automatisch op de achtergrond te genereren en synchroniseren - zonder dat u taken handmatig elke dag hoeft in te schakelen.

Deze gids behandelt alles wat u moet weten om geautomatiseerde stromen veilig en efficiënt in te stellen, te testen en uit te voeren.

## Stap 1: Checklist voorafgaand aan lancering

Voordat u automatisering inschakelt, raden we u ten zeerste aan deze drie controles uit te voeren om fouten te voorkomen:

1.  **Productgeselecteerde verificatie:** Controleer uw filters in de stroominstelling zorgvuldig om ervoor te zorgen dat de stroom exact de productset die u wilt verwerken, aanwijst.

2.  **Test uw prompt:** Voer een testgeneratie uit met behulp van **Opslaan en voorbeeld bekijken** om te bevestigen dat de uitvoer aan uw kwaliteitsnormen voldoet.

3.  **Vermijd Prompt-recursie:** Zorg ervoor dat uw prompt niet verwijst naar het exacte attribuut dat u naar schrijft (bijv. `product_description` als invoer gebruiken om een nieuwe `product_description` te genereren). Dit voorkomt recursieve generatielussen.

## Stap 2: De automatiseringsinstellingen configureren

Navigeer naar het tabblad **Automatisering** in uw Stroomsinstellingen en configureer de volgende parameters:

-   **Dagelijkse verwerkingslimiet:** Stel in hoeveel producten elke dag moeten worden verwerkt (tot **500 producten per actieve stroom per dag**). Deze limiet garandeert consistente en betrouwbare uitvoering binnen elke 24-uur cyclus.

-   **Volledig automatische modus (optioneel):**

-   **Ingeschakeld:** Gegenereerde inhoud wordt automatisch goedgekeurd en gesynchroniseerd met uw webwinkel (met uitzondering van items die door verdachte woorden of validatiecontroles zijn gemarkeerd).

-   **Uitgeschakeld:** Inhoud wordt automatisch gegenereerd, maar blijft in behandeling voor handmatige beoordeling en goedkeuring voordat het wordt gesynchroniseerd.

-   **Nieuw content maken wanneer attribuutwaarden wijzigen (optioneel):** Wanneer ingeschakeld, genereert Fozzels automatisch inhoud opnieuw wanneer een attribuut dat in uw prompt wordt gebruikt, in uw winkel wordt bijgewerkt. Dit houdt uw inhoud versneld met nul handmatig werk.

## Stap 3: Uw stroom lanceren

Zodra uw instellingen zijn geconfigureerd, activeert u de stroom en kiest u een van de twee lanceermogelijkheden:

### Optie A: Plan en sluit (aanbevolen voor achtergrondloten)

Klik op **Plan en sluit**. De stroom krijgt een geplande status en begint automatisch met verwerking na de volgende geplande nachtelijke catalogusupdate, met voortgang tot alle overeenkomende producten zijn verwerkt.

### Optie B: Uitvoer nu (onmiddellijke start)

Klik op **Nu uitvoeren**. Fozzels verwerkt onmiddellijk de eerste **10 producten** voor een direct voorbeeld. Na deze initiële batch gaat de stroom verder op zijn dagelijkse geplande automatische pad volgens uw ingestelde dagelijkse limiet.

## Belangrijkste regels en best practices

-   **Actieve status vereist:** Voor een geplande stroom om dagelijks uit te voeren, moet deze **Actief** blijven. Het deactiveren van de stroom onderbreekt alle geplande runs totdat deze opnieuw wordt ingeschakeld.

-   **Actieve stromen bewerken:** U kunt promptregels of instellingen in een geplande stroom op elk moment bewerken. Updates zijn van toepassing op alle toekomstige generaties, terwijl eerder gegenereerde inhoud ongewijzigd blijft tenzij handmatig opnieuw gegenereerd.

-   **Dynamische productgeselecteerde:** Actieve geplande stromen evalueren automatisch uw winkelbinding na elke nachtelijke synchronisatie. Als nieuwe producten uw stroomfilters matchen (bijv. 20 nieuwe items toegevoegd aan een categorie), worden ze automatisch ingeschreven in de stroom voor verwerking.

## Gerelateerde Help-artikelen

-   **Verdachte woorden & Kwaliteitscontrole:** _[4.7.4 Verdachte woorden en frasen: Geavanceerde inhoudsqualiteitscontrole](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)_

-   **Recursie vermijden Waarschuwingen:** _[3.5 "Recursie gedetecteerd" waarschuwing bij het maken van een stroom](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)_

-   **Overlappende stromen voorkomen:** _[4.4.1 Overlappende inhoudsgenereratiefunctie voorkomen](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)_

-   **HTML-opmaakregels:** _[4.7.3 Toegestane HTML-tags voor AI-tekstgeneratie](/content-creation-flows/allowed-html-tags-for-ai-text-generation)_
