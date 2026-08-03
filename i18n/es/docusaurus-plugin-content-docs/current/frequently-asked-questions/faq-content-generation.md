---
title: 'FAQ: Generación de Contenido'
sidebar_position: 5
unlisted: true
slug: /frequently-asked-questions/faq-content-generation
description: Las preguntas más comunes sobre generación de texto de IA — textos faltantes, límites de lotes, regeneración después de cambios de indicaciones, errores de generación, contenido sospechoso, elección de modelo, tiempo de sincronización y control de costos.
keywords:
- indicación
- instrucción
- finalización
---

## Los productos están en mi flujo pero no se ha generado texto.

La generación puede estar esperando la siguiente ejecución programada. Puede activarla manualmente o ponerse en contacto con el soporte para que la lance por usted.

## ¿Cómo confirmo el contenido generado antes de que se envíe a mi sitio web?

Si su flujo es semiautomático, confirme finalizaciones individualmente o use la acción masiva en la lista de lotes para aprobar múltiples elementos.

## Los productos nuevos han estado en línea durante días pero no tienen textos generados.

La generación programada puede haber sido retrasada. Póngase en contacto con el soporte — pueden volver a extraer productos manualmente e iniciar la generación.

## ¿Puede arreglar textos faltantes para múltiples marcas a la vez?

Sí. Póngase en contacto con el soporte y especifique qué marcas/flujos se ven afectados. Pueden activar la generación para todos a la vez.

## Mi flujo muestra 100% pero cambié la indicación. ¿Por qué no hay nuevos textos?

Cambiar la indicación solamente no dispara la regeneración de textos existentes. Use Mass Action → "Regenerate content", o duplique el flujo.

## ¿Cómo regenero todos los textos de productos después de actualizar mi indicación?

Vaya a finalizaciones, seleccione todo mediante Mass Action y elija "Regenerate content". Alternativamente, desactive el flujo, duplíquelo y active la nueva versión.

## El período de enfriamiento no está desencadenando la regeneración.

El enfriamiento controla el tiempo mínimo entre regeneraciones automáticas, pero no fuerza la regeneración de textos completados. Use Mass Action para regenerar.

## ¿Qué causa errores de generación / finalizaciones fallidas?

Generalmente carga alta del modelo de IA. Indicaciones grandes + salida larga + múltiples imágenes pueden sobrecargar el modelo. Los trabajos fallidos se reintentan automáticamente. Intente indicaciones más cortas o un modelo diferente.

## ¿Cómo puedo ver qué productos no generaron contenido?

Consulte el informe de finalización en [app.fozzels.com/completions/product/completion/report/](https://app.fozzels.com/completions/product/completion/report/) y filtre por fecha con la opción `failed_only`.

## Mi lote parece estar atrapado — no se ha generado texto.

Esto puede ser causado por límites temporales de tokens del proveedor de IA. El sistema vuelve a la normalidad automáticamente. Póngase en contacto con el soporte si persiste.

## La generación de contenido está tomando mucho más tiempo de lo habitual.

Retrasos temporales por límites de uso de tokens. Esto generalmente se resuelve automáticamente. Póngase en contacto con el soporte si la generación permanece atascada.

## Veo "Unknown error" en todos los trabajos.

Esto sucede durante carga pico del sistema. El sistema se reintenta automáticamente. Si 80% o más fallan, póngase en contacto con el soporte — pueden monitorear flujos y activarlos manualmente.

## Mi lista de lotes muestra 500 productos pero mi flujo tiene 3.380 elegibles.

Fozzels limita lotes a 500 productos por **Plan & Close**. Haga clic en "Plan & Close" múltiples veces para encolar lotes adicionales.

## "Run Now" solo agrega 10 productos.

"Run Now" es para pruebas rápidas (10 productos). Use "Plan & Close" para lotes más grandes (hasta 500).

## ¿Cuál es la diferencia entre "Plan & Close" y "Run Now"?

"Run Now" procesa hasta 10 productos instantáneamente para pruebas. "Plan & Close" encola un lote de hasta 500 productos. Use Plan & Close para producción.

## ¿Cuáles son los límites de generación diaria por plan?

Planes inferiores: 10–30 productos/día. Planes superiores (€299+): significativamente más. Unlimited: 500 por flujo por día. Póngase en contacto con el soporte para aumentos temporales.

## ¿Puedo solicitar un aumento temporal de límite para un llenado inicial?

Sí. Para volúmenes grandes únicos, el equipo puede aumentar temporalmente los límites. Póngase en contacto con el soporte con su volumen esperado y cronograma.

## ¿Cómo obtengo una vista previa de los resultados de la indicación antes de sincronizar?

Abra el flujo → agregue su indicación → haga clic en **Save and Preview** → haga clic en **Generate Now**. La vista previa no se guarda ni se sincroniza.

## ¿Por qué la vista previa requiere un saldo?

La característica de vista previa consume tokens, por lo que se requiere un saldo. Póngase en contacto con el soporte para un pequeño crédito de prueba si es necesario.

## Recibo errores "Empty Result" con el modelo GPT-5.

GPT-5 requiere más capacidad de tokens. Aumente Max Tokens de 2.000 a al menos 5.000.

## ¿Qué configuración de Max Tokens se recomienda?

Para GPT-5: al menos 5.000. Asegúrese de que prompt tokens + max_tokens no excedan la longitud del contexto del modelo.

## ¿Cuáles son las advertencias de contenido sospechoso?

Fozzels valida la salida contra una lista de palabras no deseadas. El contenido marcado no se sincroniza automáticamente. Puede personalizar la lista o agregar restricciones de indicación.

## ¿Cómo reduzco advertencias de contenido sospechoso?

Agregue restricciones en su indicación, personalice la lista de palabras sospechosas o use **Regenerate**. Póngase en contacto con el soporte para forzar la sincronización si el contenido es correcto.

## ¿Puedo forzar la sincronización de contenido sospechoso?

Póngase en contacto con el soporte — especifique todos los flujos o solo algunos. Pueden sincronizar el contenido marcado en su nombre.

## Los títulos de mis páginas son demasiado largos / alcanzan límites de caracteres.

Ajuste su indicación para especificar límites máximos de caracteres. Póngase en contacto con el soporte para corregir títulos existentes que sean demasiado largos.

## La cadena "Plain text" está apareciendo en mi contenido generado.

Este es un problema raro de indicación. El soporte puede revisar y limpiar productos afectados. Informarlo con ejemplos específicos.

## Un producto no se va en línea debido al contenido de Fozzels.

Problemas de contenido (títulos largos, cadenas inesperadas) pueden bloquear la publicación. Póngase en contacto con el soporte con los detalles del producto.

## Mis flujos de contenido automático dejaron de funcionar.

Esto puede ser causado por problemas del lado de Fozzels o limitaciones del proveedor de IA. Póngase en contacto con el soporte para investigar y reiniciar.

## Mi flujo muestra 100% verde inmediatamente después de la activación — ¿es eso correcto?

Este es un problema de interfaz de usuario conocido. La pantalla inicial puede mostrar 100% antes de finalizar. Verifique los detalles del flujo para el estado real.

## El botón "Generate Now" no responde.

La cola de generación puede estar sobrecargada durante horas pico. Espere e intente de nuevo, o cambie a un modelo de IA más rápido.

## ¿Puedo cambiar modelos de IA para generación más rápida?

Sí, cambie el modelo en la configuración del flujo. Los modelos más ligeros son más rápidos. Los diferentes modelos pueden producir diferente calidad.

## ¿Qué modelo de IA debo usar para el mejor equilibrio costo/calidad?

Hay múltiples modelos disponibles (ChatGPT, Gemini, Claude). Los modelos más poderosos ofrecen mayor calidad pero cuestan más. Póngase en contacto con el equipo para recomendaciones.

## Recibo errores de Gemini durante generaciones de lotes grandes.

Gemini aplica límites de velocidad para volúmenes grandes, causando errores temporales. Los trabajos permanecen en la cola y se completan automáticamente una vez que los límites se restauran.

## Contenido sospechoso en francés se está marcando incorrectamente.

La lista de filtro puede incluir palabras comunes en otros idiomas. Póngase en contacto con el soporte para ajustar la lista para su idioma.

## ¿Hay un límite de sincronización? ¿Por qué la sincronización es lenta?

Sincronizar volúmenes grandes toma tiempo. No hay límites duros, pero se ejecuta gradualmente. Póngase en contacto con el soporte si parece estar atascado.

## Los resultados son de pobre calidad debido a datos de producto insuficientes.

La calidad depende de los datos disponibles. Enriquezca los datos del producto en su PIM/tienda antes de regenerar. La edición manual puede ser necesaria para productos con pocos datos.

## ¿Cómo configuro un flujo completamente automático (auto-confirmar y sincronizar)?

Seleccione el tipo de flujo "Fully-automatic". Los resultados se confirman y sincronizan automáticamente con la siguiente ejecución cron (~4 horas). La validación interna evita que el contenido deficiente se sincronice.

## ¿Con qué frecuencia se ejecuta cron de sincronización?

La sincronización automática se ejecuta vía cron cada ~4 horas. Planifique la generación con anticipación para lanzamientos urgentes. Póngase en contacto con el soporte para intervalos más rápidos.

## La generación se detuvo prematuramente — ¿podría ser un problema de memoria?

La memoria insuficiente del servidor puede detener generaciones grandes. Póngase en contacto con el soporte — pueden aumentar la memoria asignada.

## ¿Cómo resincronizo todo el contenido a la vez usando acción masiva?

Habilite el toggle "Show all content", luego active **Resync** vía acción masiva para sincronizar todo de una vez.

## El código HTML se muestra en mi resumen de lote.

Alterne el botón **Show HTML** para cambiar entre vistas formateadas y sin formato. Este es un problema de interfaz de usuario conocido que se está mejorando.

## Mis flujos están atrapados después de fondos insuficientes y una recarga de saldo.

Los flujos pueden no reanudarse automáticamente después de una recarga. Póngase en contacto con el soporte para reiniciar trabajos encolados.

## ¿Qué sucede cuando cambia la categoría de un producto?

Si la regeneración automática está habilitada, el texto se regenerará cuando la categoría cambie.

## ¿Cómo corrijo errores fácticos en texto generado por IA?

Si los datos provienen de un atributo de tienda, corríjalos allí y el contenido se regenerará automáticamente. Si fue generado por IA (por ejemplo, desde imágenes), edítelo manualmente en la lista de lotes.

## ¿Por qué se generan diferentes textos para el mismo producto en diferentes colores?

Este es el comportamiento esperado. La IA genera descripciones únicas por parámetros de producto — diferentes colores producen diferentes descripciones.

## La vista previa ya no muestra atributos/columnas de producto.

Esto cambió en la versión 5.10. Puede alternar columnas activadas y desactivadas en la tabla de vista previa. Las columnas faltantes pueden ser un error conocido.

## ¿Cómo administro múltiples indicaciones similares en categorías/marcas?

Actualmente cada flujo tiene su propia indicación. Las indicaciones dinámicas/compartidas están en la hoja de ruta. Use **Duplicate** para acelerar la creación de flujos similares.

## Recibo un error de sincronización porque un atributo requerido está vacío en Magento.

Fozzels no puede insertar contenido si los campos Magento requeridos están vacíos. Verifique el mensaje de error y complete el atributo faltante.

## Recibí cargos inesperados de generación de vídeo atrapada.

Póngase en contacto con el soporte de inmediato. Pueden acreditar cargos incorrectos y solucionar el problema. Elimine flujos atrapados para detener cargos adicionales.

## Los atributos desaparecieron de mis flujos/indicaciones.

Esto puede suceder al copiar indicaciones entre campos. Guarde indicaciones como plantillas. Póngase en contacto con el soporte si los atributos desaparecen sin cambios.
