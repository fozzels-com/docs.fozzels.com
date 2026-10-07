---
id: '103000406129'
title: >-
  4.1.2.b Pourquoi le contenu généré diffère-t-il entre la Preview et le
  résultat final ?
sidebar_position: 4
slug: >-
  /content-creation-flows/why-does-the-generated-content-differ-between-the-preview-and-the-final-result
description: >-
  Question : pourquoi le contenu affiché dans la Preview diffère-t-il du contenu
  finalement synchronisé avec le site web ? Réponse : ce comportement est
  normal
---

## Question

Pourquoi le contenu affiché dans la **Preview** diffère-t-il du contenu finalement synchronisé avec le site web ?

## Réponse

Ce comportement est normal.

La **Preview** (disponible après avoir cliqué sur **Save & Preview**) n'est **pas** le contenu généré final. Il s'agit d'une génération de test pour un seul produit, qui vous permet de :

-   vérifier que le prompt est correctement configuré ;
-   examiner le type et la qualité du contenu produit par le prompt ;
-   effectuer des ajustements avant de lancer le flux complet.

Lorsque vous démarrez le flux réel, Fozzels envoie de **nouvelles requêtes d'IA** pour chaque produit.

Bien que les données d'entrée (attributs du produit, prompt et paramètres) restent identiques, l'IA génère une nouvelle réponse pour chaque requête. Comme le contenu généré par l'IA est non déterministe, le résultat peut varier entre la Preview et la génération finale.

## Où trouver le contenu généré final ?

Le contenu réellement généré et synchronisé avec votre site web est disponible dans :

-   **Batch List** – pour l'exécution d'un flux donné.
-   **Daily Total Batch List** – pour l'ensemble du contenu généré dans tous les flux.

Ces rapports contiennent le résultat final envoyé lors de l'exécution du flux et doivent être utilisés pour la vérification à la place de la Preview.

## Résumé

-   **Preview** = une génération de test pour valider le prompt.
-   **Exécution du flux** = une nouvelle génération d'IA pour chaque produit.
-   De légères différences entre la Preview et le contenu final synchronisé sont normales.
-   Comparez toujours votre site web avec le contenu affiché dans **Batch List** ou **Daily Total Batch List**, car ceux-ci contiennent les résultats réellement synchronisés.
