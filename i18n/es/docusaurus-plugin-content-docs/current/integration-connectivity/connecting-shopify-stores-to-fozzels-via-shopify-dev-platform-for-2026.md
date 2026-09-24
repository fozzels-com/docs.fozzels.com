---
id: '103000385597'
title: 2.3.2. Conectar tiendas Shopify a Fozzels mediante el Shopify Dev Dashboard
sidebar_position: 4
slug: >-
  /integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026
description: >-
  Desde el 1 de enero de 2026, las tiendas Shopify se conectan a través del
  Shopify Dev Dashboard. Cómo crear e instalar la aplicación en Shopify y
  conectarla en Fozzels, paso a paso.
---

Desde el 1 de enero de 2026, Shopify ya no permite crear Private Apps en el panel de administración de la tienda. Las nuevas conexiones y las actualizaciones de integraciones existentes se configuran a través del Shopify Dev Dashboard. Esta guía te acompaña por ambas partes: crear e instalar la aplicación en Shopify (Parte 1) y conectarla en Fozzels (Parte 2).

## Antes de empezar: encuentra tu dominio .myshopify.com

Fozzels necesita la dirección .myshopify.com de tu tienda, no el dominio público de la tienda (como www.yourbrand.com). Esta dirección se asignó al crear la tienda y no se puede cambiar, por lo que puede ser distinta del nombre de tu marca.

Puedes encontrarla en tres lugares del panel de administración de Shopify:

1. **Barra lateral de Settings:** abre **Settings**. Tu dominio .myshopify.com aparece debajo del nombre de la tienda, en la parte superior de la barra lateral.
2. **Settings → Domains:** la página Domains muestra todos tus dominios. Usa el que termina en .myshopify.com, aunque no esté marcado como **Primary**.
3. **Barra de direcciones del navegador:** dentro del panel de administración, la URL tiene este aspecto: `https://admin.shopify.com/store/your-store`. Toma la parte que sigue a `/store/` y añade `.myshopify.com`: `your-store.myshopify.com`.

![Settings → Domains: el dominio .myshopify.com en la barra lateral y en la lista](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/01-settings-domains-myshopify-domain.png)

Utilizarás este dominio en dos formatos:

| Dónde | Formato |
| --- | --- |
| App URL (Shopify), URL (Fozzels) | `https://your-store.myshopify.com` |
| Store domain (distribución de Shopify), App Host Name (Fozzels) | `your-store.myshopify.com` |

## Parte 1. Shopify: crear la aplicación

### 1. Crear la aplicación

1. Inicia sesión en el Shopify Dev Dashboard: [https://dev.shopify.com/dashboard](https://dev.shopify.com/dashboard).
2. Abre **Apps** en la barra lateral izquierda y haz clic en **Create app** en la esquina superior derecha. Según el tipo de cuenta, la interfaz puede verse ligeramente diferente. Si no ves el botón, desplázate hasta el final de la página y haz clic en el enlace **Create app**.
3. En **Start from Dev Dashboard** (la opción de la derecha), introduce un nombre para la aplicación, por ejemplo `Fozzels_APP`, y haz clic en **Create app**. Esta opción te proporciona credenciales de API sin usar la línea de comandos.

![Dev Dashboard: Apps y Create app](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/02-dev-dashboard-apps-create-app.png)

![Crear una aplicación: Start from Dev Dashboard](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/03-start-from-dev-dashboard.png)

### 2. Configurar la versión

Después de crear la aplicación, llegas a la página **Create version**. Shopify ya ha creado una versión inicial (por ejemplo `fozzels_app-1`). Tu configuración se publicará como una nueva versión basada en ella.

1. **App name:** mantén el nombre o cámbialo.
2. **App URL:** introduce la URL de tu tienda con https, por ejemplo `https://your-store.myshopify.com`.
3. **Embed app in Shopify admin:** debe estar activado. Así se muestra la interfaz de Fozzels dentro de tu panel de administración de Shopify.
4. **Webhooks API version:** selecciona la última versión estable disponible.

![Create version: App URL, Embed app in Shopify admin, Webhooks API version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/04-create-version-app-url-and-embed.png)

### 3. Añadir los scopes

Desplázate hasta la sección **Access**. Pega la lista siguiente en el campo **Scopes**, o haz clic en **Select scopes** y busca cada permiso con la barra de búsqueda.

Scopes obligatorios, listos para copiar y pegar:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications
```

| Grupo | Scopes |
| --- | --- |
| Productos | `read_product_listings`, `read_products`, `write_products`, `read_product_feeds` |
| Metadatos | `read_metaobject_definitions`, `read_metaobjects` |
| Traducciones | `read_translations`, `write_translations`, `read_publications` |
| Configuraciones regionales | `read_locales` |
| Mercados | `read_markets`, `write_markets` |

Estos scopes son obligatorios para todos los tipos de tienda, incluidas las tiendas que usan Shopify Markets y varios idiomas.

**¿Tienes previsto sincronizar datos de peso?** Añade también ahora `read_inventory` y `write_inventory`. Solo se necesitan para el ajuste opcional Inventory de Fozzels (paso 10), pero añadirlos ahora te evita tener que crear una nueva versión de la aplicación más adelante. Lista completa, incluido el inventario:

```
read_locales,read_markets,write_markets,read_metaobject_definitions,read_metaobjects,read_product_feeds,read_product_listings,read_products,write_products,read_translations,write_translations,read_publications,read_inventory,write_inventory
```

Deja el resto de la sección tal como está:

- **Optional scopes:** déjalo vacío.
- **Use legacy install flow:** déjalo sin marcar.
- **Allowed redirection URL(s):** déjalo vacío.

El aviso "Some scopes require Shopify permission" no se aplica a los scopes que necesita Fozzels, así que no tienes que solicitar acceso.

![Access: los 12 scopes obligatorios](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/05-access-required-scopes.png)

### 4. Publicar la versión

1. Haz clic en **Release**. El botón está disponible tanto en la esquina superior derecha como al final de la página.
2. En la ventana emergente, introduce opcionalmente un **Version name** (por ejemplo `v1`) y un **Version message**. Si dejas el nombre vacío, Shopify genera uno.
3. Haz clic en **Release** para confirmar.

La nueva versión aparece en la página **Versions** con el estado **Active**.

![Ventana emergente Release this new version](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/06-release-new-version-pop-up.png)

![Versions: v1 Active](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/07-versions-v1-active.png)

### 5. Instalar la aplicación en tu tienda

Los pasos de instalación dependen del tipo de cuenta de Shopify. Para empezar, abre la página **Overview** de tu aplicación haciendo clic en su nombre en la barra lateral izquierda.

![Overview de la aplicación: Installs y Distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/08-app-overview-installs-and-distribution.png)

#### Opción A: una sola tienda (sin cuenta de Partner)

1. En el bloque **Installs**, haz clic en **Install app**.
2. Si se te solicita, inicia sesión con el **correo electrónico del propietario de la tienda**. Solo el propietario de la tienda puede aprobar la instalación.
3. En la página **Install app** del panel de administración de tu tienda, revisa la lista de accesos y haz clic en **Install**.

No es necesario configurar la distribución. Continúa con el paso 6.

#### Opción B: una cuenta de Partner o varias tiendas

Primero configuras **Custom distribution** para generar un enlace de instalación para una tienda concreta.

1. En el bloque **Distribution**, haz clic en **Select distribution method**. Se abre la aplicación en **Shopify Partners**, una interfaz independiente.
2. Selecciona **Custom distribution** y haz clic en **Select**.
3. Confirma con **Select custom distribution**.

> **Advertencia:** la elección de Custom distribution no se puede deshacer. A partir de ese momento, la aplicación solo se puede instalar en una tienda o dentro de una organización Plus.

![Shopify Partners: métodos de distribución](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/09-partners-distribution-methods.png)

![Custom distribution seleccionada](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/10-custom-distribution-selected.png)

![Confirmación de Select custom distribution](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/11-select-custom-distribution-confirmation.png)

4. En **Store domain**, introduce el dominio de tu tienda con el formato `your-store.myshopify.com`.
5. Deja sin marcar **Allow multi-store install for one Plus organization**.
6. Haz clic en **Generate link** y confirma.

> **Advertencia:** esta confirmación tampoco se puede deshacer. La aplicación solo estará disponible para instalarse en la tienda que hayas introducido.

![Custom distribution: Store domain](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/12-custom-distribution-store-domain.png)

![Confirmación de Generate link para la instalación en una sola tienda](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/13-generate-link-confirmation.png)

7. Shopify muestra el **Install link**. Haz clic en **Copy**.
8. Abre el enlace en un navegador en el que hayas iniciado sesión en el panel de administración de la tienda, o envíaselo al propietario de la tienda. Esto resulta práctico para las agencias: el propietario de la tienda puede completar la instalación por sí mismo.
9. En la página **Install app**, comprueba que aparece **This app is exclusive to your store**, revisa la lista de accesos y haz clic en **Install**.

![Install link con Copy](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/14-install-link-copy.png)

![Página Install app en el panel de administración de la tienda](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/15-install-app-in-store-admin.png)

El texto debajo de "This app is exclusive to your store" depende del tipo de tienda y puede diferir de la captura de pantalla. La lista de accesos debe incluir **Products, custom data, other data**. Si solo ves Products, faltan algunos scopes: vuelve al paso 3.

Tras la instalación, la aplicación aparece en **Apps**, en la barra lateral del panel de administración de tu tienda.

### 6. Copiar las credenciales de API

1. En el Dev Dashboard, abre **App settings** en la barra lateral izquierda de tu aplicación.
2. En el bloque **Credentials**, copia el **Client ID**.
3. Haz clic en el icono del ojo junto a **Secret** para mostrarlo y cópialo.

Los pegarás en Fozzels en el paso 8.

![App settings: Credentials](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/16-app-settings-credentials.png)

> **Advertencia:** no hagas clic en **Rotate** a menos que sea necesario. Genera un nuevo Secret y el anterior deja de funcionar de inmediato, lo que interrumpe tu conexión con Fozzels hasta que actualices el Secret en Fozzels.

Guarda las credenciales de forma segura, por ejemplo en un gestor de contraseñas. No las envíes por correo electrónico ni por chat: el Secret da acceso a los productos y las traducciones de tu tienda.

## Parte 2. Fozzels: conectar la tienda

### 7. Crear la integración

1. Inicia sesión en Fozzels en [https://app.fozzels.com](https://app.fozzels.com) y abre **Integrations** en la barra lateral izquierda.
2. En la pantalla **Choose your integration**, selecciona **Shopify**.
3. En el paso **Configuration**, rellena:
    - **Name:** cualquier nombre que te ayude a reconocer la integración.
    - **URL:** la dirección .myshopify.com de tu tienda con https, por ejemplo `https://your-store.myshopify.com`. No uses tu dominio personalizado.
4. En **Connection Method**, elige **Custom App**.

![Fozzels: Choose your integration](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/17-fozzels-choose-your-integration.png)

![Create New Integration: Configuration y Custom App](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/18-fozzels-configuration-custom-app.png)

Los otros métodos de conexión: **Fozzels Shopify App (OAuth)** se conecta a través de la aplicación oficial de Fozzels y no requiere crear tu propia aplicación (consulta [2.3.1. Aplicación Fozzels Shopify — Comenzar](/integration-connectivity/fozzels-shopify-app-getting-started)). **Legacy (Manual)** es para conexiones configuradas con el método antiguo.

### 8. Introducir las credenciales de API

| Campo de Fozzels | Qué introducir |
| --- | --- |
| Api Key | Client ID del paso 6 |
| Api Secret | Secret del paso 6 |
| App Host Name | `your-store.myshopify.com`, sin https |

No necesitas un token de acceso: Fozzels lo genera automáticamente.

### 9. Elegir el modo Markets

El modo Markets define cómo se distribuye el contenido entre tus mercados e idiomas de Shopify. Elígelo con cuidado: cambiarlo más adelante no es un simple cambio de ajuste (consulta [¿Necesitas cambiar el modo Markets más adelante?](#need-to-change-the-markets-mode-later) al final de esta guía).

**Opción 1: traducciones.** Necesitas el mismo contenido para todos los mercados que comparten un idioma, traducido a cada idioma publicado. Elige **Per language**, o **No markets** para la configuración más sencilla con un solo sitio.

**Opción 2: contenido único por mercado e idioma.** Necesitas contenido diferente para cada mercado, incluso dentro del mismo idioma, por ejemplo distintos enfoques de marketing por región. Elige **Per market**.

| Modo | Qué se convierte en un sitio web | Qué se sincroniza |
| --- | --- | --- |
| No markets | Un sitio web, con una tienda por idioma publicado | Una traducción por idioma; los mercados se ignoran |
| Per market | Cada mercado de Shopify, con una tienda por idioma | Cada combinación de mercado e idioma por separado |
| Per language | Cada idioma publicado | Una traducción por idioma, que Shopify aplica a todos los mercados con ese idioma |

¿Usas LangShop? Solo funciona con **No markets** y **Per language**.

![Credenciales de API y modo Markets](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/19-fozzels-api-credentials-and-markets-mode.png)

### 10. Ajustes opcionales

Si no estás seguro de necesitar estos ajustes, deja los valores predeterminados.

**Inventory.** Activa este interruptor para sincronizar los datos de peso de la primera variante del producto. Fozzels extrae dos atributos adicionales, **Weight** y **Weight Unit** (ambos de tipo select), y puede enviarlos de vuelta a Shopify.

> **Advertencia:** Inventory requiere los scopes `read_inventory` y `write_inventory`. Si no los añadiste en el paso 3, crea una nueva versión de la aplicación con estos scopes, publícala y vuelve a instalar la aplicación antes de activar Inventory. Si el interruptor está activado sin estos scopes, Fozzels no puede leer ningún producto.

**Global Pull Schedule.** De forma predeterminada, Fozzels extrae los productos de todas las tiendas activas de la integración a las 02:30. Para establecer otra hora para toda la integración, activa **Overwrite Global Pull Schedule** y elige la hora. Una tienda concreta puede tener su propia programación en los ajustes de esa tienda. Más información en [3.1.2 Cómo configurar la programación global de extracción y la limitación de la API](/data-import-and-quality/how-to-configure-global-pull-schedule-api-throttling).

**Delay between pages y Delay between requests.** Úsalos solo si las extracciones fallan por los límites de frecuencia de la API de Shopify. Déjalos vacíos para usar los valores predeterminados de la plataforma.

| Campo | Qué hace | Rango | Valor predeterminado de Shopify |
| --- | --- | --- | --- |
| Delay between pages | Pausa después de cada página de resultados | 100–15000 ms | 2000 ms |
| Delay between requests | Pausa entre solicitudes individuales a la API | 100–15000 ms | ninguno |

Los valores inferiores a los predeterminados pueden activar la limitación de frecuencia y hacer que las extracciones fallen.

![Opciones: Inventory, Global Pull Schedule, retardos y Save](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/20-fozzels-optional-settings.png)

### 11. Guardar

Haz clic en **Save** al final de la página.

### 12. Activar la integración y extraer los sitios web y las tiendas

Después de hacer clic en **Save**, Fozzels muestra "Integration was created successfully" y abre el paso **Websites & Stores**. El panel de estado de la esquina superior derecha muestra **Active** desactivado, **Authorized** en rojo y **REST API Connected** con una advertencia. Es lo esperado en esta fase.

1. Activa el interruptor **Active** en la esquina superior derecha. Fozzels se autoriza con Shopify y genera el token de acceso.
2. Haz clic en **Pull Websites and Stores**.

**Authorized** y **REST API Connected** deberían ponerse en verde.

![Después de Save: panel de estado y Pull Websites and Stores](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/21-fozzels-status-after-save.png)

Si **Authorized** sigue en rojo, comprueba que la aplicación está instalada en tu tienda (paso 5), que Api Key y Api Secret coinciden con el Client ID y el Secret, y que App Host Name es tu nombre de host .myshopify.com sin https.

### 13. Activar los sitios web y las tiendas

La tabla muestra ahora tus sitios web y sus tiendas. La estructura depende del modo Markets del paso 9. En el modo **Per language**, cada idioma publicado es un sitio web independiente con una tienda.

Una estrella junto a un sitio web indica el sitio web predeterminado. Una estrella junto a una tienda indica la tienda predeterminada de ese sitio web.

Para cada sitio web con el que quieras trabajar, activa **ambos** interruptores: **Status** en la sección Websites y **Status** en la sección Stores. **Pull products** solo está disponible cuando ambos están activados.

![Tabla Websites & Stores después de la extracción](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/22-fozzels-websites-and-stores-table.png)

### 14. Extraer los productos

1. Haz clic en **Pull products** en la fila de una tienda activa. Fozzels inicia cuatro extracciones a la vez: **Product Attribute**, **Category Attribute**, **Category** y **Product**.
2. Para seguir cada una, haz clic en la flecha junto a la barra de progreso.
3. Cuando las cuatro barras de progreso estén en verde al 100 %, la extracción habrá finalizado. La columna **Products** muestra el número de productos extraídos.

![Progreso de la extracción: cuatro extracciones al 100 %](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/23-fozzels-pull-progress.png)

**Tu conexión con Shopify está lista.** Ya puedes empezar a crear flows y generar tu primer contenido.

Tras la primera extracción, las **Product Pull Conditions** pasan a estar disponibles en el paso Websites & Stores. Te permiten filtrar qué productos se importan. Esto se trata en un artículo aparte.

## ¿Necesitas cambiar el modo Markets más adelante? {#need-to-change-the-markets-mode-later}

Cambiar el modo Markets, en cualquier dirección, no elimina los sitios web y las tiendas antiguos. Permanecen en la tabla Websites & Stores como inactivos, marcados con "Website is lost on integration", junto a los nuevos, que se crean y activan automáticamente. Los flows vinculados a las tiendas antiguas dejan de ejecutarse.

![Tras cambiar de Per language a Per market: sitios web antiguos inactivos junto a los nuevos](/img/kb/integration-connectivity/connecting-shopify-stores-to-fozzels-via-shopify-dev-platform-for-2026/24-old-websites-lost-after-mode-switch.png)

- **Aún no has creado flows:** empieza de nuevo para tener una tabla limpia. Desactiva la integración actual, archívala y crea una nueva integración con los mismos Api Key, Api Secret y App Host Name, eligiendo el modo Markets correcto. No necesitas una nueva aplicación en Shopify.
- **Ya has creado flows:** ponte en contacto con el soporte de Fozzels antes de cambiar el modo. Te ayudaremos a hacer el cambio sin perder tu trabajo.

Como el código de configuración regional en Shopify puede cambiar, te recomendamos en cualquier caso cambiar el modo a través del soporte de Fozzels.

¿Quieres pasar concretamente de Per market a Per language? Consulta [2.3.4. Migrar una integración de Shopify de Per market a Per language](/integration-connectivity/migrating-a-shopify-integration-from-per-market-to-per-language).
