---
id: '103000367838'
title: '1.2.1. Profiel-, beveiligings- en meldingsinstellingen'
sidebar_position: 2
slug: /account-core-resources/profile-security-and-notifications-settings
description: >-
  Deze sectie beschrijft de functies voor het beheren van het gebruikersaccount,
  beveiligingsvoorkeuren, meldingsgedrag en persoonlijke API-sleutelconfiguratie
  binnen Fo
---

Deze sectie beschrijft de functies voor het beheren van het gebruikersaccount, beveiligingsvoorkeuren, meldingsgedrag en persoonlijke API-sleutelconfiguratie binnen Fozzels.
Voer de volgende link in om de sectie Instellingen te openen: `https://app.fozzels.com/user/settings/profile`.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Tc2cIujPZyK0-BRWvFlDJzAKwvlb1mCbBA.png)

### 1.1. Gebruikersinstellingen

De sectie Instellingen biedt toegang tot belangrijke configuratieopties waarmee gebruikers hun persoonlijke account kunnen beheren, beveiligingsvoorkeuren kunnen instellen en functies kunnen gebruiken die gezamenlijke workflows ondersteunen.

#### 1.1.1. Profielinstellingen

Menu → Instellingen → Profiel. Deze pagina wordt standaard geopend bij het openen van het menu Instellingen. Hier kunt u uw basisprofielgegevens en bedrijfsgegevens bewerken.

Bewerkbare velden bevatten: de weergavenaam van de gebruiker, e-mailadres, bedrijfsnaam, telefoonnummer (optioneel) en een korte beschrijving in het veld Over.
Klik op Opslaan om wijzigingen toe te passen.
Het systeem past alle wijzigingen tegelijk toe. Het is belangrijk op te merken dat het systeem geen waarschuwing geeft bij het navigeren met ongesaved wijzigingen, dus gebruikers moeten handmatig opslaan.
Het e-mailadres moet in een geldig formaat zijn.
Klik op de avatarafbeelding om het profielafbeelding bij te werken en het uploadvenster te openen. Ondersteunde formaten zijn JPG en PNG.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/n4NwWmNOPgAtHdMdd2XYw8IeaKeefh4uKw.png)

#### 1.1.2. Beveiligingsinstellingen

Menu → Instellingen → Beveiliging.
Deze pagina wordt gebruikt om het accountwachtwoord bij te werken.

De bewerkbare velden zijn Huidig wachtwoord, Nieuw wachtwoord en Bevestig nieuw wachtwoord.
Invoergedrag: Alle invoerwaarden zijn gemaskeerd (weergegeven als punten) en veldwaarden worden niet opgeslagen of in cache geplaatst.
**Klik op Bijwerken** om de wijzigingen toe te passen.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/4_vsO-7JKhQeaATz0rzs8X97nn-JDns8Iw.png)
Succesvolle update: Als het nieuwe wachtwoord wordt geaccepteerd, wordt bovenaan het scherm een groene succesmededeling weergegeven en het wachtwoord wordt onmiddellijk bijgewerkt voor toekomstige aanmeldingen.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Lv9g42HJ-ap_ArFPBPd0525XLLSRHyDzCA.png)
Foutafhandeling: Als het huidige wachtwoord onjuist is, of het nieuwe wachtwoord en bevestiging niet overeenkomen, verschijnt een foutbericht. In dit geval worden alle wachtwoordvelden automatisch gewist en moet de gebruiker de informatie opnieuw invoeren.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/6niT9qGiupLPyM0ijzwSXLeAhLO-NYguaA.png)

#### 1.1.3. Meldingsinstellingen

Menu → Instellingen → Meldingen. Gebruik deze sectie om e-mailmeldingen te beheren.

Deze sectie bevat twee selectievakjes:

-   Fozzels-e-mails toestaan: Als dit is uitgeschakeld, wordt geen productgerelateerde e-mailcommunicatie (bijvoorbeeld updates, systeemwaarschuwingen) verzonden. Als dit is ingeschakeld, gaat de gebruiker ermee akkoord deze e-mails te ontvangen.

-   Saldo-meldingen ontvangen: Als dit is uitgeschakeld, wordt geen e-mailcommunicatie verzonden. Als dit is ingeschakeld, gaat de gebruiker ermee akkoord meldingen te ontvangen wanneer het saldo 0 of minder is, met een herinnering om op te laden en door te gaan.
**Klik op Bijwerken** om voorkeuren op te slaan.

![](/img/kb/account-core-resources/profile-security-and-notifications-settings/JuH6V-gxtu1SYR1gzZ0qfO6fSEuVDSSVxQ.png)
1.1.4. OpenAI-tokeninstellingen

Menu → Instellingen → OpenAI-token. Deze sectie wordt gebruikt om de OpenAI API-sleutel voor tekst- en afbeeldingsgeneratie in te stellen en te beheren.

Het bewerkbare veld is Token, waar u uw persoonlijke of bedrijfs-OpenAI API-sleutel invoert.
Per account kan slechts één token tegelijk worden opgeslagen.
Het invoerveld is gewone tekst, dus het token is zichtbaar terwijl het wordt getypt en blijft zichtbaar na het opslaan.
Modellijst: Nadat u een geldig token hebt opgeslagen, verschijnt de lijst met beschikbare OpenAI-modellen hieronder.
Elk model bevat een naam en status (bijvoorbeeld ingeschakeld, uitgeschakeld, ongeldig).
**Gebruik** de **Vernieuwen**-knop om deze lijst indien nodig bij te werken.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/BR86j8Sx5F-7Oh8IQl62gSgp1Y-WnINnHQ.png)
Succesvol opgeslagen: Klik op Opslaan om het token in te dienen. Als het token geldig is, bevestigt een groene melding de update en wordt de modellijst dienovereenkomstig geladen.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Ex-tA3z01sWbqI0QlvqI_o7NICSECMzMRg.png)
Opmerkingen bij tokenvalidatie: Er kunnen verschillende problemen optreden bij het invoeren van een token, inclusief ongeldig formaat, verlopen of ingetrokken tokens, of validatiefouten in de backend. Als het token niet geldig is of niet kan worden geverifieerd, toont het systeem een passend foutbericht (bijvoorbeeld "Kan token niet valideren").
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/AAyYCYEC9SJuztUVuBCtVy_paCUppxN8iA.png)
In alle foutgevallen wordt het token niet opgeslagen en wordt het invoerveld automatisch gewist.
