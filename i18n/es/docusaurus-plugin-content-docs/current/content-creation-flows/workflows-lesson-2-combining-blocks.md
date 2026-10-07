---
title: '4.11.2. Workflows. Lección 2: combinar bloques en un workflow'
sidebar_position: 31
slug: /content-creation-flows/workflows-lesson-2-combining-blocks
description: >-
  Un workflow puede contener varios bloques conectados. El resultado de cada
  bloque decide qué bloque se ejecuta a continuación, de modo que un mismo
  workflow puede tratar textos distintos de formas distintas.
---

Un workflow puede contener varios bloques conectados entre sí. El resultado de cada bloque decide qué bloque se ejecuta a continuación, de modo que un mismo workflow puede tratar textos distintos de formas distintas.

Esta lección se basa en [4.11.1. Lección 1: primeros pasos con Workflows](/content-creation-flows/workflows-lesson-1-getting-started/). Si aún no la ha leído, empiece por ella: explica las condiciones, las acciones y cómo se procesan los resultados.

## Salidas de un bloque: Yes, No y Always

Cada bloque tiene una entrada a la izquierda y tres salidas a la derecha.

![Un bloque con su entrada y las salidas Yes, No y Always](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/01-block-outputs.png)

| Salida | Dónde | Lleva al siguiente bloque cuando |
| --- | --- | --- |
| **Yes** (azul) | Parte IF | Se cumplen las condiciones del bloque |
| **No** (naranja) | Parte IF | No se cumplen las condiciones del bloque |
| **Always** (gris) | Parte THEN | Se han ejecutado las acciones del bloque |

Para conectar dos bloques, arrastre una línea desde el punto de salida de un bloque hasta el punto de entrada del siguiente. Haga doble clic en una línea para añadirle una nota.

## El workflow de ejemplo

Nuestro workflow tiene cinco bloques. Sustituye "cake" por "festive cake", comprueba si hay una palabra duplicada, marca los textos que no contienen "cake" y añade "Christmas" al saludo de las fiestas.

Los bloques están conectados así:

| Desde | Salida | Hasta |
| --- | --- | --- |
| 1. cake → festive cake | **Yes** | 2. Is festive cake true |
| 1. cake → festive cake | **No** | 3. Is cake false (Mark suspicious) |
| 2. Is festive cake true | **No** | 4. Validated test (Mark suspicious) |
| 4. Validated test | **Always** | 5. Holiday → Christmas Holiday! |

Las salidas **Yes** y **Always** del bloque 2, y las salidas del bloque 3, no están conectadas. Qué significa esto se muestra en la Prueba 1, más abajo.

## Los bloques uno por uno

### 1. cake → festive cake

Si el texto contiene "cake", se sustituye por "festive cake". Match case está activado, así que "Cake" y "CAKE" se quedan como están. **Yes** lleva al bloque 2 y **No** al bloque 3.

![Ajustes del bloque 1](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/03-block-1-settings.png)

### 2. Is festive cake true

Comprueba si hay una palabra duplicada y la corrige. **No** lleva al bloque 4.

![Ajustes del bloque 2](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/04-block-2-settings.png)

:::note
En esta captura de pantalla la palabra está escrita "fastive". El bloque 1 escribe "festive", por lo que esta condición nunca se cumple. En su propio workflow, use `festive festive cake` y `festive festive` → `festive`.
:::

### 3. Is cake false

Un bloque sin condiciones. Marca el resultado con el motivo "Cake not found :(". Sus salidas no están conectadas.

![Ajustes del bloque 3](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/05-block-3-settings.png)

### 4. Validated test

También sin condiciones. Marca el resultado con el motivo "Checked! Please sync!". **Always** lleva al bloque 5.

![Ajustes del bloque 4](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/06-block-4-settings.png)

:::note
Mark suspicious bloquea la sincronización con la tienda. Este motivo es solo una marca de prueba que muestra que el bloque se ha ejecutado. En un workflow real, escriba un motivo que indique al revisor qué debe comprobar.
:::

### 5. Holiday → Christmas Holiday!

Si el texto contiene "Happy Holiday!", se sustituye por "Happy Christmas Holiday!".

![Ajustes del bloque 5](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/07-block-5-settings.png)

## Generar un texto de prueba

Para probar el workflow usted mismo, utilice este prompt en su flow. Produce un texto similar al de esta lección, que termina con "Happy Holiday!" para que el bloque 5 tenga algo que encontrar.

```text
Write a short, warm, and appealing delivery message for the product. Mention that we will deliver the cake in beautiful gift packaging, together with a personal note, to the address provided by the customer.
The first part of the text should contain approximately 80 characters and describe the cake delivery in a natural, friendly, and elegant way.

Do not use capitalization randomly. Each variation should fit naturally into the sentence and context.
The final sentence must be exactly: "Happy Holiday!"
Keep the message friendly, festive, elegant, warm, and suitable for an online cakes shop.
```

Para la Prueba 1, sustituya "cake" en el prompt por otro producto, por ejemplo "sweets", de modo que el texto no contenga "cake".

## Prueba 1: texto sin "cake"

**Recorrido:** bloque 1 → No → bloque 3 → fin.

![Resultado sin cake, marcado con "Cake not found :("](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/08-test-1-result.png)

- El motivo "Cake not found :(" muestra que la rama **No** ha funcionado.
- El bloque 3 no tiene condiciones, pero su acción se ha ejecutado. Un **bloque sin condiciones ejecuta sus acciones**.
- "Happy Holiday!" **no** se ha sustituido, aunque el texto lo contiene. Las salidas del bloque 3 no están conectadas, así que nunca se llegó al bloque 5. **Cuando una salida no está conectada, el procesamiento se detiene ahí.**

## Prueba 2: texto con "cake"

**Recorrido:** bloque 1 → Yes → bloque 2 → No → bloque 4 → Always → bloque 5.

![Resultado con festive cake y Happy Christmas Holiday](/img/kb/content-creation-flows/workflows-lesson-2-combining-blocks/09-test-2-result.png)

- "delicious **festive cake**": el bloque 1 sustituyó la palabra y tomó la rama **Yes**.
- No hay palabra duplicada, así que el bloque 2 tomó la rama **No**.
- El motivo "Checked! Please sync!" muestra que el bloque 4 se ha ejecutado.
- "Happy **Christmas** Holiday!": se llegó al bloque 5 a través de **Always** y realizó su sustitución.

## Reglas que conviene recordar

| Regla | Qué significa para usted |
| --- | --- |
| Yes / No eligen el siguiente bloque | Cree recorridos distintos para los textos que cumplen una condición y los que no |
| Always continúa después de las acciones | Úselo para pasar a la siguiente comprobación, haga lo que haga el bloque |
| Un bloque sin condiciones ejecuta sus acciones | Práctico para un paso final, como una marca de revisión |
| Una salida sin conectar termina el procesamiento | Conecte todos los recorridos que deban llegar a bloques posteriores, o se omitirán |
| Mark suspicious no detiene el workflow | Los bloques posteriores se siguen ejecutando después de una marca |

:::tip
Antes de guardar, siga cada recorrido en el lienzo con el dedo: "si el texto tiene X, ¿adónde va después?". Una línea que falta es el motivo más habitual por el que un bloque nunca se ejecuta.
:::
