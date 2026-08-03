---
id: '103000389531'
title: 2.5.6.  Soporte WPML para WooCommerce (Automatización multilingüe)
sidebar_position: 13
slug: /integration-connectivity/wpml-support-for-woocommerce-multilingual-automation
description: Esta guía cubre la configuración y el uso de la integración WPML (WordPress Multilingual Plugin) dentro de Fozzels. Esta función te permite automatizar
---

Esta guía cubre la configuración y el uso de la integración **WPML (WordPress Multilingual Plugin)** dentro de Fozzels. Esta función te permite automatizar la generación y sincronización de contenido para cada configuración regional de idioma de tu tienda dentro de una única integración.

## Descripción general de la función

La integración de Fozzels con WPML te permite gestionar estructuras multilingües complejas sin la necesidad de conexiones separadas para cada idioma.

**Beneficios clave:**

-   **Identificación de región:** Detección automática de todos los idiomas de sitios web activos a través de API.

-   **Mapeo flexible:** Dirige el contenido a las versiones de idioma correcto de tus productos, incluyendo:

-   **Campos estándar** (Título, Descripción, Descripción corta);

-   **Complementos SEO** (**[Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce/)** o **[All in One SEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)**);

-   **Campos personalizados** (**[ACF - Advanced Custom Fields](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)**).

-   **Eficiencia del flujo de trabajo:** Gestiona catálogos globales desde una única interfaz.

## Configuración de integración en Fozzels

Para activar el soporte multilingüe, sigue este algoritmo paso a paso:

### 1. Habilitar funcionalidad

1.  Ve a la sección **Integraciones** y selecciona tu integración de WooCommerce.

2.  En la pestaña **Configuración**, localiza el bloque **Configuración de WPML**.

3.  Activa **"Habilitar soporte multilingüe WPML"**.

4.  **Crucial:** Haz clic en el botón **"GUARDAR"** para confirmar estos cambios en tu configuración.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/4V_jMfihW94CP3CNHSo9yd7-LbwRCXJSJg.png)

### 2. Inicializar configuraciones regionales (Sitios web y tiendas)

Una vez guardado, necesitas obtener la lista de idiomas de tu sitio WordPress:

1.  Cambia a la pestaña **Sitios web y tiendas** en la configuración de tu integración.

2.  Haz clic en el botón **"Extraer tiendas/sitios web"**. Fozzels consultará tu sitio WordPress para recuperar todos los idiomas configurados.

3.  En la lista que aparece, **activa (cambia el interruptor)** los idiomas específicos que tienes la intención de gestionar.
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/POzdAldcqgEXxkAsgSEbnJLTDF9nzoogmg.png)
    ![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/rgGtdO9cFLCfJOPmQs1SQc5NKnlyOx59Ag.png)

###
3. Sincronización del catálogo

Este es el paso final e más importante para que los productos sean visibles:

-   **EJECUTA NUEVAMENTE LA EXTRACCIÓN DE PRODUCTOS.** Esto es obligatorio para que el sistema pueda identificar las relaciones entre diferentes versiones de idioma de tus productos y **cargarlos en tus catálogos de Fozzels** como objetos individuales para procesamiento. Sin este paso, los productos para nuevas configuraciones regionales no aparecerán en el sistema.

![](/img/kb/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation/S0333OKK3WCPquO5CYoLzBkvWJVsJRbG4w.png)

##
El combo superpotente: WPML + ACF + AIOSEO

Fozzels te permite combinar WPML con complementos líderes en el mercado para máxima automatización. Este es el "estándar de oro" para comercio electrónico profesional:

-   **WPML + SEO ([Yoast](/integration-connectivity/yoast-seo-support-for-woocommerce/) o [AIOSEO](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/)):** Genera palabras clave, títulos meta y descripciones localizados únicos para cada versión de idioma. _(Nota: Usa solo un complemento de SEO a la vez para evitar conflictos)._

-   **WPML + [ACF (Advanced Custom Fields)](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/):** Sincroniza contenido localizado en campos personalizados (por ejemplo, especificaciones técnicas, bloques de marketing o preguntas frecuentes) por separado para cada idioma.

-   **El combo definitivo (WPML + ACF + AIOSEO):** El escenario más poderoso. Esto te permite automatizar descripciones profesionales, datos técnicos especializados, y un núcleo SEO completo para el mercado internacional simultáneamente.
