---
id: '103000395390'
title: '4.3.5 Cuándo se generan nuevos productos: el ciclo de extracción explicado'
sidebar_position: 11
slug: /content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained
description: 'Producto o marca nueva: por qué aún no está visible y cómo acelerar las cosas Una explicación de por qué los productos nuevos no aparecen en Fozzels inmediatamente y qué'
---

**Producto o marca nueva: por qué aún no está visible y cómo acelerar las cosas**

Una explicación de por qué los productos nuevos no aparecen en Fozzels inmediatamente y qué hacer si no desea esperar hasta la próxima mañana.

**1\. Por qué los productos nuevos no son visibles en Fozzels de inmediato**

Fozzels no recibe datos de su tienda en tiempo real. No hay una conexión persistente entre su tienda y Fozzels que transmita automáticamente cada cambio.

En su lugar, Fozzels se conecta regularmente a su tienda y descarga el estado actual del catálogo - este proceso se llama extracción de producto. Solo después de que se completa, el sistema se da cuenta de productos nuevos, cambios de atributo o elementos eliminados.

> **ℹ** Si agregó un producto o marca nueva a su tienda hoy durante el día, solo aparecerá en Fozzels después de la siguiente extracción. Hasta entonces, el sistema simplemente no sabe que existe.

**2\. Cuándo ocurre la extracción**

La extracción se ejecuta automáticamente según un horario que usted mismo configura en la pestaña Configuración o Sitios web y tiendas. De forma predeterminada, se ejecuta durante la noche.

Después de que se complete la extracción, el sistema automáticamente:

-   verifica qué productos coinciden con los filtros de flujos activos
-   actualiza valores de atributos para cada producto en la cola
-   desencadena generación de contenido

> **ℹ** Los cambios realizados en un flujo (por ejemplo, agregar una nueva marca a los filtros) también entran en vigor solo después de la siguiente extracción.

**3\. Cómo evitar esperar hasta la mañana: extracción manual**

Si necesita que los productos nuevos se procesen de inmediato, ejecute la extracción manualmente. Una extracción manual funciona exactamente como la automática: actualiza completamente el catálogo y desencadena la generación.

**Cómo ejecutarlo:**

-   Vaya a la sección de configuración de integración en Fozzels
-   Encuentre su tienda y ejecute la extracción manualmente
-   Espere a que se complete - un estado de éxito en la lista de estado confirma que todo se procesó
-   Después de eso, el sistema sincronizará automáticamente los flujos e iniciará la generación para los productos nuevos

> **ℹ** Una extracción manual no cancela ni reemplaza la automática. La siguiente extracción programada aún se ejecutará a su hora habitual independientemente de si ejecutó una manual.

**4\. Si ya ejecutó un flujo manualmente durante el día**

A veces, los usuarios prueban flujos o generan contenido para productos individuales manualmente, usando el botón Ejecutar ahora. Esta es una práctica normal.

Importante saber: una ejecución de flujo manual no afecta el ciclo automático. El próximo día, después de la extracción programada, el sistema ejecutará ese flujo automáticamente, independientemente de cualquier acción manual que haya tomado durante el día.

_¿Tiene una pregunta? Póngase en contacto con el soporte de Fozzels._
