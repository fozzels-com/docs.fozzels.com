---
id: '103000388046'
title: 2.5.4. Suporte ao Yoast SEO para WooCommerce
sidebar_position: 12
slug: /integration-connectivity/yoast-seo-support-for-woocommerce
description: Este artigo explica como configurar a automação completa dos metadados de seus produtos (títulos, descrições, palavras-chave de foco) usando a integração Yoast SEO com F
---

Este artigo explica como configurar a automação completa dos metadados de seus produtos (títulos, descrições, palavras-chave de foco) usando a integração **Yoast SEO** com Fozzels.

## Visão geral do recurso

Esta integração permite que o Fozzels gerencie diretamente os parâmetros de SEO de seu produto via API. Depois de gerados, esses campos são sincronizados automaticamente com sua loja WooCommerce.

**Atributos disponíveis para mapeamento:**

-   **Título de SEO do Yoast** (`yoast_title`)

-   **Metadescição de SEO do Yoast** (`yoast_meta_description`)

-   **Palavra-chave de foco de SEO do Yoast** (`yoast_focus_keyword`)

## Configuração passo a passo

### Passo 1: Requisitos (lado do WooCommerce)

Para sincronização bem-sucedida, seu site WordPress deve ter **dois plugins ativos**:

1.  **Yoast SEO** – O plugin principal para gerenciar otimização em mecanismos de busca.

2.  **Yoast SEO WooCommerce REST API by Fozzels** – Nosso plugin conector dedicado que habilita a transferência de dados gerados de volta para sua loja.

> **Importante:** A sincronização dos campos de SEO não é possível sem o plugin conector do Fozzels. Você pode baixá-lo na parte inferior deste artigo.

### ![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/x8U6ii3HyPbJrpm22XJ4KTrBPkYOpJMBqw.png)Passo 2: Ativação no Fozzels

1.  Navegue até a seção **Integrações** e selecione sua integração do WooCommerce.

2.  Na aba **Configuração**, encontre a opção **"Yoast WooCommerce SEO"**.

3.  Ative o alternador e clique em **SALVAR**.

###
![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/Q2vuNHpeZol7txxezMoTQmPyzT3To9Rwpw.png)

### Passo 3: Atualização da estrutura de dados

Para tornar os novos atributos visíveis na interface do Fozzels, você deve atualizar seu esquema de dados:

1.  Vá para a aba **Sites e lojas** e clique em **Puxar sites/lojas**.

2.  Execute uma **puxada completa de produtos (Puxar produtos)**.

3.  Depois que a puxada for concluída, a lista de atributos será atualizada e campos com o prefixo `yoast_` estarão disponíveis para mapeamento em seus Flows.

![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/xD90y_FdSVGO0v5sAa1SAVmX1hHGTvb8Tw.png)

## O combo final: WPML + Yoast + ACF

O Fozzels permite alcançar o "padrão ouro" do comércio eletrônico combinando:

-   **Suporte [WPML](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/):** Para SEO multilíngue.

-   **[ACF (Campos personalizados avançados)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** Para dados técnicos especializados.

-   **Yoast SEO:** Para domínio em mecanismos de busca. Você pode automatizar todos esses campos simultaneamente para cada versão de idioma de sua loja.
