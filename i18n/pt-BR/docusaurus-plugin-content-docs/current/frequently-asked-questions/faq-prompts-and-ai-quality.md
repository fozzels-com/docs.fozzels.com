---
title: 'FAQ: Prompts e Qualidade de IA'
sidebar_position: 6
unlisted: true
slug: /frequently-asked-questions/faq-prompts-and-ai-quality
description: Competição de prompt, enquadramento de imagem e marca, formatação consistente de recursos, saída multilíngue e lógica de fallback de idioma em prompts.
keywords:
- instrução
- comando
---

## Minha imagem de IA ignora instruções de enquadramento (corpo inteiro em vez de tórax).

Isso é causado por **prompt competition** — instruções conflitantes (por exemplo, "full-body" junto com "only torso"). Remova todos os disparadores conflitantes e use linguagem específica como "waist-up portrait pose".

## O logo e a marca estão desfocados em imagens geradas.

Fotos de corpo inteiro distribuem renderização pelo corpo inteiro. Mude para enquadramento de retrato/cintura para cima e adicione instruções específicas de marca no prompt.

## Você tem dicas de otimização de prompt para geração de imagem?

Evite instruções contraditórias, adicione exclusões explícitas, use linguagem específica de retrato e proteja detalhes de marca. Entre em contato com o suporte para uma revisão de prompt.

## Meus recursos de produto são formatados inconsistentemente (lista vs inline).

Adicione regras de formatação explícitas ao prompt: cada recurso em uma nova linha, nomes em negrito, sem símbolos de marcador. Use ênfase MAIÚSCULA para regras-chave.

## Como escrevo prompts para formatação consistente de recursos de produto?

Especifique a estrutura (descrição + seção de recursos), formate como uma lista vertical com rótulos em negrito, proíba marcadores e liste os recursos necessários.

## A IA gera informações incorretas de material/atributo de imagens.

Quando Fozzels não tem acesso a campos específicos, a IA adivinha de fotos — o que é pouco confiável para detalhes técnicos. Conecte ACF/atributos customizados para dados precisos.

## O time Fozzels pode revisar meus flows e prompts?

Sim, eles podem aconselhar sobre estrutura, especialização e otimização. Agende uma sessão online para orientação detalhada.

## Fozzels pode corresponder meu layout customizado de frontend (por exemplo, um accordion)?

Fozzels não pode garantir correspondência de layouts complexos. Experimente com prompts, mas ajuste manual pode ser necessário.

## Obtenho saída em idiomas mistos (por exemplo, inglês + holandês).

Escreva todas as instruções de prompt no idioma de saída desejado e não misture idiomas. Adicione uma nota forte: "IMPORTANTE: A saída deve ser inteiramente em [idioma]."

## Meu prompt gera idiomas mistos quando o copio de outro loja.

Não copie e adicione instruções de tradução. Escreva o prompt inteiro no idioma alvo do zero e crie prompts separados por idioma.

## Posso usar lógica de fallback de idioma em prompts (por exemplo, checo → alemão)?

Você pode tentar lógica condicional no prompt: "Se texto checo está disponível, use-o. Se não, use alemão." Os resultados dependem da capacidade de detecção de idioma da IA.
