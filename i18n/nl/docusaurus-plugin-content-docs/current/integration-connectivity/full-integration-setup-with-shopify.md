---
id: '103000367854'
title: 2.3.3. Volledige integratie-instelling met Shopify.
sidebar_position: 5
slug: /integration-connectivity/full-integration-setup-with-shopify
description: Deze handleiding legt uit hoe je met Custom Apps (Private Apps) een veilige, tweerichtingsverbinding opzet tussen je Shopify-winkel en Fozzels en hoe je…
---

Deze handleiding legt stap voor stap uit hoe je met **Custom Apps** (Private Apps) een veilige, tweerichtingsverbinding opzet tussen je **Shopify**-winkel en **Fozzels**, en hoe je de synchronisatieparameters configureert.

## Stap 1: Shopify Custom App instellen

### 1.1. App aanmaken

1.  **Open** een browser en **log in** op je **Shopify Admin**.

2.  **Ga** naar de sectie **Settings**.

3.  **Ga** in het zijmenu naar de sectie **Apps and sales channels**.

4.  **Klik** op **Develop apps**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/FQMhwpXYX9AaHS64ub51WznCudG_HjF_GQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/im1AvTKi6MWYyaB5au2QV52k6g-zKgIJPQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/_flCr1G21Y0eiLDKAAikCGA8aItw-mC2Ng.png)

5. **Klik** op **Create an app**.

6. **Vul** in de pop-up "Create an app" de App name (**Fozzels**) in en **kies** je account in het gedeelte voor ontwikkelaars.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/iwwZ8YAvrwc95yWJhOvB1oRxvwcRY-TaUw.png)

### 1.2. Rechten configureren (scopes)

1.  **Ga** naar de sectie **Configure Admin API scope**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Ul-1S5j5J-ff2mqfWD_hCHBbpsCPJPNOJA.png)

2. **Schakel** via het zoekveld de volgende vereiste rechten **in**: read\_product\_listings , read\_products , write\_products , read\_metaobject\_definitions , read\_metaobjects , read\_product\_feeds .

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Q-ViUfe7pSUU1B02HTAe2_fR-ncQiNevEw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/VlG1HE0ZjQVE-ftYEYNp1-YpSbOdYRXSGw.png)

3. **Let op!** Als je in Shopify **Markets** gebruikt om verschillende regio's of landen te beheren, moet je ook de volgende rechten **toevoegen**: write\_translations , read\_translations , write\_markets , read\_markets , read\_locales .

4. **Controleer** de volledige lijst met ingeschakelde rechten. Die hoort er zo uit te zien:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/oRHwBytJR6A9FPaCaQdSSF83Rk5PHBPKiw.png)

5. **Klik** op Install app om het aanmaken af te ronden.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/mmVlY4rP_YWAoM7ED5aByqLh37nfQomtcA.png)

### 1.3. Inloggegevens voorbereiden

1.  **Ga** naar de sectie **API credentials**.

2.  **Kopieer** en **bewaar** alle velden die je nodig hebt om in Fozzels in te vullen.
    2.1. **Kopieer** de API key uit Shopify (voor het veld API key in Fozzels).
    2.2. **Kopieer** de API Secret key uit Shopify.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/8XPxI0phlV2LNnbr1Aj-4wH3VCl_q62JQw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/0VUTxufo_k1f9p3im2fqQ0x1mA9tu4gAIg.png)

## Stap 2: Integratie aanmaken in Fozzels

### 2.1. Verbinding instellen

1.  **Log in** op je Fozzels-account via `https://app.fozzels.com`.

2.  **Ga** naar de sectie **Integration**.

3.  **Klik** op **“New Integration”**.

4.  **Kies** het platform **Shopify**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Pyzl5zTGARVEwFahvJ9LgtWhqC42AkOW-Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/9ZDhsVks6A3bEPfvWW2KUSi_LC5nxPkKKA.png)

5. **Vul** de naam van je integratie in.

6. **Vul** de URL van de Shopify-webwinkel in.

**Let op!** Gebruik voor de velden URL en App Host Name altijd het subdomein `.myshopify.com` en niet de "echte" URL. Voorbeeld: `teststore.myshopify.com`.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/5Es2Xe5K4kX7G9ceTSqa0zcRdqY7LOd18w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/2V9Pr-82uxKsTQw5vzihFFVkdOXXeYRTYg.png)

7. **Kopieer** en **plak** alle vereiste velden in Fozzels.
    7.1. **Plak** de API key uit Shopify in het veld API key in Fozzels.
    7.2. **Plak** de API Secret key uit Shopify in het veld API Secret in Fozzels.
    7.3. **Plak** de App Host Name.

8. **Zet** de schakelaar **Markets or LangShop** aan om content te kunnen synchroniseren voor producten uit verschillende winkels (voor locales, niet alleen voor de standaardwinkel).

9. **Klik** op de knop **Save**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/10MdEKRe3CAXM8phYawwasjHybRh5utDcg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/1gUl8bf3vOc8OzNHXG0e2xOkIOfqafgQgQ.png)

### 2.2. Activering en synchronisatie

1.  **Activeer** de integratie.

2.  **Haal** websites en stores **op**.

3.  **Controleer** of de integratie de volgende statussen heeft en of de huidige websites en stores worden weergegeven:
    3.1. Authorized: yes
    3.2. REST API Connected: yes

4.  **Activeer** websites en talen met de schakelaars. _De standaardtaal voor de markt is gemarkeerd met een ster._

5.  **Klik** op de knop **“Pull Products”** om het ophalen van producten en attributen te starten. **Wacht** tot de producten zijn geladen (de voortgang zie je in de voortgangsbalk).

6.  **Ga** naar het tabblad **“Attributes”** om de geladen attributen te bekijken, in of uit te schakelen of te bewerken. **Lees** [hier](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes) meer over het beheren van de attributen.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/hf-7P91OunPrATXrTjI-eheh4APzl3yMTQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/QoYt9ReC4xDN26VlS3LlMJMq_48shcVFYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/nRpJNQGSWcWm_BelS7-uGiBdpAXGz7G4nA.png)

_\* De standaardtaal voor de markt is gemarkeerd met de ster_

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/BRzfcGMI7cun1wQGg3Vv1VHM9WbikgIqMg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/XOn4d1hw9r48sW-PN1cKj0Mr5B4q-HxITA.png)

Nadat de integratie succesvol is aangemaakt, kun je **beginnen** met het bouwen van flows en je **[eerste content](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)** in Fozzels **genereren**!
