---
id: '103000370066'
title: 4.6.1 Créer un nouveau Video Flow dans Fozzels
sidebar_position: 16
slug: /content-creation-flows/creating-a-new-video-flow-in-fozzels
description: >-
  La fonctionnalité Video Flow est un Content Flow spécialisé dédié à la
  génération de courtes vidéos haute fidélité pour la présentation des produits.
  La création d'un Video F
---

La fonctionnalité Video Flow est un Content Flow spécialisé dédié à la génération de courtes vidéos haute fidélité pour la présentation des produits. La création d'un Video Flow comprend trois grandes phases : la configuration de base (sélection du modèle), la sélection des ressources (produit et image) et la rédaction précise du prompt. En raison du coût de calcul élevé de la génération vidéo, la précision de la configuration est essentielle pour une exécution réussie et la maîtrise des coûts.

1.  Lancer le Video Flow

1.1 Accès et sélection de la boutique Pour commencer, rendez-vous dans l'onglet "Video Flows" de l'en-tête principal de Fozzels. Sur la page Video Flows, vous devez d'abord sélectionner la boutique dans le menu déroulant "Choose store" afin que la vidéo générée soit liée à la bonne instance du catalogue produit. Cliquez sur le bouton "New Video Flow" pour continuer.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/dhsYmY2Ex4slpTZPdudcNOVCe9nEhoPHyg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/l9D27YTXULoQgwNoai2p9a3wY9wBuD0rxA.png)

1.2 Configuration de base (étape 1) Vous êtes redirigé vers l'écran de configuration où vous définissez l'identité du flux et son moteur principal.

1.2.1 **Nommez** le flux : indiquez un nom clair et descriptif dans le champ "**Name**" pour l'identifier facilement dans votre liste de flux.

1.2.2 **Sélectionnez** le modèle d'IA : le système utilise par défaut le fournisseur Google | Gemini pour la génération vidéo. Vous devez sélectionner le modèle spécialisé de génération vidéo, "Gemini Veo 3".

Ce modèle est conçu pour produire des vidéos de haute qualité en 720p, d'une durée pouvant atteindre 8 secondes. Il prend en charge une image en entrée, ce qui est essentiel pour ancrer la vidéo dans une ressource produit précise.

1.2.3 **Définissez** le type de flux : dans la section "**Kind**", choisissez le type de sortie vidéo souhaité. Sélectionnez "General | Single Video".

Ce paramètre confirme que le système générera des ressources visuelles et des présentations de produits, et marque le bloc d'une coche verte.

1.2.4 **Cliquez** sur le bouton "**Submit**" pour enregistrer ces paramètres de base et passer à l'étape suivante.

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ocwd1m8bDjLUbvNWQQ15jP7-oy92bMKZxw.png)

2.  Configurer les ressources et rédiger le prompt

Après la configuration de base, vous accédez à la page de définition des ressources et du prompt.

2.1 Sélection du produit et de l'image Sélection du produit :
Sur le côté gauche de l'écran, **sélectionnez le produit spécifique** dans la liste du catalogue pour lequel la vidéo sera générée.

Sélection de l'image : le bloc central affiche le produit sélectionné et sa galerie d'images. Vous devez **choisir** l'image unique la plus adaptée dans la galerie, car ce repère visuel guidera le processus de génération vidéo de l'IA.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/y1tWTQrZy2gjdG9yduMpGv4A3xQevUN6-g.png)

2.2 Rédaction du prompt (l'étape cruciale) Le prompt est la seule entrée qui contrôle le contenu, le style et le récit de la vidéo.

Exigence de saisie : le champ "Prompt" ne peut pas rester vide. Il doit contenir des instructions détaillées et descriptives décrivant le résultat vidéo souhaité (par ex. décor, ambiance, action, mouvements de caméra).
**Lisez** la section suivante, **[Tips for Creating an Effective Prompt + Examples](/content-creation-flows/tips-for-creating-an-effective-prompt-examples/)**, avant de rédiger votre prompt afin d'obtenir une qualité vidéo optimale.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ZGiO6GR7CNBTRPTFYBz1RRmNNRTwD_WW6A.png)
Gestion des modèles de prompt : pour favoriser la cohérence et l'efficacité, **utilisez** le bouton "Save" situé au-dessus du champ du prompt afin d'enregistrer votre instruction comme modèle réutilisable. Cela vous fait gagner du temps lors de la création des flux suivants.

3.  Activation, exécution et gestion

Une fois le produit, l'image et le prompt définis, le flux est prêt à être exécuté.

3.1 Activer et finaliser le flux Activer le flux :
3.1.1 Pour lancer immédiatement la génération, **cochez** la case "**Active flow**" à côté du nom du flux. Si elle reste décochée, le flux reste à l'état de brouillon.
3.1.2 **Cliquez** sur le bouton principal "**Save**" en bas de la page. Le système enregistre toutes les configurations et vous redirige vers la page **"Batch list"**, qui sert de suivi d'exécution.

3.2 Lancer la génération vidéo depuis la Batch list Sur la page Batch list, repérez le produit que vous venez de configurer.
Confirmation manuelle : pour envoyer la demande à l'IA, vous devez **basculer manuellement le commutateur** de la colonne "**Confirmed**" sur la position « activé ».
Lancer la génération : enfin, **cliquez** sur l'icône située à côté du commutateur. Seule cette action envoie la demande confirmée au moteur d'IA pour démarrer le rendu vidéo. Le système suit ensuite l'état de la génération.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/4M5pPg3JaDfvqdgAQ_109lMCWqpJpbt8gQ.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/1NwPEnPYEC3N6fbBX63dOizDPR3J6G4EVA.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/LJon-h82hu4do0c1tI3oVznHeXvSifWXjg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/YwJ6UJ7VzaDPedpbnlZBIqzyNhO1yIuz6g.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/Fb0QFQE1i1hJoK8U4rpyysLV_UwftKGWYQ.png)

3.3 Accéder à la vidéo générée Une fois la génération terminée, le fichier vidéo final est disponible pour visionnage et téléchargement directement depuis la Batch list. La vidéo est également stockée automatiquement dans votre médiathèque personnelle, accessible à l'adresse : user/settings/generated media.
