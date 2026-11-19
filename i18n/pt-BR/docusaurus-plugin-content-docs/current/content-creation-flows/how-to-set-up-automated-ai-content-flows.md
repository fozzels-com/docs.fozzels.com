---
id: '103000408983'
title: 4.1.2.a Como configurar Content Flows de IA automáticos
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Como deixar um Content Flow gerar e sincronizar conteúdo de produtos
  automaticamente: verifique o Flow antes de lançar, defina o limite diário, a
  aprovação e as atualizações na etapa Launch e inicie o Flow.
---

Um Content Flow automático gera conteúdo de produtos em segundo plano todos os dias e envia esse conteúdo para a sua loja. Você não precisa iniciar as tarefas sozinho.

Você configura a automação na etapa 6 de um Content Flow, **Launch**. Para uma descrição das seis etapas, veja [4.1.2. Criando um Content Flow: o passo a passo em seis etapas](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

## Etapa 1: Verifique o Flow antes de lançar

Faça estas três verificações antes de lançar o Flow. Elas evitam erros.

1. **Verifique a seleção de produtos.** Na etapa 2, **What and with what?**, confira se a seleção tem apenas os produtos que você quer processar.
2. **Teste o prompt.** Na etapa 5, **Test**, gere textos para alguns produtos reais. Confira se os textos e as notas estão corretos.
3. **Evite recursão.** Não use como fonte no prompt o campo em que o Flow escreve. Por exemplo, não use `product_description` como entrada para gerar um novo `product_description`. Senão, o Fozzels pode gerar o texto de novo sem parar.

## Etapa 2: Configure a automação na etapa Launch

Na etapa 6, **Launch**, responda a três perguntas:

1. **How many products per day?** Escolha 10, 25, 50 ou 100, ou digite o seu próprio número. O limite mantém baixos os custos e o trabalho de revisão. Quando o Fozzels conclui a seleção atual, o Flow pega automaticamente os produtos novos que se encaixam nela.
2. **What happens with a new text?**
    - **I approve every text first** (recomendado): os textos novos vão para a sua lista de revisão. O Fozzels não envia nada para a sua loja antes da sua aprovação.
    - **Straight to my shop**: o Fozzels publica os textos automaticamente. Você ainda pode editar os textos ou voltar para a versão anterior. Textos que o Fozzels marca como suspeitos sempre esperam a sua revisão.
3. **If a product changes later?** Ative o botão para o Fozzels escrever um texto novo automaticamente quando um atributo usado no prompt muda na sua loja, por exemplo a cor ou o material. Com o botão desativado, o Fozzels escreve o texto de um produto só uma vez.

Em **Advanced settings**, você também pode:

- definir o cooldown que impede outros Flows de gerar o mesmo conteúdo de novo: **Use default**, **Override** ou **Turn off**. Para mais informações, veja [4.4.1 Prevenir a geração de conteúdo sobreposta](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).
- clicar em **Connect workflow** para adicionar uma ação que roda depois de cada texto, por exemplo uma tradução.

## Etapa 3: Lance o Flow

1. Clique em **Launch flow**.

    O Fozzels mostra a mensagem "Your flow is running". O Flow processa produtos todos os dias, até o limite diário, até concluir todos os produtos da seleção.

2. Para iniciar a geração na hora, abra a página do Flow, clique no menu **…** e clique em **Run Now**. O Fozzels começa na hora, mesmo quando o Flow já atingiu o limite diário de hoje.

Para continuar a configuração depois, clique em **Save as draft** em vez de **Launch flow**.

## Regras e recomendações

- **O Flow precisa estar ativo.** O Fozzels roda apenas Flows ativos. Quando você para um Flow, o Fozzels para todas as execuções agendadas até você iniciar o Flow de novo.
- **Você pode alterar um Flow ativo.** As suas alterações valem para todos os textos novos. O Fozzels não altera os textos que já gerou, a menos que você gere esses textos de novo.
- **Produtos novos entram automaticamente.** Depois de cada atualização do catálogo, o Fozzels compara os produtos da sua loja com a seleção do Flow. Os produtos novos que se encaixam na seleção, por exemplo 20 produtos novos em uma categoria, entram no Flow automaticamente.

## Artigos relacionados

- [4.1.2. Criando um Content Flow: o passo a passo em seis etapas](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.7.4 Palavras e frases suspeitas: controle avançado da qualidade do conteúdo](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)
- [3.5 Aviso "Recursion detected" ao criar um Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)
- [4.4.1 Função para prevenir a geração de conteúdo sobreposta](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)
- [4.7.3 Tags HTML permitidas na geração de texto com IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
