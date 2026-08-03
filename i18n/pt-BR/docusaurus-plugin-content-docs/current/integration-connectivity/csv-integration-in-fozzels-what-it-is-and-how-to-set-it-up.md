---
id: '103000406293'
title: '2.9.1 - Integração CSV no Fozzels: O Que É e Como Configurar'
sidebar_position: 20
slug: /integration-connectivity/csv-integration-in-fozzels-what-it-is-and-how-to-set-it-up
description: O que é Integração CSV? A integração CSV permite conectar seu catálogo de produtos ao Fozzels usando um arquivo CSV padrão. Se sua plataforma não tiver uma
---

## O que é Integração CSV?

A integração CSV permite conectar seu catálogo de produtos ao Fozzels usando um arquivo CSV padrão. Se sua plataforma não tiver uma integração direta com Fozzels — sem problema: simplesmente exporte seus dados como CSV e carregue. O Fozzels lerá seus produtos e seus atributos, dando a você acesso a toda a gama de recursos da plataforma.

## Etapa 1 — Crie uma Nova Integração

No menu de navegação superior, clique em **Integrations**, depois clique no botão **\+ Create** no canto superior direito.

## Etapa 2 — Escolha o Tipo de Integração

Você verá uma lista de plataformas disponíveis: Akeneo, Shopify, Magento2, WooCommerce e outros. Para conectar via arquivo, selecione **Raw File**.

## Etapa 3 — Configure a Integração

Um formulário será aberto com três etapas: **Configuration → Websites & Stores → Attributes**.

### Campos Obrigatórios

Antes de carregar seu arquivo CSV, preencha os três campos obrigatórios:

-   **Name** — um nome para a integração (por exemplo, `My Product Catalog CSV`)
-   **URL** — um link para a fonte (se aplicável)
-   **SKU column** — o nome exato da coluna em seu arquivo que identifica exclusivamente cada produto (por exemplo, `sku`, `product_id`, `article`)

Depois clique em **Save**. Somente após salvar, a área de carregamento de CSV ficará ativa.

> ? **Por que é assim?** O sistema precisa saber o nome da coluna SKU antes de ler o arquivo — isso é necessário para o processamento correto dos dados. Salve suas configurações primeiro, depois carregue o arquivo.

### Opções de Formato

Parameter

Valor padrão

Descrição

Format

CSV

Formato do arquivo

Delimiter

Vírgula (,)

Separador de colunas

Enclosure character

`"`

Caractere de invólucro de valor

Encoding

UTF-8

Codificação do arquivo

First row is header

Yes

Se a primeira linha contém cabeçalhos de coluna

SKU column

—

Nome da coluna que identifica exclusivamente cada produto

### Programação de Pull Global

Isso define a hora para sincronização automática. O padrão é `03:30`. Se você precisar de uma programação diferente para uma loja específica, pode substituir nas configurações dessa Store.

> ? Para ativar a integração, ative o toggle **Active** no canto superior direito do formulário. Sem isso, nenhuma sincronização será executada.

## Etapa 4 — Carregue o Arquivo CSV

Após salvar, a área de carregamento fica ativa. Você pode carregar seu arquivo de duas formas:

-   **Drag & drop** — arraste seu CSV diretamente para a zona de carregamento
-   **Upload** — clique no botão **Upload** azul e selecione um arquivo do seu computador

Uma vez carregado, o nome e tamanho do arquivo aparecerão abaixo da zona de drag & drop — confirmando que o arquivo foi adicionado com sucesso.

> ? Ao ler o arquivo, o sistema usa as configurações de formato que você definiu anteriormente: delimitador, codificação e caractere de invólucro.

Após carregar o arquivo, clique em **Save** novamente — o sistema o moverá automaticamente para a guia **Websites & Stores**.

## Etapa 5 — Websites & Stores

Clique no botão **Pull Websites and Stores** — o sistema criará um registro para seu site virtual e loja. Esta é a abordagem padrão no Fozzels: mesmo ao trabalhar com carregamento de arquivo, a plataforma usa a estrutura universal website → store.

Assim que o registro aparecer na tabela, **ative o site e a loja** usando os toggles na coluna **Status**.

Quando ambos estão ativos, o botão **Pull products** fica disponível. Clique nele para começar a importar produtos do seu arquivo CSV para o catálogo Fozzels.

> ? A tabela também mostra o **Pull schedule** — a hora de sincronização que você definiu na Etapa 3. Você pode substituí-la por Store se necessário.

## Etapa 6 — Visualizando Produtos Importados

Assim que o pull for concluído (a barra de progresso alcança 100%), clique no ícone **View products** na coluna Ações para abrir o catálogo de produtos para esta integração.

### Como os dados são organizados:

-   Cada **linha** do CSV se torna um produto separado
-   Cada **coluna** do CSV se torna um atributo do produto

### Gerenciando Visibilidade de Coluna

Nem todos os atributos são exibidos por padrão. Para escolher quais colunas exibir, clique em **Column visibility** no canto superior direito da tabela e marque os atributos que você precisa.

### Filtrando Produtos

Duas opções de filtro estão disponíveis:

-   **Inline filters** — campos diretamente abaixo dos cabeçalhos das colunas para busca rápida
-   **Advanced filter** — lógica de condição flexível AND/OR para consultas complexas

### Ações em Massa

Assim que você tiver selecionado os produtos que precisa, o kit completo do Fozzels está disponível: agrupar produtos, criar conjuntos de produtos e lançar Content Flow, Image Flow ou Video Flow com base na sua seleção.

> ? Desta forma, seu arquivo CSV se torna uma fonte de dados totalmente funcional no Fozzels — com todas as ferramentas de conteúdo da plataforma à sua disposição.

## Etapa 7 — Preparando Atributos Antes de Criar um Flow

Antes de criar um Content Flow, certifique-se de que o atributo de destino esteja configurado corretamente. Vá para a guia **Attributes** de sua integração e clique no ícone de edição (lápis) próximo ao atributo que deseja usar:

-   **Mutable** — isso deve estar habilitado. Sem isso, o Fozzels não pode escrever conteúdo gerado neste campo, e o atributo não aparecerá no dropdown ao criar um Flow.
-   **Allow HTML** — ative isso se desejar gerar conteúdo com marcação HTML (por exemplo, descrições com tags `<p>`, `<ul>`, etc.).

> ? Saiba mais sobre atributos, Data Density e campos personalizados em nosso artigo: [Attribute Quality Analysis](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

## Etapa 8 — Criando um Content Flow

Para gerar conteúdo com base em seus produtos importados, você precisa criar um **Content Flow**. Existem duas maneiras de fazer isso:

**Opção 1 — via menu Content Flows:** Vá para **Content Flows** no menu superior e clique em **\+ Create**.

**Opção 2 — diretamente do catálogo:** Selecione os produtos que você precisa (ou todos eles) → abra o dropdown **Actions** → selecione **Create a new Content Flow**.

No formulário de criação, insira um **Name** e selecione o **Attribute** — a coluna para a qual o conteúdo será gerado.

O resto do processo é padrão e consiste em quatro etapas:

**Etapa 1 — New Flow:** nome e atributo de destino.

**Etapa 2 — AI Configuration:** escolha um provedor de IA (OpenAI, Google Gemini, etc.), modelo, estilo de texto e tom, e limite de tokens.

**Etapa 3 — Flow Selection & Prompt:** ative o flow, configure filtragem de produtos e escreva seu prompt. Use atributos com uma pontuação alta de Data Density para melhores resultados. Saiba mais em nosso artigo: [Prompt Creation & Filtering](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor).

**Etapa 4 — Automation:** defina o número de produtos por execução, configure a programação e inicie via **Run Now** ou **Plan & Close**.

> ? Se você é novo em Content Flows, recomendamos ler: [Flow Definition and Content Types](/content-creation-flows/flow-definition-and-content-types-text-image-video) e [Creating a New Content Flow](/content-creation-flows/creating-a-new-content-flow-and-initial-settings).

## Etapa 9 — Obtendo os Resultados

Diferentemente de outras integrações (Shopify, Magento, etc.), **o botão "Save & Sync" não funciona para CSV** — não há uma conexão ativa com uma loja para enviar dados de volta. Em vez disso, os resultados são baixados manualmente via exportação.

### Como Exportar Conteúdo Gerado

1.  Vá para a **Batch List** do seu flow
2.  Selecione os registros que você precisa via **Actions → Select All** (ou manualmente)
3.  No dropdown **Actions**, escolha **Export as CSV**
4.  Confirme no pop-up clicando em **Start Export**
5.  O sistema enfileirará o arquivo — você receberá uma notificação quando estiver pronto

### Onde Baixar o Arquivo

Vá para **Dashboard → Export / Generated Data**. Esta página mostra uma tabela de todos os arquivos gerados com status **Available**. Encontre seu arquivo e clique no botão **ZIP** para fazer download.

> ⚠️ **O arquivo só fica disponível por 24 horas** a partir do momento em que foi criado. Certifique-se de fazer download dele antes de expirar.

## Links Úteis

-   [Attribute Quality Analysis. Data Density. Custom Attributes](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes)
-   [Flow Definition and Content Types (Text, Image, Video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)
-   [Creating a New Content Flow and Initial Settings](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Prompt Creation & Filtering. Drag & Drop Prompt Editor](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)
