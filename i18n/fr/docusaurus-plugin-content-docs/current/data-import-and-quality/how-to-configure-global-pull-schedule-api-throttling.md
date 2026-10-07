---
id: '103000408982'
title: "3.1.2 Comment configurer le Global Pull Schedule et l'API Throttling"
sidebar_position: 3
slug: /data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling
description: >-
  Lors de la gestion d'intégrations de catalogues volumineux, contrôler quand et
  à quelle vitesse Fozzels importe les données produit depuis votre plateforme
  e-commerce est essentiel pour préserver les perfor
---

Lors de la gestion d'intégrations de catalogues volumineux, contrôler **quand** et **à quelle vitesse** Fozzels importe les données produit depuis votre plateforme e-commerce est essentiel pour préserver les performances de votre boutique.

Grâce aux paramètres **Global Pull Schedule** et **Pull Throttling**, vous pouvez planifier les horaires de synchronisation pour éviter les pics de trafic de la boutique et ajuster les pauses entre les appels API afin d'éviter les erreurs de limitation de débit.

## Où trouver ces paramètres

1.  Connectez-vous à **Fozzels**.

2.  Allez dans **Configuration** pour votre intégration active.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/THubHvyaWacy8WwlR5pMdGsfkPW-WZmcPw.png)

3.  Faites défiler la page jusqu'à la section **Global Pull Schedule**.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/P9fCQ7RwxIcI7AqCgCPyUCa_PbCy3PI4Ww.png)

## 1\. Global Pull Schedule

Le Global Pull Schedule vous permet de définir une heure principale unique à laquelle Fozzels commence automatiquement à récupérer les mises à jour du catalogue pour l'ensemble de votre intégration.

### Fonctionnement :

-   **Planning par défaut :** chaque boutique active de votre intégration utilise par défaut cet horaire planifié.

-   **Dérogations au niveau de la boutique :** si vous exploitez plusieurs boutiques en ligne (par exemple dans des fuseaux horaires différents) et souhaitez qu'une boutique précise récupère les données à un autre moment, vous pouvez activer le commutateur **Overwrite Global Pull Schedule** dans les paramètres individuels de cette boutique.

> ? **Bonne pratique :** programmez votre récupération des données en dehors des heures de pointe (par exemple tard le soir ou tôt le matin), lorsque le trafic du site est au plus bas, afin de réduire toute charge potentielle sur le back-end de votre boutique.

![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/fyrAZkK-2BnIOTIwMM32cLL1domLcyE4rg.png)

## 2\. Pull Throttling (délais entre les requêtes)

Les API Rate Limits sont des restrictions imposées par des plateformes comme Shopify, Magento, VTEX ou d'autres afin d'éviter que les serveurs ne soient submergés par trop de requêtes à la fois.

Si Fozzels demande les données produit trop rapidement, le serveur de votre boutique peut renvoyer une erreur `429 Too Many Requests`. Le **Pull Throttling** résout ce problème en ajoutant des pauses contrôlées entre les opérations de synchronisation.

### Paramètres configurables :

-   **Delay between pages (`100–15,000 ms`) :**

-   **Fonction :** ajoute une pause (en millisecondes) une fois que Fozzels a fini de récupérer chaque batch/page de produits, avant de demander la page suivante.

    -   **Valeur par défaut / recommandation :** `2000 ms` (2 secondes). Si vous laissez ce champ vide, la vitesse par défaut de votre plateforme est utilisée.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qGkARWiCzUokf8PHJJpaRRRuivORM_DQIw.png)

-   **Delay between requests (`100–15,000 ms`) :**

-   **Fonction :** ajoute une pause entre les appels API individuels effectués lors du traitement des éléments d'une page.

    -   **Valeur par défaut / recommandation :** `200 ms`.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/mfKk2L61sB_fdhQoGQ9o3zxmuUyFh5m0fQ.png)

    -   N'oubliez pas d'enregistrer vos modifications : cliquez sur le bouton **SAVE**.
**![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qdZ3Boaa9oUyxzPTfvoV8zbP2N_diVhAkw.png)**

> ⚠️ **Attention :** définir des délais **inférieurs** aux valeurs par défaut recommandées par votre plateforme e-commerce peut déclencher des erreurs de limitation de débit de la part du serveur de votre boutique, ce qui peut entraîner l'échec prématuré des récupérations du catalogue. Si vous constatez des échecs de récupération ou des avertissements de limitation de débit, augmentez progressivement ces valeurs de délai afin de laisser plus de temps au serveur de votre boutique entre les requêtes.
