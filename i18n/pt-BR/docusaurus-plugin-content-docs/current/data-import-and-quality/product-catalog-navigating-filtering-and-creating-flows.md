---
title: Catalog — Navegando, Filtrando e Criando Flows
sidebar_position: 9
slug: /data-import-and-quality/product-catalog-navigating-filtering-and-creating-flows
description: O Catalog mostra todos os produtos obtidos da sua loja conectada. Aprenda como navegar, filtrar produtos com o construtor de consultas de condições e criar um Content Flow direcionado a partir de uma seleção.
keywords:
- fluxo
- de
- conteúdo
- geração
- instrução
- comando
- extração
---

O Catalog mostra todos os produtos obtidos da sua loja conectada. É sua visualização central de dados de produtos dentro do Fozzels.

Acesse [Catalog](https://app.fozzels.com/catalog)

---

## Navegando no Catalog

### Seletor de loja

No topo da página, selecione produtos de qual loja visualizar. Cada loja é mostrada com seu nome de integração, website e local.

### Lista de produtos

Os produtos são mostrados em uma tabela paginada (25 por página por padrão). Você pode:

- **Classificar** por qualquer coluna visível
- **Alternar visibilidade de colunas** — mostrar/ocultar colunas de atributos
- **Modo tela cheia** — expandir a tabela para preencher a tela
- **Passar o mouse em uma linha de produto** — visualizar imagens de produtos sem abrir o produto

### Detalhes do produto

Clique em qualquer produto para abrir sua página de detalhes com:

- Galeria de imagens completa (imagem principal + miniaturas)
- Todos os valores de atributo para esse produto nesta loja
- Links diretos de volta para a integração e website

---

## Filtrando produtos

Use o **Condition Query Builder** para filtrar produtos por valores de atributo.

- Construa condições com lógica AND/OR
- Filtre por qualquer atributo que tenha a flag **Filterable** habilitada em Integration → Attributes
- Exemplos:
  - "description is empty"
  - "category equals Electronics AND price is greater than 100"
  - "sku contains ABC"

Clique em **Search** para aplicar o filtro. A contagem de produtos no cabeçalho atualiza para mostrar quantos produtos correspondem.

Clique em **Reset** para limpar o filtro e mostrar todos os produtos.

> Se um atributo não aparecer no construtor de filtros — vá para Integration → Attributes e habilite a flag **Filterable** para esse atributo.

---

## Criando um Flow a partir do Catalog

O Catalog é a maneira mais rápida de criar um Content Flow direcionado:

1. Construa um filtro para encontrar os produtos que deseja processar (por exemplo, "description is empty")
2. Selecione os produtos correspondentes (caixa de seleção em cada linha, ou selecione todos nas páginas)
3. Clique em **"Create Flow on Selected Products"** — isto abre o assistente de criação de Flow pré-preenchido com sua seleção como condição
4. Conclua a configuração do Flow (modelo de IA, prompt, atributo de destino)

Isto é ideal quando você quer processar um subconjunto específico de produtos em vez de construir condições manualmente no assistente de Flow.

---

## Problemas comuns

**Nenhum produto visível**

- A integração ainda não foi obtida — vá para sua [Integration](https://app.fozzels.com/integrations/definitions) e dispare um Product Pull
- Certifique-se de que a loja está ativa

**Atributos de filtro faltando no construtor de condições**

- O atributo precisa da flag **Filterable** — vá para Integration → Attributes e a habilite

**Imagens de produtos não aparecem**

- As imagens são obtidas da sua loja — se as imagens estiverem faltando no Fozzels, verifique se a integração está funcionando corretamente e se a URL de mídia base está configurada (Magento)

**Produtos estão desatualizados**

- Dispare um pull manual da sua página de Integration, ou aguarde o próximo pull agendado
