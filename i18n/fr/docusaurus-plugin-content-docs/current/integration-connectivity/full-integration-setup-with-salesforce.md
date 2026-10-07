---
id: '103000410190'
title: 2.10.1 Configuration complète de l'intégration avec Salesforce.
sidebar_position: 21
slug: /integration-connectivity/full-integration-setup-with-salesforce
description: >-
  Ce guide vous accompagne dans la création d'une nouvelle intégration
  Salesforce Commerce Cloud, de la configuration initiale à l'enregistrement de
  votre configuration, en passant par l'activation des Websites &…
---

Ce guide vous accompagne dans la création d'une nouvelle intégration Salesforce Commerce Cloud, de la configuration initiale à l'enregistrement de votre configuration, en passant par l'activation des Websites & Stores, la récupération des données produit et la vérification des mappings d'attributs. Vous apprendrez à renseigner les informations de connexion requises (Short Code, Organization ID, Client ID/Secret), à comprendre le fonctionnement du Global Pull Schedule avec l'heure UTC, et vous saurez quand configurer des délais entre les requêtes.

## Étape 1 : accéder à la création d'une intégration

1.  Dans le menu latéral, accédez à **Home → Integrations**.
2.  Cliquez sur le bouton **Create** (en haut à droite).
3.  Sur l'écran **"Choose your integration"**, sélectionnez la plateforme **Salesforce**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/IJA_dZ5zfXA48PaD8HMxsHD71ItRVgwANg.png)
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/sTmy2P9U7mD0ENp0NC-gg8Y0oT53ZtfzLg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/bbv7bi_E2qSTk1bDVEN706lCu7fETDnn1g.png)
Le formulaire **Create New Integration** s'ouvre ; il comporte trois étapes : **1\. Configuration → 2. Websites & Stores → 3. Attributes**.

## Étape 2 : remplir le formulaire de configuration
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/_4n7-QBaGDhtz4yq_LpPLXF5t7s-sE-_vQ.png)

### Champs principaux :

| Champ | Description |
| --- | --- |
| **Name**\* | Nom de l'intégration, utilisé pour l'identifier dans la liste des intégrations |
| **URL**\* | URL de base de votre instance Salesforce Commerce Cloud |

**Bloc Configuration :**

| Champ | Description |
| --- | --- |
| **Short Code**\* | Short code de votre instance Salesforce Commerce Cloud |
| **Organization ID**\* | L'ID de votre organisation Salesforce |
| **Client ID**\* | ID du client OAuth créé dans Salesforce Account Manager |
| **Client Secret**\* | Clé secrète de ce client OAuth |
| **Image CDN Base URL** _(facultatif)_ | URL de base du CDN (DIS) utilisé pour télécharger les images produit. Exemple : `https://exxe.ххххх.commercecloud.salesforce.com/dw/image/v2/XXXX-XXX` |

_Les champs marqués d'un astérisque (\*) sont obligatoires._

## Étape 3 : Global Pull Schedule

Le bouton **Overwrite Global Pull Schedule** vous permet de définir quand la synchronisation des produits doit s'exécuter. S'il est désactivé, la planification globale par défaut (`03:30`) est utilisée.

> ⚠️ **Important : l'heure est définie en UTC**
>
> Le champ Global Pull Schedule utilise l'**heure UTC**, et non votre fuseau horaire local.
>
> Cela compte tout particulièrement si vous avez plusieurs Stores dans différentes régions : une heure creuse (nuit) pour une boutique peut tomber en pleine période de forte affluence pour une autre. Lancer une récupération de données pendant les heures de pointe peut ajouter une charge supplémentaire à votre site et le ralentir pour les clients.
>
> **Recommandation :** si vos Stores desservent différents fuseaux horaires, ne vous fiez pas uniquement au Global Pull Schedule : remplacez la planification pour chaque Store (`Overwrite Global Pull Schedule` dans les paramètres de ce Store), en définissant une heure correspondant à la véritable plage creuse de cette boutique, convertie en UTC.

## Étape 4 : Delay Between Pages / Delay Between Requests

Les champs **Delay between pages** et **Delay between requests** définissent une pause (en millisecondes, de 100 à 15000 ms) respectivement entre les pages de résultats et entre les requêtes API individuelles.

> ℹ️ **Astuce :** ces champs sont facultatifs. S'ils restent vides, le délai par défaut de la plateforme est utilisé.
>
> Nous vous recommandons de **ne pas définir ces valeurs tout de suite** lors de la première configuration de l'intégration. Lancez plutôt quelques récupérations de données avec les paramètres par défaut et observez le résultat :
>
> -   Si les récupérations se terminent avec succès, aucune configuration supplémentaire n'est nécessaire.
> -   Si des erreurs surviennent (par ex. limitation de débit côté Salesforce), retournez dans les paramètres de l'intégration et augmentez le délai pour réduire la charge sur l'API.

## Étape 5 : enregistrer

Une fois tous les champs obligatoires renseignés, cliquez sur **Save** pour passer à l'étape suivante : **Websites & Stores**.

## Étape 6 : Websites & Stores

Après avoir cliqué sur **Save**, vous êtes redirigé vers l'onglet **2\. Websites & Stores** de l'intégration.

> ✅ _Un message de réussite s'affiche : "Integration was created successfully. Please, do not forget to activate your Integration."_

### 1\. Activer l'intégration

Avant de pouvoir récupérer vos boutiques/sites web, passez le bouton **Active** sur ON (en haut à droite de la page, dans la barre d'état de l'intégration : Active / Authorized / REST API Connected).

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/Fn99DCFxArzsidpIraptWFwTO-BnqzkyTg.png)

### 2\. Pull Websites and Stores

Cliquez sur le bouton **PULL WEBSITES AND STORES**. Cette action autorise la connexion à Salesforce et récupère vos Websites et Stores disponibles.

> ✅ En cas de réussite, vous verrez : "Integration status has been updated", puis "Your websites and stores was pulled from integration successfully". Les indicateurs **Authorized** et **REST API Connected** passent au vert (✓).

### 3\. Activer les Websites et les Stores

Une fois la récupération effectuée, un tableau s'affiche, divisé en **Websites** (Name, Code, Status) et **Stores** (Language, Status, Pull schedule, Products, Pull Progress, Actions).

Passez chaque **Website** et chaque **Store** sur Active, un par un.

> ℹ️ **Remarque :** une étoile (⭐) à côté du nom d'un Website ou d'un Store indique qu'il s'agit de l'élément **par défaut (principal)**.

### 4\. Pull Products

Une fois un Store actif, le bouton **Pull products** devient disponible. Un clic dessus déclenche la récupération des données produit.

> ℹ️ **Remarque :** le lancement d'une récupération exécute en réalité **4 étapes séquentielles**, affichées sous forme de barres de progression individuelles lorsque vous développez Pull Progress (via la flèche déroulante à côté du bouton) :
>
> 1.  **Product Attribute**
> 2.  **Category Attribute**
> 3.  **Category**
> 4.  **Product**
>
> Chaque étape possède sa propre barre de progression et une icône **Refresh** pour relancer individuellement cette étape. Chaque étape possède également une icône **View logs** pour consulter le journal détaillé de cette étape de récupération.
>
> De plus, les étapes **Category** et **Product** disposent d'une icône **View in catalog**, qui vous permet d'accéder directement aux catégories/produits récupérés dans votre catalogue.

Lorsque les 4 étapes atteignent 100 %, la barre principale **Pull Progress** affiche **"Product - 100%"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/AXWOgFul8iBQWgLq0jQ5k5HmCHYYds3MQQ.png)

## Étape 7 : Attributes

La troisième et dernière étape, **Attributes**, affiche la liste des attributs récupérés depuis votre catalogue Salesforce, ainsi que leur statut de mapping.

### Sélecteur de mode d'attributs

Par défaut, le tableau affiche les attributs **Product**. En haut du tableau, un sélecteur de mode propose trois options :

-   **Product**
-   **Category**
-   **Brand**

> ⚠️ **Remarque :** pour cette intégration, les attributs **Brand** ne sont **pas encore pris en charge**, même s'ils apparaissent comme option dans le sélecteur.

Le changement de mode modifie l'ensemble d'attributs affiché. Par exemple, le passage à **Category** affiche des attributs propres aux catégories, comme `Category ID`, `Description`, `Name`, `Page Description`, `Page Keywords`, `Page Title`.

### Colonnes du tableau :

| Colonne | Description |
| --- | --- |
| **Name** | ID et libellé de l'attribut (par ex. `35759: Brand`, `35777: Category ID`) |
| **Code** | Le code technique de l'attribut dans Salesforce (par ex. `brand`, `ean`, `origin_category_id`) |
| **Scope** | Portée de l'attribut (le cas échéant) |
| **Generic Mapping** | Indique si l'attribut est mappé à un champ générique/système |
| **Allow HTML** | Indique si le contenu HTML est autorisé pour cet attribut (✓/—) |
| **Data Density Percent** | Pourcentage de produits/catégories qui ont réellement une valeur pour cet attribut — permet de repérer les champs peu renseignés (par ex. `Page Keywords` à 26 %, `Category ID` à 100 %) |
| **Example data** | Une valeur d'exemple récupérée à partir d'un enregistrement réel (produit ou catégorie, selon le mode) |
| **Active** | Indique si l'attribut est actuellement actif/utilisé (✓) |
| **Actions** | Icône Edit (✏️) pour configurer le mapping de l'attribut |

### Options de la barre d'outils :

-   Menu déroulant **Actions** : actions groupées pour les attributs sélectionnés
-   **Store selector** (par ex. Mystore`: en_us (en_US)`) : permet de choisir le Store à partir duquel récupérer les données d'exemple
-   **Get random example data** : une fois un Store sélectionné dans le menu déroulant, cette option remplit la colonne **Example data** avec une nouvelle valeur d'exemple choisie au hasard pour chaque attribut, ce qui est utile pour vérifier le mapping
-   **Column visibility** : afficher/masquer les colonnes du tableau
-   **New Attribute** (en haut à droite) : permet d'ajouter manuellement un attribut personnalisé non inclus dans la liste par défaut

> ℹ️ **Remarque :** les attributs affichés par défaut constituent l'**ensemble de base** fourni d'origine (par ex. Brand, EAN, Long Description, Price pour le mode Product ; Category ID, Name, Description pour le mode Category). Si votre catalogue Salesforce comprend des **attributs personnalisés**, utilisez le bouton **New Attribute** pour les ajouter et les mapper manuellement.

## Étape 8 : modifier un attribut

Un clic sur l'icône ✏️ **Edit attribute** dans la colonne Actions ouvre la fenêtre **Edit attribute**, qui affiche tous les détails de cet attribut ; certains champs sont modifiables, d'autres sont en lecture seule/des valeurs système.

### Champs :

| Champ | Description |
| --- | --- |
| **Entity Type** | Indique si l'attribut appartient à un **Product**, une **Category** ou une **Brand** _(lecture seule)_ |
| **Name (Origin Attribute Name on Integration)** | Le nom d'affichage de l'attribut tel qu'il provient de Salesforce (par ex. `Long Description`) |
| **Code** | Le code interne de l'attribut (par ex. `longDescription`) |
| **Origin Attribute ID** | L'ID de l'attribut côté intégration source (s'il est défini) |
| **Origin Attribute Code** | Le code de l'attribut tel qu'il existe côté Salesforce (par ex. `longDescription`) |
| **Frontend input** | Le type de saisie utilisé pour afficher/modifier ce champ (par ex. `Textarea`) |
| **Frontend Field Display With Widget** | Widget facultatif utilisé pour afficher ce champ dans le front-end |
| **Generic Mapping** ℹ️ | Mappe cet attribut à un champ générique/système, le cas échéant |
| **Transform Data** | Avancé : permet l'**exécution de code à l'exécution** pour transformer les données entrantes avant leur enregistrement _(⚠️ signalé par un avertissement — réservé à un usage avancé/technique)_ |

### Cases à cocher :

| Option | Description |
| --- | --- |
| **Allow HTML** | Indique si le contenu HTML est autorisé dans ce champ |
| **Enabled** | Indique si l'attribut est actif et utilisé |
| **Filterable** | Indique si cet attribut peut servir de filtre (par ex. dans la navigation du catalogue) |
| **Mutable** ℹ️ | Indique si la valeur peut être modifiée/écrasée après la récupération initiale |
| **Inheritable** ℹ️ | Indique si la valeur est héritée (par ex. d'une catégorie parente ou de la boutique par défaut) |

### Localization

Plus bas, pour chaque **Website** (par ex. `Mystore`) et chaque **locale** active (par ex. `en_us (en_US)`), vous pouvez saisir/modifier directement une **valeur localisée** pour cet attribut — par exemple, pour remplacer le texte `Long Description` affiché pour ce site web/cette locale en particulier.

Cliquez sur **Save** pour appliquer les modifications, ou sur **Cancel** pour les annuler.

> ⚠️ **Attention :** le champ **Transform Data** permet l'exécution de code à l'exécution ; il s'agit d'une fonctionnalité avancée. Un code incorrect à cet endroit peut perturber le traitement des données de cet attribut. Nous recommandons de ne l'utiliser que si vous maîtrisez la logique de transformation nécessaire, ou de contacter l'équipe support en cas de doute.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dXfx5OPU1hiT51CXn8LiDQwH-TEXGJXdVg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iV0xwN-jnstAKKgixyaCk_xrX_YowzggDg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dFxEvhIpzZghLVLLDiYbGvsGjZphndAgYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/N4ix6-rdWoomYb4sDO8JzYCvCdyhKxL3Cg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iSFTjf50J_sPVCyMi1T5KeoayFI8zi9FHg.png)

À ce stade, l'intégration Salesforce elle-même est entièrement configurée : autorisée, connectée, avec les Websites/Stores activés et les données produit récupérées avec succès.

Les étapes suivantes — configuration des **Catalogs** et création du **Flow** — suivent le même processus que pour tout autre type d'intégration et sont couvertes dans la documentation générale des intégrations, et non spécifiquement pour Salesforce.
