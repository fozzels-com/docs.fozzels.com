---
id: '103000371114'
title: '3.5. Detecção de Recursão: Prevenindo Geração Infinita de Conteúdo'
sidebar_position: 8
slug: >-
  /data-import-and-quality/recursion-detection-preventing-infinite-content-generation
description: >-
  O aviso "Recursão detectada" sinaliza um possível conflito na configuração do
  seu Fluxo, onde a saída do processo de geração também serve como entrada para o
  mesmo processo.
---

O aviso "Recursão detectada" sinaliza um possível conflito na configuração do seu Fluxo, onde a saída do processo de geração também serve como entrada para o mesmo processo. Isso significa que o seu Fluxo está configurado para ler dados do mesmo atributo no qual está simultaneamente configurado para escrever o conteúdo gerado.

O exemplo mais comum é um Fluxo projetado para atualizar o campo {Descrição} (o Atributo de Destino), mas o prompt em si usa a variável {Descrição} como fonte de informação.

### Implicação Técnica: O Loop de Conteúdo

Quando essa configuração é usada em conjunto com a configuração "Regenerar automaticamente quando atributo do produto for alterado", um loop perpétuo de geração de conteúdo pode ocorrer, levando ao consumo desnecessário de tokens e ciclos de execução.

1.  Execução Dia 1: O Fozzels gera com sucesso novo conteúdo e o escreve no campo Descrição.

2.  Detecção de Alteração: Como o valor do campo Descrição foi alterado, o sistema de e-commerce integrado marca o produto como "atualizado".

3.  Próxima Execução: Na próxima execução agendada (por exemplo, no dia seguinte), a configuração de automação detecta que o produto foi "atualizado" e tenta regenerar o conteúdo novamente.

4.  O Loop: Essa regeneração cria uma nova alteração, disparando o processo indefinidamente.

### Recomendações para Gerenciamento

Embora usar o Atributo de Destino como entrada às vezes seja intencional (por exemplo, acrescentar informações ao texto existente), é essencial gerenciar as configurações de automação para evitar esse loop infinito.

- **Ação 1**: Desabilitar Regeneração Automática A maneira mais eficaz de quebrar o loop é desativar a opção "Regenerar automaticamente quando atributo do produto for alterado". Isso garante que, embora o Fluxo cause uma alteração no atributo de destino, a automação não agende automaticamente uma reexecução com base nessa alteração específica.
- **Ação 2**: Remover a Entrada Recursiva Se o conteúdo existente não for estritamente necessário para a lógica do prompt, remova a variável recursiva (por exemplo, remova {Descrição}) do seu prompt. Em vez disso, confie apenas em atributos estáticos do produto (como Marca, Material, Cor) para garantir que a geração de conteúdo seja baseada em dados imutáveis, evitando assim o disparo de atualizações contínuas.

