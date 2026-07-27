---
id: '103000367976'
title: 4.1.2. Crear un Nuevo Flujo de Contenido y Configuración Inicial.
sidebar_position: 2
slug: /content-creation-flows/creating-a-new-content-flow-and-initial-settings
description: >-
  El Flujo de Contenido es el núcleo de la automatización dentro de Fozzels. Es
  un conjunto de instrucciones que define cómo el sistema debe usar el modelo de
  IA seleccionado para automat
---

El Flujo de Contenido es el núcleo de la automatización dentro de Fozzels. Es un conjunto de instrucciones que define cómo el sistema debe usar el modelo de IA seleccionado para generar, actualizar y sincronizar automáticamente textos para sus productos.

## 1. Crear un Nuevo Flujo de Contenido

1.  **Inicie sesión** en su cuenta de Fozzels.

2.  **Vaya** a la sección de **Flujos de Contenido** en el menú de encabezado.

3.  **Seleccione** la tienda deseada de la lista desplegable **"Elegir tienda"**.

4.  **Haga clic** en el botón **"Nuevo Flujo de Producto"**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/dkNQlB5ollDUkXSZvdTsa61-fyN6j1hZdg.png)

5.  **Ingrese** el nombre del flujo en el campo **Nombre** (por ejemplo, _Mi Primer flujo de contenido_).

6.  **Seleccione** el atributo a actualizar de la lista desplegable **Atributo** (por ejemplo, _Descripción_).

7.  **Haga clic** en el botón **Guardar**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/qDGTsHq3b5SDyDecYwdbl9fFgzUk1HDQpA.png)

8.  **Verifique** que el nuevo flujo aparezca en la lista de Flujos.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/ebU6dS9TViRZcxsQAbYNYjTpKnW-jd9Rvg.png)

## 2. Configuración de IA y Modelo (Pestaña 2: Configuración de IA)

1.  **Navegue** a la pestaña **Configuración de IA** (O **Siguiente paso**).

2.  **Elija** el proveedor de IA (por ejemplo, _OpenAI | ChatGPT_ o _Google | Gemini_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/n9NN2mBe7EPu1HcyBY-Xasfs5m2pHHEdaA.png)

3.  **Seleccione** el modelo de IA deseado (por ejemplo, _GPT-4o (nuevo)_ o _Gemini 2.5 Flash Preview_) haciendo clic en el mosaico correspondiente.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TcZLY49TXUXTtDOIhsZe2EoRUodTwkNTMg.png)

4.  **Habilite** características de enriquecimiento opcionales, como **Habilitar Búsqueda Web**, si es necesario.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/Hw53qskGZ3nBjK7FjvvsOEEDFznDFpSOpQ.png)

5.  **Establezca** la cantidad de imágenes (de 1 a 5) en el campo **Cantidad de imágenes** que la IA utilizará para análisis y generación de contenido (opcional).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/csny9IgMXvADkHUZbDWfxWYWVQcbXer2wg.png)

6.  **Asegúrese** de que la función **Cambio de Tamaño de Imagen** esté habilitada (recomendado para prevenir errores con archivos grandes, lea más sobre Cambio de tamaño de imagen [aquí](https://fozzels.freshdesk.com/a/solutions/articles/103000367979)).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/h9tWKVAiOCFtONtDB2tWqYyXwNm8CJR4-g.png)

7.  **Establezca** el valor máximo de tokens (**Máx tokens**) para generación.
**_![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/TRNywCO8dEOrABpWxX3SZsrBiU9IPpD3Bw.png)_**

8.  **Seleccione** el estilo de texto deseado (**Estilos de texto**) de la lista desplegable (por ejemplo, _Publicidad_ o _Creativo_)**.**
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/6COvPEOCPMjqptoEaqLECdel__NHP7_q6w.png)

9.  **Seleccione** el tono de texto deseado (**Tonos de texto**) de la lista desplegable (por ejemplo, _Formal_ o _Entusiasmado_).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/EdX6_M7Fbou3VQRhLIAMcVccLkQ0LXcrJg.png)

10.  **Haga clic** en el botón **Guardar** para guardar la configuración.

## 3. Selección de Producto y Creación de Indicación (Pestaña 3: Selección de Flujo e Indicación)

1.  **Navegue** a la pestaña **Selección de Flujo e Indicación**.

2.  **Active** el flujo **marcando** la casilla **Flujo activo**.

3.  **Seleccione** el atributo para generación en el campo **Atributo** (debe coincidir con el paso 1.6).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vNOY4ePi2dZDPZTVgzFsZeKva-Ff-TZTEg.png)

4.  Aplicar filtrado:
    4.1. **Utilice** la sección de filtros para limitar los productos para los que se generará contenido.
    4.2. **Seleccione** un atributo (por ejemplo, _Color_ o _SKU_), defina el operador (Igual, Contiene, Está vacío, etc.), e ingrese el valor. 4.3. Precaución: Si no se aplican filtros, el contenido se generará para **TODOS** los productos actualmente en su tienda.
**![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/vv-HKjbxUtsGgQ1_c0yv_cdOSFcWpAzKDQ.png)**

5.  **Cree** la instrucción (indicación) para la IA:
    5.1. **Escriba** el texto de indicación principal en el campo Indicación central. _El campo de indicación no puede estar vacío._
    5.2. **Inserte** datos de productos estáticos (por ejemplo, _Nombre del Producto_ o _SKU_) haciendo clic o arrastrando elementos de la sección Atributos.
    5.3. **Agregue** lógica dinámica (por ejemplo, _SI Color es Azul_) para generación de contenido condicional utilizando la sección Atributos (si está completada).
    5.4. **Priorice** elementos con un porcentaje de Densidad de Datos alto para garantizar una generación de contenido exitosa en la mayoría de los productos.
    5.5 Lea más sobre cómo crear una indicación y usar la herramienta Arrastrar y soltar [aquí](https://fozzels.freshdesk.com/a/solutions/articles/103000367983).
    5.6 Lea más sobre cómo guardar y cargar una indicación creada como plantilla [aquí](https://fozzels.freshdesk.com/a/solutions/articles/103000367846).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/1NaIIRbS4Q7wdMA8cA0jKSnoBsh-XUgdJg.png)

6.  **Haga clic** en **"Guardar y Vista Previa"** para ver los productos que cumplen con las condiciones (verá el conteo total de productos).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/o0INO3KlijbtEPCvPvScfTbViWXrJonVtw.png)
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/tlD_Xv4nww_sdHQbtB-nYMnM7ys3UZ9TnQ.png)

7.  **Haga clic** en el botón **Generar Ahora** en la ventana emergente de vista previa para ejecutar una generación de prueba.
    _![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/MF2Dc75ZZc1YdfVh3W57H-gtKgAR4Jq1XA.png)_

## 4. Configuración de Automatización (Pestaña 4: Automatización)

1.  **Navegue** a la pestaña **Automatización**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/jT9iQbF_psMmhbveX_odN1GaB7VTK988lQ.png)

3.  **Establezca** la cantidad de productos para los que se creará contenido por ejecución en el campo **Cantidad de productos para crear contenido por día** (por ejemplo, 10).

4.  **Marque** la casilla **Completamente automático** si desea que el texto generado sea **inmediatamente** enviado a su tienda sin confirmación. _La mayoría de los usuarios inicialmente mantienen esta opción deshabilitada para revisión manual._

5.  **Marque** la casilla **Crear automáticamente un nuevo texto cuando un atributo de un producto cambia en su tienda** para asegurar regeneración cuando se actualicen los datos fuente.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/rELhAfupqnLV-KmzzijdZcKzYqPy7Y6TlQ.png)

6.  **Habilite** la función de prevención de superposición de contenido (si no es su primer flujo de contenido) (opcional)

-   Puede establecer un período de tiempo (**horas, días, semanas, meses o años**) para evitar que el sistema genere nuevo contenido para el atributo de producto específico si un flujo anterior ya lo ha manejado.

    -   **Bueno saberlo:** Aún contaremos los resultados de generación pasada para prevenir duplicados, incluso si el flujo que los creó fue eliminado o archivado.
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/bKuoDyZad0Su9sGZC5HVmzZt78JZK3cag.png)

7.  **Haga clic** en el botón **Guardar**.

8.  **Ejecute** el flujo:

-   **Planificar y Cerrar:** La generación se agregará a la cola y se lanzará al día siguiente, después del grupo de productos automático nocturno.

    -   **Ejecutar Ahora:** La generación se iniciará inmediatamente (para la cantidad de productos especificada en el campo _Cantidad de productos para crear contenido por día_).
        ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/DR3WD6p7OkbQJcJEUgwKTj-yuvy7HCtong.png)

## 5. Revisión de Resultados (Lista de Lotes)

1.  **Haga clic** en el botón **Lista de Lotes** en el Flujo actual para ver los lotes generados.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/s3rLqx0aN3qf63h0ohkm2ITtcQ4dpVGSgw.png)

2.  **Revise** los datos generados en la columna **Atributo de Destino**.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/krPPKGK1WQcRrrduGQVGEUUTkyNLOhI_2w.png)

3.  **Si es necesario**, **edite** el texto generado haciendo clic en él (en modo Mostrar HTML).
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/iiy9xDUPUbNJaN3Dv19ByLztRC6SuuFw_A.png)

4.  **Haga clic** en **"Guardar y sincronizar"** para enviar manualmente el contenido confirmado a su tienda.

5.  **Nota:** Si Fozzels marca el contenido como **"sospechoso,"** no se puede sincronizar sin regeneración previa. **Regenere** el contenido hasta que cumpla con los requisitos de verificación.
    ![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/VlcFFEZm3jLMa2CfL0wyEj6i5l4B1n9sYA.png)

![](/img/kb/content-creation-flows/creating-a-new-content-flow-and-initial-settings/lSusJ64-jIyhQStOHHai5u5y8pwWE2YoWw.png)

6. **Lea** más sobre revisión de resultados, sincronización manual y manejo de errores en el contenido generado [aquí](https://fozzels.freshdesk.com/a/solutions/articles/103000369091).
