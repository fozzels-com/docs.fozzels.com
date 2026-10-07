---
id: '103000388046'
title: 2.5.4. Prise en charge de Yoast SEO pour WooCommerce
sidebar_position: 12
slug: /integration-connectivity/yoast-seo-support-for-woocommerce
description: >-
  Cet article explique comment mettre en place une automatisation complète des
  métadonnées de vos produits (titres, descriptions, mots-clés principaux) grâce
  à l'intégration Yoast SEO avec F
---

Cet article explique comment mettre en place une automatisation complète des métadonnées de vos produits (titres, descriptions, mots-clés principaux) grâce à l'intégration **Yoast SEO** avec Fozzels.

## Présentation de la fonctionnalité

Cette intégration permet à Fozzels de gérer directement, via l'API, les paramètres SEO de vos produits. Une fois générés, ces champs sont automatiquement synchronisés avec votre boutique WooCommerce.

**Attributs disponibles pour le mappage :**

-   **Yoast SEO Title** (`yoast_title`)

-   **Yoast SEO Meta Description** (`yoast_meta_description`)

-   **Yoast SEO Focus Keyword** (`yoast_focus_keyword`)

## Configuration pas à pas

### Étape 1 : prérequis (côté WooCommerce)

Pour que la synchronisation fonctionne, votre site WordPress doit disposer de **deux plugins actifs** :

1.  **Yoast SEO** – Le plugin de référence pour la gestion de l'optimisation pour les moteurs de recherche.

2.  **Yoast SEO WooCommerce REST API by Fozzels** – Notre plugin de connexion dédié, qui permet de renvoyer les données générées vers votre boutique.

> **Important :** la synchronisation des champs SEO est impossible sans le plugin de connexion Fozzels. Vous pouvez le télécharger en bas de cet article.

### ![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/x8U6ii3HyPbJrpm22XJ4KTrBPkYOpJMBqw.png)Étape 2 : activation dans Fozzels

1.  Accédez à la section **Integrations** et sélectionnez votre intégration WooCommerce.

2.  Dans l'onglet **Configuration**, trouvez l'option **"Yoast WooCommerce SEO"**.

3.  Activez le bouton bascule et cliquez sur **SAVE**.

###
![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/Q2vuNHpeZol7txxezMoTQmPyzT3To9Rwpw.png)

### Étape 3 : mise à jour de la structure des données

Pour que les nouveaux attributs soient visibles dans l'interface de Fozzels, vous devez mettre à jour votre schéma de données :

1.  Accédez à l'onglet **Websites & Stores** et cliquez sur **Pull Stores/Websites**.

2.  Lancez un **Pull complet des produits (Pull Products)**.

3.  Une fois le Pull terminé, la liste des attributs est actualisée et les champs portant le préfixe `yoast_` deviennent disponibles pour le mappage dans vos Flows.

![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/xD90y_FdSVGO0v5sAa1SAVmX1hHGTvb8Tw.png)

## Le combo ultime : WPML + Yoast + ACF

Fozzels vous permet d'atteindre le « Gold Standard » de l'e-commerce en combinant :

-   **Prise en charge de [WPML](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/) :** pour le SEO multilingue.

-   **[ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/) :** pour les données techniques spécialisées.

-   **Yoast SEO :** pour dominer les moteurs de recherche. Vous pouvez automatiser tous ces champs simultanément pour chaque version linguistique de votre boutique.
