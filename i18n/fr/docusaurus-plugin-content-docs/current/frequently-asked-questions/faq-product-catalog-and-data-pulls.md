---
title: "FAQ : catalogue produits et récupération des données"
sidebar_position: 8
unlisted: true
slug: /frequently-asked-questions/faq-product-catalog-and-data-pulls
description: >-
  Fonctionnement de la récupération nocturne du catalogue, raisons pour
  lesquelles des produits nouveaux ou manquants n'apparaissent pas, différences
  de variantes et de catégories, filtrage par attributs personnalisés et
  planifications de récupération personnalisées.
---

## Le catalogue produits est mis à jour chaque nuit. Comment cela fonctionne-t-il ?

Le catalogue est mis à jour automatiquement chaque nuit à 01:30. Après la récupération, tous les flows sont mis à jour avec les dernières données. Les nouveaux produits correspondant aux filtres des flows sont ajoutés automatiquement.

## Les nouveaux produits ajoutés à ma boutique en ligne n'apparaissent pas dans Fozzels.

Les produits apparaissent après la prochaine récupération planifiée du catalogue (chaque nuit à 01:30). Pour les voir immédiatement, déclenchez une récupération manuelle des produits.

## Fozzels affiche moins de produits que prévu : certaines combinaisons de couleurs manquent.

Fozzels filtre les produits selon des conditions précises et les regroupe au niveau produit-couleur, en excluant les variantes de taille. Comparez vos conditions de filtrage avec votre base de données pour repérer les écarts.

## Je ne trouve pas une catégorie de produits précise dans Fozzels.

L'arborescence des catégories dans Fozzels peut différer de celle de votre boutique. Utilisez les filtres pour la rechercher. Si vous ne la trouvez toujours pas, contactez le support avec une capture d'écran de votre back-office.

## Des produits manquent dans mon flow à cause d'un attribut de stock vide.

Vérifiez les conditions de filtrage du flow. Si une condition de stock (par ex. "Voorraad IS NOT NULL") exclut les produits dont la valeur de stock est vide, renseignez les données ou supprimez la condition.

## Une récupération manuelle des données ne met pas à jour les attributs.

Après une récupération, Fozzels a besoin d'un temps de traitement : les données ne sont pas instantanées. Si les attributs restent inchangés, contactez le support.

## Quand dois-je déclencher manuellement une récupération des produits ?

Après des modifications importantes du catalogue, de nouveaux ensembles de produits, des ajouts ou suppressions en nombre, ou des changements de flux/d'intégration.

## Comment filtrer les produits par attributs personnalisés (par ex. "Webshop Article = Yes") ?

Les attributs de filtrage personnalisés doivent être présents dans le flux de données. Une fois dans Fozzels, utilisez-les comme conditions de filtrage dans les flows. Si un attribut n'apparaît pas, contactez le support.

## Un produit a été retiré du catalogue à cause de la configuration des variantes.

Fozzels filtre selon les paramètres des variantes, et des variantes désactivées peuvent exclure des produits. Contactez le support pour qu'il examine la configuration.

## Puis-je définir une planification personnalisée de récupération des produits (pas uniquement la nuit) ?

Oui. Depuis la version 5.14, vous pouvez définir une heure personnalisée pour les récupérations de produits, au niveau de l'intégration comme de la boutique.
