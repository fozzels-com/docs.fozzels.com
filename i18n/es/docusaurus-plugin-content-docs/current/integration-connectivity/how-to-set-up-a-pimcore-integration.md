---
title: 2.11.1. Cómo configurar una integración con Pimcore
sidebar_position: 23
slug: /integration-connectivity/how-to-set-up-a-pimcore-integration
description: >-
  Conecta tu catálogo de productos de Pimcore a Fozzels a través del módulo
  DataHub: prepara el endpoint y la clave de API en Pimcore, rellena el
  formulario de configuración e importa tus productos.
---

Esta guía te ayuda a conectar tu catálogo de productos de Pimcore a Fozzels, paso a paso.

## Antes de empezar: preparación en Pimcore

Fozzels se conecta a Pimcore a través del módulo **Datahub**, una herramienta integrada de Pimcore que da acceso a tus datos mediante una API.

Tu instancia de Pimcore debe tener configurado un **endpoint de Datahub** (es posible que tu administrador de Pimcore ya lo haya hecho). Si no es así, ponte en contacto con él o con nuestro equipo de soporte. Necesitarás:

- **Nombre del endpoint:** se encuentra en Pimcore, en **Datahub**, en el campo **Name**.
- **Clave de API:** aparece junto al endpoint, en la pestaña **Security Definition**, en el campo **Datahub API Keys**.

![Pimcore → Datahub → tu endpoint → pestaña General. El campo Name es el nombre de tu endpoint](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/01-datahub-endpoint-general-tab.png)

![La pestaña Security Definition contiene tu clave de API y las reglas de acceso de Workspace](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/02-datahub-security-definition-tab.png)

> **Importante:** en los ajustes del endpoint (pestaña **Security Definition → Workspaces**), debe concederse acceso de lectura (**Read**) a los objetos correspondientes, sobre todo a la carpeta que contiene tus productos (por ejemplo `/products`). Si tus productos están repartidos en varias carpetas anidadas, asegúrate de conceder acceso a todas ellas.

## 1. Crear la integración

1. Ve a **Home → Integrations**.
2. Haz clic en **Create**.
3. Selecciona la plataforma **Pimcore**.

![Elige Pimcore en la lista de plataformas de integración](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/03-choose-pimcore-platform.png)

## 2. Rellenar el formulario de configuración

![Name, URL, DataHub endpoint, API key y los campos opcionales Product/Category class](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/04-configuration-form.png)

| Campo | Qué introducir |
| --- | --- |
| **Name** | Nombre de la integración, para tu propia referencia |
| **URL** | Dirección base de tu instancia de Pimcore (por ejemplo `https://your-company.pimcore.com`) |
| **DataHub endpoint** | El nombre del endpoint de Pimcore (por ejemplo `fozzels`) |
| **API key** | La clave de acceso de Pimcore (de la pestaña Security Definition) |
| **Product class** | Déjalo vacío si tus productos se almacenan en una clase llamada `Product`. Rellénalo solo si la clase tiene otro nombre |
| **Category class** | Igual que el anterior: déjalo vacío si las categorías se almacenan en una clase llamada `Category` |
| **Asset folder** | Opcional. Solo es necesario si Fozzels va a generar nuevas imágenes de producto para ti y necesitan una ubicación en Pimcore donde guardarse (por ejemplo `/products`) |

![El campo Languages y el interruptor Include unpublished objects](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/05-languages-and-include-unpublished.png)

| Campo | Qué introducir |
| --- | --- |
| **Languages** | Lista de códigos de idioma separados por comas (por ejemplo `nl,en`). Cada idioma se convierte en una **Store** independiente en Fozzels |
| **Include unpublished objects** | Desactivado de forma predeterminada. Actívalo si quieres que la sincronización extraiga también los productos y categorías no publicados (borradores). Se procesarán del mismo modo que los normales |

### Programación de la sincronización (Global Pull Schedule)

Puedes mantener la programación predeterminada o activar **Overwrite Global Pull Schedule** y establecer tu propia hora.

> **La hora está en UTC:** la hora se establece en **UTC**, no en tu zona horaria local. Si quieres que la sincronización se ejecute durante tu noche, convierte tu hora nocturna local a UTC antes de introducirla aquí.

### Retardo entre solicitudes

Te recomendamos **no rellenar estos campos de inmediato**. Ejecuta primero algunas sincronizaciones con la configuración predeterminada. Si todo funciona bien, no hace falta configurar nada más. Si aparecen errores, vuelve y añade un pequeño retardo.

Haz clic en **Save**.

## 3. Activar e importar los productos

1. Activa el interruptor **Active** (arriba a la derecha).
2. Haz clic en **PULL WEBSITES AND STORES**. Fozzels importa tus idiomas como Stores independientes.
3. Activa los interruptores de Website y Store correspondientes.
4. Haz clic en **Pull products** para importar los productos, las categorías y sus atributos.

## Si el número de productos es inferior al esperado

Si se han importado a Fozzels menos productos de los que tienes en Pimcore, la causa más habitual son productos que no están publicados (tienen el estado **unpublished/draft**) en Pimcore. Activa el interruptor **Include unpublished objects** en los ajustes de la integración (Configuration) y vuelve a ejecutar la sincronización.

> **Consejo:** una vez activado, los productos tendrán un nuevo atributo **Published** (Yes/No). Puedes usarlo para filtrar productos en el catálogo o para limitar un flow concreto a él, por ejemplo si solo quieres procesar productos publicados.

![Filtrado de productos por el atributo Published en Manage Products](/img/kb/integration-connectivity/how-to-set-up-a-pimcore-integration/06-manage-products-published-filter.png)

Otras posibles causas son el acceso limitado a algunas de las carpetas de productos o productos repartidos en varias clases de Pimcore. En estos casos, lo mejor es ponerte en contacto con nosotros o con tu administrador de Pimcore para revisar la configuración de acceso.

Para exponer más atributos, como el indicador de publicación o tu galería de imágenes, consulta [2.11.2. Pimcore: exponer atributos mediante DataHub](/integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery).

Eso es todo: tu catálogo de Pimcore ya está conectado. Puedes actualizar los datos en cualquier momento haciendo clic de nuevo en **Pull products**.
