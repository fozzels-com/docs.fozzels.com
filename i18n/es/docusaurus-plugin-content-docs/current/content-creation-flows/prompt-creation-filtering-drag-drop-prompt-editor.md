---
id: '103000367983'
title: '4.3.2 Configuración y uso del prompt: el nuevo editor de prompts'
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  Cómo escribir el prompt de un flujo en el nuevo editor: insertar atributos y
  condiciones, configurar las opciones de los atributos, usar snippets, revisar
  la vista previa en directo y obtener ayuda del AI Prompt Assistant.
---

El campo Prompt es donde usted escribe las instrucciones que Fozzels envía a la IA para cada producto. El nuevo editor le permite crear el prompt, insertar datos del producto y condiciones, y comprobar el resultado con un producto real, todo en una sola pantalla.

## Novedades

Si utilizaba el anterior editor de arrastrar y soltar, estos son los cambios principales:

| Área | Antes | Ahora |
| --- | --- | --- |
| Insertar atributos | Hacer clic o arrastrar desde la lista | Hacer clic, arrastrar o escribir `/` en el editor. Cada atributo se inserta como una línea de condición lista para usar |
| Condiciones | Una lista aparte, "Attributes (if filled)" | Cada condición es un bloque que puede contener texto, atributos y otras condiciones (anidamiento) |
| Opciones de atributo | Ninguna | Por atributo: mostrar solo si tiene valor, ocultar la etiqueta, valor alternativo |
| Grado de cumplimentación | Tooltip con un porcentaje | Subrayado de color en cada atributo y un tooltip con el grado de cumplimentación y un valor de ejemplo |
| Vista previa | Solo después de Save & Preview | Vista previa en directo junto al editor, sincronizada con el cursor y el desplazamiento |
| Contenido reutilizable | Solo plantillas de prompt completas | Snippets: Attribute list, Category list, Integration connector y sus propios bloques reutilizables |
| Atributos por flujo | Uno | El atributo principal más hasta 12 atributos adicionales |
| Herramientas del editor | Ninguna | Deshacer/rehacer, tamaño del texto, búsqueda, pantalla completa, mostrar/ocultar la vista previa y los snippets |

**Si viene del editor anterior.** No tiene que migrar nada. Los flujos existentes siguen funcionando, y todos los prompts y plantillas guardadas se han convertido automáticamente al nuevo formato. También puede pegar un prompt escrito en el formato antiguo y el editor lo convertirá.

## 1. Dónde encaja el prompt en un flujo

El prompt se escribe en el paso 3 del flujo, **Flow Selection & Prompt**. En ese momento el flujo ya conoce la tienda, el atributo de destino y la configuración de IA.

1. **Nuevo flujo.** Vaya a **Flows → Create**.

   ![Página Flows con el botón Create](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/01-flows-page-with-the-create-button.png)

   Seleccione la integración, el sitio web y la tienda (idioma), introduzca un nombre y elija el tipo de entidad: Product o Category.

   ![Create New Product Flow: elección del tipo de entidad](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/02-create-flow-choosing-the-entity-type.png)

   A continuación, elija el atributo para el que se generará contenido y haga clic en **Save**.

   ![Create New Product Flow: elección del atributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/03-create-flow-choosing-the-attribute.png)

2. **AI Configuration.** Elija el modelo de IA y las funciones opcionales, como la búsqueda web, el uso de imágenes y el redimensionado de imágenes. Consulte [4.2.1 Configuración de IA](/content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features).

3. **Flow Selection & Prompt.** Use **Filter & Select Products** para elegir los productos para los que el flujo generará contenido. Si no define ninguna condición, se utilizan todos los productos. Después, escriba el prompt en la sección **Prompt** que aparece debajo.

   ![Paso Flow Selection & Prompt con el editor de prompts vacío](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/04-flow-selection-prompt-step-with-an.png)

El conjunto de productos que seleccione aquí es también el que utiliza la vista previa (consulte la sección 8).

### Un flujo, varios atributos

Un flujo puede rellenar su atributo principal más hasta 12 atributos adicionales, 13 en total. Todos se generan juntos en una sola petición a la IA por producto. Los datos y las imágenes del producto se envían una sola vez, de modo que la generación es más rápida y consume menos tokens que con flujos separados.

Para añadir un atributo:

1. Vaya a **Additional attributes to fill** en el paso 3. El contador junto al título indica cuántos ha añadido, por ejemplo **0 / 12**.
2. Elija un atributo en la lista **Choose attribute**.
3. Haga clic en **Add attribute**.

![Elección de un atributo adicional](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/05-choosing-an-additional-attribute.png)

El atributo aparece en su propia fila con su nombre y tipo, por ejemplo **SEO Description · Text**. Mientras no escriba una instrucción, la fila muestra _No instruction yet_.

En **Instruction for this attribute**, escriba lo que la IA debe generar para este atributo. La instrucción se combina con el prompt principal en una única petición. El campo funciona igual que el editor principal: escriba `/` o use el panel de atributos situado al lado para añadir atributos y condiciones.

![Fila de atributo adicional con su campo de instrucción](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/06-additional-attribute-row-with-its-instruction.png)

- Use el icono de la papelera para eliminar el atributo y la flecha para contraer o desplegar la fila.
- Por ahora, el campo de instrucción no tiene panel de snippets. Los snippets que utilice en él siguen funcionando durante la generación.
- Los resultados se pueden revisar y publicar por atributo.

Para más información, haga clic en **User Guide: How multi-attribute flows work** en la esquina superior derecha de esta sección.

## 2. Distribución de la sección Prompt

La sección Prompt tiene cuatro áreas:

| Área | Posición | Para qué sirve |
| --- | --- | --- |
| Editor | Arriba a la izquierda | Escribir el prompt y colocar atributos, condiciones y snippets |
| Preview | Arriba a la derecha | Ver el prompt final para un producto real |
| Attributes | Abajo a la izquierda | Todos los atributos de la tienda seleccionada, con su grado de cumplimentación |
| Snippets | Abajo a la derecha | Bloques reutilizables como Attribute list y Category list |

El enlace **User Guide: Prompt Setup And Usage** de la esquina superior derecha abre este artículo.

### Barra de herramientas del editor

| Botón | Qué hace |
| --- | --- |
| Undo / Redo | Retrocede o avanza por sus cambios. Undo también recupera un bloque eliminado por error |
| A / A | Reduce o aumenta el tamaño del texto del editor. Solo cambia la visualización, no el prompt |
| Search in prompt | Busca palabras o atributos en un prompt largo |
| Preview (ojo) | Muestra u oculta el panel de vista previa |
| Snippets (documento) | Muestra u oculta el panel Snippets |
| Maximize | Abre el editor y el panel lateral a pantalla completa |

![Botón Preview en la barra de herramientas](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/07-preview-button-in-the-toolbar.png)

Cuando la vista previa está oculta, el panel de atributos pasa a la derecha y el editor gana espacio.

![Distribución con la vista previa oculta](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/08-layout-with-the-preview-hidden.png)

![Botón Maximize](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/09-maximize-button.png)

![Botón Snippets y el panel Snippets](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/10-snippets-button-and-the-snippets-panel.png)

El editor admite texto sin formato y etiquetas HTML estándar como `<h2>`, `<ul>` y `<strong>`. Consulte [4.7.3 Etiquetas HTML permitidas](/content-creation-flows/allowed-html-tags-for-ai-text-generation).

## 3. Añadir atributos

Un atributo es un marcador de posición para datos del producto, como el título, el tipo de producto o el material. En el editor aparece como una etiqueta verde. En el prompt final se sustituye por el valor del producto.

Puede añadir un atributo de tres formas:

- **Escriba `/`** en el editor. Se abre una lista con el nombre y la clave técnica de cada atributo.

  ![Menú de barra con la lista de atributos](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/11-slash-menu-with-the-list-of.png)

  Siga escribiendo para filtrarla, por ejemplo `/seo`, y elija el atributo.

  ![Menú de barra filtrado por "seo"](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/12-slash-menu-filtered-by-seo.png)

- **Haga clic** en un atributo del panel de atributos. Se inserta en la posición del cursor.
- **Arrastre** un atributo desde el panel de atributos y suéltelo donde lo necesite. Una línea indica dónde quedará.

  ![Línea de colocación al arrastrar un atributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/13-drop-line-while-dragging-an-attribute.png)

El atributo insertado aparece como una línea de condición con una etiqueta:

![Línea de condición para SEO Title, junto a la vista previa](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/14-a-condition-line-for-seo-title.png)

### Línea de condición o atributo en línea

El editor mantiene el prompt estructurado: cada condición ocupa su propia línea. Por eso, el lugar donde coloque un atributo determina en qué se convierte.

| Dónde lo inserta | Resultado | Ejemplo |
| --- | --- | --- |
| Al principio de una línea (con `/`, un clic o soltándolo antes de la etiqueta) | Una **línea de condición**: un bloque con una etiqueta y el atributo | `if SEO Title` → _SEO Title: [SEO Title]_ |
| Dentro de una línea, después de la etiqueta (soltándolo entre la etiqueta y un atributo) | Un **atributo en línea** sin condición propia | _Media Gallery: Handle: [Handle] [Media Gallery]_ |

![Línea de condición anidada (Status) y un atributo en línea (Handle)](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/15-nested-condition-line-status-and-an.png)

La etiqueta, como _SEO Title:_, se añade automáticamente. Es texto normal, así que puede editarla.

Puede utilizar el mismo atributo tantas veces como necesite.

## 4. Condiciones (bloques if)

Una condición es un bloque con borde discontinuo y un encabezado amarillo, por ejemplo **if SEO Title**. Todo lo que hay dentro del bloque entra en el prompt solo si el producto tiene un valor para ese atributo. Si el valor está vacío, se omite el bloque entero.

Así, el prompt de cada producto queda limpio. Una línea como _SEO Title:_ nunca aparece sin un valor detrás.

**Ejemplo.** El prompt contiene `if SEO Title`, `if Created At` y `if Tags` (anidado dentro de `if Created At`). El producto de muestra no tiene SEO Title, así que la vista previa muestra solo las líneas Tags y Created At.

![Condiciones anidadas y la vista previa correspondiente](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/16-nested-conditions-and-the-matching-preview.png)

### Qué puede incluir dentro de una condición

- Texto libre, antes o después del atributo
- Otros atributos, como atributos en línea
- Otras condiciones (anidamiento). Por ejemplo, `if Tags` dentro de `if Created At` significa que la línea Tags aparece solo cuando ambos valores están rellenos
- Snippets (consulte la sección 7)

![Arrastrar una condición dentro de otra condición](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/17-dragging-a-condition-into-another-condition.png)

### Trabajar con condiciones

| Acción | Cómo |
| --- | --- |
| Mover un bloque | Arrástrelo por el asa ⠿ de su izquierda. Puede soltarlo entre otras líneas o dentro de otra condición. Las líneas sin condición tienen la misma asa |
| Quitar solo la condición | Haga clic en el engranaje del encabezado amarillo y seleccione **Always show (remove condition)**. El contenido se conserva y se incluye siempre |
| Eliminar el bloque | Haga clic en la **x** del encabezado amarillo (**Delete block**) |
| Comprobar el producto de muestra | Pase el cursor por el encabezado amarillo. Si la condición no se cumple para el producto de la vista previa, verá **No output for this sample product** |

![Always show (remove condition) en el menú del engranaje](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/18-always-show-remove-condition-in-the.png)

![Delete block en el encabezado amarillo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/19-delete-block-on-the-yellow-header.png)

![No output for this sample product](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/20-no-output-for-this-sample-product.png)

:::warning

**Delete block** elimina el bloque completo con todo su contenido, incluidas las condiciones anidadas. Para conservar el contenido, utilice **Always show**. Si elimina un bloque por error, haga clic en **Undo**.

:::

## 5. Opciones de atributo

Haga clic en la pequeña flecha de una etiqueta de atributo verde para abrir sus opciones.

![Menú de opciones del atributo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/21-attribute-options-menu.png)

| Opción | Qué hace |
| --- | --- |
| **Only show when filled** | Activada (marcada): el atributo funciona como condición y su línea se omite si el valor está vacío. Desactivada: es un atributo normal que se incluye siempre |
| **Hide label** | Envía a la IA solo el valor, sin la etiqueta delante |
| **Fallback value when empty** | Texto que se utiliza en lugar del valor cuando el producto no tiene valor para este atributo |
| **Remove** | Elimina el atributo del prompt |

Un atributo en línea tiene **Only show when filled** desactivada. Márquela para convertir el atributo en una condición.

![Opciones de un atributo en línea, con Only show when filled desactivada](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/22-options-of-an-inline-attribute-with.png)

### Uso de un valor alternativo

El valor alternativo solo funciona si **Only show when filled** está desactivada. Con la condición activada, una línea vacía se omite de todos modos, de modo que el valor alternativo se ignora aunque lo haya rellenado.

**Ejemplo.** Desactiva **Only show when filled** para SEO Description e introduce un valor alternativo. Para un producto sin descripción SEO, la vista previa muestra el valor alternativo. Este aparece resaltado en la vista previa para que pueda distinguirlo de los datos reales del producto.

![Valor alternativo mostrado en la vista previa](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/23-fallback-value-shown-in-the-preview.png)

### Elegir entre una condición y un valor alternativo

- Use una **condición** cuando la línea no sirva de nada sin valor, por ejemplo un material o una instrucción de cuidado.
- Use un **valor alternativo** cuando la IA deba recibir siempre esa línea, por ejemplo _Brand: unknown_.
- No use ninguno de los dos para atributos que tienen todos los productos, como el título del producto.

:::note

**Remove** elimina solo la etiqueta del atributo. El texto de la etiqueta, como _Title:_, se queda en el prompt. Bórrelo usted mismo o la IA recibirá una etiqueta sin valor.

:::

## 6. El panel de atributos

El panel de atributos muestra todos los atributos de la tienda seleccionada. Los atributos que ya están en el prompt aparecen en verde intenso y con un contador: **SEO Title 1** significa que se utiliza una vez.

![Atributos utilizados con contadores](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/24-used-attributes-with-counters.png)

### Grado de cumplimentación (densidad de datos)

El grado de cumplimentación es la proporción de productos de la integración que tienen un valor para un atributo. El panel lo muestra de tres formas:

- **Color del subrayado.** Verde significa que el atributo está relleno en más del 50 % de los productos. Amarillo, en menos del 50 %.
- **Intensidad del subrayado.** La línea se hace más intensa a medida que el grado de cumplimentación sube del 1 % al 100 %.
- **Tooltip.** Pase el cursor por un atributo para ver su nombre, su clave técnica, el grado de cumplimentación exacto y un valor de ejemplo de un producto real.

![Tooltip del atributo con el grado de cumplimentación y un valor de ejemplo](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/25-attribute-tooltip-with-fill-rate-and.png)

Los atributos con un grado de cumplimentación del 0 % están ocultos. Haga clic en **Show N without data** para verlos.

:::tip

Para los atributos con subrayado amarillo, mantenga **Only show when filled** activada o defina un valor alternativo. Así, los productos sin esos datos también reciben un prompt limpio.

:::

### Buscar atributos

- **Search attribute.** Escriba parte de un nombre para filtrar la lista.
- **Sort By.** Ordene por **Most filled** o por **Name**. Use las flechas para cambiar entre orden ascendente y descendente.

![Opciones de Sort By](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/26-sort-by-options.png)

## 7. Snippets

Los snippets son bloques reutilizables de contenido para el prompt. Aparecen como etiquetas moradas en el panel Snippets. Haga clic en un snippet para insertarlo en el prompt. Un snippet que ya está en el prompt aparece relleno en el panel.

Hay dos tipos:

- **Snippets del sistema**, como Attribute list, Category list e Integration connector. Fozzels los proporciona para todos los usuarios. No se pueden editar ni eliminar.
- **Sus propios snippets**, creados con el botón **+**. Puede editarlos (lápiz) o eliminarlos (papelera).

### Attribute list

Inserta todos los atributos rellenos del producto como líneas _Etiqueta: valor_. Los atributos vacíos se omiten.

![Bloque Attribute list en el editor](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/27-attribute-list-block-in-the-editor.png)

![Attribute list en la vista previa](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/28-attribute-list-rendered-in-the-preview.png)

Es una forma rápida de dar a la IA todos los datos del producto. Pero lo incluye todo, también campos técnicos como ID, URL de administración, fechas y valores en bruto como `{"value":159.0,"unit":"CENTIMETERS"}`. Para obtener mejores textos, elija usted mismo los atributos clave y reserve Attribute list para pruebas rápidas. Insértelo una sola vez por prompt; de lo contrario, los mismos datos se envían dos veces.

### Category list

Inserta líneas de atributos de las categorías a las que pertenece el producto. En Shopify son las colecciones; en otras integraciones puede ser otro tipo de vínculo. El bloque está vacío al insertarlo y muestra un encabezado como **Category list · Collections · 10**.

![Bloque Category list vacío](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/29-empty-category-list-block.png)

Haga clic en el engranaje del bloque para configurarlo:

![Configuración de Category list](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/30-category-list-settings.png)

- **Edit template.** Elija los atributos de categoría que desea incluir, como Name, URL, Level o Position. La lista se crea del mismo modo que un snippet.
- **Resolve through.** Muestra qué vínculo del producto se utiliza para encontrar las categorías, por ejemplo Collections.
- **Number of categories.** El número máximo de categorías de la lista. Un producto puede pertenecer a muchas categorías, incluidas algunas técnicas, así que un límite mantiene el prompt breve y centrado.

![Plantilla de Category list con los atributos seleccionados](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/31-category-list-template-with-selected-attributes.png)

Los datos de categoría ayudan a la IA a entender mejor el producto. Con Name y URL, también puede pedir enlaces internos a categorías relacionadas, lo que resulta útil para el SEO.

### Integration connector

Incorpora datos del mismo producto desde otra tienda de su cuenta. Por ejemplo, un flujo de Magento puede utilizar notas del proveedor, la composición del material o instrucciones de cuidado que solo existen en su feed CSV.

- Solo está disponible en flujos de productos y solo cuando su cuenta tiene una segunda tienda.
- Si el producto no tiene equivalente en esa tienda, el bloque no genera nada y el prompt queda limpio.

Para configurarlo:

1. Haga clic en **Integration connector** en el panel Snippets. Se abre la ventana **Integration connector**.

   ![Ventana Integration connector](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/32-integration-connector-window.png)

2. En **Connected store**, elija la integración, el sitio web y la tienda de la que se obtendrán los datos.

   ![Elección de la tienda conectada](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/33-choosing-the-connected-store.png)

3. Haga clic en **Save**.

   ![Tienda conectada seleccionada](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/34-connected-store-selected.png)

4. Se abre la ventana **Integration connector template** con los atributos de la tienda conectada. Añada los atributos que necesite, igual que en un snippet: cada uno se convierte en una línea de condición.

   ![Plantilla de Integration connector](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/35-integration-connector-template.png)

5. Haga clic en **Save**. El bloque se añade a su prompt.

   ![Plantilla de Integration connector con atributos](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/36-integration-connector-template-with-attributes.png)

:::warning

Fozzels localiza el producto en la tienda conectada por su identificador, como el SKU o el ID. Los identificadores deben coincidir en ambas tiendas. Si no coinciden, el producto no tiene equivalente allí y el bloque queda vacío en la vista previa.

:::

### Crear su propio snippet

1. Haga clic en **+** en el panel Snippets. Se abre la ventana **New snippet**.

   ![Ventana New snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/37-new-snippet-window.png)

2. Introduzca un **Name**.
3. Haga clic en un tipo de partida, por ejemplo **Attribute list**. Aparece en el editor como marcador de posición.
4. Haga clic en los atributos que necesite. Cada uno se añade como una línea de condición y el marcador de posición se sustituye por su propia lista.
5. Antes de añadir el siguiente atributo, coloque el cursor en una línea nueva. La línea nueva no se crea automáticamente.

   ![Nuevo snippet con una lista de atributos](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/38-new-snippet-with-a-list-of.png)

6. Haga clic en **Save**. El snippet aparece en el panel Snippets.

   ![Snippet creado](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/39-snippet-created.png)

Sus snippets están disponibles en todos los flujos de la misma integración, en todas sus tiendas.

### Editar un snippet en el prompt

En el prompt, su snippet es un único bloque morado con su nombre.

![Snippet personalizado en el prompt y en la vista previa](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/40-custom-snippet-in-the-prompt-and.png)

Haga clic en su engranaje:

![Menú del engranaje del snippet](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/41-snippet-gear-menu.png)

| Opción | Qué ocurre |
| --- | --- |
| **Edit snippet (all prompts)** | Abre el snippet para editarlo. Los cambios se aplican a todos los prompts que lo utilizan, en todos los flujos y tiendas de la integración |
| **Convert to inline text (this prompt only)** | Convierte el snippet en líneas de condición normales en este prompt. Después puede editar, mover o eliminar cada línea. Los cambios posteriores en el snippet ya no afectan a este prompt |

![Snippet convertido en líneas de condición en línea](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/42-snippet-converted-to-inline-condition-lines.png)

Mantenga el snippet cuando la misma lista deba ser idéntica en todas partes y actualizarse desde un solo lugar. Conviértalo cuando un prompt necesite su propia versión.

:::note

Los atributos que están dentro de un snippet no cuentan en los contadores del panel de atributos.

:::

### Cuando se elimina un snippet

Si se elimina un snippet que se usa en su prompt, su bloque permanece en el prompt, pero aparece atenuado y muestra solo un número en lugar del nombre, por ejemplo **#11**. No genera nada, así que no interrumpe la generación. Elimine el bloque con su **x** o sustitúyalo por otro snippet.

![Bloque atenuado de un snippet eliminado](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/43-faded-block-of-a-deleted-snippet.png)

## 8. Vista previa

La vista previa muestra el prompt final para un producto del conjunto seleccionado, en el idioma de la tienda seleccionada. Los atributos se sustituyen por los valores del producto y las condiciones sin valor se omiten. Es exactamente lo que recibe la IA.

### Encabezado de la vista previa

- **Nombre del producto.** Haga clic en él para abrir la página del producto en Fozzels, con todos sus valores de atributo e imágenes.
- **Icono de enlace.** Abre el producto en su sitio web.
- **SKU o ID.** Lo que se muestra depende de la integración.
- **Cambiar de muestra (< >).** Pasa al producto anterior o siguiente, en el orden del catálogo.

![Botones para cambiar de muestra en el encabezado de la vista previa](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/44-change-sample-buttons-in-the-preview.png)

### Cómo funciona la vista previa

- **En directo.** Cada cambio en el editor aparece al instante. No hace falta actualizar.
- **Solo lectura.** No se puede escribir en la vista previa. Modifique el prompt en el editor.
- **Sincronizada.** Pase el cursor por un atributo o una condición en el editor y se resaltará la línea correspondiente en la vista previa. La vista previa también se desplaza junto con el editor, para que no se pierda en un prompt largo.

![Al pasar el cursor por un atributo se resalta su línea en la vista previa](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/45-hovering-an-attribute-highlights-its-line.png)

:::tip

Pruebe con varias muestras, sobre todo con productos con pocos datos. Así verá cómo queda el prompt cuando se omiten algunas condiciones.

:::

### La instrucción final

Al final de cada vista previa verá: _Do not provide any commentary, word count, information or comments about the generated text in the returned text._ Fozzels añade esta línea automáticamente a todos los prompts para que la IA devuelva solo el contenido en sí. No tiene que añadirla usted.

## 9. Plantillas

Las plantillas le permiten reutilizar un prompt completo en otros flujos. A diferencia de un snippet, una plantilla es el prompt entero. Los controles están en la parte inferior del editor.

- **Load** sustituye el prompt actual por una plantilla guardada. Si el prompt no está vacío, se le pide confirmación antes, para que no pierda su trabajo por accidente.
- **Save as template** guarda el prompt actual, con sus atributos, condiciones y snippets, como una nueva plantilla.

![Confirmación antes de que una plantilla sustituya el prompt](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/46-confirmation-before-a-template-replaces-the.png)

## 10. Localización de los nombres de atributo

Los nombres de los atributos siguen el idioma de la tienda seleccionada, por ejemplo `product_name` para en-US y `product_naam` para nl-NL.

- Si un atributo no tiene nombre en un idioma, se utiliza el nombre de la tienda predeterminada (marcada con `*`).
- Para cambiar un nombre localizado, vaya a **Integration settings → Attribute → Locale**.

Los prompts vinculan los atributos por su clave técnica única, no por su nombre. Cambiar el nombre de un atributo o el idioma de la tienda no rompe su prompt.

## 11. Editar el prompt con el AI Prompt Assistant

El AI Prompt Assistant puede escribir o ampliar el prompt por usted. Lee el prompt actual y responde solo con la parte que hay que añadir. Por ejemplo, si su prompt pide una descripción SEO y usted le pide "add slug", sugiere solo el fragmento nuevo.

Para abrirlo, haga clic en el botón azul de chat de la esquina inferior derecha de la página. El panel **AI Assistant** se abre junto al editor. Escriba su petición, por ejemplo _Help me create a prompt for Description. Use filled attributes._, y pulse **Enter** para enviarla. Use **Shift+Enter** para pasar a una línea nueva.

El asistente conoce los atributos de su integración y su grado de cumplimentación. Construye el prompt con atributos y condiciones, y explica sus decisiones, por ejemplo por qué un atributo va dentro de una condición.

![AI Assistant con un prompt sugerido](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/47-ai-assistant-with-a-suggested-prompt.png)

### Colocar una sugerencia

Cada sugerencia aparece en el chat como un bloque, representado igual que en el editor, con estos botones:

| Botón | Qué hace |
| --- | --- |
| Copy | Copia la sugerencia para que pueda pegarla usted mismo |
| Add | Añade la sugerencia al final del prompt |
| At cursor | Inserta la sugerencia en la posición del cursor en el editor |
| Replace all | Sustituye el prompt completo por la sugerencia |

Al hacer clic en un botón, este se pone verde y se desactiva un momento, para que el mismo texto no se inserte dos veces. Los botones de colocación solo aparecen cuando hay un editor de prompts abierto en la página. Si una sugerencia no se ajusta al formato del editor, solo se muestra **Copy**.

### Elegir qué prompt editar

Cuando una página tiene más de un prompt, un desplegable encima del campo del chat le permite elegir con cuál trabaja el asistente.

- Una sugerencia siempre va al prompt que estaba seleccionado cuando hizo la pregunta, aunque después cambie el desplegable.
- En una conversación recuperada de una sesión anterior, las sugerencias van al prompt principal del flujo.
- Si se ha eliminado el prompt al que pertenece una sugerencia, esta se marca como no disponible y no se escribe en ningún otro sitio.

## Artículos relacionados

- [4.3.3 Escribir prompts eficaces (recomendaciones)](/content-creation-flows/writing-effective-prompts-recommendations)
- [4.7.3 Etiquetas HTML permitidas para la generación de texto con IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
- [4.9.1 Cómo crear un flujo de contenido para categorías](/content-creation-flows/how-to-create-a-content-flow-for-categories-in-fozzels)
