---
id: '103000408983'
title: 4.1.2.a Como Configurar Fluxos de Conteúdo de IA Automatizados
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Os Fluxos de Conteúdo Automatizados no Fozzels permitem que você gere e
  sincronize o conteúdo do produto automaticamente em segundo plano - sem
  exigir que você dispare
---

Os Fluxos de Conteúdo Automatizados no Fozzels permitem que você gere e sincronize o conteúdo do produto automaticamente em segundo plano - sem exigir que você dispare tarefas manualmente todos os dias.

Este guia cobre tudo o que você precisa saber para configurar, testar e executar fluxos automatizados com segurança e eficiência.

## Etapa 1: Lista de Verificação Pré-Inicialização

Antes de ativar a automação, recomendamos fortemente completar esses três testes para evitar erros:

1.  **Verifique Seleção de Produtos:** Verifique novamente seus filtros na configuração do fluxo para garantir que o fluxo direcione o conjunto exato de produtos que você deseja processar.

2.  **Teste Seu Prompt:** Execute uma geração de teste usando **Salvar & Visualizar** para confirmar que a saída atende aos seus padrões de qualidade.

3.  **Evite Recursão de Prompt:** Garanta que seu prompt não referencie o atributo exato que você está escrevendo (por exemplo, usar `product_description` como entrada para gerar um novo `product_description`). Isso evita loops de geração recursiva.

## Etapa 2: Configure as Configurações de Automação

Navegue até a aba **Automação** nas configurações do seu Fluxo e configure os seguintes parâmetros:

-   **Limite de Processamento Diário:** Defina quantos produtos devem ser processados cada dia (até **500 produtos por fluxo ativo por dia**). Este limite garante execução consistente e confiável dentro de cada ciclo de 24 horas.

-   **Modo Totalmente Automático (Opcional):**

-   **Ativado:** O conteúdo gerado é aprovado automaticamente e sincronizado com sua loja online (exceto itens sinalizados por palavras suspeitas ou verificações de validação).

-   **Desativado:** O conteúdo é gerado automaticamente, mas permanece em status pendente para revisão e aprovação manual antes de sincronizar.

-   **Criar Novo Conteúdo Quando Valores de Atributo Mudarem (Opcional):** Quando ativado, o Fozzels regenera automaticamente o conteúdo sempre que um atributo usado no seu prompt é atualizado em sua loja. Isso mantém seu conteúdo fresco com zero trabalho manual.

## Etapa 3: Iniciando Seu Fluxo

Uma vez que suas configurações estão configuradas, ative o fluxo e escolha uma das duas opções de inicialização:

### Opção A: Planejar & Fechar (Recomendado para Lotes em Segundo Plano)

Clique em **Planejar & Fechar**. O fluxo entrará em status planejado e começará automaticamente a processar após a próxima atualização de catálogo noturna agendada, continuando diariamente até que todos os produtos correspondentes sejam processados.

### Opção B: Executar Agora (Inicialização Imediata)

Clique em **Executar Agora**. O Fozzels processará imediatamente os primeiros **10 produtos** para uma visualização instantânea. Após este lote inicial, o fluxo continua em seu caminho automatizado programado diário de acordo com seu limite diário configurado.

## Regras Principais & Melhores Práticas

-   **Status Ativo Obrigatório:** Para um fluxo planejado ser executado diariamente, deve permanecer **Ativo**. Desativar o fluxo pausa todas as execuções agendadas até ser re-ativado.

-   **Editando Fluxos Ativos:** Você pode editar regras de prompt ou configurações em um fluxo planejado a qualquer momento. As atualizações se aplicarão a todas as gerações futuras, enquanto o conteúdo gerado anteriormente permanece inalterado a menos que seja regenerado manualmente.

-   **Seleção Dinâmica de Produtos:** Fluxos planejados ativos avaliam automaticamente seu catálogo de loja após cada sincronização noturna. Se novos produtos corresponderem aos seus filtros de fluxo (por exemplo, 20 novos itens adicionados a uma categoria), eles são automaticamente inscritos no fluxo para processamento.

## Artigos de Ajuda Relacionados

-   **Palavras Suspeitas & Controle de Qualidade:** _[4.7.4 Palavras e Frases Suspeitas: Controle Avançado de Qualidade de Conteúdo](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)_

-   **Evitando Avisos de Recursão:** _[3.5 Aviso "Recursão detectada" ao criar um Fluxo](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)_

-   **Prevenindo Fluxos Sobrepostos:** _[4.4.1 Função Evitar Geração de Conteúdo Sobreposto](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)_

-   **Regras de Formatação HTML:** _[4.7.3 Tags HTML Permitidas para Geração de Texto de IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)_
