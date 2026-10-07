---
id: '103000367979'
title: >-
  4.2.2. AI Configuration. Image Optimization (Resize) : justification et mise
  en œuvre.
sidebar_position: 7
slug: >-
  /content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation
description: >-
  La fonctionnalité Image Resize optimise automatiquement les images volumineuses
  afin de respecter les exigences techniques du système de génération par IA.
  Elle est activée par défaut dans tous les
---

La fonctionnalité **Image Resize** optimise automatiquement les images volumineuses afin de respecter les exigences techniques du système de génération par IA. Elle est activée par défaut dans tous les Flows, nouveaux et existants, afin d'éviter les échecs de génération et de réduire les coûts en Input Tokens.

**1\. Comment gérer la fonctionnalité Image Resize**

 La fonctionnalité se gère individuellement pour chaque Flow, à l'étape AI Configuration.

1.Accédez à l'écran de modification de l'un de vos Flows.

2\. Accédez à **Step 2: AI Configuration**.

3\. Faites défiler la page jusqu'à la section **Image Resize**.

4\. Gérez la fonctionnalité à l'aide de la case à cocher **"Enable Image Resize"**.

   ![](/img/kb/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/ZDcGWszXAjy6POiHs75NMe0FsBeIK14pfg.png)

    Quand l'utiliser :
**Enable (par défaut) :** recommandé pour tous les Flows dans lesquels vous utilisez des images produit pour l'analyse par IA ou la génération d'images.
Cela garantit la réussite de la génération et réduit les coûts en tokens.
**Disable :** si vous ne prévoyez pas d'utiliser l'analyse ou la génération d'images dans ce Flow précis. _Remarque : la désactivation peut entraîner une hausse des erreurs de génération de contenu si vous téléversez des images dépassant les limites._

**2\. Détails techniques et suivi des coûts**

Le mécanisme de redimensionnement ne s'active que lorsqu'une image dépasse des critères techniques précis.

    Critères d'activation
Le mécanisme de redimensionnement des images ne s'active que si _les deux_ conditions suivantes sont remplies :

1\. La taille du fichier **dépasse 2 Mo** (mégaoctets) ;

2\. **ET** la largeur ou la hauteur de l'image **dépasse 2048 pixels**.

Où la fonctionnalité s'applique

La fonctionnalité Image Resize intervient dans deux cas d'usage principaux :

        1. Image Usage (analyse) : images que vous ajoutez pour l'analyse par IA dans vos Flows.
        2. Image Flow (génération) : images envoyées avec le prompt pour générer un nouveau contenu.

Suivi des coûts et des dépenses

1\. Le coût du redimensionnement d'une image est de **0,0025 € par image**.

2\. Ces frais ne sont **facturés que** lorsque la fonctionnalité s'est _réellement activée_ (c'est-à-dire que l'image remplissait les critères techniques et a été redimensionnée).

3\. Vous pouvez suivre ces dépenses sur la page **Transactions** de votre compte.

## 4\. L'utilisation est également incluse dans votre e-mail quotidien « Your Fozzels content update ».

**3\. Principaux avantages**

La fonctionnalité Image Resize activée est un élément clé de fiabilité et d'économies :

1\. Prévention des générations échouées : vous êtes assuré d'**éviter les échecs** liés à la taille des images, ce qui vous fait gagner du temps.

2\. Réduction des coûts en Input Tokens : des images optimisées et plus légères nécessitent **moins d'Input Tokens** pour être traitées par le modèle d'IA, ce qui **réduit le coût global** de génération de contenu.

3\. Économie de vos crédits : en évitant les tentatives de génération échouées à cause de fichiers volumineux, vous ne payez que pour le contenu créé avec succès.

4\. Réduction automatique de la taille : le système effectue l'optimisation nécessaire **automatiquement** en arrière-plan, ce qui vous permet de vous concentrer sur la création de contenu.
