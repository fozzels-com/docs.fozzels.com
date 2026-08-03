---
id: '103000408453'
title: 2.8.2 Configuração completa de integração com VTEX
sidebar_position: 19
slug: /integration-connectivity/full-integration-setup-with-vtex
description: 'Este guia fornece instruções passo a passo para integrar sua vitrine VTEX com Fozzels. O processo envolve dois estágios principais: gerar a requi'
---

Este guia fornece instruções passo a passo para integrar sua vitrine **VTEX** com **Fozzels**. O processo envolve dois estágios principais: gerar as chaves de API necessárias dentro do seu painel VTEX Admin e completar a configuração no Fozzels.

## Parte 1. Configuração no lado VTEX

Para permitir que o Fozzels leia a estrutura do seu catálogo e escreva o conteúdo gerado de volta à sua loja, você precisa criar uma Função dedicada com permissões específicas e gerar uma **Chave de aplicativo** e **Token de aplicativo**.

### Passo 1. Crie uma Função com Permissões Necessárias

1.  Faça login no seu painel **VTEX Admin**.

2.  Navegue até **Configurações da conta** → **Gerenciamento de usuários** → **Funções**.

3.  Clique em **Nova função**.

4.  Atribua um nome claro à função (por exemplo, `Integração Fozzels`).

5.  Na lista de permissões, adicione acesso aos seguintes recursos:

-   **Catálogo (Gerenciador de licenças):**

-   `Categoria` — Leitura / Escrita

-   `Marca` — Leitura / Escrita

-   `Produto` — Leitura / Escrita

-   `SKU` — Leitura / Escrita

-   `Especificação / Atributos` — Leitura / Escrita

-   **CMS (se usado para mídia/imagens):**

-   Acesso `Leitura` / `Escrita`

6.  Salve a nova função.

### Passo 2. Gere a Chave de aplicativo e Token de aplicativo

1.  No menu **Configurações da conta**, navegue até **Gerenciamento de conta** → **Chaves de aplicativo**.

2.  Clique em **Gerenciar chaves** ou **Gerar chave**.

3.  Insira um rótulo reconhecível (por exemplo, `Conector Fozzels`).

4.  Atribua a função criada no Passo 1 (`Integração Fozzels`) a esta chave.

5.  O sistema gerará duas credenciais:

-   **Chave de aplicativo** (permanece visível em sua lista).

-   **Token de aplicativo** (exibido **apenas uma vez** no momento da criação).

6.  **Importante:** Copie e armazene o **Token de aplicativo** em um local seguro imediatamente. Depois que você fechar a janela modal, ele não poderá ser recuperado novamente!

Os usuários também podem consultar a base de conhecimento oficial do VTEX para obter instruções detalhadas sobre como criar chaves e tokens de aplicativo:

-   Português: [https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave](https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave)
-   Inglês: [https://help.vtex.com/docs/tutorials/generated-keys](https://help.vtex.com/docs/tutorials/generated-keys)
-   Espanhol: [https://help.vtex.com/es/docs/tutorials/claves-generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas)

##
Parte 2. Configuração no lado Fozzels

Depois que suas credenciais de API estiverem prontas, configure a conexão dentro do Fozzels.

### Passo 1. Crie uma nova integração

1.  Faça login em **Fozzels** e abra **Integrações** no menu de navegação superior.

2.  Clique no botão verde **\+ Criar**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/gr4ewlKqt8412XMEVryYBDav3OrTYjV3cA.png)

3.  Selecione **VTEX** da lista de plataformas de integração disponíveis.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/XhEgu0COlAJDugphXl_XiaSkCKfS7TXueg.png)

### Passo 2. Insira detalhes de configuração (Aba 1: Configuração)

Preencha o formulário de conexão:

-   **Nome:** Insira um nome para esta integração (por exemplo, `Loja principal VTEX`).

-   **URL:** Insira a URL/domínio de sua loja VTEX.

-   **Chave de aplicativo:** Cole a chave de aplicativo gerada no VTEX.

-   **Token de aplicativo:** Cole o token de aplicativo gerado no VTEX.

-   **Ambiente** _(opcional)_: Padrão para `vtexcommercestable`. Modifique isso apenas se VTEX instruiu você a usar um ambiente personalizado.

-   **Localidades de tradução** _(opcional)_: Para contas entre fronteiras, especifique locales VTEX separadas por vírgula (por exemplo, `es-AR, en-US`). Deixe vazio para lojas de um único idioma.

-   **Agendamento de puxada global** _(opcional)_: Defina um agendamento de puxada automatizado personalizado ou deixe as configurações padrão.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pWrF-JFfW_Q5FelNCSz3IuA9l86yXEdItw.png)

-   **Limitação de puxada / Atrasos de API** _(opcional)_:

-   **Atraso entre páginas:** Defina uma duração de pausa após cada página obtida de resultados durante uma puxada (`100–15.000 ms`). Deixe vazio para usar o padrão da plataforma.

-   **Atraso entre solicitações:** Defina uma duração de pausa entre chamadas de API individuais durante uma puxada (`100–15.000 ms`). Deixe vazio para usar o padrão da plataforma.

-   ⚠️ **Nota:** Definir esses valores abaixo dos padrões da plataforma pode disparar limitação de taxa do VTEX e causar falha nas puxadas de catálogo.

Clique em **Salvar** no canto inferior esquerdo.

### Passo 3. Verifique o status e busque lojas (Aba 2: Sites e lojas)

1.  Verifique se todos os indicadores de status no canto superior direito estão ativos:

-   **Ativo** — Habilitado (alternador verde).

-   **Autorizado** — marca de seleção verde.

    -   **API REST conectado** — marca de seleção verde.
        ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/RnG46ot4A8YtvTAhatBAQIynkoXI8pbdJQ.png)

2.  Clique no botão **PUXAR SITES E LOJAS** no canto inferior esquerdo.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pywm-NKYAWTD0xkGPKQYZPH5WI5LKQCwIw.png)

3.  Seus sites e locales de loja aparecerão na tabela. Alterne os botões **Status** para ativo para os sites e lojas que você planeja processar.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/Nv3b_PjszS4fHUfa_V2atIDZe_Sx838pAA.png)

### Passo 4. Puxe dados de catálogo (Puxar produtos)

1.  Localize sua loja na tabela e clique em **Puxar produtos** (ou clique na seta suspensa ao lado dela).

2.  Você pode ativar a sincronização de dados para entidades específicas ou executá-las sequencialmente:

-   **Atributo de produto**

-   **Atributo de categoria**

-   **Atributo de marca**

-   **Categoria**

-   **Marca**

    -   **Produto**
**![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/A-WrFZksz5q1Ml-MXGaobf-Sn_rKBjsNEA.png)**

3.  Aguarde a conclusão da sincronização. O status de cada entidade ficará verde mostrando **100%**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/NamLSz4d9IyB6p3k94ULepvi0njfq465sQ.png)

4.  Clique no ícone de olho (**Visualizar**) ao lado de qualquer bloco de entidade para inspecionar os dados puxados.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/e6KLPc8LFKplzkHemoeoNUVVG1SLMjnF7w.png)

Parabéns! Sua integração **VTEX** agora está totalmente configurada e pronta para usar. Fozzels agora sincronizará perfeitamente os dados do seu catálogo, permitindo que você gere descrições de produtos de alta qualidade, conteúdo localizado e metadados com facilidade. Se precisar fazer ajustes posteriormente, você sempre pode voltar à página Configurações de integração.

Feliz automação!
