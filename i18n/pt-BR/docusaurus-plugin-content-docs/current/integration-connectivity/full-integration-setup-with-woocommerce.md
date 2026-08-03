---
id: '103000367857'
title: 2.5.1. Configuração completa de integração com WooCommerce.
sidebar_position: 7
slug: /integration-connectivity/full-integration-setup-with-woocommerce
description: Para garantir uma conexão segura entre Fozzels e WooCommerce, as seguintes etapas devem ser concluídas para gerar as chaves de API especiais (Chave do cliente e Cus
keywords:
- extração
---

Para garantir uma conexão segura entre Fozzels e WooCommerce, as seguintes etapas devem ser concluídas para gerar as chaves de API especiais (Chave do cliente e Segredo do cliente) na conta WooCommerce.

Configuração no WooCommerce

**Passo 1: Faça login no WooCommerce**
1\. Abra um navegador e faça login em sua conta WooCommerce.
2\. Use o login e a senha do administrador.

**Passo 2: Navegue até as configurações de API**
1\. Vá para a aba "**Configurações**" / Avançado / API REST no menu principal do WooCommerce.
2\. Selecione "**Adicionar chaves**".

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8hyIPD4Wb1FFvgYBaXywZ2Xs18Lh-bvT4Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/gQDALB5owHDmdRHVghvUxrIVGr9XLh00iA.png)

**Passo 3: Criando uma nova chave de API**1\. Adicione a descrição e escolha as permissões necessárias "**Leitura e escrita**" no menu suspenso na **nova chave de API**.

2\. Pressione o botão "**Gerar chave de API**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/LNqOK_83FuQdSlwU4GQ0k9hPLpjPOMhitw.png)
Nota: Conceder acesso "Escrita" permite que o Fozzels não apenas leia dados, mas também atualize dados em sua loja WooCommerce, garantindo sincronização bidirecional.
Se você fez tudo corretamente, uma janela com as chaves geradas para a nova integração será aberta. Você também receberá a mensagem: 'Chave de API gerada com sucesso. Certifique-se de copiar suas novas chaves agora, pois a chave secreta será ocultada quando você sair desta página.' Transfira essas chaves para as configurações de integração no Fozzels.

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/zNaRYoJwobBx3j5TEjYQOR-iVDLfWwFk_w.png)
Configuração no Fozzels
**Passo 4:** **Iniciando uma nova integração**
1\. Faça login em sua conta Fozzels.
2\. Vá para a página Integrações.
3\. Clique no botão "**Nova integração**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/0oMe6Sytpwp09lVWoNbVjCMY2Gr5Ii3l4w.png)

4\. Selecione "**WooCommerce**" da lista de serviços disponíveis.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/VygL8-i0y-Ufor6pSGr_Zfk9ob9PmWAybw.png)

5\. Preencha os campos de configuração

        Nome: Insira um nome claro para esta integração (por exemplo, WooCommerce\_INT).
        URL: Insira a URL de sua loja WooCommerce
6\. Preencha os seguintes campos na página "Criar nova integração" (usando as chaves copiadas no Passo 3).
        Chave do cliente: Cole a chave do cliente copiada do WooCommerce.
        Segredo do cliente: Cole o segredo do cliente copiado do WooCommerce.

7\. Se você deseja que os Campos personalizados avançados também sejam importados para o Fozzels, ative a alternância **Habilitar ACF**. Leia mais sobre como configurar adequadamente essa conexão em [Ativar sincronização de dados ACF: configuração do WordPress/WooCommerce para Fozzels](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels).

8\. Se você deseja sincronizar dados de SEO usando o plugin Yoast SEO, ative a alternância Yoast WooCommerce SEO. Isso permite que o Fozzels importe e atualize títulos de meta, descrições de meta e palavras-chave de foco diretamente via API do WooCommerce. [Leia mais sobre como configurar essa integração no Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce).

9\. Se sua loja usa o plugin All-in-One SEO, ative a alternância All-in-One SEO. Isso sincronizará automaticamente campos relacionados a SEO, como títulos de meta, descrições, palavras-chave e dados de redes sociais entre WooCommerce e Fozzels. [Leia mais sobre como configurar essa integração.](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide)

10\. Se você deseja importar campos de metadados personalizados do WooCommerce, preencha o campo campos de sincronização de metadados do WooCommerce. Insira os prefixos de chave de meta ou nomes de campos de meta exatos que você deseja sincronizar. Apenas campos correspondentes serão importados como atributos de produto no Fozzels. Por exemplo, insira _my\_plugin_ para sincronizar todas as chaves começando com este prefixo, ou \_custom\_field para um campo específico. [Leia mais sobre este recurso.](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)
11\. Se você deseja ativar a sincronização multilíngue, ative a alternância suporte multilíngue WPML. Isso permite que o Fozzels sincronize dados de produtos em todos os idiomas configurados ao usar o plugin WPML. [Leia mais sobre como configurar esta instalação.](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation)
 ![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/d1v4xCqxV-0DN-7Uj85ucSblMez28V1klw.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/7XoFo9SE40F3Tgm0RjSqZFcqPUoE-6dFHA.png)
**Passo 5: Ative e salve a integração**1\. Ative a integração ativando a alternância "Ativo" no canto superior direito.

2\. Clique no botão "**Salvar**" para salvar as alterações.
Após salvar com sucesso, você prosseguirá para as próximas etapas de configuração no Fozzels ("Sites e lojas" e "Atributos"), onde você pode configurar a sincronização de produtos e atributos.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8pwl3nO-DvkTHXjdP3kCZwH6esC012DXYg.png)
**Passo 6: Configuração de sites e lojas**
1\. Clique no botão "**Puxar sites e lojas**". Isso recuperará e exibirá todos os sites e lojas associados da sua conta WooCommerce.
2\. Ative os sites e lojas necessários ativando as alternâncias de status correspondentes para **ATIVADO**.
3\. Clique no botão "**Puxar produtos**" para cada loja necessária. Esta ação inicia o carregamento inicial de dados de produtos no Fozzels. Leia mais sobre puxar produtos [aqui](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained/).
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/OT8f7hDzpyxRkabdwOZz9-0ph8-2UMGMnA.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/pXfqdGQaJ_kePo3JmAj2P43ZxhaPZWFnMg.png)Depois que o processo de carregamento de produtos for concluído, o Fozzels estará pronto para trabalhar!
Agora você pode prosseguir para a aba "Atributos" para configurá-los. Leia mais sobre como gerenciar atributos [aqui](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).
