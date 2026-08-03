---
id: '103000406106'
title: 2.8.1 Integración de VTEX — permisos de clave API requeridos
sidebar_position: 18
slug: /integration-connectivity/vtex-integration-required-api-key-permissions
description: ¿Qué permisos de clave API necesito para conectar Fozzels a VTEX? Para conectar tu tienda VTEX a Fozzels, necesitas crear una clave API en tu administrador de VTEX y
---

## ¿Qué permisos de clave API necesito para conectar Fozzels a VTEX?

Para conectar tu tienda VTEX a Fozzels, necesitas crear una clave API en tu administrador de VTEX y asignar los permisos correctos. Este artículo explica exactamente qué permisos habilitar.

## Paso 1 — Crear una clave API en VTEX

1.  Inicia sesión en tu panel de administración de VTEX
2.  Ve a **Gestión de cuenta → Cuenta → Claves de aplicación**
3.  Haz clic en **Generar nueva clave**
4.  Dale un nombre (por ejemplo, _Integración de Fozzels_)
5.  Copia tanto la **Clave de aplicación** como el **Token de aplicación** — los necesitarás en Fozzels

## Paso 2 — Asignar permisos a la clave API

### Opción A: Usar el rol de integración preexistente (recomendado)

VTEX proporciona un rol prefabricado diseñado para integraciones de catálogo externas:

1.  En la configuración de tu clave de aplicación, ve a **Roles**
2.  Busca y añade el rol: **IntegrationProfile-externalCatalog**
3.  Guarda — este rol único cubre todos los permisos que Fozzels necesita

### Opción B: Añadir permisos individuales manualmente

Si prefieres establecer los permisos mínimos requeridos, añade los siguientes recursos a tu rol de clave API:

#### Sistema de catálogo

Recurso

Por qué se necesita

Obtener lista de canales de ventas

Fozzels lo usa para conectarse a tu tienda y detectar la configuración de tu región

Obtener IDs de producto y SKU

Requerido para recuperar la lista completa de productos de tu catálogo

Obtener lista de campos de especificación por categoría

Permite que Fozzels lea tus definiciones de atributos de producto

Obtener especificaciones de producto

Lee los valores de atributos actuales en cada producto

#### Catálogo

Recurso

Por qué se necesita

Obtener producto por ID

Obtiene detalles completos del producto para la generación de contenido con IA

Actualizar producto

**Permiso de escritura.** Fozzels lo usa para enviar descripciones generadas, títulos y meta descripciones de vuelta a tu tienda

Obtener SKU por ID de producto

Recupera información a nivel de SKU para cada variante de producto

Obtener archivo de SKU

Lee las imágenes de productos existentes

Añadir archivo de SKU

**Permiso de escritura.** Requerido si usas Fozzels para generar y enviar imágenes de productos

Crear/actualizar especificación de producto

**Permiso de escritura.** Permite que Fozzels escriba contenido generado en campos de atributos de producto

#### Categoría

Recurso

Por qué se necesita

Obtener árbol de categorías

Fozzels usa tu estructura de categorías para organizar tu catálogo de productos

## Paso 3 — Introduce las credenciales en Fozzels

1.  Inicia sesión en tu cuenta de Fozzels
2.  Ve a **Integraciones → Agregar integración → VTEX**
3.  Introduce el nombre de tu **Cuenta** (el subdominio de tu tienda VTEX, por ejemplo, `mystore`)
4.  Introduce la **Clave de aplicación** y el **Token de aplicación** del paso 1
5.  Haz clic en **Probar conexión** para verificar que todo funciona

## Preguntas frecuentes

**¿Necesito darle a Fozzels acceso a Pedidos o Pagos?**

No. Fozzels solo funciona con tu catálogo de productos. No necesita acceso a pedidos, logística, precios, pago o información de pagos.

**¿Tengo una tienda multilingüe / transfronteriza. ¿Necesito permisos adicionales?**

Para tiendas monolingües, los permisos anteriores son suficientes. La devolución multilingüe está en nuestro mapa de ruta y puede requerir un permiso adicional cuando se lance. Actualizaremos este artículo en ese momento.

**¿Puedo restringir la clave API a direcciones IP específicas?**

Sí. Contacta a nuestro equipo de soporte para obtener la dirección IP actual del servidor de Fozzels para agregar a la lista blanca.
