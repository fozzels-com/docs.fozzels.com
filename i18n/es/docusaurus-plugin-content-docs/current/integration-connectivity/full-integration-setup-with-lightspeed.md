---
id: '103000367856'
title: 2.6. Configuración completa de integración con Lightspeed.
sidebar_position: 16
slug: /integration-connectivity/full-integration-setup-with-lightspeed
description: >-
  Esta guía detalla cómo establecer una conexión API segura bidireccional entre
  tu tienda Lightspeed eCom y Fozzels generando la clave API requerida y
---

Esta guía detalla cómo establecer una conexión API segura bidireccional entre tu tienda Lightspeed eCom y Fozzels generando la clave API requerida y el secreto API dentro del Administrador de Lightspeed.
La integración de Lightspeed requiere crear una nueva clave API dedicada y establecer permisos específicos de lectura y escritura (Ámbitos) para permitir que Fozzels extraiga de forma segura datos de productos e impulse contenido generado por IA de vuelta a tu catálogo.

### Parte 1: Configuración de Lightspeed (Generación de credenciales API)

Debes acceder a tu cuenta de Lightspeed para crear y activar el par de claves API necesario.

#### **Paso 1: Inicia sesión y navega a la configuración de API**

1.  **Abre** un navegador e **inicia sesión** en la Lightspeed eCom Back Office (Administrador de Lightspeed Retail) usando tus credenciales de administrador.

2.  En el menú principal de Lightspeed, **ve** a la sección "Configuración".

3.  **Busca** y **selecciona** "Claves API" o "Desarrolladores".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/MZv-XXhmVP6BJaa1Bodx1omwsE79Sz8QMg.png)

####
**Paso 2: Crear una nueva clave API**

1.  **Haz clic** en el botón "Agregar clave API" o "Nueva clave".

2.  **Nombra** la integración claramente (por ejemplo, Integración de Fozzels).

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/C88N5mBpcnAN8OkGn8_qwt9UDUb2JF1Z9w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/AzUkWXCCt69kJBjU9LTQpJgW0iLlNd56yw.png)

####

####
**Paso 3: Configurar permisos (Ámbitos)**

La página de configuración de la nueva conexión se abrirá automáticamente. **Debes** seleccionar los permisos necesarios para Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/CioSxLGTyO3ZE1aF8NeArPcp8qx-oz22mw.png)

1.  **Asegúrate** de que se otorguen permisos de lectura y escritura para las siguientes secciones:
    -   Contenido → lectura y escritura

-   Productos → lectura y escritura

-   Configuración → lectura y escritura

Nota: Otorgar acceso de "Escritura" permite que Fozzels actualice datos en tu tienda Lightspeed, asegurando sincronización bidireccional.)

####
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/qQg2365EfWu2BevBccdOrXyc1jnZs_p1Pg.png)**Paso 4: Activación y copia de las claves**

1.  En la esquina superior derecha de la página de configuración de permisos, **activa** el interruptor (Habilita esta clave API).

2.  **Haz clic** en el botón "Guardar".

3.  **Desplázate** al bloque "Detalles".

4.  Para ver el **Secreto API (Clave de secreto)**, **haz clic** en el botón "Mostrar".

5.  **Copia** ambas claves (**Clave API** y **Secreto API**) para el siguiente paso.

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/YDWX-BrATu6YaqEag_egzmNrIb_mD9VfJQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/sjIxSoTRRX4BVp_klePTX0i1orEGgq1eFg.png)
Resultado esperado: La lista de desarrolladores ahora mostrará una entrada para la conexión de Fozzels creada exitosamente y activa.)

### Parte 2: Activación de Fozzels y sincronización de datos

Transfiere las claves copiadas a la plataforma Fozzels e inicia la sincronización.

#### **Paso 5: Iniciar una nueva integración**

1.  **Inicia sesión** en tu cuenta de Fozzels.

2.  **Ve** a la página de Integraciones.

3.  **Haz clic** en el botón "Nueva integración".
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aXXjYseZEe8aGbAnzQXq0LsF6GCxXYmSCQ.png)

4.  **Selecciona** "Lightspeed" de la lista de servicios disponibles.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/aYuT19m6Pe5D1XRvGXFAKXPJF1jq5__j1g.png)

#### **Paso 6: Rellenar campos de configuración**

En la página "Crear nueva integración", **rellena** los siguientes campos:

1.  **Nombre:** **Introduce** un nombre claro para esta integración (por ejemplo, Lightspeed\_INT).

2.  **URL:** **Introduce** la URL de tu tienda Lightspeed.

3.  **Clave API:** **Pega** la clave API copiada de Lightspeed.

4.  **Secreto API:** **Pega** el secreto API copiado de Lightspeed.

5.  **Idioma:** **Elige** el idioma principal de tu sitio web.

6.  **Clúster:** **Selecciona** el clúster (región) apropiado donde se aloja tu tienda Lightspeed.

#### ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/rmiVHOPB99FOtO7FZUQ0_YI_ma2jqnnB1w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/HY4qeR3DTL_8O1hm3il8lNhcNpKi2XECUw.png)

**Paso 7: Activar y guardar la integración**

1.  **Activa** la integración cambiando **Activado** el interruptor "Activo" en la esquina superior derecha.

2.  **Haz clic** en el botón "Guardar".

#### **Paso 8: Configuración de sitios web y tiendas y extracción de datos**

Ahora procederás a la pestaña "Sitios web y tiendas" (Paso 2) en Fozzels.

1.  **Haz clic** en el botón "Extraer sitios web y tiendas".

2.  **Activa** los sitios web y tiendas requeridos cambiando los interruptores de **Estado** correspondientes a **Activado**.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/FARHG3ynyx8xadPlNcxi8OeOH6UTmF3J7Q.png)

3.  Para cada tienda necesaria, **haz clic** en el botón **"**Extraer productos**"**. Esta acción inicia la carga inicial de datos de productos en Fozzels.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-lightspeed/QuBZPoYbMSBquMmbbycLgRYnd-2U4mjjbA.png)

Una vez que se complete el proceso de carga de productos, ¡Fozzels está listo! Puedes proceder a la pestaña "Atributos" para configurar tus reglas de sincronización. Para instrucciones detalladas sobre cómo trabajar con atributos de productos y personalizar campos de datos, lee: 3.1. Importación y descripción general del catálogo.
