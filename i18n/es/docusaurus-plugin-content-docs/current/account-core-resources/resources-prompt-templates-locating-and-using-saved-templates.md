---
id: '103000367846'
title: '1.5. Recursos. Plantillas de Indicaciones: Localización y uso de plantillas guardadas.'
sidebar_position: 8
slug: /account-core-resources/resources-prompt-templates-locating-and-using-saved-templates
description: Las Plantillas de Indicaciones son modelos de texto reutilizables y preconfigurados utilizados como entrada para que la IA genere tipos específicos de contenido de productos. Estas plantillas están confi
---

Las Plantillas de Indicaciones son modelos de texto reutilizables y preconfigurados utilizados como entrada para que la IA genere tipos específicos de contenido de productos. Estas plantillas se configuran independientemente de los flujos de generación de contenido y forman una parte central de la lógica de automatización. Se utilizan típicamente para generar descripciones de productos, títulos meta o metadescripciones.

Para acceder al área de administración, navegue a **Configuración → Plantillas de Indicaciones**.

Tabla de Administración de Plantillas

La tabla principal proporciona una descripción general de todas las plantillas creadas.
Cada entrada incluye: el identificador único (ID), el tipo de regla de plantilla (Tipo, actualmente solo Atributo de Producto está disponible), el atributo de producto al que está vinculada la indicación (Atributo, por ejemplo, descripciones, títulos meta), el nombre de la plantilla (Nombre), el texto de la indicación real y un icono Compartido, que indica si la plantilla es visible y compartida entre otros usuarios en su proyecto.

Las acciones disponibles incluyen: Ver, Editar y Eliminar.
![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/5LRXIMOwIb-G8vgFQIGjxXsovlESPjZRYA.png)

Localización y Filtrado de Plantillas

Puede encontrar rápidamente plantillas específicas utilizando el campo **Búsqueda** ubicado en la esquina superior derecha.
Además, las columnas ID, Tipo, Atributo y Nombre se pueden ordenar.
Al hacer clic en un encabezado de columna, se alterna el orden de clasificación (ascendente o descendente).
Utilice los controles de paginación en la parte inferior de la tabla para navegar a través de múltiples páginas si su lista de plantillas es extensa.

Ver el Contenido Completo de la Indicación

Al hacer clic en cualquier celda dentro de la columna **Indicación** se abre una ventana modal que muestra el texto completo y detallado de la indicación. Esta modal incluye:

-   El botón Mostrar HTML, que alterna la vista previa del texto de la indicación con formato HTML aplicado.

-   El botón Copiar al Portapapeles, que copia el texto completo de la indicación para uso externo o edición.

-   El botón Cerrar, que cierra la ventana modal.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/_NS3hQVxBRRo9EBlkjZjD9wrjEloxWjA3A.png)

Crear una Nueva Plantilla de Indicación

Para crear una nueva plantilla, haga clic en el botón **Nueva Plantilla de Indicación** en la parte superior de la página. Esto abre una ventana modal con los campos de formulario requeridos:

1.  **Atributo** (Requerido): Seleccione el campo de contenido de producto específico (por ejemplo, Descripción, Título meta) para el que esta indicación está diseñada. Esto vincula la indicación al campo de contenido de destino correcto.

2.  **Nombre** (Requerido): Ingrese un nombre claro y descriptivo. La mejor práctica es incluir el idioma y el propósito (por ejemplo, ES: Descripción breve para zapatos) para una fácil identificación.

3.  **Tipo** (Requerido): Seleccione el tipo de regla. Actualmente, solo Atributo de Producto está disponible.

4.  **Plantilla** (Requerido): Ingrese el contenido de la indicación central aquí. Este texto, combinado con variables dinámicas (por ejemplo, $marca, si $color), forma la instrucción enviada a la IA para la generación.
    ![](/img/kb/account-core-resources/resources-prompt-templates-locating-and-using-saved-templates/MqPK3HDwXl7cBuruSGQhTcI2GMYLzXfHOQ.png)

Lógica de Indicación y Mejores Prácticas

-   **Variables Dinámicas**: El texto de la indicación debe utilizar lógica condicional y variables dinámicas (por ejemplo, etiquetas if, {{vendor}}) para incluir datos específicos del producto, evitando la codificación fija.

-   **Estilo**: Asegúrese de que los requisitos de idioma y estilo (por ejemplo, tono, uso de listas con viñetas, formato HTML) coincidan con su caso de uso.

-   **Seguridad del Contenido**: La indicación debe estar bien formada y ser respetuosa para prevenir un posible rechazo por parte del servicio de IA (OpenAI).
