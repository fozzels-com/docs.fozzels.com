---
title: 4.1.2.c Comment synchroniser le contenu généré vers toutes les vues de boutique dans Magento 2
sidebar_position: 4.5
slug: /content-creation-flows/sync-generated-content-to-all-store-views-magento-2
description: >-
  Lorsque cette option est activée, chaque envoi du Flow enregistre le texte
  généré dans la vue de boutique du Flow et comme valeur par défaut du produit
  pour toutes les vues de boutique dans Magento.
---

## Ce que fait cette option

Lorsque cette option est activée, chaque envoi du Flow enregistre le texte généré deux fois : dans la vue de boutique (Store View) du Flow, et comme valeur par défaut du produit pour **toutes les vues de boutique** (All Store Views) dans Magento.

Toute vue de boutique qui n'a pas sa propre valeur pour cet attribut affiche immédiatement le nouveau texte. Une vue de boutique dont la valeur propre est définie dans Magento continue d'afficher son propre texte.

Cette option n'est disponible que pour les intégrations Magento 2.

## Quand l'utiliser

Activez-la lorsque plusieurs vues de boutique doivent afficher le même texte et que vous ne souhaitez pas exécuter un Flow distinct pour chacune d'elles. Cas typique : deux vues de boutique ou plus dans la même langue, par exemple une boutique principale et une boutique outlet.

Laissez-la désactivée lorsque vos vues de boutique utilisent des langues différentes ou nécessitent des textes différents. Dans ce cas, exécutez un Flow distinct pour chaque vue de boutique, comme auparavant.

## Comment l'activer

1.  Ouvrez le Flow et accédez à l'étape **4 Automation**.

2.  Cochez **Also save as the default value for all store views**. Une courte explication apparaît sous la case à cocher.

3.  Enregistrez le Flow.

L'option s'applique à chaque envoi de ce Flow : un envoi manuel après relecture, un envoi entièrement automatique et **Synchronize again**. Un Flow à plusieurs attributs synchronise toujours tous ses attributs ensemble.

![La case à cocher « Also save as the default value for all store views » à l'étape 4 Automation](/img/kb/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/01-automation-default-value-checkbox.png)

## Fonctionnement des valeurs par vue de boutique

Dans Magento, un attribut produit possède une valeur par défaut (affichée dans la portée **All Store Views**) et peut avoir sa propre valeur dans chaque vue de boutique. Sur la page du produit, réglez le **Scope** sur une vue de boutique : si **Use Default Value** est coché sous un champ, cette vue de boutique affiche la valeur par défaut. S'il est décoché, la vue de boutique a sa propre valeur et ignore la valeur par défaut.

Voici l'effet d'un envoi, avec un Flow sur Default Store View et une boutique comptant deux autres vues de boutique :

| Vue de boutique | Avant l'envoi | Après l'envoi | Use Default Value |
| --- | --- | --- | --- |
| All Store Views (valeur par défaut) | Ancien texte | **Nouveau texte** | — |
| Default Store View (celle du Flow) | Ancien texte | **Nouveau texte**, enregistré comme valeur propre | Décoché |
| Vue de boutique B, sans valeur propre | Ancien texte (hérité) | **Nouveau texte** (hérité) | Coché |
| Vue de boutique C, avec valeur propre | Son propre texte | Son propre texte, inchangé | Décoché |

**Pour qu'une vue de boutique affiche le nouveau texte**, ouvrez le produit dans Magento, réglez le Scope sur cette vue de boutique, cochez **Use Default Value** pour l'attribut et enregistrez. Dès lors, elle suit la valeur par défaut.

## Une seule vue de boutique par attribut

Seuls les Flows d'une seule vue de boutique peuvent enregistrer un attribut donné comme valeur par défaut. Cela empêche les Flows de différentes vues de boutique d'écraser mutuellement le texte par défaut.

*   **Plusieurs Flows de la même vue de boutique** peuvent avoir l'option activée pour le même attribut.
*   **Des Flows de vues de boutique différentes** ne peuvent avoir l'option activée que pour des attributs différents. Par exemple, un Flow sur la vue de boutique A synchronise la description, et un Flow sur la vue de boutique B synchronise le meta title.

Si vous activez l'option pour un attribut qu'un Flow d'une autre vue de boutique enregistre déjà comme valeur par défaut, le Flow n'est pas enregistré et affiche cette erreur :

> The flow "&lt;flow name&gt;" of another store view already saves this attribute as the default value for all store views. Only one store view's flow can write the shared default of an attribute.

Pour corriger ce problème, retirez le ou les attributs partagés de ce Flow, ou désactivez l'option (ou retirez l'attribut) dans le Flow nommé dans l'erreur.

**Dupliquer un Flow vers une autre vue de boutique** désactive l'option dans la copie et affiche un avertissement. Ne la réactivez que si aucun Flow d'une autre vue de boutique n'enregistre les mêmes attributs comme valeur par défaut.

## À savoir avant de l'activer

*   **All Store Views signifie tous les sites web.** La valeur par défaut s'applique aux vues de boutique de tous les sites web de votre Magento, pas seulement au site web du Flow. Si vos sites web utilisent des langues différentes, les vues de boutique sans valeur propre afficheront la langue du Flow.
*   **Le dernier envoi l'emporte.** Si plusieurs Flows de la même vue de boutique synchronisent le même attribut, la valeur par défaut contient le texte du dernier envoi, même si un autre Flow a généré un texte plus récent.
*   **La vue de boutique du Flow cesse de suivre la valeur par défaut.** Après le premier envoi avec cette option, la vue de boutique du Flow possède sa propre valeur. Les valeurs par défaut ultérieures ne l'atteignent plus tant que vous n'y cochez pas Use Default Value.
*   **Cela peut déclencher d'autres Flows.** Un Flow d'une autre vue de boutique qui lit cet attribut dans son prompt et pour lequel **Automatically create a new text when an attribute changes** est activé considère la nouvelle valeur par défaut comme une modification. Après le pull suivant, il crée un nouveau texte, et consomme des crédits, pour chaque produit qui n'a pas de valeur propre dans sa vue de boutique.
*   **Produits configurables :** seul le produit parent est mis à jour. Ses variantes conservent leurs propres textes, ce qui ne pose pas de problème, car la page produit affiche les textes du parent.
*   **Désactiver l'option n'annule rien.** Les valeurs déjà enregistrées comme valeur par défaut sont conservées. Les nouveaux envois ne vont plus que vers la vue de boutique du Flow.
*   **Retirer un attribut d'un Flow n'efface pas la valeur par défaut.** La dernière valeur synchronisée est conservée jusqu'à ce qu'un autre Flow en synchronise une nouvelle.
