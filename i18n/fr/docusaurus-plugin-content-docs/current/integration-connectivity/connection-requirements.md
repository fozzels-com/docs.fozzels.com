---
title: "2.1.1. Prérequis de connexion : adresses IP, User-Agent et paramètres du pare-feu"
sidebar_position: 1.5
slug: /integration-connectivity/connection-requirements
description: >-
  Les adresses IP, le User-Agent et les paramètres de pare-feu, de WAF et de
  Cloudflare dont votre boutique a besoin pour que Fozzels puisse s'y connecter.
  Partagez cette page avec votre hébergeur ou votre administrateur serveur.
---

Fozzels se connecte à votre boutique via Internet : il lit vos produits via l'API de votre boutique, réécrit le contenu généré et télécharge vos images produit. Si un pare-feu, un WAF, une protection anti-bots ou un limiteur de débit de votre côté considère ces requêtes comme suspectes, la connexion échoue.

Utilisez cette page lorsque :

-   le test de connexion dans Fozzels échoue ou expire ;
-   vous voyez des erreurs **401**, **403** ou **429**, ou le message **"Unable to get access token"** lors de la création ou de l'enregistrement d'une intégration ;
-   la synchronisation (Pull Products ou renvoi du contenu) s'arrête ou est incomplète ;
-   des images produit sont manquantes dans Fozzels.

Vous pouvez transmettre cette page telle quelle à votre hébergeur, à votre agence ou à votre administrateur serveur.

## 1. Autoriser les adresses IP de Fozzels

Ajoutez **toutes** ces adresses à la liste d'autorisation (whitelist) de votre pare-feu, WAF, plugin de sécurité ou panneau d'hébergement :

| Adresse | Type | Utilisation |
| --- | --- | --- |
| `49.13.117.118` | IPv4 | Plateforme Fozzels (toutes les requêtes API et les téléchargements d'images) |
| `2a01:4f8:c17:bb1e::/64` | Plage IPv6 | Plateforme Fozzels (toutes les requêtes API et les téléchargements d'images) |
| `91.205.205.66` | IPv4 | Équipe support et développement de Fozzels, lorsque nous testons ou diagnostiquons votre connexion |

> **Autorisez à la fois IPv4 et IPv6 :** ajoutez toujours l'adresse IPv4 **et** la plage IPv6. Si seule l'adresse IPv4 est autorisée, les requêtes qui atteignent votre boutique en IPv6 sont quand même bloquées. Ajoutez l'entrée IPv6 sous la forme de la plage complète `2a01:4f8:c17:bb1e::/64`, et non d'une adresse unique.

## 2. Autoriser le User-Agent de Fozzels

Chaque requête de Fozzels s'identifie par un User-Agent qui commence par `fozzels/`, suivi du numéro de version de Fozzels :

```
fozzels/9.2 (+https://app.fozzels.com/)
```

Le numéro de version change à chaque version de Fozzels ; ne faites donc pas correspondre la chaîne complète. Dans les règles de protection anti-bots, de WAF ou de limitation de débit, utilisez la condition User-Agent **contient** `fozzels`.

Assurez-vous que :

-   les requêtes avec ce User-Agent ne sont ni bloquées ni soumises à un défi en tant que bot ou crawler ;
-   les requêtes provenant des adresses IP de Fozzels et/ou de ce User-Agent sont exclues de la limitation de débit. Pendant la synchronisation, Fozzels envoie de nombreuses requêtes en peu de temps, surtout pour les grands catalogues. Si elles sont limitées, vous obtenez des erreurs **429 (Too Many Requests)** et la synchronisation ne se termine pas.

Pour une protection optimale, combinez les deux conditions (adresse IP **et** User-Agent) dans vos règles lorsque votre pare-feu le permet.

## 3. Cloudflare

Si votre boutique se trouve derrière Cloudflare, les requêtes de Fozzels peuvent recevoir une page de défi ("Just a moment...") au lieu d'une réponse de l'API. Fozzels ne peut pas résoudre les défis, la connexion échoue donc, souvent avec une erreur **403** ou **"Unable to get access token"**.

Autorisez Fozzels avec **l'une** de ces options :

**Option A : IP Access Rule (la plus simple)**

1.  Dans le tableau de bord Cloudflare, ouvrez votre domaine et accédez à **Security → WAF → Tools** (IP Access Rules).
2.  Ajoutez `49.13.117.118` avec l'action **Allow**.
3.  Ajoutez `2a01:4f8:c17:bb1e::/64` avec l'action **Allow**.
4.  Ajoutez éventuellement `91.205.205.66` avec l'action **Allow**.

**Option B : règle personnalisée WAF avec Skip**

1.  Accédez à **Security → WAF → Custom rules** (dans le nouveau tableau de bord : **Security → Security rules**) et créez une règle.
2.  Utilisez cette expression (Edit expression) :

    ```
    (ip.src in {49.13.117.118 2a01:4f8:c17:bb1e::/64 91.205.205.66})
    ```

3.  Définissez l'action sur **Skip** et sélectionnez les autres règles personnalisées, les règles de limitation de débit, les règles gérées et Super Bot Fight Mode (ainsi que, dans les autres composants, Browser Integrity Check et Security Level).
4.  Placez la règle **en premier** dans la liste et déployez-la.

Vérifiez ensuite :

-   **Bot Fight Mode** (offre Free, sous **Security → Bots**) ne peut pas être contourné par une règle personnalisée. Si Fozzels reçoit encore des défis, désactivez Bot Fight Mode.
-   Le mode **I'm Under Attack** et les autres règles de défi appliquées à l'ensemble du site ne doivent pas s'appliquer à Fozzels. Un défi JavaScript ou géré sur vos chemins d'API bloque toujours Fozzels.
-   Pour confirmer ce qui bloque Fozzels, ouvrez **Security → Events** et filtrez par les adresses IP de Fozzels. Chaque requête bloquée indique quelle règle ou fonctionnalité est intervenue.

## 4. Chemins auxquels Fozzels doit accéder

Fozzels appelle l'API standard de votre plateforme. Ne bloquez pas et ne protégez pas ces chemins pour les adresses IP de Fozzels :

| Plateforme | Chemins |
| --- | --- |
| Magento 2 | `/rest/` et `/graphql` |
| Shopware 6 | `/api/` (y compris `/api/oauth/token`) et `/store-api/` |
| WooCommerce | `/wp-json/` |

Fozzels télécharge également vos images produit à partir de leurs URL ; votre domaine de médias ou d'images (y compris un CDN) doit donc lui aussi être accessible pour Fozzels.

## 5. Autres vérifications d'hébergement et de pare-feu

-   **Pare-feu de l'hébergeur :** de nombreux hébergeurs exploitent leur propre pare-feu ou protection DDoS devant votre serveur. Demandez-leur d'y autoriser également les adresses IP de Fozzels.
-   **ModSecurity / Imunify360 (Plesk, cPanel, DirectAdmin) :** ces pare-feu applicatifs web peuvent bloquer les requêtes API. Ajoutez les adresses IP de Fozzels à leur liste d'autorisation.
-   **fail2ban ou outils similaires :** assurez-vous que les adresses IP de Fozzels figurent dans la liste d'exclusion, afin qu'une rafale de requêtes de synchronisation n'entraîne pas leur bannissement.
-   **Limitation de débit** dans votre serveur web (nginx, Apache), répartiteur de charge ou plugin de sécurité : excluez les adresses IP et/ou le User-Agent de Fozzels.
-   **Plugins de sécurité** (par exemple Wordfence ou Sucuri pour WooCommerce) : ajoutez les adresses IP de Fozzels à la liste d'autorisation et ne bloquez pas l'accès à l'API REST.
-   **Blocage par pays ou géoblocage :** la plateforme Fozzels est hébergée en Allemagne. Si vous bloquez des pays, assurez-vous que les adresses IP de Fozzels sont exclues du blocage.
-   **Boutiques protégées par mot de passe ou de préproduction :** si votre boutique demande un mot de passe (authentification HTTP basique) avant l'API, excluez les adresses IP de Fozzels de cette protection.

## Checklist

- [ ] `49.13.117.118` (IPv4) est autorisée dans tous les pare-feu, WAF et plugins de sécurité
- [ ] `2a01:4f8:c17:bb1e::/64` (plage IPv6) est également autorisée
- [ ] `91.205.205.66` est autorisée, afin que notre équipe support puisse tester votre connexion
- [ ] Les requêtes dont le User-Agent contient `fozzels` ne sont ni bloquées ni soumises à une limitation de débit
- [ ] Cloudflare (le cas échéant) : IP Access Rule ou règle Skip ajoutée, aucun défi pour Fozzels, Bot Fight Mode vérifié
- [ ] Les chemins d'API de votre plateforme et les URL de vos images produit sont accessibles pour Fozzels
- [ ] Le pare-feu de l'hébergeur, ModSecurity, fail2ban et la limitation de débit comportent les exceptions pour Fozzels
- [ ] Le test de connexion dans Fozzels réussit

## Ça ne fonctionne toujours pas ?

Contactez-nous à l'adresse **[support@fozzels.com](mailto:support@fozzels.com)**. Merci d'indiquer l'URL de votre boutique, le message d'erreur exact affiché par Fozzels, l'heure à laquelle il s'est produit et, si vous utilisez Cloudflare, le Ray ID ou l'entrée correspondante de **Security → Events**.
