---
title: 'FAQ: Integraciones y Sincronización'
sidebar_position: 9
unlisted: true
slug: /frequently-asked-questions/faq-integrations-and-synchronization
description: Extracciones parciales de productos, problemas de conexión de Shopware y Shopify, variantes y Packs, HTML en atributos, plugins de WooCommerce, límites de velocidad, extracciones de imágenes y problemas de URL de múltiples tiendas.
---

## La extracción automática de producto solo recupera parte de mi catálogo. ¿Cómo obtengo todos los productos?

Si su catálogo excede los límites de API predeterminados, la extracción puede no recuperar todos los productos. Solicite un aumento del límite de API a su proveedor de PIM. Como solución temporal, el equipo de Fozzels puede completar la extracción manualmente.

## Los límites de API fueron aumentados pero la extracción de producto aún no funciona.

El proveedor de PIM puede necesitar reiniciar sus servicios. Póngase en contacto con ellos para confirmar que los cambios están activos. El soporte de Fozzels puede realizar una extracción manual mientras se resuelve el problema.

## Fozzels no puede establecer una conexión API REST con mi tienda Shopware.

Verifique dos veces el ID de Clave de Acceso y Clave de Acceso Seguro. Si son correctos, el problema es probable que sean permisos de acceso. En el panel de administración de Shopware vaya a Configuración → Sistema → Integraciones, abra la integración de Fozzels, active el toggle **Administrator** y guarde.

## Fozzels requiere acceso de Administrador en Shopware pero me preocupa la privacidad.

Actualmente se requiere el rol Administrador para que Fozzels lea datos de producto. Si otorgar acceso de administrador completo es una preocupación, póngase en contacto con el equipo de Fozzels para discutir si es posible una configuración más restringida.

## Mis claves API son inválidas. ¿Qué debo verificar?

Asegúrese de enviar el tipo de clave correcto (clave de Integración que comienza con `SWIA...`, no una clave de Canal de Ventas). Verifique que la clave secreta no fue truncada durante copiar/pegar. Intente crear una nueva Integración y enviar claves frescas.

## El contenido se genera en Fozzels pero no aparece en mi tienda Shopware.

Esto puede suceder cuando la sincronización falla para productos específicos debido a atributos faltantes, problemas de permisos o configuración de variante. Póngase en contacto con el soporte con ejemplos de productos específicos.

## ¿Cómo maneja Fozzels productos con muchas variantes (tamaños, colores)?

Fozzels tiene una característica **Packs** que agrupa variantes — todos los tamaños del mismo color se tratan como un producto. Agregue el filtro "Pack Parent ID is not empty" en su flujo para usar esta característica.

## Las etiquetas HTML (por ejemplo, `<p>`) aparecen en campos de Shopify. ¿Cómo lo arreglo?

Deshabilite el soporte HTML para el atributo: pestaña Atributos → Editar (icono de lápiz) → Marcas Técnicas → deshabilite **Allow HTML** → Guardar. Luego regenere y verifique.

## ¿Puede Fozzels escribir texto sin formato (sin HTML) a mi PIM?

Sí. Vaya a la pestaña Atributos → Editar Atributo → desmarque **Allow HTML** → Guardar.

## Recibo un error "Website is not active" al hacer clic en Save and Preview.

Esto puede ocurrir debido a problemas de conexión temporal después de una actualización de API. Póngase en contacto con el soporte — pueden verificar y reactivar la conexión del sitio web.

## Cambié la URL del dominio de mi tienda. ¿Necesito actualizar Fozzels?

Sí. Si cambia su dominio, la configuración de Fozzels puede necesitar ser actualizada. Póngase en contacto con el soporte para actualizar el dominio.

## Múltiples tiendas muestran el mismo dominio en Fozzels. ¿Es eso correcto?

Esto puede suceder cuando Fozzels recibe solo un dominio en lugar de separados por tienda. La sincronización se maneja correctamente por tienda bajo el capó. Se han planificado mejoras de interfaz de usuario.

## ¿Qué plugins se necesitan para una integración de WooCommerce?

Asegúrese de que: la API REST esté habilitada, el último plugin AIOSEO de Fozzels esté instalado y el plugin ACF to REST API (v3.3.4) esté instalado y activo.

## ¿Cómo configuro la integración AIOSEO con Fozzels (WooCommerce)?

Instale el plugin de sincronización AIOSEO de Fozzels en WordPress. "Focus Keyphrase" en Fozzels se asigna a Focus Keyword en WooCommerce; "SEO Keywords" se asigna a Additional Keywords.

## ¿Cómo configuro la integración Yoast SEO con Fozzels?

Instale el plugin de sincronización Yoast de Fozzels. Asegúrese de que Yoast esté completamente configurado y activado en WordPress.

## ¿Cómo maneja Fozzels contenido multilingüe con WPML?

Fozzels proporciona acceso a tiendas para diferentes idiomas. Cree flujos separados por tienda de idioma. Fozzels no traduce contenido en sí, pero puede configurar indicaciones para generar en el idioma deseado.

## ¿Cómo utilizo campos de producto personalizados (ACF) en indicaciones de Fozzels?

Fozzels admite ACF para WooCommerce. Habilite el soporte ACF y los campos personalizados aparecerán como atributos en Fozzels.

## Los nuevos campos ACF que agregué en WordPress no aparecen en Fozzels.

Los nuevos campos ACF requieren una extracción de atributo exitosa para aparecer. Asegúrese de que el plugin ACF to REST API esté activo y la conexión API funcione.

## La extracción de datos del producto dejó de funcionar / Recibo fallos de importación.

Esto puede ser causado por un limitador de velocidad o firewall bloqueando solicitudes de API de Fozzels. Póngase en contacto con el soporte — pueden agregar las excepciones necesarias a la lista de permitidos de su servidor.

## Las URLs de la tienda conducen a errores 404.

Esto puede suceder con estructuras de productos padre/hijo. Póngase en contacto con el soporte con ejemplos — pueden corregir la asignación de URL.

## Los textos de Shopware se insertan en variantes de tamaño en lugar de variantes de color.

Después de la actualización de Pack Parent ID, el nivel de sincronización puede haber cambiado. Póngase en contacto con el soporte para ajustar el destino de sincronización nuevamente al nivel de variante de color/padre.

## Mi tienda muestra como "lost in integration" / Recibo un error de tienda inactiva.

La URL de tienda original ya no está activa. Duplique los flujos afectados y seleccione la tienda activa correcta durante la duplicación. Los flujos antiguos pueden archivarse.

## Mi URL de tienda apunta al dominio incorrecto (múltiples tiendas).

Fozzels resuelve URLs por idioma, no por canal de ventas, y elige el primer dominio disponible. Esta es una limitación conocida que se está mejorando.

## ¿Cómo maneja Fozzels múltiples canales de ventas de Shopware?

El contenido se genera una vez por producto por idioma, no por canal de ventas. Los canales de ventas se pueden usar como filtros de catálogo. Esto reduce costos de tokens.

## No hay imágenes en mi feed de producto / catálogo.

Las imágenes faltantes a menudo son causadas por restricciones de IP en su servidor. Póngase en contacto con el soporte — pueden agregar las direcciones IP de Fozzels a su lista blanca.

## Las imágenes del producto no se muestran en el catálogo de Fozzels.

Esto puede ser un problema de integración con la extracción de imagen. Póngase en contacto con el soporte — investigarán y lo arreglarán del lado de Fozzels.

## Recibo un error de sincronización: no se puede escribir en atributos desplegables.

Fozzels solo puede escribir texto en atributos basados en texto, no en campos desplegables/seleccionados. Verifique el tipo de atributo en su tienda web.

## ¿Cómo renombro atributos en Fozzels?

Vaya a la configuración de atributos, cambie el nombre en el campo de entrada y guarde. Este es un cambio de visualización solo en Fozzels.

## Los nombres de atributos no se actualizan automáticamente en indicaciones después de un cambio de PIM.

Cuando renombra atributos en su PIM, Fozzels puede tratarlos como nuevos. Renombre manualmente el atributo en Fozzels para solucionar esto.

## El contenido fue sincronizado a productos incorrectos después de cambios de sitio web.

Fozzels extrae catálogos nocturnamente. Si hace cambios importantes, siempre active una extracción manual de producto para garantizar datos correctos.

## Recibo un error "429 Too Many Requests" al sincronizar a mi PIM.

El limitador de velocidad de su PIM está bloqueando solicitudes. Póngase en contacto con su proveedor de PIM y el soporte de Fozzels para incluir la IP de Fozzels en la lista blanca o corregir el formato de solicitud.

## ¿Qué campos puede actualizar Fozzels en Katana PIM?

El punto final estándar admite: nombre, descripción corta, descripción completa, título meta y descripción meta. Otros campos pueden requerir puntos finales API separados.

## ¿Cómo habilito la integración de LangShop con Shopify?

Comparta capturas de pantalla de su configuración de LangShop en Shopify para que el equipo de Fozzels pueda verificar su configuración y determinar si se necesita configuración adicional.

## ¿Cómo resincronizo un lote completo a la vez?

Abra el flujo → Lista de Lotes → habilite "Show all content" → seleccione todas las filas → Acciones → **Re-sync content**. Esto se ejecuta a través de la cola general.

## ¿Puedo actualizar la integración de Shopify sin pérdida de datos?

Póngase en contacto con el soporte antes de actualizar — pueden investigar la causa raíz. La actualización generalmente no causa pérdida de datos, pero el equipo debe verificar primero.

## Shopify Markets no se muestra en Fozzels.

Esto generalmente es causado por restricciones de API en Shopify — la configuración de API necesita ser ajustada. Póngase en contacto con el soporte o su socio de agencia.

## Recibo errores de generación debido a imágenes grandes (límite de 5MB).

Los modelos de IA tienen un límite de aproximadamente 5MB de imagen por solicitud. Fozzels convierte automáticamente PNG a JPG. Considere usar formato JPG para imágenes de producto.

## Mi estructura de categoría multilingüe es incorrecta (por ejemplo, checo vs alemán).

Fozzels puede mostrar la estructura de categoría de idioma predeterminado. Póngase en contacto con el soporte para ajustes de asignación de categoría multilingüe.

## ¿Con qué frecuencia sincroniza Fozzels datos desde mi PIM?

Las extracciones automáticas de productos se ejecutan nocturnamente después de la medianoche. Para actualizaciones inmediatas, active una extracción manual.
