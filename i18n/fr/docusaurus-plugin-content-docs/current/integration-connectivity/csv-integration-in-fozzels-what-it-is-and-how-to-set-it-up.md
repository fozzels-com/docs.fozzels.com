---
id: '103000406293'
title: "2.9.1 - Intégration CSV dans Fozzels : présentation et configuration"
sidebar_position: 20
slug: >-
  /integration-connectivity/csv-integration-in-fozzels-what-it-is-and-how-to-set-it-up
description: >-
  Qu'est-ce que l'intégration CSV ? L'intégration CSV vous permet de connecter
  votre catalogue produit à Fozzels à l'aide d'un fichier CSV standard. Si votre
  plateforme n'a pas d'intégration directe
---

## Qu'est-ce que l'intégration CSV ?

L'intégration CSV vous permet de connecter votre catalogue produit à Fozzels à l'aide d'un fichier CSV standard. Si votre plateforme n'a pas d'intégration directe avec Fozzels — pas de problème : exportez simplement vos données au format CSV et importez-les. Fozzels lira vos produits et leurs attributs, et vous donnera accès à l'ensemble des fonctionnalités de la plateforme.

## Étape 1 — Créer une nouvelle intégration

Dans le menu de navigation supérieur, cliquez sur **Integrations**, puis sur le bouton **\+ Create** dans le coin supérieur droit.

## Étape 2 — Choisir le type d'intégration

Une liste des plateformes disponibles s'affiche : Akeneo, Shopify, Magento2, WooCommerce, et d'autres. Pour vous connecter via un fichier, sélectionnez **Raw File**.

## Étape 3 — Configurer l'intégration

Un formulaire en trois étapes s'ouvre : **Configuration → Websites & Stores → Attributes**.

### Champs obligatoires

Avant d'importer votre fichier CSV, renseignez les trois champs obligatoires :

-   **Name** — un nom pour l'intégration (par ex. `My Product Catalog CSV`)
-   **URL** — un lien vers la source (le cas échéant)
-   **SKU column** — le nom exact de la colonne de votre fichier qui identifie chaque produit de manière unique (par ex. `sku`, `product_id`, `article`)

Cliquez ensuite sur **Save**. La zone d'import du CSV ne devient active qu'après l'enregistrement.

> ? **Pourquoi ?** Le système doit connaître le nom de la colonne SKU avant de lire le fichier — cela est nécessaire pour un traitement correct des données. Enregistrez d'abord vos paramètres, puis importez le fichier.

### Options de format

Parameter

Default value

Description

Format

CSV

Format du fichier

Delimiter

Comma (,)

Séparateur de colonnes

Enclosure character

`"`

Caractère encadrant les valeurs

Encoding

UTF-8

Encodage du fichier

First row is header

Yes

Indique si la première ligne contient les en-têtes de colonnes

SKU column

—

Nom de la colonne qui identifie chaque produit de manière unique

### Global Pull Schedule

Ce paramètre définit l'heure de la synchronisation automatique. La valeur par défaut est `03:30`. Si vous avez besoin d'une planification différente pour une boutique précise, vous pouvez la remplacer dans les paramètres de cette Store.

> ? Pour activer l'intégration, activez l'interrupteur **Active** dans le coin supérieur droit du formulaire. Sans cela, aucune synchronisation ne sera exécutée.

## Étape 4 — Importer le fichier CSV

Après l'enregistrement, la zone d'import devient active. Vous pouvez importer votre fichier de deux manières :

-   **Drag & drop** — faites glisser votre CSV directement dans la zone d'import
-   **Upload** — cliquez sur le bouton bleu **Upload** et sélectionnez un fichier sur votre ordinateur

Une fois le fichier importé, son nom et sa taille apparaissent sous la zone de glisser-déposer — ce qui confirme que le fichier a bien été ajouté.

> ? Lors de la lecture du fichier, le système utilise les paramètres de format que vous avez définis précédemment : séparateur, encodage et caractère d'encadrement.

Après avoir importé le fichier, cliquez de nouveau sur **Save** — le système vous redirige automatiquement vers l'onglet **Websites & Stores**.

## Étape 5 — Websites & Stores

Cliquez sur le bouton **Pull Websites and Stores** — le système créera un enregistrement pour votre site web et votre boutique virtuels. C'est l'approche standard de Fozzels : même lorsque vous travaillez avec un import de fichier, la plateforme utilise la structure universelle site web → boutique.

Une fois l'enregistrement affiché dans le tableau, **activez le site web et la boutique** à l'aide des interrupteurs de la colonne **Status**.

Lorsque les deux sont actifs, le bouton **Pull products** devient disponible. Cliquez dessus pour lancer l'importation des produits de votre fichier CSV dans le catalogue Fozzels.

> ? Le tableau affiche également le **Pull schedule** — l'heure de synchronisation que vous avez définie à l'étape 3. Vous pouvez la remplacer par Store si nécessaire.

## Étape 6 — Consulter les produits importés

Une fois la récupération terminée (la barre de progression atteint 100 %), cliquez sur l'icône **View products** dans la colonne Actions pour ouvrir le catalogue produit de cette intégration.

### Comment les données sont organisées :

-   Chaque **ligne** du CSV devient un produit distinct
-   Chaque **colonne** du CSV devient un attribut de produit

### Gérer la visibilité des colonnes

Tous les attributs ne sont pas affichés par défaut. Pour choisir les colonnes à afficher, cliquez sur **Column visibility** dans le coin supérieur droit du tableau et cochez les attributs dont vous avez besoin.

### Filtrer les produits

Deux options de filtrage sont disponibles :

-   **Inline filters** — champs situés directement sous les en-têtes de colonnes pour une recherche rapide
-   **Advanced filter** — logique de conditions AND/OR flexible pour les requêtes complexes

### Actions groupées

Une fois les produits souhaités sélectionnés, tous les outils Fozzels sont disponibles : regrouper des produits, créer des ensembles de produits et lancer un Content Flow, un Image Flow ou un Video Flow à partir de votre sélection.

> ? Ainsi, votre fichier CSV devient une source de données pleinement fonctionnelle dans Fozzels — avec tous les outils de contenu de la plateforme à votre disposition.

## Étape 7 — Préparer les attributs avant de créer un Flow

Avant de créer un Content Flow, assurez-vous que l'attribut cible est correctement configuré. Accédez à l'onglet **Attributes** de votre intégration et cliquez sur l'icône de modification (crayon) à côté de l'attribut que vous souhaitez utiliser :

-   **Mutable** — cette option doit être activée. Sans elle, Fozzels ne peut pas écrire le contenu généré dans ce champ, et l'attribut n'apparaîtra pas dans la liste déroulante lors de la création d'un Flow.
-   **Allow HTML** — activez cette option si vous souhaitez générer du contenu avec balisage HTML (par ex. des descriptions avec des balises `<p>`, `<ul>`, etc.).

> ? Pour en savoir plus sur les attributs, la Data Density et les champs personnalisés, consultez notre article : [Analyse de la qualité des attributs](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

## Étape 8 — Créer un Content Flow

Pour générer du contenu à partir de vos produits importés, vous devez créer un **Content Flow**. Il existe deux façons de procéder :

**Option 1 — via le menu Content Flows :** accédez à **Content Flows** dans le menu supérieur et cliquez sur **\+ Create**.

**Option 2 — directement depuis le catalogue :** sélectionnez les produits souhaités (ou tous) → ouvrez la liste déroulante **Actions** → sélectionnez **Create a new Content Flow**.

Dans le formulaire de création, saisissez un **Name** et sélectionnez l'**Attribute** — la colonne pour laquelle le contenu sera généré.

Le reste du processus est standard et comprend quatre étapes :

**Étape 1 — New Flow :** nom et attribut cible.

**Étape 2 — AI Configuration :** choisissez un fournisseur d'IA (OpenAI, Google Gemini, etc.), un modèle, le style et le ton du texte, ainsi que la limite de tokens.

**Étape 3 — Flow Selection & Prompt :** activez le flow, configurez le filtrage des produits et rédigez votre prompt. Utilisez des attributs avec un score de Data Density élevé pour de meilleurs résultats. Pour en savoir plus, consultez notre article : [Création de prompts et filtrage](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor).

**Étape 4 — Automation :** définissez le nombre de produits par exécution, configurez la planification et lancez via **Run Now** ou **Plan & Close**.

> ? Si vous découvrez les Content Flows, nous vous recommandons de lire : [Définition d'un flow et types de contenu](/content-creation-flows/flow-definition-and-content-types-text-image-video) et [Créer un nouveau Content Flow et paramètres initiaux](/content-creation-flows/creating-a-new-content-flow-and-initial-settings).

## Étape 9 — Récupérer les résultats

Contrairement aux autres intégrations (Shopify, Magento, etc.), **le bouton "Save & Sync" ne fonctionne pas pour le CSV** — il n'existe aucune connexion en direct avec une boutique vers laquelle renvoyer les données. Les résultats sont donc téléchargés manuellement via un export.

### Comment exporter le contenu généré

1.  Accédez à la **Batch List** de votre flow
2.  Sélectionnez les enregistrements souhaités via **Actions → Select All** (ou manuellement)
3.  Dans la liste déroulante **Actions**, choisissez **Export as CSV**
4.  Confirmez dans la fenêtre contextuelle en cliquant sur **Start Export**
5.  Le système place le fichier en file d'attente — vous recevrez une notification lorsqu'il sera prêt

### Où télécharger le fichier

Accédez à **Dashboard → Export / Generated Data**. Cette page affiche un tableau de tous les fichiers générés avec le statut **Available**. Repérez votre fichier et cliquez sur le bouton **ZIP** pour le télécharger.

> ⚠️ **Le fichier n'est disponible que pendant 24 heures** à compter de sa création. Veillez à le télécharger avant son expiration.

## Liens utiles

-   [Analyse de la qualité des attributs. Data Density. Attributs personnalisés](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes)
-   [Définition d'un flow et types de contenu (texte, image, vidéo)](/content-creation-flows/flow-definition-and-content-types-text-image-video)
-   [Créer un nouveau Content Flow et paramètres initiaux](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Création de prompts et filtrage. Éditeur de prompts par glisser-déposer](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)
