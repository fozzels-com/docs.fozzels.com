---
id: '103000367838'
title: 1.2.1. Configuración de Perfil, Seguridad y Notificaciones
sidebar_position: 2
slug: /account-core-resources/profile-security-and-notifications-settings
description: Esta sección detalla las funciones para administrar la cuenta de usuario, preferencias de seguridad, comportamiento de notificaciones y configuración de clave API personal dentro de Fo
---

Esta sección detalla las funciones para administrar la cuenta de usuario, preferencias de seguridad, comportamiento de notificaciones y configuración de clave API personal dentro de Fozzels.
Para abrir la sección Configuración, use el enlace: `https://app.fozzels.com/user/settings/profile`.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Tc2cIujPZyK0-BRWvFlDJzAKwvlb1mCbBA.png)

### 1.1. Configuración de Usuario

La sección Configuración proporciona acceso a opciones clave de configuración que permiten a los usuarios administrar su cuenta personal, preferencias de seguridad y características que respaldan flujos de trabajo colaborativos.

#### 1.1.1. Configuración de Perfil

Menú → Configuración → Perfil. Esta página se abre de forma predeterminada al acceder al menú Configuración. Permite a los usuarios editar su información de perfil y empresa básica.

Los Campos Editables incluyen: el Nombre de visualización del usuario, Dirección de Correo Electrónico, Nombre de la Empresa, Número de Teléfono (opcional) y una descripción breve en el campo Acerca de.
Para aplicar cualquier cambio, haga clic en Guardar.
El sistema aplica todos los cambios a la vez. Es importante notar que el sistema no proporciona una advertencia si se navega lejos con cambios sin guardar, por lo que los usuarios deben guardar manualmente.
El Correo Electrónico debe estar en un formato válido.
Para actualizar la Foto de Perfil, haga clic en la imagen del avatar para abrir la ventana de carga. Los formatos compatibles son JPG y PNG.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/n4NwWmNOPgAtHdMdd2XYw8IeaKeefh4uKw.png)

#### 1.1.2. Configuración de Seguridad

Menú → Configuración → Seguridad.
Esta página se utiliza para actualizar la contraseña de la cuenta.

Los campos editables son Contraseña Actual, Nueva Contraseña y Confirmar Nueva Contraseña.
Comportamiento de Entrada: Todos los valores de entrada están enmascarados (mostrados como puntos) y los valores de campo no se almacenan ni se guardan en caché.
**Haga clic en Actualizar** para aplicar los cambios.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/4_vsO-7JKhQeaATz0rzs8X97nn-JDns8Iw.png)
Actualización Exitosa: Si la nueva contraseña es aceptada, se mostrará una notificación de éxito verde en la parte superior de la pantalla, y la contraseña se actualiza inmediatamente para futuros inicios de sesión.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Lv9g42HJ-ap_ArFPBPd0525XLLSRHyDzCA.png)
Manejo de Errores: Si la contraseña actual es incorrecta, o la nueva contraseña y la confirmación no coinciden, aparecerá un mensaje de error. En este caso, todos los campos de contraseña se borrarán automáticamente, y el usuario debe reingresar la información desde el principio.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/6niT9qGiupLPyM0ijzwSXLeAhLO-NYguaA.png)

#### 1.1.3. Configuración de Notificaciones

Menú → Configuración → Notificaciones. Utilice esta sección para administrar notificaciones por correo electrónico.

Esta sección contiene dos casillas de verificación:

-   Permitir correos electrónicos de Fozzels: Cuando no está marcado, no se enviará ninguna comunicación de correo electrónico relacionada con el producto (por ejemplo, actualizaciones, alertas del sistema). Cuando está marcado, el usuario acepta recibir estos correos electrónicos.

-   Recibir notificaciones de saldo: Cuando no está marcado, no se enviará comunicación por correo electrónico. Cuando está marcado, el usuario acepta recibir notificaciones cuando su saldo alcanza 0 o menos, con un recordatorio para recargar y continuar trabajando.
**Haga clic en Actualizar** para guardar preferencias.

![](/img/kb/account-core-resources/profile-security-and-notifications-settings/JuH6V-gxtu1SYR1gzZ0qfO6fSEuVDSSVxQ.png)
1.1.4. Configuración de Token de OpenAI

Menú → Configuración → Token de OpenAI. Esta sección se utiliza para conectar y administrar la clave de API de OpenAI para generación de texto e imágenes.

El campo editable es Token, donde ingresa su clave de API de OpenAI personal o de empresa.
Solo se puede almacenar un token por cuenta a la vez.
El campo de entrada es texto sin formato, lo que significa que el token es visible mientras se escribe y permanece visible después de guardarlo.
Lista de Modelos: Después de guardar un token válido, la lista de modelos de OpenAI disponibles aparece debajo.
Cada modelo incluye su Nombre y Estado (por ejemplo, habilitado, deshabilitado, inválido).
**Utilice** el botón **Actualizar** para actualizar esta lista si es necesario.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/BR86j8Sx5F-7Oh8IQl62gSgp1Y-WnINnHQ.png)
Guardado Exitoso: Haga clic en Guardar para enviar el token. Si el token es válido, una notificación verde confirma la actualización y la lista de modelos se cargará en consecuencia.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Ex-tA3z01sWbqI0QlvqI_o7NICSECMzMRg.png)
Notas de Validación de Token: Se pueden presentar varios problemas al ingresar un token, incluido formato inválido, tokens expirados o revocados, o errores de validación de backend. Si el token no es válido o no se puede verificar, el sistema muestra una notificación de error apropiada (por ejemplo, "No se puede validar el token").
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/AAyYCYEC9SJuztUVuBCtVy_paCUppxN8iA.png)
En todos los casos de error, el token no se guarda y el campo de entrada se borra automáticamente.
