---
id: '103000395334'
title: 2.5.8. Diagnosticando Sua Conexão WooCommerce no Fozzels
sidebar_position: 15
slug: /integration-connectivity/diagnosing-your-woocommerce-connection-in-fozzels
description: Se você vir um banner "Connection Issues Detected" após salvar sua integração WooCommerce, este artigo o ajudará a entender o que cada mensagem significa
---

#

Se você vir um banner **"Connection Issues Detected"** após salvar sua integração WooCommerce, este artigo o ajudará a entender o que cada mensagem significa e como corrigi-lo.

##
Como Funciona o Diagnóstico

Toda vez que você salva sua integração, o Fozzels verifica automaticamente a conexão com sua loja WooCommerce e o status de qualquer plugin habilitado. Se algo estiver faltando ou mal configurado, você verá uma notificação com uma descrição do problema e os passos para resolvê-lo.

Existem três tipos de notificações:

-   **Error** — algo está bloqueando a conexão. A integração não funcionará até isso ser resolvido.
-   **Warning** — a integração pode funcionar, mas algo pode causar problemas ou limitar a funcionalidade.
-   **Notice** — mensagem informativa, nenhuma ação é estritamente necessária mas recomendada.

##
Mensagens de Conexão Base

Essas mensagens aparecem independentemente de quais plugins você tenha habilitado.

-   **"Authentication failed. Check your Customer Key and Customer Secret."**
    Suas credenciais de API estão incorretas ou foram regeneradas desde que foram copiadas. Vá para **WooCommerce → Settings → Advanced → REST API**, regenere as chaves e cole-as no Fozzels.

-   **"Access denied. Your API key requires Read/Write permissions."**
    A chave de API foi criada com acesso somente leitura. O Fozzels precisa de acesso Write para enviar conteúdo gerado de volta à sua loja. Regenere a chave e selecione **Read/Write** no dropdown de Permissions.

-   **"REST API not found. Check your store URL."**
    A API REST do WooCommerce não pôde ser encontrada na URL fornecida. Certifique-se de que inseriu a URL correta da loja (por exemplo, `https://yourstore.com`) e que a API REST do WooCommerce está habilitada.

-   **"Cannot reach your store. Check the URL, server status, or firewall settings."**
    O Fozzels não conseguiu estabelecer uma conexão. Sua loja pode estar offline, a URL pode estar errada, ou um firewall ou plugin de segurança pode estar bloqueando solicitações de API externas.

-   **"SSL certificate error. Ensure your store uses a valid HTTPS certificate."**
    O certificado SSL de sua loja é inválido ou expirou. Entre em contato com seu provedor de hospedagem para renovar ou substituir o certificado.

##
ACF (Advanced Custom Fields)

Essas mensagens aparecem quando o toggle **Enable ACF** está ativado no Fozzels.

-   **"Both 'Advanced Custom Fields' and 'ACF to REST API' plugins are required. Make sure both are installed and active."**
    Nenhum plugin foi detectado em seu site WordPress. Instale e ative ambos os **Advanced Custom Fields** e **ACF to REST API** em seu painel WordPress em **Plugins → Add New**.

-   **"'Advanced Custom Fields' is active but the 'ACF to REST API' plugin is not installed."**
    O ACF está instalado mas o plugin conector está faltando. Instale e ative o plugin **ACF to REST API** para permitir que o Fozzels leia seus campos personalizados.

-   **"'ACF to REST API' plugin is active but 'Advanced Custom Fields' is not active."**
    O plugin conector está instalado mas o próprio ACF não está ativo. Vá para **Plugins** em seu painel WordPress e ative **Advanced Custom Fields**.

-   **"Permalink structure is incompatible with REST API."**
    Sua estrutura de permalink do WordPress está definida como **Plain**, o que quebra o acesso à API REST. Vá para **WordPress → Settings → Permalinks** e selecione qualquer estrutura que não seja Plain (por exemplo, **Post name**). Salve as alterações.

-   **"ACF fields are not visible via the REST API."**
    Seu ACF Field Group não está exposto à API REST. Vá para **ACF → Field Groups**, abra o grupo relevante, navegue até **Group Settings** e ative ambos **Active** e **Show in REST API**.

-   **"ACF REST API version mismatch. Version v3 is required."**
    Se você estiver usando o plugin **ACF to REST API**, ele deve estar definido para v3. Vá para **WordPress → Settings → Permalinks → ACF to REST API** e defina a **Request Version** para **v3**.

##
WPML (Multilingual)

Essas mensagens aparecem quando o toggle **Enable WPML** está ativado no Fozzels.

-   **"WPML plugin is not detected on your WordPress site."**
    O plugin WPML não está instalado ou não está ativo. Instale e ative o **WPML Multilingual CMS** em seu site WordPress, depois configure pelo menos um idioma adicional em **WPML → Languages**.

-   **"WPML is active but no languages are configured."**
    O WPML está instalado mas nenhum idioma adicional foi configurado. Vá para **WPML → Languages** e adicione pelo menos um idioma à sua loja.

-   **After enabling WPML, re-run Pull Stores/Websites and Pull Products.**
    Isso é necessário para que o Fozzels detecte todos os locales de idioma e carregue as versões corretas de produtos para cada idioma. Sem executar novamente o pull, novas locales não aparecerão no sistema.

* * *

## Yoast SEO

Essas mensagens aparecem quando o toggle **Yoast WooCommerce SEO** está ativado no Fozzels. A integração do Yoast SEO requer dois plugins ativos em seu site WordPress: **Yoast SEO** e o **Yoast SEO WooCommerce REST API by Fozzels** plugin conector.

> Você pode fazer download do plugin conector Fozzels em **app.fozzels.com** ou no guia de configuração na Knowledge Base.

* * *

-   **"Both 'Yoast SEO' and 'Yoast SEO WooCommerce REST API by Fozzels' plugins are required."**
    Nenhum plugin foi detectado. Instale e ative ambos em seu painel WordPress.

-   **"'Fozzels SEO Fields REST API for WooCommerce' plugin is not installed or not active."**
    O Yoast SEO está ativo mas o plugin conector Fozzels está faltando. Faça download e instale-o em **app.fozzels.com**, depois ative-o em **Plugins**.
-   **"Yoast SEO is not active."**
    O plugin conector está instalado mas o Yoast SEO em si não está ativo. Vá para **Plugins** e ative **Yoast SEO**.

-   **"Your 'Fozzels SEO Fields REST API for WooCommerce' plugin is outdated."**
    Você está usando uma versão mais antiga do plugin conector. A integração continuará funcionando, mas recomendamos atualizar para a versão mais recente para melhor desempenho e compatibilidade. Faça download da versão mais recente em **app.fozzels.com**.

-   **After enabling Yoast SEO, re-run Pull Stores/Websites and Pull Products.**
    Isso é necessário para carregar os atributos `yoast_title`, `yoast_meta_description` e `yoast_focus_keyword` em seu catálogo Fozzels.

* * *

## AIOSEO (All in One SEO)

Essas mensagens aparecem quando o toggle **AIOSEO** está ativado no Fozzels. A integração AIOSEO requer dois plugins ativos: **All in One SEO** e o **AIOSEO API Sync by Fozzels** plugin conector.

> Você pode fazer download do plugin conector Fozzels em **app.fozzels.com** ou no guia de configuração na Knowledge Base.

-   **"Both 'All in One SEO' and 'AIOSEO API Sync' plugins are required."**
    Nenhum plugin foi detectado. Instale e ative ambos em seu painel WordPress.

-   **"'All in One SEO' is active but the 'AIOSEO API Sync' plugin is not installed."**
    O AIOSEO está ativo mas o plugin conector Fozzels está faltando. Faça download e instale-o em **app.fozzels.com**, depois ative-o em **Plugins**.

-   **"'AIOSEO API Sync' plugin is active but 'All in One SEO' is not active."**
    O plugin conector está instalado mas o próprio AIOSEO não está ativo. Vá para **Plugins** e ative **All in One SEO**.

-   **"Your 'AIOSEO API Sync' plugin is outdated."**
    Você está usando uma versão mais antiga do plugin conector. A integração continuará funcionando, mas recomendamos atualizar para a versão mais recente. Faça download em **app.fozzels.com**.

-   **After enabling AIOSEO, re-run Pull Products.**
    Isso é necessário para carregar os atributos `_aioseo_title`, `_aioseo_description` e outros atributos AIOSEO em seu catálogo Fozzels.

* * *

## Conflito: Yoast SEO e AIOSEO

**"Both Yoast SEO and All in One SEO are active at the same time. This will cause conflicts. Please disable one of them to continue."**

O Yoast SEO e o AIOSEO não podem ser usados simultaneamente — no Fozzels ou em seu site WordPress. Escolha um plugin de SEO e desabilite o outro em ambos os lados.

* * *

## Ainda Tendo Problemas?

Se você seguiu os passos acima e o problema persiste, entre em contato com nossa equipe de suporte em **[support@fozzels.com](mailto:support@fozzels.com)** ou envie um ticket via Help Center. Inclua uma captura de tela da mensagem de erro e suas configurações de integração para nos ajudar a ajudá-lo mais rapidamente.
