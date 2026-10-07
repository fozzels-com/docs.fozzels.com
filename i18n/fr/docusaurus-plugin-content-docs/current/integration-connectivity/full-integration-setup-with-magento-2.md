---
id: '103000367853'
title: 2.2. Configuration complète de l'intégration avec Magento 2.
sidebar_position: 2
slug: /integration-connectivity/full-integration-setup-with-magento-2
description: >-
  Ce guide détaille le processus d'établissement d'une connexion bidirectionnelle
  sécurisée entre votre boutique Magento 2 et Fozzels. Vous allez générer les
  jetons d'API nécessaires et configurer les autorisations. T
---

Ce guide détaille le processus d'établissement d'une connexion bidirectionnelle sécurisée entre votre boutique Magento 2 et Fozzels. Vous allez générer les jetons d'API nécessaires et configurer les autorisations, afin de garantir une importation fluide des données produit et une exportation fluide du contenu.

L'intégration Magento 2 nécessite de créer une nouvelle intégration dédiée (New Integration) dans le panneau d'administration de Magento afin de générer quatre clés essentielles : **Consumer Key**, **Consumer Secret**, **Access Token** et **Access Token Secret**. Nous configurerons également l'attribut requis `fozzels_completion_date`, qui permet de suivre la synchronisation du contenu.

## Partie 1 : configuration de Magento 2 (création de l'intégration et des jetons)

Vous devez créer une nouvelle intégration et définir des autorisations spécifiques dans votre panneau d'administration Magento.

### Étape 1 : créer une nouvelle intégration

1.  **Connectez-vous** à votre panneau d'administration Magento.

2.  **Accédez** à **System** / **Integrations**.

3.  **Cliquez** sur le bouton **“Add New Integration”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gr4UpPbx41G2Oy6OOEdyCKol_ENow66ITg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/N7zrOrdp8o6CvLgUlZhpQuMcQs5r7OVmWw.png)

### Étape 2 : renseigner les informations de l'intégration

1.  **Accédez** à l'onglet **Integration Info** (paramètres de base).

2.  **Renseignez** les champs obligatoires :
    2.1. **Saisissez** Name : Fozzels.
    2.2. **Saisissez** E-mail : info@fozzels.com.
    2.3. **Saisissez** votre mot de passe d'administrateur Magento pour confirmation.

3.  **Ignorez** les champs facultatifs (Callback URL, Identity link URL).

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/EM4ivAqLXVniXYWdiyAMElpusFWgWjUgvQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/6vzO74ehADcyuIaahKWVOQtYVvHWVkD_vg.png)

### Étape 3 : configurer les autorisations d'API (Scopes)

1.  **Cliquez** sur l'onglet **"API"**.

2.  Dans le menu déroulant, **sélectionnez** **"Custom"**.

3.  **Cochez** uniquement ces cases (pour l'accès en lecture/écriture) :
    3.1. **Catalog** : Categories, Inventory, Products, Update Attributes, Edit Product Design.
    3.2. **Stores** : Settings, All Stores.
    3.3. **Attributes** : Product, Attribute Set.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/QphCzWE1SkWWnk3rdvVZReWcdPfHny5hsQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/TXQWFfKyYyQlNwHODT_3OsVgEHngoyaPXg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/j3iFU0HffLd73Kzc_rQEt62o2oTsVpxF2g.png)

### Étape 4 : enregistrer et activer l'intégration

1.  **Cliquez** sur le bouton **“Save”** en haut à droite.

2.  Sur la page de la liste des intégrations, **repérez** la nouvelle intégration Fozzels.

3.  **Cliquez** sur le lien **”Activate”**.

4.  Sur la page de détail de l'activation, **vérifiez** que les API correctes (de l'étape 3) ont été sélectionnées, puis **cliquez** sur **"Allow"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/_C1d9Jr1A4136F6oEoNWIM2R2fnU0SwdvA.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/cBnv6FpiV0647eqHlNbNHIyCXcA_kHEx5A.png)

### Étape 5 : copier et conserver les clés d'API

1.  Après avoir cliqué sur "Allow", vous serez **redirigé** vers la page “Integration tokens for extensions”.

2.  **Copiez** et **conservez en lieu sûr** les quatre valeurs renseignées automatiquement :
    2.1. Consumer Key
    2.2. Consumer Secret
    2.3. Access Token
    2.4. Access Token Secret

3.  **Cliquez** sur **“Done”**.

4.  Vous pourrez **vérifier** ou **modifier** les détails de l'intégration ultérieurement en **appuyant** sur le bouton **“Edit”** de la page Integrations.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/NOrDSAhjlO7hXjU2J1fafMmXfcMy-Lypwg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/Pj-HIMnlhJNvqDzEYmDckrL3xvLalFhsfw.png)


## Partie 3 : activation de Fozzels et synchronisation des données

### Étape 6 : vérifier l'accès à l'API

Avant de connecter Fozzels, assurez-vous que votre serveur ne bloque pas et ne limite pas le débit des requêtes de Fozzels vers l'API REST de Magento (`/rest/`) et l'API GraphQL (`/graphql`). Les pare-feu, les WAF et les services de sécurité tels que Cloudflare ou Sucuri peuvent bloquer ces requêtes.

### Que faire :

1.  Autorisez les adresses IP de Fozzels (IPv4 **et** IPv6) ainsi que le User-Agent de Fozzels, et excluez-les de la limitation de débit. Toutes les adresses et tous les paramètres, y compris les instructions pour Cloudflare, sont listés dans [2.1.1. Connection Requirements: IP Addresses, User-Agent and Firewall Settings](./connection-requirements.md).
2.  Transmettez cette page à votre hébergeur ou à l'administrateur de votre serveur.

Si cela n'est pas fait, vous recevrez une erreur **401 (Unauthorized)** lors de la création de l'intégration dans Fozzels, ou une erreur **429 (Too Many Requests)** pendant Pull Products, et la connexion ou la synchronisation ne pourra pas aboutir.

Une fois les modifications confirmées, passez à la création de l'intégration dans Fozzels.

### Étape 8 : créer une nouvelle intégration dans Fozzels

1.  **Connectez-vous** à votre compte Fozzels.

2.  **Accédez** à **Integrations**.

3.  **Cliquez** sur **“Create New Integration”**.

4.  **Choisissez** **"Magento"** parmi les options disponibles.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/M9c13tHfbMEfpo7QsFt_Q6DvUljm-1jM1Q.png)![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/UvSS02f-tz_5sjBViKw7tq0kWJRti5mSvA.png)


![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/RrDkikq2qamOno3s8JmMIrJfno5S5gpIew.png)


### Étape 9 : renseigner les informations de connexion

Vous utiliserez les clés de la partie 1 pour connecter Fozzels et lancer l'importation des données.

1.  **Donnez** à votre intégration un nom explicite (**Name**).

2.  **Saisissez** l'**URL** de votre site Magento.

3.  **Renseignez** dans les champs correspondants les quatre clés copiées à l'**étape 5**.

4.  **Cliquez** sur **“Save”**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/o_z4KRc-z_zOvcPpPvDV5evmBRJNZO-4vQ.png)

### Étape 10 : activer et synchroniser les boutiques

1.  **Activez** le bouton bascule **‘Active’** en haut à droite. _Sans cela, la connexion ne fonctionnera pas._

2.  **Accédez** à l'onglet **“Websites & Stores”**.

3.  **Cliquez** sur le bouton **"Pull websites and stores"**. Vos sites web et vos boutiques devraient maintenant apparaître.

4.  **Vérifiez** que l'intégration affiche les statuts suivants : **Authorized: yes** et **REST API Connected: yes**.

5.  **Activez** les sites web et les boutiques concernés à l'aide du **bouton bascule** pour la suite du travail.

_![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/FvECiFfTlviQFFK2fJ8FF2Uoa9iBogloGg.png)_
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/d3dKR2OUZS7d-iiP2ptuZXFlu9JQKqz93A.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gjRG-nmFAybUytQo_B_QzBZew6ZY5FygNQ.png)


### Étape 11 : lancer Pull Products et vérifier

1.  **Cliquez** sur le bouton **“Pull Products”** pour lancer l'importation de votre catalogue de produits.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/s372RDIQcyC9gZU1pE-mNmKjoV3tHwE2XQ.png)

2.  **Attendez** que les produits soient chargés (la progression s'affiche dans la barre de progression).

3.  **Accédez** à l'onglet **"Attributes"** pour configurer vos règles de synchronisation.

4.  **Pour en savoir plus** sur l'utilisation des attributs de produit et la personnalisation des champs de données, consultez [cet article](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).

[](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/)
