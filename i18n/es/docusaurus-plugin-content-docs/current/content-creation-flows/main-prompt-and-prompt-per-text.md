---
title: '4.3.4 Prompt principal y prompt por texto: cómo envía Fozzels su prompt'
sidebar_position: 11.5
slug: /content-creation-flows/main-prompt-and-prompt-per-text
description: >-
  Cada solicitud a la IA tiene dos partes: el prompt principal, igual para todos
  los productos, y el prompt por texto, que contiene los datos del producto.
  Qué va en cada parte, por qué y cómo pasar un Flow existente al nuevo
  sistema.
---

Fozzels envía a la IA un prompt para cada producto. Ese prompt tiene dos partes:

- el **prompt principal**, que contiene las reglas de todo el Flow y es igual para todos los productos, y
- el **prompt por texto**, que contiene la tarea de un campo, con los datos de este producto.

Fozzels envía el prompt principal a la IA como una *instrucción de sistema*: las órdenes permanentes que la IA tiene presentes mientras hace la tarea. Este artículo le explica qué va en cada parte, por qué es importante y cómo pasar un Flow existente al nuevo sistema.

## Las dos partes de un vistazo

| | Main prompt (Prompt principal) | Prompt per text (Prompt por texto) |
|---|---|---|
| **Qué es** | Las reglas que se aplican a todos los textos del Flow | La tarea de un campo |
| **Contenido habitual** | Quién escribe, para quién, con qué tono, los principios de neuromarketing, las palabras clave, lo que nunca se debe mencionar, las reglas de comprobación, sus propias instrucciones permanentes | La longitud, la estructura, el bloque de confianza, los enlaces internos y la instrucción con los atributos del producto |
| **Datos del producto** | No se permiten. Debe ser igual para todos los productos | Sí: atributos, condiciones y snippets |
| **Dónde se edita** | Paso 3 del asistente del Flow (**Main prompt**), o la tarjeta **Main prompt** de la página del Flow | Paso 4 del asistente del Flow (**Prompt per text**), una pestaña para cada campo |
| **Envío** | Una sola vez, antes de los prompts de los campos | Para cada campo, con los datos de este producto |

:::note
Algunos artículos y capturas de pantalla todavía usan los nombres anteriores de los pasos: el paso 3 se llamaba **Enrich the text** y el paso 4 **Fields**. La tarjeta de la página del Flow se llamaba **System prompt**. Son los mismos pasos y la misma tarjeta. En la aplicación, **Main prompt** aparece como "Prompt principal" y **Prompt per text** como "Prompt por texto".
:::

## ¿Por qué dos partes?

- **La IA sigue mejor sus reglas.** Los modelos de IA dan más peso a una instrucción de sistema que a una línea en medio de un prompt largo. El tono, las palabras que se deben evitar y el trato al lector se mantienen con más constancia en todos sus productos.
- **Los datos de sus productos no pueden anular sus reglas.** El texto de un campo de producto, por ejemplo una nota del proveedor que dice "ignora las instrucciones anteriores", se queda en el prompt por texto. No cambia las reglas del prompt principal.
- **Más rápido y más barato en Flows grandes.** El prompt principal es idéntico, palabra por palabra, para cada producto. Los proveedores de IA pueden reutilizar una parte de una solicitud que ya han visto. Así la solicitud es más rápida y el coste puede bajar.

## Qué va en el prompt principal

Ponga en el prompt principal todo lo que es cierto para **todos** los textos del Flow:

- **Role of the AI**, **Target audience** y **Tone of voice**
- **Neuromarketing principles**
- **Keywords**
- **Do not mention**: palabras y temas que nunca deben aparecer en el texto
- **Guidelines and check rules**, las reglas estándar de Fozzels y sus propias reglas
- **Sus propias instrucciones**, con sus palabras, por ejemplo "Trate siempre al lector de *usted*" o "Enviamos en 24 horas, nunca prometa una entrega más rápida"

En el paso 3, usted activa estos bloques y los rellena. Fozzels escribe el prompt principal a partir de ellos. Las fuentes que configura en el paso 3 (**Attributes from your store**, **Look at photos** y **Search the internet**) son distintas para cada producto. Por eso Fozzels las envía con el prompt por texto. Debajo de los bloques, en **Your main prompt**, verá el resultado y también podrá editarlo a mano.

### Sin datos del producto en el prompt principal

El prompt principal debe ser igual para todos los productos, así que no puede usar datos del producto:

- El editor del prompt principal no tiene panel **Attributes** ni **Preview**. Una vista previa sería igual para todos los productos. En su lugar, cada bloque muestra el texto que la IA lee para él.
- Los snippets que leen datos del producto y los snippets con condiciones no están disponibles ahí. Si uno de estos snippets ya está en un prompt principal y usted le añade datos del producto, Fozzels muestra el mensaje *"Este fragmento está en el prompt principal de … El prompt principal es el mismo para todos los productos, así que ahí el fragmento no puede leer el producto. Quítalo primero de esos prompts principales o guarda tu cambio como un fragmento nuevo."* Quite primero el snippet de esos prompts principales o guarde su cambio como un snippet nuevo.

Todo lo que depende del producto va en el prompt por texto.

## Qué va en el prompt por texto

El prompt por texto es la tarea de un campo. En el paso 4, cada campo del Flow tiene una pestaña con:

- la **longitud** del texto,
- la **estructura**: las secciones, su orden y sus títulos,
- el **bloque de confianza** y los **enlaces internos**, para los campos que los admiten,
- la **Instruction for [field]**: lo que la IA debe escribir en este campo, con los atributos y las condiciones del producto.

El prompt principal se aplica a todos los campos, así que no repita aquí el rol, el tono ni las reglas. Escriba solo lo que es especial para este campo, por ejemplo *"Escribe una meta descripción de máximo 155 caracteres que nombre la marca y el beneficio principal."*

Fozzels añade por sí mismo las instrucciones técnicas al prompt por texto: el formato de la respuesta, las opciones que permite un campo de selección y la longitud máxima del campo. Usted no necesita escribirlas.

## Dónde se edita el prompt principal

- **En un Flow nuevo:** paso 3, **Main prompt**. Un Flow nuevo empieza con el prompt principal de su [Brand Profile](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/#brand-profile) predeterminado.
- **En un Flow existente:** en la página del Flow, la tarjeta **Main prompt** muestra el prompt principal tal como lo lee la IA. Haga clic en **Change** para editarlo. Solo se guarda el prompt principal. Los prompts por texto se quedan como están.
- **Brand Profiles:** en el paso 3, haga clic en **Load brand profile** para usar un perfil guardado, o en **Save as brand profile** para conservar el prompt principal de este Flow para otros Flows. Un Flow recibe una copia del perfil. Si cambia el perfil más tarde, Fozzels no modifica sus Flows existentes.

## Flows existentes

No tiene que hacer nada. Los Flows que creó antes de este cambio siguen funcionando:

- El prompt principal de un Flow anterior empieza vacío, y su prompt se queda donde estaba.
- Los bloques de todo el Flow que ya están en el prompt, como el rol, la audiencia o el tono, se envían automáticamente con el prompt principal.
- El texto que usted escribió se queda en el prompt por texto, exactamente donde lo escribió. Fozzels no mueve sus propias frases, porque una frase puede significar algo distinto lejos de las que la rodean.

Para aprovechar todas las ventajas, pase usted mismo sus reglas permanentes al prompt principal.

### Pasar un Flow existente al nuevo sistema

1. Abra el Flow y lea su prompt. Marque las frases que son ciertas para **todos** los productos: el personaje, la voz de la marca, la audiencia, el trato al lector, las palabras que se deben evitar.
2. En la página del Flow, haga clic en **Change** en la tarjeta **Main prompt**.
3. Añada estas reglas con los bloques (rol, audiencia, tono, do not mention, sus propias reglas) o escríbalas como sus propias instrucciones. Guarde.
4. Borre las mismas frases del prompt de cada campo, para que la IA no las reciba dos veces.
5. Pruebe el Flow con algunos productos reales y compare los textos con los resultados anteriores.

**Ejemplo.** Un prompt que contenía todo:

> Eres redactor de una marca premium de zapatos. Escribe para mujeres de 30 a 50 años que valoran la comodidad. Nunca menciones precios ni descuentos. Usa siempre "tú".
> Escribe una descripción de producto de unas 120 palabras para **Name**. Menciona el material **Material** y el color **Colour**.

Después del cambio:

- **Prompt principal:** *Eres redactor de una marca premium de zapatos. Escribe para mujeres de 30 a 50 años que valoran la comodidad. Nunca menciones precios ni descuentos. Usa siempre "tú".*
- **Prompt por texto (Description):** *Escribe una descripción de producto de unas 120 palabras para* **Name**. *Menciona el material* **Material** *y el color* **Colour**.

## Conviene saber

- **Sin instrucciones dobles.** Si el prompt de un campo todavía tiene un bloque que el prompt principal ya tiene, por ejemplo un segundo tono de voz, Fozzels envía ese bloque una sola vez, desde el prompt principal.
- **Varios campos en un Flow.** Todos los campos se generan en una sola solicitud a la IA para cada producto y comparten el prompt principal. Así el rol, la audiencia y las reglas se aplican automáticamente a los campos adicionales.
- **Vea lo que se envió.** En la lista de contenido generado, el prompt de cada texto muestra las dos partes, con el prompt principal primero.

## Artículos relacionados

- [4.1.2. Crear un Content Flow: los seis pasos](/content-creation-flows/creating-a-new-content-flow-and-initial-settings/)
- [4.3.2 Configuración y uso del prompt: el nuevo editor de prompts](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/)
- [4.3.3. Escribir Prompts Efectivos (Recomendaciones)](/content-creation-flows/writing-effective-prompts-recommendations/)
