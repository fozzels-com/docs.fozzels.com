---
title: 4.1.2.c Como sincronizar o conteúdo gerado com todas as store views no Magento 2
sidebar_position: 4.5
slug: /content-creation-flows/sync-generated-content-to-all-store-views-magento-2
description: >-
  Com esta opção ativada, cada push do flow salva o texto gerado na store view
  do flow e também como valor padrão do produto para todas as store views do
  Magento.
---

## O que esta opção faz

Com esta opção ativada, cada push do flow salva o texto gerado duas vezes: na store view do próprio flow e como valor padrão do produto para **todas as store views** do Magento.

Qualquer store view que não tenha um valor próprio para esse atributo mostra o novo texto na hora. Uma store view que tem um valor próprio definido no Magento continua mostrando o próprio texto.

A opção está disponível somente para integrações com Magento 2.

## Quando usar

Ative a opção quando várias store views devem mostrar o mesmo texto e você não quer executar um flow separado para cada uma. Um caso típico: duas ou mais store views no mesmo idioma, por exemplo uma loja principal e uma loja outlet.

Deixe a opção desativada quando suas store views usam idiomas diferentes ou precisam de textos diferentes. Nesse caso, execute um flow separado para cada store view, como antes.

## Como ativar

1.  Abra o flow e vá para a etapa **4 Automation**.

2.  Marque **Also save as the default value for all store views**. Uma breve explicação aparece abaixo da caixa de seleção.

3.  Salve o flow.

A opção vale para todo push deste flow: um push manual após a revisão, um push totalmente automático e **Synchronize again**. Um flow com vários atributos sempre sincroniza todos os seus atributos juntos.

![A caixa de seleção "Also save as the default value for all store views" na etapa 4 Automation](/img/kb/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/01-automation-default-value-checkbox.png)

## Como funcionam os valores das store views

No Magento, um atributo de produto tem um valor padrão (exibido no scope **All Store Views**) e pode ter um valor próprio em qualquer store view. Na página do produto, mude o **Scope** para uma store view: se **Use Default Value** estiver marcado abaixo de um campo, essa store view mostra o valor padrão. Se estiver desmarcado, a store view tem um valor próprio e ignora o padrão.

Veja o que um push faz, com um flow na Default Store View e uma loja com mais duas store views:

| Store view | Antes do push | Depois do push | Use Default Value |
| --- | --- | --- | --- |
| All Store Views (padrão) | Texto antigo | **Texto novo** | — |
| Default Store View (a do flow) | Texto antigo | **Texto novo**, salvo como valor próprio | Desmarcado |
| Store view B, sem valor próprio | Texto antigo (herdado) | **Texto novo** (herdado) | Marcado |
| Store view C, com valor próprio | Texto próprio | Texto próprio, sem alteração | Desmarcado |

**Para que uma store view mostre o novo texto**, abra o produto no Magento, mude o Scope para essa store view, marque **Use Default Value** para o atributo e salve. A partir daí, ela segue o valor padrão.

## Uma store view por atributo

Somente os flows de uma store view podem salvar um determinado atributo como valor padrão. Isso evita que flows de store views diferentes sobrescrevam o texto padrão uns dos outros.

*   **Vários flows da mesma store view** podem ter a opção ativada para o mesmo atributo.
*   **Flows de store views diferentes** só podem ter a opção ativada para atributos diferentes. Por exemplo, um flow na store view A sincroniza a descrição, e um flow na store view B sincroniza o meta title.

Se você ativar a opção para um atributo que um flow de outra store view já salva como valor padrão, o flow não é salvo e mostra este erro:

> The flow "&lt;flow name&gt;" of another store view already saves this attribute as the default value for all store views. Only one store view's flow can write the shared default of an attribute.

Para corrigir, remova os atributos compartilhados deste flow ou desative a opção (ou remova o atributo) no flow indicado no erro.

**Ao duplicar um flow para outra store view**, a opção é desativada na cópia e um aviso é exibido. Ative-a de novo somente se nenhum flow de outra store view salvar os mesmos atributos como valor padrão.

## O que saber antes de ativar

*   **All Store Views significa todos os sites.** O valor padrão vale para as store views de todos os sites do seu Magento, e não apenas para o site do flow. Se seus sites usam idiomas diferentes, as store views sem valor próprio vão mostrar o idioma do flow.
*   **O último push vence.** Se vários flows da mesma store view sincronizam o mesmo atributo, o valor padrão fica com o texto do push mais recente, mesmo que outro flow tenha gerado um texto mais novo.
*   **A store view do flow deixa de seguir o valor padrão.** Após o primeiro push com esta opção, a store view do flow passa a ter um valor próprio. Os valores padrão seguintes não chegam a ela até você marcar Use Default Value nela.
*   **Pode acionar outros flows.** Um flow de outra store view que lê este atributo no prompt e tem **Automatically create a new text when an attribute changes** ativado trata o novo valor padrão como uma alteração. Após o próximo pull, ele cria um novo texto, e consome créditos, para cada produto sem valor próprio na sua store view.
*   **Produtos configuráveis:** somente o produto pai é atualizado. As variantes mantêm seus próprios textos, o que não é um problema, pois a página do produto mostra os textos do pai.
*   **Desativar a opção não desfaz nada.** Os valores já salvos como padrão permanecem. Os novos pushes vão somente para a store view do flow.
*   **Remover um atributo de um flow não apaga o valor padrão.** O último valor sincronizado permanece até outro flow sincronizar um novo.
