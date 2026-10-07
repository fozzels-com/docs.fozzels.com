---
id: '103000409878'
title: "Version 8.0-8.1 - Contenu de catégories et de marques, Workflow Builder, refonte de l'interface"
sidebar_position: 16
slug: >-
  /fozzels-releases-updates/release-8-0-8-1-category-brand-content-workflow-builder-ui-refresh
description: >-
  Nous sommes ravis de vous présenter la mise à jour v8.0 et v8.1 de Fozzels.
  Cette version vise à élargir les capacités de génération de contenu, à offrir
  plus de souplesse dans la personnalisation des
  workflows
keywords:
- flux de travail
---

Nous sommes ravis de vous présenter la mise à jour v8.0 et v8.1 de Fozzels. Cette version vise à élargir les capacités de génération de contenu, à offrir plus de souplesse dans la personnalisation des workflows, à renforcer la sécurité des données et à rafraîchir l'interface de la plateforme.

# **1\. Contenu pour les catégories et les marques (Shopware et Magento 2)**

## Après une longue période de développement et de préparation, nous déployons la prise en charge de la génération et de la synchronisation de contenu pour les pages de catégories et de marques.

-   **Category & Brand Flows** — Générez directement des descriptions HTML, des méta-titres, des méta-descriptions et des attributs personnalisés pour les catégories et les marques.
-   **Intégration complète** — Ces nouveaux types de flux bénéficient de toutes les fonctionnalités standard de la plateforme : traitement par batch, historique des révisions et synchronisation automatique.

## **2\.  Workflow Builder et Rule Engine**

Le nouveau module **Rule Engine** vous permet de configurer le post-traitement automatique du contenu avant sa publication.

-   **Visual Editor** — Construisez des relations logiques à l'aide de blocs Condition, Group et Action.
-   **Règles de traitement** — Mettez automatiquement le texte en forme (par exemple, si un titre dépasse 50 caractères → le tronquer à 45 caractères en préservant les mots entiers).
-   **Attribution des règles** — Les workflows que vous créez peuvent être appliqués aux flux Product, Category ou Brand.

### **Audit des données historiques et validation du contenu**

-   **Vérification du contenu existant** — Exécutez des workflows sur des résultats générés précédemment afin de repérer les éléments à modifier ou à régénérer.
-   **Decision Matrix** — Configurez des conditions de branchement (Yes / No / Always) pour une logique de validation complexe.
-   **Filtres de contenu (Contains)** — Détectez les mots interdits, les caractères prohibés ou les écarts de format.
-   **Actions (Truncate & Mark as Suspicious)** — Réduisez automatiquement le texte ou signalez des résultats avec un motif indiqué (par exemple, "Title too long") et suspendez la synchronisation automatique pour cet élément.

## **3\. Mise à jour de l'interface (navigation par barre latérale)**

Nous avons repensé la disposition de la plateforme pour faciliter la navigation et offrir un espace de travail plus efficace.

-   **En-tête épuré** — La barre supérieure est désencombrée et ne contient désormais que les éléments contextuels (navigation, langue, notifications et statut).
-   **Barre latérale structurée** — Les modules sont regroupés par section (Main, Catalog, Integrations, Customers, AI Flows, Tools).
-   **Modes d'affichage** — Réduisez la barre latérale en vue compacte pour libérer de l'espace de travail.
-   **Indicateurs de statut** — Des badges NEW et Soon pour vous aider à repérer les nouveaux modules.

## **4\. Base de connaissances publique**

Nous avons lancé un portail de documentation autonome destiné aux utilisateurs de la plateforme.

-   **Multilingue** — Les supports et les instructions sont disponibles en 6 langues.
-   **Guides structurés** — Instructions pas à pas pour configurer les intégrations, les workflows, le mapping et les modèles d'IA.

## **5\. Mises à jour des intégrations (Shopware, VTEX, NextChapter)**

### Shopware Engine et Properties (Select / Multi-Select)

-   **Optimisation de l'API** — Le connecteur mis à jour garantit des performances stables avec de gros volumes de données.
-   **Gestion des propriétés** — Génération et synchronisation directes pour les champs de propriétés structurés.
-   **Contrôle des valeurs** — L'IA respecte les contraintes définies : elle transmet une seule valeur pour les champs Select ou plusieurs valeurs pour les champs Multi-Select.
-   **Vision AI** — Analyse d'images pour déterminer automatiquement les caractéristiques d'un produit (style, couleur, type de col, etc.).

### NextChapter et VTEX : texte ALT

-   **Synchronisation des balises ALT** — Générez et envoyez des descriptions d'images pour améliorer le SEO et l'accessibilité.

## **6\. Intégrations CSV étendues**

### Media Gallery

-   **Standardisation** — Un module Media Gallery complet a été ajouté pour les intégrations CSV.
-   **Aperçu et Vision AI** — Affichez les images directement dans le tableau, transmettez des URL dans les prompts et générez du contenu média.

### Mapping et parsing

-   **Aperçu en direct** — Affichez la structure du fichier CSV et des exemples de données directement dans l'interface.
-   **Mapping flexible** — Configurez les noms de champs, les formats et les correspondances de colonnes.
-   **Options de parsing** — Prise en charge de divers délimiteurs (virgule, point-virgule, tabulation) et encodages.

## **7\. Contrôle du HTML et validation du code**

### Gestion de l'éditeur (Enable Editor)

-   **Raw Code Mode** — Désactivez l'éditeur visuel pour conserver exactement le code généré par l'IA, sans ajustement automatique des balises (utile pour les accordéons de FAQ, les styles intégrés et [Schema.org](https://schema.org/) / JSON-LD).
-   **Modes d'affichage** — Basculez entre la vue code (Show HTML) et l'aperçu rendu.

### Validation de la structure HTML

-   **Vérification automatique** — Détectez en temps réel les balises non fermées ou le code défectueux.
-   **Protection de la synchronisation automatique** — Bloquez automatiquement la synchronisation des éléments défectueux, avec un avertissement dans le tableau : _"Completion looks suspicious, broken or unclosed HTML tags detected."_

_Vos retours et votre expérience quotidienne de la plateforme nous aident à améliorer Fozzels en continu._
