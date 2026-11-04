---
title: "Nouveautés de Fozzels : octobre 2026, partie 2"
sidebar_position: 19
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2
description: >-
  Des Workflows qui régénèrent les textes à partir du retour de l'IA, la
  régénération d'images avec de nouveaux paramètres, un export Excel et CSV
  flexible, de meilleurs textes ALT, de nouveaux modèles d'IA, le chat vocal
  avec Jane et des labels IA automatiques pour les images et les vidéos.
whats_new:
  released_at: 2026-10-23
  items:
    - area: 'Aperçu'
      title: 'Octobre 2026, partie 2 : des résultats à la hauteur de vos exigences'
      body: 'Des textes qui s''améliorent jusqu''à respecter vos règles, la régénération d''images avec de nouveaux paramètres, un export Excel et CSV flexible et de vrais textes ALT au lieu de valeurs génériques. Voici les nouveautés.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/01-cover.jpg
    - tag: new
      area: 'Filtres'
      title: 'Collez une liste dans vos filtres'
      body: 'Collez des EAN ou des SKU depuis Excel dans une condition "is one of" ou "is not one of", puis cliquez sur Split pour les transformer en valeurs distinctes.'
      video: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/08-paste-list-into-filters.mp4
    - tag: new
      area: 'Rapports'
      title: 'Export vers Excel et CSV'
      body: 'Choisissez les colonnes à inclure dans le fichier. Nommez la colonne de texte d''après le code de l''attribut, et le fichier est prêt à être importé dans votre boutique ou votre ERP.'
      video: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/03-export-excel-csv.mp4
    - tag: new
      area: 'ALT Flows'
      title: 'De vrais textes ALT au lieu de "IMG_2045.jpg"'
      body: 'La nouvelle condition "has an image whose ALT contains" trouve les ALT génériques, par exemple ceux qui contiennent ".jpg", afin que Fozzels puisse en rédiger de vrais.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/04-alt-contains-condition.png
    - tag: new
      area: 'Modèles d''IA'
      title: 'Nouveaux modèles d''IA'
      body: 'Gemini 4 Argon et Claude Haiku 5.5 pour les textes, GPT Image 2.5 Flare et Sunburst et Nano Banana 2.1 pour les images, HeyGen Video 1.0 pour les vidéos. GPT-4.1 et GPT Image 1 sont retirés.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/06-new-ai-models.png
    - tag: new
      area: 'Workflows'
      title: 'Régénération avec retour'
      body: 'Ajoutez cette action à un bloc de workflow, et Fozzels régénère un texte qui enfreint vos règles en utilisant le motif comme retour, jusqu''à 3 fois. La validation par IA est facturée séparément.'
      video: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/02-regenerate-with-feedback.mp4
    - tag: new
      area: 'Image Flows'
      title: 'Régénérez des images avec de nouveaux paramètres'
      body: 'Choisissez d''autres photos produit, un autre modèle d''IA, ou modifiez le prompt et les presets pour un seul résultat. La nouvelle image remplace la précédente.'
    - area: 'Vos retours'
      title: 'Merci d''utiliser Fozzels'
      body: 'Une idée ou un souhait pour la prochaine version ? Partagez-le avec Jane dans l''application ou écrivez à support@fozzels.com.'
      image: /img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/10-share-your-idea.png
keywords:
- flux de travail
---

![Nouveautés de Fozzels, octobre 2026, partie 2](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/01-cover.jpg)

La deuxième partie de nos mises à jour d'octobre fait passer votre contenu au niveau supérieur. Voici ce qui vous attend :

- **Un nouveau niveau de qualité des résultats.** Un nouveau type de workflow avec validation et retour de l'IA : Fozzels vérifie vos textes et continue de les affiner jusqu'à ce qu'ils soient corrects.
- **Encore plus près de l'image parfaite.** Lors de la régénération d'images, vous pouvez désormais changer la photo produit source, le modèle d'IA, le prompt et les presets.
- **Vos résultats, vos tableurs.** Téléchargez des rapports au format Excel ou CSV et choisissez exactement les données à inclure dans le fichier.
- **Des textes ALT pertinents, même là où il n'y avait que des valeurs génériques.** Fozzels trouve désormais les images dont l'ALT n'est qu'un nom de fichier et crée de vraies descriptions pour elles.
- **De nouveaux modèles d'IA, le chat vocal avec Jane et des labels IA automatiques** pour les images et les vidéos.

Voici tout ce qui est nouveau et comment l'utiliser.

## Points forts

### Régénération automatique : des textes qui respectent vos règles

Les Workflows peuvent désormais régénérer automatiquement un texte lorsqu'il ne répond pas à vos exigences. Ajoutez la nouvelle action **Regenerate with feedback** à n'importe quel bloc de workflow : le texte est mis en attente de vérification avec le motif, et Fozzels le génère à nouveau en arrière-plan en s'appuyant sur ce retour. Sous **Maximum regenerations**, vous choisissez le nombre de tentatives autorisées, jusqu'à 3.

<video controls muted playsInline preload="metadata" width="100%" title="Vérification par IA et régénération dans un workflow" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/02-regenerate-with-feedback.mp4"></video>

Si vous utilisez la validation par IA (la condition **AI validation fails**), les requêtes IA supplémentaires nécessaires à la vérification sont facturées séparément.

**Même sans workflow.** Si vous n'avez pas configuré un tel workflow, Fozzels régénère tout de même les textes marqués comme suspects, mais sans retour, selon les règles habituelles relatives au contenu suspect, et non pas immédiatement mais lors du cycle de génération suivant.

**Nouvelle action : Sanitize text.** Nettoie un texte de la même manière qu'une nouvelle génération : corrige les caractères encodés comme `&amp;`, convertit le markdown et supprime les balises HTML non autorisées.

### Export flexible vers Excel et CSV

Vous pouvez désormais exporter vos résultats vers Excel ou CSV et choisir exactement les colonnes à inclure dans le fichier, par exemple uniquement le SKU et la description générée. Nommez la colonne du texte généré d'après le code de l'attribut, et le fichier est prêt à être importé dans votre boutique ou votre ERP. Fozzels mémorise votre sélection pour la prochaine fois. Pour des instructions détaillées, consultez [4.7.6 Exporter le contenu généré vers Excel et CSV](/content-creation-flows/exporting-generated-content-to-excel-and-csv/).

<video controls muted playsInline preload="metadata" width="100%" title="Exporter le contenu généré vers Excel et CSV" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/03-export-excel-csv.mp4"></video>

### Régénérez des images avec de nouveaux paramètres

Une image générée ne vous convient pas ? Le bouton Regenerate dans les résultats de votre Image Flow ouvre désormais une fenêtre dans laquelle vous pouvez ajuster les paramètres de ce seul résultat avant de le générer à nouveau :

- **Photos produit.** Choisissez les photos produit à partir desquelles l'IA travaille, par exemple une autre photo principale si l'angle d'origine n'était pas le meilleur. Vous pouvez sélectionner plusieurs photos, autant que le modèle en prend en charge.
- **Modèle d'IA.** Passez à un autre modèle, comme Nano Banana au lieu de GPT Image, et modifiez le format, la taille ou le nombre d'images.
- **Prompt et presets.** Ajustez les instructions ou ajoutez, modifiez et supprimez des presets comme l'arrière-plan, le style ou la scène.

Vos modifications ne s'appliquent qu'à ce résultat : les paramètres du Flow restent inchangés et les autres produits sont générés comme avant. Gardez à l'esprit que la nouvelle image remplace définitivement la précédente ; la fenêtre vous le rappelle avant de commencer.

La page de résultat affiche aussi désormais plus de détails : quand l'image a été créée, générée et régénérée, le nombre d'images, le statut du Flow et le modèle d'IA utilisé.

### Trouvez les images aux textes ALT génériques

Souvent, l'ALT d'une image est techniquement renseigné, mais il ne s'agit que d'une valeur générique : un nom de fichier comme "IMG_2045.jpg" ou simplement le nom du produit. Pour les acheteurs et les moteurs de recherche, cela revient presque à ne pas avoir d'ALT du tout, et pourtant Fozzels considérait ces textes ALT comme renseignés et ignorait ces images.

Les ALT Flows disposent désormais d'une nouvelle condition Media Gallery, **has an image whose ALT contains**. Saisissez par exemple ".jpg", et Fozzels trouve toutes les images dont l'ALT n'est qu'un nom de fichier et génère pour elles des textes ALT pertinents. Pour inclure les images sans aucun ALT, ajoutez un groupe de conditions avec "has an image with an empty ALT" et votre condition ALT, puis réglez-le sur "Any condition".

![Condition Media Gallery : has an image whose ALT contains .jpg](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/04-alt-contains-condition.png)

### Labels IA dans les images et vidéos générées

Chaque image et chaque vidéo générée par Fozzels porte désormais un label intégré, lisible par machine, qui l'identifie comme générée par IA, conformément aux exigences de transparence de l'AI Act européen. Le label est enregistré dans les métadonnées du fichier : il est donc invisible pour les acheteurs et ne change pas l'apparence de vos images, mais il est conservé après la synchronisation avec votre boutique.

Pour les images, vous pouvez aussi le voir dans Fozzels : l'historique des versions du résultat affiche l'étape **Labelled as AI-generated**.

![Historique des versions avec l'étape Labelled as AI-generated](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/05-labelled-as-ai-generated.png)

**Pourquoi c'est important :** vous pouvez utiliser des visuels IA dans votre boutique en toute confiance, sans ajouter de labels manuellement.

### Parlez à Jane

Vous pouvez désormais parler à Jane au lieu de taper. Cliquez sur le microphone dans le champ de chat, posez votre question, et Jane peut lire sa réponse à voix haute. Vous préférez le silence ? Désactivez les réponses vocales avec l'icône de haut-parleur à côté du microphone.

### Nouveaux modèles d'IA

Nous enrichissons notre gamme de modèles dès que les fournisseurs d'IA publient de nouveaux modèles, afin que vous puissiez toujours choisir le plus adapté à chaque tâche.

![Nouveaux modèles d'IA : Gemini 4 Argon, Claude Haiku 5.5, GPT Image 2.5 Flare et Sunburst, Nano Banana 2.1, HeyGen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/06-new-ai-models.png)

**Pour les textes**

**Gemini 4 Argon.** Le nouveau modèle phare de Google, conçu pour la précision. C'est l'un des modèles les moins enclins à inventer des faits, ce qui en fait un excellent choix pour un contenu produit détaillé et riche en caractéristiques techniques.

**Claude Haiku 5.5.** Le modèle le plus rapide et le plus abordable d'Anthropic, idéal pour générer du contenu pour de grands catalogues.

**Pour les images**

**GPT Image 2.5 Flare.** Création et retouche d'images rapides et de haute qualité pour un usage quotidien.

**GPT Image 2.5 Sunburst.** L'option de plus haute qualité d'OpenAI, avec des retouches précises qui laissent le reste de l'image, y compris votre produit, inchangé.

**Nano Banana 2.1.** Une meilleure qualité et un prix plus bas que Nano Banana 2.

**Pour les vidéos**

**HeyGen Video 1.0.** Une alternative bien plus abordable à Veo.

<video controls muted playsInline preload="metadata" width="100%" title="HeyGen Video 1.0 dans vos Video Flows" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/07-heygen-video.mp4"></video>

Nous avons également retiré les anciens modèles GPT-4.1 et GPT Image 1.

## Qualité du contenu

- **Moins de faux signalements suspects.** La vérification du contenu suspect est désormais plus précise. Les caractéristiques produit courantes avec des chiffres, comme "Breite – 80", "+25 °C" ou "= 60", ne sont plus signalées. Seuls les vrais calculs que l'IA a laissés par erreur dans le texte, comme "59 + 1 = 60", sont marqués comme suspects : vous passez ainsi moins de temps à relire des textes corrects.
- **Moins de commentaires de l'IA dans vos textes.** Nous avons encore renforcé la protection contre les notes de service du modèle d'IA qui se retrouvent dans votre contenu final.
- **Jane préserve vos attributs.** Lorsque Jane réécrit un prompt, elle insère désormais correctement les attributs comme `{{name}}` ou `{{ean}}`, afin que vos prompts continuent de fonctionner avec les vraies données produit.

## Image Flows et Video Flows

### Des images générées toujours à jour

Les Image Flows disposent d'une nouvelle option : **Process the product again when its source image changes**. Lorsqu'une image à la position de la galerie utilisée par votre Flow est remplacée, supprimée ou ajoutée dans votre boutique, Fozzels le détecte lors de l'import de produits suivant et génère une nouvelle image à partir de la photo mise à jour.

Bon à savoir :

- Les images créées par Fozzels ne comptent pas comme un changement, même si elles ont remplacé la photo d'origine, et les produits dont les images ont été choisies manuellement ne sont jamais traités à nouveau.
- Seuls les résultats créés après l'activation de l'option sont vérifiés : il n'y a donc pas de régénérations massives inattendues.
- Chaque nouvelle génération est facturée comme d'habitude. Tant que la nouvelle image n'est pas prête, le résultat actuel reste actif.

### Autres nouveautés

- **Les produits retirés sont clairement signalés.** Les produits supprimés de votre catalogue affichent désormais aussi le statut "Removed from catalog" dans les Image Flows et Video Flows, et ne sont plus comptés comme "to be synchronized".
- **Fini les tentatives sans fin.** Si une photo produit ne peut plus être téléchargée, Fozzels cesse de réessayer et marque la photo comme indisponible.
- **Des miniatures pour les vidéos générées**, pour les reconnaître en un coup d'œil.

## Rapports et filtres

**Collez une liste entière dans vos filtres.** Copiez une liste de valeurs, par exemple des EAN ou des SKU depuis Excel, et collez-la directement dans une condition "is one of" ou "is not one of". Cliquez sur **Split**, et chaque élément devient une valeur distincte. Plus besoin de saisir les valeurs une par une.

<video controls muted playsInline preload="metadata" width="100%" title="Coller une liste de valeurs dans un filtre de Flow et la scinder" src="/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/08-paste-list-into-filters.mp4"></video>

**Les erreurs en un coup d'œil.** Dans le rapport de génération, le filtre "Display only with errors" n'affiche désormais que les générations échouées, avec le véritable message d'erreur au lieu de "Unknown error occurred".

**Notifications après un nouvel import.** Lorsque vous réimportez des produits avec une action groupée, vous recevez désormais immédiatement une notification avec le résultat.

## Application et langues

- **Fozzels en italien.** L'application est désormais disponible en italien, et le Help Center en italien et en français.
- **Au revoir, ancienne Chat Sandbox.** Nous avons retiré le chatbot de 2023. Jane, votre assistante IA, est toujours là pour vous aider.
- **Petites améliorations de l'interface.** La première intégration de votre compte est désormais sélectionnée par défaut dans les listes déroulantes, et la liste des fournisseurs d'IA ne s'ouvre plus d'elle-même lorsque vous ouvrez un Flow.

## Mises à jour des intégrations

### Magento

**Des textes pour toutes les vues de boutique.** Activez **Also save as the default value for all store views**, et chaque envoi enregistre le texte dans la vue de boutique du Flow et, comme valeur par défaut, dans toutes les autres vues de boutique. Les vues de boutique qui ont leur propre valeur pour l'attribut continuent de l'afficher.

![Onglet Automation avec l'option Also save as the default value for all store views](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/09-store-views-default.webp)

Bon à savoir : si un Flow d'une autre vue de boutique utilise cet attribut dans son prompt et crée automatiquement un nouveau texte lorsqu'un attribut change, il considérera la nouvelle valeur par défaut comme un changement et générera de nouveaux textes pour les produits qui n'ont pas leur propre valeur.

### Magento et NextChapter

**Remplacement des photos produit existantes.** Les nouvelles images générées peuvent désormais remplacer les photos produit actuelles, et le remplacement s'affiche correctement dans la galerie média de Fozzels après la synchronisation.

### Shopware

**Prise en charge des images AVIF.** Les produits avec des photos AVIF peuvent désormais aussi être utilisés pour la génération de texte : avant de les envoyer à l'IA, nous convertissons ces photos dans un format pris en charge par le modèle.

### CSV / Raw File

Les fichiers contenant des caractères invisibles au début, qui faisaient apparaître le nom de la première colonne entre guillemets, sont désormais lus correctement.

![Une idée ? Partagez-la avec Jane dans l'application ou écrivez à support@fozzels.com](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2/10-share-your-idea.png)
