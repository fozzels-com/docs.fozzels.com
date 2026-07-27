import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import sections from '@site/src/data/sections.json';
import styles from './index.module.css';

// Freshdesk "new ticket" form — the Submit a ticket action links here.
const TICKET_URL = 'https://fozzels.freshdesk.com/support/tickets/new';

// English defaults for each section's icon and blurb (translations live in
// i18n/<locale>/code.json under the section.<slug>.blurb ids).
const META = {
  'account-core-resources': {
    icon: '👤',
    blurb: 'Sign up, onboarding, billing, team access and account settings.',
  },
  'integration-connectivity': {
    icon: '🔌',
    blurb: 'Connect your store or PIM — Shopify, WooCommerce, Magento, Akeneo and more.',
  },
  'data-import-and-quality': {
    icon: '📊',
    blurb: 'Import your catalog and keep product data clean, dense and complete.',
  },
  'content-creation-flows': {
    icon: '✨',
    blurb: 'Build AI content flows for text, images and video.',
  },
  'fozzels-releases-updates': {
    icon: '🚀',
    blurb: "What's new — product releases and feature updates.",
  },
};

export default function Home() {
  const searchAction = useBaseUrl('/search');

  return (
    <Layout
      title={translate({id: 'homepage.metaTitle', message: 'Help Center'})}
      description={translate({
        id: 'homepage.metaDescription',
        message: 'Fozzels Help Center — guides and documentation',
      })}
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            {translate({id: 'homepage.heroTitle', message: 'How can we help?'})}
          </h1>
          <p className={styles.heroSubtitle}>
            {translate({
              id: 'homepage.heroSubtitle',
              message: 'Search our guides, or browse by topic below.',
            })}
          </p>

          <form className={styles.searchForm} action={searchAction} method="get" role="search">
            <input
              className={styles.searchInput}
              type="search"
              name="q"
              placeholder={translate({
                id: 'homepage.searchPlaceholder',
                message: 'Search the knowledge base…',
              })}
              aria-label={translate({id: 'homepage.searchAria', message: 'Search the knowledge base'})}
            />
            <button className={styles.searchButton} type="submit">
              {translate({id: 'homepage.searchButton', message: 'Search'})}
            </button>
          </form>

          <div className={styles.actions}>
            <Link className={styles.actionPrimary} to="#categories">
              {translate({id: 'homepage.browseArticles', message: 'Browse articles'})}
            </Link>
            <a
              className={styles.actionSecondary}
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {translate({id: 'homepage.submitTicket', message: 'Submit a ticket'})}
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.sectionHeading} id="categories">
          {translate({id: 'homepage.browseByTopic', message: 'Browse by topic'})}
        </h2>
        <div className={styles.grid}>
          {sections.map((section) => {
            const meta = META[section.slug] || {};
            return (
              <Link key={section.slug} className={styles.card} to={`/${section.slug}`}>
                <div className={styles.cardIcon} aria-hidden="true">{meta.icon || '📄'}</div>
                <h3 className={styles.cardTitle}>
                  {translate({id: `section.${section.slug}.label`, message: section.label})}
                </h3>
                <p className={styles.cardDesc}>
                  {translate({
                    id: `section.${section.slug}.blurb`,
                    message: meta.blurb || section.description,
                  })}
                </p>
                <span className={styles.cardCount}>
                  {translate(
                    {id: 'homepage.articleCount', message: '{count} articles'},
                    {count: section.count},
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
