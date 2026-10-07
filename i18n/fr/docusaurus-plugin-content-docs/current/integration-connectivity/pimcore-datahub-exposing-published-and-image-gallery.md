---
title: "2.11.2. Pimcore : exposer des attributs via DataHub (indicateur de publication et galerie d'images)"
sidebar_position: 24
slug: >-
  /integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery
description: >-
  Fozzels découvre les attributs produit et catégorie de Pimcore à partir de
  votre endpoint GraphQL DataHub. Ce guide explique comment exposer
  l'indicateur de publication et votre galerie d'images afin que Fozzels puisse
  les lire et les écrire.
---

Contrairement aux plateformes dotées d'un schéma produit fixe, Pimcore vous permet de modéliser vos propres classes d'objets de données — Fozzels ne fournit donc pas de liste d'attributs fixe pour celui-ci. À la place, Fozzels **découvre les attributs en interrogeant par introspection votre endpoint GraphQL DataHub** : tout ce que la Schema Definition de l'endpoint expose est exactement ce que Fozzels voit.

Si un attribut est absent dans Fozzels, il est presque toujours absent du **Query Schema** de l'endpoint dans Pimcore.

## Comment le schéma est converti en attributs Fozzels

| Schema Definition DataHub | Effet dans Fozzels |
| --- | --- |
| Champ dans le **Query Schema** | L'attribut est créé et ses valeurs sont récupérées |
| Champ dans le **Mutation Schema** | L'attribut est marqué comme **writable** (modifiable), ce qui permet aux Flows d'y envoyer le contenu généré |

> Un champ ajouté **uniquement** au Mutation Schema ne devient jamais un attribut : il n'y a rien à lire. Ajoutez toujours d'abord le champ au Query Schema ; ajoutez-le aussi au Mutation Schema lorsque Fozzels doit y écrire.

Après **toute** modification de la Schema Definition :

1. **Save** la configuration DataHub dans Pimcore.
2. Dans Fozzels, ouvrez l'intégration et cliquez sur **Synchronize** : cela relit le schéma et crée les nouveaux attributs.
3. Dans l'onglet **Attributes**, activez le nouvel attribut et définissez ses options **Filterable** / **Mutable** selon vos besoins.

## Ajouter l'indicateur de publication (published)

L'état de publication de Pimcore est une *colonne système*, et DataHub ne l'expose pas par défaut : il faut l'ajouter explicitement au schéma.

**Dans Pimcore :**

1. Accédez à **Settings → Data Hub** et ouvrez la configuration de l'endpoint utilisé par Fozzels.
2. Ouvrez l'onglet **Schema Definition** et modifiez la configuration des champs de votre classe **Product** (répétez l'opération pour la classe Category si vous le souhaitez aussi).
3. Dans l'arborescence des attributs, ouvrez le groupe **System** et ajoutez **`published`** aux colonnes du **Query Schema**.
4. Ajoutez-le également au **Mutation Schema** si Fozzels doit pouvoir publier/dépublier des objets.
5. Enregistrez la configuration.

**Dans Fozzels :** ouvrez l'intégration, cliquez sur **Synchronize**, puis activez le nouvel attribut `published` dans l'onglet **Attributes**.

> **Important :** par défaut, Fozzels ne récupère que les objets **publiés** ; l'attribut aurait donc la valeur `true` pour chaque produit. Pour travailler avec les deux états, activez **Include unpublished objects** dans les paramètres de l'intégration dans Fozzels. Les produits non publiés arrivent alors comme des produits ordinaires, et l'attribut `published` permet de les distinguer : vous pouvez filtrer dessus et l'utiliser dans les conditions des Flows.

## Exposer la galerie d'images

### Lecture des images produit

Fozzels construit la galerie multimédia d'un produit à partir de **chaque champ de type image** exposé par le Query Schema — le nom des champs importe peu. Types de champ pris en charge :

- **Image**
- **Advanced Image** (image avec zones actives/marqueurs)
- **Image Gallery**

Ajoutez votre ou vos champs d'image au **Query Schema** de la classe Product, enregistrez, puis cliquez sur **Synchronize** dans Fozzels. Toutes les images de tous les champs d'image exposés apparaissent dans la galerie du produit, et les textes alternatifs existants sont lus à partir de l'entrée de métadonnées `alt` de l'asset, dans chaque langue de la boutique.

### Envoi des images générées

Pour que Fozzels puisse téléverser dans Pimcore les images générées par IA, l'endpoint doit remplir trois conditions :

1. **Un champ Image Gallery modifiable.** La classe Product doit comporter un champ de type **Image Gallery**, exposé dans le **Mutation Schema**. Fozzels le reconnaît par son type, il peut donc porter n'importe quel nom. Les images générées sont **ajoutées à la suite** de la galerie : vos images existantes ne sont jamais remplacées.
2. **Requêtes et mutations Asset activées.** Dans la Schema Definition, activez l'entité **Asset** pour la **query** et la **mutation**. Fozzels s'en sert pour stocker le fichier image (`createAsset`) et pour lire et écrire les textes alternatifs sur l'asset (`getAsset` / `updateAsset`).
3. **Permissions du workspace.** Dans l'onglet **Security Definition** de l'endpoint, le workspace doit accorder :
   - **read + update** sur les objets produit,
   - **read** sur l'arborescence d'assets contenant vos images produit,
   - **create** sur le dossier où les nouvelles images doivent être placées, et **update** sur les assets (pour les textes alternatifs).

**Où les fichiers sont téléversés :** une image générée est stockée à côté des images existantes de la galerie du produit. Pour les produits qui n'ont pas encore d'images, configurez le paramètre **Asset folder** de l'intégration dans Fozzels (par exemple `/products`) : ce dossier doit exister dans Pimcore et le workspace doit y autoriser **create**.

### Textes alternatifs

Fozzels écrit les textes alternatifs dans les métadonnées de l'asset sous le nom conventionnel **`alt`**, pour la langue de la boutique. La langue doit être configurée sur l'instance Pimcore (**Settings → System Settings → Localization**) ; Pimcore ignore silencieusement les métadonnées dans des langues inconnues, et Fozzels signale cela par une erreur plutôt que de perdre le texte.

## Dépannage

| Message dans Fozzels | Cause | Solution |
| --- | --- | --- |
| Un attribut attendu est manquant | Champ absent du **Query Schema** (ou présent uniquement dans le Mutation Schema) | Ajoutez-le au Query Schema, enregistrez, **Synchronize** |
| *Pimcore does not accept writes to … — the field is read-only on this DataHub endpoint* | Champ absent du **Mutation Schema** | Ajoutez-le au Mutation Schema, enregistrez, **Synchronize** |
| *Pimcore exposes no writable image gallery on …* | Aucun champ **Image Gallery** dans le Mutation Schema | Ajoutez le champ de galerie au Mutation Schema |
| *No Pimcore asset folder is configured for this integration…* | Le produit n'a pas encore d'images et le paramètre **Asset folder** est vide | Définissez **Asset folder** sur l'intégration dans Fozzels |
| *The Pimcore asset folder … does not exist on this instance* | Le chemin configuré est incorrect | Faites pointer le paramètre vers un dossier existant dans l'arborescence d'assets de Pimcore |
| *Pimcore refused to store the image …* | Le workspace n'a pas **create** sur le dossier cible | Accordez create dans la Security Definition de l'endpoint |
| *Pimcore accepted the update of asset … but kept no alt text for …* | La langue de la boutique n'est pas configurée dans Pimcore | Ajoutez la langue sous **Settings → System Settings → Localization** |
