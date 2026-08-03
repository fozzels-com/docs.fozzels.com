---
id: '103000408453'
title: 2.8.2 Configuración completa de integración con VTEX
sidebar_position: 19
slug: /integration-connectivity/full-integration-setup-with-vtex
description: >-
  Esta guía proporciona instrucciones paso a paso para integrar tu tienda
  VTEX con Fozzels. El proceso implica dos etapas principales: generar las
---

Esta guía proporciona instrucciones paso a paso para integrar tu tienda **VTEX** con **Fozzels**. El proceso implica dos etapas principales: generar las claves API requeridas dentro de tu panel de administración de VTEX, y completar la configuración dentro de Fozzels.

## Parte 1. Configuración en el lado de VTEX

Para permitir que Fozzels lea la estructura de tu catálogo y escriba contenido generado de vuelta a tu tienda, necesitas crear un rol dedicado con permisos específicos y generar una **Clave de aplicación** y un **Token de aplicación**.

### Paso 1. Crear un rol con permisos requeridos

1.  Inicia sesión en tu panel **VTEX Admin**.

2.  Ve a **Configuración de cuenta** → **Gestión de usuarios** → **Roles**.

3.  Haz clic en **Nuevo rol**.

4.  Asigna un nombre claro al rol (por ejemplo, `Integración de Fozzels`).

5.  En la lista de permisos, añade acceso para los siguientes recursos:

-   **Catálogo (Gestor de licencias):**

-   `Categoría` — Lectura / Escritura

-   `Marca` — Lectura / Escritura

-   `Producto` — Lectura / Escritura

-   `SKU` — Lectura / Escritura

-   `Especificación / Atributos` — Lectura / Escritura

-   **CMS (si se usa para medios/imágenes):**

-   Acceso de `Lectura` / `Escritura`

6.  Guarda el nuevo rol.

### Paso 2. Generar clave de aplicación y token de aplicación

1.  En el menú **Configuración de cuenta**, ve a **Gestión de cuenta** → **Claves de aplicación**.

2.  Haz clic en **Gestionar claves** o **Generar clave**.

3.  Introduce una etiqueta reconocible (por ejemplo, `Conector de Fozzels`).

4.  Asigna el rol creado en el paso 1 (`Integración de Fozzels`) a esta clave.

5.  El sistema generará dos credenciales:

-   **Clave de aplicación** (permanece visible en tu lista).

-   **Token de aplicación** (mostrado **solo una vez** al crear).

6.  **Importante:** ¡Copia y almacena el **Token de aplicación** en un lugar seguro inmediatamente! ¡Una vez que cierres la ventana modal, no se puede recuperar de nuevo!

Los usuarios también pueden consultar la base de conocimientos oficial de VTEX para obtener instrucciones detalladas sobre cómo crear claves de aplicación y tokens:

-   Portugués: [https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave](https://help.vtex.com/pt/docs/tutorials/chaves-geradas#gerar-chave)
-   Inglés: [https://help.vtex.com/docs/tutorials/generated-keys](https://help.vtex.com/docs/tutorials/generated-keys)
-   Español: [https://help.vtex.com/es/docs/tutorials/claves-generadas](https://help.vtex.com/es/docs/tutorials/claves-generadas)

##
Parte 2. Configuración en el lado de Fozzels

Una vez que tus credenciales de API estén listas, configura la conexión dentro de Fozzels.

### Paso 1. Crear una nueva integración

1.  Inicia sesión en **Fozzels** y abre **Integraciones** desde el menú de navegación superior.

2.  Haz clic en el botón verde **\+ Crear**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/gr4ewlKqt8412XMEVryYBDav3OrTYjV3cA.png)

3.  Selecciona **VTEX** de la lista de plataformas de integración disponibles.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/XhEgu0COlAJDugphXl_XiaSkCKfS7TXueg.png)

### Paso 2. Introduce detalles de configuración (Pestaña 1: Configuración)

Rellena el formulario de conexión:

-   **Nombre:** Introduce un nombre para esta integración (por ejemplo, `Tienda principal de VTEX`).

-   **URL:** Introduce la URL/dominio de tu tienda VTEX.

-   **Clave de aplicación:** Pega la clave de aplicación generada en VTEX.

-   **Token de aplicación:** Pega el token de aplicación generado en VTEX.

-   **Entorno** _(opcional)_: Por defecto es `vtexcommercestable`. Solo modifica esto si VTEX te indicó que uses un entorno personalizado.

-   **Configuraciones regionales de traducción** _(opcional)_: Para cuentas transfronterizas, especifica configuraciones regionales de VTEX separadas por comas (por ejemplo, `es-AR, en-US`). Déjalo vacío para tiendas monolingües.

-   **Horario de extracción global** _(opcional)_: Establece un horario de extracción automatizado personalizado o deja la configuración predeterminada.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pWrF-JFfW_Q5FelNCSz3IuA9l86yXEdItw.png)

-   **Limitación de extracción / Retrasos de API** _(opcional)_:

-   **Retraso entre páginas:** Establece una duración de pausa después de cada página de resultados obtenida durante una extracción (`100–15.000 ms`). Déjalo vacío para usar el valor predeterminado de la plataforma.

-   **Retraso entre solicitudes:** Establece una duración de pausa entre llamadas de API individuales durante una extracción (`100–15.000 ms`). Déjalo vacío para usar el valor predeterminado de la plataforma.

-   ⚠️ **Nota:** Establecer estos valores por debajo de los valores predeterminados de la plataforma puede activar la limitación de velocidad de VTEX y causar que las extracciones de catálogo fallen.

Haz clic en **Guardar** en la esquina inferior izquierda.

### Paso 3. Verificar estado y obtener tiendas (Pestaña 2: Sitios web y tiendas)

1.  Verifica que todos los indicadores de estado en la esquina superior derecha estén activos:

-   **Activo** — Habilitado (interruptor verde).

-   **Autorizado** — Marca de verificación verde.

    -   **API REST conectada** — Marca de verificación verde.
        ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/RnG46ot4A8YtvTAhatBAQIynkoXI8pbdJQ.png)

2.  Haz clic en el botón **EXTRAER SITIOS WEB Y TIENDAS** en la esquina inferior izquierda.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/pywm-NKYAWTD0xkGPKQYZPH5WI5LKQCwIw.png)

3.  Tus sitios web y configuraciones regionales de tiendas aparecerán en la tabla. Cambia los interruptores de **Estado** a activo para los sitios web y tiendas que planeas procesar.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/Nv3b_PjszS4fHUfa_V2atIDZe_Sx838pAA.png)

### Paso 4. Extraer datos del catálogo (Extraer productos)

1.  Localiza tu tienda en la tabla y haz clic en **Extraer productos** (o haz clic en la flecha desplegable junto a ella).

2.  Puedes activar la sincronización de datos para entidades específicas o ejecutarlas secuencialmente:

-   **Atributo de producto**

-   **Atributo de categoría**

-   **Atributo de marca**

-   **Categoría**

-   **Marca**

    -   **Producto**
**![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/A-WrFZksz5q1Ml-MXGaobf-Sn_rKBjsNEA.png)**

3.  Espera a que se complete la sincronización. El estado de cada entidad se volverá verde mostrando **100%**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/NamLSz4d9IyB6p3k94ULepvi0njfq465sQ.png)

4.  Haz clic en el icono del ojo (**Ver**) junto a cualquier bloque de entidad para inspeccionar los datos extraídos.

![](/img/kb/integration-connectivity/full-integration-setup-with-vtex/e6KLPc8LFKplzkHemoeoNUVVG1SLMjnF7w.png)

¡Felicidades! Tu integración de **VTEX** ahora está completamente configurada y lista para usarse. Fozzels ahora sincronizará sin problemas tus datos de catálogo, permitiéndote generar descripciones de productos con IA de alta calidad, contenido localizado y metadatos con facilidad. Si necesitas hacer ajustes más tarde, siempre puedes volver a la página de Configuración de integración.

¡Feliz automatización!
