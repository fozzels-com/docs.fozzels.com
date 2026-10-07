---
title: "Content Flows : guide complet"
sidebar_position: 28
slug: /content-creation-flows/content-flows-complete-guide
description: >-
  Les Content Flows sont la fonctionnalité d'automatisation centrale de
  Fozzels. Ce guide couvre la création d'un Flow, les modèles de prompt, son
  exécution, le cycle de vie des complétions, le contenu suspect et les raisons
  pour lesquelles un contenu ne se synchronise parfois pas.
keywords:
- flux de contenu
---

Les Content Flows sont la fonctionnalité d'automatisation centrale de Fozzels. Un Flow est une règle qui génère automatiquement du contenu IA pour un attribut produit sélectionné et réécrit le résultat dans votre boutique.

## Ce que fait un Flow

1. Filtre les produits selon vos conditions (par ex. « la description est vide »)
2. Envoie les données produit à l'IA avec votre prompt
3. Stocke le contenu généré sous forme de « completion » (complétion)
4. Envoie le contenu vers l'attribut de votre boutique

---

## Création d'un Flow

Allez dans [Flows](https://app.fozzels.com/completions/product/rule) → **Create Flow**

### Étape 1 — Boutique et attribut cible

- Sélectionnez la boutique dont vous souhaitez traiter les produits
- Donnez un nom au Flow
- Sélectionnez l'**attribut cible** : l'attribut qui recevra le contenu généré par l'IA
  - Il doit avoir l'indicateur **Mutable** activé dans Integration → Attributes

### Étape 2 — Fournisseur d'IA

- Choisissez le fournisseur d'IA : OpenAI GPT-4o, Google Gemini 2.5 Flash ou Anthropic Claude
- Sélectionnez un modèle précis
- Configurez les paramètres du modèle si nécessaire

### Étape 3 — Produits et prompt

- **Conditions** : générateur de requêtes visuel pour filtrer les produits traités par ce Flow
  - Exemple : « description is empty AND category equals Electronics »
  - Laissez vide pour traiter tous les produits de la boutique
  - Un aperçu du nombre de produits indique combien correspondent
- **Prompt** : l'instruction envoyée à l'IA, rédigée dans l'[éditeur de prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor). Les données produit y entrent sous forme d'**attributs** : tapez `/` dans l'éditeur, ou cliquez sur un attribut ou faites-le glisser depuis le panneau Attributes. Chaque attribut est remplacé par la valeur propre à chaque produit.
  - Exemple : _Rédige une description produit pour_ **Name** _(SKU :_ **SKU**_) dans la catégorie_ **Category**, où les parties en gras sont des attributs
  - Un attribut accompagné d'un libellé (_Brand :_ **Brand**) doit être placé dans une **condition** (un bloc « if ») : toute la ligne est omise lorsque le produit n'a pas de valeur, de sorte qu'aucune ligne vide n'atteint l'IA

### Étape 4 — Paramètres d'automatisation

- Bouton **Active** : active ou désactive le Flow
- **Batch size** : nombre de produits à traiter par exécution (10 par défaut)
- Bouton **Automation** : lorsqu'il est activé (ON), le contenu confirmé est automatiquement envoyé vers votre boutique sans relecture manuelle
- **Regenerate on attribute change** : relance la génération lorsque les attributs source sont mis à jour (⚠ peut provoquer une récursion si l'attribut cible est aussi une source)
- **Prevent overlapping generation** : délai d'attente entre deux régénérations par produit :
  - **Inherit** : utilise le délai global défini dans les paramètres du compte
  - **Override** : définit un délai personnalisé pour ce Flow uniquement
  - **Turn off** : régénère toujours, quelles que soient les exécutions précédentes

---

## Conseils pour les modèles de prompt

Insérez les données produit sous forme d'attributs depuis le panneau Attributes plutôt que de les saisir à la main : un attribut est remplacé par la valeur propre à chaque produit.

**Attribut ou condition :**

- Un **attribut seul** se place directement dans une phrase. Utilisez-le pour les attributs que presque tous les produits possèdent (le taux de remplissage affiché dans le panneau Attributes indique combien de produits en disposent).
- Une **condition** (un bloc « if ») contient une ligne entière, comme _Brand :_ **Brand**, et l'omet lorsque le produit n'a pas de valeur. Utilisez-la pour tout élément accompagné d'un libellé ou d'un autre texte autour de l'attribut, afin que l'IA ne reçoive jamais une ligne _Brand :_ vide.

Soyez précis sur :

- Le format et la longueur (« 150 à 200 mots »)
- La langue (« en français »)
- Le ton (« professionnel mais chaleureux »)
- Ce qu'il faut éviter (« ne mentionne pas les concurrents »)

**Exemple pour une description produit.** Les mots en gras sont des attributs. Le nom est renseigné pour chaque produit : il figure donc seul, tandis que les autres lignes avec libellé se trouvent chacune dans une condition :

> Write a compelling product description (150–200 words) in English.
>
> Product name: **Name**
>
> _if Brand_ → Brand: **Brand**
>
> _if Category_ → Category: **Category**
>
> _if Short Description_ → Current short description: **Short Description**
>
> Focus on benefits, not just features. Use a professional but friendly tone.

**Mise en forme du résultat.** Le prompt lui-même ne porte aucune mise en forme. Pour obtenir des titres, des listes ou du texte en gras dans le contenu généré, demandez-les par écrit, par exemple : _Commence par un titre `<h2>` qui nomme le produit, puis rédige deux courts paragraphes._ Si le résultat doit contenir du HTML, activez les balises concernées dans [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Exécution d'un Flow

**Run Now** : traite immédiatement jusqu'à 10 produits. Utilisez-le pour tester ou pour de petits batches.

**Plan & Close** : place le batch complet en file d'attente pour un traitement en arrière-plan. Utilisez-le pour les exécutions en masse.

---

## Cycle de vie des complétions

Chaque élément généré passe par les étapes suivantes :

| Status | Signification |
|--------|---------------|
| **Pending** | Généré, en attente de relecture |
| **Confirmed** | Approuvé par vous, prêt à être synchronisé |
| **Synchronized** | Envoyé avec succès vers la boutique |
| **Suspicious** | Contient du contenu signalé : relecture manuelle requise avant la synchronisation |

Avec **Automation ON** : le contenu sans problème est confirmé et envoyé automatiquement. Le contenu suspect attend toujours une relecture manuelle.

Avec **Automation OFF** : tout le contenu attend votre relecture et votre confirmation avant la synchronisation.

---

## Relecture des complétions

Allez dans un Flow → **View Completions** pour voir tout le contenu généré.

Pour chaque élément, vous pouvez :

- **Edit** : modifier manuellement le texte généré
- **Regenerate** : demander à l'IA de générer à nouveau
- **Confirm** : approuver le contenu pour la synchronisation
- **Synchronize** : l'envoyer vers votre boutique
- **View revisions** : consulter l'historique complet des modifications et les différences entre les versions

**Actions groupées :** sélectionnez plusieurs éléments → Confirm & Sync, Regenerate ou Push.

---

## Contenu suspect

Fozzels signale automatiquement le contenu qui semble anormal :

- Artefacts d'IA : « Sorry, I can't... », « As an AI... », « Note: », « Please »
- Valeurs vides
- HTML encodé deux fois (`&lt;`, `&gt;`)
- Syntaxe Markdown dans un champ qui n'est pas au format Markdown
- Vos mots suspects personnalisés (à configurer dans [Settings → Flow Settings](https://app.fozzels.com/user/settings/flow))

Le contenu signalé indique précisément pourquoi il l'a été. Vous pouvez :

- Le modifier et le corriger
- Le régénérer
- Passer outre et l'approuver malgré tout (s'il s'agit d'un faux positif)

---

## Pourquoi un contenu ne se synchronise pas (envoi bloqué) {#why-content-wont-sync-push-blocked}

| Raison | Solution |
|--------|----------|
| Le Flow est inactif | Activez le bouton Active du Flow |
| Non confirmé | Confirmez la complétion (ou activez Automation) |
| Contenu suspect | Relisez et approuvez, ou modifiez et enregistrez à nouveau |
| Produit supprimé de la boutique | Rien à faire : le produit n'existe plus |
| Boutique/intégration inactive | Activez la boutique ou l'intégration |
| Attribut non mutable | Activez l'indicateur Mutable dans Integration → Attributes |

---

## Gestion des Flows

- **Duplicate** : copie un Flow vers la même boutique ou vers une autre
- **Archive** : masque le Flow de la liste principale ; les données sont conservées et peuvent être restaurées
- **Delete** : suppression définitive
- **Obsolete** : lorsqu'un Flow est cloné à la suite de modifications structurelles (attribut cible ou conditions modifiés), l'ancienne version devient obsolète ; son historique de complétions est conservé

### Avertissement sur les modifications structurelles

Si vous modifiez l'**attribut cible** ou les **conditions** d'un Flow qui comporte déjà des complétions, Fozzels vous avertit et propose **"Obsolete and Duplicate"** : cela crée un nouveau Flow avec vos modifications, tout en conservant l'historique de l'ancien.

---

## Avertissement de récursion

Il se déclenche lorsque le même attribut apparaît à la fois comme :

- Attribut dans votre prompt
- Attribut cible de la sortie

Cela crée une boucle infinie : chaque génération écrase les données d'entrée de l'exécution suivante.

Solution :

- Retirez cet attribut du prompt
- OU désactivez "Regenerate on attribute change"

---

## Problèmes courants

**Aucun produit ne correspond au Flow**

- Vérifiez vos conditions : essayez de les retirer temporairement pour voir tous les produits
- Vérifiez que les attributs utilisés dans les conditions ont l'indicateur **Filterable** dans Integration → Attributes

**Sortie de l'IA vide**

- Vérifiez que les attributs source ont des valeurs pour vos produits
- Vérifiez que les attributs référencés dans le prompt ont l'indicateur **Filterable**
- Rendez le prompt plus précis

**Le contenu ne s'envoie pas vers la boutique**

- Consultez les [raisons de blocage de l'envoi](#why-content-wont-sync-push-blocked) ci-dessus
- Vérifiez que le bouton Active de l'intégration est sur ON
- Vérifiez que l'attribut cible a l'indicateur **Mutable**

**Quota OpenAI dépassé**

- Rechargez votre compte sur [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing)
- Ou réduisez le volume quotidien dans les paramètres d'automatisation du Flow

**Contenu en double entre plusieurs Flows**

- Activez "Prevent overlapping generation" avec un délai d'attente (par ex. 7 jours)
- Cela empêche plusieurs Flows de régénérer le même produit pendant la période de délai
