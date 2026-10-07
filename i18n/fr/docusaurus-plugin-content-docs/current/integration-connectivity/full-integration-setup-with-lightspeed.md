---
id: '103000367856'
title: "2.6. Configuration complète de l'intégration avec Lightspeed."
sidebar_position: 16
slug: /integration-connectivity/full-integration-setup-with-lightspeed
description: >-
  Ce guide détaille comment établir une connexion API bidirectionnelle sécurisée
  entre votre boutique Lightspeed eCom et Fozzels en générant l'API Key et
  l'API Secret requis dans le Lightspeed Manager.
---

Ce guide détaille comment établir une connexion API bidirectionnelle sécurisée entre votre boutique Lightspeed eCom et Fozzels en générant l'API Key et l'API Secret requis dans le Lightspeed Manager.
L'intégration Lightspeed nécessite de créer une New API Key dédiée et de définir des autorisations (Scopes) de lecture et d'écriture précises, afin que Fozzels puisse récupérer les données produit en toute sécurité et renvoyer le contenu généré par l'IA vers votre catalogue.

### Partie 1 : configuration de Lightspeed (génération des identifiants API)

Vous devez accéder à votre compte Lightspeed pour créer et activer la paire de clés API nécessaire.

#### **Étape 1 : connexion et accès aux paramètres API**

1.  **Ouvrez** un navigateur et **connectez-vous** au Back Office Lightspeed eCom (Lightspeed Retail Manager) avec vos identifiants d'administrateur.

2.  Dans le menu principal de Lightspeed, **accédez** à la section "Settings".

3.  **Repérez** et **sélectionnez** "API Keys" ou "Developers".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/MZv-XXhmVP6BJaa1Bodx1omwsE79Sz8QMg.png)

#### Étape 2 : créer une nouvelle clé API

1.  **Cliquez** sur le bouton "Add API Key" ou "New Key".

2.  **Nommez** clairement l'intégration (par ex. Fozzels Integration).

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/C88N5mBpcnAN8OkGn8_qwt9UDUb2JF1Z9w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/AzUkWXCCt69kJBjU9LTQpJgW0iLlNd56yw.png)


#### Étape 3 : définir les autorisations (Scopes)

La page de paramètres de la nouvelle connexion s'ouvre automatiquement. Vous **devez** sélectionner les autorisations nécessaires pour Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/CioSxLGTyO3ZE1aF8NeArPcp8qx-oz22mw.png)

1.  **Vérifiez** que les autorisations de lecture et d'écriture sont accordées pour les sections suivantes :
    -   Content  → read and write

-   Products → read and write

-   Settings → read and write

Remarque : l'accès "Write" permet à Fozzels de mettre à jour les données de votre boutique Lightspeed, ce qui garantit la synchronisation bidirectionnelle.)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/qQg2365EfWu2BevBccdOrXyc1jnZs_p1Pg.png)**Étape 4 : activation et copie des clés**

1.  Dans le coin supérieur droit de la page des paramètres d'autorisations, **activez** le bouton (Enable this API key).

2.  **Cliquez** sur le bouton "Save".

3.  **Faites défiler** la page jusqu'au bloc "Details".

4.  Pour afficher l'**API Secret (Secret Key)**, **cliquez** sur le bouton "Show".

5.  **Copiez** les deux clés (**API Key** et **API Secret**) pour l'étape suivante.

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/YDWX-BrATu6YaqEag_egzmNrIb_mD9VfJQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/sjIxSoTRRX4BVp_klePTX0i1orEGgq1eFg.png)
Résultat attendu : la liste Developers affiche désormais une entrée pour la connexion Fozzels créée et active.)

### Partie 2 : activation de Fozzels et synchronisation des données

Transférez les clés copiées vers la plateforme Fozzels et lancez la synchronisation.

#### **Étape 5 : démarrer une nouvelle intégration**

1.  **Connectez-vous** à votre compte Fozzels.

2.  **Accédez** à la page Integrations.

3.  **Cliquez** sur le bouton "New Integration".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aXXjYseZEe8aGbAnzQXq0LsF6GCxXYmSCQ.png)

4.  **Sélectionnez** "Lightspeed" dans la liste des services disponibles.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aYuT19m6Pe5D1XRvGXFAKXPJF1jq5__j1g.png)

#### **Étape 6 : renseigner les champs de configuration**

Sur la page "Create New Integration", **renseignez** les champs suivants :

1.  **Name :** **saisissez** un nom clair pour cette intégration (par ex. Lightspeed\_INT).

2.  **URL :** **saisissez** l'URL de votre boutique Lightspeed.

3.  **API Key :** **collez** l'API Key copiée depuis Lightspeed.

4.  **API Secret :** **collez** l'API Secret copié depuis Lightspeed.

5.  **Language :** **choisissez** la langue principale de votre site web.

6.  **Cluster :** **sélectionnez** le cluster (région) approprié où est hébergée votre boutique Lightspeed.

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/rmiVHOPB99FOtO7FZUQ0_YI_ma2jqnnB1w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/HY4qeR3DTL_8O1hm3il8lNhcNpKi2XECUw.png)

**Étape 7 : activer et enregistrer l'intégration**

1.  **Activez** l'intégration en positionnant sur **On** le bouton "Active" dans le coin supérieur droit.

2.  **Cliquez** sur le bouton "Save".

#### **Étape 8 : configuration de Websites & Stores et récupération des données**

Vous passez maintenant à l'onglet "Websites & Stores" (étape 2) dans Fozzels.

1.  **Cliquez** sur le bouton "Pull Websites and Stores".

2.  **Activez** les sites web et les boutiques requis en positionnant sur **On** les boutons **Status** correspondants.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/FARHG3ynyx8xadPlNcxi8OeOH6UTmF3J7Q.png)

3.  Pour chaque boutique nécessaire, **cliquez** sur le bouton **"**Pull products**"**. Cette action lance le chargement initial des données produit dans Fozzels.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/QuBZPoYbMSBquMmbbycLgRYnd-2U4mjjbA.png)

Une fois le chargement des produits terminé, Fozzels est prêt ! Vous pouvez passer à l'onglet "Attributes" pour configurer vos règles de synchronisation. Pour des instructions détaillées sur le travail avec les attributs produit et la personnalisation des champs de données, consultez : 3.1. Importing and Catalog Overview.
