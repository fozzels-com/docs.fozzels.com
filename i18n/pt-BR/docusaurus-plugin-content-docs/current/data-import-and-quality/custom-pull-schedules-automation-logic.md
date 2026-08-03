---
id: '103000385568'
title: 3.1  Agendamentos Personalizados de Pull & Lógica de Automação
sidebar_position: 1
slug: /data-import-and-quality/custom-pull-schedules-automation-logic
description: Atualizamos a plataforma Fozzels para se alinhar com seu ritmo de negócios local. Você agora tem controle total sobre quando seu ciclo de atualização de conteúdo começa, permitindo
---

Atualizamos a plataforma Fozzels para se alinhar com seu ritmo de negócios local. Você agora tem controle total sobre quando seu ciclo de atualização de conteúdo começa, permitindo que você sincronize operações de IA com suas atualizações de estoque e capacidade de servidor.

## Agendamentos Personalizados de Pull

Você não está mais restrito a um único ciclo de sistema que anteriormente iniciava às **00:30 UTC** para todos. Agora, você define a hora de início para cada integração ou loja individual.

### 1\. Níveis de Configuração:

-   **Nível de Integração Global:** Defina um único agendamento para toda a integração (configurado na aba **Configuration**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/OIDrHQUvFDLOAW6VRq6bmDqVGmzw-Sx_WQ.png)

-   **Nível de Loja Individual:** Defina um agendamento único para uma loja específica (configurado na aba **Websites & Stores** via a opção **"Overwrite On Store Level"**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/rzTnb5R6tAHqj6TuLjncrbuJn2jhIhf-A.png)

![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/4TXxigKSz9G6RrXZnbgqjQ0N7TTKYwiwMQ.png)

##
Como Funciona: A Reação em Cadeia de Automação

É importante entender que o tempo do Pull agendado é o **gatilho** para uma cadeia inteira de processos. Uma vez que o **Pull** importa com sucesso seus dados, o sistema executa automaticamente as seguintes etapas:

### Jornada de Dados: Do Pull à Geração (Passo a Passo)

**Etapa**

**O que Acontece**

**Resultado**

**1\. Product Pull**

Fozzels se conecta ao seu site via API e baixa dados atualizados.

O sistema tem uma lista atualizada de produtos e características.

**2\. Flow Sync**

O sistema "filtra" o catálogo através de seus filtros de Flow ativos.

Novos produtos são adicionados à fila; irrelevantes são removidos.

**3\. Attribute Refresh**

Valores (preço, categoria, campos personalizados) são atualizados para cada produto no Fluxo.

A IA recebe o contexto mais fresco para geração.

**4\. AI Generation**

A fila de geração inicia com base em seus prompts específicos.

Textos, tags SEO e traduções são criados.

**5\. Data Export**

O conteúdo concluído é automaticamente enviado de volta para seu site.

Seus clientes veem a página de produto atualizada.

**Exemplo:** Se você definir seu tempo de pull para **17:00 (5 PM)**, a geração de IA iniciará imediatamente após a importação de dados e verificações de fluxo serem concluídas (por exemplo, por volta de **17:20** ou **17:45**), em vez de esperar até o meio da noite.

## Interface Localizada: Definindo seu Fuso Horário

Para tornar o agendamento intuitivo e eliminar cálculos mentais de UTC, você pode definir seu fuso horário local diretamente em seu perfil.

### Como configurar seu fuso horário:

1.  Navegue para **Settings** > **Profile**.

2.  Encontre o campo **Timezone** e selecione sua região no menu suspenso.

3.  **Crucial:** Clique no botão **SAVE** para aplicar as alterações.

### Por que isso importa:

-   **Sem Cálculos de UTC:** Se você agendar um pull para 17:00 em seu fuso horário, ele iniciará exatamente às 17:00 de acordo com seu relógio local.

-   **Logs Transparentes:** Todo log de atividade e status de geração serão exibidos em seu horário local, tornando o monitoramento sem esforço.

## Principais Benefícios

-   **Controle de Atualização:** A geração de IA acontece imediatamente após os dados do produto serem atualizados em seu site.

-   **Otimização de Servidor:** Escalone os tempos de pull para diferentes lojas para evitar que sua API seja sobrecarregada por requisições simultâneas.

-   **Previsibilidade:** Saiba exatamente quando seus novos produtos serão processados por IA e prontos para revisão.
