---
title: Content Flows - Guía Completa
sidebar_position: 27
slug: /content-creation-flows/content-flows-complete-guide
description: Los Content Flows son la característica de automatización principal de Fozzels. Esta guía cubre la creación de un Flow, plantillas de avisos, su ejecución, el ciclo de vida de la finalización, contenido sospechoso y por qué el contenido a veces no se sincroniza.
keywords:
- flujo
- de
- contenido
- generación
- indicación
- instrucción
- finalización
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
- **Prompt template**: la instrucción enviada a IA, con marcadores de posición `{{attribute_code}}`
  - Ejemplo: `Write a product description for {{name}} (SKU: {{sku}}) in category {{category}}`
  - **Attributes tab** (`{{attribute_code}}`): siempre incluido en el aviso, incluso si el producto no tiene valor para ese atributo
  - **Attributes (if filled) tab** (`#attribute_code`): solo incluido en el aviso cuando el producto realmente tiene un valor; útil para evitar enviar líneas vacías a IA

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

Haga referencia a atributos con `{{attribute_code}}`: use el código exacto mostrado en Integración → Atributos.

**Dos sintaxis de atributo:**

- `{{attribute_code}}`: siempre incluido (corresponde a la pestaña **Attributes** en el editor). Use esto de forma predeterminada.
- `#attribute_code`: incluido solo si el producto tiene un valor (corresponde a la pestaña **Attributes (if filled)**). Use para omitir campos vacíos.

Sea específico acerca de:

- Formato y longitud ("150–200 words")
- Idioma ("in English")
- Tono ("professional but friendly")
- Qué evitar ("do not mention competitors")

**Ejemplo para descripción de producto:**

```
Write a compelling product description (150–200 words) in English.

Product name: {{name}}
Brand: {{brand}}
Category: {{category_name}}
Current short description: {{short_description}}

Focus on benefits, not just features. Use a professional but friendly tone.
```

Si la salida debe contener HTML, habilite las etiquetas relevantes en [Settings → Flow Settings → Trusted HTML Tags](https://app.fozzels.com/user/settings/flow).

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

- Una entrada en su aviso (`{{attr_code}}`)
- El atributo de destino de salida

Esto crea un bucle infinito: cada generación sobrescribe la entrada para la próxima ejecución.

Solución:

- Elimine `{{attr_code}}` de la plantilla de aviso
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
