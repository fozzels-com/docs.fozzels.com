---
id: '103000369091'
title: 4.7.1 Seguimiento de los resultados generados. Panel.
sidebar_position: 18
slug: /content-creation-flows/tracking-of-the-generated-results-dashboard
description: El panel (o lista de lotes total diaria) sirve como su centro de comandos, proporcionando una descripción general completa de todos los procesos de generación y sincronización de contenido
---

El panel (o lista de lotes total diaria) sirve como su centro de comandos, proporcionando una descripción general completa de todos los procesos de generación y sincronización de contenido. Esta interfaz le permite rastrear proactivamente el estado, diagnosticar errores y gestionar eficientemente todos los datos generados.

1\. Descripción general del panel

La vista principal es una tabla de datos agrupada por la fecha de generación de contenido.

1.1 Métricas clave

La tabla principal muestra seis métricas clave que ayudan a monitorear el estado del contenido para un día específico:

- **Fecha**: La fecha en que se generó el contenido.
- **Recuento de productos**: El número total de productos programados para generación de contenido.
- **Recuento de finalizaciones**: El número de unidades de contenido que se han generado correctamente.
- **Recuento sincronizado**: El número de unidades de contenido que se han sincronizado correctamente.
- **Recuento de advertencias**: El número de unidades de contenido con observaciones que pueden requerir atención del usuario.
- **Recuento fallido**: El número de unidades de contenido que no se generaron o sincronizaron debido a errores críticos.

Los usuarios pueden hacer clic en la fecha o en el Recuento de finalizaciones para acceder a una vista detallada de todas las finalizaciones de ese día específico.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/3eVmE5L69-qrrXE1wrp9l5KjD88-GmSH0A.png)

1.2. Vista detallada y configuración de pantalla

Hacer clic en una fecha abre una vista de tabla detallada que contiene información específica sobre cada unidad de contenido.

1.2.1. Columnas obligatorias

La tabla detallada incluye nueve columnas obligatorias: Flujo, SKU, Confirmado, Miniatura, Solicitud, Creado en, Atributo de destino, Ejecutado en y Sincronizado en.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/yOUsE1jBYf6AFN1hwszHua430j9ysDetdQ.png)

1.2.2. Herramientas de configuración de pantalla

Las herramientas encima de la tabla le permiten personalizar su vista de datos para mayor eficiencia:

**Mostrar solo con errores.** Este interruptor filtra rápidamente la tabla para mostrar solo registros donde se produjeron problemas de generación o sincronización.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/j--J5uJGSoiU6L54C7ykpw09czX8hQ86Cg.png)

**Visibilidad de columna.** Este menú desplegable permite al usuario ocultar o mostrar columnas específicas en la tabla, enfocándose en información relevante.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/a2xTbvhRdJxaIqyUO1tJK3-K0FSstAq5tg.png)

**Paginación.** La opción "Mostrar \[número\] entradas" permite personalizar el número de filas mostradas por página (5, 10, 25, 50 o 100).
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/aPLUy45_b4zLJDCLFCuSfM-OCwWerXDo8g.png)

**Filtro de rango de fechas.** Permite la selección de una fecha específica o un rango de fechas para ver resultados.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qpq1evm1oh-KTj5jr18RC3XOrCrg-vsDYg.png)

1.2.3. Filtros de columna

Cada columna incorpora una herramienta de filtrado integrada para búsqueda y clasificación rápidas:

- **Flujo**: Filtra productos por uno o más flujos seleccionados (selección de una lista).
- **SKU**: Se usa para buscar un producto específico por su SKU (búsqueda de texto).
- **Miniatura**: Filtra productos según la presencia de imagen ("Imagen faltante" o "Imagen existe") (alternar/selección).
- **Columnas de fecha**: Las columnas de fecha (Creado en, Ejecutado en, Sincronizado en) tienen campos "Desde" y "Hasta" para seleccionar un rango de fechas.

1.3. Detalle de columna e interacción

Esta sección describe interacciones de un solo elemento, que sirven como alternativa a las acciones masivas para control granular.

SKU: Muestra el SKU del producto, que es un enlace que se puede hacer clic a la página del producto dentro de Fozzels. También incluye un icono que se vincula a la página del producto en la tienda integrada.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/A_jL3Ul08ZPx8MakhmS7P3tNfAeYmtyhtw.png)

Confirmado: Indica el estado cuando el contenido ha sido aprobado y está listo para sincronización.

Atributo de destino: Hacer clic en la celda abre la ventana "Editar resultado de finalización", lo que permite revisar y editar contenido.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/m_jrPUwivZj3FjRSdeYeWZAvFYUuyCBAGw.png)

Solicitud: Al hacer clic, se abre una ventana emergente para ver y copiar el texto de solicitud completo.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/pEEWkzMEzEfqU5WuU7sFLmT9fvZbxMV-5g.png)

Regeneración de contenido: El botón "Regenerar" dentro de la ventana "Editar resultado de finalización" se utiliza para iniciar la regeneración de contenido.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/c5ZO3vrJJlYMqytY7IAluozmh2QAXngM_Q.png)

1.4. Acciones masivas y control operacional

El panel proporciona una funcionalidad robusta para gestionar eficientemente contenido a través de acciones masivas, resolviendo el punto débil de confirmaciones individuales tediosas.

1.4.1. Realización de acciones masivas

Mecanismo de selección: Los usuarios seleccionan elementos usando casillas de verificación o la función Seleccionar todo en esta página.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/cLqudNyTCBxzEB1wUw_lB446fY5cRD45Aw.png)

Acciones disponibles: El menú Acciones ofrece las siguientes funciones para procesamiento por lotes:
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/HW2UYiSK33CeIRz6osXy6htBVLzkTpk0pA.png)

- **Confirmar todo, guardar y sincronizar**: Aprueba e inicia sincronización para el contenido seleccionado.
- **Regenerar, guardar y sincronizar**: Inicia regeneración de contenido para los productos seleccionados y su sincronización posterior.

1.4.2. Funcionalidad "Mostrar seleccionados"

Espacio de trabajo dirigido: La función "Mostrar seleccionados" aísla elementos seleccionados en una tabla separada para un espacio de trabajo enfocado.

Retención de funcionalidad completa: En este modo, el usuario retiene todas las funciones de la tabla estándar: filtrado, visualización de detalles y ejecución de acciones masivas en el subconjunto de datos seleccionado.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/f7zwjwWHrNA6OT8wJVRrxQ46WMuqPx1J7A.png)

1.4.3. Salvaguardas operacionales

Se implementa un sistema de control de múltiples etapas para garantizar precisión y evitar gastos no intencionales:

Confirmación obligatoria: Una ventana emergente de advertencia aparece antes de ejecutar cualquier acción masiva que requiera muchos recursos ("**Confirmar y sincronizar**", "**Regenerar y sincronizar**").
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/0ubsrmale7wTjSetyZBAJCqZYw3CK5u0iQ.png)

![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/sPmeRKZIE_-ybW-dwpbBS3bSEm0XtG69xQ.png)

Control de lógica de flujo: Estas ventanas emergentes incluyen una nota sobre el comportamiento de sincronización esperado:

El contenido de flujos completamente automatizados se aprobará automáticamente.
El contenido de flujos estándar solo se regenerará, requiriendo aprobación manual posterior.

Verificación de recursos: El sistema verifica el estado antes de iniciar cualquier operación: la generación no iniciará si el flujo está inactivo, y la sincronización no se ejecutará si la integración de destino está inactiva.

1.5. Diagnósticos y advertencias (solución de problemas)

El panel proporciona mensajes claros y herramientas para diagnósticos:

Detalles de error (información sobre herramientas): En casos de fallas de sincronización o generación, la información sobre herramientas está disponible para proporcionar el mensaje detallado explicando la causa del error.
"La finalización se ve sospechosa": Una advertencia que indica contenido no natural (respuestas similares a bots, HTML o Markdown). Este contenido no se sincronizará y requiere intervención del usuario.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/NSPyqq1WcPjA-YYLdrczhDUakvL55U2vIQ.png)
"Codificación de entidades HTML doble detectada": Esta advertencia aparece cuando el texto se ha codificado más de una vez, lo que puede causar que el texto aparezca incorrectamente.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/UGH7_knyB9J6V0GXvznxuh1latc_mLlX-Q.png)
"El resultado de finalización del producto está vacío. Intente regenerar contenido." El resultado está vacío.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/4w2KbQmr8MEpBIgJ6373dwywTEYwFu6TYA.png)

"El producto se eliminó en la integración": Indica que el producto ya no existe en la tienda integrada.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/nO0NOjYhJ94dqp7jQPD8tvUJ-jEil4tHcA.png)
"La regla está deshabilitada": Indica que el contenido fue generado por un flujo que ya no está activo.
![](/img/kb/content-creation-flows/tracking-of-the-generated-results-dashboard/qAHiFoO27TOf4TPKQ9pBfsyriEs7rLXnVg.png)
