---
id: '103000408207'
title: >-
  4.3.2.a Génération de textes alternatifs d'images pour Magento 2 : aspects
  techniques et configuration pas à pas
sidebar_position: 9
slug: >-
  /content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu
description: >-
  Puisque vous maîtrisez déjà les mécanismes de base de la configuration des
  Product Content Flows dans Fozzels, ce manuel technique se concentre
  exclusivement sur
keywords:
- flux de contenu
---

Puisque vous maîtrisez déjà les mécanismes de base de la configuration des Product Content Flows dans Fozzels, ce manuel technique se concentre exclusivement sur l'architecture propre à Magento 2 : l'interaction avec l'attribut `product_media_gallery` du système et l'optimisation de la consommation de tokens lors du traitement en masse des galeries de médias.

## Étape 1. Configurer les droits d'écriture de la Media Gallery (prérequis)

Contrairement aux champs de texte standard (par ex. descriptions et noms de produits), les textes alternatifs (Alt texts) dans Magento se trouvent dans l'infrastructure de la galerie d'images et sont écrits directement dans l'attribut système `product_media_gallery`. Par défaut, Fozzels traite cet attribut en lecture seule, en l'utilisant uniquement comme marqueur pour filtrer le catalogue produit selon la présence d'images.

Pour autoriser le système à écraser et à injecter des données dans cet emplacement, vous devez passer son statut à **Mutable** :

1.  Dans le menu principal en haut, accédez à **Integrations** → sélectionnez votre instance **Magento 2** active.

2.  Ouvrez l'**onglet 3 : Attributes**.

3.  Dans la barre de recherche/filtre, saisissez `media`. Repérez la ligne portant le code `product_media_gallery` (Media Gallery) et cliquez sur le bouton turquoise **\[Edit attribute\]**.

4.  Dans la fenêtre de paramètres, repérez la section _Transform Data_, trouvez la case **Mutable** et cochez-la (**\[v\] Mutable**).

5.  Cliquez sur le bouton bleu **Save** en bas à droite.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/ryugiLjaej08TONBWZC6dvmgdeHvEKzJOA.png)
![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/vj3HVtE0gIyKK1lMzn0NeLCwxHle8IT1Cg.png)

##
Étape 2. Initialisation du flux et mappage des attributs

1.  Accédez à la section **Content Flows** et cliquez sur le bouton **Create** **Flow** (ou sélectionnez directement des produits cibles depuis la vue de votre catalogue et cliquez sur **Actions → Create Flow**).

2.  Dans l'**onglet 1 : New Flow**, configurez les paramètres de votre environnement :

-   **Store / Integration :** sélectionnez votre instance Magento, la configuration de site web et la Store View cible dans les listes déroulantes.

-   **Name :** donnez un titre technique clair à votre flux.

-   **Entity Type :** défini automatiquement sur `Product` par défaut.

3.  **Target Attribute :** cliquez dans la liste déroulante de sélection **Attribute\***, saisissez `media` et sélectionnez l'attribut système **Media Gallery**. Les chaînes générées par l'IA sont ainsi acheminées en toute sécurité vers le schéma de base de données de la galerie d'images plutôt que vers les blocs de description standard.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/Btu-8xXR_jSHpiFqqxtTZJBUXcu0hyrmTQ.png)

## Étape 3. Sélection du modèle de vision et du mode d'analyse (Delta ou écrasement complet)

Dans l'**onglet 2 : AI Configuration**, sélectionnez votre fournisseur et votre modèle (par ex. des niveaux GPT ou Gemini dotés de capacités de vision multimodale pour analyser les images), puis définissez la manière dont l'exécuteur doit interagir avec la base de données de votre boutique Magento en production :

-   **Mode Delta (case "Force regenerate ALT texts" DÉCOCHÉE) :** le scénario par défaut. L'exécuteur en arrière-plan analyse votre catalogue Magento et demande des completions à l'IA **uniquement pour les images dont le champ Alt text est actuellement vide**. Cela préserve votre travail SEO manuel existant et économise vos crédits API.

-   **Mode d'écrasement complet (case "Force regenerate ALT texts" COCHÉE) :** le scénario de réécriture complète. Le moteur ignore totalement l'état actuel des métadonnées sur la boutique, efface les anciens Alt texts du batch sélectionné et les remplace tous par de nouvelles chaînes générées par l'IA.

> ? **Recommandation technique :** laissez la case **Enable Image Resize** activée. Si un fichier image dans Magento dépasse 2 Mo ou une résolution de 2048 px, Fozzels le redimensionne automatiquement pour respecter les contraintes d'entrée des modèles de vision. Cela protège activement votre pipeline contre les erreurs de charge utile (Failed generations) et optimise vos crédits de tokens.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/cbKMN8kS6jIqV-wZJGv_TV9zC74UxTrCFg.png)

## Étape 4. Ingénierie de prompt

Dans l'**onglet 3 : Flow Selection & Prompt**, vous rédigez les instructions explicites destinées au modèle d'IA. Comme le pipeline fonctionne en mode centré sur l'image (1 image = 1 completion de prompt), votre prompt doit demander au modèle de vision de fusionner les éléments visuels avec le contexte textuel de votre produit.

1.  Dans l'espace **Prompt**, rédigez vos règles techniques de base (par ex. des contraintes de longueur — la norme du secteur est inférieure à 125 caractères pour les lecteurs d'écran — et l'interdiction des formules d'introduction génériques comme _"image of"_).

2.  Utilisez la barre latérale **Attributes** à droite pour rechercher et **glisser-déposer** des tokens Magento dynamiques directement dans le corps de votre prompt (par ex. `{name}`, `{color}`, `{material}`, `{brand}`).

### **Prompt Templates :**

> **Option 1: E-commerce Fashion & Apparel Standard** `"Write a concise, natural SEO Alt text for an e-commerce website accessibility tag. Describe the visual details, style, and cut of the item shown in the image. Integrate these attributes naturally if they are visible: {color} {name} from {brand}, made of {material}. Keep the output under 125 characters, strictly avoid keyword stuffing, and do not start with phrases like 'photo of' or 'image of'. Only describe what is actually present in the photo."`

> **Option 2: Minimalist & Product Detail Focused** `"Generate a clean, professional Alt tag for a screen reader. Focus purely on the product design, layout, and distinct visual features. Use the provided metadata to ensure accuracy: {brand} {name} in {color}. Keep the description realistic, factual, and under 120 characters. Avoid marketing fluff and do not use 'photo of' or 'image of'. Just return the description string."`

## Étape 5. Limites de volume de traitement et présentation de la Batch List

Dans l'**onglet 4 : Automation**, le champ de configuration **"Amount of products to create content for per day"** calcule les seuils de traitement en fonction des entités Product parentes, et non des fichiers image individuels. Comme Fozzels évalue chaque média de la galerie d'un produit, définir une limite de 10 produits contenant chacun 5 images entraînera 50 completions de vision IA distinctes et facturées. Malgré cette structure de traitement, tous les résultats générés restent soigneusement organisés dans votre **Batch List**, regroupés visuellement par SKU de produit, afin que vous puissiez facilement les examiner, les modifier ou les approuver en masse avant de publier les métadonnées en production.
