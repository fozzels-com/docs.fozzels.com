---
id: '103000406129'
title: >-
  4.1.2.b Por que o conteúdo gerado difere entre a Visualização e o resultado
  final?
sidebar_position: 4
slug: >-
  /content-creation-flows/why-does-the-generated-content-differ-between-the-preview-and-the-final-result
description: >-
  Pergunta Por que o conteúdo mostrado na Visualização difere do conteúdo que
  é sincronizado com o website? Resposta Este comportamento é esperado
---

## Pergunta

Por que o conteúdo mostrado na **Visualização** difere do conteúdo que é sincronizado com o website?

## Resposta

Este comportamento é esperado.

A **Visualização** (disponível após clicar em **Salvar e Visualizar**) **não** é o conteúdo final gerado. É uma geração de teste para um único produto que permite que você:

-   verifique se o prompt está configurado corretamente;
-   revise o tipo e a qualidade do conteúdo que o prompt produz;
-   faça ajustes antes de executar o fluxo completo.

Quando você inicia o fluxo real, Fozzels envia **novas requisições de IA** para cada produto.

Embora os dados de entrada (atributos do produto, prompt e configurações) permaneçam os mesmos, a IA gera uma nova resposta para cada requisição. Como o conteúdo gerado por IA é não-determinístico, a saída pode variar entre a Visualização e a geração final.

## Onde posso encontrar o conteúdo final gerado?

O conteúdo que foi realmente gerado e sincronizado com o seu website está disponível em:

-   **Lista de Lotes** – para a execução do fluxo específico.
-   **Lista de Lotes Totais Diários** – para todo o conteúdo gerado em todos os fluxos.

Esses relatórios contêm a saída final que foi enviada durante a execução do fluxo e devem ser usados para verificação em vez da Visualização.

## Resumo

-   **Visualização** = uma geração de teste para validação de prompt.
-   **Execução do fluxo** = uma nova geração de IA para cada produto.
-   Pequenas diferenças entre a Visualização e o conteúdo final sincronizado são esperadas.
-   Sempre compare o seu website com o conteúdo mostrado em **Lista de Lotes** ou **Lista de Lotes Totais Diários**, pois contêm os resultados realmente sincronizados.
