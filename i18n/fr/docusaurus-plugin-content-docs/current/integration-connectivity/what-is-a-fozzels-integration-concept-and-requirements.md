---
id: '103000367852'
title: "2.1. Qu'est-ce qu'une intégration Fozzels ? (Concept et prérequis)."
sidebar_position: 1
slug: >-
  /integration-connectivity/what-is-a-fozzels-integration-concept-and-requirements
description: >-
  Ce document présente les bases d'une intégration Fozzels, son rôle dans le
  cycle de vie du contenu et les prérequis nécessaires pour établir une
  connexion.
---

Ce document présente les bases d'une intégration Fozzels, son rôle dans le cycle de vie du contenu et les prérequis nécessaires pour établir une connexion.

Une intégration Fozzels établit un lien de données sécurisé et bidirectionnel entre la plateforme Fozzels et votre système e-commerce externe (par exemple Magento, Shopify, WooCommerce). Ce lien est le point de départ de toute l'automatisation du contenu : il permet à Fozzels de **Pull** (récupérer) les attributs produit et de **Push** (renvoyer) le contenu généré.

### 1\. Le rôle de l'intégration dans le cycle de vie du contenu

L'intégration sert de canal de données et soutient l'ensemble du processus de génération de contenu :

1.  **Data Pull :** Fozzels utilise la connexion pour **récupérer** automatiquement les données produit (attributs, images, catégories, prix) de votre boutique vers le Catalog Fozzels. Ces données constituent l'entrée des prompts IA.

2.  **Flow Execution :** les Content Flows s'exécutent dans l'environnement Fozzels, en utilisant les attributs récupérés et le modèle d'IA sélectionné pour générer du nouveau contenu.

3.  **Data Push :** Fozzels utilise la connexion pour **renvoyer** le contenu nouvellement généré (par exemple descriptions produit, méta-titres) vers les attributs cibles désignés dans votre système e-commerce.

### 2\. Exigences et prérequis de l'intégration

Avant de configurer une intégration, certaines conditions doivent être remplies sur votre plateforme e-commerce :

1.  **API Access :** Fozzels a besoin d'un accès sécurisé à l'interface de programmation (API) de votre boutique. Cela implique généralement de générer un jeton sécurisé ou une clé API côté plateforme e-commerce.

2.  **Read/Write Permissions :** les identifiants d'API générés doivent disposer à la fois de l'autorisation de **lecture (pull)** pour accéder aux attributs produit existants et de l'autorisation d'**écriture (push)** pour modifier les attributs cibles (les champs où le contenu généré sera stocké).

3.  **Integration Type :** selon votre plateforme (par exemple Magento 2 ou Shopify), la méthode d'intégration peut consister à installer une extension/application Fozzels spécifique ou à configurer des clés API et des URL natives.

4.  **Attribute Setup (après l'intégration) :** une fois connecté, Fozzels s'appuie sur des attributs sources dont l'indicateur **Filterable** est activé et sur des attributs cibles dont l'indicateur **Mutable** est activé.

### 3\. Gestion des intégrations

Les paramètres d'intégration se gèrent dans l'onglet **Configuration** et **Websites & Stores** de l'interface Fozzels.

-   Vous pouvez gérer plusieurs intégrations simultanément, ce qui vous permet de synchroniser du contenu entre différentes instances e-commerce ou boutiques régionales.

-   La stabilité du processus d'automatisation du contenu dépend directement de la stabilité et de la disponibilité de l'intégration établie.
