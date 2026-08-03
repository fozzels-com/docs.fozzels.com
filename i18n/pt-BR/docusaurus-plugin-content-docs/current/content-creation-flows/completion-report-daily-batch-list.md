---
title: Completion Report (Lista de Lote Diário)
sidebar_position: 28
slug: /content-creation-flows/completion-report-daily-batch-list
description: O Completion Report é uma visão geral diária de todos os itens de conteúdo gerados por IA em seus Flows — mostrando o que foi gerado, confirmado e empurrado para sua loja em um dia específico.
keywords:
- fluxo
- de
- conteúdo
- geração
- instrução
- comando
- conclusão
---

O Completion Report é uma visão geral diária de todos os itens de conteúdo gerados por IA em seus Flows — mostrando o que foi gerado, confirmado e empurrado para sua loja em um dia específico.

Acesse [Completion Report](https://app.fozzels.com/completions/product/completion/report/today) (substitua `today` por uma data como `2026-03-20`)

---

## O que esta página mostra

Esta página lista cada completion de IA (item de conteúdo gerado) que foi criado ou executado dentro do intervalo de datas selecionado. Ela reúne resultados de **todos os seus Flows** em um único lugar, para que você possa revisar, confirmar e sincronizar lotes sem navegar em cada Flow individualmente.

---

## Navegando no relatório

### Intervalo de datas

- Seletores de data **From / To** no topo permitem que você mude o intervalo de datas
- A data na URL define a data inicial — por exemplo, `/completions/product/completion/report/2026-03-20`
- Adicione `?end_date=2026-03-21` para definir uma data final

### Filtro de loja

- O painel esquerdo lista suas lojas conectadas
- Clique em qualquer loja para filtrar o relatório apenas pelas conclusões dessa loja
- Clique novamente ou limpe para mostrar todas as lojas

### Filtros de exibição (caixas de seleção)

- **Show only with errors** — oculta itens bem-sucedidos, mostra apenas conclusões com falha/erro
- **Show only suspicious** — mostra apenas conclusões sinalizadas como conteúdo suspeito

### Filtros de coluna (construtor de condições)

- Filtre por Flow, Website, Store, SKU, Prompt, Created At, Executed At, Synchronized At
- Construa condições AND/OR como no Catalog

---

## Colunas da tabela

| Coluna | O que mostra |
|--------|--------------|
| **Flow** | Nome do Content Flow que gerou este item (clique para abrir o Flow) |
| **Website / Store** | Qual loja este item pertence |
| **SKU** | Identificador de produto (clique para abrir o produto) |
| **Confirmed** | Caixa de seleção — se esta conclusão está aprovada para sincronização |
| **Prompt** | O prompt de IA que foi usado |
| **Created At** | Quando a conclusão foi criada |
| **Target attribute** | O conteúdo gerado por IA (clique para editar) |
| **Executed At** | Quando a geração foi executada; mostra rótulos de erro se falhou |
| **Synchronized At** | Quando o conteúdo foi empurrado para sua loja; mostra "Sync Now" se pendente |
| **Thumbnail** | Imagem do produto (alterne visibilidade com o botão de coluna) |

---

## Ações

### Ações por linha

- **Toggle Confirmed checkbox** — confirmar ou desconfirmar um único item
- **Clique no valor target attribute** — abre um modal de edição onde você pode:
  - Editar manualmente o conteúdo gerado
  - Visualizar histórico de revisões e restaurar uma versão anterior
  - Regenerar conteúdo
  - Alternar visualização de HTML / texto simples
  - Salvar e opcionalmente sincronizar imediatamente
- **Clique "Sync Now"** — empurre manualmente um único item para a loja
- **Clique um rótulo de erro** — veja a mensagem de erro completa e opções de retry

### Ações em lote (selecione itens primeiro, depois escolha ação)

| Ação | O que faz |
|--------|-------------|
| **Confirm all, Save & Sync** | Marca itens selecionados como confirmados e os coloca em fila para sincronização (roda a cada 4 horas) |
| **Regenerate, Save & Sync** | Re-executa geração de IA para itens selecionados e os coloca em fila para sincronização |
| **Sync Generated Content** | Força re-sincronização de itens já sincronizados (sobrescreve o que está em sua loja) |
| **Update Suspicious Flag** | Recalcula status suspeito para itens selecionados |

---

## Casos de uso comuns

**Revendo o lote de ontem**

- Abra o relatório para a data anterior
- Filtre por loja se você tiver várias
- Ordene por "Executed At" para ver o que foi executado

**Encontrando itens que falharam**

- Habilite a caixa de seleção "Show only with errors"
- Clique no rótulo de erro em qualquer linha para ver o erro exato e retry

**Lidando com conteúdo suspeito**

- Habilite a caixa de seleção "Show only suspicious"
- Revise cada item sinalizado — edite, regenere ou confirme se for um falso positivo

**Confirmando e sincronizando em lote**

- Selecione todos os itens (ou filtre para os que deseja)
- Use **Confirm all, Save & Sync** para aprovar e colocar tudo em fila de uma vez
- Sincronização roda automaticamente a cada 4 horas; ou use "Sync Now" por item para empurrão imediato

---

## Problemas comuns

**Nenhum item mostrado para hoje**

- As conclusões aparecem aqui quando um Flow foi executado — verifique se seus Flows estão Active e foram executados
- Tente ampliar o intervalo de datas

**Itens confirmados mas não sincronizados**

- Sincronização roda a cada 4 horas — aguarde ou use "Sync Now" por item
- Verifique se a integração está Active e a loja está conectada

**Erro na coluna "Executed At"**

- Clique no rótulo de erro vermelho para ver detalhes
- Causas comuns: credenciais de integração expiradas, atributo não mutável, loja offline

**Item mostrado como "Suspicious"**

- O conteúdo disparou uma palavra suspeita ou padrão de artefato de IA
- Edite o conteúdo manualmente, depois confirme — ou use **Update Suspicious Flag** se o conteúdo estiver realmente bem
