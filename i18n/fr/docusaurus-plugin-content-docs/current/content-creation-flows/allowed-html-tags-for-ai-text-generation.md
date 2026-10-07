---
id: '103000380488'
title: 4.7.3 Balises HTML autorisées pour la génération de texte par IA
sidebar_position: 20
slug: /content-creation-flows/allowed-html-tags-for-ai-text-generation
description: >-
  Cette fonctionnalité vous permet de définir précisément quelles balises HTML
  peuvent être utilisées et conservées dans le contenu généré par l'intelligence
  artificielle. Cette fonction
---

Cette fonctionnalité vous permet de définir précisément quelles balises HTML peuvent être utilisées et conservées dans le contenu généré par l'intelligence artificielle. Elle est active pour les attributs pour lesquels l'option **"Allow HTML"** est activée.

![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/2zl4WJfftt48X66FBs1W8zAn4rbNhhqk1A.png)

En définissant cette liste, vous ouvrez de nombreuses possibilités pour générer du contenu avec une mise en forme spécifique ou pour intégrer des éléments multimédias directement dans le texte généré.

![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/KsO3jFsp7Ytx48uE5alhlIVzvjfJd8Trzw.png)

## Comment le système traite les balises

Le système fonctionne comme un filtre de sécurité :

-   Il supprime automatiquement toutes les balises qui **ne figurent pas** dans la liste des balises autorisées.

-   Cela garantit que seules les balises nécessaires et sûres s'affichent correctement sur votre frontend.

## Libérer le potentiel créatif

Définir les balises autorisées signifie que vous n'êtes plus limité à la mise en forme de texte de base. Vous pouvez demander à l'IA de créer des structures complexes en ajoutant des éléments dynamiques et visuels directement dans la description de votre produit :

-   **Contenu interactif :** intégrez des vidéos YouTube (à l'aide de la balise `iframe`) directement dans la description du produit.

-   **Visuels enrichis :** intégrez des galeries d'images ou des sliders à l'aide de la balise `img` placée dans la structure requise (`div`, `section`).

-   **Structure améliorée :** créez des éléments interactifs, tels que des accordéons pour les sections FAQ, à l'aide des balises `details` et `summary` (qui figurent dans la liste par défaut) ou de balises de structure personnalisées.

-   **Toute structure :** vous pouvez générer pratiquement n'importe quelle structure HTML prise en charge par votre frontend, simplement en autorisant les balises nécessaires.

### 1\. Balises HTML disponibles par défaut

Une liste complète de balises HTML standard est disponible par défaut et peut être utilisée immédiatement :

-   `a`, `abbr`, `acronym`, `article`, `aside`, `b`, `blockquote`, `br`, `cite`, `code`, `dd`, `details`, `div`, `dl`, `dt`, `em`, `footer`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hr`, `i`, `li`, `mark`, `ol`, `p`, `q`, `s`, `section`, `span`, `strong`, `summary`, `table`, `td`, `tr`, `u`, `ul`.

### 2\. Ajouter vos propres balises HTML (Add Your Own HTML Tags)

Si vous avez besoin de balises pour intégrer une vidéo, des images ou toute autre mise en forme non standard, vous pouvez les ajouter à cette liste.

**Comment ajouter des balises personnalisées :**

1.  Saisissez dans le champ le nom de la balise que vous souhaitez autoriser (par exemple `iframe`, `img`, `video`).
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/17FvSVXKcc6eW4AU0v9BhkCkRR-NUtg57w.png)

2.  Appuyez sur Entrée (si nécessaire, supprimez-la en cliquant sur le bouton « x »).

3.  Cliquez sur le bouton **Save**.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/kMmnyMamV-Ef9IEE1_naDJ0llLk7bnh5YA.png)

> **À savoir !** Ce bloc sert à ajouter des balises supplémentaires non standard, indispensables pour concrétiser votre vision créative sur le frontend. N'ajoutez que les balises nécessaires afin de garantir la sécurité du code.
