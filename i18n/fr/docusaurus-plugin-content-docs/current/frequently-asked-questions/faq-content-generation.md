---
title: "FAQ : génération de contenu"
sidebar_position: 5
unlisted: true
slug: /frequently-asked-questions/faq-content-generation
description: >-
  Les questions les plus fréquentes sur la génération de texte par IA : textes
  manquants, limites des batchs, régénération après modification du prompt,
  erreurs de génération, contenu suspect, choix du modèle, délais de
  synchronisation et maîtrise des coûts.
---

## Des produits figurent dans mon flow, mais les textes n'ont pas été générés.

La génération attend peut-être la prochaine exécution planifiée. Vous pouvez la déclencher manuellement ou contacter le support pour qu'il la lance à votre place.

## Comment confirmer le contenu généré avant son envoi vers mon site web ?

Si votre flow est semi-automatique, confirmez les complétions une par une ou utilisez l'action de masse dans la liste des batchs pour approuver plusieurs éléments à la fois.

## Des nouveaux produits sont en ligne depuis plusieurs jours mais n'ont pas de textes générés.

La génération planifiée a peut-être été retardée. Contactez le support : il peut récupérer à nouveau les produits manuellement et lancer la génération.

## Pouvez-vous corriger les textes manquants pour plusieurs marques à la fois ?

Oui. Contactez le support en précisant les marques/flows concernés. Il peut déclencher la génération pour tous en une seule fois.

## Mon flow affiche 100 % mais j'ai modifié le prompt. Pourquoi n'y a-t-il pas de nouveaux textes ?

Modifier le prompt seul ne déclenche pas la régénération des textes existants. Utilisez Mass Action → "Regenerate content", ou dupliquez le flow.

## Comment régénérer tous les textes produit après la mise à jour de mon prompt ?

Accédez aux complétions, sélectionnez tout via Mass Action, puis choisissez "Regenerate content". Vous pouvez aussi désactiver le flow, le dupliquer et activer la nouvelle version.

## La période de cooldown ne déclenche pas la régénération.

Le cooldown définit le délai minimum entre deux régénérations automatiques, mais il ne force pas la régénération des textes déjà terminés. Utilisez Mass Action pour régénérer.

## Quelles sont les causes des erreurs de génération / complétions en échec ?

Il s'agit généralement d'une forte charge de traitement du modèle d'IA. Des prompts volumineux, une sortie longue et plusieurs images peuvent surcharger le modèle. Les tâches en échec sont relancées automatiquement. Essayez des prompts plus courts ou un autre modèle.

## Comment voir quels produits n'ont pas pu générer de contenu ?

Consultez le rapport de complétions sur [app.fozzels.com/completions/product/completion/report/](https://app.fozzels.com/completions/product/completion/report/) et filtrez par date avec l'option `failed_only`.

## Mon batch semble bloqué : aucun texte n'est généré.

Cela peut être dû à des limites temporaires de tokens chez le fournisseur d'IA. Le système revient automatiquement à la normale. Contactez le support si le problème persiste.

## La génération de contenu prend beaucoup plus de temps que d'habitude.

Il s'agit de retards temporaires liés aux limites d'utilisation des tokens. Cela se résout généralement de lui-même. Contactez le support si la génération reste bloquée.

## Je vois "Unknown error" sur toutes les tâches.

Cela se produit lors des pics de charge du système. Le système effectue de nouvelles tentatives automatiquement. Si 80 % ou plus des tâches échouent, contactez le support : il peut surveiller les flows et les déclencher manuellement.

## Ma liste de batchs affiche 500 produits alors que mon flow en compte 3 380 éligibles.

Fozzels limite les batchs à 500 produits par **Plan & Close**. Cliquez plusieurs fois sur "Plan & Close" pour mettre en file d'attente des batchs supplémentaires.

## "Run Now" n'ajoute que 10 produits.

"Run Now" sert aux tests rapides (10 produits). Utilisez "Plan & Close" pour des batchs plus volumineux (jusqu'à 500).

## Quelle est la différence entre "Plan & Close" et "Run Now" ?

"Run Now" traite instantanément jusqu'à 10 produits à des fins de test. "Plan & Close" met en file d'attente un batch pouvant atteindre 500 produits. Utilisez Plan & Close en production.

## Quelles sont les limites de génération quotidiennes selon l'abonnement ?

Abonnements inférieurs : 10 à 30 produits par jour. Abonnements supérieurs (299 € et plus) : nettement plus. Unlimited : 500 par flow et par jour. Contactez le support pour des augmentations temporaires.

## Puis-je demander une augmentation temporaire des limites pour un remplissage initial ?

Oui. Pour des volumes importants ponctuels, l'équipe peut augmenter temporairement les limites. Contactez le support en indiquant le volume attendu et le calendrier.

## Comment prévisualiser les résultats du prompt avant la synchronisation ?

Ouvrez le flow → ajoutez votre prompt → cliquez sur **Save and Preview** → cliquez sur **Generate Now**. L'aperçu n'est ni enregistré ni synchronisé.

## Pourquoi l'aperçu nécessite-t-il un solde ?

La fonction d'aperçu consomme des tokens, un solde est donc nécessaire. Contactez le support pour obtenir un petit crédit de test si besoin.

## J'obtiens des erreurs "Empty Result" avec le modèle GPT-5.

GPT-5 nécessite une plus grande capacité de tokens. Augmentez Max Tokens de 2 000 à au moins 5 000.

## Quel paramètre Max Tokens est recommandé ?

Pour GPT-5 : au moins 5 000. Assurez-vous que les tokens du prompt + max_tokens ne dépassent pas la longueur de contexte du modèle.

## Que sont les avertissements de contenu suspect ?

Fozzels vérifie le contenu généré par rapport à une liste de mots indésirables. Le contenu signalé n'est pas synchronisé automatiquement. Vous pouvez personnaliser la liste ou ajouter des restrictions dans le prompt.

## Comment réduire les avertissements de contenu suspect ?

Ajoutez des restrictions dans votre prompt, personnalisez la liste des mots suspects ou utilisez **Regenerate**. Contactez le support pour forcer la synchronisation si le contenu est correct.

## Puis-je forcer la synchronisation d'un contenu suspect ?

Contactez le support en précisant tous les flows ou certains d'entre eux. Il peut synchroniser le contenu signalé pour vous.

## Mes titres de page sont trop longs / dépassent les limites de caractères.

Ajustez votre prompt pour indiquer le nombre maximal de caractères. Contactez le support pour corriger les titres existants trop longs.

## La chaîne "Plain text" apparaît dans mon contenu généré.

Il s'agit d'un problème de prompt rare. Le support peut examiner et nettoyer les produits concernés. Signalez-le avec des exemples précis.

## Un produit ne passe pas en ligne à cause du contenu Fozzels.

Des problèmes de contenu (titres trop longs, chaînes inattendues) peuvent bloquer la publication. Contactez le support avec les détails du produit.

## Mes Content Flows automatiques ont cessé de fonctionner.

Cela peut être dû à des problèmes côté Fozzels ou à des limitations du fournisseur d'IA. Contactez le support pour qu'il enquête et relance les flows.

## Mon flow affiche 100 % en vert juste après l'activation : est-ce normal ?

Il s'agit d'un problème d'interface connu. L'écran initial peut afficher 100 % avant la fin du traitement. Consultez les détails du flow pour connaître le statut réel.

## Le bouton "Generate Now" ne répond pas.

La file d'attente de génération peut être surchargée aux heures de pointe. Patientez puis réessayez, ou passez à un modèle d'IA plus rapide.

## Puis-je changer de modèle d'IA pour une génération plus rapide ?

Oui, modifiez le modèle dans les paramètres du flow. Les modèles plus légers sont plus rapides. Des modèles différents peuvent produire une qualité différente.

## Quel modèle d'IA choisir pour le meilleur équilibre coût/qualité ?

Plusieurs modèles sont disponibles (ChatGPT, Gemini, Claude). Les modèles plus puissants offrent une meilleure qualité mais coûtent plus cher. Contactez l'équipe pour des recommandations.

## J'obtiens des erreurs Gemini lors de générations de gros batchs.

Gemini applique des limites de débit pour les gros volumes, ce qui provoque des erreurs temporaires. Les tâches restent dans la file d'attente et se terminent automatiquement une fois les limites rétablies.

## Le contenu suspect en français est signalé à tort.

La liste de filtrage peut inclure des mots courants dans d'autres langues. Contactez le support pour adapter la liste à votre langue.

## Existe-t-il une limite de synchronisation ? Pourquoi la synchronisation est-elle lente ?

La synchronisation de gros volumes prend du temps. Il n'y a pas de limite stricte, mais elle s'effectue progressivement. Contactez le support si elle semble bloquée.

## Les résultats sont de mauvaise qualité en raison de données produit insuffisantes.

La qualité dépend des données disponibles. Enrichissez les données produit dans votre PIM/boutique avant de régénérer. Une modification manuelle peut être nécessaire pour les produits pauvres en données.

## Comment configurer un flow entièrement automatique (confirmation et synchronisation automatiques) ?

Sélectionnez le type de flow "Fully-automatic". Les résultats sont confirmés automatiquement et synchronisés lors de la prochaine exécution du cron (~4 heures). Une validation interne empêche la synchronisation de contenu de mauvaise qualité.

## À quelle fréquence le cron de synchronisation s'exécute-t-il ?

La synchronisation automatique s'exécute via cron toutes les ~4 heures. Planifiez la génération à l'avance pour les lancements urgents. Contactez le support pour des intervalles plus courts.

## La génération s'est arrêtée prématurément : pourrait-il s'agir d'un problème de mémoire ?

Une mémoire serveur insuffisante peut interrompre les grosses générations. Contactez le support : il peut augmenter la mémoire allouée.

## Comment resynchroniser tout le contenu en une seule fois avec l'action de masse ?

Activez le bouton "Show all content", puis déclenchez **Resync** via l'action de masse pour tout synchroniser d'un coup.

## Du code HTML s'affiche dans l'aperçu de mon batch.

Utilisez le bouton **Show HTML** pour basculer entre l'affichage mis en forme et l'affichage brut. Il s'agit d'un problème d'interface connu en cours d'amélioration.

## Mes flows sont bloqués après un solde insuffisant et une recharge.

Les flows peuvent ne pas reprendre automatiquement après une recharge. Contactez le support pour relancer les tâches en file d'attente.

## Que se passe-t-il lorsque la catégorie d'un produit change ?

Si la régénération automatique est activée, le texte sera régénéré lors du changement de catégorie.

## Comment corriger les erreurs factuelles dans un texte généré par l'IA ?

Si la donnée provient d'un attribut de la boutique, corrigez-la à cet endroit et le contenu se régénérera automatiquement. Si elle a été générée par l'IA (par ex. à partir d'images), modifiez-la manuellement dans la liste des batchs.

## Pourquoi des textes différents sont-ils générés pour le même produit dans différentes couleurs ?

Il s'agit du comportement attendu. L'IA génère des descriptions uniques selon les paramètres du produit : des couleurs différentes produisent des descriptions différentes.

## L'aperçu n'affiche plus les attributs/colonnes du produit.

Ce changement date de la version 5.10. Vous pouvez activer et désactiver les colonnes dans le tableau d'aperçu. Des colonnes manquantes peuvent correspondre à un bug connu.

## Comment gérer plusieurs prompts similaires pour différentes catégories/marques ?

Actuellement, chaque flow possède son propre prompt. Les prompts dynamiques/partagés figurent sur la feuille de route. Utilisez **Duplicate** pour accélérer la création de flows similaires.

## J'obtiens une erreur de synchronisation car un attribut obligatoire est vide dans Magento.

Fozzels ne peut pas envoyer le contenu si des champs Magento obligatoires sont vides. Consultez le message d'erreur et renseignez l'attribut manquant.

## J'ai reçu des frais inattendus à cause d'une génération vidéo bloquée.

Contactez immédiatement le support. Il peut créditer les frais erronés et résoudre le problème. Supprimez les flows bloqués pour éviter de nouveaux frais.

## Des attributs ont disparu de mes flows/prompts.

Cela peut arriver lors de la copie de prompts entre des champs. Enregistrez vos prompts sous forme de modèles. Contactez le support si des attributs disparaissent sans modification de votre part.
