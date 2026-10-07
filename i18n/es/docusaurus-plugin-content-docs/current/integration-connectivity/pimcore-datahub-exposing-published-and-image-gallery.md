---
title: '2.11.2. Pimcore: exponer atributos mediante DataHub (indicador de publicación y galería de imágenes)'
sidebar_position: 24
slug: >-
  /integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery
description: >-
  Fozzels descubre los atributos de productos y categorías de Pimcore a partir
  del endpoint GraphQL de tu DataHub. Esta guía explica cómo exponer el
  indicador de publicación (published) y tu galería de imágenes para que
  Fozzels pueda leerlos y escribirlos.
---

A diferencia de las plataformas con un esquema de producto fijo, Pimcore te permite modelar tus propias clases de objetos de datos, por lo que Fozzels no incluye una lista fija de atributos para él. En su lugar, Fozzels **descubre los atributos mediante introspección del endpoint GraphQL de tu DataHub**: lo que expone la Schema Definition del endpoint es exactamente lo que ve Fozzels.

Si falta un atributo en Fozzels, casi siempre es porque falta en el **Query Schema** del endpoint en Pimcore.

## Cómo se asigna el esquema a los atributos de Fozzels

| DataHub Schema Definition | Efecto en Fozzels |
| --- | --- |
| Campo en el **Query Schema** | Se crea el atributo y se extraen sus valores |
| Campo en el **Mutation Schema** | El atributo se marca como **writable** (escribible), de modo que los Flows pueden enviarle contenido generado |

> Un campo añadido **solo** al Mutation Schema nunca se convierte en atributo, porque no hay nada que leer. Añade siempre primero el campo al Query Schema; añádelo también al Mutation Schema cuando Fozzels deba escribir en él.

Después de **cualquier** cambio en la Schema Definition:

1. **Guarda** (Save) la configuración de DataHub en Pimcore.
2. En Fozzels, abre la integración y haz clic en **Synchronize**: así se vuelve a leer el esquema y se crean los nuevos atributos.
3. En la pestaña **Attributes**, activa el nuevo atributo y configura sus indicadores **Filterable** / **Mutable** según necesites.

## Añadir el indicador de publicación (published)

El estado de publicación de Pimcore es una *columna de sistema* y DataHub no la expone de forma predeterminada: hay que añadirla al esquema de forma explícita.

**En Pimcore:**

1. Ve a **Settings → Data Hub** y abre la configuración del endpoint que utiliza Fozzels.
2. Abre la pestaña **Schema Definition** y edita la configuración de campos de tu clase **Product** (repite el proceso con la clase Category si también lo quieres ahí).
3. En el árbol de atributos, abre el grupo **System** y añade **`published`** a las columnas del **Query Schema**.
4. Añádelo también al **Mutation Schema** si Fozzels debe poder publicar o despublicar objetos.
5. Guarda la configuración.

**En Fozzels:** abre la integración, haz clic en **Synchronize** y activa el nuevo atributo `published` en la pestaña **Attributes**.

> **Importante:** de forma predeterminada, Fozzels solo extrae los objetos **publicados**, por lo que el atributo valdría `true` en todos los productos. Para trabajar con ambos estados, activa **Include unpublished objects** en los ajustes de la integración en Fozzels. Los productos no publicados llegarán entonces como productos normales y el atributo `published` los distingue: puedes filtrar por él y usarlo en las condiciones de los Flows.

## Exponer la galería de imágenes

### Lectura de las imágenes de producto

Fozzels construye la galería multimedia de un producto a partir de **todos los campos de tipo imagen** que expone el Query Schema; los nombres de los campos no importan. Tipos de campo compatibles:

- **Image**
- **Advanced Image** (imagen con puntos de interés o marcadores)
- **Image Gallery**

Añade tus campos de imagen al **Query Schema** de la clase Product, guarda y haz clic en **Synchronize** en Fozzels. Todas las imágenes de todos los campos de imagen expuestos aparecen en la galería del producto, y los textos alternativos existentes se leen de la entrada de metadatos `alt` del asset en cada idioma de la tienda.

### Envío de imágenes generadas

Para que Fozzels pueda subir a Pimcore las imágenes generadas por IA, el endpoint necesita tres cosas:

1. **Un campo Image Gallery escribible.** La clase Product debe tener un campo de tipo **Image Gallery**, expuesto en el **Mutation Schema**. Fozzels lo reconoce por su tipo, así que puede tener cualquier nombre. Las imágenes generadas se **añaden al final** de la galería: tus imágenes existentes nunca se reemplazan.
2. **Consultas y mutaciones de Asset habilitadas.** En la Schema Definition, habilita la entidad **Asset** tanto para **query** como para **mutation**. Fozzels lo utiliza para almacenar el archivo de imagen (`createAsset`) y para leer y escribir los textos alternativos en el asset (`getAsset` / `updateAsset`).
3. **Permisos del workspace.** En la pestaña **Security Definition** del endpoint, el workspace debe conceder:
   - **read + update** sobre los objetos de producto,
   - **read** sobre el subárbol de assets que contiene tus imágenes de producto,
   - **create** en la carpeta donde deban guardarse las nuevas imágenes y **update** sobre los assets (para los textos alternativos).

**Dónde se guardan las subidas:** una imagen generada se almacena junto a las imágenes de galería que ya tiene el producto. Para los productos que aún no tienen imágenes, configura el ajuste **Asset folder** de la integración en Fozzels (por ejemplo `/products`): esa carpeta debe existir en Pimcore y el workspace debe permitir **create** en ella.

### Textos alternativos

Fozzels escribe los textos alternativos en los metadatos del asset con el nombre convencional **`alt`**, asociado al idioma de la tienda. El idioma debe estar configurado en la instancia de Pimcore (**Settings → System Settings → Localization**); Pimcore descarta en silencio los metadatos en idiomas desconocidos, y Fozzels lo notifica como un error en lugar de perder el texto.

## Solución de problemas

| Mensaje en Fozzels | Causa | Solución |
| --- | --- | --- |
| Falta un atributo que esperas | El campo no está en el **Query Schema** (o solo está en el Mutation Schema) | Añádelo al Query Schema, guarda y haz clic en **Synchronize** |
| *Pimcore does not accept writes to … — the field is read-only on this DataHub endpoint* | El campo no está en el **Mutation Schema** | Añádelo al Mutation Schema, guarda y haz clic en **Synchronize** |
| *Pimcore exposes no writable image gallery on …* | No hay ningún campo **Image Gallery** en el Mutation Schema | Añade el campo de galería al Mutation Schema |
| *No Pimcore asset folder is configured for this integration…* | El producto aún no tiene imágenes y el ajuste **Asset folder** está vacío | Configura el **Asset folder** de la integración en Fozzels |
| *The Pimcore asset folder … does not exist on this instance* | La ruta configurada es incorrecta | Apunta el ajuste a una carpeta existente del árbol de assets de Pimcore |
| *Pimcore refused to store the image …* | El workspace no tiene **create** en la carpeta de destino | Concede create en la Security Definition del endpoint |
| *Pimcore accepted the update of asset … but kept no alt text for …* | El idioma de la tienda no está configurado en Pimcore | Añade el idioma en **Settings → System Settings → Localization** |
