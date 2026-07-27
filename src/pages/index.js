import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import sections from '@site/src/data/sections.json';
import styles from './index.module.css';

// Freshdesk "new ticket" form — the Submit a ticket action links here.
const TICKET_URL = 'https://fozzels.freshdesk.com/support/tickets/new';

// Presentation for each section (Freshdesk provides no folder descriptions).
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
    <Layout title="Help Center" description="Fozzels Help Center — guides and documentation">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>How can we help?</h1>
          <p className={styles.heroSubtitle}>Search our guides, or browse by topic below.</p>

          <form className={styles.searchForm} action={searchAction} method="get" role="search">
            <input
              className={styles.searchInput}
              type="search"
              name="q"
              placeholder="Search the knowledge base…"
              aria-label="Search the knowledge base"
            />
            <button className={styles.searchButton} type="submit">Search</button>
          </form>

          <div className={styles.actions}>
            <Link className={styles.actionPrimary} to="#categories">Browse articles</Link>
            <a
              className={styles.actionSecondary}
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a ticket
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.sectionHeading} id="categories">Browse by topic</h2>
        <div className={styles.grid}>
          {sections.map((section) => {
            const meta = META[section.slug] || {};
            return (
              <Link key={section.slug} className={styles.card} to={`/${section.slug}`}>
                <div className={styles.cardIcon} aria-hidden="true">{meta.icon || '📄'}</div>
                <h3 className={styles.cardTitle}>{section.label}</h3>
                <p className={styles.cardDesc}>{meta.blurb || section.description}</p>
                <span className={styles.cardCount}>{section.count} articles</span>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
