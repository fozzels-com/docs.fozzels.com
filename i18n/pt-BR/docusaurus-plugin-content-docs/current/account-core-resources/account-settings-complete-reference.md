---
title: Configurações de Conta — Referência Completa
sidebar_position: 10
slug: /account-core-resources/account-settings-complete-reference
description: Toda seção das Configurações de Conta do Fozzels explicada — Profile, Security, Notifications, Open AI Token, tokens de API, Flow Settings, Prompt Templates, Media, Plans, Payments e Transactions.
keywords:
- fluxo
- de
- conteúdo
- geração
- instrução
- comando
- extração
- conclusão
---

Acesse [Settings](https://app.fozzels.com/user/settings) — a barra lateral esquerda tem todas as seções.

---

## Profile

Configure detalhes da sua conta pessoal:

- **Name, email, company, phone**
- **Avatar** — envie uma foto JPG ou PNG
- **Language** — EN, NL, DE, ou ES (altera o idioma da interface do Fozzels)
- **Timezone** — importante para agendamentos de pull, que rodam em UTC por padrão; definir seu fuso horário exibe corretamente os horários agendados

---

## Security

Mude sua senha de conta:

- Digite sua senha atual
- Digite e confirme uma nova senha

---

## Notifications

Alterne quais emails o Fozzels envia para você:

- **Product emails** — notícias, dicas e anúncios de novos recursos do Fozzels
- **Balance alert** — notificação quando seu saldo de crédito cai para zero

---

## Open AI Token

Adicione sua própria chave de API OpenAI para usar sua cobrança pessoal do OpenAI em vez de créditos do Fozzels.

- Quando definido, todos os Flows baseados em OpenAI e o assistente de IA usam sua chave diretamente
- Você ainda precisa de um saldo mínimo de €0,01 no Fozzels para usar este recurso
- Deixe em branco para usar a chave da plataforma Fozzels (os créditos são deduzidos do seu saldo)

---

## API (Personal Access Tokens)

Crie tokens de API para acesso programático ao Fozzels:

- Dê a cada token um nome
- Os tokens podem ser revogados a qualquer momento
- Use tokens para integrar o Fozzels com ferramentas externas ou automatizar tarefas via API

---

## Flow Settings

Configurações globais que se aplicam a todos os Content Flows, a menos que sejam substituídas por Flow.

### Trusted HTML Tags

Lista branca de tags HTML permitidas no conteúdo gerado por IA. Apenas tags nesta lista serão mantidas quando a saída é usada em um atributo HTML.

### Suspicious Words

Lista de palavras ou frases que sinalizam automaticamente conteúdo gerado para revisão manual.

As palavras suspeitas padrão incluem artefatos de IA como "As an AI", "I cannot", "Sorry". Você pode:

- Adicionar suas próprias palavras (por exemplo, nomes de concorrentes, frases proibidas)
- Remover entradas padrão que estão causando falsos positivos

Conclusões contendo palavras suspeitas não podem ser sincronizadas automaticamente — elas exigem revisão manual e confirmação.

### Completion Cooldown (global)

Tempo mínimo entre regenerações de IA para o mesmo produto, em todos os Flows.

Formato: defina um número e uma unidade (horas, dias, semanas).

Flows individuais podem:

- **Inherit** esta configuração global
- **Override** com seu próprio cooldown
- **Turn off** o cooldown completamente

---

## Prompt Templates

Salve modelos de prompt reutilizáveis para usar em vários Flows.

- Dê a cada modelo um nome e conteúdo
- Referencie modelos ao criar ou editar um Flow em vez de escrever o prompt do zero
- Útil para manter tom e formato consistentes em todos os Flows

---

## Media

Sua biblioteca de mídia — imagens e arquivos enviados ou gerados dentro do Fozzels.

---

## Plans

Veja e altere seu plano de assinatura.

Acesse [Plans](https://app.fozzels.com/user/settings/plans)

Cada plano mostra:

- Nome e descrição
- Recursos incluídos
- Cotas: máx. integrações, lojas, Flows ativos, conclusões por dia, conclusões por mês
- Preço

Para fazer upgrade ou downgrade: clique em **Choose Plan** → checkout do Stripe → confirme o pagamento.

### Planos disponíveis

| Plan | Integrations | Stores | Flows | Completions/day | Completions/month |
|------|-------------|--------|-------|-----------------|-------------------|
| **Trial** | 1 | 1 | 1 | limitado | limitado |
| **Starter** | 6 | 18 | ilimitado | — | — |
| **Ultra Light** | 1 | 1 | 4 | 1.000 | 30.000 |
| **Light** | 1 | 3 | 5 | 30 | 900 |
| **Plus** | 3 | 6 | 15 | 75 | 2.250 |
| **Premium** | 6 | 18 | 60 | 100 | 3.000 |
| **Unlimited** | ilimitado | ilimitado | ilimitado | ilimitado | ilimitado |

> Quando uma cota é excedida, a ação é bloqueada com uma mensagem vinculando à página Plans.

---

## Payments (Credits)

Acesse [Payments](https://app.fozzels.com/user/settings/payments)

Fozzels usa um **sistema de crédito pay-per-use** — separado do seu plano de assinatura. Os créditos são consumidos cada vez que a IA gera conteúdo.

**Custo:** aproximadamente €0,06 por 750 palavras de conteúdo gerado.

**Exemplo:** 1.000 descrições de produtos de ~200 palavras ≈ €16

### Gerenciando seu saldo

- **Current balance** — mostrado na caixa laranja
- **Charge Credit Now** — recarga única manual via Stripe
- **Configure Auto-Charge** — defina um limite e um valor de cobrança automática
  - Exemplo: cobrar €50 automaticamente quando o saldo cair abaixo de €10
- **Customer Billing Portal** — portal Stripe para gerenciar métodos de pagamento e baixar faturas

### Histórico de pagamentos

A tabela mostra todos os débitos anteriores com data, valor e status.

### Problemas comuns de faturamento

- **"You exceeded your current quota"** — seu saldo é zero ou sua chave de API OpenAI expirou
  - Recarregue em [Payments](https://app.fozzels.com/user/settings/payments) ou adicione sua própria chave OpenAI em Settings → Open AI Token
- **Auto-charge not triggering** — verifique se o limite está definido e se um método de pagamento está salvo no portal Stripe

---

## Transactions

Histórico completo de todas as deduções de crédito — mostra qual Flow ou conclusão consumiu créditos, quantos tokens foram usados e o custo por operação.

---

## Acesso de Reseller

Se um Reseller gerencia sua conta, você verá seu acesso listado em Account Settings. Você pode **revogar o acesso do Reseller** a qualquer momento nesta página.

Quando um Reseller está conectado à sua conta, a barra de cabeçalho fica preta.
