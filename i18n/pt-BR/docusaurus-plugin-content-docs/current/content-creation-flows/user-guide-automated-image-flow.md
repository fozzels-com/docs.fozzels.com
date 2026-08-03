---
id: '103000400446'
title: '4.5.1. Guia do Usuário: Fluxo de Imagem Automatizado'
sidebar_position: 13
slug: /content-creation-flows/user-guide-automated-image-flow
description: Fluxo de Imagem é uma ferramenta profissional projetada para geração e sincronização em massa de imagens de produto usando IA. Ao configurar um fluxo uma vez, você estabelece
---

**Fluxo de Imagem** é uma ferramenta profissional projetada para geração e sincronização em massa de imagens de produto usando IA. Ao configurar um fluxo uma vez, você estabelece um sistema autônomo que processa milhares de produtos, incluindo novos itens adicionados à sua loja no futuro através de filtragem dinâmica baseada em condições.

> **Importante:** Recomendamos fortemente **não ativar** o fluxo (mantendo o alternador "Fluxo ativo" **DESLIGADO**) até que você tenha completado todas as configurações e testado suas configurações.

## 1\. Criando um Novo Fluxo de Imagem (Aba 1)

Esta aba trata da identidade básica e conexão de sua automação. Existem duas formas principais de iniciar um novo fluxo:

-   **Opção A: Via o Menu Fluxos de Imagem** - Navegue até a seção **Fluxos de Imagem** na barra de navegação superior e clique no botão **Novo Fluxo de Imagem**. Selecione sua Integração, Website e Loja sequencialmente nos menus suspensos.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/aGysMRzpl5ijAiHFUH5TFnasSdIEP1py9w.png)

-   **Opção B: Do Catálogo de Produtos** - Na seção **Catálogo → Produtos**, filtre os produtos que deseja processar, selecione-os e clique em **Ações → Criar Fluxo de Imagem**. Este método é mais rápido pois preenche antecipadamente seu contexto de seleção de loja e produto automaticamente.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/WVP7KcJNwsPTLqIzLSQQwGsAoBCdxAdqLg.png)

**Etapas Essenciais:**

1.  **Nomeie seu Fluxo:** Dê ao seu fluxo um nome claro e descritivo (por exemplo, "Vestidos de Verão 2026 - Gemini Pro").

2.  **Salve seu progresso:** Quaisquer mudanças feitas no nome do fluxo ou seleção de loja devem ser confirmadas clicando no botão **Enviar** na parte inferior da página.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/XUm-rzBUqRa_mFIUflBlrrZlaYzDnRHgMw.png)

##
2\. Configuração de IA (Aba 2)

Nesta aba, você define a "inteligência" e a saída visual de sua geração. As configurações variam significativamente dependendo do provedor que você escolher.

### OpenAI | ChatGPT

Ao selecionar o modelo **GPT Image 1**, você tem acesso aos seguintes parâmetros:

-   **Qualidade**: Selecione sua qualidade de geração preferida do menu suspenso (**Auto, Alta, Média ou Baixa**).

-   **Tamanho da Imagem**: Escolha o formato desejado do menu suspenso (**Auto, Quadrado, Paisagem ou Retrato**). Nota: Uma grade interativa para GPT em breve.

-   **Contagem de Imagens**: Você pode gerar **entre 1 e 4 variações** para cada produto por execução única, fornecendo múltiplas opções para revisão manual.

-   **Limites Técnicos**: O tamanho máximo do arquivo de entrada para GPT é **50 MB**.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/6Id3aPkXYEb0MEhxve0-510480uvgB2VrA.png)

### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/5NYWCV_4Lb3wxJ4MwkVOe96Mk4o5LU4NVg.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/oiDXnZOLp3NVu3waNL4ZREtyriHjNEvGgQ.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/eQxo8gJitU9Q5Zp7y3BE4FljSNrHhgqITw.png)Google | Gemini

Os modelos Gemini utilizam uma grade de **Formato de Saída** interativa para controle preciso sobre seus resultados.

-   **Modelos Disponíveis**: Escolha entre **Gemini 2.5 Flash (Nano Banana)**, **Gemini 3 Pro (Nano Banana Pro)** e **Gemini 3.1 Flash (Nano Banana 2)**.

-   **Contagem de Imagens**: Para todos os modelos Gemini, este valor é fixado em **1** (o campo está desativado) pois eles geram uma imagem otimizada por solicitação.

-   **Limites Técnicos**: O tamanho máximo do arquivo de entrada é **7–10 MB**.

-   **Prova Virtual**: Um modelo especializado para moda.
**Nota:** Para este modelo, a grade de saída está desativada pois o sistema utiliza automaticamente um formato fixo e otimizado para garantir ajuste realista de peças de vestuário.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/Ydm8oxLyvSgZ7H_x5R1Uf0kb_u7RxmIXRw.png)

> Para aprender mais sobre modelos de IA e suas capacidades técnicas específicas, leia mais aqui \[link a ser adicionado\].

#### **Como Usar a Grade de Formato de Saída (Apenas Gemini)**

A grade permite que você defina a "forma" exata e qualidade de suas imagens geradas:

1.  **Selecione Proporção de Aspecto:** Na coluna esquerda, escolha uma proporção (por exemplo, **Quadrado 1:1** para cartões de produto, **Retrato 3:4** para moda, ou **Paisagem 16:9** para banners).

2.  **Selecione Resolução (Qualidade):** Escolha uma coluna com base na capacidade do modelo (**1K, 2K ou 4K**). Clique na célula de resolução específica (por exemplo, **1024x1024**).

3.  **Confirmação Visual:** Uma marca de seleção verde aparece na célula selecionada. Verifique o painel **Visualização** à direita para ver a forma do marco, as dimensões exatas em pixels e os **Est. tokens** (custo estimado) para a geração.

4.  **Compatibilidade:** Células marcadas como "Não suportado" não estão disponíveis para o modelo selecionado.

**⚠️ Aviso:** Certifique-se de clicar no botão **Salvar** após selecionar seu modelo e configurações de saída para armazenar estas preferências. Seu fluxo não aplicará estas mudanças a menos que sejam salvas.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/gkfM9PdTV36LEV-UL7SN9obfvD3AOKt7_Q.png)

##
3\. Seleção de Fluxo e Prompt (Aba 3)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/H3B5OOvEGyTufKlUAsFd_uzfwAVXLbVcEA.png)

Esta aba é o coração de sua criação de conteúdo. O primeiro e mais crítico passo é configurar seus **Presets**.

### **Seção: Selecionar Presets**

Presets são imagens de referência visual que funcionam como instruções para o IA. Eles estabelecem o estilo geral, iluminação e contexto para **cada** produto processado dentro deste fluxo.

> **A Regra de Ouro: Universalidade** Como um único conjunto de presets é usado para um grupo inteiro de produtos (por exemplo, centenas de vestidos ou todos os calçados), suas seleções devem ser **UNIVERSAIS**.
>
> -   _Exemplo:_ Se você adicionar um preset de **Produto** mostrando um SKU específico azul, o IA pode erroneamente tentar adicionar detalhes azuis a cada outro item no fluxo. Escolha apenas referências que sejam apropriadas para a categoria inteira de produtos que você está processando.
>

####
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FJlYttezkuyQFvSp16LDTSwFhOa5MFopmw.png)
**1\. Limites e Capacidade**

No topo do bloco, você verá um contador (por exemplo, **8/13**).

-   **Capacidade Máxima:** Isto depende do modelo de IA que você escolheu (por exemplo, até **14** para Gemini Pro e Gemini 3.1 Flash).

-   **Composição:** Um slot sempre é reservado para a imagem principal do produto sendo processado; os slots restantes são para seus presets universais.

#### **2\. Tipos de Preset e Pesquisa de Biblioteca**

Clique no botão **"Adicionar preset"** para escolher um tipo. Use o **Sistema de Filtro** para encontrar rapidamente o que você precisa:

-   **Modelo:** Define a pose e aparência da pessoa usando seus produtos. Filtre a biblioteca por gênero, idade ou etnia para encontrar uma aparência que represente sua marca.

-   **Cena:** Determina o ambiente (por exemplo, Estúdio, Rua, Interior). Use filtros de categoria para encontrar um fundo que complemente sua gama de produtos inteira.

-   **Produto (Ângulos Adicionais):** Ajuda o IA a entender itens complexos (por exemplo, a textura de um tecido ou a sola de um sapato).

-   **Pesquisa:** Use o filtro de catálogo (que funciona exatamente como a seção principal de **Catálogo**) para pesquisar por Título, SKU ou Categoria.

-   **Seleção de Imagem:** Uma vez que você encontre um produto representativo, você pode selecionar **qualquer uma de suas imagens** (por exemplo, uma visão traseira ou um close-up). Simplesmente marque a imagem desejada com uma **marca de seleção verde** e salve.

-   **Imagem:** Utilizada para texturas, logos ou elementos específicos de marca.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/UBYhntqBETFRErz_N1DJPPrNu8VI8_uh-A.png)

####
**3\. Enviando Seus Próprios Ativos (+ Adicionar)**

Se você enviar sua própria imagem (para tipos Modelo, Cena ou Imagem) via o botão **\+ Adicionar**, você deve atribuir **Valores de Filtro** a esse arquivo.

-   Ao rotular seu envio (por exemplo, especificando o tipo de cena ou gênero do modelo), o sistema indexa o arquivo. Isto permite que você encontre e reutilize instantaneamente seus ativos personalizados em fluxos futuros através de sua biblioteca privada.

#### **4\. Deletando e Finalizando**

-   Para remover uma referência, clique no **ícone lixeira** no cartão de preset.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/i37UkovmY_SDzeW_4IjJEJGW6g7337yjEg.png)

-   **Importante:** Após adicionar ou remover presets, você **DEVE** clicar no botão **Salvar** na parte inferior da página. O assistente de IA não reconhecerá o conjunto de referência atualizado até que as mudanças sejam salvas.

### **Seção: Filtrar e Selecionar Produtos**

Esta seção permite que você defina com precisão a lista de itens para o qual o IA gerará nova imaginação.

> **❗ Importante:** Por padrão, quando um novo fluxo é criado, **TODOS** os produtos de sua loja estão incluídos. A contagem de produtos mostrada no cabeçalho (**Filtrar e Selecionar Produtos - XX**) é dinâmica e se atualizará em tempo real conforme você ajusta suas configurações.

####
**1\. Cartões de Produto e Seleção de Imagem**

O bloco exibe uma grade de seus cartões de produto.

-   **Ícone "Pilha de Imagens":** Um ícone no canto superior direito de um cartão indica que o produto tem mais de uma imagem.

-   **Escolhendo a Imagem Base:** Clique em um cartão de produto para abrir a pop-up de galeria. Selecione a foto mais adequada para servir como a "Imagem Base" para geração (este é o slot reservado enviado ao IA ao lado de seus presets).

-   Por padrão, o sistema usa a **primeira** imagem de seu catálogo.

-   Para mudá-la, simplesmente selecione uma foto diferente e clique **Salvar** na pop-up.

#### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/BsDYOnyD0cPg_dl35r0HT6YgOmKmffLBWQ.png)
**2\. Requisitos: Produtos com Imagens**

Produtos que **não possuem nenhuma imagem** em seu banco de dados são automaticamente excluídos deste bloco. A geração de IA através de fluxos requer uma base visual para funcionar corretamente.

#### **3\. Usando Filtros (Condições)**

Para selecionar um grupo específico de produtos (por exemplo, apenas "Vestidos" de uma marca específica), use o bloco de filtro. A lógica funciona de forma idêntica à seção **Catálogo** principal. Apenas produtos atendendo a estes critérios permanecerão no fluxo.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c_yGlTAqTpbYt9K8gCiBwMDPPLqEkUbqUQ.png)

#### **4\. Gerenciamento de Conjunto Manual**

Você pode refinar ainda mais sua lista após aplicar filtros usando os seguintes controles:

-   ✅ **Excluir selecionados:** Marque as caixas em produtos específicos que deseja remover do conjunto atual e clique neste botão.

-   ✅ **Incluir apenas selecionados:** Marque produtos específicos que deseja manter; todos os outros serão removidos do fluxo.

-   **Botão Atualizar:** Se você cometer um erro durante a seleção manual, clique em **Atualizar**. Isto redefine o conjunto de volta ao estado definido por seus filtros, desfazendo quaisquer ações de "Excluir" ou "Incluir" manuais.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ekGLld7o3QbwkYFOEmsqTUrlioP8xJlXtA.png)

#### **5\. Sincronização de Catálogo Dinâmico**

Fluxos de Imagem seguem as mesmas regras que Fluxos de Conteúdo:

-   O conjunto de produtos é atualizado após cada pool de sincronização diária.

-   Isto significa que se você adicionar um novo produto à sua loja que corresponda aos filtros definidos em seu fluxo, ele será **automaticamente** adicionado à fila de geração no dia seguinte.

* * *

**⚠️ Aviso:** Sempre verifique novamente a contagem final de produtos antes de salvar seu fluxo para garantir que você não tenha direcionado acidentalmente sua loja inteira em vez de uma categoria específica.

###
**Seção: Editor de Prompt**

O Prompt é o conjunto final de instruções que você envia ao IA. Em Fluxo de Imagem, o editor de prompt utiliza a mesma lógica avançada de Fluxo de Conteúdo, permitindo a criação de descrições visuais de alta qualidade em escala.

#### **1\. O Princípio de Universalidade**

Como este prompt será aplicado a cada item único dentro de seu fluxo, ele deve ser **MAXIMAMENTE UNIVERSAL**.

-   Evite descrever manualmente cores ou texturas específicas (por exemplo, não escreva "um vestido de seda vermelho").

-   Em vez disso, aproveite **Atributos Dinâmicos** para garantir que o IA identifique com precisão as características únicas de cada produto específico.

#### **2\. Usando Atributos Dinâmicos (Arrastar e Soltar)**

À direita do editor, você encontrará uma lista de **Atributos** disponíveis (por exemplo, `Cor`, `Material`, `Marca`, `Tipo de Produto`).

-   **Como funciona:** Simplesmente arraste um atributo da lista e solte diretamente em seu texto.

-   **Guia Detalhado:** Você pode ler mais sobre a mecânica e capacidades do editor arrastar-e-soltar aqui ....

-   **Resultado:** Quando o fluxo executa, o sistema automaticamente substitui a tag (por exemplo, `{{Cor}}`) com o valor atual de cada cartão de produto específico. Isto garante que um vestido azul seja gerado como azul e uma jaqueta de couro seja renderizada com uma textura de couro realista.

#### **3\. Modelos e Reutilização**

Para acelerar seu fluxo de trabalho, use o recurso **Modelos** localizado na parte inferior do editor:

-   **Salvar como modelo:** Uma vez que você criou um prompt perfeito que tem bom desempenho para uma categoria específica, salve-o para uso futuro.

-   **Carregar:** Rapidamente importe modelos existentes em novos fluxos para manter consistência visual em toda sua loja.

#### **4\. Atributos (se preenchidos)**

Mude para a aba **Atributos (se preenchidos)** para ver exatamente quais dados estão disponíveis para seu conjunto de produtos selecionado. Isto ajuda a evitar o uso de tags vazias que podem levar a resultados de IA inconsistentes.

* * *

**Dica de Profissional:** Um prompt universal de alta qualidade deve descrever o **ambiente, iluminação e humor** definidos por seus presets, enquanto deixa os **detalhes específicos do produto** para os atributos dinâmicos.

**⚠️ Etapa Final para Aba 3:** Após finalizar seu prompt clique no botão **Salvar**. Esta ação vincula seus presets, seleção de produto e instruções de prompt em uma única automação funcional.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/9UcxVcuz2XFcQkCC4qSqfhHb7P0EZOtl3w.png)

## ****4\. Automação (Aba 4)****

A aba **Automação** serve como a "Torre de Controle" para seu fluxo. Isto é onde você define o ritmo de criação de conteúdo, gerencia políticas de publicação e oficialmente inicia o processo de geração.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FYJ_qkFMdxjFIhXpgfz3GkHZs7AhNpgpwA.png)

### **1\. Limites de Processamento Diário**

-   **Quantidade de imagens a processar por dia**: Este campo determina exatamente quantos produtos de seu conjunto selecionado serão processados pelo IA a cada 24 horas.

-   **Propósito**: Isto permite que você gerencie seu consumo de token e garanta um rollout constante e gerenciável de novo conteúdo visual para sua loja.

### **2\. Política de Automação e Sincronização**

-   **Estratégia de Confirmação Manual**: Para manter alta qualidade e permitir supervisão humana, **sincronização totalmente automatizada para sua loja está atualmente desativada**.

-   **Fluxo de Trabalho**: Enquanto a **geração** de imagens é automática com base em seu cronograma, a **sincronização** real (upload) destas imagens para sua vitrine (Shopify, Magento, etc.) ocorre apenas após você revisar e aprová-las na **Lista de Lotes**.

### **3\. Ativando e Gerenciando o Fluxo**

-   **Alternador Fluxo Ativo**: Localizado no canto superior direito, este interruptor ativa ou desativa a lógica de automação inteira para este fluxo.

-   **A Regra de Salvar**: Qualquer mudança ao status de **Fluxo ativo** - se você está ligando-o pela primeira vez ou desativando um fluxo antigo - **DEVE** ser confirmada clicando no botão **Salvar**. Se você não salvar, o alternador reverte e suas mudanças não têm efeito.

### **4\. Gatilhos de Execução**

Uma vez que o fluxo está ativo, você tem duas formas de iniciar a geração:

-   **Planejar e Fechar**:

-   Este botão agenda o fluxo para executar automaticamente.

-   **Timing**: A geração não começará instantaneamente; será iniciada apenas após a próxima **sincronização diária do pool de produtos** (a atualização em todo o sistema de seu catálogo de loja).

-   **Executar Agora**:

-   Este botão aparece como uma opção adicional uma vez que o fluxo está ativado.

-   **Timing**: Clicar em **Executar Agora** contorna a espera do pool diário e inicia a geração **imediatamente** para o limite do dia atual.

-   _Nota_: Uma execução manual conta para sua cota diária. A próxima execução programada ocorrerá no dia seguinte após o sincronização do pool padrão.

### **5\. Lógica de Geração e Eficiência**

-   **Princípio de Geração Única**: Para evitar custos duplicados e dados redundantes, o IA gera uma nova imagem para um produto específico **apenas uma vez** por fluxo.

-   Se uma imagem já foi gerada com sucesso para um produto dentro deste fluxo, o sistema a pulará em ciclos futuros.

-   **Regenerações**: Se você estiver insatisfeito com um resultado específico, você pode disparar manualmente uma "Regeneração" da seção **Lista de Lotes**.

### **6\. Lista de Lotes e Desativação**

-   **Lista de Lotes**: Clique neste botão para acessar seu log de produção. Aqui você pode monitorar o status de seus "lotes," visualizar resultados de IA e executar a sincronização final para sua loja.

-   **Desativação**: Se o fluxo não é mais relevante ou você precisa pausar a produção, alterne o interruptor **Fluxo ativo** para "DESLIGADO" e clique **Salvar**. Isto imediatamente para o agendamento de quaisquer gerações adicionais.

**Aviso Final**: Sempre certifique-se de que seu **Limite Diário** está definido corretamente antes de clicar **Salvar**. Uma vez que o fluxo está ativo, o sistema começará a enfileirar produtos para processamento de acordo com suas configurações.

Aqui está o guia completo para a seção **Lista de Lotes** em Inglês, incorporando todos os detalhes técnicos sobre lógica de sincronização e a interface do usuário.

##
**Lista de Lotes**

A **Lista de Lotes** é seu hub para controle de qualidade e moderação. Cada execução de fluxo (se automática ou manual via botão _Executar Agora_) cria uma nova entrada de lote na lista à esquerda.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/LIJVpWk3sHHmcIRCOQIvCJACgNLRBBIHRw.png)

### **1\. Navegação e Monitoramento**

-   **Barra Lateral de Lotes**: O painel esquerdo exibe todas as execuções organizadas por data e o número de produtos processados (`Contagem`).

-   **Barra de Progresso**: Uma escala codificada por cores no topo direito fornece um status visual do lote: verde para completo, amarelo para em andamento e cinzento para pendente.

-   **Auto-Atualização**: Você pode ativar a função `Atualizar a cada X s` para atualizar automaticamente a página enquanto o IA está processando.

### **2\. Trabalhando com Resultados (Lista de Conclusão de Imagem)**

A tabela principal à direita exibe os resultados para cada produto específico:

-   **Miniatura**: A foto de produto original usada como base.

-   **SKU**: O identificador de produto com um link direto para sua página no painel de administração de sua loja.

-   **Resultados**: A imagem gerada. Passando o cursor sobre a foto revela botões de ação rápida:

    -   **Ver (ícone Olho)**: Abre a janela de inspeção detalhada.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/PExqbyx61jYHouA1Q6gS-Quy1Ea-rWQ9Iw.png)

    -   **Baixar (ícone Seta)**: Salva o arquivo diretamente em seu dispositivo.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/a8L2H8t07YmOsC9exAXCkS0ORMRCAR9ANA.png)

    -   **Sincronizar (ícone Marca)**: Instantaneamente envia esta foto específica para seu site.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/JnEq8veB5PUb88yklirTqpIJncbmCmtUNw.png)

###
**3\. Inspeção e Análise (Visualização de Conclusão)**

Clicar em **Ver** abre uma janela para verificação final:

-   **Painel Esquerdo**: Exibe o resultado final de alta qualidade.

-   **Painel Direito**: Contém uma coluna de todos os dados de entrada. A primeira imagem é sempre a foto do produto original, seguida por um feed rolável de todos os presets usados (referências de modelo, fundos, etc.).

-   **Opções de Conclusão**: O ícone "olho" verde-azulado na coluna `Ações` abre uma pop-up com metadados técnicos: o modelo de IA específico, resolução e o prompt final completo com atributos dinâmicos já preenchidos.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/AgSQKU_4s6dTTRl2n8Uh7u8u__XcDx23FA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/fy3a6eQD7I0VTvO9a0bMe2FSSrBLMGe4_A.png)

###
**4\. Ajustes e Regeneração**

Se você não estiver satisfeito com um resultado, use o ícone **Regenerar** (seta circular):

-   **Edição**: Você pode modificar o texto do prompt ou adicionar novos atributos via Arrastar e Soltar especificamente para aquele SKU.

-   **Sem Limites**: Você pode regenerar uma imagem quantas vezes necessário até alcançar o resultado desejado.

-   **⚠️ Importante**: Uma nova geração **permanentemente deleta** a versão anterior da imagem.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/CEgHxH_y3eClyY2jxcXg1pAUpocdbFQwbQ.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ipoM6y0fgh9G7Rpm1mmCt7mWXvyDn2JikQ.png)

###
**5\. Sincronização de Loja**

Como automação completa está atualmente desativada para garantir qualidade, você decide quando publicar conteúdo:

-   **Individualmente**: Clique no botão de marca de seleção diretamente na imagem na coluna `Resultados`.

-   **Status**: Até ser publicado, a coluna `Sincronizado Em` exibirá o status `Aguardando confirmação do resultado`.

-   **⚠️ Aviso**: Sincronização é **irreversível -** não pode ser cancelada uma vez iniciada.

##
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c9uHBa_kSFHkR_YXg2rBCu-uOXq4xMWgVw.png)

###
**Boa Sorte e Feliz Criação!**

Parabéns! Você agora está totalmente equipado para dominar o **Fluxo de Imagem Fozzels**. Este é seu espaço para transformar ideias em conteúdo visual de alta qualidade em apenas alguns cliques.

##
**Assista às instruções detalhadas no vídeo**
