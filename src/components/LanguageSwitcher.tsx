"use client";
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import styles from './LanguageSwitcher.module.scss';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const languages = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'lt', label: 'LT' },
  ];

  return (
    <div className={styles.switcher}>
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`${styles.flagBtn} ${locale === lng.code ? styles.active : ''}`}
          title={lng.label}
        >
          {lng.code === 'pl' && '🇵🇱'}
          {lng.code === 'en' && '🇬🇧'}
          {lng.code === 'de' && '🇩🇪'}
          {lng.code === 'lt' && '🇱🇹'}
        </button>
      ))}
    </div>
  );
}
