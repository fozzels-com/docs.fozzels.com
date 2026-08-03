---
id: '103000313152'
title: Aviso "Recursão detectada" ao criar um Fluxo
sidebar_position: 25
slug: /content-creation-flows/recursion-detected-warning-when-creating-a-flow
description: Quando você vê este aviso, significa que você está usando a variável para inserir conteúdo do mesmo atributo que você está usando o Fluxo para escrever. Para ex
keywords:
- instrução
- comando
---

Quando você vê este aviso, significa que você está usando a variável para inserir conteúdo do mesmo atributo que você está usando o Fluxo para escrever.

Por exemplo: você está criando um Fluxo para atualizar automaticamente o campo "Descrição" (atributo).

Na caixa onde você pode escrever o prompt, você usou aquela mesma tag "{Descrição}" como uma variável de entrada.

Isto pode estar OK, mas também pode causar um problema onde o conteúdo é sobrescrito todo dia, se você tiver a opção "Regenerar automaticamente quando o atributo do produto mudar" ativada.

Neste cenário, novo conteúdo será escrito no campo "Descrição" por Fozzels.

Mas, isso significa que este produto também está marcado como "modificado", então Fozzels tentará regenerar conteúdo para este produto no próximo dia -- e novamente e novamente.

Você pode considerar **desativar** a opção "Regenerar automaticamente quando o atributo do produto mudar", ou **remover** esse campo de entrada do seu prompt.
