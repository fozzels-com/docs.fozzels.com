---
id: '103000367838'
title: "1.2.1. Paramètres du profil, de la sécurité et des notifications"
sidebar_position: 2
slug: /account-core-resources/profile-security-and-notifications-settings
description: >-
  Cette section détaille les fonctions de gestion du compte utilisateur, des
  préférences de sécurité, du comportement des notifications et de la
  configuration de la clé API personnelle dans Fozzels.
---

Cette section détaille les fonctions de gestion du compte utilisateur, des préférences de sécurité, du comportement des notifications et de la configuration de la clé API personnelle dans Fozzels.
Pour ouvrir la section Settings, utilisez le lien : `https://app.fozzels.com/user/settings/profile`.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Tc2cIujPZyK0-BRWvFlDJzAKwvlb1mCbBA.png)

### 1.1. Paramètres utilisateur

La section Settings donne accès aux principales options de configuration qui permettent aux utilisateurs de gérer leur compte personnel, leurs préférences de sécurité et les fonctionnalités qui facilitent le travail collaboratif.

#### 1.1.1. Paramètres du profil

Menu → Settings → Profile. Cette page s'ouvre par défaut lorsque vous accédez au menu Settings. Elle permet de modifier les informations de base de votre profil et de votre entreprise.

Les champs modifiables sont : le nom d'affichage de l'utilisateur (Name), l'adresse e-mail (Email Address), le nom de l'entreprise (Company Name), le numéro de téléphone (Phone Number, facultatif) et une courte description dans le champ About.
Pour appliquer des modifications, cliquez sur Save.
Le système applique toutes les modifications en une seule fois. Il est important de noter que le système n'affiche aucun avertissement si vous quittez la page avec des modifications non enregistrées : les utilisateurs doivent donc enregistrer manuellement.
L'adresse e-mail doit être dans un format valide.
Pour modifier la photo de profil (Profile Picture), cliquez sur l'image de l'avatar afin d'ouvrir la fenêtre de téléversement. Les formats pris en charge sont JPG et PNG.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/n4NwWmNOPgAtHdMdd2XYw8IeaKeefh4uKw.png)

#### 1.1.2. Paramètres de sécurité

Menu → Settings → Security.
Cette page permet de modifier le mot de passe du compte.

Les champs modifiables sont Current Password, New Password et Confirm New Password.
Comportement de saisie : toutes les valeurs saisies sont masquées (affichées sous forme de points), et les valeurs des champs ne sont ni enregistrées ni mises en cache.
**Cliquez sur Update** pour appliquer les modifications.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/4_vsO-7JKhQeaATz0rzs8X97nn-JDns8Iw.png)
Mise à jour réussie : si le nouveau mot de passe est accepté, une notification de réussite verte s'affiche en haut de l'écran, et le mot de passe est immédiatement mis à jour pour les prochaines connexions.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Lv9g42HJ-ap_ArFPBPd0525XLLSRHyDzCA.png)
Gestion des erreurs : si le mot de passe actuel est incorrect, ou si le nouveau mot de passe et sa confirmation ne correspondent pas, un message d'erreur s'affiche. Dans ce cas, tous les champs de mot de passe sont automatiquement vidés, et l'utilisateur doit ressaisir les informations depuis le début.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/6niT9qGiupLPyM0ijzwSXLeAhLO-NYguaA.png)

#### 1.1.3. Paramètres des notifications

Menu → Settings → Notifications. Utilisez cette section pour gérer les notifications par e-mail.

Cette section contient deux cases à cocher :

-   Allow Fozzels emails : lorsque la case est décochée, aucune communication par e-mail relative au produit (par ex. mises à jour, alertes système) n'est envoyée. Lorsqu'elle est cochée, l'utilisateur accepte de recevoir ces e-mails.

-   Receive balance notifications : lorsque la case est décochée, aucune communication par e-mail n'est envoyée. Lorsqu'elle est cochée, l'utilisateur accepte de recevoir des notifications lorsque son solde atteint 0 ou moins, avec un rappel de recharger son compte pour continuer à travailler.
**Cliquez sur Update** pour enregistrer les préférences.

![](/img/kb/account-core-resources/profile-security-and-notifications-settings/JuH6V-gxtu1SYR1gzZ0qfO6fSEuVDSSVxQ.png)
1.1.4. Paramètres du jeton Open AI

Menu → Settings → Open AI Token. Cette section permet de connecter et de gérer la clé API OpenAI utilisée pour la génération de texte et d'images.

Le champ modifiable est Token, dans lequel vous saisissez votre clé API OpenAI personnelle ou celle de votre entreprise.
Un seul jeton peut être enregistré par compte à la fois.
Le champ de saisie est un champ en texte clair : le jeton est donc visible pendant la saisie et reste visible après l'enregistrement.
Liste des modèles : après l'enregistrement d'un jeton valide, la liste des modèles OpenAI disponibles s'affiche en dessous.
Chaque modèle indique son nom (Name) et son statut (Status, par ex. enabled, disabled, invalid).
**Utilisez** le bouton **Refresh** pour actualiser cette liste si nécessaire.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/BR86j8Sx5F-7Oh8IQl62gSgp1Y-WnINnHQ.png)
Enregistrement réussi : cliquez sur Save pour soumettre le jeton. Si le jeton est valide, une notification verte confirme la mise à jour et la liste des modèles se charge.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Ex-tA3z01sWbqI0QlvqI_o7NICSECMzMRg.png)
Remarques sur la validation du jeton : différents problèmes peuvent survenir lors de la saisie d'un jeton, notamment un format non valide, un jeton expiré ou révoqué, ou des erreurs de validation côté serveur. Si le jeton n'est pas valide ou ne peut pas être vérifié, le système affiche une notification d'erreur appropriée (par ex. « Unable to validate token »).
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/AAyYCYEC9SJuztUVuBCtVy_paCUppxN8iA.png)
Dans tous les cas d'erreur, le jeton n'est pas enregistré et le champ de saisie est automatiquement vidé.
