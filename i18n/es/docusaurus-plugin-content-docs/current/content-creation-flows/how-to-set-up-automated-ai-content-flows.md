---
id: '103000408983'
title: 4.1.2.a Cómo configurar flujos de contenido automatizado con IA
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: Los flujos de contenido automatizado en Fozzels le permiten generar y sincronizar contenido de productos automáticamente en segundo plano sin requerir que active
---

Los flujos de contenido automatizado en Fozzels le permiten generar y sincronizar contenido de productos automáticamente en segundo plano sin requerir que active tareas manualmente cada día.

Esta guía cubre todo lo que necesita saber para configurar, probar y ejecutar flujos automatizados de forma segura y eficiente.

## Paso 1: Lista de verificación anterior al lanzamiento

Antes de habilitar la automatización, le recomendamos encarecidamente que complete estas tres verificaciones para evitar errores:

1.  **Verificar selección de productos:** Verifique sus filtros en la configuración de flujo para asegurarse de que el flujo se dirija al conjunto de productos exacto que desea procesar.

2.  **Pruebe su solicitud:** Ejecute una generación de prueba utilizando **Guardar y vista previa** para confirmar que la salida cumple con sus estándares de calidad.

3.  **Evitar recursión de solicitudes:** Asegúrese de que su solicitud no haga referencia al atributo exacto en el que está escribiendo (p. ej., usando `product_description` como entrada para generar un nuevo `product_description`). Esto evita bucles de generación recursiva.

## Paso 2: Configurar los ajustes de automatización

Navegue a la pestaña **Automatización** dentro de la configuración de flujo y configure los siguientes parámetros:

-   **Límite de procesamiento diario:** Establezca cuántos productos deben procesarse cada día (hasta **500 productos por flujo activo por día**). Este límite garantiza una ejecución consistente y confiable dentro de cada ciclo de 24 horas.

-   **Modo completamente automático (opcional):**

-   **Habilitado:** El contenido generado se aprueba automáticamente y se sincroniza con su tienda en línea (excepto los elementos marcados por palabras sospechosas o comprobaciones de validación).

-   **Deshabilitado:** El contenido se genera automáticamente, pero permanece en estado pendiente para revisión y aprobación manual antes de sincronizar.

-   **Crear nuevo contenido cuando cambien los valores de atributos (opcional):** Cuando está habilitado, Fozzels regenera automáticamente el contenido siempre que se actualiza un atributo utilizado en su solicitud en su tienda. Esto mantiene su contenido fresco sin trabajo manual.

## Paso 3: Lanzamiento del flujo

Una vez que la configuración esté configurada, active el flujo y elija una de las dos opciones de lanzamiento:

### Opción A: Planificar y cerrar (recomendado para lotes de fondo)

Haga clic en **Planificar y cerrar**. El flujo entrará en estado planificado y comenzará automáticamente a procesarse después de la siguiente actualización de catálogo nocturno programada, continuando diariamente hasta que todos los productos coincidentes se procesen.

### Opción B: Ejecutar ahora (inicio inmediato)

Haga clic en **Ejecutar ahora**. Fozzels procesará inmediatamente los primeros **10 productos** para una vista previa instantánea. Después de este lote inicial, el flujo continúa en su ruta automatizada diaria programada de acuerdo con su límite diario configurado.

## Reglas clave y mejores prácticas

-   **Estado activo requerido:** Para que un flujo planificado se ejecute diariamente, debe permanecer **Activo**. Desactivar el flujo pausa todas las ejecuciones programadas hasta que se vuelva a habilitar.

-   **Edición de flujos activos:** Puede editar reglas de solicitud o configuración en un flujo planificado en cualquier momento. Las actualizaciones se aplicarán a todas las generaciones futuras, mientras que el contenido generado anteriormente permanece sin cambios a menos que se regenere manualmente.

-   **Selección dinámica de productos:** Los flujos planificados activos evalúan automáticamente su catálogo de tienda después de cada sincronización nocturna. Si los productos nuevos coinciden con los filtros de flujo (p. ej., 20 elementos nuevos agregados a una categoría), se inscriben automáticamente en el flujo para procesamiento.

## Artículos de ayuda relacionados

-   **Palabras sospechosas y control de calidad:** _[4.7.4 Palabras y frases sospechosas: control avanzado de calidad de contenido](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)_

-   **Evitar advertencias de recursión:** _[3.5 Advertencia "Recursión detectada" al crear un flujo](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)_

-   **Prevención de flujos superpuestos:** _[4.4.1 Función de prevención de generación de contenido superpuesto](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)_

-   **Reglas de formato HTML:** _[4.7.3 Etiquetas HTML permitidas para generación de texto de IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)_
