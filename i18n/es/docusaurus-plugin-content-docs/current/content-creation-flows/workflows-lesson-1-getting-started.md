---
title: '4.11.1. Workflows. Lección 1: primeros pasos con Workflows'
sidebar_position: 30
slug: /content-creation-flows/workflows-lesson-1-getting-started
description: >-
  Los workflows revisan y editan los resultados generados automáticamente:
  sustituyen palabras, recortan el texto a un límite de longitud o marcan un
  resultado para revisión manual antes de que llegue a la tienda. Crea tu
  primer workflow y descubre cómo se comporta.
---

Los workflows revisan y editan los resultados generados automáticamente: pueden sustituir palabras, recortar el texto a un límite de longitud o marcar un resultado para revisión manual antes de que llegue a la tienda. Defines las reglas una vez y se aplican a cada nuevo resultado.

En esta lección crearás tu primer workflow, verás cómo se comporta y aprenderás algunas cosas a tener en cuenta por el camino.

## El ejemplo con el que trabajamos

Nuestro flow genera una breve descripción de entrega para un cake:

> We are delighted to deliver your chosen **cake** directly to the address you provide… Each Festive **Cake** will arrive in beautiful gift packaging… every celebration deserves a delicious **CAKE**…

La palabra "cake" aparece tres veces, con tres combinaciones de mayúsculas y minúsculas distintas. Tenlo en cuenta: más adelante será importante.

## Paso 1. Crea un workflow

Ve a **Home → Workflows** y haz clic en **Create workflow**.

![Página de Workflows con el botón Create workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/01-workflows-page-create-workflow.png)

El editor se abre con el nombre predeterminado **New workflow 1**. Ponle un nombre claro al workflow desde el principio: cuando tengas varios, los nombres genéricos son fáciles de confundir.

![Editor de workflow vacío con el botón Create block](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/02-empty-workflow-editor.png)

> **Nota:** el interruptor **Active** está activado de forma predeterminada. Un workflow no tiene ningún efecto hasta que se asigna a un flow, pero una vez asignado, un workflow activo empieza a procesar resultados.

## Paso 2. Configura un bloque

Haz clic en **Create block**. Aparece un bloque en el lienzo con dos partes:

- **IF:** las condiciones bajo las que se ejecuta el bloque.
- **THEN:** las acciones que realiza.

![Un nuevo bloque vacío en el lienzo](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/03-new-empty-block.png)

Haz clic en el icono del lápiz para abrir los ajustes del bloque.

![Ventana de edición de bloque vacía](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/04-empty-edit-block-window.png)

### Condiciones

Cada condición consta de tres partes: qué comprobar, un operador y un valor. Hay dos cosas que puedes comprobar:

![Tipos de condición: Length y Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/05-condition-types.png)

**Length** es la longitud del texto en caracteres, incluidos los espacios. Operadores: greater than, greater or equal, less than, less or equal, equals, not equal.

![Operadores de Length](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/06-length-operators.png)

**Text** comprueba el contenido. Operadores: contains, does not contain, begins with, ends with, is empty, is not empty.

![Operadores de Text](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/07-text-operators.png)

Con más de una condición, elige la lógica:

- **All conditions:** deben cumplirse todas las condiciones (AND).
- **Any condition:** basta con que se cumpla una (OR).

### Acciones

Hay tres acciones disponibles. Las descripciones se muestran directamente en el desplegable.

![Las tres acciones disponibles](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/08-available-actions.png)

- **Replace text:** sustituye una palabra o frase. Deja **Replace with** vacío para eliminarla. Las etiquetas HTML no se ven afectadas.
- **Truncate:** recorta el texto a un número máximo de caracteres.
- **Mark suspicious:** marca el resultado para revisión manual.

Un bloque puede contener varias acciones. Se ejecutan de arriba abajo.

### Tu primer bloque

**Tarea:** si el texto contiene "Happy holidays!", sustituye "cake" por "festive cake".

1. **Nombre:** `cake -> festive cake`
2. **Condiciones → Añadir condición:** `Text` · `contains` · `Happy holidays!`
3. **Acciones → Añadir acción:** `Replace text`, Buscar `cake`, Replace with `festive cake`, **All matches** activado (sustituye todas las coincidencias, no solo la primera).
4. Haz clic en **Apply**.

![Ajustes del bloque para el primer ejemplo](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/09-first-block-settings.png)

El bloque en el lienzo ahora muestra un resumen de sus condiciones y acciones. Comprueba que **Active** esté activado y haz clic en **Save**.

![Bloque guardado con resumen, interruptor Active y botón Save](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/10-saved-block-summary.png)

## Paso 3. Asigna el workflow a un flow

Un workflow guardado no hace nada hasta que se asocia a un flow.

1. Abre tu flow y ve a la pestaña **Automation** (la 4.ª pestaña).
2. En la parte inferior, en la sección **Workflows**, elige tu workflow en el desplegable.
3. Haz clic en **Save** para guardar el flow.

![Sección Workflows de un flow con un workflow asignado](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/11-flow-workflows-section.png)

Genera un nuevo resultado y ábrelo desde **Batch List** (la tabla de resultados generados).

## Paso 4. Comprueba el resultado

El texto que contiene "Happy holidays!" ha cambiado:

![Resultado con "festive cake" y "Festive festive cake"](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/12-result-festive-festive-cake.png)

Fíjate en **"Festive festive cake"**. El modelo escribió "Festive Cake" con C mayúscula, y sin **Match case** la sustitución ignora las mayúsculas y minúsculas, por lo que "Cake" también se sustituyó.

**Solución:** activa **Match case**. Así solo se sustituye "cake" en minúsculas, y "Festive Cake" se queda como está.

> **Ten en cuenta:** Replace text no tiene en cuenta el contexto, solo busca coincidencias. Si el modelo ya había escrito "delicious cake", sustituir `cake` por `delicious cake` da como resultado "delicious delicious cake". Piensa en cómo se comportará tu sustitución en distintos textos.

## Paso 5. Cómo se procesan los resultados

Si cambias los ajustes de un workflow y vuelves a abrir un resultado que ya procesó, el resultado no cambia. Así es como funciona el sistema:

- Los workflows solo procesan resultados **nuevos y regenerados**.
- Cada resultado es procesado por un workflow determinado **solo una vez**. Editar sus bloques no afecta a los resultados que ya ha procesado.
- Los cambios son **permanentes**. Eliminar un workflow de un flow no restaura el texto original.

Para aplicar los nuevos ajustes, regenera el resultado.

> **Consejo:** prueba los workflows nuevos primero en un flow de prueba. Los cambios en los resultados procesados no se pueden deshacer, solo regenerar.

## Paso 6. Varios workflows

Para corregir los textos en los que aparece "Festive festive", puedes añadir un segundo workflow. Este también marca el resultado para revisión:

- **Condiciones:** `Text` · `contains` · `Festive festive`
- **Acciones:**
    1. `Replace text`: `Festive festive` → `Festive`, **All matches** y **Match case** activados
    2. `Mark suspicious` con un motivo para el revisor

![Workflow de corrección con Replace text y Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/13-fix-workflow.png)

Puedes asignar cualquier número de workflows a un flow. Se ejecutan **de arriba abajo**, y cada uno recibe el texto tal como lo dejó el anterior. Reordénalos arrastrando el asa o con las flechas.

![Cuatro workflows asignados a un flow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/14-four-workflows-assigned.png)

Orden recomendado:

1. Workflows que cambian el texto.
2. Workflows que corrigen los efectos secundarios de los anteriores. Una corrección debe ejecutarse **después** del workflow que causa el problema.
3. Mark suspicious puede ir en cualquier posición: no detiene el procesamiento.

Si varios workflows marcan un resultado como sospechoso, se muestra el motivo del **primero** de la lista.

## Paso 7. Truncate con revisión manual

**Tarea:** sustituye "cake" por "candies", limita el texto a 110 caracteres y evita que el texto acortado llegue a la tienda hasta que alguien lo revise.

- **Condiciones** (**All conditions**):
    - `Text` · `contains` · `cake`
    - `Length` · `greater than` · `100`
- **Acciones**, en este orden:
    1. `Replace text`: `cake` → `candies`, **All matches** y **Match case** activados
    2. `Truncate`: `110`, **Keep whole words** activado
    3. `Mark suspicious`: motivo `Truncated to 110 characters`

![Bloque con Replace text, Truncate y Mark suspicious](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/15-replace-truncate-mark-suspicious.png)

> **Por qué importa el orden:** "candies" es más larga que "cake". Si truncas primero y sustituyes después, el texto puede volver a superar el límite. Sustituye primero y trunca después.

**Resultado:**

![Resultado truncado, 109 caracteres](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/16-truncated-result.png)

El texto tiene 109 caracteres y ninguna palabra queda cortada por la mitad. Las palabras unidas por un guion, como "door-complete", cuentan como una sola palabra. No se añade "…" al final. Sin embargo, la frase queda incompleta, por lo que Mark suspicious forma parte de este bloque.

Un resultado sospechoso **no se sincroniza con la tienda** hasta que un usuario lo edita o lo regenera. En Batch List, aparece un icono "!" junto a **Sync Now**, y el motivo se muestra al pasar el ratón por encima:

![Motivo de sospecha mostrado junto a Sync Now](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/17-suspicious-reason-sync-now.png)

Dentro del resultado, un aviso **Synchronization with integration is disabled** muestra el motivo:

![Aviso de sincronización desactivada con el motivo del workflow](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/18-sync-disabled-warning.png)

> **Las palabras sospechosas de la integración tienen prioridad.** La integración cuenta con su propia lista de [palabras y patrones sospechosos](/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control). Si el texto contiene alguna, el resultado recibe el motivo del sistema "Completion looks suspicious, possible AI recommendations found", y no se muestran los motivos de los workflows. La palabra encontrada se resalta en naranja.

![Aviso de sospecha del sistema con una palabra resaltada](/img/kb/content-creation-flows/workflows-lesson-1-getting-started/19-system-suspicious-warning.png)

## Referencia rápida

| Ajuste | Cómo funciona |
| --- | --- |
| All / Any condition | Deben cumplirse todas las condiciones / basta con que se cumpla una |
| Length | Longitud del texto en caracteres, incluidos los espacios |
| Replace text | Si Replace with está vacío, se elimina la coincidencia; las etiquetas HTML no se ven afectadas |
| All matches | Desactivado: solo se sustituye la primera coincidencia |
| Match case | Desactivado: la sustitución ignora las mayúsculas y minúsculas |
| Truncate | No se añade "…"; Keep whole words mantiene las palabras intactas |
| Mark suspicious | Bloquea la sincronización con la tienda; no detiene otras acciones ni workflows |
| Varias marcas de sospecha | Se muestra el motivo del primer workflow |
| Palabras sospechosas de la integración | Tienen prioridad sobre los motivos de los workflows |
| Procesamiento | Solo resultados nuevos y regenerados, una vez por workflow; los cambios son permanentes |

## Qué sigue

La siguiente lección trata funciones avanzadas: ramas Yes/No y conexión de bloques, grupos de condiciones, y trabajo con salida HTML.
