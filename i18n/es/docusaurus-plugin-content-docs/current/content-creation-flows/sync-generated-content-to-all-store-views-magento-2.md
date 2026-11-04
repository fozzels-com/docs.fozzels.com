---
title: 4.1.2.c Cómo sincronizar el contenido generado con todas las store views en Magento 2
sidebar_position: 4.5
slug: /content-creation-flows/sync-generated-content-to-all-store-views-magento-2
description: >-
  Con esta opción activada, cada push del flow guarda el texto generado en la
  store view del flow y también como valor predeterminado del producto para
  todas las store views de Magento.
---

## Qué hace esta opción

Con esta opción activada, cada push del flow guarda el texto generado dos veces: en la store view propia del flow y como valor predeterminado del producto para **todas las store views** de Magento.

Cualquier store view que no tenga su propio valor para ese atributo muestra el texto nuevo de inmediato. Una store view que tiene su propio valor definido en Magento sigue mostrando su propio texto.

La opción solo está disponible para integraciones de Magento 2.

## Cuándo usarla

Actívela cuando varias store views deban mostrar el mismo texto y no quiera ejecutar un flow distinto para cada una. Un caso típico: dos o más store views en el mismo idioma, por ejemplo una tienda principal y una tienda outlet.

Déjela desactivada cuando sus store views usen idiomas distintos o necesiten textos distintos. En ese caso, ejecute un flow distinto para cada store view, como hasta ahora.

## Cómo activarla

1.  Abra el flow y vaya al paso **4 Automation**.

2.  Marque **Also save as the default value for all store views**. Debajo de la casilla aparece una breve explicación.

3.  Guarde el flow.

La opción se aplica a cada push de este flow: un push manual tras la revisión, un push totalmente automático y **Synchronize again**. Un flow con varios atributos siempre sincroniza todos sus atributos juntos.

![La casilla «Also save as the default value for all store views» en el paso 4 Automation](/img/kb/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/01-automation-default-value-checkbox.png)

## Cómo funcionan los valores de las store views

En Magento, un atributo de producto tiene un valor predeterminado (visible en el scope **All Store Views**) y puede tener su propio valor en cualquier store view. En la página del producto, cambie el **Scope** a una store view: si **Use Default Value** está marcado bajo un campo, esa store view muestra el valor predeterminado. Si está desmarcado, la store view tiene su propio valor e ignora el predeterminado.

Esto es lo que hace un push, con un flow en Default Store View y una tienda con dos store views más:

| Store view | Antes del push | Después del push | Use Default Value |
| --- | --- | --- | --- |
| All Store Views (predeterminado) | Texto antiguo | **Texto nuevo** | — |
| Default Store View (la del flow) | Texto antiguo | **Texto nuevo**, guardado como valor propio | Desmarcado |
| Store view B, sin valor propio | Texto antiguo (heredado) | **Texto nuevo** (heredado) | Marcado |
| Store view C, con valor propio | Su propio texto | Su propio texto, sin cambios | Desmarcado |

**Para que una store view muestre el texto nuevo**, abra el producto en Magento, cambie el Scope a esa store view, marque **Use Default Value** para el atributo y guarde. A partir de entonces seguirá el valor predeterminado.

## Una store view por atributo

Solo los flows de una store view pueden guardar un atributo concreto como valor predeterminado. Así se evita que los flows de distintas store views sobrescriban el texto predeterminado de los demás.

*   **Varios flows de la misma store view** pueden tener la opción activada para el mismo atributo.
*   **Los flows de store views distintas** solo pueden tener la opción activada para atributos distintos. Por ejemplo, un flow de la store view A sincroniza la descripción y un flow de la store view B sincroniza el meta título.

Si activa la opción para un atributo que un flow de otra store view ya guarda como valor predeterminado, el flow no se guarda y muestra este error:

> The flow "&lt;flow name&gt;" of another store view already saves this attribute as the default value for all store views. Only one store view's flow can write the shared default of an attribute.

Para solucionarlo, quite los atributos compartidos de este flow, o desactive la opción (o quite el atributo) en el flow indicado en el error.

**Al duplicar un flow a otra store view**, la opción se desactiva en la copia y se muestra una advertencia. Vuelva a activarla solo si ningún flow de otra store view guarda los mismos atributos como valor predeterminado.

## Lo que debe saber antes de activarla

*   **All Store Views significa todos los sitios web.** El valor predeterminado se aplica a las store views de todos los sitios web de su Magento, no solo al sitio web del flow. Si sus sitios web usan idiomas distintos, las store views sin valor propio mostrarán el idioma del flow.
*   **Gana el último push.** Si varios flows de la misma store view sincronizan el mismo atributo, el valor predeterminado contiene el texto del último push, aunque otro flow haya generado un texto más reciente.
*   **La store view del flow deja de seguir el valor predeterminado.** Tras el primer push con esta opción, la store view del flow tiene su propio valor. Los valores predeterminados posteriores no le llegarán hasta que marque Use Default Value en ella.
*   **Puede activar otros flows.** Un flow de otra store view que lee este atributo en su prompt y tiene activado **Automatically create a new text when an attribute changes** trata el nuevo valor predeterminado como un cambio. Tras el siguiente pull, crea un texto nuevo, y consume créditos, para cada producto sin valor propio en su store view.
*   **Productos configurables:** solo se actualiza el producto principal. Sus variantes conservan sus propios textos, lo cual no es un problema porque la página del producto muestra los textos del principal.
*   **Desactivar la opción no deshace nada.** Los valores ya guardados como predeterminados se mantienen. Los nuevos push solo van a la store view del flow.
*   **Quitar un atributo de un flow no borra el valor predeterminado.** El último valor sincronizado se mantiene hasta que otro flow sincronice uno nuevo.
