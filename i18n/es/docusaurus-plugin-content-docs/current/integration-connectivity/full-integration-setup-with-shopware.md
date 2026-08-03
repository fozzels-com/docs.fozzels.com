---
id: '103000338038'
title: 2.4. Configuración completa de integración con Shopware
sidebar_position: 6
slug: /integration-connectivity/full-integration-setup-with-shopware
description: 'Esta guía te guía a través del proceso completo de conectar tu tienda en línea Shopware 6 con Fozzels. La integración consta de dos partes: Parte 1:'
keywords:
- indicación
- instrucción
- extracción
---

Esta guía te guía a través del proceso completo de conectar tu tienda en línea Shopware 6 con Fozzels.
La integración consta de dos partes:

# Parte 1: Crear una integración en Shopware 6

En esta parte, crearás una integración de API dentro de tu panel de administración de Shopware 6. Esto genera las credenciales que Fozzels necesita para comunicarse con tu tienda.

### 1. Introducción

Ve a tu panel de administración de Shopware 6. Por lo general, lo puedes encontrar en [la URL de tu tienda](https://shopware6.fozzels.com/admin).

### 2. Haz clic en "Configuración"

Haz clic en "Configuración".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/_APoVDYMLEb_oPJsWrg4Fj9HOyB2FWI6g.png)

### 3. Haz clic en "Sistema"

Ve a la configuración del sistema.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NE3HjkKRNa353OQJJBzR8eeF_Y9XA9Mi_w.png)

###
4. Haz clic en "Usuarios y permisos"

Selecciona la opción Integraciones del menú Sistema.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/XBGWZJstYupsn7hsyrU1stHBQK9Hh8igVA.png)

### 5. Desplázate hacia abajo hasta "Roles" y haz clic en "Crear rol"

   En la página Usuarios y permisos, desplázate hacia abajo hasta la sección Roles y haz clic en el botón "Crear rol".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/6gkkqh6BDu27YdBmfVYPA7aub9lZQr-Svw.png)

### 6. Rellena el nombre del rol

En la pestaña "General", introduce un nombre para el rol.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NUafBeJNC09Mi86jv-EVOFyWLidctjzadA.png)

### 7. Haz clic en "Permisos"

Verás la tabla de permisos con todas las casillas sin marcar. Habilita los siguientes permisos:

**Catálogos (Ver, Editar, Crear, Eliminar):**

-   Categorías
-   Grupos de productos dinámicos
-   Páginas de destino
-   Fabricantes
-   Productos
-   Propiedades
-   Reseñas

**Contenido:**

-   Medios (Ver, Editar, Crear, Eliminar)
-   Experiencias de compra (Ver, Editar)
-   Temas (Ver, Editar)

**Otros** (Ver, Editar, Crear, Eliminar):

-   Canales de ventas

**Configuración:**

-   Monedas (Ver, Editar, Crear, Eliminar)
-   Campos personalizados (Ver, Editar, Crear, Eliminar)
-   Idiomas (Ver, Editar, Crear, Eliminar)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/hUqHqVoOiZ0d2J1mJ2IWMFdxxBKX0tVq5g.jpeg)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/PoONXWr6_1SjTd-6iea1UpNsFzfkwxRYpw.jpeg)

### 8. Guardar el rol

Después de establecer todos los permisos, haz clic en "Guardar" para guardar el rol.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A8MHLjtMTc9IvBEae-ZW8vUS8I4hag_G8A.png)

###  **9.** Ve a Sistema > Integraciones
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A3DBstBn6Ru1Z0789w5hnvK7skD1VrNVhA.png)
**10.** **Haz clic en "Agregar integración"**

Haz clic en el botón "Agregar integración". Aparecerá el diálogo "Crear integración":

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/URMEvVMGXkTNtDY6_YIfXEesdx7AwYJJ2g.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/3hNA53bC00sF1iGxrnL2kynScvKzSZfduA.png)

**11.** Rellena los detalles de integración

Introduce un nombre para la integración. Luego abre el menú desplegable "Roles" y selecciona el rol que creaste anteriormente.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/DZY9Dx_ZSKux2NMqdZxEYkFXqeT3JeZVlg.png)

###
12. Copia el ID de clave de acceso

Haz clic en el icono de copia junto al **ID de clave de acceso** para copiarlo en tu portapapeles. Pega esta clave en un documento de texto para salvaguardarla — la necesitarás en la parte 2.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Um8SIf9NDPTA8bYzQbm-H73d4wuiGheBbQ.png)

**13.** **Copia la clave de acceso secreto**

Haz lo mismo con la **clave de acceso secreto**: haz clic para copiar la clave de acceso secreto en tu portapapeles. Luego pega este código en algún documento de texto para que puedas acceder y copiar el código más tarde.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ngrN_TmIbSpPn4vdjAU2urPJ3Orh3b1hcw.png)

### 14. Haz clic en "Guardar integración"

Guarda la configuración de integración.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/zFiTXyoLwZk0YUyHGn98o27cXlHx8DSBgA.png)

### 15. Confirma el mensaje de éxito

La integración ahora está creada y activa.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ddwo4oRoStm6_leYM-OMhtbNWvrs2B5OkA.png)

###

# Parte 2: Conecta Fozzels a Shopware 6

Ahora que has creado la integración en Shopware, configurarás la conexión en el lado de Fozzels usando las credenciales de la parte 1.

### **1.** Ve a [Fozzels.com](https://fozzels.com/)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/QNYGtnmJc1jLtdHtrac2heMnCvr8OeCjOw.png)

###
**2.** Haz clic en "Integraciones"
    En el menú de Fozzels, haz clic en Integraciones.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p3WWrWl5kNt7ZpAfsTGCttAeYkIT1rVN6A.png)
3. Haz clic en "Crear"
    Haz clic en el botón "Crear" para comenzar a configurar una nueva integración.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/pEdr2LbjwEBHYCnp6d9LPSj4r3fXHoqSRA.png)
4. Selecciona el logo de Shopware

Elige Shopware como tipo de integración haciendo clic en el logo de Shopware.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/wutV5JMQpq7oa9KVz1xOFlxcjZe7RktGOg.png)5. Rellena los detalles de integración

Rellena los siguientes campos en orden:

1. Nombre — Introduce un nombre para esta integración, por ejemplo "Shopware 6".

2. URL — Introduce la URL de tu tienda en línea Shopware 6 (por ejemplo, https://your-store.com).

3. ID de clave de acceso — Pega el ID de clave de acceso que copiaste de Shopware en la parte 1.

4. Clave de acceso secreto — Pega la clave de acceso secreto que copiaste de Shopware en la parte 1.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/MN0itAjPFkZTRZVpISQu6IiUlmslBesN5w.png)

**6.** Cuando todos los campos estén rellenos, haz clic en "Guardar". Deberías ver un pop-up de "Éxito" confirmando que la conexión fue guardada.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Hx1KICwgA4nYaOgpQbjeLYyUYMAfwizHIA.png)

### 7. Activa la integración
    Cambia el interruptor "Activo" a encendido para activar la integración.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/CWqB7LNLotQ_hBy-B3upqEFOPuh8GzXOQg.png)
**8.** **Extraer sitios web y tiendas**
    Haz clic en el botón "Extraer sitios web y tiendas". Fozzels recuperará todos tus datos del canal de ventas de Shopware.
   ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/AIptzp_eqV19f60Lq69A3HI-5-jXSkZ8RQ.png)
9. Habilita tu conexión de tienda
    Cambia el interruptor de estado a encendido para tu tienda.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/gS02mVXwZyGcf2VSsypNVS3DoBaYSrKftQ.png)

10. Habilita vistas de tienda / canales de ventas

    Habilita las vistas de tienda disponibles o canales de ventas que te gustaría usar en Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/1UtVxA_eP1gFWhRvGqpPE7G2CczT4WZGdg.png)

11. Extraer productos

###     Haz clic en "Extraer productos" para recuperar tus datos de productos de Shopware. Esto puede tardar un tiempo dependiendo del número de productos.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/0liK4TAMuGrDYFNClrrnT2GtrcZKZ6M2jA.png)
**12.** Haz clic en "Siguiente paso"
    Procede al siguiente paso para finalizar la configuración.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p1QaQx8BXoBRslqVdOfwPVQzKjtqvAKl3A.png)

# Configuración completada

¡Felicidades! Tu tienda Shopware 6 ahora está completamente conectada a Fozzels. Puedes usar esta integración para crear flujos de productos y gestionar el contenido de tu producto directamente desde la plataforma de Fozzels.

## Primeros pasos

Aquí hay algunos artículos adicionales que pueden ayudarte a comenzar con Fozzels:

-   [Crear un nuevo flujo de contenido y configuración inicial](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Creación y filtrado de solicitudes. Editor de solicitudes de arrastrar y soltar](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)

-   [Cuándo se generan nuevos productos: El ciclo de extracción explicado](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained)
-   [Acciones masivas y control operativo en las listas de lotes / Lista de lotes diarios totales](/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list)
-   [Definición de flujo y tipos de contenido (Texto, Imagen, Vídeo)](/content-creation-flows/flow-definition-and-content-types-text-image-video)

¡O contáctanos directamente - siempre estamos felices de ayudar!

###
