---
id: '103000389531'
title: 2.5.6.  Suporte WPML para WooCommerce (Automação Multilíngue)
sidebar_position: 13
slug: /integration-connectivity/wpml-support-for-woocommerce-multilingual-automation
description: >-
  Este guia cobre a configuração e uso da integração WPML (Plugin multilíngue do WordPress) no Fozzels. Este recurso permite automatizar c
---

Este guia cobre a configuração e uso da integração **WPML (WordPress Multilingual Plugin)** no Fozzels. Este recurso permite automatizar a geração de conteúdo e sincronização para cada localidade de idioma de sua loja dentro de uma única integração.

## Visão geral do recurso

A integração do Fozzels com WPML permite gerenciar estruturas multilíngues complexas sem a necessidade de conexões separadas para cada idioma.

**Benefícios-chave:**

-   **Identificação de localidade:** Detecção automática de todos os idiomas de site ativos via API.

-   **Mapeamento flexível:** Direcionar conteúdo para as versões corretas em idioma de seus produtos, incluindo:

-   **Campos padrão** (Título, Descrição, Descrição curta);

-   **Plugins de SEO** (**[Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce/)** ou **[All in One SEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)**);

-   **Campos personalizados** (**[ACF - Campos personalizados avançados](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)**).

-   **Eficiência do fluxo de trabalho:** Gerenciar catálogos globais de uma única interface.

## Configuração de integração no Fozzels

Para ativar o suporte multilíngue, siga este algoritmo passo a passo:

### 1\. Ative a funcionalidade

1.  Navegue até a seção **Integrações** e selecione sua integração WooCommerce.

2.  Na aba **Configuração**, localize o **bloco de configurações WPML**.

3.  Ative **"Ativar suporte multilíngue WPML"**.

4.  **Crucial:** Clique no botão **"SALVAR"** para confirmar essas alterações em sua configuração.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/4V_jMfihW94CP3CNHSo9yd7-LbwRCXJSJg.png)

### 2\. Inicializar localidades (Sites e lojas)

Depois de salvo, você precisa buscar a lista de idiomas do seu site WordPress:

1.  Mude para a aba **Sites e lojas** dentro das configurações de sua integração.

2.  Clique no botão **"Puxar sites/lojas"**. O Fozzels consultará seu site WordPress para recuperar todos os idiomas configurados.

3.  Na lista que aparece, **ative (alterne)** os idiomas específicos que você pretende gerenciar.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/POzdAldcqgEXxkAsgSEbnJLTDF9nzoogmg.png)
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/rgGtdO9cFLCfJOPmQs1SQc5NKnlyOx59Ag.png)

###
3\. Sincronização de catálogo

Esta é a etapa final e mais importante para tornar os produtos visíveis:

-   **RE-EXECUTE A PUXADA DE PRODUTOS.** Isso é obrigatório para que o sistema possa identificar os relacionamentos entre diferentes versões de idioma de seus produtos e **carregá-los em seus catálogos Fozzels** como objetos individuais para processamento. Sem essa etapa, produtos para novas localidades não aparecerão no sistema.

![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/S0333OKK3WCPquO5CYoLzBkvWJVsJRbG4w.png)

##
A combinação super poderosa: WPML + ACF + AIOSEO

O Fozzels permite combinar WPML com plugins líderes de mercado para automação máxima. Este é o "padrão ouro" para comércio eletrônico profissional:

-   **WPML + SEO ([Yoast](/integration-connectivity/yoast-seo-support-for-woocommerce/) ou [AIOSEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)):** Gere palavras-chave localizadas únicas, títulos de meta e descrições para cada versão de idioma. _(Observação: Use apenas um plugin de SEO por vez para evitar conflitos)._

-   **WPML + [ACF (Campos personalizados avançados)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** Sincronize conteúdo localizado em campos personalizados (por exemplo, especificações técnicas, blocos de marketing ou perguntas frequentes) separadamente para cada idioma.

-   **O combo final (WPML + ACF + AIOSEO):** O cenário mais poderoso. Isso permite automatizar descrições profissionais, dados técnicos especializados e um núcleo de SEO completo para o mercado internacional simultaneamente.
