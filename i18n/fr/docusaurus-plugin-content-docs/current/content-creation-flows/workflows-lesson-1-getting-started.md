---
title: "4.11.1. Workflows. Leçon 1 : premiers pas avec les Workflows"
sidebar_position: 30
slug: /content-creation-flows/workflows-lesson-1-getting-started
description: >-
  Les Workflows vérifient et modifient automatiquement les résultats générés :
  remplacer des mots, couper un texte à une limite de longueur ou signaler un
  résultat pour une vérification manuelle avant qu'il n'arrive dans la boutique.
  Créez votre premier workflow et découvrez son fonctionnement.
keywords:
- flux de travail
---

Les Workflows vérifient et modifient automatiquement les résultats générés : ils peuvent remplacer des mots, couper un texte à une limite de longueur ou signaler un résultat pour une vérification manuelle avant qu'il n'arrive dans la boutique. Vous définissez les règles une seule fois, et elles s'appliquent à chaque nouveau résultat.

Dans cette leçon, vous allez créer votre premier workflow, observer son comportement et découvrir quelques points auxquels il faut faire attention.

## L'exemple utilisé

Notre flux génère une courte description de livraison pour un gâteau :

> We are delighted to deliver your chosen **cake** directly to the address you provide… Each Festive **Cake** will arrive in beautiful gift packaging… every celebration deserves a delicious **CAKE**…

Le mot « cake » apparaît trois fois, avec trois casses différentes. Gardez-le en tête, cela aura son importance plus tard.

## Étape 1. Créer un workflow

Allez dans **Home → Workflows** et cliquez sur **Create workflow**.

![Page Workflows avec le bouton Create workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/01-workflows-page-create-workflow.png)

L'éditeur s'ouvre avec le nom par défaut **New workflow 1**. Donnez tout de suite un nom explicite au workflow : lorsque vous en aurez plusieurs, les noms génériques se confondent facilement.

![Éditeur de workflow vide avec le bouton Create block](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/02-empty-workflow-editor.png)

> **Remarque :** le commutateur **Active** est activé par défaut. Un workflow n'a aucun effet tant qu'il n'est pas associé à un flux, mais une fois associé, un workflow actif commence à traiter les résultats.

## Étape 2. Configurer un bloc

Cliquez sur **Create block**. Un bloc apparaît sur le canevas, avec deux parties :

- **IF :** les conditions dans lesquelles le bloc s'exécute.
- **THEN :** les actions qu'il effectue.

![Un nouveau bloc vide sur le canevas](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/03-new-empty-block.png)

Cliquez sur l'icône en forme de crayon pour ouvrir les paramètres du bloc.

![Fenêtre Edit block vide](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/04-empty-edit-block-window.png)

### Conditions

Chaque condition comporte trois parties : ce qu'il faut vérifier, un opérateur et une valeur. Vous pouvez vérifier deux éléments :

![Types de conditions : Length et Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/05-condition-types.png)

**Length** est la longueur du texte en caractères, espaces compris. Opérateurs : greater than, greater or equal, less than, less or equal, equals, not equal.

![Opérateurs de Length](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/06-length-operators.png)

**Text** vérifie le contenu. Opérateurs : contains, does not contain, begins with, ends with, is empty, is not empty.

![Opérateurs de Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/07-text-operators.png)

Avec plusieurs conditions, choisissez la logique :

- **All conditions :** toutes les conditions doivent être remplies (AND).
- **Any condition :** une seule suffit (OR).

### Actions

Trois actions sont disponibles. Leurs descriptions s'affichent directement dans la liste déroulante.

![Les trois actions disponibles](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/08-available-actions.png)

- **Replace text :** remplace un mot ou une expression. Laissez **Replace with** vide pour le supprimer. Les balises HTML ne sont pas affectées.
- **Truncate :** coupe le texte à un nombre maximal de caractères.
- **Mark suspicious :** signale le résultat pour une vérification manuelle.

Un bloc peut contenir plusieurs actions. Elles s'exécutent de haut en bas.

### Votre premier bloc

**Objectif :** si le texte contient "Happy holidays!", remplacer "cake" par "festive cake".

1. **Name :** `cake -> festive cake`
2. **Conditions → Add condition :** `Text` · `contains` · `Happy holidays!`
3. **Actions → Add action :** `Replace text`, Find `cake`, Replace with `festive cake`, **All matches** activé (remplacer toutes les occurrences, et pas seulement la première).
4. Cliquez sur **Apply**.

![Paramètres du bloc pour le premier exemple](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/09-first-block-settings.png)

Le bloc affiché sur le canevas présente maintenant un résumé de ses conditions et de ses actions. Vérifiez que **Active** est activé, puis cliquez sur **Save**.

![Bloc enregistré avec résumé, commutateur Active et bouton Save](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/10-saved-block-summary.png)

## Étape 3. Associer le workflow à un flux

Un workflow enregistré ne fait rien tant qu'il n'est pas rattaché à un flux.

1. Ouvrez votre flux et allez dans l'onglet **Automation** (le 4e onglet).
2. En bas, dans la section **Workflows**, choisissez votre workflow dans la liste déroulante.
3. Cliquez sur **Save** pour enregistrer le flux.

![Section Workflows d'un flux avec un workflow associé](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/11-flow-workflows-section.png)

Générez un nouveau résultat et ouvrez-le depuis la **Batch List** (le tableau des résultats générés).

## Étape 4. Vérifier le résultat

Le texte contenant "Happy holidays!" a changé :

![Résultat avec "festive cake" et "Festive festive cake"](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/12-result-festive-festive-cake.png)

Remarquez **"Festive festive cake"**. Le modèle a écrit "Festive Cake" avec un C majuscule, et sans **Match case**, le remplacement ignore la casse : "Cake" a donc été remplacé lui aussi.

**Correction :** activez **Match case**. Seul "cake" en minuscules est alors remplacé, et "Festive Cake" reste tel quel.

> **À garder en tête :** Replace text ne tient pas compte du contexte, il recherche uniquement des correspondances. Si le modèle a déjà écrit "delicious cake", remplacer `cake` par `delicious cake` donne "delicious delicious cake". Réfléchissez à la façon dont votre remplacement se comportera sur différents textes.

## Étape 5. Comment les résultats sont traités

Si vous modifiez les paramètres d'un workflow et rouvrez un résultat qu'il a déjà traité, le résultat reste identique. Voici comment le système fonctionne :

- Les workflows ne traitent que les résultats **nouveaux et régénérés**.
- Chaque résultat n'est traité **qu'une seule fois** par un workflow donné. La modification de ses blocs n'a aucun effet sur les résultats qu'il a déjà traités.
- Les modifications sont **définitives**. Retirer un workflow d'un flux ne rétablit pas le texte d'origine.

Pour appliquer de nouveaux paramètres, régénérez le résultat.

> **Conseil :** testez d'abord les nouveaux workflows sur un flux de test. Les modifications apportées aux résultats traités ne peuvent pas être annulées, seulement régénérées.

## Étape 6. Plusieurs workflows

Pour corriger les textes où "Festive festive" apparaît, vous pouvez ajouter un second workflow. Celui-ci signale également le résultat pour vérification :

- **Conditions :** `Text` · `contains` · `Festive festive`
- **Actions :**
    1. `Replace text` : `Festive festive` → `Festive`, **All matches** et **Match case** activés
    2. `Mark suspicious` avec un motif pour le relecteur

![Workflow de correction avec Replace text et Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/13-fix-workflow.png)

Vous pouvez associer autant de workflows que vous le souhaitez à un flux. Ils s'exécutent **de haut en bas**, et chacun reçoit le texte tel qu'il a été modifié par le précédent. Réorganisez-les en faisant glisser la poignée ou à l'aide des flèches.

![Quatre workflows associés à un même flux](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/14-four-workflows-assigned.png)

Ordre recommandé :

1. Les workflows qui modifient le texte.
2. Les workflows qui corrigent les effets secondaires des précédents. Une correction doit s'exécuter **après** le workflow qui cause le problème.
3. Mark suspicious peut se placer n'importe où : il n'interrompt pas le traitement.

Si plusieurs workflows marquent un résultat comme suspect, c'est le motif du **premier** de la liste qui s'affiche.

## Étape 7. Truncate avec vérification manuelle

**Objectif :** remplacer "cake" par "candies", limiter le texte à 110 caractères et empêcher le texte raccourci d'arriver dans la boutique tant que quelqu'un ne l'a pas vérifié.

- **Conditions** (**All conditions**) :
    - `Text` · `contains` · `cake`
    - `Length` · `greater than` · `100`
- **Actions**, dans cet ordre :
    1. `Replace text` : `cake` → `candies`, **All matches** et **Match case** activés
    2. `Truncate` : `110`, **Keep whole words** activé
    3. `Mark suspicious` : motif `Truncated to 110 characters`

![Bloc avec Replace text, Truncate et Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/15-replace-truncate-mark-suspicious.png)

> **Pourquoi l'ordre est important :** "candies" est plus long que "cake". Si vous tronquez d'abord et remplacez ensuite, le texte peut de nouveau dépasser la limite. Remplacez d'abord, tronquez ensuite.

**Résultat :**

![Résultat tronqué, 109 caractères](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/16-truncated-result.png)

Le texte compte 109 caractères et aucun mot n'est coupé en deux. Les mots reliés par un trait d'union, comme "door-complete", comptent pour un seul mot. Aucun "…" n'est ajouté à la fin. La phrase, en revanche, est inachevée, c'est pourquoi Mark suspicious fait partie de ce bloc.

Un résultat suspect **n'est pas synchronisé avec la boutique** tant qu'un utilisateur ne l'a pas modifié ou régénéré. Dans la Batch List, une icône "!" apparaît à côté de **Sync Now**, et le motif s'affiche au survol :

![Motif de suspicion affiché à côté de Sync Now](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/17-suspicious-reason-sync-now.png)

Dans le résultat, un avertissement **Synchronization with integration is disabled** indique le motif :

![Avertissement de synchronisation désactivée avec le motif du workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/18-sync-disabled-warning.png)

> **Les mots suspects de l'intégration sont prioritaires.** L'intégration dispose de sa propre liste de [mots et motifs suspects](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control). Si le texte en contient un, le résultat reçoit le motif système "Completion looks suspicious, possible AI recommendations found", et les motifs des workflows ne sont pas affichés. Le mot détecté est surligné en orange.

![Avertissement système de suspicion avec un mot surligné](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/19-system-suspicious-warning.png)

## Aide-mémoire

| Paramètre | Fonctionnement |
| --- | --- |
| All / Any condition | Toutes les conditions doivent être remplies / une seule suffit |
| Length | Longueur du texte en caractères, espaces compris |
| Replace text | Un Replace with vide supprime la correspondance ; les balises HTML ne sont pas affectées |
| All matches | Désactivé : seule la première correspondance est remplacée |
| Match case | Désactivé : le remplacement ignore la casse |
| Truncate | Aucun "…" ajouté ; Keep whole words préserve les mots entiers |
| Mark suspicious | Bloque la synchronisation avec la boutique ; n'interrompt ni les autres actions ni les autres workflows |
| Plusieurs marques de suspicion | Le motif du premier workflow est affiché |
| Integration suspicious words | Prioritaires sur les motifs des workflows |
| Traitement | Uniquement les résultats nouveaux et régénérés, une fois par workflow ; les modifications sont définitives |

## Et ensuite ?

La leçon suivante montre comment relier plusieurs blocs avec les sorties Yes, No et Always, afin qu'un même workflow puisse traiter différents textes de différentes manières.

Poursuivez avec [4.11.2. Lesson 2: Combining Blocks in One Workflow](/content-creation-flows/workflows-lesson-2-combining-blocks/).
