---
id: '103000357927'
title: 1.4.1. Cambiar del token de API de OpenAI a la API general de Fozzels
sidebar_position: 6
slug: /account-core-resources/switch-from-openai-api-token-to-fozzels-general-api
description: Hemos cambiado la forma en que Fozzels maneja los pagos de "tokens" de los modelos de IA. Le pedimos a todos nuestros usuarios que cambien esta configuración antes del 1 de agosto de 2025. Por favor
---

Hemos cambiado la forma en que Fozzels maneja los pagos de "tokens" de los modelos de IA.

Le pedimos a todos nuestros usuarios que cambien esta configuración antes del 1 de agosto de 2025.

Por favor, dedique algunos 10 minutos para cambiar esta configuración en su cuenta de Fozzels.

Contenidos:

1.  Antecedentes
2.  Cambio
3.  Ventajas
4.  ## Qué hacer, paso a paso

-   ### Configurar el pago

-   ### Eliminar su clave de OpenAI actual

5.  ### Listo

## ¿Por qué?

Fozzels comenzó generando automáticamente contenido para usted utilizando los modelos de lenguaje de OpenAI (GPT-4o, actualmente).

Después de configurar una nueva cuenta de Fozzels; le pedimos a nuestros usuarios que también configuraran una cuenta de OpenAI, agregaran sus datos de tarjeta de crédito allí, crearan una clave de API de OpenAI y copiaran y pegaran esa clave en Fozzels.

Todo funcionó muy bien -- pero tenía algunos inconvenientes:

1.  Tomaría más tiempo para que los usuarios comenzaran, porque tenían que abrir una cuenta en OpenAI también, y hacer "algo caprichoso" con copiar y pegar claves de API.
2.  Las nuevas cuentas de OpenAI están limitadas en uso (límites de velocidad, etc.), por lo que los usuarios de Fozzels no podían aprovechar la creación por lotes de contenido de productos en grandes cantidades.
3.  Las nuevas cuentas de OpenAI están limitadas en modelos; por lo que los usuarios no siempre podían usar Fozzels para generar imágenes de IA, por ejemplo.
4.  No podíamos ofrecer fácilmente a nuestros usuarios acceso a modelos de IA de otros proveedores, como Google (Gemini), Anthropic (Claude) o xAi (Grok).

## Cambio

Para resolver estos problemas, Fozzels ha cambiado la forma en que manejamos los pagos para los "tokens" de IA.

En lugar de pagar a todos los proveedores de IA por separado, ahora pagará directamente a Fozzels por el uso de IA -- y Fozzels pagará su uso de IA a los proveedores de IA por usted. Fozzels utiliza [Stripe](https://stripe.com/nl/payments), uno de los proveedores de pagos en línea más grandes del mundo, para manejar registros financieros.

## Ventajas

Hacer esto tiene las siguientes ventajas:

1.  Una incorporación más rápida y fácil para nuevos usuarios de Fozzels;
2.  Siempre podrá generar contenido para muchos productos (sin más límites en cuentas); porque Fozzels tiene cuentas "ilimitadas" en los proveedores de IA;
3.  Puede usar modelos de generación de imágenes en Fozzels;
4.  Puede elegir entre más modelos de IA que OpenAI (Google Gemini 2.5 Flash; xAi Grok 3; Anthropic Claude 4 Sonnet -- y más seguirán);
5.  Ahora puede habilitar "búsqueda web", lo que significa que puede dejar que la IA busque en Internet, por ejemplo, datos faltantes, y usarlos para generar datos o descripciones de productos.

Actualmente puede elegir entre los siguientes modelos de IA:

![Todos los modelos de IA disponibles en Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/AU9GwQ3QT_bYnbdVWdVFZXcOrtjOBOSAAQ.jpg)

##

## Qué hacer, paso a paso

### A) Configurar el pago

1.  Por favor, inicie sesión en su cuenta de Fozzels y haga clic en su **imagen de usuario** en la esquina superior derecha.
2.  En el menú desplegable, haga clic en **Configuración**.
3.  En el menú Configuración a la izquierda, haga clic en [**Pagos**](https://app.fozzels.com/user/settings/payments).
4.  Verá la siguiente pantalla. Haga clic en el botón "**Cargar Crédito Ahora**".
    ![Pantalla de Pagos de Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/tcgrCp0izWkeJxIjlmzD6xS5OZByebIyHg.png)

5.  Verá una ventana emergente, solicitando una cantidad. Ingrese cualquier cantidad que desee agregar a su saldo. El predeterminado es €50, pero puede cambiar esto si lo desea. Luego haga clic en el botón "**Cargar Ahora**".
    ![Ventana emergente Cargar Créditos Ahora](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/drZn1vvSyjH8rRfhLn8mWW_HuhAo2tTs-w.png)

6.  Será redirigido a la página de pago de Stripe, donde puede ingresar sus detalles de pago.
    Tenga en cuenta que no se guardan detalles de pago en Fozzels; solo en Stripe.
    Puede usar los siguientes métodos de pago: iDEAL, Tarjetas de Crédito (VISA, American Express, Mastercard, Discover), Amazon Pay, Paypal, Revolut Pay y Bancontact.
    ![Pantalla de pago de Stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/BRJcSSvdJ5LBFl1zVDZ0UyhLPh4URCTO1w.png)

7.  Por favor, recuerde -- si este pago es para su cuenta de empresa -- también ingrese su **nombre de empresa** e **id de VAT**.
    ![Agregar información de VAT en stripe](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/ZlO4Se712OMvnGl-aiWPNytLfwhRuRKerQ.png)

8.  Después del pago exitoso, será redirigido de vuelta a Fozzels y verá su saldo actual en la página de Pagos.
    ![Saldo actualizado en la página de Pagos](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/Own2E9SNmWHQ1UHAoPh9oA1cXL0Sz8BkLQ.png)

9.  A continuación, \[_opcional_\], si desea "recargar" automáticamente el saldo de su cuenta cuando su saldo alcanza una cantidad baja, puede configurar eso haciendo clic en el botón "**Configurar Cargar Créditos**". De esta manera, la generación de contenido a través de los Flujos que ha configurado nunca se interrumpirá.
    Ingrese los montos que desea establecer, habilite la casilla "_Sí, recargar automáticamente mi tarjeta cuando mi saldo de crédito cae por debajo de un umbral_" y haga clic en el botón **Guardar**.
    ![Ventana emergente de configuración de Recarga Automática](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/3BrEoNMQNNw7wOSkoZGXdLG3l9cyJwGeQ.png)

### B) Eliminar su clave de OpenAI actual

Después de haber configurado sus detalles de pago, recuerde **eliminar** la clave de API de OpenAI actual de su cuenta.
De esta manera, Fozzels utilizará nuestras propias claves de API para todos los proveedores de IA.

1.  Para activar esto, haga clic en "**Token de OpenAI**" en el menú izquierdo.
    ![Menú de configuración de Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/zFcW_bCeIp8XohHkBB2EQ8E7ZbEkvU1xTg.png)

2.  Seleccione su token en el campo Token, **elimine todo en el campo**, y haga clic en el botón **Guardar**.
    ![Campo de Token de API de OpenAI de Fozzels](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/z6eQMCzEGgNDu4KJsBT_QlGBwDiOAHKsTg.png)

Ahora está listo.

¡Listo! Bien hecho.
Gracias y diviértase usando Fozzels.
