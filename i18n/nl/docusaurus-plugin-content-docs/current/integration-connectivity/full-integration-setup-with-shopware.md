---
id: '103000338038'
title: 2.4. Volledige integratieinstelling met Shopware
sidebar_position: 6
slug: /integration-connectivity/full-integration-setup-with-shopware
description: 'Deze handleiding begeleidt u door het volledige proces van het verbinden van uw Shopware 6 online winkel met Fozzels. De integratie bestaat uit twee delen: Deel 1: C'
---

Deze handleiding begeleidt u door het volledige proces van het verbinden van uw Shopware 6 online winkel met Fozzels.
De integratie bestaat uit twee delen:

# Deel 1: Maak een integratie in Shopware 6

In dit gedeelte maakt u een API-integratie in uw Shopware 6-beheervenster. Dit genereert de gegevens die Fozzels nodig heeft om met uw winkel te communiceren.

### 1\. Inleiding

Ga naar uw Shopware 6-beheervenster. U vindt dit meestal op [uw store URL](https://shopware6.fozzels.com/admin).

### 2\. Klik op "Instellingen"

Klik op "Instellingen".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/_APoVDYMLEb_oPJsWrg4Fj9HOyB2FWI6g.png)

### 3\. Klik op "Systeem"

Ga naar systeeminstellingen.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NE3HjkKRNa353OQJJBzR8eeF_Y9XA9Mi_w.png)

###
4\. Klik op "Gebruikers en machtigingen"

Selecteer de optie Integraties in het menu Systeem.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/XBGWZJstYupsn7hsyrU1stHBQK9Hh8igVA.png)

### 5\. Schuif omlaag naar "Rollen" en klik op "Rol maken"

   Schuif op de pagina Gebruikers en machtigingen omlaag naar het gedeelte Rollen en klik op de knop "Rol maken".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/6gkkqh6BDu27YdBmfVYPA7aub9lZQr-Svw.png)

### 6. Vul de rolnaam in

Voer op het tabblad "Algemeen" een naam voor de rol in.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NUafBeJNC09Mi86jv-EVOFyWLidctjzadA.png)

### 7\. Klik op "Machtigingen"

U ziet de tabel met machtigingen met alle selectievakjes uitgeschakeld. Schakel de volgende machtigingen in:

**Catalogi (Weergave, Bewerken, Maken, Verwijderen):**

-   Categorieën
-   Dynamische productgroepen
-   Bestemmingspagina's
-   Fabrikanten
-   Producten
-   Eigenschappen
-   Beoordelingen

**Inhoud:**

-   Media (Weergave, Bewerken, Maken, Verwijderen)
-   Shopping Experiences (Weergave, Bewerken)
-   Thema's (Weergave, Bewerken)

**Overig** (Weergave, Bewerken, Maken, Verwijderen):

-   Verkoopkanalen

**Instellingen:**

-   Valuta's (Weergave, Bewerken, Maken, Verwijderen)
-   Aangepaste velden (Weergave, Bewerken, Maken, Verwijderen)
-   Talen (Weergave, Bewerken, Maken, Verwijderen)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/hUqHqVoOiZ0d2J1mJ2IWMFdxxBKX0tVq5g.jpeg)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/PoONXWr6_1SjTd-6iea1UpNsFzfkwxRYpw.jpeg)

### 8. Sla de rol op

Klik na het instellen van alle machtigingen op "Opslaan" om de rol op te slaan.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A8MHLjtMTc9IvBEae-ZW8vUS8I4hag_G8A.png)

###  **9.** Ga naar Systeem > Integraties
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A3DBstBn6Ru1Z0789w5hnvK7skD1VrNVhA.png)
**10.** **Klik op "Integratie toevoegen"**

Klik op de knop "Integratie toevoegen". Het dialoogvenster "Integratie maken" verschijnt:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/URMEvVMGXkTNtDY6_YIfXEesdx7AwYJJ2g.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/3hNA53bC00sF1iGxrnL2kynScvKzSZfduA.png)

**11.** Vul de integratiedetails in

Voer een naam voor de integratie in. Open vervolgens het vervolgkeuzemenu "Rollen" en selecteer de rol die u eerder hebt gemaakt.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/DZY9Dx_ZSKux2NMqdZxEYkFXqeT3JeZVlg.png)

###
12\.  Kopieer de Access Key ID

Klik op het kopieerpictogram naast de **Access Key ID** om het naar het klembord te kopiëren. Plak deze sleutel in een tekstdocument voor veiligheid - u hebt deze nodig in Deel 2.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Um8SIf9NDPTA8bYzQbm-H73d4wuiGheBbQ.png)

**13\.**  **Kopieer de Secret Access Key**

Doe hetzelfde voor de **Secret access key**: klik om de Secret access key naar het klembord te kopiëren. Plak deze code vervolgens in een tekstdocument zodat u de code later kunt openen en kopiëren.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ngrN_TmIbSpPn4vdjAU2urPJ3Orh3b1hcw.png)

### 14\. Klik op "Integratie opslaan"

Sla de integratie-instellingen op.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/zFiTXyoLwZk0YUyHGn98o27cXlHx8DSBgA.png)

### 15\. Bevestig het succesbericht

De integratie is nu gemaakt en actief.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ddwo4oRoStm6_leYM-OMhtbNWvrs2B5OkA.png)

###

# Deel 2: Verbind Fozzels met Shopware 6

Nu u de integratie in Shopware hebt gemaakt, configureert u de verbinding aan de kant van Fozzels met behulp van de gegevens uit Deel 1.

### **1.** Ga naar [Fozzels.com](https://fozzels.com/)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/QNYGtnmJc1jLtdHtrac2heMnCvr8OeCjOw.png)

###
**2.**  Klik op "Integraties"
    Klik in het menu Fozzels op Integraties.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p3WWrWl5kNt7ZpAfsTGCttAeYkIT1rVN6A.png)
3\. Klik op "Maken"
    Klik op de knop "Maken" om een nieuwe integratie in te stellen.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/pEdr2LbjwEBHYCnp6d9LPSj4r3fXHoqSRA.png)
4\. Selecteer het Shopware-logo

Kies Shopware als integratietyp door op het Shopware-logo te klikken.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/wutV5JMQpq7oa9KVz1xOFlxcjZe7RktGOg.png)5\. Vul de integratiedetails in

Vul de volgende velden in in de aangegeven volgorde:

1\. Naam — Voer een naam voor deze integratie in, bijvoorbeeld "Shopware 6".

2. URL — Voer de URL van uw Shopware 6 online winkel in (bijv. https://your-store.com).

3. Access Key ID — Plak de Access Key ID die u in Deel 1 uit Shopware hebt gekopieerd.

4. Secret Access Key — Plak de Secret Access Key die u in Deel 1 uit Shopware hebt gekopieerd.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/MN0itAjPFkZTRZVpISQu6IiUlmslBesN5w.png)

**6**. Klik op "Opslaan" wanneer alle velden zijn ingevuld. U ziet een pop-up "Succes" ter bevestiging van de opgeslagen verbinding.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Hx1KICwgA4nYaOgpQbjeLYyUYMAfwizHIA.png)

### 7\. Activeer de integratie
    Zet de schakelaar "Actief" aan om de integratie te activeren.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/CWqB7LNLotQ_hBy-B3upqEFOPuh8GzXOQg.png)
**8.** **Pull Websites and Stores**
    Klik op de knop "Pull Websites and Stores". Fozzels haalt alle uw verkoopkanaalgegevens van Shopware op.
   ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/AIptzp_eqV19f60Lq69A3HI-5-jXSkZ8RQ.png)
9\. Activeer uw winkelverbinding
    Zet de schakelaar Status aan voor uw winkel.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/gS02mVXwZyGcf2VSsypNVS3DoBaYSrKftQ.png)

10. Activeer winkelweergaven / verkoopkanalen

    Activeer de beschikbare winkelweergaven of verkoopkanalen die u wilt gebruiken in Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/1UtVxA_eP1gFWhRvGqpPE7G2CczT4WZGdg.png)

11. Trek producten op

###     Klik op "Pull Products" om uw productgegevens van Shopware op te halen. Dit kan enige tijd duren afhankelijk van het aantal producten.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/0liK4TAMuGrDYFNClrrnT2GtrcZKZ6M2jA.png)
**12.** Klik op "Volgende stap"
    Ga door naar de volgende stap om de installatie af te ronden.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p1QaQx8BXoBRslqVdOfwPVQzKjtqvAKl3A.png)

# Installatie voltooid

Gefeliciteerd! Uw Shopware 6-winkel is nu volledig verbonden met Fozzels. U kunt deze integratie gebruiken om product Flows te maken en uw productinhoud rechtstreeks van het Fozzels-platform te beheren.

## Aan de slag

Hier zijn enkele aanvullende artikelen die u kunnen helpen om aan de slag te gaan met Fozzels:

-   [Een nieuwe Content Flow maken en initiële instellingen](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Prompt Creation & Filtering. Drag & Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)

-   [Wanneer worden nieuwe producten gegenereerd: de pull-cyclus uitgelegd](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained)
-   [Massa-acties en operationele controle in de batchlijsten / dagelijkse totale batchlijst](/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list)
-   [Flow Definition and Content Types (Text, Image, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)

Of neem direct contact met ons op - we helpen u altijd graag!

###
