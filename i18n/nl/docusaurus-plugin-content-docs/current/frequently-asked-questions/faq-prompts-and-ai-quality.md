---
title: 'FAQ: Prompts en AI-kwaliteit'
sidebar_position: 6
unlisted: true
slug: /frequently-asked-questions/faq-prompts-and-ai-quality
description: >-
  Promptconcurrentie, afbeeldingsframing en branding, consistent featureformatering,
  gemengde taaluitvoer en terugvallogica voor taal in prompts.
---

## Mijn AI-afbeelding negeert framedoelstellingen (volledige lichaam in plaats van bovenlichaam).

Dit wordt veroorzaakt door **promptconcurrentie** — conflicterende instructies (bv. "full-body" samen met "only torso"). Verwijder alle conflicterende triggers en gebruik specifieke taal zoals "waist-up portrait pose".

## Het logo en branding zijn wazig in gegenereerde afbeeldingen.

Vollediglichaamsfoto's verdelen rendering over het hele lichaam. Schakel over naar portret-/taille-up framing en voeg specifieke branding instructies toe aan uw prompt.

## Hebt u tips voor promptoptimalisering voor afbeeldingsgeneratie?

Vermijd tegenstrijdige instructies, voeg expliciete uitsluitingen toe, gebruik portretspecifieke taal en bescherm brandingdetails. Neem contact op met support voor promptbeoordeling.

## Mijn productfeatures zijn inconsistent geformatteerd (lijst vs inline).

Voeg expliciete formaatregels toe aan de prompt: elke feature op een nieuwe regel, vette namen, geen opsommingstekens. Gebruik HOOFDLETTERS nadruk voor sleutelregels.

## Hoe schrijf ik prompts voor consistent productfeatureformatering?

Geef de structuur op (beschrijving + features sectie), formatteer dit als verticale lijst met vetgedrukte labels, verbied opsommingstekens en vermeld de vereiste features.

## De AI genereert onjuiste materiaal-/atribuutinfo van afbeeldingen.

Als Fozzels geen toegang heeft tot specifieke velden, raadt de AI af van foto's — wat onbetrouwbaar is voor technische details. Verbind ACF/aangepaste atributen voor nauwkeurige gegevens.

## Kan het Fozzels team mijn flows en prompts beoordelen?

Ja, zij kunnen advies geven over structuur, specialisering en optimalisering. Plan een online sessie in voor gedetailleerde begeleiding.

## Kan Fozzels mijn aangepaste frontendindeling aanpassen (bv. een accordeon)?

Fozzels kan complexe indelingen niet garanderen aan te passen. Experimenteer met prompts, maar handmatige aanpassing kan nodig zijn.

## Ik krijg gemengde taaluitvoer (bv. Engels + Nederlands).

Schrijf alle promptinstructies in de gewenste uitvoertaal en meng geen talen. Voeg een sterke notitie toe: "BELANGRIJK: Uitvoer moet volledig in [taal] zijn."

## Mijn prompt genereert gemengde talen wanneer ik deze vanuit een ander archief kopieer.

Kopieer niet en voeg vertalingsinstructies toe. Schrijf de gehele prompt in de doeltaal vanaf het begin en maak aparte prompts per taal.

## Kan ik terugvallogica voor taal in prompts gebruiken (bv. Tsjechisch → Duits)?

U kunt voorwaardelijke logica in de prompt proberen: "Als Tsjechische tekst beschikbaar is, gebruik deze. Zo niet, gebruik Duits." Resultaten hangen af van de taaldetectiemogelijkheden van de AI.
