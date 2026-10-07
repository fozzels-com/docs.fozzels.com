---
title: '4.11.2. Workflows. Lição 2: Combinando blocks em um workflow'
sidebar_position: 31
slug: /content-creation-flows/workflows-lesson-2-combining-blocks
description: >-
  Um workflow pode conter vários blocks conectados. O resultado de cada block
  decide qual block é executado em seguida, então um único workflow pode tratar
  textos diferentes de maneiras diferentes.
---

Um workflow pode conter vários blocks conectados entre si. O resultado de cada block decide qual block é executado em seguida, então um único workflow pode tratar textos diferentes de maneiras diferentes.

Esta lição continua a partir de [4.11.1. Lição 1: Primeiros passos com Workflows](/content-creation-flows/workflows-lesson-1-getting-started/). Se você ainda não leu, comece por ela: ela explica as condições, as ações e como os resultados são processados.

## Saídas do block: Yes, No e Always

Todo block tem uma entrada à esquerda e três saídas à direita.

![Um block com sua entrada e as saídas Yes, No e Always](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/01-block-outputs.png)

| Saída | Onde | Leva ao próximo block quando |
| --- | --- | --- |
| **Yes** (azul) | Parte IF | As condições do block são atendidas |
| **No** (laranja) | Parte IF | As condições do block não são atendidas |
| **Always** (cinza) | Parte THEN | As ações do block foram executadas |

Para conectar dois blocks, arraste uma linha do ponto de saída de um block até o ponto de entrada do próximo. Clique duas vezes em uma linha para adicionar uma observação a ela.

## O workflow de exemplo

Nosso workflow tem cinco blocks. Ele substitui "cake" por "festive cake", verifica se há uma palavra repetida, sinaliza textos sem "cake" e adiciona "Christmas" à saudação de fim de ano.

Os blocks estão conectados assim:

| De | Saída | Para |
| --- | --- | --- |
| 1. cake → festive cake | **Yes** | 2. Is festive cake true |
| 1. cake → festive cake | **No** | 3. Is cake false (Mark suspicious) |
| 2. Is festive cake true | **No** | 4. Validated test (Mark suspicious) |
| 4. Validated test | **Always** | 5. Holiday → Christmas Holiday! |

As saídas **Yes** e **Always** do block 2 e as saídas do block 3 não estão conectadas. O que isso significa aparece no Teste 1, abaixo.

## Os blocks um a um

### 1. cake → festive cake

Se o texto contiver "cake", ele é substituído por "festive cake". Match case está ativado, então "Cake" e "CAKE" permanecem como estão. **Yes** leva ao block 2 e **No**, ao block 3.

![Configurações do block 1](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/03-block-1-settings.png)

### 2. Is festive cake true

Verifica se há uma palavra repetida e a corrige. **No** leva ao block 4.

![Configurações do block 2](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/04-block-2-settings.png)

:::note
Nesta captura de tela, a palavra está escrita "fastive". O block 1 escreve "festive", então essa condição nunca é atendida. No seu próprio workflow, use `festive festive cake` e `festive festive` → `festive`.
:::

### 3. Is cake false

Um block sem condições. Ele sinaliza o resultado com o motivo "Cake not found :(". As saídas dele não estão conectadas.

![Configurações do block 3](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/05-block-3-settings.png)

### 4. Validated test

Também sem condições. Ele sinaliza o resultado com o motivo "Checked! Please sync!". **Always** leva ao block 5.

![Configurações do block 4](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/06-block-4-settings.png)

:::note
Mark suspicious bloqueia a sincronização com a loja. Este motivo é apenas um marcador de teste que mostra que o block foi executado. Em um workflow real, escreva um motivo que diga ao revisor o que verificar.
:::

### 5. Holiday → Christmas Holiday!

Se o texto contiver "Happy Holiday!", ele é substituído por "Happy Christmas Holiday!".

![Configurações do block 5](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/07-block-5-settings.png)

## Gere um texto de teste

Para testar o workflow você mesmo, use este prompt no seu flow. Ele gera um texto parecido com o desta lição, terminando com "Happy Holiday!" para que o block 5 tenha algo a substituir.

```text
Write a short, warm, and appealing delivery message for the product. Mention that we will deliver the cake in beautiful gift packaging, together with a personal note, to the address provided by the customer.
The first part of the text should contain approximately 80 characters and describe the cake delivery in a natural, friendly, and elegant way.

Do not use capitalization randomly. Each variation should fit naturally into the sentence and context.
The final sentence must be exactly: "Happy Holiday!"
Keep the message friendly, festive, elegant, warm, and suitable for an online cakes shop.
```

Para o Teste 1, substitua "cake" no prompt por outro produto, por exemplo "sweets", para que o texto não contenha "cake".

## Teste 1: texto sem "cake"

**Caminho:** block 1 → No → block 3 → fim.

![Resultado sem cake, sinalizado com "Cake not found :("](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/08-test-1-result.png)

- O motivo "Cake not found :(" mostra que a ramificação **No** funcionou.
- O block 3 não tem condições, mas a ação dele foi executada. Um **block sem condições executa suas ações**.
- "Happy Holiday!" **não** foi substituído, embora o texto o contenha. As saídas do block 3 não estão conectadas, então o block 5 nunca foi alcançado. **Quando uma saída não está conectada, o processamento para ali.**

## Teste 2: texto com "cake"

**Caminho:** block 1 → Yes → block 2 → No → block 4 → Always → block 5.

![Resultado com festive cake e Happy Christmas Holiday](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/09-test-2-result.png)

- "delicious **festive cake**": o block 1 substituiu a palavra e seguiu pela ramificação **Yes**.
- Não há palavra repetida, então o block 2 seguiu pela ramificação **No**.
- O motivo "Checked! Please sync!" mostra que o block 4 foi executado.
- "Happy **Christmas** Holiday!": o block 5 foi alcançado por meio de **Always** e fez a substituição.

## Regras para lembrar

| Regra | O que significa para você |
| --- | --- |
| Yes / No escolhem o próximo block | Crie caminhos separados para textos que atendem a uma condição e textos que não atendem |
| Always continua depois das ações | Use para seguir para a próxima verificação, qualquer que tenha sido o resultado do block |
| Um block sem condições executa suas ações | Útil para uma etapa final, como um sinalizador de revisão |
| Uma saída não conectada encerra o processamento | Conecte todos os caminhos que devem chegar aos blocks seguintes, ou eles serão ignorados |
| Mark suspicious não interrompe o workflow | Os blocks seguintes continuam sendo executados depois de um sinalizador |

:::tip
Antes de salvar, siga cada caminho no canvas com o dedo: "se o texto tiver X, para onde ele vai em seguida?" Uma linha faltando é o motivo mais comum de um block nunca ser executado.
:::
