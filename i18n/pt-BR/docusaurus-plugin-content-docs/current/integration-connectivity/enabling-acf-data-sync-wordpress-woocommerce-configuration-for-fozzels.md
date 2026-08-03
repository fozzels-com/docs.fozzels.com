---
id: '103000385832'
title: '2.5.2.  Habilitando Sincronização de Dados ACF: Configuração de WordPress/WooCommerce para Fozzels'
sidebar_position: 8
slug: /integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels
description: A integração Fozzels - WooCommerce agora oficialmente suporta Advanced Custom Fields (ACF)! Este recurso permite sincronizar características de produtos únicas
---

**A integração Fozzels - WooCommerce** agora oficialmente suporta **Advanced Custom Fields (ACF)**!

Este recurso permite sincronizar características de produtos únicos e estendidos (como especificações técnicas, descrições multilíngues ou parâmetros especiais) que você adiciona via ACF, permitindo criar feeds de produtos mais detalhados e competitivos para marketplaces.

A integração bem-sucedida requer etapas de configuração chave tanto no WordPress quanto no Fozzels.

###

## **Parte 1: Preparando Dados no WordPress (ACF e REST API)**

Antes de ativar ACF no Fozzels, certifique-se de que seu WordPress e ACF estão configurados para transmitir corretamente esses dados especiais via REST API.

### Etapa 1: Verificando e Configurando Permalinks

Para que a REST API funcione corretamente, a estrutura de permalink deve ser diferente da estrutura padrão (plain).

1.  Faça login em seu painel de administração WordPress e navegue até **Settings** / **Permalinks**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/UoAvhDX9e8L9BLo2aXURlvtkXJ3A1z5ToA.png)

2.  Escolha uma estrutura que não use parâmetros (a estrutura **"Post name"** é recomendada).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vbZGxNZnGc1GBmBD9QYCyV3_4CUkCjMRhA.png)

3.  Verifique se **v3** está selecionado no campo **Request Version**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/KhP0PGNAaWcnzkLXTBB8yQ1tPbXLQjPhzA.png)

4.  Salve as alterações.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/yP1swQ74nSHYKF8pRpAgezDqHmxBh4nR-A.png)

###
Etapa 2: Navegando para o Grupo de Campo ACF

1.  No menu WordPress, vá para **ACF** / **Field Groups**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/a7TVqQW4iMXkGcmlP1WI8nouyni5HGoKsg.png)

2.  Clique no nome do Grupo de Campo que contém os campos que você precisa sincronizar para seus produtos WooCommerce (por exemplo, **"Fozzels Description"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/GH8y_bXf1Lb2RnG-_VWVmrj4XKhaFuCnRg.png)

###
Etapa 3: Configurando o Grupo de Campo para Acesso à API (Etapa Crucial)

Na janela de edição do **Field Group**, verifique as regras de localização e habilite acesso à API.

#### 3.1. Verificando Regras de Localização

1.  Na guia **Location Rules**, certifique-se de que a regra está definida como: **Post Type** _é igual a_ **Product**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/BNEJu6CBt2NzH17U0EzeWONrRHVf2l2Jkw.png)

#### 3.2. Ativando REST API e Grupo

1.  Navegue até a guia **Group Settings**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/Nd2g7ccKjN6_POwgJhmMzMceFkkV0h2hxw.png)

2.  Certifique-se de que ambos os toggles estão habilitados (definidos como **ON**):

-   **Active**

    -   **Show in REST API**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/ZJ8EJ6QyJdSfjnZQSXdDXHEAvHmtDBbEKg.png)**

3.  Salve as alterações clicando em **Update** ou **Publish**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/lIgfpHeR7YI8Bf6W-4UvdIqtW2AQz9kqcw.png)

###
Etapa 4: Verificando a Versão da REST API do ACF

Se você estiver usando um plugin adicional para integrar ACF na REST API (como `ACF to REST API`), você deve garantir que a versão selecionada seja compatível com Fozzels.

1.  Vá para **Settings** / **Permalinks** / **ACF to REST API**.

2.  Verifique se **v3** está selecionado no campo **Request Version**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/13tEu-kDRtYwLsGbVQs5J19h9pA5I08Jlw.png)

    > **Requisito Fozzels:** A integração requer suporte a **API REST v3**.
    >
    >

3.  Salve as configurações.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vdFx1XFzfwdgC4rWC4PSPmvnyjq5XMPclg.png)

## **Parte 2: Ativando ACF no Fozzels**

Após a preparação no WordPress ser concluída, ative o recurso dentro de suas configurações de integração Fozzels.

1.  Faça login em sua conta Fozzels e vá editar sua integração WooCommerce.

2.  Na seção **Configuration**, encontre o toggle **"Enable ACF (Advanced Custom Fields)"**.

3.  **Ative-o** (defina para **ON**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/0_d_0BMKbVwJo7hW9vj3FexWoHpj5ziX7w.png)

> **Importante!** Observe os requisitos confirmados pela Fozzels:
>
> -   Plugin ACF está instalado e ativado no WordPress.
>
> -   REST API está habilitada nas Configurações do Grupo de Campo ACF (Show in REST API: Yes).
>
> -   ACF versão 6.x ou superior com suporte à API REST v3.
>
>

4.  Clique em **Save** na parte inferior da página.

## **Parte 3: Usando Campos ACF no Flow e Atualização de Catálogo**

O Fozzels trata atributos ACF como **atributos de produtos regulares** e você trabalha com eles usando o flow padrão.

1.  Após ativar o toggle **"Enable ACF"** e clicar em **"Save"**, você deve **executar o processo de importação de dados**:

-   **Se você está atualizando uma integração existente:** Reinicie o pool de produtos e atributos. Isso atualizará os dados em seu catálogo Fozzels e importará os novos campos ACF.

    -   **Se esta é sua primeira integração:** Simplesmente execute o pool de produtos de acordo com as regras gerais de configuração de integração.
        ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/EYnK1qxy-p-r_jWSJDDxh9P0gDCTf_BU1g.png)

2.  Após o pool ser concluído com sucesso, navegue até a seção **3 Attributes**, verifique novos atributos e suas configurações**.**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/4iRp-AUe2mr4IFsN_I9b6AEtM5f9iGTgtA.png)**
    Se você tiver alguma dúvida ou precisar de assistência com a configuração da integração ACF, nossa equipe de suporte está sempre feliz em ajudar! Entre em contato conosco em **support@fozzels.com**.
