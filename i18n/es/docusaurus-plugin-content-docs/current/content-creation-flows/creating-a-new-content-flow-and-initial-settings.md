---
id: '103000367976'
title: 4.1.2. Crear un Nuevo Flujo de Contenido y Configuración Inicial.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  El Flow de contenido es el núcleo de la automatización dentro de Fozzels. Le
  indica a Fozzels en qué productos trabajar, qué atributos rellenar, qué modelo
  de IA usar y qué instrucciones darle.
---

El Flow de contenido es el núcleo de la automatización dentro de Fozzels. Le indica a Fozzels en qué productos trabajar, qué atributos rellenar, qué modelo de IA usar y qué instrucciones darle. Fozzels genera, actualiza y sincroniza entonces el contenido de sus productos.

Un Flow puede rellenar varios atributos a la vez. Usted elige un **atributo principal** al crear el Flow y, más adelante, puede añadir hasta 12 más. Todos se generan juntos en una sola solicitud de IA por producto.

Esta guía le acompaña por los cuatro pasos de un Flow, con un ejemplo: un Flow que escribe una **Description**, una **Short Description** y una **Meta Description** para productos de mujer que tienen fotos pero todavía no tienen descripción.

## 1\. Crear un nuevo Flow

1.  En el menú lateral, en **AI Flows**, haga clic en **Content Flows**. Se abre la lista de Flows.

2.  En la parte superior, compruebe la integración, el sitio web y la tienda. Si tiene más de uno, elija el que necesita en la lista desplegable. Si solo tiene uno, ya está seleccionado.

3.  Haga clic en **New Product Flow** en la esquina superior derecha.
    ![Lista de Flows con el botón New Product Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-01-new-product-flow-button.png)

4.  Introduzca un **Name** para el Flow, por ejemplo _Mi primer flujo de contenido_.

5.  En **Entity Type**, elija **Product**. Para generar contenido para categorías, consulte [4.9.1 Cómo crear un Flow de contenido para categorías](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels/).
    ![Create New Product Flow: elección del tipo de entidad](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-02-entity-type.png)

6.  En **Attribute**, elija el **atributo principal** que rellenará el Flow. Puede escribir para buscar, por ejemplo _description_.
    ![Búsqueda del atributo principal](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-03-main-attribute-search.png)

7.  Haga clic en **Save**.
    ![Formulario del nuevo Flow listo para guardar](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-04-new-flow-save.png)

:::tip
**Elija como principal el atributo más extenso**, por ejemplo la descripción completa. En los resultados, el atributo principal tiene el editor completo con vista previa, mientras que los atributos adicionales se muestran debajo.
:::

:::note
**¿Va a generar textos alternativos de imágenes?** Elija **Media Gallery** como atributo. Consulte [4.3.2.a Textos alternativos para Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/) y [4.3.2.b Textos alternativos para NextChapter](/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/).
:::

## 2. AI Configuration

Después de guardar, Fozzels abre el paso **AI Configuration**. A partir de ahora, la parte superior de la página muestra el interruptor **Active flow** y el nombre del Flow. Haga clic en el lápiz junto al nombre para cambiarlo.

1.  En **AI Provider Selection**, elija el proveedor: OpenAI | ChatGPT, Anthropic, xAI o Google | Gemini.
    ![Elección del proveedor de IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-05-ai-provider.png)

2.  En **Model**, haga clic en un mosaico de modelo. Cada mosaico muestra el precio por 1K tokens de entrada y de salida, el precio de una búsqueda web, si el modelo puede leer imágenes de productos y si admite búsqueda web. Consulte [4.2.1 Configuración de IA](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features/).

3.  Opcional: marque **Enable Web Search** si su prompt pide a la IA que busque información en línea, por ejemplo en la página de su producto.

4.  Opcional: en **Image Usage**, defina el **Image count** (hasta 5). La IA analizará entonces ese número de imágenes del producto, en el orden en que llegan desde su integración. Más imágenes consumen más tokens. Déjelo vacío para usar solo el texto del prompt.

5.  Mantenga activada la opción **Enable Image Resize**. Fozzels reduce entonces las imágenes que pesan más de 2 MB y que, o bien no son JPEG, o bien tienen más de 2048 píxeles de ancho o de alto. Consulte [4.2.2 Optimización de imágenes](/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/).
    ![Mosaicos de modelo, búsqueda web, uso de imágenes y cambio de tamaño de imagen](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-06-model-and-image-settings.png)

6.  Opcional: elija uno o más **Text styles** (por ejemplo _Creativo_, _Informativo_) y **Text tones** (por ejemplo _Inspirador_).
    ![Estilos y tonos de texto](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-07-text-styles-tones.png)

7.  Haga clic en **Save** y después en **Next step**.

:::note
**Image Resize cuesta una pequeña tarifa por imagen, pero desactivarlo no siempre evita el cambio de tamaño.** Las imágenes muy grandes se reducen y se cobran igualmente de forma automática, con todos los proveedores de IA. Sin ello, la generación fallaría con un error, o la IA escribiría en su contenido algo como «No puedo ver la imagen».
:::

Puede volver a esta configuración en cualquier momento, incluso después de que el Flow haya empezado a generar.

## 3\. Flow Selection & Prompt

### 3.1 Compruebe el atributo principal y su formato

En la parte superior verá el atributo principal que eligió en el paso 1.

Decida si el resultado debe contener HTML. Haga clic en el botón del ojo junto al atributo. En la ventana **Edit attribute**, desmarque **Allow HTML** si necesita texto sin formato y sin marcado, y haga clic en **Save**. Consulte [4.7.3 Etiquetas HTML permitidas](/content-creation-flows/allowed-html-tags-for-ai-text-generation/).

![Ventana Edit attribute con Allow HTML](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-08-edit-attribute-allow-html.png)

:::warning
Los demás campos de esta ventana son ajustes técnicos de su integración. No los cambie si no sabe para qué sirven. Si necesita ayuda, póngase en contacto con el soporte.
:::

### 3.2 Seleccione los productos

Use **Filter & Select Products** para elegir en qué productos trabaja el Flow. El número de productos seleccionados se muestra en el título del bloque y en la pestaña del paso 3.

![Paso Flow Selection & Prompt: atributo principal y filtros](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-09-filter-select-products.png)

- Haga clic en **Add condition** para añadir un filtro: elija un atributo, un operador y un valor.
- Elija **All conditions** (deben cumplirse todas las condiciones) o **Any condition** (basta con una).
- Haga clic en **Add condition group** para combinar condiciones de formas más complejas.

**Ejemplo.** Para escribir descripciones de productos de mujer que tienen fotos y todavía no tienen descripción:

| Atributo | Operador | Valor |
| --- | --- | --- |
| Categories | is one of | Women |
| Media Gallery | has an image | Yes |
| Description | is empty | |

![Ejemplo de filtro: productos de mujer con imágenes y sin descripción](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-10-filter-example.png)

:::warning
Si no define ninguna condición, el Flow usa **todos** los productos de la tienda.
:::

:::tip
Para no sobrescribir contenido que ya tiene, añada un filtro como **Description is empty** para el atributo que genera.
:::

Para ver todas las opciones de filtro, consulte [Filtrado de productos para la generación de contenido](/data-import-and-quality/product-filtering-for-content-generation/).

#### Guarde sus filtros para reutilizarlos

Si planea más Flows para los mismos productos, por ejemplo descripciones, metaetiquetas y textos alternativos, guarde los filtros una sola vez:

1.  Haga clic en **Filter set → Save as new**.
    ![Menú Filter set](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-11-filter-set-menu.png)

2.  Introduzca un nombre, por ejemplo _Mujer - descripciones vacías_, y haga clic en **Save**.
    ![Guardar un conjunto de filtros](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-12-filter-set-save.png)

3.  El conjunto aparece ahora en el menú **Filter set**. Haga clic en él para aplicarlo, o en la papelera para eliminarlo.
    ![Conjunto de filtros guardado en el menú](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-13-filter-set-saved.png)

Los conjuntos de filtros guardados están disponibles en todos los lugares donde filtra productos: en las integraciones, en el catálogo y en los Flows. También puede combinar un conjunto guardado con condiciones adicionales.

### 3.3 Escriba el prompt

En la sección **Prompt**, escriba las instrucciones para la IA y añádales datos del producto:

- Escriba `/` en el editor, o haga clic en un atributo del panel **Attributes** o arrástrelo. Cada atributo se añade como una línea de condición, por lo que se omite en los productos donde está vacío.
- Use **Snippets**, como **Attribute list**, para añadir con un clic un bloque ya preparado de datos del producto.
- Revise la **Preview** a la derecha. Se actualiza mientras escribe y muestra el prompt final para un producto real. Use **&lt; &gt;** para comprobar varios productos.
- Para reutilizar un prompt en otros Flows, use **Save as template** y **Load**.

![Editor de prompt con la Preview en vivo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-14-prompt-editor-preview.png)

Para la guía completa, consulte [4.3.2 Configuración y uso del prompt](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

:::warning
No use como entrada del prompt los atributos que está generando. Por ejemplo, si el Flow escribe la Description, no inserte el atributo Description en el prompt. En un Flow con varios atributos, esto se aplica a cada uno de ellos. Consulte [Detección de recursión](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation/).
:::

#### Compruebe si hay funciones desactivadas

Al guardar, Fozzels comprueba si su prompt necesita una función que está desactivada en este Flow. Por ejemplo:

- el prompt pide a la IA que analice las imágenes del producto, pero no se ha definido ningún **Image count**;
- el prompt pide a la IA que lea la página de su producto, pero **Enable Web Search** está desactivado.

Aparece entonces una advertencia encima de los pasos. Haga clic en **Open AI Configuration** para activar la función, o en **Ask Jane** para recibir ayuda del asistente de IA.

![Advertencia sobre funciones desactivadas en este Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-15-disabled-features-warning.png)

### 3.4 Rellene más atributos en el mismo Flow

Debajo del prompt, en **Additional attributes to fill**, puede añadir hasta 12 atributos más. Todos los atributos del Flow se generan juntos en una sola solicitud de IA por producto, de modo que los datos del producto y las imágenes se envían una sola vez.

1.  Elija un atributo en la lista desplegable y haga clic en **Add attribute**.
    ![Añadir un atributo adicional](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-16-additional-attribute-add.png)

2.  En **Instruction for this attribute**, escriba lo que debe producir la IA. El campo funciona como el editor del prompt principal, con la Preview, el panel Attributes y los Snippets. Cuando la instrucción está completa, la fila muestra **Prompt set**.
    ![Instrucción para Short Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-17-instruction-short-description.png)

3.  Haga clic en el ojo de la fila para abrir los ajustes del atributo. Para los meta títulos y las meta descripciones, desmarque **Allow HTML**, porque deben ser texto sin formato.
    ![Instrucción para Meta Description](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-18-instruction-meta-description.png)

4.  Repita el proceso para cada atributo y guarde.

:::tip
Dé a cada atributo un límite de longitud claro, por ejemplo _2–3 frases, 35–60 palabras_ para una descripción corta o _120–160 caracteres, nunca más de 160_ para una meta descripción.
:::

### 3.5 Pruebe el prompt

Antes de ejecutar el Flow, pruebe lo que genera la IA en unos pocos productos.

1.  En la parte inferior del paso, haga clic en **Save and Preview**.
    ![Botón Save and Preview](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-19-save-and-preview.png)

2.  Se abre una tabla con los productos seleccionados. Haga clic en una celda de la columna **Prompt** para ver el prompt completo que recibirá la IA. En un Flow con varios atributos, cada atributo aparece bajo su propio encabezado con su propia instrucción. Haga clic en **Copy to Clipboard** para copiarlo.
    ![Tabla de generación de prueba](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-20-test-generation-table.png)
    ![Prompt completo enviado a la IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-21-test-generation-prompt.png)

3.  Haga clic en **Generate Now** en la fila de un producto. El resultado se abre en una ventana, con cada atributo bajo su propio encabezado. Haga clic en **Show HTML** para ver el marcado.
    ![Resultado de la generación de prueba](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-22-test-generation-result.png)

:::info
Una generación de prueba es **gratuita** y **no** inicia el Flow. El resultado no se guarda, así que, si desea conservarlo, haga clic en **Copy to Clipboard** antes de cerrar la ventana.
:::

Ajuste el prompt y pruebe de nuevo hasta que el resultado le satisfaga. Después haga clic en **Next step**.

## 4. Automation

![Ajustes de automatización](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-23-automation-settings.png)

| Ajuste | Qué hace |
| --- | --- |
| **Amount of products to create content for per day** | Cuántos productos procesa el Flow cada día, hasta 500 |
| **Fully automatic** | El contenido generado se confirma y se envía a su tienda de inmediato, sin revisión manual. El contenido marcado como sospechoso se retiene igualmente para su revisión. Solo funciona cuando el Flow está activo |
| **Confidence threshold** | Opcional, de 0.1 a 1.0. La IA indica qué tan segura está de cada valor. Los valores por debajo del umbral se retienen para revisión en lugar de enviarse automáticamente. Cuanto más alto es el umbral, más contenido debe revisar. Déjelo vacío para desactivarlo. Es útil junto con **Fully automatic** |
| **Automatically create a new text when an attribute of a product changes in your store** | Vuelve a generar el contenido cuando cambia en su tienda un atributo usado en el prompt |
| **Prevent double content generation with other Flows** | Evita que un producto reciba contenido nuevo si otro Flow ya lo generó. Elija **Inherit** (usar su configuración global), **Override** (definir un período solo para este Flow) o **Turn Off**. Consulte [4.4.1 Evitar la generación de contenido superpuesta](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/) |
| **Workflows** | Acciones adicionales opcionales para este Flow. Los Workflows se ejecutan de arriba abajo; arrástrelos o use las flechas para cambiar el orden. Consulte [4.11.1 Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) |

:::tip
La mayoría de los usuarios empiezan con **Fully automatic** desactivado y revisan a mano los primeros resultados.
:::

### Inicie el Flow

1.  Active **Active flow** en la parte superior de la página. Los botones de inicio solo están disponibles para un Flow activo.

2.  Elija cómo empezar:

| Opción | Qué ocurre |
| --- | --- |
| **Plan & Close** | El Flow empieza al día siguiente, después de la actualización nocturna del catálogo. Después procesa cada día la **Amount of products per day** hasta que todos los productos seleccionados estén listos |
| **Run Now** (flecha junto a **Plan & Close**) | El Flow procesa de inmediato los primeros **10 productos**. Después continúa con el calendario diario |

![Prevención de duplicados, workflows y botones de inicio](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-24-launch-buttons.png)

Un Flow activo también recoge, después de cada actualización nocturna, los productos nuevos que cumplen sus filtros. Para una lista de comprobación completa previa al inicio, consulte [4.1.2.a Cómo configurar Flows de contenido de IA automatizados](/content-creation-flows/how-to-set-up-automated-ai-content-flows/).

## 5\. Revise los resultados en la Batch List

1.  Haga clic en **Batch List** en la parte inferior de cualquier paso del Flow. En un Flow con varios atributos, cada atributo tiene su propia columna, así que verá todos los resultados de un producto en una sola fila.
    ![Batch List con una columna por atributo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-25-batch-list.png)

2.  Haga clic en cualquier valor generado para abrir la ventana **Edit completion result**:
    - El atributo principal está arriba, con **Enable Editor**, **Show HTML** y una vista previa.
    - Los demás atributos aparecen debajo, en **Other attributes filled by this Flow**. Expanda cada uno para leerlo y editarlo. Los atributos de tipo select y multiselect se editan con una lista desplegable.

    ![Ventana Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v2-26-edit-completion-result.png)

3.  Edite el texto si es necesario y haga clic en **Save**.

4.  Active **Batch Confirmed** y haga clic en **Save & Sync** para enviar el contenido a su tienda. Mientras el resultado no esté confirmado, la sincronización está desactivada. En un Flow **Fully automatic**, los resultados se confirman por usted.

Otros botones de la ventana:

- **Regenerate** genera el contenido de nuevo. Siempre vuelve a generar **todos** los atributos del Flow juntos.
- **Show Revisions** muestra versiones anteriores. Consulte [4.8.1 Historial de finalización de contenido](/content-creation-flows/content-completion-history-revision-history-version-control/).
- **Copy to Clipboard** copia el contenido.

### Contenido sospechoso

Si un resultado no supera los controles de calidad de Fozzels, las partes problemáticas se resaltan en amarillo y el resultado no se sincroniza. Puede corregir a mano las partes resaltadas y guardar, lo cual no tiene coste, o hacer clic en **Regenerate** para generar de nuevo todos los atributos. Consulte [4.7.4 Palabras y frases sospechosas](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

Para más información sobre la revisión y la sincronización de resultados, consulte [4.7.1 Seguimiento de los resultados generados](/content-creation-flows/tracking-of-the-generated-results-dashboard/) y [4.7.5 Edición de contenido en la Batch List](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/).
