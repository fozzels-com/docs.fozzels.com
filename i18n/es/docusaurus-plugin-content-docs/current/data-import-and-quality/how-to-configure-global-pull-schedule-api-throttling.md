---
id: '103000408982'
title: 3.1.2 Cómo Configurar la Programación Global de Extracción y Limitación de API
sidebar_position: 3
slug: /data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling
description: Al gestionar integraciones de catálogos grandes, controlar cuándo y con qué velocidad Fozzels importa datos de productos desde tu plataforma de comercio electrónico es clave para mantener el rendimiento de la tienda.
keywords:
- extracción
---

Al gestionar integraciones de catálogos grandes, controlar **cuándo** y **con qué velocidad** Fozzels importa datos de productos desde tu plataforma de comercio electrónico es clave para mantener el rendimiento de la tienda.

Con las configuraciones de **Programación Global de Extracción** y **Limitación de Extracción**, puedes programar tiempos de sincronización para evitar el tráfico máximo de la tienda y ajustar pausas de API para evitar errores de limitación de velocidad.

##
Dónde Encontrar Estas Configuraciones

1.  Inicia sesión en **Fozzels**.

2.  Ve a **Configuración** para tu integración activa.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/THubHvyaWacy8WwlR5pMdGsfkPW-WZmcPw.png)

3.  Desplázate hacia abajo hasta la sección **Programación Global de Extracción**.
    ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/P9fCQ7RwxIcI7AqCgCPyUCa_PbCy3PI4Ww.png)

## 1. Programación Global de Extracción

La Programación Global de Extracción te permite definir un único tiempo maestro para que Fozzels comience automáticamente a extraer actualizaciones de catálogo en toda tu integración.

### Cómo Funciona:

-   **Programación Predeterminada:** Cada tienda activa dentro de tu integración usa este tiempo programado por defecto.

-   **Sobrescrituras en Nivel de Tienda:** Si ejecutas múltiples escaparates (p. ej., en diferentes zonas horarias) y quieres que una tienda específica extraiga datos en un momento diferente, puedes habilitar el botón de alternancia **Sobrescribir Programación Global de Extracción** dentro de la configuración individual de esa tienda específica.

> ? **Mejor Práctica:** Configura tu programación de extracción durante horas fuera de pico (p. ej., tarde en la noche o temprano en la mañana) cuando el tráfico del sitio web es más bajo para minimizar cualquier carga potencial en el backend de tu tienda.

##
![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/fyrAZkK-2BnIOTIwMM32cLL1domLcyE4rg.png)
2. Limitación de Extracción (Retrasos Entre Solicitudes)

Los Límites de Velocidad de API son restricciones impuestas por plataformas como Shopify, Magento, VTEX u otras para evitar que los servidores se vean abrumados por demasiadas solicitudes a la vez.

Si Fozzels solicita datos de productos demasiado rápido, el servidor de tu tienda podría devolver un error `429 Demasiadas Solicitudes`. **La Limitación de Extracción** resuelve esto agregando pausas controladas entre operaciones de sincronización.

### Parámetros Configurables:

-   **Retraso entre páginas (`100–15,000 ms`):**

-   **Qué hace:** Agrega una pausa (en milisegundos) después de que Fozzels termine de obtener cada lote/página de productos antes de pedir la siguiente página.

    -   **Predeterminado/Recomendación:** `2000 ms` (2 segundos). Dejar esto en blanco usa la velocidad predeterminada de tu plataforma.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qGkARWiCzUokf8PHJJpaRRRuivORM_DQIw.png)

-   **Retraso entre solicitudes (`100–15,000 ms`):**

-   **Qué hace:** Agrega una pausa entre llamadas API individuales hechas mientras se procesan elementos en una página.

    -   **Predeterminado/Recomendación:** `200 ms`.
        ![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/mfKk2L61sB_fdhQoGQ9o3zxmuUyFh5m0fQ.png)

    -   No olvides guardar tus cambios - haz clic en el botón **GUARDAR**.
**![](/img/kb/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling/qdZ3Boaa9oUyxzPTfvoV8zbP2N_diVhAkw.png)**

> ⚠️ **Precaución:** Configurar retrasos **por debajo** de los valores predeterminados recomendados por tu plataforma de comercio electrónico puede desencadenar errores de limitación de velocidad desde el servidor de tu tienda, lo cual puede hacer que las extracciones de catálogo fallen prematuramente. Si experimentas extracciones fallidas o advertencias de limitación de velocidad, aumenta gradualmente estos valores de retraso para dar a tu servidor de tienda más tiempo entre solicitudes.
