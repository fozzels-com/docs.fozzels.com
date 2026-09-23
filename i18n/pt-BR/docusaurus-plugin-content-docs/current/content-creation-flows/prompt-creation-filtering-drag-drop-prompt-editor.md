---
id: '103000367983'
title: '4.3.2 Configuração e uso do prompt: o novo editor de prompt'
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  Como escrever o prompt de um Flow no novo editor: inserir atributos e
  condições, configurar as opções dos atributos, usar snippets, conferir o
  Preview ao vivo e contar com a ajuda do AI Prompt Assistant.
---

O campo de prompt é onde você escreve as instruções que o Fozzels envia para a IA para cada produto. Com o novo editor, você monta o prompt, insere dados do produto e condições e confere o resultado para um produto real, tudo em uma única tela.

## O que mudou

Se você usava o editor anterior de arrastar e soltar, estas são as principais mudanças:

| Área | Antes | Agora |
| --- | --- | --- |
| Inserção de atributos | Clicar ou arrastar a partir da lista | Clicar, arrastar ou digitar `/` no editor. Cada atributo é inserido como uma linha de condição pronta |
| Condições | Uma lista separada "Attributes (if filled)" | Cada condição é um bloco que pode conter texto, atributos e outras condições (aninhamento) |
| Opções de atributo | Nenhuma | Por atributo: mostrar só quando preenchido, ocultar o rótulo, valor alternativo |
| Taxa de preenchimento dos dados | Tooltip com uma porcentagem | Sublinhado colorido em cada atributo, além de um tooltip com a taxa de preenchimento e um valor de exemplo |
| Preview | Só depois de Save & Preview | Preview ao vivo ao lado do editor, sincronizado com o cursor e a rolagem |
| Conteúdo reutilizável | Só templates de prompt completos | Snippets: Attribute list, Category list, Integration connector e seus próprios blocos reutilizáveis |
| Atributos por Flow | Um | O atributo principal e até 12 atributos adicionais |
| Ferramentas do editor | Nenhuma | Desfazer/refazer, tamanho do texto, busca, tela cheia, mostrar/ocultar o Preview e os snippets |

**Vindo do editor antigo.** Você não precisa migrar nada. Os Flows existentes continuam funcionando, e todos os prompts e templates salvos foram convertidos automaticamente para o novo formato. Você também pode colar um prompt escrito no formato antigo, e o editor faz a conversão.

## 1. Onde o prompt entra em um Flow

Você escreve o prompt na etapa 3 do Flow, **Flow Selection & Prompt**. Nesse ponto, o Flow já sabe qual é a loja, o atributo de destino e as configurações de IA.

1. **Novo Flow.** Acesse **Flows → Create**.

   ![Página Flows com o botão Create](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/01-flows-page-with-the-create-button.png)

   Selecione a integração, o website e a loja (idioma), informe um nome e escolha o tipo de entidade: Product ou Category.

   ![Create New Product Flow: escolhendo o tipo de entidade](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/02-create-flow-choosing-the-entity-type.png)

   Depois, escolha o atributo para o qual o conteúdo será gerado e clique em **Save**.

   ![Create New Product Flow: escolhendo o atributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/03-create-flow-choosing-the-attribute.png)

2. **AI Configuration.** Escolha o modelo de IA e os recursos opcionais, como busca na web, uso de imagens e redimensionamento de imagens. Veja [4.2.1 Configuração de IA](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features).

3. **Flow Selection & Prompt.** Use **Filter & Select Products** para escolher para quais produtos o Flow vai gerar conteúdo. Se você não definir nenhuma condição, todos os produtos serão usados. Depois, escreva o prompt na seção **Prompt** logo abaixo.

   ![Etapa Flow Selection & Prompt com o editor de prompt vazio](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/04-flow-selection-prompt-step-with-an.png)

O conjunto de produtos que você seleciona aqui também é o conjunto usado pelo Preview (veja a seção 8).

### Um Flow, vários atributos

Um Flow pode preencher o atributo principal e até 12 atributos adicionais, 13 no total. Todos eles são gerados juntos, em uma única requisição à IA por produto. Os dados e as imagens do produto são enviados uma só vez, então a geração fica mais rápida e consome menos tokens do que Flows separados.

Para adicionar um atributo:

1. Vá até **Additional attributes to fill** na etapa 3. O contador ao lado do título mostra quantos você já adicionou, por exemplo **0 / 12**.
2. Escolha um atributo na lista **Choose attribute**.
3. Clique em **Add attribute**.

![Escolhendo um atributo adicional](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/05-choosing-an-additional-attribute.png)

O atributo aparece em uma linha própria, com o nome e o tipo, por exemplo **SEO Description · Text**. Enquanto você não escrever uma instrução, a linha mostra _No instruction yet_.

Em **Instruction for this attribute**, escreva o que a IA deve produzir para esse atributo. A instrução é combinada com o prompt principal em uma única requisição. O campo funciona como o editor principal: digite `/` ou use o painel de atributos ao lado para adicionar atributos e condições.

![Linha de atributo adicional com o campo de instrução](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/06-additional-attribute-row-with-its-instruction.png)

- Use o ícone de lixeira para remover o atributo e a seta para recolher ou expandir a linha.
- Por enquanto, o campo de instrução não tem o painel Snippets. Os snippets usados nele continuam funcionando na geração.
- Os resultados continuam podendo ser revisados e enviados por atributo.

Para mais detalhes, clique em **User Guide: How multi-attribute flows work** no canto superior direito desta seção.

## 2. Layout da seção Prompt

A seção Prompt tem quatro áreas:

| Área | Posição | Para que serve |
| --- | --- | --- |
| Editor | Canto superior esquerdo | Escrever o prompt e posicionar atributos, condições e snippets |
| Preview | Canto superior direito | Ver o prompt final para um produto real |
| Atributos | Canto inferior esquerdo | Todos os atributos da loja selecionada, com a taxa de preenchimento |
| Snippets | Canto inferior direito | Blocos reutilizáveis, como Attribute list e Category list |

O link **User Guide: Prompt Setup And Usage** no canto superior direito abre este artigo.

### Barra de ferramentas do editor

| Botão | O que faz |
| --- | --- |
| Undo / Redo | Volta ou avança nas suas edições. O Undo também restaura um bloco que você apagou sem querer |
| A / A | Diminui ou aumenta o texto do editor. Isso muda só a visualização, não o prompt |
| Search in prompt | Encontra palavras ou atributos em um prompt longo |
| Preview (olho) | Mostra ou oculta o painel Preview |
| Snippets (documento) | Mostra ou oculta o painel Snippets |
| Maximize | Abre o editor e o painel lateral em tela cheia |

![Botão Preview na barra de ferramentas](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/07-preview-button-in-the-toolbar.png)

Quando o Preview está oculto, o painel de atributos vai para a direita e o editor ganha mais espaço.

![Layout com o Preview oculto](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/08-layout-with-the-preview-hidden.png)

![Botão Maximize](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/09-maximize-button.png)

![Botão Snippets e o painel Snippets](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/10-snippets-button-and-the-snippets-panel.png)

O editor aceita texto simples e tags HTML padrão, como `<h2>`, `<ul>` e `<strong>`. Veja [4.7.3 Tags HTML permitidas](/content-creation-flows/allowed-html-tags-for-ai-text-generation).

## 3. Adicionando atributos

Um atributo é um espaço reservado para dados do produto, como título, tipo de produto ou material. No editor, ele aparece como um chip verde. No prompt final, ele é substituído pelo valor do produto.

Você pode adicionar um atributo de três formas:

- **Digite `/`** no editor. Abre uma lista com o nome e a chave técnica de cada atributo.

  ![Menu de barra com a lista de atributos](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/11-slash-menu-with-the-list-of.png)

  Continue digitando para filtrar, por exemplo `/seo`, e escolha o atributo.

  ![Menu de barra filtrado por "seo"](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/12-slash-menu-filtered-by-seo.png)

- **Clique** em um atributo no painel de atributos. Ele é inserido na posição do cursor.
- **Arraste** um atributo do painel de atributos e solte onde precisar. Uma linha mostra onde ele vai ficar.

  ![Linha de destino ao arrastar um atributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/13-drop-line-while-dragging-an-attribute.png)

O atributo inserido chega como uma linha de condição com um rótulo:

![Uma linha de condição para SEO Title, ao lado do Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/14-a-condition-line-for-seo-title.png)

### Linha de condição ou atributo inline

O editor mantém o prompt estruturado: cada condição ocupa uma linha própria. Por isso, o lugar onde o atributo fica define o que ele vira.

| Onde você insere | Resultado | Exemplo |
| --- | --- | --- |
| No início de uma linha (com `/`, um clique ou soltando antes do rótulo) | Uma **linha de condição**: um bloco com um rótulo e o atributo | `if SEO Title` → _SEO Title: [SEO Title]_ |
| Dentro de uma linha, depois do rótulo (soltando entre o rótulo e um atributo) | Um **atributo inline**, sem condição própria | _Media Gallery: Handle: [Handle] [Media Gallery]_ |

![Linha de condição aninhada (Status) e um atributo inline (Handle)](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/15-nested-condition-line-status-and-an.png)

O rótulo, como _SEO Title:_, é adicionado automaticamente. É texto normal, então você pode editá-lo.

Você pode usar o mesmo atributo quantas vezes precisar.

## 4. Condições (blocos if)

Uma condição é um bloco tracejado com um cabeçalho amarelo, por exemplo **if SEO Title**. Tudo o que está dentro do bloco só entra no prompt quando o produto tem um valor para esse atributo. Quando o valor está vazio, o bloco inteiro é ignorado.

Assim, o prompt de cada produto fica limpo. Uma linha como _SEO Title:_ nunca aparece sem um valor depois dela.

**Exemplo.** O prompt contém `if SEO Title`, `if Created At` e `if Tags` (aninhado dentro de `if Created At`). O produto de exemplo não tem SEO Title, então o Preview mostra só as linhas de Tags e Created At.

![Condições aninhadas e o Preview correspondente](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/16-nested-conditions-and-the-matching-preview.png)

### O que você pode colocar dentro de uma condição

- Texto livre, antes ou depois do atributo
- Outros atributos, como atributos inline
- Outras condições (aninhamento). Por exemplo, `if Tags` dentro de `if Created At` significa que a linha de Tags só aparece quando os dois valores estão preenchidos
- Snippets (veja a seção 7)

![Arrastando uma condição para dentro de outra condição](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/17-dragging-a-condition-into-another-condition.png)

### Trabalhando com condições

| Ação | Como |
| --- | --- |
| Mover um bloco | Arraste pela alça ⠿ à esquerda. Você pode soltá-lo entre outras linhas ou dentro de outra condição. As linhas sem condição têm a mesma alça |
| Remover só a condição | Clique na engrenagem do cabeçalho amarelo e selecione **Always show (remove condition)**. O conteúdo permanece e passa a ser sempre incluído |
| Excluir o bloco | Clique no **x** do cabeçalho amarelo (**Delete block**) |
| Conferir o produto de exemplo | Passe o mouse sobre o cabeçalho amarelo. Se a condição não for atendida para o produto do Preview, aparece **No output for this sample product** |

![Always show (remove condition) no menu da engrenagem](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/18-always-show-remove-condition-in-the.png)

![Delete block no cabeçalho amarelo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/19-delete-block-on-the-yellow-header.png)

![No output for this sample product](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/20-no-output-for-this-sample-product.png)

:::warning

**Delete block** remove o bloco inteiro com tudo o que está dentro dele, inclusive condições aninhadas. Para manter o conteúdo, use **Always show**. Se você excluir um bloco sem querer, clique em **Undo**.

:::

## 5. Opções de atributo

Clique na pequena seta de um chip de atributo verde para abrir as opções.

![Menu de opções do atributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/21-attribute-options-menu.png)

| Opção | O que faz |
| --- | --- |
| **Only show when filled** | Ativada (marcada): o atributo funciona como condição, e a linha é ignorada quando o valor está vazio. Desativada: é um atributo simples, sempre incluído |
| **Hide label** | Envia para a IA só o valor, sem o rótulo na frente |
| **Fallback value when empty** | Texto usado no lugar do valor quando o produto não tem valor para esse atributo |
| **Remove** | Remove o atributo do prompt |

Um atributo inline tem a opção **Only show when filled** desativada. Marque-a para transformar o atributo em uma condição.

![Opções de um atributo inline, com Only show when filled desativada](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/22-options-of-an-inline-attribute-with.png)

### Usando um valor alternativo

O valor alternativo (fallback) só funciona quando **Only show when filled** está desativada. Com a condição ativada, uma linha vazia é ignorada de qualquer forma, então o fallback é desconsiderado mesmo que você o preencha.

**Exemplo.** Você desativa **Only show when filled** em SEO Description e informa um fallback. Para um produto sem SEO description, o Preview mostra o fallback no lugar. O fallback aparece destacado no Preview, para você diferenciá-lo dos dados reais do produto.

![Valor alternativo exibido no Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/23-fallback-value-shown-in-the-preview.png)

### Condição ou fallback: qual escolher

- Use uma **condição** quando a linha não serve para nada sem um valor, por exemplo um material ou uma instrução de cuidados.
- Use um **fallback** quando a IA sempre deve receber essa linha, por exemplo _Brand: unknown_.
- Não use nenhum dos dois para atributos que todo produto tem, como o título do produto.

:::note

**Remove** exclui só o chip do atributo. O rótulo, como _Title:_, continua como texto. Apague-o você mesmo, senão a IA vai receber um rótulo sem valor.

:::

## 6. O painel de atributos

O painel de atributos lista todos os atributos da loja selecionada. Os atributos que já estão no prompt ficam em verde sólido e mostram um contador: **SEO Title 1** significa que ele é usado uma vez.

![Atributos usados com contadores](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/24-used-attributes-with-counters.png)

### Taxa de preenchimento (densidade de dados)

A taxa de preenchimento é a parcela de produtos da integração que têm um valor para um atributo. O painel mostra isso de três formas:

- **Cor do sublinhado.** Verde significa que o atributo está preenchido em mais de 50% dos produtos. Amarelo significa menos de 50%.
- **Intensidade do sublinhado.** A linha fica mais forte à medida que a taxa de preenchimento sobe de 1% para 100%.
- **Tooltip.** Passe o mouse sobre um atributo para ver o nome, a chave técnica, a taxa de preenchimento exata e um valor de exemplo de um produto real.

![Tooltip do atributo com a taxa de preenchimento e um valor de exemplo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/25-attribute-tooltip-with-fill-rate-and.png)

Os atributos com taxa de preenchimento de 0% ficam ocultos. Clique em **Show N without data** para vê-los.

:::tip

Para atributos com sublinhado amarelo, mantenha **Only show when filled** ativada ou defina um valor alternativo. Assim, os produtos sem esses dados também recebem um prompt limpo.

:::

### Encontrando atributos

- **Search attribute.** Digite parte de um nome para filtrar a lista.
- **Sort By.** Ordene por **Most filled** ou por **Name**. Use as setas para alternar entre ordem crescente e decrescente.

![Opções de Sort By](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/26-sort-by-options.png)

## 7. Snippets

Snippets são blocos reutilizáveis de conteúdo de prompt. Eles aparecem como chips roxos no painel Snippets. Clique em um snippet para inseri-lo no prompt. Um snippet que já está no prompt aparece preenchido no painel.

Existem dois tipos:

- **Snippets do sistema**, como Attribute list, Category list e Integration connector. O Fozzels os disponibiliza para todos. Você não pode editá-los nem excluí-los.
- **Seus próprios snippets**, criados com o botão **+**. Você pode editá-los (lápis) ou excluí-los (lixeira).

### Attribute list

Insere todos os atributos preenchidos do produto como linhas _Rótulo: valor_. Os atributos vazios ficam de fora.

![Bloco Attribute list no editor](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/27-attribute-list-block-in-the-editor.png)

![Attribute list renderizado no Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/28-attribute-list-rendered-in-the-preview.png)

É um jeito rápido de passar para a IA todos os dados do produto. Mas ele inclui tudo, inclusive campos técnicos como IDs, URLs do admin, datas e valores brutos como `{"value":159.0,"unit":"CENTIMETERS"}`. Para textos melhores, escolha você mesmo os atributos principais e use o Attribute list para testes rápidos. Insira-o só uma vez por prompt, senão os mesmos dados são enviados duas vezes.

### Category list

Insere linhas de atributos das categorias às quais o produto pertence. No Shopify, são as coleções; em outras integrações, pode ser outro tipo de vínculo. O bloco vem vazio ao ser inserido e mostra um cabeçalho como **Category list · Collections · 10**.

![Bloco Category list vazio](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/29-empty-category-list-block.png)

Clique na engrenagem do bloco para configurá-lo:

![Configurações do Category list](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/30-category-list-settings.png)

- **Edit template.** Escolha os atributos de categoria a incluir, como Name, URL, Level ou Position. Você monta a lista do mesmo jeito que um snippet.
- **Resolve through.** Mostra qual vínculo do produto é usado para encontrar as categorias, por exemplo Collections.
- **Number of categories.** O número máximo de categorias na lista. Um produto pode pertencer a muitas categorias, inclusive técnicas, então um limite mantém o prompt curto e focado.

![Template do Category list com atributos selecionados](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/31-category-list-template-with-selected-attributes.png)

Os dados de categoria ajudam a IA a entender melhor o produto. Com Name e URL, você também pode pedir links internos para categorias relacionadas, o que é útil para SEO.

### Integration connector

Traz dados do mesmo produto a partir de outra loja da sua conta. Por exemplo, um Flow do Magento pode usar observações do fornecedor, composição do material ou instruções de cuidados que só existem no seu feed CSV.

- Disponível só em Flows de produto, e só quando sua conta tem uma segunda loja.
- Se o produto não tiver correspondente nessa loja, o bloco não renderiza nada, e o prompt continua limpo.

Para configurar:

1. Clique em **Integration connector** no painel Snippets. A janela **Integration connector** se abre.

   ![Janela Integration connector](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/32-integration-connector-window.png)

2. Em **Connected store**, escolha a integração, o website e a loja de onde os dados serão trazidos.

   ![Escolhendo a loja conectada](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/33-choosing-the-connected-store.png)

3. Clique em **Save**.

   ![Loja conectada selecionada](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/34-connected-store-selected.png)

4. A janela **Integration connector template** se abre com os atributos da loja conectada. Adicione os atributos de que você precisa, do mesmo jeito que em um snippet: cada um vira uma linha de condição.

   ![Integration connector template](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/35-integration-connector-template.png)

5. Clique em **Save**. O bloco é adicionado ao seu prompt.

   ![Integration connector template com atributos](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/36-integration-connector-template-with-attributes.png)

:::warning

O Fozzels encontra o produto na loja conectada pelo identificador, como SKU ou ID. Os identificadores precisam ser iguais nas duas lojas. Se não forem, o produto não tem correspondente lá e o bloco fica vazio no Preview.

:::

### Criando seu próprio snippet

1. Clique em **+** no painel Snippets. A janela **New snippet** se abre.

   ![Janela New snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/37-new-snippet-window.png)

2. Informe um **Name**.
3. Clique em um tipo inicial, por exemplo **Attribute list**. Ele aparece no editor como um espaço reservado.
4. Clique nos atributos de que você precisa. Cada um é adicionado como uma linha de condição, e o espaço reservado é substituído pela sua própria lista.
5. Antes de adicionar o próximo atributo, coloque o cursor em uma nova linha. A nova linha não é criada automaticamente.

   ![Novo snippet com uma lista de atributos](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/38-new-snippet-with-a-list-of.png)

6. Clique em **Save**. O snippet aparece no painel Snippets.

   ![Snippet criado](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/39-snippet-created.png)

Seus snippets ficam disponíveis em todos os Flows da mesma integração, em todas as lojas dela.

### Editando um snippet no prompt

No prompt, seu snippet é um único bloco roxo com o nome dele.

![Snippet personalizado no prompt e no Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/40-custom-snippet-in-the-prompt-and.png)

Clique na engrenagem dele:

![Menu da engrenagem do snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/41-snippet-gear-menu.png)

| Opção | O que acontece |
| --- | --- |
| **Edit snippet (all prompts)** | Abre o snippet para edição. As alterações valem para todos os prompts que o usam, em todos os Flows e lojas da integração |
| **Convert to inline text (this prompt only)** | Transforma o snippet em linhas de condição normais neste prompt. Depois, você pode editar, mover ou excluir cada linha. Alterações futuras no snippet deixam de afetar este prompt |

![Snippet convertido em linhas de condição inline](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/42-snippet-converted-to-inline-condition-lines.png)

Mantenha o snippet quando a mesma lista precisar ficar idêntica e ser atualizada em um só lugar. Converta quando um prompt precisar da sua própria versão.

:::note

Os atributos dentro de um snippet não entram nos contadores do painel de atributos.

:::

### Quando um snippet é excluído

Se um snippet usado no seu prompt for excluído, o bloco dele continua no prompt, mas fica esmaecido e mostra só um número no lugar do nome, por exemplo **#11**. Ele não renderiza nada, então não quebra a geração. Exclua o bloco pelo **x** ou substitua-o por outro snippet.

![Bloco esmaecido de um snippet excluído](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/43-faded-block-of-a-deleted-snippet.png)

## 8. Preview

O Preview mostra o prompt final para um produto do conjunto selecionado, no idioma da loja selecionada. Os atributos são substituídos pelos valores do produto, e as condições sem valor ficam de fora. É exatamente isso que a IA recebe.

### Cabeçalho do Preview

- **Nome do produto.** Clique para abrir a página do produto no Fozzels, com todos os valores de atributos e imagens.
- **Ícone de link.** Abre o produto no seu website.
- **SKU ou ID.** O que aparece depende da integração.
- **Trocar exemplo (< >).** Passa para o produto anterior ou seguinte, na ordem do catálogo.

![Botões para trocar o exemplo no cabeçalho do Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/44-change-sample-buttons-in-the-preview.png)

### Como o Preview funciona

- **Ao vivo.** Cada alteração no editor aparece na hora. Você não precisa atualizar.
- **Somente leitura.** Não dá para digitar no Preview. Altere o prompt no editor.
- **Sincronizado.** Passe o mouse sobre um atributo ou condição no editor e a linha correspondente fica destacada no Preview. O Preview também rola junto com o editor, para você não se perder em um prompt longo.

![Passar o mouse sobre um atributo destaca a linha dele no Preview](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/45-hovering-an-attribute-highlights-its-line.png)

:::tip

Alterne entre alguns exemplos, principalmente produtos com poucos dados. Assim, você vê como o prompt fica quando algumas condições são ignoradas.

:::

### A instrução final

No fim de todo Preview, você vê: _Do not provide any commentary, word count, information or comments about the generated text in the returned text._ O Fozzels adiciona essa linha automaticamente a todo prompt, para que a IA devolva só o conteúdo em si. Você não precisa adicioná-la.

## 9. Templates

Com os templates, você reutiliza um prompt completo em outros Flows. Diferente de um snippet, um template é o prompt inteiro. Os controles ficam na parte de baixo do editor.

- **Load** substitui o prompt atual por um template salvo. Se o prompt não estiver vazio, você precisa confirmar antes, para não perder seu trabalho sem querer.
- **Save as template** salva o prompt atual, incluindo atributos, condições e snippets, como um novo template.

![Confirmação antes de um template substituir o prompt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/46-confirmation-before-a-template-replaces-the.png)

## 10. Localização dos nomes de atributos

Os nomes dos atributos seguem o idioma da loja selecionada, por exemplo `product_name` para en-US e `product_naam` para nl-NL.

- Se um atributo não tiver nome em um idioma, é usado o nome da loja padrão (marcada com `*`).
- Para alterar um nome localizado, acesse **Integration settings → Attribute → Locale**.

Os prompts vinculam os atributos pela chave técnica única, não pelo nome. Renomear um atributo ou trocar o idioma da loja não quebra o seu prompt.

## 11. Editando o prompt com o AI Prompt Assistant

O AI Prompt Assistant pode escrever ou ampliar o prompt para você. Ele lê o prompt atual e responde só com a parte a ser adicionada. Por exemplo, se o seu prompt pede uma descrição de SEO e você pede "add slug", ele sugere só o trecho novo.

Para abri-lo, clique no botão azul de chat no canto inferior direito da página. O painel **AI Assistant** se abre ao lado do editor. Digite seu pedido, por exemplo _Help me create a prompt for Description. Use filled attributes._, e pressione **Enter** para enviar. Use **Shift+Enter** para quebrar a linha.

O assistente conhece os atributos da sua integração e as taxas de preenchimento deles. Ele monta o prompt com atributos e condições e explica as escolhas, por exemplo por que um atributo foi colocado dentro de uma condição.

![AI Assistant com um prompt sugerido](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/47-ai-assistant-with-a-suggested-prompt.png)

### Posicionando uma sugestão

Cada sugestão aparece no chat como um bloco, desenhado do mesmo jeito que o editor o mostra, com estes botões:

| Botão | O que faz |
| --- | --- |
| Copy | Copia a sugestão para você colar onde quiser |
| Add | Adiciona a sugestão ao final do prompt |
| At cursor | Insere a sugestão na posição do cursor no editor |
| Replace all | Substitui o prompt inteiro pela sugestão |

Depois que você clica em um botão, ele fica verde e desativado por um instante, para que o mesmo texto não seja inserido duas vezes. Os botões de posicionamento só aparecem quando há um editor de prompt aberto na página. Se uma sugestão não se encaixar no formato do editor, só aparece o botão **Copy**.

### Escolhendo qual prompt editar

Quando a página tem mais de um prompt, um menu suspenso acima do campo do chat permite escolher em qual deles o assistente vai trabalhar.

- Uma sugestão sempre vai para o prompt que estava selecionado quando você fez a pergunta, mesmo que você mude o menu suspenso depois.
- Em uma conversa restaurada de uma sessão anterior, as sugestões vão para o prompt principal do Flow.
- Se o prompt ao qual a sugestão pertence tiver sido excluído, a sugestão é marcada como indisponível e não é gravada em nenhum outro lugar.

## Artigos relacionados

- [4.3.3 Como escrever prompts eficazes (recomendações)](/content-creation-flows/writing-effective-prompts-recommendations)
- [4.7.3 Tags HTML permitidas para geração de texto com IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
- [4.9.1 Como criar um Flow de conteúdo para categorias](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels)
