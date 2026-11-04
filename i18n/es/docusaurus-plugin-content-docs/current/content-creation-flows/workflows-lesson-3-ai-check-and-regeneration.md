---
title: '4.11.3. Workflows. Lección 3: comprobación automática con IA y regeneración'
sidebar_position: 32
slug: /content-creation-flows/workflows-lesson-3-ai-check-and-regeneration
description: >-
  Deja que la IA compruebe cada texto generado antes de que llegue a tu tienda.
  Si un texto no sirve, Fozzels le indica al modelo qué estaba mal y lo vuelve
  a generar automáticamente.
---

Deja que la IA compruebe cada texto generado antes de que llegue a tu tienda. Si un texto no sirve, Fozzels le indica al modelo qué estaba mal y lo vuelve a generar automáticamente.

A veces un modelo de IA escribe algo que no puedes usar: un marcador de posición, un comentario como "Aquí tienes tu descripción", un texto en el idioma equivocado o sobre el producto equivocado. Con una comprobación con IA en tu workflow, Fozzels encuentra estos textos por ti y los vuelve a generar automáticamente, así que solo revisas lo que de verdad necesita a una persona.

Esta lección se basa en [4.11.1. Lección 1: primeros pasos con Workflows](/content-creation-flows/workflows-lesson-1-getting-started/) y [4.11.2. Lección 2: combinar bloques en un workflow](/content-creation-flows/workflows-lesson-2-combining-blocks/). Si aún no las has leído, empieza por ellas.

## Cómo funciona, en resumen

1. Tu flow genera un texto, como siempre.
2. Un segundo modelo de IA lee el texto y comprueba si se puede usar.
3. Si el texto pasa la comprobación, no cambia nada: sigue a revisión o sincronización, según lo configurado en tu flow.
4. Si el texto no la pasa, Fozzels lo vuelve a generar y le indica al modelo qué estaba mal (el "feedback").
5. El nuevo texto se comprueba otra vez. Esto se repite hasta que el texto pasa o se alcanza el número máximo de regeneraciones.
6. Si el texto sigue sin pasar tras el último intento, se marca como sospechoso con el motivo, para que puedas corregirlo tú.

## Los dos bloques nuevos

| Bloque | Tipo | Qué hace |
| --- | --- | --- |
| **AI validation fails** | Condición | Pide a un modelo de IA que compruebe el texto generado. **Yes** = el texto tiene un problema, **No** = el texto está bien. |
| **Regenerate with feedback** | Acción | Vuelve a generar el texto en segundo plano y envía al modelo los problemas encontrados, para que pueda evitarlos. |

Úsalos juntos en un mismo bloque: la condición **AI validation fails** en la sección **Conditions** y la acción **Regenerate with feedback** en la sección **Actions**.

## Qué busca la comprobación con IA

La comprobación marca un texto como no utilizable cuando:

| Problema | Ejemplo |
| --- | --- |
| No es contenido real: en lugar del texto esperado, la IA devolvió algo pensado para otro fin, o hay otra discrepancia clara | Una negativa, una pregunta de vuelta, "lorem ipsum", "[Product name]", una etiqueta de plantilla vacía |
| La IA está conversando | "Aquí tienes la descripción:", "Avísame si necesitas cambios", razonamiento visible |
| No encaja con el atributo | Una descripción completa escrita como título |
| Repite el nombre del atributo | "Meta description: ..." |
| Está en el idioma equivocado | Texto en inglés en una store view en alemán |
| Trata de otro producto | Un texto sobre auriculares para una funda de auriculares |
| Se corta a mitad de frase | El texto está incompleto |

La comprobación **no** valora el estilo, el tono, la longitud ni el formato, y nunca reescribe tu texto. Para límites de longitud o sustituciones de palabras, usa los bloques de las lecciones 1 y 2.

:::note
La comprobación ve el producto, el texto generado, el valor anterior del atributo y el idioma de tu store view. **No** ve tu prompt. Así que, si el atributo tenía antes un título normal y el nuevo valor es "lorem ipsum" (aunque tu prompt pidiera exactamente eso), la comprobación devuelve el feedback de que el resultado no parece un título normal.
:::

## Paso 1. Crea el workflow

1. En el menú lateral, dentro de **AI Flows**, abre **Workflows**.
2. Haz clic en **Create workflow**.
3. Ponle al workflow un nombre claro, por ejemplo "AI check".
4. Añade un bloque y ponle un título, por ejemplo "AI check validation".

![La opción Workflows en el menú AI Flows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/01-workflows-menu.png)

![El botón Create workflow en la página Workflows](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/02-create-workflow-button.png)

## Paso 2. Configura el bloque

1. En la sección **Conditions**, haz clic en **Add condition** y elige **AI validation fails**. Esta condición no tiene ajustes.
2. En la sección **Actions**, haz clic en **Add action** y elige **Regenerate with feedback** en el campo **Action**.
3. Define **Maximum regenerations**: cuántas veces puede Fozzels volver a generar el texto. El valor por defecto es 2 y el máximo es 3.
4. Haz clic en **Apply**.

![Selección de la acción Regenerate with feedback en la ventana Edit block](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/03-regenerate-with-feedback-action.png)

![El campo Maximum regenerations y el botón Apply](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/04-maximum-regenerations.png)

:::tip
Para hacer pruebas, pon **Maximum regenerations** en 1. Verás el resultado final antes y gastarás menos.
:::

## Paso 3. Asigna el workflow a un flow

1. Abre tu content flow.
2. En el campo **Workflows**, selecciona tu workflow.
3. **Guarda el flow.** El workflow solo se ejecuta después de guardar el flow.

![Selección del workflow en el campo Workflows de un content flow](/img/kb/content-creation-flows/workflows-lesson-3-ai-check-and-regeneration/05-assign-workflow-to-flow.png)

Si tu flow también tiene otros workflows (por ejemplo "Replace text" o "Truncate"), puedes combinarlos. Los workflows se ejecutan en el orden en que están asignados.

## Paso 4. Comprueba el resultado

Genera textos en tu flow. Para cada producto ocurre una de estas tres cosas:

**El texto pasa a la primera.** No ocurre nada especial. El texto sigue como de costumbre.

**El texto no pasa, pero sí tras una regeneración.** Mientras Fozzels lo vuelve a generar, el texto aparece como sospechoso con el motivo "Did not pass AI validation and is being generated again: ...". Esto tarda entre unos segundos y unos minutos. Cuando el nuevo texto pasa, se quita la marca y el nuevo texto sustituye al anterior.

**El texto no pasa nunca.** Tras la última regeneración, el texto sigue marcado como sospechoso con el motivo, por ejemplo: "Did not pass AI validation after 2 generation(s): The Title value "All-Mountain Snowboard" is in English, not German as required." Lee el motivo y después edita el texto tú mismo, o cambia el prompt y vuelve a generar.

Puedes seguir cada intento en el [Content Completion History](/content-creation-flows/content-completion-history-revision-history-version-control/) del producto: cada generación aparece como una revisión propia.

:::note
El motivo solo se conserva cuando el texto no pasa al final. Cuando una regeneración pasa, el motivo se elimina y el historial muestra la versión anterior sin motivo.
:::

## Otros mensajes que puedes ver

| Mensaje | Qué significa | Qué hacer |
| --- | --- | --- |
| AI validation could not check this value, so it is held for review. | La comprobación no pudo ejecutarse, por ejemplo por un error temporal. | Revisa el texto tú mismo. |
| AI validation stopped because your balance is too low, so this value was not validated. | Te has quedado sin saldo. | Recarga tu saldo y vuelve a generar. |
| Did not pass AI validation. It was not generated again because the flow, its workflows or the item changed in the meantime. | Algo cambió mientras el texto esperaba una regeneración. | Revisa el texto o vuelve a generarlo. |

## Costes

- Cada comprobación con IA es una pequeña llamada de pago. Cuesta mucho menos que una generación.
- Cada regeneración cuesta lo mismo que una generación normal.
- Por tanto, un producto puede costar como máximo: 1 generación + el número máximo de regeneraciones + una comprobación por cada intento.

Elige el número máximo de regeneraciones teniendo esto en cuenta. Para la mayoría de los flows, 1 o 2 es suficiente.

## Reglas que conviene recordar

| Regla | Qué significa para ti |
| --- | --- |
| Usa los dos bloques juntos | AI validation fails encuentra el problema, Regenerate with feedback lo corrige |
| La comprobación no ve tu prompt | Valora si el texto se puede usar en tu tienda, no si sigue cada instrucción |
| No se comprueban el estilo, el tono ni la longitud | Para eso, usa Replace text, Truncate o Mark suspicious |
| Máximo 3 regeneraciones | Después, el texto te llega como sospechoso |
| Cada comprobación y cada regeneración se cobra | Mantén el máximo bajo |
| Guarda el flow después de asignar el workflow | Si no, el workflow no se ejecuta |

:::tip
Prueba primero el workflow con 2–3 productos. Revisa el historial y los motivos, y después actívalo para todo el flow.
:::

## Mantén el control de tu contenido

Con una comprobación con IA en tus workflows, cada texto generado se comprueba antes de llegar a tu tienda, y los textos que no sirven se corrigen automáticamente. Dedicas tu tiempo solo a los textos que de verdad te necesitan, y Fozzels se encarga del resto. Toma el control total de tu contenido con Fozzels.

## ¿Necesitas ayuda con la configuración?

Si necesitas ayuda para configurar workflows personalizados, contacta con tu gestor o con el soporte de Fozzels.
