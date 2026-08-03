---
id: '103000368009'
title: 4.3.3. Escribir Prompts Efectivos (Recomendaciones)
sidebar_position: 10
slug: /content-creation-flows/writing-effective-prompts-recommendations
description: Esta guía proporciona asesoramiento práctico y mejores prácticas para estructurar y escribir prompts dinámicos de alta calidad que producen contenido personalizado, profesional y único.
---

Esta guía proporciona asesoramiento práctico y mejores prácticas para estructurar y escribir **prompts dinámicos de alta calidad** que producen contenido personalizado, profesional y único, yendo más allá de la simple inserción de atributos.

### **Mejores Prácticas para la Generación de Prompts de Calidad**

Sigue estas seis recomendaciones centrales para maximizar la efectividad y claridad de tus prompts:

1\. Crear una Estructura Clara.
**Usa** encabezados, párrafos y listas (etiquetas HTML como `<h1>`, `<ul>`, `<li>`) para organizar visualmente el texto. Un prompt bien estructurado generalmente lleva a un resultado bien estructurado.
2\. Siempre Verifica la Disponibilidad de Datos.
**Evita** insertar atributos directamente si no puedes garantizar que el valor esté presente en todos los productos. Si falta un valor de atributo, dejará un espacio vacío en el texto generado final.
**Envuelve** el atributo y su texto circundante dentro de un **bloque if** (lógica condicional).
_Ejemplo: `if $material Material: $material end` (El texto "Material:" aparece solo si el atributo `$material` está completo)._
3\. Asegurar el Cierre de Etiquetas.
**Verifica** que todas las etiquetas emparejadas utilizadas en tus prompts estén correctamente cerradas (p. ej., `<strong>` se cierra con `</strong>`). Las etiquetas cerradas incorrectamente pueden causar errores de formato en el resultado final.

4\. Evitar la Repetición.
**No** inserta el mismo valor de atributo varias veces en diferentes bloques. Esto sobrecarga el texto y puede hacer que la IA genere contenido repetitivo e innaturales.

5\. Escribir de Forma "Humanizada" (Tono e Interacción).
**Imagina** que eres un redactor escribiendo para el cliente. Añade detalles vivos, énfasis y habla directamente al usuario para hacer que el texto sea natural y persuasivo.
_Ejemplo: `if $brand Confiabilidad de la marca $brand — una excelente opción para tu comodidad. end`_
6\. Verifica el Resultado.
Haz clic en **Guardar y Vista Previa** para ver exactamente cómo funciona tu prompt en productos reales y con sus atributos disponibles. Este paso es crucial para detectar errores de lógica, sintaxis o tono antes de ejecutar un lote grande.
