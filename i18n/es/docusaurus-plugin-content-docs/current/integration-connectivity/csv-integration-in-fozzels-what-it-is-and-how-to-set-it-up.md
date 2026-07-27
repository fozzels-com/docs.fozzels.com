---
id: '103000406293'
title: '2.9.1: integración de CSV en Fozzels: qué es y cómo configurarla'
sidebar_position: 20
slug: >-
  /integration-connectivity/csv-integration-in-fozzels-what-it-is-and-how-to-set-it-up
description: >-
  ¿Qué es la integración de CSV? La integración de CSV te permite conectar tu catálogo de productos a Fozzels usando un archivo CSV estándar. Si tu plataforma no tiene una
---

## ¿Qué es la integración de CSV?

La integración de CSV te permite conectar tu catálogo de productos a Fozzels usando un archivo CSV estándar. Si tu plataforma no tiene una integración directa con Fozzels, sin problema: simplemente exporta tus datos como CSV y cárgalos. Fozzels leerá tus productos y sus atributos, brindándote acceso a la gama completa de características de la plataforma.

## Paso 1: crear una nueva integración

En el menú de navegación superior, haz clic en **Integraciones**, luego haz clic en el botón **+ Crear** en la esquina superior derecha.

## Paso 2: elige el tipo de integración

Verás una lista de plataformas disponibles: Akeneo, Shopify, Magento2, WooCommerce y otras. Para conectarte a través de archivo, selecciona **Archivo sin procesar**.

## Paso 3: configura la integración

Se abrirá un formulario con tres pasos: **Configuración → Sitios web y tiendas → Atributos**.

### Campos obligatorios

Antes de cargar tu archivo CSV, completa los tres campos obligatorios:

-   **Nombre**: un nombre para la integración (por ejemplo, `Mi CSV de catálogo de productos`)
-   **URL**: un enlace a la fuente (si es aplicable)
-   **Columna SKU**: el nombre exacto de la columna en tu archivo que identifica de forma única cada producto (por ejemplo, `sku`, `id_producto`, `artículo`)

Luego haz clic en **Guardar**. Solo después de guardar se activará el área de carga de CSV.

> ¿Por qué? El sistema necesita conocer el nombre de la columna SKU antes de leer el archivo: esto es necesario para el procesamiento correcto de datos. Guarda tu configuración primero, luego carga el archivo.

### Opciones de formato

| Parámetro | Valor predeterminado | Descripción |
|-----------|---------------------|-------------|
| Formato | CSV | Formato de archivo |
| Delimitador | Coma (,) | Separador de columnas |
| Carácter de encierro | `"` | Carácter contenedor de valor |
| Codificación | UTF-8 | Codificación de archivo |
| La primera fila es encabezado | Sí | Si la primera fila contiene encabezados de columna |
| Columna SKU | — | Nombre de la columna que identifica de forma única cada producto |

### Cronograma global de extracción

Esto establece la hora para la sincronización automática. El valor predeterminado es `03:30`. Si necesitas un cronograma diferente para una tienda específica, puedes anularlo en la configuración de esa tienda.

> Para activar la integración, habilita el alterador **Activo** en la esquina superior derecha del formulario. Sin esto, no se ejecutará ninguna sincronización.

## Paso 4: carga el archivo CSV

Después de guardar, el área de carga se activa. Puedes cargar tu archivo de dos formas:

-   **Arrastra y suelta**: arrastra tu CSV directamente a la zona de carga
-   **Cargar**: haz clic en el botón azul **Cargar** y selecciona un archivo de tu computadora

Una vez cargado, el nombre y tamaño del archivo aparecerán debajo de la zona de arrastrar y soltar, confirmando que el archivo se ha agregado correctamente.

> Al leer el archivo, el sistema utiliza la configuración de formato que definiste anteriormente: delimitador, codificación y carácter de encierro.

Después de cargar el archivo, haz clic en **Guardar** nuevamente: el sistema te llevará automáticamente a la pestaña **Sitios web y tiendas**.

## Paso 5: sitios web y tiendas

Haz clic en el botón **Extraer sitios web y tiendas**: el sistema creará un registro para tu sitio web y tienda virtuales. Este es el enfoque estándar en Fozzels: incluso al trabajar con una carga de archivo, la plataforma utiliza la estructura universal sitio web → tienda.

Una vez que el registro aparezca en la tabla, **activa el sitio web y la tienda** usando los alteradores en la columna **Estado**.

Cuando ambos estén activos, el botón **Extraer productos** se vuelve disponible. Haz clic en él para comenzar a importar productos desde tu archivo CSV al catálogo de Fozzels.

> La tabla también muestra el **cronograma de extracción**: la hora de sincronización que estableciste en el paso 3. Puedes anularlo por tienda si es necesario.

## Paso 6: visualización de productos importados

Una vez que se complete la extracción (la barra de progreso alcanza el 100%), haz clic en el icono **Ver productos** en la columna Acciones para abrir el catálogo de productos para esta integración.

### Cómo se organizan los datos:

-   Cada **fila** del CSV se convierte en un producto separado
-   Cada **columna** del CSV se convierte en un atributo de producto

### Gestión de visibilidad de columnas

No todos los atributos se muestran de forma predeterminada. Para elegir qué columnas mostrar, haz clic en **Visibilidad de columna** en la esquina superior derecha de la tabla y marca los atributos que necesitas.

### Filtrado de productos

Hay dos opciones de filtrado disponibles:

-   **Filtros en línea**: campos directamente debajo de los encabezados de columna para búsqueda rápida
-   **Filtro avanzado**: lógica de condiciones Y/O flexible para consultas complejas

### Acciones en masa

Una vez que hayas seleccionado los productos que necesitas, el kit de herramientas completo de Fozzels está disponible: agrupar productos, crear conjuntos de productos e iniciar flujo de contenido, flujo de imagen o flujo de vídeo según tu selección.

> De esta forma, tu archivo CSV se convierte en una fuente de datos completamente funcional en Fozzels: con todas las herramientas de contenido de la plataforma a tu disposición.

## Paso 7: preparación de atributos antes de crear un flujo

Antes de crear un flujo de contenido, asegúrate de que el atributo objetivo esté configurado correctamente. Ve a la pestaña **Atributos** de tu integración y haz clic en el icono de edición (lápiz) junto al atributo que deseas utilizar:

-   **Mutable**: esto debe estar habilitado. Sin él, Fozzels no puede escribir contenido generado en este campo, y el atributo no aparecerá en el menú desplegable al crear un flujo.
-   **Permitir HTML**: habilita esto si deseas generar contenido con marcado HTML (por ejemplo, descripciones con etiquetas `<p>`, `<ul>`, etc.).

> Obtén más información sobre atributos, densidad de datos y campos personalizados en nuestro artículo: [análisis de calidad de atributos](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes).

## Paso 8: creación de un flujo de contenido

Para generar contenido basado en tus productos importados, necesitas crear un **flujo de contenido**. Hay dos formas de hacerlo:

**Opción 1: a través del menú de flujos de contenido:** ve a **Flujos de contenido** en el menú superior y haz clic en **+ Crear**.

**Opción 2: directamente desde el catálogo:** selecciona los productos que necesitas (o todos ellos) → abre el menú desplegable **Acciones** → selecciona **Crear un nuevo flujo de contenido**.

En el formulario de creación, ingresa un **nombre** y selecciona el **atributo**: la columna para la cual se generará contenido.

El resto del proceso es estándar y consta de cuatro pasos:

**Paso 1: nuevo flujo:** nombre y atributo objetivo.

**Paso 2: configuración de IA:** elige un proveedor de IA (OpenAI, Google Gemini, etc.), modelo, estilo de texto y tono, y límite de tokens.

**Paso 3: selección de flujo e indicación:** activa el flujo, configura el filtrado de productos y escribe tu indicación. Utiliza atributos con una puntuación alta de densidad de datos para mejores resultados. Obtén más información en nuestro artículo: [creación de indicaciones y filtrado](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor).

**Paso 4: automatización:** establece el número de productos por ejecución, configura el cronograma e inicia a través de **Ejecutar ahora** o **Planificar y cerrar**.

> Si eres nuevo en flujos de contenido, te recomendamos leer: [definición de flujo y tipos de contenido](/content-creation-flows/flow-definition-and-content-types-text-image-video) y [creación de un nuevo flujo de contenido](/content-creation-flows/creating-a-new-content-flow-and-initial-settings).

## Paso 9: obtención de resultados

A diferencia de otras integraciones (Shopify, Magento, etc.), **el botón "Guardar y sincronizar" no funciona para CSV**: no hay una conexión en vivo a una tienda para enviar datos de vuelta. En su lugar, los resultados se descargan manualmente mediante exportación.

### Cómo exportar contenido generado

1.  Ve a la **lista de lotes** de tu flujo
2.  Selecciona los registros que necesitas a través de **Acciones → Seleccionar todo** (o manualmente)
3.  En el menú desplegable **Acciones**, elige **Exportar como CSV**
4.  Confirma en la ventana emergente haciendo clic en **Iniciar exportación**
5.  El sistema pondrá en cola el archivo: recibirás una notificación cuando esté listo

### Dónde descargar el archivo

Ve a **panel → Exportar / Datos generados**. Esta página muestra una tabla de todos los archivos generados con un estado **Disponible**. Encuentra tu archivo y haz clic en el botón **ZIP** para descargarlo.

> ⚠️ **El archivo solo está disponible durante 24 horas** desde el momento en que se creó. Asegúrate de descargarlo antes de que expire.

## Enlaces útiles

-   [Análisis de calidad de atributos. Densidad de datos. Atributos personalizados](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes)
-   [Definición de flujo y tipos de contenido (texto, imagen, vídeo)](/content-creation-flows/flow-definition-and-content-types-text-image-video)
-   [Creación de un nuevo flujo de contenido y configuración inicial](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Creación de indicaciones y filtrado. Editor de indicaciones de arrastrar y soltar](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)
