---
title: 'FAQ: Indicaciones y Calidad de IA'
sidebar_position: 6
unlisted: true
slug: /frequently-asked-questions/faq-prompts-and-ai-quality
description: >-
  Competencia de indicaciones, enmarque de imágenes y marca, formato consistente de
  características, salida multilingüe y lógica de fallback de idioma en indicaciones.
---

## Mi imagen de IA ignora instrucciones de enmarque (cuerpo completo en lugar de torso).

Esto es causado por **prompt competition** — instrucciones conflictivas (por ejemplo, "full-body" junto con "only torso"). Elimine todos los activadores conflictivos y use lenguaje específico como "waist-up portrait pose".

## El logotipo y la marca están borrosos en imágenes generadas.

Las tomas de cuerpo completo distribuyen la representación en todo el cuerpo. Cambie a enmarque de retrato/cintura hacia arriba y agregue instrucciones de marca específicas en la indicación.

## ¿Tiene consejos de optimización de indicaciones para generación de imágenes?

Evite instrucciones contradictorias, agregue exclusiones explícitas, use lenguaje específico del retrato e proteja los detalles de marca. Póngase en contacto con el soporte para una revisión de indicación.

## Mis características de producto se formatean de manera inconsistente (lista en línea).

Agregue reglas de formato explícito a la indicación: cada característica en una nueva línea, nombres en negrita, sin símbolos de viñeta. Use énfasis MAYÚSCULA para reglas clave.

## ¿Cómo escribo indicaciones para formato consistente de características de producto?

Especifique la estructura (descripción + sección de características), formatéela como una lista vertical con etiquetas en negrita, prohíba viñetas y enumere las características requeridas.

## La IA genera información incorrecta de material/atributo desde imágenes.

Cuando Fozzels carece de acceso a campos específicos, la IA adivina desde fotos — lo que es poco confiable para detalles técnicos. Conecte ACF/atributos personalizados para datos precisos.

## ¿Puede el equipo de Fozzels revisar mis flujos e indicaciones?

Sí, pueden aconsejar sobre estructura, especialización y optimización. Programe una sesión en línea para orientación detallada.

## ¿Puede Fozzels coincidir con mi diseño de interfaz personalizado (por ejemplo, un acordeón)?

Fozzels no puede garantizar coincidencia de diseños complejos. Experimente con indicaciones, pero puede ser necesario ajuste manual.

## Obtengo salida multilingüe (por ejemplo, inglés + holandés).

Escriba todas las instrucciones de indicación en el idioma de salida deseado y no mezcle idiomas. Agregue una nota fuerte: "IMPORTANTE: La salida debe estar completamente en [idioma]".

## Mi indicación genera idiomas mixtos cuando la copio de otra tienda.

No copie y agregue instrucciones de traducción. Escriba la indicación completa en el idioma de destino desde cero y cree indicaciones separadas por idioma.

## ¿Puedo usar lógica de fallback de idioma en indicaciones (por ejemplo, checo → alemán)?

Puede probar lógica condicional en la indicación: "Si está disponible texto checo, úselo. Si no, use alemán". Los resultados dependen de la capacidad de detección de idioma de la IA.
