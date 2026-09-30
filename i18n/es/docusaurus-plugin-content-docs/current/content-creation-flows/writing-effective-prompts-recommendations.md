---
id: '103000368009'
title: 4.3.3. Escribir Prompts Efectivos (Recomendaciones)
sidebar_position: 11
slug: /content-creation-flows/writing-effective-prompts-recommendations
description: Esta guía proporciona asesoramiento práctico y mejores prácticas para estructurar y escribir prompts dinámicos de alta calidad que producen contenido personalizado, profesional y único.
---

Esta guía proporciona asesoramiento práctico y mejores prácticas para estructurar y escribir **prompts dinámicos de alta calidad** que producen contenido personalizado, profesional y único, yendo más allá de la simple inserción de atributos.

### **Mejores Prácticas para la Generación de Prompts de Calidad**

Sigue estas seis recomendaciones centrales para maximizar la efectividad y claridad de tus prompts:

1\. Crear una Estructura Clara.
**Usa** párrafos cortos, con una instrucción o línea de datos cada uno, para que el prompt sea fácil de leer y de mantener. El prompt en sí no lleva formato: para obtener encabezados, listas o HTML en el texto *generado*, pídelos con palabras, por ejemplo _Start with an `<h2>` heading that names the product, then list three key benefits as a `<ul>`._ Cualquier etiqueta HTML que deba contener el resultado tiene que estar permitida en [Trusted HTML Tags](/content-creation-flows/allowed-html-tags-for-ai-text-generation).
2\. Siempre Verifica la Disponibilidad de Datos.
**Evita** insertar atributos directamente si no puedes garantizar que el valor esté presente en todos los productos. Si falta un valor de atributo, dejará un espacio vacío en el texto generado final.
**Envuelve** el atributo y su texto circundante dentro de un **bloque if** (lógica condicional).
_Ejemplo: una condición sobre **Material** que contiene la línea_ Material: **Material** _(el texto "Material:" aparece solo si el producto tiene un material)._
3\. Asegurar el Cierre de Etiquetas.
**Verifica** que todas las etiquetas HTML emparejadas que pide tu prompt estén correctamente cerradas (p. ej., `<strong>` se cierra con `</strong>`). Las etiquetas cerradas incorrectamente pueden causar errores de formato en el resultado final.

4\. Evitar la Repetición.
**No** inserta el mismo valor de atributo varias veces en diferentes bloques. Esto sobrecarga el texto y puede hacer que la IA genere contenido repetitivo e innaturales.

5\. Escribir de Forma "Humanizada" (Tono e Interacción).
**Imagina** que eres un redactor escribiendo para el cliente. Añade detalles vivos, énfasis y habla directamente al usuario para hacer que el texto sea natural y persuasivo.
_Ejemplo: una condición sobre **Brand** que contiene la línea_ Confiabilidad de la marca **Brand** — una excelente opción para tu comodidad.
6\. Verifica el Resultado.
Haz clic en **Guardar y Vista Previa** para ver exactamente cómo funciona tu prompt en productos reales y con sus atributos disponibles. Este paso es crucial para detectar errores de lógica, sintaxis o tono antes de ejecutar un lote grande.
