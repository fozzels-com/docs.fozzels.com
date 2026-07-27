---
id: '103000408094'
title: >-
  Release 7.4-7.5 - Apresentando Gerenciamento de Categorias, Advanced Media Hub e Modelos Anthropic de Próxima Geração
sidebar_position: 14
slug: >-
  /fozzels-releases-updates/release-7-4-7-5-introducing-category-management-advanced-media-hub-and-next-gen-
description: >-
  Bem-vindo à versão mais recente do Fozzels - uma atualização importante projetada para levar sua automação de conteúdo e gerenciamento de catálogo para o próximo nível. Nós completamente reimaginamos
---

Bem-vindo à versão mais recente do Fozzels - uma atualização importante projetada para levar sua automação de conteúdo e gerenciamento de catálogo para o próximo nível. Nós completamente reimaginamos interfaces principais, expandimos significativamente as capacidades da plataforma e integramos os modelos de IA mais recentes para tornar seus fluxos de trabalho diários mais suaves, rápidos e eficientes do que nunca.
A Próxima Evolução do Gerenciamento de Catálogo - Suporte a Categorias

Damos um salto estratégico ao escalar as capacidades principais da plataforma. Fozzels agora suporta oficialmente operações não apenas no nível de produto, mas também nos níveis de **categoria e atributo de categoria**. Esta atualização estabelece as bases para automação de estrutura de catálogo completo.

#### **Apresentando Category Pools & Interface de Catálogo Dedicado**

-   **Novo Ecossistema de Dados:** Apresentando uma interface de pool completamente reprojetada ao lado de um gerenciador de catálogo personalizado dedicado para categorias.

-   **Experiência Unificada (UX):** Trouxemos nosso fluxo de trabalho de gerenciamento de produto comprovado em produção para categorias. A lógica exata e intuitiva de filtragem, estruturação e gerenciamento de dados agora está disponível para cada única categoria dentro de um único espaço de trabalho.

-   **Ecossistemas Suportados:** Nesta fase, o suporte a categorias e a interface de pool atualizada estão sendo lançados para nossas integrações principais: **Shopify, Magento, WooCommerce, Shopware, Lightspeed e Katana PIM**.

-   **Perspectiva Futura:** Esta arquitetura é apenas o início de uma evolução importante do produto. Nosso próximo marco apresentará um fluxo de geração de conteúdo autônomo dedicado (cobrindo descrições de SEO, meta tags e banners) adaptado especificamente para páginas de categoria.

#### **Sincronização de Dados Granular em 4 Estágios & Logging Avançado**

-   **Arquitetura de Pool Reengenhada:** Para acomodar a integração de categoria, reconstruímos completamente nossos fluxos de trabalho de importação de dados do sistema externo. O sincronismo básico de 2 estágios foi substituído por um **ciclo de sincronização progressiva de 4 estágios**:

1.  _Atributos de Produto_

2.  _Atributos de Categoria_

3.  _Categorias_

4.  _Produtos_

-   **Transparência Absoluta & Flexibilidade:** Cada estágio agora é completamente isolado. Você pode monitorar o progresso preciso e em tempo real usando barras de status independentes e acessar visualizações de log dedicadas (`View logs`) para cada etapa individual.

-   **Controle Direcionado:** O sistema permite que você sincronize toda a massa de dados de forma abrangente ou ative manualmente atualizações para estágios específicos de forma independente.

### Atualização Importante de UI/UX: Revisão de Imagem de Nível Seguinte & Gerenciamento em Lote

Com base diretamente no feedback do usuário, completamente reimaginamos e reformulamos a experiência de visualização de imagem, moderação e análise dentro da **Lista de Lotes**. O resultado inteiro do seu fluxo de geração agora é unificado em um único espaço interativo.

#### **Fluxo de Mídia Simplificado "Swipe-and-Sync"**

-   **Página de Análise Avançada:** Não mais clique para frente e para trás entre folhas de produtos individuais. Apresentamos uma mecânica de alternância intuitiva e de alta velocidade (`Accept & next`) operando em princípios de deslizar de cartão.

-   **Comparação Lado a Lado:** A tela exibe simultaneamente painéis duplos—a imagem original (`Original`) e a variante gerada por IA (`Generated`)—completa com zoom detalhado de ativos (`Zoom In`).

-   **Gerenciamento Centralizado de Ativos de Mídia:** Diretamente dentro da janela de análise, você pode executar operações principais para o ativo atual instantaneamente em um único clique:

-   Atribua a ordem do ativo na galeria de imagens (`Position`).

-   Designe comportamentos específicos do sistema (`Roles`).

-   Controle a visibilidade na página do produto (`Hide on PDP`).

-   Acionador de regeneração manual de ativos (`Regenerate`) se ajuste fino for necessário.

-   **Carrossel de Processamento em Lote:** A parte inferior da interface apresenta uma linha do tempo visual rastreando todos os objetos na sessão ativa. Aprimorado com marcadores de status codificados por cor (`Accepted`, `Regenerate`, `Left`), mantém seu progresso geral do projeto perfeitamente claro à primeira vista.

### Aprimoramentos da Plataforma Principal

#### **Modelos de IA de Próxima Geração & Integração de Pesquisa Web ao Vivo**

-   **Expansão do Toolkit de IA:** Fozzels oficialmente acolhe os modelos mais avançados da Anthropic em sua linha principal:

-   **Claude Sonnet 5** — Oferece inteligência de nível superior, capacidades avançadas de raciocínio e saída de alta velocidade otimizada para geração de conteúdo de alto volume.

-   **Claude Fable 5** — Nosso modelo mais sofisticado até agora, construído para lidar com parâmetros de conteúdo hiper-complexos, mapeamento semântico profundo e execução autônoma prolongada sobre hierarquias de catálogo intricadas.

-   **Integração de Pesquisa Web ao Vivo:** Desbloqueamos recursos de Web Search em tempo real para ambos os modelos. A IA agora pode buscar dados externos ao vivo para garantir precisão factual absoluta, verificação de prompt e conformidade instantânea com as tendências de mercado mais recentes.

#### **Criatividade Ilimitada: Remoção de Limites de Regeneração de Imagem**

-   **O Que Mudou:** Completamente removemos o limite anterior em regenerações de imagem consecutivas (que foi anteriormente limitado a 5 tentativas por objeto). Sob o fluxo de regeneração manual (`Manual Regenerate Flow`), você está livre para re-executar a geração de ativos quantas vezes for necessário até alcançar o resultado visual exato que sua marca requer.

#### **Filtragem de Dados Avançada & Fluxo UX Simplificado**

-   **O Que Mudou:** Completamente redesenhamos o mecanismo de filtragem de dados em todos os fluxos operacionais e integrações, fornecendo uma estética limpa e moderna e ergonomia significativamente melhorada.

-   **Árvores de Categoria de Próxima Geração:** Para suportar operações de categoria em escala, implementamos um `Tree View` multi-seletor interativo equipado com tags de acesso rápido e lógica condicional flexível (`AND` / `OR`).

### Ecossistema & Integrações

#### **Magento: Validação Multi-Select & Gerenciamento Avançado de Ativos de Mídia**

-   **Sincronização de Atributo Complexo:** Capacidades completas de gravação/preenchimento foram desbloqueadas para tipos de atributo `multi-select` e `select`. O modelo de IA consulta automaticamente a matriz pré-existente de valores de dados permitidos diretamente do seu catálogo Magento e seleciona variáveis correspondentes dessa lista, impedindo rigorosamente poluição de dados ou tags duplicados.

-   **Mapeamento Avançado de Função de Mídia:** Ao sincronizar arquivos de mídia gerados de volta ao Magento, você pode agora configurar funções explícitas do sistema em vez de apenas ordenação da galeria. Designe perfeitamente ativos como `Base`, `Small`, `Thumbnail`, `Swatch` ou outros slots personalizados configurados em seu tema ativo.

-   **Exclusão de Mídia (Oculto da Página do Produto):** Suporte completo para a flag de exclusão de imagem nativa agora está ativo. Você pode fazer upload de um ativo de IA otimizado para Magento e marcá-lo como `Hidden from Product Page`, permitindo que você reserve a imagem para fins de sistema secundário (como layouts de carrinho de compras ou sliders de venda cruzada) sem renderizá-lo dentro da galeria principal da página do produto.

-   **Geração Inteligente de Texto ALT:** Fozzels agora mapeia a presença de tags de metadados `alt` em toda sua galeria de produtos Magento. A otimização de mídia pode ser executada em dois modos distintos:

1.  _Modo de Preenchimento:_ A IA visa e gera strings ALT relevantes exclusivamente onde estão faltando.

2.  _Modo Força:_ Um ciclo de reescrita completo e otimização executado em todos os ativos de imagem no lote selecionado.

#### **Shopify & Shopware: Filtragem de Atributo Simplificada**

-   **Otimização de Fluxo de Dados:** Realizamos uma auditoria técnica e limpeza das matrizes de configuração de filtro para Shopify e Shopware. Apenas operadores lógicos relevantes e totalmente funcionais agora são expostos para a interface, acelerando significativamente fluxos de trabalho de segmentação de catálogo.

#### **NextChapter: Sincronização Automática de Mídia & Gerenciamento de Galeria**

-   **Sincronização de Mídia Bidirecional:** Implementado integração de circuito fechado completo para ativos digitais. Todas as imagens geradas ou otimizadas de IA são automaticamente exportadas ("empurradas") de volta ao NextChapter, correspondendo diretamente à folha de itens correspondente.

-   **Gerenciamento de Galeria:** Adicionado um utilitário intuitivo de ordenação de fila. Os usuários podem precisamente determinar a sequência de exibição de imagens no layout da galeria de produtos (Imagem principal, segunda, terceira... última posição).

#### **Katana PIM: Sincronização de Atributo de Grupo de Especificação**

-   **Lançamento de Recurso:** Suporte nativo adicionado e sincronização de dados completa para o atributo de sistema crítico `specification group`. A integração aproveita nosso novo algoritmo de validação multi-select progressiva: a IA detecta dinamicamente grupos de especificação válidos diretamente do seu diretório Katana PIM e os popula com dados estruturais verificados.
