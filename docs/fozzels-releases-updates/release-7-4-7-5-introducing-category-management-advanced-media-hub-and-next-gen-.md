---
id: '103000408094'
title: >-
  Release 7.4-7.5 - Introducing Category Management, Advanced Media Hub, and
  Next-Gen Anthropic Models
sidebar_position: 14
slug: >-
  /fozzels-releases-updates/release-7-4-7-5-introducing-category-management-advanced-media-hub-and-next-gen-
description: >-
  Welcome to Fozzels' latest version - a major update designed to take your
  content automation and catalog management to the next level. We have fully
  reimag
---

Welcome to Fozzels' latest version  - a major update designed to take your content automation and catalog management to the next level. We have fully reimagined core interfaces, significantly expanded platform capabilities, and integrated the latest AI models to make your daily workflows smoother, faster, and more efficient than ever.
The Next Evolution of Catalog Management - Categories Support

We are taking a strategic leap forward by scaling the platform's core capabilities. Fozzels now officially supports operations not only at the product level but also at the **category and category attribute** levels. This updates lays the groundwork for complete catalog structure automation.

#### **Introducing Category Pools & Dedicated Catalog Interface**

-   **New Data Ecosystem:** Introducing a completely redesigned pool interface alongside a dedicated, custom-built catalog manager for categories.

-   **Unified Experience (UX):** We have brought our signature, production-proven product management workflow over to categories. The exact same intuitive filtering, structuring, and data management logic is now available for every single category within a single workspace.

-   **Supported Ecosystems:** At this stage, the category support and updated pool interface are rolling out for our core integrations: **Shopify, Magento, WooCommerce, Shopware, Lightspeed, and Katana PIM**.

-   **Future Outlook:** This architecture is just the beginning of a major product evolution. Our next milestone will introduce a dedicated, autonomous AI content generation flow (covering SEO descriptions, meta tags, and banners) tailored specifically for category pages.

#### **Granular 4-Stage Data Synchronization & Advanced Logging**

-   **Reengineered Pool Architecture:** To accommodate category integration, we have entirely rebuilt our external system data import workflows. The basic 2-stage sync has been replaced with a **progressive 4-stage synchronization cycle**:

    1.  _Product Attributes_

    2.  _Category Attributes_

    3.  _Categories_

    4.  _Products_

-   **Absolute Transparency & Flexibility:** Each stage is now completely isolated. You can monitor precise, real-time progress using standalone status bars and access dedicated log views (`View logs`) for every individual step.

-   **Targeted Control:** The system allows you to either sync the entire data mass comprehensively or manually trigger updates for specific stages independently.

### Major UI/UX Update: Next-Level Image Review & Batch Management

Based directly on user feedback, we have fully reimagined and overhauled the image preview, moderation, and review experience within the **Batch list**. The entire output of your generation flow is now unified into a single interactive space.

#### **Streamlined "Swipe-and-Sync" Media Flow**

-   **Advanced Review Page:** No more clicking back and forth between individual product sheets. We have introduced an intuitive, high-speed switching mechanic (`Accept & next`) operating on card-swipe principles.

-   **Side-by-Side Comparison:** The screen simultaneously displays dual panels—the original image (`Original`) and the AI-generated variant (`Generated`)—complete with detailed asset zooming (`Zoom In`).

-   **Centralized Media Asset Management:** Directly within the review window, you can instantly execute core operations for the current asset in a single click:

    -   Assign the asset's order in the image gallery (`Position`).

    -   Designate system-specific behaviors (`Roles`).

    -   Control visibility on the product page (`Hide on PDP`).

    -   Trigger manual asset regeneration (`Regenerate`) if fine-tuning is required.

-   **Batch Processing Carousel:** The bottom of the interface features a visual timeline tracking all objects in the active session. Enhanced with color-coded status markers (`Accepted`, `Regenerate`, `Left`), it keeps your overall project progress perfectly clear at a glance.

### Core Platform Enhancements

#### **Next-Gen AI Models & Live Web Search Integration**

-   **Expanding the AI Toolkit:** Fozzels officially welcomes the latest bleeding-edge models from Anthropic into its core lineup:

    -   **Claude Sonnet 5** — Delivers top-tier intelligence, advanced reasoning capabilities, and high-velocity output optimized for high-volume content generation.

    -   **Claude Fable 5** — Our most sophisticated model yet, built to tackle hyper-complex content parameters, deep semantic mapping, and prolonged autonomous execution over intricate catalog hierarchies.

-   **Live Web Search Integration:** We have unlocked real-time Web Search capabilities for both new models. The AI can now fetch live external data to ensure absolute factual accuracy, prompt verification, and instant compliance with the latest market trends.

#### **Unbounded Creativity: Removal of Image Regeneration Limits**

-   **What Changed:** We have completely lifted the previous boundary on consecutive image regenerations (which was previously capped at 5 attempts per object). Under the manual regeneration flow (`Manual Regenerate Flow`), you are now free to re-run the asset generation as many times as necessary until you achieve the exact visual result your brand requires.

#### **Advanced Data Filtering & Streamlined UX Flow**

-   **What Changed:** We have thoroughly redesigned the data filtering engine across all operational flows and integrations, delivering a clean, modern aesthetic and significantly improved ergonomics.

-   **Next-Gen Category Trees:** To support scaled category operations, we implemented an interactive `Tree View` multi-selector equipped with quick-access tags and flexible conditional logic (`AND` / `OR`).

###
Ecosystem & Integrations

#### **Magento: Multi-Select Validation & Advanced Media Asset Management**

-   **Complex Attribute Synchronization:** Full write/fill capabilities have been unlocked for `multi-select` and `select` attribute types. The AI model automatically queries the pre-existing array of allowed data values directly from your Magento catalog and selects matching variables out of that list, strictly preventing data pollution or duplicate tags.

-   **Advanced Media Role Mapping:** When syncing generated media files back to Magento, you can now configure explicit system roles rather than just gallery ordering. Seamlessly designate assets as `Base`, `Small`, `Thumbnail`, `Swatch`, or other custom slots configured in your active theme.

-   **Media Exclusion (Hidden from Product Page):** Full support for the native image exclusion flag is now live. You can upload an optimized AI asset to Magento and tag it as `Hidden from Product Page`, allowing you to reserve the image for secondary system purposes (such as cart layout thumbnails or cross-sell sliders) without rendering it inside the main product page gallery.

-   **Intelligent ALT Text Generation:** Fozzels now maps the presence of `alt` metadata tags across your entire Magento product gallery. Media optimization can be executed in two distinct modes:

    1.  _Fill-In Mode:_ The AI targets and generates relevant ALT strings exclusively where they are missing.

    2.  _Force Mode:_ A complete rewrite and optimization cycle executed across all image assets in the selected batch.

####
**Shopify & Shopware: Streamlined Attribute Filtering**

-   **Data Flow Optimization:** We have conducted a technical audit and clean-up of the filter configuration matrices for both Shopify and Shopware. Only relevant, fully functional logical operators are now exposed to the interface, significantly accelerating catalog segmentation workflows.

#### **NextChapter: Automated Media Synchronization & Gallery Management**

-   **Two-Way Media Sync:** Implemented a full closed-loop integration for digital assets. All AI-generated or optimized imagery is automatically exported ("pushed") back into NextChapter, matching directly with the corresponding item sheet.

-   **Gallery Management:** Added an intuitive queue-ordering utility. Users can precisely determine the displaying sequence of images in the product gallery layout (Main image, second, third... last position).

#### **Katana PIM: Specification Group Attribute Synchronization**

-   **Feature Release:** Added native support and full data synchronization for the critical `specification group` system attribute. The integration leverages our new progressive multi-select validation algorithm: the AI dynamically detects valid specification groups directly from your Katana PIM directory and populates them with verified structural data.
