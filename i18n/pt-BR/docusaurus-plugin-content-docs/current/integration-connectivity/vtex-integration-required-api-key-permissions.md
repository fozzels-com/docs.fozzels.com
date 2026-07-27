---
id: '103000406106'
title: 2.8.1 Integração VTEX — permissões de chave de API necessárias
sidebar_position: 18
slug: /integration-connectivity/vtex-integration-required-api-key-permissions
description: >-
  Quais permissões de chave de API preciso para conectar Fozzels ao VTEX? Para conectar sua loja VTEX ao Fozzels, você precisa criar uma chave de API em seu admin VTEX e
---

## Quais permissões de chave de API preciso para conectar Fozzels ao VTEX?

Para conectar sua loja VTEX ao Fozzels, você precisa criar uma chave de API em seu admin VTEX e atribuir as permissões corretas. Este artigo explica exatamente quais permissões ativar.

## Passo 1 — Crie uma chave de API no VTEX

1.  Faça login no seu painel de admin VTEX
2.  Vá para **Gerenciamento de conta → Conta → Chaves de aplicativo**
3.  Clique em **Gerar nova chave**
4.  Dê um nome (por exemplo _Integração Fozzels_)
5.  Copie a **chave de aplicativo** e o **token de aplicativo** — você precisará deles no Fozzels

## Passo 2 — Atribua permissões à chave de API

### Opção A: Use a função de integração pré-construída (recomendado)

VTEX fornece uma função pronta para integrações de catálogo externo:

1.  Nas configurações de sua chave de aplicativo, vá para **Funções**
2.  Procure e adicione a função: **IntegrationProfile-externalCatalog**
3.  Salve — esta única função cobre todas as permissões que Fozzels precisa

### Opção B: Adicione permissões individuais manualmente

Se você preferir definir permissões mínimas necessárias, adicione os seguintes recursos à sua função de chave de API:

#### Sistema de catálogo

Recurso

Por que é necessário

Obter lista de canais de vendas

Fozzels usa isso para se conectar à sua loja e detectar suas configurações de localidade

Obter IDs de produto e SKU

Necessário para recuperar a lista completa de produtos do seu catálogo

Obter lista de campos de especificação por categoria

Permite que o Fozzels leia suas definições de atributo de produto

Obter especificações de produto

Lê os valores de atributo atuais em cada produto

#### Catálogo

Recurso

Por que é necessário

Obter produto por ID

Busca detalhes completos do produto para geração de conteúdo com IA

Atualizar produto

**Permissão de escrita.** Fozzels usa isso para enviar descrições geradas, títulos e metadescições de volta à sua loja

Obter SKU por ID de produto

Recupera informações no nível de SKU para cada variante de produto

Obter arquivo SKU

Lê imagens de produtos existentes

Adicionar arquivo SKU

**Permissão de escrita.** Necessário se você usa Fozzels para gerar e enviar imagens de produtos

Criar/atualizar especificação de produto

**Permissão de escrita.** Permite que o Fozzels escreva conteúdo gerado de volta para campos de atributo de produto

#### Categoria

Recurso

Por que é necessário

Obter árvore de categoria

Fozzels usa sua estrutura de categoria para organizar seu catálogo de produtos

## Passo 3 — Insira as credenciais no Fozzels

1.  Faça login em sua conta Fozzels
2.  Vá para **Integrações → Adicionar integração → VTEX**
3.  Insira o **nome da sua conta** (o subdomínio de sua loja VTEX, por exemplo `mystore`)
4.  Insira a **chave de aplicativo** e o **token de aplicativo** do Passo 1
5.  Clique em **Testar conexão** para verificar se tudo funciona

## Perguntas frequentes

**Preciso dar ao Fozzels acesso a Pedidos ou Pagamentos?**
Não. O Fozzels funciona apenas com seu catálogo de produtos. Ele não precisa de acesso a pedidos, logística, preços, checkout ou qualquer informação de pagamento.

**Tenho uma loja multilíngue / entre fronteiras. Preciso de permissões extras?**
Para lojas de um único idioma, as permissões acima são suficientes. O write-back multilíngue está em nosso roteiro e pode exigir uma permissão adicional quando lançado. Atualizaremos este artigo nesse momento.

**Posso restringir a chave de API a endereços IP específicos?**
Sim. Entre em contato com nossa equipe de suporte para obter o endereço IP do servidor Fozzels atual para colocar na lista de permissões.
