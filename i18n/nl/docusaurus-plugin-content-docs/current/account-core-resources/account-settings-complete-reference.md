---
title: Accountinstellingen — Volledig Naslagwerk
sidebar_position: 10
slug: /account-core-resources/account-settings-complete-reference
description: Elk gedeelte van Fozzels Accountinstellingen uitgelegd — Profiel, Beveiliging, Meldingen, OpenAI Token, API tokens, Flow Settings, Prompt Templates, Media, Plans, Payments en Transactions.
keywords:
- contentflow
- inhoudsstroom
- contentgeneratie
- invoerprompt
- ophalen
- voltooiing
---

Ga naar [Settings](https://app.fozzels.com/user/settings) — de linkernavigatiebalk bevat alle secties.

---

## Profiel

Configureer uw persoonlijke accountgegevens:

- **Naam, e-mailadres, bedrijf, telefoonnummer**
- **Avatar** — upload een JPG of PNG foto
- **Taal** — EN, NL, DE, of ES (wijzigt de Fozzels interface taal)
- **Tijdzone** — belangrijk voor pull-schema's, die standaard in UTC worden uitgevoerd; het instellen van uw tijdzone doet geplande tijden correct weergeven

---

## Beveiliging

Wijzig uw accountwachtwoord:

- Voer uw huIDige wachtwoord in
- Voer een nieuw wachtwoord in en bevestig het

---

## Meldingen

Schakel in/uit welke e-mails Fozzels u stuurt:

- **Product emails** — nieuws, tips en functieaankondigingen van Fozzels
- **Balance alert** — melding wanneer uw tegoedsaldo naar nul daalt

---

## Open AI Token

Voeg uw eigen OpenAI API-sleutel toe om uw persoonlijke OpenAI-facturering te gebruiken in plaats van Fozzels-tegoed.

- Als dit is ingesteld, gebruiken alle OpenAI-gebaseerde Flows en de AI-assistent uw sleutel rechtstreeks
- U hebt nog steeds een minimum van €0,01 saldo in Fozzels nodig om deze functie te gebruiken
- Laat leeg om de Fozzels platform-sleutel te gebruiken (tegoed wordt afgetrokken van uw saldo)

---

## API (Persoonlijke Toegangstokens)

Maak API-tokens voor programmatische toegang tot Fozzels:

- Geef elk token een naam
- Tokens kunnen op elk moment worden ingetrokken
- Gebruik tokens om Fozzels met externe tools te integreren of taken via de API te automatiseren

---

## Flow Settings

Globale instellingen die van toepassing zijn op alle Content Flows tenzij per Flow overschreven.

### Trusted HTML Tags

Whitelist van HTML-tags die zijn toegestaan in AI-gegenereerde content. Alleen tags in deze lijst blijven behouden wanneer de output in een HTML-attribuut wordt gebruikt.

### Suspicious Words

Lijst van woorden of zinnen die gegenereerde content automatisch markeren voor handmatige controle.

Standaard verdachte woorden bevatten AI-artefacten zoals "As an AI", "I cannot", "Sorry". U kunt:

- Uw eigen woorden toevoegen (bijv. competitornamen, verboden zinnen)
- Standaardgegevens verwijderen die false positives veroorzaken

Voltooiingen met verdachte woorden kunnen niet automatisch synchroniseren — zij vereisen handmatige controle en bevestiging.

### Completion Cooldown (global)

Minimale tijd tussen AI-regeneraties voor hetzelfde product, over alle Flows heen.

Formaat: stel een getal en een eenheid in (uren, dagen, weken).

Individuele Flows kunnen:

- Deze globale instelling **Inherit** (overnemen)
- **Override** (overschrijven) met hun eigen cooldown
- De cooldown geheel **Turn off** (uitschakelen)

---

## Prompt Templates

Sla herbruikbare prompt templates op voor gebruik in meerdere Flows.

- Geef elk template een naam en inhoud
- Verwijs naar templates bij het maken of bewerken van een Flow in plaats van de prompt helemaal opnieuw te schrijven
- Nuttig voor het handhaven van consistente toon en opmaak over Flows heen

---

## Media

Uw mediabibliotheek — afbeeldingen en bestanden geüpload of gegenereerd binnen Fozzels.

---

## Plans

Bekijk en wijzig uw abonnementsplan.

Ga naar [Plans](https://app.fozzels.com/user/settings/plans)

Elk plan toont:

- Naam en beschrijving
- Inbegrepen functies
- Quota's: max integraties, winkels, actieve Flows, dagelijkse voltooiingen, maandelijkse voltooiingen
- Prijs

Om te upgraden of downgraden: klik **Choose Plan** → Stripe checkout → bevestig betaling.

### Beschikbare plans

| Plan | Integrations | Stores | Flows | Completions/dag | Completions/maand |
|------|-------------|--------|-------|-----------------|-------------------|
| **Trial** | 1 | 1 | 1 | beperkt | beperkt |
| **Starter** | 6 | 18 | onbeperkt | — | — |
| **Ultra Light** | 1 | 1 | 4 | 1.000 | 30.000 |
| **Light** | 1 | 3 | 5 | 30 | 900 |
| **Plus** | 3 | 6 | 15 | 75 | 2.250 |
| **Premium** | 6 | 18 | 60 | 100 | 3.000 |
| **Unlimited** | onbeperkt | onbeperkt | onbeperkt | onbeperkt | onbeperkt |

> Wanneer een quota wordt overschreden, wordt de actie geblokkerd met een bericht dat verwijst naar de plannen-pagina.

---

## Payments (Tegoed)

Ga naar [Payments](https://app.fozzels.com/user/settings/payments)

Fozzels gebruikt een **pay-per-use tegoedsysteem** — apart van uw abonnementsplan. Tegoed wordt verbruikt elke keer dat AI content genereert.

**Kosten:** ongeveer €0,06 per 750 woorden gegenereerde content.

**Voorbeeld:** 1.000 productbeschrijvingen van ~200 woorden ≈ €16

### Uw saldo beheren

- **Current balance** — weergegeven in het oranje vak
- **Charge Credit Now** — handmatige eenmalige opvulling via Stripe
- **Configure Auto-Charge** — stel een drempel en auto-laad bedrag in
  - Voorbeeld: automatisch €50 laden wanneer het saldo onder €10 daalt
- **Customer Billing Portal** — Stripe portal om betaalmethoden te beheren en facturen te downloaden

### Betalingsgeschiedenis

De tabel toont alle vorige laadingen met datum, bedrag en status.

### Veelgestelde facturingsproblemen

- **"You exceeded your current quota"** — uw saldo is nul of uw OpenAI API-sleutel is verlopen
  - Vul bij op [Payments](https://app.fozzels.com/user/settings/payments) of voeg uw eigen OpenAI-sleutel toe in Settings → Open AI Token
- **Auto-charge triggert niet** — controleer of de drempel is ingesteld en een betaalmethode in de Stripe portal is opgeslagen

---

## Transactions

Volledige geschiedenis van alle tegoed aftrekkingen — toont welke Flow of voltooiing tegoed heeft verbruikt, hoeveel tokens zijn gebruikt en de kosten per bewerking.

---

## Reseller access

Als een Reseller uw account beheert, ziet u hun toegang vermeld in Accountinstellingen. U kunt **Reseller access intrekken** op elk moment op deze pagina.

Wanneer een Reseller is ingelogd in uw account, wordt de koppelingsbalk zwart.
