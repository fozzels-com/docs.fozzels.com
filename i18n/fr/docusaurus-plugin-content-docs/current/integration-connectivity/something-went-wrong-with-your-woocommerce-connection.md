---
id: '103000395329'
title: "2.5.7. Un problème avec votre connexion WooCommerce ?"
sidebar_position: 14
slug: >-
  /integration-connectivity/something-went-wrong-with-your-woocommerce-connection
description: >-
  Pas d'inquiétude : la plupart des problèmes de connexion se résolvent
  rapidement. Ce guide vous présente les messages les plus courants que vous
  pouvez rencontrer et ce qu'il faut faire exactement.
  Ce
---

Pas d'inquiétude : la plupart des problèmes de connexion se résolvent rapidement. Ce guide vous présente les messages les plus courants que vous pouvez rencontrer et ce qu'il faut faire exactement.


## Que signifie "Connection Issues Detected" ?

Lorsque vous enregistrez votre intégration WooCommerce, Fozzels vérifie automatiquement que tout est correctement configuré. Si un élément manque ou nécessite votre attention, un message vous explique la marche à suivre.


## Base Connection

-   **"Authentication failed."** Vos clés API sont incorrectes ou obsolètes. Allez dans votre boutique WooCommerce → **Settings → Advanced → REST API**, générez de nouvelles clés et collez-les dans Fozzels.

-   **"Access denied."** Votre clé API ne dispose pas des autorisations appropriées. Lors de la création de la clé dans WooCommerce, veillez à sélectionner **Read/Write**, et non Read-only.

-   **"REST API not found."** Vérifiez à nouveau l'URL que vous avez saisie. Elle doit ressembler à `https://yourstore.com`, sans barre oblique superflue ni faute de frappe.

-   **"Cannot reach your store."** Votre boutique est peut-être hors ligne, ou un plugin de sécurité bloque l'accès. Vérifiez que votre boutique est en ligne et fonctionne, puis réessayez. Si un plugin de sécurité ou un pare-feu est en cause, autorisez les adresses indiquées dans [2.1.1. Connection Requirements: IP Addresses, User-Agent and Firewall Settings](./connection-requirements.md).

-   **"SSL certificate error."** Le certificat de sécurité de votre boutique présente un problème. Contactez votre hébergeur pour le corriger.


## ACF (Advanced Custom Fields)

-   **"Both plugins are required."** Deux plugins doivent être actifs sur votre site WordPress : **Advanced Custom Fields** et **ACF to REST API**. Allez dans **Plugins → Add New** et installez les deux.

-   **"ACF is active but the connector plugin is missing."** ACF est installé, mais le second plugin est manquant. Installez **ACF to REST API** et activez-le.

-   **"Connector is active but ACF is not."** Le second plugin est présent, mais ACF lui-même n'est pas actif. Allez dans **Plugins** et activez **Advanced Custom Fields**.

-   **"Permalink structure is incompatible."** Allez dans **WordPress → Settings → Permalinks** et passez de "Plain" à n'importe quelle autre option : **Post name** convient très bien. Enregistrez, et c'est terminé.

-   **"ACF fields are not visible via REST API."** Ouvrez votre ACF Field Group, allez dans **Group Settings** et activez **Show in REST API**. N'oubliez pas d'enregistrer.

-   **"ACF REST API version mismatch."** Allez dans **WordPress → Settings → Permalinks → ACF to REST API** et définissez la version sur **v3**.

## WPML (multilingue)

-   **"WPML plugin is not detected."** Installez et activez le plugin **WPML Multilingual CMS** sur votre site WordPress. Ajoutez ensuite au moins une langue sous **WPML → Languages**.

-   **"WPML is active but no languages are configured."** WPML est installé, mais vous n'avez pas encore ajouté de langue. Allez dans **WPML → Languages** et ajoutez celles dont vous avez besoin.

-   **Vous venez d'activer WPML ?** Après l'avoir activé, retournez dans **Websites & Stores** et cliquez sur **Pull Stores/Websites**, puis relancez **Pull Products**. C'est ainsi que Fozzels prend connaissance de vos versions linguistiques.

## Yoast SEO

Yoast SEO nécessite deux éléments pour fonctionner avec Fozzels : le plugin **Yoast SEO** et notre **plugin connecteur Fozzels**. Vous pouvez télécharger le connecteur depuis **app.fozzels.com**.

-   **"Both plugins are required."** Aucun des deux plugins n'est actif. Installez et activez **Yoast SEO** et le **plugin connecteur Fozzels** dans WordPress.

-   **"Connector plugin is not installed."** Yoast SEO fonctionne, mais notre connecteur est manquant. Téléchargez-le depuis **app.fozzels.com** et activez-le dans **Plugins**.

-   **"Yoast SEO is not active."** Le connecteur est présent, mais Yoast SEO n'est pas actif. Allez dans **Plugins** et activez **Yoast SEO**.
-   **"Your connector plugin is outdated."** _(simple information)_ Tout fonctionne toujours, mais nous vous recommandons de mettre à jour le connecteur vers la dernière version pour une expérience optimale. Téléchargez-le depuis **app.fozzels.com**.
**Vous venez d'activer Yoast SEO ?** Relancez **Pull Stores/Websites** et **Pull Products** afin que Fozzels puisse charger vos champs SEO.

* * *

## AIOSEO (All in One SEO)

-   AIOSEO nécessite également deux éléments : le plugin **All in One SEO** et notre connecteur **AIOSEO API Sync by Fozzels**. Téléchargez le connecteur depuis **app.fozzels.com**.

-   **"Both plugins are required."** Aucun des deux plugins n'est actif. Installez et activez les deux dans WordPress.

-   **"Connector plugin is not installed."** AIOSEO fonctionne, mais notre connecteur est manquant. Téléchargez-le depuis **app.fozzels.com** et activez-le.

-   **"AIOSEO is not active."** Le connecteur est présent, mais AIOSEO n'est pas actif. Allez dans **Plugins** et activez **All in One SEO**.

-   **"Your connector plugin is outdated."** _(simple information)_ Tout fonctionne toujours, mais la mise à jour du connecteur est recommandée. Téléchargez la dernière version depuis **app.fozzels.com**.

**Vous venez d'activer AIOSEO ?** Relancez **Pull Products** afin que Fozzels puisse charger vos champs AIOSEO.

* * *

## Vous utilisez Yoast SEO et AIOSEO en même temps ?

Ces deux plugins ne fonctionnent pas ensemble, ni dans Fozzels ni dans WordPress. Choisissez-en un et désactivez l'autre des deux côtés. Vous ne savez pas lequel choisir ? Optez pour celui que vous utilisez déjà sur votre boutique.

* * *

## Toujours bloqué ?

Si rien de ce qui précède ne vous a aidé, contactez-nous à l'adresse **[support@fozzels.com](mailto:support@fozzels.com)** ou ouvrez un ticket dans le Help Center. Une capture d'écran du message d'erreur nous aide beaucoup à résoudre le problème rapidement !
