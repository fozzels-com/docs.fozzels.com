---
title: '2.11.2. Pimcore: expondo atributos via DataHub (indicador de publicação e galeria de imagens)'
sidebar_position: 24
slug: >-
  /integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery
description: >-
  O Fozzels descobre os atributos de produtos e categorias do Pimcore a partir
  do seu endpoint GraphQL do DataHub. Este guia explica como expor o indicador
  de publicação (published) e a sua galeria de imagens para que o Fozzels possa
  lê-los e gravá-los.
---

Ao contrário de plataformas com um esquema de produto fixo, o Pimcore permite modelar suas próprias classes de objetos de dados, por isso o Fozzels não traz uma lista fixa de atributos para ele. Em vez disso, o Fozzels **descobre os atributos fazendo introspecção no seu endpoint GraphQL do DataHub**: tudo o que a Schema Definition do endpoint expõe é exatamente o que o Fozzels enxerga.

Se um atributo estiver faltando no Fozzels, quase sempre é porque ele não está no **Query Schema** do endpoint no Pimcore.

## Como o esquema é mapeado para os atributos do Fozzels

| DataHub Schema Definition | Efeito no Fozzels |
| --- | --- |
| Campo no **Query Schema** | O atributo é criado e seus valores são importados |
| Campo no **Mutation Schema** | O atributo é marcado como **gravável (writable)**, para que os Flows possam enviar conteúdo gerado para ele |

> Um campo adicionado **somente** ao Mutation Schema nunca se torna um atributo, pois não há nada para ler. Adicione sempre o campo primeiro ao Query Schema; adicione-o também ao Mutation Schema quando o Fozzels precisar gravar nele.

Depois de **qualquer** alteração na Schema Definition:

1. **Salve** a configuração do DataHub no Pimcore.
2. No Fozzels, abra a integração e clique em **Synchronize**: isso relê o esquema e cria os novos atributos.
3. Na aba **Attributes**, ative o novo atributo e defina os indicadores **Filterable** / **Mutable** conforme necessário.

## Adicionando o indicador de publicação (published)

O estado de publicação do Pimcore é uma *coluna de sistema* e o DataHub não a expõe por padrão: ela precisa ser adicionada ao esquema explicitamente.

**No Pimcore:**

1. Vá até **Settings → Data Hub** e abra a configuração do endpoint usado pelo Fozzels.
2. Abra a aba **Schema Definition** e edite a configuração de campos da sua classe **Product** (repita para a classe Category, se quiser o campo nela também).
3. Na árvore de atributos, abra o grupo **System** e adicione **`published`** às colunas do **Query Schema**.
4. Adicione-o também ao **Mutation Schema** se o Fozzels precisar publicar/despublicar objetos.
5. Salve a configuração.

**No Fozzels:** abra a integração, clique em **Synchronize** e depois ative o novo atributo `published` na aba **Attributes**.

> **Importante:** por padrão, o Fozzels importa apenas objetos **publicados**, então o atributo teria o valor `true` em todos os produtos. Para trabalhar com os dois estados, ative **Include unpublished objects** nas configurações da integração no Fozzels. Os produtos não publicados passam então a chegar como produtos comuns, e o atributo `published` os diferencia: você pode filtrar por ele e usá-lo em condições de Flow.

## Expondo a galeria de imagens

### Lendo as imagens dos produtos

O Fozzels monta a galeria de mídia de um produto a partir de **todos os campos do tipo imagem** que o Query Schema expõe; os nomes dos campos não importam. Tipos de campo compatíveis:

- **Image**
- **Advanced Image** (imagem com hotspots/marcadores)
- **Image Gallery**

Adicione seus campos de imagem ao **Query Schema** da classe Product, salve e clique em **Synchronize** no Fozzels. Todas as imagens de todos os campos de imagem expostos aparecem na galeria do produto, e os textos alternativos existentes são lidos da entrada de metadados `alt` do asset em cada idioma da store.

### Enviando imagens geradas

Para que o Fozzels envie de volta ao Pimcore imagens geradas por IA, o endpoint precisa de três coisas:

1. **Um campo Image Gallery gravável.** A classe Product precisa ter um campo do tipo **Image Gallery**, exposto no **Mutation Schema**. O Fozzels o reconhece pelo tipo, então ele pode ter qualquer nome. As imagens geradas são **adicionadas ao final** da galeria: suas imagens existentes nunca são substituídas.
2. **Queries e mutations de Asset habilitadas.** Na Schema Definition, habilite a entidade **Asset** tanto para **query** quanto para **mutation**. O Fozzels usa isso para armazenar o arquivo de imagem (`createAsset`) e para ler e gravar textos alternativos no asset (`getAsset` / `updateAsset`).
3. **Permissões de Workspace.** Na aba **Security Definition** do endpoint, o workspace precisa conceder:
   - **read + update** nos objetos de produto,
   - **read** na subárvore de assets que contém as imagens dos seus produtos,
   - **create** na pasta onde as novas imagens devem ser salvas e **update** nos assets (para os textos alternativos).

**Onde os uploads são salvos:** uma imagem gerada é armazenada ao lado das imagens existentes na galeria do produto. Para produtos que ainda não têm imagens, configure a opção **Asset folder** da integração no Fozzels (por exemplo `/products`): essa pasta precisa existir no Pimcore e o workspace precisa permitir **create** nela.

### Textos alternativos

O Fozzels grava os textos alternativos nos metadados do asset com o nome convencional **`alt`**, no escopo do idioma da store. O idioma precisa estar configurado na instância do Pimcore (**Settings → System Settings → Localization**); o Pimcore descarta silenciosamente metadados em idiomas desconhecidos, e o Fozzels informa isso como um erro em vez de perder o texto.

## Solução de problemas

| Mensagem no Fozzels | Causa | Solução |
| --- | --- | --- |
| Um atributo esperado está faltando | O campo não está no **Query Schema** (ou está apenas no Mutation Schema) | Adicione-o ao Query Schema, salve e clique em **Synchronize** |
| *Pimcore does not accept writes to … — the field is read-only on this DataHub endpoint* | O campo não está no **Mutation Schema** | Adicione-o ao Mutation Schema, salve e clique em **Synchronize** |
| *Pimcore exposes no writable image gallery on …* | Não há campo **Image Gallery** no Mutation Schema | Adicione o campo de galeria ao Mutation Schema |
| *No Pimcore asset folder is configured for this integration…* | O produto ainda não tem imagens e a opção **Asset folder** está vazia | Defina o **Asset folder** da integração no Fozzels |
| *The Pimcore asset folder … does not exist on this instance* | O caminho configurado está incorreto | Aponte a opção para uma pasta existente na árvore de assets do Pimcore |
| *Pimcore refused to store the image …* | O workspace não tem **create** na pasta de destino | Conceda create na Security Definition do endpoint |
| *Pimcore accepted the update of asset … but kept no alt text for …* | O idioma da store não está configurado no Pimcore | Adicione o idioma em **Settings → System Settings → Localization** |
