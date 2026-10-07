---
id: '103000392433'
title: 2.3.1. Application Fozzels Shopify — Prise en main
sidebar_position: 3
slug: /integration-connectivity/fozzels-shopify-app-getting-started
description: >-
  Merci d'avoir installé l'application Fozzels Shopify ! Nous sommes ravis de
  vous aider à automatiser votre contenu produit et à gagner des heures de
  travail manuel. Mettons
---


Merci d'avoir installé l'application Fozzels Shopify ! Nous sommes ravis de vous aider à automatiser votre contenu produit et à gagner des heures de travail manuel. Configurons votre compte en quelques minutes seulement.

## Qu'est-ce que l'application Fozzels Shopify ?

L'application Fozzels Shopify est l'intégration officielle entre votre boutique Shopify et la plateforme de génération de contenu par IA Fozzels. Une fois connecté, Fozzels peut récupérer vos produits directement depuis Shopify, générer des descriptions, des titres SEO et d'autres contenus uniques propulsés par l'IA pour chaque produit, puis synchroniser automatiquement les résultats vers votre boutique.

**Avec l'application Fozzels Shopify, vous pouvez :**

-   Connecter votre boutique Shopify à Fozzels en quelques minutes — sans clé d'API
-   Récupérer automatiquement tous vos produits et leurs attributs dans Fozzels
-   Générer du contenu unique pour chaque produit grâce à l'IA
-   Synchroniser automatiquement le contenu généré vers Shopify, ou après relecture manuelle
-   Générer des images et des vidéos produit par IA et les publier dans la galerie multimédia de votre boutique
-   Gérer plusieurs marchés et langues Shopify depuis un seul endroit

## Prérequis

Avant de commencer, assurez-vous de disposer de :

-   Une boutique Shopify (quel que soit l'abonnement)
-   Un compte Fozzels — [Inscrivez-vous ici](https://app.fozzels.com/signup)
-   L'application Fozzels installée depuis le Shopify App Store

## Étape 1 — Installer l'application

1.  Accédez à la [page de l'application Fozzels](https://apps.shopify.com/fozzels) dans le Shopify App Store
2.  Cliquez sur **Add app**
3.  Vérifiez les autorisations demandées et cliquez sur **Install**
4.  Vous êtes redirigé vers l'écran de connexion Fozzels dans votre Shopify Admin

## Étape 2 — Connecter votre compte Fozzels

Une fois l'application installée, l'écran **Connect to Fozzels** s'affiche dans votre Shopify Admin.

1.  Cliquez sur **"Login to Fozzels"**
2.  Saisissez l'adresse e-mail et le mot de passe de votre compte Fozzels
3.  Cliquez sur **Login**

> Vous n'avez pas encore de compte Fozzels ? Cliquez sur **"Create Account"** pour vous inscrire directement depuis Shopify.

Après la connexion, Fozzels détecte votre boutique et ouvre la boîte de dialogue **Select Shopify Integration**.

## Étape 3 — Créer une nouvelle intégration

Si c'est la première fois que vous vous connectez, cliquez sur **"+ Create new integration"**. Vous êtes redirigé vers le dashboard Fozzels pour terminer la configuration.

1.  Sur l'écran **Choose your integration**, sélectionnez **Shopify**
2.  Remplissez le formulaire d'intégration :
    -   **Name** — donnez à votre intégration un nom reconnaissable (par ex. "My Shopify Store")
    -   **URL** — saisissez l'URL de votre boutique (par ex. `https://yourstore.myshopify.com`)
    -   **Connection Method** — sélectionnez **Fozzels Shopify App (OAuth)** _(recommandé)_
    -   **App Host Name** — saisissez votre nom d'hôte `.myshopify.com` (par ex. `yourstore.myshopify.com`)
3.  Activez éventuellement **Shopify Markets** si vous gérez une boutique multilingue ou multirégion
4.  Cliquez sur **Save**

> **Pourquoi OAuth ?** La méthode OAuth est la façon la plus simple et la plus sécurisée de se connecter. Elle ne nécessite aucune clé d'API ni aucun token manuel : le token d'accès est fourni automatiquement lorsque vous vous connectez via l'application Shopify.

## Étape 4 — Autoriser la connexion

Après avoir enregistré l'intégration, retournez dans votre Shopify Admin :

1.  Ouvrez l'**application Fozzels** dans Shopify Admin
2.  Cliquez sur **"Login to Fozzels"** et connectez-vous
3.  Dans la boîte de dialogue **Select Shopify Integration**, sélectionnez l'intégration que vous venez de créer
4.  Cliquez sur **Connect**

L'onglet **Integrations** se met à jour avec le statut **Active**. Dans le dashboard Fozzels, l'intégration affiche **Authorized ✅** et **REST API Connected ✅**.

## Étape 5 — Récupérer vos produits

1.  Accédez à `app.fozzels.com` → **Integrations** → ouvrez votre intégration Shopify
2.  Accédez à l'onglet **Websites & Stores**
3.  Cliquez sur **"Pull Websites and Stores"** pour charger tous les marchés et langues disponibles
4.  Activez le bouton **Status** pour les boutiques avec lesquelles vous souhaitez travailler
5.  Cliquez sur **"Pull Products"** pour chaque boutique
6.  Attendez que la barre de progression atteigne **100%**

Vos produits sont désormais disponibles dans le **Catalog** de Fozzels, avec tous leurs attributs, prêts pour la génération de contenu par IA.

## Et ensuite ?

Une fois vos produits récupérés, vous pouvez :

-   Parcourir et filtrer vos produits dans le **Catalog**
-   Créer un **Content Flow** pour générer des descriptions par IA, des titres SEO, etc.
-   Configurer un **Image Flow** pour générer des photos produit professionnelles par IA
-   Utiliser **Video Flow** pour créer automatiquement des vidéos produit

→ [Découvrez comment créer votre premier Content Flow](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
→ [Découvrez les Image Flows](/content-creation-flows/user-guide-automated-image-flow/)

_Besoin d'aide ? Contactez-nous à l'adresse [support@fozzels.com](mailto:support@fozzels.com)_
