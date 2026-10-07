---
id: '103000376412'
title: >-
  4.7.2 Actions de masse et contrôle opérationnel dans les Batch Lists / Daily
  Total Batch List
sidebar_position: 19
slug: >-
  /content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list
description: >-
  Gérer le contenu avec les actions de masse. Les Dashboards (ou Batch List)
  sont votre outil principal pour gérer rapidement le contenu. Cette
  fonctionnalité d'actions de masse est disponible
keywords:
- liste des lots
---

Gérer le contenu avec les actions de masse. Les Dashboards (ou Batch List) sont votre outil principal pour gérer rapidement le contenu. **Cette fonctionnalité d'actions de masse est disponible à la fois dans la vue d'ensemble Daily Total Batch List et dans la vue détaillée Batch List.** Avec la fonction **Mass Actions**, vous pouvez appliquer simultanément à un grand nombre de produits des opérations essentielles telles que la confirmation, la régénération et la synchronisation. Vous gagnez ainsi un temps considérable, car il n'est plus nécessaire de traiter chaque élément individuellement.

## Exécuter des actions de masse

1\. Mécanisme de sélection : pour lancer une action de masse, vous devez d'abord sélectionner les éléments. Utilisez la case à cocher principale pour ouvrir les options du menu déroulant :

-   Individual Selection : utilisez la case à cocher à l'extrême gauche de chaque ligne pour sélectionner des éléments précis.

-   Select All : sélectionne **tous** les éléments correspondant aux filtres actuels, quelle que soit la page.

-   Deselect All : efface la sélection sur l'ensemble de la liste.

-   Select All on This Page : sélectionne tous les éléments actuellement affichés dans le tableau.

-   Deselect All on This Page : efface la sélection uniquement sur la page en cours.

![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/TAT_uWcG5-SzeI8SRjjmN51nhZWuNPhNqw.png)
2\. Actions disponibles : après avoir sélectionné des éléments, le **menu Actions** devient actif et propose les fonctions suivantes pour le traitement par batch :

-   **Show Selected** : cette action filtre la grille de produits pour n'afficher que les éléments actuellement sélectionnés, ce qui permet une vérification ciblée avant d'effectuer des actions groupées.

-   **Sync Generated Content** : cette action lance le transfert automatique de tout le contenu finalisé des produits sélectionnés vers votre plateforme e-commerce connectée, sans déclencher de nouveau cycle de génération.

-   **Confirm all, Save & Sync** : cette action confirme simultanément la qualité du contenu sélectionné et lance sa synchronisation immédiate vers la boutique e-commerce intégrée.

-   **Regenerate, Save & Sync** : cette action lance une nouvelle demande de génération de contenu pour les produits sélectionnés et programme automatiquement leur synchronisation une fois la génération réussie.

![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/6chuzawhzMkzp4kjQAs-Xh2lfJQ8D0uTnw.png)

## Gérer l'espace de travail ciblé ("Show Selected")

La fonction **"Show Selected"** est un outil essentiel pour examiner et préparer des sous-ensembles de données spécifiques.

-   Espace de travail ciblé : l'activation de **"Show Selected"** isole les éléments actuellement sélectionnés dans une vue de tableau distincte, créant ainsi un espace de travail ciblé.

-   Conservation de toutes les fonctionnalités : même dans ce mode isolé, vous conservez toutes les fonctions du tableau standard, notamment le filtrage supplémentaire, l'affichage des détails et l'exécution d'actions de masse sur le sous-ensemble de données, plus restreint. Cela permet une sélection et un traitement en plusieurs étapes.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/83gkMs5df4-VpiuZavFc2jvbQWWHXo5BwQ.png)

## Recommandations : optimiser la gestion des erreurs et des avertissements

Nous recommandons d'utiliser la fonction Mass Actions non seulement pour l'approbation standard du contenu, mais aussi pour corriger rapidement les erreurs.

-   Utiliser les filtres : vous pouvez utiliser le filtre **"Display only with errors"** ou filtrer les **résultats de contenu** ayant reçu des avertissements ou des erreurs (en consultant les indicateurs "Warning Count" et "Failed Count" dans la vue d'ensemble quotidienne).
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/Q-x6xQXNSMvvctnZfgceHCf1568U90a42A.png)

-   Régénération rapide : après avoir appliqué le filtre et sélectionné les éléments problématiques, utilisez l'action **"Regenerate, Save & Sync"** pour relancer efficacement le processus de génération de tous les éléments défectueux en une seule fois.

## Garde-fous opérationnels et contrôle de la logique des Flows

Un système de contrôle en plusieurs étapes est mis en place avant l'exécution des actions de masse gourmandes en ressources, afin de garantir l'exactitude et d'éviter les dépenses involontaires :

-   Fenêtre de confirmation obligatoire : avant l'exécution d'actions telles que "Resync Generated Content", "Confirm & Synchronize" ou "Regenerate & Synchronize", une fenêtre d'avertissement apparaît et exige votre confirmation explicite.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/XdxTZ96w4KYIJMlmO4Q1e0OGo9Lp4moHMA.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/QtxE2PertdWwBPbWXypF36AadNNOWCYfQ.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/WJXrUQG2D70RbZ2Zt2nXR284tuODnhGu_w.png)

-   Note sur la logique des Flows : ces fenêtres contiennent une note essentielle concernant le comportement de synchronisation attendu selon le type de Flow :

    -   Le contenu des Fully Automated Flows sera approuvé automatiquement dès sa génération.
        ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/K8O5z-M1sAS6I6awArA51TqfE2SC1Yfbtw.png)

-   Le contenu des Standard Flows sera uniquement régénéré et nécessitera ensuite une approbation manuelle avant que la synchronisation soit autorisée.

-   Vérification des ressources : le système vérifie l'état opérationnel du Flow et de l'intégration avant de lancer toute action de masse : la génération ne démarre pas si le Flow source est inactif, et la synchronisation ne s'exécute pas si l'intégration cible est inactive.
