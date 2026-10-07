---
title: "2.3.4. Migrer une intégration Shopify du mode Per market vers le mode Per language"
sidebar_position: 5.5
slug: /integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language
description: >-
  Comment faire passer une intégration Shopify du mode Markets Per market au
  mode Per language : mettre à jour les scopes de l'application dans le Shopify
  Dev Dashboard, puis recréer l'intégration dans Fozzels ou contacter le
  support.
---

La façon la plus propre de passer de Per market à Per language consiste à mettre à jour les scopes de votre application Shopify, puis à créer une nouvelle intégration Fozzels avec le mode Per language. Si vous avez déjà des flux, contactez le support Fozzels plutôt que de changer le mode vous-même.

## Avant de commencer

Ce guide s'adresse aux clients dont l'intégration Shopify utilise le mode **Per market** et qui n'ont pas besoin de contenu spécifique à chaque marché au sein d'une même langue. Avec **Per language**, vous synchronisez une seule traduction par langue, et Shopify l'applique à tous les marchés où cette langue est publiée. Cela signifie moins d'opérations de synchronisation et un coût réduit.

Vérifiez d'abord deux points.

**1. Votre application dispose-t-elle de tous les scopes requis ?** Per language nécessite des scopes que les anciennes versions de l'application peuvent ne pas avoir, le plus souvent `read_publications`. Ouvrez votre application dans le Shopify Dev Dashboard, allez dans **Versions**, ouvrez la version active et comparez ses **Scopes** avec la liste de l'étape 1. S'il en manque, effectuez l'étape 1. Si tous les scopes sont présents, passez directement à l'étape 2.

**2. Avez-vous déjà des flux dans Fozzels ?** Cela détermine la façon dont vous changez le mode.

| Votre situation | Que faire |
| --- | --- |
| Aucun flux pour l'instant | Étape 1 si nécessaire, puis étape 2, option A : archiver et recréer l'intégration |
| Flux déjà créés | Étape 1 si nécessaire, puis contactez le support Fozzels (étape 2, option B) |

Pourquoi ne pas simplement changer le mode dans l'intégration existante ? Le changement ne supprime pas les anciens sites web et boutiques basés sur les marchés. Ils restent dans le tableau comme inactifs, marqués « Website is lost on integration », à côté des nouveaux sites basés sur les langues. Les flux liés aux anciennes boutiques cessent de s'exécuter, et le tableau devient difficile à parcourir.

![Après le changement de mode sur place : les anciens sites web sont marqués comme perdus, à côté des nouveaux](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/01-old-websites-lost-after-mode-switch.png)

## Étape 1. Shopify : ajouter les scopes manquants

Vous n'avez pas besoin d'une nouvelle application. Vous créez une nouvelle version de votre application existante avec les scopes mis à jour. Le Client ID et le Secret restent identiques.

### 1.1. Créer une nouvelle version

1. Connectez-vous au Shopify Dev Dashboard : [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Ouvrez **Apps** et sélectionnez votre application Fozzels.
3. Allez dans **Versions** et cliquez sur **Create version**. La nouvelle version est basée sur votre version active actuelle, de sorte que tous les paramètres existants sont copiés.

![Page Versions avec Create version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/02-versions-create-version.png)

![Créer une version basée sur la version active](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/03-create-version-from-active.png)

### 1.2. Mettre à jour les scopes

Faites défiler jusqu'à la section **Access**. Dans les anciennes versions de l'application, le champ **Scopes** ne contient souvent pas `read_publications`. Voici un exemple de liste incomplète :

![Avant : scopes sans read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/04-scopes-before-without-read-publications.png)

Remplacez le contenu du champ **Scopes** par la liste complète :

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

Si vous souhaitez également synchroniser les données de poids (l'option Inventory dans Fozzels), ajoutez `read_inventory` et `write_inventory` à la fin de la liste.

![Après : liste complète des scopes, y compris read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/05-scopes-after-full-list.png)

Laissez tout le reste inchangé : **Optional scopes** vide et **Use legacy install flow** non coché.

### 1.3. Publier la version

1. Cliquez sur **Release** (en haut à droite ou en bas de la page).
2. Saisissez éventuellement un nom de version, par exemple `v2`, puis cliquez sur **Release** pour confirmer.

La nouvelle version devient **Active**.

![Pop-up Release this new version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/06-release-new-version-pop-up.png)

### 1.4. Approuver les nouvelles autorisations dans votre boutique

La publication d'une version ne donne pas encore à l'application les nouvelles autorisations. Le propriétaire de la boutique doit les approuver en réinstallant l'application. Tant que ce n'est pas fait, Per language ne fonctionnera pas correctement.

1. Ouvrez la page **Overview** de l'application et cliquez sur **Install app**, ou ouvrez le lien d'installation depuis **Distribution** si vous utilisez Custom distribution.
2. Connectez-vous avec le compte du propriétaire de la boutique si cela vous est demandé.
3. Passez en revue la liste des accès et confirmez l'installation.

## Étape 2. Fozzels : passer à Per language

### Option A : aucun flux pour l'instant — archiver et recréer

Vous obtenez ainsi un tableau Websites & Stores propre, ne contenant que les nouveaux sites web basés sur les langues.

1. Avant de commencer, copiez l'**Api Key**, l'**Api Secret** et l'**App Host Name** actuels depuis l'étape Configuration de l'intégration, ou récupérez le Client ID et le Secret dans **App settings → Credentials** du Shopify Dev Dashboard.
2. Ouvrez l'intégration actuelle et désactivez le commutateur **Active**.
3. Archivez l'intégration.
4. Créez une nouvelle intégration Shopify : **Integrations → Shopify**, méthode de connexion **Custom App**.
5. Saisissez les mêmes **URL**, **Api Key**, **Api Secret** et **App Host Name**.
6. Sous **Markets mode**, choisissez **Per language**.
7. Définissez les paramètres facultatifs si vous les utilisiez auparavant (Inventory, Global Pull Schedule, délais) et cliquez sur **Save**.
8. Activez **Active** et cliquez sur **Pull Websites and Stores**.
9. Activez **Status** pour chaque site web et sa boutique, puis cliquez sur **Pull products**.

![Nouvelle intégration : identifiants et Markets mode défini sur Per language](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/07-new-integration-per-language.png)

Pour la description complète de chaque champ, consultez [2.3.2. Connecting Shopify stores to Fozzels via Shopify Dev Dashboard](/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026).

### Option B : flux déjà créés — contactez le support

Contactez le support Fozzels avant de changer le mode. Nous vous aiderons à effectuer le changement tout en conservant le bon fonctionnement de vos flux, et nous vérifierons les codes de locale côté Shopify, qui peuvent changer lors du passage.

## Après la migration

En mode Per language, chaque langue publiée est un site web distinct avec une seule boutique.

![Per language : un site web avec une boutique par langue](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/08-per-language-websites-and-stores.png)

- [ ] La version active de l'application dans Shopify inclut `read_publications` et tous les autres scopes requis
- [ ] Le propriétaire de la boutique a approuvé les nouvelles autorisations (application réinstallée)
- [ ] L'intégration utilise **Per language**
- [ ] **Authorized** et **REST API Connected** sont au vert
- [ ] Les sites web et boutiques sont actifs pour les langues dont vous avez besoin
- [ ] Les quatre pulls (Product Attribute, Category Attribute, Category, Product) sont terminés à 100 %
- [ ] Les flux sont reconstruits sur les nouvelles boutiques, ou le support a confirmé le changement (option B)
