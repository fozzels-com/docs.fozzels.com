/**
 * Compact language switcher for the mobile top navbar.
 *
 * On narrow screens (<997px) Docusaurus hides all navbar items, so the regular
 * `localeDropdown` is only reachable through the hamburger menu (and on doc
 * pages only after "Back to main menu"). This item renders a globe button next
 * to the search button that opens a small dropdown with the current page in
 * every locale, using the same targets as the standard `localeDropdown`.
 *
 * It is hidden on desktop via CSS (the regular dropdown is shown there) and
 * renders nothing inside the mobile sidebar menu (which keeps its own
 * "Languages" entry).
 */
import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import {useHistorySelector} from '@docusaurus/theme-common';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.08 16zm2.95-8H5.08a7.99 7.99 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
      />
    </svg>
  );
}

export default function MobileLocaleSwitcherNavbarItem({mobile}) {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const handleOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('focusin', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('focusin', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  // The mobile sidebar already has the regular "Languages" entry.
  if (mobile) {
    return null;
  }

  const label = translate({
    message: 'Languages',
    id: 'theme.navbar.mobileLanguageDropdown.label',
    description: 'The label for the mobile language switcher dropdown',
  });

  return (
    <div
      ref={ref}
      className={clsx('dropdown', 'dropdown--right', styles.switcher, {
        'dropdown--show': open,
      })}>
      <button
        type="button"
        className={clsx('clean-btn', styles.toggle)}
        aria-label={label}
        title={label}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}>
        <IconGlobe />
        <span className={styles.code} aria-hidden>
          {currentLocale.split('-')[0].toUpperCase()}
        </span>
      </button>
      <ul className="dropdown__menu">
        {locales.map((locale) => (
          <li key={locale}>
            <a
              className={clsx('dropdown__link', {
                'dropdown__link--active': locale === currentLocale,
              })}
              href={`${alternatePageUtils.createUrl({
                locale,
                fullyQualified: false,
              })}${search}${hash}`}
              hrefLang={localeConfigs[locale]?.htmlLang}
              lang={localeConfigs[locale]?.htmlLang}
              target="_self"
              aria-current={locale === currentLocale ? 'true' : undefined}>
              {localeConfigs[locale]?.label ?? locale}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
