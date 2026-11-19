---
id: '103000408983'
title: "4.1.2.a Comment configurer des Content Flows IA automatisés"
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Comment laisser un Content Flow générer et synchroniser automatiquement le
  contenu produit : vérifiez le Flow avant le lancement, définissez la limite
  quotidienne, l'approbation et les mises à jour à l'étape Launch, puis lancez
  le Flow.
keywords:
- flux de contenu
---

Un Content Flow automatisé génère chaque jour du contenu produit en arrière-plan et l'envoie à votre boutique. Vous n'avez pas à lancer les tâches vous-même.

Vous définissez l'automatisation à l'étape 6 d'un Content Flow, **Launch**. Pour une description des six étapes, consultez [4.1.2. Créer un Content Flow : les six étapes](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

## Étape 1 : vérifier le Flow avant le lancement

Faites ces trois vérifications avant de lancer le Flow. Elles évitent les erreurs.

1. **Vérifiez la sélection de produits.** À l'étape 2, **What and with what?**, assurez-vous que la sélection contient uniquement les produits que vous voulez traiter.
2. **Testez le prompt.** À l'étape 5, **Test**, générez des textes pour quelques produits réels. Assurez-vous que les textes et les scores sont corrects.
3. **Évitez la récursion.** N'utilisez pas comme source du prompt le champ dans lequel le Flow écrit. Par exemple, n'utilisez pas `product_description` comme entrée pour générer un nouveau `product_description`. Sinon, Fozzels peut générer le texte encore et encore.

## Étape 2 : définir l'automatisation à l'étape Launch

À l'étape 6, **Launch**, répondez à trois questions :

1. **How many products per day?** Sélectionnez 10, 25, 50 ou 100, ou saisissez votre propre nombre. La limite réduit les coûts et le travail de relecture. Quand Fozzels a terminé la sélection actuelle, le Flow prend automatiquement les nouveaux produits qui correspondent à la sélection.
2. **What happens with a new text?**
    - **I approve every text first** (recommandé) : les nouveaux textes vont dans votre liste de relecture. Fozzels n'envoie rien à votre boutique avant votre approbation.
    - **Straight to my shop** : Fozzels publie les textes automatiquement. Vous pouvez toujours les modifier ou revenir à la version précédente. Les textes que Fozzels marque comme suspects attendent toujours votre relecture.
3. **If a product changes later?** Activez l'interrupteur pour que Fozzels rédige automatiquement un nouveau texte quand un attribut utilisé par le prompt change dans votre boutique, par exemple la couleur ou la matière. Si l'interrupteur est désactivé, Fozzels rédige un texte pour un produit une seule fois.

Sous **Advanced settings**, vous pouvez aussi :

- définir le délai d'attente qui empêche d'autres Flows de générer à nouveau le même contenu : **Use default**, **Override** ou **Turn off**. Pour plus d'informations, consultez [4.4.1 Prevent Overlapping Content Generation](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).
- cliquer sur **Connect workflow** pour ajouter une action qui s'exécute après chaque texte, par exemple une traduction.

## Étape 3 : lancer le Flow

1. Cliquez sur **Launch flow**.

    Fozzels affiche le message "Your flow is running". Le Flow traite des produits chaque jour, jusqu'à la limite quotidienne, jusqu'à ce que tous les produits de la sélection soient terminés.

2. Pour lancer la génération immédiatement, ouvrez la page du Flow, cliquez sur le menu **…**, puis sur **Run Now**. Fozzels démarre immédiatement, même si le Flow a déjà atteint la limite quotidienne d'aujourd'hui.

Pour continuer la configuration plus tard, cliquez sur **Save as draft** au lieu de **Launch flow**.

## Règles et recommandations

- **Le Flow doit être actif.** Fozzels exécute uniquement les Flows actifs. Quand vous arrêtez un Flow, Fozzels arrête toutes les exécutions planifiées jusqu'à ce que vous relanciez le Flow.
- **Vous pouvez modifier un Flow actif.** Vos modifications s'appliquent à tous les nouveaux textes. Fozzels ne modifie pas les textes déjà générés, sauf si vous les générez à nouveau.
- **Les nouveaux produits s'ajoutent automatiquement.** Après chaque mise à jour du catalogue, Fozzels compare les produits de votre boutique avec la sélection du Flow. Les nouveaux produits qui correspondent à la sélection, par exemple 20 nouveaux produits dans une catégorie, entrent automatiquement dans le Flow.

## Articles associés

- [4.1.2. Créer un Content Flow : les six étapes](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.7.4 Suspicious Words & Phrases : contrôle qualité avancé du contenu](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)
- [3.5 Avertissement "Recursion detected" lors de la création d'un Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)
- [4.4.1 Fonction Prevent Overlapping Content Generation](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)
- [4.7.3 Balises HTML autorisées pour la génération de texte par IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
