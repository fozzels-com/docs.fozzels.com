---
title: '2.1.1. Connection Requirements: IP Addresses, User-Agent and Firewall Settings'
sidebar_position: 1.5
slug: /integration-connectivity/connection-requirements
description: >-
  The IP addresses, User-Agent and firewall, WAF and Cloudflare settings your
  shop needs so that Fozzels can connect to it. Share this page with your
  hosting provider or server administrator.
---

Fozzels connects to your shop over the internet: it reads your products through your shop's API, writes the generated content back and downloads your product images. If a firewall, WAF, bot protection or rate limiter on your side treats these requests as suspicious, the connection fails.

Use this page when:

-   the connection test in Fozzels fails or times out;
-   you see **401**, **403** or **429** errors, or the message **"Unable to get access token"** when creating or saving an integration;
-   synchronization (Pull Products or sending content back) stops or is incomplete;
-   product images are missing in Fozzels.

You can forward this page as-is to your hosting provider, agency or server administrator.

## 1. Allow the Fozzels IP addresses

Add **all** of these addresses to the allowlist (whitelist) of your firewall, WAF, security plugin or hosting panel:

| Address | Type | Used for |
| --- | --- | --- |
| `49.13.117.118` | IPv4 | Fozzels platform (all API requests and image downloads) |
| `2a01:4f8:c17:bb1e::/64` | IPv6 range | Fozzels platform (all API requests and image downloads) |
| `91.205.205.66` | IPv4 | Fozzels support and development team, when we test or troubleshoot your connection |

> **Allow both IPv4 and IPv6:** Always add the IPv4 address **and** the IPv6 range. If only the IPv4 address is allowed, requests that reach your shop over IPv6 are still blocked. Add the IPv6 entry as the full range `2a01:4f8:c17:bb1e::/64`, not a single address.

## 2. Allow the Fozzels User-Agent

Every request from Fozzels identifies itself with a User-Agent that starts with `fozzels/`, followed by the Fozzels version number:

```
fozzels/9.2 (+https://app.fozzels.com/)
```

The version number changes with every Fozzels release, so do not match the full string. In bot protection, WAF or rate-limiting rules, match on User-Agent **contains** `fozzels`.

Make sure that:

-   requests with this User-Agent are not blocked or challenged as a bot or crawler;
-   requests from the Fozzels IP addresses and/or this User-Agent are excluded from rate limiting. During synchronization Fozzels sends many requests in a short time, especially for large catalogs. If they are limited, you get **429 (Too Many Requests)** errors and the sync does not finish.

For the best protection, combine both conditions (IP address **and** User-Agent) in your rules where your firewall supports it.

## 3. Cloudflare

If your shop is behind Cloudflare, Fozzels requests can receive a challenge page ("Just a moment...") instead of an API response. Fozzels cannot solve challenges, so the connection fails, often with **403** or **"Unable to get access token"**.

Allow Fozzels with **one** of these options:

**Option A: IP Access Rule (simplest)**

1.  In the Cloudflare dashboard, open your domain and go to **Security → WAF → Tools** (IP Access Rules).
2.  Add `49.13.117.118` with action **Allow**.
3.  Add `2a01:4f8:c17:bb1e::/64` with action **Allow**.
4.  Optionally add `91.205.205.66` with action **Allow**.

**Option B: WAF custom rule with Skip**

1.  Go to **Security → WAF → Custom rules** (in the newer dashboard: **Security → Security rules**) and create a rule.
2.  Use this expression (Edit expression):

    ```
    (ip.src in {49.13.117.118 2a01:4f8:c17:bb1e::/64 91.205.205.66})
    ```

3.  Set the action to **Skip** and select the remaining custom rules, rate limiting rules, managed rules and Super Bot Fight Mode (and, under the other components, Browser Integrity Check and Security Level).
4.  Place the rule **first** in the list and deploy it.

Then check:

-   **Bot Fight Mode** (Free plan, under **Security → Bots**) cannot be skipped by a custom rule. If Fozzels still gets challenges, turn Bot Fight Mode off.
-   **I'm Under Attack mode** and other site-wide challenge rules must not apply to Fozzels. A JavaScript or managed challenge on your API paths always blocks Fozzels.
-   To confirm what blocks Fozzels, open **Security → Events** and filter by the Fozzels IP addresses. Each blocked request shows which rule or feature acted on it.

## 4. Paths Fozzels needs to reach

Fozzels calls the standard API of your platform. Do not block or protect these paths for the Fozzels IP addresses:

| Platform | Paths |
| --- | --- |
| Magento 2 | `/rest/` and `/graphql` |
| Shopware 6 | `/api/` (including `/api/oauth/token`) and `/store-api/` |
| WooCommerce | `/wp-json/` |

Fozzels also downloads your product images from their image URLs, so your media or image domain (including a CDN) must be reachable for Fozzels as well.

## 5. Other hosting and firewall checks

-   **Hosting firewall:** many hosting providers run their own firewall or DDoS protection in front of your server. Ask them to allow the Fozzels IP addresses there too.
-   **ModSecurity / Imunify360 (Plesk, cPanel, DirectAdmin):** these web application firewalls can block API requests. Add the Fozzels IP addresses to their allowlist.
-   **fail2ban or similar tools:** make sure the Fozzels IP addresses are on the ignore list, so a burst of sync requests does not get them banned.
-   **Rate limiting** in your web server (nginx, Apache), load balancer or security plugin: exclude the Fozzels IP addresses and/or User-Agent.
-   **Security plugins** (for example Wordfence or Sucuri for WooCommerce): allowlist the Fozzels IP addresses and do not block access to the REST API.
-   **Country or geo-blocking:** the Fozzels platform runs in Germany. If you block countries, make sure the Fozzels IP addresses are excluded.
-   **Password-protected or staging shops:** if your shop asks for a password (HTTP basic authentication) before the API, exclude the Fozzels IP addresses from that protection.

## Checklist

- [ ] `49.13.117.118` (IPv4) is allowed in every firewall, WAF and security plugin
- [ ] `2a01:4f8:c17:bb1e::/64` (IPv6 range) is allowed as well
- [ ] `91.205.205.66` is allowed, so our support team can test your connection
- [ ] Requests with a User-Agent containing `fozzels` are not blocked and not rate limited
- [ ] Cloudflare (if used): IP Access Rule or Skip rule added, no challenge for Fozzels, Bot Fight Mode checked
- [ ] The API paths for your platform and your product image URLs are reachable for Fozzels
- [ ] Hosting firewall, ModSecurity, fail2ban and rate limiting have the Fozzels exceptions
- [ ] Connection test in Fozzels succeeds

## Still not working?

Contact us at **[support@fozzels.com](mailto:support@fozzels.com)**. Please include your shop URL, the exact error message from Fozzels, the time it happened and, if you use Cloudflare, the Ray ID or the matching entry from **Security → Events**.
