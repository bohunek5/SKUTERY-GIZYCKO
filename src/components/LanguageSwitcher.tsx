"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import styles from './LanguageSwitcher.module.scss';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher({ variant = 'responsive' }: { variant?: 'dropdown' | 'row' | 'responsive' }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'pl', label: 'PL', emoji: '🇵🇱' },
    { code: 'en', label: 'EN', emoji: '🇬🇧' },
    { code: 'de', label: 'DE', emoji: '🇩🇪' },
    { code: 'lt', label: 'LT', emoji: '🇱🇹' },
  ];

  const activeLang = languages.find(l => l.code === locale) || languages[0];

  return (
    <div className={`${styles.switcher} ${styles[variant]}`} ref={dropdownRef}>
      <button 
        className={`${styles.flagBtn} ${styles.active} ${styles.dropdownToggle}`} 
        onClick={() => setIsOpen(!isOpen)}
        title={activeLang.label}
      >
        {activeLang.emoji}
        <ChevronDown className={`${styles.chevron} ${isOpen ? styles.open : ''}`} size={16} />
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {languages.map((lng) => (
          <button
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            className={`${styles.flagBtn} ${locale === lng.code ? styles.active : ''}`}
            title={lng.label}
          >
            {lng.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
