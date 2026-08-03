---
id: '103000385832'
title: '2.5.2.  ACF-datasynchronisatie inschakelen: WordPress/WooCommerce-configuratie voor Fozzels'
sidebar_position: 8
slug: /integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels
description: De Fozzels - WooCommerce-integratie ondersteunt nu officieel Advanced Custom Fields (ACF)! Met deze functie kunt u unieke en uitgebreide productkenmerken synchroniseren
---

De **Fozzels - WooCommerce**-integratie ondersteunt nu officieel **Advanced Custom Fields (ACF)**!

Met deze functie kunt u unieke en uitgebreide productkenmerken (zoals technische specificaties, meertalige beschrijvingen of speciale parameters) synchroniseren die u via ACF toevoegt, zodat u meer gedetailleerde en competitieve productfeeds voor marktplaatsen kunt maken.

Voor succesvolle integratie zijn belangrijke configuratiestappen in zowel WordPress als Fozzels vereist.

###

## **Deel 1: Gegevens voorbereiden in WordPress (ACF en REST API)**

Voordat u ACF in Fozzels activeert, zorgt u ervoor dat uw WordPress en ACF correct zijn geconfigureerd om deze speciale gegevens via de REST API door te geven.

### Stap 1: Permanlinks controleren en configureren

Voor de REST API om correct te functioneren, moet de permalinkstructuur verschillend zijn van de standaardstructuur (plain).

1.  Meld u aan bij uw WordPress-beheerdervenster en ga naar **Instellingen** / **Permanlinks**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/UoAvhDX9e8L9BLo2aXURlvtkXJ3A1z5ToA.png)

2.  Kies een structuur die geen parameters gebruikt (de structuur **"Berichten naam"** wordt aanbevolen).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vbZGxNZnGc1GBmBD9QYCyV3_4CUkCjMRhA.png)

3.  Controleer of **v3** is geselecteerd in het veld **Versie aanvragen**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/KhP0PGNAaWcnzkLXTBB8yQ1tPbXLQjPhzA.png)

4.  Sla de wijzigingen op.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/yP1swQ74nSHYKF8pRpAgezDqHmxBh4nR-A.png)

###
Stap 2: Navigeren naar de ACF-veldgroep

1.  Ga in het WordPress-menu naar **ACF** / **Veldgroepen**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/a7TVqQW4iMXkGcmlP1WI8nouyni5HGoKsg.png)

2.  Klik op de naam van de veldgroep die de velden bevat die u wilt synchroniseren voor uw WooCommerce-producten (bijvoorbeeld **"Fozzels Beschrijving"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/GH8y_bXf1Lb2RnG-_VWVmrj4XKhaFuCnRg.png)

###
Stap 3: De veldgroep configureren voor API-toegang (cruciale stap)

Controleer in het venster **Veldgroep bewerken** de locatieregels en schakel API-toegang in.

#### 3.1. Locatieregels controleren

1.  Zorg ervoor dat op het tabblad **Locatieregels** de regel als volgt is ingesteld: **Berichttype** _is gelijk aan_ **Product**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/BNEJu6CBt2NzH17U0EzeWONrRHVf2l2Jkw.png)

#### 3.2. REST API en groep activeren

1.  Ga naar het tabblad **Groepsinstellingen**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/Nd2g7ccKjN6_POwgJhmMzMceFkkV0h2hxw.png)

2.  Zorg ervoor dat beide schakelaars zijn ingeschakeld (ingesteld op **AAN**):

-   **Actief**

    -   **Weergeven in REST API**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/ZJ8EJ6QyJdSfjnZQSXdDXHEAvHmtDBbEKg.png)**

3.  Sla de wijzigingen op door op **Bijwerken** of **Publiceren** te klikken.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/lIgfpHeR7YI8Bf6W-4UvdIqtW2AQz9kqcw.png)

###
Stap 4: ACF REST API-versie controleren

Als u een extra plugin gebruikt om ACF in de REST API te integreren (zoals `ACF to REST API`), moet u ervoor zorgen dat de geselecteerde versie compatibel is met Fozzels.

1.  Ga naar **Instellingen** / **Permanlinks** / **ACF to REST API**.

2.  Controleer of **v3** is geselecteerd in het veld **Versie aanvragen**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/13tEu-kDRtYwLsGbVQs5J19h9pA5I08Jlw.png)

    > **Fozzels-vereiste:** De integratie vereist **v3 REST API-ondersteuning**.
    >
    >

3.  Sla de instellingen op.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vdFx1XFzfwdgC4rWC4PSPmvnyjq5XMPclg.png)

## **Deel 2: ACF in Fozzels activeren**

Nadat u de voorbereiding in WordPress hebt voltooid, activeert u de functie in uw Fozzels-integratie-instellingen.

1.  Meld u aan bij uw Fozzels-account en bewerk uw WooCommerce-integratie.

2.  Zoek in het gedeelte **Configuratie** de schakelaar **"ACF (Advanced Custom Fields) inschakelen"**.

3.  **Activeer deze** (zet deze op **AAN**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/0_d_0BMKbVwJo7hW9vj3FexWoHpj5ziX7w.png)

> **Belangrijk!** Let op de vereisten die door Fozzels zijn bevestigd:
>
> -   ACF-plugin is geïnstalleerd en geactiveerd in WordPress.
>
> -   REST API is ingeschakeld in ACF Field Group Settings (Weergeven in REST API: Ja).
>
> -   ACF versie 6.x of hoger met v3 REST API-ondersteuning.
>

4.  Klik **Opslaan** onderaan de pagina.

## **Deel 3: ACF-velden gebruiken in de flow en catalogusupdate**

Fozzels behandelt ACF-attributen als **regelmatige productattributen** en u werkt ermee met behulp van de standaardflow.

1.  Nadat u de schakelaar **"ACF inschakelen"** hebt geactiveerd en op **"Opslaan"** hebt geklikt, moet u **het gegevensinvoerproces uitvoeren**:

-   **Als u een bestaande integratie bijwerkt:** Start de product- en attributenpool opnieuw. Dit vernieuwt de gegevens in de Fozzels-catalogus en importeert de nieuwe ACF-velden.

    -   **Als dit uw eerste integratie is:** Voer eenvoudig de productpool uit volgens de algemene integratiesetupregels.
        ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/EYnK1qxy-p-r_jWSJDDxh9P0gDCTf_BU1g.png)

2.  Nadat de pool met succes is voltooid, gaat u naar sectie **3 Attributen**, controleert u nieuwe attributen en hun configuraties**.**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/4iRp-AUe2mr4IFsN_I9b6AEtM5f9iGTgtA.png)**
    Als u vragen hebt of hulp nodig hebt bij het instellen van de ACF-integratie, helpt ons ondersteuningsteam u graag! Neem contact met ons op via **support@fozzels.com**.
