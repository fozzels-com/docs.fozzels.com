---
id: '103000367854'
title: 2.3.3. Configuración completa de la integración con Shopify.
sidebar_position: 5
slug: /integration-connectivity/full-integration-setup-with-shopify
description: Esta guía detalla cómo establecer una conexión segura y bidireccional entre tu tienda de Shopify y Fozzels mediante Custom Apps (Private Apps) y cómo configurar…
---

Esta guía detalla cómo establecer una conexión segura y bidireccional entre tu tienda de **Shopify** y **Fozzels** mediante **Custom Apps** (Private Apps), y cómo configurar los parámetros de sincronización.

## Paso 1: Configuración de la Custom App de Shopify

### 1.1. Creación de la app

1.  **Abre** un navegador e **inicia sesión** en tu **Shopify Admin**.

2.  **Ve** a la sección **Settings**.

3.  **Ve** a la sección **Apps and sales channels** del menú lateral.

4.  **Pulsa** **Develop apps**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/FQMhwpXYX9AaHS64ub51WznCudG_HjF_GQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/im1AvTKi6MWYyaB5au2QV52k6g-zKgIJPQ.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/_flCr1G21Y0eiLDKAAikCGA8aItw-mC2Ng.png)

5. **Pulsa** **Create an app**.

6. **Rellena** el App name (**Fozzels**) y **selecciona** tu cuenta en la sección de desarrollador de la ventana emergente "Create an app".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/iwwZ8YAvrwc95yWJhOvB1oRxvwcRY-TaUw.png)

### 1.2. Configurar permisos (scopes)

1.  **Ve** a la sección **Configure Admin API scope**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Ul-1S5j5J-ff2mqfWD_hCHBbpsCPJPNOJA.png)

2. **Activa** los siguientes permisos obligatorios mediante el campo de búsqueda: read\_product\_listings , read\_products , write\_products , read\_metaobject\_definitions , read\_metaobjects , read\_product\_feeds .

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Q-ViUfe7pSUU1B02HTAe2_fR-ncQiNevEw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/VlG1HE0ZjQVE-ftYEYNp1-YpSbOdYRXSGw.png)

3. **¡Atención!** Si utilizas **Markets** en Shopify para gestionar distintas regiones o países, también debes **añadir** los siguientes permisos: write\_translations , read\_translations , write\_markets , read\_markets , read\_locales .

4. **Comprueba** la lista completa de permisos activados. Debería tener este aspecto:

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/oRHwBytJR6A9FPaCaQdSSF83Rk5PHBPKiw.png)

5. **Pulsa** Install app para completar la creación.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/mmVlY4rP_YWAoM7ED5aByqLh37nfQomtcA.png)

### 1.3. Preparar las credenciales

1.  **Ve** a la sección **API credentials**.

2.  **Copia** y **guarda** todos los campos que necesitarás introducir en Fozzels.
    2.1. **Copia** la API key de Shopify (para el campo API key de Fozzels).
    2.2. **Copia** la API Secret key de Shopify.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/8XPxI0phlV2LNnbr1Aj-4wH3VCl_q62JQw.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/0VUTxufo_k1f9p3im2fqQ0x1mA9tu4gAIg.png)

## Paso 2: Crear la integración en Fozzels

### 2.1. Configuración de la conexión

1.  **Inicia sesión** en tu cuenta de Fozzels desde `https://app.fozzels.com`.

2.  **Ve** a la sección **Integration**.

3.  **Haz clic** en **“New Integration”**.

4.  **Selecciona** la plataforma **Shopify**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/Pyzl5zTGARVEwFahvJ9LgtWhqC42AkOW-Q.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/9ZDhsVks6A3bEPfvWW2KUSi_LC5nxPkKKA.png)

5. **Escribe** el nombre de tu integración.

6. **Introduce** la URL de la tienda online de Shopify.

**¡Atención!** En los campos URL y App Host Name, **usa** siempre el subdominio `.myshopify.com`, no la URL "real". Ejemplo: `teststore.myshopify.com`.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/5Es2Xe5K4kX7G9ceTSqa0zcRdqY7LOd18w.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/2V9Pr-82uxKsTQw5vzihFFVkdOXXeYRTYg.png)

7. **Copia** y **pega** todos los campos necesarios en Fozzels.
    7.1. **Pega** la API key de Shopify en el campo API key de Fozzels.
    7.2. **Pega** la API Secret key de Shopify en el campo API Secret de Fozzels.
    7.3. **Pega** el App Host Name.

8. **Activa** el conmutador **Markets or LangShop** para poder sincronizar contenido de productos de distintas tiendas (para los locales, no solo para la tienda predeterminada).

9. **Pulsa** el botón **Save**.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/10MdEKRe3CAXM8phYawwasjHybRh5utDcg.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/1gUl8bf3vOc8OzNHXG0e2xOkIOfqafgQgQ.png)

### 2.2. Activación y sincronización

1.  **Activa** la integración.

2.  **Recupera** los websites y las stores.

3.  **Asegúrate** de que la integración tenga los siguientes estados y de que se muestren los websites y stores actuales:
    3.1. Authorized: yes
    3.2. REST API Connected: yes

4.  **Activa** los websites y los idiomas con los conmutadores. _El idioma predeterminado del mercado está marcado con una estrella._

5.  **Haz clic** en el botón **“Pull Products”** para empezar a recuperar productos y atributos. **Espera** a que se carguen los productos (el avance se muestra en la barra de progreso).

6.  **Ve** a la pestaña **“Attributes”** para ver, activar/desactivar o editar los atributos cargados. **Consulta** [aquí](/data-import-and-quality/attribute-quality-analysis-data-density-percent-custom-attributes) más información sobre la gestión de los atributos.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/hf-7P91OunPrATXrTjI-eheh4APzl3yMTQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/QoYt9ReC4xDN26VlS3LlMJMq_48shcVFYQ.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/nRpJNQGSWcWm_BelS7-uGiBdpAXGz7G4nA.png)

_\* El idioma predeterminado del mercado está marcado con la estrella_

![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/BRzfcGMI7cun1wQGg3Vv1VHM9WbikgIqMg.png)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopify/XOn4d1hw9r48sW-PN1cKj0Mr5B4q-HxITA.png)

Una vez creada correctamente la integración, ya puedes **empezar** a crear flujos y **generar** tu **[primer contenido](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)** en Fozzels.
