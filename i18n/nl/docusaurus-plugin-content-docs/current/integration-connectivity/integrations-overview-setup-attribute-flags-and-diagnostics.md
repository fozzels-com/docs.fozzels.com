---
title: Integrations — Overzicht, Setup, Attribuutflags en Diagnostiek
sidebar_position: 21
slug: /integration-connectivity/integrations-overview-setup-attribute-flags-and-diagnostics
description: Een Integration is een beveiligde verbinding tussen Fozzels en uw e-commerce winkel of PIM. Deze gids behandelt ondersteunde platforms, setupstappen, attribuutflags, pull-schema's, platform-specifieke notities en de volledige WooCommerce diagnostiek referentie.
keywords:
- invoerprompt
- ophalen
- voltooiing
---

Een Integration is een beveiligde verbinding tussen Fozzels en uw e-commerce winkel of PIM systeem. Eenmaal verbonden, kan Fozzels uw productgegevens ophalen en AI-gegenereerde content terugpushen naar uw winkel.

## Ondersteunde platforms

- **Shopify** — volledige ondersteuning inclusief Shopify Markets (meertalig)
- **Magento 2** — inclusief multi-website en multi-store setups
- **WooCommerce** — via REST API
- **Shopware 6**
- **Lightspeed**
- **Akeneo** — PIM systeem
- **Katana PIM**
- **BizzLayer**
- **EK Retail**
- **NextChapter**
- **StoreInfo Catalog XML**

## Integration hierarchie

Integration → Website(s) → Store(s) → Products & Attributes

Elke integratie kan meerdere websites bevatten, en elke website kan meerdere winkels bevatten (bijv. verschillende talen of regio's).

---

## Een integratie instellen

### Stap 1 — Maak de integratie

- Ga naar [Integrations](https://app.fozzels.com/integrations/definitions)
- Klik **Add Integration** en selecteer uw platform
- Voer een naam, uw winkel-URL en platform inloggegevens in
- Slaag op — Fozzels zal de verbinding valideren

### Stap 2 — Synchroniseer websites en winkels

- Na opslaan, klik **Synchronize** om de lijst met websites en winkels van uw platform op te halen
- Activeer de websites en winkels waarmee u wilt werken
- Opmerking: het activeren van winkels telt mee voor uw planquota

### Stap 3 — Pull producten

- Eenmaal winkels actief zijn, trigger een **Product Pull**
- Fozzels importeert alle producten met hun attributen en afbeeldingen
- U kunt pull voortgang in real-time monitoren (toont items verwerkt / totaal)

### Stap 4 — Configureer attributen

- Ga naar het **Attributes** tabblad van uw integratie
- Schakel de attributen in die u wilt gebruiken
- Stel **Filterable** vlag in op attributen die u producten mee wilt filteren of als input in Flows wilt gebruiken
- Stel **Mutable** vlag in op attributen waar AI-gegenereerde content zal worden geschreven

---

## Attribuutflags uitgelegd

| Vlag | Wat het doet |
|------|-------------|
| **Filterable** | Attribuut verschijnt in Catalog filter en kan als input in Flow prompts worden gebruikt (`{{attribute_code}}`) |
| **Mutable** | Fozzels kan AI-gegenereerde content naar dit attribuut schrijven (vereist voor Flow output) |
| **Enabled** | Attribuut is actief en zichtbaar in Fozzels |
| **HTML-able** | Staat HTML-content in dit attribuut toe (alleen text/textarea types) |

> Als u een attribuut niet als Flow target kunt selecteren — controleer of het de **Mutable** vlag ingeschakeld heeft.
>
> Als een attribuut niet in Catalog filter of Flow prompt verschijnt — controleer of het de **Filterable** vlag ingeschakeld heeft.

---

## Pull schema

Fozzels kan automatisch producten ophalen en Flows uitvoeren op een schema:

1. Product Pull — haalt laatste productgegevens van uw winkel
2. Flow Sync — koppelt producten aan actieve Flows
3. Attribute Refresh — werkt attribuutwaarden bij
4. AI Generation — genereert content
5. Data Export — pushed content terug naar uw winkel

U kunt een aangepaste pull-tijd (formaat: `HH:MM`, bijv. `14:00`) per integratie of per winkel instellen. Indien niet ingesteld, wordt de standaard systeemwaarde (00:30 UTC) gebruikt.

Ga naar [Settings → Profile](https://app.fozzels.com/user/settings/profile) om uw tijdzone te wijzigen.

---

## Integration status

| Status | Betekenis |
|--------|---------|
| **Active** | Integratie is ingeschakeld en zal gegevens verwerken |
| **Authorized** | Inloggegevens zijn geldig (alleen Shopify) |
| **REST API Connected** | Live verbindingstest geslaagd |

> De integratie moet **Active** zijn voor pull of push om te werken.

---

## Platform-specifieke setup

### Shopify

1. In Shopify Admin ga naar: Settings → Apps → Develop apps → Create an app
2. Vereiste API scopes: `read_product_listings`, `read_products`, `write_products`, `read_metaobject_definitions`, `read_metaobjects`, `read_product_feeds`
3. Voor Shopify Markets (meertalig) voeg ook toe: `write_translations`, `read_translations`, `write_markets`, `read_markets`, `read_locales`
4. In Fozzels voer in: API key, API Secret, en uw `.myshopify.com` URL
5. Integration status moet **Authorized: yes** EN **REST API Connected: yes** tonen

### Magento 2

1. In Magento Admin ga naar: System → Integrations → Add Integration
2. Kopieer: Consumer Key, Consumer Secret, Access Token, Access Token Secret
3. Voer ook de `admin_front_name` in (meestal `admin`)
4. **Belangrijk:** Voeg handmatig het `fozzels_completion_date` attribuut toe aan ALLE Attribute Sets in Magento Admin (Catalog → Attributes → Attribute Sets). Fozzels kan dit niet automatisch doen omdat Magento meerdere attribuutsets per winkel ondersteunt.
5. Na opslaan: activeer de integratie → synchroniseer websites/winkels → pull producten

### WooCommerce

- Genereer een REST API-sleutel in WooCommerce → Settings → Advanced → REST API
- Vereiste rechten: Read/Write
- Voer Consumer Key en Consumer Secret in Fozzels in

#### WooCommerce optionele plugin integraties

WooCommerce integraties ondersteunen vier optionele plugin vlaggen. Elk vereist aanvullende WordPress plugins om te worden geïnstalleerd.

**ACF (Advanced Custom Fields)**

- Schakel in met: "Enable ACF (Advanced Custom Fields)" toggle in Fozzels integratie instellingen
- Vereiste WordPress plugins: "Advanced Custom Fields" EN "ACF to REST API"
- Wat het doet: trekt aangepaste productenvelden die in ACF zijn gedefinieerd als attributen in Fozzels (voorvoegsel `acf_`)
- Terugschrijven: ACF waarden worden geschreven via WooCommerce `meta_data` endpoint

**Yoast SEO**

- Schakel in met: "Yoast WooCommerce SEO" toggle in Fozzels integratie instellingen
- Vereiste WordPress plugins: "Yoast SEO" EN "Fozzels SEO Fields REST API for WooCommerce" (bridge plugin, download van app.fozzels.com)
- Wat het doet: trekt Yoast SEO titel, meta beschrijving, en focus trefwoord als attributen (voorvoegsel `yoast_`)
- Terugschrijven: waarden worden geschreven via de `seo_fields` sleutel in WooCommerce REST API

**All in One SEO (AIOSEO)**

- Schakel in met: "All in One SEO" toggle in Fozzels integratie instellingen
- Vereiste WordPress plugins: "All in One SEO" EN "AIOSEO API Sync" (bridge plugin, download van app.fozzels.com)
- Wat het doet: trekt SEO titel, beschrijving, trefwoorden, Open Graph velden, Twitter velden, en focus keyfrase als attributen (voorvoegsel `aioseo_`)
- Terugschrijven: waarden worden geschreven via de `aioseo` sleutel in WooCommerce REST API

**WPML (Meertalig)**

- Schakel in met: "Enable WPML Multilingual Support" toggle in Fozzels integratie instellingen
- Vereiste WordPress plugin: WPML
- Wat het doet: creëert een aparte Fozzels winkel per taal; producten worden per taal opgehaald met de taal-voorvoegsel URL (bijv. `/de/wp-json/wc/v3/products`)
- Na inschakeling: ga naar Integration → Synchronize om de taalwinkels te maken

---

#### WooCommerce verbinding & plugin diagnostiek

Wanneer u de verbinding test of een product pull uitvoert, controleert Fozzels elke ingeschakelde plugin. Hier zijn alle mogelijke fouten en hoe u deze kunt repareren:

**Verbindingsfouten**

| Fout | Betekenis | Oplossing |
|-------|---------|-----|
| WordPress was not found at the provided URL | De URL wijst niet naar een WordPress site | Controleer of de URL correct is en openbaar toegankelijk |
| WooCommerce REST API is not available | WooCommerce niet geïnstalleerd of REST API uitgeschakeld | Installeer WooCommerce en schakel REST API in onder WooCommerce → Settings → Advanced |
| Unable to connect to the store | Netwerk/DNS probleem | Controleer of de URL bereikbaar is via het internet |
| The connection timed out | Winkel is onbereikbaar of firewall blokkeert | Controleer serverfirewall en zorg dat de URL openbaar toegankelijk is |
| Invalid API credentials | Onjuiste Consumer Key of Consumer Secret | Genereer een nieuwe API-sleutel onder WooCommerce → Settings → Advanced → REST API |

**ACF fouten**

| Fout | Betekenis | Oplossing |
|-------|---------|-----|
| Both "Advanced Custom Fields" and "ACF to REST API" plugins are required | Een of beide plugins ontbreken | Installeer en activeer beide plugins in WordPress admin |
| "ACF to REST API" is active but "Advanced Custom Fields" is not installed | ACF bridge geïnstalleerd maar hoofd ACF plugin ontbreekt | Installeer en activeer de "Advanced Custom Fields" plugin |
| Failed to verify ACF plugin status | Kon plugin check endpoint niet bereiken | Controleer WordPress connectiviteit en probeer opnieuw |

**Yoast SEO fouten**

| Fout | Betekenis | Oplossing |
|-------|---------|-----|
| Both "Yoast SEO" and "Yoast SEO WooCommerce REST API by Fozzels" plugins are required | Een of beide plugins ontbreken | Installeer en activeer beide plugins in WordPress admin |
| "Yoast SEO" is active but the "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed | Bridge plugin ontbreekt | Download de bridge plugin van app.fozzels.com en activeer deze |
| Your "Fozzels SEO Fields REST API for WooCommerce" plugin is outdated | Oude versie van de bridge plugin | Download en installeer de nieuwste versie van app.fozzels.com |
| The "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed or not active | Bridge plugin niet gevonden | Download van app.fozzels.com en activeer in WordPress admin |
| Failed to verify Yoast SEO plugin status | Kon plugin check endpoint niet bereiken | Controleer WordPress connectiviteit en probeer opnieuw |

**AIOSEO fouten**

| Fout | Betekenis | Oplossing |
|-------|---------|-----|
| Both "All in One SEO" and "AIOSEO API Sync" plugins are required | Een of beide plugins ontbreken | Installeer en activeer beide plugins in WordPress admin |
| "All in One SEO" is active but the "AIOSEO API Sync" plugin is not installed | Bridge plugin ontbreekt | Download de AIOSEO API Sync plugin van app.fozzels.com en activeer deze |
| Your "AIOSEO API Sync" plugin is outdated | Oude versie van de bridge plugin | Download en installeer de nieuwste versie van app.fozzels.com |
| The "AIOSEO API Sync" plugin is not installed or not active | Bridge plugin niet gevonden | Download van app.fozzels.com en activeer in WordPress admin |
| Failed to verify All in One SEO plugin status | Kon plugin check endpoint niet bereiken | Controleer WordPress connectiviteit en probeer opnieuw |

**WPML fouten**

| Fout | Betekenis | Oplossing |
|-------|---------|-----|
| WPML plugin is not active or not installed | WPML niet gevonden op WordPress | Installeer en activeer de WPML plugin in WordPress admin |
| WPML is active but no languages are configured | WPML geïnstalleerd maar geen talen toegevoegd | Ga naar WPML → Languages en voeg minstens één extra taal toe |

**Conflict fouten**

| Fout | Betekenis | Oplossing |
|-------|---------|-----|
| Both Yoast SEO and All in One SEO are active at the same time | Plugin conflict | Het gebruik van beide tegelijkertijd kan conflicten veroorzaken — schakel één in WordPress admin uit |

**Algemeen**

| Fout | Betekenis | Oplossing |
|-------|---------|-----|
| An unexpected error occurred while connecting | Onbekende fout | Probeer opnieuw; als probleem aanhoudt neem contact op met Fozzels support |

---

## Veelgestelde problemen

**Integratie haalt geen producten op**

- Controleer dat de **Active** toggle AAN is
- Controleer dat websites en winkels zijn geactiveerd
- Trigger een handmatige pull van de integratie pagina

**Attributen verschijnen niet in Catalog filter of Flow prompts**

- Het attribuut moet de **Filterable** vlag hebben — ga naar Integration → Attributes en schakel deze in

**Kan een attribuut niet als Flow output target instellen**

- Het attribuut moet de **Mutable** vlag hebben — ga naar Integration → Attributes en schakel deze in

**Shopify verbindingsproblemen**

- Beide **Authorized** en **REST API Connected** moeten groen zijn
- Controleer dubbel dat alle vereiste API scopes zijn ingeschakeld in uw Shopify aangepaste app

**Magento — `fozzels_completion_date` ontbreekt**

- Dit moet handmatig aan elke Attribute Set in Magento Admin worden toegevoegd
- Ga naar: Catalog → Attributes → Attribute Sets → open elke set → voeg attribuut toe

**Winkelquota overschreden**

- U hebt het maximale aantal actieve winkels op uw plan bereikt
- Deactiveer ongebruikte winkels of upgrade uw plan op [Plans](https://app.fozzels.com/user/settings/plans)

**Producten gemarkeerd als "lost"**

- Producten of winkels zijn verwijderd van het bronplatform
- Verloren items worden in Fozzels bewaard voor referentie maar synchroniseren niet

---

## Integraties beheren

- **Archive** — schakelt de integratie uit en verbergt deze uit de hoofdlijst; gegevens blijven behouden en kunnen worden hersteld
- **Pull progress** — real-time voortgangsbalk met items verwerkt; kan worden gepauzeerd of gestopt
- **Bulk attribute update** — selecteer meerdere attributen en wijzig vlaggen in één keer
- **Auto-detect blank** — vindt automatisch attributen zonder waarden over producten heen
