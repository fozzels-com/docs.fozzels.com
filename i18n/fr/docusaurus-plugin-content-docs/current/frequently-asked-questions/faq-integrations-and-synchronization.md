---
title: "FAQ : intégrations et synchronisation"
sidebar_position: 9
unlisted: true
slug: /frequently-asked-questions/faq-integrations-and-synchronization
description: >-
  Récupérations partielles de produits, problèmes de connexion Shopware et
  Shopify, variantes et Packs, HTML dans les attributs, plugins WooCommerce,
  limites de débit, récupération d'images et problèmes d'URL multi-boutiques.
---

## La récupération automatique des produits ne ramène qu'une partie de mon catalogue. Comment obtenir tous les produits ?

Si votre catalogue dépasse les limites d'API par défaut, la récupération peut ne pas ramener tous les produits. Demandez à votre fournisseur de PIM d'augmenter la limite d'API. À titre de solution temporaire, l'équipe Fozzels peut terminer la récupération manuellement.

## Les limites d'API ont été augmentées mais la récupération des produits ne fonctionne toujours pas.

Le fournisseur de PIM devra peut-être redémarrer ses services. Contactez-le pour confirmer que les changements sont actifs. Le support Fozzels peut effectuer une récupération manuelle pendant la résolution du problème.

## Fozzels ne parvient pas à établir de connexion REST API avec ma boutique Shopware.

Vérifiez à nouveau l'Access Key ID et la Secure Access Key. Si elles sont correctes, le problème vient probablement des autorisations d'accès. Dans l'administration Shopware, allez dans Settings → System → Integrations, ouvrez l'intégration Fozzels, activez l'interrupteur **Administrator** et enregistrez.

## Fozzels exige un accès Administrator dans Shopware, mais je m'inquiète pour la confidentialité.

Le rôle Administrator est actuellement requis pour que Fozzels puisse lire les données produit. Si l'octroi d'un accès administrateur complet vous préoccupe, contactez l'équipe Fozzels pour discuter de la possibilité d'une configuration plus restreinte.

## Mes clés API sont invalides. Que dois-je vérifier ?

Assurez-vous d'envoyer le bon type de clé (clé Integration commençant par `SWIA...`, et non une clé Sales Channel). Vérifiez que la clé secrète n'a pas été tronquée lors du copier-coller. Essayez de créer une nouvelle Integration et d'envoyer de nouvelles clés.

## Le contenu est généré dans Fozzels mais n'apparaît pas dans ma boutique Shopware.

Cela peut se produire lorsque la synchronisation échoue pour certains produits en raison d'attributs manquants, de problèmes d'autorisations ou de la configuration des variantes. Contactez le support en lui fournissant des exemples de produits précis.

## Comment Fozzels gère-t-il les produits avec de nombreuses variantes (tailles, couleurs) ?

Fozzels propose une fonctionnalité **Packs** qui regroupe les variantes — toutes les tailles d'une même couleur sont traitées comme un seul produit. Ajoutez le filtre "Pack Parent ID is not empty" dans votre flow pour utiliser cette fonctionnalité.

## Des balises HTML (par ex. `<p>`) apparaissent dans les champs Shopify. Comment corriger cela ?

Désactivez la prise en charge du HTML pour l'attribut : onglet Attributes → Edit (icône crayon) → Technical Flags → désactivez **Allow HTML** → Save. Régénérez ensuite le contenu et vérifiez.

## Fozzels peut-il écrire du texte brut (sans HTML) dans mon PIM ?

Oui. Allez dans l'onglet Attributes → Edit Attribute → décochez **Allow HTML** → Save.

## J'obtiens une erreur "Website is not active" en cliquant sur Save and Preview.

Cela peut se produire en raison de problèmes de connexion temporaires après une mise à jour de l'API. Contactez le support — il peut vérifier et réactiver la connexion au site web.

## J'ai changé l'URL du domaine de ma boutique. Dois-je mettre à jour Fozzels ?

Oui. Si vous changez de domaine, la configuration de Fozzels peut devoir être mise à jour. Contactez le support pour mettre à jour le domaine.

## Plusieurs boutiques affichent le même domaine dans Fozzels. Est-ce normal ?

Cela peut arriver lorsque Fozzels ne reçoit qu'un seul domaine au lieu d'un domaine distinct par boutique. La synchronisation est correctement gérée par boutique en arrière-plan. Des améliorations de l'interface sont prévues.

## De quels plugins ai-je besoin pour une intégration WooCommerce ?

Assurez-vous que : l'API REST est activée, le dernier plugin Fozzels AIOSEO est installé, et le plugin ACF to REST API (v3.3.4) est installé et actif.

## Comment configurer l'intégration AIOSEO avec Fozzels (WooCommerce) ?

Installez le plugin de synchronisation Fozzels AIOSEO sur WordPress. "Focus Keyphrase" dans Fozzels correspond à Focus Keyword dans WooCommerce ; "SEO Keywords" correspond à Additional Keywords.

## Comment configurer l'intégration Yoast SEO avec Fozzels ?

Installez le plugin de synchronisation Fozzels Yoast. Assurez-vous que Yoast est entièrement configuré et activé dans WordPress.

## Comment Fozzels gère-t-il le contenu multilingue avec WPML ?

Fozzels donne accès aux boutiques de chaque langue. Créez des flows distincts par boutique de langue. Fozzels ne traduit pas le contenu lui-même, mais vous pouvez paramétrer vos prompts pour générer dans la langue souhaitée.

## Comment utiliser des champs produit personnalisés (ACF) dans les prompts Fozzels ?

Fozzels prend en charge ACF pour WooCommerce. Activez la prise en charge d'ACF et les champs personnalisés apparaîtront comme attributs dans Fozzels.

## Les nouveaux champs ACF ajoutés dans WordPress n'apparaissent pas dans Fozzels.

Les nouveaux champs ACF nécessitent une récupération d'attributs réussie pour apparaître. Assurez-vous que le plugin ACF to REST API est actif et que la connexion API fonctionne.

## La récupération des données produit ne fonctionne plus / j'obtiens des échecs d'importation.

Cela peut être dû à un limiteur de débit ou à un pare-feu qui bloque les requêtes API de Fozzels. Autorisez les adresses IP et le User-Agent de Fozzels et excluez-les de la limitation de débit — voir [2.1.1. Prérequis de connexion : adresses IP, User-Agent et paramètres du pare-feu](../integration-connectivity/connection-requirements.md).

## Les URL de la boutique mènent à des erreurs 404.

Cela peut se produire avec les structures de produits parent/enfant. Contactez le support avec des exemples — il pourra corriger le mappage des URL.

## Les textes Shopware sont envoyés aux variantes de taille au lieu des variantes de couleur.

Après la mise à jour du Pack Parent ID, le niveau de synchronisation a pu changer. Contactez le support pour rétablir la cible de synchronisation au niveau de la variante couleur/parent.

## Ma boutique apparaît comme "lost in integration" / j'obtiens une erreur de boutique inactive.

L'URL d'origine de la boutique n'est plus active. Dupliquez les flows concernés et sélectionnez la bonne boutique active lors de la duplication. Les anciens flows peuvent être archivés.

## L'URL de ma boutique pointe vers le mauvais domaine (plusieurs vitrines).

Fozzels résout les URL par langue, et non par canal de vente, et choisit le premier domaine disponible. Il s'agit d'une limitation connue en cours d'amélioration.

## Comment Fozzels gère-t-il plusieurs canaux de vente Shopware ?

Le contenu est généré une fois par produit et par langue, et non par canal de vente. Les canaux de vente peuvent être utilisés comme filtres de catalogue. Cela réduit les coûts en tokens.

## Il n'y a aucune image dans mon flux produit / catalogue.

Les images manquantes sont souvent dues à des restrictions d'IP sur votre serveur. Autorisez les adresses IP et le User-Agent de Fozzels — voir [2.1.1. Prérequis de connexion : adresses IP, User-Agent et paramètres du pare-feu](../integration-connectivity/connection-requirements.md).

## Les images de produits ne s'affichent pas dans le catalogue Fozzels.

Il peut s'agir d'un problème d'intégration lié à la récupération des images. Contactez le support — il enquêtera et corrigera le problème côté Fozzels.

## J'obtiens une erreur de synchronisation : impossible d'écrire dans les attributs de type liste déroulante.

Fozzels ne peut écrire du texte que dans des attributs de type texte, pas dans des champs de type liste déroulante/sélection. Vérifiez le type de l'attribut dans votre boutique en ligne.

## Comment renommer des attributs dans Fozzels ?

Allez dans les paramètres de l'attribut, modifiez le nom dans le champ de saisie et enregistrez. Il s'agit uniquement d'une modification d'affichage au sein de Fozzels.

## Les noms d'attributs ne se mettent pas à jour automatiquement dans les prompts après une modification du PIM.

Lorsque vous renommez des attributs dans votre PIM, Fozzels peut les traiter comme de nouveaux attributs. Renommez manuellement l'attribut dans Fozzels pour corriger cela.

## Le contenu a été synchronisé avec les mauvais produits après des modifications du site.

Fozzels récupère les catalogues chaque nuit. Si vous apportez des modifications importantes, déclenchez toujours une récupération manuelle des produits afin de garantir l'exactitude des données.

## J'obtiens une erreur 429 Too Many Requests lors de la synchronisation avec mon PIM.

Le limiteur de débit de votre PIM bloque les requêtes. Demandez à votre fournisseur de PIM d'autoriser les adresses IP et le User-Agent de Fozzels et de les exclure de la limitation de débit — voir [2.1.1. Prérequis de connexion : adresses IP, User-Agent et paramètres du pare-feu](../integration-connectivity/connection-requirements.md). Si l'erreur persiste, contactez le support Fozzels.

## Quels champs Fozzels peut-il mettre à jour dans Katana PIM ?

Le endpoint standard prend en charge : le nom, la description courte, la description complète, le meta title et la meta description. D'autres champs peuvent nécessiter des endpoints API distincts.

## Comment activer l'intégration LangShop avec Shopify ?

Partagez des captures d'écran de vos paramètres LangShop dans Shopify afin que l'équipe Fozzels puisse vérifier votre configuration et déterminer si une configuration supplémentaire est nécessaire.

## Comment re-synchroniser un batch entier en une seule fois ?

Ouvrez le flow → Batch List → activez "Show all content" → sélectionnez toutes les lignes → Actions → **Re-sync content**. L'opération passe par la file d'attente générale.

## Puis-je actualiser l'intégration Shopify sans perte de données ?

Contactez le support avant d'actualiser — il pourra rechercher la cause racine. L'actualisation n'entraîne généralement pas de perte de données, mais l'équipe doit d'abord vérifier.

## Shopify Markets n'apparaît pas dans Fozzels.

Cela est généralement dû à des restrictions de l'API dans Shopify — les paramètres de l'API doivent être ajustés. Contactez le support ou votre agence partenaire.

## J'obtiens des erreurs de génération dues à de grandes images (limite de 5 Mo).

Les modèles d'IA ont une limite d'environ 5 Mo par image et par requête. Fozzels convertit automatiquement les PNG en JPG. Envisagez d'utiliser le format JPG pour vos images de produits.

## La structure de mes catégories multilingues est incorrecte (par ex. tchèque vs allemand).

Fozzels peut afficher la structure de catégories de la langue par défaut. Contactez le support pour ajuster le mappage des catégories multilingues.

## À quelle fréquence Fozzels synchronise-t-il les données depuis mon PIM ?

Les récupérations automatiques de produits s'exécutent chaque nuit après minuit. Pour des mises à jour immédiates, déclenchez une récupération manuelle.
