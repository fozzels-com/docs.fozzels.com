---
id: '103000369548'
title: >-
  4.4.1 Fonction Prevent Overlapping Content Generation. Fonction Global
  Prevent.
sidebar_position: 13
slug: >-
  /content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function
description: >-
  La fonctionnalité « Prevent double content generation with other Flows » est
  essentielle pour ne pas générer deux fois du contenu pour un même produit
  lorsqu'il peut appartenir à plusieurs Flows.
---

La fonctionnalité **"Prevent double content generation with other Flows"** est essentielle pour ne pas générer deux fois du contenu pour un même produit lorsqu'il peut appartenir à plusieurs Flows. Elle permet d'optimiser vos coûts d'utilisation de l'IA (tokens).

## 1\. La règle principale (paramètre global)

Il s'agit du **paramètre global** qui s'applique à tous vos Flows, sauf indication contraire. Vous le définissez une seule fois dans : `Profile` → `Settings` → `Content Flow`.

-   **Content was not generated yet :** la génération n'est autorisée **que si** aucun **autre** Flow n'a précédemment créé de contenu pour ce produit. C'est le contrôle le plus strict.

-   **Older than :** vous définissez une **durée limite** (par ex. 1 semaine). La génération est autorisée **si** le contenu existant a déjà été créé une fois par un autre Flow, mais **avant** la durée définie.
    ![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/Hgb-Xa4MFVO-KaMNOrtEtfyA1I8RT_6haA.png)

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/r-Ikv5eI5COJQMRwp9HXF1M2OOPYShjDXw.png)

## 1.1. Gérer les paramètres globaux (étapes de configuration)

**Votre objectif :** définir ou modifier la règle principale que suivront tous les Flows réglés sur `Inherit`.

**Étapes :**

1.  Accédez à **Global Settings** (`Profile` → `Settings` → `Content Flow`).

2.  Vous contrôlez la règle globale à l'aide de l'interrupteur **"Use duration limit"** :

-   **Pour activer la règle de durée (Older than) :** **activez l'interrupteur "Use duration limit"**, **saisissez la période requise** (par ex. 1 semaine) et cliquez sur **Save**.

-   **Pour définir la règle la plus stricte (Content was not generated yet) :** **désactivez l'interrupteur "Use duration limit"** et cliquez sur **Save**.

-   _Résultat :_ tous les Flows utilisant l'option **Inherit** appliqueront automatiquement cette nouvelle restriction.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/et0MwVwvnIfg8GhM-81qMk3ADOAD3_M02g.png)

##
2\. Remplacer la règle pour un Flow spécifique (scénarios pratiques)

Dans les paramètres de chaque Flow (section **4 Automation**), vous décidez s'il respecte les paramètres globaux ou s'il fait l'objet d'une exception :

-   Si vous souhaitez que le Flow ignore toutes les règles de duplication (même si la règle globale est active), consultez le scénario A.

-   Si vous souhaitez définir une limite de temps personnalisée (Override), consultez le scénario B.

-   Si vous souhaitez désactiver complètement toutes les règles de duplication globales, consultez le scénario C.

####
**Scénario A : autorisation de génération complète (sans restriction) (Turn Off)**

**Votre objectif :** vous souhaitez que le Flow ignore toutes les règles de duplication (même si la règle globale est active).

**Étapes :**

1.  Accédez aux paramètres du Flow souhaité (par ex. `Modify Product Flow`).

2.  Accédez à la section **4 Automation**.

3.  Dans le bloc **"Prevent double content generation with other Flows"**, sélectionnez l'option **Turn Off**.

4.  Enregistrez les modifications.

-   _Résultat :_ ce Flow générera du contenu, que du contenu issu d'autres Flows existe déjà ou non.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/M18xs-NWnNKM3KW_n1iAHroIpfoIW3ztfg.png)

####
**Scénario B : définir une limite de temps personnalisée (Override)**

**Votre objectif :** vous souhaitez que ce Flow ait une limite de temps **différente** du paramètre global.

**Étapes :**

1.  Accédez aux paramètres du Flow souhaité.

2.  Dans la section **4 Automation**, sélectionnez l'option **Override**.

3.  Saisissez la valeur de limite de temps requise (par ex. 1 heure) dans le champ qui apparaît.

4.  Enregistrez les modifications.

-   _Résultat :_ le Flow utilisera **uniquement** cette nouvelle règle individuelle.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/chc6WFPZCDobr_ICKuYawfRnxRTy36Oi3g.png)

**Scénario C : repartir de zéro (suppression de toutes les restrictions)**

**Votre objectif :** vous avez décidé de désactiver complètement toutes les règles de duplication globales, afin que tous les Flows puissent créer du contenu sans restriction de période.

**Étapes :**

1.  Accédez à **Global Settings** (`Profile` → `Settings` → `Content Flow`).

2.  **Désactivez l'interrupteur "Use duration limit"**.

3.  Cliquez sur le bouton **Save**.

4.  _Résultat :_ tous les Flows réglés sur **Inherit** s'exécuteront **sans restriction de duplication**, car la règle globale est de fait désactivée. Si vous souhaitez qu'un Flow réglé sur **Override** s'exécute lui aussi sans restriction, **passez-le sur Inherit** ou **désactivez la restriction avec Turn Off**.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/8rlkBmppY5nU7t7ZkdTHVSWoFeNWkYYOeA.png)

ou

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/_nWCPZi_Y8CUrS6FiIQZPgxQ0eip7jdWeg.png)
