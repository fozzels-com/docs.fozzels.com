---
title: Reporte de Finalización (Lista de Lotes Diarios)
sidebar_position: 28
slug: /content-creation-flows/completion-report-daily-batch-list
description: El Reporte de Finalización es una descripción general diaria de todos los elementos de contenido generados por IA en sus Flows, mostrando lo que se generó, confirmó e insertó en su tienda en un día determinado.
keywords:
- flujo
- de
- contenido
- generación
- indicación
- instrucción
- finalización
---

El Reporte de Finalización es una descripción general diaria de todos los elementos de contenido generados por IA en sus Flows: mostrando lo que se generó, confirmó e insertó en su tienda en un día determinado.

Vaya a [Completion Report](https://app.fozzels.com/completions/product/completion/report/today) (reemplace `today` con una fecha como `2026-03-20`)

---

## Qué muestra esta página

Esta página lista cada finalización de IA (elemento de contenido generado) que fue creado o ejecutado dentro del rango de fechas seleccionado. Reúne resultados de **todos sus Flows** en un lugar, para que pueda revisar, confirmar y sincronizar lotes sin navegar cada Flow individualmente.

---

## Navegando el reporte

### Rango de fechas

- Los selectores de fecha **From / To** en la parte superior le permiten cambiar el rango de fechas
- La fecha en la URL establece la fecha de inicio: p. ej. `/completions/product/completion/report/2026-03-20`
- Agregue `?end_date=2026-03-21` para establecer una fecha de fin

### Filtro de tienda

- El panel izquierdo lista sus tiendas conectadas
- Haga clic en cualquier tienda para filtrar el reporte solo a las finalizaciones de esa tienda
- Haga clic nuevamente o borre para mostrar todas las tiendas

### Filtros de pantalla (casillas de verificación)

- **Show only with errors**: oculta elementos exitosos, muestra solo finalizaciones fallidas/con error
- **Show only suspicious**: muestra solo finalizaciones marcadas como contenido sospechoso

### Filtros de columna (generador de condiciones)

- Filtrar por Flow, Website, Store, SKU, Prompt, Created At, Executed At, Synchronized At
- Crear condiciones AND/OR tal como en el Catálogo

---

## Columnas de tabla

| Columna | Qué muestra |
|--------|--------------|
| **Flow** | Nombre del Content Flow que generó este elemento (haga clic para abrir el Flow) |
| **Website / Store** | A qué tienda pertenece este elemento |
| **SKU** | Identificador de producto (haga clic para abrir el producto) |
| **Confirmed** | Casilla de verificación: si esta finalización está aprobada para sincronización |
| **Prompt** | El aviso de IA que fue usado |
| **Created At** | Cuándo fue creada la finalización |
| **Target attribute** | El contenido generado por IA (haga clic para editar) |
| **Executed At** | Cuándo se ejecutó la generación; muestra etiquetas de error si falló |
| **Synchronized At** | Cuándo el contenido fue insertado en su tienda; muestra "Sync Now" si está pendiente |
| **Thumbnail** | Imagen de producto (alterne la visibilidad con el botón de columna) |

---

## Acciones

### Acciones por fila

- **Toggle Confirmed checkbox**: confirmar o desconfirmar un único elemento
- **Haga clic en el valor del atributo de destino**: abre un modal de edición donde puede:
  - Editar manualmente el contenido generado
  - Ver historial de revisiones y restaurar una versión anterior
  - Regenerate contenido
  - Alterne la vista HTML / texto plano
  - Guarde y opcionalmente sincronice inmediatamente
- **Haga clic en "Sync Now"**: empuje manualmente un único elemento a la tienda
- **Haga clic en una etiqueta de error**: vea el mensaje de error completo y opciones de reintento

### Acciones masivas (seleccione elementos primero, luego elija acción)

| Acción | Qué hace |
|--------|-------------|
| **Confirm all, Save & Sync** | Marca elementos seleccionados como confirmados y los pone en cola para sincronización (se ejecuta cada 4 horas) |
| **Regenerate, Save & Sync** | Re-ejecuta generación de IA para elementos seleccionados y los pone en cola para sincronización |
| **Sync Generated Content** | Fuerza re-sincronización de elementos ya sincronizados (sobrescribe lo que está en su tienda) |
| **Update Suspicious Flag** | Recalcula el estado sospechoso para elementos seleccionados |

---

## Casos de uso comunes

**Revisión del lote de ayer**

- Abra el reporte para la fecha anterior
- Filtro por tienda si tiene múltiples
- Ordene por "Executed At" para ver qué se ejecutó

**Buscar elementos fallidos**

- Habilite la casilla de verificación "Show only with errors"
- Haga clic en la etiqueta de error en cualquier fila para ver el error exacto y opciones de reintento

**Manejo de contenido sospechoso**

- Habilite la casilla de verificación "Show only suspicious"
- Revise cada elemento marcado: edite, regenere, o confirme si es un falso positivo

**Confirmación masiva y sincronización**

- Seleccione todos los elementos (o filtro a los que desea)
- Use **Confirm all, Save & Sync** para aprobar y poner en cola todo a la vez
- Sincronización se ejecuta automáticamente cada 4 horas; o use "Sync Now" por elemento para inserción inmediata

---

## Problemas comunes

**No se muestran elementos para hoy**

- Las finalizaciones aparecen aquí cuando un Flow ha sido ejecutado: verifique que sus Flows estén Active y hayan sido ejecutados
- Intente ampliar el rango de fechas

**Elementos confirmados pero no sincronizados**

- Sincronización se ejecuta cada 4 horas: espere o use "Sync Now" por elemento
- Verifique que la integración esté Active y la tienda esté conectada

**Error en la columna "Executed At"**

- Haga clic en la etiqueta de error roja para ver detalles
- Causas comunes: credenciales de integración expiradas, atributo no mutable, tienda offline

**El elemento muestra "Suspicious"**

- El contenido activó una palabra sospechosa o patrón de artefacto de IA
- Edite el contenido manualmente, luego confirme: o use **Update Suspicious Flag** si el contenido está bien
