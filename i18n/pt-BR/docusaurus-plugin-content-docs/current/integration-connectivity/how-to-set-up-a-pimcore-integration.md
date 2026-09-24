---
title: 2.11.1. Como configurar uma integração Pimcore
sidebar_position: 23
slug: /integration-connectivity/how-to-set-up-a-pimcore-integration
description: >-
  Conecte seu catálogo de produtos do Pimcore ao Fozzels pelo módulo DataHub:
  prepare o endpoint e a API key no Pimcore, preencha o formulário de
  configuração e importe seus produtos.
---

Este guia ajuda você a conectar seu catálogo de produtos do Pimcore ao Fozzels, passo a passo.

## Antes de começar: preparação no Pimcore

O Fozzels se conecta ao Pimcore pelo módulo **Datahub**, uma ferramenta nativa do Pimcore que libera o acesso aos seus dados por meio de uma API.

Sua instância do Pimcore precisa ter um **Datahub endpoint** configurado (talvez o administrador do seu Pimcore já tenha feito isso). Se não tiver, fale com ele ou com a nossa equipe de suporte. Você vai precisar de:

- **Nome do endpoint:** encontrado no Pimcore, em **Datahub**, no campo **Name**.
- **API key:** exibida ao lado do endpoint, na aba **Security Definition**, no campo **Datahub API Keys**.

![Pimcore → Datahub → seu endpoint → aba General. O campo Name aqui é o nome do seu endpoint](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/01-datahub-endpoint-general-tab.png)

![A aba Security Definition contém sua API key e as regras de acesso do Workspace](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/02-datahub-security-definition-tab.png)

> **Importante:** nas configurações do endpoint (aba **Security Definition → Workspaces**), o acesso de leitura (**Read**) precisa ser concedido aos objetos relevantes, principalmente à pasta que contém seus produtos (por exemplo `/products`). Se seus produtos estiverem distribuídos em várias pastas aninhadas, verifique se o acesso foi concedido a todas elas.

## 1. Crie a integração

1. Vá até **Home → Integrations**.
2. Clique em **Create**.
3. Selecione a plataforma **Pimcore**.

![Escolha Pimcore na lista de plataformas de integração](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/03-choose-pimcore-platform.png)

## 2. Preencha o formulário de configuração

![Name, URL, DataHub endpoint, API key e os campos opcionais Product/Category class](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/04-configuration-form.png)

| Campo | O que informar |
| --- | --- |
| **Name** | Nome da integração, para sua própria referência |
| **URL** | Endereço base da sua instância do Pimcore (por exemplo `https://your-company.pimcore.com`) |
| **DataHub endpoint** | O nome do endpoint no Pimcore (por exemplo `fozzels`) |
| **API key** | A chave de acesso do Pimcore (da aba Security Definition) |
| **Product class** | Deixe vazio se seus produtos estiverem armazenados em uma classe chamada `Product`. Preencha apenas se a classe tiver outro nome |
| **Category class** | Igual ao anterior: deixe vazio se as categorias estiverem armazenadas em uma classe chamada `Category` |
| **Asset folder** | Opcional. Só é necessário se o Fozzels for gerar novas imagens de produto para você e elas precisarem ser salvas em algum lugar no Pimcore (por exemplo `/products`) |

![O campo Languages e a opção Include unpublished objects](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/05-languages-and-include-unpublished.png)

| Campo | O que informar |
| --- | --- |
| **Languages** | Lista de códigos de idioma separados por vírgula (por exemplo `nl,en`). Cada idioma vira uma **Store** separada no Fozzels |
| **Include unpublished objects** | Desativado por padrão. Ative se você quiser que a sincronização também extraia produtos e categorias não publicados (rascunhos). Eles serão processados da mesma forma que os demais |

### Agendamento da sincronização (Global Pull Schedule)

Você pode manter o agendamento padrão ou ativar **Overwrite Global Pull Schedule** e definir seu próprio horário.

> **O horário é em UTC:** o horário é definido em **UTC**, e não no seu fuso horário local. Se você quiser que a sincronização rode durante a sua noite, converta o horário noturno local para UTC antes de informá-lo aqui.

### Delay between requests

Recomendamos **não preencher esses campos logo de início**. Primeiro, rode algumas sincronizações com as configurações padrão. Se tudo funcionar bem, nenhuma outra configuração é necessária. Se aparecerem erros, volte e adicione um pequeno atraso.

Clique em **Save**.

## 3. Ative e importe os produtos

1. Ative a opção **Active** (canto superior direito).
2. Clique em **PULL WEBSITES AND STORES**. O Fozzels importa seus idiomas como Stores separadas.
3. Ative as opções do Website e da Store relevantes.
4. Clique em **Pull products** para importar produtos, categorias e seus atributos.

## Se o número de produtos for menor do que o esperado

Se foram importados menos produtos para o Fozzels do que você tem no Pimcore, o motivo mais comum são produtos que não estão publicados (com status **unpublished/draft**) no Pimcore. Ative a opção **Include unpublished objects** nas configurações da integração (Configuration) e rode a sincronização novamente.

> **Dica:** depois de ativar essa opção, os produtos terão um novo atributo **Published** (Yes/No). Você pode usá-lo para filtrar produtos no catálogo ou restringir um flow específico a ele, por exemplo se quiser processar apenas produtos publicados.

![Filtrando produtos pelo atributo Published em Manage Products](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/06-manage-products-published-filter.png)

Outras causas possíveis são acesso limitado a algumas pastas de produtos ou produtos divididos em várias classes no Pimcore. Nesses casos, o melhor é falar com a gente ou com o administrador do seu Pimcore para revisar as configurações de acesso.

Para expor mais atributos, como o indicador de publicação ou sua galeria de imagens, veja [2.11.2. Pimcore: expondo atributos via DataHub](/integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery).

Pronto: seu catálogo do Pimcore agora está conectado. Você pode atualizar os dados a qualquer momento clicando em **Pull products** novamente.
