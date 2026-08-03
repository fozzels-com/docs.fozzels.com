---
id: '103000408207'
title: '4.3.2.a Generación de textos alternativos de imagen para Magento 2: Conocimientos técnicos y configuración paso a paso'
sidebar_position: 9
slug: /content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu
description: Dado que ya está familiarizado con la mecánica fundamental de la configuración de flujos de contenido de productos en Fozzels, este manual técnico se enfoca exclusivamente en
---

Dado que ya está familiarizado con la mecánica fundamental de la configuración de flujos de contenido de productos en Fozzels, este manual técnico se enfoca exclusivamente en la arquitectura única de Magento 2: interactuando con el atributo `product_media_gallery` del sistema y optimizando el consumo de tokens durante bucles de procesamiento de galería de medios en lote.

## Paso 1. Configuración de permisos de escritura para galería de medios (requisito previo)

A diferencia de los campos de texto estándar (p. ej., descripciones de productos, nombres), los textos alternativos en Magento se encuentran dentro de la infraestructura de galería de imágenes y se escriben directamente en el atributo del sistema `product_media_gallery`. De forma predeterminada, Fozzels trata este atributo como de solo lectura, utilizándolo estrictamente como marcador para filtrar el catálogo de productos por presencia de imagen.

Para otorgar al sistema permiso para sobrescribir e inyectar datos en esta ranura, debe cambiar su estado a **Mutable**:

1.  Navegue al menú superior principal: **Integraciones** → seleccione su instancia activa de **Magento 2**.

2.  Abra la **Pestaña 3: Atributos**.

3.  En la barra de búsqueda/filtro, escriba `media`. Localice la fila con el código `product_media_gallery` (Galería de medios) y haga clic en el botón turquesa **\[Editar atributo\]**.

4.  Dentro de la superposición de configuración, busque en la sección _Transformar datos_, encuentre la casilla de verificación **Mutable** y márcala (**\[v\] Mutable**).

5.  Haga clic en el botón azul **Guardar** en la esquina inferior derecha.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/ryugiLjaej08TONBWZC6dvmgdeHvEKzJOA.png)
![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/vj3HVtE0gIyKK1lMzn0NeLCwxHle8IT1Cg.png)

## Paso 2. Inicialización de flujo y asignación de atributos

1.  Vaya a la sección **Flujos de contenido** y haga clic en el botón **Crear flujo** (o seleccione productos de destino directamente desde su vista de catálogo y haga clic en **Acciones → Crear flujo**).

2.  Dentro de la **Pestaña 1: Nuevo flujo**, configure sus parámetros de entorno:

-   **Tienda / Integración:** Seleccione su instancia de Magento específica, configuración del sitio web y vista de tienda de destino en los menús desplegables.

-   **Nombre:** Proporcione un título técnico claro para su flujo.

-   **Tipo de entidad:** Esto se establece automáticamente en `Producto`.

3.  **Atributo de destino:** Haga clic en el menú desplegable de selección de **Atributo\***, escriba `media` y seleccione el atributo del sistema **Galería de medios**. Esto canaliza de forma segura las cadenas generadas por IA próximas directamente en el esquema de base de datos de galería de imágenes en lugar de bloques de descripción estándar.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/Btu-8xXR_jSHpiFqqxtTZJBUXcu0hyrmTQ.png)

## Paso 3. Selección del modelo de visión y modo de escaneo (Delta frente a sobrescritura completa)

En la **Pestaña 2: Configuración de IA**, seleccione su proveedor subyacente y modelo (p. ej., niveles de GPT o Gemini con capacidades de visión multimodal para analizar recursos de imagen), luego defina cómo el ejecutor de ejecución debe interactuar con su base de datos de tienda Magento en vivo:

-   **Modo Delta (la casilla de verificación "Regenerar textos ALT forzados" NO está marcada):** El escenario predeterminado. El ejecutor en segundo plano escanea su catálogo de Magento y solicita finalizaciones de IA **solo para recursos de imagen donde el campo de texto alternativo está actualmente vacío**. Esto preserva su trabajo de SEO manual existente y ahorra sus créditos de API.

-   **Modo de sobrescritura completa (la casilla de verificación "Regenerar textos ALT forzados" está marcada):** El escenario de reescritura integral. El motor omite completamente los estados de metadatos actuales en la tienda, borrando metadatos ALT antiguos dentro del lote seleccionado y reemplazándolos todos con nuevas cadenas generadas por IA.

> ? **Recomendación técnica:** Deje la casilla de verificación **Habilitar cambio de tamaño de imagen** habilitada. Si un archivo de imagen en Magento es mayor de 2 MB o excede una resolución de 2048 px, Fozzels la reducirá automáticamente a las restricciones de entrada del modelo de visión estándar. Esto protege activamente su tubería contra errores de carga (generaciones fallidas) y optimiza los créditos de token.

![](/img/kb/content-creation-flows/generating-image-alt-texts-for-magento-2-technical-insights-step-by-step-configu/cbKMN8kS6jIqV-wZJGv_TV9zC74UxTrCFg.png)

## Paso 4. Ingeniería de solicitudes

Dentro de la **Pestaña 3: Selección de flujo e indicación**, elabora las instrucciones explícitas para el modelo de IA. Dado que la tubería opera en modo centrado en activos (1 activo de imagen = 1 finalización de solicitud), su solicitud debe instruir al modelo de visión para fusionar elementos visuales con el contexto textual de su producto.

1.  En el espacio de trabajo **Solicitud**, escriba sus reglas técnicas fundamentales (p. ej., restricciones de caracteres: el estándar de la industria es inferior a 125 caracteres para lectores de pantalla, y una prohibición de frases de parada genéricas introductorio como _"imagen de"_).

2.  Utilice la barra lateral **Atributos** a la derecha para buscar y **arrastrar y soltar** tokens dinámicos de Magento directamente en el cuerpo de su solicitud (p. ej., `{name}`, `{color}`, `{material}`, `{brand}`).

### **Plantillas de solicitud:**

> **Opción 1: Estándar de moda y ropa de comercio electrónico** `"Escriba un texto alternativo de SEO conciso y natural para una etiqueta de accesibilidad del sitio web de comercio electrónico. Describe los detalles visuales, el estilo y el corte del artículo que se muestra en la imagen. Integre estos atributos de forma natural si son visibles: {color} {name} de {brand}, hecho de {material}. Mantenga la salida por debajo de 125 caracteres, evite estrictamente el relleno de palabras clave y no comience con frases como 'foto de' o 'imagen de'. Solo describa lo que realmente está presente en la foto."`

> **Opción 2: Minimalista y enfocada en detalles del producto** `"Genere una etiqueta alt limpia y profesional para un lector de pantalla. Concéntrese puramente en el diseño del producto, el diseño y las características visuales distintivas. Utilice los metadatos proporcionados para garantizar la precisión: {brand} {name} en {color}. Mantenga la descripción realista, fáctica e inferior a 120 caracteres. Evite rellenos de marketing y no use 'foto de' o 'imagen de'. Solo devuelva la cadena de descripción."`

## Paso 5. Límites de volumen de procesamiento y diseño de lista por lotes

En la **Pestaña 4: Automatización**, el campo de configuración **"Cantidad de productos para los que crear contenido por día"** calcula umbrales de procesamiento basados en entidades de producto principal, no en archivos de imagen individuales. Debido a que Fozzels evalúa todos y cada uno de los recursos de medios dentro de una galería de productos, establecer un límite de 10 productos donde cada uno contiene 5 imágenes resultará en 50 finalizaciones de visión de IA distintas y facturadas. Sin embargo, incluso con esta estructura de procesamiento, todos los resultados generados permanecerán bien organizados en su **Lista de lotes**, agrupados visualmente por SKU de producto para que pueda revisar, editar o aprobar en lote fácilmente antes de insertar los metadatos en directo.
