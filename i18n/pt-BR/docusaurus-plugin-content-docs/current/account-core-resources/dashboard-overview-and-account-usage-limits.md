---
title: Visão geral do Dashboard e limites de uso de conta
sidebar_position: 9
slug: /account-core-resources/dashboard-overview-and-account-usage-limits
description: O Dashboard é a página inicial do Fozzels e oferece uma visão geral em tempo real do uso de sua conta — integrações, lojas, Flows e conclusões contra suas cotas de plano.
keywords:
- fluxo
- de
- conteúdo
- geração
- conclusão
---

O Dashboard é a página inicial do Fozzels. Oferece uma visão geral em tempo real do uso de sua conta.

Acesse [Dashboard](https://app.fozzels.com/dashboard)

---

## Barra de estatísticas

O topo da página mostra 6 métricas principais. Cada uma mostra **contagem atual / cota do plano**:

| Estatística | O que conta |
|------|---------------|
| **Integrations** | Total de integrações criadas (ativas ou não) |
| **Websites** | Websites ativados em todas as integrações |
| **Stores** | Lojas ativadas em todas as integrações |
| **Flows** | Content Flows ativos (Flows arquivados não contam) |
| **Completions today** | Itens de conteúdo gerados por IA até agora hoje (redefine à meia-noite UTC) |
| **Completions this month** | Itens de conteúdo gerados por IA neste mês do calendário |

> Uma estatística mostrada em **vermelho ou laranja** significa que você está no limite ou perto da cota do seu plano.

---

## Dois limites separados para compreender

Fozzels possui **dois sistemas de faturamento independentes** que são fáceis de confundir:

### 1. Cotas de plano (assinatura)

Seu plano de assinatura define limites rígidos em:

- Número de integrações, websites, lojas e Flows ativos que você pode ter
- Número de conclusões por dia e por mês

Estas são mostradas na barra de estatísticas do Dashboard. Quando uma cota é atingida, a ação é **bloqueada** até que você atualize.

→ Gerencie em [Plans](https://app.fozzels.com/user/settings/plans)

### 2. Saldo de crédito (pay-per-use)

Cada vez que a IA gera conteúdo, custa créditos do seu saldo.

- Os créditos são separados de sua assinatura — você pode ter um plano mas zero créditos
- Quando o saldo chega a zero, a geração é bloqueada mesmo que sua cota de plano permita
- Custo: aproximadamente €0,06 por 750 palavras de saída de IA
- Recarregue manualmente ou configure carregamento automático

→ Gerencie em [Payments](https://app.fozzels.com/user/settings/payments)

**Ambos os limites devem ser satisfeitos** para que a geração funcione: você precisa de cota de plano restante E um saldo de crédito positivo.

---

## Botão Upgrade Plan

Visível quando você não está no plano Unlimited. Clicá-lo o leva diretamente para [Plans](https://app.fozzels.com/user/settings/plans) para atualizar.

---

## Gráfico de análise

Mostra atividade de geração de conteúdo ao longo do tempo — quantas conclusões foram criadas por dia. Use-o para:

- Identificar picos de uso
- Ver se seus Flows estão funcionando como esperado
- Verificar se a geração parou inesperadamente

---

## Perguntas comuns do dashboard

**"Completions today" é 0 mesmo que eu tenha executado Flows**

- Verifique se seus Flows estão definidos como **Active**
- Verifique se seu Flow foi executado hoje (a geração é agendada — acionalize uma execução manual para testar)
- Verifique seu saldo de crédito em [Payments](https://app.fozzels.com/user/settings/payments) — se for zero, a geração é bloqueada

**As estatísticas não estão atualizando**

- O dashboard atualiza ao carregar a página; atualize a página (Ctrl+F5 / Cmd+Shift+R)

**Estou no meu limite de plano**

- Atualize seu plano em [Plans](https://app.fozzels.com/user/settings/plans)
- Ou desative lojas não utilizadas / arquive Flows não utilizados para liberar cota

**Não consigo criar mais Flows**

- Ou você atingiu a cota de Flow ativo, ou você está em um plano que limita a contagem de Flow
- Verifique os limites do seu plano em [Plans](https://app.fozzels.com/user/settings/plans)

**A cota de conclusões foi usada, mas ainda tenho créditos**

- As cotas de plano e créditos são separados — a cota de plano tem prioridade
- Você deve atualizar seu plano para gerar mais conteúdo este mês/dia

**Qual é a diferença entre "Completions today" e "Completions this month"?**

- "Today" redefine a cada meia-noite UTC; "this month" redefine no 1º de cada mês
- Alguns planos limitam ambos (por exemplo, 100/dia e 3.000/mês) — o que atingir primeiro bloqueia a geração
