---
id: '103000385568'
title: 3.1  Programaciones de Extracción Personalizadas y Lógica de Automatización
sidebar_position: 1
slug: /data-import-and-quality/custom-pull-schedules-automation-logic
description: >-
  Hemos actualizado la plataforma Fozzels para alinearse con tu ritmo
  comercial local. Ahora tienes control total sobre cuándo comienza tu ciclo
  de actualización de contenido, permitiéndote sincronizar operaciones de IA
  con tus actualizaciones de inventario y capacidad del servidor.
---

Hemos actualizado la plataforma Fozzels para alinearse con tu ritmo comercial local. Ahora tienes control total sobre cuándo comienza tu ciclo de actualización de contenido, permitiéndote sincronizar operaciones de IA con tus actualizaciones de inventario y capacidad del servidor.

## Programaciones de Extracción Personalizadas

Ya no estás restringido a un único ciclo del sistema que anteriormente comenzaba a las **00:30 UTC** para todos. Ahora, defines la hora de inicio para cada integración o tienda individual.

### 1. Niveles de Configuración:

-   **Nivel de Integración Global:** Establece un único calendario para toda la integración (configurado en la pestaña **Configuración**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/OIDrHQUvFDLOAW6VRq6bmDqVGmzw-Sx_WQ.png)

-   **Nivel de Tienda Individual:** Establece un calendario único para una tienda específica (configurado en la pestaña **Sitios Web y Tiendas** a través de la opción **"Sobrescribir en Nivel de Tienda"**).
    ![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/rzTnb5R6tAHqj6TuLjncrbuJn2jhIhf-A.png)

![](/img/kb/data-import-and-quality/custom-pull-schedules-automation-logic/4TXxigKSz9G6RrXZnbgqjQ0N7TTKYwiwMQ.png)

##
Cómo Funciona: La Reacción en Cadena de Automatización

Es importante entender que la hora de Extracción programada es el **disparador** para toda una cadena de procesos. Una vez que la **Extracción** importa exitosamente tus datos, el sistema ejecuta automáticamente los siguientes pasos:

### Viaje de Datos: Desde Extracción hasta Generación (Paso a Paso)

**Etapa**

**Qué Sucede**

**Resultado**

**1. Extracción de Productos**

Fozzels se conecta a tu sitio a través de API y descarga datos actualizados.

El sistema tiene una lista actualizada de productos y características.

**2. Sincronización de Flujo**

El sistema "tamiza" el catálogo a través de tus filtros de Flujo activos.

Los nuevos productos se agregan a la cola; los irrelevantes se eliminan.

**3. Actualización de Atributos**

Los valores (precio, categoría, campos personalizados) se actualizan para cada producto en el Flujo.

La IA recibe el contexto más fresco para la generación.

**4. Generación de IA**

La cola de generación comienza en función de tus prompts específicos.

Se crean textos, etiquetas SEO y traducciones.

**5. Exportación de Datos**

El contenido completado se envía automáticamente de vuelta a tu sitio.

Tus clientes ven la página de producto actualizada.

**Ejemplo:** Si configuras tu hora de extracción a las **17:00 (5 PM)**, la generación de IA comenzará inmediatamente después de que se complete la importación de datos y las verificaciones de flujo (p. ej., alrededor de las **17:20** o **17:45**), en lugar de esperar hasta la mitad de la noche.

## Interfaz Localizada: Configuración de tu Zona Horaria

Para hacer que la programación sea intuitiva y eliminar las matemáticas mentales de UTC, puedes establecer tu zona horaria local directamente en tu perfil.

### Cómo configurar tu zona horaria:

1.  Ve a **Configuración** > **Perfil**.

2.  Encuentra el campo **Zona Horaria** y selecciona tu región en el menú desplegable.

3.  **Crucial:** Haz clic en el botón **GUARDAR** para aplicar los cambios.

### Por qué es importante:

-   **Sin Cálculos de UTC:** Si programas una extracción para las 17:00 en tu zona horaria, comenzará exactamente a las 17:00 según tu reloj local.

-   **Registros Transparentes:** Cada registro de actividad y estado de generación se mostrarán en tu hora local, haciendo que el monitoreo sea sin esfuerzo.

## Beneficios Clave

-   **Control de Frescura:** La generación de IA ocurre inmediatamente después de que se actualicen los datos del producto en tu sitio.

-   **Optimización del Servidor:** Escalonana los tiempos de extracción para diferentes tiendas para evitar que tu API se vea abrumada por solicitudes simultáneas.

-   **Previsibilidad:** Sabe exactamente cuándo tus nuevos productos serán procesados por la IA y listos para revisión.
