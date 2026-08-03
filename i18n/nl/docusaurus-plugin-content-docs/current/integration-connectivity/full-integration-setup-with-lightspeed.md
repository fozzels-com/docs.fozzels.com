---
id: '103000367856'
title: 2.6. Volledige integratieinstelling met Lightspeed.
sidebar_position: 16
slug: /integration-connectivity/full-integration-setup-with-lightspeed
description: In deze handleiding wordt gedetailleerd beschreven hoe u een beveiligde tweerichtings-API-verbinding tussen uw Lightspeed eCom-winkel en Fozzels tot stand brengt door de vereiste API-sleutel en
---

In deze handleiding wordt gedetailleerd beschreven hoe u een beveiligde tweerichtings-API-verbinding tussen uw Lightspeed eCom-winkel en Fozzels tot stand brengt door de vereiste API-sleutel en API-geheim in Lightspeed Manager te genereren.
De Lightspeed-integratie vereist het maken van een speciale nieuwe API-sleutel en het instellen van specifieke Lees- en Schrijfmachtigingen (Scopes) om Fozzels in staat te stellen veilig productgegevens op te halen en gegenereerde AI-inhoud terug naar uw catalogus te pushen.

### Deel 1: Lightspeed-instellingen (API-gegevens genereren)

U moet toegang tot uw Lightspeed-account om het benodigde API-sleutelpaar te maken en te activeren.

#### **Stap 1: Aanmelden en navigeren naar API-instellingen**

1.  **Open** een browser en **meld u aan** bij het Lightspeed eCom-backoffice (Lightspeed Retail Manager) met behulp van uw beheerdersgegevens.

2.  Ga in het hoofdmenu van Lightspeed naar het gedeelte "Instellingen".

3.  **Zoek** en **selecteer** "API-sleutels" of "Ontwikkelaars".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/MZv-XXhmVP6BJaa1Bodx1omwsE79Sz8QMg.png)

####
**Stap 2: Maak een nieuwe API-sleutel**

1.  **Klik** op de knop "API-sleutel toevoegen" of "Nieuwe sleutel".

2.  **Geef** de integratie een duidelijke naam (bijv. Fozzels-integratie).

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/C88N5mBpcnAN8OkGn8_qwt9UDUb2JF1Z9w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/AzUkWXCCt69kJBjU9LTQpJgW0iLlNd56yw.png)

####

####
**Stap 3: Machtigingen instellen (Scopes)**

De instellingenpagina voor de nieuwe verbinding wordt automatisch geopend. U **moet** de benodigde machtigingen voor Fozzels selecteren.
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/CioSxLGTyO3ZE1aF8NeArPcp8qx-oz22mw.png)

1.  **Zorg** ervoor dat lees- en schrijfmachtigingen worden verleend voor de volgende secties:
    -   Inhoud → lezen en schrijven

-   Producten → lezen en schrijven

-   Instellingen → lezen en schrijven

Opmerking: Het verlenen van "Schrijf"-toegang stelt Fozzels in staat om gegevens in uw Lightspeed-winkel bij te werken, waardoor tweerichtingssynchronisatie wordt gegarandeerd.)

####
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/qQg2365EfWu2BevBccdOrXyc1jnZs_p1Pg.png)**Stap 4: Activering en sleutels kopiëren**

1.  Schakel in de rechterbovenhoek van de pagina Machtigingen instellen de schakelaar **in** (Deze API-sleutel inschakelen).

2.  **Klik** op de knop "Opslaan".

3.  **Schuif** naar het blok "Details".

4.  Klik op de knop "Weergeven" om het **API-geheim (Secret Key)** weer te geven.

5.  **Kopieer** beide sleutels (**API-sleutel** en **API-geheim**) voor de volgende stap.

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/YDWX-BrATu6YaqEag_egzmNrIb_mD9VfJQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/sjIxSoTRRX4BVp_klePTX0i1orEGgq1eFg.png)
Verwacht resultaat: De Developers-lijst toont nu een invoering voor de met succes gemaakte en actieve Fozzels-verbinding.)

### Deel 2: Fozzels-activering en datasynchronisatie

Zet de gekopieerde sleutels over naar het Fozzels-platform en start de synchronisatie.

#### **Stap 5: Start een nieuwe integratie**

1.  **Meld u aan** bij uw Fozzels-account.

2.  **Ga** naar de pagina Integraties.

3.  **Klik** op de knop "Nieuwe integratie".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aXXjYseZEe8aGbAnzQXq0LsF6GCxXYmSCQ.png)

4.  **Selecteer** "Lightspeed" uit de lijst met beschikbare services.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aYuT19m6Pe5D1XRvGXFAKXPJF1jq5__j1g.png)

#### **Stap 6: Configuratievelden invullen**

**Vul** op de pagina "Nieuwe integratie maken" de volgende velden in:

1.  **Naam:** **Voer** een duidelijke naam voor deze integratie in (bijv. Lightspeed_INT).

2.  **URL:** **Voer** de URL van uw Lightspeed-winkel in.

3.  **API-sleutel:** **Plak** de API-sleutel die uit Lightspeed is gekopieerd.

4.  **API-geheim:** **Plak** het API-geheim dat uit Lightspeed is gekopieerd.

5.  **Taal:** **Kies** de hoofdtaal van uw website.

6.  **Cluster:** **Selecteer** het juiste cluster (regio) waar uw Lightspeed-winkel wordt gehost.

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/rmiVHOPB99FOtO7FZUQ0_YI_ma2jqnnB1w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/HY4qeR3DTL_8O1hm3il8lNhcNpKi2XECUw.png)

**Stap 7: Activeer en sla de integratie op**

1.  **Activeer** de integratie door de schakelaar "Actief" in de rechterbovenhoek **in** te schakelen.

2.  **Klik** op de knop "Opslaan".

#### **Stap 8: Instelling van websites en winkels en gegevens ophalen**

U gaat nu door naar het tabblad "Websites en winkels" (Stap 2) in Fozzels.

1.  **Klik** op de knop "Websites en winkels ophalen".

2.  **Activeer** de vereiste websites en winkels door de corresponderende **Statusschakelaars** op **Aan** in te schakelen.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/FARHG3ynyx8xadPlNcxi8OeOH6UTmF3J7Q.png)

3.  Voor elke benodigde winkel **klikt** u op de knop **"Pull products"**. Deze actie start de initiële belading van productgegevens in Fozzels.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/QuBZPoYbMSBquMmbbycLgRYnd-2U4mjjbA.png)

Nadat het productbeleidingsproces is voltooid, is Fozzels klaar! U kunt doorgaan naar het tabblad "Attributen" om uw synchronisatieregels in te stellen. Lees voor gedetailleerde instructies over het werken met productattributen en het aanpassen van gegevensvelden: 3.1. Importeren en catalogusoverzicht.
