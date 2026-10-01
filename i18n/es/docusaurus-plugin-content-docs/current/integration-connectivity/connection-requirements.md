---
title: '2.1.1. Requisitos de conexión: direcciones IP, User-Agent y configuración del firewall'
sidebar_position: 1.5
slug: /integration-connectivity/connection-requirements
description: >-
  Las direcciones IP, el User-Agent y la configuración del firewall, WAF y
  Cloudflare que tu tienda necesita para que Fozzels pueda conectarse. Comparte
  esta página con tu proveedor de alojamiento o administrador del servidor.
---

Fozzels se conecta a tu tienda a través de internet: lee tus productos mediante la API de tu tienda, devuelve el contenido generado y descarga las imágenes de tus productos. Si un firewall, WAF, protección contra bots o limitador de velocidad de tu lado considera sospechosas estas solicitudes, la conexión falla.

Usa esta página cuando:

-   la prueba de conexión en Fozzels falla o se agota el tiempo de espera;
-   ves errores **401**, **403** o **429**, o el mensaje **"Unable to get access token"** al crear o guardar una integración;
-   la sincronización (Pull Products o el envío de contenido de vuelta) se detiene o queda incompleta;
-   faltan imágenes de productos en Fozzels.

Puedes reenviar esta página tal cual a tu proveedor de alojamiento, agencia o administrador del servidor.

## 1. Permite las direcciones IP de Fozzels

Agrega **todas** estas direcciones a la lista de permitidos (lista blanca) de tu firewall, WAF, plugin de seguridad o panel de alojamiento:

| Dirección | Tipo | Se usa para |
| --- | --- | --- |
| `49.13.117.118` | IPv4 | Plataforma Fozzels (todas las solicitudes de API y descargas de imágenes) |
| `2a01:4f8:c17:bb1e::/64` | Rango IPv6 | Plataforma Fozzels (todas las solicitudes de API y descargas de imágenes) |
| `91.205.205.66` | IPv4 | Equipo de soporte y desarrollo de Fozzels, cuando probamos o revisamos tu conexión |

> **Permite IPv4 e IPv6:** Agrega siempre la dirección IPv4 **y** el rango IPv6. Si solo se permite la dirección IPv4, las solicitudes que llegan a tu tienda por IPv6 se siguen bloqueando. Agrega la entrada IPv6 como el rango completo `2a01:4f8:c17:bb1e::/64`, no como una sola dirección.

## 2. Permite el User-Agent de Fozzels

Cada solicitud de Fozzels se identifica con un User-Agent que empieza por `fozzels/`, seguido del número de versión de Fozzels:

```
fozzels/9.2 (+https://app.fozzels.com/)
```

El número de versión cambia con cada versión de Fozzels, así que no compares la cadena completa. En las reglas de protección contra bots, WAF o limitación de velocidad, usa la condición User-Agent **contiene** `fozzels`.

Asegúrate de que:

-   las solicitudes con este User-Agent no se bloquean ni reciben un desafío (challenge) como bot o rastreador;
-   las solicitudes desde las direcciones IP de Fozzels y/o con este User-Agent están excluidas de la limitación de velocidad. Durante la sincronización, Fozzels envía muchas solicitudes en poco tiempo, sobre todo con catálogos grandes. Si se limitan, recibirás errores **429 (Demasiadas solicitudes)** y la sincronización no terminará.

Para una mejor protección, combina ambas condiciones (dirección IP **y** User-Agent) en tus reglas si tu firewall lo permite.

## 3. Cloudflare

Si tu tienda está detrás de Cloudflare, las solicitudes de Fozzels pueden recibir una página de desafío ("Just a moment...") en lugar de una respuesta de la API. Fozzels no puede resolver desafíos, por lo que la conexión falla, a menudo con **403** o **"Unable to get access token"**.

Permite Fozzels con **una** de estas opciones:

**Opción A: IP Access Rule (la más sencilla)**

1.  En el panel de Cloudflare, abre tu dominio y ve a **Security → WAF → Tools** (IP Access Rules).
2.  Agrega `49.13.117.118` con la acción **Allow**.
3.  Agrega `2a01:4f8:c17:bb1e::/64` con la acción **Allow**.
4.  Opcionalmente, agrega `91.205.205.66` con la acción **Allow**.

**Opción B: regla personalizada del WAF con Skip**

1.  Ve a **Security → WAF → Custom rules** (en el panel más reciente: **Security → Security rules**) y crea una regla.
2.  Usa esta expresión (Edit expression):

    ```
    (ip.src in {49.13.117.118 2a01:4f8:c17:bb1e::/64 91.205.205.66})
    ```

3.  Establece la acción en **Skip** y selecciona las demás custom rules, rate limiting rules, managed rules y Super Bot Fight Mode (y, en los demás componentes, Browser Integrity Check y Security Level).
4.  Coloca la regla en **primer** lugar de la lista y despliégala (Deploy).

Después, comprueba:

-   **Bot Fight Mode** (plan Free, en **Security → Bots**) no se puede omitir con una regla personalizada. Si Fozzels sigue recibiendo desafíos, desactiva Bot Fight Mode.
-   **I'm Under Attack mode** y otras reglas de desafío para todo el sitio no deben aplicarse a Fozzels. Un desafío JavaScript o gestionado (managed challenge) en tus rutas de API siempre bloquea a Fozzels.
-   Para confirmar qué bloquea a Fozzels, abre **Security → Events** y filtra por las direcciones IP de Fozzels. Cada solicitud bloqueada muestra qué regla o función actuó sobre ella.

## 4. Rutas a las que Fozzels necesita acceder

Fozzels llama a la API estándar de tu plataforma. No bloquees ni protejas estas rutas para las direcciones IP de Fozzels:

| Plataforma | Rutas |
| --- | --- |
| Magento 2 | `/rest/` y `/graphql` |
| Shopware 6 | `/api/` (incluido `/api/oauth/token`) y `/store-api/` |
| WooCommerce | `/wp-json/` |

Fozzels también descarga las imágenes de tus productos desde sus URL de imagen, por lo que tu dominio de medios o imágenes (incluido un CDN) también debe ser accesible para Fozzels.

## 5. Otras comprobaciones de alojamiento y firewall

-   **Firewall del alojamiento:** muchos proveedores de alojamiento tienen su propio firewall o protección DDoS delante de tu servidor. Pídeles que permitan también allí las direcciones IP de Fozzels.
-   **ModSecurity / Imunify360 (Plesk, cPanel, DirectAdmin):** estos firewalls de aplicaciones web pueden bloquear solicitudes de API. Agrega las direcciones IP de Fozzels a su lista de permitidos.
-   **fail2ban o herramientas similares:** asegúrate de que las direcciones IP de Fozzels están en la lista de ignorados, para que una ráfaga de solicitudes de sincronización no provoque un bloqueo.
-   **Limitación de velocidad** en tu servidor web (nginx, Apache), balanceador de carga o plugin de seguridad: excluye las direcciones IP de Fozzels y/o el User-Agent.
-   **Plugins de seguridad** (por ejemplo, Wordfence o Sucuri para WooCommerce): agrega las direcciones IP de Fozzels a la lista de permitidos y no bloquees el acceso a la API REST.
-   **Bloqueo por país o geobloqueo:** la plataforma Fozzels funciona en Alemania. Si bloqueas países, asegúrate de que las direcciones IP de Fozzels están excluidas.
-   **Tiendas protegidas con contraseña o de staging:** si tu tienda pide una contraseña (autenticación HTTP básica) antes de la API, excluye las direcciones IP de Fozzels de esa protección.

## Lista de comprobación

- [ ] `49.13.117.118` (IPv4) está permitida en todos los firewalls, WAF y plugins de seguridad
- [ ] `2a01:4f8:c17:bb1e::/64` (rango IPv6) también está permitido
- [ ] `91.205.205.66` está permitida, para que nuestro equipo de soporte pueda probar tu conexión
- [ ] Las solicitudes con un User-Agent que contiene `fozzels` no se bloquean ni se limitan
- [ ] Cloudflare (si se usa): IP Access Rule o regla Skip añadida, sin desafío para Fozzels, Bot Fight Mode revisado
- [ ] Las rutas de API de tu plataforma y las URL de imágenes de productos son accesibles para Fozzels
- [ ] El firewall del alojamiento, ModSecurity, fail2ban y la limitación de velocidad tienen las excepciones de Fozzels
- [ ] La prueba de conexión en Fozzels funciona

## ¿Sigue sin funcionar?

Contáctanos en **[support@fozzels.com](mailto:support@fozzels.com)**. Incluye la URL de tu tienda, el mensaje de error exacto de Fozzels, la hora en que ocurrió y, si usas Cloudflare, el Ray ID o la entrada correspondiente de **Security → Events**.
