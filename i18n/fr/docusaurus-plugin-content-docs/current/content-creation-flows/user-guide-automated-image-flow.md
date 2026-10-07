---
id: '103000400446'
title: "4.5.1. Guide d'utilisation : Automated Image Flow"
sidebar_position: 14
slug: /content-creation-flows/user-guide-automated-image-flow
description: >-
  Image Flow est un outil professionnel conçu pour la génération en masse et la
  synchronisation d'images produit grâce à l'IA. En configurant un flux une
  seule fois, vous établis
keywords:
- "flux d'images"
---

**Image Flow** est un outil professionnel conçu pour la génération en masse et la synchronisation d'images produit grâce à l'IA. En configurant un flux une seule fois, vous établissez un système autonome qui traite des milliers de produits, y compris les nouveaux articles ajoutés à votre boutique par la suite, grâce à un filtrage dynamique basé sur des conditions.

> **Important :** nous vous recommandons vivement de **ne pas activer** le flux (en laissant le commutateur "Active flow" sur **OFF**) tant que vous n'avez pas terminé toutes les configurations et testé vos paramètres.

## 1\. Créer un nouvel Image Flow (onglet 1)

Cet onglet gère l'identité de base et la connexion de votre automatisation. Il existe deux façons principales de lancer un nouveau flux :

-   **Option A : via le menu Image Flows** - Rendez-vous dans la section **Image Flows** de la barre de navigation supérieure et cliquez sur le bouton **New Image Flow**. Sélectionnez successivement votre Integration, votre Website et votre Store dans les menus déroulants.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/aGysMRzpl5ijAiHFUH5TFnasSdIEP1py9w.png)

-   **Option B : depuis le catalogue produit** - Dans la section **Catalog → Products**, filtrez les produits que vous souhaitez traiter, sélectionnez-les, puis cliquez sur **Actions → Create Image Flow**. Cette méthode est plus rapide, car elle préremplit automatiquement votre boutique et votre sélection de produits.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/WVP7KcJNwsPTLqIzLSQQwGsAoBCdxAdqLg.png)

**Étapes essentielles :**

1.  **Nommez votre flux :** donnez à votre flux un nom clair et descriptif (par ex. « Summer Dresses 2026 - Gemini Pro »).

2.  **Enregistrez votre progression :** toute modification du nom du flux ou de la sélection de la boutique doit être confirmée en cliquant sur le bouton **Submit** en bas de la page.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/XUm-rzBUqRa_mFIUflBlrrZlaYzDnRHgMw.png)

## 2. Configuration de l'IA (onglet 2)

Dans cet onglet, vous définissez l'« intelligence » et le rendu visuel de votre génération. Les paramètres varient considérablement selon le fournisseur choisi.

### OpenAI | ChatGPT

Lorsque vous sélectionnez le modèle **GPT Image 1**, vous avez accès aux paramètres suivants :

-   **Quality** : sélectionnez la qualité de génération souhaitée dans le menu déroulant (**Auto, High, Medium ou Low**).

-   **Image Size** : choisissez le format souhaité dans le menu déroulant (**Auto, Square, Landscape ou Portrait**). Remarque : une grille interactive pour GPT sera bientôt disponible.

-   **Image Count** : vous pouvez générer **entre 1 et 4 variantes** pour chaque produit à chaque exécution, ce qui offre plusieurs options pour la vérification manuelle.

-   **Limites techniques** : la taille maximale des fichiers en entrée pour GPT est de **50 Mo**.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/6Id3aPkXYEb0MEhxve0-510480uvgB2VrA.png)

### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/5NYWCV_4Lb3wxJ4MwkVOe96Mk4o5LU4NVg.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/oiDXnZOLp3NVu3waNL4ZREtyriHjNEvGgQ.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/eQxo8gJitU9Q5Zp7y3BE4FljSNrHhgqITw.png)Google | Gemini

Les modèles Gemini utilisent une grille interactive **Output format** pour un contrôle précis de vos résultats.

-   **Modèles disponibles** : choisissez entre **Gemini 2.5 Flash (Nano Banana)**, **Gemini 3 Pro (Nano Banana Pro)** et **Gemini 3.1 Flash (Nano Banana 2)**.

-   **Image Count** : pour tous les modèles Gemini, cette valeur est fixée à **1** (le champ est désactivé), car ils génèrent une image optimisée par requête.

-   **Limites techniques** : la taille maximale des fichiers en entrée est de **7 à 10 Mo**.

-   **Virtual Try-On** : un modèle spécialisé pour la mode.
**Remarque :** pour ce modèle, la grille de sortie est désactivée, car le système utilise automatiquement un format fixe et optimisé afin de garantir un rendu réaliste de la coupe des vêtements.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/Ydm8oxLyvSgZ7H_x5R1Uf0kb_u7RxmIXRw.png)

#### **Utiliser la grille Output format (Gemini uniquement)**

La grille vous permet de définir précisément la « forme » et la qualité de vos images générées :

1.  **Sélectionnez le ratio d'aspect (Aspect Ratio) :** dans la colonne de gauche, choisissez un ratio (par ex. **1:1 Square** pour les fiches produit, **3:4 Portrait** pour la mode, ou **16:9 Landscape** pour les bannières).

2.  **Sélectionnez la résolution (qualité) :** choisissez une colonne selon les capacités du modèle (**1K, 2K ou 4K**). Cliquez sur la cellule de résolution souhaitée (par ex. **1024x1024**).

3.  **Confirmation visuelle :** une coche verte apparaît dans la cellule sélectionnée. Consultez le panneau **Preview** à droite pour voir la forme du cadre, les dimensions exactes en pixels et les **Est. tokens** (coût estimé) de la génération.

4.  **Compatibilité :** les cellules marquées « Not supported » ne sont pas disponibles pour le modèle sélectionné.

**⚠️ Rappel :** veillez à cliquer sur le bouton **Save** après avoir sélectionné votre modèle et vos paramètres de sortie pour enregistrer ces préférences. Votre flux n'appliquera pas ces modifications tant qu'elles ne sont pas enregistrées.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/gkfM9PdTV36LEV-UL7SN9obfvD3AOKt7_Q.png)

## 3. Sélection du flux et prompt (onglet 3)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/H3B5OOvEGyTufKlUAsFd_uzfwAVXLbVcEA.png)

Cet onglet est le cœur de votre création de contenu. La première étape, et la plus critique, consiste à configurer vos **Presets**.

### **Section : Select Presets**

Les presets sont des images de référence visuelles qui servent d'instructions à l'IA. Ils établissent le style général, l'éclairage et le contexte pour **chaque** produit traité dans ce flux.

> **La règle d'or : l'universalité** Comme un seul jeu de presets est utilisé pour tout un groupe de produits (par ex. des centaines de robes ou toutes les chaussures), vos sélections doivent être **UNIVERSELLES**.
>
> -   _Exemple :_ si vous ajoutez un preset **Product** montrant un SKU bleu précis, l'IA pourrait tenter, par erreur, d'ajouter des détails bleus à tous les autres articles du flux. Ne choisissez que des références adaptées à l'ensemble de la catégorie de produits que vous traitez.
>

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FJlYttezkuyQFvSp16LDTSwFhOa5MFopmw.png)

#### 1\. Limites et capacité

En haut du bloc, vous verrez un compteur (par ex. **8/13**).

-   **Capacité maximale :** elle dépend du modèle d'IA choisi (par ex. jusqu'à **14** pour Gemini Pro et Gemini 3.1 Flash).

-   **Composition :** un emplacement est toujours réservé à l'image principale du produit en cours de traitement ; les emplacements restants sont destinés à vos presets universels.

#### **2\. Types de presets et recherche dans la bibliothèque**

Cliquez sur le bouton **"Add preset"** pour choisir un type. Utilisez le **Filter System** pour trouver rapidement ce dont vous avez besoin :

-   **Model :** définit la pose et l'apparence de la personne qui porte vos produits. Filtrez la bibliothèque par genre, âge ou origine ethnique pour trouver un look qui représente votre marque.

-   **Scene :** détermine l'environnement (par ex. Studio, Street, Interior). Utilisez les filtres de catégorie pour trouver un arrière-plan qui met en valeur l'ensemble de votre gamme de produits.

-   **Product (Additional Angles) :** aide l'IA à comprendre les articles complexes (par ex. la texture d'un tissu ou la semelle d'une chaussure).

-   **Search :** utilisez le filtre du catalogue (qui fonctionne exactement comme la section principale **Catalog**) pour rechercher par Title, SKU ou Category.

-   **Image Selection :** une fois que vous avez trouvé un produit représentatif, vous pouvez sélectionner **n'importe laquelle de ses images** (par ex. une vue de dos ou un gros plan). Il suffit de marquer l'image souhaitée avec une **coche verte** et d'enregistrer.

-   **Image :** utilisé pour les textures, les logos ou des éléments d'identité de marque spécifiques.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/UBYhntqBETFRErz_N1DJPPrNu8VI8_uh-A.png)

#### 3\. Importer vos propres ressources (+ Add)

Si vous importez votre propre image (pour les types Model, Scene ou Image) via le bouton **\+ Add**, vous devez attribuer des **Filter Values** à ce fichier.

-   En étiquetant votre fichier importé (par ex. en précisant le type de scène ou le genre du modèle), le système l'indexe. Vous pouvez ainsi retrouver et réutiliser instantanément vos ressources personnalisées dans vos futurs flux grâce à votre bibliothèque privée.

#### **4\. Suppression et finalisation**

-   Pour supprimer une référence, cliquez sur l'**icône de corbeille** de la carte du preset.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/i37UkovmY_SDzeW_4IjJEJGW6g7337yjEg.png)

-   **Important :** après avoir ajouté ou supprimé des presets, vous **DEVEZ** cliquer sur le bouton **Save** en bas de la page. L'assistant IA ne prendra pas en compte le jeu de références mis à jour tant que les modifications ne sont pas enregistrées.

### **Section : Filter & Select Products**

Cette section vous permet de définir précisément la liste des articles pour lesquels l'IA générera de nouvelles images.

> **❗ Important :** par défaut, lorsqu'un nouveau flux est créé, **TOUS** les produits de votre boutique sont inclus. Le nombre de produits affiché dans l'en-tête (**Filter & Select Products - XX**) est dynamique et se met à jour en temps réel lorsque vous ajustez vos paramètres.

#### 1\. Cartes produit et sélection de l'image

Le bloc affiche une grille de vos cartes produit.

-   **Icône « pile d'images » :** une icône dans le coin supérieur droit d'une carte indique que le produit possède plus d'une image.

-   **Choisir l'image de base :** cliquez sur une carte produit pour ouvrir la galerie en pop-up. Sélectionnez la photo la plus adaptée pour servir d'« image de base » (Base Image) à la génération (il s'agit de l'emplacement réservé envoyé à l'IA avec vos presets).

-   Par défaut, le système utilise la **première** image de votre catalogue.

-   Pour la modifier, il suffit de sélectionner une autre photo et de cliquer sur **Save** dans la pop-up.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/BsDYOnyD0cPg_dl35r0HT6YgOmKmffLBWQ.png)

#### 2\. Prérequis : les produits avec images

Les produits qui **n'ont aucune image** dans votre base de données sont automatiquement exclus de ce bloc. La génération par IA via les flux nécessite une base visuelle pour fonctionner correctement.

#### **3\. Utiliser les filtres (conditions)**

Pour sélectionner un groupe de produits spécifique (par ex. uniquement les « Dresses » d'une marque donnée), utilisez le bloc de filtres. La logique fonctionne de manière identique à la section principale **Catalog**. Seuls les produits répondant à ces critères restent dans le flux.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c_yGlTAqTpbYt9K8gCiBwMDPPLqEkUbqUQ.png)

#### **4\. Gestion manuelle de l'ensemble**

Vous pouvez affiner davantage votre liste après avoir appliqué les filtres à l'aide des commandes suivantes :

-   ✅ **Exclude selected :** cochez les cases des produits que vous souhaitez retirer de l'ensemble actuel, puis cliquez sur ce bouton.

-   ✅ **Include only selected :** cochez les produits que vous souhaitez conserver ; tous les autres seront retirés du flux.

-   **Bouton Refresh :** si vous faites une erreur lors de la sélection manuelle, cliquez sur **Refresh**. L'ensemble revient alors à l'état défini par vos filtres, ce qui annule toute action manuelle « Exclude » ou « Include ».
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ekGLld7o3QbwkYFOEmsqTUrlioP8xJlXtA.png)

#### **5\. Synchronisation dynamique du catalogue**

Les Image Flows suivent les mêmes règles que les Content Flows :

-   L'ensemble de produits est actualisé après chaque synchronisation quotidienne du pool.

-   Cela signifie que si vous ajoutez à votre boutique un nouveau produit correspondant aux filtres définis dans votre flux, il sera **automatiquement** ajouté à la file de génération le lendemain.

* * *

**⚠️ Rappel :** vérifiez toujours le nombre final de produits avant d'enregistrer votre flux, afin de ne pas avoir ciblé par erreur toute votre boutique au lieu d'une catégorie précise.

### Section : Prompt Editor

Le prompt est l'ensemble final d'instructions que vous envoyez à l'IA. Dans Image Flow, l'éditeur de prompt utilise la même logique avancée que Content Flow, ce qui permet de créer des descriptions visuelles de haute qualité à grande échelle.

#### **1\. Le principe d'universalité**

Comme ce prompt sera appliqué à chaque article de votre flux, il doit être **AU MAXIMUM UNIVERSEL**.

-   Évitez de décrire manuellement des couleurs ou des textures précises (par ex. n'écrivez pas « une robe en soie rouge »).

-   Utilisez plutôt des **Dynamic Attributes** pour que l'IA identifie correctement les caractéristiques propres à chaque produit.

#### **2\. Utiliser les Dynamic Attributes (glisser-déposer)**

À droite de l'éditeur, vous trouverez une liste d'**Attributes** disponibles (par ex. `Color`, `Material`, `Brand`, `Product Type`).

-   **Fonctionnement :** faites simplement glisser un attribut depuis la liste et déposez-le directement dans votre texte.

-   **Guide détaillé :** vous pouvez en savoir plus sur le fonctionnement et les capacités de l'éditeur par glisser-déposer ici ....

-   **Résultat :** lorsque le flux s'exécute, le système remplace automatiquement l'attribut (par ex. **Color**) par la valeur réelle de chaque fiche produit. Ainsi, une robe bleue est générée en bleu, et une veste en cuir est rendue avec une texture de cuir réaliste.

#### **3\. Modèles et réutilisation**

Pour accélérer votre travail, utilisez la fonctionnalité **Templates** située en bas de l'éditeur :

-   **Save as template :** une fois que vous avez rédigé un prompt parfait qui fonctionne bien pour une catégorie précise, enregistrez-le pour un usage ultérieur.

-   **Load :** importez rapidement des modèles existants dans de nouveaux flux pour garder une cohérence visuelle sur l'ensemble de votre boutique.

#### **4\. Attributes (if filled)**

Passez à l'onglet **Attributes (if filled)** pour voir exactement quelles données sont actuellement disponibles pour votre ensemble de produits sélectionné. Cela permet d'éviter l'utilisation de balises vides qui pourraient entraîner des résultats incohérents de l'IA.

* * *

**Astuce de pro :** un prompt universel de qualité doit décrire l'**environnement, l'éclairage et l'ambiance** définis par vos presets, tout en laissant les **détails propres à chaque produit** aux attributs dynamiques.

**⚠️ Dernière étape de l'onglet 3 :** après avoir finalisé votre prompt, cliquez sur le bouton **Save**. Cette action relie vos presets, votre sélection de produits et vos instructions de prompt en une seule automatisation fonctionnelle.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/9UcxVcuz2XFcQkCC4qSqfhHb7P0EZOtl3w.png)

## **4\. Automation (onglet 4)**

L'onglet **Automation** sert de « tour de contrôle » de votre flux. C'est ici que vous définissez le rythme de création de contenu, gérez les politiques de publication et lancez officiellement le processus de génération.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FYJ_qkFMdxjFIhXpgfz3GkHZs7AhNpgpwA.png)

### **1\. Limites de traitement quotidiennes**

-   **Amount of images to process per day** : ce champ détermine exactement combien de produits de votre ensemble sélectionné seront traités par l'IA toutes les 24 heures.

-   **Objectif** : cela vous permet de maîtriser votre consommation de tokens et garantit un déploiement régulier et maîtrisable de nouveaux contenus visuels pour votre boutique.

### **2\. Politique d'automatisation et de synchronisation**

-   **Stratégie de confirmation manuelle** : afin de maintenir une qualité élevée et de permettre un contrôle humain, **la synchronisation entièrement automatisée vers votre boutique est actuellement désactivée**.

-   **Workflow** : alors que la **génération** des images est automatique selon votre planning, la **synchronisation** (l'envoi) de ces images vers votre vitrine (Shopify, Magento, etc.) n'a lieu qu'après que vous les avez examinées et approuvées dans la **Batch List**.

### **3\. Activer et gérer le flux**

-   **Commutateur Active Flow** : situé dans le coin supérieur droit, ce commutateur active ou désactive l'ensemble de la logique d'automatisation de ce flux.

-   **La règle de l'enregistrement** : toute modification du statut **Active flow** - qu'il s'agisse de l'activer pour la première fois ou de désactiver un ancien flux - **DOIT** être confirmée en cliquant sur le bouton **Save**. Si vous n'enregistrez pas, le commutateur reviendra à son état précédent et vos modifications ne prendront pas effet.

### **4\. Déclencheurs d'exécution**

Une fois le flux actif, vous disposez de deux moyens pour lancer la génération :

-   **Plan & Close** :

-   Ce bouton planifie l'exécution automatique du flux.

-   **Délai** : la génération ne démarrera pas instantanément ; elle ne se lancera qu'après la prochaine **synchronisation quotidienne du pool de produits** (la mise à jour, à l'échelle du système, du catalogue de votre boutique).

-   **Run Now** :

-   Ce bouton apparaît comme option supplémentaire une fois le flux activé.

-   **Délai** : un clic sur **Run Now** contourne l'attente du pool quotidien et démarre la génération **immédiatement** pour la limite du jour.

-   _Remarque_ : une exécution manuelle compte dans votre quota quotidien. L'exécution planifiée suivante aura lieu le lendemain, après la synchronisation standard du pool.

### **5\. Logique de génération et efficacité**

-   **Principe de génération unique** : pour éviter les coûts en double et les données redondantes, l'IA génère une nouvelle image pour un produit donné **une seule fois** par flux.

-   Si une image a déjà été générée avec succès pour un produit dans ce flux, le système l'ignorera lors des cycles suivants.

-   **Régénérations** : si un résultat ne vous convient pas, vous pouvez déclencher manuellement une « Regeneration » depuis la section **Batch List**.

### **6\. Batch List et désactivation**

-   **Batch List** : cliquez sur ce bouton pour accéder à votre journal de production. Vous pouvez y suivre le statut de vos « batchs », consulter les résultats de l'IA et effectuer la synchronisation finale vers votre boutique.

-   **Désactivation** : si le flux n'est plus pertinent ou si vous devez mettre la production en pause, placez le commutateur **Active flow** sur « OFF » et cliquez sur **Save**. Cela arrête immédiatement la planification de toute génération supplémentaire.

**Dernier rappel** : assurez-vous toujours que votre **Daily Limit** est correctement réglée avant de cliquer sur **Save**. Une fois le flux actif, le système commencera à mettre les produits en file d'attente pour traitement selon vos paramètres.

## Batch List

La **Batch List** est votre centre de contrôle qualité et de modération. Chaque exécution d'un flux (automatique ou manuelle via le bouton _Run Now_) crée une nouvelle entrée de batch dans la liste de gauche.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/LIJVpWk3sHHmcIRCOQIvCJACgNLRBBIHRw.png)

### **1\. Navigation et suivi**

-   **Batch Sidebar** : le panneau de gauche affiche toutes les exécutions classées par date et par nombre de produits traités (`Count`).

-   **Progress Bar** : une échelle de couleurs en haut à droite donne un aperçu visuel du statut du batch : vert pour terminé, jaune pour en cours et gris pour en attente.

-   **Auto-Refresh** : vous pouvez activer la fonction `Refresh every X s` pour actualiser automatiquement la page pendant que l'IA traite les produits.

### **2\. Travailler avec les résultats (Image Completion List)**

Le tableau principal à droite affiche les résultats pour chaque produit :

-   **Thumbnail** : la photo d'origine du produit utilisée comme base.

-   **SKU** : l'identifiant du produit, avec un lien direct vers sa page dans l'interface d'administration de votre boutique.

-   **Results** : l'image générée. Le survol de la photo affiche des boutons d'action rapide :

    -   **View (icône d'œil)** : ouvre la fenêtre d'inspection détaillée.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/PExqbyx61jYHouA1Q6gS-Quy1Ea-rWQ9Iw.png)

    -   **Download (icône de flèche)** : enregistre le fichier directement sur votre appareil.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/a8L2H8t07YmOsC9exAXCkS0ORMRCAR9ANA.png)

    -   **Sync (icône de coche)** : envoie instantanément cette photo précise vers votre site web.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/JnEq8veB5PUb88yklirTqpIJncbmCmtUNw.png)

### 3\. Inspection et analyse (Completion View)

Un clic sur **View** ouvre une fenêtre de vérification finale :

-   **Panneau de gauche** : affiche le résultat final en haute qualité.

-   **Panneau de droite** : contient une colonne de toutes les données d'entrée. La première image est toujours la photo d'origine du produit, suivie d'un fil défilant de tous les presets utilisés (références de modèles, arrière-plans, etc.).

-   **Options de Completion** : l'icône d'« œil » de couleur turquoise dans la colonne `Actions` ouvre une pop-up avec les métadonnées techniques : le modèle d'IA utilisé, la résolution et le prompt final complet, avec les attributs dynamiques déjà renseignés.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/AgSQKU_4s6dTTRl2n8Uh7u8u__XcDx23FA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/fy3a6eQD7I0VTvO9a0bMe2FSSrBLMGe4_A.png)

### 4\. Ajustements et régénération

Si un résultat ne vous satisfait pas, utilisez l'icône **Regenerate** (flèche circulaire) :

-   **Modification** : vous pouvez modifier le texte du prompt ou ajouter de nouveaux attributs par glisser-déposer, spécifiquement pour ce SKU.

-   **Sans limite** : vous pouvez régénérer une image autant de fois que nécessaire jusqu'à obtenir le résultat souhaité.

-   **⚠️ Important** : une nouvelle génération **supprime définitivement** la version précédente de l'image.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/CEgHxH_y3eClyY2jxcXg1pAUpocdbFQwbQ.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ipoM6y0fgh9G7Rpm1mmCt7mWXvyDn2JikQ.png)

### 5\. Synchronisation avec la boutique

Comme l'automatisation complète est actuellement désactivée pour garantir la qualité, c'est vous qui décidez quand publier le contenu :

-   **Individuellement** : cliquez sur le bouton de coche directement sur l'image dans la colonne `Results`.

-   **Statut** : tant que l'image n'est pas publiée, la colonne `Synchronized At` affiche le statut `Wait for result confirmation`.

-   **⚠️ Avertissement** : la synchronisation est **irréversible -** elle ne peut pas être annulée une fois lancée.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c9uHBa_kSFHkR_YXg2rBCu-uOXq4xMWgVw.png)

### Bonne chance et bonne création !

Félicitations ! Vous êtes désormais parfaitement équipé pour maîtriser **Fozzels Image Flow**. C'est votre espace pour transformer vos idées en contenus visuels de haute qualité en quelques clics.

## Regardez les instructions détaillées dans la vidéo
