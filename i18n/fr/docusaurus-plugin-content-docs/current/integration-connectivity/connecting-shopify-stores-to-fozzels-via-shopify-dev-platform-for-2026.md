---
id: '103000385597'
title: 2.3.2. Connecter des boutiques Shopify à Fozzels via le Shopify Dev Dashboard
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  Depuis le 1er janvier 2026, les boutiques Shopify se connectent via le Shopify
  Dev Dashboard. Comment créer et installer l'application dans Shopify, puis la
  connecter dans Fozzels, étape par étape.
---

Depuis le 1er janvier 2026, Shopify ne permet plus de créer des Private Apps dans l'interface d'administration de la boutique. Les nouvelles connexions et les mises à jour des intégrations existantes se configurent via le Shopify Dev Dashboard. Ce guide vous accompagne des deux côtés : création et installation de l'application dans Shopify (partie 1), puis connexion dans Fozzels (partie 2).

## Avant de commencer : trouvez votre domaine .myshopify.com

Fozzels a besoin de l'adresse .myshopify.com de votre boutique, et non du domaine public de votre boutique (tel que www.yourbrand.com). Cette adresse a été attribuée à la création de la boutique et ne peut pas être modifiée ; elle peut donc différer du nom de votre marque.

Vous pouvez la trouver à trois endroits dans l'administration Shopify :

1. **Barre latérale Settings :** ouvrez **Settings**. Votre domaine .myshopify.com s'affiche sous le nom de la boutique, en haut de la barre latérale.
2. **Settings → Domains :** la page Domains liste tous vos domaines. Utilisez celui qui se termine par .myshopify.com, même s'il n'est pas marqué **Primary**.
3. **Barre d'adresse du navigateur :** dans l'administration, l'URL ressemble à `https://admin.shopify.com/store/your-store`. Prenez la partie après `/store/` et ajoutez `.myshopify.com` : `your-store.myshopify.com`.

![Settings → Domains : le domaine .myshopify.com dans la barre latérale et dans la liste](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/01-settings-domains-myshopify-domain.png)

Vous utiliserez ce domaine sous deux formats :

| Où | Format |
| --- | --- |
| App URL (Shopify), URL (Fozzels) | `https://your-store.myshopify.com` |
| Store domain (distribution Shopify), App Host Name (Fozzels) | `your-store.myshopify.com` |

## Partie 1. Shopify : créer l'application

### 1. Créer l'application

1. Connectez-vous au Shopify Dev Dashboard : [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Ouvrez **Apps** dans la barre latérale de gauche et cliquez sur **Create app** en haut à droite. Selon votre type de compte, l'interface peut légèrement différer. Si vous ne voyez pas le bouton, faites défiler jusqu'en bas de la page et cliquez sur le lien **Create app**.
3. Sous **Start from Dev Dashboard** (l'option de droite), saisissez un nom d'application, par exemple `Fozzels_APP`, puis cliquez sur **Create app**. Cette option vous donne des identifiants d'API sans passer par la ligne de commande.

![Dev Dashboard : Apps et Create app](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/02-dev-dashboard-apps-create-app.png)

![Create an app : Start from Dev Dashboard](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/03-start-from-dev-dashboard.png)

### 2. Configurer la version

Après la création de l'application, vous arrivez sur la page **Create version**. Shopify a déjà créé une version initiale (par exemple `fozzels_app-1`). Vos paramètres seront publiés comme une nouvelle version basée sur celle-ci.

1. **App name :** conservez le nom ou modifiez-le.
2. **App URL :** saisissez l'URL de votre boutique avec https, par exemple `https://your-store.myshopify.com`.
3. **Embed app in Shopify admin :** doit être activé. Cela affiche l'interface Fozzels dans votre administration Shopify.
4. **Webhooks API version :** sélectionnez la dernière version stable proposée.

![Create version : App URL, Embed app in Shopify admin, Webhooks API version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/04-create-version-app-url-and-embed.png)

### 3. Ajouter les scopes

Faites défiler jusqu'à la section **Access**. Collez la liste ci-dessous dans le champ **Scopes**, ou cliquez sur **Select scopes** et trouvez chaque autorisation à l'aide de la barre de recherche.

Scopes requis, prêts à copier-coller :

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

| Groupe | Scopes |
| --- | --- |
| Products | `read_product_listings`, `read_products`, `write_products`, `read_product_feeds` |
| Metadata | `read_metaobject_definitions`, `read_metaobjects` |
| Translations | `read_translations`, `write_translations`, `read_publications` |
| Locales | `read_locales` |
| Markets | `read_markets`, `write_markets` |

Ces scopes sont requis pour tous les types de boutiques, y compris celles qui utilisent Shopify Markets et plusieurs langues.

**Vous prévoyez de synchroniser les données de poids ?** Ajoutez dès maintenant `read_inventory` et `write_inventory`. Ils ne sont nécessaires que pour le paramètre facultatif Inventory dans Fozzels (étape 10), mais les ajouter maintenant vous évite de créer une nouvelle version de l'application plus tard. Liste complète, inventaire inclus :

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications,read_inventory,write_inventory
```

Laissez le reste de la section tel quel :

- **Optional scopes :** laissez vide.
- **Use legacy install flow :** laissez décoché.
- **Allowed redirection URL(s) :** laissez vide.

La note « Some scopes require Shopify permission » ne s'applique pas aux scopes dont Fozzels a besoin ; vous n'avez donc pas à demander d'accès.

![Access : les 12 scopes requis](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/05-access-required-scopes.png)

### 4. Publier la version

1. Cliquez sur **Release**. Le bouton est disponible en haut à droite et en bas de la page.
2. Dans la fenêtre contextuelle, saisissez si vous le souhaitez un **Version name** (par exemple `v1`) et un **Version message**. Si vous laissez le nom vide, Shopify en génère un.
3. Cliquez sur **Release** pour confirmer.

La nouvelle version apparaît sur la page **Versions** avec le statut **Active**.

![Fenêtre contextuelle Release this new version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/06-release-new-version-pop-up.png)

![Versions : v1 Active](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/07-versions-v1-active.png)

### 5. Installer l'application dans votre boutique

Les étapes d'installation dépendent de votre type de compte Shopify. Pour commencer, ouvrez la page **Overview** de votre application en cliquant sur son nom dans la barre latérale de gauche.

![App Overview : Installs et Distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/08-app-overview-installs-and-distribution.png)

#### Option A : une seule boutique (sans compte Partner)

1. Dans le bloc **Installs**, cliquez sur **Install app**.
2. Si on vous le demande, connectez-vous avec l'**adresse e-mail du propriétaire de la boutique**. Seul le propriétaire de la boutique peut approuver l'installation.
3. Sur la page **Install app** de l'administration de votre boutique, vérifiez la liste des accès et cliquez sur **Install**.

Vous n'avez pas besoin de configurer la distribution. Passez à l'étape 6.

#### Option B : un compte Partner ou plusieurs boutiques

Vous devez d'abord configurer la **Custom distribution** afin de générer un lien d'installation pour une boutique précise.

1. Dans le bloc **Distribution**, cliquez sur **Select distribution method**. Cela ouvre l'application dans **Shopify Partners**, une interface distincte.
2. Sélectionnez **Custom distribution** et cliquez sur **Select**.
3. Confirmez avec **Select custom distribution**.

> **Attention :** le choix de Custom distribution est irréversible. L'application ne pourra alors être installée que sur une seule boutique ou au sein d'une seule organisation Plus.

![Shopify Partners : Distribution methods](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/09-partners-distribution-methods.png)

![Custom distribution sélectionnée](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/10-custom-distribution-selected.png)

![Confirmation de Select custom distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/11-select-custom-distribution-confirmation.png)

4. Dans **Store domain**, saisissez le domaine de votre boutique au format `your-store.myshopify.com`.
5. Laissez **Allow multi-store install for one Plus organization** décoché.
6. Cliquez sur **Generate link** et confirmez.

> **Attention :** cette confirmation est également irréversible. L'application ne pourra être installée que sur la boutique que vous avez saisie.

![Custom distribution : Store domain](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/12-custom-distribution-store-domain.png)

![Confirmation de Generate link pour l'installation sur une seule boutique](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/13-generate-link-confirmation.png)

7. Shopify affiche l'**Install link**. Cliquez sur **Copy**.
8. Ouvrez le lien dans un navigateur où vous êtes connecté à l'administration de la boutique, ou envoyez-le au propriétaire de la boutique. C'est pratique pour les agences : le propriétaire de la boutique peut effectuer lui-même l'installation.
9. Sur la page **Install app**, vérifiez que vous voyez **This app is exclusive to your store**, consultez la liste des accès et cliquez sur **Install**.

![Install link avec Copy](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/14-install-link-copy.png)

![Page Install app dans l'administration de la boutique](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/15-install-app-in-store-admin.png)

Le texte sous « This app is exclusive to your store » dépend du type de boutique et peut différer de la capture d'écran. La liste des accès doit inclure **Products, custom data, other data**. Si vous ne voyez que Products, certains scopes sont manquants : retournez à l'étape 3.

Après l'installation, l'application apparaît sous **Apps** dans la barre latérale de l'administration de votre boutique.

### 6. Copier les identifiants d'API

1. Dans le Dev Dashboard, ouvrez **App settings** dans la barre latérale de gauche de votre application.
2. Dans le bloc **Credentials**, copiez le **Client ID**.
3. Cliquez sur l'icône en forme d'œil à côté de **Secret** pour l'afficher, puis copiez-le.

Vous les collerez dans Fozzels à l'étape 8.

![App settings : Credentials](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/16-app-settings-credentials.png)

> **Attention :** ne cliquez pas sur **Rotate** sauf si nécessaire. Cela génère un nouveau Secret et l'ancien cesse immédiatement de fonctionner, ce qui interrompt votre connexion Fozzels jusqu'à la mise à jour du Secret dans Fozzels.

Conservez les identifiants en lieu sûr, par exemple dans un gestionnaire de mots de passe. Ne les envoyez pas par e-mail ni par messagerie : le Secret donne accès aux produits et aux traductions de votre boutique.

## Partie 2. Fozzels : connecter la boutique

### 7. Créer l'intégration

1. Connectez-vous à Fozzels sur [https://app.fozzels.com](https://app.fozzels.com) et ouvrez **Integrations** dans la barre latérale de gauche.
2. Sur l'écran **Choose your integration**, sélectionnez **Shopify**.
3. À l'étape **Configuration**, renseignez :
    - **Name :** n'importe quel nom qui vous aide à reconnaître l'intégration.
    - **URL :** l'adresse .myshopify.com de votre boutique avec https, par exemple `https://your-store.myshopify.com`. N'utilisez pas votre domaine personnalisé.
4. Sous **Connection Method**, choisissez **Custom App**.

![Fozzels : Choose your integration](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/17-fozzels-choose-your-integration.png)

![Create New Integration : Configuration et Custom App](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/18-fozzels-configuration-custom-app.png)

Les autres méthodes de connexion : **Fozzels Shopify App (OAuth)** se connecte via l'application Fozzels officielle et ne nécessite pas de créer votre propre application (voir [2.3.1. Fozzels Shopify App — Getting Started](/integration-connectivity/fozzels-shopify-app-getting-started)). **Legacy (Manual)** concerne les connexions configurées à l'ancienne.

### 8. Saisir les identifiants d'API

| Champ Fozzels | Ce qu'il faut saisir |
| --- | --- |
| Api Key | Client ID de l'étape 6 |
| Api Secret | Secret de l'étape 6 |
| App Host Name | `your-store.myshopify.com`, sans https |

Vous n'avez pas besoin de jeton d'accès : Fozzels le génère automatiquement.

### 9. Choisir le mode Markets

Le mode Markets définit la manière dont le contenu est distribué entre vos marchés et langues Shopify. Choisissez-le avec soin : le modifier plus tard n'est pas un simple changement de réglage (voir [Besoin de modifier le mode Markets plus tard ?](#need-to-change-the-markets-mode-later) à la fin de ce guide).

**Voie 1 : Translations.** Vous avez besoin du même contenu pour tous les marchés qui partagent une langue, traduit dans chaque langue publiée. Choisissez **Per language**, ou **No markets** pour la configuration la plus simple à site unique.

**Voie 2 : contenu unique par marché et par langue.** Vous avez besoin d'un contenu différent pour chaque marché, même au sein d'une même langue, par exemple des accents marketing différents selon les régions. Choisissez **Per market**.

| Mode | Ce qui devient un website | Ce qui est synchronisé |
| --- | --- | --- |
| No markets | Un website, une boutique par langue publiée | Une traduction par langue, les marchés sont ignorés |
| Per market | Chaque marché Shopify, avec une boutique par langue | Chaque couple marché-langue séparément |
| Per language | Chaque langue publiée | Une traduction par langue, Shopify l'applique à tous les marchés utilisant cette langue |

Vous utilisez LangShop ? Il fonctionne uniquement avec **No markets** et **Per language**.

![Identifiants d'API et mode Markets](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/19-fozzels-api-credentials-and-markets-mode.png)

### 10. Paramètres facultatifs

Si vous ne savez pas si vous avez besoin de ces paramètres, conservez les valeurs par défaut.

**Inventory.** Activez ce bouton bascule pour synchroniser les données de poids de la première variante du produit. Fozzels récupère deux attributs supplémentaires, **Weight** et **Weight Unit** (tous deux de type select), et peut les renvoyer vers Shopify.

> **Attention :** Inventory nécessite les scopes `read_inventory` et `write_inventory`. Si vous ne les avez pas ajoutés à l'étape 3, créez une nouvelle version de l'application avec ces scopes, publiez-la et réinstallez l'application avant d'activer Inventory. Si le bouton est activé sans ces scopes, Fozzels ne peut plus lire les produits du tout.

**Global Pull Schedule.** Par défaut, Fozzels récupère les produits de toutes les boutiques actives de l'intégration à 02:30. Pour définir une autre heure pour l'ensemble de l'intégration, activez **Overwrite Global Pull Schedule** et choisissez l'heure. Une boutique donnée peut avoir sa propre planification dans ses paramètres. Pour en savoir plus, consultez [3.1.2 How to Configure Global Pull Schedule & API Throttling](/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling).

**Delay between pages et Delay between requests.** Utilisez-les uniquement si les pulls échouent à cause des limites de débit de l'API Shopify. Laissez-les vides pour utiliser les valeurs par défaut de la plateforme.

| Champ | Ce qu'il fait | Plage | Valeur par défaut Shopify |
| --- | --- | --- | --- |
| Delay between pages | Pause après chaque page de résultats | 100–15000 ms | 2000 ms |
| Delay between requests | Pause entre les requêtes API individuelles | 100–15000 ms | aucune |

Des valeurs inférieures aux valeurs par défaut peuvent déclencher une limitation de débit et faire échouer les pulls.

![Options : Inventory, Global Pull Schedule, délais et Save](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/20-fozzels-optional-settings.png)

### 11. Enregistrer

Cliquez sur **Save** en bas de la page.

### 12. Activer l'intégration et récupérer les websites et boutiques

Après avoir cliqué sur **Save**, Fozzels affiche « Integration was created successfully » et ouvre l'étape **Websites & Stores**. Le panneau d'état en haut à droite affiche **Active** désactivé, **Authorized** en rouge et **REST API Connected** avec un avertissement. C'est normal à ce stade.

1. Activez le bouton bascule **Active** en haut à droite. Fozzels s'autorise auprès de Shopify et génère le jeton d'accès.
2. Cliquez sur **Pull Websites and Stores**.

**Authorized** et **REST API Connected** doivent maintenant passer au vert.

![Après Save : panneau d'état et Pull Websites and Stores](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/21-fozzels-status-after-save.png)

Si **Authorized** reste rouge, vérifiez que l'application est installée dans votre boutique (étape 5), que Api Key et Api Secret correspondent au Client ID et au Secret, et que App Host Name est votre nom d'hôte .myshopify.com sans https.

### 13. Activer les websites et les boutiques

Le tableau affiche maintenant vos websites et leurs boutiques. La structure dépend du mode Markets choisi à l'étape 9. En mode **Per language**, chaque langue publiée est un website distinct avec une boutique.

Une étoile à côté d'un website indique le website par défaut. Une étoile à côté d'une boutique indique la boutique par défaut de ce website.

Pour chaque website avec lequel vous souhaitez travailler, activez **les deux** boutons bascules : **Status** dans la section Websites et **Status** dans la section Stores. **Pull products** n'est disponible que lorsque les deux sont activés.

![Tableau Websites & Stores après le pull](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/22-fozzels-websites-and-stores-table.png)

### 14. Récupérer les produits

1. Cliquez sur **Pull products** dans la ligne d'une boutique active. Fozzels lance quatre pulls simultanément : **Product Attribute**, **Category Attribute**, **Category** et **Product**.
2. Pour suivre chacun d'eux, cliquez sur la flèche à côté de la barre de progression.
3. Lorsque les quatre barres de progression sont vertes à 100 %, le pull est terminé. La colonne **Products** affiche le nombre de produits récupérés.

![Progression du pull : quatre pulls à 100 %](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/23-fozzels-pull-progress.png)

**Votre connexion Shopify est prête.** Vous pouvez maintenant commencer à créer des flux et générer votre premier contenu.

Après le premier pull, les **Product Pull Conditions** deviennent disponibles à l'étape Websites & Stores. Elles vous permettent de filtrer les produits importés. Ce point fait l'objet d'un article distinct.

## Besoin de modifier le mode Markets plus tard ? {#need-to-change-the-markets-mode-later}

Changer le mode Markets, dans un sens comme dans l'autre, ne supprime pas les anciens websites et boutiques. Ils restent dans le tableau Websites & Stores comme inactifs, marqués « Website is lost on integration », à côté des nouveaux, qui sont créés et activés automatiquement. Les flux liés aux anciennes boutiques cessent de s'exécuter.

![Après le passage de Per language à Per market : anciens websites inactifs à côté des nouveaux](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/24-old-websites-lost-after-mode-switch.png)

- **Aucun flux créé pour l'instant :** repartez de zéro pour obtenir un tableau propre. Désactivez l'intégration actuelle, archivez-la et créez une nouvelle intégration avec les mêmes Api Key, Api Secret et App Host Name, en choisissant le bon mode Markets. Vous n'avez pas besoin de créer une nouvelle application dans Shopify.
- **Flux déjà créés :** contactez le support Fozzels avant de modifier le mode. Nous vous aiderons à effectuer le changement sans perdre votre travail.

Comme le code de locale côté Shopify peut changer, nous recommandons dans tous les cas de passer par le support Fozzels pour modifier le mode.

Vous passez spécifiquement de Per market à Per language ? Consultez [2.3.4. Migrating a Shopify integration from Per market to Per language](/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language).
