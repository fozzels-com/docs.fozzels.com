// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const siteUrl = process.env.SITE_URL ?? 'https://docs.fozzels.com';
const siteBaseUrl = process.env.BASE_URL ?? '/';

// The config is re-loaded for every locale build, and Docusaurus sets this
// variable before loading it, so per-locale values can be computed here.
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en';

// Spanish-only Freshdesk duplicates that used to live in the English docs
// folder (and were copied into every locale). They were removed; keep their
// old, possibly indexed URLs working by redirecting to the real article:
// - English URL (Spanish content) -> the Spanish translation under /es/
// - other locales -> the same article in that locale
const removedDuplicateArticles = [
  {
    from: '/integration-connectivity/integración-de-fozzels-con-aioseo-para-woocommerce-la-guía-completa-de-configura',
    to: '/integration-connectivity/fozzels-integration-with-aioseo-for-woocommerce-the-complete-setup-guide/',
  },
  {
    from: '/integration-connectivity/soporte-de-yoast-seo-para-woocommerce-es',
    to: '/integration-connectivity/yoast-seo-support-for-woocommerce/',
  },
];
const duplicateArticleRedirects = removedDuplicateArticles.map(({from, to}) => ({
  from,
  to:
    currentLocale === 'en'
      ? `${siteUrl}${siteBaseUrl}es${to}`
      : to,
}));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fozzels Help Center',
  tagline: 'Guides and documentation for Fozzels',
  favicon: 'img/favicon.ico',

  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png'}},
  ],

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Overridable per environment. GitHub Pages preview sets these to the
  // qlicks.github.io/docs.fozzels.com/ URL; production (Cloudflare) uses the defaults.
  url: siteUrl,
  baseUrl: siteBaseUrl,

  // GitHub Pages serves every page as /path/index.html and 301-redirects
  // /path to /path/. Emit the trailing slash in links, canonicals, hreflang
  // and the sitemap so they point at the final URL instead of a redirect.
  trailingSlash: true,

  organizationName: 'fozzels-com',
  projectName: 'docs.fozzels.com',

  // Imported content may reference the old portal or draft articles; warn
  // instead of failing the build on those.
  onBrokenLinks: 'warn',

  // Imported Freshdesk content is .md — use the lenient CommonMark parser
  // (raw HTML passes through, curly braces don't need escaping).
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'nl', 'es', 'pt-BR', 'it'],
    localeConfigs: {
      en: {label: 'English'},
      de: {label: 'Deutsch'},
      nl: {label: 'Nederlands'},
      es: {label: 'Español'},
      'pt-BR': {label: 'Português (Brasil)'},
      it: {label: 'Italiano'},
    },
  },

  // Offline, build-time search (no external service / API keys).
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['en', 'de', 'es', 'nl', 'pt', 'it'],
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {redirects: duplicateArticleRedirects},
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site root (help-center style)
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'Fozzels',
          src: 'img/fozzels-logo.png',
        },
        items: [
          {
            href: 'https://fozzels.freshdesk.com/support/tickets/new',
            label: 'Submit a ticket',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // Globe button shown only on mobile, next to the search button
          // (see src/theme/NavbarItem/MobileLocaleSwitcherNavbarItem).
          {
            type: 'custom-mobileLocaleSwitcher',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.fozzels.com" target="_blank" rel="noopener noreferrer">fozzels.com</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
