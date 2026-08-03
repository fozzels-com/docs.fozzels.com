---
id: '103000408982'
title: 3.1.2 Como Configurar Agendamento de Pull Global e API Throttling
sidebar_position: 3
slug: /data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling
description: Ao gerenciar grandes integrações de catálogo, controlar quando e com que velocidade Fozzels importa dados de produtos da sua plataforma de e-commerce é chave para manter
keywords:
- extração
---

Ao gerenciar grandes integrações de catálogo, controlar **quando** e **com que velocidade** Fozzels importa dados de produtos da sua plataforma de e-commerce é chave para manter o desempenho da loja.

Com as configurações de **Agendamento de Pull Global** e **Pull Throttling**, você pode agendar horários de sincronização para evitar o pico de tráfego da loja e ajustar pausas de API para evitar erros de limite de taxa.

##
Onde Encontrar Essas Configurações

1.  Faça login em **Fozzels**.

2.  Vá para **Configuration** da sua integração ativa.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/THubHvyaWacy8WwlR5pMdGsfkPW-WZmcPw.png)

3.  Role para baixo até a seção **Global Pull Schedule**.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/P9fCQ7RwxIcI7AqCgCPyUCa_PbCy3PI4Ww.png)

## 1\. Agendamento de Pull Global

O Agendamento de Pull Global permite que você defina um único horário mestre para Fozzels iniciar automaticamente o pull de atualizações de catálogo em toda sua integração.

### Como Funciona:

-   **Agendamento Padrão:** Cada loja ativa dentro da sua integração usa este horário agendado por padrão.

-   **Substituições no Nível da Loja:** Se você operar vários storefronts (por exemplo, em diferentes fusos horários) e deseja que uma loja específica faça pull de dados em um horário diferente, você pode ativar o toggle **Overwrite Global Pull Schedule** nas configurações individuais dessa loja específica.

> ? **Melhor Prática:** Defina seu agendamento de pull durante horas de pico (por exemplo, tarde da noite ou início da manhã) quando o tráfego do website é mais baixo para minimizar qualquer carga potencial no backend da sua loja.

##
![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/fyrAZkK-2BnIOTIwMM32cLL1domLcyE4rg.png)
2\. Pull Throttling (Atrasos Entre Requisições)

Limites de Taxa de API são restrições impostas por plataformas como Shopify, Magento, VTEX ou outras para evitar que servidores sejam sobrecarregados por muitas requisições ao mesmo tempo.

Se Fozzels solicitar dados de produtos muito rapidamente, o servidor da sua loja pode retornar um erro `429 Too Many Requests`. **Pull Throttling** resolve isso adicionando pausas controladas entre operações de sincronização.

### Parâmetros Configuráveis:

-   **Atraso entre páginas (`100–15.000 ms`):**

-   **O que faz:** Adiciona uma pausa (em milissegundos) depois que Fozzels termina de buscar cada lote/página de produtos antes de pedir a próxima página.

    -   **Padrão / Recomendação:** `2000 ms` (2 segundos). Deixar isso em branco usa a velocidade padrão da sua plataforma.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qGkARWiCzUokf8PHJJpaRRRuivORM_DQIw.png)

-   **Atraso entre requisições (`100–15.000 ms`):**

-   **O que faz:** Adiciona uma pausa entre chamadas individuais de API feitas ao processar itens em uma página.

    -   **Padrão / Recomendação:** `200 ms`.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/mfKk2L61sB_fdhQoGQ9o3zxmuUyFh5m0fQ.png)

    -   Não esqueça de salvar suas alterações - clique no botão **SAVE**.
**![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qdZ3Boaa9oUyxzPTfvoV8zbP2N_diVhAkw.png)**

> ⚠️ **Cuidado:** Definir atrasos **abaixo** dos padrões recomendados da sua plataforma de e-commerce pode desencadear erros de limite de taxa do seu servidor de loja, o que pode causar falhas no pull do catálogo prematuramente. Se você experimentar falhas de pull ou avisos de limite de taxa, aumente gradualmente esses valores de atraso para dar ao servidor de sua loja mais tempo entre requisições.
