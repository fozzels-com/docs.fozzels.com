---
id: '103000408975'
title: 'Lanzamiento 7.6: integración VTEX, mapeo de metadatos de categorías, cronogramas de extracción personalizados y flujos de trabajo de imagen mejorados'
sidebar_position: 15
slug: /fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and
description: ¡Estamos emocionados de presentar Fozzels versión 7.6! Este lanzamiento trae una nueva integración de plataforma, accesibilidad más profunda de datos de categoría e imagen, preciso
---

¡Estamos emocionados de presentar Fozzels versión 7.6! Este lanzamiento trae una nueva integración de plataforma, accesibilidad más profunda de datos de categoría e imagen, controles precisos de sincronización y extracción de API, y actualizaciones importantes en flujos de trabajo de generación de imágenes de IA. Explora todas las características nuevas a continuación.

1.  **Nuevas integraciones: integración VTEX** (fase 1): ¡estamos lanzando soporte inicial para la plataforma de comercio electrónico VTEX! Conecta tu tienda VTEX para extraer datos principales del catálogo, generar metadatos de IA y descripciones de productos localizados, y sincronizarlos sin problemas.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/JeeYUTgzrDD4RFn6wxHSi6jZ-acbmBcdaA.png)

2.  **Atributos de datos y metadatos: parámetros de categoría extendida (Shopware, Magento, Shopify):** ahora puedes acceder a parámetros profundos a nivel de categoría, incluyendo IDs de categoría, slugs/URLs e identificadores estructurales, directamente dentro de flujos de indicación y mapeos de atributos para un contexto de IA más rico.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/78evdNuNxdhrkRFpX3fpJGb7klpmmoKEPg.png)

3.  **Visualización de textos Alt en la galería de vista previa de imagen (Magento 2):** al pasar el cursor o hacer clic en una miniatura de producto en listas de catálogos, ahora se muestra su texto Alt asociado directamente debajo del popover de vista previa, haciendo que la verificación de metadatos de imagen sea rápida y sin esfuerzo (totalmente compatible con Magento 2).
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/NZGCjJzI8YK0KA5XMMfKuuifCwUFqU1ayA.png)

4.  **Controles: cronograma de extracción global y limitación flexible de extracción:** se agregaron controles de extracción avanzados a la página de configuración de integración en todas las plataformas compatibles. **Limitación de extracción**: establece retrasos personalizados entre páginas y solicitudes de API individuales (de 100 a 15 000 ms) para gestionar la carga de API y prevenir errores de limitación de velocidad en catálogos grandes.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/w_q1iVvLQ4_jGLRNGQhA-5vLAxBSxtN1Lw.png)

5.  **Filtrado de extracción de productos expandido para Magento (cualquier estado):** filtra importaciones de catálogos de Magento por estado (habilitado, deshabilitado) y visibilidad (catálogo, búsqueda, catálogo y búsqueda, no visible individualmente). Extrae fácilmente y optimiza tu catálogo completo, incluyendo artículos deshabilitados y borradores.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/MsFGGxKTaRkrmyvnCBxWgi7AL-5ZhZlIZA.png)

6.  **URL de base de imagen personalizada/soporte CDN para Magento:** especifica un dominio de medios personalizado o una ruta CDN (por ejemplo, Cloudflare, AWS S3) para la recuperación de imágenes de productos, garantizando un procesamiento de medios ininterrumpido sin importar dónde tu tienda aloja imágenes.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/o_y1ScOV7ObEGxqceebgSLnoIl-CotmmuA.png)

7.  **Compatibilidad de activos para múltiples imágenes de referencia:** ahora puedes seleccionar varias fotos de productos junto con múltiples ajustes de estilo (dentro de los límites de capacidad del modelo de IA) para una única tarea de generación para lograr mayor precisión visual y detalles realistas.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/yi5rCHSv4ILYH-5KRotagmpmvTiuiDP_LQ.png)

8.  **Descargas del conjunto de imágenes de producto completo:** la descarga de medios generados ahora exporta todo el conjunto de imágenes generadas asociadas con un SKU de producto, en lugar de limitar la descarga solo al primer activo.
    ![](/img/kb/fozzels-releases-updates/release-7-6-vtex-integration-category-metadata-mapping-custom-pull-schedules-and/m4RjAkacBItnD9BxX_2SYbSWQXtKRBFj7Q.png)

9.  Actualizamos nuestros modelos centrales de generación de imágenes (**Gemini 3.1 Flash Image y Gemini 3 Pro Image**) a sus últimas versiones estables para representación más rápida, calidad visual superior y estabilidad sólida como una roca.
    ¡Gracias por estar con Fozzels! Esperamos que estas actualizaciones hagan que tu flujo de trabajo de contenido diario sea aún más suave. ¡No dudes en ponerte en contacto si necesitas ayuda con las nuevas características!
