---
title: 2.11.1. Comment configurer une intégration Pimcore
sidebar_position: 23
slug: /integration-connectivity/how-to-set-up-a-pimcore-integration
description: >-
  Connectez votre catalogue produits Pimcore à Fozzels via le module DataHub :
  préparez l'endpoint et la clé d'API dans Pimcore, remplissez le formulaire de
  configuration et importez vos produits.
---

Ce guide vous aide à connecter, étape par étape, votre catalogue produits Pimcore à Fozzels.

## Avant de commencer : préparation dans Pimcore

Fozzels se connecte à Pimcore via le module **Datahub**, un outil intégré à Pimcore qui ouvre l'accès à vos données par le biais d'une API.

Votre instance Pimcore doit disposer d'un **endpoint Datahub** configuré (votre administrateur Pimcore l'a peut-être déjà mis en place). Si ce n'est pas le cas, contactez-le ou contactez notre équipe support. Vous aurez besoin de :

- **Nom de l'endpoint :** disponible dans Pimcore, sous **Datahub**, dans le champ **Name**.
- **Clé d'API :** affichée à côté de l'endpoint, dans l'onglet **Security Definition**, dans le champ **Datahub API Keys**.

![Pimcore → Datahub → votre endpoint → onglet General. Le champ Name correspond au nom de votre endpoint](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/01-datahub-endpoint-general-tab.png)

![L'onglet Security Definition contient votre clé d'API et les règles d'accès Workspace](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/02-datahub-security-definition-tab.png)

> **Important :** dans les paramètres de l'endpoint (onglet **Security Definition → Workspaces**), l'accès en lecture (**Read**) doit être accordé aux objets concernés, et surtout au dossier contenant vos produits (par exemple `/products`). Si vos produits sont répartis dans plusieurs dossiers imbriqués, assurez-vous que l'accès est accordé à chacun d'entre eux.

## 1. Créer l'intégration

1. Accédez à **Home → Integrations**.
2. Cliquez sur **Create**.
3. Sélectionnez la plateforme **Pimcore**.

![Choisissez Pimcore dans la liste des plateformes d'intégration](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/03-choose-pimcore-platform.png)

## 2. Remplir le formulaire de configuration

![Name, URL, DataHub endpoint, API key et les champs facultatifs Product/Category class](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/04-configuration-form.png)

| Champ | Ce qu'il faut saisir |
| --- | --- |
| **Name** | Nom de l'intégration, pour votre propre repérage |
| **URL** | Adresse de base de votre instance Pimcore (par exemple `https://your-company.pimcore.com`) |
| **DataHub endpoint** | Le nom de l'endpoint dans Pimcore (par exemple `fozzels`) |
| **API key** | La clé d'accès de Pimcore (depuis l'onglet Security Definition) |
| **Product class** | Laissez vide si vos produits sont stockés dans une classe nommée `Product`. Ne renseignez ce champ que si la classe porte un autre nom |
| **Category class** | Comme ci-dessus : laissez vide si les catégories sont stockées dans une classe nommée `Category` |
| **Asset folder** | Facultatif. Nécessaire uniquement si Fozzels doit générer de nouvelles images produit pour vous et qu'elles doivent être enregistrées quelque part dans Pimcore (par exemple `/products`) |

![Le champ Languages et le bouton Include unpublished objects](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/05-languages-and-include-unpublished.png)

| Champ | Ce qu'il faut saisir |
| --- | --- |
| **Languages** | Liste de codes de langue séparés par des virgules (par exemple `nl,en`). Chaque langue devient un **Store** distinct dans Fozzels |
| **Include unpublished objects** | Désactivé par défaut. Activez-le si vous souhaitez que la synchronisation récupère aussi les produits et catégories non publiés (brouillons). Ils seront traités de la même manière que les autres |

### Planification de la synchronisation (Global Pull Schedule)

Vous pouvez conserver la planification par défaut, ou activer **Overwrite Global Pull Schedule** et définir votre propre heure.

> **L'heure est en UTC :** l'heure est définie en **UTC**, et non dans votre fuseau horaire local. Si vous souhaitez que la synchronisation s'exécute la nuit selon votre fuseau, convertissez votre heure de nuit locale en UTC avant de la saisir ici.

### Délai entre les requêtes

Nous recommandons de **ne pas renseigner ces champs tout de suite**. Lancez d'abord quelques synchronisations avec les paramètres par défaut. Si tout fonctionne correctement, aucune configuration supplémentaire n'est nécessaire. Si des erreurs apparaissent, revenez ici et ajoutez un petit délai.

Cliquez sur **Save**.

## 3. Activer et importer les produits

1. Activez le bouton **Active** (en haut à droite).
2. Cliquez sur **PULL WEBSITES AND STORES**. Fozzels récupère vos langues sous forme de Stores distincts.
3. Activez les boutons des Website et Store concernés.
4. Cliquez sur **Pull products** pour importer les produits, les catégories et leurs attributs.

## Si le nombre de produits est inférieur à celui attendu

Si moins de produits ont été importés dans Fozzels que vous n'en avez dans Pimcore, la raison la plus fréquente est la présence de produits non publiés (statut **unpublished/draft**) dans Pimcore. Activez le bouton **Include unpublished objects** dans les paramètres de l'intégration (Configuration) et relancez la synchronisation.

> **Astuce :** une fois cette option activée, les produits disposent d'un nouvel attribut **Published** (Yes/No). Vous pouvez l'utiliser pour filtrer les produits dans le catalogue, ou y limiter un flow spécifique, si vous souhaitez par exemple ne traiter que les produits publiés.

![Filtrage des produits par l'attribut Published dans Manage Products](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/06-manage-products-published-filter.png)

Parmi les autres causes possibles figurent un accès limité à certains dossiers de produits, ou des produits répartis sur plusieurs classes dans Pimcore. Dans ces cas, le mieux est de nous contacter ou de contacter votre administrateur Pimcore afin de vérifier les paramètres d'accès.

Pour exposer davantage d'attributs, comme l'indicateur de publication ou votre galerie d'images, consultez [2.11.2. Pimcore : exposer des attributs via DataHub](/integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery).

Et voilà : votre catalogue Pimcore est désormais connecté. Vous pouvez actualiser les données à tout moment en cliquant à nouveau sur **Pull products**.
