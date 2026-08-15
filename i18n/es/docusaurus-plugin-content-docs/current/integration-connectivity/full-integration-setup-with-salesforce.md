---
id: '103000410190'
title: 2.10.1 Configuración completa de la integración con Salesforce.
sidebar_position: 21
slug: /integration-connectivity/full-integration-setup-with-salesforce
description: Esta guía te acompaña en la creación de una nueva integración con Salesforce Commerce Cloud, desde la configuración inicial hasta guardar los ajustes y activar Websites &…
---

Esta guía te acompaña en la creación de una nueva integración con Salesforce Commerce Cloud: desde la configuración inicial hasta guardar los ajustes, activar Websites & Stores, recuperar los datos de producto y revisar las asignaciones de atributos. Aprenderás a rellenar los datos de conexión obligatorios (Short Code, Organization ID, Client ID/Secret), a entender cómo funciona el Global Pull Schedule con la hora UTC y a saber cuándo conviene configurar retardos entre peticiones.

## Paso 1: Ir a la creación de la integración

1.  En el menú lateral, ve a **Home → Integrations**.
2.  Haz clic en el botón **Create** (esquina superior derecha).
3.  En la pantalla **"Choose your integration"**, selecciona la plataforma **Salesforce**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/IJA_dZ5zfXA48PaD8HMxsHD71ItRVgwANg.png)
    ![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/sTmy2P9U7mD0ENp0NC-gg8Y0oT53ZtfzLg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/bbv7bi_E2qSTk1bDVEN706lCu7fETDnn1g.png)
Se abre el formulario **Create New Integration**, que consta de tres pasos: **1\. Configuration → 2. Websites & Stores → 3. Attributes**.

## Paso 2: Rellenar el formulario de configuración
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/_4n7-QBaGDhtz4yq_LpPLXF5t7s-sE-_vQ.png)

### Campos principales:

| Campo | Descripción |
| --- | --- |
| **Name**\* | Nombre de la integración: sirve para identificarla en la lista de integraciones |
| **URL**\* | URL base de tu instancia de Salesforce Commerce Cloud |

**Bloque de configuración:**

| Campo | Descripción |
| --- | --- |
| **Short Code**\* | Código corto de tu instancia de Salesforce Commerce Cloud |
| **Organization ID**\* | El ID de tu organización de Salesforce |
| **Client ID**\* | ID del cliente OAuth creado en Salesforce Account Manager |
| **Client Secret**\* | Clave secreta de ese cliente OAuth |
| **Image CDN Base URL** _(opcional)_ | URL base de la CDN (DIS) que se usa para descargar las imágenes de producto. Ejemplo: `https://exxe.ххххх.commercecloud.salesforce.com/dw/image/v2/XXXX-XXX` |

_Los campos marcados con un asterisco (\*) son obligatorios._

## Paso 3: Global Pull Schedule

El conmutador **Overwrite Global Pull Schedule** te permite definir cuándo debe ejecutarse la sincronización de productos. Si está desactivado, se usa la programación global predeterminada (`03:30`).

> ⚠️ **Importante: la hora se define en UTC**
>
> El campo Global Pull Schedule usa **hora UTC**, no tu zona horaria local.
>
> Esto importa especialmente si tienes varias Stores en distintas regiones: una hora de baja actividad (de madrugada) para una tienda puede coincidir con las horas de mayor tráfico de otra. Ejecutar una recuperación de datos en horas punta añade carga a tu sitio y puede ralentizarlo para tus compradores.
>
> **Recomendación:** si tus Stores atienden a zonas horarias distintas, no dependas solo del Global Pull Schedule; sobrescribe la programación por Store (`Overwrite Global Pull Schedule` en los ajustes de esa Store) y elige una hora que coincida con la franja de baja actividad real de esa tienda, convertida a UTC.

## Paso 4: Delay Between Pages / Delay Between Requests

Los campos **Delay between pages** y **Delay between requests** establecen una pausa (en milisegundos, rango de 100 a 15000 ms) entre páginas de resultados y entre peticiones individuales a la API, respectivamente.

> ℹ️ **Consejo:** estos campos son opcionales. Si los dejas vacíos, se aplica el retardo predeterminado de la plataforma.
>
> Recomendamos **no establecer estos valores de entrada** al configurar la integración por primera vez. En su lugar, ejecuta unas cuantas recuperaciones de datos con los ajustes predeterminados y observa el resultado:
>
> -   Si las recuperaciones se completan correctamente, no hace falta configurar nada más.
> -   Si aparecen errores (por ejemplo, limitación de peticiones por parte de Salesforce), vuelve a los ajustes de la integración y aumenta el retardo para reducir la carga sobre la API.

## Paso 5: Guardar

Cuando todos los campos obligatorios estén rellenados, haz clic en **Save** para pasar al siguiente paso: **Websites & Stores**.

## Paso 6: Websites & Stores

Después de hacer clic en **Save**, se te redirige a la pestaña **2\. Websites & Stores** de la integración.

> ✅ _Verás un mensaje de confirmación: "Integration was created successfully. Please, do not forget to activate your Integration."_

### 1\. Activar la integración

Antes de poder recuperar tus stores/websites, pon **Active** en ON (arriba a la derecha de la página, en la barra de estado de la integración: Active / Authorized / REST API Connected).

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/Fn99DCFxArzsidpIraptWFwTO-BnqzkyTg.png)

### 2\. Recuperar Websites y Stores

Haz clic en el botón **PULL WEBSITES AND STORES**. Esto autoriza la conexión con Salesforce y recupera tus Websites y Stores disponibles.

> ✅ Cuando se complete correctamente, verás: "Integration status has been updated" y, después, "Your websites and stores was pulled from integration successfully". Los indicadores **Authorized** y **REST API Connected** se ponen en verde (✓).

### 3\. Activar Websites y Stores

Una vez recuperados, verás una tabla dividida en **Websites** (Name, Code, Status) y **Stores** (Language, Status, Pull schedule, Products, Pull Progress, Actions).

Pon en Active cada **Website** y cada **Store**, uno por uno.

> ℹ️ **Nota:** una estrella (⭐) junto al nombre de un Website o una Store indica que es el **predeterminado (principal)**.

### 4\. Recuperar productos

Cuando una Store esté activa, se habilita el botón **Pull products**. Al hacer clic en él se inicia la recuperación de los datos de producto.

> ℹ️ **Nota:** iniciar una recuperación ejecuta en realidad **4 pasos secuenciales**, que se muestran como barras de progreso independientes al desplegar Pull Progress (con la flecha desplegable junto al botón):
>
> 1.  **Product Attribute**
> 2.  **Category Attribute**
> 3.  **Category**
> 4.  **Product**
>
> Cada paso tiene su propia barra de progreso y un icono **Refresh** para volver a ejecutar ese paso concreto por separado. Cada paso cuenta además con un icono **View logs** para consultar el registro detallado de esa fase.
>
> Además, los pasos **Category** y **Product** tienen un icono **View in catalog**, que te lleva directamente a las categorías/productos recuperados en tu catálogo.

Cuando los 4 pasos lleguen al 100 %, la barra principal **Pull Progress** muestra **"Product - 100%"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/AXWOgFul8iBQWgLq0jQ5k5HmCHYYds3MQQ.png)

## Paso 7: Attributes

El tercer y último paso, **Attributes**, muestra la lista de atributos recuperados de tu catálogo de Salesforce, junto con su estado de asignación.

### Selector de modo de atributos

De forma predeterminada, la tabla muestra los atributos de **Product**. En la parte superior de la tabla hay un selector de modo con tres opciones:

-   **Product**
-   **Category**
-   **Brand**

> ⚠️ **Nota:** en esta integración, los atributos de **Brand** **todavía no son compatibles**, aunque la opción aparezca en el selector.

Cambiar de modo cambia el conjunto de atributos que se muestra. Por ejemplo, al cambiar a **Category** verás atributos específicos de categoría como `Category ID`, `Description`, `Name`, `Page Description`, `Page Keywords`, `Page Title`.

### Columnas de la tabla:

| Columna | Descripción |
| --- | --- |
| **Name** | ID y etiqueta del atributo (p. ej., `35759: Brand`, `35777: Category ID`) |
| **Code** | El código técnico del atributo en Salesforce (p. ej., `brand`, `ean`, `origin_category_id`) |
| **Scope** | Ámbito del atributo (si procede) |
| **Generic Mapping** | Si el atributo está asignado a un campo genérico o del sistema |
| **Allow HTML** | Si se permite contenido HTML para este atributo (✓/—) |
| **Data Density Percent** | Porcentaje de productos/categorías que realmente tienen un valor para este atributo: ayuda a detectar campos poco cumplimentados (p. ej., `Page Keywords` al 26 %, `Category ID` al 100 %) |
| **Example data** | Un valor de muestra tomado de un registro real (producto o categoría, según el modo) |
| **Active** | Si el atributo está activo o en uso actualmente (✓) |
| **Actions** | Icono de edición (✏️) para configurar la asignación del atributo |

### Opciones de la barra de herramientas:

-   Menú desplegable **Actions**: acciones masivas para los atributos seleccionados
-   **Selector de Store** (p. ej., Mystore`: en_us (en_US)`): elige de qué Store se toman los datos de ejemplo
-   **Get random example data**: una vez seleccionada una Store en el desplegable, rellena la columna **Example data** con un valor de muestra nuevo elegido al azar para cada atributo; útil para comprobar la asignación
-   **Column visibility**: muestra u oculta columnas de la tabla
-   **New Attribute** (arriba a la derecha): añade manualmente un atributo personalizado que no esté en la lista predeterminada

> ℹ️ **Nota:** los atributos que se muestran por defecto son el **conjunto base** que viene de serie (p. ej., Brand, EAN, Long Description, Price en el modo Product; Category ID, Name, Description en el modo Category). Si tu catálogo de Salesforce incluye **atributos personalizados**, usa el botón **New Attribute** para añadirlos y asignarlos manualmente.

## Paso 8: Editar un atributo

Al hacer clic en el icono ✏️ **Edit attribute** de la columna Actions se abre la ventana emergente **Edit attribute**, con todos los detalles de ese atributo: algunos campos son editables y otros son valores de solo lectura o del sistema.

### Campos:

| Campo | Descripción |
| --- | --- |
| **Entity Type** | Si el atributo pertenece a **Product**, **Category** o **Brand** _(solo lectura)_ |
| **Name (Origin Attribute Name on Integration)** | El nombre visible del atributo tal como llega desde Salesforce (p. ej., `Long Description`) |
| **Code** | El código interno del atributo (p. ej., `longDescription`) |
| **Origin Attribute ID** | El ID del atributo en el lado de la integración de origen (si está definido) |
| **Origin Attribute Code** | El código del atributo tal como existe en el lado de Salesforce (p. ej., `longDescription`) |
| **Frontend input** | El tipo de entrada con el que se muestra o edita este campo (p. ej., `Textarea`) |
| **Frontend Field Display With Widget** | Widget opcional para representar este campo en el frontend |
| **Generic Mapping** ℹ️ | Asigna este atributo a un campo genérico o del sistema, si procede |
| **Transform Data** | Avanzado: permite **ejecutar código en tiempo de ejecución** para transformar los datos entrantes antes de guardarlos _(⚠️ marcado con una advertencia: para uso avanzado o técnico)_ |

### Casillas de verificación:

| Opción | Descripción |
| --- | --- |
| **Allow HTML** | Si se permite contenido HTML en este campo |
| **Enabled** | Si el atributo está activo y en uso |
| **Filterable** | Si este atributo puede usarse como filtro (p. ej., en la navegación del catálogo) |
| **Mutable** ℹ️ | Si el valor puede modificarse o sobrescribirse tras la primera recuperación |
| **Inheritable** ℹ️ | Si el valor se hereda (p. ej., de una categoría superior o de la tienda predeterminada) |

### Localización

Más abajo, por **Website** (p. ej., `Mystore`) y por cada **locale** activo (p. ej., `en_us (en_US)`), puedes introducir o editar directamente un **valor localizado** para este atributo; por ejemplo, para sobrescribir el texto de `Long Description` que se muestra en esa web o locale concretos.

Haz clic en **Save** para aplicar los cambios, o en **Cancel** para descartarlos.

> ⚠️ **Precaución:** el campo **Transform Data** permite ejecutar código en tiempo de ejecución; es una función avanzada. Un código incorrecto puede romper el procesamiento de datos de este atributo. Te recomendamos usarlo solo si entiendes la lógica de transformación necesaria o, en caso de duda, tener a mano un contacto del equipo de soporte.

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dXfx5OPU1hiT51CXn8LiDQwH-TEXGJXdVg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iV0xwN-jnstAKKgixyaCk_xrX_YowzggDg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/dFxEvhIpzZghLVLLDiYbGvsGjZphndAgYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/N4ix6-rdWoomYb4sDO8JzYCvCdyhKxL3Cg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-salesforce/iSFTjf50J_sPVCyMi1T5KeoayFI8zi9FHg.png)

Llegados a este punto, la integración con Salesforce está completamente configurada: autorizada, conectada, con los Websites/Stores activados y los datos de producto recuperados correctamente.

Los siguientes pasos —configurar los **Catalogs** y construir el **Flow**— siguen el mismo proceso que en cualquier otro tipo de integración y se explican en la documentación general de integraciones, no en la específica de Salesforce.
