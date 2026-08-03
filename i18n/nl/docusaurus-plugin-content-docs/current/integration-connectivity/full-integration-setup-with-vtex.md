---
id: '103000408453'
title: 2.8.2 Volledige integratieinstelling met VTEX
sidebar_position: 19
slug: /integration-connectivity/full-integration-setup-with-vtex
description: 'Deze handleiding biedt stapsgewijze instructies voor het integreren van uw VTEX-winkelfront met Fozzels. Het proces omvat twee belangrijke stadia: genereren van de vereiste'
---

Deze handleiding biedt stapsgewijze instructies voor het integreren van uw **VTEX**-winkelfront met **Fozzels**. Het proces omvat twee belangrijke stadia: genereren van de vereiste API-sleutels in uw VTEX Admin-venster en het voltooien van de instellingen in Fozzels.

## Deel 1. Instellingen aan de VTEX-zijde

Om Fozzels in staat te stellen uw catalogusstructuur te lezen en gegenereerde inhoud terug naar uw winkel te schrijven, moet u een speciale rol met specifieke machtigingen maken en een **Application Key** en **Application Token** genereren.

### Stap 1. Maak een rol met vereiste machtigingen

1.  Meld u aan bij uw **VTEX Admin**-venster.

2.  Navigeer naar **Account Settings** → **User Management** → **Roles**.

3.  Klik **New Role**.

4.  Wijs een duidelijke naam toe aan de rol (bijv. `Fozzels Integration`).

5.  Voeg onder de lijst met machtigingen toegang toe voor de volgende bronnen:

-   **Catalogus (License Manager):**

-   `Category` — Lezen / Schrijven

-   `Brand` — Lezen / Schrijven

-   `Product` — Lezen / Schrijven

-   `SKU` — Lezen / Schrijven

-   `Specification / Attributes` — Lezen / Schrijven

-   **CMS (indien gebruikt voor media/afbeeldingen):**

-   `Read` / `Write` toegang

6.  Sla de nieuwe rol op.

### Stap 2. Genereer Application Key en Application Token

1.  Navigeer in het menu **Account Settings** naar **Account Management** → **Application Keys**.

2.  Klik **Manage Keys** of **Generate Key**.

3.  Voer een herkenbare label in (bijv. `Fozzels Connector`).

4.  Wijs de rol toe die u in Stap 1 hebt gemaakt (`Fozzels Integration`) aan deze sleutel.

5.  Het systeem genereert twee gegevens:

-   **Application Key** (blijft zichtbaar in uw lijst).

-   **Application Token** (weergegeven **slechts eenmaal** bij aanmaak).

6.  **Belangrijk:** Kopieer en sla de **Application Token** onmiddellijk op een veilige plaats op. Zodra u het modale venster sluit, kan het niet meer worden opgehaald!

Gebruikers kunnen ook verwijzen naar de officiële VTEX Knowledge Base voor gedetailleerde instructies over het maken van Application Keys en Tokens:

-   Portugees: [https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave](https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave)
-   Engels: [https://help.vtex.com/docs/tutorials/generated-keys](https://help.vtex.com/docs/tutorials/generated-keys)
-   Spaans: [https://help.vtex.com/es/docs/tutorials/claves-generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas)

##
Deel 2. Instellingen aan de Fozzels-zijde

Zodra uw API-gegevens gereed zijn, stelt u de verbinding in Fozzels in.

### Stap 1. Maak een nieuwe integratie

1.  Meld u aan bij **Fozzels** en open **Integraties** in het bovenste navigatiemenu.

2.  Klik op de groene knop **\+ Maken**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/gr4ewlKqt8412XMEVryYBDav3OrTYjV3cA.png)

3.  Selecteer **VTEX** uit de lijst met beschikbare integratiePlatforms.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/XhEgu0COlAJDugphXl_XiaSkCKfS7TXueg.png)

### Stap 2. Voer configuratiedetails in (Tabblad 1: Configuratie)

Vul het verbindingsformulier in:

-   **Naam:** Voer een naam voor deze integratie in (bijv. `VTEX Main Store`).

-   **URL:** Voer uw VTEX store URL/domein in.

-   **Application Key:** Plak de Application Key gegenereerd in VTEX.

-   **Application Token:** Plak de Application Token gegenereerd in VTEX.

-   **Omgeving** _(optioneel)_: Standaard ingesteld op `vtexcommercestable`. Wijzig dit alleen als VTEX u heeft opgedragen een aangepaste omgeving te gebruiken.

-   **Vertaallocales** _(optioneel)_: Voor grensoverschrijdende accounts, geeft u door komma's gescheiden VTEX-locales op (bijv. `es-AR, en-US`). Laat leeg voor eentalige winkels.

-   **Global Pull Schedule** _(optioneel)_: Stel een aangepast geautomatiseerd pull-schema in of laat standaardinstellingen staan.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pWrF-JFfW_Q5FelNCSz3IuA9l86yXEdItw.png)

-   **Pull Throttling / API Delays** _(optioneel)_:

-   **Delay between pages:** Stel een pauzeduur in na elke opgehaalde pagina met resultaten tijdens een pull (`100–15,000 ms`). Laat leeg om het platformstandaard te gebruiken.

-   **Delay between requests:** Stel een pauzeduur in tussen afzonderlijke API-oproepen tijdens een pull (`100–15,000 ms`). Laat leeg om het platformstandaard te gebruiken.

-   ⚠️ **Opmerking:** Het instellen van deze waarden onder de platformstandaarden kan snelheidsbeperking van VTEX activeren en kan ertoe leiden dat cataloguspulls mislukken.

Klik **Opslaan** in de linkeronderhoek.

### Stap 3. Controleer de status en haal winkels op (Tabblad 2: Websites en winkels)

1.  Controleer of alle statusindicatoren in de rechterbovenhoek actief zijn:

-   **Actief** — Ingeschakeld (groene schakelaar).

-   **Geautoriseerd** — Groen vinkje.

    -   **REST API verbonden** — Groen vinkje.
        ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/RnG46ot4A8YtvTAhatBAQIynkoXI8pbdJQ.png)

2.  Klik op de knop **PULL WEBSITES AND STORES** in de linkeronderhoek.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pywm-NKYAWTD0xkGPKQYZPH5WI5LKQCwIw.png)

3.  Uw websites en winkellocales verschijnen in de tabel. Zet de **Statusschakelaars** aan voor de websites en winkels die u wilt verwerken.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/Nv3b_PjszS4fHUfa_V2atIDZe_Sx838pAA.png)

### Stap 4. Trek catalogusgegevens op (Trek producten op)

1.  Zoek uw winkel in de tabel en klik **Pull products** (of klik op de vervolgkeuzepijl ernaast).

2.  U kunt gegevenssynchronisatie voor specifieke entiteiten activeren of deze opeenvolgend uitvoeren:

-   **Product Attribute**

-   **Category Attribute**

-   **Brand Attribute**

-   **Category**

-   **Brand**

    -   **Product**
**![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/A-WrFZksz5q1Ml-MXGaobf-Sn_rKBjsNEA.png)**

3.  Wacht tot de synchronisatie is voltooid. De status van elke entiteit wordt groen en toont **100%**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/NamLSz4d9IyB6p3k94ULepvi0njfq465sQ.png)

4.  Klik op het oogpictogram (**Weergave**) naast elk entiteitsblok om de opgehaalde gegevens te controleren.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/e6KLPc8LFKplzkHemoeoNUVVG1SLMjnF7w.png)

Gefeliciteerd! Uw **VTEX**-integratie is nu volledig ingesteld en klaar voor gebruik. Fozzels zal nu naadloos uw catalogusgegevens synchroniseren, zodat u eenvoudig AI-productbeschrijvingen, gelokaliseerde inhoud en metagegevens van hoge kwaliteit kunt genereren. Als u later aanpassingen moet aanbrengen, kunt u altijd terugkeren naar de pagina Integratie-instellingen.

Veel plezier met automatiseren!
