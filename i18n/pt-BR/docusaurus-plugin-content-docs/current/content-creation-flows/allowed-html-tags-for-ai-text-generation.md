---
id: '103000380488'
title: 4.7.3 Tags HTML Permitidas para Geração de Texto de IA
sidebar_position: 20
slug: /content-creation-flows/allowed-html-tags-for-ai-text-generation
description: Este recurso permite que você defina com precisão quais tags HTML podem ser usadas e preservadas no conteúdo gerado por Inteligência Artificial. Esta funcionalid
---

Este recurso permite que você defina com precisão quais tags HTML podem ser usadas e preservadas no conteúdo gerado por Inteligência Artificial. Esta funcionalidade está ativa para atributos onde a opção **"Permitir HTML"** está ativada.

![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/2zl4WJfftt48X66FBs1W8zAn4rbNhhqk1A.png)

Ao definir essa lista, você desbloqueia possibilidades poderosas para gerar conteúdo com formatação específica ou incorporar multimídia diretamente no texto gerado.

## ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/KsO3jFsp7Ytx48uE5alhlIVzvjfJd8Trzw.png)
Como o Sistema Processa Tags

O sistema funciona como um filtro de segurança:

-   Remove automaticamente qualquer tag que **não esteja presente** na lista permitida.

-   Isso garante que apenas as tags necessárias e seguras sejam exibidas corretamente no seu frontend.

## Liberando o Potencial Criativo

Definir tags permitidas significa que você não está mais limitado a formatação básica de texto. Você pode instruir a IA para criar estruturas complexas adicionando elementos dinâmicos e visuais diretamente na sua descrição de produto:

-   **Conteúdo Interativo:** Incorpore vídeos do YouTube (usando a tag `iframe`) diretamente na descrição do produto.

-   **Visuais Ricos:** Integre galerias de imagens ou sliders usando a tag `img` envolvida na sua estrutura requerida (`div`, `section`).

-   **Estrutura Aprimorada:** Crie elementos interativos, como acordeões para seções de FAQ, usando tags `details` e `summary` (que estão na lista Padrão) ou tags de estrutura personalizadas.

-   **Qualquer Estrutura:** Você pode gerar praticamente qualquer estrutura HTML suportada pelo seu frontend simplesmente permitindo as tags necessárias.

### 1\. Tags HTML Padrão Disponíveis

Uma lista abrangente de tags HTML padrão está disponível por padrão e pode ser usada imediatamente:

-   `a`, `abbr`, `acronym`, `article`, `aside`, `b`, `blockquote`, `br`, `cite`, `code`, `dd`, `details`, `div`, `dl`, `dt`, `em`, `footer`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hr`, `i`, `li`, `mark`, `ol`, `p`, `q`, `s`, `section`, `span`, `strong`, `summary`, `table`, `td`, `tr`, `u`, `ul`.

### 2\. Adicione Suas Próprias Tags HTML (Adicione Suas Próprias Tags HTML)

Se você precisar de tags para incorporar vídeo, imagens ou qualquer outra formatação não padrão, você pode adicioná-las a essa lista.

**Como Adicionar Tags Personalizadas:**

1.  Digite o nome da tag que você deseja permitir (por exemplo, `iframe`, `img`, `video`) no campo.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/17FvSVXKcc6eW4AU0v9BhkCkRR-NUtg57w.png)

2.  Pressione Enter (se necessário, remova clicando no botão 'x').

3.  Clique no botão **Salvar**.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/kMmnyMamV-Ef9IEE1_naDJ0llLk7bnh5YA.png)

> **Bom saber!** Este bloco é usado para adicionar tags extras não padrão que são críticas para realizar sua visão criativa no frontend. Adicione apenas as tags necessárias para garantir a segurança do código.
