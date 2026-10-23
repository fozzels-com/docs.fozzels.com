---
title: "Novidades do Fozzels: outubro de 2026, parte 2"
sidebar_position: 19
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2
description: >-
  Workflows que geram textos novamente com feedback da IA, nova geração de
  imagens com novas configurações, exportação flexível para Excel e CSV, textos
  ALT melhores, novos modelos de IA, chat por voz com a Jane e rótulos de IA
  automáticos para imagens e vídeos.
---

A segunda parte das nossas atualizações de outubro leva o seu conteúdo a outro nível. Veja o que espera por você:

- **Um novo nível de qualidade nos resultados.** Um novo tipo de workflow com validação e feedback da IA: o Fozzels verifica seus textos e continua aprimorando-os até que fiquem certos.
- **Ainda mais perto da imagem perfeita.** Ao gerar imagens novamente, agora você pode alterar a foto de origem do produto, o modelo de IA, o prompt e os presets.
- **Seus resultados, suas planilhas.** Baixe relatórios em Excel ou CSV e escolha exatamente quais dados entram no arquivo.
- **Textos ALT significativos, mesmo onde antes havia placeholders.** O Fozzels agora encontra imagens cujo ALT é apenas um nome de arquivo e cria descrições reais para elas.
- **Novos modelos de IA, chat por voz com a Jane e rótulos de IA automáticos** para imagens e vídeos.

Veja tudo o que há de novo e como usar.

## Destaques

### Nova geração automática: textos que seguem as suas regras

Os Workflows agora podem gerar um texto novamente de forma automática quando ele não atende aos seus requisitos. Adicione a nova ação **Regenerate with feedback** a qualquer block de workflow: o texto fica retido para revisão junto com o motivo, e o Fozzels o gera novamente em segundo plano usando esse feedback. Em **Maximum regenerations**, você escolhe quantas tentativas permitir, até 3.

Se você usa a validação por IA (a condição **AI validation fails**), as solicitações de IA adicionais para a verificação são cobradas separadamente.

**Mesmo sem um workflow.** Se você não configurou um workflow assim, o Fozzels ainda gera novamente os textos marcados como suspeitos, mas sem feedback, seguindo as regras normais de conteúdo suspeito, e não imediatamente, mas na próxima rodada de geração.

**Nova ação: Sanitize text.** Limpa um texto da mesma forma que uma nova geração: corrige caracteres codificados como `&amp;`, converte markdown e remove tags HTML não permitidas.

### Exportação flexível para Excel e CSV

Agora você pode exportar resultados para Excel ou CSV e escolher exatamente quais colunas entram no arquivo, por exemplo apenas o SKU e a descrição gerada. Dê à coluna do texto gerado o nome do código do atributo, e o arquivo fica pronto para ser importado na sua loja ou no seu ERP. O Fozzels lembra a sua seleção para a próxima vez.

### Gere imagens novamente com novas configurações

Não gostou de uma imagem gerada? O botão Regenerate nos resultados do seu Image Flow agora abre uma janela em que você pode ajustar as configurações apenas desse resultado antes de gerá-lo novamente:

- **Fotos do produto.** Escolha a partir de quais fotos do produto a IA trabalha, por exemplo outra foto principal se o ângulo original não era o melhor. Você pode selecionar várias fotos, quantas o modelo suportar.
- **Modelo de IA.** Mude para outro modelo, como o Nano Banana em vez do GPT Image, e altere o formato, o tamanho ou o número de imagens.
- **Prompt e presets.** Ajuste as instruções ou adicione, altere e remova presets como fundo, estilo ou cena.

Suas alterações valem apenas para esse resultado: as configurações do Flow continuam as mesmas, e os outros produtos são gerados como antes. Lembre-se de que a nova imagem substitui a anterior de forma permanente; a janela avisa você sobre isso antes de começar.

A página de resultado agora também mostra mais detalhes: quando a imagem foi criada, gerada e gerada novamente, o número de imagens, o status do Flow e qual modelo de IA foi usado.

### Encontre imagens com textos ALT de placeholder

Muitas vezes, o ALT de uma imagem está tecnicamente preenchido, mas é apenas um placeholder: um nome de arquivo como "IMG_2045.jpg" ou simplesmente o nome do produto. Para os clientes e os mecanismos de busca, isso é quase o mesmo que não ter ALT nenhum, mas o Fozzels considerava esses textos ALT como preenchidos e ignorava essas imagens.

Os ALT Flows agora têm uma nova condição de Media Gallery, **has an image whose ALT contains**. Por exemplo, digite ".jpg", e o Fozzels encontra todas as imagens cujo ALT é apenas um nome de arquivo e gera textos ALT significativos para elas. Para incluir também imagens sem nenhum ALT, adicione um grupo de condições com "has an image with an empty ALT" e a sua condição de ALT, e defina-o como "Any condition".

### Rótulos de IA em imagens e vídeos gerados

Toda imagem e todo vídeo gerado pelo Fozzels agora traz um rótulo integrado e legível por máquina que o identifica como gerado por IA, de acordo com os requisitos de transparência do EU AI Act. O rótulo fica armazenado nos metadados do arquivo, então é invisível para os clientes e não muda a aparência das suas imagens, mas continua lá depois da sincronização com a sua loja.

Nas imagens, você também pode vê-lo no Fozzels: o histórico de versões do resultado mostra a etapa **Labelled as AI-generated**.

**Por que isso importa:** você pode usar visuais de IA na sua loja com confiança, sem adicionar rótulos manualmente.

### Fale com a Jane

Agora você pode falar com a Jane em vez de digitar. Clique no microfone no campo do chat, faça a sua pergunta, e a Jane pode ler a resposta em voz alta. Prefere silêncio? Desative as respostas faladas com o ícone de alto-falante ao lado do microfone.

### Novos modelos de IA

Continuamos ampliando a nossa seleção de modelos assim que os provedores de IA lançam novos modelos, para que você sempre possa escolher o mais adequado para cada tarefa.

**Para textos**

**Gemini 4 Argon.** O novo modelo principal do Google, criado para a precisão. É um dos modelos com menor probabilidade de inventar fatos, o que o torna uma ótima escolha para conteúdo de produto detalhado e cheio de especificações.

**Claude Haiku 5.5.** O modelo mais rápido e mais acessível da Anthropic, ideal para gerar conteúdo para catálogos grandes.

**Para imagens**

**GPT Image 2.5 Flare.** Criação e edição de imagens rápidas e de alta qualidade para o dia a dia.

**GPT Image 2.5 Sunburst.** A opção de mais alta qualidade da OpenAI, com edições precisas que mantêm inalterado o restante da imagem, incluindo o seu produto.

**Nano Banana 2.1.** Qualidade melhor e preço menor que o Nano Banana 2.

**Para vídeos**

**HeyGen Video 1.0.** Uma alternativa muito mais acessível ao Veo.

Também desativamos os modelos mais antigos GPT-4.1 e GPT Image 1.

## Qualidade do conteúdo

- **Menos falsos alertas de conteúdo suspeito.** A verificação de conteúdo suspeito agora é mais precisa. Especificações normais de produto com números, como "Breite – 80", "+25 °C" ou "= 60", não são mais sinalizadas. Apenas cálculos reais que a IA deixou no texto por engano, como "59 + 1 = 60", são marcados como suspeitos, então você gasta menos tempo revisando textos que estão corretos.
- **Menos comentários da IA nos seus textos.** Reforçamos ainda mais a proteção contra anotações de serviço do modelo de IA que acabam no seu conteúdo final.
- **A Jane mantém seus atributos intactos.** Quando a Jane reescreve um prompt, ela agora insere corretamente atributos como `{{name}}` ou `{{ean}}`, para que seus prompts continuem funcionando com dados reais dos produtos.

## Flows de imagem e vídeo

### Imagens geradas sempre atualizadas

Os Image Flows têm uma nova opção: **Process the product again when its source image changes**. Quando uma imagem na posição da galeria que o seu Flow usa é substituída, removida ou adicionada na sua loja, o Fozzels percebe isso no próximo pull de produtos e gera uma nova imagem a partir da foto atualizada.

É bom saber:

- As imagens criadas pelo Fozzels não contam como alteração, mesmo que tenham substituído a foto original, e os produtos com imagens escolhidas manualmente nunca são processados novamente.
- Apenas os resultados criados depois que você ativa a opção são verificados, então não há novas gerações em massa inesperadas.
- Cada nova geração é cobrada normalmente. Até que a nova imagem esteja pronta, o resultado atual continua ativo.

### Outras novidades

- **Produtos removidos claramente marcados.** Os produtos excluídos do seu catálogo agora mostram o status "Removed from catalog" também nos Flows de imagem e vídeo, e não são mais contados como "to be synchronized".
- **Chega de novas tentativas sem fim.** Se uma foto de produto não puder mais ser baixada, o Fozzels para de tentar e marca a foto como indisponível.
- **Miniaturas para vídeos gerados**, para você reconhecê-los rapidamente.

## Relatórios e filtros

**Erros rapidamente visíveis.** No relatório de geração, o filtro "Display only with errors" agora mostra apenas as gerações que falharam, com a mensagem de erro real em vez de "Unknown error occurred".

**Notificações após um repull.** Quando você faz o repull de produtos com uma ação em massa, agora recebe imediatamente uma notificação com o resultado.

## App e idiomas

- **Fozzels em italiano.** O app agora está disponível em italiano, e a Central de Ajuda em italiano e francês.
- **Adeus, antigo Chat Sandbox.** Desativamos o chatbot de 2023. A Jane, a sua assistente de IA, está sempre aqui para ajudar.
- **Pequenas melhorias na interface.** A primeira integração da sua conta agora vem selecionada por padrão nas listas suspensas, e a lista de provedores de IA não abre mais sozinha quando você abre um Flow.

## Atualizações de integrações

### Magento

**Textos para todas as store views.** Ative **Also save as the default value for all store views**, e cada push salva o texto na store view do Flow e, como valor padrão, em todas as outras store views. As store views com valor próprio para o atributo continuam mostrando esse valor.

É bom saber: se um Flow de outra store view usa esse atributo no prompt e cria automaticamente um novo texto quando um atributo muda, ele vai tratar o novo valor padrão como uma alteração e gerar novos textos para os produtos sem valor próprio.

Saiba mais em [4.1.2.c Como sincronizar o conteúdo gerado com todas as store views no Magento 2](/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/).

### Magento e NextChapter

**Substitua as fotos de produto existentes.** As novas imagens geradas agora podem substituir as fotos atuais do produto, e a substituição aparece corretamente na galeria de mídia do Fozzels depois da sincronização.

### Shopware

**Suporte a imagens AVIF.** Os produtos com fotos AVIF agora também podem ser usados na geração de textos: antes de enviá-las para a IA, convertemos essas fotos para um formato que o modelo suporta.

### CSV / Raw File

Os arquivos com caracteres ocultos no início, que faziam o nome da primeira coluna aparecer entre aspas, agora são lidos corretamente.
