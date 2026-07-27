---
id: '103000400446'
title: '4.5.1. Guía del usuario: flujo de imagen automatizado'
sidebar_position: 13
slug: /content-creation-flows/user-guide-automated-image-flow
description: >-
  El flujo de imagen es una herramienta profesional diseñada para la generación masiva y sincronización de imágenes de productos usando IA. Al configurar un flujo una vez, establece
---

**El flujo de imagen** es una herramienta profesional diseñada para la generación masiva y sincronización de imágenes de productos usando IA. Al configurar un flujo una vez, establece un sistema autónomo que procesa miles de productos, incluidos elementos nuevos agregados a su tienda en el futuro a través del filtrado condicional dinámico.

> **Importante:** Le recomendamos encarecidamente que **no active** el flujo (manteniendo el interruptor "Flujo activo" **DESACTIVADO**) hasta que haya completado completamente todas las configuraciones y probado su configuración.

## 1\. Creación de un nuevo flujo de imagen (Pestaña 1)

Esta pestaña maneja la identidad básica y conexión de su automatización. Hay dos formas principales de iniciar un nuevo flujo:

-   **Opción A: A través del menú de flujos de imagen** - Navegue a la sección **Flujos de imagen** en la barra de navegación superior y haga clic en el botón **Nuevo flujo de imagen**. Seleccione su integración, sitio web y tienda secuencialmente en los menús desplegables.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/aGysMRzpl5ijAiHFUH5TFnasSdIEP1py9w.png)

-   **Opción B: Desde el catálogo de productos** - En la sección **Catálogo → Productos**, filtre los productos que desea procesar, selecciónelos y haga clic en **Acciones → Crear flujo de imagen**. Este método es más rápido ya que completa automáticamente el contexto de su tienda y selección de productos.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/WVP7KcJNwsPTLqIzLSQQwGsAoBCdxAdqLg.png)

**Pasos esenciales:**

1.  **Nombre su flujo:** Dale un nombre claro y descriptivo a su flujo (p. ej., "Vestidos de verano 2026 - Gemini Pro").

2.  **Guarde su progreso:** Cualquier cambio realizado en el nombre del flujo o en la selección de tienda debe confirmarse haciendo clic en el botón **Enviar** en la parte inferior de la página.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/XUm-rzBUqRa_mFIUflBlrrZlaYzDnRHgMw.png)

## 2\. Configuración de IA (Pestaña 2)

En esta pestaña, define la "inteligencia" y la salida visual de su generación. Las configuraciones varían significativamente según el proveedor que elija.

### OpenAI | ChatGPT

Al seleccionar el modelo **GPT Image 1**, tiene acceso a los siguientes parámetros:

-   **Calidad**: Seleccione su calidad de generación preferida en el menú desplegable (**Automático, Alto, Medio o Bajo**).

-   **Tamaño de imagen**: Elija el formato deseado en el menú desplegable (**Automático, cuadrado, panorámico o retrato**). Nota: Una cuadrícula interactiva para GPT próximamente.

-   **Recuento de imágenes**: Puede generar **entre 1 y 4 variaciones** para cada producto por ejecución única, proporcionando múltiples opciones para revisión manual.

-   **Límites técnicos**: El tamaño máximo de archivo de entrada para GPT es **50 MB**.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/6Id3aPkXYEb0MEhxve0-510480uvgB2VrA.png)

### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/5NYWCV_4Lb3wxJ4MwkVOe96Mk4o5LU4NVg.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/oiDXnZOLp3NVu3waNL4ZREtyriHjNEvGgQ.png)![](/img/kb/content-creation-flows/user-guide-automated-image-flow/eQxo8gJitU9Q5Zp7y3BE4FljSNrHhgqITw.png)Google | Gemini

Los modelos Gemini utilizan una cuadrícula **Formato de salida** interactiva para control preciso sobre sus resultados.

-   **Modelos disponibles**: Elija entre **Gemini 2.5 Flash (Nano Banana)**, **Gemini 3 Pro (Nano Banana Pro)** y **Gemini 3.1 Flash (Nano Banana 2)**.

-   **Recuento de imágenes**: Para todos los modelos Gemini, este valor se fija en **1** (el campo está deshabilitado) ya que generan una imagen optimizada por solicitud.

-   **Límites técnicos**: El tamaño máximo de archivo de entrada es **7–10 MB**.

-   **Prueba virtual**: Un modelo especializado para moda.
**Nota:** Para este modelo, la cuadrícula de salida está deshabilitada ya que el sistema utiliza automáticamente un formato fijo y optimizado para garantizar un ajuste de prenda realista.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/Ydm8oxLyvSgZ7H_x5R1Uf0kb_u7RxmIXRw.png)

> Para obtener más información sobre modelos de IA y sus capacidades técnicas específicas, lea más aquí \[enlace a agregar\].

#### **Cómo utilizar la cuadrícula de formato de salida (solo Gemini)**

La cuadrícula le permite definir la "forma" exacta y calidad de sus imágenes generadas:

1.  **Seleccione relación de aspecto:** En la columna izquierda, elija una relación (p. ej., **cuadrado 1:1** para tarjetas de producto, **retrato 3:4** para moda o **panoramánico 16:9** para pancartas).

2.  **Seleccione resolución (calidad):** Elija una columna basada en la capacidad del modelo (**1K, 2K o 4K**). Haga clic en la celda de resolución específica (p. ej., **1024x1024**).

3\. **Confirmación visual:** Aparece una marca de verificación verde en la celda seleccionada. Verifique el panel **Vista previa** a la derecha para ver la forma del marco, las dimensiones exactas de píxeles y los **tokens estimados** (costo estimado) para la generación.

4.  **Compatibilidad:** Las celdas marcadas como "No compatible" no están disponibles para el modelo seleccionado.

**⚠️ Recordatorio:** Asegúrese de hacer clic en el botón **Guardar** después de seleccionar su modelo y configuración de salida para almacenar estas preferencias. Su flujo no aplicará estos cambios a menos que se guarden.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/gkfM9PdTV36LEV-UL7SN9obfvD3AOKt7_Q.png)

## 3\. Selección de flujo e indicación (Pestaña 3)
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/H3B5OOvEGyTufKlUAsFd_uzfwAVXLbVcEA.png)

Esta pestaña es el corazón de su creación de contenido. El primer y más crítico paso es configurar sus **presets**.

### **Sección: Seleccionar presets**

Los presets son imágenes de referencia visual que actúan como instrucciones para la IA. Establecen el estilo general, la iluminación y el contexto para **cada** producto procesado dentro de este flujo.

> **La regla de oro: universalidad** Dado que un único conjunto de presets se usa para todo un grupo de productos (p. ej., cientos de vestidos o todo el calzado), sus selecciones deben ser **UNIVERSALES**.
>
> -   _Ejemplo:_ Si agrega un preset de **Producto** que muestra un SKU azul específico, la IA podría intentar erróneamente agregar detalles azules a cada otro elemento del flujo. Solo elija referencias que sean apropiadas para toda la categoría de productos que está procesando.
>

#### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FJlYttezkuyQFvSp16LDTSwFhOa5MFopmw.png)
**1\. Límites y capacidad**

En la parte superior del bloque, verá un contador (p. ej., **8/13**).

-   **Capacidad máxima:** Esto depende de su modelo de IA elegido (p. ej., hasta **14** para Gemini Pro y Gemini 3.1 Flash).

-   **Composición:** Una ranura siempre está reservada para la imagen principal del producto que se está procesando; las ranuras restantes son para sus presets universales.

#### **2\. Tipos de presets y búsqueda en biblioteca**

Haga clic en el botón **"Agregar preset"** para elegir un tipo. Use el **sistema de filtro** para encontrar rápidamente lo que necesita:

-   **Modelo:** Define la pose y apariencia de la persona que usa sus productos. Filtre la biblioteca por género, edad o etnia para encontrar un look que represente su marca.

-   **Escena:** Determina el entorno (p. ej., estudio, calle, interior). Use filtros de categoría para encontrar un fondo que complemente todo su rango de productos.

-   **Producto (ángulos adicionales):** Ayuda a la IA a comprender elementos complejos (p. ej., la textura de una tela o la suela de un zapato).

-   **Búsqueda:** Utilice el filtro de catálogo (que funciona exactamente como la sección **Catálogo** principal) para buscar por título, SKU o categoría.

-   **Selección de imagen:** Una vez que encuentre un producto representativo, puede seleccionar **cualquiera de sus imágenes** (p. ej., una vista trasera o un primer plano). Simplemente marque la imagen deseada con una **marca de verificación verde** y guarde.

-   **Imagen:** Se utiliza para texturas, logotipos o elementos de marca específicos.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/UBYhntqBETFRErz_N1DJPPrNu8VI8_uh-A.png)

#### **3\. Carga de sus propios activos (+ agregar)**

Si carga su propia imagen (para tipos modelo, escena o imagen) a través del botón **\+ agregar**, debe asignar **valores de filtro** a ese archivo.

-   Al etiquetar su carga (p. ej., especificando el tipo de escena o género del modelo), el sistema indexa el archivo. Esto le permite encontrar instantáneamente y reutilizar sus activos personalizados en flujos futuros a través de su biblioteca privada.

#### **4\. Eliminación y finalización**

-   Para eliminar una referencia, haga clic en el **icono de papelera** en la tarjeta de presets.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/i37UkovmY_SDzeW_4IjJEJGW6g7337yjEg.png)

-   **Importante:** Después de agregar o eliminar presets, **DEBE** hacer clic en el botón **Guardar** en la parte inferior de la página. El asistente de IA no reconocerá el conjunto de referencia actualizado hasta que se guarden los cambios.

### **Sección: Filtro y seleccione productos**

Esta sección le permite definir con precisión la lista de elementos para los cuales la IA generará nuevas imágenes.

> **❗ Importante:** Por defecto, cuando se crea un nuevo flujo, **TODOS** los productos de su tienda se incluyen. El recuento de productos mostrado en el encabezado (**Filtro y seleccione productos - XX**) es dinámico y se actualizará en tiempo real a medida que ajuste su configuración.

#### **1\. Tarjetas de producto y selección de imagen**

El bloque muestra una cuadrícula de sus tarjetas de producto.

-   **Icono "Pila de imágenes":** Un icono en la esquina superior derecha de una tarjeta indica que el producto tiene más de una imagen.

-   **Elección de la imagen base:** Haga clic en una tarjeta de producto para abrir la ventana emergente de galería. Seleccione la foto más apropiada para servir como "imagen base" para la generación (esta es la ranura reservada enviada a la IA junto con sus presets).

-   De manera predeterminada, el sistema usa la **primera** imagen de su catálogo.

-   Para cambiarlo, simplemente seleccione una foto diferente y haga clic en **Guardar** en la ventana emergente.

#### ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/BsDYOnyD0cPg_dl35r0HT6YgOmKmffLBWQ.png)
**2\. Requisitos: productos con imágenes**

Los productos que **no tienen ninguna imagen** en su base de datos se excluyen automáticamente de este bloque. La generación de IA a través de flujos requiere una base visual para funcionar correctamente.

#### **3\. Usando filtros (condiciones)**

Para seleccionar un grupo específico de productos (p. ej., solo "Vestidos" de una marca específica), use el bloque de filtro. La lógica funciona idénticamente a la sección **Catálogo** principal. Solo permanecerán en el flujo los productos que cumplan estos criterios.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c_yGlTAqTpbYt9K8gCiBwMDPPLqEkUbqUQ.png)

#### **4\. Gestión de conjuntos manuales**

Puede refinar aún más su lista después de aplicar filtros utilizando los siguientes controles:

-   ✅ **Excluir seleccionado:** Marque las casillas en productos específicos que desea eliminar del conjunto actual y haga clic en este botón.

-   ✅ **Incluir solo seleccionado:** Marque productos específicos que desea mantener; todos los demás se eliminarán del flujo.

-   **Botón actualizar:** Si comete un error durante la selección manual, haga clic en **Actualizar**. Esto reinicia el conjunto a su estado definido por sus filtros, deshaciendo cualquier acción de "Excluir" o "Incluir" manual.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ekGLld7o3QbwkYFOEmsqTUrlioP8xJlXtA.png)

#### **5\. Sincronización dinámica del catálogo**

Los flujos de imagen siguen las mismas reglas que los flujos de contenido:

-   El conjunto de productos se actualiza después de cada grupo de sincronización diario.

-   Esto significa que si agrega un nuevo producto a su tienda que coincide con los filtros establecidos en su flujo, se **agregará automáticamente** a la cola de generación al día siguiente.

* * *

**⚠️ Recordatorio:** Siempre verifique el recuento final de productos antes de guardar su flujo para asegurarse de que no haya dirigido accidentalmente toda su tienda en lugar de una categoría específica.

### **Sección: Editor de solicitud**

La solicitud es el conjunto final de instrucciones que envía a la IA. En el flujo de imagen, el editor de solicitud utiliza la misma lógica avanzada que el flujo de contenido, lo que permite la creación de descripciones visuales de alta calidad a escala.

#### **1\. El principio de universalidad**

Debido a que esta solicitud se aplicará a cada elemento dentro de su flujo, debe ser **MAXIMALMENTE UNIVERSAL**.

-   Evite describir manualmente colores o texturas específicas (p. ej., no escriba "un vestido de seda roja").

-   En su lugar, aproveche los **atributos dinámicos** para asegurar que la IA identifique con precisión las características únicas de cada producto específico.

#### **2\. Usando atributos dinámicos (arrastrar y soltar)**

A la derecha del editor, encontrará una lista de **atributos** disponibles (p. ej., `Color`, `Material`, `Marca`, `Tipo de producto`).

-   **Cómo funciona:** Simplemente arrastre un atributo de la lista y suéltelo directamente en su texto.

-   **Guía detallada:** Puede leer más sobre la mecánica y capacidades del editor de arrastrar y soltar aquí ....

-   **Resultado:** Cuando se ejecuta el flujo, el sistema reemplaza automáticamente la etiqueta (p. ej., `{{Color}}`) con el valor real de cada tarjeta de producto específica. Esto garantiza que un vestido azul se genere como azul y una chaqueta de cuero se represente con una textura de cuero realista.

#### **3\. Plantillas y reutilización**

Para acelerar su flujo de trabajo, use la función **Plantillas** ubicada en la parte inferior del editor:

-   **Guardar como plantilla:** Una vez que haya elaborado una solicitud perfecta que funcione bien para una categoría específica, guárdela para uso futuro.

-   **Cargar:** Importe rápidamente plantillas existentes en nuevos flujos para mantener la coherencia visual en toda su tienda.

#### **4\. Atributos (si se completan)**

Cambie a la pestaña **Atributos (si se completan)** para ver exactamente qué datos están actualmente disponibles para su conjunto de productos seleccionado. Esto ayuda a prevenir el uso de etiquetas vacías que podrían conducir a resultados de IA inconsistentes.

* * *

**Consejo profesional:** Una solicitud universal de alta calidad debe describir el **entorno, iluminación y atmósfera** definidos por sus presets, mientras deja los **detalles específicos del producto** a los atributos dinámicos.

**⚠️ Paso final para la pestaña 3:** Después de finalizar su solicitud, haga clic en el botón **Guardar**. Esta acción vincula sus presets, selección de productos e instrucciones de solicitud en una automatización funcional única.

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/9UcxVcuz2XFcQkCC4qSqfhHb7P0EZOtl3w.png)

## ****4\. Automatización (pestaña 4)****

La pestaña **Automatización** sirve como la "torre de control" para su flujo. Aquí es donde define el ritmo de creación de contenido, gestiona políticas de publicación e inicia oficialmente el proceso de generación.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/FYJ_qkFMdxjFIhXpgfz3GkHZs7AhNpgpwA.png)

### **1\. Límites de procesamiento diario**

-   **Cantidad de imágenes a procesar por día**: Este campo determina exactamente cuántos productos de su conjunto seleccionado serán procesados por la IA cada 24 horas.

-   **Propósito**: Esto le permite administrar su consumo de tokens y garantiza un lanzamiento constante y manejable de nuevo contenido visual para su tienda.

### **2\. Política de automatización y sincronización**

-   **Estrategia de confirmación manual**: Para mantener alta calidad y permitir supervisión humana, **la sincronización completamente automatizada a su tienda está actualmente deshabilitada**.

-   **Flujo de trabajo**: Si bien la **generación** de imágenes es automática según su horario, la **sincronización** real (carga) de estas imágenes a su tienda (Shopify, Magento, etc.) solo ocurre después de que revise y apruebe en la **lista de lotes**.

### **3\. Activación y gestión del flujo**

-   **Interruptor de flujo activo**: Ubicado en la esquina superior derecha, este interruptor habilita o deshabilita toda la lógica de automatización para este flujo.

-   **La regla de guardado**: Cualquier cambio en el estado del **flujo activo**, ya sea que esté activando por primera vez o desactivando un flujo antiguo, **DEBE** confirmarse haciendo clic en el botón **Guardar**. Si no guarda, el interruptor se revertirá y sus cambios no tendrán efecto.

### **4\. Desencadenantes de ejecución**

Una vez que el flujo está activo, tiene dos formas de iniciar la generación:

-   **Planificar y cerrar**:

-   Este botón programa el flujo para ejecutarse automáticamente.

-   **Temporización**: La generación no comenzará instantáneamente; se iniciará solo después de la próxima **sincronización del grupo de productos diarios** (la actualización de su catálogo de tienda en todo el sistema).

-   **Ejecutar ahora**:

-   Este botón aparece como opción adicional una vez que el flujo está activado.

-   **Temporización**: Al hacer clic en **Ejecutar ahora**, se omite la espera del grupo diario e **inicia la generación inmediatamente** para el límite del día actual.

-   _Nota_: Una ejecución manual cuenta como su cuota diaria. La siguiente ejecución programada ocurrirá al día siguiente después de la sincronización del grupo estándar.

### **5\. Lógica de generación y eficiencia**

-   **Principio de generación única**: Para evitar costos duplicados y datos redundantes, la IA genera una nueva imagen para un producto específico **solo una vez** por flujo.

-   Si ya se ha generado una imagen con éxito para un producto dentro de este flujo, el sistema la omitirá en futuros ciclos.

-   **Regeneraciones**: Si no está satisfecho con un resultado específico, puede activar manualmente una "Regeneración" desde la sección **Lista de lotes**.

### **6\. Lista de lotes y desactivación**

-   **Lista de lotes**: Haga clic en este botón para acceder a su registro de producción. Aquí, puede monitorear el estado de sus "lotes", ver resultados de IA y realizar la sincronización final a su tienda.

-   **Desactivación**: Si el flujo ya no es relevante o necesita pausar la producción, cambie el interruptor **Flujo activo** a "DESACTIVADO" y haga clic en **Guardar**. Esto detiene inmediatamente la programación de generaciones adicionales.

**Recordatorio final**: Asegúrese siempre de que su **límite diario** esté configurado correctamente antes de hacer clic en **Guardar**. Una vez que el flujo está activo, el sistema comenzará a poner en cola productos para procesamiento según su configuración.

Aquí está la guía completa para la sección **Lista de lotes** en inglés, incorporando todos los detalles técnicos sobre la lógica de sincronización y la interfaz de usuario.

## **Lista de lotes**

La **lista de lotes** es su centro de control de calidad y moderación. Cada ejecución de flujo (automática o manual a través del botón _Ejecutar ahora_) crea una nueva entrada de lote en la lista a la izquierda.
![](/img/kb/content-creation-flows/user-guide-automated-image-flow/LIJVpWk3sHHmcIRCOQIvCJACgNLRBBIHRw.png)

### **1\. Navegación y monitoreo**

-   **Barra lateral de lotes**: El panel izquierdo muestra todas las ejecuciones organizadas por fecha y número de productos procesados (`Recuento`).

-   **Barra de progreso**: Una escala codificada por colores en la parte superior derecha proporciona un estado visual del lote: verde para completado, amarillo para en progreso y gris para pendiente.

-   **Actualización automática**: Puede habilitar la función `Actualizar cada X s` para actualizar automáticamente la página mientras la IA está procesando.

### **2\. Trabajo con resultados (lista de finalización de imagen)**

La tabla principal a la derecha muestra los resultados de cada producto específico:

-   **Miniatura**: La foto del producto original utilizada como base.

-   **SKU**: El identificador del producto con un enlace directo a su página en el panel de administración de su tienda.

-   **Resultados**: La imagen generada. Al pasar el cursor sobre la foto se revelan botones de acción rápida:

    -   **Ver (icono de ojo)**: Abre la ventana de inspección detallada.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/PExqbyx61jYHouA1Q6gS-Quy1Ea-rWQ9Iw.png)

    -   **Descargar (icono de flecha)**: Guarda el archivo directamente en su dispositivo.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/a8L2H8t07YmOsC9exAXCkS0ORMRCAR9ANA.png)

    -   **Sincronizar (icono de marca de verificación)**: Envía instantáneamente esta foto específica a su sitio web.
        ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/JnEq8veB5PUb88yklirTqpIJncbmCmtUNw.png)

### **3\. Inspección y análisis (vista de finalización)**

Al hacer clic en **Ver** se abre una ventana para verificación final:

-   **Panel izquierdo**: Muestra el resultado final de alta calidad.

-   **Panel derecho**: Contiene una columna de todos los datos de entrada. La primera imagen es siempre la foto del producto original, seguida por un feed desplazable de todos los presets utilizados (referencias de modelo, fondos, etc.).

-   **Opciones de finalización**: El icono de ojo azul verdoso en la columna `Acciones` abre una ventana emergente con metadatos técnicos: el modelo de IA específico, resolución y la solicitud final completa con atributos dinámicos ya completados.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/AgSQKU_4s6dTTRl2n8Uh7u8u__XcDx23FA.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/fy3a6eQD7I0VTvO9a0bMe2FSSrBLMGe4_A.png)

### **4\. Ajustes y regeneración**

Si no está satisfecho con un resultado, use el icono **Regenerar** (flecha circular):

-   **Edición**: Puede modificar el texto de la solicitud o agregar nuevos atributos a través de arrastrar y soltar específicamente para ese SKU.

-   **Sin límites**: Puede regenerar una imagen tantas veces como sea necesario hasta lograr el resultado deseado.

-   **⚠️ Importante**: Una nueva generación **elimina permanentemente** la versión anterior de la imagen.
    ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/CEgHxH_y3eClyY2jxcXg1pAUpocdbFQwbQ.png)

![](/img/kb/content-creation-flows/user-guide-automated-image-flow/ipoM6y0fgh9G7Rpm1mmCt7mWXvyDn2JikQ.png)

### **5\. Sincronización de tienda**

Como la automatización total está actualmente deshabilitada para garantizar calidad, usted decide cuándo publicar contenido:

-   **Individualmente**: Haga clic en el botón de marca de verificación directamente en la imagen en la columna `Resultados`.

-   **Estado**: Hasta publicado, la columna `Sincronizado en` mostrará el estado `Esperar confirmación de resultado`.

-   **⚠️ Advertencia**: La sincronización es **irreversible -** no se puede cancelar una vez iniciada.

## ![](/img/kb/content-creation-flows/user-guide-automated-image-flow/c9uHBa_kSFHkR_YXg2rBCu-uOXq4xMWgVw.png)

### **¡Buena suerte y feliz creación!**

¡Felicidades! Ahora está completamente equipado para dominar el **flujo de imagen de Fozzels**. Este es su espacio para transformar ideas en contenido visual de alta calidad en apenas unos clics.

## **Mire las instrucciones detalladas en el vídeo**
