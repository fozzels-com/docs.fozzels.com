---
title: Completion Report (Dagelijkse Batchlijst)
sidebar_position: 28
slug: /content-creation-flows/completion-report-daily-batch-list
description: De Completion Report is een dagelijks overzicht van alle AI-gegenereerde content items over uw Flows — toont wat werd gegenereerd, bevestigd en gepusht naar uw winkel op een bepaalde dag.
keywords:
- contentflow
- inhoudsstroom
- contentgeneratie
- invoerprompt
- voltooiing
---

De Completion Report is een dagelijks overzicht van alle AI-gegenereerde content items over uw Flows — toont wat werd gegenereerd, bevestigd en gepusht naar uw winkel op een bepaalde dag.

Ga naar [Completion Report](https://app.fozzels.com/completions/product/completion/report/today) (vervang `today` door een datum zoals `2026-03-20`)

---

## Wat deze pagina toont

Deze pagina bevat elke AI-completion (gegenereerd content item) die binnen het geselecteerde datumbereik is gemaakt of uitgevoerd. Het brengt resultaten van **al uw Flows** op één plaats bij elkaar, zodat u batches kunt controleren, bevestigen en synchroniseren zonder elk Flow afzonderlijk te navigeren.

---

## De report navigeren

### Datumbereik

- **From / To** datepickers bovenaan laten u het datumbereik wijzigen
- De datum in de URL stelt de startdatum in — bijv. `/completions/product/completion/report/2026-03-20`
- Voeg `?end_date=2026-03-21` toe om een einddatum in te stellen

### Winkelfilter

- Het linkervenster vermeldt uw aangesloten winkels
- Klik op een winkel om het rapport naar alleen de voltooiingen van die winkel te filteren
- Klik opnieuw of wis om alle winkels weer te geven

### Display filters (checkboxes)

- **Show only with errors** — verbergt geslaagde items, toont alleen mislukte/foutieve voltooiingen
- **Show only suspicious** — toont alleen voltooiingen gemarkeerd als verdachte content

### Column filters (condition builder)

- Filter op Flow, Website, Store, SKU, Prompt, Created At, Executed At, Synchronized At
- Bouw AND/OR voorwaarden net als in de Catalog

---

## Tabelkolommen

| Kolom | Wat het toont |
|--------|--------------|
| **Flow** | Naam van de Content Flow die dit item heeft gegenereerd (klik om Flow te openen) |
| **Website / Store** | Welke winkel dit item bij hoort |
| **SKU** | Product identifier (klik om product te openen) |
| **Confirmed** | Checkbox — of deze completion voor synchronisatie is goedgekeurd |
| **Prompt** | De AI-prompt die werd gebruikt |
| **Created At** | Wanneer de completion werd gemaakt |
| **Target attribute** | De AI-gegenereerde content (klik om te bewerken) |
| **Executed At** | Wanneer generatie werd uitgevoerd; toont foutlabels als het mislukte |
| **Synchronized At** | Wanneer de content naar uw winkel werd gepusht; toont "Sync Now" als in afwachting |
| **Thumbnail** | Productafbeelding (zichtbaarheid in-/uitschakelen met de kolom knop) |

---

## Acties

### Per-rij acties

- **Toggle Confirmed checkbox** — bevestig of maak bevestiging ongedaan voor één item
- **Click the target attribute value** — opent een bewerkingsmodal waar u kunt:
  - De gegenereerde content handmatig bewerken
  - Revisiegeschiedenis bekijken en vorige versie herstellen
  - Content opnieuw genereren
  - HTML / platte tekst weergave in-/uitschakelen
  - Opslaan en optioneel onmiddellijk synchroniseren
- **Click "Sync Now"** — een enkel item handmatig naar de winkel pushen
- **Click an error label** — zie het volledige foutbericht en retry opties

### Bulk actions (selecteer items eerst, kies dan actie)

| Actie | Wat het doet |
|--------|-------------|
| **Confirm all, Save & Sync** | Markeert geselecteerde items als bevestigd en plaatst deze in wachtrij voor synchronisatie (loopt elke 4 uur) |
| **Regenerate, Save & Sync** | Voert AI generatie opnieuw uit voor geselecteerde items en plaatst in wachtrij voor synchronisatie |
| **Sync Generated Content** | Forceert opnieuw synchronisatie van reeds gesynchroniseerde items (overschrijft wat in uw winkel staat) |
| **Update Suspicious Flag** | Herberekent verdachte status voor geselecteerde items |

---

## Veelgestelde gebruiksscenario's

**Gisteren's batch controleren**

- Open het rapport voor de vorige datum
- Filter op winkel als u er meerdere hebt
- Sorteer op "Executed At" om te zien wat is uitgevoerd

**Mislukte items zoeken**

- Schakel "Show only with errors" checkbox in
- Klik op het foutlabel op een rij om de exacte fout en retry optie te zien

**Verdachte content afhandelen**

- Schakel "Show only suspicious" checkbox in
- Controleer elk gemarkeerd item — bewerk, genereer opnieuw, of bevestig als het een false positive is

**Bulk bevestigen en synchroniseren**

- Selecteer alle items (of filter naar degene die u wilt)
- Gebruik **Confirm all, Save & Sync** om alles tegelijk goed te keuren en in wachtrij te plaatsen
- Synchronisatie wordt automatisch elke 4 uur uitgevoerd; of gebruik "Sync Now" per item voor onmiddellijke push

---

## Veelgestelde problemen

**Geen items weergegeven voor vandaag**

- Voltooiingen verschijnen hier wanneer een Flow is uitgevoerd — controleer dat uw Flows Actief zijn en zijn uitgevoerd
- Probeer het datumbereik uit te breiden

**Items bevestigd maar niet gesynchroniseerd**

- Synchronisatie wordt elke 4 uur uitgevoerd — wacht of gebruik "Sync Now" per item
- Controleer dat de integratie Actief is en de winkel is verbonden

**Fout op "Executed At" kolom**

- Klik op het rode foutlabel om details te zien
- Veelvoorkomende oorzaken: integratie inloggegevens verlopen, attribuut niet mutable, winkel offline

**Item toont als "Suspicious"**

- De content activeerde een verdacht woord of AI artefact patroon
- Bewerk de content handmatig en bevestig — of gebruik **Update Suspicious Flag** als de content eigenlijk goed is
