---
id: '103000367976'
title: '4.1.2. Een Content Flow maken: de zes stappen'
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Zo stelt u een Content Flow in met zes begeleide stappen: kies de winkel en
  de velden, bouw de prompt op uit blokken, stel elk veld in, test op echte
  producten en start de Flow. Ook over de Flow-pagina, het controleren van
  gegenereerde content en het Brand Profile.
---

Een Content Flow vertelt Fozzels aan welke producten het werkt, welke velden het vult, welk AI-model het gebruikt en welke instructies het model krijgt. Fozzels genereert de content dan, werkt hem bij en stuurt hem naar uw winkel.

U stelt een Content Flow in met zes begeleide stappen. U bouwt de prompt op uit blokken die u aan- en uitzet, en de stem van uw merk staat op één plek: het [Brand Profile](#brand-profile). Dit artikel legt uit hoe elke stap werkt, van het kiezen van een winkel tot het genereren van content voor veel producten.

## Zes stappen naar een klare Flow

1. **Store.** Kies de integratie, de website en de store view waarvoor u content genereert.
2. **What and with what?** Kies de velden die u wilt genereren en zie hoeveel producten daar al een waarde in hebben. In deze stap kiest u ook uw producten.
3. **Enrich the text.** Kies een AI-model en bouw één gedeelde prompt op uit blokken: wie schrijft, voor wie, in welke toon en waar de feiten vandaan komen.
4. **Fields.** Stel per veld de lengte, de structuur en het formaat in.
5. **Test.** Genereer teksten voor echte producten en bekijk de scores voordat u content voor veel producten genereert.
6. **Launch.** Stel in hoeveel producten Fozzels per dag verwerkt en of u de teksten goedkeurt voordat Fozzels ze publiceert.

De zes stappen staan altijd links in het venster van de Flow. Een afgeronde stap is groen, de huidige stap is blauw. De knop **Next** wordt pas actief als u alle verplichte instellingen van de huidige stap hebt ingevuld.

:::tip
Vul uw [Brand Profile](#brand-profile) in voordat u uw eerste Flow maakt. Dan begint elke nieuwe Flow met de stem van uw merk.
:::

### Stap 1. Store

Kies drie dingen:

- **Integration**: uw shop of PIM.
- **Website**.
- **Store view**: de taal van de teksten.

Alle instellingen die u na deze stap maakt, gelden voor deze combinatie.

Onder de velden toont Fozzels uw keuze en hoeveel producten erin zitten. Staat de winkel die u nodig hebt niet in de lijst? Koppel hem dan eerst onder **Integrations**.

![Stap 1: de keuze van de integratie, de website en de store view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-01-step-1-store.png)

### Stap 2. What and with what?

Kies een of meer soorten content. Elke kaart toont welk percentage van uw producten al een waarde heeft in dat veld. Zo ziet u meteen waar de grootste gaten zitten.

- **Title**: duidelijke productnamen die klanten kunnen vinden.
- **Description**: de volledige producttekst die het product verkoopt.
- **SEO Title**: de titel die Google toont.
- **SEO Description**: de korte tekst in de zoekresultaten die klanten laat klikken.
- **Other attribute**: een attribuut uit uw shop, zoals kleur, materiaal of afmetingen.

![Stap 2: contenttypes met vulgraden](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-02-step-2-content-types.png)

In het venster **Add another attribute** kunt u een attribuut zoeken op naam of code. De attributen met de hoogste vulgraad staan bovenaan. Het type van het attribuut komt uit uw shop: een getal, een waarde uit een lijst of tekst. Zo schrijft de AI het juiste type waarde.

![Het venster Add another attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-03-add-another-attribute.png)

ALT-teksten voor afbeeldingen hebben hun eigen Flow-modus. Zo'n Flow maakt alleen ALT-teksten en heeft eigen regels. Meer informatie vindt u in [ALT-teksten voor afbeeldingen genereren voor Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/).

Alle velden die u kiest, staan in het blok **You are creating**. Het eerste veld is de basis (**BASE**). De andere velden gebruiken het als vertrekpunt. Wilt u de volgorde wijzigen? Sleep een veld aan de greep links. De instructies per veld geeft u in stap 3.

Verderop in deze stap kiest u de producten voor de Flow.

![Het blok You are creating met de gekozen velden](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-04-you-are-creating.png)

### Stap 3. Enrich the text

In deze stap bouwt u de prompt: de instructie die de AI voor elk product krijgt. De prompt bestaat uit blokken. Eerst stelt u in hoe de tekst klinkt. Daarna stelt u in welke bronnen de AI gebruikt en wat er in de tekst moet staan. Onder de blokken ziet u de prompt.

Als u de stap opent, maakt Fozzels een voorstel voor elk veld. Fozzels legt de basis: de structuur, de taal en het juiste type voor elk veld. Klik op **Load brand profile** om een opgeslagen profiel te laden, of op **Save as brand profile** om de instellingen van deze Flow op te slaan als nieuw profiel.

**Welk AI-model?** Kies eerst de provider en dan het model. Het model bepaalt de kwaliteit en de prijs van uw teksten. Per model ziet u de kosten voor 1.000 tokens: voor de tekst die de AI leest (input) en voor de tekst die hij schrijft (output). Labels zoals **Recommended**, **Balanced** of **Fast & low cost** helpen u kiezen. Het model bepaalt ook of de blokken **Look at photos** en **Search the internet** beschikbaar zijn. U kunt het model op elk moment wijzigen. U hoeft de Flow dan niet opnieuw in te stellen.

![Stap 3: de basisprompt en de keuze van het AI-model](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-05-step-3-ai-model.png)

**Hoe de tekst klinkt.** Deze instellingen gelden voor alle secties van de tekst: wie schrijft, voor wie, in welke toon en hoe lang. Kies in het blok **Role of the AI** een rol met één klik. Klik op het potloodicoon om de naam en de beschrijving van een rol te wijzigen. De beschrijving vertelt wie schrijft, met welke kennis en met welk doel.

![Een rol bewerken: naam en beschrijving](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-06-edit-role.png)

Klik op **Make default** om de gekozen optie in alle nieuwe Flows te gebruiken. De optie krijgt dan een ster en het label "Default for new flows", en er verschijnt een link naar het Brand Profile naast. Wilt u dit ongedaan maken? Klik op **Remove from defaults**. **Make default** werkt op dezelfde manier voor het model, de doelgroep, de toon en de andere blokken.

![Een rol met het label Default for new flows](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-07-role-default.png)

De blokken **Target audience** en **Tone of voice** werken op dezelfde manier als de rol. Zet ze aan met de schakelaar. Kies dan met één klik een opgeslagen optie, of maak een nieuwe optie. Onder de knoppen ziet u de volledige beschrijving die de AI krijgt. Kiest u geen toon, dan schrijft de AI in een neutrale, informatieve stijl.

![De blokken Target audience en Tone of voice in een Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-08-audience-tone.png)

#### Neuromarketingprincipes

De vier principes zijn **Processing fluency**, **Simulation**, **Congruence** en **Trust**. Ze komen uit neuromarketingonderzoek met de Erasmus Universiteit Rotterdam. Zet de principes aan die u nodig hebt, en de AI gebruikt ze in elke tekst. In de sectie [Brand Profile](#neuromarketing-principles-in-the-brand-profile) leest u wat elk principe doet.

Weet u niet welke principes u moet gebruiken? Klik op **Fozzels suggestions**. Fozzels AI bekijkt de producten die u hebt gekozen en vertelt welke principes erbij passen. Het aanbevolen principe krijgt het label "advice". Klik op **Apply advice** om het te gebruiken. Deze functie gebruikt tokens.

![Neuromarketingprincipes met advies van Fozzels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-09-neuromarketing.png)

#### Waar de feiten vandaan komen

Hier stelt u de bronnen in die de AI mag gebruiken: de attributen in uw eigen systeem, de informatie in de foto's en de informatie op internet. De AI gebruikt alleen de bronnen die u aanzet. Hij verzint geen feiten.

**Attributes from your store.** De attributen uit uw shop, ERP of PIM die de AI als input gebruikt. Fozzels kiest al de attributen met een hoge vulgraad. Klik op het kruisje om een attribuut te verwijderen, en voeg de attributen toe die ontbreken. Het percentage toont voor hoeveel producten het veld een waarde heeft. De gekleurde balk toont of het veld gevuld, deels gevuld of leeg is. Fozzels slaat lege velden over.

![Het blok Attributes from your store](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-10-attributes-from-store.png)

**Look at photos.** Uw foto's kunnen informatie tonen die niet in uw velden staat, bijvoorbeeld de pasvorm, de sluiting of een print. De AI leest deze informatie uit de afbeeldingen. Hij gebruikt die in de tekst of om een veld te vullen.

- **How many photos per product?** 1 tot 4, of alle (maximaal 5). Meer foto's geven meer details, maar kosten meer.
- **What should the AI look at?** Schrijf de details op die de AI moet bekijken, bijvoorbeeld kraag, zakken en capuchon.
- **When a product has no image yet.** Fozzels wacht op de afbeelding en genereert dan automatisch, of het slaat het product over.
- **Enable Image Resize.** Fozzels verkleint grote afbeeldingen automatisch. Dit voorkomt mislukte generaties en bespaart credits. Het kost € 0,025 per afbeelding.
- **Fozzels suggestions.** De AI bekijkt enkele foto's en stelt zichtbare details voor die belangrijk zijn voor de tekst. Voeg ze toe met één klik.

![Het blok Look at photos](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-11-look-at-photos.png)

**Search the internet.** Soms staat de informatie die u nodig hebt niet in uw shop en niet in de foto's, bijvoorbeeld de specificaties van de fabrikant, details over het materiaal of reviews. Dan zoekt Fozzels die op internet. De AI gebruikt alleen de feiten die kloppen met uw productgegevens.

- **What does the AI search with?** De velden die een product herkenbaar maken: meestal het merk, de naam en de GTIN. De namen van deze velden verschillen per integratie.
- **Which information do you want the AI to look up online?** De onderwerpen waarnaar de AI zoekt, zoals reviews, duurzaamheid of maatadvies. **Fozzels suggestions** vertelt u welke onderwerpen nuttig zijn.

![Het blok Search the internet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-12-search-internet.png)

Fozzels berekent de kosten van **Look at photos** en **Search the internet** per product. U ziet ze in de stap **Test**.

#### Bouwblokken: de prompt uitbreiden

Deze blokken zijn optioneel. Zet een blok aan, vul het in en sla het op. Fozzels zet het dan op een vaste plek in de prompt.

**Keywords.** De zoektermen waarmee klanten de tekst moeten vinden. Typ ze zelf, of klik op **Fozzels suggestions** voor zoekwoorden voor de productcategorie. Een koppeling met uw SEO-tool komt binnenkort. Fozzels zet de zoekwoorden in de kop en in de eerste alinea, en daarna in de rest van de tekst. Kiest u geen zoekwoorden? Dan kiest Fozzels per product een term uit de titel en de categorie.

![Het blok Keywords in een Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-13-keywords.png)

**My snippets.** Uw eigen instructies die u opnieuw kunt gebruiken in verschillende Flows. Bijvoorbeeld een vaste slotzin, een regel over maten, of een lijst met merknamen die altijd goed gespeld moeten zijn. Een snippet geldt voor de hele tekst, in alle velden van de Flow.

#### Regels, controles en richtlijnen voor de hele tekst

Hier stelt u in wat de AI altijd moet doen of nooit mag doen, in alle delen van de tekst. Dit voorkomt fouten die u anders in elke tekst moet verbeteren.

**Do not mention.** Woorden en onderwerpen die niet in de tekst mogen staan: prijzen, kortingen, namen van concurrenten, claims zoals "de beste" of "de goedkoopste". De AI gebruikt ze niet, ook niet als ze in uw bronnen staan.

![De blokken My snippets en Do not mention](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-14-snippets-do-not-mention.png)

**Guidelines and check rules · Fozzels standard.** De standaardregels die Fozzels voor elke tekst gebruikt. Ze staan aan in elke nieuwe Flow. Past een regel niet bij uw teksten? Dan kunt u hem uitzetten.

- Noem geen prijzen, kortingen of levertijden.
- Gebruik alleen feiten uit de productgegevens, de foto's of de zoekresultaten.
- Gebruik geen overtreffende trappen of claims zoals "de beste" of "de goedkoopste".
- Neem maten, materialen en merknamen precies over uit de productgegevens.
- Gebruik alleen de opmaak uit de instellingen voor de structuur.
- Gebruik in de hele tekst dezelfde aanspreekvorm en dezelfde spelling.

Wilt u eigen regels toevoegen? Gebruik **Your own rules**, bijvoorbeeld "noem altijd het land van productie".

![Standaardregels van Fozzels en uw eigen regels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-15-standard-rules.png)

#### Extra velden: korte richtlijnen, geen aparte prompts

Hebt u in stap 2 meer dan één veld gekozen? Dan vult de AI de extra velden in hetzelfde verzoek, met dezelfde hoofdprompt. De rol, de doelgroep, de toon, de bronnen en de regels gelden er automatisch voor. U schrijft dus geen aparte prompt per veld. U schrijft alleen een korte richtlijn: wat het veld bevat, hoe lang het is en in welke vorm.

Fozzels heeft al een voorstel voor elk veld gemaakt. Houd het, of wijzig het met **Edit guideline**. De link "Change fields in step 2" brengt u terug naar de keuze van de velden.

![Extra velden en de samenvatting Your prompt](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-16-extra-fields.png)

**De richtlijneditor.** Links ziet u de tekst van de richtlijn. Rechts ziet u de **Preview**: dezelfde richtlijn met de echte waarden van één product. Gebruik de pijlen in de **Preview** om naar een ander product te gaan.

- **Attributen als variabelen.** Fozzels voegt attributen uit het paneel **Attributes** als groene tags aan de tekst toe. Een geel voorwaardelijk blok "if…" voegt een regel alleen toe als het product een waarde heeft voor dat attribuut. U kunt het paneel sorteren op vulgraad en erin zoeken. Het getal op een attribuut toont hoe vaak u het gebruikt.
- **Snippets.** Uw opgeslagen instructiesnippets staan rechts.
- **Templates.** Klik op **Save as template** om een richtlijn op te slaan als sjabloon. Klik op **Load** om het in een andere Flow te gebruiken.
- **AI Assistant.** De assistent helpt u de richtlijn te schrijven of te wijzigen. U kunt het resultaat toevoegen, bij de cursor invoegen, de tekst ermee vervangen of het kopiëren.

Een volledige beschrijving van de editor vindt u in [4.3.2 Prompt instellen en gebruiken: de nieuwe prompteditor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

![De richtlijneditor met de Preview, de attributen en de snippets](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-17-guideline-editor.png)

![De AI Assistant in de richtlijneditor](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-18-ai-assistant.png)

Het tandwielicoon naast de naam van het veld opent de attribuutinstellingen. Hier stelt u in:

- of Fozzels het attribuut gebruikt,
- of u erop kunt filteren,
- of Fozzels er content in mag schrijven en uw winkel mag bijwerken,
- of onderliggende producten de waarde van het hoofdproduct krijgen,
- of HTML is toegestaan.

U kunt ook de naam van het attribuut vertalen in andere talen. Zo begrijpt de AI beter wat het attribuut bevat. Als u dit venster opslaat, stuurt Fozzels niets naar uw winkel.

![Attribuutinstellingen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-19-attribute-settings.png)

#### Your prompt

Onderaan de stap ziet u een samenvatting: het aantal velden in de Flow, het aantal blokken dat aanstaat, en alle actieve blokken, van de rol en de doelgroep tot de controleregels. De echte teksten ziet u in stap 5, als u de prompt test op echte producten.

### Stap 4. Fields

In deze stap stelt u per veld de lengte en de structuur van de tekst in. De velden zijn tabbladen bovenaan. Klik op **+** om een veld toe te voegen, en klik op het kruisje om een veld te verwijderen. Alle instellingen uit de stap **Enrich the text** blijven gelden voor elk veld.

**Lengte van de tekst.** Het geschatte aantal woorden dat de AI schrijft: **Short** (ongeveer 60), **Normal** (ongeveer 120), **Long** (ongeveer 200) of **Custom** (uw eigen waarde).

**Trust block.** Een kort blok aan het einde van de tekst. Het geeft klanten en AI-agents vertrouwen in het product en in uw shop. Schrijf op wat uw shop betrouwbaar maakt, bijvoorbeeld een hoge klanttevredenheid, fysieke winkels, gratis retourneren, een garantie of een keurmerk. Het blok wordt een aparte sectie aan het einde van de tekst. Er zijn twee opties:

- **Same block in every description** (aanbevolen): Fozzels voegt het blok letterlijk toe na elke tekst. Het blok is altijd juist, en de prompt blijft korter.
- **AI mentions it where it fits**: de AI schrijft deze punten in eigen woorden, alleen waar ze passen.

U kunt het blok een kop geven, bijvoorbeeld "Bestellen en bezorgen", en een lijst met punten.

![Stap 4: de lengte van de tekst en het Trust block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-20-step-4-length-trust-block.png)

**Structure and formatting.** De volgorde van de delen van de tekst in uw shop. Fozzels zet de standaardstructuur voor dit type tekst klaar. U kunt die wijzigen:

- **Format**: HTML (h2, h3, h4, p, ul) of platte tekst.
- **Sections**: elke sectie heeft een kopniveau (H2, H3 …), een vorm (kop, alinea of opsomming) en een eigen instructie. Sleep een sectie om de volgorde te wijzigen. Klik op het kruisje om een sectie te verwijderen.
- **+ Custom section**: voegt een eigen sectie toe.

![Structure and formatting: de secties van een beschrijving](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-21-structure-sections.png)

Klik op het potloodicoon om de sectie-editor te openen. Hier stelt u de kop, het niveau, de instructie, de vorm, het geschatte aantal woorden en een voorwaarde in. De voorwaarde bepaalt wanneer Fozzels de sectie aan de tekst toevoegt: **Always include**, **Only if a field is filled** of **Only if a building block is on**.

![Een sectie en de voorwaarde ervan bewerken](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-22-edit-section.png)

### Stap 5. Test

In deze stap ziet u producten uit uw selectie. Per product kunt u de prompt precies zo zien als de AI hem krijgt: klik op **View the filled-in prompt for this product**. Klik op **Test** om de tekst te zien die de AI voor dat product schrijft, naast de huidige tekst. Bent u niet tevreden met het resultaat? Ga dan terug naar de blokken in stap 3.

Fozzels stelt enkele producten uit uw selectie voor de test voor. Wilt u andere producten toevoegen? Zoek ze op. Klik op het kruisje om een product te verwijderen.

:::note
Een test schrijft een echte tekst met uw AI-model. Fozzels rekent die op dezelfde manier af als alle andere teksten. De scores gebruiken ook tokens.
:::

![Stap 5: testproducten](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-23-step-5-test-products.png)

Na de test toont Fozzels de totale score van de huidige tekst en van de nieuwe tekst, en de verbetering, bijvoorbeeld 12 → 69, of +57. Daaronder ziet u per onderwerp een score van 0 tot 100, met een korte uitleg voor de huidige tekst en voor de nieuwe tekst.

| Onderwerp | Wat Fozzels beoordeelt |
|---|---|
| SEO | Kunnen klanten de tekst vinden in Google: een zoekwoord aan het begin, een goede lengte, zinnen die makkelijk te lezen zijn. |
| GEO | Kunnen AI-zoekmachines en shoppingagents de tekst vinden: concrete feiten die ze kunnen controleren. |
| AI-leesbaarheid | Kan een taalmodel de tekst direct begrijpen: een duidelijke structuur. |
| Zoekwoorden | Bevat de tekst de gekozen zoektermen op een natuurlijke manier, zonder te veel herhalingen. |
| Interne links | Bevat de tekst de gekozen links, met een linktekst die vertelt waar ze naartoe gaan. |
| Conversie | Geeft de tekst een reden om te kopen, neemt hij twijfels weg en geeft hij vertrouwen op het juiste moment. |
| Neuromarketing | Gebruikt de tekst simulatie, congruentie, vertrouwen en verwerkingsgemak. |

Fozzels berekent de scores op de tekst zelf, op basis van de blokken die in deze Flow aanstaan. Het telt de onderwerpen van blokken die uitstaan niet mee, bijvoorbeeld **Internal links**.

![Scores van de huidige tekst en de nieuwe tekst per onderwerp](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-24-test-scores.png)

### Stap 6. Launch

De laatste stap heeft drie vragen en, als dat nodig is, geavanceerde instellingen.

1. **How many products per day?** 10, 25, 50, 100 of uw eigen aantal. De limiet houdt de kosten en het controlewerk klein. Als Fozzels de huidige selectie heeft afgerond, neemt de Flow automatisch nieuwe producten die bij de selectie passen.
2. **What happens with a new text?**
    - **I approve every text first** (aanbevolen): nieuwe teksten gaan naar uw controlelijst. Fozzels stuurt niets naar uw shop voordat u het goedkeurt.
    - **Straight to my shop**: Fozzels publiceert de teksten automatisch. U kunt ze nog steeds bewerken of teruggaan naar de vorige versie.
3. **If a product changes later?** Verandert een attribuut dat de prompt gebruikt, bijvoorbeeld de kleur of het materiaal? Dan kan Fozzels automatisch een nieuwe tekst schrijven. Staat de schakelaar uit, dan schrijft Fozzels maar één keer een tekst voor een product.

Onder **Advanced settings** kunt u voorkomen dat andere Flows dezelfde content opnieuw genereren:

- **Use default**: de cooldown uit uw algemene instellingen.
- **Override**: een eigen cooldown voor deze Flow, in weken.
- **Turn off**: geen cooldown. Fozzels genereert geen nieuwe tekst alleen omdat er tijd voorbij is.

Meer informatie vindt u in [Overlappende contentgeneratie voorkomen](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).

In **Advanced settings** kunt u ook op **Connect workflow** klikken om een actie toe te voegen die na elke tekst draait, bijvoorbeeld een vertaling naar het Duits of een nieuwe metabeschrijving.

Klik op **Launch flow** om de Flow te starten, of op **Save as draft** om later verder te gaan.

![Stap 6: startinstellingen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-25-step-6-launch.png)

## Na de start: de Flow-pagina

Na de start ziet u de melding "Your flow is running" en een knop die de Flow-pagina opent.

![De melding Your flow is running](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-26-flow-running.png)

De Flow-pagina toont alle informatie over de Flow op één scherm:

- **Product selection**: het filter dat de producten kiest, en het aantal producten.
- **System prompt**: het deel van de prompt dat Fozzels met elk verzoek meestuurt, vóór de instructies voor de velden: de rol, de doelgroep, de toon, de principes, de zoekwoorden, de woorden die u wilt vermijden en de regels.
- **Attributes to generate**: de velden die Fozzels genereert. Fozzels maakt ze allemaal in één AI-verzoek per product, met één gedeelde hoofdprompt.
- **Status**, **AI Configuration**, **Automation**, **Workflows**: de status en de voortgang, het model en de prijs ervan, de dagelijkse limiet, automatisch publiceren, de betrouwbaarheidsdrempel, de cooldown en de gekoppelde acties. Klik op de knop **Change** van een blok om het te wijzigen.

![De Flow-pagina in Expert view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-27-flow-page-expert-view.png)

In de bovenste balk kunt u wisselen tussen **Step by step** en **Expert view**, en de gegenereerde content (**Generated content**), de test en de planning openen. Het menu **…** bevat:

- **Run Now**: start de generatie direct, ook als de Flow de dagelijkse limiet voor vandaag al heeft bereikt.
- **Duplicate**, **Archive** en **Delete**. Meer informatie vindt u in [4.1.3. Flows beheren: duplicatie, archivering en verwijdering](/content-creation-flows/managing-flows-duplication-archiving-and-deletion/).

![Het Flow-menu met Run Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-28-flow-menu-run-now.png)

**Workflows.** Zo voegt u een workflowactie toe aan de Flow:

1. Klik in het blok **Workflows** op **Change**.
2. Kies een actie uit de lijst, bijvoorbeeld "Product is in".
3. Klik op **Add**.
4. Klik op **Save**.

![Een workflow toevoegen aan de Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-29-add-workflow.png)

Meer informatie vindt u in [4.11.1. Workflows. Les 1: Aan de slag met workflows](/content-creation-flows/workflows-lesson-1-getting-started/).

**Test op de Flow-pagina.** Dit opent een tabel met alle producten van de selectie. Per product ziet u de SKU, de naam, een miniatuur en de prompt. Klik in een rij op **Generate Now** om direct content voor dat product te genereren, zonder op de planning te wachten. U kunt in de tabel zoeken, naar andere pagina's gaan en de kolommen kiezen die u wilt zien.

![De producttabel van de Flow met de knop Generate Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-30-flow-product-table.png)

### Gegenereerde content: controleren en goedkeuren

Klik op **Generated content** om de lijst met gegenereerde content (**Content Completion List**) te openen. Per product ziet u de SKU, de naam, een miniatuur, de prompt, alle gegenereerde velden en de datums waarop Fozzels het verzoek heeft gemaakt en uitgevoerd. Elke kolom heeft een filter. De schakelaar **Confirmed** toont of een tekst is goedgekeurd. Wilt u een actie voor veel teksten tegelijk uitvoeren? Selecteer de rijen en kies de actie in het menu **Actions**.

![De lijst met gegenereerde content](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-31-generated-content-list.png)

Klik op een rij om het venster **Edit completion result** te openen:

- **Hoofdveld**: links de tekst, en rechts een **Preview** die toont hoe de tekst er in uw shop uitziet. Klik op **Show HTML** om de HTML-code te zien, of op **Enable Editor** om de visuele editor te gebruiken.
- **Andere velden van de Flow**: onder het hoofdveld kunt u de andere velden bekijken en bewerken die deze Flow heeft gevuld, zoals **SEO Description** en **SEO Title**.
- **Batch Confirmed**: markeert het resultaat als goedgekeurd. Boven de knoppen ziet u de synchronisatiestatus met uw winkel.
- **Knoppen**: **Save**, **Save & Sync** (slaat de tekst op en stuurt hem direct naar uw winkel), **Regenerate**, **Show Revisions** (vorige versies) en **Copy to Clipboard**.

![Het venster Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-32-edit-completion-result.png)

Meer informatie vindt u in [4.7.5 Inhoud in de batchlijst bewerken. Uitgebreide teksteditor](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/) en [4.7.4 Verdachte woorden en frasen](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

## Twee modi: Step by step of Expert view

Gebruik de modus die u prettig vindt. U wisselt op elk moment met één klik tussen de modi.

| Modus | Wat hij toont | Het beste voor |
|---|---|---|
| Step by step | Een begeleide wizard, één stap tegelijk. | Nieuwe Flows en nieuwe teamleden. |
| Expert view | De volledige Flow op één pagina, ook de geavanceerde instellingen. | Ervaren gebruikers die alle instellingen tegelijk willen zien. |

De geavanceerde instellingen in **Expert view** zijn onder meer de betrouwbaarheidsdrempel, de cooldown tussen Flows en wat Fozzels doet als een product nog geen afbeelding heeft.

Als u een nieuwe Flow maakt, geeft Fozzels hem een naam op basis van uw keuzes. U kunt de naam wijzigen en met één klik teruggaan naar de voorgestelde naam.

## Brand Profile: de stem van uw merk op één plek {#brand-profile}

Het **Brand Profile** is een aparte pagina in uw accountinstellingen. Het bepaalt waarmee elke nieuwe Content Flow begint:

- het AI-model,
- wie schrijft, voor wie en in welke toon,
- de neuromarketingprincipes en de zoekwoorden,
- wat nooit in de tekst mag staan.

U kunt elk van deze instellingen nog steeds per Flow wijzigen. Als u het profiel wijzigt, verandert Fozzels uw bestaande Flows niet.

![De pagina Brand Profile](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-33-brand-profile.png)

### Meer dan één profiel

Maak een apart profiel per merk, shop of productlijn, bijvoorbeeld één voor beschrijvingen en SEO, één voor FAQ, één voor ALT-teksten of één voor een uitverkoop.

- **New profile**: typ een naam, bijvoorbeeld B2B, Outlet of Premium line, en klik op **Create**.
- **Rename** / **Delete**: wijzig de naam van een profiel of verwijder het. Het standaardprofiel kunt u niet verwijderen. Maak eerst een ander profiel de standaard.
- **Het standaardprofiel**: elke nieuwe Flow begint ermee. In de stap **Enrich the text** kunt u een ander profiel laden of de instellingen van de Flow opslaan als nieuw profiel.

### AI-model

Kies een provider (OpenAI (ChatGPT), Anthropic, xAI of Google Gemini) en een model. Nieuwe Flows beginnen met dit model, maar u kunt in elke Flow een ander model kiezen.

### Rol, doelgroep en toon

Zet elk blok aan met de schakelaar. De opgeslagen opties zijn knoppen. Klik op een knop om een optie te kiezen. Onder de knoppen ziet u de volledige beschrijving die de AI krijgt. Klik op het potloodicoon om de beschrijving te bewerken, of klik op **+ New…** om een nieuwe optie te maken.

- **Role of the AI**: wie de tekst schrijft en vanuit welk standpunt, bijvoorbeeld webshop-copywriter, SEO-specialist, merkverteller of winkelmedewerker.
- **Target audience**: wie de tekst leest: de leeftijd, de levensstijl, hoe u de lezer aanspreekt en wat voor de lezer belangrijk is.
- **Tone of voice**: hoe uw merk tegen klanten praat, in uw eigen woorden. Kiest u geen toon, dan schrijft de AI in een neutrale, informatieve stijl.

### Neuromarketingprincipes in het Brand Profile {#neuromarketing-principles-in-the-brand-profile}

Elk principe voegt een schrijfregel toe aan de prompt. U kunt meer dan één principe kiezen. Ze versterken elkaar.

| Principe | Schrijfregel | Werkt voor |
|---|---|---|
| Processing fluency | Korte zinnen, een duidelijke eerste regel, weinig claims, een logische volgorde. | Dagelijkse aankopen, vergelijkingen, lage prijzen. |
| Simulation | De klant stelt zich voor dat hij het product gebruikt: een situatie, een moment, wat hij voelt. | Nieuwe, bijzondere of emotionele producten. |
| Congruence | De tekst klopt met de foto en met het product dat de klant thuis krijgt. Hij belooft niets wat het product niet waarmaakt. Dit geeft minder retouren. | Producten waarbij de verwachting en het echte product moeten kloppen. |
| Trust | Eerlijk, concreet en vertrouwd. Feiten die de klant kan controleren, geen slim verkooppraatje. | Duurdere aankopen, onbekende merken, nieuwe klanten. |

### Zoekwoorden, woorden die u wilt vermijden en uw eigen instructies

- **Keywords**: de zoektermen waarmee klanten de tekst moeten vinden. In een Flow kan Fozzels ook termen voorstellen voor de producten ervan. Kiest u geen zoekwoorden? Dan kiest Fozzels per product een term uit de titel en de categorie.
- **Do not mention**: woorden en onderwerpen die niet in de tekst mogen staan: prijzen, kortingen, namen van concurrenten, claims zoals "de beste" of "de goedkoopste". De AI gebruikt ze niet, ook niet als ze in uw bronnen staan.
- **Own instructions**: andere informatie die de AI moet weten, in uw eigen woorden. Bijvoorbeeld hoe u de lezer aanspreekt of wat u altijd wilt noemen, zoals "we verzenden binnen 24 uur". Fozzels voegt deze tekst na de blokken toe aan de system prompt, één regel per alinea.
