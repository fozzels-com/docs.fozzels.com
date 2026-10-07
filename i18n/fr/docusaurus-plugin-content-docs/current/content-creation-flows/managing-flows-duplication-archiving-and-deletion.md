---
id: '103000367977'
title: "4.1.3. Gestion des Flows : duplication, archivage et suppression."
sidebar_position: 5
slug: /content-creation-flows/managing-flows-duplication-archiving-and-deletion
description: >-
  Ce guide détaille les méthodes de gestion des Content Flows existants, en
  particulier la duplication pour gagner du temps de configuration, ainsi que la
  maintenance générale des flux (archivage et suppr
---

Ce guide détaille les méthodes de gestion des Content Flows existants, en particulier la duplication pour gagner du temps de configuration, ainsi que la maintenance générale des flux (archivage et suppression).
La duplication est une fonctionnalité essentielle qui fait gagner du temps : elle permet de cloner un Content Flow existant, avec l'ensemble de ses paramètres complexes, de ses filtres et de ses prompts, et de l'adapter rapidement à une autre langue ou à une autre boutique. L'**archivage** permet de retirer temporairement des flux de la liste active en vue d'une utilisation ultérieure éventuelle, tandis que la **suppression** les retire définitivement.

### 1\. Dupliquer un Content Flow

La duplication vous permet de réutiliser des configurations complètes (filtres, prompts, paramètres d'automatisation) pour créer rapidement de nouveaux flux, généralement pour d'autres boutiques ou langues cibles.

#### 1.1. Processus de duplication

1.  **Accédez** au menu de navigation principal et **sélectionnez** **Flows**.

2.  **Repérez** le Flow que vous souhaitez dupliquer (actif ou inactif, exécuté ou non).

3.  **Cliquez** sur le menu d'actions (trois points **...**) à côté du nom du flux.

4.  **Sélectionnez** **"Duplicate"** dans le menu déroulant.

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/SQ3APzXi6qMf8Vz9_U8bAVr6_tdKhvNCRg.png)

####
1.2. Sélection de la boutique (le cas échéant)

-   **Intégration d'une seule boutique :** si une seule boutique est intégrée, le Flow dupliqué est créé immédiatement.

-   **Intégration de plusieurs boutiques :** si plusieurs boutiques sont liées, une fenêtre contextuelle s'affiche. Vous devez **sélectionner la boutique cible** pour laquelle le nouveau Flow sera créé, puis **cliquer sur "Duplicate"**.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/qtwYWP_c4W7aBzd49RLMNik4Pgdse79-yQ.png)

#### 1.3. Convention de nommage du Flow

-   Le texte **(duplicate)** est automatiquement ajouté au nom du Flow dupliqué afin de le distinguer clairement du Flow d'origine.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/LfO44gQa0Ba6tGFg-nMgCyE6mCfT_c99MQ.png)

#### 1.4. Paramètres hérités (ce qui est cloné)

Le processus de duplication copie _tous_ les paramètres du Flow d'origine, y compris le texte du prompt, les filtres de produits, l'attribut cible, la configuration de l'IA et même les **paramètres d'automatisation (y compris la case d'activation)**.

-   **Action requise :** comme le paramètre d'activation est cloné, il est **obligatoire de contrôler et de vérifier tous les paramètres** du nouveau Flow avant de l'exécuter.

#### 1.5. Cas d'usage : gain de temps pour une configuration multi-boutiques

La duplication est précieuse pour les configurations multi-boutiques (par exemple, créer un flux pour la boutique NL à partir de la boutique DE) : elle fait gagner des heures de configuration, car seuls des ajustements mineurs du prompt (comme le changement de langue) et la vérification des filtres sont nécessaires.

### 2\. Archiver un Content Flow

L'archivage vous permet de masquer temporairement un Flow de la liste active principale, généralement pour les flux terminés ou en pause, sans perdre définitivement ses paramètres ni les données générées.

1.  **Accédez** à la liste principale **Flows**.

2.  **Cliquez** sur le menu d'actions (trois points **...**) à côté du nom du flux.

3.  **Sélectionnez** **"Archive"** dans le menu déroulant.

4.  Les Flows archivés sont déplacés vers un emplacement distinct, accessible via le bouton **"Archive"** de la page principale Flows.

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/jhuJATuiVcYqLgL-2-ggTsKKXGOIFOj3fQ.png)

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/PRkxwqVNLhu-MtRt9BjGFa7Gg_0W_j20Ww.png)

#### 2.1. Gérer les Flows archivés

-   **Restore :** dans la section **Archived flows**, vous pouvez remettre un flux archivé dans la liste active principale en cliquant sur **"Restore"**.

-   **Delete :** vous pouvez également choisir de supprimer définitivement un flux archivé en cliquant sur **"Delete"**.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/J17t4SXZjsrIDu1Gi7xnOOzaIieIR_OoSQ.png)

### 3\. Supprimer un Content Flow

La suppression retire définitivement un Flow du système.

1.  **Accédez** à la liste principale **Flows**.

2.  **Cliquez** sur le menu d'actions (trois points **...**) à côté du nom du flux.

3.  **Sélectionnez** **"Delete"** dans le menu déroulant.

4.  **Confirmez** la suppression dans la fenêtre contextuelle qui s'affiche.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/XzaWMHcYgI8ml6u0QTYw0O9LE9UbbWrakg.png)

-   **Action définitive :** une fois un Flow supprimé, il **ne peut pas être restauré**. Si vous pensez avoir de nouveau besoin du Flow à l'avenir, utilisez plutôt la fonction **Archiving**.
