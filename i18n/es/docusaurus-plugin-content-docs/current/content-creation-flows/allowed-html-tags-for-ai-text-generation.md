---
id: '103000380488'
title: 4.7.3 Etiquetas HTML Permitidas para Generación de Texto de IA
sidebar_position: 20
slug: /content-creation-flows/allowed-html-tags-for-ai-text-generation
description: Esta función le permite definir precisamente qué etiquetas HTML se pueden usar y preservar dentro del contenido generado por Inteligencia Artificial. Esta función
---

Esta función le permite definir precisamente qué etiquetas HTML se pueden usar y preservar dentro del contenido generado por Inteligencia Artificial. Esta funcionalidad está activa para atributos donde la opción **"Permitir HTML"** está habilitada.

![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/2zl4WJfftt48X66FBs1W8zAn4rbNhhqk1A.png)

Al definir esta lista, desbloquea posibilidades poderosas para generar contenido con formato específico o incrustar multimedia directamente en el texto generado.

## ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/KsO3jFsp7Ytx48uE5alhlIVzvjfJd8Trzw.png)
Cómo el Sistema Procesa Etiquetas

El sistema funciona como un filtro de seguridad:

-   Elimina automáticamente cualquier etiqueta que **no esté presente** en la lista permitida.

-   Esto asegura que solo las etiquetas necesarias y seguras se muestren correctamente en su interfaz.

## Liberando el Potencial Creativo

Definir etiquetas permitidas significa que ya no está limitado al formato de texto básico. Puede indicar a la IA que cree estructuras complejas al agregar elementos dinámicos y visuales directamente en la descripción de su producto:

-   **Contenido Interactivo:** Incrustar videos de YouTube (usando la etiqueta `iframe`) directamente en la descripción del producto.

-   **Visuales Ricos:** Integrar galerías de imágenes o controles deslizantes usando la etiqueta `img` envuelta en su estructura requerida (`div`, `section`).

-   **Estructura Mejorada:** Crear elementos interactivos, como acordeones para secciones de preguntas frecuentes, usando etiquetas `details` y `summary` (que están en la lista Predeterminada) o etiquetas de estructura personalizadas.

-   **Cualquier Estructura:** Puede generar prácticamente cualquier estructura HTML compatible con su interfaz simplemente permitiendo las etiquetas necesarias.

### 1. Etiquetas HTML Predeterminadas Disponibles

Una lista completa de etiquetas HTML estándar está disponible por defecto y puede usarse inmediatamente:

-   `a`, `abbr`, `acronym`, `article`, `aside`, `b`, `blockquote`, `br`, `cite`, `code`, `dd`, `details`, `div`, `dl`, `dt`, `em`, `footer`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hr`, `i`, `li`, `mark`, `ol`, `p`, `q`, `s`, `section`, `span`, `strong`, `summary`, `table`, `td`, `tr`, `u`, `ul`.

### 2. Agregue Sus Propias Etiquetas HTML (Agregue Sus Propias Etiquetas HTML)

Si requiere etiquetas para incrustar video, imágenes o cualquier otro formato no estándar, puede agregarlas a esta lista.

**Cómo Agregar Etiquetas Personalizadas:**

1.  Escriba el nombre de la etiqueta que desea permitir (por ejemplo, `iframe`, `img`, `video`), en el campo.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/17FvSVXKcc6eW4AU0v9BhkCkRR-NUtg57w.png)

2.  Presione Intro (si es necesario, elimínelo haciendo clic en el botón 'x').

3.  Haga clic en el botón **Guardar**.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/kMmnyMamV-Ef9IEE1_naDJ0llLk7bnh5YA.png)

> **¡Bueno Saberlo!** Este bloque se utiliza para agregar etiquetas adicionales no estándar que son críticas para realizar su visión creativa en la interfaz. Solo agregue las etiquetas necesarias para asegurar la seguridad del código.
