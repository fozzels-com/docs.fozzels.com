---
id: '103000369006'
title: 3.3. Filtrage des produits pour la génération de contenu
sidebar_position: 7
slug: /data-import-and-quality/product-filtering-for-content-generation
description: >-
  Ce guide explique comment utiliser efficacement le mécanisme de filtrage de
  Fozzels pour sélectionner précisément un sous-ensemble de produits selon les
  valeurs de leurs attributs, afin de garantir une génération de contenu ciblée
  et efficace.
---

Ce guide explique comment utiliser efficacement le mécanisme de filtrage de Fozzels pour sélectionner précisément un sous-ensemble de produits selon les valeurs de leurs attributs, afin de garantir une génération de contenu ciblée et efficace.

### 1\. Accéder aux options de filtrage

Les options de filtrage sont disponibles à deux endroits principaux :

1.  **Content Flow Creation :** pour définir le batch de produits spécifique qu'un flux va traiter, **modifiez** un flux existant (ou créez-en un nouveau) et **accédez** à l'onglet **"Flow Selection & Prompt"**.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/M8M8DSbeTwyMCzVdPZg-AgTrZhknUKlMaA.png)

2.  **Product Catalog :**
    2.1 Activez l'option **"Advanced filter"**. Cela ouvre un panneau dans lequel vous pouvez utiliser **"Add condition"** et **"Add condition group"** pour créer une logique complexe.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/PCVDp6xbmqaVBtncYNWlb_f76UC2MmUI-g.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/IOHTRc5oV_-sARYVDZ-D0orkvhDrAYcI8A.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/R1pQBNQNg8sWQ-DUNYyn1nSlXHg750rAUg.png)
        2.2 **Inline Filtering :** filtrez les produits à l'aide des champs de saisie ou des listes déroulantes situés directement dans les en-têtes de colonnes du tableau des produits (disponible pour les attributs dont l'indicateur **Filterable** est activé).
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/AgXgNaluOPoF0zxvvmWoytasp0fhtnppLg.png)

3.  _**Point essentiel :** dans le Catalog, vous pouvez combiner des filtres en ligne en appliquant des conditions à plusieurs colonnes simultanément (par ex. filtrer par **SKU** **ET** par **Brand**)._

### 2\. Filtrer par conditions de valeur

Ce type de filtrage s'applique aux attributs de type texte, numérique et à sélection multiple.

1.  **Equal :** la valeur de l'attribut doit correspondre exactement à la valeur saisie. _Exemple : afficher uniquement les produits dont_ `Color` _est égal à_ `Blue`.

2.  **Not equal :** affiche tous les produits sauf ceux qui correspondent exactement à la valeur saisie. _Exemple : afficher tous les produits dont_ `Material` _n'est pas_ `Cotton`.

3.  **Is empty :** affiche uniquement les produits dont l'attribut sélectionné n'a aucune valeur (est vide). _Exemple : trouver les produits dont_ `Short Description` _est vide_.

4.  **Is not empty :** affiche uniquement les produits dont l'attribut sélectionné contient une valeur renseignée. _Exemple : trouver les produits dont le nom du_ `Manufacturer` _est renseigné_.

5.  **Contains :** la valeur de l'attribut doit contenir le fragment de texte ou de nombre saisi. _Exemple : trouver tous les produits dont_ `Name` _contient le mot_ `Summer`.

6.  **Doesn't contain :** la valeur de l'attribut ne doit pas contenir le fragment de texte saisi. _Exemple : exclure les produits dont_ `SKU` _ne contient pas_ `DISCOUNT`.

7.  **In / Not in :** la valeur de l'attribut doit correspondre à l'une des valeurs saisies (séparées par des virgules) ou ne doit correspondre à aucune d'entre elles. _Exemple (In) : afficher les produits dont_ `Size` _est_ `S, M, L`.

8.  **Begins with / Ends with :** trouvez des produits selon les premiers ou les derniers caractères de la valeur. _Exemple : trouver les produits dont_ `SKU` _commence par_ `P_`.

9.  **Is null / Is not null :** conditions techniques permettant de gérer correctement les valeurs vides ou non vides au niveau système.

### 3\. Filtrer par conditions de date

Ce type s'applique aux attributs au format date et permet de filtrer selon la chronologie (par ex. `created_at`, `updated_at`).

1.  **Is empty / Is not empty :** affiche les enregistrements dont le champ de date est absent ou renseigné. _Exemple : trouver tous les produits sans_ `update date`.

2.  **Equal :** affiche les enregistrements dont la valeur correspond exactement à la date saisie. _Exemple : trouver tous les produits créés le_ `2024-01-01`.

3.  **Less :** affiche les enregistrements dont la date est chronologiquement antérieure à la date saisie. _Exemple : trouver tous les produits mis à jour avant_ `last month`.

4.  **Greater :** affiche les enregistrements dont la date est chronologiquement postérieure à la date saisie. _Exemple : trouver tous les nouveaux produits mis à jour après_ `yesterday`.

5.  **Less or equal / Greater or equal :** inclut la date saisie dans les résultats. _Exemple : trouver tous les produits mis à jour à partir du_ `01-01-2024` _inclus_.

### 4\. Filtrer par images de produit

Ce type de filtrage spécial est disponible dans le **Catalog** via le filtre en ligne de la colonne **Thumbnail**. Il est d'une importance cruciale pour les initiatives de génération de contenu qui utilisent des modèles multimodaux.

1.  **Image Exists :** affiche uniquement les produits qui possèdent une image associée.

2.  **Image Missing :** affiche uniquement les produits pour lesquels une image est manquante.

![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/8QgVAeRUMysJuzJ8692EqmUBXsfxeJ-Leg.png)

### 5\. Regrouper les conditions (logique avancée)

Vous pouvez constituer des batchs de produits très spécifiques en utilisant plusieurs conditions et groupes.

1.  **Adding Multiple Conditions :** pour filtrer selon plusieurs attributs (par ex. `Color = Blue` **ET** `Size = M`), il suffit de **cliquer sur "Add condition"** plusieurs fois.

2.  **Condition Group :** cliquer sur **« Add condition group »** vous permet de combiner des conditions avec une logique complexe (par ex. (`Category = Shirts` **ET** `Price > 50`) **OU** (`Category = Jackets`)).
