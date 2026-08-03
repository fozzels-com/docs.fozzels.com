---
title: 'FAQ: Integrações e Sincronização'
sidebar_position: 9
unlisted: true
slug: /frequently-asked-questions/faq-integrations-and-synchronization
description: Pulls parciais de produtos, problemas de conexão Shopware e Shopify, variantes e Packs, HTML em atributos, plugins WooCommerce, limites de taxa, pulls de imagem e problemas de URL de multi-loja.
keywords:
- lista
- de
- lotes
- instrução
- comando
- extração
---

## O pull automático de produtos recupera apenas parte do meu catálogo. Como obtenho todos os produtos?

Se seu catálogo excede limites padrão de API, o pull pode não recuperar todos os produtos. Solicite um aumento de limite de API do seu provedor PIM. Como solução temporária, o time Fozzels pode completar manualmente o pull.

## Limites de API foram aumentados mas o pull de produto ainda não funciona.

O provedor PIM pode precisar reiniciar seus serviços. Entre em contato com eles para confirmar que as mudanças estão ativas. O suporte Fozzels pode executar um pull manual enquanto o problema está sendo resolvido.

## Fozzels não pode estabelecer uma conexão API REST com minha loja Shopware.

Verifique novamente o Access Key ID e Secure Access Key. Se estiverem corretos, o problema é provavelmente permissões de acesso. No admin Shopware vá para Settings → System → Integrations, abra a integração Fozzels, ative o toggle **Administrator** e salve.

## Fozzels exige acesso Administrator em Shopware mas estou preocupado com privacidade.

O papel Administrator é atualmente necessário para Fozzels ler dados de produtos. Se conceder acesso total de admin é uma preocupação, entre em contato com o time Fozzels para discutir se uma configuração mais restrita é possível.

## Minhas chaves de API são inválidas. O que devo verificar?

Garanta que você está enviando o tipo correto de chave (chave Integration começando com `SWIA...`, não uma chave Sales Channel). Verifique que a chave secreta não foi truncada durante copy/paste. Tente criar uma nova Integration e enviar chaves frescas.

## Conteúdo é gerado em Fozzels mas não aparece em minha loja Shopware.

Isso pode acontecer quando a sincronização falha para produtos específicos por causa de atributos ausentes, problemas de permissão ou configuração de variante. Entre em contato com o suporte com exemplos de produtos específicos.

## Como Fozzels lida com produtos com muitas variantes (tamanhos, cores)?

Fozzels tem um recurso **Packs** que agrupa variantes — todos os tamanhos da mesma cor são tratados como um produto. Adicione o filtro "Pack Parent ID is not empty" em seu flow para usar este recurso.

## Tags HTML (por exemplo `<p>`) aparecem em campos Shopify. Como corrijo isso?

Desabilite suporte a HTML para o atributo: Aba Attributes → Edit (ícone lápis) → Technical Flags → desabilite **Allow HTML** → Save. Depois regenere e verifique.

## Fozzels pode escrever texto simples (sem HTML) para meu PIM?

Sim. Vá para a aba Attributes → Edit Attribute → desmarque **Allow HTML** → Save.

## Obtenho um erro "Website is not active" ao clicar em Save and Preview.

Isso pode ocorrer devido a problemas temporários de conexão após uma atualização de API. Entre em contato com o suporte — eles podem verificar e reativar a conexão do website.

## Mudei a URL de domínio da minha loja. Preciso atualizar Fozzels?

Sim. Se você muda seu domínio, a configuração Fozzels pode precisar ser atualizada. Entre em contato com o suporte para atualizar o domínio.

## Múltiplas lojas mostram o mesmo domínio em Fozzels. Isso está correto?

Isso pode acontecer quando Fozzels recebe apenas um domínio em vez de separados por loja. A sincronização é manipulada corretamente por loja por baixo. Melhorias de UI estão planejadas.

## Quais plugins são necessários para uma integração WooCommerce?

Garanta que: a REST API está habilitada, o último plugin Fozzels AIOSEO está instalado e o plugin ACF to REST API (v3.3.4) está instalado e ativo.

## Como configuro a integração AIOSEO com Fozzels (WooCommerce)?

Instale o plugin de sincronização Fozzels AIOSEO no WordPress. "Focus Keyphrase" em Fozzels mapeia para Focus Keyword em WooCommerce; "SEO Keywords" mapeia para Additional Keywords.

## Como configuro a integração Yoast SEO com Fozzels?

Instale o plugin de sincronização Fozzels Yoast. Garanta que Yoast está totalmente configurado e ativado no WordPress.

## Como Fozzels lida com conteúdo multilíngue com WPML?

Fozzels fornece acesso a lojas para diferentes idiomas. Crie flows separados por loja de idioma. Fozzels não traduz conteúdo em si, mas você pode definir prompts para gerar no idioma desejado.

## Como uso campos de produtos customizados (ACF) nos prompts Fozzels?

Fozzels suporta ACF para WooCommerce. Habilite suporte a ACF e campos customizados aparecerão como atributos em Fozzels.

## Novos campos ACF que adicionei no WordPress não aparecem em Fozzels.

Novos campos ACF exigem um pull de atributo bem-sucedido para aparecer. Garanta que o plugin ACF to REST API está ativo e a conexão de API está funcionando.

## O pull de dados de produto parou de funcionar / Obtenho falhas de importação.

Isso pode ser causado por um rate limiter ou firewall bloqueando requisições de API do Fozzels. Entre em contato com o suporte — eles podem adicionar as exceções necessárias à whitelist do seu servidor.

## URLs de storefront levam a erros 404.

Isso pode acontecer com estruturas de produtos pai/filho. Entre em contato com o suporte com exemplos — eles podem corrigir o mapeamento de URL.

## Textos Shopware são enviados para variantes de tamanho em vez de variantes de cor.

Após a atualização de Pack Parent ID, o nível de sincronização pode ter mudado. Entre em contato com o suporte para ajustar o alvo de sincronização de volta ao nível de variante de cor/pai.

## Minha loja mostra como "lost in integration" / Obtenho um erro de loja inativa.

A URL de loja original não está mais ativa. Duplique os flows afetados e selecione a loja ativa correta durante a duplicação. Flows antigos podem ser arquivados.

## Minha URL de storefront aponta para o domínio errado (múltiplos storefronts).

Fozzels resolve URLs por idioma, não por sales channel e escolhe o primeiro domínio disponível. Essa é uma limitação conhecida sendo melhorada.

## Como Fozzels lida com múltiplos sales channels Shopware?

Conteúdo é gerado uma vez por produto por idioma, não por sales channel. Sales channels podem ser usados como filtros de catálogo. Isso reduz custos de tokens.

## Não há imagens no meu feed de produtos / catálogo.

Imagens ausentes são frequentemente causadas por restrições de IP no seu servidor. Entre em contato com o suporte — eles podem adicionar endereços IP Fozzels à sua whitelist.

## Imagens de produtos não estão sendo exibidas no catálogo Fozzels.

Isso pode ser um problema de integração com o pull de imagem. Entre em contato com o suporte — eles investigarão e corrigirão de seu lado Fozzels.

## Obtenho um erro de sincronização: não é possível escrever em atributos dropdown.

Fozzels pode apenas escrever texto em atributos baseados em texto, não campos dropdown/select. Verifique o tipo de atributo em seu webshop.

## Como renomeio atributos em Fozzels?

Vá para configurações de atributo, mude o nome no campo de entrada e salve. Essa é uma mudança de exibição apenas dentro de Fozzels.

## Nomes de atributos não auto-atualizam em prompts após uma mudança de PIM.

Quando você renomeia atributos em seu PIM, Fozzels pode tratá-los como novos. Renomeie manualmente o atributo dentro de Fozzels para corrigir isso.

## Conteúdo foi sincronizado para os produtos errados após mudanças de website.

Fozzels puxa catálogos noturnamente. Se você faz mudanças grandes, sempre acione um pull manual de produtos para garantir dados corretos.

## Obtenho um erro 429 Too Many Requests ao sincronizar para meu PIM.

O rate limiter do seu PIM está bloqueando requisições. Entre em contato com seu provedor PIM e suporte Fozzels para colocar na whitelist IP de Fozzels ou corrigir o formato de requisição.

## Quais campos Fozzels pode atualizar em Katana PIM?

O endpoint padrão suporta: name, short description, full description, meta title e meta description. Outros campos podem exigir endpoints de API separados.

## Como habilito a integração LangShop com Shopify?

Compartilhe screenshots de suas configurações LangShop em Shopify para que o time Fozzels possa verificar sua configuração e determinar se configuração adicional é necessária.

## Como re-sincronizo um lote inteiro de uma vez?

Abra o flow → Batch List → ative "Show all content" → selecione todas as linhas → Actions → **Re-sync content**. Isso funciona através da fila geral.

## Posso atualizar a integração Shopify sem perda de dados?

Entre em contato com o suporte antes de atualizar — eles podem investigar a causa raiz. Atualizar geralmente não causa perda de dados, mas o time deve verificar primeiro.

## Shopify Markets não está aparecendo em Fozzels.

Isso geralmente é causado por restrições de API em Shopify — as configurações de API precisam ser ajustadas. Entre em contato com o suporte ou seu parceiro de agência.

## Obtenho erros de geração devido a imagens grandes (limite de 5MB).

Modelos de IA têm um limite de imagem de ~5MB por requisição. Fozzels auto-converte PNGs para JPGs. Considere usar formato JPG para imagens de produtos.

## Minha estrutura de categoria multilíngue está errada (por exemplo, Checo vs Alemão).

Fozzels pode mostrar a estrutura de categoria do idioma padrão. Entre em contato com o suporte para ajustes de mapeamento de categorias multilíngues.

## Com que frequência Fozzels sincroniza dados do meu PIM?

Pulls automáticos de produtos funcionam noturnamente após meia-noite. Para atualizações imediatas, acione um pull manual.
