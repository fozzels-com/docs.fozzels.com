---
id: '103000408453'
title: "2.8.2 Configuration complète de l'intégration avec VTEX"
sidebar_position: 19
slug: /integration-connectivity/full-integration-setup-with-vtex
description: >-
  Ce guide fournit des instructions pas à pas pour intégrer votre boutique VTEX
  à Fozzels. Le processus comporte deux grandes étapes : générer les clés API
  requises
---

Ce guide fournit des instructions pas à pas pour intégrer votre boutique **VTEX** à **Fozzels**. Le processus comporte deux grandes étapes : générer les clés API requises dans votre panneau VTEX Admin, puis terminer la configuration dans Fozzels.

## Partie 1. Configuration côté VTEX

Pour permettre à Fozzels de lire la structure de votre catalogue et de réécrire le contenu généré dans votre boutique, vous devez créer un Role dédié avec des autorisations spécifiques et générer une **Application Key** et un **Application Token**.

### Étape 1. Créer un Role avec les autorisations requises

1.  Connectez-vous à votre panneau **VTEX Admin**.

2.  Accédez à **Account Settings** → **User Management** → **Roles**.

3.  Cliquez sur **New Role**.

4.  Donnez un nom explicite au rôle (par exemple, `Fozzels Integration`).

5.  Dans la liste des autorisations, ajoutez l'accès aux ressources suivantes :

-   **Catalog (License Manager) :**

-   `Category` — Read / Write

-   `Brand` — Read / Write

-   `Product` — Read / Write

-   `SKU` — Read / Write

-   `Specification / Attributes` — Read / Write

-   **CMS (s'il est utilisé pour les médias/images) :**

-   Accès `Read` / `Write`

6.  Enregistrez le nouveau rôle.

### Étape 2. Générer l'Application Key et l'Application Token

1.  Dans le menu **Account Settings**, accédez à **Account Management** → **Application Keys**.

2.  Cliquez sur **Manage Keys** ou **Generate Key**.

3.  Saisissez un Label facilement identifiable (par exemple, `Fozzels Connector`).

4.  Attribuez à cette clé le rôle créé à l'étape 1 (`Fozzels Integration`).

5.  Le système génère deux identifiants :

-   **Application Key** (reste visible dans votre liste).

-   **Application Token** (affiché **une seule fois** lors de sa création).

6.  **Important :** copiez et conservez immédiatement l'**Application Token** dans un endroit sûr. Une fois la fenêtre modale fermée, il est impossible de le récupérer !

Les utilisateurs peuvent également consulter la base de connaissances officielle de VTEX pour obtenir des instructions détaillées sur la création des Application Keys et Tokens :

-   Portugais : [https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave](https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave)
-   Anglais : [https://help.vtex.com/docs/tutorials/generated-keys](https://help.vtex.com/docs/tutorials/generated-keys)
-   Espagnol : [https://help.vtex.com/es/docs/tutorials/claves-generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas)

## Partie 2. Configuration côté Fozzels

Une fois vos identifiants API prêts, configurez la connexion dans Fozzels.

### Étape 1. Créer une nouvelle intégration

1.  Connectez-vous à **Fozzels** et ouvrez **Integrations** depuis le menu de navigation supérieur.

2.  Cliquez sur le bouton vert **\+ Create**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/gr4ewlKqt8412XMEVryYBDav3OrTYjV3cA.png)

3.  Sélectionnez **VTEX** dans la liste des plateformes d'intégration disponibles.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/XhEgu0COlAJDugphXl_XiaSkCKfS7TXueg.png)

### Étape 2. Saisir les détails de configuration (onglet 1 : Configuration)

Remplissez le formulaire de connexion :

-   **Name :** saisissez un nom pour cette intégration (par exemple, `VTEX Main Store`).

-   **URL :** saisissez l'URL/le domaine de votre boutique VTEX.

-   **Application Key :** collez l'Application Key générée dans VTEX.

-   **Application Token :** collez l'Application Token généré dans VTEX.

-   **Environment** _(facultatif)_ : la valeur par défaut est `vtexcommercestable`. Ne la modifiez que si VTEX vous a demandé d'utiliser un environnement personnalisé.

-   **Translation locales** _(facultatif)_ : pour les comptes transfrontaliers, indiquez les locales VTEX séparées par des virgules (par exemple, `es-AR, en-US`). Laissez vide pour les boutiques monolingues.

-   **Global Pull Schedule** _(facultatif)_ : définissez un planning de récupération automatique personnalisé ou conservez les paramètres par défaut.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pWrF-JFfW_Q5FelNCSz3IuA9l86yXEdItw.png)

-   **Pull Throttling / API Delays** _(facultatif)_ :

-   **Delay between pages :** définissez la durée de la pause après chaque page de résultats récupérée lors d'une récupération (`100–15,000 ms`). Laissez vide pour utiliser la valeur par défaut de la plateforme.

-   **Delay between requests :** définissez la durée de la pause entre les appels API individuels lors d'une récupération (`100–15,000 ms`). Laissez vide pour utiliser la valeur par défaut de la plateforme.

-   ⚠️ **Remarque :** définir ces valeurs en dessous des valeurs par défaut de la plateforme peut déclencher une limitation de débit de la part de VTEX et entraîner l'échec des récupérations du catalogue.

Cliquez sur **Save** dans le coin inférieur gauche.

### Étape 3. Vérifier le statut et récupérer les boutiques (onglet 2 : Websites & Stores)

1.  Vérifiez que tous les indicateurs de statut dans le coin supérieur droit sont actifs :

-   **Active** — Activé (commutateur vert).

-   **Authorized** — Coche verte.

    -   **REST API Connected** — Coche verte.
        ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/RnG46ot4A8YtvTAhatBAQIynkoXI8pbdJQ.png)

2.  Cliquez sur le bouton **PULL WEBSITES AND STORES** dans le coin inférieur gauche.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pywm-NKYAWTD0xkGPKQYZPH5WI5LKQCwIw.png)

3.  Vos sites web et les locales de vos boutiques apparaissent dans le tableau. Activez les commutateurs **Status** pour les sites web et les boutiques que vous prévoyez de traiter.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/Nv3b_PjszS4fHUfa_V2atIDZe_Sx838pAA.png)

### Étape 4. Récupérer les données du catalogue (Pull Products)

1.  Repérez votre boutique dans le tableau et cliquez sur **Pull products** (ou cliquez sur la flèche déroulante située à côté).

2.  Vous pouvez lancer la synchronisation de données pour des entités précises ou les exécuter séquentiellement :

-   **Product Attribute**

-   **Category Attribute**

-   **Brand Attribute**

-   **Category**

-   **Brand**

    -   **Product**
**![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/A-WrFZksz5q1Ml-MXGaobf-Sn_rKBjsNEA.png)**

3.  Attendez la fin de la synchronisation. Le statut de chaque entité passe au vert et affiche **100%**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/NamLSz4d9IyB6p3k94ULepvi0njfq465sQ.png)

4.  Cliquez sur l'icône en forme d'œil (**View**) à côté de n'importe quel bloc d'entité pour inspecter les données récupérées.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/e6KLPc8LFKplzkHemoeoNUVVG1SLMjnF7w.png)

Félicitations ! Votre intégration **VTEX** est maintenant entièrement configurée et prête à l'emploi. Fozzels synchronise désormais en toute transparence les données de votre catalogue, ce qui vous permet de générer facilement des descriptions produit IA de haute qualité, du contenu localisé et des métadonnées. Si vous devez effectuer des ajustements par la suite, vous pouvez à tout moment revenir à la page Integration Settings.

Bonne automatisation !
