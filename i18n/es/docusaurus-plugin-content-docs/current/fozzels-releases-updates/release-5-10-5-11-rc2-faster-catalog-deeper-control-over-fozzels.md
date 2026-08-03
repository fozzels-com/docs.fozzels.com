---
id: '103000384142'
title: 'Versión 5.10-5.11 RC2: Catálogo más Rápido, Control más Profundo sobre Fozzels.'
sidebar_position: 1
slug: >-
  /fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels
description: >-
  Nos esforzamos por asegurar que trabajar con grandes volúmenes de datos no sea
  solo rápido, sino también completamente controlable e intuitivo. La Versión
  5.10 se enfoca en mejorar la calidad de los datos visuales e incrementar
  significativamente el rendimiento y la conveniencia del uso de nuestro servicio
  Fozzels.
---

Nos esforzamos por asegurar que trabajar con grandes volúmenes de datos no sea solo rápido, sino también completamente controlable e intuitivo. La Versión 5.10 se enfoca en mejorar la calidad de los datos visuales e **incrementar significativamente el rendimiento y la conveniencia del uso de nuestro servicio Fozzels.**

##

Mejorando el Rendimiento y la Calidad de Datos

Hemos mejorado la UX para hacer que gestionar catálogos grandes sea más rápido y que trabajar con contenido sea sin interrupciones.

### 1. Gestión de Catálogo y Datos

-   **Catálogo Acelerado (Nuevos Valores Predeterminados):** Se ha implementado una nueva regla de visibilidad de columnas en el Catálogo. Aproximadamente 20 de los atributos más importantes ahora están habilitados por defecto. Esto **simplifica significativamente el flujo de trabajo** e **impulsa la velocidad de carga** y el rendimiento de visualización de catálogos grandes.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/lKkJYdOEv5IMFHk7r6Mhn2Iv7R--LD6Bcg.png)

-   **Precisión de Atributos (Redondeo DDP):** La lógica para mostrar el Porcentaje de Densidad de Datos (DDP) ha sido actualizada. El valor de DDP ahora se redondea a **tres decimales**. Esto asegura la visualización precisa de atributos con DDP muy bajo (p. ej., 0.040%), eliminando la confusión causada por el redondeo a cero.

-
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2LTShrMQn-AwHW8xdptY0MjbZobK0D0Iig.png)

-   **Máxima Claridad de Atributos:** El bloque "Obtener datos de ejemplo aleatorios" ahora muestra el **nombre completo del sitio web y la tienda** (en lugar de abreviaturas). Siempre estarás seguro sobre los datos específicos con los que estás trabajando.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/_WOgxMxdZL8LDJJL80org__eblNuAp-nIA.png)

-   **Navegación de Tabla Flexible:** Las opciones de paginación para listas de atributos han sido expandidas: soportando 50, 75, 100, 150 y **"200"** elementos. Gestiona fácilmente conjuntos de datos masivos.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/VwedlrpwTbYE7jTtQJKiU84KWL28R-__Rg.png)

-   **Actualización Automática del Registro del Catálogo:** En las tablas de registro que rastrean los cambios del catálogo de productos y atributos (**Lista de Registro de Estado**), la función de actualización automática (**Actualizar cada X segundos**) ahora está **activa por defecto**, mejorando la conveniencia de rastrear procesos activos.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/k7wJs0gU52ThkvU06NRQiNCb052rvZNB3A.png)
    2. Generación y Flujos de Trabajo (UX)

-   **Acceso Instantáneo a Configuraciones:** Se ha agregado un icono de ojo **"Ver atributo"** a la tabla de lista de Lotes, junto al Nombre del Atributo. Esto proporciona una forma más rápida de verificar la configuración y el ajuste del atributo.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/EStHK3i08CDJYcXd9nmAO1KRhxknIufVZw.png)

-   **Control de Columna en "Guardar y Vista Previa":** El bloque **"Visibilidad de columnas"** ha sido agregado a la tabla de vista previa (**Guardar y Vista Previa**). Esto te permite mostrar solo los atributos necesarios, resolviendo problemas con tablas demasiado grandes.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/2xUkAX-SxZ6mayNDh5A91b3m2AkKS4mDFw.png)

###
3. Gestión de Imágenes y Calidad Visual

-   **Catálogo Visual Limpio:** El sistema ahora **ignora automáticamente y no muestra** URLs de imágenes inválidas (rotas) o vacías en todo el catálogo, informes y listas de generación. Di adiós a las imágenes rotas — tus datos ahora se ven impecables.

-   **Filtrado de Imágenes Mejorado (Flujo de Imagen):** Se han agregado nuevas herramientas potentes para ordenar y filtrar imágenes en los bloques de configuración del Flujo de Imagen:

-   Los filtros especiales permiten cambiar entre imágenes predeterminadas y las tuyas propias subidas (ordenar por **Fuente**).

    -   Se ha añadido el ordenamiento por **Fecha de Carga** y **Nombre**.
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/q6optXQOc2cONrSBq2hAYJmFT-kVtuUMIA.png)
        ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/9Y5ObdDOni2-uTSMx1mbIb9eIkLRaWSRdw.png)

-   **Claridad Terminológica:** Para mayor claridad, "Modelo de IA" en la configuración del Flujo de Imagen ha sido renombrado a **"Modelo Predeterminado"**.

### 4. Operaciones Masivas Aceleradas

-   **"Mostrar Seleccionado" Completo (Catálogo e Informe Diario):** Hemos mejorado significativamente la función "Mostrar Seleccionado". Ahora, en el **Catálogo** e **Informe Diario**, la tabla de elementos seleccionados te permite realizar **todas las mismas acciones como la tabla regular**: ver, filtrar y aplicar **Acciones Masivas**.
    ![](/img/kb/fozzels-releases-updates/release-5-10-5-11-rc2-faster-catalog-deeper-control-over-fozzels/wVzkPiDgjCcZCYtSpCXgXA8rfbX5fqysPw.png)

-   **Confiabilidad en Acciones Masivas:** Hemos corregido un problema menor que ocasionalmente causaba que la cuadrícula permaneciera vacía si no se seleccionaban elementos. Trabajar con acciones masivas es ahora aún más confiable.

##
 Bajo el Capó: Estabilidad y Modernidad

-   **Estabilización de Integración Dirigida:** Se han implementado correcciones necesarias para mejorar la estabilidad y funcionalidad de las integraciones con plataformas **WooCommerce, EK Retail y Shopware**, asegurando un funcionamiento confiable para clientes con estas configuraciones específicas.

Tu experiencia es nuestra prioridad. Estas actualizaciones son solo una parte de nuestro trabajo continuo para mejorar Fozzels. ¡Gracias por ser parte de nuestra comunidad!
[Nuestro Instagram](https://www.instagram.com/fozzelsai/)
