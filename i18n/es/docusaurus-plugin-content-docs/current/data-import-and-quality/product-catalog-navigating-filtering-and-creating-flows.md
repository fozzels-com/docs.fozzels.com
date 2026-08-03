---
title: Catálogo de Productos - Navegación, Filtrado y Creación de Flows
sidebar_position: 9
slug: /data-import-and-quality/product-catalog-navigating-filtering-and-creating-flows
description: El Catálogo muestra todos los productos extraídos de su tienda conectada. Aprenda a navegarlo, filtrar productos con el generador de consultas de condiciones y crear un Content Flow dirigido a partir de una selección.
keywords:
- flujo
- de
- contenido
- generación
---

El Catálogo muestra todos los productos extraídos de su tienda conectada. Es su vista central de datos de productos dentro de Fozzels.

Vaya a [Catalog](https://app.fozzels.com/catalog)

---

## Navegando el Catálogo

### Selector de tienda

En la parte superior de la página, seleccione los productos de qué tienda desea ver. Cada tienda se muestra con su nombre de integración, sitio web y configuración regional.

### Lista de productos

Los productos se muestran en una tabla paginada (25 por página de forma predeterminada). Puede:

- **Ordenar** por cualquier columna visible
- **Alternar visibilidad de columnas**: mostrar/ocultar columnas de atributos
- **Modo de pantalla completa**: expandir la tabla para llenar la pantalla
- **Pasar el cursor por una fila de producto**: vista previa de imágenes de producto sin abrir el producto

### Detalle del producto

Haga clic en cualquier producto para abrir su página de detalles con:

- Galería de imágenes completa (imagen principal + miniaturas)
- Todos los valores de atributo para ese producto en esta tienda
- Enlaces directos de vuelta a la integración y sitio web

---

## Filtrado de productos

Use el **Condition Query Builder** para filtrar productos por valores de atributo.

- Crear condiciones con lógica AND/OR
- Filtrar por cualquier atributo que tenga la bandera **Filterable** habilitada en Integración → Atributos
- Ejemplos:
  - "description is empty"
  - "category equals Electronics AND price is greater than 100"
  - "sku contains ABC"

Haga clic en **Search** para aplicar el filtro. El recuento de productos en el encabezado se actualiza para mostrar cuántos productos coinciden.

Haga clic en **Reset** para limpiar el filtro y mostrar todos los productos.

> Si un atributo no aparece en el generador de filtros: vaya a Integración → Atributos y habilite la bandera **Filterable** para ese atributo.

---

## Creación de un Flow desde el Catálogo

El Catálogo es la forma más rápida de crear un Content Flow dirigido:

1. Crear un filtro para encontrar los productos que desea procesar (p. ej. "description is empty")
2. Seleccionar los productos coincidentes (casilla de verificación en cada fila, o seleccionar todo en todas las páginas)
3. Haga clic en **"Create Flow on Selected Products"**: abre el asistente de creación de Flow con su selección como condición
4. Complete la configuración de Flow (modelo de IA, aviso, atributo de destino)

Esto es ideal cuando desea procesar un subconjunto específico de productos en lugar de crear condiciones manualmente en el asistente de Flow.

---

## Problemas comunes

**No hay productos visibles**

- La integración aún no ha sido extraída: vaya a su [Integration](https://app.fozzels.com/integrations/definitions) y dispare una extracción de producto
- Asegúrese de que la tienda esté activa

**Atributos de filtro faltantes en el generador de condiciones**

- El atributo necesita la bandera **Filterable**: vaya a Integración → Atributos y habilítela

**Las imágenes de producto no se muestran**

- Las imágenes se extraen de su tienda: si faltan imágenes en Fozzels, verifique que la integración se esté extrayendo correctamente y que la URL de medios base esté configurada (Magento)

**Los productos están desactualizados**

- Dispare una extracción manual desde su página de Integración, o espere la próxima extracción programada
