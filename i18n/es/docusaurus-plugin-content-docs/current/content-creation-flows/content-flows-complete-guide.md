---
title: Content Flows - Guía Completa
sidebar_position: 28
slug: /content-creation-flows/content-flows-complete-guide
description: Los Content Flows son la característica de automatización principal de Fozzels. Esta guía cubre la creación de un Flow, plantillas de avisos, su ejecución, el ciclo de vida de la finalización, contenido sospechoso y por qué el contenido a veces no se sincroniza.
keywords:
- flujo de contenido
---

Los Content Flows son la característica de automatización principal de Fozzels. Un Flow es una regla que genera automáticamente contenido de IA para un atributo de producto seleccionado y escribe el resultado nuevamente en su tienda.

## Qué hace un Flow

1. Filtra productos por sus condiciones (p. ej. "description is empty")
2. Envía datos de producto a IA con su aviso
3. Almacena el contenido generado como una "completion"
4. Inserta el contenido en su atributo de tienda

---

## Creación de un Flow

Vaya a [Flows](https://app.fozzels.com/completions/product/rule) → **Create Flow**

### Paso 1: Tienda y atributo de destino

- Seleccione la tienda cuyos productos desea procesar
- Asigne un nombre al Flow
- Seleccione el **atributo de destino**: el atributo que recibirá contenido generado por IA
  - Debe tener la bandera **Mutable** habilitada en Integración → Atributos

### Paso 2: Proveedor de IA

- Elija proveedor de IA: OpenAI GPT-4o, Google Gemini 2.5 Flash o Anthropic Claude
- Seleccione un modelo específico
- Configure los parámetros del modelo si es necesario

### Paso 3: Productos y aviso

- **Condiciones**: generador de consultas visual para filtrar qué productos procesa este Flow
  - Ejemplo: "description is empty AND category equals Electronics"
  - Dejar vacío para procesar todos los productos en la tienda
  - Una vista previa del recuento de productos muestra cuántos productos coinciden
- **Prompt**: la instrucción enviada a IA, escrita en el [editor de prompts](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor). Los datos del producto se añaden como **atributos**: escriba `/` en el editor, o haga clic en uno del panel de atributos o arrástrelo. Cada atributo se sustituye por el valor propio del producto.
  - Ejemplo: _Write a product description for_ **Name** _(SKU:_ **SKU**_) in category_ **Category**, donde las partes en negrita son atributos
  - Un atributo con una etiqueta al lado (_Brand:_ **Brand**) va dentro de una **condición** (un bloque if): la línea entera se omite cuando el producto no tiene valor, de modo que no llegan líneas vacías a la IA

### Paso 4: Configuración de automatización

- **Active toggle**: habilitar/deshabilitar el Flow
- **Batch size**: cuántos productos procesar por ejecución (predeterminado 10)
- **Automation toggle**: cuando está ACTIVO, el contenido confirmado se inserta automáticamente en su tienda sin revisión manual
- **Regenerate on attribute change**: re-ejecutar cuando se actualicen atributos de origen (⚠ puede causar recursión si el atributo de destino también es un origen)
- **Prevent overlapping generation**: cooldown entre regeneraciones por producto:
  - **Inherit**: usar cooldown global desde configuración de cuenta
  - **Override**: configurar un cooldown personalizado solo para este Flow
  - **Turn off**: siempre regenerar independientemente de ejecuciones anteriores

---

## Consejos de plantilla de aviso

Inserte los datos del producto como atributos desde el panel de atributos en lugar de escribirlos: cada atributo se sustituye por el valor propio de cada producto.

**Atributo o condición:**

- Un **atributo suelto** va por sí solo dentro de una frase. Úselo para atributos que tienen casi todos los productos (el grado de cumplimentación en el panel de atributos muestra cuántos los tienen).
- Una **condición** (un bloque if) contiene una línea entera, como _Brand:_ **Brand**, y la omite cuando el producto no tiene valor. Úsela para todo lo que lleve una etiqueta u otro texto alrededor del atributo, de modo que la IA nunca reciba una línea _Brand:_ vacía.

Sea específico acerca de:

- Formato y longitud ("150–200 words")
- Idioma ("in English")
- Tono ("professional but friendly")
- Qué evitar ("do not mention competitors")

**Ejemplo para descripción de producto.** Las palabras en negrita son atributos. El nombre está relleno en todos los productos, así que va suelto; cada una de las demás líneas con etiqueta está dentro de una condición:

> Write a compelling product description (150–200 words) in English.
>
> Product name: **Name**
>
> _if Brand_ → Brand: **Brand**
>
> _if Category_ → Category: **Category**
>
> _if Short Description_ → Current short description: **Short Description**
>
> Focus on benefits, not just features. Use a professional but friendly tone.

**Dar formato a la salida.** El aviso en sí no lleva formato. Para obtener encabezados, listas o texto en negrita en el contenido generado, pídalos con palabras, por ejemplo _Start with an `<h2>` heading that names the product, then two short paragraphs._ Si la salida debe contener HTML, habilite las etiquetas relevantes en [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

---

## Ejecutando un Flow

**Run Now**: procesa inmediatamente hasta 10 productos. Use esto para probar o para lotes pequeños.

**Plan & Close**: pone en cola el lote completo para procesamiento en segundo plano. Use esto para ejecuciones masivas.

---

## Ciclo de vida de la finalización

Cada elemento generado pasa por estas etapas:

| Estado | Significado |
|--------|---------|
| **Pending** | Generado, esperando revisión |
| **Confirmed** | Aprobado por usted, listo para sincronizar |
| **Synchronized** | Insertado exitosamente en la tienda |
| **Suspicious** | Contiene contenido marcado: requiere revisión manual antes de sincronizar |

Con **Automation ON**: contenido limpio se confirma y inserta automáticamente. El contenido sospechoso siempre espera revisión manual.

Con **Automation OFF**: todo el contenido espera su revisión y confirmación antes de sincronizar.

---

## Revisión de finalizaciones

Vaya a un Flow → **View Completions** para ver todo el contenido generado.

Por elemento puede:

- **Editar** el texto generado manualmente
- **Regenerate**: pedir a IA que genere nuevamente
- **Confirm**: aprobar contenido para sincronización
- **Synchronize**: insertar en su tienda
- **View revisions**: ver el historial completo de ediciones y diff entre versiones

**Acciones masivas:** seleccione múltiples elementos → Confirm & Sync, Regenerate o Push.

---

## Contenido sospechoso

Fozzels marca automáticamente contenido que se ve mal:

- Artefactos de IA: "Sorry, I can't...", "As an AI...", "Note:", "Please"
- Valores vacíos
- HTML con doble codificación (`&lt;`, `&gt;`)
- Sintaxis Markdown en un campo no markdown
- Sus palabras sospechosas personalizadas (configure en [Settings → Flow Settings](https://app.fozzels.com/user/settings/flow))

El contenido marcado muestra exactamente por qué fue marcado. Puede:

- Editar y corregirlo
- Regenerate
- Anular y aprobar de todas formas (si es un falso positivo)

---

## Por qué el contenido no se sincroniza (push bloqueado) {#why-content-wont-sync-push-blocked}

| Razón | Solución |
|--------|-----|
| Flow está inactivo | Habilite el toggle Active en el Flow |
| No confirmado | Confirme la finalización (o habilite Automation) |
| Contenido sospechoso | Revise y apruebe, o edite y vuelva a guardar |
| Producto eliminado de la tienda | Nada que hacer: el producto ya no existe |
| Tienda/integración inactiva | Habilite la tienda o integración |
| Atributo no mutable | Habilite la bandera Mutable en Integración → Atributos |

---

## Administración de Flow

- **Duplicate**: copiar un Flow a la misma tienda o a una diferente
- **Archive**: ocultar el Flow de la lista principal; los datos se preservan y pueden restaurarse
- **Delete**: eliminación permanente
- **Obsolete**: cuando un Flow se clona debido a cambios estructurales (atributo de destino o condiciones cambiadas), la versión anterior se vuelve obsoleta; su historial de finalizaciones se preserva

### Advertencia de cambios estructurales

Si cambia el **atributo de destino** o **condiciones** en un Flow que ya tiene finalizaciones, Fozzels le advertirá y ofrecerá **"Obsolete and Duplicate"**: crea un Flow fresco con sus cambios, preservando el historial del anterior.

---

## Advertencia de recursión

Se activa cuando el mismo atributo aparece como:

- Un atributo en su aviso
- El atributo de destino de salida

Esto crea un bucle infinito: cada generación sobrescribe la entrada para la próxima ejecución.

Solución:

- Elimine ese atributo del aviso
- O deshabilite "Regenerate on attribute change"

---

## Problemas comunes

**Ningún producto coincide con el Flow**

- Verifique sus condiciones: intente eliminarlas temporalmente para ver todos los productos
- Verifique que los atributos usados en condiciones tengan la bandera **Filterable** en Integración → Atributos

**Salida de IA vacía**

- Verifique que los atributos de origen tengan valores para sus productos
- Verifique que los atributos referenciados en el aviso tengan la bandera **Filterable**
- Haga el aviso más específico

**El contenido no se inserta en la tienda**

- Verifique las [razones de bloqueo de push](#why-content-wont-sync-push-blocked) anteriores
- Verifique que el toggle Active de integración esté ACTIVADO
- Verifique que el atributo de destino tenga la bandera **Mutable**

**Cuota de OpenAI excedida**

- Cargue en [platform.openai.com/settings/organization/billing](https://platform.openai.com/settings/organization/billing)
- O reduzca el volumen diario en configuración de automatización de Flow

**Contenido duplicado en Flows**

- Habilite "Prevent overlapping generation" con un período de cooldown (p. ej. 7 días)
- Esto evita que múltiples Flows regeneren el mismo producto dentro de la ventana de cooldown
