---
id: '103000388046'
title: 2.5.4. Soporte de Yoast SEO para WooCommerce
sidebar_position: 12
slug: /integration-connectivity/yoast-seo-support-for-woocommerce
description: >-
  Este artículo explica cómo configurar la automatización completa de los metadatos
  de tu producto (títulos, descripciones, palabras clave de enfoque) usando la integración de Yoast SEO con
---

Este artículo explica cómo configurar la automatización completa de los metadatos de tu producto (títulos, descripciones, palabras clave de enfoque) usando la integración de **Yoast SEO** con Fozzels.

## Descripción general de la función

Esta integración permite que Fozzels gestione directamente los parámetros SEO de tu producto a través de la API. Una vez generados, estos campos se sincronizan automáticamente con tu tienda WooCommerce.

**Atributos disponibles para mapear:**

-   **Título de Yoast SEO** (`yoast_title`)

-   **Meta descripción de Yoast SEO** (`yoast_meta_description`)

-   **Palabra clave de enfoque de Yoast SEO** (`yoast_focus_keyword`)

## Configuración paso a paso

### Paso 1: Requisitos (lado de WooCommerce)

Para la sincronización exitosa, tu sitio WordPress debe tener **dos complementos activos**:

1.  **Yoast SEO** – El complemento principal para la gestión de la optimización de motores de búsqueda.

2.  **Yoast SEO WooCommerce REST API by Fozzels** – Nuestro complemento conector dedicado que permite la transferencia de datos generados de vuelta a tu tienda.

> **Importante:** La sincronización de campos SEO no es posible sin el complemento conector de Fozzels. Puedes descargarlo en la parte inferior de este artículo.

### ![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/x8U6ii3HyPbJrpm22XJ4KTrBPkYOpJMBqw.png)Paso 2: Activación en Fozzels

1.  Ve a la sección **Integraciones** y selecciona tu integración de WooCommerce.

2.  En la pestaña **Configuración**, encuentra la opción **"Yoast WooCommerce SEO"**.

3.  Habilita el interruptor y haz clic en **GUARDAR**.

###
![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/Q2vuNHpeZol7txxezMoTQmPyzT3To9Rwpw.png)

### Paso 3: Actualización de la estructura de datos

Para que los nuevos atributos sean visibles en la interfaz de Fozzels, debes actualizar tu esquema de datos:

1.  Ve a la pestaña **Sitios web y tiendas** y haz clic en **Extraer tiendas/sitios web**.

2.  Ejecuta una **extracción completa de productos (Extraer productos)**.

3.  Una vez que la extracción se complete, la lista de atributos se actualizará, y los campos con el prefijo `yoast_` estarán disponibles para mapear en tus Flows.

![](/img/kb/integration-connectivity/yoast-seo-support-for-woocommerce/xD90y_FdSVGO0v5sAa1SAVmX1hHGTvb8Tw.png)

## El combo definitivo: WPML + Yoast + ACF

Fozzels te permite alcanzar el "estándar de oro" del comercio electrónico combinando:

-   **Soporte [WPML](https://fozzels.freshdesk.com/a/solutions/articles/103000389531):** Para SEO multilingüe.

-   **[ACF (Advanced Custom Fields)](https://fozzels.freshdesk.com/a/solutions/articles/103000385832):** Para datos técnicos especializados.

-   **Yoast SEO:** Para el dominio de motores de búsqueda. Puedes automatizar todos estos campos simultáneamente para cada versión de idioma de tu tienda.
