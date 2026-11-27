---
title: "4.3.4 Main Prompt et Prompt per Text : comment Fozzels envoie votre prompt"
sidebar_position: 11.5
slug: /content-creation-flows/main-prompt-and-prompt-per-text
description: >-
  Chaque requête envoyée à l'IA comporte deux parties : le main prompt, identique
  pour tous les produits, et le prompt per text, qui contient les données du
  produit. Ce qui va où, pourquoi, et comment adapter un Flow existant.
---

Fozzels envoie à l'IA un prompt pour chaque produit. Ce prompt comporte deux parties :

- le **main prompt**, qui contient les règles de tout le Flow et qui est identique pour chaque produit, et
- le **prompt per text**, qui contient la tâche pour un champ, avec les données de ce produit.

Fozzels envoie le main prompt à l'IA comme *instruction système* : les consignes permanentes que l'IA garde en tête pendant la tâche. Cet article explique ce qui va dans chaque partie, pourquoi c'est important et comment adapter un Flow existant.

## Les deux parties en un coup d'œil

| | Main prompt | Prompt per text |
|---|---|---|
| **De quoi s'agit-il** | Les règles qui s'appliquent à chaque texte du Flow | La tâche pour un champ |
| **Contenu typique** | Qui écrit, pour qui, sur quel ton, les principes de neuromarketing, les mots-clés, ce qu'il ne faut jamais mentionner, les règles de contrôle, vos propres consignes permanentes | La longueur, la structure, le bloc de confiance, les liens internes et l'instruction avec les attributs du produit |
| **Données du produit** | Interdites. Le texte doit être identique pour chaque produit | Oui : attributs, conditions et snippets |
| **Où le modifier** | Étape 3 de l'assistant du Flow (**Main prompt**), ou carte **Main prompt** sur la page du Flow | Étape 4 de l'assistant du Flow (**Prompt per text**), un onglet par champ |
| **Envoi** | Une seule fois, avant les prompts des champs | Pour chaque champ, avec les données de ce produit |

:::note
Certains articles et captures d'écran utilisent encore les anciens noms des étapes : l'étape 3 s'appelait **Enrich the text** et l'étape 4 **Fields**. La carte de la page du Flow s'appelait **System prompt**. Ce sont les mêmes étapes et la même carte.
:::

## Pourquoi deux parties ?

- **L'IA respecte mieux vos règles.** Les modèles d'IA accordent plus de poids à une instruction système qu'à une phrase au milieu d'un long prompt. Le ton, les mots à éviter et la forme d'adresse sont respectés plus régulièrement dans tous vos produits.
- **Les données de vos produits ne peuvent pas annuler vos règles.** Un texte dans un champ produit, comme une note du fournisseur qui dit « ignore les instructions ci-dessus », reste dans le prompt per text. Il ne change pas les règles du main prompt.
- **Plus rapide et moins cher pour les grands Flows.** Le main prompt est identique, mot pour mot, pour chaque produit. Les fournisseurs d'IA peuvent réutiliser une partie d'une requête qu'ils ont déjà vue. La requête est ainsi plus rapide, et son coût peut baisser.

## Ce qui va dans le main prompt

Mettez dans le main prompt tout ce qui est vrai pour **chaque** texte du Flow :

- **Role of the AI**, **Target audience** et **Tone of voice**
- **Neuromarketing principles**
- **Keywords**
- **Do not mention** : les mots et les sujets qui ne doivent jamais figurer dans le texte
- **Guidelines and check rules**, les règles standard de Fozzels et vos propres règles
- **Vos propres instructions**, avec vos propres mots, par exemple « Adressez-vous toujours au lecteur avec *vous* » ou « Nous expédions en 24 heures, ne promettez jamais une livraison plus rapide »

À l'étape 3, vous activez ces blocs et vous les remplissez. Fozzels rédige le main prompt à partir de ces blocs. Les sources que vous définissez à l'étape 3 (**Attributes from your store**, **Look at photos** et **Search the internet**) sont différentes pour chaque produit. Fozzels les envoie donc avec le prompt per text. Sous les blocs, sous **Your main prompt**, vous voyez le résultat. Vous pouvez aussi le modifier à la main.

### Pas de données produit dans le main prompt

Le main prompt doit être identique pour chaque produit. Vous ne pouvez donc pas y utiliser de données produit :

- L'éditeur du main prompt n'a pas de panneau **Attributes** ni de **Preview**. Un aperçu serait identique pour chaque produit. À la place, chaque bloc affiche le texte que l'IA lit pour ce bloc.
- Les snippets qui lisent des données produit, et les snippets avec des conditions, n'y sont pas disponibles. Si un tel snippet se trouve déjà dans un main prompt et que vous y ajoutez des données produit, Fozzels affiche le message *"This snippet is in the main prompt of … The main prompt is the same for every product, so the snippet cannot read the product there."* Retirez d'abord le snippet de ces main prompts, ou enregistrez votre modification comme un nouveau snippet.

Tout ce qui dépend du produit va dans le prompt per text.

## Ce qui va dans le prompt per text

Le prompt per text est la tâche pour un champ. À l'étape 4, chaque champ du Flow a un onglet avec :

- la **longueur** du texte,
- la **structure** : les sections, leur ordre et leurs titres,
- le **bloc de confiance** et les **liens internes**, pour les champs qui en acceptent,
- l'**Instruction for [field]** : ce que l'IA doit écrire dans ce champ, avec les attributs et les conditions du produit.

Le main prompt s'applique à chaque champ. Vous ne répétez donc pas ici le rôle, le ton ou les règles. Écrivez seulement ce qui est propre à ce champ, par exemple *« Rédigez une meta description de 155 caractères au maximum qui cite la marque et le principal avantage. »*

Fozzels ajoute lui-même les instructions techniques au prompt per text : le format de la réponse, les options qu'un champ de type liste autorise et la longueur maximale du champ. Vous n'avez pas besoin de les écrire.

## Où modifier le main prompt

- **Dans un nouveau Flow :** étape 3, **Main prompt**. Un nouveau Flow démarre avec le main prompt de votre [Brand Profile](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/#brand-profile) par défaut.
- **Dans un Flow existant :** sur la page du Flow, la carte **Main prompt** affiche le main prompt tel que l'IA le lit. Cliquez sur **Change** pour le modifier. Seul le main prompt est enregistré. Les prompts per text restent inchangés.
- **Brand Profiles :** à l'étape 3, cliquez sur **Load brand profile** pour utiliser un profil enregistré, ou sur **Save as brand profile** pour conserver le main prompt de ce Flow pour d'autres Flows. Un Flow reçoit une copie du profil. Si vous modifiez le profil plus tard, Fozzels ne modifie pas vos Flows existants.

## Flows existants

Vous n'avez rien à faire. Les Flows que vous avez créés avant ce changement continuent de fonctionner :

- Le main prompt d'un ancien Flow est vide au départ, et son prompt reste là où il était.
- Les blocs de tout le Flow qui sont déjà dans le prompt, comme le rôle, le public ou le ton, sont envoyés automatiquement avec le main prompt.
- Le texte que vous avez saisi vous-même reste dans le prompt per text, exactement là où vous l'avez écrit. Fozzels ne déplace pas vos propres phrases, car une phrase peut changer de sens loin de celles qui l'entourent.

Pour profiter pleinement de ce changement, déplacez vous-même vos règles permanentes dans le main prompt.

### Adapter un Flow existant

1. Ouvrez le Flow et lisez son prompt. Marquez les phrases qui sont vraies pour **chaque** produit : le persona, la voix de la marque, le public, la forme d'adresse, les mots à éviter.
2. Sur la page du Flow, cliquez sur **Change** sur la carte **Main prompt**.
3. Ajoutez ces règles avec les blocs (rôle, public, ton, do not mention, vos propres règles), ou saisissez-les comme vos propres instructions. Enregistrez.
4. Supprimez les mêmes phrases du prompt de chaque champ, pour que l'IA ne les reçoive pas deux fois.
5. Testez le Flow sur quelques produits réels et comparez les textes avec les résultats précédents.

**Exemple.** Un prompt qui contenait tout :

> Vous êtes rédacteur pour une marque de chaussures haut de gamme. Écrivez pour des femmes de 30 à 50 ans qui recherchent le confort. Ne mentionnez jamais les prix ni les promotions. Utilisez toujours « vous ».
> Rédigez une description produit d'environ 120 mots pour **Name**. Mentionnez la matière **Material** et la couleur **Colour**.

Après le changement :

- **Main prompt :** *Vous êtes rédacteur pour une marque de chaussures haut de gamme. Écrivez pour des femmes de 30 à 50 ans qui recherchent le confort. Ne mentionnez jamais les prix ni les promotions. Utilisez toujours « vous ».*
- **Prompt per text (Description) :** *Rédigez une description produit d'environ 120 mots pour* **Name**. *Mentionnez la matière* **Material** *et la couleur* **Colour**.

## Bon à savoir

- **Pas d'instructions en double.** Si le prompt d'un champ contient encore un bloc que le main prompt a déjà, par exemple un second ton de voix, Fozzels envoie ce bloc une seule fois, depuis le main prompt.
- **Plusieurs champs dans un Flow.** Tous les champs sont créés dans une seule requête d'IA pour chaque produit, et ils partagent le main prompt. Le rôle, le public et les règles s'appliquent donc automatiquement aux champs supplémentaires.
- **Voir ce qui a été envoyé.** Dans la liste du contenu généré, le prompt de chaque texte montre les deux parties, le main prompt en premier.

## Articles associés

- [4.1.2. Créer un Content Flow : les six étapes](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.3.2 Configuration et utilisation des prompts : le nouvel éditeur de prompts](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)
- [4.3.3. Rédiger des prompts efficaces (recommandations)](/content-creation-flows/writing-effective-prompts-recommendations/)
