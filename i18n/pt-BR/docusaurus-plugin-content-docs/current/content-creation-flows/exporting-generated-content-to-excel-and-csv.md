---
title: 4.7.6 Exportando conteúdo gerado para Excel e CSV
sidebar_position: 22.5
slug: /content-creation-flows/exporting-generated-content-to-excel-and-csv
description: >-
  Baixe o conteúdo gerado de uma Content Completion List como arquivo Excel ou
  CSV, escolha os produtos e as colunas e abra o arquivo corretamente.
---

## Visão geral

Você pode baixar o conteúdo gerado de uma Content Completion List como arquivo Excel (.xlsx) ou CSV. Você escolhe os produtos e as colunas, o Fozzels cria o arquivo em segundo plano, e ele aparece em **Export / Generated Data** por 24 horas.

A exportação é útil quando você precisa ler os textos completos (na tabela eles aparecem cortados), compartilhar o conteúdo com colegas ou com um cliente para revisão, ou importar os resultados em outro sistema, como um ERP, um PIM ou uma planilha.

![Content Completion List com Description, SEO Description e SEO Title gerados](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/01-content-completion-list.png)

## Como exportar

1. Abra a **Content Completion List** do flow (batch) de que você precisa.
2. Marque os produtos que você quer exportar. O número de itens selecionados aparece no menu, por exemplo **Actions (3)**.
3. Clique em **Actions → Export**.

    ![Menu Actions com a opção Export e três produtos selecionados](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/02-actions-export.png)

4. Na janela **Export Text Completions**, escolha o formato (CSV ou Excel) e, para CSV, o delimitador e a opção de linhas. Veja [Formato do arquivo](#formato-do-arquivo) abaixo.
5. Marque as colunas que devem ser incluídas. O conteúdo gerado e o SKU já vêm selecionados por padrão.
6. Clique em **Export as CSV** ou **Export as Excel**. O arquivo é criado em segundo plano.
7. No menu lateral, abra **Dashboard → Export / Generated Data**.

    ![Menu lateral com Export / Generated Data em Dashboard](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/03-sidebar-export-generated-data.png)

8. Quando o status mostrar **Available**, clique em **ZIP** na coluna Download.

    ![Lista Export / Generated Data com um arquivo ZIP disponível](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/04-export-list-zip.png)

9. Descompacte o arquivo: ele contém o arquivo .xlsx ou .csv.

Só são incluídas as completions que já têm conteúdo gerado. O arquivo compactado fica disponível por **24 horas**; depois disso, execute a exportação de novo. O nome do arquivo é formado pelo nome do batch e pelo número de registros, por exemplo `my batch - 3 Completions.csv`.

## Formato do arquivo

Escolha Excel quando uma pessoa for ler o arquivo, e CSV quando os dados forem para outro sistema.

| Formato | Quando usar | Detalhes |
| --- | --- | --- |
| Excel (.xlsx) | Revisar, editar, compartilhar com colegas | Abre diretamente, sem configurações. O SKU é armazenado como texto |
| CSV | Importar em um ERP, PIM ou outro sistema | Codificação UTF-8, valores de texto entre aspas, delimitador à sua escolha |

![Opções de CSV: delimitador e Keep each value on one line](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/05-csv-options.png)

**Delimitador (somente CSV).** A vírgula (,) é o padrão para a maioria dos sistemas de importação. O ponto e vírgula (;) é para arquivos abertos no Excel com configurações regionais europeias (Holanda, Alemanha, França e outras): nesses casos o Excel espera “;”, caso contrário tudo acaba em uma única coluna.

**Keep each value on one line (somente CSV).** Os textos podem conter quebras de linha, por exemplo entre parágrafos HTML ou no prompt. Sem essa opção, as quebras ficam dentro do valor (entre aspas), e um produto ocupa várias linhas físicas no arquivo. Com a opção, as quebras de linha são substituídas por espaços e cada produto ocupa exatamente uma linha.

- Ative a opção se o seu sistema de importação não suportar quebras de linha dentro dos valores (comum em sistemas ERP).
- Para HTML isso é seguro: espaços entre tags não mudam a forma como o conteúdo é exibido.
- Para texto simples com parágrafos, as quebras são substituídas por espaços e não podem ser restauradas.

## Colunas disponíveis

As colunas estão agrupadas em quatro blocos. A caixa de seleção ao lado do nome de um bloco ativa ou desativa todas as colunas dele de uma vez, e o contador (por exemplo “2 of 4”) mostra quantas estão selecionadas.

![Janela de exportação com todos os grupos de colunas expandidos](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/06-export-columns.png)

| Bloco | Coluna | Cabeçalho no arquivo | Contém |
| --- | --- | --- | --- |
| Generated content | Atributos gerados pelo flow | Código do atributo, por exemplo `descriptionHtml`, `seo.description`, `seo.title` | Os valores gerados, completos. Selecionado por padrão |
| Product details | SKU | `sku` | Identificador do produto. Selecionado por padrão |
| Product details | Name | `name` | Nome do produto |
| Product details | Origin ID | `origin_id` | ID do produto na plataforma conectada (por exemplo Shopify) |
| Product details | Entity type | `entity_type` | Tipo de entidade, por exemplo `product` |
| Flow details | Batch confirmed | `batch_confirmed` | Se o resultado está confirmado (`0` = não confirmado) |
| Flow details | Prompt | `prompt` | Texto completo do prompt, incluindo os dados do produto. Longo, com quebras de linha |
| Flow details | Created at | `created_at` | Quando o registro foi adicionado ao batch (UTC) |
| Flow details | Executed at | `executed_at` | Quando a geração mais recente foi executada (UTC) |
| Flow details | Synchronized at | `synchronized_at` | Quando o conteúdo foi sincronizado com a loja (UTC). Vazio se ainda não foi sincronizado |
| Catalog values | Atributos do catálogo | Código do atributo, por exemplo `markets` | Valores atuais do seu catálogo, não gerados |

O bloco **Catalog values** lista os atributos que têm **Show in batch list** ativado nas configurações do atributo. No arquivo, os detalhes do produto vêm primeiro, seguidos pelos detalhes do flow, pelo conteúdo gerado, pelas datas e pelos valores do catálogo.

## Lendo o arquivo

**Os cabeçalhos são códigos de atributo, não nomes.** Os nomes dos atributos podem variar por cliente e por idioma da loja, enquanto o código é único e nunca muda. Por isso, o mesmo arquivo pode ser importado sem mapeamento extra. A janela de exportação mostra cada código em cinza ao lado do nome (por exemplo Description · descriptionHtml).

**Datas e horários estão em UTC.** Os horários aparecem como `2026-10-19 10:36:39` em UTC, então podem ser diferentes da interface do Fozzels, que mostra o seu próprio fuso horário. Por exemplo, 12:36 no horário de verão da Europa Central aparece como 10:36 no arquivo.

**O HTML é mantido como está.** Se **Allow HTML** estiver ativado para um atributo (como em Description), o arquivo contém marcação com tags como `<p>`, `<ul>` e `<li>`. Isso é necessário para uma importação correta. Para campos meta (SEO Title, SEO Description), Allow HTML deve ficar desativado; caso contrário, as tags acabam tanto no arquivo quanto na sua loja.

![Configurações do atributo com as opções Allow HTML e Show in batch list](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/07-attribute-settings.png)

**Células vazias são normais.** Um valor vazio significa que não há dados: o atributo não está preenchido no catálogo, ou o conteúdo ainda não foi sincronizado (`synchronized_at` vazio).

**Batch confirmed** é retornado como número: `0` significa que o resultado não está confirmado.

## Abrindo um arquivo CSV

A forma mais segura de abrir um CSV é por meio de uma importação com codificação UTF-8 e o delimitador definido explicitamente. Assim, caracteres especiais (’, é, ä, cirílico) e colunas são exibidos corretamente.

O **LibreOffice Calc** mostra a janela Importar texto automaticamente quando você abre qualquer CSV:

1. Conjunto de caracteres: **Unicode (UTF-8)**.
2. Opções de separadores: deixe marcado **apenas** o delimitador que você escolheu na exportação (Vírgula ou Ponto e vírgula). O LibreOffice lembra as caixas de arquivos anteriores, então Tabulação ou Espaço também podem estar marcados.
3. Delimitador de texto: **"** (aspas duplas).
4. Para manter SKU e IDs como texto, selecione essas colunas na pré-visualização e defina Tipo de coluna → **Texto**.
5. Clique em **OK**.

![Janela Importar texto do LibreOffice Calc para um CSV exportado](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/08-libreoffice-text-import.png)

O **Microsoft Excel** abre um CSV com as suas configurações locais quando você clica duas vezes nele, então caracteres especiais podem ser exibidos incorretamente (por exemplo `itâ€™s` em vez de `it’s`). Para evitar isso:

1. Em uma pasta de trabalho vazia, vá em **Dados → De Texto/CSV** e selecione o arquivo.
2. Origem do Arquivo: **65001: Unicode (UTF-8)**.
3. Delimitador: o mesmo que você escolheu na exportação.
4. Clique em **Carregar**.

Se você só precisa ler o arquivo, é mais fácil exportar direto no formato Excel. Não salve de novo um CSV no Excel antes de importá-lo em outro sistema: o Excel pode alterar o delimitador ou a codificação, ou transformar números longos no formato 7.81227E+12.

## Perguntas frequentes

**Cliquei em Export, mas nenhum arquivo foi baixado.** O arquivo é criado em segundo plano e não é baixado automaticamente. Procure-o em **Dashboard → Export / Generated Data**.

**O arquivo tem menos produtos do que eu selecionei.** Só são exportados registros com conteúdo gerado. Verifique também se você selecionou produtos em todas as páginas da lista, e não só na página atual.

**Tudo no meu CSV está em uma única coluna.** O delimitador do arquivo não corresponde ao que o seu programa espera. Exporte de novo com o outro delimitador (“;” para o Excel europeu) ou abra o arquivo por meio de uma importação, como descrito acima.

**Vejo caracteres estranhos como `â€™`.** O arquivo não foi aberto como UTF-8. Abra-o por meio de uma importação com codificação UTF-8 ou exporte no formato Excel.

**O SKU aparece como 7.81227E+12.** O programa de planilhas transformou um número longo em notação científica. Ao importar o CSV, defina essa coluna como Texto. O formato Excel não tem esse problema.

**Os horários no arquivo não correspondem à tabela.** O arquivo usa UTC, enquanto a interface usa o seu fuso horário.

**Os campos de SEO contêm tags `<p>`.** Allow HTML está ativado para esse atributo. Desative-o nas configurações do atributo e gere o conteúdo de novo.

**O link de download expirou.** Os arquivos compactados ficam guardados por 24 horas. Execute a exportação de novo.
