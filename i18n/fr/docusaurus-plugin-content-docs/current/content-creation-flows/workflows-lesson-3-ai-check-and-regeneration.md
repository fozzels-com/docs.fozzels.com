---
title: '4.11.3. Workflows. Leçon 3 : vérification automatique par l''IA et régénération'
sidebar_position: 32
slug: /content-creation-flows/workflows-lesson-3-ai-check-and-regeneration
description: >-
  Laissez l'IA vérifier chaque texte généré avant qu'il n'arrive dans votre
  boutique. Lorsqu'un texte n'est pas utilisable, Fozzels indique au modèle ce
  qui n'allait pas et le génère à nouveau automatiquement.
keywords:
- flux de travail
---

Laissez l'IA vérifier chaque texte généré avant qu'il n'arrive dans votre boutique. Lorsqu'un texte n'est pas utilisable, Fozzels indique au modèle ce qui n'allait pas et le génère à nouveau automatiquement.

Il arrive qu'un modèle d'IA écrive quelque chose d'inutilisable : un texte de substitution, un commentaire du type « Voici votre description », un texte dans la mauvaise langue ou portant sur le mauvais produit. Avec une vérification par l'IA dans votre workflow, Fozzels repère ces textes pour vous et les génère à nouveau automatiquement : vous ne relisez que ce qui nécessite réellement une intervention humaine.

Cette leçon s'appuie sur [4.11.1. Leçon 1 : premiers pas avec les Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) et [4.11.2. Leçon 2 : combiner des blocs dans un même workflow](/content-creation-flows/workflows-lesson-2-combining-blocks/). Si vous ne les avez pas encore lues, commencez par celles-ci.

## Le fonctionnement en bref

1. Votre flux génère un texte, comme d'habitude.
2. Un second modèle d'IA lit le texte et vérifie s'il est utilisable.
3. Si le texte est validé, rien ne change : il passe à la relecture ou à la synchronisation, selon les paramètres de votre flux.
4. Si le texte échoue, Fozzels le génère à nouveau et indique au modèle ce qui n'allait pas (le « feedback »).
5. Le nouveau texte est vérifié à son tour. Ce processus se répète jusqu'à ce que le texte soit validé ou que le nombre maximal de régénérations soit atteint.
6. Si le texte échoue encore après la dernière tentative, il est signalé comme suspect avec le motif, afin que vous puissiez le corriger vous-même.

## Les deux nouveaux blocs

| Bloc | Type | Rôle |
| --- | --- | --- |
| **AI validation fails** | Condition | Demande à un modèle d'IA de vérifier le texte généré. **Yes** = le texte présente un problème, **No** = le texte est correct. |
| **Regenerate with feedback** | Action | Génère à nouveau le texte en arrière-plan et transmet au modèle les problèmes détectés, afin qu'il puisse les éviter. |

Utilisez-les ensemble dans un même bloc : la condition **AI validation fails** dans la section **Conditions** et l'action **Regenerate with feedback** dans la section **Actions**.

## Ce que la vérification par l'IA recherche

La vérification considère un texte comme inutilisable lorsque :

| Problème | Exemple |
| --- | --- |
| Ce n'est pas un vrai contenu : au lieu du texte attendu, l'IA a renvoyé quelque chose destiné à un autre usage, ou il existe une autre incohérence manifeste | Un refus, une question en retour, « lorem ipsum », « [Product name] », une balise de modèle vide |
| L'IA s'adresse à l'utilisateur | « Voici la description : », « N'hésitez pas à me demander des modifications », un raisonnement visible |
| Il ne correspond pas à l'attribut | Une description complète rédigée en guise de titre |
| Il reprend le nom de l'attribut | « Meta description: ... » |
| Il est dans la mauvaise langue | Un texte en anglais dans une vue de boutique allemande |
| Il porte sur un autre produit | Un texte sur des écouteurs pour un étui d'écouteurs |
| Il s'arrête au milieu d'une phrase | Le texte est coupé |

La vérification ne juge **pas** le style, le ton, la longueur ni la mise en forme, et elle ne réécrit jamais votre texte. Pour les limites de longueur ou les remplacements de mots, utilisez les blocs des leçons 1 et 2.

:::note
La vérification voit le produit, le texte généré, la valeur précédente de l'attribut et la langue de votre vue de boutique. Elle ne voit **pas** votre prompt. Ainsi, si l'attribut contenait auparavant un titre normal et que la nouvelle valeur est « lorem ipsum » (même si votre prompt demandait exactement cela), la vérification indique dans son feedback que le résultat ne ressemble pas à un titre normal.
:::

## Étape 1. Créer le workflow

1. Dans le menu latéral, sous **AI Flows**, ouvrez **Workflows**.
2. Cliquez sur **Create workflow**.
3. Donnez au workflow un nom explicite, par exemple « Vérification IA ».
4. Ajoutez un bloc et donnez-lui un titre, par exemple « Validation par vérification IA ».

![Élément Workflows dans le menu AI Flows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/01-workflows-menu.png)

![Bouton Create workflow sur la page Workflows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/02-create-workflow-button.png)

## Étape 2. Configurer le bloc

1. Dans la section **Conditions**, cliquez sur **Add condition** et choisissez **AI validation fails**. Cette condition n'a aucun paramètre.
2. Dans la section **Actions**, cliquez sur **Add action** et choisissez **Regenerate with feedback** dans le champ **Action**.
3. Définissez **Maximum regenerations** : le nombre de fois où Fozzels peut générer à nouveau le texte. La valeur par défaut est 2 et le maximum est 3.
4. Cliquez sur **Apply**.

![Choix de l'action Regenerate with feedback dans la fenêtre Edit block](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/03-regenerate-with-feedback-action.png)

![Champ Maximum regenerations et bouton Apply](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/04-maximum-regenerations.png)

:::tip
Pour vos tests, réglez **Maximum regenerations** sur 1. Vous voyez le résultat final plus rapidement et dépensez moins.
:::

## Étape 3. Associer le workflow à un flux

1. Ouvrez votre flux de contenu.
2. Dans le champ **Workflows**, sélectionnez votre workflow.
3. **Enregistrez le flux.** Le workflow ne s'exécute qu'une fois le flux enregistré.

![Sélection du workflow dans le champ Workflows d'un flux de contenu](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/05-assign-workflow-to-flow.png)

Si votre flux comporte d'autres workflows (par exemple « Replace text » ou « Truncate »), vous pouvez les combiner. Les workflows s'exécutent dans l'ordre dans lequel ils sont associés.

## Étape 4. Vérifier le résultat

Générez des textes dans votre flux. Pour chaque produit, l'un des trois cas suivants se produit :

**Le texte est validé du premier coup.** Rien de particulier ne se passe. Le texte suit son cours habituel.

**Le texte échoue, puis est validé après une régénération.** Pendant que Fozzels le génère à nouveau, le texte apparaît comme suspect avec le motif « Did not pass AI validation and is being generated again: ... ». Cela prend de quelques secondes à quelques minutes. Lorsque le nouveau texte est validé, le signalement est retiré et le nouveau texte remplace l'ancien.

**Le texte échoue à chaque fois.** Après la dernière régénération, le texte reste suspect avec le motif, par exemple : « Did not pass AI validation after 2 generation(s): The Title value "All-Mountain Snowboard" is in English, not German as required. » Lisez le motif, puis modifiez le texte vous-même ou adaptez le prompt et générez à nouveau.

Vous pouvez suivre chaque tentative dans le [Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/) du produit : chaque génération y apparaît comme une révision distincte.

:::note
Le motif n'est conservé que si le texte échoue au final. Lorsqu'une régénération est validée, le motif est supprimé et l'historique affiche la version précédente sans motif.
:::

## Autres messages possibles

| Message | Signification | Que faire |
| --- | --- | --- |
| AI validation could not check this value, so it is held for review. | La vérification n'a pas pu s'exécuter, par exemple en raison d'une erreur temporaire. | Relisez le texte vous-même. |
| AI validation stopped because your balance is too low, so this value was not validated. | Votre solde est épuisé. | Rechargez votre solde et générez à nouveau. |
| Did not pass AI validation. It was not generated again because the flow, its workflows or the item changed in the meantime. | Un élément a changé pendant que le texte attendait une régénération. | Relisez le texte ou générez-le à nouveau. |

## Coûts

- Chaque vérification par l'IA est un petit appel payant. Elle coûte bien moins qu'une génération.
- Chaque régénération coûte autant qu'une génération normale.
- Un produit peut donc coûter au maximum : 1 génération + le nombre maximal de régénérations + une vérification par tentative.

Choisissez le nombre maximal de régénérations en conséquence. Pour la plupart des flux, 1 ou 2 suffisent.

## Règles à retenir

| Règle | Ce que cela signifie pour vous |
| --- | --- |
| Utilisez les deux blocs ensemble | AI validation fails détecte le problème, Regenerate with feedback le corrige |
| La vérification ne voit pas votre prompt | Elle juge si le texte est utilisable dans votre boutique, pas s'il respecte chaque instruction |
| Le style, le ton et la longueur ne sont pas vérifiés | Utilisez pour cela Replace text, Truncate ou Mark suspicious |
| 3 régénérations au maximum | Au-delà, le texte vous est transmis comme suspect |
| Chaque vérification et chaque régénération est facturée | Gardez un maximum bas |
| Enregistrez le flux après y avoir associé le workflow | Sinon, le workflow ne s'exécute pas |

:::tip
Testez d'abord le workflow sur 2 ou 3 produits. Consultez l'historique et les motifs, puis activez-le pour l'ensemble du flux.
:::

## Gardez le contrôle de votre contenu

Avec une vérification par l'IA dans vos workflows, chaque texte généré est contrôlé avant d'arriver dans votre boutique, et les textes inutilisables sont corrigés automatiquement. Vous ne consacrez votre temps qu'aux textes qui ont réellement besoin de vous, et Fozzels s'occupe du reste. Prenez le contrôle total de votre contenu avec Fozzels.

## Besoin d'aide pour la configuration ?

Si vous avez besoin d'aide pour configurer des workflows personnalisés, contactez votre responsable de compte ou le support Fozzels.
