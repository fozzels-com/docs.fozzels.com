---
id: '103000367979'
title: '4.2.2. Configuração de IA. Otimização de Imagem (Redimensionamento): Justificativa e implementação.'
sidebar_position: 7
slug: /content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation
description: O recurso Redimensionamento de Imagem otimiza automaticamente imagens grandes para atender aos requisitos técnicos do sistema de geração de IA. Ele está ativado por padrão em um
keywords:
- instrução
- comando
---

O recurso **Redimensionamento de Imagem** otimiza automaticamente imagens grandes para atender aos requisitos técnicos do sistema de geração de IA. Ele está ativado por padrão em todos os Fluxos novos e existentes para evitar falhas de geração e reduzir custos de Token de Entrada.

**1. Como Gerenciar o Recurso de Redimensionamento de Imagem**

 O recurso é gerenciado individualmente para cada Fluxo na etapa de Configuração de IA.

1. Vá para a tela de edição de qualquer um de seus Fluxos.

2. Navegue até **Etapa 2: Configuração de IA**.

3. Role para baixo até a seção **Redimensionamento de Imagem**.

4. Gerencie o recurso usando a caixa de seleção **"Ativar Redimensionamento de Imagem"**.

   ![](/img/kb/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/ZDcGWszXAjy6POiHs75NMe0FsBeIK14pfg.png)

    Quando Usar:
**Ativado (Padrão):** Recomendado para todos os Fluxos onde você usa imagens de produtos para Análise de IA ou Geração de Imagem.
Isso garante sucesso de geração e reduz custos de token.
**Desativado:** Se você não planeja usar nenhuma análise ou geração de imagem neste Fluxo específico. _Por favor note: Desativar pode levar a um aumento em erros de geração de conteúdo se você carregar imagens que excedem os limites._

**2. Detalhes Técnicos e Rastreamento de Custo**

O mecanismo de redimensionamento é ativado apenas quando uma imagem excede critérios técnicos específicos.

    Critérios de Ativação
O mecanismo de redimensionamento de imagem é ativado **apenas** quando _ambas_ as condições são atendidas:

1. O tamanho do arquivo **excede 2 MB** (MegaBytes);

2. **E** a largura ou altura da imagem **excede 2048 pixels**.

Onde o Recurso Se Aplica

O recurso Redimensionamento de Imagem funciona para dois casos de uso principais:

        1. Uso de Imagem (Análise): Imagens que você adiciona para análise de IA dentro de seus Fluxos.
        2. Fluxo de Imagem (Geração): Imagens enviadas junto com o prompt para nova geração de conteúdo.

Rastreamento de Custo e Despesa

1. O custo para redimensionar uma única imagem é **€0,0025 por imagem**.

2. Esta taxa é **cobrada apenas** quando o recurso realmente se ativou (ou seja, a imagem atingiu os critérios técnicos e foi redimensionada).

3. Você pode rastrear essas despesas na página **Transações** de sua conta.

## 4. O uso também é incluído no seu e-mail diário "Sua atualização de conteúdo Fozzels".

**3. Benefícios Principais**

O recurso Redimensionamento de Imagem ativo é um elemento chave de confiabilidade e economia:

1. Previne Gerações Falhadas: Você tem **garantia de evitar falhas** relacionadas a tamanhos de imagem grandes, economizando seu tempo.

2. Custos Reduzidos de Token de Entrada: Imagens otimizadas e menores exigem **menos Tokens de Entrada** para processamento pelo modelo de IA, o que **reduz o custo geral** da geração de conteúdo.

3. Economiza Seus Créditos: Ao evitar tentativas de geração falhadas devido a arquivos grandes, você paga apenas pelo conteúdo criado com sucesso.

4. Redimensionamento Automático: O sistema realiza a otimização necessária **automaticamente** em segundo plano, permitindo que você se concentre na criação de conteúdo.
