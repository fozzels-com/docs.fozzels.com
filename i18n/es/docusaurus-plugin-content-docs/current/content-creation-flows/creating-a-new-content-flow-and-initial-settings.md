---
id: '103000367976'
title: '4.1.2. Crear un Content Flow: los seis pasos'
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  Cómo configurar un Content Flow en seis pasos guiados: seleccionar la tienda y
  los campos, crear el prompt con bloques, configurar cada campo, probar con
  productos reales y lanzar. También la página del Flow, la revisión del
  contenido generado y el Brand Profile.
---

Un Content Flow le indica a Fozzels en qué productos trabajar, qué campos rellenar, qué modelo de IA usar y qué instrucciones darle. Después, Fozzels genera el contenido, lo actualiza y lo envía a su tienda.

Usted configura un Content Flow en seis pasos guiados. Crea el prompt con bloques que activa y desactiva, y la voz de su marca está en un solo lugar: el [Brand Profile](#brand-profile). Este artículo le explica cómo funciona cada paso, desde la selección de una tienda hasta la generación de contenido para muchos productos.

## Seis pasos hasta un Flow terminado

1. **Store.** Seleccione la integración, el sitio web y la store view para los que genera contenido.
2. **What and with what?** Seleccione los campos que desea generar y vea cuántos productos ya tienen un valor en ellos. En este paso también selecciona sus productos.
3. **Enrich the text.** Seleccione un modelo de IA y cree un prompt común con bloques: quién escribe, para quién, con qué tono y de dónde vienen los datos.
4. **Fields.** Defina la longitud, la estructura y el formato de cada campo.
5. **Test.** Genere textos para productos reales y mire las puntuaciones antes de generar contenido para muchos productos.
6. **Launch.** Defina cuántos productos procesa Fozzels cada día y si usted aprueba los textos antes de que Fozzels los publique.

Los seis pasos están siempre en el lado izquierdo de la ventana del Flow. Un paso completado es verde, y el paso actual es azul. El botón **Next** solo se activa cuando usted ha completado todos los ajustes obligatorios del paso actual.

:::tip
Rellene su [Brand Profile](#brand-profile) antes de crear su primer Flow. Así cada Flow nuevo empieza con la voz de su marca.
:::

### Paso 1. Store

Seleccione tres cosas:

- **Integration**: su tienda o su PIM.
- **Website**.
- **Store view**: el idioma de los textos.

Todos los ajustes que haga después de este paso se aplican a esta combinación.

Debajo de los campos, Fozzels muestra su selección y cuántos productos contiene. Si la tienda que necesita no está en la lista, conéctela primero en **Integrations**.

![Paso 1: la selección de la integración, el sitio web y la store view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-01-step-1-store.png)

### Paso 2. What and with what?

Seleccione uno o varios tipos de contenido. Cada tarjeta muestra el porcentaje de sus productos que ya tiene un valor en ese campo. Así ve de inmediato dónde están los mayores huecos.

- **Title**: nombres de producto claros que los compradores pueden encontrar.
- **Description**: el texto completo del producto, que vende el producto.
- **SEO Title**: el título que muestra Google.
- **SEO Description**: el texto corto de los resultados de búsqueda que invita a los compradores a hacer clic.
- **Other attribute**: un atributo de su tienda, como el color, el material o las dimensiones.

![Paso 2: tipos de contenido con su grado de cumplimentación](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-02-step-2-content-types.png)

En la ventana **Add another attribute**, puede buscar un atributo por su nombre o su código. Los atributos con el mayor grado de cumplimentación están arriba. El tipo del atributo viene de su tienda: un número, un valor de una lista o un texto. Así la IA escribe el tipo de valor correcto.

![La ventana Add another attribute](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-03-add-another-attribute.png)

Los textos ALT de las imágenes tienen su propio modo de Flow. Un Flow de este tipo solo crea textos ALT y tiene sus propias reglas. Para más información, consulte [Generar textos ALT de imágenes para Magento 2](/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/).

Todos los campos que selecciona aparecen en el bloque **You are creating**. El primer campo es la base (**BASE**). Los demás campos la usan como punto de partida. Para cambiar el orden, arrastre un campo por su asa de la izquierda. Las instrucciones para cada campo las da en el paso 3.

Más abajo en este paso, selecciona los productos para el Flow.

![El bloque You are creating con los campos seleccionados](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-04-you-are-creating.png)

### Paso 3. Enrich the text

En este paso, usted crea el prompt: la instrucción que la IA recibe para cada producto. El prompt tiene bloques. Primero define cómo suena el texto. Después define qué fuentes usa la IA y qué debe aparecer en el texto. Debajo de los bloques, ve el prompt.

Cuando abre el paso, Fozzels prepara una propuesta para cada campo. Fozzels define la base: la estructura, el idioma y el tipo correcto de cada campo. Haga clic en **Load brand profile** para cargar un perfil guardado, o en **Save as brand profile** para guardar los ajustes de este Flow como un perfil nuevo.

**¿Qué modelo de IA?** Seleccione primero el proveedor y después el modelo. El modelo define la calidad y el precio de sus textos. Para cada modelo, ve el coste por 1.000 tokens: para el texto que la IA lee (entrada) y para el texto que escribe (salida). Etiquetas como **Recommended**, **Balanced** o **Fast & low cost** le ayudan a elegir. El modelo también define si los bloques **Look at photos** y **Search the internet** están disponibles. Puede cambiar el modelo en cualquier momento. No tiene que configurar el Flow de nuevo.

![Paso 3: el prompt base y la selección del modelo de IA](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-05-step-3-ai-model.png)

**Cómo suena el texto.** Estos ajustes se aplican a todas las secciones del texto: quién escribe, para quién, con qué tono y con qué longitud. En el bloque **Role of the AI**, seleccione un rol con un clic. Para cambiar el nombre y la descripción de un rol, haga clic en el icono del lápiz. La descripción indica quién escribe, con qué experiencia y con qué objetivo.

![Editar un rol: nombre y descripción](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-06-edit-role.png)

Haga clic en **Make default** para usar la opción seleccionada en todos los Flows nuevos. La opción recibe entonces una estrella y la etiqueta "Default for new flows", y aparece a su lado un enlace al Brand Profile. Para deshacerlo, haga clic en **Remove from defaults**. **Make default** funciona de la misma manera para el modelo, la audiencia, el tono y los demás bloques.

![Un rol con la etiqueta Default for new flows](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-07-role-default.png)

Los bloques **Target audience** y **Tone of voice** funcionan igual que el rol. Actívelos con el interruptor. Después seleccione una opción guardada con un clic, o cree una opción nueva. Debajo de los botones, ve la descripción completa que recibe la IA. Si no selecciona un tono, la IA escribe con un estilo neutro e informativo.

![Los bloques Target audience y Tone of voice en un Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-08-audience-tone.png)

#### Principios de neuromarketing

Los cuatro principios son **Processing fluency**, **Simulation**, **Congruence** y **Trust**. Vienen de una investigación de neuromarketing con la Universidad Erasmus de Róterdam. Active los principios que necesita, y la IA los usa en cada texto. La sección [Brand Profile](#neuromarketing-principles-in-the-brand-profile) le explica qué hace cada principio.

¿No sabe qué principios usar? Haga clic en **Fozzels suggestions**. La IA de Fozzels mira los productos que ha seleccionado y le indica qué principios encajan con ellos. El principio recomendado recibe la etiqueta "advice". Haga clic en **Apply advice** para usarlo. Esta función usa tokens.

![Principios de neuromarketing con el consejo de Fozzels](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-09-neuromarketing.png)

#### De dónde vienen los datos

Aquí define las fuentes que la IA puede usar: los atributos de su propio sistema, la información de las fotos y la información de internet. La IA usa solo las fuentes que usted activa. No inventa datos.

**Attributes from your store.** Los atributos de su tienda, ERP o PIM que la IA usa como entrada. Fozzels ya selecciona los atributos con un grado de cumplimentación alto. Haga clic en la cruz para quitar un atributo, y añada los atributos que faltan. El porcentaje muestra cuántos productos tienen un valor en el campo. La barra de color muestra si el campo está lleno, parcialmente lleno o vacío. Fozzels omite los campos vacíos.

![El bloque Attributes from your store](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-10-attributes-from-store.png)

**Look at photos.** Sus fotos pueden mostrar información que no está en sus campos, por ejemplo el corte, el cierre o un estampado. La IA lee esta información en las imágenes. La usa en el texto o para rellenar un campo.

- **How many photos per product?** De 1 a 4, o todas (máximo 5). Más fotos dan más detalles, pero cuestan más.
- **What should the AI look at?** Escriba los detalles que la IA debe examinar, por ejemplo el cuello, los bolsillos y la capucha.
- **When a product has no image yet.** Fozzels espera a la imagen y después genera automáticamente, u omite el producto.
- **Enable Image Resize.** Fozzels reduce automáticamente las imágenes grandes. Esto evita generaciones fallidas y ahorra créditos. Cuesta 0,025 € por imagen.
- **Fozzels suggestions.** La IA mira algunas fotos y sugiere detalles visibles que son importantes para el texto. Añádalos con un clic.

![El bloque Look at photos](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-11-look-at-photos.png)

**Search the internet.** A veces la información que necesita no está en su tienda ni en las fotos, por ejemplo las especificaciones del fabricante, los detalles del material o las reseñas. Entonces Fozzels la busca en internet. La IA usa solo los datos que coinciden con los datos de su producto.

- **What does the AI search with?** Los campos que identifican un producto: normalmente la marca, el nombre y el GTIN. Los nombres de estos campos son diferentes en cada integración.
- **Which information do you want the AI to look up online?** Los temas que se deben buscar, como reseñas, sostenibilidad o consejos de talla. **Fozzels suggestions** le indica qué temas son útiles.

![El bloque Search the internet](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-12-search-internet.png)

Fozzels calcula los costes de **Look at photos** y **Search the internet** para cada producto. Los ve en el paso **Test**.

#### Bloques: amplíe el prompt

Estos bloques son opcionales. Active un bloque, rellénelo y guárdelo. Después Fozzels lo pone en una posición fija del prompt.

**Keywords.** Los términos de búsqueda con los que los compradores deben encontrar el texto. Escríbalos usted mismo, o haga clic en **Fozzels suggestions** para obtener palabras clave para la categoría del producto. Pronto estará disponible una conexión con su herramienta de SEO. Fozzels pone las palabras clave en el encabezado y en el primer párrafo, y después en el resto del texto. Si no selecciona palabras clave, Fozzels elige un término para cada producto a partir de su título y su categoría.

![El bloque Keywords en un Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-13-keywords.png)

**My snippets.** Sus propias instrucciones, que puede usar de nuevo en distintos Flows, por ejemplo una frase final fija, una regla sobre las tallas o una lista de nombres de marca que siempre deben estar bien escritos. Un snippet se aplica a todo el texto, en todos los campos del Flow.

#### Reglas, controles y pautas para todo el texto

Aquí define lo que la IA siempre debe hacer o nunca debe hacer, en todas las partes del texto. Así evita errores que, si no, tendría que corregir en cada texto.

**Do not mention.** Palabras y temas que no deben aparecer en el texto: precios, descuentos, nombres de competidores, afirmaciones como "el mejor" o "el más barato". La IA no los usa, aunque estén en sus fuentes.

![Los bloques My snippets y Do not mention](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-14-snippets-do-not-mention.png)

**Guidelines and check rules · Fozzels standard.** Las reglas estándar que Fozzels usa para cada texto. Están activadas en cada Flow nuevo. Puede desactivar una regla que no encaja con sus textos.

- No mencionar precios, descuentos ni plazos de entrega.
- Usar solo datos de los datos del producto, de las fotos o de los resultados de búsqueda.
- No usar superlativos ni afirmaciones como "el mejor" o "el más barato".
- Copiar las tallas, los materiales y los nombres de marca exactamente de los datos del producto.
- Usar solo el formato de los ajustes de estructura.
- Usar la misma forma de tratamiento y la misma ortografía en todo el texto.

Para añadir sus propias reglas, use **Your own rules**, por ejemplo "mencionar siempre el país de fabricación".

![Las reglas estándar de Fozzels y sus propias reglas](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-15-standard-rules.png)

#### Campos adicionales: pautas cortas, no prompts separados

Si seleccionó más de un campo en el paso 2, la IA rellena los campos adicionales en la misma solicitud, con el mismo prompt principal. El rol, la audiencia, el tono, las fuentes y las reglas se aplican a ellos automáticamente. Así no tiene que escribir un prompt separado para cada campo. Solo escribe una pauta corta: qué contiene el campo, qué longitud tiene y en qué forma.

Fozzels ya ha preparado una propuesta para cada campo. Consérvela, o cámbiela con **Edit guideline**. El enlace "Change fields in step 2" le lleva de vuelta a la selección de los campos.

![Campos adicionales y el resumen Your prompt](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-16-extra-fields.png)

**El editor de pautas.** A la izquierda, ve el texto de la pauta. A la derecha, ve la **Preview**: la misma pauta con los valores reales de un producto. Use las flechas de la **Preview** para ir a otro producto.

- **Atributos como variables.** Fozzels añade al texto los atributos del panel **Attributes** como etiquetas verdes. Un bloque condicional amarillo "if…" añade una línea solo cuando el producto tiene un valor para ese atributo. Puede ordenar el panel por grado de cumplimentación y buscar en él. El número de un atributo muestra cuántas veces lo usa.
- **Snippets.** Sus snippets de instrucciones guardados están a la derecha.
- **Plantillas.** Haga clic en **Save as template** para guardar una pauta como plantilla. Haga clic en **Load** para usarla en otro Flow.
- **AI Assistant.** El asistente le ayuda a escribir o cambiar la pauta. Puede añadir el resultado, ponerlo en la posición del cursor, sustituir el texto por él o copiarlo.

Para una descripción completa del editor, consulte [4.3.2 Configuración y uso del prompt: el nuevo editor de prompts](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/).

![El editor de pautas con la Preview, los atributos y los snippets](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-17-guideline-editor.png)

![El AI Assistant en el editor de pautas](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-18-ai-assistant.png)

El icono del engranaje junto al nombre del campo abre los ajustes del atributo. Aquí define:

- si Fozzels usa el atributo,
- si puede filtrar por él,
- si Fozzels puede escribir contenido en él y actualizar su tienda,
- si los productos hijo reciben el valor del producto padre,
- si se permite HTML.

También puede traducir el nombre del atributo a otros idiomas. Esto ayuda a la IA a entender qué contiene el atributo. Cuando guarda esta ventana, Fozzels no envía nada a su tienda.

![Ajustes del atributo](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-19-attribute-settings.png)

#### Su prompt

Al final del paso, ve un resumen: el número de campos del Flow, el número de bloques activados y todos los bloques activos, desde el rol y la audiencia hasta las reglas de control. Ve los textos reales en el paso 5, cuando prueba el prompt con productos reales.

### Paso 4. Fields

En este paso, define la longitud y la estructura del texto de cada campo. Los campos son pestañas en la parte superior. Haga clic en **+** para añadir un campo, y haga clic en la cruz para quitar un campo. Todos los ajustes del paso **Enrich the text** se siguen aplicando a cada campo.

**Longitud del texto.** El número aproximado de palabras que escribe la IA: **Short** (unas 60), **Normal** (unas 120), **Long** (unas 200) o **Custom** (su propio valor).

**Trust block.** Un bloque corto al final del texto. Da confianza en el producto y en su tienda a los compradores y a los agentes de IA. Escriba qué hace fiable a su tienda, por ejemplo una alta satisfacción de los clientes, tiendas físicas, devoluciones gratuitas, una garantía o un sello de calidad. El bloque se convierte en una sección separada al final del texto. Hay dos opciones:

- **Same block in every description** (recomendado): Fozzels añade el bloque palabra por palabra después de cada texto. El bloque siempre es correcto, y el prompt es más corto.
- **AI mentions it where it fits**: la IA escribe estos puntos con sus propias palabras, solo donde encajan.

Puede dar al bloque un encabezado, por ejemplo "Pedidos y entrega", y una lista de puntos.

![Paso 4: la longitud del texto y el Trust block](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-20-step-4-length-trust-block.png)

**Estructura y formato.** El orden de las partes del texto en su tienda. Fozzels prepara la estructura predeterminada para este tipo de texto. Puede cambiarla:

- **Format**: HTML (h2, h3, h4, p, ul) o texto plano.
- **Sections**: cada sección tiene un nivel de encabezado (H2, H3 …), una forma (encabezado, párrafo o lista con viñetas) y su propia instrucción. Arrastre una sección para cambiar el orden. Haga clic en la cruz para quitar una sección.
- **+ Custom section**: añade su propia sección.

![Estructura y formato: las secciones de una descripción](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-21-structure-sections.png)

Haga clic en el icono del lápiz para abrir el editor de secciones. Aquí define el encabezado, el nivel, la instrucción, la forma, el número aproximado de palabras y una condición. La condición define cuándo Fozzels añade la sección al texto: **Always include**, **Only if a field is filled** u **Only if a building block is on**.

![Editar una sección y su condición](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-22-edit-section.png)

### Paso 5. Test

En este paso, ve productos de su selección. Para cada producto, puede ver el prompt exactamente como lo recibe la IA: haga clic en **View the filled-in prompt for this product**. Haga clic en **Test** para ver el texto que la IA escribe para ese producto, junto al texto actual. Si no le gusta el resultado, vuelva a los bloques del paso 3.

Fozzels sugiere algunos productos de su selección para la prueba. Para añadir otros productos, búsquelos. Para quitar un producto, haga clic en la cruz.

:::note
Una prueba escribe un texto real con su modelo de IA. Fozzels lo cobra igual que todos los demás textos. Las puntuaciones también usan tokens.
:::

![Paso 5: productos de prueba](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-23-step-5-test-products.png)

Después de la prueba, Fozzels muestra la puntuación total del texto actual y del texto nuevo, y la mejora, por ejemplo 12 → 69, o +57. Debajo, ve una puntuación de 0 a 100 para cada tema, con una explicación corta para el texto actual y para el texto nuevo.

| Tema | Qué puntúa Fozzels |
|---|---|
| SEO | ¿Pueden los compradores encontrar el texto en Google? Una palabra clave al principio, una buena longitud, frases fáciles de leer. |
| GEO | ¿Pueden los buscadores de IA y los agentes de compra encontrar el texto? Datos concretos que pueden verificar. |
| AI readability | ¿Puede un modelo de lenguaje entender el texto de inmediato? Una estructura clara. |
| Keywords | ¿Contiene el texto los términos de búsqueda seleccionados de forma natural, sin demasiadas repeticiones? |
| Internal links | ¿Contiene el texto los enlaces seleccionados, con un texto de enlace que indica adónde llevan? |
| Conversion | ¿Da el texto un motivo para comprar, elimina dudas y da confianza en el momento correcto? |
| Neuromarketing | ¿Usa el texto la simulación, la congruencia, la confianza y la fluidez de procesamiento? |

Fozzels calcula las puntuaciones sobre el propio texto, a partir de los bloques activados en este Flow. No cuenta los temas de los bloques desactivados, por ejemplo **Internal links**.

![Puntuaciones del texto actual y del texto nuevo para cada tema](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-24-test-scores.png)

### Paso 6. Launch

El último paso tiene tres preguntas y, si es necesario, ajustes avanzados.

1. **How many products per day?** 10, 25, 50, 100 o su propio número. El límite mantiene bajos los costes y el trabajo de revisión. Cuando Fozzels ha completado la selección actual, el Flow toma automáticamente los productos nuevos que coinciden con ella.
2. **What happens with a new text?**
    - **I approve every text first** (recomendado): los textos nuevos van a su lista de revisión. Fozzels no envía nada a su tienda antes de que usted lo apruebe.
    - **Straight to my shop**: Fozzels publica los textos automáticamente. Todavía puede editarlos o volver a la versión anterior.
3. **If a product changes later?** Si cambia un atributo que usa el prompt, por ejemplo el color o el material, Fozzels puede escribir un texto nuevo automáticamente. Cuando el interruptor está desactivado, Fozzels escribe un texto para un producto solo una vez.

En **Advanced settings**, puede evitar que otros Flows vuelvan a generar el mismo contenido:

- **Use default**: el cooldown de su configuración general.
- **Override**: su propio cooldown para este Flow, en semanas.
- **Turn off**: sin cooldown. Fozzels no genera un texto nuevo solo porque ha pasado el tiempo.

Para más información, consulte [Función de prevención de generación de contenido superpuesto](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).

En **Advanced settings**, también puede hacer clic en **Connect workflow** para añadir una acción que se ejecuta después de cada texto, por ejemplo una traducción al alemán o una nueva meta description.

Haga clic en **Launch flow** para iniciar el Flow, o en **Save as draft** para continuar más tarde.

![Paso 6: ajustes de lanzamiento](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-25-step-6-launch.png)

## Después del lanzamiento: la página del Flow

Después del lanzamiento, ve el mensaje "Your flow is running" y un botón que abre la página del Flow.

![El mensaje Your flow is running](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-26-flow-running.png)

La página del Flow muestra toda la información del Flow en una sola pantalla:

- **Product selection**: el filtro que selecciona los productos, y el número de productos.
- **System prompt**: la parte del prompt que Fozzels envía con cada solicitud, antes de las instrucciones de los campos: el rol, la audiencia, el tono, los principios, las palabras clave, las palabras que se deben evitar y las reglas.
- **Attributes to generate**: los campos que genera Fozzels. Fozzels los crea todos en una sola solicitud de IA por producto, con un prompt principal común.
- **Status**, **AI Configuration**, **Automation**, **Workflows**: el estado y el progreso, el modelo y su precio, el límite diario, la publicación automática, el umbral de confianza, el cooldown y las acciones conectadas. Para cambiar un bloque, haga clic en su botón **Change**.

![La página del Flow en Expert view](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-27-flow-page-expert-view.png)

En la barra superior, puede cambiar entre **Step by step** y **Expert view**, y abrir el contenido generado (**Generated content**), la prueba y la programación. El menú **…** contiene:

- **Run Now**: inicia la generación de inmediato, también cuando el Flow ya ha alcanzado el límite diario de hoy.
- **Duplicate**, **Archive** y **Delete**. Para más información, consulte [4.1.3. Gestión de flujos: duplicación, archivo y eliminación](/content-creation-flows/managing-flows-duplication-archiving-and-deletion/).

![El menú del Flow con Run Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-28-flow-menu-run-now.png)

**Workflows.** Para añadir una acción de workflow al Flow:

1. En el bloque **Workflows**, haga clic en **Change**.
2. Seleccione una acción de la lista, por ejemplo "Product is in".
3. Haga clic en **Add**.
4. Haga clic en **Save**.

![Añadir un workflow al Flow](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-29-add-workflow.png)

Para más información, consulte [4.11.1. Workflows. Lección 1: primeros pasos con Workflows](/content-creation-flows/workflows-lesson-1-getting-started/).

**Test en la página del Flow.** Abre una tabla con todos los productos de la selección. Para cada producto, ve el SKU, el nombre, una miniatura y el prompt. Haga clic en **Generate Now** en una fila para generar contenido para ese producto de inmediato, sin esperar a la programación. Puede buscar en la tabla, ir a otras páginas y elegir las columnas que se muestran.

![La tabla de productos del Flow con el botón Generate Now](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-30-flow-product-table.png)

### Contenido generado: revisar y aprobar

Haga clic en **Generated content** para abrir la lista del contenido generado (**Content Completion List**). Para cada producto, ve el SKU, el nombre, una miniatura, el prompt, todos los campos generados y las fechas en que Fozzels creó y ejecutó la solicitud. Cada columna tiene un filtro. El interruptor **Confirmed** muestra si un texto está aprobado. Para hacer una acción en muchos textos a la vez, seleccione las filas y elija la acción en el menú **Actions**.

![La lista del contenido generado](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-31-generated-content-list.png)

Haga clic en una fila para abrir la ventana **Edit completion result**:

- **Campo principal**: el texto a la izquierda, y a la derecha una **Preview** que muestra cómo se ve el texto en su tienda. Haga clic en **Show HTML** para ver el código HTML, o en **Enable Editor** para usar el editor visual.
- **Otros campos del Flow**: debajo del campo principal, puede examinar y editar los demás campos que rellenó este Flow, como **SEO Description** y **SEO Title**.
- **Batch Confirmed**: marca el resultado como aprobado. Encima de los botones, ve el estado de sincronización con su tienda.
- **Botones**: **Save**, **Save & Sync** (guarda el texto y lo envía a su tienda de inmediato), **Regenerate**, **Show Revisions** (versiones anteriores) y **Copy to Clipboard**.

![La ventana Edit completion result](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-32-edit-completion-result.png)

Para más información, consulte [4.7.5 Edición de contenido en la Batch List. Editor de texto enriquecido](/content-creation-flows/editing-content-in-the-batch-list-rich-text-editor/) y [4.7.4 Palabras y frases sospechosas](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/).

## Dos modos: Step by step o Expert view

Use el modo que prefiera. Puede cambiar entre los modos en cualquier momento con un clic.

| Modo | Qué muestra | Ideal para |
|---|---|---|
| Step by step | Un asistente guiado, un paso cada vez. | Flows nuevos y nuevos miembros del equipo. |
| Expert view | El Flow completo en una sola página, también los ajustes avanzados. | Usuarios con experiencia que quieren ver todos los ajustes a la vez. |

Los ajustes avanzados de **Expert view** incluyen el umbral de confianza, el cooldown entre Flows y lo que hace Fozzels cuando un producto todavía no tiene imagen.

Cuando crea un Flow nuevo, Fozzels le da un nombre a partir de sus selecciones. Puede cambiar el nombre y volver al nombre sugerido con un clic.

## Brand Profile: la voz de su marca en un solo lugar {#brand-profile}

El **Brand Profile** es una página separada en la configuración de su cuenta. Define con qué empieza cada Content Flow nuevo:

- el modelo de IA,
- quién escribe, para quién y con qué tono,
- los principios de neuromarketing y las palabras clave,
- lo que nunca debe aparecer en el texto.

Todavía puede cambiar cada uno de estos ajustes en un Flow. Cuando cambia el perfil, Fozzels no cambia sus Flows existentes.

![La página Brand Profile](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/v3-33-brand-profile.png)

### Más de un perfil

Cree un perfil separado para cada marca, tienda o línea de productos, por ejemplo uno para descripciones y SEO, uno para FAQ, uno para textos ALT o uno para una oferta.

- **New profile**: escriba un nombre, por ejemplo B2B, Outlet o Línea premium, y haga clic en **Create**.
- **Rename** / **Delete**: cambie el nombre de un perfil o elimínelo. No puede eliminar el perfil predeterminado. Primero convierta otro perfil en el predeterminado.
- **El perfil predeterminado**: cada Flow nuevo empieza con él. En el paso **Enrich the text**, puede cargar otro perfil o guardar los ajustes del Flow como un perfil nuevo.

### Modelo de IA

Seleccione un proveedor (OpenAI (ChatGPT), Anthropic, xAI o Google Gemini) y un modelo. Los Flows nuevos empiezan con este modelo, pero puede seleccionar otro modelo en cada Flow.

### Rol, audiencia y tono

Active cada bloque con su interruptor. Las opciones guardadas son botones. Haga clic en un botón para seleccionar una opción. Debajo de los botones, ve la descripción completa que recibe la IA. Haga clic en el icono del lápiz para editar la descripción, o haga clic en **+ New…** para crear una opción nueva.

- **Role of the AI**: quién escribe el texto y desde qué punto de vista, por ejemplo Webshop copywriter, SEO specialist, Brand storyteller o Shop assistant.
- **Target audience**: quién lee el texto: la edad, el estilo de vida, cómo dirigirse al lector y qué es importante para él.
- **Tone of voice**: cómo habla su marca a los clientes, con sus propias palabras. Si no selecciona un tono, la IA escribe con un estilo neutro e informativo.

### Principios de neuromarketing en el Brand Profile {#neuromarketing-principles-in-the-brand-profile}

Cada principio añade una regla de redacción al prompt. Puede seleccionar más de un principio. Se refuerzan entre sí.

| Principio | Regla de redacción | Funciona para |
|---|---|---|
| Processing fluency | Frases cortas, una primera línea clara, pocas afirmaciones, un orden lógico. | Compras cotidianas, comparaciones, precios bajos. |
| Simulation | El cliente se imagina que usa el producto: una situación, un momento, lo que siente. | Productos nuevos, especiales o emocionales. |
| Congruence | El texto coincide con la foto y con el producto que el cliente recibe en casa. No hace promesas que el producto no cumple. Así hay menos devoluciones. | Productos en los que la expectativa y el producto real deben coincidir. |
| Trust | Honesto, concreto y cercano. Datos que el cliente puede comprobar, no un discurso de ventas ingenioso. | Compras más caras, marcas desconocidas, clientes nuevos. |

### Palabras clave, palabras que evitar y sus propias instrucciones

- **Keywords**: los términos de búsqueda con los que los compradores deben encontrar el texto. En un Flow, Fozzels también puede sugerir términos para sus productos. Si no selecciona palabras clave, Fozzels elige un término para cada producto a partir de su título y su categoría.
- **Do not mention**: palabras y temas que no deben aparecer en el texto: precios, descuentos, nombres de competidores, afirmaciones como "el mejor" o "el más barato". La IA no los usa, aunque estén en sus fuentes.
- **Own instructions**: otra información que la IA debe saber, con sus propias palabras, por ejemplo cómo dirigirse al lector o qué mencionar siempre, como "enviamos en 24 horas". Fozzels añade este texto al system prompt después de los bloques, una línea por cada párrafo.
