---
id: '103000313152'
title: Advertencia "Recursión detectada" al crear un flujo
sidebar_position: 26
slug: /content-creation-flows/recursion-detected-warning-when-creating-a-flow
description: Cuando ve esta advertencia, significa que está utilizando la variable para introducir contenido del mismo atributo que está utilizando el flujo para escribir. Por
---

Cuando ve esta advertencia, significa que está utilizando la variable para introducir contenido del mismo atributo que está utilizando el flujo para escribir.

Por ejemplo: está creando un flujo para actualizar automáticamente el campo "Descripción" (atributo).

En el cuadro donde puede escribir la solicitud, ha utilizado esa misma etiqueta "{Descripción}" como variable de entrada.

Esto puede estar bien, pero también puede causar un problema donde el contenido se sobrescribe todos los días, si tiene la opción "Regenerar automáticamente cuando el atributo del producto cambio" establecida.

En este escenario, Fozzels escribirá contenido nuevo en el campo "Descripción".

Pero, eso significa que este producto también está marcado como "cambio", por lo que Fozzels intentará regenerar contenido para este producto el próximo día, y una y otra vez.

Es posible que desee considerar **desactivar** la opción "Regenerar automáticamente cuando el atributo del producto cambio", o **eliminar** ese campo de entrada de su solicitud.
