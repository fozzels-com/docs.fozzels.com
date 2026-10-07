---
id: '103000389531'
title: "2.5.6.  Prise en charge de WPML pour WooCommerce (automatisation multilingue)"
sidebar_position: 13
slug: /integration-connectivity/wpml-support-for-woocommerce-multilingual-automation
description: >-
  Ce guide couvre la configuration et l'utilisation de l'intégration de WPML
  (WordPress Multilingual Plugin) dans Fozzels. Cette fonctionnalité vous
  permet d'automatiser le contenu
---

Ce guide couvre la configuration et l'utilisation de l'intégration de **WPML (WordPress Multilingual Plugin)** dans Fozzels. Cette fonctionnalité vous permet d'automatiser la génération et la synchronisation de contenu pour chaque locale linguistique de votre boutique au sein d'une seule intégration.

## Présentation de la fonctionnalité

L'intégration de WPML par Fozzels vous permet de gérer des structures multilingues complexes sans avoir besoin de connexions distinctes pour chaque langue.

**Principaux avantages :**

-   **Identification des locales :** détection automatique de toutes les langues actives du site web via l'API.

-   **Mappage flexible :** dirigez le contenu vers les bonnes versions linguistiques de vos produits, y compris :

-   **Champs standard** (Title, Description, Short Description) ;

-   **Plugins SEO** (**[Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce/)** ou **[All in One SEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)**) ;

-   **Champs personnalisés** (**[ACF - Advanced Custom Fields](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)**).

-   **Efficacité du workflow :** gérez des catalogues mondiaux depuis une interface unique.

## Configuration de l'intégration dans Fozzels

Pour activer la prise en charge du multilingue, suivez la procédure étape par étape ci-dessous :

### 1\. Activer la fonctionnalité

1.  Rendez-vous dans la section **Integrations** et sélectionnez votre intégration WooCommerce.

2.  Dans l'onglet **Configuration**, repérez le **bloc de paramètres WPML**.

3.  Activez **"Enable WPML Multilingual Support"**.

4.  **Crucial :** cliquez sur le bouton **"SAVE"** pour enregistrer ces modifications dans votre configuration.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/4V_jMfihW94CP3CNHSo9yd7-LbwRCXJSJg.png)

### 2\. Initialiser les locales (Websites & Stores)

Une fois la configuration enregistrée, vous devez récupérer la liste des langues depuis votre site WordPress :

1.  Passez à l'onglet **Websites & Stores** dans les paramètres de votre intégration.

2.  Cliquez sur le bouton **"Pull Stores/Websites"**. Fozzels interrogera votre site WordPress pour récupérer toutes les langues configurées.

3.  Dans la liste qui s'affiche, **activez (commutateur sur on)** les langues spécifiques que vous comptez gérer.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/POzdAldcqgEXxkAsgSEbnJLTDF9nzoogmg.png)
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/rgGtdO9cFLCfJOPmQs1SQc5NKnlyOx59Ag.png)

###
3\. Synchronisation du catalogue

C'est l'étape finale et la plus importante pour rendre les produits visibles :

-   **RELANCEZ LE PRODUCT PULL.** C'est obligatoire pour que le système puisse identifier les relations entre les différentes versions linguistiques de vos produits et **les charger dans vos catalogues Fozzels** en tant qu'objets individuels à traiter. Sans cette étape, les produits des nouvelles locales n'apparaîtront pas dans le système.

![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/S0333OKK3WCPquO5CYoLzBkvWJVsJRbG4w.png)

##
Le combo ultime : WPML + ACF + AIOSEO

Fozzels vous permet de combiner WPML avec les plugins leaders du marché pour une automatisation maximale. C'est la référence absolue pour un e-commerce professionnel :

-   **WPML + SEO ([Yoast](/integration-connectivity/yoast-seo-support-for-woocommerce/) ou [AIOSEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)) :** générez des Keywords, des Meta Titles et des Descriptions uniques et localisés pour chaque version linguistique. _(Remarque : n'utilisez qu'un seul plugin SEO à la fois pour éviter les conflits.)_

-   **WPML + [ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/) :** synchronisez du contenu localisé dans des champs personnalisés (par ex. caractéristiques techniques, blocs marketing ou FAQ), séparément pour chaque langue.

-   **Le combo ultime (WPML + ACF + AIOSEO) :** le scénario le plus puissant. Il vous permet d'automatiser simultanément des descriptions professionnelles, des données techniques spécialisées et un socle SEO complet pour le marché international.
