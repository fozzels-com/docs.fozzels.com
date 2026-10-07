---
id: '103000338038'
title: 2.4. Configuration complète de l'intégration avec Shopware
sidebar_position: 6
slug: /integration-connectivity/full-integration-setup-with-shopware
description: >-
  Ce guide vous accompagne dans le processus complet de connexion de votre
  boutique en ligne Shopware 6 à Fozzels. L'intégration comporte deux parties :
  partie 1 : C
---

Ce guide vous accompagne dans le processus complet de connexion de votre boutique en ligne Shopware 6 à Fozzels.
L'intégration comporte deux parties :

# Partie 1 : créer une intégration dans Shopware 6

Dans cette partie, vous allez créer une intégration API dans le panneau d'administration de Shopware 6. Cela génère les identifiants dont Fozzels a besoin pour communiquer avec votre boutique.

### 1\. Introduction

Accédez au panneau d'administration de Shopware 6. Vous le trouverez généralement à l'adresse [l'URL de votre boutique](https://shopware6.fozzels.com/admin).

### 2\. Cliquez sur "Settings"

Cliquez sur "Settings".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/_APoVDYMLEb_oPJsWrg4Fj9HOyB2FWI6g.png)

### 3\. Cliquez sur "System"

Accédez aux paramètres système.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NE3HjkKRNa353OQJJBzR8eeF_Y9XA9Mi_w.png)

###
4\. Cliquez sur "Users & permissions"

Sélectionnez l'option Integrations dans le menu System.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/XBGWZJstYupsn7hsyrU1stHBQK9Hh8igVA.png)

### 5\. Faites défiler jusqu'à "Roles" et cliquez sur "Create role"

   Sur la page Users & permissions, faites défiler jusqu'à la section Roles et cliquez sur le bouton "Create role".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/6gkkqh6BDu27YdBmfVYPA7aub9lZQr-Svw.png)

### 6. Saisissez le nom du rôle

Dans l'onglet "General", saisissez un nom pour le rôle.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NUafBeJNC09Mi86jv-EVOFyWLidctjzadA.png)

### 7\. Cliquez sur "Permissions"

Le tableau des autorisations s'affiche, toutes les cases étant décochées. Activez les autorisations suivantes :

**Catalogues (View, Edit, Create, Delete) :**

-   Categories
-   Dynamic product groups
-   Landing pages
-   Manufacturers
-   Products
-   Properties
-   Reviews

**Content :**

-   Media (View, Edit, Create, Delete)
-   Shopping Experiences (View, Edit)
-   Themes (View, Edit)

**Other** (View, Edit, Create, Delete) :

-   Sales Channels

**Settings :**

-   Currencies (View, Edit, Create, Delete)
-   Custom fields (View, Edit, Create, Delete)
-   Languages (View, Edit, Create, Delete)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/hUqHqVoOiZ0d2J1mJ2IWMFdxxBKX0tVq5g.jpeg)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/PoONXWr6_1SjTd-6iea1UpNsFzfkwxRYpw.jpeg)

### 8. Enregistrez le rôle

Après avoir défini toutes les autorisations, cliquez sur "Save" pour enregistrer le rôle.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A8MHLjtMTc9IvBEae-ZW8vUS8I4hag_G8A.png)

###  **9.** Accédez à System > Integrations
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A3DBstBn6Ru1Z0789w5hnvK7skD1VrNVhA.png)
**10.** **Cliquez sur "Add integration"**

Cliquez sur le bouton "Add integration". La boîte de dialogue "Create integration" s'affiche :

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/URMEvVMGXkTNtDY6_YIfXEesdx7AwYJJ2g.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/3hNA53bC00sF1iGxrnL2kynScvKzSZfduA.png)

**11.** Renseignez les informations de l'intégration

Saisissez un nom pour l'intégration. Ouvrez ensuite la liste déroulante "Roles" et sélectionnez le rôle que vous avez créé précédemment.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/DZY9Dx_ZSKux2NMqdZxEYkFXqeT3JeZVlg.png)

###
12\.  Copiez l'Access Key ID

Cliquez sur l'icône de copie à côté de l'**Access Key ID** pour la copier dans votre presse-papiers. Collez cette clé dans un document texte pour la conserver : vous en aurez besoin dans la partie 2.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Um8SIf9NDPTA8bYzQbm-H73d4wuiGheBbQ.png)

**13\.**  **Copiez la Secret Access Key**

Faites de même pour la **Secret access key** : cliquez pour la copier dans votre presse-papiers. Collez ensuite ce code dans un document texte afin de pouvoir y accéder et le copier plus tard.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ngrN_TmIbSpPn4vdjAU2urPJ3Orh3b1hcw.png)

### 14\. Cliquez sur "Save integration"

Enregistrez les paramètres de l'intégration.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/zFiTXyoLwZk0YUyHGn98o27cXlHx8DSBgA.png)

### 15\. Confirmez le message de réussite

L'intégration est maintenant créée et active.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ddwo4oRoStm6_leYM-OMhtbNWvrs2B5OkA.png)

###

# Partie 2 : connecter Fozzels à Shopware 6

Maintenant que vous avez créé l'intégration dans Shopware, vous allez configurer la connexion côté Fozzels à l'aide des identifiants de la partie 1.

### **1.** Accédez à [Fozzels.com](https://fozzels.com/)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/QNYGtnmJc1jLtdHtrac2heMnCvr8OeCjOw.png)

###
**2.**  Cliquez sur "Integrations"
    Dans le menu Fozzels, cliquez sur Integrations.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p3WWrWl5kNt7ZpAfsTGCttAeYkIT1rVN6A.png)
3\. Cliquez sur "Create"
    Cliquez sur le bouton "Create" pour commencer à configurer une nouvelle intégration.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/pEdr2LbjwEBHYCnp6d9LPSj4r3fXHoqSRA.png)
4\. Sélectionnez le logo Shopware

Choisissez Shopware comme type d'intégration en cliquant sur le logo Shopware.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/wutV5JMQpq7oa9KVz1xOFlxcjZe7RktGOg.png)5\. Renseignez les informations de l'intégration

Renseignez les champs suivants dans l'ordre :

1\. Name — saisissez un nom pour cette intégration, par exemple "Shopware 6".

2. URL — saisissez l'URL de votre boutique en ligne Shopware 6 (par exemple https://your-store.com).

3. Access Key ID — collez l'Access Key ID que vous avez copiée depuis Shopware dans la partie 1.

4. Secret Access Key — collez la Secret Access Key que vous avez copiée depuis Shopware dans la partie 1.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/MN0itAjPFkZTRZVpISQu6IiUlmslBesN5w.png)

**6**. Lorsque tous les champs sont renseignés, cliquez sur "Save". Une fenêtre "Success" doit s'afficher pour confirmer l'enregistrement de la connexion.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Hx1KICwgA4nYaOgpQbjeLYyUYMAfwizHIA.png)

### 7\. Activez l'intégration
    Activez le commutateur "Active" pour activer l'intégration.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/CWqB7LNLotQ_hBy-B3upqEFOPuh8GzXOQg.png)
**8.** **Pull Websites and Stores**
    Cliquez sur le bouton "Pull Websites and Stores". Fozzels récupère toutes les données de vos canaux de vente depuis Shopware.
   ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/AIptzp_eqV19f60Lq69A3HI-5-jXSkZ8RQ.png)
9\. Activez la connexion de votre boutique
    Activez le commutateur Status pour votre boutique.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/gS02mVXwZyGcf2VSsypNVS3DoBaYSrKftQ.png)

10. Activez les vues de boutique / canaux de vente

    Activez les vues de boutique ou les canaux de vente disponibles que vous souhaitez utiliser dans Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/1UtVxA_eP1gFWhRvGqpPE7G2CczT4WZGdg.png)

11. Pull Products

###     Cliquez sur "Pull Products" pour récupérer vos données produit depuis Shopware. Cela peut prendre un certain temps selon le nombre de produits.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/0liK4TAMuGrDYFNClrrnT2GtrcZKZ6M2jA.png)
**12.** Cliquez sur "Next step"
    Passez à l'étape suivante pour finaliser la configuration.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p1QaQx8BXoBRslqVdOfwPVQzKjtqvAKl3A.png)

# Configuration terminée

Félicitations ! Votre boutique Shopware 6 est maintenant entièrement connectée à Fozzels. Vous pouvez utiliser cette intégration pour créer des Flows produit et gérer votre contenu produit directement depuis la plateforme Fozzels.

## Pour bien démarrer

Voici d'autres articles qui peuvent vous aider à démarrer avec Fozzels :

-   [Creating a New Content Flow and Initial Settings](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Prompt Creation & Filtering. Drag & Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)

-   [When Do New Products Get Generated: The Pull Cycle Explained](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained)
-   [Mass Actions and Operational Control in the Batch Lists / Daily Total Batch List](/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list)
-   [Flow Definition and Content Types (Text, Image, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)

Ou contactez-nous directement : nous serons toujours ravis de vous aider !

###
