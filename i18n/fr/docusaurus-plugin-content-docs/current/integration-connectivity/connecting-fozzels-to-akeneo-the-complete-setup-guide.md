---
id: '103000395378'
title: "2.7. Connecter Fozzels à Akeneo : le guide de configuration complet"
sidebar_position: 17
slug: >-
  /integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide
description: >-
  Ce guide explique comment établir une connexion bidirectionnelle entre votre
  PIM Akeneo et Fozzels. L'intégration nécessite de créer deux connexions
  distinctes dans Akeneo
---

Ce guide explique comment établir une connexion bidirectionnelle entre votre PIM Akeneo et Fozzels. L'intégration nécessite de créer deux connexions distinctes dans Akeneo : l'une pour permettre à Fozzels d'envoyer des données vers Akeneo, et l'autre pour permettre à Akeneo d'exporter des données vers Fozzels. Une fois les deux connexions créées, vous les associez à votre compte Fozzels à l'aide des identifiants générés.

**Prérequis**

-   Un compte Akeneo actif avec un accès administrateur
-   Un compte Fozzels actif
-   Un accès à la zone des paramètres Connection dans Akeneo

**Partie 1 : configuration d'Akeneo (création des connexions)**

Étape 1 : connexion et accès aux paramètres Connection

1.  Ouvrez un navigateur et connectez-vous à votre **tableau de bord Akeneo** avec vos identifiants d'administrateur.
2.  Dans la barre latérale gauche, accédez à **Connect → Connection settings**.

Étape 2 : créer la connexion « Data Source » (Fozzels IN)

Cette connexion permet à Fozzels d'envoyer des données **vers** Akeneo.

1.  Cliquez sur le bouton **Create** dans le coin supérieur droit.
2.  Renseignez les champs suivants :
    -   **Label :** `Fozzels IN`
    -   **Code :** `fozzels_in`
    -   **Flow Type :** sélectionnez `Data source`
3.  Cliquez sur **Save**.
4.  Faites défiler la page jusqu'à la section **Permissions**. Dans la liste déroulante **Role**, sélectionnez `Administrator`.
5.  Cliquez de nouveau sur **Save**.
6.  Gardez cette page ouverte : vous aurez besoin des valeurs **Client ID**, **Secret**, **Username** et **Password** affichées à l'écran.

> **Astuce :** copiez chaque identifiant dans un fichier texte temporaire pour ne pas les perdre lorsque vous quittez la page.

Étape 3 : créer la connexion « Data Destination » (Fozzels OUT)

Cette connexion permet à Akeneo d'exporter des données **vers** Fozzels.

1.  Revenez à **Connect → Connection settings** et cliquez sur **Create**.
2.  Renseignez les champs suivants :
    -   **Label :** `Fozzels OUT`
    -   **Code :** `fozzels_out`
    -   **Flow Type :** sélectionnez `Data destination`
3.  Cliquez sur **Save**.
4.  Sous **Permissions**, définissez le **Role** sur `Administrator`.
5.  Cliquez sur **Save**.
6.  Copiez les valeurs **Client ID**, **Secret**, **Username** et **Password** de cette connexion.

> **Important :** chaque connexion génère son propre jeu d'identifiants unique. Veillez à copier et à étiqueter séparément les deux jeux : vous devrez coller chacun dans le bon champ de Fozzels.

**Partie 2 : activation dans Fozzels**

Étape 4 : démarrer une nouvelle intégration

1.  Connectez-vous à votre **compte Fozzels**.
2.  Accédez à l'onglet **Integrations**.
3.  Cliquez sur **Create New Integration**.
4.  Sélectionnez **Akeneo**.
    ![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/H4jUsBP_CVGytKdGvILnXxxrewyuDwsEwA.png)

Étape 5 : renseigner les champs de configuration

Sur la page de configuration de l'intégration, renseignez les champs suivants :

-   **Name :** saisissez un nom descriptif pour cette intégration (par ex. `Akeneo Connection`)
-   L'**URL** de votre site web
-   **OUT connection (Data FROM Akeneo) :** collez les identifiants de la connexion **Fozzels OUT** que vous avez créée à l'étape 3
-   **IN connection (Data TO Akeneo) :** collez les identifiants de la connexion **Fozzels IN** que vous avez créée à l'étape 2

![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/E3PznnpS3GxByBNHd8CfP3zkzZahhRaBWw.png)
Étape 6 : enregistrer l'intégration

1.  Cliquez sur le bouton **Save** en bas de la page.

Votre compte Fozzels est maintenant connecté à Akeneo. Les données peuvent circuler dans les deux sens, selon les connexions que vous avez configurées.

Si vous rencontrez des difficultés pendant la configuration, contactez notre équipe de support : nous serons ravis de vous aider.
