---
id: '103000406129'
title: >-
  4.1.2.b ¿Por qué el contenido generado difiere entre la vista previa y el resultado final?
sidebar_position: 4
slug: >-
  /content-creation-flows/why-does-the-generated-content-differ-between-the-preview-and-the-final-result
description: >-
  Pregunta ¿Por qué el contenido mostrado en la vista previa difiere del contenido que finalmente se sincroniza con el sitio web? Respuesta Este comportamiento es
---

## Pregunta

¿Por qué el contenido mostrado en la **vista previa** difiere del contenido que finalmente se sincroniza con el sitio web?

## Respuesta

Este comportamiento es esperado.

La **vista previa** (disponible después de hacer clic en **Guardar y vista previa**) **no es** el contenido generado final. Es una generación de prueba para un solo producto que le permite:

-   verificar que la solicitud esté configurada correctamente;
-   revisar el tipo y calidad del contenido que produce la solicitud;
-   realizar ajustes antes de ejecutar el flujo completo.

Cuando inicia el flujo real, Fozzels envía **nuevas solicitudes de IA** para cada producto.

Aunque los datos de entrada (atributos del producto, solicitud y configuración) permanecen iguales, la IA genera una nueva respuesta para cada solicitud. Como el contenido generado por IA no es determinístico, la salida puede variar entre la vista previa y la generación final.

## ¿Dónde puedo encontrar el contenido generado final?

El contenido que fue realmente generado y sincronizado con su sitio web está disponible en:

-   **Lista de lotes** - para la ejecución de flujo específica.
-   **Lista de lotes total diaria** - para todo el contenido generado en flujos.

Estos informes contienen la salida final que se envió durante la ejecución del flujo y deben usarse para verificación en lugar de la vista previa.

## Resumen

-   **Vista previa** = una generación de prueba para validación de solicitud.
-   **Ejecución de flujo** = una nueva generación de IA para cada producto.
-   Se esperan pequeñas diferencias entre la vista previa y el contenido sincronizado final.
-   Siempre compare su sitio web con el contenido mostrado en **Lista de lotes** o **Lista de lotes total diaria**, ya que contienen los resultados sincronizados reales.
