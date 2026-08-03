---
title: Configuración de Cuenta - Referencia Completa
sidebar_position: 10
slug: /account-core-resources/account-settings-complete-reference
description: 'Cada sección de la Configuración de Cuenta de Fozzels explicada: Perfil, Seguridad, Notificaciones, Token OpenAI, tokens API, Configuración de Flow, Plantillas de Avisos, Medios, Planes, Pagos y Transacciones.'
keywords:
- flujo
- de
- contenido
- generación
- indicación
- instrucción
- finalización
---

Vaya a [Settings](https://app.fozzels.com/user/settings): la barra lateral izquierda tiene todas las secciones.

---

## Perfil

Configure los detalles de su cuenta personal:

- **Nombre, correo electrónico, empresa, teléfono**
- **Avatar**: cargue una foto JPG o PNG
- **Idioma**: EN, NL, DE o ES (cambia el idioma de la interfaz de Fozzels)
- **Zona horaria**: importante para las programaciones de extracción, que se ejecutan en UTC de forma predeterminada; configurar su zona horaria hace que los tiempos programados se muestren correctamente

---

## Seguridad

Cambie su contraseña de cuenta:

- Ingrese su contraseña actual
- Ingrese y confirme una nueva contraseña

---

## Notificaciones

Alterne qué correos electrónicos le envía Fozzels:

- **Product emails**: noticias, consejos y anuncios de características de Fozzels
- **Balance alert**: notificación cuando su saldo de crédito baja a cero

---

## Open AI Token

Agregue su propia clave API de OpenAI para usar su facturación personal de OpenAI en lugar de los créditos de Fozzels.

- Cuando se configura, todos los Flows basados en OpenAI y el asistente de IA usan su clave directamente
- Aún necesita un saldo mínimo de 0,01 € en Fozzels para usar esta función
- Deje vacío para usar la clave de la plataforma Fozzels (los créditos se deducen de su saldo)

---

## API (Personal Access Tokens)

Cree tokens API para acceso programático a Fozzels:

- Asigne a cada token un nombre
- Los tokens se pueden revocar en cualquier momento
- Use tokens para integrar Fozzels con herramientas externas o automatizar tareas a través de la API

---

## Flow Settings

Configuración global que se aplica a todos los Content Flows a menos que se anule por Flow.

### Trusted HTML Tags

Lista blanca de etiquetas HTML permitidas en contenido generado por IA. Solo se mantienen las etiquetas en esta lista cuando la salida se usa en un atributo HTML.

### Suspicious Words

Lista de palabras o frases que marcan automáticamente el contenido generado para revisión manual.

Las palabras sospechosas predeterminadas incluyen artefactos de IA como "As an AI", "I cannot", "Sorry". Puede:

- Agregar sus propias palabras (p. ej. nombres de competidores, frases prohibidas)
- Eliminar entradas predeterminadas que causan falsos positivos

Las finalizaciones que contienen palabras sospechosas no se pueden sincronizar automáticamente: requieren revisión manual y confirmación.

### Completion Cooldown (global)

Tiempo mínimo entre regeneraciones de IA para el mismo producto, en todos los Flows.

Formato: establezca un número y una unidad (horas, días, semanas).

Los Flows individuales pueden:

- **Heredar** esta configuración global
- **Anular** con su propio cooldown
- **Desactivar** el cooldown por completo

---

## Prompt Templates

Guarde plantillas de avisos reutilizables para usar en múltiples Flows.

- Asigne a cada plantilla un nombre y contenido
- Haga referencia a las plantillas al crear o editar un Flow en lugar de escribir el aviso desde cero
- Útil para mantener un tono y formato consistente en todos los Flows

---

## Medios

Su biblioteca de medios: imágenes y archivos cargados o generados dentro de Fozzels.

---

## Planes

Vea y cambie su plan de suscripción.

Vaya a [Plans](https://app.fozzels.com/user/settings/plans)

Cada plan muestra:

- Nombre y descripción
- Características incluidas
- Cuotas: máx. integraciones, tiendas, Flows activos, finalizaciones diarias, finalizaciones mensuales
- Precio

Para actualizar o bajar: haga clic en **Choose Plan** → Stripe checkout → confirme el pago.

### Planes disponibles

| Plan | Integrations | Stores | Flows | Completions/day | Completions/month |
|------|-------------|--------|-------|-----------------|-------------------|
| **Trial** | 1 | 1 | 1 | limitado | limitado |
| **Starter** | 6 | 18 | ilimitado | — | — |
| **Ultra Light** | 1 | 1 | 4 | 1000 | 30000 |
| **Light** | 1 | 3 | 5 | 30 | 900 |
| **Plus** | 3 | 6 | 15 | 75 | 2250 |
| **Premium** | 6 | 18 | 60 | 100 | 3000 |
| **Unlimited** | ilimitado | ilimitado | ilimitado | ilimitado | ilimitado |

> Cuando se excede una cuota, la acción se bloquea con un mensaje que enlaza a la página de Planes.

---

## Payments (Créditos)

Vaya a [Payments](https://app.fozzels.com/user/settings/payments)

Fozzels utiliza un **sistema de crédito de pago por uso**: separado de su plan de suscripción. Los créditos se consumen cada vez que la IA genera contenido.

**Costo:** aproximadamente 0,06 € por 750 palabras de contenido generado.

**Ejemplo:** 1000 descripciones de productos de ~200 palabras ≈ 16 €

### Administrar su saldo

- **Saldo actual**: se muestra en el cuadro naranja
- **Charge Credit Now**: carga única manual a través de Stripe
- **Configure Auto-Charge**: configure un umbral y monto de carga automática
  - Ejemplo: cargue 50 € automáticamente cuando el saldo baje por debajo de 10 €
- **Customer Billing Portal**: portal de Stripe para administrar métodos de pago y descargar facturas

### Historial de pagos

La tabla muestra todos los cargos anteriores con fecha, monto y estado.

### Problemas de facturación comunes

- **"You exceeded your current quota"**: su saldo es cero o su clave API de OpenAI ha expirado
  - Cargue en [Payments](https://app.fozzels.com/user/settings/payments) o agregue su propia clave de OpenAI en Configuración → Open AI Token
- **La carga automática no se activa**: verifique que el umbral esté configurado y que un método de pago esté guardado en el portal de Stripe

---

## Transacciones

Historial completo de todas las deducciones de crédito: muestra qué Flow o finalización consumió créditos, cuántos tokens se utilizaron y el costo por operación.

---

## Acceso de revendedor

Si un Revendedor administra su cuenta, verá su acceso listado en la Configuración de Cuenta. Puede **revocar el acceso del Revendedor** en cualquier momento desde esta página.

Cuando un Revendedor inicia sesión en su cuenta, la barra de encabezado se vuelve negra.
