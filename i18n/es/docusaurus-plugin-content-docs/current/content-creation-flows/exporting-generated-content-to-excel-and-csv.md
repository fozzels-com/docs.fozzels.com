---
title: 4.7.6 Exportar el contenido generado a Excel y CSV
sidebar_position: 22.5
slug: /content-creation-flows/exporting-generated-content-to-excel-and-csv
description: >-
  Descargue el contenido generado de una Content Completion List como archivo
  Excel o CSV, elija los productos y las columnas, y abra el archivo
  correctamente.
---

## Descripción general

Puede descargar el contenido generado de una Content Completion List como archivo Excel (.xlsx) o CSV. Usted elige los productos y las columnas, Fozzels crea el archivo en segundo plano y este aparece en **Export / Generated Data** durante 24 horas.

La exportación resulta útil cuando necesita leer los textos completos (en la tabla aparecen recortados), compartir el contenido con compañeros o con un cliente para su revisión, o importar los resultados en otro sistema, como un ERP, un PIM o una hoja de cálculo.

![Content Completion List con Description, SEO Description y SEO Title generados](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/01-content-completion-list.png)

## Cómo exportar

1. Abra la **Content Completion List** del flow (batch) que necesite.
2. Marque los productos que desea exportar. El número de elementos seleccionados aparece en el menú, por ejemplo **Actions (3)**.
3. Haga clic en **Actions → Export**.

    ![Menú Actions con la opción Export y tres productos seleccionados](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/02-actions-export.png)

4. En la ventana **Export Text Completions**, elija el formato (CSV o Excel) y, para CSV, el delimitador y la opción de líneas. Consulte [Formato del archivo](#formato-del-archivo) más abajo.
5. Marque las columnas que desea incluir. El contenido generado y el SKU están seleccionados de forma predeterminada.
6. Haga clic en **Export as CSV** o **Export as Excel**. El archivo se crea en segundo plano.
7. En el menú lateral, abra **Dashboard → Export / Generated Data**.

    ![Menú lateral con Export / Generated Data dentro de Dashboard](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/03-sidebar-export-generated-data.png)

8. Cuando el estado muestre **Available**, haga clic en **ZIP** en la columna Download.

    ![Lista Export / Generated Data con un archivo ZIP disponible](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/04-export-list-zip.png)

9. Descomprima el archivo: contiene el archivo .xlsx o .csv.

Solo se incluyen las completions que ya tienen contenido generado. El archivo comprimido está disponible durante **24 horas**; después, vuelva a ejecutar la exportación. El nombre del archivo se compone del nombre del batch y el número de registros, por ejemplo `my batch - 3 Completions.csv`.

## Formato del archivo

Elija Excel cuando una persona vaya a leer el archivo, y CSV cuando los datos vayan a otro sistema.

| Formato | Cuándo usarlo | Detalles |
| --- | --- | --- |
| Excel (.xlsx) | Revisar, editar, compartir con compañeros | Se abre directamente, sin necesidad de ajustes. El SKU se guarda como texto |
| CSV | Importar en un ERP, un PIM u otro sistema | Codificación UTF-8, valores de texto entre comillas, delimitador a su elección |

![Opciones de CSV: delimitador y Keep each value on one line](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/05-csv-options.png)

**Delimitador (solo CSV).** La coma (,) es el estándar para la mayoría de los sistemas de importación. El punto y coma (;) es para archivos que se abren en Excel con una configuración regional europea (Países Bajos, Alemania, Francia y otros): ahí Excel espera “;”; de lo contrario, todo acaba en una sola columna.

**Keep each value on one line (solo CSV).** Los textos pueden contener saltos de línea, por ejemplo entre párrafos HTML o en el prompt. Sin esta opción, los saltos se mantienen dentro del valor (entre comillas) y un producto ocupa varias líneas físicas en el archivo. Con la opción, los saltos de línea se sustituyen por espacios y cada producto ocupa exactamente una línea.

- Actívela si su sistema de importación no admite saltos de línea dentro de los valores (algo habitual en los sistemas ERP).
- Para HTML es seguro: los espacios entre etiquetas no cambian cómo se muestra el contenido.
- En texto sin formato con párrafos, los saltos se sustituyen por espacios y no se pueden restaurar.

## Columnas disponibles

Las columnas se agrupan en cuatro bloques. La casilla junto al nombre de un bloque activa o desactiva todas sus columnas a la vez, y el contador (p. ej., “2 of 4”) muestra cuántas están seleccionadas.

![Ventana de exportación con todos los grupos de columnas desplegados](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/06-export-columns.png)

| Bloque | Columna | Encabezado en el archivo | Contenido |
| --- | --- | --- | --- |
| Generated content | Atributos generados por el flow | Código de atributo, p. ej., `descriptionHtml`, `seo.description`, `seo.title` | Los valores generados, completos. Seleccionado de forma predeterminada |
| Product details | SKU | `sku` | Identificador del producto. Seleccionado de forma predeterminada |
| Product details | Name | `name` | Nombre del producto |
| Product details | Origin ID | `origin_id` | ID del producto en la plataforma conectada (p. ej., Shopify) |
| Product details | Entity type | `entity_type` | Tipo de entidad, p. ej., `product` |
| Flow details | Batch confirmed | `batch_confirmed` | Si el resultado está confirmado (`0` = no confirmado) |
| Flow details | Prompt | `prompt` | Texto completo del prompt, incluidos los datos del producto. Largo y con saltos de línea |
| Flow details | Created at | `created_at` | Cuándo se añadió el registro al batch (UTC) |
| Flow details | Executed at | `executed_at` | Cuándo se ejecutó la última generación (UTC) |
| Flow details | Synchronized at | `synchronized_at` | Cuándo se sincronizó el contenido con la tienda (UTC). Vacío si aún no se ha sincronizado |
| Catalog values | Atributos del catálogo | Código de atributo, p. ej., `markets` | Valores actuales de su catálogo, no generados |

El bloque **Catalog values** muestra los atributos que tienen activada la opción **Show in batch list** en sus ajustes de atributo. En el archivo, primero aparecen los detalles del producto, seguidos de los detalles del flow, el contenido generado, las fechas y los valores del catálogo.

## Cómo leer el archivo

**Los encabezados son códigos de atributo, no nombres.** Los nombres de los atributos pueden variar según el cliente y el idioma de la tienda, mientras que el código es único y nunca cambia. Por eso el mismo archivo se puede importar sin un mapeo adicional. La ventana de exportación muestra cada código en gris junto al nombre (p. ej., Description · descriptionHtml).

**Las fechas y horas están en UTC.** Las horas aparecen como `2026-10-19 10:36:39` en UTC, por lo que pueden diferir de la interfaz de Fozzels, que muestra su propia zona horaria. Por ejemplo, las 12:36 del horario de verano de Europa Central aparecen como 10:36 en el archivo.

**El HTML se conserva tal cual.** Si **Allow HTML** está activado para un atributo (como en Description), el archivo contiene marcado con etiquetas como `<p>`, `<ul>` y `<li>`. Esto es necesario para una importación correcta. Para los campos meta (SEO Title, SEO Description), Allow HTML debe estar desactivado; de lo contrario, las etiquetas acaban tanto en el archivo como en su tienda.

![Ajustes de atributo con las opciones Allow HTML y Show in batch list](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/07-attribute-settings.png)

**Las celdas vacías son normales.** Un valor vacío significa que no hay datos: el atributo no está rellenado en el catálogo o el contenido aún no se ha sincronizado (`synchronized_at` vacío).

**Batch confirmed** se devuelve como número: `0` significa que el resultado no está confirmado.

## Cómo abrir un archivo CSV

La forma más segura de abrir un CSV es mediante una importación con codificación UTF-8 y el delimitador definido explícitamente. Así, los caracteres especiales (’, é, ä, cirílico) y las columnas se mostrarán correctamente.

**LibreOffice Calc** muestra automáticamente la ventana Importar texto al abrir cualquier CSV:

1. Juego de caracteres: **Unicode (UTF-8)**.
2. Opciones de separador: deje marcado **solo** el delimitador que eligió al exportar (Coma o Punto y coma). LibreOffice recuerda las casillas de archivos anteriores, por lo que Tabulación o Espacio también pueden estar marcados.
3. Delimitador de cadenas: **"** (comillas dobles).
4. Para mantener el SKU y los ID como texto, seleccione esas columnas en la vista previa y establezca Tipo de columna → **Texto**.
5. Haga clic en **Aceptar**.

![Ventana Importar texto de LibreOffice Calc para un CSV exportado](/img/kb/content-creation-flows/exporting-generated-content-to-excel-and-csv/08-libreoffice-text-import.png)

**Microsoft Excel** abre un CSV con su configuración local al hacer doble clic en él, por lo que los caracteres especiales pueden mostrarse incorrectamente (p. ej., `itâ€™s` en lugar de `it’s`). Para evitarlo:

1. En un libro vacío, vaya a **Datos → Desde el texto/CSV** y seleccione el archivo.
2. Origen del archivo: **65001: Unicode (UTF-8)**.
3. Delimitador: el mismo que eligió al exportar.
4. Haga clic en **Cargar**.

Si solo necesita leer el archivo, es más sencillo exportarlo directamente en formato Excel. No vuelva a guardar un CSV en Excel antes de importarlo en otro sistema: Excel puede cambiar el delimitador o la codificación, o convertir los números largos al formato 7.81227E+12.

## Preguntas frecuentes

**He hecho clic en Export, pero no se ha descargado ningún archivo.** El archivo se crea en segundo plano y no se descarga automáticamente. Lo encontrará en **Dashboard → Export / Generated Data**.

**El archivo tiene menos productos de los que seleccioné.** Solo se exportan los registros con contenido generado. Compruebe también que ha seleccionado productos en todas las páginas de la lista, no solo en la actual.

**Todo mi CSV está en una sola columna.** El delimitador del archivo no coincide con el que espera su programa. Vuelva a exportar con el otro delimitador (“;” para Excel europeo) o abra el archivo mediante una importación, como se describe más arriba.

**Veo caracteres ilegibles como `â€™`.** El archivo no se abrió como UTF-8. Ábralo mediante una importación con codificación UTF-8 o exporte en formato Excel.

**El SKU aparece como 7.81227E+12.** El programa de hojas de cálculo ha convertido un número largo a notación científica. Al importar el CSV, configure esta columna como Texto. El formato Excel no tiene este problema.

**Las horas del archivo no coinciden con la tabla.** El archivo usa UTC, mientras que la interfaz usa su zona horaria.

**Los campos SEO contienen etiquetas `<p>`.** Allow HTML está activado para ese atributo. Desactívelo en los ajustes del atributo y vuelva a generar el contenido.

**El enlace de descarga ha caducado.** Los archivos comprimidos se conservan durante 24 horas. Vuelva a ejecutar la exportación.
