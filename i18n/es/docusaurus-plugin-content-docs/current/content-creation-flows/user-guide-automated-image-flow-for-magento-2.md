---
id: '103000408096'
title: '4.5.1.a. Guía del usuario: flujo de imagen automatizado para Magento 2'
sidebar_position: 14
slug: /content-creation-flows/user-guide-automated-image-flow-for-magento-2
description: >-
  El flujo de imagen para Magento es una herramienta de automatización especializada de nivel empresarial diseñada para generación de imágenes de IA en masa, mapeo automatizado de metadatos y sincronización directa con
---

**El flujo de imagen para Magento** es una herramienta de automatización especializada de nivel empresarial diseñada para generación de imágenes de IA en masa, mapeo automatizado de metadatos y sincronización directa con su catálogo de Magento. Al configurar este flujo, establece una tubería autónoma que monitorea su tienda Magento, procesa miles de productos y actualiza dinámicamente su sitio web basado en criterios de filtro avanzados.

> **Importante:** Le recomendamos encarecidamente que **no active** el flujo (manteniendo el interruptor "Flujo activo" **DESACTIVADO**) hasta que haya completado completamente todas las configuraciones dentro de Fozzels y probado su configuración.

## 1\. Creación de un nuevo flujo de imagen de Magento (Pestaña 1)

Esta pestaña maneja la conexión principal e identidad de su secuencia de automatización de Magento.

-   **Opción A: A través del menú de flujos de imagen** — Navegue a **Flujos de imagen** en la barra de navegación superior, haga clic en **Nuevo flujo de imagen** y seleccione secuencialmente su **Integración de Magento**, sitio web y vista de tienda en los menús desplegables.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3sMs1RpGzJC1CfMq-OPKPRx6S7bvaX80XQ.png)

-   **Opción B: Desde el catálogo de productos** — Vaya a **Catálogo → Productos**, filtre los SKU específicos de Magento que desea procesar, selecciónelos y haga clic en **Acciones → Crear flujo de imagen**. Esto completa automáticamente su vista de tienda de Magento y contexto de producto.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/FYFCs9P6ybHQ4OrlVaSn9YmgmftqIdhxAw.png)

**Pasos esenciales:**

1.  **Nombre su flujo:** Dale un nombre claro y descriptivo a su flujo (p. ej., "Magento Store - Otoño 2026 - Gemini Pro").

2.  **Confirmar selección:** Confirme sus parámetros de tienda de Magento haciendo clic en el botón **Enviar** en la parte inferior de la página.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/liZ6uL_K1ryZ9ltZQsCUAhG6jAYP4UqhrQ.png)

## 2\. Configuración de IA y cuadrícula de medios (Pestaña 2)

En esta pestaña, define el motor del modelo de IA principal y las características de diseño visual exactas requeridas para sus plantillas de tema de Magento.

### **Selección de proveedor de IA y modelo**

Seleccione su red de procesamiento y modelo específico de las tarjetas interactivas en la pantalla:
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/3eMz8tYlXhUnC_8wEhgtjjig_7FHQP_x-w.png)

-   **Google | Gemini:**

-   **Gemini 2.5 Flash | Nano Banana:** Un modelo rápido y eficiente optimizado para tareas de alto volumen y baja latencia. Soporta **hasta 3 presets de referencia**.

-   **Gemini 3 Pro | Nano Banana Pro:** Diseñado para producción de activos profesionales e instrucciones complejas. Presenta un proceso "Pensamiento" predeterminado que refina la composición y soporta **hasta 14 presets de referencia**.

-   **Gemini 3.1 Flash | Nano Banana 2:** Un modelo actualizado y altamente eficiente equilibrado para creación de activos de alto volumen. Soporta **hasta 14 presets de referencia**.

-   **Prueba virtual `NUEVO`:** Un modelo especializado para generar imágenes fotorrealistas que muestren cómo se ve la ropa en una persona (requiere un preset de imagen de persona y una imagen de prenda de producto).

-   **OpenAI | ChatGPT:**

-   **GPT Imagen 1:** Un modelo de generación de imágenes preciso y de alta fidelidad que utiliza los marcos multimodales más recientes.

-   **GPT Imagen 1 Mini `NUEVO`:** Un motor de generación y edición de imágenes altamente rentable, que ofrece el mejor valor para casos de uso de alto volumen.

-   **GPT Imagen 2 `NUEVO`:** Un modelo de generación de última generación construido para renderizado rápido y de alta calidad con resoluciones flexibles de hasta 3840 px.

-   **xAI:**

-   **Grok Imagine Imagen:** El modelo de generación de imágenes estándar de xAI, que proporciona imágenes de alta calidad a partir de solicitudes de texto. Soporta **hasta 5 presets de referencia**.

-   **Grok Imagine Imagen Pro `PRO`:** Arquitectura xAI premium que proporciona calidad de imagen superior con detalle y precisión de textura mejorados. Soporta **hasta 5 presets de referencia**.

### **La cuadrícula de formato de salida interactivo**

Los temas de Magento se basan en gran medida en dimensiones de imagen precisas para evitar cambios de diseño en su interfaz. Use la cuadrícula para bloquear especificaciones exactas de píxeles:

1.  **Seleccione relación de aspecto:** En la columna izquierda, elija su geometría de diseño (p. ej., **1:1 cuadrado** estándar para cuadrículas de categoría, o **3:4 retrato** para páginas de detalles de productos (PDP)).

2.  **Seleccione resolución y escala:** Haga clic directamente en una celda de cuadrícula que se asigne a su nivel de píxel deseado bajo las columnas **512, 1K, 2K o 4K** (p. ej., **512x512** hasta **4096x4096** para proporcionar una experiencia de zoom por hover profundo en su tienda).

3.  **El panel de vista previa:** El panel derecho interactivo representa dinámicamente un marco de recorte visual, el formato de archivo de destino y calcula el **tamaño estimado** (peso del archivo) y **tokens estimados** (costo de generación) por solicitud de imagen.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/Ked7uS5641FdzLgFJkkyBLIIB44pYiuh5Q.png)
3\. Filtrado de catálogo de Magento e indicación (Pestaña 3)

Esta sección actúa como el cerebro creativo de su flujo de Magento, permitiéndole filtrar productos dinámicamente e inyectar atributos nativos en sus solicitudes.

### **Sección A: Seleccionar presets**

-   **La regla de universalidad:** Dado que un único conjunto de presets se aplica a un clúster de productos de Magento, elija activos neutrales. Evite referencias con marcadores de marca distintos o detalles únicos que podrían sangrar accidentalmente en diferentes marcas en su inventario de Magento.

-   **Contador de capacidad:** Realice un seguimiento de sus ranuras de asignación de presets a través del contador superior. Modelos como Gemini Pro permiten hasta 14 ranuras de referencia, lo que le permite establecer consistencia de múltiples ángulos e iluminación extrema.

-   **Agregar referencias:** Haga clic en la casilla grande **\[+\] Agregar preset** para abrir el menú desplegable nativo y seleccionar su tipo de referencia:

1.  **Modelo:** Elija un activo de modelo de moda de la biblioteca integrada de Fozzels para establecer poses y estilos humanos.

2.  **Escena:** Seleccione un estilo de fondo o plantilla de entorno.

3.  **Producto:** Inyecte una foto de referencia adicional de su producto para dar a la IA más ángulos o detalles.

4.  **Imagen:** Cargue cualquier imagen personalizada o archivo de referencia directamente desde su diseño de computadora.

    5.  **Medios generados:** Elija una imagen que ya haya sido renderizada exitosamente en Fozzels para mantener la coherencia.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/poqeQbutVP7nGAfD5MDN1F9aCnQ23CE6iw.png)

### **Sección B: Constructor de reglas avanzadas de Magento (filtro y seleccione productos)**

-   **Operadores lógicos:** Combine múltiples parámetros de criterios a través de rutas lógicas `AND` u `OR`.

-   **Búsquedas de SKU dirigidas:** Use condiciones como `SKU` `en` `[Valor, Valor]` para asignar su flujo directamente a filas de atributo de Magento explícitas separadas por comas. La vista previa interactiva a continuación se actualiza instantáneamente para mostrar elementos coincidentes.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/l4Ka92XutqmJkQgI3uopMdusTJwSckSEIw.png)

### **Sección C: Solicitudes de atributo dinámico**

-   **Inyección de atributo de Magento:** Escriba sus instrucciones de diseño dentro de la ventana de terminal principal, luego aproveche el **panel Atributos** en el lado derecho. Puede hacer clic o arrastrar y soltar campos de datos nativos de Magento (como `Categoría`, `Color` o `Material`) directamente en su texto. Fozzels reemplazará dinámicamente estos marcadores de posición con valores únicos para cada producto individual procesado en el lote.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/hSKoFNYycQr--RrbjrFaaNum4tvErHYsHA.png)

## 4\. Configuraciones de automatización de Magento y nomenclatura de imágenes (Pestaña 4)

Esta pestaña controla cómo sus activos de medios se ponen inicialmente en cola para procesamiento y se estructuran para inyección en la arquitectura de base de datos de Magento, garantizando un mapeo de datos predeterminado adecuado y optimización de SEO.

-   **Cantidad de imágenes a procesar por día:** Establezca límites de umbral para acelerar los flujos de generación durante operaciones de fondo a largo plazo.

-   **Nombre de archivo para imágenes insertadas (nomenclatura de SEO):** Maximice la salud de SEO de su tienda Magento diseñando nombres de archivo programáticos. Use texto estándar o inserte slugs de atributo dinámico del menú desplegable (como `{name}` para el nombre del producto o parámetros de código específicos como `{color}`). Los espacios se simplifican automáticamente a guiones limpios (`-`). El sufijo `_{id}.{ext}` se añade automáticamente por el sistema para garantizar la unicidad del archivo de base de datos y evitar sobrescribir activos existentes en su servidor Magento.

-   **Posición de imagen en la tienda:** Ingrese el número de peso de prioridad global predeterminado (predeterminado es `101`). Los números más bajos aparecen antes en su diseño de Magento (`1` = primero / destacado). Un peso predeterminado de `101` inserta de forma segura sus salidas de IA justo detrás de sus imágenes de catálogo administradas por la tienda nativa.

-   **Roles de imagen en la tienda:** Asigne activos directamente a roles de medios nativos de Magento utilizados por su plantilla de tema activo. Haga clic en el campo para asignar roles estructurales de alternativa predeterminada como `Base` (imagen del producto principal), `Pequeño`, `Miniatura` o `Muestra`.

-   **Ocultar imágenes insertadas en la página del producto:** Active esta casilla de verificación para sincronizar de forma segura gráficos a su carpeta de medios de Magento para funciones técnicas de back-end (como iconos de carrito de pago o controles deslizantes personalizados secundarios) sin mostrarlos dentro de su carrusel de galería de consumidor principal de frontend.

-   **Completamente automático \[Próximamente\]:** Esta función está actualmente en desarrollo. Una vez activo, habilitar esta casilla de verificación le permitirá eludir completamente la validación humana, publicando imágenes directamente en sus vistas de tienda Magento en vivo en el segundo en que terminen de renderizar.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/zAHGFiGSaSobL-Deg00nawI92l2RDf4wzw.png)

## 5. ****Activación y ejecución del flujo****

Una vez que haya completado todos los campos de mapeo en la pestaña 4, su tubería automatizada está lista para implementar. Use los siguientes pasos para inicializar el motor de generación:

1.  **Activar el flujo (interruptor de flujo activo):** Mueva el interruptor maestro **Flujo activo** ubicado en la esquina superior derecha de la página a la posición **ACTIVADO**. Esto transiciona oficialmente su automatización de un estado de borrador a una rutina operacional.

2.  **Generación de lanzamiento (Planificar y cerrar / Ejecutar ahora):**

-   Haga clic en el botón de división verde en la esquina inferior derecha de la pantalla.

-   Seleccione **Ejecutar ahora** en las opciones desplegables. El sistema bloqueará su diseño de configuración final, cerrará el espacio de trabajo del constructor e inmediatamente activará el motor de fondo para procesar su lote de datos de producto de Magento.

3.  **Monitorear el progreso:** Para ver el estado de renderización en tiempo real o saltar directamente a la cola de moderación, haga clic en el botón turquesa **\[Lista de lotes\]** en la esquina inferior izquierda. Esto lo enruta instantáneamente a sus registros de procesamiento cronológicos.

## 6\. Trabajo con la lista de lotes y revisiones

Si la opción **Completamente automático** está deshabilitada, todos los activos se enrutan directamente a su **Lista de lotes** para revisión e implementación manual.

### **Navegación del índice de lotes**

Haga clic en el botón **Lista de lotes** para cargar sus registros de ejecución. Seleccione su sesión cronológicamente en la tabla izquierda y use el panel **Lista de finalización de imagen** principal para monitorear el procesamiento de productos fila por fila junto con sus SKU originales de Magento.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/oXCxEay_94461PqsajzJPS4wYBlWEgCZjA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/5r4iWyzzfg14_CTFejOGP9ZVint4EoOtnw.png)

### **La interfaz de revisión consolidada ("Deslizar y sincronizar")**

Al hacer clic en el **icono de ojo** se abre nuestra superposición optimizada de lado a lado diseñada para permitirle auditorías de lotes rápidas y anular parámetros globales a nivel individual:

-   **Revisión lado a lado:** El **Panel generado (izquierda)** muestra la nueva opción de IA; el **Panel original (derecha)** muestra el archivo de referencia de su tienda Magento. Use **\[Zoom In\]** en cualquiera de los lados para microinspecciones.

-   **Consola de anulación de metadatos de Magento:** Ubicada directamente debajo de las tarjetas de imagen, esto le permite ajustar configuraciones de tienda específicas para el producto seleccionado antes de enviarlo en vivo:

-   **POSICIÓN:** Cambie manualmente el cuadro de texto de orden de galería (p. ej., bajar de `101` si desea que este renderizado específico sea la miniatura principal).

-   **ROLES:** Haga clic en los badges de alternancia interactivos (`Base`, `Pequeño`, `Miniatura`, `Muestra`) para asignar o eliminar dinámicamente valores de presentación nativos de Magento para este archivo específico.

-   **OCULTAR EN PDP:** Marque esta casilla para ocultar solo este activo individual del carrusel de la página de detalles del producto.

-   **El bucle de control:**

-   **Regenerar:** Activar una retirada inmediata e irrestricta para una variación visual alternativa si el diseño necesita un rediseño.

-   **Aceptar y siguiente:** Aprueba la versión, bloquea sus anulaciones de metadatos de Magento personalizadas e **abre instantáneamente la siguiente imagen** en su cola de lotes.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/fghCPbvdab9wtI-u0AWAUQPsuXIrvMCEPg.png)
6\. Acciones masivas y exportaciones ZIP locales

Fozzels proporciona portabilidad total de datos sobre su inventario visual. Puede insertar lotes directamente en Magento o exportar carpetas localmente.

### **Ejecución de acciones masivas:**

1.  Marque las casillas de selección en el lado izquierdo de las filas dentro de su tabla **Lista de finalización de imagen**.

2.  Abra el menú desplegable **Acciones** ubicado directamente encima de los encabezados de la cuadrícula de datos y elija su rutina:

-   **Mostrar seleccionados:** Filtra su pantalla de trabajo para aislar solo sus filas de productos de Magento marcadas.

-   **Descargar imágenes (ZIP):** Activa la compilación de fondo de todos los activos de IA generados de alta resolución marcados en un único paquete comprimido.

### **Dónde encontrar sus archivos descargados**

Debido a que procesar grandes lotes de imágenes de alta resolución puede tomar unos momentos, los archivos se generan en segundo plano. Para descargar sus archivos completados:

1.  Haga clic en el menú desplegable **Panel** en la esquina superior derecha de la barra de navegación de encabezado principal.

2.  Seleccione **Exportar / Datos generados** de la lista.

3.  Una vez que la insignia de estado se vuelve verde (**Disponible**), haga clic en el botón azul **\[ZIP\]** en la columna _Descargar_ para guardar el archivo directamente en su computadora.

> ⚠️ **Nota importante:** Los archivos ZIP generados se mantienen en el servidor y están disponibles durante **solo 24 horas**. ¡No olvide descargar sus activos antes de que el enlace expire!

![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/EqkvThCVlPgUbKnTorc6vQ3Ilx2CxPOccg.png)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow-for-magento-2/b3yz16xNhZFEKIfuUAB_xhtCTPD7feQp6w.png)

## 7\. Optimización de SEO: generación de textos alternativos para imágenes nuevas

Además de activos visuales, Fozzels puede generar automáticamente textos alternativos (descripciones alternativas) relevantes y optimizados para SEO para cada nueva imagen de IA insertada en su tienda Magento. Esto mejora significativamente los factores de clasificación de su catálogo en los resultados de búsqueda de imágenes de Google.

Para obtener más información sobre cómo configurar la generación automatizada y el mapeo de metadatos para etiquetas alt, lea más aquí: **Guía del usuario: textos alternativos automatizados y SEO para Magento**.
