---
title: "Catalogue produit : navigation, filtrage et création de Flows"
sidebar_position: 9
slug: /data-import-and-quality/product-catalog-navigating-filtering-and-creating-flows
description: >-
  Le Catalog affiche tous les produits récupérés depuis votre boutique
  connectée. Découvrez comment le parcourir, filtrer les produits avec le
  condition query builder et créer un Content Flow ciblé à partir d'une
  sélection.
keywords:
- flux de contenu
---

Le Catalog affiche tous les produits récupérés depuis votre boutique connectée. C'est votre vue centrale des données produit dans Fozzels.

Accédez au [Catalog](https://app.fozzels.com/catalog)

---

## Parcourir le Catalog

### Sélecteur de boutique

En haut de la page, sélectionnez la boutique dont vous souhaitez afficher les produits. Chaque boutique est présentée avec le nom de son intégration, son site web et sa langue (locale).

### Liste des produits

Les produits sont affichés dans un tableau paginé (25 par page par défaut). Vous pouvez :

- **Trier** selon n'importe quelle colonne visible
- **Afficher ou masquer des colonnes** : afficher/masquer les colonnes d'attributs
- **Mode plein écran** : agrandir le tableau pour qu'il occupe tout l'écran
- **Survoler une ligne de produit** : prévisualiser les images du produit sans l'ouvrir

### Détail du produit

Cliquez sur un produit pour ouvrir sa page de détail, qui contient :

- La galerie d'images complète (image principale + miniatures)
- Toutes les valeurs d'attributs de ce produit dans cette boutique
- Des liens directs vers l'intégration et le site web

---

## Filtrer les produits

Utilisez le **Condition Query Builder** pour filtrer les produits selon les valeurs de leurs attributs.

- Créez des conditions avec une logique AND/OR
- Filtrez par n'importe quel attribut pour lequel l'option **Filterable** est activée dans Integration → Attributes
- Exemples :
  - "description is empty"
  - "category equals Electronics AND price is greater than 100"
  - "sku contains ABC"

Cliquez sur **Search** pour appliquer le filtre. Le nombre de produits dans l'en-tête est mis à jour pour indiquer combien de produits correspondent.

Cliquez sur **Reset** pour effacer le filtre et afficher tous les produits.

> Si un attribut n'apparaît pas dans le filter builder, allez dans Integration → Attributes et activez l'option **Filterable** pour cet attribut.

---

## Créer un Flow à partir du Catalog

Le Catalog est le moyen le plus rapide de créer un Content Flow ciblé :

1. Créez un filtre pour trouver les produits que vous souhaitez traiter (par exemple "description is empty")
2. Sélectionnez les produits correspondants (case à cocher sur chaque ligne, ou sélection de tous les produits sur l'ensemble des pages)
3. Cliquez sur **"Create Flow on Selected Products"** : cela ouvre l'assistant de création de Flow, pré-rempli avec votre sélection sous forme de condition
4. Terminez la configuration du Flow (modèle d'IA, prompt, attribut cible)

C'est idéal lorsque vous souhaitez traiter un sous-ensemble précis de produits plutôt que de créer les conditions manuellement dans l'assistant de Flow.

---

## Problèmes courants

**Aucun produit visible**

- L'intégration n'a pas encore été récupérée : allez dans votre [Integration](https://app.fozzels.com/integrations/definitions) et lancez une récupération des produits
- Assurez-vous que la boutique est active

**Attributs de filtre absents du condition builder**

- L'attribut doit avoir l'option **Filterable** : allez dans Integration → Attributes et activez-la

**Les images des produits ne s'affichent pas**

- Les images sont récupérées depuis votre boutique : si des images sont absentes dans Fozzels, vérifiez que l'intégration récupère correctement les données et que l'URL de base des médias est configurée (Magento)

**Les produits ne sont pas à jour**

- Lancez une récupération manuelle depuis la page de votre Integration, ou attendez la prochaine récupération planifiée
