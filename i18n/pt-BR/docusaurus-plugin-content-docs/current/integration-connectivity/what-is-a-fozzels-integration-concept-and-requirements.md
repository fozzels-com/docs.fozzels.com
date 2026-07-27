---
id: '103000367852'
title: 2.1. O que é uma integração Fozzels? (Conceito e Requisitos).
sidebar_position: 1
slug: >-
  /integration-connectivity/what-is-a-fozzels-integration-concept-and-requirements
description: >-
  Este documento fornece uma compreensão fundamental do que é uma integração Fozzels, seu papel no ciclo de vida do conteúdo e os pré-requisitos necessários fo
---

Este documento fornece uma compreensão fundamental do que é uma integração Fozzels, seu papel no ciclo de vida do conteúdo e os pré-requisitos necessários para estabelecer uma conexão.

Uma integração Fozzels estabelece um link de dados seguro e bidirecional entre a plataforma Fozzels e seu sistema de comércio eletrônico externo (por exemplo, Magento, Shopify, WooCommerce). Este link é o ponto de partida para toda a automação de conteúdo, permitindo que o Fozzels **puxe** atributos de produtos e **empurre** conteúdo gerado de volta.

### 1\. O papel da integração no ciclo de vida do conteúdo

A integração serve como o pipeline de dados, suportando todo o processo de geração de conteúdo:

1.  **Puxar dados:** Fozzels usa a conexão para **puxar** automaticamente dados de produtos (atributos, imagens, categorias, preços) de sua loja para o Catálogo Fozzels. Esses dados formam a entrada para os prompts de IA.

2.  **Execução de fluxo:** Os Content Flows são executados dentro do ambiente Fozzels, usando os atributos puxados e o modelo de IA selecionado para gerar novo conteúdo.

3.  **Empurrar dados:** Fozzels usa a conexão para **empurrar** o conteúdo recém-gerado (por exemplo, descrições de produtos, títulos de meta) de volta para os atributos de destino designados em seu sistema de comércio eletrônico.

### 2\. Requisitos e pré-requisitos de integração

Antes de configurar uma integração, certos requisitos devem ser atendidos em sua plataforma de comércio eletrônico:

1.  **Acesso à API:** O Fozzels requer acesso seguro à API do seu armazém. Isso normalmente envolve gerar um token seguro ou chave de API no lado da plataforma de comércio eletrônico.

2.  **Permissões de leitura/escrita:** As credenciais de API geradas devem ter permissão **leitura (puxar)** para acessar atributos de produtos existentes e permissão **escrita (empurrar)** para modificar os atributos de destino (os campos onde o conteúdo gerado será armazenado).

3.  **Tipo de integração:** Dependendo de sua plataforma (por exemplo, Magento 2 ou Shopify), o método de integração pode envolver instalar uma extensão/aplicativo Fozzels específico ou configurar chaves de API nativas e URLs.

4.  **Configuração de atributo (pós-integração):** Uma vez conectado, o Fozzels depende dos atributos de origem tendo a flag **Filtrável** e dos atributos de destino tendo a flag **Mutável** ativada.

### 3\. Gerenciamento de integração

As configurações de integração são gerenciadas na aba **Configuração** e **Sites e lojas** da interface do Fozzels.

-   Você pode gerenciar múltiplas integrações simultaneamente, permitindo sincronizar conteúdo em diferentes instâncias de comércio eletrônico ou lojas regionais.

-   A estabilidade do processo de automação de conteúdo depende diretamente da estabilidade e disponibilidade da integração estabelecida.
