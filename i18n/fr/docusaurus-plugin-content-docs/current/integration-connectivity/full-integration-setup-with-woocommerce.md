---
id: '103000367857'
title: "2.5.1. Configuration complète de l'intégration avec WooCommerce."
sidebar_position: 7
slug: /integration-connectivity/full-integration-setup-with-woocommerce
description: >-
  Pour garantir une connexion sécurisée entre Fozzels et WooCommerce, les étapes
  suivantes doivent être réalisées afin de générer les clés API spéciales
  (Customer Key et Cus
---

Pour garantir une connexion sécurisée entre Fozzels et WooCommerce, les étapes suivantes doivent être réalisées afin de générer les clés API spéciales (Customer Key et Customer Secret) dans le compte WooCommerce.

Configuration dans WooCommerce

**Étape 1 : connectez-vous à WooCommerce**
1\. Ouvrez un navigateur et connectez-vous à votre compte WooCommerce.
2\. Utilisez l'identifiant et le mot de passe administrateur.

**Étape 2 : accédez aux paramètres de l'API**
1\. Accédez à l'onglet "**Settings**" / Advanced / REST API dans le menu principal de WooCommerce.
2\. Sélectionnez "**Add Keys**".

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8hyIPD4Wb1FFvgYBaXywZ2Xs18Lh-bvT4Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/gQDALB5owHDmdRHVghvUxrIVGr9XLh00iA.png)

**Étape 3 : création d'une nouvelle clé API**1\. Ajoutez la Description et choisissez les autorisations nécessaires "**Read and Write**" dans la liste déroulante de la **nouvelle clé API**.

2\. Cliquez sur le bouton "**Generate API KEY**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/LNqOK_83FuQdSlwU4GQ0k9hPLpjPOMhitw.png)
Remarque : accorder l'accès « Write » permet à Fozzels non seulement de lire les données, mais aussi de mettre à jour les données dans votre boutique WooCommerce, ce qui garantit une synchronisation bidirectionnelle.
Si vous avez tout fait correctement, une fenêtre contenant les clés générées pour la nouvelle intégration s'ouvrira. Vous recevrez également le message : 'API Key generated successfully. Make sure to copy your new keys now, as the secret key will be hidden once you leave this page.' Reportez ces clés dans les paramètres de l'intégration dans Fozzels.

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/zNaRYoJwobBx3j5TEjYQOR-iVDLfWwFk_w.png)
Configuration dans Fozzels
**Étape 4 :** **démarrer une nouvelle intégration**
1\. Connectez-vous à votre compte Fozzels.
2\. Accédez à la page Integrations.
3\. Cliquez sur le bouton "**New Integration**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/0oMe6Sytpwp09lVWoNbVjCMY2Gr5Ii3l4w.png)

4\. Sélectionnez "**WooCommerce**" dans la liste des services disponibles.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/VygL8-i0y-Ufor6pSGr_Zfk9ob9PmWAybw.png)

5\. Renseignez les champs de configuration

        Name : saisissez un nom clair pour cette intégration (par ex. WooCommerce\_INT).
        URL : saisissez l'URL de votre boutique WooCommerce
6\. Renseignez les champs suivants sur la page "Create New Integration" (à l'aide des clés copiées à l'étape 3).
        Customer Key : collez la Customer Key copiée depuis WooCommerce.
        Customer Secret : collez le Customer Secret copié depuis Woocommerce.

7\. Si vous souhaitez que les Advanced Custom Fields soient également importés dans Fozzels, activez l'interrupteur **Enable ACF**.  Pour en savoir plus sur la bonne configuration de cette connexion, consultez [Enabling ACF Data Sync: WordPress/WooCommerce Configuration for Fozzels](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels).

8\. Si vous souhaitez synchroniser les données SEO à l'aide du plugin Yoast SEO, activez l'interrupteur Yoast WooCommerce SEO. Cela permet à Fozzels d'importer et de mettre à jour les meta titles, les meta descriptions et les focus keywords directement via l'API WooCommerce. [Pour en savoir plus sur la configuration de cette intégration dans Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce).

9\. Si votre boutique utilise le plugin All-in-One SEO, activez l'interrupteur All-in-One SEO. Cela synchronisera automatiquement les champs liés au SEO, comme les meta titles, les descriptions, les mots-clés et les données de réseaux sociaux, entre WooCommerce et Fozzels. [Pour en savoir plus sur la configuration de cette intégration.](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide)

10\. Si vous souhaitez importer des champs de métadonnées personnalisés depuis WooCommerce, renseignez le champ WooCommerce Meta Data Sync Fields. Saisissez les préfixes de clés meta ou les noms exacts de champs meta que vous souhaitez synchroniser. Seuls les champs correspondants seront importés comme attributs produit dans Fozzels. Par exemple, saisissez _my\_plugin_ pour synchroniser toutes les clés commençant par ce préfixe, ou \_custom\_field pour un champ précis. [Pour en savoir plus sur cette fonctionnalité.](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)
11\. Si vous souhaitez activer la synchronisation multilingue, activez l'interrupteur WPML Multilingual Support. Cela permet à Fozzels de synchroniser les données produit dans toutes les langues configurées lorsque vous utilisez le plugin WPML. [Pour en savoir plus sur la configuration de cette option.](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation)
 ![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/d1v4xCqxV-0DN-7Uj85ucSblMez28V1klw.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/7XoFo9SE40F3Tgm0RjSqZFcqPUoE-6dFHA.png)
**Étape 5 : activez et enregistrez l'intégration**1\. Activez l'intégration en plaçant l'interrupteur "Active" sur **ON** dans le coin supérieur droit.

2\. Cliquez sur le bouton "**Save**" pour enregistrer les modifications.
Une fois l'enregistrement réussi, vous passerez aux étapes de configuration suivantes dans Fozzels ("Websites & Stores" et "Attributes"), où vous pourrez configurer la synchronisation des produits et des attributs.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8pwl3nO-DvkTHXjdP3kCZwH6esC012DXYg.png)
**Étape 6 : configuration de Websites & Stores**
1\. Cliquez sur le bouton "**Pull Websites and Stores**". Cela récupère et affiche tous les sites web et boutiques associés à votre compte WooCommerce.
2\. Activez les sites web et boutiques nécessaires en plaçant les interrupteurs Status correspondants sur **ON**.
3\. Cliquez sur le bouton "**Pull products**" pour chaque boutique nécessaire. Cette action lance le chargement initial des données produit dans Fozzels. Pour en savoir plus sur l'importation des produits, consultez [ici](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained/).
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/OT8f7hDzpyxRkabdwOZz9-0ph8-2UMGMnA.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/pXfqdGQaJ_kePo3JmAj2P43ZxhaPZWFnMg.png)Une fois le chargement des produits terminé, Fozzels est prêt à fonctionner !
Vous pouvez maintenant passer à l'onglet "Attributes" pour les configurer. Pour en savoir plus sur la gestion des attributs, consultez [ici](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).
