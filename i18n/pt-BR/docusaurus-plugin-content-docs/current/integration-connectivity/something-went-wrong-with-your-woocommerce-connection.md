---
id: '103000395329'
title: 2.5.7. Algo deu errado com sua conexão WooCommerce?
sidebar_position: 14
slug: >-
  /integration-connectivity/something-went-wrong-with-your-woocommerce-connection
description: >-
  Não se preocupe — a maioria dos problemas de conexão são rápidos de resolver. Este guia o orientará pelas mensagens mais comuns que você pode ver e exatamente o que fazer. O
---

Não se preocupe — a maioria dos problemas de conexão são rápidos de resolver. Este guia o orientará pelas mensagens mais comuns que você pode ver e exatamente o que fazer.

##

## O que significa "Problemas de conexão detectados"?

Quando você salva sua integração WooCommerce, o Fozzels verifica automaticamente se tudo está configurado corretamente. Se algo está faltando ou precisa de atenção, você verá uma mensagem explicando o que fazer a seguir.

##

## Conexão base

-   **"Falha na autenticação."** Suas chaves de API estão erradas ou desatualizadas. Vá para sua loja WooCommerce → **Configurações → Avançado → API REST**, gere novas chaves e cole-as no Fozzels.

-   **"Acesso negado."** Sua chave de API não tem as permissões corretas. Ao criar a chave no WooCommerce, certifique-se de selecionar **Leitura/Escrita** — não apenas leitura.

-   **"API REST não encontrada."** Verifique novamente a URL que você inseriu. Deve parecer `https://yourstore.com` — sem barras extras ou erros de digitação.

-   **"Não é possível acessar sua loja."** Sua loja pode estar offline ou um plugin de segurança está bloqueando o acesso. Verifique se sua loja está funcionando e tente novamente.

-   **"Erro de certificado SSL."** O certificado de segurança da sua loja tem um problema. Entre em contato com seu provedor de hospedagem para resolvê-lo.

##

## ACF (Campos personalizados avançados)

-   **"Ambos os plugins são necessários."** Você precisa de dois plugins ativos em seu site WordPress: **Advanced Custom Fields** e **ACF to REST API**. Vá para **Plugins → Adicionar novo** e instale ambos.

-   **"ACF está ativo, mas o plugin conector está faltando."** Você tem ACF instalado, mas está perdendo o segundo plugin. Instale **ACF to REST API** e ative-o.

-   **"Conector está ativo, mas ACF não está."** O segundo plugin está lá, mas o ACF em si não está sendo executado. Vá para **Plugins** e ative **Advanced Custom Fields**.

-   **"A estrutura de permalink é incompatível."** Vá para **WordPress → Configurações → Permalinks** e mude de "Simples" para qualquer outra coisa — **Nome da postagem** funciona muito bem. Salve e pronto.

-   **"Os campos ACF não estão visíveis via API REST."** Abra seu grupo de campos ACF, vá para **Configurações do grupo** e ative **Mostrar na API REST**. Não se esqueça de salvar.

-   **"Incompatibilidade de versão da API REST do ACF."** Vá para **WordPress → Configurações → Permalinks → ACF to REST API** e defina a versão como **v3**.

##
WPML (Multilíngue)

-   **"Plugin WPML não detectado."** Instale e ative o plugin **WPML Multilingual CMS** em seu site WordPress. Em seguida, adicione pelo menos um idioma em **WPML → Idiomas**.

-   **"WPML está ativo, mas nenhum idioma está configurado."** Você tem WPML instalado, mas ainda não adicionou nenhum idioma. Vá para **WPML → Idiomas** e adicione os que você precisa.

-   **Acabou de ativar WPML?** Depois de ativá-lo, volte para **Sites e lojas** e clique em **Puxar sites/lojas**, depois execute **Puxar produtos** novamente. É assim que o Fozzels aprende sobre suas versões em idioma.

##
Yoast SEO

Yoast SEO precisa de duas coisas para funcionar com o Fozzels: o plugin **Yoast SEO** e nosso **plugin conector Fozzels**. Você pode baixar o conector em **app.fozzels.com**.

-   **"Ambos os plugins são necessários."** Nenhum plugin está ativo. Instale e ative **Yoast SEO** e o **plugin conector Fozzels** no WordPress.

-   **"Plugin conector não está instalado."** Yoast SEO está em execução, mas nosso conector está faltando. Baixe-o em **app.fozzels.com** e ative-o em **Plugins**.

-   **"Yoast SEO não está ativo."** O conector está lá, mas o Yoast SEO não está em execução. Vá para **Plugins** e ative **Yoast SEO**.
-   **"Seu plugin conector está desatualizado."** _(apenas uma observação)_ Tudo ainda funciona, mas recomendamos atualizar o conector para a versão mais recente para a melhor experiência. Baixe-o em **app.fozzels.com**.
**Acabou de ativar Yoast SEO?** Execute **Puxar sites/lojas** e **Puxar produtos** novamente para que o Fozzels possa carregar seus campos de SEO.

* * *

## AIOSEO (All in One SEO)

-   AIOSEO também precisa de duas coisas: o plugin **All in One SEO** e nosso conector **AIOSEO API Sync by Fozzels**. Baixe o conector em **app.fozzels.com**.

-   **"Ambos os plugins são necessários."** Nenhum plugin está ativo. Instale e ative ambos no WordPress.

-   **"Plugin conector não está instalado."** AIOSEO está em execução, mas nosso conector está faltando. Baixe-o em **app.fozzels.com** e ative-o.

-   **"AIOSEO não está ativo."** O conector está lá, mas o AIOSEO não está em execução. Vá para **Plugins** e ative **All in One SEO**.

-   **"Seu plugin conector está desatualizado."** _(apenas uma observação)_ Tudo ainda funciona, mas atualizar o conector é recomendado. Baixe a versão mais recente em **app.fozzels.com**.

**Acabou de ativar AIOSEO?** Execute **Puxar produtos** novamente para que o Fozzels possa carregar seus campos AIOSEO.

* * *

## Usando Yoast SEO e AIOSEO ao mesmo tempo?

Esses dois plugins não funcionam juntos — no Fozzels ou no WordPress. Escolha um e desative o outro em ambos os lados. Não tem certeza qual escolher? Use aquele que você já está usando em sua loja.

* * *

## Ainda preso?

Se nada acima ajudou, entre em contato conosco em **[support@fozzels.com](mailto:support@fozzels.com)** ou abra um ticket no centro de ajuda. Uma captura de tela da mensagem de erro ajuda muito em nos ajudar a resolvê-lo rapidamente!
