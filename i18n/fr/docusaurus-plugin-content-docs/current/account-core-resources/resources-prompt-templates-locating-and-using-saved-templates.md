---
id: '103000367846'
title: "1.5. Resources. Prompt Templates : localiser et utiliser les modèles enregistrés."
sidebar_position: 8
slug: >-
  /account-core-resources/resources-prompt-templates-locating-and-using-saved-templates
description: >-
  Les Prompt Templates sont des modèles de texte réutilisables et préconfigurés,
  utilisés comme entrée pour que l'IA génère des types de contenu produit
  spécifiques. Ces modèles sont confi
---

Les Prompt Templates sont des modèles de texte réutilisables et préconfigurés, utilisés comme entrée pour que l'IA génère des types de contenu produit spécifiques. Ces modèles sont configurés indépendamment des flux de génération de contenu et constituent un élément central de la logique d'automatisation. Ils sont généralement utilisés pour générer des descriptions de produits, des méta-titres ou des méta-descriptions.

Pour accéder à la zone de gestion, rendez-vous dans **Settings → Prompt Templates**.

Tableau de gestion des modèles

Le tableau principal offre une vue d'ensemble de tous les modèles créés.
Chaque entrée comprend : l'identifiant unique (ID), le type de règle du modèle (Kind, actuellement seul Product Attribute est disponible), l'attribut produit auquel le prompt est lié (Attribute, par ex. descriptions, méta-titres), le nom du modèle (Name), le texte du prompt lui-même, et une icône Shared, qui indique si le modèle est visible par les autres utilisateurs de votre projet et partagé avec eux.

Actions disponibles : View, Edit et Delete.
![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/5LRXIMOwIb-G8vgFQIGjxXsovlESPjZRYA.png)

Localiser et filtrer les modèles

Vous pouvez retrouver rapidement des modèles spécifiques grâce au champ **Search** situé dans le coin supérieur droit.
De plus, les colonnes ID, Kind, Attribute et Name sont triables.
Un clic sur l'en-tête d'une colonne inverse l'ordre de tri (croissant ou décroissant).
Utilisez les commandes de pagination au bas du tableau pour naviguer entre les pages si votre liste de modèles est longue.

Consulter le contenu complet du prompt

Un clic sur n'importe quelle cellule de la colonne **Prompt** ouvre une fenêtre modale affichant le texte complet et détaillé du prompt. Cette fenêtre comprend :

-   Le bouton Show HTML, qui active ou désactive l'aperçu du texte du prompt avec la mise en forme HTML appliquée.

-   Le bouton Copy to Clipboard, qui copie le texte complet du prompt pour l'utiliser ou le modifier ailleurs.

-   Le bouton Close, qui ferme la fenêtre modale.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/_NS3hQVxBRRo9EBlkjZjD9wrjEloxWjA3A.png)

Créer un nouveau Prompt Template

Pour créer un nouveau modèle, cliquez sur le bouton **New Prompt Template** en haut de la page. Une fenêtre modale s'ouvre avec les champs de formulaire requis :

1.  **Attribute** (obligatoire) : sélectionnez le champ de contenu produit spécifique (par ex. Description, Meta title) que ce prompt est destiné à renseigner. Cela relie le prompt au bon champ de contenu cible.

2.  **Name** (obligatoire) : saisissez un nom clair et descriptif. La bonne pratique consiste à inclure la langue et l'objectif (par ex. EN: Short description for shoes) afin de faciliter l'identification.

3.  **Kind** (obligatoire) : sélectionnez le type de règle. Actuellement, seul Product Attribute est disponible.

4.  **Template** (obligatoire) : saisissez ici le contenu principal du prompt. Ce texte, combiné à des attributs et à des conditions (par ex. l'attribut **Brand**, ou une condition sur **Color**), forme l'instruction envoyée à l'IA pour la génération.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/MqPK3HDwXl7cBuruSGQhTcI2GMYLzXfHOQ.png)

Logique des prompts et bonnes pratiques

-   **Variables dynamiques** : le texte du prompt doit utiliser des attributs et des conditions (par ex. l'attribut **Vendor** dans une condition) pour récupérer les données propres à chaque produit, en évitant les valeurs saisies en dur.

-   **Style** : veillez à ce que les exigences de langue et de style (par ex. ton, utilisation de listes à puces, format HTML) correspondent à votre cas d'usage.

-   **Sécurité du contenu** : le prompt doit être bien formulé et respectueux afin d'éviter un éventuel rejet par le service d'IA (OpenAI).
