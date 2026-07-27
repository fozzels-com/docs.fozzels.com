---
id: '103000408519'
title: >-
  2.5.3. Integração do Fozzels com AIOSEO para WooCommerce: o guia completo de
  configuração
sidebar_position: 10
slug: >-
  /integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura
description: >-
  All in One SEO (AIOSEO) é o plugin líder do WordPress projetado para melhorar o posicionamento nos mecanismos de busca e aumentar o tráfego orgânico automatizando
---

**All in One SEO (AIOSEO)** é o plugin líder do WordPress projetado para melhorar o posicionamento nos mecanismos de busca e aumentar o tráfego orgânico automatizando elementos de SEO críticos como metatags e visualizações para redes sociais.

Ficamos felizes em anunciar a **integração completa entre Fozzels e AIOSEO para WooCommerce.** Esta poderosa combinação permite que você trate os campos de SEO como atributos padrão de produto. Agora você pode:

-   **Automatizar em larga escala:** Gere títulos e descrições de SEO únicos e otimizados com IA para milhares de produtos simultaneamente.
-   **Domínio em redes sociais:** Gerencie automaticamente dados de **Twitter Cards** e **Open Graph** para que seus produtos pareçam perfeitos ao serem compartilhados em plataformas sociais.
-   **Fluxos inteligentes:** Use **Content Flows** para editar e transformar dados de SEO assim como qualquer outro atributo de produto.
-   **Sincronização sem atritos:** Elimine a entrada manual de dados enviando instantaneamente o conteúdo gerado por IA diretamente para sua loja WooCommerce através de nosso conector de API dedicado.

Este guia explica como conectar **Fozzels**, **WooCommerce** e **All in One SEO (AIOSEO)** para automatizar os metadados da sua loja. Seguindo estas etapas, seus campos de SEO se comportarão como atributos padrão de produto, permitindo que você gere e sincronize conteúdo otimizado para buscadores em massa.

## Passo 1: Verificar e ativar AIOSEO no WordPress

Certifique-se de que o plugin SEO principal está ativo em seu site WooCommerce:

1.  Faça login no seu painel de administração do WordPress.
2.  Vá para **Plugins** > **Plugins instalados**.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/GzZDJBGqT-KNc5fzwQJbN_YK3DxB9L27oQ.png)

3.  Localize **All in One SEO** na lista:
    -   Se estiver desativado, clique em **Ativar**.
    -   Se já estiver ativo, você pode clicar em **Verificar este plugin** para verificar seu status e configurações atuais.
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/MC47tcQgV6Gp6YkSB4nXAZoiZ5Yc8Jfzbw.png)

4.  **Verifique os campos:** Abra qualquer produto em **Produtos**. Role para baixo até o bloco **Configuração de AIOSEO**. Você deve ver os campos padrão de _Título do produto_ e _Metadescição_.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/KLniw-RLi_y3vGzZ-dGZZuCnNlgy52I5CA.png)

    ##
    Passo 2: Instale o plugin "AIOSEO API Sync by Fozzels"

A configuração padrão do AIOSEO apenas permite que ferramentas externas leiam os dados. Para **sincronizar** o conteúdo gerado de volta à sua loja, você deve instalar nosso conector especializado:

    1.  No menu do WordPress, vá para **Plugins** > **Adicionar plugin**.
    2.  Clique em **Enviar plugin** na parte superior da página.
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/m9_o-voJfvIntmMBVELpiC_md_JzDyEdiQ.png)
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/aEPYP_G68OgjeKmNawqtJ6lTatnUATw7cQ.png)
    3.  Selecione o arquivo ZIP fornecido (**AIOSEO API Sync by Fozzels**), clique em **Instalar agora** e depois em **Ativar**.
        ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/vNHwUUnxn7pYnYZoT4nTeYhE-PtDy6UKSw.png)

4.  Este plugin habilita a transferência bidirecional e segura dos metadados de SEO através da API do WordPress.

####

#### **\*\*\* Você pode fazer download do arquivo ZIP necessário para o plugin "AIOSEO API Sync by Fozzels", anexado no final deste artigo.**

##

## Passo 3: Ative a compatibilidade no Fozzels

Ative a integração dentro da plataforma Fozzels:

1.  Abra a **aba de Configuração** de sua integração existente ou nova do WooCommerce no Fozzels.
2.  Localize a seção: **"All in One SEO – Powerful SEO Plugin to Boost SEO Rankings & Increase Traffic"**.
3.  Ative o alternador e **salve as alterações (SAVE)**.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/BXYw2biOt3WWhTzM6zW0eee8MMRThNoDrw.png)

## Passo 4: Identificação dos atributos de SEO

Depois que a integração está ativada, todos os campos relacionados a SEO aparecerão automaticamente na lista geral de atributos do Fozzels. Eles são fáceis de identificar e já vêm pré-configurados para uso imediato:

-   **Códigos técnicos:** Cada atributo de SEO é marcado com um código específico que começa com `_aioseo_` (por exemplo, `_aioseo_title`, `_aioseo_description`, `_aioseo_keywords`).
-   **Configuração padrão:** Para sua conveniência, esses atributos são automaticamente configurados como:
    -   **Ativo**
    -   **HTML permitido**
    -   **Filtrável**
-   **Redes sociais:** Você também pode gerenciar visualizações sociais através de atributos como `_aioseo_twitter_title` ou `_aioseo_og_title`.
    ![](/img/kb/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura/2NFsAgkmMv-akP9OzwmGQgn_lMH3mI1fNg.png)

###

## Passo 5: Content Flows e sincronização

A maior vantagem desta integração é que os campos de SEO agora se comportam como dados de produto normais. Você não está mais limitado a uma simples sincronização:

-   **Crie Flows personalizados:** Você pode construir **Content Flows** específicos para esses atributos. Use seus templates de IA existentes ou crie novos para gerar títulos e descrições de SEO otimizados.

-   **Fluxo de trabalho padrão:** Trate os atributos de SEO como qualquer outro campo de produto: edite-os, aplique filtros ou atribua-os a diferentes fontes de dados dentro do Fozzels.

-   **Atualização instantânea:** Depois que a geração for concluída, clique em **Sincronizar com a loja (Sync to Store)**. Fozzels preencherá instantaneamente os campos correspondentes do AIOSEO em seu site WooCommerce com o novo conteúdo gerado por IA.
