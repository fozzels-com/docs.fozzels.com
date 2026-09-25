---
title: 2.3.4. Migrar una integración de Shopify de Per market a Per language
sidebar_position: 5.5
slug: /integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language
description: >-
  Cómo pasar una integración de Shopify del modo Markets Per market al modo
  Per language: actualiza los scopes de la aplicación en el Shopify Dev
  Dashboard y, después, vuelve a crear la integración en Fozzels o ponte en
  contacto con el soporte.
---

La forma más limpia de pasar de Per market a Per language es actualizar los scopes de tu aplicación de Shopify y, a continuación, crear una nueva integración de Fozzels con el modo Per language. Si ya tienes flows, ponte en contacto con el soporte de Fozzels en lugar de hacer el cambio por tu cuenta.

## Antes de empezar

Esta guía está dirigida a clientes cuya integración de Shopify usa el modo **Per market** y que no necesitan contenido específico por mercado dentro de un mismo idioma. Con **Per language**, sincronizas una traducción por idioma y Shopify la aplica a todos los mercados en los que ese idioma está publicado. Esto significa menos operaciones de sincronización y un coste menor.

Comprueba primero dos cosas.

**1. ¿Tiene tu aplicación todos los scopes necesarios?** Per language necesita scopes que las versiones antiguas de la aplicación pueden no tener, sobre todo `read_publications`. Abre tu aplicación en el Shopify Dev Dashboard, ve a **Versions**, abre la versión activa y compara sus **Scopes** con la lista del paso 1. Si falta alguno, realiza el paso 1. Si están todos, pasa directamente al paso 2.

**2. ¿Ya tienes flows en Fozzels?** Esto determina cómo cambias el modo.

| Tu situación | Qué hacer |
| --- | --- |
| Aún no hay flows | Paso 1 si es necesario y, después, paso 2, opción A: archivar y volver a crear la integración |
| Ya hay flows creados | Paso 1 si es necesario y, después, ponte en contacto con el soporte de Fozzels (paso 2, opción B) |

¿Por qué no cambiar simplemente el modo en la integración existente? El cambio no elimina los sitios web y las tiendas antiguos basados en mercados. Permanecen en la tabla como inactivos, marcados con "Website is lost on integration", junto a los nuevos basados en idiomas. Los flows vinculados a las tiendas antiguas dejan de ejecutarse y la tabla se vuelve difícil de manejar.

![Tras cambiar el modo en la integración existente: sitios web antiguos marcados como perdidos, junto a los nuevos](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/01-old-websites-lost-after-mode-switch.png)

## Paso 1. Shopify: añadir los scopes que faltan

No necesitas una nueva aplicación. Creas una nueva versión de tu aplicación existente con los scopes actualizados. El Client ID y el Secret no cambian.

### 1.1. Crear una nueva versión

1. Inicia sesión en el Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Abre **Apps** y selecciona tu aplicación de Fozzels.
3. Ve a **Versions** y haz clic en **Create version**. La nueva versión se basa en tu versión activa actual, por lo que se copian todos los ajustes existentes.

![Página Versions con Create version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/02-versions-create-version.png)

![Crear una versión basada en la versión activa](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/03-create-version-from-active.png)

### 1.2. Actualizar los scopes

Desplázate hasta la sección **Access**. En las versiones antiguas de la aplicación, al campo **Scopes** a menudo le falta `read_publications`. Este es un ejemplo de lista incompleta:

![Antes: scopes sin read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/04-scopes-before-without-read-publications.png)

Sustituye el contenido del campo **Scopes** por la lista completa:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

Si también quieres sincronizar datos de peso (la opción Inventory de Fozzels), añade `read_inventory` y `write_inventory` al final de la lista.

![Después: lista completa de scopes, incluido read_publications](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/05-scopes-after-full-list.png)

Deja todo lo demás sin cambios: **Optional scopes** vacío y **Use legacy install flow** sin marcar.

### 1.3. Publicar la versión

1. Haz clic en **Release** (esquina superior derecha o final de la página).
2. Opcionalmente, introduce un nombre de versión, por ejemplo `v2`, y haz clic en **Release** para confirmar.

La nueva versión pasa a estar **Active**.

![Ventana emergente Release this new version](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/06-release-new-version-pop-up.png)

### 1.4. Aprobar los nuevos permisos en tu tienda

Publicar una versión todavía no concede a la aplicación los nuevos permisos. El propietario de la tienda tiene que aprobarlos instalando de nuevo la aplicación. Hasta entonces, Per language no funcionará correctamente.

1. Abre la página **Overview** de la aplicación y haz clic en **Install app**, o abre el enlace de instalación desde **Distribution** si usas Custom distribution.
2. Si se te solicita, inicia sesión con la cuenta del propietario de la tienda.
3. Revisa la lista de accesos y confirma la instalación.

## Paso 2. Fozzels: cambiar a Per language

### Opción A: aún no hay flows — archivar y volver a crear

Así obtienes una tabla Websites & Stores limpia, solo con los nuevos sitios web basados en idiomas.

1. Antes de empezar, copia los valores actuales de **Api Key**, **Api Secret** y **App Host Name** del paso Configuration de la integración, o toma el Client ID y el Secret de **App settings → Credentials** en el Shopify Dev Dashboard.
2. Abre la integración actual y desactiva el interruptor **Active**.
3. Archiva la integración.
4. Crea una nueva integración de Shopify: **Integrations → Shopify**, método de conexión **Custom App**.
5. Introduce los mismos **URL**, **Api Key**, **Api Secret** y **App Host Name**.
6. En **Markets mode**, elige **Per language**.
7. Configura los ajustes opcionales si los usabas antes (Inventory, Global Pull Schedule, retardos) y haz clic en **Save**.
8. Activa **Active** y haz clic en **Pull Websites and Stores**.
9. Activa **Status** para cada sitio web y su tienda y, a continuación, haz clic en **Pull products**.

![Nueva integración: credenciales y modo Markets establecido en Per language](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/07-new-integration-per-language.png)

Para ver la descripción completa de cada campo, consulta [2.3.2. Conectar tiendas Shopify a Fozzels mediante el Shopify Dev Dashboard](/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026).

### Opción B: ya hay flows creados — ponte en contacto con el soporte

Ponte en contacto con el soporte de Fozzels antes de cambiar el modo. Te ayudaremos a hacer el cambio manteniendo tus flows en funcionamiento y comprobaremos los códigos de configuración regional en Shopify, que pueden cambiar durante el proceso.

## Después de la migración

En el modo Per language, cada idioma publicado es un sitio web independiente con una tienda.

![Per language: un sitio web con una tienda por idioma](/img/kb/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language/08-per-language-websites-and-stores.png)

- [ ] La versión activa de la aplicación en Shopify incluye `read_publications` y todos los demás scopes necesarios
- [ ] El propietario de la tienda ha aprobado los nuevos permisos (aplicación instalada de nuevo)
- [ ] La integración usa **Per language**
- [ ] **Authorized** y **REST API Connected** están en verde
- [ ] Los sitios web y las tiendas están activos para los idiomas que necesitas
- [ ] Las cuatro extracciones (Product Attribute, Category Attribute, Category, Product) han finalizado al 100 %
- [ ] Los flows se han reconstruido en las nuevas tiendas, o el soporte ha confirmado el cambio (opción B)
