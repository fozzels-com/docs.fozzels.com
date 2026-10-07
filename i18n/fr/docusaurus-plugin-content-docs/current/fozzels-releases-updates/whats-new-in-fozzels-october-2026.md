---
title: "Nouveautés de Fozzels : octobre 2026"
sidebar_position: 18
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026
description: >-
  Renseignez jusqu'à 13 attributs dans un seul Flow, configurez des règles de
  qualité automatiques avec les Workflows, créez vos prompts dans un nouvel
  éditeur avec aperçu en direct et protégez votre boutique des erreurs de l'IA
  grâce à de nouveaux garde-fous.
keywords:
- flux de travail
---

Cette mise à jour a pour but de vous faire gagner du temps et de vous donner plus de contrôle sur votre contenu IA. Vous pouvez désormais renseigner jusqu'à 13 attributs dans un seul Flow, configurer des règles de qualité automatiques avec les Workflows et créer vos prompts dans un nouvel éditeur avec aperçu en direct.

Nous avons également ajouté tout un ensemble de garde-fous qui empêchent les erreurs de l'IA d'atteindre votre boutique. Voici tout ce qui est nouveau et comment commencer à l'utiliser.

## Points forts

### Renseignez jusqu'à 13 attributs dans un seul Flow

Vous n'avez plus besoin d'un Flow distinct pour chaque attribut. Un seul Flow peut désormais renseigner un attribut principal plus jusqu'à 12 autres, par exemple une description, une description courte, un méta-titre et une méta-description. Tous les attributs sont générés ensemble dans une seule requête IA par produit : vos données produit et vos images ne sont donc envoyées qu'une seule fois, et les textes s'accordent naturellement entre eux.

![Additional attributes to fill : ajoutez jusqu'à 12 attributs, chacun avec sa propre instruction](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/01-additional-attributes.png)

Dans la Batch List, chaque attribut dispose de sa propre colonne : vous relisez ainsi tous les résultats d'un produit sur une seule ligne.

![Batch List avec une colonne pour chaque attribut généré](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/02-batch-list-columns.png)

**Comment l'utiliser :** ouvrez un Flow, allez dans Flow Selection & Prompt, puis, sous Additional attributes to fill, ajoutez les attributs dont vous avez besoin avec une instruction pour chacun. [Lire le guide](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)

### Workflows : règles de qualité automatiques

Les Workflows vérifient et modifient chaque résultat généré avant qu'il n'arrive dans votre boutique. Vous définissez une seule fois de simples règles « IF / THEN », et Fozzels les applique à chaque nouveau résultat :

- **Replace text :** remplacez ou supprimez des mots et des expressions, par exemple pour conserver la cohérence des termes de votre marque.
- **Truncate :** coupez un texte à une longueur maximale en conservant les mots entiers.
- **Mark suspicious :** mettez un résultat en attente de vérification manuelle, avec un motif visible par votre équipe.

![Choix d'une action pour un bloc de workflow : Truncate, Mark suspicious ou Replace text](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/03-workflow-actions.png)

Vous pouvez enchaîner plusieurs Workflows dans un même Flow, et un résultat signalé n'est jamais synchronisé tant que quelqu'un ne l'a pas vérifié.

![Éditeur de workflow avec des blocs IF / THEN enchaînés](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/04-workflow-editor.png)

**Comment l'utiliser :** allez dans Home → Workflows, créez un workflow, puis associez-le à un Flow à l'étape Automation. [Lire le guide](/content-creation-flows/workflows-lesson-1-getting-started/)

### Un nouvel éditeur de prompts avec aperçu en direct

Créer un prompt est désormais beaucoup plus simple. Les attributs et les conditions apparaissent sous forme de blocs clairs, et l'aperçu en direct affiche le prompt exact pour un vrai produit pendant que vous tapez : vous n'avez plus besoin d'enregistrer puis d'ouvrir un aperçu pour le vérifier. Tapez / ou faites glisser un attribut depuis le panneau pour ajouter des données produit.

Besoin d'aide ? Demandez à Jane, notre assistante IA : elle peut rédiger et ajuster des prompts pour vous directement dans l'éditeur. [Lire le guide](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)

![Le nouvel éditeur de prompts avec aperçu en direct, snippets et Jane insérant un prompt prêt à l'emploi](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/05-prompt-editor.png)

### Snippets de prompt réutilisables

Enregistrez les parties de vos prompts que vous utilisez dans de nombreux Flows, comme le ton de votre marque ou une liste d'attributs regroupés par thème. Ajoutez un snippet à n'importe quel prompt en un clic. Lorsque vous mettez à jour un snippet, tous les Flows qui l'utilisent sont mis à jour eux aussi : vous n'avez donc plus à modifier les Flows un par un.

### Des textes de catégorie qui connaissent leurs produits

Les Category Flows peuvent désormais inclure dans le prompt les produits de la catégorie, avec leurs noms, liens, slugs et autres attributs. Vos descriptions de catégories peuvent ainsi mentionner de vrais produits et inclure des liens fonctionnels vers les pages produit, ce qui est excellent pour le SEO et aide les acheteurs à trouver ce qu'ils cherchent.

### Nouveaux modèles d'IA : GPT-6 Astra et Claude Opus 5.5

Les modèles les plus récents et les plus performants sont désormais disponibles dans vos Flows. GPT-6 Astra prend également en charge la recherche web, y compris dans la Sandbox, et peut donc ajouter des informations utiles qui ne figurent pas dans votre catalogue. Les modèles premium coûtent plus cher par génération ; vous pouvez voir le prix sur chaque vignette de modèle à l'étape AI Configuration.

![Claude Opus 5.5](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/06-claude-opus-5-5.png)

## Un contenu IA plus sûr

Les modèles d'IA inventent parfois des faits, devinent l'apparence d'un produit ou laissent des notes dans le texte. Nous avons ajouté des garde-fous à chaque étape, afin que seul un contenu fiable arrive dans votre boutique.

- **Confidence threshold.** Définissez-le par Flow à l'étape Automation, de 0.1 à 1.0. L'IA indique son degré de certitude pour chaque valeur, et tout ce qui se situe sous votre seuil attend votre relecture au lieu d'être envoyé automatiquement. Laissez le champ vide pour le désactiver.

    ![Confidence threshold à l'étape Automation](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/07-confidence-threshold.png)

- **Détection plus fine du contenu suspect.** La liste par défaut de mots et d'expressions suspects est plus longue, et de nouveaux motifs intégrés reconnaissent la forme typique d'un commentaire d'IA, comme "Here is the…" ou "Final check", même dans des formulations que le modèle n'avait jamais utilisées auparavant. Vous pouvez activer ou désactiver des motifs et ajouter vos propres mots dans les paramètres de l'intégration.

    ![Mots suspects et motifs intégrés dans les paramètres de l'intégration](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/08-suspicious-patterns.png)

- **Une vérification des fonctionnalités désactivées.** Lorsque vous enregistrez un Flow, Fozzels vérifie si votre prompt a besoin d'une fonctionnalité désactivée, par exemple la recherche web ou les images produit. Un avertissement vous indique ce qui manque, avec un bouton pour ouvrir AI Configuration ou demander à Jane.

    ![Avertissement lorsque votre prompt nécessite la recherche web ou des images produit désactivées](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/09-disabled-features-warning.png)

- **Pas de devinettes sans images.** Si votre Flow utilise les images produit mais qu'un produit n'en a aucune, ou qu'elles sont illisibles, ce produit est ignoré au lieu que l'IA devine.
- **Uniquement des modèles fiables.** Nous avons supprimé les modèles obsolètes et ceux qui pouvaient laisser leur raisonnement dans vos textes.
- **Instructions intégrées renforcées.** Chaque Flow inclut désormais des instructions générales plus strictes qui maintiennent l'IA sur les faits et sur le format demandé.
- **Chaque Flow nécessite un modèle d'IA.** Un Flow sans modèle ne peut plus être enregistré ni démarré, de sorte que rien n'échoue en silence.
- **Messages d'erreur clairs.** Si une génération échoue, vous voyez désormais la raison réelle au lieu de "Unknown error occurred", afin de savoir ce qu'il faut corriger.

## Image Flows

- **Dupliquer un Image Flow.** Copiez un Image Flow existant avec tous ses préréglages, scènes, logo et prompt, et ne modifiez que ce qui diffère.
- **Une image produit supplémentaire pour tout le Flow.** Sous Additional product image for the whole flow, choisissez une position d'image, par exemple la 2e image. Fozzels l'ajoute à chaque produit en plus de l'image principale : l'IA voit ainsi davantage d'angles et reproduit plus fidèlement la coupe, l'imprimé et la texture. Les produits qui ont moins d'images utilisent uniquement l'image principale.

    ![Additional product image for the whole flow : choisissez la position de l'image](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/10-additional-product-image.png)

- **Run Now respecte votre limite quotidienne.** Les exécutions manuelles comptent désormais dans le nombre de produits par jour du Flow. Si la limite est déjà atteinte, un avertissement vous indique quoi faire : augmenter le nombre à l'étape Automation ou exécuter le Flow plus tard. Les générations de test gratuites dans l'aperçu ne sont pas comptabilisées.

## Catalogue et Batch List

- **Actualiser les produits sélectionnés.** Vous avez modifié quelques produits dans votre boutique ? Récupérez à nouveau uniquement ces produits au lieu de tout le catalogue, et générez immédiatement du nouveau contenu.

    ![Actions → Repull Selected Products dans Manage Products](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/11-repull-selected-products.png)

- **Jeux de filtres enregistrés.** Enregistrez une fois une combinaison de filtres, par exemple "Women - empty descriptions", via Filter set → Save as new. Appliquez-la en un clic dans les intégrations, le catalogue et les Flows, et ajoutez des conditions supplémentaires si nécessaire.

    ![Enregistrer une combinaison de filtres via Filter set → Save as new](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/12-filter-set-save.png)

    ![Un jeu de filtres enregistré, prêt à être appliqué en un clic](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/13-filter-set-saved.png)

- **Choisissez les colonnes de votre Batch List.** Vous l'avez demandé, nous l'avons créé. Définissez n'importe quel attribut pour qu'il s'affiche toujours dans la Batch List grâce à une case à cocher dans ses paramètres, et choisissez les attributs du prompt à afficher pour chaque Flow sous Column visibility.

    ![Column visibility dans la Batch List](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/14-column-visibility.png)

- **Rapports enrichis.** Ajoutez des colonnes supplémentaires avec les attributs générés à vos rapports exportés, prêts à être partagés avec votre équipe.
- **Relecture plus fluide.** La fenêtre de relecture défile désormais automatiquement.
- **Activation claire des Flows.** Lorsque vous activez un Flow, Fozzels indique exactement ce qui sera activé et quels autres Flows reprendront.

## Jane et votre compte

- **Jane connaît le nouvel éditeur.** Notre assistante IA fonctionne désormais avec le nouvel éditeur de prompts et les Flows multi-attributs. Demandez-lui de lire, d'écrire ou de mettre à jour vos prompts.
- **E-mail de facturation distinct.** Envoyez les factures et les notifications de solde à votre adresse financière ou comptable au lieu de votre e-mail de connexion.
- **Fuseau horaire selon le pays.** Les nouveaux comptes reçoivent automatiquement le fuseau horaire de leur pays, afin que les importations s'exécutent à la bonne heure locale.
- **Aide à la connexion.** Si une intégration ne parvient pas à se connecter, par exemple à cause d'un pare-feu, Fozzels vous renvoie vers une page du Help Center qui explique ce qu'il faut autoriser.

## Mises à jour des intégrations

**Magento 2**

- **Contenu de blog et CMS (première étape).** Fozzels importe désormais votre contenu de blog et CMS avec ses attributs et l'affiche dans un catalogue et une page de marque distincts. La génération de contenu IA pour les blogs et les pages CMS arrivera dans une prochaine mise à jour.

    ![Manage Blog : pages CMS Magento 2 importées](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/15-manage-blog.png)

- **Filtrage par statut et quantité de stock**, pour vous concentrer sur les produits en stock, par exemple uniquement ceux dont plus de 10 articles sont disponibles. Activez Pull stock status et Pull stock quantity dans les paramètres de votre intégration.

    ![Pull stock status et stock quantity dans les paramètres de l'intégration Magento 2](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/16-stock-settings.png)

- **Synchronisation des images vers All Store Views.** Les résultats des Image Flows peuvent désormais être synchronisés vers la portée All Store Views, de sorte qu'une seule synchronisation met à jour toutes les vues de boutique.

**WooCommerce**

- **Textes alternatifs pour les images produit**, pour un meilleur SEO et une meilleure accessibilité.

**Salesforce**

- **Filtrage du stock et conditions de récupération** au niveau de l'intégration, afin de n'importer que les produits dont vous avez besoin.

**CSV / Raw File**

- **Fichiers plus volumineux** désormais pris en charge grâce à la pagination.

**BizzLayer**

- **Les produits retirés de votre flux** ne sont plus utilisés pour la génération de contenu.

## Corrections

- Les caractères spéciaux tels que & dans les noms de produits s'affichent désormais correctement dans votre boutique.
- Le nombre de produits dans les Flows correspond désormais à votre sélection réelle.
- La progression de la synchronisation des Flows ne compte plus les produits supprimés.

    ![Progression du Flow indiquant séparément les produits retirés du catalogue](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/17-flow-progress.png)

- Les filtres des anciens Flows transmettent désormais correctement les produits à la Batch List.
- L'aperçu du prompt et du produit se met à jour automatiquement lorsque vous modifiez les filtres du Flow.
- Les Image Flows actifs ne s'affichent plus comme inactifs.
- La génération d'images ne s'arrête plus en cas d'images volumineuses ou indisponibles.

Des questions sur l'une de ces mises à jour ? Demandez à Jane dans l'application.
