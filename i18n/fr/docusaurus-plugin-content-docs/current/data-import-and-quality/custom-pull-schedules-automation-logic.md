---
id: '103000385568'
title: 3.1  Planifications de Pull personnalisées et logique d'automatisation
sidebar_position: 1
slug: /data-import-and-quality/custom-pull-schedules-automation-logic
description: >-
  Nous avons mis à jour la plateforme Fozzels pour l'aligner sur le rythme de
  votre activité locale. Vous avez désormais le contrôle total du moment où
  débute votre cycle de mise à jour du contenu, ce qui permet
---

Nous avons mis à jour la plateforme Fozzels pour l'aligner sur le rythme de votre activité locale. Vous avez désormais le contrôle total du moment où débute votre cycle de mise à jour du contenu, ce qui vous permet de synchroniser les opérations d'IA avec vos mises à jour de stock et la capacité de vos serveurs.

## Planifications de Pull personnalisées

Vous n'êtes plus limité à un cycle système unique qui démarrait auparavant à **00:30 UTC** pour tout le monde. Vous définissez désormais l'heure de début pour chaque intégration ou pour chaque boutique.

### 1\. Niveaux de configuration :

-   **Niveau global de l'intégration :** définissez une planification unique pour toute l'intégration (configurée dans l'onglet **Configuration**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/OIDrHQUvFDLOAW6VRq6bmDqVGmzw-Sx_WQ.png)

-   **Niveau de la boutique individuelle :** définissez une planification propre à une boutique spécifique (configurée dans l'onglet **Websites & Stores** via l'option **"Overwrite On Store Level"**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/rzTnb5R6tAHqj6TuLjncrbuJn2jhIhf-A.png)

![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/4TXxigKSz9G6RrXZnbgqjQ0N7TTKYwiwMQ.png)

## Fonctionnement : la réaction en chaîne de l'automatisation

Il est important de comprendre que l'heure de Pull planifiée est le **déclencheur** d'une chaîne complète de processus. Une fois que le **Pull** a importé vos données avec succès, le système exécute automatiquement les étapes suivantes :

### Parcours des données : du Pull à la génération (étape par étape)

**Étape**

**Ce qui se passe**

**Résultat**

**1\. Product Pull**

Fozzels se connecte à votre site via l'API et télécharge les données mises à jour.

Le système dispose d'une liste à jour des produits et de leurs caractéristiques.

**2\. Flow Sync**

Le système « filtre » le catalogue à travers les filtres de vos Flows actifs.

Les nouveaux produits sont ajoutés à la file d'attente ; ceux qui ne sont plus pertinents sont retirés.

**3\. Attribute Refresh**

Les valeurs (prix, catégorie, champs personnalisés) sont mises à jour pour chaque produit du Flow.

L'IA reçoit le contexte le plus récent pour la génération.

**4\. AI Generation**

La file de génération démarre en fonction de vos prompts spécifiques.

Les textes, les balises SEO et les traductions sont créés.

**5\. Data Export**

Le contenu terminé est automatiquement renvoyé vers votre site.

Vos clients voient la fiche produit mise à jour.

**Exemple :** si vous définissez l'heure de votre Pull à **17:00 (5 PM)**, la génération par l'IA démarrera immédiatement après l'importation des données et les vérifications des flux (par exemple vers **17:20** ou **17:45**), au lieu d'attendre le milieu de la nuit.

## Interface localisée : définir votre fuseau horaire

Pour rendre la planification intuitive et vous éviter de calculer en UTC, vous pouvez définir votre fuseau horaire local directement dans votre profil.

### Comment configurer votre fuseau horaire :

1.  Accédez à **Settings** > **Profile**.

2.  Trouvez le champ **Timezone** et sélectionnez votre région dans le menu déroulant.

3.  **Essentiel :** cliquez sur le bouton **SAVE** pour appliquer les modifications.

### Pourquoi c'est important :

-   **Aucun calcul en UTC :** si vous planifiez un Pull à 17:00 dans votre fuseau horaire, il démarrera exactement à 17:00 selon votre horloge locale.

-   **Journaux transparents :** chaque journal d'activité et chaque statut de génération s'affichent dans votre heure locale, ce qui simplifie le suivi.

## Principaux avantages

-   **Maîtrise de la fraîcheur :** la génération par l'IA a lieu immédiatement après la mise à jour des données produit sur votre site.

-   **Optimisation des serveurs :** échelonnez les heures de Pull des différentes boutiques pour éviter que votre API ne soit submergée par des requêtes simultanées.

-   **Prévisibilité :** sachez exactement quand vos nouveautés seront traitées par l'IA et prêtes à être relues.
