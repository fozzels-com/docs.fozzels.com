---
id: '103000367983'
title: 4.3.2 Creación de solicitudes y filtrado. Editor de solicitudes con arrastrar y soltar
sidebar_position: 8
slug: /content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor
description: >-
  Esta guía le muestra cómo configurar el campo de solicitud, la herramienta principal para crear instrucciones dinámicas para generación de texto de productos, utilizando atributos de productos disponibles
---

Esta guía le muestra cómo configurar el **campo de solicitud, ** la herramienta principal para crear instrucciones dinámicas para generación de texto de productos, utilizando atributos de productos disponibles, lógica condicional y configuración de localización.

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/psn6waVbTI-sOgG8K_n_-XihT1sjhb4AUg.png)
**1\. Componentes de la pestaña de configuración de solicitudes**

La pestaña de interfaz se divide en cinco secciones principales para máxima eficiencia en la construcción de su lógica de solicitud:
1\. **Campo de solicitud**. El área de texto central para escribir la solicitud. Propósito - **escribir** el texto con lógica de atributo/condición integrada.

2\. **Sección de atributos**. Una lista de todos los atributos de productos disponibles para la tienda seleccionada. Propósito - **insertar** datos de productos estáticos (p. ej., nombre de producto, SKU).

3\. **Atributos (si se completan) Sección**. Una lista de condiciones (**bloques if**) que se pueden usar para contenido dinámico. **Insertar** lógica de contenido dinámico (p. ej., _SI_ el color es azul _ENTONCES_ generar contenido 'solo azul').

4\. Entradas de **búsqueda** separadas. Puede cambiar libremente **entre** las secciones de atributos y condiciones.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/EDjHQgzURl0i0nmUnAyYimUlW-FvXAQNlw.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/1J6uMJo933Qd572KPGbVIQr86A9B-BBJng.png)
5\. Sección de plantillas. El bloque **Plantilla de solicitud** contiene **Cargar** (para importar una plantilla) y **Guardar** (para guardar la solicitud actual como una plantilla).
**2\. El campo de solicitud (lógica central)**

El campo de solicitud es donde **escribe** la lógica que forma el texto final.

Contenido compatible
El campo admite una combinación de texto libre y bloques dinámicos:

1\. **Inserte** atributos y condiciones (mediante clic o arrastrar y soltar).

2\. **Edite** el texto libre de cualquier complejidad.

3\. **Utilice** etiquetas de formato estándar y HTML (p. ej., `<h1>`, `<ul>`, `<strong>`).

4\. **Combine** texto regular con bloques dinámicos sin problemas.
Interacción con elementos

1\. **Inserte** elementos en el texto haciendo **CLIC** o **ARRASTRANDO Y SOLTANDO** en la posición del cursor.

2\. **Elimine** un elemento presionando **Retroceso** o **HACIENDO CLIC** en el **"x"** del elemento directamente en el campo.

3\. **Reutilice** el mismo atributo o condición varias veces en diferentes partes de la solicitud.

Estado del elemento

Inactivo (no en solicitud) - Gris
Atributo activo - Verde
Condición activa (bloque if) - Naranja-amarillo

**3\. Densidad de datos y localización**

#### Porcentaje de densidad de datos
Cada atributo está vinculado a un **porcentaje de densidad de datos**, el porcentaje de disponibilidad de datos en toda la integración.
**Pase el ratón** sobre el atributo para ver su porcentaje de densidad de datos en la información sobre herramientas.
**Utilice** atributos con alta densidad (más cercanos al 100%) para garantizar una generación de contenido exitosa en la mayoría de sus productos.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/x-1OzeZAjTMnJ0UwMl8MW3nuBRADUaDtbA.png)
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/qq-rfN44U1KguTDHRUx4nMlmBYUMPgTCzw.png)

Localización de atributos
1\. **SELECCIONE** la tienda deseada para ver los nombres de atributos localizados en las listas (p. ej., `product_name` para en-US, `product_naam` para nl-NL).

2\. Si un nombre de atributo no está disponible para una versión de idioma, se utilizará el nombre de tienda predeterminado (marcado con un asterisco `*`).

3\. Puede **cambiar** el nombre localizado en la configuración de integración → atributo → locale.
![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/bbfwJyznmpbxED-ZSOB2WHgKynrMD8sVHA.png)

![](/img/kb/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor/KVJCJb6ASEbmnAJE5T92lf8pj73VAn6hjA.png)

Revisión y guardado

1\. El **campo de solicitud** está inicialmente vacío al crear un nuevo flujo.

2\. Haga clic en **Guardar y vista previa** para generar y mostrar una solicitud única para cada producto en la tabla de productos, considerando los valores de atributos disponibles y las condiciones aplicadas.
3\. **Nota:** aunque agregar atributos y condiciones no es obligatorio, es fuertemente **recomendado** para generar textos para un conjunto de productos, ya que ayuda a personalizar el contenido y mejora la relevancia.
Para obtener consejos sobre cómo escribir solicitudes de alta calidad y efectivas, lea la guía [aquí](/content-creation-flows/writing-effective-prompts-recommendations/).
