---
id: '103000367853'
title: 2.2. Volledige integratieinstelling met Magento 2.
sidebar_position: 2
slug: /integration-connectivity/full-integration-setup-with-magento-2
description: In deze handleiding wordt gedetailleerd het proces beschreven van het tot stand brengen van een beveiligde tweerichtingsverbinding tussen uw Magento 2-winkel en Fozzels. U zult de benodigde API
---

In deze handleiding wordt gedetailleerd het proces beschreven van het tot stand brengen van een beveiligde tweerichtingsverbinding tussen uw Magento 2-winkel en Fozzels. U zult de benodigde API-tokens genereren en machtigingen configureren, waardoor naadloze productgegevenimport en content-export wordt gegarandeerd.

De Magento 2-integratie vereist het maken van een speciale nieuwe integratie in het Magento-beheervenster om vier essentiële sleutels te genereren: **Consumentensleutel**, **Consumentengeheim**, **Toegangstoken** en **Geheim toegangstoken**. We zullen ook het vereiste attribuut `fozzels_completion_date` configureren voor het volgen van inhoudsynchronisatie.

## Deel 1: Magento 2-instellingen (integratie en tokens maken)

U moet een nieuwe integratie maken en specifieke machtigingen in uw Magento-beheervenster definiëren.

### Stap 1: Maak een nieuwe integratie

1.  **Meld u aan** bij uw Magento-beheervenster.

2.  **Ga** naar **Systeem** / **Integraties**.

3.  **Klik** op de knop **"Nieuwe integratie toevoegen"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gr4UpPbx41G2Oy6OOEdyCKol_ENow66ITg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/N7zrOrdp8o6CvLgUlZhpQuMcQs5r7OVmWw.png)

### Stap 2: Integratieinformatie invullen

1.  **Ga** naar het tabblad **Integratieinformatie** (Basisinstellingen).

2.  **Vul** de vereiste velden in:
    2.1. **Voer** naam in: Fozzels.
    2.2. **Voer** e-mail in: info@fozzels.com.
    2.3. **Voer** uw Magento-beheerderswachtwoord in ter bevestiging.

3.  **Sla** optionele velden over (Callback-URL, URL voor identiteitskoppeling).

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/EM4ivAqLXVniXYWdiyAMElpusFWgWjUgvQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/6vzO74ehADcyuIaahKWVOQtYVvHWVkD_vg.png)

### Stap 3: Configureer API-machtigingen (Scopes)

1.  **Klik** op het tabblad **"API"**.

2.  Selecteer in het vervolgkeuzemenu **"Aangepast"**.

3.  **Vink** alleen deze selectievakjes aan (voor lees-/schrijftoegang):
    3.1. **Catalogus**: Categorieën, Voorraden, Producten, Attributen bijwerken, Productontwerp bewerken.
    3.2. **Winkels**: Instellingen, Alle winkels.
    3.3. **Attributen**: Product, Attribuutset.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/QphCzWE1SkWWnk3rdvVZReWcdPfHny5hsQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/TXQWFfKyYyQlNwHODT_3OsVgEHngoyaPXg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/j3iFU0HffLd73Kzc_rQEt62o2oTsVpxF2g.png)

### Stap 4: Sla de integratie op en activeer deze

1.  **Klik** op de knop **"Opslaan"** in de rechterbovenhoek.

2. Zoek op de pagina Integratielijst **de nieuwe Fozzels-integratie**.

3.  **Klik** op de link **"Activeren"**.

4.  Controleer op de pagina Activeringsdetails **of de juiste API's (uit stap 3) zijn geselecteerd en klik** **"Toestaan"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/_C1d9Jr1A4136F6oEoNWIM2R2fnU0SwdvA.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/cBnv6FpiV0647eqHlNbNHIyCXcA_kHEx5A.png)

### Stap 5: Kopieer en sla de API-sleutels op

1.  Na het klikken op "Toestaan" wordt u **omgeleid** naar de pagina "Integratietokens voor extensies".

2.  **Kopieer** en **sla alle vier automatisch ingevulde waarden veilig op:**
    2.1. Consumentensleutel
    2.2. Consumentengeheim
    2.3. Toegangstoken
    2.4. Geheim toegangstoken

3.  **Klik** **"Gereed"**.

4.  **Controleer** of **bewerk** integratiedetails later door op **de knop "Bewerken"** op de pagina Integraties **te klikken**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/NOrDSAhjlO7hXjU2J1fafMmXfcMy-Lypwg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/Pj-HIMnlhJNvqDzEYmDckrL3xvLalFhsfw.png)

##

## Deel 3: Fozzels-activering en datasynchronisatie

### Stap 6: Controleer API-toegang

Voordat u Fozzels verbindt, zorg ervoor dat uw server:

**1\. Blokkeert geen externe verzoeken naar de Magento REST API.**

Als uw server een firewall, WAF of beveiligingsservice (Cloudflare, Sucuri, enz.) geconfigureerd — deze kunnen binnenkomende verzoeken van Fozzels naar uw winkel blokkeren.

### Wat te doen:

1.  Vraag de huidige lijst met Fozzels IP-adressen aan bij **[support@fozzels.com](mailto:support@fozzels.com)**.
    Voor whitelisting kunt u het Fozzels IP-adres gebruiken:
**49.13.117.118**

2.  Zet deze lijst door naar uw hostingprovider of serverbeheerder om deze aan de whitelist toe te voegen.

Als dit niet wordt gedaan — ontvangt u een **401 (Onbevoegd)**-fout bij het maken van de integratie in Fozzels en kunt u de verbinding niet tot stand brengen.

**2\. Beperkt het aantal API-verzoeken van user agent niet: f**ozzels** .**
De volledige user-agent is Mozilla/5.0 (Windows NT 10.0; Win64; x64; fozzels/5.1.2; +[https://app.fozzels.com/](https://app.fozzels.com/)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36

Tijdens synchronisatie verzendt Fozzels een groot aantal verzoeken, vooral met grote productcatalogussen. Als uw server strikte limieten heeft voor het aantal verzoeken per minuut of seconde (rate limiting) — sommige daarvan worden geweigerd.

### Wat te doen:

1.  Neem contact op met uw hostingprovider of serverbeheerder.
2.  Vraag hen om de API-verzoeklimiet te verhogen of om Fozzels IP-adressen en/of de Fozzels User Agent uit te sluiten van snelheidsbeperking.

Als dit niet wordt gedaan — ontvangt u een **429 (Te veel verzoeken)**-fout tijdens het ophalen van producten en zal de productsynchronisatie niet worden voltooid.

Ga na bevestiging van de wijzigingen over tot het maken van de integratie in Fozzels.

### Stap 8: Maak een nieuwe integratie in Fozzels

1.  **Meld u aan** bij uw Fozzels-account.

2.  **Ga** naar **Integraties**.

3.  **Klik** **"Nieuwe integratie maken"**.

4.  **Kies** **"Magento"** uit de beschikbare opties.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/M9c13tHfbMEfpo7QsFt_Q6DvUljm-1jM1Q.png)![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/UvSS02f-tz_5sjBViKw7tq0kWJRti5mSvA.png)

####

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/RrDkikq2qamOno3s8JmMIrJfno5S5gpIew.png)

####

### Stap 9: Vul verbindingsdetails in

U gebruikt de sleutels uit Deel 1 om Fozzels te verbinden en het gegevensinvoer in te starten.

1.  **Geef** uw integratie een duidelijke naam.

2.  **Voer** de **URL** naar uw Magento-website in.

3.  **Vul** de vier sleutels die in **Stap 5** zijn gekopieerd in de corresponderende velden in.

4.  **Klik** **"Opslaan"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/o_z4KRc-z_zOvcPpPvDV5evmBRJNZO-4vQ.png)

### Stap 10: Activeer en synchroniseer winkels

1.  **Zet** de schakelaar **'Actief'** in de rechterbovenhoek **aan**. _Zonder dit werkt de verbinding niet._

2.  **Ga** naar het tabblad **"Websites en winkels"**.

3.  **Klik** op de knop **"Websites en winkels ophalen"**. Uw websites en winkels zouden nu moeten verschijnen.

4.  **Controleer** of de integratie de volgende statussen heeft: **Geautoriseerd: ja** en **REST API verbonden: ja**.

5.  **Schakel** de huidige websites en winkels in met behulp van de **schakelaar** voor verder werk.

_![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/FvECiFfTlviQFFK2fJ8FF2Uoa9iBogloGg.png)_
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/d3dKR2OUZS7d-iiP2ptuZXFlu9JQKqz93A.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gjRG-nmFAybUytQo_B_QzBZew6ZY5FygNQ.png)

####

### Stap 11: Trek producten op en controleer

1.  **Klik** op de knop **"Pull Products"** om het process van het importeren van uw productcatalogus te starten.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/s372RDIQcyC9gZU1pE-mNmKjoV3tHwE2XQ.png)

2.  **Wacht** tot de producten zijn geladen (de voortgang wordt weergegeven in de voortgangsbalk).

3.  **Ga** naar het tabblad **"Attributen"** om uw synchronisatieregels in te stellen.

4.  **Lees** meer over het werken met productattributen en het aanpassen van gegevensvelden [hier](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).

[](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/)
