---
id: '103000395334'
title: 2.5.8. Diagnostiquer votre connexion WooCommerce dans Fozzels
sidebar_position: 15
slug: /integration-connectivity/diagnosing-your-woocommerce-connection-in-fozzels
description: >-
  Si vous voyez une bannière "Connection Issues Detected" après avoir enregistré
  votre intégration WooCommerce, cet article vous aidera à comprendre la
  signification de chaque message et à
---

#

Si vous voyez une bannière **"Connection Issues Detected"** après avoir enregistré votre intégration WooCommerce, cet article vous aidera à comprendre la signification de chaque message et à le résoudre.

##
Fonctionnement du diagnostic

Chaque fois que vous enregistrez votre intégration, Fozzels vérifie automatiquement la connexion à votre boutique WooCommerce et l'état des plugins activés. Si un élément est manquant ou mal configuré, une notification s'affiche avec la description du problème et les étapes pour le résoudre.

Il existe trois types de notifications :

-   **Error** — un élément bloque la connexion. L'intégration ne fonctionnera pas tant que le problème n'est pas résolu.
-   **Warning** — l'intégration peut fonctionner, mais un élément risque de causer des problèmes ou de limiter les fonctionnalités.
-   **Notice** — message informatif ; aucune action n'est strictement requise, mais elle est recommandée.

##
Messages de connexion de base

Ces messages apparaissent quels que soient les plugins que vous avez activés.

-   **"Authentication failed. Check your Customer Key and Customer Secret."**
    Vos identifiants d'API sont incorrects ou ont été régénérés depuis leur copie. Accédez à **WooCommerce → Settings → Advanced → REST API**, régénérez les clés et collez-les dans Fozzels.

-   **"Access denied. Your API key requires Read/Write permissions."**
    La clé d'API a été créée avec un accès en lecture seule. Fozzels a besoin d'un accès en écriture pour renvoyer le contenu généré vers votre boutique. Régénérez la clé et sélectionnez **Read/Write** dans la liste déroulante Permissions.

-   **"REST API not found. Check your store URL."**
    L'API REST de WooCommerce est inaccessible à l'URL indiquée. Vérifiez que vous avez saisi la bonne URL de boutique (par ex. `https://yourstore.com`) et que l'API REST de WooCommerce est activée.

-   **"Cannot reach your store. Check the URL, server status, or firewall settings."**
    Fozzels n'a pas pu établir de connexion. Votre boutique est peut-être hors ligne, l'URL est peut-être incorrecte, ou un pare-feu ou un plugin de sécurité bloque peut-être les requêtes API externes. Consultez [2.1.1. Prérequis de connexion : adresses IP, User-Agent et paramètres du pare-feu](./connection-requirements.md) pour connaître les adresses IP et le User-Agent à autoriser.

-   **"SSL certificate error. Ensure your store uses a valid HTTPS certificate."**
    Le certificat SSL de votre boutique est invalide ou expiré. Contactez votre hébergeur pour renouveler ou remplacer le certificat.

##
ACF (Advanced Custom Fields)

Ces messages apparaissent lorsque l'option **Enable ACF** est activée dans Fozzels.

-   **"Both 'Advanced Custom Fields' and 'ACF to REST API' plugins are required. Make sure both are installed and active."**
    Aucun des deux plugins n'est détecté sur votre site WordPress. Installez et activez **Advanced Custom Fields** et **ACF to REST API** dans l'administration WordPress, sous **Plugins → Add New**.

-   **"'Advanced Custom Fields' is active but the 'ACF to REST API' plugin is not installed."**
    ACF est installé mais le plugin de connexion est manquant. Installez et activez le plugin **ACF to REST API** pour permettre à Fozzels de lire vos champs personnalisés.

-   **"'ACF to REST API' plugin is active but 'Advanced Custom Fields' is not active."**
    Le plugin de connexion est installé mais ACF lui-même n'est pas actif. Accédez à **Plugins** dans l'administration WordPress et activez **Advanced Custom Fields**.

-   **"Permalink structure is incompatible with REST API."**
    La structure des permaliens de WordPress est définie sur **Plain**, ce qui empêche l'accès à l'API REST. Accédez à **WordPress → Settings → Permalinks** et sélectionnez une structure autre que Plain (par ex. **Post name**). Enregistrez les modifications.

-   **"ACF fields are not visible via the REST API."**
    Votre groupe de champs ACF (Field Group) n'est pas exposé à l'API REST. Accédez à **ACF → Field Groups**, ouvrez le groupe concerné, accédez à **Group Settings** et activez à la fois **Active** et **Show in REST API**.

-   **"ACF REST API version mismatch. Version v3 is required."**
    Si vous utilisez le plugin **ACF to REST API**, il doit être configuré en v3. Accédez à **WordPress → Settings → Permalinks → ACF to REST API** et définissez **Request Version** sur **v3**.

##
WPML (multilingue)

Ces messages apparaissent lorsque l'option **Enable WPML** est activée dans Fozzels.

-   **"WPML plugin is not detected on your WordPress site."**
    Le plugin WPML n'est pas installé ou n'est pas actif. Installez et activez **WPML Multilingual CMS** sur votre site WordPress, puis configurez au moins une langue supplémentaire sous **WPML → Languages**.

-   **"WPML is active but no languages are configured."**
    WPML est installé mais aucune langue supplémentaire n'a été configurée. Accédez à **WPML → Languages** et ajoutez au moins une langue à votre boutique.

-   **After enabling WPML, re-run Pull Stores/Websites and Pull Products.**
    Cette étape est nécessaire pour que Fozzels détecte toutes les locales linguistiques et charge les bonnes versions de produits pour chaque langue. Sans nouvelle exécution de la récupération, les nouvelles locales n'apparaîtront pas dans le système.

* * *

## Yoast SEO

Ces messages apparaissent lorsque l'option **Yoast WooCommerce SEO** est activée dans Fozzels. L'intégration de Yoast SEO nécessite deux plugins actifs sur votre site WordPress : **Yoast SEO** et le plugin de connexion **Yoast SEO WooCommerce REST API by Fozzels**.

> Vous pouvez télécharger le plugin de connexion Fozzels depuis **app.fozzels.com** ou depuis le guide de configuration de la base de connaissances.

* * *

-   **"Both 'Yoast SEO' and 'Yoast SEO WooCommerce REST API by Fozzels' plugins are required."**
    Aucun des deux plugins n'est détecté. Installez et activez les deux dans l'administration WordPress.

-   **"'Fozzels SEO Fields REST API for WooCommerce' plugin is not installed or not active."**
    Yoast SEO est actif mais le plugin de connexion Fozzels est manquant. Téléchargez-le et installez-le depuis **app.fozzels.com**, puis activez-le dans **Plugins**.
-   **"Yoast SEO is not active."**
    Le plugin de connexion est installé mais Yoast SEO lui-même n'est pas actif. Accédez à **Plugins** et activez **Yoast SEO**.

-   **"Your 'Fozzels SEO Fields REST API for WooCommerce' plugin is outdated."**
    Vous utilisez une ancienne version du plugin de connexion. L'intégration continuera de fonctionner, mais nous vous recommandons de passer à la dernière version pour de meilleures performances et une meilleure compatibilité. Téléchargez la dernière version depuis **app.fozzels.com**.

-   **After enabling Yoast SEO, re-run Pull Stores/Websites and Pull Products.**
    Cette étape est nécessaire pour charger les attributs `yoast_title`, `yoast_meta_description` et `yoast_focus_keyword` dans votre catalogue Fozzels.

* * *

## AIOSEO (All in One SEO)

Ces messages apparaissent lorsque l'option **AIOSEO** est activée dans Fozzels. L'intégration d'AIOSEO nécessite deux plugins actifs : **All in One SEO** et le plugin de connexion **AIOSEO API Sync by Fozzels**.

> Vous pouvez télécharger le plugin de connexion Fozzels depuis **app.fozzels.com** ou depuis le guide de configuration de la base de connaissances.

-   **"Both 'All in One SEO' and 'AIOSEO API Sync' plugins are required."**
    Aucun des deux plugins n'est détecté. Installez et activez les deux dans l'administration WordPress.

-   **"'All in One SEO' is active but the 'AIOSEO API Sync' plugin is not installed."**
    AIOSEO est actif mais le plugin de connexion Fozzels est manquant. Téléchargez-le et installez-le depuis **app.fozzels.com**, puis activez-le dans **Plugins**.

-   **"'AIOSEO API Sync' plugin is active but 'All in One SEO' is not active."**
    Le plugin de connexion est installé mais AIOSEO lui-même n'est pas actif. Accédez à **Plugins** et activez **All in One SEO**.

-   **"Your 'AIOSEO API Sync' plugin is outdated."**
    Vous utilisez une ancienne version du plugin de connexion. L'intégration continuera de fonctionner, mais nous vous recommandons de passer à la dernière version. Téléchargez-la depuis **app.fozzels.com**.

-   **After enabling AIOSEO, re-run Pull Products.**
    Cette étape est nécessaire pour charger les attributs `_aioseo_title`, `_aioseo_description` et les autres attributs AIOSEO dans votre catalogue Fozzels.

* * *

## Conflit : Yoast SEO et AIOSEO

**"Both Yoast SEO and All in One SEO are active at the same time. This will cause conflicts. Please disable one of them to continue."**

Yoast SEO et AIOSEO ne peuvent pas être utilisés simultanément, ni dans Fozzels ni sur votre site WordPress. Choisissez un seul plugin SEO et désactivez l'autre des deux côtés.

* * *

## Toujours des difficultés ?

Si vous avez suivi les étapes ci-dessus et que le problème persiste, contactez notre équipe support à l'adresse **[support@fozzels.com](mailto:support@fozzels.com)** ou soumettez un ticket via le Help Center. Joignez une capture d'écran du message d'erreur et de vos paramètres d'intégration pour nous aider à vous répondre plus rapidement.
