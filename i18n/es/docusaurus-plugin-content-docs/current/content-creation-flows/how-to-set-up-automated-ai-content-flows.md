---
id: '103000408983'
title: 4.1.2.a Cómo configurar Content Flows automatizados con IA
sidebar_position: 3
slug: /content-creation-flows/how-to-set-up-automated-ai-content-flows
description: >-
  Cómo dejar que un Content Flow genere y sincronice contenido de producto
  automáticamente: revisar el Flow antes del lanzamiento, definir el límite
  diario, la aprobación y las actualizaciones en el paso Launch, e iniciar el
  Flow.
---

Un Content Flow automatizado genera contenido de producto en segundo plano cada día y lo envía a su tienda. Usted no tiene que iniciar las tareas.

La automatización se define en el paso 6 de un Content Flow, **Launch**. Para una descripción de los seis pasos, consulte [4.1.2. Crear un Content Flow: los seis pasos](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/).

## Paso 1: Revise el Flow antes del lanzamiento

Haga estas tres comprobaciones antes de lanzar el Flow. Evitan errores.

1. **Compruebe la selección de productos.** En el paso 2, **What and with what?**, asegúrese de que la selección contiene solo los productos que desea procesar.
2. **Pruebe el prompt.** En el paso 5, **Test**, genere textos para algunos productos reales. Asegúrese de que los textos y las puntuaciones son correctos.
3. **Evite la recursión.** No use como fuente en el prompt el campo en el que escribe el Flow. Por ejemplo, no use `product_description` como entrada para generar una nueva `product_description`. Si no, Fozzels puede generar el texto una y otra vez.

## Paso 2: Defina la automatización en el paso Launch

En el paso 6, **Launch**, responda a tres preguntas:

1. **How many products per day?** Seleccione 10, 25, 50 o 100, o escriba su propio número. El límite mantiene bajos los costes y el trabajo de revisión. Cuando Fozzels ha completado la selección actual, el Flow toma automáticamente los productos nuevos que coinciden con ella.
2. **What happens with a new text?**
    - **I approve every text first** (recomendado): los textos nuevos van a su lista de revisión. Fozzels no envía nada a su tienda antes de que usted lo apruebe.
    - **Straight to my shop**: Fozzels publica los textos automáticamente. Todavía puede editarlos o volver a la versión anterior. Los textos que Fozzels marca como sospechosos siempre esperan su revisión.
3. **If a product changes later?** Active el interruptor para que Fozzels escriba un texto nuevo automáticamente cuando cambia en su tienda un atributo que usa el prompt, por ejemplo el color o el material. Cuando el interruptor está desactivado, Fozzels escribe un texto para un producto solo una vez.

En **Advanced settings**, también puede:

- definir el cooldown que evita que otros Flows vuelvan a generar el mismo contenido: **Use default**, **Override** o **Turn off**. Para más información, consulte [4.4.1 Función de prevención de generación de contenido superpuesto](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/).
- hacer clic en **Connect workflow** para añadir una acción que se ejecuta después de cada texto, por ejemplo una traducción.

## Paso 3: Lance el Flow

1. Haga clic en **Launch flow**.

    Fozzels muestra el mensaje "Your flow is running". El Flow procesa productos cada día, hasta el límite diario, hasta que ha completado todos los productos de la selección.

2. Para iniciar la generación de inmediato, abra la página del Flow, haga clic en el menú **…** y haga clic en **Run Now**. Fozzels empieza de inmediato, también cuando el Flow ya ha alcanzado el límite diario de hoy.

Para continuar la configuración más tarde, haga clic en **Save as draft** en lugar de **Launch flow**.

## Reglas y recomendaciones

- **El Flow debe estar activo.** Fozzels solo ejecuta los Flows activos. Cuando usted detiene un Flow, Fozzels detiene todas las ejecuciones programadas hasta que vuelve a iniciar el Flow.
- **Puede cambiar un Flow activo.** Sus cambios se aplican a todos los textos nuevos. Fozzels no cambia los textos que ya ha generado, a menos que usted los genere de nuevo.
- **Los productos nuevos se añaden automáticamente.** Después de cada actualización del catálogo, Fozzels compara los productos de su tienda con la selección del Flow. Los productos nuevos que coinciden con la selección, por ejemplo 20 productos nuevos de una categoría, entran automáticamente en el Flow.

## Artículos relacionados

- [4.1.2. Crear un Content Flow: los seis pasos](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.7.4 Palabras y frases sospechosas: control avanzado de calidad de contenido](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control)
- [3.5 Aviso "Recursion detected" al crear un Flow](/data-import-and-quality/recursion-detection-preventing-infinite-content-generation)
- [4.4.1 Función de prevención de generación de contenido superpuesto](/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function)
- [4.7.3 Etiquetas HTML permitidas para la generación de texto con IA](/content-creation-flows/allowed-html-tags-for-ai-text-generation)
