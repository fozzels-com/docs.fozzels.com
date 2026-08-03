---
id: '103000408094'
title: 'Lanzamiento 7.4-7.5: introducción de gestión de categorías, centro de medios avanzado y modelos Anthropic de próxima generación'
sidebar_position: 14
slug: /fozzels-releases-updates/release-7-4-7-5-introducing-category-management-advanced-media-hub-and-next-gen-
description: 'Bienvenido a la última versión de Fozzels: una actualización importante diseñada para llevar tu automatización de contenido y gestión de catálogo al siguiente nivel. Hemos reimaginado completamente'
---

Bienvenido a la última versión de Fozzels: una actualización importante diseñada para llevar tu automatización de contenido y gestión de catálogo al siguiente nivel. Hemos reimaginado completamente las interfaces principales, expandido significativamente las capacidades de la plataforma e integrado los últimos modelos de IA para hacer tus flujos de trabajo diarios más fluidos, rápidos y eficientes que nunca.
La siguiente evolución de la gestión del catálogo: soporte de categorías

Estamos dando un salto estratégico hacia adelante escalando las capacidades principales de la plataforma. Fozzels ahora oficialmente admite operaciones no solo a nivel de producto sino también a los niveles de **categoría y atributo de categoría**. Esta actualización sienta las bases para la automatización completa de la estructura del catálogo.

#### **Presentación de grupos de categorías e interfaz de catálogo dedicada**

-   **Nuevo ecosistema de datos:** Presentación de una interfaz de grupo completamente rediseñada junto con un gestor de catálogo personalizado dedicado para categorías.

-   **Experiencia unificada (UX):** Hemos trasladado nuestro flujo de trabajo de gestión de productos probado en producción a las categorías. La misma lógica intuitiva de filtrado, estructuración y gestión de datos ahora está disponible para cada categoría individual dentro de un único espacio de trabajo.

-   **Ecosistemas admitidos:** En esta etapa, el soporte de categorías y la interfaz de grupo actualizada se implementan para nuestras integraciones principales: **Shopify, Magento, WooCommerce, Shopware, Lightspeed y Katana PIM**.

-   **Perspectiva futura:** Esta arquitectura es solo el comienzo de una importante evolución del producto. Nuestro próximo hito introducirá un flujo de generación de contenido de IA dedicado y autónomo (cubriendo descripciones SEO, etiquetas meta y pancartas) diseñado específicamente para páginas de categorías.

#### **Sincronización de datos granular de 4 etapas y registro avanzado**

-   **Arquitectura de grupo reingenierizada:** Para acomodar la integración de categorías, hemos reconstruido completamente nuestros flujos de importación de datos del sistema externo. La sincronización básica de 2 etapas ha sido reemplazada por un **ciclo de sincronización progresivo de 4 etapas**:

1.  _Atributos de producto_

2.  _Atributos de categoría_

3.  _Categorías_

4.  _Productos_

-   **Transparencia absoluta y flexibilidad:** Cada etapa ahora está completamente aislada. Puedes monitorear el progreso preciso en tiempo real utilizando barras de estado independientes y acceder a vistas de registro dedicadas (`Ver registros`) para cada paso individual.

-   **Control dirigido:** El sistema te permite sincronizar toda la masa de datos de manera integral o desencadenar manualmente actualizaciones para etapas específicas de forma independiente.

### Actualización importante de interfaz de usuario/experiencia de usuario: revisión de imagen de nivel superior y gestión de lotes

Basándonos directamente en comentarios de usuarios, hemos reimaginado y renovado completamente la vista previa de imagen, moderación y experiencia de revisión dentro de la **lista de lotes**. Toda la salida de tu flujo de generación ahora se unifica en un único espacio interactivo.

#### **Flujo de medios simplificado de "deslizar y sincronizar"**

-   **Página de revisión avanzada:** No más clics de ida y vuelta entre hojas de productos individuales. Hemos introducido una mecánica intuitiva y de alta velocidad (`Aceptar y siguiente`) que funciona según principios de deslizamiento de tarjetas.

-   **Comparación lado a lado:** la pantalla muestra simultáneamente paneles duales: la imagen original (`Original`) y la variante generada por IA (`Generated`), completa con zoom de activos detallado (`Zoom In`).

-   **Gestión centralizada de activos multimedia:** Directamente dentro de la ventana de revisión, puedes ejecutar instantáneamente operaciones principales para el activo actual con un solo clic:

-   Asigna el orden del activo en la galería de imágenes (`Posición`).

-   Designa comportamientos específicos del sistema (`Funciones`).

-   Controla la visibilidad en la página del producto (`Ocultar en PDP`).

-   Desencadena la regeneración manual de activos (`Regenerar`) si se requiere ajuste fino.

-   **Carrusel de procesamiento por lotes:** la parte inferior de la interfaz presenta una línea de tiempo visual que rastrea todos los objetos en la sesión activa. Mejorado con marcadores de estado codificados por colores (`Aceptado`, `Regenerar`, `Izquierdo`), mantiene el progreso general de tu proyecto perfectamente claro de un vistazo.

### Mejoras principales de la plataforma

#### **Modelos de IA de próxima generación e integración de búsqueda web en vivo**

-   **Expansión del kit de herramientas de IA:** Fozzels oficialmente da la bienvenida a los últimos modelos de vanguardia de Anthropic a su alineación principal:

-   **Claude Sonnet 5**: proporciona inteligencia de primer nivel, capacidades avanzadas de razonamiento y salida de alta velocidad optimizada para generación de contenido de alto volumen.

-   **Claude Fable 5**: nuestro modelo más sofisticado hasta el momento, diseñado para abordar parámetros de contenido hipercomplejos, mapeo semántico profundo y ejecución autónoma prolongada sobre jerarquías de catálogo intrincadas.

-   **Integración de búsqueda web en vivo:** hemos desbloqueado capacidades de búsqueda web en tiempo real para ambos modelos. La IA ahora puede obtener datos externos en vivo para garantizar precisión factual absoluta, verificación de indicaciones y cumplimiento instantáneo con las últimas tendencias del mercado.

#### **Creatividad ilimitada: eliminación de límites de regeneración de imágenes**

-   **Qué cambió:** Hemos levantado completamente el límite anterior en regeneraciones de imágenes consecutivas (que estaba previamente limitado a 5 intentos por objeto). En el flujo de regeneración manual (`Flujo de regeneración manual`), ahora eres libre de ejecutar nuevamente la generación de activos tantas veces como sea necesario hasta lograr el resultado visual exacto que tu marca requiere.

#### **Filtrado de datos avanzado y flujo UX simplificado**

-   **Qué cambió:** hemos rediseñado minuciosamente el motor de filtrado de datos en todos los flujos operacionales e integraciones, entregando una estética limpia y moderna con ergonomía significativamente mejorada.

-   **Árboles de categorías de próxima generación:** para admitir operaciones de categorías escaladas, implementamos un selector múltiple de `vista de árbol` interactivo equipado con etiquetas de acceso rápido y lógica condicional flexible (`Y` / `O`).

###
Ecosistema e integraciones

#### **Magento: validación de selección múltiple y gestión avanzada de activos multimedia**

-   **Sincronización de atributos complejos:** se han desbloqueado capacidades completas de escritura/relleno para tipos de atributo `multi-select` y `select`. El modelo de IA consulta automáticamente la matriz preexistente de valores de datos permitidos directamente desde tu catálogo de Magento y selecciona variables coincidentes de esa lista, evitando estrictamente la contaminación de datos o etiquetas duplicadas.

-   **Mapeo avanzado de funciones de medios:** al sincronizar archivos de medios generados nuevamente con Magento, ahora puedes configurar funciones explícitas del sistema en lugar de solo ordenar la galería. Designa sin problemas activos como `Base`, `Small`, `Thumbnail`, `Swatch` u otras ranuras personalizadas configuradas en tu tema activo.

-   **Exclusión de medios (oculto de la página de producto):** ahora hay soporte completo para la bandera de exclusión de imagen nativa. Puedes cargar un activo de IA optimizado en Magento y etiquetarlo como `oculto de la página de producto`, permitiéndote reservar la imagen para propósitos secundarios del sistema (como miniaturas de diseño de carrito o controles deslizantes de venta cruzada) sin renderizarla dentro de la galería principal de la página del producto.

-   **Generación inteligente de texto ALT:** Fozzels ahora asigna la presencia de etiquetas de metadatos `alt` en toda tu galería de productos de Magento. La optimización de medios se puede ejecutar en dos modos distintos:

1.  _Modo de relleno:_ la IA apunta y genera cadenas ALT relevantes exclusivamente donde faltan.

2.  _Modo forzado:_ un ciclo de reescritura completa y optimización ejecutado en todos los activos de imagen en el lote seleccionado.

####
**Shopify y Shopware: filtrado de atributos simplificado**

-   **Optimización del flujo de datos:** hemos realizado una auditoría técnica y limpieza de las matrices de configuración del filtro para Shopify y Shopware. Solo los operadores lógicos relevantes y completamente funcionales ahora se exponen a la interfaz, acelerando significativamente los flujos de trabajo de segmentación de catálogos.

#### **NextChapter: sincronización de medios automatizada y gestión de galería**

-   **Sincronización de medios bidireccional:** se implementó una integración de circuito cerrado completa para activos digitales. Toda la imaginería generada o optimizada por IA se exporta automáticamente ("se impulsa") de nuevo a NextChapter, coincidiendo directamente con la hoja de elementos correspondiente.

-   **Gestión de galería:** se agregó una utilidad intuitiva de ordenamiento de cola. Los usuarios pueden determinar con precisión la secuencia de visualización de imágenes en el diseño de la galería de productos (imagen principal, segunda, tercera... última posición).

#### **Katana PIM: sincronización de atributos del grupo de especificaciones**

-   **Lanzamiento de características:** se agregó soporte nativo y sincronización de datos completa para el atributo crítico del sistema `grupo de especificaciones`. La integración aprovecha nuestro nuevo algoritmo progresivo de validación de selección múltiple: la IA detecta dinámicamente grupos de especificaciones válidos directamente desde tu directorio Katana PIM y los completa con datos estructurales verificados.
