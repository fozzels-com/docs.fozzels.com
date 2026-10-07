---
title: "4.11.2. Workflows. Leçon 2 : combiner des blocs dans un même workflow"
sidebar_position: 31
slug: /content-creation-flows/workflows-lesson-2-combining-blocks
description: >-
  Un workflow peut contenir plusieurs blocs connectés. Le résultat de chaque
  bloc détermine quel bloc s'exécute ensuite : un même workflow peut ainsi
  traiter différents textes de différentes manières.
keywords:
- flux de travail
---

Un workflow peut contenir plusieurs blocs connectés entre eux. Le résultat de chaque bloc détermine quel bloc s'exécute ensuite : un même workflow peut ainsi traiter différents textes de différentes manières.

Cette leçon s'appuie sur [4.11.1. Lesson 1: Getting Started with Workflows](/content-creation-flows/workflows-lesson-1-getting-started/). Si vous ne l'avez pas encore lue, commencez par celle-ci : elle présente les conditions, les actions et la manière dont les résultats sont traités.

## Sorties d'un bloc : Yes, No et Always

Chaque bloc possède une entrée à gauche et trois sorties à droite.

![Un bloc avec son entrée et les sorties Yes, No et Always](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/01-block-outputs.png)

| Sortie | Emplacement | Mène au bloc suivant lorsque |
| --- | --- | --- |
| **Yes** (bleu) | Partie IF | Les conditions du bloc sont remplies |
| **No** (orange) | Partie IF | Les conditions du bloc ne sont pas remplies |
| **Always** (gris) | Partie THEN | Les actions du bloc ont été exécutées |

Pour connecter deux blocs, faites glisser une ligne depuis le point de sortie d'un bloc vers le point d'entrée du bloc suivant. Double-cliquez sur une ligne pour y ajouter une note.

## L'exemple de workflow

Notre workflow comporte cinq blocs. Il remplace "cake" par "festive cake", recherche un mot en double, signale les textes ne contenant pas "cake" et ajoute "Christmas" à la formule de vœux de fin d'année.

Les blocs sont connectés comme suit :

| De | Sortie | Vers |
| --- | --- | --- |
| 1. cake → festive cake | **Yes** | 2. Is festive cake true |
| 1. cake → festive cake | **No** | 3. Is cake false (Mark suspicious) |
| 2. Is festive cake true | **No** | 4. Validated test (Mark suspicious) |
| 4. Validated test | **Always** | 5. Holiday → Christmas Holiday! |

Les sorties **Yes** et **Always** du bloc 2, ainsi que les sorties du bloc 3, ne sont pas connectées. Le test 1 ci-dessous montre ce que cela implique.

## Les blocs un par un

### 1. cake → festive cake

Si le texte contient "cake", ce mot est remplacé par "festive cake". L'option Match case est activée : "Cake" et "CAKE" restent donc inchangés. **Yes** mène au bloc 2, **No** au bloc 3.

![Paramètres du bloc 1](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/03-block-1-settings.png)

### 2. Is festive cake true

Recherche un mot en double et le corrige. **No** mène au bloc 4.

![Paramètres du bloc 2](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/04-block-2-settings.png)

:::note
Dans cette capture d'écran, le mot est orthographié "fastive". Le bloc 1 écrit "festive" : cette condition ne correspond donc jamais. Dans votre propre workflow, utilisez `festive festive cake` et `festive festive` → `festive`.
:::

### 3. Is cake false

Un bloc sans condition. Il signale le résultat avec le motif "Cake not found :(". Ses sorties ne sont pas connectées.

![Paramètres du bloc 3](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/05-block-3-settings.png)

### 4. Validated test

Également sans condition. Il signale le résultat avec le motif "Checked! Please sync!". **Always** mène au bloc 5.

![Paramètres du bloc 4](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/06-block-4-settings.png)

:::note
Mark suspicious bloque la synchronisation vers la boutique. Ce motif n'est qu'un marqueur de test qui montre que le bloc s'est exécuté. Dans un workflow réel, rédigez un motif qui indique au relecteur ce qu'il doit vérifier.
:::

### 5. Holiday → Christmas Holiday!

Si le texte contient "Happy Holiday!", il est remplacé par "Happy Christmas Holiday!".

![Paramètres du bloc 5](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/07-block-5-settings.png)

## Générer un texte de test

Pour essayer le workflow vous-même, utilisez ce prompt dans votre flux. Il produit un texte similaire à celui de cette leçon, se terminant par "Happy Holiday!" afin que le bloc 5 ait quelque chose à remplacer.

```text
Write a short, warm, and appealing delivery message for the product. Mention that we will deliver the cake in beautiful gift packaging, together with a personal note, to the address provided by the customer.
The first part of the text should contain approximately 80 characters and describe the cake delivery in a natural, friendly, and elegant way.

Do not use capitalization randomly. Each variation should fit naturally into the sentence and context.
The final sentence must be exactly: "Happy Holiday!"
Keep the message friendly, festive, elegant, warm, and suitable for an online cakes shop.
```

Pour le test 1, remplacez "cake" dans le prompt par un autre produit, par exemple "sweets", afin que le texte ne contienne pas "cake".

## Test 1 : texte sans "cake"

**Chemin :** bloc 1 → No → bloc 3 → fin.

![Résultat sans cake, signalé "Cake not found :("](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/08-test-1-result.png)

- Le motif "Cake not found :(" montre que la branche **No** a fonctionné.
- Le bloc 3 n'a aucune condition, mais son action s'est exécutée. Un **bloc sans condition exécute ses actions**.
- "Happy Holiday!" n'a **pas** été remplacé, alors que le texte le contient. Les sorties du bloc 3 ne sont pas connectées : le bloc 5 n'a donc jamais été atteint. **Lorsqu'une sortie n'est pas connectée, le traitement s'arrête à cet endroit.**

## Test 2 : texte avec "cake"

**Chemin :** bloc 1 → Yes → bloc 2 → No → bloc 4 → Always → bloc 5.

![Résultat avec festive cake et Happy Christmas Holiday](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/09-test-2-result.png)

- "delicious **festive cake**" : le bloc 1 a remplacé le mot et a pris la branche **Yes**.
- Aucun mot en double : le bloc 2 a donc pris la branche **No**.
- Le motif "Checked! Please sync!" montre que le bloc 4 s'est exécuté.
- "Happy **Christmas** Holiday!" : le bloc 5 a été atteint via **Always** et a effectué son remplacement.

## Règles à retenir

| Règle | Ce que cela signifie pour vous |
| --- | --- |
| Yes / No déterminent le bloc suivant | Créez des chemins distincts pour les textes qui remplissent une condition et ceux qui ne la remplissent pas |
| Always continue après les actions | Utilisez-le pour passer à la vérification suivante, quel que soit le résultat du bloc |
| Un bloc sans condition exécute ses actions | Pratique pour une étape finale, comme un signalement pour relecture |
| Une sortie non connectée met fin au traitement | Connectez chaque chemin qui doit atteindre les blocs suivants, sans quoi ils seront ignorés |
| Mark suspicious n'arrête pas le workflow | Les blocs suivants s'exécutent toujours après un signalement |

:::tip
Avant d'enregistrer, suivez chaque chemin du doigt sur le canevas : « si le texte contient X, où va-t-il ensuite ? » Une ligne manquante est la raison la plus courante pour laquelle un bloc ne s'exécute jamais.
:::
