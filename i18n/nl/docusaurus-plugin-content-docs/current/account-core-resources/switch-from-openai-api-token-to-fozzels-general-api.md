---
id: '103000357927'
title: 1.4.1. Overstap van OpenAI API-token naar Fozzels algemene API
sidebar_position: 6
slug: /account-core-resources/switch-from-openai-api-token-to-fozzels-general-api
description: We hebben de manier waarop Fozzels betalingen voor "tokens" van AI-modellen afhandelt, gewijzigd. We verzoeken alle gebruikers deze instelling vóór 1 augustus 2025 te wijzigen. Alstublieft
---

We hebben de manier waarop Fozzels betalingen voor "tokens" van AI-modellen afhandelt, gewijzigd.

We verzoeken alle gebruikers deze instelling vóór 1 augustus 2025 te wijzigen.

Neem alstublieft ongeveer 10 minuten de tijd om deze instelling in uw Fozzels-account te wijzigen.

Inhoudsopgave:

1.  Achtergrond
2.  Wijziging
3.  Voordelen
4.  ## Wat u stap voor stap moet doen

-   ### Betaling instellen

-   ### Verwijder uw huidige OpenAI-sleutel

5.  ### Klaar

## Waarom?

Fozzels is gestart met het automatisch genereren van inhoud voor u met behulp van de taalmodellen van OpenAI (momenteel GPT-4o).

Na het opzetten van een nieuw Fozzels-account hebben we onze gebruikers gevraagd ook een OpenAI-account in te stellen, hun creditcardgegevens daar in te voeren, een OpenAI API-sleutel te maken en die sleutel in Fozzels in te plakken.

Dat werkte allemaal erg goed -- maar had enkele nadelen:

1.  Het zou langer duren voordat gebruikers aan de slag konden gaan, omdat zij ook een account bij OpenAI moesten openen en iets "ingewikkelds" met het kopiëren van API-sleutels moesten doen.
2.  Nieuwe OpenAI-accounts hebben gebruiksbeperkingen (snelheidsbeperkingen, enz.), dus Fozzels-gebruikers konden niet profiteren van het in bulk aanmaken van productinhoud in grote hoeveelheden.
3.  Nieuwe OpenAI-accounts hebben beperkte modellen; dus gebruikers konden Fozzels niet altijd gebruiken om AI-afbeeldingen te genereren, bijvoorbeeld.
4.  We konden onze gebruikers niet gemakkelijk toegang geven tot AI-modellen van andere leveranciers, zoals Google (Gemini), Anthropic (Claude) of xAi (Grok).

## Wijziging

Om deze problemen op te lossen, heeft Fozzels de manier waarop we betalingen voor AI "tokens" afhandelen, gewijzigd.

In plaats van apart aan alle AI-leveranciers te betalen, betaalt u nu rechtstreeks aan Fozzels voor AI-gebruik -- en Fozzels betaalt voor uw AI-gebruik aan de AI-leveranciers voor u. Fozzels gebruikt [Stripe](https://stripe.com/nl/payments), een van 's werelds grootste online betalingsproviders, om financiële boekingen af te handelen.

## Voordelen

Dit biedt de volgende voordelen:

1.  Sneller en gemakkelijker onboarding voor nieuwe Fozzels-gebruikers;
2.  U kunt altijd inhoud voor veel producten genereren (geen limieten meer op accounts); omdat Fozzels "onbeperkte" accounts bij de AI-leveranciers heeft;
3.  U kunt afbeeldingsgeneratiemodellen in Fozzels gebruiken;
4.  U kunt kiezen uit meer AI-modellen dan alleen OpenAI (Google Gemini 2.5 Flash; xAi Grok 3; Anthropic Claude 4 Sonnet -- en meer zullen volgen);
5.  U kunt nu "websearch" inschakelen, wat betekent dat u de AI kunt laten zoeken op internet naar bijvoorbeeld ontbrekende gegevens, en die gegevens gebruiken om productgegevens of beschrijvingen te genereren.

U kunt momenteel kiezen uit de volgende AI-modellen:

![Alle AI-modellen beschikbaar in Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/AU9GwQ3QT_bYnbdVWdVFZXcOrtjOBOSAAQ.jpg)

##

## Wat u stap voor stap moet doen

### A) Betaling instellen

1.  Log in op uw Fozzels-account en klik op uw **gebruiksafbeelding** rechtsboven.
2.  Klik in het vervolgkeuzemenu op **Instellingen**.
3.  Klik in het menu Instellingen aan de linkerkant op [**Betalingen**](https://app.fozzels.com/user/settings/payments).
4.  U ziet het volgende scherm. Klik op de knop "**Nu krediet laden**".
    ![Fozzels betaalschemata](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/tcgrCp0izWkeJxIjlmzD6xS5OZByebIyHg.png)

5.  U ziet een pop-upvenster met een aanvraag voor een bedrag. Voer het bedrag in dat u aan uw saldo wilt toevoegen. De standaardwaarde is € 50, maar u kunt dit wijzigen als u wilt. Klik vervolgens op de knop "**Nu laden**".
    ![Pop-up Nu krediet laden](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/drZn1vvSyjH8rRfhLn8mWW_HuhAo2tTs-w.png)

6.  U wordt doorgestuurd naar de Stripe-betalingspagina, waar u uw betalingsgegevens kunt invoeren.
    Houd er rekening mee dat geen betalingsgegevens op Fozzels worden opgeslagen; alleen op Stripe.
    U kunt de volgende betalingsmethoden gebruiken: iDEAL, creditkaarten (VISA, American Express, Mastercard, Discover), Amazon Pay, Paypal, Revolut Pay en Bancontact.
    ![Stripe-betalingscherm](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/BRJcSSvdJ5LBFl1zVDZ0UyhLPh4URCTO1w.png)

7.  Vergeet niet -- als deze betaling voor uw bedrijfsaccount is -- ook uw **bedrijfsnaam** en **VAT-id** in te voeren.
    ![BTW-info toevoegen op Stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/ZlO4Se712OMvnGl-aiWPNytLfwhRuRKerQ.png)

8.  Na succesvolle betaling wordt u teruggeleidt naar Fozzels en ziet u uw huidige saldo op de pagina Betalingen.
    ![Bijgewerkt saldo op betalingspagina](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/Own2E9SNmWHQ1UHAoPh9oA1cXL0Sz8BkLQ.png)

9.  Vervolgens kunt u \[_optioneel_\], als u uw accountsaldo automatisch wilt "opladenhaar" wanneer uw saldo laag wordt, dit instellen door op de knop "**Instellingen voor opladingstegoed configureren**" te klikken. Op deze manier wordt de inhoudsgeneratie via de Flows die u hebt ingesteld, nooit onderbroken.
    Voer de bedragen in die u wilt instellen, schakel het selectievakje "_Ja, laad mijn kaart automatisch op wanneer mijn tegoedbalans onder een drempel valt_" in en klik op de knop **Opslaan**.
    ![Pop-up Instellingen voor automatisch opladinhaar](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/3BrEoNMQNNw7wOSkoZGXdLG3l9cyJwGeQ.png)

### B) Verwijder uw huidige OpenAI-sleutel

Nadat u uw betalingsgegevens hebt ingesteld, vergeet niet de huidige OpenAI API-sleutel **verwijderen** uit uw account.
Op deze manier zal Fozzels onze eigen API-sleutels gebruiken voor alle AI-leveranciers.

1.  Klik op "**OpenAI-token**" in het linker menu om dit te activeren.
    ![Fozzels-instellingenmenu](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/zFcW_bCeIp8XohHkBB2EQ8E7ZbEkvU1xTg.png)

2.  Selecteer uw token in het veld Token, **verwijder alles in het veld** en klik op de knop **Opslaan**.
    ![Fozzels OpenAI API-tokenveld](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/z6eQMCzEGgNDu4KJsBT_QlGBwDiOAHKsTg.png)

U bent nu klaar.

Prima! Goed gedaan.
Dank u en veel plezier met het gebruik van Fozzels.
