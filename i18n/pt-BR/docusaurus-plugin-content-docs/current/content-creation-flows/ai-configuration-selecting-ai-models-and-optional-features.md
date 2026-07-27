---
id: '103000367978'
title: 4.2.1. Configuração de IA. Seleção de Modelos de IA e Recursos Opcionais.
sidebar_position: 6
slug: >-
  /content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features
description: >-
  A etapa de Configuração de IA (Etapa 2 na modificação do Fluxo) é o estágio
  mais crítico para definir o perfil de desempenho e custo de um Fluxo de
  Conteúdo. Ele dita
---

A etapa de Configuração de IA (Etapa 2 na modificação do Fluxo) é o estágio mais crítico para definir o perfil de desempenho e custo de um Fluxo de Conteúdo. Ela dita a escolha do mecanismo de IA generativa, suas capacidades especializadas e suas restrições operacionais. Os usuários devem tomar decisões estratégicas aqui, equilibrando qualidade de saída, complexidade de tarefa (por exemplo, requisitos multimodais) e otimização de custo de token.

1.  ### O Mecanismo Core de IA: Provedores e Camadas de Modelos

O Fozzels integra-se com múltiplos fornecedores líderes da indústria de IA (por exemplo, OpenAI/ChatGPT, Google/Gemini, Anthropic, xAI), cada um apresentando um portfólio de modelos.

1.1. Critérios de Seleção de Modelo

Escolher o modelo certo requer uma avaliação estratégica baseada na tarefa de conteúdo:

**Modelos Eficientes em Custo**. Propósito: Tarefas de alto volume, baixa complexidade (Meta Títulos, traduções curtas, normalização de dados). Atributos Principais: Processamento mais rápido, janela de contexto menor. Perfil de Custo: Menor custo de token de entrada/saída.

**Modelos de Alta Qualidade**. Propósito: Geração complexa e criativa, resumo profundo, mantendo tom de marca nuançado. Atributos Principais: Coerência lógica superior, janela de contexto grande. Perfil de Custo: Maior custo de token de entrada/saída.

**Modelos Multimodais**. Propósito: Tarefas que requerem análise visual junto com texto (por exemplo, descrever a textura ou estilo de uma imagem). Atributos Principais: Capacidade de análise de imagem é inegociável. Perfil de Custo: Custo mais alto devido à tokenização de imagem.

2.  ### Ferramentas de Enriquecimento de IA e Busca na Web

As Ferramentas de Enriquecimento de IA são recursos opcionais usados para aprimorar o acesso do modelo a dados externos não-produto.

Ativar Busca na Web: Ativar este recurso permite que o modelo consulte informações em tempo real e contexto externo da internet pública durante a geração de conteúdo.

Valor Estratégico: Busca na Web é indispensável para conteúdo que deve fazer referência a tendências atuais de mercado, padrões específicos de manufatura ou fatos externos não contidos nos atributos do catálogo de produtos.

Implicação de Custo: Use este recurso com critério, pois geralmente incorre em um custo adicional por solicitação, independente do uso de token padrão.

3.  ### Capacidades Especializadas de Fluxo

Para tarefas criativas que se estendem além de análise de texto e imagem padrão, o Fozzels requer tipos de fluxo dedicados e modelos de IA específicos devido à alta potência computacional envolvida.

**Fluxos de Imagem (Geração de Imagem).**
Propósito: Gerando novas imagens de produto (do zero).
Requisitos de Modelo: Modelos Especializados de Geração de Imagem (por exemplo, GPT Image 1, Gemini 2.0 Flash Preview Image Generation).
Restrição de Fornecedor: Restrita a fornecedores selecionados (por exemplo, OpenAI, Google).

**Fluxos de Vídeo (Geração de Vídeo)**.
Propósito: Dedicado a gerar conteúdo de vídeo curto e de alta fidelidade (por exemplo, clipes de 8 segundos em 720p).
Requisito de Modelo: Modelos de Geração de Vídeo de Alta Qualidade (por exemplo, Gemini Veo 3).
Restrição de Fornecedor: Atualmente restrita a Google | Gemini. Estrutura de Custo: Modelos de geração de vídeo geralmente operam em uma estrutura de preço especializada (por exemplo, preço por segundo de saída de vídeo) devido à alta demanda computacional.

4.  ### Otimização de Imagem e Controle de Custo

Para qualquer fluxo que utilize capacidades multimodais, o tratamento eficiente de imagens de produto é essencial tanto para estabilidade de geração quanto para gerenciamento de custo de token.

4.1. Entrada de Imagem e Lógica de Fallback

Contagem de Imagem: Os usuários devem definir explicitamente o número de imagens de produto que a IA deve analisar (por exemplo, 1, 2 ou 3). Aumentar a contagem de imagem aumenta diretamente a contagem de token de entrada e, consequentemente, o custo.

Fallback/Pular: Se um produto no fluxo está faltando os dados de imagem solicitados, os usuários devem definir uma ação de contingência:
Fallback para um modelo apenas de texto: O processo continua usando um prompt apenas de texto, evitando falha mas mantendo custo de geração.
Pular geração de conteúdo: O produto é ignorado, economizando todos os custos de token associados para esse item.

### 4.2. Redimensionamento de Imagem (Mecanismo de Estabilidade)

É uma **melhor prática** Ativar Redimensionamento de Imagem para todos os fluxos multimodais. Este recurso serve como um mecanismo crucial de estabilidade e economia de custo:

Prevenção de Falha: Modelos generativos têm limites rígidos no tamanho de arquivo (por exemplo, >2MB) e dimensões (por exemplo, >2048 pixels). O redimensionamento ajusta automaticamente esses arquivos para limites aceitáveis.

Eficiência de Custo: Ao garantir que os arquivos atendam aos limites de tamanho, isso evita falhas de geração, garantindo que os custos de token sejam incorridos apenas para saída de conteúdo bem-sucedida, eliminando gastos desperdiçados em operações que de outra forma falhariam.
