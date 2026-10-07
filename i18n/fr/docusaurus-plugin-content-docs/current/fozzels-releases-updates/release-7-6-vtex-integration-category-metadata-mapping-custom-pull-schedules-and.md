---
id: '103000408975'
title: >-
  Version 7.6 - Intégration VTEX, mappage des métadonnées de catégories,
  planifications de Pull personnalisées et workflows d'images améliorés
sidebar_position: 15
slug: >-
  /fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and
description: >-
  Nous sommes ravis de vous présenter la version 7.6 de Fozzels ! Cette version
  apporte une toute nouvelle intégration de plateforme, un accès approfondi aux
  données de catégories et d'images, des
keywords:
- flux de travail
---

Nous sommes ravis de vous présenter la version 7.6 de Fozzels ! Cette version apporte une toute nouvelle intégration de plateforme, un accès approfondi aux données de catégories et d'images, des contrôles précis de la synchronisation et des Pulls d'API, ainsi que d'importantes améliorations des workflows de génération d'images par IA. Découvrez toutes les nouveautés ci-dessous.

1.  **Nouvelles intégrations : intégration VTEX** (phase 1) : nous lançons la prise en charge initiale de la plateforme e-commerce VTEX ! Connectez votre boutique VTEX pour récupérer les données principales du catalogue, générer des métadonnées par IA et des descriptions de produits localisées, puis les resynchroniser en toute fluidité.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/JeeYUTgzrDD4RFn6wxHSi6jZ-acbmBcdaA.png)

2.  **Attributs de données et métadonnées : paramètres de catégorie étendus (Shopware, Magento, Shopify)** : vous pouvez désormais accéder à des paramètres approfondis au niveau des catégories - notamment les Category IDs, les Slugs/URLs et les identifiants structurels - directement dans les workflows de prompts et les mappages d'attributs, pour un contexte IA plus riche.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/78evdNuNxdhrkRFpX3fpJGb7klpmmoKEPg.png)

3.  **Affichage des textes alternatifs dans la galerie d'aperçu des images (Magento 2)** : en survolant ou en cliquant sur la miniature d'un produit dans les listes du catalogue, le texte alternatif associé s'affiche désormais directement sous la fenêtre d'aperçu, ce qui rend la vérification des métadonnées d'images rapide et simple (entièrement pris en charge pour Magento 2).
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/NZGCjJzI8YK0KA5XMMfKuuifCwUFqU1ayA.png)

4.  **Contrôles de la planification globale des Pulls et limitation flexible des Pulls (Pull Throttling) :** ajout de contrôles de Pull avancés dans la page Integration Settings pour toutes les plateformes prises en charge. **Pull Throttling** : définissez des délais personnalisés entre les pages et entre les requêtes d'API individuelles (de 100 à 15 000 ms) pour gérer la charge de l'API et éviter les erreurs de limitation de débit sur les grands catalogues.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/w_q1iVvLQ4_jGLRNGQhA-5vLAxBSxtN1Lw.png)

5.  **Filtrage étendu du Pull des produits pour Magento (tous les états)** : filtrez les importations du catalogue Magento par statut (Enabled, Disabled) et par visibilité (Catalog, Search, Catalog & Search, Not Visible Individually). Importez et optimisez facilement l'ensemble de votre catalogue, y compris les produits désactivés et les brouillons.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/MsFGGxKTaRkrmyvnCBxWgi7AL-5ZhZlIZA.png)

6.  **Prise en charge d'une URL de base d'images personnalisée / d'un CDN pour Magento :** indiquez un domaine média ou un chemin CDN personnalisé (par exemple Cloudflare, AWS S3) pour la récupération des images produit, afin de garantir un traitement ininterrompu des médias, quel que soit l'endroit où votre boutique héberge ses images.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/o_y1ScOV7ObEGxqceebgSLnoIl-CotmmuA.png)

7.  **Prise en charge des Assets avec plusieurs images de référence :** vous pouvez désormais sélectionner plusieurs photos de produit ainsi que plusieurs presets de style (dans les limites de capacité du modèle d'IA) pour une même tâche de génération, afin d'obtenir une plus grande précision visuelle et des détails réalistes.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/yi5rCHSv4ILYH-5KRotagmpmvTiuiDP_LQ.png)

8.  **Téléchargement du jeu complet d'images produit** : le téléchargement des médias générés exporte désormais l'ensemble des images générées associées à un SKU de produit, au lieu de se limiter au premier élément.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/m4RjAkacBItnD9BxX_2SYbSWQXtKRBFj7Q.png)

9.  Mise à niveau de nos principaux modèles de génération d'images (**Gemini 3.1 Flash Image et Gemini 3 Pro Image)** vers leurs dernières versions stables, pour un rendu plus rapide, une qualité visuelle supérieure et une stabilité à toute épreuve.
    Merci d'être avec Fozzels ! Nous espérons que ces mises à jour rendront votre flux de travail de contenu quotidien encore plus fluide. N'hésitez pas à nous contacter si vous avez besoin d'aide avec les nouvelles fonctionnalités !
