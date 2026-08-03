---
id: '103000409878'
title: Release 8.0-8.1 - Conteúdo de categorias e marcas, Workflow Builder, interface renovada
sidebar_position: 16
slug: /fozzels-releases-updates/release-8-0-8-1-category-brand-content-workflow-builder-ui-refresh
description: Estamos animados em apresentar a atualização v8.0 e v8.1 do Fozzels. Esta release foca em ampliar os recursos de geração de conteúdo, adicionar flexibilidade
keywords:
- fluxo
- de
- trabalho
---

Estamos animados em apresentar a atualização v8.0 e v8.1 do Fozzels. Esta release foca em ampliar os recursos de geração de conteúdo, adicionar flexibilidade na personalização de fluxos de trabalho, reforçar a segurança dos dados e renovar a interface da plataforma.

# **1\. Conteúdo para categorias e marcas (Shopware e Magento 2)**

## Depois de um longo período de desenvolvimento e preparação, estamos liberando o suporte para gerar e sincronizar conteúdo de páginas de categoria e de marca.

-   **Flows de categoria e marca** — Gere descrições HTML, meta títulos, meta descrições e atributos personalizados diretamente para categorias e marcas.
-   **Integração completa** — Esses novos tipos de flow vêm com todos os recursos padrão da plataforma: processamento em lote, histórico de revisões e sincronização automática.

## **2\.  Workflow Builder e Rule Engine**

O novo módulo **Rule Engine** permite configurar o pós-processamento automático do conteúdo antes da publicação.

-   **Editor visual** — Monte relações lógicas usando os blocos Condition, Group e Action.
-   **Regras de processamento** — Formate textos automaticamente (por exemplo, se um título passar de 50 caracteres → cortar para 45 caracteres preservando palavras inteiras).
-   **Atribuição de regras** — Os workflows que você criar podem ser aplicados a flows de produto, categoria ou marca.

### **Auditoria de dados históricos e validação de conteúdo**

-   **Verificação de conteúdo existente** — Rode workflows sobre resultados gerados anteriormente para sinalizar itens que precisam de edição ou nova geração.
-   **Matriz de decisão** — Configure condições ramificadas (Yes / No / Always) para lógicas de validação complexas.
-   **Filtros de conteúdo (Contains)** — Detecte palavras proibidas, caracteres vetados ou desvios de formato.
-   **Ações (Truncate e Mark as Suspicious)** — Corte textos automaticamente ou sinalize resultados com um motivo (por exemplo, "Title too long") e pause a sincronização automática desse item.

## **3\. Atualização da interface (navegação lateral)**

Redesenhamos o layout da plataforma para facilitar a navegação e deixar o espaço de trabalho mais eficiente.

-   **Cabeçalho enxuto** — A barra superior ficou mais limpa e agora traz apenas elementos contextuais (navegação, idioma, notificações e status).
-   **Barra lateral estruturada** — Os módulos são agrupados por seção (Main, Catalog, Integrations, Customers, AI Flows, Tools).
-   **Modos de exibição** — Recolha a barra lateral em uma visualização compacta para liberar espaço de trabalho.
-   **Indicadores de status** — Selos NEW e Soon para ajudar você a identificar módulos novos.

## **4\. Base de conhecimento pública**

Lançamos um portal de documentação independente para os usuários da plataforma.

-   **Multilíngue** — Materiais e instruções disponíveis em 6 idiomas.
-   **Guias estruturados** — Instruções passo a passo para configurar integrações, workflows, mapeamento e modelos de IA.

## **5\. Atualizações de integrações (Shopware, VTEX, NextChapter)**

### Shopware Engine e Properties (Select / Multi-Select)

-   **Otimização de API** — O conector atualizado garante desempenho estável com grandes volumes de dados.
-   **Tratamento de properties** — Geração e sincronização diretas para campos de property estruturados.
-   **Controle de valores** — A IA respeita as restrições definidas, enviando um único valor em campos Select ou vários valores em campos Multi-Select.
-   **Vision AI** — Análise de imagens para determinar automaticamente parâmetros do produto (estilo, cor, tipo de colarinho etc.).

### NextChapter e VTEX: texto ALT

-   **Sincronização de tags ALT** — Gere e envie descrições de imagens para melhorar SEO e acessibilidade.

## **6\. Integrações CSV expandidas**

### Media Gallery

-   **Padronização** — Um módulo completo de Media Gallery foi adicionado às integrações CSV.
-   **Preview e Vision AI** — Veja imagens diretamente na tabela, passe URLs para os prompts e gere conteúdo de mídia.

### Mapeamento e parsing

-   **Live Preview** — Veja a estrutura do arquivo CSV e dados de exemplo diretamente na interface.
-   **Mapeamento flexível** — Configure nomes de campos, formatos e correspondências de colunas.
-   **Opções de parsing** — Suporte a diversos delimitadores (vírgula, ponto e vírgula, tabulação) e codificações.

## **7\. Controle de HTML e validação de código**

### Gerenciamento do editor (Enable Editor)

-   **Modo de código bruto** — Desative o editor visual para preservar exatamente o código gerado pela IA, sem ajustes automáticos de tags (útil para acordeões de FAQ, estilos incorporados e [Schema.org](https://schema.org/) / JSON-LD).
-   **Modos de visualização** — Alterne entre a visualização de código (Show HTML) e a prévia renderizada.

### Validação da estrutura HTML

-   **Verificação automática** — Detecte tags não fechadas ou código quebrado em tempo real.
-   **Proteção da sincronização automática** — Bloqueie automaticamente a sincronização de elementos quebrados, com um aviso na tabela: _"Completion looks suspicious, broken or unclosed HTML tags detected."_

_Seu feedback e sua experiência diária com a plataforma nos ajudam a seguir melhorando o Fozzels._
