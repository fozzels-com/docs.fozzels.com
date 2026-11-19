---
title: Content Flows — Volledig Gids
sidebar_position: 28
slug: /content-creation-flows/content-flows-complete-guide
description: Content Flows zijn de kernautomatiseringsfunctie van Fozzels. Deze gids behandelt het maken van een Flow, prompt templates, het uitvoeren ervan, de voltooiingslevenscyclus, verdachte content, en waarom content soms niet synchroniseert.
keywords:
- contentflow
- inhoudsstroom
---

Content Flows zijn de kernautomatiseringsfunctie van Fozzels. Een Flow is een regel die automatisch AI-content genereert voor een geselecteerd productattribuut en het resultaat terugschrijft naar uw winkel.

## Wat een Flow doet

1. Filtert producten op basis van uw voorwaarden (bijv. "description is empty")
2. Stuurt productgegevens naar AI met uw prompt
3. Slaat de gegenereerde content op als een "completion"
4. Pushes de content naar uw winkelattribuut

---

## Een Flow maken

Ga naar [Flows](https://app.fozzels.com/completions/product/rule) en maak een nieuwe Content Flow. U stelt die in met zes begeleide stappen:

1. **Store**: kies de integratie, de website en de store view.
2. **What and with what?**: kies de velden die u wilt genereren en de producten.
3. **Enrich the text**: kies het AI-model en bouw de prompt op uit blokken: rol, doelgroep, toon, bronnen, zoekwoorden en regels.
4. **Fields**: stel per veld de lengte, de structuur en het formaat in.
5. **Test**: genereer teksten voor echte producten en vergelijk de scores van de huidige tekst en de nieuwe tekst.
6. **Launch**: stel de dagelijkse limiet in, de goedkeuring van nieuwe teksten, updates als een product verandert, en de cooldown tussen Flows.

Een volledige beschrijving van elke stap vindt u in [4.1.2. Een Content Flow maken: de zes stappen](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

:::warning
Staat **If a product changes later?** aan? Gebruik dan het veld waar de Flow naartoe schrijft niet als bron in de prompt. Anders kan Fozzels de tekst steeds opnieuw genereren (recursie).
:::

---

## Prompt template tips

Voeg productgegevens in als attributen vanuit het attributenpaneel in plaats van ze uit te typen: een attribuut wordt vervangen door de eigen waarde van elk product.

**Attribuut of voorwaarde:**

- Een **los attribuut** staat op zichzelf binnen een zin. Gebruik het voor attributen die bijna elk product heeft (de vulgraad in het attributenpaneel laat zien hoeveel producten dat zijn).
- Een **voorwaarde** (een if-blok) bevat een hele regel, zoals _Brand:_ **Brand**, en laat die weg als het product geen waarde heeft. Gebruik dit voor alles met een label of andere tekst rond het attribuut, zodat de AI nooit een lege regel _Brand:_ ontvangt.

Wees specifiek over:

- Opmaak en lengte ("150–200 woorden")
- Taal ("in English")
- Toon ("professional but friendly")
- Wat u moet vermijden ("do not mention competitors")

**Voorbeeld voor productbeschrijving.** Vetgedrukte woorden zijn attributen. De naam is bij elk product ingevuld en staat dus los; de andere regels met een label staan elk in een voorwaarde:

> Write a compelling product description (150–200 words) in English.
>
> Product name: **Name**
>
> _if Brand_ → Brand: **Brand**
>
> _if Category_ → Category: **Category**
>
> _if Short Description_ → Current short description: **Short Description**
>
> Focus on benefits, not just features. Use a professional but friendly tone.

**De output opmaken.** De prompt zelf heeft geen opmaak. Wilt u koppen, lijsten of vetgedrukte tekst in de gegenereerde content, vraag er dan in woorden om, bijvoorbeeld _Begin met een `<h2>`-kop met de naam van het product, gevolgd door twee korte alinea's._ Als de output HTML moet bevatten, schakel de relevante tags in op [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Een Flow uitvoeren

**Launch flow** (stap 6): de Flow verwerkt elke dag producten, tot de dagelijkse limiet, totdat de selectie klaar is. Daarna neemt de Flow nieuwe producten die bij de selectie passen.

**Run Now** (het menu **…** op de Flow-pagina): start de generatie direct, ook als de Flow de dagelijkse limiet voor vandaag al heeft bereikt.

**Generate Now** (de tabel **Test** op de Flow-pagina): genereert direct content voor één product.

---

## Completion levenscyclus

Elk gegenereerd item doorloopt deze fasen:

| Status | Betekenis |
|--------|---------|
| **Pending** | Gegenereerd, wacht op controle |
| **Confirmed** | Goedgekeurd door u, klaar om te synchroniseren |
| **Synchronized** | Succesvol gepusht naar de winkel |
| **Suspicious** | Bevat gemarkeerde content — vereist handmatige controle voordat synchronisatie |

Met **Straight to my shop** (stap 6) — schone content wordt automatisch bevestigd en gepusht. Verdachte content wacht altijd op handmatige controle.

Met **I approve every text first** (stap 6) — alle content wacht tot u deze hebt gecontroleerd en bevestigd voordat Fozzels synchroniseert.

---

## Voltooiingen controleren

Ga naar een Flow → **View Completions** om alle gegenereerde content te zien.

Per item kunt u:

- **Edit** de gegenereerde tekst handmatig
- **Regenerate** — vraag de AI opnieuw te genereren
- **Confirm** — content goedkeuren voor synchronisatie
- **Synchronize** — naar uw winkel pushen
- **View revisions** — zie volledige bewerkingsgeschiedenis en diff tussen versies

**Bulk actions:** selecteer meerdere items → Confirm & Sync, Regenerate, of Push.

---

## Verdachte content

Fozzels markeert automatisch content die er verkeerd uitziet:

- AI-artefacten: "Sorry, I can't...", "As an AI...", "Note:", "Please"
- Lege waarden
- Dubbel gecodeerde HTML (`&lt;`, `&gt;`)
- Markdown syntaxis in een niet-markdown veld
- Uw aangepaste verdachte woorden (configureer in [Settings → Flow Settings](https://app.fozzels.com/user/settings/flow))

Gemarkeerde content toont precies waarom het werd gemarkeerd. U kunt:

- Het bewerken en repareren
- Opnieuw genereren
- Override en toch goedkeuren (als het een false positive is)

---

## Waarom content niet synchroniseert (push geblokkeerd) {#why-content-wont-sync-push-blocked}

| Reden | Oplossing |
|--------|-----|
| Flow is inactief | Schakel de Active toggle in op de Flow |
| Niet bevestigd | Bevestig de completion (of kies **Straight to my shop** in stap 6 van de Flow) |
| Verdachte content | Controleer en goedkeuren, of bewerk en sla opnieuw op |
| Product verwijderd uit winkel | Niets te doen — product bestaat niet meer |
| Winkel/integratie inactief | Schakel de winkel of integratie in |
| Attribuut niet mutable | Schakel Mutable vlag in op Integration → Attributes |

---

## Flow beheer

- **Duplicate** — kopieer een Flow naar dezelfde of een andere winkel
- **Archive** — verberg de Flow uit de hoofdlijst; gegevens blijven behouden en kunnen worden hersteld
- **Delete** — permanente verwijdering
- **Obsolete** — wanneer een Flow wordt gekloond vanwege structurele wijzigingen (doelattribuut of voorwaarden gewijzigd), wordt de oude versie verouderd; de voltooiingsgeschiedenis blijft behouden

### Waarschuwing voor structurele wijzigingen

Als u het **target attribute** of **conditions** op een Flow wijzigt die al voltooiingen heeft, waarschuwt Fozzels u en biedt aan om **"Obsolete and Duplicate"** — dit creëert een frisse Flow met uw wijzigingen, met behoud van de geschiedenis van de oude.

---

## Recursie waarschuwing

Geactiveerd wanneer hetzelfde attribuut verschijnt als:

- Een attribuut in uw prompt
- Het output doelattribuut

Dit creëert een oneindige lus — elke generatie overschrijft de input voor de volgende run.

Oplossing:

- Verwijder dat attribuut uit de prompt
- OF schakel "Regenerate on attribute change" uit

---

## Veelgestelde problemen

**Geen producten komen overeen met de Flow**

- Controleer uw voorwaarden — probeer deze tijdelijk te verwijderen om alle producten te zien
- Controleer dat de attributen die in voorwaarden worden gebruikt de **Filterable** vlag hebben in Integration → Attributes

**Lege AI-output**

- Controleer dat bronattributen waarden hebben voor uw producten
- Controleer dat attributen waarnaar in de prompt wordt verwezen de **Filterable** vlag hebben
- Maak de prompt specifieker

**Content wordt niet naar winkel gepusht**

- Controleer de [push blocked redenen](#why-content-wont-sync-push-blocked) hierboven
- Controleer dat de integratie Active toggle AAN is
- Controleer dat het doelattribuut de **Mutable** vlag heeft

**OpenAI quota overschreden**

- Vul bij op [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing)
- Of verminder dagelijks volume in Flow-automatiseringsinstellingen

**Dubbele content over Flows**

- Schakel "Prevent overlapping generation" in met een cooldown periode (bijv. 7 dagen)
- Dit voorkomt dat meerdere Flows hetzelfde product regenereren binnen het cooldown-venster
