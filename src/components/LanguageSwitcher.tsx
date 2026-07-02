"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import styles from './LanguageSwitcher.module.scss';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher({ variant = 'responsive', compact = false }: { variant?: 'dropdown' | 'row' | 'responsive', compact?: boolean }) {
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
    { code: 'pl', label: 'PL', flag: 'pl' },
    { code: 'en', label: 'EN', flag: 'gb' },
    { code: 'de', label: 'DE', flag: 'de' },
    { code: 'lt', label: 'LT', flag: 'lt' },
  ];

  const activeLang = languages.find(l => l.code === locale) || languages[0];

  return (
    <div className={`${styles.switcher} ${styles[variant]} ${compact ? styles.compactSwitcher : ''}`} ref={dropdownRef}>
      <button 
        className={`${styles.flagBtn} ${styles.active} ${styles.dropdownToggle} ${compact ? styles.compactToggle : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        title={activeLang.label}
        style={{ border: 'none', background: 'transparent' }}
      >
        <img 
          src={`https://flagcdn.com/w40/${activeLang.flag}.png`} 
          alt={activeLang.label}
          style={{ width: compact ? '20px' : '24px', height: compact ? '14px' : '16px', borderRadius: '2px', display: 'block' }} 
        />
        <ChevronDown className={`${styles.chevron} ${isOpen ? styles.open : ''}`} size={compact ? 14 : 16} />
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {languages.map((lng) => (
          <button
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            className={`${styles.flagBtn} ${locale === lng.code ? styles.active : ''}`}
            title={lng.label}
            style={{ border: 'none', background: 'transparent', padding: '8px 12px' }}
          >
            <img 
              src={`https://flagcdn.com/w40/${lng.flag}.png`} 
              alt={lng.label}
              style={{ width: '24px', height: '16px', borderRadius: '2px', display: 'block' }} 
            />
          </button>
        ))}
      </div>
    </div>
  );
}
