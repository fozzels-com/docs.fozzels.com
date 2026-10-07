---
id: '103000366656'
title: >-
  1.3.2. Comment configurer le rechargement automatique et ajouter ou modifier
  votre moyen de paiement par défaut (carte) dans Fozzels
sidebar_position: 5
slug: >-
  /account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-
description: >-
  Bienvenue dans notre base de connaissances ! Cet article vous aidera à
  configurer le rechargement automatique de votre compte et à éviter les
  interruptions de service. Fonction de rechargement automatique Si vous
  souhaitez
---

Bienvenue dans notre base de connaissances !
Cet article vous aidera à configurer le rechargement automatique de votre compte et à éviter les interruptions de service.

Fonction de rechargement automatique (Auto Top-Up)
Si vous souhaitez simplifier votre flux de travail, garantir un service ininterrompu et gagner du temps sur les transactions fréquentes, veuillez configurer la **fonction Auto Top-Up**.
Condition essentielle : vous devez définir et conserver un moyen de paiement par défaut (Default payment method) actif dans le portail de facturation. Dans le cas contraire, le système tentera de débiter automatiquement votre compte pour poursuivre le service, mais échouera faute de carte.

**Activation et configuration du rechargement automatique**

Avant d'ajouter votre carte, vous devez définir les conditions dans lesquelles le rechargement automatique doit se déclencher.
1\. Connectez-vous à votre compte Fozzels.

2\. Dans la section "Billing", sélectionnez l'onglet "Payments".

3\. Cliquez sur le bouton "Configure Charge Credits" pour ouvrir la fenêtre "Recharge Settings".

![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/pBvUV3C09cLyPSGVeNK68mSp1dECgMMqnw.png)

4\. Définissez les conditions : saisissez les informations nécessaires :

-   When credit balance goes below : saisissez le montant (par exemple 5 €) qui déclenche le rechargement.
-   Bring credit balance back up to : saisissez le montant (par exemple 50 €) auquel votre solde doit être rechargé.
    ![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/GblaDhUk0BuNUEd4pg4kZ75W5DW8KPysMw.png)

5\. Activez le rechargement automatique ! Cochez la case : "Yes, automatically recharge my card when my credit balance falls below a threshold."

6\. Veillez à vérifier les limites affichées (par exemple "Max auto top-ups limits: up to 3 transactions, up to €100 in total") afin d'éviter des prélèvements inattendus.

7\. Cliquez sur "Save" pour appliquer vos paramètres de recharge.

Utilisez le **portail de facturation client**, propulsé par **Stripe**, pour gérer vos cartes en toute sécurité et garantir un service ininterrompu.

Accéder au portail de facturation client dans Fozzels

Sur la page "Payments Settings", cliquez sur le bouton orange "Customer Billing Portal".
Vous serez automatiquement redirigé vers une page sécurisée dédiée, gérée par notre partenaire, Stripe.
![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/yXOwyAippd7i7dY9po9AdfhKR2c1KALBKw.png)

Ajouter un nouveau moyen de paiement

Dans le portail de facturation Stripe, vous trouverez toutes les informations nécessaires pour gérer vos paiements.

1.  Dans la section "Payment Method", cliquez sur le lien "+ Add payment method".
    ![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/FoML4esufUMc7OVytnlxbtF3mTQk-ZyWFQ.png)

2.  Sur la page "Add payment method", sélectionnez votre type de paiement (par exemple Card, Google Pay, etc.).

3.  Renseignez les informations de carte requises :
    -   Numéro de carte (Card number)
    -   Date d'expiration (Expiration date)
    -   Code de sécurité (CVC)
    -   Pays (Country)
        Pour garantir une sécurité maximale, vos données de paiement sont traitées et protégées par notre partenaire, Stripe, sur sa page sécurisée, ce qui garantit que ces données ne sont jamais stockées sur les serveurs de Fozzels.

![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/R4XWSHH69ZnwrZh-QL7Fsd-E73vOi2vmZQ.png)

4\. Après la saisie d'informations de carte valides, l'option "Save my information for faster checkout" apparaît.

Si vous cochez cette case, vos données de paiement seront enregistrées par Stripe pour vos futurs paiements. Cela permet à Fozzels de débiter votre carte pour les transactions suivantes sans que vous ayez à ressaisir toutes les informations de carte, pour un paiement rapide et fluide.
![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/I1qj0gQy3q45VtpcVcQpj2dRhp0IDcQ_cw.png)

5\. Cliquez sur le bouton bleu "Add". La nouvelle carte apparaît dans votre liste de moyens de paiement disponibles.
Le système définit automatiquement la première carte que vous ajoutez comme carte par défaut (Default) pour tous les paiements futurs, sauf indication contraire de votre part.
![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/ykFZow4_tbnd9qA8tX-V2L5Uoyr8pyXtlQ.png)

 ![check mark button](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/path.png) Use as default payment method - Cette case apparaît pour chaque carte ajoutée après la première. Elle est cochée par défaut. Laissez-la cochée pour que la nouvelle carte devienne prioritaire pour tous les paiements futurs, en remplacement de la carte par défaut actuelle.
![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/IBE7E7-p5uagnAVoqnFjN7U6lxn6X-RVMA.png)

Définir une carte par défaut (si plusieurs cartes existent)

Si vous disposez de plusieurs cartes et devez changer votre carte principale, procédez comme suit :

1.  Dans la section "Payment Methods", repérez la carte que vous souhaitez définir par défaut.

2.  Cliquez sur l'icône de points de suspension (...) à côté de la carte.

3.  Dans le menu déroulant, sélectionnez "Make default".
4.  Le système utilisera alors cette carte pour le renouvellement automatique de votre abonnement et le paiement de vos transactions d'utilisation.

    ![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/8_eyBagA2nJVNV5z4T2jzyUxfhLaE-vAHQ.png)![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/dEEAvESUMkuI9qPmk3VnN7v8uiudocjGTA.png)![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/TVevqGCjovq_InjjYXSEFu-4nBORaCSHvQ.png)
    _Comment supprimer un moyen de paiement_
    Pour supprimer une carte enregistrée, l'action à effectuer dépend du fait que la carte est ou non définie comme moyen de paiement par défaut.
    -   Pour la carte par défaut : cliquez sur l'icône "X" située directement sur l'entrée de la carte pour lancer la suppression.

    -   Pour les cartes non définies par défaut : cliquez sur l'icône de points de suspension (...) à côté de la carte et sélectionnez "Delete" dans le menu déroulant.
        ![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/kfmTRWfdCaot0vRMwGadDnwUC-0iKsnSyw.png)
        Dans les deux cas, une fenêtre contextuelle de confirmation apparaît pour vous demander de confirmer que vous souhaitez supprimer définitivement le moyen de paiement. Cliquez sur le bouton rouge "Delete payment method" pour finaliser la suppression.
        ⚠️ Remarque importante concernant les cartes par défaut
        Si vous supprimez la carte par défaut actuelle, le système N'ATTRIBUERA PAS automatiquement une autre carte comme nouvelle carte par défaut. Vous devez sélectionner manuellement la carte restante et choisir "Make default" dans le menu des points de suspension afin que votre abonnement reste actif et que les paiements futurs soient traités sans encombre.
        ![](/img/kb/account-core-resources/how-to-set-up-auto-top-up-and-add-or-change-your-default-payment-method-card-in-/YMdO4L7ylwvRbMSgaqXXOJWSmXmzDkFVJQ.png)
        Informations importantes !

Sécurité : Stripe garantit que les données de votre carte de paiement ne sont jamais stockées sur les serveurs de Fozzels, pour une protection maximale.

Adresse de facturation : les informations relatives à votre adresse de facturation sont disponibles dans la section "Billing Information". Vous pouvez les modifier en cliquant sur "Update information".

Conditions : en fournissant les données de votre carte, vous acceptez les Conditions d'utilisation et la Politique de confidentialité de Fozzels.

Historique des factures : vous pouvez consulter toutes les transactions précédentes dans la section "Invoice History".
