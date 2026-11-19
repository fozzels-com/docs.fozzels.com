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

Acesse [Flows](https://app.fozzels.com/completions/product/rule) e crie um novo Content Flow. Você configura o Flow em seis etapas guiadas:

1. **Store**: selecione a integração, o site e a store view.
2. **What and with what?**: selecione os campos que quer gerar e os produtos.
3. **Enrich the text**: selecione o modelo de IA e monte o prompt com blocos: função, público, tom, fontes, palavras-chave e regras.
4. **Fields**: defina o tamanho, a estrutura e o formato de cada campo.
5. **Test**: gere textos para produtos reais e compare as notas do texto atual e do texto novo.
6. **Launch**: defina o limite diário, a aprovação dos textos novos, as atualizações quando um produto muda e o cooldown entre Flows.

Para uma descrição completa de cada etapa, veja [4.1.2. Criando um Content Flow: o passo a passo em seis etapas](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

:::warning
Se **If a product changes later?** estiver ativado, não use como fonte no prompt o campo em que o Flow escreve. Senão, o Fozzels pode gerar o texto de novo sem parar (recursão).
:::

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

**Launch flow** (etapa 6): o Flow processa produtos todos os dias, até o limite diário, até concluir a seleção. Depois, ele pega os produtos novos que se encaixam na seleção.

**Run Now** (o menu **…** na página do Flow): inicia a geração na hora, mesmo quando o Flow já atingiu o limite diário de hoje.

**Generate Now** (a tabela **Test** na página do Flow): gera o conteúdo de um produto na hora.

---

## Ciclo de vida da conclusão

Cada item gerado passa por esses estágios:

| Status | Significado |
|--------|---------|
| **Pending** | Gerado, aguardando revisão |
| **Confirmed** | Aprovado por você, pronto para sincronizar |
| **Synchronized** | Empurrado com sucesso para a loja |
| **Suspicious** | Contém conteúdo sinalizado — exige revisão manual antes da sincronização |

Com **Straight to my shop** (etapa 6) — conteúdo limpo é confirmado e empurrado automaticamente. Conteúdo suspeito sempre aguarda revisão manual.

Com **I approve every text first** (etapa 6) — todo conteúdo aguarda você revisar e confirmar antes de sincronizar.

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
| Not confirmed | Confirme a completion (ou selecione **Straight to my shop** na etapa 6 do Flow) |
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
