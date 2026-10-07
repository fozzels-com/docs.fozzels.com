---
id: '103000357927'
title: "1.4.1. Passer du jeton API OpenAI à l'API générale Fozzels"
sidebar_position: 6
slug: /account-core-resources/switch-from-openai-api-token-to-fozzels-general-api
description: >-
  Nous avons modifié la manière dont Fozzels gère le paiement des « tokens » des
  modèles d'IA. Nous demandons à tous nos utilisateurs de modifier ce paramètre
  avant le 1er août 2025. Veuillez
---

Nous avons modifié la manière dont Fozzels gère le paiement des « tokens » des modèles d'IA.

Nous demandons à tous nos utilisateurs de modifier ce paramètre avant le 1er août 2025.

Prévoyez une dizaine de minutes pour modifier ce paramètre dans votre compte Fozzels.

Sommaire :

1.  Contexte
2.  Changement
3.  Avantages
4.  ## Marche à suivre, étape par étape

-   ### Configurer le paiement

-   ### Supprimer votre clé OpenAI actuelle

5.  ### Terminé

## Pourquoi ?

Fozzels a commencé par générer automatiquement du contenu pour vous à l'aide des modèles de langage d'OpenAI (actuellement GPT-4o).

Après la création d'un nouveau compte Fozzels, nous demandions à nos utilisateurs de créer également un compte OpenAI, d'y renseigner leurs données de carte bancaire, de créer une clé API OpenAI, puis de copier-coller cette clé dans Fozzels.

Tout cela fonctionnait très bien, mais présentait quelques inconvénients :

1.  La prise en main était plus longue, car les utilisateurs devaient aussi ouvrir un compte chez OpenAI et faire « quelque chose de bricolé » avec des copier-coller de clés API.
2.  Les nouveaux comptes OpenAI sont limités en usage (limites de débit, etc.), de sorte que les utilisateurs de Fozzels ne pouvaient pas tirer parti de la création de contenu produit en grande quantité via des batchs.
3.  Les nouveaux comptes OpenAI sont limités en modèles ; les utilisateurs ne pouvaient donc pas toujours utiliser Fozzels pour générer des images par IA, par exemple.
4.  Nous ne pouvions pas facilement proposer à nos utilisateurs l'accès à des modèles d'IA d'autres fournisseurs, comme Google (Gemini), Anthropic (Claude) ou xAi (Grok).

## Changement

Pour résoudre ces problèmes, Fozzels a modifié la manière dont nous gérons le paiement des « tokens » d'IA.

Au lieu de payer séparément chaque fournisseur d'IA, vous payez désormais directement Fozzels pour l'utilisation de l'IA, et Fozzels règle votre consommation d'IA aux fournisseurs à votre place. Fozzels utilise [Stripe](https://stripe.com/nl/payments), l'un des plus grands prestataires de paiement en ligne au monde, pour gérer les opérations financières.

## Avantages

Cette évolution présente les avantages suivants :

1.  Une prise en main plus rapide et plus simple pour les nouveaux utilisateurs de Fozzels ;
2.  Vous pourrez toujours générer du contenu pour de nombreux produits (fini les limites de compte), car Fozzels dispose de comptes « illimités » chez les fournisseurs d'IA ;
3.  Vous pouvez utiliser des modèles de génération d'images dans Fozzels ;
4.  Vous pouvez choisir parmi davantage de modèles d'IA qu'OpenAI (Google Gemini 2.5 Flash ; xAi Grok 3 ; Anthropic Claude 4 Sonnet, et d'autres suivront) ;
5.  Vous pouvez désormais activer la « recherche web » (web search), ce qui permet à l'IA de chercher sur internet, par exemple des données manquantes, et de les utiliser pour générer des données ou des descriptions de produits.

Vous pouvez actuellement choisir parmi les modèles d'IA suivants :

![Tous les modèles d'IA disponibles dans Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/AU9GwQ3QT_bYnbdVWdVFZXcOrtjOBOSAAQ.jpg)

##

## Marche à suivre, étape par étape

### A) Configurer le paiement

1.  Connectez-vous à votre compte Fozzels, puis cliquez sur votre **user image** en haut à droite.
2.  Dans le menu déroulant, cliquez sur **Settings**.
3.  Dans le menu Settings à gauche, cliquez sur [**Payments**](https://app.fozzels.com/user/settings/payments).
4.  L'écran suivant s'affiche. Cliquez sur le bouton « **Charge Credit now** ».
    ![Écran de paiement Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/tcgrCp0izWkeJxIjlmzD6xS5OZByebIyHg.png)

5.  Une fenêtre pop-up vous demande un montant. Saisissez le montant que vous souhaitez ajouter à votre solde. La valeur par défaut est de 50 €, mais vous pouvez la modifier si vous le souhaitez. Cliquez ensuite sur le bouton « **Charge Now** ».
    ![Pop-up Charge Credits now](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/drZn1vvSyjH8rRfhLn8mWW_HuhAo2tTs-w.png)

6.  Vous êtes redirigé vers la page de paiement Stripe, où vous pouvez saisir vos informations de paiement.
    Veuillez noter qu'aucune information de paiement n'est enregistrée chez Fozzels ; elles le sont uniquement chez Stripe.
    Vous pouvez utiliser les moyens de paiement suivants : iDEAL, cartes bancaires (VISA, American Express, Mastercard, Discover), Amazon Pay, Paypal, Revolut Pay et Bancontact.
    ![Écran de paiement Stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/BRJcSSvdJ5LBFl1zVDZ0UyhLPh4URCTO1w.png)

7.  N'oubliez pas, si ce paiement concerne votre compte professionnel, de saisir également le **nom de votre société** et votre **numéro de TVA**.
    ![Ajouter les informations de TVA sur Stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/ZlO4Se712OMvnGl-aiWPNytLfwhRuRKerQ.png)

8.  Une fois le paiement effectué avec succès, vous êtes redirigé vers Fozzels et vous voyez votre solde actuel sur la page Payments.
    ![Solde mis à jour sur la page Payments](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/Own2E9SNmWHQ1UHAoPh9oA1cXL0Sz8BkLQ.png)

9.  Ensuite, \[_facultatif_\], si vous souhaitez « recharger » automatiquement le solde de votre compte lorsqu'il atteint un niveau bas, vous pouvez le configurer en cliquant sur le bouton « **Configure Charge Credits** ». Ainsi, la génération de contenu via les Flows que vous avez configurés ne sera jamais interrompue.
    Saisissez les montants souhaités, cochez la case « _Yes, automatically recharge my card when my credit balance falls below a threshold_ » et cliquez sur le bouton **Save**.
    ![Pop-up des paramètres de recharge automatique](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/3BrEoNMQNNw7wOSkoZGXdLG3l9cyJwGeQ.png)

### B) Supprimer votre clé OpenAI actuelle

Après avoir configuré vos informations de paiement, pensez à **supprimer** la clé API OpenAI actuelle de votre compte.
Ainsi, Fozzels utilisera ses propres clés API pour tous les fournisseurs d'IA.

1.  Pour l'activer, cliquez sur « **Open AI Token** » dans le menu de gauche.
    ![Menu des paramètres Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/zFcW_bCeIp8XohHkBB2EQ8E7ZbEkvU1xTg.png)

2.  Sélectionnez votre jeton dans le champ Token, **supprimez tout le contenu du champ**, puis cliquez sur le bouton **Save**.
    ![Champ du jeton API OpenAI dans Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/z6eQMCzEGgNDu4KJsBT_QlGBwDiOAHKsTg.png)

Vous avez terminé.

Et voilà ! Bravo.
Merci, et bonne utilisation de Fozzels.
