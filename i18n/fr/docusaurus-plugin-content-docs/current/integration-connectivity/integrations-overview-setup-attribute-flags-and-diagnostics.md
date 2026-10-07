---
title: "Intégrations — Présentation, configuration, indicateurs d'attributs et diagnostics"
sidebar_position: 22
slug: >-
  /integration-connectivity/integrations-overview-setup-attribute-flags-and-diagnostics
description: >-
  Une Integration est une connexion sécurisée entre Fozzels et votre boutique
  e-commerce ou votre PIM. Ce guide couvre les plateformes prises en charge, les
  étapes de configuration, les indicateurs d'attributs, les planifications de
  récupération, les particularités de chaque plateforme et la référence complète
  des diagnostics WooCommerce.
---

Une Integration est une connexion sécurisée entre Fozzels et votre boutique e-commerce ou votre système PIM. Une fois connecté, Fozzels peut récupérer vos données produit et renvoyer le contenu généré par l'IA vers votre boutique.

## Plateformes prises en charge

- **Shopify** — prise en charge complète, y compris Shopify Markets (multilingue)
- **Magento 2** — y compris les configurations multi-sites et multi-boutiques
- **WooCommerce** — via l'API REST
- **Shopware 6**
- **Lightspeed**
- **Akeneo** — système PIM
- **Katana PIM**
- **BizzLayer**
- **EK Retail**
- **NextChapter**
- **StoreInfo Catalog XML**

## Hiérarchie des intégrations

Integration → Website(s) → Store(s) → Products & Attributes

Chaque intégration peut contenir plusieurs sites web, et chaque site web peut contenir plusieurs boutiques (par ex. différentes langues ou régions).

---

## Configurer une intégration

### Étape 1 — Créer l'intégration

- Accédez à [Integrations](https://app.fozzels.com/integrations/definitions)
- Cliquez sur **Add Integration** et sélectionnez votre plateforme
- Saisissez un nom, l'URL de votre boutique et les identifiants de la plateforme
- Enregistrez — Fozzels validera la connexion

### Étape 2 — Synchroniser les sites web et les boutiques

- Après l'enregistrement, cliquez sur **Synchronize** pour récupérer la liste des sites web et des boutiques de votre plateforme
- Activez les sites web et les boutiques avec lesquels vous souhaitez travailler
- Remarque : l'activation de boutiques est comptabilisée dans le quota de votre plan

### Étape 3 — Récupérer les produits

- Une fois les boutiques actives, déclenchez un **Product Pull**
- Fozzels importe tous les produits avec leurs attributs et leurs images
- Vous pouvez suivre la progression de la récupération en temps réel (affiche les éléments traités / le total)

### Étape 4 — Configurer les attributs

- Accédez à l'onglet **Attributes** de votre intégration
- Activez les attributs que vous souhaitez utiliser
- Activez l'indicateur **Filterable** sur les attributs par lesquels vous souhaitez filtrer les produits ou que vous souhaitez utiliser comme entrée dans les Flows
- Activez l'indicateur **Mutable** sur les attributs dans lesquels le contenu généré par l'IA sera écrit

---

## Indicateurs d'attributs expliqués

| Flag | What it does |
|------|-------------|
| **Filterable** | L'attribut apparaît dans le filtre du Catalog et peut être utilisé comme entrée dans les prompts des Flows (inséré comme attribut dans l'éditeur de prompts) |
| **Mutable** | Fozzels peut écrire du contenu généré par l'IA dans cet attribut (requis pour la sortie d'un Flow) |
| **Enabled** | L'attribut est actif et visible dans Fozzels |
| **HTML-able** | Autorise le contenu HTML dans cet attribut (types texte/zone de texte uniquement) |

> Si vous ne parvenez pas à sélectionner un attribut comme cible d'un Flow — vérifiez que l'indicateur **Mutable** est activé.
>
> Si un attribut n'apparaît pas dans le filtre du Catalog ou dans le prompt d'un Flow — vérifiez que l'indicateur **Filterable** est activé.

---

## Planification des récupérations

Fozzels peut récupérer automatiquement les produits et exécuter les Flows selon une planification :

1. Product Pull — récupère les dernières données produit de votre boutique
2. Flow Sync — associe les produits aux Flows actifs
3. Attribute Refresh — met à jour les valeurs des attributs
4. AI Generation — génère le contenu
5. Data Export — renvoie le contenu vers votre boutique

Vous pouvez définir une heure de récupération personnalisée (format : `HH:MM`, par ex. `14:00`) par intégration ou par boutique. Si elle n'est pas définie, la valeur par défaut du système (00:30 UTC) est utilisée.

Pour modifier votre fuseau horaire, accédez à [Settings → Profile](https://app.fozzels.com/user/settings/profile).

---

## Statut de l'intégration

| Status | Meaning |
|--------|---------|
| **Active** | L'intégration est activée et traitera les données |
| **Authorized** | Les identifiants sont valides (Shopify uniquement) |
| **REST API Connected** | Le test de connexion en direct a réussi |

> L'intégration doit être **Active** pour que toute récupération ou tout envoi de données fonctionne.

---

## Configuration spécifique à chaque plateforme

### Shopify

1. Dans Shopify Admin, accédez à : Settings → Apps → Develop apps → Create an app
2. Scopes d'API requis : `read_product_listings`, `read_products`, `write_products`, `read_metaobject_definitions`, `read_metaobjects`, `read_product_feeds`
3. Pour Shopify Markets (multilingue), ajoutez également : `write_translations`, `read_translations`, `write_markets`, `read_markets`, `read_locales`
4. Dans Fozzels, saisissez : l'API key, l'API Secret et votre URL `.myshopify.com`
5. Le statut de l'intégration doit afficher **Authorized: yes** ET **REST API Connected: yes**

### Magento 2

1. Dans Magento Admin, accédez à : System → Integrations → Add Integration
2. Copiez : Consumer Key, Consumer Secret, Access Token, Access Token Secret
3. Saisissez également l'`admin_front_name` (généralement `admin`)
4. **Important :** ajoutez manuellement l'attribut `fozzels_completion_date` à TOUS les Attribute Sets dans Magento Admin (Catalog → Attributes → Attribute Sets). Fozzels ne peut pas le faire automatiquement car Magento prend en charge plusieurs Attribute Sets par boutique.
5. Après l'enregistrement : activez l'intégration → synchronisez les sites web/boutiques → récupérez les produits

### WooCommerce

- Générez une clé API REST dans WooCommerce → Settings → Advanced → REST API
- Autorisations requises : Read/Write
- Saisissez la Consumer Key et le Consumer Secret dans Fozzels

#### Intégrations de plugins optionnels WooCommerce

Les intégrations WooCommerce prennent en charge quatre indicateurs de plugins optionnels. Chacun nécessite l'installation de plugins WordPress supplémentaires.

**ACF (Advanced Custom Fields)**

- Activation : interrupteur "Enable ACF (Advanced Custom Fields)" dans les paramètres de l'intégration Fozzels
- Plugins WordPress requis : "Advanced Custom Fields" ET "ACF to REST API"
- Fonctionnement : récupère dans Fozzels, sous forme d'attributs (préfixés `acf_`), les champs produit personnalisés définis dans ACF
- Écriture en retour : les valeurs ACF sont écrites via le endpoint `meta_data` de WooCommerce

**Yoast SEO**

- Activation : interrupteur "Yoast WooCommerce SEO" dans les paramètres de l'intégration Fozzels
- Plugins WordPress requis : "Yoast SEO" ET "Fozzels SEO Fields REST API for WooCommerce" (plugin passerelle, à télécharger depuis app.fozzels.com)
- Fonctionnement : récupère le titre SEO, la meta description et le mot-clé principal de Yoast sous forme d'attributs (préfixés `yoast_`)
- Écriture en retour : les valeurs sont écrites via la clé `seo_fields` dans l'API REST de WooCommerce

**All in One SEO (AIOSEO)**

- Activation : interrupteur "All in One SEO" dans les paramètres de l'intégration Fozzels
- Plugins WordPress requis : "All in One SEO" ET "AIOSEO API Sync" (plugin passerelle, à télécharger depuis app.fozzels.com)
- Fonctionnement : récupère le titre SEO, la description, les mots-clés, les champs Open Graph, les champs Twitter et l'expression-clé principale sous forme d'attributs (préfixés `aioseo_`)
- Écriture en retour : les valeurs sont écrites via la clé `aioseo` dans l'API REST de WooCommerce

**WPML (Multilingual)**

- Activation : interrupteur "Enable WPML Multilingual Support" dans les paramètres de l'intégration Fozzels
- Plugin WordPress requis : WPML
- Fonctionnement : crée une boutique Fozzels distincte par langue ; les produits sont récupérés par langue à l'aide de l'URL préfixée par la langue (par ex. `/de/wp-json/wc/v3/products`)
- Après l'activation : accédez à Integration → Synchronize pour créer les boutiques par langue

---

#### Diagnostics de connexion et de plugins WooCommerce

Lorsque vous testez la connexion ou lancez une récupération de produits, Fozzels vérifie chaque plugin activé. Voici toutes les erreurs possibles et la manière de les corriger :

**Erreurs de connexion**

| Error | Meaning | Fix |
|-------|---------|-----|
| WordPress was not found at the provided URL | L'URL ne pointe pas vers un site WordPress | Vérifiez que l'URL est correcte et accessible publiquement |
| WooCommerce REST API is not available | WooCommerce n'est pas installé ou l'API REST est désactivée | Installez WooCommerce et activez l'API REST dans WooCommerce → Settings → Advanced |
| Unable to connect to the store | Problème de réseau/DNS | Vérifiez que l'URL est accessible depuis Internet |
| The connection timed out | La boutique est injoignable ou un pare-feu bloque la connexion | Vérifiez le pare-feu du serveur et assurez-vous que l'URL est accessible publiquement ; voir [2.1.1. Prérequis de connexion : adresses IP, User-Agent et paramètres du pare-feu](./connection-requirements.md) |
| Invalid API credentials | Consumer Key ou Consumer Secret incorrect | Générez une nouvelle clé API dans WooCommerce → Settings → Advanced → REST API |

**Erreurs ACF**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both "Advanced Custom Fields" and "ACF to REST API" plugins are required | L'un des plugins, ou les deux, sont manquants | Installez et activez les deux plugins dans l'administration WordPress |
| "ACF to REST API" is active but "Advanced Custom Fields" is not installed | Le plugin passerelle ACF est installé mais le plugin ACF principal est manquant | Installez et activez le plugin "Advanced Custom Fields" |
| Failed to verify ACF plugin status | Le endpoint de vérification du plugin n'a pas pu être joint | Vérifiez la connectivité WordPress et réessayez |

**Erreurs Yoast SEO**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both "Yoast SEO" and "Yoast SEO WooCommerce REST API by Fozzels" plugins are required | L'un des plugins, ou les deux, sont manquants | Installez et activez les deux plugins dans l'administration WordPress |
| "Yoast SEO" is active but the "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed | Le plugin passerelle est manquant | Téléchargez le plugin passerelle depuis app.fozzels.com et activez-le |
| Your "Fozzels SEO Fields REST API for WooCommerce" plugin is outdated | Ancienne version du plugin passerelle | Téléchargez et installez la dernière version depuis app.fozzels.com |
| The "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed or not active | Le plugin passerelle est introuvable | Téléchargez-le depuis app.fozzels.com et activez-le dans l'administration WordPress |
| Failed to verify Yoast SEO plugin status | Le endpoint de vérification du plugin n'a pas pu être joint | Vérifiez la connectivité WordPress et réessayez |

**Erreurs AIOSEO**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both "All in One SEO" and "AIOSEO API Sync" plugins are required | L'un des plugins, ou les deux, sont manquants | Installez et activez les deux plugins dans l'administration WordPress |
| "All in One SEO" is active but the "AIOSEO API Sync" plugin is not installed | Le plugin passerelle est manquant | Téléchargez le plugin AIOSEO API Sync depuis app.fozzels.com et activez-le |
| Your "AIOSEO API Sync" plugin is outdated | Ancienne version du plugin passerelle | Téléchargez et installez la dernière version depuis app.fozzels.com |
| The "AIOSEO API Sync" plugin is not installed or not active | Le plugin passerelle est introuvable | Téléchargez-le depuis app.fozzels.com et activez-le dans l'administration WordPress |
| Failed to verify All in One SEO plugin status | Le endpoint de vérification du plugin n'a pas pu être joint | Vérifiez la connectivité WordPress et réessayez |

**Erreurs WPML**

| Error | Meaning | Fix |
|-------|---------|-----|
| WPML plugin is not active or not installed | WPML est introuvable sur WordPress | Installez et activez le plugin WPML dans l'administration WordPress |
| WPML is active but no languages are configured | WPML est installé mais aucune langue n'a été ajoutée | Accédez à WPML → Languages et ajoutez au moins une langue supplémentaire |

**Erreurs de conflit**

| Error | Meaning | Fix |
|-------|---------|-----|
| Both Yoast SEO and All in One SEO are active at the same time | Conflit de plugins | L'utilisation simultanée des deux peut provoquer des conflits — désactivez l'un d'eux dans l'administration WordPress |

**Général**

| Error | Meaning | Fix |
|-------|---------|-----|
| An unexpected error occurred while connecting | Erreur inconnue | Réessayez ; si le problème persiste, contactez le support Fozzels |

---

## Problèmes courants

**L'intégration ne récupère pas les produits**

- Vérifiez que l'interrupteur **Active** est sur ON
- Vérifiez que les sites web et les boutiques sont activés
- Déclenchez une récupération manuelle depuis la page de l'intégration

**Les attributs n'apparaissent pas dans le filtre du Catalog ni dans les prompts des Flows**

- L'attribut nécessite l'indicateur **Filterable** — accédez à Integration → Attributes et activez-le

**Impossible de définir un attribut comme cible de sortie d'un Flow**

- L'attribut nécessite l'indicateur **Mutable** — accédez à Integration → Attributes et activez-le

**Problèmes de connexion Shopify**

- **Authorized** et **REST API Connected** doivent tous deux être au vert
- Vérifiez à nouveau que tous les scopes d'API requis sont activés dans votre application personnalisée Shopify

**Magento — `fozzels_completion_date` manquant**

- Il doit être ajouté manuellement à chaque Attribute Set dans Magento Admin
- Accédez à : Catalog → Attributes → Attribute Sets → ouvrez chaque ensemble → ajoutez l'attribut

**Quota de boutiques dépassé**

- Vous avez atteint le nombre maximal de boutiques actives de votre plan
- Désactivez les boutiques inutilisées ou changez de plan sur [Plans](https://app.fozzels.com/user/settings/plans)

**Produits marqués comme "lost"**

- Des produits ou des boutiques ont été supprimés de la plateforme source
- Les éléments "lost" sont conservés dans Fozzels à titre de référence mais ne sont plus synchronisés

---

## Gérer les intégrations

- **Archive** — désactive l'intégration et la masque de la liste principale ; les données sont conservées et peuvent être restaurées
- **Pull progress** — barre de progression en temps réel indiquant les éléments traités ; peut être mise en pause ou arrêtée
- **Bulk attribute update** — sélectionnez plusieurs attributs et modifiez leurs indicateurs en une seule fois
- **Auto-detect blank** — détecte automatiquement les attributs sans valeur sur l'ensemble des produits
