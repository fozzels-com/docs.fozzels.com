---
id: '103000384142'
title: "Version 5.10-5.11 RC2 : un catalogue plus rapide, un contrôle plus poussé de Fozzels."
sidebar_position: 1
slug: >-
  /fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels
description: >-
  Nous veillons à ce que le travail sur de gros volumes de données soit non
  seulement rapide, mais aussi entièrement maîtrisable et intuitif. La version
  5.10 se concentre sur l'amélioration
---

Nous veillons à ce que le travail sur de gros volumes de données soit non seulement rapide, mais aussi entièrement maîtrisable et intuitif. La version 5.10 se concentre sur l'amélioration de la qualité des données visuelles et sur **l'augmentation significative des performances et du confort d'utilisation de notre service Fozzels.**


Amélioration des performances et de la qualité des données

Nous avons amélioré l'UX afin de rendre la gestion de grands catalogues plus rapide et le travail sur le contenu plus fluide.

### 1\. Gestion du catalogue et des données

-   **Catalogue accéléré (nouveaux paramètres par défaut) :** une nouvelle règle de visibilité des colonnes a été mise en place dans le Catalog. Environ 20 des attributs les plus importants sont désormais activés par défaut. Cela **simplifie considérablement le flux de travail** et **accélère la vitesse de chargement** ainsi que les performances d'affichage des grands catalogues.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/lKkJYdOEv5IMFHk7r6Mhn2Iv7R--LD6Bcg.png)

-   **Précision des attributs (arrondi du DDP) :** la logique d'affichage du Data Density Percent (DDP) a été mise à jour. La valeur du DDP est désormais arrondie à **trois décimales**. Cela garantit l'affichage exact des attributs dont le DDP est très faible (par exemple 0,040 %), et élimine la confusion causée par un arrondi à zéro.

-
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2LTShrMQn-AwHW8xdptY0MjbZobK0D0Iig.png)

-   **Clarté maximale des attributs :** le bloc "Get random example data" affiche désormais le **nom complet du site web et de la boutique** (au lieu d'abréviations). Vous savez toujours avec certitude sur quelles données vous travaillez.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/_WOgxMxdZL8LDJJL80org__eblNuAp-nIA.png)

-   **Navigation flexible dans les tableaux :** les options de pagination des listes d'attributs ont été étendues : elles prennent en charge 50, 75, 100, 150 et **"200"** éléments. Gérez facilement des jeux de données volumineux.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/VwedlrpwTbYE7jTtQJKiU84KWL28R-__Rg.png)

-   **Actualisation automatique des journaux du catalogue :** dans les tableaux de journaux qui suivent les modifications des produits et du pool d'attributs (**State Log List**), la fonction d'actualisation automatique (**Refresh every X seconds**) est désormais **active par défaut**, ce qui facilite le suivi des processus en cours.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/k7wJs0gU52ThkvU06NRQiNCb052rvZNB3A.png)
    2\. Génération et workflows (UX)

-   **Accès instantané aux paramètres :** une icône en forme d'œil **"View attribute"** a été ajoutée au tableau Batch list, à côté du nom de l'attribut. Elle permet de vérifier plus rapidement les paramètres et la configuration de l'attribut.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/EStHK3i08CDJYcXd9nmAO1KRhxknIufVZw.png)

-   **Contrôle des colonnes dans "Save & Preview" :** le bloc **"Column visibility"** a été ajouté au tableau de prévisualisation (**Save & Preview**). Il permet de n'afficher que les attributs nécessaires, ce qui résout les problèmes de tableaux trop volumineux.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2xUkAX-SxZ6mayNDh5A91b3m2AkKS4mDFw.png)

### 3\. Gestion des images et qualité visuelle

-   **Catalogue visuel propre :** le système **ignore désormais et n'affiche plus** automatiquement les URL d'images invalides (cassées) ou vides dans le catalogue, les rapports et les listes de génération. Dites adieu aux images cassées : vos données sont maintenant impeccables.

-   **Filtrage d'images amélioré (Image Flow) :** de nouveaux outils performants ont été ajoutés pour trier et filtrer les images dans les blocs de configuration d'Image Flow :

-   Des filtres spéciaux permettent de basculer entre les images par défaut et vos propres images téléversées (tri par **Source**).

    -   Le tri par **Upload Date** et par **Name** a été ajouté.
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/q6optXQOc2cONrSBq2hAYJmFT-kVtuUMIA.png)
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/9Y5ObdDOni2-uTSMx1mbIb9eIkLRaWSRdw.png)

-   **Clarté de la terminologie :** pour plus de clarté, "AI Model" dans les paramètres d'Image Flow a été renommé **"Preset Model"**.

### 4\. Opérations de masse accélérées

-   **"Show Selected" pleinement fonctionnel (Catalog et Daily Report) :** nous avons considérablement amélioré la fonction "Show Selected". Désormais, tant dans le **Catalog** que dans le **Daily Report**, le tableau des éléments sélectionnés vous permet d'effectuer **toutes les mêmes actions que le tableau habituel** : afficher, filtrer et appliquer des **Mass Actions**.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/wVzkPiDgjCcZCYtSpCXgXA8rfbX5fqysPw.png)

-   **Fiabilité des actions de masse :** nous avons corrigé un problème mineur qui laissait parfois la grille vide lorsqu'aucun élément n'était sélectionné. Le travail avec les actions de masse est désormais encore plus fiable.

## En coulisses : stabilité et modernité

-   **Stabilisation ciblée des intégrations :** les correctifs nécessaires ont été déployés pour améliorer la stabilité et le fonctionnement des intégrations avec les plateformes **WooCommerce, EK Retail et Shopware**, afin de garantir un fonctionnement fiable pour les clients disposant de ces configurations spécifiques.

Votre expérience est notre priorité. Ces mises à jour ne sont qu'une partie de notre travail continu pour améliorer Fozzels. Merci de faire partie de notre communauté !
[Notre Instagram](https://www.instagram.com/fozzelsai/)
