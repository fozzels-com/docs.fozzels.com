---
title: 'FAQ: Inhoudsgeneratie'
sidebar_position: 5
unlisted: true
slug: /frequently-asked-questions/faq-content-generation
description: De meest gestelde vragen over AI-tekstgeneratie — ontbrekende teksten, batch limieten, regeneratie na promptwijzigingen, generatiefouten, verdachte inhoud, modelkeuze, synctiming en kostenbeheer.
---

## Producten zijn in mijn flow maar teksten zijn niet gegenereerd.

Generatie kan wachten op de volgende geplande uitvoering. U kunt dit handmatig activeren of contact opnemen met support om het voor u te starten.

## Hoe bevestig ik gegenereerde inhoud voordat deze naar mijn website wordt verzonden?

Als uw flow semi-automatisch is, bevestig vervullingen afzonderlijk of gebruik mass action in de batchlijst om meerdere items goed te keuren.

## Nieuwe producten zijn dagenlang online maar hebben geen gegenereerde teksten.

De geplande generatie kan vertraging hebben opgelopen. Neem contact op met support — zij kunnen handmatig producten opnieuw ophalen en generatie starten.

## Kun je ontbrekende teksten voor meerdere merken tegelijk repareren?

Ja. Neem contact op met support en geef aan welke merken/flows zijn beïnvloed. Zij kunnen generatie voor alles tegelijk activeren.

## Mijn flow toont 100% maar ik heb de prompt gewijzigd. Waarom zijn er geen nieuwe teksten?

Het wijzigen van alleen de prompt triggert geen regeneratie van bestaande teksten. Gebruik Mass Action → "Regenerate content" of dupliceer de flow.

## Hoe genereer ik alle productteksten opnieuw na het bijwerken van mijn prompt?

Ga naar vervullingen, selecteer alles via Mass Action en kies "Regenerate content". U kunt ook de flow deactiveren, dupliceren en de nieuwe versie activeren.

## De cooldown periode triggert geen regeneratie.

Cooldown beperkt de minimumtijd tussen auto-regeneraties, maar forceert geen regeneratie van voltooide teksten. Gebruik Mass Action om opnieuw te genereren.

## Wat veroorzaakt generatiefouten / mislukte vervullingen?

Meestal hoog AI-model verwerkingsvolume. Grote prompts + lange uitvoer + meerdere afbeeldingen kunnen het model overbelasten. Mislukte taken herstellen zich automatisch. Probeer kortere prompts of een ander model.

## Hoe zie ik welke producten niet zijn gegenereerd?

Controleer het vervullingrapport op [app.fozzels.com/completions/product/completion/report/](https://app.fozzels.com/completions/product/completion/report/) en filter op datum met de optie `failed_only`.

## Mijn batch lijkt vast te zitten — geen teksten gegenereerd.

Dit kan worden veroorzaakt door tijdelijke AI provider tokenlimietbeperkingen. Het systeem normalisert automatisch. Neem contact op met support als dit aanhoudt.

## Inhoudsgeneratie duurt veel langer dan normaal.

Tijdelijke vertragingen door tokenusegebeurtenissen. Dit wordt meestal automatisch opgelost. Neem contact op met support als generatie vast blijft zitten.

## Ik zie "Unknown error" op alle jobs.

Dit gebeurt tijdens piek systeembelasting. Het systeem voert automatisch uit. Als 80% of meer mislukt, neem dan contact op met support — zij kunnen flows controleren en handmatig activeren.

## Mijn batchlijst toont 500 producten maar mijn flow heeft 3.380 geschikte.

Fozzels beperkt batches tot 500 producten per **Plan & Close**. Klik meerdere keren op "Plan & Close" om extra batches in de wachtrij te plaatsen.

## "Run Now" voegt alleen 10 producten toe.

"Run Now" is voor snelle testen (10 producten). Gebruik "Plan & Close" voor grotere batches (tot 500).

## Wat is het verschil tussen "Plan & Close" en "Run Now"?

"Run Now" verwerkt tot 10 producten onmiddellijk voor testen. "Plan & Close" plaatst een batch van tot 500 producten in de wachtrij. Gebruik Plan & Close voor productie.

## Wat zijn de dagelijkse generatielimieten per plan?

Lagere plannen: 10-30 producten/dag. Hogere plannen (€299+): aanzienlijk meer. Unlimited: 500 per flow per dag. Neem contact op met support voor tijdelijke verhogingen.

## Kan ik een tijdelijke limietverhoging aanvragen voor een initiële invulling?

Ja. Voor eenmalige grote volumes kan het team limieten tijdelijk verhogen. Neem contact op met support met uw verwachte volume en tijdschema.

## Hoe voorzie ik promptresultaten voordat ik synchroniseer?

Open de flow → voeg uw prompt toe → klik **Save and Preview** → klik **Generate Now**. Het voorbeeld wordt niet opgeslagen of gesynchroniseerd.

## Waarom vereist het voorbeeld een saldo?

De previewfunctie verbruikt tokens, dus een saldo is vereist. Neem contact op met support voor een klein testcrediet indien nodig.

## Ik krijg "Empty Result" fouten met het GPT-5 model.

GPT-5 vereist meer tokencapaciteit. Verhoog Max Tokens van 2.000 naar minstens 5.000.

## Welke Max Tokens instelling wordt aanbevolen?

Voor GPT-5: minstens 5.000. Zorg ervoor dat prompt tokens + max_tokens de contextlengte van het model niet overschrijdt.

## Wat zijn waarschuwingen voor verdachte inhoud?

Fozzels valideert uitvoer tegen een lijst met ongewenste woorden. Gemarkeerde inhoud wordt niet automatisch gesynchroniseerd. U kunt de lijst aanpassen of promptbeperkingen toevoegen.

## Hoe verminder ik waarschuwingen voor verdachte inhoud?

Voeg beperkingen in uw prompt toe, pas de lijst met verdachte woorden aan of gebruik **Regenerate**. Neem contact op met support om inhoud geforceerd te synchroniseren als deze goed is.

## Kan ik verdachte inhoud geforceerd synchroniseren?

Neem contact op met support — geef aan of het alle flows of specifieke flows zijn. Zij kunnen gemarkeerde inhoud namens u synchroniseren.

## Mijn paginatitels zijn te lang / raken karakterlimieten.

Pas uw prompt aan om maximale karakteraantallen op te geven. Neem contact op met support om bestaande titels die te lang zijn te repareren.

## De tekenreeks "Plain text" verschijnt in mijn gegenereerde inhoud.

Dit is een zeldzaam promptprobleem. Support kan dit controleren en beïnvloede producten opschonen. Rapporteer dit met specifieke voorbeelden.

## Een product gaat niet online vanwege Fozzels inhoud.

Inhoudsproblemen (lange titels, onverwachte tekenreeksen) kunnen publicatie blokkeren. Neem contact op met support met de productdetails.

## Mijn automatische content flows zijn gestopt met werken.

Dit kan worden veroorzaakt door Fozzels problemen of AI provider beperkingen. Neem contact op met support om dit te onderzoeken en opnieuw te starten.

## Mijn flow toont 100% groen onmiddellijk na activering — is dit correct?

Dit is een bekend UI probleem. Het initiële scherm kan 100% tonen voordat dit voltooid is. Controleer de flowdetails voor de werkelijke status.

## De knop "Generate Now" reageert niet.

De generatiewachtrij kan tijdens piektijden overbelast zijn. Wacht en probeer opnieuw of schakel over naar een sneller AI-model.

## Kan ik van AI-modellen wisselen voor snellere generatie?

Ja, wijzig het model in flow instellingen. Lichter modellen zijn sneller. Verschillende modellen kunnen verschillende kwaliteit produceren.

## Welk AI-model moet ik gebruiken voor het beste kosten/kwaliteitssaldo?

Meerdere modellen zijn beschikbaar (ChatGPT, Gemini, Claude). Krachtigere modellen geven hogere kwaliteit maar kosten meer. Neem contact op met het team voor aanbevelingen.

## Ik krijg Gemini fouten tijdens grote batch generaties.

Gemini past tarieflimieten toe voor grote volumes, wat tijdelijke fouten veroorzaakt. Jobs blijven in de wachtrij en voltooien zich automatisch als limieten worden hersteld.

## Verdachte inhoud in het Frans wordt onjuist gemarkeerd.

De filterlijst kan woorden bevatten die veel voorkomen in andere talen. Neem contact op met support om de lijst voor uw taal aan te passen.

## Is er een synclimiet? Waarom is sync traag?

Het synchroniseren van grote volumes kost tijd. Er zijn geen vaste limieten, maar dit verloopt geleidelijk. Neem contact op met support als dit vast lijkt te zitten.

## Resultaten zijn van slechte kwaliteit vanwege onvoldoende productgegevens.

Kwaliteit hangt af van beschikbare gegevens. Verrijk productgegevens in uw PIM/store voordat u opnieuw genereert. Handmatige bewerking kan nodig zijn voor producten met weinig gegevens.

## Hoe stel ik een volledig automatische flow in (auto-bevestig & sync)?

Selecteer het type "Fully-automatic" flow. Resultaten worden automatisch bevestigd en gesynchroniseerd met de volgende cron run (~4 uur). Interne validatie voorkomt dat slechte inhoud wordt gesynchroniseerd.

## Hoe vaak wordt de sync cron uitgevoerd?

Automatische sync loopt via cron elke ~4 uur. Plan generatie van tevoren in voor urgente launches. Neem contact op met support voor snellere intervallen.

## Generatie stopte voortijdig — kan dit een geheugenprobleem zijn?

Onvoldoende serverheugen kan grote generaties stoppen. Neem contact op met support — zij kunnen het toegewezen geheugen verhogen.

## Hoe synchroniseer ik alles tegelijk met mass action?

Schakel de toggle "Show all content" in en activeer vervolgens **Resync** via mass action om alles in één keer te synchroniseren.

## HTML code wordt weergegeven in mijn batchoverzicht.

Klik op de knop **Show HTML** om tussen opgemaakte en onbewerkte weergaven te schakelen. Dit is een bekend UI probleem dat wordt verbeterd.

## Mijn flows zijn vast komen te zitten na onvoldoende middelen en bijvullen.

Flows kunnen na bijvullen niet automatisch hervatten. Neem contact op met support om wachtrijjobs opnieuw te starten.

## Wat gebeurt er wanneer een productcategorie verandert?

Als auto-regeneratie is ingeschakeld, wordt de tekst opnieuw gegenereerd wanneer de categorie verandert.

## Hoe corrigeer ik feitelijke fouten in AI-gegenereerde tekst?

Als de gegevens afkomstig zijn uit een store atribuut, corrigeer dit daar en de inhoud wordt automatisch opnieuw gegenereerd. Als het AI-gegenereerd was (bv. uit afbeeldingen), bewerk het handmatig in de batchlijst.

## Waarom worden andere teksten gegenereerd voor hetzelfde product in verschillende kleuren?

Dit is verwacht gedrag. AI genereert unieke beschrijvingen per productparameter — verschillende kleuren produceren verschillende beschrijvingen.

## Het voorbeeld toont geen productkenmerken/kolommen meer.

Dit is veranderd in release 5.10. U kunt kolommen in de voorbeeldtabel in- en uitschakelen. Ontbrekende kolommen kunnen een bekend bug zijn.

## Hoe beheer ik meerdere vergelijkbare prompts over categorieën/merken?

Momenteel heeft elke flow zijn eigen prompt. Dynamische/gedeelde prompts zijn op de roadmap. Gebruik **Duplicate** om het aanmaken van vergelijkbare flows te versnellen.

## Ik krijg een synchfout omdat een verplicht atribuut leeg is in Magento.

Fozzels kan geen inhoud pushen als verplichte Magento velden leeg zijn. Controleer het foutbericht en vul het ontbrekende atribuut in.

## Ik ontving onverwachte kosten van vast videogeneratie.

Neem onmiddellijk contact op met support. Zij kunnen onjuiste kosten crediteren en het probleem verhelpen. Verwijder vast operaties om verdere kosten te voorkomen.

## Atributen zijn verdwenen uit mijn flows/prompts.

Dit kan gebeuren wanneer prompts tussen velden worden gekopieerd. Sla prompts op als sjablonen. Neem contact op met support als atributen zonder wijzigingen verdwijnen.
