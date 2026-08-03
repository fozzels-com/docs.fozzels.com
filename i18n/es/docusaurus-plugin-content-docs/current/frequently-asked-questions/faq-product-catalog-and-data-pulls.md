---
title: 'FAQ: Catálogo de Productos y Extracción de Datos'
sidebar_position: 8
unlisted: true
slug: /frequently-asked-questions/faq-product-catalog-and-data-pulls
description: Cómo funciona la extracción de catálogo nocturno, por qué los productos nuevos o faltantes no aparecen, diferencias de variantes y categorías, filtrado de atributos personalizados y cronogramas de extracción personalizados.
---

## El catálogo de productos se actualiza en un horario nocturno. ¿Cómo funciona?

El catálogo se actualiza automáticamente cada noche a las 01:30. Después de la extracción, todos los flujos se actualizan con los datos más recientes. Los productos nuevos que coinciden con filtros de flujo se agregan automáticamente.

## Los productos nuevos agregados a mi tienda web no aparecen en Fozzels.

Los productos aparecen después de la siguiente extracción de catálogo programada (noche a 01:30). Para verlos inmediatamente, active una extracción de producto manual.

## Fozzels muestra menos productos de lo esperado — faltan algunas combinaciones de color.

Fozzels filtra productos basándose en condiciones específicas y agrupa a nivel de producto-color, excluyendo variantes de tamaño. Compare sus condiciones de filtro con su base de datos para encontrar discrepancias.

## No puedo encontrar una categoría de producto específica en Fozzels.

El árbol de categorías en Fozzels puede diferir de su tienda. Use filtros para buscar. Si aún no la encuentra, póngase en contacto con el soporte con una captura de pantalla de su administrador.

## Los productos faltan en mi flujo debido a un atributo de stock vacío.

Verifique las condiciones de filtro de flujo. Si una condición de stock (por ejemplo, "Voorraad IS NOT NULL") excluye productos con valores de stock vacíos, complete los datos o elimine la condición.

## Una extracción de datos manual no está actualizando atributos.

Después de una extracción, Fozzels necesita tiempo de procesamiento — los datos no son instantáneos. Si los atributos permanecen sin cambios, póngase en contacto con el soporte.

## ¿Cuándo debo activar manualmente una extracción de producto?

Después de cambios importantes del catálogo, nuevos conjuntos de productos, adiciones o eliminaciones grandes o cambios de feed/integración.

## ¿Cómo filtro productos por atributos personalizados (por ejemplo, "Webshop Article = Yes")?

Los atributos de filtrado personalizados deben estar presentes en el feed de datos. Una vez que estén en Fozzels, úselos como condiciones de filtro de flujo. Si un atributo no aparece, póngase en contacto con el soporte.

## Un producto fue eliminado del catálogo debido a configuración de variante.

Fozzels filtra basándose en configuración de variante y variantes deshabilitadas pueden excluir productos. Póngase en contacto con el soporte para revisar la configuración.

## ¿Puedo establecer un horario de extracción de producto personalizado (no solo noche)?

Sí. Desde la versión 5.14 puede establecer una hora personalizada para extracciones de producto en el nivel de integración y tienda.
