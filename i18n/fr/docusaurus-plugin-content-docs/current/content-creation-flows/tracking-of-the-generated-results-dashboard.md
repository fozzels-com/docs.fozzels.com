---
id: '103000369091'
title: "4.7.1 Suivi des résultats générés. Dashboard."
sidebar_position: 18
slug: /content-creation-flows/tracking-of-the-generated-results-dashboard
description: >-
  Les Dashboards (ou liste quotidienne des batchs) constituent votre centre de
  commande et offrent une vue d'ensemble complète de tous les processus de
  génération et de synchronisation du contenu.
---

Les Dashboards (ou liste quotidienne des batchs) constituent votre centre de commande et offrent une vue d'ensemble complète de tous les processus de génération et de synchronisation du contenu. Cette interface vous permet de suivre l'état de manière proactive, de diagnostiquer les erreurs et de gérer efficacement toutes les données générées.

1\. Aperçu du Dashboard

La vue principale est un tableau de données regroupé par date de génération du contenu.

1.1 Indicateurs clés

Le tableau principal affiche six indicateurs clés qui aident à suivre l'état du contenu pour un jour donné :

- **Date** : la date à laquelle le contenu a été généré.
- **Product Count** : le nombre total de produits planifiés pour la génération de contenu.
- **Completion Count** : le nombre d'unités de contenu générées avec succès.
- **Synchronized Count** : le nombre d'unités de contenu synchronisées avec succès.
- **Warning Count** : le nombre d'unités de contenu comportant des remarques susceptibles de nécessiter l'attention de l'utilisateur.
- **Failed Count** : le nombre d'unités de contenu dont la génération ou la synchronisation a échoué en raison d'erreurs critiques.

Les utilisateurs peuvent cliquer sur la date ou sur Completion Count pour accéder à une vue détaillée de toutes les générations de ce jour.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/3eVmE5L69-qrrXE1wrp9l5KjD88-GmSH0A.png)

1.2. Vue détaillée et configuration de l'affichage

Un clic sur une date ouvre un tableau détaillé contenant des informations précises sur chaque unité de contenu.

1.2.1. Colonnes obligatoires

Le tableau détaillé comprend neuf colonnes obligatoires : Flow, SKU, Confirmed, Thumbnail, Prompt, Created At, Target Attribute, Executed At et Synchronized At.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/yOUsE1jBYf6AFN1hwszHua430j9ysDetdQ.png)

1.2.2. Outils de configuration de l'affichage

Les outils situés au-dessus du tableau vous permettent de personnaliser l'affichage des données pour gagner en efficacité :

**Display only with errors.** Ce commutateur filtre rapidement le tableau pour n'afficher que les enregistrements présentant des problèmes de génération ou de synchronisation.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/j--J5uJGSoiU6L54C7ykpw09czX8hQ86Cg.png)

**Column visibility.** Cette liste déroulante permet à l'utilisateur de masquer ou d'afficher certaines colonnes du tableau afin de se concentrer sur les informations pertinentes.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/a2xTbvhRdJxaIqyUO1tJK3-K0FSstAq5tg.png)

**Pagination.** L'option "Show \[number\] entries" permet de personnaliser le nombre de lignes affichées par page (5, 10, 25, 50 ou 100).
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/aPLUy45_b4zLJDCLFCuSfM-OCwWerXDo8g.png)

**Date Range Filter.** Permet de sélectionner une date ou une plage de dates pour consulter les résultats.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qpq1evm1oh-KTj5jr18RC3XOrCrg-vsDYg.png)

1.2.3. Filtres de colonnes

Chaque colonne intègre un outil de filtrage pour une recherche et un tri rapides :

- **Flow** : filtre les produits selon un ou plusieurs Flows sélectionnés (sélection dans une liste).
- **SKU** : permet de rechercher un produit précis par son SKU (recherche textuelle).
- **Thumbnail** : filtre les produits selon la présence d'une image ("Image Missing" ou "Image Exists") (commutateur/sélection).
- **Date Columns** : les colonnes de date (Created At, Executed At, Synchronized At) disposent de champs "From" et "To" pour sélectionner une plage de dates.

1.3. Détail des colonnes et interactions

Cette section décrit les interactions sur un seul élément, qui constituent une alternative aux actions de masse pour un contrôle plus fin.

SKU : affiche le SKU du produit, qui est un lien cliquable vers la page du produit dans Fozzels. Comprend également une icône qui renvoie vers la page du produit dans la boutique intégrée.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/A_jL3Ul08ZPx8MakhmS7P3tNfAeYmtyhtw.png)

Confirmed : indique le statut lorsque le contenu a été approuvé et est prêt pour la synchronisation.

Target Attribute : un clic sur la cellule ouvre la fenêtre "Edit completion result", qui permet de relire et de modifier le contenu.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/m_jrPUwivZj3FjRSdeYeWZAvFYUuyCBAGw.png)

Prompt : un clic ouvre une fenêtre contextuelle permettant de consulter et de copier le texte complet du prompt.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/pEEWkzMEzEfqU5WuU7sFLmT9fvZbxMV-5g.png)

Régénération du contenu : le bouton "Regenerate" de la fenêtre "Edit completion result" sert à lancer une nouvelle génération du contenu.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/c5ZO3vrJJlYMqytY7IAluozmh2QAXngM_Q.png)

1.4. Actions de masse et contrôle opérationnel

Les Dashboards offrent des fonctionnalités robustes pour gérer efficacement le contenu grâce aux actions de masse, ce qui évite le fastidieux travail de confirmation individuelle.

1.4.1. Exécuter des actions de masse

Mécanisme de sélection : les utilisateurs sélectionnent les éléments à l'aide de cases à cocher ou de la fonction Select All on This Page.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/cLqudNyTCBxzEB1wUw_lB446fY5cRD45Aw.png)

Actions disponibles : le menu Actions propose les fonctions suivantes pour le traitement par batch :
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/HW2UYiSK33CeIRz6osXy6htBVLzkTpk0pA.png)

- **Confirm all, Save & Sync** : approuve le contenu sélectionné et lance sa synchronisation.
- **Regenerate, Save & Sync** : lance une nouvelle génération du contenu pour les produits sélectionnés, puis sa synchronisation.

1.4.2. Fonctionnalité "Show Selected"

Espace de travail ciblé : la fonction "Show Selected" isole les éléments sélectionnés dans un tableau distinct pour offrir un espace de travail ciblé.

Conservation de toutes les fonctionnalités : dans ce mode, l'utilisateur conserve toutes les fonctions du tableau standard : filtrage, consultation des détails et exécution d'actions de masse sur le sous-ensemble de données sélectionné.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/f7zwjwWHrNA6OT8wJVRrxQ46WMuqPx1J7A.png)

1.4.3. Garde-fous des opérations

Un système de contrôle à plusieurs niveaux est en place pour garantir la précision et éviter les dépenses involontaires :

Confirmation obligatoire : une fenêtre contextuelle d'avertissement s'affiche avant l'exécution de toute action de masse gourmande en ressources ("**Confirm & Synchronize**", "**Regenerate & Synchronize**").
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/0ubsrmale7wTjSetyZBAJCqZYw3CK5u0iQ.png)

![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/sPmeRKZIE_-ybW-dwpbBS3bSEm0XtG69xQ.png)

Contrôle de la logique des Flows : ces fenêtres contextuelles comportent une note sur le comportement de synchronisation attendu :

Le contenu des Fully Automated Flows sera approuvé automatiquement.
Le contenu des Standard Flows sera uniquement régénéré et nécessitera ensuite une approbation manuelle.

Vérification des ressources : le système vérifie l'état avant de lancer toute opération : la génération ne démarre pas si le Flow est inactif, et la synchronisation ne s'exécute pas si l'intégration cible est inactive.

1.5. Diagnostics et avertissements (dépannage)

Le Dashboard fournit des messages clairs et des outils de diagnostic :

Détails des erreurs (infobulles) : en cas d'échec de synchronisation ou de génération, des infobulles affichent le message détaillé expliquant la cause de l'erreur.
"Completion looks suspicious" : avertissement indiquant un contenu peu naturel (réponses de type robot, HTML ou Markdown). Ce contenu ne sera pas synchronisé et nécessite une intervention de l'utilisateur.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/NSPyqq1WcPjA-YYLdrczhDUakvL55U2vIQ.png)
"Double HTML entities encode detected" : cet avertissement apparaît lorsque le texte a été encodé plus d'une fois, ce qui peut provoquer un affichage incorrect du texte.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/UGH7_knyB9J6V0GXvznxuh1latc_mLlX-Q.png)
"Product completion result is empty. Try to regenerate content." Le résultat est vide.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/4w2KbQmr8MEpBIgJ6373dwywTEYwFu6TYA.png)

"Product is deleted on integration" : indique que le produit n'existe plus dans la boutique intégrée.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/nO0NOjYhJ94dqp7jQPD8tvUJ-jEil4tHcA.png)
"Rule is disabled" : indique que le contenu a été généré par un Flow qui n'est plus actif.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qAHiFoO27TOf4TPKQ9pBfsyriEs7rLXnVg.png)
