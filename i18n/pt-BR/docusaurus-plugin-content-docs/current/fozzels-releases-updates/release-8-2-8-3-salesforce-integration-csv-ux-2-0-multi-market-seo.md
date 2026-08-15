---
id: '103000410961'
title: Release 8.2-8.3 - Integração com Salesforce, CSV UX 2.0 e SEO multimercado
sidebar_position: 17
slug: /fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo
description: As releases v8.2 e v8.3 trazem avanços importantes em integrações Enterprise, uma reformulação completa do módulo CSV, mais recursos de SEO multilíngue…
---

As releases **v8.2 e v8.3** trazem avanços importantes em **integrações Enterprise**, uma reformulação completa do **módulo CSV**, mais recursos de SEO multilíngue para o Shopify e uma lógica de filtragem por estoque aprimorada.

## 1\. Integração Enterprise: Salesforce Commerce Cloud

Expandimos nosso ecossistema de conectores oficiais do Fozzels com suporte nativo ao **Salesforce**, voltado a lojistas de nível Enterprise.

-   **Automação de conteúdo:** Geração e sincronização bidirecional sem atritos de conteúdo HTML enriquecido, meta tags e atributos, tanto para **produtos** quanto para **páginas de categoria**.

-   **Escalabilidade Enterprise:** Processamento de dados em massa rápido e confiável, feito para catálogos de grande volume sem perda de desempenho.
    ![](/img/kb/fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo/gijc0EWvFlC1zyvnpAeXsONb3oKC7iTWEQ.png)

## 2\. Reformulação da integração CSV (UX 2.0 e galeria de mídia)

Revisamos completamente o módulo de importação CSV para deixar o upload de arquivos, o mapeamento e a configuração 200% mais intuitivos e visuais.

-   **Galeria de mídia nativa:** Visualize imagens e arquivos de mídia direto na interface da tabela.

-   **Motor de mapeamento aprimorado:** Uma interface limpa e fácil de usar para mapear as colunas do CSV para a estrutura interna de campos do Fozzels.

-   **Controle de dados:** A validação visual do mapeamento reduz bastante os erros humanos e acelera a configuração inicial de novos catálogos de produtos.

## 3\. Melhorias no Shopify: SEO multimercado e logística

### Sincronização de textos ALT multimercado e multilíngue

Resolve uma grande dor de cabeça para lojas de e-commerce internacionais e com várias regiões.

-   **Tags ALT localizadas:** O Fozzels agora consegue gerar e sincronizar **textos ALT localizados diferentes para exatamente as mesmas imagens**, de acordo com o idioma e o mercado de destino.

-   **Compatibilidade total com o ecossistema:** Suporte imediato ao **Shopify Markets** e a apps de tradução (incluindo o **LangShop**).

### Suporte a peso e unidade de peso

-   **Cálculos de frete precisos:** Adicionamos a sincronização automática dos valores de peso do produto (`weight`) e das unidades de medida (`weight unit`).

-   **Formatos padronizados:** O campo `weight unit` usa um formato de entrada **Select** rígido para evitar erros de formatação e garantir o cálculo correto das taxas de frete no checkout.

## 4\. Filtragem inteligente por estoque para VTEX

Otimize os custos de geração com IA usando uma seleção de catálogo precisa e ciente do estoque.

-   **Filtragem por estoque:** Filtre produtos direto na camada de integração da VTEX usando um atributo booleano de disponibilidade (`Stock = Yes / No`).

-   **Eficiência de recursos:** Pule automaticamente os itens sem estoque (`Stock = No`) para concentrar a geração com IA apenas no estoque ativo.

## 5\. Correções de bugs e estabilidade

-   **Integração com o Katana PIM:** Resolvemos um problema que afetava a sincronização de dados com o Katana PIM. A troca bidirecional de dados agora funciona de forma estável e confiável.

_Obrigado a todo o time por colocar essas atualizações de pé e aos nossos usuários pelo feedback constante! Experimente os novos recursos e conte para a gente o que achou._
