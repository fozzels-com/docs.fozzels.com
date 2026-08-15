---
id: '103000376412'
title: 4.7.2 Acciones masivas y control operacional en listas por lotes / Lista de lotes total diaria
sidebar_position: 19
slug: /content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list
description: Gestión de contenido mediante acciones masivas Los paneles (o lista de lotes) es su herramienta principal para gestionar contenido rápidamente. Esta funcionalidad de acciones masivas está
---

Gestión de contenido mediante acciones masivas Los paneles (o lista de lotes) es su herramienta principal para gestionar contenido rápidamente. **Esta funcionalidad de acciones masivas está disponible tanto en la descripción general de la lista de lotes total diaria como en la vista de lista de lotes detallada.** Usando la función **Acciones masivas**, puede aplicar simultáneamente operaciones críticas, como confirmación, regeneración y sincronización, a un gran número de productos. Esto ahorra tiempo significativamente al eliminar la necesidad de procesar cada elemento individualmente.

## Ejecución de acciones masivas

1\. Mecanismo de selección Para iniciar una acción masiva, primero debe seleccionar los elementos. Use la casilla de verificación principal para abrir el menú de opciones:

-   Selección individual: Use la casilla de verificación en el extremo izquierdo de cada fila para seleccionar elementos específicos.

-   Seleccionar todo: Selecciona **todos** los elementos que coinciden con los filtros actuales, independientemente de la página.

-   Deseleccionar todo: Borra la selección en toda la lista.

-   Seleccionar todo en esta página: Selecciona todos los elementos actualmente mostrados en la tabla.

-   Deseleccionar todo en esta página: Borra la selección solo en la página actual.

![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/TAT_uWcG5-SzeI8SRjjmN51nhZWuNPhNqw.png)
2\. Acciones disponibles Después de seleccionar elementos, el **menú Acciones** se activa, ofreciendo las siguientes funciones para procesamiento por lotes:

-   **Mostrar seleccionados**: Esta acción filtra la cuadrícula de productos para mostrar solo los elementos que ha seleccionado actualmente, permitiendo una revisión enfocada antes de realizar acciones masivas.

-   **Sincronizar contenido generado**: Esto inicia la transferencia automática de todo el contenido finalizado de los productos seleccionados a su plataforma de comercio electrónico conectada sin activar un nuevo ciclo de generación.

-   **Confirmar todo, guardar y sincronizar**: Esta acción confirma simultáneamente la calidad del contenido seleccionado e inicia su sincronización inmediata con la tienda de comercio electrónico integrada.

-   **Regenerar, guardar y sincronizar**: Esto inicia una nueva solicitud de generación de contenido para los productos seleccionados y programa automáticamente su sincronización posterior tras la finalización exitosa.

## ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/6chuzawhzMkzp4kjQAs-Xh2lfJQ8D0uTnw.png)
Gestión del espacio de trabajo enfocado ("Mostrar seleccionados")

La función **"Mostrar seleccionados"** es una herramienta esencial para revisar y preparar subconjuntos específicos de datos.

-   Espacio de trabajo dirigido: Al activar **"Mostrar seleccionados"**, aísla los elementos seleccionados actualmente en una vista de tabla separada, creando efectivamente un espacio de trabajo enfocado.

-   Retención de funcionalidad completa: Incluso en este modo aislado, retiene todas las funciones de la tabla estándar, incluido el filtrado adicional, la visualización de detalles y la ejecución de acciones masivas en el subconjunto de datos más pequeño y específico. Esto permite selección y procesamiento en múltiples etapas.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/83gkMs5df4-VpiuZavFc2jvbQWWHXo5BwQ.png)

## Recomendaciones: Optimización de la gestión de errores y advertencias

Recomendamos usar la función de acciones masivas no solo para la aprobación estándar de contenido, sino también para corregir rápidamente errores.

-   Utilización de filtros: Puede usar el filtro **"Mostrar solo con errores"** o filtrar los **resultados de contenido** que recibieron advertencias o errores (marcando las métricas "Conteo de advertencias" y "Conteo fallido" en la descripción general diaria).
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/Q-x6xQXNSMvvctnZfgceHCf1568U90a42A.png)

-   Regeneración rápida: Después de aplicar el filtro y seleccionar los elementos problemáticos, use la acción **"Regenerar, guardar y sincronizar"** para ejecutar eficientemente el proceso de generación nuevamente para todos los elementos defectuosos simultáneamente.

## Salvaguardas operacionales y control de lógica de flujo

Se implementa un sistema de control de múltiples etapas antes de ejecutar acciones masivas que requieren muchos recursos para garantizar precisión y evitar gastos no intencionales:

-   Ventana emergente de confirmación obligatoria: Antes de ejecutar acciones como "Resincronizar contenido generado", "Confirmar y sincronizar" o "Regenerar y sincronizar", aparece una ventana emergente de advertencia que requiere su confirmación explícita.
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/XdxTZ96w4KYIJMlmO4Q1e0OGo9Lp4moHMA.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/QtxE2PertdWwBPbWXypF36AadNNOWCYfQ.png)
    ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/WJXrUQG2D70RbZ2Zt2nXR284tuODnhGu_w.png)

-   Nota de lógica de flujo: Estas ventanas emergentes incluyen una nota crucial sobre el comportamiento de sincronización esperado según el tipo de flujo:

    -   El contenido de flujos completamente automatizados se aprobará automáticamente tras la generación.
        ![](/img/kb/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list/K8O5z-M1sAS6I6awArA51TqfE2SC1Yfbtw.png)

-   El contenido de flujos estándar solo se regenerará, requiriendo aprobación manual posterior antes de que se permita la sincronización.

-   Verificación de recursos: El sistema verifica el estado operacional del flujo e integración antes de iniciar cualquier acción masiva: la generación no iniciará si el flujo de origen está inactivo, y la sincronización no se ejecutará si la integración de destino está inactiva.
