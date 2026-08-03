---
id: '103000367977'
title: '4.1.3. Gestión de flujos: Duplicación, archivo y eliminación.'
sidebar_position: 5
slug: /content-creation-flows/managing-flows-duplication-archiving-and-deletion
description: Esta guía detalla los métodos para gestionar flujos de contenido existentes, centrándose en la duplicación para ahorrar tiempo de configuración y el mantenimiento general del flujo (archivado y
---

Esta guía detalla los métodos para gestionar flujos de contenido existentes, centrándose en la duplicación para ahorrar tiempo de configuración y el mantenimiento general del flujo (archivado y eliminación).

La duplicación es una característica esencial que ahorra tiempo y le permite clonar un flujo de contenido existente, incluida toda su configuración, filtros y solicitudes complejas, y adaptarlo rápidamente para otro idioma o tienda. **Archiving** permite la eliminación temporal de flujos de la lista activa para un posible uso futuro, mientras que **Eliminación** los elimina permanentemente.

### 1\. Duplicación de un flujo de contenido

La duplicación le permite reutilizar configuraciones completas (filtros, solicitudes, configuración de automatización) para crear rápidamente nuevos flujos, típicamente para diferentes tiendas o idiomas de destino.

#### 1.1. Proceso de duplicación

1.  **Vaya a** el menú de navegación principal y **seleccione** **Flujos**.

2.  **Localice** el flujo que desea duplicar (activo o inactivo, ejecutado o no ejecutado).

3.  **Haga clic en** el menú de acciones (tres puntos **...**) junto al nombre del flujo.

4.  **Seleccione** **"Duplicar"** en el menú desplegable.

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/SQ3APzXi6qMf8Vz9_U8bAVr6_tdKhvNCRg.png)

#### 1.2. Selección de tienda (si procede)

-   **Integración de tienda única:** Si solo está integrada una tienda, el flujo duplicado se crea inmediatamente.

-   **Integración de varias tiendas:** Si hay varias tiendas vinculadas, aparece una ventana emergente. Debe **seleccionar la tienda de destino** para la cual se creará el nuevo flujo y luego **hacer clic en "Duplicar"**.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/qtwYWP_c4W7aBzd49RLMNik4Pgdse79-yQ.png)

#### 1.3. Convención de nomenclatura de flujo

-   El flujo duplicado tendrá automáticamente el texto **(duplicate)** agregado a su nombre para distinguirlo claramente del flujo original.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/LfO44gQa0Ba6tGFg-nMgCyE6mCfT_c99MQ.png)

#### 1.4. Configuración heredada (Lo que se clona)

El proceso de duplicación copia _todos_ los ajustes del flujo original, incluido el texto de solicitud, filtros de productos, atributo de destino, configuración de IA e incluso la **Configuración de automatización (incluida la casilla de activación)**.

-   **Acción requerida:** Debido a que la configuración de activación se clona, es **obligatorio verificar y validar todos los ajustes** en el nuevo flujo antes de ejecutarlo.

#### 1.5. Caso de uso: Ahorro de tiempo para configuración de varias tiendas

La duplicación es invaluable para configuraciones de varias tiendas (p. ej., crear un flujo para la tienda NL basado en la tienda DE), ahorrando horas de tiempo de configuración al solo requerir ajustes menores de solicitud (como cambio de idioma) y verificación de filtros.

### 2\. Archivado de un flujo de contenido

El archivado permite ocultar temporalmente un flujo de la lista activa principal, generalmente para flujos que están completos o en pausa, sin perder permanentemente su configuración o datos generados.

1.  **Vaya a** la lista principal de **Flujos**.

2.  **Haga clic en** el menú de acciones (tres puntos **...**) junto al nombre del flujo.

3.  **Seleccione** **"Archivar"** en el menú desplegable.

4.  Los flujos archivados se mueven a una ubicación separada, accesible a través del botón **"Archivo"** en la página principal de flujos.

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/jhuJATuiVcYqLgL-2-ggTsKKXGOIFOj3fQ.png)

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/PRkxwqVNLhu-MtRt9BjGFa7Gg_0W_j20Ww.png)

#### 2.1. Gestión de flujos archivados

-   **Restaurar:** En la sección **Flujos archivados**, puede restaurar un flujo archivado a la lista activa principal haciendo clic en **"Restaurar"**.

-   **Eliminar:** También puede optar por eliminar permanentemente un flujo archivado haciendo clic en **"Eliminar"**.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/J17t4SXZjsrIDu1Gi7xnOOzaIieIR_OoSQ.png)

### 3\. Eliminación de un flujo de contenido

La eliminación elimina permanentemente un flujo del sistema.

1.  **Vaya a** la lista principal de **Flujos**.

2.  **Haga clic en** el menú de acciones (tres puntos **...**) junto al nombre del flujo.

3.  **Seleccione** **"Eliminar"** en el menú desplegable.

4.  **Confirme** la eliminación en la ventana emergente resultante.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/XzaWMHcYgI8ml6u0QTYw0O9LE9UbbWrakg.png)

-   **Acción permanente:** Una vez que se elimina un flujo, **no se puede restaurar**. Si puede necesitar el flujo nuevamente en el futuro, use la función de **Archivado** en su lugar.
