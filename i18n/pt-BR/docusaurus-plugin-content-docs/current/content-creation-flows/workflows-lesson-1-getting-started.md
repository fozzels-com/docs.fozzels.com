---
title: '4.11.1. Workflows. Lição 1: Primeiros passos com Workflows'
sidebar_position: 30
slug: /content-creation-flows/workflows-lesson-1-getting-started
description: >-
  Os workflows verificam e editam os resultados gerados automaticamente:
  substituem palavras, cortam o texto até um limite de tamanho ou sinalizam
  um resultado para revisão manual antes que ele chegue à loja. Construa seu
  primeiro workflow e veja como ele se comporta.
---

Os workflows verificam e editam os resultados gerados automaticamente: eles podem substituir palavras, cortar o texto até um limite de tamanho ou sinalizar um resultado para revisão manual antes que ele chegue à loja. Você define as regras uma vez, e elas se aplicam a todo novo resultado.

Nesta lição, você vai construir seu primeiro workflow, ver como ele se comporta e aprender alguns cuidados a tomar pelo caminho.

## O exemplo com o qual vamos trabalhar

Nosso flow gera uma descrição curta de entrega para um cake:

> We are delighted to deliver your chosen **cake** directly to the address you provide… Each Festive **Cake** will arrive in beautiful gift packaging… every celebration deserves a delicious **CAKE**…

A palavra "cake" aparece três vezes, em três variações de maiúsculas e minúsculas diferentes. Guarde isso, vai ser importante mais adiante.

## Etapa 1. Crie um workflow

Vá até **Home → Workflows** e clique em **Create workflow**.

![Página de Workflows com o botão Create workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/01-workflows-page-create-workflow.png)

O editor abre com o nome padrão **New workflow 1**. Dê um nome claro ao workflow desde já: quando você tiver vários, nomes genéricos são fáceis de confundir.

![Editor de workflow vazio com o botão Create block](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/02-empty-workflow-editor.png)

> **Observação:** o alternador **Active** vem ativado por padrão. Um workflow não tem efeito até ser atribuído a um flow, mas, uma vez atribuído, um workflow ativo passa a processar os resultados.

## Etapa 2. Configure um block

Clique em **Create block**. Um block aparece no canvas com duas partes:

- **IF:** as condições sob as quais o block é executado.
- **THEN:** as ações que ele executa.

![Um novo block vazio no canvas](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/03-new-empty-block.png)

Clique no ícone de lápis para abrir as configurações do block.

![Janela Edit block vazia](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/04-empty-edit-block-window.png)

### Condições

Cada condição tem três partes: o que verificar, um operador e um valor. Há duas coisas que você pode verificar:

![Tipos de condição: Length e Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/05-condition-types.png)

**Length** é o tamanho do texto em caracteres, espaços incluídos. Operadores: greater than, greater or equal, less than, less or equal, equals, not equal.

![Operadores de Length](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/06-length-operators.png)

**Text** verifica o conteúdo. Operadores: contains, does not contain, begins with, ends with, is empty, is not empty.

![Operadores de Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/07-text-operators.png)

Com mais de uma condição, escolha a lógica:

- **All conditions:** todas as condições precisam ser atendidas (AND).
- **Any condition:** uma já é suficiente (OR).

### Ações

Há três ações disponíveis. As descrições aparecem diretamente no dropdown.

![As três ações disponíveis](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/08-available-actions.png)

- **Replace text:** substitui uma palavra ou frase. Deixe **Replace with** vazio para removê-la. Tags HTML não são afetadas.
- **Truncate:** corta o texto até um número máximo de caracteres.
- **Mark suspicious:** sinaliza o resultado para revisão manual.

Um block pode conter várias ações. Elas são executadas de cima para baixo.

### Seu primeiro block

**Tarefa:** se o texto contiver "Happy holidays!", substitua "cake" por "festive cake".

1. **Name:** `cake -> festive cake`
2. **Conditions → Add condition:** `Text` · `contains` · `Happy holidays!`
3. **Actions → Add action:** `Replace text`, Find `cake`, Replace with `festive cake`, **All matches** ativado (substitui todas as ocorrências, não só a primeira).
4. Clique em **Apply**.

![Configurações do block para o primeiro exemplo](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/09-first-block-settings.png)

O block no canvas agora mostra um resumo das suas condições e ações. Verifique se **Active** está ativado e clique em **Save**.

![Block salvo com resumo, alternador Active e botão Save](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/10-saved-block-summary.png)

## Etapa 3. Atribua o workflow a um flow

Um workflow salvo não faz nada até ser vinculado a um flow.

1. Abra seu flow e vá até a aba **Automation** (a 4ª aba).
2. Na parte inferior, na seção **Workflows**, escolha seu workflow no dropdown.
3. Clique em **Save** para salvar o flow.

![Seção Workflows de um flow com um workflow atribuído](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/11-flow-workflows-section.png)

Gere um novo resultado e abra-o a partir da **Batch List** (a tabela de resultados gerados).

## Etapa 4. Verifique o resultado

O texto que contém "Happy holidays!" foi alterado:

![Resultado com "festive cake" e "Festive festive cake"](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/12-result-festive-festive-cake.png)

Repare em **"Festive festive cake"**. O modelo escreveu "Festive Cake" com C maiúsculo, e sem **Match case** a substituição ignora maiúsculas e minúsculas, então "Cake" também foi substituído.

**Correção:** ative **Match case**. Assim, apenas "cake" em minúsculas é substituído, e "Festive Cake" permanece como está.

> **Atenção:** o Replace text não analisa o contexto, ele apenas procura correspondências. Se o modelo já tiver escrito "delicious cake", substituir `cake` por `delicious cake` resulta em "delicious delicious cake". Pense em como sua substituição vai se comportar em textos diferentes.

## Etapa 5. Como os resultados são processados

Se você alterar as configurações de um workflow e reabrir um resultado que ele já processou, o resultado permanece o mesmo. É assim que o sistema funciona:

- Workflows processam apenas resultados **novos e regenerados**.
- Cada resultado é processado por um determinado workflow **apenas uma vez**. Editar seus blocks não afeta os resultados que ele já processou.
- As alterações são **permanentes**. Remover um workflow de um flow não restaura o texto original.

Para aplicar novas configurações, regenere o resultado.

> **Dica:** teste novos workflows primeiro em um flow de teste. Alterações em resultados já processados não podem ser desfeitas, apenas regeneradas.

## Etapa 6. Múltiplos workflows

Para corrigir textos em que aparece "Festive festive", você pode adicionar um segundo workflow. Este também sinaliza o resultado para revisão:

- **Conditions:** `Text` · `contains` · `Festive festive`
- **Actions:**
    1. `Replace text`: `Festive festive` → `Festive`, **All matches** e **Match case** ativados
    2. `Mark suspicious` com um motivo para quem for revisar

![Workflow de correção com Replace text e Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/13-fix-workflow.png)

Você pode atribuir qualquer quantidade de workflows a um flow. Eles são executados **de cima para baixo**, e cada um recebe o texto já alterado pelo anterior. Reordene-os arrastando a alça ou usando as setas.

![Quatro workflows atribuídos a um flow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/14-four-workflows-assigned.png)

Ordem recomendada:

1. Workflows que alteram o texto.
2. Workflows que corrigem efeitos colaterais dos anteriores. Uma correção precisa ser executada **depois** do workflow que causa o problema.
3. Mark suspicious pode ficar em qualquer posição: ele não interrompe o processamento.

Se vários workflows marcarem um resultado como suspeito, é exibido o motivo do **primeiro** deles na lista.

## Etapa 7. Truncate com revisão manual

**Tarefa:** substitua "cake" por "candies", limite o texto a 110 caracteres e mantenha o texto reduzido fora da loja até que alguém o revise.

- **Conditions** (**All conditions**):
    - `Text` · `contains` · `cake`
    - `Length` · `greater than` · `100`
- **Actions**, nesta ordem:
    1. `Replace text`: `cake` → `candies`, **All matches** e **Match case** ativados
    2. `Truncate`: `110`, **Keep whole words** ativado
    3. `Mark suspicious`: motivo `Truncated to 110 characters`

![Block com Replace text, Truncate e Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/15-replace-truncate-mark-suspicious.png)

> **Por que a ordem importa:** "candies" é mais longo do que "cake". Se você truncar primeiro e substituir depois, o texto pode ultrapassar o limite novamente. Substitua primeiro e depois trunque.

**Resultado:**

![Resultado truncado, 109 caracteres](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/16-truncated-result.png)

O texto tem 109 caracteres e nenhuma palavra é cortada ao meio. Palavras unidas por hífen, como "door-complete", contam como uma única palavra. Nenhum "…" é adicionado ao final. A frase, porém, fica incompleta, por isso o Mark suspicious faz parte deste block.

Um resultado suspeito **não é sincronizado com a loja** até que um usuário o edite ou regenere. Na Batch List, um ícone "!" aparece ao lado de **Sync Now**, e o motivo é exibido ao passar o mouse:

![Motivo suspeito exibido ao lado de Sync Now](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/17-suspicious-reason-sync-now.png)

Dentro do resultado, um aviso **Synchronization with integration is disabled** mostra o motivo:

![Aviso de sincronização desativada com o motivo do workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/18-sync-disabled-warning.png)

> **As palavras suspeitas da integração vêm primeiro.** A integração tem sua própria lista de [palavras e padrões suspeitos](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control). Se o texto contiver uma delas, o resultado recebe o motivo do sistema "Completion looks suspicious, possible AI recommendations found", e os motivos do workflow não são exibidos. A palavra encontrada é destacada em laranja.

![Aviso de suspeita do sistema com uma palavra destacada](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/19-system-suspicious-warning.png)

## Referência rápida

| Configuração | Como funciona |
| --- | --- |
| All / Any condition | Todas as condições precisam ser atendidas / uma já é suficiente |
| Length | Tamanho do texto em caracteres, espaços incluídos |
| Replace text | Deixar Replace with vazio remove a correspondência; tags HTML não são afetadas |
| All matches | Desativado: apenas a primeira correspondência é substituída |
| Match case | Desativado: a substituição ignora maiúsculas e minúsculas |
| Truncate | Nenhum "…" é adicionado; Keep whole words mantém as palavras intactas |
| Mark suspicious | Bloqueia a sincronização com a loja; não interrompe outras ações ou workflows |
| Several suspicious marks | É exibido o motivo do primeiro workflow |
| Integration suspicious words | Têm prioridade sobre os motivos do workflow |
| Processing | Apenas resultados novos e regenerados, uma vez por workflow; as alterações são permanentes |

## Próximos passos

A próxima lição aborda recursos avançados: ramificações Yes/No e conexão entre blocks, grupos de condições e trabalho com saída em HTML.
