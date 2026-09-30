---
title: Content Flows — Guia Completo
sidebar_position: 28
slug: /content-creation-flows/content-flows-complete-guide
description: Content Flows são o recurso de automação central do Fozzels. Este guia cobre criação de Flow, modelos de prompt, execução, ciclo de vida das conclusões, conteúdo suspeito e por que o conteúdo às vezes não será sincronizado.
keywords:
- fluxo de conteúdo
---

Content Flows são o recurso de automação central do Fozzels. Um Flow é uma regra que gera automaticamente conteúdo de IA para um atributo de produto selecionado e escreve o resultado de volta na sua loja.

## O que um Flow faz

1. Filtra produtos por suas condições (por exemplo, "description is empty")
2. Envia dados de produtos para a IA com seu prompt
3. Armazena o conteúdo gerado como uma "completion"
4. Empurra o conteúdo para seu atributo de loja

---

## Criando um Flow

Acesse [Flows](https://app.fozzels.com/completions/product/rule) → **Create Flow**

### Etapa 1 — Loja e atributo de destino

- Selecione a loja cujos produtos deseja processar
- Dê um nome ao Flow
- Selecione o **target attribute** — o atributo que receberá o conteúdo gerado por IA
  - Deve ter a flag **Mutable** habilitada em Integration → Attributes

### Etapa 2 — Provedor de IA

- Escolha o fornecedor de IA: OpenAI GPT-4o, Google Gemini 2.5 Flash, ou Anthropic Claude
- Selecione um modelo específico
- Configure parâmetros de modelo, se necessário

### Etapa 3 — Produtos e prompt

- **Conditions** — construtor de consultas visuais para filtrar quais produtos este Flow processa
  - Exemplo: "description is empty AND category equals Electronics"
  - Deixe vazio para processar todos os produtos na loja
  - Uma visualização de contagem de produtos mostra quantos produtos correspondem
- **Prompt** — a instrução enviada para a IA, escrita no [editor de prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor). Os dados do produto entram como **atributos**: digite `/` no editor, ou clique ou arraste um atributo do painel de atributos. Cada atributo é substituído pelo valor do próprio produto.
  - Exemplo: _Write a product description for_ **Name** _(SKU:_ **SKU**_) in category_ **Category**, em que as partes em negrito são atributos
  - Um atributo com um rótulo ao lado (_Brand:_ **Brand**) deve ficar em uma **condição** (um bloco if): a linha inteira é deixada de fora quando o produto não tem valor, então nenhuma linha vazia chega à IA

### Etapa 4 — Configurações de automação

- **Active** toggle — habilitar/desabilitar o Flow
- **Batch size** — quantos produtos processar por execução (padrão 10)
- **Automation** toggle — quando ON, conteúdo confirmado é automaticamente empurrado para sua loja sem revisão manual
- **Regenerate on attribute change** — re-executar quando atributos de origem são atualizados (⚠ pode causar recursão se o atributo de destino também for uma origem)
- **Prevent overlapping generation** — cooldown entre regenerações por produto:
  - **Inherit** — use cooldown global das configurações da conta
  - **Override** — defina um cooldown customizado apenas para este Flow
  - **Turn off** — sempre regenere independentemente de execuções anteriores

---

## Dicas de modelo de prompt

Insira os dados do produto como atributos a partir do painel de atributos, em vez de digitá-los: um atributo é substituído pelo valor de cada produto.

**Atributo ou condição:**

- Um **atributo simples** fica sozinho dentro de uma frase. Use-o para atributos que quase todos os produtos têm (a taxa de preenchimento no painel de atributos mostra quantos têm).
- Uma **condição** (um bloco if) contém uma linha inteira, como _Brand:_ **Brand**, e a deixa de fora quando o produto não tem valor. Use-a para tudo que tenha um rótulo ou outro texto ao redor do atributo, para que a IA nunca receba uma linha _Brand:_ vazia.

Seja específico sobre:

- Formato e comprimento ("150–200 words")
- Idioma ("in English")
- Tom ("professional but friendly")
- O que evitar ("do not mention competitors")

**Exemplo para descrição de produto.** As palavras em negrito são atributos. O nome está preenchido em todos os produtos, então fica como atributo simples; cada uma das outras linhas com rótulo fica em uma condição:

> Write a compelling product description (150–200 words) in English.
>
> Product name: **Name**
>
> _if Brand_ → Brand: **Brand**
>
> _if Category_ → Category: **Category**
>
> _if Short Description_ → Current short description: **Short Description**
>
> Focus on benefits, not just features. Use a professional but friendly tone.

**Formatando a saída.** O prompt em si não tem formatação. Para ter títulos, listas ou texto em negrito no conteúdo gerado, peça isso em palavras, por exemplo _Comece com um título `<h2>` com o nome do produto, depois dois parágrafos curtos._ Se a saída deve conter HTML, habilite as tags relevantes em [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Executando um Flow

**Run Now** — processa imediatamente até 10 produtos. Use isto para testar ou para pequenos lotes.

**Plan & Close** — coloca em fila o lote completo para processamento em segundo plano. Use isto para execuções em massa.

---

## Ciclo de vida da conclusão

Cada item gerado passa por esses estágios:

| Status | Significado |
|--------|---------|
| **Pending** | Gerado, aguardando revisão |
| **Confirmed** | Aprovado por você, pronto para sincronizar |
| **Synchronized** | Empurrado com sucesso para a loja |
| **Suspicious** | Contém conteúdo sinalizado — exige revisão manual antes da sincronização |

Com **Automation ON** — conteúdo limpo é confirmado e empurrado automaticamente. Conteúdo suspeito sempre aguarda revisão manual.

Com **Automation OFF** — todo conteúdo aguarda você revisar e confirmar antes de sincronizar.

---

## Revendo conclusões

Acesse um Flow → **View Completions** para ver todo o conteúdo gerado.

Por item você pode:

- **Edit** o texto gerado manualmente
- **Regenerate** — peça à IA para gerar novamente
- **Confirm** — aprovar conteúdo para sincronização
- **Synchronize** — empurrar para sua loja
- **View revisions** — ver histórico de edição completo e diff entre versões

**Ações em lote:** selecione vários itens → Confirm & Sync, Regenerate, ou Push.

---

## Conteúdo suspeito

Fozzels sinaliza automaticamente conteúdo que parece errado:

- Artefatos de IA: "Sorry, I can't...", "As an AI...", "Note:", "Please"
- Valores vazios
- HTML com dupla codificação (`&lt;`, `&gt;`)
- Sintaxe Markdown em um campo não-markdown
- Suas palavras suspeitas customizadas (configure em [Settings → Flow Settings](https://app.fozzels.com/user/settings/flow))

Conteúdo sinalizado mostra exatamente por que foi sinalizado. Você pode:

- Editar e corrigir
- Regenerar
- Override e aprovar mesmo assim (se for um falso positivo)

---

## Por que o conteúdo não sincroniza (push bloqueado) {#why-content-wont-sync-push-blocked}

| Motivo | Solução |
|--------|-----|
| Flow is inactive | Habilite o toggle Active no Flow |
| Not confirmed | Confirme a completion (ou habilite Automation) |
| Suspicious content | Revise e aprove, ou edite e re-salve |
| Product deleted from store | Nada a fazer — produto não existe mais |
| Store/integration inactive | Habilite a loja ou integração |
| Attribute not mutable | Habilite a flag Mutable em Integration → Attributes |

---

## Gerenciamento de Flow

- **Duplicate** — copie um Flow para a mesma loja ou uma diferente
- **Archive** — oculte o Flow da lista principal; dados são preservados e podem ser restaurados
- **Delete** — remoção permanente
- **Obsolete** — quando um Flow é clonado devido a mudanças estruturais (atributo de destino ou condições mudaram), a versão antiga se torna obsoleta; seu histórico de conclusão é preservado

### Aviso de mudanças estruturais

Se você mudar o **target attribute** ou **conditions** em um Flow que já tem conclusões, Fozzels avisará e oferecerá **"Obsolete and Duplicate"** — isto cria um Flow novo com suas mudanças, preservando o histórico do antigo.

---

## Aviso de recursão

Disparado quando o mesmo atributo aparece como:

- Um atributo em seu prompt
- O atributo de destino de saída

Isto cria um loop infinito — cada geração sobrescreve a entrada para a próxima execução.

Solução:

- Remova esse atributo do prompt
- OU desabilite "Regenerate on attribute change"

---

## Problemas comuns

**Nenhum produto corresponde ao Flow**

- Verifique suas condições — tente removê-las temporariamente para ver todos os produtos
- Verifique se os atributos usados nas condições têm a flag **Filterable** em Integration → Attributes

**Saída de IA vazia**

- Verifique se os atributos de origem têm valores para seus produtos
- Verifique se os atributos referenciados no prompt têm a flag **Filterable**
- Torne o prompt mais específico

**Conteúdo não está sendo empurrado para a loja**

- Verifique os [motivos de bloqueio de push](#why-content-wont-sync-push-blocked) acima
- Verifique se o toggle Active da integração está ON
- Verifique se o atributo de destino tem a flag **Mutable**

**Cota OpenAI excedida**

- Recarregue em [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing)
- Ou reduza volume diário nas configurações de automação do Flow

**Conteúdo duplicado entre Flows**

- Habilite "Prevent overlapping generation" com um período de cooldown (por exemplo, 7 dias)
- Isto impede que vários Flows regenerem o mesmo produto dentro da janela de cooldown
