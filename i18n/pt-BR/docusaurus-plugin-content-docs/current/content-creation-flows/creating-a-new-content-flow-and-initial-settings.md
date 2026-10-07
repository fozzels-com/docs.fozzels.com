---
id: '103000367976'
title: 4.1.2. Criando um Novo Fluxo de Conteúdo e Configurações Iniciais.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  O Fluxo de Conteúdo é o núcleo da automação dentro do Fozzels. Ele diz ao
  Fozzels em quais produtos trabalhar, quais atributos preencher, qual modelo de
  IA usar e quais instruções dar a ele.
---

O Fluxo de Conteúdo é o núcleo da automação dentro do Fozzels. Ele diz ao Fozzels em quais produtos trabalhar, quais atributos preencher, qual modelo de IA usar e quais instruções dar a ele. Depois, o Fozzels gera, atualiza e sincroniza o conteúdo dos seus produtos.

Um Flow pode preencher vários atributos ao mesmo tempo. Você escolhe um **atributo principal** ao criar o Flow e pode adicionar até 12 outros depois. Todos são gerados juntos, em uma única solicitação de IA por produto.

Este guia mostra as quatro etapas de um Flow, usando um exemplo: um Flow que escreve uma **Description**, uma **Short Description** e uma **Meta Description** para produtos femininos que têm fotos, mas ainda não têm descrição.

## 1\. Crie um novo Flow

1.  No menu lateral, em **AI Flows**, clique em **Content Flows**. A lista de Flows é aberta.

2.  No topo, confira a integração, o site e a loja. Se você tiver mais de uma, escolha a que precisa na lista suspensa. Se tiver apenas uma, ela já está selecionada.

3.  Clique em **New Product Flow** no canto superior direito.
    ![Lista de Flows com o botão New Product Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-01-new-product-flow-button.png)

4.  Digite um **Name** para o Flow, por exemplo _Meu primeiro fluxo de conteúdo_.

5.  Em **Entity Type**, escolha **Product**. Para gerar conteúdo para categorias, veja [4.9.1 Como Criar um Fluxo de Conteúdo para Categorias](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels/).
    ![Create New Product Flow: escolhendo o tipo de entidade](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-02-entity-type.png)

6.  Em **Attribute**, escolha o **atributo principal** que o Flow vai preencher. Você pode digitar para pesquisar, por exemplo _description_.
    ![Pesquisando o atributo principal](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-03-main-attribute-search.png)

7.  Clique em **Save**.
    ![Formulário do novo Flow pronto para salvar](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-04-new-flow-save.png)

:::tip
**Escolha o maior atributo como principal**, por exemplo a descrição completa. Nos resultados, o atributo principal recebe o editor completo com pré-visualização, enquanto os atributos adicionais aparecem abaixo dele.
:::

:::note
**Vai gerar textos alternativos de imagens?** Escolha **Media Gallery** como atributo. Veja [4.3.2.a Textos Alternativos para Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/) e [4.3.2.b Textos Alternativos para NextChapter](/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/).
:::

## 2\. AI Configuration

Depois de salvar, o Fozzels abre a etapa **AI Configuration**. A partir de agora, o topo da página mostra o botão **Active flow** e o nome do Flow. Clique no lápis ao lado do nome para renomear o Flow.

1.  Em **AI Provider Selection**, escolha o provedor: OpenAI | ChatGPT, Anthropic, xAI ou Google | Gemini.
    ![Escolhendo o provedor de IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-05-ai-provider.png)

2.  Em **Model**, clique em um bloco de modelo. Cada bloco mostra o preço por 1K de tokens de entrada e de saída, o preço de uma pesquisa na web, se o modelo consegue ler imagens de produtos e se ele oferece suporte à pesquisa na web. Veja [4.2.1 Configuração de IA](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features/).

3.  Opcional: marque **Enable Web Search** se o seu prompt pede que a IA busque informações online, por exemplo na página do seu produto.

4.  Opcional: em **Image Usage**, defina o **Image count** (até 5). A IA então analisa essa quantidade de imagens do produto, na ordem em que vêm da sua integração. Mais imagens usam mais tokens. Deixe vazio para usar apenas o texto do prompt.

5.  Mantenha **Enable Image Resize** ativado. Assim, o Fozzels reduz imagens maiores que 2 MB que não sejam JPEG ou que tenham largura ou altura acima de 2048 pixels. Veja [4.2.2 Otimização de Imagens](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/).
    ![Blocos de modelo, pesquisa na web, uso de imagens e redimensionamento de imagens](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-06-model-and-image-settings.png)

6.  Opcional: escolha um ou mais **Text styles** (por exemplo _Criativo_, _Informativo_) e **Text tones** (por exemplo _Inspirador_).
    ![Estilos e tons de texto](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-07-text-styles-tones.png)

7.  Clique em **Save** e depois em **Next step**.

:::note
**O Image Resize cobra uma pequena taxa por imagem, mas desativá-lo nem sempre evita o redimensionamento.** Imagens muito grandes continuam sendo redimensionadas e cobradas automaticamente, para todos os provedores de IA. Sem isso, a geração falharia com um erro, ou a IA escreveria algo como "não consigo ver a imagem" no seu conteúdo.
:::

Você pode voltar a essas configurações a qualquer momento, mesmo depois de o Flow já ter começado a gerar.

## 3\. Flow Selection & Prompt

### 3.1 Confira o atributo principal e seu formato

No topo, você vê o atributo principal que escolheu na etapa 1.

Decida se o resultado deve conter HTML. Clique no botão com o olho ao lado do atributo. Na janela **Edit attribute**, desmarque **Allow HTML** se precisar de texto simples, sem marcação, e depois clique em **Save**. Veja [4.7.3 Tags HTML Permitidas](/content-creation-flows/allowed-html-tags-for-ai-text-generation/).

![Janela Edit attribute com Allow HTML](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-08-edit-attribute-allow-html.png)

:::warning
Os outros campos desta janela são configurações técnicas da sua integração. Não os altere, a menos que saiba o que fazem. Se precisar de ajuda, entre em contato com o suporte.
:::

### 3.2 Selecione os produtos

Use **Filter & Select Products** para escolher em quais produtos o Flow vai trabalhar. O número de produtos selecionados aparece no título do bloco e na aba da etapa 3.

![Etapa Flow Selection & Prompt: atributo principal e filtros](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-09-filter-select-products.png)

- Clique em **Add condition** para adicionar um filtro: escolha um atributo, um operador e um valor.
- Escolha **All conditions** (todas as condições devem ser atendidas) ou **Any condition** (basta uma).
- Clique em **Add condition group** para combinar condições de formas mais complexas.

**Exemplo.** Para escrever descrições para produtos femininos que têm fotos e ainda não têm descrição:

| Atributo | Operador | Valor |
| --- | --- | --- |
| Categories | is one of | Women |
| Media Gallery | has an image | Yes |
| Description | is empty | |

![Exemplo de filtro: produtos femininos com imagens e sem descrição](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-10-filter-example.png)

:::warning
Se você não definir nenhuma condição, o Flow usa **todos** os produtos da loja.
:::

:::tip
Para evitar sobrescrever conteúdo que você já tem, adicione um filtro como **Description is empty** para o atributo que você gera.
:::

Para ver todas as opções de filtro, consulte [Filtragem de Produtos para Geração de Conteúdo](/data-import-and-quality/product-filtering-for-content-generation/).

#### Salve seus filtros para reutilizar

Se você planeja mais Flows para os mesmos produtos, por exemplo descrições, meta tags e textos alternativos, salve os filtros uma única vez:

1.  Clique em **Filter set → Save as new**.
    ![Menu Filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-11-filter-set-menu.png)

2.  Digite um nome, por exemplo _Mulheres - descrições vazias_, e clique em **Save**.
    ![Salvando um conjunto de filtros](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-12-filter-set-save.png)

3.  O conjunto agora aparece no menu **Filter set**. Clique nele para aplicá-lo ou clique na lixeira para excluí-lo.
    ![Conjunto de filtros salvo no menu](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-13-filter-set-saved.png)

Os conjuntos de filtros salvos ficam disponíveis em todos os lugares onde você filtra produtos: nas integrações, no catálogo e nos Flows. Você também pode combinar um conjunto salvo com condições extras.

### 3.3 Escreva o prompt

Na seção **Prompt**, escreva as instruções para a IA e adicione dados do produto a elas:

- Digite `/` no editor, ou clique em um atributo do painel **Attributes** ou arraste-o. Cada atributo é adicionado como uma linha de condição, então ele é ignorado nos produtos em que está vazio.
- Use **Snippets**, como **Attribute list**, para adicionar um bloco pronto de dados do produto com um clique.
- Confira o **Preview** à direita. Ele é atualizado enquanto você digita e mostra o prompt final para um produto real. Use **&lt; &gt;** para conferir alguns produtos.
- Para reutilizar um prompt em outros Flows, use **Save as template** e **Load**.

![Editor de prompt com o Preview ao vivo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-14-prompt-editor-preview.png)

Para o guia completo, veja [4.3.2 Configuração e Uso de Prompts](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

:::warning
Não use no prompt, como dados de entrada, os atributos que você está gerando. Por exemplo, se o Flow escreve a Description, não insira o atributo Description no prompt. Em um Flow com vários atributos, isso vale para cada um deles. Veja [Detecção de Recursão](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation/).
:::

#### Verifique recursos desativados

Ao salvar, o Fozzels verifica se o seu prompt precisa de um recurso que está desativado neste Flow. Por exemplo:

- o prompt pede que a IA analise as imagens do produto, mas nenhum **Image count** foi definido;
- o prompt pede que a IA leia a página do seu produto, mas **Enable Web Search** está desativado.

Um aviso aparece então acima das etapas. Clique em **Open AI Configuration** para ativar o recurso, ou em **Ask Jane** para receber ajuda do assistente de IA.

![Aviso sobre recursos desativados neste Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-15-disabled-features-warning.png)

### 3.4 Preencha mais atributos no mesmo Flow

Abaixo do prompt, em **Additional attributes to fill**, você pode adicionar até 12 atributos. Todos os atributos do Flow são gerados juntos, em uma única solicitação de IA por produto, então os dados e as imagens do produto são enviados só uma vez.

1.  Escolha um atributo na lista suspensa e clique em **Add attribute**.
    ![Adicionando um atributo adicional](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-16-additional-attribute-add.png)

2.  Em **Instruction for this attribute**, escreva o que a IA deve produzir. O campo funciona como o editor do prompt principal, com o Preview, o painel Attributes e os Snippets. Quando a instrução está preenchida, a linha mostra **Prompt set**.
    ![Instrução para Short Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-17-instruction-short-description.png)

3.  Clique no olho na linha para abrir as configurações do atributo. Para meta títulos e meta descrições, desmarque **Allow HTML**, porque eles devem ser texto simples.
    ![Instrução para Meta Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-18-instruction-meta-description.png)

4.  Repita para cada atributo e depois salve.

:::tip
Dê a cada atributo um limite de tamanho claro, por exemplo _2 a 3 frases, 35 a 60 palavras_ para uma descrição curta ou _120 a 160 caracteres, nunca mais que 160_ para uma meta descrição.
:::

### 3.5 Teste o prompt

Antes de executar o Flow, teste o que a IA gera em alguns produtos.

1.  No fim da etapa, clique em **Save and Preview**.
    ![Botão Save and Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-19-save-and-preview.png)

2.  Uma tabela com os produtos selecionados é aberta. Clique em uma célula da coluna **Prompt** para ver o prompt completo que a IA vai receber. Em um Flow com vários atributos, cada atributo aparece sob o próprio título, com a própria instrução. Clique em **Copy to Clipboard** para copiá-lo.
    ![Tabela de geração de teste](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-20-test-generation-table.png)
    ![Prompt completo enviado à IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-21-test-generation-prompt.png)

3.  Clique em **Generate Now** na linha de um produto. O resultado é aberto em uma janela, com cada atributo sob o próprio título. Clique em **Show HTML** para ver a marcação.
    ![Resultado da geração de teste](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-22-test-generation-result.png)

:::info
Uma geração de teste é **gratuita** e **não** inicia o Flow. O resultado não é salvo, então, se quiser guardá-lo, clique em **Copy to Clipboard** antes de fechar a janela.
:::

Ajuste o prompt e teste de novo até ficar satisfeito com o resultado. Depois, clique em **Next step**.

## 4\. Automation

![Configurações de automação](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-23-automation-settings.png)

| Configuração | O que faz |
| --- | --- |
| **Amount of products to create content for per day** | Quantos produtos o Flow processa por dia, até 500 |
| **Fully automatic** | O conteúdo gerado é confirmado e enviado à sua loja na hora, sem revisão manual. Conteúdo sinalizado como suspeito continua retido para revisão. Funciona somente quando o Flow está ativo |
| **Confidence threshold** | Opcional, de 0,1 a 1,0. A IA informa o quanto tem certeza de cada valor. Valores abaixo do limite ficam retidos para revisão em vez de serem enviados automaticamente. Quanto maior o limite, mais conteúdo você revisa. Deixe vazio para desativar. Útil junto com **Fully automatic** |
| **Automatically create a new text when an attribute of a product changes in your store** | Gera o conteúdo de novo quando um atributo usado no prompt muda na sua loja |
| **Prevent double content generation with other Flows** | Impede que um produto receba novo conteúdo se outro Flow já o gerou. Escolha **Inherit** (usa suas configurações globais), **Override** (define um período só para este Flow) ou **Turn Off**. Veja [4.4.1 Evitar Geração de Conteúdo Sobreposta](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/) |
| **Workflows** | Ações extras opcionais para este Flow. Os Workflows são executados de cima para baixo; arraste-os ou use as setas para mudar a ordem. Veja [4.11.1 Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) |

:::tip
A maioria dos usuários começa com **Fully automatic** desativado e revisa os primeiros resultados manualmente.
:::

### Inicie o Flow

1.  Ative **Active flow** no topo da página. Os botões de início ficam disponíveis apenas para um Flow ativo.

2.  Escolha como iniciar:

| Opção | O que acontece |
| --- | --- |
| **Plan & Close** | O Flow começa no dia seguinte, após a atualização noturna do catálogo. Depois, ele processa a **Amount of products per day** todos os dias, até que todos os produtos selecionados estejam concluídos |
| **Run Now** (seta ao lado de **Plan & Close**) | O Flow processa os primeiros **10 produtos** imediatamente. Depois disso, continua no cronograma diário |

![Prevenção de duplicidade, workflows e botões de início](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-24-launch-buttons.png)

Um Flow ativo também captura novos produtos que correspondem aos seus filtros após cada atualização noturna. Para uma lista de verificação completa antes do início, veja [4.1.2.a Como Configurar Fluxos de Conteúdo de IA Automatizados](/content-creation-flows/how-to-set-up-automated-ai-content-flows/).

## 5\. Revise os resultados na Batch List

1.  Clique em **Batch List** na parte inferior de qualquer etapa do Flow. Em um Flow com vários atributos, cada atributo tem sua própria coluna, então você vê todos os resultados de um produto em uma única linha.
    ![Batch List com uma coluna por atributo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-25-batch-list.png)

2.  Clique em qualquer valor gerado para abrir a janela **Edit completion result**:
    - O atributo principal fica no topo, com **Enable Editor**, **Show HTML** e uma pré-visualização.
    - Os outros atributos são listados abaixo, em **Other attributes filled by this Flow**. Expanda cada um para ler e editar. Atributos de seleção e de seleção múltipla são editados com uma lista suspensa.

    ![Janela Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-26-edit-completion-result.png)

3.  Edite o texto, se necessário, e clique em **Save**.

4.  Ative **Batch Confirmed** e depois clique em **Save & Sync** para enviar o conteúdo à sua loja. Enquanto o resultado não for confirmado, a sincronização fica desativada. Em um Flow **Fully automatic**, os resultados são confirmados para você.

Outros botões da janela:

- **Regenerate** gera o conteúdo de novo. Ele sempre gera de novo **todos** os atributos do Flow juntos.
- **Show Revisions** mostra versões anteriores. Veja [4.8.1 Histórico de Conclusão de Conteúdo](/content-creation-flows/content-completion-history-revision-history-version-control/).
- **Copy to Clipboard** copia o conteúdo.

### Conteúdo suspeito

Se um resultado não passa nas verificações de qualidade do Fozzels, as partes com problema ficam destacadas em amarelo e o resultado não é sincronizado. Você pode corrigir manualmente as partes destacadas e salvar, o que não custa nada, ou clicar em **Regenerate** para gerar todos os atributos de novo. Veja [4.7.4 Palavras e Frases Suspeitas](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

Para saber mais sobre como revisar e sincronizar resultados, veja [4.7.1 Acompanhamento dos Resultados Gerados](/content-creation-flows/tracking-of-the-generated-results-dashboard/) e [4.7.5 Edição de Conteúdo na Batch List](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/).
