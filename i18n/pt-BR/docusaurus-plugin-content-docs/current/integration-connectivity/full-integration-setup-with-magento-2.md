---
id: '103000367853'
title: 2.2. Configuração Completa de Integração com Magento 2.
sidebar_position: 2
slug: /integration-connectivity/full-integration-setup-with-magento-2
description: Este guia detalha o processo de estabelecimento de uma conexão segura e bidirecional entre sua loja Magento 2 e Fozzels. Você gerará os Tokens de API
---

Este guia detalha o processo de estabelecimento de uma conexão segura e bidirecional entre sua loja Magento 2 e Fozzels. Você gerará os Tokens de API necessários e configurará permissões, garantindo importação contínua de dados de produtos e exportação de conteúdo.

A integração Magento 2 requer a criação de uma Nova Integração dedicada no painel de administração Magento para gerar quatro chaves essenciais: **Consumer Key**, **Consumer Secret**, **Access Token** e **Access Token Secret**. Também configuraremos o atributo `fozzels_completion_date` necessário para rastrear sincronização de conteúdo.

## Parte 1: Configuração Magento 2 (Criando a Integração e Tokens)

Você deve criar uma nova integração e definir permissões específicas no seu painel de administração Magento.

### Etapa 1: Crie uma Nova Integração

1.  **Faça login** em seu painel de administração Magento.

2.  **Vá** para **System** / **Integrations**.

3.  **Clique** no botão **"Add New Integration"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gr4UpPbx41G2Oy6OOEdyCKol_ENow66ITg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/N7zrOrdp8o6CvLgUlZhpQuMcQs5r7OVmWw.png)

### Etapa 2: Preencha as Informações da Integração

1.  **Navegue** para a guia **Integration Info** (Configurações básicas).

2.  **Preencha** os campos obrigatórios:
    2.1. **Digite** Name: Fozzels.
    2.2. **Digite** E-mail: info@fozzels.com.
    2.3. **Digite** sua senha de administrador Magento para confirmação.

3.  **Ignore** campos opcionais (Callback URL, Identity link URL).

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/EM4ivAqLXVniXYWdiyAMElpusFWgWjUgvQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/6vzO74ehADcyuIaahKWVOQtYVvHWVkD_vg.png)

### Etapa 3: Configure Permissões de API (Escopos)

1.  **Clique** na guia **"API"**.

2.  No menu suspenso, **selecione** **"Custom"**.

3.  **Marque** apenas estas caixas de seleção (para acesso Read/Write):
    3.1. **Catalog**: Categories, Inventory, Products, Update Attributes, Edit Product Design.
    3.2. **Stores**: Settings, All Stores.
    3.3. **Attributes**: Product, Attribute Set.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/QphCzWE1SkWWnk3rdvVZReWcdPfHny5hsQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/TXQWFfKyYyQlNwHODT_3OsVgEHngoyaPXg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/j3iFU0HffLd73Kzc_rQEt62o2oTsVpxF2g.png)

### Etapa 4: Salve e Ative a Integração

1.  **Clique** no botão **"Save"** no canto superior direito.

2.  Na página de lista de Integrations, **localize** a nova integração Fozzels.

3.  **Clique** no link **"Activate"**.

4.  Na página de detalhe de ativação, **verifique** se as APIs corretas (da Etapa 3) foram selecionadas e **clique** em **"Allow"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/_C1d9Jr1A4136F6oEoNWIM2R2fnU0SwdvA.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/cBnv6FpiV0647eqHlNbNHIyCXcA_kHEx5A.png)

### Etapa 5: Copie e Armazene as Chaves de API

1.  Após clicar em "Allow", você será **redirecionado** para a página "Integration tokens for extensions".

2.  **Copie** e **armazene com segurança** todos os quatro valores preenchidos automaticamente:
    2.1. Consumer Key
    2.2. Consumer Secret
    2.3. Access Token
    2.4. Access Token Secret

3.  **Clique** em **"Done"**.

4.  **Verifique** ou **edite** detalhes de integração mais tarde ao **pressionar** o botão **"Edit"** na página Integrations.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/NOrDSAhjlO7hXjU2J1fafMmXfcMy-Lypwg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/Pj-HIMnlhJNvqDzEYmDckrL3xvLalFhsfw.png)

##

## Parte 3: Ativação de Fozzels e Sincronização de Dados

### Etapa 6: Verifique Acesso à API

Antes de conectar Fozzels, certifique-se de que seu servidor:

**1\. Não bloqueia solicitações externas para a API REST do Magento.**

Se seu servidor tem firewall, WAF ou serviço de segurança (Cloudflare, Sucuri, etc.) configurados — eles podem bloquear solicitações recebidas do Fozzels para sua loja.

### O que fazer:

1.  Solicite a lista atual de endereços IP do Fozzels em **[support@fozzels.com](mailto:support@fozzels.com)**.
    Para adicionar à whitelist, você pode usar os endereços IP do Fozzels:
**49.13.117.118**
**2a01:4f8:c17:bb1e::/64**

**91.205.205.66**

2.  Encaminhe esta lista para seu provedor de hospedagem ou administrador de servidor para adicioná-los à whitelist.

Se isso não for feito — você receberá um erro **401 (Unauthorized)** ao criar a integração no Fozzels e não conseguirá completar a conexão.

**2\. Não limita o número de solicitações de API do user agent: f**ozzels** .**
O user-agent completo é Mozilla/5.0 (Windows NT 10.0; Win64; x64; fozzels/5.1.2; +[https://app.fozzels.com/](https://app.fozzels.com/)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36

Durante a sincronização, Fozzels envia um grande número de solicitações, especialmente com catálogos de produtos grandes. Se seu servidor tiver limites rigorosos no número de solicitações por minuto ou segundo (rate limiting) — algumas delas serão rejeitadas.

### O que fazer:

1.  Entre em contato com seu provedor de hospedagem ou administrador de servidor.
2.  Peça-lhes para aumentar o limite de solicitações da API ou excluir endereços IP Fozzels e/ou User Agent Fozzels do rate limiting.

Se isso não for feito — você receberá um erro **429 (Too Many Requests)** durante Pull Products e a sincronização de produtos não será concluída.

Após confirmar as alterações, prossiga para criar a integração no Fozzels.

### Etapa 8: Crie Nova Integração no Fozzels

1.  **Faça login** em sua conta Fozzels.

2.  **Vá** para **Integrations**.

3.  **Clique** em **"Create New Integration"**.

4.  **Escolha** **"Magento"** das opções disponíveis.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/M9c13tHfbMEfpo7QsFt_Q6DvUljm-1jM1Q.png)![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/UvSS02f-tz_5sjBViKw7tq0kWJRti5mSvA.png)

####

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/RrDkikq2qamOno3s8JmMIrJfno5S5gpIew.png)

####

### Etapa 9: Preencha os Detalhes de Conexão

Você usará as chaves da Parte 1 para conectar Fozzels e iniciar a importação de dados.

1.  **Nomeie** sua integração claramente.

2.  **Digite** a **URL** do seu site Magento.

3.  **Preencha** as quatro chaves copiadas na **Etapa 5** nos campos correspondentes.

4.  **Clique** em **"Save"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/o_z4KRc-z_zOvcPpPvDV5evmBRJNZO-4vQ.png)

### Etapa 10: Ative e Sincronize Lojas

1.  **Ative** o toggle **'Active'** no canto superior direito. _Sem isso, a conexão não funcionará._

2.  **Navegue** para a guia **"Websites & Stores"**.

3.  **Clique** no botão **"Pull websites and stores"**. Seus sites e lojas devem aparecer agora.

4.  **Verifique** se a integração tem os seguintes status: **Authorized: yes** e **REST API Connected: yes**.

5.  **Ative** os sites e lojas atuais usando o **toggle** para continuar.

_![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/FvECiFfTlviQFFK2fJ8FF2Uoa9iBogloGg.png)_
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/d3dKR2OUZS7d-iiP2ptuZXFlu9JQKqz93A.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gjRG-nmFAybUytQo_B_QzBZew6ZY5FygNQ.png)

####

### Etapa 11: Extraia Produtos e Verifique

1.  **Clique** no botão **"Pull Products"** para iniciar o processo de importação do seu catálogo de produtos.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/s372RDIQcyC9gZU1pE-mNmKjoV3tHwE2XQ.png)

2.  **Aguarde** até que os produtos sejam carregados (o progresso será mostrado na barra de progresso).

3.  **Vá** para a guia **"Attributes"** para configurar suas regras de sincronização.

4.  **Leia** mais sobre trabalhar com atributos de produtos e personalizar campos de dados [aqui](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).

[](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/)
