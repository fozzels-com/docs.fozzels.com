---
id: '103000410112'
title: >-
  4.3.2.b Générer des textes alternatifs pour les images NextChapter : subtilités
  techniques et configuration pas à pas
sidebar_position: 10
slug: >-
  /content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s
description: >-
  Puisque vous connaissez déjà les principes de base de la configuration des
  flux de contenu (Product Content Flows) dans Fozzels, cette instruction se
  concentre…
keywords:
- flux de contenu
---

Puisque vous connaissez déjà les principes de base de la configuration des flux de contenu (Product Content Flows) dans Fozzels, cette instruction se concentre exclusivement sur les spécificités de l'architecture NextChapter : l'utilisation de l'attribut système **product\_media\_gallery** et l'optimisation des coûts en tokens lors du traitement par batch des galeries de médias.

## Étape 1. Configurer les droits d'écriture pour la galerie de médias (condition obligatoire)

Contrairement aux champs de texte standard (par exemple la description ou le nom du produit), les textes alternatifs dans NextChapter se trouvent à l'intérieur de la galerie d'images et sont écrits directement dans l'attribut `product_media_gallery`. Par défaut, Fozzels considère cet attribut comme étant en lecture seule et l'utilise comme marqueur pour filtrer les produits selon la présence de photos.
Pour autoriser le système à écrire et à mettre à jour les données de ce champ :

1.  Accédez au menu principal : **Integrations** → sélectionnez votre instance **NextChapter** active.
2.  Ouvrez l'onglet **Tab 3: Attributes.**
3.  Dans le champ de recherche, saisissez `media`. Trouvez la ligne portant le code `product_media_gallery` (Media Gallery) et cliquez sur le bouton turquoise **\[Edit attribute\]**.
4.  Dans la fenêtre modale, dans la section Transform Data, repérez l'option **Mutable** et cochez la case (**\[v\] Mutable**).
5.  Cliquez sur le bouton bleu **Save** en bas à droite.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/DgdusqsKuR07n_6ZVkUycVCUVVRc9SLNEw.png)![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/F371_zOBWTktWVS7poYzGt-L5es5KLOkXw.png)

## Étape 2. Initialisation du flux et mappage des attributs

1.  Accédez à la section **Content Flows** et cliquez sur le bouton **Create Flow** (ou sélectionnez les produits souhaités directement dans le catalogue et cliquez sur **Actions → Create Flow**).

2.  **Dans Tab 1: New Flow**, configurez les paramètres de l'environnement :

    -   **Store / Integration :** sélectionnez votre instance NextChapter, les paramètres du site et la Store View requise dans la liste déroulante.
    -   **Name :** indiquez un nom technique clair pour le flux.
    -   **Entity Type :** la valeur Product sera définie automatiquement.
3.  **Target Attribute :** cliquez sur le champ de sélection de l'attribut (`Attribute*`), saisissez `media` et sélectionnez `Media Gallery`. Cela permettra à Fozzels de transférer en toute sécurité les chaînes générées par l'IA directement dans le schéma de base de données de la galerie NextChapter.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/yEYZO7DIJN90tk-_rv6kZaE6AOCY_rSOWg.png)

## Étape 3. Choisir le modèle Vision et le mode d'analyse (Delta ou Full Overwrite)

Dans **Tab 2: AI Configuration**, sélectionnez le fournisseur et le modèle (par exemple, des versions de GPT ou de Gemini avec prise en charge de Vision pour l'analyse d'images), puis définissez le mode d'interaction avec votre boutique NextChapter :

-   **Mode Delta (case "Force regenerate ALT texts" DÉSACTIVÉE) :** scénario par défaut. Le runner en arrière-plan analyse le catalogue NextChapter et n'envoie des requêtes à l'IA que pour les images dont le texte alternatif est actuellement vide. Cela préserve vos paramètres SEO manuels et économise des crédits d'API.
-   **Mode Full Overwrite (case "Force regenerate ALT texts" ACTIVÉE) :** scénario de réécriture complète. Le moteur ignore totalement les métadonnées actuelles de la boutique, efface les anciens textes alternatifs de l'échantillon sélectionné et les remplace par de nouvelles chaînes générées par l'IA.

> **Recommandation technique :** laissez l'option **Enable Image Resize** activée. Si le fichier image dans NextChapter dépasse 2 Mo ou une résolution de 2048 px, Fozzels le réduira automatiquement aux exigences standard des modèles Vision. Cela protégera votre flux contre les erreurs de génération (Failed generations) et réduira la consommation de tokens.

![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/MSso5mlNSv6s9RgpZywIS_fORd61TfNESw.png)

## Étape 4. Rédaction du prompt (Prompt Engineering)

**Dans Tab 3: Flow Selection & Prompt**, vous formulez les instructions destinées au modèle d'IA. Comme le processus fonctionne en mode de traitement fichier par fichier (1 image = 1 génération), votre prompt doit combiner les détails visuels et le contexte textuel du produit.

1.  Dans le champ **Prompt**, rédigez les règles techniques de base (par exemple, une limite de longueur — la norme est de 125 caractères maximum pour les lecteurs d'écran — et l'interdiction des phrases d'introduction telles que « image... »).
2.  Utilisez le panneau latéral **Attributes** à droite pour faire glisser des jetons dynamiques NextChapter directement dans le corps du prompt (par exemple `{name}`, `{color}`, `{material}`, `{brand}`).

### Modèles de prompt :

#### **Option 1 :** pour l'e-commerce (vêtements et chaussures)

> "Write a concise, natural SEO Alt-text for an online store's accessibility tag. Describe the visual details, style, and cut of the product in the photo. Naturally integrate these attributes if they are visible: {color} {name} from {brand}, material: {material}. Text length — up to 125 characters. Avoid keyword overstuffing and do not start with phrases like 'photo...' or 'image...'. Describe only what is actually in the shot."

#### **Option 2 :** minimaliste (détail du produit)

> "Generate a clean, professional Alt-tag for a screen reader. Focus exclusively on the product's design, composition, and clear visual details. Use metadata for accuracy: {brand} {name} in {color} color. The description should be realistic, factual, and up to 120 characters. No marketing phrases and no 'photo...' or 'image...'. Return only the prepared string."

## Étape 5. Limites de traitement et structure de la liste de batch (Batch List)

**Dans Tab 4: Automation**, le champ « **Amount of products to create content for per day** » calcule les limites de traitement en fonction des entités parentes (Products), et non des fichiers image individuels.
Comme Fozzels analyse chaque média de la galerie du produit : si vous définissez une limite de **10 produits**, chacun comportant **5 images**, le système effectuera **50 générations Vision payantes distinctes.**
Tous les résultats générés sont regroupés dans la **Batch List** par SKU de produit, ce qui vous permet de passer en revue, de modifier ou d'approuver en masse les nouveaux textes alternatifs avant leur envoi vers le site.
