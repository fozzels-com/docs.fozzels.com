---
id: '103000368952'
title: "3.2.1. Analyse de la qualité des attributs. Data Density Percent. Attributs personnalisés"
sidebar_position: 6
slug: >-
  /data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes
description: >-
  Ce document propose à la fois une vue d'ensemble conceptuelle et des
  instructions pratiques détaillées sur le cycle de vie complet des Attributes
  produit au sein de la plateforme Fozzels.
---

Ce document propose à la fois une vue d'ensemble conceptuelle et des instructions pratiques détaillées sur le cycle de vie complet des **Attributes** produit au sein de la plateforme Fozzels : de l'importation et de l'analyse initiales à la configuration avancée, à la transformation et à la création de champs personnalisés.

Les attributs sont la **source unique de vérité** (Single Source of Truth) pour la génération de contenu par IA. Leur gestion implique de contrôler la **Data Density**, le **mappage** et la **localisation**, ce qui est essentiel pour créer des descriptions produit de haute qualité, pertinentes et factuellement exactes. Configurer la collection d'attributs avant de commencer le travail (en examinant et en désactivant les champs non pertinents ou vides) est une étape essentielle qui facilite nettement les opérations suivantes.

### Partie 1 : importation et analyse de base

#### 1.1. Que sont les Attributes Fozzels ?

Les attributs sont des données structurées (par ex. `color`, `price`, `material`) importées depuis votre plateforme intégrée. Ils servent de variables d'entrée pour le **Prompt Field**, ce qui permet de générer un contenu unique pour chaque produit.

#### 1.2. Lancement de l'importation (Pull)

Le processus d'importation des données commence par la commande **Pull Products**.

1.  **Accédez** aux paramètres de votre intégration et **sélectionnez** l'onglet **Websites & Stores**.

2.  **Cliquez** sur le bouton **“Pull Products”** de la boutique active.

3.  **Suivi :** la progression s'affiche via une barre de progression. Le processus peut être géré à l'aide des boutons **Stop**, **Pause** et **Resume**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/6SrlYRiz66TUDmf63b5peXAC6EfLCFTjEw.png)

4.  **Journaux :** des rapports détaillés sur l'importation des produits et des attributs sont disponibles via **“View Product Logs”** et **“View Attribute Logs”** dans la colonne Actions.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/DLITtFMHc0MmEeK2UDasXyL5ZaBZifO06Q.png)

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/JRoTBrRsovpu033tRmysjhhnEYa-1nIkzg.png)

#### 1.3. Analyse qualité : Data Density Percent

Dans l'onglet **Attributes**, Fozzels calcule automatiquement la qualité de chaque champ.

-   **Définition :** la **Data Density** est le pourcentage de produits du catalogue pour lesquels cet attribut possède une valeur non vide et exploitable.

-   **Utilisation :** les attributs à faible densité ne doivent être utilisés que dans une **logique conditionnelle** (blocs `if`) afin d'éviter de générer du contenu comportant des lacunes factuelles ou des espaces vides.

-   **Gestion :** vous pouvez **désactiver** les attributs dont la densité est de 0 % ou que vous ne prévoyez pas d'utiliser, ce qui simplifie l'interface du **Flow Builder**.

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/suceb1fs0FvE76a7CHN6A6JvqnLGLtaL2g.png)

### Partie 2 : vérification et configuration

#### 2.1. Examen des exemples de données (Get Random Example Data)

Pour vérifier les valeurs importées et leur localisation, utilisez la fonction d'exemples de données.

1.  **Cliquez** sur la fonction **"Get random example data"** dans l'onglet Attributes.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GzPH1l304MY6YjwmxuhHfMjO3s2YS-YD6A.png)

2.  **Sélectionnez** une boutique ou une locale dans le menu déroulant. Cela vous permet de voir à quoi ressemblent les valeurs pour un marché linguistique donné (par ex. la couleur « zwart » pour une boutique néerlandaise contre « black » pour une boutique anglaise).
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GyKgf3yfF6tWo11gSYr6JXc8Y99q4tIA8Q.png)

3.  **Utilisez** les boutons **flèche avant/arrière** pour afficher différentes valeurs d'attribut provenant de divers produits aléatoires.

#### 2.2. Modification avancée des attributs (fenêtre Edit Attribute)

Un clic sur l'**icône Edit** (crayon) d'un attribut ouvre la fenêtre de configuration avancée.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dUU-_lgywMI5u-f7Y9G9ppxK9QLX_ljCAA.png)

##### Transformation des données

-   **Transform Data :** permet l'**exécution de code à l'exécution** (Runtime Code Execution, code personnalisé) sur la valeur importée avant son stockage.

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/XMR_zIZH_IM-p4UANnIYB8m37CATk4nhBQ.png)

##### Indicateurs techniques

-   **Filterable :** si cette option est activée, cet attribut peut servir à filtrer les produits dans le Catalog/Batch List selon sa valeur.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/EvbjNHS2aedS-hzos_piQd1wAtXba0rJww.png)
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dxX8mUPfJNYVbhVNTB7vDcF--x2JUiW3CQ.png)

-   **Mutable :** si cette option est activée, Fozzels est autorisé à **écrire** (exporter) des données vers ce champ sur la plateforme source.

-   **Inheritable :** détermine si la valeur de l'attribut d'un produit **parent** doit être automatiquement copiée vers ses variantes **enfants**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/24rgLlDhyDeaL87wmVe_rWJG8rNvx4u5YA.png)

-   **Allow HTML :** permet à l'attribut de contenir et d'afficher des balises HTML.

##### Localisation du nom de l'attribut

-   Dans l'onglet **Localization**, vous pouvez **saisir** le nom localisé souhaité de l'attribut pour chaque version de boutique connectée.

-   **Résultat :** les noms localisés saisis s'affichent dans les en-têtes de colonnes des tableaux et dans la fenêtre **Flow Prompt**, ce qui aide l'IA à comprendre l'attribut dans le contexte de la langue de la boutique.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/hur7c60aN2_gvYH4QGK3hiVS0QSsqaTXBQ.png)
    _pour la boutique EN :_
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2UvshsNaysqHkYC0DA1ZjsYnZ06wRogQfQ.png)

   _pour la boutique NL :_
    _![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/rGRdeC3Lob__8TSrZSZP07ap45ESGV7YcQ.png)_

### Partie 3 : création d'attributs personnalisés

#### 3.1. Finalité des attributs personnalisés

Les **Custom Attributes** sont des champs créés directement dans Fozzels. Ils peuvent servir de champ cible pour enregistrer du contenu généré ou pour des valeurs calculées.

#### 3.2. Processus de création d'un nouvel attribut

1.  **Cliquez** sur le bouton **"New Attribute"** dans l'onglet Attributes.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/LziDSQFwLlpE7kPgzI_R1FSLOGhzqMJhMg.png)

2.  Dans la fenêtre contextuelle **"Create New Attribute"**, définissez :
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2nTs3mBYNoxGTi61kVLJbWfr45SFrAV-Qg.png)

-   **Name :** un nom descriptif pour l'interface.

    -   **Code :** un identifiant technique unique.
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/39sh5ONkvBeaLHia--kl0pSjQC34K3wHTQ.png)

    -   **Frontend Input :** le type de données que l'attribut contiendra (**Text**, **Textarea**, **Select**, **Multiselect**, **Date**, **Boolean**, **Weight**, etc.).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dPHGR82fmOzt6JcWICNhXny23ofktRFVw.png)

    -   **Generic Mapping :** standardisez l'attribut selon la structure interne de Fozzels (par ex. sélectionnez **Description**).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dhlYPSoDYXoxvTfahRTrFL8wOTxjURLVIQ.png)

3.  **Frontend Field Display With Widget :** vous pouvez éventuellement sélectionner un widget pour définir l'affichage du champ dans le Catalog (par ex. **Category Tree, Image, Product ID**).

4.  **Cliquez** sur **“Save”**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/NGdrMyUieEv_wTjftyUbnE47OmN56Ekvlw.png)

5\. Vérifiez l'attribut créé dans la fenêtre contextuelle "**Edit attribute**" et configurez-le si nécessaire.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/aZZ4Pw6tM39wJo25lxXp3PoMSFNptTQxGA.png)
6\. Vérifiez le résultat dans la **Attribute list** générale.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/AYfNwv4-y98aOsUmRM3PnLH68aSQJkC8gw.png)
