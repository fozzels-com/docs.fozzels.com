---
title: "Novedades de Fozzels: octubre de 2026"
sidebar_position: 18
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026
description: >-
  Rellene hasta 13 atributos en un solo Flow, configure reglas de calidad
  automáticas con Workflows, cree prompts en un nuevo editor con vista previa en
  directo y evite que los errores de la IA lleguen a su tienda con nuevas
  protecciones.
---

Esta actualización está pensada para ahorrarle tiempo y darle más control sobre su contenido de IA. Ahora puede rellenar hasta 13 atributos en un solo Flow, configurar reglas de calidad automáticas con Workflows y crear prompts en un nuevo editor con vista previa en directo.

También hemos añadido un conjunto de protecciones que evitan que los errores de la IA lleguen a su tienda. Esto es todo lo nuevo y cómo empezar a usarlo.

## Novedades destacadas

### Rellene hasta 13 atributos en un solo Flow

Ya no necesita un Flow distinto para cada atributo. Un solo Flow puede rellenar un atributo principal y hasta 12 más, por ejemplo una descripción, una descripción corta, un meta title y una meta description. Todos los atributos se generan juntos en una sola solicitud de IA por producto, de modo que los datos y las imágenes del producto se envían una sola vez y los textos encajan entre sí de forma natural.

![Additional attributes to fill: añada hasta 12 atributos, cada uno con su propia instrucción](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/01-additional-attributes.png)

En Batch List, cada atributo tiene su propia columna, así que puede revisar todos los resultados de un producto en una sola fila.

![Batch List con una columna para cada atributo generado](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/02-batch-list-columns.png)

**Cómo usarlo:** abra un Flow, vaya a Flow Selection & Prompt y, en Additional attributes to fill, añada los atributos que necesite con una instrucción para cada uno. [Lea la guía](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)

### Workflows: reglas de calidad automáticas

Los workflows revisan y editan cada resultado generado antes de que llegue a su tienda. Usted define reglas sencillas "IF / THEN" una sola vez y Fozzels las aplica a cada nuevo resultado:

- **Replace text:** cambie o elimine palabras y frases, por ejemplo para mantener la coherencia de los términos de su marca.
- **Truncate:** recorte un texto hasta una longitud máxima, conservando las palabras completas.
- **Mark suspicious:** retenga un resultado para revisión manual, con un motivo que su equipo pueda ver.

![Elección de una acción para un bloque de workflow: Truncate, Mark suspicious o Replace text](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/03-workflow-actions.png)

Puede encadenar varios workflows en un mismo Flow, y un resultado marcado nunca se sincroniza hasta que alguien lo revisa.

![Editor de workflow con bloques IF / THEN encadenados](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/04-workflow-editor.png)

**Cómo usarlo:** vaya a Home → Workflows, cree un workflow y asígnelo a un Flow en el paso Automation. [Lea la guía](/content-creation-flows/workflows-lesson-1-getting-started/)

### Un nuevo editor de prompts con vista previa en directo

Crear un prompt es ahora mucho más fácil. Los atributos y las condiciones aparecen como bloques claros, y la vista previa en directo muestra el prompt exacto para un producto real mientras escribe, así que ya no necesita guardar y abrir una vista previa para comprobarlo. Escriba / o arrastre un atributo desde el panel para añadir datos del producto.

¿Necesita ayuda? Pregunte a Jane, nuestra asistente de IA: puede escribir y ajustar prompts por usted directamente en el editor. [Lea la guía](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)

![El nuevo editor de prompts con vista previa en directo, snippets y Jane insertando un prompt ya preparado](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/05-prompt-editor.png)

### Snippets de prompt reutilizables

Guarde las partes de sus prompts que usa en muchos Flows, como el tono de voz de su marca o una lista de atributos agrupados por tema. Añada un snippet a cualquier prompt con un solo clic. Cuando actualiza un snippet, se actualizan también todos los Flows que lo usan, así que nunca tendrá que editar los Flows uno por uno.

### Textos de categoría que conocen sus productos

Los Flows de categoría ahora pueden incluir en el prompt los productos de la categoría, con sus nombres, enlaces, slugs y otros atributos. Las descripciones de sus categorías pueden mencionar productos reales e incluir enlaces funcionales a las páginas de producto, lo cual es excelente para el SEO y ayuda a los compradores a encontrar lo que necesitan.

### Nuevos modelos de IA: GPT-6 Astra y Claude Opus 5.5

Los modelos más recientes y potentes ya están disponibles en sus Flows. GPT-6 Astra también admite la búsqueda web, incluso en el Sandbox, por lo que puede añadir información útil que no está en su catálogo. Los modelos premium cuestan más por generación; puede ver el precio en cada tarjeta de modelo en el paso AI Configuration.

![Claude Opus 5.5](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/06-claude-opus-5-5.png)

## Contenido de IA más seguro

Los modelos de IA a veces inventan datos, suponen el aspecto de un producto o dejan notas en el texto. Hemos añadido protecciones en cada paso para que solo llegue a su tienda contenido fiable.

- **Confidence threshold.** Configúrelo por Flow en el paso Automation, de 0.1 a 1.0. La IA indica qué grado de certeza tiene sobre cada valor, y todo lo que quede por debajo de su umbral espera su revisión en lugar de enviarse automáticamente. Déjelo vacío para desactivarlo.

    ![Confidence threshold en el paso Automation](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/07-confidence-threshold.png)

- **Detección más inteligente de contenido sospechoso.** La lista predeterminada de palabras y frases sospechosas es más larga, y los nuevos patrones integrados reconocen la forma típica de un comentario de IA, como "Here is the…" o "Final check", incluso con formulaciones que el modelo nunca había usado. Puede activar o desactivar patrones y añadir sus propias palabras en los ajustes de la integración.

    ![Palabras sospechosas y patrones integrados en los ajustes de la integración](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/08-suspicious-patterns.png)

- **Una comprobación de funciones desactivadas.** Al guardar un Flow, Fozzels comprueba si su prompt necesita una función que está desactivada, por ejemplo la búsqueda web o las imágenes de producto. Un aviso le indica qué falta, con un botón para abrir AI Configuration o preguntar a Jane.

    ![Aviso cuando su prompt necesita búsqueda web o imágenes de producto que están desactivadas](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/09-disabled-features-warning.png)

- **Sin suposiciones cuando faltan imágenes.** Si su Flow usa imágenes de producto pero un producto no tiene ninguna, o no se pueden leer, ese producto se omite en lugar de que la IA haga suposiciones.
- **Solo modelos fiables.** Hemos retirado los modelos obsoletos y los modelos que podían dejar su razonamiento en sus textos.
- **Instrucciones integradas más estrictas.** Todos los Flows incluyen ahora instrucciones generales más estrictas que mantienen a la IA ceñida a los hechos y al formato que usted solicita.
- **Todo Flow necesita un modelo de IA.** Un Flow sin modelo ya no se puede guardar ni iniciar, así que nada falla en silencio.
- **Mensajes de error claros.** Si una generación falla, ahora ve el motivo real en lugar de "Unknown error occurred", para saber qué debe corregir.

## Flows de imágenes

- **Duplique un Flow de imágenes.** Copie un Flow de imágenes existente con todos sus ajustes preestablecidos, escenas, logotipo y prompt, y cambie solo lo que sea distinto.
- **Una imagen de producto adicional para todo el Flow.** En Additional product image for the whole flow, elija una posición de imagen, por ejemplo la 2.ª imagen. Fozzels la añade a cada producto además de la imagen principal, de modo que la IA ve más ángulos y reproduce con más precisión el corte, la estampación y la textura. Los productos con menos imágenes usan solo la imagen principal.

    ![Additional product image for the whole flow: elija la posición de la imagen](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/10-additional-product-image.png)

- **Run Now respeta su límite diario.** Las ejecuciones manuales ahora cuentan para la cantidad de productos por día del Flow. Si ya se ha alcanzado el límite, verá un aviso con lo que puede hacer: aumentar la cantidad en el paso Automation o ejecutar el Flow más tarde. Las generaciones de prueba gratuitas en la vista previa no cuentan.

## Catálogo y Batch List

- **Actualice los productos seleccionados.** ¿Ha cambiado unos pocos productos en su tienda? Vuelva a importar solo esos productos en lugar de todo el catálogo y genere contenido nuevo de inmediato.

    ![Actions → Repull Selected Products en Manage Products](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/11-repull-selected-products.png)

- **Conjuntos de filtros guardados.** Guarde una combinación de filtros una sola vez, por ejemplo "Women - empty descriptions", mediante Filter set → Save as new. Aplíquela con un clic en las integraciones, el catálogo y los Flows, y añada condiciones adicionales cuando las necesite.

    ![Guarde una combinación de filtros mediante Filter set → Save as new](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/12-filter-set-save.png)

    ![Un conjunto de filtros guardado, listo para aplicar con un clic](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/13-filter-set-saved.png)

- **Elija las columnas de Batch List.** Usted lo pidió, nosotros lo hemos creado. Configure cualquier atributo para que se muestre siempre en Batch List con una casilla en sus ajustes, y elija qué atributos del prompt se muestran por Flow en Column visibility.

    ![Column visibility en Batch List](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/14-column-visibility.png)

- **Informes más completos.** Añada columnas adicionales con atributos generados a sus informes exportados, listos para compartir con su equipo.
- **Revisión más fluida.** La ventana emergente de revisión ahora se desplaza automáticamente.
- **Activación de Flows más clara.** Al activar un Flow, Fozzels muestra exactamente qué se activará y qué otros Flows se reanudarán.

## Jane y su cuenta

- **Jane conoce el nuevo editor.** Nuestra asistente de IA ahora funciona con el nuevo editor de prompts y con los Flows de varios atributos. Pídale que lea, escriba o actualice sus prompts.
- **Correo electrónico de finanzas independiente.** Envíe las facturas y las notificaciones de saldo a la dirección de finanzas o contabilidad en lugar de a su correo de inicio de sesión.
- **Zona horaria según el país.** Las cuentas nuevas reciben automáticamente la zona horaria de su país, de modo que las importaciones se ejecutan a la hora local correcta.
- **Ayuda para la conexión.** Si una integración no puede conectarse, por ejemplo por un firewall, Fozzels le envía a una página del Centro de ayuda que explica qué debe permitir.

## Actualizaciones de integraciones

**Magento 2**

- **Contenido de blog y CMS (primer paso).** Fozzels ahora importa el contenido de su blog y CMS con sus atributos y lo muestra en un catálogo y una página de marca independientes. La generación de contenido con IA para blogs y páginas CMS llegará en una próxima actualización.

    ![Manage Blog: páginas CMS de Magento 2 importadas](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/15-manage-blog.png)

- **Filtre por estado y cantidad de stock**, para centrarse en los productos que tienen existencias, por ejemplo solo los productos con más de 10 unidades disponibles. Active Pull stock status y Pull stock quantity en los ajustes de su integración.

    ![Pull stock status y stock quantity en los ajustes de la integración de Magento 2](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/16-stock-settings.png)

- **Sincronice imágenes con All Store Views.** Los resultados de los Flows de imágenes ahora se pueden sincronizar con el ámbito All Store Views, de modo que una sola sincronización actualiza todas las vistas de tienda.

**WooCommerce**

- **Textos alternativos para las imágenes de producto**, para mejorar el SEO y la accesibilidad.

**Salesforce**

- **Filtrado de stock y condiciones de importación** a nivel de integración, para que importe solo los productos que necesita.

**CSV / Raw File**

- **Archivos más grandes**: ahora se admiten gracias a la paginación.

**BizzLayer**

- **Los productos eliminados de su feed** ya no se usan para generar contenido.

## Correcciones

- Los caracteres especiales, como & en los nombres de producto, ahora se muestran correctamente en su tienda.
- El recuento de productos en los Flows ahora coincide con su selección real.
- El progreso de sincronización de un Flow ya no cuenta los productos eliminados.

    ![Progreso de un Flow que muestra por separado los productos eliminados del catálogo](/img/kb/fozzels-releases-updates/whats-new-in-fozzels-october-2026/17-flow-progress.png)

- Los filtros de los Flows antiguos ahora pasan los productos a Batch List correctamente.
- El prompt y la vista previa del producto se actualizan automáticamente cuando cambia los filtros del Flow.
- Los Flows de imágenes activos ya no aparecen como inactivos.
- La generación de imágenes ya no se detiene con imágenes grandes o no disponibles.

¿Tiene preguntas sobre alguna de estas actualizaciones? Pregunte a Jane en la aplicación.
