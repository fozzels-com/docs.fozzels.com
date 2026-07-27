---
id: '103000385597'
title: '2.3.2. Conectar tiendas Shopify a Fozzels a través de Shopify Dev Platform para 2026'
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  AVISO IMPORTANTE A partir del 1 de enero de 2026, Shopify está cambiando oficialmente sus reglas para la gestión de aplicaciones. El antiguo método de crear "aplicaciones privadas"
---

AVISO IMPORTANTE

A partir del 1 de enero de 2026, Shopify está cambiando oficialmente sus reglas para la gestión de aplicaciones. El antiguo método de crear "aplicaciones privadas" directamente en el administrador de la tienda quedará en desuso. Todas las conexiones nuevas y las actualizaciones de integraciones existentes ahora deben realizarse a través de Shopify Dev Platform.

1.  Autorización

1.1. Inicia sesión en el panel oficial de desarrolladores de Shopify: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard)

2.  Acceso al menú de creación de aplicaciones

2.1. Una vez conectado al panel:

-   Selecciona la sección Aplicaciones en la barra lateral izquierda.

-   En la esquina superior derecha, haz clic en el botón Crear aplicación (dependiendo del tipo de tu cuenta, tu interfaz puede verse un poco diferente. Si no ves este botón, desplázate hacia la parte inferior de la página. Debería haber un enlace clicable etiquetado como **"Crear aplicación"**)
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/e9TIxK8eDP1_39W_QK6q8V792TllGbJshg.png)

###

3.  Elegir el método de creación y nombrar

3.1. En la pantalla de selección:

-   Elige la segunda opción de la derecha: comienza desde el panel de desarrolladores.
    Este método te permite generar credenciales de API rápidamente sin usar una interfaz de línea de comandos.

-   En el campo nombre de la aplicación, ingresa un nombre descriptivo (por ejemplo, Fozzels_APP).

-   Haz clic en el botón Crear.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/aOyMompGNxvMk8AwTspY6_RThyDKNEsWcw.png)

4.  Configuración de versión y configuración obligatoria

        4.1. Después de hacer clic en Crear, serás redirigido a la página Crear una versión.
 ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/5WoUJ-Qq7qALDUUuzlNBWf0V0lxaSjhlbQ.png)

4.2. Nombre y URL de la aplicación

-   Ingresa el nombre de la aplicación

-   Ingresa la URL de tu tienda (por ejemplo, [https://tu-nombre-de-tienda.myshopify.com](https://tu-nombre-de-tienda.myshopify.com)).

4.3. Configuración obligatoria

-   Incrustar aplicación en el administrador de Shopify: debe estar habilitado.
    Esto garantiza que la interfaz de Fozzels aparezca dentro de tu panel de administración de Shopify.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/fCpNrLVZblbWTWkIntCgl86EmrjmORG6BQ.png)

5.  Configuración de acceso a API (ámbitos)

5.1. Desplázate hacia abajo hasta la sección Acceso para definir qué datos puede gestionar Fozzels.

5.2. En el bloque Ámbitos:

-   Haz clic en el enlace Seleccionar ámbitos en la esquina superior derecha.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/RgsEpex9lyPaJ8AyOjR4-So8df3QeQ6Fcw.png)

6.  Selección de permisos

6.1. En la ventana modal Seleccionar ámbitos:

-   Utiliza la barra de búsqueda para encontrar permisos específicos.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/wQoW7bQIW9fqRTTnrHwUO9bIMpWZ6tDL_w.png)

    6.2. Permisos requeridos
    Esta lista es obligatoria para todos los tipos de tiendas, incluidas las tiendas que utilizan Shopify Markets y Language Pages.

Productos: read_product_listings, read_products, write_products, read_product_feeds.

Metadatos: read_metaobject_definitions, read_metaobjects.

Traducciones: read_translations, write_translations.

Configuraciones regionales: read_locales.

    Mercados: read_markets, write_markets.
    o copia/pega esto

    read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations
    6.3. Haz clic en Listo una vez que se hayan seleccionado todos los ámbitos requeridos.
    ![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/Y-HyRqCHeriVdpYrrHm2aJyi7Y8OUVBTDw.png)
    7. Lista de verificación previa al lanzamiento: configuración de aplicación

-   Antes de hacer clic en el botón Lanzar, verifica lo siguiente:

-   URL de la aplicación: se ingresa una URL de tienda válida (por ejemplo, [https://nombre-de-tienda.myshopify.com](https://nombre-de-tienda.myshopify.com)).

-   Versión de API: la versión de API de webhooks está establecida en la última versión estable (por ejemplo, 2025-10).

-   Interfaz incrustada: "Incrustar aplicación en administrador de Shopify" está habilitada (requerida para Fozzels).

-   Ámbitos obligatorios: todos los permisos requeridos están presentes:

-   Productos: read_product_listings, read_products, write_products, read_product_feeds

-   Metadatos: read_metaobject_definitions, read_metaobjects

-   Traducciones: read_translations, write_translations

-   Configuraciones regionales: read_locales

-   Mercados: read_markets, write_markets

-   Verificación de ámbito: todos los permisos incluyen el acceso de lectura y escritura requerido donde sea aplicable.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/nE6aiS2K21Vs_e5K45UMqgI7KjTAAvev9g.png)

8. Lanzamiento de la versión

8.1. Para activar la configuración:

-   Localiza el botón Lanzar en la esquina superior derecha de la página Crear una versión.

-   **Haz clic en Lanzar.**

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/lMRrK6F1zY287cIilwfdL7zuoi-eQJsO2A.png)

8.2. En la ventana emergente:

-   Nombre de versión (opcional): por ejemplo, v1.
    Si se deja en blanco, Shopify generará automáticamente un nombre.

-   Mensaje de versión (opcional): por ejemplo, "Configuración inicial para Fozzels".

8.3. **Haz clic en el botón Lanzar** en la esquina inferior derecha para finalizar.

El estado de la versión cambiará a **Activo**.

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/m8pxnVX5dNifvnh6z0IXZfDMkkMqS2RQwA.png)

###
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/BA5mQQb2jWU5J80LBoSsUOIs1OoRl3M3EA.png)

9.  Recuperación de credenciales de API

9.1. En el panel de desarrolladores de Shopify, ve a **Configuración** en la barra lateral izquierda.

9.2. En la sección **Credenciales de la aplicación** (claves de API), copia lo siguiente:

-   ID de cliente (clave de API)

-   Secreto de cliente (clave de secreto de API)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/VAGvtjJ3zAMPYkyQu6vUbofnGVh7jLqYyw.png)

10.  Lanzamiento de la instalación

10.1. Después del lanzamiento, ve a la pestaña Inicio de la aplicación.

    10.2. Asegúrate de estar en la pestaña Inicio.
Si tu cuenta tiene solo un sitio web y planeas usar Fozzels exclusivamente para ese sitio web, simplemente haz clic en **Instalar aplicación**. La aplicación se instalará automáticamente.
Si tienes una cuenta de partner o administras múltiples sitios web, necesitarás configurar los ajustes de distribución para la aplicación Fozzels.

10.3. En la barra lateral izquierda, abre la pestaña Distribución.

    10.4. Haz clic en Seleccionar método de distribución y elige **Distribución personalizada**.
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/pa4OKRyCk3kJpPajX3ZzHmcMAbZkGU_7Eg.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XfVKpSARlwl_mvRyvXXrMLHhUdvZ7M7Suw.png)
![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/eq2IpYTVXtyGiP9Pxu2xCSHWHkNCpmP1CA.png)

10.6. Después de la autorización, volverás a la página de Distribución personalizada.

-   Ingresa el dominio de tu tienda (por ejemplo, tu-tienda.myshopify.com).

-   Haz clic en Generar enlace.

-   Confirma la acción en la ventana emergente.

10.7. Serás redirigido a la página Instalar aplicación en el administrador de tu tienda.

-   Haz clic en Instalar.

-   Confirma el mensaje "Esta aplicación es exclusiva de tu tienda".

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/tCyXVtYOydxTaxoxfZezfHkC0FxDe9xsBw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/R8WiM6_-2NXlrFjFg29bxZA7IkZVz9oISQ.png)

10.8. Para completar la sincronización, vuelve a tu cuenta de Fozzels para ingresar las credenciales y finalizar la conexión.

11.  Crear integración en Fozzels.

11.1. Configuración de conexión

-   Inicia sesión en tu cuenta de Fozzels: [https://app.fozzels.com](https://app.fozzels.com)

-   Ve a la sección Integración.

-   Haz clic en Nueva integración.

-   Elige Shopify como plataforma.

-   Elige el tipo de conexión de aplicación personalizada.

-   Ingresa el nombre de la integración.

-   Ingresa la URL de la tienda web de Shopify.

Nota:

Para los campos URL y nombre de host de aplicación, siempre usa el dominio .myshopify.com, no la URL de tienda pública.
Ejemplo: teststore.myshopify.com

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/sF_OsmKhLhv87WeuVC4_yxL77LH9O2-uAw.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/XLCPhjqaC_s3HQuyjSEhw6SsdnMZDal0vA.png)

![](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/TzMbd_ReJA8hdEjYW1EFgKWryHEquafa0w.png)

12.  Ingresa credenciales de API en Fozzels

12.1. Copia y pega las credenciales en Fozzels:

-   Clave de API → campo de clave de API

-   Clave de secreto de API → campo de secreto de API

-   Nombre de host de aplicación → campo Nombre de host de aplicación

13.  Configuración adicional y generación de token de acceso

13.1 **Habilita los alteradores Markets o LangShop** si necesitas sincronizar contenido en múltiples mercados o idiomas.

13.2 Haz clic en el botón Guardar. El campo Token de acceso estará disponible después de su generación.
13.3 Vete a la pestaña Sitios web y tiendas.
13.4 Activa tu integración.
13.5 Haz clic en el botón Extraer sitios web y tiendas para obtenerlos.
13.6 El sistema generará automáticamente el Token de acceso después de la autorización exitosa.

14. Activación y sincronización

14.1. Activa sitios web e idiomas usando alteradores. El idioma predeterminado se marca con un asterisco.

14.2. Haz clic en Extraer productos para comenzar a importar productos y atributos. El progreso se mostrará en la barra de progreso.

14.3. Ve a la pestaña Atributos para ver, habilitar, deshabilitar o editar atributos importados. Lee más sobre la gestión de atributos [aquí](https://fozzels.freshdesk.com/a/solutions/articles/103000368952).

Después de crear exitosamente la integración, puedes **comenzar** a construir flujos y **generar** tu **[primer contenido](https://fozzels.freshdesk.com/a/solutions/articles/103000367976)**!
