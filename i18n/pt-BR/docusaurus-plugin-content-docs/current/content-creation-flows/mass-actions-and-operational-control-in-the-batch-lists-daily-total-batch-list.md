---
id: '103000376412'
title: >-
  4.7.2 Ações em Massa e Controle Operacional nas Listas de Lotes / Lista de
  Lotes Total Diária
sidebar_position: 18
slug: >-
  /content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list
description: >-
  Gerenciando Conteúdo com Ações em Massa Os Painéis (ou Lista de Lotes) é sua
  ferramenta principal para gerenciar rapidamente o conteúdo. Esta funcionalidade
  de Ações em Massa está disponível em ambas as visualizações
---

Gerenciando Conteúdo com Ações em Massa Os Painéis (ou Lista de Lotes) é sua ferramenta principal para gerenciar rapidamente o conteúdo. **Esta funcionalidade de Ações em Massa está disponível tanto na visão geral da Lista de Lotes Total Diária quanto na visualização detalhada da Lista de Lotes.** Usando a função **Ações em Massa**, você pode aplicar simultaneamente operações críticas, como Confirmação, Regeneração e Sincronização, para um grande número de produtos. Isto economiza significativamente o tempo, eliminando a necessidade de processar cada item individualmente.

## Executando Ações em Massa

1\. Mecanismo de Seleção Para iniciar uma ação em massa, você deve primeiro selecionar os itens. Use a caixa de seleção principal para abrir as opções do menu suspenso:

-   Seleção Individual: Use a caixa de seleção na extremidade esquerda de cada linha para selecionar itens específicos.

-   Selecionar Tudo: Seleciona **todos** os itens que correspondem aos filtros atuais, independentemente da página.

-   Desselecionar Tudo: Limpa a seleção em toda a lista.

-   Selecionar Tudo Nesta Página: Seleciona todos os itens exibidos na tabela.

-   Desselecionar Tudo Nesta Página: Limpa a seleção apenas na página atual.

![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/TAT_uWcG5-SzeI8SRjjmN51nhZWuNPhNqw.png)
2\. Ações Disponíveis Após selecionar itens, o **menu Ações** fica ativo, oferecendo as seguintes funções para processamento em lote:

-   **Mostrar Selecionados**: Esta ação filtra a grade de produtos para exibir apenas os itens que você selecionou no momento, permitindo uma revisão focada antes de executar ações em massa.

-   **Sincronizar Conteúdo Gerado**: Isto inicia a transferência automática de todo o conteúdo finalizado dos produtos selecionados para sua plataforma de comércio eletrônico conectada sem disparar um novo ciclo de geração.

-   **Confirmar tudo, Salvar e Sincronizar**: Esta ação confirma simultaneamente a qualidade do conteúdo selecionado e inicia sua sincronização imediata para a loja de comércio eletrônico integrada.

-   **Regenerar, Salvar e Sincronizar**: Isto inicia uma nova solicitação de geração de conteúdo para os produtos selecionados e agenda automaticamente sua sincronização subsequente após a conclusão bem-sucedida.

## ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/6chuzawhzMkzp4kjQAs-Xh2lfJQ8D0uTnw.png)
Gerenciando o Espaço de Trabalho Focado ("Mostrar Selecionados")

A função **"Mostrar Selecionados"** é uma ferramenta essencial para revisar e preparar subconjuntos específicos de dados.

-   Espaço de Trabalho Direcionado: Ativar **"Mostrar Selecionados"** isola os itens selecionados no momento em uma visualização de tabela separada, criando efetivamente um espaço de trabalho focado.

-   Retenção de Funcionalidade Completa: Mesmo neste modo isolado, você retém todas as funções da tabela padrão, incluindo filtragem adicional, visualização de detalhes e execução de Ações em Massa no subconjunto menor e específico de dados. Isto permite seleção e processamento em múltiplos estágios.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/83gkMs5df4-VpiuZavFc2jvbQWWHXo5BwQ.png)

## Recomendações: Otimizando o Tratamento de Erros e Avisos

Recomendamos usar a função Ações em Massa não apenas para aprovação padrão de conteúdo, mas também para corrigir rapidamente erros.

-   Utilizando Filtros: Você pode usar o filtro **"Exibir apenas com erros"** ou filtrar os **resultados do conteúdo** que receberam avisos ou erros (verificando as métricas "Contagem de Avisos" e "Contagem de Falhas" na visão geral diária).
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/Q-x6xQXNSMvvctnZfgceHCf1568U90a42A.png)

-   Regeneração Rápida: Após aplicar o filtro e selecionar os itens problemáticos, use a ação **"Regenerar, Salvar e Sincronizar"** para re-executar eficientemente o processo de geração para todos os elementos com falha simultaneamente.

## Salvaguardas Operacionais e Controle da Lógica do Fluxo

Um sistema de controle em múltiplos estágios é implementado antes de executar ações em massa que consomem muitos recursos para garantir a precisão e evitar despesas não intencionais:

-   Pop-up de Confirmação Obrigatória: Antes de executar ações como "Resincronizar Conteúdo Gerado", "Confirmar e Sincronizar" ou "Regenerar e Sincronizar," uma pop-up de aviso aparece, exigindo sua confirmação explícita.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/XdxTZ96w4KYIJMlmO4Q1e0OGo9Lp4moHMA.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/QtxE2PertdWwBPbWXypF36AadNNOWCYfQ.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/WJXrUQG2D70RbZ2Zt2nXR284tuODnhGu_w.png)

-   Nota de Lógica do Fluxo: Essas pop-ups incluem uma nota crucial sobre o comportamento de sincronização esperado com base no tipo de Fluxo:

    -   Conteúdo de Fluxos Totalmente Automatizados será aprovado automaticamente após a geração.
        ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/K8O5z-M1sAS6I6awArA51TqfE2SC1Yfbtw.png)

    -   Conteúdo de Fluxos Padrão será apenas regenerado, exigindo aprovação manual subsequente antes que a sincronização seja permitida.

-   Verificação de Recursos: O sistema verifica o status operacional do Fluxo e da Integração antes de iniciar qualquer Ação em Massa: a geração não iniciará se o Fluxo de origem estiver inativo, e a sincronização não será executada se a integração de destino estiver inativa.
