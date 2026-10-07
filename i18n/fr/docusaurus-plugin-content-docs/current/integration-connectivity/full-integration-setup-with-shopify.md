---
id: '103000367854'
title: "2.3.3. Configuration complète de l'intégration avec Shopify"
sidebar_position: 5
slug: /integration-connectivity/full-integration-setup-with-shopify
description: >-
  Ce guide détaille comment configurer une connexion bidirectionnelle sécurisée
  entre votre boutique Shopify et Fozzels à l'aide de Custom Apps (Private Apps)
  et configurer…
---

Ce guide détaille comment configurer une connexion bidirectionnelle sécurisée entre votre boutique **Shopify** et **Fozzels** à l'aide de **Custom Apps** (Private Apps) et comment configurer les paramètres de synchronisation.

## Étape 1 : configuration de la Custom App Shopify

### 1.1. Création de l'application

1.  **Ouvrez** un navigateur et **connectez-vous** à votre **Shopify Admin**.

2.  **Accédez** à la section **Settings**.

3.  **Accédez** à la section **Apps and sales channels** dans le menu latéral.

4.  **Cliquez** sur **Develop apps**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/FQMhwpXYX9AaHS64ub51WznCudG_HjF_GQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/im1AvTKi6MWYyaB5au2QV52k6g-zKgIJPQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/_flCr1G21Y0eiLDKAAikCGA8aItw-mC2Ng.png)

5. **Cliquez** sur **Create an app**.

6. **Renseignez** le nom de l'application (App name : **Fozzels**) et **choisissez** votre compte dans la section développeur de la fenêtre contextuelle "Create an app".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/iwwZ8YAvrwc95yWJhOvB1oRxvwcRY-TaUw.png)

### 1.2. Configurer les autorisations (scopes)

1.  **Accédez** à la section **Configure Admin API scope**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Ul-1S5j5J-ff2mqfWD_hCHBbpsCPJPNOJA.png)

2. **Activez** les autorisations obligatoires suivantes à l'aide du champ de recherche : read\_product\_listings , read\_products , write\_products , read\_metaobject\_definitions , read\_metaobjects , read\_product\_feeds .

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Q-ViUfe7pSUU1B02HTAe2_fR-ncQiNevEw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/VlG1HE0ZjQVE-ftYEYNp1-YpSbOdYRXSGw.png)

3. **Attention !** Si vous utilisez **Markets** dans Shopify pour gérer différentes régions ou différents pays, vous devez également **ajouter** les autorisations suivantes : write\_translations , read\_translations , write\_markets , read\_markets , read\_locales .

4. **Vérifiez** la liste complète des autorisations activées. Elle doit ressembler à ceci :

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/oRHwBytJR6A9FPaCaQdSSF83Rk5PHBPKiw.png)

5. **Cliquez** sur Install app pour terminer la création.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/mmVlY4rP_YWAoM7ED5aByqLh37nfQomtcA.png)

### 1.3. Préparer les identifiants

1.  **Accédez** à la section **API credentials**.

2.  **Copiez** et **conservez** tous les champs nécessaires pour les ajouter dans Fozzels.
    2.1. **Copiez** l'API key Shopify (pour le champ API key dans Fozzels).
    2.2. **Copiez** l'API Secret key Shopify.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/8XPxI0phlV2LNnbr1Aj-4wH3VCl_q62JQw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/0VUTxufo_k1f9p3im2fqQ0x1mA9tu4gAIg.png)

## Étape 2 : créer l'intégration dans Fozzels

### 2.1. Configuration de la connexion

1.  **Connectez-vous** à votre compte Fozzels via `https://app.fozzels.com`.

2.  **Accédez** à la section **Integration**.

3.  **Cliquez** sur **« New Integration »**.

4.  **Choisissez** la plateforme **Shopify**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Pyzl5zTGARVEwFahvJ9LgtWhqC42AkOW-Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/9ZDhsVks6A3bEPfvWW2KUSi_LC5nxPkKKA.png)

5. **Renseignez** le nom de votre intégration.

6. **Renseignez** l'URL de la boutique en ligne Shopify.

**Remarque !** Pour les champs URL et App Host Name, **utilisez** toujours le sous-domaine `.myshopify.com`, et non l'URL « réelle ». Exemple : `teststore.myshopify.com`.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/5Es2Xe5K4kX7G9ceTSqa0zcRdqY7LOd18w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/2V9Pr-82uxKsTQw5vzihFFVkdOXXeYRTYg.png)

7. **Copiez** et **collez** tous les champs obligatoires dans Fozzels.
    7.1. **Collez** l'API key Shopify dans le champ API key de Fozzels.
    7.2. **Collez** l'API Secret key Shopify dans le champ API Secret de Fozzels.
    7.3. **Collez** l'App Host Name.

8. **Activez** l'interrupteur **Markets or LangShop** pour pouvoir synchroniser le contenu des produits de différentes boutiques (pour les locales, et pas seulement la boutique par défaut).

9. **Cliquez** sur le bouton **Save**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/10MdEKRe3CAXM8phYawwasjHybRh5utDcg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/1gUl8bf3vOc8OzNHXG0e2xOkIOfqafgQgQ.png)

### 2.2. Activation et synchronisation

1.  **Activez** l'intégration (**Active**).

2.  **Récupérez** les sites web et les boutiques (Pull).

3.  **Assurez-vous** que l'intégration affiche les statuts suivants et que les sites web et boutiques actuels sont affichés :
    3.1. Authorized: yes
    3.2. REST API Connected: yes

4.  **Activez** les sites web et les langues à l'aide des interrupteurs. _La langue par défaut du marché est signalée par une étoile._

5.  **Cliquez** sur le bouton **« Pull Products »** pour lancer la récupération des produits et des attributs. **Attendez** le chargement des produits (la progression est affichée dans la barre de progression).

6.  **Accédez** à l'onglet **« Attributes »** pour consulter, activer/désactiver ou modifier les attributs chargés. **Pour en savoir plus** sur la gestion des attributs, cliquez [ici](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/hf-7P91OunPrATXrTjI-eheh4APzl3yMTQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/QoYt9ReC4xDN26VlS3LlMJMq_48shcVFYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/nRpJNQGSWcWm_BelS7-uGiBdpAXGz7G4nA.png)

_\* La langue par défaut du marché est signalée par une étoile_

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/BRzfcGMI7cun1wQGg3Vv1VHM9WbikgIqMg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/XOn4d1hw9r48sW-PN1cKj0Mr5B4q-HxITA.png)

Une fois l'intégration créée avec succès, vous pouvez **commencer** à créer des flows et **générer** votre **[premier contenu](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)** dans Fozzels !
