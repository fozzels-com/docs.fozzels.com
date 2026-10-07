---
id: '103000399446'
title: "Version 6.1-6.2 : scalabilité et précision accrue des données"
sidebar_position: 10
slug: /fozzels-releases-updates/release-6-1-6-2-scalability-enhanced-data-precision
description: >-
  Cette mise à jour vise à optimiser les performances de la plateforme pour les
  données à grande échelle et à étendre les capacités de collecte de données,
  afin que vous disposiez de tous les détails nécessaires
---

Cette mise à jour vise à optimiser les performances de la plateforme pour les données à grande échelle et à étendre les capacités de collecte de données, afin que vous disposiez de tous les détails nécessaires pour générer un contenu produit de haute qualité.

### Imports de produits évolutifs (Product Pull)

Fozzels devient encore plus efficace pour les projets e-commerce de grande envergure. Nous avons amélioré notre architecture d'import pour garantir des mises à jour de données fluides, quelle que soit la taille du catalogue.

-   **Nouveauté :** nous avons introduit un **mécanisme de temporisation adaptatif** pour optimiser le traitement des flux de données volumineux.

-   **Le résultat :** même si votre catalogue contient **des centaines de milliers d'articles**, la synchronisation reste stable, flexible et cohérente, sans interruption des processus.

### WooCommerce : champs méta personnalisés et synchronisation fiable

Nous avons donné aux utilisateurs de WooCommerce la possibilité de choisir précisément les données avec lesquelles ils souhaitent travailler dans Fozzels.

-   **Champs méta sélectifs :** vous pouvez désormais synchroniser les **champs méta personnalisés** spécifiques nécessaires à votre génération de contenu. Il suffit de saisir les codes de champs ou les préfixes de groupes lors de la configuration, et le système ne récupérera que les informations nécessaires.

-   **Démarrage sans accroc :** nous avons amélioré la logique d'identification des produits. Même si votre site WordPress utilise des ID internes plutôt que des SKU standard, la connexion aboutira et votre catalogue sera entièrement alimenté.

### Lightspeed : analyse approfondie des spécifications

Nous avons appris au système à capturer les données situées plus profondément dans la structure de Lightspeed, afin que votre contenu généré par l'IA soit aussi informatif que possible.

-   **Nouveauté :** Fozzels reconnaît et extrait désormais les données des **spécifications imbriquées de second niveau** qui étaient auparavant ignorées.

-   **L'avantage :** l'IA accède à un ensemble complet de caractéristiques produit. Des données plus précises donnent des prompts plus pertinents et un contenu de meilleure qualité.

### Magento 2 : contrôle de l'affichage des médias

Une mise à jour clé pour ceux qui utilisent des environnements de test pour préparer et vérifier le contenu avant la mise en ligne.

-   **Overwrite Base Media URL :** pour les boutiques Magento 2, vous pouvez désormais modifier manuellement le chemin de votre source d'images.

-   **Le résultat :** la solution idéale pour les **Stage Stores**. Même si les images de la préproduction sont stockées à des adresses non standard, elles s'afficheront toujours correctement dans votre catalogue Fozzels.

### Améliorations et corrections de bugs

-   **Logique de flux améliorée :** correction d'une erreur d'affichage des conditions de filtre dans les flux dupliqués. Auparavant, si un flux comportait une condition de date, les autres options pouvaient ne pas apparaître dans l'interface. Ce problème est résolu pour une expérience utilisateur plus cohérente.

-   **Calendrier et dates :** résolution des conflits d'initialisation des champs `date` et `datetime` qui provoquaient auparavant des erreurs serveur.

-   **Gain de performance :** optimisation des vitesses de chargement de la page du catalogue pour un workflow plus fluide.

-   **Stabilité de l'interface :** amélioration de la stabilité de l'interface lors du travail avec des configurations de filtres complexes.

**_Fozzels ne cesse de s'améliorer grâce à vos retours. Merci de faire partie de notre aventure !_**
