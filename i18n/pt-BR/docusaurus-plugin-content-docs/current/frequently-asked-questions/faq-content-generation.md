---
title: 'FAQ: Geração de Conteúdo'
sidebar_position: 5
unlisted: true
slug: /frequently-asked-questions/faq-content-generation
description: >-
  As questões mais comuns sobre geração de texto de IA — textos ausentes, limites
  de lote, regeneração após mudanças de prompt, erros de geração, conteúdo
  suspeito, escolha de modelo, tempo de sincronização e controle de custo.
---

## Produtos estão no meu flow mas textos não foram gerados.

A geração pode estar aguardando a próxima execução agendada. Você pode acioná-la manualmente ou entrar em contato com o suporte para iniciá-la por você.

## Como confirmo conteúdo gerado antes de ser enviado para meu website?

Se seu flow for semi-automático, confirme conclusões individualmente ou use a ação em massa na lista de lote para aprovar múltiplos itens.

## Novos produtos estão online há dias mas não têm textos gerados.

A geração agendada pode ter sido atrasada. Entre em contato com o suporte — eles podem puxar produtos manualmente novamente e iniciar a geração.

## Você pode corrigir textos ausentes para múltiplas marcas de uma vez?

Sim. Entre em contato com o suporte e especifique quais marcas/flows são afetados. Eles podem acionar a geração para todos de uma vez.

## Meu flow mostra 100% mas mudei o prompt. Por que não há novos textos?

Mudar apenas o prompt não aciona regeneração de textos existentes. Use Mass Action → "Regenerate content" ou duplique o flow.

## Como regenero todos os textos de produtos após atualizar meu prompt?

Vá para conclusões, selecione tudo via Mass Action e escolha "Regenerate content". Alternativamente, desative o flow, duplique-o e ative a nova versão.

## O período de cooldown não está acionando regeneração.

Cooldown controla o tempo mínimo entre auto-regenerações, mas não força regeneração de textos completos. Use Mass Action para regenerar.

## O que causa erros de geração / conclusões com falha?

Geralmente carga alta de processamento do modelo de IA. Prompts grandes + saída longa + múltiplas imagens podem sobrecarregar o modelo. Jobs com falha tentam novamente automaticamente. Tente prompts mais curtos ou um modelo diferente.

## Como posso ver quais produtos falharam na geração de conteúdo?

Verifique o Completion Report em [app.fozzels.com/completions/product/completion/report/](https://app.fozzels.com/completions/product/completion/report/) e filtre por data com a opção `failed_only`.

## Meu lote parece travado — nenhum texto gerado.

Isso pode ser causado por limites de tokens temporários do provedor de IA. O sistema retorna ao normal automaticamente. Entre em contato com o suporte se persistir.

## A geração de conteúdo está demorando muito mais que o usual.

Atrasos temporários do limite de uso de tokens. Isso geralmente se resolve automaticamente. Entre em contato com o suporte se a geração permanecer travada.

## Vejo "Unknown error" em todos os jobs.

Isso acontece durante carga alta do sistema. O sistema tenta novamente automaticamente. Se 80% ou mais falharem, entre em contato com o suporte — eles podem monitorar flows e acioná-los manualmente.

## Minha lista de lotes mostra 500 produtos mas meu flow tem 3.380 elegíveis.

Fozzels limita lotes a 500 produtos por **Plan & Close**. Clique em "Plan & Close" múltiplas vezes para enfileirar lotes adicionais.

## "Run Now" adiciona apenas 10 produtos.

"Run Now" é para teste rápido (10 produtos). Use "Plan & Close" para lotes maiores (até 500).

## Qual é a diferença entre "Plan & Close" e "Run Now"?

"Run Now" processa até 10 produtos instantaneamente para teste. "Plan & Close" enfileira um lote de até 500 produtos. Use Plan & Close para produção.

## Quais são os limites de geração diária por plano?

Planos menores: 10–30 produtos/dia. Planos maiores (€299+): significativamente mais. Unlimited: 500 por flow por dia. Entre em contato com o suporte para aumentos temporários.

## Posso solicitar um aumento temporário de limite para um preenchimento inicial?

Sim. Para volumes únicos grandes, o time pode aumentar temporariamente os limites. Entre em contato com o suporte com seu volume esperado e cronograma.

## Como visualizo resultados de prompt antes de sincronizar?

Abra o flow → adicione seu prompt → clique em **Save and Preview** → clique em **Generate Now**. A visualização não é salva ou sincronizada.

## Por que a visualização exige saldo?

O recurso de visualização consome tokens, portanto um saldo é necessário. Entre em contato com o suporte para um pequeno crédito de teste se necessário.

## Obtenho erros "Empty Result" com o modelo GPT-5.

GPT-5 exige mais capacidade de tokens. Aumente Max Tokens de 2.000 para pelo menos 5.000.

## Qual configuração de Max Tokens é recomendada?

Para GPT-5: pelo menos 5.000. Garanta que prompt tokens + max_tokens não excedam o comprimento de contexto do modelo.

## O que são avisos de conteúdo suspeito?

Fozzels valida a saída contra uma lista de palavras indesejadas. Conteúdo sinalizado não é sincronizado automaticamente. Você pode customizar a lista ou adicionar restrições de prompt.

## Como reduzo avisos de conteúdo suspeito?

Adicione restrições em seu prompt, customize a lista de palavras suspeitas ou use **Regenerate**. Entre em contato com o suporte para forçar sincronização se o conteúdo estiver correto.

## Posso forçar sincronização de conteúdo suspeito?

Entre em contato com o suporte — especifique todos os flows ou específicos. Eles podem sincronizar conteúdo sinalizado em seu nome.

## Meus títulos de página são muito longos / atingem limites de caracteres.

Ajuste seu prompt para especificar contagens de caracteres máximas. Entre em contato com o suporte para corrigir títulos existentes que são muito longos.

## A string "Plain text" está aparecendo em meu conteúdo gerado.

Esse é um problema raro de prompt. O suporte pode revisar e limpar produtos afetados. Reporte com exemplos específicos.

## Um produto não está indo online devido ao conteúdo Fozzels.

Problemas de conteúdo (títulos longos, strings inesperadas) podem bloquear publicação. Entre em contato com o suporte com os detalhes do produto.

## Meus flows de conteúdo automático pararam de funcionar.

Isso pode ser causado por problemas de Fozzels ou limitações do provedor de IA. Entre em contato com o suporte para investigar e reiniciar.

## Meu flow mostra 100% verde imediatamente após ativação — isso está correto?

Esse é um problema conhecido de UI. A tela inicial pode mostrar 100% antes da conclusão. Verifique os detalhes do flow para o status real.

## O botão "Generate Now" não está respondendo.

A fila de geração pode estar sobrecarregada durante horários de pico. Aguarde e tente novamente ou mude para um modelo de IA mais rápido.

## Posso mudar modelos de IA para geração mais rápida?

Sim, mude o modelo nas configurações do flow. Modelos mais leves são mais rápidos. Modelos diferentes podem produzir qualidade diferente.

## Qual modelo de IA devo usar para o melhor equilíbrio custo/qualidade?

Múltiplos modelos estão disponíveis (ChatGPT, Gemini, Claude). Modelos mais poderosos dão qualidade mais alta mas custam mais. Entre em contato com o time para recomendações.

## Recebo erros Gemini durante gerações de lote grande.

Gemini aplica limites de taxa para volumes grandes, causando erros temporários. Jobs permanecem na fila e auto-completam uma vez que os limites se restaurem.

## Conteúdo suspeito em francês está sendo sinalizado incorretamente.

A lista de filtro pode incluir palavras comuns em outras línguas. Entre em contato com o suporte para ajustar a lista para seu idioma.

## Existe limite de sincronização? Por que a sincronização é lenta?

Sincronizar volumes grandes leva tempo. Não há limites rígidos, mas funciona gradualmente. Entre em contato com o suporte se parecer travado.

## Os resultados são de qualidade baixa por dados de produto insuficientes.

A qualidade depende dos dados disponíveis. Enriqueça dados de produto em seu PIM/loja antes de regenerar. Edição manual pode ser necessária para produtos pobres em dados.

## Como configuro um flow totalmente automático (auto-confirmar e sincronizar)?

Selecione o tipo de flow "Fully-automatic". Resultados são auto-confirmados e sincronizados com a próxima execução de cron (~4 horas). Validação interna impede conteúdo ruim de sincronizar.

## Com que frequência o cron de sincronização funciona?

Sincronização automática funciona via cron a cada ~4 horas. Planeje geração com antecedência para lançamentos urgentes. Entre em contato com o suporte para intervalos mais rápidos.

## A geração parou prematuramente — isso pode ser um problema de memória?

Memória insuficiente do servidor pode parar gerações grandes. Entre em contato com o suporte — eles podem aumentar a memória alocada.

## Como ressincronizzo todo conteúdo de uma vez usando ação em massa?

Ative o toggle "Show all content" e acione **Resync** via ação em massa para sincronizar tudo de uma vez.

## Código HTML está aparecendo na minha visão geral de lote.

Alterne o botão **Show HTML** para alternar entre visualizações formatadas e brutas. Esse é um problema conhecido de UI sendo melhorado.

## Meus flows estão travados após fundos insuficientes e uma recarga de saldo.

Flows podem não auto-retomar após uma recarga. Entre em contato com o suporte para reiniciar jobs enfileirados.

## O que acontece quando a categoria de um produto muda?

Se auto-regeneração está habilitada, o texto será regenerado quando a categoria mudar.

## Como corrijo erros factuais em texto gerado por IA?

Se os dados vêm de um atributo de loja, corrija lá e o conteúdo será auto-regenerado. Se foi gerado por IA (por exemplo, de imagens), edite manualmente na lista de lote.

## Por que textos diferentes são gerados para o mesmo produto em cores diferentes?

Esse é um comportamento esperado. IA gera descrições únicas por parâmetros de produto — cores diferentes produzem descrições diferentes.

## A visualização não mostra mais atributos de produtos/colunas.

Isso mudou no release 5.10. Você pode alternar colunas ligadas e desligadas na tabela de visualização. Colunas ausentes podem ser um bug conhecido.

## Como gerencio múltiplos prompts similares entre categorias/marcas?

Atualmente cada flow tem seu próprio prompt. Prompts dinâmicos/compartilhados estão no roadmap. Use **Duplicate** para acelerar a criação de flows similares.

## Obtenho erro de sincronização porque um atributo obrigatório está vazio em Magento.

Fozzels não pode enviar conteúdo se campos obrigatórios de Magento estão vazios. Verifique a mensagem de erro e preencha o atributo ausente.

## Recebi cobranças inesperadas de geração de vídeo travada.

Entre em contato com o suporte imediatamente. Eles podem creditar cobranças incorretas e corrigir o problema. Exclua flows travados para parar cobranças futuras.

## Atributos desapareceram dos meus flows/prompts.

Isso pode acontecer ao copiar prompts entre campos. Salve prompts como templates. Entre em contato com o suporte se atributos desaparecerem sem mudanças.
