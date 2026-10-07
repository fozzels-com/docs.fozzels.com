---
id: '103000395390'
title: "4.3.5 Quand les nouveaux produits sont-ils générés : le cycle de Pull expliqué"
sidebar_position: 12
slug: >-
  /content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained
description: >-
  Nouveau produit ou nouvelle marque : pourquoi il n'est pas encore visible et
  comment accélérer les choses. Une explication de la raison pour laquelle les
  nouveaux produits n'apparaissent pas
---

**Nouveau produit ou nouvelle marque : pourquoi il n'est pas encore visible et comment accélérer les choses**

Une explication de la raison pour laquelle les nouveaux produits n'apparaissent pas immédiatement dans Fozzels, et de ce qu'il faut faire si vous ne souhaitez pas attendre le lendemain matin.

**1\. Pourquoi les nouveaux produits ne sont pas visibles tout de suite dans Fozzels**

Fozzels ne reçoit pas les données de votre boutique en temps réel. Il n'existe aucune connexion permanente entre votre boutique et Fozzels qui transmettrait automatiquement chaque modification.

À la place, Fozzels se connecte régulièrement à votre boutique et télécharge l'état actuel du catalogue : ce processus s'appelle un Product Pull. Ce n'est qu'une fois celui-ci terminé que le système a connaissance des nouveaux produits, des modifications d'attributs ou des éléments supprimés.

> **ℹ** Si vous avez ajouté un nouveau produit ou une nouvelle marque à votre boutique dans la journée, il n'apparaîtra dans Fozzels qu'après le prochain pull. D'ici là, le système ignore simplement son existence.

**2\. Quand le pull a-t-il lieu**

Le pull s'exécute automatiquement selon un calendrier que vous configurez vous-même dans l'onglet Configuration ou dans Websites & Stores. Par défaut, il s'exécute pendant la nuit.

Une fois le pull terminé, le système effectue automatiquement les opérations suivantes :

-   il vérifie quels produits correspondent aux filtres des flux actifs
-   il met à jour les valeurs d'attributs de chaque produit de la file d'attente
-   il déclenche la génération de contenu

> **ℹ** Les modifications apportées à un flux (par exemple, l'ajout d'une nouvelle marque aux filtres) ne prennent effet qu'après le prochain pull.

**3\. Comment éviter d'attendre le matin : le pull manuel**

Si vous avez besoin que les nouveaux produits soient traités immédiatement, lancez le pull manuellement. Un pull manuel fonctionne exactement comme le pull automatique : il actualise entièrement le catalogue et déclenche la génération.

**Comment le lancer :**

-   Accédez à la section des paramètres d'intégration dans Fozzels
-   Trouvez votre boutique et lancez le pull manuellement
-   Attendez qu'il se termine : un statut de réussite dans la State List confirme que tout s'est bien déroulé
-   Ensuite, le système synchronisera automatiquement les flux et lancera la génération pour les nouveaux produits

> **ℹ** Un pull manuel n'annule ni ne remplace le pull automatique. Le prochain pull planifié s'exécutera toujours à l'heure habituelle, que vous ayez lancé un pull manuel ou non.

**4\. Si vous avez déjà lancé un flux manuellement dans la journée**

Il arrive que des utilisateurs testent des flux ou génèrent du contenu pour des produits individuels manuellement, à l'aide du bouton Run Now. C'est une pratique normale.

Important à savoir : l'exécution manuelle d'un flux n'affecte pas le cycle automatique. Le lendemain, après le pull planifié, le système exécutera quand même ce flux automatiquement, quelles que soient les actions manuelles effectuées dans la journée.

_Une question ? Contactez le support Fozzels._
