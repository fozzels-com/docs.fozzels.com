---
title: 2.3.4. Migrando uma integração Shopify de Per market para Per language
sidebar_position: 5.5
slug: /integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language
description: >-
  Como mudar uma integração Shopify do Markets mode Per market para Per
  language: atualize os scopes do app no Shopify Dev Dashboard e, depois,
  recrie a integração no Fozzels ou entre em contato com o suporte.
---

A forma mais limpa de passar de Per market para Per language é atualizar os scopes do seu app Shopify e depois criar uma nova integração no Fozzels com o modo Per language. Se você já tem flows, entre em contato com o suporte do Fozzels em vez de fazer a troca por conta própria.

## Antes de começar

Este guia é para clientes cuja integração Shopify usa o modo **Per market** e que não precisam de conteúdo específico por mercado dentro de um mesmo idioma. Com **Per language**, você sincroniza uma tradução por idioma e o Shopify a aplica a todos os mercados em que esse idioma está publicado. Isso significa menos operações de sincronização e um custo menor.

Primeiro, verifique duas coisas.

**1. Seu app tem todos os scopes obrigatórios?** Per language precisa de scopes que versões mais antigas do app podem não ter, na maioria das vezes `read_publications`. Abra seu app no Shopify Dev Dashboard, vá até **Versions**, abra a versão ativa e compare os **Scopes** dela com a lista do Passo 1. Se estiver faltando algum, faça o Passo 1. Se todos os scopes estiverem lá, pule para o Passo 2.

**2. Você já tem flows no Fozzels?** Isso define como você troca o modo.

| Sua situação | O que fazer |
| --- | --- |
| Nenhum flow ainda | Passo 1, se necessário, depois Passo 2, Opção A: arquive e recrie a integração |
| Flows já criados | Passo 1, se necessário, depois entre em contato com o suporte do Fozzels (Passo 2, Opção B) |

Por que não simplesmente trocar o modo na integração existente? A troca não remove os websites e stores antigos, baseados em mercados. Eles continuam na tabela como inativos, marcados com "Website is lost on integration", ao lado dos novos, baseados em idiomas. Os flows vinculados às stores antigas param de ser executados e fica difícil navegar pela tabela.

![Depois de trocar o modo na própria integração: websites antigos marcados como perdidos, ao lado dos novos](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/01-old-websites-lost-after-mode-switch.png)

## Passo 1. Shopify: adicione os scopes que faltam

Você não precisa de um novo app. Você cria uma nova versão do app existente com os scopes atualizados. O Client ID e o Secret continuam os mesmos.

### 1.1. Crie uma nova versão

1. Faça login no Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Abra **Apps** e selecione seu app do Fozzels.
3. Vá até **Versions** e clique em **Create version**. A nova versão é baseada na sua versão ativa atual, então todas as configurações existentes são copiadas.

![Página Versions com Create version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/02-versions-create-version.png)

![Create version baseada na versão ativa](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/03-create-version-from-active.png)

### 1.2. Atualize os scopes

Role até a seção **Access**. Em versões mais antigas do app, o campo **Scopes** muitas vezes não tem `read_publications`. Veja um exemplo de lista incompleta:

![Antes: scopes sem read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/04-scopes-before-without-read-publications.png)

Substitua o conteúdo do campo **Scopes** pela lista completa:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

Se você também quiser sincronizar dados de peso (a opção Inventory no Fozzels), adicione `read_inventory` e `write_inventory` ao final da lista.

![Depois: lista completa de scopes, incluindo read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/05-scopes-after-full-list.png)

Deixe todo o resto sem alterações: **Optional scopes** vazio e **Use legacy install flow** desmarcado.

### 1.3. Lance a versão

1. Clique em **Release** (canto superior direito ou final da página).
2. Se quiser, digite um nome para a versão, por exemplo `v2`, e clique em **Release** para confirmar.

A nova versão passa a ser **Active**.

![Pop-up Release this new version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/06-release-new-version-pop-up.png)

### 1.4. Aprove as novas permissões na sua loja

Lançar uma versão ainda não dá ao app as novas permissões. O proprietário da loja precisa aprová-las instalando o app novamente. Até lá, Per language não vai funcionar corretamente.

1. Abra a página **Overview** do app e clique em **Install app**, ou abra o link de instalação em **Distribution** se você usa Custom distribution.
2. Faça login com a conta do proprietário da loja, se for solicitado.
3. Revise a lista de acessos e confirme a instalação.

## Passo 2. Fozzels: troque para Per language

### Opção A: nenhum flow ainda — arquive e recrie

Assim você fica com uma tabela Websites & Stores limpa, apenas com os novos websites baseados em idiomas.

1. Antes de começar, copie a **Api Key**, o **Api Secret** e o **App Host Name** atuais do passo Configuration da integração, ou pegue o Client ID e o Secret em **App settings → Credentials** no Shopify Dev Dashboard.
2. Abra a integração atual e desative a opção **Active**.
3. Arquive a integração.
4. Crie uma nova integração Shopify: **Integrations → Shopify**, método de conexão **Custom App**.
5. Informe os mesmos **URL**, **Api Key**, **Api Secret** e **App Host Name**.
6. Em **Markets mode**, escolha **Per language**.
7. Defina as configurações opcionais, se você as usava antes (Inventory, Global Pull Schedule, delays), e clique em **Save**.
8. Ative **Active** e clique em **Pull Websites and Stores**.
9. Ative **Status** para cada website e sua store e depois clique em **Pull products**.

![Nova integração: credenciais e Markets mode definido como Per language](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/07-new-integration-per-language.png)

Para a descrição completa de cada campo, veja [2.3.2. Conectando lojas Shopify ao Fozzels pelo Shopify Dev Dashboard](/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026).

### Opção B: flows já criados — entre em contato com o suporte

Entre em contato com o suporte do Fozzels antes de alterar o modo. Nós ajudamos você a fazer a troca mantendo seus flows funcionando e verificamos os códigos de locale do lado do Shopify, que podem mudar durante a troca.

## Depois da migração

No modo Per language, cada idioma publicado é um website separado com uma store.

![Per language: um website com uma store por idioma](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/08-per-language-websites-and-stores.png)

- [ ] A versão ativa do app no Shopify inclui `read_publications` e todos os outros scopes obrigatórios
- [ ] O proprietário da loja aprovou as novas permissões (app instalado novamente)
- [ ] A integração usa **Per language**
- [ ] **Authorized** e **REST API Connected** estão verdes
- [ ] Os websites e stores estão ativos para os idiomas de que você precisa
- [ ] Os quatro pulls (Product Attribute, Category Attribute, Category, Product) terminaram em 100%
- [ ] Os flows foram recriados nas novas stores ou o suporte confirmou a troca (Opção B)
