---
id: '103000385832'
title: >-
  2.5.2.  Habilitación de la sincronización de datos de ACF: Configuración de WordPress/WooCommerce para
  Fozzels
sidebar_position: 8
slug: >-
  /integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels
description: >-
  La integración de Fozzels - WooCommerce ahora admite oficialmente Advanced Custom
  Fields (ACF). Esta función te permite sincronizar características de productos únicas y extendidas
---

**La integración de Fozzels - WooCommerce** ahora admite oficialmente **Advanced Custom Fields (ACF)**.

Esta función te permite sincronizar características de productos únicas y extendidas (como especificaciones técnicas, descripciones multiidioma o parámetros especiales) que añades a través de ACF, permitiéndote crear fuentes de productos más detalladas y competitivas para los mercados.

La integración exitosa requiere pasos clave de configuración tanto en WordPress como en Fozzels.

###

## **Parte 1: Preparación de datos en WordPress (ACF e API REST)**

Antes de activar ACF en Fozzels, asegúrate de que tu WordPress y ACF estén configurados para transmitir correctamente estos datos especiales a través de la API REST.

### Paso 1: Verificación y configuración de enlaces permanentes

Para que la API REST funcione correctamente, la estructura de enlaces permanentes debe ser diferente de la estructura predeterminada (simple).

1.  Inicia sesión en tu panel de administración de WordPress y ve a **Configuración** / **Enlaces permanentes**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/UoAvhDX9e8L9BLo2aXURlvtkXJ3A1z5ToA.png)

2.  Elige una estructura que no utilice parámetros (se recomienda la estructura **"Nombre de entrada"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vbZGxNZnGc1GBmBD9QYCyV3_4CUkCjMRhA.png)

3.  Verifica que **v3** esté seleccionado en el campo **Versión de solicitud**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/KhP0PGNAaWcnzkLXTBB8yQ1tPbXLQjPhzA.png)

4.  Guarda los cambios.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/yP1swQ74nSHYKF8pRpAgezDqHmxBh4nR-A.png)

###
Paso 2: Navegación al grupo de campos ACF

1.  En el menú de WordPress, ve a **ACF** / **Grupos de campos**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/a7TVqQW4iMXkGcmlP1WI8nouyni5HGoKsg.png)

2.  Haz clic en el nombre del Grupo de campos que contiene los campos que necesitas sincronizar para tus productos de WooCommerce (por ejemplo, **"Descripción de Fozzels"**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/GH8y_bXf1Lb2RnG-_VWVmrj4XKhaFuCnRg.png)

###
Paso 3: Configuración del grupo de campos para acceso a la API (paso crucial)

En la ventana de edición del **Grupo de campos**, verifica las reglas de ubicación y habilita el acceso a la API.

#### 3.1. Verificación de las reglas de ubicación

1.  En la pestaña **Reglas de ubicación**, asegúrate de que la regla esté configurada como: **Tipo de entrada** _es igual a_ **Producto**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/BNEJu6CBt2NzH17U0EzeWONrRHVf2l2Jkw.png)

#### 3.2. Activación de la API REST y el grupo

1.  Ve a la pestaña **Configuración de grupo**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/Nd2g7ccKjN6_POwgJhmMzMceFkkV0h2hxw.png)

2.  Asegúrate de que ambos interruptores estén habilitados (activados en **SÍ**):

-   **Activo**

    -   **Mostrar en API REST**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/ZJ8EJ6QyJdSfjnZQSXdDXHEAvHmtDBbEKg.png)**

3.  Guarda los cambios haciendo clic en **Actualizar** o **Publicar**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/lIgfpHeR7YI8Bf6W-4UvdIqtW2AQz9kqcw.png)

###
Paso 4: Verificación de la versión de API REST de ACF

Si estás utilizando un complemento adicional para integrar ACF en la API REST (como `ACF to REST API`), debes asegurar que la versión seleccionada sea compatible con Fozzels.

1.  Ve a **Configuración** / **Enlaces permanentes** / **ACF to REST API**.

2.  Verifica que **v3** esté seleccionado en el campo **Versión de solicitud**.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/13tEu-kDRtYwLsGbVQs5J19h9pA5I08Jlw.png)

    > **Requisito de Fozzels:** La integración requiere **compatibilidad con la API REST v3**.
    >
    >

3.  Guarda la configuración.
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/vdFx1XFzfwdgC4rWC4PSPmvnyjq5XMPclg.png)

## **Parte 2: Activación de ACF en Fozzels**

Una vez completada la preparación en WordPress, activa la función en la configuración de integración de Fozzels.

1.  Inicia sesión en tu cuenta de Fozzels y ve a editar tu integración de WooCommerce.

2.  En la sección **Configuración**, encuentra el interruptor **"Habilitar ACF (Advanced Custom Fields)"**.

3.  **Actívalo** (cambia el interruptor a **SÍ**).
    ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/0_d_0BMKbVwJo7hW9vj3FexWoHpj5ziX7w.png)

> **¡Importante!** Ten en cuenta los requisitos confirmados por Fozzels:
>
> -   El complemento ACF está instalado y activado en WordPress.
>
> -   La API REST está habilitada en la configuración del Grupo de campos de ACF (Mostrar en API REST: Sí).
>
> -   ACF versión 6.x o superior con compatibilidad con la API REST v3.
>

4.  Haz clic en **Guardar** en la parte inferior de la página.

## **Parte 3: Uso de campos ACF en el flujo y actualización del catálogo**

Fozzels trata los atributos ACF como **atributos de productos regulares**, y trabajas con ellos utilizando el flujo estándar.

1.  Después de activar el interruptor **"Habilitar ACF"** y hacer clic en **"Guardar"**, debes **ejecutar el proceso de importación de datos**:

-   **Si estás actualizando una integración existente:** Reinicia el pool de productos y atributos. Esto actualizará los datos en el catálogo de Fozzels e importará los nuevos campos ACF.

    -   **Si esta es tu primera integración:** Simplemente ejecuta el pool de productos según las reglas generales de configuración de integración.
        ![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/EYnK1qxy-p-r_jWSJDDxh9P0gDCTf_BU1g.png)

2.  Después de que el pool se complete correctamente, ve a la sección **3 Atributos,** verifica los nuevos atributos y sus configuraciones**.**
**![](/img/kb/integration-connectivity/enabling-acf-data-sync-wordpress-woocommerce-configuration-for-fozzels/4iRp-AUe2mr4IFsN_I9b6AEtM5f9iGTgtA.png)**
    Si tienes preguntas o necesitas ayuda para configurar la integración de ACF, nuestro equipo de soporte siempre está feliz de ayudarte. Por favor, contáctanos a través de **support@fozzels.com**.
