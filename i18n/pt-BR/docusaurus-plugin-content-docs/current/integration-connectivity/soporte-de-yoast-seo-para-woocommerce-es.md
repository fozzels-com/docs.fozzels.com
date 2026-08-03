---
id: '103000408494'
title: 2.5.4. Suporte ao Yoast SEO para WooCommerce
sidebar_position: 11
slug: /integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es
description: Este artigo explica como configurar a automação completa dos metadados de seus produtos (títulos, descrições, palavras-chave de foco) utiliz
keywords:
- extração
---

Este artigo explica como configurar a automação completa dos metadados de seus produtos (títulos, descrições, palavras-chave de foco) usando a integração do **Yoast SEO** com Fozzels.

## Visão geral da funcionalidade

Esta integração permite que o Fozzels gerencie diretamente os parâmetros de SEO de seus produtos através da API. Uma vez gerados, esses campos são sincronizados automaticamente com sua loja WooCommerce.

### Atributos disponíveis para mapeamento:

-   **Título de SEO do Yoast**(`yoast_title`)
-   **Descrição meta de SEO do Yoast** (`yoast_meta_description`)
-   **Palavra-chave de foco do Yoast**(`yoast_focus_keyword`)

## Configuração passo a passo

### Passo 1: Requisitos (lado do WooCommerce)

Para que a sincronização seja bem-sucedida, seu site WordPress deve ter **dois plugins ativos**:

1.  **Yoast SEO** – O plugin principal para gerenciar otimização para mecanismos de busca.
2.  **Yoast SEO WooCommerce REST API by Fozzels** – Nosso plugin conector dedicado que permite transferir dados gerados de volta para sua loja.

> **Importante:** A sincronização dos campos de SEO não é possível sem o plugin conector do Fozzels. Você pode baixá-lo no final deste artigo.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/MT4wMD04ipjVoEt8c4NwHlsE0eT8iTLb2A.png)

### Passo 2: Ativação no Fozzels

1.  Vá para a seção **Integrações** e selecione sua integração do WooCommerce.
2.  Na aba **Configuração**, procure a opção **"Yoast WooCommerce SEO"**.
3.  Ative o alternador e clique em **SALVAR**.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/bjZhGWcV30oWfW9hzMOHg4-I7csNNSMhJA.png)

###
Passo 3: Atualização da estrutura de dados

Para que os novos atributos sejam visíveis na interface do Fozzels, você deve atualizar seu esquema de dados:

1.  Vá para a aba **Sites e lojas** e clique em **Puxar lojas/sites (Pull Stores/Websites)**.
2.  Execute um **puxar completo de produtos (Pull Products)**.
3.  Depois que a puxada for concluída, a lista de atributos será atualizada e os campos com o prefixo `yoast_` estarão disponíveis para mapeamento em seus Flows.![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/s-S_9YbKR-3bTtFFzWb4j7fmwJBqaL8UKg.png)

##

## A combinação definitiva: WPML + Yoast + ACF

O Fozzels permite que você alcance o "padrão ouro" do comércio eletrônico combinando:

-   **Suporte WPML:** Para SEO multilíngue.
-   **ACF (Campos personalizados avançados):** Para dados técnicos especializados.
-   **Yoast SEO:** Para domínio em mecanismos de busca.

Você pode automatizar todos esses campos simultaneamente para cada versão de idioma de sua loja.
