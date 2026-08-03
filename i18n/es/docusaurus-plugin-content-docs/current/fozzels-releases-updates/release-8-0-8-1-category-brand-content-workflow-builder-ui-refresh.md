---
id: '103000409878'
title: Release 8.0-8.1 - Contenido de categorías y marcas, Workflow Builder, renovación de la interfaz
sidebar_position: 16
slug: /fozzels-releases-updates/release-8-0-8-1-category-brand-content-workflow-builder-ui-refresh
description: Nos complace presentar la actualización v8.0 y v8.1 de Fozzels. Esta versión se centra en ampliar las capacidades de generación de contenido, añadir flexibilidad
keywords:
- indicación
- instrucción
- flujo
- de
- trabajo
- finalización
---

Nos complace presentar la actualización v8.0 y v8.1 de Fozzels. Esta versión se centra en ampliar las capacidades de generación de contenido, añadir flexibilidad en la personalización de flujos de trabajo, reforzar la seguridad de los datos y renovar la interfaz de la plataforma.

# **1\. Contenido para categorías y marcas (Shopware y Magento 2)**

## Después de un largo periodo de desarrollo y preparación, lanzamos la compatibilidad para generar y sincronizar contenido de páginas de categoría y de marca.

-   **Flows de categorías y marcas** — Genere descripciones HTML, metatítulos, metadescripciones y atributos personalizados directamente para categorías y marcas.
-   **Integración completa** — Estos nuevos tipos de flow incluyen todas las funciones estándar de la plataforma: procesamiento por lotes, historial de revisiones y sincronización automática.

## **2\.  Workflow Builder y Rule Engine**

El nuevo módulo **Rule Engine** le permite configurar el posprocesado automático del contenido antes de su publicación.

-   **Editor visual** — Construya relaciones lógicas con los bloques Condition, Group y Action.
-   **Reglas de procesamiento** — Dé formato al texto automáticamente (por ejemplo, si un título supera los 50 caracteres → recortarlo a 45 caracteres conservando palabras completas).
-   **Asignación de reglas** — Los workflows que cree pueden aplicarse a flows de producto, categoría o marca.

### **Auditoría de datos históricos y validación de contenido**

-   **Comprobación del contenido existente** — Ejecute workflows sobre resultados generados anteriormente para marcar elementos que necesiten edición o regeneración.
-   **Matriz de decisión** — Configure condiciones ramificadas (Yes / No / Always) para lógicas de validación complejas.
-   **Filtros de contenido (Contains)** — Detecte palabras vetadas, caracteres prohibidos o desviaciones de formato.
-   **Acciones (Truncate y Mark as Suspicious)** — Recorte texto automáticamente o marque resultados con un motivo (por ejemplo, "Title too long") y pause la sincronización automática de ese elemento.

## **3\. Actualización de la interfaz (navegación lateral)**

Hemos rediseñado la disposición de la plataforma para facilitar la navegación y ofrecer un espacio de trabajo más eficiente.

-   **Encabezado simplificado** — La barra superior está despejada y solo contiene elementos contextuales (navegación, idioma, notificaciones y estado).
-   **Barra lateral estructurada** — Los módulos se agrupan por sección (Main, Catalog, Integrations, Customers, AI Flows, Tools).
-   **Modos de visualización** — Contraiga la barra lateral a una vista compacta para liberar espacio de trabajo.
-   **Indicadores de estado** — Etiquetas NEW y Soon para ayudarle a identificar módulos nuevos.

## **4\. Base de conocimiento pública**

Hemos lanzado un portal de documentación independiente para los usuarios de la plataforma.

-   **Multilingüe** — Los materiales e instrucciones están disponibles en 6 idiomas.
-   **Guías estructuradas** — Instrucciones paso a paso para configurar integraciones, workflows, mapeo y modelos de IA.

## **5\. Actualizaciones de integraciones (Shopware, VTEX, NextChapter)**

### Shopware Engine y Properties (Select / Multi-Select)

-   **Optimización de API** — El conector actualizado garantiza un rendimiento estable con grandes volúmenes de datos.
-   **Gestión de properties** — Generación y sincronización directas para campos de property estructurados.
-   **Control de valores** — La IA respeta las restricciones definidas y envía un único valor en los campos Select o varios valores en los campos Multi-Select.
-   **Vision AI** — Análisis de imágenes para determinar automáticamente parámetros del producto (estilo, color, tipo de cuello, etc.).

### NextChapter y VTEX: texto ALT

-   **Sincronización de etiquetas ALT** — Genere y envíe descripciones de imágenes para mejorar el SEO y la accesibilidad.

## **6\. Integraciones CSV ampliadas**

### Media Gallery

-   **Estandarización** — Se ha añadido un módulo completo de Media Gallery para las integraciones CSV.
-   **Preview y Vision AI** — Vea las imágenes directamente en la tabla, pase URL a los prompts y genere contenido multimedia.

### Mapeo y análisis

-   **Live Preview** — Consulte la estructura del archivo CSV y datos de muestra directamente en la interfaz.
-   **Mapeo flexible** — Configure nombres de campo, formatos y correspondencias de columnas.
-   **Opciones de análisis** — Compatibilidad con distintos delimitadores (coma, punto y coma, tabulador) y codificaciones.

## **7\. Control de HTML y validación de código**

### Gestión del editor (Enable Editor)

-   **Modo de código sin procesar** — Desactive el editor visual para conservar exactamente el código generado por la IA sin ajustes automáticos de etiquetas (útil para acordeones de FAQ, estilos incrustados y [Schema.org](https://schema.org/) / JSON-LD).
-   **Modos de vista** — Alterne entre la vista de código (Show HTML) y la previsualización renderizada.

### Validación de la estructura HTML

-   **Comprobación automática** — Detecte etiquetas sin cerrar o código roto en tiempo real.
-   **Protección de la sincronización automática** — Bloquee automáticamente la sincronización de elementos defectuosos, con un aviso en la tabla: _"Completion looks suspicious, broken or unclosed HTML tags detected."_

_Sus comentarios y su experiencia diaria con la plataforma nos ayudan a seguir mejorando Fozzels._
