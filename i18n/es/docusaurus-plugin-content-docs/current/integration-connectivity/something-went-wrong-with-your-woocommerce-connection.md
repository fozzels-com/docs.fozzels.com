---
id: '103000395329'
title: 2.5.7. ¿Algo salió mal con tu conexión de WooCommerce?
sidebar_position: 14
slug: /integration-connectivity/something-went-wrong-with-your-woocommerce-connection
description: No te preocupes — la mayoría de los problemas de conexión son rápidos de solucionar. Esta guía te guiará a través de los mensajes más comunes que podrías ver y
---

No te preocupes — la mayoría de los problemas de conexión son rápidos de solucionar. Esta guía te guiará a través de los mensajes más comunes que podrías ver y exactamente qué hacer.

##

## ¿Qué significa "Problemas de conexión detectados"?

Cuando guardas tu integración de WooCommerce, Fozzels verifica automáticamente si todo está configurado correctamente. Si falta algo o necesita atención, verás un mensaje explicando qué hacer a continuación.

##

## Conexión base

-   **"Falha na autenticação."** Tus claves API son incorrectas o están desactualizadas. Ve a tu tienda WooCommerce → **Configuración → Avanzado → API REST**, genera nuevas claves y pégalas en Fozzels.

-   **"Acceso denegado."** Tu clave API no tiene los permisos correctos. Al crear la clave en WooCommerce, asegúrate de seleccionar **Lectura/Escritura** — no solo lectura.

-   **"API REST no encontrada."** Verifica dos veces la URL que ingresaste. Debe verse como `https://yourstore.com` — sin barras adicionales ni errores tipográficos.

-   **"No se puede acceder a tu tienda."** Tu tienda podría estar sin conexión, o un complemento de seguridad está bloqueando el acceso. Verifica que tu tienda esté en funcionamiento y luego intenta de nuevo.

-   **"Error de certificado SSL."** El certificado de seguridad de tu tienda tiene un problema. Contacta a tu proveedor de alojamiento para arreglarlo.

##

## ACF (Advanced Custom Fields)

-   **"Se requieren ambos complementos."** Necesitas dos complementos activos en tu sitio WordPress: **Advanced Custom Fields** y **ACF to REST API**. Ve a **Complementos → Añadir nuevo** e instala ambos.

-   **"ACF está activo pero falta el complemento conector."** Tienes ACF instalado pero te falta el segundo complemento. Instala **ACF to REST API** y actívalo.

-   **"El conector está activo pero ACF no."** El segundo complemento está ahí pero ACF no se está ejecutando. Ve a **Complementos** y activa **Advanced Custom Fields**.

-   **"La estructura de enlace permanente es incompatible."** Ve a **WordPress → Configuración → Enlaces permanentes** y cambia de "Simple" a cualquier otra cosa — **Nombre de entrada** funciona perfecto. Guarda y listo.

-   **"Los campos ACF no son visibles a través de la API REST."** Abre tu grupo de campos ACF, ve a **Configuración de grupo**, y activa **Mostrar en API REST**. No olvides guardar.

-   **"Desajuste de versión de API REST de ACF."** Ve a **WordPress → Configuración → Enlaces permanentes → ACF to REST API** y establece la versión en **v3**.

##
WPML (Multilingüe)

-   **"Complemento WPML no detectado."** Instala y activa el complemento **WPML Multilingual CMS** en tu sitio WordPress. Luego añade al menos un idioma en **WPML → Idiomas**.

-   **"WPML está activo pero no hay idiomas configurados."** Tienes WPML instalado pero aún no has añadido idiomas. Ve a **WPML → Idiomas** y añade los que necesites.

-   **¿Acabas de habilitar WPML?** Después de activarlo, vuelve a **Sitios web y tiendas** y haz clic en **Extraer tiendas/sitios web**, luego ejecuta nuevamente **Extraer productos**. Así es como Fozzels aprende sobre tus versiones de idioma.

##
Yoast SEO

Yoast SEO necesita dos cosas para funcionar con Fozzels: el complemento **Yoast SEO** y nuestro **complemento conector de Fozzels**. Puedes descargar el conector desde **app.fozzels.com**.

-   **"Se requieren ambos complementos."** Ninguno de los complementos está activo. Instala y activa **Yoast SEO** y el **complemento conector de Fozzels** en WordPress.

-   **"Complemento conector no instalado."** Yoast SEO se está ejecutando pero falta nuestro conector. Descárgalo desde **app.fozzels.com** y actívalo en **Complementos**.

-   **"Yoast SEO no está activo."** El conector está ahí pero Yoast SEO no se está ejecutando. Ve a **Complementos** y activa **Yoast SEO**.

-   **"Tu complemento conector está desactualizado."** _(solo una advertencia)_ Todo sigue funcionando, pero recomendamos actualizar el conector a la última versión para la mejor experiencia. Descárgalo desde **app.fozzels.com**.

**¿Acabas de habilitar Yoast SEO?** Ejecuta nuevamente **Extraer tiendas/sitios web** y **Extraer productos** para que Fozzels pueda cargar tus campos SEO.

* * *

## AIOSEO (All in One SEO)

-   AIOSEO también necesita dos cosas: el complemento **All in One SEO** y nuestro conector **AIOSEO API Sync by Fozzels**. Descarga el conector desde **app.fozzels.com**.

-   **"Se requieren ambos complementos."** Ninguno de los complementos está activo. Instala y activa ambos en WordPress.

-   **"Complemento conector no instalado."** AIOSEO se está ejecutando pero falta nuestro conector. Descárgalo desde **app.fozzels.com** y actívalo.

-   **"AIOSEO no está activo."** El conector está ahí pero AIOSEO no se está ejecutando. Ve a **Complementos** y activa **All in One SEO**.

-   **"Tu complemento conector está desactualizado."** _(solo una advertencia)_ Todo sigue funcionando, pero se recomienda actualizar el conector. Descarga la última versión desde **app.fozzels.com**.

**¿Acabas de habilitar AIOSEO?** Ejecuta nuevamente **Extraer productos** para que Fozzels pueda cargar tus campos AIOSEO.

* * *

## ¿Usar Yoast SEO y AIOSEO al mismo tiempo?

Estos dos complementos no funcionan juntos — en Fozzels ni en WordPress. Elige uno y desactiva el otro en ambos lados. ¿No estás seguro cuál elegir? Usa el que ya estés utilizando en tu tienda.

* * *

## ¿Aún atrapado?

Si nada de lo anterior ayudó, contáctanos en **[support@fozzels.com](mailto:support@fozzels.com)** o abre un ticket en el centro de ayuda. Una captura de pantalla del mensaje de error nos ayuda mucho a solucionarlo rápidamente.
