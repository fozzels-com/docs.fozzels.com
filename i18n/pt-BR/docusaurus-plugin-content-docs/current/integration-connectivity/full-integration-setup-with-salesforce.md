---
id: '103000410190'
title: 2.10.1 Configuração completa da integração com o Salesforce.
sidebar_position: 21
slug: /integration-connectivity/full-integration-setup-with-salesforce
description: Este guia mostra como criar uma nova integração com o Salesforce Commerce Cloud, da configuração inicial até salvar os ajustes e ativar Websites &…
---

Este guia mostra como criar uma nova integração com o Salesforce Commerce Cloud: da configuração inicial até salvar os ajustes, ativar Websites & Stores, puxar os dados de produto e revisar os mapeamentos de atributos. Você vai aprender a preencher os dados de conexão obrigatórios (Short Code, Organization ID, Client ID/Secret), entender como o Global Pull Schedule funciona com horário UTC e saber quando vale a pena configurar atrasos entre as requisições.

## Passo 1: Ir até a criação da integração

1.  No menu lateral, vá em **Home → Integrations**.
2.  Clique no botão **Create** (canto superior direito).
3.  Na tela **"Choose your integration"**, selecione a plataforma **Salesforce**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/IJA_dZ5zfXA48PaD8HMxsHD71ItRVgwANg.png)
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/sTmy2P9U7mD0ENp0NC-gg8Y0oT53ZtfzLg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/bbv7bi_E2qSTk1bDVEN706lCu7fETDnn1g.png)
Isso abre o formulário **Create New Integration**, composto por três etapas: **1\. Configuration → 2. Websites & Stores → 3. Attributes**.

## Passo 2: Preencher o formulário de configuração
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/_4n7-QBaGDhtz4yq_LpPLXF5t7s-sE-_vQ.png)

### Campos principais:

| Campo | Descrição |
| --- | --- |
| **Name**\* | Nome da integração — usado para identificá-la na lista de integrações |
| **URL**\* | URL base da sua instância do Salesforce Commerce Cloud |

**Bloco de configuração:**

| Campo | Descrição |
| --- | --- |
| **Short Code**\* | Código curto da sua instância do Salesforce Commerce Cloud |
| **Organization ID**\* | O ID da sua organização no Salesforce |
| **Client ID**\* | ID do cliente OAuth criado no Salesforce Account Manager |
| **Client Secret**\* | Chave secreta desse cliente OAuth |
| **Image CDN Base URL** _(opcional)_ | URL base do CDN (DIS) usado para baixar as imagens dos produtos. Exemplo: `https://exxe.ххххх.commercecloud.salesforce.com/dw/image/v2/XXXX-XXX` |

_Os campos marcados com asterisco (\*) são obrigatórios._

## Passo 3: Global Pull Schedule

O botão **Overwrite Global Pull Schedule** permite definir quando a sincronização de produtos deve rodar. Se estiver desativado, vale a programação global padrão (`03:30`).

> ⚠️ **Importante: o horário é definido em UTC**
>
> O campo Global Pull Schedule usa **horário UTC**, e não o seu fuso local.
>
> Isso importa principalmente se você tem várias Stores em regiões diferentes: um horário de baixo movimento (madrugada) para uma loja pode cair bem no pico de tráfego de outra. Rodar um pull de dados em horário de pico gera carga extra no seu site e pode deixá-lo lento para os compradores.
>
> **Recomendação:** se suas Stores atendem fusos diferentes, não dependa só do Global Pull Schedule — sobrescreva a programação por Store (`Overwrite Global Pull Schedule` nas configurações daquela Store) e escolha um horário que corresponda à janela de baixo movimento real daquela loja, convertida para UTC.

## Passo 4: Delay Between Pages / Delay Between Requests

Os campos **Delay between pages** e **Delay between requests** definem uma pausa (em milissegundos, faixa de 100 a 15000 ms) entre páginas de resultados e entre requisições individuais à API, respectivamente.

> ℹ️ **Dica:** esses campos são opcionais. Se ficarem vazios, vale o atraso padrão da plataforma.
>
> Recomendamos **não definir esses valores logo de cara** ao configurar a integração pela primeira vez. Em vez disso, faça alguns pulls de dados com as configurações padrão e veja como se comporta:
>
> -   Se os pulls terminarem com sucesso, não é preciso configurar mais nada.
> -   Se aparecerem erros (por exemplo, limitação de requisições pelo Salesforce), volte às configurações da integração e aumente o atraso para reduzir a carga sobre a API.

## Passo 5: Salvar

Depois de preencher todos os campos obrigatórios, clique em **Save** para seguir para a próxima etapa: **Websites & Stores**.

## Passo 6: Websites & Stores

Depois de clicar em **Save**, você é redirecionado para a aba **2\. Websites & Stores** da integração.

> ✅ _Você verá uma mensagem de sucesso: "Integration was created successfully. Please, do not forget to activate your Integration."_

### 1\. Ativar a integração

Antes de conseguir puxar suas stores/websites, coloque **Active** em ON (canto superior direito da página, na barra de status da integração: Active / Authorized / REST API Connected).

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/Fn99DCFxArzsidpIraptWFwTO-BnqzkyTg.png)

### 2\. Puxar Websites e Stores

Clique no botão **PULL WEBSITES AND STORES**. Isso autoriza a conexão com o Salesforce e traz os Websites e Stores disponíveis.

> ✅ Quando der certo, você verá: "Integration status has been updated" e, em seguida, "Your websites and stores was pulled from integration successfully". Os indicadores **Authorized** e **REST API Connected** ficam verdes (✓).

### 3\. Ativar Websites e Stores

Depois do pull, você verá uma tabela dividida em **Websites** (Name, Code, Status) e **Stores** (Language, Status, Pull schedule, Products, Pull Progress, Actions).

Coloque cada **Website** e cada **Store** em Active, um a um.

> ℹ️ **Observação:** uma estrela (⭐) ao lado do nome de um Website ou Store indica que ele é o **padrão (principal)**.

### 4\. Puxar produtos

Assim que uma Store estiver ativa, o botão **Pull products** fica habilitado. Ao clicar nele, o pull dos dados de produto é iniciado.

> ℹ️ **Observação:** iniciar um pull na verdade roda **4 etapas sequenciais**, exibidas como barras de progresso separadas quando você expande o Pull Progress (pela seta ao lado do botão):
>
> 1.  **Product Attribute**
> 2.  **Category Attribute**
> 3.  **Category**
> 4.  **Product**
>
> Cada etapa tem sua própria barra de progresso e um ícone **Refresh** para rodar aquela etapa específica de novo. Toda etapa também tem um ícone **View logs** para consultar o log detalhado daquela fase do pull.
>
> Além disso, as etapas **Category** e **Product** têm um ícone **View in catalog**, que leva direto às categorias/produtos puxados no seu catálogo.

Quando as 4 etapas chegarem a 100%, a barra principal **Pull Progress** mostra **"Product - 100%"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/AXWOgFul8iBQWgLq0jQ5k5HmCHYYds3MQQ.png)

## Passo 7: Attributes

A terceira e última etapa, **Attributes**, mostra a lista de atributos puxados do seu catálogo do Salesforce, junto com o status de mapeamento de cada um.

### Seletor de modo de atributos

Por padrão, a tabela exibe os atributos de **Product**. No topo da tabela há um seletor de modo com três opções:

-   **Product**
-   **Category**
-   **Brand**

> ⚠️ **Observação:** nesta integração, os atributos de **Brand** **ainda não têm suporte** — mesmo que a opção apareça no seletor.

Alternar entre os modos muda qual conjunto de atributos aparece. Por exemplo, ao mudar para **Category**, você vê atributos específicos de categoria como `Category ID`, `Description`, `Name`, `Page Description`, `Page Keywords`, `Page Title`.

### Colunas da tabela:

| Coluna | Descrição |
| --- | --- |
| **Name** | ID e rótulo do atributo (ex.: `35759: Brand`, `35777: Category ID`) |
| **Code** | O código técnico do atributo no Salesforce (ex.: `brand`, `ean`, `origin_category_id`) |
| **Scope** | Escopo do atributo (quando aplicável) |
| **Generic Mapping** | Se o atributo está mapeado para um campo genérico/de sistema |
| **Allow HTML** | Se conteúdo HTML é permitido para este atributo (✓/—) |
| **Data Density Percent** | Percentual de produtos/categorias que realmente têm valor para este atributo — ajuda a identificar campos pouco preenchidos (ex.: `Page Keywords` em 26%, `Category ID` em 100%) |
| **Example data** | Um valor de exemplo tirado de um registro real (produto ou categoria, conforme o modo) |
| **Active** | Se o atributo está ativo/em uso no momento (✓) |
| **Actions** | Ícone de edição (✏️) para configurar o mapeamento do atributo |

### Opções da barra de ferramentas:

-   Menu **Actions** — ações em massa para os atributos selecionados
-   **Seletor de Store** (ex.: Mystore`: en_us (en_US)`) — escolhe de qual Store vêm os dados de exemplo
-   **Get random example data** — depois de escolher uma Store no menu, preenche a coluna **Example data** com um valor de exemplo novo, sorteado para cada atributo — útil para conferir o mapeamento
-   **Column visibility** — mostra ou oculta colunas da tabela
-   **New Attribute** (canto superior direito) — adiciona manualmente um atributo personalizado que não está na lista padrão

> ℹ️ **Observação:** os atributos exibidos por padrão são o **conjunto base** que já vem pronto (ex.: Brand, EAN, Long Description, Price no modo Product; Category ID, Name, Description no modo Category). Se o seu catálogo do Salesforce tiver **atributos personalizados**, use o botão **New Attribute** para adicioná-los e mapeá-los manualmente.

## Passo 8: Editar um atributo

Clicar no ícone ✏️ **Edit attribute** na coluna Actions abre o pop-up **Edit attribute**, com todos os detalhes daquele atributo — alguns campos são editáveis, outros são valores somente leitura/de sistema.

### Campos:

| Campo | Descrição |
| --- | --- |
| **Entity Type** | Se o atributo pertence a **Product**, **Category** ou **Brand** _(somente leitura)_ |
| **Name (Origin Attribute Name on Integration)** | O nome de exibição do atributo como vem do Salesforce (ex.: `Long Description`) |
| **Code** | O código interno do atributo (ex.: `longDescription`) |
| **Origin Attribute ID** | O ID do atributo no lado da integração de origem (se definido) |
| **Origin Attribute Code** | O código do atributo como existe no lado do Salesforce (ex.: `longDescription`) |
| **Frontend input** | O tipo de campo usado para exibir/editar este dado (ex.: `Textarea`) |
| **Frontend Field Display With Widget** | Widget opcional para renderizar este campo no frontend |
| **Generic Mapping** ℹ️ | Mapeia este atributo para um campo genérico/de sistema, quando aplicável |
| **Transform Data** | Avançado: permite **execução de código em tempo de execução** para transformar os dados recebidos antes de salvá-los _(⚠️ marcado com um aviso — para uso avançado/técnico)_ |

### Caixas de seleção:

| Opção | Descrição |
| --- | --- |
| **Allow HTML** | Se conteúdo HTML é permitido neste campo |
| **Enabled** | Se o atributo está ativo e em uso |
| **Filterable** | Se este atributo pode ser usado como filtro (ex.: na navegação do catálogo) |
| **Mutable** ℹ️ | Se o valor pode ser alterado/sobrescrito depois do primeiro pull |
| **Inheritable** ℹ️ | Se o valor é herdado (ex.: de uma categoria pai ou da loja padrão) |

### Localização

Logo abaixo, por **Website** (ex.: `Mystore`) e para cada **locale** ativo (ex.: `en_us (en_US)`), você pode inserir/editar diretamente um **valor localizado** para este atributo — por exemplo, sobrescrevendo o texto de `Long Description` exibido naquele site/locale específico.

Clique em **Save** para aplicar as alterações, ou em **Cancel** para descartá-las.

> ⚠️ **Cuidado:** o campo **Transform Data** permite execução de código em tempo de execução — este é um recurso avançado. Um código incorreto aqui pode quebrar o processamento de dados deste atributo. Recomendamos usá-lo apenas se você entender a lógica de transformação necessária ou, em caso de dúvida, deixar registrado um contato do time de suporte.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dXfx5OPU1hiT51CXn8LiDQwH-TEXGJXdVg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iV0xwN-jnstAKKgixyaCk_xrX_YowzggDg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dFxEvhIpzZghLVLLDiYbGvsGjZphndAgYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/N4ix6-rdWoomYb4sDO8JzYCvCdyhKxL3Cg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iSFTjf50J_sPVCyMi1T5KeoayFI8zi9FHg.png)

Neste ponto, a integração com o Salesforce em si está totalmente configurada: autorizada, conectada, com os Websites/Stores ativados e os dados de produto puxados com sucesso.

Os próximos passos — configurar os **Catalogs** e montar o **Flow** — seguem o mesmo processo de qualquer outro tipo de integração e estão descritos na documentação geral de integrações, não na específica do Salesforce.
