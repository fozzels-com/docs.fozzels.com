---
id: '103000390709'
title: '4.7.4 Palavras e Frases Suspeitas: Controle Avançado de Qualidade de Conteúdo'
sidebar_position: 21
slug: /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: >-
  O recurso Suspicious Words & Phrases sinaliza textos gerados que contêm
  palavras, frases ou padrões de comentário que você não quer publicar, para que
  você possa revisá-los antes de irem ao ar.
---

O recurso **Suspicious Words & Phrases** sinaliza textos gerados que contêm palavras, frases ou padrões de comentário que você não quer publicar. Os completions sinalizados recebem o status **Suspicious**, para que você possa filtrá-los e revisá-los antes de irem ao ar.

Ele detecta artefatos de IA (pedidos de desculpas, notas para o leitor, marcação que sobrou), restos técnicos e quaisquer termos que você escolher bloquear, em vários idiomas ao mesmo tempo.

## Onde encontrar

Vá em **Settings** > **Flow** e role até o bloco **Suspicious Words & Phrases**. As configurações valem globalmente para todos os seus fluxos.

![Configurações de Suspicious Words & Phrases](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-01-settings.png)

## Como a correspondência funciona

Por padrão, uma palavra é encontrada apenas como palavra inteira. Adicione `*` no início ou no fim para ampliar a busca. Maiúsculas e minúsculas nunca importam.

| Entrada | O que ela encontra |
| --- | --- |
| `bright` | apenas _bright_, não _brightness_ nem _ultrabright_ |
| `bright*` | também _brightness_ e _brightly_ |
| `*bright` | também _ultrabright_ |
| `*bright*` | o texto em qualquer posição, inclusive _ultrabrightness_ |
| `bri*ght` | exatamente o texto `bri*ght` — o `*` só funciona no início ou no fim |

As mesmas regras valem para frases. Por exemplo, `antwoord` nunca sinaliza _verantwoorde_, `antwoord*` também sinaliza _antwoorden_, e `*seo*` é encontrado em qualquer posição, até dentro de _museo_.

## O que é sinalizado

Três fontes alimentam a verificação: palavras padrão, padrões integrados e suas próprias palavras.

### Palavras suspeitas padrão

O Fozzels vem com uma lista pronta de artefatos de IA comuns em vários idiomas, como `*sorry*`, `*please*`, `*note:*`, `*markdown*`, `*<html*`, `*Let op:*` e `*het spijt me*`. Desmarque qualquer palavra de que você não precise, e ela deixa de ser sinalizada.

### Padrões integrados

Os padrões integrados procuram o _formato_ de um comentário de IA, e não uma palavra exata. Eles pegam formulações que o modelo nunca usou antes, como:

- "Let's" ou "Let me" antes de um verbo, como em _"Let's re-verify"_
- Uma verificação sendo contada, como em _"One last check"_ ou _"Final check"_
- Uma pergunta sobre o próprio texto, como em _"Is the wording accurate?"_
- Um resultado entregue, como em _"Final answer"_ ou _"Here is the"_
- Caracteres sendo contados, como em _"59 chars"_ ou _"character limit"_
- As instruções citadas de volta, como em _"the prompt says"_ ou _"mandatory words"_
- A palavra "I" antes de um verbo, como em _"I forgot"_ ou _"I'll use"_

A lista completa está nas configurações, com um exemplo em cada padrão. Os padrões não podem ser editados — clique em um para ativá-lo ou desativá-lo. Desative um padrão se ele sinalizar o seu próprio texto.

Os padrões em cinza começam desativados. Eles correspondem a formatos que textos comuns também usam, como uma pergunta em um FAQ de produto ou uma linha que começa com _Great,_. Ative um deles só se você preferir revisar algumas frases suas a deixar passar esses comentários.

### Suas próprias palavras

Em **Add your own suspicious words**, digite uma palavra ou frase e pressione **Enter**. Use esse campo para nomes de concorrentes, termos sensíveis da marca ou erros específicos de um idioma. Você pode misturar idiomas na mesma lista, o que ajuda lojas que publicam em vários idiomas.

## Como a sinalização funciona

Cada nova geração é verificada com as suas configurações atuais assim que é criada. Quando há uma correspondência:

- O completion recebe o status **Suspicious**.
- As palavras encontradas são **destacadas** no editor de texto, para que você veja na hora o que causou a sinalização.
- Você decide o que fazer: **editar** o texto manualmente, **regenerá-lo** ou **ajustar a lista** se a sinalização for um alarme falso.

Na lista de completions, um resultado sinalizado tem esta aparência. A palavra encontrada (aqui, _hello_) aparece destacada no texto. O botão **Sync Now** mostra um ícone de alerta e a mensagem _"Completion looks suspicious, possible AI recommendations found."_

![Um completion suspeito na lista de completions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-02-suspicious-completion.png)

Um completion assim não deve ser sincronizado como está. Regenere-o ou edite o texto para remover as palavras sinalizadas.

Para revisar apenas os itens sinalizados, ative **Show only suspicious** na **Daily Total Batch List**. Você pula os resultados limpos e vai direto aos textos que precisam de atenção.

## Atualizando completions existentes

Mudar a lista afeta apenas as novas gerações. Os completions que já existem **não** são verificados de novo automaticamente — o status Suspicious deles continua como estava até você recalculá-lo.

Para aplicar suas novas configurações aos textos existentes:

1.  Abra a **Content Completion List** do atributo que você quer verificar.
2.  Selecione os produtos a verificar de novo.
3.  Abra o menu **Actions** e escolha **Update Suspicious Flag**.

![Update Suspicious Flag no menu Actions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-03-update-suspicious-flag.png)

Os completions selecionados são analisados de novo com a sua lista e os seus padrões atuais. Os produtos que não correspondem mais perdem o status Suspicious e ficam prontos para sincronizar.

**Exemplo:** você adicionou `sorry` como palavra suspeita e depois lançou uma marca chamada _Sorry Boy_. Centenas de descrições agora estão sinalizadas. Remova ou desmarque `sorry` em Settings e execute **Update Suspicious Flag** nesses produtos — as sinalizações desaparecem, e você pode sincronizá-los em massa sem editar cada texto.

## Dicas

- Comece com palavras inteiras e adicione `*` apenas quando precisar de variações. `*seo*` também pega _museo_, o que pode sinalizar textos normais.
- Se um padrão integrado continua sinalizando textos bons no seu nicho, desative-o em vez de editar os textos um por um.
- Depois de cada mudança na lista, execute **Update Suspicious Flag** nos produtos que você quer verificar de novo.

Usados em conjunto, a lista de palavras, os padrões e a ação em massa dão a você um único lugar para controlar o que chega à sua loja — em todos os fluxos e em todos os idiomas.
