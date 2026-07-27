// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
  url: process.env.SITE_URL ?? 'https://docs.fozzels.com',
  baseUrl: process.env.BASE_URL ?? '/',

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
    locales: ['en', 'de', 'nl', 'es', 'pt-BR'],
    localeConfigs: {
      en: {label: 'English'},
      de: {label: 'Deutsch'},
      nl: {label: 'Nederlands'},
      es: {label: 'Español'},
      'pt-BR': {label: 'Português (Brasil)'},
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
        language: ['en', 'de', 'es', 'nl', 'pt'],
        highlightSearchTermsOnTargetPage: true,
      }),
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
