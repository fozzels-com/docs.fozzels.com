---
id: '103000385597'
title: 2.3.2. Conectando lojas Shopify ao Fozzels pelo Shopify Dev Dashboard
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  Desde 01/01/2026, as lojas Shopify são conectadas pelo Shopify Dev
  Dashboard. Como criar e instalar o app no Shopify e conectá-lo no Fozzels,
  passo a passo.
---

Desde 01/01/2026, o Shopify não permite mais criar Private Apps no painel de administração da loja. Novas conexões e atualizações de integrações existentes são configuradas pelo Shopify Dev Dashboard. Este guia mostra os dois lados: criar e instalar o app no Shopify (Parte 1) e conectá-lo no Fozzels (Parte 2).

## Antes de começar: encontre seu domínio .myshopify.com

O Fozzels precisa do endereço .myshopify.com da sua loja, e não do domínio público da loja (como www.suamarca.com). Esse endereço foi atribuído quando a loja foi criada e não pode ser alterado, então ele pode ser diferente do nome da sua marca.

Você pode encontrá-lo em três lugares no painel de administração do Shopify:

1. **Barra lateral de Settings:** abra **Settings**. Seu domínio .myshopify.com aparece abaixo do nome da loja, no topo da barra lateral.
2. **Settings → Domains:** a página Domains lista todos os seus domínios. Use o que termina em .myshopify.com, mesmo que ele não esteja marcado como **Primary**.
3. **Barra de endereço do navegador:** dentro do painel de administração, a URL tem o formato `https://admin.shopify.com/store/your-store`. Pegue a parte depois de `/store/` e adicione `.myshopify.com`: `your-store.myshopify.com`.

![Settings → Domains: o domínio .myshopify.com na barra lateral e na lista](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/01-settings-domains-myshopify-domain.png)

Você vai usar esse domínio em dois formatos:

| Onde | Formato |
| --- | --- |
| App URL (Shopify), URL (Fozzels) | `https://your-store.myshopify.com` |
| Store domain (distribuição no Shopify), App Host Name (Fozzels) | `your-store.myshopify.com` |

## Parte 1. Shopify: crie o app

### 1. Crie o app

1. Faça login no Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Abra **Apps** na barra lateral esquerda e clique em **Create app** no canto superior direito. Dependendo do tipo da sua conta, a interface pode ser um pouco diferente. Se você não encontrar o botão, role até o final da página e clique no link **Create app**.
3. Em **Start from Dev Dashboard** (a opção à direita), digite um nome para o app, por exemplo `Fozzels_APP`, e clique em **Create app**. Essa opção fornece as credenciais de API sem usar a linha de comando.

![Dev Dashboard: Apps e Create app](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/02-dev-dashboard-apps-create-app.png)

![Criar um app: Start from Dev Dashboard](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/03-start-from-dev-dashboard.png)

### 2. Configure a versão

Depois de criar o app, você chega à página **Create version**. O Shopify já criou uma versão inicial (por exemplo `fozzels_app-1`). Suas configurações serão lançadas como uma nova versão baseada nela.

1. **App name:** mantenha o nome ou altere-o.
2. **App URL:** digite a URL da sua loja com https, por exemplo `https://your-store.myshopify.com`.
3. **Embed app in Shopify admin:** precisa estar ativado. Isso exibe a interface do Fozzels dentro do seu painel de administração do Shopify.
4. **Webhooks API version:** selecione a versão estável mais recente oferecida.

![Create version: App URL, Embed app in Shopify admin, Webhooks API version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/04-create-version-app-url-and-embed.png)

### 3. Adicione os scopes

Role até a seção **Access**. Cole a lista abaixo no campo **Scopes** ou clique em **Select scopes** e encontre cada permissão pela barra de pesquisa.

Scopes obrigatórios, prontos para copiar e colar:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

| Grupo | Scopes |
| --- | --- |
| Produtos | `read_product_listings`, `read_products`, `write_products`, `read_product_feeds` |
| Metadados | `read_metaobject_definitions`, `read_metaobjects` |
| Traduções | `read_translations`, `write_translations`, `read_publications` |
| Locales | `read_locales` |
| Markets | `read_markets`, `write_markets` |

Esses scopes são obrigatórios para todos os tipos de loja, inclusive lojas que usam Shopify Markets e vários idiomas.

**Pretende sincronizar dados de peso?** Adicione também `read_inventory` e `write_inventory` agora. Eles só são necessários para a configuração opcional Inventory no Fozzels (passo 10), mas adicioná-los agora evita que você tenha que criar uma nova versão do app depois. Lista completa incluindo inventory:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications,read_inventory,write_inventory
```

Deixe o restante da seção como está:

- **Optional scopes:** deixe vazio.
- **Use legacy install flow:** deixe desmarcado.
- **Allowed redirection URL(s):** deixe vazio.

O aviso "Some scopes require Shopify permission" não se aplica aos scopes de que o Fozzels precisa, então você não precisa solicitar acesso.

![Access: todos os 12 scopes obrigatórios](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/05-access-required-scopes.png)

### 4. Lance a versão

1. Clique em **Release**. O botão está disponível tanto no canto superior direito quanto no final da página.
2. No pop-up, se quiser, digite um **Version name** (por exemplo `v1`) e uma **Version message**. Se você deixar o nome vazio, o Shopify gera um.
3. Clique em **Release** para confirmar.

A nova versão aparece na página **Versions** com o status **Active**.

![Pop-up Release this new version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/06-release-new-version-pop-up.png)

![Versions: v1 Active](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/07-versions-v1-active.png)

### 5. Instale o app na sua loja

Os passos de instalação dependem do tipo da sua conta Shopify. Para começar, abra a página **Overview** do seu app clicando no nome do app na barra lateral esquerda.

![Overview do app: Installs e Distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/08-app-overview-installs-and-distribution.png)

#### Opção A: uma única loja (sem conta Partner)

1. No bloco **Installs**, clique em **Install app**.
2. Se for solicitado, faça login com o **e-mail do proprietário da loja**. Somente o proprietário da loja pode aprovar a instalação.
3. Na página **Install app** do painel de administração da loja, revise a lista de acessos e clique em **Install**.

Você não precisa configurar a distribuição. Continue no passo 6.

#### Opção B: uma conta Partner ou várias lojas

Primeiro, você configura a **Custom distribution** para gerar um link de instalação para uma loja específica.

1. No bloco **Distribution**, clique em **Select distribution method**. Isso abre o app no **Shopify Partners**, uma interface separada.
2. Selecione **Custom distribution** e clique em **Select**.
3. Confirme com **Select custom distribution**.

> **Atenção:** a escolha de Custom distribution não pode ser desfeita. Depois disso, o app só pode ser instalado em uma loja ou dentro de uma organização Plus.

![Shopify Partners: métodos de distribuição](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/09-partners-distribution-methods.png)

![Custom distribution selecionada](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/10-custom-distribution-selected.png)

![Confirmação de Select custom distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/11-select-custom-distribution-confirmation.png)

4. Em **Store domain**, digite o domínio da sua loja no formato `your-store.myshopify.com`.
5. Deixe **Allow multi-store install for one Plus organization** desmarcado.
6. Clique em **Generate link** e confirme.

> **Atenção:** essa confirmação também não pode ser desfeita. O app só ficará disponível para instalação na loja que você informou.

![Custom distribution: Store domain](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/12-custom-distribution-store-domain.png)

![Confirmação de Generate link para instalação em uma única loja](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/13-generate-link-confirmation.png)

7. O Shopify mostra o **Install link**. Clique em **Copy**.
8. Abra o link em um navegador em que você esteja logado no painel de administração da loja ou envie-o ao proprietário da loja. Isso é prático para agências: o proprietário da loja pode concluir a instalação sozinho.
9. Na página **Install app**, confira se aparece **This app is exclusive to your store**, revise a lista de acessos e clique em **Install**.

![Install link com Copy](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/14-install-link-copy.png)

![Página Install app no painel de administração da loja](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/15-install-app-in-store-admin.png)

O texto abaixo de "This app is exclusive to your store" depende do tipo de loja e pode ser diferente da captura de tela. A lista de acessos deve incluir **Products, custom data, other data**. Se aparecer apenas Products, estão faltando scopes: volte ao passo 3.

Depois da instalação, o app aparece em **Apps** na barra lateral do painel de administração da sua loja.

### 6. Copie as credenciais de API

1. No Dev Dashboard, abra **App settings** na barra lateral esquerda do seu app.
2. No bloco **Credentials**, copie o **Client ID**.
3. Clique no ícone de olho ao lado de **Secret** para exibi-lo e copie-o.

Você vai colá-los no Fozzels no passo 8.

![App settings: Credentials](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/16-app-settings-credentials.png)

> **Atenção:** não clique em **Rotate** a menos que seja necessário. Isso gera um novo Secret e o antigo deixa de funcionar imediatamente, o que interrompe sua conexão com o Fozzels até você atualizar o Secret no Fozzels.

Guarde as credenciais com segurança, por exemplo em um gerenciador de senhas. Não as envie por e-mail ou chat: o Secret dá acesso aos produtos e às traduções da sua loja.

## Parte 2. Fozzels: conecte a loja

### 7. Crie a integração

1. Faça login no Fozzels em [https://app.fozzels.com](https://app.fozzels.com) e abra **Integrations** na barra lateral esquerda.
2. Na tela **Choose your integration**, selecione **Shopify**.
3. No passo **Configuration**, preencha:
    - **Name:** qualquer nome que ajude você a reconhecer a integração.
    - **URL:** o endereço .myshopify.com da sua loja com https, por exemplo `https://your-store.myshopify.com`. Não use seu domínio personalizado.
4. Em **Connection Method**, escolha **Custom App**.

![Fozzels: Choose your integration](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/17-fozzels-choose-your-integration.png)

![Create New Integration: Configuration e Custom App](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/18-fozzels-configuration-custom-app.png)

Os outros métodos de conexão: **Fozzels Shopify App (OAuth)** conecta pelo app oficial do Fozzels e não exige que você crie seu próprio app (veja [2.3.1. Aplicativo Fozzels Shopify — Começando](/integration-connectivity/fozzels-shopify-app-getting-started)). **Legacy (Manual)** é para conexões configuradas da forma antiga.

### 8. Informe as credenciais de API

| Campo no Fozzels | O que informar |
| --- | --- |
| Api Key | Client ID do passo 6 |
| Api Secret | Secret do passo 6 |
| App Host Name | `your-store.myshopify.com`, sem https |

Você não precisa de um access token: o Fozzels o gera automaticamente.

### 9. Escolha o Markets mode

O Markets mode define como o conteúdo é distribuído entre seus mercados e idiomas no Shopify. Escolha com cuidado: alterá-lo depois não é uma simples troca (veja [Precisa alterar o Markets mode depois?](#need-to-change-the-markets-mode-later) no final deste guia).

**Caminho 1: traduções.** Você precisa do mesmo conteúdo para todos os mercados que compartilham um idioma, traduzido para cada idioma publicado. Escolha **Per language** ou **No markets** para a configuração mais simples, com um único site.

**Caminho 2: conteúdo exclusivo por mercado e idioma.** Você precisa de conteúdo diferente para cada mercado, mesmo dentro do mesmo idioma, por exemplo acentos de marketing diferentes por região. Escolha **Per market**.

| Modo | O que vira um website | O que é sincronizado |
| --- | --- | --- |
| No markets | Um website, com uma store por idioma publicado | Uma tradução por idioma, os mercados são ignorados |
| Per market | Cada mercado do Shopify, com uma store por idioma | Cada par de mercado e idioma separadamente |
| Per language | Cada idioma publicado | Uma tradução por idioma, que o Shopify aplica a todos os mercados com esse idioma |

Usa o LangShop? Ele funciona apenas com **No markets** e **Per language**.

![Credenciais de API e Markets mode](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/19-fozzels-api-credentials-and-markets-mode.png)

### 10. Configurações opcionais

Se você não tiver certeza de que precisa dessas configurações, mantenha os valores padrão.

**Inventory.** Ative esta opção para sincronizar os dados de peso da primeira variante do produto. O Fozzels extrai dois atributos adicionais, **Weight** e **Weight Unit** (ambos do tipo select), e pode enviá-los de volta ao Shopify.

> **Atenção:** Inventory exige os scopes `read_inventory` e `write_inventory`. Se você não os adicionou no passo 3, crie uma nova versão do app com esses scopes, lance-a e reinstale o app antes de ativar Inventory. Se a opção estiver ativada sem esses scopes, o Fozzels não consegue ler nenhum produto.

**Global Pull Schedule.** Por padrão, o Fozzels faz o pull dos produtos de todas as stores ativas da integração às 02:30. Para definir outro horário para a integração inteira, ative **Overwrite Global Pull Schedule** e escolha o horário. Uma store específica pode ter seu próprio agendamento nas configurações dessa store. Saiba mais em [3.1.2 Como Configurar Agendamento de Pull Global e API Throttling](/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling).

**Delay between pages e Delay between requests.** Use essas opções apenas se os pulls falharem por causa dos limites de requisições da API do Shopify. Deixe-as vazias para usar os padrões da plataforma.

| Campo | O que faz | Intervalo | Padrão do Shopify |
| --- | --- | --- | --- |
| Delay between pages | Pausa após cada página de resultados | 100–15000 ms | 2000 ms |
| Delay between requests | Pausa entre requisições individuais à API | 100–15000 ms | nenhum |

Valores abaixo dos padrões podem acionar a limitação de requisições e fazer os pulls falharem.

![Opções: Inventory, Global Pull Schedule, delays e Save](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/20-fozzels-optional-settings.png)

### 11. Salve

Clique em **Save** no final da página.

### 12. Ative a integração e faça o pull de websites e stores

Depois que você clica em **Save**, o Fozzels mostra "Integration was created successfully" e abre o passo **Websites & Stores**. O painel de status no canto superior direito mostra **Active** desativado, **Authorized** em vermelho e **REST API Connected** com um aviso. Isso é esperado nesta etapa.

1. Ative a opção **Active** no canto superior direito. O Fozzels faz a autorização com o Shopify e gera o access token.
2. Clique em **Pull Websites and Stores**.

**Authorized** e **REST API Connected** devem ficar verdes agora.

![Depois de Save: painel de status e Pull Websites and Stores](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/21-fozzels-status-after-save.png)

Se **Authorized** continuar vermelho, verifique se o app está instalado na sua loja (passo 5), se Api Key e Api Secret correspondem ao Client ID e ao Secret e se App Host Name é o seu hostname .myshopify.com sem https.

### 13. Ative websites e stores

A tabela agora mostra seus websites e as stores de cada um. A estrutura depende do Markets mode escolhido no passo 9. No modo **Per language**, cada idioma publicado é um website separado com uma store.

Uma estrela ao lado de um website indica o website padrão. Uma estrela ao lado de uma store indica a store padrão daquele website.

Para cada website com que você quer trabalhar, ative **as duas** opções: **Status** na seção Websites e **Status** na seção Stores. **Pull products** só fica disponível quando as duas estão ativadas.

![Tabela Websites & Stores depois do pull](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/22-fozzels-websites-and-stores-table.png)

### 14. Faça o pull dos produtos

1. Clique em **Pull products** na linha de uma store ativa. O Fozzels inicia quatro pulls ao mesmo tempo: **Product Attribute**, **Category Attribute**, **Category** e **Product**.
2. Para acompanhar cada um, clique na seta ao lado da barra de progresso.
3. Quando as quatro barras de progresso estiverem verdes em 100%, o pull estará concluído. A coluna **Products** mostra o número de produtos extraídos.

![Progresso do pull: quatro pulls em 100%](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/23-fozzels-pull-progress.png)

**Sua conexão com o Shopify está pronta.** Agora você pode começar a criar flows e gerar seu primeiro conteúdo.

Depois do primeiro pull, as **Product Pull Conditions** ficam disponíveis no passo Websites & Stores. Elas permitem filtrar quais produtos são importados. Isso é explicado em um artigo separado.

## Precisa alterar o Markets mode depois? {#need-to-change-the-markets-mode-later}

Trocar o Markets mode, em qualquer direção, não remove os websites e stores antigos. Eles continuam na tabela Websites & Stores como inativos, marcados com "Website is lost on integration", ao lado dos novos, que são criados e ativados automaticamente. Os flows vinculados às stores antigas param de ser executados.

![Depois de trocar de Per language para Per market: websites antigos inativos ao lado dos novos](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/24-old-websites-lost-after-mode-switch.png)

- **Nenhum flow criado ainda:** comece do zero para ter uma tabela limpa. Desative a integração atual, arquive-a e crie uma nova integração com as mesmas Api Key, Api Secret e App Host Name, escolhendo o Markets mode correto. Você não precisa de um novo app no Shopify.
- **Flows já criados:** entre em contato com o suporte do Fozzels antes de alterar o modo. Nós ajudamos você a fazer a troca sem perder seu trabalho.

Como o código de locale do lado do Shopify pode mudar, recomendamos, em todo caso, alterar o modo com a ajuda do suporte do Fozzels.

Vai passar especificamente de Per market para Per language? Veja [2.3.4. Migrando uma integração Shopify de Per market para Per language](/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language).
