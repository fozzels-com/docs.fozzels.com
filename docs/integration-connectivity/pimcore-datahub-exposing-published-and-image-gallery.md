---
title: '2.11.2. Pimcore: Exposing Attributes via DataHub (Published Flag and Image Gallery)'
sidebar_position: 24
slug: >-
  /integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery
description: >-
  Fozzels discovers Pimcore product and category attributes from your DataHub
  GraphQL endpoint. This guide explains how to expose the published flag and
  your image gallery so Fozzels can read and write them.
---

Unlike platforms with a fixed product schema, Pimcore lets you model your own data object classes — so Fozzels does not ship a fixed attribute list for it. Instead, Fozzels **discovers attributes by introspecting your DataHub GraphQL endpoint**: whatever the endpoint's Schema Definition exposes is exactly what Fozzels sees.

If an attribute is missing in Fozzels, it is almost always missing from the endpoint's **Query Schema** in Pimcore.

## How the schema maps to Fozzels attributes

| DataHub Schema Definition | Effect in Fozzels |
| --- | --- |
| Field in the **Query Schema** | The attribute is created and its values are pulled |
| Field in the **Mutation Schema** | The attribute is marked **writable**, so Flows can push generated content to it |

> A field added **only** to the Mutation Schema never becomes an attribute — there is nothing to read. Always add the field to the Query Schema first; add it to the Mutation Schema as well when Fozzels should write to it.

After **any** change to the Schema Definition:

1. **Save** the DataHub configuration in Pimcore.
2. In Fozzels, open the integration and click **Synchronize** — this re-reads the schema and creates the new attributes.
3. On the **Attributes** tab, enable the new attribute and set its **Filterable** / **Mutable** flags as needed.

## Adding the published flag

Pimcore's publish state is a *system column*, and DataHub does not expose it by default — it has to be added to the schema explicitly.

**In Pimcore:**

1. Go to **Settings → Data Hub** and open the endpoint configuration used by Fozzels.
2. Open the **Schema Definition** tab and edit the field configuration of your **Product** class (repeat for the Category class if you want it there too).
3. In the attribute tree, open the **System** group and add **`published`** to the **Query Schema** columns.
4. Also add it to the **Mutation Schema** if Fozzels should be able to publish/unpublish objects.
5. Save the configuration.

**In Fozzels:** open the integration, click **Synchronize**, then enable the new `published` attribute on the **Attributes** tab.

> **Important:** by default Fozzels only pulls **published** objects, so the attribute would read `true` on every product. To work with both states, enable **Include unpublished objects** in the integration's settings in Fozzels. Unpublished products then arrive as ordinary products, and the `published` attribute tells them apart — you can filter on it and use it in Flow conditions.

## Exposing the image gallery

### Reading product images

Fozzels builds a product's media gallery from **every image-typed field** the Query Schema exposes — the field names do not matter. Supported field types:

- **Image**
- **Advanced Image** (image with hotspots/markers)
- **Image Gallery**

Add your image field(s) to the **Query Schema** of the Product class, save, and click **Synchronize** in Fozzels. All pictures from all exposed image fields appear in the product's gallery, and existing alt texts are read from the asset's `alt` metadata entry in each store language.

### Pushing generated images

For Fozzels to upload AI-generated images back into Pimcore, the endpoint needs three things:

1. **A writable Image Gallery field.** The Product class must have a field of type **Image Gallery**, exposed in the **Mutation Schema**. Fozzels recognises it by its type, so it can carry any name. Generated images are **appended** to the gallery — your existing pictures are never replaced.
2. **Asset queries and mutations enabled.** In the Schema Definition, enable the **Asset** entity for both **query** and **mutation**. Fozzels uses this to store the image file (`createAsset`) and to read and write alt texts on the asset (`getAsset` / `updateAsset`).
3. **Workspace permissions.** On the endpoint's **Security Definition** tab, the workspace must grant:
   - **read + update** on the product objects,
   - **read** on the assets subtree holding your product images,
   - **create** on the folder where new images should land, and **update** on assets (for alt texts).

**Where uploads land:** a generated image is stored next to the product's existing gallery images. For products that have no images yet, configure the **Asset folder** setting on the integration in Fozzels (for example `/products`) — that folder must exist in Pimcore and the workspace must allow **create** there.

### Alt texts

Fozzels writes alt texts to the asset's metadata under the conventional name **`alt`**, scoped to the store's language. The language must be configured on the Pimcore instance (**Settings → System Settings → Localization**); Pimcore silently drops metadata in unknown languages, and Fozzels reports this as an error rather than losing the text.

## Troubleshooting

| Message in Fozzels | Cause | Fix |
| --- | --- | --- |
| An attribute you expect is missing | Field not in the **Query Schema** (or only in the Mutation Schema) | Add it to the Query Schema, save, **Synchronize** |
| *Pimcore does not accept writes to … — the field is read-only on this DataHub endpoint* | Field not in the **Mutation Schema** | Add it to the Mutation Schema, save, **Synchronize** |
| *Pimcore exposes no writable image gallery on …* | No **Image Gallery** field in the Mutation Schema | Add the gallery field to the Mutation Schema |
| *No Pimcore asset folder is configured for this integration…* | Product has no images yet and the **Asset folder** setting is empty | Set the **Asset folder** on the integration in Fozzels |
| *The Pimcore asset folder … does not exist on this instance* | The configured path is wrong | Point the setting at an existing folder in the Pimcore asset tree |
| *Pimcore refused to store the image …* | Workspace lacks **create** on the target folder | Grant create in the endpoint's Security Definition |
| *Pimcore accepted the update of asset … but kept no alt text for …* | The store's language is not configured in Pimcore | Add the language under **Settings → System Settings → Localization** |
