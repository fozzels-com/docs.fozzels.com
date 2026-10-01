---
title: '2.1.1. Requisitos de conexão: endereços IP, User-Agent e configurações de firewall'
sidebar_position: 1.5
slug: /integration-connectivity/connection-requirements
description: >-
  Os endereços IP, o User-Agent e as configurações de firewall, WAF e
  Cloudflare de que sua loja precisa para que o Fozzels possa se conectar.
  Compartilhe esta página com seu provedor de hospedagem ou administrador de
  servidor.
---

O Fozzels se conecta à sua loja pela internet: ele lê seus produtos pela API da sua loja, envia de volta o conteúdo gerado e baixa as imagens dos seus produtos. Se um firewall, WAF, proteção contra bots ou rate limiter do seu lado considerar essas solicitações suspeitas, a conexão falha.

Use esta página quando:

-   o teste de conexão no Fozzels falhar ou expirar (timeout);
-   você vir erros **401**, **403** ou **429**, ou a mensagem **"Unable to get access token"** ao criar ou salvar uma integração;
-   a sincronização (Pull Products ou o envio de conteúdo de volta) parar ou ficar incompleta;
-   faltarem imagens de produtos no Fozzels.

Você pode encaminhar esta página como está para seu provedor de hospedagem, agência ou administrador de servidor.

## 1. Libere os endereços IP do Fozzels

Adicione **todos** estes endereços à lista de permissões (whitelist) do seu firewall, WAF, plugin de segurança ou painel de hospedagem:

| Endereço | Tipo | Usado para |
| --- | --- | --- |
| `49.13.117.118` | IPv4 | Plataforma Fozzels (todas as solicitações de API e downloads de imagens) |
| `2a01:4f8:c17:bb1e::/64` | Faixa IPv6 | Plataforma Fozzels (todas as solicitações de API e downloads de imagens) |
| `91.205.205.66` | IPv4 | Equipe de suporte e desenvolvimento do Fozzels, quando testamos ou investigamos sua conexão |

> **Libere IPv4 e IPv6:** Adicione sempre o endereço IPv4 **e** a faixa IPv6. Se apenas o endereço IPv4 estiver liberado, as solicitações que chegam à sua loja por IPv6 continuam bloqueadas. Adicione a entrada IPv6 como a faixa completa `2a01:4f8:c17:bb1e::/64`, não como um único endereço.

## 2. Libere o User-Agent do Fozzels

Cada solicitação do Fozzels se identifica com um User-Agent que começa com `fozzels/`, seguido do número da versão do Fozzels:

```
fozzels/9.2 (+https://app.fozzels.com/)
```

O número da versão muda a cada release do Fozzels, então não compare a string completa. Em regras de proteção contra bots, WAF ou rate limiting, use a condição User-Agent **contém** `fozzels`.

Certifique-se de que:

-   solicitações com esse User-Agent não sejam bloqueadas nem recebam um desafio (challenge) como bot ou crawler;
-   solicitações dos endereços IP do Fozzels e/ou com esse User-Agent estejam excluídas do rate limiting. Durante a sincronização, o Fozzels envia muitas solicitações em pouco tempo, principalmente com catálogos grandes. Se elas forem limitadas, você recebe erros **429 (Too Many Requests)** e a sincronização não é concluída.

Para melhor proteção, combine as duas condições (endereço IP **e** User-Agent) nas suas regras, se o seu firewall permitir.

## 3. Cloudflare

Se sua loja estiver atrás do Cloudflare, as solicitações do Fozzels podem receber uma página de desafio ("Just a moment...") em vez de uma resposta da API. O Fozzels não consegue resolver desafios, então a conexão falha, muitas vezes com **403** ou **"Unable to get access token"**.

Libere o Fozzels com **uma** destas opções:

**Opção A: IP Access Rule (a mais simples)**

1.  No painel do Cloudflare, abra seu domínio e vá para **Security → WAF → Tools** (IP Access Rules).
2.  Adicione `49.13.117.118` com a ação **Allow**.
3.  Adicione `2a01:4f8:c17:bb1e::/64` com a ação **Allow**.
4.  Opcionalmente, adicione `91.205.205.66` com a ação **Allow**.

**Opção B: regra personalizada do WAF com Skip**

1.  Vá para **Security → WAF → Custom rules** (no painel mais recente: **Security → Security rules**) e crie uma regra.
2.  Use esta expressão (Edit expression):

    ```
    (ip.src in {49.13.117.118 2a01:4f8:c17:bb1e::/64 91.205.205.66})
    ```

3.  Defina a ação como **Skip** e selecione as demais custom rules, rate limiting rules, managed rules e Super Bot Fight Mode (e, nos demais componentes, Browser Integrity Check e Security Level).
4.  Coloque a regra em **primeiro** lugar na lista e publique-a (Deploy).

Depois, verifique:

-   **Bot Fight Mode** (plano Free, em **Security → Bots**) não pode ser ignorado por uma regra personalizada. Se o Fozzels continuar recebendo desafios, desative o Bot Fight Mode.
-   **I'm Under Attack mode** e outras regras de desafio para o site inteiro não devem se aplicar ao Fozzels. Um desafio JavaScript ou gerenciado (managed challenge) nos seus caminhos de API sempre bloqueia o Fozzels.
-   Para confirmar o que está bloqueando o Fozzels, abra **Security → Events** e filtre pelos endereços IP do Fozzels. Cada solicitação bloqueada mostra qual regra ou recurso agiu sobre ela.

## 4. Caminhos que o Fozzels precisa acessar

O Fozzels chama a API padrão da sua plataforma. Não bloqueie nem proteja estes caminhos para os endereços IP do Fozzels:

| Plataforma | Caminhos |
| --- | --- |
| Magento 2 | `/rest/` e `/graphql` |
| Shopware 6 | `/api/` (incluindo `/api/oauth/token`) e `/store-api/` |
| WooCommerce | `/wp-json/` |

O Fozzels também baixa as imagens dos seus produtos pelas URLs das imagens, então seu domínio de mídia ou imagens (incluindo uma CDN) também precisa estar acessível para o Fozzels.

## 5. Outras verificações de hospedagem e firewall

-   **Firewall da hospedagem:** muitos provedores de hospedagem têm um firewall ou proteção DDoS próprios na frente do seu servidor. Peça a eles para liberar os endereços IP do Fozzels também ali.
-   **ModSecurity / Imunify360 (Plesk, cPanel, DirectAdmin):** esses firewalls de aplicação web podem bloquear solicitações de API. Adicione os endereços IP do Fozzels à lista de permissões deles.
-   **fail2ban ou ferramentas semelhantes:** garanta que os endereços IP do Fozzels estejam na lista de ignorados, para que um pico de solicitações de sincronização não cause um bloqueio.
-   **Rate limiting** no seu servidor web (nginx, Apache), balanceador de carga ou plugin de segurança: exclua os endereços IP do Fozzels e/ou o User-Agent.
-   **Plugins de segurança** (por exemplo, Wordfence ou Sucuri para WooCommerce): adicione os endereços IP do Fozzels à lista de permissões e não bloqueie o acesso à API REST.
-   **Bloqueio por país ou geobloqueio:** a plataforma Fozzels roda na Alemanha. Se você bloqueia países, garanta que os endereços IP do Fozzels estejam excluídos.
-   **Lojas protegidas por senha ou de staging:** se sua loja pede uma senha (autenticação HTTP básica) antes da API, exclua os endereços IP do Fozzels dessa proteção.

## Checklist

- [ ] `49.13.117.118` (IPv4) está liberado em todos os firewalls, WAFs e plugins de segurança
- [ ] `2a01:4f8:c17:bb1e::/64` (faixa IPv6) também está liberada
- [ ] `91.205.205.66` está liberado, para que nossa equipe de suporte possa testar sua conexão
- [ ] Solicitações com um User-Agent que contém `fozzels` não são bloqueadas nem limitadas
- [ ] Cloudflare (se usado): IP Access Rule ou regra Skip adicionada, sem desafio para o Fozzels, Bot Fight Mode verificado
- [ ] Os caminhos de API da sua plataforma e as URLs das imagens dos produtos estão acessíveis para o Fozzels
- [ ] Firewall da hospedagem, ModSecurity, fail2ban e rate limiting têm as exceções do Fozzels
- [ ] O teste de conexão no Fozzels funciona

## Ainda não funciona?

Fale conosco em **[support@fozzels.com](mailto:support@fozzels.com)**. Informe a URL da sua loja, a mensagem de erro exata do Fozzels, o horário em que aconteceu e, se você usa o Cloudflare, o Ray ID ou a entrada correspondente em **Security → Events**.
