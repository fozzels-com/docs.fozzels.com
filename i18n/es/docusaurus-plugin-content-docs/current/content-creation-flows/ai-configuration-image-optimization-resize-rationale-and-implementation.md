---
id: '103000367979'
title: >-
  4.2.2. Configuración de IA. Optimización de Imagen (Cambio de Tamaño):
  Fundamento e Implementación.
sidebar_position: 7
slug: >-
  /content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation
description: >-
  La función Cambio de Tamaño de Imagen optimiza automáticamente imágenes grandes
  para cumplir con los requisitos técnicos del sistema de generación de IA. Está
  habilitada de forma predeterminada en a
---

La función **Cambio de Tamaño de Imagen** optimiza automáticamente imágenes grandes para cumplir con los requisitos técnicos del sistema de generación de IA. Está habilitada de forma predeterminada en todos los Flujos nuevos y existentes para prevenir fallos de generación y reducir costos de Tokens de Entrada.

**1. Cómo Administrar la Función de Cambio de Tamaño de Imagen**

 La función se administra individualmente para cada Flujo en el paso de Configuración de IA.

1. Vaya a la pantalla de edición de cualquiera de sus Flujos.

2. Navegue a **Paso 2: Configuración de IA**.

3. Desplácese hacia abajo hasta la sección **Cambio de Tamaño de Imagen**.

4. Administre la función usando la casilla de verificación **"Habilitar Cambio de Tamaño de Imagen"**.

   ![](/img/kb/content-creation-flows/ai-configuration-image-optimization-resize-rationale-and-implementation/ZDcGWszXAjy6POiHs75NMe0FsBeIK14pfg.png)

    Cuándo Usar:
**Habilitar (Predeterminado):** Recomendado para todos los Flujos donde utiliza imágenes de productos para Análisis de IA o Generación de Imágenes.
Esto garantiza el éxito de la generación y reduce los costos de tokens.
**Deshabilitar:** Si no planea usar ningún análisis o generación de imágenes en este Flujo específico. _Tenga en cuenta: Deshabilitar puede llevar a un aumento en los errores de generación de contenido si carga imágenes que exceden los límites._

**2. Detalles Técnicos y Seguimiento de Costos**

El mecanismo de cambio de tamaño solo se activa cuando una imagen excede criterios técnicos específicos.

    Criterios de Activación
El mecanismo de cambio de tamaño de imagen se activa **solo** cuando se cumplen _ambas_ condiciones:

1. El tamaño del archivo **excede 2 MB** (Megabytes);

2. **Y** el ancho o alto de la imagen **excede 2048 píxeles**.

Dónde Se Aplica la Función

La función Cambio de Tamaño de Imagen funciona para dos casos de uso principales:

        1. Uso de Imagen (Análisis): Imágenes que agrega para análisis de IA dentro de sus Flujos.
        2. Flujo de Imagen (Generación): Imágenes enviadas junto con la indicación para nueva generación de contenido.

Seguimiento de Costos y Gastos

1. El costo para cambiar el tamaño de una sola imagen es **€0.0025 por imagen**.

2. Esta tarifa se **carga solo** cuando la función ha _activado realmente_ (es decir, la imagen cumplió con los criterios técnicos y fue redimensionada).

3. Puede rastrear estos gastos en la página de **Transacciones** de su cuenta.

## 4. El uso también se incluye en su correo electrónico diario "Su actualización de contenido de Fozzels".

**3. Beneficios Clave**

La función activa de Cambio de Tamaño de Imagen es un elemento clave de confiabilidad y ahorro:

1. Previene Generaciones Fallidas: Está garantizado **evitar fallos** relacionados con tamaños de imagen grandes, ahorrándole tiempo.

2. Costos Reducidos de Tokens de Entrada: Las imágenes optimizadas y más pequeñas requieren **menos Tokens de Entrada** para el procesamiento por el modelo de IA, lo que **reduce el costo general** de la generación de contenido.

3. Ahorra Sus Créditos: Al evitar intentos de generación fallida debido a archivos grandes, solo paga por el contenido creado correctamente.

4. Reducción de Escala Automática: El sistema realiza la optimización necesaria **automáticamente** en segundo plano, permitiéndole enfocarse en la creación de contenido.
