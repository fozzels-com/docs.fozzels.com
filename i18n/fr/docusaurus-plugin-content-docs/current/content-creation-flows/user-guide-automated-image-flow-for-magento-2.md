---
id: '103000408096'
title: "4.5.1.a. Guide utilisateur : Automated Image Flow pour Magento 2"
sidebar_position: 15
slug: /content-creation-flows/user-guide-automated-image-flow-for-magento-2
description: >-
  Image Flow pour Magento est un outil d'automatisation spécialisé, de niveau
  entreprise, conçu pour la génération massive d'images par IA, le mappage
  automatisé des métadonnées et la synchronisation directe
keywords:
- "flux d'images"
---

**Image Flow pour Magento** est un outil d'automatisation spécialisé, de niveau entreprise, conçu pour la génération massive d'images par IA, le mappage automatisé des métadonnées et la synchronisation directe avec votre catalogue Magento. En configurant ce flux, vous mettez en place un pipeline autonome qui surveille votre boutique Magento, traite des milliers de produits et met à jour votre site de manière dynamique selon des critères de filtrage avancés.

> **Important :** nous vous recommandons vivement de **ne pas activer** le flux (en laissant le bouton "Active flow" sur **OFF**) tant que vous n'avez pas terminé toutes les configurations dans Fozzels et testé vos paramètres.

## 1\. Création d'un nouvel Image Flow Magento (onglet 1)

Cet onglet gère la connexion principale et l'identité de votre séquence d'automatisation Magento.

-   **Option A : via le menu Image Flows** — Accédez à **Image Flows** dans la barre de navigation supérieure, cliquez sur **New Image Flow**, puis sélectionnez successivement votre **Magento Integration**, le site web (Website) et la vue de boutique (Store View) dans les menus déroulants.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3sMs1RpGzJC1CfMq-OPKPRx6S7bvaX80XQ.png)

-   **Option B : depuis le catalogue produits** — Allez dans **Catalog → Products**, filtrez les SKU Magento que vous souhaitez traiter, sélectionnez-les, puis cliquez sur **Actions → Create Image Flow**. La vue de boutique Magento et le contexte produit sont alors préremplis automatiquement.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/FYFCs9P6ybHQ4OrlVaSn9YmgmftqIdhxAw.png)

**Étapes essentielles :**

1.  **Nommez votre Flow :** donnez à votre flux un nom clair et descriptif (par ex. « Magento Store -Autumn 2026 - Gemini Pro »).

2.  **Confirmez la sélection :** confirmez les paramètres de votre boutique Magento en cliquant sur le bouton **Submit** en bas de la page.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/liZ6uL_K1ryZ9ltZQsCUAhG6jAYP4UqhrQ.png)

## 2\. Configuration de l'IA et grille des médias (onglet 2)

Dans cet onglet, vous définissez le moteur de modèle d'IA et les caractéristiques visuelles exactes requises par les modèles de thème de votre boutique Magento.

### **Sélection du fournisseur d'IA et du modèle**

Sélectionnez votre réseau de traitement et votre modèle précis à partir des cartes interactives affichées à l'écran :
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3eMz8tYlXhUnC_8wEhgtjjig_7FHQP_x-w.png)

-   **Google | Gemini :**

-   **Gemini 2.5 Flash | Nano Banana :** un modèle rapide et efficace, optimisé pour les tâches à fort volume et à faible latence. Prend en charge **jusqu'à 3 presets de référence**.

-   **Gemini 3 Pro | Nano Banana Pro :** conçu pour la production de ressources professionnelles et les instructions complexes. Il intègre par défaut un processus de « Thinking » qui affine la composition et prend en charge **jusqu'à 14 presets de référence**.

-   **Gemini 3.1 Flash | Nano Banana 2 :** un modèle mis à jour, très efficace, équilibré pour la création de ressources à fort volume. Prend en charge **jusqu'à 14 presets de référence**.

-   **Virtual Try-On `NEW` :** un modèle spécialisé pour générer des images photoréalistes montrant comment un vêtement se porte sur une personne (nécessite un preset d'image de personne et une image du vêtement).

-   **OpenAI | ChatGPT :**

-   **GPT Image 1 :** un modèle de génération d'images précis et haute fidélité, qui s'appuie sur les derniers cadres multimodaux.

-   **GPT Image 1 Mini `NEW` :** un moteur de génération et de retouche d'images très économique, offrant le meilleur rapport qualité-prix pour les usages à fort volume.

-   **GPT Image 2 `NEW` :** un modèle de génération de pointe conçu pour un rendu rapide et de haute qualité, avec des résolutions flexibles jusqu'à 3840 px.

-   **xAI :**

-   **Grok Imagine Image :** le modèle standard de génération d'images de xAI, qui produit des images de haute qualité à partir de prompts textuels. Prend en charge **jusqu'à 5 presets de référence**.

-   **Grok Imagine Image Pro `PRO` :** architecture xAI premium offrant une qualité d'image supérieure, avec un niveau de détail et une fidélité des textures accrus. Prend en charge **jusqu'à 5 presets de référence**.

### La grille interactive des formats de sortie

Les thèmes Magento reposent fortement sur des dimensions d'image précises pour éviter les décalages de mise en page sur votre frontend. Utilisez la grille pour verrouiller des spécifications exactes en pixels :

1.  **Sélectionnez le format (Aspect Ratio) :** dans la colonne de gauche, choisissez la géométrie de votre mise en page (par ex. **1:1 Square** standard pour les grilles de catégories, ou **3:4 Portrait** pour les fiches produit (PDP)).

2.  **Sélectionnez la résolution et l'échelle :** cliquez directement sur une cellule de la grille correspondant au niveau de pixels souhaité sous les **colonnes 512, 1K, 2K ou 4K** (par ex. de **512x512** jusqu'à **4096x4096** pour offrir une expérience de zoom au survol approfondie sur votre boutique).

3.  **Le panneau d'aperçu :** le panneau interactif de droite affiche dynamiquement un cadre de recadrage visuel et le format de fichier cible, et calcule l'**Est. size** (poids du fichier) et les **Est. tokens** (coût de génération) par demande d'image.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/Ked7uS5641FdzLgFJkkyBLIIB44pYiuh5Q.png)

## 3\. Filtrage du catalogue Magento et prompts (onglet 3)

Cette section est le cerveau créatif de votre flux Magento : elle vous permet de filtrer dynamiquement les produits et d'injecter des attributs natifs dans vos prompts.

### **Section A : sélection des presets**

-   **La règle d'universalité :** comme un même ensemble de presets s'applique à tout un groupe de produits Magento, choisissez des ressources neutres. Évitez les références comportant des marqueurs de marque distincts ou des détails uniques qui pourraient se retrouver par erreur sur d'autres marques de votre inventaire Magento.

-   **Compteur de capacité :** suivez vos emplacements de presets grâce au compteur situé en haut. Des modèles comme Gemini Pro autorisent jusqu'à 14 emplacements de référence, ce qui permet d'obtenir une cohérence maximale entre les angles et les éclairages.

-   **Ajout de références :** cliquez sur le grand encadré **\[+\] Add preset** pour ouvrir le menu déroulant natif et sélectionner votre type de référence :

1.  **Model :** choisissez une ressource de mannequin dans la bibliothèque Fozzels intégrée pour définir les poses et le style humain.

2.  **Scene :** sélectionnez un style d'arrière-plan ou un modèle d'environnement.

3.  **Product :** ajoutez une photo de référence supplémentaire de votre produit pour donner à l'IA davantage d'angles ou de détails.

4.  **Image :** téléversez directement depuis votre ordinateur toute image ou tout fichier de référence personnalisé.

    5.  **Generated Media :** choisissez une image déjà générée avec succès dans Fozzels afin de maintenir la cohérence.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/poqeQbutVP7nGAfD5MDN1F9aCnQ23CE6iw.png)

### **Section B : générateur de règles Magento avancé (Filter & Select Products)**

-   **Opérateurs logiques :** combinez plusieurs critères à l'aide des chemins logiques `AND` ou `OR`.

-   **Recherches ciblées de SKU :** utilisez des conditions comme `SKU` `in` `[Value, Value]` pour appliquer votre flux directement à des lignes d'attributs Magento explicites, séparées par des virgules. L'aperçu interactif ci-dessous se met à jour instantanément pour afficher les éléments correspondants.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/l4Ka92XutqmJkQgI3uopMdusTJwSckSEIw.png)

### **Section C : prompts à attributs dynamiques**

-   **Injection d'attributs Magento :** rédigez vos instructions de conception dans la fenêtre principale, puis utilisez le **panneau Attributes** situé à droite. Vous pouvez cliquer sur des champs de données Magento natifs (comme `Categoria`, `Color` ou `Material`) ou les faire glisser directement dans votre texte. Fozzels remplacera dynamiquement ces espaces réservés par des valeurs propres à chaque produit traité dans le batch.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/hSKoFNYycQr--RrbjrFaaNum4tvErHYsHA.png)

## 4\. Automatisation Magento et configuration du nommage des images (onglet 4)

Cet onglet contrôle la manière dont vos fichiers multimédias sont initialement mis en file d'attente pour le traitement et structurés pour être injectés dans la base de données Magento, afin de garantir un mappage des données par défaut correct et une bonne optimisation SEO.

-   **Amount of images to process per day :** définissez des plafonds pour réguler les flux de génération lors d'opérations de fond de longue durée.

-   **File name for pushed images (SEO Naming) :** optimisez le SEO de votre boutique Magento en concevant des noms de fichiers programmatiques. Utilisez du texte standard ou insérez des slugs d'attributs dynamiques depuis le menu déroulant (comme `{name}` pour le nom du produit ou des paramètres de code spécifiques comme `{color}`). Les espaces sont automatiquement remplacés par des tirets (`-`). Le suffixe `_{id}.{ext}` est ajouté automatiquement par le système pour garantir l'unicité des fichiers en base de données et éviter d'écraser les ressources existantes sur votre serveur Magento.

-   **Image position in store :** saisissez le poids de priorité global par défaut (la valeur par défaut est `101`). Les nombres les plus bas apparaissent plus tôt dans votre mise en page Magento (`1` = premier / mise en avant). Un poids par défaut de `101` place sans risque vos images générées par l'IA juste derrière les images de catalogue natives gérées par la boutique.

-   **Image roles in store :** associez les ressources directement aux rôles multimédias natifs de Magento utilisés par le modèle de thème actif. Cliquez sur le champ pour attribuer des rôles structurels de repli par défaut comme `Base` (image principale du produit), `Small`, `Thumbnail` ou `Swatch`.

-   **Hide pushed images on the product page :** cochez cette case pour synchroniser des visuels vers votre dossier multimédia Magento à des fins techniques côté back-end (comme les icônes du panier ou d'autres sliders personnalisés secondaires) sans les afficher dans le carrousel principal de la galerie destinée aux clients.

-   **Fully automatic \[Coming Soon\] :** cette fonctionnalité est actuellement en développement. Une fois disponible, cocher cette case vous permettra de contourner entièrement la validation humaine et de publier les images directement dans les vues de votre boutique Magento en production dès la fin du rendu.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/zAHGFiGSaSobL-Deg00nawI92l2RDf4wzw.png)


## 5. **Activation et exécution du Flow**

Une fois tous les champs de mappage de l'onglet 4 renseignés, votre pipeline automatisé est prêt à être déployé. Suivez les étapes ci-dessous pour lancer le moteur de génération :

1.  **Activez le Flow (bouton Active flow) :** placez le bouton principal **Active flow**, situé dans le coin supérieur droit de la page, sur la position **ON**. Votre automatisation passe ainsi officiellement de l'état de brouillon à une routine opérationnelle.

2.  **Lancez la génération (Plan & Close / Run Now) :**

-   Cliquez sur le bouton partagé vert situé dans le coin inférieur droit de l'écran.

-   Sélectionnez **Run Now** dans les options du menu déroulant. Le système verrouille votre configuration finale, ferme l'espace de travail du générateur et déclenche immédiatement le moteur en arrière-plan pour traiter votre batch de données produit Magento.

3.  **Suivez la progression :** pour voir l'état du rendu en temps réel ou accéder directement à la file de modération, cliquez sur le bouton turquoise **\[Batch List\]** dans le coin inférieur gauche. Vous êtes immédiatement redirigé vers vos journaux de traitement chronologiques.

## 6\. Travailler avec la Batch List et les relectures

Si l'option **Fully automatic** est désactivée, toutes les ressources sont acheminées directement vers votre **Batch List** pour relecture et déploiement manuel.

### **Naviguer dans l'index des batches**

Cliquez sur le bouton **Batch List** pour charger vos journaux d'exécution. Sélectionnez votre session par ordre chronologique dans le tableau de gauche, puis utilisez le panneau principal **Image Completion List** pour suivre le traitement des produits ligne par ligne, avec leurs SKU Magento d'origine.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/oXCxEay_94461PqsajzJPS4wYBlWEgCZjA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/5r4iWyzzfg14_CTFejOGP9ZVint4EoOtnw.png)

### **L'interface de relecture consolidée (« Swipe-and-Sync »)**

Un clic sur l'**icône en forme d'œil** ouvre notre fenêtre superposée côte à côte, conçue pour vous permettre d'auditer rapidement des batches et de remplacer les paramètres globaux élément par élément :

-   **Relecture côte à côte :** le **Generated Panel (à gauche)** affiche la nouvelle option générée par l'IA ; l'**Original Panel (à droite)** affiche le fichier de référence de votre boutique Magento. Utilisez **\[Zoom In\]** de chaque côté pour des inspections détaillées.

-   **Console de remplacement des métadonnées Magento :** située juste sous les cartes d'image, elle vous permet d'affiner des paramètres précis de la boutique pour le produit sélectionné avant sa mise en ligne :

-   **POSITION :** modifiez manuellement l'ordre dans la galerie via la zone de texte (par ex. en descendant sous `101` si vous souhaitez que ce rendu précis devienne la vignette principale).

-   **ROLES :** cliquez sur les badges interactifs (`Base`, `Small`, `Thumbnail`, `Swatch`) pour attribuer ou retirer dynamiquement des valeurs de présentation Magento natives pour ce fichier précis.

-   **HIDE ON PDP :** cochez cette case pour masquer uniquement cette ressource dans le carrousel de la fiche produit.

-   **La boucle de contrôle :**

-   **Regenerate :** déclenche immédiatement une nouvelle exécution, sans restriction, pour obtenir une autre variante visuelle si la composition doit être revue.

-   **Accept & next :** approuve la version, verrouille vos remplacements personnalisés de métadonnées Magento et **ouvre instantanément l'image suivante** de votre file de batch.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/fghCPbvdab9wtI-u0AWAUQPsuXIrvMCEPg.png)

## 6\. Actions groupées et exports ZIP locaux

Fozzels vous offre une portabilité totale des données de votre inventaire visuel. Vous pouvez envoyer des batches directement vers Magento, ou exporter des dossiers en local.

### **Exécution d'actions groupées :**

1.  Cochez les cases de sélection à gauche des lignes du tableau **Image Completion List**.

2.  Ouvrez le menu déroulant **Actions**, situé juste au-dessus des en-têtes de la grille de données, et choisissez votre routine :

-   **Show Selected :** filtre votre écran de travail pour isoler uniquement les lignes de produits Magento que vous avez cochées.

-   **Download images (ZIP) :** déclenche en arrière-plan la compilation de toutes les ressources haute résolution générées par l'IA que vous avez cochées dans un seul package compressé.

### **Où trouver vos archives téléchargées**

Comme le traitement de gros batches d'images haute résolution peut prendre quelques instants, les archives sont générées en arrière-plan. Pour télécharger vos fichiers terminés :

1.  Cliquez sur le menu déroulant **Dashboard** dans le coin supérieur droit de la barre de navigation de l'en-tête principal.

2.  Sélectionnez **Export / Generated Data** dans la liste.

3.  Lorsque le badge d'état devient vert (**Available**), cliquez sur le bouton bleu **\[ZIP\]** dans la colonne _Download_ pour enregistrer l'archive directement sur votre ordinateur.

> ⚠️ **Remarque importante :** les fichiers ZIP générés sont conservés sur le serveur et disponibles pendant **24 heures seulement**. N'oubliez pas de télécharger vos ressources avant l'expiration du lien !

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/EqkvThCVlPgUbKnTorc6vQ3Ilx2CxPOccg.png)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/b3yz16xNhZFEKIfuUAB_xhtCTPD7feQp6w.png)

## 7\. Optimisation SEO : génération de textes alternatifs pour les nouvelles images

En plus des ressources visuelles, Fozzels peut générer automatiquement des textes alternatifs (descriptions alternatives) pertinents et optimisés pour le SEO pour chaque nouvelle image IA envoyée vers votre boutique Magento. Cela améliore sensiblement les facteurs de classement de votre catalogue dans les résultats de Google Images.

Pour savoir comment configurer la génération automatisée et le mappage des métadonnées pour les balises Alt, consultez : **User Guide: Automated Alt Texts and SEO for Magento**.
