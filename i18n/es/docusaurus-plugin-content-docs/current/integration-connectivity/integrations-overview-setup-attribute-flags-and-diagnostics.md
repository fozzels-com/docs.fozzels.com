---
title: Integraciones - Descripción General, Configuración, Indicadores de Atributo y Diagnósticos
sidebar_position: 21
slug: /integration-connectivity/integrations-overview-setup-attribute-flags-and-diagnostics
description: Una Integración es una conexión segura entre Fozzels y su tienda de comercio electrónico o PIM. Esta guía cubre plataformas compatibles, pasos de configuración, indicadores de atributo, programas de extracción, notas específicas de la plataforma y la referencia completa de diagnósticos de WooCommerce.
keywords:
- extracción
- finalización
---

Una Integración es una conexión segura entre Fozzels y su tienda de comercio electrónico o sistema PIM. Una vez conectada, Fozzels puede extraer sus datos de producto e insertar contenido generado por IA nuevamente en su tienda.

## Plataformas compatibles

- **Shopify**: compatibilidad completa incluyendo Shopify Markets (multiidioma)
- **Magento 2**: incluyendo configuraciones de múltiples sitios web y múltiples tiendas
- **WooCommerce**: a través de REST API
- **Shopware 6**
- **Lightspeed**
- **Akeneo**: sistema PIM
- **Katana PIM**
- **BizzLayer**
- **EK Retail**
- **NextChapter**
- **StoreInfo Catalog XML**

## Jerarquía de integración

Integración → Sitio(s) Web → Tienda(s) → Productos y Atributos

Cada integración puede contener múltiples sitios web, y cada sitio web puede contener múltiples tiendas (p. ej. diferentes idiomas o regiones).

---

## Configuración de una integración

### Paso 1: Crear la integración

- Vaya a [Integrations](https://app.fozzels.com/integrations/definitions)
- Haga clic en **Add Integration** y seleccione su plataforma
- Ingrese un nombre, su URL de tienda y credenciales de plataforma
- Guarde: Fozzels validará la conexión

### Paso 2: Sincronizar sitios web y tiendas

- Después de guardar, haga clic en **Synchronize** para extraer la lista de sitios web y tiendas de su plataforma
- Active los sitios web y tiendas que desea usar
- Nota: activar tiendas cuenta contra su cuota de plan

### Paso 3: Extraer productos

- Una vez que las tiendas estén activas, dispare una **Product Pull**
- Fozzels importa todos los productos con sus atributos e imágenes
- Puede monitorear el progreso de extracción en tiempo real (muestra elementos procesados / total)

### Paso 4: Configurar atributos

- Vaya a la pestaña **Attributes** de su integración
- Habilite los atributos que desea usar
- Establezca la bandera **Filterable** en atributos que desea filtrar productos o usar como entrada en Flows
- Establezca la bandera **Mutable** en atributos donde se escribirá contenido generado por IA

---

## Indicadores de atributo explicados

| Indicador | Qué hace |
|------|-------------|
| **Filterable** | El atributo aparece en el filtro del Catálogo y puede usarse como entrada en avisos de Flow (`{{attribute_code}}`) |
| **Mutable** | Fozzels puede escribir contenido generado por IA en este atributo (requerido para salida de Flow) |
| **Enabled** | El atributo está activo y visible en Fozzels |
| **HTML-able** | Permite contenido HTML en este atributo (solo tipos texto/textarea) |

> Si no puede seleccionar un atributo como destino de Flow: verifique que tenga la bandera **Mutable** habilitada.
>
> Si un atributo no aparece en el filtro del Catálogo o aviso de Flow: verifique que tenga la bandera **Filterable** habilitada.

---

## Programa de extracción

Fozzels puede extraer productos automáticamente y ejecutar Flows en un programa:

1. Product Pull: obtiene los datos de producto más recientes de su tienda
2. Flow Sync: coincide productos con Flows activos
3. Attribute Refresh: actualiza valores de atributo
4. AI Generation: genera contenido
5. Data Export: inserta contenido nuevamente en su tienda

Puede establecer una hora de extracción personalizada (formato: `HH:MM`, p. ej. `14:00`) por integración o por tienda. Si no se establece, se utiliza el predeterminado del sistema (00:30 UTC).

Para cambiar su zona horaria, vaya a [Settings → Profile](https://app.fozzels.com/user/settings/profile).

---

## Estado de integración

| Estado | Significado |
|--------|---------|
| **Active** | La integración está habilitada y procesará datos |
| **Authorized** | Las credenciales son válidas (solo Shopify) |
| **REST API Connected** | Se pasó la prueba de conexión en vivo |

> La integración debe estar **Active** para cualquier extracción o inserción.

---

## Configuración específica de plataforma

### Shopify

1. En Shopify Admin vaya a: Settings → Apps → Develop apps → Create an app
2. Alcances API requeridos: `read_product_listings`, `read_products`, `write_products`, `read_metaobject_definitions`, `read_metaobjects`, `read_product_feeds`
3. Para Shopify Markets (multiidioma) también agregue: `write_translations`, `read_translations`, `write_markets`, `read_markets`, `read_locales`
4. En Fozzels ingrese: API key, API Secret y su URL `.myshopify.com`
5. El estado de integración debe mostrar **Authorized: yes** Y **REST API Connected: yes**

### Magento 2

1. En Magento Admin vaya a: System → Integrations → Add Integration
2. Copie: Consumer Key, Consumer Secret, Access Token, Access Token Secret
3. También ingrese `admin_front_name` (usualmente `admin`)
4. **Importante:** Agregue manualmente el atributo `fozzels_completion_date` a TODOS los Attribute Sets en Magento Admin (Catalog → Attributes → Attribute Sets). Fozzels no puede hacer esto automáticamente porque Magento soporta múltiples attribute sets por tienda.
5. Después de guardar: active la integración → sincronice sitios web/tiendas → extraiga productos

### WooCommerce

- Genere una clave de REST API en WooCommerce → Settings → Advanced → REST API
- Permisos requeridos: Read/Write
- Ingrese Consumer Key y Consumer Secret en Fozzels

#### Integraciones de complementos opcionales de WooCommerce

Las integraciones de WooCommerce soportan cuatro indicadores de complemento opcionales. Cada uno requiere complementos de WordPress adicionales instalados.

**ACF (Advanced Custom Fields)**

- Habilite con: toggle "Enable ACF (Advanced Custom Fields)" en configuración de integración de Fozzels
- Complementos de WordPress requeridos: "Advanced Custom Fields" Y "ACF to REST API"
- Qué hace: extrae campos de producto personalizados definidos en ACF en Fozzels como atributos (con prefijo `acf_`)
- Escritura de vuelta: los valores de ACF se escriben a través del punto final `meta_data` de WooCommerce

**Yoast SEO**

- Habilite con: toggle "Yoast WooCommerce SEO" en configuración de integración de Fozzels
- Complementos de WordPress requeridos: "Yoast SEO" Y "Fozzels SEO Fields REST API for WooCommerce" (complemento puente, descargar desde app.fozzels.com)
- Qué hace: extrae título de Yoast SEO, meta description y focus keyword como atributos (con prefijo `yoast_`)
- Escritura de vuelta: los valores se escriben a través de la clave `seo_fields` en la REST API de WooCommerce

**All in One SEO (AIOSEO)**

- Habilite con: toggle "All in One SEO" en configuración de integración de Fozzels
- Complementos de WordPress requeridos: "All in One SEO" Y "AIOSEO API Sync" (complemento puente, descargar desde app.fozzels.com)
- Qué hace: extrae título SEO, description, keywords, campos Open Graph, campos Twitter y focus keyphrase como atributos (con prefijo `aioseo_`)
- Escritura de vuelta: los valores se escriben a través de la clave `aioseo` en la REST API de WooCommerce

**WPML (Multilingüe)**

- Habilite con: toggle "Enable WPML Multilingual Support" en configuración de integración de Fozzels
- Complemento de WordPress requerido: WPML
- Qué hace: crea una tienda separada de Fozzels por idioma; los productos se extraen por idioma usando la URL con prefijo de idioma (p. ej. `/de/wp-json/wc/v3/products`)
- Después de habilitar: vaya a Integración → Synchronize para crear las tiendas de idioma

---

#### Diagnósticos de conexión y complementos de WooCommerce

Cuando prueba la conexión o ejecuta una extracción de producto, Fozzels verifica cada complemento habilitado. Aquí están todos los errores posibles y cómo solucionarlos:

**Errores de conexión**

| Error | Significado | Solución |
|-------|---------|-----|
| WordPress was not found at the provided URL | La URL no apunta a un sitio de WordPress | Verifique que la URL sea correcta y públicamente accesible |
| WooCommerce REST API is not available | WooCommerce no instalado o REST API deshabilitado | Instale WooCommerce y habilite REST API en WooCommerce → Settings → Advanced |
| Unable to connect to the store | Problema de red/DNS | Verifique que la URL sea alcanzable desde Internet |
| The connection timed out | La tienda es inalcanzable o el firewall está bloqueando | Verifique el firewall del servidor y asegúrese de que la URL sea públicamente accesible |
| Invalid API credentials | Consumer Key o Consumer Secret incorrectos | Genere una nueva clave API en WooCommerce → Settings → Advanced → REST API |

**Errores de ACF**

| Error | Significado | Solución |
|-------|---------|-----|
| Both "Advanced Custom Fields" and "ACF to REST API" plugins are required | Uno o ambos complementos faltantes | Instale y active ambos complementos en administrador de WordPress |
| "ACF to REST API" is active but "Advanced Custom Fields" is not installed | Complemento puente instalado pero complemento ACF principal faltante | Instale y active el complemento "Advanced Custom Fields" |
| Failed to verify ACF plugin status | No se pudo alcanzar el punto final de verificación de complemento | Verifique la conectividad de WordPress e intente nuevamente |

**Errores de Yoast SEO**

| Error | Significado | Solución |
|-------|---------|-----|
| Both "Yoast SEO" and "Yoast SEO WooCommerce REST API by Fozzels" plugins are required | Uno o ambos complementos faltantes | Instale y active ambos complementos en administrador de WordPress |
| "Yoast SEO" is active but the "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed | Complemento puente faltante | Descargue el complemento puente desde app.fozzels.com y actívelo |
| Your "Fozzels SEO Fields REST API for WooCommerce" plugin is outdated | Versión antigua del complemento puente | Descargue e instale la última versión desde app.fozzels.com |
| The "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed or not active | Complemento puente no encontrado | Descargue desde app.fozzels.com y active en administrador de WordPress |
| Failed to verify Yoast SEO plugin status | No se pudo alcanzar el punto final de verificación de complemento | Verifique la conectividad de WordPress e intente nuevamente |

**Errores de AIOSEO**

| Error | Significado | Solución |
|-------|---------|-----|
| Both "All in One SEO" and "AIOSEO API Sync" plugins are required | Uno o ambos complementos faltantes | Instale y active ambos complementos en administrador de WordPress |
| "All in One SEO" is active but the "AIOSEO API Sync" plugin is not installed | Complemento puente faltante | Descargue el complemento AIOSEO API Sync desde app.fozzels.com y actívelo |
| Your "AIOSEO API Sync" plugin is outdated | Versión antigua del complemento puente | Descargue e instale la última versión desde app.fozzels.com |
| The "AIOSEO API Sync" plugin is not installed or not active | Complemento puente no encontrado | Descargue desde app.fozzels.com y active en administrador de WordPress |
| Failed to verify All in One SEO plugin status | No se pudo alcanzar el punto final de verificación de complemento | Verifique la conectividad de WordPress e intente nuevamente |

**Errores de WPML**

| Error | Significado | Solución |
|-------|---------|-----|
| WPML plugin is not active or not installed | WPML no encontrado en WordPress | Instale y active el complemento WPML en administrador de WordPress |
| WPML is active but no languages are configured | WPML instalado pero sin idiomas agregados | Vaya a WPML → Languages y agregue al menos un idioma adicional |

**Errores de conflicto**

| Error | Significado | Solución |
|-------|---------|-----|
| Both Yoast SEO and All in One SEO are active at the same time | Conflicto de complemento | Usar ambos simultáneamente puede causar conflictos: deshabilite uno de ellos en administrador de WordPress |

**General**

| Error | Significado | Solución |
|-------|---------|-----|
| An unexpected error occurred while connecting | Error desconocido | Intente nuevamente; si el problema persiste contacte a soporte de Fozzels |

---

## Problemas comunes

**La integración no está extrayendo productos**

- Verifique que el toggle **Active** esté ACTIVADO
- Verifique que los sitios web y tiendas estén activados
- Dispare una extracción manual desde la página de integración

**Los atributos no aparecen en el filtro del Catálogo o avisos de Flow**

- El atributo necesita la bandera **Filterable**: vaya a Integración → Atributos y habilítela

**No puedo establecer un atributo como destino de salida de Flow**

- El atributo necesita la bandera **Mutable**: vaya a Integración → Atributos y habilítela

**Problemas de conexión de Shopify**

- Tanto **Authorized** como **REST API Connected** deben estar en verde
- Verifique que todos los alcances API requeridos estén habilitados en su aplicación personalizada de Shopify

**Magento: `fozzels_completion_date` faltante**

- Esto debe agregarse manualmente a cada Attribute Set en Magento Admin
- Vaya a: Catalog → Attributes → Attribute Sets → abra cada conjunto → agregue el atributo

**Cuota de tienda excedida**

- Ha alcanzado el número máximo de tiendas activas en su plan
- Desactive tiendas no utilizadas o actualice su plan en [Plans](https://app.fozzels.com/user/settings/plans)

**Productos marcados como "lost"**

- Los productos o tiendas fueron eliminados de la plataforma de origen
- Los elementos perdidos se conservan en Fozzels como referencia pero no se sincronizarán

---

## Administración de integraciones

- **Archive**: deshabilita la integración y la oculta de la lista principal; los datos se preservan y pueden restaurarse
- **Pull progress**: barra de progreso en tiempo real mostrando elementos procesados; puede pausarse o detenerse
- **Bulk attribute update**: seleccione múltiples atributos y cambie indicadores a la vez
- **Auto-detect blank**: encuentra automáticamente atributos sin valores en todos los productos
