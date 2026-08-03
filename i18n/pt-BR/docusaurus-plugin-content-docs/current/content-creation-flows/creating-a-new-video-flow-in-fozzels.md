---
id: '103000370066'
title: 4.6.1 Criando um Novo Fluxo de Vídeo no Fozzels
sidebar_position: 15
slug: /content-creation-flows/creating-a-new-video-flow-in-fozzels
description: O recurso de Fluxo de Vídeo é um Fluxo de Conteúdo especializado dedicado à geração de ativos de vídeo de alta fidelidade para apresentação de produtos. Criando um Fluxo de Vídeo
keywords:
- instrução
- comando
---

O recurso de Fluxo de Vídeo é um Fluxo de Conteúdo especializado dedicado à geração de ativos de vídeo de alta fidelidade para apresentação de produtos. Criar um Fluxo de Vídeo envolve três fases principais: configuração básica (seleção de modelo), seleção de ativos (produto e imagem) e engenharia de prompt precisa. Devido ao alto custo computacional da geração de vídeo, a precisão na configuração é fundamental para execução bem-sucedida e controle de custo.

1.  Iniciando o Fluxo de Vídeo

1.1 Acesso e Seleção de Loja Para começar, navegue até a aba "Fluxos de Vídeo" no cabeçalho principal do Fozzels. Na página Fluxos de Vídeo, você deve primeiro selecionar a loja no menu suspenso "Escolher loja" para garantir que o vídeo gerado esteja vinculado à instância de catálogo de produtos correta. Clique no botão "Novo Fluxo de Vídeo" para prosseguir.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/dhsYmY2Ex4slpTZPdudcNOVCe9nEhoPHyg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/l9D27YTXULoQgwNoai2p9a3wY9wBuD0rxA.png)

1.2 Configuração Básica (Etapa 1) Você será redirecionado para a tela de configuração onde define a identidade do fluxo e o mecanismo principal.

1.2.1 **Nomeie** o Fluxo: Forneça um nome claro e descritivo no campo **"Nome"** para fácil identificação em sua lista de fluxos.

1.2.2 **Selecione** Modelo de IA: O sistema atualmente usa como padrão o provedor Google | Gemini para geração de vídeo. Você deve selecionar o modelo de geração de vídeo especializado, "Gemini Veo 3".

Este modelo é projetado para produzir vídeos de alta qualidade em 720p com duração de até 8 segundos. Suporta entrada de imagem, o que é essencial para fundamentar o vídeo em um ativo de produto específico.

1.2.3 **Defina** Tipo de Fluxo: Na seção **"Tipo"**, escolha o tipo de saída de vídeo necessária. Selecione "Geral | Vídeo Único".

Esta configuração confirma que o sistema gerará ativos visuais e apresentações de produtos, marcando o bloco com uma marca de seleção verde.

1.2.4 **Clique** no botão **"Enviar"** para salvar essas configurações fundamentais e mover para o próximo estágio.

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ocwd1m8bDjLUbvNWQQ15jP7-oy92bMKZxw.png)

2.  Configurando Ativos e Engenharia de Prompt

Após a configuração básica, você é direcionado para a página de definição de ativos e prompt.

2.1 Seleção de Produto e Imagem Seleção de Produto:
No lado esquerdo da tela, **selecione o produto específico** da lista de catálogo para o qual o vídeo será gerado.

Seleção de Imagem: O bloco central exibe o produto selecionado e sua galeria de imagens. Você deve **escolher** a única imagem mais adequada da galeria, pois essa âncora visual guiará o processo de geração de vídeo da IA.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/y1tWTQrZy2gjdG9yduMpGv4A3xQevUN6-g.png)

2.2 Engenharia de Prompt (A Etapa Crítica) O prompt é a única entrada controlando o conteúdo, estilo e narrativa do vídeo.

Requisito de Entrada: O campo "Prompt" não pode ficar vazio. Deve conter instruções detalhadas e descritivas delineando o resultado de vídeo desejado (por exemplo, cenário, clima, ação, movimentos de câmera).
**Leia** a próxima seção, **[Dicas para Criar um Prompt Eficaz + Exemplos](/content-creation-flows/tips-for-creating-an-effective-prompt-examples/)**, antes de escrever seu prompt para garantir qualidade de vídeo ideal.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/ZGiO6GR7CNBTRPTFYBz1RRmNNRTwD_WW6A.png)
Gerenciamento de Modelo de Prompt: Para promover consistência e eficiência, **use** o botão "Salvar" acima do campo de prompt para salvar sua instrução como modelo reutilizável. Isso economiza tempo ao criar fluxos subsequentes.

3.  Ativação, Execução e Gerenciamento

Após definir o produto, imagem e prompt, o fluxo está pronto para execução.

3.1 Ativando e Finalizando o Fluxo Ativando o Fluxo:
3.1.1 Para iniciar o processo de geração imediatamente, **marque** a caixa **"Fluxo ativo"** ao lado do nome do fluxo. Se deixado desmarcado, o fluxo permanece no modo rascunho.
3.1.2 **Clique** no botão principal **"Salvar"** na parte inferior da página. O sistema salva todas as configurações e o redireciona para a página **"Lista de lotes"**, que funciona como o monitor de execução.

3.2 Iniciando a Geração de Vídeo a partir da Lista de Lotes Na página Lista de lotes, localize o produto que você acabou de configurar.
Confirmação Manual: Para enviar a solicitação para a IA, você deve manualmente **alternar a chave** na coluna **"Confirmado"** para a posição "ativada".
Iniciar Geração: Finalmente, **clique** no ícone ao lado da chave. Apenas esta ação envia a solicitação confirmada ao mecanismo de IA para iniciar a renderização de vídeo. O sistema rastreará o status de geração.
![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/4M5pPg3JaDfvqdgAQ_109lMCWqpJpbt8gQ.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/1NwPEnPYEC3N6fbBX63dOizDPR3J6G4EVA.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/LJon-h82hu4do0c1tI3oVznHeXvSifWXjg.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/YwJ6UJ7VzaDPedpbnlZBIqzyNhO1yIuz6g.png)

![](/img/kb/content-creation-flows/creating-a-new-video-flow-in-fozzels/Fb0QFQE1i1hJoK8U4rpyysLV_UwftKGWYQ.png)

3.3 Acessando o Vídeo Gerado Após a conclusão, o arquivo de vídeo final fica disponível para visualização e download direto da Lista de lotes. O ativo de vídeo também é armazenado automaticamente em seu repositório de mídia pessoal, que pode ser acessado em: user/settings/generated media.
