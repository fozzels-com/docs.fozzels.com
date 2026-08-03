---
id: '103000368948'
title: 3.1.1. Visão Geral do Catálogo e o Papel da Tabela de Transformação.
sidebar_position: 2
slug: >-
  /data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table
description: >-
  O Catálogo de Produtos é sua ferramenta principal para gerenciamento
  centralizado de dados de produtos e seleção pré-Fluxo. Contém todas as
  entidades de produtos e atributos sincronizados
---

O Catálogo de Produtos é sua ferramenta principal para gerenciamento centralizado de dados de produtos e seleção pré-Fluxo. Contém todas as entidades de produtos e atributos sincronizados da sua plataforma de e-commerce integrada (por exemplo, Magento, Shopify, NextChapter). O Catálogo permite que você filtre rapidamente e selecione subconjuntos específicos de produtos usando ferramentas de filtragem poderosas antes de criar um Fluxo de Conteúdo direcionado. Este processo simplifica a geração e controla os custos.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/kT0sbPzqu9U7CYKKbDsdr8HrH0S-eFUwSA.png)
Para acessar o **Catálogo**, selecione a aba Catálogo no cabeçalho da aplicação principal.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/vfW-3PdKzz5wVJFdE5npuD2aUHNwjtoC0w.png)
**1\. Configuração Inicial e Seleção de Loja**

1.1. Escolhendo a Fonte de Dados Ao abrir o Catálogo, o primeiro passo é selecionar sua fonte de dados usando o menu suspenso "**Choose integration /website / store**".
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qAi7dFDbCqw3Iuboi01Pe7HC4Rvwgs500g.png)

Seleção Padrão: Se sua conta tem apenas uma integração ativa e uma loja padrão, os produtos serão exibidos automaticamente. Caso contrário, você deve selecionar explicitamente uma loja.
Lista de Lojas: O dropdown lista todas as integrações ativas e arquivadas. As integrações arquivadas serão exibidas mas marcadas como inativas. Você pode selecionar qualquer website e loja vinculados.
Sincronização: Uma vez que uma loja é selecionada, a tabela de produtos é preenchida com todas as entidades disponíveis no admin dessa loja. Se os dados estiverem faltando, certifique-se de ter sincronizado os produtos da página de Integração.
Orientação: O caminho de navegação (breadcrumbs) se atualiza dinamicamente para confirmar o website e loja que você está visualizando no momento.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/yb51KJSKdpexrXDdEzKIgVfKAGu5kqGAFA.png)

1.2. Gerenciando a Visualização da Tabela

Limites de Exibição: Use o dropdown acima da tabela para definir o número de produtos exibidos por página. As opções incluem 5, 10, 25 (padrão), 50, 75 e 100 produtos. Use os controles de paginação na parte inferior para alternar entre páginas.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/XGBtpKC2r1WW-xy9ZtKVqCbXxHe38w94mw.png)
Ícone Maximizador: Clique no ícone maximizador no lado esquerdo da tabela para expandir a visualização, dedicando mais espaço de tela aos dados.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/R9a_-A3pooA7ZwgFA0hPy7oakeJnhnuIwQ.png)

**2\. Customizando a Visibilidade de Colunas**

O toggle **Column visibility** permite que você customize o layout da tabela mostrando ou ocultando colunas de atributos.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_4nR9136ceKTkO8gCJYcXkFfxsTxJnAjw.png)

Acessando Atributos: Clique no toggle Column visibility para abrir o menu suspenso, que lista todos os atributos ativos disponíveis em sua integração. Atributos inativos não estão listados aqui e não podem ser exibidos. Para visualizar produtos por um atributo inativo, você deve primeiro ativá-lo na **aba Attributes**.
Procurando Atributos: Use a entrada de pesquisa no topo do dropdown para encontrar rapidamente um atributo específico. Clique no ícone de cancelamento (cruz) que aparece ao digitar para redefinir a pesquisa.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/uUX_pmAolRpY9P3RoZlEapDjNX0y3kGVjA.png)
Adicionando uma Coluna: Simplesmente desmarque a marca de seleção para ocultar a coluna da tabela. Um ícone de marca de seleção confirma que a coluna está visível.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/OaI_JWUdBAPWTp5UyHcuLYT93tT1LUiQfQ.png)
Focando em uma Coluna: Clique no ícone "**Eye**" próximo a um nome de atributo. A tabela rolará automaticamente horizontalmente para trazer essa coluna para a visualização, e o cabeçalho da coluna será destacado.
Removendo uma Coluna: Simplesmente desmarque a marca de seleção para ocultar a coluna da tabela.
**_Use a barra lateral direita para gerenciar Colunas e criar um fluxo._**
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qgwc2opu9MjL3wW4nbOmiOD-rbCUX7IrOw.png)

**3\. Filtrando Produtos para Seleção**

O Catálogo oferece dois **modos poderosos** de filtrar seu conjunto de produtos antes de criar um Fluxo.

3.1. Filtragem Direta de Colunas Você pode filtrar produtos interagindo diretamente com os cabeçalhos de coluna na tabela:
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/c6Z48CIdVWFbxX7y-CDbDD0cWbSjXeQwXw.png)

- **Entradas de Texto**: Use a entrada de pesquisa no topo de qualquer coluna de atributo baseada em texto para filtrar produtos dinamicamente conforme digita.
- **Dropdowns e Seleções**: Para atributos com valores definidos (como 'Marca' ou 'Tamanho'), você pode digitar para pesquisar opções, ou selecionar e remover uma ou mais opções.

**Filtragem de Categorias:** Para o atributo "Categories" (se devidamente configurado com "_Category tree_" e "_Filterable_"), você pode expandir a estrutura de árvore e selecionar múltiplas categorias para estreitar a lista de produtos.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/2yny31P2rsrxdVzC07rzVaJr-RwO7xCA9w.png)

3.2. Configuração Avançada de Filtro
O toggle **Advanced filter** fornece uma interface de lógica condicional mais granular, idêntica ao filtragem usada no Flow Builder.

Ativando o Formulário: **Clique no toggle Advanced filter**. Esta ação oculta todas as entradas diretas de pesquisa de coluna e exibe o formulário UI para construir condições complexas.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_6dDdNeft6Ifj_CsyXM-FW_xbW1uZRAhjg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/gs9u3MDY8AQDvqHMTHpetQ4Jhh33DA7Cgg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/x58B9Ei1GLKAdaKuoKR-uF1m7F27cfxikA.png)

Transferindo Filtros: Todos os filtros previamente selecionados nas colunas da tabela são automaticamente transferidos para o formulário UI do Advanced Filter quando ativado, e vice-versa.

Construindo Condições: Use os botões na UI para adicionar condições individuais ou grupos de condições (por exemplo, Marca 'Apenas' AND Tamanho 'XS').

Pressione o botão "**Search**" para aplicar a lógica e atualizar a tabela de produtos.

Gerenciamento: Use o botão "**Delete**" para remover condições individuais, ou o botão "**Reset**" para limpar todas as condições e restaurar a lista completa de produtos.

**4\. Utilizando Colunas Especializadas**

Coluna de Miniatura: Produtos com imagens exibirão a primeira imagem aqui. Se as imagens estiverem faltando, verifique suas configurações de atributo "Product Absolute Image URL". Você pode filtrar o catálogo usando o dropdown da coluna para ver apenas produtos com "_Image missing_" ou "_Image exists_."
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/iIY14kkYS_2aVcuNVFZF5Z1TLKQ0cczmYQ.png)
**Passar o mouse** sobre uma imagem exibe a visualização completa da galeria. Clicar na imagem abre a **[Visualização Detalhada do Produto](/data-import-and-quality/detailed-product-view-reviewing-all-attributes-for-a-single-product/)**.
**Coluna de Conteúdos**: Esta coluna exibe a data de sincronização do último conteúdo gerado (não a data de geração). A data é um link; clicar nela abre a lista de conclusões para esse produto.

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/YRHITuApJ-8TocExnzRrdqDtJhfJGiHDCQ.png)

**5\. Criando um Fluxo a partir de Produtos Selecionados**

Uma vez que você tenha filtrado o Catálogo para o subconjunto desejado de produtos, você pode imediatamente iniciar um novo Fluxo.

Seleção: Os produtos são selecionados pelos filtros aplicados (Direto ou Avançado) ou selecionando manualmente linhas usando as caixas de seleção da tabela.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/geFwcUzWrcTuZWszx1O1aqL9-gIX9f2GUg.png)
Iniciação: Clique no botão "Create **"Create Flow On Selected Products"** button.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/slcUdb4L8stvkadQeWPNRZ22WZmZZ8aI3w.png)

Fluxo Pré-preenchido: Você será redirecionado para a página de criação do novo Fluxo. A loja selecionada no Catálogo será automaticamente escolhida, e os filtros que você aplicou no Catálogo serão automaticamente transferidos e configurados na etapa de seleção de produtos (Etapa 3) do novo Fluxo.
