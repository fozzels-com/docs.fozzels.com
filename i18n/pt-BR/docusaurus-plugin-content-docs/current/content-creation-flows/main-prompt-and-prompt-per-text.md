---
title: '4.3.4 Prompt principal e Prompt por texto: como o Fozzels envia o seu prompt'
sidebar_position: 11.5
slug: /content-creation-flows/main-prompt-and-prompt-per-text
description: >-
  Cada solicitação à IA tem duas partes: o prompt principal, que é o mesmo para
  todos os produtos, e o prompt por texto, que contém os dados do produto. O que
  vai em cada parte, por quê e como migrar um Flow existente.
---

O Fozzels envia à IA um prompt para cada produto. Esse prompt tem duas partes:

- o **prompt principal**, que contém as regras do Flow inteiro e é o mesmo para todos os produtos, e
- o **prompt por texto**, que contém a tarefa de um campo, com os dados deste produto.

O Fozzels envia o prompt principal à IA como uma *instrução de sistema*: as ordens permanentes que a IA mantém em mente enquanto faz a tarefa. Este artigo explica o que vai em cada parte, por que isso importa e como migrar um Flow existente.

## As duas partes em resumo

| | Main prompt (Prompt principal) | Prompt per text (Prompt por texto) |
|---|---|---|
| **O que é** | As regras que valem para todos os textos do Flow | A tarefa de um campo |
| **Conteúdo típico** | Quem escreve, para quem, em qual tom, os princípios de neuromarketing, as palavras-chave, o que nunca mencionar, as regras de verificação, as suas próprias instruções permanentes | Tamanho, estrutura, o bloco de confiança, os links internos e a instrução com os atributos do produto |
| **Dados do produto** | Não permitidos. O texto deve ser igual para todos os produtos | Sim: atributos, condições e snippets |
| **Onde você edita** | Etapa 3 do assistente do Flow (**Main prompt**) ou o card **Main prompt** na página do Flow | Etapa 4 do assistente do Flow (**Prompt per text**), uma aba para cada campo |
| **Envio** | Uma vez, antes dos prompts dos campos | Para cada campo, com os dados deste produto |

:::note
Alguns artigos e capturas de tela ainda usam os nomes antigos das etapas: a etapa 3 se chamava **Enrich the text** e a etapa 4 se chamava **Fields**. O card da página do Flow se chamava **System prompt**. São as mesmas etapas e o mesmo card.
:::

## Por que duas partes?

- **A IA segue melhor as suas regras.** Os modelos de IA dão mais peso a uma instrução de sistema do que a uma frase no meio de um prompt longo. O tom, as palavras a evitar e a forma de tratamento são mantidos de forma mais consistente em todos os seus produtos.
- **Os dados do produto não podem anular as suas regras.** Um texto em um campo do produto, como uma nota do fornecedor que diz "ignore as instruções acima", fica no prompt por texto. Ele não muda as regras do prompt principal.
- **Mais rápido e mais barato em Flows grandes.** O prompt principal é igual, palavra por palavra, para cada produto. Os provedores de IA podem reaproveitar uma parte de uma solicitação que já viram, o que deixa a solicitação mais rápida e pode reduzir o custo.

## O que vai no prompt principal

Coloque no prompt principal tudo o que vale para **todos** os textos do Flow:

- **Role of the AI**, **Target audience** e **Tone of voice**
- **Neuromarketing principles**
- **Keywords**
- **Do not mention**: palavras e assuntos que nunca devem aparecer no texto
- **Guidelines and check rules**, as regras padrão do Fozzels e as suas próprias regras
- **Your own instructions**, com as suas palavras, por exemplo "Trate sempre o leitor por *você*" ou "Enviamos em 24 horas, nunca prometa uma entrega mais rápida"

Na etapa 3, você liga esses blocos e preenche cada um. O Fozzels escreve o prompt principal a partir deles. As fontes que você define na etapa 3 (**Attributes from your store**, **Look at photos** e **Search the internet**) são diferentes para cada produto. Por isso, o Fozzels as envia com o prompt por texto. Abaixo dos blocos, em **Your main prompt**, você vê o resultado e também pode editá-lo à mão.

### Sem dados do produto no prompt principal

O prompt principal deve ser igual para todos os produtos. Por isso, você não pode usar dados do produto nele:

- O editor do prompt principal não tem o painel **Attributes** nem o **Preview**. Um preview seria igual para todos os produtos. Em vez disso, cada bloco mostra o texto que a IA lê para ele.
- Snippets que leem dados do produto e snippets com condições não estão disponíveis ali. Se um snippet assim já estiver em um prompt principal e você adicionar dados do produto a ele, o Fozzels mostra a mensagem *"Este snippet está no prompt principal de …. O prompt principal é o mesmo para todos os produtos, então ali o snippet não pode ler o produto. Tire-o primeiro desses prompts principais ou salve sua alteração como um novo snippet."* Tire o snippet desses prompts principais primeiro ou salve a sua alteração como um novo snippet.

Tudo o que depende do produto vai no prompt por texto.

## O que vai no prompt por texto

O prompt por texto é a tarefa de um campo. Na etapa 4, cada campo do Flow tem uma aba com:

- o **tamanho** do texto,
- a **estrutura**: as seções, a ordem delas e os títulos,
- o **bloco de confiança** e os **links internos**, nos campos que os aceitam,
- a **Instruction for [field]**: o que a IA deve escrever neste campo, com os atributos e as condições do produto.

O prompt principal vale para todos os campos. Por isso, você não repete aqui a função, o tom nem as regras. Escreva só o que é especial para este campo, por exemplo *"Escreva uma meta description de no máximo 155 caracteres que cite a marca e o principal benefício."*

O Fozzels adiciona ele mesmo as instruções técnicas ao prompt por texto: o formato da resposta, as opções que um campo de seleção permite e o tamanho máximo do campo. Você não precisa escrevê-las.

## Onde editar o prompt principal

- **Em um Flow novo:** etapa 3, **Main prompt**. Um Flow novo começa com o prompt principal do seu [Brand Profile](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/#brand-profile) padrão.
- **Em um Flow existente:** na página do Flow, o card **Main prompt** mostra o prompt principal como a IA o lê. Clique em **Change** para editá-lo. Só o prompt principal é salvo. Os prompts por texto continuam como estão.
- **Brand Profiles:** na etapa 3, clique em **Load brand profile** para usar um perfil salvo ou em **Save as brand profile** para guardar o prompt principal deste Flow para outros Flows. O Flow recebe uma cópia do perfil. Se você mudar o perfil depois, o Fozzels não altera os seus Flows existentes.

## Flows existentes

Você não precisa fazer nada. Os Flows que você criou antes desta mudança continuam funcionando:

- O prompt principal de um Flow mais antigo começa vazio, e o prompt dele continua onde estava.
- Os blocos do Flow inteiro que já estão no prompt, como a função, o público ou o tom, são enviados automaticamente com o prompt principal.
- O texto que você mesmo digitou continua no prompt por texto, exatamente onde você o escreveu. O Fozzels não move as suas próprias frases, porque uma frase pode significar outra coisa longe das frases vizinhas.

Para aproveitar tudo, mova você mesmo as suas regras permanentes para o prompt principal.

### Migrando um Flow existente

1. Abra o Flow e leia o prompt dele. Marque as frases que valem para **todos** os produtos: a persona, a voz da marca, o público, a forma de tratamento, as palavras a evitar.
2. Na página do Flow, clique em **Change** no card **Main prompt**.
3. Adicione essas regras com os blocos (função, público, tom, do not mention, suas próprias regras) ou digite-as como instruções próprias. Salve.
4. Apague as mesmas frases do prompt de cada campo, para a IA não recebê-las duas vezes.
5. Teste o Flow em alguns produtos reais e compare os textos com os resultados anteriores.

**Exemplo.** Um prompt que continha tudo:

> Você é redator de uma marca premium de calçados. Escreva para mulheres de 30 a 50 anos que valorizam o conforto. Nunca mencione preços nem descontos. Use sempre "você".
> Escreva uma descrição de produto de cerca de 120 palavras para **Name**. Mencione o material **Material** e a cor **Colour**.

Depois da migração:

- **Prompt principal:** *Você é redator de uma marca premium de calçados. Escreva para mulheres de 30 a 50 anos que valorizam o conforto. Nunca mencione preços nem descontos. Use sempre "você".*
- **Prompt por texto (Description):** *Escreva uma descrição de produto de cerca de 120 palavras para* **Name**. *Mencione o material* **Material** *e a cor* **Colour**.

## Bom saber

- **Sem instruções duplicadas.** Se o prompt de um campo ainda tiver um bloco que o prompt principal já tem, por exemplo um segundo tom de voz, o Fozzels envia esse bloco só uma vez, a partir do prompt principal.
- **Vários campos em um Flow.** Todos os campos são gerados em uma única solicitação à IA para cada produto e compartilham o prompt principal. Assim, a função, o público e as regras valem automaticamente para os campos extras.
- **Veja o que foi enviado.** Na lista de conteúdo gerado, o prompt de cada texto mostra as duas partes, com o prompt principal primeiro.

## Artigos relacionados

- [4.1.2. Criando um Content Flow: o passo a passo em seis etapas](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.3.2 Configuração e uso do prompt: o novo editor de prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)
- [4.3.3. Escrevendo Prompts Eficazes (Recomendações)](/content-creation-flows/writing-effective-prompts-recommendations/)
