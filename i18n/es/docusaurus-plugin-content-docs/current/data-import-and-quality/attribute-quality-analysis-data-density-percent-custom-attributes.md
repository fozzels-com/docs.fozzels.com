---
id: '103000368952'
title: 3.2.1. Análisis de Calidad de Atributos. Porcentaje de Densidad de Datos. Atributos Personalizados
sidebar_position: 6
slug: /data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes
description: 'Este documento proporciona tanto una descripción conceptual como instrucciones prácticas detalladas sobre el ciclo de vida completo de los Atributos de productos en la plataforma Fozzels: desde la importación e análisis iniciales hasta la configuración avanzada, transformación y creación de campos personalizados.'
keywords:
- indicación
- instrucción
---

Este documento proporciona tanto una descripción conceptual como instrucciones prácticas detalladas sobre el ciclo de vida completo de los **Atributos** de productos en la plataforma Fozzels: desde la importación e análisis iniciales hasta la configuración avanzada, transformación y creación de campos personalizados.

Los Atributos son la **Única Fuente de Verdad** para la generación de contenido de IA. Su gestión implica controlar la **Densidad de Datos**, el **mapeo** y la **localización**, lo cual es crítico para crear descripciones de productos de alta calidad, relevantes y factualmente precisas. La configuración de la colección de atributos antes de comenzar el trabajo (revisando y desactivando campos no relevantes/vacíos) es un trabajo esencial que facilita significativamente las operaciones posteriores.

### Parte 1: Importación y Análisis Básico

#### 1.1. ¿Qué son los Atributos de Fozzels?

Los Atributos son puntos de datos estructurados (p. ej., `color`, `precio`, `material`) importados de tu plataforma integrada. Sirven como variables de entrada para el **Campo de Prompt**, permitiendo la generación de contenido único para cada producto.

#### 1.2. Iniciando la Importación

El proceso de importación de datos comienza con el comando **Importar Productos**.

1.  **Ve a** la configuración de tu integración y **selecciona** la pestaña **Sitios Web y Tiendas**.

2.  **Haz clic** en el botón **"Importar Productos"** para la tienda activa.

3.  **Monitoreo:** El progreso se muestra mediante una barra de progreso. El proceso puede gestionarse utilizando los botones **Detener**, **Pausar** y **Reanudar**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/6SrlYRiz66TUDmf63b5peXAC6EfLCFTjEw.png)

4.  **Registros:** Los informes detallados sobre la importación de productos y atributos están disponibles mediante **"Ver Registros de Productos"** y **"Ver Registros de Atributos"** en la columna Acciones.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/DLITtFMHc0MmEeK2UDasXyL5ZaBZifO06Q.png)

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/JRoTBrRsovpu033tRmysjhhnEYa-1nIkzg.png)

####
1.3. Análisis de Calidad: Porcentaje de Densidad de Datos

En la pestaña **Atributos**, Fozzels calcula automáticamente la calidad de cada campo.

-   **Definición:** **Densidad de Datos** es el porcentaje de productos en el catálogo para los cuales este atributo tiene un valor no vacío y utilizable.

-   **Uso:** Los atributos con baja densidad deben usarse solo dentro de la **lógica condicional** (bloques `if`) para evitar generar contenido con vacíos factúales o espacios vacíos.

-   **Gestión:** Puedes **desactivar** atributos con densidad del 0% o aquellos que no planees usar, simplificando la interfaz del **Generador de Flujos**.

![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/suceb1fs0FvE76a7CHN6A6JvqnLGLtaL2g.png)

###
Parte 2: Revisión y Configuración

#### 2.1. Revisando Datos de Ejemplo (Obtener Datos de Ejemplo Aleatorios)

Para verificar los valores importados y su localización, utiliza la función de datos de ejemplo.

1.  **Haz clic** en la función **"Obtener datos de ejemplo aleatorios"** en la pestaña Atributos.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GzPH1l304MY6YjwmxuhHfMjO3s2YS-YD6A.png)

2.  **Selecciona** una tienda/localización del menú desplegable. Esto te permite ver cómo lucen los valores para un mercado de idioma específico (p. ej., el color "zwart" para una tienda holandesa versus "black" para una tienda inglesa).
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/GyKgf3yfF6tWo11gSYr6JXc8Y99q4tIA8Q.png)

3.  **Utiliza** los botones de **flecha adelante/atrás** para ver diferentes valores de atributos de varios productos aleatorios.

#### 2.2. Edición Avanzada de Atributos (Ventana Editar Atributo)

Al hacer clic en el **icono Editar** (lápiz) en un atributo, se abre la ventana para la configuración avanzada.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dUU-_lgywMI5u-f7Y9G9ppxK9QLX_ljCAA.png)

##### Transformación de Datos

-   **Transformar Datos:** Permite la **Ejecución de Código en Tiempo de Ejecución** (código personalizado) en el valor importado antes de ser almacenado.

##### ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/XMR_zIZH_IM-p4UANnIYB8m37CATk4nhBQ.png)
Indicadores Técnicos

-   **Filtrable:** Si está habilitado, este atributo puede usarse para filtrar productos en el Catálogo/Lista de Lotes por su valor.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/EvbjNHS2aedS-hzos_piQd1wAtXba0rJww.png)
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dxX8mUPfJNYVbhVNTB7vDcF--x2JUiW3CQ.png)

-   **Mutable:** Si está habilitado, Fozzels tiene permiso para **escribir** (exportar) datos de vuelta a este campo en la plataforma de origen.

-   **Heredable:** Determina si el valor del atributo de un producto **principal** debe copiarse automáticamente a sus variantes **secundarias**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/24rgLlDhyDeaL87wmVe_rWJG8rNvx4u5YA.png)

-   **Permitir HTML:** Permite que el atributo contenga y muestre etiquetas HTML.

##### Localización del Nombre del Atributo

-   En la pestaña **Localización**, puedes **introducir** el nombre localizado deseado para el atributo para cada versión de tienda conectada.

-   **Resultado:** Los nombres localizados introducidos se mostrarán en los encabezados de columna de las tablas y en la ventana **Flow Prompt**, ayudando a la IA a comprender el atributo en el contexto del idioma de la tienda.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/hur7c60aN2_gvYH4QGK3hiVS0QSsqaTXBQ.png)
    _para tienda EN:_
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2UvshsNaysqHkYC0DA1ZjsYnZ06wRogQfQ.png)

   _para tienda NL:_
    _![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/rGRdeC3Lob__8TSrZSZP07ap45ESGV7YcQ.png)_

### Parte 3: Creación de Atributos Personalizados

#### 3.1. Propósito de los Atributos Personalizados

Los **Atributos Personalizados** son campos creados directamente dentro de Fozzels. Pueden servir como campo destino para guardar contenido generado o para valores calculados.

#### 3.2. Proceso de Creación de Nuevo Atributo

1.  **Haz clic** en el botón **"Nuevo Atributo"** en la pestaña Atributos.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/LziDSQFwLlpE7kPgzI_R1FSLOGhzqMJhMg.png)

2.  En la ventana emergente **"Crear Nuevo Atributo"**, define:
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/2nTs3mBYNoxGTi61kVLJbWfr45SFrAV-Qg.png)

-   **Nombre:** Un nombre descriptivo para la interfaz.

    -   **Código:** Un identificador técnico único.
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/39sh5ONkvBeaLHia--kl0pSjQC34K3wHTQ.png)

    -   **Entrada de Interfaz:** El tipo de datos que contendrá el atributo (**Texto**, **Área de Texto**, **Seleccionar**, **Selección Múltiple**, **Fecha**, **Booleano**, **Peso**, etc.).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dPHGR82fmOzt6JcWICNhXny23ofktRFVw.png)

    -   **Mapeo Genérico:** Estandariza el atributo según la estructura interna de Fozzels (p. ej., selecciona **Descripción**).
        ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/dhlYPSoDYXoxvTfahRTrFL8wOTxjURLVIQ.png)

3.  **Visualización del Campo de Interfaz Con Widget:** Opcionalmente, selecciona un widget para cómo se muestra el campo en el Catálogo (p. ej., **Árbol de Categorías, Imagen, ID de Producto**).

4.  **Haz clic** en **"Guardar"**.
    ![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/NGdrMyUieEv_wTjftyUbnE47OmN56Ekvlw.png)

5\. Verifica el atributo creado en la ventana emergente "**Editar atributo**" y configúralo si es necesario.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/aZZ4Pw6tM39wJo25lxXp3PoMSFNptTQxGA.png)
6\. Verifica el resultado en la **lista general de Atributos**.
![](/img/kb/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/AYfNwv4-y98aOsUmRM3PnLH68aSQJkC8gw.png)
