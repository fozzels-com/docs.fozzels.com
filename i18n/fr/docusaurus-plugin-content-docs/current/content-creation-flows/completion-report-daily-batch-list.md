---
title: Completion Report (Daily Batch List)
sidebar_position: 29
slug: /content-creation-flows/completion-report-daily-batch-list
description: >-
  Le Completion Report est un aperçu quotidien de tous les contenus générés par
  l'IA dans vos Flows : il indique ce qui a été généré, confirmé et envoyé vers
  votre boutique un jour donné.
keywords:
- liste des lots
---

Le Completion Report est un aperçu quotidien de tous les contenus générés par l'IA dans vos Flows : il indique ce qui a été généré, confirmé et envoyé vers votre boutique un jour donné.

Accédez au [Completion Report](https://app.fozzels.com/completions/product/completion/report/today) (remplacez `today` par une date telle que `2026-03-20`)

---

## Ce que cette page affiche

Cette page liste chaque completion IA (contenu généré) créée ou exécutée dans la période sélectionnée. Elle rassemble en un seul endroit les résultats de **tous vos Flows**, afin que vous puissiez vérifier, confirmer et synchroniser des batches sans passer par chaque Flow individuellement.

---

## Parcourir le rapport

### Période

- Les sélecteurs de date **From / To** en haut de page permettent de modifier la période
- La date dans l'URL définit la date de début, par exemple `/completions/product/completion/report/2026-03-20`
- Ajoutez `?end_date=2026-03-21` pour définir une date de fin

### Filtre par boutique

- Le panneau de gauche liste vos boutiques connectées
- Cliquez sur une boutique pour limiter le rapport aux completions de cette boutique
- Cliquez à nouveau ou réinitialisez pour afficher toutes les boutiques

### Filtres d'affichage (cases à cocher)

- **Show only with errors** : masque les éléments réussis et n'affiche que les completions en échec ou en erreur
- **Show only suspicious** : n'affiche que les completions signalées comme contenu suspect

### Filtres par colonne (constructeur de conditions)

- Filtrez par Flow, Website, Store, SKU, Prompt, Created At, Executed At, Synchronized At
- Créez des conditions AND/OR comme dans le Catalog

---

## Colonnes du tableau

| Colonne | Ce qu'elle affiche |
|--------|--------------|
| **Flow** | Nom du Content Flow qui a généré cet élément (cliquez pour ouvrir le Flow) |
| **Website / Store** | Boutique à laquelle appartient cet élément |
| **SKU** | Identifiant du produit (cliquez pour ouvrir le produit) |
| **Confirmed** | Case à cocher : indique si cette completion est approuvée pour la synchronisation |
| **Prompt** | Le prompt IA utilisé |
| **Created At** | Date de création de la completion |
| **Target attribute** | Le contenu généré par l'IA (cliquez pour le modifier) |
| **Executed At** | Date d'exécution de la génération ; affiche des libellés d'erreur en cas d'échec |
| **Synchronized At** | Date d'envoi du contenu vers votre boutique ; affiche "Sync Now" si la synchronisation est en attente |
| **Thumbnail** | Image du produit (affichage activable avec le bouton de colonne) |

---

## Actions

### Actions par ligne

- **Toggle Confirmed checkbox** : confirmez ou annulez la confirmation d'un seul élément
- **Cliquez sur la valeur de Target attribute** : ouvre une fenêtre d'édition dans laquelle vous pouvez :
  - Modifier manuellement le contenu généré
  - Consulter l'historique des révisions et restaurer une version précédente
  - Régénérer le contenu
  - Basculer entre l'affichage HTML et le texte brut
  - Enregistrer et, si vous le souhaitez, synchroniser immédiatement
- **Cliquez sur "Sync Now"** : envoie manuellement un seul élément vers la boutique
- **Cliquez sur un libellé d'erreur** : affiche le message d'erreur complet et les options de nouvelle tentative

### Actions groupées (sélectionnez d'abord les éléments, puis choisissez l'action)

| Action | Ce qu'elle fait |
|--------|-------------|
| **Confirm all, Save & Sync** | Marque les éléments sélectionnés comme confirmés et les place en file d'attente de synchronisation (exécutée toutes les 4 heures) |
| **Regenerate, Save & Sync** | Relance la génération IA pour les éléments sélectionnés et les place en file d'attente de synchronisation |
| **Sync Generated Content** | Force la resynchronisation des éléments déjà synchronisés (écrase ce qui se trouve dans votre boutique) |
| **Update Suspicious Flag** | Recalcule le statut suspect des éléments sélectionnés |

---

## Cas d'usage courants

**Vérifier le batch de la veille**

- Ouvrez le rapport pour la date précédente
- Filtrez par boutique si vous en avez plusieurs
- Triez par "Executed At" pour voir ce qui a été exécuté

**Trouver les éléments en échec**

- Activez la case à cocher "Show only with errors"
- Cliquez sur le libellé d'erreur d'une ligne pour voir l'erreur exacte et relancer

**Traiter le contenu suspect**

- Activez la case à cocher "Show only suspicious"
- Examinez chaque élément signalé : modifiez-le, régénérez-le ou confirmez-le s'il s'agit d'un faux positif

**Confirmer et synchroniser en masse**

- Sélectionnez tous les éléments (ou filtrez ceux que vous souhaitez)
- Utilisez **Confirm all, Save & Sync** pour tout approuver et mettre en file d'attente en une seule fois
- La synchronisation s'exécute automatiquement toutes les 4 heures ; vous pouvez aussi utiliser "Sync Now" par élément pour un envoi immédiat

---

## Problèmes courants

**Aucun élément affiché pour aujourd'hui**

- Les completions apparaissent ici lorsqu'un Flow s'est exécuté : vérifiez que vos Flows sont Active et qu'ils ont été exécutés
- Essayez d'élargir la période

**Éléments confirmés mais non synchronisés**

- La synchronisation s'exécute toutes les 4 heures : patientez ou utilisez "Sync Now" par élément
- Vérifiez que l'intégration est Active et que la boutique est connectée

**Erreur dans la colonne "Executed At"**

- Cliquez sur le libellé d'erreur rouge pour voir les détails
- Causes fréquentes : identifiants d'intégration expirés, attribut non modifiable, boutique hors ligne

**Un élément s'affiche comme "Suspicious"**

- Le contenu a déclenché un mot suspect ou un motif d'artefact IA
- Modifiez le contenu manuellement, puis confirmez-le, ou utilisez **Update Suspicious Flag** si le contenu est en réalité correct
