---
id: '103000408494'
title: 2.5.4. Soporte de Yoast SEO para WooCommerce ES
sidebar_position: 11
slug: /integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es
description: Este artículo explica cómo configurar la automatización completa de los metadatos de tus productos (títulos, descripciones, palabras clave objetivo) utiliz
keywords:
- extracción
---

Este artículo explica cómo configurar la automatización completa de los metadatos de tus productos (títulos, descripciones, palabras clave objetivo) utilizando la integración de **Yoast SEO** con Fozzels.

## Descripción general de la función

Esta integración permite que Fozzels gestione directamente los parámetros SEO de tus productos a través de la API. Una vez generados, estos campos se sincronizan automáticamente con tu tienda WooCommerce.

### Atributos disponibles para el mapeo:

-   **Título SEO de Yoast**(`yoast_title`)
-   **Meta descripción SEO de Yoast** (`yoast_meta_description`)
-   **Palabra clave objetivo de Yoast**(`yoast_focus_keyword`)

## Configuración paso a paso

### Paso 1: Requisitos (lado de WooCommerce)

Para que la sincronización sea exitosa, tu sitio WordPress debe tener **dos plugins activos**:

1.  **Yoast SEO** – El plugin principal para la gestión de la optimización para motores de búsqueda.
2.  **Yoast SEO WooCommerce REST API by Fozzels** – Nuestro plugin conector dedicado que permite transferir los datos generados de vuelta a tu tienda.

> **Importante:** La sincronización de los campos SEO no es posible sin el plugin conector de Fozzels. Puedes descargarlo al final de este artículo.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/MT4wMD04ipjVoEt8c4NwHlsE0eT8iTLb2A.png)

### Paso 2: Activación en Fozzels

1.  Ve a la sección **Integraciones** y selecciona tu integración de WooCommerce.
2.  En la pestaña **Configuración**, busca la opción **"Yoast WooCommerce SEO"**.
3.  Activa el interruptor y haz clic en **GUARDAR**.

![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/bjZhGWcV30oWfW9hzMOHg4-I7csNNSMhJA.png)

###
Paso 3: Actualización de la estructura de datos

Para que los nuevos atributos sean visibles en la interfaz de Fozzels, debes actualizar tu esquema de datos:

1.  Ve a la pestaña **Sitios web y tiendas** y haz clic en **Extraer tiendas/sitios web (Pull Stores/Websites)**.
2.  Ejecuta una **extracción completa de productos (Pull Products)**.
3.  Una vez finalizada la extracción, la lista de atributos se actualizará y los campos con el prefijo `yoast_` estarán disponibles para el mapeo en tus Flows.![](/img/kb/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es/s-S_9YbKR-3bTtFFzWb4j7fmwJBqaL8UKg.png)

##

## La combinación definitiva: WPML + Yoast + ACF

Fozzels te permite alcanzar el "estándar de oro" del comercio electrónico combinando:

-   **Soporte de WPML:** Para SEO multilingüe.
-   **ACF (Advanced Custom Fields):** Para datos técnicos especializados.
-   **Yoast SEO:** Para el dominio en motores de búsqueda.

Puedes automatizar todos estos campos simultáneamente para cada versión de idioma de tu tienda.
