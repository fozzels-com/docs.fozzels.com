---
title: Content Flows — Volledig Gids
sidebar_position: 27
slug: /content-creation-flows/content-flows-complete-guide
description: Content Flows zijn de kernautomatiseringsfunctie van Fozzels. Deze gids behandelt het maken van een Flow, prompt templates, het uitvoeren ervan, de voltooiingslevenscyclus, verdachte content, en waarom content soms niet synchroniseert.
keywords:
- contentflow
- inhoudsstroom
- contentgeneratie
- invoerprompt
- voltooiing
---

Content Flows zijn de kernautomatiseringsfunctie van Fozzels. Een Flow is een regel die automatisch AI-content genereert voor een geselecteerd productattribuut en het resultaat terugschrijft naar uw winkel.

## Wat een Flow doet

1. Filtert producten op basis van uw voorwaarden (bijv. "description is empty")
2. Stuurt productgegevens naar AI met uw prompt
3. Slaat de gegenereerde content op als een "completion"
4. Pushes de content naar uw winkelattribuut

---

## Een Flow maken

Ga naar [Flows](https://app.fozzels.com/completions/product/rule) → **Create Flow**

### Stap 1 — Winkel & doelattribuut

- Selecteer de winkel waarvan u producten wilt verwerken
- Geef de Flow een naam
- Selecteer het **target attribute** — het attribuut dat AI-gegenereerde content zal ontvangen
  - Moet de **Mutable** vlag ingeschakeld hebben in Integration → Attributes

### Stap 2 — AI provider

- Kies AI-leverancier: OpenAI GPT-4o, Google Gemini 2.5 Flash, of Anthropic Claude
- Selecteer een specifiek model
- Configureer modelparameters indien nodig

### Stap 3 — Producten & prompt

- **Conditions** — visuele query builder om te filteren welke producten deze Flow verwerkt
  - Voorbeeld: "description is empty AND category equals Electronics"
  - Laat leeg om alle producten in de winkel te verwerken
  - Een producttellingvoorvertoning toont hoeveel producten overeenkomen
- **Prompt template** — de instructie die naar AI wordt gestuurd, met `{{attribute_code}}` placeholders
  - Voorbeeld: `Write a product description for {{name}} (SKU: {{sku}}) in category {{category}}`
  - **Attributes tab** (`{{attribute_code}}`) — altijd opgenomen in de prompt, zelfs als het product geen waarde voor dat attribuut heeft
  - **Attributes (if filled) tab** (`#attribute_code`) — alleen opgenomen in de prompt wanneer het product werkelijk een waarde heeft; nuttig om lege regels naar de AI te voorkomen

### Stap 4 — Automatiseringsinstellingen

- **Active** toggle — inschakelen/uitschakelen van de Flow
- **Batch size** — hoeveel producten per run moeten worden verwerkt (standaard 10)
- **Automation** toggle — wanneer AAN, wordt bevestigde content automatisch naar uw winkel gepusht zonder handmatige controle
- **Regenerate on attribute change** — opnieuw uitvoeren wanneer bronattributen worden bijgewerkt (⚠ kan recursie veroorzaken als het doelattribuut ook een bron is)
- **Prevent overlapping generation** — cooldown tussen regeneraties per product:
  - **Inherit** — use globale cooldown van accountinstellingen
  - **Override** — stel een aangepaste cooldown in voor alleen deze Flow
  - **Turn off** — genereer altijd opnieuw, ongeacht vorige runs

---

## Prompt template tips

Verwijs naar attributen met `{{attribute_code}}` — gebruik de exacte code weergegeven in Integration → Attributes.

**Twee attribuutsyntaxen:**

- `{{attribute_code}}` — altijd opgenomen (komt overeen met het **Attributes** tabblad in de editor). Gebruik dit standaard.
- `#attribute_code` — opgenomen alleen als het product een waarde heeft (komt overeen met het **Attributes (if filled)** tabblad). Gebruik om lege velden over te slaan.

Wees specifiek over:

- Opmaak en lengte ("150–200 woorden")
- Taal ("in English")
- Toon ("professional but friendly")
- Wat u moet vermijden ("do not mention competitors")

**Voorbeeld voor productbeschrijving:**

```
Write a compelling product description (150–200 words) in English.

Product name: {{name}}
Brand: {{brand}}
Category: {{category_name}}
Current short description: {{short_description}}

Focus on benefits, not just features. Use a professional but friendly tone.
```

Als de output HTML moet bevatten, schakel de relevante tags in op [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Een Flow uitvoeren

**Run Now** — verwerkt onmiddellijk tot 10 producten. Gebruik dit om te testen of voor kleine batches.

**Plan & Close** — plaatst de volledige batch in de wachtrij voor verwerking op de achtergrond. Gebruik dit voor bulk runs.

---

## Completion levenscyclus

Elk gegenereerd item doorloopt deze fasen:

| Status | Betekenis |
|--------|---------|
| **Pending** | Gegenereerd, wacht op controle |
| **Confirmed** | Goedgekeurd door u, klaar om te synchroniseren |
| **Synchronized** | Succesvol gepusht naar de winkel |
| **Suspicious** | Bevat gemarkeerde content — vereist handmatige controle voordat synchronisatie |

Met **Automation AAN** — schone content wordt automatisch bevestigd en gepusht. Verdachte content wacht altijd op handmatige controle.

Met **Automation UIT** — alle content wacht tot u deze hebt gecontroleerd en bevestigd voordat u synchroniseert.

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
| Niet bevestigd | Bevestig de completion (of schakel Automation in) |
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

- Een input in uw prompt (`{{attr_code}}`)
- Het output doelattribuut

Dit creëert een oneindige lus — elke generatie overschrijft de input voor de volgende run.

Oplossing:

- Verwijder `{{attr_code}}` uit de promptsjabloon
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
