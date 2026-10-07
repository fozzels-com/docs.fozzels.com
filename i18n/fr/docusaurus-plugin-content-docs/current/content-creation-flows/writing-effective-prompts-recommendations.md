---
id: '103000368009'
title: "4.3.3. Rédiger des prompts efficaces (recommandations)"
sidebar_position: 11
slug: /content-creation-flows/writing-effective-prompts-recommendations
description: >-
  Ce guide propose des conseils pratiques et des bonnes pratiques pour
  structurer et rédiger des prompts dynamiques de haute qualité, qui produisent
  un contenu personnalisé,
  professionnel,
---

Ce guide propose des conseils pratiques et des bonnes pratiques pour structurer et rédiger des **prompts dynamiques de haute qualité** qui produisent un contenu personnalisé, professionnel et unique, au-delà de la simple insertion d'attributs.

### **Bonnes pratiques pour des prompts de qualité**

Suivez ces six recommandations essentielles pour maximiser l'efficacité et la clarté de vos prompts :

1\. Créez une structure claire.
**Utilisez** des paragraphes courts, avec une seule instruction ou ligne de données chacun, afin que le prompt soit facile à lire et à maintenir. Le prompt lui-même ne comporte aucune mise en forme : pour obtenir des titres, des listes ou du HTML dans le texte *généré*, demandez-les avec des mots, par exemple _Commence par un titre `<h2>` qui nomme le produit, puis énumère trois avantages clés sous forme de `<ul>`._ Toute balise HTML que le résultat doit contenir doit être autorisée dans [Trusted HTML Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation).
2\. Vérifiez toujours la disponibilité des données.
**Évitez** d'insérer directement des attributs si vous ne pouvez pas garantir que la valeur est présente pour tous les produits. Si la valeur d'un attribut est manquante, elle laissera un espace vide dans le texte généré final.
**Placez** l'attribut et le texte qui l'entoure dans un **if block** (logique conditionnelle).
_Exemple : une condition sur **Material** contenant la ligne_ Material: **Material** _(le texte "Material:" n'apparaît que si le produit a une matière)._
3\. Assurez la fermeture des balises.
**Vérifiez** que toutes les balises HTML par paires demandées par votre prompt sont correctement fermées (par exemple, `<strong>` est fermée par `</strong>`). Des balises mal fermées peuvent provoquer des erreurs de mise en forme dans le résultat final.

4\. Évitez les répétitions.
**N'insérez pas** plusieurs fois la même valeur d'attribut dans différents blocs. Cela surcharge le texte et peut amener l'IA à générer un contenu répétitif et peu naturel.

5\. Écrivez « humainement » (ton et engagement).
**Imaginez** que vous êtes un rédacteur qui s'adresse au client. Ajoutez des détails vivants, de l'emphase et adressez-vous directement à l'utilisateur pour que le texte paraisse naturel et persuasif.
_Exemple : une condition sur **Brand** contenant la ligne_ Reliability from brand **Brand** — a great choice for your comfort.
6\. Vérifiez le résultat.
Cliquez sur **Save & Preview** pour voir exactement comment votre prompt fonctionne sur de vrais produits avec leurs attributs disponibles. Cette étape est essentielle pour détecter les erreurs de logique, de syntaxe ou de ton avant de lancer un grand batch.
