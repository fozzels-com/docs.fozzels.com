---
id: '103000371114'
title: "3.5. Recursion Detection : éviter la génération infinie de contenu"
sidebar_position: 8
slug: >-
  /data-import-and-quality/recursion-detection-preventing-infinite-content-generation
description: >-
  L'avertissement « Recursion detected » signale un conflit potentiel dans la
  configuration de votre Flow, où le résultat du processus de génération sert
  aussi de donnée d'entrée
---

L'avertissement « Recursion detected » signale un conflit potentiel dans la configuration de votre Flow, où le résultat du processus de génération sert aussi de donnée d'entrée pour ce même processus. Cela signifie que votre Flow est configuré pour lire les données du même attribut que celui dans lequel il écrit simultanément le contenu nouvellement généré.

L'exemple le plus courant est un Flow conçu pour mettre à jour le champ {Description} (l'attribut cible), alors que le prompt lui-même utilise la variable {Description} comme source d'information.

### Implication technique : la boucle de contenu

Lorsque cette configuration est utilisée avec le paramètre « Automatically regenerate when product attribute changed », une boucle perpétuelle de génération de contenu peut se produire, entraînant une consommation inutile de tokens et des cycles d'exécution superflus.

1.  Jour d'exécution 1 : Fozzels génère avec succès un nouveau contenu et l'écrit dans le champ Description.

2.  Détection du changement : la valeur du champ Description ayant changé, le système e-commerce intégré marque le produit comme « updated ».

3.  Exécution suivante : lors de la prochaine exécution planifiée (par ex. le lendemain), le paramètre d'automatisation détecte que le produit a été « updated » et tente de régénérer à nouveau le contenu.

4.  La boucle : cette régénération crée un nouveau changement, qui déclenche le processus indéfiniment.

### Recommandations de gestion

Bien qu'utiliser l'attribut cible comme donnée d'entrée soit parfois intentionnel (par ex. pour ajouter des informations à un texte existant), il est essentiel de gérer les paramètres d'automatisation afin d'éviter cette boucle sans fin.

- **Action 1** : désactiver la régénération automatique. Le moyen le plus efficace de rompre la boucle est de désactiver l'option « Automatically regenerate when product attribute changed ». Ainsi, même si le Flow provoque un changement dans l'attribut cible, l'automatisation ne planifie pas automatiquement une nouvelle exécution sur la base de ce changement précis.
- **Action 2** : supprimer l'entrée récursive. Si le contenu existant n'est pas strictement nécessaire à la logique du prompt, retirez la variable récursive (par ex. supprimez {Description}) de votre prompt. Appuyez-vous uniquement sur des attributs produit statiques (comme Brand, Material, Color) pour garantir que la génération de contenu repose sur des données immuables, et éviter ainsi le déclenchement de mises à jour continues.

