---
id: '103000395390'
title: '4.3.5 Quando Novos Produtos São Gerados: O Ciclo de Extração Explicado'
sidebar_position: 12
slug: /content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained
description: 'Novo produto ou marca: por que ainda não está visível e como acelerar as coisas Uma explicação de por que novos produtos não aparecem em Fozzels imediatamente e o'
---

**Novo produto ou marca: por que ainda não está visível e como acelerar as coisas**

Uma explicação de por que novos produtos não aparecem em Fozzels imediatamente e o que fazer se você não quer esperar até a próxima manhã.

**1\. Por que novos produtos não aparecem em Fozzels imediatamente**

Fozzels não recebe dados de sua loja em tempo real. Não há conexão persistente entre sua loja e Fozzels que transmita automaticamente cada mudança.

Em vez disso, Fozzels conecta-se regularmente à sua loja e baixa o estado atual do catálogo - este processo é chamado de Extração de Produto. Apenas após sua conclusão o sistema fica ciente de novos produtos, mudanças de atributo ou itens deletados.

> **ℹ** Se você adicionou um novo produto ou marca à sua loja hoje durante o dia, ele só aparecerá em Fozzels após a próxima extração. Até então, o sistema simplesmente não sabe que existe.

**2\. Quando a extração acontece**

A extração é executada automaticamente em um cronograma que você configura a si mesmo na aba Configuração ou Websites e Lojas. Por padrão, ela é executada à noite.

Após a extração ser concluída, o sistema automaticamente:

-   verifica quais produtos correspondem aos filtros dos fluxos ativos
-   atualiza valores de atributo para cada produto na fila
-   dispara geração de conteúdo

> **ℹ** Mudanças feitas em um fluxo (por exemplo, adicionar uma nova marca aos filtros) também têm efeito apenas após a próxima extração.

**3\. Como evitar esperar até de manhã: extração manual**

Se você precisa de novos produtos serem processados imediatamente - execute a extração manualmente. Uma extração manual funciona exatamente como a automática: ela atualiza completamente o catálogo e dispara a geração.

**Como executá-la:**

-   Vá para a seção de configurações de integração em Fozzels
-   Encontre sua loja e execute a extração manualmente
-   Aguarde sua conclusão - um status de sucesso na Lista de Estado confirma que tudo passou
-   Depois disso, o sistema sincronizará automaticamente os fluxos e iniciará a geração para os novos produtos

> **ℹ** Uma extração manual não cancela ou substitui a automática. A próxima extração programada ainda será executada em seu tempo habitual independentemente de você ter executado uma manual.

**4\. Se você já executou um fluxo manualmente durante o dia**

Às vezes, usuários testam fluxos ou geram conteúdo para produtos individuais manualmente - usando o botão Executar Agora. Esta é uma prática normal.

Importante saber: uma execução manual de fluxo não afeta o ciclo automático. No próximo dia, após a extração programada, o sistema ainda executará aquele fluxo automaticamente - independentemente de quaisquer ações manuais que você tenha tomado durante o dia.

_Tem uma pergunta? Contate o suporte Fozzels._
