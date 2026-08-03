---
id: '103000408096'
title: '4.5.1.a. Guia do Usuário: Fluxo de Imagem Automatizado para Magento 2'
sidebar_position: 14
slug: /content-creation-flows/user-guide-automated-image-flow-for-magento-2
description: Fluxo de Imagem para Magento é uma ferramenta de automação especializada, nível empresarial, projetada para geração de imagem IA em massa, mapeamento automático de metadados e sincronização direta
keywords:
- instrução
- comando
---

**Fluxo de Imagem para Magento** é uma ferramenta de automação especializada, nível empresarial, projetada para geração de imagem IA em massa, mapeamento automático de metadados e sincronização direta com seu catálogo Magento. Configurando este fluxo, você estabelece um pipeline autônomo que monitora sua loja Magento, processa milhares de produtos e atualiza dinamicamente seu site com base em critérios de filtro avançados.

> **Importante:** Recomendamos fortemente **não ativar** o fluxo (mantendo o alternador "Fluxo ativo" **DESLIGADO**) até que você tenha completado todas as configurações dentro de Fozzels e testado suas configurações.

## 1\. Criando um Novo Fluxo de Imagem Magento (Aba 1)

Esta aba trata da conexão primária e identidade de sua sequência de automação Magento.

-   **Opção A: Via o Menu Fluxos de Imagem** — Navegue até **Fluxos de Imagem** na barra de navegação superior, clique em **Novo Fluxo de Imagem**, e selecione sequencialmente sua **Integração Magento**, Website e Visualização de Loja nos menus suspensos.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3sMs1RpGzJC1CfMq-OPKPRx6S7bvaX80XQ.png)

-   **Opção B: Do Catálogo de Produtos** — Vá para **Catálogo → Produtos**, filtre os SKUs Magento específicos que deseja processar, selecione-os, e clique em **Ações → Criar Fluxo de Imagem**. Isto preenche antecipadamente sua visualização de loja Magento e contexto de produto automaticamente.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/FYFCs9P6ybHQ4OrlVaSn9YmgmftqIdhxAw.png)

**Etapas Essenciais:**

1.  **Nomeie seu Fluxo:** Dê ao seu fluxo um nome claro e descritivo (por exemplo, "Loja Magento - Outono 2026 - Gemini Pro").

2.  **Confirme a Seleção:** Confirme seus parâmetros de loja Magento clicando no botão **Enviar** na parte inferior da página.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/liZ6uL_K1ryZ9ltZQsCUAhG6jAYP4UqhrQ.png)

##
2\. Configuração de IA e Grade de Mídia (Aba 2)

Nesta aba, você define o mecanismo de modelo de IA principal e as características exatas de layout visual necessárias para seus modelos de tema Magento.

### **Seleção de Provedor e Modelo de IA**

Selecione sua rede de processamento e modelo específico dos cartões interativos na tela:
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3eMz8tYlXhUnC_8wEhgtjjig_7FHQP_x-w.png)

-   **Google | Gemini:**

-   **Gemini 2.5 Flash | Nano Banana:** Um modelo rápido e eficiente otimizado para tarefas de alto volume e baixa latência. Suporta **até 3 presets de referência**.

-   **Gemini 3 Pro | Nano Banana Pro:** Projetado para produção de ativos profissional e instruções complexas. Apresenta um processo "Pensamento" padrão que refina composição e suporta **até 14 presets de referência**.

-   **Gemini 3.1 Flash | Nano Banana 2:** Um modelo atualizado e altamente eficiente equilibrado para criação de ativos em alto volume. Suporta **até 14 presets de referência**.

-   **Prova Virtual `NOVO`:** Um modelo especializado para gerar imagens fotorrealistas mostrando como roupas ficam em uma pessoa (requer preset de imagem de pessoa e imagem de peça de vestuário de produto).

-   **OpenAI | ChatGPT:**

-   **GPT Image 1:** Um modelo de geração de imagem preciso e de alta fidelidade utilizando os estruturas multimodais mais recentes.

-   **GPT Image 1 Mini `NOVO`:** Um mecanismo de geração e edição de imagem altamente custo-eficiente—oferecendo o melhor valor para casos de uso em alto volume.

-   **GPT Image 2 `NOVO`:** Um modelo de geração de ponta construído para renderização rápida e de alta qualidade com resoluções flexíveis até 3840px.

-   **xAI:**

-   **Grok Imagine Image:** O modelo padrão de geração de imagem do xAI, entregando imagens de alta qualidade de prompts textuais. Suporta **até 5 presets de referência**.

-   **Grok Imagine Image Pro `PRO`:** Arquitetura xAI premium entregando qualidade de imagem superior com detalhe e precisão de textura aprimorados. Suporta **até 5 presets de referência**.

###
**A Grade de Formato de Saída Interativa**

Os temas Magento dependem muito de dimensões de imagem precisas para evitar mudanças de layout em seu frontend. Use a grade para estabelecer especificações exatas de pixels:

1.  **Selecione Proporção de Aspecto:** Na coluna esquerda, escolha sua geometria de layout (por exemplo, **Quadrado 1:1** padrão para grades de categoria, ou **Retrato 3:4** para Páginas de Detalhe do Produto (PDP)).

2.  **Selecione Resolução e Escala:** Clique diretamente em uma célula de grade mapeando para sua camada de pixel desejada sob as colunas **512, 1K, 2K ou 4K** (por exemplo, **512x512** até **4096x4096** para fornecer uma experiência de zoom ao passar o mouse profunda em sua vitrine).

3.  **O Painel de Visualização:** O painel direito interativo renderiza dinamicamente um marco de recorte visual, o formato de arquivo de destino e calcula o **Est. tamanho** (peso do arquivo) e **Est. tokens** (custo de geração) por solicitação de imagem.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/Ked7uS5641FdzLgFJkkyBLIIB44pYiuh5Q.png)
3\. Filtragem de Catálogo Magento e Criação de Prompt (Aba 3)

Esta seção funciona como o cérebro criativo de seu fluxo Magento, permitindo que você filtre produtos dinamicamente e injete atributos nativos em seus prompts.

### **Seção A: Selecionar Presets**

-   **A Regra de Universalidade:** Como um único conjunto de presets se aplica a um cluster de produtos Magento inteiro, escolha ativos neutros. Evite referências com marcadores de marca distintos ou detalhes únicos que podem acidentalmente se estender para diferentes marcas em seu inventário Magento.

-   **Contador de Capacidade:** Rastreie sua alocação de slots preset via o contador no topo. Modelos como Gemini Pro permitem até 14 slots de referência, permitindo que você estabeleça consistência multi-ângulo e de iluminação extrema.

-   **Adicionando Referências:** Clique na grande caixa **\[+\] Adicionar preset** para abrir o menu suspenso nativo e selecione seu tipo de referência:

1.  **Modelo:** Escolha um ativo de modelo de moda da biblioteca integrada de Fozzels para definir poses e estilização humana.

2.  **Cena:** Selecione um estilo de fundo ou modelo de ambiente.

3.  **Produto:** Injete uma foto de referência adicional de seu produto para dar ao IA mais ângulos ou detalhes.

4.  **Imagem:** Envie qualquer imagem personalizada ou arquivo de referência diretamente de seu layout de computador.

    5.  **Mídia Gerada:** Escolha uma imagem que já foi renderizada com sucesso em Fozzels para manter consistência.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/poqeQbutVP7nGAfD5MDN1F9aCnQ23CE6iw.png)

### **Seção B: Construtor de Regra Magento Avançado (Filtrar e Selecionar Produtos)**

-   **Operadores Lógicos:** Combine múltiplos parâmetros de critérios através de caminhos lógicos `AND` ou `OR`.

-   **Pesquisas de SKU Direcionadas:** Use condições como `SKU` `in` `[Valor, Valor]` para mapear seu fluxo diretamente em linhas de atributo Magento explícitas e separadas por vírgula. A visualização interativa abaixo se atualiza instantaneamente para exibir itens correspondidos.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/l4Ka92XutqmJkQgI3uopMdusTJwSckSEIw.png)

### **Seção C: Prompts de Atributo Dinâmico**

-   **Injeção de Atributo Magento:** Escreva suas instruções de design dentro da janela de terminal principal, depois aproveite o **painel Atributos** no lado direito. Você pode clicar ou arrastar e soltar campos de dados nativos Magento (como `Categoria`, `Cor` ou `Material`) diretamente em seu texto. Fozzels substituirá dinamicamente estes marcadores de posição com valores únicos para cada produto individual processado no lote.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/hSKoFNYycQr--RrbjrFaaNum4tvErHYsHA.png)

##
4\. Configurações de Automação Magento e Nomeação de Imagem (Aba 4)

Esta aba controla como seus ativos de mídia são inicialmente enfileirados para processamento e estruturados para injeção na arquitetura do banco de dados Magento, garantindo mapeamento de dados padrão adequado e otimização de SEO.

-   **Quantidade de imagens a processar por dia:** Defina limites de limite para acelerar fluxos de geração sobre operações de fundo de longo prazo.

-   **Nome do arquivo para imagens enviadas (Nomeação de SEO):** Maximize a saúde de SEO de sua loja Magento projetando nomes de arquivo programáticos. Use texto padrão ou insira slugs de atributo dinâmicos do menu suspenso (como `{name}` para o nome do produto ou parâmetros de código específicos como `{color}`). Espaços são automaticamente simplificados para hífens limpos (`-`). O sufixo `_{id}.{ext}` é acrescentado pelo sistema automaticamente para garantir unicidade de arquivo de banco de dados e evitar sobrescrita de ativos existentes em seu servidor Magento.

-   **Posição da imagem na loja:** Insira o número de peso de prioridade global padrão (padrão é `101`). Números mais baixos aparecem antes em seu layout Magento (`1` = primeiro / destaque). Um peso padrão de `101` insere com segurança suas saídas de IA logo atrás de suas imagens de catálogo gerenciadas nativamente pela loja.

-   **Funções de imagem na loja:** Mapeie ativos diretamente para funções de mídia Magento nativas utilizadas pelo seu modelo de tema ativo. Clique no campo para atribuir funções estruturais de retorno padrão como `Base` (imagem principal do produto), `Pequeno`, `Miniatura` ou `Amostra`.

-   **Ocultar imagens enviadas na página do produto:** Ative esta caixa de seleção para sincronizar com segurança gráficos para sua pasta de mídia Magento para funções técnicas de back-end (como ícones de carrinho de checkout ou controles deslizantes personalizados secundários) sem exibi-los dentro do seu carrossel de galeria frontend principal do consumidor.

-   **Totalmente automático \[Em Breve\]:** Este recurso está atualmente em desenvolvimento. Uma vez ativo, ativar esta caixa de seleção permitirá que você ignore completamente a validação humana, publicando imagens diretamente para suas visualizações Magento ativas no segundo em que terminarem de renderizar.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/zAHGFiGSaSobL-Deg00nawI92l2RDf4wzw.png)

##

## 5. ****Ativação e Execução do Fluxo****

Uma vez que você completou todos os campos de mapeamento na Aba 4, seu pipeline automatizado está pronto para implantação. Use as etapas seguintes para inicializar o mecanismo de geração:

1.  **Ative o Fluxo (Alternador Fluxo Ativo):** Mova a chave de alternador mestre **Fluxo ativo** localizada no canto superior direito da página para a posição **LIGADO**. Isto oficialmente faz a transição de sua automação de um estado de rascunho para uma rotina operacional.

2.  **Inicie a Geração (Planejar e Fechar / Executar Agora):**

-   Clique no botão dividido verde no canto inferior direito da tela.

-   Selecione **Executar Agora** nas opções suspensas. O sistema bloqueará seu layout de configuração final, fechará o espaço de trabalho do construtor e acionará imediatamente o mecanismo de fundo para processar seus dados de lote de produto Magento.

3.  **Monitore o Progresso:** Para visualizar o status de renderização em tempo real ou ir direto para a fila de moderação, clique no botão **\[Lista de Lotes\]** turquesa no canto inferior esquerdo. Isto o roteia instantaneamente para seus logs de processamento cronológicos.

## 6\. Trabalhando com a Lista de Lotes e Revisões

Se a opção **Totalmente automático** estiver desativada, todos os ativos serão roteados diretamente para sua **Lista de Lotes** para revisão e implantação manual.

### **Navegando no Índice de Lotes**

Clique no botão **Lista de Lotes** para carregar seus logs de execução. Selecione sua sessão cronologicamente na tabela esquerda e use o painel principal **Lista de Conclusão de Imagem** para monitorar o processamento de produto linha por linha ao lado de seus SKUs Magento originais.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/oXCxEay_94461PqsajzJPS4wYBlWEgCZjA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/5r4iWyzzfg14_CTFejOGP9ZVint4EoOtnw.png)

### **A Interface de Revisão Consolidada ("Deslizar e Sincronizar")**

Clicar no **ícone Olho** abre nossa sobreposição simplificada lado a lado projetada para deixar você fazer auditoria rápida de lotes e sobrescrever parâmetros globais em um nível individual e item-por-item:

-   **Revisão Lado a Lado:** O **Painel Gerado (Esquerda)** exibe a nova opção de IA; o **Painel Original (Direita)** exibe seu arquivo de referência da loja Magento. Use **\[Zoom In\]** em ambos os lados para micro-inspeções.

-   **Console de Sobrescrita de Metadados Magento:** Localizado diretamente sob os cartões de imagem, isto permite que você ajuste fino configurações específicas de vitrine para o produto selecionado antes de enviá-lo para ativo:

-   **POSIÇÃO:** Mude manualmente o caixa de texto de ordem de galeria (por exemplo, diminua de `101` se deseja que este render específico seja a miniatura principal).

-   **FUNÇÕES:** Clique nos crachás de alternador interativos (`Base`, `Pequeno`, `Miniatura`, `Amostra`) para atribuir ou remover dinamicamente valores de apresentação Magento nativos para este arquivo específico.

-   **OCULTAR NO PDP:** Marque esta caixa para ocultar apenas este ativo individual do carrossel da página de detalhe do produto.

-   **O Loop de Controle:**

-   **Regenerar:** Dispara uma reexecução imediata e irrestrita para uma variação visual alternativa se o layout precisa de um redesenho.

-   **Aceitar e próximo:** Aprova a versão, bloqueia suas sobrescritas de metadados Magento customizadas e **instantaneamente desliza aberta a próxima imagem** em sua fila de lote.

##
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/fghCPbvdab9wtI-u0AWAUQPsuXIrvMCEPg.png)
6\. Ações em Massa e Exportações ZIP Locais

Fozzels fornece portabilidade de dados total sobre seu inventário visual. Você pode enviar lotes diretamente para Magento ou exportar pastas localmente.

### **Executando Ações em Massa:**

1.  Marque as caixas de seleção no lado esquerdo de linhas dentro de sua tabela **Lista de Conclusão de Imagem**.

2.  Abra o menu suspenso **Ações** localizado diretamente acima dos cabeçalhos de grade de dados e escolha sua rotina:

-   **Mostrar Selecionados:** Filtra sua tela de trabalho para isolar apenas suas linhas de produto Magento marcadas.

-   **Baixar imagens (ZIP):** Dispara a compilação de fundo de todos os ativos de alta resolução gerados por IA marcados em um único pacote compactado.

### **Onde Encontrar Seus Arquivos Baixados**

Como processar lotes grandes de imagens de alta resolução pode levar alguns momentos, os arquivos são gerados em segundo plano. Para baixar seus arquivos completados:

1.  Clique no menu suspenso **Painel** no canto superior direito da barra de navegação do cabeçalho principal.

2.  Selecione **Exportar / Dados Gerados** da lista.

3.  Uma vez que o crachá de status fica verde (**Disponível**), clique no botão azul **\[ZIP\]** na coluna _Download_ para salvar o arquivo diretamente no seu computador.

> ⚠️ **Nota Importante:** Arquivos ZIP gerados são mantidos no servidor e disponíveis por **24 horas apenas**. Não se esqueça de baixar seus ativos antes que o link expire!

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/EqkvThCVlPgUbKnTorc6vQ3Ilx2CxPOccg.png)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/b3yz16xNhZFEKIfuUAB_xhtCTPD7feQp6w.png)

##
7\. Otimização de SEO: Gerando Textos Alt para Novas Imagens

Além de ativos visuais, Fozzels pode gerar automaticamente textos Alt relevantes e otimizados para SEO (descrições alternativas) para cada nova imagem de IA enviada para sua loja Magento. Isto melhora significativamente os fatores de ranking de seu catálogo nos resultados de Busca de Imagem do Google.

Para aprender como configurar geração automatizada e mapeamento de metadados para tags Alt, leia mais aqui: **Guia do Usuário: Textos Alt Automatizados e SEO para Magento**.
