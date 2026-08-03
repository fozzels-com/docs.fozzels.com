---
id: '103000399446'
title: 'Release 6.1-6.2: Escalabilidade & Precisão Aprimorada de Dados'
sidebar_position: 10
slug: /fozzels-releases-updates/release-6-1-6-2-scalability-enhanced-data-precision
description: Esta atualização se concentra em otimizar o desempenho da plataforma para dados em larga escala e expandir recursos de coleta de dados, garantindo que você tenha todos os detalhes necessários
keywords:
- instrução
- comando
- extração
---

Esta atualização se concentra em otimizar o desempenho da plataforma para dados em larga escala e expandir recursos de coleta de dados, garantindo que você tenha todos os detalhes necessários para gerar conteúdo de produto de alta qualidade.

### Importações de Produtos Escaláveis (Product Pull)

Fozzels está se tornando ainda mais eficiente para projetos de e-commerce em larga escala. Melhoramos nossa arquitetura de importação para garantir atualizações de dados perfeitas, independentemente do tamanho do catálogo.

-   **O Que é Novo:** Introduzimos um **mecanismo de tempo adaptativo** para otimizar o processamento de grandes fluxos de dados.

-   **O Resultado:** Mesmo se seu catálogo contiver **centenas de milhares de itens**, a sincronização permanece estável, flexível e consistente sem interrupções de processo.

### WooCommerce: Campos Meta Personalizados & Sincronização Confiável

Damos aos usuários do WooCommerce a flexibilidade de escolher exatamente quais dados eles desejam trabalhar dentro do Fozzels.

-   **Campos Meta Seletivos:** Agora você pode sincronizar **campos meta personalizados** específicos necessários para sua geração de conteúdo. Simplesmente insira os códigos de campo ou prefixos de grupo durante a configuração, e o sistema puxará apenas as informações necessárias.

-   **Início Perfeito:** Melhoramos a lógica de identificação do produto. Mesmo se seu site WordPress usar IDs internos em vez de SKUs padrão, a conexão será bem-sucedida e seu catálogo será totalmente preenchido.

### Lightspeed: Varredura Profunda de Especificações

Ensinamos o sistema a capturar dados ocultos mais profundamente dentro da estrutura Lightspeed, garantindo que seu conteúdo gerado por IA seja o mais informativo possível.

-   **O Que é Novo:** Fozzels agora reconhece e extrai dados de **especificações de segundo nível aninhadas** que foram anteriormente ignoradas.

-   **O Benefício:** A IA ganha acesso a um conjunto completo de características do produto. Dados mais específicos levam a prompts mais nítidos e conteúdo de qualidade superior.

### Magento 2: Controle de Exibição de Mídia

Uma atualização fundamental para aqueles que usam ambientes de teste para preparar e verificar conteúdo antes de entrar em operação.

-   **Sobrescrever URL de Mídia Base:** Para lojas Magento 2, agora você pode mudar manualmente o caminho para sua fonte de imagem.

-   **O Resultado:** A solução perfeita para **Lojas de Teste**. Mesmo que as imagens do teste estejam armazenadas em endereços não padrão, elas sempre serão exibidas corretamente dentro do seu catálogo Fozzels.

### Melhorias & Correções de Bugs

-   **Lógica de Fluxo Melhorada:** Corrigido um erro de exibição para condições de filtro em fluxos duplicados. Anteriormente, se um fluxo incluía uma condição de data, outras opções podem não aparecer na UI. Isso foi resolvido para uma experiência de usuário mais consistente.

-   **Calendário & Datas:** Resolvidos conflitos de inicialização para campos `date` e `datetime` que anteriormente causavam erros de servidor.

-   **Aumento de Desempenho:** Otimizado o carregamento de páginas de catálogo para um fluxo de trabalho mais suave.

-   **Estabilidade da UI:** Melhorada a estabilidade da interface ao trabalhar com configurações de filtro complexas.

**_Fozzels melhora continuamente graças ao seu feedback. Obrigado por fazer parte de nossa jornada!_**
