---
id: '103000367857'
title: 2.5.1. Configuración completa de integración con WooCommerce.
sidebar_position: 7
slug: /integration-connectivity/full-integration-setup-with-woocommerce
description: Para asegurar una conexión segura entre Fozzels y WooCommerce, deben completarse los siguientes pasos para generar las claves API especiales (Clave de cliente y
keywords:
- extracción
---

Para asegurar una conexión segura entre Fozzels y WooCommerce, deben completarse los siguientes pasos para generar las claves API especiales (Clave de cliente y Secreto de cliente) en la cuenta de WooCommerce.

Configuración en WooCommerce

**Paso 1: Inicia sesión en WooCommerce**
1. Abre un navegador e inicia sesión en tu cuenta de WooCommerce.
2. Usa el nombre de usuario y contraseña del administrador.

**Paso 2: Navega a la configuración de API**
1. Ve a la pestaña "**Configuración**" / Avanzado / API REST en el menú principal de WooCommerce.
2. Selecciona "**Agregar claves**".

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8hyIPD4Wb1FFvgYBaXywZ2Xs18Lh-bvT4Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/gQDALB5owHDmdRHVghvUxrIVGr9XLh00iA.png)

**Paso 3: Crear una nueva clave API**
1. Añade la descripción y elige los permisos necesarios "**Lectura y escritura**" del desplegable en la **nueva clave API**.

2. Presiona el botón "**Generar clave API**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/LNqOK_83FuQdSlwU4GQ0k9hPLpjPOMhitw.png)
Nota: Otorgar acceso de "Escritura" permite que Fozzels no solo lea datos sino que también actualice datos en tu tienda WooCommerce, asegurando sincronización bidireccional.
Si has hecho todo correctamente, se abrirá una ventana con las claves generadas para la nueva integración. También recibirás el mensaje: 'Clave API generada exitosamente. Asegúrate de copiar tus nuevas claves ahora, ya que la clave secreta estará oculta una vez que dejes esta página.' Transfiere estas claves a la configuración de integración en Fozzels.

![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/zNaRYoJwobBx3j5TEjYQOR-iVDLfWwFk_w.png)
Configuración en Fozzels
**Paso 4: Iniciar una nueva integración**
1. Inicia sesión en tu cuenta de Fozzels.
2. Ve a la página de integraciones.
3. Haz clic en el botón "**Nueva integración**".
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/0oMe6Sytpwp09lVWoNbVjCMY2Gr5Ii3l4w.png)

4. Selecciona "**WooCommerce**" de la lista de servicios disponibles.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/VygL8-i0y-Ufor6pSGr_Zfk9ob9PmWAybw.png)

5. Rellena campos de configuración

        Nombre: Introduce un nombre claro para esta integración (por ejemplo, WooCommerce_INT).
        URL: Introduce la URL de tu tienda WooCommerce
6. Rellena los siguientes campos en la página "Crear nueva integración" (usando las claves copiadas en el paso 3).
        Clave de cliente: Pega la clave de cliente copiada de WooCommerce.
        Secreto de cliente: Pega el secreto de cliente copiado de WooCommerce.

7. Si deseas que los Advanced Custom Fields también se importen en Fozzels, habilita el interruptor **Habilitar ACF**. Lee más sobre cómo configurar correctamente esta conexión en [Habilitación de la sincronización de datos de ACF: Configuración de WordPress/WooCommerce para Fozzels](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels).

8. Si deseas sincronizar datos de SEO usando el complemento Yoast SEO, habilita el interruptor de Yoast WooCommerce SEO. Esto permite que Fozzels importe y actualice títulos meta, descripciones meta y palabras clave de enfoque directamente a través de la API de WooCommerce. [Lee más sobre cómo configurar esta integración en Yoast SEO](/integration-connectivity/yoast-seo-support-for-woocommerce).

9. Si tu tienda usa el complemento All-in-One SEO, habilita el interruptor de All-in-One SEO. Esto sincronizará automáticamente campos relacionados con SEO como títulos meta, descripciones, palabras clave y datos de redes sociales entre WooCommerce y Fozzels. [Lee más sobre cómo configurar esta integración.](/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide)

10. Si deseas importar campos de metadatos personalizados de WooCommerce, rellena el campo Campos de sincronización de metadatos de WooCommerce. Introduce los prefijos de clave meta o nombres exactos de campos meta que desees sincronizar. Solo los campos coincidentes se importarán como atributos de producto en Fozzels. Por ejemplo, introduce _my\_plugin_ para sincronizar todas las claves que comienzan con este prefijo, o \_custom\_field para un campo específico. [Lee más sobre esta función.](/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/)
11. Si deseas habilitar la sincronización multilingüe, habilita el interruptor de Soporte multilingüe WPML. Esto permite que Fozzels sincronice datos de productos en todos los idiomas configurados al usar el complemento WPML. [Lee más sobre cómo configurar esto.](/integration-connectivity/wpml-support-for-woocommerce-multilingual-automation)
 ![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/d1v4xCqxV-0DN-7Uj85ucSblMez28V1klw.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/7XoFo9SE40F3Tgm0RjSqZFcqPUoE-6dFHA.png)
**Paso 5: Activar y guardar la integración**
1. Activa la integración cambiando **Activado** el interruptor "Activo" en la esquina superior derecha.

2. Haz clic en el botón "**Guardar**" para guardar los cambios.
Después de guardar exitosamente, procederás a los siguientes pasos de configuración en Fozzels ("Sitios web y tiendas" y "Atributos"), donde puedes configurar la sincronización de productos y atributos.
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/8pwl3nO-DvkTHXjdP3kCZwH6esC012DXYg.png)
**Paso 6: Configuración de sitios web y tiendas**
1. Haz clic en el botón "**Extraer sitios web y tiendas**". Esto recuperará y mostrará todos los sitios web y tiendas asociados de tu cuenta de WooCommerce.
2. Activa los sitios web y tiendas requeridos cambiando los interruptores de estado correspondientes a **Activado**.
3. Haz clic en el botón "**Extraer productos**" para cada tienda necesaria. Esta acción inicia la carga inicial de datos de productos en Fozzels. Lee más sobre extraer productos [aquí](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained/).
![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/OT8f7hDzpyxRkabdwOZz9-0ph8-2UMGMnA.png)![](/img/kb/integration-connectivity/full-integration-setup-with-woocommerce/pXfqdGQaJ_kePo3JmAj2P43ZxhaPZWFnMg.png)
¡Una vez que se complete el proceso de carga de productos, Fozzels está listo para trabajar!
Ahora puedes proceder a la pestaña "Atributos" para configurarlos. Lee más sobre gestión de atributos [aquí](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).
