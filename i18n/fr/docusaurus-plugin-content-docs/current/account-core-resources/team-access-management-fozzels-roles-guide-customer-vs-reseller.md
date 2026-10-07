---
id: '103000385518'
title: "1.2.2. Gestion des accès de l'équipe : guide des rôles Fozzels (Customer vs Reseller)"
sidebar_position: 3
slug: >-
  /account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller
description: >-
  Nous comprenons que la délégation de l'accès aux intégrations peut prêter à
  confusion. Si vous cherchez un moyen sûr et efficace d'accorder à vos collègues (marketeurs, content managers
---

Nous comprenons que la délégation de l'accès aux intégrations peut prêter à confusion. Si vous cherchez un moyen sûr et efficace d'accorder à vos collègues (marketeurs, responsables de contenu) l'autorisation de travailler avec vos données, ce guide est exactement ce qu'il vous faut !

Ce document explique comment nous utilisons les rôles **Customer** et **Reseller** pour gérer les accès au sein de votre équipe.
**Remarque importante sur les rôles :** l'attribution du rôle Reseller n'est pas une action que vous pouvez effectuer vous-même. Pour obtenir ce rôle, **vous devez contacter les administrateurs de Fozzels** avec la demande appropriée.

## 1\. Les rôles : la clé de votre gestion

### **Customer** : propriétaire des ressources

Il s'agit de votre compte principal, qui regroupe toutes vos intégrations configurées, les Flows créés et les données de votre catalogue.

Vous avez le droit de **révoquer** l'accès Reseller ('Revoke') à tout moment.

### **Reseller** : gestionnaire délégué

Ce rôle est idéal pour vos collègues chargés de la gestion, car il donne accès à l'onglet **'Customers'** pour la gestion des connexions.

## 2\. Comment établir une connexion

La connexion entre les comptes s'établit par une invitation, qui est **toujours initiée par le Reseller** via l'onglet 'Customers'.

###     Scénario A : « Mon compte est déjà configuré ; comment ajouter un collègue ? »

(Un compte avec des intégrations existe -> un Reseller est nécessaire pour l'accès)

1.  **Préparation du rôle et du compte :** votre collègue crée un compte et obtient le rôle Reseller (en contactant les administrateurs de Fozzels).

2.  **Sélection de l'outil d'invitation (action du Reseller) :** le Reseller accède à l'onglet **'Customers'** et sélectionne **"New invitation"**.
    ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/8_OheAOV-zWzEO2V2EbgtnGCGEONZXP7QA.png)

3.  **Lancement de l'invitation (action du Reseller) :**

-   Le Reseller saisit l'adresse e-mail de votre compte Customer dans la fenêtre contextuelle **"Send Reseller Invitation"** et clique sur **'Invite'**.

    -   **Résultat :** le Reseller voit la notification "Success". Dans le tableau 'Customers', l'enregistrement de votre compte apparaît comme **pending** (Verified : ❌). Le Reseller reçoit également un e-mail confirmant l'envoi de la demande.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/McV18IopZUnGCcH9fQEhTVk0aHKc7cThOQ.png)

4.  **Finalisation et activation (actions du Customer) :**

-   Vous (le Customer) recevez un e-mail contenant un avertissement d'accès et cliquez sur **"Accept Invitation"**.

    -   **Résultat :** l'icône **Customer Control** apparaît dans votre en-tête. Le Reseller actualise la page, voit **✅ Verified** ainsi que le bouton **"Impersonate"**.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/iYodO_1wbFDJx3vZm5EpofGG_fL8OsFqwQ.png)

![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/GPhuYGwM2TMwRMJ2Y-rOzT4Cv6QK-bQ0iw.png)

![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/mKMQyhtodo5204bprF1OVIW-uYbgxPYJXw.png)

![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/27tRV3zXZo-Sd-xnfdD2Npqj9U3_8fWR5A.png)

###
![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/qLafAoXrVGuUXACbhMPMEvQ7Gjf7Xg2kCw.png)

Scénario B : « Nous sommes une nouvelle équipe ; comment devons-nous démarrer ? »

(Le Reseller est créé en premier -> un nouveau compte Customer pour l'intégration est créé ensuite)

1.  **Compte d'équipe (Reseller) :** un membre de l'équipe obtient le rôle Reseller.

2.  **Création du Customer (action du Reseller) :**

    -   Le Reseller sélectionne **"New Customer"** dans l'onglet 'Customers'.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/oYIs49AncfmABn90cBQtHIGuXk2HrbrVxw.png)

-   Dans la fenêtre contextuelle **"Send New Customer Invitation"**, le Reseller renseigne les données (Name, Company Name, E-mail) et clique sur **'Invite'**.

    -   **Résultat :** un nouvel enregistrement apparaît dans le tableau 'Customers' avec l'étiquette **"Pending invitation"**.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/l1eCmd-3F6KsiAofXve7As354yDBG0xTfg.png)

3.  **Activation du compte Customer (action du nouvel utilisateur) :**

-   Le nouvel utilisateur reçoit l'e-mail **"Join Our New Fozzels Platform Today!"**.

-   L'utilisateur clique sur **"Join Now"**, est redirigé vers Fozzels, **définit un mot de passe** et **doit finaliser la configuration de son compte**.

4.  **Début du travail :** une fois que le nouvel utilisateur a terminé la configuration, son compte devient disponible pour le Reseller. Le Reseller verra les données du nouveau Customer, ainsi que les boutons **"Impersonate"** et **"Delete"**.
    ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/nyFMT1WCwU8yZ1p_dG224AX8Ogyy1rLBlg.png)

## 3\. Outil clé : Impersonate (accès complet et gestion)

-   **Activation :** un clic sur **"Impersonate"** redirige le Reseller vers le compte Customer.

-   **Indicateur visuel :** l'en-tête du système **devient noir** (ou change d'apparence) lorsque le Reseller travaille en mode accès.

-   **Sortie :** le Reseller peut revenir à son propre compte via le lien **'Leave impersonation'**.

##
4\. Section importante : responsabilité et contrôle

-   **Délégation de responsabilité :** en acceptant l'invitation, vous déléguez la **pleine responsabilité opérationnelle** pour toutes les actions effectuées dans ce compte. Le Reseller peut modifier ou supprimer des données et des intégrations critiques.

-   **Votre contrôle (Revoke) :** vous pouvez toujours **révoquer l'accès du Reseller**. Cliquez sur l'icône **Customer Control** dans l'en-tête et sélectionnez le bouton rouge **'Revoke'**.

-   **Fin de la connexion (Delete) :** le Reseller peut également mettre fin à la connexion à l'aide du bouton **'Delete'**.

-   **Situations critiques :** en cas de circonstances imprévues liées à l'accès ou à la sécurité, **n'attendez pas** —  **contactez immédiatement les administrateurs de Fozzels** pour une intervention urgente.
