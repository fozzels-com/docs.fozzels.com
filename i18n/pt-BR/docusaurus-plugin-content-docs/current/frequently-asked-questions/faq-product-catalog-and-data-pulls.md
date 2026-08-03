---
title: 'FAQ: Catálogo de Produtos e Puxadas de Dados'
sidebar_position: 8
unlisted: true
slug: /frequently-asked-questions/faq-product-catalog-and-data-pulls
description: Como o pull de catálogo noturno funciona, por que produtos novos ou ausentes não aparecem, diferenças de variante e categoria, filtragem de atributo customizado e cronogramas de pull customizados.
---

## O catálogo de produtos é atualizado em um cronograma noturno. Como funciona?

O catálogo atualiza automaticamente toda noite às 01:30. Após o pull, todos os flows são atualizados com os dados mais recentes. Novos produtos correspondendo aos filtros de flow são automaticamente adicionados.

## Novos produtos adicionados ao meu webshop não aparecem em Fozzels.

Os produtos aparecem após o próximo pull de catálogo agendado (noturno às 01:30). Para vê-los imediatamente, acione um pull manual de produtos.

## Fozzels mostra menos produtos que o esperado — algumas combinações de cor estão ausentes.

Fozzels filtra produtos baseado em condições específicas e agrupa ao nível de product-color, excluindo variantes de tamanho. Compare suas condições de filtro com seu banco de dados para encontrar discrepâncias.

## Não consigo encontrar uma categoria de produto específica em Fozzels.

A árvore de categorias em Fozzels pode diferir de sua loja. Use filtros para buscar. Se ainda não conseguir encontrá-la, entre em contato com o suporte com um screenshot do seu admin.

## Produtos estão ausentes do meu flow por causa de um atributo de estoque vazio.

Verifique as condições de filtro do flow. Se uma condição de estoque (por exemplo, "Voorraad IS NOT NULL") exclui produtos com valores de estoque vazios, ou preencha os dados ou remova a condição.

## Um pull manual de dados não está atualizando atributos.

Após um pull, Fozzels precisa de tempo de processamento — dados não são instantâneos. Se atributos permanecerem inalterados, entre em contato com o suporte.

## Quando devo acionar manualmente um pull de produto?

Após mudanças grandes de catálogo, novos conjuntos de produtos, adições ou remoções grandes ou mudanças de feed/integração.

## Como filtro produtos por atributos customizados (por exemplo, "Webshop Article = Yes")?

Atributos de filtragem customizada devem estar presentes no feed de dados. Uma vez que estão em Fozzels, use-os como condições de filtro de flow. Se um atributo não aparecer, entre em contato com o suporte.

## Um produto foi removido do catálogo devido à configuração de variante.

Fozzels filtra baseado em configurações de variante e variantes desabilitadas podem excluir produtos. Entre em contato com o suporte para revisar a configuração.

## Posso definir um cronograma de pull de produto customizado (não apenas noturno)?

Sim. Desde o release 5.14 você pode definir uma hora customizada para pulls de produto em nível de integração e loja.
