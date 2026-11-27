---
id: '103000367976'
title: '4.1.2. Criando um Content Flow: o passo a passo em seis etapas'
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Como configurar um Content Flow em seis etapas guiadas: selecione a loja e os
  campos, monte o prompt com blocos, configure cada campo, teste em produtos
  reais e lance. Também a página do Flow, a revisão do conteúdo gerado e o
  Brand Profile.
---

Um Content Flow diz ao Fozzels em quais produtos trabalhar, quais campos preencher, qual modelo de IA usar e quais instruções dar a ele. Depois, o Fozzels gera o conteúdo, atualiza esse conteúdo e envia para a sua loja.

Você configura um Content Flow em seis etapas guiadas. Você monta o prompt com blocos que liga e desliga, e a voz da sua marca fica em um só lugar: o [Brand Profile](#brand-profile). Este artigo explica como cada etapa funciona, da seleção de uma loja até a geração de conteúdo para muitos produtos.

## Seis etapas até um Flow pronto

1. **Store.** Selecione a integração, o site e a store view para os quais você gera conteúdo.
2. **What and with what?** Selecione os campos que quer gerar e veja quantos produtos já têm um valor neles. Nesta etapa, você também seleciona os seus produtos.
3. **Enrich the text.** Selecione um modelo de IA e monte um prompt comum com blocos: quem escreve, para quem, em qual tom e de onde vêm os fatos.
4. **Fields.** Defina o tamanho, a estrutura e o formato de cada campo.
5. **Test.** Gere textos para produtos reais e veja as notas antes de gerar conteúdo para muitos produtos.
6. **Launch.** Defina quantos produtos o Fozzels processa por dia e se você aprova os textos antes de o Fozzels publicar.

As seis etapas ficam sempre do lado esquerdo da janela do Flow. Uma etapa concluída fica verde, e a etapa atual fica azul. O botão **Next** só fica ativo quando você conclui todas as configurações obrigatórias da etapa atual.

:::tip
Preencha o seu [Brand Profile](#brand-profile) antes de criar o seu primeiro Flow. Assim, cada Flow novo já começa com a voz da sua marca.
:::

### Etapa 1. Store

Selecione três itens:

- **Integration**: a sua loja ou o seu PIM.
- **Website**.
- **Store view**: o idioma dos textos.

Todas as configurações que você faz depois desta etapa valem para essa combinação.

Abaixo dos campos, o Fozzels mostra a sua seleção e quantos produtos ela tem. Se a loja de que você precisa não está na lista, conecte essa loja primeiro em **Integrations**.

![Etapa 1: a seleção da integração, do site e da store view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-01-step-1-store.png)

### Etapa 2. What and with what?

Selecione um ou mais tipos de conteúdo. Cada cartão mostra a porcentagem dos seus produtos que já tem um valor nesse campo. Assim, você vê na hora onde estão as maiores lacunas.

- **Title**: nomes de produto claros, que os clientes conseguem encontrar.
- **Description**: o texto completo do produto, que vende o produto.
- **SEO Title**: o título que o Google mostra.
- **SEO Description**: o texto curto nos resultados de busca que faz os clientes clicarem.
- **Other attribute**: um atributo da sua loja, como cor, material ou dimensões.

![Etapa 2: tipos de conteúdo com taxas de preenchimento](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-02-step-2-content-types.png)

Na janela **Add another attribute**, você pode buscar um atributo pelo nome ou pelo código. Os atributos com a maior taxa de preenchimento ficam no topo. O tipo do atributo vem da sua loja: um número, um valor de uma lista ou um texto. Assim, a IA escreve o tipo de valor correto.

![A janela Add another attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-03-add-another-attribute.png)

Os textos ALT de imagens têm o seu próprio modo de Flow. Um Flow desse tipo cria apenas textos ALT e tem as suas próprias regras. Para mais informações, veja [Gerando textos ALT de imagens para Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/).

Todos os campos que você seleciona aparecem no bloco **You are creating**. O primeiro campo é a base (**BASE**). Os outros campos usam esse campo como ponto de partida. Para mudar a ordem, arraste um campo pela alça à esquerda. Você dá as instruções de cada campo na etapa 3.

Mais abaixo nesta etapa, você seleciona os produtos do Flow.

![O bloco You are creating com os campos selecionados](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-04-you-are-creating.png)

### Etapa 3. Enrich the text

Nesta etapa, você monta o prompt: a instrução que a IA recebe para cada produto. O prompt tem blocos. Primeiro, você define como o texto soa. Depois, você define o que a IA usa como fontes e o que precisa estar no texto. Abaixo dos blocos, você vê o prompt.

Quando você abre a etapa, o Fozzels prepara uma proposta para cada campo. O Fozzels define a base: a estrutura, o idioma e o tipo correto de cada campo. Clique em **Load brand profile** para carregar um perfil salvo, ou em **Save as brand profile** para salvar as configurações deste Flow como um perfil novo.

**Qual modelo de IA?** Primeiro selecione o provedor, depois o modelo. O modelo define a qualidade e o preço dos seus textos. Para cada modelo, você vê o custo de 1.000 tokens: do texto que a IA lê (entrada) e do texto que ela escreve (saída). Rótulos como **Recommended**, **Balanced** ou **Fast & low cost** ajudam você a escolher. O modelo também define se os blocos **Look at photos** e **Search the internet** estão disponíveis. Você pode mudar o modelo a qualquer momento. Você não precisa configurar o Flow de novo.

![Etapa 3: o prompt base e a seleção do modelo de IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-05-step-3-ai-model.png)

**Como o texto soa.** Estas configurações valem para todas as seções do texto: quem escreve, para quem, em qual tom e com qual tamanho. No bloco **Role of the AI**, selecione uma função com um clique. Para mudar o nome e a descrição de uma função, clique no ícone de lápis. A descrição diz quem escreve, com qual conhecimento e com qual objetivo.

![Editando uma função: nome e descrição](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-06-edit-role.png)

Clique em **Make default** para usar a opção selecionada em todos os Flows novos. A opção recebe então uma estrela e o rótulo "Default for new flows", e um link para o Brand Profile aparece ao lado. Para desfazer, clique em **Remove from defaults**. **Make default** funciona da mesma forma para o modelo, o público, o tom e os outros blocos.

![Uma função com o rótulo Default for new flows](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-07-role-default.png)

Os blocos **Target audience** e **Tone of voice** funcionam da mesma forma que a função. Ative os blocos com o botão. Depois, selecione uma opção salva com um clique ou crie uma opção nova. Abaixo dos botões, você vê a descrição completa que a IA recebe. Se você não seleciona um tom, a IA escreve em um estilo neutro e informativo.

![Os blocos Target audience e Tone of voice em um Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-08-audience-tone.png)

#### Princípios de neuromarketing

Os quatro princípios são **Processing fluency**, **Simulation**, **Congruence** e **Trust**. Eles vêm de uma pesquisa de neuromarketing com a Erasmus University Rotterdam. Ative os princípios de que você precisa, e a IA usa esses princípios em cada texto. A seção do [Brand Profile](#neuromarketing-principles-in-the-brand-profile) explica o que cada princípio faz.

Não sabe quais princípios usar? Clique em **Fozzels suggestions**. A IA do Fozzels analisa os produtos que você selecionou e diz quais princípios combinam com eles. O princípio recomendado recebe o rótulo "advice". Clique em **Apply advice** para usar esse princípio. Esta função usa tokens.

![Princípios de neuromarketing com a recomendação do Fozzels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-09-neuromarketing.png)

#### De onde vêm os fatos

Aqui você define as fontes que a IA pode usar: os atributos do seu próprio sistema, as informações das fotos e as informações da internet. A IA usa apenas as fontes que você ativa. Ela não inventa fatos.

**Attributes from your store.** Os atributos da sua loja, do seu ERP ou do seu PIM que a IA usa como entrada. O Fozzels já seleciona os atributos com uma taxa de preenchimento alta. Clique no X para remover um atributo e adicione os atributos que faltam. A porcentagem mostra para quantos produtos o campo tem um valor. A barra colorida mostra se o campo está preenchido, parcialmente preenchido ou vazio. O Fozzels pula os campos vazios.

![O bloco Attributes from your store](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-10-attributes-from-store.png)

**Look at photos.** As suas fotos podem mostrar informações que não estão nos seus campos, por exemplo o caimento, o fecho ou uma estampa. A IA lê essas informações nas imagens. Ela usa as informações no texto ou para preencher um campo.

- **How many photos per product?** De 1 a 4, ou todas (no máximo 5). Mais fotos dão mais detalhes, mas custam mais.
- **What should the AI look at?** Escreva os detalhes que a IA precisa analisar, por exemplo gola, bolsos e capuz.
- **When a product has no image yet.** O Fozzels espera pela imagem e depois gera automaticamente, ou pula o produto.
- **Enable Image Resize.** O Fozzels reduz automaticamente as imagens grandes. Isso evita gerações com falha e economiza créditos. Custa €0,025 por imagem.
- **Fozzels suggestions.** A IA analisa algumas fotos e sugere detalhes visíveis que são importantes para o texto. Adicione esses detalhes com um clique.

![O bloco Look at photos](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-11-look-at-photos.png)

**Search the internet.** Às vezes, a informação de que você precisa não está na sua loja nem nas fotos, por exemplo as especificações do fabricante, detalhes do material ou avaliações. Então o Fozzels busca essa informação na internet. A IA usa apenas os fatos que combinam com os dados do seu produto.

- **What does the AI search with?** Os campos que identificam um produto: normalmente a marca, o nome e o GTIN. Os nomes desses campos são diferentes em cada integração.
- **Which information do you want the AI to look up online?** Os temas que a IA busca, como avaliações, sustentabilidade ou orientação de tamanho. **Fozzels suggestions** mostra quais temas são úteis.

![O bloco Search the internet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-12-search-internet.png)

O Fozzels calcula os custos de **Look at photos** e **Search the internet** para cada produto. Você vê esses custos na etapa **Test**.

#### Blocos extras: amplie o prompt

Estes blocos são opcionais. Ative um bloco, preencha e salve. O Fozzels coloca o bloco em uma posição fixa no prompt.

**Keywords.** Os termos de busca com os quais os clientes precisam encontrar o texto. Digite os termos você mesmo ou clique em **Fozzels suggestions** para receber palavras-chave para a categoria do produto. Em breve, haverá uma conexão com a sua ferramenta de SEO. O Fozzels coloca as palavras-chave no título e no primeiro parágrafo, e depois no resto do texto. Se você não seleciona palavras-chave, o Fozzels escolhe um termo para cada produto a partir do título e da categoria dele.

![O bloco Keywords em um Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-13-keywords.png)

**My snippets.** As suas próprias instruções, que você pode usar de novo em Flows diferentes. Por exemplo: uma frase final fixa, uma regra sobre tamanhos ou uma lista de marcas que sempre precisam ter a grafia correta. Um snippet vale para o texto completo, em todos os campos do Flow.

#### Regras, verificações e diretrizes para o texto completo

Aqui você define o que a IA sempre precisa fazer ou nunca pode fazer, em todas as partes do texto. Isso evita erros que você precisaria corrigir em cada texto.

**Do not mention.** Palavras e temas que não podem estar no texto: preços, descontos, nomes de concorrentes, promessas como "o melhor" ou "o mais barato". A IA não usa esses itens, mesmo quando eles estão nas suas fontes.

![Os blocos My snippets e Do not mention](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-14-snippets-do-not-mention.png)

**Guidelines and check rules · Fozzels standard.** As regras padrão que o Fozzels usa em cada texto. Elas ficam ativadas em cada Flow novo. Você pode desativar uma regra que não combina com os seus textos.

- Não mencione preços, descontos ou prazos de entrega.
- Use apenas fatos dos dados do produto, das fotos ou dos resultados de busca.
- Não use superlativos nem promessas como "o melhor" ou "o mais barato".
- Copie tamanhos, materiais e marcas exatamente como estão nos dados do produto.
- Use apenas a formatação das configurações de estrutura.
- Use a mesma forma de tratamento e a mesma grafia no texto completo.

Para adicionar as suas próprias regras, use **Your own rules**, por exemplo "sempre mencione o país de fabricação".

![Regras padrão do Fozzels e as suas próprias regras](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-15-standard-rules.png)

#### Campos extras: diretrizes curtas, não prompts separados

Se você selecionou mais de um campo na etapa 2, a IA preenche os campos extras na mesma solicitação, com o mesmo prompt principal. A função, o público, o tom, as fontes e as regras valem automaticamente para eles. Assim, você não escreve um prompt separado para cada campo. Você escreve apenas uma diretriz curta: o que o campo contém, qual o tamanho e em qual forma.

O Fozzels já preparou uma proposta para cada campo. Mantenha a proposta ou altere com **Edit guideline**. O link "Change fields in step 2" leva você de volta à seleção dos campos.

![Campos extras e o resumo Your prompt](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-16-extra-fields.png)

**O editor de diretrizes.** À esquerda, você vê o texto da diretriz. À direita, você vê o **Preview**: a mesma diretriz com os valores reais de um produto. Use as setas no **Preview** para ir para outro produto.

- **Atributos como variáveis.** O Fozzels adiciona ao texto os atributos do painel **Attributes** como tags verdes. Um bloco condicional amarelo "if…" adiciona uma linha apenas quando o produto tem um valor para esse atributo. Você pode ordenar o painel pela taxa de preenchimento e buscar nele. O número em um atributo mostra quantas vezes você usa esse atributo.
- **Snippets.** Os seus snippets de instrução salvos ficam à direita.
- **Templates.** Clique em **Save as template** para salvar uma diretriz como template. Clique em **Load** para usar o template em outro Flow.
- **AI Assistant.** O assistente ajuda você a escrever ou alterar a diretriz. Você pode adicionar o resultado, colocar o resultado no cursor, substituir o texto por ele ou copiar o resultado.

Para uma descrição completa do editor, veja [4.3.2 Configuração e uso do prompt: o novo editor de prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

![O editor de diretrizes com o Preview, os atributos e os snippets](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-17-guideline-editor.png)

![O AI Assistant no editor de diretrizes](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-18-ai-assistant.png)

O ícone de engrenagem ao lado do nome do campo abre as configurações do atributo. Aqui você define:

- se o Fozzels usa o atributo,
- se você pode filtrar por ele,
- se o Fozzels pode escrever conteúdo nele e atualizar a sua loja,
- se os produtos filhos recebem o valor do produto pai,
- se HTML é permitido.

Você também pode traduzir o nome do atributo para outros idiomas. Isso ajuda a IA a entender o que o atributo contém. Quando você salva esta janela, o Fozzels não envia nada para a sua loja.

![Configurações do atributo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-19-attribute-settings.png)

#### Your prompt

No fim da etapa, você vê um resumo: o número de campos no Flow, o número de blocos ativados e todos os blocos ativos, da função e do público até as regras de verificação. Você vê os textos reais na etapa 5, quando testa o prompt em produtos reais.

### Etapa 4. Fields

Nesta etapa, você define o tamanho e a estrutura do texto de cada campo. Os campos são abas no topo. Clique em **+** para adicionar um campo e clique no X para remover um campo. Todas as configurações da etapa **Enrich the text** continuam valendo para cada campo.

**Tamanho do texto.** O número aproximado de palavras que a IA escreve: **Short** (cerca de 60), **Normal** (cerca de 120), **Long** (cerca de 200) ou **Custom** (o seu próprio valor).

**Trust block.** Um bloco curto no fim do texto. Ele dá aos clientes e aos agentes de IA confiança no produto e na sua loja. Escreva o que torna a sua loja confiável, por exemplo alta satisfação dos clientes, lojas físicas, devolução grátis, garantia ou um selo de qualidade. O bloco vira uma seção separada no fim do texto. Há duas opções:

- **Same block in every description** (recomendado): o Fozzels adiciona o bloco palavra por palavra depois de cada texto. O bloco está sempre correto, e o prompt fica mais curto.
- **AI mentions it where it fits**: a IA escreve esses pontos com as próprias palavras, apenas onde eles combinam com o texto.

Você pode dar um título ao bloco, por exemplo "Pedido e entrega", e uma lista de pontos.

![Etapa 4: o tamanho do texto e o Trust block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-20-step-4-length-trust-block.png)

**Estrutura e formatação.** A ordem das partes do texto na sua loja. O Fozzels prepara a estrutura padrão para este tipo de texto. Você pode alterar:

- **Format**: HTML (h2, h3, h4, p, ul) ou texto simples.
- **Sections**: cada seção tem um nível de título (H2, H3 …), uma forma (título, parágrafo ou lista com marcadores) e a sua própria instrução. Arraste uma seção para mudar a ordem. Clique no X para remover uma seção.
- **+ Custom section**: adiciona uma seção sua.

![Estrutura e formatação: as seções de uma descrição](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-21-structure-sections.png)

Clique no ícone de lápis para abrir o editor de seção. Aqui você define o título, o nível, a instrução, a forma, o número aproximado de palavras e uma condição. A condição define quando o Fozzels adiciona a seção ao texto: **Always include**, **Only if a field is filled** ou **Only if a building block is on**.

![Editando uma seção e a condição dela](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-22-edit-section.png)

### Etapa 5. Test

Nesta etapa, você vê produtos da sua seleção. Para cada produto, você pode ver o prompt exatamente como a IA recebe: clique em **View the filled-in prompt for this product**. Clique em **Test** para ver o texto que a IA escreve para esse produto, ao lado do texto atual. Se você não gosta do resultado, volte para os blocos da etapa 3.

O Fozzels sugere alguns produtos da sua seleção para o teste. Para adicionar outros produtos, busque esses produtos. Para remover um produto, clique no X.

:::note
Um teste escreve um texto real com o seu modelo de IA. O Fozzels cobra esse texto da mesma forma que todos os outros textos. As notas também usam tokens.
:::

![Etapa 5: produtos de teste](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-23-step-5-test-products.png)

Depois do teste, o Fozzels mostra a nota total do texto atual e do texto novo, e a melhoria, por exemplo 12 → 69, ou +57. Abaixo, você vê uma nota de 0 a 100 para cada tema, com uma explicação curta para o texto atual e para o texto novo.

| Tema | O que o Fozzels avalia |
|---|---|
| SEO | Os clientes encontram o texto no Google? Uma palavra-chave no início, um bom tamanho, frases fáceis de ler. |
| GEO | Os mecanismos de busca com IA e os agentes de compra encontram o texto? Fatos específicos que eles podem verificar. |
| AI readability | Um modelo de linguagem entende o texto na hora? Uma estrutura clara. |
| Keywords | O texto tem os termos de busca selecionados de forma natural, sem repetições demais? |
| Internal links | O texto tem os links selecionados, com um texto de link que diz para onde eles levam? |
| Conversion | O texto dá um motivo para comprar, tira dúvidas e passa confiança no momento certo? |
| Neuromarketing | O texto usa simulation, congruence, trust e processing fluency? |

O Fozzels calcula as notas com base no próprio texto, a partir dos blocos ativados neste Flow. Ele não conta os temas de blocos desativados, por exemplo **Internal links**.

![Notas do texto atual e do texto novo para cada tema](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-24-test-scores.png)

### Etapa 6. Launch

A última etapa tem três perguntas e, se necessário, configurações avançadas.

1. **How many products per day?** 10, 25, 50, 100 ou o seu próprio número. O limite mantém baixos os custos e o trabalho de revisão. Quando o Fozzels conclui a seleção atual, o Flow pega automaticamente os produtos novos que se encaixam nela.
2. **What happens with a new text?**
    - **I approve every text first** (recomendado): os textos novos vão para a sua lista de revisão. O Fozzels não envia nada para a sua loja antes da sua aprovação.
    - **Straight to my shop**: o Fozzels publica os textos automaticamente. Você ainda pode editar os textos ou voltar para a versão anterior.
3. **If a product changes later?** Se um atributo usado no prompt muda, por exemplo a cor ou o material, o Fozzels pode escrever um texto novo automaticamente. Com o botão desativado, o Fozzels escreve o texto de um produto só uma vez.

Em **Advanced settings**, você pode impedir que outros Flows gerem o mesmo conteúdo de novo:

- **Use default**: o cooldown das suas configurações gerais.
- **Override**: o seu próprio cooldown para este Flow, em semanas.
- **Turn off**: sem cooldown. O Fozzels não gera um texto novo só porque o tempo passou.

Para mais informações, veja [Prevenir a geração de conteúdo sobreposta](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).

Em **Advanced settings**, você também pode clicar em **Connect workflow** para adicionar uma ação que roda depois de cada texto, por exemplo uma tradução para o alemão ou uma meta description nova.

Clique em **Launch flow** para iniciar o Flow, ou em **Save as draft** para continuar depois.

![Etapa 6: configurações de lançamento](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-25-step-6-launch.png)

## Depois do lançamento: a página do Flow

Depois do lançamento, você vê a mensagem "Your flow is running" e um botão que abre a página do Flow.

![A mensagem Your flow is running](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-26-flow-running.png)

A página do Flow mostra todas as informações do Flow em uma tela:

- **Product selection**: o filtro que seleciona os produtos e o número de produtos.
- **System prompt**: a parte do prompt que o Fozzels envia em cada solicitação, antes das instruções dos campos: a função, o público, o tom, os princípios, as palavras-chave, as palavras a evitar e as regras. Para saber o que vai nesta parte e o que vai no prompt de cada campo, veja [4.3.4 Prompt principal e Prompt por texto: como o Fozzels envia o seu prompt](/content-creation-flows/main-prompt-and-prompt-per-text/).
- **Attributes to generate**: os campos que o Fozzels gera. O Fozzels cria todos eles em uma única solicitação de IA por produto, com um prompt principal comum.
- **Status**, **AI Configuration**, **Automation**, **Workflows**: o status e o progresso, o modelo e o preço dele, o limite diário, a publicação automática, o limite de confiança, o cooldown e as ações conectadas. Para alterar um bloco, clique no botão **Change** dele.

![A página do Flow no Expert view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-27-flow-page-expert-view.png)

Na barra superior, você pode alternar entre **Step by step** e **Expert view** e abrir o conteúdo gerado (**Generated content**), o teste e a programação. O menu **…** contém:

- **Run Now**: inicia a geração na hora, mesmo quando o Flow já atingiu o limite diário de hoje.
- **Duplicate**, **Archive** e **Delete**. Para mais informações, veja [4.1.3. Gerenciando Flows: duplicação, arquivamento e exclusão](/content-creation-flows/managing-flows-duplication-archiving-and-deletion/).

![O menu do Flow com Run Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-28-flow-menu-run-now.png)

**Workflows.** Para adicionar uma ação de workflow ao Flow:

1. No bloco **Workflows**, clique em **Change**.
2. Selecione uma ação na lista, por exemplo "Product is in".
3. Clique em **Add**.
4. Clique em **Save**.

![Adicionando um workflow ao Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-29-add-workflow.png)

Para mais informações, veja [4.11.1. Workflows. Lição 1: primeiros passos com Workflows](/content-creation-flows/workflows-lesson-1-getting-started/).

**Test na página do Flow.** Abre uma tabela com todos os produtos da seleção. Para cada produto, você vê o SKU, o nome, uma miniatura e o prompt. Clique em **Generate Now** em uma linha para gerar conteúdo para esse produto na hora, sem esperar a programação. Você pode buscar na tabela, ir para outras páginas e escolher as colunas que aparecem.

![A tabela de produtos do Flow com o botão Generate Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-30-flow-product-table.png)

### Conteúdo gerado: revise e aprove

Clique em **Generated content** para abrir a lista do conteúdo gerado (**Content Completion List**). Para cada produto, você vê o SKU, o nome, uma miniatura, o prompt, todos os campos gerados e as datas em que o Fozzels criou e executou a solicitação. Cada coluna tem um filtro. O botão **Confirmed** mostra se um texto está aprovado. Para fazer uma ação em muitos textos ao mesmo tempo, selecione as linhas e escolha a ação no menu **Actions**.

![A lista do conteúdo gerado](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-31-generated-content-list.png)

Clique em uma linha para abrir a janela **Edit completion result**:

- **Campo principal**: o texto à esquerda e um **Preview** à direita, que mostra como o texto fica na sua loja. Clique em **Show HTML** para ver o código HTML, ou em **Enable Editor** para usar o editor visual.
- **Outros campos do Flow**: abaixo do campo principal, você pode analisar e editar os outros campos que este Flow preencheu, como **SEO Description** e **SEO Title**.
- **Batch Confirmed**: marca o resultado como aprovado. Acima dos botões, você vê o status de sincronização com a sua loja.
- **Botões**: **Save**, **Save & Sync** (salva o texto e envia para a sua loja na hora), **Regenerate**, **Show Revisions** (versões anteriores) e **Copy to Clipboard**.

![A janela Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-32-edit-completion-result.png)

Para mais informações, veja [4.7.5 Editando conteúdo na Batch List. Editor de texto avançado](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/) e [4.7.4 Palavras e frases suspeitas](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

## Dois modos: Step by step ou Expert view

Use o modo que você preferir. Você pode alternar entre os modos a qualquer momento com um clique.

| Modo | O que mostra | Ideal para |
|---|---|---|
| Step by step | Um assistente guiado, uma etapa de cada vez. | Flows novos e membros novos da equipe. |
| Expert view | O Flow completo em uma página, incluindo as configurações avançadas. | Usuários experientes que querem ver todas as configurações ao mesmo tempo. |

As configurações avançadas no **Expert view** incluem o limite de confiança, o cooldown entre Flows e o que o Fozzels faz quando um produto ainda não tem imagem.

Quando você cria um Flow novo, o Fozzels dá um nome a ele com base nas suas seleções. Você pode mudar o nome e voltar ao nome sugerido com um clique.

## Brand Profile: a voz da sua marca em um só lugar {#brand-profile}

O **Brand Profile** é uma página separada nas configurações da sua conta. Ele define com o que cada Content Flow novo começa:

- o modelo de IA,
- quem escreve, para quem e em qual tom,
- os princípios de neuromarketing e as palavras-chave,
- o que nunca pode estar no texto.

Você ainda pode mudar cada uma dessas configurações em um Flow. Quando você altera o perfil, o Fozzels não altera os seus Flows existentes.

![A página do Brand Profile](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-33-brand-profile.png)

### Mais de um perfil

Crie um perfil separado para cada marca, loja ou linha de produtos, por exemplo um para descrições e SEO, um para FAQ, um para textos ALT ou um para uma liquidação.

- **New profile**: digite um nome, por exemplo B2B, Outlet ou Linha premium, e clique em **Create**.
- **Rename** / **Delete**: mude o nome de um perfil ou exclua o perfil. Você não pode excluir o perfil padrão. Primeiro, defina outro perfil como padrão.
- **O perfil padrão**: cada Flow novo começa com ele. Na etapa **Enrich the text**, você pode carregar outro perfil ou salvar as configurações do Flow como um perfil novo.

### Modelo de IA

Selecione um provedor (OpenAI (ChatGPT), Anthropic, xAI ou Google Gemini) e um modelo. Os Flows novos começam com esse modelo, mas você pode selecionar outro modelo em cada Flow.

### Função, público e tom

Ative cada bloco com o botão dele. As opções salvas são botões. Clique em um botão para selecionar uma opção. Abaixo dos botões, você vê a descrição completa que a IA recebe. Clique no ícone de lápis para editar a descrição, ou clique em **+ New…** para criar uma opção nova.

- **Role of the AI**: quem escreve o texto e de qual ponto de vista, por exemplo Webshop copywriter, SEO specialist, Brand storyteller ou Shop assistant.
- **Target audience**: quem lê o texto: a idade, o estilo de vida, como tratar o leitor e o que é importante para ele.
- **Tone of voice**: como a sua marca fala com os clientes, com as suas próprias palavras. Se você não seleciona um tom, a IA escreve em um estilo neutro e informativo.

### Princípios de neuromarketing no Brand Profile {#neuromarketing-principles-in-the-brand-profile}

Cada princípio adiciona uma regra de escrita ao prompt. Você pode selecionar mais de um princípio. Eles reforçam uns aos outros.

| Princípio | Regra de escrita | Funciona para |
|---|---|---|
| Processing fluency | Frases curtas, uma primeira linha clara, poucas promessas, uma ordem lógica. | Compras do dia a dia, comparações, preços baixos. |
| Simulation | O cliente imagina que usa o produto: uma situação, um momento, o que ele sente. | Produtos novos, especiais ou emocionais. |
| Congruence | O texto combina com a foto e com o produto que o cliente recebe em casa. Ele não faz promessas que o produto não cumpre. Isso reduz as devoluções. | Produtos em que a expectativa e o produto real precisam combinar. |
| Trust | Honesto, específico e familiar. Fatos que o cliente pode verificar, não conversa de vendedor. | Compras mais caras, marcas desconhecidas, clientes novos. |

### Palavras-chave, palavras a evitar e as suas próprias instruções

- **Keywords**: os termos de busca com os quais os clientes precisam encontrar o texto. Em um Flow, o Fozzels também pode sugerir termos para os produtos dele. Se você não seleciona palavras-chave, o Fozzels escolhe um termo para cada produto a partir do título e da categoria dele.
- **Do not mention**: palavras e temas que não podem estar no texto: preços, descontos, nomes de concorrentes, promessas como "o melhor" ou "o mais barato". A IA não usa esses itens, mesmo quando eles estão nas suas fontes.
- **Own instructions**: outras informações que a IA precisa saber, com as suas próprias palavras. Por exemplo, como tratar o leitor ou o que sempre mencionar, como "enviamos em 24 horas". O Fozzels adiciona este texto ao system prompt depois dos blocos, uma linha para cada parágrafo.
