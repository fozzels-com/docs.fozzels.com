---
id: '103000313152'
title: "Avertissement « Recursion detected » lors de la création d'un Flow"
sidebar_position: 26
slug: /content-creation-flows/recursion-detected-warning-when-creating-a-flow
description: >-
  Lorsque vous voyez cet avertissement, cela signifie que vous utilisez la
  variable pour injecter le contenu du même attribut que celui dans lequel le
  Flow écrit. Par e
---

Lorsque vous voyez cet avertissement, cela signifie que vous utilisez la variable pour injecter le contenu du même attribut que celui dans lequel le Flow écrit.

Par exemple : vous créez un Flow pour mettre à jour automatiquement le champ (attribut) « Description ».

Dans la zone où vous rédigez le prompt, vous avez utilisé cette même balise « {Description} » comme variable d'entrée.

Cela peut convenir, mais cela peut aussi entraîner un problème : le contenu est écrasé chaque jour si l'option « Automatically regenerate when product attribute changed » est activée.

Dans ce scénario, Fozzels écrit un nouveau contenu dans le champ « Description ».

Mais le produit est alors également marqué comme « modifié » : Fozzels tentera donc de régénérer du contenu pour ce produit le lendemain, puis encore et encore.

Vous pouvez envisager de **désactiver** l'option « Automatically regenerate when product attribute changed », ou de **retirer** ce champ d'entrée de votre prompt.
