---
id: '103000367976'
title: 4.1.2. Création d'un nouveau Content Flow et paramètres initiaux.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Le Content Flow est au cœur de l'automatisation dans Fozzels. Il indique à
  Fozzels sur quels produits travailler, quels attributs remplir, quel modèle
  d'IA utiliser et quelles instructions lui donner.
keywords:
- flux de contenu
---

Le Content Flow est au cœur de l'automatisation dans Fozzels. Il indique à Fozzels sur quels produits travailler, quels attributs remplir, quel modèle d'IA utiliser et quelles instructions lui donner. Fozzels génère, met à jour et synchronise ensuite le contenu de vos produits.

Un même Flow peut remplir plusieurs attributs à la fois. Vous choisissez un **main attribute** (attribut principal) lors de la création du Flow, et vous pouvez en ajouter jusqu'à 12 autres par la suite. Tous sont générés ensemble dans une seule requête IA par produit.

Ce guide vous présente les quatre étapes d'un Flow à partir d'un exemple : un Flow qui rédige une **Description**, une **Short Description** et une **Meta Description** pour des produits femme qui ont des photos mais pas encore de description.

## 1\. Créer un nouveau Flow

1.  Dans le menu latéral, sous **AI Flows**, cliquez sur **Content Flows**. La liste des Flows s'ouvre.

2.  En haut de la page, vérifiez l'intégration, le site web et la boutique. Si vous en avez plusieurs, choisissez celui dont vous avez besoin dans la liste déroulante. Si vous n'en avez qu'un, il est déjà sélectionné.

3.  Cliquez sur **New Product Flow** dans le coin supérieur droit.
    ![Liste des Flows avec le bouton New Product Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-01-new-product-flow-button.png)

4.  Saisissez un **Name** pour le Flow, par exemple _My first content flow_.

5.  Sous **Entity Type**, choisissez **Product**. Pour générer du contenu pour des catégories, consultez [4.9.1 How to Create a Content Flow for Categories](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels/).
    ![Create New Product Flow : choix du type d'entité](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-02-entity-type.png)

6.  Sous **Attribute**, choisissez le **main attribute** que le Flow va remplir. Vous pouvez saisir du texte pour effectuer une recherche, par exemple _description_.
    ![Recherche de l'attribut principal](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-03-main-attribute-search.png)

7.  Cliquez sur **Save**.
    ![Formulaire du nouveau Flow prêt à être enregistré](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-04-new-flow-save.png)

:::tip
**Choisissez l'attribut le plus volumineux comme attribut principal**, par exemple la description complète. Dans les résultats, l'attribut principal dispose de l'éditeur complet avec un aperçu, tandis que les attributs supplémentaires s'affichent en dessous.
:::

:::note
**Vous générez des textes alternatifs d'images ?** Choisissez **Media Gallery** comme attribut. Consultez [4.3.2.a Alt Texts for Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/) et [4.3.2.b Alt Texts for NextChapter](/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/).
:::

## 2\. AI Configuration

Après l'enregistrement, Fozzels ouvre l'étape **AI Configuration**. À partir de là, le haut de la page affiche l'interrupteur **Active flow** et le nom du Flow. Cliquez sur le crayon à côté du nom pour renommer le Flow.

1.  Sous **AI Provider Selection**, choisissez le fournisseur : OpenAI | ChatGPT, Anthropic, xAI ou Google | Gemini.
    ![Choix du fournisseur d'IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-05-ai-provider.png)

2.  Sous **Model**, cliquez sur une tuile de modèle. Chaque tuile indique le prix par 1 000 tokens en entrée et en sortie, le prix d'une recherche web, si le modèle peut lire les images produit et s'il prend en charge la recherche web. Consultez [4.2.1 AI Configuration](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features/).

3.  Facultatif : cochez **Enable Web Search** si votre prompt demande à l'IA de rechercher des informations en ligne, par exemple sur la page de votre produit.

4.  Facultatif : sous **Image Usage**, définissez l'**Image count** (jusqu'à 5). L'IA analyse alors ce nombre d'images produit, dans l'ordre où elles proviennent de votre intégration. Plus il y a d'images, plus la consommation de tokens augmente. Laissez le champ vide pour n'utiliser que le texte du prompt.

5.  Laissez **Enable Image Resize** activé. Fozzels réduit alors les images de plus de 2 Mo qui ne sont pas au format JPEG ou dont la largeur ou la hauteur dépasse 2048 pixels. Consultez [4.2.2 Image Optimization](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/).
    ![Tuiles de modèles, recherche web, utilisation des images et redimensionnement des images](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-06-model-and-image-settings.png)

6.  Facultatif : choisissez un ou plusieurs **Text styles** (par exemple _Creative_, _Informative_) et **Text tones** (par exemple _Inspirational_).
    ![Styles et tons de texte](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-07-text-styles-tones.png)

7.  Cliquez sur **Save**, puis sur **Next step**.

:::note
**Image Resize entraîne un petit coût par image, mais le désactiver ne permet pas toujours de s'en dispenser.** Les images très volumineuses sont tout de même redimensionnées et facturées automatiquement, quel que soit le fournisseur d'IA. Sans cela, la génération échouerait avec une erreur, ou l'IA écrirait dans votre contenu quelque chose comme « I can't see the image ».
:::

Vous pouvez revenir à ces paramètres à tout moment, même une fois que le Flow a commencé à générer du contenu.

## 3\. Flow Selection & Prompt

### 3.1 Vérifier l'attribut principal et son format

En haut de la page, vous voyez l'attribut principal que vous avez choisi à l'étape 1.

Décidez si le résultat doit contenir du HTML. Cliquez sur le bouton en forme d'œil à côté de l'attribut. Dans la fenêtre **Edit attribute**, décochez **Allow HTML** si vous avez besoin de texte brut sans balisage, puis cliquez sur **Save**. Consultez [4.7.3 Allowed HTML Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation/).

![Fenêtre Edit attribute avec Allow HTML](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-08-edit-attribute-allow-html.png)

:::warning
Les autres champs de cette fenêtre sont des paramètres techniques de votre intégration. Ne les modifiez pas si vous ne savez pas à quoi ils servent. Si vous avez besoin d'aide, contactez le support.
:::

### 3.2 Sélectionner les produits

Utilisez **Filter & Select Products** pour choisir les produits sur lesquels le Flow travaille. Le nombre de produits sélectionnés s'affiche dans le titre du bloc et sur l'onglet de l'étape 3.

![Étape Flow Selection & Prompt : attribut principal et filtres](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-09-filter-select-products.png)

- Cliquez sur **Add condition** pour ajouter un filtre : choisissez un attribut, un opérateur et une valeur.
- Choisissez **All conditions** (toutes les conditions doivent être remplies) ou **Any condition** (une seule suffit).
- Cliquez sur **Add condition group** pour combiner les conditions de manière plus complexe.

**Exemple.** Pour rédiger des descriptions pour les produits femme qui ont des photos et pas encore de description :

| Attribute | Operator | Value |
| --- | --- | --- |
| Categories | is one of | Women |
| Media Gallery | has an image | Yes |
| Description | is empty | |

![Exemple de filtre : produits femme avec images et sans description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-10-filter-example.png)

:::warning
Si vous ne définissez aucune condition, le Flow utilise **tous** les produits de la boutique.
:::

:::tip
Pour éviter d'écraser du contenu existant, ajoutez un filtre tel que **Description is empty** pour l'attribut que vous générez.
:::

Pour connaître toutes les options de filtrage, consultez [Product Filtering for Content Generation](/data-import-and-quality/product-filtering-for-content-generation/).

#### Enregistrer vos filtres pour les réutiliser

Si vous prévoyez d'autres Flows pour les mêmes produits, par exemple des descriptions, des balises meta et des textes alternatifs, enregistrez les filtres une seule fois :

1.  Cliquez sur **Filter set → Save as new**.
    ![Menu Filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-11-filter-set-menu.png)

2.  Saisissez un nom, par exemple _Women - empty descriptions_, puis cliquez sur **Save**.
    ![Enregistrement d'un jeu de filtres](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-12-filter-set-save.png)

3.  Le jeu apparaît désormais dans le menu **Filter set**. Cliquez dessus pour l'appliquer, ou cliquez sur la corbeille pour le supprimer.
    ![Jeu de filtres enregistré dans le menu](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-13-filter-set-saved.png)

Les jeux de filtres enregistrés sont disponibles partout où vous filtrez des produits : dans les intégrations, dans le catalogue et dans les Flows. Vous pouvez également combiner un jeu enregistré avec des conditions supplémentaires.

### 3.3 Rédiger le prompt

Dans la section **Prompt**, rédigez les instructions destinées à l'IA et ajoutez-y des données produit :

- Saisissez `/` dans l'éditeur, ou cliquez sur un attribut du panneau **Attributes** ou faites-le glisser. Chaque attribut est ajouté sous forme de ligne conditionnelle : il est donc ignoré pour les produits où il est vide.
- Utilisez des **Snippets** tels que **Attribute list** pour ajouter en un clic un bloc prêt à l'emploi de données produit.
- Consultez la **Preview** à droite. Elle se met à jour au fil de votre saisie et affiche le prompt final pour un produit réel. Utilisez **&lt; &gt;** pour vérifier plusieurs produits.
- Pour réutiliser un prompt dans d'autres Flows, utilisez **Save as template** et **Load**.

![Éditeur de prompt avec la Preview en direct](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-14-prompt-editor-preview.png)

Pour le guide complet, consultez [4.3.2 Prompt Setup and Usage](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

:::warning
N'utilisez pas dans le prompt, comme données d'entrée, les attributs que vous générez. Par exemple, si le Flow rédige la Description, n'insérez pas l'attribut Description dans le prompt. Dans un Flow à plusieurs attributs, cela s'applique à chacun d'eux. Consultez [Recursion Detection](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation/).
:::

#### Vérifier les fonctionnalités désactivées

Lors de l'enregistrement, Fozzels vérifie si votre prompt a besoin d'une fonctionnalité désactivée dans ce Flow. Par exemple :

- le prompt demande à l'IA d'analyser les images du produit, mais aucun **Image count** n'est défini ;
- le prompt demande à l'IA de lire la page de votre produit, mais **Enable Web Search** est désactivé.

Un avertissement apparaît alors au-dessus des étapes. Cliquez sur **Open AI Configuration** pour activer la fonctionnalité, ou sur **Ask Jane** pour obtenir de l'aide de l'assistant IA.

![Avertissement concernant les fonctionnalités désactivées pour ce Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-15-disabled-features-warning.png)

### 3.4 Remplir davantage d'attributs dans le même Flow

Sous le prompt, dans **Additional attributes to fill**, vous pouvez ajouter jusqu'à 12 attributs supplémentaires. Tous les attributs du Flow sont générés ensemble dans une seule requête IA par produit : les données produit et les images ne sont donc envoyées qu'une seule fois.

1.  Choisissez un attribut dans la liste déroulante et cliquez sur **Add attribute**.
    ![Ajout d'un attribut supplémentaire](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-16-additional-attribute-add.png)

2.  Dans **Instruction for this attribute**, rédigez ce que l'IA doit produire. Le champ fonctionne comme l'éditeur de prompt principal, avec la Preview, le panneau Attributes et les Snippets. Lorsque l'instruction est renseignée, la ligne affiche **Prompt set**.
    ![Instruction pour Short Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-17-instruction-short-description.png)

3.  Cliquez sur l'œil dans la ligne pour ouvrir les paramètres de l'attribut. Pour les meta titles et les meta descriptions, décochez **Allow HTML**, car ils doivent être en texte brut.
    ![Instruction pour Meta Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-18-instruction-meta-description.png)

4.  Répétez l'opération pour chaque attribut, puis enregistrez.

:::tip
Donnez à chaque attribut une limite de longueur claire, par exemple _2 à 3 phrases, 35 à 60 mots_ pour une description courte ou _120 à 160 caractères, jamais plus de 160_ pour une meta description.
:::

### 3.5 Tester le prompt

Avant de lancer le Flow, testez ce que l'IA génère sur quelques produits.

1.  En bas de l'étape, cliquez sur **Save and Preview**.
    ![Bouton Save and Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-19-save-and-preview.png)

2.  Un tableau contenant vos produits sélectionnés s'ouvre. Cliquez sur une cellule de la colonne **Prompt** pour voir le prompt complet que l'IA recevra. Dans un Flow à plusieurs attributs, chaque attribut est listé sous son propre titre avec sa propre instruction. Cliquez sur **Copy to Clipboard** pour le copier.
    ![Tableau de génération de test](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-20-test-generation-table.png)
    ![Prompt complet envoyé à l'IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-21-test-generation-prompt.png)

3.  Cliquez sur **Generate Now** dans la ligne d'un produit. Le résultat s'ouvre dans une fenêtre, avec chaque attribut sous son propre titre. Cliquez sur **Show HTML** pour voir le balisage.
    ![Résultat de la génération de test](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-22-test-generation-result.png)

:::info
Une génération de test est **gratuite** et ne lance **pas** le Flow. Le résultat n'est pas enregistré : si vous souhaitez le conserver, cliquez sur **Copy to Clipboard** avant de fermer la fenêtre.
:::

Ajustez le prompt et testez à nouveau jusqu'à ce que le résultat vous convienne. Cliquez ensuite sur **Next step**.

## 4\. Automation

![Paramètres d'automatisation](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-23-automation-settings.png)

| Setting | Fonction |
| --- | --- |
| **Amount of products to create content for per day** | Nombre de produits que le Flow traite chaque jour, jusqu'à 500 |
| **Fully automatic** | Le contenu généré est confirmé et envoyé immédiatement à votre boutique, sans relecture manuelle. Le contenu signalé comme suspect reste soumis à relecture. Ne fonctionne que lorsque le Flow est actif |
| **Confidence threshold** | Facultatif, de 0,1 à 1,0. L'IA indique son degré de certitude pour chaque valeur. Les valeurs inférieures au seuil sont mises en attente de relecture au lieu d'être envoyées automatiquement. Plus le seuil est élevé, plus vous relisez de contenu. Laissez vide pour le désactiver. Utile en combinaison avec **Fully automatic** |
| **Automatically create a new text when an attribute of a product changes in your store** | Régénère le contenu lorsqu'un attribut utilisé dans le prompt change dans votre boutique |
| **Prevent double content generation with other Flows** | Empêche un produit de recevoir un nouveau contenu si un autre Flow l'a déjà généré. Choisissez **Inherit** (utiliser vos paramètres globaux), **Override** (définir une période pour ce Flow uniquement) ou **Turn Off**. Consultez [4.4.1 Prevent Overlapping Content Generation](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/) |
| **Workflows** | Actions supplémentaires facultatives pour ce Flow. Les Workflows s'exécutent de haut en bas ; faites-les glisser ou utilisez les flèches pour modifier l'ordre. Consultez [4.11.1 Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) |

:::tip
La plupart des utilisateurs commencent avec **Fully automatic** désactivé et relisent manuellement les premiers résultats.
:::

### Lancer le Flow

1.  Activez **Active flow** en haut de la page. Les boutons de lancement ne deviennent disponibles que pour un Flow actif.

2.  Choisissez comment démarrer :

| Option | Ce qui se passe |
| --- | --- |
| **Plan & Close** | Le Flow démarre le lendemain, après la mise à jour nocturne du catalogue. Il traite ensuite chaque jour l'**Amount of products per day** jusqu'à ce que tous les produits sélectionnés soient traités |
| **Run Now** (flèche à côté de **Plan & Close**) | Le Flow traite immédiatement les **10 premiers produits**. Il se poursuit ensuite selon le calendrier quotidien |

![Prévention des doublons, workflows et boutons de lancement](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-24-launch-buttons.png)

Un Flow actif prend également en compte les nouveaux produits qui correspondent à ses filtres après chaque mise à jour nocturne. Pour une liste de contrôle complète avant le lancement, consultez [4.1.2.a How to Set Up Automated AI Content Flows](/content-creation-flows/how-to-set-up-automated-ai-content-flows/).

## 5\. Vérifier les résultats dans la Batch List

1.  Cliquez sur **Batch List** en bas de n'importe quelle étape du Flow. Dans un Flow à plusieurs attributs, chaque attribut a sa propre colonne : vous voyez ainsi tous les résultats d'un produit sur une seule ligne.
    ![Batch List avec une colonne par attribut](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-25-batch-list.png)

2.  Cliquez sur une valeur générée pour ouvrir la fenêtre **Edit completion result** :
    - L'attribut principal se trouve en haut, avec **Enable Editor**, **Show HTML** et un aperçu.
    - Les autres attributs sont listés en dessous sous **Other attributes filled by this Flow**. Développez chacun d'eux pour le lire et le modifier. Les attributs de type select et multiselect se modifient à l'aide d'une liste déroulante.

    ![Fenêtre Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-26-edit-completion-result.png)

3.  Modifiez le texte si nécessaire et cliquez sur **Save**.

4.  Activez **Batch Confirmed**, puis cliquez sur **Save & Sync** pour envoyer le contenu à votre boutique. Tant que le résultat n'est pas confirmé, la synchronisation est désactivée. Dans un Flow **Fully automatic**, les résultats sont confirmés automatiquement.

Autres boutons de la fenêtre :

- **Regenerate** génère à nouveau le contenu. Il régénère toujours **tous** les attributs du Flow ensemble.
- **Show Revisions** affiche les versions précédentes. Consultez [4.8.1 Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/).
- **Copy to Clipboard** copie le contenu.

### Contenu suspect

Si un résultat ne passe pas les contrôles qualité de Fozzels, les parties problématiques sont surlignées en jaune et le résultat n'est pas synchronisé. Vous pouvez soit corriger manuellement les parties surlignées puis enregistrer, ce qui est gratuit, soit cliquer sur **Regenerate** pour générer à nouveau tous les attributs. Consultez [4.7.4 Suspicious Words & Phrases](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

Pour en savoir plus sur la relecture et la synchronisation des résultats, consultez [4.7.1 Tracking of the Generated Results](/content-creation-flows/tracking-of-the-generated-results-dashboard/) et [4.7.5 Editing Content in the Batch List](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/).
