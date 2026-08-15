---
id: '103000410112'
title: '4.3.2.b Gerando textos alternativos para imagens do NextChapter: nuances técnicas e configuração passo a passo'
sidebar_position: 10
slug: /content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s
description: Como você já conhece a mecânica básica da configuração de fluxos de conteúdo (Product Content Flows) no Fozzels, este guia foca…
---

Como você já conhece a mecânica básica da configuração de fluxos de conteúdo (Product Content Flows) no Fozzels, este guia foca exclusivamente nas particularidades da arquitetura do NextChapter: o trabalho com o atributo de sistema **product\_media\_gallery** e a otimização do custo em tokens durante o processamento em lote de galerias de mídia.

## Passo 1. Configurar permissões de escrita para a galeria de mídia (condição obrigatória)

Diferente dos campos de texto padrão (por exemplo, descrição ou nome do produto), os textos alternativos no NextChapter ficam dentro da galeria de imagens e são gravados diretamente no atributo `product_media_gallery`. Por padrão, o Fozzels trata esse atributo como somente leitura (Read-only) e o usa como marcador para filtrar produtos pela presença de fotos.
Para dar ao sistema permissão de gravar e atualizar dados nesse campo:

1.  No menu principal, vá em **Integrations** → selecione sua instância ativa do **NextChapter**.
2.  Abra a **aba 3: Attributes.**
3.  No campo de busca, digite `media`. Encontre a linha com o código `product_media_gallery` (Media Gallery) e clique no botão turquesa **\[Edit attribute\]**.
4.  Na janela modal, na seção Transform Data, localize a opção **Mutable** e marque a caixa (**\[v\] Mutable**).
5.  Clique no botão azul **Save** no canto inferior direito.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/DgdusqsKuR07n_6ZVkUycVCUVVRc9SLNEw.png)![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/F371_zOBWTktWVS7poYzGt-L5es5KLOkXw.png)

## Passo 2. Inicializar o fluxo e mapear o atributo

1.  Vá até a seção **Content Flows** e clique no botão **Create Flow** (ou selecione os produtos desejados direto no catálogo e clique em **Actions → Create Flow**).

2.  **Na aba 1: New Flow**, configure os parâmetros do ambiente:

    -   **Store / Integration:** Selecione na lista suspensa sua instância do NextChapter, as configurações do site e a Store View desejada.
    -   **Name:** Defina um nome técnico claro para o fluxo.
    -   **Entity Type:** O valor Product é definido automaticamente.
3.  **Target Attribute:** Clique no campo de seleção de atributo (`Attribute*`), digite `media` e selecione `Media Gallery`. Isso permite que o Fozzels transfira com segurança as strings geradas pela IA diretamente para o esquema de banco de dados da galeria do NextChapter.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/yEYZO7DIJN90tk-_rv6kZaE6AOCY_rSOWg.png)

## Passo 3. Escolher o modelo Vision e o modo de varredura (Delta x Full Overwrite)

Na **aba 2: AI Configuration**, selecione o provedor e o modelo (por exemplo, versões do GPT ou do Gemini com suporte a Vision para análise de imagens) e defina o modo de interação com a sua vitrine do NextChapter:

-   **Modo Delta (caixa "Force regenerate ALT texts" DESMARCADA):** Cenário padrão. O processo em segundo plano varre o catálogo do NextChapter e envia solicitações à IA apenas para as imagens cujo texto alternativo está vazio no momento. Assim, suas configurações manuais de SEO são preservadas e você economiza créditos de API.
-   **Modo Full Overwrite (caixa "Force regenerate ALT texts" MARCADA):** Cenário de reescrita completa. O motor ignora totalmente os metadados atuais da vitrine, limpa os textos alternativos antigos da amostra selecionada e os substitui por novas strings de IA.

> **Recomendação técnica:** Deixe a opção **Enable Image Resize** ligada. Se o arquivo de imagem no NextChapter passar de 2 MB ou de uma resolução de 2048 px, o Fozzels vai reduzi-lo automaticamente para os requisitos padrão dos modelos Vision. Isso protege seu fluxo de erros de geração (Failed generations) e reduz o consumo de tokens.

![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/MSso5mlNSv6s9RgpZywIS_fORd61TfNESw.png)

## Passo 4. Composição do prompt (Prompt Engineering)

**Na aba 3: Flow Selection & Prompt** são formadas as instruções para o modelo de IA. Como o processo funciona no modo de processamento por arquivo (1 imagem = 1 geração), seu prompt precisa combinar detalhes visuais com o contexto textual do produto.

1.  No campo **Prompt**, anote as regras técnicas básicas (por exemplo, um limite de tamanho — o padrão é até 125 caracteres para leitores de tela — e a proibição de frases introdutórias como "imagem...").
2.  Use o painel lateral **Attributes**, à direita, para arrastar tokens dinâmicos do NextChapter direto para o corpo do prompt (por exemplo, `{name}`, `{color}`, `{material}`, `{brand}`).

### Modelos de prompt:

#### **Opção 1:** Para e-commerce (roupas e calçados)

> "Escreva um texto alternativo de SEO conciso e natural para a tag de acessibilidade de uma loja online. Descreva os detalhes visuais, o estilo e o caimento do produto da foto. Integre naturalmente estes atributos, se estiverem visíveis: {color} {name} da {brand}, material: {material}. Tamanho do texto — até 125 caracteres. Evite excesso de palavras-chave e não comece com frases como 'foto...' ou 'imagem...'. Descreva apenas o que aparece de fato na imagem."

#### **Opção 2:** Minimalista (detalhamento do produto)

> "Gere uma tag alternativa limpa e profissional para um leitor de tela. Foque exclusivamente no design, na composição e nos detalhes visuais evidentes do produto. Use os metadados para garantir precisão: {brand} {name} na cor {color}. A descrição deve ser realista, factual e ter até 120 caracteres. Sem frases de marketing e sem 'foto...' ou 'imagem...'. Devolva apenas a string pronta."

## Passo 5. Limites de processamento e estrutura da lista de lotes (Batch List)

**Na aba 4: Automation**, o campo "**Amount of products to create content for per day**" calcula os limites de processamento com base nas entidades principais (Products), e não em arquivos de imagem individuais.
Como o Fozzels analisa cada item de mídia da galeria do produto: se você definir um limite de **10 produtos**, cada um com **5 imagens**, o sistema fará **50 gerações Vision pagas separadas.**
Todos os resultados gerados ficam agrupados de forma prática na **Batch List** por SKU do produto, permitindo revisar, editar ou aprovar em massa os novos textos alternativos antes de enviá-los para o site.
