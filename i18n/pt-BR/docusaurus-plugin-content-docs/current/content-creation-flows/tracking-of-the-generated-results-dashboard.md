---
id: '103000369091'
title: 4.7.1 Rastreamento dos Resultados Gerados. Painel.
sidebar_position: 17
slug: /content-creation-flows/tracking-of-the-generated-results-dashboard
description: O Painel (ou lista de lotes total diária) funciona como seu centro de comando, fornecendo uma visão geral completa de todos os processos de geração e sincronização de conteúdo
---

O Painel (ou lista de lotes total diária) funciona como seu centro de comando, fornecendo uma visão geral completa de todos os processos de geração e sincronização de conteúdo. Esta interface permite que você rastreie proativamente o status, diagnostique erros e gerencie eficientemente todos os dados gerados.

1\. Visão Geral do Painel

A visualização principal é uma tabela de dados agrupada pela data de geração de conteúdo.

1.1 Métricas-Chave

A tabela principal exibe seis métricas-chave que ajudam a monitorar o status do conteúdo para um dia específico:

- **Data**: A data em que o conteúdo foi gerado.
- **Contagem de Produtos**: O número total de produtos programados para geração de conteúdo.
- **Contagem de Conclusão**: O número de unidades de conteúdo geradas com sucesso.
- **Contagem de Sincronizados**: O número de unidades de conteúdo sincronizadas com sucesso.
- **Contagem de Avisos**: O número de unidades de conteúdo com observações que podem exigir atenção do usuário.
- **Contagem de Falhas**: O número de unidades de conteúdo que falharam em gerar ou sincronizar devido a erros críticos.

Os usuários podem clicar na data ou na Contagem de Conclusão para acessar uma visualização detalhada de todos os completamentos para aquele dia específico.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/3eVmE5L69-qrrXE1wrp9l5KjD88-GmSH0A.png)

1.2. Visualização Detalhada e Configuração de Exibição

Clicar em uma data abre uma visualização detalhada da tabela contendo informações específicas sobre cada unidade de conteúdo.

1.2.1. Colunas Obrigatórias

A tabela detalhada inclui nove colunas obrigatórias: Fluxo, SKU, Confirmado, Miniatura, Prompt, Criado Em, Atributo Alvo, Executado Em e Sincronizado Em.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/yOUsE1jBYf6AFN1hwszHua430j9ysDetdQ.png)

1.2.2. Ferramentas de Configuração de Exibição

As ferramentas acima da tabela permitem que você customize sua visualização de dados para eficiência:

**Exibir apenas com erros.** Este botão filtra rapidamente a tabela para mostrar apenas registros onde problemas de geração ou sincronização ocorreram.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/j--J5uJGSoiU6L54C7ykpw09czX8hQ86Cg.png)

**Visibilidade de coluna.** Este menu suspenso permite que o usuário oculte ou mostre colunas específicas na tabela, focando em informações relevantes.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/a2xTbvhRdJxaIqyUO1tJK3-K0FSstAq5tg.png)

**Paginação.** A opção "Mostrar \[número\] entradas" permite a customização do número de linhas exibidas por página (5, 10, 25, 50, ou 100).
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/aPLUy45_b4zLJDCLFCuSfM-OCwWerXDo8g.png)

**Filtro de Intervalo de Data.** Permite a seleção de uma data específica ou intervalo de datas para visualizar resultados.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qpq1evm1oh-KTj5jr18RC3XOrCrg-vsDYg.png)

1.2.3. Filtros de Coluna

Cada coluna incorpora uma ferramenta de filtragem integrada para pesquisa rápida e classificação:

- **Fluxo**: Filtra produtos por um ou mais Fluxos selecionados (seleção de uma lista).
- **SKU**: Usado para pesquisar um produto específico por seu SKU (pesquisa de texto).
- **Miniatura**: Filtra produtos com base na presença de imagem ("Imagem Ausente" ou "Imagem Existe") (alternador/seleção).
- **Colunas de Data**: As colunas de data (Criado Em, Executado Em, Sincronizado Em) apresentam campos "De" e "Para" para selecionar um intervalo de datas.

1.3. Detalhe da Coluna e Interação

Esta seção descreve as interações de item único, que servem como uma alternativa às ações em massa para controle granular.

SKU: Exibe o SKU do produto, que é um link clicável para a página do produto dentro de Fozzels. Também inclui um ícone que leva para a página do produto na loja integrada.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/A_jL3Ul08ZPx8MakhmS7P3tNfAeYmtyhtw.png)

Confirmado: Indica o status quando o conteúdo foi aprovado e está pronto para sincronização.

Atributo Alvo: Clicar na célula abre a janela "Editar resultado do completamento", permitindo revisão e edição de conteúdo.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/m_jrPUwivZj3FjRSdeYeWZAvFYUuyCBAGw.png)

Prompt: Clicar abre uma pop-up para visualizar e copiar o texto completo do Prompt.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/pEEWkzMEzEfqU5WuU7sFLmT9fvZbxMV-5g.png)

Regenerando Conteúdo: O botão "Regenerar" dentro da janela "Editar resultado do completamento" é usado para iniciar a regeneração de conteúdo.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/c5ZO3vrJJlYMqytY7IAluozmh2QAXngM_Q.png)

1.4. Ações em Massa e Controle Operacional

O Painel fornece funcionalidade robusta para gerenciar eficientemente o conteúdo através de Ações em Massa, resolvendo o incômodo de confirmações individuais tediosas.

1.4.1. Executando Ações em Massa

Mecanismo de Seleção: Os usuários selecionam itens usando caixas de seleção ou a função Selecionar Tudo Nesta Página.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/cLqudNyTCBxzEB1wUw_lB446fY5cRD45Aw.png)

Ações Disponíveis: O menu Ações oferece as seguintes funções para processamento em lote:
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/HW2UYiSK33CeIRz6osXy6htBVLzkTpk0pA.png)

- **Confirmar tudo, Salvar e Sincronizar**: Aprova e inicia sincronização para o conteúdo selecionado.
- **Regenerar, Salvar e Sincronizar**: Inicia regeneração de conteúdo para os produtos selecionados e sua sincronização subsequente.

1.4.2. Funcionalidade "Mostrar Selecionados"

Espaço de Trabalho Direcionado: A função "Mostrar Selecionados" isola itens selecionados em uma tabela separada para um espaço de trabalho focado.

Retenção de Funcionalidade Completa: Neste modo, o usuário retém todas as funções da tabela padrão: filtragem, visualização de detalhes, e execução de Ações em Massa no subconjunto selecionado de dados.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/f7zwjwWHrNA6OT8wJVRrxQ46WMuqPx1J7A.png)

1.4.3. Salvaguardas de Operação

Um sistema de controle em múltiplos estágios é implementado para garantir a precisão e evitar despesas não intencionais:

Confirmação Obrigatória: Uma pop-up de aviso aparece antes de executar qualquer ação em massa que consoma muitos recursos ("**Confirmar e Sincronizar**", "**Regenerar e Sincronizar**").
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/0ubsrmale7wTjSetyZBAJCqZYw3CK5u0iQ.png)

![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/sPmeRKZIE_-ybW-dwpbBS3bSEm0XtG69xQ.png)

Controle de Lógica do Fluxo: Estas pop-ups incluem uma nota sobre o comportamento de sincronização esperado:

Conteúdo de Fluxos Totalmente Automatizados será auto-aprovado.
Conteúdo de Fluxos Padrão será apenas regenerado, exigindo aprovação manual subsequente.

Verificação de Recursos: O sistema verifica o status antes de iniciar qualquer operação: a geração não iniciará se o Fluxo estiver inativo, e a sincronização não será executada se a integração de destino estiver inativa.

1.5. Diagnósticos e Avisos (Solução de Problemas)

O Painel fornece mensagens claras e ferramentas para diagnóstico:

Detalhes de Erro (Dicas de Ferramenta): Em casos de falhas de sincronização ou geração, dicas de ferramenta estão disponíveis para fornecer a mensagem detalhada explicando a causa do erro.
"Conclusão parece suspeita": Um aviso indicando conteúdo não natural (respostas de bot, HTML ou Markdown). Este conteúdo não será sincronizado e requer intervenção do usuário.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/NSPyqq1WcPjA-YYLdrczhDUakvL55U2vIQ.png)
"Dupla codificação de entidades HTML detectada": Este aviso aparece quando o texto foi codificado mais de uma vez, o que pode fazer o texto parecer incorreto.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/UGH7_knyB9J6V0GXvznxuh1latc_mLlX-Q.png)
"Resultado de conclusão do produto vazio. Tente regenerar conteúdo." O resultado está vazio.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/4w2KbQmr8MEpBIgJ6373dwywTEYwFu6TYA.png)

"Produto foi deletado na integração": Indica que o produto não existe mais na loja integrada.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/nO0NOjYhJ94dqp7jQPD8tvUJ-jEil4tHcA.png)
"Regra está desativada": Indica que o conteúdo foi gerado por um Fluxo que não está mais ativo.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qAHiFoO27TOf4TPKQ9pBfsyriEs7rLXnVg.png)
