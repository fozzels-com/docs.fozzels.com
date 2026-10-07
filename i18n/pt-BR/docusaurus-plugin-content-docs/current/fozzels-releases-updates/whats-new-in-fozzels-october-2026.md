---
title: "Novidades do Fozzels: outubro de 2026"
sidebar_position: 18
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026
description: >-
  Preencha até 13 atributos em um único Flow, crie regras automáticas de
  qualidade com Workflows, monte prompts em um novo editor com pré-visualização
  ao vivo e mantenha os erros da IA longe da sua loja com novas proteções.
---

Esta atualização é toda sobre economizar seu tempo e dar mais controle sobre o conteúdo gerado por IA. Agora você pode preencher até 13 atributos em um único Flow, criar regras automáticas de qualidade com Workflows e montar prompts em um novo editor com pré-visualização ao vivo.

Também adicionamos um conjunto completo de proteções que mantêm os erros da IA longe da sua loja. Veja tudo o que há de novo e como começar a usar.

## Destaques

### Preencha até 13 atributos em um único Flow

Você não precisa mais de um Flow separado para cada atributo. Agora, um Flow pode preencher um atributo principal e até 12 adicionais, por exemplo uma descrição, uma descrição curta, um meta título e uma meta descrição. Todos os atributos são gerados juntos, em uma única solicitação de IA por produto. Assim, os dados e as imagens do produto são enviados apenas uma vez, e os textos combinam entre si de forma natural.

![Additional attributes to fill: adicione até 12 atributos, cada um com sua própria instrução](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/01-additional-attributes.png)

Na Batch List, cada atributo tem sua própria coluna, então você revisa todos os resultados de um produto em uma única linha.

![Batch List com uma coluna para cada atributo gerado](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/02-batch-list-columns.png)

**Como usar:** abra um Flow, vá até Flow Selection & Prompt e, em Additional attributes to fill, adicione os atributos de que você precisa, com uma instrução para cada um. [Leia o guia](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)

### Workflows: regras automáticas de qualidade

Os Workflows verificam e editam cada resultado gerado antes que ele chegue à sua loja. Você define regras simples de "IF / THEN" uma vez, e o Fozzels as aplica a todo novo resultado:

- **Replace text:** troque ou remova palavras e frases, por exemplo para manter os termos da sua marca consistentes.
- **Truncate:** corte um texto até um tamanho máximo, mantendo as palavras inteiras.
- **Mark suspicious:** retenha um resultado para revisão manual, com um motivo que sua equipe pode ver.

![Escolhendo uma ação para um block de workflow: Truncate, Mark suspicious ou Replace text](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/03-workflow-actions.png)

Você pode encadear vários Workflows em um Flow, e um resultado sinalizado nunca é sincronizado até que alguém o verifique.

![Editor de workflow com blocks IF / THEN encadeados](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/04-workflow-editor.png)

**Como usar:** vá até Home → Workflows, crie um workflow e depois atribua-o a um Flow na etapa Automation. [Leia o guia](/content-creation-flows/workflows-lesson-1-getting-started/)

### Um novo editor de prompts com pré-visualização ao vivo

Montar um prompt ficou muito mais fácil. Atributos e condições aparecem como blocks claros, e a pré-visualização ao vivo mostra o prompt exato para um produto real enquanto você digita. Você não precisa mais salvar e abrir uma pré-visualização para conferir. Digite / ou arraste um atributo do painel para adicionar dados do produto.

Precisa de ajuda? Pergunte à Jane, nossa assistente de IA: ela pode escrever e ajustar prompts para você direto no editor. [Leia o guia](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)

![O novo editor de prompts com pré-visualização ao vivo, snippets e a Jane inserindo um prompt pronto](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/05-prompt-editor.png)

### Snippets de prompt reutilizáveis

Salve as partes dos seus prompts que você usa em muitos Flows, como o tom de voz da sua marca ou uma lista de atributos agrupados por tema. Adicione um snippet a qualquer prompt com um clique. Quando você atualiza um snippet, todos os Flows que o usam também são atualizados, então você nunca precisa editar os Flows um por um.

### Textos de categoria que conhecem seus produtos

Os Flows de categoria agora podem incluir no prompt os produtos da categoria, com nomes, links, slugs e outros atributos. As descrições das suas categorias podem mencionar produtos reais e incluir links funcionais para as páginas de produto, o que é ótimo para SEO e ajuda os clientes a encontrar o que procuram.

### Novos modelos de IA: GPT-6 Astra e Claude Opus 5.5

Os modelos mais recentes e mais capazes já estão disponíveis nos seus Flows. O GPT-6 Astra também oferece suporte à pesquisa na web, inclusive no Sandbox, e pode adicionar informações úteis que não estão no seu catálogo. Os modelos premium custam mais por geração; você vê o preço em cada card de modelo na etapa AI Configuration.

![Claude Opus 5.5](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/06-claude-opus-5-5.png)

## Conteúdo de IA mais seguro

Os modelos de IA às vezes inventam fatos, adivinham a aparência de um produto ou deixam anotações no texto. Adicionamos proteções em cada etapa, para que apenas conteúdo confiável chegue à sua loja.

- **Confidence threshold.** Defina-o por Flow na etapa Automation, de 0.1 a 1.0. A IA informa o quanto está segura de cada valor, e tudo o que ficar abaixo do seu limite aguarda sua revisão em vez de ser enviado automaticamente. Deixe vazio para desativar.

    ![Confidence threshold na etapa Automation](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/07-confidence-threshold.png)

- **Detecção mais inteligente de conteúdo suspeito.** A lista padrão de palavras e frases suspeitas ficou mais longa, e novos padrões integrados reconhecem o formato típico de um comentário de IA, como "Here is the…" ou "Final check", mesmo em formulações que o modelo nunca usou antes. Você pode ativar ou desativar padrões e adicionar suas próprias palavras nas configurações da integração.

    ![Palavras suspeitas e padrões integrados nas configurações da integração](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/08-suspicious-patterns.png)

- **Uma verificação de recursos desativados.** Ao salvar um Flow, o Fozzels verifica se o seu prompt precisa de um recurso que está desativado, por exemplo pesquisa na web ou imagens de produto. Um aviso informa o que está faltando, com um botão para abrir AI Configuration ou perguntar à Jane.

    ![Aviso quando o seu prompt precisa de pesquisa na web ou de imagens de produto que estão desativadas](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/09-disabled-features-warning.png)

- **Sem adivinhação quando não há imagens.** Se o seu Flow usa imagens de produto, mas um produto não tem nenhuma ou elas não podem ser lidas, esse produto é ignorado em vez de a IA adivinhar.
- **Apenas modelos confiáveis.** Removemos modelos desatualizados e modelos que podiam deixar o raciocínio deles nos seus textos.
- **Instruções integradas mais rigorosas.** Todo Flow agora inclui instruções gerais mais rígidas, que mantêm a IA nos fatos e no formato que você pediu.
- **Todo Flow precisa de um modelo de IA.** Um Flow sem modelo não pode mais ser salvo nem iniciado, então nada falha em silêncio.
- **Mensagens de erro claras.** Se uma geração falhar, agora você vê o motivo real em vez de "Unknown error occurred", e sabe o que corrigir.

## Flows de imagem

- **Duplique um Flow de imagem.** Copie um Flow de imagem existente com todos os presets, cenas, logotipo e prompt, e altere apenas o que for diferente.
- **Uma imagem extra de produto para o Flow inteiro.** Em Additional product image for the whole flow, escolha uma posição de imagem, por exemplo a 2ª imagem. O Fozzels a adiciona a todos os produtos, além da imagem principal, para que a IA veja mais ângulos e reproduza com mais precisão o corte, a estampa e a textura. Os produtos com menos imagens usam apenas a imagem principal.

    ![Additional product image for the whole flow: escolha a posição da imagem](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/10-additional-product-image.png)

- **Run Now respeita o seu limite diário.** As execuções manuais agora contam para a quantidade de produtos por dia do Flow. Se o limite já tiver sido atingido, você verá um aviso com o que fazer: aumentar a quantidade na etapa Automation ou executar o Flow mais tarde. As gerações de teste gratuitas na pré-visualização não contam.

## Catálogo e Batch List

- **Atualize produtos selecionados.** Alterou alguns produtos na sua loja? Faça o repull apenas desses produtos em vez de todo o catálogo e gere conteúdo novo na hora.

    ![Actions → Repull Selected Products em Manage Products](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/11-repull-selected-products.png)

- **Conjuntos de filtros salvos.** Salve uma combinação de filtros uma única vez, por exemplo "Women - empty descriptions", em Filter set → Save as new. Aplique-a com um clique nas integrações, no catálogo e nos Flows, e adicione condições extras quando precisar.

    ![Salve uma combinação de filtros em Filter set → Save as new](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/12-filter-set-save.png)

    ![Um conjunto de filtros salvo, pronto para ser aplicado com um clique](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/13-filter-set-saved.png)

- **Escolha as colunas da Batch List.** Vocês pediram, nós criamos. Defina qualquer atributo para aparecer sempre na Batch List com uma caixa de seleção nas configurações dele, e escolha quais atributos do prompt mostrar por Flow em Column visibility.

    ![Column visibility na Batch List](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/14-column-visibility.png)

- **Relatórios mais completos.** Adicione colunas extras com atributos gerados aos seus relatórios exportados, prontos para compartilhar com a sua equipe.
- **Revisão mais fluida.** O popup de revisão agora rola automaticamente.
- **Ativação de Flow mais clara.** Ao ativar um Flow, o Fozzels mostra exatamente o que será ativado e quais outros Flows serão retomados.

## Jane e sua conta

- **A Jane conhece o novo editor.** Nossa assistente de IA agora trabalha com o novo editor de prompts e com Flows de vários atributos. Peça a ela para ler, escrever ou atualizar seus prompts.
- **E-mail financeiro separado.** Envie faturas e notificações de saldo para o endereço do seu financeiro ou da contabilidade, em vez do e-mail de login.
- **Fuso horário por país.** As novas contas recebem automaticamente o fuso horário do país, para que as importações sejam executadas no horário local correto.
- **Ajuda para conexão.** Se uma integração não conseguir se conectar, por exemplo por causa de um firewall, o Fozzels leva você a uma página da Central de Ajuda que explica o que permitir.

## Atualizações de integrações

**Magento 2**

- **Conteúdo de blog e CMS (primeira etapa).** O Fozzels agora importa o conteúdo do seu blog e do CMS com seus atributos e o mostra em um catálogo e em uma página de marca separados. A geração de conteúdo por IA para blogs e páginas de CMS chega em uma próxima atualização.

    ![Manage Blog: páginas de CMS do Magento 2 importadas](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/15-manage-blog.png)

- **Filtro por status e quantidade de estoque**, para você se concentrar nos produtos em estoque, por exemplo apenas produtos com mais de 10 itens disponíveis. Ative Pull stock status e Pull stock quantity nas configurações da sua integração.

    ![Pull stock status e stock quantity nas configurações da integração do Magento 2](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/16-stock-settings.png)

- **Sincronize imagens para All Store Views.** Os resultados de Flows de imagem agora podem ser sincronizados com o escopo All Store Views, então uma única sincronização atualiza todas as store views.

**WooCommerce**

- **Textos alternativos para imagens de produto**, para melhor SEO e acessibilidade.

**Salesforce**

- **Filtro de estoque e condições de pull** no nível da integração, para você importar apenas os produtos de que precisa.

**CSV / Raw File**

- **Arquivos maiores** agora são aceitos graças à paginação.

**BizzLayer**

- **Produtos removidos do seu feed** não são mais usados na geração de conteúdo.

## Correções

- Caracteres especiais como & em nomes de produtos agora aparecem corretamente na sua loja.
- A contagem de produtos nos Flows agora corresponde à sua seleção real.
- O progresso de sincronização do Flow não conta mais produtos excluídos.

    ![Progresso do Flow mostrando separadamente os produtos removidos do catálogo](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/17-flow-progress.png)

- Os filtros em Flows mais antigos agora passam os produtos corretamente para a Batch List.
- A pré-visualização do prompt e do produto é atualizada automaticamente quando você altera os filtros do Flow.
- Flows de imagem ativos não aparecem mais como inativos.
- A geração de imagens não para mais com imagens grandes ou indisponíveis.

Dúvidas sobre alguma dessas atualizações? Pergunte à Jane no app.
