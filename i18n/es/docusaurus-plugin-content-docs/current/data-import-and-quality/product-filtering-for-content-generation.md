---
id: '103000369006'
title: 3.3. Filtrado de Productos para Generación de Contenido
sidebar_position: 7
slug: /data-import-and-quality/product-filtering-for-content-generation
description: Esta guía explica cómo usar efectivamente el mecanismo de filtrado en Fozzels para seleccionar precisamente un subconjunto de productos basado en valores de atributos, asegurando que la generación de contenido sea dirigida y eficiente.
keywords:
- indicación
- instrucción
---

Esta guía explica cómo usar efectivamente el mecanismo de filtrado en Fozzels para seleccionar precisamente un subconjunto de productos basado en valores de atributos, asegurando que la generación de contenido sea dirigida y eficiente.

### 1. Accediendo a las Opciones de Filtrado

Las opciones de filtrado están disponibles en dos ubicaciones principales:

1.  **Creación de Flujo de Contenido:** Para definir el lote específico de productos que procesará un flujo, **edita** un flujo existente (o crea uno nuevo) y **ve a** la pestaña **"Selección de Flujo e Prompt"**.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/M8M8DSbeTwyMCzVdPZg-AgTrZhknUKlMaA.png)

2.  **Catálogo de Productos:**
    2.1 Habilita el botón de alternancia **"Filtro avanzado"**. Esto abre un panel donde puedes agregar **"Agregar condición"** y **"Agregar grupo de condiciones"** para lógica compleja.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/PCVDp6xbmqaVBtncYNWlb_f76UC2MmUI-g.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/IOHTRc5oV_-sARYVDZ-D0orkvhDrAYcI8A.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/R1pQBNQNg8sWQ-DUNYyn1nSlXHg750rAUg.png)
        2.2 **Filtrado Inline:** Filtra productos usando campos de entrada o listas desplegables ubicadas directamente en los encabezados de columna de la tabla de productos (disponible para atributos con la bandera **Filtrable** habilitada).
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/AgXgNaluOPoF0zxvvmWoytasp0fhtnppLg.png)

3.  _**Crucialmente:** En el Catálogo, puedes combinar filtros inline aplicando condiciones a múltiples columnas simultáneamente (p. ej., filtrando por **SKU** **Y** por **Marca**)._

### 2. Filtrado por Condiciones de Valor

Este tipo de filtrado se aplica a atributos de texto, numéricos y de selección múltiple.

1.  **Igual:** El valor del atributo debe coincidir exactamente con el valor ingresado. _Ejemplo: Mostrar solo productos donde_ `Color` _es igual a_ `Azul`.

2.  **No igual:** Mostrar todos los productos excepto aquellos que coincidan exactamente con el valor ingresado. _Ejemplo: Mostrar todos los productos donde_ `Material` _no es_ `Algodón`.

3.  **Está vacío:** Mostrar solo productos donde el atributo seleccionado no tiene valor (está en blanco). _Ejemplo: Encontrar productos con un_ `Descripción Corta` _vacía_.

4.  **No está vacío:** Mostrar solo productos donde el atributo seleccionado contiene un valor completo. _Ejemplo: Encontrar productos que tienen un nombre de_ `Fabricante` _completado_.

5.  **Contiene:** El valor del atributo debe contener el fragmento de texto o número ingresado. _Ejemplo: Encontrar todos los productos donde_ `Nombre` _contiene la palabra_ `Verano`.

6.  **No contiene:** El valor del atributo no debe contener el fragmento de texto ingresado. _Ejemplo: Excluir productos cuyo_ `SKU` _no contiene_ `DESCUENTO`.

7.  **En / No en:** El valor del atributo debe coincidir con uno de los múltiples valores ingresados (separados por comas) o no debe coincidir con ninguno de ellos. _Ejemplo (En): Mostrar productos donde_ `Tamaño` _es_ `S, M, L`.

8.  **Comienza con / Termina con:** Encontrar productos por los caracteres iniciales o finales del valor. _Ejemplo: Encontrar productos cuyo_ `SKU` _comienza con_ `P_`.

9.  **Es nulo / No es nulo:** Condiciones técnicas para manejar correctamente valores vacíos o no vacíos a nivel de sistema.

### 3. Filtrado por Condiciones de Fecha

Este tipo se aplica a atributos con formato de fecha, permitiéndote filtrar basándote en la cronología (p. ej., `created_at`, `updated_at`).

1.  **Está vacío / No está vacío:** Muestra registros donde el campo de fecha está ausente o completo. _Ejemplo: Encontrar todos los productos sin un_ `fecha de actualización`.

2.  **Igual:** Muestra registros donde el valor coincide exactamente con la fecha ingresada. _Ejemplo: Encontrar todos los productos creados el_ `2024-01-01`.

3.  **Menos:** Muestra registros donde el valor de fecha es cronológicamente anterior a la fecha ingresada. _Ejemplo: Encontrar todos los productos actualizados antes del_ `mes pasado`.

4.  **Mayor:** Muestra registros donde el valor de fecha es cronológicamente posterior a la fecha ingresada. _Ejemplo: Encontrar todos los nuevos productos actualizados después de_ `ayer`.

5.  **Menor o igual / Mayor o igual:** Incluye la fecha ingresada en el conjunto de resultados. _Ejemplo: Encontrar todos los productos actualizados el o después de_ `01-01-2024`.

### 4. Filtrado por Imágenes de Productos

Este tipo de filtrado especial está disponible en el **Catálogo** a través del filtro inline en la columna **Miniatura**. Es críticamente importante para iniciativas de generación de contenido que usan modelos multimodales.

1.  **Imagen Existe:** Mostrar solo aquellos productos que tienen una imagen adjunta.

2.  **Imagen Faltante:** Mostrar solo aquellos productos para los cuales falta una imagen.

![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/8QgVAeRUMysJuzJ8692EqmUBXsfxeJ-Leg.png)

### 5. Agrupación de Condiciones (Lógica Avanzada)

Puedes construir lotes de productos altamente específicos usando múltiples condiciones y grupos.

1.  **Agregar Múltiples Condiciones:** Para filtrar por varios atributos (p. ej., `Color = Azul` **Y** `Tamaño = M`), simplemente **haz clic en "Agregar condición"** múltiples veces.

2.  **Grupo de Condiciones:** Al hacer clic en **"Agregar grupo de condiciones"** te permite combinar condiciones usando lógica compleja (p. ej., (`Categoría = Camisetas` **Y** `Precio > 50`) **O** (`Categoría = Chaquetas`)).
