---
id: '103000338038'
title: 2.4. Configuração completa de integração com Shopware
sidebar_position: 6
slug: /integration-connectivity/full-integration-setup-with-shopware
description: >-
  Este guia o leva pelo processo completo de conexão de sua loja online Shopware 6 com Fozzels. A integração consiste em duas partes: Parte 1: C
---

Este guia o leva pelo processo completo de conexão de sua loja online Shopware 6 com Fozzels.
A integração consiste em duas partes:

# Parte 1: Crie uma Integração no Shopware 6

Nesta parte, você criará uma integração de API dentro do seu painel de administração Shopware 6. Isso gera as credenciais que o Fozzels precisa para se comunicar com sua loja.

### 1\. Introdução

Acesse seu painel de administração do Shopware 6. Você normalmente pode encontrá-lo em [your store URL](https://shopware6.fozzels.com/admin).

### 2\. Clique em "Configurações"

Clique em "Configurações".

![](./images/full-integration-setup-with-shopware/_APoVDYMLEb_oPJsWrg4Fj9HOyB2FWI6g.png)

### 3\. Clique em "Sistema"

Navegue até as configurações do sistema.

![](./images/full-integration-setup-with-shopware/NE3HjkKRNa353OQJJBzR8eeF_Y9XA9Mi_w.png)

###
4\. Clique em "Usuários e permissões"

Selecione a opção Integrações no menu Sistema.

![](./images/full-integration-setup-with-shopware/XBGWZJstYupsn7hsyrU1stHBQK9Hh8igVA.png)

### 5\. Role para baixo até "Funções" e clique em "Criar função"

   Na página Usuários e permissões, role para baixo até a seção Funções e clique no botão "Criar função".

![](./images/full-integration-setup-with-shopware/6gkkqh6BDu27YdBmfVYPA7aub9lZQr-Svw.png)

### 6. Preencha o nome da função

Na aba "Geral", insira um nome para a função.

![](./images/full-integration-setup-with-shopware/NUafBeJNC09Mi86jv-EVOFyWLidctjzadA.png)

### 7\. Clique em "Permissões"

Você verá a tabela de permissões com todas as caixas desmarcadas. Ative as seguintes permissões:

**Catálogos (Visualizar, Editar, Criar, Deletar):**

-   Categorias
-   Grupos de produtos dinâmicos
-   Páginas de destino
-   Fabricantes
-   Produtos
-   Propriedades
-   Avaliações

**Conteúdo:**

-   Mídia (Visualizar, Editar, Criar, Deletar)
-   Experiências de compra (Visualizar, Editar)
-   Temas (Visualizar, Editar)

**Outro** (Visualizar, Editar, Criar, Deletar):

-   Canais de vendas

**Configurações:**

-   Moedas (Visualizar, Editar, Criar, Deletar)
-   Campos personalizados (Visualizar, Editar, Criar, Deletar)
-   Idiomas (Visualizar, Editar, Criar, Deletar)

![](./images/full-integration-setup-with-shopware/hUqHqVoOiZ0d2J1mJ2IWMFdxxBKX0tVq5g.jpeg)
![](./images/full-integration-setup-with-shopware/PoONXWr6_1SjTd-6iea1UpNsFzfkwxRYpw.jpeg)

### 8. Salve a função

Após definir todas as permissões, clique em "Salvar" para salvar a função.

![](./images/full-integration-setup-with-shopware/A8MHLjtMTc9IvBEae-ZW8vUS8I4hag_G8A.png)

###  **9.** Vá para Sistema > Integrações
![](./images/full-integration-setup-with-shopware/A3DBstBn6Ru1Z0789w5hnvK7skD1VrNVhA.png)
**10.** **Clique em "Adicionar integração"**

Clique no botão "Adicionar integração". A caixa de diálogo "Criar integração" aparecerá:

![](./images/full-integration-setup-with-shopware/URMEvVMGXkTNtDY6_YIfXEesdx7AwYJJ2g.png)

![](./images/full-integration-setup-with-shopware/3hNA53bC00sF1iGxrnL2kynScvKzSZfduA.png)

**11.** Preencha os detalhes da integração

Insira um nome para a integração. Em seguida, abra o menu suspenso "Funções" e selecione a função que você criou anteriormente.

![](./images/full-integration-setup-with-shopware/DZY9Dx_ZSKux2NMqdZxEYkFXqeT3JeZVlg.png)

###
12\.  Copie a ID da chave de acesso

Clique no ícone copiar ao lado da **ID da chave de acesso** para copiá-la para sua área de transferência. Cole esta chave em um documento de texto para manter em segurança - você precisará dela na Parte 2.

![](./images/full-integration-setup-with-shopware/Um8SIf9NDPTA8bYzQbm-H73d4wuiGheBbQ.png)

**13\.**  **Copie a chave de acesso secreta**

Faça o mesmo para a **chave de acesso secreta**: clique para copiar a chave de acesso secreta para sua área de transferência. Em seguida, cole este código em um documento de texto para que você possa acessar e copiar o código mais tarde.

![](./images/full-integration-setup-with-shopware/ngrN_TmIbSpPn4vdjAU2urPJ3Orh3b1hcw.png)

### 14\. Clique em "Salvar integração"

Salve as configurações de integração.

![](./images/full-integration-setup-with-shopware/zFiTXyoLwZk0YUyHGn98o27cXlHx8DSBgA.png)

### 15\. Confirme a mensagem de sucesso

A integração agora está criada e ativa.

![](./images/full-integration-setup-with-shopware/ddwo4oRoStm6_leYM-OMhtbNWvrs2B5OkA.png)

###

# Parte 2: Conecte Fozzels ao Shopware 6

Agora que você criou a integração no Shopware, você configurará a conexão no lado do Fozzels usando as credenciais da Parte 1.

### **1.** Vá para [Fozzels.com](https://fozzels.com/)

![](./images/full-integration-setup-with-shopware/QNYGtnmJc1jLtdHtrac2heMnCvr8OeCjOw.png)

###
**2.**  Clique em "Integrações"
    No menu Fozzels, clique em Integrações.
![](./images/full-integration-setup-with-shopware/p3WWrWl5kNt7ZpAfsTGCttAeYkIT1rVN6A.png)
3\. Clique em "Criar"
    Clique no botão "Criar" para começar a configurar uma nova integração.
![](./images/full-integration-setup-with-shopware/pEdr2LbjwEBHYCnp6d9LPSj4r3fXHoqSRA.png)
4\. Selecione o logotipo do Shopware

Escolha Shopware como o tipo de integração clicando no logotipo do Shopware.

### ![](./images/full-integration-setup-with-shopware/wutV5JMQpq7oa9KVz1xOFlxcjZe7RktGOg.png)5\. Preencha os detalhes da integração

Preencha os seguintes campos em ordem:

1\. Nome — Insira um nome para esta integração, por exemplo "Shopware 6".

2. URL — Insira a URL de sua loja online Shopware 6 (por exemplo, https://your-store.com).

3. ID da chave de acesso — Cole a ID da chave de acesso que você copiou do Shopware na Parte 1.

4. Chave de acesso secreta — Cole a chave de acesso secreta que você copiou do Shopware na Parte 1.

![](./images/full-integration-setup-with-shopware/MN0itAjPFkZTRZVpISQu6IiUlmslBesN5w.png)

**6**. Quando todos os campos estiverem preenchidos, clique em "Salvar". Você deverá ver uma pop-up de "Sucesso" confirmando que a conexão foi salva.

### ![](./images/full-integration-setup-with-shopware/Hx1KICwgA4nYaOgpQbjeLYyUYMAfwizHIA.png)

### 7\. Ative a integração
    Alterne o botão "Ativo" para ativar a integração.
![](./images/full-integration-setup-with-shopware/CWqB7LNLotQ_hBy-B3upqEFOPuh8GzXOQg.png)
**8.** **Puxe sites e lojas**
    Clique no botão "Puxar sites e lojas". Fozzels recuperará todos os dados do canal de vendas do Shopware.
   ![](./images/full-integration-setup-with-shopware/AIptzp_eqV19f60Lq69A3HI-5-jXSkZ8RQ.png)
9\. Ative a conexão da sua loja
    Alterne o botão Status para ligar para sua loja.
![](./images/full-integration-setup-with-shopware/gS02mVXwZyGcf2VSsypNVS3DoBaYSrKftQ.png)

10. Ative visualizações de loja / canais de vendas

    Ative as visualizações de loja disponíveis ou canais de vendas que você deseja usar no Fozzels.
![](./images/full-integration-setup-with-shopware/1UtVxA_eP1gFWhRvGqpPE7G2CczT4WZGdg.png)

11. Puxe produtos

###     Clique em "Puxar produtos" para recuperar os dados do produto do Shopware. Isso pode levar um tempo dependendo do número de produtos.

![](./images/full-integration-setup-with-shopware/0liK4TAMuGrDYFNClrrnT2GtrcZKZ6M2jA.png)
**12.** Clique em "Próxima etapa"
    Prossiga para a próxima etapa para finalizar a configuração.
![](./images/full-integration-setup-with-shopware/p1QaQx8BXoBRslqVdOfwPVQzKjtqvAKl3A.png)

# Configuração concluída

Parabéns! Sua loja Shopware 6 está agora totalmente conectada ao Fozzels. Você pode usar esta integração para criar fluxos de produto e gerenciar o conteúdo do seu produto diretamente na plataforma Fozzels.

## Começando

Aqui estão alguns artigos adicionais que podem ajudá-lo a começar com Fozzels:

-   [Criando um novo fluxo de conteúdo e configurações iniciais](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Criação de prompt e filtragem. Editor de prompts de arrastar e soltar](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)

-   [Quando novos produtos são gerados: o ciclo de puxar explicado](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained)
-   [Ações em massa e controle operacional em listas de lotes / lista de lotes diária total](/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list)
-   [Definição de fluxo e tipos de conteúdo (texto, imagem, vídeo)](/content-creation-flows/flow-definition-and-content-types-text-image-video)

Ou entre em contato conosco diretamente - estamos sempre felizes em ajudar!

###
