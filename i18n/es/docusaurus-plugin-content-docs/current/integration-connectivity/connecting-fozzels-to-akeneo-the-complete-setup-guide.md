---
id: '103000395378'
title: '2.7. Conectar Fozzels a Akeneo: la guía completa de configuración'
sidebar_position: 17
slug: /integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide
description: Esta guía explica cómo establecer una conexión bidireccional entre tu PIM Akeneo y Fozzels. La integración requiere crear dos conexiones separadas
---

Esta guía explica cómo establecer una conexión bidireccional entre tu PIM Akeneo y Fozzels. La integración requiere crear dos conexiones separadas en Akeneo: una para permitir que Fozzels envíe datos a Akeneo, y otra para permitir que Akeneo exporte datos a Fozzels. Después de crear ambas conexiones, las vinculas a tu cuenta de Fozzels usando las credenciales generadas.

**Requisitos previos**

-   Una cuenta de Akeneo activa con acceso de administrador
-   Una cuenta de Fozzels activa
-   Acceso al área de configuración de conexión en Akeneo

**Parte 1: configuración de Akeneo (creación de conexiones)**

Paso 1: inicia sesión y navega a la configuración de conexión

1.  Abre un navegador e inicia sesión en tu **panel de Akeneo** usando tus credenciales de administrador.
2.  En la barra lateral izquierda, navega a **Conectar → Configuración de conexión**.

Paso 2: crear la conexión "fuente de datos" (Fozzels IN)

Esta conexión permite que Fozzels envíe datos **a** Akeneo.

1.  Haz clic en el botón **Crear** en la esquina superior derecha.
2.  Completa los siguientes campos:
    -   **Etiqueta:** `Fozzels IN`
    -   **Código:** `fozzels_in`
    -   **Tipo de flujo:** selecciona `Fuente de datos`
3.  Haz clic en **Guardar**.
4.  Desplázate hacia abajo hasta la sección **Permisos**. En el menú desplegable **Función**, selecciona `Administrador`.
5.  Haz clic en **Guardar** nuevamente.
6.  Mantén esta página abierta: necesitarás el **ID de cliente**, **secreto**, **nombre de usuario** y **contraseña** mostrados en pantalla.

> **Consejo:** copia cada credencial en un archivo de texto temporal para que no las pierda al alejarse.

Paso 3: crear la conexión "destino de datos" (Fozzels OUT)

Esta conexión permite que Akeneo exporte datos **a** Fozzels.

1.  Vuelve a **Conectar → Configuración de conexión** y haz clic en **Crear**.
2.  Completa los siguientes campos:
    -   **Etiqueta:** `Fozzels OUT`
    -   **Código:** `fozzels_out`
    -   **Tipo de flujo:** selecciona `Destino de datos`
3.  Haz clic en **Guardar**.
4.  En **Permisos**, establece la **función** en `Administrador`.
5.  Haz clic en **Guardar**.
6.  Copia el **ID de cliente**, **secreto**, **nombre de usuario** y **contraseña** para esta conexión.

> **Importante:** cada conexión genera su propio conjunto único de credenciales. Asegúrate de copiar y etiquetar ambos conjuntos por separado: necesitarás pegar cada uno en el campo correcto en Fozzels.

**Parte 2: activación de Fozzels**

Paso 4: inicia una nueva integración

1.  Inicia sesión en tu **cuenta de Fozzels**.
2.  Navega a la pestaña **Integraciones**.
3.  Haz clic en **Crear nueva integración**.
4.  Selecciona **Akeneo**.
    ![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/H4jUsBP_CVGytKdGvILnXxxrewyuDwsEwA.png)

Paso 5: completa los campos de configuración

En la página de configuración de integración, completa los siguientes campos:

-   **Nombre:** ingresa un nombre descriptivo para esta integración (por ejemplo, `Conexión Akeneo`)
-   **URL** de tu sitio web
-   **Conexión OUT (datos DE Akeneo):** pega las credenciales de la conexión **Fozzels OUT** que creaste en el paso 3
-   **Conexión IN (datos PARA Akeneo):** pega las credenciales de la conexión **Fozzels IN** que creaste en el paso 2

![](/img/kb/integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide/E3PznnpS3GxByBNHd8CfP3zkzZahhRaBWw.png)
Paso 6: guardar la integración

1.  Haz clic en el botón **Guardar** en la parte inferior de la página.

Tu cuenta de Fozzels ahora está conectada a Akeneo. Los datos pueden fluir en ambas direcciones según las conexiones que configuraste.

Si tienes algún problema durante la configuración, comunícate con nuestro equipo de soporte: estamos felices de ayudar.
