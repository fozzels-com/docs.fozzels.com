---
id: '103000406106'
title: "2.8.1 Intégration VTEX : autorisations requises pour la clé API"
sidebar_position: 18
slug: /integration-connectivity/vtex-integration-required-api-key-permissions
description: >-
  De quelles autorisations de clé API ai-je besoin pour connecter Fozzels à
  VTEX ? Pour connecter votre boutique VTEX à Fozzels, vous devez créer une clé
  API dans votre administration VTEX et
---

## De quelles autorisations de clé API ai-je besoin pour connecter Fozzels à VTEX ?

Pour connecter votre boutique VTEX à Fozzels, vous devez créer une clé API dans votre administration VTEX et lui attribuer les bonnes autorisations. Cet article explique précisément quelles autorisations activer.

## Étape 1 — Créer une clé API dans VTEX

1.  Connectez-vous au panneau d'administration de VTEX
2.  Accédez à **Account Management → Account → App Keys**
3.  Cliquez sur **Generate new key**
4.  Donnez-lui un nom (par exemple _Fozzels Integration_)
5.  Copiez l'**App Key** et l'**App Token** : vous en aurez besoin dans Fozzels

## Étape 2 — Attribuer des autorisations à la clé API

### Option A : utiliser le rôle d'intégration prédéfini (recommandé)

VTEX fournit un rôle prêt à l'emploi conçu pour les intégrations de catalogue externes :

1.  Dans les paramètres de votre App Key, accédez à **Roles**
2.  Recherchez et ajoutez le rôle : **IntegrationProfile-externalCatalog**
3.  Enregistrez : ce rôle unique couvre toutes les autorisations dont Fozzels a besoin

### Option B : ajouter manuellement des autorisations individuelles

Si vous préférez définir les autorisations minimales requises, ajoutez les ressources suivantes au rôle de votre clé API :

#### Catalog System

Resource

Why it is needed

Get sales channel list

Fozzels l'utilise pour se connecter à votre boutique et détecter vos paramètres de langue

Get product and SKU IDs

Nécessaire pour récupérer la liste complète des produits de votre catalogue

Get specification field list by category

Permet à Fozzels de lire les définitions de vos attributs produit

Get product specifications

Lit les valeurs d'attributs actuelles de chaque produit

#### Catalog

Resource

Why it is needed

Get product by ID

Récupère les détails complets du produit pour la génération de contenu par l'IA

Update product

**Autorisation d'écriture.** Fozzels l'utilise pour renvoyer vers votre boutique les descriptions, titres et méta-descriptions générés

Get SKU by product ID

Récupère les informations au niveau SKU pour chaque variante de produit

Get SKU file

Lit les images produit existantes

Add SKU file

**Autorisation d'écriture.** Nécessaire si vous utilisez Fozzels pour générer et envoyer des images produit

Create/update product specification

**Autorisation d'écriture.** Permet à Fozzels de réécrire le contenu généré dans les champs d'attributs produit

#### Category

Resource

Why it is needed

Get category tree

Fozzels utilise la structure de vos catégories pour organiser votre catalogue de produits

## Étape 3 — Saisir les identifiants dans Fozzels

1.  Connectez-vous à votre compte Fozzels
2.  Accédez à **Integrations → Add integration → VTEX**
3.  Saisissez votre **Account name** (le sous-domaine de votre boutique VTEX, par exemple `mystore`)
4.  Saisissez l'**App Key** et l'**App Token** de l'étape 1
5.  Cliquez sur **Test connection** pour vérifier que tout fonctionne

## Foire aux questions

**Dois-je donner à Fozzels l'accès aux commandes ou aux paiements ?**
Non. Fozzels travaille uniquement avec votre catalogue de produits. Il n'a besoin d'aucun accès aux commandes, à la logistique, aux prix, au tunnel de commande ni à aucune information de paiement.

**J'ai une boutique multilingue / internationale. Ai-je besoin d'autorisations supplémentaires ?**
Pour les boutiques monolingues, les autorisations ci-dessus suffisent. La réécriture multilingue figure sur notre feuille de route et pourra nécessiter une autorisation supplémentaire lors de sa sortie. Nous mettrons alors cet article à jour.

**Puis-je restreindre la clé API à des adresses IP spécifiques ?**
Oui. Les adresses IP actuelles de Fozzels sont listées dans [2.1.1. Connection Requirements: IP Addresses, User-Agent and Firewall Settings](./connection-requirements.md).
