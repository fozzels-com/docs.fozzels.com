---
title: Integrations — Visão Geral, Configuração, Flags de Atributo e Diagnósticos
sidebar_position: 21
slug: /integration-connectivity/integrations-overview-setup-attribute-flags-and-diagnostics
description: Uma Integration é uma conexão segura entre Fozzels e sua loja de e-commerce ou PIM. Este guia cobre plataformas suportadas, passos de configuração, flags de atributo, agendamentos de pull, notas específicas de plataforma e a referência de diagnósticos completa do WooCommerce.
---

Uma Integration é uma conexão segura entre Fozzels e sua loja de e-commerce ou sistema PIM. Depois de conectado, Fozzels pode obter seus dados de produtos e empurrar conteúdo gerado por IA de volta para sua loja.

## Plataformas suportadas

- **Shopify** — suporte total incluindo Shopify Markets (multi-idioma)
- **Magento 2** — incluindo setups de multi-website e multi-store
- **WooCommerce** — via REST API
- **Shopware 6**
- **Lightspeed**
- **Akeneo** — sistema PIM
- **Katana PIM**
- **BizzLayer**
- **EK Retail**
- **NextChapter**
- **StoreInfo Catalog XML**

## Hierarquia de integração

Integration → Website(s) → Store(s) → Products & Attributes

Cada integração pode conter vários websites, e cada website pode conter várias lojas (por exemplo, diferentes idiomas ou regiões).

---

## Configurando uma integração

### Etapa 1 — Criar a integração

- Acesse [Integrations](https://app.fozzels.com/integrations/definitions)
- Clique em **Add Integration** e selecione sua plataforma
- Digite um nome, a URL da sua loja e credenciais de plataforma
- Salve — Fozzels validará a conexão

### Etapa 2 — Sincronizar websites e lojas

- Depois de salvar, clique em **Synchronize** para obter a lista de websites e lojas da sua plataforma
- Ative os websites e lojas com os quais deseja trabalhar
- Nota: ativar lojas conta contra sua cota de plano

### Etapa 3 — Obter produtos

- Quando as lojas estiverem ativas, dispare um **Product Pull**
- Fozzels importa todos os produtos com seus atributos e imagens
- Você pode monitorar o progresso do pull em tempo real (mostra itens processados / total)

### Etapa 4 — Configurar atributos

- Vá para a aba **Attributes** da sua integração
- Habilite os atributos que deseja usar
- Defina a flag **Filterable** em atributos que deseja filtrar produtos ou usar como entrada em Flows
- Defina a flag **Mutable** em atributos onde o conteúdo gerado por IA será escrito

---

## Flags de atributo explicadas

| Flag | O que faz |
|------|-------------|
| **Filterable** | O atributo aparece no filtro Catalog e pode ser usado como entrada em prompts de Flow (`{{attribute_code}}`) |
| **Mutable** | Fozzels pode escrever conteúdo gerado por IA para este atributo (obrigatório para saída de Flow) |
| **Enabled** | O atributo está ativo e visível no Fozzels |
| **HTML-able** | Permite conteúdo HTML neste atributo (tipos text/textarea apenas) |

> Se você não conseguir selecionar um atributo como destino de Flow — verifique se ele tem a flag **Mutable** habilitada.
>
> Se um atributo não aparecer no filtro Catalog ou prompt de Flow — verifique se ele tem a flag **Filterable** habilitada.

---

## Agendamento de pull

Fozzels pode obter produtos e executar Flows automaticamente em um agendamento:

1. Product Pull — busca dados de produtos mais recentes da sua loja
2. Flow Sync — corresponde produtos a Flows ativos
3. Attribute Refresh — atualiza valores de atributo
4. AI Generation — gera conteúdo
5. Data Export — empurra conteúdo de volta para sua loja

Você pode definir um tempo de pull customizado (formato: `HH:MM`, por exemplo, `14:00`) por integração ou por loja. Se não definido, o padrão do sistema (00:30 UTC) é usado.

Para mudar seu fuso horário, vá para [Settings → Profile](https://app.fozzels.com/user/settings/profile).

---

## Status de integração

| Status | Significado |
|--------|---------|
| **Active** | Integration está habilitada e processará dados |
| **Authorized** | Credenciais são válidas (somente Shopify) |
| **REST API Connected** | Teste de conexão ao vivo passou |

> A integração deve estar **Active** para qualquer pull ou push funcionar.

---

## Configuração específica de plataforma

### Shopify

1. No Shopify Admin vá para: Settings → Apps → Develop apps → Create an app
2. API scopes obrigatórios: `read_product_listings`, `read_products`, `write_products`, `read_metaobject_definitions`, `read_metaobjects`, `read_product_feeds`
3. Para Shopify Markets (multi-idioma) também adicione: `write_translations`, `read_translations`, `write_markets`, `read_markets`, `read_locales`
4. No Fozzels digite: API key, API Secret, e sua URL `.myshopify.com`
5. O status da integração deve mostrar **Authorized: yes** E **REST API Connected: yes**

### Magento 2

1. No Magento Admin vá para: System → Integrations → Add Integration
2. Copie: Consumer Key, Consumer Secret, Access Token, Access Token Secret
3. Também digite o `admin_front_name` (geralmente `admin`)
4. **Importante:** Manualmente adicione o atributo `fozzels_completion_date` a TODOS os Attribute Sets no Magento Admin (Catalog → Attributes → Attribute Sets). Fozzels não pode fazer isto automaticamente porque Magento suporta múltiplos attribute sets por loja.
5. Depois de salvar: ative a integração → sincronize websites/lojas → obtenha produtos

### WooCommerce

- Gere uma chave de API REST em WooCommerce → Settings → Advanced → REST API
- Permissões obrigatórias: Read/Write
- Digite Consumer Key e Consumer Secret no Fozzels

#### Integrações opcionais de plugins do WooCommerce

As integrações WooCommerce suportam quatro flags de plugin opcionais. Cada uma requer plugins WordPress adicionais para ser instalada.

**ACF (Advanced Custom Fields)**

- Habilite com: toggle "Enable ACF (Advanced Custom Fields)" nas configurações de integração do Fozzels
- Plugins WordPress obrigatórios: "Advanced Custom Fields" E "ACF to REST API"
- O que faz: obtém campos de produto customizados definidos em ACF para o Fozzels como atributos (prefixado `acf_`)
- Escrevendo de volta: valores de ACF são escritos via endpoint WooCommerce `meta_data`

**Yoast SEO**

- Habilite com: toggle "Yoast WooCommerce SEO" nas configurações de integração do Fozzels
- Plugins WordPress obrigatórios: "Yoast SEO" E "Fozzels SEO Fields REST API for WooCommerce" (plugin ponte, baixe de app.fozzels.com)
- O que faz: obtém título Yoast SEO, meta descrição e palavra-chave de foco como atributos (prefixado `yoast_`)
- Escrevendo de volta: valores são escritos via chave `seo_fields` na API REST WooCommerce

**All in One SEO (AIOSEO)**

- Habilite com: toggle "All in One SEO" nas configurações de integração do Fozzels
- Plugins WordPress obrigatórios: "All in One SEO" E "AIOSEO API Sync" (plugin ponte, baixe de app.fozzels.com)
- O que faz: obtém título SEO, descrição, palavras-chave, campos Open Graph, campos Twitter e frase-chave de foco como atributos (prefixado `aioseo_`)
- Escrevendo de volta: valores são escritos via chave `aioseo` na API REST WooCommerce

**WPML (Multilingual)**

- Habilite com: toggle "Enable WPML Multilingual Support" nas configurações de integração do Fozzels
- Plugin WordPress obrigatório: WPML
- O que faz: cria uma loja Fozzels separada por idioma; produtos são obtidos por idioma usando a URL com prefixo de idioma (por exemplo, `/de/wp-json/wc/v3/products`)
- Depois de habilitar: vá para Integration → Synchronize para criar as lojas de idioma

---

#### Diagnósticos de conexão e plugins do WooCommerce

Quando você testa a conexão ou executa um product pull, Fozzels verifica cada plugin habilitado. Aqui estão todos os erros possíveis e como corrigi-los:

**Erros de conexão**

| Erro | Significado | Solução |
|-------|---------|-----|
| WordPress was not found at the provided URL | A URL não aponta para um site WordPress | Verifique se a URL está correta e acessível publicamente |
| WooCommerce REST API is not available | WooCommerce não instalado ou REST API desabilitada | Instale WooCommerce e habilite REST API em WooCommerce → Settings → Advanced |
| Unable to connect to the store | Problema de rede/DNS | Verifique se a URL está acessível da internet |
| The connection timed out | Loja não alcançável ou firewall bloqueando | Verifique firewall do servidor e certifique-se de que a URL está publicamente acessível |
| Invalid API credentials | Chave de consumidor ou segredo de consumidor errados | Gere uma nova chave de API em WooCommerce → Settings → Advanced → REST API |

**Erros de ACF**

| Erro | Significado | Solução |
|-------|---------|-----|
| Both "Advanced Custom Fields" and "ACF to REST API" plugins are required | Um ou ambos plugins estão faltando | Instale e ative ambos plugins no admin WordPress |
| "ACF to REST API" is active but "Advanced Custom Fields" is not installed | Plugin ponte instalado mas plugin principal ACF faltando | Instale e ative o plugin "Advanced Custom Fields" |
| Failed to verify ACF plugin status | Não foi possível alcançar o endpoint de verificação de plugin | Verifique conectividade WordPress e tente novamente |

**Erros de Yoast SEO**

| Erro | Significado | Solução |
|-------|---------|-----|
| Both "Yoast SEO" and "Yoast SEO WooCommerce REST API by Fozzels" plugins are required | Um ou ambos plugins estão faltando | Instale e ative ambos plugins no admin WordPress |
| "Yoast SEO" is active but the "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed | Plugin ponte faltando | Baixe o plugin ponte de app.fozzels.com e o ative |
| Your "Fozzels SEO Fields REST API for WooCommerce" plugin is outdated | Versão antiga do plugin ponte | Baixe e instale a versão mais recente de app.fozzels.com |
| The "Fozzels SEO Fields REST API for WooCommerce" plugin is not installed or not active | Plugin ponte não encontrado | Baixe de app.fozzels.com e ative no admin WordPress |
| Failed to verify Yoast SEO plugin status | Não foi possível alcançar o endpoint de verificação de plugin | Verifique conectividade WordPress e tente novamente |

**Erros de AIOSEO**

| Erro | Significado | Solução |
|-------|---------|-----|
| Both "All in One SEO" and "AIOSEO API Sync" plugins are required | Um ou ambos plugins estão faltando | Instale e ative ambos plugins no admin WordPress |
| "All in One SEO" is active but the "AIOSEO API Sync" plugin is not installed | Plugin ponte faltando | Baixe o plugin AIOSEO API Sync de app.fozzels.com e o ative |
| Your "AIOSEO API Sync" plugin is outdated | Versão antiga do plugin ponte | Baixe e instale a versão mais recente de app.fozzels.com |
| The "AIOSEO API Sync" plugin is not installed or not active | Plugin ponte não encontrado | Baixe de app.fozzels.com e ative no admin WordPress |
| Failed to verify All in One SEO plugin status | Não foi possível alcançar o endpoint de verificação de plugin | Verifique conectividade WordPress e tente novamente |

**Erros de WPML**

| Erro | Significado | Solução |
|-------|---------|-----|
| WPML plugin is not active or not installed | WPML não encontrado no WordPress | Instale e ative o plugin WPML no admin WordPress |
| WPML is active but no languages are configured | WPML instalado mas sem idiomas adicionados | Vá para WPML → Languages e adicione pelo menos um idioma adicional |

**Erros de conflito**

| Erro | Significado | Solução |
|-------|---------|-----|
| Both Yoast SEO and All in One SEO are active at the same time | Conflito de plugin | Usar ambos simultaneamente pode causar conflitos — desabilite um deles no admin WordPress |

**Geral**

| Erro | Significado | Solução |
|-------|---------|-----|
| An unexpected error occurred while connecting | Erro desconhecido | Tente novamente; se o problema persistir contate suporte Fozzels |

---

## Problemas comuns

**Integration não está obtendo produtos**

- Verifique se o toggle **Active** está ON
- Verifique se websites e lojas estão ativados
- Dispare um pull manual da página de integração

**Atributos não aparecem no filtro Catalog ou prompts de Flow**

- O atributo precisa da flag **Filterable** — vá para Integration → Attributes e a habilite

**Não consigo definir um atributo como alvo de saída de Flow**

- O atributo precisa da flag **Mutable** — vá para Integration → Attributes e a habilite

**Problemas de conexão Shopify**

- Ambos **Authorized** e **REST API Connected** devem estar verdes
- Dupla-verifique se todos os API scopes obrigatórios estão habilitados em seu app customizado Shopify

**Magento — `fozzels_completion_date` faltando**

- Isto deve ser manualmente adicionado a cada Attribute Set no Magento Admin
- Vá para: Catalog → Attributes → Attribute Sets → abra cada set → adicione o atributo

**Cota de loja excedida**

- Você atingiu o número máximo de lojas ativas no seu plano
- Desative lojas não utilizadas ou faça upgrade do seu plano em [Plans](https://app.fozzels.com/user/settings/plans)

**Produtos marcados como "perdidos"**

- Produtos ou lojas foram removidos da plataforma de origem
- Itens perdidos são mantidos no Fozzels para referência mas não sincronizarão

---

## Gerenciando integrações

- **Archive** — desabilita a integração e a oculta da lista principal; dados são preservados e podem ser restaurados
- **Pull progress** — barra de progresso em tempo real mostrando itens processados; pode ser pausada ou parada
- **Bulk attribute update** — selecione múltiplos atributos e mude flags de uma vez
- **Auto-detect blank** — encontra automaticamente atributos sem valores em todos os produtos
