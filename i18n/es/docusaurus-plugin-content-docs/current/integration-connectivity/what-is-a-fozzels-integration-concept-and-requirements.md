---
id: '103000367852'
title: 2.1. ¿Qué es una integración de Fozzels? (Concepto y requisitos).
sidebar_position: 1
slug: /integration-connectivity/what-is-a-fozzels-integration-concept-and-requirements
description: Este documento proporciona una comprensión fundamental de qué es una integración de Fozzels, su papel en el ciclo de vida del contenido, y los requisitos previos
---

Este documento proporciona una comprensión fundamental de qué es una integración de Fozzels, su papel en el ciclo de vida del contenido, y los requisitos previos necesarios para establecer una conexión.

Una integración de Fozzels establece un vínculo de datos seguro y bidireccional entre la plataforma Fozzels y tu sistema de comercio electrónico externo (por ejemplo, Magento, Shopify, WooCommerce). Este vínculo es el punto de partida para toda la automatización de contenido, permitiendo que Fozzels **extraiga** atributos de productos e **impulse** contenido generado de vuelta.

### 1. El papel de la integración en el ciclo de vida del contenido

La integración sirve como la tubería de datos, apoyando todo el proceso de generación de contenido:

1.  **Extracción de datos:** Fozzels usa la conexión para **extraer** automáticamente datos de productos (atributos, imágenes, categorías, precios) de tu tienda al catálogo de Fozzels. Estos datos forman la entrada para las indicaciones de IA.

2.  **Ejecución de flujos:** Los flujos de contenido se ejecutan dentro del entorno de Fozzels, utilizando los atributos extraídos y el modelo de IA seleccionado para generar nuevo contenido.

3.  **Impulso de datos:** Fozzels usa la conexión para **impulsar** el contenido recién generado (por ejemplo, descripciones de productos, títulos meta) de vuelta a los atributos de destino designados en tu sistema de comercio electrónico.

### 2. Requisitos previos de integración y requisitos previos

Antes de configurar una integración, ciertos requisitos deben cumplirse en tu plataforma de comercio electrónico:

1.  **Acceso a API:** Fozzels requiere acceso seguro a la Interfaz de programación de aplicaciones (API) de tu tienda. Esto típicamente implica generar un token seguro o clave API en el lado de la plataforma de comercio electrónico.

2.  **Permisos de lectura/escritura:** Las credenciales de API generadas deben tener tanto **permisos de lectura (extracción)** para acceder a los atributos de productos existentes como **permisos de escritura (impulso)** para modificar los atributos de destino (los campos donde se almacenará el contenido generado).

3.  **Tipo de integración:** Dependiendo de tu plataforma (por ejemplo, Magento 2 o Shopify), el método de integración puede implicar instalar una extensión/aplicación específica de Fozzels o configurar claves API nativas y URLs.

4.  **Configuración de atributos (Post-integración):** Una vez conectado, Fozzels depende de que los atributos de origen tengan la bandera **Filterable** y los atributos de destino tengan la bandera **Mutable** habilitada.

### 3. Gestión de integración

La configuración de integración se gestiona dentro de la pestaña **Configuración** y **Sitios web y tiendas** de la interfaz de Fozzels.

-   Puedes gestionar múltiples integraciones simultáneamente, permitiéndote sincronizar contenido en diferentes instancias de comercio electrónico o tiendas regionales.

-   La estabilidad del proceso de automatización de contenido depende directamente de la estabilidad y el tiempo de actividad de la integración establecida.
