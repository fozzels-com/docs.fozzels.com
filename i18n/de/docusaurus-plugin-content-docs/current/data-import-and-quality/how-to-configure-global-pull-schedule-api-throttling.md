---
id: '103000408982'
title: 3.1.2 Konfigurieren des globalen Pull-Zeitplans & API-Drosselung
sidebar_position: 3
slug: /data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling
description: >-
  Bei der Verwaltung großer Katalogintegrationen ist die Kontrolle darüber, **wann** und **wie schnell** Fozzels Produktdaten aus Ihrer E-Commerce-Plattform importiert, entscheidend
---

Bei der Verwaltung großer Katalogintegrationen ist die Kontrolle darüber, **wann** und **wie schnell** Fozzels Produktdaten aus Ihrer E-Commerce-Plattform importiert, entscheidend um die Store-Leistung zu gewährleisten.

Mit den Einstellungen **Globaler Pull-Zeitplan** und **Pull-Drosselung** können Sie Synchronisierungszeiten planen, um Spitzenlastverkehr auf dem Shop zu vermeiden, und API-Pausen anpassen, um Rate-Limiting-Fehler zu verhindern.

##
Wo Sie diese Einstellungen finden

1.  Melden Sie sich bei **Fozzels** an.

2.  Gehen Sie zu **Konfiguration** für Ihre aktive Integration.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/THubHvyaWacy8WwlR5pMdGsfkPW-WZmcPw.png)

3.  Scrollen Sie nach unten zum Abschnitt **Globaler Pull-Zeitplan**.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/P9fCQ7RwxIcI7AqCgCPyUCa_PbCy3PI4Ww.png)

## 1\. Globaler Pull-Zeitplan

Der Globale Pull-Zeitplan ermöglicht es Ihnen, einen einzigen, übergeordneten Zeitpunkt für den automatischen Start der Katalogaktualisierungen durch Fozzels über Ihre gesamte Integration festzulegen.

### So funktioniert es:

-   **Standardzeitplan:** Jeder aktive Store in Ihrer Integration nutzt diesen geplanten Zeitpunkt standardmäßig.

-   **Store-Level-Außerkraftsetzungen:** Wenn Sie mehrere Storefronts betreiben (z. B. in verschiedenen Zeitzonen) und möchten, dass ein bestimmter Store zu einer anderen Zeit Daten abruft, können Sie den Schalter **Globalen Pull-Zeitplan überschreiben** in den individuellen Einstellungen dieses bestimmten Stores aktivieren.

> ? **Best Practice:** Legen Sie Ihren Pull-Zeitplan außerhalb der Spitzenlastzeiten fest (z. B. spät nachts oder früh morgens), wenn der Website-Verkehr am niedrigsten ist, um mögliche Belastungen auf Ihrem Store-Backend zu minimieren.

##
![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/fyrAZkK-2BnIOTIwMM32cLL1domLcyE4rg.png)
2\. Pull-Drosselung (Verzögerungen zwischen Anfragen)

API-Ratenlimits sind Beschränkungen, die von Plattformen wie Shopify, Magento, VTEX und anderen verhängt werden, um zu verhindern, dass Server durch zu viele Anfragen auf einmal überwältigt werden.

Wenn Fozzels Produktdaten zu schnell anfordert, könnte der Server Ihres Shops einen Fehler `429 Too Many Requests` zurückgeben. **Pull-Drosselung** löst dieses Problem durch kontrollierte Pausen zwischen Synchronisierungsvorgängen.

### Konfigurierbare Parameter:

-   **Verzögerung zwischen Seiten (`100–15.000 ms`):**

-   **Was es tut:** Fügt eine Pause (in Millisekunden) hinzu, nachdem Fozzels den Abruf jedes Batches/jeder Seite von Produkten beendet hat, bevor die nächste Seite angefordert wird.

    -   **Standard / Empfehlung:** `2000 ms` (2 Sekunden). Wenn Sie dieses Feld leer lassen, wird die Standard-Geschwindigkeit Ihrer Plattform verwendet.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qGkARWiCzUokf8PHJJpaRRRuivORM_DQIw.png)

-   **Verzögerung zwischen Anfragen (`100–15.000 ms`):**

-   **Was es tut:** Fügt eine Pause zwischen einzelnen API-Aufrufen hinzu, die während der Verarbeitung von Elementen auf einer Seite durchgeführt werden.

    -   **Standard / Empfehlung:** `200 ms`.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/mfKk2L61sB_fdhQoGQ9o3zxmuUyFh5m0fQ.png)

    -   Vergessen Sie nicht, Ihre Änderungen zu speichern - klicken Sie auf die Schaltfläche **SPEICHERN**.
**![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qdZ3Boaa9oUyxzPTfvoV8zbP2N_diVhAkw.png)**

> ⚠️ **Vorsicht:** Das Festlegen von Verzögerungen **unter** den empfohlenen Standard-Werten Ihrer E-Commerce-Plattform kann Rate-Limiting-Fehler vom Server Ihres Stores auslösen, die zu vorzeitigem Fehlschlag der Katalog-Pulls führen können. Wenn Sie fehlgeschlagene Pulls oder Rate-Limit-Warnungen erleben, erhöhen Sie diese Verzögerungswerte schrittweise, um Ihrem Store-Server mehr Zeit zwischen Anfragen zu geben.
