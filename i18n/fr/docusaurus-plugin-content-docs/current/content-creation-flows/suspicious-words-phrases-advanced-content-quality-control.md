---
id: '103000390709'
title: "4.7.4 Suspicious Words & Phrases : contrôle qualité avancé du contenu"
sidebar_position: 21
slug: >-
  /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: >-
  La fonctionnalité Suspicious Words & Phrases signale les textes générés qui
  contiennent des mots, des expressions ou des formulations de type commentaire
  que vous ne souhaitez pas publier, afin que vous puissiez les relire avant
  leur mise en ligne.
---

La fonctionnalité **Suspicious Words & Phrases** signale les textes générés qui contiennent des mots, des expressions ou des formulations de type commentaire que vous ne souhaitez pas publier. Les complétions signalées reçoivent le statut **Suspicious**, ce qui vous permet de les filtrer et de les relire avant leur mise en ligne.

Elle détecte les artefacts d'IA (excuses, remarques adressées au lecteur, balisage résiduel), les restes techniques et tous les termes que vous choisissez de bloquer, dans toutes les langues à la fois.

## Où la trouver

Allez dans **Settings** > **Flow** et faites défiler la page jusqu'au bloc **Suspicious Words & Phrases**. Les paramètres s'appliquent globalement à tous vos flux.

![Paramètres de Suspicious Words & Phrases](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-01-settings.png)

## Fonctionnement de la correspondance

Par défaut, un mot est reconnu en tant que mot entier. Ajoutez `*` au début ou à la fin pour élargir la recherche. La casse n'a jamais d'importance.

| Entrée | Ce qu'elle détecte |
| --- | --- |
| `bright` | _bright_ uniquement, pas _brightness_ ni _ultrabright_ |
| `bright*` | également _brightness_ et _brightly_ |
| `*bright` | également _ultrabright_ |
| `*bright*` | le texte n'importe où, y compris _ultrabrightness_ |
| `bri*ght` | le texte exact `bri*ght` — `*` ne fonctionne qu'au début ou à la fin |

Les mêmes règles s'appliquent aux expressions. Par exemple, `antwoord` ne signale jamais _verantwoorde_, `antwoord*` signale aussi _antwoorden_, et `*seo*` est détecté partout, même à l'intérieur de _museo_.

## Ce qui est signalé

Trois sources alimentent la vérification : les mots par défaut, les modèles intégrés et vos propres mots.

### Mots suspects par défaut

Fozzels est livré avec une liste prête à l'emploi d'artefacts d'IA courants dans plusieurs langues, tels que `*sorry*`, `*please*`, `*note:*`, `*markdown*`, `*<html*`, `*Let op:*` et `*het spijt me*`. Décochez un mot dont vous n'avez pas besoin, et il cesse d'être signalé.

### Modèles intégrés

Les modèles intégrés recherchent la _forme_ d'un commentaire d'IA plutôt qu'un mot exact. Ils détectent des formulations que le modèle n'a encore jamais utilisées, par exemple :

- « Let's » ou « Let me » devant un verbe, comme dans _"Let's re-verify"_
- Une vérification énumérée, comme dans _"One last check"_ ou _"Final check"_
- Une question sur la rédaction elle-même, comme dans _"Is the wording accurate?"_
- Un résultat remis, comme dans _"Final answer"_ ou _"Here is the"_
- Des caractères comptés, comme dans _"59 chars"_ ou _"character limit"_
- Les instructions citées en retour, comme dans _"the prompt says"_ ou _"mandatory words"_
- Le mot « I » devant un verbe, comme dans _"I forgot"_ ou _"I'll use"_

La liste complète figure dans les paramètres, avec un exemple pour chaque modèle. Les modèles ne peuvent pas être modifiés : cliquez sur l'un d'eux pour l'activer ou le désactiver. Désactivez un modèle s'il signale votre propre texte.

Les modèles grisés sont désactivés au départ. Ils correspondent à des formes que le texte ordinaire utilise aussi, comme une question dans une FAQ produit ou une ligne qui commence par _Great,_. Activez-en un uniquement si vous préférez relire quelques-unes de vos propres phrases plutôt que de laisser passer ces commentaires.

### Vos propres mots

Sous **Add your own suspicious words**, saisissez un mot ou une expression et appuyez sur **Enter**. Utilisez cette option pour les noms de concurrents, les termes de marque sensibles ou les erreurs propres à une langue. Vous pouvez mélanger plusieurs langues dans une même liste, ce qui aide les boutiques qui publient dans plusieurs langues.

## Fonctionnement du signalement

Chaque nouvelle génération est vérifiée par rapport à vos paramètres actuels dès sa création. Lorsqu'une correspondance est trouvée :

- La complétion reçoit le statut **Suspicious**.
- Les mots correspondants sont **surlignés** dans l'éditeur de texte, ce qui permet de voir immédiatement ce qui a déclenché le signalement.
- Vous décidez de la suite : **modifier** le texte manuellement, le **régénérer**, ou **ajuster la liste** s'il s'agit d'une fausse alerte.

Dans la liste des complétions, un résultat signalé se présente ainsi. Le mot correspondant (ici, _hello_) est surligné dans le texte. Le bouton **Sync Now** affiche une icône d'avertissement et le message _"Completion looks suspicious, possible AI recommendations found."_

![Une complétion suspecte dans la liste des complétions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-02-suspicious-completion.png)

Une complétion de ce type ne doit pas être synchronisée telle quelle. Régénérez-la, ou modifiez le texte pour supprimer les mots signalés.

Pour ne relire que les éléments signalés, activez **Show only suspicious** dans la **Daily Total Batch List**. Vous ignorez ainsi les résultats sans problème et allez directement aux textes qui demandent votre attention.

## Mise à jour des complétions existantes

Modifier la liste n'affecte que les nouvelles générations. Les complétions existantes ne sont **pas** revérifiées automatiquement : leur statut Suspicious reste inchangé tant que vous ne le recalculez pas.

Pour appliquer vos nouveaux paramètres aux textes existants :

1.  Ouvrez la **Content Completion List** de l'attribut que vous souhaitez vérifier.
2.  Sélectionnez les produits à revérifier.
3.  Ouvrez le menu **Actions** et choisissez **Update Suspicious Flag**.

![Update Suspicious Flag dans le menu Actions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-03-update-suspicious-flag.png)

Les complétions sélectionnées sont analysées à nouveau en fonction de votre liste et de vos modèles actuels. Les produits qui ne correspondent plus perdent le statut Suspicious et sont prêts à être synchronisés.

**Exemple :** vous avez ajouté `sorry` comme mot suspect, puis lancé une marque appelée _Sorry Boy_. Des centaines de descriptions sont désormais signalées. Supprimez ou décochez `sorry` dans Settings, puis exécutez **Update Suspicious Flag** sur ces produits : les signalements disparaissent et vous pouvez les synchroniser en masse sans modifier chaque texte.

## Conseils

- Commencez par des mots entiers et n'ajoutez `*` que lorsque vous avez besoin de variantes. `*seo*` détecte aussi _museo_, ce qui peut signaler un texte ordinaire.
- Si un modèle intégré signale sans cesse de bons textes dans votre créneau, désactivez-le plutôt que de modifier les textes un par un.
- Après chaque modification de la liste, exécutez **Update Suspicious Flag** sur les produits que vous souhaitez revérifier.

Utilisés ensemble, la liste de mots, les modèles et l'action de masse vous offrent un point unique pour contrôler ce qui arrive dans votre boutique, sur tous vos flux et dans toutes les langues.
