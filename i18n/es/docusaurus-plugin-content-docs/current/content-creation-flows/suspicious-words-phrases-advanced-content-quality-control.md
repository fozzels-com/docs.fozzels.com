---
id: '103000390709'
title: '4.7.4  Palabras y frases sospechosas: Control avanzado de calidad de contenido'
sidebar_position: 20
slug: >-
  /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: >-
  La función de palabras y frases sospechosas es más que un simple filtro de validación, es una herramienta sofisticada para gestionar flujos de trabajo de contenido de alto volumen
---

La función **Palabras y frases sospechosas** es más que un simple filtro de validación, es una herramienta sofisticada para gestionar flujos de trabajo de contenido de alto volumen. Garantiza que sus descripciones de productos permanezcan profesionales al señalar alucinaciones de IA, artefactos técnicos o términos no deseados en múltiples idiomas simultáneamente.

## Configuración: Control global y multilingüe

Para gestionar su lista de palabras, navegue a **Configuración** > **Flujo** > Pestaña **Palabras y frases sospechosas**.

### 1\. Gestión de la lista de palabras

Fozzels viene preconfigurado con artefactos de IA comunes (`#html`, `nota:`, `perdón`, etc.). Puede:

-   **Alternar términos activados/desactivados:** Simplemente desmarque las etiquetas que no necesita.

-   **Agregar términos personalizados:** Escriba cualquier palabra o frase (p. ej., nombres de competidores, términos sensibles específicos de la marca) y presione **Intro**.

-   **Soporte multilingüe:** Puede agregar "palabras clave" en cualquier idioma. Esto es increíblemente útil para tiendas internacionales donde necesita rastrear errores específicos para diferentes localizaciones (p. ej., "sorry" en inglés frente a "let op" en holandés) al mismo tiempo.

![](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/NHbocGjhOveF2KEQmoSh5o7YOuzzP33eaA.png)

## Cómo funciona: Gestión dinámica de estados

El sistema opera en **tiempo real**. Tan pronto como aparece un término de su lista en un texto generado:

-   El producto se marca con un estado **"Sospechoso"**.

-   Las palabras marcadas están **resaltadas directamente en el editor de texto**.

-   Esto le da la opción: **editar manualmente**, **regenerar** el contenido o **ajustar su configuración** para borrar la bandera.

### Correcciones masivas instantáneas

El verdadero poder de esta función radica en su naturaleza dinámica. Si un estado "Sospechoso" se activó por error (p. ej., agregó "sorry" como palabra clave, pero luego lanzó una marca llamada _"Sorry Boy"_), no tiene que editar cientos de descripciones:

1.  **Desactive o elimine** la palabra de su lista sospechosa en Configuración.

2.  El sistema **actualiza instantáneamente el estado** para todas las finalizaciones existentes. Perderán la bandera "Sospechoso" y estarán listas para sincronización masiva inmediatamente.

![](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/bnDUh3Fj25UmysKHVdUAyM4Kh5Ev2TWvzg.png)

## Eficiencia en la lista de lotes total diaria

Hemos optimizado su espacio de trabajo con un filtro dedicado para optimizar sus verificaciones diarias:

-   **Mostrar solo sospechosos:** Use este interruptor en la **Lista de lotes total diaria** para aislar instantáneamente cada resultado que necesita su atención.

-   En lugar de revisar todo el lote, puede enfocarse específicamente en elementos marcados, ver las palabras resaltadas y decidir si corregir el texto o refinar su lista de palabras global para borrar todo el lote de una sola vez.

## Forzar una actualización (Actualizar bandera sospechosa)

Si bien el estado se actualiza dinámicamente, siempre puede activar manualmente un recálculo para su catálogo más amplio. En su **Lista de contenido**, seleccione los productos y use la **acción masiva: "Actualizar bandera sospechosa"** para volver a escanearlos según su configuración más actual.

### Resumen

Esta función actúa como su "centro de comandos" para calidad de contenido. Ya sea que esté detectando fallas técnicas o gestionando la seguridad de marca a través de fronteras internacionales, siempre está en control total de lo que se publica en su tienda.
