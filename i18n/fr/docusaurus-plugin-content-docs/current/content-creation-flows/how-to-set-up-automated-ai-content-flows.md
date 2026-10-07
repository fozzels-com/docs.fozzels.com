---
id: '103000408983'
title: "4.1.2.a Comment configurer des Flows de contenu IA automatisés"
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Les Content Flows automatisés de Fozzels vous permettent de générer et de
  synchroniser automatiquement le contenu produit en arrière-plan, sans avoir à
  déclencher
keywords:
- flux de contenu
---

Les Content Flows automatisés de Fozzels vous permettent de générer et de synchroniser automatiquement le contenu produit en arrière-plan, sans avoir à déclencher les tâches manuellement chaque jour.

Ce guide couvre tout ce que vous devez savoir pour configurer, tester et exécuter des flux automatisés en toute sécurité et de manière efficace.

## Étape 1 : liste de vérification avant le lancement

Avant d'activer l'automatisation, nous vous recommandons vivement d'effectuer ces trois vérifications afin d'éviter les erreurs :

1.  **Vérifiez la sélection des produits :** contrôlez à nouveau vos filtres dans la configuration du flux pour vous assurer qu'il cible exactement l'ensemble de produits que vous souhaitez traiter.

2.  **Testez votre prompt :** lancez une génération de test avec **Save & Preview** pour confirmer que le résultat répond à vos exigences de qualité.

3.  **Évitez la récursivité du prompt :** assurez-vous que votre prompt ne fait pas référence à l'attribut exact dans lequel vous écrivez (par exemple, utiliser `product_description` comme entrée pour générer une nouvelle `product_description`). Cela évite les boucles de génération récursives.

## Étape 2 : configurer les paramètres d'automatisation

Accédez à l'onglet **Automation** dans les paramètres de votre Flow et configurez les paramètres suivants :

-   **Daily Processing Limit :** définissez le nombre de produits à traiter chaque jour (jusqu'à **500 produits par flux actif et par jour**). Cette limite garantit une exécution régulière et fiable sur chaque cycle de 24 heures.

-   **Fully Automatic Mode (facultatif) :**

-   **Activé :** le contenu généré est automatiquement approuvé et synchronisé avec votre boutique en ligne (à l'exception des éléments signalés par des mots suspects ou des contrôles de validation).

-   **Désactivé :** le contenu est généré automatiquement, mais reste en attente pour être vérifié et approuvé manuellement avant la synchronisation.

-   **Create New Content When Attribute Values Change (facultatif) :** lorsque cette option est activée, Fozzels régénère automatiquement le contenu chaque fois qu'un attribut utilisé dans votre prompt est mis à jour dans votre boutique. Votre contenu reste ainsi à jour sans aucun travail manuel.

## Étape 3 : lancer votre flux

Une fois vos paramètres configurés, activez le flux et choisissez l'une des deux options de lancement :

### Option A : Plan & Close (recommandée pour les batchs en arrière-plan)

Cliquez sur **Plan & Close**. Le flux passe au statut planifié et démarre automatiquement le traitement après la prochaine mise à jour nocturne planifiée du catalogue, puis se poursuit quotidiennement jusqu'à ce que tous les produits correspondants soient traités.

### Option B : Run Now (démarrage immédiat)

Cliquez sur **Run Now**. Fozzels traite immédiatement les **10 premiers produits** pour un aperçu instantané. Après ce premier batch, le flux poursuit son parcours automatisé quotidien planifié, conformément à la limite quotidienne que vous avez configurée.

## Règles clés et bonnes pratiques

-   **Statut Active requis :** pour qu'un flux planifié s'exécute chaque jour, il doit rester **Active**. La désactivation du flux met en pause toutes les exécutions planifiées jusqu'à sa réactivation.

-   **Modification des flux actifs :** vous pouvez modifier à tout moment les règles du prompt ou les paramètres d'un flux planifié. Les modifications s'appliquent à toutes les générations futures, tandis que le contenu déjà généré reste inchangé, sauf si vous le régénérez manuellement.

-   **Sélection dynamique des produits :** les flux planifiés actifs évaluent automatiquement le catalogue de votre boutique après chaque synchronisation nocturne. Si de nouveaux produits correspondent aux filtres de votre flux (par exemple, 20 nouveaux articles ajoutés à une catégorie), ils sont automatiquement intégrés au flux pour être traités.

## Articles d'aide associés

-   **Mots suspects et contrôle qualité :** _[4.7.4 Suspicious Words & Phrases: Advanced Content Quality Control](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)_

-   **Éviter les avertissements de récursivité :** _[3.5 "Recursion detected" warning when creating a Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)_

-   **Éviter les chevauchements de flux :** _[4.4.1 Prevent Overlapping Content Generation function](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)_

-   **Règles de formatage HTML :** _[4.7.3 Allowed HTML Tags for AI Text Generation](/content-creation-flows/allowed-html-tags-for-ai-text-generation)_
