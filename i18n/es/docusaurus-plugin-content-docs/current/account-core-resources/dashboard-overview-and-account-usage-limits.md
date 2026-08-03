---
title: Panel de Control - Descripción General y Límites de Uso de la Cuenta
sidebar_position: 9
slug: /account-core-resources/dashboard-overview-and-account-usage-limits
description: El Panel de Control es la página de inicio de Fozzels que le proporciona una descripción general en tiempo real del uso de su cuenta (integraciones, tiendas, Flows y finalizaciones) en relación con las cuotas de su plan.
keywords:
- flujo
- de
- contenido
- generación
- finalización
---

El Panel de Control es la página de inicio de Fozzels. Le proporciona una descripción general en tiempo real del uso de su cuenta.

Vaya a [Dashboard](https://app.fozzels.com/dashboard)

---

## Barra de estadísticas

La parte superior de la página muestra 6 métricas clave. Cada una muestra **recuento actual / cuota del plan**:

| Estadística | Qué cuenta |
|------|---------------|
| **Integrations** | Total de integraciones creadas (activas o no) |
| **Websites** | Sitios web activados en todas las integraciones |
| **Stores** | Tiendas activadas en todas las integraciones |
| **Flows** | Content Flows activos (los Flows archivados no cuentan) |
| **Completions today** | Elementos de contenido generados por IA hasta ahora hoy (se reinicia a medianoche UTC) |
| **Completions this month** | Elementos de contenido generados por IA en este mes calendario |

> Una estadística mostrada en **rojo o naranja** significa que está en o cerca del límite de cuota de su plan.

---

## Dos límites separados a entender

Fozzels tiene **dos sistemas de facturación independientes** que son fáciles de confundir:

### 1. Cuotas del plan (suscripción)

Su plan de suscripción establece límites estrictos en:

- Número de integraciones, sitios web, tiendas y Flows activos que puede tener
- Número de finalizaciones por día y por mes

Estos se muestran en la barra de estadísticas del Panel de Control. Cuando se alcanza una cuota, la acción está **bloqueada** hasta que se actualice.

→ Administre en [Plans](https://app.fozzels.com/user/settings/plans)

### 2. Saldo de crédito (pago por uso)

Cada vez que la IA genera contenido, cuesta créditos de su saldo.

- Los créditos son independientes de su suscripción: puede tener un plan pero cero créditos
- Cuando el saldo llega a cero, la generación se bloquea incluso si su cuota de plan lo permite
- Costo: aproximadamente 0,06 € por 750 palabras de salida de IA
- Cargue manualmente o configure la carga automática

→ Administre en [Payments](https://app.fozzels.com/user/settings/payments)

**Ambos límites deben cumplirse** para que la generación funcione: necesita cuota de plan restante Y un saldo de crédito positivo.

---

## Botón Upgrade Plan

Visible cuando no está en el plan Unlimited. Haciendo clic se le lleva directamente a [Plans](https://app.fozzels.com/user/settings/plans) para actualizar.

---

## Gráfico de Analytics

Muestra la actividad de generación de contenido a lo largo del tiempo: cuántas finalizaciones se crearon por día. Úselo para:

- Detectar picos en el uso
- Ver si sus Flows se ejecutan como se esperaba
- Verificar si la generación se ha detenido inesperadamente

---

## Preguntas comunes del panel de control

**"Completions today" es 0 aunque ejecuté Flows**

- Verifique que sus Flows estén configurados como **Active**
- Verifique que su Flow se ejecutó hoy (la generación está programada: ejecute manualmente para probar)
- Verifique su saldo de crédito en [Payments](https://app.fozzels.com/user/settings/payments): si es cero, la generación se bloquea

**Las estadísticas no se actualizan**

- El panel se actualiza al cargar la página; actualice con fuerza la página (Ctrl+F5 / Cmd+Shift+R)

**Estoy en mi límite de plan**

- Actualice su plan en [Plans](https://app.fozzels.com/user/settings/plans)
- O desactive tiendas no utilizadas / archive Flows no utilizados para liberar cuota

**No puedo crear más Flows**

- O ha alcanzado la cuota de Flow activo, o está en un plan que limita el recuento de Flow
- Verifique los límites de su plan en [Plans](https://app.fozzels.com/user/settings/plans)

**La cuota de Completions se utilizó pero aún tengo créditos**

- Las cuotas de plan y los créditos son separados: la cuota de plan tiene prioridad
- Debe actualizar su plan para generar más contenido este mes/día

**¿Cuál es la diferencia entre "Completions today" y "Completions this month"?**

- "Today" se reinicia cada medianoche UTC; "this month" se reinicia el 1 de cada mes
- Algunos planes limitan ambos (p. ej. 100/día y 3000/mes): lo que se alcance primero bloquea la generación
