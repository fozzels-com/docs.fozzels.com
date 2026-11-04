---
title: '4.11.3. Workflows. Lição 3: Verificação automática com IA e regeneração'
sidebar_position: 32
slug: /content-creation-flows/workflows-lesson-3-ai-check-and-regeneration
description: >-
  Deixe a IA verificar cada texto gerado antes que ele chegue à sua loja.
  Quando um texto não pode ser usado, o Fozzels diz ao modelo o que estava
  errado e gera o texto de novo automaticamente.
---

Deixe a IA verificar cada texto gerado antes que ele chegue à sua loja. Quando um texto não pode ser usado, o Fozzels diz ao modelo o que estava errado e gera o texto de novo automaticamente.

Às vezes um modelo de IA escreve algo que você não pode usar: um placeholder, um comentário como "Aqui está a sua descrição", um texto no idioma errado ou sobre o produto errado. Com uma verificação com IA no seu workflow, o Fozzels encontra esses textos para você e gera tudo de novo automaticamente, então você só revisa o que realmente precisa de uma pessoa.

Esta lição continua a partir de [4.11.1. Lição 1: Primeiros passos com Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) e [4.11.2. Lição 2: Combinando blocks em um workflow](/content-creation-flows/workflows-lesson-2-combining-blocks/). Se você ainda não leu, comece por elas.

## Como funciona, em resumo

1. Seu flow gera um texto, como sempre.
2. Um segundo modelo de IA lê o texto e verifica se ele pode ser usado.
3. Se o texto passar, nada muda: ele segue para revisão ou sincronização, conforme configurado no seu flow.
4. Se o texto não passar, o Fozzels gera o texto de novo e diz ao modelo o que estava errado (o "feedback").
5. O novo texto é verificado de novo. Isso se repete até o texto passar ou até atingir o número máximo de regenerações.
6. Se o texto ainda não passar depois da última tentativa, ele é sinalizado como suspeito com o motivo, para que você mesmo possa corrigir.

## Os dois novos blocks

| Block | Tipo | O que faz |
| --- | --- | --- |
| **AI validation fails** | Condição | Pede a um modelo de IA que verifique o texto gerado. **Yes** = o texto tem um problema, **No** = o texto está ok. |
| **Regenerate with feedback** | Ação | Gera o texto de novo em segundo plano e envia ao modelo os problemas encontrados, para que ele possa evitá-los. |

Use os dois juntos em um único block: a condição **AI validation fails** na seção **Conditions** e a ação **Regenerate with feedback** na seção **Actions**.

## O que a verificação com IA procura

A verificação considera um texto inutilizável quando:

| Problema | Exemplo |
| --- | --- |
| Não é conteúdo de verdade: em vez do texto esperado, a IA devolveu algo feito para outra finalidade, ou existe outra incompatibilidade clara | Uma recusa, uma pergunta de volta, "lorem ipsum", "[Product name]", uma tag de template vazia |
| A IA está conversando | "Aqui está a descrição:", "Me avise se precisar de alterações", raciocínio visível |
| Não combina com o atributo | Uma descrição completa escrita como título |
| Repete o nome do atributo | "Meta description: ..." |
| Está no idioma errado | Texto em inglês em uma store view em alemão |
| É sobre outro produto | Um texto sobre fones de ouvido para um case de fones de ouvido |
| Para no meio da frase | O texto está cortado |

A verificação **não** avalia estilo, tom, tamanho ou formatação, e nunca reescreve o seu texto. Para limites de tamanho ou substituição de palavras, use os blocks das Lições 1 e 2.

:::note
A verificação vê o produto, o texto gerado, o valor anterior do atributo e o idioma da sua store view. Ela **não** vê o seu prompt. Então, se o atributo tinha um título normal antes e o novo valor é "lorem ipsum" (mesmo que o seu prompt tenha pedido exatamente isso), a verificação dá o feedback de que o resultado não parece um título normal.
:::

## Passo 1. Crie o workflow

1. No menu lateral, em **AI Flows**, abra **Workflows**.
2. Clique em **Create workflow**.
3. Dê ao workflow um nome claro, por exemplo "AI check".
4. Adicione um block e dê um título a ele, por exemplo "AI check validation".

![O item Workflows no menu AI Flows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/01-workflows-menu.png)

![O botão Create workflow na página Workflows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/02-create-workflow-button.png)

## Passo 2. Configure o block

1. Na seção **Conditions**, clique em **Add condition** e escolha **AI validation fails**. Essa condição não tem configurações.
2. Na seção **Actions**, clique em **Add action** e escolha **Regenerate with feedback** no campo **Action**.
3. Defina **Maximum regenerations**: quantas vezes o Fozzels pode gerar o texto de novo. O padrão é 2 e o máximo é 3.
4. Clique em **Apply**.

![Escolhendo a ação Regenerate with feedback na janela Edit block](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/03-regenerate-with-feedback-action.png)

![O campo Maximum regenerations e o botão Apply](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/04-maximum-regenerations.png)

:::tip
Para testar, defina **Maximum regenerations** como 1. Você vê o resultado final mais rápido e gasta menos.
:::

## Passo 3. Atribua o workflow a um flow

1. Abra o seu content flow.
2. No campo **Workflows**, selecione o seu workflow.
3. **Salve o flow.** O workflow só é executado depois que o flow é salvo.

![Selecionando o workflow no campo Workflows de um content flow](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/05-assign-workflow-to-flow.png)

Se o seu flow também tiver outros workflows (por exemplo "Replace text" ou "Truncate"), você pode combiná-los. Os workflows são executados na ordem em que foram atribuídos.

## Passo 4. Verifique o resultado

Gere textos no seu flow. Para cada produto, acontece uma de três coisas:

**O texto passa na primeira vez.** Nada de especial acontece. O texto segue normalmente.

**O texto não passa, mas passa depois de uma regeneração.** Enquanto o Fozzels gera o texto de novo, ele aparece como suspeito com o motivo "Did not pass AI validation and is being generated again: ...". Isso leva de alguns segundos a alguns minutos. Quando o novo texto passa, o sinalizador é removido e o novo texto substitui o antigo.

**O texto não passa nenhuma vez.** Depois da última regeneração, o texto continua suspeito com o motivo, por exemplo: "Did not pass AI validation after 2 generation(s): The Title value "All-Mountain Snowboard" is in English, not German as required." Leia o motivo e depois edite o texto você mesmo, ou altere o prompt e gere de novo.

Você pode acompanhar cada tentativa no [Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/) do produto: cada geração aparece como uma revisão própria.

:::note
O motivo só é mantido quando o texto não passa no final. Quando uma regeneração passa, o motivo é removido, e o histórico mostra a versão anterior sem motivo.
:::

## Outras mensagens que você pode ver

| Mensagem | O que significa | O que fazer |
| --- | --- | --- |
| AI validation could not check this value, so it is held for review. | A verificação não pôde ser executada, por exemplo por causa de um erro temporário. | Revise o texto você mesmo. |
| AI validation stopped because your balance is too low, so this value was not validated. | Seu saldo acabou. | Recarregue o seu saldo e gere de novo. |
| Did not pass AI validation. It was not generated again because the flow, its workflows or the item changed in the meantime. | Algo mudou enquanto o texto esperava uma regeneração. | Revise o texto ou gere de novo. |

## Custos

- Cada verificação com IA é uma pequena chamada paga. Ela custa muito menos que uma geração.
- Cada regeneração custa o mesmo que uma geração normal.
- Então um produto pode custar no máximo: 1 geração + o número máximo de regenerações + uma verificação para cada tentativa.

Escolha o número máximo de regenerações pensando nisso. Para a maioria dos flows, 1 ou 2 é suficiente.

## Regras para lembrar

| Regra | O que significa para você |
| --- | --- |
| Use os dois blocks juntos | AI validation fails encontra o problema, Regenerate with feedback corrige |
| A verificação não vê o seu prompt | Ela avalia se o texto pode ser usado na sua loja, não se ele segue todas as instruções |
| Estilo, tom e tamanho não são verificados | Para isso, use Replace text, Truncate ou Mark suspicious |
| No máximo 3 regenerações | Depois disso, o texto chega até você como suspeito |
| Cada verificação e cada regeneração são cobradas | Mantenha o máximo baixo |
| Salve o flow depois de atribuir o workflow | Caso contrário, o workflow não é executado |

:::tip
Teste o workflow primeiro em 2–3 produtos. Confira o histórico e os motivos e depois ative para o flow inteiro.
:::

## Mantenha o controle do seu conteúdo

Com uma verificação com IA nos seus workflows, cada texto gerado é verificado antes de chegar à sua loja, e textos inutilizáveis são corrigidos automaticamente. Você dedica o seu tempo apenas aos textos que realmente precisam de você, e o Fozzels cuida do resto. Assuma o controle total do seu conteúdo com o Fozzels.

## Precisa de ajuda com a configuração?

Se você precisar de ajuda para configurar workflows personalizados, fale com o seu gerente de conta ou com o suporte do Fozzels.
