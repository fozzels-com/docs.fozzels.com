---
id: '103000368948'
title: "3.1.1. Présentation du catalogue et rôle de la Transformation Table."
sidebar_position: 2
slug: >-
  /data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table
description: >-
  Le catalogue produit est votre outil principal pour la gestion centralisée des
  données produit et la sélection en amont des Flows. Il contient toutes les
  entités et tous les attributs produit sy
---

Le catalogue produit est votre outil principal pour la gestion centralisée des données produit et la sélection en amont des Flows. Il contient toutes les entités et tous les attributs produit synchronisés depuis votre plateforme e-commerce intégrée (par ex. Magento, Shopify, NextChapter). Le catalogue vous permet de filtrer et de sélectionner rapidement des sous-ensembles de produits précis grâce à de puissants outils de filtrage, avant de créer un Content Flow ciblé. Ce processus simplifie la génération et permet de maîtriser les coûts.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/kT0sbPzqu9U7CYKKbDsdr8HrH0S-eFUwSA.png)
Pour accéder au **Catalog**, sélectionnez l'onglet Catalog dans l'en-tête principal de l'application.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/vfW-3PdKzz5wVJFdE5npuD2aUHNwjtoC0w.png)
**1\. Configuration initiale et sélection de la boutique**

1.1. Choisir la source de données À l'ouverture du Catalog, la première étape consiste à sélectionner votre source de données à l'aide du menu déroulant "**Choose integration /website / store**".
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qAi7dFDbCqw3Iuboi01Pe7HC4Rvwgs500g.png)

Sélection par défaut : si votre compte ne comporte qu'une seule intégration active et une boutique par défaut, les produits s'affichent automatiquement. Sinon, vous devez sélectionner explicitement une boutique.
Liste des boutiques : le menu déroulant répertorie toutes les intégrations actives et archivées. Les intégrations archivées sont affichées mais marquées comme inactives. Vous pouvez sélectionner n'importe quel site web et n'importe quelle boutique liés.
Synchronisation : une fois une boutique sélectionnée, le tableau des produits se remplit avec toutes les entités disponibles dans l'administration de cette boutique. Si des données manquent, assurez-vous d'avoir synchronisé les produits depuis la page Integration.
Orientation : le chemin de navigation (fil d'Ariane) se met à jour dynamiquement pour confirmer le site web et la boutique que vous consultez actuellement.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/yb51KJSKdpexrXDdEzKIgVfKAGu5kqGAFA.png)

1.2. Gérer l'affichage du tableau

Limites d'affichage : utilisez le menu déroulant situé au-dessus du tableau pour définir le nombre de produits affichés par page. Les options sont 5, 10, 25 (par défaut), 50, 75 et 100 produits. Utilisez les commandes de pagination en bas pour passer d'une page à l'autre.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/XGBtpKC2r1WW-xy9ZtKVqCbXxHe38w94mw.png)
Icône Maximizer : cliquez sur l'icône Maximizer à l'extrême gauche du tableau pour agrandir l'affichage et consacrer plus d'espace d'écran aux données.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/R9a_-A3pooA7ZwgFA0hPy7oakeJnhnuIwQ.png)

**2\. Personnaliser la visibilité des colonnes**

Le commutateur **Column visibility** vous permet de personnaliser la disposition du tableau en affichant ou en masquant des colonnes d'attributs.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_4nR9136ceKTkO8gCJYcXkFfxsTxJnAjw.png)

Accéder aux attributs : cliquez sur le commutateur Column visibility pour ouvrir le menu déroulant, qui répertorie tous les attributs actifs disponibles dans votre intégration. Les attributs inactifs n'y figurent pas et ne peuvent pas être affichés. Pour afficher les produits selon un attribut inactif, vous devez d'abord l'activer dans l'**onglet Attributes**.
Rechercher des attributs : utilisez le champ de recherche en haut du menu déroulant pour retrouver rapidement un attribut précis. Cliquez sur l'icône d'annulation (croix) qui apparaît pendant la saisie pour réinitialiser la recherche.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/uUX_pmAolRpY9P3RoZlEapDjNX0y3kGVjA.png)
Ajouter une colonne : il suffit de désélectionner la coche pour masquer la colonne du tableau. Une icône de coche confirme que la colonne est visible.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/OaI_JWUdBAPWTp5UyHcuLYT93tT1LUiQfQ.png)
Se concentrer sur une colonne : cliquez sur l'icône "**Eye**" à côté du nom d'un attribut. Le tableau défile automatiquement à l'horizontale pour afficher cette colonne, et l'en-tête de la colonne est mis en surbrillance.
Supprimer une colonne : il suffit de désélectionner la coche pour masquer la colonne du tableau.
**_Utilisez la barre latérale droite pour gérer les colonnes et créer un flux._**
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qgwc2opu9MjL3wW4nbOmiOD-rbCUX7IrOw.png)

**3\. Filtrer les produits pour la sélection**

Le catalogue propose deux **moyens puissants** de filtrer votre ensemble de produits avant de créer un Flow.

3.1. Filtrage direct par colonne Vous pouvez filtrer les produits en interagissant directement avec les en-têtes de colonnes du tableau :
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/c6Z48CIdVWFbxX7y-CDbDD0cWbSjXeQwXw.png)

- **Champs de texte** : utilisez le champ de recherche en haut de n'importe quelle colonne d'attribut textuel pour filtrer les produits dynamiquement au fil de la saisie.
- **Menus déroulants et sélections** : pour les attributs dont les valeurs sont définies (comme 'Brand' ou 'Size'), vous pouvez saisir du texte pour rechercher des options, ou sélectionner et retirer une ou plusieurs options.

**Filtrage par catégorie :** pour l'attribut "Categories" (s'il est correctement configuré avec "_Category tree_" et "_Filterable_"), vous pouvez développer l'arborescence et sélectionner plusieurs catégories pour affiner la liste des produits.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/2yny31P2rsrxdVzC07rzVaJr-RwO7xCA9w.png)

3.2. Configuration du filtre avancé
Le commutateur **Advanced filter** offre une interface de logique conditionnelle plus fine, identique au filtrage utilisé dans le Flow Builder.

Activer le formulaire : **cliquez sur le commutateur Advanced filter**. Cette action masque tous les champs de recherche directs des colonnes et affiche le formulaire d'interface permettant de construire des conditions complexes.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_6dDdNeft6Ifj_CsyXM-FW_xbW1uZRAhjg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/gs9u3MDY8AQDvqHMTHpetQ4Jhh33DA7Cgg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/x58B9Ei1GLKAdaKuoKR-uF1m7F27cfxikA.png)

Transfert des filtres : tous les filtres précédemment sélectionnés dans les colonnes du tableau sont automatiquement transférés vers le formulaire Advanced Filter lors de son activation, et inversement.

Construire des conditions : utilisez les boutons de l'interface pour ajouter des conditions individuelles ou des groupes de conditions (par ex. Brand 'Only' AND Size 'XS').

Appuyez sur le bouton "**Search**" pour appliquer la logique et mettre à jour le tableau des produits.

Gestion : utilisez le bouton "**Delete**" pour supprimer des conditions individuelles, ou le bouton "**Reset**" pour effacer toutes les conditions et restaurer la liste complète des produits.

**4\. Utiliser les colonnes spécialisées**

Colonne Thumbnail : les produits qui ont des images affichent ici la première image. Si des images sont manquantes, vérifiez les paramètres de votre attribut "Product Absolute Image URL". Vous pouvez filtrer le catalogue à l'aide du menu déroulant de la colonne pour ne voir que les produits "_Image missing_" ou "_Image exists_".
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/iIY14kkYS_2aVcuNVFZF5Z1TLKQ0cczmYQ.png)
**Survoler** une image affiche l'aperçu de la galerie complète. Cliquer sur l'image ouvre la **[Detailed Product View](/data-import-and-quality/detailed-product-view-reviewing-all-attributes-for-a-single-product/)**.
**Colonne Contents** : cette colonne affiche la date de synchronisation du dernier contenu généré (et non la date de génération). La date est un lien ; un clic dessus ouvre la liste des complétions de ce produit.

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/YRHITuApJ-8TocExnzRrdqDtJhfJGiHDCQ.png)

**5\. Créer un Flow à partir des produits sélectionnés**

Une fois le catalogue filtré sur le sous-ensemble de produits souhaité, vous pouvez immédiatement lancer un nouveau Flow.

Sélection : les produits sont sélectionnés soit par les filtres appliqués (directs ou avancés), soit en sélectionnant manuellement des lignes à l'aide des cases à cocher du tableau.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/geFwcUzWrcTuZWszx1O1aqL9-gIX9f2GUg.png)
Lancement : cliquez sur le bouton **"Create Flow On Selected Products"**.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/slcUdb4L8stvkadQeWPNRZ22WZmZZ8aI3w.png)

Flow prérempli : vous êtes redirigé vers la page de création du nouveau Flow. La boutique sélectionnée dans le Catalog est automatiquement choisie, et les filtres que vous avez appliqués dans le Catalog sont automatiquement transférés et configurés à l'étape de sélection des produits (étape 3) du nouveau Flow.
