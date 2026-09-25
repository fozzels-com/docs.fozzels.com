---
id: '103000385597'
title: 2.3.2. Shopify-winkels verbinden met Fozzels via het Shopify Dev Dashboard
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  Sinds 1 januari 2026 worden Shopify-winkels verbonden via het Shopify Dev
  Dashboard. Zo maakt en installeert u de app in Shopify en verbindt u deze
  stap voor stap in Fozzels.
---

Sinds 1 januari 2026 kunt u in Shopify geen Private Apps meer aanmaken in de winkelbeheeromgeving. Nieuwe verbindingen en updates van bestaande integraties worden ingesteld via het Shopify Dev Dashboard. Deze handleiding leidt u door beide kanten: het aanmaken en installeren van de app in Shopify (deel 1) en het verbinden ervan in Fozzels (deel 2).

## Voordat u begint: zoek uw .myshopify.com-domein

Fozzels heeft het .myshopify.com-adres van uw winkel nodig, niet het openbare domein van uw winkel (zoals www.yourbrand.com). Dit adres is toegewezen bij het aanmaken van de winkel en kan niet worden gewijzigd, dus het kan afwijken van uw merknaam.

U vindt het op drie plaatsen in de Shopify-beheeromgeving:

1. **Zijbalk van Settings:** open **Settings**. Uw .myshopify.com-domein staat onder de winkelnaam bovenaan de zijbalk.
2. **Settings → Domains:** de pagina Domains toont al uw domeinen. Gebruik het domein dat eindigt op .myshopify.com, ook als het niet als **Primary** is gemarkeerd.
3. **Adresbalk van de browser:** in de beheeromgeving ziet de URL eruit als `https://admin.shopify.com/store/your-store`. Neem het deel na `/store/` en voeg `.myshopify.com` toe: `your-store.myshopify.com`.

![Settings → Domains: het .myshopify.com-domein in de zijbalk en in de lijst](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/01-settings-domains-myshopify-domain.png)

U gebruikt dit domein in twee notaties:

| Waar | Notatie |
| --- | --- |
| App URL (Shopify), URL (Fozzels) | `https://your-store.myshopify.com` |
| Store domain (Shopify-distributie), App Host Name (Fozzels) | `your-store.myshopify.com` |

## Deel 1. Shopify: de app aanmaken

### 1. Maak de app aan

1. Log in op het Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Open **Apps** in de linkerzijbalk en klik rechtsboven op **Create app**. Afhankelijk van uw accounttype kan de interface er iets anders uitzien. Ziet u de knop niet, scrol dan naar de onderkant van de pagina en klik op de link **Create app**.
3. Voer onder **Start from Dev Dashboard** (de optie aan de rechterkant) een appnaam in, bijvoorbeeld `Fozzels_APP`, en klik op **Create app**. Met deze optie krijgt u API-gegevens zonder de opdrachtregel te gebruiken.

![Dev Dashboard: Apps en Create app](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/02-dev-dashboard-apps-create-app.png)

![Een app aanmaken: Start from Dev Dashboard](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/03-start-from-dev-dashboard.png)

### 2. Configureer de versie

Nadat u de app hebt aangemaakt, komt u op de pagina **Create version**. Shopify heeft al een eerste versie aangemaakt (bijvoorbeeld `fozzels_app-1`). Uw instellingen worden uitgebracht als een nieuwe versie die daarop is gebaseerd.

1. **App name:** behoud de naam of wijzig deze.
2. **App URL:** voer de URL van uw winkel in met https, bijvoorbeeld `https://your-store.myshopify.com`.
3. **Embed app in Shopify admin:** moet zijn ingeschakeld. Hiermee wordt de Fozzels-interface in uw Shopify-beheeromgeving weergegeven.
4. **Webhooks API version:** selecteer de nieuwste stabiele versie die wordt aangeboden.

![Create version: App URL, Embed app in Shopify admin, Webhooks API version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/04-create-version-app-url-and-embed.png)

### 3. Voeg de scopes toe

Scrol omlaag naar de sectie **Access**. Plak de onderstaande lijst in het veld **Scopes**, of klik op **Select scopes** en zoek elke machtiging op met de zoekbalk.

Vereiste scopes, klaar om te kopiëren en plakken:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

| Groep | Scopes |
| --- | --- |
| Producten | `read_product_listings`, `read_products`, `write_products`, `read_product_feeds` |
| Metadata | `read_metaobject_definitions`, `read_metaobjects` |
| Vertalingen | `read_translations`, `write_translations`, `read_publications` |
| Locales | `read_locales` |
| Markets | `read_markets`, `write_markets` |

Deze scopes zijn vereist voor alle winkeltypen, inclusief winkels die Shopify Markets en meerdere talen gebruiken.

**Wilt u gewichtsgegevens synchroniseren?** Voeg dan nu ook `read_inventory` en `write_inventory` toe. Ze zijn alleen nodig voor de optionele instelling Inventory in Fozzels (stap 10), maar door ze nu toe te voegen hoeft u later geen nieuwe appversie aan te maken. Volledige lijst inclusief inventory:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications,read_inventory,write_inventory
```

Laat de rest van de sectie ongewijzigd:

- **Optional scopes:** leeg laten.
- **Use legacy install flow:** niet aanvinken.
- **Allowed redirection URL(s):** leeg laten.

De melding "Some scopes require Shopify permission" is niet van toepassing op de scopes die Fozzels nodig heeft, dus u hoeft geen toegang aan te vragen.

![Access: alle 12 vereiste scopes](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/05-access-required-scopes.png)

### 4. Breng de versie uit

1. Klik op **Release**. De knop staat zowel rechtsboven als onderaan de pagina.
2. Voer in de pop-up optioneel een **Version name** (bijvoorbeeld `v1`) en een **Version message** in. Als u de naam leeg laat, genereert Shopify er een.
3. Klik op **Release** om te bevestigen.

De nieuwe versie verschijnt op de pagina **Versions** met de status **Active**.

![Pop-up Release this new version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/06-release-new-version-pop-up.png)

![Versions: v1 Active](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/07-versions-v1-active.png)

### 5. Installeer de app in uw winkel

De installatiestappen hangen af van uw type Shopify-account. Open eerst de pagina **Overview** van uw app door in de linkerzijbalk op de appnaam te klikken.

![App Overview: Installs en Distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/08-app-overview-installs-and-distribution.png)

#### Optie A: één winkel (geen Partner-account)

1. Klik in het blok **Installs** op **Install app**.
2. Log desgevraagd in met het **e-mailadres van de winkeleigenaar**. Alleen de winkeleigenaar kan de installatie goedkeuren.
3. Controleer op de pagina **Install app** in uw winkelbeheeromgeving de lijst met toegangsrechten en klik op **Install**.

U hoeft geen distributie te configureren. Ga verder met stap 6.

#### Optie B: een Partner-account of meerdere winkels

U stelt eerst **Custom distribution** in om een installatielink voor één specifieke winkel te genereren.

1. Klik in het blok **Distribution** op **Select distribution method**. Hiermee opent u de app in **Shopify Partners**, een aparte interface.
2. Selecteer **Custom distribution** en klik op **Select**.
3. Bevestig met **Select custom distribution**.

> **Waarschuwing:** de keuze voor Custom distribution kan niet ongedaan worden gemaakt. De app kan daarna alleen op één winkel of binnen één Plus-organisatie worden geïnstalleerd.

![Shopify Partners: distributiemethoden](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/09-partners-distribution-methods.png)

![Custom distribution geselecteerd](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/10-custom-distribution-selected.png)

![Bevestiging Select custom distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/11-select-custom-distribution-confirmation.png)

4. Voer bij **Store domain** uw winkeldomein in de notatie `your-store.myshopify.com` in.
5. Laat **Allow multi-store install for one Plus organization** uitgevinkt.
6. Klik op **Generate link** en bevestig.

> **Waarschuwing:** ook deze bevestiging kan niet ongedaan worden gemaakt. De app kan dan alleen worden geïnstalleerd op de winkel die u hebt ingevoerd.

![Custom distribution: Store domain](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/12-custom-distribution-store-domain.png)

![Bevestiging Generate link for single store install](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/13-generate-link-confirmation.png)

7. Shopify toont de **Install link**. Klik op **Copy**.
8. Open de link in een browser waarin u bent ingelogd op de winkelbeheeromgeving, of stuur hem naar de winkeleigenaar. Dit is handig voor bureaus: de winkeleigenaar kan de installatie dan zelf voltooien.
9. Controleer op de pagina **Install app** of u **This app is exclusive to your store** ziet, bekijk de lijst met toegangsrechten en klik op **Install**.

![Install link met Copy](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/14-install-link-copy.png)

![Pagina Install app in de winkelbeheeromgeving](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/15-install-app-in-store-admin.png)

De tekst onder "This app is exclusive to your store" hangt af van het winkeltype en kan afwijken van de schermafbeelding. De lijst met toegangsrechten moet **Products, custom data, other data** bevatten. Ziet u alleen Products, dan ontbreken er scopes: ga terug naar stap 3.

Na de installatie verschijnt de app onder **Apps** in de zijbalk van uw winkelbeheeromgeving.

### 6. Kopieer de API-gegevens

1. Open in het Dev Dashboard **App settings** in de linkerzijbalk van uw app.
2. Kopieer in het blok **Credentials** de **Client ID**.
3. Klik op het oogpictogram naast **Secret** om het zichtbaar te maken en kopieer het.

U plakt deze gegevens in stap 8 in Fozzels.

![App settings: Credentials](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/16-app-settings-credentials.png)

> **Waarschuwing:** klik niet op **Rotate** tenzij het nodig is. Hiermee wordt een nieuw Secret gegenereerd en werkt het oude direct niet meer, waardoor uw Fozzels-verbinding verbroken wordt totdat u het Secret in Fozzels bijwerkt.

Bewaar de gegevens veilig, bijvoorbeeld in een wachtwoordmanager. Verstuur ze niet per e-mail of chat: het Secret geeft toegang tot de producten en vertalingen van uw winkel.

## Deel 2. Fozzels: de winkel verbinden

### 7. Maak de integratie aan

1. Log in bij Fozzels op [https://app.fozzels.com](https://app.fozzels.com) en open **Integrations** in de linkerzijbalk.
2. Selecteer op het scherm **Choose your integration** de optie **Shopify**.
3. Vul bij de stap **Configuration** het volgende in:
    - **Name:** een naam waaraan u de integratie herkent.
    - **URL:** het .myshopify.com-adres van uw winkel met https, bijvoorbeeld `https://your-store.myshopify.com`. Gebruik niet uw eigen domein.
4. Kies onder **Connection Method** de optie **Custom App**.

![Fozzels: Choose your integration](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/17-fozzels-choose-your-integration.png)

![Create New Integration: Configuration en Custom App](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/18-fozzels-configuration-custom-app.png)

De andere verbindingsmethoden: **Fozzels Shopify App (OAuth)** maakt verbinding via de officiële Fozzels-app, zonder dat u een eigen app hoeft aan te maken (zie [2.3.1. Fozzels Shopify App — Aan de slag](/integration-connectivity/fozzels-shopify-app-getting-started)). **Legacy (Manual)** is bedoeld voor verbindingen die op de oude manier zijn ingesteld.

### 8. Voer de API-gegevens in

| Fozzels-veld | Wat u invoert |
| --- | --- |
| Api Key | Client ID uit stap 6 |
| Api Secret | Secret uit stap 6 |
| App Host Name | `your-store.myshopify.com`, zonder https |

U hebt geen access token nodig: Fozzels genereert dat automatisch.

### 9. Kies de Markets-modus

De Markets-modus bepaalt hoe content wordt verdeeld over uw Shopify-markten en -talen. Kies zorgvuldig: later wijzigen is geen eenvoudige omschakeling (zie [Moet u de Markets-modus later wijzigen?](#need-to-change-the-markets-mode-later) aan het einde van deze handleiding).

**Route 1: vertalingen.** U hebt dezelfde content nodig voor alle markten met dezelfde taal, vertaald in elke gepubliceerde taal. Kies **Per language**, of **No markets** voor de eenvoudigste opzet met één website.

**Route 2: unieke content per markt en taal.** U hebt voor elke markt andere content nodig, ook binnen dezelfde taal, bijvoorbeeld andere marketingaccenten per regio. Kies **Per market**.

| Modus | Wat wordt een website | Wat wordt gesynchroniseerd |
| --- | --- | --- |
| No markets | Eén website, met een store per gepubliceerde taal | Eén vertaling per taal, markten worden genegeerd |
| Per market | Elke Shopify-markt, met een store per taal | Elk paar van markt en taal afzonderlijk |
| Per language | Elke gepubliceerde taal | Eén vertaling per taal, Shopify past deze toe op alle markten met die taal |

Gebruikt u LangShop? Dat werkt alleen met **No markets** en **Per language**.

![API-gegevens en Markets-modus](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/19-fozzels-api-credentials-and-markets-mode.png)

### 10. Optionele instellingen

Weet u niet zeker of u deze instellingen nodig hebt, laat dan de standaardwaarden staan.

**Inventory.** Schakel deze optie in om de gewichtsgegevens van de eerste productvariant te synchroniseren. Fozzels haalt dan twee extra attributen op, **Weight** en **Weight Unit** (beide van het type select), en kan deze terugsturen naar Shopify.

> **Waarschuwing:** Inventory vereist de scopes `read_inventory` en `write_inventory`. Hebt u deze in stap 3 niet toegevoegd, maak dan een nieuwe appversie met deze scopes aan, breng die uit en installeer de app opnieuw voordat u Inventory inschakelt. Staat de optie aan zonder deze scopes, dan kan Fozzels helemaal geen producten lezen.

**Global Pull Schedule.** Standaard haalt Fozzels om 02:30 de producten op voor alle actieve stores van de integratie. Wilt u een ander tijdstip instellen voor de hele integratie, schakel dan **Overwrite Global Pull Schedule** in en kies het tijdstip. Een specifieke store kan een eigen schema hebben in de instellingen van die store. Lees meer in [3.1.2 Global Pull Schedule en API-throttling configureren](/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling).

**Delay between pages en Delay between requests.** Gebruik deze alleen als het ophalen mislukt door rate limits van de Shopify API. Laat ze leeg om de standaardwaarden van het platform te gebruiken.

| Veld | Wat het doet | Bereik | Standaard voor Shopify |
| --- | --- | --- | --- |
| Delay between pages | Pauze na elke pagina met resultaten | 100–15000 ms | 2000 ms |
| Delay between requests | Pauze tussen afzonderlijke API-verzoeken | 100–15000 ms | geen |

Waarden onder de standaardwaarden kunnen rate limiting veroorzaken, waardoor het ophalen mislukt.

![Opties: Inventory, Global Pull Schedule, vertragingen en Save](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/20-fozzels-optional-settings.png)

### 11. Opslaan

Klik onderaan de pagina op **Save**.

### 12. Activeer de integratie en haal websites en stores op

Nadat u op **Save** hebt geklikt, toont Fozzels "Integration was created successfully" en opent de stap **Websites & Stores**. Het statuspaneel rechtsboven toont **Active** uit, **Authorized** rood en **REST API Connected** met een waarschuwing. Dat is in deze fase normaal.

1. Zet rechtsboven de schakelaar **Active** aan. Fozzels autoriseert bij Shopify en genereert het access token.
2. Klik op **Pull Websites and Stores**.

**Authorized** en **REST API Connected** zouden nu groen moeten worden.

![Na Save: statuspaneel en Pull Websites and Stores](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/21-fozzels-status-after-save.png)

Blijft **Authorized** rood, controleer dan of de app in uw winkel is geïnstalleerd (stap 5), of Api Key en Api Secret overeenkomen met de Client ID en het Secret, en of App Host Name uw .myshopify.com-hostnaam zonder https is.

### 13. Activeer websites en stores

De tabel toont nu uw websites en hun stores. De structuur hangt af van de Markets-modus uit stap 9. In de modus **Per language** is elke gepubliceerde taal een aparte website met één store.

Een ster naast een website markeert de standaardwebsite. Een ster naast een store markeert de standaardstore van die website.

Zet voor elke website waarmee u wilt werken **beide** schakelaars aan: **Status** in de sectie Websites en **Status** in de sectie Stores. **Pull products** wordt pas beschikbaar als beide aan staan.

![Tabel Websites & Stores na het ophalen](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/22-fozzels-websites-and-stores-table.png)

### 14. Haal producten op

1. Klik op **Pull products** in de rij van een actieve store. Fozzels start vier pulls tegelijk: **Product Attribute**, **Category Attribute**, **Category** en **Product**.
2. Klik op de pijl naast de voortgangsbalk om elke pull te volgen.
3. Wanneer alle vier voortgangsbalken groen zijn en op 100% staan, is het ophalen voltooid. De kolom **Products** toont het aantal opgehaalde producten.

![Voortgang: vier pulls op 100%](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/23-fozzels-pull-progress.png)

**Uw Shopify-verbinding is klaar.** U kunt nu flows gaan bouwen en uw eerste content genereren.

Na de eerste pull worden **Product Pull Conditions** beschikbaar in de stap Websites & Stores. Hiermee filtert u welke producten worden geïmporteerd. Dit wordt in een apart artikel behandeld.

## Moet u de Markets-modus later wijzigen? {#need-to-change-the-markets-mode-later}

Het wijzigen van de Markets-modus, in welke richting ook, verwijdert de oude websites en stores niet. Ze blijven als inactief in de tabel Websites & Stores staan, gemarkeerd met "Website is lost on integration", naast de nieuwe, die automatisch worden aangemaakt en geactiveerd. Flows die aan de oude stores zijn gekoppeld, worden niet meer uitgevoerd.

![Na overschakelen van Per language naar Per market: oude websites inactief naast de nieuwe](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/24-old-websites-lost-after-mode-switch.png)

- **Nog geen flows aangemaakt:** begin opnieuw voor een schone tabel. Deactiveer de huidige integratie, archiveer deze en maak een nieuwe integratie aan met dezelfde Api Key, Api Secret en App Host Name, waarbij u de juiste Markets-modus kiest. U hebt geen nieuwe app in Shopify nodig.
- **Flows al aangemaakt:** neem contact op met de support van Fozzels voordat u de modus wijzigt. Wij helpen u om over te schakelen zonder uw werk te verliezen.

Omdat de locale-code aan de kant van Shopify kan veranderen, raden we in alle gevallen aan de modus via de support van Fozzels te laten wijzigen.

Gaat u specifiek van Per market naar Per language? Zie [2.3.4. Een Shopify-integratie migreren van Per market naar Per language](/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language).
