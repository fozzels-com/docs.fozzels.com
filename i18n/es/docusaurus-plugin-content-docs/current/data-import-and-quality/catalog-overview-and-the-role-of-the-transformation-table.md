---
id: '103000368948'
title: 3.1.1. Descripción General del Catálogo y el Rol de la Tabla de Transformación.
sidebar_position: 2
slug: >-
  /data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table
description: >-
  El Catálogo de Productos es tu herramienta principal para la gestión
  centralizada de datos de productos y la selección previa al Flujo. Contiene
  todas las entidades de productos y atributos sincronizados desde tu plataforma
  de comercio electrónico integrada.
---

El Catálogo de Productos es tu herramienta principal para la gestión centralizada de datos de productos y la selección previa al Flujo. Contiene todas las entidades de productos y atributos sincronizados desde tu plataforma de comercio electrónico integrada (p. ej., Magento, Shopify, NextChapter). El Catálogo te permite filtrar rápidamente y seleccionar subconjuntos específicos de productos utilizando herramientas de filtrado potentes antes de crear un Flujo de Contenido dirigido. Este proceso agiliza la generación y controla los costos.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/kT0sbPzqu9U7CYKKbDsdr8HrH0S-eFUwSA.png)
Para acceder al **Catálogo**, selecciona la pestaña Catálogo en el encabezado de la aplicación principal.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/vfW-3PdKzz5wVJFdE5npuD2aUHNwjtoC0w.png)
**1. Configuración Inicial y Selección de Tienda**

1.1. Elegir la Fuente de Datos Al abrir el Catálogo, el primer paso es seleccionar tu fuente de datos usando el menú desplegable "**Elegir integración/sitio web/tienda**".
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qAi7dFDbCqw3Iuboi01Pe7HC4Rvwgs500g.png)

Selección Predeterminada: Si tu cuenta tiene solo una integración activa y una tienda predeterminada, los productos se mostrarán automáticamente. De lo contrario, debes seleccionar explícitamente una tienda.
Lista de Tiendas: El menú desplegable enumera todas las integraciones activas y archivadas. Las integraciones archivadas se mostrarán pero se marcarán como inactivas. Puedes seleccionar cualquier sitio web y tienda vinculados.
Sincronización: Una vez que se selecciona una tienda, la tabla de productos se completa con todas las entidades disponibles en el administrador de esa tienda. Si faltan datos, asegúrate de haber sincronizado los productos desde la página de Integración.
Orientación: La ruta de navegación (migas de pan) se actualiza dinámicamente para confirmar el sitio web y la tienda que estás viendo actualmente.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/yb51KJSKdpexrXDdEzKIgVfKAGu5kqGAFA.png)

1.2. Gestión de la Vista de la Tabla

Límites de Visualización: Usa el menú desplegable arriba de la tabla para establecer el número de productos mostrados por página. Las opciones incluyen 5, 10, 25 (predeterminado), 50, 75 y 100 productos. Usa los controles de paginación en la parte inferior para cambiar entre páginas.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/XGBtpKC2r1WW-xy9ZtKVqCbXxHe38w94mw.png)
Icono Maximizador: Haz clic en el icono maximizador en el extremo izquierdo de la tabla para expandir la vista, dedicando más espacio de pantalla a los datos.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/R9a_-A3pooA7ZwgFA0hPy7oakeJnhnuIwQ.png)

**2. Personalización de la Visibilidad de Columnas**

El botón de alternancia **Visibilidad de columnas** te permite personalizar el diseño de la tabla mostrando u ocultando columnas de atributos.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_4nR9136ceKTkO8gCJYcXkFfxsTxJnAjw.png)

Accediendo a Atributos: Haz clic en el botón de alternancia Visibilidad de columnas para abrir el menú desplegable, que enumera todos los atributos activos disponibles en tu integración. Los atributos inactivos no se enumeran aquí y no se pueden mostrar. Para ver productos por un atributo inactivo, primero debes activarlo en la **pestaña Atributos**.
Búsqueda de Atributos: Usa el campo de búsqueda en la parte superior del menú desplegable para encontrar rápidamente un atributo específico. Haz clic en el icono cancelar (cruz) que aparece al escribir para restablecer la búsqueda.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/uUX_pmAolRpY9P3RoZlEapDjNX0y3kGVjA.png)
Agregando una Columna: Simplemente deselecciona la marca de verificación para ocultar la columna de la tabla. Un icono de marca de verificación confirma que la columna es visible.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/OaI_JWUdBAPWTp5UyHcuLYT93tT1LUiQfQ.png)
Enfocándose en una Columna: Haz clic en el icono "**Ojo**" junto al nombre de un atributo. La tabla se desplazará automáticamente horizontalmente para traer esa columna a la vista, y el encabezado de la columna se resaltará.
Eliminando una Columna: Simplemente deselecciona la marca de verificación para ocultar la columna de la tabla.
**_Usa la barra lateral derecha para gestionar Columnas y crear un flujo._**
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/qgwc2opu9MjL3wW4nbOmiOD-rbCUX7IrOw.png)

**3. Filtrado de Productos para Selección**

El Catálogo ofrece dos **formas potentes** de filtrar tu conjunto de productos antes de crear un Flujo.

3.1. Filtrado Directo de Columnas Puedes filtrar productos interactuando directamente con los encabezados de columna en la tabla:
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/c6Z48CIdVWFbxX7y-CDbDD0cWbSjXeQwXw.png)

- **Entradas de Texto**: Usa el campo de búsqueda en la parte superior de cualquier columna de atributo basado en texto para filtrar productos dinámicamente mientras escribes.
- **Menús Desplegables y Selecciones**: Para atributos con valores definidos (como 'Marca' o 'Tamaño'), puedes escribir para buscar opciones, o seleccionar y eliminar una o más opciones.

**Filtrado por Categoría:** Para el atributo "Categorías" (si está correctamente configurado con "_Árbol de Categorías_" y "_Filtrable_"), puedes expandir la estructura de árbol y seleccionar múltiples categorías para reducir la lista de productos.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/2yny31P2rsrxdVzC07rzVaJr-RwO7xCA9w.png)

3.2. Configuración de Filtro Avanzado
El botón de alternancia **Filtro avanzado** proporciona una interfaz más granular de lógica condicional, idéntica al filtrado utilizado en el Generador de Flujos.

Activando el Formulario: **Haz clic en el botón de alternancia Filtro avanzado**. Esta acción oculta todas las entradas de búsqueda de columna directa y muestra el formulario de interfaz de usuario para construir condiciones complejas.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/_6dDdNeft6Ifj_CsyXM-FW_xbW1uZRAhjg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/gs9u3MDY8AQDvqHMTHpetQ4Jhh33DA7Cgg.png)

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/x58B9Ei1GLKAdaKuoKR-uF1m7F27cfxikA.png)

Transferencia de Filtros: Todos los filtros previamente seleccionados en las columnas de la tabla se transfieren automáticamente al formulario de interfaz de usuario de Filtro Avanzado cuando se activa, y viceversa.

Construcción de Condiciones: Usa los botones en la interfaz de usuario para agregar condiciones individuales o grupos de condiciones (p. ej., Marca 'Solo' Y Tamaño 'XS').

Presiona el botón "**Buscar**" para aplicar la lógica y actualizar la tabla de productos.

Gestión: Usa el botón "**Eliminar**" para eliminar condiciones individuales, o el botón "**Restablecer**" para borrar todas las condiciones y restaurar la lista completa de productos.

**4. Utilizando Columnas Especializadas**

Columna de Miniaturas: Los productos con imágenes mostrarán la primera imagen aquí. Si faltan imágenes, verifica la configuración de tu atributo "URL de Imagen Absoluta del Producto". Puedes filtrar el catálogo usando el menú desplegable de la columna para ver solo productos con "_Imagen faltante_" o "_Imagen existe_".
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/iIY14kkYS_2aVcuNVFZF5Z1TLKQ0cczmYQ.png)
**Al pasar el cursor sobre** una imagen se muestra la vista previa de la galería completa. Al hacer clic en la imagen se abre la **[Vista Detallada del Producto](/data-import-and-quality/detailed-product-view-reviewing-all-attributes-for-a-single-product/)**.
**Columna de Contenidos**: Esta columna muestra la fecha de sincronización del último contenido generado (no la fecha de generación). La fecha es un enlace; al hacer clic en él se abre la lista de finalizaciones de ese producto.

![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/YRHITuApJ-8TocExnzRrdqDtJhfJGiHDCQ.png)

**5. Creando un Flujo a partir de Productos Seleccionados**

Una vez que hayas filtrado el Catálogo al subconjunto de productos deseado, puedes iniciar inmediatamente un nuevo Flujo.

Selección: Los productos se seleccionan ya sea por los filtros aplicados (Directo o Avanzado) o seleccionando manualmente filas usando las casillas de verificación de la tabla.
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/geFwcUzWrcTuZWszx1O1aqL9-gIX9f2GUg.png)
Iniciación: Haz clic en el botón "Crear **"Crear Flujo en Productos Seleccionados"**".
![](/img/kb/data-import-and-quality/catalog-overview-and-the-role-of-the-transformation-table/slcUdb4L8stvkadQeWPNRZ22WZmZZ8aI3w.png)

Flujo Prellenado: Se te redirigirá a la nueva página de creación de Flujo. La tienda seleccionada en el Catálogo se elegirá automáticamente, y los filtros que aplicaste en el Catálogo se transferirán automáticamente y se configurarán en el paso de selección de productos (Paso 3) del nuevo Flujo.
