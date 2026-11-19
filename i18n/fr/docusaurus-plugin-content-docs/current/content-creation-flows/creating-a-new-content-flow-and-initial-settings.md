---
id: '103000367976'
title: '4.1.2. Créer un Content Flow : les six étapes'
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Comment configurer un Content Flow en six étapes guidées : sélectionnez la
  boutique et les champs, construisez le prompt à partir de blocs, réglez
  chaque champ, testez sur des produits réels et lancez le Flow. Également : la
  page du Flow, la relecture du contenu généré et le Brand Profile.
keywords:
- flux de contenu
---

Un Content Flow indique à Fozzels sur quels produits travailler, quels champs remplir, quel modèle d'IA utiliser et quelles instructions lui donner. Fozzels génère ensuite le contenu, le met à jour et l'envoie à votre boutique.

Vous configurez un Content Flow en six étapes guidées. Vous construisez le prompt à partir de blocs que vous activez ou désactivez, et la voix de votre marque se trouve à un seul endroit : le [Brand Profile](#brand-profile). Cet article explique chaque étape, de la sélection d'une boutique à la génération de contenu pour de nombreux produits.

## Six étapes vers un Flow terminé

1. **Store.** Sélectionnez l'intégration, le site web et la vue de boutique pour lesquels vous générez du contenu.
2. **What and with what?** Sélectionnez les champs à générer et voyez combien de produits ont déjà une valeur dans ces champs. À cette étape, vous sélectionnez aussi vos produits.
3. **Enrich the text.** Sélectionnez un modèle d'IA et construisez un prompt commun à partir de blocs : qui écrit, pour qui, sur quel ton et d'où viennent les faits.
4. **Fields.** Définissez la longueur, la structure et le format de chaque champ.
5. **Test.** Générez des textes pour des produits réels et regardez les scores avant de générer du contenu pour de nombreux produits.
6. **Launch.** Définissez combien de produits Fozzels traite chaque jour et si vous approuvez les textes avant que Fozzels ne les publie.

Les six étapes sont toujours à gauche de la fenêtre du Flow. Une étape terminée est verte, et l'étape en cours est bleue. Le bouton **Next** devient actif uniquement quand vous avez rempli tous les paramètres obligatoires de l'étape en cours.

:::tip
Remplissez votre [Brand Profile](#brand-profile) avant de créer votre premier Flow. Chaque nouveau Flow démarre alors avec la voix de votre marque.
:::

### Étape 1. Store

Sélectionnez trois éléments :

- **Integration** : votre boutique ou votre PIM.
- **Website**.
- **Store view** : la langue des textes.

Tous les paramètres que vous définissez après cette étape s'appliquent à cette combinaison.

Sous les champs, Fozzels affiche votre sélection et le nombre de produits qu'elle contient. Si la boutique dont vous avez besoin n'est pas dans la liste, connectez-la d'abord sous **Integrations**.

![Étape 1 : la sélection de l'intégration, du site web et de la vue de boutique](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-01-step-1-store.png)

### Étape 2. What and with what?

Sélectionnez un ou plusieurs types de contenu. Chaque carte affiche le pourcentage de vos produits qui ont déjà une valeur dans ce champ. Vous voyez ainsi immédiatement où se trouvent les plus grandes lacunes.

- **Title** : des noms de produits clairs, que les acheteurs trouvent facilement.
- **Description** : le texte produit complet, qui vend le produit.
- **SEO Title** : le titre que Google affiche.
- **SEO Description** : le texte court dans les résultats de recherche, qui incite les acheteurs à cliquer.
- **Other attribute** : un attribut de votre boutique, comme la couleur, la matière ou les dimensions.

![Étape 2 : types de contenu avec taux de remplissage](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-02-step-2-content-types.png)

Dans la fenêtre **Add another attribute**, vous pouvez chercher un attribut par nom ou par code. Les attributs qui ont le taux de remplissage le plus élevé sont en haut. Le type de l'attribut vient de votre boutique : un nombre, une valeur d'une liste ou du texte. L'IA écrit ainsi le bon type de valeur.

![La fenêtre Add another attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-03-add-another-attribute.png)

Les textes ALT des images ont leur propre mode de Flow. Un tel Flow crée uniquement des textes ALT et a ses propres règles. Pour plus d'informations, consultez [Génération de textes alternatifs d'images pour Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/).

Tous les champs que vous sélectionnez s'affichent dans le bloc **You are creating**. Le premier champ est la base (**BASE**). Les autres champs l'utilisent comme point de départ. Pour changer l'ordre, faites glisser un champ par sa poignée à gauche. Vous donnez les instructions de chaque champ à l'étape 3.

Plus bas dans cette étape, vous sélectionnez les produits du Flow.

![Le bloc You are creating avec les champs sélectionnés](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-04-you-are-creating.png)

### Étape 3. Enrich the text

À cette étape, vous construisez le prompt : l'instruction que l'IA reçoit pour chaque produit. Le prompt est composé de blocs. Vous définissez d'abord le style du texte. Vous définissez ensuite les sources de l'IA et ce que le texte doit contenir. Sous les blocs, vous voyez le prompt.

Quand vous ouvrez l'étape, Fozzels prépare une proposition pour chaque champ. Fozzels définit la base : la structure, la langue et le bon type pour chaque champ. Cliquez sur **Load brand profile** pour charger un profil enregistré, ou sur **Save as brand profile** pour enregistrer les paramètres de ce Flow comme nouveau profil.

**Quel modèle d'IA ?** Sélectionnez d'abord le fournisseur, puis le modèle. Le modèle détermine la qualité et le prix de vos textes. Pour chaque modèle, vous voyez le coût pour 1 000 tokens : pour le texte que l'IA lit (input) et pour le texte qu'elle écrit (output). Des labels comme **Recommended**, **Balanced** ou **Fast & low cost** vous aident à choisir. Le modèle détermine aussi si les blocs **Look at photos** et **Search the internet** sont disponibles. Vous pouvez changer de modèle à tout moment. Vous n'avez pas à configurer le Flow de nouveau.

![Étape 3 : le prompt de base et la sélection du modèle d'IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-05-step-3-ai-model.png)

**Le style du texte.** Ces paramètres s'appliquent à toutes les sections du texte : qui écrit, pour qui, sur quel ton et avec quelle longueur. Dans le bloc **Role of the AI**, sélectionnez un rôle en un clic. Pour changer le nom et la description d'un rôle, cliquez sur l'icône de crayon. La description indique qui écrit, avec quelle expertise et dans quel but.

![Modifier un rôle : nom et description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-06-edit-role.png)

Cliquez sur **Make default** pour utiliser l'option sélectionnée dans tous les nouveaux Flows. L'option reçoit alors une étoile et le label "Default for new flows", et un lien vers le Brand Profile s'affiche à côté. Pour annuler, cliquez sur **Remove from defaults**. **Make default** fonctionne de la même manière pour le modèle, le public cible, le ton et les autres blocs.

![Un rôle avec le label Default for new flows](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-07-role-default.png)

Les blocs **Target audience** et **Tone of voice** fonctionnent de la même manière que le rôle. Activez-les avec l'interrupteur. Sélectionnez ensuite une option enregistrée en un clic, ou créez une nouvelle option. Sous les boutons, vous voyez la description complète que l'IA reçoit. Si vous ne sélectionnez pas de ton, l'IA écrit dans un style neutre et informatif.

![Les blocs Target audience et Tone of voice dans un Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-08-audience-tone.png)

#### Principes de neuromarketing

Les quatre principes sont **Processing fluency**, **Simulation**, **Congruence** et **Trust**. Ils viennent d'une recherche en neuromarketing menée avec l'Université Érasme de Rotterdam. Activez les principes dont vous avez besoin, et l'IA les applique dans chaque texte. La section [Brand Profile](#neuromarketing-principles-in-the-brand-profile) explique l'effet de chaque principe.

Vous ne savez pas quels principes utiliser ? Cliquez sur **Fozzels suggestions**. L'IA de Fozzels examine les produits que vous avez sélectionnés et vous indique les principes qui leur conviennent. Le principe recommandé reçoit le label "advice". Cliquez sur **Apply advice** pour l'utiliser. Cette fonction consomme des tokens.

![Principes de neuromarketing avec les conseils de Fozzels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-09-neuromarketing.png)

#### D'où viennent les faits

Ici, vous définissez les sources que l'IA peut utiliser : les attributs de votre propre système, les informations des photos et les informations sur Internet. L'IA utilise uniquement les sources que vous activez. Elle n'invente pas de faits.

**Attributes from your store.** Les attributs de votre boutique, de votre ERP ou de votre PIM que l'IA utilise comme données d'entrée. Fozzels sélectionne déjà les attributs qui ont un taux de remplissage élevé. Cliquez sur la croix pour retirer un attribut, et ajoutez les attributs qui manquent. Le pourcentage indique pour combien de produits le champ a une valeur. La barre de couleur indique si le champ est rempli, partiellement rempli ou vide. Fozzels ignore les champs vides.

![Le bloc Attributes from your store](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-10-attributes-from-store.png)

**Look at photos.** Vos photos peuvent montrer des informations qui ne sont pas dans vos champs, par exemple la coupe, la fermeture ou un imprimé. L'IA lit ces informations dans les images. Elle les utilise dans le texte ou pour remplir un champ.

- **How many photos per product?** De 1 à 4, ou toutes (5 au maximum). Plus de photos donnent plus de détails, mais coûtent plus cher.
- **What should the AI look at?** Indiquez les détails que l'IA doit examiner, par exemple le col, les poches et la capuche.
- **When a product has no image yet.** Fozzels attend l'image puis génère automatiquement, ou il ignore le produit.
- **Enable Image Resize.** Fozzels réduit automatiquement les grandes images. Cela évite les générations échouées et économise des crédits. Cela coûte 0,025 € par image.
- **Fozzels suggestions.** L'IA examine quelques photos et propose des détails visibles importants pour le texte. Ajoutez-les en un clic.

![Le bloc Look at photos](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-11-look-at-photos.png)

**Search the internet.** Parfois, l'information dont vous avez besoin n'est ni dans votre boutique ni dans les photos, par exemple les caractéristiques du fabricant, des détails sur la matière ou des avis. Fozzels la cherche alors sur Internet. L'IA utilise uniquement les faits qui correspondent à vos données produit.

- **What does the AI search with?** Les champs qui identifient un produit : en général la marque, le nom et le GTIN. Les noms de ces champs sont différents pour chaque intégration.
- **Which information do you want the AI to look up online?** Les sujets à chercher, comme les avis, la durabilité ou les conseils de taille. **Fozzels suggestions** vous indique les sujets utiles.

![Le bloc Search the internet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-12-search-internet.png)

Fozzels calcule le coût de **Look at photos** et de **Search the internet** pour chaque produit. Vous voyez ces coûts à l'étape **Test**.

#### Blocs de construction : compléter le prompt

Ces blocs sont facultatifs. Activez un bloc, remplissez-le et enregistrez-le. Fozzels le place ensuite à une position fixe dans le prompt.

**Keywords.** Les termes de recherche avec lesquels les acheteurs doivent trouver le texte. Saisissez-les vous-même, ou cliquez sur **Fozzels suggestions** pour obtenir des mots-clés pour la catégorie de produits. Une connexion à votre outil SEO sera bientôt disponible. Fozzels place les mots-clés dans le titre et dans le premier paragraphe, puis dans le reste du texte. Si vous ne sélectionnez pas de mots-clés, Fozzels choisit un terme pour chaque produit à partir de son titre et de sa catégorie.

![Le bloc Keywords dans un Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-13-keywords.png)

**My snippets.** Vos propres instructions, que vous pouvez réutiliser dans différents Flows, par exemple une dernière phrase fixe, une règle sur les tailles ou une liste de noms de marques qui doivent toujours avoir la bonne orthographe. Un snippet s'applique au texte complet, dans tous les champs du Flow.

#### Règles, vérifications et consignes pour le texte complet

Ici, vous définissez ce que l'IA doit toujours faire ou ne jamais faire, dans toutes les parties du texte. Vous évitez ainsi des erreurs que vous devriez sinon corriger dans chaque texte.

**Do not mention.** Les mots et les sujets qui ne doivent pas figurer dans le texte : prix, remises, noms de concurrents, affirmations comme "le meilleur" ou "le moins cher". L'IA ne les utilise pas, même s'ils figurent dans vos sources.

![Les blocs My snippets et Do not mention](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-14-snippets-do-not-mention.png)

**Guidelines and check rules · Fozzels standard.** Les règles standard que Fozzels applique à chaque texte. Elles sont activées dans chaque nouveau Flow. Vous pouvez désactiver une règle qui ne convient pas à vos textes.

- Ne pas mentionner les prix, les remises ou les délais de livraison.
- Utiliser uniquement des faits issus des données produit, des photos ou des résultats de recherche.
- Ne pas utiliser de superlatifs ni d'affirmations comme "le meilleur" ou "le moins cher".
- Reprendre exactement les tailles, les matières et les noms de marques des données produit.
- Utiliser uniquement la mise en forme définie dans les paramètres de structure.
- Utiliser la même forme d'adresse et la même orthographe dans tout le texte.

Pour ajouter vos propres règles, utilisez **Your own rules**, par exemple "toujours mentionner le pays de fabrication".

![Règles standard de Fozzels et vos propres règles](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-15-standard-rules.png)

#### Champs supplémentaires : des consignes courtes, pas des prompts séparés

Si vous avez sélectionné plusieurs champs à l'étape 2, l'IA remplit les champs supplémentaires dans la même requête, avec le même prompt principal. Le rôle, le public cible, le ton, les sources et les règles s'appliquent automatiquement à ces champs. Vous n'écrivez donc pas de prompt séparé pour chaque champ. Vous écrivez seulement une consigne courte : ce que le champ contient, sa longueur et sa forme.

Fozzels a déjà préparé une proposition pour chaque champ. Gardez-la, ou modifiez-la avec **Edit guideline**. Le lien "Change fields in step 2" vous ramène à la sélection des champs.

![Champs supplémentaires et le résumé Your prompt](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-16-extra-fields.png)

**L'éditeur de consignes.** À gauche, vous voyez le texte de la consigne. À droite, vous voyez la **Preview** : la même consigne avec les vraies valeurs d'un produit. Utilisez les flèches de la **Preview** pour passer à un autre produit.

- **Les attributs comme variables.** Fozzels ajoute au texte des attributs du panneau **Attributes** sous forme d'étiquettes vertes. Un bloc conditionnel jaune "if…" ajoute une ligne uniquement si le produit a une valeur pour cet attribut. Vous pouvez trier le panneau par taux de remplissage et y faire une recherche. Le nombre sur un attribut indique combien de fois vous l'utilisez.
- **Snippets.** Vos snippets d'instructions enregistrés sont à droite.
- **Templates.** Cliquez sur **Save as template** pour enregistrer une consigne comme modèle. Cliquez sur **Load** pour l'utiliser dans un autre Flow.
- **AI Assistant.** L'assistant vous aide à écrire ou à modifier la consigne. Vous pouvez ajouter le résultat, l'insérer à la position du curseur, remplacer le texte par ce résultat ou le copier.

Pour une description complète de l'éditeur, consultez [4.3.2 Configuration et utilisation des prompts : le nouvel éditeur de prompts](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

![L'éditeur de consignes avec la Preview, les attributs et les snippets](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-17-guideline-editor.png)

![L'AI Assistant dans l'éditeur de consignes](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-18-ai-assistant.png)

L'icône d'engrenage à côté du nom du champ ouvre les paramètres de l'attribut. Ici, vous définissez :

- si Fozzels utilise l'attribut,
- si vous pouvez filtrer sur cet attribut,
- si Fozzels peut y écrire du contenu et mettre à jour votre boutique,
- si les produits enfants reçoivent la valeur du produit parent,
- si le HTML est autorisé.

Vous pouvez aussi traduire le nom de l'attribut dans d'autres langues. Cela aide l'IA à comprendre ce que contient l'attribut. Quand vous enregistrez cette fenêtre, Fozzels n'envoie rien à votre boutique.

![Paramètres de l'attribut](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-19-attribute-settings.png)

#### Your prompt

En bas de l'étape, vous voyez un résumé : le nombre de champs du Flow, le nombre de blocs activés et tous les blocs actifs, du rôle et du public cible jusqu'aux règles de vérification. Vous voyez les vrais textes à l'étape 5, quand vous testez le prompt sur des produits réels.

### Étape 4. Fields

À cette étape, vous définissez la longueur et la structure du texte pour chaque champ. Les champs sont des onglets en haut. Cliquez sur **+** pour ajouter un champ, et sur la croix pour retirer un champ. Tous les paramètres de l'étape **Enrich the text** s'appliquent toujours à chaque champ.

**Longueur du texte.** Le nombre approximatif de mots que l'IA écrit : **Short** (environ 60), **Normal** (environ 120), **Long** (environ 200) ou **Custom** (votre propre valeur).

**Trust block.** Un bloc court à la fin du texte. Il donne confiance dans le produit et dans votre boutique aux acheteurs et aux agents d'IA. Indiquez ce qui rend votre boutique fiable, par exemple une grande satisfaction client, des magasins physiques, des retours gratuits, une garantie ou un label de qualité. Le bloc devient une section séparée à la fin du texte. Il y a deux options :

- **Same block in every description** (recommandé) : Fozzels ajoute le bloc mot pour mot après chaque texte. Le bloc est toujours correct, et le prompt reste plus court.
- **AI mentions it where it fits** : l'IA reformule ces points avec ses propres mots, uniquement là où ils conviennent.

Vous pouvez donner un titre au bloc, par exemple "Commande et livraison", et une liste de points.

![Étape 4 : la longueur du texte et le Trust block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-20-step-4-length-trust-block.png)

**Structure et mise en forme.** L'ordre des parties du texte dans votre boutique. Fozzels prépare la structure par défaut pour ce type de texte. Vous pouvez la modifier :

- **Format** : HTML (h2, h3, h4, p, ul) ou texte brut.
- **Sections** : chaque section a un niveau de titre (H2, H3 …), une forme (titre, paragraphe ou liste à puces) et sa propre instruction. Faites glisser une section pour changer l'ordre. Cliquez sur la croix pour retirer une section.
- **+ Custom section** : ajoute votre propre section.

![Structure et mise en forme : les sections d'une description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-21-structure-sections.png)

Cliquez sur l'icône de crayon pour ouvrir l'éditeur de section. Ici, vous définissez le titre, le niveau, l'instruction, la forme, le nombre approximatif de mots et une condition. La condition détermine quand Fozzels ajoute la section au texte : **Always include**, **Only if a field is filled** ou **Only if a building block is on**.

![Modifier une section et sa condition](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-22-edit-section.png)

### Étape 5. Test

À cette étape, vous voyez des produits de votre sélection. Pour chaque produit, vous pouvez voir le prompt exactement tel que l'IA le reçoit : cliquez sur **View the filled-in prompt for this product**. Cliquez sur **Test** pour voir le texte que l'IA écrit pour ce produit, à côté du texte actuel. Si le résultat ne vous plaît pas, revenez aux blocs de l'étape 3.

Fozzels propose quelques produits de votre sélection pour le test. Pour ajouter d'autres produits, cherchez-les. Pour retirer un produit, cliquez sur la croix.

:::note
Un test écrit un vrai texte avec votre modèle d'IA. Fozzels le facture de la même manière que tous les autres textes. Les scores consomment aussi des tokens.
:::

![Étape 5 : produits de test](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-23-step-5-test-products.png)

Après le test, Fozzels affiche le score total du texte actuel et du nouveau texte, ainsi que l'amélioration, par exemple 12 → 69, soit +57. En dessous, vous voyez un score de 0 à 100 pour chaque sujet, avec une courte explication pour le texte actuel et pour le nouveau texte.

| Sujet | Ce que Fozzels évalue |
|---|---|
| SEO | Les acheteurs trouvent-ils le texte dans Google : un mot-clé au début, une bonne longueur, des phrases faciles à lire. |
| GEO | Les moteurs de recherche IA et les agents d'achat trouvent-ils le texte : des faits précis qu'ils peuvent vérifier. |
| AI readability | Un modèle de langage comprend-il le texte immédiatement : une structure claire. |
| Keywords | Le texte contient-il les termes de recherche sélectionnés de façon naturelle, sans trop de répétitions. |
| Internal links | Le texte contient-il les liens sélectionnés, avec un texte de lien qui indique leur destination. |
| Conversion | Le texte donne-t-il une raison d'acheter, lève-t-il les doutes et donne-t-il confiance au bon moment. |
| Neuromarketing | Le texte utilise-t-il la simulation, la congruence, la confiance et la fluidité de traitement. |

Fozzels calcule les scores sur le texte lui-même, à partir des blocs activés dans ce Flow. Il ne compte pas les sujets des blocs désactivés, par exemple **Internal links**.

![Scores du texte actuel et du nouveau texte pour chaque sujet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-24-test-scores.png)

### Étape 6. Launch

La dernière étape contient trois questions et, si nécessaire, des paramètres avancés.

1. **How many products per day?** 10, 25, 50, 100 ou votre propre nombre. La limite réduit les coûts et le travail de relecture. Quand Fozzels a terminé la sélection actuelle, le Flow prend automatiquement les nouveaux produits qui correspondent à la sélection.
2. **What happens with a new text?**
    - **I approve every text first** (recommandé) : les nouveaux textes vont dans votre liste de relecture. Fozzels n'envoie rien à votre boutique avant votre approbation.
    - **Straight to my shop** : Fozzels publie les textes automatiquement. Vous pouvez toujours les modifier ou revenir à la version précédente.
3. **If a product changes later?** Si un attribut utilisé par le prompt change, par exemple la couleur ou la matière, Fozzels peut rédiger automatiquement un nouveau texte. Si l'interrupteur est désactivé, Fozzels rédige un texte pour un produit une seule fois.

Sous **Advanced settings**, vous pouvez empêcher d'autres Flows de générer à nouveau le même contenu :

- **Use default** : le délai d'attente de vos paramètres généraux.
- **Override** : votre propre délai d'attente pour ce Flow, en semaines.
- **Turn off** : aucun délai d'attente. Fozzels ne génère pas de nouveau texte uniquement parce que du temps a passé.

Pour plus d'informations, consultez [Prevent Overlapping Content Generation](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).

Dans **Advanced settings**, vous pouvez aussi cliquer sur **Connect workflow** pour ajouter une action qui s'exécute après chaque texte, par exemple une traduction en allemand ou une nouvelle meta description.

Cliquez sur **Launch flow** pour lancer le Flow, ou sur **Save as draft** pour continuer plus tard.

![Étape 6 : paramètres de lancement](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-25-step-6-launch.png)

## Après le lancement : la page du Flow

Après le lancement, vous voyez le message "Your flow is running" et un bouton qui ouvre la page du Flow.

![Le message Your flow is running](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-26-flow-running.png)

La page du Flow affiche toutes les informations sur le Flow sur un seul écran :

- **Product selection** : le filtre qui sélectionne les produits, et le nombre de produits.
- **System prompt** : la partie du prompt que Fozzels envoie avec chaque requête, avant les instructions pour les champs : le rôle, le public cible, le ton, les principes, les mots-clés, les mots à éviter et les règles.
- **Attributes to generate** : les champs que Fozzels génère. Fozzels les crée tous dans une seule requête IA par produit, avec un seul prompt principal commun.
- **Status**, **AI Configuration**, **Automation**, **Workflows** : le statut et la progression, le modèle et son prix, la limite quotidienne, la publication automatique, le seuil de confiance, le délai d'attente et les actions connectées. Pour modifier un bloc, cliquez sur son bouton **Change**.

![La page du Flow en Expert view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-27-flow-page-expert-view.png)

Dans la barre du haut, vous pouvez passer de **Step by step** à **Expert view**, et ouvrir le contenu généré (**Generated content**), le test et la planification. Le menu **…** contient :

- **Run Now** : lance la génération immédiatement, même si le Flow a déjà atteint la limite quotidienne d'aujourd'hui.
- **Duplicate**, **Archive** et **Delete**. Pour plus d'informations, consultez [4.1.3. Gestion des Flows : duplication, archivage et suppression](/content-creation-flows/managing-flows-duplication-archiving-and-deletion/).

![Le menu du Flow avec Run Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-28-flow-menu-run-now.png)

**Workflows.** Pour ajouter une action de workflow au Flow :

1. Dans le bloc **Workflows**, cliquez sur **Change**.
2. Sélectionnez une action dans la liste, par exemple "Product is in".
3. Cliquez sur **Add**.
4. Cliquez sur **Save**.

![Ajouter un workflow au Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-29-add-workflow.png)

Pour plus d'informations, consultez [4.11.1. Workflows. Leçon 1 : premiers pas avec les Workflows](/content-creation-flows/workflows-lesson-1-getting-started/).

**Test sur la page du Flow.** Ce bouton ouvre un tableau avec tous les produits de la sélection. Pour chaque produit, vous voyez le SKU, le nom, une miniature et le prompt. Cliquez sur **Generate Now** dans une ligne pour générer immédiatement le contenu de ce produit, sans attendre la planification. Vous pouvez faire une recherche dans le tableau, passer à d'autres pages et choisir les colonnes à afficher.

![Le tableau de produits du Flow avec le bouton Generate Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-30-flow-product-table.png)

### Contenu généré : relire et approuver

Cliquez sur **Generated content** pour ouvrir la liste du contenu généré (**Content Completion List**). Pour chaque produit, vous voyez le SKU, le nom, une miniature, le prompt, tous les champs générés, et les dates auxquelles Fozzels a créé et exécuté la requête. Chaque colonne a un filtre. L'interrupteur **Confirmed** indique si un texte est approuvé. Pour appliquer une action à de nombreux textes en même temps, sélectionnez les lignes, puis sélectionnez l'action dans le menu **Actions**.

![La liste du contenu généré](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-31-generated-content-list.png)

Cliquez sur une ligne pour ouvrir la fenêtre **Edit completion result** :

- **Champ principal** : le texte à gauche, et une **Preview** à droite qui montre l'aspect du texte dans votre boutique. Cliquez sur **Show HTML** pour voir le code HTML, ou sur **Enable Editor** pour utiliser l'éditeur visuel.
- **Autres champs du Flow** : sous le champ principal, vous pouvez examiner et modifier les autres champs que ce Flow a remplis, comme **SEO Description** et **SEO Title**.
- **Batch Confirmed** : marque le résultat comme approuvé. Au-dessus des boutons, vous voyez le statut de synchronisation avec votre boutique.
- **Boutons** : **Save**, **Save & Sync** (enregistre le texte et l'envoie immédiatement à votre boutique), **Regenerate**, **Show Revisions** (versions précédentes) et **Copy to Clipboard**.

![La fenêtre Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-32-edit-completion-result.png)

Pour plus d'informations, consultez [4.7.5 Modifier le contenu dans la Batch List. Éditeur de texte enrichi](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/) et [4.7.4 Suspicious Words & Phrases](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

## Deux modes : Step by step ou Expert view

Utilisez le mode que vous préférez. Vous pouvez passer d'un mode à l'autre à tout moment en un clic.

| Mode | Ce qu'il affiche | Idéal pour |
|---|---|---|
| Step by step | Un assistant guidé, une étape à la fois. | Les nouveaux Flows et les nouveaux membres de l'équipe. |
| Expert view | Le Flow complet sur une seule page, avec les paramètres avancés. | Les utilisateurs expérimentés qui veulent voir tous les paramètres en même temps. |

Les paramètres avancés de **Expert view** comprennent le seuil de confiance, le délai d'attente entre les Flows et ce que fait Fozzels quand un produit n'a pas encore d'image.

Quand vous créez un nouveau Flow, Fozzels lui donne un nom à partir de vos sélections. Vous pouvez changer ce nom et revenir au nom proposé en un clic.

## Brand Profile : la voix de votre marque à un seul endroit {#brand-profile}

Le **Brand Profile** est une page séparée dans les paramètres de votre compte. Il définit les réglages de départ de chaque nouveau Content Flow :

- le modèle d'IA,
- qui écrit, pour qui et sur quel ton,
- les principes de neuromarketing et les mots-clés,
- ce qui ne doit jamais figurer dans le texte.

Vous pouvez toujours modifier chacun de ces paramètres dans un Flow. Quand vous modifiez le profil, Fozzels ne modifie pas vos Flows existants.

![La page Brand Profile](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-33-brand-profile.png)

### Plusieurs profils

Créez un profil séparé pour chaque marque, boutique ou gamme de produits, par exemple un pour les descriptions et le SEO, un pour la FAQ, un pour les textes ALT ou un pour des soldes.

- **New profile** : saisissez un nom, par exemple B2B, Outlet ou Premium line, puis cliquez sur **Create**.
- **Rename** / **Delete** : changez le nom d'un profil ou supprimez-le. Vous ne pouvez pas supprimer le profil par défaut. Définissez d'abord un autre profil comme profil par défaut.
- **Le profil par défaut** : chaque nouveau Flow démarre avec ce profil. À l'étape **Enrich the text**, vous pouvez charger un autre profil ou enregistrer les paramètres du Flow comme nouveau profil.

### Modèle d'IA

Sélectionnez un fournisseur (OpenAI (ChatGPT), Anthropic, xAI ou Google Gemini) et un modèle. Les nouveaux Flows démarrent avec ce modèle, mais vous pouvez sélectionner un autre modèle dans chaque Flow.

### Rôle, public cible et ton

Activez chaque bloc avec son interrupteur. Les options enregistrées sont des boutons. Cliquez sur un bouton pour sélectionner une option. Sous les boutons, vous voyez la description complète que l'IA reçoit. Cliquez sur l'icône de crayon pour modifier la description, ou sur **+ New…** pour créer une nouvelle option.

- **Role of the AI** : qui écrit le texte et de quel point de vue, par exemple Webshop copywriter, SEO specialist, Brand storyteller ou Shop assistant.
- **Target audience** : qui lit le texte : l'âge, le mode de vie, la façon de s'adresser au lecteur et ce qui compte pour lui.
- **Tone of voice** : la façon dont votre marque parle aux clients, avec vos propres mots. Si vous ne sélectionnez pas de ton, l'IA écrit dans un style neutre et informatif.

### Principes de neuromarketing dans le Brand Profile {#neuromarketing-principles-in-the-brand-profile}

Chaque principe ajoute une règle d'écriture au prompt. Vous pouvez sélectionner plusieurs principes. Ils se renforcent mutuellement.

| Principe | Règle d'écriture | Convient pour |
|---|---|---|
| Processing fluency | Des phrases courtes, une première ligne claire, peu d'affirmations, un ordre logique. | Les achats du quotidien, les comparaisons, les petits prix. |
| Simulation | Le client s'imagine utiliser le produit : une situation, un moment, ce qu'il ressent. | Les produits nouveaux, particuliers ou émotionnels. |
| Congruence | Le texte correspond à la photo et au produit que le client reçoit chez lui. Il ne fait pas de promesses que le produit ne tient pas. Cela réduit les retours. | Les produits pour lesquels l'attente et le produit réel doivent correspondre. |
| Trust | Honnête, précis et familier. Des faits que le client peut vérifier, pas un discours de vente habile. | Les achats plus chers, les marques inconnues, les nouveaux clients. |

### Mots-clés, mots à éviter et vos propres instructions

- **Keywords** : les termes de recherche avec lesquels les acheteurs doivent trouver le texte. Dans un Flow, Fozzels peut aussi proposer des termes pour ses produits. Si vous ne sélectionnez pas de mots-clés, Fozzels choisit un terme pour chaque produit à partir de son titre et de sa catégorie.
- **Do not mention** : les mots et les sujets qui ne doivent pas figurer dans le texte : prix, remises, noms de concurrents, affirmations comme "le meilleur" ou "le moins cher". L'IA ne les utilise pas, même s'ils figurent dans vos sources.
- **Own instructions** : d'autres informations que l'IA doit connaître, avec vos propres mots, par exemple la façon de s'adresser au lecteur ou ce qu'il faut toujours mentionner, comme "nous expédions en 24 heures". Fozzels ajoute ce texte au system prompt après les blocs, une ligne par paragraphe.
