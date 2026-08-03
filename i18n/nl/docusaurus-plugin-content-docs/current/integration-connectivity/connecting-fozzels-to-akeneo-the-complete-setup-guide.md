---
id: '103000395378'
title: '2.7. Fozzels verbinden met Akeneo: De Complete Setup Gids'
sidebar_position: 17
slug: >-
  /integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide
description: >-
  Deze gids legt uit hoe u een tweerichtings verbinding tot stand kunt brengen
  tussen uw Akeneo PIM en Fozzels. De integratie vereist het maken van twee
  afzonderlijke verbindingen i
---

Deze gids legt uit hoe u een tweerichtings verbinding tot stand kunt brengen tussen uw Akeneo PIM en Fozzels. De integratie vereist het maken van twee afzonderlijke verbindingen in Akeneo - één om Fozzels gegevens in Akeneo in te laten sturen, en één om Akeneo gegevens naar Fozzels uit te laten voeren. Nadat beide verbindingen zijn gemaakt, koppelt u ze aan uw Fozzels account met behulp van de gegenereerde inloggegevens.

**Vereisten**

-   Een actief Akeneo account met administratortoegang
-   Een actief Fozzels account
-   Toegang tot het gedeelte Verbindingsinstellingen in Akeneo

**Deel 1: Akeneo Setup (Verbindingen maken)**

Stap 1: Inloggen en Navigeren naar Verbindingsinstellingen

1.  Open een browser en log in op uw **Akeneo dashboard** met uw administratorgegevens.
2.  Ga in de linkerzijbalk naar **Connect → Connection settings**.

Stap 2: Maak de "Data Source" Verbinding (Fozzels IN)

Deze verbinding stelt Fozzels in staat om gegevens **in** Akeneo in te sturen.

1.  Klik op de knop **Create** in de rechterbovenhoek.
2.  Vul de volgende velden in:
    -   **Label:** `Fozzels IN`
    -   **Code:** `fozzels_in`
    -   **Flow Type:** selecteer `Data source`
3.  Klik **Save**.
4.  Scroll naar beneden naar de **Permissions** sectie. Selecteer in het **Role** dropdown `Administrator`.
5.  Klik opnieuw op **Save**.
6.  Houd deze pagina open — u hebt de **Client ID**, **Secret**, **Username** en **Password** op het scherm nodig.

> **Tip:** Kopieer elke inloggegevens naar een tijdelijk tekstbestand, zodat u ze niet verliest wanneer u weg navigeert.

Stap 3: Maak de "Data Destination" Verbinding (Fozzels OUT)

Deze verbinding stelt Akeneo in staat om gegevens **naar** Fozzels uit te voeren.

1.  Ga terug naar **Connect → Connection settings** en klik op **Create**.
2.  Vul de volgende velden in:
    -   **Label:** `Fozzels OUT`
    -   **Code:** `fozzels_out`
    -   **Flow Type:** selecteer `Data destination`
3.  Klik **Save**.
4.  Stel onder **Permissions** de **Role** in op `Administrator`.
5.  Klik **Save**.
6.  Kopieer de **Client ID**, **Secret**, **Username** en **Password** voor deze verbinding.

> **Belangrijk:** Elke verbinding genereert zijn eigen unieke set inloggegevens. Zorg ervoor dat u beide sets appart kopieert en labelt — u moet elke in het juiste veld in Fozzels invoegen.

**Deel 2: Fozzels Activering**

Stap 4: Start een Nieuwe Integratie

1.  Log in op uw **Fozzels account**.
2.  Navigeer naar het tabblad **Integrations**.
3.  Klik op **Create New Integration**.
4.  Selecteer **Akeneo**.
    ![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/H4jUsBP_CVGytKdGvILnXxxrewyuDwsEwA.png)

Stap 5: Configuratievelden Invullen

Vul op de integratiesetup-pagina de volgende velden in:

-   **Name:** voer een beschrijvende naam in voor deze integratie (bijv. `Akeneo Connection`)
-   Uw website-**URL**
-   **OUT connection (Data FROM Akeneo):** plak de inloggegevens van de **Fozzels OUT** verbinding die u in Stap 3 hebt gemaakt
-   **IN connection (Data TO Akeneo):** plak de inloggegevens van de **Fozzels IN** verbinding die u in Stap 2 hebt gemaakt

![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/E3PznnpS3GxByBNHd8CfP3zkzZahhRaBWw.png)

Stap 6: Sla de Integratie Op

1.  Klik op de knop **Save** onderaan de pagina.

Uw Fozzels account is nu verbonden met Akeneo. Gegevens kunnen in beide richtingen stromen op basis van de verbindingen die u hebt geconfigureerd.

Als u problemen ondervindt tijdens de setup, neem dan contact op met ons ondersteuningsteam - we helpen graag.
