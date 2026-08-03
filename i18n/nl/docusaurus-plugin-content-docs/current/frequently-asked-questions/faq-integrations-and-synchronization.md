---
title: 'FAQ: Integraties en synchronisatie'
sidebar_position: 9
unlisted: true
slug: /frequently-asked-questions/faq-integrations-and-synchronization
description: >-
  Gedeeltelijke productpulls, Shopware en Shopify verbindingsproblemen, varianten
  en Packs, HTML in atributen, WooCommerce plugins, tarieflimieten, afbeeldingspulls
  en multi-store URL problemen.
---

## De automatische productpull haalt alleen een deel van mijn catalogus op. Hoe krijg ik alle producten?

Als uw catalogus standaard API-limieten overschrijdt, wordt de pull niet alle producten opgehaald. Vraag een API-limietverhoging aan bij uw PIM-provider. Als tijdelijke oplossing kan het Fozzels team de pull handmatig voltooien.

## API-limieten zijn verhoogd maar de productpull werkt nog niet.

De PIM-provider moet hun services mogelijk herstarten. Neem contact op met hen om te bevestigen dat de wijzigingen actief zijn. Fozzels support kan een handmatige pull uitvoeren terwijl het probleem wordt opgelost.

## Fozzels kan geen REST API-verbinding tot stand brengen met mijn Shopware store.

Controleer goed de Access Key ID en Secure Access Key. Zijn ze correct, dan is het probleem waarschijnlijk toegangsmachtigingen. Ga in Shopware admin naar Settings → System → Integrations, open de Fozzels integratie, activeer de toggle **Administrator** en sla op.

## Fozzels vereist Administrator toegang in Shopware maar ik maak me zorgen over privacy.

De rol Administrator is momenteel vereist voor Fozzels om productgegevens te lezen. Neem contact op met het Fozzels team als u volledige admin toegang verleent, om te bespreken of een meer beperkte setup mogelijk is.

## Mijn API-sleutels zijn ongeldig. Wat moet ik controleren?

Zorg ervoor dat u het juiste sleuteltype stuurt (Integration key die met `SWIA...` begint, niet een Sales Channel key). Controleer of de geheime sleutel niet is afgekapt bij copy/paste. Maak een nieuwe Integration aan en stuur verse sleutels.

## Inhoud is gegenereerd in Fozzels maar verschijnt niet in mijn Shopware store.

Dit kan gebeuren wanneer synchronisatie voor specifieke producten mislukt vanwege ontbrekende atributen, machtigingskwesties of variantenconfiguratie. Neem contact op met support met specifieke productvoorbeelden.

## Hoe behandelt Fozzels producten met veel varianten (maten, kleuren)?

Fozzels heeft een **Packs** functie die varianten bundelt — alle maten van dezelfde kleur worden als één product behandeld. Voeg het filter "Pack Parent ID is not empty" toe aan uw flow om deze functie te gebruiken.

## HTML-tags (bv. `<p>`) verschijnen in Shopify velden. Hoe repareer ik dit?

Schakel HTML ondersteuning voor het atribuut uit: Atributen tabblad → Bewerk (potloodpictogram) → Technische vlaggen → schakel **Allow HTML** uit → Opslaan. Genereer vervolgens opnieuw en controleer.

## Kan Fozzels platte tekst (zonder HTML) naar mijn PIM schrijven?

Ja. Ga naar het tabblad Atributen → Bewerk atribuut → schakel **Allow HTML** uit → Opslaan.

## Ik krijg een fout "Website is not active" wanneer ik op Save and Preview klik.

Dit kan voorkomen vanwege tijdelijke verbindingsproblemen na een API-update. Neem contact op met support — zij kunnen de website verbinding controleren en opnieuw activeren.

## Ik heb de domein-URL van mijn store gewijzigd. Moet ik Fozzels bijwerken?

Ja. Als u uw domein wijzigt, moet de Fozzels configuratie mogelijk worden bijgewerkt. Neem contact op met support om het domein bij te werken.

## Meerdere stores tonen hetzelfde domein in Fozzels. Is dit correct?

Dit kan gebeuren als Fozzels slechts één domein ontvangt in plaats van aparte per store. Sync wordt correct per store verwerkt in de background. UI-verbeteringen zijn gepland.

## Welke plugins zijn nodig voor een WooCommerce integratie?

Zorg ervoor dat: de REST API is ingeschakeld, de nieuwste Fozzels AIOSEO plugin is geïnstalleerd en de ACF to REST API plugin (v3.3.4) is geïnstalleerd en actief.

## Hoe stel ik AIOSEO integratie met Fozzels in (WooCommerce)?

Installeer de Fozzels AIOSEO sync plugin op WordPress. "Focus Keyphrase" in Fozzels wijst naar Focus Keyword in WooCommerce; "SEO Keywords" wijst naar Additional Keywords.

## Hoe stel ik Yoast SEO integratie met Fozzels in?

Installeer de Fozzels Yoast sync plugin. Zorg ervoor dat Yoast volledig is geconfigureerd en geactiveerd in WordPress.

## Hoe verwerkt Fozzels meertalige inhoud met WPML?

Fozzels biedt toegang tot stores voor verschillende talen. Maak aparte flows per taalwinkel aan. Fozzels vertaalt inhoud niet zelf, maar u kunt prompts instellen om in de gewenste taal te genereren.

## Hoe gebruik ik aangepaste productdatavelden (ACF) in Fozzels prompts?

Fozzels ondersteunt ACF voor WooCommerce. Schakel ACF ondersteuning in en aangepaste velden verschijnen als atributen in Fozzels.

## Nieuwe ACF velden die ik in WordPress heb toegevoegd, verschijnen niet in Fozzels.

Nieuwe ACF velden vereisen een geslaagde atribuutpull om te verschijnen. Zorg ervoor dat de ACF to REST API plugin actief is en de API-verbinding werkt.

## Productgegevenspull is gestopt met werken / Ik krijg importfouten.

Dit kan worden veroorzaakt door een snelheidsbeperking of firewall die Fozzels' API-verzoeken blokkeert. Neem contact op met support — zij kunnen de noodzakelijke uitzonderingen aan uw server's allowlist toevoegen.

## Storefront-URL's leiden naar 404 fouten.

Dit kan voorkomen met parent/child productstructuren. Neem contact op met support met voorbeelden — zij kunnen de URL-toewijzing repareren.

## Shopware teksten worden naar maatvarianten in plaats van kleurvarianten geduwd.

Na de Pack Parent ID update kan het synchnivieau zijn gewijzigd. Neem contact op met support om het synchtarget terug aan te passen naar de kleur/parent variantniveau.

## Mijn store is weergegeven als "lost in integration" / Ik krijg een inactieve store fout.

De originele store-URL is niet langer actief. Dupliceer de betreffende flows en selecteer de juiste actieve store tijdens duplicering. Oude flows kunnen worden gearchiveerd.

## Mijn storefront URL wijst naar het verkeerde domein (meerdere storefronts).

Fozzels lost URL's op per taal, niet per sales channel, en kiest het eerste beschikbare domein. Dit is een bekende beperking die wordt verbeterd.

## Hoe verwerkt Fozzels meerdere Shopware verkoopkanalen?

Inhoud wordt eenmaal per product per taal gegenereerd, niet per verkoopkanaal. Verkoopkanalen kunnen als catalogusfilters worden gebruikt. Dit vermindert tokenkosten.

## Er zijn geen afbeeldingen in mijn productfeed / catalogus.

Ontbrekende afbeeldingen worden vaak veroorzaakt door IP-beperkingen op uw server. Neem contact op met support — zij kunnen Fozzels IP-adressen aan uw allowlist toevoegen.

## Productafbeeldingen worden niet weergegeven in de Fozzels catalogus.

Dit kan een integratieproblem met de afbeeldingspull zijn. Neem contact op met support — zij zullen dit onderzoeken en aan Fozzels zijde repareren.

## Ik krijg een synchfout: kan niet naar dropdown atributen schrijven.

Fozzels kan alleen tekst naar tekstgebaseerde atributen schrijven, niet naar dropdown/select velden. Controleer het atribuuttype in uw webshop.

## Hoe hernoem ik atributen in Fozzels?

Ga naar atribuutinstellingen, wijzig de naam in het invoerveld en sla op. Dit is een weergaveverandering alleen in Fozzels.

## Atribuutnamen werken niet automatisch bij in prompts na een PIM-wijziging.

Wanneer u atributen in uw PIM hernoemt, kan Fozzels deze als nieuw behandelen. Hernoem het atribuut handmatig in Fozzels om dit op te lossen.

## Inhoud is gesynchroniseerd met de verkeerde producten na websitewijzigingen.

Fozzels haalt catalogi nachtelijks op. Als u grote wijzigingen aanbrengt, triggert u altijd een handmatige productpull om juiste gegevens te waarborgen.

## Ik krijg een fout 429 Too Many Requests bij synchronisatie naar mijn PIM.

De snelheidsbeperker van uw PIM blokkeert verzoeken. Neem contact op met uw PIM-provider en Fozzels support om Fozzels IP op de allowlist te zetten of het verzoekformat te repareren.

## Welke velden kan Fozzels bijwerken in Katana PIM?

Het standaard endpoint ondersteunt: naam, korte beschrijving, volledige beschrijving, metatitel en metabeschrijving. Andere velden kunnen aparte API-eindpunten vereisen.

## Hoe schakel ik LangShop integratie met Shopify in?

Deel screenshots van uw LangShop instellingen in Shopify zodat het Fozzels team uw configuratie kan controleren en bepalen of aanvullende installatie nodig is.

## Hoe synchroniseer ik een hele batch in één keer opnieuw?

Open de flow → Batch List → schakel "Show all content" in → selecteer alle rijen → Actions → **Re-sync content**. Dit loopt door de algemene wachtrij.

## Kan ik de Shopify integratie zonder gegevensverlies vernieuwen?

Neem contact op met support voordat u vernieuwt — zij kunnen de grondoorzaak onderzoeken. Vernieuwen veroorzaakt meestal geen gegevensverlies, maar het team moet dit eerst verifiëren.

## Shopify Markets verschijnt niet in Fozzels.

Dit wordt meestal veroorzaakt door API-beperkingen in Shopify — de API-instellingen moeten worden aangepast. Neem contact op met support of uw bureau partner.

## Ik krijg generatiefouten vanwege grote afbeeldingen (limiet van 5MB).

AI-modellen hebben een limiet van ongeveer 5MB per afbeelding per verzoek. Fozzels converteert PNG's automatisch naar JPG. Overweeg JPG-indeling te gebruiken voor productafbeeldingen.

## Mijn meertalige categoriestructuur is onjuist (bv. Tsjechisch vs Duits).

Fozzels kan de standaardtaal categoriestructuur weergeven. Neem contact op met support voor aanpassingen van meertalige categorietoewijzing.

## Hoe vaak synchroniseert Fozzels gegevens van mijn PIM?

Automatische productpulls worden nachtelijks na middernacht uitgevoerd. Voor onmiddellijke updates triggert u een handmatige pull.
