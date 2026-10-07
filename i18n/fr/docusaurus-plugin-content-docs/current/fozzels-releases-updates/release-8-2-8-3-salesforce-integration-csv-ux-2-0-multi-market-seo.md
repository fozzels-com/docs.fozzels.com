---
id: '103000410961'
title: "Version 8.2-8.3 - Intégration Salesforce, CSV UX 2.0 et SEO multi-marchés"
sidebar_position: 17
slug: >-
  /fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo
description: >-
  Les versions v8.2 et v8.3 marquent des avancées majeures avec des intégrations
  Enterprise, une refonte complète du module CSV, des capacités SEO
  multilingues étendues…
---

Les versions **v8.2 et v8.3** marquent des avancées majeures avec des **intégrations Enterprise**, une refonte complète du **module CSV**, des capacités SEO multilingues étendues pour Shopify et une logique de filtrage améliorée basée sur les stocks.

## 1\. Intégration Enterprise : Salesforce Commerce Cloud

Nous avons élargi notre écosystème de connecteurs Fozzels officiels avec la prise en charge native de **Salesforce**, afin de répondre aux besoins des marchands de niveau Enterprise.

-   **Automatisation du contenu :** génération et synchronisation bidirectionnelle fluides de contenu HTML enrichi, de balises meta et d'attributs, à la fois pour les **Products** et les pages **Category**.

-   **Évolutivité Enterprise :** traitement de données en masse rapide et fiable, conçu pour gérer de grands volumes de catalogue sans compromis sur les performances.
    ![](/img/kb/fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo/gijc0EWvFlC1zyvnpAeXsONb3oKC7iTWEQ.png)

## 2\. Refonte de l'intégration CSV (UX 2.0 et Media Gallery)

Nous avons entièrement remanié le module d'import CSV pour rendre l'envoi des fichiers, le mappage et la configuration 200 % plus intuitifs et plus visuels.

-   **Media Gallery native :** prévisualisez les images et les médias directement dans l'interface du tableau.

-   **Moteur de mappage amélioré :** une interface claire et conviviale pour mapper les colonnes CSV vers la structure de champs interne de Fozzels.

-   **Contrôle des données :** la validation visuelle du mappage réduit considérablement les erreurs humaines et accélère l'intégration de nouveaux catalogues produits.

## 3\. Améliorations Shopify : SEO multi-marchés et logistique

### Synchronisation des textes ALT multi-marchés et multilingues

Résout un problème majeur pour les boutiques e-commerce internationales et multi-régions.

-   **Balises ALT localisées :** Fozzels peut désormais générer et synchroniser **des textes ALT localisés différents pour exactement les mêmes images**, selon la langue et le marché cible.

-   **Compatibilité totale avec l'écosystème :** prise en charge native de **Shopify Markets** et des applications de traduction (dont **LangShop**).

### Prise en charge du poids et de l'unité de poids

-   **Calculs d'expédition précis :** ajout de la synchronisation automatisée des valeurs de poids des produits (`weight`) et des unités de mesure (`weight unit`).

-   **Formats standardisés :** le champ `weight unit` utilise un format de saisie **Select** strict afin d'éviter les erreurs de format et de garantir des calculs de frais de port fiables au moment du paiement.

## 4\. Filtrage intelligent des stocks pour VTEX

Optimisez vos coûts de génération IA grâce à une sélection de catalogue précise, tenant compte des stocks.

-   **Filtrage basé sur le stock :** filtrez les produits directement au niveau de l'intégration VTEX à l'aide d'un attribut booléen de disponibilité (`Stock = Yes / No`).

-   **Efficacité des ressources :** ignorez automatiquement les articles en rupture de stock (`Stock = No`) pour concentrer la génération IA exclusivement sur le stock actif.

## 5\. Correctifs et stabilité

-   **Intégration Katana PIM :** résolution d'un problème affectant la synchronisation des données avec Katana PIM. L'échange de données bidirectionnel fonctionne désormais de manière fluide et fiable.

_Merci à toute l'équipe d'avoir donné vie à ces mises à jour, et à nos utilisateurs pour leurs retours constants ! Essayez les nouvelles fonctionnalités et dites-nous ce que vous en pensez._
