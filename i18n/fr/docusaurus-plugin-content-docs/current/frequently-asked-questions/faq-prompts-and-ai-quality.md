---
title: "FAQ : prompts et qualité de l'IA"
sidebar_position: 6
unlisted: true
slug: /frequently-asked-questions/faq-prompts-and-ai-quality
description: >-
  Conflit entre instructions dans les prompts, cadrage et branding des images,
  mise en forme cohérente des caractéristiques, sorties multilingues mélangées
  et logique de langue de repli dans les prompts.
---

## Mon image générée par IA ignore les consignes de cadrage (corps entier au lieu du buste).

Cela est dû à une **concurrence entre instructions** (prompt competition) : des consignes contradictoires (par ex. "full-body" avec "only torso"). Supprimez tous les déclencheurs contradictoires et utilisez une formulation précise comme "waist-up portrait pose".

## Le logo et le branding sont flous dans les images générées.

Les plans en pied répartissent le rendu sur l'ensemble du corps. Passez à un cadrage portrait/taille et ajoutez des instructions de branding précises dans le prompt.

## Avez-vous des conseils d'optimisation de prompts pour la génération d'images ?

Évitez les instructions contradictoires, ajoutez des exclusions explicites, utilisez un langage spécifique au portrait et protégez les éléments de branding. Contactez le support pour une revue de votre prompt.

## Les caractéristiques de mes produits sont mises en forme de façon incohérente (liste ou en ligne).

Ajoutez des règles de mise en forme explicites au prompt : chaque caractéristique sur une nouvelle ligne, noms en gras, sans symboles de puces. Utilisez des MAJUSCULES pour souligner les règles clés.

## Comment rédiger des prompts pour une mise en forme cohérente des caractéristiques produit ?

Précisez la structure (description + section de caractéristiques), mettez-la en forme sous la forme d'une liste verticale avec des libellés en gras, interdisez les puces et listez les caractéristiques requises.

## L'IA génère des informations incorrectes sur les matériaux/attributs à partir des images.

Lorsque Fozzels n'a pas accès à certains champs, l'IA devine à partir des photos, ce qui n'est pas fiable pour les détails techniques. Connectez les attributs ACF/personnalisés pour obtenir des données exactes.

## L'équipe Fozzels peut-elle examiner mes flows et mes prompts ?

Oui, elle peut vous conseiller sur la structure, la spécialisation et l'optimisation. Planifiez une session en ligne pour un accompagnement détaillé.

## Fozzels peut-il reproduire la mise en page personnalisée de mon front-end (par ex. un accordéon) ?

Fozzels ne peut pas garantir la reproduction de mises en page complexes. Expérimentez avec les prompts, mais un ajustement manuel peut être nécessaire.

## J'obtiens une sortie dans plusieurs langues mélangées (par ex. anglais + néerlandais).

Rédigez toutes les instructions du prompt dans la langue de sortie souhaitée et ne mélangez pas les langues. Ajoutez une mention forte : "IMPORTANT: Output must be entirely in [language]."

## Mon prompt génère un mélange de langues lorsque je le copie depuis une autre boutique.

Ne copiez pas le prompt pour y ajouter des instructions de traduction. Rédigez le prompt entier dans la langue cible depuis le début, et créez des prompts distincts par langue.

## Puis-je utiliser une logique de langue de repli dans les prompts (par ex. tchèque → allemand) ?

Vous pouvez essayer une logique conditionnelle dans le prompt : "If Czech text is available, use it. If not, use German." Les résultats dépendent de la capacité de détection de langue de l'IA.
