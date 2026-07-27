---
id: '103000367978'
title: 4.2.1.  Configuración de IA. Selección de Modelos de IA y Características Opcionales.
sidebar_position: 6
slug: >-
  /content-creation-flows/ai-configuration-selecting-ai-models-and-optional-features
description: >-
  El paso de Configuración de IA (Paso 2 en la modificación del Flujo) es la
  etapa más crítica para definir el perfil de rendimiento y costo de un Flujo de
  Contenido. Dicta
---

El paso de Configuración de IA (Paso 2 en la modificación del Flujo) es la etapa más crítica para definir el perfil de rendimiento y costo de un Flujo de Contenido. Dicta la elección del motor de IA generativa, sus capacidades especializadas y sus restricciones operativas. Los usuarios deben tomar decisiones estratégicas aquí, equilibrando la calidad del resultado, la complejidad de la tarea (por ejemplo, requisitos multimodales) y la optimización de costos de tokens.

1.  ### El Motor de IA Principal: Proveedores y Niveles de Modelo

Fozzels se integra con múltiples proveedores de IA líderes en la industria (por ejemplo, OpenAI/ChatGPT, Google/Gemini, Anthropic, xAI), cada uno presentando una cartera de modelos.

1.1. Criterios de Selección de Modelo

Elegir el modelo correcto requiere una evaluación estratégica basada en la tarea de contenido:

**Modelos Rentables**. Propósito: Tareas de alto volumen y baja complejidad (Títulos Meta, traducciones cortas, normalización de datos). Atributos Clave: Procesamiento más rápido, ventana de contexto más pequeña. Perfil de Costo: Costo de token de entrada/salida más bajo.

**Modelos de Alta Calidad**. Propósito: Generación compleja y creativa, resumen profundo, mantenimiento de tono de marca matizado. Atributos Clave: Coherencia lógica superior, ventana de contexto grande. Perfil de Costo: Costo de token de entrada/salida más alto.

**Modelos Multimodales**. Propósito: Tareas que requieren análisis visual junto con texto (por ejemplo, describir la textura o estilo de una imagen). Atributos Clave: La capacidad de análisis de imagen es innegociable. Perfil de Costo: Costo más alto debido a la tokenización de imágenes.

2.  ### Herramientas de Enriquecimiento de IA y Búsqueda Web

Las Herramientas de Enriquecimiento de IA son características opcionales que se utilizan para mejorar el acceso del modelo a datos externos no relacionados con productos.

Habilitar Búsqueda Web: La activación de esta función permite que el modelo consulte información en tiempo real y contexto externo de Internet público durante la generación de contenido.

Valor Estratégico: La Búsqueda Web es indispensable para contenido que debe hacer referencia a tendencias actuales del mercado, estándares de fabricación específicos o hechos externos no contenidos en los atributos del catálogo de productos.

Implicación de Costos: Utilice esta función juiciosamente, ya que generalmente incurre en un costo adicional por solicitud, independiente del uso estándar de tokens.

3.  ### Capacidades Especializadas de Flujo

Para tareas creativas que van más allá del análisis estándar de texto e imagen, Fozzels requiere tipos de flujo dedicados y modelos de IA específicos debido a la alta potencia computacional involucrada.

**Flujos de Imagen (Generación de Imagen).**
Propósito: Generar nuevas imágenes de productos (desde cero).
Requisitos de Modelo: Modelos Especializados de Generación de Imagen (por ejemplo, GPT Image 1, Generación de Imagen de Gemini 2.0 Flash Preview).
Restricción de Proveedor: Restringido a proveedores seleccionados (por ejemplo, OpenAI, Google).

**Flujos de Video (Generación de Video)**.
Propósito: Dedicado a generar contenido de video corto y de alta fidelidad (por ejemplo, clips de 8 segundos 720p).
Requisito de Modelo: Modelos de Generación de Video de Alta Gama (por ejemplo, Gemini Veo 3).
Restricción de Proveedor: Actualmente restringido a Google | Gemini. Estructura de Costos: Los modelos de generación de video a menudo operan en una estructura de precios especializada (por ejemplo, precio por segundo de salida de video) debido a la alta demanda computacional.

4.  ### Optimización de Imagen y Control de Costos

Para cualquier flujo que utilice capacidades multimodales, el manejo eficiente de imágenes de productos es esencial tanto para la estabilidad de la generación como para la administración de costos de tokens.

4.1. Entrada de Imagen y Lógica de Respaldo

Cantidad de Imagen: Los usuarios deben definir explícitamente la cantidad de imágenes de productos que la IA debe analizar (por ejemplo, 1, 2 o 3). Aumentar la cantidad de imágenes aumenta directamente la cantidad de tokens de entrada y, en consecuencia, el costo.

Respaldo/Omitir: Si un producto en el flujo carece de los datos de imagen solicitados, los usuarios deben definir una acción de contingencia:
Recurrir a un modelo solo de texto: El proceso continúa usando un indicador solo de texto, evitando fallos pero manteniendo el costo de generación.
Omitir la generación de contenido: El producto se omite, ahorrando todos los costos de tokens asociados para ese artículo.

### 4.2. Cambio de Tamaño de Imagen (Mecanismo de Estabilidad)

Es una **mejor práctica** Habilitar Cambio de Tamaño de Imagen para todos los flujos multimodales. Esta función sirve como un mecanismo crucial de estabilidad y ahorro de costos:

Prevención de Fallos: Los modelos generativos tienen límites estrictos en el tamaño del archivo (por ejemplo, >2MB) y dimensiones (por ejemplo, >2048 píxeles). El cambio de tamaño ajusta automáticamente estos archivos a límites aceptables.

Eficiencia de Costos: Al asegurar que los archivos cumplan con los límites de tamaño, esto previene fallos de generación, asegurando que los costos de tokens solo se incurran para la salida de contenido exitosa, eliminando el gasto desperdiciado en operaciones que de otro modo fallarían.
