---
id: '103000367983'
title: "4.3.2 Configuration et utilisation des prompts : le nouvel éditeur de prompts"
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  Comment rédiger le prompt d'un Flow dans le nouvel éditeur : insérer des
  attributs et des conditions, définir les options d'un attribut, utiliser les
  snippets, consulter la Preview en direct et obtenir de l'aide de l'AI Prompt
  Assistant.
---

Le champ Prompt est l'endroit où vous rédigez les instructions que Fozzels envoie à l'IA pour chaque produit. Le nouvel éditeur vous permet de construire le prompt, d'insérer des données produit et des conditions, et de vérifier le résultat sur un produit réel, le tout sur un seul écran.

## Nouveautés

Si vous utilisiez l'ancien éditeur par glisser-déposer, voici les principaux changements :

| Domaine | Avant | Maintenant |
| --- | --- | --- |
| Insertion d'attributs | Clic ou glisser depuis la liste | Clic, glisser, ou saisie de `/` dans l'éditeur. Chaque attribut est inséré sous forme de ligne de condition prête à l'emploi |
| Conditions | Une liste séparée « Attributes (if filled) » | Chaque condition est un bloc pouvant contenir du texte, des attributs et d'autres conditions (imbrication) |
| Options d'attribut | Aucune | Par attribut : afficher uniquement s'il est renseigné, masquer le libellé, valeur de repli |
| Taux de remplissage des données | Infobulle avec un pourcentage | Soulignement coloré sur chaque attribut, plus une infobulle avec le taux de remplissage et un exemple de valeur |
| Preview | Uniquement après Save & Preview | Aperçu en direct à côté de l'éditeur, synchronisé avec votre curseur et votre défilement |
| Contenu réutilisable | Uniquement des modèles de prompt complets | Snippets : Attribute list, Category list, Integration connector et vos propres blocs réutilisables |
| Attributs par Flow | Un seul | L'attribut principal plus jusqu'à 12 attributs supplémentaires |
| Outils de l'éditeur | Aucun | Annuler/rétablir, taille du texte, recherche, plein écran, affichage/masquage de la Preview et des snippets |

**Passer de l'ancien éditeur.** Vous n'avez rien à migrer. Les Flows existants continuent de fonctionner, et tous les prompts et modèles enregistrés ont été convertis automatiquement au nouveau format. Vous pouvez également coller un prompt rédigé dans l'ancien format : l'éditeur le convertira.

## 1. Place du prompt dans un Flow

Vous rédigez le prompt à l'étape 3 d'un Flow, **Flow Selection & Prompt**. À ce stade, le Flow connaît déjà la boutique, l'attribut cible et les paramètres d'IA.

1. **New Flow.** Accédez à **Flows → Create**.

   ![Page Flows avec le bouton Create](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/01-flows-page-with-the-create-button.png)

   Sélectionnez l'intégration, le site web et la boutique (langue), saisissez un nom et choisissez le type d'entité : Product ou Category.

   ![Create New Product Flow : choix du type d'entité](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/02-create-flow-choosing-the-entity-type.png)

   Choisissez ensuite l'attribut pour lequel générer du contenu et cliquez sur **Save**.

   ![Create New Product Flow : choix de l'attribut](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/03-create-flow-choosing-the-attribute.png)

2. **AI Configuration.** Choisissez le modèle d'IA et les fonctionnalités optionnelles telles que la recherche web, l'utilisation d'images et le redimensionnement d'images. Voir [4.2.1 AI Configuration](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features).

3. **Flow Selection & Prompt.** Utilisez **Filter & Select Products** pour choisir les produits pour lesquels le Flow générera du contenu. Si vous ne définissez aucune condition, tous les produits sont utilisés. Rédigez ensuite le prompt dans la section **Prompt** ci-dessous.

   ![Étape Flow Selection & Prompt avec un éditeur de prompt vide](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/04-flow-selection-prompt-step-with-an.png)

L'ensemble de produits que vous sélectionnez ici est aussi celui qu'utilise la Preview (voir la section 8).

### Un Flow, plusieurs attributs

Un Flow peut renseigner son attribut principal plus jusqu'à 12 attributs supplémentaires, soit 13 au total. Tous sont générés ensemble dans une seule requête d'IA par produit. Les données produit et les images ne sont envoyées qu'une seule fois, ce qui rend la génération plus rapide et moins consommatrice de tokens que des Flows distincts.

Pour ajouter un attribut :

1. Accédez à **Additional attributes to fill** à l'étape 3. Le compteur à côté du titre indique combien d'attributs vous avez ajoutés, par exemple **0 / 12**.
2. Choisissez un attribut dans la liste **Choose attribute**.
3. Cliquez sur **Add attribute**.

![Choix d'un attribut supplémentaire](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/05-choosing-an-additional-attribute.png)

L'attribut apparaît sous la forme d'une ligne dédiée avec son nom et son type, par exemple **SEO Description · Text**. Tant que vous n'avez pas rédigé d'instruction, la ligne indique _No instruction yet_.

Dans **Instruction for this attribute**, rédigez ce que l'IA doit produire pour cet attribut. L'instruction est combinée avec le prompt principal en une seule requête. Le champ fonctionne comme l'éditeur principal : saisissez `/` ou utilisez le panneau Attributes à côté pour ajouter des attributs et des conditions.

![Ligne d'attribut supplémentaire avec son champ d'instruction](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/06-additional-attribute-row-with-its-instruction.png)

- Utilisez l'icône de corbeille pour supprimer l'attribut, et la flèche pour réduire ou développer la ligne.
- Le champ d'instruction ne dispose pas de panneau Snippets pour le moment. Les snippets qui y sont utilisés fonctionnent toutefois lors de la génération.
- Les résultats restent vérifiables et publiables attribut par attribut.

Pour plus de détails, cliquez sur **User Guide: How multi-attribute flows work** dans le coin supérieur droit de cette section.

## 2. Disposition de la section Prompt

La section Prompt comprend quatre zones :

| Zone | Position | À quoi elle sert |
| --- | --- | --- |
| Editor | En haut à gauche | Rédiger le prompt et placer les attributs, conditions et snippets |
| Preview | En haut à droite | Voir le prompt final pour un produit réel |
| Attributes | En bas à gauche | Tous les attributs de la boutique sélectionnée, avec leur taux de remplissage |
| Snippets | En bas à droite | Blocs réutilisables tels que Attribute list et Category list |

Le lien **User Guide: Prompt Setup And Usage** dans le coin supérieur droit ouvre cet article.

### Barre d'outils de l'éditeur

| Bouton | Ce qu'il fait |
| --- | --- |
| Undo / Redo | Revenir en arrière ou avancer dans vos modifications. Undo restaure aussi un bloc supprimé par erreur |
| A / A | Réduire ou agrandir le texte de l'éditeur. Cela ne modifie que l'affichage, pas le prompt |
| Search in prompt | Rechercher des mots ou des attributs dans un long prompt |
| Preview (œil) | Afficher ou masquer le panneau Preview |
| Snippets (document) | Afficher ou masquer le panneau Snippets |
| Maximize | Ouvrir l'éditeur et le panneau latéral en plein écran |

![Bouton Preview dans la barre d'outils](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/07-preview-button-in-the-toolbar.png)

Lorsque la Preview est masquée, le panneau Attributes se déplace vers la droite et l'éditeur dispose de plus d'espace.

![Disposition avec la Preview masquée](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/08-layout-with-the-preview-hidden.png)

![Bouton Maximize](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/09-maximize-button.png)

![Bouton Snippets et panneau Snippets](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/10-snippets-button-and-the-snippets-panel.png)

Le prompt lui-même n'a aucune mise en forme : pas de titres, de listes ni de gras. Pour les obtenir dans le contenu généré, demandez-les par écrit. Vous pouvez nommer des balises HTML telles que `<h2>`, `<ul>` et `<strong>` dans l'instruction, par exemple _Commencez par un titre `<h2>` qui nomme le produit_. L'éditeur les affiche sous forme de texte brut. Les balises que le résultat doit contenir doivent être autorisées, voir [4.7.3 Allowed HTML Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation).

## 3. Ajout d'attributs

Un attribut est un espace réservé pour une donnée produit, comme le titre, le type de produit ou la matière. Dans l'éditeur, il apparaît sous forme de pastille verte. Dans le prompt final, il est remplacé par la valeur du produit.

Vous pouvez ajouter un attribut de trois façons :

- **Saisissez `/`** dans l'éditeur. Une liste s'ouvre avec le nom et la clé technique de chaque attribut.

  ![Menu slash avec la liste des attributs](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/11-slash-menu-with-the-list-of.png)

  Continuez à saisir pour filtrer la liste, par exemple `/seo`, puis choisissez l'attribut.

  ![Menu slash filtré par « seo »](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/12-slash-menu-filtered-by-seo.png)

- **Cliquez** sur un attribut dans le panneau Attributes. Il est inséré à l'emplacement du curseur.
- **Faites glisser** un attribut depuis le panneau Attributes et déposez-le à l'endroit voulu. Une ligne indique où il sera placé.

  ![Ligne de dépôt pendant le glissement d'un attribut](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/13-drop-line-while-dragging-an-attribute.png)

L'attribut inséré arrive sous forme de ligne de condition avec un libellé :

![Une ligne de condition pour SEO Title, à côté de la Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/14-a-condition-line-for-seo-title.png)

### Ligne de condition ou attribut en ligne

L'éditeur garde le prompt structuré : chaque condition occupe sa propre ligne. L'endroit où un attribut se retrouve détermine donc ce qu'il devient.

| Où vous l'insérez | Résultat | Exemple |
| --- | --- | --- |
| Au début d'une ligne (avec `/`, un clic, ou un dépôt avant le libellé) | Une **ligne de condition** : un bloc avec un libellé et l'attribut | `if SEO Title` → _SEO Title: [SEO Title]_ |
| À l'intérieur d'une ligne, après le libellé (dépôt entre le libellé et un attribut) | Un **attribut en ligne** sans condition propre | _Media Gallery: Handle: [Handle] [Media Gallery]_ |

![Ligne de condition imbriquée (Status) et attribut en ligne (Handle)](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/15-nested-condition-line-status-and-an.png)

Le libellé, tel que _SEO Title:_, est ajouté pour vous. Il s'agit de texte normal, vous pouvez donc le modifier.

Vous pouvez utiliser le même attribut autant de fois que nécessaire.

## 4. Conditions (blocs if)

Une condition est un bloc en pointillés avec un en-tête jaune, par exemple **if SEO Title**. Tout ce qui se trouve dans le bloc n'est ajouté au prompt que si le produit possède une valeur pour cet attribut. Lorsque la valeur est vide, tout le bloc est ignoré.

Cela garde le prompt de chaque produit propre. Une ligne comme _SEO Title:_ n'apparaît jamais sans valeur derrière elle.

**Exemple.** Le prompt contient `if SEO Title`, `if Created At` et `if Tags` (imbriqué dans `if Created At`). Le produit d'exemple n'a pas de SEO Title, donc la Preview n'affiche que les lignes Tags et Created At.

![Conditions imbriquées et Preview correspondante](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/16-nested-conditions-and-the-matching-preview.png)

### Ce que vous pouvez placer dans une condition

- Du texte libre, avant ou après l'attribut
- D'autres attributs, sous forme d'attributs en ligne
- D'autres conditions (imbrication). Par exemple, `if Tags` dans `if Created At` signifie que la ligne Tags n'apparaît que lorsque les deux valeurs sont renseignées
- Des snippets (voir la section 7)

![Glisser une condition dans une autre condition](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/17-dragging-a-condition-into-another-condition.png)

### Travailler avec les conditions

| Action | Comment |
| --- | --- |
| Déplacer un bloc | Faites-le glisser par la poignée ⠿ située à sa gauche. Vous pouvez le déposer entre d'autres lignes ou à l'intérieur d'une autre condition. Les lignes sans condition ont la même poignée |
| Supprimer uniquement la condition | Cliquez sur l'engrenage de l'en-tête jaune et sélectionnez **Always show (remove condition)**. Le contenu reste et est toujours inclus |
| Supprimer le bloc | Cliquez sur le **x** de l'en-tête jaune (**Delete block**) |
| Vérifier le produit d'exemple | Survolez l'en-tête jaune. Si la condition n'est pas remplie pour le produit de la Preview, vous voyez **No output for this sample product** |

![Always show (remove condition) dans le menu engrenage](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/18-always-show-remove-condition-in-the.png)

![Delete block sur l'en-tête jaune](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/19-delete-block-on-the-yellow-header.png)

![No output for this sample product](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/20-no-output-for-this-sample-product.png)

:::warning

**Delete block** supprime le bloc entier avec tout son contenu, y compris les conditions imbriquées. Pour conserver le contenu, utilisez plutôt **Always show**. Si vous supprimez un bloc par erreur, cliquez sur **Undo**.

:::

## 5. Options d'attribut

Cliquez sur la petite flèche d'une pastille verte d'attribut pour ouvrir ses options.

![Menu des options d'attribut](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/21-attribute-options-menu.png)

| Option | Ce qu'elle fait |
| --- | --- |
| **Only show when filled** | Activée (cochée) : l'attribut fonctionne comme une condition et sa ligne est ignorée lorsque la valeur est vide. Désactivée : c'est un attribut simple, toujours inclus |
| **Hide label** | N'envoie que la valeur à l'IA, sans le libellé qui la précède |
| **Fallback value when empty** | Texte utilisé à la place de la valeur lorsque le produit n'a pas de valeur pour cet attribut |
| **Remove** | Retire l'attribut du prompt |

Pour un attribut en ligne, **Only show when filled** est désactivée. Cochez-la pour transformer l'attribut en condition.

![Options d'un attribut en ligne, avec Only show when filled désactivée](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/22-options-of-an-inline-attribute-with.png)

### Utiliser une valeur de repli

Une valeur de repli ne fonctionne que lorsque **Only show when filled** est désactivée. Lorsque la condition est activée, une ligne vide est de toute façon ignorée, donc la valeur de repli est ignorée même si vous la renseignez.

**Exemple.** Vous désactivez **Only show when filled** pour SEO Description et saisissez une valeur de repli. Pour un produit sans description SEO, la Preview affiche la valeur de repli à la place. La valeur de repli est mise en évidence dans la Preview, ce qui permet de la distinguer des vraies données produit.

![Valeur de repli affichée dans la Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/23-fallback-value-shown-in-the-preview.png)

### Choisir entre une condition et une valeur de repli

- Utilisez une **condition** lorsque la ligne est inutile sans valeur, par exemple une matière ou une consigne d'entretien.
- Utilisez une **valeur de repli** lorsque l'IA doit toujours recevoir cette ligne, par exemple _Brand: unknown_.
- N'utilisez ni l'une ni l'autre pour les attributs que tous les produits possèdent, comme le titre du produit.

:::note

**Remove** ne supprime que la pastille de l'attribut. Le libellé, tel que _Title:_, reste sous forme de texte. Supprimez-le vous-même, sinon l'IA recevra un libellé sans valeur.

:::

## 6. Le panneau Attributes

Le panneau Attributes liste tous les attributs de la boutique sélectionnée. Les attributs déjà présents dans le prompt sont en vert plein et affichent un compteur : **SEO Title 1** signifie qu'il est utilisé une fois.

![Attributs utilisés avec compteurs](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/24-used-attributes-with-counters.png)

### Taux de remplissage (densité des données)

Le taux de remplissage est la part des produits de l'intégration qui ont une valeur pour un attribut. Le panneau l'indique de trois façons :

- **Couleur du soulignement.** Le vert signifie que l'attribut est renseigné pour plus de 50 % des produits. Le jaune signifie moins de 50 %.
- **Intensité du soulignement.** Le trait s'accentue à mesure que le taux de remplissage passe de 1 % à 100 %.
- **Infobulle.** Survolez un attribut pour voir son nom, sa clé technique, son taux de remplissage exact et un exemple de valeur issu d'un produit réel.

![Infobulle d'attribut avec taux de remplissage et exemple de valeur](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/25-attribute-tooltip-with-fill-rate-and.png)

Les attributs dont le taux de remplissage est de 0 % sont masqués. Cliquez sur **Show N without data** pour les afficher.

:::tip

Pour les attributs soulignés en jaune, laissez **Only show when filled** activée ou définissez une valeur de repli. Ainsi, les produits sans cette donnée obtiennent tout de même un prompt propre.

:::

### Trouver des attributs

- **Search attribute.** Saisissez une partie d'un nom pour filtrer la liste.
- **Sort By.** Triez par **Most filled** ou par **Name**. Utilisez les flèches pour passer de l'ordre croissant à l'ordre décroissant.

![Options de Sort By](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/26-sort-by-options.png)

## 7. Snippets

Les snippets sont des blocs de contenu de prompt réutilisables. Ils apparaissent sous forme de pastilles violettes dans le panneau Snippets. Cliquez sur un snippet pour l'insérer dans le prompt. Un snippet déjà présent dans le prompt est affiché plein dans le panneau.

Il en existe deux types :

- **Les snippets système**, tels que Attribute list, Category list et Integration connector. Fozzels les met à disposition de tous. Vous ne pouvez ni les modifier ni les supprimer.
- **Vos propres snippets**, créés avec le bouton **+**. Vous pouvez les modifier (crayon) ou les supprimer (corbeille).

### Attribute list

Insère tous les attributs renseignés du produit sous forme de lignes _Label: value_. Les attributs vides sont omis.

![Bloc Attribute list dans l'éditeur](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/27-attribute-list-block-in-the-editor.png)

![Attribute list rendu dans la Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/28-attribute-list-rendered-in-the-preview.png)

C'est un moyen rapide de fournir toutes les données produit à l'IA. Mais il inclut tout, y compris des champs techniques tels que des identifiants, des URL d'administration, des dates et des valeurs brutes comme `{"value":159.0,"unit":"CENTIMETERS"}`. Pour de meilleurs textes, choisissez vous-même les attributs clés et réservez Attribute list aux tests rapides. Ne l'insérez qu'une seule fois par prompt, sinon les mêmes données sont envoyées deux fois.

### Category list

Insère des lignes d'attributs pour les catégories auxquelles le produit appartient. Dans Shopify, ce sont les collections ; dans d'autres intégrations, il peut s'agir d'un autre lien. Le bloc est vide à l'insertion et affiche un en-tête tel que **Category list · Collections · 10**.

![Bloc Category list vide](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/29-empty-category-list-block.png)

Cliquez sur l'engrenage du bloc pour le configurer :

![Paramètres de Category list](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/30-category-list-settings.png)

- **Edit template.** Choisissez les attributs de catégorie à inclure, tels que Name, URL, Level ou Position. Vous construisez la liste de la même manière qu'un snippet.
- **Resolve through.** Indique quel lien du produit est utilisé pour trouver les catégories, par exemple Collections.
- **Number of categories.** Le nombre maximal de catégories dans la liste. Un produit peut appartenir à de nombreuses catégories, y compris techniques ; une limite garde donc le prompt court et ciblé.

![Modèle Category list avec attributs sélectionnés](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/31-category-list-template-with-selected-attributes.png)

Les données de catégorie aident l'IA à mieux comprendre le produit. Avec Name et URL, vous pouvez aussi demander des liens internes vers des catégories associées, ce qui est utile pour le SEO.

### Integration connector

Récupère les données du même produit depuis une autre boutique de votre compte. Par exemple, un Flow Magento peut utiliser des notes fournisseur, la composition des matières ou des consignes d'entretien qui n'existent que dans votre flux CSV.

- Disponible uniquement dans les Flows de produits, et uniquement si votre compte possède une deuxième boutique.
- Si le produit n'a pas d'équivalent dans cette boutique, le bloc ne génère rien, et le prompt reste donc propre.

Pour le configurer :

1. Cliquez sur **Integration connector** dans le panneau Snippets. La fenêtre **Integration connector** s'ouvre.

   ![Fenêtre Integration connector](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/32-integration-connector-window.png)

2. Sous **Connected store**, choisissez l'intégration, le site web et la boutique dont vous souhaitez récupérer les données.

   ![Choix de la boutique connectée](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/33-choosing-the-connected-store.png)

3. Cliquez sur **Save**.

   ![Boutique connectée sélectionnée](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/34-connected-store-selected.png)

4. La fenêtre **Integration connector template** s'ouvre avec les attributs de la boutique connectée. Ajoutez les attributs dont vous avez besoin, de la même manière que dans un snippet : chacun devient une ligne de condition.

   ![Integration connector template](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/35-integration-connector-template.png)

5. Cliquez sur **Save**. Le bloc est ajouté à votre prompt.

   ![Integration connector template avec attributs](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/36-integration-connector-template-with-attributes.png)

:::warning

Fozzels retrouve le produit dans la boutique connectée grâce à son identifiant, tel que le SKU ou l'ID. Les identifiants doivent correspondre dans les deux boutiques. Dans le cas contraire, le produit n'a pas d'équivalent dans l'autre boutique et le bloc reste vide dans la Preview.

:::

### Créer votre propre snippet

1. Cliquez sur **+** dans le panneau Snippets. La fenêtre **New snippet** s'ouvre.

   ![Fenêtre New snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/37-new-snippet-window.png)

2. Saisissez un **Name**.
3. Cliquez sur un type de départ, par exemple **Attribute list**. Il apparaît dans l'éditeur comme espace réservé.
4. Cliquez sur les attributs dont vous avez besoin. Chacun est ajouté sous forme de ligne de condition, et l'espace réservé est remplacé par votre propre liste.
5. Avant d'ajouter l'attribut suivant, placez le curseur sur une nouvelle ligne. Une nouvelle ligne n'est pas créée automatiquement.

   ![Nouveau snippet avec une liste d'attributs](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/38-new-snippet-with-a-list-of.png)

6. Cliquez sur **Save**. Le snippet apparaît dans le panneau Snippets.

   ![Snippet créé](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/39-snippet-created.png)

Vos snippets sont disponibles dans tous les Flows de la même intégration, pour toutes ses boutiques.

### Modifier un snippet dans le prompt

Dans le prompt, votre snippet est un bloc violet unique portant son nom.

![Snippet personnalisé dans le prompt et dans la Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/40-custom-snippet-in-the-prompt-and.png)

Cliquez sur l'engrenage du snippet :

![Menu engrenage du snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/41-snippet-gear-menu.png)

| Option | Ce qui se passe |
| --- | --- |
| **Edit snippet (all prompts)** | Ouvre le snippet pour modification. Les changements s'appliquent à chaque prompt qui l'utilise, dans tous les Flows et toutes les boutiques de l'intégration |
| **Convert to inline text (this prompt only)** | Transforme le snippet en lignes de condition normales dans ce prompt. Vous pouvez ensuite modifier, déplacer ou supprimer chaque ligne. Les modifications ultérieures du snippet n'affectent plus ce prompt |

![Snippet converti en lignes de condition en ligne](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/42-snippet-converted-to-inline-condition-lines.png)

Conservez le snippet lorsque la même liste doit rester identique et être mise à jour à un seul endroit. Convertissez-le lorsqu'un prompt a besoin de sa propre version.

:::note

Les attributs contenus dans un snippet ne sont pas comptabilisés dans les compteurs du panneau Attributes.

:::

### Lorsqu'un snippet est supprimé

Si un snippet utilisé dans votre prompt est supprimé, son bloc reste dans le prompt mais devient estompé et n'affiche qu'un numéro à la place du nom, par exemple **#11**. Il ne génère rien et ne perturbe donc pas la génération. Supprimez le bloc avec son **x**, ou remplacez-le par un autre snippet.

![Bloc estompé d'un snippet supprimé](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/43-faded-block-of-a-deleted-snippet.png)

## 8. Preview

La Preview affiche le prompt final pour un produit de l'ensemble sélectionné, dans la langue de la boutique sélectionnée. Les attributs sont remplacés par les valeurs du produit, et les conditions sans valeur sont omises. C'est exactement ce que reçoit l'IA.

### En-tête de la Preview

- **Nom du produit.** Cliquez dessus pour ouvrir la page du produit dans Fozzels, avec toutes ses valeurs d'attributs et ses images.
- **Icône de lien.** Ouvre le produit sur votre site web.
- **SKU ou ID.** Celui que vous voyez dépend de l'intégration.
- **Change sample (< >).** Passer au produit précédent ou suivant, dans l'ordre du catalogue.

![Boutons Change sample dans l'en-tête de la Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/44-change-sample-buttons-in-the-preview.png)

### Comportement de la Preview

- **En direct.** Chaque modification dans l'éditeur apparaît immédiatement. Vous n'avez pas besoin d'actualiser.
- **En lecture seule.** Vous ne pouvez pas saisir de texte dans la Preview. Modifiez le prompt dans l'éditeur.
- **Synchronisée.** Survolez un attribut ou une condition dans l'éditeur et la ligne correspondante de la Preview est mise en évidence. La Preview défile également en même temps que l'éditeur, afin que vous ne vous perdiez pas dans un long prompt.

![Le survol d'un attribut met en évidence sa ligne dans la Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/45-hovering-an-attribute-highlights-its-line.png)

:::tip

Passez d'un échantillon à l'autre, en particulier sur des produits qui contiennent peu de données. Cela vous montre comment le prompt se lit lorsque certaines conditions sont ignorées.

:::

### L'instruction de clôture

À la fin de chaque Preview, vous voyez : _Do not provide any commentary, word count, information or comments about the generated text in the returned text._ Fozzels ajoute automatiquement cette ligne à chaque prompt, afin que l'IA ne renvoie que le contenu lui-même. Vous n'avez pas besoin de l'ajouter vous-même.

## 9. Modèles (Templates)

Les modèles vous permettent de réutiliser un prompt complet dans d'autres Flows. Contrairement à un snippet, un modèle est le prompt entier. Les commandes se trouvent en bas de l'éditeur.

- **Load** remplace le prompt actuel par un modèle enregistré. Si le prompt n'est pas vide, une confirmation vous est demandée au préalable, afin que vous ne perdiez pas votre travail par accident.
- **Save as template** enregistre le prompt actuel, y compris les attributs, les conditions et les snippets, sous forme de nouveau modèle.

![Confirmation avant qu'un modèle ne remplace le prompt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/46-confirmation-before-a-template-replaces-the.png)

## 10. Localisation des noms d'attributs

Les noms d'attributs suivent la langue de la boutique sélectionnée, par exemple `product_name` pour en-US et `product_naam` pour nl-NL.

- Si un attribut n'a pas de nom pour une langue, le nom de la boutique par défaut (marquée d'un `*`) est utilisé.
- Pour modifier un nom localisé, accédez à **Integration settings → Attribute → Locale**.

Les prompts relient les attributs par leur clé technique unique, et non par leur nom. Renommer un attribut ou changer la langue de la boutique ne casse pas votre prompt.

## 11. Modifier le prompt avec l'AI Prompt Assistant

L'AI Prompt Assistant peut rédiger, étendre ou réécrire votre prompt à votre place. Il lit le prompt actuel, y compris ses conditions, snippets et blocs.

- Lorsque vous lui demandez d'**ajouter** quelque chose, il ne répond qu'avec la nouvelle partie. Par exemple, si votre prompt demande une description SEO et que vous demandez « add slug », il ne suggère que le nouvel élément, pour **Add** ou **At cursor**.
- Lorsque vous lui demandez de **modifier** le prompt (l'améliorer ou le réécrire, supprimer ou modifier une ligne, ou ajouter une ligne au début ou au milieu), il répond avec le prompt complet, pour **Replace all**. Tout ce que vous ne lui avez pas demandé de modifier est conservé tel quel, y compris les snippets, conditions, listes d'attributs, listes de catégories et Integration connectors.
- Pour obtenir des titres, des listes ou du HTML dans le contenu généré, il suffit de le demander, par exemple _commence la description par un titre h2 avec le nom du produit_. L'assistant l'ajoute sous forme d'instruction écrite, car le prompt lui-même ne porte aucune mise en forme.

Pour l'ouvrir, cliquez sur le bouton de discussion bleu dans le coin inférieur droit de la page. Le panneau **AI Assistant** s'ouvre à côté de l'éditeur. Saisissez votre demande, par exemple _Help me create a prompt for Description. Use filled attributes._, puis appuyez sur **Enter** pour l'envoyer. Utilisez **Shift+Enter** pour un retour à la ligne.

L'assistant connaît les attributs de votre intégration et leurs taux de remplissage. Il construit le prompt avec des attributs et des conditions, et explique ses choix, par exemple pourquoi un attribut est encadré par une condition.

![AI Assistant avec un prompt suggéré](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/47-ai-assistant-with-a-suggested-prompt.png)

### Placer une suggestion

Chaque suggestion apparaît dans la discussion sous forme de bloc, affiché de la même manière que dans l'éditeur, avec les boutons suivants :

| Bouton | Ce qu'il fait |
| --- | --- |
| Copy | Copie la suggestion pour que vous puissiez la coller vous-même |
| Add | Ajoute la suggestion à la fin du prompt |
| At cursor | Insère la suggestion à l'emplacement du curseur dans l'éditeur |
| Replace all | Remplace tout le prompt par la suggestion |

Après avoir cliqué sur un bouton, celui-ci devient vert et est désactivé un court instant, afin que le même texte ne soit pas inséré deux fois. Les boutons de placement n'apparaissent que lorsqu'un éditeur de prompt est ouvert sur la page. Si une suggestion ne correspond pas au format de l'éditeur, seul **Copy** est affiché.

### Choisir le prompt à modifier

Lorsqu'une page comporte plusieurs prompts, une liste déroulante au-dessus du champ de saisie du chat permet de choisir celui sur lequel l'assistant travaille.

- Une suggestion va toujours vers le prompt qui était sélectionné au moment où vous avez posé la question, même si vous modifiez ensuite la liste déroulante.
- Dans une conversation restaurée d'une session précédente, les suggestions vont vers le prompt principal du Flow.
- Si le prompt auquel appartient une suggestion a été supprimé, la suggestion est marquée comme indisponible et n'est écrite nulle part ailleurs.

## Articles associés

- [4.3.3 Writing Effective Prompts (Recommendations)](/content-creation-flows/writing-effective-prompts-recommendations)
- [4.7.3 Allowed HTML Tags for AI Text Generation](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
- [4.9.1 How to Create a Content Flow for Categories](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels)
