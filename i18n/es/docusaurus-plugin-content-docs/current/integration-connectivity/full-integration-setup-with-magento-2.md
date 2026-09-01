---
id: '103000367853'
title: 2.2. Configuración completa de integración con Magento 2.
sidebar_position: 2
slug: /integration-connectivity/full-integration-setup-with-magento-2
description: Esta guía detalla el proceso de establecer una conexión segura bidireccional entre tu tienda Magento 2 y Fozzels. Generarás los tokens API necesarios y
---

Esta guía detalla el proceso de establecer una conexión segura bidireccional entre tu tienda Magento 2 y Fozzels. Generarás los tokens API necesarios y configurarás permisos, asegurando importación de datos de productos sin problemas y exportación de contenido.

La integración de Magento 2 requiere crear una nueva integración dedicada en el panel de administración de Magento para generar cuatro claves esenciales: **Clave de consumidor**, **Secreto de consumidor**, **Token de acceso** y **Secreto de token de acceso**. También configuraremos el atributo `fozzels_completion_date` requerido para rastrear la sincronización de contenido.

## Parte 1: Configuración de Magento 2 (Creación de la integración y tokens)

Debes crear una nueva integración y definir permisos específicos dentro de tu panel de administración de Magento.

### Paso 1: Crear una nueva integración

1.  **Inicia sesión** en tu panel de administración de Magento.

2.  **Ve** a **Sistema** / **Integraciones**.

3.  **Haz clic** en el botón **"Agregar nueva integración"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gr4UpPbx41G2Oy6OOEdyCKol_ENow66ITg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/N7zrOrdp8o6CvLgUlZhpQuMcQs5r7OVmWw.png)

### Paso 2: Rellenar información de integración

1.  **Ve** a la pestaña **Información de integración** (Configuración básica).

2.  **Rellena** los campos requeridos:
    2.1. **Introduce** Nombre: Fozzels.
    2.2. **Introduce** Correo electrónico: info@fozzels.com.
    2.3. **Introduce** tu contraseña de administrador de Magento para confirmación.

3.  **Omite** campos opcionales (URL de devolución de llamada, URL de enlace de identidad).

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/EM4ivAqLXVniXYWdiyAMElpusFWgWjUgvQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/6vzO74ehADcyuIaahKWVOQtYVvHWVkD_vg.png)

### Paso 3: Configurar permisos de API (Ámbitos)

1.  **Haz clic** en la pestaña **"API"**.

2.  En el menú desplegable, **selecciona** **"Personalizado"**.

3.  **Marca** solo estas casillas (para acceso de lectura/escritura):
    3.1. **Catálogo**: Categorías, Inventario, Productos, Actualizar atributos, Editar diseño de producto.
    3.2. **Tiendas**: Configuración, Todas las tiendas.
    3.3. **Atributos**: Producto, Conjunto de atributos.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/QphCzWE1SkWWnk3rdvVZReWcdPfHny5hsQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/TXQWFfKyYyQlNwHODT_3OsVgEHngoyaPXg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/j3iFU0HffLd73Kzc_rQEt62o2oTsVpxF2g.png)

### Paso 4: Guardar y activar la integración

1.  **Haz clic** en el botón **"Guardar"** en la esquina superior derecha.

2.  En la página de lista de integraciones, **localiza** la nueva integración de Fozzels.

3.  **Haz clic** en el enlace **"Activar"**.

4.  En la página de detalles de activación, **verifica** si se han seleccionado las APIs correctas (del paso 3), y **haz clic** en **"Permitir"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/_C1d9Jr1A4136F6oEoNWIM2R2fnU0SwdvA.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/cBnv6FpiV0647eqHlNbNHIyCXcA_kHEx5A.png)

### Paso 5: Copiar y almacenar las claves API

1.  Después de hacer clic en "Permitir", serás **redirigido** a la página "Tokens de integración para extensiones".

2.  **Copia** y **almacena de forma segura** los cuatro valores rellenados automáticamente:
    2.1. Clave de consumidor
    2.2. Secreto de consumidor
    2.3. Token de acceso
    2.4. Secreto de token de acceso

3.  **Haz clic** en **"Listo"**.

4.  **Verifica** o **edita** detalles de integración más tarde **presionando** el botón **"Editar"** en la página de integraciones.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/NOrDSAhjlO7hXjU2J1fafMmXfcMy-Lypwg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/Pj-HIMnlhJNvqDzEYmDckrL3xvLalFhsfw.png)

##

## Parte 3: Activación de Fozzels y sincronización de datos

### Paso 6: Verificar acceso a API

Antes de conectar Fozzels, asegúrate de que tu servidor:

**1. No bloquea solicitudes externas a la API REST de Magento.**

Si tu servidor tiene un firewall, WAF o servicio de seguridad (Cloudflare, Sucuri, etc.) configurado — pueden bloquear solicitudes entrantes de Fozzels a tu tienda.

### Qué hacer:

1.  Solicita la lista actual de direcciones IP de Fozzels a **[support@fozzels.com](mailto:support@fozzels.com)**.
    Para agregar a la lista blanca, puedes usar las direcciones IP de Fozzels:
```
49.13.117.118
91.205.205.66

2a01:4f8:c17:bb1e::/64
```

2.  Reenvía esta lista a tu proveedor de alojamiento o administrador del servidor para agregarlos a la lista blanca.

Si esto no se hace — recibirás un error **401 (No autorizado)** al crear la integración en Fozzels y no podrás completar la conexión.

**2. No limita el número de solicitudes de API del agente de usuario: **fozzels**.**
El agente de usuario completo es Mozilla/5.0 (Windows NT 10.0; Win64; x64; fozzels/5.1.2; +[https://app.fozzels.com/](https://app.fozzels.com/)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36

Durante la sincronización, Fozzels envía un gran número de solicitudes, especialmente con catálogos de productos grandes. Si tu servidor tiene límites estrictos en el número de solicitudes por minuto o segundo (limitación de velocidad) — algunos serán rechazados.

### Qué hacer:

1.  Contacta a tu proveedor de alojamiento o administrador del servidor.
2.  Pídeles que aumenten el límite de solicitud de API, o excluyan las direcciones IP de Fozzels y/o el agente de usuario de Fozzels de la limitación de velocidad.

Si esto no se hace — recibirás un error **429 (Demasiadas solicitudes)** durante extraer productos y la sincronización de productos no se completará.

Después de confirmar los cambios, procede a crear la integración en Fozzels.

### Paso 8: Crear nueva integración en Fozzels

1.  **Inicia sesión** en tu cuenta de Fozzels.

2.  **Ve** a **Integraciones**.

3.  **Haz clic** en **"Crear nueva integración"**.

4.  **Elige** **"Magento"** de las opciones disponibles.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/M9c13tHfbMEfpo7QsFt_Q6DvUljm-1jM1Q.png)![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/UvSS02f-tz_5sjBViKw7tq0kWJRti5mSvA.png)

####

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/RrDkikq2qamOno3s8JmMIrJfno5S5gpIew.png)

####

### Paso 9: Rellenar detalles de conexión

Usarás las claves de la parte 1 para conectar Fozzels e iniciar la importación de datos.

1.  **Nombra** tu integración claramente.

2.  **Introduce** la **URL** de tu sitio web de Magento.

3.  **Rellena** las cuatro claves copiadas en el **paso 5** en los campos correspondientes.

4.  **Haz clic** en **"Guardar"**.

![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/o_z4KRc-z_zOvcPpPvDV5evmBRJNZO-4vQ.png)

### Paso 10: Activar y sincronizar tiendas

1.  **Activa** el interruptor **'Activo'** en la esquina superior derecha. _Sin esto, la conexión no funcionará._

2.  **Ve** a la pestaña **"Sitios web y tiendas"**.

3.  **Haz clic** en el botón **"Extraer sitios web y tiendas"**. Tus sitios web y tiendas deberían aparecer ahora.

4.  **Verifica** que la integración tenga los siguientes estados: **Autorizado: sí** e **API REST conectada: sí**.

5.  **Habilita** los sitios web y tiendas actuales usando el **interruptor** para trabajo adicional.

_![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/FvECiFfTlviQFFK2fJ8FF2Uoa9iBogloGg.png)_
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/d3dKR2OUZS7d-iiP2ptuZXFlu9JQKqz93A.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/gjRG-nmFAybUytQo_B_QzBZew6ZY5FygNQ.png)

####

### Paso 11: Extraer productos y verificar

1.  **Haz clic** en el botón **"Extraer productos"** para iniciar el proceso de importación de tu catálogo de productos.
    ![](/img/kb/integration-connectivity/full-integration-setup-with-magento-2/s372RDIQcyC9gZU1pE-mNmKjoV3tHwE2XQ.png)

2.  **Espera** a que los productos se carguen (el progreso se mostrará en la barra de progreso).

3.  **Ve** a la pestaña **"Atributos"** para configurar tus reglas de sincronización.

4.  **Lee** más sobre cómo trabajar con atributos de productos y personalizar campos de datos [aquí](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/).

[](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes/)
