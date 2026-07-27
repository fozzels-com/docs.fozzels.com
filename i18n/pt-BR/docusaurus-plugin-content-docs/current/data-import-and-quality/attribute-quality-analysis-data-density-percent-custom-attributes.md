---
id: '103000368952'
title: 3.2.1. Análise de Qualidade de Atributos. Percentual de Densidade de Dados. Atributos Personalizados
sidebar_position: 6
slug: >-
  /data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes
description: >-
  Este documento fornece uma visão geral conceitual e instruções práticas
  detalhadas sobre o ciclo de vida completo de Atributos de produtos na
  plataforma Fozzels
---

Este documento fornece uma visão geral conceitual e instruções práticas detalhadas sobre o ciclo de vida completo de **Atributos** de produtos na plataforma Fozzels: desde a importação inicial e análise até configuração avançada, transformação e criação de campos personalizados.

Os Atributos são a **Fonte Única de Verdade** para geração de conteúdo de IA. Gerenciá-los envolve controlar **Densidade de Dados**, **mapeamento** e **localização**, o que é crítico para criar descrições de produtos de alta qualidade, relevantes e factualmente precisas. Configurar a coleção de atributos antes de começar o trabalho (revisando e desativando campos não-relevantes/vazios) é um trabalho essencial que facilita significativamente operações subsequentes.

### Parte 1: Importação e Análise Básica

#### 1.1. Quais são os Atributos do Fozzels?

Atributos são pontos de dados estruturados (por exemplo, `cor`, `preço`, `material`) importados da sua plataforma integrada. Eles servem como variáveis de entrada para o **Campo de Prompt**, permitindo a geração de conteúdo único para cada produto.

#### 1.2. Iniciando o Pull

O processo de importação de dados começa com o comando **Pull Products**.

1.  **Vá para** suas configurações de integração e **selecione** a aba **Websites & Stores**.

2.  **Clique** no botão **”Pull Products”** para a loja ativa.

3.  **Monitoramento:** O progresso é mostrado por uma barra de progresso. O processo pode ser gerenciado usando os botões **Stop**, **Pause** e **Resume**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/6SrlYRiz66TUDmf63b5peXAC6EfLCFTjEw.png)

4.  **Logs:** Relatórios detalhados sobre importação de produtos e atributos estão disponíveis via **”View Product Logs”** e **”View Attribute Logs”** na coluna Actions.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/DLITtFMHc0MmEeK2UDasXyL5ZaBZifO06Q.png)

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/JRoTBrRsovpu033tRmysjhhnEYa-1nIkzg.png)

####
1.3. Análise de Qualidade: Percentual de Densidade de Dados

Na aba **Attributes**, Fozzels calcula automaticamente a qualidade de cada campo.

-   **Definição:** **Densidade de Dados** é a porcentagem de produtos no catálogo para os quais esse atributo tem um valor não-vazio e utilizável.

-   **Uso:** Atributos com baixa densidade devem ser usados apenas dentro de **lógica condicional** (blocos `if`) para evitar gerar conteúdo com lacunas factuais ou espaços vazios.

-   **Gerenciamento:** Você pode **desativar** atributos com 0% de densidade ou aqueles que você não planeja usar, simplificando a interface do **Flow Builder**.

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/suceb1fs0FvE76a7CHN6A6JvqnLGLtaL2g.png)

###
Parte 2: Revisão e Configuração

#### 2.1. Revisando Dados de Exemplo (Obter Dados de Exemplo Aleatórios)

Para verificar os valores importados e sua localização, use a função de dados de exemplo.

1.  **Clique** na função **"Get random example data"** na aba Attributes.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GzPH1l304MY6YjwmxuhHfMjO3s2YS-YD6A.png)

2.  **Selecione** uma loja/localidade no menu suspenso. Isso permite que você veja como os valores se parecem para um mercado de idioma específico (por exemplo, a cor "zwart" para uma loja holandesa versus "black" para uma loja em inglês).
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GyKgf3yfF6tWo11gSYr6JXc8Y99q4tIA8Q.png)

3.  **Use** os botões de **seta para frente/para trás** para visualizar diferentes valores de atributos de vários produtos aleatórios.

#### 2.2. Edição Avançada de Atributos (Janela de Edição de Atributo)

Clicar no **ícone de Editar** (lápis) em um atributo abre a janela para configuração avançada.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dUU-_lgywMI5u-f7Y9G9ppxK9QLX_ljCAA.png)

##### Transformação de Dados

-   **Transform Data:** Permite **Execução de Código em Runtime** (código personalizado) no valor importado antes de ser armazenado.

##### ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/XMR_zIZH_IM-p4UANnIYB8m37CATk4nhBQ.png)
Sinalizadores Técnicos

-   **Filterable:** Se ativado, este atributo pode ser usado para filtrar produtos no Catálogo/Lista de Lotes por seu valor.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/EvbjNHS2aedS-hzos_piQd1wAtXba0rJww.png)
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dxX8mUPfJNYVbhVNTB7vDcF--x2JUiW3CQ.png)

-   **Mutable:** Se ativado, Fozzels tem permissão para **escrever** (exportar) dados de volta para este campo na plataforma de origem.

-   **Inheritable:** Determina se o valor do atributo de um produto **pai** deve ser automaticamente copiado para suas variantes **filhas**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/24rgLlDhyDeaL87wmVe_rWJG8rNvx4u5YA.png)

-   **Allow HTML:** Permite que o atributo contenha e exiba tags HTML.

##### Localização do Nome do Atributo

-   Na aba **Localization**, você pode **inserir** o nome localizado desejado para o atributo para cada versão de loja conectada.

-   **Resultado:** Os nomes localizados inseridos serão exibidos nos cabeçalhos das colunas de tabelas e na janela **Flow Prompt**, ajudando a IA a entender o atributo no contexto do idioma da loja.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/hur7c60aN2_gvYH4QGK3hiVS0QSsqaTXBQ.png)
    _para loja EN:_
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2UvshsNaysqHkYC0DA1ZjsYnZ06wRogQfQ.png)

   _para loja NL:_
    _![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/rGRdeC3Lob__8TSrZSZP07ap45ESGV7YcQ.png)_

### Parte 3: Criando Atributos Personalizados

#### 3.1. Propósito dos Atributos Personalizados

**Atributos Personalizados** são campos criados diretamente no Fozzels. Eles podem servir como campo de destino para salvar conteúdo gerado ou para valores calculados.

#### 3.2. Processo de Criação de Novo Atributo

1.  **Clique** no botão **”New Attribute”** na aba Attributes.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/LziDSQFwLlpE7kPgzI_R1FSLOGhzqMJhMg.png)

2.  Na janela pop-up **”Create New Attribute”**, defina:
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2nTs3mBYNoxGTi61kVLJbWfr45SFrAV-Qg.png)

-   **Name:** Um nome descritivo para a interface.

    -   **Code:** Um identificador técnico único.
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/39sh5ONkvBeaLHia--kl0pSjQC34K3wHTQ.png)

    -   **Frontend Input:** O tipo de dados que o atributo conterá (**Text**, **Textarea**, **Select**, **Multiselect**, **Date**, **Boolean**, **Weight**, etc.).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dPHGR82fmOzt6JcWICNhXny23ofktRFVw.png)

    -   **Generic Mapping:** Padronize o atributo de acordo com a estrutura interna do Fozzels (por exemplo, selecione **Description**).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dhlYPSoDYXoxvTfahRTrFL8wOTxjURLVIQ.png)

3.  **Frontend Field Display With Widget:** Opcionalmente, selecione um widget para como o campo é exibido no Catálogo (por exemplo, **Category Tree, Image, Product ID**).

4.  **Clique** em **”Save”**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/NGdrMyUieEv_wTjftyUbnE47OmN56Ekvlw.png)

5\. Verifique o atributo criado na janela pop-up “**Edit attribute**” e configure-o se necessário.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/aZZ4Pw6tM39wJo25lxXp3PoMSFNptTQxGA.png)
6\. Verifique o resultado na **lista de Atributos** geral.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/AYfNwv4-y98aOsUmRM3PnLH68aSQJkC8gw.png)
