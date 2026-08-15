---
id: '103000369548'
title: 4.4.1 Voorkomen van overlappende inhoudsgenereratie. Globale preventfunctie.
sidebar_position: 13
slug: /content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function
description: De functie "Dubbele inhoudsgenering voorkomen met andere stromen" is cruciaal om ervoor te zorgen dat u inhoud niet twee keer voor hetzelfde product genereert wanneer het tot meerdere stromen behoort.
---

De functie **"Dubbele inhoudsgenering voorkomen met andere stromen"** is cruciaal om ervoor te zorgen dat u inhoud niet twee keer voor hetzelfde product genereert wanneer het tot meerdere stromen behoort. Dit helpt uw AI-gebruikskosten (tokens) optimaliseren.

## 1. Het hoofdstandaard (globale instelling)

Dit is de **globale instelling** die van toepassing is op alle uw stromen tenzij anders aangegeven. U stelt dit in onder: `Profiel` → `Instellingen` → `Inhoudsstroom`.

-   **Inhoud is nog niet gegenereerd:** Generatie is toegestaan **alleen als** inhoud voor dit product nog niet is aangemaakt door **welke** andere stroom ook. Dit is de strengste controle.

-   **Ouder dan:** U stelt een **tijdslimiet** in (bijv. 1 week). Generatie is toegestaan **als** de bestaande inhoud al eerder door een ander is gemaakt, maar **vóór** de ingestelde duur.
    ![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/Hgb-Xa4MFVO-KaMNOrtEtfyA1I8RT_6haA.png)

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/r-Ikv5eI5COJQMRwp9HXF1M2OOPYShjDXw.png)

## 1.1. De globale instellingen beheren (installatiestappen)

**Uw doel:** Het instellen of wijzigen van het hoofdstandaard dat alle stromen met de instelling `Overnemen` volgen.

**Stappen:**

1.  Navigeer naar **Globale instellingen** (`Profiel` → `Instellingen` → `Inhoudsstroom`).

2.  U beheert de globale regel met behulp van de schakelaar **"Duurlimiet gebruiken"**:

-   **Om de duurregel in te schakelen (Ouder dan):** **Zet de schakelaar "Duurlimiet gebruiken" AAN**, **voer de vereiste periodewaarde in** (bijv. 1 week), en **sla op**.

-   **Om de strengste regel in te stellen (Inhoud is nog niet gegenereerd):** **Zet de schakelaar "Duurlimiet gebruiken" UIT** en **sla op**.

-   _Resultaat:_ Alle stromen die de optie **Overnemen** gebruiken, zullen deze nieuwe beperking automatisch toepassen.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/et0MwVwvnIfg8GhM-81qMk3ADOAD3_M02g.png)

## 2. De regel voor een bepaalde stroom overschrijven (Praktische scenario's)

In de instellingen van elke afzonderlijke stroom (sectie **4 Automatisering**) besluit u of deze zich aan de globale instellingen zal houden of een uitzondering heeft:

-   Als u wilt dat de stroom alle duplicatieregels negeert (zelfs als de globale regel actief is), zie A.

-   Als u een aangepaste tijdslimiet wilt instellen (Override), zie B.

-   Als u alle globale duplicatieregels volledig wilt uitschakelen, zie C.

#### **Scenario A: Volledige generatiemachtiging (geen beperkingen) (Uitschakelen)**

**Uw doel:** U wilt dat de stroom alle duplicatieregels negeert (zelfs als de globale regel actief is).

**Stappen:**

1.  Ga naar de instellingen van de gewenste stroom (bijv. `Stroomwijzigen van product`).

2.  Navigeer naar sectie **4 Automatisering**.

3.  In de blok **"Dubbele inhoudsgenering voorkomen met andere stromen"** selecteert u de optie **Uitschakelen**.

4.  Sla wijzigingen op.

-   _Resultaat:_ Deze stroom genereert inhoud ongeacht of inhoud al van andere stromen bestaat.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/M18xs-NWnNKM3KW_n1iAHroIpfoIW3ztfg.png)

#### **Scenario B: Een aangepaste tijdslimiet instellen (Override)**

**Uw doel:** U wilt dat deze stroom een tijdslimiet heeft **anders** dan de globale instelling.

**Stappen:**

1.  Ga naar de instellingen van de gewenste stroom.

2.  In sectie **4 Automatisering** selecteert u de optie **Override**.

3.  Voer de vereiste tijdslimitwaarde in het veld dat verschijnt in (bijv. 1 uur).

4.  Sla wijzigingen op.

-   _Resultaat:_ De stroom zal **alleen** deze nieuwe, individuele regel gebruiken.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/chc6WFPZCDobr_ICKuYawfRnxRTy36Oi3g.png)

**Scenario C: Opnieuw beginnen (alle beperkingen verwijderen)**

**Uw doel:** U hebt besloten alle globale duplicatieregels uit te schakelen, waardoor alle stromen inhoud kunnen maken zonder periodegebaseerde beperkingen.

**Stappen:**

1.  Navigeer naar **Globale instellingen** (`Profiel` → `Instellingen` → `Inhoudsstroom`).

2.  **Deactiveer de schakelaar "Duurlimiet gebruiken"**.

3.  Klik op de knop **Opslaan**.

4.  _Resultaat:_ Alle stromen ingesteld op **Overnemen** beginnen met lopen **zonder duplicatiebeperking**, aangezien de globale regel effectief is uitgeschakeld. Als u wilt dat een stroom ingesteld op **Override** ook zonder beperkingen wordt uitgevoerd, **wijzig deze in Overnemen** of **schakel de beperking uit met Uitschakelen**.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/8rlkBmppY5nU7t7ZkdTHVSWoFeNWkYYOeA.png)

of

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/_nWCPZi_Y8CUrS6FiIQZPgxQ0eip7jdWeg.png)
