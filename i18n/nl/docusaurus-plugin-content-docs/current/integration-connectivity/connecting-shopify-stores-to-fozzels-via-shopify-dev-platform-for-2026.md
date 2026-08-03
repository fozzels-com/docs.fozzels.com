---
id: '103000385597'
title: 2.3.2. Shopify winkels verbinden met Fozzels via Shopify Dev Platform voor 2026
sidebar_position: 4
slug: /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: BELANGRIJK BERICHT Vanaf 1 januari 2026 verandert Shopify officieel de regels voor toepassingsbeheer. De oude methode voor het creëren van "Private Apps" d
---

BELANGRIJK BERICHT

Vanaf 1 januari 2026 verandert Shopify officieel de regels voor toepassingsbeheer. De oude methode voor het creëren van "Private Apps" rechtstreeks in de store admin zal worden afgeschaft. Alle nieuwe verbindingen en updates naar bestaande integraties moeten nu via het Shopify Dev Platform worden uitgevoerd.

1.  Autorisatie

1.1. Log in op het officiële Shopify Developer Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard)

2.  Toegang tot het App Creation Menu

2.1. Nadat u bent ingelogd op het dashboard:

-   Selecteer de sectie Apps in de linkerzijbalk.

-   Klik in de rechterbovenhoek op de knop Create app (afhankelijk van het accounttype kan uw interface er anders uitzien). Als u deze knop niet ziet, scroll dan naar de onderkant van de pagina. Er moet een klikbare link zijn met het label **"Create app")**
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/e9TIxK8eDP1_39W_QK6q8V792TllGbJshg.png)

###

3.  De Creatiemethode Kiezen en Naamgeving

3.1. Op het selectiescherm:

-   Kies de tweede optie aan de rechterkant — Start from Dev Dashboard.
    Met deze methode kunt u snel API-inloggegevens genereren zonder een opdrachtregelinterface te gebruiken.

-   Voer in het veld App name een beschrijvende naam in (bijv. Fozzels\_APP).

-   Klik op de knop Create.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/aOyMompGNxvMk8AwTspY6_RThyDKNEsWcw.png)

4.  Versieconfiguratie en Verplichte Instellingen

        4.1. Na het klikken op Create, wordt u omgeleid naar de pagina Create a version.
 ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/5WoUJ-Qq7qALDUUuzlNBWf0V0lxaSjhlbQ.png)

4.2. Naam & App URL

-   Voer de naam van uw app in

-   Voer uw store-URL in (bijv. [https://your-store-name.myshopify.com](https://your-store-name.myshopify.com)).

4.3. Verplichte instelling

-   Embed app in Shopify admin: moet ingeschakeld zijn.
    Dit zorgt ervoor dat de Fozzels interface in uw Shopify admin panel wordt weergegeven.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/fCpNrLVZblbWTWkIntCgl86EmrjmORG6BQ.png)

5.  API-toegang (Scopes) Configureren

5.1. Scroll naar beneden naar de sectie Access om te definiëren welke gegevens Fozzels kan beheren.

5.2. In het blok Scopes:

-   Klik op de link Select scopes in de rechterbovenhoek.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/RgsEpex9lyPaJ8AyOjR4-So8df3QeQ6Fcw.png)

6.  Machtigingen Selecteren

6.1. In het modale venster Select scopes:

-   Gebruik de zoekbalk om specifieke machtigingen te vinden.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/wQoW7bQIW9fqRTTnrHwUO9bIMpWZ6tDL_w.png)

    6.2. Vereiste machtigingen
    Deze lijst is verplicht voor alle winkeltypen, inclusief winkels die Shopify Markets en Language Pages gebruiken.

Products: read\_product\_listings, read\_products, write\_products, read\_product\_feeds.

Metadata: read\_metaobject\_definitions, read\_metaobjects.

Translations: read\_translations, write\_translations.

Locales: read\_locales.

    Markets: read\_markets, write\_markets.
    of copy/paste dit

    read\_locales,read\_markets,write\_markets,read\_metaobject\_definitions,read\_metaobjects,read\_product\_feeds,read\_product\_listings,read\_products,write\_products,read\_translations,write\_translations
    6.3. Klik Done nadat alle vereiste scopes zijn geselecteerd.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/Y-HyRqCHeriVdpYrrHm2aJyi7Y8OUVBTDw.png)
    7. Pre-Release Checklist: App Configuratie

-   Controleer het volgende voordat u op de knop Release klikt:

-   App URL: een geldige store-URL wordt ingevoerd (bijv. [https://store-name.myshopify.com](https://store-name.myshopify.com)).

-   API Version: de Webhooks API Version is ingesteld op de nieuwste stabiele release (bijv. 2025-10).

-   Embedded Interface: "Embed app in Shopify admin" is ingeschakeld (vereist voor Fozzels).

-   Mandatory Scopes: alle vereiste machtigingen zijn aanwezig:

-   Products: read\_product\_listings, read\_products, write\_products, read\_product\_feeds

-   Metadata: read\_metaobject\_definitions, read\_metaobjects

-   Translations: read\_translations, write\_translations

-   Locales: read\_locales

-   Markets: read\_markets, write\_markets

-   Scope Verification: alle machtigingen bevatten de vereiste lees- en schrijftoegang waar van toepassing.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/nE6aiS2K21Vs_e5K45UMqgI7KjTAAvev9g.png)

8. De Versie Vrijgeven

8.1. Zoek de knop Release in de rechterbovenhoek van de pagina Create a version.

-   **Klik Release.**

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/lMRrK6F1zY287cIilwfdL7zuoi-eQJsO2A.png)

8.2. In het pop-upvenster:

-   Version name (optioneel): bijv. v1.
    Indien leeg gelaten, zal Shopify automatisch een naam genereren.

-   Version message (optioneel): bijv. "Initial setup for Fozzels".

8.3. **Klik op de knop Release** in de rechterbenedenhoek om af te ronden.

De versiestatus verandert in **Active**.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/m8pxnVX5dNifvnh6z0IXZfDMkkMqS2RQwA.png)

### ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/BA5mQQb2jWU5J80LBoSsUOIs1OoRl3M3EA.png)

9. API-inloggegevens Ophalen

9.1. Ga in het Shopify Dev Dashboard naar **Settings** in de linkerzijbalk.

9.2. Kopieer het volgende in de sectie **App credentials** (API keys):

-   Client ID (API Key)

-   Client Secret (API Secret Key)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/VAGvtjJ3zAMPYkyQu6vUbofnGVh7jLqYyw.png)

10. A De Installatie Lanceren

10.1. Na uitgifte, GA naar het tabblad Home van de app.

    10.2. Zorg ervoor dat u op het tabblad Home staat.
Als uw account slechts één website heeft en u wilt Fozzels uitsluitend voor die website gebruiken, klik dan gewoon op **Install App**. De app wordt automatisch geïnstalleerd.
Als u een Partner-account hebt of meerdere websites beheert, moet u de distributieinstellingen voor de Fozzels app configureren.

10.3. Open het tabblad Distribution in de linkerzijbalk.

    10.4. Klik op Select distribution method en kies **Custom Distribution**.
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/pa4OKRyCk3kJpPajX3ZzHmcMAbZkGU_7Eg.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XfVKpSARlwl_mvRyvXXrMLHhUdvZ7M7Suw.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/eq2IpYTVXtyGiP9Pxu2xCSHWHkNCpmP1CA.png)

10.6. Na autorisatie keert u terug naar de pagina Custom Distribution.

-   Voer uw winkeldomein in (bijv. your-store.myshopify.com).

-   Klik Generate link.

-   Bevestig de actie in het pop-upvenster.

10.7. U wordt omgeleid naar de pagina Install app in uw store admin.

-   Klik Install.

-   Bevestig het bericht "This app is exclusive to your store".

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/tCyXVtYOydxTaxoxfZezfHkC0FxDe9xsBw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/R8WiM6_-2NXlrFjFg29bxZA7IkZVz9oISQ.png)

10.8. Om de synchronisatie af te ronden, gaat u terug naar uw Fozzels account om de inloggegevens in te voeren en de verbinding af te ronden.

11. Integratie Aanmaken in Fozzels.

11.1. Verbindingssetup

-   Log in op uw Fozzels account: [https://app.fozzels.com](https://app.fozzels.com)

-   Ga naar het gedeelte Integration.

-   Klik New Integration.

-   Kies Shopify als platform.

-   Kies het aangepaste APP verbindingstype.

-   Voer de naam van de integratie in.

-   Voer de URL van de Shopify webwinkel in.

Opmerking:
Gebruik altijd het domein .myshopify.com voor de velden URL en App Host Name, niet de openbare store URL.
Voorbeeld: teststore.myshopify.com

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/sF_OsmKhLhv87WeuVC4_yxL77LH9O2-uAw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XLCPhjqaC_s3HQuyjSEhw6SsdnMZDal0vA.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/TzMbd_ReJA8hdEjYW1EFgKWryHEquafa0w.png)

12. API-inloggegevens Invoeren in Fozzels

12.1. Kopieer en plak de inloggegevens in Fozzels:

-   API Key → API key veld

-   API Secret Key → API Secret veld

-   App Host Name → App Host Name veld

13. Aanvullende instellingen en Access Token Generatie

13.1 **Enable the Markets or LangShop** toggles als u content over meerdere markten of talen wilt synchroniseren.

13.2 Klik op de knop Save. Het veld Access Token is beschikbaar na generatie.
13.3 Ga naar het tabblad Websites & Stores.
13.4 Activeer uw integratie.
13.5 Klik op de knop Pull Websites & Stores om deze op te halen.
13.6 Het systeem genereert automatisch de Access Token na geslaagde autorisatie.

14. Activering en Synchronisatie

14.1. Activeer Websites en Languages met behulp van toggles. De standaardtaal is gemarkeerd met een ster.

14.2. Klik op Pull Products om te beginnen met het importeren van producten en attributen. De voortgang wordt weergegeven in de voortgangsbalk.

14.3. Ga naar het tabblad Attributes om geïmporteerde attributen te bekijken, in te schakelen, uit te schakelen of bewerken. Meer informatie over het beheren van attributen vind je [hier](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).

Na het succesvol aanmaken van de integratie kunt u **beginnen** met het bouwen van flows en **genereren** uw **[eerste content](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)**!
