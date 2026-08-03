---
id: '103000395334'
title: '2.5.8. Diagnóstico de tu conexión de WooCommerce en Fozzels'
sidebar_position: 15
slug: /integration-connectivity/diagnosing-your-woocommerce-connection-in-fozzels
description: >-
  Si ves un letrero "Se detectaron problemas de conexión" después de guardar tu integración de WooCommerce, este artículo te ayudará a entender qué significa cada mensaje
---

#

Si ves un letrero **"Se detectaron problemas de conexión"** después de guardar tu integración de WooCommerce, este artículo te ayudará a entender qué significa cada mensaje y cómo solucionarlo.

##
Cómo funciona el diagnóstico

Cada vez que guardas tu integración, Fozzels comprueba automáticamente la conexión a tu tienda de WooCommerce y el estado de los complementos habilitados. Si falta algo o está mal configurado, verás una notificación con una descripción del problema y los pasos para resolverlo.

Hay tres tipos de notificaciones:

-   **Error**: algo está bloqueando la conexión. La integración no funcionará hasta que se resuelva.
-   **Advertencia**: la integración puede funcionar, pero algo puede causar problemas o limitar la funcionalidad.
-   **Noticia**: mensaje informativo, no se requiere acción estrictamente pero se recomienda.

##
Mensajes de conexión base

Estos mensajes aparecen independientemente de qué complementos tengas habilitados.

-   **"La autenticación falló. Verifica tu clave de cliente y secreto de cliente."**
    Tus credenciales de API son incorrectas o se han regenerado desde que se copiaron. Ve a **WooCommerce → Configuración → Avanzada → API REST**, regenera las claves y pégalas en Fozzels.

-   **"Acceso denegado. Tu clave de API requiere permisos de lectura/escritura."**
    La clave de API se creó con acceso de solo lectura. Fozzels necesita acceso de escritura para enviar contenido generado de vuelta a tu tienda. Regenera la clave y selecciona **Lectura/Escritura** en el menú desplegable Permisos.

-   **"API REST no encontrada. Verifica la URL de tu tienda."**
    No se pudo acceder a la API REST de WooCommerce en la URL proporcionada. Asegúrate de haber ingresado la URL de tienda correcta (por ejemplo, `https://tutienda.com`) y que la API REST de WooCommerce esté habilitada.

-   **"No se puede acceder a tu tienda. Verifica la URL, el estado del servidor o la configuración del firewall."**
    Fozzels no pudo establecer una conexión. Tu tienda puede estar sin conexión, la URL puede ser incorrecta, o un firewall o complemento de seguridad puede estar bloqueando solicitudes de API externas.

-   **"Error de certificado SSL. Asegúrate de que tu tienda usa un certificado HTTPS válido."**
    El certificado SSL de tu tienda es inválido o ha expirado. Comunícate con tu proveedor de hosting para renovar o reemplazar el certificado.

##
ACF (campos personalizados avanzados)

Estos mensajes aparecen cuando el alterador **Habilitar ACF** está activado en Fozzels.

-   **"Se requieren complementos 'Advanced Custom Fields' y 'ACF to REST API'. Asegúrate de que ambos estén instalados y activos."**
    Ninguno de los complementos se detecta en tu sitio de WordPress. Instala y activa **Advanced Custom Fields** y **ACF to REST API** en tu panel de administración de WordPress en **Complementos → Agregar nuevo**.

-   **"'Advanced Custom Fields' está activo pero el complemento 'ACF to REST API' no está instalado."**
    ACF está instalado pero falta el complemento conector. Instala y activa el complemento **ACF to REST API** para permitir que Fozzels lea tus campos personalizados.

-   **"El complemento 'ACF to REST API' está activo pero 'Advanced Custom Fields' no está activo."**
    El complemento conector está instalado pero ACF en sí no está activo. Ve a **Complementos** en tu administrador de WordPress y activa **Advanced Custom Fields**.

-   **"La estructura de enlaces permanentes es incompatible con la API REST."**
    Tu estructura de enlaces permanentes de WordPress está configurada como **Simple**, lo que rompe el acceso a la API REST. Ve a **WordPress → Configuración → Enlaces permanentes** y selecciona cualquier estructura que no sea Simple (por ejemplo, **Nombre de publicación**). Guarda los cambios.

-   **"Los campos ACF no son visibles a través de la API REST."**
    Tu grupo de campos ACF no está expuesto a la API REST. Ve a **ACF → Grupos de campos**, abre el grupo relevante, navega a **Configuración de grupo** y habilita tanto **Activo** como **Mostrar en API REST**.

-   **"Error de coincidencia de versión de API de ACF. Se requiere la versión v3."**
    Si estás usando el complemento **ACF to REST API**, debe estar establecido en v3. Ve a **WordPress → Configuración → Enlaces permanentes → ACF to REST API** y establece la **Versión de solicitud** en **v3**.

##
WPML (multilingüe)

Estos mensajes aparecen cuando el alterador **Habilitar WPML** está activado en Fozzels.

-   **"El complemento WPML no se detecta en tu sitio de WordPress."**
    El complemento WPML no está instalado o no está activo. Instala y activa **WPML Multilingual CMS** en tu sitio de WordPress, luego configura al menos un idioma adicional en **WPML → Idiomas**.

-   **"WPML está activo pero no hay idiomas configurados."**
    WPML está instalado pero no se ha configurado ningún idioma adicional. Ve a **WPML → Idiomas** y agrega al menos un idioma a tu tienda.

-   **Después de habilitar WPML, vuelve a ejecutar Extraer tiendas/sitios web y Extraer productos.**
    Esto es necesario para que Fozzels pueda detectar todas las configuraciones regionales de idioma y cargar las versiones correctas del producto para cada idioma. Sin volver a ejecutar la extracción, nuevas configuraciones regionales no aparecerán en el sistema.

* * *

## Yoast SEO

Estos mensajes aparecen cuando el alterador **Yoast WooCommerce SEO** está activado en Fozzels. La integración de Yoast SEO requiere dos complementos activos en tu sitio de WordPress: **Yoast SEO** y el complemento conector **Yoast SEO WooCommerce REST API por Fozzels**.

> Puedes descargar el complemento conector de Fozzels desde **app.fozzels.com** o desde la guía de configuración en la base de conocimientos.

* * *

-   **"Se requieren complementos 'Yoast SEO' y 'Yoast SEO WooCommerce REST API by Fozzels'."**
    Ninguno de los complementos se detecta. Instala y activa ambos en tu panel de administración de WordPress.

-   **"El complemento 'Fozzels SEO Fields REST API for WooCommerce' no está instalado o no está activo."**
    Yoast SEO está activo pero falta el complemento conector de Fozzels. Descárgalo e instálalo desde **app.fozzels.com**, luego actívalo en **Complementos**.

-   **"Yoast SEO no está activo."**
    El complemento conector está instalado pero Yoast SEO en sí no está activo. Ve a **Complementos** y activa **Yoast SEO**.

-   **"Tu complemento 'Fozzels SEO Fields REST API for WooCommerce' está desactualizado."**
    Estás usando una versión anterior del complemento conector. La integración continuará funcionando, pero te recomendamos actualizar a la versión más reciente para mejorar el rendimiento y la compatibilidad. Descarga la última versión desde **app.fozzels.com**.

-   **Después de habilitar Yoast SEO, vuelve a ejecutar Extraer tiendas/sitios web y Extraer productos.**
    Esto es necesario para cargar los atributos `yoast_title`, `yoast_meta_description` y `yoast_focus_keyword` en tu catálogo de Fozzels.

* * *

## AIOSEO (All in One SEO)

Estos mensajes aparecen cuando el alterador **AIOSEO** está activado en Fozzels. La integración de AIOSEO requiere dos complementos activos: **All in One SEO** y el complemento conector **AIOSEO API Sync by Fozzels**.

> Puedes descargar el complemento conector de Fozzels desde **app.fozzels.com** o desde la guía de configuración en la base de conocimientos.

-   **"Se requieren complementos 'All in One SEO' y 'AIOSEO API Sync'."**
    Ninguno de los complementos se detecta. Instala y activa ambos en tu panel de administración de WordPress.

-   **"'All in One SEO' está activo pero el complemento 'AIOSEO API Sync' no está instalado."**
    AIOSEO está activo pero falta el complemento conector de Fozzels. Descárgalo e instálalo desde **app.fozzels.com**, luego actívalo en **Complementos**.

-   **"El complemento 'AIOSEO API Sync' está activo pero 'All in One SEO' no está activo."**
    El complemento conector está instalado pero AIOSEO en sí no está activo. Ve a **Complementos** y activa **All in One SEO**.

-   **"Tu complemento 'AIOSEO API Sync' está desactualizado."**
    Estás usando una versión anterior del complemento conector. La integración continuará funcionando, pero te recomendamos actualizar a la versión más reciente. Descárgalo desde **app.fozzels.com**.

-   **Después de habilitar AIOSEO, vuelve a ejecutar Extraer productos.**
    Esto es necesario para cargar `_aioseo_title`, `_aioseo_description` y otros atributos de AIOSEO en tu catálogo de Fozzels.

* * *

## Conflicto: Yoast SEO y AIOSEO

**"Tanto Yoast SEO como All in One SEO están activos al mismo tiempo. Esto causará conflictos. Por favor, deshabilita uno de ellos para continuar."**

Yoast SEO y AIOSEO no pueden usarse simultáneamente: en Fozzels o en tu sitio de WordPress. Elige un complemento SEO y deshabilita el otro en ambos lados.

* * *

## ¿Aún tienes problemas?

Si has seguido los pasos anteriores y el problema persiste, comunícate con nuestro equipo de soporte en **[support@fozzels.com](mailto:support@fozzels.com)** o envía un ticket a través del centro de ayuda. Incluye una captura de pantalla del mensaje de error y tu configuración de integración para ayudarnos a asistirte más rápidamente.
