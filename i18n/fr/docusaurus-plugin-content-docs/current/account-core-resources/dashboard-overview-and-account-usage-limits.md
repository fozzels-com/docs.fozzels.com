---
title: Présentation du Dashboard et limites d'utilisation du compte
sidebar_position: 9
slug: /account-core-resources/dashboard-overview-and-account-usage-limits
description: >-
  Le Dashboard est la page d'accueil de Fozzels et vous offre une vue d'ensemble
  en temps réel de l'utilisation de votre compte : intégrations, boutiques,
  Flows et complétions par rapport aux quotas de votre abonnement.
---

Le Dashboard est la page d'accueil de Fozzels. Il vous offre une vue d'ensemble en temps réel de l'utilisation de votre compte.

Accéder au [Dashboard](https://app.fozzels.com/dashboard)

---

## Barre de statistiques

Le haut de la page affiche 6 indicateurs clés. Chacun indique **le nombre actuel / le quota de l'abonnement** :

| Stat | Ce qui est comptabilisé |
|------|---------------|
| **Integrations** | Nombre total d'intégrations créées (actives ou non) |
| **Websites** | Sites web activés sur l'ensemble des intégrations |
| **Stores** | Boutiques activées sur l'ensemble des intégrations |
| **Flows** | Content Flows actifs (les Flows archivés ne sont pas comptabilisés) |
| **Completions today** | Éléments de contenu générés par l'IA depuis le début de la journée (réinitialisé à minuit UTC) |
| **Completions this month** | Éléments de contenu générés par l'IA durant le mois calendaire en cours |

> Un indicateur affiché en **rouge ou en orange** signifie que vous avez atteint ou presque atteint la limite de quota de votre abonnement.

---

## Deux limites distinctes à comprendre

Fozzels repose sur **deux systèmes de facturation indépendants**, faciles à confondre :

### 1. Quotas de l'abonnement

Votre abonnement fixe des limites strictes pour :

- Le nombre d'intégrations, de sites web, de boutiques et de Flows actifs que vous pouvez avoir
- Le nombre de complétions par jour et par mois

Ces limites sont affichées dans la barre de statistiques du Dashboard. Lorsqu'un quota est atteint, l'action est **bloquée** tant que vous n'avez pas changé d'abonnement.

→ À gérer sur la page [Plans](https://app.fozzels.com/user/settings/plans)

### 2. Solde de crédits (paiement à l'usage)

Chaque fois que l'IA génère du contenu, des crédits sont déduits de votre solde.

- Les crédits sont distincts de votre abonnement : vous pouvez avoir un abonnement mais zéro crédit
- Lorsque le solde atteint zéro, la génération est bloquée même si le quota de votre abonnement l'autorise
- Coût : environ 0,06 € pour 750 mots de contenu généré par l'IA
- Rechargez manuellement ou configurez la recharge automatique

→ À gérer sur la page [Payments](https://app.fozzels.com/user/settings/payments)

**Les deux limites doivent être respectées** pour que la génération fonctionne : il faut à la fois un quota d'abonnement restant ET un solde de crédits positif.

---

## Bouton Upgrade Plan

Visible lorsque vous n'êtes pas sur l'abonnement Unlimited. En cliquant dessus, vous accédez directement à la page [Plans](https://app.fozzels.com/user/settings/plans) pour changer d'abonnement.

---

## Graphique d'analyse

Il montre l'activité de génération de contenu au fil du temps, c'est-à-dire le nombre de complétions créées par jour. Utilisez-le pour :

- Repérer les pics d'utilisation
- Vérifier que vos Flows fonctionnent comme prévu
- Contrôler si la génération s'est arrêtée de manière inattendue

---

## Questions fréquentes sur le Dashboard

**« Completions today » est à 0 alors que j'ai exécuté des Flows**

- Vérifiez que vos Flows sont définis sur **Active**
- Vérifiez que votre Flow s'est exécuté aujourd'hui (la génération est planifiée : déclenchez une exécution manuelle pour tester)
- Vérifiez votre solde de crédits sur la page [Payments](https://app.fozzels.com/user/settings/payments) : s'il est à zéro, la génération est bloquée

**Les statistiques ne se mettent pas à jour**

- Le Dashboard s'actualise au chargement de la page ; effectuez une actualisation forcée de la page (Ctrl+F5 / Cmd+Shift+R)

**J'ai atteint la limite de mon abonnement**

- Changez d'abonnement sur la page [Plans](https://app.fozzels.com/user/settings/plans)
- Ou désactivez les boutiques inutilisées / archivez les Flows inutilisés pour libérer du quota

**Je ne peux pas créer davantage de Flows**

- Soit vous avez atteint le quota de Flows actifs, soit votre abonnement limite le nombre de Flows
- Consultez les limites de votre abonnement sur la page [Plans](https://app.fozzels.com/user/settings/plans)

**Le quota de complétions est épuisé alors qu'il me reste des crédits**

- Les quotas de l'abonnement et les crédits sont distincts : le quota de l'abonnement est prioritaire
- Vous devez changer d'abonnement pour générer davantage de contenu ce mois-ci / aujourd'hui

**Quelle est la différence entre « Completions today » et « Completions this month » ?**

- « Today » est réinitialisé chaque jour à minuit UTC ; « this month » est réinitialisé le 1er de chaque mois
- Certains abonnements limitent les deux (par ex. 100 par jour et 3 000 par mois) : la première limite atteinte bloque la génération
