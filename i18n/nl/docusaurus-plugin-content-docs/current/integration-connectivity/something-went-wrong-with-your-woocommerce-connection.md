---
id: '103000395329'
title: 2.5.7. Is er iets mis met uw WooCommerce-verbinding?
sidebar_position: 14
slug: >-
  /integration-connectivity/something-went-wrong-with-your-woocommerce-connection
description: >-
  Geen zorgen — de meeste verbindingsproblemen zijn snel op te lossen. Deze
  handleiding begeleidt u door de meest voorkomende berichten die u kunt zien
  en precies wat u moet doen. Wat
---

Geen zorgen — de meeste verbindingsproblemen zijn snel op te lossen. Deze handleiding begeleidt u door de meest voorkomende berichten die u kunt zien en precies wat u moet doen.

##

## Wat betekent "Verbindingsproblemen gedetecteerd"?

Wanneer u uw WooCommerce-integratie opslaat, controleert Fozzels automatisch of alles correct is ingesteld. Als er iets ontbreekt of aandacht nodig is, ziet u een bericht met uitleg over wat u vervolgens moet doen.

##

## Basisverbinding

-   **"Authenticatie mislukt."** Uw API-sleutels zijn onjuist of verouderd. Ga naar uw WooCommerce-winkel → **Instellingen → Geavanceerd → REST API**, genereer nieuwe sleutels en plak deze in Fozzels.

-   **"Toegang geweigerd."** Uw API-sleutel heeft niet de juiste machtigingen. Zorg er bij het maken van de sleutel in WooCommerce voor dat u **Lezen/Schrijven** selecteert — niet alleen Lezen.

-   **"REST API niet gevonden."** Controleer de URL die u hebt ingevoerd nogmaals. Deze zou er als volgt uit moeten zien `https://yourstore.com` — geen extra schuine strepen of typefouten.

-   **"Kan uw winkel niet bereiken."** Uw winkel is mogelijk offline, of een beveiligingsplugin blokkeert de toegang. Controleer of uw winkel actief is en try het opnieuw.

-   **"SSL-certificaatfout."** Het beveiligingscertificaat van uw winkel heeft een probleem. Neem contact op met uw hostingprovider om dit op te lossen.

##

## ACF (Advanced Custom Fields)

-   **"Beide plugins zijn vereist."** U hebt twee plugins op uw WordPress-site nodig: **Advanced Custom Fields** en **ACF to REST API**. Ga naar **Plugins → Nieuw toevoegen** en installeer beide.

-   **"ACF is actief maar de connectorplugin ontbreekt."** U hebt ACF geïnstalleerd maar u mist de tweede plug-in. Installeer **ACF to REST API** en activeer deze.

-   **"Connector is actief maar ACF is niet."** De tweede plug-in is daar maar ACF zelf wordt niet uitgevoerd. Ga naar **Plugins** en activeer **Advanced Custom Fields**.

-   **"Permalinkstructuur is niet compatibel."** Ga naar **WordPress → Instellingen → Permanlinks** en schakel van "Plain" naar iets anders over — **Berichten naam** werkt prima. Opslaan en je bent klaar.

-   **"ACF-velden zijn niet zichtbaar via REST API."** Open uw ACF Field Group, ga naar **Groepsinstellingen** en zet **Weergeven in REST API** aan. Vergeet niet op te slaan.

-   **"ACF REST API-versienotrouwkeurig."** Ga naar **WordPress → Instellingen → Permanlinks → ACF to REST API** en stel de versie in op **v3**.

##
WPML (Meertalig)

-   **"WPML plugin is niet gedetecteerd."** Installeer en activeer de plugin **WPML Multilingual CMS** op uw WordPress-site. Voeg vervolgens ten minste één taal toe onder **WPML → Talen**.

-   **"WPML is actief maar geen talen zijn geconfigureerd."** U hebt WPML geïnstalleerd maar hebt nog geen talen toegevoegd. Ga naar **WPML → Talen** en voeg de talen toe die u nodig hebt.

-   **Net WPML ingeschakeld?** Ga na het inschakelen terug naar **Websites en winkels** en klik **Pull Stores/Websites**, voer vervolgens **Pull Products** opnieuw uit. Dit is hoe Fozzels uw taalversies leert.

##
Yoast SEO

Yoast SEO heeft twee dingen nodig om met Fozzels te werken: de **Yoast SEO**-plugin en onze **Fozzels-connectorplugin**. U kunt de connector downloaden van **app.fozzels.com**.

-   **"Beide plugins zijn vereist."** Geen van beide plugins is actief. Installeer en activeer **Yoast SEO** en de **Fozzels-connectorplugin** in WordPress.

-   **"Connectorplugin is niet geïnstalleerd."** Yoast SEO wordt uitgevoerd maar onze connector ontbreekt. Download het van **app.fozzels.com** en activeer het in **Plugins**.

-   **"Yoast SEO is niet actief."** De connector is aanwezig maar Yoast SEO wordt niet uitgevoerd. Ga naar **Plugins** en activeer **Yoast SEO**.
-   **"Uw connectorplugin is verouderd."** _(gewoon een herinnering)_ Alles werkt nog, maar we raden aan de connector naar de nieuwste versie bij te werken voor de beste ervaring. Download het van **app.fozzels.com**.
**Net Yoast SEO ingeschakeld?** Voer **Pull Stores/Websites** en **Pull Products** opnieuw uit zodat Fozzels uw SEO-velden kan laden.

* * *

## AIOSEO (All in One SEO)

-   AIOSEO heeft ook twee dingen nodig: de **All in One SEO**-plugin en onze **AIOSEO API Sync by Fozzels**-connector. Download de connector van **app.fozzels.com**.

-   **"Beide plugins zijn vereist."** Geen van beide plugins is actief. Installeer en activeer beide in WordPress.

-   **"Connectorplugin is niet geïnstalleerd."** AIOSEO wordt uitgevoerd maar onze connector ontbreekt. Download het van **app.fozzels.com** en activeer het.

-   **"AIOSEO is niet actief."** De connector is aanwezig maar AIOSEO wordt niet uitgevoerd. Ga naar **Plugins** en activeer **All in One SEO**.

-   **"Uw connectorplugin is verouderd."** _(gewoon een herinnering)_ Alles werkt nog, maar het bijwerken van de connector wordt aanbevolen. Download de nieuwste versie van **app.fozzels.com**.

**Net AIOSEO ingeschakeld?** Voer **Pull Products** opnieuw uit zodat Fozzels uw AIOSEO-velden kan laden.

* * *

## Yoast SEO en AIOSEO tegelijk gebruiken?

Deze twee plugins werken niet samen — in Fozzels of in WordPress. Kies er één en schakel de ander aan beide zijden uit. Niet zeker welke u moet kiezen? Ga met degene die u al op uw winkel gebruikt.

* * *

## Nog steeds vast?

Als niets hierboven heeft geholpen, bereikt u ons op **[support@fozzels.com](mailto:support@fozzels.com)** of opent u een ticket in het Help Center. Een schermafbeelding van het foutbericht helpt ons veel bij het snel opslossen!
