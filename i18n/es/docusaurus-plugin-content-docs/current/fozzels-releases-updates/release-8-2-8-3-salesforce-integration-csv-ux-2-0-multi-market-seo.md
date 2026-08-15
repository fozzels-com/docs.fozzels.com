---
id: '103000410961'
title: Release 8.2-8.3 - Integración con Salesforce, CSV UX 2.0 y SEO multimercado
sidebar_position: 17
slug: /fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo
description: Las versiones v8.2 y v8.3 suponen avances importantes en integraciones Enterprise, un rediseño completo del módulo CSV, mayores capacidades de SEO multilingüe…
---

Las versiones **v8.2 y v8.3** suponen avances importantes en **integraciones Enterprise**, un rediseño completo del **módulo CSV**, mayores capacidades de SEO multilingüe para Shopify y una lógica de filtrado por inventario mejorada.

## 1\. Integración Enterprise: Salesforce Commerce Cloud

Hemos ampliado nuestro ecosistema de conectores oficiales de Fozzels con soporte nativo para **Salesforce**, pensado para comercios de nivel Enterprise.

-   **Automatización de contenido:** Generación y sincronización bidireccional sin fricciones de contenido HTML enriquecido, metaetiquetas y atributos, tanto para **productos** como para **páginas de categoría**.

-   **Escalabilidad Enterprise:** Procesamiento masivo de datos rápido y fiable, diseñado para catálogos de gran volumen sin sacrificar el rendimiento.
    ![](/img/kb/fozzels-releases-updates/release-8-2-8-3-salesforce-integration-csv-ux-2-0-multi-market-seo/gijc0EWvFlC1zyvnpAeXsONb3oKC7iTWEQ.png)

## 2\. Rediseño de la integración CSV (UX 2.0 y galería multimedia)

Hemos revisado por completo el módulo de importación CSV para que subir archivos, mapear columnas y configurar la integración sea un 200 % más intuitivo y visual.

-   **Galería multimedia nativa:** Previsualiza imágenes y recursos multimedia directamente en la interfaz de tabla.

-   **Motor de mapeo mejorado:** Una interfaz clara y fácil de usar para asignar las columnas del CSV a la estructura de campos interna de Fozzels.

-   **Control de datos:** La validación visual del mapeo reduce notablemente los errores humanos y acelera la puesta en marcha de nuevos catálogos de productos.

## 3\. Mejoras en Shopify: SEO multimercado y logística

### Sincronización de textos ALT multimercado y multilingüe

Resuelve un problema importante para las tiendas de comercio electrónico internacionales y multirregión.

-   **Etiquetas ALT localizadas:** Fozzels ya puede generar y sincronizar **textos ALT localizados distintos para exactamente las mismas imágenes**, según el idioma y el mercado de destino.

-   **Compatibilidad total con el ecosistema:** Soporte inmediato para **Shopify Markets** y aplicaciones de traducción (incluida **LangShop**).

### Soporte de peso y unidad de peso

-   **Cálculos de envío precisos:** Se ha añadido la sincronización automática de los valores de peso del producto (`weight`) y de las unidades de medida (`weight unit`).

-   **Formatos estandarizados:** El campo `weight unit` utiliza un formato de entrada **Select** estricto para evitar errores de formato y garantizar un cálculo correcto de las tarifas de envío en el checkout.

## 4\. Filtrado inteligente por stock para VTEX

Optimiza los costes de generación con IA mediante una selección de catálogo precisa y consciente del inventario.

-   **Filtrado por stock:** Filtra los productos directamente en la capa de integración de VTEX mediante un atributo booleano de disponibilidad (`Stock = Yes / No`).

-   **Eficiencia de recursos:** Omite automáticamente los artículos sin stock (`Stock = No`) para centrar la generación con IA exclusivamente en el inventario activo.

## 5\. Correcciones de errores y estabilidad

-   **Integración con Katana PIM:** Se ha resuelto un problema que afectaba a la sincronización de datos con Katana PIM. El intercambio bidireccional de datos ya funciona de forma fluida y fiable.

_¡Gracias a todo el equipo por hacer realidad estas mejoras y a nuestros usuarios por su feedback continuo! Prueba las nuevas funciones y cuéntanos qué te parecen._
