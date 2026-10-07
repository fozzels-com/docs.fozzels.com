---
id: '103000408094'
title: >-
  Release 7.4-7.5 - Présentation de la gestion des catégories, du Media Hub
  avancé et des modèles Anthropic de nouvelle génération
sidebar_position: 14
slug: >-
  /fozzels-releases-updates/release-7-4-7-5-introducing-category-management-advanced-media-hub-and-next-gen-
description: >-
  Bienvenue dans la dernière version de Fozzels - une mise à jour majeure conçue
  pour faire passer l'automatisation de votre contenu et la gestion de votre
  catalogue à un niveau supérieur. Nous avons entièrement repensé
---

Bienvenue dans la dernière version de Fozzels  - une mise à jour majeure conçue pour faire passer l'automatisation de votre contenu et la gestion de votre catalogue à un niveau supérieur. Nous avons entièrement repensé les interfaces principales, considérablement élargi les capacités de la plateforme et intégré les derniers modèles d'IA pour rendre vos workflows quotidiens plus fluides, plus rapides et plus efficaces que jamais.
La prochaine évolution de la gestion du catalogue - Prise en charge des catégories

Nous franchissons une étape stratégique en étendant les capacités de base de la plateforme. Fozzels prend désormais officiellement en charge les opérations non seulement au niveau des produits, mais aussi au niveau des **catégories et des attributs de catégorie**. Cette mise à jour pose les bases d'une automatisation complète de la structure du catalogue.

#### **Présentation des Category Pools et de l'interface de catalogue dédiée**

-   **Nouvel écosystème de données :** une interface de pools entièrement repensée, associée à un gestionnaire de catalogue dédié, conçu sur mesure pour les catégories.

-   **Expérience unifiée (UX) :** nous avons transposé aux catégories notre workflow de gestion des produits, reconnu et éprouvé en production. La même logique intuitive de filtrage, de structuration et de gestion des données est désormais disponible pour chaque catégorie, au sein d'un seul espace de travail.

-   **Écosystèmes pris en charge :** à ce stade, la prise en charge des catégories et l'interface de pools mise à jour sont déployées pour nos intégrations principales : **Shopify, Magento, WooCommerce, Shopware, Lightspeed et Katana PIM**.

-   **Perspectives :** cette architecture n'est que le début d'une importante évolution du produit. Notre prochaine étape introduira un flux de génération de contenu IA autonome et dédié (couvrant les descriptions SEO, les balises meta et les bannières), conçu spécifiquement pour les pages de catégories.

#### **Synchronisation des données granulaire en 4 étapes et journalisation avancée**

-   **Architecture de pools repensée :** pour accueillir l'intégration des catégories, nous avons entièrement reconstruit nos workflows d'importation de données depuis les systèmes externes. La synchronisation de base en 2 étapes a été remplacée par un **cycle de synchronisation progressif en 4 étapes** :

1.  _Product Attributes_

2.  _Category Attributes_

3.  _Categories_

4.  _Products_

-   **Transparence absolue et flexibilité :** chaque étape est désormais totalement isolée. Vous pouvez suivre la progression précise en temps réel grâce à des barres de statut indépendantes et accéder à des vues de journaux dédiées (`View logs`) pour chaque étape.

-   **Contrôle ciblé :** le système vous permet soit de synchroniser l'ensemble des données de manière globale, soit de déclencher manuellement et indépendamment les mises à jour de certaines étapes.

### Mise à jour majeure de l'UI/UX : une revue des images et une gestion des batchs de nouvelle génération

Sur la base directe des retours des utilisateurs, nous avons entièrement repensé et refondu l'expérience d'aperçu, de modération et de revue des images dans la **Batch list**. L'ensemble des résultats de votre flux de génération est désormais réuni dans un seul espace interactif.

#### **Un flux média « Swipe-and-Sync » simplifié**

-   **Page de revue avancée :** fini les allers-retours entre les fiches produit individuelles. Nous avons introduit un mécanisme de navigation intuitif et rapide (`Accept & next`) fonctionnant selon le principe du balayage de cartes.

-   **Comparaison côte à côte :** l'écran affiche simultanément deux panneaux, l'image d'origine (`Original`) et la variante générée par l'IA (`Generated`), avec un zoom détaillé sur la ressource (`Zoom In`).

-   **Gestion centralisée des ressources média :** directement dans la fenêtre de revue, vous pouvez exécuter instantanément, en un seul clic, les opérations essentielles pour la ressource en cours :

-   Définir l'ordre de la ressource dans la galerie d'images (`Position`).

-   Désigner des comportements propres au système (`Roles`).

-   Contrôler la visibilité sur la page produit (`Hide on PDP`).

-   Déclencher manuellement la régénération de la ressource (`Regenerate`) si un ajustement est nécessaire.

-   **Carrousel de traitement par batch :** le bas de l'interface comporte une chronologie visuelle qui suit tous les objets de la session active. Enrichie de marqueurs de statut colorés (`Accepted`, `Regenerate`, `Left`), elle vous permet de voir en un coup d'œil l'avancement global de votre projet.

### Améliorations de la plateforme

#### **Modèles d'IA de nouvelle génération et intégration de la recherche web en direct**

-   **Élargissement de la boîte à outils IA :** Fozzels accueille officiellement dans sa gamme principale les tout derniers modèles d'Anthropic, à la pointe de la technologie :

-   **Claude Sonnet 5** — offre une intelligence de premier plan, des capacités de raisonnement avancées et une sortie à haute vitesse, optimisées pour la génération de contenu à grand volume.

-   **Claude Fable 5** — notre modèle le plus sophistiqué à ce jour, conçu pour traiter des paramètres de contenu hyper-complexes, une cartographie sémantique approfondie et une exécution autonome prolongée sur des hiérarchies de catalogue complexes.

-   **Intégration de la recherche web en direct :** nous avons débloqué les capacités de recherche web (Web Search) en temps réel pour ces deux nouveaux modèles. L'IA peut désormais récupérer des données externes en direct pour garantir une exactitude factuelle absolue, la vérification des prompts et une conformité immédiate avec les dernières tendances du marché.

#### **Une créativité sans limites : suppression des limites de régénération d'images**

-   **Ce qui change :** nous avons complètement levé la limite précédente sur les régénérations d'images consécutives (qui était plafonnée à 5 tentatives par objet). Dans le flux de régénération manuelle (`Manual Regenerate Flow`), vous pouvez désormais relancer la génération de la ressource autant de fois que nécessaire, jusqu'à obtenir exactement le rendu visuel qu'exige votre marque.

#### **Filtrage avancé des données et parcours UX simplifié**

-   **Ce qui change :** nous avons profondément repensé le moteur de filtrage des données dans l'ensemble des flux opérationnels et des intégrations, pour un rendu propre et moderne et une ergonomie nettement améliorée.

-   **Arborescences de catégories de nouvelle génération :** pour prendre en charge les opérations sur les catégories à grande échelle, nous avons mis en place un sélecteur multiple interactif `Tree View` doté de tags d'accès rapide et d'une logique conditionnelle flexible (`AND` / `OR`).

###
Écosystème et intégrations

#### **Magento : validation des sélections multiples et gestion avancée des ressources média**

-   **Synchronisation d'attributs complexes :** les capacités complètes d'écriture et de remplissage ont été débloquées pour les types d'attributs `multi-select` et `select`. Le modèle d'IA interroge automatiquement le jeu de valeurs autorisées existant directement dans votre catalogue Magento et sélectionne les variables correspondantes dans cette liste, ce qui évite strictement toute pollution des données ou tout doublon de tags.

-   **Mappage avancé des rôles média :** lors de la synchronisation des fichiers média générés vers Magento, vous pouvez désormais configurer des rôles système explicites plutôt que seulement l'ordre dans la galerie. Désignez facilement des ressources comme `Base`, `Small`, `Thumbnail`, `Swatch` ou comme d'autres emplacements personnalisés configurés dans votre thème actif.

-   **Exclusion de média (masqué sur la page produit) :** la prise en charge complète du drapeau natif d'exclusion d'image est désormais disponible. Vous pouvez envoyer vers Magento une ressource IA optimisée et la marquer `Hidden from Product Page`, ce qui vous permet de la réserver à des usages système secondaires (comme les miniatures de la mise en page du panier ou les carrousels de ventes croisées) sans l'afficher dans la galerie de la page produit principale.

-   **Génération intelligente de texte ALT :** Fozzels cartographie désormais la présence des balises de métadonnées `alt` dans l'ensemble de la galerie de vos produits Magento. L'optimisation des médias peut être exécutée selon deux modes distincts :

1.  _Fill-In Mode :_ l'IA cible et génère des chaînes ALT pertinentes uniquement là où elles sont absentes.

2.  _Force Mode :_ un cycle complet de réécriture et d'optimisation exécuté sur toutes les ressources image du batch sélectionné.

####
**Shopify et Shopware : filtrage d'attributs simplifié**

-   **Optimisation du flux de données :** nous avons mené un audit technique et un nettoyage des matrices de configuration des filtres pour Shopify et Shopware. Seuls les opérateurs logiques pertinents et pleinement fonctionnels sont désormais exposés dans l'interface, ce qui accélère considérablement les workflows de segmentation du catalogue.

#### **NextChapter : synchronisation média automatisée et gestion de la galerie**

-   **Synchronisation média bidirectionnelle :** mise en place d'une intégration complète en boucle fermée pour les ressources numériques. Toutes les images générées ou optimisées par l'IA sont automatiquement exportées (« pushed ») vers NextChapter et rattachées directement à la fiche de l'article correspondant.

-   **Gestion de la galerie :** ajout d'un utilitaire intuitif d'ordonnancement. Les utilisateurs peuvent déterminer précisément l'ordre d'affichage des images dans la galerie du produit (image principale, deuxième, troisième... dernière position).

#### **Katana PIM : synchronisation de l'attribut Specification Group**

-   **Nouvelle fonctionnalité :** ajout de la prise en charge native et de la synchronisation complète des données pour l'attribut système essentiel `specification group`. L'intégration s'appuie sur notre nouvel algorithme de validation progressive des sélections multiples : l'IA détecte dynamiquement les groupes de spécifications valides directement dans votre répertoire Katana PIM et les renseigne avec des données structurelles vérifiées.
