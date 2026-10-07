---
id: '103000367978'
title: "4.2.1.  Configuration de l'IA : sélection des modèles d'IA et des fonctionnalités optionnelles"
sidebar_position: 6
slug: >-
  /content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features
description: >-
  L'étape AI Configuration (étape 2 de la modification d'un Flow) est la phase
  la plus critique pour définir le profil de performance et de coût d'un Content
  Flow. Elle détermine
---

L'étape AI Configuration (étape 2 de la modification d'un Flow) est la phase la plus critique pour définir le profil de performance et de coût d'un Content Flow. Elle détermine le choix du moteur d'IA générative, de ses capacités spécialisées et de ses contraintes opérationnelles. Les utilisateurs doivent prendre ici des décisions stratégiques, en arbitrant entre la qualité des résultats, la complexité de la tâche (par ex. besoins multimodaux) et l'optimisation du coût en tokens.

1.  ### Le moteur d'IA principal : fournisseurs et niveaux de modèles

Fozzels s'intègre avec plusieurs éditeurs d'IA de référence (par ex. OpenAI/ChatGPT, Google/Gemini, Anthropic, xAI), chacun proposant un portefeuille de modèles.

1.1. Critères de sélection d'un modèle

Choisir le bon modèle exige une évaluation stratégique en fonction de la tâche de contenu :

**Modèles économiques**. Objectif : tâches à fort volume et de faible complexité (méta-titres, traductions courtes, normalisation des données). Caractéristiques clés : traitement plus rapide, fenêtre de contexte plus réduite. Profil de coût : coût en tokens d'entrée/sortie le plus bas.

**Modèles haute qualité**. Objectif : génération complexe et créative, synthèse approfondie, respect d'un ton de marque nuancé. Caractéristiques clés : cohérence logique supérieure, grande fenêtre de contexte. Profil de coût : coût en tokens d'entrée/sortie plus élevé.

**Modèles multimodaux**. Objectif : tâches nécessitant une analyse visuelle en plus du texte (par ex. décrire la texture ou le style d'une image). Caractéristiques clés : la capacité d'analyse d'images est indispensable. Profil de coût : coût plus élevé en raison de la tokenisation des images.

2.  ### Outils d'enrichissement par l'IA et recherche web

Les outils d'enrichissement par l'IA sont des fonctionnalités optionnelles qui élargissent l'accès du modèle à des données externes non issues du produit.

Enable Web Search : l'activation de cette fonctionnalité permet au modèle d'interroger des informations en temps réel et un contexte externe provenant d'Internet pendant la génération de contenu.

Valeur stratégique : la recherche web est indispensable pour les contenus qui doivent faire référence aux tendances actuelles du marché, à des normes de fabrication précises ou à des faits externes absents des attributs du catalogue produit.

Impact sur les coûts : utilisez cette fonctionnalité avec discernement, car elle entraîne généralement un coût supplémentaire par requête, indépendant de la consommation standard de tokens.

3.  ### Capacités spécialisées des Flows

Pour les tâches créatives qui vont au-delà de l'analyse standard de texte et d'images, Fozzels exige des types de flux dédiés et des modèles d'IA spécifiques en raison de la forte puissance de calcul mobilisée.

**Image Flows (Image Generation).**
Objectif : générer de nouvelles images de produits (à partir de zéro).
Modèles requis : modèles spécialisés de génération d'images (par ex. GPT Image 1, Gemini 2.0 Flash Preview Image Generation).
Restriction de fournisseur : limité à certains fournisseurs (par ex. OpenAI, Google).

**Video Flows (Video Generation)**.
Objectif : dédié à la génération de courts contenus vidéo haute fidélité (par ex. clips de 8 secondes en 720p).
Modèle requis : modèles haut de gamme de génération vidéo (par ex. Gemini Veo 3).
Restriction de fournisseur : actuellement limité à Google | Gemini. Structure de coût : les modèles de génération vidéo reposent souvent sur une tarification spécifique (par ex. prix par seconde de vidéo produite) en raison de la forte demande en calcul.

4.  ### Optimisation des images et maîtrise des coûts

Pour tout flux utilisant des capacités multimodales, une gestion efficace des images produit est essentielle, tant pour la stabilité de la génération que pour la maîtrise du coût en tokens.

4.1. Entrée d'images et logique de repli

Image Count : les utilisateurs doivent définir explicitement le nombre d'images produit que l'IA doit analyser (par ex. 1, 2 ou 3). Augmenter le nombre d'images accroît directement le nombre de tokens d'entrée et, par conséquent, le coût.

Fallback/Skip : si un produit du flux ne dispose pas des images demandées, les utilisateurs doivent définir une action de secours :
Fallback to a text-only model : le processus se poursuit avec un prompt uniquement textuel, ce qui évite l'échec mais conserve le coût de génération.
Skip generating content : le produit est ignoré, ce qui économise tous les coûts en tokens associés à cet article.

### 4.2. Image Resize (mécanisme de stabilité)

Il est **recommandé** d'activer Enable Image Resize pour tous les flux multimodaux. Cette fonctionnalité constitue un mécanisme essentiel de stabilité et d'économie :

Prévention des échecs : les modèles génératifs imposent des limites strictes de taille de fichier (par ex. >2 Mo) et de dimensions (par ex. >2048 pixels). Le redimensionnement ajuste automatiquement ces fichiers pour respecter ces limites.

Efficacité des coûts : en garantissant que les fichiers respectent les limites de taille, on évite les échecs de génération ; les coûts en tokens ne sont ainsi engagés que pour les contenus produits avec succès, ce qui élimine les dépenses inutiles sur des opérations qui échoueraient autrement.
