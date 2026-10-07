---
id: '103000385832'
title: >-
  2.5.2.  Activer la synchronisation des données ACF : configuration
  WordPress/WooCommerce pour Fozzels
sidebar_position: 8
slug: >-
  /integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels
description: >-
  L'intégration Fozzels - WooCommerce prend désormais officiellement en charge
  Advanced Custom Fields (ACF) ! Cette fonctionnalité vous permet de
  synchroniser des caractéristiques produit uniques et étendues
---

L'intégration **Fozzels - WooCommerce** prend désormais officiellement en charge **Advanced Custom Fields (ACF)** !

Cette fonctionnalité vous permet de synchroniser des caractéristiques produit uniques et étendues (telles que des spécifications techniques, des descriptions multilingues ou des paramètres spéciaux) que vous ajoutez via ACF, afin de créer des flux produits plus détaillés et plus compétitifs pour les places de marché.

Une intégration réussie nécessite des étapes de configuration essentielles dans WordPress comme dans Fozzels.


## **Partie 1 : préparer les données dans WordPress (ACF et API REST)**

Avant d'activer ACF dans Fozzels, assurez-vous que WordPress et ACF sont configurés pour transmettre correctement ces données spéciales via l'API REST.

### Étape 1 : vérifier et configurer les permaliens

Pour que l'API REST fonctionne correctement, la structure des permaliens doit être différente de la structure par défaut (simple).

1.  Connectez-vous à l'administration de WordPress et accédez à **Settings** / **Permalinks**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/UoAvhDX9e8L9BLo2aXURlvtkXJ3A1z5ToA.png)

2.  Choisissez une structure qui n'utilise pas de paramètres (la structure **"Post name"** est recommandée).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vbZGxNZnGc1GBmBD9QYCyV3_4CUkCjMRhA.png)

3.  Vérifiez que **v3** est sélectionné dans le champ **Request Version**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/KhP0PGNAaWcnzkLXTBB8yQ1tPbXLQjPhzA.png)

4.  Enregistrez les modifications.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/yP1swQ74nSHYKF8pRpAgezDqHmxBh4nR-A.png)

### Étape 2 : accéder au groupe de champs ACF

1.  Dans le menu WordPress, allez dans **ACF** / **Field Groups**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/a7TVqQW4iMXkGcmlP1WI8nouyni5HGoKsg.png)

2.  Cliquez sur le nom du groupe de champs (Field Group) qui contient les champs que vous devez synchroniser pour vos produits WooCommerce (par ex. **"Fozzels Description"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/GH8y_bXf1Lb2RnG-_VWVmrj4XKhaFuCnRg.png)

### Étape 3 : configurer le groupe de champs pour l'accès à l'API (étape cruciale)

Dans la fenêtre de modification du **Field Group**, vérifiez les règles d'emplacement et activez l'accès à l'API.

#### 3.1. Vérification des règles d'emplacement

1.  Dans l'onglet **Location Rules**, vérifiez que la règle est définie sur : **Post Type** _is equal to_ **Product**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/BNEJu6CBt2NzH17U0EzeWONrRHVf2l2Jkw.png)

#### 3.2. Activation de l'API REST et du groupe

1.  Accédez à l'onglet **Group Settings**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/Nd2g7ccKjN6_POwgJhmMzMceFkkV0h2hxw.png)

2.  Vérifiez que les deux boutons sont activés (positionnés sur **ON**) :

-   **Active**

    -   **Show in REST API**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/ZJ8EJ6QyJdSfjnZQSXdDXHEAvHmtDBbEKg.png)**

3.  Enregistrez les modifications en cliquant sur **Update** ou **Publish**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/lIgfpHeR7YI8Bf6W-4UvdIqtW2AQz9kqcw.png)

### Étape 4 : vérifier la version de l'API REST d'ACF

Si vous utilisez un plugin supplémentaire pour intégrer ACF à l'API REST (comme `ACF to REST API`), vous devez vous assurer que la version sélectionnée est compatible avec Fozzels.

1.  Allez dans **Settings** / **Permalinks** / **ACF to REST API**.

2.  Vérifiez que **v3** est sélectionné dans le champ **Request Version**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/13tEu-kDRtYwLsGbVQs5J19h9pA5I08Jlw.png)

    > **Exigence de Fozzels :** l'intégration nécessite la prise en charge de **l'API REST v3**.
    >
    >

3.  Enregistrez les paramètres.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vdFx1XFzfwdgC4rWC4PSPmvnyjq5XMPclg.png)

## **Partie 2 : activer ACF dans Fozzels**

Une fois la préparation dans WordPress terminée, activez la fonctionnalité dans les paramètres de votre intégration Fozzels.

1.  Connectez-vous à votre compte Fozzels et accédez à la modification de votre intégration WooCommerce.

2.  Dans la section **Configuration**, repérez le bouton **"Enable ACF (Advanced Custom Fields)"**.

3.  **Activez-le** (positionnez-le sur **ON**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/0_d_0BMKbVwJo7hW9vj3FexWoHpj5ziX7w.png)

> **Important !** Prenez note des prérequis confirmés par Fozzels :
>
> -   Le plugin ACF est installé et activé dans WordPress.
>
> -   L'API REST est activée dans les paramètres du Field Group ACF (Show in REST API: Yes).
>
> -   ACF version 6.x ou supérieure avec prise en charge de l'API REST v3.
>

4.  Cliquez sur **Save** en bas de la page.

## **Partie 3 : utiliser les champs ACF dans le Flow et mettre à jour le catalogue**

Fozzels traite les attributs ACF comme des **attributs produit ordinaires**, et vous travaillez avec eux selon le flux standard.

1.  Après avoir activé le bouton **"Enable ACF"** et cliqué sur **"Save"**, vous devez **lancer le processus d'importation des données** :

-   **Si vous mettez à jour une intégration existante :** relancez le pool de produits et d'attributs. Cela actualisera les données du catalogue Fozzels et importera les nouveaux champs ACF.

    -   **S'il s'agit de votre première intégration :** lancez simplement le pool de produits en suivant les règles générales de configuration de l'intégration.
        ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/EYnK1qxy-p-r_jWSJDDxh9P0gDCTf_BU1g.png)

2.  Une fois le pool terminé avec succès, accédez à la section **3 Attributes,** vérifiez les nouveaux attributs et leur configuration**.**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/4iRp-AUe2mr4IFsN_I9b6AEtM5f9iGTgtA.png)**
    Si vous avez des questions ou besoin d'aide pour configurer l'intégration ACF, notre équipe de support se fera un plaisir de vous aider ! Veuillez nous contacter à l'adresse **support@fozzels.com**.
