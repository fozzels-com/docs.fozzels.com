---
id: '103000390709'
title: '4.7.4 Palabras y frases sospechosas: Control avanzado de calidad de contenido'
sidebar_position: 21
slug: /content-creation-flows/suspicious-words-phrases-advanced-content-quality-control
description: >-
  La función de palabras y frases sospechosas señala los textos generados que
  contienen palabras, frases o patrones similares a comentarios que no desea
  publicar, para que pueda revisarlos antes de que se publiquen.
---

La función **Suspicious Words & Phrases** señala los textos generados que contienen palabras, frases o patrones similares a comentarios que no desea publicar. Las finalizaciones marcadas reciben el estado **Suspicious**, para que pueda filtrarlas y revisarlas antes de que se publiquen.

Detecta artefactos de IA (disculpas, notas al lector, marcado sobrante), restos técnicos y cualquier término que decida bloquear, en varios idiomas al mismo tiempo.

## Dónde encontrarla

Vaya a **Settings** > **Flow** y desplácese hasta el bloque **Suspicious Words & Phrases**. La configuración se aplica globalmente a todos sus flujos.

![Configuración de Suspicious Words & Phrases](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-01-settings.png)

## Cómo funciona la coincidencia

Por defecto, una palabra se busca como palabra completa. Añada `*` al principio o al final para ampliar la búsqueda. Las mayúsculas y minúsculas nunca importan.

| Entrada | Qué encuentra |
| --- | --- |
| `bright` | solo _bright_, no _brightness_ ni _ultrabright_ |
| `bright*` | también _brightness_ y _brightly_ |
| `*bright` | también _ultrabright_ |
| `*bright*` | el texto en cualquier lugar, incluido _ultrabrightness_ |
| `bri*ght` | el texto exacto `bri*ght`: `*` solo funciona al principio o al final |

Las mismas reglas se aplican a las frases. Por ejemplo, `antwoord` nunca marca _verantwoorde_, `antwoord*` también marca _antwoorden_, y `*seo*` se encuentra en cualquier lugar, incluso dentro de _museo_.

## Qué se marca

Tres fuentes alimentan la comprobación: las palabras predeterminadas, los patrones integrados y sus propias palabras.

### Palabras sospechosas predeterminadas

Fozzels incluye una lista predefinida de artefactos de IA comunes en varios idiomas, como `*sorry*`, `*please*`, `*note:*`, `*markdown*`, `*<html*`, `*Let op:*` y `*het spijt me*`. Desmarque cualquier palabra que no necesite y dejará de marcarse.

### Patrones integrados

Los patrones integrados buscan la _forma_ de un comentario de IA en lugar de una palabra exacta. Detectan formulaciones que el modelo nunca ha usado antes, como:

- "Let's" o "Let me" delante de un verbo, como en _"Let's re-verify"_
- Una comprobación enumerada, como en _"One last check"_ o _"Final check"_
- Una pregunta sobre la propia redacción, como en _"Is the wording accurate?"_
- Un resultado entregado, como en _"Final answer"_ o _"Here is the"_
- Caracteres que se cuentan, como en _"59 chars"_ o _"character limit"_
- Las instrucciones citadas de vuelta, como en _"the prompt says"_ o _"mandatory words"_
- La palabra "I" delante de un verbo, como en _"I forgot"_ o _"I'll use"_

La lista completa está en la configuración, con un ejemplo en cada patrón. Los patrones no se pueden editar: haga clic en uno para activarlo o desactivarlo. Desactive un patrón si marca su propio texto.

Los patrones en gris empiezan desactivados. Coinciden con formas que también usa el texto normal, como una pregunta en las preguntas frecuentes de un producto o una línea que empieza con _Great,_. Active uno solo si prefiere revisar algunas de sus propias frases antes que dejar pasar esos comentarios.

### Sus propias palabras

En **Add your own suspicious words**, escriba una palabra o frase y pulse **Enter**. Úselo para nombres de competidores, términos sensibles de la marca o errores propios de un idioma. Puede mezclar idiomas en una misma lista, lo que ayuda a las tiendas que publican en varias localizaciones.

## Cómo funciona el marcado

Cada nueva generación se comprueba con su configuración actual en cuanto se crea. Cuando se encuentra una coincidencia:

- La finalización recibe el estado **Suspicious**.
- Las palabras coincidentes se **resaltan** en el editor de texto, para que vea de inmediato qué activó la marca.
- Usted decide qué hacer: **editar** el texto manualmente, **regenerarlo** o **ajustar la lista** si la marca es una falsa alarma.

En la lista de finalizaciones, un resultado marcado se ve así. La palabra coincidente (aquí, _hello_) aparece resaltada en el texto. El botón **Sync Now** muestra un icono de advertencia y el mensaje _"Completion looks suspicious, possible AI recommendations found."_

![Una finalización sospechosa en la lista de finalizaciones](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-02-suspicious-completion.png)

Una finalización así no debe sincronizarse tal cual. Regenérela o edite el texto para eliminar las palabras marcadas.

Para revisar solo los elementos marcados, active **Show only suspicious** en la **Daily Total Batch List**. Se salta los resultados limpios y va directamente a los textos que necesitan atención.

## Actualizar las finalizaciones existentes

Cambiar la lista afecta solo a las nuevas generaciones. Las finalizaciones que ya existen **no** se vuelven a comprobar automáticamente: su estado Suspicious se mantiene como estaba hasta que lo recalcule.

Para aplicar su nueva configuración a los textos existentes:

1.  Abra la **Content Completion List** del atributo que desea comprobar.
2.  Seleccione los productos que desea volver a comprobar.
3.  Abra el menú **Actions** y elija **Update Suspicious Flag**.

![Update Suspicious Flag en el menú Actions](/img/kb/content-creation-flows/suspicious-words-phrases-advanced-content-quality-control/v2-03-update-suspicious-flag.png)

Las finalizaciones seleccionadas se vuelven a analizar con su lista y sus patrones actuales. Los productos que ya no coinciden pierden el estado Suspicious y quedan listos para sincronizar.

**Ejemplo:** añadió `sorry` como palabra sospechosa y después lanzó una marca llamada _Sorry Boy_. Ahora cientos de descripciones aparecen marcadas. Elimine o desmarque `sorry` en Settings y ejecute **Update Suspicious Flag** en esos productos: las marcas desaparecen y puede sincronizarlos de forma masiva sin editar cada texto.

## Consejos

- Empiece con palabras completas y añada `*` solo cuando necesite variantes. `*seo*` también detecta _museo_, lo que puede marcar texto normal.
- Si un patrón integrado marca constantemente buen texto en su nicho, desactívelo en lugar de editar los textos uno por uno.
- Después de cada cambio en la lista, ejecute **Update Suspicious Flag** en los productos que desea volver a comprobar.

Usados en conjunto, la lista de palabras, los patrones y la acción masiva le dan un único lugar para controlar lo que llega a su tienda, en todos los flujos y en todos los idiomas.
