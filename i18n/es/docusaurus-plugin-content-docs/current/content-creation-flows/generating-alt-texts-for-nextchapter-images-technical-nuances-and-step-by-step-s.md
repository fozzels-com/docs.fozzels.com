---
id: '103000410112'
title: '4.3.2.b Generación de textos alternativos para imágenes de NextChapter: matices técnicos y configuración paso a paso'
sidebar_position: 10
slug: /content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s
description: Como ya conoces la mecánica básica de la configuración de flujos de contenido (Product Content Flows) en Fozzels, esta guía se centra…
---

Como ya conoces la mecánica básica de la configuración de flujos de contenido (Product Content Flows) en Fozzels, esta guía se centra exclusivamente en las particularidades de la arquitectura de NextChapter: el trabajo con el atributo de sistema **product\_media\_gallery** y la optimización del coste en tokens durante el procesamiento por lotes de galerías multimedia.

## Paso 1. Configurar permisos de escritura para la galería multimedia (condición obligatoria)

A diferencia de los campos de texto estándar (por ejemplo, la descripción o el nombre del producto), los textos alternativos en NextChapter se encuentran dentro de la galería de imágenes y se escriben directamente en el atributo `product_media_gallery`. De forma predeterminada, Fozzels considera este atributo de solo lectura (Read-only) y lo utiliza como marcador para filtrar productos según la presencia de fotos.
Para conceder al sistema permiso de escritura y actualización en este campo:

1.  Ve al menú principal: **Integrations** → selecciona tu instancia activa de **NextChapter**.
2.  Abre la **pestaña 3: Attributes.**
3.  En el campo de búsqueda, escribe `media`. Busca la fila con el código `product_media_gallery` (Media Gallery) y haz clic en el botón turquesa **\[Edit attribute\]**.
4.  En la ventana modal, dentro de la sección Transform Data, localiza la opción **Mutable** y marca la casilla (**\[v\] Mutable**).
5.  Haz clic en el botón azul **Save** en la esquina inferior derecha.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/DgdusqsKuR07n_6ZVkUycVCUVVRc9SLNEw.png)![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/F371_zOBWTktWVS7poYzGt-L5es5KLOkXw.png)

## Paso 2. Inicializar el flujo y asignar el atributo

1.  Ve a la sección **Content Flows** y haz clic en el botón **Create Flow** (o selecciona los productos que necesites directamente en el catálogo y haz clic en **Actions → Create Flow**).

2.  **En la pestaña 1: New Flow**, configura los parámetros del entorno:

    -   **Store / Integration:** Selecciona en la lista desplegable tu instancia de NextChapter, la configuración del sitio y la Store View que necesites.
    -   **Name:** Indica un nombre técnico claro para el flujo.
    -   **Entity Type:** El valor Product se establece automáticamente.
3.  **Target Attribute:** Haz clic en el campo de selección de atributo (`Attribute*`), escribe `media` y selecciona `Media Gallery`. Esto permitirá que Fozzels transfiera de forma segura las cadenas generadas por la IA directamente al esquema de base de datos de la galería de NextChapter.
    ![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/yEYZO7DIJN90tk-_rv6kZaE6AOCY_rSOWg.png)

## Paso 3. Seleccionar el modelo Vision y el modo de escaneo (Delta frente a Full Overwrite)

En la **pestaña 2: AI Configuration**, selecciona el proveedor y el modelo (por ejemplo, versiones de GPT o Gemini con soporte Vision para el análisis de imágenes) y, a continuación, define el modo de interacción con tu escaparate de NextChapter:

-   **Modo Delta (casilla "Force regenerate ALT texts" DESACTIVADA):** Escenario predeterminado. El proceso en segundo plano recorre el catálogo de NextChapter y envía solicitudes a la IA únicamente para aquellas imágenes cuyo texto alternativo está vacío. Así se conservan tus ajustes manuales de SEO y se ahorran créditos de API.
-   **Modo Full Overwrite (casilla "Force regenerate ALT texts" ACTIVADA):** Escenario de reescritura completa. El motor ignora por completo los metadatos actuales del escaparate, borra los textos alternativos antiguos de la muestra seleccionada y los sustituye por nuevas cadenas generadas por IA.

> **Recomendación técnica:** Deja activada la opción **Enable Image Resize**. Si el archivo de imagen en NextChapter supera los 2 MB o una resolución de 2048 px, Fozzels lo reducirá automáticamente a los requisitos estándar de los modelos Vision. Esto protege tu flujo frente a errores de generación (Failed generations) y reduce el consumo de tokens.

![](/img/kb/content-creation-flows/generating-alt-texts-for-nextchapter-images-technical-nuances-and-step-by-step-s/MSso5mlNSv6s9RgpZywIS_fORd61TfNESw.png)

## Paso 4. Redacción del prompt (Prompt Engineering)

**En la pestaña 3: Flow Selection & Prompt** se formulan las instrucciones para el modelo de IA. Dado que el proceso funciona en modo de procesamiento por archivo (1 imagen = 1 generación), tu prompt debe combinar los detalles visuales con el contexto textual del producto.

1.  En el campo **Prompt**, anota las reglas técnicas básicas (por ejemplo, un límite de longitud —el estándar es de hasta 125 caracteres para lectores de pantalla— y la prohibición de frases introductorias como "imagen...").
2.  Usa el panel lateral **Attributes** de la derecha para arrastrar tokens dinámicos de NextChapter directamente al cuerpo del prompt (por ejemplo, `{name}`, `{color}`, `{material}`, `{brand}`).

### Plantillas de prompt:

#### **Opción 1:** Para comercio electrónico (ropa y calzado)

> "Escribe un texto alternativo SEO conciso y natural para la etiqueta de accesibilidad de una tienda online. Describe los detalles visuales, el estilo y el corte del producto de la foto. Integra de forma natural estos atributos si son visibles: {color} {name} de {brand}, material: {material}. Longitud del texto: hasta 125 caracteres. Evita la acumulación de palabras clave y no empieces con frases como 'foto...' o 'imagen...'. Describe únicamente lo que aparece realmente en la toma."

#### **Opción 2:** Minimalista (detalle de producto)

> "Genera una etiqueta alternativa limpia y profesional para un lector de pantalla. Céntrate exclusivamente en el diseño, la composición y los detalles visuales evidentes del producto. Usa los metadatos para mayor precisión: {brand} {name} en color {color}. La descripción debe ser realista, objetiva y de hasta 120 caracteres. Sin frases de marketing y sin 'foto...' ni 'imagen...'. Devuelve únicamente la cadena preparada."

## Paso 5. Límites de procesamiento y estructura de la lista de lotes (Batch List)

**En la pestaña 4: Automation**, el campo "**Amount of products to create content for per day**" calcula los límites de procesamiento en función de las entidades principales (Products), no de los archivos de imagen individuales.
Como Fozzels analiza cada elemento multimedia de la galería del producto: si estableces un límite de **10 productos**, cada uno con **5 imágenes**, el sistema realizará **50 generaciones Vision de pago independientes.**
Todos los resultados generados se agrupan cómodamente en la **Batch List** por SKU de producto, lo que te permite revisar, editar o aprobar en bloque los nuevos textos alternativos antes de subirlos al sitio.
