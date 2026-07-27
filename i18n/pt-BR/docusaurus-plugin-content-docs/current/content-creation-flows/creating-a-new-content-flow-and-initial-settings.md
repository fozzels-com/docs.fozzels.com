---
id: '103000367976'
title: 4.1.2. Criando um Novo Fluxo de Conteúdo e Configurações Iniciais.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  O Fluxo de Conteúdo é o núcleo da automação dentro do Fozzels. É um conjunto
  de instruções que define como o sistema deve usar o modelo de IA selecionado
  para automatizar
---

O Fluxo de Conteúdo é o núcleo da automação dentro do Fozzels. É um conjunto de instruções que define como o sistema deve usar o modelo de IA selecionado para gerar, atualizar e sincronizar textos automaticamente para seus produtos.

## 1\. Criando um Novo Fluxo de Conteúdo

1.  **Faça login** na sua conta Fozzels.

2.  **Vá** para a seção **Fluxos de Conteúdo** no menu do cabeçalho.

3.  **Selecione** a loja desejada na lista suspensa **"Escolher loja"**.

4.  **Clique** no botão **"Novo Fluxo de Produtos"**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/dkNQlB5ollDUkXSZvdTsa61-fyN6j1hZdg.png)

5.  **Digite** o nome do fluxo no campo **Nome** (por exemplo, _Meu Primeiro fluxo de conteúdo_).

6.  **Selecione** o atributo a ser atualizado na lista suspensa **Atributo** (por exemplo, _Descrição_).

7.  **Clique** no botão **Salvar**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/qDGTsHq3b5SDyDecYwdbl9fFgzUk1HDQpA.png)

8.  **Verifique** se o novo fluxo aparece na lista Fluxos.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/ebU6dS9TViRZcxsQAbYNYjTpKnW-jd9Rvg.png)

## 2\. Configuração de IA e Modelo (Aba 2: Configuração de IA)

1.  **Navegue** para a aba **Configuração de IA** (Ou **Próximo passo**).

2.  **Escolha** o provedor de IA (por exemplo, _OpenAI | ChatGPT_ ou _Google | Gemini_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/n9NN2mBe7EPu1HcyBY-Xasfs5m2pHHEdaA.png)

3.  **Selecione** o modelo de IA desejado (por exemplo, _GPT-4o (novo)_ ou _Gemini 2.5 Flash Preview_) clicando no bloco correspondente.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TcZLY49TXUXTtDOIhsZe2EoRUodTwkNTMg.png)

4.  **Ative** recursos de enriquecimento opcionais, como **Ativar Pesquisa Web**, se necessário.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/Hw53qskGZ3nBjK7FjvvsOEEDFznDFpSOpQ.png)

5.  **Defina** o número de imagens (de 1 a 5) no campo **Contagem de imagens** que a IA usará para análise e geração de conteúdo (opcional).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/csny9IgMXvADkHUZbDWfxWYWVQcbXer2wg.png)

6.  **Certifique-se** de que o recurso **Redimensionar Imagem** está ativado (recomendado para evitar erros com arquivos grandes, leia mais sobre Redimensionar Imagem [aqui](https://fozzels.freshdesk.com/a/solutions/articles/103000367979)).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/h9tWKVAiOCFtONtDB2tWqYyXwNm8CJR4-g.png)

7.  **Defina** o valor máximo de token (**Máximo de tokens**) para geração.
**_![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TRNywCO8dEOrABpWxX3SZsrBiU9IPpD3Bw.png)_**

8.  **Selecione** o estilo de texto desejado (**Estilos de texto**) na lista suspensa (por exemplo, _Publicidade_ ou _Criativo_)**.**
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/6COvPEOCPMjqptoEaqLECdel__NHP7_q6w.png)

9.  **Selecione** o tom de texto desejado (**Tons de texto**) na lista suspensa (por exemplo, _Formal_ ou _Entusiasmado_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/EdX6_M7Fbou3VQRhLIAMcVccLkQ0LXcrJg.png)

10.  **Clique** no botão **Salvar** para salvar a configuração.

## 3\. Seleção de Produtos e Criação de Prompt (Aba 3: Seleção de Fluxo e Prompt)

1.  **Navegue** para a aba **Seleção de Fluxo e Prompt**.

2.  **Ative** o fluxo **marcando** a caixa de seleção **Fluxo ativo**.

3.  **Selecione** o atributo para geração no campo **Atributo** (deve corresponder à etapa 1.6).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vNOY4ePi2dZDPZTVgzFsZeKva-Ff-TZTEg.png)

4.  Aplique filtragem:
    4.1. **Use** a seção de filtros para limitar os produtos para os quais o conteúdo será gerado.
    4.2. **Selecione** um atributo (por exemplo, _Cor_ ou _SKU_), defina o operador (Igual, Contém, Está vazio, etc.) e digite o valor. 4.3. Cuidado: Se os filtros não forem aplicados, o conteúdo será gerado para **TODOS** os produtos atualmente em sua loja.
**![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vv-HKjbxUtsGgQ1_c0yv_cdOSFcWpAzKDQ.png)**

5.  **Crie** a instrução (prompt) para a IA:
    5.1. **Escreva** o texto do prompt principal no campo Prompt central. _O campo de prompt não pode estar vazio._
    5.2. **Insira** dados de produtos estáticos (por exemplo, _Nome do Produto_ ou _SKU_) clicando ou arrastando elementos da seção Atributos.
    5.3. **Adicione** lógica dinâmica (por exemplo, _IF Cor é Azul_) para geração de conteúdo condicional usando a seção Atributos (se preenchida).
    5.4. **Priorize** elementos com alta porcentagem de Data Density para garantir geração de conteúdo bem-sucedida na maioria dos produtos.
    5.5 Leia mais sobre como criar um prompt e usar a ferramenta de arrastar e soltar [aqui](https://fozzels.freshdesk.com/a/solutions/articles/103000367983).
    5.6 Leia mais sobre como salvar e carregar um prompt criado como modelo [aqui](https://fozzels.freshdesk.com/a/solutions/articles/103000367846).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/1NaIIRbS4Q7wdMA8cA0jKSnoBsh-XUgdJg.png)

6.  **Clique** em **"Salvar e Visualizar"** para ver os produtos que atendem às condições (você verá a contagem total de produtos).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/o0INO3KlijbtEPCvPvScfTbViWXrJonVtw.png)
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/tlD_Xv4nww_sdHQbtB-nYMnM7ys3UZ9TnQ.png)

7.  **Clique** no botão **Gerar Agora** no popup de visualização para executar uma geração de teste.
    _![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/MF2Dc75ZZc1YdfVh3W57H-gtKgAR4Jq1XA.png)_

## 4\. Configurações de Automação (Aba 4: Automação)

1.  **Navegue** para a aba **Automação**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/jT9iQbF_psMmhbveX_odN1GaB7VTK988lQ.png)

3.  **Defina** o número de produtos para os quais o conteúdo será criado por execução no campo **Quantidade de produtos para criar conteúdo por dia** (por exemplo, 10).

4.  **Marque** a caixa de seleção **Totalmente automático** se você quiser que o texto gerado seja **imediatamente** enviado para sua loja sem confirmação. _A maioria dos usuários inicialmente mantém essa opção desativada para revisão manual._

5.  **Marque** a caixa de seleção **Criar automaticamente um novo texto quando um atributo de um produto mudar em sua loja** para garantir regeneração quando dados de origem forem atualizados.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/rELhAfupqnLV-KmzzijdZcKzYqPy7Y6TlQ.png)

6.  **Ative** o recurso de prevenção de sobreposição de conteúdo (se não for seu primeiro fluxo de conteúdo) (opcional)

-   Você pode definir um período de tempo (**horas, dias, semanas, meses ou anos**) para evitar que o sistema gere novo conteúdo para o atributo de produto específico se um fluxo anterior já tiver lidado com ele.

    -   **Bom saber:** Ainda contaremos resultados de gerações passadas para evitar duplicatas, mesmo que o fluxo que as criou tenha sido deletado ou arquivado.
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/bKuoDyZad0Su9sGZC5HVmzZt78JZK3cag.png)

7.  **Clique** no botão **Salvar**.

8.  **Execute** o fluxo:

-   **Planejar & Fechar:** A geração será adicionada à fila e será iniciada no próximo dia, após o pool de produtos automático noturno.

    -   **Executar Agora:** A geração começará imediatamente (para o número de produtos especificado no campo _Quantidade de produtos para criar conteúdo por dia_).
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/DR3WD6p7OkbQJcJEUgwKTj-yuvy7HCtong.png)

## 5\. Revisando Resultados (Lista de Lotes)

1.  **Clique** no botão **Lista de Lotes** no Fluxo atual para ver os lotes gerados.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/s3rLqx0aN3qf63h0ohkm2ITtcQ4dpVGSgw.png)

2.  **Revise** os dados gerados na coluna **Atributo de Destino**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/krPPKGK1WQcRrrduGQVGEUUTkyNLOhI_2w.png)

3.  **Se necessário**, **edite** o texto gerado clicando nele (no modo Show HTML).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/iiy9xDUPUbNJaN3Dv19ByLztRC6SuuFw_A.png)

4.  **Clique** em **"Salvar & sincronizar"** para enviar manualmente o conteúdo confirmado para sua loja.

5.  **Nota:** Se o Fozzels sinalizar o conteúdo como **"suspeito,"** não pode ser sincronizado sem regeneração prévia. **Regenere** o conteúdo até que ele atenda aos requisitos de verificação.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/VlcFFEZm3jLMa2CfL0wyEj6i5l4B1n9sYA.png)

![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/lSusJ64-jIyhQStOHHai5u5y8pwWE2YoWw.png)

6\. **Leia** mais sobre revisão de resultados, sincronização manual e tratamento de erros no conteúdo gerado [aqui](https://fozzels.freshdesk.com/a/solutions/articles/103000369091).
