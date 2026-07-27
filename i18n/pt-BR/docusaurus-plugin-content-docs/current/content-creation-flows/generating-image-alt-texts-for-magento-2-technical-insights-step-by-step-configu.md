---
id: '103000408207'
title: >-
  4.3.2.a Gerando Textos Alt de Imagem para Magento 2: Insights Técnicos e
  Configuração Passo a Passo
sidebar_position: 9
slug: >-
  /content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu
description: >-
  Como você já está familiarizado com os mecanismos fundamentais da configuração
  de Fluxos de Conteúdo de Produtos no Fozzels, este manual técnico se
  concentra exclusivamente em
---

Como você já está familiarizado com os mecanismos fundamentais da configuração de Fluxos de Conteúdo de Produtos no Fozzels, este manual técnico se concentra exclusivamente na arquitetura única do Magento 2: interagindo com o atributo `product_media_gallery` do sistema e otimizando consumo de token durante loops de processamento em massa de galeria de mídia.

## Etapa 1. Configurando Permissões de Escrita para Galeria de Mídia (Pré-requisito)

Diferentemente dos campos de texto padrão (por exemplo, descrições de produtos, nomes), textos Alt no Magento vivem dentro da infraestrutura de galeria de imagens e são escritos diretamente no atributo do sistema `product_media_gallery`. Por padrão, o Fozzels trata esse atributo como somente leitura, usando-o estritamente como um marcador para filtrar o catálogo de produtos por presença de imagem.

Para conceder ao sistema permissão para sobrescrever e injetar dados neste slot, você deve mudar seu status para **Mutável**:

1.  Navegue até o menu superior principal: **Integrações** → selecione sua instância **Magento 2** ativa.

2.  Abra **Aba 3: Atributos**.

3.  Na barra de pesquisa/filtro, digite `media`. Localize a linha com o código `product_media_gallery` (Galeria de Mídia) e clique no botão azul-turquesa **\[Editar atributo\]**.

4.  Dentro da sobreposição de configurações, procure sob a seção _Transformar Dados_, encontre a caixa de seleção **Mutável** e marque-a (**\[v\] Mutável**).

5.  Clique no botão azul **Salvar** no canto inferior direito.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/ryugiLjaej08TONBWZC6dvmgdeHvEKzJOA.png)
![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/vj3HVtE0gIyKK1lMzn0NeLCwxHle8IT1Cg.png)

##
Etapa 2. Inicialização de Fluxo e Mapeamento de Atributo

1.  Vá para a seção **Fluxos de Conteúdo** e clique no botão **Criar Fluxo** (ou selecione produtos alvo diretamente da sua visualização de catálogo e clique em **Ações → Criar Fluxo**).

2.  Dentro da **Aba 1: Novo Fluxo**, configure seus parâmetros de ambiente:

-   **Loja / Integração:** Selecione sua instância Magento específica, configuração de site e Visualização de Loja de Destino nos dropdowns.

-   **Nome:** Forneça um título técnico claro para seu fluxo.

-   **Tipo de Entidade:** Isso é definido automaticamente como `Produto`.

3.  **Atributo de Destino:** Clique no dropdown de seleção **Atributo\***, digite `media` e selecione o atributo do sistema **Galeria de Mídia**. Isso canaliza com segurança as strings geradas por IA para o próximo estágio diretamente no esquema de banco de dados de galeria de imagens em vez de blocos de descrição padrão.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/Btu-8xXR_jSHpiFqqxtTZJBUXcu0hyrmTQ.png)

## Etapa 3. Seleção do Modelo de Visão e Modo de Digitalização (Delta vs. Sobrescrita Completa)

Na **Aba 2: Configuração de IA**, selecione seu provedor e modelo subjacentes (por exemplo, tiers de GPT ou Gemini com recursos de Visão multi-modal para analisar ativos de imagem), então defina como o executor de execução deve interagir com seu banco de dados de loja Magento ao vivo:

-   **Modo Delta (Caixa de seleção "Forçar regeneração de textos ALT" está DESMARCADA):** O cenário padrão. O executor de fundo verifica seu catálogo Magento e solicita conclusões de IA **apenas para ativos de imagem onde o campo de texto Alt está atualmente vazio**. Isso preserva seu trabalho de SEO manual existente e economiza seus créditos de API.

-   **Modo de Sobrescrita Completa (Caixa de seleção "Forçar regeneração de textos ALT" está MARCADA):** O cenário de reescrita abrangente. O mecanismo ignora completamente os estados de metadados atuais na vitrine, limpando textos Alt antigos dentro do lote selecionado e substituindo-os todos por strings geradas por IA.

> ? **Recomendação Técnica:** Deixe a caixa de seleção **Habilitar Redimensionamento de Imagem** ativada. Se um arquivo de imagem no Magento for maior que 2MB ou exceder uma resolução de 2048px, o Fozzels o redimensionará automaticamente para restrições de entrada de modelo de visão padrão. Isso protege ativamente seu pipeline contra erros de carga (Gerações Falhadas) e otimiza créditos de token.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/cbKMN8kS6jIqV-wZJGv_TV9zC74UxTrCFg.png)

## Etapa 4. Engenharia de Prompt

Dentro da **Aba 3: Seleção de Fluxo e Prompt**, você cria as instruções explícitas para o modelo de IA. Como o pipeline opera em modo centrado em ativos (1 ativo de imagem = 1 conclusão de prompt), seu prompt deve instruir o modelo de visão a mesclar elementos visuais com o contexto textual do seu produto.

1.  No espaço de trabalho **Prompt**, digite suas regras técnicas fundamentais (por exemplo, restrições de caracteres—o padrão da indústria é menos de 125 caracteres para leitores de tela—e uma proibição de frases genéricas de introdução como _"imagem de"_).

2.  Use a barra lateral **Atributos** à direita para procurar e **arrastar e soltar** tokens dinâmicos do Magento diretamente no corpo do seu prompt (por exemplo, `{name}`, `{color}`, `{material}`, `{brand}`).

### **Modelos de Prompt:**

> **Opção 1: Padrão de Moda e Vestuário de E-commerce** `"Escreva um texto Alt de SEO conciso e natural para uma tag de acessibilidade de site de e-commerce. Descreva os detalhes visuais, estilo e corte do item mostrado na imagem. Integre esses atributos naturalmente se forem visíveis: {color} {name} da {brand}, feito de {material}. Mantenha a saída abaixo de 125 caracteres, evite rigorosamente recheio de palavras-chave e não comece com frases como 'foto de' ou 'imagem de'. Descreva apenas o que está realmente presente na foto."`

> **Opção 2: Focado em Minimalista e Detalhes do Produto** `"Gere uma tag Alt limpa e profissional para um leitor de tela. Concentre-se puramente no design, layout e recursos visuais distintos do produto. Use os metadados fornecidos para garantir precisão: {brand} {name} em {color}. Mantenha a descrição realista, factual e abaixo de 120 caracteres. Evite floreio de marketing e não use 'foto de' ou 'imagem de'. Apenas retorne a string de descrição."`

## Etapa 5. Limites de Volume de Processamento e Layout de Lista de Lotes

Na **Aba 4: Automação**, o campo de configuração **"Quantidade de produtos para criar conteúdo por dia"** calcula limites de processamento com base em entidades de Produtos pai, não arquivos de imagem individuais. Como o Fozzels avalia cada ativo de mídia individual dentro de uma galeria de produto, definir um limite para 10 produtos onde cada um contém 5 imagens resultará em 50 conclusões de visão de IA distintas e cobradas. No entanto, mesmo com essa estrutura de processamento, todos os resultados gerados permanecerão organizados de forma limpa em sua **Lista de Lotes**, agrupados visualmente por SKU de produto para que você possa facilmente revisar, editar ou aprovar em massa antes de enviar os metadados ao vivo.
