---
title: 'FAQ: Integrations and Synchronization'
sidebar_position: 9
unlisted: true
slug: /frequently-asked-questions/faq-integrations-and-synchronization
description: >-
  Partial product pulls, Shopware and Shopify connection problems, variants and
  Packs, HTML in attributes, WooCommerce plugins, rate limits, image pulls and
  multi-store URL issues.
---

## The automatic product pull only retrieves part of my catalog. How do I get all products?

If your catalog exceeds default API limits, the pull may not retrieve all products. Request an API limit increase from your PIM provider. As a temporary solution, the Fozzels team can manually complete the pull.

## API limits were increased but the product pull still doesn't work.

The PIM provider may need to restart their services. Contact them to confirm the changes are active. Fozzels support can perform a manual pull while the issue is being resolved.

## Fozzels can't establish a REST API connection with my Shopware store.

Double-check the Access Key ID and Secure Access Key. If they're correct, the issue is likely access permissions. In Shopware admin go to Settings → System → Integrations, open the Fozzels integration, activate the **Administrator** toggle, and save.

## Fozzels requires Administrator access in Shopware but I'm concerned about privacy.

The Administrator role is currently required for Fozzels to read product data. If granting full admin access is a concern, contact the Fozzels team to discuss whether a more restricted setup is possible.

## My API keys are invalid. What should I check?

Ensure you're sending the correct key type (Integration key starting with `SWIA...`, not a Sales Channel key). Check that the secret key wasn't truncated during copy/paste. Try creating a new Integration and sending fresh keys.

## Content is generated in Fozzels but not appearing in my Shopware store.

This can happen when synchronization fails for specific products due to missing attributes, permission issues, or variant configuration. Contact support with specific product examples.

## How does Fozzels handle products with many variants (sizes, colors)?

Fozzels has a **Packs** feature that bundles variants — all sizes of the same color are treated as one product. Add the filter "Pack Parent ID is not empty" in your flow to use this feature.

## HTML tags (e.g. `<p>`) appear in Shopify fields. How do I fix this?

Disable HTML support for the attribute: Attributes tab → Edit (pencil icon) → Technical Flags → disable **Allow HTML** → Save. Then regenerate and check.

## Can Fozzels write plain text (without HTML) to my PIM?

Yes. Go to the Attributes tab → Edit Attribute → uncheck **Allow HTML** → Save.

## I get a "Website is not active" error when clicking Save and Preview.

This can occur due to temporary connection issues after an API update. Contact support — they can check and reactivate the website connection.

## I changed my store's domain URL. Do I need to update Fozzels?

Yes. If you change your domain, the Fozzels configuration may need to be updated. Contact support to update the domain.

## Multiple stores show the same domain in Fozzels. Is this correct?

This can happen when Fozzels receives only one domain instead of separate ones per store. Sync is handled correctly per store under the hood. UI improvements are planned.

## What plugins are needed for a WooCommerce integration?

Ensure that: the REST API is enabled, the latest Fozzels AIOSEO plugin is installed, and the ACF to REST API plugin (v3.3.4) is installed and active.

## How do I set up AIOSEO integration with Fozzels (WooCommerce)?

Install the Fozzels AIOSEO sync plugin on WordPress. "Focus Keyphrase" in Fozzels maps to Focus Keyword in WooCommerce; "SEO Keywords" maps to Additional Keywords.

## How do I set up Yoast SEO integration with Fozzels?

Install the Fozzels Yoast sync plugin. Ensure Yoast is fully configured and activated in WordPress.

## How does Fozzels handle multilingual content with WPML?

Fozzels provides access to stores for different languages. Create separate flows per language store. Fozzels doesn't translate content itself, but you can set prompts to generate in the desired language.

## How do I use custom product fields (ACF) in Fozzels prompts?

Fozzels supports ACF for WooCommerce. Enable ACF support, and custom fields will appear as attributes in Fozzels.

## New ACF fields I added in WordPress don't appear in Fozzels.

New ACF fields require a successful attribute pull to appear. Ensure the ACF to REST API plugin is active and the API connection is working.

## Product data pull stopped working / I get import failures.

This can be caused by a rate limiter or firewall blocking Fozzels' API requests. Contact support — they can add the necessary exceptions to your server's allow-list.

## Storefront URLs lead to 404 errors.

This can happen with parent/child product structures. Contact support with examples — they can fix the URL mapping.

## Shopware texts are pushed to size variants instead of color variants.

After the Pack Parent ID update, the sync level may have changed. Contact support to adjust the sync target back to the color/parent variant level.

## My store shows as "lost in integration" / I get an inactive store error.

The original store URL is no longer active. Duplicate the affected flows and select the correct active store during duplication. Old flows can be archived.

## My storefront URL points to the wrong domain (multiple storefronts).

Fozzels resolves URLs by language, not sales channel, and picks the first available domain. This is a known limitation being improved.

## How does Fozzels handle multiple Shopware sales channels?

Content is generated once per product per language, not per sales channel. Sales channels can be used as catalog filters. This reduces token costs.

## There are no images in my product feed / catalog.

Missing images are often caused by IP restrictions on your server. Contact support — they can add Fozzels' IP addresses to your whitelist.

## Product images aren't displaying in the Fozzels catalog.

This can be an integration issue with the image pull. Contact support — they'll investigate and fix it on the Fozzels side.

## I get a sync error: cannot write to dropdown attributes.

Fozzels can only write text to text-based attributes, not dropdown/select fields. Check the attribute type in your webshop.

## How do I rename attributes in Fozzels?

Go to attribute settings, change the name in the input field, and save. This is a display change within Fozzels only.

## Attribute names don't auto-update in prompts after a PIM change.

When you rename attributes in your PIM, Fozzels may treat them as new. Manually rename the attribute within Fozzels to fix this.

## Content was synced to the wrong products after website changes.

Fozzels pulls catalogs nightly. If you make major changes, always trigger a manual product pull to ensure correct data.

## I get a 429 Too Many Requests error when syncing to my PIM.

Your PIM's rate limiter is blocking requests. Contact your PIM provider and Fozzels support to whitelist Fozzels' IP or fix the request format.

## Which fields can Fozzels update in Katana PIM?

The standard endpoint supports: name, short description, full description, meta title, and meta description. Other fields may require separate API endpoints.

## How do I enable LangShop integration with Shopify?

Share screenshots of your LangShop settings in Shopify so the Fozzels team can check your configuration and determine whether additional setup is needed.

## How do I re-sync an entire batch at once?

Open the flow → Batch List → enable "Show all content" → select all rows → Actions → **Re-sync content**. This runs through the general queue.

## Can I refresh the Shopify integration without data loss?

Contact support before refreshing — they can investigate the root cause. Refreshing generally doesn't cause data loss, but the team should verify first.

## Shopify Markets isn't showing in Fozzels.

This is usually caused by API restrictions in Shopify — the API settings need to be adjusted. Contact support or your agency partner.

## I get generation errors due to large images (5MB limit).

AI models have a ~5MB image limit per request. Fozzels auto-converts PNGs to JPGs. Consider using JPG format for product images.

## My multi-language category structure is wrong (e.g. Czech vs German).

Fozzels may show the default language category structure. Contact support for multi-language category mapping adjustments.

## How often does Fozzels sync data from my PIM?

Automatic product pulls run nightly after midnight. For immediate updates, trigger a manual pull.
