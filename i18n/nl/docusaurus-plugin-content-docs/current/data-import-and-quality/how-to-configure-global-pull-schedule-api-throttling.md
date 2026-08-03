---
id: '103000408982'
title: 3.1.2 Hoe u het globale Pull-schema en API-beperking instelt
sidebar_position: 3
slug: /data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling
description: Bij het beheren van grote catalogusintegraties is het controleren van wanneer en hoe snel Fozzels productgegevens van uw e-commerceplatform importeert van cruciaal belang voor het handhaven van
keywords:
- ophalen
---

Bij het beheren van grote catalogusintegraties is het controleren van **wanneer** en **hoe snel** Fozzels productgegevens van uw e-commerceplatform importeert, essentieel voor het handhaven van winkelprestaties.

Met de instellingen **Global Pull Schedule** en **Pull Throttling** kunt u synctijdstippelingen plannen om piekverkeer in de winkel te voorkomen en API-pauzes aanpassen om throttlingfouten te voorkomen.

##
Waar u deze instellingen vindt

1.  Meld u aan bij **Fozzels**.

2.  Ga naar **Configuration** voor uw actieve integratie.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/THubHvyaWacy8WwlR5pMdGsfkPW-WZmcPw.png)

3.  Scroll omlaag naar de sectie **Global Pull Schedule**.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/P9fCQ7RwxIcI7AqCgCPyUCa_PbCy3PI4Ww.png)

## 1\. Globaal Pull-schema

Met het globale Pull-schema kunt u één moment instellen voor Fozzels om automatisch catalogi-updates in uw volledige integratie te beginnen.

### Hoe het werkt:

-   **Standaardschema:** Elke actieve winkel in uw integratie gebruikt standaard dit geplande moment.

-   **Overrides op winkelniveau:** Als u meerdere winkels runt (bijv. in verschillende tijdzones) en wilt dat een bepaalde winkel gegevens op een ander moment ophaalt, kunt u de knop **Overwrite Global Pull Schedule** inschakelen in de afzonderlijke instellingen van die winkel.

> ? **Best practice:** stel uw Pull-schema in op rustige uren (bijv. laat in de avond of vroeg in de ochtend) als het websiteverkeer het laagst is om mogelijke belasting op de backend van uw winkel te minimaliseren.

##
![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/fyrAZkK-2BnIOTIwMM32cLL1domLcyE4rg.png)
2\. Pull Throttling (vertragingen tussen aanvragen)

API-tarieflimieten zijn beperkingen die door platforms zoals Shopify, Magento, VTEX en anderen worden ingesteld om te voorkomen dat servers worden overspoeld door te veel aanvragen tegelijk.

Als Fozzels productgegevens te snel aanvraagt, retourneert de server van uw winkel mogelijk een `429 Too Many Requests`-fout. **Pull Throttling** lost dit op door gecontroleerde pauzes tussen synchronisatiebewerkingen toe te voegen.

### Configureerbare parameters:

-   **Vertraging tussen pagina's (`100–15,000 ms`):**

-   **Wat dit doet:** Voegt een pauze toe (in milliseconden) nadat Fozzels klaar is met het ophalen van elke batch/pagina met producten voordat u om de volgende pagina vraagt.

    -   **Standaard / aanbeveling:** `2000 ms` (2 seconden). Als u dit leeg laat, wordt uw platform standaardsnelheid gebruikt.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qGkARWiCzUokf8PHJJpaRRRuivORM_DQIw.png)

-   **Vertraging tussen aanvragen (`100–15,000 ms`):**

-   **Wat dit doet:** Voegt een pauze in tussen afzonderlijke API-aanroepen die worden gedaan tijdens het verwerken van items op een pagina.

    -   **Standaard / aanbeveling:** `200 ms`.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/mfKk2L61sB_fdhQoGQ9o3zxmuUyFh5m0fQ.png)

    -   Vergeet niet uw wijzigingen op te slaan - klik op de knop **SAVE**.
**![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qdZ3Boaa9oUyxzPTfvoV8zbP2N_diVhAkw.png)**

> ⚠️ **Voorzichtig:** het instellen van vertragingen **onder** de standaardwaarden die door uw e-commerceplatform worden aanbevolen, kan throttlingfouten van uw winkelserver triggeren, waardoor kataloguspulls voortijdig kunnen mislukken. Als u mislukte pulls of throttleringwaarschuwingen ervaart, verhoogt u deze vertragingswaarden geleidelijk om uw winkelserver meer tijd tussen aanvragen te geven.
