---
id: '103000369548'
title: 4.4.1 Función de prevención de generación de contenido superpuesto. Función global de prevención.
sidebar_position: 13
slug: /content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function
description: La función "Prevenir generación doble de contenido con otros flujos" es crucial para garantizar que no genere contenido dos veces para el mismo producto cuando podría
---

La función **"Prevenir generación doble de contenido con otros flujos"** es crucial para garantizar que no genere contenido dos veces para el mismo producto cuando podría pertenecer a múltiples flujos. Esto ayuda a optimizar sus costos de uso de IA (tokens).

## 1\. El estándar principal (configuración global)

Esta es la **configuración global** que se aplica a todos sus flujos a menos que se especifique lo contrario. Lo establece una vez en: `Perfil` → `Configuración` → `Flujo de contenido`.

-   **El contenido aún no se ha generado:** La generación se permite **solo si** el contenido de este producto no ha sido creado por **ningún** otro flujo anteriormente. Esta es la comprobación más estricta.

-   **Más antiguo que:** Establece un **límite de tiempo** (p. ej., 1 semana). La generación se permite **si** el contenido existente ya fue creado una vez antes por otro flujo, pero **antes** de la duración establecida.
    ![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/Hgb-Xa4MFVO-KaMNOrtEtfyA1I8RT_6haA.png)

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/r-Ikv5eI5COJQMRwp9HXF1M2OOPYShjDXw.png)

## 1.1. Gestión de la configuración global (pasos de configuración)

**Su objetivo:** Establecer o modificar el estándar principal que seguirán todos los flujos establecidos en `Heredar`.

**Pasos:**

1.  Navegue a **Configuración global** (`Perfil` → `Configuración` → `Flujo de contenido`).

2.  Controla la regla global usando el interruptor **"Usar límite de duración"**:

-   **Para activar la regla de duración (Más antiguo que):** **Active el interruptor "Usar límite de duración"**, **ingrese el valor de período requerido** (p. ej., 1 semana) y **guarde**.

-   **Para establecer la regla más estricta (El contenido aún no se ha generado):** **Desactive el interruptor "Usar límite de duración"** y **guarde**.

-   _Resultado:_ Todos los flujos que utilicen la opción **Heredar** aplicarán automáticamente esta nueva restricción.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/et0MwVwvnIfg8GhM-81qMk3ADOAD3_M02g.png)

## 2\. Anulación de la regla para un flujo específico (escenarios prácticos)

En la configuración de cada flujo individual (sección **4 Automatización**), decide si se adherirá a la configuración global o tendrá una excepción:

-   Si desea que el flujo ignore todas las reglas de duplicación (incluso si la regla global está activa), consulte A.

-   Si desea establecer un límite de tiempo personalizado (anular), consulte B.

-   Si desea desactivar completamente todas las reglas de duplicación global, consulte C.

#### **Escenario A: Permiso de generación completa (sin restricciones) (desactivar)**

**Su objetivo:** Desea que el flujo ignore todas las reglas de duplicación (incluso si la regla global está activa).

**Pasos:**

1.  Vaya a la configuración del flujo deseado (p. ej., `Modificar flujo de productos`).

2.  Navegue a la sección **4 Automatización**.

3.  En el bloque **"Prevenir generación doble de contenido con otros flujos"**, seleccione la opción **Desactivar**.

4.  Guarde los cambios.

-   _Resultado:_ Este flujo generará contenido independientemente de si el contenido ya existe de otros flujos.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/M18xs-NWnNKM3KW_n1iAHroIpfoIW3ztfg.png)

#### **Escenario B: Establecimiento de un límite de tiempo personalizado (anular)**

**Su objetivo:** Desea que este flujo tenga un límite de tiempo **diferente** de la configuración global.

**Pasos:**

1.  Vaya a la configuración del flujo deseado.

2.  En la sección **4 Automatización**, seleccione la opción **Anular**.

3.  Ingrese el valor de límite de tiempo requerido (p. ej., 1 hora) en el campo que aparece.

4.  Guarde los cambios.

-   _Resultado:_ El flujo usará **solo** esta nueva regla individual.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/chc6WFPZCDobr_ICKuYawfRnxRTy36Oi3g.png)

**Escenario C: Comenzar de nuevo (eliminación de todas las restricciones)**

**Su objetivo:** Ha decidido desactivar completamente todas las reglas de duplicación global, permitiendo que todos los flujos creen contenido sin restricciones basadas en períodos.

**Pasos:**

1.  Navegue a **Configuración global** (`Perfil` → `Configuración` → `Flujo de contenido`).

2.  **Desactive el interruptor "Usar límite de duración"**.

3.  Haga clic en el botón **Guardar**.

4.  _Resultado:_ Todos los flujos establecidos en **Heredar** comenzarán a ejecutarse **sin restricciones de duplicación**, ya que la regla global está efectivamente deshabilitada. Si desea que un flujo establecido en **Anular** también se ejecute sin restricciones, **cambiarlo a Heredar** o **desactivar la restricción usando Desactivar**.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/8rlkBmppY5nU7t7ZkdTHVSWoFeNWkYYOeA.png)

o

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/_nWCPZi_Y8CUrS6FiIQZPgxQ0eip7jdWeg.png)
