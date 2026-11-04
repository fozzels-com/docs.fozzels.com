---
title: 4.7.6 Exporter le contenu généré vers Excel et CSV
sidebar_position: 22.5
slug: /content-creation-flows/exporting-generated-content-to-excel-and-csv
description: >-
  Téléchargez le contenu généré depuis une Content Completion List sous forme de
  fichier Excel ou CSV, choisissez les produits et les colonnes, et ouvrez le
  fichier correctement.
---

## Vue d'ensemble

Vous pouvez télécharger le contenu généré depuis une Content Completion List sous forme de fichier Excel (.xlsx) ou CSV. Vous choisissez les produits et les colonnes, Fozzels crée le fichier en arrière-plan, et celui-ci apparaît sous **Export / Generated Data** pendant 24 heures.

L'export est utile lorsque vous devez lire les textes complets (ils sont tronqués dans le tableau), partager du contenu avec des collègues ou un client pour relecture, ou importer les résultats dans un autre système, par exemple un ERP, un PIM ou un tableur.

![Content Completion List avec Description, SEO Description et SEO Title générés](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/01-content-completion-list.png)

## Comment exporter

1. Ouvrez la **Content Completion List** du flux (batch) souhaité.
2. Cochez les produits à exporter. Le nombre d'éléments sélectionnés apparaît dans le menu, par exemple **Actions (3)**.
3. Cliquez sur **Actions → Export**.

    ![Menu Actions avec l'option Export et trois produits sélectionnés](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/02-actions-export.png)

4. Dans la fenêtre **Export Text Completions**, choisissez le format (CSV ou Excel) et, pour le CSV, le séparateur et l'option de ligne. Voir [Format de fichier](#format-de-fichier) ci-dessous.
5. Cochez les colonnes à inclure. Le contenu généré et le SKU sont sélectionnés par défaut.
6. Cliquez sur **Export as CSV** ou **Export as Excel**. Le fichier est créé en arrière-plan.
7. Dans la barre latérale, ouvrez **Dashboard → Export / Generated Data**.

    ![Barre latérale avec Export / Generated Data sous Dashboard](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/03-sidebar-export-generated-data.png)

8. Lorsque le statut indique **Available**, cliquez sur **ZIP** dans la colonne Download.

    ![Liste Export / Generated Data avec un fichier ZIP disponible](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/04-export-list-zip.png)

9. Décompressez l'archive : elle contient le fichier .xlsx ou .csv.

Seules les completions qui disposent déjà d'un contenu généré sont incluses. L'archive est disponible pendant **24 heures** ; passé ce délai, relancez l'export. Le nom du fichier est composé du nom du batch et du nombre d'enregistrements, par exemple `my batch - 3 Completions.csv`.

## Format de fichier

Choisissez Excel lorsqu'une personne lira le fichier, et CSV lorsque les données sont destinées à un autre système.

| Format | Quand l'utiliser | Détails |
| --- | --- | --- |
| Excel (.xlsx) | Relecture, modification, partage avec des collègues | S'ouvre directement, aucun réglage nécessaire. Le SKU est enregistré en tant que texte |
| CSV | Import dans un ERP, un PIM ou un autre système | Encodage UTF-8, valeurs texte entre guillemets, séparateur au choix |

![Options CSV : séparateur et Keep each value on one line](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/05-csv-options.png)

**Séparateur (CSV uniquement).** La virgule (,) est la norme pour la plupart des systèmes d'import. Le point-virgule (;) est destiné aux fichiers ouverts dans Excel avec des paramètres régionaux européens (Pays-Bas, Allemagne, France et autres) : Excel y attend « ; », sinon tout se retrouve dans une seule colonne.

**Keep each value on one line (CSV uniquement).** Les textes peuvent contenir des sauts de ligne, par exemple entre des paragraphes HTML ou dans le prompt. Sans cette option, les sauts de ligne restent à l'intérieur de la valeur (entre guillemets), et un produit occupe plusieurs lignes physiques dans le fichier. Avec cette option, les sauts de ligne sont remplacés par des espaces et chaque produit occupe exactement une ligne.

- Activez-la si votre système d'import ne prend pas en charge les sauts de ligne à l'intérieur des valeurs (fréquent pour les systèmes ERP).
- Pour le HTML, c'est sans risque : les espaces entre les balises ne modifient pas l'affichage du contenu.
- Pour du texte brut avec des paragraphes, les sauts de ligne sont remplacés par des espaces et ne peuvent pas être restaurés.

## Colonnes disponibles

Les colonnes sont réparties en quatre blocs. La case à cocher à côté du nom d'un bloc active ou désactive toutes ses colonnes en une seule fois, et le compteur (par ex. « 2 of 4 ») indique combien sont sélectionnées.

![Boîte de dialogue d'export avec tous les groupes de colonnes dépliés](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/06-export-columns.png)

| Bloc | Colonne | En-tête dans le fichier | Contenu |
| --- | --- | --- | --- |
| Generated content | Attributs générés par le flux | Code d'attribut, par ex. `descriptionHtml`, `seo.description`, `seo.title` | Les valeurs générées, en intégralité. Sélectionné par défaut |
| Product details | SKU | `sku` | Identifiant du produit. Sélectionné par défaut |
| Product details | Name | `name` | Nom du produit |
| Product details | Origin ID | `origin_id` | ID du produit dans la plateforme connectée (par ex. Shopify) |
| Product details | Entity type | `entity_type` | Type d'entité, par ex. `product` |
| Flow details | Batch confirmed | `batch_confirmed` | Indique si le résultat est confirmé (`0` = non confirmé) |
| Flow details | Prompt | `prompt` | Texte complet du prompt, données produit comprises. Long, avec des sauts de ligne |
| Flow details | Created at | `created_at` | Date d'ajout de l'enregistrement au batch (UTC) |
| Flow details | Executed at | `executed_at` | Date de la dernière génération (UTC) |
| Flow details | Synchronized at | `synchronized_at` | Date de synchronisation du contenu avec la boutique (UTC). Vide si pas encore synchronisé |
| Catalog values | Attributs du catalogue | Code d'attribut, par ex. `markets` | Valeurs actuelles de votre catalogue, non générées |

Le bloc **Catalog values** répertorie les attributs pour lesquels **Show in batch list** est activé dans leurs paramètres d'attribut. Dans le fichier, les informations produit viennent en premier, suivies des informations sur le flux, du contenu généré, des dates et des valeurs du catalogue.

## Lire le fichier

**Les en-têtes sont des codes d'attribut, pas des noms.** Les noms d'attribut peuvent varier selon le client et la langue de la boutique, alors que le code est unique et ne change jamais. C'est pourquoi un même fichier peut être importé sans mapping supplémentaire. La boîte de dialogue d'export affiche chaque code en gris à côté du nom (par ex. Description · descriptionHtml).

**Les dates et heures sont en UTC.** Les heures apparaissent sous la forme `2026-10-19 10:36:39` en UTC ; elles peuvent donc différer de l'interface Fozzels, qui affiche votre propre fuseau horaire. Par exemple, 12:36 heure d'été d'Europe centrale apparaît comme 10:36 dans le fichier.

**Le HTML est conservé tel quel.** Si **Allow HTML** est activé pour un attribut (comme pour Description), le fichier contient du balisage avec des balises telles que `<p>`, `<ul>` et `<li>`. C'est nécessaire pour un import correct. Pour les champs méta (SEO Title, SEO Description), Allow HTML doit être désactivé, sinon les balises se retrouvent à la fois dans le fichier et dans votre boutique.

![Paramètres d'attribut avec les options Allow HTML et Show in batch list](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/07-attribute-settings.png)

**Les cellules vides sont normales.** Une valeur vide signifie qu'il n'y a pas de données : l'attribut n'est pas renseigné dans le catalogue, ou le contenu n'a pas encore été synchronisé (`synchronized_at` vide).

**Batch confirmed** est renvoyé sous forme de nombre : `0` signifie que le résultat n'est pas confirmé.

## Ouvrir un fichier CSV

Le moyen le plus sûr d'ouvrir un CSV est de passer par une importation avec l'encodage UTF-8 et un séparateur défini explicitement. Les caractères spéciaux (’, é, ä, cyrillique) et les colonnes s'afficheront alors correctement.

**LibreOffice Calc** affiche automatiquement la fenêtre Import de texte à l'ouverture de tout fichier CSV :

1. Jeu de caractères : **Unicode (UTF-8)**.
2. Options de séparateur : laissez coché **uniquement** le séparateur choisi lors de l'export (Virgule ou Point-virgule). LibreOffice mémorise les cases des fichiers précédents ; Tabulation ou Espace peuvent donc également être cochées.
3. Séparateur de chaînes : **"** (guillemet double).
4. Pour conserver le SKU et les ID en tant que texte, sélectionnez ces colonnes dans l'aperçu et définissez Type de colonne → **Texte**.
5. Cliquez sur **OK**.

![Fenêtre Import de texte de LibreOffice Calc pour un CSV exporté](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/08-libreoffice-text-import.png)

**Microsoft Excel** ouvre un CSV avec vos paramètres locaux lorsque vous double-cliquez dessus ; les caractères spéciaux peuvent donc s'afficher de manière incorrecte (par ex. `itâ€™s` au lieu de `it’s`). Pour éviter cela :

1. Dans un classeur vide, allez dans **Données → À partir d'un fichier texte/CSV** et sélectionnez le fichier.
2. Origine du fichier : **65001 : Unicode (UTF-8)**.
3. Délimiteur : le même que celui choisi lors de l'export.
4. Cliquez sur **Charger**.

Si vous avez seulement besoin de lire le fichier, il est plus simple d'exporter directement au format Excel. N'enregistrez pas de nouveau un CSV dans Excel avant de l'importer dans un autre système : Excel peut modifier le séparateur ou l'encodage, ou convertir les nombres longs au format 7.81227E+12.

## FAQ

**J'ai cliqué sur Export, mais aucun fichier n'a été téléchargé.** Le fichier est créé en arrière-plan et n'est pas téléchargé automatiquement. Vous le trouverez sous **Dashboard → Export / Generated Data**.

**Le fichier contient moins de produits que j'en ai sélectionné.** Seuls les enregistrements avec du contenu généré sont exportés. Vérifiez également que vous avez sélectionné des produits sur toutes les pages de la liste, et pas seulement sur la page actuelle.

**Tout mon CSV se trouve dans une seule colonne.** Le séparateur du fichier ne correspond pas à celui qu'attend votre programme. Exportez de nouveau avec l'autre séparateur (« ; » pour Excel en version européenne) ou ouvrez le fichier via une importation comme décrit ci-dessus.

**Je vois des caractères illisibles tels que `â€™`.** Le fichier n'a pas été ouvert en UTF-8. Ouvrez-le via une importation avec l'encodage UTF-8 ou exportez au format Excel.

**Le SKU s'affiche sous la forme 7.81227E+12.** Le tableur a converti un nombre long en notation scientifique. Lors de l'importation du CSV, définissez cette colonne en Texte. Le format Excel ne présente pas ce problème.

**Les heures du fichier ne correspondent pas au tableau.** Le fichier utilise l'UTC, tandis que l'interface utilise votre fuseau horaire.

**Les champs SEO contiennent des balises `<p>`.** Allow HTML est activé pour cet attribut. Désactivez-le dans les paramètres d'attribut et générez de nouveau le contenu.

**Le lien de téléchargement a expiré.** Les archives sont conservées pendant 24 heures. Relancez l'export.
