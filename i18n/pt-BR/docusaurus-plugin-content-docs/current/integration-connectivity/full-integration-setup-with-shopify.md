---
id: '103000367854'
title: 2.3.3. Configuração completa da integração com o Shopify.
sidebar_position: 5
slug: /integration-connectivity/full-integration-setup-with-shopify
description: Este guia detalha como estabelecer uma conexão segura e bidirecional entre sua loja Shopify e o Fozzels usando Custom Apps (Private Apps) e como configurar…
---

Este guia detalha como estabelecer uma conexão segura e bidirecional entre sua loja **Shopify** e o **Fozzels** usando **Custom Apps** (Private Apps), e como configurar os parâmetros de sincronização.

## Passo 1: Configuração do Custom App do Shopify

### 1.1. Criação do app

1.  **Abra** um navegador e **faça login** no seu **Shopify Admin**.

2.  **Vá** até a seção **Settings**.

3.  **Vá** até a seção **Apps and sales channels** no menu lateral.

4.  **Clique** em **Develop apps**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/FQMhwpXYX9AaHS64ub51WznCudG_HjF_GQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/im1AvTKi6MWYyaB5au2QV52k6g-zKgIJPQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/_flCr1G21Y0eiLDKAAikCGA8aItw-mC2Ng.png)

5. **Clique** em **Create an app**.

6. **Preencha** o App name (**Fozzels**) e **escolha** sua conta na seção de desenvolvedor no pop-up "Create an app".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/iwwZ8YAvrwc95yWJhOvB1oRxvwcRY-TaUw.png)

### 1.2. Configurar permissões (scopes)

1.  **Vá** até a seção **Configure Admin API scope**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Ul-1S5j5J-ff2mqfWD_hCHBbpsCPJPNOJA.png)

2. **Ative** as seguintes permissões obrigatórias usando o campo de busca: read\_product\_listings , read\_products , write\_products , read\_metaobject\_definitions , read\_metaobjects , read\_product\_feeds .

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Q-ViUfe7pSUU1B02HTAe2_fR-ncQiNevEw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/VlG1HE0ZjQVE-ftYEYNp1-YpSbOdYRXSGw.png)

3. **Atenção!** Se você usa **Markets** no Shopify para gerenciar diferentes regiões ou países, também precisa **adicionar** as seguintes permissões: write\_translations , read\_translations , write\_markets , read\_markets , read\_locales .

4. **Confira** a lista completa de permissões ativadas. Ela deve ficar assim:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/oRHwBytJR6A9FPaCaQdSSF83Rk5PHBPKiw.png)

5. **Clique** em Install app para concluir a criação.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/mmVlY4rP_YWAoM7ED5aByqLh37nfQomtcA.png)

### 1.3. Preparar as credenciais

1.  **Vá** até a seção **API credentials**.

2.  **Copie** e **guarde** todos os campos que você vai precisar informar no Fozzels.
    2.1. **Copie** a API key do Shopify (para o campo API key no Fozzels).
    2.2. **Copie** a API Secret key do Shopify.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/8XPxI0phlV2LNnbr1Aj-4wH3VCl_q62JQw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/0VUTxufo_k1f9p3im2fqQ0x1mA9tu4gAIg.png)

## Passo 2: Criar a integração no Fozzels

### 2.1. Configuração da conexão

1.  **Faça login** na sua conta do Fozzels em `https://app.fozzels.com`.

2.  **Vá** até a seção **Integration**.

3.  **Clique** em **“New Integration”**.

4.  **Escolha** a plataforma **Shopify**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Pyzl5zTGARVEwFahvJ9LgtWhqC42AkOW-Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/9ZDhsVks6A3bEPfvWW2KUSi_LC5nxPkKKA.png)

5. **Informe** o nome da sua integração.

6. **Informe** a URL da loja virtual do Shopify.

**Atenção!** Nos campos URL e App Host Name, **use** sempre o subdomínio `.myshopify.com`, e não a URL "real". Exemplo: `teststore.myshopify.com`.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/5Es2Xe5K4kX7G9ceTSqa0zcRdqY7LOd18w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/2V9Pr-82uxKsTQw5vzihFFVkdOXXeYRTYg.png)

7. **Copie** e **cole** todos os campos necessários no Fozzels.
    7.1. **Cole** a API key do Shopify no campo API key do Fozzels.
    7.2. **Cole** a API Secret key do Shopify no campo API Secret do Fozzels.
    7.3. **Cole** o App Host Name.

8. **Ative** o botão **Markets or LangShop** para poder sincronizar conteúdo de produtos de lojas diferentes (para os locales, não apenas para a loja padrão).

9. **Clique** no botão **Save**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/10MdEKRe3CAXM8phYawwasjHybRh5utDcg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/1gUl8bf3vOc8OzNHXG0e2xOkIOfqafgQgQ.png)

### 2.2. Ativação e sincronização

1.  **Ative** a integração.

2.  **Faça o pull** dos websites e stores.

3.  **Confirme** que a integração está com os seguintes status e que os websites e stores atuais aparecem na tela:
    3.1. Authorized: yes
    3.2. REST API Connected: yes

4.  **Ative** os websites e idiomas com os botões. _O idioma padrão do mercado é marcado com uma estrela._

5.  **Clique** no botão **“Pull Products”** para começar o pull de produtos e atributos. **Aguarde** o carregamento dos produtos (o andamento aparece na barra de progresso).

6.  **Vá** até a aba **“Attributes”** para ver, ativar/desativar ou editar os atributos carregados. **Leia** mais sobre o gerenciamento dos atributos [aqui](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/hf-7P91OunPrATXrTjI-eheh4APzl3yMTQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/QoYt9ReC4xDN26VlS3LlMJMq_48shcVFYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/nRpJNQGSWcWm_BelS7-uGiBdpAXGz7G4nA.png)

_\* O idioma padrão do mercado é marcado com a estrela_

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/BRzfcGMI7cun1wQGg3Vv1VHM9WbikgIqMg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/XOn4d1hw9r48sW-PN1cKj0Mr5B4q-HxITA.png)

Depois de criar a integração com sucesso, você já pode **começar** a montar flows e **gerar** seu **[primeiro conteúdo](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)** no Fozzels!
