---
title: "Novedades de Fozzels: octubre de 2026, parte 2"
sidebar_position: 19
slug: /fozzels-releases-updates/whats-new-in-fozzels-october-2026-part-2
description: >-
  Workflows que regeneran textos con feedback de la IA, regeneración de imágenes
  con nuevos ajustes, exportación flexible a Excel y CSV, mejores textos ALT,
  nuevos modelos de IA, chat de voz con Jane y etiquetas de IA automáticas para
  imágenes y vídeos.
---

La segunda parte de nuestras actualizaciones de octubre lleva su contenido al siguiente nivel. Esto es lo que le espera:

- **Un nuevo nivel de calidad en los resultados.** Un nuevo tipo de workflow con validación y feedback de IA: Fozzels revisa sus textos y los sigue mejorando hasta que son correctos.
- **Aún más cerca de la imagen perfecta.** Al regenerar imágenes, ahora puede cambiar la foto de producto de origen, el modelo de IA, el prompt y los ajustes preestablecidos.
- **Sus resultados, sus hojas de cálculo.** Descargue informes en Excel o CSV y elija exactamente qué datos se incluyen en el archivo.
- **Textos ALT con sentido, incluso donde antes había marcadores de posición.** Fozzels ahora encuentra las imágenes cuyo ALT es solo un nombre de archivo y crea descripciones reales para ellas.
- **Nuevos modelos de IA, chat de voz con Jane y etiquetas de IA automáticas** para imágenes y vídeos.

Esto es todo lo nuevo y cómo empezar a usarlo.

## Novedades destacadas

### Regeneración automática: textos que siguen sus reglas

Los workflows ahora pueden regenerar un texto automáticamente cuando no cumple sus requisitos. Añada la nueva acción **Regenerate with feedback** a cualquier bloque de workflow: el texto se retiene para revisión junto con el motivo, y Fozzels lo genera de nuevo en segundo plano usando ese feedback. En **Maximum regenerations**, usted elige cuántos intentos permitir, hasta 3.

Si usa la validación con IA (la condición **AI validation fails**), las solicitudes de IA adicionales para la comprobación se cobran por separado.

**Incluso sin workflow.** Si no ha configurado un workflow de este tipo, Fozzels regenera igualmente los textos marcados como sospechosos, pero sin feedback, según las reglas habituales de contenido sospechoso, y no de inmediato, sino en la siguiente ronda de generación.

**Nueva acción: Sanitize text.** Limpia un texto del mismo modo que lo hace una nueva generación: corrige caracteres codificados como `&amp;`, convierte el markdown y elimina las etiquetas HTML no permitidas.

### Exportación flexible a Excel y CSV

Ahora puede exportar los resultados a Excel o CSV y elegir exactamente qué columnas se incluyen en el archivo, por ejemplo solo el SKU y la descripción generada. Asigne a la columna del texto generado el nombre del código de atributo, y el archivo estará listo para importarlo en su tienda o ERP. Fozzels recuerda su selección para la próxima vez.

### Regenere imágenes con nuevos ajustes

¿No está satisfecho con una imagen generada? El botón Regenerate en los resultados de su Image Flow ahora abre una ventana en la que puede ajustar la configuración de ese resultado concreto antes de volver a generarlo:

- **Fotos de producto.** Elija a partir de qué fotos de producto trabaja la IA, por ejemplo otra foto principal si el ángulo original no era el mejor. Puede seleccionar varias fotos, tantas como admita el modelo.
- **Modelo de IA.** Cambie a otro modelo, como Nano Banana en lugar de GPT Image, y modifique el formato, el tamaño o el número de imágenes.
- **Prompt y ajustes preestablecidos.** Ajuste las instrucciones o añada, cambie y elimine ajustes preestablecidos como el fondo, el estilo o la escena.

Sus cambios se aplican solo a este resultado: los ajustes del Flow no cambian y los demás productos se generan como antes. Tenga en cuenta que la nueva imagen sustituye de forma permanente a la anterior; la ventana se lo recuerda antes de empezar.

La página del resultado ahora también muestra más detalles: cuándo se creó, generó y regeneró la imagen, el número de imágenes, el estado del Flow y qué modelo de IA se utilizó.

### Encuentre imágenes con textos ALT de relleno

A menudo el ALT de una imagen está técnicamente rellenado, pero es solo un marcador de posición: un nombre de archivo como "IMG_2045.jpg" o simplemente el nombre del producto. Para los compradores y los motores de búsqueda, eso es casi lo mismo que no tener ALT, pero Fozzels consideraba esos textos ALT como rellenados y omitía estas imágenes.

Los ALT Flows tienen ahora una nueva condición de Media Gallery, **has an image whose ALT contains**. Por ejemplo, introduzca ".jpg" y Fozzels encontrará todas las imágenes cuyo ALT es solo un nombre de archivo y generará textos ALT con sentido para ellas. Para incluir también las imágenes sin ningún ALT, añada un grupo de condiciones con "has an image with an empty ALT" y su condición de ALT, y configúrelo como "Any condition".

### Etiquetas de IA en las imágenes y vídeos generados

Cada imagen y vídeo generado por Fozzels lleva ahora una etiqueta integrada y legible por máquina que lo identifica como generado por IA, de acuerdo con los requisitos de transparencia de la Ley de IA de la UE. La etiqueta se guarda en los metadatos del archivo, por lo que es invisible para los compradores y no cambia el aspecto de sus imágenes, pero se mantiene tras la sincronización con su tienda.

En el caso de las imágenes, también puede verla en Fozzels: el historial de versiones del resultado muestra el paso **Labelled as AI-generated**.

**Por qué es importante:** puede usar elementos visuales creados con IA en su tienda con total confianza, sin añadir etiquetas manualmente.

### Hable con Jane

Ahora puede hablar con Jane en lugar de escribir. Haga clic en el micrófono del campo de chat, haga su pregunta, y Jane puede leerle su respuesta en voz alta. ¿Prefiere el silencio? Desactive las respuestas habladas con el icono del altavoz junto al micrófono.

### Nuevos modelos de IA

Seguimos ampliando nuestra oferta de modelos en cuanto los proveedores de IA publican nuevos modelos, para que siempre pueda elegir el más adecuado para cada tarea.

**Para textos**

**Gemini 4 Argon.** El nuevo modelo insignia de Google, diseñado para la precisión. Es uno de los modelos con menos tendencia a inventar datos, lo que lo convierte en una excelente opción para contenido de producto detallado y con muchas especificaciones.

**Claude Haiku 5.5.** El modelo más rápido y asequible de Anthropic, ideal para generar contenido para catálogos grandes.

**Para imágenes**

**GPT Image 2.5 Flare.** Creación y edición de imágenes rápida y de alta calidad para el uso diario.

**GPT Image 2.5 Sunburst.** La opción de mayor calidad de OpenAI, con ediciones precisas que mantienen sin cambios el resto de la imagen, incluido su producto.

**Nano Banana 2.1.** Mejor calidad y un precio más bajo que Nano Banana 2.

**Para vídeos**

**HeyGen Video 1.0.** Una alternativa mucho más asequible a Veo.

También hemos retirado los modelos más antiguos GPT-4.1 y GPT Image 1.

## Calidad del contenido

- **Menos falsos avisos de contenido sospechoso.** La comprobación de contenido sospechoso es ahora más precisa. Las especificaciones de producto habituales con números, como "Breite – 80", "+25 °C" o "= 60", ya no se marcan. Solo se marcan como sospechosos los cálculos reales que la IA ha dejado por error en el texto, como "59 + 1 = 60", así que dedica menos tiempo a revisar textos que están bien.
- **Menos comentarios de la IA en sus textos.** Hemos reforzado aún más la protección para evitar que las notas internas del modelo de IA acaben en su contenido final.
- **Jane mantiene intactos sus atributos.** Cuando Jane reescribe un prompt, ahora inserta correctamente atributos como `{{name}}` o `{{ean}}`, para que sus prompts sigan funcionando con datos reales de producto.

## Flows de imágenes y vídeos

### Imágenes generadas que se mantienen actualizadas

Los Image Flows tienen una nueva opción: **Process the product again when its source image changes**. Cuando en su tienda se sustituye, elimina o añade una imagen en la posición de la galería que usa su Flow, Fozzels lo detecta en la siguiente importación de productos y genera una nueva imagen a partir de la foto actualizada.

Conviene saber:

- Las imágenes creadas por Fozzels no cuentan como cambio, aunque hayan sustituido a la foto original, y los productos con imágenes seleccionadas manualmente nunca se vuelven a procesar.
- Solo se comprueban los resultados creados después de activar la opción, así que no habrá regeneraciones masivas inesperadas.
- Cada nueva generación se cobra como de costumbre. Hasta que la nueva imagen esté lista, el resultado actual sigue activo.

### También es nuevo

- **Los productos eliminados se marcan claramente.** Los productos borrados de su catálogo ahora muestran también el estado "Removed from catalog" en los Flows de imágenes y vídeos, y ya no se cuentan como "to be synchronized".
- **Se acabaron los reintentos infinitos.** Si una foto de producto ya no se puede descargar, Fozzels deja de reintentarlo y marca la foto como no disponible.
- **Miniaturas para los vídeos generados**, para que pueda reconocerlos de un vistazo.

## Informes y filtros

**Errores de un vistazo.** En el informe de generación, el filtro "Display only with errors" ahora muestra solo las generaciones fallidas, con el mensaje de error real en lugar de "Unknown error occurred".

**Notificaciones tras una reimportación.** Cuando vuelve a importar productos con una acción masiva, ahora recibe de inmediato una notificación con el resultado.

## Aplicación e idiomas

- **Fozzels en italiano.** La aplicación ya está disponible en italiano, y el Centro de ayuda en italiano y francés.
- **Adiós al antiguo Chat Sandbox.** Hemos retirado el chatbot de 2023. Jane, su asistente de IA, siempre está aquí para ayudarle.
- **Pequeñas mejoras en la interfaz.** La primera integración de su cuenta ahora está seleccionada de forma predeterminada en las listas desplegables, y la lista de proveedores de IA ya no se abre sola al abrir un Flow.

## Actualizaciones de integraciones

### Magento

**Textos para todas las vistas de tienda.** Active **Also save as the default value for all store views**, y cada envío guarda el texto en la vista de tienda del Flow y, como valor predeterminado, en todas las demás vistas de tienda. Las vistas de tienda que tienen su propio valor para el atributo siguen mostrándolo.

Conviene saber: si un Flow de otra vista de tienda usa este atributo en su prompt y crea automáticamente un nuevo texto cuando cambia un atributo, tratará el nuevo valor predeterminado como un cambio y generará nuevos textos para los productos que no tengan valor propio.

### Magento y NextChapter

**Sustituya las fotos de producto existentes.** Las nuevas imágenes generadas ahora pueden sustituir a las fotos de producto actuales, y la sustitución se muestra correctamente en la galería de medios de Fozzels tras la sincronización.

### Shopware

**Compatibilidad con imágenes AVIF.** Los productos con fotos AVIF ahora también se pueden usar para la generación de textos: antes de enviarlas a la IA, convertimos estas fotos a un formato compatible con el modelo.

### CSV / Raw File

Los archivos con caracteres ocultos al principio, que hacían que el nombre de la primera columna apareciera entre comillas, ahora se leen correctamente.
