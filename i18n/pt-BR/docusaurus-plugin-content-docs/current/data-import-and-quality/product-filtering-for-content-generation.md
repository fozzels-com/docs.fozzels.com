---
id: '103000369006'
title: 3.3. Filtragem de Produtos para Geração de Conteúdo
sidebar_position: 7
slug: /data-import-and-quality/product-filtering-for-content-generation
description: Este guia explica como usar efetivamente o mecanismo de filtragem no Fozzels para selecionar com precisão um subconjunto de produtos com base nos valores dos atributos, garantindo que a geração de conteúdo seja direcionada e eficiente.
---

Este guia explica como usar efetivamente o mecanismo de filtragem no Fozzels para selecionar com precisão um subconjunto de produtos com base nos valores dos atributos, garantindo que a geração de conteúdo seja direcionada e eficiente.

### 1\. Acessando as Opções de Filtragem

As opções de filtragem estão disponíveis em dois locais principais:

1.  **Criação de Fluxo de Conteúdo:** Para definir o lote específico de produtos que um fluxo processará, **edite** um fluxo existente (ou crie um novo) e **vá para** a aba **"Seleção de Fluxo e Prompt"**.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/M8M8DSbeTwyMCzVdPZg-AgTrZhknUKlMaA.png)

2.  **Catálogo de Produtos:**
    2.1 Habilite a opção **"Filtro avançado"**. Isso abre um painel onde você pode adicionar **"Adicionar condição"** e **"Adicionar grupo de condições"** para lógica complexa.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/PCVDp6xbmqaVBtncYNWlb_f76UC2MmUI-g.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/IOHTRc5oV_-sARYVDZ-D0orkvhDrAYcI8A.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/R1pQBNQNg8sWQ-DUNYyn1nSlXHg750rAUg.png)
        2.2 **Filtragem Inline:** Filtre produtos usando campos de entrada ou listas suspensas localizadas diretamente nos cabeçalhos das colunas da tabela de produtos (disponível para atributos com a opção **Filtrável** habilitada).
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/AgXgNaluOPoF0zxvvmWoytasp0fhtnppLg.png)

3.  _**Importante:** No Catálogo, você pode combinar filtros inline aplicando condições a várias colunas simultaneamente (por exemplo, filtrando por **SKU** **E** por **Marca**)._

### 2\. Filtragem por Condições de Valor

Este tipo de filtragem se aplica a atributos de texto, numéricos e seleção múltipla.

1.  **Igual:** O valor do atributo deve corresponder exatamente ao valor inserido. _Exemplo: Mostrar apenas produtos em que_ `Cor` _é igual a_ `Azul`.

2.  **Não igual:** Mostrar todos os produtos exceto aqueles que correspondem exatamente ao valor inserido. _Exemplo: Mostrar todos os produtos em que_ `Material` _não é_ `Algodão`.

3.  **Está vazio:** Mostrar apenas produtos em que o atributo selecionado não tem valor (está em branco). _Exemplo: Encontrar produtos com_ `Descrição Curta` _vazia_.

4.  **Não está vazio:** Mostrar apenas produtos em que o atributo selecionado contém um valor preenchido. _Exemplo: Encontrar produtos que têm o nome do_ `Fabricante` _preenchido_.

5.  **Contém:** O valor do atributo deve conter o fragmento de texto ou número inserido. _Exemplo: Encontrar todos os produtos em que_ `Nome` _contém a palavra_ `Verão`.

6.  **Não contém:** O valor do atributo não deve conter o fragmento de texto inserido. _Exemplo: Excluir produtos cuja_ `SKU` _não contém_ `DESCONTO`.

7.  **Em / Não em:** O valor do atributo deve corresponder a um dos vários valores inseridos (separados por vírgulas) ou não deve corresponder a nenhum deles. _Exemplo (Em): Mostrar produtos em que_ `Tamanho` _é_ `P, M, G`.

8.  **Começa com / Termina com:** Encontre produtos pelos caracteres iniciais ou finais do valor. _Exemplo: Encontrar produtos cuja_ `SKU` _começa com_ `P_`.

9.  **É nulo / Não é nulo:** Condições técnicas para lidar corretamente com valores vazios ou não vazios no nível do sistema.

### 3\. Filtragem por Condições de Data

Este tipo se aplica a atributos com formato de data, permitindo que você filtre com base na cronologia (por exemplo, `created_at`, `updated_at`).

1.  **Está vazio / Não está vazio:** Mostra registros em que o campo de data está ausente ou preenchido. _Exemplo: Encontrar todos os produtos sem uma_ `data de atualização`.

2.  **Igual:** Mostra registros em que o valor corresponde exatamente à data inserida. _Exemplo: Encontrar todos os produtos criados em_ `2024-01-01`.

3.  **Menor:** Mostra registros em que o valor da data é cronologicamente anterior à data inserida. _Exemplo: Encontrar todos os produtos atualizados antes de_ `mês passado`.

4.  **Maior:** Mostra registros em que o valor da data é cronologicamente posterior à data inserida. _Exemplo: Encontrar todos os produtos novos atualizados após_ `ontem`.

5.  **Menor ou igual / Maior ou igual:** Inclui a data inserida no conjunto de resultados. _Exemplo: Encontrar todos os produtos atualizados em ou após_ `01-01-2024`.

### 4\. Filtragem por Imagens de Produtos

Este tipo especial de filtragem está disponível no **Catálogo** através do filtro inline na coluna **Miniatura**. É criticamente importante para iniciativas de geração de conteúdo que usam modelos multimodais.

1.  **Imagem Existe:** Mostrar apenas produtos que têm uma imagem anexada.

2.  **Imagem Ausente:** Mostrar apenas produtos para os quais uma imagem está ausente.

![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/8QgVAeRUMysJuzJ8692EqmUBXsfxeJ-Leg.png)

### 5\. Agrupamento de Condições (Lógica Avançada)

Você pode construir lotes de produtos altamente específicos usando várias condições e grupos.

1.  **Adicionando Múltiplas Condições:** Para filtrar por vários atributos (por exemplo, `Cor = Azul` **E** `Tamanho = M`), simplesmente **clique em "Adicionar condição"** várias vezes.

2.  **Grupo de Condições:** Clicando em **"Adicionar grupo de condições"**, você pode combinar condições usando lógica complexa (por exemplo, (`Categoria = Camisas` **E** `Preço > 50`) **OU** (`Categoria = Jaquetas`)).
