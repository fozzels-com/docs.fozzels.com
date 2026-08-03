---
id: '103000395334'
title: 2.5.8. Uw WooCommerce Verbinding in Fozzels Diagnosticeren
sidebar_position: 15
slug: /integration-connectivity/diagnosing-your-woocommerce-connection-in-fozzels
description: Als u een banner "Connection Issues Detected" ziet nadat u uw WooCommerce integratie hebt opgeslagen, zal dit artikel u helpen begrijpen wat elk bericht betekent a
---

#

Als u een banner **"Connection Issues Detected"** ziet nadat u uw WooCommerce integratie hebt opgeslagen, zal dit artikel u helpen begrijpen wat elk bericht betekent en hoe dit op te lossen.

## Hoe de Diagnose Werkt

Elke keer dat u uw integratie opslaat, controleert Fozzels automatisch de verbinding met uw WooCommerce winkel en de status van eventuele ingeschakelde plugins. Als iets ontbreekt of verkeerd is geconfigureerd, ziet u een melding met een beschrijving van het probleem en stappen om dit op te lossen.

Er zijn drie soorten meldingen:

-   **Error** — iets blokkeert de verbinding. De integratie werkt niet totdat dit is opgelost.
-   **Warning** — de integratie kan werken, maar iets kan problemen veroorzaken of de functionaliteit beperken.
-   **Notice** — informatief bericht, geen actie is strikt nodig maar aanbevolen.

## Basis Verbindingsberichten

Deze berichten worden weergegeven ongeacht welke plugins u hebt ingeschakeld.

-   **"Authentication failed. Check your Customer Key and Customer Secret."**
    Uw API-inloggegevens zijn onjuist of zijn sinds het kopiëren opnieuw gegenereerd. Ga naar **WooCommerce → Settings → Advanced → REST API**, genereer de sleutels opnieuw en plak deze in Fozzels.

-   **"Access denied. Your API key requires Read/Write permissions."**
    De API-sleutel is gemaakt met alleen Lees-toegang. Fozzels heeft Schrijftoegang nodig om gegenereerde content terug naar uw winkel te pushen. Regenereer de sleutel en selecteer **Read/Write** in het dropdown menu Machtigingen.

-   **"REST API not found. Check your store URL."**
    De WooCommerce REST API kon niet bereikt worden op het opgegeven URL. Zorg ervoor dat u het juiste winkels URL hebt ingevoerd (bijv. `https://yourstore.com`) en dat de WooCommerce REST API is ingeschakeld.

-   **"Cannot reach your store. Check the URL, server status, or firewall settings."**
    Fozzels kon geen verbinding tot stand brengen. Uw winkel kan offline zijn, het URL kan onjuist zijn, of een firewall of beveiligingsplugin blokkeert externe API-verzoeken.

-   **"SSL certificate error. Ensure your store uses a valid HTTPS certificate."**
    Het SSL-certificaat van uw winkel is ongeldig of verlopen. Neem contact op met uw hostingprovider om het certificaat te vernieuwen of te vervangen.

## ACF (Advanced Custom Fields)

Deze berichten worden weergegeven wanneer de toggle **Enable ACF** in Fozzels is ingeschakeld.

-   **"Both 'Advanced Custom Fields' and 'ACF to REST API' plugins are required. Make sure both are installed and active."**
    Geen van de plugins wordt gedetecteerd op uw WordPress site. Installeer en activeer beide **Advanced Custom Fields** en **ACF to REST API** in uw WordPress admin panel onder **Plugins → Add New**.

-   **"'Advanced Custom Fields' is active but the 'ACF to REST API' plugin is not installed."**
    ACF is geïnstalleerd maar de connecter plugin ontbreekt. Installeer en activeer de plugin **ACF to REST API** om Fozzels toe te staan uw aangepaste velden te lezen.

-   **"'ACF to REST API' plugin is active but 'Advanced Custom Fields' is not active."**
    De connecter plugin is geïnstalleerd maar ACF zelf is niet actief. Ga naar **Plugins** in uw WordPress admin en activeer **Advanced Custom Fields**.

-   **"Permalink structure is incompatible with REST API."**
    Uw WordPress permalink structuur is ingesteld op **Plain**, wat REST API-toegang breekt. Ga naar **WordPress → Settings → Permalinks** en selecteer een ander structuur dan Plain (bijv. **Post name**). Sla de wijzigingen op.

-   **"ACF fields are not visible via the REST API."**
    Uw ACF Field Group is niet blootgesteld aan de REST API. Ga naar **ACF → Field Groups**, open de relevante groep, navigeer naar **Group Settings** en schakel beide **Active** en **Show in REST API** in.

-   **"ACF REST API version mismatch. Version v3 is required."**
    Als u de plugin **ACF to REST API** gebruikt, moet deze op v3 staan. Ga naar **WordPress → Settings → Permalinks → ACF to REST API** en stel de **Request Version** in op **v3**.

## WPML (Meertalig)

Deze berichten worden weergegeven wanneer de toggle **Enable WPML** in Fozzels is ingeschakeld.

-   **"WPML plugin is not detected on your WordPress site."**
    De WPML plugin is niet geïnstalleerd of niet actief. Installeer en activeer **WPML Multilingual CMS** op uw WordPress site en configureer vervolgens minstens één extra taal onder **WPML → Languages**.

-   **"WPML is active but no languages are configured."**
    WPML is geïnstalleerd maar er zijn geen extra talen ingesteld. Ga naar **WPML → Languages** en voeg minstens één taal toe aan uw winkel.

-   **After enabling WPML, re-run Pull Stores/Websites and Pull Products.**
    Dit is nodig zodat Fozzels alle taalgebieden kan detecteren en de juiste productversies voor elke taal kan laden. Zonder het opnieuw uit te voeren zullen nieuwe taalgebieden niet in het systeem verschijnen.

* * *

## Yoast SEO

Deze berichten worden weergegeven wanneer de toggle **Yoast WooCommerce SEO** is ingeschakeld in Fozzels. Yoast SEO integratie vereist twee actieve plugins op uw WordPress site: **Yoast SEO** en de **Yoast SEO WooCommerce REST API by Fozzels** connecter plugin.

> U kunt de Fozzels connecter plugin downloaden van **app.fozzels.com** of vanuit de setup gids in de Knowledge Base.

* * *

-   **"Both 'Yoast SEO' and 'Yoast SEO WooCommerce REST API by Fozzels' plugins are required."**
    Geen van beide plugins wordt gedetecteerd. Installeer en activeer beide in uw WordPress admin panel.

-   **"'Fozzels SEO Fields REST API for WooCommerce' plugin is not installed or not active."**
    Yoast SEO is actief maar de Fozzels connecter plugin ontbreekt. Download en installeer deze van **app.fozzels.com** en activeer deze vervolgens in **Plugins**.

-   **"Yoast SEO is not active."**
    De connecter plugin is geïnstalleerd maar Yoast SEO zelf is niet actief. Ga naar **Plugins** en activeer **Yoast SEO**.

-   **"Your 'Fozzels SEO Fields REST API for WooCommerce' plugin is outdated."**
    U gebruikt een oudere versie van de connecter plugin. De integratie zal blijven werken, maar we raden u aan een update naar de nieuwste versie voor verbeterde prestaties en compatibiliteit. Download de nieuwste versie van **app.fozzels.com**.

-   **After enabling Yoast SEO, re-run Pull Stores/Websites and Pull Products.**
    Dit is nodig om `yoast_title`, `yoast_meta_description` en `yoast_focus_keyword` attributen in uw Fozzels catalogus te laden.

* * *

## AIOSEO (All in One SEO)

Deze berichten worden weergegeven wanneer de toggle **AIOSEO** is ingeschakeld in Fozzels. AIOSEO integratie vereist twee actieve plugins: **All in One SEO** en de **AIOSEO API Sync by Fozzels** connecter plugin.

> U kunt de Fozzels connecter plugin downloaden van **app.fozzels.com** of vanuit de setup gids in de Knowledge Base.

-   **"Both 'All in One SEO' and 'AIOSEO API Sync' plugins are required."**
    Geen van beide plugins wordt gedetecteerd. Installeer en activeer beide in uw WordPress admin panel.

-   **"'All in One SEO' is active but the 'AIOSEO API Sync' plugin is not installed."**
    AIOSEO is actief maar de Fozzels connecter plugin ontbreekt. Download en installeer deze van **app.fozzels.com** en activeer deze vervolgens in **Plugins**.

-   **"'AIOSEO API Sync' plugin is active but 'All in One SEO' is not active."**
    De connecter plugin is geïnstalleerd maar AIOSEO zelf is niet actief. Ga naar **Plugins** en activeer **All in One SEO**.

-   **"Your 'AIOSEO API Sync' plugin is outdated."**
    U gebruikt een oudere versie van de connecter plugin. De integratie zal blijven werken, maar we raden u aan een update naar de nieuwste versie. Download het van **app.fozzels.com**.

-   **After enabling AIOSEO, re-run Pull Products.**
    Dit is nodig om `_aioseo_title`, `_aioseo_description` en andere AIOSEO attributen in uw Fozzels catalogus te laden.

* * *

## Conflict: Yoast SEO en AIOSEO

**"Both Yoast SEO and All in One SEO are active at the same time. This will cause conflicts. Please disable one of them to continue."**

Yoast SEO en AIOSEO kunnen niet gelijktijdig worden gebruikt — in Fozzels of op uw WordPress site. Kies één SEO plugin en schakel de ander uit op beide zijden.

* * *

## Nog steeds problemen?

Als u de bovenstaande stappen hebt gevolgd en het probleem blijft bestaan, neem dan contact op met ons ondersteuningsteam op **[support@fozzels.com](mailto:support@fozzels.com)** of dien een ticket in via het Help Center. Voeg een screenshot van het foutbericht en uw integratiesinstellingen bij om ons sneller te helpen.
