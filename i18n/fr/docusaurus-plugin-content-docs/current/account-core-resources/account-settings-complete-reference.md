---
title: "Paramètres du compte — Référence complète"
sidebar_position: 10
slug: /account-core-resources/account-settings-complete-reference
description: >-
  Toutes les sections des paramètres de compte Fozzels expliquées — Profile,
  Security, Notifications, OpenAI Token, API tokens, Flow Settings, Prompt
  Templates, Media, Plans, Payments et Transactions.
---

Accédez à [Settings](https://app.fozzels.com/user/settings) — la barre latérale de gauche regroupe toutes les sections.

---

## Profile

Configurez les informations personnelles de votre compte :

- **Name, email, company, phone**
- **Avatar** — importez une photo au format JPG ou PNG
- **Language** — EN, NL, DE ou ES (modifie la langue de l'interface de Fozzels)
- **Timezone** — important pour les planifications de récupération (pull), qui s'exécutent par défaut en UTC ; en définissant votre fuseau horaire, les heures planifiées s'affichent correctement

---

## Security

Modifiez le mot de passe de votre compte :

- Saisissez votre mot de passe actuel
- Saisissez et confirmez un nouveau mot de passe

---

## Notifications

Choisissez les e-mails que Fozzels vous envoie :

- **Product emails** — actualités, conseils et annonces de fonctionnalités de Fozzels
- **Balance alert** — notification lorsque votre solde de crédits tombe à zéro

---

## Open AI Token

Ajoutez votre propre clé API OpenAI pour utiliser votre facturation OpenAI personnelle au lieu des crédits Fozzels.

- Lorsqu'elle est renseignée, tous les Flows basés sur OpenAI utilisent directement votre clé (l'assistant IA fonctionne sur Anthropic et ne l'utilise pas)
- Un solde minimum de 0,01 € dans Fozzels reste nécessaire pour utiliser cette fonctionnalité
- Laissez le champ vide pour utiliser la clé de la plateforme Fozzels (les crédits sont alors déduits de votre solde)

---

## API (Personal Access Tokens)

Créez des tokens API pour un accès programmatique à Fozzels :

- Donnez un nom à chaque token
- Les tokens peuvent être révoqués à tout moment
- Utilisez les tokens pour intégrer Fozzels à des outils externes ou automatiser des tâches via l'API

---

## Flow Settings

Paramètres globaux qui s'appliquent à tous les Content Flows, sauf s'ils sont remplacés flux par flux.

### Trusted HTML Tags

Liste blanche des balises HTML autorisées dans le contenu généré par l'IA. Seules les balises de cette liste sont conservées lorsque le résultat est utilisé dans un attribut HTML.

### Suspicious Words

Liste de mots ou d'expressions qui signalent automatiquement le contenu généré pour une vérification manuelle.

Les mots suspects par défaut incluent des artefacts d'IA tels que « As an AI », « I cannot », « Sorry ». Vous pouvez :

- Ajouter vos propres mots (par ex. des noms de concurrents, des expressions interdites)
- Supprimer les entrées par défaut qui provoquent des faux positifs

Les completions contenant des mots suspects ne peuvent pas être synchronisées automatiquement — elles nécessitent une vérification et une confirmation manuelles.

### Completion Cooldown (global)

Délai minimal entre deux régénérations par l'IA pour un même produit, sur l'ensemble des Flows.

Format : définissez un nombre et une unité (hours, days, weeks).

Chaque Flow peut :

- **Inherit** ce paramètre global
- **Override** avec son propre cooldown
- **Turn off** complètement le cooldown

---

## Prompt Templates

Enregistrez des modèles de prompt réutilisables dans plusieurs Flows.

- Donnez un nom et un contenu à chaque modèle
- Référencez les modèles lors de la création ou de la modification d'un Flow au lieu de rédiger le prompt de zéro
- Utile pour conserver un ton et un format cohérents d'un Flow à l'autre

---

## Media

Votre médiathèque — les images et fichiers importés ou générés dans Fozzels.

---

## Plans

Consultez et modifiez votre abonnement.

Accédez à [Plans](https://app.fozzels.com/user/settings/plans)

Chaque plan indique :

- Le nom et la description
- Les fonctionnalités incluses
- Les quotas : nombre maximal d'intégrations, de boutiques, de Flows actifs, de completions par jour et par mois
- Le prix

Pour passer à un plan supérieur ou inférieur : cliquez sur **Choose Plan** → paiement Stripe → confirmez le paiement.

### Available plans

| Plan | Integrations | Stores | Flows | Completions/day | Completions/month |
|------|-------------|--------|-------|-----------------|-------------------|
| **Trial** | 1 | 1 | 1 | limité | limité |
| **Starter** | 6 | 18 | illimité | — | — |
| **Ultra Light** | 1 | 1 | 4 | 1 000 | 30 000 |
| **Light** | 1 | 3 | 5 | 30 | 900 |
| **Plus** | 3 | 6 | 15 | 75 | 2 250 |
| **Premium** | 6 | 18 | 60 | 100 | 3 000 |
| **Unlimited** | illimité | illimité | illimité | illimité | illimité |

> Lorsqu'un quota est dépassé, l'action est bloquée et un message renvoie vers la page Plans.

---

## Payments (Credits)

Accédez à [Payments](https://app.fozzels.com/user/settings/payments)

Fozzels utilise un **système de crédits à l'usage** — distinct de votre abonnement. Les crédits sont consommés à chaque génération de contenu par l'IA.

**Coût :** environ 0,06 € pour 750 mots de contenu généré.

**Exemple :** 1 000 descriptions de produits d'environ 200 mots ≈ 16 €

### Managing your balance

- **Current balance** — affiché dans l'encadré orange
- **Charge Credit Now** — recharge manuelle ponctuelle via Stripe
- **Configure Auto-Charge** — définissez un seuil et un montant de recharge automatique
  - Exemple : recharger automatiquement 50 € lorsque le solde passe sous 10 €
- **Customer Billing Portal** — portail Stripe pour gérer les moyens de paiement et télécharger les factures

### Payment history

Le tableau présente tous les paiements passés avec la date, le montant et le statut.

### Common billing issues

- **"You exceeded your current quota"** — votre solde est à zéro ou votre clé API OpenAI a expiré
  - Rechargez votre solde sur [Payments](https://app.fozzels.com/user/settings/payments) ou ajoutez votre propre clé OpenAI dans Settings → Open AI Token
- **Auto-charge not triggering** — vérifiez que le seuil est défini et qu'un moyen de paiement est enregistré dans le portail Stripe

---

## Transactions

Historique complet de toutes les déductions de crédits — indique quel Flow ou quelle completion a consommé des crédits, combien de tokens ont été utilisés et le coût par opération.

---

## Reseller access

Si un Reseller gère votre compte, son accès apparaît dans les paramètres du compte. Vous pouvez **revoke Reseller access** à tout moment depuis cette page.

Lorsqu'un Reseller est connecté à votre compte, la barre d'en-tête devient noire.
